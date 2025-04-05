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
    "gfQc7cV1h8i631H6PzMFdMxuZXEKGjQxEQiB7LvSSpppibqqFUzFTL4Ukr56ewnbx9FzvHe6o8eE5tfYEqCQaE8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YttPkU8AuFHECp6sX14JoYxEGfymPjwaMcBnAfjDMGwkVeNTQikCSmSyifiJjCbT5zarBCB8XXJKGoNSnQKADZy",
  "key1": "2reyesGvThtqPDASY6tdrpkeCX7m6Cpo1Z83ZhHDpJjHT6QdVhH4HdPkidty4KZAYT9UxYK2hxEezAGXQv9oTH8a",
  "key2": "AJuKrzpBey3jF9EJv3ybXzrDfRVAk5RyLJ2dakQzXyvHBHCw4XiLvzoBVDMM37CnjPMZe9dj3KDiFW7Sg1fA49X",
  "key3": "2SXqUpJYdpHUbGE85rRAadQGVqxeV8xhpXL2mfUPGEzPoTioeaJ87gEYoifUYeL3b78JSsC8sjWoactkt8ELUGAk",
  "key4": "5NYnoZ1T75fz6TDW1LzJp7q2FRsgxVrKsXgTuYUH1kVYFwB8Q1QWfmvTy53kKWkjnYEZCWnRiBanQZPCh6E6QTaN",
  "key5": "4sQwQ5JqaQKwzuuJq7MNfhpT5qZpZ8ZEHibMRVyN3JW4td7Kk73MBEyAa8dzJiEBgZVgiaZX2DUJANpqVWqE11ZB",
  "key6": "5ChARHJTpkHUZBzHpdKBF51nNDC9wfJJwFHTyw9H85A2BrQqFRCw4A8GF1Gx8Hyh4VcV9sEBVjJx91uXTW6p89b9",
  "key7": "4Tec1DLj4QL9975p83dtPv7Ba8yDNKMKN212vKNRCz4bPWUNXUWz3Prqa7wS6ZKZ6DZYwssRmzFcECvg2M9n5Xjj",
  "key8": "5YsZAYwdav3CtzkXjPLez2R136gY4fJNmV5arZpbwF7is67dzvtFqv2mgRq9ETnxXbgBQVYpgWikP7M4bbEqSw5q",
  "key9": "YTNwGXKHx1jFJVPxwYMn3yXSWBp1myXWu7zShEe223J4VM1d49nUXFhAZmyBGQ6JqZQmZtvUrDNynGcYizUuiTo",
  "key10": "47NS927GPkm2YkNzyhCg9LYpLf4tgocPEE74CQBKu48gdf5UowRVoCQyEotaaRG7G6TJdzPRgcMXnztucFGgMKhN",
  "key11": "2E5RcsMLX349H3ogQoYCZ9pcnWXk8RDMeNTa4AZHaZLnjgmS9ATovFkA2P5YYPtVXQMSjhtowoDPXTojL7MYPcao",
  "key12": "5Ef3VkULjXJSjbAMafdFxTRCDSpn9tTdNnRZC4nYh3MgEw5VzXgW1nV6MfefbugHQVbJv4yGdb8dK4p5vFRztRSA",
  "key13": "4gnKjMTvoX5BHN28F3JaeKAceeJnMTWtDRUKSYNQu8p2zRdmzM1xMa1reXW46wx3ejEhTi3VbbvK2oetigP994mT",
  "key14": "3HsC5ex2mxedPwt1qCkYFaNkgBczF2SsFu8L9oPv5sDzmJkfLuywWBqsLrHJSnLELwQsts1UisQQiLefNKchdtZ6",
  "key15": "5e2PrDxkcJotXGqZq9TVGFbCdouLkjHtyCW1xgUQX2SM2PsDRDcnpWmaMFQzTFYsrofdCeBLHGaLnEz1YhJCyVam",
  "key16": "569ZTvGxz53ZGFyAEP8ztNGbmafk51Srw4HVWNKumaqWWLwoVeh22KN6rade5NmbjLWG9oep787t3nQwS5hXM6Uo",
  "key17": "2ZkYsdgq6arn2BUg6dPQtFTWKHvaz4fDPwmuw9QjNdNbiCPBFxLrWSppjkezMM35TGyvUBU93d5GCgswPzS8W6Nt",
  "key18": "4sxd2qKL92AByP37ccdBkAPy7SeHyAFHon6TqxZspHsWRcurBdnbSD63h2LMJSU1dBNBHNCCpvDXYE8KD2KKkZ69",
  "key19": "31DbBJ6rJib6LAhaF1rYqf1TnqrLbTXdG9cCb49bbeJnwsPgf4gfpSgZpAnmB584MERXMk4cpVNNaHLRsgdqZjpB",
  "key20": "ipqVq2SX62bPF6dEwUJSL84X9V66kEZVtA6jnNVh7VZ9ArDABAabayJtErRLi9CGBS9fBgDHep1BE46mUJhe3tZ",
  "key21": "2u1ioZ7Ge2mTRy273Er2wUaQzjUsUEta6i9fNDFRM3DnzdfHDF9dP96RnReFsRqiUKmwu5Z8WPPbPZwqKkC6yBrH",
  "key22": "43x2weX5yME4UFw8QLeUZg9jrZHxmUgAB5TeB4QdFtNkjys1Yp9JSBB2asuUfWTHqxtH6MHxR49RwrhTRNe51XBx",
  "key23": "jpyeT6bJWDcAQYrK98HvZW4iwMu9LELmVru34LLnBbcuutetZ9vEJDAdYsairs6Kix395Et2egLysvnDHaenA93",
  "key24": "xXyNrk41P8Kd2fz92TNDvEM8oXv4XLj68KoWaehJNaoFW8CHtXpyHu6vw3v832MthUN8PDuohYhWzDGiczXXRo3",
  "key25": "2ERUKx5Q6SgpPXuSNy8VwicNa5KRB2PhcgFUW8MnfFZD7B48hzEZ2ntdyFLi5uypfKkDSLTSgAYVHt3NBuYyjZAo",
  "key26": "3vK4q8CeuAvKbckNFc4kWwrNHQ8XnS1S9tGqq1HC6Chp28hbqCPwDn2kLud75oCHppS73YrKKJVE7GFoPuPtogvh",
  "key27": "AXoUi5XQSQvpy9t5kUKeMmJ7exow624MYppREvhYNcuGr5Ai2u5xQ3PmtFoL6fWFc43qfZnftmrqotLN6z7rEXF",
  "key28": "55rMWoM3iThLLw39gAf1GxDUZ5pYvbCjiNyBUcNPrwq3c6HhvVQ62WeDoS4x7nMWFYJJZ4AVn5vHwcqFKZW95Bbf",
  "key29": "2uX9bee5qTrCpZQGJ5rGffiG3DePrKKzoSL12RgNmT5i743R7VXixqNpceosmhe3pMLJQRJctkQqgQwS5XtqTW1m",
  "key30": "4GC72Y8MRDeBkVxk2kGC75oEEDdoiuNUiJYT5MgV4J5Ycn174TVcyjWZ42sN6EECe2yLkYxZdbvHXY2DNP7bNCEp",
  "key31": "5ESqzjVAuQR1kruHpyhCD8DSmcV3LHkHJxT9S3vnaDyuVCDU2YASze6FH4Wwun3Y33A8xyVGhsjWYGy2WkNSvzty",
  "key32": "2Xjh9wvr8XhatvaAjxoaF3ea4wiVJbB1xqG29tZU1g1iR69JCNGhBvXt3aM3UeXfi624Uyj299PtPGd5rumus3cv",
  "key33": "KhAvdKj3TZ88eYAbLShVsK4SAibBuAsDZF15HYcTwmvkTzZ631GtHC14z7JpatrudLYDEJ2Gc6xnvmCEnsT5qGU",
  "key34": "4qmc8tbpvpLkcRqjoDL1uzdVwKs1TxbeYkauSvL5ieZ9XNvyBd9DdzKQ5wRnZ5fMt1DoiAppMAgrSCgWpkMGLA7x",
  "key35": "3uJhtfpKzZsPxAaYgDsdNBHDgNnBg1Xv7WBKacCBJ2X7THdxc8ZALELg5rUL1MLPLZCixondEexLus5Dj8P3p3tv",
  "key36": "4VqeTyvjsYAr92uDH9ZPJyPRUix3qJfrZJsv2DSRMme4yFvtCTYYBGXQUMeKA3eAGqhLXEBTAhVBZhR8LH5BD3pG",
  "key37": "2WBTeSnhWDYZKguiVsqNB2fRKE5T6E86x2MypXj9YtZcW2oxeY4LePhFGYZx2ZfaKFpkcZY4vXnsUyjKG8w2Kvxo",
  "key38": "3mXwMUxLQ2i7qg6R3UiJ3CU3ft3u7MgVsMWNd6aianiAHZiUpTwtobYEr3hEaaocf4obBuXAtMcXDkqHYSuUkPjr",
  "key39": "2Ma1Edggq4KuC5CccVQD7Eoky67stjXizLKtPY7CtBS2NT4nR7MqPPYaaLLT9qUpcqTRBq5UxdvtTjbHfQG3vYsW",
  "key40": "27bJSdHTyAB3ExRve9PjpQjxdVaytcRAsz2NkB4h91ss1Vdk2hLcWJZBqsFaqu2KHb5ZpLuKn2g2gN5N3wivHHcu",
  "key41": "5RvF2fFcU11tS7AeQpTBVUpB3QMyFJ2KvkES8jFFoJgsqFirVY6JpkdXN9gvwwg2cBdWcPL2Pt5SSPBFE1NrsTbo"
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
