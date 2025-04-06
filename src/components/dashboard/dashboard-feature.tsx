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
    "Rstyz3D68Q1z1pXrFFS5EL7RPLxSerWwJMUqkWtd8DpacTXTHbsgqQxYz2saJkbjHQaYhkAqJ6dFF9SqqtMjhXz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Kt2YyqmmNszUPpP7rw14FuAZ37m33yoxmE2LtPqXMoHZEZTxFZDdjVRiUw1JWvE4Tfzy495LE6hCxoqr6YSm4UK",
  "key1": "4fi3VAjEUuZpA7amKe8ZJQ8tke3iCUtGz6T23wbs2kNPHw3t5piawqGUFgnzNgi3GLiGe4h46CngDqPeKnhBxZUv",
  "key2": "2nB28BT3Nfjc56gDWRrCrLaXhcsEExqxbCz4bo3pyLGQc1uSYdKLwLw4gXM2EcMU9Govbav1MDhfwSa7q6VLxikv",
  "key3": "5m2gCbk5iBGmtP1qEBoJSuugUL6ct6wzAx8da4PVEEAeTAscnumVRfXk3U1quM3Xkurd5agtx1172inFEuYX2bZN",
  "key4": "cXqxFsRdX9jz1vfjn1NM32bFn5mTWqSZ5Gv3gsL7UqyCS1cDrEwocen1BrkHLoY39esYuZUjzWQQmiDCwuR7yAD",
  "key5": "3PE9w6rjoR4HsBFupdbCYnxy9R5QzcabdCPraGHuRsdAggajeHNtdsyZBR6VJUCMEu9UfeK7cCFnmzX8ZP3crdN8",
  "key6": "5m6yPvakgUDbZgPYqEuoMYgb4fEof1F8qpEmt6kUTnkh3HBeCcZcw4HbPbXS1EsyJ8Az1MTG1vR7tRHnTCgsKnqV",
  "key7": "2VwHSPk3ZVE41ZjG7qXHQ2RgNNx1JNeJnQpHD8CmisKjzBK1Bmoc4gk1N43YjyhMFPjLZmxqZvWwqdP5W2Se7rmT",
  "key8": "3YpW3ySbJc46sBSaVhE3h6NJ1oGdiqUXLFyHcdHQcX8Y1iQaUZBkJjEcy5BbqqzzVMe8S369PWA9P6SYxvEskXhY",
  "key9": "3UxRZcuAVN3AfgiuPu4fiViWFspApVF3YL4wr8316BGLHV3zVmGsKeHWpL7zpdyz4EtYdHWaoZM6oCLZgZcd2N44",
  "key10": "4cJ6bqSzm7ztq6Vv6Hgvt39X1fD4jLGjeKWUVoscUo9eduzWziFGHkbRnyBtB1XVi5wG2D6iGaBDLZXkJjwnaoWb",
  "key11": "5bXZLEYEzc2AYzcDSE9jyZn4om9NF5SF2jVAU5RGLfUkCG9FNQMWBynFomttswN3nMKeFnVie7zpAHwkpvjuupnw",
  "key12": "5KnYGcnUwnNHUfxdEqtbakYTACNaz8hSjaHGYoH4uC7qQ3AbbTWn5Kb3qhKuJvVppcmXzznT4v2muFr6QNFKT66e",
  "key13": "5uGagZpMxNPqchos5gMGZkeg11666SL5o8hzCTt3ZscQTPDZf3xA7rPrggRoSrfRS9rkjrXb8SPWSyVPmP6Lrm31",
  "key14": "262hVfqWrShdYqCXEhLaUcoYZGTW4Huiu2E2KcZE62fyRZH1iwnf9d5YT8QMGoz4G7aqAXmZnwLfjC7SxdTHkjfn",
  "key15": "4z3jezwpmxneL1V1obJJjWZ7U1taaHBDwuLPC8jdSdhYXmtJinsbsAhZTAWEdTZzQnYThNcfpMYHCze3QfkdQRVM",
  "key16": "fzE7TwTXRann3YCQ38bTXi6GFrNXLNPKccHKXbZh7ytALgkh4D1peSKCxNWzz24M5FRZo6c4NHScH72UWcCunx6",
  "key17": "XNrPae9YdSdahpuBtySokahDY3JK2BtEqYPt875bG7iG4TMxjdgVcJTSeTcj9CJGCvCnAWWYjah8fFdiwFYMucj",
  "key18": "4MKuCD2mAAptCdt6aFfR47siBHi8jLebBevDXUfFet9pDPdadyiVR6mSGKsPPxtZhBkWEXorTrY2MptniF5xKq7M",
  "key19": "5cDubdvh9K7KHCNmgt4RmtZSWyfUW8pSiigi44jGqLytmeRfq6Xd7RkCG2YxpNGLH2KBq5Wph56xvTfrSHv6E7Xc",
  "key20": "36UvPADejgmrMNVSbXyLRGAcBFh3oiy9weemLsf7wzXwGLkz8VAz7QR5Z2UeER92erW3yMWCnuoQyqCiSDFTAy1j",
  "key21": "3LFSQozDB4GT4fvKYbsZFyoDpnqcWymUQKrzzJ8PgrAics6WUUFtbxkbmSqPgdKeqNpbqJj47czQZM3wYv8fvfxs",
  "key22": "3VqBYSCYNDphyZcNm97AtYdKfBwQ11YGTLsGXKjXq4w9guaW7JURC9FDVymwZaFwsQ9cXC3jAUYCRbRiq1SsaGvC",
  "key23": "4pybNyqfgz2bwuVidAniY6TbL1BuXaLfuTd5LYBZeYPsGKCRn8u2gTwfQ5fytNc18D3aaG4VZ5c3Z1aTN3hUZ11n",
  "key24": "517PPRzRC5EWuB3Sjh5GgwUgZbfNEY75PPynZHPvgZezDxeHNi1d2ZQpwRsHt7ArWURp6BQGRry93zGGNzY32XrZ",
  "key25": "2zMFnCCPKbmBuTTok1v19RL2dWFBhnGz6gP2VwXhmRmbYZFeDG6ZhTuBG21XK1aGe9mLyNrwhXkUtPyi3EGMZwSf",
  "key26": "3YFTdkXkzyw5RZZW6zLzaQFNNhbkBDhYD7RgorSAjxWZtoWaQ1QCghFRBVJPQnKLmmLaP3omk7uZMg2fDCJUqo6c",
  "key27": "2FQfyFYMGadhz1hufaAKWd78tiYfrXutV9d7EWAnP2gLbmvxnjeZCfGdHjkYE7zY2bCDE78HSR9Ui2nJcM5iodbb"
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
