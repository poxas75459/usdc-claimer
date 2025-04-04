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
    "3cjLS8tjKY6DrDLNeo5sAd7ykCGxK1gp6BBPG2Rjmye929nZSmpGiAuWYxMBXcEeBMG7RsY3LquPAxeJg1JT37WD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5emDqRK5hPMA1mFnavRJUHmxDYbn4RV7FwahcvWFazA7w9fRw27FjBB9df8xPti4PUpw24So2wQwGCeZafjrhhKU",
  "key1": "4xNvw26qxGHj9gqpBo9uiUiuEY1ERuKEsmG9j6v26qpcmHNQrPbmmqgifg1m71WEmFNjvmqA6cvSFu49w21JX5zC",
  "key2": "zUg3nBsVVM6M7iVzMs5z4woG1SDPzNeGUABTDaXryfh1SfBQZ4TeRmaYSKA6LMGUgkFFRMYtbA8sF3dHyYER469",
  "key3": "4j1q3YhRHbzAHgFDFB16ANT4oKVLG3qGYBhtXRNLaRbxV8dJ4Ajh4NTKb2U6CEZ7bU6qNYkXXdznBZyx3iwPQUix",
  "key4": "5QzES3ZaaQZitWU7c1cVKCqzZAY2r1VpAKCGGrNXScnx9xndBY2U5TTVoG66nP1YgDW2znSoKJA6BBHZuEadH3fM",
  "key5": "2K7ay1SJo17pwPgpTxe3RuED4ikd9EvYuFyETMbCazTkR3oyP4c26XswP48HbXFE3Z6PLrQqQrEV2jBusb54xsxh",
  "key6": "3Bz1YTfXkWkXhBYmAkDuC7us8bXaqx2qjMmtofb9Di1roKxH3ju7PYkJrcC2y8gT2ovaZYCt5vGtNKCENLXxcPox",
  "key7": "5ZEudZb6X3H9bZ6ffAuqWP5wyNhAdsji3G5GNmyKkQKzbrz9qWSUfk3mKtvSTq2ky48LrNJWDumfysjbHRDYZcUH",
  "key8": "tJ8EXPHb8HqNTRxS8GtjSK9FqDfDogzKyGzFSJsUg7bQcBdq1QybfDs3R6wSc6sWxtrTn9AujNk7bDKa2wmYdDx",
  "key9": "5n8ScZtzuKzkEVDJGQuw2y73xMgbnWv1LeUJBMTftcBiQNpHhNiz8TCNrDFiPtQjG9okcxN2svE2DVe13jhgoqzK",
  "key10": "2gpV5ykt6qV9ibWTZbj7oW5PUqSog7A9nXuUSxMSqT3Z98tbVqVXLweHrpMiyjLHZaLbS9VFQBBX1VssYe79MjEL",
  "key11": "2LKVJXiVW3zu4VMuxgehTHmw3NzCLL2EQj52M1iSwRogMcXsC6XBWRdcwFcoNkYB6hyehy7wNaKeNn7uRmD7GUKs",
  "key12": "zCc5bnuxUZmV6npKZKh1xUgqQdzvszotDRgVRW7oKNo1xhjMa34XZrgzrWrtrTcP9AWW1GvhuBqPB1oTgJmaSGe",
  "key13": "3QP12DQeSirmSAzAJb2SWQJ8rTVWakYUhrvHgdimT4VWAU6VC7PWoanBhXZDq2UAksT4bnRwtEHrgyxt9i6K6sER",
  "key14": "5Z74kixoi1SossEocSgrX6r7SYUFkUs51rWHQLpHec9eA1zfrMkMR9dPTGdkWoURrdZKMcwFbSdGcM139esjdMNy",
  "key15": "3GQYCvnLeX1yywLJZ9FpLsBpemXXTer6yph2AyvkiBZfNv36dzB9ibeQFRqcg9Y8DanWH7h76FUnAVigfBzUzR5q",
  "key16": "5nUfNETFG41XvqCY4r5jxYA3jFMv33jc44JfALEBxXsGcyFHULzn97muAiw1hGWqMJ3fm9snCcUWJhfiZZ87r5wi",
  "key17": "3v5qdhCBFUFZTVFGwASQXASzJh3djVY4KdDG5YUpHLUqLWGBrHPzKmmiqMkjPrYDYrMQqTJR51WJ2y9nqAxsxSST",
  "key18": "Vf5AHLEBHKaAgDv9S5i4Yt8yYWNcXKdqAA46xYzVr7shmeRjc9wVbQXq1ye6yYo7qU3gJZfBiUknk3wN1Hzw41U",
  "key19": "3bPyuHVDmzs6yxofZmejDuDnncJBPgkMK6WUmKQMCSPTpr5rKfH5G2oediRAP4Kyn7iLugPHASBq2JTCgjbZe8DR",
  "key20": "3j9VayFnvycL25XpAXJPZLBgNHc1qXN6wceetecMiBfHmkRkzvND8jkQsZDVtwFRamjVNHdt62WmNhUdj5qH1FdW",
  "key21": "4D4rhJC6SJhbu6JJ1iXp8fqZBimdn17NY3QGQbx7fhTx6jpR6n8BHn7ZwwKz1pQmNKgTCW8B8psxdRYTFwYbmR89",
  "key22": "R4h9TL13Hewd25qrbZhxKoDc4W6wRrjWC758YNW1HQ14BkKToh11jGUQmbbr1ddbdTUhd9hEKE8M5MFGUuupd2v",
  "key23": "1qEo4RHQYjVuAatur88TutzTjAKGxzRK5MQmeQEo9tHs8P1d1RxsB5TEwBwpP2c9Y42C7eLUZs3gvAJgVvuvQsK",
  "key24": "248dKehChpBFR3THYgpTMbt65nfPhTxv5JV46oXo1sZUJTSugjHNaqPokByk9EJ21zuzT7TpeT1c2283nG5QBBvN",
  "key25": "rghkFumAGTmgNLbZE5XHbdWfcxdGkdS6r1GgyqcZ9o57NeYs9PmGZAQg3NyzSXSKDkQ1oTSLVzXY4roDLDNL6W9",
  "key26": "2G4h9RiPa1ehVXoVbbLooahvqJZkosBRRFmNcjdz3ouoUu8m5B41fjmQFyDkY7FXuKTo7U2GCuXq5gkCasDJ12Br",
  "key27": "2d8AyRanefxmeMP7QG77eCqsPwjMBBvi4V2wvBHv3Z2CxZAByjuH9zVsapxN34Fcrvk7mvcTdKMiRQBwJKfbk2CR",
  "key28": "59S9Hwa4kUuzvXtyo94TcKzrFSbMVSaNyoNytB9YYiRwPRjp9y1LKgiqzHbJAuFQK4CutbaaGbFC8TxHQfvcmzgU",
  "key29": "2jHCZYYyJjWeNGyyFpGaJR93MD15HWt6nzFKtg49AAcsrToYr1SrHqGfDHapWnz2CQyEGvm6Pur5AL27tUkrqgCo",
  "key30": "XK8kxiF2xJZNFwPGgyytoHoSErjhJKKc86nkRFYDf2vN5FZJKYc43Ga8J8NJ2RvqYdu9x3VeUgGq9Fv6hD9AJiB"
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
