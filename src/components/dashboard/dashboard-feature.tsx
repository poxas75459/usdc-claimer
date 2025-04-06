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
    "2yfYVPLarjUR98SatMiPKLEjBiiExnbZ3ecKkxaDrGhA1wzUEW2m34on68xp2KBi5k4A7rnNYJCVTJxi5g4VELR7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sU19PBpedM9FGLYEgA523C9NGS4xr9g2WWK835nfe8uRqJrz1VqRTcwqRW7dfT6TUys7qaah2TYKZt76EuG2ex6",
  "key1": "3m44NWfyvCQWRFZsjGYbocYyP4Qb3fh4VXXK4qwpTsthyDzMt6aeTPn4geAL8kFMLTjuXusr9DK3CEGs97PUr6tF",
  "key2": "F6hcDtRjJGHjnXPwNqiavUW9M39kLHLYmMwRLnYx5EWSrk4Z41xFbjXJV12YWxsjVX3332hA8VsUWSvmTMiNFTE",
  "key3": "4p6uzgfKzF5ZwAGaoQUPvSUdf5XTufgxcfBpuQqK4v7EGiY2M6r1o7BV9KXgzCcUZs6GFaWhHvWFCWDcvnqmGvqW",
  "key4": "4YG3LfCWSiWprt1z4nPw9eE6QdzWQQ4kw5QkqwAoTgd6TfNPLNMEeF4cZuHXQon3u4jCQUi6ULLQhNiZCzNamG3k",
  "key5": "4AjNarnEkS4LvvpymusLJH4a6qky8aiD1Yy3QitCw4UrJSKjSKH5uYF3ZpRqUwMhvqxiaG6hVAQE8qJug7yfoUry",
  "key6": "CD3RabUtgzambjx8zEqeKnbRumnJDtDewvGFVQvVG2sbNQkrKqRMCrqhgXbd8LS1kLBM99Q9GAPp9wo8h7hXCFp",
  "key7": "4TpPpxJSE7v7wYksur1YgZDDELP9DFzDgT9r7jGLbgLCZbtD9AvXeXrxaHxzTY6jcLpAMEm66dBwsBRBsxBSMdFX",
  "key8": "5FixaDteG51FdxSScUwVtUJbMZzPiRzgrMvDr7fgDoergVuZKPLvAiqXBCDTGF2JYiXqmbrFpL7U3ZjBNYBT3UxD",
  "key9": "3s3NuUUqYhK8aU7qaTxydRCJRYgiRa9uNqjbKxHggvdGn37yc5zrBwTNmBCv8LFUhkGzmgfcFcTJdfLFmwJ6fKqB",
  "key10": "5vNqX9kTXuiBsZBoEYRxvPCEsJN3fyM4WqgsvFx9XbVAJxcpznEf5TQff9C8DpoYnkzC15YWTooBWedwTedxVWyd",
  "key11": "4MsTvnup4gxYqi1o3y5bNutLSndtixXnYRsxH55NgJoxH2ZyoRL3DVewH1E7jAUvPdGskSGno4jN4KZHYz9f92n7",
  "key12": "4pQgsdxQ7qpjkWkguzM7xgMhCpHNWBEbLwW4Zde9xR9wVg1pDXDEMWLVat7HnGgJeMSeB8ekX8W5nSAk9on1Uwmt",
  "key13": "5ReDnD9hNoUYjHeNpo1DMpwTJ8YdBvBbXNnrnrCCExc1vjkYr9KNKt5H8GX1N5fQ8ohfqjV1E2SnQFcxXKmj28ox",
  "key14": "5McqgoAXQXMCY9PPtL4PMDx8EnVdHXtU1zB8YM5n3TEKTZJBVC8PBcfwu124T28r8KUsUr5YJPBdtbMqShfXHKqL",
  "key15": "5DJAZxEwK4wgRYstxSWE45mUiQs21xaAAFk8NGHToWRaeFw8P4Tbqw5h4QB5PpJntQqHKF9PFhd2jm2vMC3MtyD",
  "key16": "4hMCQ4QEtaJm12277tcgP6EpVmjb6KLNnHWgJeQQVUaf9sZZxxQBLGf8AxWDZZxDbu7W4wPcC2giGmva7ZpV8j4q",
  "key17": "4AZBf6V3MV7akC9W7o7gX2e4KyTogdvHX2rTJWmzdo5vNjgqFB7j55jxXvGrfTEED7h5EvEtk9gBFgdv6CMoCiCH",
  "key18": "2RqmU25XRLg6ScPLKn3JCb4N9BbJkkuFgnmQvRUx8j86BymrFPbi6Kuj8wBbfpb6ekpRpPq4MsHqHKdVkuco7Gsm",
  "key19": "5A9RnNS9Y6uXKbvzGngmNotARrwGCTVByKHHDfDxLrig98UjPeVhXk648Q4sKVFXLC1ujrb88nW2BGPKVNfZFi64",
  "key20": "4LiktmWcaNSe7SwEfqkRmz9XZd3M7JaqnCkZuo4pHqn3SBNhT7w8wSWYGVfVjyDMxCUKKad1fmjQNF6Ld8XQGvmU",
  "key21": "5LfrtUefMHDngpvkuApGz6cHf2QHynCsvEkARGX5BJ2ninrMG7QcGpLx2iVgGWFBDkyKpRhcB4rgQYUi5U5ESgbm",
  "key22": "3EkoAxS2oR8fQVBaiRtXqXScV6p11eHHg4xaXZrVUFTyZiKcyFCbtovhT64kpxQ58dUzWB6vxaFvBVmoQgA1tzSu",
  "key23": "2bPLPfj9eQxt22XpKnaxE2VmLr1cZ8tVkrH82MiavL78AhthkPwoKWHSxddofhJ6Ndgrq4PFQFdVG77TL4MT6SKf",
  "key24": "5es3robFzPQFUhDB7gSeLx6Pcwb4k6HvpwZhEbDah9GadnSX8M6pWKtveNRtRuGiv18dxyW7uiTwjSL2Q3LkV2jD",
  "key25": "443f55qZus3GjJcaQ9h9bF8AQnFFyB4zJxSkdUQrXtbNHiQusALMZXj9TYFCYPXaqSPco1YDTCGf4dGLn4m52gYo",
  "key26": "5caqqpR33aBVEVGfSo4vrmKiVin8KQrr4XW8hggLYWdRfoijGL8QB9Vuz7okEBXDBVx29mWYZSBwa54tDjEV993g",
  "key27": "2doNbFLmV999q1iyLbDWNCervNoqp1vShG2q4RVMxFFDz9SuSgdASMfXt1Mb2mQFHeYZU5bqj5mYV6fgMqZdQH2r",
  "key28": "4KRTuxiWGV9HdFu54rSjDQBxWebge7PG7HnsND45bnb3JduCyLy8zk4ZRpCMpybZXMe8Nha5frTYUDWSf6eSUeHX",
  "key29": "5uUoCiaY8t52egfYNw69h6PXY7N3gfhgWcf1urDirHicQ4im97X2EHW1TWVJKSftDW5DC8Yc3BDkcXRqxn3aEaxc",
  "key30": "7PcdETmM2jwUjnmZrQbBhz5uBigHUy8D72E7TDgEFdLB3Q5qzZxVAusjuwpisyvqfhNwBYVxQ17iUMDxDCkHsh7",
  "key31": "2JMSWNpZZvc9NhX2CPV5uefwdNmWrdGaWbisKurktWxPuTFAX6BxhroateHGGqBebHqTvNXppGFX8wanSn2z1Maq",
  "key32": "3GMnkruST89FRauUBTUBdMKKe8W9wfhpFjnQoJbWTwQWDwKZz4ZXD9qGxpwKbT35GhxH5JLDyYdVNmkokhU8cih1",
  "key33": "2rDpuB4M6bKcTrRKVyvqsrQno2uDif4vXbYY2Xhy6R1ebfLYWnCfmx8KSRDj5zUvQF319KtdYrwc2Y9GQo7NgKLu",
  "key34": "2hxTPJcLec6yvXxJ1adbvNK4WGNJ12oDhSP46kCerYWJUT4kjjjxSVqtYxAtT4rdJPT9j4mmTMoFWApJUqzvBqqp",
  "key35": "LyFQw6igCxj7bJ4GT8xufudGs2XxYxcohQLVV4tKahxxtGdFzpoXg9ga3Eic7ZTmMTYfr55NhWZ2Jfa9BTMxJF8",
  "key36": "2t2zDb4pAzhvMrAywc3bd52keKUvKD45QinPk8goq6zozQVfnd4HumSKyMuDhhxzcBRpsRuBbNZM51vZGWLMb6BB",
  "key37": "2suc5ez2GBqvmBcJoiMkYGYbd7e13T2AcBbg1HCFH164kgVH2sEWnLSn5jf4raQvKj7NDNEdQeNyh3mXtzi9x6GN",
  "key38": "4C6A5i6uiSBF7YXSTRD9dwMFse8Ap8GxNpGup4wycZBtwmySLxh5rrtT3WtPyFsZh9xXrujszjryYgbqMLhfHVGW",
  "key39": "5qBJHnvUToDB3kFiPbDJHLYw9pJ1P4J879B7Evmc13DzuUoDyFN8JMRJr3N5G8VqFL7Y4mQwsmqSgQwCLa8aiD3F",
  "key40": "24qCX3yRfDnCTkQc2msWS6U8ugXvuuxiHEajfZZR63xJoiA6WrqQcAxEYQTg6Y4hwZkbGSt6bF7zLMac38LELiVX"
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
