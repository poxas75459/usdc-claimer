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
    "4qUcTgubhGoNxNFavprK28v3nKrjjUseUhcoaesd98R3QWR1bmoF2cXeEhCFonUBqPiVGxpmG6MUUkAtbo8BunuJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bptB1zjqzhnXNQSU2iewdUCG6tD57fBF2kAmF5rpgeJ7gwtZCJwvd2rqczyfVrqpTc4C3BhAVSrJyfdQhq9fY3x",
  "key1": "2fPEYxUAZpvKnMfzNdNgG7CsMnAewioZuSpRbyVYpyhcRreeTWxCMWFeFgBY35yRtefYpDrjRK7JEGR87MZAGNuN",
  "key2": "29L36AB6sm5jRws9NCKcvPDtMozFZAhFCMr22retECdiFco8LVYynZUamiuJbGmnm9jkDW5U7mtGZHzSRttY9efs",
  "key3": "3NZJZ8iDxgLSJVJVuXGh2RxCkCrNiXwg3bfoLje1kW1sK1u9pGJcA9qPQZ2jQRZDnGNcKvAHpHFAnN97fvFAPCr5",
  "key4": "5GFAVbbi21xNdTrNCoQKsyn4j6QK5aDXzAVvkussSkTQcu7zcUvgn5KgAKwCpvaCd6Ri4TCPU5UhPm6PKbqdQUtr",
  "key5": "25ja9jz2FQ7qLWAmCMNVq5FDDEAapTHQkrUBHURi5ETdcYvD8x1Dzsoe915ijGJBh7V13d5TwWeVbzkm2t8YPC4n",
  "key6": "2QHnbXKUKznU8wYzEiGZ42pvsgHM5jjAPPeXDnC5rDCA1wgKR7LZMWmE8GGTrpgK1guXyyTyZuq3JGE3AwEEg7iA",
  "key7": "5vHyiU8MauyMFhsFyczStJTLj4iZwmsx4NaXZhzexpo9xjn657N6XaMtPkKuokL4HZbySZfn8rSy7eVihHCZ6Vu3",
  "key8": "24FqWx4xuqmuy5BUp6uZxUxBJJaKDXcPsWqdAuBcyj7ZeHmhj6Zoqf6YLU4avqEoLWfyw9bm6hEgtsUNfNKjT79H",
  "key9": "5GTDTwZfiYXbz6y4jN8PRbZnd546PYwDxw4yYVZSybYYGtXErQMKrYSYhA3xEXZEv72QYpsh2Neox1Ep5n2wTDWB",
  "key10": "5wzvM7EBG1U3SywPKwvRKiiGKoFpiwmB3B33TNjTzgBn11vhX1xHTakAF7VoSio8Fn9BM5CbiHvVYaXvqYBeUg6R",
  "key11": "5Cz6XQQEQt7XTxtQ1N13aBL3QjcAyPnP5mXFwnoCK3Ema3YEKTSi6PRY42bijgwnHBcjhQF9TsHnrj64yi5TjvBu",
  "key12": "3QoW5uT6mC7gYt13HdH3vx8c8nyJL63ZkoBUHdXndCuxpUqyVN7zQU2Hvv9qXveYKqwy3bSS8Xs3HRvLryA15GfW",
  "key13": "eWvEdmrW8YcRFZTzmVosjSf8QojeqAZ7uR4DokGZgNcZjgrcBHtRPwK9XZv222vic9y5VyYunTKQbXgC63L4f6X",
  "key14": "51ywdX5TvG6Y3ogNFKQ8LHsfoSSwrAVSnj6xYGKpNJMUh5YwVrPBzjmwWwNDVtQ6vVaaC692UFi9i3tYFTnXv1sL",
  "key15": "4o7cv6SSTjaeobZh7d1Tpxi7VynHiTGPe5TSno36HHm5XgCbz49pgQEJzUrwyyFeEYrBAkN9pmsfSKY3hPwDhQoz",
  "key16": "4Mg8BPFvwDSeQq3ZVCs8tHe4fb5t2iorZhZ5cZpcUWC45BGWSEhqbCwqn7p6cCp7uUz7iKFZaAx5Y7QGvQfbkJmm",
  "key17": "5KJTyprQynkQnCAEDgzxS5BRPJMqaR1SAwKWnYd9fDtAvts1waHZHZQmYDi3tN3uiBSkqV76qYAFohEcpFGsc6PZ",
  "key18": "4Bdm6L6bzsWKDceQmHNGZKdaoRMRhEu3x1L9LWyRLEEVtCsxSdroTB7wgCTgqXa6yV7dow6tCr8HrceAn8TUaMGJ",
  "key19": "2r7MwSEyv64ycpdC9yHrEo3YeQdVGUsGWUT7L4fGf65zKGXZX1A2E7Pauoy42Pq3hgecEW3M9Vpy7XTUsFDyiKzu",
  "key20": "2xbXtafqx3oDsT3cPvV6shZZn52z67NWGFX2bZdYiZKDDYTwxzSkZcWmebS1g1VYWCkUMuCHEd7SCBAXbBpreiH",
  "key21": "LjymaWQaRnFypjUPQNFWGiiSoQRwEW7yRvVemHQBkNks17z7Se3oDwK5DnafMKQ4gcDB9HyEMm3vhhnKehA9VEy",
  "key22": "5dFcqMMrYkA8JBabAaRaMmDQtEdpeXDpUTJgNWznhWdKV3nVgu4W7eC3FHRxkiCXvX6yJuosTXGvhWmqu2N64Ma1",
  "key23": "31XvgArEXpn4E8Gxynmi3b2eg4GPAr7jaoYrtPc75Yw2eWuFTpU6vdis1UbPdoPTCvoSQG7P5C5r3kndUGJRmX9d",
  "key24": "4iAC6VqG56tAC5dV86p8j8YnJbpmtNFMCwBcroPFJPWBaZY8CCWvVQ7Pe9YEAs6kqwe87AZG5wHRkSG7V59vShD5",
  "key25": "2fLJrmDRH48wATjRQYGj7xfxeccz8BXF8NhtEBx592Rd3uL65BqvavuJrZKLm3ccRPrHspCmsvdkQgN1nQ6WYbZ4",
  "key26": "5dcd46sg9Fs77n2im73eJbFEEWVQTz6jAnFVuFF29Di787aDF4Shyy5a2Ff9rLfn5N5Nx3X3chcmE6LJ1Sb5quKY"
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
