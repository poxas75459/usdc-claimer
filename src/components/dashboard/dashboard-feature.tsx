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
    "3RQ7jAvUpiVV8QrUiQY3Z386jPSuQ8gigJ2mNTQoQhvAH13y5iJifW9Cbe5FTEYQUFVFHtt1KkSmvCc7hdgAV6gq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Lbt8pMwNGmQAwWwDjipAc4n4k6ZXGHeg1qUz8qjk73gLjygUvhzSjY4c12bwdDZ5FmvXpSJwN36U76MjVHPRyPH",
  "key1": "31F8zosjaWVwbooa1xbUsSufzTbAkRkzrF8j437BNJ4DAjFzX5r8pemPuxY7PgefMgSpT7iaYXqand16bAapmPvW",
  "key2": "2MScLdHumy92AhRj24DdthzvnMwKmcFdNzpLfKudEg7NbaKbTPf85Dp2rCJfyzfTrskFXRaHSzdqA4VjBQjNDuur",
  "key3": "5DTorkhp8K4iPzQyfN23RykGeuDgYiW5z8NBqZr2rmEY4UoixALLNbWZNWDrECa8MzfCxt9aCrwipocqNBp5RVk8",
  "key4": "5MV9pTDgt7Y91mPQWUYhANkADXTSH7VgUxATW9HJc5gnpuwLCHtYU8DMdGv3AWsnKijgpQqxArZWeqe2aWgvhGnP",
  "key5": "3YVnzgw9GF9weUT9KxQt8RYntskErZ3Q1bGm1f8FNVdUFhwnsKT8tBtZbCHsfkj3P7F6crc6X2bQQiEkYamipw28",
  "key6": "3GiLKhjtgHmjWPx9TKDSLFtx1dyaVw6tnZ9cmCRzXXU8Bxd3BZHKaUtuPBM8jw3Pu9Xj6yqxRZJYSvPpccnMkewg",
  "key7": "4vLo6mNhMCZX4X2BwKE4TkdgejDYSAzx8Qzz62PSRhC8srVspm7mqexRhi1uTspNopC1DZoH8h19pqDAYeHKsaEz",
  "key8": "5NkdtvNxYNYkwCUxbDRUgjKbLpdBhEsqbz44BS35RkXDGAAVcdUc2vLKqcNNrxGXho1AkZQJaScqS2E7h5CJHtVi",
  "key9": "keREYJbJ2fYudP8vQ1s9BXBLKMB69VspcB7xCc2tc16w89Yvt2PGdNS3MiNHtd7H9ZnmUbY58QASbnjBPr2StVv",
  "key10": "4gYoDexgwxA8rozWvhNK1Nfa1mMUsmzaJnKN9wYLkLMo4icxzt1uUqgUWe23JuMFUtfw9aE7YypUZdW6qEQwiSX2",
  "key11": "5U1UGo67hTBEcEu2gEH8yDXsnyCCmVRGF3PLGQV6eWb9U6phppadTBd996DboUeW6Ld9znUNEn5Q9E47FFLUSGYL",
  "key12": "4wWH6WLgfRAvmzDT62fAQCivpzR3wSEVBZnHTd5QiuGsoYw4MKf36FjgZbp6UzYwRYnzCoteyf3UhnQvQzZUPwVL",
  "key13": "5oo3AXwU687CqHvVhcHo93yS4GnUS34AwEyMCBTGgmPxTyqAvfrHYLFw5w3mjrc6c8xLLQsLXSpxTGWzRvzrzAGb",
  "key14": "37SsGNpZuVfyVqH9zKeR6pX4rbm6tYa6HDQP76zoqqPNMvc1Erhzoa8m7EoGPLQSszEmbxrPD9unEprEfgPdvxGt",
  "key15": "4u3fC2ePZjontzyNHB1woVwJHenQNV9HZvqzbZaqx2ZHp5T7xdGMAAEWQFwXqjrUiBSy5aAH2QAYvJrCjBaVnkjs",
  "key16": "4DcXBBMtv8TQndJiMyDnRZhMm6L4WcSmHroWjX2fcez89ZijPK7cBhSJhqqMFx5K5J6g8dC44ajnFYe4qjZgfSjD",
  "key17": "5tQggtHDP7RnzMq7TAAeDL8rQoLLEwGAkCGcRcp5EbXmK1L96M1srb9vWEXbAZr7RVaa4P5KNNfKjHXgt1HxCZqL",
  "key18": "3CyMci7vfkmtZRBS55TcgH2SC9XVq6dz4YHFADaTEWDcqieQDXkw4EtHLJeymMgYjnEC2oJEyuVA3F9NvamfXn69",
  "key19": "2C6hE4g2qe8zsRrg4BfXQBjaRa8vBRoMSzfXXBSN2d39amemqJ5xQtnj9xxrvC3mTPg74ZnGueqThvsRLetQ3UPE",
  "key20": "4vpoAcswTvzXjrYtQvBVYJejDEjwFnhWevDtVLorcAzT9Z6EnePX8G2g1TnUZ3DwcNGgi8zwCCZRa2tUJm4KV8QW",
  "key21": "zuEApx8ZwqZqz4piCV9mFnAvzukbh9z2fdavAerdvTXbpQCXMCRVXGqqsAnRpvysFHRos7VvykHjuRpuSQBN5kc",
  "key22": "2Unrx8BFHWwFTxorizt8i36PGmL4kSy1DiGjEvirtVDPS7rty5dZwNJbRftMCqX6iUe1kvEek65Ru9Ke1SRq28bd",
  "key23": "4pHCV6fo6tjGyUiQMngx3rrARkPkcanzcnM7AYSAPLXMHs9wrkU1rdCYRSkRr5Wduc5TWai42uDVSPxE2QyXV2yB",
  "key24": "3NREod961i3i3ypka9S3B2pybTREmowEi8aeFytdrxfgrjvb6Dp1JgEUCg2QR7rShxDgzAPUFUwBaDfMpL5BJBvq",
  "key25": "3RUoBzbb8HpDTvNnffX9uYjxcXBKhnmigBko3tyYjTd19925w2bmWbyb7JiUEFrQuZQhEZLkFJcsyU23FNS8wK8d",
  "key26": "5yx4VXV2pUYaCugvyWb85YBVHjqTzBa1PKAnHt4AqdoQV5hQ4wDcv8XLsPtsvekXvDTcLerNB6jMismRpzgjVCmL",
  "key27": "4pym5U4qL9r421LrDXM3g9n6MfYc536HNcZ5ChLofXGaaJpc16d5xMknGKgk4Y9RkTnhVzp3jq3CtV3rhQUjEtce",
  "key28": "3fYJabDbiDxeDdVrButiZsv9asjqnrW3KzFYnDpFRLrbuZbSSCcnfCc5AoBKb9huBjCZ6hSpEgZZHZMZ4AMQP5kR",
  "key29": "5G7RF9mP4fETiFDM76UNiWkN7fB1HmsVzoWUZ9bUKSTJrL22kVSxoLEC7z9wUTHYySzbPXeRrnhUwZa1cLcQ5CzX",
  "key30": "4XWm19nRuJtqdGtRS1gTn9ZWKwpu9ZAE8y3PDBkgg3Ar44c6MuxXBtkX9zmioBwEDvwRr6F1vV9vhmn526NiXkjf",
  "key31": "4oN1AYWJKch864w1o77sg6nPan5aFcuycNiMGQBhWuuGW9YoJR3EVfsPbNsQjZBQnkFwS5Twfz9QVXBEtshWGd6B",
  "key32": "273WF2Ls6wDRDerBffTAtP825JDRqhvLtx9zh1A5pm6fcveXsMQuMyDLmDs7ezhvNV1EwgQJ2wdhQVCtAqLFT5ss",
  "key33": "2Ex3cW3Q6TVQopSbdgiB9fUjsrpMbQauscvHVUp74J42Z3ggyUBjk3q8yPXCVZTMJoQzbnp9huujM5AePyuqaRhU",
  "key34": "4eDSQdqXQpzxik1mCGV4NSNx5ph673xHvgXGoYRuLKhzd9knYbY5ztWU9DaYgtUbZfKcbj699orKBfCLx7NEFxyn",
  "key35": "5HbWmaCvb8qfLvDYbyvr5qyK3ixTL2BXcWfWihsz7GyQe7tKhkVvG4m9S4NnnR9VuUAjJj3WHAjwqWHofbZzd5QU"
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
