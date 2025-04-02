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
    "5oPCMMMTiBgdevMxucgGNsEatiqoHb8aCgYZbhErJqaPBGSDP8vhLFZUSfuVsuKno2JZj7hebyVBWuwtYieZwhB5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2btxkb33MMV8sYB56R9Q8Nw5cQ1n4hYmtu7Zzkm8npW25SHCxz5J1pJtjnLmYDjUujgPV7admJRsPWmX5jRjuSG1",
  "key1": "2tzBjZjGGPQQixD1aUmn7tRa1uHoKhHpgKMk9HSwcfqfkmAqTE9x3ke7mxVJ1fm7gnMXrhabTjGsZx7UgnYyKcGh",
  "key2": "37DhDiCmDe4zjTVNCD9qBSzSvgh2RVnSAjfSw6Nn1AjhtkuVStMjxngEd1MNNL3SGYFMFrsh52bLrrjv4b5oNr8V",
  "key3": "58dGwXnXPyZGMizCUy4SqTVLR6xRr5nAxYEc6WtuxuQ7kmtr3Rcvpnsc9vheEyfBm6SHUoTxZJXJjxqp4D2162Tu",
  "key4": "5F2QjkC4Qgh2R497wtXc383pvh9Hh57iqxGiApcQVgtzzFeGxPQt6oTxjAyDdwD2MudGcVFj1asYG9oNz39j28Z4",
  "key5": "5EYHFNMxM1NdBXSaCF14axLmXHfCUmnPEdwXGyL5PJ7UkGrCrd1hCjxKSDBveN5q69MztKHp1sSPcaSXtL81pWLo",
  "key6": "JSZekWEcnJbbraZ9zJLcaJcee9qsPHDP9nnTtKykV12Fs2FTRMBoUJfsdDrrjUQrZXmkDHvY6cV5fAb6XKZf1KX",
  "key7": "28VCDw1kBxGMnNNbkW5ai3Eft5DfM5H2HqredJRGFTFtwv98XvabtyvTZddkPRFKzzcTwh1VVQ1YAJjyaBXDpt6r",
  "key8": "4THgQbJabDxjekwux2qhGrfS6oN8Nd8TfZq1Zi4y9iZwojW6egQ1CrSsU4hCASDHP2GTmg7bawL1EPPHA3zGYPc1",
  "key9": "3Drd5BxNqXYNd97saof1wUNDwXRRJP23VrFkbYcD5kzn2XBv5vnLSDBoKpjW1pHjLNg5PY7wav5dfnxekgYrH83x",
  "key10": "4QvUNqcJFn87Bxi42utTQWnzvYiXskkAVnevhyRrxmwfhPyYdefFoxMZEk1KX78jKgoya94h6j7ELyqFnztjVEY6",
  "key11": "5frFU9sESf7xjFmcJvuYxN88ts2VCCxbFYTuhExkrUXkFPAjquXiLQeRgzhRnTvYKb5Z8YSpHwSFGcLfkvfm8FFZ",
  "key12": "26vonpazj2uWyWTAJa1aTp88pboLDJCSUQ1roEKTxcJBw4RHiCZAGACu7vGwcx3MQpZcHkwzdqCepotx3yrNRCTT",
  "key13": "vCJCvgc8kZ2k1hoT4DA5RU1Q9cBWpfCc7npNUy2GBbkso5M37NWAU1EnUmiYXwEaPiJHipgJsWEnTwrXuDyFviW",
  "key14": "odoYu3tcaJwQkpvRaUmjSbbAFSaXUgEsMJcpb9TPUhedxmityuNif5RZMYZ1cPtqEy5fExx26WjEnGAaNYe77xr",
  "key15": "3vhSfMsiSca9p2GKo8gX1sM1X8EfUzi1gxD4Y3CNVeAkbU9KzBKP1yUzLpw7txCtCqasG8r1VubiRFfJAajiXfyY",
  "key16": "3j6GtiE9biJFcNnkg7vQRTE427g25gyF1W3dkhhUJ2tk2Prm6RgMSSx5cxQutC3JrPnw78esWz7NMyU6Ud4K6faz",
  "key17": "3K5EvK5JUhYXZN2Xv2XuXsnK5xX3PM2ShvErSwZ2tMZaTwQZ2EZNA4e6VsjFyCgc5eNvGKd6McrTWbKYoNSSdvEG",
  "key18": "4Mzd4MXtoszCUY63ti3end5MTbmknqQBXmrgM68caw9jJvrUwmuiftc9YPui8t3mPvagqoZoGPaMwiQmUs5rqzTv",
  "key19": "32yCZyXLUG7WAn8cRAyjh9qc7q3UM2igTDYBioVtpv1f7f2KxsRxuqikh36nHexxX8gj9Q4jng47YTZJhpapgfPX",
  "key20": "2aSpvFzTvBkGPscxH1xPqcuvvXuKBg4q4hLoLajkV9RXaEnhNktf8ujnHefeLZC8gJUmKZL4TU41u6Xy8gupUUD3",
  "key21": "5c1QtYUDDABNTcS1kUoe1iwv3Rz1otnHpWxvjrXn7JipS3Ndx9vfMWK5MFd8y2fc3XsdD1xLu8mNhbn4YQ1ckukr",
  "key22": "4qicB4qZK1qnqwwwqdJuuK2ALDjBTevkJ26hjnG4g8gfxZTa1SWnHHjAeGfoSmi2EbzhJiugTc6mXwkCZgiJbKrz",
  "key23": "5wX2qxczYJTRcXNqivG7omUTaMN6qTnY3qVz8ZKNPAmTuYstDuUieiugJ2jNN3nk6sN2GPWcSJuyZjof5PRppQwE",
  "key24": "37UgfkCzU6cSRiBgurbcpS4sE566phD5zoedBSuVYTz317dZYLPTszggnRzLAbQsGAaaoYkox4DeVJQWS5VXScBq",
  "key25": "3n6z2DajQmm4MLRTE9Ym9e39fQJRZertf7icSkFS6zm5FXSa26ppXZ9qgSjn1SmwfMVwrDvcCWkUqthGHGkSUx3z",
  "key26": "4nBMWbQwyRpS7vnWnB7W339MpZEoUrpw54wpyyXWeShaRkwweP5QGcPnGacNg1FZbCS3hW6U2aqt3sUwS3xVLtRk",
  "key27": "47ihBoD2xmKqigTHyB5wiY3dsh9oryjqAqLAJWceEN5JkufQTmdavTFyk2gwAg9Cfbr2hXunMMrVcW793ah9kqzk"
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
