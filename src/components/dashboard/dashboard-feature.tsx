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
    "5PHiqTsEcBfXxFo6GdrtwRbGjxgGBgBAM2rJtb49VPpwT9RdZbm5fT8XkRBTWcGCEmsgjdCeMiqTeudmhg9iPkZb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mYqihQHEF7ENSuA8txMqAZgoteRdiNQ8zJMkcnZyEuTkC9yL7aBYHBVsBZWt34D8gibASjANwcyMetH3E3Ws36Q",
  "key1": "4DjEfuj4AsUNc4vez5runN1kaX6GNNY4kdiQGQR5FzviJst9SHFZWsMwSc5uJSa3SykzwvHyNJvZ4VdJyX2DsDqJ",
  "key2": "YPAxqoNVQHCcPHasKzVU66zf9mjEfCPUhoJcxWWygUFHStrSedPhk5PfVGacdcRSTF9auWYf4ZSakArp2NsEniQ",
  "key3": "2szEP5No7rixG5k5c7eje3C4JV956efcGZtGTegmPCwXVE9voUAH3p53Q1avPbvKh64SBEqMZFXSiLn8vqVeJqf",
  "key4": "5HLox2oWPpCsA7HtMueJC3gC4gDwefJ6kYLGN9y6LH8yBA1gmqrpzAmNxTDRfHnBdYzdLLFJGJZ679AGFMoK6ZHi",
  "key5": "BTfFJPzX9jNxUe5nWViYNDxXgfMRX4hMPAVTaBP2VnSqGCoQ3HVAisfXhGbaUt4af1Px8dSsePSo7gFbZbPYCTe",
  "key6": "5DDijjKQnKxK3FvfuxzWcCrji727gxG3MBTp9UG7meLWQy1T1i8ai14K6i8k6GWtjGXcs7MaoARj2zXY2BS4Jon2",
  "key7": "3pZAQiYwhpeEvu8iZxDinKEXjTHBbUsTW3TKsSdZrT1ho88wbJfN9nEX7C3J8eSTzCLMtuxr6sRVjVEth1Jr2JZ3",
  "key8": "ExGM9Dan4327fDG4SDr7JTh9Mf8MVxgQSFN5M81C56XgB1Q4NECLCaTKhpH8BgyeCeHmcVLqQVJaRNeDBoWJN8N",
  "key9": "4ivdfS9bzx5R6GpjaibZWeYoskZnYZwjUwHkLKkAZoBestPgQtdRMfp9ZD4hdqxAwYwBDUwJhfgEMbqgSUGSL3oB",
  "key10": "5oQqKAYtfGpMHXnjyCab9rhKepvZM6f17Ubw4ChJ9iuaHSTWV15odumUfELDKiqdwv1X6azAbNsDypTtr2S1rEii",
  "key11": "2is11PFJH5xDWtpYffYBKZnraPxfRFgfVTtf2F2FxDBF4SuLtApFzG1BmNfrroVSbX5wKTaWP6CN7rahGpBcMyiW",
  "key12": "3hdSHJTDvvYub3Y1ZCD9hVY1rmwPgFMgmp6zg9Wi9V2qaFVJBmmP3YtyzsZNs4N7jwubXBhqgqWGKjJMWtnpL2Kv",
  "key13": "2gv8Bbau9aTFQ4TgtG27BpPUAbuF2J5orPmfbfW52TcFvvdamVFwGrHr3Sx4g4hByWHBqVFvVPLzG7Axwno3SGqX",
  "key14": "65kokrfFNMmbJcvCUK4Rois8kUrH9zPXeHXnLXRmkBEEYLwFThWST1u78y3NpUCs8ZAMDqajYd13kFZgYwAfJKd5",
  "key15": "45B56F1KQtVjCRfAAnknhwsotXY725CAU2Csw3sxkj2RbaSMYdfm3X7zrvyHf4mGha5s6LuXF6KMbjPqauEoVgH1",
  "key16": "2byzYACbqFEsQonifosSkfa2BdpBShTkoTT9zvGQPGnZh8rnuLp6BMECA6nT4a97XWrcV5fbw5ikDGrdqfsnygCh",
  "key17": "2sPhDGo51B7aVqkZYnjK7z6QpPPhQi9iwGdAWK46e7YofFJ4xzYNj84MCbbTnDe1gc9xr4YZv7GA7VZpdBwZmw8f",
  "key18": "wjWULvVneVus55rNM8uVtk8zDCGzeSFRLSRuCDkCoFtfNSCUekjM6t8X2vFfz9hueYZ12FZ7Mj6fmjQgzfoq4N5",
  "key19": "2raBgZ7UeuN4EntipJmxWZzFmCxvjUs269noA393F84VsHNPD2aQchuAqW8kQVVkK2qaAVM3SjABSTo9zPabirUW",
  "key20": "ZuLHAp9KxVHWQYmSWVFxJFbv4K92vbySCSzeDEGxGMzktXRy6rqHkaS4fJmdZHA8n6Dk4d1qc5rU7cFAjpCgYax",
  "key21": "Pk6EYsTHGnrgrm2asFLvmJgzZwJ2uTvhyUm9DeCXUZq3KvRTEHKsemp2xfrFuaXHoUgadAxhJUHXYG6jStAVPjQ",
  "key22": "3kSsfHDZFpB8rFhPxU4BkJZcBkTKEwHyzrUTUS2SWdvWGVKqqG9oneppyfuxeLYDh7QfbE9g16fMqrAWuqkMuMXU",
  "key23": "Ng3xDuo88Jvo5S95ea9WvYepueuG8ciBr1yT96PLkMyK4gRbB645GD8naaqywYLPt3AmW9shzr8WDUocKWbDPPm",
  "key24": "5ghXJgBNqEACKs58VsBVfGVm8XZF4WBDZphUYeuJVcGhGFWL8rh7eQAnSVjb1MzUZxDVNfA9fWuFKzptKTisghGS",
  "key25": "qHD7uTAg4UGGV4baizRiQ85b7uQ3Qd2VLV51scwDNC8XPCLYNzR8rqqhwjUmUhfzjzeBwvn5KEXcBWGKieKh8W9",
  "key26": "5UjAkX8StmuvEBf61dRwjKpnHz3CLbLW1bMsoWngJBhqUPoHMmqW9gF9HZXi2dNv5yLGQB6jRdYkZZJqyHXFhCff",
  "key27": "2ZFy7EYvQpfBDFHHCYgB14nsqT4LnRAUZzoPMouCNeutWLLj51uHubzdbTW7ExWpBoFQ8vezMiyLY3UtAf8sxjBd",
  "key28": "3HnEDJSSmXBgrmQJ2fxaDSZx4P4g8Jcfgjycq9uSMyk8T4gTDkcvLpTk8bRJ2afVbKJLv9wRqgg1gdx2BR7GerVP",
  "key29": "43knoggKBftEiF5gThPyizd3gXTMbt4cXb4rmhkm1bMUPSTn7DZVC94xEDs21A6JZne4894cw7jNHXGBHmDtY9fs",
  "key30": "4cZecrZ1pFmB4dDfiUonVJjaecj7j4E4DyDe2VvN6z1ch7mYeciHqoMX4xBv53YHdwcZWfnvB11sZbo3estLNRzs"
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
