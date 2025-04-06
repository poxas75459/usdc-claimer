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
    "rcsjWcQQj3rx7bLXukiA2grvsbRRsuWt11aqK1gtAJQHVjzHq6V4FyRT6mq5sfcgS8bRcJtEE2hUDVNDWPV56Jt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4K4hZ3RJpSJC1fGri1m4jUmJSox5oUWBqfQoxhTACnGPao5Epk1gYuvvkB3j8QxRfvoSLSQP4bGtCe8ofdXqHFDN",
  "key1": "3H2cs15c1F83f99dcyd2ozA9QJ6FGbgfDMRw86UsxoUowMB1LLk4Nh65JcXz8KduT4z6bxZrMeXv5fzj2NCpkS2n",
  "key2": "2QBDivgxbTBkYx9o7svkQd2x9zSVWLgoDZS9w4qVwJ22rTTQ3Dvi84dPMfTjnqZA2A1jfHrUdthQbJCQH2tCj1KV",
  "key3": "4cwwxSsdNaQ3ouZnQxa76dEFdbX32cLjfokwQ3Q2UnZSuzPLcn5KuQresYs19RvpcUxjddcsjBQwuY1FxCmh4KbB",
  "key4": "2SAX7NwSWaa1nhGhVrtbXP6tHpjaG6JXoLk3r5gZ8m2jMUEFSvzbPEb3HbAeujULGzEJkwY9XdFPUM9yc9edaLL4",
  "key5": "3zYeHdTpLy39WRjUjwWUJnrWVXEvsPeNDQDSZWbXUdJXBEtpNxQ6tv7UV7hpfSEMXiRPKM3C3X91cGtCX9Te9Hj5",
  "key6": "3mH9JGSvACamhEFTNucKYWqzB8VaTGKfZcQEfsKa8z5PBD4JfjrE5E3UWHwm8DDz8mwKHfoZtiuWk6ttY6MJ3omq",
  "key7": "3SPgh4HxHYKs4oMUL6LQnjstko1E5uT7BLqj2wfTiAPSKhn9yEVZuPguUwCKFzLsNykP7LiMWYf5ScyrPD9QiR38",
  "key8": "XPtnzbPPp6JQHrNFjSMTQmZN6YcgRECe6FAuKdA4jDXjUnh51UBmEo6bYrh5ZVboV4d2PvVseJg2a7kxksJGnBW",
  "key9": "3eW45cwACUiTs3NL8KHwwqe9VD3fC4KgkiCR2pcZr8hDfZXYjWfAydjLJHLAjwRWKFu1JnckfrgVm8mYNpzjrLjw",
  "key10": "3V8EUPcBKWkEXNBWGmw8teZB2r6uj7ZcDuPQ1pWzVe6Uomz1Kk9jq9jaCj7FgDdsfi8yh8tmdkeYavjk9jQJ6TME",
  "key11": "2pCHM1Qnt6hyagQziHcrEpAUmJ6gFmsGadU2QYcqfodfX4LDcEYZYoAuewybo66h1BP3VMEr7mx6Kn6vkBiJYXWJ",
  "key12": "DcKJkBxiePpRKnJnFTh4wHkipt8B7nqfdhZy9u5VbYJH2mdFY9u2S1kXDyckG1CiJvpzEk8xobiWox1tNfXUgQK",
  "key13": "3ncBc8UEEymZDHnzk6G9f9p5LsrrhdU4DhoT2KkUH9Lu6Sh7uwGxJRhMwjxAEmJxyKoJif95YZoqWJqkuEzQhTsf",
  "key14": "3L6eD7DRaMmwSDRUoXtfagB4riZ2czKmVGrGow43DrzzXmsVTeeVsN9WPhrJY17E6GgyzYrsfPDDh9vS52pq2UUi",
  "key15": "4doGyH1esR2S8i8dGHxCWi39wNGAABsZKHvpHVHtovjmXC7uPcWySRa4NUmPgDbGDCyufYgGyGcm2z3x3c3PeDCZ",
  "key16": "cZGDm6ZYkjjRZBM6opys5q759LsX7KpCnTX8bCD124Cp9VcbCWQUqAvUsxAgDW5JrfXHu7e7wEa7YJbwzdD5QVu",
  "key17": "3D97cDdrWWDCobCRSjoDqgUNGpo6CPkS9h4qCiaTwhaEQ5XSpsdUJgXwNhrjidxPMe9JvsUDYSQEu7uwEGvZEidF",
  "key18": "51F7Kpp6SPGKMNDktq4T65g964pqw6PgDgkfYvuFMogGybMU1YfYAFg1BUH91Uw7wYYBiJWaCBs5JJhVqjAtWAaH",
  "key19": "3mNFQdGZMv5QRNR5Nb9Hxfpubpw5GtkzVsUemZ8mzGeGeWqSSPTiCKXuND1ssqw6gk6uRvFubc2w8w9J7ezKGnoH",
  "key20": "2His9J8KY66KyKUYxzYHCsY3Kg6z9C2wUoc2d5pkFQEYYQsLA3TCSr6c4icUhcMLoFnqfp63xdom4oiwhvMfr4cr",
  "key21": "4PYpPi28Ee9LHumBNCLRmwFLGb9UthB9Rf7mTMJPdgj4ZgxRJGKC93BgWTtpZ7tDtZr4aNB1X7QWsbKzAcVmMdQX",
  "key22": "2Trew3i6AntTEvnvLCJ4t48vwCxADruk8DBFob3P7cDZjsR831jcBZtLwB6CycRmqprWsKs21Y2inEtSd1t23uLB",
  "key23": "45ke2cdntvTyTGfFfknsNmhsW83oNR2bd2zc5PgtFVaQkhFphpby6AUy5iLqyHBMLqh5rGwb7d9gXvjbdaYnCzMx",
  "key24": "5Fy3rLjwRVbSh2aXbFvPqZ2TBRNNLQmKX3nbnB3WvgqXSeXaYDbtK4di9vBbgJiR8rZnHsLgJ6Y5oUpDib1Gn67i",
  "key25": "2HbxjQkJNhzhiRLpbdqcCcoQ5wXCLcmSuRKMWxS7cn7p5yjJZ6SUCFEzwAu6vMqmGCoHjosm4irgHWP91QPRMUUR",
  "key26": "4KnBUH1tzcBAiY2nvC3MCM1oLK2PAvhtXFvGrRSVPkbhHRWFS2Db4uMyosz3aQK8Ev4nGsQzfMU1SacsLthxaNvn",
  "key27": "2zq7w85b28x9URoyBR4gjf67z2PBWuugStD6FExZjKNRdEvtmQXR9ZYHRdimUMngG1te4DXpE7sbvpJhQEjogTfY",
  "key28": "5qqn4nXZSuXMzU2HQeRFgY1WHcunugGP2D7Yj5KztqhNZE5qywSdmYgUDDMpuwGVtXtDbaMLFYWpUH8wfqgXgo5V",
  "key29": "5GZDPkzf584MrD1tRW6kbcXVrJ7t7o7aeZUW1mF8dAhW3cv8iv6y8jDJmfBd8friGnDAa91ePbEiw1rts2gh1wwj",
  "key30": "5BtuFsUCdJyTRtUzDtLDBGACfSRP2yiPtS1SruUXETiuiUziHBgkaZ5RtzrbngtDfzeqni67yuDAZD3WDX8KkvnN",
  "key31": "2K5uVaAKTbkuKkATeYKN7exBzahgst9VGWaLvu1mggdxQNQeUyx1q4djrVjGntRqe6XHgGsrAL9HoR6BApcazapf",
  "key32": "anCG7Q1rxwU4T68JEbDKjVAZXCg2K2am2Y2Dy13TJaxqavGBaasGtrsjVY8811K22p7ncXZBUw8zrhP8Dq1c9xA",
  "key33": "5Piybvj8JXFchFQxpAfE3K9bC4HZW3vPy9poNgLep16ZVwNhxRwLanPCaKZD4C5i75WGzJMbpY4oPgxxGnFAoVZL",
  "key34": "2LTAGgE15HYu3vJ3YBoQA28uH3Ed5mYKayJ9bTCFrBZtCsKsGCyYQH9cPytShZCGz3m83qGZmrLt22PGa2CdA1Gv",
  "key35": "4VL6o5iG5C1mEHF5EwpHjXRkTSh2JwCF7uyVQxW5Hb5pXkoTQtLUJUkwvP41sPibD1To7ftCw963enLiqNetovue",
  "key36": "4oTgYq7PskgvK94EmS792MMBqkm9s1jzmsAWUSn8i7zAHBvMpoK96QDiS3UP8FjGFEGjjBGu2x59p8HLP9kC9SLF",
  "key37": "4EaXELz3rU6SWfHm8s7CTt62CxKYz8aL7pGDVv854TbngHkeSD6qA8n3nNrY2SxymGVg1Y4WNM7SQbKQBqADXNHw",
  "key38": "Kyda5PiTmF1VyT7xPK2XWoPz8NFYD6WAZ5gFarKqfFxf8VCqCWpsZod1gAMgzdWZ1jPzpazH4wNdci4YeGcefk6",
  "key39": "26X5b7mo9mRu19b8hR35sGWchtMuXFLioE7zMfeUDk1n7RBLXHKrGJzCRPM7d29VQ9BFSsKkzQVfkYmSmEGnLxWW",
  "key40": "4QddfttH3dM7eZC67DMPFLcuWxmxVbRVMWY5uQ5D4jYtsLsBR6DjzmiqM8qDrwxEmxmHMZwnzPaNWHEX9SQ4RBAA",
  "key41": "5mDbRyW6junSMhpFVcoa7Nm3SSMZmmTJiawrN6gRWWnHNPMfNihXWtzFgWgFPK9n9h1WQwZffz1auZAEZBhxs6bX",
  "key42": "5hocWqcy2wQRy1NksqDXf2NsqBt7JTpFbJt4WqDam1TixyvkdpuKjfZXphCirXQUZ6RvzDMKec9Lpnhpn8R8RCTo",
  "key43": "4GcEcYnFnq5yZBHyY12eNCd45UP7eGW1gYc6xLWQrkYVHgVpwqEiJz9ST39jYrkU2neyTpxhMwnnvS3pURfJASvZ",
  "key44": "3e9tVbtiddTzpEeSnkhrakzS2GzBRC8GNKMJ3JBSDSCENAi6wnL3LfT1dHCcbmztvMMY2gLe9EVv498HcD72JYT8",
  "key45": "4vccopVGLRnsYLmTvfLM2NpopVrsDfSLmmYiqiNYSXY9ZZ9wsBH6DWeKMVEYCG9zsXuv5k3Cxbresx6cHAP3sDQV",
  "key46": "2CM5KKz9sKDRJRRRxodERycFehyBewBgduLn4ZZxybkbqgvKMA1VRwuRPD5yibQh5fMkLMso2NpzHtRnXoNqeJkz",
  "key47": "giXXuBumacowa1WCK7CdBWbWr1Ax84oLiTyfsrb6v7W5B3X8JWFjCaQ2dniG7FwKqPQr2DqPpG6Z9DFGMFgwfTz",
  "key48": "3CkaLh4buCxXsnfmME6QBRu2srXqbbSyFZ9KsChzgdBpVZjArkzW7XUNKa1n75GiEC9sFGwoRnHeHnrvSkCEZ9vV"
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
