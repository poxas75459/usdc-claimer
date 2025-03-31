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
    "4QNFaPeMJdqdmQFnQrmJs3Bf46JcPzphqKDzQV9Ny2eMpeFHSHYG5PnWW8X1xgftHomfixnUDmvmWZDo4Z4Wtugj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tb4WMky5YCPYnLGo8Eo8mUQ96LNCCuCAkvWKZuwFcT6T6A2ib4UTUh2fNioVMEi2Hv6VtNpYcLJb7JFkqRSV762",
  "key1": "3Fy67RAuWfabevDMAS8F6wfHvqtZQH9vnGeUtnT6GMAekAWjmPHn7kHaB62NCqZt9hHnWnPg744w29D2mvrsRhxD",
  "key2": "38M8aqq2kS6qnT3gCcSnLVJ6G7SvCp5pXPWqMJWGeGSsq1RTrd6SVwzGB14f9vqVxaT8wJxVJyyaLcqer1aKevUz",
  "key3": "5snL1phHH198FF7TDhSqHXYx9pUJnwoHpbPhuYAizkd5qNLgAmaPHv9uTo9Z5Uqoo3X8iEH3gSbQNSwEyAagoJb1",
  "key4": "q1QXNRUpdHK3kJK4Dsy3eLVBCheRy6XRu6XJykTceWjJMCHFZwy8kbkRE7yB6v4tPSLs2RKhs1oHLQaUvDQS4vf",
  "key5": "21Nq5uYHVyYnMhFvh1RsjvCYfHjCrMPTAtW7RzJ7z7hmaz78uSZYCkSnCyTPVwxu8tE13V4akdvhpdXwCaHa2Z8R",
  "key6": "BLmJh2PyYUCSAaMDdPjSYftEsmwt3R3858oeCKZ4wY9RU3mrBJZwC2aEjWFHC3HEySyjcSS3DiRxNio3QyV41V2",
  "key7": "55odTNMe4U75KwULcGL7sBLTsT66uQYcexR7bEy68vGGyyFgExKWna1Wnp6adZqhz7b3Q6TbZPdxNf138nhd2qe6",
  "key8": "3WrnMSFgfTcVPiKTMuKt7zVSty45S38QihP5DZW8bMKu3GGoATbemwyhqAKjcMJWJfM6tEryy39GWYffvhdx83xi",
  "key9": "2rZZ4qGG1Pyoy6WUeXumt29LhrGyRU2m5HTdSscS9kUFbZAa4V4SfYDAG7ktyikD5DwkhEqZ83WMnY3b6sWAg2MH",
  "key10": "26jPM8PM2HkrKcbZ6866GHHjQQgXBmHv6XjHo1nnDcNGHYTvZNpskZR2inxD96kD1TBovrhmYZRnVUCrYMd9WBeF",
  "key11": "5T4Bb7dspx9ELNYHpvCqZk5wYMbJday2wP9UQoVDSPzYZpXwE16dYii5TzEDNKCsYrZM7GVhJsCnUUUwssVTwcC2",
  "key12": "5uDND3PVxnE3SF7VBKs35Ri7ML4Y7MtK7auA3cQVT3qerjZfYucGoG8EiLdzgMzPdaE7MqxXEkbws1zdKgE5Xtit",
  "key13": "3PobPQN3GQgYjND1Ze6kC3y7wL4HovErEZUKKbaHhoQG3dvhMeRGYgMBHqJUciwUpTN61nBtGG5FiPgF8V2hmdNh",
  "key14": "35swizYQArjVHD3Q5Yw3m97Q94j3AYwWdN9RsepCrFtNmHd1Htbi9zqrMKU433Ejn6E2LSoJpLH2p5dprKpDz2Wu",
  "key15": "5Ufu45VpZXMBDkKyyKhS91S1aPN4LykRBLm7JF2hd74SR8pZ16WNL7g4EXjkZZzvHWjBA5hGk5XFzzXaEVZ7WmM4",
  "key16": "56ngDoNFC9djuehyBRPKFCRofJfDntdV4y67okZ7b6khDAVYubqEAi2vKdUzakdeSwuXeoDhXB1K3n4uxib8X9jM",
  "key17": "2ES9v8vzbKyFstfFKNXm63d7mgdCsR7ZkqkBXRKL7ispwAF87SRvwNFgVvCF5siyecoiUYx1q4cBPudiF8kkvcTN",
  "key18": "4vcTz3kAcvePpU51M13KYtU5f5fVH4pQCuFvcpvkuEbP6tVXzg3WyBFB5zer8qEyLDYq9h78wgzVChugbRcDSE2r",
  "key19": "jcvPxkbqaYRawb716E97VEyVgrPSVyE2NsbtEgMgjTWDdeq5gxLsRstszK9NPKFbGBkBRz5cz67xSM3XW8ptwcD",
  "key20": "3NXSvgWt8hy1K7TJ9EnBrdNs6spEuYr3GBYxvVvHhaVweECsxYA5MHLaSRQqeHyVYr498VvU7gkxwRCt69S3Jeh",
  "key21": "2F1j1jQ9tcquJe86hQEVhmmQwHASWUpTckd53SKePST8kPGn5Pc2VeBKpVjpsQFUbrGrB5J8zGf1XXDwF18CnD4h",
  "key22": "LLJdo48bt9k5QPtatprgx6FBjnDyxQLnogahKMnjRH1t7r1Htnvfu2kDcH8SfnKACGSKkD8YMue5gJjXkBzteoG",
  "key23": "43Ms82daufnwws5XW8WawhKHhHLhQtrTAxJi3YUmLoSZauBiw3thR4WQdSAEpvRRxuF6PLgAgZ1fhn6ikUZuK6yU",
  "key24": "4is9y44iGzhgmoJaaGUD1NtHRHzQ6R3tb5UGmQDEV6WoyENpVJStVuChuoZgh2XPHcEfb9ECNcNaWtV7VLuZgCgr",
  "key25": "3quNYRNdArrhjqRiDuCJiMJ73XKdAoosZ2wSey4X8G1tsKoFapC4LzPESWnsZsJGWx9sReLDTf7BPGQKK1NjZYNy"
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
