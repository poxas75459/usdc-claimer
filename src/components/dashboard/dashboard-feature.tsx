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
    "4D8GqUHDq2PPAeGzPitDq6MULVo8dv87hnGkwqAjr8mJmQ5aBHNZXPTn3hk87fXhKv2PCWyLsougmAiKUyNsTfAY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sqFvSV1ysTaey6wZAj9XYSLWRUsNdSmbN7Fq6jPxcWkrbNjcoH3m2d5WPkrmzyY93zpLGZ2aqXQkQHVym6y4s1N",
  "key1": "58J4Awv5zaKwo4b4PP7rdq9pyeFeGGdcFKrpa53kNN4nzY6P7btaCp8qMYMMfKViFux2WTfzX1Z9HfRE5xqTvqum",
  "key2": "DBcQUJtKcm6M8vN8nKWk11X66JAU1BoCkGnfohx7BotmBX6MAWpw3MG4pJxobU18u2FUoMoQmRJXyWEH8N7ukSD",
  "key3": "4pyG53DfkwavWrRmXxfQzWjoxKZjFRL3grKphNzM8auxGVoioqnAZtATWHb3sBEMxReycRUjF7K6hG8URmRVhQwG",
  "key4": "4ttvJnMJ7inwgb5pFLStGUP7XzQCWDsWcD1NR5zBnEPbdg7WrCqGb1cofFLEFPpvy6GfRfn99F3F1VPATD5iaeB4",
  "key5": "kzDF8Eo4zniTJdz3XiKzwpodvS4yfJuyG3odXHRbcdiE14UZbSCpe5Pg39onudrmPH3a8wLPnh2gai8T3sykSEu",
  "key6": "4ye4FYz1m1uzUSPvMJiexfn8a4jF3WjoYaSczxpzLzSSBnKyMedvnjCchs8TjT4Z6hJTFZ26qLraYA6FUSnacVJs",
  "key7": "QJpdFf1SoUtfwbAHsycEEUqP6k4EbNu9KmNz7EBk5KP4heKEgCkbvEmXvHdPBeAMQAAAkaipipaeeYPCndb48vc",
  "key8": "5P3biBbjtrsU4BgkEHiPaC3SemY5RdK1Lz117tD9nJbsvZrdZiqcYrrLupMn9WM2rhGMemN7B8ogPg99Xq3GrSpG",
  "key9": "3W5NWFy79c9Kt32k7XbTqm574ULDW379U5JEhAL1RPpBWVBL6iQyUvxapPceZPTtc1tKuvG9zw9JEhB1FpjCAZQb",
  "key10": "c32qaqQRtSH1rw1mRXvKfNEMNj2FYzUafC9oqQQdFQkMgvkhWwQVX3Nriwr2bApCpYJrX8ENfKTKJGXeLrx84iH",
  "key11": "34M8H87JxRgDF5qHAQCNwNyQB9CevRF9ToafVNxz5kneHNwyx4ZsVvGE7NVReGocJ16kKcHHvsiEMJFzphqiU68L",
  "key12": "4QbaeeVmnBWogoyK9NzYmeEtihRyckRUXHAdp9QHA2NxeXNvqdz5FocAfNR66cDPscJN56Yorv8uimnMJFY3H8MJ",
  "key13": "257YKBr7AZnvAueGXJ4mwRWiDmqJvEAX1mVZu5TjazoRAVdkRHuynda2T5JWUcHGrfNcaKddd1N6g5SB4hsqcriw",
  "key14": "5ricw97NmCPxzeRTJVFzXsWNKEBnL5CSxKgMegCPTG8T4VmhLLF2dhhAvQHjx3KyxLdLC59mUmRGWYXAQ6qPd3rf",
  "key15": "5qFXbdo9BrC98ZEPkzSRBXTEWKGBAZTYMuz1gUf47GfJAU8NizS4txzTvPAfr9Tn33niyUHibNftGFqSJQJSvN5r",
  "key16": "43sSodpd8ieMHy1S5BvCwuF3qV2grdpdvcwRYgkiedWcvDB6vbccFA8Tzaryvy2euwAKKNgJKtGLiYwZMWDYTFRH",
  "key17": "4NnVGLzFN1zaJrpxHzDrfzWPpuJTrgLDT4BMNvS9S6xpG2vZdw9aWBguKTdJBK5bzfr57dLEhwoCJNin6zyP3fwv",
  "key18": "5RaJKxcw1KgyVu4579Q2We2JPUu1xYVMMGVYNjQ84ZJ7BNim2mXp6RzgQvE1LqXAT1pzCuSqB7GLvdktdpWzagBP",
  "key19": "5GkMfHmHV1Ad2U3dhzSkxmCTuKJN2xqfiYSSDYTTjX4sa8p5Be42WcYrSaxtCsrtVXCViarfyDDZCsib3orNecgt",
  "key20": "5CqMtY8Xzm5x3afP6NUC7wkDr6LUfaAufvLFgcAHBNyy3bKMZbBL3x4yVGtBJk6qUXtpJALkfgWofsuQsZLPsMtX",
  "key21": "5zttYsSS6wbrya4MHtEqngzuVMDidxvgZEkTP2ft8zw1UNG7MtVcoTtVtaavVEoiK5CRDoYqs3Wu3rTyQhSdgeRw",
  "key22": "Heh43yb3fbvH65Pui7QpeK1P8MGkhLnYm5Zzhe3NVWoo25Bew5Poy8DJS6T3r2sLjLBgbVXDvuJgCtcACywVYe8",
  "key23": "31S7TwCucZbGVWNpSGJD8UWfPFpVcfzyxfciVJjqQJUMoNTkQDjg5c26VjXpz6fFV3SBppA5kt4AyMbqCw1J4pN6",
  "key24": "4vN1trxFrqKHie6CgYNvHypxFwuEGFMuyhj8wbtk6eyggwvrzSqJAfPdJcc5h2tBRUApD3K6PPeoq5jgLUUkuWiE",
  "key25": "3H1Qiq3oNwwEB4SFo56bie7aCGiVp6koD8faFh73E95iNEzj1pLDopEmpbywqJNzr8xvmW7eTo6PVfArNm8bGWiA",
  "key26": "entERAnUEYmYmwn9g2vAFbbz5viGew8i9T83L6nR76aTndcnxmHYvPVziVjKRrHXNzHx1vovnz7DAxBVcaDXg8v",
  "key27": "4Huih4BKKGk9BDrJUxhsnzekbPrZTNVx9fgHrpi7dCe7LjKmJcXgPfMv3wkfHkTvswQDXYdUVqmC4LTSKcrHLXH4",
  "key28": "5ztqQPx95zMFTFs9SWNdxt85iXoZ7aAeokzpxHWCbSikQvheR7xu3Nt6kC9EkHHyDBygu63EVzcKHYPK7kghCXZ6"
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
