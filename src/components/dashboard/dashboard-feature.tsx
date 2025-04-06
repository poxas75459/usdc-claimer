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
    "2FKzSVUE9wqtPn1BWkz49XtREUyPcY79tyHv8k6giqfgthNCiyrUQCjqxMC8yPyd8WmENPBBPuZDUiYacpXWxkZa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66NTG7DqccLWkf76Tw1tLM1x3fgCLyeqBecNQ5pGXnNHk4rvHG779X3C68cQvY8k5DdjmQhYTCU9HEhnXKAjCz75",
  "key1": "41MpyrVgeuzmqhaxTA5o7DBMBz2FkzV2fVQJguwDY5bdw8jJziowWaHeay4gSpfxk4MvwTeWAEfhv2BGEiBKSEHR",
  "key2": "2dARtRCfxJDYgVrHh6rycQHusDAwQgrYczSZZU7xgR5TAGJQfZyqZnugnpzgM8fD79yqDeeVBziCwPrsx5oquBBe",
  "key3": "5be5uSEegqktck2Z5Uw8XXKP4i3wwfQunt9JrTJhwLEUpfZSv6cugkPLuXq18uzFvY5JnLNbENFvYhuX4X8CaNWo",
  "key4": "5o7xqsU8VxrysT71BUAS2EkvMcsQhVaYULCvK899kBwkS2B9qqzcecTiBXVRFDg5kqtA8VyuWqkWPypCADCgj2e",
  "key5": "DAjaVD79e4TtdiUE3Ws5Cc7BNWHMPmh4qYPp2TfPVgX6UPmJdhvjuyjPu1RHtbK1JPUR4fZLdoEhinirs1tasx8",
  "key6": "3mqC5WCoMvUxWh1h3GHfNuu2Ksi6cANDj9egFNW2F73KyGtEQVum1FszJcVDRt8rEhmj2QjNKqUvPT9XCuHamnyE",
  "key7": "24aGxTxTnFqMm3vVC9yUFmq91C1efCFkRfaertgimuxhVQ42h7MpGaQGdZA2EaDKpDZhaeCWEDKX3juJdmotMHSv",
  "key8": "2NUUrZzPDsTazVPEhL2qtUGp1QzwVqivYbMb5gDN48N6GTZ8Fnm93UAbFNmfvh2RJBV7RgSBVfu8YVW615WnBYgS",
  "key9": "h6QhAoiE4ypTLkXST8pEGoogbXevspaJTW27mhHALChgDYPHwTZYiaQy8QcdL4SEnHZaFXeCe37mXM6kvmxRDMa",
  "key10": "LYudErMaRmE6HgqZyLVKuz11h1KpgU1RR6uwK139jeiF4mPbDULeo5pysPU1vRMa2KcNtu8HwDCH6doy8AC4TbZ",
  "key11": "5u3sa46A4nheME7QqQT3DBc3myETgbX2bw9tgGD4K4yXQmHYBbjYi7Zp1mpZFRLGm5NaStKyzQ3XuHcXZ3V8TXvM",
  "key12": "3Bv2Fogkcr2RaxhzGxPtq3bBidjeLST2zxMqaEdape416GEhLG4LAtiNHHX3w74TjCGV2WuCs9SD8nmL5L1u9r6B",
  "key13": "3ZyRF2untzgkTQSUaqEJKxHTYi3ASjqZ5ADwg2MssuCRop9Y77ibpn7nYTfKyJzmFqG4ADjUxXEEoAYRB3NjxYiX",
  "key14": "3dNH6w7v7yMFWLBPGTCEB3J2CNUqr6cJrPUDP2FEXUFBAkbdW3GSeKYnqec4Dzm8DRKZMKZgCXYUQF4h3p3u87EV",
  "key15": "5qvAimCjH3FLkiAFRmWi6dHsVQxLE9RwLs8u31m2y4NEtuG1nRDvqqswJdTGxxHutNL4sjJe9S1sbcF5PX7rGFWP",
  "key16": "33NkRNmo5CmKgVXnHE5RU84aBwwyJdkCoDuax4W6HDCHkDe5K6risrK4G5pBuNJWMN22FhXG81wSuusXZhCJtnPB",
  "key17": "3aoQhRuSphCrmYEvQs9UDzWkWqvdRsA4qUNfDaqVKYVdJY6Ec1SACkEmG3KrBFXZE9W8AVTkMJifgo9K2CV3FPAM",
  "key18": "62wEgL47V9q4cVS9h9kYLrF7PENp9p1w4zFfiqSi7QpLfhGTmqnVHYfGA9UTS8C946E1YmTt9aZ3FkErQpdJywdf",
  "key19": "3QY1VZnpFYDCXeVHtUee4WyGacgz1p8eKXdDNsqqAabii2u9VXJwzyC2Xzapq1dqF8BPxXGQQcSYfU2sXrWx6Nyb",
  "key20": "3ejuiFHi2e6Rr4Hukkjbr8Lwx6bn8sTJAGPNpFw4JfFJM3SmtAJAiKGVxR6pDj3nA5g5bCXjBWVMqsUudFp1YPu",
  "key21": "2oZ2V8suV4ArXTEek5tZVsKAhDK7EHMZEAR2toEPsLt6oxdp9P1jUm9rXmNzY8rSCcD9awZoE4C9zEfQbMSUhos2",
  "key22": "47bdxAAzkx5hZHc4GLvFcUPuuFa41KmmtdtTDbnt9Eor9gYVyGkoTafUQnx2CBBSxg3bBFmK54fTVAcD9C6NpEF7",
  "key23": "5psGsrrPEZmqXEJqaXBdS6HfV4XEPWGycqShpy9GBb6gZGMjw76xsKrCMveCeMgVvhDNWrDxrgcg5oPS163DC3zp",
  "key24": "4ApxnCfy3EcfFSoDPWydPqw9jEUuTEiPZFLyoUM96qMKoAJGMBVim1ovWt8taxNSxGBopeqJQgr8iwsWNZFVvdih",
  "key25": "5Y4wUzAmgsZWWuoZyGgaK1UyXYBin3RsQvbjk51cnkrTmViUKTjV4ULgJtsK61H9vxxj1uKzVduymqfTCthoLCYM",
  "key26": "3yN5uFwu2ztXZPGKEHG8Sov7kHzrDAaSWisfMoFGofZxJw5AMpVKmTVUbYmFCvWgSHHywkBEVDRsfWFHLrLMQ8jz",
  "key27": "8TCbE9ixMR15m4DjQoL5CP3721G4714DwYtXp9QS7ALQQuNrf7xEKiXP5U54euoaVykHpwLRLg8NiidDQdeu3LH",
  "key28": "4J7uT3KzBY4om2eeUBDvw7sV5toC1oApJkZi9kqH9edtG2z4tz9WmdmXTD5apwtreFZvpvFKKYQdCsGGs1BMdoMh",
  "key29": "2Heo36gS5t9KhbnDcdTP9wGyDq5rBmdqFtArFc1bAMivVWWt4rhNgtXS4pev6cqXzq8QK3Hv8gR6KRGPVkL6VvAi",
  "key30": "4Eu6PFWdRmb5giAgx7XCAKEnrX5EA2uK8j7DDpGs2oMEovBaeQjDwJXwQSmeK16R9x4U2DzEUnKFYkhqNAaZbyQQ",
  "key31": "4XTwJRUhUci85KYFAyG8LSmtwxjsRwcRdVoEZZFCFpzS3fMYecCPrsfyDwrYekE8E8NTxYkJgLdqz7ckDYQ9oN2C",
  "key32": "4CMRxZiTWoGv7589eynz8Ho3syyeB62LBMENNEt9y8jWJ7ouRBW4ezBRGL6K8BZ1dXWn7uvwjWAXdpJvApmEtb9Y",
  "key33": "thuycNuZ9ASWjtdCHNVFq7oEMsnC7Ru54guUdR7qPZGU3DKVDAUSPUSrQCoACUcqqMzoWTBcpau2fLgb6f32G1q",
  "key34": "2KevPPVwWn7tFiJ1ZFaVdq3eDdYn4rJdcLV1uFtHzNmbVgj9e9QrieqZCETFo8gpUsyVoEFfaKuNjzHCqcbjLmRj",
  "key35": "24Vrz2MZnvdPyJD7BWC9iafp6cNkk77ZhLeZ4qoqn9n8MC4W5Z5hTPBAmrpMsPKfrjfYqUEnzXfQmMBMPcrNazzd",
  "key36": "47reWUxr52TFg9dmehP4rva5qLCNSBvVT6ebGF5nU896Yp2jTRTCwFvGekpW21xBRfEQTSKVy563gZfyzKVfpB9Q",
  "key37": "2xVgy1ybjiFGCYm4xCXT4JBRb2vJf1dgMyW6FB1HY4uDT9P6UeocfhCedFCa6u2gX6DA3AuJfcuGYDTigQ61b4dx",
  "key38": "2bwNBeFFrTfpwoTSPBEhz7KGYJjCKZQW7EhZGgwe3tpwR6iCEGp7Bqh41ZKmx3x1ociuwDZkUKPi2ibZQcaKWJF3",
  "key39": "5dJRLhHn6XN5B9ubnLUjdsPcwy7xy9TuurwK9MjLP5GraLP1KZ8jC7YtZwdjbhUfdjKvq1brmyWoXu4WkevqFaSB",
  "key40": "2tv2xzJKauF3bCkgHxTv1swPPcbvZr4qjZwHyCaqdsKYu6ypk1oYurr7UzGDrxy9WmdLTQE3Jamaj5Lhw5hzFi84",
  "key41": "2x619JnBgqmU5ExDGCn4JvptnDMmiiFAW2ZfEjP89kNowHnQUimkGjWkiBgpTxmKk3Tiov7WjSaLJ4u8jHGWn7UP",
  "key42": "27akdiBz5w4ejrFutFqRbMm7FRvJg3mUbwGrFGpeKPz6YhfjqNCTWR6Ci2RqYzorwguzWnT8qF7So3CsyTCyMj41",
  "key43": "2vLKjGY5ACe3Po564frvffMByjBWGxfnWEJL2RsnYgByvPfJBE83koK4Cx9Dq8MoGS9d2awNrnswTSPyXMnzArqf",
  "key44": "2PHUTXCgCN6BC3L2T5DS4WzcQg97XPvXX4ESaBNHzyDScUwerLkkxq4KkT8a87hJNWUbdxpvaHtY5gKwj295WALn",
  "key45": "5W9ybY8dWmy1WVNcSKYeC8iZqSy1ALYXLcmR4ncc5daES4CRBaYkNAJ4fRo2K8y8RdH73jAx8dXtmkrpZBtmEhBa",
  "key46": "3GWXK4hoGXZmo5n5kY4zjfWnxUjpzuuBXtnT9cpkLRLCfr54jc8feU6y94ePxoRKB3Jgj9ic9MpRSnbRxkrufYYK",
  "key47": "tppbfowjuoVpa4ZbQoBqhsD4NPA88ww26R3D2356rq4GMxJCAo6DKNq2zZmuuSSVZG7F7V6fas9kgkaUqT8SB3N",
  "key48": "dZ2BoXPHKNRTMQZCN4yG38quWrhmyqeTGaLMwSUBkzPwhA549Ltv3xfLw5u8pnkhgWGk8gy6y6wwzBngUFNdkjq"
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
