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
    "2kHcqysZEGEsm4SJNMqFqivNRpXTW84LbwYXibyHcreUb83evV994z9FC2RNPVta2sMGqFBRZ6TbKFEwLAXdvUEr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Tk1NMCUZcXDr8miRQvcFHAZCi3vwSBufqtm2kG4CGVRrpbvJawCeBZeaXjPiPsepSqCN4sD7zvbV3Y3Ft8VXW2P",
  "key1": "53RfiTZED2hh3MFf6g3UjMJzBdPV83AdFtCkrJ9pgM5efLyJPxKd8Hea4gpMSeeQNniut5ts8PyNqaNC6mCYxiDW",
  "key2": "4xYrz36zi1rc8sMnwsA4fwDLkFJaWoTLtauXY4tU39ia2JzqLEjHAUZVh5DezvRRZDuXBnEuUKDxP5JVRR5CiE8T",
  "key3": "6KQxw69sDPHPn8RNCy91TH7qEDwnbtkgcKxGe1bDUALp5ccFKNx9g3TEpWsfBw1kFnfa8h1tj7DmX3ayRHY5wqJ",
  "key4": "3NMtca46M56XKFZAMu4V8SJuhNL4P7suyyoL1qBNk9dCaa2aEEU57zohzXSzARihog4qWGe3429GTQUVGBqALVjV",
  "key5": "2G37eyBU7wSz1jPLkVRULwwZfPMgPz8aRNfxpBnBewBGW7LTkbqPKXGh8bx7qebzQe5zKxCQi3rZnz8Pi8v2TF7n",
  "key6": "38ZAKmag5q5r4d2Ti6dhxQUbcs8kFPqhumwouKtC7v3sRhZh98ELTzyE7LjFvYwSfN8XAVztKe7eeXBT813B4h8L",
  "key7": "33cZFNPSkoNyWyVvjhSvWku9n2RbQ2aki5VGE8KJNQANeqDYJq1MLftc5tQRqhVTvGuZGg4FWuy2xScCAnUodbsV",
  "key8": "2dR7nrjNFaTXeTTkhVE13dzkqGAP9So2tg4tEJcKfEn5yZtCrVaDqXBohWUoFTTtUDJNt5XsX8HBuiM7F4N3chpZ",
  "key9": "3CpFpjq6uBdF1GyPU5iHoWGMNZXBr7zzVd3x9G3LVkuzE1XZbYV5ZqZ53dCWuL3xL5wstgSoVcb5SS8MR8QRRHrp",
  "key10": "5PLKDtKBZFvy6uV5eH4zfb4hvT9apUU1KUVjkNcBXJ7o5VJqvazGYCH3C3Lkn2KGC7PRz8B3KPDi67pv6bnJNG8i",
  "key11": "5X6ve4HTd6co7bRUkwZbXg4eVXDNesi7DDhMs6bLk8WynrvfAYE7fbSWGjKWE8s7EGyqekF9A5ZADdhqDxjWBSM7",
  "key12": "zgN4WrqPiGvcHRfjYwVKPt19pa93zJBFS8XgMYqKGrCp7oWszMUBT5v8WD1xSmLWNbkKNjQuZoGuQwaP8STMtwB",
  "key13": "4ocLveTQyPMMAKgsaNehwkykuMfMjFE8U5dH8QN93SFuYRjDTYRioDQ476TzD8BosybgqzmrU1oZeBWTMHgJbnAc",
  "key14": "xtVKMBa73kfTGfAv8Vo4snrSVSqLQtq7YedyqHbS1atLf5ddA2oPPGt1s9Ff7yy8TNZEBg59r96tY1Pg73fa6iy",
  "key15": "38GtsUzygmLDVX5mTk4i2vsN94kyDqz9kpBciy3hGPm6EF5qVd6BDjjM9YyZGnKmN7HMXUGzouHgrZiWJLeLnSHK",
  "key16": "4vKD5D58trTsfejM3cRMQLkRThfMMffpZfNZCUdUDo2sDgNbK8U5pp3PiVS6wZ6dBciBygYzvXGXwVRxpNxnmhhm",
  "key17": "2UsbPFuwvCQACr6thSKK5zQq2gxGHmSF9Peag4gqEqb9iTHgPjUuohGDaAEEpzgLYPUPSwM8QMC6ZGUHYLeYjRAt",
  "key18": "TWKuHJzHHzbGQ3G1dTVA4fvtB68ZQ3wKcextJsqqMAi9CoQ1gM3pY9sAngYMaq2tzTpjWhd4JeyRzX2yMo5nbhQ",
  "key19": "5nVZzZRuqg75Zo6vyQXZCeDMGgNY1rWps7RwoDRp1o6BmZzqCNm6XnMizBrSNX68q4DSCfv7SS8yr68YTMtbLPgy",
  "key20": "r2EmeKW45oTkwPhNoRKcNQCSgXivMwJ1cHUYtYfYCSeNwN4bgPYYTSJXCVPyE5844R731bSabqFNbrs8TPsW21x",
  "key21": "3Q5mmmuqtaKJRCie7NkN9nbTPQWYeCC4wZX8zqs1tSuSgNrXmpoctiJnhQs7PXYbpdx34ufjxeZ18YKRgFTV7mwj",
  "key22": "5uZWGyWTcXVqRo56aLDDGSTuYvDK7e5duD98mnp9jYBGzA7dfJxEEDZ3Nub5Tre62HCnnD1nE3yWXvt63QpAxCip",
  "key23": "2miJL2x9w8XKnBChCmC2XnmYrFDZaSNLS9YyH2xCpGdrerP9hmpasaHH6SRxeWrLVrwL75Q6VNwB5VqpZUARGnhQ",
  "key24": "5kUL9thw2KP9wFTRVfbFkEdEyJSWcQMVBZ7m3cNbqzBNJsU2kiCoF62De1nLjUTKUzADHhRiWtpdvvVwQffpLHVt",
  "key25": "3jbHwJGmw5L62J3C17U3ZGsYnJkVXGfqHKLcctXPLUnqUPDZEVxDe4U5k89px4VMbGKYPVBaDA9eQE3sPACrnYnc",
  "key26": "2kiqgpbhEX2YnA1aMWmKvqaSgmN1ZBSLHwv8xr1cKrsFjwfyoGpyQVoGKNq28ENfy5coaXGevc62QktNfyvjQzvQ"
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
