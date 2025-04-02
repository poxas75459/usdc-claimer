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
    "zHx6qwZc4113NfhWmSiTB79LEsMLtWA1fVYfNjuU8Xuibti2x2nCygrvBnNsWMQLUZxJRGPa1oFJUhNzJcYHy1W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "655JJKDbZM7wFt9PLCZwZJSnPf3DCUCN4Mgq3NZjpx4gaAXMrrPn7SxHKZz5tBhx847J79MUuANPZ8Na1XtgU4db",
  "key1": "2jD7JJWVBW2Qh86gBG1UaLW21grrMekPczfVuh3GgTe7EkkPWNgDmFNsWpCjxjEwYi5oGiYAxVXx472mzxSFFn9e",
  "key2": "2ENN6DCvKSMTLv8ZGHVd8FQjQNswn4Ft378onKnXeteNvRx6QXEi1bfYC1WZi94TzKJDfBAWWF7Unx9weFoxa8dz",
  "key3": "UqDhzepkVJ7hg3KTifzD4dZSBRmjiYXPSemNZZfpzGmP9mBx4fsHzgVmy8rgmkgRJvxTbHYqGsQypP1FyXndqFa",
  "key4": "3Zfd41f4ozSDSrdqTQ2RjJQkCZzKQ3XAdHUrkrKvwB4f9F4LqE24bdVg3REDbfcpiSoZZMn5XLcQs3bgn5aSiHrK",
  "key5": "3EGEdzxgJT5yEZcbetiDAtyGQ8D19HkZKrZ2ZjidEf5CGHmkz31jaH56F5yTK2X1cQfnzaGnZuQrFQpmEUTCMy4P",
  "key6": "2BbTE1Dsfz396MFnB92rHJDayYWvyikBrWR1yVeJ1oTjQRVcwj1crwX5hPJeu1hMKwG1pXKxwYqUCbqvnLn8hCeE",
  "key7": "3fk36HjQMM4LYXq8m7Uuf8R4u4GaHQvRab2q6MZvUuMZLfM18vQXSEPyspGZ5Anq5btKKrYoSX5a4QdK7N9CTBTL",
  "key8": "3c7Bv7NYWYu1g8GyxMzGnLy4FbqP3nScJgMctV1XmAXu3dTZBAcdkuNGSsfM9UZarKbv8aDXjM7Bkgz7xWxhWQF7",
  "key9": "3rNXGAHYhTS6PhphiZqyA8vTW25EpCVrTvLo5ZzFWrovbPgvNGG9WCiX5o1Qu9e6b9wdaNaExNCjBqfkBZnqPgYg",
  "key10": "5BP3g81qXUjZTe5uwoxeMxFC86Lz6oargFr3eD7kZcHeiYBtQoDqPLyfkvHKB9wgF8jwZE9k8yv6ixPcrPbmKsFP",
  "key11": "63vUBgQBL7Tw7TKkDgPjSTub8FndU6YZ8kQpAhUxoLjHfoyH3nM4poAZWGSECeZgu61fjm23cFjonGe756XCkrMJ",
  "key12": "4BE8nTgrtPDFMqTtZKzALBR7wU7mAZuU2DoRLiHA5h6be3yPLDKCRSz5Hw7nNDL9PkQFVuxEqGFQYxdKRQHWs5Af",
  "key13": "2wTFswh4YdjG5KFP8ieeZL4QGk5UxrazhvUjgzQCe4tcLQetNhKNTqHEmQdzRARxDypURhDEopo4NVuB3SbJY6X",
  "key14": "2qFL4T83P7r1hUhXRm5YdQevbzE17bcMEfF24zRjZjWxgVTJNcXbPXY5eSVVexybtyD1tZQGF2XyMYFg6TzwPSNe",
  "key15": "38YRJCYyzS5XUSQtdXj5eWho3wWLwB2PHnWSccaDmBcgY9991BrgLg5G1VJNQXv6DdKCCiHJ75DWT8SLvuU4PBeG",
  "key16": "2AG8sjcSfwVrG6RYZ1e9DW3o4JMqXtUmvHAGf1kq514xeVy8FYHvxmetBkKxJqh4bFvbdiaPc1puM1GLBcra38fC",
  "key17": "2bV3hFsHTFzE7Q5FitLMkxEKCZFcrMVeNy9kQYz1nhDcYrRrSku7cng6adobWEzC1BK6eyvX4etj7CE8DoecYot3",
  "key18": "4UVVwF7JGQVNg2dDf6vdwh7c4LP9vJZ8Kvs9T5g1hJdXfWmx2U4EsmmiHTL9PpatET9syqy9BdD9XU1X2LiFZg7Q",
  "key19": "42T8bGPdQp6YsjqRayNVkchRtxASmskuvFHDsKAH9iP6Le3KQNVcLz313FXCM15GwCEXgbZPsc8QbEAxA9T3SRtH",
  "key20": "5jVDVsvddhyDUF5kZfrcNS6fogocsgzJUPtqdy9PQvSM9ENU8yjivvYGtkDNVc9d6dsBUgiiticpTrk7NeMK2CWr",
  "key21": "3sm5tiEVpLmdqS5C5qpykfUD3ThASdKvM36ocQZwAygbeoteAbCSPpVHk61X1dJKc7fL6CkYz547pnu1KoR5ctfZ",
  "key22": "4ZCR37kXqvfCPXU4YDShQrEeGQD36bwvySLrzEFyzXbvVZQBnfDG9FdVR6yCftpLeE29aayZPczyAvjLTJ1W4Wjp",
  "key23": "43PFqQWrANH24FYToLr4mzgiPpj5s9HaaKZTu1EopkuBnNzLoZPd3VXiNHaRi9XFtdHmTdyR8QGVUq8yYkTqyRri",
  "key24": "4Nc6hZnLR5zDD3LqQiEoMUS1xsGb4G4HPXRZayJpJEGkBCccFaAzmnDJ8cAGZA1Qq1uZKaeNwL2HEgfJe8CoBqME",
  "key25": "2SpAEYuZ4MD9cK8qTKDZdy81PaYWwhsefzbaQbbAV3AA9UyaMsfdGuteezHAjdenrwaY13A1YURxZ2ES1hzsfUsz",
  "key26": "QHiJoNVicTsJ4wF2oeVWNvBazKNuKc8gJBsVgGd8cv4uoKPKTYd9Bo7hPsK85ArSaTGq9kTZLEYjsNGsVQrqqXx"
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
