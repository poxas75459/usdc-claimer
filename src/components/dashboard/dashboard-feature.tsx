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
    "G2JHdCFcN5tyFXZ9myKSgeNRJThduAVaco7qkLfS77vY61w3qcWqZhVXidumwdMp6YmcdSB1QMa9FoGg5Jh2zy9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YBMmG5T85ahRrMTaoFvwYqQqYPz83xnHnSTEqG5tZXX5yuj538uPNUw44kJiK1FscqeSUKdPvXp8WnJJCGuNr5S",
  "key1": "4mF3xPUiDPYLvGHuA33FkAdz3BT7D79JvV2ZaRfJb2TkP757vJjhUSWLZVnKYqoFmPGWvYtQXCTaemvdVWVoQMEo",
  "key2": "wpzvAZQeqPsNsPXajZ2Ld3H6qAqCBLz7qZgGwUw2svNoejNiSQqj4j7Li17bHxhfcfQxUWJ8BHVHUZjjfSTNNoH",
  "key3": "XUKvBLWJgK5hCWGsdrzDT5Yq4C7N84AKBka8a9BGmhXmXVPMDdSy42h8wnGE8vWGEJ7dHq8gvz3kxSzoqupDCEv",
  "key4": "4K7QbFTjogtiyHuzw5fHdcNj7qv7F39V4xTrqFPw4kyEAvJpobgqGsTJLoXqvcoKBmLN6c2h5e1BNcLkq9T5ZRYw",
  "key5": "5sCtkWAspG8z9qMEyz7ahZygpZXKVyEhecuCjJrF3Rq7KDju6pcvJJ8vngRMGyNRNDJLAJhZRKAN9Lf9xqtkjyE7",
  "key6": "4dtiL7gEYaSPmDUKxot71j8guLMt5yuDbXvnW4JcygBM3fyofJKP5zkwqRkENkRHnsNLqtkS6yQDsYHwmQ8XYMsw",
  "key7": "3qtgC2oecWJLxJjM8Rf7e1ug5PqNxa4s7vqXX6na735Y2zEASx8FZVeE9SvWMS6q3jfFA5QVD7M4M7fyLhchCR5n",
  "key8": "3dLPJKn8QudNDNHcu1mTRU2xtQtGCm6nsvMTWgxubQ6E7HcUoHedYud6E2fkUNDfd32ssb6EBcFH6UFQ7pBfdnQX",
  "key9": "3Gx5CZjyaGvPAnEQ53fTgm7u6VwZrYVuiccCSdeKbPojfMnodLwTn149J77gEDjrJtoPha8GtSPKGScyU53v2Lnm",
  "key10": "5MuH8Jj8YpKMm92RTafy6bjvkfLuEf11AX7iKW3Xi4C8FqfvwPeGNbiLQKBUwE9jFHTBCnukR6J4va3bdnPr7GB7",
  "key11": "s7HE19ETKYrKcm2Uetz2F8UDYYRCtU16U5WSuwFXG4rNh8RESmDZ26TQng95J4tr6k8Q7hwo64xbY9sLwZPfzxZ",
  "key12": "2NAqyYigogSJ5qie9u6ac7h5kBAmdacPhjh6Tx8JanvAS6yQPM73p9upGuZwHAnyXa8hCLATrW7GvhppEVqzSMvP",
  "key13": "5WgG93Wp3ZgxwuqjYYMW2g5Y5Vv531ragotiTVyRkLQcjzQxyywFBtdGEwaxy1jxKHN55s8FuYmgaJJUo3yQEg4K",
  "key14": "4w1iCSCyLh7KDcx3EqKR6be7ttRkvrSs8VP7BoXYrGECirz8kJKF75FCJByqaUds8GRnmqSi4yzDuyNZJ8LKvkdK",
  "key15": "4zjK1YtrgvWUxF4F5susbphQbC6dzE8D1HHbSpQBCwQ667hhG5dXKLKf24Kes1nDgR8ccisF9hgexawQFvnbaU75",
  "key16": "222WLsDKGCiRiKmyquhvLSdwVEWSDWDfGxhZbQyrgyXPrihxy21kXEkBPfBWjHN7ELvg5S7hBnNk9N3tJnDf4W7a",
  "key17": "2aKybM91a8Un6d1X6zrWvgGLoz6qHzAyJGEJjNDpfwvDpKnpkXmxNfHymBTzGHa9nshz262iPQnGuep532MmAyjz",
  "key18": "3f8rfaMHBuuUTuFxxoKq7DeWyTAkww516gwzrjeBNYwdJN2yZaCRVdZJRvtrpVV213XkuP4zpCNf5tkBFivG62hY",
  "key19": "5ZEKDgBbD1bZkpPm3QawYpYzdU94JTC8LTJbgbsjZedPNbb1Mq3Gk28g1bR8Qbx4NpDxvAAVwiXYXt2iW3hY7xzN",
  "key20": "65SL4dYRyGQ2GJSoHxYDQEnoZskCXedidNtyfuiCw7tSSih1srQL8abi8RtPef2PNZQRdkoapdmAjTVg7pHXKgA4",
  "key21": "54euXfQnPk4Kyp4KSs6PrkC31x3BErskekb7RjARBupFTR12Yz8fyva6idSNKE7daWESAwN1QvB1nNiyYjjCDHXS",
  "key22": "59EqS53Dx3TNKapSyKP1KsXVihK8SnyfxCZSz81VQUZYxZTYuMFBJTqxhcGmbNDGHdd7ikk3EW4SxSUz731icYz7",
  "key23": "4XABuXgDAugRcFRmYJVVpT7FvFTzAMN6T2UjfUktNtESLiMUsx1TyPdu6tMrQzJaWctUdTGCr1NRYF3jZauZ1ZrT",
  "key24": "5iLF9ZtmQ9tpJwXmhLP8Raiaor343NuwfyZxUyn7nXL5g4GvXt6SwQLqY6m2VXbMgg9dcPLk4xXFWtvTTxpqmepA",
  "key25": "eyuju1jvWS7gL1F7xSc9XbPL5YJZ7J34jzTQnUsfGmZqHTkvb7k1jLEHYT5wGuExVkLZynzsxdGHYTx9rRVAZf5",
  "key26": "3JoFEfbAyHQUsJA8tBf9qr3XPKfFyhzWxz2EVeVJnDBmyWnWc8RdL8BmJA4TyFh8JdtMTsCNTwezGikd75iE39Eb",
  "key27": "5543hpERWzNo2Git4qeSGkWquFhgqeoXcZrtiqARx7SKZtCKTYjHf9ZhKmzfYZKhFuqd6qnx3fro3xEyR63QU768",
  "key28": "3BjV5F24MVo9BFvtqxbbpRddYPifVYxpxDWP4Ltzsqz4pAPh5soJ7sGo2ZmjsMy2VzVHDPaRRtT1SAvtwEETxcfv",
  "key29": "3GicavJbmv9SsLDczaMLQa9f31hhWoxN3CR4E891EJBJ3yQMLjooCqrHrXG6r9Le6GxmkTjfiZ1w46HAR82stvU3",
  "key30": "3oFcaShVDgVXeBfHCSyM3961AbxSfumEGh8FGGyFGTvCsgtdbkFJcWQiFcqeHUJ3fy63GB7SFm2DMtWp5wSt8vNz",
  "key31": "4FiSfrGRQTGNtPkadGpNAC1huQWTQqXqhfr2vbACh865PfdLryHqjhLr8KDMDT1kzbbFMHiZDFQomcXgALsGeuaU",
  "key32": "4UR2hxrJp8Ko6MKPMN1waaeuuRQi1mRjS7Td7bfaVDeQF9zwpD6fU4mtggFztSvLFZn9ZJ7ae6pHMXZmupUCv5gM",
  "key33": "YwGHWuDSqeQsZC8zMeTfCFKfDxq73GQxSBKU7Y6C82HRVGKLARg8wrP6HQjEwkEbafptyFC3zqwETBadtDRWF4J",
  "key34": "rKRnfe1q2N3YTC7wbEPZmvmP5LmMMHhtfH3CSpprUArktybackshcuJoGEJb1rVqyoameXSoCqCweMjJRCoY8CB",
  "key35": "2M8S1cqczqxbzvPHCbcJZ6oaJRQoCw6L4SRs3ztSmvf9t6xyQDNBLQ7qBN5up86xADH89eJ85QFab8WVi5pqYHRa",
  "key36": "5J78H83s2rhDsQrZr8TAbXuwkzepAMntxsfpmB7gRokzUwp5qkGdvtwi4uPjkAHBgnLV2NSaSyKsGzp9m98dyexR",
  "key37": "5sC4SemME5kK42WSuZ5kmPhRsr6yDMweMcb7rrdrVn1g4qUj5D23fEF6CgG2Wddr2DHweqroqr3UGJT35vojSvUG",
  "key38": "QRduxQ9V4ij3VmY96rB9ufzgV1LPdoTxVwmjvpY6YLC4V6Yf5YoYPrzQBsWvcpaFTeBhZ8eJN57y1XhraLk67dQ",
  "key39": "5Q2Juf1K6o3ntvwFCrRU8UkPuw9zR2sYatJyiKtrKSbR7E7LrLx9A9BsDwUgBzaT7SAxb5pndjdJRgBN8S8bP4PA"
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
