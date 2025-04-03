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
    "45YeHkRJARyMUa9WqEStacwRa9yHW3MtiEYhMM5BzcD46YHGF26gcCZ6RPLeV4AiNtwCiGaywBdty9auZttrWH1W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3d4vbLNg6bbhzZLaX3E8N5zt1CMBdyCXhWRBPgfTAMEHZgfsZ2Cwn9ABGxhPNRcDscbDnJhpouwYnF1wLA9NtoGx",
  "key1": "2p9X4fJTxYDz3WkMoa6V3KFHnA9C1pZk5SoToHznhxidFzTRVfE7JpwQKJ1N89bgkjAFg8pJegejohZEkpeFDJCw",
  "key2": "1ZbN3CQQnph4vnrCL2Zjz3rQqQ51ut7cwWGN6ViADBZh64ySEDNEHdqSUQvE6Vt539J3E6qEJu78Wg4umVM5N7P",
  "key3": "27G5Q5U2ricJHgEd29wfbvZRvy47hmWZt2CZLMVhf8ZNaCHQWc4rH33PGECPY3wX4bCe1J1RS6ZvaECbPhKCDymH",
  "key4": "3HewFVhPZmvotu34spbeFoTKz73qhGkP6cQQqPLjBiVzVyyCzzct74u3Vb3ZzFqwYBsjp2fhp835YNmCVaQxvcpC",
  "key5": "37XuWBDUhnosAhshGqZtpFChHGaiPXVDJZcQYrnYkWUzUfjDBHCoxrmE6gBDrRM6K8XoEY27XgRsjsDZpGTxQuPr",
  "key6": "2DbG2zEiP5rxFWGGMmgqWf5m9PGR2q8415DpBbzGPRqVwiZJVH7EHs5htpP88Apd85gWEBySbCegFsu9SWtyDVor",
  "key7": "2bMVqQ2gghgNcGDvtY3oE4XE4J6hJoYddFF7QMnntKAm15LYqXb9ehb1Y2GabTvgstRmJoLWKeC62ccxxVAJjDsf",
  "key8": "3rF9DWakuwmTKLQZnuSCXLY7xKiSQeLVjxC39hMmkFXAo47gCQyabMNPG28hkbs862dqMf7fL2KDc23BNy28jc2C",
  "key9": "28ncQKtJYLwdDozxoxHEY1ipvGxNKqdd2yTHg5eKVi56rgaYbD4mfDzHxTfW6jkFLJsoXj9vv2VZcrbT7SCeqRyX",
  "key10": "5SvnDjGHxnYECevGSFzPhX1kNTXNk9vTgVf3AMJwkKqtLp5hJKpwkZE79T9yiNtxrLprEhb9FxC6rS3U8NpvuALV",
  "key11": "McXirg97THRBPYwHDAdkHbULKhrD1yQWh225Uy56y643oQvF2PbANcoj9eZHYnn6i55XtVRfq95Bia9KaCEEFis",
  "key12": "Y1XM19UePsmuH2GRYshvpEKcUqKFCNDuJL3K6pzpnLTRo6MWPShnqCM8JMn7advt7VTFzEwyzjDxEXYRxLDWqGA",
  "key13": "82QkA24uTg7gbBFp57qH8tRcsvuRaACMsP86gJogvWtFnHM8yVzFZCc4CYue3cyDV9ooJpngJyVE85hSC5Rr5Qu",
  "key14": "5B8Sramq9fs7Ps22CfMeCYXU41SRDUjfwcUmnAdPD7dEiEDA6SaHfZjgR3uqqrtaQWk2aGuzJzgFV1YkmDXsk6J",
  "key15": "4tiTjg8q69Ah8WEpanzNQxPSVQdFUcLeoNHPrzwJ8Ljy3VtLrdFXqcnF8yXnmjqkFcYLrqmMxjBBhfcGC9ScS1Nx",
  "key16": "31LC29V6Vs4Nm8itMSvRm2c2uisvh6Cf68LxKxJjJKRvppgU5a9Qy2nqLksdk9UegWjQJ2p4kZtzGsj86EWMxMSa",
  "key17": "3SWLxsGCHUD16jqf5vJenxbBvBV5c5b2CjAYnqcmPwPs8sARjfZgxWdjZuT2dGj1rmdGGSJta7CaU6C48yZpLu4G",
  "key18": "46m5SVQBhbfkHCxRYBqpK8xh8qTB9MMxfYMcQ1gkRdAuqohJEWsuNicAqxXJDCLoN2diJyoEPddHPpufKvxNGxES",
  "key19": "r4Tis7vd4Gk7dmQWo7TZv9WSaRs3Pr3d5RZobVsxW2QhLHQJzmkZeGqxG1pVePB2NsGpCzeFtTjtUWTygdi29hT",
  "key20": "o9s3vfQuAKxBETJUqBWmDG2ZE37H2Lfz5kY49pBwYk7HP83diCSeLJsqTwhv7dgQwesRbCUD2ZSAiFDt3P9UGsE",
  "key21": "39uLe4yfPkqrDT3xvtun3ogKqfjbj5x2b69ivSpc7cuBqPkezBTrMzaHu97VbnUFU1dcUWxmdkbYfLuJC4jqmxuy",
  "key22": "2v9WG7P676F864RvqWh6WjsnZVcfU5cgZ25tfuAjUbmrkjcPipwvbjooCfoZGyZgmHpqCafxnEwJfXVG1GD2RgT2",
  "key23": "5sKF9t7PTd9cHsWGyy6SN2PGbqsVXw2ea7ExJ1esWKd8GSMuF3Z5QTDH9LZkEK5m26DNCLduNj5TZEo2kvfn2Hjs",
  "key24": "5kBNCSczGKsp8F3GsfS33bJtqupTgEzDq7hy6cXoAtivxrZ8djUkbiGRtexFzng1Apyy4t65Awccx44HqD47TZ9M",
  "key25": "3jKNntWPxr4xYU5LGLcry9ktrqkJuKMnAcHDGV3jsKAwWyn3qyj1fBU7ZmrcYDEMuBvpCzxhpDAjMVNyMSA2Wq1P",
  "key26": "3VuoPcM5Bn72ULZgeWPrfBVmyq9Qv9n3GWq8D4ma525DocHBhyxvtRbZ1sgj2GpDrJKVw7SpRXrvqz4wM8puj7Cc",
  "key27": "2RokJ42SkCkRwVgPoHyerEyMXuKiZAwYHF19ra2akn6ws26TXRTiCdiYGd6Dosf9J1mnhYcchrjgqfhnvdP4it77"
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
