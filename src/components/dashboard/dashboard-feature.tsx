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
    "3zNgXd2coYoeJMTYBRX7cCjYJLni9iuQyVf4kD9C9gzaxCnf3iJNeGCmoVTGoqurabrFzGGgp7gpB8cENpy4Lj1w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mX5pumV3LYUu9hbWtDG66sZ4QsBZWf3yjLNR22YQd5MdJxMGPrqjpnzyiBZcM9qsyXyt6yj8CFfggfeHePXDcuN",
  "key1": "hDn8voywhc8789nN8ZaALzo1BLzeHKxsgYCz7hZmUjeNswUrMWL6yHhDqKL9bS3QcDe4G1nu7iruJsn3ZF3ZAGv",
  "key2": "4JcP94Eu29nwTwCXfxiegGS12ZaPiX7Ruv5yS8V5xWPFa8AE3Yer3TDLLMXWqh5uigYgd8hDZAf4ZTemKVuxUpZt",
  "key3": "46fSDgzzopwanYedfR1ikbG7Yc4mdybNGnkeQC68GGRneyG5YPgENR8HLJtaLjxQB1iHwFsPixWzGFMF8NH7nKRf",
  "key4": "2QTmcPPiRPrEt8bmW4eGiN3RhSVFeTMpe3WSvMpGA4B52jLPVHpUxnLxqWNoR3PuyW9RVSFyPKuQh8QgsbqfpFCK",
  "key5": "SZngJn2238bCEF9Zz5tRWX3tigipG7BmTyhS3xJS9Wyaj3vgALMiFyR7DGKkbeJQGsAuaTwhxm7MMG7FN7Be37h",
  "key6": "2YxKUJvM9y6pyz3hsxvmdrWjjCUE31czUPmikEGkffUFjXopCe87tUVPTYMA4QjGP6nzVeicmrmae2xfuqwDqSTg",
  "key7": "373ggzqAhwPcZMDnTwVC1Mmk1oJEg8VfyEWVooTriv8tYbTi4vq7dAa7CVbdXABBtFa6hGj5xLL2A7Hi77CBzzBi",
  "key8": "3H8hzqUtWEkSHbzhPHo7ZZDMRjoSMzurW2zd6soAwQmHUMNHgKWKAQgMacYai9LARfCDtDhBAfLbwG9JjW1jCLVe",
  "key9": "2jHHcFMY6EX9cVCunJ6DouZcV1YeitciZApVpS5SVmwoC23MMeTppjKZiwJQdgSL8Vt4E3mEMfQDJ4mHGQGDigfR",
  "key10": "42m4Jbg8vUzdLP8Qb6gZrVPuAfJzVcvC7C7fn7KbfYsteeWpr2BmNMAxMvWb6pcqgjkSSVMccsXuUkf1oSCGuAG1",
  "key11": "4rzQy1e8EoY888ehdRY5Q4zBSz9xqyWxLhTFuHxZDN4d7cy7xXQBkyc7UZiAX1YTLmDADRngBpMxvpPYRtVGwuMc",
  "key12": "4Pfy26SHorXq4bKQpNYuqKNZHjzxYaL5sv9uUAvvSDSdD8xAGFnHgaWULsXgLKqixszFPwFu4gmKmGmPM6wsvQLC",
  "key13": "3XRqnFLHrJzqqFNLboc5otW8UnM1uQPC43nZp5NHcWyT3Q14cSh1B9n6aw1oVVq8a6MthoEg67jfnKsVYvxmmYuA",
  "key14": "5uz9cRy6Qx7zGefNMvV9m7JFyQR2XKh1dQvvSKuMJ3kqwMi33eA8EfdsJksgukmEQLNS5sQ7Q6afaL6kCNxyjQwQ",
  "key15": "4Y8MNH4iEdRKEcmVHrPnRNLoHBdYdAXVJmAGFHq3aXPBsxoCiJAevpbjfY2rctuNeGuiqGRCgptUgKMkHuSY89JK",
  "key16": "5XHEJ2Brgu3LswGoYUaMuyqjdhTpkBM787DmemnDLs6jxskNmxivjq6Q3Bpsvb49aYWaGGdq1beN7Q4q43oi2DgV",
  "key17": "3Q46GDpx9r7mx3eMB3rXokaLvacMdL4DPHW5EJwHJXhSP34MWRf1TF2pk7tQo5WemBBmHfhXoqPiB8aS7D7UMLvw",
  "key18": "HDq4ty8NBJVtMPvcnkA8iJD5nVCUAdpXM2oDPkev1GTU5tZ1GLvZmfre7i7GcwCDrVMZ1rb4EUgrL6QwAkmHLdq",
  "key19": "2iCd8ucmNvAUKdvBD87ihESvAPNQvEqukr9JBFhLrzJT848NGejcrvQKUgo9b2L9KHmeLYqhiKnf5tJxe6wSpiuP",
  "key20": "3BDat8NabsCHVtJexvo9M1bipVhLJqpF2NsAcqn7TiQXA4pLA6Q9uYTJNqVVkkdGkBXA1mGWjcnoYVZN4MFsonKk",
  "key21": "4RiAwjAo7RztppL9k2MAcXbTNdPAsdRTfyX3o6hgKHwDzBpP3K3gqVdJEDYQw7oWmxjg2RLhFwyhsNhoTKy535iS",
  "key22": "4Y5tLQU7T4wfuTWc2JzavkeZgRkcxGFF8Naorc5Wn2LCTMMYELdj49cw6NYhkmGzSgXkNJj6tLWo1PpuiXxDpjm6",
  "key23": "4fkc9PUW7FGvSWCeMV2tHA95hbBwRuT7vfYWeZVMCZcxv69YGCSc9YUicPCYJeGC3UXWfVQ5kXd3EkFrHRocJe1Y",
  "key24": "2mnUjoBvDwt5s3GagKHFzwYFjbZij4mYAjuqkDM8P11oEAqpfYiVxwBBKyFNANW39it1tqSeGKQgGippud5NxRqQ",
  "key25": "5Sj9o6YErw2KokJ2vuWF7oUFSKem5xGb6Z46uAHM4ce61bTcCjJFkwQ3wCTb3JiHXCMqKruxRtDQcN4f7H1vey1W",
  "key26": "5yYGiT5EA3GhP5CxGWkGwkbiYbJX5JPkbCDbKw6KH2sBvaecMja59JV5NBhDZ9JbDaKXPRde5yRBY3H117yVnFJS",
  "key27": "65LgSwD8ZyNaQtJ8UzEVrcr9BHZMkPCmwPFRRVhxdWPLGqa48dUhEgTQHVG6PRfn3RMGbYCvWKXB5SKDP4r2nfiQ",
  "key28": "4LfnEnvwpZDU9iP4o2ErPVVhWrTkpWsCB7cW8S2vojhkonZUh5o4e9fnfNzpdF7MBQEi9AbdBtJsZUxXXzkkmYAo",
  "key29": "uTst5C8hYhuJb3YC7RDkNMSF6SwAnByF7scHjUnhStDog7TK3uy4irxhXULCmhY5egQdQ9d7a4QE5LrYT2EA6v4",
  "key30": "3SsVyfyyC4dTpJ5NnoiLJwnBHib9WkxUyf7xU7gVcYv8vEbPRGLprZykgPeuKDoQgMj47dKQxHX9QnDNs1ibf9HY",
  "key31": "SRyguddxvmNLLqpQr6PjYSY7Rba6m6Z1nkaRXSDD5A4VGCU15WGYsh1zK6M6cZWJo5hrtuzBLiKYmq3fBBJjB9w",
  "key32": "5zh7nWfqKRcsB4QzdeZqV5xDjLa5JzuWh2t2EgBR4z5XfPbKJeyn2mvTZDq1junrj2Rbwak3UttEwzaTpaviv8Gv",
  "key33": "LmExwzwZtqx6KU8ZRPfLr1jHyc8vkeQfW5WcZK8VZ3MBzj1piixYosa8etHTnw7o8HtPvM3HNrExwVdNZkApXTs",
  "key34": "5y9DptHbU5EB8R7rycWcDjJsMXNgpTMzbKKjJix2VyfQFDa2gkw2yF2tEZX3Wpvac3p2EwQBvQJQ1E616JTceM97",
  "key35": "3vsuPoVDKZVbyuQ12kqzj91CHhap39P76wx51oJonJsXupJeh39KGXrR3iBZbCxHVMoXVRs3SaQfCePVUXaVy3RA",
  "key36": "334kneEpkPm2EfiRZrXMpj2Yqdnt5y5BhuqHX8bgS6o6k5EP3r63J7RNZNsqvsoT6JfcTqJk5L7mFWKxXqEFceEm",
  "key37": "CFicCnLnxVjhg9PG1rf9expBWeSoDANHLW2QUPWa9SpPVQMJmrQ7qLNmS4XBwzoZQ56tiKkmJDWMc162xpf51aq",
  "key38": "Vjdkb1RVBWceVMY5Hq3tCJipybYLvFvwfQ95hzZKFYwj9oGF4LNfvt3QHg86wXWooTJ8Uq9srGGB6rA71Qa1Wbu",
  "key39": "56ZeGsiKpFJ8LF7UFN5p971mRzSErr8ZDoYEHFaLX6kdJhRWzDBiHueKAG2dXzBfi1qgwGvQNKqkWH9qhH8aVN53",
  "key40": "63M99HzGdo84dsF2NPankdYNcEQZeXiGZvmkd8JKVWs1UuYaErPTpfQBrEZ4sCYE1vgoRUs81m4HZhKu8zh7VzJj",
  "key41": "4E4wecWJu8CMgNHLqSWiiRrL7V4Q4JwFyT4BLXqmEHnGNVjxbZxBqypdwNPAgEoX2PX4uRdnLrTyTQ2DJkuobxPT",
  "key42": "4avup6GBwFL23cxW9dDprPxJd9L4ctE55WxW7Jfu352bQ4Ne1LobmCq4GwstFJ78dBe2dKSJfmV2bXmCk7gfAAsD",
  "key43": "2dMSKp7DGwYuPVgCcnAJt8QKN7ah6Ms4wEXFst7onvEWDdJLPSiKRfJVRicQyW8S5J6bPGkYRHvbV5pQTDNMfcVW",
  "key44": "5ZjxuHj7TSv441mKJcXKZ87mLfbVZUkwN7QXALEJPHk4Hp1H2pFtMVRVyt1Zc7szb9vLdTFctiXV66u5GW5jFMuL",
  "key45": "3GyzvNgesmeptaRrC3F6j4S7mVRZnip5DcYVvCXxcgjmqTEinvQWqrHTpB7TXJyx6KP77jpqqtHekt2JxtAisTsG",
  "key46": "myRVc6VtjvmiaknXCEWb4b8YLeJqtMN2iSr8G3ej4bU5vVw5p1szQeWum44w2FFa6pnwLZJavRY9k6eUbZ6uxVM",
  "key47": "5WVwKMsS7vPNtBjgG8Kvg8SL6cLmW6faSJ9jXgqbBe3QhNUSpbG7anUBFfgBWwdzi7fLko6nW6SQLPL2aZSqEpdC",
  "key48": "2YhyUfycuCMTMAKkwnDa71J6ZCXNTtWugto5kuobCi9mDuNpX8oyiscdzEHaAikynooWSmvu6gCEGragryro2MVi"
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
