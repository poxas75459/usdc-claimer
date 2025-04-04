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
    "2VXJ7iqH8m7g8jhpLjrfpUtUo6vDQ1ZsV5FHW2rr1G1GceUvMSYVKraMMuZY6h9hEPm5KpnRpfDhqDya8sioo4Rk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Fbkwb4S3gnTVUEfzQRKptXjTqmBNvAjbQA26EbjTWXwDhhpSmi3oh6Q8aRbMdXf8C8gZM2mSuMPV3hfM3tEWgbj",
  "key1": "V6XFnEi4WzNfcmaqAMMjhHsVjv1kvSwepq5XaEkK3iuBG9sWEKDaKkdciXn4pUSyr5J9P5AjyhvjuStj1pGmdez",
  "key2": "2FhXUduzdPcHd1EUsLyGfxLxEjom5w3RGKQbVtEAkJFG3DQwSUFbW2G7dWMH8Tsw7qU91BRmsybRuS4xF4L1xAUj",
  "key3": "62JLCKK7s9RyRMP1H8T9fNVFbCJYAkqJjS3nxUwno2PViLLP36HqvV6ZADFdYfXnzJJL4PUCcQi7UMMwif9gZjXW",
  "key4": "tonGQMjGPBb7b61fcDy8qLwps4REzUVbztijoAwZQ77S1JfYvMqFXeyVmebZiu96yM4iUNCYxHozeJREZGWkBoe",
  "key5": "3ktyXTzF8oC1f71dnCuGB4m8ohGkK6rd17okJfNPZ2J5iq3JgWGVqPwzLCz4hVn6HGUnnXUezYzt61Hjg1wBK13X",
  "key6": "4G4bzS3bq2MJnBCp6jLF8rLdhG2JhwUGAVgyd8AufEmhD5Q57U6kSPFKwfJjy3LuoXhcoWPGmFA39p7LFTgUxW5b",
  "key7": "3UaaqBQEb1jX3YNEL7cFWPhiqmmicaYrRdKB1vxt4eP7UUDo3TvWP8AvMdCAbDBhyzsGDta9xjWTsS7s1SyRQe35",
  "key8": "5EgT1Ex3YU8u7cS6WeGGvWH3HeyRS4Cf1qYgoHzKsYuD52ZGFYQ6Lz3RFJdEptL4cd7XPMBu7CdPhNB2Z4BsPh49",
  "key9": "4WfKs1sN15m29vGUagduFZMuqB6vH1Gbw5HrKWxPHgbbQnEwZytvDcQKDhQVKGtrQHn75qqaxtnhdWmT58rWpuoG",
  "key10": "4L1kXYfWwG1JTrgskaZdyRBor5HyLwkdWpnPmRaXPgvrqCTQ3gUynDCuYwrRFEEUVdsNgqf6iMMuhaaSdBqoRuwr",
  "key11": "51WR7aaohauotML7tmDfbegPtHLUz4p8kY9AKaUNXCitN6uDRSmNUERwjx3kMDbt86mujbLu5aZSvMyWXMbX2gjC",
  "key12": "5pqqfygkQGB8gF8NrVcbwdcmNQM7QZziCm8tfxn1iP9j7jfx46Ufbur62Kj7Yz5pYFH3h2AaZPnBDoJ63gj7r58Y",
  "key13": "3qcjC2BEKRqGHMwMJquftR7mBvUr4st1NX2KPwQcn1wGbpQ8WGkBXeJpdWuYU8ww4SXNv5Z7UL6JJepNGjbD3XZ7",
  "key14": "241KpDQ8HsdkhT2U38V3377hy99JrELm5kuX7hCfWfHE1zzvED19RYU1t743wtRQuQqZjQ686GkrKWzbRXWKGDyE",
  "key15": "3TyFhABwKd4VKhku9rtQt1a5GbofCzh3B9rZ4Trqvgst7W2a3EENxcW7ysuEJ51oDWjbtY4ZwkFFeKKehVfduDAD",
  "key16": "sVp49aK8iGV9FzyWaVbDw6enfNdYtUeHsf1Qfg7AfRxuFuwwojPXby53nBTaCdhwzxfpx96MdbFc5jdzzNy1pLK",
  "key17": "3yqH9e3jhHLYAvkv6Mm6rREh6VWYbeom1eJtk1rmxHr1E1MZdE8e32BtTa34G6nLFuguEe6ZjjoY9Ux2LVZKEUHB",
  "key18": "rQEbWZMoTWVQdDDXq8s6eCFLSoBvYfUkUFycwT5GWbnLR2PUav8FjQpf5nhYMkShWsX8c6LVEE8jMZsMRtbd533",
  "key19": "46n1SPLtfGFpyLS28TDoJHX6YMLYGh3Y5gUcNRZftQuHnTBq8ErPWh3d985M55PrgoQLouzueqgYuG7KKnv9KiF8",
  "key20": "ejtwn52eUVjXFFrEt385KWkJtKzNyPxnviDNbREbD8MKh19pKDZYfg9CM3EHVvbCsU3LiP44AeMjZE5wGRUDTDQ",
  "key21": "3KSKoPqvDuawhTxENKNQfG4pcvFE41zu39vYB6q2uwRgZa9J28gVPPAYs2ehyz5ahr69pCv8q9LtGweSDJyGuQ3J",
  "key22": "5EkXfdoaRahjU9t7oGo2xaBVTstskD8JGTXdqGSoEWWGGA8duhdZrXuqYr9qperSJxxyWv1FEiCFA3PzuvUaXwBd",
  "key23": "55uqqCdpqmQjRjeZDE9ZTTJu94163DPb895mFKFduvYCLcq5AMpe9BheF19tZbjFB5gmHXiBPaxRmC9Uvh9pSQ8U",
  "key24": "2yQgfzCjAJWokybX8VXoZ51ocvwzATt8aH5KN4Ce9F29Vpuj5vE59VLTGxBNj1KR4vsK71gSdG5LSRbvJ1kDL8Ve",
  "key25": "3sXkyuAtD8peomE1XEk9qnktCy5agrwNjWRYGxbCRea23A2c2Mbx7nS3Q6jxycTLfQ4UX6oazELf7XBk5dmBsc5p"
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
