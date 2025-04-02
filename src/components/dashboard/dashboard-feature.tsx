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
    "5tySKTe1L63gQEGtgBFWxMMuhZxuCAmK5gpYsWwpxw6sPgap7oEe8NDp8DoxNb3C4JVDzcUNDVCr8io1UWrUot16"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DkzjC2bLXhbfUpWbshZCCmUbkpMPvMrKXW7SHUR5MArEgJeDANobxpr1CX2RbpsrvZSQtjGzsEnpV6bPYfp1tyt",
  "key1": "2Mdr6bTeFx2uSYD2eUBDQQPnGBPSyvWrm9WrgtD6ea7mBNRKhoR58CWtKGGCm8HkBtG1hQFEdiTTUYwNBQ9YepzS",
  "key2": "5Uy7U5GqMQHPVQ7B91epEePUDSohKBihWZXYGkPcaEFfxGC7Nm3YcW6FC5KZwNywoeTMUAkeDKJaYEc6g52vvEGe",
  "key3": "Pm2ALbFQGtPgcn5ccHfzG6jKLPkE7MAi7SsoiwyqhjwP8kMdmQ2W8Yo3Xu3BD3zUmUMy1AsszxU8j58oPzYgjYF",
  "key4": "65e6iTRQpeLY19F5Go8p4pMRc12YFQvwGHbpQ1HFzEeL8UegJZMa74X6WrcEAEnQjTi6zR1kiP9nSSK9r2vZ44aL",
  "key5": "Q17F57xQJ1Q4Y1C75Df6fDKLQe2eF4meFMoZaPuQSGbwH2s1xSMDsK3ZzkFaPAv3rp4BVgSWAm3ZHtGyyXJgoSC",
  "key6": "2oa38YoqmaVJ4MCMxi38tz6gRXSXrAE4mmwMXurxz85DywHCVb4u8CaJUmeRsgmVyY74YbDZNqRpbJ53S4pLGrHv",
  "key7": "4C8JDozZwP44S7nZJMh4HvTQs8KMxfUapdFz546MKQRcuQNu6TKHZZ1SmT1RYJgXNvg3Dy7JKU4c7f1cwKVieGiC",
  "key8": "4sQF48ac8bc3jLTDqL8Prs2Ko2iTraLqrYnDmrR9uYRps48UXgqpkLbuPb3qgMAKw1qJ8mQx5SUY45X8Lyq7B7VL",
  "key9": "22ybDsB1rRETQUKBrqbCpBtd1YU1zvRzMrecXxgo2LXMh7kukWzuPGZhbYrmb8DPt8sFsHLSRvm3Yj9mcjfd22it",
  "key10": "3rf1Dc1oXLCoTgDp7YUpubghZzjteQNSb8zCuwjeW9UJU8Sudmbuz4rD4MEq52P3eZio9voypKDv59w66tReefrf",
  "key11": "59ZDQQ1gn7knBvRu6mv16evx5Svfg568URYdRmW1FyQJmqc99JQMsDKQT6UiGsCE64U4gVMqzozqBTUgMrhTQsfv",
  "key12": "iWoMJ4FiLUvXYh8rr2KVf4RAZLNKxAxA2QLXVyPZfLjQ4FxahBDm6PMoee27zHFKSg6KGqddvwcgkyVthNv73hp",
  "key13": "39P7RAtAYnqDoyKmFrpq6CfK1jW3YJedEzjzneqVzv2VDVU3s2ntsUSsjvwJrEcodwrr25nTn7fQ1zjcdQcwoQdi",
  "key14": "4pxiS9mTUVcEfBNwBSL6Lg65ZwpwMH4H7JgbYrCr8TDoCfwBKEHFkDCDkqCp1YVQyJWezFvEnZMfCNtK1bt4DCuf",
  "key15": "56vPu25CxzjVw9BgBxmoWWtX3yjAtZiDxEK71wHJP8UyvA658kBGwQH1f8qRYY5gELt25ywsyJCoZxYbHEmRZzNQ",
  "key16": "3tGWaTS5YVqeC3iidHAMNGidx1dGfkSvUjV8SaVabAXwM6UnDqybfyKnjYbHLu6tZa7fa6Vpz26VUvXbrJ8HQqns",
  "key17": "tA2uLxwsJcPUAKpYTdyewNmtMrMBfyCv47iBrefWNjuQTiAuSpAd7rVL6KUzdB8hg8QHNfBzZVBcYjzPDkAW66R",
  "key18": "5gkqVGPYTJKURfScrUzsm3WTwtCsVrva49yephnAG6mp8f6KLsyyHrNgfw97hU71fuBqgBeT7xvjXgzJxWCtTTFY",
  "key19": "25yimsZMQ4bT1t1KL8tPqbAVRC5b5j5UuXwc31FWxvAh8JK3NjRYss7uRZypwNfvTwqW99FqM8LiNCiwH3moCMDq",
  "key20": "2kcB6HV6E7CNL2c5tEoHLeVNLmMgzhaN69rH3zzetYzXkdgWaParNxj8a2ar3mW8JX2k7JtLSEx3RFMnFtnGjfU7",
  "key21": "2mcbrN4uCu6vasbKgr3hR6cqCvp5JCxt1a5pqmNtKeMddd9N8Pg5JvJ5akk3w9HsKZS3YVj4yaJB26FDqxkwY4DN",
  "key22": "278fs93HhgzbmE37bCtJdtJ4sd2MUuZVjoPJiwCRdGn9hWhegZjwg3sRy6cjyqjY9BHFSaBmADq9J9SFXGSL6YGF",
  "key23": "3NSbdCaZKUDSEUPhdHERHu12KQMG1JKcDLp9UohqvB8ipzjYd9AcLr3iiTef68wvN4jKhSfJsH9U9qpMFHb6NT8z",
  "key24": "3ZVHsHCzWFCvJFZ7Vz9EeJRDSZiT61LrgRuDsXZZy3LwQBZSSPmnCXCPBdrfkrHi7wqVhSK9yjDFAfPrkjcStnKw",
  "key25": "pjb6ELJ5UjPrszAiHdZoAUBHfVKo8eLJ78mu4X9vGtW6DvDuveqU4VMbxKae9EGKxEftJEcG9kSRihH4cBDbapQ"
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
