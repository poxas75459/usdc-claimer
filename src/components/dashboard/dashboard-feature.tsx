/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "2s7gmvKCDogA9AViJEJhqC3MoLg4TUzVVZdhnqvFpxLniok1s5wrVCyECKD3CiDAMmxUt44XKU6k93jRyvhZXZAn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jEekuw9F5tDyL6RxYcPggyfTNx5LFv9kYz131Hx6Zv7sZshcyutPmj7kcnjQ9TDRK4V97M1EVnfMU54g9q3zRGM",
  "key1": "5pWXFmXrHhAvCA6CtV4RBZDMtcjv51R8jemrPJnYFA2EGYg7JRUSYuSNJJTWWkd3Lch6LBvz3D16qWdcAssWXE9f",
  "key2": "3gZggLNLSVGtVHYcxiMDqF1jhRwTYyqt6gqKmxc2mx9pTGTvoozTBxtV859mJYXqHe4Hamv2h7NYHCrzQiJ1jfxe",
  "key3": "2PKa8s2QwzQqo7wbpmvhHTGCFvwRBogCJn34WmHfzCicQ4uRDxyJqP6urqDNMdurY8xkJnhWXt2xdBw3YKoxgtFG",
  "key4": "4FdtABARYEgvjJHakgDDiKx6KygW9farQWhfPUJEEPwW4d2KjCtoL24A2vzQViL4XQuebYPz78nTeTNTETbNMw1w",
  "key5": "6ZFqBMpbLsJa8FtcR1uaK2FvKqAX4GSgQo23Txy3azX5HodvFCManTBhSTLnNHxWCL22F5AV3DaDRtzVA32qiva",
  "key6": "2ZnVqCgu3T7JV3AbeBbgWbcgFiKraJ22rPWzRdLNnopztQzky9NaZjc716ajj531TeR6nmq95S4vTiMof1YPhVby",
  "key7": "29HT9qzTeGNgSqoiAS4oSSPSWe4MRQCeSUFmTPTByGJntqj9Nkdp1Sc8HHQ59LjWRy3m4CegaxbFNBHucP9QMyRF",
  "key8": "62r6Sx6EMPejS4Ur5ZwEM5nPs8AxWCFXeZdsjEeNZtMkui3sYswiZbW3QpdeWNxjUDVygECDMkrcuhCPXD8tvKkG",
  "key9": "37Pm9TqG2usC228NFhYhGfJsKGaW4kTvaeNdwynbpM9yHQQKkdJzusVzBdRJ6YBH7ugVfG4e3qzC5Vk8Z6VDkufM",
  "key10": "eSxPiEyddoBART23U1SDaC9p122RRBFpqXtV4rHQJCTVBUPhhLDYJqqxuAtPdMTRvHWRrTCSMoDMx6sNhwDanJa",
  "key11": "51NzFpZJKmUHoAVA64eGRk1FNrXXKzuiFpLaxyBswobPJddysEciJFGV3ywMSs4mE4WsqJ8Qq7HzGp6vrcqmLv7r",
  "key12": "2GBxFF1JocsdwSfP7yN6ssRn1U8Da9bsVGVZC4bL6NwMzE3Wyvq1Xks9fmoD4k3r57GK9zyEx86WX8vh8i1ZLzkd",
  "key13": "5wwo8r5xewc9BmozB8EFCPA1dMGGew8AYDS2s2Nu48G2YzPYzTCxC2vD6tYSHCwyznnemsh5LG85jSMynpHJbVVh",
  "key14": "45RVypAqqcRFqhznYifhhNL1vhB1HbE3JpWhMbK5sjEq2RFPsvknoNj2oX4BoTqZvxmo6T7giPKhqz83p1b3Wdx5",
  "key15": "4xTzAKqdad465XMbGWiExv78rNTKWbCQesp99Cdq1ebjzhbnPUCrAfvWxAFauczDfxgR4wVHgCehpAbZm2u4zrdY",
  "key16": "JNwGzpXmMnKYrTLyKThxTnk19UBFpNTpFAaZnRaFwby9v4UfT65RjKuWWZQtDmJQvvgHHkbMMPEaQzjJdSEXUmG",
  "key17": "m9BFw8DuoZ3A4kZWEc5bxEwjq1yxCCjPDrnVeDtbPq6MZH7wMkZ6UCNLJ9YmCXEtxT1Zz45UHXhpyjoL2xdXMRj",
  "key18": "4vkmn9SYpx6M7uQ3KL5RJDzVb2iUhqQXXSXEtu5BhGsNKsmWXsehByCTVzBDVTRLK7JDmmqShTHehkUgUHFN2P9m",
  "key19": "5nwW2CfdsWHA11hiH5ARbnv8bhoJi74xFspniWjjsJ9uhYxxcqVKqwyV6gjFXr7MT2bfiZyeiiaX83LFJGoAcJUt",
  "key20": "5xxCzp5PegBzSPQjeZqgL4xc9ou5PZt4cpas85hkEBEFWcU5c5SKHVum7j2jHnfoRj9UsTqHUpNY2iD2Nf8qyicM",
  "key21": "3yf6jhAc1CEsspp4cG3yuwsTQb7D7dLnMbq1xSjHZm8vDeBfthvCboLDnCa9LaY4hUyfSpE3grPwsfNxrkLT3tDh",
  "key22": "2eBkyJqX5SnjZ4ViDNjLksg6mLjqCF467ndzT2uN33haiGcyaPzoaYbc8WZbtfL8pf39Rt9EvmgB6dx1EgBdNgZH",
  "key23": "4DKaNobZXp1q9smSwZ7XbdH46hWJSWirdtxY7VbJw9zFBStdJgtcLCvbHJzQQWDvApE13Nz5Wzi9TcUfdgwer1tf",
  "key24": "3DZEL8gBQaCFpsLebjRWMju8rTNRWXYRu5UXgetNkcWyynAsPVm36BCGL4sKczfhaJnPK5n2RFJuqssmYbqFrZqc",
  "key25": "4NQrzgdvzX8EdgEPAwmqbRwfw8vNnvr1jzgFbj3cdtdaY7ZfvQ5ArMDpThsFzMt8z9CVMxBBvMgGeNPQmqXA3nYE",
  "key26": "4zWSBLJtGQc7WMF4PYHmDzj6F1u6wQe1ZnLNTJw9cDSE9Va6vDMpj3NdYKK83ubLgV8PdNU5yWNP3MPVKnQDLc95",
  "key27": "2tY4n3KjyjjEiJ17Gcu4ccw3CqXHoDwGFrRQRYSqhGRSMM6mckksHuwD98UxLHyPo3UqkUStPTv6KghBnYuPmr6x",
  "key28": "3DWB1cZLETu3SdAoHEhVMBvMpX7dg3Vq7UDw6Tmory1ZRSHYi37EuDA3WryCLWnCgwDNr5T4rVEiKxvMndLUY4q9",
  "key29": "rMLPdSQmNxA5Kd2j4fES71P4p1NVvzME4cbk1bULuPZP4wMQDfoQAbARvPRcWKkvLKK2Nn4zqxGYzAxx2Uw2o1G",
  "key30": "5tF5RxBSGz5BJg2wmt5iyPGg6GjMPHNNfTTpoTKe9iSED3f6dDfVJ3JDxFi16q4v6UuLD1oSaPXqXkdiGUVrzAtj",
  "key31": "5i1P4UQYA2W5Ddby9oaxCCHEC1qLG38sBGer6CiKdDxXgzL3UCbd2oNugdhHY4FyqSHtqWogwaLfcSLW7F35i6ty",
  "key32": "3DmwzBqQ3bxq88p8cLL5S2b1pBefFGwycEj3iCbQ65Yts2xzkZsrMi4ddUcmEVyeVcA6ywKYh6SGNWa7b8u3t845",
  "key33": "FMa5ddfoEjKEKizUFUr1CpqEiaGJsrnMMRLwJtaUb5pngUERXPLA7NfwLZNjpUrWUA3ARkZfftXEUovTtWqap2G",
  "key34": "42AaZmqcgnxhhWyqJ8gkQ991aJ6bFnbfpDPmKenu5ozmtnT7Qu3SGBoQCWdynSWgPhdYXmqJAstrKWjdNfDybC3L",
  "key35": "4QQ8jHD4GkozzWrnivSiqRB6qCRrHkUsK7J85tZMXVADZ8E9Z4VniBsjcWKS5AbX1J36Cuan1FcUBpCD2HHpXDgF",
  "key36": "4BdR6VhLkrSWsVeVBzUwzEn7FeTTvqzeKX5Af4FzL2Zmx67S5SC5QdFwaPje9CbjDCR7e9Fv396kioLYXfdt9YHY",
  "key37": "5xB1SGDVEbK3bPRMAVYuQmfDvWcBtg6QgeuvvDt27DY4FovWf9yi47bHmtthaZuvAw28taXHhhRic2z4fwZgZaHy"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
