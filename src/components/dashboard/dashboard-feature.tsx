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
    "5fFYoNuD7EmqKNMooKEpSLVdLxS71Fz6CunZbDdRNgMHu1MKgjaztPwk67Ub1R1gFLZ5Ctbetov3sDr6PHVhL3Dt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sKYSVkNpF4zxGZN5BsL5aBz5whsm1ZBud8wxi9FRrsf7wYFe1ZtRQe4pw4YCcCU1rLUGL1nDUa79NursaKSXJKc",
  "key1": "4HPfV9QFLAriDZ6JCHYSG23DZW3inoPf3EzAaTs31KoTaheuoAYGQLfgnpzgfeoUL9ZqNdE3Q248DukwbPC6zYsX",
  "key2": "vrBNZrFufyP6cUc7mDyMAt7WiB7ixjTJpisJGkzzsgTu536RvY9HCCgVboiL1UxqNn2PFNydnfQcBvwLGArTKSv",
  "key3": "4dHqnKRCPoDx8HbEMtrhrWfZjaufVHMwhcoP5S5SU6C5qhek8g82EG5hhbqqxDKx7SH1Ddnhh3mH6o5AyRFCT2WY",
  "key4": "zGSWkMQmKhiRmsdkwmYwS1LytPr73K8o5fTo9hVK61JJR3q2LMupZJqZFvA3NN5Ar5X9ui5PnQtgX2wmuYgvU35",
  "key5": "2kaWdHwJiVjVX9AASjRxbvsLJrprEEZoDmov5RQoAVfbHQeSHtxJRCD28WQVCSxHViitv6BfqkjKc3FTB4QGgDs8",
  "key6": "cLtYQWiUC3NFPR1k13TaY1SkuWP4ZiEG7kr8TVE9PJQNfe5sR3E8T9fj7W3ukKMyUnbvPBzCyZQdSgmLBYTYhMN",
  "key7": "5wAAQjNoSY1TUmxdjw4fYZTEzNrEbR5sHQa296UHvXK6BxupoQfpfKVMr6kDmj6MxMXyqai91iB383FLgU5MEA59",
  "key8": "2WNkGfqsCX7UcFvPNDJT5YWaB1pWf4eFAR6FbnWwhCv2dYed9HwejKGS8qqAUP94UDRQiEjMAEB8e2SktbuN41R8",
  "key9": "4TkMMbs9FpoWFBf3pyX9BvRPZ6VqxeefztdNcWbVYoDZfivQFVgNmzQGDRsL9z24YZzRprTD5h5bHiinDpteLc7d",
  "key10": "2dv2ux2z1Zo1ePDrFoSvtMXjznr13nL6woYBYQonqmBJMEnFDRQnSD3aQucXJtcYQZ2z2F4FYg27oNntD3Kmu1HZ",
  "key11": "2K4EBADV5Gj86bcJ7jXa3b8rGb1dvP33tSLc5ppuzB7zy8hNrD4PvvVQUTm4f3F52yRpkDi1UHSUdSESigC32Qpm",
  "key12": "2miUWRK7bTCbASURo69a9BBbfEqtJtBvUei2NuD8ENRSEKGK8LNvDCTFYADRYgrdvNzptma51SmEsGFm9VptbqsZ",
  "key13": "2YkXgJVVZxXju4NZAydLTuRrE8RLsxWELyTxxHb7xPoiobzE9KYsfjz7azaah4PzFAHtiTtzWNDKhd6bDTVb2YUo",
  "key14": "2TwPwJS6aQD2d2yj4Mcvy8qjmS496WU3CGZ4pwVT7SqsNSMkd2NduYhftvqGjXGfXQsXTj6FKDzeaRHtLEmGKJna",
  "key15": "2kjuDjTcDBqrrrx2WH9TD7eeuQixkmjepZ14BGUgjCo2erYPERTo1JCtzHoWKBbtCuQSSx8Sh8VM36oKp2CYyxJh",
  "key16": "4Jv3j4tYDDCcmHPDyZJLDNnvpfWZBbnTdRPWAhjugkajWks6TEjYzcDyE1wdcUcsM7niW8fxWYTtKbvemYmYZB4Z",
  "key17": "4UVWVcV9yiSzVUXwikPGZsGp4yNzA54nmSx3HckHMkHgBuca2ZtLHx9F6pLNW46Xpcekuroc5izAe35Pg3w5R33w",
  "key18": "2Z2Y1zrSdPk7fjnV6Tnw817gzpXHWGjN7W95rD3LNkHgGw4rEFKCBA5GAWGQRCoxCCtoB73xQC4tGbMQ8V8kGPoY",
  "key19": "4SXmRRiNBe2ZirwLxx4X5KFWJWyMEi9d4B4BPdmDdyK4aFeMis9iCHQ6Y65MHhBk6nDRcEbxKEhEQV1D2TPzvU6S",
  "key20": "3PtcFwmBHqvH4UQKnWJSaQAdtVHBQSyxxERy2AMVuFnJzEvTywbga2Nz8mM1q2WUNDHV3Hmr5tJYbARo17yH2XmE",
  "key21": "25dwk1VHSErGu7JX5WKHZaBSbxqDM1sBoDBgdTEe4pXbcnpjp6RqDZ4uBqNNPP78iLnpdDzKREcPB8oxsrtf8Xys",
  "key22": "5srWa8Djkf9TH3G8HC8sfFkUEPUvQUznWYeoSJoLPfsNLTn52mtTaEX5G7PnoyKixjLsgUye6Br1WWriKwN74Cxv",
  "key23": "5CgWvopFSqwKhtcngRz9rrAtwK2Poho3W3FJ6AjussF3Wzus13Ln7L6iAmw2cWRL3fEN1b2KQtaqoPPRJcG9mqWU",
  "key24": "4baH5YUtEqeegbvdBoQvzX61FnBqYC7QqUpDvzYGX9QJfKSvGKXiuLZRdh79FTrgSGLPKEZBAwxNBnuSWHvkwiAQ",
  "key25": "bDTbdu8c29V7uvfvKhXJmh7SJhRdmefAqUJkSBaAQTh8G8acmecsZekYzVbXsTNErRzGsSa9QcekZLuUeozBqoJ",
  "key26": "4qijTQuATv1nt8wWtbJmh2z2yunrfK7P82ZBbdPaLsDbPAVssoMV8Rgugc1zAa9TLKnzbXdGXAPBkwvUfbMpfMWs"
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
