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
    "3sgVYhnnRfuVLSx2Z7nQBLdxuu5FLtDQaZnawcxuJ9bW6qF8DDT47PRr4sTjxe4ZspfYu9mXAfaNic2R1SJLRVQZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BSizES29koyBK58yh8Z5pjACAr4JZ5heMPN735sX6mHc45VaFmfKrWhModS4QYFetHcFktaSgdwQ2n78wHkN2rR",
  "key1": "4QqaxRdJeLheJDTdHUGUfCbFaD39j4cp7Rr2CUBUqZANPtCSTuNd3QiJThH31qZdE6G8FoS2UBGEpL1mAvAoMapu",
  "key2": "4Vkw28qHhAsJBKAafHMvj9aC9T4opmU4JV9khw95zcx2ZD3PyqiiwG2viM7RcmQ5BxZwPw5cuMatsE8KpSTpesfP",
  "key3": "2qwMa8JrDNojKvpzsmZ54LFcwB77tKHEvEiCyPRz4kNyXwJ3Ns7Q7TSQ2L49pbj1pwsAd7pcWBioZYPXjbiYhEvf",
  "key4": "2XDyDNq16rGBTvp1AWLUpojWZt9YMqGys2pGoNyKGqt6h1R76TJcTeu9eFbnA32au5xxC6AygBe5J2W4AVdvqAxq",
  "key5": "qeUZX4XWTQdwT4AnxoGWfm96wPg7Kv2pJj4h8pAKw9jQe6UAJoSk79VJWXQDS9xeeudmDmYiJbmPhX9ogpxWKW4",
  "key6": "4AV7xBN5VWHNbXM9gE1A2sBw8j6Y8dCmWk8egbrhCFutJrNEtqcA64iY4zAXhS6MgPC6SxzYcCCLKPjTEiH2Brte",
  "key7": "2b2fB2nczzQtdP47Ubc2jxG7Z5fdZDbNANMN6wRniMQCyrjQNtKSF56g9VDAMjL35MPXKS27htDaWnUFfG4pyVZj",
  "key8": "5Yp3kuHzxnfoMUm8Mf182m2QGyAwwTZrBBRDKL3Y6nrN3SCgQCHiDYPa33DQup4P7fLxBp3rAR4kMXTDFkqZmKtf",
  "key9": "5RKWRCxpRAM6FroM2mgqaeMnwo9DSNuJNqJ6LeGYCKzHYLrzSTFtePVcQNyeY1WhcZhM9Js7DFtv8JTAUHt6sjhw",
  "key10": "2vBeH5nPToJ1A8rN9UnkUu2KsKrdVA323VWiycNh1m9XAcEbE29ijNuTj1bnWJmk8rJJajMb1TwNzmmBqP2h4bvP",
  "key11": "2zmRDobYMCKyWHyDL6YgtiUy8UABCHmLbt5jnvhG2xDZtLMEB6vYyn42t5bFVXF7bLMBR2sTQAHZorqsom77u1W4",
  "key12": "5tD5prwofELuRztdQV5ZXPknQgXzVnNRkfXv75jAVikzpijSu6nNjjdqPLFzbo1czC6NNtzo4NtAAdr76Lafjnmg",
  "key13": "5qCKC5MQdubhmuXFcnPz9SfzGm67A7m7gTLME9b8PNb65AZEm7q8NHaVDCEvMm7jJ3CgS2bbgPo7czaegWn8p6yU",
  "key14": "3EGbD5vRSASA9fR8qVEkRQk3BNF7S9grFd1B1itjdAo81koy6jUBYHtFtoQ7yTE4V3YveqbikKNdGLtCTeJXswEY",
  "key15": "2LP4h5YeU7czWogg1749U69TB3UeCg2yonfkZVvjHXm6tK3J642x2dF9CzUdZt5fggnRu8kQm7KEuqoNxuJgLfr7",
  "key16": "2iUTVsTLDVobcXQgWCt3AWq1U2uJPqZUi8qAQNH7LHFYFof2mJWXC7deSYTWZdr7fbMaTNDnyoMiDTQ2nRjFSFhk",
  "key17": "4vs53zn5DjKHmfFYHg3nzTQ4p1nAXGiMJLPuiFyYgqid1W3Rbz7v2pGx7XqbZsoSf2THYXzALpGtxcL1BTxXuaTn",
  "key18": "5GMgsD1bNBqYXD7ehsMxRbZVHYq944JDoLajuGkakUYaNrHqHkx2vGkyLLUoqFwRRNb4kMcg4KCJesrkG8qoHgtY",
  "key19": "5HnhYwFzfQ5gA8GmEA47HWwyYKQAnF2gXbkXuNcyK4h8T7FXc6sPwBV2ybckqAniYd4CH3suqMjWMqzMSLwyoYw2",
  "key20": "4YvG3FEw3SmvxyYnWsrizRTsT42YLK59ipzw4mak74j9LVWPtPeFYRfxSvKw72zaBzTE8AdrYa4bbAdGTLasqzf1",
  "key21": "2KZHYuT6D3XWjZrAFnbxvMhDdiyNBsFMUb4CzcYAhMW1LKeTbbMSaShKv75geuxkXUv3kujfJJwdFUivLYVFVwKd",
  "key22": "3zV7EYwkqWpVBpxaQ28UihD7p7kpiSoKPpm4aLUYbnvPHMyzJ36SJPsybvqLhcPKX4xZF8P6YsFSHVxrUsnwGbnn",
  "key23": "2rjmCZsaFmi3jwA3znfFBdTufsKHFTJw7h7FKrLYwY7RafTwGZKUhnFDWeLTYXXVwFU166LGxoJaT3gNiE7JH1G5",
  "key24": "nagLz9Ah8WkcyeMBzRMHViXA2ZBHqnKQtSXfQfaoSrJnFhqKGcLx7YENd8tdaAgr2n9gFDX2wDBWh12xS8qZqBm",
  "key25": "4GMBzNsJD2jFs9qCCQ2UWwBXQtsvvif9ERL94uHsK1inrDeXCHNKf8tz5xJA6Jh6aQzJfxsC8wnRoswX7WaxH4wT",
  "key26": "3skvHERijApc9mRbdyARG2r1gHCzf8JcMCKrppoXaQuVFssThnDWTjpZZFZPuFgVF2sAzMukXCyqfPa34659oJSP"
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
