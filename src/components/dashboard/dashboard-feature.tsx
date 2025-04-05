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
    "4DgizrsGmWBR1ukCtWCFbE7zscdZKaYHRZS4Ws2i2svzvXBCocigC1MELVHHwQNS97wDuo3T9FDQNrKBjUy9PpAw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KEturEQezSYxiN3KrsHqMp6cErfv6Vn1Emppzo7MDQbzxDbPeqHNKNWd3rB9ShVqagGa4oYDUhP2Qb7bke9tcLr",
  "key1": "64Uy8xCDxg6JY9dvGbkdJs8LkCNJG8PwCCsZrktJ4rKPd8tVieYnvRwz9gppjb4hFHkM5szNVxGvmYv9KVc59Zqu",
  "key2": "5zDSwht4uL1sdWBDkgt7k7YwENeG1e1dQW4sdvcNEiTRcS4V8iB8m7gD1iKjAdS9mbvXNxGQk8cLgDECYRxzVKxv",
  "key3": "KqAokQtQ32t2SjMxRpRzxTSPV8mEBjKrANVn6HT1NKxdF9dQ8aCWZyGXGTMNH6XkeJFUWbrEsQkwKnVspgG6Twb",
  "key4": "2mML8zFYGMwFCDVL6p6nzAyuMPKqKYEUpf47sTA33g5qpyNLChAmo2ySCa8WHyMuJRV9TgBMxDCSYfD3Lf6FMhFR",
  "key5": "4mJQsPQmfTA4zeCzcpi48LAMAgY4wLEa5FHazGhsL21wgnmon8XtKUq2UxDYGPTDtiED6KwfnC8keRnCGu9mighV",
  "key6": "gEjCT8R3RxZDUh6ADwztF5yu6mrxLjKEPNwrd2WsGdoV3weEQcRnD2pyjjNXdCD35qMawQzYmgpR8ZRhdQhrDzJ",
  "key7": "3pcGVwz1bnCtQZ2gxzzGPUhPVx7tdttNjRh626uDSaF3pR6ThJ6YovPxiFEzdQdUhKUCFThNmvTTfsow4KWqbc5r",
  "key8": "YJABhmuE3TRB8M3o8L2savZHvH9JUSpHVQ7zjqrQ4JVbR7xraDwVrhXcNwnuJSH1nV31HjBmqiJc5CueoTMEmth",
  "key9": "47YnrFHWms5DR8zbfC2NDbnKmt6VDhBEneSW8PpSzp999yxYP6oYGX1jJAAYG6GgvAYca4RzKdXA9bJPkNaCofmY",
  "key10": "d2aTQKTP89AFbCUi8qzzuYEMogRXDVvvS73peJpxwkcxQgpG6NEMqYuvn6YZ3GknUMbqkEX3eSyYpbth9A6eUDo",
  "key11": "3Vb6L3UyMLSLTchCNo9E2oCkZM3APQSEEEmMp8h29H9KEJJW194FjE82p3hNuo63gVCsffSL43knpiUfShhogXr5",
  "key12": "4qm5TE9xV6iJEvSxzF3vDm78saVwrwkQwU7hQk9eNyVK3RQvEa1gXBYtzFvXW7eyGTE5V3nU9eU9y42mLAfFPLiX",
  "key13": "25LpiCDkhC1i6UA4RPcQDBVY9eVMqxBAoyxDKVfZgSz6XDKe6GdFh1HVWmjBMMHfVi9R2fBd2qNmbf83JYjTNsBA",
  "key14": "53F5bAQo38cvGRMRB8qYFjSdXRTJCntewEfggW5LfofCny7XwvbE9UjpmvgvAvx1MzZUuZTQwEQNBbFn3mgPf8SF",
  "key15": "21nbRw1XryXuqnSRfmtuyx3Rot18iVBXFkn9Ew3ENS7uxs9oWNFBg879iU8UfLcNxCnoDDV5Npqfzrkn2LqoX9j2",
  "key16": "63JrC4YB9J6SJakvVzXTS9vHGMKWrVhD8ovnnobiNPuURCQfn6jJQsAu3qcJUTtw1wfuGJZAV4wCNH3z3dufnJAA",
  "key17": "3ze9UPjSCTA4ZjeeKaHSBTtfrL8CR2pA53LjUhVXJKfKrWiJhAdG6obfNJdfYFqqGoj8S5dcS2i8dsrqhKAFPwmG",
  "key18": "4phibYs2qdzv3x3EG4R5evkcauVxahJeGN3AH6EPFWmE2cBdPpz2NtM8yswpDr2GP7EhjDB12GTNz33uhRz4XpGN",
  "key19": "54922hRKerGE5ofxdpZgEczQk42bdZxtHg2AbeAEhaZHwpiRR8rgNJtPxNoT9aqGBczmpXWZqGfHtv8BtVPG4L3Y",
  "key20": "2KkMk7w2BNLc7sZmPjFYsfBzKP7Er56LxvuPXt9sL6i4E7ETg2cdKZpwbTTDaSuPWoms1EpZn8YGdEv8JpCzWym7",
  "key21": "64Xa4kx3X8rG4e26QrVigGgcvChkDSFByNTjV7qZihnyzhEjfx1dDm3PbbUSj3RRvNTopw9DCnLpK9L9HeaDBkKE",
  "key22": "5kTtFfufCPwodp1GNspqZomw3uUYEKxMWKsKs9NmmmfcgEp4wcjypUvmzM5oMFA7wYw28t2zZbDZzGTkqrqBZjU6",
  "key23": "5CbkUMUkUWM9iLMqP6LRs89ZazcBpN6VawEG9Q9CjFxCM9PrsiVJvBfkM6c68GYGZPDXJmcoAXR5tGmXy1ffc9wh",
  "key24": "a2y7BsTzR5cburLUsYqDGXnYr7KDtGuqp5ahC2ns4VT8xfKuW6ftw4NHU6swoHHTUfGc1mB7ynhj5tdpCP4sZQP",
  "key25": "3tDyLUDxXjgCJHTZXxUTjf4RoNfLZ46qieNsVJGZyNYhWsiNCGdoDzqiaHavn1qSxKTw2GcyyBwsBW5VJswnL4cP",
  "key26": "2z1MbT3pdqiBXEH8jDRkbuTLsqERWydDwEaoH199egNWZDDNV2a8Er7paYsx3c26iWvX3PJd82du6VH4wErw4uS4"
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
