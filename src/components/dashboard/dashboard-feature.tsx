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
    "gUev2ocztzrhNKxnSuPUsWb6ZyPofdifKTeWbRBXyhsFTYAXe3aVqkptmA1DqoULMyAezhUSiGoiriRYYe2QA5n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WPWaN652FxR8CXXs2JWWjotasAzHjgnd3HrosaZnkpwFegwH1vU7KaBx4a8YFMZVRrE6doNeaFj2JLmy6MswRAj",
  "key1": "4QytYk4QP63jCmUJtvqwuDgRpdaKqPEyTtSJYfU8DPffLyQ4BXJo7NxLq35RsbVksSTkaT2UpJSHQWjeuHDCb9yC",
  "key2": "3ihg8uuD9oSNhdt2xWDS7h9yzCitPuF7WA7XSY3zgWMRqKUZyuPtgHWNSp7T46B2CowcEecVuPznda9tFTRfrFL9",
  "key3": "5iE1UrJ9oLB3ZACVJEFf67RwsDGcvYebeire7XdsPCph2gSfHRuZdYWPGAsiFJCJvaXwbXZJB6TTDLKbrhM9nThz",
  "key4": "5Ad5unEivQpXSeLsRynkucZco5ystBRWmxaX3YLBoE3Mk2Y5MVWyAemy8PeTrEGbzAW2VAe92zhmhQMw76J1MqVU",
  "key5": "1u6h7DeybaqeWesRKL48nnSUcDU31w7e9sw4yX6xGMrCM15qXRitHXZFkYtagFG5TcULdPTTq4FVvZLpMERhYKt",
  "key6": "jZr8JgMBch1BPSsF1oVy5WjxTs3TcMekM76ApYkvRE29Uwrbs7stAWJdkeRWsH6iR8wgVWJSiya2eNmUGQfLvdf",
  "key7": "48yu28MziwWJbMb2Vv7hStz37ocKbCujD1uoWvG2Q9phR6HTRYQ1tcQ5XYxPgSTbStMEDNUiGjtPc24iwpVKSLTs",
  "key8": "49dqUavqVK8NaDGWoNbmBnNE92DAqMRKUgvQ7irFmknKLzNGcCkY5rkHduMNoJqRRn3SrAfj1ocM2W9VFsYo6R9",
  "key9": "2vpTnw9f9UHBeYaf5m56WVJKtVocKS6cJ6S7Fdd4V7F8WZb4S96A2DmTw87MnAzsbVUgksK3WtKdrhvkvDJjbama",
  "key10": "3ujVPoscpsBknHHY9XzdTUCvBTJvvQpiSTBCBSEJdrECn3n6UcbACdU4ZSN1ocYrxzHmyqq1vag8HGYHbHrzrq7z",
  "key11": "tZC5sPMcZFo9wS1fF6hvAxzExy3ZmGzcN6kPTXXZBrxN9E5YsJ9cyZNgNwrm8gadRYnuV7jAZzVGRezWha6NYuN",
  "key12": "4Bfh6Lrxxcb1ocA4A3LkwNjCAhfBPqRA17RD6DrtUjhpko7CdDNz5fZA5KeJxGW5PvFgCz5QUh6D69c3fJZGPWN3",
  "key13": "21hriEVchmTcFWok7V5H9kkbiRDBsRMU2jYbkcZc91dk53i5HBHNnB31aXtDsZux5oA4tTa4DqyFvFKKZfkFu18D",
  "key14": "42cDKU1fEaQZyXC8rqD5HbGNiDv9Khs5ppGGHgVPsyuARRRzMPwEpzAvHdtbXNvZ7not34NcPSmwr8Te5ED6eXtt",
  "key15": "53huv5C3PEVkZURMHdmJr7EtgnbfW5YF7Zwsza6qhXYcTWbbohv3eo44V9UQbqa9oUYzBj4k2LGCZAA5vhXXYjHG",
  "key16": "3Nfbn3VqfpPcbB8hSpWaU8VzcEebE6YYQiewt6CGpVPyPzcGrM3gHzqS7PcwRekrucdLPPqX4k9bG7KdsbR1GGFK",
  "key17": "GYzuESBAhU8FYCcsWyzfjq26y3eyyPRz4hEaQBCp2MywMnp9QfHaLeokCwPKmaXz6WsNK6wjTQeibdt6AANT53Y",
  "key18": "57jzQWCcF7xPpBWYNkvtqDXhts19vv64cq5KmrF56ogbxWNJifxKtbx1Wj3wnmmuQZSjKfRdC6JZufHxHMtftaW7",
  "key19": "2kidgu5HbsBSt943xe11MarLG6FqSex3nEvVdbisfmjhHMSa31CM6CXisBn64N4MtyVrDvbMiwbuqawQLrEW6Wfk",
  "key20": "5aGjA3ywMcR1pWJVxUfDpytCid23debAjCK6NYqkWy9kkqtWzQV6ULRDFarJBzqkZ22SSvRkhYqqtwPQLktWKhPC",
  "key21": "4SMpkj2vwovM8rDYcd3hWmiQXFWepv729KkrWQkmg2cuMLmH1sxC9HzyghpV8uuNucVeRK6jvvqD7ysw5yHUV8vi",
  "key22": "5qvMynXRFWXx8eioaecbWw3JaEtM9BcEqMu8WDibf2w8L4vJBdaXu5stWUTk7uAi1eo5WW3F9939GXPBYmJnLeZS",
  "key23": "2VSWNi88ou7zKvxxnqctcV2NjVXiVNfKpvVBJiUFTXS9kKmHDbpmbyvJtGrJGXiE45PpBT35PdzjkmCmVeyiUpi2",
  "key24": "5DPj7KZrifS2Z7CiBeWQTrJRgcMDnPs5hVs5cZpBE7ba6vtqzKe6Rg8CWxxmN2swiMtbMjKipbhtVKRwWLzcePqT",
  "key25": "2qPwiXzx9HnzFNdH8Us3iKR8mwP1dgobLn4PTdnttdwNfL81hZv1JGWKQb9aUcefj977coeHGEGcV94R3QFhXFd6",
  "key26": "5MCBXeDhJvXhcjSrMPB9uNiG9asprBueWCv4P5MVkYoe8scN12mbuupn5RQYZQawdpqcbP6M4FPyUW1LtCAfEyHB",
  "key27": "2Zs2wdZTPj2t1No68tPJsHqRfyJ524GBqYUZtwXzgHNnqEiyo3p6znyZUU5LeMxZyHdesbFH4M2oYzfdVDQUvdD1",
  "key28": "41XmkHdky8zT9StX2PgGyBi8YnhnbYNuVWFGUNVwCCVtU3YwJiJL6AP6LA4f3xCM7er3VQ6bofLitG8xJq9MWnkz",
  "key29": "2swDvNpBEHQyKTJmDALyogdFS5KbnMDZrgFhGczCEtpCk7muLkiAZyhgx67RJ1PVDmrv6m9ykyEjg7KUWBpBsiCn",
  "key30": "315KnrykLd3vBZdPtpyw4YNYzoHPfe8wordMnvPhVkHkd6bPPUe64k4hoG6FkGM5jRkm3yNMdGTx2qB7a5c24J9Q",
  "key31": "2qrJEgpwRtUCN4LfsFoJk2RQRLFhMHbKticgm4Ay2YxhZmqtjmoXMERhXiMKN3gDUBFDHURKaBLGHb5z3nAS195B",
  "key32": "2Ui9QwDv7StWyhxg8ZhQVY2n62aKVqHK85UC1JxEkjo4M3PQ5v9xb7AgaoFV3rwM5cjNjnxtdjUfmnVSNNFTatrG",
  "key33": "4kzWqCF6SwbgB6vGbiK2j38dnaifPEMmTcaiSwD7VEHBfCUXMghZ1DdWGVkhe1JGe3YpHS4jNVJcaKfa3DCad5cS",
  "key34": "3XDgiCDCsVDkFR2dNhwfEB3mS3VhtfJfWFP1b7NyahptvjKbgXEb3LTSwYCGdWGc7SB68J9kjrvJaFx7yRnfYqqA",
  "key35": "5j8JmaKtGbsgseiEqtZz2jCjJintdTW166f8KGdY8gNjC4aNjsZ5Ym1MAi9ibdrxVi2DqHWizYfEHgs9sHrZKtEr",
  "key36": "4H1fMz5A5aePpSf92iXGN43P3rifDtWZVuiQQY6m5y5K7qngUUsK4kVcCHwfratcobrPH6VKvwYBmS9Yv9zqFoWV",
  "key37": "52VEf26TxScym9D2fYPf7A5ZMHnLwajrkFKGsbRJdybCM9MpMHyURYkf14xJwR9M2Th4a4ZMJP4nkQjcwuPftjbo",
  "key38": "4YAJwkLYDTaZmRA2tW4uF5b4g1XibQBoRVuWRouA1FsLf3yDsgT62iGSsn86y5sAYHgbtSwoWe53DfaS9zaS4QsJ",
  "key39": "5LgzfQbPGPQ9WwPETc8iWCUVvrfawciP971DGndmCMN9VhXGrhnEVKA8mp2KbREXLNLzX9orL5vWiPJEm4AoRRjb",
  "key40": "47jaFESJaG7KpCQJc6HgdNRiximnqLChEbJeSpJLkes8Jc7Rx2nmdXfhJTYtxWg6HkYSi7cKChphabCWapqNxgN8",
  "key41": "3x61aRREBQujcBXBEi78YQ9yKHCeoxZxVootWZpasFXaCLcmURUticuxdPrGYSf27XLJef5Lc3vMicDFWPugyjGu",
  "key42": "4ssaqUk3dMdfeGykKRP3FiMmhXUuBCyMwSsHnZkQYi7b8Pj2J7V2PHHsUtycGZmThX3nXQ3JrmWnKwtavVBFBmsH",
  "key43": "3xqJUNzpUqinHohyEAwgm1fdZYAniC3BzuRPf2h5XU8y1x8twj88ApvUjTr7DKTmKApZ6jP865tggUiPnrZvdsmV",
  "key44": "QQHF8Mvw38hJdfKz3J8B4W9pEe2gF6Mk8r2sEBPKpbjF3RSKb2HMfEtBuWJziSMfiEKLywwWvfqCgLS1yXgsy3M",
  "key45": "4grzqzcLjkMp8HG63XEiFkBqjUJLQbQbtfr57QNzQJ9RZgZNr6WsbC4GwhjzZXdRtJSAetdibqJRftMxyGtCSr2h",
  "key46": "4dRKkd7npUuYyzFsLSRTswcjrVBzPunUz5weLFCrNFtn3H5ghagFwmNYvbCXRgeYPBoNwB9SXdEfWpXohgUE1DF8"
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
