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
    "2UzW35zGRMFgQiN3JQVUfRp61G6K7NvRrdREpPAacMWRxsVbA9opbvYPNyn2fBD7uW5MDZ71uDB4jkBphMgp6Z5t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gekFXg6rLExj9wJ9P9zw4SftELRPDBcZkNMbGJLWgk75MXFZX6AH18GhD9RMFchR8w8puLFuPSRsFronXP3jTo9",
  "key1": "jxKRupG7QUnp6JZHRchRzjWGpKarohy5cqDhFdGKcQfT4HTPNjQ5G9wrXoyEMXdfNgWkz1Nqywuh7gH6pSveUwS",
  "key2": "5zuuZTobsvTkTF8zqPx6Dx9cSPido7FyjDJajNrEuJ3ZdqG3rV1dKHNzpiUTawvB8nzVJa6rjiaaBKHJZnwKewJy",
  "key3": "48pdUsD8YLwvTR78mLpCowRypjim9JN1c2zNECxoNm4yoMAA1CwinzhgvSAZKqXDs9csZQuSuMu1sS3Hr4DBMH9",
  "key4": "4mZjCXcxGdGcbBJdsgDHxMy7kq6ZMEEAoqtA3a66PWzLNPTMCYBBK2yPwgY3M9Qb8FVB3WDzgE7iuPmLkau6ZxUN",
  "key5": "t1FE9oRHjPir2z6ZiPEyRTvH5CZstB9ofm2M6rypfMaVCyVJVWEruWdiaUiPneZaPnn4QBFPRJsQgxNEKmuAiAf",
  "key6": "F6HnQ2kv5Cn1Z5nWSr2tVZwb83xZpe5n4sLR6TnNWEVut1QcsAmcQbomUeEPRJJa7WxjRneLmHDw9cWaP37ehqT",
  "key7": "2CG5o7WVmKkD7TDxqXSUhs8tD7yHRKjtBP5y96YWX3rxnUitN96cpr4nya5E4xz5PHiuY1k6f7dJd1JLqWzXQoUZ",
  "key8": "2khU34Vo6tpdrnifbHhXfshbYwS5dUGxb81XXXRVQbNwyDh5f3xv6YpLsaxKhaPQ3aDaY3WUQg1awrCSiinLjXJ5",
  "key9": "4YWfMHQCKoZwuJ4k8GbfjVYyYjaZnLtStiiTZpykotrSKcUtif2JMYF47ZB2apxB4n1ZJDuK29yuXG7qtuoASZ8f",
  "key10": "4fwAPhHj1XyWPA4DD76wTLEaPJwutUytovCAb9oZCem5Z4dYy469tLPKoLZ9Banh1JDDq17oduqwjeitgtiFS5Wv",
  "key11": "55nWMvYnHZbPfyZ1wuTaxZTv2GZ95wnCwBqMUh95nr1r21iU2SdCWZVPVULcB1T77kcKUZ87ivWEnsihZUYkkP3n",
  "key12": "4BpvigsPjj1uKz8eTo8X8GywVrVceb6MMUnXwDVud8wvtPZmwcrFZYE5223STNgfTqdzNWugqRbNrNCuah6rGxuu",
  "key13": "5MyEC6YCJZjpG6sKPNHL2FYBA4WCwAsLzDmG3yGu8UJEAov2tGEuJ7qk1mj2fYjer63YTzE31Ja4V9imHBHUhc14",
  "key14": "tQEiEYNDQ7L7rxsi5WDkARmNWoJM43EkCSp9KXFq6J9bvXZs8ZK5uPaLcMpbWw9GHzortQhKbDzCSwe1DFoFBZQ",
  "key15": "5MDNWMTEkRQeGPAPHLxnpQuwvH7B1EWh7T31bao1UmhY6AhFB23dasYc6SFdLafSyP8JKN7zyrbghzHxrwXPk2SB",
  "key16": "V6tesm4KcKvy75Lo47H54i98SZ8zPs2QcrSRsXvPMqu3AGUj67Zs1b1xF6i9HQaDCkM8VE2tJan1eCyTW7pFRTC",
  "key17": "WQg5by1wfMQ4hyYYSQAU8n3CiiYGEt1C9kGK5XVBZvZKi5Nh6SUMjYuafZVDnaQ4FyCBSq5sDCFPqcMYB14dFht",
  "key18": "LiZ17UHDu1KRqi8ecfVMTfxcS6NUHDdzdTULHGUasa2qUgBCZxhLMLJmbG29PWhiqH6va41kiCnBiaPBxmpTZKB",
  "key19": "55Yv7GQBfXykHVYg3KkMRXsBB1cUhYNEs6LXtS9LoS7M6ENiqSGKK6NRveu13PHxVzBVte7jkfa9qne7QaYSqvm9",
  "key20": "2zkKTGnswpQXvtgUyMMygsHc2bQJfQfBwpxQ3WmvSf73DDCRT46e1CiczgpQPbmjSdx47tzWRMgF2GggGSyqarxR",
  "key21": "J6pGNEsMQdXCpj5TrQPHQTJEiP6B3ZJuboKD3RM3QAVEQxcdNuRDzuQGf52kFxEK76itr8xhQqfMwAgYnGCh4hA",
  "key22": "4BGh9oymPvmP4fgHUTZrp6Fj68CZf4jwPwUNdrhhc3eQYfuCAQLkXsUhHpu8vcVdGSVDv2RctKdV3V4GbJCJLH4j",
  "key23": "65mZ924Sq28SjCHQQRkAdHy8kgLYXQiXgyrDbwsKU2L4fp4j1Q6N8ujDtqcV44Qn9DztktvbRJwLTwujHnTaQYRG",
  "key24": "3QTaF8K5BKYvmAmAUuGiF6WLV4JMLgvNC8LHFJVhoqop899nzrgSc48z7AAp5fwsaePRQJ7s2qSUzGVUG4MSs3XN",
  "key25": "5Wr6ymXo7R67xUTfyJ4Cur8CESLtdLxYiKSbb8fK9zuzKLCojNwYfoxHCdYyhEbmq82P9DWyAu5Qz21Am5fxsjzF",
  "key26": "443WUR9iUWbP2p1xUH3cvhze9bHHgZj13EdxEeBcip2DjsxMyvtuAmnJXu9urL4LF9nSkfDhMF5wivsTaApxd8Ld",
  "key27": "2TENKrQAPnPy44dmeDokENWP8UH9XEgDnCephkb8mprx6EdwRuFMDpvNtvAYA5iyVKRjWd6u4G9BFHDBp1La7tFG",
  "key28": "3AvyEC696XkdvnaYjNhfK9d4hq7e9q1mU4EyNRmbvvguKb1nuNk57zn4qAvnpoaq1Gvav1GCDe74gg1JbJ349h3P",
  "key29": "5LYN6QtNKMN7Z1in5Dk9yWxpAmRQjETQWDFqj6cye7xFEayp8Kdov8Co5K42ycFfWJFxQDCcZvJnVZxUaX3SS6Rs",
  "key30": "2Zf1GMT4Nwgf3xFG3RCWdRWCtYxudFCdbZRq8KVKfWxioP2Q7oDJ7aCcLcycsvRev9JBp9zfT28aVAYQDh6FRyAR",
  "key31": "4r85N8nK7VfYgbyoREzGAjJPF9o7xw8XHdd4hfVGemAqv1T3tUzAow4yR6XyVx4BEtUPhCrLjgGfS1MEgGPsLyv5",
  "key32": "5EaLxmsvTYoL25GSQPs8CkVtiG4urTFrtBoAPTZ56LmFrxW9div2qTfrzA2WEkyiVMN1KpF7dWRL2AWzDiMSU24L",
  "key33": "2ct4WAydWgaVcfRVay1eM4g3U6DLTAoCquEp7SoGWr9AJ8f3Ve8UtVtcKUECuvy3jYkf7pkdjnTKwiHrhjxVfZP2",
  "key34": "BdRRouy8qMre2mF2X832KMG2qvhrnGUyNddVD9RqM4w3cQBwjrs2DFMQfiY9HF6ZoH5dMSwSxNMXA43tSPEiigG",
  "key35": "5maA2DwNSNigmVboqM57TDC5Q1Eev3GKmB5GaDXKz8U86LpptjQox2dhsq1uHzAVAPxmfSEJJT6RtZjPPevPwdFj",
  "key36": "pH4gaAcaY4Gcz5ZufR7uE2VEgfCJhJak3SafopokgdLfvvEdnniU5BfWnbGHmoGcx72qnMwRKGJsPYtBJgbjEog",
  "key37": "4tFNHiz4Y18MnZjZmksFb9a8ir1Y8FmyKVx18CusUbjhbjxFoVHozRkkrgNXi2JeUMrjAWGYuEpondz66K31Qvfu",
  "key38": "27QAyh9nx4oYEvSi9j4vZXHMMCHtxSibRrXmHWcyCLRUNv3RDHETE8WWfbiaspXubGdGGNGhdBG9EUuvvUMxbMVS",
  "key39": "3fUrDLmYrB128bWFzeb8a7xTe88w1RkTSoaMEyVAsjfe4Ef6nLYGKutuFwETzYoYSTh5Q2VkjX8idnX9LAEsJ9vd",
  "key40": "39soaCNG81AkpByHMP4KBDEcFqJcVZAYY4qPR88JB9MzvhFusDAnHqu3Gx9q9SuBKFaJNb7Z6y2TGFgGLd9EgY1z"
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
