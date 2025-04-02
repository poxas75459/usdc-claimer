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
    "5NZ3QTUzuxYZqdadhz2AqBuNinNNqYSV4XSHhedEphXdfJzoDUHFdUxqwNiRCG6SAuzHkuSiHgJXnWDKCnbm2X4v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4trAu5fkXRo9hgU4z2Mx4iruToBS9Jd1VChjs8G3hkkQtG53dk9FZB5jJ7dUrpupZBPFq5gC2rJG8DkvsbzXF6A5",
  "key1": "JPZVyBzXtjiytSDk1DEXgN9Sm6dWRZsvsFmMYuAjhUPjAxzvLBjBnAzcFdmB9c3mwF42yqFcEAwCNbcW1oHmCtv",
  "key2": "5wGdRYtJDaRhFFXrvR9495PdAonTPf31h5fdtBr6wdAKQdHorr4pmfmGAdNE6mM7BCTyRged2FXJPByHEhgY18xF",
  "key3": "3qAeASS6nCNmtiJfMrLr28cSNowzQPK7VJuxhmfKuc4DModKaHpwu9z32gaDq76e1jX6fUb12UkneWXmjfEgm6hV",
  "key4": "aYb6V7nxuNQ522Lb6ZdF4CyCD2Aya6Bpy27GnfVsp2o7GG9zxRUsKZaWvQ7rpLV9YQ1dJGBWxgoRcb9BNX6KyZo",
  "key5": "2ocNxXjxeRktRZyvdtkR9VVkJL7osjnSWEm3Xy29dYVafE6vjdh4rFV2Va2JB18AJu4md3PyN8RYks8jWYNZ7PgH",
  "key6": "DnEJt2UWWwRyaP2oKxRTwzdrogJEQGMPX58dmu39sG55TVkHgBq7CViUqQYDazyVzH1HLrfp1qr3Q6e1YnsZoMi",
  "key7": "2brq4tXP6dhpnZovgXm4PhzW6ZhNKopPNS4UbBiZA6MFBt8wC7WW5jzqbwBDgMyGGASCpqNgUeM41nJcaA3de8xH",
  "key8": "5Zfa5WNoz4e1mf8beiyQPt3zVbaYtjdr5JcskUPzLKTCk5DCiY9UxkVqRpVALsCRoQkJRY2d6nV2ZPdL2a5MvwYZ",
  "key9": "3QE92eKqQScnCQdg1HsCs9B685ymk18FsYxrSDrjpA33unbLwbi5QP69LBtHz1TKJ2MVndVpqqXQVjVViHdyooSe",
  "key10": "2pvZ26hu2oF6PeqoNRvnM5Cw8QxoiGQoKRzKrWiBD1HQjyuhPDNYmuSx39vuW2zPXrEvaWYwNuAfsbu4p9Kn36N8",
  "key11": "3vFopwu3xTiMri46Nn6edcwdcbP9St6A8nF3TobC1EShcrYYZCbqWAFqYeXPDAfCVy5B4weC3kUbRYHEfKSzvCaJ",
  "key12": "4tdepvGST89dvf1kMbn4yU4Vj1byxtS6WeLxwK73HTtnNeUn8KgjMYX6whKukRs995SctribPQEdAYTVSUG98BNT",
  "key13": "2HW63kB1i5yeeCRQdnmLQrhFnTyT15zBS29Y7ao5U4YULD3Eo7HBjp2es9tWmbz4KdD2YdSuknFX51VLRnY4xRvU",
  "key14": "2hgeiRQ25yUp38Db5DTEQKbjcUGUPbzH9YETYQGRJ6CkHU8UVbCf8us6M5kGET5UknpKA3bsJQsqwMLYN6Dstvwx",
  "key15": "4ENkQLkwMBRWmYkogxvZRscTCBC3XXAauT7PeshDyeSK43PCMVfQX3ofbmvfYthDUYb7fxXNJ1MeJxupaY7E61KQ",
  "key16": "5qxw9J8mod6pUrwRo5kbTE4mbLv5vnWEeu9ujTk6YLhkTjbpF4Up1vBCotbLQ5YKAVqRe6HVF7tEzGCQLTs2EzCv",
  "key17": "2CikZqmiMspAccHRJkJ3ixJGyL18SwJFaLiuK9g3XgMEnWaY2RrS4Tfww7fJZKsakSM1unzvruAh92L9NgnS1z6A",
  "key18": "G9CrxbyrSh7pe9FXhYzYRxnewfvT5hQgAxYh2LWB8LEggcgkjHktDBGZGZLyxXhDJdn9QTi6DJsSDTBJCHkqyuU",
  "key19": "5StPc3TdUDLL1Nw1xestjVxQtHCCEZ6tyxRTfDLnYnD3cUqHz6g3wEMdPdhMepJW9T58hfK1bB2vLPz8LubZPjgE",
  "key20": "63F3MY6d8abMYHNfNaFPUr2bFYKhbrm8j2bLFs99U2JzNr4v7NHoCwp9tfhpisXEGZhh1wiijKSGEqTQCBE1qHHV",
  "key21": "3Jxxtv14jSsVAkFtaVrrgFkYDQTmoVdYqCgVtHuDsE9QgW4sHR71Z372wD9EphkdnKjPoUPDpWdHazhHnQLYiCxL",
  "key22": "5idtbDjrn8fYcKDny2LzqAWv4gt48EHi5rKc7KSYQR1aQ6imkydvuqNMC3oVNo39KjdnMA5wPsdaX77p7ooztnYc",
  "key23": "4efxC7yAwK1mwQ43ZgNZTJz1iy2NtQUvQEALbEHK3cyoKqZjDpjeJPeRUz7dDuzYf2A7UDEQJBQzgJL9TAbotkmv",
  "key24": "5HYq4RUMVZuSv1di6U8JwMUzczcVUQ54pZkh8zEcGPFSjPFjxCswFdJHU6beXNzMeuGHjgfzzy4pMQiC8DqFuD2",
  "key25": "2sL9CEg3qNvqNUA551Hu44KDiWEghUP8GHL8fGBcjHq9yDDeRmFeH3cFUbgL6UjHYKXzjmNCCiVvYDRF1QBrf1Yf",
  "key26": "2tFL5LzfX13DGH3i7wRXCqM2if8EeqHkDW9jWp5FoWjbZFa5u11NTYaAHn2C9XbB2wNqNxHwX9755hNMCMCu7zKW",
  "key27": "zXwPFqkGFXv2gWbYuhBWzGqfbZ2CwSEx2mPVDRXfAb7N8PzvHbXzfNMaRpdxDAc3qWcJhKsrBqonHd19pfU4JmA",
  "key28": "1CHhjwogEr8H7LTZkrdsDaPAStKJxzoGv2sQTgrcRbHc6w8rnx3gL5KY1RjCJLK7kXpzgfJTTmEyuEDDFNiu4cS",
  "key29": "3NPLQvFKkq8L39viMjjdNwXP6tgv9HxxTDy53ZwLUVq8yS45BjaB2xwgFkcyZLZUdC5trdEwCZxTBoUDceSDDKF1",
  "key30": "4heuCCGM2whtzRYaxNeMzueGSqTrCKaHMYnqKMQu8NgwbTDRii2Lh7q3x2kJ6iypUkjsKeE22eCvbMYEWUSgPkc5",
  "key31": "5PMVW38iCbqW1RD8arNRdnen8ungbnnTqLbuVLer9iLi2LCeEqN7QYtBybnjK29qdt6nD1PPJL1Tzyh7gRtpX3ty",
  "key32": "bhS4zopt2y425jcdnMiAQnVVLPWKaTRVakbZCsLtsR6XNshKh7K3r2LBJZEd3xR8QgnpTBtoxN7t761CdZSjtvW"
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
