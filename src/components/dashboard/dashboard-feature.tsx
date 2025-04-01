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
    "5kiQhLa7zgQ4eG6oy1Wn6BzAkXtxznrPG96JmMVWnwpJPG1uobxZdx7YGjv7CUPtvmYHuCjqNLYDcJ6xVTDVNRYv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53ENWEUEVNe3ENVqEKeSjrJ673isvVtaiEkFrqMEQ8TS2rmVABxVH2SVtmMycmGnehEknqCLNv74n2G7nd4XT3eN",
  "key1": "MkC9tMaKC1WKntjgAfap46ZcHwzxy6VCiN3qLPkom1Xr1hgvZpKjgdeJqXShWyxDUQkDoY7GRiBBrAGAKwz5xrE",
  "key2": "2kSQ5oUsJA8qwMQxEjiUhGw6JrHDjP3rDYya6JM1gZnM2y3VQg9sd4NHKGfMT9Rq9ZqeSDQ8tAV8e13Ca34ruMaU",
  "key3": "27MGPScceV5YvgpefVR47TojzLgqHYuoShwnTUsGuYwxrCv3MxgNFignPD85Uat2zVr4wWcJs3VnLd8JRAXkiyxH",
  "key4": "3ykCL8rRh7jNw84MCRhMzaq4MzBQh2nL1M7ZM18qKxM9r1bHiZRKtswwLXRxKYq6CWm6RCFyCAFCdHSBdDLqGSXY",
  "key5": "4ATnzQysyKyyAWj84Pt3RFGZvukCsLSZTJEoJn9Zbn78S8XUm1d5Wotde46VtLTudoWV3uGG2cNpwpgyVLwhEtP4",
  "key6": "2jYaZyoshtB2DgZVGYt595iZXyS4ERSZMuDijUrSYtSB3HVBCacY3dFjh9pfuNpFsgNEvnCEmFme7kEZ8HTjSTcb",
  "key7": "3y3kXq33nQydjgiAwjzPMgEaP7xbrMxo5bqkfZU2Fv6fA34AX5k63NrP8V2aiG6jx7scFf8m6WjDpf8yTYQiwP5T",
  "key8": "ZbZvQUfmZaGNUsTc88hAHhKWUPVYYWgnHmqRvtVhhottthw1NU7ypZ2XcQqvsN3R52gbbWMQA1gV3KfAbKtmD9U",
  "key9": "4AbxALj7pXb4Q52kZVgmKEMRzSm9WJBLZ5qQP7jemWmhXJFCYEm2oUJC7Q1KS8CEyEqCEy5aeRcrrMiyuBPYK4Y",
  "key10": "2YAqqcRpwXGD95jEVhfpt871PE2GPBqjRRwdoY8e19yH1hqhwUBApRoiXhGtQ7WnDaJZCwwZz8WRt4deQXzKt19K",
  "key11": "3nPeyUQhgt71eJ63WLd91YfWHmdGgFNy7k564e7Qr2A29KLpbsS9ZD7Sv3Z3aKt9Pyuq2fChatuCsBKw2xviYB8D",
  "key12": "4sJGQGrUCJas79SVuUEwL6ibVewhMVzyWn1RkX8u5fHShNR6U5jgCoNWu8QqXNaN96mbPE3iLJq2m8mDibNLCMkn",
  "key13": "Hnv3RQiEJFvSp3zihNLAdmm9wDnBZDXMjFD3vuYyEStRrQF86N6nBPLqTSX5NN6aHme4va1GS1xyEHkVs5PFqND",
  "key14": "DVtun89gfJQtXTNZfH2Q7wEmeu82mXwMz9StEpxtVWzq9PvEjPXD9P5bVsXiHdRx6LMW7wkeFGYshWn6C9dbQzH",
  "key15": "5RUBV7qfZH6PnFhaDozdFXEybCWPbFnMjQW4TX2bBjG7kZ4XEZYVLT7YKUaAsKwwSVMBvSA9EqaUiX9Ma8Vc1734",
  "key16": "3U6Fh4Wy71trNBwDSEsN7R9hvgA6oJhboLTufECvhP3uXTBhJGcyqgLGB65Xvb3zdhX1RsQGmcM8n1a39FKDeg5j",
  "key17": "4rb3sXuJfmps3r2pDJqtoHEJSWfSwDfP4g5Wubk9AxXP7ygy8462xohzXZd6c4zD7fftZkE6tWNjWiTUKPN7PMf8",
  "key18": "4pVFXNPbv81Wz22Hy7VNmoes7aSSNSLBxrF2dAgozCa1xgZENTbgJbZw7VbiLmgLUxTguB7GKkWcvVeFqWon4VBK",
  "key19": "2n1WJkwk7D7brdzkFUF796CuTXimJBvYGNYGPKqP7Bt6S8LC8tyNr8pFndV7QJJX9fz35La4soeeBTQPZBXDLswL",
  "key20": "4A4CsHQpzMCYCDJUTT3pmRonGL8Qktp6pArc6szL5XESmTn1brvUz7P9cTxPdFMKTcQZQwV5HUTtNWdiFwk6ZSG9",
  "key21": "4DJPcqjRy2g3wU6nrUyDiXsJEZF3z7CMYa14UEuHJhQgKLhbszHddxonU2LnqdWKd8SR3DDsvKBVNKw1NbEx9aAK",
  "key22": "2SmrB5S9GdbUJXx9fpp3fTMuHA5jkUS3pUourUHHR8sGc3KA1cu3R9kof3spBiRXwT2zdH3Y9GbJAxUMb6SXvEN",
  "key23": "ec7tbSKXMBQaSFzZCQFEF7C93VUi5z1xWGU9Rhxpo9WDz8dnp92DiZDkGxterFtQ1oGVHsDC5w5sJjS1HjSEJcv",
  "key24": "MqVWCHwoqS77qz2whRMavEqQ2k8WEYH2YWpYzuGgJTLwZNECQ8e9n5pcpWakfzPx19qMYyJ7DJS8NczAjUcVQKc",
  "key25": "5hQ5QCgg7aNA6stFtiFhhGHPUmaZnfFsQ68JMkJSMTE7tuhdPTyiqj7z4QJjYmtMuFYzGpP9GCJgXK13PcxwQJtT",
  "key26": "3jfXh5Rpj8WmxD54iu4XgFmc19sYDD14E5q5GegdYRwDYMfKkxV5sp13gvxT77jBsMFvKvu11mV9oaXJP7VfCSNQ",
  "key27": "5QtWbX6DL7ppMUzfCURjxK89xbm6WXjiuKvZdFMPGfniNeDRW784drii98LX1a7H4VeJr3b3EFxoPecEYdLv1gBr",
  "key28": "2grQARnnr5hG34ztQfA9MmrKKNhKkkCFpxAUSYYp77dDGwmzqrPa288WcFazMwbe2QVLfZh9iYuhLEpcVfJXvNAW",
  "key29": "5tQtSxz9avqmGuFmFp5UFtaXJhSwo5BNy6BtdKpekkwWV9AqRRjZvMQEGbsCFmCY819tXb5zSsMiEq9UrsT1GDww",
  "key30": "2ZBWg3iXABKmaX5axYJ45UvcN9vEn7SDULC5gze4xtq6oaoXyxqUCQAdyLRayvi4UwuQAwbF9XDuJX3HLJ2rK2y9",
  "key31": "3vqB76jK34r9QrdaSTJcLFXSqr3gwV1NkphfqQn4WXgdcSRmeWBDGrbqwbSnDKf6Vw7hmuDn6bbqrJZqVeAAxpT6",
  "key32": "36KaVVMrCYuiWEcUbRqsQJgzeD15st5K4PG6W2VGxKF1iaavz4ZMphzNSLJqJX6sKMiAtpA7ecPXiBEUCxUnfehA",
  "key33": "QAQXkE2jmYC4gfZdMkdDZSUPU4orgy2weGeyKdZ4GTLcH7MmGCp95z9QdiMJWXgyfkeVBAvD5ugDUX6SCy9Rqdy",
  "key34": "2sXNxUaAcLQ7DMuqPFa3k8QDGisAE9ExTmVXdWTP6AsGWqY9RJFz3qrSTvC31p9ujGDCyvTRxRtSWoXS9B7R2jYR",
  "key35": "2dmRMdDR94T5oDj1qEDZkqkvYSXfDyfD7BAB9U5ARRC1B9G9wZ9Jayq1XLz4yS41XkDsVVbd5w9hocrQGMMMdBKg",
  "key36": "51hKrQ7ktBaVRqRyVUXeWfzuwjVeh4SqQtU5otDXEuNayiZEaPybucREY9gLazQQvKMuxoeurNU1chUd1YZB2q8",
  "key37": "3LCcb59FyXhaS9WmssEGV98V7mftFCkS9QCP6NqdoBCQ2tePULQnhXvFcXEskAiyv5JadnmS7y2q6qCKiHXhKkY2",
  "key38": "5swHXXSNgvdzZGh5Qz4gaXfkbLawHdau4uDjksSNHPSEBLd6yKPNKiY5JT9aenN5jWpUUh2jWTrkUQgt7yN9XTUx",
  "key39": "5PzmfWfUQRhV94Lb1ddUUCrGo4Fi2yrdpBeMsjmAxgLYc6Vh98uAhqJqsFCSbpQtb5xzq19pzK7aRorrDtzVBN94",
  "key40": "3gwEKXvF96PwKULPFAZQyw7pZLoJ7FpxJ1Y8BHEDmhyR1G9W88LhKJP7cg8P72VJ5ogqFMrEsufdLBw7Yja5YeKU",
  "key41": "5CiNDTEYTUKXnQfWHpbuohmtVqTYNnYqHi6Ep2X39qquXg2S1Yg9rJEx4ZfcmXpFn4ZBiFuCqHPZ542aGKVk96mE",
  "key42": "56ADfGJAg7fhkHpMJ2P8GjKNhGfVMKv3eNpjwbNRE9sx2r59aD1MpD7m1XrCfjEJfTximKLVg45Mq3dMH3fobBWT",
  "key43": "4ryrBEvz1gqXNbzN6kewXK8YAYy9QDk7RHCXBXqAjuKCD8jyTQvWwdPhBmyZQYZv5A7yD1oKpSs4UCTUFWnYgpLH",
  "key44": "3Xis818cpHgH8hHEd3djWn6SHTNLw7FREhe7VTJymNpTMrfzah4dVcH31y6mNXunPqwVB3H8KwVikYLZJoYGx5xN",
  "key45": "fP9VUuyDQTe1d72Gjog5D8uv5V8dgNtYXoLXJK24jw8DTYmneTMyBBULno9w9NAJG6qP3kjAspDM4Ns2rnQ8WqT",
  "key46": "2LccbKYddgkUeUghE7V2FBcYgrtcTtG9eFw5j48pGRyJBBBiVHmkmob1oxP2r3pGwDEb74X4umtE7QDpp5MHFeBS",
  "key47": "58F5D8f5nAyxrpVk8yUGsjTfPcAfL3gPfweLL89r5FynmmMF5zfqp4CzQwEvsJQkAJt7aXKf2qzii7bjULnrjsiz",
  "key48": "56DAoNoPkGzbQC9fMAWqPupiDkiy71XxQa6oHksv6u4hXvs4SRi5b3Npgkw2bCHaKc7PHimHL2HcRRFoPrub25X"
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
