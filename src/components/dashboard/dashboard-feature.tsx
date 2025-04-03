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
    "4xM8n9a3WPunQnRZDwGvfM19CYjUs3FG5GJHpk6JXXiWDWR6mmfvXF82yyZbMSqERMPzb1jbdiZWMS1XbH8fnnsd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sjbLh3nJ5pcdGqdqDhWKmyW9HuwX3eLKTEZsfV1swAwQj2YpwxY7MFeZ16hLeR5LQRSiEDVaFySPi5MVANzjp9F",
  "key1": "6265SdXPqnMxKEB1SAtAW8E1nMxWk8jqzREStitabRKCEKGkFLQFQUhBdTq3uWAJX5fdnrxiBo7a399n2M54qRnL",
  "key2": "4hEFsnMVcpuccHQyps8o6VhMyLnaV72ztKqYA2zBDxaY6Ldr89hyh8Z5YAzHJPi2dGemhkGB1FUrMYCDeuqqMsX4",
  "key3": "ekUnNg6i8qddUJpHLXn9dagCUkDNe5SqEwjumwiwhVYNnXagGtdauUaX7MEv74CpYV4ozekmNULMsBAJ277m1L5",
  "key4": "5xt2zgqoqYqpj82UgfkkbmdxaGvCqdaJVfjgMg8CajdJRzYJAWJxzceevNYjQGTBMQHcJ5D7EWyQtTwDSL9MFkez",
  "key5": "5MDVJPXfg81AU57KtPpQoT2RUwomiSfzvqqcoNZtvMxAPr14ytqGPHzGth6zhiuretqVh1FVUkesMboGBurm7Za9",
  "key6": "5jt6WvSfHHG7ph73wzroCZ3UayLArjYYaCiMof3pfXbRCoBamLtN2Zf7AiPZt4DhgCmiPvhar1U212osdNU8Yo9x",
  "key7": "22a9sBiUxC8nF9GuJXk19ZiGcidBScsySEUpDb7Jx39abie9yTN6kVaxPG9mZCEi5byxQf5QqYtE2ZdFjTb86eX5",
  "key8": "3S1iLAmo73YshxNLGnYjynMaPLENdYPyrKUeC1dpVNWpAM8UiiA5bDwC64676CbHXWngaPvdPoG5RY2MUbfyaNr3",
  "key9": "TeXaV6SzW8fV2Z25DtRPfCLq7QC6p3pAm8B5hr7Temn3T9Txd2K17CsiJ3SEqMGZsbHWxSYF6LWWaN79Yuq2u9S",
  "key10": "4QToc4aYF8nV5MzaWqtkUVFHD1mKFxTQJ2fBMWTep9iHf18phnp8P3FJ3oSe8PYVvy6m4W666ZS4m11ThTYH5FWt",
  "key11": "4L6g78sHS8ktchj71QVqgdvCdCTqiDQafAW9CRgHrbQjEMX5QrBCdBKU6dfYhdgwvdrfod4558v4szJwQbGK9JLk",
  "key12": "5oCR441qMWrz1dqbJQB9XkY4hNoXfmrsYeRMCmV2USHWDUUVUUE12n2LDSwqGZJHkwM5K79iE3aBC8i5qsNy6P5h",
  "key13": "656ypNU9oSPV1qxRyPuFBSPTkYnB1fudLdDSQZdgEP3yWqWGXG6nZ78FNhkrSrEXU3rYsxCb4bVpxQ5vd6PGWitK",
  "key14": "3tAfVP174uabwkd8n55WrkmWaikKvbdbKVmBrnh2gNcLxDdc6m1XM9Mx9DF3z1jk5SAT6B2PyMBX9Kk1Ub9TmDX7",
  "key15": "5PXyFfdCa6UJmZ5hMeNaax3hmYgT7k8cyXVNiHKfFwpaCbgqNhQE5zNXLLPLHPZncf2zcbR7X5q64fPXtK52AecV",
  "key16": "3Cp6pyBcgDxGodfy4XSsoUYfST2FDTfbhNYKKbKZWnpsS33qyLJoqEW9gSPi32eEW8dQ4DzD88wutq7ouLpySU68",
  "key17": "5j5Bcgj29WXoMDZuVuuHqSRkYnv85Mbcozi7tpRKFeUfRCb9rGgUhS42Zxeh4EUddoMno6tk4RPcD7cq9CbZDqa",
  "key18": "2Bgaxj7SmqMPc3UvE2vsgE5UcnMQFxMAbryJsqroajvxvLExcnsnAMuaDWRcaYWnPbX47twyEAt6Fi385qnD7x6W",
  "key19": "4yQWwxEjjeQXCGNsu3DSjX3mpCp6gRrs7Z9RZ2oUCYp1yQUq5f4Cau4Up6QC7uEhgHec1vkgt9vqrtNnPjZmEjTp",
  "key20": "5BCgHA5nPU1hrXEk2vcNF7uW5FVFkr6zci4FDye7AUKhSV7TDbhXEBY5Qvtcju7tj18vpj8q3jQa2gC9etyino4S",
  "key21": "3FkSWApm6N2SUPHDSodgugSVSx1JvJV9jWXtTUALLt5tdfn87bp8135k2oi61pEtcYm1baNp6RfTYDwrnhVyGmVD",
  "key22": "5ofHjMR6u1D521ywNprYeCrEpuSb5CmouXG78pP76xg9nTwo7uLEeAoZfiUsuDoTf9TKHUiaowdgea5szWeEHxSH",
  "key23": "SD2MJqQ5wMaaGmg5AKcNPsnbZGBtY9HiuLBfXvAYjZHg5MfDh5znybvppmRmf7tueXSxz5yExP8JuD5Awt8mW8R",
  "key24": "XEWz7vPV5ZYuu2veAGjgqogtN6dZBgsZ7NqfXLEPpHxum4URJH3SSXp1PVsiiytmBjqDtxLgoVe4MjvzYDndd3u",
  "key25": "4ctNgTyzw4ui3rmAnBQycCD2SMub3u6Pen5mujsC74aFWxjqK2k8Y5XcMBmtf4Czyw5igj83Cz2rW3XCs9jzDwME",
  "key26": "2V5CYWkJynkjnJfGZVCy7KNZo3VS1Tg4xUmUAMM3yNCjUPm3V2X4rGeskaqjRmV8ghyPmFJA4bwT3uwBU6nugVaR",
  "key27": "rWGsfCjxcTZJqUnm6Xp9KKSK5VsGSAQwK7qxUU78J7jXPJKWEqQuTkicxN73XaZN5XcE8tZrePuM4s57iCZrdLE",
  "key28": "VpvfENC1ub6v4PhM8LaEACJTkjPYkfq4vtgKMXWoSM5VHiTw1ajFpNCN3Fde6megVtRLVYaHAMGV2pvRKSJBVJF",
  "key29": "64vHNgeFg7jmsfo7jEYX8Hu2qGKZEBNnUxTKpBiExCR3V2J7rGrUsRs5PY2oKTMZKQAbHAJLybg1PhFMAtNSmifk"
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
