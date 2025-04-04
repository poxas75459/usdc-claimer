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
    "5TumKFPQuXRXLiFgGCYJAByKrvjR1G6JKZ2inbiyTEYXAyMjo9xc4jwem54mfhGCD338nPqXks9PJj3j45GctSzU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PEUeczkdJ6uAUFzwGnE9x7kbUqDGy6ifTQMUDQVsushNBndb64eR6owUd5TaY8hYL6sXvic2Z7743RXUaFbbtdV",
  "key1": "2H3ByfijUZ1GQhLAfYp1xiVRrLsVo46fnRJ3ewttXAmRvk6EKAGsHcFCRZevqYq1G5sgWtbqcmcDhmgFExtVMxqi",
  "key2": "5367sLx1tDWnW6PBE1FYGTkm7qGnFCBxyT37pHNxTuDSXXBmXC98tUYZg1SJiPFNCDUQXfi67xrsH3qnWD1nXnzp",
  "key3": "64DimBrFBim7N5J6o74y5xJ8cjWPAQwchtKrfB9UqBpCLUdzQJDaA2YmsLawRFhHFXvXnSnRTuHKKzuW9vrkjzLd",
  "key4": "uxhnLTp7dfupQse2B1mpYFTAgeceDYvB71m7WLfGpCpFWt6utDfpJYb6tNDnPxDPpPH1y8NsS48gaL1eD5DVVhS",
  "key5": "4ZRVgr2cyyZ7KvAKBrF9M8fuUVSHT5cF2RD9MabrfV4oLmxTpowjHFoLHTpuyQTviBesNa6ARrNhKDCKbiFWBdzn",
  "key6": "2MES5rMAVWX2euUENrYZNGufRUBUjanE1wn28kLCnJeaY3bfN5hBdacMwwjGkv4Vrs3NLtXqmBQ3Puj1FuCJvKy1",
  "key7": "2sEph8T4q59uwFJDyewaAfCds7J5epzscQnSghSiWDMbWxBC1vN7Y79z2TMpjcgRFVwPz82fLG3bqTivqL9iz8Cb",
  "key8": "34wwAUW41FV7vjHv3ACH93LHSPEutwtFwYrrs75VEtstNNgRk322iyLMaYs3ZF9TnFqVwjvcVnqMbcAZqHWVVJ1Z",
  "key9": "2fv7JpUjFYNNWpZcEYvPaGHV94CXzsKvqRNcREku6qYEtpL1KXtGFL2krY6kQSyLMqPkZLFHRRgiBJxD8k43LYMF",
  "key10": "3bVuYyKve89v52RCp2WxXySHpD4kFUYutwnjZN7cLY5ExkJYctp8F3Vmqe3kxEgxTGd5L3su95vfevzeydJ3WHRQ",
  "key11": "2VK9mTpx7DuFkqmSeF7gEPzUV5eceQTMnjeCZPq3GwWFXVHNJH11QLtq6cvKUZG98aThRLoVhkpdL8F8krWBsU6W",
  "key12": "4Brv6FB1g5z1UMuN6AQr8YpXvQQhncyEwxjURT61Ffn7dGhPjXzes8GRDmkHZe7vVUEuLVhweCMD39ZM5PSN5VHN",
  "key13": "5zYL9fGLMaUd4qT74F53C8vziRPjd6J9BATKarxX9RNrbCxzL1zMmPPMePYWA5GQVfgtkLhKGdGiKJj7ZdoT5VQd",
  "key14": "4cYibpEHQFbA6dshuJdE5BuFWndQsT1bsbfqF7VuV8e3QfrFaU4gXt9Ug5VjJy8ETDyShF9dBGS5dgX2uX4e9Zc9",
  "key15": "3sNXQT5ZFvjCZLHjjDRYo5xUu7phuphE6sePy6swCc7TQYKyybBUgrTshug4VaFo9driAPDfuuywqa4MeTXPZgeh",
  "key16": "2CubLxFfWYeiVC3PEoXGi5gmTSMVcJwp5oTCWE4WXRi1s9z9Nw2Z2J9LQ2fqyiDbVRcUVuBPDsF7xEz5mfrV2EeA",
  "key17": "5SiuntPEY9GF94tLyGVMPPLDWVn4KSmEEroeSvDxBmFdsNWWVnE2qhKDRcJd6WuxjuAk3GfY6fNdHekaLaERmaYF",
  "key18": "5u5z1whyTPdLpNm6aQZfGw3fvRUQsbmeRmX8vK678hgr9tFt56o7moyJKuqt1kKd7VDNJjqWC3DTfc7Q4TkCrqPd",
  "key19": "EdVLwPngAKgS2ZUmR9MwjdrARDBZHhkzktAy9AvFwMkeXiBWKwDwpSQ87DrTnNChqgNpVaV24aaWoKYL1zJuSGw",
  "key20": "5v8XiETcnD5d5ayPk7Sze26powEGwz3zp8ACH6FvsqWtonme3nb19chmPcLkdN7FcV8zToDqkjDarVtD29166AJV",
  "key21": "j4RUuYGcFVcccm4AyBhTzUjNZahWmeVQN7Yx6tKdRP6JfhkSbzMV48xxeDUue5d46DtrLCW9BgRb6qc14UifQz8",
  "key22": "3F8hTbqfkfYvjHA8m4qhbPTkZYAGFz8EUCLKF9pTX7a7VDZZVhS1ZgGZWE3TsTXmDnzK5HPYYNaBagtrhGFeXdox",
  "key23": "RYHeJVfxid6tQQVKkjPksa5FjYAi45mqNigeJn7Ci42CTnA7M2NN22pN8fjW5AdBSuHKB7eWZjwSuGt5GWePSzQ",
  "key24": "snhc1UFVAdZSZFmW1yhdcDZVZnH1P3UAUhCDEw9aERANHN4NwzEuzSW4mZw63m1hSoSdoEdrPB77ySac1A1Mnko",
  "key25": "2vEZ4yiSV5H4cUe7hfvZL1VojVuMg42TLMEZtvDBqQNDEVu4bx5iWED48cVGjLk8wFGrkvKvwarvgUbcuJCGCvBV",
  "key26": "4zepFZaTqp2kEr21VyShKY5t3LmRfApaKwb3xcBeSSxeb7BqJCecGVhgNY4m74BbznYPrtnyhiTLvtVZTXzS2orb",
  "key27": "59zyHawpQAQUbtc9abJbRGfMVPp6aU8fgk2ETnsGwc5oVpVaqHtPK9LycHBQkVHrp2Qo58eVPRQEQxLSoeQ3CnM7",
  "key28": "ygqLTkUDUEeeXnXJF4KoKznyuiS9RLxvBFbXWBUaNaKwWvHarMpNsq3ftLjffxYtbhiaouC7pmCN7PXsrNT1PSA",
  "key29": "5aELmYyMgV5pMsWUoVpcb9HqsZsmroqHMxwbGmgEFPUu7hmBooTcAXemY42wiLqQELYaxkktmvSyFbk8KkP6WJUP",
  "key30": "4mPYzLypATMn3XjKqZ38FobpQ1r25zxm16GsHY1ZkHcSCKZBF8o8mnrqwYdFTVa9cXM3sW2eAQ3UGQ9YsqLHeqHf"
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
