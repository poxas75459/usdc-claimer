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
    "2ucbFMmPyEfotoYTZJWwuh8zLwrND3FmuvQPLoBeEmP4XgNc9T5JFsGHvnGtC3YwJ6h2Auvve2qaYKsrXbepwuYA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ab19hp1rXsqQZojr8qxtuZvqobTpstB3v6LPMttSdp4SjjaTEYDbdv6bXbnJCU6tPDrbMNnkh5T5atwHsr8QrEQ",
  "key1": "2F6cnGd6ryDHL8siczYiHSvb6skMoH9myRksx18fy16JBLcJfvXpTgFBVP6Pbztv26DVBcKtF6RnMHjdKNJdUyvN",
  "key2": "tVLd3RJWQDGPpBuxNjB5ao1kQzGxiPuLGexbRws8H675AEgUGTt8ouKeJT7dzCAe8v2DQL56mChJd2cTQ9fqC9S",
  "key3": "5G1omwq3DDP6a1QwdbJ14Bnv1NZvdAJBspkvrtFiCwiTKaWHSW88nPUMy1XQExbNwbdzq5DhVMEEtDWYK7svJnAw",
  "key4": "5jEbH7TvfzXUEuAAQPbrNiS68nvf4zQfeuD8birSHVxk8h5oVpRPHwJ8zTKPHKx5jrjHsy5UKku5fie6pgZLaFCF",
  "key5": "4tsYNBDauXXG1wMsAnkbqcNigtrnrmkrTPvJ8ciJifMAzmdNGUJdhxGojesmjrCuy35y6Xz2YfM9WprBMwsHWnb5",
  "key6": "2Y7HPM76Bejfkbu12bZLJVdY5X9gJNAvh2Se8DNhiE2g82qVsB8FTQMF9p6vVsm5PXykPzxocUDEu9GPmYNcbvYS",
  "key7": "2rDEcAWFCBnR4FpjiqJJTModCVUhn4FkLmmVWgKdzp8bTSN5xCCtmMDkqXvVG9b3VEbZ2qHEJFGQTaBW3M3ZXJhb",
  "key8": "4vYF2yQBg6wJNK9ANKnJKqjTwT6Cp3husvRP7HB3Aopw63VMxFWkwndnoPRojaUTTmG32uUNxZNDHFtBcwCe9agi",
  "key9": "42bJiZvaz73U1kwiNvmmDgbE4NeFuF14diD7K88RR8rwvQVamoAskNjnTEjDpDXKaCvkF9ZeuKccau278hwH5vuQ",
  "key10": "39y6gXU2qHMgK2DbEFtRhpYenqNQDCig6apRQEGT3uBEUTLpUphVoVVn7fhMp3L2k45LwSnXKKTwWk4hsujnjot4",
  "key11": "37LUeE1kodQGi19kQDEsKnsoA1iEdTmbYypwvernKbb2QjVzqv1LXJ5ADJaeo3qLc1AZWCRXJZTh2k28kR6SaLXR",
  "key12": "3PuhCr9SLh4y3ixwJBLYFvxUDKJ9BxPRzyy1oGJsPZRyTkHCUqGrWsLG1XT4ojDboY61RiALWuCEF4Xh8sLbe4v5",
  "key13": "3X3CSq3TpXv55kifZiaudKwYwikXoGLgjKhhu59TjD9Bz7kaWqEnLZGPK6mpouLFZtNdo8JJVC47YksUg2QdtqtD",
  "key14": "3sR2ktTBGf9heDhf4YsBncB4F5YQFt2UdWyQmTxF5UsiqHURoBk58amMcgpHyVvG2sqtaH5imDovH7ZdguSPDRTA",
  "key15": "2yXkqWaVHkRyckaGDacyMWDbxtx5hCiay69kHs2qZg2vWrQhnbTGrJr4yPYSWeT79r6vSMwE218cHBAoBp1uUhJF",
  "key16": "5Dit6uUNexqZ17CvzE9HASrBU41GLeytwXxPpFDN897unHGRpC1LS9MZ1fFh5yuqWGoBSd9thwPGpse3TVrF2eJY",
  "key17": "28gD6MkNQWUhNNaEg6FQ1namq6bv8VfEFZijhg3Fn9v1itZvE75Wg7jtzzUQvzK4HS6TGYJHdHQSbjYbzEuZinfG",
  "key18": "9xB9K6eNNnMR1pMGpt4W8YDPrHYHqFpPGUSUGqqbXE8PSfuGBRbx32vHuqGPMRKGcv3zGw36683C68NXCnretpA",
  "key19": "66JshEGqxe7ueZqjPg8XAujBzTqtLQEFRUnt1vs4mZfrNns1NSEogWygSrUxjqy5YkJVVFKvhTfacLCMPtWDyTrN",
  "key20": "4oCfDqWheCRHWhkfykHqRMUknUNXc9hMnLKcytS5Sputag3fJd9ijumu4YpAp2E5mnnyEAMvznfgvUL49sAMqFrU",
  "key21": "4sHvvnf23NAoTdsm85bGeosdAVHY5vqBdvykgZeGhTXTxd24LPUoa4xNKRkq8gufBbnruh25fnsv4mQyfLHNAiA4",
  "key22": "3SG7J9969isRYcta7mVjdXdp3PywY9muQSZ28czeid9GuMNeqFfHQRzmQ9QtTpLbH9esQiw15ftDtrLQ3FUVcKM5",
  "key23": "4yP1NQtxbtn7pZJTUocUnQf1JpMn7xz8CjLrSL1KqHthZHvv6N8wGgZhMw46Gi8562gx55Y5A7tYBCAna4ZiCLh4",
  "key24": "2ei2nWN5AvbYL7oR7uKc3THhKySU8btsmNLq29XYJHEgTDV3UYBSj7AXMGJWquLx3Noi8ihREeJKfpXFYQ9qTRwx",
  "key25": "5icVE39LYkbyboDPu43TC533VsYYhqfcaWvFCizYqdgekQAZ1Ddp3xSi29Ln6MBRRdPE8eVapvi4StruhA2uQczu",
  "key26": "YVCZwzvzV6EUmtf4zwcpMfMraWsSaVvajZv5iiy1qvJoVhsg7PrLDkE8gjMb1KBJkYLHvYp28hBtGKjRTWUQ5id",
  "key27": "pKki97Ni7rKCgDHVMy5c9wmj2ifaVm5BoLMekBx3Zn5e27JmZstSf8svoRcwKzqVwpjhMdpDPD3Xw4QU9DgcfLj"
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
