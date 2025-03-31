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
    "4MpvzVXMd6VQ5qhxUq7VXCqt2CF2WskvSwQscrYPFrFJamraP6UstLuCLByuqhs5GSTUshw4ps8TVNPwVFNKUNtJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3y4D1ckWEpQaeBPQy9HZpsQoFwpcE4UTvBGfNRFXHkVgLeVV7sgp4iCS5DZZCFiCkkTiDXonXB46yuRnruyisxHm",
  "key1": "2TETqBwhLgxVzGKqsbBLLmjPXY8tScUt4jt1nh2VCfVejHfPD1UPqNbt5BucuqWbbDWfQZj7TDrJ1uQXR3YTkch",
  "key2": "2z2cGJDQum1JxpBAmMoiyqn4YVAxtSDuiQX8JnkjgZhP1CCQpMd4EgTsL95bY9DYYUeop8hUmCnQhshLmHeotTDy",
  "key3": "3vaqzfZyZxzSekjV6VTrrXGaGr2sdjQcRM3BXyozZ8QedMyw4nsz8jr2dqn7NvE4ANBgLoWssMasZsHnaMokJuG7",
  "key4": "2tF4UDcc9hsZS7apYNLZv554sX1FE5NZwd4Gynm5QQXjYvF3dDeTaEDGYaAHDaL1dWh75G9SQ2QQXpnXTLF9UQH2",
  "key5": "8aki4MJ91eThLAuUjDV5VD1vVQoSr1YuND1wf9yDMgCWuPGJwRvxBsVEV27yvsLMdFTVT2MeBbo6uqBr5uZPciw",
  "key6": "5ZZZZegQURE2NBNdtkY5EHAn6VRozZNqsFRoJFAi6WTMygyz8MHz5JE3p7nJHzDTJXZ26ZE95yoJrwmv5MVaMDxD",
  "key7": "3GEexFPG6rHrhrmiMyuWNqgPriidc1FfoT9mG4yQ9fzQf7PUxczj1vqY2fP1LA5HbKsjLXgWRvFGvg2t5xxCYVfv",
  "key8": "3j3K5MC7j5MRJV1dPTnszQ2sMYHpTxZ7JDn9zsnPfL9euESdmNeTfo2ZiXP6zeeVLTYAQEgNwj5on17U66EjCMVF",
  "key9": "8W86GKPAt1LTCpJb4LCgyGs4DJxH851LDwjLFGekmZdLvYQD7Xi5knWR6xSBgfdULPP2goanJXJ9qYoDGGUd49r",
  "key10": "2nKk4FMhwMULKn8yadZNh58KhgpNGS6JePngdLv4FTN1ghyx9Shp2vGwNnkGp642Kz7rhGx1QypMfphVpJy49oFh",
  "key11": "4kqjVG1fQkK2p7KPhEL32PRXDo8LLfe8AjwgxShUEGmaXcrPqpLkE5SLbqSiJTxBGmNQEhdJKGxUBz2arJqKhzgG",
  "key12": "dDbYv5zndC5aotqiuVYQWWHDFpWUaa81rRaRZMzcsRS8fELrP8BFoBXNT3jHFzC1oqgGD53CygwaVTdSC7s1L9a",
  "key13": "3Y2uk1urRqerB9BpFiSUcXC7Yb3mDGtKsLh9NXnUaoCZmXpC61R55jY3pcCezf9AhJ4r5HjJ4SeJEPcSnkBay2Ph",
  "key14": "5zdA7yyAxQoevJcCmSmcM6qpBa2s4DaGmVfXRhLUaUPPBRdb9aiD3PvMb4rF8R7an6qD3BsVKhogZ2y7kCDiyPJa",
  "key15": "5xwqHZNDCDBYZGYZK3jXfxs5hbME4wz9FWLPYxR2S3WhEwipGwHm97gY6P81jKqXhS2TmoEF2qvPHU3aQsgKDMqj",
  "key16": "4tKUk99dkpCx1GG5FmfQFaG43XzrZAfoYFtpFr43iQhSXCQahFqjJRxzUtXguRf3eUFDE841jUoZoETprHjJQnc2",
  "key17": "3fowSneZ11MQDsiCLkJtq5TxgarLXSFaQCPqoKERbrwW8EzpB7iChR62X99Tw4PepDaE9fRgSh1kNrX9PCv3Avce",
  "key18": "7FRCzGTfoqUNDotvkQS7zMWKkNvGqDFeXNJ7F8MAYWKQVUWKSKofevjYMpE134Xhs1ic1EPSrenVPJYqEUhSPdu",
  "key19": "3SxHNyFhMRYGw2YsskeMkYsZydsV1aqJaQY4Zfn9xBYJFV37bjaNZiDyfkndvmk6YcvxhSsKL3dyWwt5Ct6uBnLu",
  "key20": "47xBVQ5zCAE5C7NqvtZd3JsvWsuD5BzQXcYQ4onNWAZ4P7ZCzhQcPKHz7qdbBiRtMJovHygVrh3ef7EbwUHK4XUg",
  "key21": "3uUNR4iZhFZPbEnPNXt8J1R5b7cQnrMcE4icnj5uziRmmr81r9jaSKcnKGyvK5bt4CvY8brv4Z8r1vojEXHmXd2N",
  "key22": "Pxx42Rdrik2XBSaJXvGq9i5SvnWXF3T9krxdyXNndG9gK5Wv4wN64LfnXL3Vew9GRwnBGmNwVawUiFs4QypU6Jw",
  "key23": "kjBJb4gYjkm27HqgmerDxpH4nS8JFYfHYkbBi8prPuzuFgPF7ePtrW6dSurz3gUBtXFFxM5qeuAjb4yrSb5cR71",
  "key24": "2kaRm2bXB2PYBAVXBhSERtEwifXRSYYwmd2yH6pfpPjNwUCGCG3oHLH3783c71KFi18ijCennuX2qbFxS5wjqJxA",
  "key25": "5r7SxHu6aves6L4V5SC9hfa4CCgveeXV2G4Ax1hUXcn5qXmb7tE5Sdi9NfjxBJYgtgyLXzEhjwR4ZeSN2WorGPY9",
  "key26": "2ePGTQ7JD7a4exy1B85SXorndLpXGx4HFddZj258HhZSGVh4fe3e1NZ7dSjwNEsj7tU21VUuE47z1dZnzeG7TPo6",
  "key27": "5qhoHDLqMqoTAxxgjsAtSpPRNZmx55TRqQmatW8Fkeck8DV5Nt293DQVWhHRQPZ9Ydp3UBZVx7Mps2mD1KZwzMUu",
  "key28": "41eaewgfPM1KLNYfJ3APnkT2EQPGy4wUt8LWZ4LcCXhXDjeav7keHda9NaR9zR9WN1sEWT2uDHuJPusYWXeuqg6H",
  "key29": "MM4umZVnK3dkM47SG5D47BuFrXVueJuvGueex2RoAWpFMshjUUJjSZ8U6wC8vpvLcdhDP3PAkXmyDVWNjdZ34tG",
  "key30": "4xQWPrx2MD33Zfr7xBEh4yVwKrEZLeeTV7GbBkWXsrW5oq4LCPTPocbHHrrMEAKtoAkSJCcVFKaAhYo6dUtjnBX5",
  "key31": "3e2LH8Fje4j6msjJjT5P72DA2G7r3vxaoWHhNFnR5f1HLNLqrVUFMRedxgxpLVGKdqCd2HTqG2jCdNAyrwJZVtfM",
  "key32": "51JD6XVJh8pyEPoc4Cu7dQk188yYbYLkxaJ2SrF1HDFWuaCCbnRdExLoXuqmHvHu42c1DdWdfWAyBArF5B7HpR5o",
  "key33": "2jQgB3UZMN2vAQYfigRLQGnMTxWhbP8XQ3xTFHFXqbUd9ooDgN3KHRhBcLrQPx362xUyArUTCYJnmRw57PArNH2u",
  "key34": "593JgaZ8AWFTQg2FxCiHLntTKrVyjCD6GQHxgN4cmKAwvYw92e18BNf7nGY4jkqq7tsWGte8gZf9tDpFqfSCqDps",
  "key35": "4Jj2hwgbzn983txub6RpshoKkpGTy6Z14mRM53xMQMX4iPjgN9KmCeEXRZCTQKokgksNMxEKV8N245MJ9BtpDfUy",
  "key36": "4WXZ9yiSnhHncZVworhAk5KwUh4H1WZPt2VtGyF1GWPFc3rzwegevjVNuRP74g7L5ikjnm5V2e2FJB1D4Y7XCPKm",
  "key37": "3wzYZBrfAWqmXEDdh7TA1r6Kk7txeSkMFdKtGdfyGVsiQhS6oCxdTjtbHny3TRFw1t8fwX2qJKk9itxEkUQJoZf",
  "key38": "8Hr8n32HbkVAhRZbKu2WLzaVwmKS5FERdHgDJdbGXhzdvLZtxcUKAsz24U3Kkjinzed34xRMvWTTQ8MiL4P3eTr",
  "key39": "2ymNLNSYJukpTXtNdys7wXFzsScBZUP2B5m8Q2d7Yccta89Ac8qe7h5xuJk4zyRq2psLhX9mWopaE9NnGxTmhciB",
  "key40": "3P1LnJJyVk8TqDaYTqFEkijPTCm188kYHy57XGZVqzrr41DNebNjMEQXVTeisj9qFNAVsFcyMMgAZV1RVaPgnRm1"
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
