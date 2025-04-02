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
    "3S6dYM989GkCTw4UU5KzWkrSRmQu8JEzKLakWTwyf79VAcT4jQkisenNaCVriNGukf2cugzy1QoGPJixHJ1RRvRF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54drpwnerfK7x21hR8VbQ8QngV4aBuFZYF7qTKognVtLkUnUWZN4qWq3StzBR3n67Vb2QYq5GTxAUmhFaE7rgEk",
  "key1": "2QgLSznG26fAMdQ2zAJCm5qLQNUvjUrGbrmycgDk6tvFwWADYZjpqp2uPG82WgE6TeWG6zfGrXUB6KdWY48455oJ",
  "key2": "26518AntP7NBLFondCCqs7KMeHTdR23PD64rpQXVxYxPHDZvydRTFvHDjTJVqYVWWqw5xn51Kv2t588kDvTWu6hq",
  "key3": "662fgJDt1t8xFnJGQzNEUR4PwaAWZG7kM61m4BPXYS1Z2ZrdCbJE9pj1HxrMizVKUX1Y7CMozZUn2MRg3izdfMD7",
  "key4": "2ZucAgcFLGDMoX1rGvc5pswHo33eoQa7fwHMgVeWYbBncssbk7rcNmYniu7qVVe7fCt1CnR9ymLxY3dsi7YQEgJf",
  "key5": "4GVSCBnJSL3dhd4xbK78yQPZUc4YNFQ65LuUtGKiCEhDBR9v9aTuGRDyidN46jMdptFQXotYnsYNuKcS39PbgAK5",
  "key6": "3cMLFiXBsfvqUE2Z4motSaaSZXv3KRZKiQSg6uXSG87C6pP4AzDR5mvd88VvvWWzKZb3N7JLuhGW3iC8cKjKjZsi",
  "key7": "64VXbzpbcf4hK9b7kF29cJZvCQu56mDVqbygxKXdrtrdsTmymexUrkCoU3uTrsJC76y3fiGFeR1yriHJpoJMmNuh",
  "key8": "43CfVk55bQEpTeDhain6FFoGBFS7NcUW4dtb9NYM2TtjfXL2zTTUpyTDeWCr9w8fWowJaQgrrBuG9HXG1ZToxmaW",
  "key9": "2jd6hwRskmJvrsj4TvhMjDzeCoEiNgs2CQfeccRmQDdiT8KRCEb8MzjFEadzPFGnEtfSiVxsWoropWbCRKbe8WnK",
  "key10": "2e8fm8sqepNojVGeZLTb6LWTkucYBMjb2dUGWsj4mj2My9ieQvDLcVZoMj4yivZEimDTa66pq6zt6wSgFzAcukym",
  "key11": "5QG5urXzZF2DvosRXED2rmz8N718GsZmqY3pikxJrWvhbtWz1PoVHV2S5Kvwi877LR7XenfBV12UXHp1tgDdMQxj",
  "key12": "hLGzSP9F4y69JGBaCWBs2Z4vQrGCbWAqmXyfGYQJbjkEA1xc4wTNRfLEZAqmadc96rqsE4Vwgu9NHghw5T4xmhs",
  "key13": "4GDoGHxyYvJKgKCgJzXDYLPjoxm4YQbRpSqgi9Y19cXzZVCFqjzTYRVtrR6wRqbJrdGwYpS2WW8YmUjVBrsPtvaF",
  "key14": "66CTgA7QJDhF69pvTdJhimyUkByUuCkmzrbCwkfPaUZsxYBhQKWWDXftqSmHJbKh4nuqToEjuNAagivBatZVQpDs",
  "key15": "5ifY698GdsaQ4d7wrNkYZWhVm2myqWiecPT1XQMX3sddzcVjrUjj3MYY9kvDkB4rznDG1b9iGgdqycQAGoqqFCae",
  "key16": "R6AiXs4uN3EDt8W2zJNBRBrFR5LEhzPMz85hyEnQFEG2XUhZuswXRukPAi6tWuLPPG2Pi277Ldm9HGQxJtDxEp4",
  "key17": "4Fr5Dsyk8sfurAAnQD1ieP9FBerdXDin9eMdW53yFiVcoUTcuKqrp9vbfNmgXuCdGkBs4YNzAjkhqNCPwoPTumcn",
  "key18": "vQhN5mQLkFWWeigE93GaaoYvgUyBvpL82A8AgEa7SrRne3NqoyNbiHhpEaDWxfeCuaTsx8jKtMPnwE1cpxi4o8a",
  "key19": "3BJeBbqQNJ3LpPArTVYfKSwKHKxffAz6KdQEDgMZ188ZTJsiyezRNJBq87VjkxWXDjJ2yVsf4v1E6AhtX3Dfh8vE",
  "key20": "4WDNNxcvBW8u4f1zUK947iQgvFHmKi6PqKKyXrZR2BHa4ymroUJT7izwgmkBWjRAmyMahi5dA6kLzPspZjRYj1nR",
  "key21": "4RBeQ62McUcX8H96VbnmeBFC1DKcJ9FCEHBY3iBXH5AkMZR1UweGFZFoVBrxKj8rsmHQSuKQ51fLgz3e7EeCmzz2",
  "key22": "3SDUZanCoCxYzMnkhfVnv2CGFL59QBE4exSS3LQSdaQoaoGRqGXAEvrSvm4cxDMgxvmSyJaFt4GTPQFndUTE46La",
  "key23": "5LQT1Q9TPhEmaaaGdSfHZXjzdmdYN4LzX4Agpv4jR6iKZWu1RwXjoztfLqR6ozEQVz3frS4u9MMXsjAejuCwPrdT",
  "key24": "5kdYdkvNAP1n37QtLYpYu55tejFTseAaKHrmZohHCyWDn3ybxg4ZXcjCe9Vfsqz39oCeoDKbbTUGzoBJX9469QMf",
  "key25": "2SkBxKCVTo2yiAzUT3eDAy8MEVjHYnZMWJyaKWbFt5eAgHHavGHixqqSV3V4ZMigCJ65KuHRdZFCEFMqytq1zDKG"
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
