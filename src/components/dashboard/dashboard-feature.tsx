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
    "4S3DXu4fxWBc6Bc2PoXddgHP8sqCYSNptvJpN3RR75L3QEmQZE2xiLVie44eYwQPpEg55aJRN8pCin8H1YBHPeRx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "633RinUzhxVg216G4GdtBEKMKYFpfBNDJjUHPGVdVbNaK8m89bsiE8coXdVrmzMGbJtUkrVWfBTTgzoEMhwVpqrk",
  "key1": "5VkTJyEEQkDtjeRKH5Gw7PYcbVESWxPH134g3A6VSiDhWAC62ewjWdt6CmKU8hwH9FJWUSkZBVfuKRfXhh5NmXQB",
  "key2": "3wRQdtp37RuMuqCEtG5yPsSqjRqVednqSXhM6H4AiGz7LijPfT2mN8rFJVgkyVNwoYTQb4rZj1vVeE8kbnN37yw6",
  "key3": "5o6onwAKYa9mJt2rcGvhoqq7zZBHjUdRA55jHbtnVP6HqeYPYDi9d4bUTC4tSnMM3Y9ySxW5ajUu4CYcgkTHrcAy",
  "key4": "4qYfcPPLpp68HgiJmrZkcuSKCzqPbySVoCUUVFnS3FWpHasA8Msaxq1AwUj8j6TeebAVeqhFMhsnxSnTwA9Zf5Pr",
  "key5": "2odeSXgyMLN7wNRqt7QStDJZ1LjF5cWP61hf9XC7H5cdYDeKXWCXwaVPUdp6tfDUDfn2kMvcZVJSnxhFvYkwF5xr",
  "key6": "3KB1psKuc5x2BMHbiQKypMRABqtqezx4qHZ6C5ziFq12PvtnWCXFymMsjLJejzzgn3WUSJM9o9buAvLi8kvhR3hj",
  "key7": "FqqLE231vCmSdCZrbUQwqNdam5J7FxfRwssVcYKzVHd9NEkWH2jvcKKhwbdevugmavnURQKLB1xLQR7Tis5unaQ",
  "key8": "5zdJWBLBdtfZz9tHF8n4oBLg7jxSxA3dBdb2NZPiw7nwTXHMp8WMyvFqrascFM3jdaVvRmSKAbDVamsgMahDvsps",
  "key9": "4CJ4YXjNPEjW8knoraby2XMRtYPLkMCcZYd9QXJXRPdjyTqAN8JaHD1eKhsWvXX9NJ2DGLdH4msckRp9XaRJ4o7i",
  "key10": "5svt6TspYABqqykHo9eKi6VFDWXfvt6yHXF4c2NsMm7PW9HTh36anfJyxJeRrDt7vdTYe2FD6a6hfqsUEL3iK4ZK",
  "key11": "4e2Z5Gz77WmpLDDCM1aA8aBPLgtPhEWriU3kgc9fNjqb27ap5d7dJQDsrk5jgAJsKZ1EMcPQb88qMD4ta44nj2SV",
  "key12": "5Dh94SV7WJzkq3UbuRRV5D4Js2YVXZYQkPfAh4mypLG19mFinLRtrcAmenjzhRr2ZkczqywYQgQUeKr2YDY9fAyF",
  "key13": "2DABcupxGwUQdUr4rBh3XREEbJ3wAPSvQNUcNfggQmnhLF5w2B27NhejngsnPFMaH9Zmc49fjHLENc2gfqLz9Ddz",
  "key14": "265S3RHP5aX86DssLFk7prUxP9tHqpNUQzn7JhkYQhw8DjRWMqriwLbnoCPeaaSUXBgwAoaSN9sVu2AJPfZHPAHb",
  "key15": "2UpoCGDoRHtBrKuHbF3Jruwhv4GiTRWX2diVsGeLmxnFHXByCSB2C1t7QSgd1Zup262AyLKFjG2eN9vDCKWL2PcG",
  "key16": "4ZD8cdFxefvR2nThrqosMbMMmjThmREmHNLZGvomcmdGBKhi28TUo7B14cpLDTPuJDh3K5xSqGGEznQzBY9rpDwg",
  "key17": "3viMRY9U5kXFTQUc3Xnm1t2CLyuciRZ3k2o2JZaUhgX4rxwakYBSqAPor1Ck5J2vVdbwVCx9JSiN4XFkXueHUqh",
  "key18": "24CbRLENMqBuiuNc5HvyS5BuVbpdjMLn6xdiHVUprnzwN9R8QiC8dee37HXgz6e7eByvDCzLcSCf4EfWgn47VBgT",
  "key19": "5FT5NKo5CMthBmmB66EjdSrYmWpA3QCVMczYFGMvLBTGPiimrp6H3JsMhKu6LrKG2KhrRhPi4zZrEYLqVxAHCGiS",
  "key20": "3cdG611yTM7fPiDUxvTq1gmTLYNFktHuMtFnDoCMxMAt8PVKDF19UGkzPAdKLnyXqLEhVQGKzraci8sgLqM7ciik",
  "key21": "4dd1JjrbB3nv2nMYnVFD5wfs19QZMmTLob9YpSqGhaWzvruBsyF4vLRyYVmywzkwE7u7NmPyo8tUgfXHM3ngpAqi",
  "key22": "349YUAk5upFNAkh9PAudKYYnfJTUXB7NWjAvpwiRjbouRmz1QXJ2HqHEDhKrHzSvHseUbiQhwTGndKhjSFebdPqa",
  "key23": "2Z7mmLkev1x94jvKaq354AiGNmDLrKbeTc8k2po4oTb5BiMxshEa8rqAyTYkuibcHZGZRbZub4Epc4jPMR1GVd3T",
  "key24": "3wCZypkb2TMSqTVgyxQPoMawiNwQPiyqcqs2kcQAxqdvRu4ck8r6AYciSWWGN7pKMcUQQM9dnK8WrADYrpozQzcC",
  "key25": "44VKjNC5YPiN6DrT7QdsbeMfkNF6xu7rtje2iVJRP3QCzURmXa3ftn6YUgu7obgkk8rEm3pKarDKhBdPPqfriLpu",
  "key26": "9NwjGtVUZXKZbga8gcdrtVpLGGd6pTUYko9oJg1jqVJznTaoVUNLSQHkUqTiVokPSGj63nrp6NiGCKnVKJAjTQT",
  "key27": "21ZJUY9zYSKnrJ9smh8YEvJqHV9aNvacGTPE6BbJUoPhrBp83aEKjFEfvuLrLhY3Povs7xNj846GvZzpxqBqQa9B",
  "key28": "4RUMMD2q76SrYfHyNTLu7Ae3DvwAP7kri5M7n6QhxH6UQNismZE7iTVyCZWE5hBz57wgQYWJ5PwrSooTSpocManv",
  "key29": "3GN969WRamjyrTWrCjRnTkEKT8qA1L8V8fWYyvD6eAEdC9YkgA3rZaBXE91uFmZkttjZLbpTZKXPiNo2TGUwLWDv",
  "key30": "3xCNrDuM9RXhHuNj5w54jyfL6KjV3A8pNou7b1Myuu8uDFeWFjLxuCAExsdXF94up2FWUQUaVN75rPLxFKtY42AK",
  "key31": "2HeAfdH7ov56SGFcoCH7pDDzF4GQ879PZGHfEjmWTQxzspCu3wyzGb4eZfBhRvVr6o61tVYQBzRcaN33MXVsiBwx",
  "key32": "4MXZD3xYJqXRfj5Vw8k42P3mtpEDW3UDhtmYwJ2fSxqLfpHio4xjXYZsbLvR6GtnzMPBPChi62drKgf7uKbihMkq",
  "key33": "5ksrVQGgUakAvv8eM6FNkA3pCfN1UZQrfMPRC3xtXLjvWGKLR9ijQwskQJAivn9Cp4FpqH98gfHeSdFgjwHFacft",
  "key34": "3K4itR4VGEjhw1PAzjj6znvfSr8H9knTPG9bYqHS9MoMyDsni467KQW1S32cntmTBN9PV8JUSB7DzWvD4XnhCxSX",
  "key35": "3wrqaTvADZbRM7vMJPaRGbQBwhs1dyNr3TWBM8WduvhxVqfVJwLUfRzQcMBXpL4d3wMyEoowonideMnG9426Wmti"
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
