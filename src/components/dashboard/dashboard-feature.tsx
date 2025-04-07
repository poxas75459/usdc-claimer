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
    "63Vqhby5ho55vJwQ1D71psviHcr7QczKTanwuXTHHp6TcUYdxaYQZvWKmDYmgbGFZZaNV8Fnv9JfA7chxjYwje9Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5t3v8cuXHbBZ6D9xQ1yPjZwVB1gm2F9ErTBjpN37jHHSB2EazqQ9sCYrd2cCsQd7msHqPTwQbNh6cHiGbZvpUKVQ",
  "key1": "4jUXDh5FUw94qA9WeT1iht1AKUcNBn6kdMnZ6bJH8yMAyPWU4qDF1u5j5kV3DucpdcE6s8TdaUt1zVKh74cwk5F9",
  "key2": "3tmSWd7JNfyHNeGfa5vZ9u6KV625cHSHjJFoY6n9iCY7ziwBaMEsUq446Ac6vrjmfzWbfSor9Bo8kYxtyNFckVHG",
  "key3": "58EkMz5ParB1QdxfvkPCbR33DHqSKdTXVfrTyd46WjCMY85TNUx7Ry7hvrHe9QvhfDUUdREoSQTKKo6t1Xrk6ALY",
  "key4": "5yzSs1rMkNkjyDGAQgAwGDn2ZtpSxbKNrYU7RKVq2Xe4AHsq9W7DNtYybP3oefMAANPDFPPSXV3KQziXFEUPPEdW",
  "key5": "5Rd1vPRghQpcEoqnxBFMVQkTRVxmG45evQDTNcS97XTLAc3C6Fin8EThzcni1LpKu6vDexxCfFMbLNRZuzjNEbnj",
  "key6": "2henQBvQGKUze6GwEjBz86U91Ym6DM8rhTo7z25mRo8KG8fxeK7BDMaeY2MykhgyDUUKCX6WRrc3kP8YweQJCUFj",
  "key7": "3RzbVJCtBgvJfuu5CHcmLYSN2pvhpcm9kgGfkRCDkxb1cBVMabCE2cPJo7L1HUBqLju2e8bt5kJGhf4abEkRzJ2A",
  "key8": "fvZPYhA1ytNnsiPt6Q3x1fdTeHV3skCcTaf7dz9NUfXtz3uS5Bcw8vMy6YycE4nNpRYGnXdNZWUwV8n4BPj3Hzq",
  "key9": "2ph5ufPY86cRANS4xEd9qhKhGQsQ83nA7NsNBjdKFLfPkb5zH38u8BEeQUo6tYfkUztgXxQCyEvvaBd7dbJFdVtj",
  "key10": "ULTYfewnxQenV8SuwizN4Yc9Z7TjbKN2KtKZJ91fvxTfS4afpWxgkCNvCzcw7CY4HSQhMEDNteqMDtXuQwi1ALf",
  "key11": "3LcHfudDBfvb169FJQWqR2tMuPrbPDGQCoWMbgE1rECjn3foUiEDWzsJkyY45YyxrBo5sdDW53trGsZan1rjLQyR",
  "key12": "4fPPc7qEpu6kNNyEfoHUyEctaiQUpZevVxqueWVssoqRFw5UaQFTQ3PUuCjv4j6buA5v8SwWSTqjrQw8aCyeWWBy",
  "key13": "5eaWAgvhmhnaLcBFewtVHKz77jHrTkzbHxqAd84cgH4BXcHepk4iVcuoKtnLa7kdUJ4UmZ6oiM2sJft2D1nhWaur",
  "key14": "2V5uxeTEHgK2g9R9skx5gC7Cyn5hdFv1MbEdnmoruZq9PpRnshehfSVp59eYbCk5Z1QeW65wXfJkmKFjkVCsUpMZ",
  "key15": "4DGYknsTvGziJmRDwYqpWzS7xgxobcxCruPjma5cDSChaAiPY5eiNTPcX9RDMnV9sdfFC2ZnbqPR59RCPV6tcnBH",
  "key16": "z2zu3pKVyLTd8titXw18fXwapcK3QHwcr3RqM5qGSJCJDHT1x3nb7BdirRJMGE9z8eX8RE4uTYdcMYXtTtbfwog",
  "key17": "yyr6r1BcccpmZWgF8TzzTGNedyWrcPf7DU9dRuZ53aTpHC93zKwDgj4em3tXf8hEVrKb4EzioJqh5nMsT9gDjBt",
  "key18": "42M5hy3x2ZeENBHFfjATYjnDVCskoN42aNMYUGBym5zud5oWN4fbFsW9P3xptmBssxRjgEmUw4Z71PoKQ2ayhLBM",
  "key19": "4RQRBxcc1d7MFUusyYNcwNSHxwM5CE9LBbGyGrKb8514cb96xvZiUtqzkqBaMP3iqktBUD31CPT9qDoHb9f3W6Vo",
  "key20": "4beXsGR2iqMK99TG66UwsjE5rq2zmp6ruZgmcCTdkis8zPzCSzrPh8HipCBG7uHiYdhw1cdSeT2uYB994zhKn6iS",
  "key21": "45mVrAxH23tCcxjVP5GzBNyW1VZLZkEJq6enjZtY5NjuMDtTpvD1UFhXNV6DgQEWpWeQrxf7qvRySRV2SE6Ua5GK",
  "key22": "46yFHA78VvGRZQDeeYZGgagxv9S9sLQHeKAQ4w8EqLTxyAaFCjNwuvYELr8zsCiT6DfvA9K1JFkL72fpH3sNz7xG",
  "key23": "2aXTUyEovdEExmRBF4PgG3mjh5vm6sP2Sr86n7pFiMNAEKXdicjkXYaAPe6tGbK4f4Dgmvzd28sRtvgcwPiigLou",
  "key24": "3vmgEvoWUai1tSDj7WmgaPUkxW7ETAheC76BjUsLaCLfjnDdmgVLBpNnhD2wKzgez2NZuvw5iqVqcrYYqitC6VAe"
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
