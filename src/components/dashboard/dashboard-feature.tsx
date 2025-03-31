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
    "5b8XGL3HuMgUCkRTyeSdmYNFUDtgUxpGLKVm6ZhSdHEdPwtacnsukffdNG66vvdb7wJC3KZU8Ryi8jLiP3fdQtPx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gm9My8HGKovGpf7A8ngsfKPWnrLqj4mHJaZc55QABnaaQ95rnx4UdxnNJMrxkhbBKAJzigLHLr4Jkok5CWuLUif",
  "key1": "2tk7Z35vmAemRCDkbqmd9zuB9V5tGLww6qMwZKmC7hnkDNqPq6ZK4ieFmZ3bhmBfMjWKq725Ei5a5TQDKkUbpmNx",
  "key2": "4BRMq2mFJzM6Ve9Dda9Ajnordz4bvZ1L3CGBXsyJyK7ZHZR3oKa3PNkLjLtc5jKKtC7DiBdwGvUeedpvQ2pzxped",
  "key3": "LKo9V5jnWorTcdvva8AiUGybbrVUKM1KQssZtm8DVVv8LeUocqAZfEKNA8oArYyepKPTfincYtLGtsmjFFpFfsL",
  "key4": "2XXaAsRJFq1pTkoTS4uGTxQE32eU7qdgDhUc1MkfpNzuoQ3PosXYhTbHzqgcKhqQgE3S8VS8v28LZvtjJM3acZNz",
  "key5": "28goX26vNEkjzUuUMCHJerZmPpp5RBxdVSXpx55KBWa8wYmj5ddWiz52mpec5xHkNWQZ4q4BrbrsurgJBpvpG3UY",
  "key6": "3nMqjeJqFMw7DRcxqM5vj7EWJ5vteXHiMMurgkfHzCSETJDVfoewL4wfv9xTH9hHDeTLfcbrJGQKBtJE3JgQPYee",
  "key7": "2U2AMeiL3469dmnoQz8Jp275KYffoqno7NLRiXyHwfFeoNNyJ9WxGvVjGXEyEAgsP65xuFykvvJgGv4rmikfWzEu",
  "key8": "3pJYFXjNoQVr5sw7h9ur4ETP55NwqToMpL27Er1g7KRf4vwvBFhnLhR6SK6im2vT8soiruPqzjuDofuPYrDF5QQM",
  "key9": "usfdTgMzXYFA1j35tY45VjJ5L2ZKsvP1tKeAGGbQHeAVSezZ8VkmKxXwH4EjcKAZxPLqM5fZiGhDoXJXbPqgh3u",
  "key10": "3xymD3gucWdR1rYJygLFAv99K1aSGynwZzETu4QC3yKzhcGo4dZYuDbX18t3Zbja1u6aV8nFdzu5TjCk49Ucwswx",
  "key11": "5Wk1RGciXnRsZphN5jG4KH1HfjsygpwDMnsxBKnrv2c1L5mTArG4vGyS9PWT9mfBSPrGzBfZgNPTpBAYak2svqnM",
  "key12": "5ConP9ov1ae8zBeGXRdAzrm4ApTXqYKtaCtJMtPynwoyZp26QxERmfvP1VXqfHo5vVnQTN2QSeqWk9yuPqc1uyZk",
  "key13": "4yaHPeE4YHgUgNjZLY5dRmMGJzkbNo9MSL2dFDgMnpPFZGZvRqhVrqLNcy3WPyXaLZZ4Fp1ayhkkdELcKHiPHyBh",
  "key14": "qYy35T4G6AsPokt3BrsYPa6VVRv2GLytPVUT2YBu5YwJ1qi4mPUZEA8rN2Rv4z21zKRkBkpQbM9jvvo12xdezdK",
  "key15": "3RbBVjLJpX3sc6TSMPwCmAMZmadGrhSZrFczNZbAQqBq23ezuZnQWzDpetwrBbeQtYMSUQ2BPYeQL7EzqQwqfXVE",
  "key16": "5FWKX44C8RxTh8x92uLyNbVpGEwVQv9zT6Gy5EnktQvEfXd8w5YyFgJQdoZfY83y5sHPunmaxX17oH4UHstq6JV4",
  "key17": "41M4Jeyg573be4YesaCsS1S9p3rfHS5YxyGmoMwz83n7cdAfnvvJhZPiFWH6bbkZXsyaEYeCrE5ZCfNit4sNo5jw",
  "key18": "wvVMgTFoSWz7NTW6A67K5yRSNQuiE6Emg4BKZXuy8Mcan3T3EQbrvTunCbmeeZH18QaVYTJU6qEKPwvJQo9JoHG",
  "key19": "2WVsUuu5rK4Z7hK7yPYzS5NSktnPfTw4naLGXYWtcs7imy27SWPzhDh8ciC1omdTUZZKcn7ZHicYqwPVV4FPans6",
  "key20": "2qXaNUAersd4YeuvtjBzkMdzGG9dPwa9fMJQmnyBNyn8JnZxvv59Mn8vfBzVFstnmtJ5t1YTArFhixoPVenZwiUD",
  "key21": "2Xke6Uyv9qWr8VM1zXgtFrki47BgHMBD2HpYi7YA2cBVREKvUroqpiMYnJ7xMWRmWsSZ4Tya1SBDomHFWveTiCDp",
  "key22": "5TDHvVzqZxQ8NB6prWKiZbRYtAYACmjj3R2USuKvSRT9nU6KRVRof8Vqwd3A19Kd8PtjbXEox7YULuEU9HwmeQK",
  "key23": "3mz9AtTCYrE9kJAtCWmvNY63GZ7V7faZ3jZpTSVFrx7pQYkzoQt1DVmhfXVqwnFbcReENMp4Pk7WSBTyF91LuSZS",
  "key24": "5nmRSVFxJpt6YFEdnrvt7EG8cTwYQvB3iwYfLYYa9N6mqtahhgQv8RZrJtUp252VYjUmsfVBa3ER89jFYnB6Znm5",
  "key25": "3odA7TrXFXFJF4CDtHqTx7ueWHcJ7wty7hnxjTGSQPYrLdzjd4mkdZM6jovQKBPCT7rXxEMQ54gkZHwWt7w5PSoE",
  "key26": "48BXfEyPJckpPhtQ4pgVzvUvJyFN2ysQwG7txGwsCHFZseiJ4DS2gLtEZERm3EPAhdHf9Rx22W6mKM2MVtiNEpqb",
  "key27": "5Lv1frKfjSgBY5qVUMmxREdFKNen7qtJ4Ajf5AxtEJaY5YXybGYHUtQ7bS5H1KyeMhctVhFioiaUV1JzC3S2rM5B",
  "key28": "4RLvZQymF3EtA5eLNXUTktJ1t9igkdEJJCchjzQSbn2T1Ni9atwjw8y8624AVkmkB8F4M22LJZMmfXJqqA36Ffvj",
  "key29": "4er1jJxYfEuHbT7jds3WzTFMBdDAFgW2tjG3ZQ17HQJNxHYRHrV3xyN3hAhinvJojtJy9JwyPMCrKo86TMtozJCH",
  "key30": "duLeJkZcEXfRRuJervAyepPHzpGgHefDtfZyGcLDLZi3KA1iTqKNUm1m6JyTgwYpx5euaP6LgFNoRsb8hmZFwk1",
  "key31": "3Nqxqw4hYLKCFAv157XHowfgX8VRoBjP8YK6aHQef5ThLZ6g5XmNhdEejmQRsFsxekh19jmZKmEeD5pkbZvsgcLj",
  "key32": "5Y7qLxDe39Dq3hfuA2gRDNZsC74PBWJHh18uhzjSEX9fXr9Q3JgoSK1Qr6uENTTGyDBLuV4Hy5b2TmCbMBTZ6GPF",
  "key33": "brEYngqvMZx8ZvFskw75ze8gawbA9UWhBLf8tN2oHFENoY9xxiV1XdvhCPZ5D7x3eQfurMoKrvYee8MvzT7QM3G",
  "key34": "bzNjYaQKJHioRF569ssFvuQbRTBfRt8AV6iUkneMMuL9wFEV4397mKtR7eeocgMtfjYVF2sSWccwt2YvZ19FjJS",
  "key35": "5WehbJ5zGhq2v1SsFvyC7uH4iCRwSA5DpoYXCZJv9PG2Doqk5cHYsZnLt9TzycXisPVxrzPuFzSQr9qLqPF4MWur",
  "key36": "4bivEyA2iuKLK5ZvPqAsw9aUBvmsikTzR4TCZWNQR4qrJdxVFYHYFJmQgzxVpADmz7XkYxtoz6XhjWztfhbHmN9Z",
  "key37": "4r38eNuBtytgGajLKsbJe6Fuc283YxM7CZriPsKUjCjyqBSzxSdjKquKBKaGkPxyPPwdEhmEhiSxa1pjn77ByXgX",
  "key38": "4iZWQ3GiZXJaUfLofVb4RHsK9feJkm8EiTkg5bWuhq4dRpfgtWAo4bZd4CcMQSHkyS8D3geLDYA6ae3H2QnHS3Wo",
  "key39": "JS1djxvD68prSsFP3rFmE5mfq5UtiaHWEXSYv53eRDUfPsySZf1CwfQjoCg7tw7gPQL2EZRQh7t5BUJUc8w1ZoT",
  "key40": "62gQd24THSv1D6Jhir1v5rbwx9yk4kKsXPqmsmnnSiG2ZUokLqWC1iyzsc2QRJHv5K6af5dAvEiGtWz2r5tnHpN2",
  "key41": "p27HF3ktdG39K3QtVVPfoTs3Nru1V1jhbJfiGfroULT8ZLz7TJf1bxM3ryGAvDtMFhJgZs39ZXknnXUkJjzAhok",
  "key42": "47uGevP5jksf2ALi975Aj4wjJNScH6M95C5TTLgMFtVA68givb52bfwhh6PVChmes5PSff6r5WN6xGj3A89UzRvG",
  "key43": "iUqDbXVaU7NeYQeSryPdSnva7YP3i5GJMrVDdUj4oNdewe5z5ZSt3ZzrGC6ZezvJmwYYzoHQ5BrvjKhSVSw6zPB",
  "key44": "41DXcqGXNJxtRLoZFNhR5jEeUphgLwG2iYeymHcYsjYpqisaj4Vru93wc66bh62ScAqTnf2wb426PVxua6vDT8eT",
  "key45": "9kLYTPYcXVd9iE2e33QQZGhHv67hDKKp9uCYwvetAFHT6M64tdR89dwoU8EJn36Mewhp8udFbpHAYTkKKBs9EKk",
  "key46": "5LYGMnziGbbTiZZzAwAVXX4Ktwz7XSFNnYHu9s6rmy1pK4w8dnhBnGxmTry5pwqG66GmnCuDQN6LpxJ9j4AGvzbd",
  "key47": "2yogPYbQD6uBcWUhyzrXSM93cJBKc4ZzyeGRtXsKRHhVE52u1gvqcEKawDKEGg5Vnq2tPsv1SMNEccaVZXpcxDP7",
  "key48": "3LEJStbgNb7CrFbg4MAmC4CCjizyKH1gATzF5hTnqfkuQoxXfTxiyjnmyt2P7A5gB1XSE9ivYkNw6kYpNRJ4BhkS",
  "key49": "3wC2YDPeFfKGLpuiRdGkWK29bZjk8mvxX4bZduAEnPmgTAMQWZcx7dfHWREJVKtA3gjU1DM3a8PNMUC6AWQVLoQ8"
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
