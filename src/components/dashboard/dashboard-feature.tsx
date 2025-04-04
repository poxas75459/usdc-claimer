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
    "5SLosiVf1MFJuKDn9stXpyATcUd6eWG91K1X9pKdjQxwGPHFSjHfSdvVuRXddRihvvB35qE6bNzDXRL27PAx3Xg1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "N87ckx7KD5fmqDo9Dn9482c7bqvsRRcbimAXbTybAUXCqZNSL7rUSGMUSZobH4HptBD7iuCMtFxrBeeNBwn2Qt9",
  "key1": "4BDeZmckw6NteaE9GKfsbHeFNVYpke3jbVBU8j3TYgwT6Gff6K5aBNszRsVXyaDNMAogWhLjRKe9DzcAvcB2BBvH",
  "key2": "SAmZKrmbqUveHUA29HWVXmD1TV9hgHh68VUaqm95Sjnco1MbRwMtrX52jyTrDazxW7fyi4ebVZgQvv4VHtWXgSK",
  "key3": "5gJyhWaBeUvzJJ1848ULCqSMbQrjj6sqmsU33BE5eFCWpQvQEnMZAbmHR5DAFWYDWYtNjA7r5DcQcnwYwsY5rj9w",
  "key4": "5e8t1n9W6bpedAi4j9pzeRWqg6u2Z4zetV1NPT2ouN8BgfM7zTTopMSb2Y7kbWr2fw2ZnBCRJ6rxjzjkSeNmqpQT",
  "key5": "2sAKgsFo2VabxupPd4wBoJYYtQL9N5fNvqMzNoFjaH2tQCjQ4jsPM7y9YQUo6At6dQGDjjEwUdUXSD2nRgK2sMbx",
  "key6": "4ZbPnZmQfSrrZoR4vZA9rX6KPuPiZ4jbZQaMHaHY6KwGBPoiGD5J6Ekcg24tsJF328s8tG7PgoPZyEZJHkTSRYZn",
  "key7": "Hu7GtSL2KL3mqQ3x9N1q5pzsQJ1wDWB3h5xnCjDAKJaF6csqi1KDKxBtutr3AW8EXciend2v3qBoacEAbsbksCV",
  "key8": "5R4yuxS6o2Zo1wGZLENDZ4XejAmj8wD8VQmtizgGuWyevRtUvnjDMkZo9jsVYkFPn538qokc13GnSgbCF1LUk41C",
  "key9": "3ZGagJaV89Hz38wGEJNwNwJu4mzhr5HwNNzSU34FNAWi5aeYr6mJwRYqdbm7FLNsUJEgMtcTkeEgtj9HjdDsQ88t",
  "key10": "2KZFdDSuy21wAyp266mq6xgqwrd97JWC27gSdZdjQePDqkBUNXGzWF66cztbDqeQtqNSiapajfGN9SeNHT2DzkzQ",
  "key11": "3mZgqucdVmyEk2DmZyiQTWr6vvS6CbTSWRp4ULWghqZMKEjMrXXNrwU1vMupyroNgxukcEESZkftMtXL5oAdv2fu",
  "key12": "2VRj8Z5aZ7DUNrHGFtHVDkvoEdx7dAquN923SHdF5p3G1kXnJsnB63zxuczduLYtTpFcGGs2JezbZyUAhH6A1Jmq",
  "key13": "ykwvPJhgtD7PRuJMtjL2yfB61m2iyPqQpqNxJRcXvHjTsFxtgeN9VRfNgvWcgePq1amLHGVHnGXbMuJFPCHYt6a",
  "key14": "zMC33frn82mEEv2XHQ53j9WVQ6sdh5xj2UasXfsiRUSrFvHGaXVJkEejLhtVZ7UNRvUzhj711zRNSuxfUko53nY",
  "key15": "2jiiBvFv6ztVhaTfKmRcmp63pYNqhABpEmPLaNrUiDAsTRBoCX5UW1p8D4FzMwZnb1oVSwo8RekCcLRRrbup6E4Q",
  "key16": "2dmbsahQPrddGMQ1KC93gjSkm7SsmzbrHewT2x6Ef835d3Bq88EzZbLccPDif9rp5cUxGtrZzgBtqMtvzgRD9yoY",
  "key17": "3gPmCwcuMY5pY1m52D8rJQfKHZo76jdK4xMPqbT4DZH47L64BZyxCp18txbYGy75gJ1cqPou6b1eALJFPZZ2zBBJ",
  "key18": "GFD4aBkqxmascgbXygz1vU7ZZVG4jyGkVYENM3YtVjEENdXXRYZb1uhDHUDMVTGgfc1avyKpXoy2Wde9fXrZGYX",
  "key19": "4msQoYBaCDdyDDT3fHmMVQPk3ENs8fQodXnARgjhYmLEzNT9R43FmiQHKuz17FE4toq4hgcT5ABKR6dezb1uwcQ5",
  "key20": "2CdFBPRqAzwtLMreHXicGzp9JuSkgUSUMyNndKppJp7d4WAaJqaNJTf9dPnQJyuLbcuGT9oUM44QzFQnvGf5RLJX",
  "key21": "63Eh4aVkdutPEweK457HFHZJLogYmbzzVg3MSpih894qLsupBeBRzXxVakc7drRSRHB2fbzfYiNNs7udXTNVddSa",
  "key22": "2QzMELXJ3oV7i1pkpZX4LZwAV4adNVnHiJZz19cAi5qQ26wPtxScDMNZMcF6qZRrorCtd41apRx8pFmu8DvNoHpY",
  "key23": "2uHc4cMvQUw5vqZTstXA6dq8MJzBRmQ6r5YHuVkn42C66oLZqWkxkEPQRccNToo5gYdz3gdzsrpNAr6wBxGcPQSo",
  "key24": "Znbv1fAMa9JQC4co821HUU3MFREqFbnJUChQqvkfcf1oPPg4eGZFkUhzgcCstLmWhwHXDLSq7w3KKTf749KVpMg",
  "key25": "61RQPdnu5FeVv1AtxXJNBGXZNAN9MAD8dpu46yBRjKgxpVqnnr2My5xdFUnBGHa7zRrULFYTLM8JpWEJzwMyk8Qp",
  "key26": "4tNK6XC4MmUz196y5vMG3gGuqYaL26KThK3SGrDcRKR2GymiBdAL6odtkLWvEYXqH3cmSJf647PzKdwKD2roN9j5"
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
