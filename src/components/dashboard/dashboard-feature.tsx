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
    "5Ti42euE4ACMs4Tgjyxai9pTfo6xWxzLqGtLyFmHczHfZjdR2xDcqPNpYcgvopDj99xLw3a78MT5vy2BgeU9mAYY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "q7tMqVKNHCvrrWN6ecAAjSryrtdFynMNx85WCyY4q4UGFtXgdFrdpMHYfmSv5zwwBqMZhBpuYKNbkSxRw6Z3ZEh",
  "key1": "5YumXbxATNpKemwETL2Jdbd2N69D8PRSq4wBXGzVaPcjJNs11TUHawoFjpV1EyFMgRUZr7y4MYHPFoijG9UaxWnS",
  "key2": "4p9RyxK8kgh7SAYm6dhumhCcs5grArC7VRZrsUnG7ZtquhdVdcbRZxpv5fgr5FGBkSLMzGkMYXMz6PDKAUnxmMfh",
  "key3": "2Jj3Yizsn9H6ykCGcWFa6tCFneeD3ZurpCWukPqXLBsMr4A62CiMsXput5RgMfXBYpz5NCF6UxS95codcthghfc6",
  "key4": "2kYogCMFuh4X67T3KFpJ7wZzfa5q5o6ru18KzUfUc8QsH4SDDMth8RWSmpHDjqVgrUhu4neVewrUeRECCPiauY9Z",
  "key5": "CZyva4uyKv7WUzRVg6wfPVamrLCH3Gwi1xDNyCKRtDQhu8TugvFa26TkYtwnhbGyeYuaZxd74dL3FQ8KybVWbUC",
  "key6": "3JMcxcdmxLG1FK3WjXCkUb5Dzz2LFJYKpLx8WU7xfC9o3NuXAM3ao4rHVXH958eDFgEiCRgTvbY7hPp8x8C7B5RF",
  "key7": "2oHyKBAq8yCdowQXTqr1qGswMtMFDzpvctykczmf8EytLrjG4h2c33FFWiC7ckAaz9ZnZFi8HgZ7d6xmYqG1iVrK",
  "key8": "2yeqkebKC7k4ekhECtwQYCTdzVpWMx6eTQoVAiiyd8BtSTeePXJn9nBTM9gNthU7yenTr6GgtC661LQssmXJPYXr",
  "key9": "kzoghQ1UQmh8FgFXFH8Bs6XdL4cwFSTypryyXK1ZWNXty7ixJ4oz8JxGsM6MHoD8repTDAPsMxG2YhMzNCRWahr",
  "key10": "2cJ7SAjhbyLfvJaBvvbnyeM6BHKFkCqtHumwXLtvFFG1QzTLqbL7gi71v7xFZrEwZU3ptYwwWDSpR4JgLB925A5n",
  "key11": "67GaNji4hfuBSPgkQco4feBcn2PJVHkeWujD4e84Khr66pMNHt2t3huYiGxZ821xxCrKoy3ZzL3FU1PFLMpdRXwm",
  "key12": "4CQyNBkMfg6RkG3WBwdJ5M6zM5im3vHip8pDjLSiok5jtjQuxvviVyRdS5yp3Mkt12RnM6wXVpjiGkpouqjAutNm",
  "key13": "oJfVUYi2A3yJV7qUffKF9Ss31sCcqh7fKuFUbe1A3zX6Fk51avT2TzBhybZ1XprfD2aUGSNTVEBcto6KZxeqjU2",
  "key14": "3nX8dVpks8PBzmhEsTWkrgjpt5a3397X2yYScqAyi71SX26iX94guv1CUV8Gisv66q3KmbwP7QxBG3hVhhYe2oRQ",
  "key15": "2mYipAF4ec6VaZVyvjgCgtwrXG5aXNLPRyWsfhaqDJtuUPgGpz8DCfzRRJwJ6a9eP6VmRU94gkbUty4moMMKSQJC",
  "key16": "5sQG7v23dYBaeJ9iLjqM5d3vLAwwBzGPbFUTdqciXrKQY1w9uoXTK5yy2kPPyugwTe1TYWgZFmY7e6eLLFkvK8pm",
  "key17": "v6TZSfSm4rMGFP1M8Z56HV3FE9SWMgVeYc17W5YejnXwkA3UhGNY2D5xKX5m7sBxqFHQHWQwThxMBpJrjXntKBj",
  "key18": "2oyjLMN82BtCCJb2gHi8wLLCLyaxUopB8nwfZa6zX4uHBBYhBGSamBgEkXrLbhtGuCBTYn2GSemgddJZuPLZMp8U",
  "key19": "4nKhsoAusdyNaLRstNFWsNsfvuDqDtixQ4PGvjm7KWPz9NvioZC5BDDgpVVgeTouCv88N13y7aG1rt86Wt5BQkg3",
  "key20": "SYPPVp1ncV32RjktVf94QQ3bE2WmQ3NhWp4UdrtxrJVbw6Sc12jEDPKPqFfsTD9we9HF2iWR9V58uBtKBqEkUwL",
  "key21": "3J1YtCBwxLAx5w45dXfz4MZe6SAzmESXxvU3ogM6jXReAHvwoUHuY4oagQpXobKkLnXbVUczQ5R1X4EDhNxmBXQa",
  "key22": "42DuqwnZ6GjF1U7TmcByrbMQXC12vfmjeUEExps3mhBYpFYjCgvYdctzSbakLapkHVSkeuFaCVwZRs5RGA8VnPLo",
  "key23": "hynoptY8ue4Uesx2JhnMo9uYHKkY2n6UaLH6Dd4gYjaEohrQ2LtfDF4eEZS5VV63KQgDcZyyy98jnnYTDtzwLiX",
  "key24": "3BYzoprxbd8LbMya2avw8PjucqBXscvpJUUJUG2LSxoAFeaodQAAgHHMwjauzpjDvmZ8Z5imEW8uQDQX1usNdPsZ",
  "key25": "5zk5fQTssKLb5jT2ZGVS9QWefhk1mK5cJQ3qBEVR7KWRLb4Ef3BxAa7UVDxDbFxFF3cqBHDRDqztYfGRMDCXDxqu",
  "key26": "37pHvH9ZbQ1Nnn8qtUjkRLVpCscgHxBTjwgdzBGAzuf5VSNLmEYYPW4ebtWvJsqjdxDDW3SZME22WZm77136nUd6",
  "key27": "GzWtGxYdHWpyNrSbfbhFWZowXCynJML691nYvYcck5XiwY5QrtzWGUSqSUrS9NykqcA6R155ThYLjoEa3Y831dp",
  "key28": "3F5XKcpajxydMCouGsvtFibvJjksF1mBAqnbSzTAWU6Wfk9X2hmbKNE3a6StxQN9ETC2EWeCNPvToxnGqNJ29cSd",
  "key29": "2gjibiCLSWbrrhjmiwZ2PbwwaacbCvfwgMHvRqEzjFjywf9pzwfBvr4bg3vBEonRiqXSEaWJvq8tbJiAXescoC4J",
  "key30": "4s7QaFU7xvyw27imAc9BVjT91bk1m8w8mBcy8qAPdkoJNdhfpkX9Wds67MZL21mjvdLNPFXZixnh9Qq4BGSoJxzL",
  "key31": "p4m2ZubS47z97fAcY8zKPKptooRpQhhm9bYVtQfvHb113WWenxSCwY9mu3zc3gHXMU7Wcm217SP84Fx93qR3A1c",
  "key32": "4KHoszvzhddRZVNtE9mh1nECg77NhKSMqQf9N1TpA2LtX5MCR5Fdbm7fC1gh3jDi67be3wKMcALxsW83R8WPcb4Z",
  "key33": "2ppf1F15dg3yX8wpJ2qoysFWgWTWnUaNiQ5SKYbjzmpvpGo4gndww1iPJnp7F1BaRbS1z1Yewy4xDfDzXth2i3N3",
  "key34": "2c4WfgD3FQq6AArHgGvppRdexRkiMgR5awHPUy3p7URrk1M3ArcEd6x5VeLfqZ5KcPkaRxXyoQGufd53c1KAa56Y",
  "key35": "4ns1BRHiGGpT6Q9pJ812ivUT5ff3nngKFJumXKVdkbnY3s3rVgm3LWMQREaUMVnwVsQ3rxbgG2pNfcZhMwGh8FNi",
  "key36": "5qGPptLgdjtVUf67TEb7SJsq96ARgErGDW4Pw7XbpHJcYkU2vssJZZc6wDKJYYi4ypLwmcyHSrh9yyyabxLszbd8",
  "key37": "KLDEZNVymYst9bqw9KtxiX2ZfxyNWEVEBbxmTX96gZx2bWYQgkNAzDzB48FjQmyCwACqo797NMv7yxtDGdjCZUh",
  "key38": "VEjXWjEovdnUvhXUDviNno4hYTRrdvi3xYP71E99ZezvYNZdnHsTbiiv5FCkQ8iVG2xoE897kSdyz39Tq5MNw47",
  "key39": "3TTNweKj2qocM7EL6YcZZNPoWxWVtTpcFiw6hn581wWFnmKsTr5ue4ZNqEN3TMJkQLzwocQ4KXUthNvz4YPoNbEP",
  "key40": "2MubLncrncximZjanhZFZa1U8eP4DQYKj7aDXBfe3qUkwhArLeNRdgvMMPYgSgtFpwDuCbCGrkq1uFoKuA7HLPiJ",
  "key41": "2CBpje3VoPzKQd6WQUTH2s6p1ktonvc5VVthzqQ6NbmoaWLHjY2ThNRX3nsihyEQGzS9222DQ5Rtv2tA6zeLEjTc",
  "key42": "2hmt1uyqHmiUydjprgd1TZ6gpLvJZnK98dhLydoRDsCQcoSxixgz7nMAczAhyKacupeasmGmJeMh7obRUSKchayx",
  "key43": "2nasVqmNHMbLikpr9AcTyFPDT37hjeLeSwYUyVsTwidvX6diqZPovpufCdDmxTbmRrZk1QwU3YQbdwLZioD43hRQ",
  "key44": "3sMw3Tmpubi4WE7FaSd3XUHnJzB1it5T1exF19Ms1TJ7EBzgPV1zHEvXdmnXb6MRJRnsNjXdyHZdVww4GJhY2A11",
  "key45": "3sX3RUgQTgvEpEXnKPTpRFWRJx5oiYEJDYXiJxJBdjoqEm25vXpy3QZWMxiTxeS3U2Gsq7dThcujosQFBSFc4Hm5",
  "key46": "2kcat1x6Sz1SGFVaf89713wbMeBvExp92zPX6sgLy5Kw97NZHEXYLkPuN5dk5BjLWmnpFwuJNU4ofmeEsk9aihMk",
  "key47": "YYQCBTFBSiFgCUv1j6nP2ebUUoLwKNgW3LKq3PuPxM58TNzLEMfZ2SP3dqC1WQ4M2RaPnCxCsH363cLX4ikqy4B"
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
