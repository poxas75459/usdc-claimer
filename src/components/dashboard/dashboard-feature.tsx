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
    "67B4x3ASrwaXgPyVXpoz6pjaM5YbDm36fvEG6Qwmz4WfN4KeysJZAfzqHoixHA1myfjeasxS6vAJF165yM72bVAF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hkNQdP869igCXb7zs7meQkm34oYSVMA5RuKAnwCdrMnua76YJDV7WGCtebMdWXTYRPc7VaBtsgimZyzPctCYB4H",
  "key1": "67ejVE5fRnwaN7LMYoy226rutN5Qay7ViCk88K5mDqpm92UdUAhAY6UWuviqgYG2u1TMBdnzLAwdEGLVsB89SKcw",
  "key2": "2UZpTBPumtd5qs4QBQjdmmGK92Lnnabj1X9Fcdu8mA6XCuKKXRQngqYgcYyVD41E4QFwr3FSiX86uGaWBZN8z1hL",
  "key3": "3AQ33GsacRGZP7RZpXngnLepwZp6ZdM6vJ7wiEqqEZy7sRGEUvbu7dh61QcPHBDSNQvkQm4ZY3mf2JWXrvNhXD7W",
  "key4": "3ET35nkpES1dqsYdyoxgyyEedbfiJJ4pjoWrwppzc6RXFp4mSAYExGvf9V9hBYAcJvsEUy4ZpugrNJnMZKt51eu3",
  "key5": "4YmfXAHgyCH4GYDsV4xotzfsEdhzQjzU3dSCsEosXetPCJoCFtzg8cL19oqPURUyHSfbvW9SFezAUeVcJN8NDXwA",
  "key6": "2fJouLFvtKnYpNNfiAtvDW68VLLTCY2Aum5GJJFQVqbYnECrnWLDLRNpXqmDgH3H15PvNN26kxAaD5iHbcTRqMBW",
  "key7": "5wa4GQjWbhUc8ifFzEVyjNbiChT1DPMiY7JcYzcaUDUTx1WAi9GjpNG3f8E8W7PLu2daX9hJtYxTG5pnwdHJCTWS",
  "key8": "2Pt6wL3mDANBBochWxWqqTinJVzfykNqbZfzGx6B7pquCkj58wBjaXYz5qKpE8EBreYUk6Yxkb1PDDJKwAvRJQnq",
  "key9": "339ANPR7TS473qcnYRMZN2iuytjjmGgRMHG8SF8JhDCPpYBSq6BGRZFaSUFQ19zoaPf63u6ADpuDUXRVC4mD1nsM",
  "key10": "679j9YqGSiYgqC9NBq4aT7giZdWnUA4C7mAjdccaa66Qogarhbowxdoev3ifMBBq4w3pe9uTEWHrjt2rwcCkkY1r",
  "key11": "3diNb7Q5UxSpszSdoX4B3NodjBGZF5VLmerq78dSj2y3KbZuDF6rpC1iusGarVdvAGsBh9mPJcBeVzJaJrr9RYQ7",
  "key12": "5D5PJffnE14Yt2gYGxy73Uv5x6e9Pa79dzE4QipDV93ZBUnkohMeTr7GuT65BcHwEpocFpExmHRqvVohjWYHgY1k",
  "key13": "39Vk6dS1qN4vs5gfRqPRJzfVVohdeTMvtDCBNCmqMEWFo8tNuER6G4J3g6fbZeupBUyUo1ZijUfVYb4c36G6QgMy",
  "key14": "2ZqUe9a9d5FgdMg1NMFLXrKn27eWcRAYbq3Ly7vTZ1sEd3SxTjKd16ruy3UcPmTr4FymENmrdk4DjJNJkxwTawow",
  "key15": "24XTcvTBQhNHi8WsQXVu75cGNqnyy3zbp2WWeW7rMr2mTRePdbXHPrhYKDUwZJbvvaJaSPZosfu825akaa51D4qq",
  "key16": "4XUkCRFLbkXEcyDBte9HWB6hN8K5p3jiywH5ixiBmXrhafM87BdKdLVHcNYVgQTcAV4RdeAB9q8GwAcdemxFPziv",
  "key17": "2eC75ib6XcytLp6PPSuwjaTwaTXH8V5iUgSdQw2qBrpK7PBNrPsCnstNZEv2jwLrzAn3v9XMiyYmonJdxUwjyHdL",
  "key18": "2sY1e5aCYdwkhWu9fnfMbgeQWiGRAMc79Qi9gPm6VwE9DvgTPe5R6dQmiTuW6mSs5tTMy8V3Sn1LAp4pk7o3x62s",
  "key19": "5Qf319ozz9ZNoPF8C7okTpAYuCxXWCPFyhXnbxUHxmXsQuTsYt3hENpDTCFVgJ2R8NruFjdRwjyTAFpPbBtLgtww",
  "key20": "kVHhMRFCxmjvU56713kpF4XcVffwzHP36Rsn6yUsgvupz5cXNyW3tmXcFBCvcTcaVF7AKLGPYuACrnei2YR8uPN",
  "key21": "281yezxgp4Uv4CK1SpVQDGw5tc6r86BZRmkM49WXnmErNzWfLyuRCCcBEZf66N6GRVthL5YrCUNrE3V37Lp27u4J",
  "key22": "4R7R3pAngad2iU9YXVxuowrEeMknYfGKNWHuMoVH2sFAR3vxQgWj7JTKRutzR4qfLWLbE56hJnXVPUewT6NC2Gtp",
  "key23": "RDsUrekxreJ6VazRJXPxBnhs5tJYkVW4fCtkTFSRa4f4ncxkassC2uWpsZCipJio3TZSdU1TbXyRP6ED7f7fbMC",
  "key24": "5aKnbRM2GmFPG2fumoBKjnwLLSapV49xUNZd5JtK6P7ogkkZFTUHWJEar3mTAj1VxxYQ6r4X1hXPgt68HxzvtYrU",
  "key25": "4pXdDdvhzdTtsZMJy1pEgKooJdsMzERiNz1iKPuqfmtyLN7vhgJvjELFHVkx94nkfcZe1T2cqrGYed8hqf7LcrmD",
  "key26": "23feNzoB3GnBHqhcaY4GbMA4Eufh2eeVuszcQbVAj7LQwcyQXSKrFBwnMDCy6UQLXv67yeAAqwX1CpqZFxPC4KVS",
  "key27": "4EWX8nP72DDL5kaTgjx33iK1uepDDx1hLmyXs8zjNLTeUEXFEt5K1hMhQPSo59riW6J6Ge38bSTJj7BVLX2zCHg6",
  "key28": "2KpTtocrjxo1rvkKNyu5zxUpiB4Dz3d4wha8fKPX28f1D8LfrrPjD7QHaGtJ8j7LXVkB2GELHeh11mtB6AGyZyS7",
  "key29": "5Eq3Mjdwj4g1FFmsQvGv24WCcoXKC5dwn8XNgcPUcVpGp4Bxw6EzVAWsgtyND9Vw9yaR7wkTZe9LZu8PENnGXX1P",
  "key30": "4V9ogNLitA3GqufssYnvCaoC3VWD6Zk6CJxNgH897aLHv33mTxWVWQ4NS4QJcZasCZ3SGD1upLcgTwUC9wsNf7e1",
  "key31": "9kpVaprLUCuL9M1UgtFHmhVtHmKz3GtRGHzt5RwSZEpDPTdzovbcZFFMo61JFf5UaBczguEaZroLKiL5uyX1H35",
  "key32": "3CcGwqSoGb1pMXJ5fNiRQvqteH1tsxXZrRbfP4yU85Jie3ynKG6bogcAu4RqLHgbWH72w9id5sabtRjJPy9sHXvf",
  "key33": "2XjoEeMhf8waEXVaPcD5wndaewyMwFeqqhfA1kJxD9gLWGS2LaKELDR1PkCfAdfU7JmfoZXEfoq7U8aHM7SQKwn5",
  "key34": "5H8NkFmyx3YzKERYdZyTKChWpPectGvfjLYJyCykt8QL7sLFzPoKf8k7GN9BG5ywDAvSjvMmNcWF8xrLmTCqREXo",
  "key35": "57M4sAhFfDSJUeqeKxLcPgnFZQw3pCecicSL33Vvg36NRMSXSrYQg7iay7gbXboLtLsy1egh57XGJ8PFm3xzyVHB",
  "key36": "3axhaY1cpe7niYJPGJL8KE76svFErd68XZCwsz1L4LjVSu46e7psesCKH5zj4sCaBGtquSbhY2YMR4SQnPqEeCbU",
  "key37": "46Akk8iCo8Sji5ScSKSSESayZ96AYJmF6M1KMTWzgyFZSQAS2cCctWeW7SCot5THgZJcozZLc95xiQkfk3LPXhFi"
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
