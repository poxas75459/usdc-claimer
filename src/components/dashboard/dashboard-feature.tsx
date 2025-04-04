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
    "38MoHKk9CnyQsrxNRs3iy9wWXUVJNNQVPeTPwguQ89Rn42ciC9q7hGAm258HbECzGD89FVo3BHPjD55nqXv5SPoV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rmbTDk5mneYrMBT1ottpSzz8N6odta3PwSqdok5BMzfpbVRgTYLgWW1HjAvymMjn2CsA9W44ZVR3eUY1cELgHuQ",
  "key1": "2xiw3At8MhEgxtsEu2GGXj4ykFDmvioZsqxBP7PSfmb6KAeuiH2GCqTfBobNmCLjfX9fTHbVHfYobgZzSVueFhAb",
  "key2": "3ttEbWJSWXkRPzPZN2zE4AuCt3h3MnGcqtzVHsc6Gs1SbrksSXTrbzXfusYiyZu2FACViJv4kWnCSEYp3yLsbv4P",
  "key3": "4xmmN89wjpjh1PfVzHPKeUBsdDJ2eSqGLKzpG6369rpGYGFsMFWEGYfWqkVXMXMboYwiBPnfaJBJkcbgPW2TTvHZ",
  "key4": "b6XQDypmo9vjk1ihiArgK9vRAgwXkbHfa77w2iXNrCwLktTBUJxNSceUNYjmitybxH9ocPo6FzUi2gDqzzBPeQt",
  "key5": "4XqccQKsmQAzgHPRV7b2kgyX1MHw2E29sRb1ndGjqfqDBuDYX86qTsBXCGTHcxzrP4hjPhTyZVTqauvQT2NJ9o3T",
  "key6": "27kATh9CV5NZnwav4XnBgx7yhNnJ6DHTS7UXBUHbGFNcdzrTLZoxP2zQ9mgGCUF6Jm2Dj7ofiEed4c273RpytPMq",
  "key7": "PqcFN5HLrqLJL1W43Awk2ciM7EWvMMvmv54PVJVS8eYSyxTkQcgirTVAcWVXeRUedev1XRHwhQrKn9Tpyggaijv",
  "key8": "4BDsNCpcrYaYE3RUoutbKSnzzQWhqLesSDp8UWPtWPY2NnVDqfU7MKaVKKbbBDbHh5ZmHAfzn8rZo6YTWBz8pqGT",
  "key9": "2LY3YvShQTRfUbFCMPmBi1vDVHWVfZhwNdsY8pbqzuTWXEgMCKuDAnSY9kZ2tzkrxVbn2im4wpTRc336wz1oqpPp",
  "key10": "HQRAmnYYzvGrGTkX8PMewk3wiKe8c2eNsujmfd1xPtsj1MwdekkoJUkfG3eJZGQ5oHZaaSZ38gecUbTD3UWtMZe",
  "key11": "2u6YKcuyw6m3ACuGKJDn3MYx7KCKnrXBLLxg3pT8zS1uoNv5yYowR2JPh3Q7mFmdSSnxqT4RQzBxS29oBx1Gz3Wm",
  "key12": "2miT2rZNPAZQcYpM2GASVK3kuwPQbCpFeHSBZXQU4p6XGZ2K8kF2DcaamySV9qZ128KBysQ1Q2tU2MpRfLKsRUAo",
  "key13": "2ND5hhoFHSmpkcHPLzg4n7SryX1sxXE3PUB1TLsmRUvKMyi2QWHPLiPNS7hdXeLQPYPjnQ4L2cuXS8u7dd2zJtDk",
  "key14": "5PbrUjruwXsbsjiMpmy6oRZBnst2Pv8dJXyKjmU39cMcTPCFitN94faLtEZFsZrQd7rYhRh7J4VT9Nf4FbSjRs44",
  "key15": "51uiyP38rNo6mGaudXytV5AbzjVtvRQEk5o2iXUKDxbChJN9nmCbPif6mjcUikTk6Ytw6LMtfHRokCSdG9CmKxYV",
  "key16": "bgoRc7jjtRYjQaGjMEEFojqpf7C8uJJQ1NHisFQT3eKZn2c5vrbpmUdsk1bBCckjDPbEjB2VNd6PYMjkC3XYgXQ",
  "key17": "2tgWrELuzYSiPXnWGPs6p98j2rPuosCuqy3KNnGUE71fsfL3YBLaPw4NcQARUcgMXhfMV4J3jwF7PLcNBAfxgzrQ",
  "key18": "Xd1VHC761xHxZhYmnYHa7ahWAQUjWMqUThbQFHzjKtWyE4SjyKjQSqahCFH4rMqL1C7ydYW7pokV2njxHXRKoL8",
  "key19": "32qsWBftPmew3czPgww6iK1md5v6shFeM8efvmAF91w9hg1PTxLEHvtZGjiQtCp3um8jSRSYLugUHVxLLc6EQX8x",
  "key20": "2MRyJSHQEhChLYh2aLe99uFf67pygRJG3RPWS5Dp23jcSmo2YUXeD8DAg1rFqbit5zDDr6aR5Un9mbrWCmcHau29",
  "key21": "4Na8tNcak9wCR4xp44R7U484kkaGNkhTK1sWYvZTtFFya9QNWWP3GyGkCXDtmYfGHJJPVT9FfDLzKKBkHFAWfLPQ",
  "key22": "4iJ9NRkZGeRYeBd1Q6ozGYCCC8HPA9Ts2XQNo6HLW8Kvujegaij5frPV4MSCjvC3tWokQZzjo5yJ8SV8cQ9SyqGF",
  "key23": "2Ndbf6ie8q96Fk6swHeeKiqPwjE9jtjA4QWXvWiiKxYYFzUwFrsvnWFXNetW3YVVjfCgy8fNbGEMXUZZ1rDsKMhw",
  "key24": "54tdYXy2fFaAHXKtzVbBMF7xS1ycq8GR7pUEQTYQBPdXMMu6fyVRk65jBHrJmyiePBHedCpZUSVQPRBkWfvAmj3A",
  "key25": "2dtuJFSpHqE6TfqN4T5vEhZGWMQsM5wLRggrvrHLGa696eyr3SVFBHsiuGq9ximh5pgxaWu5ZRKZ1Fu6nRmyybkP",
  "key26": "2nPQb2cYPxLEjaaRT49T2yc2HEAtVz1davFErm6Y39dQcRNDbjFFSa77EGb9weuSHNs2A8FKsQqQeB1KgZepdkqp"
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
