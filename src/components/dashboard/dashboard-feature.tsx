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
    "5VZUfjcApJQcUr7Cg9png5rHCZDq25g6JDU5kUQDfsx196qi5XALP6JzwoFRNUM9Cce7g8e7u93sMz5k7LXfLjw3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3F26LrU969zs1nF7LrMtKwcaVL661R2rHszryPUi9sxSHiT4m52g2AQffzarem1idz9nVJrYBbrfxZuhQU8XNJkx",
  "key1": "2zzivXsR4WALLBXetngKpjQrdy5S2tYiLh5XkfzR99WxxhqgRLBFWeHzWPW9vdbBchAQU9QQTytwLSRwcg9kAuAh",
  "key2": "4AcP9cehHrBW7snGfmedCkk9mCaJGifoN6aPhygmYgLRa3UQeJfJ7PLmNNRsZ11oU85zQvRJEkNqEeEwHNZN9UBY",
  "key3": "S7D9i2CAvhFZPsTPPchXkaP9KPsB2q1dJW4iMpiAxNCXYSnFVoNYAXAdLLsYn9VnhGfSYEf4aaWZ9iYXjBkeW6U",
  "key4": "4nj4okNwpsSuEd9SQJnAEnmhomMyuumSen3pNTwDqGN5fGesTUnwTwMw829h3yGzerXiEypraNZoaXdczwhLFNxE",
  "key5": "5U9E3Jv1wDEDT8CQogwVUdW4ywQVs7fFH2sbodURDaHwQQbKnDuAmRLCyc2yJvzjdFxbjEhjFykcLHvRy4CLWXNj",
  "key6": "37Nk54XUWEtFzUn65Sp67xQYb5DAfNxfMxMqLA45EqVvMgmrkWTxgK78N3kXgfDK59W9nCV4Vcx4982sfr1aiT54",
  "key7": "2NmGBKfE3dxhd7GkXmf3kDg4uJQmmQC2CVSboiSwFTBx1C2ygb4pFVtcp77X5X1Gu53TsC4f6gwMPoocmJ6VXnc7",
  "key8": "2YowcncfKtwxBUZNFofetgcyrHjvDELHh8g76mtERW9X6bydQh31R5DJzo1t1zkLjy2yqPBw5bHi9CVaXHcfQn1k",
  "key9": "3NuFPQLQycbsCAmSMwH2pjNk788btvX2UdJewc2UxXvhr3E1Y9GHK3rCxoaSGXG4RRS1cdffuSqLntVpN834iiry",
  "key10": "5gy64qpMWG8c6n3B5mPpETWDJ7UDBZoW9MLCAzjzBwFtJRULSkfqudE1ARP2tgLYR5nJbticC1o4X2o1tLkkb99B",
  "key11": "5bkEba2MCnUQwSuRrVR3vmNwNuKhBFuV2op1Y6SrPpVnsoreLFtWpvZCH5wJkfsuuXCumiW4vzWTzEQRmrQtLvBo",
  "key12": "2m1pNB1dTUiJcnCkcdYpG2NKGtCVFQA71L8DL4EcUv7Y7UG5Jub1pGm4tcdKtVDkna4U8KsUFjzxTANdRPfS3dfy",
  "key13": "3FXWos5agwvjcdm1xmPcAPbpPCpa4eLVQNtEupaieUzSGG9dNaAsy1jV1PFFPvR6HEmG3puEiioAdkhm4F4qpHSa",
  "key14": "3suR8bVKvcZ3GRoucRCkn94EnEEUwuB8iAqKNMqAGtGvncMLcuctSR76UBUGHrmgAT3cEnMV8T3zCu5wUxe4YLqZ",
  "key15": "3oh6P1a5E6vEEMs7cce4wUr9DxXD6ZMwiyzNh8Uv1ougW44VgsCB657Ak8ws5rj23R8a2akRZCXj3PCmgpkYv1tT",
  "key16": "4onH41tEMmmyDjQFu7jMWbcZQiKhWyRxak8PND4myk745R4uXgyyHNgzCYrcwnoN83WkJR5eNFUvZZ7Q1Witbwbc",
  "key17": "59P915eVD4KtRshPgtz9GeMjMPi8wkzbPBgdngcdwQibGHPBGccrnZLo1L2P4HZzaVG5swqXXSYNps7SE3KgVazy",
  "key18": "24tjEZ3anPcwUraK3kdkYBVm3gaACAE7fMABvEHrGKuVBCEbV8XpRubo1kFN8j4r2Vzy1632CH5oYjvUhdrArrBy",
  "key19": "4aAvYM5KJ8Mj3L21JoAcjdrF8TuWzgoxAqnpLZLbWw2RZnxfZFCHB45zAo3gjjVTSXk1wq9d8U25ahXGcZL8wcQy",
  "key20": "5d2YrmhY4j7xPYbNTKu2S6yGJkGz1NwRrig1pTy6QmiVQgJuEEr2e28EAtUWaL5srtneaeHAKVS84epL2cZfv5dN",
  "key21": "4UD5kLPAnPqWqQb6irT8ho6d2Zny2H4qv5Hs6CBan2K12HfKdqxikWUB9RpGvqa4K95cv3ENAxHLyiCjFvYwHuJr",
  "key22": "M5t3WG6SkBYKifgK9S7FEhvz69g6xVLvszWW23k4RYTndT9NXkSKqP5h7Hgs8vCqVmurU6hpgE2NnQZcrygaJKz",
  "key23": "3osQSzVgEQeqPPgNrcPJejjQCBKnGa5WW79fmVWo5eRiMavHU88C64iN9pQPMXvpViot9D8XdmYg7wHi6Xd9Aj78",
  "key24": "3BMz1LiJG5bRn4KMTQ532Nr4xFzjNcNsG4T99YHkrqTyDfS3Mm8BC1U5m1M78HjWzefGKiEvtKZpTPj6vbepHvJU",
  "key25": "3ARd63odWFdeGqYurmeR98uUBA2Bd3tFhw4DEoSMmrevUfjzKfCJrYrynzm8u3vWRMzGWC4jgkCH5My87jWYiAh1",
  "key26": "44CTWsj5viZ15UPxGicgLU8fdjzPaQpjjBGXLpELWfeoPB7mveMmsTsGRRFNzsCbj3EfU2najn8ZRrV547hoEpQX",
  "key27": "3SRtt2sQCbgDu3cMCmcXNkYtAKvNNL2QMBZjqeAWeHJUk9fjVACTqh9Zg66DahQBNLCu79WEENA2rEr8tM6rFecW",
  "key28": "2bAzsdbMB9VAFcij3wsNYuk1aHRbPjpPoZZJPUHjKvdN9hpbxPYZhxDKikeL6XcKmQLCcCr15bwf6zKtzGdEh6bT",
  "key29": "29V6kztztqvGQ6qTNvcsbm7QpVkA6M19h1hHqWu5ULYbHLSzQCkBDAtkWCTYFiwVd8hisPsqarCwfpmcn8RdxjTv",
  "key30": "4GXrfyTNJmA3o8mz1kTPRE14UbKvCEdeUaAuJ8rVCHxERcXksD1ybLQHdXonRCBbAdQYuy3qV1zDqhfLkwoHC5RH",
  "key31": "5ozbE8w12PxUCGZxsurz86bhJZtmk3SpNSZTnSBF4zGLRL6B32jiZtH71hUUyLkUnC85EqA4FPv1hdnofQeGWU1S",
  "key32": "64SkrAWpVgw4NXomYjnGvDjkN9ojq9zMmtFvFWQJo2DEa7E1s1MFVW4xtFh1QJfirwzJYCbiqa9xM3u17ZQoWQeS",
  "key33": "2DUnvMhjyvXXohFLfra18zCD7LptxikkQkQQAuXjpsZjPkN3xcsQXf9va5qbmC73G96SZ6UXmEMNYcptfJhUwPrm",
  "key34": "2kY5HQWsq3svEF947zxpHnmYXzehVt1Gno6G9eEQpqtYCZaBcGDejjbUBaZopB1uiEb2Y1FgwhgUDWYxH9544vc1",
  "key35": "2H3KGUamfDTAy9d1zaBvcz7k6HBZkG22H14ANrKW7r9k1HPn8u5G3gf1oUFougPbVjyo31zkTvspxMcKNsHv9cfC",
  "key36": "2YpFPcse8EGoGSGfWcrAaznxFwcurPyhVm3DHKmUedx6ZQYpgY2JgUnH6wcgwy8n56mwbxeXMftnxCDNUDTkHcvb",
  "key37": "4hjmiP5gG49azcGfoiTtGLCYNpfuoH6UruTpNz83BXiZbnbAmHcxqZWJ9oNVbpbLmEwJoXB9J3FeYNiGtmGTzzCe",
  "key38": "44PxfnAtvpCYWBxQWSZq5ygd9c4nUocJd4f1BdFgzxSnMwaVNF3pv6bpxRw5VYpWti6MBL7UCyPgZMuHj32urTuf",
  "key39": "3KioXfUCXuwqGBZpoKSq4WwMetrGjJQbH4FpmxPfiQ85uKif6X2Ho5Pqo2QA1fXkrARCvX577WpDLw1UBtSWriTy",
  "key40": "2FMCgXkiZUHqrxnveEMHUmgQb7oSwiPxRGmxQPN1AUttwK1ASPTCjVcoZco1J1SCTHqV7bXof1tSQWk4XvCLz9Uj",
  "key41": "6ofkFEw8CUQEyo95xjqQaEsRhLyzRZ55Fmmvkk4ghzBTKspeCn8xPE3F6qvSk3KreRty8r5vLpcP94Bi6fSnhBK",
  "key42": "3ds7MmKPB2EAKag8nCRDFkB31wvfn2oQYDuQdtjrx4AfpexmxSqgCyoX5moMCAMR564zigBpBMhi654de1iXNZ33",
  "key43": "4xVXyw3Phv4KXkfvxP9WradxrP1FjpspZUTd4FhASYV5SAYMbArHintpWaQPUFkKE86jsBqUsfatw1J8eu2VPfgf",
  "key44": "37QwLZ8Rj8o8bp8L99P9PzfnvXhETZgrRQwC53xXoiowNxTykB9NmCY3w5hRwyBYyb5QqVb41A9oZstuLXSMtSka",
  "key45": "3MJ9zM5bXczpyUsrKYrsd58PAxZiiiUaVsNB2vEA3JVjXfjmD58uaSa91bPvDwUwemRrTU8QqapZEM9poZwMzxsA"
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
