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
    "637uCN9gKG74ShAGFeAWEtqHNxGZrcZwUdm9f6Br8pGDCEmoBMXjkDPgdFchN8A4p1ruxeUqQwvoVgYXsDDrcZoP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UYS2xpJ93h6EvCknAmxpD6FeJ1eLDVg8d7RBwfqj5oFcBFRL1JZKgh8KBaHuEem57Xg6BwKznTrXrAHdUBMLPLN",
  "key1": "6727EZe9tZRpPzqkTjzGRB15oR19rBKdiFAPqp2Lj1R5ZWGZMYyi2Bu79oEbEEeAACS9Hh2Y9grPHvMFkLhRPebB",
  "key2": "5S4tJkmabvRAZ9reuswQqqsCWtJtTHEsSRJk7HcYLQiPxA76EsXAchUrw3g69zH4vhZzzpMr2ZHTxueX8BcChRov",
  "key3": "5xfUXUB45wfiMDZLa5LvDcrqxmdTZBHTbYMqyGcYTxXd3iDyhnBfiBdH8ocweCEKVvLrRaJCrqrF9fYrugWXSga3",
  "key4": "PWa8duB4pHE2m5KSNJwqaxnEEakyVTusTGV3iU2ff7oQyqymJA4qMnQkT4hogZGJwVQ7pvWhpmmas6nKPar2yer",
  "key5": "rovKfCrETJqGoBZ4EYKSzfihGbiCLQdyHC5ZDAcJEiHDpNwFfnUzTcD36GbWZPLiYf7pDTd8yCqD4Kb1cwo2fh2",
  "key6": "2Sn1UU1FTQt4SmekGhFqo5RZrx5joms5EwUiuEJpJkqJ5Gjqs7aUnMxTwJHbfHZvoMgkwyizCRxvxHmW374zzJR4",
  "key7": "5MAWz3q8Dpmd5DqzU2AbfcZpfGKARAWGKkH9zF3ykpqTCwFdrRyGoM4FzaKg4vFBuet6Dn4nkspctacaYUQoxVkt",
  "key8": "3mBvLuFg95Uh1H5zpK8kzzDaz8Lx6zSKxCGNdUbrkhR2tB4D1cTW6xVbhNGicXkSznaRM8qfgvnedSHHkekycPNj",
  "key9": "2wCy7V24TxkHhCkHNtecE73jYGxzCxXH1Prw6yXrunbAprgV7cZm3gsEB6dzHYxcuwcZXZK131QASt2dwVhyUkeo",
  "key10": "4CNHpWwf9jd8iQkWkTQGKJaouPJqTjmhZcsGtLWGxghkfi2kUcfV4jpJUQUj62uqkUd21zPrBrrhpZ4pQq9iYLXe",
  "key11": "4Bv75YMHVAuDkKg1xfSbZ3jXWTYksKssgFCRT9rJGhVuT1nxiuk5G3ffoJHU89qJhKTjjR4YLfAHogdmd9BpJCmu",
  "key12": "55xVKTf4wEmAhx8SAV1hb7TvN9LV4cJPPtAXNS662Q59pL5Au9SUjYhajzVsXwW5W9X4C1Y2BV56zXUNHvKS7RMy",
  "key13": "34P6516S9DJmAgYQdQQ9XivpUr9dtBdkGEcr19WkMzvDVPGeyYNqAKQhXiwiwf8BpWsmeiNuCxds8P49gTcFnHWE",
  "key14": "2bkUYK4dW9qL4McdUz4samVwVWsTonN7QBw1cipchmPXPtPV3bN8BW2CMPbxD8rQvaLTtu59ZwYxkGL3qcvreWg",
  "key15": "2K9wDbPRpYRpkFbJMxPeL7xte3JDPYnBtFuA4L3USyMpzrCZoDcfXWJDQPhqPyKf2qWJDro9V5gFP8d7yYGPjhL1",
  "key16": "khaKaLqdd7acMAvVY6aYiEETEmN6A9pZFzHuW3A7TngSu5kD1gqnMfVmqDxaaATFQVxLLRv7VkNgnMKHxbzbvvE",
  "key17": "2LbuTGfKuPwF327TyzvE7bMxWTjXbbpTBCSg2xEuopWrZ7sj8KMdRRds712mmZVBJhkZg1yuMB99azzhMXhdbbec",
  "key18": "2n5GsLwjvZuSRZcjWCY25jU9xWmFEKKQeNnSi2HVmLi2hwrNtRZAegxneVc7YMXC9EDhW6W3KV3H2yuNCUy4cfCB",
  "key19": "3QDcB5sDY1mrca91TnDzijeDnNjVcKtZyiCYx49FQAEoGjHsYEJaatpoYykECzcS83pjk5cjmf6Fj8pUkQL1tBA3",
  "key20": "2tVU5ng9rcu9n6ZUPe7eviw3WtbEjoV67SEuGtUKZuamwmgqZ4wRLjraGqHKsoxxGp8x4YCZVDgbq1gzX13KxUwr",
  "key21": "442fkg4ee7EvB7ZDL8JygjEshgC4uMLL2mFPaRxbWgQQ5Wv4XFy2JaR2v7ZVuhh9twC6qGRwAuVNeGb62y2Q9THG",
  "key22": "33ASmYcvYetmvEQjQLh7eQZCPYA2UFKjCnruDHR1gWEZE62ZMW1gjr894wzf3vvAnnth8wHmbmhJGHxUZeFUSZjP",
  "key23": "4rtjGLfTrCv1cVyRpCbLMXZkr25tQSJbkNmzxtZp1PiwfreppCQ917uavVzDZb38puxVe4snbSQemjHNe7853HUC",
  "key24": "22gn4XnxNcXAdJ8eL4pLdrdRgCw8zmjXanMrrzZKVUYY7uTs3g2YkjXWNCoraETrmsVZ9JjfDQh9sDzqAb4qh6gA",
  "key25": "4LnCFnS2bPdeF991niicXssNCaASZ3nxFmh5k21LnJZJfWbEXN6MbVmt9Kw4eRj4sYXdNDbmqYTEGz6ebdikpxar",
  "key26": "5cE37pVUcMyc2ZKA9BJpDvfeVUUw9A13ZmxJYnD3d12cU7gNfyE5a6Vkc5rRhBr6jp4CLn9YnuydTMom5nfoDrur",
  "key27": "3sZFz5GZnzdzmHbJK2fW65Jx6y1tsd8JbFEjXuFdFkJdjsLWGjgQaZgiqbnRWzWeszp8UthZa2eqPVNFYWNGGBYB",
  "key28": "31kF67FbGGpaQfmXdebVTrCc2BxuSZV9h9hAceoZc2n1i4PMzDTLyaey7fHENnuRfMfZwyzKm4CVY9kzoXaAnEc",
  "key29": "2SVVuA5uY2h9PCjAkXBQHPjGJAm4euH7XDg9v9hddX3AJTnCHKs15PQhbfUCgLwerRxYA4wvzUZaCstGCMrXqFri",
  "key30": "46dnEDprL2c7KJVj1niN6GgQMTZRJQ1JBGcYuZ4RDJKtoNYGNwkz5bskoShxu3mpkoxAPDp18cFf42JYc4dkuhy6",
  "key31": "3jDDYBxaRw6WtdNhrFhfHKx1KJSPZjKez9h9CDn6NZATgXakvQ7iMZeeMKwbEVpfGsDVHP4kniGr8TpYVckqGKGH",
  "key32": "2Cfj5U6sx3ACMXHfJi6poHDB2ibiRtxFTSNucGhzF6HngkEGDzhhR4WVcGabGbCyoo1m3bZLiSWUM9PYaybWuEB2",
  "key33": "4c28HNgqQrmDRWJM1VA8gitJinJVyZfnhqGQJ5bVnbfmVVjHcZke3P6gFjCChv2uV8zDdkbCav6nwHMgJ5LpcyZc",
  "key34": "51Qqyk6MNnWVFJvBu6NAD45ZHhuwcfu1GUsUTxpvYqqf6zMqum4z62SMjxkRtoK1Np5G6YFZu6ghbMubC1BNtAGN",
  "key35": "3gJQSBRUN7giLPBcyJ85ZywdXaF2SvUou1ygUDLB8dfZBPS14rNVo6Df9p6XKSiPEcWn8BGv57SfuNq17qa7NZuP",
  "key36": "2NorBEhKXmuXdKSUksjQ7VLTAoa4Bks32Heqyug9Ug5xsckP8X8PWGbQEUiYnE9DWWnH39JcYz93p1iHnYKnkRVH",
  "key37": "5Q6vaFE9mpXRwQ4goLNcpeX4p9W75MczfS8eBJDkchKYS8niWfzDT4xUin7B41DzwAyD78LHc9Q9D4MR7KueZTZR",
  "key38": "4ceHQRMFnfE7z39XMAbiYWVbYJUMv1ULLAggdw4Q1ozWnJooHWAJSabchWdqxsx4167EeSDeDPvrt6Dz9fymzTvW",
  "key39": "45t2uvg26WFzUNkHbNnP5WhaX1X5mU1yBbD2Lx4sfUqU49fKeAbTR8Cq7dgQUqJ2VBvqpoCamwBePwonQmSv3gc6",
  "key40": "3itAmnsFcyWoSZtyfbwF3exwXa1HRE6RxWxry2DB1w7EDwRwEJqCbE8RhewuemJXPAW1mPHxdbEsoVYEUbaHZ2vx",
  "key41": "5GGcdEi5c6E83R5HHrCppPeptL2wj4ru3s4WtoGycuUSFAWZYPgzGhintM2Nhcs2UXeuySSWVQhRkoqQTBw8JQvU",
  "key42": "3Xa65gvhxDWK5qEYtsb4kK2CfBkE6Ckn2YfHGqVJjUXQLUsjWFowqMfogUYyjjpe9du9P4Xfq5w2dic45UoESZsA",
  "key43": "4KBFx36wNMrsUsqr1KBYnto7Q1YZQVtCEyzVw6MNaqdmNKV4ZrW8HpvFw37JsAWe4qyWZbm4SsSJXWiBxQgtjPnT",
  "key44": "4E2VQ7ujbL32HJT6Z5dkWT5ZAzSoy6yg1QUMgZWQSFPn57zSdxoN6vn362LRuH6N9L6ojSY3k5Kgieu4aN3u4gTj",
  "key45": "4QrD7PLo1TGP584tzo7A6QjU7hHdKn1fryVCA6kYN9UWDQHq7rtidLAFNwYeVA2xxssga9DweRb72DXMTAeQB8NK",
  "key46": "3fakY9zKu9qnSskKbpuzHxtfaFuUf4DmXNCnT8GJZTyTt19qTW83Li18NN6KjXEbpCMY21qRVbik463Cj8xCo7vY",
  "key47": "JozNvGHuuXzgzJoYTYBineWHx34EWMhByrZbwyYJSnXDfxyweKdboSfXsyykpmcCFBjLvEzdpXJke3iEDH4kus5",
  "key48": "5nsdbXCjpdCD7RDqKUGyshVAoSccmDzmBV9Xjvv154guq64ebtioQVGtMgaczpxN3jVfBgWqoaa6iPGyjU127hUo"
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
