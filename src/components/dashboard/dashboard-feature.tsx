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
    "qCvKaUXWeTWddUUJeRFQbrpJRndemVKC4RS2J7XyFfVLLdXBLgEPAX87gnMnmpATRarayg83AK3smPtLEEqva4u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4r49usx51zqhYCwP2CgfeavAHJse4sV1ntGMEop3zvLjJETk9DPem8qFiaTxswcGXQF3V2jBauDABoACFCtVbBYh",
  "key1": "32Mz6nB5wz98XT82uFES587dVZ2bpibLgUK2AzdmXix8w5uoMprbtmTZ9BAbquARfD43TeYH3NDzJWTUFRGwwWGH",
  "key2": "4avt1JMHYbtCMxNjz82wSa4Xsd6MJC1EF4S8f39kA2NXkxyJLtLtuKAMFMzmxoBGyvf7zBSpWA5GnvCart8qeHe6",
  "key3": "4CcUJSpCtPiUoLb8xZiS9gCcAxXDEpAhWPSqo78ZEc7ur3zYadpF2nJpfow4jhf6d135cz7jsFJkSBuMPZhrNee8",
  "key4": "4ddHvmu8r314bKEWYDM3AmCETysNvFSMWF856Poax4kqjm1BNdXGsgJZURQ5yFTPQnenAL6zHNEbKhug5xzbzdVA",
  "key5": "3W4p4wreTC5juRUtobqLE5quzUwNXTMKPapBkaSJnbyEKQNSHNsBLxdHr1LzrMT7okh6GSJve9rS1LbFvX7oW3ah",
  "key6": "brpfbqBnjGsjmbZzDWoh1Y6nYcCQuBjcbRgUoteWs8qe5dCSzQXTLcsre6gH4qU8EM7mofU1YwhW6QcMnSxQKDA",
  "key7": "2yVHJuRP7yaWjKiXorB43JyLzW9zrXM66qWQ4TmpGqn4yXL8TLXxryW7gwnhE1f116LjQ1tXX5kcsuMy76AjgMkB",
  "key8": "5q8BGe7SVHPm7Kg5Wuts2Uu1nUhWEmDDGBASkzR1J7qETkeYLvEwf52mnHNJtZWv56wqkpXNP6aKs5qC1THmFNKT",
  "key9": "2Sq2tt18JuvT27G4YNhJfZnymjZq6UvydtTLDxzaMVEBVbkVm211Mi1MxVwTVtC6JcPYsU71Ph4czZUoUrkZcp4x",
  "key10": "2YRuMBZsSFiAXEBv4sWTugKV4KzThD2uqLaiDDFHeVgdEwea9HpsUBb75nfwrCghcuZh3yuDpaqcjwPSNE2SqXM8",
  "key11": "42RnXGUb5oQjYJCs4Su8w682EJ2UzXpaST8RcQLKokYPNX75uVW8F7ty4E9b1xeKZQF9Y5ee5M9XWN1rUktcZ7HC",
  "key12": "6aQP5PMbAJzxXAt2BvVVaSMTzLEpCYjJ7Myq3Q593JUrqxSfykodK7JAZoeoGVtJ3vMX7xadvHpo7QkvfS5ELos",
  "key13": "64ypBDheUHDRdXaQAQrU6DZHoaAF9CvFngcg65x5UKgMDnD9VbQndqxa25mST35AnTvGUuNjFFuVK9b4QVogycwV",
  "key14": "3EkPxEFPdLEag2b51uGErAAagfidzXRcfRrxa4vKG5o24RvgsFsdRHWNmYr6dSLXrvZLpnBmot3Qr1fscmeZsrYz",
  "key15": "2qUkPbthW12RfUrFH8SmMbXhBT9Bf68ZuJvkcgx1DJbV5176jV2JjTfshefaQwLG3pA491thdzAa2XxfmutLCbX7",
  "key16": "3fRMtqbW5X7K2qTCoARzC1NJsJfstxe79wXgjrEDYDExj2pR8aNeNZdKid1EnYFpC4kL4FxHcfbS61cmDXkXB6TK",
  "key17": "3z4qkb1NM7MFVeKXCsQmaojmqmewkWbx3u1PAuucmPPkbpXToydBFkUTQEsBq5T2LN3SyX9bgsHTeg6p1qBm3zDR",
  "key18": "2CiYJKKxSweCD9N5CUhr6F8ZUAR7TRGENtVTptWYp2wZ42MtJPFuYaTm9ncQwG74ubqJFp2pXtQnERdGuJAEpoVP",
  "key19": "3VuYv6GNNa77sQSd18FTWK1ZdKu2MJFYG6sd8athEAeFVZtethBn8pQc9aoVcTgkyZLU6uRYQmTAiF7sM82gQuCw",
  "key20": "2MKCRmLhVCJZP1qvoMfxJezp5QNu3ciS7di9etbEAGyU2UufRWwbDVEkepVMa8NC6rWeg3N3Bp5xbhzwKQhwzBvT",
  "key21": "2bvECEAwhs17F3skf9Ud98UH7xjRcxkEHvefhL9HgE8oG86CrJCeVb42awSDgLnUAaWXe4ASebAtTB8nCKkxjfGt",
  "key22": "44rWibTCLarx7RxjhozdhfXdvtA6j9EK8esKo2Ef13AbVCGRwphctv3DETiZgfapgSDjNmyBnKdPmXzJWbp8rYDp",
  "key23": "5w9i97b8wjnJLXk931mKkXRgR4AyFia4RZffMkcX3G1T9LPDGXmC9npEUDujYA9m9K1VELXn2a838ZrHxA1ktdo1",
  "key24": "5f9dRYXVLgGiuCxGQJxcKon4vDSeSBuKb9yQQ2KSVWeWe7gtdUzQg8nkdHZM8zRtBiNo4tkr73tCEHT9hWNnCWWM",
  "key25": "SxQH4F5Dk44FSyLpnHuywze5Hn14m6qXDXZT4LCHVC6XYZLa2Rizugmcnffbai2TCojD9ABRyAHSJn6sZMWhjhd",
  "key26": "4bKqT76BsampyZnvfgZGZdtrE7YxhuU1u6ftA14czr5VtTzMhLmcDCdrjg9iJSMmMA4uJzP6Gibrx7xg4WQgJDF8",
  "key27": "3t1iAcJXSmAamR4fMMwtVdMkTD8NCPoftNCFyiBiyYAbWUfEJvf5s5LE7Jos8Qqve82oDqW6JZ2FGZUWWu4vDqwN",
  "key28": "bhYcdmTySB4ig7LzY3isNkXpFBDsotGcS7dzeuxjFGwUSAqsGqka3PEja1iNNpn5A4Hc5tt9EEFiBFyh6rpLo3R",
  "key29": "3uCsM4HZxJfabPqozivmN5sgnfCfNPA5fpNtTcsTaD6k5vLrRKyAGC5Pejbxrs7XA7z3puA4FyEzDbJZQq1VeCsu",
  "key30": "59JawtwFibdpP4wLLfRKAbmjFjH3L2wZ6JpzrmkqFF7TmbMCox7VD2bvXEbCKtgQ5Q7DLjYLtrzBwYVnAUURD7Cq",
  "key31": "3KM3BZTzFDNc2KxCwJECheCihkicLSw7Q7tFM6uCAvavaFcVinzCFGaqM8ZxbCqfT6QoLyzkMyK8d5hxnfzTt5yn",
  "key32": "AimfmUC7fCRKA7n7R31JwuRXdb9jAEXZYZZoJSW9oxVzLrD1HbNGUzQwNDpmoBycPB2ZxD6pvKvfVPSyTsG6bMs",
  "key33": "2w7a2yU11ADtRyhRgCaAaMwnt4dsJsA6K79ZeYzXPG9ozCV2S2mfWB1G9YfcTY49qcnHQzhoBHYk3F5MW3ZBDBNX",
  "key34": "4MqXf3Ye8c1CMv1DTWg8L9NPSPSqNCME3fpPAHDWMLeBE4EwSjVPGmEc1ad1wtdSgqwLHJxPU7XmFcKxh1wgbM1G"
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
