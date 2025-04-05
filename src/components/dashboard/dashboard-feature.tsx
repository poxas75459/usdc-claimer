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
    "4k4yNsLcKLEFxJScJfRX6pBrhH9Ez6ohp9KRt22rAfZAwsUY3wSqUgvpQkfDyiwe3HoyZANNZE8LSnisZUpeZbnT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xfAwVn8tEEepAz4gsyho11qwRCnkGFxgjFJGzKwLQCKCRMA9t82vSN6dni6X6G2R1B4Bwm5iYWvGhqQvcGB8fyS",
  "key1": "2roSnSVFeUz5LgtPNN9JcykxaqgffZGnAT1MAYvq5YGNsnZhyhtcTcNNwuBtMrGAkKN5k4mAZNDMAcwbJj8hD3B",
  "key2": "2ZwihFoaUd7EfuDmkgUNbwZxKpFiZYx4Mab5N4YQXsZ5hRMzfpJRxa7MjXPGjcFqP9DVy9Sp2At9FEu3YB58o92p",
  "key3": "4LVT8YsRojW2i5XrAH31oHTiXzNZMX28pXgB4imiz5UWXN8QmcMj4HbS3KkGVvmEPixe2Q5qJm4cKGTk1LdhmMD",
  "key4": "3aSAY5moL63P3997hCjXtVe3o8iFwAFpM1CKmCXvTxi5Kj2PPRejf5wRR1Pqx99MvCyZshxry4nsXohXZPPtWEgw",
  "key5": "3ttKpYUMxqMMoxbazcvrT8qcLhApxDD7AHoxDkfHGXRLpcnoif2efbWrR73HNkQ3SyHGGQTjZQdJaUrUDfrVoxXC",
  "key6": "3bnftRREt7Jj2k3w6WyLx5G1B7Y8rvRiQmhiVVaHCoJ6XFJQAioc38yetxo6j2TjXigmqAHwmuocqcpRvm2hKFMh",
  "key7": "3LXHQFZnu9d2vi3HtAgL95qFmeM9DHiPq3Eu5CG5ZKEGNzuCe6HpJmptfaBmSieJg9FwCr2ckiN876L8thZckWYK",
  "key8": "nh2BKRnrjbsFcta7v7WsJwjCfXE9EJp6aB1Lwr3MAnrPhWqoq7DxNSkkrKnpWnuZgHa57UAFafEfU3GmHGhLsWn",
  "key9": "BaQMPN9PmDwEwr8kPH8xeDRLSmav97pd7QN2jDqDxS2sRFRVMHq1o5U2RGbPfieBNnpVGAr9Yo8H7eyTQe5NbvF",
  "key10": "28XrrDn5GNeaycvpZPPgPoxvodtTDpFZQNMc5FkBGcY1pm8WqVuWjCbLURCvAYSBGzRtnV8WzF2UAqnpqAKgzewv",
  "key11": "5Bmh4MwYihcirtW793Thp4U9HXg9RPDNzPpsGN2S98iZbf8saFfmpSPfo1WBuJJ7xa5apPgcQkwpkKNJ5UGVnqid",
  "key12": "2Tgsh5x8bMtbdjajtYEQZNLAY3BmoH4njV23fYezz7MBm4U6QAMJfVfawzCE8Ve8gE7ApCFs4YCmNNYmfC8WidxY",
  "key13": "XQhVxnmwtcND3dGAYyB2MsFgjsCFChi1nCb3jSLhSWGuZuUxZG2MHYzcZwJ3kpEBJGKcU2Ag3Y62NCUZAw9nbRG",
  "key14": "2HFzQbrByiemmoR2Qi2DHbQnsjJ86uvaFwR4u4yxq3aKJCXMMXkD4RLeXopfu4wd2W9xKSvsDr9kX5dXJbQpAAxd",
  "key15": "5sidFep7wVDbBR56MxoLcenCe3KytmrnZp8bqi7AQbzDULYUXkmTx9hfuBkXTb8Tb4vJxM9usvHnCT8BMGyDLz5B",
  "key16": "9r9Sq3uEhh1ULU7U1x33g2kes9yqSFf8TjHwxZgjmTw6ZK8XkRApNFC9ZNW8pUxucf5QCxvbPcqpMQ6hU4WED8z",
  "key17": "9qT7ZeDaVF8PsZMGdnqhbu5dx7FhxgcygzRknyAi6Wsf1pkF8RuNAgUULMNsRERyFEpcw2ddvcxAKjgTmBHuV6r",
  "key18": "4Ky7Bh57fFsxCcjzJB6qHV15DpeLReGdJgCyUtpxAiyaQAwN89njsXv6KQHZnu5iUVkjMerUUfkjfQ2to2ZKRyn6",
  "key19": "2u43CXPWxRTdg2B3i6fLTSdzZtNNHwVF94n99BuuvnE7RDnmEEy8LDejUYuTDMfngNgmUzQmFwNh3x6KESwNQLhS",
  "key20": "9g8enGtbXPa2pjWNs8SoimNNopEoFdBqiUCABze2d5fBR4sg5pzJDt6jJ143DEBgwR54Py62qhfrRmActawdHNw",
  "key21": "2gF6R8QCDgALELz33XUJrpZeT6v4AZa8mPj7gSLwnLtfMHsgRT2yb4ypfKRPvFG6FFmz9N7F2MQCYPThZG999sHT",
  "key22": "3bxMtZM7rMKmPou1fXKqYNLRXL2kAbB7QEiCuciZto6zFdzGRuQdRkABwrZHWvehsEqiS476C7zrk9waZ9gmyHYC",
  "key23": "4ivy3tNjjAYadqH2CsEC7zBuZUVbhwq1URviie5xUtM7YmR1oz7Qm7iue1Z2v17WEqhZXe1etuPUAPvyBzZMR9jQ",
  "key24": "5dPBn2EmSs5d5SwbcrWAYJCB8AF5BALM1vWR4GKTTymGkpwNJ66RxmV18Vc8FJgw41JoZ84MhLwFSxpdzyCMaxDU",
  "key25": "2KDcEN2W6RFUcBgYVbFLLKAhcTcaJ94PxVvQmdg2m4dzCW3gdwwgKsTvpNGoogFx98prtoJDHH2W8w2dyvRyG1Xs",
  "key26": "1sLVivoSBX9udUJE5HoBLh5FAB44nQS75AsZb1UrCXrf8SRuyYo4zpCuQVWdUXczgbMMoNfy9RnUDi7FCe6oTgw",
  "key27": "4QMwoRhRJEEsL7Ukp2FqSHgDxvXGMsmuJtMGhF6ZQz43LzeGE6fTf9zg3V4E9VxLhTg2svcVobVKA6MqGMdmXJrv",
  "key28": "3k4qeM5MFaBCkMVgfh2Hd9EoTSA6AD4ANUY4gEbgULW33tC1PT5oZFm4KQHwMfvNiKttAypYJYKKCKHy3Js7tH7t"
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
