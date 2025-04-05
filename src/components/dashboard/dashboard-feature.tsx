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
    "2awsiZbL3utEbJFaAfK7yK2wWZ6hjUdAggHZm2pBtkyi9V4Ai2mbZxCaEwCPx7E4UQUiHbHbsPZQtwBAfY78NyXZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "437Ev9d1io3Ggx2CqRViZz6b5oPZHCL2ar9bYiTQoyArGHnBF9eBpQ2gX7vMEu4seBwLEiDfpuUCYUvYXAD687WP",
  "key1": "4NWiFL6qNzLGeUQ4V1x4hNzeJS48s1jVuVSfagJbyK15JDyMmBc3xraSDV9nsQKtp6hd5sA93Zms367GCMGpxynt",
  "key2": "5meFvqM6qtM3o1urg99PPsvCgpFGsVpLAf8bedJBvwcdeNTBAvkwQxHiRPxuz84QK6UoS7zVZzgNSsm9LwFZv4y3",
  "key3": "5fDYj3DsEfKcNHzkFLCYWxo9Kk6UXXKmD8wQB9oKGTG69fQieEdm65vK6oE3jCWs6pPZDDhxZ1gQfFTaGv8DJXPZ",
  "key4": "5EkuJpPta8CdkgNtXXP5vXqBv17q2MiCZz1fd1d8y5eKCqqpihJfQZxfR4GP8LY19qjQE3xap1Qoy25mWHyisN6H",
  "key5": "2FoGFFgb4yfVrhCV9u9s6WXTnZyydBU6RMPyL8oRJBkY8QLRhRKNZHbr2j6v1BCYyQ8E8doU73q2jZMHKsF8wuGc",
  "key6": "2LWTYbMKEYBdyoe7vJQKQ8jBnBtwgVuL6Wn8ye8D4YLfGuTUeTHzWaLj94HoRmpaCj4Qn9U3B4hF3mGdfcYrFfk5",
  "key7": "3EXTjCqZbXcpPZSCF7BUFqSd3Lb98DmvcZRNQZhgqX9RT8B7yS7aPY1etmmjwsrPvF9gGGC2KPbszzLnvL3TCA6Z",
  "key8": "b8zyJQ9F9bdcGUnNNZ114aTtRdjL2YRZxx4koXiq625Sxs7kX8YP78uSGzn6ifJKA5S5jAtWcqTc1QKnprRNunN",
  "key9": "2PHAjb4spNux9J3kFYByNTVRx6epnc2zXQ7wwQXrHdWodtHjC9r4wSvUc5DJt3mNUNDXKojboTrw3QFRFqPhTGJP",
  "key10": "5JCFYCu4GQkJz5PshQ9fXHhYAF9jnwAWUhu838ggSwsYPPZr5ZofgGnvLuDFZZDjTngZC9TtndwYAMWTwx9mQQtz",
  "key11": "4wwmHHXuLA9spwJDRXrQ8mUQLpJjU4r18JZYECQJkgst4rHf6grTr94KY6Dj7SkDntegRLmF8u7zTCWghf9pAJYC",
  "key12": "5XfXU3LRuFBdJggMBoNfQzDVxkVao9NTnVaPzreVjEc2gwVkHBVhgBbzBLanWavhCRjYUrLY9oShLX9cp5Hkj6cN",
  "key13": "36vjXq4r5aGBQns3KEPBF8WnevDHzATcEKkbjGitw3zxNqLFtHbJZWivbmsjBHHVa6teJrV37rfs63URPxqkE2xC",
  "key14": "5Kd7spcxvADCUb5P3NiRT4cGLSd44a3VJRLG8Wtk1kuF7mvWxBXjPj8jZr2d5GsvJSStkwU7vDe38ngo6Nt2stF",
  "key15": "5eSEspQsAGhSLC4hEaHYbwyvAkibfFpvEvBfN2mdLMa78agmm5R2cn1esvbdo4gYG3hZDsJHsvwDqMJAfZRWR2F7",
  "key16": "2pYQTCSFMLA8Aa8fEwT514Kpd9MBm3ArgfAzs9134RRmPa1wi78oSM6wefsLi6P4k2NJNpfkNZttNbd85cGXVi5q",
  "key17": "3Ehoq48HzEejgQajSEwuyrcbrETf8wXsQ39Yvxbbar2ubSJrCTu5Xmg3Rvxuun2VoMCfBwCcJ9itamoYXsVhv5yY",
  "key18": "4qmAWt3CF3HaZdqFJdUXTzyzKN7oYnAd1DSTxApcUA8RJuN4s82cYuNeqEi6EmXyDytbkaNnb5UfEPmPGR7fWnvQ",
  "key19": "yE5mYjhFgf98vzY6wJpPT5LTaqTmjFEPRCwuVxWbT3WmUagG7F98pZVCGXrHHSD6JtxfCxiVLMAnkmodckg1PQG",
  "key20": "48qWuNtXY2ThCJhbpBijasFwKzy7jg7697pzyYpvUVFbCK6TfFSrZ7KwL54ryZUaKZ452fxN8e1wK3SDrJ6Tq9Xa",
  "key21": "4TBTAdeBs24pdTYWVhYvQjwAbAirApy4CiqXwUcRoAN5YVswGiaywraLwPZ2G67WZ39uyjWdgCDyFPzBjqGSmCff",
  "key22": "3jRvQaLWieQpHcbZGXzoAvHouN5m8DX8cvTEQnGjEXULXbW7VarZkPRY5zYGmikst1edEvwATp8Tuhona2ujDyg1",
  "key23": "3YcNmgyEUYUVr9MKa7F6Rh89WVLYxsA7HX91U7aaHCEZ7BbzrwnkTQDXF6Q7SskE9YjVhNFGCcYjMGpAnxDZprSt",
  "key24": "2zpC37yUuEN33iybE27KCQJpbKNBvqLpMttJuu4Hnvb59Tpwn2Lm1oLbQNQjUGaTqXmKBrToo7z6v7gH8AzLLgWG",
  "key25": "9Ay4TvYpP3Dtw2aSfK25zcksDBZbwekqbSPpJtDhxcm5yj8Av68wiS5SKzeHPXeyoCGPdD2YoC14RBG1Z1sjuC5",
  "key26": "4m3SsfdzVYbqKZ5aFTXw9GnpXsG9spg3h1XKSXjjVRAokjDfpBXvdghYEjJTrDUeoU1hnphysKWAi82mhsgHRnfH",
  "key27": "4FZZqDwBToHUViFd7ZyTXbzkaSay2EVfRLUGhVrAp4EmP3RyRtaSQa9qfJKumjgd93yXfmTwEiMkrJ2DzWsTMDTB",
  "key28": "5UCfZxcYJgK1AsFWQiWDoyd1GRTtVZmsYYn1oYs5iNnoo9nvkGGj4Edw4MWgh9BZSjJo5BbBhqo4CitYkEt2NbHu",
  "key29": "65JK53xL6ksiGSbGJ5xhqBJy5tqz2WMMyo9LV3hPJtnnaFywhNWZkXfRuFfZophnaxy8KJCeeugMQ55pyKufLnT3",
  "key30": "5GtQruQYWpPiATjAc9VMod4xbqBTxZQPRqjsPaZE85NKzTeWV8SggGgKvGc56i4ajSkjMuv8QLivrvCyooFjHRkD",
  "key31": "4D5jJhZkT8c17Ew5EsSnnHvhaJ9XXfufCqbGoFc848HTVRSfhW4whQaRtzEUtQEccCG6EyPmatFKJWEsEKNnNBBy",
  "key32": "3CX6ypmStHGLo9JmakfMeWTYD3J5rLPWPKgsDq9YN9GNXhkm2pPCwbL9XMWPVRxAkBfLjCwacNQ982FJu938RUf4",
  "key33": "5mfNsCqcg9bgSLHWuzi7h2ojgNWcTw4btBx1UrXn4SpEHMAQ94bKibsojdGaHTTDb4MtPPdHW762hByiunDzD1mW",
  "key34": "3m8mwduDgghazjHmbt1jb4hxMZX4GiWbqT3xDPXzBu6nqmJ7cNNBLvsYT5CBUQG76sjDdCjRGwaKsyfTyyTSbhxt",
  "key35": "DQG5aifN3eB4hHeVxsz3YyTeV57x4oPZLVWUsGQQqPmv34qkoFxZJ62tPX1ZVbcbjrM8o1v6YLNyejESH9bdVaK",
  "key36": "aeqpnVhkW5tWR6cdajkmPWWdZeMyj5WiM921FoGuYd77WqgxZc6W6WGydArWQLm5gbzC4FpiDAB9uWzcreN1XLn",
  "key37": "nYPQvciCjc7xVQY3yxs1f9HAJucWSEf69RAJb9eLZFaawjejUVW3b9faNJAJaFsbUQTDkTtwm749tATwfwTms9Q",
  "key38": "4N5nh4UXAEme6s9RuDqkZu2ErLrE4FSM1MrhQ8Xs7qWdsmCJKDsH6zNpxYKaybGrwtBccc97amhCzSYbbYcHAgPQ",
  "key39": "2rcKU3Tjc7aHbzDu3v6MLtx53xEkyg5d2vRCR4EUxJLeeouR8rKubE5nVrQCAu1AZw6mWUYnwjyDqTv6jp12p8sS"
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
