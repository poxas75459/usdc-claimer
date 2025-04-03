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
    "2rQsHirkZSE1tMRahBr1oDpFaVoapfu6YbN1xHK3D7b4Y5EisjXv7Y1rxuEbX1J2rn5AQapeo4wzRstGJzKNd5rp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2d3FwsBrEmtr2HvwXKmfheQcCQSSnALQzfuTBdvvHfUcE7ugh4nyu1gQ4HKUreWN4nGetwKWiUteZQesZeoJgkgG",
  "key1": "2vBK1gP8YB5ZhoRFDMrRmqHYBJBLqykPPNYtkATkPakJKXH6ez1P6tHgPHsCSwBLFbo8vzkxajVYi6xVMKd33PDf",
  "key2": "3hbTJaHUkueLs2Qy6WqxVfELyhHXyPsh4wM3oz5HPhZVq9oWWTHTQ4RfRJEuxMDia1itMDgR4xmnMxBEvys51g32",
  "key3": "64Ww158srMQt95U9kGiDwS2pjPp9at6DpPj49kepKBsHggPv8C7qKEE4HE8ndTEoGYzuE6ELn4WtF2qMphNkfyDW",
  "key4": "63EVLC7goBwxT1ojE6WuLMD6MK3tdCmHYND24bhrJWBXvj8LDTYdPvyTDCFyoYchS8zrMsCXWotSqvvkf237r5Au",
  "key5": "UGum1WvTzBbS7yjE5ZiNNqJUsxXQSJRPJNNrPchAP2o4SBdD3poUFpboaMFtz3g84JaM2zG8cbMkdaBvgreJxnk",
  "key6": "4ebHF5xMQ7pWq7qhbTL1uxqDHpUxNDwpVYB2HKy5CGLfFSoa5JKZZQsecfDBv5fprgFYYkUJm544aqQ7eNUXpa8C",
  "key7": "qgKbkimJjWK1sYv8JW7NDoyfb4SHh7ZRNKyysP7pnNYocMU5XM9YjezLLvseVbUZ34Xr9Z38asfrZSBH1mmMqYC",
  "key8": "482nPvKFCBVafcwsFmGA3VcmXmH1Rrfn59fG4uuc4AgxcNt6T2RFAgnqkBkR5tfsNMCG8avGfnMhjLe8BcsZynAF",
  "key9": "DU1eft9uuTbcqTPkQkm8cSzdGBUwWWwEHtKAS2tgegMGzJHjJ1VbGbnTy2C8cvrjEPvWXgHwKqsfHmTcgGkUkBV",
  "key10": "4p9tcfa6foZb5zs7FfcKRqdMFyL7XY2VeMcehzCCfTL4hhgjDQ1jjBzB5okWSFP1JkqjJB2iyxBACqmvEZNPsowY",
  "key11": "5EQwNAJkQAMBf8wEaSopsdSCjTtFUdNJHcsksa9naKTpihqbbrEQBLKsssQch2tuWSTkwMkFbsmSkbFG2FYEd4ck",
  "key12": "4xpz7Nk3tjmwBkS8D1ihCWUSRwGAKvRAPXEgf2rqip4Y67uuBiJmJkEYPRz7tA54s8ZT64ME4NHRRoHSJWJjdnVS",
  "key13": "55K4kcfgTMtsH2hi2QmB8XLoZKRFSkuoBp92QU4ZB5kuSsejPDKKQ1hwK198cMnHxtYaY3BeBm4HV8gRiQ88VD3W",
  "key14": "2Mr5xQ8cAa6EMf2NuXoTLnfWoo7u7M8ZBeHDHd6DKrpk8wAzH1LUcwXWHYEPxbNLDv2riHSBJ9x6jHGGVwUCfLbD",
  "key15": "5as2q2CkHyMUFzX3kbuDs4y4EoXq339mk84Zzn4RZJoPa3EYuGhrEqrBKH4YxofGyPjLez2xmAmjDTWLXRfNj8f1",
  "key16": "3kVtBD9q1iN1DYuoqBNu3po1RdhkmAsEoFktwnVbGvx3BaR1rpmfSxw8Y5NwrATaH41xPG4t2HCfjQgArCdpbCY6",
  "key17": "33A6RGho1CWQHpVia4rJGNcEUTqDmywj2ed1iow2M7D2axd4epzVjHPuuhdwqgt7TcVQvU3N1tHCkUCmGqVYk35K",
  "key18": "5ezwxXo1wR9KznJ1ZAaiTr7PdRPoi3xyttYd29V7kNxPoiKeNpqgo4ZiPaW8sUQTtpP6HXFhvaiAJgGtKaUu1HHs",
  "key19": "XtzihFVaPUTAUpD1AvuBBCCqqMbwTcAxH14tvuDBJv8FExJgAuce3btqvufyDnZrcvudci6k9E3hKkiL5aiuoYq",
  "key20": "2VcahSEwbC9ZQbX3Y1VCdamCkL8kdrKoaotbuGRAXG5NfRa9yDMRCMXTUaCNvjE31ri7aLMStS7gpeLv7iSkVa1g",
  "key21": "4aXhrpYdiRaKEGpjTe62BTf38wC7iUoeuSQk7458S4oM3tACH73vKHd9TrpDPu8waP4ZczhdYCMMS7RxHcDZhdxQ",
  "key22": "eiVxBJvCHK3CRP3cubg33GpcRT7o8hWnjwqxkpV25ZHwmWHwN23ojtLHxbeMv7BYNoDNGxppf32XyHnMt3ZR79t",
  "key23": "3DC887XVsKMJzLLwgXPeBBATgd1QTCeYvHrJoW1KhnMNFmLmPa6ztKbowiveTybK361Xvqx7KtaeLxuGSUyKviQu",
  "key24": "63oPBrqfjbTHQ28bu28o64eYrLCwb7Rrq1sgpRyUAiyHLNgNqezWjS8pXR8At2pZeAdRMJQhxeM6qEC2y1Cee37t",
  "key25": "21YdFEtEzr8CWeEuYqTv7cXvSFMiY7WT8fUjoRJurp842GdhgqcTx9PaqMc2sNLuRUKTgEYbtYioPgJEnXMiB9bK",
  "key26": "5GmYHT8VEyenH88HDu3L98BF4fSwHdEn5n1sDX57uS9LdwMjaSXdgyRcJ8zgvX8Cj8CvxgnRB1wyEVt73xwtBZRM",
  "key27": "8emWR3ABYPN15YmXyq1fNnpij9pQN6SCjvj2ctFNeeQ8fQwDfEjetjMpdHH3Kawyq3qiEdiJgFTXtt1yoqZpRQz",
  "key28": "3uJCst3NSMSYF7wK2mEYtjwhjgJmKMwqie723uByYBtAvjWoapnYzPKY9UJPnpBV6UbqsC1vJraGizAcYxko3y84",
  "key29": "ms4v7h5nrmSUPXVxx2YEztBR3xu6ZHysybyNHAxpj8RiHQW5D34ULfbuMCtevsRtsANnvyddCUKbva3UZvqHxRA",
  "key30": "3QVPnwMw6BrSbTAbDeR462hzgrw5mechyKMhSqLmdTEmnXPe7P4YgwVMzTm8y382cooXYkYeQKX1vtcAX1ERH2am",
  "key31": "31VP614SDcKv8aKCj1Fv2JMYDezBNRJEAUiYHjTzs46j8pKtiBoBvA2xgY3SA4x4Nfhm2KntzUgnTwQDcrtWvU3b",
  "key32": "37xJSG36Hh74hbpwLW8CghqPD461eWq5d52C1USy4niSJwkRWo2uRb6CekCqRkiCkcuRGF1wgwGLgAqfFGeb4EWA",
  "key33": "2eC7qDeN2iK9zKy2isfkwLDw116nXV59zWzeQFaQgd12dAqoTTc3tRZNnMVs6YujXFTFkrhw63KpqkrN5AxUJQUb",
  "key34": "4MMGS8855G8WfAta2LjeEMXYKjrPwpfsL6MP4qP3Tkx55B4SMZfLMMfFfScPwpEdYbWgN2Y7KM9QaXS4KqpMLUQc",
  "key35": "5XhkcjzkK9s8TNhSy2bYWzASigCX7YTP7r7brATb4ML3gRTC6ohpy23iERHD74F2ado4JiRtb9xZKhQjz9VhNury",
  "key36": "5TvTUh2dLQXSYt26QFRUwTTn7sVEHU3NWWG4J6R5PYxMzgjzJ2fFbdRDsnEjNDmW4nxjCE4yv8Tjkj6UAQWchfnX",
  "key37": "5Fb4F4au75yJEpxhjfixeaSES9ECsA1o6MqcfRN2HH1Yjwc1g6QpXsc4pSxFvfxt1xKu5MBYeiS1k8MU91ubZCMZ",
  "key38": "5v8Nczvr9PVEC6CDwuq7mxY1vY7P4wHrkndYAQwKunqBtNf3HwA22MfGDHBSx9UCorbKj2ifEdmTVtiabQNHBEQX",
  "key39": "vorUMwBLs6HbVB8Ubc8id14ezYFU9zV1c969KJxdaUbfUYGSgTzzYtZHH92NZShwoxFkAAwndRsMvVerkiV8ANF",
  "key40": "4QEutzWPjnBYh8AaYVR8tFzj8R6cUcFSdPN55zGFSUovn7eF4Z5FnqPzFYuwrrexRZF4GChGH8TKU8U1U2tkbYby",
  "key41": "595kej147qTp5VP19LUWG8K7h1Ccghy5eKqund5mB6KRdjtCYhwXcjMzNmkqVXWtRiaMACZDhDyE6RBEJv8mqraW",
  "key42": "2ksD4VB3KjBFHxYtNe9bU8WvV4hFVJ6rF48RY7vZg3AJJSSBKG1N7LbBiGFmsxTrJfZuGos49eUqJSSz34HHUJ6f",
  "key43": "4tk5zvBw7ykdTet92pUhgMkaRsRJ2sPh3xaVG4YM3gWYsCS994Pkb3rVUe39yzWPNVXgwfKGko7Wv6MvCFEtm81q",
  "key44": "58xaepvjfjvzrM591GqFJhgdrhX9UYCmsUn2k7RgBNmFKUCbMLRXqtBYuDsxVjTPiKwx7viNwcTrnSKyWkw5LbAH",
  "key45": "5pKtvZHAC45Uv3ZMgFEWQgeT2foajMhzcuBc8b8T3yPpeCXgdREnFTHd3WjrrR3z2CnHZUouhN7jYy1fAt1wrbJY",
  "key46": "3iKDFsnGEgSkaWK1wr74p4ZBgjTWgJnoZUQ3M1Dkn2WF3YKaiy6VQuSexDeFx4xVa4H68S2xyRDt9B2VYXpyZbsP",
  "key47": "45gaeBWowPHPufW8ZZN3TNFgMBgVT4RA83jHmGtzbNFeYZGYeamgGauDgY7sqbXhZDPqLhFkGhAfnEEVy5LNs4Cv",
  "key48": "66rPCckYWQsTUFu1XUxsAyiJ6gT2BBa41m6xz9d9ScKjyRpmDDoBaW55tXHoYvrK241H4ZKHC4TF6ATGXErnRDp1",
  "key49": "2iya94asPh73NMjmrzoSBo8gK7QqDaKrzAPtKpTDVXWTbCWE9yKGc327NeSZzGe7NfXvHJLN9mD2yX1DxikMTaVc"
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
