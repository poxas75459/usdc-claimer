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
    "37hSeNdiaJvbyb6yypq6JPk5rGvcimR6bfksrLPMGvbTBQbt4LpiHVLGEJsxxPtyV3vn9v7XREPTRWtLVnrWnGqU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UM6oDR772uAzyJJvt8thXnZkPBQ5Sn82Uq6uXqcqFwWrzBHik3EBK2kYtXEVSCfzT4ReiGzQiXmcQgvh9CPF2sA",
  "key1": "2NNbx3aCETdmcvJKykbSR59j5Y8LTuaDQp6jzxMVwkpwS9cEZjrktF5tS6Y2FBUodgjBm4Z4BS7cyzzDYBpsu8ua",
  "key2": "2JHzvzy3rx6Gi6WffGtj4uwNjKMG67zsccJLn2vu55o6sdE2QR24dQD4r7uAoqWv54yGyyWJRYa1FUmhppgyfNVB",
  "key3": "4A3kpu49AFZytgU3wEoFXqn3Zobs44dhUhGuGTNjFBT1LCZtAF6iqmctPuxGNqhCEKL1CDPfKkanbTuYgXGChAod",
  "key4": "2agvoAeoJjSueLFz9PYgbJQU8cmjBSpzMcqhYAu2NGo9j8DkWEuFDFnjjx26YaMPUNRku6wTAzSH9yThWsMQBxfD",
  "key5": "3wQtTnjGRkVByfpDQXcrn92Dk5R2NKnQiaDz4FA2BsL4vBwyT6uU8xAk6Mp5oT2o6FffoNgcWQ9MsB56HncgLt5j",
  "key6": "3e15ncpkzTyZepXAWcZRWFwbjRAYxoHufShMRiERmmrNP73cvHQUdf4oJ49XzhLoDDvFUb7PLMXyXGyn5X1WwuXT",
  "key7": "37naTyVF6X7S8by6uPkmxTRskZvaNm8kS9m9YiCbHiceMRThbygxSW6LZU3tm6cwBhjCoVZfFk7HUszFmLecce4q",
  "key8": "dZ27a5SZxFVgfGT948fEFzn4zXCAbyKMhfZM9pgCKznwSSRhsZjWNEwf4hAgBb7mvwjdzfJLUcuaRu42q335b5q",
  "key9": "64PaR5LZsjHSGHfQXYrdSWje5kkkSyvLmvwKFBfvr4XX3YLSoFJeVU2xULTHiAqb5rryeiSEUDnqkcSfa1FgZKAH",
  "key10": "4CMoENFvWXB6Ye73URYRFfVPGipfFvFEZAmhnvNkZT3YNcAuHom1vWc6Q87UUpY8e7sGQoGW391zhjMpdCEKfQ3U",
  "key11": "52WhyU6D1w4Cnc8Um8gKCZ8TsPywLNLCtHyn7j98N6HqYm7qmmWqhenkXUdrbczgVserH7BNCYCkcVm7k3Yp32Xv",
  "key12": "3kCcuikR4Mz62pEn8sPGaUAZ9QjnqVG5Nhj5n5L37CGqYCnn3SKjJFR94Auezme6LhVh5NbHeoXVrbFvRmUye3zj",
  "key13": "4HAypsGNYYHbYS2TVhvUBWcWhmnh2UJoAdwGiMF4z9rJnRhE3v4i97yNMokjb5k7XZjBQuenF7KTAVZUUx4xM2V4",
  "key14": "xnGA3o12GgzBRRdr1AwCzZKxw2EWfkeXuGme6d7ipvBP26WLusdS6istdftJStCLJvCctBEU7FBgf4r2KMHow7N",
  "key15": "UovD4TCsjnHNLtWuFf5QixTb6oVJmXBk1HtN3GPQFBv1UMi5v7EVV6TMXVLeeXa3V3gYA2348ruSZgAKjqY1VSv",
  "key16": "2noBYLMjb5ca8uToEPAQ6LXnmRntKA8vpVNvJsDTvjeGJ2fzBhmbs5F4CbwVVzpD9aebgnatQyWd7bacZgn3Byt8",
  "key17": "21jvUMtrUfz8qJa6aiJGWXDaQWju65an1GecKaB3dJkKWJ8UJYyirgzJZPkfpDbhB5PwDMhGgo3N6gCSWV3dpu9C",
  "key18": "W22fjubGC8MybpQ7XeDmPQRrPQN6srQQxd2KWVC9z283jaLfTf4Y2KMpyEcXAfwitVLN9GDF6pMyGbBbLjmUfDG",
  "key19": "5ZAU2W3RDBpNz5F81EkTBkCoALNaRubMZKz3etFFkszVTSW7cCY1EFTE4cJRxa5kEseZbrxQGgpn4ZMU1JxChVwW",
  "key20": "3MbFoXJtMsNNVt86T1TdZp9ffP4P1ebusKADkoYXGPBZ7QzYM5NyQqpteCPv941NZMP87HRnZP6o3aKkZoznyUoj",
  "key21": "3sd5LXtLPkLDaWeDvGAhb38kPwPTSCsWDp4nVVe7tM3bsqgFLTUbC7Bkmv3L8Ts2J1ncYzQLueHPJQyGwzty2GAg",
  "key22": "5RQ7o18jWMQ1BXEHhbkx3bL5YcXYAiKRmhdjfyM466bJEYSQ7bCLPQbabrmYs7iuTogCW176MLig77axDEpwRZ5R",
  "key23": "5hVM9FyLQKMoAwUhVR664YQ42oYLEXzsTKbJ7W2oUssvgwpHMVhWHXcEq8Yatsv52F8oDijioDZqLVF76nnJpn5f",
  "key24": "67Rt52kGUmaAEGP7WgADJmLkvVs1YqBziSoDSSPA3utcwCNEXHcNYadL79PiTwVwSSEdKv2K47K8ri6v8k7kPNNJ",
  "key25": "4RWqu21GN2jaVSp5A3UHanEreSpaR6pxTvriZjAQ12YspGH2FgF2o4z7MHDJtjRWgjeJpWyRbJ6jiTbqNbEe5qxd",
  "key26": "3Dp5RNoe4KVddQqanVQf5vmLBub7NiUzphmY2HdMuvfhrGqkJ9sfpLE1S8n1DxtzXy7pxj3ueYooX477qaoQ3w8x",
  "key27": "4Rrj9pT3AThovxxpLw7zGCbHgkK6aGJrumrSryaFLnCwgVSJnDbjfTjb2dKZmcmAjSt2b7xanUeyALeTR7L5qVRJ",
  "key28": "3PmSqJk846pcmsmxfwoVuxEgqweDzKxiXzTzTSWfozvoBYb5WXSmFVm6XVrpqV9WsSAQnoEP87kZQQJpbQoqL8MP",
  "key29": "5CiFJdTafadRqoymVriR1UXqHqsUHVypwjiQak4mssiepom3at86D6upti7QALqpXdiVQyHgfFEVwgzJMdHCms5F",
  "key30": "3SBdDH3bAsMVKL7JQ5zneJWST9ZEHEt8q8HnCKGxcxMQZvb4MJxyUeE5ibeKt29iD3w58Nd2w9ViuBgqz8gLjZjV",
  "key31": "2P6jKWtHAbRo2rjeT645qW95CNBMZoQP75aacFEjeXG1WihCmvvJJN63CNb5DFJ1EcrJRmFELMmtoxqt6PaXmskk",
  "key32": "65rdx8Y5H67LbPwWMAD8WzWLXTbfywFm2wuNivZWBnorTBj2pHiB8eXXUbmVcw9PHaybXVvHZBZmbcS6y9Vige4C",
  "key33": "5vz7VJHTGe7PaW1tMNFSzsj9Hagxa3bHx42szKHoTn7MoSZxoKnuHq3VJnPzNExkf3W1XQH6ozsaTW8YreEkQ8qq",
  "key34": "D115BB37dEgqnJ2zoUVFKSB77duzDPypeD9VPyWKy1k7hYTvJFT6npLqXgb4bHJmCQgBUovYH2bUhTXeGbzhrXd",
  "key35": "41H8DLQ9WQghSZrrGu4FcKvSbvjfTFSuoDZi52Y5VeCvA3Qswi6kZVfNzcBvFgdx3UrDmWcuAdtZHPLqG1ZQwNgJ",
  "key36": "3YhDPm7rTjQ1VuqJQkVmpEcHWwXs61GFnjcCWdLbAfpaBCzMCg1EsTdwegQUBnVDPvjA4pkpEsyzdZHdZzpc5Qqt",
  "key37": "VENuvMkUvMsANyMCLTiYDHi79fo9NfcPCfK2rtma1nur9qM3za2GKV5ZDHkVQdgxgFRkuDnTCFJf8x8M45jyAif",
  "key38": "53mqWWBEwnVw61Zh2XjnoUahuvL45DURwJPa9TmAc5mb5nqgNzYgF1sGjh1fLMb5fGeMiE4mk5EGVT4inBDFh8Lh",
  "key39": "4s4dj7YAFSEnXhE5TsJmskgBgZoBiSTeMczGynSwfZwPJ76heHwMaDMmJ4VWemAbH1ejGhz4FZzdT1Twq9t8CzyX",
  "key40": "56DUj1M5ijCS6V4youRsFNSKEf345pZKKqSP8SwtZxsfEFoVZrEcHwShXSq37UqA66h7kuwSnaqavWL5PjB8Tp1y"
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
