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
    "4JLbqTirGCW6qF3BSyjDGSf8sWo3TNc8xvNv5HAQNJLHsRCooDxaQW6HXnGU5vwsuriCxMxGRcSuJfPUGEUgaTe2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dKaFefNXLo5THif2pST9ydpGErK9zL3VQ3f1qpWatdWQRhGmxcGADuRtfTiDZMYRVeCgJqnH8PRfqpxiVzEW9rW",
  "key1": "3ES89XgwgWp2KTXHQFZszQ46Ep877qJ8nrwthgUeUS88BjHwEpvb1nAhugGjeiULoDuBNLM7QPPe1j3XMRFAzczR",
  "key2": "2bDgJpLVSrrBp6yMChazvi94Yqt2VqqAk8upDjiejk2yqp99j9yv8Wuv5CNZGaXBZCRW6WRKxnPak4ZRqzEDeAiX",
  "key3": "4jLRd7aqmZBs36yiGYQNo53xcdnyqnVDgZimTe3vPCJVb5eBFoGerTWkeW4n4q9BB6UxqAcm2SFqhxQg4joKNLMb",
  "key4": "4nmbmAoU9Axc24A2FWG4kjM1ccsrUB2PHXVxNC1FjAqmayADPovaUPorqgQqo4p1HfJWWzcjKegpzTigzJ4aW5L1",
  "key5": "2TKPeEwL6RTWHfuHV46GQvUTpBYAc5hKPfu3Y1x78T9rzGw85umyuLXmcfm6FjB4XxcZXH66ZiGyBttzzmsZZZyH",
  "key6": "2u6zZSkk8rK7j8VMuFG4v436ErZdLrzHgSWjDdpUdcpZkohYT82FPxJRpawhHQkeoQAUtL7EoZeeByJMGYDi3gf9",
  "key7": "2dcQh3LpYAVc8sN6MqH4rP7DuazGAzqXLLtc1V6UxdXNvmwbrsXwLP1167Gzj4qVkaZiKN95FC9zr6GLmW8cFSFt",
  "key8": "2LVhzHjd16A3AAauj591VXtjmKFFi7GsXyn58JLSrWy7FYL7RiSXGNpptN4tSnRiURRfhyWVEBvuStSUmVFxspW1",
  "key9": "XtTyjg9MxMMyntfu541QMkV6hm2RnwUZrAk4wtLXPLLDHeCDxMb2AcFDst77QmAmgJSoHnvM69dXPPfmNKFoZ1d",
  "key10": "2dZFm6bF2ALbv2AnUqbg3YFCBwy5B64sFFDXmNj9YpvzEBoSNSjguPKDnR83Ci3do9cTFL8SALrjgAt2BLS7w6hC",
  "key11": "3kU7wA33zZvLMBkveBW9Fz8S8M8VpQt41BfYsectiC1W5byV3Fd9YfeJUA67yCCgyYkJwTFBDUsgGcsjrpoyhHD9",
  "key12": "3xwLBjNksVWLTSoG8fEPBCtSQANavw7iYvNLSGXVXvii1p8ieomHenwo8VMAXdPcii7ZZSJ3r7V5x6pTJa5pqweC",
  "key13": "58Prbq88qTwNmkdQjZmeADaP9Ve1n1BpN3NWYdCJMPcoW3NpY6roKNBdohDEYCgSAEBudTaHvNS64VGxNGY7b5WQ",
  "key14": "2hfr541tti7V2SKgJgWdxY7HvD4gjePPvEVCsSwVxKQRP3pp24ubUkUxZBCKbEM6rmoziisgHcwSFyfTidzduYho",
  "key15": "3rsMEbXX3BvaSiXNKTQnsUpFFCMY6FQqqZrejXtXhGbGZQ3vJNG6yoHQLgCwrLnraU9yx1gnNZX4QHEJsuQasnpx",
  "key16": "5WPMvnpLa4wVfpMe8SRpj6bR3QLifEPCk9ukLCn7PZ8anAQJhjmX4o5wVGxwsrWsQMr5FkzjRMVEAw8VBsurwxai",
  "key17": "35NaJgjpMtbwppubwQmDonbmbsUmU5ZbM3w1Gttm6BRhZZ4oXGZicNYryESP7NVmD9FjJzB9mKRuriwN8tB9vcCC",
  "key18": "3UVWB1T6HA8LpugEYtEWHSt5qC1AcZvY9X9WCiGgjVtC2FiH1UmYWLgtvKjcgVmQ2Znqufe5uGmULx2u38mvTTeb",
  "key19": "Q85WbqEtHYfj6DXQujpEAbcTYmN6zxyEtfZi58je6medvWX31muw36rvMZkS1ZLkP3LU1nRvsF7EsHVqwvjCy8A",
  "key20": "4gRqaFZbPWGZbugJzJbDDSemtVeV8muYzn3J4RtzvUGtok3uUR4yamQCNwzTZF6dFMYKEKXizET7ovAw3nhQ15zC",
  "key21": "51efZDKskJaw9Bskqo7UgtXEFw4TQVMq7P4vipqr7o7e2QEyui4W4CRLD5QgyrA19jVGLzo6hWBRjMehbQrgjrFK",
  "key22": "2KasDriGXdkxxkMu3BJMffmDis7YCKgbfxgkUBxhx7eYhaRNnFt2eb4zQVmMMzrZfUP56SSa4BULKZAngyPSKCi",
  "key23": "3pMJ4dENu21fokmSiQq1xj8MaY5cNWEMy85BZq7eH6fqbKJx5YEgbYiShxvNqDbDreeXxHAZ2WPWne65UoZuXTor",
  "key24": "2TCFdUz8iXbNiS8MbCNfdzfYWG7DXXZFcT8UTeYrGDRgJu5LrpCq6BxQDduzn2fNfNWwYsopAR4RZkEFDX489qZY",
  "key25": "3iUbaGMSDiZcA14voF9Rmw7fyRrnsd96SkmsfJHHoTmzyuJhusnQSM3PjqGGd9ysKskrzQB2PRWqzSmNEnqV7L5e",
  "key26": "3Fgo8wdrR21sQQn1CjpU7MaK8YYtjrCSLgKjRbs8X3nkAEAeaSENff4MXZGUeAm9nzP8y8wDxCgeW6DdSwuAgksn",
  "key27": "2Sxks5iK6xKU5YU8bF6E8G3TruKZNcBXirNfNs5se9DVNSZTP556k8ERNWXrRMQ8o6raPx1Rukes93YURcdwt6Xf",
  "key28": "3XxsSNwXHzHNNK6JusXLaLLdfSo2UhhR5gnXMQtCsAVvNzhDvbHfeCMQirBAF18prCxMwvPnasZYNA4gqKtbAreM"
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
