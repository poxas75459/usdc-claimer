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
    "47FZw96jcXXHcKzq7jvuKNkEeH86XkPiFLzVd81B1UXVaKBTynscrchYbk7UeExfgvVfb2ti6CVDLzYgZUiGi3SP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MbsJxer2pLnJWhVx9AGEfoz1saxN8tr3x7k8UbLWXPcTvhnZstxb8U87cRLjqukxkZ9xDfUiMY69JEFh6Fmxd8D",
  "key1": "3g5tviRT3XQkAXcLGvcbCHWz8Dq2t5NRgq8ZL3VfcR7xcC6nFugM1mWrxTskDyfwCB3ahsL95Gdjs7RPKfbkXmCR",
  "key2": "4nBnp7Fd3sXbyx4wEvR3A2mK3tuCUkL6SWbiNboVSeJng3eh86tRNeLQANohwtY1wr8G3gs6GbEfh1y7BjUh4Mwa",
  "key3": "3Mc1D85dY8icPYtfHu9X1U9NUkNXJ2eh81VzCijVmNHopSq17WC7qauY6KZ3Vof7AHHXXw4ybddMDtDwVRgrbu3Z",
  "key4": "2SaatcGPf1d2x841E18Le2c2ih2sNvHqcV63nnv9Qyhs4Vx3DFjj241J9BP2nxDsXqeMUjyQibrdP5AK5daA4utu",
  "key5": "2vzFRbBneb4knn597mvS6CALD429HWaUtArVdzFritEnCbVbjHCG3uRefoX2UERYT6qm9PTaRmwyNMYMXrPDakYv",
  "key6": "4fSWX9RDyDEku9nLgKe811pm6ErpEmUGwa2Z6Vp8PhwQHFF8NqFybSTCXqWft4JohzGz47wNBMmdrJgQr2QmxuGT",
  "key7": "5pD5ZMMxKfUhtDUwxP3BtyyL7NkcAbuDxjCvLAVra2KZL33852PEf7sDj79foZ6ZhodqJAYgedELpMQ7WHgk34SM",
  "key8": "VsZA3ar58qkfjxDKv8nBguUr3w9Z92wCb2tVr8TLHd4hd7i9YeWAXjNVCfLNixDyKt9prYxZGKyACgvDzjwFQAA",
  "key9": "2UsW6fZcHNhp8Tnvk89GXTuAyu2UFWbayfcL1Jc6hfUPLD8TwQtPnM1RULtoXnLyXfFN5VQdoJdyQT5Rj2yg38i",
  "key10": "5YSkSRvbdX2izfgofPaCE7GKUGZt5cCNA4VPbjStvm3m237YKxJNeudjxJVVhD73eMXsVAyy87wC95xHsrcrRK8u",
  "key11": "2z716mGmJBqrJwwGCaqGtWoRYPByEFaDydr2CYWtM3BpqfmBMppCogruWkncApuJ3ADw76L8ZhYc8DsbsQkiFwX5",
  "key12": "5RL61X3E9jCHgMG1bQbjomSe9xJYbjYqLrmJeU145coB6e2assWZCyQgRSnkrUxfcH8RYkp1gAP4rWzqiKCFo8of",
  "key13": "2jMXCcqJgyo24sTM3jGSxsLFvEmXtFPnJRj4HQ9JRMTfZbixUAjeMGryf81VBzcPd32kjxvBbBjyVuRygharSR7e",
  "key14": "35VUnKDnL9gQzQ8z7pfgqWQaXb19KMVBSA3UyuAiALQxaPXm5FWhiSJGeRPd9bfa99d2eAwg8Uuu6QYRK2g33hZP",
  "key15": "5bPqFn3CE2Kv9prxW74aajwyFQEysgRLB6CrXwuYbyUpUsRFyxpZJKEUPxkVzGHNDEkmHRjcuoXGbDkZ7Sf4vkQe",
  "key16": "v9ZEXzYW47bMovjRzbZShTivLKjyRGZHM58UbtoSUrCTgTG9ezFBVGbMrTUKaZe2NA8doSLSxLpGoE9fkkrPzvq",
  "key17": "4kGZTZUzepA9KXWHt3J1CP1DjitwP2QSuaHq3E1eLf7u12p8idYcVxCvNUcendeiEC7kCNEKqwEtYjbj8tM6BEVW",
  "key18": "4zqHG7YVTPKEhA7iVJpZCZ3vMQdzumdwAYz3drJU1z8RR9ET8mWAr7vTN62kAptxF5c71NVEQ7AWAr7Ps8pEGTqW",
  "key19": "3gYL5mwUW4u3vfHCywDvSFV23mbo5Z61LrfJTDFi7uZjETgZ86RxiZVZFUe8pAnbDmRFLev2TvmGisXLAzqmQEzx",
  "key20": "e7Cpe4dRbifxuSmcBCuyQryJuuNqZmzieLV4Y5vjcieUJnriD6X3n9qwuz2eQNaRs5EbKmo6ZamHL3yf9Cb3pLG",
  "key21": "1F2diXFkPpbTpEq2SNUfam2KAhvtUM53x51H7dbvFh3H5hoMsm6UnZSYkHvmqKJYRW3QGMqaVa8PgJ5UsScjTFR",
  "key22": "3MXxxfMCh79LoG11Zatya3NkYoDAeeterJdDqDvQuvSP7dp1ALFoP68udunvZZWqBpAbjwWPxhwY6NJpBDSvzfxB",
  "key23": "33aAcmdv5EhEo4gxeWHyfPmbQ4nTGm6dACkG54LNfDKv2VHBSMLfKx59kkBXDhB59AZfQg2obPtEHg2YXDQQFdVP",
  "key24": "24B1FUT4mGcLfVK69683D4XgL2oBtdEx1vnVXiWTa2wNkBBPM1upH62A3iKZ2Vo6HwZjY26LZCCXXhVoBRgdNnAq",
  "key25": "3qx8BkTHGmNB8fRRb15Fk4mHYJ8bwYr1DMwK2ZocXgjEuVW33oQbgejgshioZjFme4t4WXxLbR1wVNbDHn74Ks7p",
  "key26": "3wyZ1qh4Q3sPtJDWGPQNNjuDYCMmKHV8KWp8qxHD6hJsomjaXpUGRsFiiuRrs39TAsY5shtsk6VfRcRW5uQLEKQG",
  "key27": "2F34pmEU4p7T1qdJNRgTcTGzPA8crUVznFHKRxYCWsDnuonG9DY7Smqmtkt1dahob8jkiTcg5ALy8t3HvExNfomM",
  "key28": "RyXADt2MTwzJE3x8zu35ZD9aERhhpyJ27DGP5gBgmLXqyYg1AaJmGrfZJ5S7t1DWU5ZALo8JYkmzjNjABPyvrju",
  "key29": "3PvmzDoEeKxCVGfAbGBr11cnajkhVnhZy9cBvg5sHkMrJqzQTVkiF3a8jDowFw2y5LxXpux2nsScYtLnqvPqaiC3",
  "key30": "3M1WR9eec3sv9L8LFwYcAp5ymsFc1L5zAU545tPYKdFgAVjpjQkuzkaPSspJtPqGmoszYiuqzSD8iBh1yZsc9xYs",
  "key31": "3uCjXgsYMmefex3w11fETrwMknnfuHYmoDzFjnLDYxxxPQhfYKJ3WKmTCvJqiMXM71RUur3f576jT4jh64DkZGwY",
  "key32": "3fSMDSmgk92PvXotuydJivPhMUYNwFuC7otDYkc6FVgUzdvkSo8PjbXAVwdSibzjYF8PjUyCgF53izuYJPhXQtUb"
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
