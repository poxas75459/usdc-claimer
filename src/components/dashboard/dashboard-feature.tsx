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
    "J8hxqjB6owrdjJTUvURPRdLxYzMWtKKo66x3DGWXkDuZe1s5L2HAeP5gkDscmDnyDaQpYp7XhmzAYMy9vsESF6S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sjPq844dtXbMLmaa6eSREePxLrwxwr3PZAyBTzAgLvYysivXJWQ4pY7rLhuDFmdRxY36qX3sv4M3teG5cLyUiRX",
  "key1": "4qjmTqh12Up77HfG35kEv3MbVuCSZScgEg663WRXMuJQ2nBFqU8EmU8SZvE7fKfyzrR3V26JC1DcCfhSrys7fGkB",
  "key2": "5UHhsRzCMrUYhUJ8a6QKvZSTyFzA5ZGN8eDQx9BdFReYGKrQQpi4dgDeDxFCTwyb8ooGKaGicdqRM3XwC6sLgwBt",
  "key3": "6518VheB1DKh9gNVxKHyJwMnFtMLkBf3vZRbou9BqoPaoLnLeYgHZgLu15BkTn4hy5nmXTxQPMWKF77E4E3jL5mu",
  "key4": "5ahjgLFV91L54VPpjcvVHckRfp3ab7MzLnrqBW4v72rRBkRkKCWqYanr21HPUeyERztZYXo6spRag7sDprzR9zw4",
  "key5": "412y3fyHiU9Rw8yKzDgHTBSQS6WyMnUWnvMueDBw3wsbHEfpeJm6KXVbubL3YZSMcCJHR8qSSzyzynCG9q25bSvR",
  "key6": "42A7H8NtK2QiUhPNtvk68ESnoTtCiKudaH5wWE4Lgt4WprsyoT7aX8DdYomRjLjUxHjWeWitpQHeddLPWMtqaxa3",
  "key7": "3ANLPofVFMTKWD3RAFRu26JJPn7vCBhq7oiskKRYM7ynrV1JwYSKtuH1A5ofL9DTqMRnppYrLTtkwqUXfQVrVZzM",
  "key8": "2tski25Pq224RGuSAioZy4SmkTYdbeVyVnqGJyCGNeyi8Y36FRNZywcuNQ8tfs3GDawqNT1fPhhRpQZkKMhLSd2h",
  "key9": "22n1KMGiuJVxrAmnfHevZ1mL46n92eTpvz2zojNSQ5yE6BR6ZDpvPeYrdzxZqQSBC8e1r8vsnPfA8agaftJ33z2k",
  "key10": "5rY3HW6SN2huvZsqaWkjY3TAjRUQUYkt3u5TYU3J7aqgscyApLoyN5QdpYRaJFXgnhPyvaxqwVVmkBARSVVTq977",
  "key11": "4ZANYH4g3aYpPm7s5hvAYQ8bY63EmGJfGHM8D8WqZJ94NjA2qnmFgagWLELsHtrBS4AmAEiLnLRswAhP98drm9y",
  "key12": "4DfvWYmM7GiJ47fmphnw8vuysPLhFvCLjgpWzm3FUM4KxwZfpeLjYig9ZCrJt2Dcmit1sUjndagpphWh4JqPEaBA",
  "key13": "2JKsvLZYzV6v1e63ZdnCoRtpKmAP6YfnRVwkvR3sBUdptwJRVYLpyGUuQMuNYRvHYj8Nsp3WevViSCfRvCvt7hZx",
  "key14": "5vewDw451LzrMTjdyzwCJKxzZFegu8f6Yk61xEpsiSmEb9ZKQWzkHTMTrHrBoF42PyjhKZSaH1WJsdj5C2RJqFCr",
  "key15": "4sPQXcHDmShe9UhmmQnV6TMxN19UNfawqAx714M7StKX3MAj6fjERoLRNoFKq8TNtA8AScRK14gmnca4foE5H1qL",
  "key16": "26mczPV38kV4uCDZC7XWYTawMgCVsi45moEsCnGwRHHZr14Dy1DPK7EBr5zs188DvUQQggcHwshjbhvAhAB3Jx3R",
  "key17": "2PiK2p4vqJXYjkQjS4aiioT8FRCjdocdzX1LAbGUKL44ditLoNYziwGrPxQ8fLC63wGo2zBzHCQcv2qieutoMyHh",
  "key18": "5Kq693cv2EWDpqhmQmDes8czzKR1DnUznNDAPvz9qa3wJBdEiEA3QRSvqJYaQVbs8ZSQVmhX88yJeqSoKMSadt1V",
  "key19": "3JStTjWozRMSWXXgqgyyENHJjU7M6Q8Tsqyvp9A4yYEBcSeFEwTpVybbjvntJEMs4stJsZ5uuSuvDQAjs2U2ddmP",
  "key20": "NtukVC68KDmLh8sX2Dfq3ymmdergyfRaNhkVGRrYCfaTqGtrd9t7KJh5AMNdNHg9Q5jPdcSGcGPrqJ7jjQd2nxK",
  "key21": "5eYQJhk3SZ2dZQrthi9HED591UnaC3j4QAzdVGMiPB1ua1Gjow3naasZEJPTwYr8i2FXrQdgUMAwTueqro5PiRQ7",
  "key22": "Vaoba1hEC4YzUTLsz2eLLFPimgUtVkVEwv1ATm49LZUn8xY32ynCZBqZagmckWvRsh2dpwUisfUksr7Q24tzq1K",
  "key23": "3u2PkLrKpbMTzKP54VXScgwcgVTAwpMUZYvVt3G7NQQH3UiSYRpNnEg62g3dQMyB1DJGTooaUBq64v1cnM3g5M9M",
  "key24": "Lzqq56EVAWGtVbJYLCBesdj7zR8SwebCK7vgNHnFfUuFVEDsph229PNrWLToBbGGAu7XT6nCsaXVc1GQ8pHXBqW",
  "key25": "P7AxBJ666afw82VFPeRdX5yVBejpmVQRBspWBjb5qpdEFjUdVko9wekQ1M3jsgeGJJirAARxf7oz4PDj14x1e3N",
  "key26": "4aftL397uPmmvyCFtiotPs3EwPm32kPFLVtJHxJe4A3Hsjb44JXK4bos3k121LoHnAfQp2cH8ewxmFp4CWkQi95Z",
  "key27": "52zWJVSwgZvRdVkufX57qA9bJmcThc8rPHgEtbvKjLhB7tqpBDitgZt8fyPAp5HovRt3qTGct1AL3P4t7AqgejR9",
  "key28": "5dUQ3daxtn7cNybjZpR6c752oov3UZA33ujwUqK3hacKb5VGZJFm4scVxdjx5GAdoYDLvTAad368B7eBo4JxeBfW",
  "key29": "3FrqUUEYdTk5hk9ivgT8UNJ8zjPobQuyECTfQT1eK7dXqeWV4MRj6X1erxNku38HrTW8DPU9GhYLVijCSVPuQX1K",
  "key30": "3JFTqZkhNVHzZ2zj8sZQFsK4QCb2wXhCqKy97KxpNMUH9afxc9UoZefkBcaesyyVTUWMoBT8k672WLGNWXvLAx4",
  "key31": "wqJRdoMokM7NCsYSH74PS3iu32QrM5iLop5QRYpHnhKEnKyqw38Ho6B3J9o1w6e21THXWmLKz7d3DNvvhFXZkN4",
  "key32": "26L27ZZjDbtvdjKcwRMs8VUk2bBPL1rKUY8bdjaFnQ5kVVw59eRDddWkR3BEGyknMhsC1kThaWDXu9xtt3wDWMaf",
  "key33": "3v2en16XH8SijtZ1R1EXnQM665v7WuTpZC2EakNsmFvzvm4U9AgiHDWXhDfLFJAysSprX86shoGaJC8qXYSDLL2V",
  "key34": "4ve7hxXywyQKxjXpUTaJVdiWrbGQwioLGXNi55ya4mejVRKZoxNXmqUNfHo8N2PBtachvwqk33XKpU6hVdWMV9qv"
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
