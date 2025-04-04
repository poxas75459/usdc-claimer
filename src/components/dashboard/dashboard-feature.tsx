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
    "5GZwdW9aqV1GagXH3fpiPVwLPpocHP1gSVJxPjzjZTBdkQg6pUuyxq1hzkM8BAHipzuAGs6zMPSR8zvcTjYRUXma"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59i2KxJb1EGbMX6HEMo5u4Kj5KWvtGZnjb8xwRQF4YR2xVEGpSQ9XmqrbLhPVogQruUR94Z6eFKE6C78QFbzLaEH",
  "key1": "338iveKy3eWVfmFNPXmsWmv4vJRDf36kSHCzYtpQRGS1QM787umstKaWxaFt9AVN4ryZt9WngWgVGpTj8HoSSQbq",
  "key2": "3ixxwgzJhXFshmkmeMYTJkZHbf32sZoDTn46m34GUPeNXy8x1Ss5AcMU2JdDXTqmt5ERi6Q2z1ANWEiRwr5xEzm6",
  "key3": "i5BVMdAvdpwbySvC611LfJTVFMSEf5MGqmmP32zkbRGcxqgtMGkEynmMRbfQMGsAB5AsuGs6EwaPMxPCZvFVmBN",
  "key4": "3h56zjMVJXKZ71hhQMzCKSJzCA6KqgoxAcxMRYnvrFRE5ZxahA52AxWk6g8crJg6gTEJqdhKGyAEStpw95iwKiGc",
  "key5": "iCjbKN4HUwKjaatwmZmfgar8iLcWcGUWaWaSxopeuSJGtcMRqutwykbcAWWCXppxp7LB7wEPcJn7dijzuJBRPzh",
  "key6": "2gABi5cDMRPW3TJijkvddLuZdFLegtAeC9Goaw6ji8Avw7gC6iVK7geqts442sPyGaSVcxi3jT1umsgaTFEaF3Uk",
  "key7": "2txKUqgj6eZF2ickhVG1uipTrkKnQj7pevZTDtxiPZGA3dN5GivT9ZwXhHDie3NRGmNRbzFd7XTAEQQa6cCrUsvk",
  "key8": "32VfuWsmFiaoA1d944yV4wK6rdW26VLJ67rQ8zV5CAkqHvjGpDFL2xQnRcPAMxqGvNQ9FVM8V8pi3pm3ia3StZUe",
  "key9": "4qHkS1xNgaLbkZbtSMXdHtTMzpufGqgLSD7jvqTowWt3hVmHmvHJtsFC9SJz6q8y46ssNDGqdXaRmmSnuqjg7918",
  "key10": "59r51AxFYEqXsdQZPeAayJ37GTxHyng81A4EaKGGWAtiDzRbo78QiFgoZyounGW1ub5MHNp51kgiGc1GJbG5gS13",
  "key11": "3ujJZVkMpLmEG1x2CwRdym1jnfNUK8fqdnjBGYz2QBJYrpmW3HkTqFunZibDPtJBMDnKD4TQjkcRx1wFhG2nq59u",
  "key12": "3z1rhvo3DjHuwMeFFFAndZ2vYRc3u6ZPv9qjCiYVP5ZPhSqKpTjWUociTGzZK9QP3Jo2Kv4Pmpk8WRvj9v1Awwrf",
  "key13": "4ooqGgUYv8272tieRtjebjN8S2GAtNMJLXJqivFdMDFhUwCNauJMenVVdbMZgPonnW75ebWSJitN9B7skFesZF4g",
  "key14": "2YySZ6LDLJdTiNB5fmm8Y6rz3Ck2ad3JcaZhXburfB9uXa82MAwcFY7Fv5kz43J3RL5MBJeaZved9dxopDb6hQuH",
  "key15": "2ncRrbsctR1BzZevcWJRdsQBauvzTUBxmsuaVNHt26xmBt1SpMQZL8vfJRQsuRxne6WuCdnnvdKQPesbDqvhf8ps",
  "key16": "4TVeCM6mMmUsrb9hK86fiaPsoiy6Ph7sGeuSrfc4PxBMYGTAkcP4Ddh8HW5FANxTkKc3SrthnE9orMGqYH5xP9nq",
  "key17": "5kE3g7G9fHZDRdWrQotXubdZw6V7tC6LKii8RHKAhdFesoWtQNDaGH4Ca1UhvtJH4oNiKoymdQTk43GCZbiA6e4a",
  "key18": "3cf8ouLrLE3vqpq6YvsUVDM2JyiRLosrsm2mJ3jeC6aJe6ZWrAecvmuMJqVhhaPGPXdPbYwwPQ6z3cSTMyfL9Gso",
  "key19": "5MUCzUDoEqVLKETCexgejQoWuHd5erTuf5BoTUK6fBAzi8pgzVbQ1pjpkkxTDYFAryvWtsd9WcVJtMmq4G4Qvhfc",
  "key20": "NgmeTtVJ2HCUsfVE5TYFZGMS3xqZH9SaoDHmXqSQvafM7zWeQEgNmLR4RrXu7gruaW6fwPcq7yhVHTBmSPfvwX7",
  "key21": "5oaXBNS44ZXysFgbXEqthXSASAzc786vnP8VATqx5RjtHfg1kjYuTpMLFQBWgFxAXyvzk5nmetwmUVn7aMWqVZ7U",
  "key22": "42a8QDk2verxBfMKr5pA5qDR6n3SiUUdkKuxemKt3LMMzAg5xovwbX86QEE4zC8dUWmacS6rmJ1Uw7g2LGMg1CeG",
  "key23": "3eaozdw7QhTbaezLVNjdJp1asP7aR3hPNmw5tic7TfeethGjk5AR2rgpsG3GtHY6HsU4yWTgofV81D9zf7tBChJD",
  "key24": "3PB8CLjmRub3jXVAndkJoHpXkFLsn2CKETRHevNA1nmY9CtVf7SJeuU3PHKEmaRJFi3Xww8u2UvKr2Xt4Q6HZHFp",
  "key25": "3ihk134AkmjsdsjRde8Ndo3oZqrDaeQPMoFtYr1wEi1hXLVViopD35VsQBZ8SmP1N1gkCWeRco97jrKuDjMmnsiQ",
  "key26": "5o5gqG7zEGhukkkAjm7PBLtqhwbZyHYSEmjBZnNibFhSyMaW6bAwL2FLDVmLK2EiDEwbBr4AvThqGrup32UN7pKp"
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
