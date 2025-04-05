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
    "3xQWjUTSZ3oNvMkMktAzXrbSA8J4Pn3aojiYyjzzHS7kx8SH3Zxf5DbFivBzj8W5QrU4AyADmTavtsXTQ2esSzCP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zHVUhctZ3Y62bt4trpEa1qNouPzHuVRoGQG99bNW3XTRFfbHyiN693VgnkSC7KeZ4U1a5sptovUv9u1RnCZC6Bk",
  "key1": "49tjSPqt68W3CwUJtasPK251V79s4FpJkawPwdq5RLcFAtwqzaY6LUMgR3Crzy1kopPBtWKtBWnZUS9JLTV5ZxRt",
  "key2": "55DnrrxaU6Ncpz4AjVdHFtQqmbat6udWSESobxSwHA6CVxyNQsFcV5952vAyCerqg2s7HsncZNY7fR5wKADRMbzV",
  "key3": "z9y7v8Z2c3TYXTgYg9iXJ3wbLUFtph8zYtPSCkcTRFh6qHGLAXs54TuYTkStKsMd9ipP4xoKRQehpjSHx8kAPLh",
  "key4": "4gHJ7rb6892mJnZui5gPW2hKzmyfhdB7dFLyoK7orm6vLLccxYkrwq5efbARfGRhT8wSY5KeE9tEsLCmjgBdi7fM",
  "key5": "3cvg8y8Us6V3LFYTnM3cqHquco7fvXJEj5N2m8WSgm2Azof9nQ8bHP8PkUepNeBGHu8Kmr5PpJpqinUir7cNnWKC",
  "key6": "5NWoiVJx7WqBRDdBmDvR42ARAzvCfSN4bByWaa8Gh8ztJRTTQyPGR7Kw3oJH4JCZxHoYwGniMJRmhxWjvb3AVbDr",
  "key7": "2Pf1bndyA5sZPBPpgmSQAX6vWNFb22Yk2kEUcLBTTzrJDjF77qr5ymi2QofPAVFByRrFGPAyhS7EYS5crnpF2c6K",
  "key8": "5QzLnU93bf6C84CquFS19c7H1cDBTfHJLNS51bQ8XDXp4bWmWseqmfEXRYkYTovtJhBjejkJ3KDD4Qt5ABtDKiur",
  "key9": "5kNdbDUuku53qe4yzrqz1WusTj6WAxajVKnkMAyAXqph42hhuSP5ipwNtj6if9rPq99ZK9JWXniDDSmDXcfoTbM4",
  "key10": "3WqS6pDXRy9KVCh1umFNZHsDqnP2o9bZPqCryRAtsMJ4QX72sen6MVXVNVii7p74mhAavifEJcPeeMW6bvo5PQjf",
  "key11": "b12xeo5mogQ6zdbs7RhLsWdTR1ycsRy3MZh2V9twP5YipikDyoynd9iim4DRsDDivJpWYWfPjDn9bcPvBx556hj",
  "key12": "3DDV3cURDubW6F9CYvETmaVYeyDEaeJ8u5gCB13PkrAafSYrt6J8tBHXdFmb4ScYVdpUC9AhQCp85qjBDdz7sT2y",
  "key13": "3pj435LXXKsqN4Ffzsf6UTTqvxYWjBXnYEQMaTaiazYuhgi2BxyUVq6ji2tQ6sdjVNRoi4SC9L5DKv3emJnhvbjB",
  "key14": "5nZ7Zogc1BhenLK98rHr4aPnvGpQF8Q88fpUjgpAbyXHgWBGTfns8vSv2XDdXPpZ841rEMpP1d2hqKpxq21yHFEx",
  "key15": "dd8gd1pTNNPHDLxuJSCKjMJR9oWJfr3LuRMN5NbdfLzfXiHJ8kkMYvMcLX5zsvzTJN5QTDw3UMtvjKNGrYxZhkp",
  "key16": "4UK2XV8oU2FSJwZLNY2sLxsYhVeM9q8RDrKNtjQBxLo5XL7o9yGrx3D9gJvUEA2P3P4dLy3HNU5iCYwrxxqCZugR",
  "key17": "xmP3y6UoceRbhNzJFNTtXqK1dAW1M8JqyL5TKM1pBLssotSpaRgTCvbXt931LK3dczWf3GiNxowGSD3xHJbCb6K",
  "key18": "4GH7FYKFWUNHq2i6r614HmF6SPrsfP41rExTU9D5vL6Kp9YHCQ9jHKzzgzTQDWfY7V4oofFGatBSiFKcrNJnMwwo",
  "key19": "5xCHqLaWF6bEjLezjmEVRhorGGQoWbwDem9KfCJDYoZxtF1M5ivcthPYbvECZ6vVUoUddzDYrSkBf11mshseEDwH",
  "key20": "5WL5gqeb7cHqvX5ZxDpmFaQtTWWQK4YB7JzAxUr9WT6BshcaBaWCxLC9VzpjX7qVgs97DjRnjPM5or2nYqXibyAJ",
  "key21": "4HTcrwjnXecQpaAC9V4UZk4D6gDnCVQkHJ9Z4cn2u9sM4RUmMzFe9q9uiCgx94GV4f67t2rZjEBw12j3tphMZJVY",
  "key22": "21N3HKNTKMaiQrV4cR1yHHVUTVxmm2cTnWtFL4StWRneHb1hR5yx2SC7xTf7PvHEzjyWSSJiS8jhLDSx3WjPF79Z",
  "key23": "4qkZwpqp1yg2pP7LceH4DNimEoV5cdGVF5kNkR73fHp7eLYjW42VtYnySX9Gzo8uvnVABBbsdnufSFSDoqXeSg7T",
  "key24": "3zehgtU3ggu9v13iSLG3UUaKLSbvfKhun4ZCdQCNwm4P3enfDdWrLGXq6MhF81Z5i1QiAHfamXFA2QHby5SQdaWK",
  "key25": "5ur89tGpbUH5jfuCLobSWVjYngYrW6XJsbZbPkf3KTNh15Yap1MPCDc86NyzJ82wHAnFXfESHyvHd78LYH4183Vj",
  "key26": "UzrbovW6NM7RQ3mZkXsg1Z8FFVFAggp3H2RV8YUEcrWwN2zNyATqfpFMkDDXU9eEuJZc6yZAaD3pbbhJUHtRcbR",
  "key27": "QhMhYDUSm3mQXcc6c3vFzAE8UnLXzof79LtjJxJJpYxaG2KFXEcjqNWGddiJsuLKMJv9rpasr17jzt9A91mAj4L",
  "key28": "46YwymVDk55VKJe9Ug2g1FGzsBYLnmrJNUFFmCjskYvbuWL6eHzx2azCBsZ79uVSTYxNcsQiNWu8xvxkcm3rmVZ1",
  "key29": "3VdAaHELrK4DCU3fr5pobH2oxi6khEWAWR8c3w38xgohYDB3gxc5W8F8SGLmTidWd7sbfVHac4f8xdELCynwaRVn",
  "key30": "4Whijge8ivQ4CmoZypoo24nvWNFfg8YtesoycZGxWJCtWWPkmxi11r7JvG8uuuraq6zLVNU7jFaVWmHWLxQ2Kd2m",
  "key31": "3cSzrFijR65GdpfWCKZSm6rXoo3FESgu3NeGTrUBqBtxdH8T8R9J2p9nRKgGf9gR6SKvU4iR9PJeH27rFHA4KQeF",
  "key32": "5MxcT2Xgu6mFdEmzYE1rf2CQ2M6Nz7CCRyewRJLWDZ7hJaBykU4CmGozvMVmPUead3GkuBQ6DkKofGgdy6nt7noR",
  "key33": "xFVNyqJcEinxi144LK7Ag3ZKrgSZnKoswaprNMCuiwcwMtuaydFTwcdaotqZjwGGVGXMmGc1KXCGvkiRXzh2oxN",
  "key34": "5gmw1jksvRaGdEdU3DG8VfDggq2ExPFvZaYZTZaz4zavM12E8K4PNJNNmogSFj8kZu5ChCSSGYGkHHY6KgLKR2UQ",
  "key35": "4ZGvg3bpknm9yJJ5EdeMHvmS9vvnEZR7zZLWepm6zfq4D71iAw5arYAJgHT2Ncrp5RBFQex4sGikLh3KtsUowXLG",
  "key36": "5WpY3TU2SaawpXZUg3LbR68aTAB3DTzeSxwJ6XmXnxDTANS4Rq5uSVhfNwc7bHMKGckxLMyBzZccCnbwsQVzsr4u",
  "key37": "xrxZ7o4zQUfFTWZn4LhHR2trNQkRzdctxuwUBqpYUndim8625NYNTAdpynH7cFNMxxSN3BziRpU3rEKHn6QxUy6",
  "key38": "4tcqQ9JtHr9PdtYdXgXdu93YPfC5UPKZvjyAo7oJznDyW2AZ95Mt6qpJSV6HbH1Pk24NaxyPnhauvWQRLLkGwuN3",
  "key39": "3vfgCQ2eVcfBYtGiwqYTy2ryzMSvZMwtDpdmRrkE52uxTN753yXvZRGeXiwrBesVomexLdayb3K6D3uWFL1DAS5i",
  "key40": "kmD4JfBsP9DF5iZWCoUfEho4wZTuhCuPqMDUgt88JZoSy9oP7Y2HpB4UgEsexHW76hTSZCn3kES4mwfer8d9FJD",
  "key41": "hCveV8PfdS14pUxNgZDFiNyCTfFxytGK8wbh1MY4iB3CHNeA7XvtMR4gVanNUxeqvErSL5JnUUHk78EfYnxxDJv",
  "key42": "5Kss9DhtH1Nn61FQV6nNb9ygsC5vtTBcX1mxgCHMAgZUSf7EmLT2QkQBgpD7GPxx8TbiNd28XLKsHgB2xN4vf4B8",
  "key43": "2UcknY86YohKAps6kStXPR1x39rv5iqjXB8DLQSYBEUVem11er1gngLB5FhJx5oWUM7ECTrbPU5CXVhzab2rsxA4",
  "key44": "3rNv6NoajXGWzTyz6DTSy6cf2tYL81MzmX2EFr3NvzU69uxcEF6UopC4zByHPDm3uFvfqM84hL8KVQyYf3ZHzXAa",
  "key45": "2aLnJUEFhNdBwRpNDiAXdQHyxBSV2v2FifK4k1TRxVTKVDmx9Qmxykr6b6HoT4NaJ5sUdkUWkSY19n5C9N12XtgN"
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
