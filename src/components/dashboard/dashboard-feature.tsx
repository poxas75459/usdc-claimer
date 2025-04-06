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
    "3QiToygMKHwKxy1TN4LMcawjtukV6Wx6ETyYeY8NTbCBuAdRNDPisWcSCiWkL8QvLGqKGmG2vCEEnSzocTEC6mTc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kg3JWkpY7mtwbeEcup5WqyyWe8u1bw8qmBxD6ps6Y9MxNHY61MdZeRRK7jmf6nxznvcFt7rYwgNqKeNPYvhZRc5",
  "key1": "3q13P5gJ7xNsRFkWWNG1uvrJVb1vusWh5dCJ8m7v16rFCMb9arg6GwGoBtFET7TiQrrgg6Xajcu52YUq4AnZGLgc",
  "key2": "3pciatk75ruMQdCfzCeRVM6RKoNnXLnwT1TbnSe2cPyRPWbax3MkTA1r2VSvYAPkYHdt9YR8y1sM1vnnWmQU3HRB",
  "key3": "5xx9RfF9vmzPNe9e13swVuTt6hRuBRXYz63pC3th1vLT2qvDHDh6w61yJWjU1wSyrMNeouc6tZAjjZfrYGbe54K1",
  "key4": "4WHnu6Mind2oN8ozweQ7RemoLtggtfkmRUVqVg5HCXM68jv5pJY7ciCYHiowqsisq1ewVB7X18vzy7JBxwRrit1i",
  "key5": "5r2vSPHpQvS6xjPMmZn6EzQ6WdupUgRrxGRfvhi2oBxLGKyV3q3RE8Avp9KwaYGRn1DcNjfGCZ639dhXuTMRfdYV",
  "key6": "4XZ1eKxoNUz4vrQMijVp8akV38rX4VbrQbVYrHnX3WNRVDLJgLW8fPfwz11XWFD7FtzWAfddu7QZr3yno3My2fsX",
  "key7": "5RrLjFYjCsfNJZ8Na7TBz2xbGvZvCM2rRHjGqFnpGRVUZV8Y7APJrAk1Pod5ERzCSwrSekQhpcXxWENXBFxGofev",
  "key8": "eMidXJ785rXTXCMTMDsADkUZ9PdLCQf2xYuYXfwft5nBMLzbrA7zVYZ38919gxJ3PgsnNPA7W4tXTfMDbnXmUem",
  "key9": "393pscgJVsDD4P8FjhvGp7L4vfUG8abXmkaPMEK2TB7bWM513m5KfndRLE6bcAvxEkJes1hzYshWZ6GMjhGdQuiA",
  "key10": "yvDMNtTKWTxGNLDzetyhFHq92rY6s4sytcvVKsmtH9DsYC77nzWf2u4yp96sefvuEQq9smqeuonMRCeRr3m4wi3",
  "key11": "5CuCV3KTWEENTSWrfVGeiPGKZADKzbmroGycHD4DwczgfNxwCpnRRFGbzwR4AaTbGfubqwwCXzjoZ8D4PPs451Tk",
  "key12": "u6mu9FumQunpYqYLJHYyYSjDRC3ZMLVbhBaSwDHFVpe1v6FEhwainrRomhHBpr9X1AgYahWLYzSPXjtsACk1wuu",
  "key13": "2YRtgs1Evn5HW2kQacNQtPNQAG7c36uwMM9NCd3UKxF1rxqy73fpDHtMJ5SSAoEJKj4cq84csMPWiKatNSXpFW1f",
  "key14": "5SLSkc6v1d7XYnKR1zwEpmaCAtmqoQwNJgn6uxjR4n6FpcA4CiFK7XvJdxen7J4dxzopVVPvFH1hAPDXNvRxgPGW",
  "key15": "27q1TFgLgGMr6t4ZLF59ZSKruXAAYrshuw9xkNCRQfDNwbRLYRB1TwyQpgJ5icGDedsKPywbHvbwFZoYTJSjK8sj",
  "key16": "5XgjrTEqUXtBthHMZr39kd1Pkq17PQipZ5VQ7Km5j2n8nnwgcUrdLHnS3bbDLd3XzECTXPhPfbxLxb28iqcJ7t3R",
  "key17": "nu5VynXFcwuKCBLq18vQVf3UDUAM7tFpzCYXfWQkTFtVyiSQ46LVxQVNZKV1qxPduajuiQxEGoFbboeQb56BiuF",
  "key18": "5FcbiYwWAnGFsbriKbobDQiUh6YyHp6Br5HBYYFxZQ5b3A34Bgt8DTkBQygTghA3G6i4tZhxqJFS8BCSVKxEyJfq",
  "key19": "8FW7r3CaZLSWqgPfFRS2MAzuUV2dZcxFMBPaV4JvnGeUHe4pMaXqjCem6mUxCk1QLuQVcKjWKkxsEbcfMcBZhWq",
  "key20": "4i79rYaZ7zTV3m6LixSgUpqrRV5Bsztsvyb2hekXU3hgQgB4GZZ6CPjSG7pCCWc4dK1UtjYrPwzWfdvj6vFrra31",
  "key21": "3wpchQWb54oJzb3ePXUreE6gVN6bYwECGv6GZYM2HBJJ8VV4oszMXcrUqveohqYBeaMf1Uvopy8GC11Bwe2baFkC",
  "key22": "5N3afX5gfeXXnC1cvXCkyU8TbCAou1ErTW1NCJGJfURRqqNJV9Rh3RSNs18DJsoCPbTkQdN9T9b63AVfjBH4x25Q",
  "key23": "2yokjskcTNGi9ya4k2gB6P7Cw2hb2LHPC1dwrqBF3s7LkVRGri9GEG89jUN9zqLfS9YnyinoXBwpJnvpggUJ5KBz",
  "key24": "5N64NKJqricG4zAEzViKnroidTNyaZbro5U8qQqU4dEZoY8mBG96YJgBCxUhh3ozh95BAo7fxAPQ4t1T8mGX3BSC",
  "key25": "5aGr3g8b7g34SxMN4sSW8Rq2A8WpUgVNfLLc4FgSiQFhn6CcLpfgddGo1vE2rKngwCgNo3MpzkmA1NXpFti2cwQW",
  "key26": "52AQgnZ5a9h2b92W2h2Jr8ejpsi4Ky9mxgeiqtMru8dQbJ4pT6sacktyRB45VTaNYKHzVur1mX1q6w8dWLM9eeZJ",
  "key27": "R4ZPGYWWymPe52qUwKXadZxjuKgozzggHqs71upzBVwDfdon1asfyLzqFP4BAGq7cfKLshMcE49YHCTvDbivMQr",
  "key28": "52cdZhwE1KPMaZGPutUrGR6Zm8swQizcKQ1V21n2jNwx1ci8vABUSmYPcr77C2xcKjybxY4cickR1To2oVsAWfJA",
  "key29": "2izQjYdszyaVLGTbbTCVpdk2ApLjAHzsRU5p9jtYhWccnavWbnWqZzkMgzvTsPCPyE3LKepN1HVQawymqpjrYzNR",
  "key30": "z8VRdCeyrfhW6q8dDLDvvjyiR7xy8zDhLSkX7BRuLvJK3GwoSLWqMius6dfUR3QDUaRtTZpZSZkp7BTn9XcXKVY",
  "key31": "3deS9Lpcs4XvosrojnSxic55LTLrFznH5TbVzbGq81AHJYiws4jKPec7DVVCnDHt7DMXN45zMkoYf36XVdLRoNuv"
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
