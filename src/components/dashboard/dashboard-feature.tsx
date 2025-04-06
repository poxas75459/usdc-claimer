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
    "2gdR1XNeyWURucdCeLQabrZ9AMoiQov6KaAAMeed2DNoEiRNgghtah474N9WVpN5QKNJ9mG6m29HLLHRpmkuPRbg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HcePCZL3R4y76LemLCxLCUACKRomCXxXbbHFBzpdFnQE1dR8YkG7nUTo2GL2AX6BwsgeBo626tnFCrkSgX9y42x",
  "key1": "2TyoLjgtMQsJdYLb4UKifvBF1TmMg6dnrUFLwNS7b6srfFGRhhHkpRQ4Tv1fDDB6U22kuUXhUnMkTxiULvwRshpy",
  "key2": "2o6HpgKPAD7k8kcuPR5S3GjSwGjc34hq3cNfdREtExPXi6j54fKSPkJDB4ais43mzvQSG4ETrvJwumCZGkWwpvbV",
  "key3": "5LM1QT9JRTh7UuVkUB1BSLfkcJzPAGUiw5Z8GQQmQW5HzFVjEBtY9XK1VnpBme4J8yqonmyZpKgr7QaxcYjxNLDp",
  "key4": "4QcJbg2AGuCgDAmLow1a1Zs82YrjxAqJ6ri8KuBRAbBLmUURBQmxxHiybJz5mfA9iCXNN1ue4wCZtpApPkxuj4WN",
  "key5": "3ByVyF3ZV4hKid3XDAHLzxJpvGM6NbUy77pRRE2QTXcSTz5NvmWyV7WTr2BZD4qd3ZLvUZbQvBuZ4rgrW5mhJ95i",
  "key6": "4h8pkeCw1bWxu2EAy4H5QVa3VLP3cugk4n4vJR5ZLjmaPeJFLHJHkr5ShBqJHkYm9VB2hnPzy9CAvrJ2igYSWpYv",
  "key7": "3fRajp6KNBrb4f92TfyXaZzpb1GH4w6cHD51kwpfrj3z7X3SrpdPVcFS3QrBBUk7V5tDBUByTKTHBdhvibxz9qZi",
  "key8": "2ez7ea6129fqXH87Gf5dM3UtV6BWRsJuDUMGHYbVMr9Tbf4Qg3FJ21vEnbw9JsQZEfGK2W9MPmgyue5Vh5BgFw3c",
  "key9": "635FSXdR2kcLXpCYrSLnjjCVV9mZmLqvRjv4a4UkaUTvjVPAC5iKRn2sGQHNNyXbVfCuEeEPZFS25U6hYv2C9yBr",
  "key10": "4gUgYPKSxRka9WD96C5jTyHbv8kKzMNx6sMKzpLPAcURNDfshiUcDRM1f5JEaZ4y7c4rNcYCmyiJnEXaiCN6HSgx",
  "key11": "2TaANJFz2BuYjpb3kd6H7eJr2fFXryPyinhXqM83VSTQ9S2Evnq8C2A3yK1vcWqDmJZGx21TYRabj22Qu5Fb1zE6",
  "key12": "33Ho1mqu8TWpnGQQeiAypWkieo3X53ekmezEoEH25K7CfiWiDWohNBVXggoTbfTXgmXZPhrXWTBQvtZQr2TfM7Dq",
  "key13": "5p85D3S3dXvsYpAGhqmEf4QwJQGLgr3zorTZ6bMyNuA64LKCobJ5ZRCGB11kJvB295ZBpZUKEGdEBHogC6hdPGRP",
  "key14": "5BeX7KnNsnLt2StTtSC5rnrXWawAPqxzwRSdYko8wMzj7JNFzpuyedwgSqfj6xo4yPmZS7KxFSvjGVFCdc4Bn8NP",
  "key15": "4a55VzaeTRhMgJv7CN2ToFQXETjzuFFvrhPdt6AQ6gf7eUs2GYCxhaym43sLEAaDQDTJeqJCDXSvs2NjTHHY3bXY",
  "key16": "6era3YL8Bo1FpqZjJsZWBrfokjmhKdfd6s6unSB93yvLrfnEV5ZVCbuf5C5xcfasBDuq7x1HkV8kkdJVu39c8mr",
  "key17": "4arJNogc5AgMLcyCMSBvK4AvUrShWTPu6oZDKzAw3yrHBPpbZMrx7QmMeCQtkxmqWazhMPoRmfhgepExt41CgPwn",
  "key18": "HgGSiUWdcg3zhDaq1D6rse5w4PdGE7DrLB4J4wpLr2o1nGkz5fuGEEycygYBTpYHTjYUkEdfGxxpHb1VGuREro4",
  "key19": "5cPEdGfzPyzFQMb99sNaosnVdAU4gkTn98EcL3Prrnjhc6oj9ZAg8kzXCfg92t359zyXwXisv8R49m8nEfvoGo8s",
  "key20": "4dXbniAAHVn11Kg2DNRxU5G5KbKVbXvXcMvkXwx8RBwswJ9A2kx1Z5oN7fmy2iUK86xGZUYJaSxtwZ46z86Zg8JD",
  "key21": "2LK2bxrEo6Nnfn6hNyhtCPurugURH9jF3wN3m4bgZqFavKRFwnqNFbTRXi9VDNSQq5PJhDW39KuxdcN644wXNaYE",
  "key22": "2UjZkHWPkS7XqrGMkb3i3qSgVyE7jYVTAUCVWXcsxsMYV5ubNyCpG5d4GvLWzD8z2SWAH6bLh7aDikkJKSnkr5xX",
  "key23": "3hpEoWAGQtatTHxAY4ZtFNR9wXZ2AwqJMdwpzUcvSE6MpDpdtDTdAhPLKHVzQDctdD3AeH9P8RfutuBeQe6BFs7k",
  "key24": "fUwWEaDn5zugrz6Z7tPYNDGH5fSjMRWhC9CVoh87CfLmtj1qYst3r7dgkLruRGmoQ5vaFWjws7mEcvKCcXsrwpf",
  "key25": "5qbAL4E6oxBij2R2JT5oVF8SrWSJ8TzB2S3jheutmYQcpLRY9sxoZrYZcQDQHygrHGsBzjfiW9XpSa899FFyXEwv",
  "key26": "4y8A8QbikJFouhoCAK42SVhzgVxDGausdxr3N7tdhAqAxCDmRVzpTtvXTwncth44h8PaP67L9vjxwjgtkwXg9xTs",
  "key27": "2vow3zu7LmwChNAQgjsFByJLR97HZFzFrCQHqoos9B8rwjwP5CmMHxxT6tnrogg1z3iEyrvnJLK2PXTThhpqRf2G",
  "key28": "4qJygDRHS8hHebmRPF5j8Kgut7QgH7HugVs5wigA6sM961nZHniE6V2cyB8m4CangkBkbbou62pwaZJehAq4UMB9",
  "key29": "5dtha2S2ccniEqT2FGhCesNWepsT5x61Snr2Fc6SXLR4f8oJ16LXCYBQa6TzhH8TCVUtcEh1ZjpwBRUA2w1pFxCR",
  "key30": "4mW5ng846TjpiDCmGmPgpMNBdaiUwbuTQFw5NW8cvtYCZd7tX6uiChwiD8vLEi87vzMz3htVWmRRvGJcxfjyiUuQ",
  "key31": "tdAWAS6jgQSWd9KsJTQsRPK8U57sBTxYnrmmxJirzeL6i7iPLbcsA3CncrK4KeZ7vS8VwohnrsfoUgnqRuCK2xn",
  "key32": "CQ2rp4jD4YwSkFckZM7H3i77fo2urkK2MGH2KboP3iYCFPafk2EkTBYhDYdFgkhjLZFQo5ySL2WyVXvDTQfU8zN",
  "key33": "5cxE3rToi8wqQ1WFrCivgkjB6KxU7CbPwEus68Aqdy6Ly1tTQaQ82PrZXFQ5pYmoZzciupKd77SdDiRCUQDrGCqp"
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
