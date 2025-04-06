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
    "3g1jXsAyQKZcCC4DDJ5Ddd1brLE97BBANhgQNZR6NMT1xZnQsYPdXvAk1WYtuHyAxajhU9Fv2czJAu3W7Za3iyzd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xu3t8KHsXbNoShsyjnvFsYo2k7pmjwc1BvHi3JQz9ax1AZE7nMgpoajx1BQw6VzFy3ePSmxr2fnbEja8hr5m292",
  "key1": "4fLALtK84EpxsvbWWWkJtbMggMURFk5uV3oBY4uL2xvtUM4vincNVCVANKLKnQj1rdQZhxZbtTrbvupkkgMy42MU",
  "key2": "oKcMFzhmmWVBV22cnrk4j4heKTiuQD9GF6yWWUajGf77KKLsqzJndjVKM2SmvMmHUBNGTqt5hTi9mnNwBeocbo7",
  "key3": "3g1L5vrhaJXFgoANXNzhRGoPXo63RvjXR4HKkGxNr4PqJvsak43z9Z4jkkh8MmJDEAc2LVK7syEwaqF4EYQt3jW2",
  "key4": "3Sv4vE4kJdAMzAv1ikAPyrp9A4GirPYLBDE9psmNf8fu32Ep1PQPjp8yYuKvRLKcQUxNZqsBzb95xpoRXQ2UZpSq",
  "key5": "2FU4h3jaSgyE6BMUzjzu21j5q7Xi3wmqxDvexDvMXd48mDoFL6fupQxyKE7K4rs7akqyYHhpboi9NEoMwqugoBS",
  "key6": "4J9H9mJA2YZQtkB69FUWXF4EoWoxrtXmgPgB5zrsXGsqbcUkgUeAJ6dURrHuFP5B9h94kbYxzdkr6THxX5z6rwBg",
  "key7": "P5CyzZdfv56W9nxyzencVjHwWdpwBRC7VYX5dpDZmSWEtSUWYZ9NgpWLVv9zqnsxTcfQDxT9HHwj8NjmtNHUUQT",
  "key8": "3csUUah3HnjgmJsnpfFDnDHMz3nV3mTBrPod4jYmk5ndXS4CJ5FNkHetnsBpnGcPH58ynK6UJJbE3s9TDCjJCTv5",
  "key9": "yzH52X7PjVEcPCtz5a9TutMW7GVrjdZGn4eiYmehkJTWhXEphiqPekyGKU7dWpqKXF7m9PCCbsddMJ6RJAzj8NP",
  "key10": "2wq3WPBMGq5XzMSLBmeEiuivCeKHo3uUp7j3BFDcPipWmstdv2EZtBNqmHupfjfPoBxDv4H32cgas1hDYpNZpHD7",
  "key11": "4T32whveJC67y5CF3RvUPRiHjRiLdhFA2xmtHsL9GG4TERvXtBxEnkKGFBBPH8XpsEAUfkHgAeswyiaw6w3GLMCD",
  "key12": "Pr644E8sWHL4zLs85s6PFnsi3mtJxKiB8AUir3ggKrMyMnt3y7biWjMD38Fvpw8PWtgjjGrE7v77byk9H57Lnev",
  "key13": "43ZhPGq54ynP4jxb2tiNxRfHCJu6FawiNvdMCH3aqw5WYsnuUoRnE6Bxw5A2ExHvSY5HZ9iZ4mGjKVbLmFbZmsq1",
  "key14": "3sbXGjr2VvbSiwZak2khVHqhAdaQPCrxRgWtD5wrdQaqbprg75o6B6mozcSA7AYH5mbPmR1rvoDBZF89i67X9uKK",
  "key15": "5Vz2zq5Gvap3t8tnj29hqFWj9LDzasNUoXwfU4LKLj26xYdtZe79f6BaetNvTa1amBCLMAEnGJJjDDGEb5wfJprt",
  "key16": "2rBPc7xJc2UpvpdZy2UrvHKEmdRy2SARCfsNqMrHQCr6kQm1fv13gWXyWb8UTYSzYkhfLpEuMHwNHR2P1XUePYX4",
  "key17": "8CqLet5VPeaQ5rk2DtbLoy2UtzQ15o4C4CK5eSpxucfNjQt4X3uWJGvFydbBZmWcqiYBFajpoBvywd83Yg9feJy",
  "key18": "2ftMEfXBncbKa8anoWFepgYyZmZzPj2gLEouA3trJKwpa6XL2JxswcjcrUEoScpaB8qzVCgGKApCBtsywyJAP247",
  "key19": "4HGAEvdBfjDe9Akjkg17N9fJHTLNZQv9theFbbsFM4C32D6Unnmb8gjqYdqori6MkFQASKQic8v6XsA9uYzJscg3",
  "key20": "65LDRi96yrzLYARfj16zLEoyMGC5vwu6sZ9gKxbwV6tMisi8vyHy2p5iyEvMRakCWbhnXmG5GZQmnosDzSUkSgx4",
  "key21": "2SHhMhAQo1DaY1sHo3XzjMmvyvpPHhLMapbNcG3Pj185enxdqnXE6aEnpsKzSmbtNrukbMyYNAm3VwibPjaXM7y8",
  "key22": "5mSsAwgP2Tnk9tPURP83y7iZQXiMoH1d11MdJHRCdk3Xowb95EY1wahWbjqEGef2cQienhn7FxmQk8D5VivNVahX",
  "key23": "55ZcXvBMwf2AiRqeT3aEs71UL3NDjLZn6KqFtRuTaiS1TJYbmScCrkvC2wBdGwbhDcWKgiYWesDy2LA3SAL8aCAs",
  "key24": "4b5D3WiA2GkKVUYd9gB7Y5hizzSLyVnuJEpciQ33z7hrRG68fewUDsEvrAvgTcmoP7U5ty8LkR99YmNY1wxAoR8c",
  "key25": "4qnjNdDXB3KB8shDJqyFNWJzcQQ254HFbWhCMUHE3sLpstDvbKPJNhLsKAm3AmcEuBvr1CCHgXjNp2Znd4b2tYTL",
  "key26": "35M8hocHqTg4j42bqsuveUvRRfT9tEgXR24RWsvdjJoDrcpVVghphr5fUwWmkQ4NN7VBKoTUsmsDVkjJQ9eJ59o2",
  "key27": "3oTy9qKZG19VYNnJ4DR8GfbHLajtqVxQK3ALm75nTruu6Hhd4nNwZBwA4skj6HnbxNrQiefNAjPcusmjfmQs7BHo",
  "key28": "5re5egngpFEDiUhWapoYJZQdugdn5pzygJp7wBXntHFqYFgtv1BnJQxSUcT82N22hihYrhjP8X7o2iPTv6RvNZ8T",
  "key29": "4zxxNYhu6j4HhiJbvjsnJLWGi9pX16AJbcaXwoLTnHqd5YvXp1Yb8z7RXPUhSG1rW69MAYSm8oEocfCkk1toVgdz",
  "key30": "3UZFKTtBUo7yDLWNMHseuXFLKKoJjxQbFjBs1UkZTHSawPrWTLpTZHa2kbimZghY6Us4WbWKwz4Enq9QRtApaAqH",
  "key31": "4t3JmssJqGVjyXdUudwXeqiPRBdDmt6keGNr45v93XBwW3rkDTJXHdHtdXwz9s9AY6d5KKJD1d2UgPUc2RRKnrsS"
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
