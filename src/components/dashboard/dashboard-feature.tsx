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
    "3HYshZFBekJix5gzt8nB9EMZ1gvcPHJp7gTXjReBhmVskU6VYoNHSg2Vbc61iri235muxJx3KfSazB4zowpHqdmt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jtS2YFNr7VwdP1LQQ5kdjemhNE3zUoSvEgD9E1RafuCbJqmg3fCDeTuRoX4UjfNPiEY1jFSbbQ1CYCJ6HgQeute",
  "key1": "3czgEqfnpRDRbZvzYG7gpBgHib8kpvBE1LuoXfTrjitdFzwCUkiTdxMaYGFYMVmoo2YRPdb1ZfM4a8zZnhgdYz9Y",
  "key2": "3tUv9zM4uGCjrg8WCwEWr8wS4vsPRpRwJHqtSuTwqb4Uui3X2rhQYosm84ESSDX2GADeMq347XysHwibVXY6RPWP",
  "key3": "2MYVR7LGs3PKFbZx3hUW4znQy73AYbgAWtXEX9ojMCbhA8W7co8rUvYePCUSrYKdkLQfn3d3b2MfuBdN3BKprymr",
  "key4": "5VYfFt3CUZxwwmt5HXPtzkS91DqHqrGFnidqAyzH2mkApfmuk3ojoxfWiVaVprFCfcWMtos82JMaTVa9WfhjhP9M",
  "key5": "4vfeqhsEqSswt8uHb53K3QH3tPiBapsNW7m7rkhbUjP6p1NJ1JMgiGBuZg8QTtV7xV3Y2cmRehM3evQTsswVM6z7",
  "key6": "3soRxTdUvGW97rh8ciBVQs9b4sBUbxicX6dBnnmShXhFACLyP5uEoCfG2Rt5tmBLbSsBuLVyGhX2g6HFc5ed9FMn",
  "key7": "4Qbu8NYPaMvbM37rzcEuknRuAVA6Sy6Ga5P97azo4Ta1JYH3Ma35XpeAox1MG57RgNzKbpkcBFKYezy3ecGq42zf",
  "key8": "36NqDXM3weyoUooDXRoHj8eRpnrpq4Wp3nsTczzfCi2yZ3WC2SNsMyctSghxUoR48zUi8uExNWCT81NkVNvX1zLz",
  "key9": "5SB73Q7MNzJyi6vLZeCxHtfc8HfJ7VFpjPU9qpDq9AtraUPbr1UobT7tndonqeF3mqBLynr9MHxrk19Bo2jpa6dz",
  "key10": "2SUnraJPvNQtdkXmFcaoHgd7DUwAxBYnBK3dJHtWPHW2SUfRwr4fjc7EjbojLzSVMt1EC1an1hsqUbdRwmaWJkVb",
  "key11": "5fcvgNn2T4wWYit8P93rBB9vcngXcg4zEkQW5bihXnpiyH5knKL15Xj8cgfhKfuvpRX2EQU2Z1cZN7hjXKR8nVNj",
  "key12": "27wCbTRCePdCWt7SmNj8fb8bF6a1oSs3f7GEvoEqWdK7BW4DUBs42a3tdWB1NuRgf4r9ndvDLnshi9HRdSFJjaZz",
  "key13": "2kEmkCRg8dpDqKHBfSbumYhKCriVMjRg9SjMdDy91dTDBRCqzn2fo2j4958KgjArxWQRpvTpQdQWZLhNf6beSRzH",
  "key14": "2DqzncraA6nkkxy5LLS6ZAdGt5qPaLed6czEpD8DnSpCL4jegfDMpB1pqX4ReXBFZodhXnHDjwznvcVE4XcoNxFW",
  "key15": "2MzKnQoHPir9mxgLSBbM8Z8t2LjHBmucYc9ggu1uj7QpaVdSSv2gKEnkshuentaiCuPVDRWiMxfT5SnJkNds31Lz",
  "key16": "5LgJjFwS61DCxba3m3meWMCdxhNtZAbxV3YnD95n5bbJqWKNkmChHjPrWqKUNbG7i7zcXpxqMLbL5owm9HAAVQRp",
  "key17": "xVWLCr3A9k2oqBRxoWAhp2pE4ksHnGS4YA7EQAZgD2EEea26uL4QcP6yGvotZDEZGDrTW8aSNXEPt5SWAYYz3DL",
  "key18": "3X7q2UAQxBRwc7GYCCnJwNzLb6UtFhxVhn7YGHQ6b7ER3GqVgKZ8U2WrroCtFFwH7vk4D9bypxymUqt1Mgmv7LL8",
  "key19": "2JFWfsFk9kbVdgnjtqeNnVwX7k8obeMts7vVu6zMjrd8tubWG3Xjw5HvX3tzZB4jgrEtvKwAE6g774QeSSePZTVC",
  "key20": "2k3pKmMXJyLVp9Acz4vQdNp3NVEseLNkSnTagaUpjfPeubvF2fn5r8BX2eFhVrpmZgnY2GPLG9EqTweHXRCxDGS5",
  "key21": "4W1Pbngn5LSH67H3LL6zXQyhS24NpJLgV6s1SAAYWAw8pk4wiGv4sEm5JKdtmPhRkjezzBx6dLXotf8GVZn4sgef",
  "key22": "4MSaQRXLpkeQwqH8JfBUFxhdwZGzhzt19ZbMYU8waUQGQEP2XrqSB1bK8rs6jfR2jy3uxwrZqWCpmgmtoaX38xpm",
  "key23": "RH9899RKJZW2eJs8e7YTnEQQavtKUZe8ja8ryw9JNy936dkENM1pFfpRmKxDPrJPBqmU8gXvNxDub6vdMRP5vim",
  "key24": "4hNnHbxB8SztdyQZEziP8nzvXx3AvCWZ72dASizttQ2bV7NF1HuAEbhnxH2gUWQrQHaNJWS84wrtrJ9wyNhtKM59",
  "key25": "kGHxQ179GkBfzfmzmEuw2aL5sAZb9LR6EFQkk525vBsDHk2u4Z9foZ3vtMULUcvkuRBu3kCKbzq3mCmQorfTd8S",
  "key26": "4vyivvgoNdyfwWkgaGbk9V6a6yESQxF6puEovL3YDEpWVM3PWdNgNiqJRhJXB6XwsfbqDmC59mwmr1NiCHmMxeKy",
  "key27": "39rG8zw5wtmALra3yrhncd33Uv8RpNo1RFET8S6GFyFa8o3azwTWzSfGQmEbFqakPreZcot1T4nsBoeJL4iaJs4a",
  "key28": "i8qm75keqB1nWxoYkHaHNxRYo9mAT7GmDxZ5wMKY2jJUAoK3H54PxgeoSwUQ8fLuGGbYvQF6PFPsX5rVb7TnpKy",
  "key29": "4YdiWfZyp47Q9mV5p2BcrzX2LSe3iGK4m2S8gJ6jhEgaq8PZJYTHZxwoAeXnLMRKyMc5GJHySMuGviMDnVu5Aytm",
  "key30": "4VrzUsVFs5odyheSjS9JKJZyseAyKTbbjSi4vr2f2gr7YtQVFRHjN3tahJacZvBF96uFZYotsNGF8hnjCFZs3nZJ",
  "key31": "Z7poHK2HCgiHkgnacPpKG9a7KR5vjdBvJ5y77ixzwbAm8XQXJZnkmmKF3zrNt9bdYNRF75e9KUuhci3MPDJqzdf",
  "key32": "62r3tpXLLZx2xMqdbGsf5qBV5Pk82oavoBPG6mpkPnynS21VCARiC86wRtT5LaF1QhEvZj85jJmNWhi8bqBwUG3q",
  "key33": "4gSbB4mGKghqGroKwstSN4HRNUPXpBfuPfvxuF53ra4oUemRxjAVL7sj7RGPn51SkjcDdkYxHjvie1466JF2wv4y",
  "key34": "4wViDmtG6RJJbxYVfe9q5G24RKq2nTzFHzFdtZC9H86WpS8RV6PqUE6MsfL68Q73dPSngSvk4bHmgvqcWKfQbSVF",
  "key35": "25NRhr3dYoCqUaZVv9pzXWQwWy5QZMEp4e3eSdFQtsa8A1YwuTmJNnAiYSW24PvZkR1oHj3uY9tTDpPZPfUmin2G",
  "key36": "4iWa9ndyNDtgdHqkQL7VWPawyR8xJ3Nu9KPdjJScb8b6CNgfe17ViCmBmrcw49DNGLrTL9TcLZUkZ2uA5sQb35p3"
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
