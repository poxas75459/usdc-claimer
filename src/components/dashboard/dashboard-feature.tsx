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
    "4MCPUFd1EwZwf9YByWm9fSMevnyn1nkVvPyyXnq5RHKRo5b7g47i6xLZXKCahdwHf3522umFLodfAihM7j9xRu7R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Cu8mEpPfw9zDk9jhDLK4XtpUMi7dMPDTdzQaJc9EqcF33CJsLhj2xw2v33VziwacHxwY2BT5B2TMMbYkfy9KrTg",
  "key1": "5cnCPAAXs4Psf7Ze7mLLhYv2uddabq393b1jsVfk4wmX7xk1sX4o2qmsBRCwS82PpenDwKMAEBoCdXU1HT9LnRnG",
  "key2": "5jYxd4ChceZAcMigGnugynDZ5y3XtUx93GSifQ7qNj9GWRKx9ysUX6b4npLZ9paziv8sgAXuY9bsEDiZ6iHrP6cq",
  "key3": "4Zcft8fFuu4BSuMxdKWhphn6c7LbQfpWTQhATJ9h4EJP3HVfFsSEA3XK3vBRV7cSWX7orqbfyX7KrJUABdca8eeR",
  "key4": "MZXHqbZAsWb4bXv67AujHq5ZMvXwuNcZ94koujqVDfrhHzBQ2pTJrCUdUgPpzm9XXjHTFFWGBCmT7MqNgxW3dQr",
  "key5": "3DGtwwSRLwayZBTkzRuBwmUWDa9rHq3FaJCfcWSbuvaALy3DvAyGR2Y8xGx45NUEGEsPdKp9yM4vXDGn6u7s1Ji7",
  "key6": "pwRvFFaNCZizRraZCjn7DXCUfon4aVvDhiSXvWpwSFeAh7M2JWJDVfyRGKjSYeRugMVKserLjpgiShTrVBftiSY",
  "key7": "4qfFczSZh2TTvvczmbufr51yoswTA92iqoEXogJeVj3yXAvAAb2dq5ykoyH6ycPbTjgFgXv3mPjycnFEFrf5sHnk",
  "key8": "5CU3umWh6NXy6dVcyfn5iW9X5sST5r5i8k2x3VQTUG5NdiFq64LV9EmMRjcHDKdEjg6YW2u8PrmudhDvVkmJKb4E",
  "key9": "65yNB7XCU6hUDouXRdY1CfmxyBFLHKPv5oCmxwweyzZT5rLcVaNFasR6ftXTwVzRrnWYJ6VBPRNJTVo8eRXM45FS",
  "key10": "65SeTE5hw8WmD9BN5vGVin1cdkdfwpv1i5Sbij3RfKHcAqjTVUZXiMWVPpFMnRiZgCsVuNS25RiAYMpjkdtQPhrM",
  "key11": "3fXE96ddxMyjsub3RsSfaw2taQxPAJLaTaM4TAWg3SdXhKMcZSCjAwGTKHr1htMvzv46NgGhquxdYGXMMq42pFks",
  "key12": "2tXn6sZQGurTJeoDJZBPkEgNhZgNQW9EQZjQrseXxNLxXAGodtrbczjExxbYkJ9Kkxv6poDvzEKJpv3aKgtXpjwB",
  "key13": "5WaK4xTvTvA9eTsZRr5cgSyDF1XkJsMVqWfcVEuUA1mh5kqNPz52ZojhTixQz49JLmEyhbwQSEp1KwksYQnP9L3X",
  "key14": "3eojJm8fnknUDZ13XG9B3snZ3YFV6CJax6JfExAPjYJYGskfJ5USY3vCCR9qwwoUrKwc5BndECczRhxgumLBxX8P",
  "key15": "5xRFfAEUvFmWCVepGuQRrUqXqfdp9K8br4LC51TX5LQCHVt9Pu3cx69NpkdFihBdReFHFwyGwZ6vjLyEwGwkEp11",
  "key16": "2hvypQ6sQZ3XeB9NA4JrQnettbQkDAsSdnCyxGbGV1T6cD5KKtV3FwUPu9HRxQgKTS5AgcKKpgtrUyapKAxFBDnX",
  "key17": "642xxddtAoUXQzuXGXEwFfu7jVWUNzvXw6EEMb6x99Zk1GtdduyCBjdxDKz4p4C8Nfa4viG6fDjY6un4aEjtXpUv",
  "key18": "5emY7XJTFdjKa5jLfNkngb3HsuGH48B6FUqfTwkqgta54bu3Txet3UzHz6nQ77SgRTWSTPcTXHj6BS5CLeiwijsH",
  "key19": "5eSz4GzMpcRm9bEbWSWtkpnEq5RUhU8pVRyZHUbozPe68n76wZQFJPjgKpCRJzmXVzHPA2kVGm78UC5soDVeYabd",
  "key20": "43QaRmYuQFRtuLXnACCLqwXAZot9jtR1soJiyJSzaSCeg5TtotmGCqmtHpeD1DFR8U4E6V9MbYzQ1aUG834dxL83",
  "key21": "5zFkz7B632RjuukQm81q82iH1w5mgxRJvpczhD7WTbErwpcGaaGjg3XnAL2ohsLyAruf4xNTqxQ8GXu94kEpiy7d",
  "key22": "2hBG6xUdmpXGE3NaYKaCnA8guJrRrUjdWkkHqG79NC9U5dtRop1chEExoZ3mVD6HqyZuRsKH3b6vEfkYtrJDRNtd",
  "key23": "4oK9Zu6vZyiTr623mmeRVzfBx54jQ8n5TQtDvjCoFD5mJk2D5kbLm3EZs9XdjQeEmC2Y7ignxu8H6eApPTWQeirf",
  "key24": "q83gMKXDRN1nbP8uUDm32rnuWHVz6MszQ6CesAAdw1ZXR8okeTtzcZJPprGjKsxzSeuRrirFs5iK9eM6YQjS2Sd",
  "key25": "4UBF2991brtLcZJXgWooZY9gXe2MBAvqKyJZ2aSWiU36ynDixYdgA5peaqjxvHZsUxaHMRCsRBpKPgbT33zSodJE",
  "key26": "WfuruzNH8jLkLueaLqyZjnR8HQjyCTpui3HGbYVTTuLLGKbeygi6sDLG2NLqjnBQN5ZwRqy9DQz7VZyiznBennX",
  "key27": "5dY9za5Ec5wQM86iB5tipqCM5dDV3zaUVs5PqVgCPcgFpuUNFWRDsQ3AUTjMbxu477dEnAzAPWXRmRybpFoHeayP",
  "key28": "X9Efjo6vn7ZA2vrkMBeFcpbaWfE6pfrxQLmhDaQJugRsSwiNXy8NKZNWUYSJvDhw6mS32uDYYWj7RvkYz7cMJoM",
  "key29": "4L3kujC6vjeRuwy8Hzkzu4McBQuoaoMb1mL3qXqVQxNvtHqo617NDuYjjwW68Yw88khx6L5SEwvc7EpJ6t9rgKWc",
  "key30": "4Yd2UUdqYV9Fn16Eb5czyw4aTy6q4GcEfw3fQjGaynv69tbYKAw1HcfLJjDYWb5hTBC6v3MeNBMr3MjhRKiiEs4C",
  "key31": "9nSR5zEKGg4hisJh1GbKhSSxzZ9wHccygZvDMWBga2PRiUoP9KkXxsWMDZ9kxaSgeR1nvpSZyiWRodBbLAcmAXB",
  "key32": "2Y3FYJFpKdq6xySXv3psAodbutY4PxMVFkBDRqHGBznWfT7kHhKnJfKhfw6N58Bm9y4nbrSJ3rPLVCaY2nBf7ESd",
  "key33": "5EDBmpei2UfaVdJBSYsDAaGaHxomiMMBeiNomvqtc3KRZyHbAGMYhCVjYM2mKmWaLC5csP659nJmM2TLMrea2tEp"
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
