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
    "5eBaJbx2vpg88sj77HMKxXneEq79LfKqthrx46PkECSKdYZqNdwa5Z7pSm7vCq5TgC2t2yWj5gBJAytupujjS7qm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8ER73DaLZzJXk4aR1h3T5mC8TYLRLHcnPSFtXzoCRjDEashKPy6SBvLeuRXFgA6nNk4QVwmiZsmswtJM7CQD3eD",
  "key1": "Eb8XeH26S6QrbR2R3dZY7fxUmQ6X4dxf5kNNknnnDERqHqNnLsDX973vrAYgqrudumt2wML4K5EmU5NBZScYeWs",
  "key2": "4M4pFngtYpvf1HzX49KdmSDArNxHz8PQLEoEBe8tLEN3q5TgAgURHG27geiERw5FQL9wQ8G8iGAHwEDRwJ69FH7H",
  "key3": "5irCKre5fNSj1ekppUw86n1FSGiU88J66wtAFDr4Z3JS8fsZ6RJKgcte7CT4r5EgAJjn7883Kx7n9YQnErDy3FvU",
  "key4": "2rCkFNEidd2Tc1mbqb8sokLZcP6egmVhEzjFaBfb7PPocs4XaosNfToSPcBwb7XqhdMtwKTgwb78TwYkeAGYx2io",
  "key5": "58yTfqdNvPpX4FCqz2hUPWzCowHQGVZT83CVapxx7n2XvgNivftbCmtTF1YLHQ4NKgVL5MzhAXi16xM9EG22TdYf",
  "key6": "5r9fGk9tgqQ7CYur893wxAK49BhnMZEUhBS6TjBqx9oU9Kw8kaRpVuLKa5o6VAMJNsuD8sa4z5iZjMRGhUQm2FUk",
  "key7": "4LvdqdfKVoa2gT2y71StdTprdhEHsduoyisMwRckM9GXLYENgSpQPYVv1yp8JYUkMuEmnC995SCMMwjx8nEaGd5U",
  "key8": "5BaFzbH3c6eGb5uupPNbzhJsGCG6e9gNcKkG14M3EnEXrnnKLuWdAiqVJNui51BWzTYpWLBzsmFzZ24kYqRQKd9n",
  "key9": "JKyWrmiBovtTKqWT21zu2hDvX2LUkx6cHSLzAe63r1cBebZnHuZhf1akM2ZKVWdWTXogEvByb1mLSSwtxc6n1Bb",
  "key10": "5vcJPC7h9k4j9EW4tsWgs7xHuwiU2g6weMkpjvvavUXDagC36pqjsXDQsdxkbW9bzWmJpUHT4F7kSBFfrf5twUgx",
  "key11": "x88yU1TyrM8r9JGnhgWg9avKSNLf2AjBn6VEFdLeZgQFAZNWEz7Na49WmkcbjPT4tzuK12nsXDVveivjCPBNn1H",
  "key12": "5zXCTsSHpXKLADLN2AUSKVpGY2ELkQyTcLPZvRJHF5nEuLYZcp2XyWWZcR9BjMKuYeVz2WsdCDHJQhhrUoGsjojm",
  "key13": "3jmJhjH5vL533jwDU4x24tRLYBSbvE46zdVfSck97NDPd3ajAZvxi4xvND7cxB99gdDuS9ZuSXTrHZNHk1wHqKAj",
  "key14": "2xXVhnAj9h54XY7hKbYowFYhiu3efEZnXwgFB5wdANaYpJDmEmfJ2Nf1gQRXEWwKPgXm2oEQ5DnPkKmeUbhw6maR",
  "key15": "3WcBxKWfzqTDwgXJfrodytDnroTtPKfVgUxGpx9uVvziUh4EzSVoSAbsBtVUV3Sp2Y8HuMn2gGALwhybgYur1yB9",
  "key16": "vy16Re4mcpYLtNGgSAXmPYV2ZrdHLDHLr3AvLjsc4Q8TpbryG6r7BuYUEtyFPseJdy28h8e2E1CwhfnBWe3Fi9S",
  "key17": "3xFXBNDoYzxWxaiypyRSGzTuBjDSLYdTdm4tKHyqTCUiHC7bSpuCHG556Zn97985UPmjppNZdR1mbCGb4EpqguGW",
  "key18": "2edHpn6P1QwVJsJ7eeYRarKgvqn2e89SdnkrBF7EMGqU9fLNdkm4dpzBkqzTWBDfCTgoh8MffodVLqxMtaBdSNVb",
  "key19": "61GLzfvWQpiyNbxHHnRsiaXZ4dsKpi88KkUx2xwY9aHmWE2xPw6FEDM2oUyJ6ZQJcomEZ2ShjURaGCjWS5nPzyH6",
  "key20": "dQYeZa8BzCyG6BwDtXJ9F3CUiHkU9EdyvmAXkuzw9JPG19YXKybSPYU3iZS5KSddkEoNbh3ftjGZC8EGrU8ckqs",
  "key21": "5YJqgiHCw6fM2YxCbK4F7RiA9GBzwFUiUd1AaYxuJ97vgGuDxGBN28HGPeKi9eYBnE52EVeCZa3BHegScapKzSZv",
  "key22": "21XztXJ4d2S9Ek2ZsoBdqdJdSN8NF9m631qLh94ZETkbtVyWYMeuP3ywnBwdcs2FXvksKFkfhLSr6t2au8aFR1AW",
  "key23": "3pyZrLKVYdPsTfG6U6nYPYxhDUW4yB6ro3QrMbbgiRPr8ZzUitPvJnAURiXdCmRcAANo5a5FYsPBG5paow6845tM",
  "key24": "5SWCSXPTSYy7aMuesQkqphtLgD8AkYNhfxzJmQyD3vTVhTsUYPrBYfdwVBVQfKoA3eD5eJHakjvT1XNfJ72PNokt",
  "key25": "EmS9pwRUp7EWNpELFVDbRqFyri1T5pw76GZh5pbh3PhLnpxVwwV3zNAxYGbGsUurczmv5vmPH8ntoEw5NMnXJU9",
  "key26": "4RJQDNUb5gWhDbmCu79SQA3LUULWjaoXudfCZ9bMEN2R53hRnzzHjaPEAW69xe3a2f9m8gKeSeX5BpyySb4KKmFM",
  "key27": "5eu29xJexM3WmBuqFgBe1HMF5DestVnsdNQHU8fhdxSD36kreBBdwPQoWAPjp5Ea9amHAgvv9jBsoHrL2GmB13Ns",
  "key28": "4x77bdo6RwuN8XM95dfAv3VvzRekgyumuRYHDK4YMWzoKLRmJhp1Q9LsLEWmrE5egbpCyyBmCnQXT6YqsrJoS9gb",
  "key29": "3GZjE6wu88fywhQjdPPQsPCGFSara6PPFA9TE2kKvxNZnm6kZAdaB8p6JyFkJjUbD85qDyiSTwpv5X2CQfynRQj8",
  "key30": "4jzj1Qy2s8o9iDJGoHyx17Q38kBw9bzKBzHjeHKSBB46tH4yDjrsgaEMgBLSf39MAk26g4V7KTgQmfSScojKCM36",
  "key31": "2yTXGpUEpbgGLJ3UmqubYDjerJkaN3AxfpmmQkuE42DvC8hWtW1He1TBgpKHysQCn2uH2V6A5N8vrHQEfya6uZkc",
  "key32": "5XSjZ7NUGpP8iX3caEFCmAtYJZjiRUoLxtvuXzBfvGGUvNrqNCJecGKDhBpt1BzyMcGXKuomGB9JJ8uJMz47xYE5",
  "key33": "DQYSLfwdii6kB41x8JPN1CriAUpkKyhaAjnPuWp4ooPn29D5L5CbemPYGK6UwtZBvfijvGKgdHNpnMFHgyHHXc8",
  "key34": "4ubNLW6dxWoMqtAJZNRT9pBpx2VfyjB1fYoG8wgY4YaAua1eTSCrK1FkUQrdPn43qN5gmy7nEx4n2QgCvyonPtcc",
  "key35": "2hc4LPv6TQAd7agRANmK5UTKxRb9EkwSfHt2UyALtwsQW2152Bdxe2YEPogFx8vUfCTawxR1RXG9KAu1KpBJ3Toz",
  "key36": "zkQAbzJJhJPTr2WXnbU6ruZ2WX16vUgjtof5QQxUAkNb58Em1fYeb4Sn9nG9LRFsmVgvj7cTwwxQbD1LRNZ86o5",
  "key37": "5p6nHRu8azQNRua6HZjUdJ1umpXQukp5gb6kZy2RHyhnx3coN4VgoKySH3P1VThB442naX4Pi1grL5weRPCpod9e"
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
