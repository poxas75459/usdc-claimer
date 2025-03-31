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
    "46JQoPE2qDk2pwpYKEXkiyfXGPFiu4ms7BY7C6oNmWj89o8pKuDt2FDy7rhRVb9KugSQL5QyLQpcHNxcVYzNkqeX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NRi9hVDmenan8ii2EppK6PNyapLLoiqK1dAGss5cDMjGyxAXn8UC3e2CTZaNjQZu72hHgdAz6hhWnvPMMjCLMMu",
  "key1": "2SSxD33ZvMxYQ5b52q3WPgDJfK2DNvuYMcWZbExXFzmfR5Aawj4ETKx9XmDibLUEguEwdqfJNiz98vjp2kjbWk3U",
  "key2": "5NEtPgxTmgAXvNnTwANFaZpSEQo4YJ6hfFfZ6bwLJ1L9oF9MvBgKQZTBcahsZQXiCb2vqRZQu7hTpgtY5a1ZpLYE",
  "key3": "YM2zWJ9VJZu7DJ81np1RBWMBfKne5f6XEjMH82J25sXm6FSubA9udwKxZnaw8nXgQdTnvMpjYKux9NwWt1s3Q9u",
  "key4": "RFfcJZ9dqqDLHai8u2Zitb1MrFq7CN15z37Bra3wu7DhUPDsBpWybeKdnNrjMDDNDDjk7ucjaaYAnq7g2vTVe2G",
  "key5": "5AMZvdVa2p17nYwo1yPQ8EGjzoN8gFfSDpBG5wzNqTQYyYwjbzBESGizorFmFmA5y7m46n82wPSjB18i2BhnSUAD",
  "key6": "5GEcS4Q2ajd7TWuNVCkt3KKN2puGhuEmHsqv1TnwtRqnEZfEL5KnAx8HYSziRb7ZBEvtg9vPTMsKWi23jUVfVVo7",
  "key7": "4LA1Dw8qSoSE5QWmsdUsXV7vy1QpAQizj1aNL3PV53S3KXg8tw4u1Qptb1Pv9e7sT28RKmJhrA1V7hQQ5EhhyQob",
  "key8": "5nbtDgMSZn6HSNtqG1qprrX6y5QqgU3ubFrH3XytLMJfMgFLiLVr2qhQgS56729YK7jzDY55Bcmydoi8RmcbaBh3",
  "key9": "5ysUAue4SwKxdLvattivZibPtz26voFFupQY5G9UuKpng291drXrTb2GHJqa4Cd8eN89r15Cw8bvHoDcMHZr4arS",
  "key10": "5vihAmS46XcHaeEmCZ7SCybrwZZJhNLoNMdouGeeLbKtpiEAdcTtVVKTCvJr9349vSHNYbJ7xtox4U2aqFF69dj9",
  "key11": "2UXAsd9Axos6LDjqda4QphMLZLci4mooWpwGz53QTWDu7TbXfmUM7vr4c8sHPEnpYckfjg5tZKpyojxpy5RjyjY9",
  "key12": "j9Ud3bT76wUExdKLyyvivsoyTZtDVh68o29HqnUHEzuRBgmwPXtM4g7wEQRiXSyhwtmGQh26qXATMtHByp47AMm",
  "key13": "58esxN13FbTttJG6bsCcHiisUv7t8eo7yaDXBNTBtRwWz7hbKN9ozaiEvE6pSJykvATC232MuNpwmU2mUAbv5XsL",
  "key14": "4rU74D3FwhAWRCwSmVpZhgZniJiriNR8LqYh6qBQ4u6nc6Lqa3hwDWBZGeQ5KYYzz9v7iBvLeJ4Je1xJA9EoJ36A",
  "key15": "2TupSJQdFuJnqUU91ze44woeaQgGqE9fp7JSBMKwocUmPjHLXNfA9n1M7gkNKa2gyLr4gmpDrsG2C3o4Wn4NJpks",
  "key16": "2sQoFC3t6DGkJYGH3wHxB5bqTmzVo8haDLK4cvsVCkPGaZXHdF5qgGWwPFF8j6DFvQ7D8C8XRGVMNo3sW2ALyQYn",
  "key17": "3bwm9GtZRdc3c2m8ZZyy7Ez3K2rJsLxRkJ8sEbBaCCJWo1JvCZbmueKK5RB2rXZc65hFenyGwjqb3txEmcu3r4TF",
  "key18": "3FGQVqHAZKBQm1ZT7dFHi4PnnXwJT9nFgreWGD3PFG1BWy4xPCPi5pFXsYE4YqSwKRRQBD6e4P7yRJNp3T1pLHZw",
  "key19": "5Pf2QW5ghLHetfed7m2kA1A1s5Usdu8Sc8i9tEoLKv5hFyTnDpcExNbU52pV32xhPYvGumBKVfKYV94qVs5T7M6R",
  "key20": "2kAStsbU6hoDVmhMjiu5XRMsQQFMed18viiJiyKmtdRNbZCKJUM4BiJ9qEavvHxeLatCCaLkxx2S5ccmeV1Usrxv",
  "key21": "WNGaVGFiZs6HxwdVhWLDu59RN9Ek27qMWWcibw51cuUhn1HzVTQ8aEHHZ7gqqqp15dAjZNKRb4vGs3sf8fssCHW",
  "key22": "28Uj3GwhQFek43puuTi8eXZY3WqPx4F6m2u6NvdFZCQUtRFB2uj7eKMRskj99gVCR6z17tUy2Q2fq29YVJLQGauQ",
  "key23": "5KYTVqXtqFW2tLqFEGcqqscjm7QDFJYCTD87gwkJasjrQ1veqJXhAF9GD9dsu4E4gQ8QoNnhVrrcNsdPTtJnhArQ",
  "key24": "4CT93fDjw2nb1ezQFp9JByHxMJJvk4H7eHNzVW8CY17wgdwMKSZ12YnLp1g21Dx5NQ7EpT2hxuMHFwxLrXZ5YBxp",
  "key25": "4gLXSZj9euV4eVCcMDzZ5ru2GSa9nq2SEhPdVbvkKZdePeL2pH4SRMZNgcBq4wJ7WWgHdmKrUEyqPWBpfCS85fnw"
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
