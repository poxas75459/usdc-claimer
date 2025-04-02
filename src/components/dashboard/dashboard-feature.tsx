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
    "3KRHob8jreDn22id8Cf4vCdYejzHSeqoEZPsqf5EojA5Lmv33HSua2ADRYqFHmVHjPwh6zTBF1dUkhmTKYmEmGAv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42RxBsgUgZBwyV6LGzJaasApkk3C7VRAu28wPH6AHW7g1Y1s8whfkwkhCrBKb9QhTjLshxBCLwAA8DsVUj49K4rK",
  "key1": "2eMteSg7K9PTqMazCFBMnsxNQpAUZoULbAAe6UAkWLDi9xmhcCcqaXYh8qkTsjuPGcaeYBSSvXso3wcKukD8sGZS",
  "key2": "oK6PdySEdA5p9KcX2y5FfwNs1uE5MD3ynbLZCbhVxFDa1xDbQ1duUJa6LzbwH6q3CM27oJQYG37UHvRMJpq8RcC",
  "key3": "5JnGfTaBjMCavryBcBCAaLak2iP3FYKUbAm8k7mxuXLckhUr6pJQciezkoKkPSvMqVuME1CCoHccHq8hxPTpo5iP",
  "key4": "2QQaAwWUVu7d3kSmchF82WB3KhtPTBZQPK9AvSHQFePW6jMJhkbiYWu7TraN2cJP2BDRJXrdaas4zhKoc4oCfkQz",
  "key5": "2Zetr1CT9SGwUWAoNS7uQt1uTGsB1yCy6k5GZ5JZ77FFL7yuAm8HCgCAHMFidHywRh9J1KTjn1pRbfeqpKXAMkRZ",
  "key6": "d42wPyQ4iHj9tdxSfq65qSpardCvffzSrcdD6V8zZZPAi2Q3DrJzuJxg7Kh7uTUJVhfSjjV9Lz8o9V2sB8dttFz",
  "key7": "2FzWsHdULZoYvEUqMPL8sksL6ZMY7nT5tQi7PRJ2L1YodMajFQKovxxNM5kqsA5nUseoTM9TKzsiS3w6E3Jsc9Tc",
  "key8": "3PgSX4hLLPTaw6piSZneZXakBQNVg7m1H7zxKXjCwvqLJL5GkaciDHJVq2m3BfjKHfJke9czzwD6G43syceoQGDM",
  "key9": "3QRRGz7A6J5bfhtTmhGZxped1Gh8HhRqdK5PLy4yL37WMbBWzNyJFggVn43txjtbzuusqxxq4WdAPT6a5ygcx8kP",
  "key10": "jK47dpUhEC8kD8pQX74coowxmVvvyhse2fhhtmUzhQtCiz3zu2RNgXzWXrK6GhSijG99fyfuDRiRR8yKh7yy3jm",
  "key11": "2y4yp9arorqsnDP49WzGcyDwXdn1bnJAoLQHC2DNyC7XaBTWradWTdqmVSf6P3aVEa9WNqawtzbfagq7gXvYB3Qk",
  "key12": "HaZj6afYyToTYFZXB3h8RSLorWNH6CgYCXk4gWtemonY1KrHivya4TxvzhE4P51jqZ8DU9jw1UUaKzqwJDLLTPf",
  "key13": "5v1gn2A4DBS6ayU5sFDtQa47ZKfXPqDvzSXRaQrSxpZDQSLw8C14wN3jUEt4K2ZQ4L8x5y7BUQA6fryZaS3QVBTo",
  "key14": "671Q4NDBq87gYVEfbt5w6PWiWwsF35REUcgKJ12A19DW4BHZCD7inVFs97DnB2w5dqNTRndBPZNdHRb7PNvLHz38",
  "key15": "2KTLEhu5ibWKqv3bAFKw9x8zimHceT1EQc4kMQpA15duz1hA9UHKHozJpC1XLYYJfiEbqB1uSWNBA6VGhkeGiBpS",
  "key16": "5dgfzeeeMJV7Q67MXh4Dn7rG8zUCYLEJSbqNRJwyaEmNEpEbSgEqEfWvLVSHf8fJC7veSjKXi8K9eLp2it1Uw7Tp",
  "key17": "3qi5qsp6zJGYcQGmx1n6UwSieet7xr1fZUEqPpitpvnHz7S5k9if6bKmuurG7krYSZHN5du5LEbA2TFg8Rccjbpc",
  "key18": "RP6if4KFQREtHy7LrR6XEeQzPej4AALS4gttgRJ9car2L2uoAogbs8M3btpgLzwDfzZHCe85B7xoTECTpSPzUfD",
  "key19": "2m3tAnGZv3d64HNG7YWXCdafdYYyiK7jUd7B38ixe96UPyihzhLF5KVj9SFd25ZRVx6Brv65bNYLSa7JR1KqRbhW",
  "key20": "syW4x6bvNQgv9ESTTgAAXwUnGXkypFKt3Wit53Aqe21JkBNPfPgdFJxPtm5CBmtcZWgUSNq8HBov8NJDJd913XY",
  "key21": "3YcA5SgfEEf636rAkmeTLExLoMKoprZQLbNCru3zvjA4dFufgJPUfHbCcrwnNULYbGUU7Bt3DQ5SYT2Jy9kiFsFG",
  "key22": "49jwa9rBti7wEvbMqkHnH8kUkKzLgqenNfJqQotf9Zn9quJ4fw8yBrnDYie5wY1awjP1HycYKqTqQsLmAzMGVwWP",
  "key23": "3aWUrJMt1Vx51qUkFDUZWL3jSWzRucAnuhJYY9ha53UfmiLVCiH5izLXPasW849kg9YMdWhypE8zCq2W2zsuEkor",
  "key24": "223xZ3ZctByJdfJ6jwAq34C9auvipAG6D2k5kx2tabRVwgtaH6w2Kc76tEPp4PqJN96kqk1F54wNbXyVU2exZwo7",
  "key25": "5saWBbxPd8qYAYBf9By7thfi6AS7AL1RfVzaZTU7rpE3b4eHG3xVLofLP6HgYhsLE6N6C7PMejzTQRkXjYUAsCAP"
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
