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
    "59aKmy7ei68oeci3kdCnBNRazPjuMKmaqLhZaEre9RXqXhoaCmtYkFZZ9mqq6DtHHU2gRf39xeFpehX3G5sbcAdp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fSRQKp1k471fb63xcWMYRS9aALweA9sb6R3ThJ7ksds48RZX1ATqjiFioToeYPSFmpbyk3ubTtwhke74FfqNwPZ",
  "key1": "5mS2emNspSGtD8TzdHTKgRFNRsh8k44buVX7xKNrbQidtGXV88HD5XZbTq9cAEiErNoSvWbFeSLfsw2Aspk867k2",
  "key2": "63dY4aUvm78sjfNstwL8MagiUtAbAXFK54132aK1hiW8QvYxSDsZdqk1NCBcacaq99UDsyXzwNnF9XfFnB4TS7Kj",
  "key3": "5CfNdyc9EnUZneFw6yiccMPfJsTwdYCCjwXawnJUSHWaCp89soEj7sxScjJJya9hXQEBtsGsnsnGkW8TW4D3hMWT",
  "key4": "4gjoP192MvYsAxbwdWFWESDnwPcrMMcREDERp9NaSRereCDJ3Lm5rG27dSdQzFV3yEGzLWGCwYnnRkm5nVFs4Jiq",
  "key5": "3bdvgx1UDFWkkzEsup5Yx4PFEJEx3eisv4pDS9Q9HqqDQm9nNU1YTK3GV4Uzu7BQ8iDTiDjqiL5bRQjcsuSo36fm",
  "key6": "2JC9rV5Zykxh3WunSZ43HZfZmRUHXwPmbdUDsZRvyxis2gnHoVrhWg1dM8w3YyoD39rHYyB5dHbQDThQ9LsiNKb8",
  "key7": "5gGkYr1dTyNjG7AdAtyazrXB1njXRj524KtGwrZep3vTBMQj4eiLcVkQ3hCicG9U43cME4pSrRu7w3o5jhTB3jbe",
  "key8": "3biULHd6HkL7FaHYmrQTYcLKGEUdMbVNg4P2xrjMQpfMLKSZTVdPrHye3PKbAfNww5ejN4fHxbtkgwKSBVrp8CBH",
  "key9": "515CdFP6TgzFdBEk758Xer95A39sdHSpaBUTYWt3SoEMxcRZfcJ1p2EPbor2363JgnzJWfcsxdCEakrnhRBTLAZz",
  "key10": "3LYKzJFkgSbrazdwT9cmu7ds6YmeYixQzpj3BrWLxrnxb37ah5FfCaF4LWW44foGxnk2ZcaaUvGmKMXVrtNAY878",
  "key11": "GVUZCnJwoUNLZqPnu1WSm3Xo7TvdvoQzmGbtvvy8zYSmLt6aEmEHmyJC8hYfVhzRvtX5n5niEn17T37d2H7y6mC",
  "key12": "4MKCcT7EFwUMAXebhQsiJB6SBPmyoykgG5t9DthNb6vrh9ryEaUtSrqurkW9AyqbwrGdfjJr95fzV5aakL9FMbPC",
  "key13": "5DEtCSqZ9QNnb6v4oVDofWPReCGDWYUZLHK3VcMjBPpC8yr7F6wrNWWK7Zcjfbg3hS7LzTeJtfzFpxDYMK2PKLGT",
  "key14": "2yeHarGycUV1VSnXzQk47RxSZAjrn8mwNTXPq1XcwxB6X6tAbXLA66epi1kWQiGEMYz2sRrDdfHw8idxry2A9mLa",
  "key15": "4FFWHmb3SQ5eavKZxnz5JUBgy6PG16nyQSBBQJt9TyBrSkdvkNj7uqG4mgcoiNr2YJ3of7aZEbNwDmD3Q8gSQiuB",
  "key16": "bbpy9CAyiDSDY1K1egSkZHajUDd5owokKfe2NGX2kwets2c475x6w6nqnbLynBTZhDf7j7Hd9yTQus7nQAwcS37",
  "key17": "3sfd7jXGe1HjoNTyq8h2aijPGL9JquFSuaixvgUbsHPfbWPGMaKTf71VNrWFqDofEGfCqwLYAsKvQMBhzrj3kES8",
  "key18": "b6GkQwM953WdLJLuURM91J4xLC1kQCAtQAmgF4dgZmBWjwMN9LiC6YwC9wcPXvNjr22Ca93xjMyr1iv8Z1B7sDB",
  "key19": "tWBxqRKDh26eG4F6JxUAeDLdJRdirBuSoTbcaShMicojd6XHxvDdmJYugxLoKBewEXcz8gyd5XBonEFP6xSQTEn",
  "key20": "5zCTAE5rj9xnd5bQH3g5e5zRNMrBEkjCLFZvhsGoT6kzVHM3AGJEXxbTCdoeoV5rEw4nv4XYBemDriKjGhFUVVTE",
  "key21": "3cF9jPaiK8t6VfTfKUNpBFVTfnWas2DzjnMyUGbyDjMdVcheCZANBQTct8dg7bk9YPsJrkd5AZWpp7P2wb4ijb53",
  "key22": "4jrnDHZVL6WPkiDqMAjEvaGLDJrbgcb2XiRHDHxzncRf8Qw4QxNpURNq1GR7sBaDnmaZ4Xai6g2xCYjiDvAfMjx5",
  "key23": "2SNHaLdTUR1UtjumwCnNHpmJCMbQRhMNJfLYakdLipSR6Myzu2PD9e1hCN3o7JJhTHBDhytFGcQhascJjryWEp4J",
  "key24": "2NYtfSkeuhQQXtWnFN1ai8crZET1M7UdGbjwq6awsQU5emSTCjwQCU6qRCN1TP9R5bZbMWF8jZq7TaAYKcUQ1C3L"
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
