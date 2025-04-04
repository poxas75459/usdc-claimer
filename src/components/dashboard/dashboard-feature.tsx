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
    "5SFA31Lu5Kq4FrnEQj8KFdXzZS4LyVxnqM25j9PVGUS1qe1JHUQS9vPJe9y3DwMpve1HX4JbY186tDyFopSQbzej"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ns1AuDBzQPgyDn3UQYXvghzPjQgYRAks2aXgvNYVgN2rAwiWmKsxFNV1kNrCcPUAZpNFPD39Htrp9Ainhi83bGd",
  "key1": "xRGqwSSzcGceLZQxNNoFUzzSvCKwq1Zn3rNfkeYQge8oyPgSEjoh3rbZPqfnP8AUHrW9r5sF8bHPXwGhQTD9NKL",
  "key2": "9e6JzgxKyUKR59kaEPrUNASm5hY6qDsrwXo2BNdAhrmCG5TEKHj8NMGctxbzLtGE13mKVAb9T8187Y57NJzmFzt",
  "key3": "5wxg6hHWo8DcUR45JRyf3xGTiQA83RgukcArzNHMPCJAjXdcizc8h1QLV2y237MRtcrLknomfVMVhmFgxHouHpcX",
  "key4": "5Uryp3gewo6DUE3iFW4gfzUWkEVjiBdJak3Aj8Esho3f7mTnQKPdaWfQwx1oCAckYEbYj6GpCiubDeHAnzaVUfZB",
  "key5": "b3Th9XqNZ4iPUPho5tPJe2ZQUux79u4K1471reNFq45VznEnhnWAXNwtpEZ86AFV5vuMC6oWrnDigJRTPVyj2WX",
  "key6": "4tYaV4w3GMHiuLravwzsopzoQCWfzKHB2y5y5XheZiDFk73db3DnsRd6NMWUaLyKvqtWnqDqQ9JJYfjhh6iJzJ5c",
  "key7": "22aJrZozGPW8KQ2yMUZ1xH8PLwmeAeVCCjbR5r4w6o44a15Ka65rZCtc8XsagBVuMtfRU1Btfs2urUNbgGiYBACK",
  "key8": "4fNqz23D2Hah4z3KgJPuprd11iDbkiVKsqUNuq1ZohN8P4bMhPhWiqyDXGBYn8cUfGWN5hLHg7jVtdwnDWhduRZy",
  "key9": "VwwpEyhpgRbvJfVRvKn3DD1pAok5vwEruMYpzpQNrQdFVJP3G8muozRyz8rkjV7TN1n9FVzR5vkcDWSRhrQ3RDf",
  "key10": "2K5ZdkwDBUwMVP2jKRoTugwyok9W9yVhEtvNyVCSBay84emR3oc48yQeiUVxXgTt4F6R8mzNMAjQYp3mGPJtgx7P",
  "key11": "5hvsvkxJoC7MvxmNK2VwhwvyLcLNiPy5JMjHo3L4wfvJEztvj6TxaefoCBnKVxfM93MEkysztUYvuTETp7egbnDq",
  "key12": "45FtD9fC4qrcJT9T4pWGDH2Fq7hFSeYnyTtUwdTSpABH362tv6UGgomDAZgCmkGFxSk47cVYopS9bniXTT4BDFx3",
  "key13": "5GWrW2kMmsoMATrYGKfHkfBhJK5dNRgJn64c2k7asQTFpw6QPyWzrpragKmL8YK1sMJogxDdgjrd1asQh9EtwE2y",
  "key14": "49JWUiZ9BYCyhGB24WJwACCNLSsQA5J2V8LQCDjurvHdPrrvBa7A456M3kG3ATBdX3JR4nrGEovqjV9TbDNH75iR",
  "key15": "2tVyedn1FEykqtAr5iF1RNnTKhHKD5EBbJJb3mqh3V1iWh31G4ZRumYRyM6z626UHNgp4cPJMTB4SMDSUNnTV73F",
  "key16": "5m94t6gTxJSCLsx8GZBGdePkXEs4dJY9cxcz8RWYzDcDGguFBia66NCMGX6DUHY5YcS1fR2G6gmmzFX76uEPDeH3",
  "key17": "miFT4rfq5Mo9rv1PMkgYbxktdV7mm1vxhsi6qw8dEqfKEFrCMoivL8FzVK1PMkhgsjazon486Px7f1RMx2RJJvA",
  "key18": "3AkgJMtRhffKoUZmwPvn8v9DFtvUxe367tui7icv11trEApWvh4yNanpbCyPCtNcFDH7VCbqspbUxxwPV5iey95Q",
  "key19": "3wk2DabcJtT23UuY4tjyZBTj8h32DeWPNH4Lr59i7UNXPwrvjs7YSz8CqiMQRcqwWduBcyBrDSU8pYzXc2cooZrF",
  "key20": "Ro95RwvqJZqT96Taxgw79jadfDmaKQFuSmiBfffWB5Xj6MgicuaTaoK7ZpdMw8eoRqt5SiRySRo2wyhGLy8ivQL",
  "key21": "J8C5o13ezqtak262x8poXvfNyWt1BD379VwbBRmr2e4WuB9Jgrh7dSijMV76GbN2kPmz8t2P37RM28tr9sHD4JB",
  "key22": "3btERGN4JoyEkJjY19ZBqYQ9AWtCstqRHciqT47euZPLnsxUFra7YwdJLH9nGNTpC1B4ccLJgqcrFtWkkXEHVHrj",
  "key23": "3H5xM8yNcWbLAhvpKMtZHdxhQKdNoXGSUmoGr2DVX6xgLkfFXduSf6XBbwsngG8PSQJPNLUweDy5A2g268gtV2PJ",
  "key24": "ssDz8oWF487RBzDoFPMZyMvvPYnpoTJgh2tmbNfFseuKX4sZX5SSkLgwkaZZYaHYjhmhbjV1ZKiTctFyo3B2r6v",
  "key25": "5Es5Ja8DUWxXEuZhdPuYcrPfT7hyZhrREqiBrVNxyRtRYYxYmoNecZvRqRovNwFCY9YcnaU6herh3jD9k7yxhYot",
  "key26": "2Cwr9n47vVmSD47bQPSFn33g21vV33rXKFuwKSD7xRo4B5qaCJp5kM1eFgF8CFTX79N1c1RettN3XM6qNUK6hdS9",
  "key27": "4rozYc6pYFDC6y7B2rDhxKzJwZvijmXC6xgaJZvLLoM9ad18ZmAvm86XnFD4fSXW6FrDtoY4V1Ne957S13yyYG7P",
  "key28": "3ZLWQRs6XkjCqffFkLkfknwrAVNH2vDa7WQjqdp7AerxwL1N8KUQhZgHqG3dXDFj6LLcXoUq13KZbZTyCmK2S8Hf"
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
