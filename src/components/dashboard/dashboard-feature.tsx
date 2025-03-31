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
    "RsC7Ni8SvNCHBSaanE87q2NgwBuj22cpTLbyYXzxmjFagpAgcA26v2nu5N6mbHhoEx91UuWz5icHcfTuVvizJ3Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WLZfR7kVRi2ditf5xCUvX8pNrLk6b2xgL8qtKK69KrXGiBnyenz8ijyZ43isBAKHMsvfJcuuXmqwvijXppGs6QW",
  "key1": "62EPiNT78Qhrcqbo2HAU325Q9vjtcXcJVcuWz7ZgVynBhGZtfBV4QZEYpdRo2dSJJSpUWnGZv8vT7PXGzqfjQsC5",
  "key2": "5hjhmaVrdwAChkZzvGgvVP9KKk6efnXKSCqh7ZMfA97SnCriXsY4ebJfCqsTvxzWnCDzphKaa3PYvmtGD5LvMoav",
  "key3": "5k6ufC28EWcm6g27HEoKWzF8AajxD2wfEtSEtL6YvByedRGck3NP913kVnzKpEasj3EEPo2AYgZYvyWBMFwUYShT",
  "key4": "29E8b7JY25fUR2BM3UvwKvrjDAcNYSXm772bVGoJQ7sfNUckREJDGqnwKQKURS4yXrFwer6SjJtKmSnNdw4QDK3j",
  "key5": "5vooicSMcKA9QPq5Vbdg5Q5nB1vwqeLTVENRrG9xPDzvvCqB8eMMfUeQEFvRuPoSEH1jWJTaCgbB4cqE5MYfvoYY",
  "key6": "5ht4M9QTwZccbawrfmxZcpSx1YpfHkHWtk8PbmEEKMRmGWfzJTLJ5d94z3pTEp7tnz59ZtxRpXKueyL5WzZwChnn",
  "key7": "5JrqZKeHGVUAaBZLaWA24Qei2PnYJJrpZxiwJfnMocF9yu6zs7JC6MuMEfYQPh29LMa91fv1pPVmmT8fFw1SxeCv",
  "key8": "4C4VvkREVDXRpCLx4YVMw9ES1ga1R6uLEzKGKaE8hYSSKHhBnu83ABXby1uFryetaqyxN3mXT2VpfUpmGiuf2B1i",
  "key9": "nd6EBZgSC8chinLG5LZHaJPquh16FrqCEgjN7eq9y5sLP6bhM8qremPvHHbompw2kdiu2wyV2LTf25cqkwL8J3u",
  "key10": "5QxTMWcWteATVdMf5QwpLkPUqm7YgaPJ3Q4rP5iVfqDY2c2wTg8zHwiGvgKqKCe69znMTNkqEAZgf5ui637XG5Jw",
  "key11": "28nfRsnEgNhkSEDPAouEzBmnELgPcM6Kja2riC5j6XBHmdLwcY2Wy2pvhf8AustZJ5dMP7geXoQckAY5Rekfu1ci",
  "key12": "QsFNz8bpWRKThW1iFGVCJ8WocsFPhknZwj1vDB6jV8wNTzMov2KNss1rSsgCZL9X1zJFqeNGrDfgrZot8NrVDxT",
  "key13": "7FKCEMY4d28NyWXu6kmFwirZhc34iBdg6haD28P6yKNKFYsFCkUTGkZY3Mp51BhYmdaW9DHc5A32jmpErimtqUQ",
  "key14": "4Zxa7yqJMZ9UNxmWFvDFBMbh9nxPHj9vVLPdKGdq1Ms666hJ7HNfqmSPpXY6NDSG6k5LHn7Yjykaq8JfbbjJouts",
  "key15": "5iPbV9AgwyNrKxWtpQbb4Eh8825dAqw1i4EtNjPen1e9bJxnM5G4khFSpsNKyUZkbpounCaxURRLnMbusgSGHTNQ",
  "key16": "5i5YNNdso1f3KrYgFUZAjaaWRH3uNzd5pT7rQK2C6B8Ernq7g6DTTKkgRiL6sJLKtjrbRXphfJohtawUpeohxyQm",
  "key17": "3RnJXz8m6QSqyX2UhLAEVgbD2HnBpWBduZLWxTm3dZjLsidAW255aN6C56YK9xdZZZy23n7zVRHszvNmydpKTkgw",
  "key18": "249nnBUyP51GFvkhXdNobfdJLQLRi43h4SxoPg2GUc1Vczc5M1NrjCL7mJPCyn19BptFRXp4J829TXdZtPx1G4QG",
  "key19": "5JTw6j47HXUiD7nUSrkrPxcfNThMT9sjkCG8HSVuZ8wTLQNSVMK2XP74WHfoPEk3fzcDf5aLDYK6VWon5phgzKQq",
  "key20": "2ZdeG1Ru2DU3owFYpSi5ssXYHW3uqnGD4F317bi1w4vfoHdjwWk41Vq4PvDZ4Ep1eohUEy3a395Exg5vH7hcvEto",
  "key21": "2SGK6eEjEZpDtQY1C62tC6y3MJnxWFt2AypnNmhgXREEk6euU8ray9AjGqc1byuRvFrb3HHphs3jFammDizXvmiq",
  "key22": "5i1ZCLxi1i5z23VxHgiLE2cQE2T5pf7vCUoHEMg732w8T3BUyzZ6QpeaoTkxsQfFXYoT526gMxfWHuYGuNM4h4aZ",
  "key23": "4hNBpu1Q4E624NYkpoSNdGfYmwJpkAMWbRXNFDy1ihzUPgMgN5vW6PuxiiQ3j8uFEusfEsvAtsSMCBtyeKHYc4CX",
  "key24": "4mVJ2AMrK41Qaa9FpDMSwrCy2MYWnvMQbbeRZntq97GdpHUECeR5CrZU2P3kyKxgVXT4NzuN5aZ7AbzoH4qvoJQ6",
  "key25": "5hg5g5xfFkgPw4JZV9JG862HnSwutYVtesR7sV37txp92GbntxJV92mWBew55pVSYoRVBuM5mQsZ6DZQK27JSxiz"
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
