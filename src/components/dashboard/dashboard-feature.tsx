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
    "2XqaDgUkJYTt5xGxBrySNKCUXiLPLgqnJLS1RxdcLp4SKKHmu95nm7SNCHGGsZjGicEncqhJ1bm5Ex2LCxXwzRi6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wjWLrwDniHZ8h3Gh4ZfQZnYJRp3Nwf2na7w1PNm88T5nEDLCsY1EfYd8yeEP7sT2dhxnN14UnNFJV5ZR8Fwt1MR",
  "key1": "2Rnu5Q3XMr5en5Fx5uJoN1qAxhHiRGBcwYJVB2XGFgU6RSEu1SKqkMsgsjoxVfrfq4B3ZKjFmYPdA71rYus6Ts4b",
  "key2": "43Cvh2xa8Hkat1hHmuBWush4afeuiu4VBCHKxALRZTMC3bxqA1cCYYRjkMTyZytFonp8eQR2yJrzFCs3J8onwbny",
  "key3": "5bTLgMR3roEiKk3kQAi8jyi55rXnDWZnUJXurr5M77bUw77ubKj9qE6T42KMVi2DdZNoj8bfWGTPPbThoAmRuifN",
  "key4": "43J1196zXBpJKybShjGREKHg2wUb9njTrM5HsgcbS3WKjBDsjoDUJJ95bWHeBqHu7n5vEADTxn4iQHYaqqQRw8ZC",
  "key5": "5QKUdSh56RAxT13Cc7ff6yNsCzvU1SRnDoD7dmUebwQjhGd5EsYjhQX5qe46xnU1j78RfmpePhQgVBbTYv6rpn6S",
  "key6": "2k4tSk98EJQe3xzDB8omZSrmS6L4ENzigdG2ZgHcfoYEnPnvUtJZB2mmkxzcWQeYxK8Wi9GicB1R4GgEeaNZJRAb",
  "key7": "2QcMhrcbhA3dsxVCSRf9r2QVFENGAupHxcoD83iresHqnfGKcuDXEFwQpcwZHxnXqnckmCrXfufqa1mxgCSG8Bsi",
  "key8": "JstJiVpdo8NEuuiukcJBxYuQJ1KGC5Etrr87xJq3fMCgR1i1sVNXdUjYQTnXq12gyjW7qPqKfzTbWHkUmZz46Qa",
  "key9": "24a1oMp6VcrcSi7waFGjrykumWx93JP1n8Z2DMHPehJ1WSgvp5Y68RygTYMVGYL68E8HpULPms6CeovZp9CfoHnn",
  "key10": "47mTLhaTMayPe1fCJg8zNU3pfqtM4cCYYmvANV7EebagLa5MWUstSYhwXtP55bVVyQQj9zTBXnParS5Ens7SbpHe",
  "key11": "2cackGeAAnNheAJDEKgJckJK9h5yUwdAxo9gD2ipRzweumrQ1B573EpqENrBZB8ymgmsTDLFficN98e9EMUEe8pi",
  "key12": "4qTCbeEoABH87SUMQyPtiH2h2PDGet2YddGpZbrhQy19vGw6dnyKijcxBRAznAhcKxftY5MWXeTTMoyBUxw6LEsM",
  "key13": "2Rqg9S5aisvHkkX2qqB6awoWJWLieBHvKestyEASx7uS9G2g3co2JxGTZNceDba3gqd3opv8EUpCjUHjxDowetBg",
  "key14": "5kg6oSob8uuy7L6RUXvQkGtwVynDM8iudyFu4SyqxZuxH59MtmjKXhVJzN2bSadatT6Rg2jFqi7Da4gxJwmWfL3N",
  "key15": "4iaKVZstzeprcxLtueYf8aBmjBrSsFNrRC8XywHhMHvKveo9RggrRpzYZFYzEVG3rdk6mYi9tXvfqzeXRgSV5P7w",
  "key16": "3ThtARHu2kVzj3wiPmNQynjMNvA9z2hYWz9DburHbkoeYFZQkGqFVXYgxQpvccMd5BpxmAK1rjxYLTiWDXUHJ6Fj",
  "key17": "59k7sYrfvVtjYPHBYjbvBP4oX4oJbgoM6pH3SCyKbh9uT8ghDXAS94uxmqPrpjCZ6Hzr9ygBdAXBupZQWac4zGBg",
  "key18": "3UCPMK4TzbG3hGPgoUPeQuxtCcPSMkJQtTmrSZa6tUaPChYHR8q9tErLzhbyzWHCUoRKfvQxcaePCmvWWvWxkdCH",
  "key19": "4d52NLcNXBKspEgddzFujtHQbdXFtzHj6ZvzMP6Lwc8LVWtjNCBBRSUNk2Xh4ZsBp6cBKc2mGYBmvzk1HnF8rVZW",
  "key20": "3pYqwJpzanCmZToqteeNiGUas4d8HphLdme3r2aeaBgFseXn7ycSDKJzuHvt77ZRMPQi48w9EDUtmS9FGaViR6BK",
  "key21": "59vqq4RFp7B4Frw6qZXozUMyvnxvqTSCxrbJqvKXNpwp3JEibM5DBU5bnDSjJ5uTk4E9sMxMU14JJVFEQziRf3QP",
  "key22": "jkNP7BmEWyZ2rXz9RaAVvB4T9UqGTadjh4jyuw95Pz7HDnEHEevxArM5sEfG5fAbiC2pSyL8tch9dvPEa94tULW",
  "key23": "2B1aG1XAzP7FMN8kvNBU7dsqGs35rg3FSYjvG6pdnGptkCzMEAY4PGWshjYZZERNyCCagVn4TrLzTYqaj7pHmJSF",
  "key24": "5ynyCfRHSoVgtirf7GkU1XTsxD1MMK9t3vESR7skotwTqX37jVqQQuDmYwemRe5XKEZdBuLwWj9EmtFNW4GLRMHh"
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
