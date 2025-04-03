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
    "5xHuuH1tSwxW9aQgH6Pce2ssHnZzazUYVRTbBM36D58zMSNsg9g6BrbD6vawjkRAJmebPEV37MH6WNo1QUk2wYGo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41mfNMzyMNAw1koALXW9YLNrf9hdu1j1GDWy6jfWKYfKUQAC4tHv4LTi4Fw3XWBRZ85VEeqhsXU1sjWqJwraMvre",
  "key1": "idBGHmhRyAMxNacmdtzf5NdUuDp5Nec7SwZND8iQTZLJF9PdBSqyJGdLZoELs53whA9eEhsbqyN1mBK8zfAHJJT",
  "key2": "2Tmv3v3EPvCJqGvpa6HseN3Wedp4hZApYur6hdpn6wgLcg1e2iwD4B36PQ14NvoucawvkZrwZ4HN5YfgeFai79WW",
  "key3": "9GD7XnfX89zMs47KY3i44rpWJfAvYFqfRd4o5qGuQe3Apn5mt46TNpze5QQVarNKnGXe7ojuY7vLUHt3Kk2is4m",
  "key4": "VuGYisD9fojEfCrB2CixZzFVmkfYQkNZNEq9Fpfn14g3L3QHne2vg4dZFgxxyQU7zWmNC31vL1wWnM8UWnwDJQV",
  "key5": "3wBopdopMEXuQU2H95H1n6qjk7N2tfaSkuwTeBtuUqfsp92v99V5WSnoc9N71JwZ6iFmnQps4WjVBuD4wkbg1w85",
  "key6": "5uSswtuW2QyKXixw7bFkDZ6xPLVfTqvw3xQDSs1w5tg5qfzYauLqkRupfXAN5J5ecRVe19v9RmaLRTgVE5nYaMFL",
  "key7": "4HerSsNeKFQA1uaMxgE8EcdnpdLPegjbjfrUgdr7CwTut7ivFvaNcPnVrJsGpt9PgYMwa38kUNeqFhq8a24zhEX9",
  "key8": "3wW5489ZNScV2TU64cVVYCHou4R9hLNc7JRuGcfxDSLskh2PxX87eAUbiMx7Br1hC6up32p4ZLAkcPdkQ1oAb4ZE",
  "key9": "4zZajXAFtzPAMvKLXLnheeJSJFaCLmU2BVRqae5bbcKiRNsPEFskhD5FjtD74gzoPW29qikbBXdJmuXEBNYRZXP6",
  "key10": "3bWhs65tRTRazbepFSXXGJNCgz2LKhgDJs7dwq8hmGzP2w8BZNc28UUT6VoPDCpQZ8h5YPmk3f36hhEcKuw6hK8U",
  "key11": "35mVCLraLKfgjMxDj8soCx9b7ddVWyEKydQXbviNkrBAQsATPE7haiwzr29cX9wdKcFd9RBw2YPi71ezraMxz7Et",
  "key12": "4SWoMkZ79VKZV1NPgs5rKoNu887XeGirkE3nzj8yXej5TaEzj31jaKUpDu96q63cw81rynU9DFVw9uvBTbF97BUZ",
  "key13": "5YP5LFBA83QyD4Y4taPwdgDoHL9R4bMDcMNqhcr6joApnox1NxSxsu9X2bmnvAcVLwziXSW2cXb5wt5f8sCvNEMp",
  "key14": "47Kk6Mhvi2w5VciU8Drmaiz8LSNKShqL17KeQuxtmNxr5mv31YZwdFizadxzXubQjhSvX4LYECgPXYHGjyrB9fJk",
  "key15": "5Qwao6LiMAszg8116xogn6ZBaY2drKKn1qj17nUmY83FUJCngVT3Ra76J1ABGJaumXmviqEdKGVZJL3E3nARTJeM",
  "key16": "5Jqpy6sjvFRpgpPSMmGz2Xin4XboRxBUTGUxRApGjTZS8tnySe6MJtkYJ6CbysRjVSyQdRgAMDu32RazxXXLFVZf",
  "key17": "7G5TdrJzvH5EFULuzWcS9nA4Cj1yn4BfYZFZvV7byEET6eZYucA5QDfmAbCZn9zESJJA7EKjs8vjS54vn7kNrWF",
  "key18": "42fmWK1BkD16BpNMw6h5kht4r51ScKxc9uSC23GgQhwACMBh6tTpBV7AmGQ5zKbgaLe77SLwdyrT61fmwhYsp7bm",
  "key19": "33RPJhBkjp6BueBKadZhks7w4WgmUWhwZLDp4xaADKFuAYt92AnGPVoEdgoroiPUtPnrHo5RG3GPiacHsSGpk1pi",
  "key20": "3mWgA9Gu8BbcbSmC8LU9h2suUvn2itVKzu7uCkQZo9f3ZgpirtTEqQot7KC4ZNzXBh254RjjTWrRaQPfAw9omUdc",
  "key21": "4LUYUb2nvirEYtm2Ezk8EEQt6YCKQKBnFp8BkYMuMAFU9WhjkoLRYgg3y1Jt8hjPXhTd2sszD4Ue8qJGhChtnPy8",
  "key22": "2dMM93GnV5fr1UcAWZFsCivFRacdXuUWVivWDymQ3uN7X7G7qtAZSD3zwdaq8noB6hcLB1fho9dVxjXD8XTGh629",
  "key23": "3hysw3HyCMBRQLve6wb97yeKeUiRcHXHr21i2z8Dq41EnUq71RxdcfAz4Tb6Y4amxSvLNuAfHsgbDgNYFyVqu3nM",
  "key24": "5EPXfJUFjgRKYoprCaeSGzk5Eyz3DeqRHszJRTWdFMLcUUTF3dE1QJoGQ6p1Vn8cDX6JCvUnZUt5keG7uHn4rVRU",
  "key25": "2odHSEVUNi6Lnff1PbzeDJSTi7fSaM9EajmMEhiTSgbkpr2eWUJ6nhg7bMW2vYrHHNE72vQSh9VRwHXCUefbvoWj"
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
