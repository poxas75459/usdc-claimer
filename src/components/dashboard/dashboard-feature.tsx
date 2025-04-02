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
    "2bgokZmEPKE3KCt2Quf1vJkHCxzNrCBrYXvH2XSUbBhw8ZL6mfQKWUUkL8eAa3N31sMXvwYMvvThoyLZerbD3qkd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AGnZGxZwyAJ9RP7q87ftMCDyvDPWr2yoiEH5FKE9JbiMDknZsq2eKTv6uPyir7zZt7sFHExXcEqNjdaj7E8Ywp7",
  "key1": "5etcU6x89p3RR9sm3iuh7Mbug6GaEM1CUp4gEVNpFmUNzuXoUTx8NbkDaotu49RA15dybzJ3NYF7fczKuDNHZhgZ",
  "key2": "3BTjZ3gm3ooHkNHHdyt9Dr1CGU5ZSzkwo6w7b8gGMU3uAY52PuVZPRgVwPnQNyKpiKptAUvajpYagBvmdTqjppz2",
  "key3": "rXmfCwQ5CQhKAWidUUXb6vLPLZ33w5n1jcZxjUHotLxWnmnK5f5PxP1icf68K3WzREU5P1gJf5jRJxYETX1ZsJD",
  "key4": "2UXo96hzfocBbKjQZzDLBCJGwq7xhGZyVr71GAPRPdxwwuTSWcY65daZrwcyStx3G4DuaT49XtMtPuQ7T9qfpomz",
  "key5": "m5YkKMobiFmYYLM5wdhGhWk9ePMaQwKHpZCBDQSo22CWxKU1Y6ydFFLS23cWQAFndKHiM9S9q8uMRGHtgd3Av3o",
  "key6": "4LJgz4bj59dDE3dxFe5PhrkpPVWmFLyWTZYMAnR4JA7Myna62TrYhSTFsXVyCGvTntuVGDqecaKSr5T8iDbzrhdi",
  "key7": "2ANYLzHQq9YbfftL6CsaawibQCJZCx8X7pmGveQxrgmhSqmVeXGrzA237BxhTDTZZbEMczkqGtLfbp2BzgjrwjER",
  "key8": "5Dv3VBEVWGfu7NZFUy1VEijWK1tduMhKQeHXaEZTdJZXBy2tGmmHQpfLf3CZheSEqXJxouAtLum5zmBki2YtDi8",
  "key9": "oTJ1kMXYGzdYLS7v1v1QqYYC28dzaPQoZuevZKmRy2MsnmdXd2xcsrCTHzAj2NTGcxmJzkKUCJ87nHJWCRb2HgZ",
  "key10": "xZxbJwj2ZWrL74x3vjUj8zWzEWPz57eFHssRy62LYGqJCMshMb1tngeeHwqveanuJxFuELW2Ez2JhVF4TqCbf44",
  "key11": "4v7fvoJaQd3nx5eXgdQmzTMjpfwG9HBXx2YWea65nxpN1yER2msg4GnKukmfVbmmMgpZcvQ7ok8u1M7C29jgzm5b",
  "key12": "5X47Ae63NY7CGfQU4cmdie2bqJ32bWgTQJv1LiuMsD5wP3JkDBdX7DaffdyhwyuabhHB9zcoBNpmNSCW3xVzMD7z",
  "key13": "4GmMhgNWBHgVCyVxcpVaax8xR2umjwytxMTnS14FpodpTf93xNXgzHzQMLiEEidwZ7UjDTMEsWGWBCspUU1bfhjG",
  "key14": "22LXbsGcJWcgSUxeLtxc4y6QA74qAjyYphoXfpc9zmuGmTn8wqJPHcaWJVW9DZLkG6U4F4GM9oWcte5GuvhHozw2",
  "key15": "55m7zWbtHrPnK8sSWzAHh7VXahtXpQUyCqZoT9EmzkWuxzQ4JzcGMCqj573g93Shrut3NKV589ULeu38kcdL8zbf",
  "key16": "va4GizkVWtB7U3egGSepGbZ9DztrfpQYt1NqfMBjYr1FkuMx2ZJqQNCcjvGLYqbCiB9s7bSK5dQCQZXwq7YD9Cv",
  "key17": "4s34eujBYE68aFsubA5rKvWfBfMn8t9EaNoMTBW3StUbXfDPEMggTvJzEYyHpDdXFm6tGTJaXp4Lw5R7eX6fWUBZ",
  "key18": "4wCdjPiYKWGnts94fKcYB5SeT1AXBJP87EbEemziPAP7mSRJNU4xRCQBRH4hFnaaeW3NxVD7FrRRaNPQipbSjQi1",
  "key19": "2mzJ76z2teP3RpjVui7xSEvMe3d2N7AaDdjfq6m4WooTKnS8kCodgfwvKcVvFDPwqdFCbT6vwc5X4ZrWMWpwnZLm",
  "key20": "4WfNqxUV9UmZmMUYwZecMQGgRnTNKa4PwnF45fmEY7VJ6Uv68yqbaJnRpbkDPMwvA5VQdZ9PDdppDZqV5D4zNMKB",
  "key21": "5RrCwnxZSg4LbRzrfAtoxSe1WsQ7g5CttopVuS8ycfZeE4WSyp4K2xGQfkJq2F7XyNtzK9Y4ivfZSLxL9eZZNv6i",
  "key22": "45xztCuDf85jhZAPJ6M7UpTUoqRsJMkzQ2tZv5pDtdZq7dPnrVKr6gWzMqG33AjpSbuppyaFYec8FxHMHAMLHv3R",
  "key23": "3x99Ncd5vzE7BkVLXN9K4FMzM5bo82BnZdU1bHumFLdYCocAjLR1ntZgKFrUEAurgLRg9mj2C6wp2SkiZJpGJrY6",
  "key24": "3yGSuu8eYMTUrnCxAEnkZsVYcS5Li6jB7UssgzV6j1stTKcWXWrLjdRcGX7rQQ2FQBJ4T3w9kPtkySL1S3e8pJK5",
  "key25": "3QYAkyb4DGSctXkkUWp7cRA8a6N8z98vfnz5mGLaCwxcpqioVAwnM1JMrFUSN8wbis74CRdLAPX1qNoQq4yzr2Gs",
  "key26": "5wGp96NVtwDUAeALwGuVHtsGTKFyNBMQnxA3bNBXrCsXKQoG5HeXVqgiUp2kddcssp1ui1CWkp5xFAsCGTJGxbQS",
  "key27": "2DGjNpDNf9A37NANNGVbWnr6fE2so2zygSEpbTScwcBNvaEKTsrpzsxBHQTiSrSzJAtqAg8KHZVQwbUqpKG3xvGz",
  "key28": "5wRS8qGPeGcyVm6dudDWhPeMifUSL8NRs4vdWhzZDapVtMahz14mw82Gm9cry1h5PdZ59uJH9S76jEnNGoU3zZYC"
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
