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
    "2bpcHZL2KAFPBqiTMQYen8yujQyQsxeDjmBhDeV3W6sijNT26SVFRxAhkxJmH7a4m5YxNjiTu8wPyAw2ntXPoz2E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42hCjYYHpUd8F76eoX2nAzZoE6oCLZdVzqkHTnq6ss2ZVqjHawkFMzKzgrHqaYebUUx82efiZqdNy6VGvAVc7GrQ",
  "key1": "Qr9gHQNtLWsCddc1h6SX8uAtnsCA5LRX2m2V8EEZReWazxdMwqd51JbrNdGywUyjaK6nWzoEejdBABQhUBbb2D7",
  "key2": "5PTRcc6S15HtBZWsiCdpwURGwSYyQS2XC1HYkjwiL2qZhLAe1LSJpYYaNKUUYASmNRf6LNHZTcCPWoVH1iBgBwS5",
  "key3": "24M1CuZzGhQn4jyBXa26fFjKtxQ4T6hdPqvPrMsEMkNCPA9vizQRuAK99kLQ537tjky4m31i4ByktGKyC6BpTRoD",
  "key4": "2kNhbM1vKr8f21PTYgiaqYa7MaNzj87ErFkSu3H1BCshFFKpPTgMiVypxuGxbisw76dazyw7Ug6z1k6hVeSyU5U2",
  "key5": "fPN2DSTqwAaZZs3eytgx6keGjqRsi9YU2iTJ5xhiH8kw62meHTeEDr8hbhwdHz3msjcVYgd6ref4rkkpKHwJ78Z",
  "key6": "2jj9AttMdq9qK183hbdHXCBVrV1ukkvgq7JkwEgbNYnZVdpCGuREMBXMJu2VjSQTHMgrK5vA6CoZNHUgQbF6qs2w",
  "key7": "FD2uVdxedzWgbpcZvK27jNzRrPjREBywAqcB5MyjWGCLB1EENHJoN6dWXgqitaw35zaF6E4mqWLNJ14QX4b3w1D",
  "key8": "VUi4KM8jAahCeKn5a1dAcbfCKJuhC3Si2ZsJVgyFD5W4WvJrGrJMbehAr4KpUa9Woztgyv1rhDcGudDj9YQz6XA",
  "key9": "2GwegXPBZjTZsAKp5UZeubnQn8YJdCeMqHJLypLLKrkerqKDXrcjmVdBxWdrSG9qTenawPyKpPA7VyzF4oL2VKwt",
  "key10": "3bxPLaAP5yHMCFLBcS3995GvmSSU9etBrcyCE9p9p3rNeuyBf7ByBZBr4JYdnQHAEBmhZT53NBAFqWeajRxPjRse",
  "key11": "4qSCY4if3enVKMCrVeCtKhRAwPjsaDoo1MUmEsCqhcEjJa4d8FamKzGQxBUy1ADwuhviQWg1MMU5pDRcAbi6yWmX",
  "key12": "4BtFjTU93Wm44vhikuxME2jUq79mG8eSufg1se34xodgXdJbYxXmXT7BmR5gAL1cETGARAUM5AwW1RMcc6mtz3Da",
  "key13": "2jaswUz3QdfduBuzTNzEnYWDroM2YNULVXq8otHUZF8rng9NCNDCE9AYTkHPdAgXcdqcm8q1MAGYtTwigU3whSNq",
  "key14": "4rbPCEU2xBpwbcLwess6wdEKg49JXTzuqfhyzbRJt7S9LoqWbWSsJttS45LA82UTPhgtqH6NWR5pRovVyqh1YSW6",
  "key15": "3orWVGa2V3EEG4u2Gn2hcSRUKzpyDML6aZNzaBaUiFg4N9MBxXbNVxrne4ULnBbePgsNi7WiRdHg1BAShgr6v7pJ",
  "key16": "2D8YdocTf6wQLh8xk8CER2Wr8q2PVV6ahqNynnFayB2w4t3vMoQ2sVt8qWhTzAVNQ4C1aoKTYcf4n8XxpbPnYw7D",
  "key17": "2gUugPvkoApjrH51sUYzYZHLa7XYCZCJk2LBgYSo9Za5u653zAZzSDmnjnXjRJGF9DshtYuVgaRDYi5EyN4WdsSn",
  "key18": "3GaKAUFgHhPuXNm2iuuCViZvPYeJatGfp3W8BxRzNkq8kefyQ9fgPSQCRjjeeSSUiQjqh4dbojujXp3qUf4qf7NW",
  "key19": "TJEH1kVscfqeLJf62sRR3YNUCfLWybvtRUwzcQYyGhHKqLw1JVhiqzf9RXegkQrcGzgX5xjAUBHMLqsyEBF2D6X",
  "key20": "kGR9Qm9NiJ5owiqqmsUNfBLDiKENkYU856HBizqXuAZ8o5iBskMteUrRpfDsD9Bm4PfCtRvECpkU83hh1CRTUxt",
  "key21": "2QuLFgCwMAmTEMcNqA8yHsAXz3rMjSVKrVavsVT1gHyeAxYbBhSnFBiMxVpMq8B59bb2gPYYCn1kVtkiAn4CXA3W",
  "key22": "z44ZakKp2HMTaFo78uUjW1oUZH85747LKJbvXJ1TnC4yN76qA2ietEq6YTKq3Vafo2AkcNLFyuAY2EGpdrRFzGm",
  "key23": "3xWxqyc4SCX9KpW5c5ETmBTcRgS5qj25sj7KPJ8dNw67HZKp2BtjwanRM1hzpYhPiNiQag7FcniZsa7wKSCK8i3C",
  "key24": "XvxsMApHVvKXmEz9xMyFDVWzXUv3wZMx3bkdi38sd5iCcSZmpJGMbMR1h9vLr4Xb9oALebMCbzhYXgkYrp2Zxay",
  "key25": "A2sfxxorggzzoxNj53QFSMYvjmCvWfqhmgQU3GttR5Wz4PsFwkqQFF4QyFFUaqRGHxiEqbyFfGrnJBFcMXRHxor",
  "key26": "22m4AZJgBqBd2URSef9Avur2Z6dT281LfPaAfwELLiEjLWMm9ZYw8ecqgTLr2teMTNost1h9iNq3KFkZBJxVJrMr",
  "key27": "253QBeUyCbuCB5KhVKheFh82MRektBj8ALXoSWYWGEmXimp6gukbwk6q15DSyvQyfW1RKcZFfzMFzbNp5qNT8op9",
  "key28": "2CjvE6hpe223STXPJjUuMdskzBcBXopPcX93gfqtvWts99YV4cpPRFWG2Mqd1P9JJrpXvm5d1jxcqzUy6esbDrfZ",
  "key29": "5n9feLGvPswA8q3NnceN6FyrHTrTXEZv4i3kCogyzAKR9oa4E3uA8H9iKGXhjYdD4uoHwgKj9Qe5AFVi6gMQ3WCM",
  "key30": "2voF5gQgHvLHgnXu8TqqxKCkzBy9E1Sf8wfSfPNNweA2JjEUoyMLtxkMuSANBYHK5NgxjgtWMNjZRg4PzgFLCjhR",
  "key31": "2QVJaxo4Xp2dHveLBukhktfWJ9oxdXvNikNfkds8sEwE93RiAYiZRfYhWf8dHroW87osZB1fWSifNMUZPhgsB9ae",
  "key32": "4xDy99Y7Uvxa8SoxL1Y82BcJuMW5NC7Ys6dp1Y9yrSQy9KKqa2ohCNGRDgPukmf7fFQkVRjLdqMBPYCLpmJz6wcR",
  "key33": "5yJyGw7ErAsUXYtGMRQnBNS1GnjF88ZZzYeo6FkewgGFKkWkfiX2vFRy5uZhVZ2gjDPcNsU87XFeZXraT6nj6LfR",
  "key34": "4bLwCBB6ZTWjxSRKH4GLrzWvBQaLLcZkJ8rm8y7ToZWu7YLqMxhtJ8Au2brKJeknUxcyos5XHt2R66JXWw8M6J8J",
  "key35": "4i5HtFBtWtVYi73fCV747dtbQyF4Ucob4fc42prkcNhhxLmgiKdQTPUCFfWn4t1taHE1RmXMyzVwxjZvu5vgjcZ1",
  "key36": "P6E6odd4M36416Ha6FU53VVTab58u1vZ3183PZh63Bu12974g9ZDc52EHjL2TnCNkFcEPAoJndnyVm6X9F8rG3Y",
  "key37": "26jtiFXZgVdjcBFrZCXYSxhEveyye1tXbsmVYasDUa6YZ7kXHgubhy35DM49tvVeHFuNmAk71TTHmNMQTcYWnp22",
  "key38": "3UZvp86xkRp1pq6My7vhUPiaV9DBu481pDdczVt9tqvGMgbgAxEXciSuTijxiUYh54d6EyNv4hKbsH4h7f9AMj4t",
  "key39": "5WkQkJ48dfqwNFipe8RwZqtrGKYLwiLDteDBDuLhMwxQvbVC6Q7qf57AXV3dqBCv3HGfv5aYDsWofmQK1sjaPDcc",
  "key40": "2bRwzGi3AhR8dCUJWiPZ9mGu8csjmRTdftDm5spY84wn7th69HaejKNam8FbJLzzRfW5GYdjam5tcHZ1ZGXzeB9U",
  "key41": "5o6PNrivgSXf3dmVXWQT78Amb7NNkfHiTD7YskfnCSpVPw85f5DQhdoZ7JmtyD3ugH6LSqaXahnfC98N7BVX3rtc",
  "key42": "4AtgZX4x89rmXdTA47v1hL7DdJmCf2d31RwqVbQZ6Q6EZrR7XwJbFsoNGcHxm8tAAqnhNZrREyixfyy5u3dG63jx"
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
