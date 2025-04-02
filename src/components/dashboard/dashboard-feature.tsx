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
    "kDbfURwZyDN6cGdz6ZtVgzHtt7oF7SmM5TrUokM2Mf7w2N4XHMcaR8HWuHVYEbsNeYXzgxJJG1Lbxx8S4wC88rp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rBG7LKcdZEhbPdpwDgchaqZN2CwJCcGYbupxbDDo5SpwHGG84YVo2aDMFmHWjQMUmZicyNwKMowBgCXj7zu7LFb",
  "key1": "61eD7CZYRUifvPSMZXQW4kEnPQHZsseThD64u8n4C9otHhpVesPSZDDbu4rv1eqsyVBL5zRMeJBTQttN7oziPwoD",
  "key2": "yiiDpqow4SMJqvN64wcF1uR3HmpdzAA7jQWTQ5FBmTgfax6HTUYPpNUF2646hRvuj996FsHu9asbAbbQwDctcbf",
  "key3": "5ELZ7Ba4du6p6fbdWWiZKvfz44YwYCnAWhqK1HDd7PqScAVMQsbxfPr8ofGfde4xKPKTt7YX9LS5pNqvVnAoUQ35",
  "key4": "4fQ7Ng4cq7kMFwJQndPLMc2um3SpVeccTdEfX5t6HMsoMmPwdRXP5wFwcYjpWgn7VYsaX5Cy9tjwuB6TCxyDvcZ8",
  "key5": "4r4P56nru1d3fS4wwdHbxPpH46z13BExzwkPZ8ZwckXC3u6zA1ZR5wVDXhnk6LREKBVjcfT94V1aCxejG4TtFS6k",
  "key6": "5kcjRLR5yoa5n1eyUarFVaPJMkaGWF27NdfvZG7rJdD5crAPmokGPmR7f6aeUhyWrEscgv3yxo7sKk8eyhCTLHLH",
  "key7": "QZA2VkcUvPcmhsVzmcQTAiiqxhnhT9WKPHfNCaRF6bK3c45yMAdiuVuAz9bmXa7Dx48AiKEVz8YXcXHdAq8oak2",
  "key8": "3vW7na7virdumKg3djAz3CZUZzk5f34XKFdr4NRK9kab5ggDEWCPSXQuZmg6KtoZJ9QpNbKdUBQdj2QVpDsqG72q",
  "key9": "46s2ah3AU2aQ6ReQWXoQyL3uwewcF89CWTuRPkDHQDKHsVNPorZvzRkDumjBrVHCy6avMQrgJ5CCspFrH4LGyRp1",
  "key10": "UCC1XYcvzeBjGD8uzhPBSc7vJkvR8evyDZjnJYAhMs27YxucSWEQceS6qVRssvWCBDc1mJY9K9gMmwgeTLusF9c",
  "key11": "3xLXMEK6J8Ur6sE1F11F12Y4eij36CA4rtncMwNVzzKbSAgRz2FFcHWFHsNjaesksXUhaHwKsx6nucFK6W8dAqD9",
  "key12": "2PhpfovGc3FjEz8UJBdZcDpGMeGKsfNckXYkeVrDwSEy8ZZfRQwm1ySzsxQjGW71Sj577doSNNKAK3CER2N5EoKJ",
  "key13": "aAXe9oZdwCynPr4pn2knbFnioaLEVBkyars6CJVyYpVxV2ky9t677tGmAa5NrgMN8STfG2ctbZudUL5wzb8jU3m",
  "key14": "3J2fUvjBLXWuYxHWdT7fjc6GbZW65ArnrvYFtHvTEYn4AQw17XkjZ2ijdkSaksCp5m8hDdZShpvh1UvjDM4fKzc5",
  "key15": "3rLnCxfNZuUmjDQEAAacNiduLciHqQXHrFzVVmDV7s8adMGv3AAyY1SXzV9pNK7txcDoSaWprEgyP9xvEVL9mbS7",
  "key16": "3NgjhBEfg8WXa8GrsXPKGZoLWTJc6DwuJEpaar4FXzCSqTsK5KaUv8iqJDmPNS82RdvQamX1PZXNhWjVokrXJPyh",
  "key17": "4a5wFkfoSXgFrWFF1oUXcwRtYs7EWhQ3Uiq8jLaQmEe7YpBU3jz2d5NxuNNkvhD45Dm3BU7T7CN9ZS4BWPQLug1U",
  "key18": "3DGALvZk6VETWswTbVJJhM2YSWvHKteuT1zw7CZgLTEBoPiteb3ajWFVhzYHcHqXwVKArmFGPD15rVHKGNAd7M2Y",
  "key19": "2G1HpypAT1LrvFBTCudNpc2dEgJrBy7W1e9tWaMBpJJscUXD9wsidNWRdpTBGoH6pd3sv6R4Lo1c8L3D5ACVUG9X",
  "key20": "5AY7dDssRYKZf29Yj3pVS98he2uFEHGTT1p4rf1BXXDMoFoktf2qKA16FEYrTqPFfNoZEHvc9aZ8mvQLgXUsJSua",
  "key21": "2RmmNzxHPU6McQdG71kUDQDnvaWwvPg4uNpnrBcou3VVa3imhrmvsPH5tCH3b8RApEfYxEbbwK9yTdSjGwrev4af",
  "key22": "3RtnfAXhhnQ3oVR6MC9MubMBc2D5vp8cbMZRe1HzHptjp1npMxxDpi9GBgm34n79x3Hco4wSC2U8SoQUddiAXcG5",
  "key23": "yjyhLxoHueWtaARwrUkXNeN8obwrwY54vdySFbFcMTYK557BHsSahmYnn8e7oodgMtSDa8XbZdr74MkhuM8oW7U",
  "key24": "3g6Wg4o3yj1uP4VqgeLxaefhVaWbTavMT1mbMWyEthLvE7RW9H9F7os9HPWWgmenYemKzkvZpTxfEHDhnqEqbwPT",
  "key25": "3fFZHSWUHat38JP7erRmnf5pZC7aMLH94LmPe1oAQbMGzxNg5Bknzi7veKyWz1224PtWQ6tUVjR3TD1n3taYMfgL",
  "key26": "UWCdYi8rQANYSd9qc7HQ3BwUr6HfgiokFUzetLRMa6L85A71VYyQP7DUCbt2zLY81HQuYvrmkStBU4KLsvprzMp",
  "key27": "3gMV8kLSBd1vdGKhgyRYQoCpbVoqFAKxSzw4eCi8STd3wqDFzQuMeiXAoEqDVBHuv163kQnJQNr8yRukpEvRxLaL",
  "key28": "59hHQZF2TCzkHJU9xFRkj3UWSzk4UwN86mLVBesb1crXsdpGHEpxUNmYqPafNHfoujRubUp1fs4HwqGTbBLwXptw",
  "key29": "4JgVRsYckh1sZJuEGY2AebsrDAG5Vma5jkyUcFukp58G5vxCWW1gDSrugPzXMqzaSz5cYf8bn4T4L1W1fKaMzizx",
  "key30": "26hAZyWi2ipAaHK5sQVTa6GMdegkvBVRUKHqSe9kzmSZHAYoLUqSG1yRpR4Lr57J9ecEZEo7zLMenmB8c9xzHBNE",
  "key31": "3MC8s9RhLkS8G97UgpdpyucBTZxbYDPmH74V91Zxq9fet912ZqLxbL4qbbENZnuW9rHB6e6hKAV8jDDAMW5ZMjKr",
  "key32": "4uPERCiXi65SFyPErWpz8Ddx2WNuDXwicn7aVUTp5afReTbNJg6MEqmFkK5B9tZJxKf78EssJFCf6U1qZZFEDphU",
  "key33": "2SauyqpXazxaAgsE4UyJPdWcDZ5jozVawxHieL6pbCLYbcRyqKiyDyBaAykoACMkQ7oEdxGPtcdDYqiKuQhEwqeX",
  "key34": "27Z8gDa7G8yPiHZwKnbBn3WccaV7EDjQN5quQrVLouf2KW45mHPq1NLQWjjGW2eJGYguNLs3XHTXMp9b46xrHjM9",
  "key35": "5zQ6Y8ix1xrvqu21chDQ6AYEnmGnu8d5AfygXGErRNmc9NrfPAqCkCTz1LHFkErJJicHcec1Weqb4L1gZzUgxKdi",
  "key36": "F9Yx9jZvh6rkvAqcUfhFUW5DeQctoA44vtACiiPbdMhFPT5oHKaiiuVsusYwUP3eMNBTE6fxLkvSkFNWjSuVpE7",
  "key37": "4i5W7x7pCZcvZb6G3UXxVxNR5RwTQWT3UunEmqay2jb9xF4j5Fod8x1tjNTZc2E6XmecopN1mvyMeP8jQPwSJp7M",
  "key38": "2jprkbVzk38pMoz4SvrLJmYuMRGt28peFWh2NJZtH26SKBiJLUFKcY4VWcg9XD3FaNVP6mLVdmt5AqXFhqAFMTno",
  "key39": "4EQQXDNBXLmrswFYKbRvpLAybbDYf6L9Mk7H3SGSq6HdMZQGjVCV7LiHvgPUqTkXfQdVcHWnHwgfoWVmX9mQuMzU"
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
