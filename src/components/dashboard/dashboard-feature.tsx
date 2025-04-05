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
    "57a6e82n35YfVqa6f1LDxPmFRq5EkLy34HHs3iJ7jdk5MmkMhCEZ8YHPfWdzR6YqSAiHuon9g7bTvNkxmiQQB6QZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42kjJkh6RAJXL68Fjcyu8eg3n2TU4iLekn9ZdyyGqKtwKkWdEDer9oBUXv3zBzCSwYwkZ7MNFJByu18v41hxpo2G",
  "key1": "3YHrKoX744vCeQKZ3zcMN664zxVQ47guxv1a77NzhYGrkxbedABxSitKCwNYsueLgbosKvtz9KTQU2xYSrHtgyar",
  "key2": "4QXC4k8LP5xjtiywktaMrSbEJjXBu6ttzHfEVuuuSHZmswZXwL317dRszMDGh6HoiLirDy3ozobGJBZHNndRBRCY",
  "key3": "4rMNzHcVAPGi5zvSP8UGAfNdxFpythupR2DLFREzjHhqsPNEBtrgDPeyiSGzH4TeNa1pbiwZpyj1VGarz9Uek3cd",
  "key4": "4uxCoq7mhgJWJaYGsZC2cqVoadybJjBwB4fHmJc6SrKA8dKWMJmHoDVuEHsk7HLGVhpwAowAPH85TDf6Aiy2RRxK",
  "key5": "4sr7Fsp6odSPgZJqLMEs3e6Yu3VW1WSiyZQuRRrMUopJUTqc1iA6ScW5KGfNQ5JunV85uxEjSucUzmYKiQNcEsv4",
  "key6": "433RWw5TSF6YXWiPDZmJ8ynbHweWf62KwRrxYvriG8DL67fBpWBNo6ePWChPpYqt3smuFaZX8gkKjhqMbutQY5VB",
  "key7": "34Q38jBFtGyaQSoH2kUNV3dqj4g5STfhtahSvTEkMNsZk1Wbrvkq7ErPnjRyjhjzxAubdZuKNzHdbM8CxQXFbZph",
  "key8": "5RgN5Nj8h1JCngy75PREPDhob4e7LDB3xbZR7wuqTjHqRC4zTEyJGxMGg1zvAhw9cv32rKkXJ5us3pt2JCrAiEYi",
  "key9": "3TgvF7T9DDrVYzoChaZGTV7PjTp73sgKxCH55MBnv2qNX9Grzr9YATAmKu3X7ixovhahv88AqsEvxvpEguDQPWvE",
  "key10": "4jHNRBJL4BiTnbKhL49U2xknpb6mzFLHTt8BPGLfpWmXntgErT9TcZNkj4GefYrgwd7jSBUpBaBHcmfv4XnFDpyj",
  "key11": "3VomfWk7XTv3onGXeUBVRgGU16QWrSKP1ZEiWoAbDfUj7FLmEeHhbP281VFtxn3q36Ve4wT2Z4sr1Mp5X4eBqbVW",
  "key12": "4tZ51PbM58tdg2vi7fFb3F4aDfJshvq4ah2cq2fqimNEh8KWJL9BbYpLNzoia3iPsts7VnA4McVVByojs8pLGVLu",
  "key13": "3CowEuUXmwuh5GzxqKtCaCnBGMZxF5GnnmvA4JadCwW9ZNmtrZCqvH9srkiUsUvrWhQK3miXb6p3BPfGXCVgFmJF",
  "key14": "4EYJHvNEdQRpSS9ouPyrFuK38NG9mJe1ao3T3xfS7D4fWRZVLXzMqq9En33Dct2RpUtnMtxSEsSP86yDMERJcZVz",
  "key15": "wfBguexwC7FVesAnmc85wMR9oBpFq26uPckhWYdMyiVWCK7A71hzxEK1o3MVcWir5i9LYJX9x8Nua8zubGqBwNy",
  "key16": "38scQzA6bhjfFEnraLLWo4kFPHYBydkiMQ2h3V4yeKCvZVDowb33tHtUqPtVAvjKdnTsEcguErXt7amRF13np51i",
  "key17": "5grXXsdqxK12jJsaD6V8Ny7boiBN8fozuTC2SStXySPYRATP5WCMJSeM2YcxEcwCRGfvcQTujsHLejxXawNJYtT9",
  "key18": "3apYdX3autYcTojWCJtj3tyzst9Tpqjmhv6As1btaoL1qWYbcttWkBKaQ2JsAWT88dxwTBvKRgdhU3swGGJcN8Fc",
  "key19": "ULPuZJRCzUge9Nh9Q3fT4owV8a2GQ7zZFd1cdzsHxDjT3n8jygj38SYnTfcZMwH34z76foS5cDoxSnn8uic7KCL",
  "key20": "3QfY8SGkrVf5MnavhQoScD9p8X1dNvVgcZim9e4iPZ1nc9uqSn7jpRVD7qvfDu4RsHgjjKiiqGgYpzNyk7EVZiog",
  "key21": "9xN35guv3DJmFXbNeFKfo3JGcU3uVG281nPjtmtvsv29Xvon9jtK9FVw2Sh7FqnF8FZMQkKXhmqqXJPjjedrwFQ",
  "key22": "5oLCP9f5oVrCLvo4H7Lw61yJEDnMEZht2Esynjtjm636Q8jAJChidy9xitv1gS5Mf3tK1otRqxTc9ahUyZ6ZKvMP",
  "key23": "2kmEqV8bSfzFamY1CKRCgUd6xyqBKeiqMPQUXpHfRuHTakLvYLvQp7w5TJCtDf62nZWWDXURNuCqnXMw2XLbN4PX",
  "key24": "4qwqi28EYcn6Vde4x4wbzcbbNmkzdaZU17LCXjFijxBw5VqodULcKvNfbjWBt3wjrx2xMDdm8uZo4Q54gn1Jjrw1",
  "key25": "6EyjvN8ovk634G2VyhtqsX1x2NUg8uW2Y53eTm12rSx1QQQRFqjfu29z9reU3f6JW5FvExHXCETbba7WwtPYsYq",
  "key26": "436phQ85r6wvPtHFcrceBHKVFofqoXazsyDmvQApKaQCSR9PYU9G95DCe9FJxPiTbVYZF1mPbp46Qutek3dAH419",
  "key27": "4g7J5gnfA2Z9ukMhgzoGVkK3YTfJTEPLe9BNVmkCvkhzTvaSJnGrjhCikJG7zz7CTKdF58kyjeZQWNbit4sH7bmb"
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
