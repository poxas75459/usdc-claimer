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
    "5xWxkkjFkQvuEVdwYeKKC5wwbhhWhUt9kEaP2Qj8VFVt3jwjsZ3xLVREUS7hQHN2VxtbPMf24KH8vLFEtjaRNjKB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "F4NGj8PBpM1GJoDxkGCJGAbP8i5LLy2Dcsam9Fx4d26rXNbY7JuEGgsbMQscWUjsdAD7JSW86ywmHPwCrDeQDcU",
  "key1": "4wTqx38kAwad7K7mmon95Aznu4BhmJmMBmcCoZ1pFqfUzDkz7aUeT7aqTZcqFrMt5SLKVbrAmKLZBJAA6jMSrEEE",
  "key2": "5D9akWy5Ag2rRAbZABPLfWbvpKxVG2NEyj4k89cHWoGqujdn2vGFRZffMPrptcwGCNvggXaR7SKqVCe2hMNyRVug",
  "key3": "343srTv86swqwLGpk49j5ZaDWzL12SdUzww5tjESkYv7cqarnRxpqwp5vpi81jAeMt4a7eW5GLjj5WxB1BYn2NLh",
  "key4": "4AQNWs9xUQwxtr8B2QLtfySvLps6uyZbCtckoka55MpJNtYoxHSiNsTLujUAXwjHBwSnpRF5hfat94J1AwfSSx4X",
  "key5": "4qxqYRaWTpNPFYuq5wfCbMknpVXgyACiAK35ETTZEhdD1ygJZLQ92Bi6SZLTGGeNGLEQX4Sre9etqSMBvjzZUKM5",
  "key6": "2grD9QQwLDT9fCmA7nXtdTX4bJBbckN5KpMbFmwT7VYSSfUav41QTDvGtvhnsbwL8EE15LEqvftAKpAojm9qMsko",
  "key7": "2qkY9KV68UnfEj8N4oA7M3bZ4FPeUQyLNkBFB757TAuSN1nanvgQHFZBrPcTfS5iSmj247YUkSsxjCVFmLLYwTWF",
  "key8": "2YErXuMkkbTEXJTQFjbPrZyRKLMyntF6NcCAni7CAkpAk2BdZjz7ex1PAw1QDpBixMJeYK8o4jGs7zoXardk299X",
  "key9": "63Ru9hMPH5uu6kUzm23B2Xkc9cA2Di8Rtbrkeos4gdZAVMxhe3eAf7zyL1C71kBj5GdVm9BUBcrtYgja3iHpBxD6",
  "key10": "tJHLtPD9ow2cH4PJzyb4ggaUGY2wfCg1iKTAGySz5vrnzfVi5Q4TaW3bb6XiPZfh1f9ntRkvsSe2NQCeYZkbZTu",
  "key11": "5JzFc6tJRbAoMcMncWSVdjqU9MboG2T7fVyknebMyFkDqHrQjn6fbVq2kgztoYwYxRAjsQQamrmn4QmUvr7dTmFj",
  "key12": "5cLzwAcv8L3ZoXrryPhyoLx6jYAD2DJPYKDXYJq2GTKiW5MqGyuz2DuAhGFxuizxX9t4cYBwfQbYbE9cgDgdXHeK",
  "key13": "WbfPd7buaS2At37okgeprthxwxCrckHf1qos4sAxwLXLpsCSmHUZC5N1cxZAgYhmZRCqFu3VR2nW1vp2ht8Za4K",
  "key14": "5H4M2pA7ebujuK86NtkY9YmNq965Ps83jZTerbLDU28SJ1unu3PPBNg6PQAroH946Tm8xaX8GivwfgzQ3zx2jFM7",
  "key15": "Yz2ZMAaAi3KTGUUQQ46KWTaFc9hDoeeC8mA3VwuFE5Gq2JEtHZZYqTdZMWLaMvd2dS8NZPpPru8gRnUXQhtXm8L",
  "key16": "48nmrT5C6RXk3Eg9N1iFyVJqSWRC2iXM9emCFg5kNAtWDLg3eUagZgXUYXVgtFSJpAhiffjzHmszCEDooDFqHaXJ",
  "key17": "bLpH1qHqMAGYvt1VxiqqR2jVqL5Zcar4aS9CfMZH2uo43EvUhex9ytVy9VHhMUQYGGKJHQ9xcxJ5gUsw5WmjJcQ",
  "key18": "5XNTdVeo2ME1zPbHDBNqTJXehsb8T1E3nmAviXUN6PnwGDJD6Yn169fWBkeuMLGN9xN9Z5d7bM2gXsSTtiwgPHsc",
  "key19": "3NV37bLyiNkFVaibpFzo7KMhTwiNJgzqDiX5qafQ7nwDPc49pBDHiSdRWcqQ3buku6utkwysfh31pj76RaCtAMJa",
  "key20": "4eHcisMuS9zNZzYJwRup6Ni4QoZM16KFs1tg7SZyocBuMqFaN179GoChq4qd1kye7WtqA2TwE9BXRUjY5UZEqz1Q",
  "key21": "4YWwqT9iKmm7FT1NrAstDRqEPAHi3dBwzVDTDBU4Aqw3kCrXVhzPeuShZLQ6oV51Q1yWs1YsNqxW96aNjmeeWYse",
  "key22": "2dLmR69ErToF5EeXReak3z6BEHUd2vTPCkt8FDZTShsxGXfyty2y3WhtnpkoUC7XQFtVi9it9vWerEG1uiDfeCeL",
  "key23": "26WTM3WGh2bzKNURimNAqfoVQa1wtKX4XNyYp88DGcka2QLkvcNcofDEqotJpbEZJvmZZVKwWH5zgAB4mhSM8PzW",
  "key24": "491XnoGj6pGg1fJ3N5T5FuJh4L9kMiLgKmNvFoMswx6bXb8SpMkABXxSYFX4CGJfuRnYQyRh8Zf4xs3hXXfFUXH6",
  "key25": "5dJbYuXXgENwxjXdjgY6iCSDzmLme6AZyQXFaimq17goNtzhjnjpmXQXLYRyuNWhkUu9qc6YB12pDRNyc4uQ5QRZ"
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
