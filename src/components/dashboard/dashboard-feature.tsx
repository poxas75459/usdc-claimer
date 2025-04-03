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
    "qQ7cvg8WhFsWpCbHqxcastqJ2J1gpY8cxTyLSJAnXdXBBCune5pFWS3jxzByjsieTxpKfdkj4aob789weW3WoaV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5N29yvWi6pjRiraqp9Vwpk1CNyuvaRoqjJsMwUwJPbRQ7XuhYAkkPckHwCr8XzPmFuwKo3VZHxY2dNQmSPpBw9UV",
  "key1": "3JNja847WPFLdT9sWeQqTRbGN2kdx7yRvaa3m9BAqvc1XF2NujKKm4k5P2tSGN5C46QibQcn569FQscUoZPngdPe",
  "key2": "2G9dT2Yhc3v3jeYkQvjGATgCJMVVC42H2W3oAFCtuWTSu6eSozYb9875F3n7ef3ULyyQFed1Vz4KEC7eRZzzzc6t",
  "key3": "2FQWkd8Z8oqtbDdauQTBXRZZn4MzrvwL8hxLBb8NVwmRJzNfyNQgmxLntWr5WXfcncTWYp23NPSfvqA3HMkxHAvo",
  "key4": "3hg2NV48TxPMnih5DPjxb5qBror7p4LhdCpDAQbHR6vpehakFxRSNwpXMX25QfWf9gRBdhnvt7v2HBsBzaVg1zjs",
  "key5": "3uvL2FjijEKWexth2et6WHDVWGgdBfTCBe1DLC48cPX6183JjoQSwL4k3YhA4VtPpHpSgMnn9Zui8hQQEEsn6vro",
  "key6": "4aXb4V5A8WQPsZSkb9CSxPhaoTdGnYNGJdMo6qAeGC7sCT2wK2w4tuvueiPnq7ij6CwQfL4ar8TakPoqdr2sHjSB",
  "key7": "2cuWKQW1AVRWxs2RV4x4oWuX5yigLFNrZk5qLYfGG5EV1WGnxf3wB4Xjq4KAv1XjkHo9iGtkQ8cA7hiYfASMRyVj",
  "key8": "2fPgtD5B88PSGxTHNrhasVowa2JDFjYSdwGrmfMxmkQy8eVfKF2doLD2WETqphk6Wr96sYDdaJcX67wWQ81XdC9F",
  "key9": "gYwtYuwDcsMZsCMGxpSFAs6tk6ExcJmRBHcRFkjkaVXo1WNKWUDFqpC5k4F4xkVFuHdYCA3sjLuxsqwVymrECFE",
  "key10": "5ewGBWLEucdusmNdsSHoAPRnF1Lp1kQbnxcvN6hGavTJvMtQawjd2JYnyx995MxyTZ12tb6eKqGMFH172kEJF159",
  "key11": "4cP5CA7TaXiLgxE9EE3mrxYkhgYJE7JFTszghAT6wVJRoRd2fU2b2DAnTBiPpk8HuwXdpPHrVAPbZrcYQ8JM5PA2",
  "key12": "5xDVqhgQaV1cQXTa5HeVvkK8JhGaymJtbU3NqptwrqHRRkqndyKzAi8mJKFW2U2hFLDmXibfesis64KRWcCWLrYT",
  "key13": "2nxy6fxxGJEJjXqyJTTrG7A2irV4wNs2ByEvuafzxRecwRL9EXVLyncCmDrCYZWWTZbqPJ5UJpyv6CmPZUbjkSwB",
  "key14": "3K5H5rG5KgKtRPcg1kfpdjP7piedw223XoXqqchQVuBHhn6xk6XSjDU4HBJsBLzwtRZnsdSNYao1B8nhA8yBAqFr",
  "key15": "AqZdSgNhmFjSvfthsS42NP8GcfWWF8CLJV3cXKD1hN9hZPgpbsArtQ8pvmnErrd1KV5GVNhKJxZqkiS8z8214hs",
  "key16": "5nyoNC8YCnquc2vvqBNpwxctxRK582wte7nRF674roSqqjaEmt9RPDcszFLB7Pq1oyac1ycBFHqs3kkFuic6XiRz",
  "key17": "4hE5uLAtxe1nSg44UJBXun8EZp2YyR6k31nhg2W5o4KAzg1jFFxKp4xnAhugQw7nRhkFL55Z9qkBV1eUgBXYnCRo",
  "key18": "F19yh4FFMtGpz385o6hjJMahrcPa3fXYQAA1mbPXXuSibprkFpCw5GTv1y3BsH7i7QdMoPg2kunNBmPGF9XTxzQ",
  "key19": "5CaqeeWxS5KeQEZpd6tPiEopXgrXeFa6jqGXGDJwLksqt6VB6mHDL1xNv2dE9xdrpdEpjhcFkihW2Uyor3euhLwf",
  "key20": "5k1FVKexaKMK4QMfeWBqEFi4Dvqp1FyvWCaNrfMSNbbWNjPHCQL8r4WwX4D4wMq8AEmJCyhEBiAB5qkiyJdQJSZF",
  "key21": "46AGKoo6ro8h1YqWSNzrfFu5U7QVb6oAYU9PLgWNZPXoV3Twt79poM6hQWJAjf4wy9yai9beYMt92C6KSDfwmcEw",
  "key22": "3LujXV3ZDStfnMW4fnRqxiW7cGU8jXNNpwmEcg7tP7bJvSQCf7A47LmTq54bp8mgrTMQffWZkYFwdWPPE89BcNTp",
  "key23": "4oKz68hYDpx1vVoMRSk6kvC8FPSLpLy8BNt86ef7mXkrD7wwsDsT96yXebv17PnySZbB4zHpJzDjtzE2CcYYzmEd",
  "key24": "2f4SXfWfQ1s5Xp5rqdwb87LVRnPtbEzs9PqY1rsZcZTijvEhjtwEHZwx5zHzfv7yPisC7yLQzMeNwZM2w8AtSmjd",
  "key25": "4aSX2ntEbT73ETGRYR6ch8UGhkr1qGeFRMZ2RyQA3bLgDqNh34WKZZ1C4Ur1zBagMqJepyhrLV5pLeqMBaEsnLb5",
  "key26": "2hUA1ajtGzHR6Bz83VaM4ryFFT5efqWA2WCUEFPxV2jcq5aTX6erRhqscdMgMasKnZLpZVvu4iqQXcL4gKKzStRi",
  "key27": "4JyVYjcPDJ52UKbTvUF2V9ErRr2w9B4ZMcYEpJmbgUiBqq2EJJZq7tsmm8XKRLjdjnLtCogguQBrfnDWPUm5FNp9",
  "key28": "3Ynf1wteDHghbbkRiDXz9JhT3FWzYyLjUXyC5cuxWZ44KpDKGzowzcqDb57N8xAiLiJ8vaEe54hLjAt49a4s7e8n",
  "key29": "3ajRR3mT3RCuFvr2SA77bgqhqsv9syv93VsMffYmTc4F11tAsy2HhzC4JC1sJ6iEbJhyHKqMP418b4KLQVVjCqAf",
  "key30": "4medG51dpV4VjcpCrQFCQFmHXRFdzi1L2ND81RQpVAkEsdDBNQBEg1biVVAbm6aYGuMVwpDV6KQU5CmdTg4mnxRG",
  "key31": "3DMgyWV6VzijjoqvhWCkfWGZjFKZphLDzRQL6UpfZdypKyq87DP1J2gB61x6px8dTRVoYRaTePrXSxSveSBJqfr5",
  "key32": "2ZicUis5AW1cbsCr2xgxJBBfCJ7GtyLaxSin9ZjwGWjWoCkhBokxFSs7hsjDTDBobVXCWAjEakRoXmmHqvvfcmDX",
  "key33": "61pjuDmQqZbWJZ9GGcBNZvUdThs7ueiSugLn2fVmwjTWQD86YqxekNDZobdPpU6pd1fffmamNUc82Jd5ommXfPqu",
  "key34": "2rcVPzZLDhs9MEBbWBJw1txBeqHGsGWVhGad5jNAfPBGAhmZ9sn214TVDz2P3kta7EpXZopuv4RUb4Jbf6hjBaGn",
  "key35": "5dXxVPJoFX98eUndE87tZ4LR3GitBNnpHmgf2wV33hygM3ongugJo2y9rnvytJ3tMEX9KkfE9hxJcNcS4wmFFKPx",
  "key36": "211JtzGdCSBvei9qCjCUAo8zhttuGUweBQLyYYsT7UecaGiA2yBq8gLReGrkZi2vgJaKrWKjnLaNmVgawN1TS29o",
  "key37": "wK4Buntw1MByShjR1AXHm6MgpdAAsphwXZcCkErsqszjgXQoSEUJihB7AdobTHXmP8bdJdVCL1rZyPp548iJsSA",
  "key38": "2jNMjXxjvEkzDqjVqQ1gKZfbNVYjNfSJMjak295EpLdxi2h7L8Ke9ZZfUJPj2YiSYHimGSNCzsFdKizYVuqCZic1",
  "key39": "5m8w5pEtQ9mmuguspG5osjHZeSQmXi5eV5PFTHo51eFgtFtjRiHuwnrXRwdjdHpReXFaJFkH24WVMc2VcpJJinsH",
  "key40": "4Gcmsk65iqs76sBCXsgp25VdACQA9nhF4ye7oTbmvfFf3rm1zjHN7WCr9vafbKCBuAGWBfvKPmKKnywiKpRuPVcX",
  "key41": "2FeZupJNtMfkeKVPGnQBJg5wXzyLMihdH85Z2E8MFrPHzqGioxbeCzUSK4oGa8V8pM3TrZgDf44zDkBLRiVW6FfK",
  "key42": "65BXVBduvcNzFNrK6cdg86vHR3YmCTnBHv96dxHQVzcSNhBwwq1KcANRRMNcb7YRW4arxQs2ch5fGrjqrZ8avFDQ",
  "key43": "2uiYNjf8BZWUfpAzqBgc3KEd3Y8TpK5smZpDZFdRhuPD4TNdQ7JtoEFwFgsxw2SsZW5PEWbbHvBgybeLsLKU4x28",
  "key44": "hUVFwkx2yFFxgoSYQXx88E9GnG913Yq76RsZRdfWVwLU3gH3UauWd6G5TjxqKhxBLPbGi2zEL55rUZ8s3UiPiJd",
  "key45": "2qQcfVup4LhY41kaGZdhoidXAicfbVcyRvyeaeAZjbXCvfMJwXeJ61srrECQkDbWZLk8HNfsj6xTiNj5YHkYxB7k",
  "key46": "45NGdywYR6L6thDWrjyzey2ZdA8whs1rGdeHvQExjj5WKZBPu8J1Q5qRt3XyTMYuTDHKY8jGgCSD6vXSwLbBb9G4",
  "key47": "5rTXrXHGRysFFRDxSGH3S9Rs7ybN37EcJraopD7trRQCjStJEWStUGyCCjJsTm5mUBcyscBmCQ67bAfQMKuzN7ZJ",
  "key48": "2H2TEbYevz9P1vmMGQmVeNS76bZeCu8kNHs4jitwpRFmo8mXf4WitF8CufPCQErukTC1sQ47F9UnmYDi3Sq6WkFt"
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
