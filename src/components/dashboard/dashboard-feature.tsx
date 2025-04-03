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
    "5dyVm7Qb9dr5K6jxCqhNPYqXGp93v4Qehvuu6SnwxPoQJj5f43YUdskfUcYjz8QKccMpQzb2AATQsFeHndG7NCAg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1r7UfBp7JzBUeLzUYnRAjr4zJJfZ43AakG74EHq7nR7QwRRScpAVFPXVJv3cP3xUbP4cc8TWmGtd7ipv8AvzKkM",
  "key1": "3QofS1mBSfuSXCFSKk3VYVH5inwfHqefXfsGWPdN7TaRp6FnbMFTuGA9fUe4ZcXTV46YJrSBpiBngZEqVRY8WWhD",
  "key2": "3WgZjZ5zRVUrMxu3TkFPX4RkopBgNmPaQKmy57NKQR68t72UtywNGAf9sQwf5eAyhF118u1eMMow6RFvH8SJqAvU",
  "key3": "72XUrCK6PxsXjWkuwAhzitT2g7SJKux6Pfdrvf1oMEe8L3WfSEw2VHhvRxureWpXLbDmjRdczpQfuvYhBcDZDv2",
  "key4": "4EfLH5G1qt4vfazuuFSYXe7KhRw9ueHtPX2gTn7WwCuHDyTavHwkmUtFBuNhLFXhU2WqQGg5hPePcARDfmQ77FWt",
  "key5": "5rXPZiX1bf2o5QryGNWhDARD5HdxRrzmAAtfUBESfhdeB6C7ZaScGUQJYMr7MQuwmFT2HDyabuTgyq4sUk1xuNre",
  "key6": "2ctacN6X8Pzsg69wdFXSpi4zyccjeYQTJ3MFcgURpmcxUJ89AxjCmu4gjNtVuRDeMXDXP4amQ3EGFkDQEsufVege",
  "key7": "43rjBr3TNvG6XVUjVApwsdrJhTjohcoVMPCiSH9PD59pCK8bGc3xeSQYP7TWkUs7Pq1DkqanvmqAW4Uph51u78nL",
  "key8": "2ngEbtWy4anTsThHc7Uoa5UxbDYkAK2g6ACTuYb17vFgudooHXzbh4Mv2WontxNmyRjMu9ARie9ni8Afr2eJ3VeA",
  "key9": "2GjJynySN5P3UsgZ6J9UWiDctGTU4dqW7aFQMUp5umuLReAkPbv8VTnr5FjN9uiakkQ1jiuMmuixTejcj45pFp1V",
  "key10": "nZvcYR3Ez1Jh4S2soxY3nswnaMEoNZU6PNvNwjB2phSndiorkzfsYootpNr7CcJ8YVTJxNp3GYAKPhteDztpiA1",
  "key11": "2osr3FUiWsWAyDcxTmJWJxnqzVps5ANYg73ps1xFUTYFgr71qJzTWwBDfJUmBiLvGpEFnWLRT6S2z5DNj9n2NewQ",
  "key12": "2nFuRJVDZAhwuN9Zb8z8JubdLESSJ4CFLn3ZpFn4sc3c2FiBaSspkLyjRec5TdkZ1tHaV8J4wk3J2nRbAFStokMM",
  "key13": "5s44tAXxberwpHmniMehGSJiDU9PbZQhSGFs4Qvze56gUHPNCTiuMz58ptmcC9VvAddZnBiyUEsdNLyz8TuthkYX",
  "key14": "APJZPJJTGmYNrzTNFXanRP3EY3nHfqRSZKwaQMo6A7torv3Q7fybLGLKYWAb35eJv5qHvGSZ2wcsdoANknMB2pK",
  "key15": "5gp3ESafZg3tDdK3KbKH3iswUtsN6Y24bduGXry4a1dVtuuezpa7RAuEARFf4tL99VBH7GFJw1FqmFhrYMDmXLKD",
  "key16": "tRazK8d7CvPRb5PCsQmNCALj4F9Qg6ZPmXDXU6WDv1BqEvNcFKayXyhrUtYchgzniT6KGLThrcnb7YAXi1nhvYU",
  "key17": "5r7ePTAQGpGZMzEtNJDVNvNcDae1pUiEzCXfUFZ9eWgBpffJKHipHfp2WgM789qdUuxqadi91rM3V3w7n2hYwbtP",
  "key18": "26Yp5usupCKb4C6Dv1TLBuVeNK7jLUFxg8KxgmDasD81zbUn7L1dVxCLY2z5RUTBktDrUZmUbfHsFSXTPvHtkQ92",
  "key19": "3dyMjsqrDmBx5ha5KwJta1mv8AQpaUcfv9X6vmjo7pDG3xbtQUVQYnEVVoPtFDoYNtTSfGEnY9CxnuyN6Jv46JRc",
  "key20": "4KdUFrxj1ckF1QoKteBCHQj5dis7MfRNaLB134aiVWXy9CQ8GdXrPBDqB55fkJ7TPE8xSTPMUXZPjxXzXSDTSvd8",
  "key21": "M8acm5bBasDvnLBWjU9zky5BdHDFpcYeaocFJSVr1DRfZF3FTZiaWVkRVbdKMyYcVQZrBwTm3MMEVHnz4ZFJW5a",
  "key22": "2bTaz9qhZP4Jz5ECa6MwuZNX4eGJnouB8WyEf1KvgLdCETzKZCEYkVwokLyyQoMbWLQSMrpLqiPDFKK8GnCRKpWV",
  "key23": "4uV2NLiEDQDDmm6UhiKH2GZWTW7pSUgMEdWymvsRrVQ9a3gnmsnLAnjQkoQ4rQjVa27CyvmrTwmKK6Da2E8a6fWG",
  "key24": "2WpD3fnPkLgwELCQ9fvFUd9L5cCh8yasJ2Y1hRUAGXYPbhwkvUqZ8RJAcF7xFUWgXqpBRuxufYvkrepXXFv9touw",
  "key25": "3eZ46zEN5aPaCrv1AvwRXnQ6PDA9o2FVL869TpJvER3NnNmWXzJ2c9LGGspAeomWxmFZUFPACCDC9TqRg97HKFBs",
  "key26": "4rHNcqUKAFKisi9dEAMVoasCbxzdBDKka82Pr5Trn2wRTPMHESrshUCBhTYMU7UoZDpZzabPVWwP4mGrXvBbDPc9",
  "key27": "4uJuWoqWsCQTSap3kbvMbFfWcKpKdebvGBjj4wSnDT1nrTdoinf6VHLhcuGL4xRjwXkuzXpzh5kvBQvuymvDWexn"
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
