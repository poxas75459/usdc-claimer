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
    "2EC3XN1mCB8jaE8FnK9cmCwpXk3PczQqbjrBDoUSA1nYW6VK3uGss7bS9kmm4j1pxdmwiPpVZxLq2akuhzG9BfA2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yyBYUDRJdhyoKXNZKgdoRG2jxnEaAfKzUCEzfaMpUWuKSFnzRdYfhc1dcJ9df1yyQmdcgJ2pWY9ogfDJGwnUcze",
  "key1": "4F3YHmsj1Vj8LcTgdBT9AX6PRsogzKpjMJsGKydFgEvy86BZMe7xg9kCGAGmtDmUK4smoQoxNuNyemVjarayiCjH",
  "key2": "5vMBdG4YiRLhKt3JVgqGBJXLLrSEBfL5AYe6kX5cPqi8AUdfngafTm3sTwRHep4m6PkKQnt8D2dfXdcvRTt3CT4B",
  "key3": "2EW34wq6kovtuxyCZtDM3fwPzu6eNFiSSPivKqbwHk361yxpLufQ7nrtTkaENv3E3zfUEVs6EwLEkUGziMM5CDSr",
  "key4": "4Anaxe2pudP4jZMVKqdUFMuPcgJmmt1Ga4DAq6U622ZhQi6wRbeipeDG8ZbJJq6YatTLz5DWuvH94SuDgywUufXq",
  "key5": "4MhCyiG5gwr2LAsXcf7uEagDyeu2nJgVsiRKZppAqGnedizTkWtYqjmqXJFkxaXPZmAttFXGVUtaEmx9aMe3mNHG",
  "key6": "62rjycDdqgBnjFf5AAMvPKHArVyaqx8FjxTXfm81z7aYgjQqrpwciuDo9KEFKy2agyW7sGg6GGdohLZdMZSzLzX4",
  "key7": "5YKgPDxkeCVELRv29KHcACGA3xQNFqFX7YDxu75Z9EeM68Re9WGaq7NWQfc4k1P7fMnqheoqbVpHCiwwK6fq1wxS",
  "key8": "2vznsQ842dV1vzb19kZk2smMbihVA2jVMtwhvK1AxoF3KKWouxzxFVeB2XwZYXXU3x8GXRfK8kCgckxprb8oe3UG",
  "key9": "fv2t1ACMqkPaymsijiyzxnXD97FoxNQDLhWR4bTaJhb7G1JHAUEx5RQQKA12zen59sTPCBkPuWqJz5WFeWgn8kn",
  "key10": "pNUSxsiHwvV3BCJkCHwZN3UZv7DbnvEh5hg15VMWom5FENn4m9BuWeJ1p5zu9ApXsqnQbhxsGJ9RpxCMaQwxWKn",
  "key11": "4m816eY2qWJ4byq1GnGEjFu5cQSsSNnm62GZrQFLCRLuk9sk4ZujVdcchfA72ZgffzCmV6ouT14Z7uwB458CdARG",
  "key12": "5uwyGZjTrSFKo5rvLapyyJKn262zDCN2nmL5SoetzfBtwjCAzeArQfE7yUdYggFC9ryV7Nhu1eVynQ7kt865foXE",
  "key13": "3XWUE7dvgGEDj5hxRVV1VNqw9FX1ds1E6AiYz5cdaLDtHT5NHf2MdkqjStHSYmah3pdhnDWW5evQgk6xPCzEHk8o",
  "key14": "4kpuaXDyxg533yCRJwxEnfWcBHtFWrAoNuHQbhfk52yF1wySZnfuX5YT1jPddjor6Jgn3yQiRDupzDnUfAAE4r3Q",
  "key15": "5QufH6v44sjFTceo9LyGXdjLGupT2nnjtrMYHsYsUAXFqDKMtQzsB8NkgTG3W7kX2N4bYaLe1vreFw78WPXL25YZ",
  "key16": "5hMjsYbBi1dxHSBnmi7nLUwZ3XG15RSBnynXqpQ7r37HzP8qCSPg1PbDXA2HFoHP8yTTH6dXxCxeWWcWTUd7Vh1u",
  "key17": "3bK5LQTdE2ZkE5ZMtbfciCtdyj9mMzK6otkeepRx4Nq2V2nzSPC5C6VayqRjEoxo7GabDxVdUcu4cutBqhTxCEMd",
  "key18": "53CKUYZYSuAwQbKH4dmSeH43xTbZ1UJTtJrvu3wp5AbUMgscvSafbZu2foD1uwHCcAjrdqUUcoAsbAwJP67WG3dT",
  "key19": "3KRiA5E9YY7FDK3z7V4X9Lh23fubX7hmdq9B3aWH7crCfMTp4V7FE81W3mMivcF791ACz9jb1ZDA4E1FHZgciG1q",
  "key20": "3DfRz2tyagYJUG2NGdUM8Rpi53ei9c3NvmjqhDaxcXyPibqataTxhm9PfnVBENx6AdGVyrSFWbnqWNPG7oshpEuN",
  "key21": "5wTbhC4DAzqXnvjo3gjWVmXxMNCrpSPvFZfZ1TeeRWuMTJxhapLFKkSaFCUBkkwrLiUoaMgno78jfyy76nCtjMfi",
  "key22": "2Pqk6K2Wx4rc9monrwhN4LmE7LqGLUdJjHcH44oJ8ifdxfGt1Xfv9y3rqq924PNEjmgBVcQuKXXqtWrQxeQ7sbC3",
  "key23": "4krn9FPLVgnE4CTAXincHtbpeRcwsoMzeAn2gGj2jHd9yN5Y7DmRWmvKMXJHvyhiQnQRcquUWwUj7QseiRDVnCVk",
  "key24": "4S981hVgYhqwPiaHwYs8n6bEMfXmK7YC4UX8HPBTp5ewgW8kUDz1gtsgU9LNvUUn27uKdAzvcwGdfJAVHbZzKjkr",
  "key25": "51aLwxBU4aNV7bZnYE3N6VjMWusxBQX87ZJVFpJW9VoGEhGPWiiAz7SrFqoaTHWnmbxRSLhGZhPGdQDgzBb971Le",
  "key26": "4evH4PMWNSLgE284NCbezg5cs7SJgYY5rLZjwL1NtuZU6kDyx4vS4drushePnf8eCuube6tKYfqAPKcaVuBAwZsv",
  "key27": "shJ5XZuxWFuV2BBUKRQuSSPikaeqwig4qWWAwYyb1SBjTtPRkLRpLXzSVbBE7627K9whdRaFb3i6Av94bxfZAf8",
  "key28": "4T4HFPkApFTC127UWGtduV8CrDt62fypYm3w9MSgKAM6yswzKsqGxXygoT9Zh2Hwiq9WuxM19QYssFtrzVrXH7oZ",
  "key29": "3RL3CewYTKe8c8XQh6sDK9uk2rZ7KZtCM5nNM7UUdiaaaMHbVJYxNSH5DThKFUMHwgByQssN8KA7zKwnCfPsUbYm",
  "key30": "5mWPLgBYuwJhbSZ1MRmyhcmg526iDbUzez9vhCMyPMRLEaHHHA2Usp9yNF1FNEJ3g2dVyPHVSKFaCXYVeNXS2EXL",
  "key31": "3moMUik5mXGwAPSfkz4KdQPL4Tcg7MP4oEd3PT3UmK8RcALSzcNe3EmMBBYCGMd3ggStZB6du3hB4dzeZDFxEzLh",
  "key32": "4Cbx9vfuPpavKuL4zqhBzsGjpkRBYckuaa5oCrMibrLhiB6jF2vq8AZZmwzs6a8H1topqeNzTCtyVrSXYipuXFr4"
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
