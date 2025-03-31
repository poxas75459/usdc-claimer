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
    "2DMiSp2zVzzBkMr78nkJ8XdvKit1GNofHuKhhM5bwd63C9MnuLMrEeeRzeuz72mx3STHsnyNUJdXYnY1oDyHiATr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FE5vDrZ1DvgzTtwwWPrxtmELRasxFbHBV6wnJjxz5i2KXKiye3UzgTnbTtkJGw9tAeH3dq3TTqyBJgJSiFyxLJZ",
  "key1": "2EGnUKXf3pYQYdxfBFD97u2a8JDjMfMDWTTyCZiS2faW2qPs1saRpxgqDtUQcRMGosvVgSXnYEVY8ZU8fThQr35A",
  "key2": "jMXrUuU2ncMkpL96euKSArMWYV9sondkB1XRqdFVeCPw6SLjpVDmuBEw9pNgSmL3MHeu7eWC4PH2Bx4XZpAm4ZM",
  "key3": "v1x29hqdHE5p155iD9HADLUx2N3d6GbUQz5hXzP5sDPdAua2hroc2DpZm9zYKdWsSgYjrH5WB9k6WS3LPFRmGpg",
  "key4": "4rAxTKdjLyRxwjTsDo94t4PpdgUZZPpjaNtZB3jn4NCmF8nYSodB7DUBZ4HzceqVyJwRAcWfrA2th3KsnqDJPiCF",
  "key5": "5WVNdHqyGAFB9V5h9xZmnGcB5fPz5o4AYnWXm1opqKN6dR2FQzVMEdPnbByd1qFSMnuRudxQd4g7jpanovTBt9C1",
  "key6": "QRCEiG7Kq9ybJLuBu5vrsuegGwyVYjuaWK1vosZC3dauwfrpsFBkyZCMjZjDkj1L65vX5UeFXsVLujXrdDZicWX",
  "key7": "4Vo1aNH9EtnTsCRjGdxHXWwJeJY9YnFHhViKA9nrREGWDDv1RQnvmneeaWen2LFvfBAbQebc4tBrocsW8txVosFG",
  "key8": "gHQzMRxwmYqBBfgjbdWFmDQTZr1WoTxCfA4Fh1iNJAjDcmFcxLpmoFjoYSfSjMwiVXzkHmSqCDPx1UaEfSepxMf",
  "key9": "49tHD8nxoHQP3TAxTEJWuXfKhypuhzBBcXhLsi9MYMiQqXyjoJXoszWfVUdYdTDMubm9HJjqyoXonBMQAntfLfCx",
  "key10": "2rVdF9JF7kUbJsP3cPHe19HeXTxhoNeu7eRwRiETL1nQ9hEEqcqD8xAxakPRJgz2BPS3zhE3SmUKVdxWiZm4AEwb",
  "key11": "5EidJ3QvgSqprkMAcobknWp3pQqFpD1AT8BfdUfEYjnhTYhjb968MUfrGJmE9aoTc4nHZcJLrx8D3r8RW3Z4dLGn",
  "key12": "5a5fiYKHGfx9invccHYfQbPjc6Pu49DRZnFkocTKuE9VMZUrFvh1NwJPpZwuNCSYGHjexb39RLQ22Tz7ETu3hWXX",
  "key13": "3FgASCNffFB4scEuHmDeqJMzwHyuvhZrP45W7d6gedqij58sQXETtmLFk6mRFg2X4heRGaJ3Q9EKfXMk8Hk3msgj",
  "key14": "4Na7VwXBqwm3Qt1xDSCNZkLEv5U2gtfRsiigMBTCfKmU6Uu7UvYT94L2GRJZEBUHyF5dFfAMEErjv367Fcs58H9J",
  "key15": "4w3uwvCtixG11ubRRQrA36SYWoaXSzsdwJSdfRchSdAP16qdDhjVENcYqRPfoghjC9aaSiH3hHNSZ6RbAFW28uMK",
  "key16": "cQvDebCrJE9SfyzLQNJgZmFiY7s8g4TdNn2BYGqF72pFY8jMofbPm7jrdD2wFcAVCFMCZEwuNvscWd24iLGWr4q",
  "key17": "anCRbsH2R4RsMiaJXhqYMeNP2YokQvQGu6ssEoTDPH4v6fGuUyha8y8fRdfqU5XMGq4NcwupgXnE3N6ZJoJym8Q",
  "key18": "59EMBgrnBUBQwXCpNuKf37cuYCXMkTrh4gsBCqPHtX5uLbfaNpvmRJnYX9MuEzbu864z5AWFhMfStdwH3msdH9qi",
  "key19": "65XSfLwp5ixXsU5VyfkSak6SevDJJ29YfrbPLbkRLBaHXff3puCsYSVcbP8p5LZtLfFrrdW8PM5PYWwhip8ckgJp",
  "key20": "2ZWd9BAgNFCk9GrahkSa7h1VcEcbbC7B369AbB9CMhrMQc9VEAmGbhy48RztXZDLxmuBYgqMpz74GqF196Y5Tviu",
  "key21": "5JAHZjjn8WV9HPxaTJBz9g78PpaCtxW5jZuB62EkNXRiBMwZ3rDaw8oupaA6tR3pGna8mmAqP4NcrtVBm3D6AHw",
  "key22": "4uK134pfFsX1F8tYJcDouiNJss9fU8reQzznnSJhxpdqRvUXqhwjS3iDePBT4S9sfmhp2rqCQNHRKtLNDuvdy7HU",
  "key23": "2ejGj4xBktamcrZ4jtTR2nVhLyxoyxr9u8ADsLQM8DUrxSZDQXNTp6bPZ33bYiXji4QxriwWLkcRYg66EGtRRBY9",
  "key24": "2QLNxS58iCFBYERQChMd8rkjkzDpwEZCWbH1J8XUY7u7h5JAC4Dc4MWv8Gp6mhxp3Evkv4RaoL2iTKzHNRHUqhpz",
  "key25": "3GJ3FB9LenXkEKZ9cAmLAcy7iaaMMb9iGVGccem2AkVADy141n38844L3hC5BcLVomg5ffQec7x5DrMqRsM1EJCQ",
  "key26": "youd8CQazmXPo5cPsFoZqbT23DzF3bBbJk8d9Pm95PwBM5nB5QGmBKcyVvnENgn3jpTzFikfwVEdSoqzTed9H8J",
  "key27": "4EKXRdPhrsv3JbR2jjU8RDZ25YcX7zGaRQJU8mDZFGhx8uX5ekkqu8mUUn6uDJuVejUAZYqaqX2VYqgp5E3kP6md"
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
