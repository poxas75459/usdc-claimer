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
    "5mmUL2xZ1xHYykJwoXRo8ReG8kyd6cNPyVEPYzS13ZJVL82LhcpaWMYFUS5tLjF6tuYaE7rBvQX3xSGjGinN5jhM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28CGDoRKQ8n7piJaBsAaQtNwhCcppPg82Ldtc49rUmZcATGT6XG444uEkyYUzevtdCRi6GCrKepgJYVRCdmaMxbM",
  "key1": "mbTq4orYEt6LiVgxnmsvSLCzSqBq72fKHmAVh2qDVeRBEWU6ZAcmRQaBiAeimS1TAg9vF5HzSqhwzuvVM8aauUz",
  "key2": "4hsA7ApU6oCzwcvDBLV2mHAcTHcuTe7QXPMHLyfZg4LUx7jWi2WjwdTB7zyrecCD7zvoaeBt2JrJmV4Kge9BYNWu",
  "key3": "4CZEG1kbUhYsKRiQQZH6yCmBkqnAGnEAgp4Eob9oMrwqidHVZLGpbaHjrAktd7AQCM6nbprESaCe5kd5TS7Y8wVn",
  "key4": "3xjNpuFJ3XDLLcQdfVFyCjD2oFpoaq226bvnTRqjFrhr9NGFrsvqguzR28UpCjith7i39Kvp3PGUbgQAB5NWhPgy",
  "key5": "5mKqfXMGijDdqjqNGo3wXcQkbMNEepHmatZxZAyoEa9ytqosSKhRd58fd3rfPdwrmKxLiATuEKLtWn8pvUCpzMiu",
  "key6": "5ZLcKfwv83mkt5cqeduPyQuCAQEQLyuPocKvkvnURgFwBX6SW3PvwV5PCseTWUnkFm1GUUM13VbNwWvjED5uqFsh",
  "key7": "2nRxCu9b9vvVyyK2X2LwDQjXpEh6aLrg9h8cjUdE46yfEhyZyro6RtPRXiKzgunqLdM92AtZC4yei7jVQqdoC823",
  "key8": "2PV4W4NfYSGHo9VQHkLXkX618DsQQCvLeiZaQ96ezokA588yk6JHwrgK853JLp79Nzr4vF1tGASMBHLePtPtHSEu",
  "key9": "4mGqkWxx4uMA4iQYRU6d9RbvXBPrKFtYNfnEwZVPvS3NBQjfjh1i9W43T1zMVKxD2USC1yZjhxGTYWFcgzUBJcuw",
  "key10": "krzFoWgdSoRzAr4FY5N8J6Dd8hek4cobv67M74jWvtyNNyWHqZPJNaoYRnbNpErNEYjY3xsGbvrd2rH5Pi6TgeJ",
  "key11": "4fm8NrBdr7cNcaWbRv8bU2afArXPL1jgFaQGzqW8GMcjDQH3PubeLiRm1gCLwLMDadYXKeNGNDgs7b6N4wHcYzx9",
  "key12": "3VUN4Y5QnWXwjarSbWiyDAaejzfCjWEz83MjysnzRkWGGzAjG9pWicmaAtMDNWxuVL2t1WitDsbRJt9xmfh4uFwn",
  "key13": "5NM7xP7gYdcpz3c9YQog9RqJbHxH2XdHYCYQY1rrCjcGk551v37mtpqsnXW5VCYKvRw5tCmR5HSN2u9Bs82Rx8CB",
  "key14": "wUVUfP5mTomTnN7erwEd3AebJkwwaEvAeFASxmvzcHdpgVqR2tiKKvvPdpN2X8Gwd7YNMxCc1RRrnAzrw5kUZff",
  "key15": "5owWpu63EZ7HT1aCJw83LgrayEqGNy2JYtQdtXLA6xt97CBXCmNdkeTRmsXJBzs7JVp7DviSfHsaJq3uML4ML2u8",
  "key16": "5WPJyrb3Q6auPnqt2LYET3CXuPQqBQarkeXzLH59rcBuF64x9HmigvkFFWg9Wr6X5hN85PLjgCySvhPQ1Yg3Uvkg",
  "key17": "4QjpzCJYVCiFWMWhd7qXFSSVQHcy9sHWvqe8btBcLaTMs9KLdfVSSVTrLpXpxw9tPZuGsrKrEv85VuunRrXVN9jx",
  "key18": "3CB1qgLQJjp9rmiK5vRKxwCqwUbjxRLkh4oXQd9us1JYVcq8GfYL5QQMkwvxjpB5PDaXZbFxkkHjbJBGnd8r4Ycj",
  "key19": "3gRMJW6S78WQ29tgJZu9taLFgEh4neBZyXfCGrpKPEooKHz39d2EgwygryPWwLcJF5aYAAKerizdXuryvB2U5b2w",
  "key20": "AL84K9qiZX5ozgQYZtva7kUTjBHKcoTd7jXERfD8ycmHQCeZ4wgcaK2kjqz2UjMR2NV1M9PCNjyHxUvfswge3Qm",
  "key21": "38F23yFFVhG6kc5Wia4XRLoH3LTN4drR3dnnnmMpvWwS1QVknCfRCfYPzHCmSeTHmuPzQsXUVNNUpiYjTLwyirWX",
  "key22": "3dQ3EnMYY8HPHXNcrBudKRiaJAZjkJXapToJmwWbwjbASU3Mu8UsdE4Kbh2KtK2zbksU44zPaNsHXJckPrD6J8YD",
  "key23": "2YjSsdocJkBvMfjmbfXpsjGYKsGBCRkvi7j8WsMFEhSShksN5NNMforEjWb74Uk6sBSbyuFyHuQr2gFCrUDLqpu5",
  "key24": "3uQsPfFBRX3yoLRiMYooQZFsAuLwtjfvJzRCTVEaypcTLADA8NMK5rnnUC9YmqnKJKNUJw1bRuxCYx2ANP8JS2us",
  "key25": "3vPqYDxccivdbjZcMpieQuBnvq3a3Byf9fFtEzrwgSGDxLpxv5vebAZp7zga1XLsW5oZbVUFaz4sqhJs811vEeFc",
  "key26": "66xgdQmiM2nqxxsPeZRK758heNHvWak2V8R3xFDPA5xWucW4ATauyLZFpyuDRYLh9JacxeW5EpcLGefmBEaTd26C",
  "key27": "E8MyJU6JiVuf1xPDMCrUrfkpWjzudHzfWaSTsHCHD1spVWAdj5GhJvp8w3QDzmBMEjcXWWmX2AAcyzHqUnVoQcf",
  "key28": "3iJHFvi4HsFsVi4SYKaWB9MNZrYtg2xgopjKDZG3eZU33HSXFE88NuJyo8DcCrLRNWvKMASRQUtspAVyPX2V7cXD",
  "key29": "5FYPoJjhGK6zFLRFbN9rw5JCBLR2MyNFTFDAKRsQ37viSj2TcMqToKp2HuDKnKaGsE54Dqyu7YYpXcm1vHWnVf5g",
  "key30": "2nwoqU4kpQmjxNLrsoowqp2sng6jX8o1em8W9yKAxK6FTzo7VazrUZeHpzX6xi3WVzZbSSjhJbXpDDxaubc2hMJY",
  "key31": "3A898NcSJnLymM84skuSJ6WftQ7KSd7gfUmbjrDfFBi7epooFShqEU6Sq8b2sdEATkz2V163mtHLnSxAPkmBEXc",
  "key32": "fc2Wz6h1qFJAourjRtX9sfFxpxRRiwXcEvAEaWFqas2ZW2UPK1mLz8TB3j2yt877QFQLNeULFNBdgoy8hgSpyug",
  "key33": "63tXTK4UniJgZ1cgpR9cwnTk8Zy6e97uqyMZ4PEfY9HGh6wbuqBVWxeV2crYi6iRZufoKKQcc7AUkN6kz17qzWN9",
  "key34": "KuaicgbUryWWiWFHB6TJq1SZBNuV97YfD3JLrHZbWaEGEESg9nmZWCjtgCGWocUWq9Q6u8Fisjcqs38s2BZBbHz",
  "key35": "4mbxfmNdLKcfdJiAh915pFhNk3F3KJ6oKGStTbAWeB7pPXRP6zpS7B5eBiDHHaECaj4tJBx6sAWH9CCVWeD1WywC",
  "key36": "39h5p6PPkYFAGTAqDnezguFg1DCwcZfAarNZx1TF53vd4oqZ3M5n6BQ9qwhfFy9v8pgeJ5KaMJPpK1TxqAMyj7Rq",
  "key37": "5yNXh7qZ4j1NZbMyY4n5rvM3E97hVuoVmMb9VroCotVdN6KfwutKnuKZYM38dqpfjXQt8TaK2U8Ykcakv87zWKUr",
  "key38": "4wzvmufbjtp3qT7GVucxBYkAzNy3ZSUHZwhQfeEr3tkA1Md4jZpAXzX3dhnw7rX5tyZPHWhg7tjkNCzVgjCGCAwr",
  "key39": "3Ff2raEmysHeDB2hBQfAChBuoKs9qmBSjVfCKPddGBghAKKPmWaz6x52DNQCg2a5F3zVPey5HZVC7F2eTnqgZjeK",
  "key40": "57YFR5tJQUStNGKho1DArZzAomPAxXqdUjRbDn5jkpncP5aLy3f8STsxBn4gQFkALNo6Thwgzp2v4p63indtiw86",
  "key41": "5dVvUB1unsxyeCieSijzG1J8EcLx4TZYBEerGL5dPHQ1JaGxSerSvGGRoi2bymCNgXvDr3QHd9dGk9MijvHkzBSi",
  "key42": "5A8WTJ8t8m8UEXaNDxTV44tyArAgxg8qpTAtQJZwkP85tY4vgKJW3w7Z6Vb8BYQXEdw2e3xcustspDMQ43tGE7p4",
  "key43": "M6iwvqASntubuGm79ZpvWHLSwQwXf8DNvhDkjmmMcy4skHxUTGgLCu2K8QJgw3KDrVNaDjVmkpp9FEdAghcbzCq",
  "key44": "656BRysP68ya6WfmTxNTGaBxATeNekXrC7eHPTDWFSmwLyBdbK3ktrndyw23mE9FiHzASWQFQ2N2Ar7MC4bkCDeE",
  "key45": "4hnVG3g9iwb83RgfusQt3H6BfSPcUhGCWRKHzqmWnxuGjLS46MPAKxTdxq1MmQbXrBEL62DE2799RBXdWbFsAdAZ",
  "key46": "5Uye9Pn2LSWqgKQMeHsyne4C5oTfqSwrQHNnZVJU4HmwpYULaBJPJ5fYQsA8KHYShxVdBwj6A2EKUEnYXMj1CmNc",
  "key47": "5UNm9XDyGpDSwtnDnLbife16t6f9F77S124DoU1f7KFvmmS3EJHizeaKydoSGkQXBqj6wwimYrB7Mdx699aFwkgP"
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
