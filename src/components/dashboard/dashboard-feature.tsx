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
    "XbxJADEeZsunUwh4VESCRoaWdin25xfwVETCvLuABS1fMcDkYctWBgNRP3jjbZ8jfTYHQvwMbczpwuZ3Hw4Dkca"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iXyKEu3u7kizau74yhorKWx7eMLYGQgEikPsz23XmKz8yTES4DKUEC7yMMSJcAfKsF4k9RjpRHazh1sZf7B5m28",
  "key1": "2kqmEuL1bwhP3APm5k81M3mtWZDW5dc5Vg2Dpf5R3UMVAT51izd7w7kGZxSHJNZqKYwJS6TDCUAdVzGNkdPr5jq5",
  "key2": "kZy13AjJd6Uc3GA3e4i3HZA29T3fCD9cdmAeSUovEnSMcBGRCcxB2ApzA7sW2UqidqZY1ZCnHB2FP8Wpe9N5Tdi",
  "key3": "3h73N4NU1pHb9bvds5Z4r7FSB4mZ4aqHZA1YRwYzHJWmvYsrqDgRhN4KLgKsSpMzQ65f46XvbVcXbuhPvL59rDZ3",
  "key4": "3qocwt7Bj94aYUGtdBYspzapXnmQiC6RB9ngfD59zioS5vGUoFUaoc7AZpowh4REk9PAcHGK4DhowZDsf3i5dv3L",
  "key5": "4FRZTwNYMvF82udEF9uSFSoXYNZkKZQcdc75hxRvn5bC5G1BZYzxKL6UtRXBo1iBEKxQxVMbT4X3WusgL7FbqBLL",
  "key6": "2hVNvjmU3L1nWH2WbVSPLoAf2t5SiuYbzut2SUo2ws6tiwtE1T4EbUywzb238wds7F55HakKMKvhhMHaHc7kEMjx",
  "key7": "58X6FV1s1UrjJELh2LTuRf7x5uFZiyzjb3DaxuyfjYGheiMmQRiwr6x3mWknwAsiGY9ZFbo6B2Jd4eoTuAt2YSpL",
  "key8": "5MfZ8KeQMsoSCAMbjSc3hJfj2Ep35D6BXmsSBggQzcKbviiNT8s2JbgPjRRyFQEqVUKgqysSQukQbnCQUu3spv2q",
  "key9": "2c934nfKpnWvbdPtEMPnRZNKtBEfE1o8xG8XMcetefFgCB76FXrHpzCVUUc1t1LucUsQ5bV7s16LkxKJ633Zrjzk",
  "key10": "fUTJAvqqGEfpC5ozSk3CsAbTFJjFEYbuCQQRRMj2VeA4XKzFKFV9LgS6B7pmV9Ubu1fNn4JZGRfBFWmefV8rA4T",
  "key11": "2S6o1S6DfWoKt7GTGQxbKeiVFcpdMSPXxabDCBU7aFNvpruxpygsahJpJkjynNqPzQZJADdnA5atz5JbEP1mpSJh",
  "key12": "5pyuFv7woZeAXD6MRwbnF17rarbff2oonr1fAes97c5AQZSXpHG2aQMWvFHffAr9aiuCcgfzmrMpd5fbLisDfUsA",
  "key13": "5rjz3hTSPmRHjj8isfSKHhFJ6Q8f2s5q8miiwgZuStdm2Y61i5GuaSr2TQhwBq3DDtR6hQHqJAa5juSRDyaZChkP",
  "key14": "5VzTMTNqZHKE61HUqFksvmnmYR1taTcE9whtMcvW8d8HzasWQQLUcsKqktpLxPLzVQEf9aZD9roqby93g2beoSkE",
  "key15": "66GdkdtAvysoZvkFUYQJDzF1JBcok2zEZYneoQoSNMHwcTCC6tt7BuAZ2GYstPPcFN3Tsh7ecFqe2eFShBge7nZV",
  "key16": "2WpAJ8BFyuZjTpPRD4cdVgHaZUUz8rRS5gqeeoskBqYzvGPu6kPVgNyHZUS5rZNrcgDsLWWE1AiQ8mBmHnKHTFMX",
  "key17": "65yNaY4Pxkgf9YuuvgciEn9E6KQ6C1KhJXZsqpRDCYJRRFc7gmMkK6vWo3G5t2Epq2ymQQzCYcbDZEEkQUxb8tvj",
  "key18": "2vpao23Tf49AWwcFBWPFt97krCF4BvzyoiPp1trciHGkD6EnUtnHAp5ss5vPEWqTXSygTjksr8LRMVid52jinGiQ",
  "key19": "2Ypfa46PgvaCvX4oNobTVBqgAfVmrmm6gmrNWLVew8b6r7bgeB1nRBjdiWGbJv9PK8PG191xJZ6SFpdTWnowKYXA",
  "key20": "3EmbxsVuW4fiZ7jyg6TKizRFPcUxE6bvCM2owsutKCeZuYCsNuKHZx1Luhc7xJoF9QfB9wRpvGfWRjx1TtrVjVEB",
  "key21": "jG7Dgbb33ew2SFYuAw4B3nvJArdCQ32Aw1rMDYqwxK8hghGHsNyj9us1oFyAEfzFzXj7xkBnwe3rjP7ds8Xira8",
  "key22": "29wWnqGqCdUAk95SRt15cimvCj39bEW6cG7dqQNGLfEyAozpy6ouJwBRV3cGff4HmgaLmfNw5t4QEgnE5YpdS4Gi",
  "key23": "27iZ8Up1DcHRMLjjKYMM2WqBxHQHabBTYXvpi4wKCbYhdfX1Uxygzc6GEvFj3c9R6D1xJbMDiGeC3XfWSuxFKE9J",
  "key24": "4jP8Xj8riYMUW59JyonEpuy8kDQiiCn7Rh5kfmjtgzFG21uc9Lp15EMoBGfGKmY6owN2HxpcPt9biLeR1Qk3c5wu",
  "key25": "4dJycJVxo6ztsGnF1ALV6ALEh2SyzKaq76zS4QXqskQa37MRNXPmc6f852dmDPQ5mWqQC6cZLz94pqAjYyw3VywB",
  "key26": "5L2iKiBDUm3tUSkzX72ERxAF1RrnhzXWaKc8ojhxrcudvrQccdVCFVkxN2HTrc8g851LxuUbVjxUom7rf7EqoxL5",
  "key27": "rpnsPg7PzsP3AXVpAMY8Fm6KuiWLBWUJAE7styHBA6owCLoyAusb9d6Njj34qhNT2ouV6uFeCsMUTzktnn2ZWyM",
  "key28": "3PrHJQxg8Ai5UAFPu5tSgNdW47KQW4z1cUfJiUwoNqbpEE476QcSNqAxvsucGuWmLJs9XTVDkEqznmy6GoDmupNg",
  "key29": "CEuQvC25WXTZ2WfqE3Q6tgAaNYSgb8Ln5JozP1xSeZEq1r1naAKUGNJ2TF6ZNuBx6vyipHRKV3kjipnxJc2HiVz",
  "key30": "5f3SUWwiDhNNeyiPLHtiAskuF8p7uXvQdeXDapTaLqB1sUYFiS6AkdQwmogJS3VX2hpN3tyBHDAnzXBjk713rSCP",
  "key31": "4UqRHYYDfnn8q9Faifh2AAALsL8kyJPpAnNWHtZXenTNpneLgSMQrKpfcWUzUsA4YosMEjSfmhZLufzAHz61w4b",
  "key32": "6257DXFDm5BcRSgV1ZoJo44nDfV5HLY3dAzvRrLwWJFLvTJMw5SNLyNets7cBwa7TMzmcR5azcvY4yUtRC4XMg7e",
  "key33": "3m7qtmsgwewCqkP9vwXGY1vyZCG6eexvnCk6dhHefrtVbCbsDftqXbyr9GN8LHN9xQMhPR83YwDbqKBiLtrHLot6",
  "key34": "27K6xqMFmphrH1CvhTEUcUabApbx6swFCLj8fyvCgyrSNM8fFq5NpGwojnzwpck9V1ajHLh2FgTtFi1NKmLYfZN3",
  "key35": "47wB9iYkhBpjktJAg2DjvUrpv3Wv7Wi5DrRVKtkUawQQEQ1kPHdr5hLrV16YfgVpg1JdoDd4TNZbgb4ykNN62xXe"
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
