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
    "48KSZK6RtUiaQUhffaoPf3pGy2CkkLkybr8SpbZRMtPb9jMSXaRMWfBtX3Kav36yACna3yMJbXdw6WiwVgVDatCw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3u5N8F32EPjAo93pdN3HevbwGyRP3sqDQJGY6duF57PKFPgaLbpM7qqexg4aQzvdkkPwBQ19cKF3WmceNQ4ENoFa",
  "key1": "5irS2CH7rEEEdiDm8z2e3kwGDKNSSzYHDijULfUwBCiqKSq4u4QbLtD7RzmV6y56xHdhNVULQs8NrkUYpA7wFoGT",
  "key2": "2z8QSozx6AdNuvG2wa1sK1njaAYVeqGfgi3J3WyvF5vsnSUcKgpwfbuwVWPeugnJA11McJ2rQXoXpp4egZfXPrP1",
  "key3": "2sJZdx6MHhw5GJTmWzD59tZE6xGLFGDCDKD2TV9ogF8PWDssQXBus9GUdtvP6pVefTGXFWFjRJA2n6YNxWuh1P2b",
  "key4": "4AEfDa2KCwo6Do2h78UPpCxhTaLfpsbYNwWTgCGbHzxwke1Yw2wLqQ859nBRqE9Evp9tq4s3Bqb5quFC7cRBcvso",
  "key5": "3amCwS2ajfKgpSQWkagDf1tTAhtXiZ9oLTTVCQcvKw6mRyyefBzoy7Pz8dGcd7HpNu5E75giqwy93kEqspkuLKR7",
  "key6": "1FRThYpxygrNB4BaR7My3HzL1HMGPCC7QQiSDcozAoEhDMLLKK92rDbn8Q9PNcHgR8oadjdUN58fbmS4uKi3E98",
  "key7": "2NG8bUCMJxr3fuxGujvx3pUxEvHu21wSEF6YamdFJcfo1Shh4HET8P8R9vMWocjviBbPtV1wmstE5vh1QpdbBBUq",
  "key8": "iKBhFD7oBPdxTZKPd9FdUBsTR4oLE7TkiH2DGPZhkvU8vqieiA8HwGqN5c4HPi6JMWw9BduQNPQr6LyAWfRT83h",
  "key9": "5V7s7YzU6PPq4jDfYbGnKGqeHK9kxN6w3VZPUq4mmdUztmDSdLJWrE47k2A2FKmpoM2tYzdRM97YGx5y5FN1rDbR",
  "key10": "xNNt7gWZvU5QYye8zAeiYMndFu2SzQCqvKmApvWCRXB3y8kyp5UCvLyqLhtxgNxrEctMTCG6C4TydaoKDfz4Uod",
  "key11": "2v2M1Lk1sq4Lf5K3ZRd44NTCfc6goujqwwh3iHEKcMjYbPwzeDiYMEpCSXkWRrHbX3GjbpKwL3BPAzimjomGJpks",
  "key12": "5hLsdKGLy483KG2bRG9TnacR8RYD9WZEM34CDYiNwHjjK9K66wubitoZoZmxE8c6Tn4k5QAxW2u8KKsQ7jEUSJd5",
  "key13": "3d33W3voKHb23UZ81kXQiwkeq7k7cQo2hCTvhxjEqDtVGgi2RYdofvGNkrF5Z6acom5zmvbrPoJzjRnpRSEFCb8N",
  "key14": "54m4pbQveHocMPXtcRXpFg9uV2knaJdbWZqx7cJxpQrx2LntRH6steP36AyVRkpi49nJ9Lvnpa7WiV6F676Hu2PU",
  "key15": "b6qXbBD94j8rnwiNQSV5kZmZHWBXdUKgubESuVnxUNX22LYtfu8yGXwh8ZyKmPJPX63JSTZKzXBsrgiKJ7ZRDhE",
  "key16": "2qmkv849b8Efzi9KsavzT7K9ipYQDtcnxsEk6BrgwHrKAshFzNZVwKK8ccWu8Sr9sjvFdDXxmfnWFSs1mXzfSKRU",
  "key17": "4aX4FS49qtLUL9UhNXV11RTHxUVTWArYFhZUa5k7PvCp5X2otXX5UPPCiKgLrZaBHrzAXQrrGXexDu2TBnxT3yPd",
  "key18": "5jJ8NMPNZuLVM6cqR6NsTn9fvbdpkHugkzJxaRFmzHjL1FvfCXGd8LYZXxmqHLdy3pa2Fzv7346z5p7bH2TNZdQx",
  "key19": "3Gn6pbhM7AnnWNhkYGSKuqt1SskkLM3EWZwnarcHcWCANX5YQ5iKTgHXAvGJYZ1ztGvvFSHQvDUSH9BNv4JP5RrA",
  "key20": "i4cpcXh86BHKjmjAKLu6aDTHjvcZsauRyxmETuaUZNPRr2ci8BJj3aeaLyWuX8kcodxBAFhqGBzdnMjvMkb3MFQ",
  "key21": "53YG8qGEpnzjpT4oeFaLrLpXpoCd2RJokyCfpYP8kR62RCYMKohJeujMYiebBdzwMNxrnkoE9mrtgELFkZhZy69z",
  "key22": "5YoEpbg53xi8va9VJ5qRgEjdvgrw7pCFnSidrjesSKKbZ4x2Lo7M1k4TXpcW6MfQJ61Gd4VnDmaGpsANnqhAFvTs",
  "key23": "65WGeJphUsKGpb8fcwexia322Vpminh4LfFA9HgRGZXrBejP1Rv5qibaHknSmFtpkERSgBEo68tGg7D8D5m3rp4D",
  "key24": "En9m5aioE8UibgqQ7VCY2sY1osSz3EEaD4u9R5KXCbysZo57gBMQoJ37RAqkpnCUnvrKqjtbuVa7idnMUC7xpHm",
  "key25": "3wDcBXXSag8YaZubuoA1cPKFoF24YUmWNfNTWBWBix78qS4hrQduBQgVW1PRZUwA6tBPqbRk2rYzJpZPxsGGGWLx",
  "key26": "6N8rPudqHC3nrw4epexHf6d4VJQwp7GfKQhCLVyrhi2BGLu13Rgc5yz8asH4v5aN46EmPKdzGQynwovMWsyBjj9",
  "key27": "3Kt2ApAqpfBQXAk2ZCyN7y2f1iChJNWPHWJi6szjSrk5YEMvyYQZjxzh1sisBu6k8mzkiiihQQ9ELiUdM7BgzWt6",
  "key28": "iCmuwyLUnjc6ffNY7Scsi3gtUgr9GBDuzaEt2QV6anD57QHCuqNfZEo7K1YjQVX2aGWrrpxsiTgkMr1AEGFvYXj",
  "key29": "VrmttZGU1JPzjAZ9fx3VdkXXLFW7Q5fS3d4TgrCNRkDVm3ncxpycoMYTYh3Md1zxzFqCvzkBmrqcdYv17kKzKGz",
  "key30": "2NmvyRBiGRhMzjsHY7zeQGTdrrPYgnFqNmwdB4tMdYn7UZPcBqDc4wnKK6Bh9Zk3Dxc2rza1xqVQMjES5rHbB25P"
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
