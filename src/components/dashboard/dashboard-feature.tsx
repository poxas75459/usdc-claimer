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
    "5NWD6QKrJrgDWyeehf7j4b59RFdRsYs8GjMyJHbrYMGB2B8TwWHtTWskKVp5Mq7HQco6sSj13CAbvU9hnt5LFm7e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hjHMTVXGJJwv56TJ48MccTQjayzcZuKLEoX3byoAgLQHZWLXAaS4y1VCJfy9biZd1uDjcxZZaiNgbHgX7X9afpF",
  "key1": "2zELj8sozgghUGcXfLckth3rntSvEcv5ia4N8xdG7aSwZnQYiZ2HvqMoeGaNVEdfZyfksEsNGmTuRWYfNwovqmHi",
  "key2": "2qVHsQijQpEXZghjm3LWXjitKmKQ5pLdu1fdkq9JU995z6bbZN5LpeMW1Fq37d8o7GPuwfCV9awyV33ujKroECXz",
  "key3": "4dndEhYFgjYNePoXMQCyA1PvhbQDwBgs4WABHCHYQQSBvCbfFgn27BokeZA8riGg8Mrw4CQd4o6xX1syybrZG1dq",
  "key4": "3MqnNZXtKj9fMHEmh1YMeqvEZj7xvpWsUk31hxK4b8fnTZu69AEFeCSM6YLX6ZVcqKC3vzgem6JsYxfeHAG7WdKy",
  "key5": "4F1TRcUskt9c41VTwgzg1gk4CwzchthhDjNd1SzRVVn4C3zgr2ymuNk7tifcWTHq7jFc93f2nmVbJrnRvRRBjwqV",
  "key6": "3j6pdhsj3DisnxFFrEAyKcmwa2BzFj5WfUmzM7pizQLVBvAaRf8pdAKmvWpEp4XjpGZFjSbAUZoeW2iUo6kFVVms",
  "key7": "3mbyz5UxUFeHo7jpjYamJFQVCL3NAVQUqRDEzwQp7Kt1sRb1WXnARLwdoTUxMT9SDdg8zBZ9pfNv8WdP5VR97hnv",
  "key8": "4isQH4A5YZfs16PuVZkpkxA3q723q9mtAMco3RB6zaxDHGa9UnExnpTK2gZz8ZH2KDnTBqycSsZcDGqbSema7Emh",
  "key9": "48SC76z5dKu5vjaqCxFaJaw3zhhKDEM7EMezgQECcoDQarPfRNPTv3dXBHR8i7GHt5Mpw8pvWd1pvmUQnfW2bs5s",
  "key10": "3nvQDnFWFXtakBgMGS4q4m8CYoWEwRC9KyTViEQ4g2ghWBuR4pSCe3NbnrztSvCiQJWmJMSjQqvQijtFri4kd2nb",
  "key11": "4o41mzZeMr6hEmrameXdAx2wVoD4WnzhGC5gAQf6uSCA1FRR2FEjo94xjBArTxwAmNQXQL56rtkQcRWv379ynMsF",
  "key12": "5zNqY2SsFcLuqVnYPkeddYak3W7pi3d1XYQgqfXZbRpBaDaVYdBFkU5vsvWiyrhYo1wNcjvjqjjZ52MJCsqudX6S",
  "key13": "6qj6Cg5cMBhLS5FKHEp3Q8nxXUguXebBKqjKwMEjHphLVcpTw6fA4bf9EN5MHnHsr9s1MzVAcx8Pbs7wZ9SYyGe",
  "key14": "3jYm3gYDSH5ttTuHpPdhG1yGo3V1iPZsDahZ4puQA2uKydZtBfHogkjVyfYMvHf2v1B2o2mk17cHLAH8gnnnP6JF",
  "key15": "RteC2vuDHdRhkBUE5uVjjM8FoVqDV9cmgN1SGfoA6z7QzX2LbG9pmWHRfgFMTppUnRwmDW9SB9z3VE1oJVQqVbn",
  "key16": "b5LGoPKjyesrdmx2AGbBVS3BD9Xcv8uZiLJKQpWYtFmVh7tFUiLv7dLitSQXWEhmoZo87nnjN6guaKzcq6zHiy1",
  "key17": "3vtkbFFx1oVRpqJL2RdNz4jcuVhZFcSQ6LDuP77ZBTfv5PNYAHLX7YbfPhWQkjAjQvUnkVaNRu61taAFdm7J8Vup",
  "key18": "GpD3JZsiS76RpPVvs5caAjZ5AQH8YdQxeK2A7qwqKc1FDDo1NPzHgykqNWVGHDKuEXiiK8xEeQaWdvXwqoN8GMU",
  "key19": "5C2GYbDLwaFmpGWnTXCx94bT2Q1z8HpkshC7SExBK8f1RX9VcTaMKdJcZpFCz7YSmopV69DrcqZ81TRBdD2BPfha",
  "key20": "2piBj5kM6KofCkv71jULEWgVRRQcokU85zUsremmxVx6XdRmYpFDSXENApAbuvQYhoK4MbVTBBTpfHLyjmLEXsGA",
  "key21": "5vwe29dzWayfayfPFgG5JhoU5GpNsoayRSNhdrZdmhm4nEh22TtPMAZjBi23ZDf6QTnm87YHsWzQhwBbghJyDs61",
  "key22": "2rZWsBxcEZsULuwyjJsj7QPnbmH3HHu3yxb8AoRu5qck1SbKMv2mv116bucC1uk2TxypC8x7fGgSLkYhjtb86B28",
  "key23": "VBUyHvDrpKMgJ3u9cywonCcZyUXosHeJU82kFWtn3TvfKKk4P1zZGZTRnprDt8aCr1tYUvTmi6SRDjeWxPH684N",
  "key24": "49r1c2FV5fHkjWnumCfc6qcfu7XRDxw6eq98Vxjp6zRNNGdCAdcx65Y8QwazL4ozcRDe7J5Qsiocy3JAPNQtJw9H"
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
