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
    "4QbKmUPkzxV218wye9JyXXzJzv7qAjmiZaG2Pz3dxXKjqZMs8DKZ44YANWy48dKjx5w7epU9BBfQDBTH7L3Dtkpn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jPG1tanoQo565BGfM6hP2uyrFRTkgTGk2adE5FKRtPLY4D5tGYJq8qXHjBdqZp2yBJPmKjLu257479iNXGfQfxz",
  "key1": "5Ez575GJ9iGXc5bC7A1NuJJtG7nMybsyra9qLoeWjg2eTrHQ97LaK7W4YPbxczf2pkQ7rSfpcr52EqbhX6BDxdgy",
  "key2": "7TxAzaJJAs3TEeWAeiueoDS1C5KLfkSgbTsLHrvdCxBC1aKm1ZKtuExvP2wuV33zZCXxPvF1NQ9AB9Y5kGb39RB",
  "key3": "2wsXKRsk9Qihy4oLxxsMUMUMipf98zZ6EK5kuth4DLEnyEDpZuE7JeNzFnZCYujtPe9Hkch7JjxfuunRfdQRnHEY",
  "key4": "4u1jLidpVRbUcLxX7qaPjG1FHH5P9hQbCYqStHM7zJkyZzj1346b2y2D3BZyT8Gvu51cxtUPrqpU7MY6qJEbZrLt",
  "key5": "337N7ru4cfnaQS6TMsiFKRneqDsyScTSiEVR87UxpizFyKNEuxKRkJ1MiYYEfbWStgtrqLfwkJx1z3DvbjAZy2Zj",
  "key6": "jWtPsqdm76rPAMpeEvfiAjK1bKxCvnA7ZFEiUdUTvjQ2JbfkHs7VRfGAb4PC9nC1CYDQUi6F1qx4LvANTdRu86e",
  "key7": "CAUx45wZkc7v87iijLcRYkRLwEqZo988hiKyoCBxzkvHcjheNJgdeCmte2aiWTtJTRZbJNydd5Kym6EoNWtALxd",
  "key8": "5SwR8eQF9Cg6463aD2Bky6JjdXQcJ7AbuAvDUqxqfZetTpV4RY1rrKooAXPP9W5oY5Fmse2Jxa9BrM4oF2s1r3Mh",
  "key9": "3sFtALC6GyefJvyWdk1NLtZeJgTRdMgUAxP4L5PyXQdLzTPhAAKiaEmwQGokTrCUD1X2oED2wgfSZTQFvMJvczN3",
  "key10": "pUBCqXsYabYKfLBzaVWhoDqYerhQVWyCgHRab8y2U5MoGugACLpUBM2rJW24ULMrP4gA7DpBwQW9Uv415HXRgTV",
  "key11": "5UZr7YyWgV5HFCtzFKgvuvwU2KG398kNvyFAFBuSJHR3n1hadZu6twxjbE57dCzbfxC6ATZAiQ7fBA8CoUHL61xi",
  "key12": "egGxbrB64doSLGMWWzgPyXK17vZKnATY1qUJnwQW4Z5UcMYETPEEeCcz4ddnxC8vsvzR7m3TLRi2N1G8icJJ2Mb",
  "key13": "xB4GpnR5dd9AMEWT1pKVfySL7zTBCfM5wNYoDuuFm47TuTpsZCyVAh7VE36pNREABEaBNydzxwHLqfFULqGgR2G",
  "key14": "4BYMjYdXdPN47tRa1MuV4szMKpVMLsEvrTngDNHUKZZtFEwE9BzuN27BpAcfZUs36GdwQ24X4KpH2uccGNiGDDxX",
  "key15": "BuKLdUpSgnuT8zjthiasUF43LvKDKo5XdMsWmeMfXi89q1Vs4DeyWHzWUKw3jWM6ExNWE3VXMByzE3N9mnC6a9C",
  "key16": "3TNmksSLFsCfauS35KFURcZh6N43f9MriVsTCS83FMyk55b4q1oxQUJR5CJ1ADC4bpbxpzvYypnhr6khNEF6gVjH",
  "key17": "4XQXwFp29LwZoudrLJDrW5zM5DbXXbAvY8oWrgFSbKL6XSusPGkFZZHWk3FnFVgpc9VhrkFYdDbFsUHbB7FZSuBW",
  "key18": "4bGh3vePSepqWmY99HmLuivupEUA3KDzTMSkGqZb2MFXEpJAGUnnbXCqzdtyzagzN38U38bDodZHGCWfqhv4fack",
  "key19": "2YZGvuzt3Vw3wwwwzW5Se6rA3PndL77xdfVkUscb7MPdXX45v8jHnoujLYEwdjM2DyGbWok4fz3G7rMfGRT1N2NR",
  "key20": "3mUhvvh7FWvrUUuJYDhhSPtw4WRpwixAxnGzq5apexy8zwPgyNVrK6FZo1ZdXD8TEzQrpNstJEQqmfFrzh3bDkfA",
  "key21": "653ymZ7YRS2Wb9wVXjGY5cok6ijhpXmabNKNWqydgzWprkpxppUT71aJVdf4k49wA8fS9WfBh5xc4QN17BznsRFH",
  "key22": "5sg5xnitZ7ixmkKRdx3KmgiT6osowgQVp4eacU7SDkZafAQ8titQPEbLyFVgrptJo6jGn78QBnZVmttEQm5nvhTS",
  "key23": "3syRBdGaGhTukY8Bk3uYfyX4cb67ircXBfFwXWQhAwwV7seb1eyGxATm18RbzysXn46TEDLCuqHFt2wUEng4zBkM",
  "key24": "Pn12gRQKh1jGj93ZyeXnEmBZQYDpjrPYaQfAKG2ri8Mj9Km7Gz5AxMRtMACC2mTyNxot1MsqoM74uoBMTHBVgmR",
  "key25": "2JgznxqZRYRZ74opLqTtqcw3TdDtDwiKxivrUMgdcWmUB93vkT2Nbrzj1hKh6TNqgGjrmZn5doxyvq3qjFqTUAeT",
  "key26": "5hCWfZsh7cAnrTxxVVDbPM3Ev8KRa9DfnBawhBehRkGC8DD1CXKb2HAu4qGA9RWLquNpsUm8o8XfA4dCMXtWZTVm",
  "key27": "2JhhDYunnWGfJHy4BCsgKGXbFJcnCjhirAGyVF3RinTTc9UxeKmQzGMkCNAQrfNWmpnFXbdc2XiMftujZw3UeNLe",
  "key28": "4v7xXcpp3EKpZCzRi2whn1JgXaUs7MhrvyfY2DkZNWNyME1jvfdotrkxnFrqSPy8nVE44knV6XGv2Q1SW98vc8DN",
  "key29": "4krvLwQ8ukWZuf2yxugkYXG4cr9cTAV8Z9n82mLfcd8xiVtcbA1SXNbgsDVsy6m1457XeKxZuipCKvSRwUJQxnnw",
  "key30": "29EK53TKRiGEfLS8gER4WinrHAzDwgNrKc2BmKb8LKtPRwvE6iGMXTjKrjhY8KU5hyoiSMxbtmzKHvx4BRsh45vJ",
  "key31": "5SpXQeT4YEVUu55opKbi2MYEr16uakHmL7fbC55sufjBB9TxmvkMSJbCH9eragXNFQ6vcGMev9AuN4aNJLWqH29F",
  "key32": "gz3zf3mVYwvNsvD75N6Zk8g4z3uqDCubqZeYK3k6oiabkbNq7acUxndLZQYHCvLxFDzX1evHgZqn4nN36qHVe7o",
  "key33": "42h3fjNdpxrz6crywaTRQxA4WpfaBoVbJxyuwXg23XjDwuWbooS1veWp5G7w7Ww5G1DEmUDogHvHF3eweaU8TpB1",
  "key34": "4bcYnVcQ7GqPN9QuEBDt9TK6qayoBrYN1JGnKDAtik1ve4rHFaJpwADNps1eGxRFck5fWhhFoiMcKvWxmqDJZPYR",
  "key35": "64kkgeAK8vnvaJ9MFZmKDLkYwV73VijLJez2P2jfWjhKgDHBtvcPSePtQxDE3kzyWMQtg8nfGLGsHNtUTaCDapLa",
  "key36": "4rt3rP5MEtVCZ5cKo6qVe9Z5Q9iERA9Z7QH3GPN87irbGGfW5sevLhcx74JNWigaSJmkLjnFzn4c2Lxc6DvYVZYn",
  "key37": "2uu5JsZ48nYh9ec1tFCXYtYuMaUo3CAnv2LrmC2PwxKjPaGkYhZiiNqSuB6xrBNRmK13FZYzk2Em9ryC6pL2atqq",
  "key38": "2BPzTmMW4J6TjbG9kF7xpUt7MrH79KxnvbMxuRLRws4SMRTazj1eMAa7npU56bCRH7PLNfiFYwHDmedn6maFedFa",
  "key39": "29EMUgGyv1TY9NCJu2EneAggVyxMMFY5psx4k7EwY1j4qSTq9upixqEp2QcCeo3qbpoUSdhwYq6ADkARmKCzYPWt",
  "key40": "4S8tsAuAUReGwusjN8K4eAB3dsuYJpKeU77ZJpx8XQ58ramiFxtRrpRoBuPHQePNnq7qzYie6GAxES6WR4w2uSQU",
  "key41": "RHQkS8YK66GqYgesQg4zDSuzfnggjwjdySfkYGp2jdeoNfYnN9FDZCMYEm18fu5EWb8qN1QmW7nHPsgW8RuKneB",
  "key42": "3kqXaxuYf6HqCpjdUGN4wFH6TfhgDA3WTVeFzZgF8pq4jUKcscxN4SYgWzGsib9paJyXBLtupqr8XfXYrg4VuCnw",
  "key43": "3i7iAuM4di1nPYxnoRqhBD9iXYooHcgQftjxoGTGb1UYsK2GhRWMjv7QqhdJmiJCJxgebyyZNrQ3YCtARjiG8Mwq",
  "key44": "4kjFHRf7QFhkVUM74uNQHWS55MGy6mHaxpzkQRWZuBBrsoYUuh2Z3xrC5s788KXuLRD1BqRW3KMm8a82xKJUfKsD",
  "key45": "uBsjcig9m3ouTq6Mt2ArKuxb6hLEGGat15ENS3nxxvABK44c1Sb9taBi5otJqwcDMz5Q6pRWrb5WSTTmKtpzvEQ",
  "key46": "Y8ctQQtaGQdaKmbLX58K9Uyj9Lpk7MZEHLN14hhANkrH5qz1kGUB1C5T4YoyF5SMmZWFCfSeUprPncNinco1qum",
  "key47": "EcVoboDdz9zTV6TFPpZNEaF93idsjxMn5AJYeqjXzuVJ1GgZtP4R54RZ5uBkq1ZM4qvsyXdcJEBu9rrVU6sbTMv",
  "key48": "65btm11zpqk9ufxtoFMsTKf5mAtnYXB4T9sWGgNWat1XKhkZEVGkmnMUzxVNKuYPjCfXK2GMYG9mDDseQrnnRHP1",
  "key49": "5WjmFxWQ6BujvVGjc4qUc9wxfU3Mb9s8kVY3iAK1sD9rTTHBRxuPtmws3kb7jW5tydhFUeQeMQi9rWrRcyon7Na3"
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
