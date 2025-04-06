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
    "61gyDygh6cBgrBQTYLw38myrSgATdoDw3a45GPfJ59mevDodwMmPecjQ1krr9LXQPdy7B1VzQpJf5pq5sifqMDkP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4U9JqAreDn2zFYgMvwAC2A6tQSdWVyzs6MjCVDih4gcUzgmUs716gCLPFHsFEjFTyNQ8th2aKJVDW6gSJurTjXxN",
  "key1": "33KHwwHewcU4ExU3tocxrRJqhL9QUNyV6AGpNHHB1vNz6ptXrPkWB7YMQcJj6dagcKxtq9bBR3z7XzdK494eF8YK",
  "key2": "4ACGNQpbcdC6qH6RMY8AVEugP381on4D8JgN9tFpHz67znrh5geG3p4jryQLXCGtZMELBhsydmCcaKUUeDMg2DVp",
  "key3": "3Unvcyqp2QXfDZuE3SYniaVSY5RedTE1daqUsW8xgDQWkErXoWENeCFXpkwPWDQP8VdyuaSfAdy8MiAmCwquezs5",
  "key4": "47PaGCsYrtyioySCD6xE6gMrmnwdHNJ6mUr2LXvyE3jp4tTHxBsQjTEf8BeUb5kkvhFoDJa2t8JR6W21tAC6awj9",
  "key5": "2WiC9dXZLAY38NAGFaqiWvgzxXW3SAnZLd8KgaDTwDxaY4QHRRt69bv4GQyBwkAs7uoVG4qmCZ3vTUD1ZdwxEEUv",
  "key6": "3H5WNRq2VbH4HBvyF8XcVvzFxKV5ucDWeYjrxFbQ76KqFLCKbMMvcctwzzdBAzGBQrwCwhXTkJGvzBwYRtGxmRyn",
  "key7": "5iDHiEp6bVNr5sEJHWift3Y18XBEJ9kTjF4gDhoSwQNYHPuqkreUVD1BEGRiyftVzBdWKdtzt8MuDbZk1bN4tNaY",
  "key8": "uMs86B44Na7QaxFNoiRmJZcntt1RSHG2ged87XsUJFbBuVHPWEh5gaNNiAYJSkMq22xCgdqNKpJTnJYZbfBHRrH",
  "key9": "4j5MEg8sW2y4mxwnQA2etV1RuqiDB8r6yH9VwUUSuTqgjEupoyJQB46Q4jZCSSa3sQYZ1ostNPw6UrnjynrPhv8w",
  "key10": "4kCu9ayHKzjLofMrH2Um1TUtNADpfCqHtxCxyq2VcXGtFPB5esmQztsK1eAnPo4HmVZe6ckSrXg6Gy3pLWcWshrz",
  "key11": "3Z86yc7rxYtyV75NU9zAX7qbrt2eoC315HcCDdZdjK3RvfEdnLioCK5cbCV2oNZSbhK1SKz6iHd3rQhjYA7MSqyH",
  "key12": "57VL8xnSdDwwLPCV2ipNgVTwrtNHRuSVGp3XFsj9GxmEgtRKxLbv2cZiKg1evfToPLYW1qCxUFMShsVr3upijWzb",
  "key13": "2Qg2GEpbnUhE951kutibTCQwBbx1MdBJdf9isua3CRUzLrSwaDrShqGgiNQUWRu57VepgAeNicAfSwbrvj83WkxR",
  "key14": "5JFaF8spL2ehpFpmcu5qa5eLSei9Ux5bQ2aRE7K8ZnLXoP9KoZEaQ9uYR3JEVAqdDaFHgXhEA5rKzH7WDTSy8uVB",
  "key15": "VL7fSYk2MdbjF3dkvgM1v41Px5GiYJV7Px2feTi4bYe6CajKi45CeiGmnzxGEE8WabqHdWpwD5EuifCb3muK6Sb",
  "key16": "2ZhtaEPs3wAw5k4LaAPfFNmumsCzPYkkSL5zGwn3CYL4fD6vFjFXfCccbkAdDd4Lza3Y9W37cQc4txrPvcNHUbsJ",
  "key17": "2YCVdJXJbshsTMsf5UunbZZFdwaJ1v22uK4dqRp4JsNbg1hkRoBdyJ8zExHLBfm6Vg4NRHet8Eow9MsdJaxMNkML",
  "key18": "5pyyHETWrxY1D9ECmE7sy8rHVEqLxigtBFitAeZ4QkceD5Aeb71mt3egyVeVeFDCEXTzkmgscqoD7Jz7TwNTiFbD",
  "key19": "2YSupgdYgtrCefcstHWhGuvGPRNzfgR9ZKxgMdbUBKGuTT32B2yraVrnApkkYi2REXUacvVf1tiu6cddcdKgiAQV",
  "key20": "3vMx1Z2HYi9fTH52AKHjGLTxXWpy9Fj9REJM5NzMQz4Crmf5TynSeg9QyyxhmekMStotX9b5Dt5vo8uyQfqMAz2K",
  "key21": "3ixXiAnmG8KEZgxFZcyvw5j1JJZCoApNx8VSkSHtnAMdEtycjRTNoSJV29w63qgwu37L8XKNBUrjfCzMHjdrjH8i",
  "key22": "Whb2cd9Sv9qJUTJFW9Kb4297p3VcX8D9fsiAj17uyfFDwuSqFqA2XEgPsDQVGQW44uxRTTRUCLbM7CgmVVfbCuZ",
  "key23": "3kHUsB4zBReVVU6meR1RoKwBpya2LjAXWpd5ijSegYLSXfqzi5HkQh6Duj2ndtJbfPH53aFpfZYYF8Mugj2eY3R4",
  "key24": "66J3fmSwSKQP4SE3hxQ6h654q2x8F1kH5mBk6SV8NzEsrvzVBQnTJLQGJMhqZEQTd8cz2VweQcYJzkQAPfQY39k3",
  "key25": "5znz5JbupFVFw1Mfpt9ktsWLXDJMxcF5UKxdBWz4v5GDERTnAfbEzEs5N1G2huRhUgEBwhyA2H6YN6J8aQCjCh45",
  "key26": "2fjEqiYv9s6acXSwWnyuZNnugdQ3D12rXdW2Q2hsE4oJHuzPGzLC4awqyciJ27tkF1rgmLV7J34omGupRWgF3yR6",
  "key27": "5ve7HQijCywUmvYdniMm5dLQsjFDjeeUeQAC3ebLzEWo4zUY37JmWocRBcMnHVniXL4RNj2wByCUYeSxZcTcfHuz",
  "key28": "2vQbYHfEa3U8PsuwxpfZc7M3GsPmy4yyHpsuvvBuamvAa8BRm7hnRYNTGrkWgKCLDJ4Ch6seQGAka94EsUJyJ38N",
  "key29": "4P22wYWHjJeMxCiVN7JWm2rt9cbGYmzUXvDC2KTUnV1sDs9ivDesucMt5eVD2mzUbWv1Wu6YSWgBKatfpPfFz4jM",
  "key30": "3i67kLGu9ZcWH7BPAyi4RWn2vZ1oq1A5fJ8sftgfenzaYNkwXVjM82eHSKzm9dVPBfwR4tUzyZpSDMZUa5jbugxY",
  "key31": "iKuFnGUVsBK85LMbqxREi9vG4EMfN41Xar63gfpaEwgeMWAJZWhKu36BT9XhthiGET7BaFfdKUD59LjfVGeDsgy",
  "key32": "5RxgCuUB2hDZmRJvN3qq859bXjFbtMiAD1qZdAdxUfDJQxmLJLWWsreqMQj7rCFMWN8HTRD7J4m3yXMguJQnv8xG",
  "key33": "zPYB3mPztTSQBTRfchKzoruGUFVyzNkwR9Z4GXj1g5DuKsiYVMehAzNH4g7UtHPejprtZHGT4Wqv1vxr4pyjY92",
  "key34": "H3FiPsREg6arHrZRAjWqmgdNs74vets7jKbdGyWKiZgRL4vNrGDTiRH4FjE3uGhXpVgmfKAAsmzxN2ed6YTWWUW",
  "key35": "2BM97EsD6FyefpdbuvNVghzbUvvnLHeHr8B6jgmM3AF1wAAFXYMTTRPJr9faGmNa1YdxMBSv3YYgJyF963SngJZS",
  "key36": "4GBqLSKxxtUyEivN1tN1YDmpzzjtDKq3pQYLTb5th2LSZCd5kgYS4QFyGpqFBF6WVGtNTbV3iCfQrNq2zHBnpEkY",
  "key37": "4J5dwyME7HmLV883mByM8dVsw2GSk95ZdCFVqMPCLtxWEsSREUDmbJ8xaT5RXTKH8cfJHWm8q9Y1U7ZVb2Xuo7d8",
  "key38": "2Vuhgu4UEGVB4VFT9eUTsSmhHFvE62ynhYtFu1Ar81PhTXbZni97iwzeWYTnu1zRPUaduPuJp7nUFVcx7nsWWLiQ"
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
