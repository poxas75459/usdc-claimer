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
    "5UB8g4XoSMcyeU3nkGBAMcWzt46GFRq7LN4L4wKgjLaLtw4oFqLeQFY3aJJiyduTGzAMxWhexTZfTpeSSQUi35i4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2e8XNTFLcFvBMdQEJ76LNM8Y8HJ6zFKGib3CSA74VQzS16vsqhJTiqfmrcf1S9PNRJSAGcNhqCqLR3UR15sSZrTd",
  "key1": "5zjTfQgVUQ6qHjJvwYmkhfLTXwVJNGtLBhUFZkdVcwinEuscycjgdJZuk4CKiFAnVEcrvqMnsdnYPT7P6CpfRTYy",
  "key2": "3uhKrfj3KmcQ3jwVzzhiByEJGACrrQG7kgWcz6PU4p5bh4XiK1dNqSz6qEWEwopRDY8KNRg9nxiuEFwPoeRbX189",
  "key3": "3Z6C8TwpA54pZqeYVVsQ9Q7ubsPGSGWwKZMSSnnH38WNnX2dWkknXeg8nQLmLL9WK1UYKh5kKvxi3UzFRyoobgQw",
  "key4": "xZiafERrBb5NnR3tUvVnh5Zawudq8KZmJ9BtZuYHSzbgbN1Z6tY8UUKUKA6NxDQEPA7XYAjYW1MYLcjLaj8ADLD",
  "key5": "UBXpN6nkBxecbfmTXj9EmM6w5rswdQ9TZ72s3NaPPE6fK14cS3C4vuAdZGX7sy4VfEPxtdEAtzndkhTnvAAhJC7",
  "key6": "3kGbdvBtjeJpab356y7bzMELf16nzCksBrfEcr1gGc3Q8t2sjyJNfbn93TWa2KKaSc5gXRqWct2rf5upZXKZBrft",
  "key7": "2zNzQ4in8iejHdFu4nkx8z7bST6WNuPKBddXxDz5Ea3sSwwtCmZVNSyHyZuaYeGp7HXVZrJrZXkjyf5HKkPWnNjc",
  "key8": "65CJm3QTv4ML5WJA8aa8Y5m9EthCETRaApLV4Kfituys2BLmUMj6yxKVAV8Efz9uYDJq7MDzTTy1HmnqXygi4QWB",
  "key9": "qq6BMzwb6vdgkZN4UnFC6dtWKaVnfX6k3M1Gcn4THXsR95Qe8fyyRt3z18PLSBCsZwL4KR2HnjT8FM5YwM8Bnm4",
  "key10": "3GWnKziLcccxaefTkSvn1AKzKvhTYwZHS25W2MxnLygmwzCcFvKgLjjy46hfV7AgV7CirB1Uw8qNCE1QaK3b7DXY",
  "key11": "2pS5rNGyXWcBjt25BEitwTjjKDfobYesWVhLRTrmR787j5HLv39k4scP4MA6dBBh8WLA4tsgdsivqcUpgYeCSdui",
  "key12": "3bUQCAFBnkRuGqmZfSCx8mbZjyVdVpaB2jsGB1WYMoMpbVnEKVx1aW8dpF9Q6qHhVY7mV6dej1RRsWnEYbFtNHJ2",
  "key13": "5mtXKMZFDbFGNmbd79S592pfVQYWVBynpfE5LsCen3oYP9ftv7WFnfFde76t4czABaYEjaQL9Fb4c61HVkT7USRZ",
  "key14": "JkL5u4aVHv6bmRYnKQcXkQ1Eo5mKm2r2bAU7UX9FMnAucRcB5AwNNGjjRoKm9dp4qU2cKmkkrUEFCp3eKzu9zG2",
  "key15": "4Re9hqrkexrj7oWMQ9DSkUY9M45cudUfTRqt21SCCyL2gsbW6cRVqHA8jZpa1pWV227MRkZVEfYr4PP14bFEi7Es",
  "key16": "28cmKBvVxNRYCUezXKAZoHxJnqz63HbF8pUvNFt85tUDCsGEsLbGQ5Wh7spvipuMgjxaYVS3pyc5y8FdjNyD8jz7",
  "key17": "2M2d8MAXrzFcyfrmMEhQoCu9yk5nE1dUNky7AzqjFqtZvgKQ6w2fztjekCWmRxhNbqU9cR5uiF58HxKbweyLRykb",
  "key18": "3X2wqy4KqJM1i88q4Xrw6SewVKrvBw31YkzPYnK1T3QkGgNx2Gv5rUQG3AMEHAtgaecj84rsMek3ACcX2a4q6eBE",
  "key19": "641PgWMNY9HXaBDWpAQQ6HL3W2bjiULfPDgHLxZr68oNEjbLYUsbGaZVzGhqw2giuCBWiAMKTAgWoEuhc3WzYY2x",
  "key20": "Qac5Wn3zWKhfR8WjwuuvmB7qpxhNk3LA26LhdkdW91wYzMRvQma4hZ7WRZ2s1ozWkTPEBVhqtNAdQzxGkwfpLjy",
  "key21": "Ee5VpiACEarEPeFuKCGskyMZvFEgAnUinbQsSVNKPARV6d9nwdiH7FriKhCaMJ5EjCfDzXToN4K9ZtfokefDCiz",
  "key22": "5iWR5vENkQx61undsWCuY9SHhu5AZC8pUnEicYmqqua6RyV5GPxMiBxkWq4sT38iM4GC3xYBQ9YE8iTXMdfbv3rq",
  "key23": "46Yq6VhUX49uf3J2ETMNus5FtqCsWnomzyJcC6HeTrLibPXYPq5EWec5ADnXUdFngrwg1ZbgeBurAQsDm3LsU1fz",
  "key24": "4rnoAYSAcyGD4ojWdksYdcSGy14GbtdnnXv6tuu7r9oR71xhFrig6vRCbXF8gGsUMVuhSyGtwhUQATGdN2FRtHQR",
  "key25": "8JNpPpTXxN1J9Dh9byAMArzBXbmJbd25vsChViHvUT6UymZxRWT3DWSBy4Z66u1PDZrWSp7g4o6wPZVXFyXw4is"
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
