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
    "4MDMp3yDyBap2sTsNP5DN9Bre2duQtDkohbRtiBJPLTfwua6ErpA4KrFbkv1yDQrddMKND5jKS5ecQ6Y9i5frNqw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hMYrouKRyt59xhCDWKMJPZwZZeWzzwrfyKvTSgvtCoCVR3GtixuXX8osVRKLwwRne2rw9cYdDfZgJuJYYJ1C84",
  "key1": "zbkXyxr557MeEqd7eb9gjYgtHHhDky1QWVAwx8f84BLS2eef1crw5dtEqx1xcoYad2exkLrHCTQeVV3RFL3pAum",
  "key2": "3mHQeVhpfDkgRg1HBm9NADpsijQCK2uWQB2WzKgpcTmGHh7VHjHVdMN2fczP7wWpnGj2bXRos7VNo1k4HJyPDTu7",
  "key3": "5U3y8obykBon6c4PQEkVwTXyHKEjGHbU7aSBNmAJiDmMeV1RFjEyyv7E8KV3S2RVirei9vfBvQe97CCcQixYdHam",
  "key4": "46rnQJEgWHCYU1YCGJ2iab9k3Neyo8GC5eHQLjnHFEuwNKYMi68ovTXgnGMfLT1ksBkZT7sJaCkABqo1CDCrzuAr",
  "key5": "38YjWpupk9uoWai7p8iMDSaadRPF1kf2spfgVadTTJdds2TdMyLYDsY9hoeBNvG5jTZfAdo8YLQqhochwpYhNEHY",
  "key6": "5jqCv3jzvMKPnVZhwsE2Sb5ScEXo8ERaTpQmAvgXZAqcAdiwDagJ6AAbuBC74YENJVJTxBLNCm2cSxjo61BKa2Av",
  "key7": "Fh8xZo8GSvJAySm5RWDem1k2kwnP9y4avTiQ4m2LszQrYQ5ogBmwXmekjdd8yARotYdHfTYmsZyxW4LqD5dSR57",
  "key8": "cuazG2MqFH7F7hoxqLUviV8vrKTLSqux4JyDK79VPTWamuL572Nb7PjMSFGxL9kh7kTbMpTtBvYAYZQXbMLGKYC",
  "key9": "4gQtr3goEd1AvixxRqGHTEpY7suSswFBuVE7eURK5tmbSBSbfmrbJvu36U9mCyAPBLqFnbeQroMPvKfhjS7uWnhg",
  "key10": "Ps8zGYDM1ZfZ4SyYeDXDbNNqPeZh2iQCjjGVYqdTuqWabX5XZKjH7TJtAjgiT2XpRqL6DN9sWYPPSJ8VB5aeK6R",
  "key11": "3h59xyPbPt7XjeupTgfJ3ADbcH8NUf1p6boaNxiTrDWtTcqRFdW8QPAoX26D6bogPVxunHgTKnzgSB68EfN5PvHQ",
  "key12": "2J3NoUhWDdmSp5wg5TLJFx2Awc2ymmh7hGNG8SJje3eq9VomoQuaEwnq5dTKwr8BMj4YemZ7YBrmjQPWpnjeQf2Z",
  "key13": "5WFFxHPc7myD8ZYKtxxCuns7zDQu5iKYidEaRZyj8NyYCgK1JJqjmk8a3PdNsdrwzsQTSKc12D1MpmwqYxiFQPgK",
  "key14": "ns1snXvnZgzqzHGUMSsfFkfjt3ZhtGHrAocktL2dt1Htd6zGp8Mee1NCujPTLMwdD2Wk6rYrzYKDXzfn5dqQxzg",
  "key15": "NTMX5zxbb89eNkt5Cj4umx7qNRhppYAGB1e923sFr2YJaycv1yVC6EZAcK4DTyFhLCRanXqvG9ztJdCEyDfWr7N",
  "key16": "3vt3ggB4g2VqHjs1L7H59fyK6S4PtX56a1jpYgsfPfney2qcRZA19ENTycYZ4qXRxWdQ4uxCdZpQDsWdRXxJKtwa",
  "key17": "5SMpAqFvcwzBTNR3tZxb9gqSiBFUBJzKLfPjEarzYHYmaQQhhp9FzSNmeWYBvYHc8DZdxFGkDD6R9vC3VYqsJ32L",
  "key18": "5k1398naevp4ehk5CPeNS9qPFeG6MztiKbTYgrCmyQAuCHNCVVXSaeedtfr4kNj6qrJrkB2SwRkkBfkWVxLqUMLg",
  "key19": "twUMBv6m4JggmdqUShS57PB8fsY6UZZhqq1H9yoBacrcQkToxRDdDvEeaLjcPeMjEwBt5wP9UsZjt5UcDjRQy7X",
  "key20": "5Y1GDs8kU9QSSYj7M6k9QaRBxb8H5DEq7Uhi5aEQsow9znBA8KPC7rfVFT5en9VWBxVaQAnwryHdwN9SCj47ejYf",
  "key21": "3XR6pTixB6Tgxkvos9RR5ytt4dpy62ewuEzekwSqBXUsX4i7H8asFuYkShARrFrf83X6PQ8pvkAopaYL1CSo6bEP",
  "key22": "34JQb1u43W16MGb7pYkXA9YAiFM57z7GSQbQQGdpX7hNC1hmHUciMtQGZzqqPG5g6eztxkdKePTpctXMhwZ6gwdh",
  "key23": "5z8Hm76RPYQmG4bFmncwSdT9TpSQMsZiw9aejcUY68atQfJvvuTE3m8ybArX4uP6tmmojD5BqG4riVwYAFpsqZqo",
  "key24": "3jXecg6nshvpHo96u4xGZq95doep36DUiKk3AnPgjBRUgiVhXB3kna1t1eDq71PUi24XWcWxS3BmSQXjTsGq5qAW",
  "key25": "QYLaHboLArWnsSs5RH2L53ofsRsp3Bh13QZfWwTenNtXVMSEurA23yCxgoTrJjdvGgL2w4bwVMt491223HmNuFG",
  "key26": "2jUFipwUL6J7bXmDQ2z4ri6ds76YXsWfKWLsheutRDckSgD7H47hC2fdfoGU76zCnHueQuh4QLcXcChgBuDwqa9r",
  "key27": "4H4UYZvpVmeqGomEsDESmdBMrZxVQGffZVSdAVYPvKQRFyKaPnwWoteKbt8YSAmiPQGD5FVx48LGxmvUEezVyUGz",
  "key28": "2jHidmWmhcQ148GWZp2rgjPWxqCqhnMWYkRm7daJLZk7ohFtjGCuxydxvnJgPfYjKtdkjEbpaqSC1WDBYCdcUVKR",
  "key29": "2W2YAXQUHpV1Li1GGskzWWHt4FhhEWcYpYxeY2mHzneuGC1EscnRsTRBmqNRtJEyCjwRqZ2nGCmZwrE2QmT38QAx",
  "key30": "4zeDYJ3WMqcFEBqLe6nD1H1KhJbJ1XPngFq3MbbkTGPpyHfvHR3mXDr5jKvgMjwxAn9kpiTcX6unXh6qh8AwZEfX",
  "key31": "5YFwAMZncD2FQofs3wtjExAvqdMjF9kRRkQdHQSayr9jVtXR3Gc56yQ9zrKABpi8ourteMCVYqBhd65m4fi89X7q",
  "key32": "KMGYXKBaF33kFbWXbJtULdXRviw62LTzT5DrCBNNFuWTS7r3pSL1Ax6NJvqE7SSQp7NSuyypaHmzHaEJRH84VT2",
  "key33": "2PsFYzrsYBqVHeeFzq2UenLfVMdYcvMHFBjHTGLkjDR4Tzu7oAuu71PQLcb9HDwhMRTLfF4SKETSoVGsgXkQTm6H",
  "key34": "4decsvq4wM7eoSRSGd9zpv2Bz2LmGSwk7k98EaRsaKoqRrCos7w8uNLZLhS81MEvf9pd5crFbfnCsBVKoCsCFww"
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
