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
    "4GUAenh8Dvjwr6EfDnWM1DYYhK73YNgWsV8jaWHtvnEG1mC9A2Vzha3Ak32uVz7dv2D7mdUsaHTHzPu3NDU6kUDu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kFKYVzas5dBtUk38d6toCG9QCyHzs7LYFxtHEa2b9jLKerPavYhDRgjF29mNaCsgBfczCHZs4y8z9JUAUmkN8r7",
  "key1": "4trC9JWWGkwbu82G4uhkUJLYPwK8PxSuPFgPCTVh3o7cvYCBLRpKYHMeZGnEr53Qcow8XKaVsENRGV7agRNxpNG5",
  "key2": "2rHbYTxyb5U3pfd6AyaBMgxDQpJ8G2T8pW4MFyakLVmbMuqEZXQJR7VcEs314NQXk7nC8RspKCd1sJaDTwXaYFa2",
  "key3": "28g5Dca2NEyoG98yYefnocBCazs2ZyqqzdTjXHk5Cfmkx5CwsFYXgsrw2Y9V7DabuiL9RjKw8DqnjeqNPRkdSzuj",
  "key4": "4VZcDyLMW5xqWZJtLvXz21dKgA1Eu4VRAXoe2YT6ywXj2soMG91nB6T4Egi74ELh9DqgY71ugXLvyojrCqHBqbvY",
  "key5": "3Gf2vS262zUo2dTt9JfSLsTq3A5Pn5hFtvJqBwqJu3VvSR1iKaMnjMa7BcK7fXgrJgRvXoHR4spATbUcnkFfjXuu",
  "key6": "b2Zx3SdvwUED18VKrTLQS7XzkfSiXb8t59WdvBtkaAyC5opQvk2teVm7H7LBUjnmQD3egXL8Z2LQ21mNJbjBFgP",
  "key7": "58mDW2QNpJ2W24vPa4KfrN43wL9v3CJUttcGYvowHer6Rsny5y4HfkgugtoN6eYWRBxcEbow9b3ZqjPVrgHvoVYg",
  "key8": "3pDqJXLq82AVqRuZivSGxTadrCezAV7QX1XKkNECn68AFnAVUykH18NqP6cFBVhdCuTGL8HjHmuVwC4RY1SixeKp",
  "key9": "5DREdQWjueHS6EjVkXiJPXKtY7qZrYb2C38NXs3SLhQcj67bw2wXcrXWWLhse4M2ibgEwwZC3UPdaQuMbNqYwxJh",
  "key10": "4BjccBkMeLgj3uEfEySz44BUYhwBQDCDpswXZikEgmtvMgbkfTSeVw57YkD6nxGto1YMg4CV1RmbyqZ9rWGgiuRb",
  "key11": "4Sziop3JfNxFcK6JCwj6ys13td6kH8Git5vjHuyZHcdD6iPeRZYHV4GsTbjxaSgvton7ery63R7KiUapj3iaqq23",
  "key12": "r5znrC1NbJaKS7gLDhc4Zg9Wa16ABVXdV1MtVnc4Sxgr7iBE6ZU5AXZtD5v5yUuLXjsSNhJ354mD33BrAYyAtsJ",
  "key13": "4uwfLyf3ydCCXtAxR8r5uh9D7zmuR4V4JJ7nTBVZWJsGR89Ni494xyNfGBKs4vwHYEvmeAWnosJrKxNr58J7FEtc",
  "key14": "PANJDBotF26qVvCydV2UNGM12wfYgERhQBxgbvfggMEEPVSkSWBYXqW1FGCuMWteiB1yhJDb76gUwgQNce1HFe3",
  "key15": "3sBTfZNDXCekSE63wJjVNwsL9pdWMJjEvvoy4ShfmQ3zifc8Vnqj4aNyqm4Qd5sRspWdLFtbVvabCaTiiSdXawQ3",
  "key16": "5o97yz3NnMc6xBv6m7mcPuT8EjJ9SWk6Dmw7v9iqQAZT8ZR9ruJuNa6j3qMFkkzKcTpuZ5AR1EhiL2acnpa39NiQ",
  "key17": "67opkyTEvZykTd5WG5wQTf4j9qm7ziCGufgfjZ97add9Rs6WxkDuZMeYbPH7SmeeZzK5BiGA956y5YY7PyioXmEd",
  "key18": "oT8x5yLxigwcUZmeW8HirGReF1A7mFVv5gEqAkqkUELHd4zw6YP4FXMW9TJwfi5zCHMg7C9EbN7V2SYAyLyfkMM",
  "key19": "3osSGBaLQztu4U5VUYFT8aSerEuaNgKQNUD2XUBw4rDidBKtH4rywXBzUVZ2giVk5picQkc3tzZyF2Tx6vuC3rQr",
  "key20": "35Nv7EE6kh46LBoXCAnzTJy3fiKzGZhnJ5ma2PMoncJdWBaN8EP75JNpUNBJBP4Ao7uoxcxaSeBYpEH6vaQhuXPq",
  "key21": "5kZ3SDSVrUXYTFzus6WA2FxpPYBTsmdfKLQxM73aSa93Ce8PhF7gndS4yyW6bTXzNfykUJkWYd99zcPqtwZzq9ch",
  "key22": "4Lb4jX1WXjEiwyDkqn2WaKwLnKxHKemEToPafKxqMbiy5Wr4f1mQZMPBn3jYwo15EgvJ7PmJaV8A71jZ4PKLkskV",
  "key23": "26nid7JbR1o3bPHcfGPoiQ59NaCGgeBfmkSc8xHT1koYFCW9BTS9YzGT58QSPTVDK82wpuCYWCtMmAJN1cb2o1xy",
  "key24": "5FjGmHfL42bmjrvhLo9LWc1GrpBuf1NBqYiiaiuf9TmAAGULVXtHBEizx1wGx3G9tA6bevNqUzrmb6jrwxouUG8i",
  "key25": "3k68jxeorQcSoHhcR5SoBnjrnbeMVYBgaKWtxvBzSx9QrTEUSPnDN12eWWKxHrwBp3b27ZpASatnLZqnUa18RFPY",
  "key26": "43Vy7fqQBfpq97xHM5vsSwCSMGvR461KY3pUL4kErVm6Q9nghr9MK6GPAgdbdMPT2Mc4NN1jFwXfC39VLsCnjy8k",
  "key27": "2muBfgy1RKdhXdWDnzi8qWiB1wKkgePAFnAFb2WBWysg4cxDpVepRwfnqDNmeervxakSc2s7umJgnBxN4yLTPW97",
  "key28": "4FPeBESeHpPezbFgRLHvrxBpenp96ea5oiUk1fKrSiThScmtnYYTTBzdV77TDmTMZFLD4NuRDeFZ1yMydjKSCk1b",
  "key29": "4eSrs78ZLoeiuqh9jAH8tNf8d4zhgmsEZnwohhBaGGyfs9oYGH4BvazK7Fwf9RiVUDk5N5dMKyzsxmhcGmW46Fxg",
  "key30": "3gBmqDsPvLKzB9sjvDseGi1kqThP4KufFcZsFqo5GKKFyBdDGJCDdHNTZsdmEBMJy185TieNjxhQQBCFRmPuyJx",
  "key31": "8okD1Ej8TeGYhQd8NMBZDGPc3n7PpAy3tug6i6RyazwMD4AL43MZ4uWje8e2NjJH95MyuMaHCGATxtJb8DN1yGC",
  "key32": "3Fr1wxGFzFEckkwZNC4ymrDSEGyV2EW5oZ3RHZ766ha4vXt47SP2fpfuwNbBZ5pT6eEM9kjGZr9w2mqMtU9hUYxW",
  "key33": "2dCe92GwNqBKPzxnz8tzatUxUpdCw7fX7tscFkCw6UT88r6xMtgm3pEVD4rdRSmfmkEhHnqQyDLVrNCkmv7qs9MN",
  "key34": "2BckyRnACVKzSZdn5D3AhWmwoktSQF6n8uBd8YqxK2jbDXsdNkxRPmscCCrqcZFBG4D2tCGYLqPDW2u26MR7RoN",
  "key35": "3ybfB5zm2eG7q6DiQUv6rCkcCvQEaz4QFrUxfcyhNwpT2gLDYuwoTQ7ZQ9XomijeYChrnkmLoq6awizaLcaLwknc",
  "key36": "5TW5dgnXekV3A64nC56KjoaX8mnrqnqjBpf9Qk92QAU8HhJ9iqGWMQUy9hdSEJVJJcRL2xvYedofvE91giwZHbc6",
  "key37": "2P4LRbhDgiTwzGcU4cGLg7RkpszKJTQesh15bhgdPcDACykDgqvhqgHo7ciMZdtbTGBXhuhhaZ6bfGYatkxoVoPk",
  "key38": "3mBMzfLyL7kH71CHZz2uCFCByoUSc9VghuE1tfQEPJfh39CEMtQPrZ2FLAEGgYfyDax7Kwj8ZYNC1LsuyxakaPpH",
  "key39": "cJF2XG8JFotLg8nVJqpvnKs951NSZ3TffrjNicJicfSbmg6TdWfknKvMQcuiSkfWZMA9WQ1dnCkpFGCj3uUmnQS",
  "key40": "X7U3Y9oZqfYjmQKx7pnDWm6N6Z6QEU7YEx6Am7jq9veMja8Bg8oySzY7FZvDPEwMbvRN3DuDuSRrcJRXFXijygm",
  "key41": "26GXw3vRyyQQW2ZSaXR6asapPFz6wRkB9j3a6LdMK8VPNWmhBi75cUEgpPQwicEPHNyM2cQv19Yoj8rtx4CxhgrV",
  "key42": "hRS9JBBnfjaHpvtUVZftyQsEAR1rdRhQmdgHzwbygSNKVn71GQkXXBD6rRYLZ7zCUxKQkmP6p1gGUN2BfLgKtS4",
  "key43": "4PAQcauZhJoFyYYcdmWdm9izZJWN8c4LpTSsFoeqjzUp49hxSPxP4d3rbLGD4kYs3y7edNBXzgHF1uG9BtbCxkeZ",
  "key44": "2ZvuguS1csv6v2qU8h3snXwqmn9qjqCjENh2Ws4XAQb92BH3Ah39mS8dpJJFwdatSheZHX7h8Qji268pDb5Xej6m",
  "key45": "wgQMGtLYN4qzDQiekEgCbc3CZCnxD3y7KxaJFwYeJkfKmF5aAZ3bbi1XJZQkEdTSLrcME6GKzbuCqVDRP86GrK1"
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
