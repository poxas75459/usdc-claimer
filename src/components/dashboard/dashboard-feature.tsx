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
    "5MwvuaTQtbHfuk4SiBWuidCWi7BYuX6AXwX3akD9kixPY9QuittZ2PfHdpzanFJbpKohn29NfoR7bEg5goKAARoG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rV6db8Aq4tHoD4zyMgwm2gnqbFB4ABDCuCZqPrv24p176uqtZXEkHU5G5vJ5HWG1hyh5QMh5G2DUGarbfV39F2",
  "key1": "2UNC47wn3T1c99HmYHUGo63gf4mzPoPFZZnQJLJkjtWGWdfvhAGq4egbkganuNEMvQEgP7NnpdhDytLetaEdmvLH",
  "key2": "23YjKZTXveQTityymoqhnEms3GVh1nPVXrTiyTMmbYeKE6pehP7gTi7XBML3vTe9pehrFnDF77E7S3Uw6pV9NU2T",
  "key3": "3Ju6g8rWZm66BnWCcLajHtUBQNvXhCMjLC16B9YmowPw9PfJewwecfdafPTzAKs1f4xEX6XrpQabGeZqiozgnj1q",
  "key4": "iGMkxF1nAhfGKysmiyrdGDFa2Et4jG22gnMgPDvd4iP6hGUVArGcWTkoUtyzk56CTG59D5VBmhzxkw54i1FWdgb",
  "key5": "67cH3yGSQ5wBtcp4E5H216kSbP6UqwzjPu3YNMkjnZUVy9mdzNcQDEQ17X5d6ZQ6swq6eUsPawx1we5JNdSauYRo",
  "key6": "5Hpfq1tAB9qXH16q7cvrUYD42YUZ2HMV3HrtKyPLjKjVzRoz2o9Hq5vj3MkZDPWw7oMpZoAxjW3vZQq6o9Rwr5Am",
  "key7": "2HbKYkKZV7f9aRYWY8NBQPm1uLR1VgqqEaKJGhnu4XFEfoPvh7C98QNog6JJEwxz3SduDtvFPMACsSUPUVsUrEZF",
  "key8": "4oAFrqeFAfMt93dcWJABoqTsf75tRVoWBWQe32yycr6x1W4D5QdkthdybysAewRq1tpbb8KtCURfDR1SHcYjVKum",
  "key9": "39Q8EqEKZHDq6PCEjfmuHB6EXT6Tg43W8136gnjsVkJzXdQemRNxTsB9tLSgra3h6n8Bscg5tD1o5VnMdE9EwVeX",
  "key10": "knHuyZaPAYVJhdKkwirGq3wYbkGsxGKTt5KHuSTtMErcNhaXHpDMTm497BLARGeUweG9rY7XB12cfpgifEu2jLD",
  "key11": "5rReRYkLQLCExhJFvbHvqeoZpDwM9TuHSP3GNezukWp1XUa6mM98R23ADXApWbSvUxamSCGmsjja8p8BzrWuvRrR",
  "key12": "FQsNcJG9ZqSXtuXULbDy13sDX1ue649BAVEDURNWimZXdZ9JppPVP6qCfPGVphcRzEvAK6LSGiQB3zEtWYV6WY4",
  "key13": "5bfPq3uGVd6XjRdkh14d3Ha45M6Sh2g7YP4rRd1PSgtTwbdd23eNDUV6hcJQXHoNjZxH341mW67qnqfCNeqBvcHt",
  "key14": "4q8gPqxwvh5EWbMGFikPq4otxBxpPp9fxhMTNLhmVuv7h84pRmikdD8cR3YzEYKKDAH37w5tjcy8YCSqcMx8GCRk",
  "key15": "LtvYvfroTjjgqmPx7XeCeVth8yVfrkPy8HY6o5cQFgRP5QZXq6hrD656fnFw2AXSFSnH1RmGbEnweurpF9uKVao",
  "key16": "5dsFnPzka1CdUsa8dBVtrjBcunTPBJk4zrzEvazH38qvaS2tWwZUrqEEYFjmukbHNpJErevXtvQ3azA4eZHX9fLm",
  "key17": "3yYifoGPt66eDCA5T8yoAQ3TE7nQNRDUZGkoQvmhNnTb99ZcQzaeH7zQb5NqombL8sSdULNJo27D1vtf7VPFbxn1",
  "key18": "3aMS8HZYbmXrbQh8moFvUjjDxRCzrWSn9GYe9d1SBpU21hAkRLvPgwB5tiCqWA75H8fPXpTRA9xFVzp53hGSh3QM",
  "key19": "tHxJ3o27e7qTm26DvtfL5WmhauhViB6qkoedJCXkR4kBefqMTZE98RJSViDFgP8tMDixjcdPmDfx63yQsyQvHbm",
  "key20": "5qyCUqfGJr2NPcZBK1FhstpKsV3DHyVB7ybHA36MKB34HiGxkczXokYCxep5HvaCc5DRvfr5rRrh3dEJ8n1JYf9C",
  "key21": "ESQLxxnQxvUJDzPZ6SogFwRV4EwsmqSREmy3n6gD1YVGfamb8pSD1UFziUQgcishR53nnXng99tQzMniq8Ke2Pc",
  "key22": "3QHTsrGE1aECKXEkSR6oiF4qZQF7zySYTmr7u5VHcJrLkssq3iBvoz37eqWsbgNmsjgjbw5XjA1RYoqEBXdLviJn",
  "key23": "5Lj6zmDk9yEGPFLVp8eiFEraiUXoE9sMQdRoajSRm9BHv1BUnVDsXbz8LkAk1F9NabcDLZDAbDWsNuSqkC87fgtH",
  "key24": "4yBzW3L19L2RQQD5UMjgnmfmJw5rTZNTi33CgxUSGKmhd67YiNvJqfvWysjcRZUtigx5G2tZPvsZtj52Rz79CepA",
  "key25": "4B8UKg4uTzgpMfR3TbRoop7x6S3e2dmjcWuwGkQeZUPsGB6f15zFhosbCdP4PbcTggPoDpakc3zBFbgxGPD3EsSL"
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
