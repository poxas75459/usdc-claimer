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
    "4qh5zz6Xryw7rAbrZvjTXCCBXbWfHeiViccdnUMVYU5eXgcZJPULfowjq6Mx17wFcKyF4yfTpa6TAwaiFmn2wCcB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26MhPRu8GRD6N75k5EcyWCGaw594kitT48tHwQE5KPcvkECGSG1Ed591fe918sbqDBverPRbag428k73mZgVC4MR",
  "key1": "QZddJ77xC4SKW5wHF22QV9mnAh79r69xpQvAi9agPu5g3mFfZnMwTs56xn7wm6ukM6wXij2Zkhw764fs3yFC3QZ",
  "key2": "2BDzmXNGemy6WGQoMLmnQxTMAZ5QBS4eG8iyQP3iqr86hFVFet4ajXyJBrWD5Sdc7McBRDuR9jqz6nZdNz3thTZ8",
  "key3": "RaQiZXMzV2eWNjL5sqikf9B1BE32uGKPA5SFFu5NjMr46bFC33LAzxSbJHtpZxu1rYQgQjd95Ks4RHaSLLQRvm6",
  "key4": "3DhFYJnirEwEbZKk3wXWGWuWQGSLCcuPtq3QJo3Y9VwjznbeK6RNzDZzbHt4T7jAx1pmurKUDMWWnQdMBBsU1iKr",
  "key5": "dZbJ19kwEY8A8chuYxzpPAY6e3tR7NKUEfNCoEtKMG9Kn4cLdnJbetVP7yzXjrwsGmE9LtN8miwE7594xNLnwGV",
  "key6": "2rA4CueaZ8GC9fkDgA6FkXBPKgGGP4W7apLVFupX2uKqSqVBAiFoTeySSztFRYscwj11Ra8dJPdbEC1yMWuQ9Bte",
  "key7": "4wFWjDXtg8Uw6LKwbus3MSTLc5h9pLGTVHHFJNVFkNpC47GsbrsBS3Hs8pZpavnCLPwfznpRnAASJdB1p4hC94ES",
  "key8": "5KE5nJvUioJYgmBvyCQL5FxAqfy5NRPdYxrx8EDp6LTDUKTDsHAhL6Tn6NgSJSirVz2jwhsWwEif5qxquYbZ7Gah",
  "key9": "36ytZ2PxhGDB2yMgGpPDxTro14PwbTteFGobKcM9cnMsH8sAHca9L6NX8fGwRonEx7eoiqofA8PcSoZT4mcLwCir",
  "key10": "4gtAh4Ko2ezR5wQ3SRTynCKcCUkhDjMzeBGF6wxft2Ca9v7U6MSoUq3uhE7exuB2CZs2pGoihqGtDkm981TzderZ",
  "key11": "3oM3CWoAtGnMMrWVavLXuHtsFsSJRdvsZamGQS58SXns24HP1eZq1TJeixUCoeSK67CRNAxPPQHni37uHVLPNLvC",
  "key12": "tZu7FwmohBoZ21UtWoS13JATNpyUFtNJXGtFhmGtrBf1MGrjAcNhgNknQiiMBS9WFyKfvtCtjzT3T1UQ5MzuucP",
  "key13": "4223QHb2PK5UZePrxtVjjo8UmSrFaijUbsRSQWcEQK8jcadtN2keZACeKYNJyi56NFLZErGajcdGDuVvhCnA2SFR",
  "key14": "2km7ntrfATDcei88ZAja2XCrWn9P64QhCBw1qNAjkWQzuhbVUq4ptPeGj4SStXwvGGJ5h87pggcFSsAKum6SecgH",
  "key15": "k7qQcyPWCuMYSHTSnEBCMQwG5S5T2YTtRcxEwGrEsZ77Si4PMKQG7aAzz6WB1N5deF3TzhsYmegPSMNxZHxqEsY",
  "key16": "2m3rdCQbHyF657GpQ8Z2AXuB6sFu3GH85p9KHAauJg9xdFJPWwNhcYRpeERH1H6RjMvgno32Chw44hDQktn6p6Kg",
  "key17": "26WiBZBwTVn9JxtVT6vUvryYzg6A9MjojMAFTc8m7ktX9f9fx5c9WbbPQFZ3ZcbvFL9wjoXMbngNU8in9zYT1qLx",
  "key18": "4u4mfajejJoWq2wLhrQG9k5iRis9Qdtdzha74Hpa8TSpezam11iDvkvUtUHeeCkD896ixNtfjaZE9bRXUJ9JDjZo",
  "key19": "5JT8H5XgppNGNNMyBCwkh9fowbspmgfFb5G7fW1eniy5i8oy5TjHuYCk6CiSpGL7msTjhBzXD8RiAYXwEoShtpse",
  "key20": "2NBQGxhqiVLYfGN9BwQ5opL4iv79SnGezsmBXVQenScNyTVoSc1Kd8QDtLES6HUYcenhoKkznnrV9yXPXNeHo3VU",
  "key21": "3SExKuKxq8oZE9jV2KfePfubEVWcorNbaZzke3t992znqaoymFqLVwBX3wWnLy6KYCdanNPE7KGx9BijPUVHYFaT",
  "key22": "4gAJiB51V6ApsN5pdvaqG1yAw5cKPfJyDoaRyrxP67o4gy5cjK1k31ywZfN1cPyZTbEHA5M1wEPyMXRMWuCjipKC",
  "key23": "55akMk4qLv8jfigurQgFSLUC28FVSPH3ReNytaf6eN6vmo1mwkze38VMzRCoRujf8HyC5opwtJphGZjfsK64auMY",
  "key24": "4SGLske9KCQcMGyjzgbGb81Uzkr21nWW3LuUquq6iZWdSZDQthuWWjvKTYr9beKnYDqsxDwhiSu69RKxD6DrTJ8"
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
