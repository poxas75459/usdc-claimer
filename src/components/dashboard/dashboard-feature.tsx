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
    "43wxDBzUgTKDv1XbEpStp9MvdeRSJ4z7JmhqMeCCmZ6WtbgScjpA989CC88CH1RP9aQiZ7h6PKadqPY9wi2SGq2C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4f4vb1W9vVZcsNn5XcFCuZDYCZdDrUjZ8x4rJA8VMryqbAkMgLqphHZGTmwJ73g8vwNs9VWsXwUoM7HV2PAU7wHz",
  "key1": "4j8Agia99fPavmcGjeujE95TfvgXXTML7KJQ1u6AxB1eHkFfQuYLgnsPDRvFdjUKibKSjY6Z5xwR2EPwv3gh89Eb",
  "key2": "2Cfm7qXLfzTwV3fbcDaT1Meb8JHXJB5jKMWHGJTzWkP4Fh2bWpp7ESTSt16WZw7jY1kBeqUR3juY574RvFv2jz7Q",
  "key3": "3Ct5yq68G6R3HRY8M1ijASafTCrFM4PKpPeQ7dvHm1tB6z2YgHPk67TEahRzmZ4yXvxD4bs4W9pzWCbEMZRKkW2G",
  "key4": "3ud7CvWUczPVmmWbYy2LTLAynEq7vquKFGsGF21KeKKibi5AUz8V7MejqgNuq6yGPb66fxSvpkCosoRQfpqKcqn8",
  "key5": "iKU4UrTJJ7unwgc9vq5h9JaMYLEK6pUGFUodZA8fwWrhgdcFgPUW7mXf8jhiQmRYsK7uh8tEWpk1P4GiYYwZuFQ",
  "key6": "4VyvjH4LjCU6uXfNaB2SaqBmtePMqtdNmEsgmi7NbBzA6ziQd9A7yZpFK9qkxoumgZHyooMW9aoLjFn9wi6QLrro",
  "key7": "3Ejw4bL3bFZCs25h2T5isArMVMtEiWLrVXpKWvMCeNa7RBUAumUBv9gDA9jZqu8H5pvNGDKj1cwktMtR1s8dfhi8",
  "key8": "4kLKgbdVxhDBVLDDNtqSrwzzStSh4SyoMjkg4yaqeUsJnzJ1txesARxwcMEaRdwSB1DFwzUyvKHbVNeXjthRQKdW",
  "key9": "5zVBq3VQbv4wWB3mhfGduXCbRcZfa2EsSEtzA2qR7JqsvHoEKh4aLeUuiE1rKjBhdH2KUamKekMYGV4ranU6QqJo",
  "key10": "3XEVqKjJxtkLj4HDqrnCfwMKbTvsjVzEMBkkwb2qcydmCe81GR4Y6QyGc8qHDRenfMfZQLrJFtUjvmiEDrmY6rT6",
  "key11": "2Ljmyrr9kabycGniBMAENwFqHhih9EcmRYZeHTZ6vSQbq9MG6cwgYE6zVEEey2BetG1y8E6tzZKKQ4jdbe9iHHUK",
  "key12": "3WAyQuns97Z8A1fzdEHw3vxbqitugeLGd3My9Hqq57DvZtEbvot4F2RyzypoCL3hqdFTmnvDTCX4d2wFKP2QLJsR",
  "key13": "rKyk6UkqGp6CGTnK6wm7F8zesQaad7g2ikR9TBxwcpeYWKBW91pTjYghhP4NkpM6TAekDcXwEYiGUpKd2Ryc9Zj",
  "key14": "3BqQamN62kPfvzYkQK7MnsocFEWgSrP6zajN5EKnnjCcJRcgNeZLtuuWFmvdU9mWSsWW3D9TF7y3WbN1TGigPAHN",
  "key15": "4gVcEVX917m9y165Ann6aijjiVhuubmEyFCWfxLWGW8uySxPufaoQWUcK2ZNH3sHjb1HyhTkFzjqZ7feCSGFaPV6",
  "key16": "2PF75yzMQNoCykqysGHwF9xUVStogfuCXz4wkohjtVrW6iLbmyFZx1buQS9wKVDcPfB8mKtH1njwUa1G8Hs2YWtf",
  "key17": "2E1xSHBcHSkcptjNFPpPhGs6mZmfoQAuAs5FxzKb68mXL7FAYT4CgLyPmvBLiupFunZhpwNMBRTYsS1UoLxjdyJi",
  "key18": "zzEEW8pGpZRAfw3624suoNMfACL1CZC7JxyNSRbJHGGwhoCxDKmNbz7vGQm5CP96H1CM8P8CWVk8maNL3dn9m1h",
  "key19": "34KiqqnKJAw5Tm2aVCsD3pv474kMhDJ5vfNPkMM6ZGLQT3o5473nnjJqYrfvYCKdsgb5QNa17hRwzj6KAdRq6kAh",
  "key20": "2CWrUHCJcSRkEDheFFhm5fmUqGNuuwyvQgx3xRzqRJ9zGx71fpkukej6zALDNB2jVJDeL1CLhTWiHxCw8PdTPWLG",
  "key21": "3qmXF1f2MbHddNHf3TwQxpcuATqp3vxZ3GQGusskghBn3Li3kd4SZSnYx48oVg9FxdKsqBwSNxUS8cwgwMhpPuuE",
  "key22": "2JiwVw52BZDR4h81nLvvpL5YEKgR6BsEHz4uJ2YUqqFBDvwuKr8UgS47Bgwaeums94c5BbwZHQTstWdCroz1cakH",
  "key23": "2vgtaEr95XaqQy4Ui9vREJnf4X8283MrNbutRhfDwf3RjzWgNEibSQsD6kuKNdCwY9KoHCf2nJHU1PWYeqQRQoD8",
  "key24": "2rGhMArzq8FGcJk23miXjgoor8pDQHa1dEVQbVUizz2fmVFAcYs4k6kpDaxQiGYK2bPCy1JqaSabX7MdZ1U3tEiP",
  "key25": "47WJL95bkqcfqTougCNV7bXgZ6z5Nw6v3t56akPdc2VHeGpvmurxmiZS7NL239SzHY3yPmWdcMoZb2NHdmo4Mums",
  "key26": "4W3yQ4x9LfeBQKBgLp28WjmUJJ7kv4cPu2U154AuMpij9TUr8gti1uMvuyoASxM5vCCncNVvCtEbowdc5LE1HokW",
  "key27": "3B5N5TviD7Mn4faEbh8kxHgFvWCB1vFj1dKwSfzXmStY3xnjsbcH8iZWwVaNfCTJoDURebvr8vxXyEwKm5Xdq8tA",
  "key28": "5DkAoaN4nYzS6NhKdYEUu2fyu9MWkMTMe2C2bM1bKTLFT81jouoPWYPZAd6jCswAZ4s5e3vzhzK4H1X1icmqkfUU",
  "key29": "4NS2uzZdiwk7XRXMUGhrLqWiaNSnxqBARQttZPY9mJKcmqxz4upuUMVcZtBsV57pUUzSDyrcyqDfzLwZJdGF37aw",
  "key30": "5WY6W88fWN8wqKjak94wm2wnHWN3ZoN4tcURyBsnU3AuYkvRD9kPKfoPpk1ECRtsENUf7cn5gmp1x4TdWpkwjosA",
  "key31": "67MH8VqQJVvBoGipAn9dUTNz3uWRGkS6WhoyzEwXJjxuWCs9v6TtCjqWWQw8AvorKwjY7ukz8AKerzDdTeZb7BW7",
  "key32": "42yFexZ23asGGTRpsP3KfybFHeBsL6dDTiYNTHo5rqqHmHzQHfGBCujXLdCgywKNWzBq9Js7SbKFehKuuezaDVmK",
  "key33": "49EAyzFDH3W4nHVSPUFTynWfRsuhhpA44sisuKzxwc4hrRjXhSTw77vsuYGHwvVvwC4u5USv7Uw7oiqH1Qdt8r5q"
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
