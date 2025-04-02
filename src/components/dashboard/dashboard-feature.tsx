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
    "AMdUrvocEFS6Zj4xkxXFWHZWW56pLM36qY22tkDNUqs8kAYXYw1U61rrMKYTxMzR9Gy4ngMjXbMtuEoXKFkw8FJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2djWvE8apji8Tj4Py1d1YH3dhnnGNGf66Za2RLcwoM5Y8Ha9aBgdnvnUJ3RQGneWMG7DtH5827UgSZsPfrUUThaz",
  "key1": "b39E7dX8unQZQVCfneP7RinPdtFL6VtrjifHvnhyM2Ph67dorPDvpiQC25u8Gk2QvMkorpVHcYAAemKi5fzzHy6",
  "key2": "44Pg4Abr4dVe86vWPKctFpwQbXbN9mWzDQ7f65mjNzV8aph1yQYz543sgRESuQQDVEhnRwJHnN8s8JmNn7moD8oW",
  "key3": "2ZMVLXqA9UakxHpKmVfgGY3vH4vfxvjoKwkE82XnJmd4Z6BnUjmmrzS64iU5vvUhQvYWcXNRHZvVoHvdgGPK1Ype",
  "key4": "4djx8oh6EH2ENaaiffxVyuyqJVFpegaPkkSSL6W1svMb4FmtgMS1RKHJhdpw5pNVH23Zkbf4382Bv928a2rQSqkm",
  "key5": "QYq7ihpD6facNLbmRWBaZ8kUy5BXHNWMnTgt6k5i9cQouVZn6MwRNYkBm9bc7FBMbt2MCj5m9TiipDyWPuP9eZr",
  "key6": "63Sm8zLdecYz3WTv9pDqH6CqiGZ1wAuBfzHzy4F14HDoHdPURB2nvAvufsxp91ZzT5awMMfhugpXpE4M6D9V4Y4h",
  "key7": "24qgH4kZSdjcTXNk6mCAn5YTNj6cGCQ2pQP4dGEo9mb5tPv2gP8wpHJUNfyWkwPTzD1zj1oSGXTTNyQwxPqBRg2g",
  "key8": "4Y6MEnt4MmeStTtU7HFZ7ap7LP9UxUgQ4zFrdNtBz77HXWk3rUxCWYvbXigrUsUL25FKoZXNXB8VAAXhuSjLMvrS",
  "key9": "2KsmT8jsb4h16UhpQwReGmNSNE7XBG9wqB6tFLyGkVoQZfiusNheheLUCZonm4vHAMMFRsKBc4EJsCuPJh7vj8VX",
  "key10": "5WhZzMjUTfdcmhQ5zhsXAEtHrMavTx5GGtnNyqDSnSTzfeekmJQNVsNcR2Q3mG5gboi29nk3jiCmFgXqq2QdGrtt",
  "key11": "2bTG1riFejXW1fKuFagAMdrwpzUpEmAXWNKzLckPKt3UkPREtjuA4kpgDdzCeTCyyMRasm6EEuhmB8RRKiawjSqZ",
  "key12": "4a4wE5oxityFqS1rJsW8qVtTV3cR1P7wuSYVWontjSBRQV3wQU6q5UDRrfJmsaGtHi8NXKKf5FoM5piLnicj57vm",
  "key13": "5QGUPXC3YUWKRey95TjAMowKgU39dmUsGKmGsQShLPW2XTHzDRMLktu5ou5DwnRmoHhVCqbEU3Rs3tEfZvE5aAR7",
  "key14": "5go7TR4hvV68CTWmPm3hF77NcLqWQcBZ31VGJgnCmnVK7gFXiagFY4D5haUvH9fyrhuWJuAXGtn1P1YLQra5nZ9T",
  "key15": "ADda3coMVBKpxUtsLymTJHgafh1YnMLj1wPkULQiyQgz3qZ6xx9GtTMuZwWD2q9CzTpMc1jscuY5iMTUe5aufyy",
  "key16": "3e8Fj8ERovo85NEkKMtyp353ZQ1kENPQUAu3ZUEdxbSKvXDZukUc66RwEYm6cLRjk2rk95J3wHugMWbMpokTNoQ5",
  "key17": "3KqrhPmDXY3e1RnwQPNL1LawcJTVZgRq4SxoggmkiX2EP3ojAN54q63DJ18So31rKQ39hX6r5WSC1ZvnWmkQWK9M",
  "key18": "GTRZMvxq31p9Ew2PgEutm5L19E1Dw9ZMCkppJLkeYqSxtdS8jTqsKu8TV3htXtZ8Hqnz5BRieWvjQix1Muo6jnj",
  "key19": "CWUvN5z8RSixuaLCaosu4sTYi9RniGwJnbTGktCXweoYdN7EaF2vthQmQcmQaHd8XT4z3LHn2C63MKib2JjY58k",
  "key20": "kBS38fEDZy5FU8uNPLVGG5hkX8MRDFFktZEutZX1nXyJjmtvB2pBnXBSmybFBM5pbMwvJdozY1HiQjavbL56knU",
  "key21": "3TmAu4GKiFbh32vzGtmJCGGazNNTRNCUKESqyb4bU6ptGDCkUTAE4ZmaMTWuvqhJM37cQ7VP5s5HCCuiX9dpyBSX",
  "key22": "4EyC95HyztrextGfSSQZ3UPzsh1BzghWWQQVMxFDocpnMno9RC4syMYhourJKWTUdPozyrohZ8rYWqRXBDPAa6GK",
  "key23": "2SFDSCT9NjcyxB8BDKvvLJQWKpBhXTFnxpZUg3Y5uzyVnWchUrJDXz5C2RdExPYnwfjWP295tzqeDPZ72kFrDfmb",
  "key24": "4AnbwnwCPUUTdtjN7k86nxUxnjMQH8zxpSwp5QdTx2rncMnkedcza8GETz2TAePhqyti3Kuy4LhPZ1QFitft1Ue7",
  "key25": "4z4Mhds1aJpPdD4RFs6fKn53H2TaPVpNczM4oGbnJDMRDbFCjRcZhGrvXqDnmQYk6aqKV4nDGLuj9pWQBJvM2FQ1",
  "key26": "3HTAeDQQqZLRy8A6jh6h1KqYfn6Ynsc87fK4hbnDAscS8k9b5EtjrraM7gx3iQWydHk4ZoTC92VLKSGY8yuAMxqM"
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
