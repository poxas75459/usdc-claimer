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
    "5fwBD9SGnZYe8D459d3iFNGfuXfaHC8ugLDYXfeAnHyvzXxm2RraTp1DxgYWD3M1xoNf2eqybDvmcmigrGqoPNUC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eVSuTerpvgaWyjJBU4Hd96ktEXsPtvL1sWAcagg7pxTj1hsz4w4xpaMd2bHZFKv2wbf2hmkzwLd2641yjDe5yoa",
  "key1": "3RZub4y9MQZJGZRkrA7UCu2tLz9PmyUvsQSjTTFP1vvTTYZgLg4R3q8wnvNgAkq7WDy4xx6nvBp8pxiNNe1YYbKw",
  "key2": "mu1wdNzzTVjnr4QuXUYdbZRxK2aJ38zzRE3HQWN6NygFCQJ7aiJjCbqs1bsy7cnVCzx3bMqL4Wk1aVYXhJkUTRj",
  "key3": "2cFPqQfcfwjysoxZcM9k7mdqZUzSFTCi5n9Ycx2GrvWGw44NTG4dgGZe9q2bXV6jaowqAMHo5KkxrV7vf45Xp3qk",
  "key4": "5mxB2sSv4YD8WQSsJNLgciJCnH436ivcgXC7pMjALEQ8jDyXHaXmvHkucjMNcATCoJgsC6CKKJz1TqyzCzRZgyLc",
  "key5": "4BH1q1GPCHH1M35RPBUwwvjDSJ1miwrHdDzmqubFYFYos84SnXoei1gEdzKEYQD9RK3fxZ8U11UmwEfCDXo71JuF",
  "key6": "4chDJGPkLLkfgZrkzfqjnw4QCJGp4oEpi29oVhW1HpLKcbDcyjHYvJ8LW7TQaAYESndpM57P6LR4DnukWWTHKwCm",
  "key7": "28cJZUDTBii1eBmhBwQsiUrwwZyXctUw5TnoW3z9ahYfWeWCkTMzsUFQPn5a2YBg2H3pTmCgaEAKyGwT9w7wVFyu",
  "key8": "Acgs2jaHrS6Nmaf86eAeYouy7UpT6vPhYZHPi2g9CdyQjrZKv9oVVicNwwLyBm8kYUX6ApBybAxsAFPmLbXjdq2",
  "key9": "5uyimKHLPNknJgQt1eP6zZEhHCCeDaCMHxbdzLCzC31gDW3DqQyyaxZnNj262BeFLrUh7N2SVmdmmsbNSfDq7pKZ",
  "key10": "25ozwScuRCMesUgZ1xy9SQfS1dVeL4kcTTXwx2wVyjcFjVTNfU7qdbUbvYLi2ijA32yLgxzPkyyfHPK6YggKiQdC",
  "key11": "2KF8GNEVRtrtPChMuCGtZAAaEXtV851gfELqetTUsv22JnhuZbPx4fM9Rwr2ehaKY3e29YDZ6wwz6WiAcypkbZtd",
  "key12": "4ZbQmWTjFPM5i2p8Ua832wnjL1dgf2ujFSaYRh7SbTwDcSFivzodsr3suQwNM9UDqZigwnmJNSQGEkb27BSwxZWV",
  "key13": "5m8axBbTX8nsZDHY7yLeqfedGME8z8uA7ntCAkTuUrc6npWHJJKAe1kdvhvHB3HiM6TxvqJxTrFHyvEsrfvdEpF6",
  "key14": "4kYc7wu7pQsmYs5RqyNt3RuCcRTvFUW9R4fbkMU9VnJDctJJ6USwks6NarBMEBmWtMLBwRvDo7wS2NqxJC8SPQv6",
  "key15": "4B9CWjbCvTPStH9vV28pcvoEKwsUYGHhpGUxNqup5pnRnG3msdXca43W1nPRLHxmoHok9R1a5V7izGmfPgdVxHYq",
  "key16": "25ezY5EsMT8NtZAKanwSBGmnrZLVLwmJwHG5td2upfaQeTUwevZ9F5FDgetHTANiP1ivXWm1p8niy7NyJvkqYgdm",
  "key17": "4JVnJd6D5WoVboc4qD4PPhY7QGJobweJG3HbxuU4fjF6JzCevStvBrYKUjy2HHaE3PE84AGB3j2fgR1KzMDQFa7z",
  "key18": "5ns5hKXWEun3ng3ZvBXE5tmcGXAjJQG6qsqbDwWXA4UkargpUy5cEaWhVYRZR7e18Qqp3VTxHg62xd3RhgneB9Cd",
  "key19": "5u7aSVfabhuvz5g4MmAxsY4Qt3XfJK2PnZ63zNiqyKxqKT3oHnxT7aCbnU6WhMSUbRbGhTUTjhcKhJstokEZnXPr",
  "key20": "5WjLuL4nrEvfUh2PqYyJkT2SYce9eWuCf2SMP4cRnspyjzgLQ1G3QdFCZbLkFXzWfha9nh3iLwD3zZCrumDRWYMW",
  "key21": "2z9DqgNxcCErA9AKbGXRrvw3uJoiEziCHAT1Bc8fDUYrZ8nzNsJBQP81GZyLfmo1bDab6Lr47tw5nzESdHrjSxLt",
  "key22": "5WRvwA7miuJBV6g1QHgTKfvyxmLKkvRaueTcFQD3bKHwmagMZsib5638kLqcUHZ9bMiV3P6q7qQnkTd61PKBCq1U",
  "key23": "5PBxQRteGdDAbYEG4tqpXA2ejpAjbpZH1CZxezByZ5kfpv5HambvCBdCvtMji7uC3rWoD9kwJniRtgHo2GgtfQD2",
  "key24": "5oP3YC3Medss2qfLf7qBFrE6c437PU4XeGxQoLasoH5r7tDjuZUVcvK2BhYunkfS7v3K5c3454egg25emFvUn4os"
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
