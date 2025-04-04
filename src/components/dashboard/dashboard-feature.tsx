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
    "4RXRbyobVA6iZ7XCSBc49dW84ndDgGBFL4iNo4L98aRCbenCb3WpR1XknMYN9MnMhka1v3fCqD9c5qRUcR3MvRkM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NuMYeZW7AiebZuAGn4uSYCva26s9C16RRXC26W8KDDo754XKk5FPAWVK8rB4BUDPdeq6Uvv3i1FEJRXgBMq2RkJ",
  "key1": "2qFMBcW3idyerojMBDfUZFJYna7YMbudfi3RGXMstbsKzdmL7LY2vCBHLbM63E1NsgrqLR4mBAEoFtkrqhU5qSVA",
  "key2": "4cgagS6GBTQfLogGzc3op4JVD6yJvCMVWDrKziU5d6mthmJaZbQ3e1d2T1gRNgD8VRz9Zd4Ytd1VxjJ12V5BQ14L",
  "key3": "3udmaKVV8sHgRnoMcFKHnHngqEyR4hDrcikqyhLtDukFRAe6zqVi8ammnhHz74kb7YqJoLV8faNv6w4pV6cDDAf2",
  "key4": "2cmVhS35KLAuLG5EacnGbjE1zk5L5ydHDpW9bJfMfBuGd8MDZABeBuKnruHgU5TLcaeu4nWZqtjqdNfAMRDJ1oZa",
  "key5": "sAqovnnm9mxAYXL1LgiTEZ2QSPsupqBn4G87HqvihDwfbXT5R4FVPtKJw6tHg9yzFG7kw2yC6o59GrXR6dyHsFJ",
  "key6": "5hbn4ox4yeYKKBLLrQVWTDLewwq19GiEGXp26dpo8oN9e8cjRRGdZGkmRaVtJUEWX9LkYMY4VvnHGPz56wKFwW9F",
  "key7": "4VLxV2bvkE7rPFtPVXtzwJyw6gc8QxwrpFuDCfdyZ6wGo2VXrLN5JpQZxS3tSdTwcz6TiXnQUsa87PTtYHjUiYw3",
  "key8": "5B6KoF9zAFRGigaVTMKeAbbifcrbsDrpRZvxb1Wb1k4ZJDRsyB8nHQLz294fCUrRmkipopRg1i8axpqLVr9TmYPz",
  "key9": "uCHfqPNYueHYLDFDY6ieQ8wAei4aXhnRdrBxeGvKoAzhE477gLqSAb3Dc6hdKCQNMXzsXJPLQ11yCcx8eKA94ad",
  "key10": "3SGgcULpkCzf3GTmFNv3FY9qMNrBmqtKwBysz8H159YAXk3VbnAhZ2Hvw6pY2kDVq7vSVamigCxuxDoWC4LJnxFu",
  "key11": "44ZvjoPfejaD6QthtyxfcmsPHCsSgp56gwu6nHNUGjuG1khVs8wKD5hDU1inhpy1WdiMmAx3RnquwVx6Yn9h5prQ",
  "key12": "3JfX4TpyrKbSYhZZEXmgrVQhirAnWQv4wVbjAoenoj6gc9HNENwdZC4CWp5rXNwnam54myGbQsXsYfrpSNvzgUGw",
  "key13": "2fqe5PLv9A8D6sB5c41ZqbkJCiWNF4BVWub7HZdqEQW3aqT3189ZDvYidj2QLCStCGBRNHhfjsyCvBM5FXaeCLma",
  "key14": "2oCNmCK6Aqx2gJmqBE2LGZTjQbvtVga4EDXtJczCWiAoEbT9aroL65eiYCtaRA5u5mzKSEnLRXLLAtZfKgPUY2wW",
  "key15": "5NVxJJoEZbEFE5v9jWnMArqD6ERHKkC2nCzRQhmvaj7sJBSwvDCGxpZ1cnFNcsXQZVRZtTzMPXTT665ygCQ3moG7",
  "key16": "4v9bb8RedJSX7CLrYHBxoxgkHHWmNqQWFQEnyX9qcbyVNAsUUncQhGzRWV6HF7G8mG4iA4N8NfMc2bK66iEoqiQE",
  "key17": "VUjVg1BETHhs3anYkCuzWVb2fGKn9BaS4ZjWDwRMaDpGVBKfW7gTqR5xcWzA6BAsfnxEab16t7Ee2YwhHb2DhPk",
  "key18": "3ao6QySsdaxGeL88qpFZ7oSmNWQue7WFgHBWNrV6W1SXwcxv7K8phMuFVRyJYUJbqoqXhFktdoWCe844kTTKLy1h",
  "key19": "5HmGFhMTGGBEFju96HDrQLX9k6SxRG1pDv8bQLokSXbJDMfZHfu5sZXG1chkV8MzTkrcCcaVXpSkPygpcfvkAjiH",
  "key20": "2rjbs6ojP5jpq7prHYr6S4qnzomZTfP61Z3EtqSax6XZwCaKY6pvqVfMuFfDQX1S9CAGYxiBBPKrn8tBGYcwPvNK",
  "key21": "2U5BDukrohUy8mAHmbJ7N4DWfNkD3PSk3t4z9KBLfkM4UXGVRfHVbJwV2hY2CmTdcVb1oTfVUzvsBYUQg9vwfZxX",
  "key22": "5rWKz2W7obr8FzTZvhVuKELynpSw3rYcj3AxgJTZADHPuMi8FzLSzY1D7cbo12KgpvUHN3UGfhzoBN1y9x1HoMRf",
  "key23": "2sFYyAEZ954kEp9XQhG4mvh1CSBKKucTSvnF9GWq8QepBfRs5gbMxK8rbDVHaPca4Ns1mLekYBr1amKyPqFpfYKF",
  "key24": "zVEgEtg6gNjFSmTJYDuhU6cSqQccQ7rJ3SBaY8m4q3noQFJB3XbtRHNHQ6dXEZjZQMsm7tcs8L2hKFj175UzoBc",
  "key25": "47LX3drvuhRnBpyi6cFwNbQYH1JMsp6WaXqZcVCfRL3ydgeChVNT874PQckWdiAYvVRe2qX6uEoRjsM9uBdNK4Av",
  "key26": "66H7Joary7R5AVue7Y9Mn9f85LF81A84TZ8U7hPsrFSYKB8vrA725fYDf7U61Zn6cZ69m9Fei5vfMLWaYAb2HTCt"
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
