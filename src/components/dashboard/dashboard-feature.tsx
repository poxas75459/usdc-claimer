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
    "4HJ91qNTtqghSJtbpbhh7C52b79Y6eENuQGKAJdoZX9f9G1iCyPkePDSMKuMRAKai17Ei2phXBfh6dr7mFc1WFEX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mLgf9TfEiJMGcTFzWyHpMrKyU9LiJjR8TihFDFYRVsBqiMBoXuk9Xpa59ZUbVPA4Pq6QYgPUgVtnHE2DB97L2ue",
  "key1": "5ZELRihnFnspUHJMFN2Z19RwUyFEmQgZxZc6UXAunb1TZtPj1vNjsK2h8AKYQqiEKy6ziii3BkwkKJacYdkAdcdp",
  "key2": "3Wg9Y7uczyPLJcVbZmJtbJQXfmYsFNiZoTYFv2VWRGnzLtHTqKK6za4ckeRNTwrep555Hidxmk6JzLLz663wohps",
  "key3": "4ksCdD2QmmpEdX4GuSGUjdrcRRMU159vxvAuEMnJruzRmaFeXCNUKPKjLKt4sVoCPdEG9BYHjGwqsGaucP1j3UWa",
  "key4": "2C1WoiNb2BDJzGJJqQhmPQFuGV1kdskrSNfYAzwAzSFEf9QjH2V1Ektyq6WWk5Bie7Sp9RbBGTpwzEepDWGDMs46",
  "key5": "36hERyPZZMRXjvczQNtHbn6c92cJ1KGpgPfqCjGUPgBXNCDUUv4BUGEkC4JEgtb3uuK2S8pWkmnV1qVs4WsbeEQb",
  "key6": "2geWxTqPAou6R6jK5gpAtZ619fhu2mrXc2eo7M8zFWK6YcNwbSLgK1VfVDKGASTxdL9QvVm9pYwdbsFLM9wH32GG",
  "key7": "2fMm2AGcaH6JysK5tLW4WoX4GN1Nrgoudqk6TxdwY9ui3rNDcXPb9oVhMsBSVAKbwBuVrH4hjy6TbeP4sWrxe9K1",
  "key8": "2rTCz263fDbdpj2C3eYdKQiXVxZM2eK6tFjw6XawAtb4n4zKEF1JFicQsqfMjvja9p4BBiJKaAhjvypixkf134R5",
  "key9": "5MTidH3qzE72KYFxkVGteaB53cix2phDC5REZV7NkvckLFDshcH7oYqEvQw2ii5RwqaBP23izMf4FuDMLziXe6go",
  "key10": "4iYths91j7AFGcUiJEvK6tRECJCqvB26xYQhfEXpwLGBmEhtVBJVC8ZQvQViH6twNoaehZWhfd5q85DZrVVuairX",
  "key11": "5wPRHqy36Czuj16Wt2F5D92wBtHQ5LAGCCZ7VLedGR6prhsdP7iipSbdTP53YGH4RdWLdantD9Kq1tr2tK8kZ5J6",
  "key12": "2B4Q7PMaJqdm7AjE3RAwck8zNNqQHRrS8AYdgWzemVARHEmYXr697wMGVE4Wd1BnxaTVvZRcPty7XRcHecv2eQju",
  "key13": "4BEEqVvgfrVjQa2QtBKhkGWdYagpFPyQpUFc92NubW2p3JBdDYYtbsjYCaw43jCHQiFZU7sijEUTCaNtRbnDxsPh",
  "key14": "3Nr7r7KeqPviMENSP2MC1wmgacUtK68gB7y2mGWeMjvre44U8XCto2BCvKARsw2QC9wU2czJZ4PNUXadVgJHHg3p",
  "key15": "5tqLrDwyGRkHQT95Z9BSukjHfLjS2c9cxj92FGB4Zs3xEhDFiQwG29oveBVyxpmo1tQuw4avNhLggBPQe6XTGKE6",
  "key16": "88sYm1YiWj7dDNRdtFjY7Rwh9Jmr264XrTGiMLM2SedPgySD7dqdMbVCdtu5QjShdfmV3okL7nPshHg66DUDwaH",
  "key17": "3SdYF9bACfzntGPeKahWES1mkMEzJy6LQHi1chfB1tNkQjyrDy6rv4mjr7ANwUVuZiVeww7vkVrVKStAgLcC2Hja",
  "key18": "2MQsYk4Rj1GD3GU2bQ4tVTc1GVV9Q6Mni9MA2LucgGknWcWZs5sdACatKwErVfaSmrK14EHSup9kSB29NSQD7u77",
  "key19": "5vE9gHVUeKUpqQadA24p8LLzCBbacNfbHuDuKJidUrq5aQe3HK9jX4j8TpHrEmY4NpGjmRXbZ27Rs2nMLTXU5iZM",
  "key20": "37AooAmLivAKFq1ZPGvts7gpVBsts6gQykNDMDtJKzWs5WeHvT2bJsgUJFdytPTxVCtTVoE2jLfnGoqwatJ6L6XL",
  "key21": "5QEpu8QvSebjYi4vpeUSuwYtb3o7pHMCpKp8rnkPBuzRFmCHiaGqK4h9rUdW9UPy1joZKhLEZTP6uwogSU9fbN5w",
  "key22": "3sGSgq4XQbEFzQwLbKpZEfRWsAV8NWWJiJ5cHj7xoeJWR88iy5MMNj3Qz96xinCQXtmD1R7ipQZTzCfjxtqRZTjL",
  "key23": "4GqyLAXEuvqE3F2jqiFZhPKTbc1grTYVdz8LkDojPRLdM4qjVGLE79bnDR9mmEn7z56jWE2kyyxDdPwSgrSrqtyv",
  "key24": "2SUiE8MagyZEo1DQVbpAZih5hhF3uf2sDMrwThQ63tPBhtWPpmMDTTSoXD3rCahd4S5a35g85Qy1SQRGtVAUuxXd",
  "key25": "4dSCUumLVwdm3Q1HQjRkgCahYoFp2A72naAJ5aGW4NK4od4g8Pvn6UVuLggQZFasdAvArp6w9wTsUUbPYTFGmAaz",
  "key26": "29bFYuHDVbEyWr1QYqoPa1YFi1hTno7BWhFF7MZkwjXJVADU3q9EAfKPMUV4Z2VM26UEZcaiEAykjjfDxS8cgHcg",
  "key27": "38rpUKzwXKaAsNJQZK5NurCBM9ezPYDHMacjYpBJ4rkpsoRmTUTXfrEtM25DhcVrCbxy4TG78k9SABYJ748jA6qy",
  "key28": "Mmo3HNrra2jh4ZdTRigoegvFNd6GgQN11TFRf9ArLpu7QMhQ4qjpYsUT5PhKx4ksncab9qLjNeE5wqxAsWeq4XU",
  "key29": "2eBJMjVSMGb6akuQN4MkUjv6wcHRgmS11XKgxhqR3Pif52AzgKaJzan8Tgs2MRQF47UqfZq6dRRNMGMHuxXCV4mz",
  "key30": "hKVTizA6bSjzoM7vykxb4b5wzsBgxTQHwfmNrXYWfnn2qVqzXvMJHjdAH7AjBemAn3UbqhL7pjRrXZbHZrUiZ8U",
  "key31": "2DhSjKKVf6y4FUD8uL2D35Q72sA34gPGTuYaCnYJsBAk1T8NWvFKVZL8P8vmnwwcnE4EqrBMXvWTpLSmcu1BEWBX",
  "key32": "3xWQHWm71Qmi9TtgAAyW7YozC9f16XXiLnVd3WpansqYjPbb4xjPURzQR7BChYigGWC3apWRt5HUqFhCgDC5MV7k",
  "key33": "ApNFD2ScJw11S6tJ7UNnWvybAb87kkn56kSTidS6Q7PTNFCsKau3zngR6pgQLpsd7KaaszadtTsQqP19c8935Hw",
  "key34": "4gcBsjFKbBuLkcndkARKuUsY6jFkYmCy22CGqAVpqc8jr9nJAVG2EKzdK1Vv7XH13ncnGfE35fnPrvMYc2BG4UuU",
  "key35": "3X4YT22hC4bQdc8BTDYBKLRGR9rwMWq5EtFnfAQT5uAKbD47j2y3ygE72DeayaSAixndMW7qVyuYKEz8xfQCcK1k",
  "key36": "4p4ht91en6FbMDn9BvmuTV9kFxmT8hyJHF1jQv3VnqKVd9tayJ78BncthrpqpNcWhc4w1HnCKwmAHZBnd8Vidt7N",
  "key37": "37vpnsKy14GrDsXwyi1Y1oLec9SZoCZjYwXKZhQTaodzBQuoR86g69pP4jU1LWpQgKre6Th763mYL1bi3YcECvFk",
  "key38": "5rtNnkuPQ5RvCZ9qxqpCoHqBKtTpaDixTnLALgdkts8iXWtG7L7WsE6mDrMErBwmbEJU7TroekGYkeoTZPWAsJhn"
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
