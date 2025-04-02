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
    "4gz2ZYp68xbSCKUPpEHE96ws9ycN2yPRoJxWNEktiS2H6AJZTpmVomBwuVGqXVotuU8WwPcaYv3W5pf1tczwLyYe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KcJJz44S2PnNiccyA3EbtwmtkstkAJ487w39i3YVf9AwBvd2QSnFDsnw82n3p1P9wq5RDmZM7jgaJ8AGGAKM45j",
  "key1": "5cvkRWkNKyYzohUx9TLbMdbejKn35KAigyk8qcnBzbdBSCLwBL2G4k43yQkyqp1AdL7XSPyQG2X9129NpBJxeVEY",
  "key2": "4by2dUXXdwNqMp5DLXCy9pvJRjRw5x1Ee1BdnR5DhUEhiRdxPKwWgFGCb4cCXJ5nEMLska6aBSpkc3hCBDdhYFtM",
  "key3": "56HTMqDaHTm3SjPNAKq5AQDYMd556gDoAHzD67GLTcydqZxzkRaxPNh1af5a6nJncgTpacw1on5VDLXDuM39LeNF",
  "key4": "5CLKji4WbGhwvfS3rzLB4mP5wEcCg1hGhxf6jDYKJdmA5CV6hY6MxNpjqLHoaxkXLkG4ELBKkDPPW2rUAMkKzM8x",
  "key5": "5zem2LjxHeyGUksUWJMWVWNnWbUV2AqN9TJFMrFdgjvbdHQ6BsVZAzfCG1NuUbYaPsa44DE1ng7bZoPPac1w46TJ",
  "key6": "5xRdXd5B8hHEiZRWwKZXDXh6UVLBhb7SMMh8VJJNArHbPS47Uf1yeFhCFLSSrFS1bKEhdQsr4cd7WqryteesuY7p",
  "key7": "34ktooFpknvbPVHdSa6t553rw9UfpTkNQfSjeCLVKUqnR5cPNPQvEAAJfPW2u2KtfJBCTtdjVFzGSHiRvavyqvLc",
  "key8": "2DxsbZEEd1oaZPyQ3AvevWYFtMrrfF1sudA1N9mLXYZgUiSDjaamLu6gptEuCiv9rdub89KtBFxd3vtsWFpbQF3j",
  "key9": "bPb5TxG9PTjhAJhvUiE2f8DGL4REh5XJq4jYjCUqvmzWaXnZUqo193TzkRpsUmDg1S7ShiNRogTV3sUjd1M9KwZ",
  "key10": "5YJfb51KKkiu4f8HSz3EC21tZuz4cj49Ur8Xovy9S2LFti6KcqBkqv9jVr3reGSh5YpQpBiv7AxJh2gvJpDrxRJi",
  "key11": "4me4Lwrenc63N198WymjuMhJibhdPUw4qpL7EqMqVVX6gzhToRxR6gUediRa6KStuBsHjHMsfY1svN26JhATNYgY",
  "key12": "rSCoaT2DEw5AQC9vfoBpYgZUk7g8bchDDtK4mWd9TBwS4XUbe61AYzDr9AD7Z8pjs3xRbm7jgK1C9SNVjvPkcU7",
  "key13": "2yM2KriknjdirzYnj78oS5sr5GCT5qAWAUSSGfpejb3oLCgs19i4Jxq5smsGAuRSPMASVMfTHbTwNg9Lg9GQnUu3",
  "key14": "4VgauhxsvqbTo9MbWtCtfUw5xheQp3aEhEAbJ5YcBf5kEgZbuYA4PnxE786JE4Q8L2CX65TUReTp6pdj2hy2e95Q",
  "key15": "2gSBsg4rFKfR4QZNKnv6J5vWgf4nqCYaD3FUYzYxVK7amF7UNojXDCrLcDyxVibLvNvhxKjdB5FoHBneqPxSbMQG",
  "key16": "31yyVmnkGpRSLW4JF8yCG1Bk746Fkk6BTpEkLUCLgJgU1RJyhW18JsKGvik7ZC5YkuzPpPMeRzoqYpPeXrtUeDhG",
  "key17": "5EeX8jDGcFGeAKQdj6Y6wgfY5KPHECQeAmiKK2JjYBMP7JKGSZoTdMcrPDrFZvbgyzTwHdDa5eYaX2U1hqJhMjY",
  "key18": "4XpGQcWaC6QEo1mNE63KV5a4phdGPqK88ecSY22VkAH7kfYUMwwKhbkQRscLhTUXSaM1LWzCQysH8CXcYs9btvoF",
  "key19": "xePcaqpTph4oMPdqNowf3FSGPwYg52DfPYCdVKb4LrUn9YM6pN2x7QE55fNcP7dzckFoGa6eFM6NzXQHJ3AzGQ2",
  "key20": "5W8y4LkfFk23VnX5MtCatvCWRRXKghp7Ah4rrEoNUsbHAqGWQtWcNMrMFaRYTYZDVrzNkqKYCdUtfcPGLo3ih37P",
  "key21": "31nrj7bFB8ZBHFc2hWwB4YMmLiVQUgembZHEokJvVVLqE3xB7foWSDokSh4QCTqoNDj2VzdefBFEeRFTmqBTvZdY",
  "key22": "45RHZsgUp41gBeSvsWmeGB8RZYmzuK7kvkq7AC17sAXTEh5gHCz4ocR7g38sDVrF5ohEfAwincDwWBBoU86zvjJh",
  "key23": "2wYNbGzA7CCe7XLiGmreqPZ2y7wwubvdfMwuMJa4oqcM3AssVzTs5dGHYMmZcBKqTxDsroiWyKa5pbQcDmnKYLTC",
  "key24": "4vaMLDCvsQgFTYTgeTeVJo3bKCr3hbPrbB7tYFypic3xcJccVx7Xrm4fy8fFxUtRge6Jh5QsHMKRd4yhPsNE2NAo",
  "key25": "53TFc7fMs1mKWtSjhD8Maf3K7muT9WczZTtz51KnUPeY2mjenie5NHZ8ufKmoeZmRw78ndT6iC4szSR7DBtUqMZz",
  "key26": "46Gcv2LRz72QRrHTu8b6u486wiy4oy4m8LSNZBoMARezyPYT9tumuAGQk1vkUrZwyyELrK2P4FdmE3JHdyF6j4FT",
  "key27": "3vkfHShyt2pDdVYYQs9RKQCPp8CFbyp2zFBBVp33PffJh2ALer7k8UyQDrAkJwmAcvcdtSa3TxnWG4GhZtNpKR4g",
  "key28": "4VTayiAn1Tr8h77JsVR6q4gVzamgMyvjLXy6XBND4RZKq24vYN4LbU7rcBRefBEuSPBrVmbERmVejLLB9nt9NNfS",
  "key29": "4RYfD3U5k7WBNTvgak36ES7vHcBLMfb5zzX7ivRha5my49qHop845h6DJxXxz3xvT5wDyjtBx84kkMsDVjEYtQ8P"
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
