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
    "5VXypPF9SukREn4GAscVkumX7fzdwTTmzAUp9xCD2nRTaidvQMSezkQscHCi2xKAkLRrhJnfosWdRG4UJ6rv8QKA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Dm7kQEMiT8PBEkvDjKztFPyzycsv9dcU4i8n4wuE68dAqx5nvtitcswjBDtjuVTiR7EBFfBrwwHkJyhbeGdkDL6",
  "key1": "v8Dk1ahSt8EFmPqvVCqRpH2DDD2SSuBK5E2qpVc8vH6w8hgSGVxLnaeU49gwE8u3HgqN366pjzjPNL3UPev83QE",
  "key2": "265wZD2ep3JbMGMrPSCGXuk8NmeXEVQBtmrU7fSTsFyuLmWJ5bMT1FQ39vGWLFmd99yxZqUXesAAdUo5tCvdVUYf",
  "key3": "4WDFiUSqmdPe2jhtdVToERGGPmFUEpygE1K38Adfx2jRAKTcHSh1dYd5XK89y3QaCoMjCwhiJXjNcrSj5yuNGtgs",
  "key4": "2PGyjHRaUs7dKrw92TsNn2BUimWMU5nsFQ5v1rsynhWCWAUA3FHLhu1FJR58uSf9Rj6qqkhF77EqRCgqv3mwiUBA",
  "key5": "5ZBTxPRHwEx2MQZ1pUvCCjGbxQ7Uqe9a7MwSBL9AsDyeTikDmyXhjCDaspgERuN1YmTsg6h2DqK4jhzcZcax6JPb",
  "key6": "P8Qui3VaXie8qyMnYaVZNCwsKLpPbc96aDKRqjmQgajQyiVT3qZ8ysWEjXmefBcbEBWAE2AWaVrWozrhbMi75To",
  "key7": "4sM1CpFeVREMxgF2oVTGCYyTQcJBi8iov7iqSfFRKvhrqfoZSBdSYUMpL82yZyJjkvs9n533V8SECQNGqCLxZTSc",
  "key8": "4aLBmeeyr3zRy4mqtfk9a6ciMS5KN6EYPDo6sb93pWoBFjGYAat26kGBnQuVgS9Rnfw3SFWCze3FpAqUGv267uZ4",
  "key9": "2VZT2Y3Afku4HtgxqeRZQ6oL49h2KnUzVaeN92bXoo1k8AFQx1rHYznohQB7Yhj4SEYfbd3dSiHZ8hdt7LvqFxUU",
  "key10": "2MuJ8ESi7mpYJdx5dgdg51cfVfF7jheWjTZGXjZdEeNMBUPP5P7Hsd1atSbWu6Z3ReBdoMUQda6NUwukKFnPkobZ",
  "key11": "2mwjh64q7Q1N58SXrmz9MYBvnFLt39G4pyZpTJ7niJMcCzmYNnxBPmfnnckd13j3y7aaJgcYHKdVmkF8C2oUNPxH",
  "key12": "37nkkodaP6FbLpFvJMCwhJwHDX9RnUZc46N2sfhAEfPyDsRdF36fadEqGLVkQ7nHpMpgWTCafadi61Rx72qCc34y",
  "key13": "4bMS4xQmpVj4Xum3xQw5iruyki5CvPsYx1GyAm75RH8tFcBVpKM3YmLRHGCtq1y1vhrPg5BAyUXxATxe6CmTEj8J",
  "key14": "66HifR3VzBUauQHQPd3VPJqq9XSvKRVqfMFXF5baUt32TGnJCnurZS66owfg4H5HMAuA5DPBvLZ4MZQYAL6CWkq6",
  "key15": "2SEqix4v57wKuExZytM7JJEPnXd7HcSpyTDkefJSKB53ZSktW3s4AaXoq5FWcaSknsGZ8Zvs5iFFAmSg7CB4JjHu",
  "key16": "rh3Eeq7Mbhb2CYjz7usUxH7j6z7WVeW96uhR8qCpRa3nXJsHGecKQNN8Jh7ZGr2RVW5HkDSKbmQhy5ph69A6QBy",
  "key17": "7oBYv2gZ8CsobQGJAMZiRShTRfxmw6AGZtK8p3tdYpLjxcdcVu2n8EqxdWpcXVRMQ6L1vEgywSUNSBbEtjCfn2w",
  "key18": "66BGnDvxJUGEtFrhQZkWELy8xzqrDEdLix4q48XSfwYq4x3o9sSDLx7jz3f3ahQiZ3kHZdYKWFN8GYfphK8fef77",
  "key19": "2Wfgsy2nk62mFWwkdQAtFVS1XH3DVU8Z4stPp5hQWRrnmyamBUs2ZdpQLXGsyUMwPzXtJPCdKcJGYSV95cufbqmW",
  "key20": "iyDz4jKBjKb5HzT6efY2b6hEbcM8dDwzcG6jb9GQ1qqSTW2P4vA4iSY7QGhDpynWMhtwoqJ4W2dDDsbZxuXuSvr",
  "key21": "2De3Bfu3p8aXN9AnNSE76Y3LATYZA4wLPDZebNsq49HxaJqLLLubvvfWrScPUcexGEvEjVx3JmtUHEKcaaAsj94u",
  "key22": "uouk34QyhZDGy5gjm7VYVvyFC7rXb1wiREVAHxuwJEN5oGf3bhmLVoH5LgMmhYtLSeGkmGy1yqMtenNiq54tKu5",
  "key23": "4GnE7tfruReh2aw7YmbgGZvB7nF4nXzo2VTmpvnDtTqxfxrGpzwGtbAMARYLc3qSzxGisoXcgwAXrPViANWafjYT",
  "key24": "65614zTqQ7Qrt8uUKdnyeGk3wQBmJwWMwyunXbgu7mwYZ6e2ATcu9APKtRm3NCeqkcoSPwEkXBQx2aR8w5yUjRVU",
  "key25": "55W6D15UfuDPdyAf5inV949M1ZzaJ2gmutbZBEbGnmkdnAB2BVzTRbPoHwnksELrKUNzdLyMLxeyWgn7yrCbzL9k",
  "key26": "5rqR1zvvcWPcQFkHSxuecTHpj5ERGkCZ536PnuypLRgPiTe6ebp65jcakTRKvc77G2XHM5HD7UU78mvYs1SnvT7E",
  "key27": "2ZSxZCdRzfTRNsdjMQYLN3Boe6jz8LN61vK2XNfC7UmpUgC8uowJi99ZxfixVowDpKNEFzBYJkRsaeGRNCQS5BsX",
  "key28": "4fvhMEf7XgndKyYAHnqEij5BuLsyTCT1X5pQQVUwcnV6YpdrKpU2KcDnvFPD51F45S7jtwPXJ3CVYra4aayRDyRc",
  "key29": "wH62NRxFaCU6oikZf6wRtuxZUB5A8tns64tf1ePut7nR147PphKuaNyhHxcLEEexW6Zu7qyAwuuVZw7Kq7XbQvV",
  "key30": "k1DwE919ZTxeAy7dWZPPbM3YNrAbHqG1tTrHPPd4iRdN6PY1fBDHf87NaLppWiyWkZRFSGn3rJG8CsUbx8xKUSr",
  "key31": "4AsvWKdQYtxQzcJpDJnMsEi1XqDHjoKaD7LNd3bHAfQFGstwHyyEptEJscKY3o3b7eAetJvkzAbcdkBdKo4RrR6B"
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
