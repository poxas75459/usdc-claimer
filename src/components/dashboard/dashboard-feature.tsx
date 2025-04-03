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
    "2Twx3pUMKUYbF3BzgWpZddAoWzaDbSYcnfysQXFEjDuqm7ZxMVmyFfueVsTuoWpxyn9ip8piDeDFeY3MZZjzDzXH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GUPraDRB4CQZjcNEm54JVywxFjEUcUbTixWdgPVeTC6NTRTwAEtQ6H91KfLDeAiUEhjW4T3Szb3JiHcC2DtnYZG",
  "key1": "5ocSNcSBzjp6ZEZGJk8344xZ3JAAK2Hb6YaFRndrx2uGVii7wUHohoL8i9csxYWUARggBiLuEYxs6xLChCThiqA1",
  "key2": "5uy8cNQrfSFdHRPKz9LRVkbKsEaVBYE66Wx2dKXAGCAvPkTaEGNYsycYtSk7LJVFXg5gGgofLdticFpFcKxpr1Li",
  "key3": "2VPfNztopYR1F8hNhPWRCTjrvxfhybBbH5w8tMCDYs7q6iE3btGBnhArnG8GyXbtmkq8EkjDmFU2dTrwWqBQh9WL",
  "key4": "2EnH2wiFhGdD4qdLCZ1fxefyx65UddJ6MYUwab2y9JgTFjL92nPpf2Edmj743tMpH8V77AJn9WxZaDqi2AqGjnsU",
  "key5": "3tSTB8DA37M119JUwSqT2pZttAz5pzy79UbeoAiQ72eVFMxPcBNYm8LzueRR4jFri1qML4rXxUMkFjP2gnk93M3q",
  "key6": "X4QUmyDdem4xyVFzY7S8g4Y7zB8e9dfY38FCZ6aTp272Esd6j1ZYPW9uZj1NTD9RELam6WmLTfiGh3qZ4hz8bYj",
  "key7": "5isE6M57S2GmKW6EqnYUuHYjjcbUjJQe7gAVef7u7gpWcQTaYvk9dHL4bJ1YVV6f9obcFkD1dJg2gEMDDnXdDY3t",
  "key8": "Fq3Cxt4A1nccp8kHvtZF1mRBdHSuJndfD2qCjHENp1wXgDRiEDDTDqU6eWKbZbrsDmzxhLYAbZS4pnJ5WsQFEHv",
  "key9": "Pncffd9PsrMRw1MKEvVJZh4DZoiUuLnwktkssuXp9RPV4vYgyboWjFkhgxjiHBRoJrT2KsJNGG3Txbx6JrXHuDj",
  "key10": "3DfuEgZ2jHRze36CTZ1pkqAnAtH17wb8WAgZk9g8vEbMMLKwdPHLb1Pr8m9jLhfZwASfnDgPSKEAauUNsMj7edWA",
  "key11": "39QffHXdaBpMtS7jpXmrpF9ZzAgzshfzVUZYwjuFcSZ7d8A1jbPKXAiJ2eby66sxFbzLSw4JuSWjSR36bCv6H6XS",
  "key12": "5bGLmLZsVUsky8tTHiejxgGEgF7Dq9DKmsQ7sSTBiinuZpZ5juj7PjNmhdwcPqpuqh3H4gp53fqpfyyaPmT3BQzp",
  "key13": "62bjGXLeZ9rm8KuberiqjQCCtTTb4xkfJXEkwyg2fGhiRHcYCq1hsU3e4zoSdSS8PiexkKXJpYe4dt4epd9zkbyu",
  "key14": "FKxYzMy71dycYBK8UeCZU6xdBhGwVainhb6MHbWidtsw5YpYetm1BT7hhNqGqroJFoztRkExTTJiTjYqZYpoWaP",
  "key15": "66UEk6fEuqri4H62RdxbJEjppR633xYDDAsHHuT17gzX2GGgxZifixXqAV1HTFJLPAu16NXxv71Wc42CmDET4KcB",
  "key16": "AWkiyAdrieXesihn7EeCWYZGPiUrvVMxYs4cZ6p9GfaXf5f4t9dzSkJwWiCYRFWu233Vu5Lq8uJHyoZtE6gwapu",
  "key17": "3ABfxrWbAqvumk8CEkWtGYMvgidKZL48BqrWyR9vvNbBKeJZfgvMaQZc6jXW1q9nYm7LtvcdLLaji4Uy1FHD8qVY",
  "key18": "3AK9NhZsj13QxDX93yWj3UDswarBTQPbMwRGp8ZPteUNJHpNY59qJdB9WDsiTa8Db4xVQXyhmZKeHDHDkC3SWZk4",
  "key19": "2c44Yw1ZpxTgZ27ZhXV5E6e8K1798dG5YuY5RcDzRD6Hz6JsW34hFzh49hpgWQrndHbMVTfSo5nVj9b4uNKxkMUu",
  "key20": "4Ves13tpuqa4PqVGBdhsN96ZWrXmfnMjK6QuF3sbJHahVBBfPdAcfGRsuXaXuqaCUui6D6umMtMx1gPz9QA6RSkG",
  "key21": "5BtxVEF3ZpAxxdrVLKxAkVyWmFrGzbfYiqhwduz7HL9NVAtjbekHcSvwUpHKvnaqsGd6cKsig4qdXjtcPEgouJoR",
  "key22": "2qcS8y5uq3E9299vyMd7wXPq5syrnVL3k26uyCMKnV5s5C33ZV3DACJtuzcir4Lfujr9gos3L2zJmPVs84nnkphh",
  "key23": "Sz2xbBZisvqchEUKh5SQhX4kG2whwAc33sqarjPx9URhLLxhPNBAsG862xCc2qjq4VcZ1orhBM81P4Pdir89P5o",
  "key24": "vg7Ejc6ve3bFaebA56m3Y9kgCNvzZNb7J1LGWoPZ8CUKDgytRnSnC4FoZZeK6VDeoGhLXPm8ggdhcigrqyHUKPe",
  "key25": "3FTz5R3SV4HUwX75jJC5Tna7rGHFfvsKYmLnMSZLTTsQxgxTTuQ3dfggpgj3WPhnXP6YyLokGvZdMiuGmrG5LaVA",
  "key26": "2XtaNS3rTh1zVmmmYakjKWQVFLLK1YTtEfCZoHXnhZeFT3SDoSQCn6iVcUiApdh7m2niqB26abQEdew1MiTTjvio",
  "key27": "2MNypHL5Mg5scdazhp4FJWRDES8iNuHB6Yh12NxK1ZY3h9rJVBzxNsfnqCp8DaFHYNPDb2gNF57ahGGH4HDatkJg",
  "key28": "2LEVUsM3kVnMaLbdzoMTJ7qoTvhQD8XFpGZaAE58L5chBrQFdNCZ81nCJxy4cbyT8WzPi6KtxFtyUbJtBfrL8ycD",
  "key29": "3Jvj9VzKFAFprFAwKNeGAMbDaX9Jma9qxbNUMDm7srTPNYyM2DexNPQCD5oZtv3DvXtggQsuXx9khe7yfCZyBiah",
  "key30": "3rJvAaUGCHp7hJ3a2DmDTjCgcTFG1CF2ZMwa87FtYeLbKVhRZHb5J7rcoEFYNChoXtZjw9PriLJm5ojMuzSRubXH"
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
