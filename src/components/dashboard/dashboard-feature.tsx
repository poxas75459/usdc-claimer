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
    "4Vex9pqQo9G1Bo3dw41mSd7Qu9tsg44NN6TwhJwEC1RS4PTbW5Zp7SPbPWGwSa6EeYQrUT4pYLUwuG6L3F4kB4V2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3G9rKPe395JDaURvtroDNHmN57dcTTU3WbyBps4wMpiCazWJn4BMjuDnH5diwzv8PTWWfcWYdfyjn1kbA8nCBC5H",
  "key1": "XaHDaXUGfbWiNiPgvCRfem4aaFf9L5Bcf2EwiUGrRC1FS4UnNUpsB9HvZjTL7JyS2znJjmfLVUiwBJbxnYEjnjZ",
  "key2": "4RVDo75L8SWLV8r7PD3ZicHttu9nagZ6jWQL8n4mr46YZ2GR8rA59MVsWX8PG6q9ixQHoBWG2f9prXCG8JRpVEXS",
  "key3": "2BFxqvvLHbhYymuUVRNeMycUXVo1vguDdBitP1Nc5zQdV1TKwyFhHr93Np4jcGADsLmbnEG5F6F2sJwsyFqzAgTn",
  "key4": "1wkfZDVs5JEhgdZURnHVinapV1MgXECoPFKco2X1y3n8EFwHKzAq8iRVcpwcfv1KZpgHMGeHFv9iuTgHFYbfS1o",
  "key5": "2DFDys8rK8yDwTdRPsjXkFXAFYDsMzYFyZoEtXLxuFHRDFh4yNnkxepumhpFYuEYnvSvLSWRYX1BDmnBy7yDqCBY",
  "key6": "4mkUE6EjWhRasnaAtskfNVPRPWUEWVfD6p7UD49SbY1r4kCZfqtkwfdePL9hTqonsmdR1NMPUFhSqdH5qQWAP4gv",
  "key7": "2qRM3RJkTFDpFhoYxf2Jm47a9zP28Es6F3J9QCd4J2qCNXRhXGyF2wpcTYJy4FHvh1JFgS7yneLAvhn2dS2avRwK",
  "key8": "3HHRZoTcaQn43JZgJJjdRVqtwoCAYjdCpRgG8oKjUREAWXS3H6ygFehtwu7hmM2gWVdBnFZhHzKSKKorJonTEgAT",
  "key9": "49aCTa9yevdKPBDF9MNHzhVoh7KfcAjTPLsijvVFUGzpxxiwScRpzVVo3y7juZrgRDxPym1yqk7TwsLrHoFa6DAa",
  "key10": "3pj4W7x9r1GLVeaugPqqva6rTTxSyi1xCooff8o8QQoJDzvXewc5RVxwqEjeh51aXyn8ZtL3kAtCeW559AMQPNmG",
  "key11": "2BVGM3mYsbQVWL1jBSet2jLd9a1RkwCak2JUUVz8Y92yptopq3CRrzFyBwmgg7REF1MVYzwMDSnXszRHMRE9SBve",
  "key12": "5XMdM6jCUZ8gQgm9mqUMAVRckyQD3oggaRrxHYyip8j2BYxfiv1XKTSfdkxbSxpvrvS72swGiGgk6q5qrXjvrmTM",
  "key13": "46pfCbhcCBQEjtDvuhnqdUJ1hgLAQG6it9piJd5XKobzVAVRrjYhPG2wKVCf2SurQC1WWATDPFc7R2W8CXcbEjoB",
  "key14": "2TBcbHUYychC2ScKz75HYNJkx1eF5dq9vdVEiBMj4nksa7chyASGxFC4m8Tv4LNVWdEr24AJwgx1sTDDVJJgvu3h",
  "key15": "PTNDZXz16pKT9XLXNkinzV1CqL4phPjBJYvHZQBQyJiSv8Lk9jQZTYm6nwz5nv3zuvrqxj8xkkFo74n3Po14cij",
  "key16": "ub4AS1nNW326Uu9DaTfFub7f4zFVdnBbxWJfWwea68HEsj8mHmBf1SfRevpkgvJaSd8b9EN6sSKXb38mhqhAuL8",
  "key17": "tc1SEatzpMZv1oMd8iPonZEQWD62HRt1uaVjniP1Z4A7vip2yM9c9Y18FBiV19EK4wyTv1qMzUekuBZJRno2ohJ",
  "key18": "58enqAobGAVRz3osgPKz3F8NzZ9Dq1ZVsqXdBVgPkKswrojzLYravRsfvj7GpqZ4iigj2nJd7cQFbJMieMp3XrDG",
  "key19": "2ExpEWkWpnNpnmBJRDzANvpP3CV5K525U6y1ae8vvzb94NGjicHYEQMVkV3VZFBrgVgkW2ax1sdKEPVjeaiV7brP",
  "key20": "45nStPRC6m22TMnbabkZc1kkfRCGZBtocU45JExq5RZGV5jCqtMd3upn8mxh2nSq6SDH3Bi856yzZeDgdBLsLSzX",
  "key21": "5EV4xkcvJHwxqZ31BU5nB8L14JxXKQnUAx6J6AcEHqb91VAjbNLactaL7DPwxrhdi7ob5njFFhJWNUzsur7NUBEq",
  "key22": "4ksvh1E7j14A8zydi8r8CBLAGRGHoTSug6PoUDF1cMeYWNvuM9Y72dNWAQe5fY8pBdXbArGkk5hqRSFr8UPueKSt",
  "key23": "41MEhjP1bFicni1ApV8Yup7uh1bpuufM1ZRQ8G8opDkhdb4f8nAPnQzMTJTnqne8AY6CxNss5k7Db5ZLuhZeMH5r",
  "key24": "2h8EmkGNAFFCZ5zKTDCMuND6kmEWCeJy4pnpoA9WeaK88JT3uhrM3JZoRoZaLEkcVgDPMYCUAuyUANzsAwkxUJhv",
  "key25": "3P2xfHhpjq1pDvJ5qEzwDc8H4FrfUSafSNSKhdJw34P8b3HgDNe1hNGKuu6ZTF2xRjvuYPFgGkUiaSnaiiM2nFFv",
  "key26": "8LFosLWowRSUMvaYQS5Fv2hdA3XvX4CbpASAVaBjFu54eSGMbSNFnRpxF7jTZGCsaPHr74PtwDYg2qrCZrxHWJD",
  "key27": "34ZCBW3YCG36Dmvf3PpiUU9xgFSm8fjYhnBBhjrkd1xVvb32DeRG4cJ8FVGJ29gaqZxH1zvFKV3NE66noss1Tr4R",
  "key28": "2zrAvzGvWXmcgA6weFQLma6rcmUV7eHE3fBkVLvAwUnVi8XgFtexcVU2NTuj7dAn3NxQ39wRqyYQoryZZtaYBg7q",
  "key29": "5X73HKmH9bYj389gKocbXJMnd1W8W5aS52efGazpq4ctdicwTC1ws9DXUPaGkXpSj1PnPmWsvrixgZXJbRfr4ka2",
  "key30": "gCNmSPqGvEgqpPomjrA3s7Eb6NKxdGcGAQn5PMzqL4WYHYcL9uSQeogLCU8oiaGpXrQPioSVaFQoeUBkH6EadKn",
  "key31": "4jjH15JER1Y4VDBm68yA3BzYSUExR3BkPig835vdSqH1811NQGuUUJNrr5bZpHdziqp2g1ABzcCfBicYLYDV3fv1",
  "key32": "4FQuwGQb9XS3ci16F3pmSDEja4TPdpi2EqC6H6W8CfRrvxG9rs5tXLWQsMx84GDzEBrfFxsnfkHb5Vz7TYW7Lmif",
  "key33": "2QXqDJNsiCzHC3CjU5ZmP7oRUEZBZJvD98osxG6VhAxG2iukvy1HDbd9qqkCnss6V7zjapLACY3tnYxqcJMokqyL",
  "key34": "2Xcy9wvukLVyQjHsSdjWpWWbJS9ky447GEhtTWgpWkUdabrVEuiiHdeAjGwHuuCL6v1Y8KFcEbdZkq2zomqQPwGC",
  "key35": "4tyChC1dapCWyBfi9b4C96oKpMPt3SmqK825AFBpNceqBnF3fwkjZRaai3ee6jPHYUUNk2w9AWfa9zXfWXgkzDWf",
  "key36": "39xM3UMYf532Vw9HbzdeH3fRr7wBwzzuiY58FAc46RAcB2bpbfMtwsJzXCUb9XqaNqk6Wv9uv3Wnz17rieCPEDF1",
  "key37": "283pJpjSrMPV7mFMNYMx7g5VaynPJH65epbLqghN7bgfiSNVheRyQvvdeWF1a31G1nB3nqR2m9H2S7wbDoiieQV8",
  "key38": "5tFHzqXqso8JX4pywdpDavK38eyWuhjLDqn4VuXvo4Wu1XfedoUS7P17RXcwWh3A3z32pxDMNEk5gcGe1oBBYhTz",
  "key39": "45Gv1FVuEMoLGS43ves1ALNM9aR1QJ7intKGN5r5EcJ8vmRo8CkkrkMhY6H51X2osanVU8U1xAtnEnshEo2Xmk72",
  "key40": "355getoAZBqmFp6SgohjijqweX2faHzzaQcX9NSdrWoZHazcUUpX4vAVn4qD6Q1xvh95dNcqetZpj3SmGcQobmn6"
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
