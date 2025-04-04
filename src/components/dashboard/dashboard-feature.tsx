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
    "XwSHZXSEjKBT6SGZcQ2g6QufbRk82Qkv9qobMjDC3EUXLEDfoMWB5NJcGuWmeQqxYUJWW9m6e6GZtfoaqC1HfLT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45eHYvdmrCzuwXE16k3LdWbuWi6QHXXSoV2yK8fcsC8azZ1VKtCQfbUFXbFz1NgqkSPm8VqJ6vxaMkDsXyqvATWX",
  "key1": "3q1SopBpo8M2sVoKbFD9gkjVaBQikFFZT1jniksXSUKDoPgepmceZ85oaQH9SQWshCsGAWj2GP74fPSvsrgwSAo6",
  "key2": "54Q6Ykmr1utox6jAsMHPrYWmEj3FgHLXk9h7paNTP5hx47fP9V4iV6MqSGH9T2EQCeNWqGZkxRB87oJCo3GMGud4",
  "key3": "2gVNuvW33eASiDGMcgcP79mxyyGBatmgxgKstXwJJofBsHRjQvsn5pEZ5eZBUZL5KGDevSC1ijoNoUGdJmrctPms",
  "key4": "4cWNwmCYxqYKn26UKYoPcqkBkcWgLm4umpWSYinDj3PpvfUowpuaHMDKr9Cz1fApSgtP7wyo7cY12vmaofbBtnKU",
  "key5": "tbXDndUygjH5rotbndcYrRJZqNnxkLNqoxYk1WQ32KhFmHW2FG8v5QkTbBgeruZvrMAGshoqip2dAaqboTahFxL",
  "key6": "CFviDxzAWQaaVfyJNeSBYMGsqDwX3TvcLSbZtVttc3fdFD5fK1ZZZDvisPvuGKZKt15AA1BR438Q2B72b8Xjsrr",
  "key7": "3ZecNX1o7p6hGU7VpdgM2bxG3HK9ANoyK75hHQKBK8VcQdL3oaxFyxrvzpJhAD1yHHth1MQPnfLqEhMK4egmSNhj",
  "key8": "39KgDcsYjC5ZVwyCWLw8PLw3BPKH4L1gZK2VjqTYgYjwFPMMEF6ykRLXaWMEddSjFf8EijgJ47RzHTMswPZ2tKzF",
  "key9": "4vi9ZL9VoZgAffpxdi1BWz4YWwWpgyCvXEdSaiSCKJpkunCHE7ofKoD4Eva5sxbc1G3A6LEQRkW8mSwHQXRUpgyQ",
  "key10": "327kW9vq9KVbWWWXkcMWipPw5rHbSG1Fj6Pn3FwdrwsY81G6zrgsHToWDwE9yYtgSRcknogX6JhweuVxZeP1VtXU",
  "key11": "3aeA5NNuCSLpojJNR33D6WRgduZoY8sUXs1h8jy1ED6HW74VTJ3UH4iqJ9WPWZpvMHd8qc6o2snsJXhZAUg5jSbb",
  "key12": "3cBeJUPQMhThZTQRZec7VtCPFzYk5sTGU3PCDPZMtTSohc2sMK7DNob394GKBbvj8c1daSbxvLRVJJj62Utd2bSe",
  "key13": "ErxzeXyj5JkuYSJg69RGU9Rzr5SY4fUcg1SH7KPfJDfSUkfXwcA5HFyuot73kSp4Urs4tkpccx17QkEWDXAq5k2",
  "key14": "25LpkKk4e8QpJcLvxHgQ4V83mHenBfmV8VzXywdWPQBbC4xsGSVhNJ88rnCRp4QfC3eoajJmU5WN4nx2T68KFTte",
  "key15": "2W1Ru12Kyf9pGH8tZqWiee8qVjULppVuNwQYsowKdGwA7cCTtrp9xjAAhWuZo58aqxZufX6CYqpkCoYQbX1j3cNe",
  "key16": "1BUgJ8Z7bU6XTG3Q2Wp782WZDq4kfMHSKQFEno3ptqG9agVCt9PL5j1zThPPAfa3k6yJuCSoJxvQaHvjrMFewGw",
  "key17": "4QKgsDzA8yaqDAhTUPA3e4E63JVkYqeXMLbX3YGN6Tr7PNRJ8jiQ5x56sKxFP9UrK5ZRM71bcGo6tYNxFN1J5bBn",
  "key18": "q8iAvjN57wTHxYHnU18KzcwoTh9BxhxrgPSUbYMb2QCQJh1uJGtBqfEoMMDwv5JXEAF8VoutmD9FjhjRVSfx5gJ",
  "key19": "4Tjsx2XieKAXnnMf9v2LLqyefnjmd8zbrWMbtSWdQCjzha7V7ReTNC8tAtMAUxiJCHF3L1mjFD6NC4ziGrXQw7va",
  "key20": "aUCBurDBWcCnJDpxtMTv5gCfXkoxCDA1uyLedVfRzBjKukvwLqRHnrM5RhEBKkJxSsTuZXpwbjH97hXvhs3wDnb",
  "key21": "4jfkD3n5Xo1r3UvTFRj5h5451X9DkrEHvZKoJNRYEwqCVZFiPusg5VH9dxcfPkyu4Z7nRNckVsQFR46MKs3WdF8N",
  "key22": "3U3LQ8Vbn7fHkHBtVM66hxbyuDzQEXNt5UHdU7NNSWhvSvVuE9LdhPBYeZQ6jXsPmsqgg6KA7uZqU3c2SEWQy83s",
  "key23": "n9BfFqYLUjYbJNHJATeJ1V1a6gc297XuBDW1KHM74PpNdhqtPhs1FKdakMchndEuC16BTudnaGDHDub25rnarSR",
  "key24": "5Gzo9YfxgbG9nstErhH6cRU4dHF6CGqASBn2LoZzxcaR826iLeqAEVqyEDtcy1nEvQahhsUGgFhHmPy9GMSwhR3A",
  "key25": "4axR7vo33qjWZ17tRVSEUYSbVxktVwtZs42Nykeea8nJP8v6uCKNaCht2MZQQZNwhkrneawS5YJuZU2t5d3TpX1m",
  "key26": "2P364WdGfTcWUu56d61efJxWR8MGS9UiPDkG3ZRQ8fZnbSKwvtCg4ftHK2CucHispET5qoHzMY676zvRceLPRipX",
  "key27": "2NDu4ZgKSbXz1bBaHrGGLkjj8eYWjJScYroPCjXf4BFDswibeAZFzRJpJ6eu8BrcTZ6Y8VH7SXCSwtXsnDe85tw1",
  "key28": "3CHZJ8Wa5CSSeWJUmdZYBBLmchdvKMCU1kyNqQLQjBjEQXi9bTq3GbPUDs7BgLBF5aKBgJXhHrcyr1DMRPFuhr5",
  "key29": "339hdsiX5aTf6WuKQMdJBmoPs1UHvNFQ3qCPVJzJjHippZAS8xPqXxvSGgAANeELFuTcctLPC5kkqXZi3JkCs9PU",
  "key30": "2bMHSmmfwBXpAspvSqsNro5Rtrfa8gyTDNDEEtDU3u5f7AfpdiffVk2Vd1uuGFMZY42YmFpQ6VRpRRLNarFThSGH",
  "key31": "5vbkSXzcE9BQET82vmfiodAFRLWN8avRvGPLBmEJ3Dvtmvv9pJQ8pnrPCK1jjqVSrwzWV2DKs8MvNGwEzdCAMCpu",
  "key32": "6m5Bqt9NVHeb1wh9JCyMFTzM3AYrP5CkBt58BLjwrXwbFWjDt3TMQmoU6NFARpixXAAiZWTg8qXxk68hAvPRiFH",
  "key33": "3SchUyG2iY4YWTgPpknZKfRf9oDss6CyUQu2AN2scnNJfz7DpLJ3tcm55CjBwWWgm5U5vmagh8MXYQhUyE2CziyC",
  "key34": "32gfWmQLnYdHhrZbE6wH2nt37ekCEhG1utsQUF6UxHet46AnniCKVqi1XuqN5zQyxci1SxyNzfibdecywzfYXD5T",
  "key35": "SnCGjFBxrvoEFQB7qaXrYfShfN8kdQztauPLzhNdi8v17S9p15YmX5GjWPGV7AnZ8SuBzGXB7HUkkzhYBPQn8PJ",
  "key36": "3RiYV1JWS5J7kw3L1qfEdLPbAmbx3c5QBGtDBdpvipgdEm3KSxydWgvtxhtbBJ2yASQGvjPBma4qV135i8A7fori",
  "key37": "26ZGD9MxzyQ3sH3TvstsANdUpaWbf9oafA8TgrqQtBUh36cwdHTouwpSKuV9o43VVvDDYAGRjDppKtL9tHuQSSZH",
  "key38": "tHTeeFycEMYbnjpr7UekQkbHAc3f6SJzkfztMNECuP2agjVodENsVpPwdNyu6iLztT9EtGBbp6UQeBUSkqNGX9a",
  "key39": "2YVeawCiVoxnJdiF6YsebKpETs3oLB3iztPhgy4TYxbhVTwTv5WfS5ebcXb7Y2WQa6xm4tUrdontuGHG5EG1XspP",
  "key40": "5STioqVFLMiyUtWHXYrNz5YWDLJa7kP1ZYHXTT524sbeFAZdegdYqA3K69VWy8gBnEV19kQDx4bkTcezNZm9SNHm",
  "key41": "3cxsNTFyTtKRGnaJ7MSJ4hCwfQ8BXnrxKWrDLWEUtqqUBf47yDaLWBFLS9SxRYzAFPmk2Ua4rU1VxPnWy2uzkZQM",
  "key42": "5Toc2C1BZPSNsuv6UK5cL9yEpK6Kj1d1U1sE5fAi7daQ88cHwucWAzR6avb8ycRcuK5CxCkSnJfRV1xVBjUywwzg",
  "key43": "3mUSkriLsJ1dcknVjMHyXaoeLDaZoTugRjQnMMJtep36NBPghXQoP1oh9fpW4BAVhNPDwECTnW48ZvYqa5qT2WrZ"
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
