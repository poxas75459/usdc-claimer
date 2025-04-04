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
    "4Bjih6qC9RAq3H8QAhusmGTfJttTfaJcyuTjkk4ZC15ECS7hwHwEXoZ9DPpuQHC9oRSU5dRxAEg3EqnzLted1H59"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gcXZT5XSKJJSCohqy8GpRcZkCrnwRgo73nS62q4PGxb68AvqKPvRawRUH9FrkgpKMpZrFGkM2EC83fGQLH5WVzs",
  "key1": "5BqMSzRTqCjcd6eRxzEFfLkaVnkFbkHxwgaiTWCKyeYYwTd5g8xidDjh4RvNZGwVHpkwnJG2B4TkpUay2HC46D5f",
  "key2": "2STuqKN3AUAv4nTxYVcCRQYQR8HBQ32gKCXBaPuxTHf5qVuJGL3x4UnocqPi9zDgJ5TzRp4THJQCqQDoDJM37kBc",
  "key3": "sW44TyaRjHdcF9JA1TtQUgURCUt8A8bSP9v9piJUUEXtba3VdXNngAMZHZcctbSimjsXVDg5qu2qLF98MMkXSPv",
  "key4": "4UakD3rwvirLdAfG66iZ5PZDnUr4sNGJrcqjQJMqk4w6iVqYrgr3CdJCqkxVGAUuB2vvoNNNkno1Jb4Q5oasrToQ",
  "key5": "62YSoUbcrVq6ybCJrfaWZ3LWqcGjS75hUxjcjRvrYout7H5NVMMNkEpSKuJovdAoc3kaLSmw2WovFb85Eh4Fy1x3",
  "key6": "3ZF8CGeTiGqAKUtmGmkpRvAonsYkpZPUvqK9huBEmoML39udi1QKEmShCADYPWEWjA4KwvKjcmuAoUfCJEXAim3L",
  "key7": "dwfyyeajdFYfj2KCByMAdVHPprP7nZhFtx8FK9pYPuqugsyXFyRDcThQafN7ZDMXy61fa6xuBNEEPvhHgzyMujU",
  "key8": "1ibhiYubVRLBoRKbv6SBBeCztB8JPd9NTmMmzjUhSYq31v6swYz2bdA4gV5kZrVoHt3M4Cg9AQcLGdXu1qmK3ux",
  "key9": "2sCkaFXrp8SKWbYYjfrovRHYqrefpaT1Hnq5xTEpBpqr48Ju1PXgZFhcXXz4SANyGUexb5YAP4VHkyc72d7nj3Jb",
  "key10": "2aMtk4jTiFdKuEq8bs6D6WvP6agsM7iZTN1F4477rrEEjtoGB26VQydxLLyBRGDLnke8783UnZKxcaEHUi91TuGM",
  "key11": "5w4QwHbz5AqfH4dBWmeFs5ExEYSEsh8nWz7Xw37Arp6PxegAHn63qbgedEe6tb7EW5Mk1ACMoMEfEGJX7MEKWtoM",
  "key12": "2hpxKkUGVEvtJtLGtD4tKENExFnU1Ytj7H9faEAoyXjPnDANwsM9no8UcD1rXbM3Gb3bfx49aFFpg58vdfXMMbjR",
  "key13": "2kgQcZHqdiUUXAPBZGiH2zKAJ8ZJtbLa3jDXdBymGNZJCai8SHHPRCkbba3gPFFZ8DQCwYDXtiSJYU3yUCHkhArb",
  "key14": "4MJboKCSzVhTSnLuU1wNLo56qPEWHxUJRLJP75f8L9ViRe28ULVsCQNWwfQ22NhP3tSfCYkpzvkU6L9uKHU4cvTy",
  "key15": "2kGyWi9MtenwRZED8jdngF6iLoVSmHo6mRTAfcy5XrKoNVYUeWcU55mMBETTnPWE81DntFq5kmhFNpz5EAwRS7vV",
  "key16": "3eZHZJ6LfdGrbgenPyraBX8JDRebLEudRaSkULA18Rq4ZZTmh9sJkVejFDNPnfXARqRx89Pf6ENc7hkkndsosbJk",
  "key17": "2qyVNWhJ9rxSPa2HEMFTSgAWSyj3tJWVnMTXkC4xH8XkbfeHwRRxAQNkWQ5DMeauieCFGD38Pi5V397ASLHHik95",
  "key18": "4uC8FGmkfytbXtPXvJATNK5DtvY3GVM5cewooGXTZqPojY57S9RWEr4Z2JXEiUVEUGEJr7FrQT8wvRZaRRABoZ7h",
  "key19": "2UthNYXQ7Rfn21WmyavtCdb1xcobG5nnoNnfcPkfpMmPp3opLmjnpEpRu7zK9zpukmVVj7rNiauvcAjbMvDcf8es",
  "key20": "5UzinDwTB9eqqD58oxmuHZeGLcAuQ2MeXRNnsxpsYnXPpUANauBZQLaCxA26sgfT6u2BUSTXsfupPjsYsejANKCY",
  "key21": "28nsrM7xeJ6nNybwS74hfUQjPh41svLZdp2Cu9G7Di5Vo2D599h6zZjLPBb675YZhua87SB1nUsHsNYTiAo8NwmH",
  "key22": "3Q17Ccr7UTbUxAcoGQf7Bw76EWTCAHFWMvivLAS2PZSCET2Hsw9cu62B4CWMJTWqV9E4ufH5BEtKN2bet18ETi6R",
  "key23": "42Jr8KcWEVnYpknAK3p3tZSKmZou5rYyDa6Rd6HjrJas61GbqtBcxve9ZLpxqytqdehNAjHw6biTXbRkQawYyqWv",
  "key24": "3CNy9MuBvffQ8ShfrmVH3bFfXqRk6ofLE12eYx52NuUtrpAsQBuEtWtcaTfPscW831MyKDqxt8PTcey2negKuZ4E",
  "key25": "LGNrgSxXVH6iKGa2SLa44cSrpw1rzMmz3TZwyWF6PvpfC4jT34irrjvzjs9JUhpXnzTra3QjvMZENSLJiLaidmg",
  "key26": "51Cw62wtxwPDkTJdM95Qm6scrc61kigav1h1Pbc1WZhx3DdwD6iWwfpVi6B8rmvUJDXc4jtg5fhYjEkN3W1LafZ",
  "key27": "3dp48Qtipx488JzL5iwwyvGK9ZghvYXy4sKpx2HxZ6SpJfhLh78z38EtihKEq3yqPX9o1v6bUgWqTdyrzpEwzwhd",
  "key28": "5SaddnGrgYZPtegiTWxeM7YidPjVchd6YKH7wVG1RTi57Lf1Jh4YJJQbk6EqXhNh28TXKb922AzX3PG8UXvBi3xw",
  "key29": "61W6mNALn7Ex59FRNjofeSy8qpJWvvHS1brqkTCtq38HAcKi5tv2tiHyHdGHPVXhMrcw4V7kKQq3XxrxuMBPSvgA",
  "key30": "5Qjs657DcbGnoXitEz61spkj7Rp8weZvb8J7Yz6esUb9DWD6paxD32jEEJ1hgcH1ysBJxrZ8t7f9RZ1trfGweRa8",
  "key31": "JJUWtMNb7Qtt7T3RNJpTV1QMzWGfd6thsVbuCu2UjTwiUYPvSTKmukTXh4onqtkJkqFbnoZkDWzhCVPMNL8tjfD",
  "key32": "2bnUMwAoARrVhDVuKCC9Nq5UepyX5dr2qeh4P2rzSXioZZFC9r7rjQqMJy8BQ85kyDwg9HyWujgHVEka4uBj7D9T"
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
