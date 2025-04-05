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
    "5Pz8xMf1YPsWr9udru1947e6NwD5UjtzgkuE5W8H8ihGG8LuSGmij8oaYMYfogBGCbrmQQLpGFVoZCsPgza29Jvu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vN1efaX24uGHn16JUPYNeAs7xaZUquyA6rgua278WnynzwUZJgbHzGm4ze7JnCzis2RZGHoikMzHSGBs1UyvoGt",
  "key1": "rRCCwS5JiNPfi56UGJkDg9vQTF9DLQ71W49RzoPXmBUx6XJ8ET1B8SRrkfbEEQbw8xvkUL4shZSo64hKwNEuy1t",
  "key2": "21DzSMVmRgeZbKhawPDPmrzTEK1Kv4FwMAFAguwmE2hhrxAeDsyhRJbmSVEm3JrWYF8XN2cP9zcPmviq7JGYXpFi",
  "key3": "aRJVWmEQnxakEZbuEMUBimjhWoF2rKbJ1NuACh4ZZ4SqM2HMPEkX4fA3XzdQrsHGEsFRYeYa5upSxuKDjXe9RiM",
  "key4": "vDVkPPDRfstXhHUDkB2boA1WqcXuk6Pbth3EuetRNdV7N1HhUey7XVkYKNc9w6waozvcLpdZk2BmABcchUUNuQp",
  "key5": "3WaEsfe2DreMRzaeiCUTMnZAPkK34sCMgeoxwPVmNbws52uryWCeAiZshBLTbSVQ9xVq5YdNXgbDSW6VgrUqh2YY",
  "key6": "9oxqwojfHjEGhfQsdmuczFQFsN6xW1aqj8scAu6xqRQKS6WYGKng9QJbyQ254EM5r1or5VvaFJ3vG8z3fGVMdHV",
  "key7": "4wQnxwAUgzgN6NJ88DmSVKktfWmkYwLPHqJnAn3rUF8Vu1zZSx6dtYYZDrHhELHx3Emx4PTqTcttj3rhFCo5Jey6",
  "key8": "3Ax7Lg5Kfk3CrF5sDX8qdhVhzicFxDYCN3i48SWscDvF5NjZdx7kKTxiGGssXtr1SEw4CgVxzuRSZMMMXg8vG5QT",
  "key9": "pnyb6JUaS9BH3MW2GH7jJU3LWrHEaSZLF6Vw7fpXyiZ5GzmV1fxpSz9Ufixejf1FxX9P5p7YVJj33Mftbqmv8zS",
  "key10": "32sH4mDgi5HwdLoM7sFf1LCxcSkdEyY5oJ2g8esMGJU296hoD933XjvpaDxFC9i76PgUHYw5APzJJkA2HVoQ2U2E",
  "key11": "rc2jSXgHkVJGYiAdNMy7CuLyCYz59qvVRc3q5uGvwNvfSp1Y28ZUyD6khzBrh9FYy82ZL3WFYSWK48yQpVbL9ap",
  "key12": "24i9gyocZTAULVkgJxymCzVghY6FPnix9vYWMU6uJrEf7GMZc3UDeEenAti1opGiPmiTR7fwoV9WEMw7Uhky13kW",
  "key13": "29ySHjdYHe4T9RwZ4KjQXDkLjB15fz3FPZaFj1RVX1Wa2euvo8z89USK5gq38bJHFKC5SnvaEnowvXweUFNTLCrG",
  "key14": "3wqNkbh6ZxaYf3o4TQCuwGsGVqS2674T8CDJwxowZv3CDUe8pge8zcrULyQgfsmcVSyhX3oYa47wRihoPTGHauFt",
  "key15": "25t1xY6bfeCrWHEP6BCQLV8WB1u8XsqUsddeqpePjsBTf5V6EMA1rDaJnrjjfUm95GXajDW5ahQHTvGJYdeH6RTf",
  "key16": "4VFrFh8kUsXSnAQgmJmsmmXqRiKix8YhahzvLAUq2dm2WkyM7EGwiQPX6ehDWSYLJ65DfEpEaxEhbWfapFvW2aWD",
  "key17": "Q35aBiApVAQsdjAefEEpQaWtjVLahPSg9icz3ZD8RKZZYgDAYL5bVLGRkQDZRYd2RrQ7qf7tR2QBTA7PgVuJEBH",
  "key18": "2VR6vHfup9v9Fqmpg3ffU7YUfgUsSQYvCQJ8w2iyY41RNK6gbYaH5J9igNLEzcEEBGLSaRj1DBfzp6HLXSZzfh6J",
  "key19": "5Ady8FB59rxkUgTNwQGCi3ee1xHJzWV4qwjTfJPhJWBxSoCGQV8BkVyTjYMctjtima6mySEwubmpBsftDyporjAu",
  "key20": "HHso5z5YqT3z67wbtKjKosxEpRQqBinsAitoauZB7jmmgLctvoigD8zpiosZphiP4ECfCsZzWHgkCjkDzEXVK3D",
  "key21": "552TqU6tVfg38xFxmB4hPW3qdJ7Qq8uxTvsZKWF1DVJAVYXEsPD67ovjUYUVL14rB2fa4EgvM2yDNe4A37KHTZeB",
  "key22": "4YtQc8bZvqtSAMLbJ19Kwqf84HD2PFVCDdJJV7kLB2JrD7nATQJotZWRTELyaTSGPwbDc5FeLyNps62SHvuTQuay",
  "key23": "4gTTtpj3vZxVP8MStFuKXmeejYaKtDNYv7bE1AMB8ARaZPnkgNuK82pDdvXA3os5VGxvoYWaLSWMuHPUk4YfyKjs",
  "key24": "3Z9m2jHSz6TDDSVZG1VwRQUwpUwKppzQMLcuFZKT6uh9owNdFYh3LJRX2amGNk8EahwkoQc3hDSRiyx8VqXmiGo7",
  "key25": "64aVN4u66miUtpgLDRnw2BB5aSgYH5V8Ek8pH7xmS13H5NDNwixSMNFiXfQ5oVzcvHVHowZinnaB2yeJs6d8aMkU",
  "key26": "hDUjBuqcW8o3v9U6eQV8GVN2mgpMEdmuAcookAR8iMzPzeduu5wdauHbpYYQAszY42Dy11ApU2Megr4FKXyqEoh",
  "key27": "2fVJLZEJi9zdRK4rAoUCTJzpUw71u74kHPp99ERK3QqtgegyqxkFhWGLUVjR51dYs4GUcP8DbFXiPKVRKYTvmxLb",
  "key28": "4WeRx4RRNEKMzpPoyVD5K4dDxZekiSagtRiYfNaupQqhwzUZtQeXZVP4oMkup5yRL4zi3uuYsCoTXLwcP9Z9wZCF",
  "key29": "5FEgKTFF6LHSu1AMBdupDREmx9AZPufbbpWVdkgksp6yXU7NeVcnMnYcyTNbibMqx8d4K7CyxfGd85ffbSx8sF35",
  "key30": "UYfsiCPYA1nF9g7V6ozTXk6XJ6EYyNSyaNRWyVGDmf9euANycGiCzNvfqfAYitmBHuftp9AKxn29w2vfcJfoLQ1",
  "key31": "4TLvApC3jnSwvotL4sHt1iZ6phzYF4grbFy4Bb2TF32Ue8gEykyFCq6fKHP5Rgn9JLEr1nATHuShq9BCjhmL6YLm",
  "key32": "5yT4nS5yJAB1i5fZsbAZEyw49qTivGXgVUt7nUvfwTSjwyFQr5TETdVU8UwRCWvWoMEivJxkskYJ75qD9V1mEweU",
  "key33": "2GuKCu8GNmeuFsTDmCbJf8J6ducEjAgbAhwSk3eq2T7nxcqKNMcrEzGL8V9YeNb1RBPt4nC4y1JCY9jzdRcM3tuS",
  "key34": "3D7xJ9chTWEyiVSQTYGt7k9w5kc72Tj8ZyyjSNjerobmHzRHJZCMsPW9ArcE1PJD1rZA5riSP6D9ZzJEWBLEiJxh"
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
