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
    "3PYCxz3yEjvUZyVMCBGjx4Uf2urQu1Bb5wLPcURDGjRDtpD1Kypn81FoLnLfp98RfD1d3Dyt21AUFAHCgjKY4i9j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hpNzJyDDB9c8vSywHx5WVjczFX3zSH51dsxJD7BMPi8JUL2u6AQGXSEaY4CF2uWsqUVS5D6MCh8e8aYiA4EZpsx",
  "key1": "nGKrQBbPrVwboxUo5ofuky8eGqD9LECoV1pH2nnEUMLuBzCobiANczbVeUyA8YwKDuyQK6fwpBysg34Yc2i32Af",
  "key2": "5gYEe6HCr3exQzndkpu8L5tP59vS1qTFMg3yn1cNw6XezkLJyGmzvQKuzqN7yFkmuTZn9u711vW9y1546jEiaqfK",
  "key3": "2f3eAUSwB8ed5LTwpU54zo4t7XtK5fehKqRVY4ndAgCaCGgmKBiUBvsFgbkVPqQnrHiFj22Kk5CAJqCpSrQwVRSs",
  "key4": "5gbVkBUmE9xj66n23yb52nMXFq254GBGWZrNHoG2YZ8HcWj9AFYJjCyuEUrDYhVd6D7if88wNy46D5LGUNpXuJYa",
  "key5": "DTxphgaPsiUXu7jf8xNZcCuYwTmU5YNPmheqVHMqfbCobgE5HhG2hMSKRv9HVaEriRfRyFmb4bmRHVASr3Jztxh",
  "key6": "2YfMTNc1AZfMNKtG6inakSbpVbRfgrKQtLNh5yjHcAuMAjUxKHQ3yta87egvt1fLBUrQ8LsqrcvU3uoRXJViFJYC",
  "key7": "4jAJdPqyuhnRbVtYD5NmB22Lo1BGpcBH2ftPnTdZJtbGeRmS7eSQzrcZxcrpiXRnTSjRsxVH7jvJ7iD2e3xzPKY5",
  "key8": "3BRU2HZpHa4CSYVCEdT27Y6txwN7U7iXxCRP1KvoZXLEe8jBGwCwMN4DSzdgZKWWVzuKLAWMBn63tDKDX24hDTxB",
  "key9": "5HbB7LNi8X8oxGajGxyu4ipF3FnLr1PjptDTgGVffnzHu5jNi6BNDNYmVtSQGZgjV15BFr89H1wARkDzE2N3FAqp",
  "key10": "67K36EytBiSoyrfyLpkyhdr4tc4HxXp2G8EftkoYdmqBAinXHkZjCNxYvF6x8NVgVhg5dXLMukDZKY8FFyvGhwF5",
  "key11": "2bzdtS3TZe8eiHtuY2TDS1a6cANbdm8rUA89n34k17GsjNHwgPxfkC762gRVyNeDCv9obFZbJr5ToVUWV1xYmiXF",
  "key12": "9VxJHR5g8M1eqU1CoCfsmEwq9Ycd8kJSE5sP4uSwK9J8Zt3FQTSQ7bpPowvkwzJCx3HeNNv6SVueceuvb7sVJPt",
  "key13": "42mMEcU6RnvSfbNrYFw6sxv6QeV59Y3NScsWuoHVT91XG1QEv2oiM5AWVrb2YUEvJDpyeV6yvA4hQEt6X6WCNdgw",
  "key14": "5C5oZtRezJ4g5XQxt5nQYzotrEc91dg4XQtE48gGbypwioiQDCyJ9Rpo7B4zYV8tPd87jknUnXs1aKDtTCc3nu74",
  "key15": "4doddjM61NcMiZTxeMhDqLs1VToyciLZ128sVsPPkt9nvHLguZ4gQ2dabB9SPoVhH2H4r729K9rukDzRiVirswix",
  "key16": "pMFKyxqVWNkbTR2KYgULxEepd84HGvtwszf1jRUkPi1Qwni2Nyd3toLG5EFdEV9gkzEbUYmocNAehH43QdPcsHr",
  "key17": "4vrL9Wh2qAFd3eqbDRoW168BeAWg5P97D25am5fNNguQdVSH8B3UAeq6BkshSB1dizLniUTPoA3r7qFyCbmH1zxt",
  "key18": "24T3HUn5JRNW4AJWFfhwQxD8fLFZy82bs7Xz4hjGPPxuD65tuUEfWd4xVW2oZ9t29JrmXztoJEevb4Hof53Vbcse",
  "key19": "1XGn7f14Fhw4fGma88pEz6x7JNYnhBrB9f9xt3zGC76KiyugHghjL8eXL8VVysxbWubkhEZvv3R7FLGGvjdKeJM",
  "key20": "AUdZDvZhxuFkgCoqZw9EQKymmPNkGtKezmQeAr9cR7Yhue4e9YQ2XzDJfZpxGCVVQ2nXusxNCYa9NJvQpfCKRoN",
  "key21": "2byxkTpDg9tgNipCqBQChrLBtZM8Gf4J1mHugocEczcy6ZvAVWp8Umy446qTyWEp68BR4DruiZgCuD3JKB9RKvu4",
  "key22": "46D686PouTRB7psS872TA57NjMAsCeLhkUX5R9pE3bV3r6nYTcLxcUXa58PC8hv6Y5TgsnoMDS6VvEwswwCiDJn8",
  "key23": "2Gry2M7jJgbe3K6S28NRPK7q4529AhA3qaHdaBfjsoh93aBN2CCYPHGdd3WdXFdEg6i3C918FSvfLcPuthQKr7KY",
  "key24": "5Y8m4ceVS4Z5x7qJC1RHU1gQNbC74ZjYdJJuzEHPDRTJG14x89bpfSqrohfhmr6UsZnp5Sr8991baR6UWqDFUs9p",
  "key25": "5cAfBd6kMq785tZP7zkau7cerLvvjqTLsJaF8eJWdaJCghZDqBy5iQYEM8koE9BGMCJoRZLAbTpH696uXm1TW7So",
  "key26": "4Xcps1o2fMxvmuqgZ5Jo9xadX2rZHqnjen2j7DPD3fETJwEoLr8pgsy7KzFm1CURhvRpkYxjq3VLy9BxgKoTA2dp",
  "key27": "5sAwnU3gQGWBuYazqKgHX5rkFk2CcHUu6TJtdqDg6w7gSLo6RZRcqv22obgvmCrau5P3qGfsWeXe27P77X7FzUYB",
  "key28": "2JQZ6xBKuRyMhomWZ7MgAbqMeshLwytCmKHZWRFcqbPfHHFmAgTAkA9Z7q9h8PnPSVki7a3xw3aPUy4Q72b1FeUL",
  "key29": "2yPfVvAkQ23fsKEkcBpWF5GGW1qJ5bTSgNr5wYYeAVUYM6mLr7vwDHDsXkSTkw5dR17CAuTMRicfN5smZaVCWVMJ"
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
