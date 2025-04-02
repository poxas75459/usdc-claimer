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
    "51B7RVsUro3CMQWDSQGJ8Ub4zA922WVnYhR7j6pbCSWCV6EZGwoAwK6ckYzWrQiPbWTMdJf6oXXagqdhtP625pir"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xuhp7GSNYJSgYN4oTAkpP4jfwZu7WMuGEEWmdrSkjkPnF6Me9inU1EADFwJqrNAxzEb4E3kdwHM7skQWcaYm7Q2",
  "key1": "3tipmwMxGVCN8fCUi6NRoa59gqXkRjsgghsc8fZ4CjHJ7ZtsqhuE8TPUSCpkfRYmH8LBwU1bNoREQPtkhAHtYmUh",
  "key2": "2t6kjcK78ms4hrPsMahCbyGk3psS689GocjQBYTqLCWiWyMhQFcEBKjBmLHggrJxMFLbw1zS1WyPBLQN7VuJyG56",
  "key3": "5Ebsh6U2Jaa6QPXw5tFhM4SbqgqBbRvMfFwMoh6fJbXUMSh2dJdcaAyDZbe8rM3JPFDZupuyfhaxECxaMydCq6wo",
  "key4": "47SjW6LefLfB2JxfqCqQRZZR4FSoSh9mPDrJNvYNUpayZRcRovNXyEaBAKC3g8X9jvnpTxAByMRF3cr8kP1YHMY8",
  "key5": "5AhXvjajtqgz8kkwbiW6yVNBQimUcBvAg9hbV7XcKGtpt2AQJbE4furRfsKDf8VYVY6nuWvKvhMk99BoehY3Qana",
  "key6": "2MZ6WQCNTPK4PtSmgFcrCCZeUwyte6ExjodrehqzxmuY7aytfP3wsjT68UtFReMXheZasM1nDwE5s367CcsC81C9",
  "key7": "GJefB29FddaEXGNcbyzUra7KHxWboQ68bX3yGq89WD8kobp9KZ1JLUw8FhcGumsNaauFqKFg7GqEdihoLCr99hG",
  "key8": "3piaRhgEpG1rqqJ8s9oJZyiF8pt84E3FvVkcZ51URSxesT9NVZK87m3nfYWmFyYU1xrpAg6CYZgPTchENPSBXf1e",
  "key9": "2GdJM82oE6hihm4x4MHJA9yZDRb1CQhH9WFEG53bm4ZfVww7zKT1Cx1cNgaSyfvXVtn6ypxkhCYVWWLBVtDuhxNB",
  "key10": "4rQW94KqgkuQcY3Aw48sKMGe6vgLuqBo3EAatcL94mdQD94H8NETDzdC4NnsiFt9oUgaZGGQnWjg66r76dCaeP9z",
  "key11": "3rH8MYZxrS5AKupKPb1RHmkhfbBqGDZYZNhkJZv9BxWZ2WjQWYLJPeryTgHa8whCbcwVhWqSkEmy5C1WcqdnyfJL",
  "key12": "4GmkuVpuG4QCuLjGgNTwDafZr4GBZnBNybRRYbh4ytyeJRe9hjidtcKvGTqU8ze5tPxMnoRNJ8JS3HANPWA2UZfa",
  "key13": "5LxXdTUkMP8ubWopmfG1jetaM3U2MEdaAN5x92Jrnte7wpCFKEf5zyjJrd7qMsnR6xeDuNnvFnCikHJJ7iBQHrhW",
  "key14": "5eJzub82rbWq5CyFASCExYWEomdVHYoG3miatjFgKAVrD3UPVwMtXGMLmkrKNF2LpGjyZ8uGja4jRTXj8qggfmVQ",
  "key15": "WGT6qZ3Pd6EtzVPfKcoytLD7q58b9Dof9jUmThPEKswuHdMTAkWk3emWmTqEjd3Fs4FSom9F2pWfthGp3DTHNCa",
  "key16": "AzK8GcbGDBkRK731QKWeMeVzaaprC5A6peSpBadJPKhRBb7y85kSKEkZQoECfC1xgbuW5ahrqa6j5tMwae9LoSJ",
  "key17": "4npSncJZFV1bba4aZJG2qVR4oj7MRgDX3CCPBj5TPb9pAnxhwyxvULMoVuPC1AQcaxBCZaq59fd1qqZGQeBpVHGg",
  "key18": "4rBeLjjx5GzFiwV7t71xwg94so5TRABYbhZSi9LV7mGSJD8RUUhkqYHULTtZXGJRaJmt7q1aHCRnCgvcob3PPV2y",
  "key19": "5zmJXD7SC9djbNhn8jup2oWurjTPpQLi8gvvi8buJ9Rfk8zKBbo3wXMsqRyMiq6SPdyKBQ5jQHRvbQp6zpeRv1fS",
  "key20": "3xBTMv7S1xFpcjHbNjrWgEpBq7xNYynUNLBe6zZ1bNnsVm5S7aLCy8t73nPNfp883FmPG9mEr5K9rummEFPPqnjh",
  "key21": "5t8zXsRqMDQynDbk8eA2g5r8ruQMQABzwHo7W5ZnC92Y43UD5ugqH2ixuiJatneukn87QwGBEFgg7XNxJ4Ti6AQR",
  "key22": "3vpvc1vyDZL3bL3DzjxQxxYhqZfHa7PfWg8CqJTMV7fpMkXnzSuUrnLGz3P2tTQKSZZQYwJ4PcTPhKcg1cViJSNT",
  "key23": "5P98VxpBzDimKSCfAuTUrHEk2bD21ridQ4jEGn1buKHzqiXjbrmfwno6HEtjxzi275nBvz4T7b5oka69QYtQyhV9",
  "key24": "35sw8srFUWWQquZDZfuXzQ7axVY3ppecBHsZhwzyDWxK4uMvDUmqzase8E6RygsyfRAAc2vZKHnQD9fxJf5aaefN",
  "key25": "3Sj8GS8wasc9KnQzpzFCUoQqhHMpmAYr9k9ZvaGe6ZWkFNYcqHChtoLVAGqz14Uun4uTfS3g8kHrXznnemrMgaWf",
  "key26": "3xfmySpU9ZWaQdyWekUpnycd33rvfTpAR488NNqoyX9St1rDHDN6wEjgNBwudr73rKs6TwZ2sb9ETyWzLCeBmnV",
  "key27": "4S551RwmUFbCUpwzbAjd6H1ss1fdn58YvQiRtE2eRUaCRkVdpW2ppzw73p1HURAWnT1pxPyDfwA6jfsXungcybMj",
  "key28": "z3H6uaV4ynuLut2M2xsi46zc5ehsGS5Ln6UGWKG9nyViaFVzYPTzZ2jjwVaXfs3Cm8e5g1hTepdDggLZtPuVX7T",
  "key29": "3YdEGfCSNjuNqYEitmKtRfuKTVgGzACfyJ14aaroj31rVCTDoVMkwBNrtBecVNhYBjhJxHRAspRU5FNFQyaDnQmR",
  "key30": "571JiSTkjzgqXLt59fmueJgp2D9BL6i3zMFoUR91VfdC9wXMn8vnecMwSW64R4gtFX8Qz3SUWmr3j8XKpHYwkbGo",
  "key31": "4R3THwR93UpvqYSMzvW2vx5knRrNbHXcBbgZsR1hSr8p4zBKrmwZNTZEUCNxnqTgoJd1RRY5gifGyyqB9cXKkoXt",
  "key32": "5h13QEBPnJqSozMjxKPinszt4XMhJ49QG6AMZDnLm4j6k3FYidqdoWAsgbTmHebqRa4YicwFJBoYekP7H3Zfonf1",
  "key33": "gY1SyjbMi7nT5U1UwBufpfHb7mQ5jnsqLYpfRxobcVTRZxsyvXJFc5zYH8n4NkktnqLsTG1sxo7MRkJksRQX1Jc",
  "key34": "2xSzriLsJyDLEUiAGGeTuMtDNzXiKqYq4LKgGzwiHWZadJkUA47QzPK89ajkFeGSeZdYS9cMSi98mbXtK7GnWsAn",
  "key35": "4ZtPQV1HwMoSsQ5zMEgb3X3WH5A8vfvypW4UwsDSuYummHwBiU2xkDGgeNke9o4S7do4T5jgt3VC2DqoXaW9BU3P",
  "key36": "2fHsWYom4QTLRXhQT4EnaTo7eykSbtAknCAHMB1qmAh2vT93KR19z5wBKniJ4vfQ3bZCFbbWW75bhwwJYrJUByBF",
  "key37": "5zvFY1WoJYPeNsi7Ni2mc673Xa1haH45Mn1GFxd8iLxJa8Heks38M4J3CDCfadCyKS2zvbDmjmKaHZPXZXk9p7PV"
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
