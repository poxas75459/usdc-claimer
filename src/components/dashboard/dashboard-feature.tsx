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
    "2w4rAM8geeURKhg3btt3uChDoRCYYvhXEn32oZBqB6sakxhjz3w2ZBiAHuHuCQwRsJLt9g5hffcpEpVSuP9xi6Rg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2G9UqseP5WVNvqcETmewB1scsWqxRzfZhco9bJYZetNcxR5jk3bs3JTwUJ7mmDXVoLEHGKeWiCwibV5UrXoCbKf",
  "key1": "5eviuSttzwc2GyEZLUYDrCKGvighEH61v8tFTps2QMiqPBGPLTeU1vWawyUajmEQNJg4JB8vEVhcj59XqhaBtkYx",
  "key2": "DEPb1t3T7QyL5pEPgapXV1VCmtV1mkRAPk4sxMRg4F9Hb72ninej8kNkTMt25Ymb2EjqRW9sHPfm2e277eBS7iS",
  "key3": "3qGCxW2VSG234HFPAufLuX7mLT2nBLfvWjjQuEuAcCfYMYEUfPyweaFPC1kZEPvJcWmcamyACRNKnkcaGb8q33JG",
  "key4": "21SxtSGxZMmkKxa8BEx3RCgvorWUM7PnPFdmsGj3txxeS71z2WmPRdkLN9QBWf26H2772Z6nms8mZpcoFAHz97A6",
  "key5": "3CPjhxL4Q8BzPyLd3cbSkygwqEiuE8axGNbSG7Y9NStjqajsAiNeQwXjiYZU3YF12rdgLUV3rTcqXPjubwjfrovM",
  "key6": "4zm4Ev9w8tjwkWkaah3xVTqtqbX2c3MQ6iQUNBZcRBUChzLLz59FBcU62oqrvJNyGrNcqdtU5C6vTxeZo9DMsWrK",
  "key7": "3p4FuJSjzLyz6FcV5wr1EpwGncDwJahT2nyfiDvdogcyvUUYvzgAijzrQQeQwb2nPNmsgcLyx87sqE2NQK2kVuz5",
  "key8": "3nQ1RLio1YfWfX8qnb92Y8kVRrw5o5RTZgF782WjzcifwiedGSxDw2XvA2oMTFrECLmkRv2FQPhsYwqzTbkf2pGQ",
  "key9": "3B75Yj93HTxhWAHezNksLsrarJ2tW8fyTWscFivLNUuk9PEVd4Dbp8E2tqSmBgPZVTZpNY8vFPQWTNekdeDBSPep",
  "key10": "4Bcf4rhNQJ7q1cZhcWLxDLVubYphF3wB2FqZTzj9VqYKn15KHrxWvh2uq1y7SfWQ3KixgRV8szZZ1hLTtg6yjzP5",
  "key11": "65yFARwAHVo8aLrYv1NCJ66EfXv4qPijjYhvz8wvSpnqWbfahzhddAqBmfFoH6gEFG3Jg1oU6PbcRs7G4EFV4VZc",
  "key12": "3pDPEZETJyKtPL2DG3Y5rGcmVzZYmStuDkPe7667ANuygyp3rUNTEQ4fjJ7CwujqD7K4idMDSC1JTizNLjxgfdU7",
  "key13": "2qWUc3BLxUQUhbzr6tDd7XNEqMNUCBmELS7k94992fzS7NiH9kL94fQJAfyjrDLn34e2Jiw7LzENhcz1zhZ5cv7",
  "key14": "2Cmn68Wwebr5ykCyrTtZbihbUjgVcwziDgmnUFgiKURLSXg6eDeLuWTaUB4Lm8GdaoazZh44aEdDqD9KqsXvJji3",
  "key15": "4pnJWZZc7LoSzg85aLa6mbm11AQDgXpNxAPyy3PFhK21FLAretcAWmwXxYgh7upXQSqspG9qXQY1H3hoCAu62c3k",
  "key16": "2i7SCh4X4givHFUsj3KeW3rN5A73TNwujoP4Bgj4U9pboPByeRNgdLiBz5cu2HATcWjmRGJdjgYTCmdkhYWyVg5E",
  "key17": "41y89qSnp3M2ZWqXhjDNX8qfYQQqjA1PJSxMx9BRr96utVdJnjHHBvRHiDDphgZoDFvBMURfdLvjTiqudp9CQY67",
  "key18": "4o8H3Wih6PRhnBYCDofUVzZ5SwNy5WVaDsq81E9JoxLFTTJvnh6BRqLcdMGM9Dm6iYUZdLQPXx8JKq3GWJWXyYK5",
  "key19": "27xR7aTnfS8zwqX1zDAuAARnZx8kQ4F476sRKNfmyA2s8Tqq1wapemWH5kxYbMsz9AsjGXj6KKhr7jXFrPuAVr5X",
  "key20": "4yYdaomhmgbVzH58zCo5WFLbcLxwTkK769mXYhUf6o4oUBCRnvnauRKC4LZ77qHMvAHcyVZKi2zFyKQ4EQbbbcBz",
  "key21": "4xks7jmumLyn47fi3eDaMUq86AS8738jibfpjRfttj1aWp6b6X6st267jys8aVgcjhQebnTSFcG7HafmSRGCNCqe",
  "key22": "2bfGeuK3hzH2S7frLCoGzmB732vEM58SJcb6uvDx4CSibYAhXCxBVYXGD5cuV6MZ3YuwE4YfaVTsiTwG5Fs4LGcM",
  "key23": "4SZsMCEiZy4BwGC4R2VBGKeo9DtfqSVhWbo46ophu3sUtvkeAcRHYHQkw7pjvYtQNqdQTFKkmFNRpvhMDnaM5DKp",
  "key24": "5JmJ4DLJdT6TvdtFr5dqtXwM9wquKLHFTRYzzFce8gCuKieYFcQfNRsBS6TQ4aYgQhWgtGpG2XvsNH3uE4FJPxkn",
  "key25": "3QwMr9QM1b977te84V5s81yNPfhtGjv22hjExk8BP7EmyAyW44tcswegajTbmZuAmtiWQ3LbrMDtrvDJL7aPiH4s",
  "key26": "5azkVGfSt2f7Ys6ktq7voT1tDBW7UBQs9KzFmVisswD7YvtBDUVjgLg1nk9zLTBvqSnhTL1u8ihx8R12QB5nqWEG",
  "key27": "2f5z5DvgbsrKbrQWsKaAF6m62vvNtiR9s69CmZCAt3zccLZhJJD1Bjz5669qwazq14xwCkcghmMttd1qjm9BYhfN",
  "key28": "5EDn3gFfV918z2KzY9Lx9h6s5nsNpL35mnYwX6RebweJeewHWeRN94UzQWa6xX5SLTCY4v2QFj3UnjyF6uCyChLs",
  "key29": "2XuxbeDCakGDbjEK2WP1SDhhXSpjwoyAYv3XLB3ETQR9KFuG8fRbdHiRYN81vRmCHxDiRK96ZPHVh4uYM7zyCh4L",
  "key30": "c1emBn5MrB17ij5g5Cya6nYjWxtMyk1zVASnpp3YSwEBHNWMKeFBiSM5VTYyU6qAeKcn8HzxGjvfbZNe2Wz8EwX",
  "key31": "51r5R78ZdCSeDReNWyKyDjbU5QvJd1Sb2UtAemQRPVZW4uhn3R8w8KqefnkvdA2jZVKN5384tRKQkdG63ub6824P"
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
