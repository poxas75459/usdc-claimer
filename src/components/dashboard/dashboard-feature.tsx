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
    "H9Bb52MxcTayFMpWSFbYHF9tCeDZoxsAKNup727w2ETF9ZjR98PvVAxF31ZoBPRj7y9rqQbDSNDS7ySh5etjbUA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QSEESDbjU5Fb5BYiw7VrxBK43v4LrM4PqrWFhFxjbNtxdozBs1iieUGVwoWHYNZFt9hCGc1uwTxhmUSt9atKThX",
  "key1": "4qaXJviwN6TsGq1P6u8bAp18AXqTcqxfo1k4HXtkWBJD1v1jzfcBcrEXvNBkwaQe1N6uAvH4myiEvsuHDBjCVF7X",
  "key2": "3F7bsMfqbuHDk7GWEBi7JkbnrzWs6HvBqh9WnooRXee5QBuTtN9MsQJiJqXWVjs1hHDxj2P3Hf1kacsM4PE2otCM",
  "key3": "3NfCWkrTZ5n8qYtpjFftZijC6XCfGNT6uKmbTPY1G4NJjdKmgLBydJgNYCcsHeNB3tQZD5G5fqimZgDHsm3NuzPB",
  "key4": "17R4Zrdh32JYqsZWR57nE6FzzN5h2yjp6ggsi9S3JuQ413X5JiEuXn2Gv2KWEViaUcvZAuMdGBj7SABTmjLJRJa",
  "key5": "2zYrrLXWuQ1SLmgKLMwYbfGZkmaHHA3PWHPnXV2LBhg5Hv8SgNgvkLYGEawUer9KXEKWbKv1SA6T36MsBzZqXEdb",
  "key6": "2r9KCL7YBEKJ2UVuBrCGNkYChihp3Zb9LTtn6a82CDcZjQtTbvkaZYbRZuzD8REmU81FaSEDxyE2cQJi3FEkzVPb",
  "key7": "7GEBAeS9t7wCTUij6vFRTBoUVsxpA62n7iKZyDU8D2ACUh3cbwwcvV4iuxpHgnZxcVbqeEuXw6rDH61XGW5Rfzk",
  "key8": "46t7hPGQZqxPzcRh4J8TzJszFpPvWSyGntm3ZJ6fUZmVVk4MT3CP1DkM6wcYPWaMNqVMXmV9my1DjvveLJgNWvew",
  "key9": "291JamPvFoNcjEshNeSjyKnKDx2bwNnLTrRdq4tCB4Lw4jMMYwWNY6mKTRda8QXaFQtCPXUr3EyopMMjP5J6XT1h",
  "key10": "58yQKj4WisDft8axxBt8GaKrhh8jyTsFMr3jUQRqgFtJ4rsUCAhzgkFUYVAbkxxZpbqUbEvV7BYwQk7fBQzD1mNJ",
  "key11": "48rLS4qCVjEFqFvtHyAg3jE9ZTdEySF4BjNqZXnnmoLCscZQmfmeeVxZb2iSbnQDwRVrkPDLsj29cgWopeSh73m9",
  "key12": "5GWnyPxFhmxP9T6SFrDTNyuKacfVakpysoQvzMhtrxKxVaN3Gj18BRzfiEyz8kSY2idJomNa55GUYsMjWB9wuBnD",
  "key13": "az4wtktDNHWnorNHXcUw6ajqHA2FbzbXouJrrYgcwP31aZpbtFdDeUn1eW1oRDEaizNN6gYjfAtwXbR5gqBH7ha",
  "key14": "RVV7VVqxBbcBRcTyGanSUQAQGoCrKYJNxjQLuvPcBZMnsMzynLoFv9EGy4qSpVXXumDEFVrbkpx39y6ZYdjtDGr",
  "key15": "2HsnxV3pEBnFS4rUyixVDrudJYasxzsG1AXrDgYF1Z48UnR4qSew49WTSYszucX5CC7fC8mB3bUgRyVt8y71fCXy",
  "key16": "WUhbofWTm2YbrfKhjeUZjAdFm4rrpPHM9nqrUUMKpgVUEKWziKytTrTRz7JjigANRdr1tCk7hvCENaNVMDoit5L",
  "key17": "44os49ggunz32keXxbWTLfcXMA7HXYDgyu1xr3VvLzHTzsqZGXt8QhWkFhFB6MkUzGMjyvV7VnHF6dJADejvvZKe",
  "key18": "497xcrHU5iynjAHBqd4sZZosUkhJsWtwFNgPwUhqbTtYNkHJKE5TpR1qWARMefVBpRxBxHoezEm4dggA9XDwwC8w",
  "key19": "2bwgHkyKJaehasuyMBQmhBz9YujCpcEHLKWtu8U3kPxRZb5djcATrpqRYq3kT9ucnymPzJPmZwVXd5tHqGJ2uGK8",
  "key20": "4cMJvU1uG1r9vuc2VudXm1DzCDwzFnL211LGMRcn3Dss2vDjXvsRfNYytFhs6fhDzrXYaSrRpnDPCmSvNoKTyU81",
  "key21": "2iy9UtFcEtDNZUdtkhEUpnqnyJXw9vKSyHNpoNchVzzVLE3VSHuGCJPtVf53uLDWRzP3AsStn5ZvcsKWS13goXSL",
  "key22": "5FjKs3TKRDVhQHeG6F1xa5rYUiwYKMF3u1nLLUnQEEMBYG5x8xKGL4CViUqcd4DnbSQPnY1aErZk5xAV1mJ1Qk6E",
  "key23": "5HEQLLtiNmjHZwgZyubA8EwrVuWxGsix2G7CBytkhTU3a4XH7vhfwWeHb7ruG3Czv1vP2P8xd1vkDQqryUXtF5Yc",
  "key24": "3GhpWN9Hk4x4Ho4F2nrufw9tbSvqmFp5PR3e8fAaL1X3ZJZ1ab3WvTeYTFPSYiB6HQtXvaerWAna3wJ3x3hk6n5t"
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
