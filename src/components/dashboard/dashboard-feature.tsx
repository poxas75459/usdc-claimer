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
    "3sTgNUThoHzBjtugrCUJS3VibYtAeuugVJVTkXHfhfhe8csmzD5DoSEymMDUrNqyumfDznd4AJds2BUr1VzJFrSS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8UrxCYDyaLwfdnUAdFy8X4M65sV4MpbrUSpYLxbwwbxC1meYowHD3kTAsai1QPSNmuHVUH5jNE4TRziyofCNbkA",
  "key1": "55UgAKm7bHmm2hd5AUDgiR3e2kAfUHmibcUYAEKfcdhro17tK3NVjrkRafjytguhXESXGRtwkazJxvnNKHgzGBrN",
  "key2": "5qnAeJpyGTwyCtrn9SddDCxMSzzHEK5PXbLLWbr7iNJXGkTCymZVzzvdYEFnyVFEGKjB4odqMHZ79H6s8uYe1XTb",
  "key3": "3APH2R5fYnZpERGofgwZH8ZkkMtCvEjhZ5eK2pa9N9rBK5BpSnfSswHa82CXscwobbNvr6KzmkaTnZmN5696YPYY",
  "key4": "y1RUAAoo2zLkD4Sycdp3X3X6223U1JT7E44qtbsARt9NXjXGymt9eoTKmi6uqBipFynisQh1UYVNZfGMEJnrbzp",
  "key5": "4eHee99BUwhM8VwVPP1yhrv2sXuk2zfzBTYmA5bKV8WqhHbcNxNm6tA1khM58NbLV4Tm2UPtyFoxHECn8uso3JUw",
  "key6": "htm8PULa5EfX2YME8HXyQ9pdsZcuABivmG75m6jgdyor7q22inQcvfFDfKfu9XSnYjcfVB1geieSQurJQxsCQhe",
  "key7": "56SiCoDCHQ1fVC2qBoyRb7skqe7BHdBxDYTuG3eP46hRZff4BWVd775ssRzhRniBcfzZ1s4SKGwPBM3KAC3YpKPq",
  "key8": "2qsjejKGgMyGo2V49LhgfEWrNbhTNKMZDSdCHjoWh4fpVWzNWmpFA59JofZu4YG4ZUPtRC9ZPKC6uV6hBcHGmKuB",
  "key9": "3tDuzNPnnUBaR9Z4FqpYTYqAXoogXpdNFMYsbh9cE8ZqUn6t9yzXeeMjng8QQ9ZDUR1hhw2jUa51AMxGcU9BakgZ",
  "key10": "4BTRLH8mC85pQTpFc16tt84NSan7GNBunFAwAr7XdtoQcbaFL4dPEdGZq7DR2WGA9GPkannRn6MYHF4ukSdkuuY3",
  "key11": "3gwxTcPfbSczC1qNAuekfoEX41bbtUvtZhSWRd5FtXomtcdeyR3SiewKJWKR8yvnfv7oKCxrdt6NRjjMQLxcKTzA",
  "key12": "Es4DWPcqHPpQZaioaPaM8NyV8ViiYo855dr8DjziZZACTjXW3ebnKdvcTUK6P1oaihWEe9Gd9EcSR3bazAf5Knb",
  "key13": "4B6qhXfgbCJp6h7oKyTkvPqDt72WcCbiquBCKXuFAC1P13iLcrCQxPFGLYuD84DpDqbqKAQaGQXikejGLdanUaWS",
  "key14": "273QAKrTAtiFBbz7kq3MggDwoHwh3xsWBf2R1kKHPorqWw77idWRsAxXwuPGPRcTL5fYueeZ69FtEGcGSF4N1PqE",
  "key15": "3GS35qnxmPe4StDmbD2uNqVr6XbU1EMXtw3MAbw8B4Vs3uB8QqxuR2VJeEYojjqDChrPuHB4ibHfeMDPgQqqptdq",
  "key16": "4maYHDuhozwW35C2VgeAdv6dqxqQgaVzP2om3i3ixDqw6xXGGtKu5BDWQKHs52EWXkmKmhzdufrk3xEBrvwz1RSo",
  "key17": "JkzdcYLtz4GAU2kYLDr4fahdhZYhdHcjuypLe1QQXKPf14VFrXNiEkCum4E5LgUsA3SrgcZiD6KM7AAQdkhyRxw",
  "key18": "bf7NnGQLD1WtX47jpeB5WbVLyXCY4iWQsnoLRqc1CjgWcRJsxXrH5r4XZ8pAHKM5WeFytWRsCqyvfgvsP2gst2B",
  "key19": "4998mQTefvuHWRhXz5mX7zB3uWCQxzXjLXwXEQNRmikkeGiqrwnwrG4uwcpKqMUtiNFtt5btAJhqEYVe1hhiGp8p",
  "key20": "2bEW3nvchuRZaHE3WoB4n2xCmS7WHKxQhALd2UMjmY1FmKZCcnwekkYH4BBje8sV8tsCSuJayKVPbRWrYxyEWtfp",
  "key21": "ipz9ujrVQRoLAgiUPXVSsjL7moyNHnpK2ESF4L7v8NBgJ3WNCSoVdXiUi6kVpjiVfoFeA1KBwcd5S1guDRLVCAQ",
  "key22": "5aXAFfXv3o34JSKHht1Uhdv4tUHBGubRxtQv8QsNAYinVRizZNHH28r6XzhDyXWD9Zu3djfSG4UWoSz35KY4fheA",
  "key23": "33qSvLBRfuLfTGrc9phLVPcb2P4aRmKHohPNAGHkGoRXExaqkjkNPbX1HjfRavrap2vJhJ3WUfN5PwgQHJJLqEFv",
  "key24": "3knTGjXRDjzmBCfujYuNWxJUYX3swdyB8M1wSggvisRifQ9PetAuFKzYh8ySwEEj8cngTmVYcBmMbaVcLwc3YkJf",
  "key25": "5atYczTmp4DgYHXB2e5dCFzduMhMvgvy1p4Sjm8GFK2zJjmEyrz1CFJcGXZBZTeo11idVyZb71A4AkauDp7cc2i3",
  "key26": "34GicwenFh1mpojfuBynXHpXGwLpQptQfuK2ZWDQmgphbkpRcvwssBVr5DQr7jt3L8p3xoVAQMvrctVfgCEYkQWR",
  "key27": "4YJvvJiULQ3pR2TfC59UzTKACfjhoiutpvjzR47zeWgXHkuZQDcLMbmhwL3YrjPQ55fseFqRKTAuE7gZbovCg6Xg",
  "key28": "5neuHVk72NEjR681oNBzjzrEi1EvVFHKeooSXTXh17jAPGhRXngVxsGiu8uyv22reGRQEP9gDNmqSraSsH4ko31D",
  "key29": "2aoQKdSci1GyLdDm8MrVDMJyvBDp1TbemtgrK98JDptVejTjEB7VWoGd5cegkZqAMyTCXDfXPL6G1vnxwAfZATyY"
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
