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
    "2mqvGT4D7JgXwzAFgRjSbXWpJYFah4zVbG9GzAidNhhB67rkpcGW5FKqYtVPGpNXDUQECcXWSg1PYttWk6nwQsoN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TZEssxqutDFoYH7DrqBknvTzfkUbEcso5H9hqaq1cERkQRqdDpVSabwvGNT6nEJu7ofUUbZ8teD4CT9SuAeSm1T",
  "key1": "42zsaWkQfrKvnCVUBxyEKhSzDiqwbrRgcZDFCJGroZch8jLBg7993Fik6xjdXAey92YpLd5N4Rqcq9e3qSG5CGov",
  "key2": "4CyADXDpHsrnE2P7oBTDG9kQyjowFZe2UgbEzCoQPaknSPY5dfaqhVu6YeXfqkRXZuZBkFHTPfTXXjLV1ccvX7Ke",
  "key3": "4QELbYw1f1hfBrkV5WcBitjrJ9kxw3oCEENARZNd5KCJxF69fmNcdWA4sqa9fdMDCNAM3KFH1GbiMuwgreXhiBYJ",
  "key4": "2kWGESpyh4koYYY3MdidY7HSoMNbFRDytkYaTcEo9mhe2kCm8LPMMGaRPRhudvMCrCZGEK4VM19avUuMwKNf9xvA",
  "key5": "57asijeByteVBkXBd4V2dNkRxbk6Zg5aETSrJSrUUvvBvcHfVqrbdKfc6WWoqGRQJCwv4XB5tTfQdL4R8y2MfjJy",
  "key6": "4Bf9cS7UL8oqNdXoA3iiedrqCh7mmSYGosynUZVuG2EKbtGNNSjxVnM8eKD19EjLYy9QmQjCiyP4U4oY63R7uJrc",
  "key7": "5ff8Sou4Yo9XfKcReLhtmpKzbUYM1itNAP2hpBHk8MXSM6RkLDWYUT72K1mTdhs2umBVVSmLn6tHBiAzCJoPqwJU",
  "key8": "TnUUEnSTRR9sHsm7WLVbrBak5kiNqcFyvDVvAqXUqcZKTxuzgf8XH8tnEXWctWKiWg89TfwfiW8iDvisvYu8Vrj",
  "key9": "XGrMYvKCX7vizRPXTfveRkDfoVfkd2dTXi6KHWdkE8nD5P2TcCfjFjMf86ZVL2jUedhA4EELqxGDa2KNbojR185",
  "key10": "3NxbTm3DxVoRQt36xzG11icKcLHie8k9XHCDuHcPwHHacT9ttGCxNfUU4ojMmRALcP6Dg4kgQHEkTaEVY6L6TPuF",
  "key11": "43d61yLqx2zFwMuWGbtznQusY12VdyWEwqqnYVtQrexVyogibRdcsJA3kjtV1wXQFPzuTtEAHjS5HMpWnPpmFYr7",
  "key12": "65ztFRYd8UP1UNcsXNZmXyono4VcmigFnVrjun6WZ4C4atHzUQVxxr9mbzQS9W5etKzd9eaFueaqTRdutgEtw1x6",
  "key13": "24txvGZqsJvcFRUn4WimXssYXqvWNrym66quSezWQnPTDKbPLyi3pRjm9Zao53stebPPKerLczKw1jcjiXBnCAAT",
  "key14": "58XoL4HGhr4yJ96TvMq2jEcGNttEjvdfoHV9hqtonK79Mdt9Ly9VkwCrS7qutpW9xTBKWNLgopcrwHtPDjDbhRgG",
  "key15": "WLYuBMwd8mFSVjBbi9cfpHrh1Fq5kRaacYqKtNqF4muT1Sar8h6hDzUjK28en6vSq8VBoUSsPXvz2AbfEmMffPD",
  "key16": "3zLfjokqBziLr8Lx5YqduGD6waJXxhTHLZxFrVzKC4P8t5UWfQuZGm4P1JzYoihKyq1NTixhYsMZ6Ff1CBQCH9P1",
  "key17": "3CbEtQTayH96AgHCmPabnK3qgLkfheXaCJvoKPGMQenzkCDeJmXKNp774Nf7FzFnLBM6wFdvM7bezSi6TDg5vhzv",
  "key18": "5mLXQXfFQ6Y2dGvxDCYX33Wtn9JLdEUZFGD8RWYLPUPH2xKmpbQvoVKVmF5rHoG25v5JhTycdiEkoYZbJmMrxM66",
  "key19": "5RcdF3Dx3LaduSCwdQiAGxkdn5zPL6ohpZ4mdPdTagMhqV4tNEUPxCfYqk4XxCFYVW7e1Df4jz68xBoquvxuqmqx",
  "key20": "4FU3wHsaDUyMjBb8bayZB3PetNRUTr5HhrEZkE5rFK3kGQSWyuLBxzRHKy7ridRsg1vGhg1qrCWtq6GL5kbphsFd",
  "key21": "4XAvrsXADK1xpag2H5pyGjfVhzUsSzvybPPzrCBqHKhf3Kwcr286XQrkr8ff5cPMhkMuEA8ZNfnbSfZVqxdvviC8",
  "key22": "5GVt427ztPR1Ba5hfpPV41s2dqeiYRKsvvz3sNUARrXqXLSZjn6zkxY6MCcYM9RiuWHB9Rdx4pYKxu4WV2dLMega",
  "key23": "2cSFKgW8nkSDE4Tuhw2V51cEgyhz7ZfrPfY4XDiZtUhZR7a9gZkev4TchvW2dvhy7PfYPEieabQfEzA7t2cFfFHw",
  "key24": "39Modc3Mb1f6kAHkxJ6VXebRaMCaHG5bQ73pGYLfkpZHZk4UHtotT7q51gdo9EsPHy9L4wNaByoLmhdfztQmSSpG",
  "key25": "2viuKo8Ez7zrrUtFdbmm4Jq5nMNg7dMpRB5VUxUqEmuXjMffRJqd2MsTeFdQgttcBRe7DgxTjMShn6aDpuvv3L1q",
  "key26": "2Arc3T5kcew3QBicBZEs3tw5VcqbkMfDrkMgWuMPtkdARMZNkpDeLgBvyFcETpA688aYxK54fWm9aeVZQvgagjTa",
  "key27": "2zrud4jhfgeMCYwSfZaNDFxaavCu6UJJhy8f2ZTfATqEprH7f7jJE5m4XrgM3V9tQkN9ECnjLQS4o7VrQzt11CTP",
  "key28": "63AjKNkuxbzbJPkf5YhRdU8Fzx1ADWmNBAoRY45HRfXeejETE7Q9gjAkmJVSCEHoa6sHbPLyiLc2EFKKiitfqHNW",
  "key29": "eL4XFg6AAkUZsNwbge1EGQQqWvGgra4xSANRqdnHfKvprMUNNAGjTMssx5ttnissayrYgLp3tKS1tdTmpsrHW9a",
  "key30": "5B6wiTMDD3mNvxAc72ZnNDkfFJ54MCpTiJ3DhiGsbhcQmKWr27MM2ZGKjSqri76BhFBPC5BGx5VbHvFCtXR3oYo1",
  "key31": "593Myyng1JniZBGFT6wZSik8sMR3FpRQjAN3pT9ZWvQdzAFeMz5D1xuLyf5aRcG3eHuW4FKLAfsBELiFB6mBAiFm"
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
