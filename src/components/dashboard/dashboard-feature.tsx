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
    "5DLVQvkU3Kt8zG3FFEqMgNmtU2p5hwFLnE8d11XZrFhhxmzqivJs6rx5386zjGVHCEcHtPFugCZBk4nYxBvHux8f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Re2BrLNvkHLAswVW8doGe634f9iGEXGjEKB2KeWREXJME3UxgBA6kiuxdXbrj69xhzmrHB65jRsfuXvoXpcbhXg",
  "key1": "3r3rV5CYNrNSfUBrVp9uaoL1aNnUKTUdEgAvjPiK1LZhBWMKn7kDSy3gS7oYx8G4aFdJKzBR2knfbjnafTGGm6ku",
  "key2": "4zBJg148ZxxLtHTSMZcVDhuEbvh3bt18ZP9Xn3NpvmZNUJqPtgWE1qg1MfSauWJH2P65okEZdGAfie55qYDhkQ9M",
  "key3": "3zRuHrV91punpAwjsLfbsvKAdj8BGfFbJ4br7zb67eKuzCNjeBxCX13Q2s7ardoAacwEpPJywXZkgq5QuY5ZFsPr",
  "key4": "2Sd7935Fxuiq7D22ymNVcGSWNUe1AAQzNULLsSkrVZdNeYSevYAxbAnfonKowwLqUEhGZDCi8zGCryZHT69FFcrh",
  "key5": "Ae9zPcurx7TmssZdQCFQrC9WEnjvDHd8ZYURkwM1fWPHVXgqeU9SxY5HP6xoeCn5BxkvxEJJ8kRh8V4DP2kxDtD",
  "key6": "4adc7y57rnxSBxgnt4z3rWr38vo5BHUBeMqmR2w3aHhxiucYxPbvxETwnJa5wQfjXDD84KaQaS7NFb14fq2YkZS5",
  "key7": "3jhX2EB9mGAPZCGhCt4EV6ixAXQVeuwgVVWh4giP9WABZxXcxGVzSBmLEtFWgo3pmURgA5vAnvMnh4TCqsXkybwk",
  "key8": "2sR8U1X7M2ABag7HJTDPY1cYaaGYJmutUtSm5XbmwmYU3zfTu7yzjRazkHqMnp6hpFKJ3QN9HSPcXfji4BmNYBUw",
  "key9": "525y2i7cGZco8hLMLp1ThiDnS2Lr1qsbaz1dUDHoQNnc5wuocx4PSAx3Juz6yge2Aj1Wgtns9BicP9nb8NgjwxSf",
  "key10": "MGAyJ6g3Rb7BDrTvgyfnBUg4qDfazHmfiKdJF2aoAfuej9NXTe5AMdjnLhpqWi6e574W6BoNTBuW6GbsUUhjiYf",
  "key11": "3kxLD1a3ertt8YM4ctFW79NJ7LMnK3dygBQEcSfP9rGK8GBE4teAkd1unoCuoivLgUVAPJDeLCqyo79eyeFYrVmV",
  "key12": "UX8jjx4wAovSNZNyGXwyPvgsVw2vq5wi2WQKWUMz9x6GZjj2XemtPzhmGEyE7zgcivB8M9h3JuDxvxyyjyCQTTe",
  "key13": "2rLCsbPxn9epAtvd82Kk4aUD6XQL7uWTfoe9wfZd2LJ29jKVmWLHc551xUGuaskPERtcst1Cvg1aW72bezoaggLz",
  "key14": "2q3SzALynR3nd1KiriPMHZpZv8FsERSNQFSwko5VYpqY82xg5rpKcGCnAvfea3kAfWqhMwGfcrSkF9gjY7R9DmNJ",
  "key15": "4SKLsZ5XQ4iqJ7Lk3wsx7qTZ5YRDxWXi2vZ5Hefht2s76FvZ3NQD8YVdEmdH8QoAvmbQpzKvpmSk8jD3xt2WoFY9",
  "key16": "56NXYobRraM8KgNkuRhfPeXcNqieCJjo1ejF8UZX7yk8ragXaAQygQsDnm1efi1v6Z8KJm9mdywU9nNY3Zq6MiFh",
  "key17": "5UiwjR3bN4JLTX8gx7gfghhfbfr4kYRCC1hiud3ctzA9PvnAcEyrnzZ6atkNyRtkbMZhF67H23Xo5V2VsXqTvQPT",
  "key18": "4a5T4DocBAmkgLfmjrjHLNHV8fRUV2aRAGM3GeuG1QvD1ApidmCKg3aKHe7nQUJXuwtZtbe6JoETHzm3oykbZzaW",
  "key19": "37uosUBejicxa371Hzt1egXNrN5rgMudM8ciYFzNLfD34YDG9tfa6ifVn6RV77VkUyuufcSEbAbcLN3ugSQQVkoZ",
  "key20": "5jfcbPujZDq4iGhVc8fyhmZuSYLJEMdxQnVWfWzCnC6BX3JmQrWKw6YC94dgKh4iWEyZ1Zyf9k5YkthSzABcPcX5",
  "key21": "4S95cRYQsQBti4EuNszEAvX5zbJSQad8SZgZX8sXh3BXjFKzKauTapcDukAu1aRuWawunEDuBeJgQkgud15qAyya",
  "key22": "nTSE16SyE68xRohYy4NVWcn7Xyu6ypguqo8JVGMcwtH7KWTjyYMrYAQG3QuLgHcswKTcvStyDuSSB1XmWiwhb8t",
  "key23": "3WDT7kVvwZKZE1LKujqJM4HniXKKtKpd41LcmMfoSd8RWYf1xiNpfCmt3pkEyihEMcC5YMcs7kRMsMADqmS7A71c",
  "key24": "4c6U1oMpapXYYrdv6aSAGxDc18z3HXwr1fDUQgCK9P7ibQUtMhQjp28v4ybx5nXPWjaCvymaAKpLmeAqhm8jXs7a",
  "key25": "9PZvXX5bQGGcRWRVRbTSrXrKb2pfDWBn2NY4kQng5qSCLpDiCjXvwAR5GHXJYywhb5pvXShT4KpoieudYHkV4sc",
  "key26": "4Xrxd1r62EeNLDzKCvboNf5xxDZJLX444ey5BjfiNQq2J9mm5bHMb622tqtEVVoAkobygFmEfuCRy3QvkJoRDn7L",
  "key27": "38WVWZZaCZCRKEU5ggbKPDPn53RrwnU4KB2ravzuKHPfTNTYur2tHnGrxBsu3jmfHAimYrfgEdzzABGuNRE5Mt4B",
  "key28": "5X2yrmnbqFacXK5SkZwKr4Ft2jCBmEaj3FTjT6TsJEmAXuQYzshJbVoxLi5J8t6414fjCu56yaT7eij1qG3Fjft1",
  "key29": "37tu5jAu4giMsjhKDRDWmjB7nbLTRDCXhdpRUd3uXwJzCeZNcfEekwjSZERLRyb7sNSbz8LNTUiDtjzka34LqvaK",
  "key30": "2tJQvLfC4zpx1tjvRBUWeGsoEEfzvXk4HjM8avi3PW3avMqyre7uuWjkdmCVJPk7UnerSYdX1N3jynBmNvx5Y8wd",
  "key31": "2yE6RiNPfexiNMNmtnmWKzPwGM5aauSj1ncKASUBGXmDcuegxGYRzVzC6WPvQASvhN3EwLQYZoKKBLpKFCbkhH3t",
  "key32": "ARWdNhCityNDdUZE5DdctEDBSRBK4RgVaQW3eww6Yb2BsmuKtbWgewWh4W4GHGeFbEPLzGQ1c4R76xegULYufdw",
  "key33": "A6kG1Sthb7EBchqG3b38VkHqTsgMA79142qJ5kxY9BDJ55tajdVvLmZodunaEJKZc14ruvLqB6BPSe1LJnRpVyD",
  "key34": "5MnPWN1wgxS1jEroGFUp59SQpa1dw3A9xKXzW5djB9zCwNEvmTBAAGQVjdgpSbH9qfN5F2viTabqwRBpQ99QuTiw",
  "key35": "hCRrxJgZUFZPkCn5vhJA5FqS2gP2fQMoqH1ivh1FzEUEM5UwFnGWY8nUFCdLBE1LDAd1gL4i6PEHMmZSs2j2E2j",
  "key36": "5X4wLEJA1Hp1vqrje1AQVsmKw9Z6KEPHY4C5rgwe3ofwAoBghT9aSwTv4iraQSYRi4uquo8mG9cT4MTDEAWS2jXH",
  "key37": "5vQ4skxGvEiinR2Tf74Y6JY3kNqXeUyoyJywcAWwxM6eR5XDZESMXWCCQNEpjjakaYfE1jSJcGcA5ZrYGGAc5w3p",
  "key38": "5cincWnXZMYc9jsN5uadzLu2c5ZgeYvmEvsvGvwfGFNGUwicatBpRbug2CJ9hGPprRMN2UkwdE8S7GSRcYUzwQGd",
  "key39": "27TuWi1g7DYjsa4W4ncAFyCMPsrqeE8QfBtvG4UtNvyrJcJppbtAxKAMpZXjQw36nvvLCPoWt2xBaYKsPrr6TdxE",
  "key40": "ioxc8MWMfKKzcGqCQZQHpLURcVkRhFZzeYgWJv5V87nQsJyjT5fiDD3gM1zLyJbqqubwarkoKgBHSPsQWcM12xx",
  "key41": "2Ti6keijYzva11L5jhB1C66Eq9E1dszpSprKU7NW8F2mUfK9J7YHaG9dcvcKKN3rvWX8NVmMhEzmmKUNizC7TRJR",
  "key42": "3G9GGK9sogL4WT7J3cQKGJ3dZWX5QNtd7NitwfRxpzasHfr1WkUQRpkqtwdQwf7tP4LfLS6ummRw12S1F1ahyUHj",
  "key43": "3cGiX5oiDv8ZXnNFVdSWc5CUKwavjLuq5u42hjt8QCurpd8qboJpxx4ddnFP6fiwa1FbavWUZaWojRTkJeTSMhMC",
  "key44": "v78xRoqxVZtAdEVbD76zTPCKFJfyH67ANw4vpDH4rV1YCGwwNvayHARKJ7WTGc7uWBmib323A9PuuXouR2VUZSk"
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
