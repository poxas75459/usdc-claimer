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
    "kdja61xzB4nkuyxuW9QUU7qtXZ3hM5xiWyGT23Cyieviz4TaPJZTEfDtYFefCK5QPNybvYRFUh8Nqwpqnc9qj1J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PmtrgvJQH3bttxUBwzJ46KUMacYgX66CWn21q8D8pRdujQNSLxKmkqHgR9iCph9mZgjE39gy1w9xRJDbJ2YJACZ",
  "key1": "21C4WsgPKmdjdYUhYRV6yGpbBw9jPYN3T7s7mrwv2bQXh4YBkAPDMdVsv3JEvTMNEiMBmm7XqwCyf5p944w8vrHz",
  "key2": "5y6FvpJ1UcVfXMHUt9P22wjRNqW9rWhiPzSiiUKrYrJAvBbH33CM5n1vT5gbJAPyU7VU4acrgzjFWsUAojDj2PNz",
  "key3": "2dSax9uHstwqkK53ZrcdmBubDmWgNQLVrRiUZrLygqCKhopWvSeB3Wdfa59A5ccMCg71C35hCSuKMA4XUkybPd1J",
  "key4": "Ek5rouUvBRHEFmg4xcAGDwL17DnudGV1CSPeXMn79QkLfwRgj55Egom8HwSYdJd5GWrAAxeHwDGuxeqR3FPsc2y",
  "key5": "xNLj1gVTzLRccuWBzgoeZjb37UxBBFiNs3UR3qWhTWg9fYKDorEduciZUaZa9hYXxSKKRZN352epKVCCUgSLhwi",
  "key6": "5vRhccT1UemjLxY8dk65DEYzLBtPz2KwWCNbAELSNu1vuYWehDcZsYs2xsALWGsik16KrqfNZmUk9ePAhdBpD8xP",
  "key7": "52vK6CiGPAgwKWJC2MrztFmwoaec6Fi8Z685Zf1VsxiZpKHmTqweptUdqmDfFGF2k73SuS97Y8pnyEADg2GDKsk4",
  "key8": "G8CokwSEjJ4kgBqonQksj8CYPJuKQDPuW9tZvMcfLNj3j7LSQTwqXYde3w2mxH6VQtocjMcDJWKE5EjoqRmk7yB",
  "key9": "4RaC3PC7e1SpLpvbiPYUrF5ot7wzLU5z1J8wc5dbFYyYtk8PciR1ELy25nPiQs9GY76AKvSQpAQ7TE8JHF5Vqsrf",
  "key10": "4iDtY1GaUCVU1KKybFLNxbSirj8vMkXBrpGg1XVirXs46RK87p6fSMyubXMFQUWWRys6JHsToxmN2iKF2zY8Quv3",
  "key11": "5i5FrS5KJmHirmhRUGpL267gbNMmGQcGP3aQ74kj2qkiehikMGK7nQ6p5erkqdTHN2tiSV6hACn7BDfuQ3NvtPoc",
  "key12": "2vqWHK5WukquEhpujNzxZFb9DZe1H8zfVvnrkCh99Ce3HZZph4kyXUtGn3aBq53eFwABbGDB3Xx8QYSJbeiLD6b1",
  "key13": "3uHbCyB3vE6Xy5k1x4Y6xfESrazbRb1SKxvwQYnb6pbHzjf2n7ZbmZouZR7mC1y9QDaghrnSmHWG64GtH46w6Kpg",
  "key14": "4Hm5jeun4syroCwPWKzah7ghNYx3VRd5XEbhbvBMuDiqieHektVsmSvkXJeMZdnhfwzQihXzHk66wBPGJ42svZj",
  "key15": "4p9WRHqCj9don4ioqS8u9XGLXrDTMhasSigb3RTmt2fKZLGtX7rPVmEnHKjX1n4eTHeU4VhLdJkrSDYTt4MdNoX",
  "key16": "4yPTjsitTv4bNGTuCvh8gj6RbUExP1ueQEiGeonWyuMYjvbNTjQy4MbMmsC9QFpCxUxjc8CuWTzfPQG6jqBKS8HN",
  "key17": "3vqZS3ofakYoM5mCk9364SbTuAgdLgHXsWGaNT1AqEB6udx9g81jPV4i3XiHZ4nbucXXUVrYpKYQX2fKg7qTKymr",
  "key18": "28trrBkFsdJMx8Vu9sWwK9jERQzLjwt8JK2T4X9v5akgQwMaGnUGgFgYfgW83w3WcJ4cCiHHHYxeYFYA2crCssM4",
  "key19": "5zS7Ezwif8mxY65MX3k5o7QbDQM878XVU2QC5S8WGJwBx7DB5tbq8jWSNMehowugGzebUzQXhN7mJNURUwW15K3B",
  "key20": "2q2kja7EvgaocaGsYbnh1hjWp9fYMUc9EJieLRkuRoYNzvMZRcDcFyVVJRASTFsvWwnskTDoLdoZnBJC8ApWR87D",
  "key21": "27yEZkutqPjgBSN4vkjxYYEG9tnkh2WGhh7TissjmoGsQE6or5CcCL43npDTN3ixBoW1hwRoWucfobSWe98bqfcw",
  "key22": "LzLSaEutsb5awPHNmQ8pcLT3deBNejWe4TJijULuNVN9VtSYVFt7hC25CrEbkvRq6k1yPZMdh4upUiXH8pPt1Jo",
  "key23": "5C5zUyEnyYZZ2ittz6izigXgS2g3tBKS5sTZMM7PatSoChNnfABBsXgY69a2ZtnhGB58fD5c7fGwwCcBXSAdoSsw",
  "key24": "2gXFs4BQHbXa8uYeQEdaAKktDSJCT7bZC8xgAwBqxvUDhEL6z4bfo8FUWMbiQWuWxB5Jm5mVJMgjWHHMvxUPE713",
  "key25": "3koDePJfRfxVNpc5cXNa7PrhJvK1jjs9D8FAe4bP7cx2jKZpu9vmXXvvrpk2PZHJsEhfL3yeADqZx7zriYpqnyYg",
  "key26": "52ABDnmg4ET4kCWrCP2Dhgza6zTDrNTfdFrN1HMMTHJwRZ7SLC3HXC6zbnYxEdzqVBbWKA98BGgT3faTMpoX8wye",
  "key27": "3xNX6jogaLSrurPG8iADPJkqgNnqaovnXABKo4JKnKJdFM5UyWKirtBsHAg5PU3viuRnH5E2LteTTRBnHh3N5qqb"
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
