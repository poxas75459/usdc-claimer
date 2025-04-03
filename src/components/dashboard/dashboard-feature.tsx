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
    "2i3iLo1j9vugAEsYjjXAQ9UR8xb9UMqP8HZkn3pXuPSyxBos9AjhzK36VNoxkdHeopC1hMtjYrEz5pooeKHueMbi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jq1sRcFtSo5vx9N1ZVcpBXwsX1wvEtyASuSc1b9HiQLyhNgcGVtquH9cRrro5K9xxERZxm3WjUCVWPoDJJ2N7iD",
  "key1": "3jfxbKD4PaeA4ukMemXCQZt6VkFpo8xhxcX8hq669iU2zkXDrMG2oySQqu2Bv1krp8zLtM8eiVQ18Lh5uRvKhw1X",
  "key2": "4zwRttgbJwqLT9qiWFew34cjfnM6xVEtJJqM4H8UhN9jnyoFEw2cQ7BHaZ7HA2BCY5bgbk1Y7HcrbkgNYtNC9LvT",
  "key3": "4bv7WvdHEHT57L4zubagcjV9xMbDrGo6EU8KJxMWx8KSjoAZzgQNuDqbXg9Q8h75mgCiCqRFBBLYffkkoMXgiBqv",
  "key4": "4DvFKMArvt7tqeCHETxwF1ifmZdCXWLpBYsbbgfUvGo2hw8pDgXLjusYXSNMqXzECmVqsfY7r795gwu1Rao73jz8",
  "key5": "PyPD2jSJJ1D4rH6FHEgzcakGUTh5s6WnTP5mJZ4z9Z2Y3an3Khnd4cmfaRZRsaJrrbTj2NnoYSeevx2aKmEaSHz",
  "key6": "358MDQ9MN76ViDsyTh3eka8yiaKLkxkeC5jzctuoyYHyNjypz4ckMUCk2oxm7NXKgc3ra2uv3SYsbxvUGV4HKXa4",
  "key7": "L5XecPye6jw2djxPrSWGJpK5E43m5yCeQuTiB7s9wRMvE7dbtKtDMeaU5wzB7RR5GViD22uDPUqqckzfwho4B2e",
  "key8": "2WgBJToeQ9jEmthxpQHPzZAVyWmoangRepQdfJEbB9zgyZi66hUguLEyxgxeHYLSZGY2V1o78CL7tmowpZwgmVad",
  "key9": "9TXEML3vAhTGN7wEHxTuzruSuJa2XhakDZswANQ2LsAGBcJT65er3toQfTDZJnnrYqwhDkWcY1Vn2yZCNbKHtws",
  "key10": "534KoWzRP6sUGqaPgpuGNExV5MDZw4K6KcpphQjPvhQ62Jy6yPEDQVTTGaJGxcNgBQms1zhATv8Trubd5yEGMZhC",
  "key11": "t7p8YTu2GiryaBkAmhKiTYEt5WSfyfdE1otSpo96ToVMLMS1gvYtzzKPE8Bw44L4rwBKyypRXg3fe7h2jaUswCB",
  "key12": "V5pSU9KoRkbbBmANXxyAVrpRMvi8oEYoEyRTemdmqT3Gu9dwRAUkg827kpmavoab87GdwFJFCjcAm3SyfkuYC5t",
  "key13": "HMSN2f88HBdknpsobBtG2WGKFpZEsNEgrEAsJ23FBVXapnXmRtpBz6SrU2vegVQG7vjGGuF1vDF5x5M9pCrRj5W",
  "key14": "EZczrEZzAhPY1Lmfk3RC9amzJjKY6KT2fU1N4HbwNXy5mte2kdpMHvMm4aGKi32MpDhoQxqbEnn5RGRkzCxat5D",
  "key15": "4fqcNjNa6Xw9Jtzz6PSAvfZM4FL9P9BigMPqUkLcYhQHD4tzYEqCNWURrrWUHFLCbEm2V1qYcARmXUarhNUoPbsX",
  "key16": "Eb8ky9jA9Wy32o3hQEMWWnNwuXv8PMdEoDESVX3oPK8N9ddt6eGWgJcrwe6Ra7NmobtiTsvpmvLAePfmeGXpq5k",
  "key17": "59nJgcez83eDf6Bhftrn96jRhapQdQ5djwdptDZgQdGhUUYsuA1PAjPKexYKhdsrziaXoU7wEw6ufXP6UMsy31aD",
  "key18": "2cYRY6WtNNHvrKKQKsRnTEMfPsKU86eMsiiDXRva2GbwWPcqSvu8KVGUSQGwtHG7GP3j8duXjX2vdtLFHJEc6yBK",
  "key19": "64rDET7jCDN8v23FymQZjrwcNtABt3UCMUTPhYXUaPRpdnhBigBxKz7T9tuRyZHWDC68VyY42HuZQTA1wyf7n1xb",
  "key20": "4JhPQbFMko3k6f9EkS7UAjCyYSjGqrNiwNF2uVUKSugdhUkLGMiLNPDSYXLohCidRaAERK3PNjp2rq99YUAJo1Xm",
  "key21": "3XVCrLDE4nxzCjbNQRek55oPCtxgAqYQmA9NiBD6vnSv2NceCXFoM4GbMpebgCYkSu269iiSQTZ4XfqMQsNA14n9",
  "key22": "k4weSvrpzmoMuvBxgepG1htj7tar7o5Y88XAY46D9zcc8qNqQ39rYd2zC8tmr519y1CRwjyoBxLH5vjoXL2tGoG",
  "key23": "MG5epmj9LniqeHKN45NcjJLnJrtzCBXuqkQ71SmwuYdvFt2HwxkxGYyW5vNimkZqZxHi8BNLdZDdFiGsgVYA1ym",
  "key24": "2dKZm3LDJpwcCR62sEe5WQoFCPWRUCXz3s5Zth5GiHwqx4r4seVVRpSxE2DA1s7Dj2oNkRaUb3EznFXh1q2xjgY1",
  "key25": "4UeCE4oyuM1Jm5zQNZKJASmDiDYJZpWNX6vrXVY4aLaDskai6ohtf4bBMgeEgqrJtLLiJfvXR99hQfuy6EphvVSz",
  "key26": "5nwccQntdcf3nZARD9wmbdndHkuMWSoWSLvs1iHNGEdgHrgiZW5fv594ztHnL1ae18rC77Yzrk61ttmJjDcfXJ32",
  "key27": "5dvJqDYEzknwJb4LbLDnaddxA1AAWrBRJ3h8k97GmqCCiEfbD1CTqMAcXCGfiGc6ciBsKgYMKHAmao8Q4sDrDfxJ",
  "key28": "2dtQPTDnKbeiY8JqS8m6eMJMYxUKxDYHmpS8h4esMRwGuymZQW74YWAsLVDpzD1wTHr34gMtaDxr9zGYgrmYNGjm",
  "key29": "5U7b4ahu4hQiWuPKEDPZUXNKm6SvwQY5KBfxx44Cq98TfRHpqDhNfBF88qVW8SeCmcSAngXqpictYTdgnAbNDpET",
  "key30": "4i5whucWyhemMegDkwRizU91msoLJDDfkZyhmWnQcmyZY1QsqkELqjhfitbN4YdUS6MunQRe7a9rEJTVrvQNJMFV",
  "key31": "2ARssqXeSsXTatCBSd9BmLofgzLyvsvGHoWek2mmkxZfjuuj5FPECtNc3zxWYMtMn1wLcpfe8Ef1fjWsHJtfSS7V",
  "key32": "vSUt1FbEGekS39477SvGJvkpekedsEzdXuaiszDnM5q8EkvJw9tJpDvKiZSsPsVdY4jReqdqeE3FNcuBTg6EQz8",
  "key33": "2FVsnwTGRaUf53DQFfua6dwCYLSDudEHxmgRvMFJwsb5KwPKcAS5QEk3eqS6HHKNbUHTY44KMrqew7xL7nnsnfSw",
  "key34": "2TXDiBHYA4t2hNJAKtnVCrRKUfATKM1Y5sAn6f7yNCkKFahMXaWeFrnzngtFd7crQ7zM6ar5eaEmQvev6rt62hTb"
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
