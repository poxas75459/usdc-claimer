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
    "aiHp2zW725sVkM556RPa3Hq9YHk6tcGXe1hwSTQWEhRfZjPi3akgcWyzCtoDS9GzQeMc9sNJs2vPPpCRG35sv5r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2y9ZPCKPbUwDLGBbUrNaQi2HjtgxXsB4yKL5stx9rfsnMqxekr6HvLxvkFWSeZHFUZh1gPZriXrzv7iWoUXVJ7zb",
  "key1": "48P9H6DJN7LoafyLDLEAVsjF8qNGNj9CmyGmAQ9GhgLR9PoYT4tEhfFjaxc3fpKT28hfok5jpnejVCZA9yC9bARX",
  "key2": "3wXE7zpRTHqam4YznhWLTyRVGRoC5LKUFFDqGMjy4pZPhYN7TwuGFYSyPSKG55kpXt1m3cB1SxQFyz7Q3jg3iKm2",
  "key3": "4zuNNJx4mQBrePsmEok5j8g9NHfAQKX9YxVY666s2vUjFUjjYTXZSyQoZYChjBsG1VHpz6Z49tD8Us7pDLv89z3A",
  "key4": "61szQVsoUhmvFvHm5ZCoxzE1xUGjvB67gNYqbVbgMvKPJdFhHWVDQSVVjJnccZw43SGo7hAq3fgM49cgkSdJGipc",
  "key5": "87hjDrdo4T8scq7sfJkaYFmMHrt3WjvD9STvMDtySAcZexrGRsw9SkBgZ5c2Fw7oTtSDX5PFKqfhnqVwyhH9JSp",
  "key6": "TUgsKX11uLBRFwHHNZxKgWuT8YNE7RpWb4Vsk21xUZpwEXRqVNTm6E7u9ZMVKUYzjZSg2EmE1ogxGbD5uYkDfMd",
  "key7": "5Wb3RMLrV7ZKa5anaT49JkxMviNjwDbDKWYZVjTPGuztUEx4bD5KWsTSFwyo3A5fSTKwBFhUxehX7ALt3Z7nEqkQ",
  "key8": "4nG2BszM7XcXAvRDq3AMm5h3Aj7kEDkf53MC8p9MT4ihuVq2kGWHjKB3eWvgK2ztH1CSSQwkcPBQqYGXHt8Lvse4",
  "key9": "3kRNy2bJPKpEiekUB6sdfWDNo8H9H5JTSV7zXJ2hLfaYvS6mXXszfMFMRnDZ26wpP8C7EcwyWUXS5JW9B2qvdiKo",
  "key10": "52AYwuphYFKjKnUEGBmVXodGJqtK4yMwdda1VwgSUXDJMSZHJiSvZY81Ux7bUyDnyU6qNjr28BpAxGsEfjLkAbC1",
  "key11": "i2shd8fxf8gpCk7g2KsieT6yXoBN87g73bKGofBXMgkTp8pW1Y7U87mjAQbj9EDMwhfoxLU9UG4T1jG9f9fkhSm",
  "key12": "TPHKiwZxupsgxUbjoHc2sN6zsgQ68sEPHhdfSinmaNk8FHCdoNGw97z6zo7oiSThs5SrhLc3bK7p9jmrDQ3NTAd",
  "key13": "3rw1DUwVnAbcJTHDjvJETj2GbDKzJBYn3nojb51mNy4VV3RvrdoJMdqK4mk1Xp7vBoAyEkkSgTzbrTQRg63iR6eP",
  "key14": "61LQDN4tm1KXRGYMHPguSwTLJ9xmUm6AS8p3XMCNHYAKW6Wc8NSfJyhaAbX5iPG5ZJRciyFKiHbyQS9kvNCNZB9e",
  "key15": "35y1iwF1ZndxQAu6Wv8XXkvAk3VkNx7XWiFdPAtBjC8WBWbHia4EZZGmrGsC96hArY8EzXoWsZxGYz2peqoRQV13",
  "key16": "4i6syyBSWqHGdk7PNLy2z87FtFPGZjhgRh5bV4vhhB2NkzM4wk6qsuv8y5icRniUnd46eZa1PKHSNreFJLhC7CjM",
  "key17": "21q3E6vNEeT5J7yrhAuw3pqBFB1bFj1NHteinRsUZMZBjnUDdiWkyvL8w4ghcVsFDjgfBGqEqLvw1G7p2NHASY5R",
  "key18": "5d6XJxwRPVYLLa9uCf9ouvVYqYsYUXfzXmk2hv73xRQK7Vbmi1vTqNEaTVZXodaPGpxkEPAQ6FdZvUZWh9ZLUgjZ",
  "key19": "3KcAPcu2iU1HTNKDLA83T6tgKKLvcXFFnL62SBUaUd3HKF6fdk3KkzCDqk5te1JwLA4Cafj2c9pXTHhj3Ug2rXvk",
  "key20": "5tnE3oadiN8GsqtKxpP7etxqMTKbFDq6Y6aZC9R4Ymnyx2hoVd69dvS6wbw2uR7NiArQs2WKaBf2S9tbASN62BnK",
  "key21": "5NRZb8zJi1goy5z2ZqEFYkwWLhhwCrSEpnCKHgeps9jZkseUZRu9gjt9m7E1ahaj9VvBWi6m5uL82VtvneTus4GF",
  "key22": "8WHWRXPmjpysE5TKfETTLNGvsLUs1BmEcFpvSm7WS6xE6j84d71Jjneie1etQn2wQehgRZ3mqsc61s22LnwEPgG",
  "key23": "drdquJpmgMC9xvpBZfkuc1R81T6ULxuck84wa6NwAzisZjVDt36bagoYKpKuNnrE7UtFAFv8DUuohJUP8JXu9XM",
  "key24": "5LsfqAF2bJM37ruPRk7awBsE2pK9dacd8xoeps4AZpsBeyFABuXxEp6tHbCxfKZceqwTTozvSYHw5S2snGPLK39L",
  "key25": "DJY1axszjBSpd1JbfQRVgDFrrRWyxdSQkwP6DHRRuzSGF3aNp657iGXocCkjgk9yk86tBgML6zWHQdnRmYecdsn",
  "key26": "qMcrxcXUYPyGPTgf8hRQWxNRRieomNxvVgHhT6UmLfzcfL6eQuoFY1jJrpLfEapvJTLKq7Vt2CnDecjHKPMiKRm",
  "key27": "2FqZkDHtaPAMnCRasGjDwztfupfgtVDiS7HdyZ33oZnfLw89jhkxz7HWYwfoVXCeodaxM8q5akwjQJFWJZMGmY4c"
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
