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
    "cNgTVB2kLDMbCywWGSk6KPtHeX9VsTnAvASoM37Ze9XvoKMYDMvo7ck61JoWgkU3bHWVJCVvmsEUFBPJ6E9KxjB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qEAFQT7G5ctg1A6PeHAzdLS3f7FaFZeVLGGUW3zSdpz4YmzuSTovPgC7Ln3dRZGm2zHkfL3Dx5xd9XdxSfcFW9E",
  "key1": "59c1dnpCst8uqyd1hov5TnpB5Gxtp7nJiSuw7b6nnZMoZvGSxpAPeSYMmbiASYrQ2dZQKbrYbJzN2F4bFsoGZS4Q",
  "key2": "52eawJ8yX28DA8x8Z9Sc9zQtApXhujQtcanYNQNuzgNmHMz4TPW5e8fcrLyXeDsjnWD6rX6eWjANxrQqxStWjohv",
  "key3": "64c1gyz324XRTuFuhzSzKL1iSMGvpdtVK9MsmbLBXjGU56t8t8mpTareGGX3znnEBpDG1EPH5WnWhFLkjVTkaPXx",
  "key4": "44FQKg55qpnFhQ9wGoiQUbjVBA7aK1Di5Tw11Zm3ngr6MYtD7DnkrMo6N8hShcgsvmpJCLc2c4htCyudbf9rTLLY",
  "key5": "3am5BvKhzyhkGgYoSkHGhFtYXVkkXcaCBrcMCSV4bZEPLhZbvHjMgVEWx5pLn455AcfVrgssF6wSZg34oLQwqx5c",
  "key6": "4kFMSiPSZuWQAWVeGzrBNezjwkF64SwFRAg2B1Az5CM5TaNwLWNrDR8aC422dMGouHM99aYgz8T85AE8HfX8AD9x",
  "key7": "5WPvK7m6Bz1cUXaPRMVgaszJpRYC41MMLdH669eQkMz2zeAy2ah9BiXF4ZxFHBWwCScoTweTMNnSvko7Yx9yN2hY",
  "key8": "53njivyXx2UaQoV2b3hosp5XN8K7y9TYEj97aYMjajKSZBXaZnmNDjMzzWy39iEYTHWi4tCWUMDEUwf33iAxB8W7",
  "key9": "9oGe5DUL35Nr1gbtqWqgDiK92NaFwyjgeciX9qvWfjFQUZiq4RuXASabY8t52kimoEz6MdWuVW8P3WVLmQ5DfNS",
  "key10": "4jyDHnGi7mbNSHmxd77qoKiBGRJa4YtSEqsQ8vEWj8oyjRVbwmqMu8FqJpzceqZpSeu2CPDXyuTeUQLS9weCiu1v",
  "key11": "3tqEWytxTGdfD3ruSUMMeLQVVS5nqHcYzsRn4cRykawyGEyCSHk847ojUuAz3onTyZk6knyM26Cx3MmMZ1ScZxo2",
  "key12": "qSpaR9dq92d8cQERdYytzDccUAAQeNr1B6ywjScxgbDu3JgAQJDwYXTsvwNjVzgtcvpnfJgbGEpPfdkayirjSj1",
  "key13": "CkLsggjAHvxpmDqyXCirtpbrDa7UPVxyAyEdA8VsVWN3HZ3iEqdwwkqa7e2jxNgBDRjWMDsfkTZJ7BE69qk4jhR",
  "key14": "5Jyzy7Cy4efampgiCTssVrETKMq4A7AKU2bAkizbEfew2XG6oo6ftvEDcEaWJAwCZx12QZuh7B8RvxbkDGsqaTAS",
  "key15": "54FmYTKFuQVvG57mFSACNgSAyyVZDgbcrT65ASM8CanxrBzpnGJspqznWm5PsAGPuRGyMyb7MGDp19zUWYhs6Vqk",
  "key16": "5zRtb6odcKtmuRYHF9tZVkUmMhaCptkUbdAJgyS2QsdWHAfXahL8HHtyCxhQSht3XkzMWZqPqxs6qzrMwpwdTN7t",
  "key17": "5rXLE95wCVQA488b47vfCU4KLpo6oq5UuAJJvdHsZAY8b1jaam2r7eCx9UwPoYM4NHMemcxYLPTD1Ho5e2JeZxYL",
  "key18": "5Dc6NHPeKekEv2jnHwJvgb3TzHDfaCpvLxqYqrJhmDD6gb1aSd9mrghuDZMCg3qXSCbaebLvdHev6u9pYX1yboWL",
  "key19": "33JCQ7vPbK2iFnheoUsfneRdcuu7BsyJ58XkYJnzMDBjWQEKq26pTqahqr1a9xu5hxxAvqcHsxMqjvBN4BqQogBM",
  "key20": "kjgitjpdGHXbQsCHMPSDbXm7tyGhjgPPep8N198VWoo3dWZ3oRHENYo6EzH2TDwpZfPzvYSLuK7sZaQwUJK1a8n",
  "key21": "4A69zN3j76oogNCUqTvbzPBF92ZScZxRDeqtyQc65hnGF8CxKMQSV21dwMidKdiVuYweyXE4U17tdfPo66az5fcy",
  "key22": "3WSrzqysoFKn3ytD7kwRNhyJnPwDq6pXY8ePfNGXYvmtfLcSyu45moyJYMnG1MtS27urkFFTTdiNHfXDgr9esUUv",
  "key23": "mvQ7sgJ9RVz6J3KcVCFS9w7Rh88TtfQYjPB3TVtFkYJwfDqUV64T8CPZToc3DYjagUWhDfpeGAAQxEM5H3X1J7m",
  "key24": "4jap3N373hRNTwerjodqtke2wb8vCPnZHzogWY747M9UmUdJfzULPTGdB2CV173B4ydFjN7zyjrgtoxwYXEJLHxy",
  "key25": "3EF3rML9Dz7yxjeCtoRnQmtJ5oUoP22kFHPAmEerqx9XqCCMPhJQ6GQGJzES1BAbPezccFc57MmY1WW8pqdbR5JB",
  "key26": "B9EbsPxPEKEfLw4NMEC7Z5XQmhFSa5wvYToHp84vV7KCyGGwXSwYAxbYd5pdHnhRA7iRnk3YFEZg94GKtD42JKU",
  "key27": "3qUahfZrauqKkmd3jE8D2dhzBemzyutfU652qcjy61aj947ZDi7TSXSGum2ocWvPcziFFbDH5ivpDeEraxS9Uv9A",
  "key28": "5n6Q5f2RQc64yREtn1FdaunzXsCmEbn7KtdfVzeYxvQZakD4S8G9y2WZ7A87A5Zp7W12v9YNpfianuEy6ssNjfP2",
  "key29": "3dJ4jCHqadrvn1uS2vxypRBfXHgwFpAKNGo3BVgfkWhBEZfBDVrcow5MrnPrdUZojzxdSmTBsCjWXL3ysgXBnkbi",
  "key30": "2GjbMASE8ANwvpNfVPB29YVHuBv9bLP8JkfGLGFqZ7jgPYC6kFNqdxdARiEFxgaRfTfsmjxBDusX4eRQvczVe8Go",
  "key31": "oTSfGbjt9Y38hk6gA3q2NTasLgL7J6vEQiskAvuCZ7iZwNBWtTUChBhWFwskicPZHDQm5753fRiQasdNNx3JbN3",
  "key32": "2gM5tDJhCws9DBZAY6zvm4WF3YYpBQUhfbLNcxoB6fmdA4BUjPuqWpE5Mvnb3NULBks3npjk4Gx6VFYYUSF1KYo8",
  "key33": "3FLfSAV8wdpPgKSnSATpwtrRGT84CTndVhk4a4h8dwBHZVJRDkFbUXX6BCWA8BEwc9aGVDU3Jg97sPLpAqNt9aXD",
  "key34": "593JaveddZXAxEhb4WQTEP8uD5Cuy9koZ4yFKXA52WGdL59iU2yoSvWsByRKA3anVUCnbzyEpERgPKC5XwCBr1ZJ",
  "key35": "xE1qmRmYhNNZwBsPWxsW1KdvX2tRw2Dwf3hB2yxiuNnjmu4pDtiJHqLen2jGoGzXfXayQbfvHNVramstUYyyjMS",
  "key36": "nPPTXr4DpZDzEmMpHsNzH3GHGv7xfnFBSjEwydyuf8u4mDRbmNmFXD7vdhbUnExFykDqAQFqWYCqNsDQMMkCrLG",
  "key37": "2FUPG1MUCFf3zP5AfbHsbUaiUopBQYrP6aQaBxsA6SYiQ3iZWHzHxsSE9Yiiu9JA2KtPbKZ6arUiKyjZKEnqQ2gh",
  "key38": "55UjsBvwYRzzfLLE2FRjpNoSCGtUJwFEGPecTsbsY2332bbr6fen5fL3vwZoYGACrh1xNcqfukRgqWvmFrhASasB",
  "key39": "3Vqtxe4rf541AwHMypqV9WSbuUNtyhkWpNfWb52hJwt8k6SnJQvwW5zJZJoo3hrVLWofUnTbikZV62UpArZGqdsi",
  "key40": "5LbY2PnN5zvihghnj6XqVZ5QF5wzSitcjxV8hJQKE9a7ZPeAh912iLFwdYGqnV4Zhi6m5qT5try81Uo7zhhqfwBt",
  "key41": "4dyTrBUZjKj7ahTjgxH5Rskuqfq8MPFeZ48yLvAqy1efKa2gu82rf2JhmWHvkoT6cPs7BxqMNngbMxiNE4X21qGE",
  "key42": "5MhfJBL6LS72RTEaYV5gkXMNz3Qru11g1Jd2ka8fH3SduUhnwx8wz5882dWdr7f1cTjUUtLViPKsTrfJNxkgvGgZ",
  "key43": "4BwswZQ8YvpnxeKUbc2V6a7g7oykzHrXMzFhh6ARtvD7fkAQEdsAY85qvbxjZ7RSoUsbgNAtLkbESZP2iRBpdJmM"
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
