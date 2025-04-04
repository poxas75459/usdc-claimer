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
    "2dhcrY8X82Ft84WKcFNM4hMUKzZCcPM9cuT1Mn4xhNLkwncn7zjFJSwK4JTEbyzv1HrB3ozMXnAV9uDRxgtPg89u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uYChE2rnpjBuspSvZ8CTrmvFpaWwS37uTFUFUqGBNSv4yqoWPQgnREDfsjnhTdfhzEtzKWHEzEypivNV1pKi3z5",
  "key1": "j9XWK8kMrQFCEeJG764nTWHYoi9pGuTni8mqW9nSPg8tRtReUs5qYh8HmU2StkYBdxpPEow7RgeUjQH2m4hzWok",
  "key2": "59PUXAZeyQdHvLzQbNnDbg8tzxNQPRYLBaiSXFEY1m2ojQHn6RvkXyH9GnibNyQuQqMPGpcaDzmvJT3775H3mE2t",
  "key3": "9ah6AApc42pCMGtGfu9TS6d9M5iHiDj6LAdvXeCMMY6pKrkpFD7eoANTAD4qGPx1tQHRTbYtsK5tpQXQUYbfmHm",
  "key4": "3GD1ty6eypb4TXRkoyS34pfzXabAuq9De3KGAtEPxDSiLJmYihBKy22z4WVSTP4U6Uxi1yobnR7Bq8KoCFMaGjiA",
  "key5": "3tDwyfTH31R9kyVWVp2epcGrgNzGQVRATGTFnsVEd1bAfTbDQajrRSNryAVNGiADKg9nB35LHxY8b9bqhRtP4feg",
  "key6": "61qfDYhuQpp8nR5eEnG3xuLHoP9XzeQzLiZk53eneAtHy8Wh2tRWJ5dSDMTLRgHJEDeBFXQRc4e3XHs96c6ABkqf",
  "key7": "42Wxx2nXdBbrZcJEg8TTQYEYNPnxLZTnr58c12FF5gGqdJVFvAYKLt6s74xhY3YZKZJRfT8tctgjRS4zEwQE7Uab",
  "key8": "4SxYRVhAAhjCchtQMNjgcq2FLRdHzHJ9BjhZtRi4cbvqFmLC9qNUuvjyNxpmDyRJskfHYc84qgbWLWhPmmnGscbn",
  "key9": "3dBaja22fc9DvC9XZVcJVY68UfDmVDSJDuectAy8ZLwvxZnG13zVMAY5f1newmb6XfNupbhneaZ1zFefzhctHaF8",
  "key10": "57Syex4M7UjMx6es6kZWQG8Foy45PoYJQzbHobkTEAHGq8DYkUsJVDd4KG1HRACAxsFUwSmGPyHUcnnbshQHxQr4",
  "key11": "fBiSWLoZavR3z6Ga2TkmGUCY2UjfxQUCh9w1wMZRppku5qDFHnMCJjUeRLFXU2sFeoE2goGBSvrHzuCLoQxwsDJ",
  "key12": "3HbetQDqGH2WUVnPcgU5xJys83KzbCJkS7ouLBbsjv6BYPCHrKoNPeH5BmuDfXQ2w7ik6dfhBUSVhyozmvqGjkUs",
  "key13": "4s48P7FYuRZz6HQyFKBeuUE5BSTujd3sCHxF4RaQ8zmkGkBjDmJ2ZLKpnq4xhb7uXMTWjhn1YUjvfFJLKvH5wgMe",
  "key14": "3SZNdR3AduAafesHiEpa96AA7XGTfd2Qmg4aRoYUCmXh3ocQawzaJzKbdVAnepxjsjXzqp4iGky9GYo8AK62QwFa",
  "key15": "2M6r47JBAfcgeUcoVLLvLCdAmA5JtBQMuRcEow5sELw5QEhbfSfbCfqkhRQL4sHN8UVtwLpzdZbXexwNMudsP7mS",
  "key16": "4LS89JpteiSB9LpJyHLw8fc5yvtZXkx6h59zyqpX6E9coh9ZxmVLfHh6ndFyDDVJ5FGU3jTj4L8nixS8ETz69Pdo",
  "key17": "5akc6ta7TgpGpvxj2utxhEk19B4aCLkyFhKK1iuQJvSkcQuXaqzRStk9dTQZxm8DzxWdDVjcQ49yaH9XxHLz516e",
  "key18": "28Yx2XEqmtJ2fZ6aN1BLJfnag7EXpcNiecVheKCZwHexX6Vohu6sRtn8rfLrb44gjFm2HeAwJqw4NLFiRSp96Ccb",
  "key19": "3aaECdy8k6xV1uDWwsWaXZMknxC4cxd7XxzdAcAoFi5QBeeUgwuhxmFhNxZij2Cwxpj2PjoZVPZEeAwznv7hRfwr",
  "key20": "5ysxjixXiVod8vw4T6jmmdDw2hqHRtf2b6XGTxNT6axnhxqfxPktatLfMWQiNSZ6c7XVShc4uQGzEzjAgDJxyRHQ",
  "key21": "2fdDoRetXVmaAj4wRHiebuFM3htT1AqPLk7zGX5RbNYcwhub9WFpPghEm34ZojjD8ZfTfBscDFZYNkzWYKCjvKVW",
  "key22": "ui1TeVUmmnbr417M6fQVTwRVxbwdjD1kEm1jJn3Fi1kgWXEwyTAsHnLcagvLPXnxu68ubKyYwBGoQMcFoUm2poc",
  "key23": "3b18h21DMmBj7LSCCgTf5qVK4vJmJrWK4Dx2znNApc8312gHSWbNjHShpXPCqVcZ8VhMrcmmfLUvMLMy1AtJxmVA",
  "key24": "33xUE4eWmJbXxmVwuA8oSiMiHcsNL74oaK5snSp2zkYKqPCh3UZBqSHeX7cdvsuqmasYvzr14WNR99y6F1uqPmF2",
  "key25": "7oY6mg5zFvbTdV4gMn8iBEycKEHtdX9PUcDXjWPM71k1PqyJEawNnQzQmy27So9U3Y3BQizcLbLH99czF11coeS",
  "key26": "34MVfLjqmaYuL9CiZVXLSaqoxkMYHAD4SXd7zKXCBgXMpdGzsjfi51aSB993YDAoUFz1PJh47jY3H4rjjUJFcRcR",
  "key27": "4JJ2E63Cn3zQwK6McjsEF2ppqtUPyZXGqWA7g7YVbYzJEYTxHkEZPeqQYeBayvDmf3DJobksqznG8sEEQGaqMrLt",
  "key28": "53PEQH9xvp3cbL3WhQsB2tKdsc4XV58G92MuoGZBAKRnp6B7qFSgHWufNQ46VgNFEURL2DZWRHRnJuvHffTW571i",
  "key29": "4Z7LhCv7x4DWuT2nA9xYw1Cq9ZajfRFsmB5tbJrXv9zGQLYgDSfSvqbkRg1DHZPfRfwb8yGKvydobpFPHSiDFNk6",
  "key30": "2zVJFJFK8zFNxerGKF9LXuqWpuX462D15U2N8HYKUSi32RpnwHn6dtdRuytPUwHxvVUHGfBM1sVXxhLMddWQGBHh",
  "key31": "EpGZ8GHRFoA7nVpG6ZzbtXmUMtNp2J5SPz1XCNNhzaNMM3D9sCWf1yLY1GdoprpXd3LJ4mCVapdRBW9PZiah8cq",
  "key32": "5JpWjvzowu3WwCm6Su8xhPXENa871bEVFFh5UMw8M6XADW6tLNuMxvK2PHGQvhsamdfXpByhyC8ydBea232AAY1y",
  "key33": "j1WJu1H1bkswvUSqVDGPCnWg76g7LZJwRFTbbfiMhsBxLE4CXdKN8nLszxG72t8jBMb1htxLBVe6ibUxmu8DSnu",
  "key34": "z717MCqFpckDLRCBt12vnYX1PxkWvqSzyx7ST1rGMcddGFszzsuqzGuEwnatYFraSsAH5LjWwNRCdFcrQ4JA7XR",
  "key35": "3AXDiAXybDvNiGey3PqYLHJXFFGWkyT6cQU6QqCYsyVfQMD911Rf5ubkJvJpMcbFtzaZATCAZf1wenTrwupGNKG8"
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
