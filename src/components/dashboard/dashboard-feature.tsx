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
    "2uYL1vYbEM7Skw2FyCjmzjnV8GtWqu3zFKyMrY5cEwhGvh5cV86JRrRjKe3FhKv9WA2e5PYKxuqTKyQbKBuCXEP5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EfztJExy31KrLTP2uz1tXjGZpbaa6MfyUVfGEmtE7LQefBKwL3UZEExsBQMAk7Ewy2xDWMmZ7mJb3tUeVwCqb2n",
  "key1": "2DRXFVHqzDU5QiD78xrBQ3ZeH7Gq1ahfaUtNahjCZMZoXWTCzRsoP8R5T5Ne4PbrRFYDU1TmXKmiuD2iUseJ8Kmy",
  "key2": "2PZ9qpAxSZHcV3vv2sSficnydU4pMtnfmhh23kHQCiEAHGciBGpxtfYkoFKmEzVjVz9rREoeKCChkSKAVreU2NZ",
  "key3": "3Q4eHK3gutq6Q8bRHfLPB3Q23pUybCqVDeS1sp3J6249B2RrEoSKmaMd86cUxsCW5Mw47PNqPuqWvFZfTbJcnKsF",
  "key4": "668yFMj2RceHiDKNRGpjyijTCTEqVzDETxeA9o7uzGZ5XECxun2tGYudxS5uPW5gsTMoLVoh5tbv5gLye3pS2B5C",
  "key5": "4aMtrnVrAHfUFc4Z4bPnqhLAfhF6ZKtJqfgBNAWjA5r5BhsHEV19Z2Ci6bsHnbErgsHMAn9V2fHJ7iqmaoxWTcz6",
  "key6": "FC7w2bTMteazsHGYt2LYND8yVMxP76CR2QQcgV85JxWzjvBpUc6rrHC3bqbazwUWyAS7fHqy5siHwn692kk9E6p",
  "key7": "5dJsgAcAHdyLrwBx6kRnLxe3kE1tbqd69gvbgYoqK217a7VMujBWuJM541dqDY86AtCknSRCHsgcJXiKUTMGRsTH",
  "key8": "46CF4xpAkC7iNGPBQn76JMtCBDZjeTQJfxJaoJ7uHxAwDVsKay7vWzS2uVFoVFZYTasJ4ewHY2cn8S6kvp3ScR5X",
  "key9": "49d2dhRaA7odz15RVkUYtFFSQeRSmw1GYNx3uQa9YCLswZnwmLeXtFbBZk44R2VQHRKtctX7wzX59iHVUauozRyv",
  "key10": "5CwkhtPU1JqzZ4dZUkUyTyfM1AKf5USPjA4iMGiwLmJj67ZJnmid7K5cBCwWKBf8KGMVcZ8bHkhmBAqQwA9hrua5",
  "key11": "2eruddj7re8bNiMBuQvzim8J45AUKCTfYWCDYYzJJmw9Gh9sLsqA9DMbHRgDsYnVwY2ctJGNxQsBubgv2fVkaVLB",
  "key12": "58BAVYzxZaPp4hWnv65x3C6PsgK48tYu7sVLVapZVQZwAQtQHP6TXsjszDiMTLAk3aP35CQUcZeNUzuKzzVuLhB7",
  "key13": "58cZrUt9KaVMDMqULuziLEVyk7S3nLG2rt4jjn2WMzNqvJdzEFECjyHRq6w5AsPtQNGYgdrnAbpYxg4zj9jLnLU5",
  "key14": "44PLDxPw2tTmcXzn6aYAK8YwFswz2QX6rWdXoaybM5z3NUnGKoXyt8pZApNdZG8iBj9ZwspX7ATorsx1na9YAyhS",
  "key15": "54VYJqtYV9psc7pEWGYKh3PHp18KGbUCwgDAq1p68fnXRYRAhpm5f3QDy9mrEVqVkvdUBr748RpfgjJGS3ZnnThE",
  "key16": "2FkfMU3epqmMyuY4i34AS5gCJ3ThjcHtzjig7qLfi3G54JbA39YUWCQWNP9ia5aXs2q7rv9v5p9iSkgL1cs7yLeU",
  "key17": "5jCmAEC51rb2fmuBpSizFe2ErSEzR6p9ibP9xph4XfRNjzdwphTK4zNWfP2LDuk1SQkw4cBKtxnU663YjSBE88K8",
  "key18": "3Sqo3yMUr6MERgZmiMxsxPSeshXNCvMtoT8LUXgnpWGRyQBm9euy4a8Mx3btqESAraFnkppUWVxegovFeozJiW2d",
  "key19": "GMxS86hwDmK8wKcBqiuQHw39PXrUGYHXkjqu7ukjyKoYCWKxg2U4hduMmgHrK6vbSK97R5hsQwCqPD7whB6wbbM",
  "key20": "62dFABUpse91nCssnr9fB5f8XpMadKWqAs6hmbQzuWUYL4GF3rP8KNENmmYavFMwYMV61SbJkmo5ZamVUGRTHeYV",
  "key21": "2FJEsYtx9EtpxGCjaSN68HhfdeVqY6VuA7hSNbTdwNHvMwghWg7Y97v7p6LScfiXZPS5abeKMxQ2j2spsBNgUkPA",
  "key22": "4NkKP27mtjS8o3zSRHvK74TETszjW7JDZWR1brFeoJT5CSc7Aev9fwKaJmEaKCHFXeU2zMQPTY72e6qERQiGWpbj",
  "key23": "36MgsFCHkghEtJZDuhhnAEzmG2wPewbfydMWoqJR4BHJWjqppkkpSqjZLFKEfvCCaqQfRcNsgwSZksGKHqDkc4is",
  "key24": "231CwXPNVfCKW3YWFNxBi1MuPrh7wiitpbRqXhYYL2BqC9jVzW4f9Hdj9Mz3EFUagWjJ2VuNnhSGGDFdKkmeiADj",
  "key25": "3pXBUjXhFeNyx3n75tx18bB6xCeo58oH9mg4DB73RkYN5ANEyaLMxJkq3LdRaZiZT8esVUBh75Eve9Dzu95gPjys",
  "key26": "2nKBc8y9ncjYM9zERAFTtsscyQMY2KD6oLRcd8mhV8ukJNKkNxxXDunU99eZ3PfrZcG9C3muthYoaBqDFmozsqpe",
  "key27": "2wsnEaunBCGnr7dSg8a55Muf8r1sMHEmBWwVHch5HyTDzhnbJXfxvPFdPoZxXiVZ8oLCd3zTxLwUNovt8nNMie2M"
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
