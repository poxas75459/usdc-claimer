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
    "rjMQAU5h7tyjoLzVbpvu11fdxjMrCbedfqbaU6Zsc3oq1Bsk1hknmMJ6TFQkwQ8u5hiYH7rxKYPDT4Sv4ifpvWM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JFE3duaoLQeTsyALdJ4i5DR5a6LRbY3wjxpCQjECin6o9qF2GJTzqemySSUQKS5g6ekquCR9LMbWdiHrAMZ3KNW",
  "key1": "cYLdjwJsnhKX1y39NvXA4Y3XU3FHhpiVTBcxW2Ut686PwnjB2bAc16v6W2Bc3x1BJUZXzkxTTn1saLm8einPbi4",
  "key2": "2ZD6QmDzTxnAyKefcBH9PcT8wUYUG6XDb9jMVhv19Zgv6LAZMr1B6dM9zTR3RzaqVA9vTsDx5C5Tr7EnDg3iS61z",
  "key3": "5dXfHBpeitE4QNfm237us739cYvYMBE8JLBLqZ2dU6XpfieyQcCkBs8ZvDMyPNd19QZD6a9wvp94k1iYwsBwMc9X",
  "key4": "2jVNoWwyKqffJvS13qC2rjtmBo3gMCmRwcjAVHBZEtt5qpH28UtfhyShiH86EqfvC24mwXdmtUsy3a8wgXa2pmUX",
  "key5": "FLufb9iusKXMQE8dJbYLaZFF973fK3ZG5LyovTixgEgkxzdHuXzmKnM7Nu2Azv2trNKFYFAXRh3TqiHjRTLn8zt",
  "key6": "3Et6oVHcBBy5ByEkZZDDZk1Cj82o8vmgK7Fo2JBxpoZMJV5a9NjURMmisR4vUWCYXVJyQgs4gd9u7aAy8zpM9cPE",
  "key7": "5ejK8dLyAjKqVbjawRmm2zqFAYVuVs2mdcDNURcwpFi1DcmyA6vNsBe8Qw23DkDQ8vaF3prJUdXRPdaqZJrtrLhw",
  "key8": "5pthDf7k7jDdmgUP9dFKd39dftTESCoxkjgXLj6Cu8So6hV3zDtYpnXzG9YuyKcAVYd7ThBdkTojrkp3PPniKkg3",
  "key9": "3qQeSTmucXcUaXiZpj4AVmgZFGefNWtzCkrTm4bFp63AVkUeChoyu67RXd36x2AS7sVq7NwVuBnnJqeHE2PtgREk",
  "key10": "GWQEtU1Gv27B6CuUJttuMqBUTt55NmSx7Gq76wu2hLpwxeEUsnjn7ytHKNWDaXfjeMKrQ88yaxCZyzcLtX4c2hk",
  "key11": "2tWBwZETVrW74pKZuMMaFAsnATAo7CSDaCMxK19TT1dkVzBHqnsAcQKhFELNxAjsQ81LnRc5rgEHFo5i7ZmE7uhX",
  "key12": "2xVqfPpJ2UDkWzxYUn6yxz3HYsb6Vo9fkuvkiJ6Pj5dS8R4F76n6Yay9xdRqFUCKyvmJnyHmYKBTCseCV4S99JSG",
  "key13": "3RV2AK4FLCcsbkjfFu1LB9qQTSHjymHvnukcgm7GGnGCjWePUnZyZnghGHVXLCYcjEpt6PVjf8GC3d2BBUzhn4ao",
  "key14": "5ebrMz6VxyevToJS7Z7QB8suHgLYBzRmAHBDC46vW9U1M5HNmuRsit6EWq2qob8EStth8KaPufrfx3gcXX1gGq7t",
  "key15": "9qygAvZ81sV2zCunZQYJpH7i41DrDbpf6E1ybnrEfiRDkqhk5e933ruyHLK7BMMNEAL7mzqtfntvodxDUYynkA3",
  "key16": "5Eb6h1dzWYMvYWXvDphuW68XRwRQncjnTN1wdFZP8rjqty4B8YTiJ6yTzmTXXzprSHXYZhjtJUiWQuSYs2hrVm7D",
  "key17": "4YQTQDUytiQUGA83465JEs2MrwaxgVmjkqagy9gizSirfmMa8QfVyuzFaR6V1jh8EEmqK2R9QXZwD3NQ3vPuFbeV",
  "key18": "4RSkNvNt9sPJZSopd7nApV8aLtHRd3v8SE34nxEiCnEUhUkE162ZorV7QLYV65H7LLjsyQRY7f5KNAtqhkc3uuXu",
  "key19": "35TCcyPpFpUWVAZ4UnVMy9ppJxZHrMYJ2YLenaCbKEbVcmtv1JjNjuLtQe2pkQ34CgBgdohB9WqMywmxaaJEZ5yn",
  "key20": "3VuuzzSWyAXHJKxFxbut9muZZiKXWkouoXjYJFj32DdAJntNx8TTuSPex2v7JZRSwwioQ2U3zVysN7n6fujNJk7Y",
  "key21": "4Lpp15QPvoAdxHt8Libr7pTEWQbFstQoAxNTD4Cx7WFiJbrkHN6LVA8n6fUQccaNxUMouaxRehUUpGKPvYyKp8oQ",
  "key22": "3JoyrH5RfXNpkq1p3vAZcBbLRqvauTFqDPq99jbgKBc3JsUaMoZtg8fjFph2sBHgdhH92dmt7NkDrEtvBHGXHbmg",
  "key23": "4ANW6fXYv1DTzGQLepiVtjgFk8mN2AEqnGQ6PDAgb3njznthpXvfwu9eiif2fgadPuoXMNhYtpCTfvX7oAz1cheJ",
  "key24": "2qRzUMbsVJUjS195GsQZ8y7e2HNwW4smseeWtunuVaa8jSyTPhTh3AG3G4F3sTCugPBneobXfBWq4b9F3Nj6S4jf",
  "key25": "587Z4kePEGrJuyuaG2ApkhQkzMUKdgDJUPTccwq8PPxQVHz6PgrBfJZzZLGBhTgPs5eR8mEe8wkMVEemXqr1a2NP",
  "key26": "2c5AduyKAR5xNbGR5PhbeDE9mNBNrqbVTRrqMkLW4nuqG7VKH6QSmtTX2HXpLd6nNoR9dCKXVRGXZEmTq5s314uc",
  "key27": "aVuhta533pBw5emDUAiqdQAuKxs7EgXkbFX9VFEyiS66sJzhS1U951zn98cxnPgdh6NwcumHMHdJ2hMupJDZ5v1",
  "key28": "5zZvFnHhZLqAhdX7gU2bqDRYQZdKa4Gz7BPZ5W2sx97QTDhye7Tnv68JfjnpEJtwpw4U2ERjtwDqrrLRTx8H4d1n",
  "key29": "2XnT84Eo4vToguXwv8SX6pxAAMQMeH9cFhcLkhUAT8F6HE3JgzfVYe3Uf2jvhvnC1vbjxfk8hRgE7eyRKWrgGC5f"
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
