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
    "4HdpRyasxyBNxHZdSzPMKq6QamjTGJBkrRrdaYpsBK8stGBH9mh7eSDd18vrxHbPS8HDJEZz5ikRUwpnLUJnRy1P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CANvam1Sph87FYZBkcbb4JHTZhpynhX2i5B9wyVrPoh5tJJCRFLSqE2RdMEgq9XLvZKu4iZumrYcbcbBRUKzKs4",
  "key1": "3gp6iphoPEbxwdNz972m9CxNrAFpu3umJwu4ge55p4P2AzZNBb2Jd6N1Ja3PB5uqLhKbeKhMZMeNgYGg9LX4sKJZ",
  "key2": "C5PDVhFXSkrqXVjw4xzn36HDYsbxKpk378QLhomnP4FiFUW83HGNMe9oxJAHwhoFq5Quj4zHhUvZ4x48XZ2gR5J",
  "key3": "5At4gMD3GvsrDGmHEHHPnw65Qf3GrYWvQrqJ8VLEGe6Tioaunikg8YSKWcctpt6DeFu7QsPUnGEquzRFkpGe5Tpj",
  "key4": "2FY4wjZkvQKokJYtfFRT35noXyHdTqQx8ooCApKQb1ipuYp1jiavJ6Ny6zJfj5wuKH7nBnwh9677gzFu462XkAd7",
  "key5": "2i3pejTmdh8P7BJJfFnBPeeb5tXrFnPbCqqKGxoHBe24ybRASA5PSKGPgi92Rkyz7rGKDA3fo3tXxKMd7hP7zoHy",
  "key6": "61VqAG9ugvhYYjdckH3cTXgTM2gu5CAU741NPf4kxLjWHuxmtPrWRD9aAsTPfqVpXfPngKPd7eKfQhKYtViNQ5FX",
  "key7": "2zRLFCk9Fw6Y39XeKcqA3bhLDGB8RycfJm9DuG6h1CD6WEFnu5cpreEs8narbQrgQEcat3F3w4APz9dqRDzKEYF4",
  "key8": "3dz3m3TjiYAC3wchyLWSz2pSxzFskm6mRoF37QKj6nmWbHDdjRwgnPHBXNvwERLfJqfbgWfsaNW4VhSKd2Zj4omN",
  "key9": "5J5KeyugP9RPZ1H7voBscxu7HRAaZd8W6cYy1MUxNNxkmKtGneAoNHqvkmuWKrpKwRcgeRpWthdwTaVoABNyf72i",
  "key10": "47BhHGkF8uUzHstg6Dtt2zD1NStu28MZ1uDzw64stcyCzPNK5jyoNqwMTQ79yMXtGzTcpoCK8dMgzHys7qXJARPV",
  "key11": "5LxtXXjYjwdbKxbdLgXyUzAMb86hS8SszGYzYt5jm6M2EQR55evHFKKF5LC5rzrR5YFWvNzcayQ7JMfBLN7qPNdg",
  "key12": "4it5jSCpZgxAC1VWaeTidsjcRygYTQxFEsFymc2E8BxPREGzvUSPTVpa2yPXzZvgsBhxsnwooFjvkLNbcWWdiePf",
  "key13": "4tRsVnodLZN46gdm1MHvmq6E9CdWKBntaHfcqeWFM6HUPUXkeaRuNuguN14uTfMxepxQ7ofQn4nwtvhVfq3bpm4L",
  "key14": "5ZBPRi8i9zxLTV6fhRtLcPn1P174jxasfTNPktTbmYzTZmZFWipNuTc1KDdhqK7ZTsFrGPvw7Unp4n1t9VAt6vrx",
  "key15": "2wj74NE4BQhdXZ3EPFLZKXSogANo5Tgc1YTeKkBGfjKqhnRiGuF3PxpVLRvARiBPoyfYyCQWKG6NnJaHdFUs1b8K",
  "key16": "62w5kU9b2NrQHBbtn7Ad8wCnGiA85Y9EWXFS7CDqmTorCipahWm7jLsH9cmNv57CiWxN3eLqiX7Z75KiZaLYm1LG",
  "key17": "om1pHjHti5ek6VBNoHawesYddDFojepNKKuH1qwmBDDD8SpRDnTS5adu7yVLHFpsixnQFpHcesSsdoAbpFgyUET",
  "key18": "uzSTmpkFRwjqZptw6koqfWyJdiRbHR7EVqj9xBrtsf6kaqpmzRxg7ASGGXiSw9uktKwJEZ8nB7omR3dkHmSTwGU",
  "key19": "4z1RQm8gM2fY9CqerUj51ppvr5FsJY85TRAGKX8Kn8Pi1KKR4ptwPvvnrCij4NuBsQRfzq9KTtDJYLArfqRPk4Fd",
  "key20": "4oTfQbkvVWifNRecTc3i6AqAZsjxADnzUvYQaNVRG3sggb9raWTyZLsvWt4dcssG13ixsuQzzrjcyFZWjRVHphJJ",
  "key21": "5dygYDsZeNgX7rT7sXiQVRqj8hrcTkzeEZGwawgeZqBhwXdHdVxdgvgXtCsDrh1NJYVbiRdYU3gPhGSFH9dVkywd",
  "key22": "5XoBcVGDEYeiNPeLrA2A6uFPbHwNDGi8YmqDEAE4kSchqZdVXVeh97uLjoJ4qqyjpTVKfd2Wk2tnfjwbmfqTaCge",
  "key23": "3AF2ry32RPzJAVPg7BDsqDPi95AdAggvRTi52BbAmUuZY86LTpYRvsxEt9S2Nu92UcDy7jUgrUAR1YdBoqbB2U6D",
  "key24": "5QVzzi4cWsArLreYXvaHCScnkZBUUAbBKZMRrrApKLVB5bs3t4ZRQLpQo4NEoaMSQj8ZDoVnzbHgBWTAkyZbW6QW",
  "key25": "35Qgbe8JtgRkKZzc3eakWnDBXuauBwMimZgZQxQeEZtjfQ8dQCfcZYHrg66LnjNToqBX848ZPWkHirMggEDmcoWQ",
  "key26": "2aMGQHTVyRHa9skYRhXdCSWVuo2Qj7vAEfSg13c3eqWkMbZCANvD2hLJe7JKf824Jbgs2XdK5aN8NFnAwAXsWef2",
  "key27": "2EwyjZViFvTsMV92J99Guaho598cxuY1Q48jQKspGM3Qh9ECuGeSySiKca3Wjb5iPqHbmfswYzwT6GxH4YEyPYCg",
  "key28": "3L3epVgLBY4GAARUo7WFVA76i1j6ziKgNZds5c5wGFuq86TLPsU21tExRMsbkYALWpNA8gCJGp8GevP3VNw999D6",
  "key29": "4S7vmExarGzdeSQwaiXFcYxCMZED8VNGyoUwTnT1Um1JN2AWifscMRnBXQjz1R4HTtf6Xqa2cc891yKzejvw6beT",
  "key30": "vxzRAs9TBqvJjPaFijH7aLPRFcWdv6iMaJHWMt6X7x94XxawJMe5KDKCgosgFsQH5ATMqCuxj3iUE961LpadZxz",
  "key31": "2TG7FtbaV6i1pQTXTGM7oWZs954CdMYHpkVGxZyEvyFEhjQPP3bqaG4dTer6dwmFX7d2RMckgyHKHV48BzqdTLDu",
  "key32": "ZZXxd9UTBgj1AWsarzyCkKFtbccaG9GUDj9PBSunnL9FJkZVkWynNNkViSm7mtQxX1CYeiF9NegAzSrubW6fkhp",
  "key33": "2AoLyhRqass6LUHanTde6tusFEmKTptrrjtWJr88RtoHfJjx9UJC8F2FBqzRiodQvpWNYgWaeprXw7iXKHrdPpUB",
  "key34": "ahL3emH2BdcAiR1KNFy5d7WUCC89hPdU7tvxk9V9idzgsDqSwcnRuKdxoANPsDzNTbTz5f2NNbV9UKDqPVrq2Td",
  "key35": "3URHsagwhetmY8Fppi1BFZv9cLvawmsves8ePTGQXxYtTcLMQM4cTXrRPkSKdRiQEKQnddHQXwXc8s2yXcPwJief",
  "key36": "3scYTpTLqTzYPyejP2TnFGqTFqncNETwzv9fuKpT1n2wpshLXJkxMpXGhGbCm9XVE7MrLUkWbN2Ef8GzddLD9cdi",
  "key37": "5rCZD8cwg4yWJu8hQTuGFx7NJLU1ztRV19iyFt7hBNjNyUEcMPZAQnvuxeESYeMh48TVNn7bESSbEbc2vkxzaZbj"
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
