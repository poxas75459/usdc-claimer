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
    "4jHLeTRkt9XLyTAbJ2JXYkLspavb3NRBU1zTjgq1nhWy5p34Ci8V7Cfxc6dX83Ge7HYHk8FKXAzhjmyHzox7o67d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25X6Pyo4VAoXKazV7ZJD5Go3Si5kua8pn3chi3voiAPN3LhTxbRrvroV73b1HSC6u5E9FQpQBQmCHuJrBo9X2Wzw",
  "key1": "YWzvEfxBuHoyyycst1f7ngVToo9CQqDssFxpYRYUg8NrxRsMcgK2aSWuB9fCrxXvgK5UW7gVV4cUHmND7dAmyvn",
  "key2": "2FZjbXP6GundEo4xPxRnSZ28aLPG3APsqqsH9Vmm48Hap9UmLxnVM1oRg71dhqBLcy5se2dRibvRjL1hHqXhBGyD",
  "key3": "33AxwAgn2PErvjRXDdGrZ2oauZHXCmudwqfUZeKvv417jZVszoGifkwc3ASig8BYrJ1n6JPsEK4zaY8GXMq7ZKmD",
  "key4": "4VBSU7EKFzeuAdHpbgE46ZGbEx7sgQvh3za9Bhw7GEVRvNpB9DaFbF8ip1Wff2HaV2RD73zetuPHKQ9tsqyzVFv6",
  "key5": "61cASjaRLUrAxjpXfLsHJcm372cW29ajUHsxZm7BydBz4J2QuupRYw39uTfjqWeTXZCZ9BvzCw3hTcLCGNHSQwKA",
  "key6": "5E1e8jLoLtwG5Uzr6HXmyo7xgnEVspUNCqjeJNGDZpSGwCsqBW8HpwjGhVTSTXydJefobFwjG8gF6JdHexm7rSP1",
  "key7": "4u4KusoqUu8DGLyUbNSAZ28wx3NVQKfxGjj3HqPSW8QKcGZyaJAoMjJiusdDzENAdNJhkhqtV9CdjPg651ByW6w2",
  "key8": "5uKQ5FaR7s5c4wgevE8ab87P48NWZjEPra6THy3A3ndFeR2a42QMUT2Wty5WsASFNDTf9zU6EDDycdpyiLzspziX",
  "key9": "2fJpMzM259RpyqfE8HWJ5cfitMjNUMk4zE3TJTtjjSmuwUpPok2bzfqgT6yh2bK7yLAT5zRALbqdfZVynscwyoGP",
  "key10": "5j5nu1KHuYsjZDRVJEKcsPuDBc1Rv2E3UFRLrXGZM66T36jLcC8qjtLKuxDFEd3JD5S3ijrHJtbYL5CTtTSC99yk",
  "key11": "3gCnbs2aHDVYN5SBBQz92XQLt6DBvympA3eES4zFupTiGCun5DN8T9EXA1kv43unGXa82GXLBDZG51vd24Y2hYnm",
  "key12": "5xhZVmyyUBjFCkwjhcp5CgirEwFCZQiBdEdDJd2iJ4Z7hS9QZy979UxR6XVUsMmDbvZgVP1SjLhPUtDYFV6Mu7M6",
  "key13": "nTnFhj6oHxHKKH6HhPXFNL72KdWqkhR5Xv1hxoNHjUuG2n6PGVWUdkKgAqGCfM5QzF4Do8u7QDnjQ5mN1EZW9Q6",
  "key14": "2JB6Ra8rwYyRRf7BAYKnxSMhy1ZhNqApiCMBWM5q3xfBqwDS3ot35LbnyPiVvqEkknmndz3XiFXTUZN7yWxWGPFP",
  "key15": "2WJBovc9RoeDYz7WwNCj5pLws9KTyS8xBbV6ro7jypqzq7sphBPtCFSkunn2xhEDWvpCv9o61VUCMJcER9bUgrMt",
  "key16": "64FjkGZLNKVYwH3FweR89pU2vHoLWeZwKsBTfffmRe17CMYZCozw6pXgWCE1SRZCeeGFuZmb3WAmxE9VSMdsSpN6",
  "key17": "3P7ai1fix8LZfDnmC3QGtYREa4MAv1PxxdmdcZy5wsLGBHKWyggP9dzToptwW4ZnYqaGLhhn2otUg2qvyMvpScQn",
  "key18": "4eaGiXREC3f6caGXxfHg96XmJVmXf5MB1MeJSEcfLSfZJ3fmQ1qbHfX7mXncJVMQKkSKLi5e97V2XYheVjJE4AjU",
  "key19": "5B61Z2EcDPUXSiJbtjCEGftAhQga7wLa6bou8Wk3NekvKMxRPeU1WcGxGLPAgNPPCLnR5eEHdHjpkNwYT7sMm92Z",
  "key20": "5CUsq2kVkdMQ8Z9zvMMGThZM4pW1PAdtmqspKsqPyzv9abbL9t4YyP6FJZvh7mt8yskDKgGRZuhCpRxrzLGp9sP8",
  "key21": "4RibvSbBY3cRdizSBREiZ4DcmYyJPUXCXYAwMvTf1a5m9PWAewHV4dQQENfuHYNyBC8YveHRvH5dKvW81FGXXaGv",
  "key22": "3jpqyMSjwuJyjXex56dpmfiGcYzjSeXCLraMgaB6CBUzzT7qQqsretr4TKyXcDhwZNqCwMMTUNDW42BvzprfJJZ7",
  "key23": "26BDbveXq7zTSF4KXCnxNxiUv95XEk1CcvRt3Lp4r1F3FVTrRzpCYT2gSFW2p3pbJx9jUWASfWiuZxrt43QPV17W",
  "key24": "5D4zsFgnidKxqWPkxD1pfC8EGJMdULtGHWkEBdaipC9co4ZtwQndYDrcZin1T4ryuswUSNjXbqgdymY22bpKmND7",
  "key25": "51xN7Js285RxJhTpWDFDPqNzmMYofmxJZSrNjt6P4dVi431tpVMXqHYKc5kKrK5tGU5diTgNyYXxDpfWb1h2GYkC",
  "key26": "5eDm7tpsF45Yt7hxNK4vWZN5gWr7NvfN6F4WGLBE8wy3iLagwSG8bPPdTPC7XKjNuWT6ctW4nvA81rLVqmXWCC2F",
  "key27": "4FBHZ1AMNuS3GC9jbS7m3DBV2NsEy3mg9iRCQbYp2Tp1LvmnESR11R995cnXKBX571evYbXh1SBjw9XPgFfRF4Bd",
  "key28": "vtwVyimLcNQdg5cfgLhAjewCQ8Mnpwt2KswJCn5oayJCEGiMpbJjH9Y1BrhoYpTaB8SCkJcoiW1sA1q7VJaREFz",
  "key29": "22nw7fJNtmxPZi2CFh39HPbhKmcDrcbiSKLxHp98PkgDtuvTYhfu9wpGa4APq3LLkFX2q3NPAFUvYK7SSTi8dX9C",
  "key30": "38BAXAjyPH4V1rrNv3Ka2wnSwSCi7amw672Mq9VQfEyE5x8X2Faioo9MYmwnufLP19kupJTevqJYndVWbadKpJuS",
  "key31": "bb3Y1EKrFfJL3Qvnn7aNmH4N9GyZ9eQcZmFDmbzuTq6s4CNDT5vJ28LLPeYbYEyUb3w7E6vtLULr2WGBRsGKwNB",
  "key32": "2w8MXPi63xKkeQz9EcPbgv35fxyoc72ihRWiEKSzfvGKNybU5rhUHvgQKnzQcwsR8ycRcsJC1ZuNhNYvzA15ZAZA",
  "key33": "5Jy6UXERrywhSy9jqpwJ5MNv9KmCHxTfX6mqwEmvnmYvxdEWMuH4bBj7aTReqaxaWbtNHSrnchzEKqXBKoFviC9D",
  "key34": "3Sw44jBAoLCVqamWp1189f5K6xqk4xZ5JP4cqugqjujpj5muBLXxUu71w9NdvdHsdLeKoMXvyBRFSWkAvdWiHrXz",
  "key35": "555CPxYvkkKMTUYdd3pBj5pSz3tG472WeonojhVRkg2jNvTqfwQXewcmJTcY4SLtWdjUA9CbuMsr5FijrgbNWqsy",
  "key36": "5szeUVcL4fSjw5B9iGd2tjUXJqhUZu7CvAVXcnvLBHjsRq9Cic45jc3oz88A1NvnXdPugAM8iWEzjD24AVTeFeEu",
  "key37": "AFfwtFxGPyzkXc3T5TdeEaPsXeU6ZwSVfwYCZx4UWZj7zKC2mDx9Ce4VTQSgQWJJHNjMwHE5LNB5i7N48ZozaRt",
  "key38": "5kWwbTJazXZbYV2uiYoeWpMe6UpHGZeahtGdE32fShGquXMPHiA4jtoHWJTForC5aP19oBJCveGpQ6RZDbkGjEz",
  "key39": "2GDxMuwQMxU1tJ7PotC1VXCgy1TCjiNpu3FEjNuM7Vcho1XZzpXt7G6ZsJkXUbUTkR3kYmWYBqkKMwjfvrnu8e4p"
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
