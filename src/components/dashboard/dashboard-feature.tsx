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
    "3f5VhiwvvVWjPqvqH2aQDBALb76VzDe4XGRipfS4u2ZvrGyd83LCh8vDo2iTQdz8cF84nvcPLuuVvvKQWDTx14iu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34dnMdPhb1HvzS8WVKWazQmy56tpyRgRJMkNSJoCgSUw6QSXm1ZxcT4Y2BQo518UHXS1FS1sVrxu9da1LQ1yKvQ2",
  "key1": "hw4W6HfCQ5JRoKxXmNqCq2SQfm81eZwKmAgWg3RF8o9LS4TnNYQFoP5yBuzTVeiMCbepRusjbDGEKz1X33t38CB",
  "key2": "31jGiyJ5RabwNTF1XSv55AYjx3PFwYtJ9pu5kggNn4HXQf5D1PxH8EnN5vryZkRTa9W3ZWFAEMgMaGaPG2TacJCv",
  "key3": "2KnshTNwRrdrwi2AXsEcSHEukpjayVJy3WZusYDTjk1U8k4oJCRJLRyg1Z33CKX2fcdciMfLbDPhpN5McygGt6Wr",
  "key4": "63NytNb3zMfc5NjMVJks5X5Sg49zeHei3wkz2MvhNTQh2djpWRtng9V5XMgCb858sMJ2Y7SzLGua6Gzwm2j1ojDX",
  "key5": "9FBPkzJisyVeR4PEGjpWSwCrY8W2XurzKGWerusV4CpBDQvJ7NjWCPA1rUe7vj3GPCpAoGqPxSM8PWLnyzHVqrT",
  "key6": "39tySVsDj3AtfTYKJxvH3y3Bg7sFvUYhnrr78UC5A4b44WJXk9hrjZ4T2dMfrAQTMNZSMgNYLKsdGWwzKrHxDKTx",
  "key7": "h7u9ReP1ErT4qhvjib15kb8kQ4ghgWutjLWFkn7kQ7wmaSfdtQW1jhC8wVHHiS1RTrPdo9AFAqHMVrgabbDdCa9",
  "key8": "2YD5tGYAWWjLDSt1KqtHYH51tVoTNcLrUWtcJx6NrihhjD7vKqTddSxXR3Z84zfkpaZd2DKb9VnRHU3RUuywAT1N",
  "key9": "37c9CdQFEkRRXhyaUJSMetvHLcekNdzAoQUHfYbCHvbqxmvNzTGMuDcVmBzxuzWvVCUtLprdjf9JnnA9ZqLhw5NM",
  "key10": "Zbr7T21z2KPa6Y8AnwK5W5bGoc1iVVo9Tq6iL9D5774HsvmM9cSXbVcpj2SXh3wsTEEwuqfkrqeRrABFrp3NBbn",
  "key11": "kYWs1tHQBnvjgqUGHpFHgyj5HsbLmF6zVh9LVNfJMdh9AoK7zp3tKXZFrGxXNR8Au4LCxBXcEYjBhFWwTN76HSn",
  "key12": "2d3anLSZsDbAks1WhGPzB52tJfQ5YsMgSoon6HhyFNH5Ts4EJL9mjGNDPsCgysDVzX9M3bfQpxcxm5W2jbwbGytp",
  "key13": "2843cLhG1qMpaPbcMxdXsrtQQzS4rhziCuAnUFKfJU7ueaBn9VwTzuzUruKZxe1uzrDfG9H2kCZmdUuKQGh6gt52",
  "key14": "5VVhoRNr2hrnSfKwvQUAoegiXvX9XGTtUY3PkeDL1Yd7g6iFs3DbXBVDBKX5CqfydhUuNeaK6JFtLftf4LihbVuv",
  "key15": "FHEh7nZ1HDxiJQnwuTednYQz9WzgMawczVgLUo1TVuuxrjB8dikS9xXLN7ncJLXtyChqioZWnSrY3ucrRkb2YwG",
  "key16": "2mLW27YnvniMBm5f1pNYSwwBcAueM1C4c2vjTbZHdaXR7igb1tXex3AFfzqjjghfeCKHd6dC7scbAZvAuSwBLFq4",
  "key17": "2w3jfGYkRY8oZfRJtXvdcKqNVXwnHqwbbg3hcybGz7hAqcjAgXts9FvFjBp7TAGs8ebmyZw5fjuctxfRcPgnBCxf",
  "key18": "3Lru6vDoNpyBVTVuqQebjNYZmDFopopqgdZEoS3aeqy5s62yPHbsDVtfrN9bi2LHvxc1RJfE5rvaT4MLfHk4AAKh",
  "key19": "5Ymr54NBAmsnU2tMtzDZRrvU4uVfXWaEGv4eUPdZppuW6put6Lr2iZqQkEDq2a3SX1PBLyd48i36MNJvGRdWcMLq",
  "key20": "KRVNRR2L8jzYRT88Ky1yJN5YpGfxMPMhsnK5Kg9KQ81DVEzf3saAwXzbtoAsRATvLWBDHYuyqbz4893dU2Jj4F4",
  "key21": "3dcziayGPmWfYv6araWPLFc47cwQUqmgF9Gyh3zHKKjMZSS7Vq98ZP69g2eQfrWC4wwxtgauSt12YSkXM4AVkBc8",
  "key22": "4GP51sLabdKvjc86AbSh9vkXHQqntVqXqbKtgq27kiXhvgjjagJdqmzU7JJ8XcYLU3cCxJWkWFJ9wnJFSAxGtaqz",
  "key23": "2VxVbG21PqtVG6h2kGZ1S2i3Tjpj2u6gbwsXvkDuMysXypEUmGhJ8xHKFUcUtFRSotZh4Z4MzSahdAcQKbgUcKqu",
  "key24": "51fG3hPBSA56DRGwhyFJoCWRdduSipZ7YgKqSdFEy8kPhRnyeH7KBHyqraeLTZTcANbDWnESRfT2qgp5uJHBXity",
  "key25": "jDd12NyQbWyXjXzkphe9NffMWiubAW3qhUwhTqjQzHqneXNqCQzqTETNwDeaYAptTXRYy2pn68FZ6yPqBfBzCdY",
  "key26": "2xzekoVX3iJiTxqZLxyNCVA4R5GDUBtyeccHymYT4iLoeTYtqVrFThHQWtDDF6dsScFnQxgEVzEJu5ctirBvTQdZ",
  "key27": "2xKhgqLfJ28cpqugXYzEhCnoJ3EXyCSjmxHxcdZsLLsF8TAqkUy1HydvUURj8QKV5xmV9TUbA3ZW1fySDRJqtNUs",
  "key28": "5YyVHJT3rAqJCsU9CTaRX6CqvQ4twjAoYMPWjrzkTPJX7t9Lj4aSKHSpDUf8b5jzeoBgPMm3f1WPZbhPfs7szRnK",
  "key29": "39w2C5bRc4nesjHG1BETytFPiixtCYfHuey4QSXtMWtwkxLGDuAG7ag814ReDX32e1rCVDysdj38b8KrD5ZQjQVf",
  "key30": "CAGwoUqyarhBMwUTcLzk6rq9cspqPH4J5PCXBvDnFVre5YpPd8SG14LmgMjJ6FBfvPYk9MMa7EQM2x4RbUHw5xU"
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
