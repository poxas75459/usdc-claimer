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
    "3Wi4yWZohM8PfvTdEikNz5WdPCfHcJ9Ae8b2bdq8xydBemXPdsQpo2zgHnHJf7RFcQK3vVnWswfReUhZuEPDQpd3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LYVPupPckJj3zBp9hBNq2ToEPU4UpVwjGiH3C9pQWUFJpw8HSrrM6LR1v4s1A79a9tQ9w3UNRYwCZRmt8maUzdp",
  "key1": "34sWGW6ASWY66VWwWWLeXRh8YTYFpUZoPTtoD1im1cghc6X5t8aRfTyyJ6mwLTtaT2cEGcFXyQt8pUyy9i2SmKDz",
  "key2": "24KMxeqcAWLrbQrMRhKV8m1e5q71qYDXbkUu5e8Xkr6fziK5VnceWsnGUBReCdorzqC121mCnSkRVXxojRugSTY4",
  "key3": "2ockNvPV42QKAyVNyhX5efsvQ4Yc3FttdGtErEinDMhAgEG8G4gq1dr8DEm1wmFjj8BvzbJBkDma7zchdNdf8nTu",
  "key4": "5PbJ2dfLPuK25NkhUJawMmYa7EXkqoimxYvXoPiwFGbupacWimaVHMJMEJGvhTKZAh1XcAMuCPAtVSYbaE3XXPcG",
  "key5": "fZgn9Q9MhXhyVTRvBt5kcotpb58hjxqDqMaGrs4Lz8T9rcgk1H1FHZFJ7tyRfqwW3jZzGXChTqKMaY7vRaGoXz2",
  "key6": "3A9dQqMAP4HYVn1ySy1HbqLWvaF7SSmuM2poX5vhwT526HUbedDUZvwj88S1iYMZr3zLytmu7TFJ9Xamdtah9rUW",
  "key7": "4R7qyxyCNDysqNvnnnsjjSqbVfHcse2p1UetJb3JxNYNBhR5RaiuBqXPvn8QXjJzomQmNydLzQ9HeeCRjgsqi36q",
  "key8": "5fdS6mVsAi3ifCV5DWR2VCcDXU2mZ8jSJWUYkBy6pVBs5EV42Z1Z4KPPmVeBkGLAbN8gHyt61fsWZLZSEcyu58Sk",
  "key9": "2t3mueYFfSeNLzD8nmNKdRSbJm167eAkukVuWPqWBLgbsRH5SvstKwi5umLCddMUEnDTQvjSkwe3pDC9idiu9zK6",
  "key10": "ydGBjytj9pZnFnLPHJf4RLHFE9s5nrDdRYUepLNaeXRJFD6A6atWTYzYJKpbs8KQmXYHJ5g5DRFDfPa8UhPXgHT",
  "key11": "2XnP4VpJVYPLKYwnBANRWPEsZ9DuEVBz8c144ougtMxV55JJaVWBXRegy2DxoJ8nLLVMjrPhqdwokLT3drx3MvD3",
  "key12": "4VjJzcWmpfdESPB15CCtWYQRXhN5u2dVH2PERHNh9JY5SVxRGhBa4fst8BvK5HkaEG4vxH6t4FE1XAP2rXpfF1dx",
  "key13": "255e96xgBoSVfCaxw6XEyiFPKBevxbsoyr57acCxm7W23C368534sfjPRYqwBFNQtzkFkuWAPdW1dTLuRZ33hAkc",
  "key14": "2HRo4RpS3SEDzKFZ8pqvc6KPYChZfGbpZBBbFAdYwHBZ5Z1zpa3NqMWn3KqMQQNa8bPUtoau3HuNQdC5QupmeQtc",
  "key15": "5YR86Qi7yZWHyEQUDDLdsE7zn3HYEtoYxuWP2nBk4KRUtW2LynVpZpCUhkB6k9PLgK2BTZ8Yeiv9xMLQS3vCJtZ",
  "key16": "5BRmT3myiuJmiwzJN15QHQpjX1XL3EZDTVjeg7YqYQhgmN1PmiQfwVvTKASq8ic3uS5KDzJv2ZBLDCkNnPEG4NQU",
  "key17": "4R47QiW5duJo63CeDhehF8R3sAc1hAa8bXW8MQrMkEFs8RVeWztmcpFDDM7KHZVHw3tEVP19cdryGLAJhxkdQf9w",
  "key18": "P8J62UKYNZD6FqRNKw395sX7amddncCS6kCSnm48j5JfRof5ArtShfNYV2hC2pFoYEWAKJrR3SZ1Ut2paGXcZGR",
  "key19": "67HdSxvng7Zz6omLPgz8nRWzWZ6P5jSD1VbyiQA5kdRKjHm6PFdmZL9CQg36EPehR1Asz791SdWYgw9yHYXKG4Db",
  "key20": "3ecaHtrSfaLeVEquGN9m92HdCfMgYTkY2odFSR7YFvYmDx15snzmAC9znbwoCtzNGS28bgoSqAxLvQuVYEZDr5Bh",
  "key21": "3xgxfxT5SbwS4YJWJDe6td8YYjHoBXn7UtMTeXUgRpsBuk2TWB81dbKsVA87oSjgiiE8LYUv4W2mnThHPQvRnTTN",
  "key22": "3ys6wt6gXngujyF2JosJc8UaMdJn2Lh7r5Mx8pnziugMCy6PztFuNSbPRYfS3RbbAXM8exLbak5EnGp7uPiFU9pX",
  "key23": "2eUc96RLac9vS6zD3zxZZBHmr9emLjzaPnyvCqKtQy1LESSfCth2KPW2tRzcXTnWtrwd7iG2sey1sbdVZskyPq1y",
  "key24": "33x6ELp8CAR2diVoWXTkgBBg8MPT1mW7TP4eG3eVkVBsrUxjcjFSVscPXKm1A5LzKK8RytwppoM8R4C4Jc94K7Hr",
  "key25": "2zs3tuhwKtRFCbFimN23PsTEYKGEFmCrqVCZgaMfjqNYM1z8g1gR3PqxTy2vwvqpNLpNQxheGAWoVkeMi4Bh4Y3Z",
  "key26": "2CSGHqPMFonR1gLwhGRkGgAZoob22WL3zZ9nTa5WksFgPm7KbkfuLBd8ASitir5M2jrwVWt9cBMFNJAHFkPb4TyE",
  "key27": "3KbHeEx6yv7FQ77QKUiGycUFVxrYJQpBUj2QNj8sS19bfngm5kgZsh7qy5mK9apxHRNZgaj3yH7SWUAJkos9ofrv"
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
