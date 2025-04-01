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
    "zAbuWcGChr3WKJ69b6sMZHLPj3g62UGzQrRLEX6dmzM21qijVJA6FhSn166h3z6cD8feBKSfTgJV9gNkG6iRfeM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AHEbvBemiiQCQVquKQFTuP3vJDrjJg9mAu5Zk1VfWSX8AdE3sJXSHhXC6a6uAAwKRBLbLN9sdttijoq4vaXk7TR",
  "key1": "4no1XvXUEbw9wCax4VYqC5yNeZYr9S183fFwFpjiYy66xcn823zD3NKXKoriJfxBwzJRexFg2V1C6aLZ27ChDptQ",
  "key2": "5NDP4nQbTo4Ekh17XnAFC2YSRUUcvWq97p8veHx5bptpipmiKzbGMWeD7i73yMS8xkjwC6bCzFyTnCQtQDyxotgq",
  "key3": "2pidGcGzCjLQgsCeuMjv2oAKBTUqe2TaezkSHetRi9e8MzXvCsUfEnbsubnrGEUaoorBGSqktP79fxGWsrBGRDtC",
  "key4": "2Jbe4TJ4hanGSG2LK34DqvbdZuj6DuackDEnUh1rG7TJfZixRMCnKsgnqDWsxdpXq1wvesWHec4MRSmz9SZg13Gr",
  "key5": "4ACPQvLxyvRDnKtTwceSzyRbX5EW2oc4oghrdcSxhA7hJedwFNWpaq5mH9tNT9FCg8SK3f725gbLQbs2x3PLYVa1",
  "key6": "4d9FxxQKsjwcCazj2iZDbykbPJ7aLHHRVdfVfXvMuqGuWwWNBHhkZWauk9gFN28u6RNyT6qFT3dr9xUzQvPAVpA3",
  "key7": "Jet9ERZ38GSBBNHheHupZkMw1Qfka4bTYwi15it2uZ4nhpBoTjC8phft9gQZtAVmZWZytfihwVTLHuJiBcKksJ5",
  "key8": "QnYs5i26xoz4H5MEEPQBCVwcUe366UoyuBVNkYymjL7osXg3TUqYUGgXJhsZXyDJdcNFTrYaN3zER9Mu2tq7Nc1",
  "key9": "4EVsCp2CxVMhoRrTehyQBL4QrHgEX3bgGRtVFZWHEn56U7CZfzxXAfWkYjR1Q85TXSNpodchqLSf1LhHjh1nnntW",
  "key10": "5tEfwiebKNyFtEuwzBF7ijR5XVvzAN3FSo4akiAjLkJnuzotEWFQPSshhasgx7gCQ6yg1RXgNriQCb36mbz6XzHF",
  "key11": "w7sdxRbgBmqZFkijBnduhDvGE6hdVkQNGSEJjYm8G5VDJna3ApCeN7pb5JJeHccMm7NeCrkWJgvpAvQe8WMVHvT",
  "key12": "4Eo8mCaWcB2aFmXK4btdTuJHxCkr6pfzuytMyCNUM71ZYeev8tDYZeEYv6n1XxLfatDnQbvYTXLFonwmwQUFQx78",
  "key13": "2DCbRR8bXwFqFxKMgjSb5GN1N6YcmEGmRWNKN73uUqDdyCvuwtxLrauYwoRQfZj1UbJLKYfUPDtkLY9eYhEyQrA1",
  "key14": "65CksVDJcmBLFMoYXexg33ZpKDftQ6pcTJ62AUZm6wacfu2mjpbRSpr3ctNkjp6C2tiWna576QyrjVCi8eDd2Q53",
  "key15": "5zLDZ8GBvbpbY5Wme1McHujvxRxjEVtUMtqyGhujDxANnLGLByYtCH9YvWS89zSLQYCGHP98SBgxo5H2n7tRZH6B",
  "key16": "2Nptb9toTAYK7eJ5uZgxUNuiGxC5ACfU6WPzfVXnkvm1eG8qsHBjyArCdR2MPyR7viCin3i6mVmiJ9NMwfAm9y4N",
  "key17": "3ybbxjcPE2xJDU3LgH4Z6MAMmBDLbDR97wjHGKtSQYLPAFTf1mSpf8kfywfhPzfABMQkNvqdtU7wUwkgvBwj8cAf",
  "key18": "T413ibxrqHgsnmHQKLq68Hc1gxJuAiqTSq1JRykbNdhVzvYEUAwc63SBg4EzDW9TokYwwoT1pBMopygV34fVC9Y",
  "key19": "E5zLn4wpEzmeAADj2j4mowGmbNBwBSCydiqJQPZFbzfZJ6QFVoNrXadLKQsZbBsTnHdjZyvGhXFHZbfxS8Ud1Ev",
  "key20": "5UrDFNir52QCnByd3czWvyionD9TD4fETSnPxBjvst6tVJrsiF3VjGZP8XShnyksx5vkhbyW75SE6aD7n4Lf2ZfY",
  "key21": "3YVA3JmUs7zvhfHvqtFfkbT1Fx2m9qn2v5VXGwMv9svKaU2oNunP3uQdFvmp1A9GetPU7Y5SkMQkzUWxSMdnTK8E",
  "key22": "4U1P8KHpe3jC77fKMdetGSY6D5qsvPJuDuUknUVQNrvrb3HyRgybA4fjBPvb86YBiMtd14YhFLYAQ8ouHcMXrqpx",
  "key23": "2wYZAEd4cTZFUpW4irWsopZXaruQACcgZeae5YEvt5ADwH1S9H8ZzwdkkSc6MqF58hr4HQ7cuJxfRXcdft5vDR7N",
  "key24": "3Q5MgBbTL45qiQsDVC6a1YvNVXUqdWoXLpUciPo3GKj8SNLjpi1WhN9BCGBdRkKWbBt8x6Pfv4R5UGhtcTtaPVBn"
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
