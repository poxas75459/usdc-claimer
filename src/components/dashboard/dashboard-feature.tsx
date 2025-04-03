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
    "5rJuzVfh6qTMUFEuHUsaq3TcoYAFsHZaxaFSvHsESLSN88KWHnJyzccDJR2xAY9Kaso9PZ4EP47JDjDVYvME6YpW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SCYWcwwHJb56hNww34gNrC6RVqNnhX2ojWQHcSbqzEKA68DE1uALNdzJ2JwXAe3A5cSRe3NngCfUf3nfKAa2htM",
  "key1": "4JBwCDzxMT1D9Y59Q2g4bzLsEafKN4sVULT9bcLSEjeCgQu9o6fXtJvTgx5wHAZYntqUEEitzN3G7fDrySiixcqQ",
  "key2": "QKcTYyvkSr4Ao3q8NG9eUNZBjyvKHsGNMhZtCadNE2e89ffCmEcJ73ZtgF76CE26d8GPfzrcFXqR88AasEDu4Lt",
  "key3": "5WPUbhWtYWT36b2ze2oJX4nqyuqpnGCYGZ4RMq1mSy7oT9MJehpDvKrtgVhzJjwCRUY8REcKTBoLZ4rk7z6B2dQ",
  "key4": "5HzpEArY1TgJjYJ3o6b8u4YNqWgAKtb7MH8Ggfek3Q277tjWrNVrzHL7kwL37mEBzzVkfXfGNZ7qj1hJkKBK1LUt",
  "key5": "59U134EqUfvvRzdEyi54EMXnEZc8m1kSEViFT9eHFg4UVmAPqL4mE47GT7mmsQBfRsWUAN9ck2hjDZwZn8n42G2J",
  "key6": "2nWpjDtpC2u32YsvyKx7Zs5pDLq2kfaamdGZVQHR8UkMx5gWT4XZ3fH5d8PhGHyk1U1ez2WavswojVxDdMzvvwsG",
  "key7": "49N1QK43WALURyCx5qmQDetSrnFCsPyZm7JbYr1U4NA88gZSeqUEy54X15vX927bwQPtYBGkSEr3JxxNLiTMRv2C",
  "key8": "4fKb2eUwuGro2p1kz1gr9nxXr5iY4QAtdfT5obANLEHzCYHQARi3vLbJ1GmvhfXyg1qvrh1uMM9znLKTRnm4gmJu",
  "key9": "24x57DXaHgXSV2GJKvgjopsdJTYDYZg2zG46atWDEh9Xtrf8t65tScFt5jVH3XZq5gFpi1AF6nQeenykngqpmUZS",
  "key10": "LDjmRv6A8XwvXCwX5SokKBYGCfrkNskWuast7DNRBznHhAxe1dgGKgW64kTWQZMbVMv4mMAY3HeW2TXw4thRf63",
  "key11": "2dZLZTZTabbiWHJJchPd4iVnQ25xKU9cvbK8vo74N6FdFGpxBoTLqkPhHipPPv5VXpFdnWxQECuiXUyjgz4E7rZU",
  "key12": "f6VUkAgSSQCa1Ts6hTqjeRkTGK2JasYfB1ZjFRoDnjs4W7bxSVDZZR9BuS2Lr1g4DBJEg9NQ1rRxavAqxPsM7ZN",
  "key13": "2RjtVsE6ypXzoQV2Hs2Qh62DWvGoEMnEC5GiKvqUceHc3wkWFj6mGrgeDjLoQwFXA2Hn4fLT6uipAhRNb6oWgCAj",
  "key14": "22ThNW917ie5CSJ6NjAFJr94ADGzJYwSNfiF2Sgp3birY91rBMbddT8fVVoBNW97YvknPxkb5mSJbqxWEhvrMeHG",
  "key15": "3k1LRUrdUkAfnL7Y1pUTGPmDUEvd8w6TNqc7qHbS5v8Ym6RMW9MgTsLVRhB7zNq26vaRpNFWduXMzGBLbCxWCsQQ",
  "key16": "5W55q5gxfhEjawDwSrg4SZjuTrb5ogrWgBep2zyTrc3PrVAcXgDXEUsazrbCf1YEiFnwWXeMKEEbD5FZAfBA8ZLK",
  "key17": "VDvMRDkqQ1nQchdc5gaC83AgqWENajJWg9m5fT8Bq5eUZSQ5ZziygrE59JcLQgMvLtBFnA4MZxdfqbWJ1jZs7RZ",
  "key18": "2NpsxFNe1oFVpUGLzUqjA5pwUWnPYvSJLHt15eBKBPq6m6BXzq58uwrbgYdhFQnMxtpJAg4HoNY6vvZvL5c9LY2z",
  "key19": "4wG5PP5H8htWzXYkpgxkg3TLhLsDmVtJtE46D1eq5NFkWa5i3gSxfRufWxmoqFApiahBzYHSvr8t4Nokg8o32YSV",
  "key20": "2WSeHNvqi5dRa7fmEH8TTeRq9TdW7kmTLSPRqwhzb7K4G5yr8XWFS1BtRVxHeDF1mRrptRfooEyCArFoRZhkYjAv",
  "key21": "5YR6kX3nFdd898QC1Pja7GBaFKpt3egeywkwqNiv6x3qNrKiHoZcuy2UkvycjMkg16iGWanrhdpmRwMSGGtDrCMG",
  "key22": "4EFHZ8q2SSwQMHUVom1JtU6s7s5Ao2vAqN1pT6KjKd5mPdkzcVsLfLQwP4TnUconz3MtLiU5ST5aMpoefmLf6jQb",
  "key23": "4dBbuDJMENvE9e6NCLw84nPKipmZzwfMyfmATnr1GhKRxJUb3QDxUxiBPtEDgYo5pd5jJjMdKtuHMrGjLPzEtRWH",
  "key24": "4SUxuBH2Nr736oR1yAXRavRwnemdE8Wkvc5gXPMrm94A88sqDcVbJrZXzZzKHJuX1HnXjrWFGZLmJDCmv8BGXoXm",
  "key25": "41Uuyts9Wtx44YPd3Qs4hx7PAR436aGW7PGVbD6STznWQWG1NhPT3gM2snZkp7a775HeEFQEHrgwwB2RD6qCC3UA",
  "key26": "2GFWpbZwN9ivkovxWF9xGN9mztnNLWcQBLT5EwZNYq7hEq6nTUARmLT7pHFE2C2m7zzKczujT2kfjt5pnigiDkq1",
  "key27": "ZLAucWxTnji69Jfh8wTw998bpXjUCErFeT6WCEYEsWpcWhJGs5k4pSXuyGi4k886ykUfqLWHnPdrCNLgUwNqnSd",
  "key28": "3mxzXNskS6VKhAyQ73fLqCG2a4jAEtHRQD968VZv7jAKB8Zpn4WtwupXYBiiTPK7Pqe4KpiamiVSwqqvgyyrdCkP",
  "key29": "bNb1r6VVM1ukkbmYoysqGLSFFWyfk6ggQQQKNAhuCJ8BjX1kBsybq2oQHjQTXRWcaTzHDD4ceW9EUMYFGRKiqCG"
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
