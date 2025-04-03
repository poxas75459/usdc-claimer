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
    "etFot9j6tPkNz2XEgUtgxCBCmYWnBpJoQ1sSVpYDrSS1yAcbgzdwQ7d9xdTDNnLvUstLPFG4u4VDfkFTFi2yP9w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZEAhm8AVTNYJEmi4gr2V1fRcFy4XohsTtz8Ap82idQJd9Lmn9mLqtLhRzq7cqrmuwq5dYq12KT5tBSy96eaDihU",
  "key1": "4k4oxrd73dU7sLgo3wY1veNXfZKYRVCRbT2m77c7miteiv96Vr1UUaXy4ssM2aebdooWrXmRjN5r3JT3mFpqwuuP",
  "key2": "4TtndDMHwVPzdPs6teVSB1m7EhtXpsXBVHhBPx7xygTNNrgpSEw6yFg18onCJ3u3dpxca42GYzDvFS7XdML7kMz5",
  "key3": "2DKm8yqMiuj5ewU8Q46GFjn9vMWK7CwgZhQjQN9u98zBHXiquki4VWXZSXwbbqZRbtR9NN1oERNTLCZxNwDhFHd5",
  "key4": "42eJpcpXoSCeNDNJpJ4a8mNt1p9yRJAK7LQxwqFjTmdF9YHgfixu5QwnuRUx2JmhawX8du5XEztt9QBH5sq3pF5h",
  "key5": "3Qc1kutiJroQAQ6GYCXjQegmF4jZUr5Z1CyrzScFEB5Bza7htnzH3T91toKZKUfUdkV8MEDXSmCzvBNaHiShfyq3",
  "key6": "5nk3gtE24P2FTP7iZNBqfy1dDvtWhrsipDjLdQKMWqDdDzUkakPzXRKeUcbhHDvySEckHVTKYRofXG4N5XQfhTRZ",
  "key7": "23bQyRz3iMTi1xdepEBhu1Tx7jS8G6jLfpTGgX9Bz5F9Rn2qpnKeE5KY38FAaWzAMiEEnDLjGgk52mf1nwrZ82A6",
  "key8": "4kCs4hLXpJwgrxZomoqF9AsXBfSbBdEhVq8uZeDTQb5MVk4cMoJXRfvYAotxt6n8huY77xhdyVGVBE4r5u1ztqQd",
  "key9": "4ajPQmN2icjoQRj8zvP3RagZVGbvoXZqBpRh9nK9CrSXYq6o1ZXLDDcSuW1NFw8Ff1LbLF2pGi2ueNbBVNUkMXiu",
  "key10": "2HopeU6nsX9d2tyWYJw1MMx2QXFGfNvxzJJjE2EmJVmPt51Y3xvkEKWhg7XkbMQbesWEuGYae5yDGtycpjLCjagg",
  "key11": "7uMEotaKTiPoMSkRpcVFg7NetXQssequwVrnfm7oKFZYbDvETnHoerkHEyuL7zBqBKmHxpwHAc6gidPnsAgDer7",
  "key12": "TxpaW8J2imS4nXF6FLYrJRKkFqBjvkYBVa3XubhcjmiPkNwvWiwPKiFECxQaVE26r2ptBGi8waFcNwrsfekTzHC",
  "key13": "YaxLkvZ7f5EsAZpFP7y2XYHgyUjrmNQsJ4kwhKnhceMNWqAPuDAa8J6Vwa6LHVF7Zjx4q2rQ73n15QULYf2iytN",
  "key14": "5XuBvVtvyvm79VwY3DXEJcNts2i9QSYLfpRz7XXa6tCBRRiSs9ojMjZLzZxVN7WNrYr8KqygBtXRV87cD5HKoP6K",
  "key15": "469LCwsCRaQgHxALMM7d4q1ETi214Y5jxdiaX7WPjJcw2N4StEKzka2VjvW5aYJ9yP1ytgSWQLtoZ5JSjLK2ezsb",
  "key16": "5ku3b22PEp9LvYoBDKCpFzZUkbMwbiyjjYxSFoce26pPuDbq1aW8ZeyLRWLSoyqF3TEDBw6hUAjrk9GjnRMbe1N1",
  "key17": "3FJtBDgXDFC7TwSEm8DUVFVyfqj36d2uhEPJwecY1nTX3Z7XEuQRX6Qp1GEZTs3fCkN5UrZn3Ak6EA6TQmRYfdgQ",
  "key18": "2wKQW6giEQEzwcVR6NN7fvfLz555AL1qjP2PrbKsetX3ne2NEV6ABUxaEw5jQyDtEpGXnE5bkWTgHtnh6nsrAf2H",
  "key19": "4vzjQQ6JJVaBcUjiMUWxBAwcL7ELjijhKMkvhUL28ohkECPt8F4NgWQoB7fj4m5i86tZPvg4yqCdFwAE7DS6Qy6u",
  "key20": "4LLi63hurfoq4PuNAbSA2aQE6YQMb3ZyR1VcNra9BMw2EWPzTP5v4uhrieSQVmqtRUGWk1Ud1EEJP4ZCjsYgXuHQ",
  "key21": "4326pqLz8KWqxT7wgAeEyAXqG5dvjn4Zmq5ZdzEGfNHvm7jzpccriAGDEwNCmdJ5ZBDq5iQvVRsJXafTy9Rr2vWW",
  "key22": "2vd6cJVurJx3XF14Utz5PYcaKkafD5UaikMNbygMkdgKoupKEp9LjcR3kx1mSzrm6Um3bWbSMietEpf2ZVkUoHTu",
  "key23": "4qUt9uArm3yQBsDAkBmh5BzUf5RBBcxvEA5J75XmzuyrbHd3wGttRr4dtUrs4D5nqBrckaczzsyAQMFgV4r2X7w9",
  "key24": "4svpZ3izjbSaoiJ6VJgYwGwDXhatmawsrHxtfzSVQUYg3nj32e1MR9QYdaHyUpQ3m77imp2HqAezqBNTH8r7LeWu"
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
