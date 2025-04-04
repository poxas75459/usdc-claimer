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
    "4VZkKuBx2CEmuaKi4DkgTzxec3EE1ypNgaViFFRT9BFCJXSPu5xzmyJEda8J2NtutbD7L1QJm2BKKy7Ta8r9Cdii"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vQ2UZhNnU6g9Rw9aJP9AgTXeCr8oRg4EsJL6bz7QxHwm7rignzBS2255eZJaGRG3ZsKeGzT4xoKhtWyCDAUA5q4",
  "key1": "2nLZaeCPyaioEEdHcHASgwP2sfwxEfGwAvpumKSwKZgqg4Fty9LLMnELSeKS1zMeWuLRRrhL2UotzuvXHzjqKXc2",
  "key2": "41TiTmxaHkZ89dpZQ5nhe8Nt7JkFfVAJjcBEDC3HVuQ5e2bQdJJ9kUMUA6eP74jN93rkmxhNxQaZP1cuSoeFMJuV",
  "key3": "U2mmDn6YsehX5bizdXgK9hy5xDP42UB6Mk57EznbUgB8zc5D7mpgcJKqTP8DhuNBP2sAQvsAfShqrRPgWvKBqHR",
  "key4": "2LXBVehg2MGeBmm9nASvwdSAv6MKpJ8mAES8q5CsPmpkPzr22m2eA6GtWh4YyEUJqegsdLTnmvduRew22xJP539L",
  "key5": "4d3rdCiCJ6LCVvWPtzhuZa4FWhiqJ7T3tsyC2ynaPf2DfvkZNsBB55S5ipSuSAzScCriXJJao7MGeaPcuwSV1s4q",
  "key6": "27HhYCsyL94wSFRTkaQVEJCvYbiiKyKHxbWEDbuPnCXTBp74QDTkm1dvV4BKqRjuH7Zs9AWEzGLgsXvaL1GpS1QP",
  "key7": "5h9MzcmFwDWX5qDCCEyBUC151X2o38eSiBUXWaBLYYP9Erp5WmCajMoJvDw9PaP4k4LaN69qt5FMj3EuZ9RedE7e",
  "key8": "4vy1Xx33192VaV99EMZJfT5pZAd755vuXzAyVHFzd8e5DwTxXGMoPiJozuL66VDhUvPHBiigSLeVGVGW8tS7B75g",
  "key9": "4ahiZEBafwXXG4NNpeYCXea4kcMKfZDyeiSQVVrL4G3ejymvsWo52bzQspkPSnuTK4AwsVbqg8QbxVUFK85aXfc9",
  "key10": "4xHEREa6BpHafeDRujrEpmxhuABDh3RJpQBdJZHJqX3QH6ttC59CezMf3L7GDjstoBjiKC2RPbZjSprF5hc8SLuE",
  "key11": "NUdecmvGtn5kcdWJ8npFy7zqbBnujG9SxbXrmmKwxMGW1DeuFGT3GSWmU1dXZgEhUNW1WSFm3xidhNhEGHYBdnU",
  "key12": "3XNqNn6kRU34pSt5LWi5LcmojWZMWD8MYWB2tzUYpSwhZZ97DdVw5kpe5mcELYctXD5Xo5C9vnWokP9u92aptUoC",
  "key13": "36AXJHGqQY2YwuQMwkqhvrA7pCxRuoGBiuASBeEwTkAVgekRUtiCrcFJsu3JAwqfoQasaeHS6k7mAZmt1dJksQYM",
  "key14": "2HxMfyrkqyF2NJ6dRwrEZLYzU7BjZTqHMXJQH8ft1FzaxqBSJsVfZx7AT7ZSTzcoqKFLYq4yMDyZurYxLBHoD8Mx",
  "key15": "3fXsqPXRqwzMwKs3P4kHjPzxy6J5FhXQJ19AuesR9t4cmtY2wPzBJur2YN5ciXPZCc9kKWd8AbfkZ8U7f1XmwgFW",
  "key16": "2YqUpHWazLF1uNyc81CkHENC72sxVXjP97acyGT7Jjm4svVMud7oyt3her628CV118wGp3XaozvbgyAvxx98yuYb",
  "key17": "2tqN5Cv3AxWenyvogT1WLpp7wsZv3L8xo8FjxLac2xtH3zBjVCfB2PzuMLP6yc9sSjoGvbgM3kjQQnZYwAJu25Sq",
  "key18": "4gkdp4izhEV9JfuWzgBgSB2bnM7vMSH3puu5hgkaX2jcbhxsrkaw8yvX9ZLH9LfxaQdHdyBbu6aVtLzSfPPNwp3d",
  "key19": "4SwNyqnfkvBVpnDNxY3bKwSv68rJk3v255nVqtxzoEMWELmLCv7LNKPm8wvSgRi4u2iTTv5SaxeYHSmPzDRn2Qha",
  "key20": "45WiRkRMB4q4VN8YXUw3LS8h6WpXy6KpJcJ6BscrrKh8rSVy3h8Z4XazWvXS8tE38fR7kDLJbFCDuFVfvua3eqVp",
  "key21": "5tedXLqGEYpXRUPoP8WGEwCkQzrQmkLMyMiN33mRN8m2vQopwVt6wKA61dgEvT3mUkNngztzfTe2j2wPQhBEbsDP",
  "key22": "s7zxZmJMX3a9obuoQARtRvXusEHRRnn7iasbWtpXTip6JPjKzziTBnnunYBF35WKmGw6G7nZu1G1hUX5Urkr8B7",
  "key23": "hqN1d2cVKCbGdh2zfzSSPaMio8vSHMQ9ruJdp8795R2Q2vPFDrCH7ewC6sA5BWNU5SFno6UAwrSJkXHX7ju9DLy",
  "key24": "3VtYgAagUQcbieCsyT2AhERjRKQ4aGmAecC2bEQgfEQTpbCv1H1DhJajFnEAhxrzGheXdRW2fQRuYQAwZwg7iEPv",
  "key25": "5hahCx66QxE4tyCNW5s4L6rwww6EjZLMHP4smCtqTLknpxrv2LRqc6BRZFAUdK3DHoUcZ2iVgYTayKzrhQHyP9YL",
  "key26": "2UJMiTKxeRPM54hBRo2oBpJC5iDQxzvzUYqiUULpZ9qsX4RN54JS6C8uRJdS3smc5tQZXyfwW24cFcPrwBswxt4p",
  "key27": "3Y3JDt1WL7XJHytQ3sYzhan7QqybDUKdriBZamPzjzbyLMwjdBWAuMDPnfvBokE1zbEc5GeNYtNrpJQeN1vFZcie",
  "key28": "5rNeRVYbx2jU5UzDzd4bB4YXgRtsYCUhnsdaWq83mhfyuda8m8gNaR7dgcnFmJ4u17GYQFysCb14ddaa5dU1oXrZ",
  "key29": "4mJCk2iT9bUtz1k4kykugBrK1VSPhw1Yg8RAXvu4of3Ce3Nxq7kaABMr4e8mvLXdxz3dqqEnmdXSeYEWZGwbwDHG",
  "key30": "2MWULLDfjUR8s1MRARzak2LrjUL3teywRSgexbs91t6AMezLSzrxmM2SWu3cyRaJyKfvMqK9Si5nGNu4qK1zoabv",
  "key31": "5cxUKZvtCAwQtpeTMMcfgAe9mgB3twUoaiJJFkoiFzuBj9E5NSK5Ts4oF6euZZnSEjBadREUqdeFR7KsmuEMDmg6",
  "key32": "4nkWpTQM7rhgFYThjrFGUjkrReTSTGc8TXPdEMS7ytdzE3ff1NqVWV4EZNxR8w5VbY7WnGRk4oSyQhD1zrQcebjs",
  "key33": "423nw9LhVFgBnwY3cYEfd9ndaNQAD8SaSSLGt9tqvigrAKLb8vDKBSSiN2rG3y163agxYcGc79JSUGcqym6Lv4xK",
  "key34": "5BaJNbvPLmf39PZUfQvkjiEfA8gxtLBcRMiiAMUJrzSuxRSk9UMLP6iM4hce3At1Dgn9sLNo6GfKN648Yi9nEGti",
  "key35": "3jxvjSRorCHk9CoCsmRe7NpCc44HZmbKnvF7dzNVYQiyXkJfkzo83BzD8LzgDw2T1wwWY5CvKrYQPafSQBYG1qr7",
  "key36": "3S9njYGQ1U2pQ7w9shX6zqCKrWHMWFeEKK6tquRDhmcy2trBBHFNNsryyMyHhjsAxS4LHEbiP9pbsyHKWFrFXbyw",
  "key37": "39ZxC5L9rnF1zJX7fdepRC69q4VRyJW9gCFGm4f8EYGJ5wW9frYgHBeTXX9fMBF5GdK5a5nGxtQ31nXW7f9vgDxz",
  "key38": "65pUwsNPV6WqGNcKFo6FDrkUhaToQdSWXZyg5no94sNpxYVoqc2CJHXTkkDf5umtSwnPPtT8pVHCSdfZrFALmVC7",
  "key39": "2YRrVydr3uVyDU89j6oRRJZ1C5nt3sTdjDEfhuhSR6JSbh38yMcvcz3QxJQB44ETxamJPpdPviWDV937s34rYtbx",
  "key40": "4xC2Z9gqKKJdi298TGacURmBcWWTeV8491YLCzx5qFZqMfkUfuR7XM7HFtPkpEX9QKvTBYrcWeZCUL483BTMfJdK",
  "key41": "66v7RjDcXwm4g2SwrU3wSgVYkjev8LJ2yCq9SbL16PaiTpbRCb2YgrWSdhVWkhG1gVUGxhC8GL6ZKmQrXBN7zJR1",
  "key42": "4WywhzX3GG2UDYoZCu94rC5gNYf2qfzZKVFFCccdQrRrNs6FgUvjwVBpTW4ZpXam8yR1aMGrjS2Gi4FraatQRLpC"
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
