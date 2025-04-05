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
    "3Xs1PsQGFURvJnwuyW1bSugu3VGdwavGkahcYNZ93XopRyuGM1MzFJK5fNo7ix6GaTSxGDdS15Qeh137tc5NQ1gi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47o8qKStbHA58NC1FHJ5wKsu1vAeCBfGa2NWsx6SrKX49Wvfr359UJ4LNN12u9dEbFc8cR8co4FNVXPC9YeCXhMB",
  "key1": "4wRkq6EP3CvrVCYvDKDELznuJ6tX5665X5PZXmt1JYozGNE6h6HTDQLXTKobQmyDcqqzzz3433pTuvqqDTx7wg4B",
  "key2": "3Q2NxbNBUoKTko2wK7ia2SwXj6T8CYiYDPeyBa55QwnnhxA3oL15NRcqKHK8cqL4ArNwaeWD8RLH4dAbVHbSPkkV",
  "key3": "4GEQ24SPLtfL8s8gERk6bXEUDU6QDvj4MpMr71fkheczTEop2kfEGaxfwZFTceMXSqadeMjUJxpSmL49qgmR6ZiV",
  "key4": "4hnB8NRXFkB462ac8MEX5smnXqdWxPDYJwTxRC4S6iSNetvWV8NQnHkwemeSVyBB6P6z5tavXqFCzPwBi7VcXioG",
  "key5": "5umnjn5TCHCsXc8d8m5qt1y7P2cka7GMYcGCUsuTXBMh7YCMHrvRAr4aZZpigeTqssyBndqKa4uqAbv7naFihBy6",
  "key6": "2EpgjwLagyBEnCTfswPqRFwCfiYvo136A7pv59DLoNzoALbP7Y3XwWzm54U376U1cYAx82rJm1nV35WaYKm7cwJ3",
  "key7": "vpbSMukXGyxuSRdqyzZ1agdGHMznqLR3AzyAVuLABFGNW6A4o1HK9zK26A2mfJ1t95KcpDGfJ9GboShCgPyi6Df",
  "key8": "cfSwEvfBfhWkbijo2eJMKUCS9dTDDPvbY35yS7ZJP9ZGhWnbAAQdU9aio3UMYpB26vrS6Q3c5kmz6eo8qbADBam",
  "key9": "4i2Sj9haXzwgsPekhyn1GBx249GYW8Kk8qiCGytZoyqFLixMSjXsLeGxKdnbduYnjxeVSbiPipSrZ5Lo3eHpnMKT",
  "key10": "3xwSJCN5EE1Hy8WUfUcFYCZFUX5iknxbBotkVbr8RGQvNd8VU3WiSQr4QTwwLUvWseug6rRXr1io2sAcory6dQjP",
  "key11": "4EGjykafAdYPZ7RAYPoHCwXRjZLgK2qSC52cQ2oPhhiFFRMf2EvG5TJPT3zg9bTwiKLRv5G5fqAZUHYw1Qe939u7",
  "key12": "4SSqpC1HWj15UBLjBcq2cJPWp326XvP5RpyeVetrQPnREMgyBkCvHSNw74PPcUVCeT6wHhuCY9UC7SjWJjBcfvYT",
  "key13": "zh2B2dS2Rmuu7tMaoshojXLjpn1k6WLjWBxcfAY7Pp541BXkW8Y6cqb7H2oHJ7PtNYHV98ctA23ie4mZDqiSDqU",
  "key14": "3eHp8sWE1V81LK7Jxg8jM6mx3vWmKPHic7xcKqJHgHCr1CHVZ3cHhuv13bq7C1kP4cxXnE5Pygya6wnePXLSMsEB",
  "key15": "59hCKeCJmeAP2VvNP7439TMxk35ELYaxMLKGwuSaceqZUnRZUFmNCVwbJCdekAWA5cuyMrRJGY7KjajK8S77xgXf",
  "key16": "5L6mEJWqCwen5LYH3iHr6Cd7NvknS4axiHdeijTuBa4nDzu9Hh6DxnobcPRqLWPHbmSkBga9rUGeuW27RCvVLDWq",
  "key17": "3t4Luom3nURiPrFWxCbsQ3GH9owvuRjG8ut7JRMD7YuTT5qmJBth99MeLuiZamatTfnfJpNfAFCeAFzG97Vy71nC",
  "key18": "4qfU8tixfNNTqCjAviok1WRgxXisb1onczb5si47uMgJFqmoNykUCSn2AuQQbc9pQJbAxo5t9jEyvW34Muo5M7sJ",
  "key19": "2CebnSjVRrMKMJnUQhWeEyb6tU9nQqBGW42xtc5EoESYTYQR5V5kQuRMZ55ajLCdiabWkn9hNUoW49TeD98mKA26",
  "key20": "iFDQQbj7p3m72Tx3SDRcSekrVZcM9kgK2pTSmE3i2vN5xdgLKGhfemYP1y1C6nnSFHUxaZSkEMPRhH6LjrucX81",
  "key21": "dmdeHAN2eCBG4aNAQCYhUHn9JbFeaxdz5i9BGFZqMSM4wJXYAtHuMDyXpqJ7VA3CKcDeWPRReUdUcMcBMnKft4N",
  "key22": "Nk9PQVz7FgoghdDGahqprq9hJKn21vXqnhGGK9zfUs26gAxXgs2QFuMifzcbkPdERwWK7o2CedrMdvxheA1ZJHd",
  "key23": "5eoV9KnYbgGzRTJSoF6nwwmK7CgDnMYxMwU9wFgcL6nJAqXbeLjY2424Q9LDL66LZAW87rFnaoSRfjKmDqKAy8en",
  "key24": "yW7eVUTNPqPvXF4QrcX6tPS5pM4ucZtGMPWrnDcCDZTDR5UqYSAVvb2Edf5m2ow6QaMbDGqRYkjWJeq9jShTLEj",
  "key25": "37G6HeV1xTp47q7DjY4YpfWJnDj9tNez19w1fDaM7NCUSXuE1DD4TrsapnCsUtKV2YooMhs3ddH8ERuzmr5zZYqK",
  "key26": "5jpvRbUCsS41qbZdFnPsApQpGdbLALfFqEtsHS6LasRciPyKU7rbL3pd5FoVXgVYSjBUjnMjNA5KPyCfpsX292dK"
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
