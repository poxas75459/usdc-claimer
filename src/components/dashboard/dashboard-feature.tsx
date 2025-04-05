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
    "2g4LksGu9st2BVMd1CWds7sg4b1jUVwy8KgiJFkdCCFzBaHV4xU25S9tz1wya8mCpyc2ipmYoPyhq1yZD1VK5XAR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jxGfXNFQ93vHeaTRvoP4vcamBdpjfxzjib6K9G4jEKnZkhnACYnz7Nr4iD9mEC2fQnZh3xmzPQuJu2GvPJKjPBy",
  "key1": "2P97VhnR99MpcaCB7zuT3QnURUbF594WLHumfgytb7VivRZoTGsbTmi9JKEkddySry2aWhgg3dxsLxNZr7dhwxbW",
  "key2": "39bBhup95yRCrHGu6S3tWnqsbiv1WeQrpB1ES1FSFLm6ffSX76NwBp2vLABYHQwXLLzRP6UfYDv9HhXcHmNChx1u",
  "key3": "4AHvYwmHV5FReQbMBbnnn5bL1X1hh9FZhvfmFw29GLmoGbL3L79kX92MxQdQwF2Ffzeu94f1jNpMp3EMNW517cP7",
  "key4": "67eGXBmoV2HH6dea3kt441BUQE4QBecaJWt2DHLcJutww6GjS4GEE5Te8Jb6PYGtAq5cKuyZk5hdLCeqQQBCaa2p",
  "key5": "631dyjPvvVaTfgtmsY7XKNC91tpDDFF67UsKhM2uDSSCzSGpY2Vr8Jm7MWFPBJPkNYR5B6cGU6Xw1DnkHYBnBZSD",
  "key6": "4Rtuhy9Xu8cx4FVpj14BzwYT8aE45MmK9ionyucP73ctjCC8Sd3jsVwnWZLYpt5BQnvoLRn48LbDhnoUrHc8AS56",
  "key7": "3us4g7EQvuPtSfoFBqQJmSXJBVFFDviVLXpovSwTgqoR8vgjSR5ynSUmbJDuKPnxS7P1ephzT1fvEDShJuRfCnx1",
  "key8": "5htjKKp9VZgP65NXqXddMWq2yn5Rt7aybEdURkrJYP92EqozJdYPdEpr2V3kUBJn3b15FfqfX3MhWUBmDKSRKCJT",
  "key9": "jpE37DAF4AhQGcYBdSANS8P5srPp6RLruX6As5Xgffw8atz78WLDtDtTCH9BSZJt3AV5w7f48joURhKKA2dF5uM",
  "key10": "NU8tRdjBL3GeaGfFP8Vw8NpwNzhCuJ3xDNKFJWMwQ1FUnBMtHnLJp58Sha6jbYWHffdX1pppttEiNGsXxxhZf8g",
  "key11": "5KnTbD2D5vESj6sbjhzbvnQwWVC3vjZkP9LJ2odbYZ8zyvfhHsJGBA3v2JXLXWzn1HdKH6NxUNMvt78e9W9xerEL",
  "key12": "viS4sz8RfJbnGEjYWCiQc7HjDJEiZsRmFoFPYw6YvYd3tNrwqVt4H4sRGcd4FSNSbXqa6dysrggQxAyxvRBEtFY",
  "key13": "4rVXikbjzKx2ut9Y2yVdDEKLs4CWWUemfzZELPPMmNU8i3LwGS55Ndzg3deKD6RN4BYWgMmiwgDd1WikoqMVHENG",
  "key14": "4rbMPhJeGw4SRCAABVKf5qdzowNsNp6AHGS41YMKHMyin61uv6bYZcgtR5DYE2J7fvDwY2hUQvaz3ChEhDUJczVa",
  "key15": "2viN7d1gduBxtDGBFNnUt7zEANgfR9zcohVcduga94enL7XfCAmuGL9P6BfHsdbuFfPvHfdNh6eA4APugkGCsEkz",
  "key16": "2qo1dG4hFrJRNLSmrypDvbUGBuhTdV2qLw2uPguE1w2k8YEZo6frdehhMmqNiBg4ACJkVfttbsRi7uYTHen7N5Hp",
  "key17": "4ssvuARRxG1B85iSioJuCwj4LpPMQ55shXKMGaYKQw3ZoshKNHmDd7SX9NvNq3WbezAcZbbxWX8mqov8td1DhgG3",
  "key18": "46irXP6eVDaBdnuF1NCdRzsRgYMCCxi2REjPn2HzjdPLBx2PkWtNznE9d9TFjcs1R8wjr4epBME2SahijDU6rtk4",
  "key19": "4f8TCJzET4hnNgxs4T5dVDjt3Qzzrp7iL8fmNGx6H8HQq6oNNAkYyqvCLcwXwAVECEB1saseXRYZxTNjJwojnT9R",
  "key20": "3EaghycdjirA38bfUdYLt2xQnuGaZrRMJM4jpMnRLYbTsH7B6pz7MBxm1GuXrxEVf68Vn9mW6c52u3tpxnapFu4y",
  "key21": "37fKK1Fm13gr83b8CgvjsuqWAa6iJFHp9GmCfBv4pkjpVmugnGmaCQdofiJkjLEEKyAb2Y1TESKn7FQeYAwViXV4",
  "key22": "5urgX5Viscwq1XD6Hed9s8tuzBNbKvb87NodkbcxZSK2QnsMJY7WQcYFgEgjAWxu4QY3r8kj7GvQ1rhLdwbUareT",
  "key23": "xKvLEzF41SRz4nJdgoRskeBQgFGFQSpC1qTsuujejGoaKRZ4u6RdWe8rFeg7SZgWRR8ywwZgnEfUaLPSDxgawr8",
  "key24": "66djDykxJSHFBzh1EVviYwvm3aBBkK6dusesr6ZVxbMiGbCTJaurXuhrFvgPXghHA5ND8SscbmaWWwLuaLb4itZV",
  "key25": "3Mi7RNCokKmcS2RCDw9G9h2iJNtpWEBnsVajcQe4tsiHhA58p3FpaGsNnL4B5HmjvNMaUXhAR3mEVG8mGGmzhZ5g",
  "key26": "66US6Mf1NCNL47nFb9uNHCt2uiCVGqf86WgyaNZjs9jnyAxU6AfnUeNV8ZvNYTqAktsgB4xCgoBBE2m3MsHHHqoq",
  "key27": "36ucvUBiejQVQ52FZkMEcuqFqZ7zVByeWHmkuC7juviEtHxHhNLijE84eUNcszgayFEQ219tdEQZRsUoFaJ9EGmS",
  "key28": "3mk8DW3e2hfg6Gf9yikfSRRbuk4YDQzqxLJ2aXviLQ9WMCGihsdddojVb2RWnPqiBa4G5mwQit2c9v8BN8GjUN9V",
  "key29": "2FGP8dGyq9ByqXzEqQSefQfFWtPBEhissaT5ek2wPa5aHHPJkw5AUZMzx5KirswMhaTrbNoZ11Yd4cAhpbEZmx3R",
  "key30": "3e5gucnBvAhdvpuF5umB1yUsd1JWJbo3KzjoBZMZrptM5fAG7pRkkiqV9aLFdDHjzjC53hr3tNG2XQUVbLVRPGLz",
  "key31": "3VCQjBm5Q9reuJRLU68dW9BMHztK8uxXh8sCSAGz2oRnYqipEzPgXZxRYEC7AFSQriZUyGUn7hmBe4MDRdbPgFT5",
  "key32": "2BDVtagWmEEmFbcJDSCLx6BtRidKWj8iPRHkCCsKN1hLxgJu8RF9Xzn5aypHzQ66MXNCt1y7DHwUUSz8XKwb64wH",
  "key33": "5p7c6Crzsdot5MWrjQdwGv5eWAYx61QwT6FEc1L91HPu4WzyY1GvErzRhN4mPdcXp2GSLr4AMrCuW2eHWZCNCpa7",
  "key34": "4WUDXDVr2HKXLuRu6FHKZ6sAMA77zU576dQabgnW4ZUXAhRcGkw7kauaMGQn1nuvH1zTwBAbez3t7ogpMsWx9D6V",
  "key35": "Bqz6FyuQhP99ygYBCsGaTDP76wQw7nNjcYi3GJ4y9iM5kh4Ku8sE7jBewzWihviTmffv8uHN6FuRVLh4VMiHr4H",
  "key36": "5aoDGwN8Wrd9oXvRhg3LtB3x5RjeRWuRDXwXYuoM2PEPKCSHXwKzSawHcveUKx6PsFcRwYCKZ72adwNQ4nBPRxxR",
  "key37": "5TrfrZ1ifkTjY3gL3hwQjeznJkjTLHsRu3cZoRWQyMZcErbuNvihLdAQSJyFqyw3PGqgp25d24QZVd3PoVNdjgPz",
  "key38": "3dXBaybEoSLvnjto2iW6xcamz6su6PZdobmA7T1mEFdWDNfUKYQwWerbqaLeqPg4LVUceVqLxz4pLUJz94B14s7F",
  "key39": "cjF2JcSwHKU5Ug1d97wuBGKQJXb8fZKvxojWbhB5tC2HXa6XZ6KXWxjsrveggTc19eYnN7Z1qMbkuBvC6G5SXA3",
  "key40": "4MqibbG4J6khFk3duwHJQ41GgRzUY6Uh1Lv9Wiswa7FfMhMFA4f7Zteak8zSQ39vnPpFfUm4DPkdbAXQauVn63oQ",
  "key41": "347Kuy4YtQmXVXVNtdQGBUZMTfwy5N8Z1hiweouH1AZHjoNGZibac551mhxgjJK6wShAEBup6FNr5zkB2durJyxx",
  "key42": "2NnATueaPjXZe4JTMw1sYvtMFvMGnSRoUaRUELW5BsqCdreeKsSP5sCBw1r77PETqoKUiwwebGyqtXhcwXxjSjhC",
  "key43": "2a2mwsctzAjRtZpBWGpp2zdQtWYUSgFJBPRveAfT2t8nL5K9qFVcPoftXJrPrZNam5rkWBTPj9rkb8CqrzTD1B1E",
  "key44": "22xi4TemSJ1NksJJ11Sp2ZoiQndcjes91oYpvvcnREVVFYK6AWNVYEKbXC2gXzbY6cFvAUKpNSs3o8yDiW13hoeb",
  "key45": "4NNZzeVNMm373AqAt8oAsRoxDQGGRkEQq8raXPuZDTjmXH5oSnzhn1Yhfxm65pFaEtkPAugcr1xudazh61cZQ3My",
  "key46": "62RC4S8eG8ZKxJ4n7ciX8346RYjPH5Bei8i7s66VGUhCgnrb4sUkDuJdzPzuTvqPg5gVuHS1EpVFo7xwbCZj7d5c"
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
