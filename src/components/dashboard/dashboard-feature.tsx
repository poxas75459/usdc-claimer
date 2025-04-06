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
    "4uLinSZjhebczTvzu7DafopjcrEYnGuSf4FHwtzwCbdrTokHr2CvCmamKnJTrSjbDwrtWGQryptwgdmiokXnLzXa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZPhm3fdiGaxospDXNZUZb4QtMUozYB7WqnRWatwtHr57bQ1SQiEoEBqqKSKCyvQER2EgN9z8kTGMKhYaruSgbtg",
  "key1": "43TbeQtmfZcBsvVNQFupB6wkUKbt6nMQodLp4Gc13ZcQB3tYVuYTysEbBQXwSUjagb4hTaCZp17cLikVgZH2ZhQp",
  "key2": "5y8YB3D2aH2p6eyQW5xsTGQTBtSPb5X2wW7a3W6V6kYrKXaQpYrHVoKi8k4k49icmDNAyb3pjBngH6eK3U9Z1yj3",
  "key3": "4wyQDCJ7Yt34qmGMaCBPfchkwk4HNE8Kf8Be2hTjDLKzrab91hq2on1yS9BtU6eRjrphNHuoXDiwt1cvXTLuDacJ",
  "key4": "Jq7eb1KKzbAixbS5AJZdL9smHk71GcEwQtkD54jYKMAYfk1KckzvnYFUS28TcEvB6LvXqxJZwhrufFokK2VWGLJ",
  "key5": "5wZhjYc6m5fWyP5QgriVpBdbPX54EtAgJoMqwkiVkjv7gPg2hYffKhzY15ACKAn1nnikLovjxPjLu6Ui98nZt1WF",
  "key6": "Gf4xXDapcLxtG5ncMGwE61bMFUX4UsGFo7UmAuiSF9x9qBRyQgjoXKV4azacL2f2Zxh9sSJ21PK9f8o9drFDBJL",
  "key7": "2ndeg2oRwxkuvD7ZY5cX4Y7zaAqX9sjXcb4NVykTPxbX819Xh1rERRviN3GFvF4fyBVVQbkdyJs7FqEQw6ik3s5T",
  "key8": "2sYr8UW2vCKiVbQPzuUNuKwUB16TBA33u3ob1gaGD1AyW4WfFx6qUBN8SxQ1GwWxtVYR6VQ9WjTzyfj1Mbw59aWw",
  "key9": "3KHR3aCegnLmDMkDweMFwSywLKAJfaPpTXSFgZVAYPd82yZnQu2Cd6Bw763PPzSjhJpF3bR85e1gf7Js51h2H9sm",
  "key10": "4nFVA1KjWqJVCjpW8v3e8kosxwz7zyfUsbcJk26CrEKBZPFwXvVL3L7BNGaeCLitUPVuXKpB6FCZxyB5y3yTTbvb",
  "key11": "42sPoqaJjqgusboYqPppy4GhZCZyja4kYzuYJuwYX4uHJ7UTGPXk9kuEqk9dG6dsN78qycdjy2XdJCioJTtKTpN6",
  "key12": "5jRhmUZaPmHYroPWGXuL1VgxFS7xAR29qbLxWDTz2ebDy54tQMfXGYvQVppwDra2UjNn65iA24vPuKFULwig7VYe",
  "key13": "CGyXwgFUdPT2GhmRDhNjyX5mp1UGsmcso8bTAMQuHss7arN3kac958GiVSdQ5HMSCqc537CyEiT9vg7b9pCb3dz",
  "key14": "2AJ4Y9rK9P1xAHovSRLk1dvQ68BKzSsnkwp74EtPAVhh54KXY6sjT15VJfGqHh9rEEGg3ixyk1vA8xVEFRAWUMiC",
  "key15": "4fkLx5JGi9KBFSivaoQqFwgWjLMZiNYNvi3SAwzSzUWKNyqZLA2xfvHoiTDZxjvB8nH8rpknG3HdqouiCiL4o6KF",
  "key16": "4m5A51Q8FeXnhkzzHkRQQjeiDARFbvWabFzvp34dgJXUGNjhGiNaZZhsXByGKEuczswgFfBrQKEy6rbzrED5vVSE",
  "key17": "641UJ3qG9KtDdEvZjNAECVJe6sp4PmVSwFnXTfgLrrE7mNqz3YSdfMm78gRZcwGoNzYXzx9V81v7uqcYo6xz5jYm",
  "key18": "5QwhRHjH3s1zEUubje1AQQ4qeghx4rwjEAqxpHdFg99dPLjAYwSDz5UAfNvvrfe9jLsZZaxx5nsrqhA1K8JuPhVL",
  "key19": "5j8XiPUnaDqT31U2BR1TTxN8dvw9ytqTZdSXDHRA21ixzAiHLuCojfxhkjb1JrKZaehP4wghEfoQFZbJXQP4Jcnd",
  "key20": "5QFzow9GzSnppHnrGTEaxgWJNDFWpKcq7tgVBp111gdGicNuDtqKArpirgcZVBPDHUmix7JLQe74Gn2mAbgLeDXN",
  "key21": "4yrbuRZn4DYye2kG7PqJGQLnazP2cJXmgiBvBdZjeKVs3kWGdWTnnrCsBXyXgri9FHgEWsBBgaSRVdMkydqoBKS",
  "key22": "2Z6AQDXAGceYDRiB7BbNMCi7PE7qx86sMccUDPpLnq9puocQe7NGbiPtUf45gJwZVCKxLiP5WcsbPPn6mPjV918A",
  "key23": "4kdLw8itPCZZyHexBq7BgXsP2z1ZgmoQcnterVcq5cer6gexURdpfB2QhghYdCraPWC5KCENJUDAGKEjR9Ajp9Qu",
  "key24": "2MRcnQoay55KC8kgWVZjDjispaxXVUwscKs93LRncvUzzLKLmiVuCj1EFghNT6FjQNbUvVzNd4jK4WtbRpf8LECD",
  "key25": "2wu2QfMaZNS2bgxFhc3MGjdZDjEzKWhgmLRpegBzwDtaB6jwrHnRX75jNLMVaa7bBX1GoXezRTEtbDKDNiEfo1u9",
  "key26": "5pKC3keaDsNHp4NXTghCpofvgZZt9cZ67cQgUdzjEkDjVdAE8Vy3vSVuigoSWYYbDZEFkciFYm2gEDdRuk78PkF2",
  "key27": "2yrvMDYDLLgJLYxmaG9HqNwhdtxyKnQa9AUeXUHBNopGWoNswjaRYKVpnZLcF8jYxiiFQ5vaQLbjENKBcKoaTdWN",
  "key28": "2bJqPmDARKaT7cuM8d5UZyy5KeBcQ6mZoa2a4vDCPtd33Q2zKfro9tnGyf5eME96T2stWUVDswbrGdMFLn8FEtdx",
  "key29": "5hMoAeg23MnK6v3TTj5Qj6SeXx1tQWKEHcdmNpjMHaRomv6zG7buGmzA9Px7nSS2inmY4iQR1cVpTpYxYkpSPQJ",
  "key30": "5wFJ7QoDHHNQCfPkuhtBYiKWoiEgDP6PuBHQUzQTwonPRXken5Y1YwUGBehNVjuqrMbNwKKeFt1tmKF6KGkeGhv6",
  "key31": "5UjiHX9rwKWKoy9dSooKADkgnsKdatU1xuxzY9mfEeAz5CcSjGkorYJhA8LX3edgKuHX6rPUhmAEmd8Hi9fYWkWr",
  "key32": "4iFn5gU4BBifzrc5SAieQgWn5F4PhpK2RAeoCNzs5EtXsG5cxhNtRVFm28Nod1s9wUCQhjGiKZdK7QwA7ZHVRNmp",
  "key33": "2C4qpWarHcwKMuCawqsL4QuhQP1NCNtLn1Aj7rFNgs4icpxeWCcXJW21PFLpEnc6LUXwNRGr6oEtyadiS2QJiQis",
  "key34": "3d7BHE1LZ9HS3FfVLM2g83E95gLH9atc2mMPCNALdUsGh7wDDRCoW7scGyPP4KFfYowJ25sbNUQwqmUb9BiGFbKK",
  "key35": "Aej4bXePvM3njnFULmQWV48iFizqyq5cxekz1NeFhpD93iWcGapuEP8MCixrxRR22woC6D3MXcqq5toiUY7iBKc",
  "key36": "53siAW2jLPxjnSpUKKTWwwEQoEQKc4PkfAT6CqBU19YXNwpfaYz2EXoFW4c4mB4HegcHeCFeJdz5CS9BamcuMQMu",
  "key37": "4AJGxWw95NGjb1LeC44XxhHAmzcg2V59ihjhVtyvgw3x2RDesHzxAAT8Rv4MCyrRPjwSqR1omm7FdgfGeRpKyW4j",
  "key38": "2YtaSngdFMteTRcMznV3z96hsfUKgnsgA5i3qPSzRx26ocC17cJe5AyauJYfGgTxHaiEwksbczWmTrWXFg4Zwsz2",
  "key39": "2sSkDrbkjjYTnAdk8v8sczRjJwiAri93xyozn8opVZjTV2HxFQjzq7ugmuFqpERrs2yuwSQsuNUCzBiZfwNsSwDy"
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
