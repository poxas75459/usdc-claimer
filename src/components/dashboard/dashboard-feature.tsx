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
    "9bRGyXUUwhdcgfwMjrxBbgxfkzhN5EjdGotJHLeAQy6fDP8Pjy5sLYqZF2U1AjNCg6Uhe9LSkXe8EsmDiJ6F7YN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6YXCR5qmqVWkqDtsFwAG9EUkteP4nMDfx3tN4gU2Wv3FrWS41y9nmxajiwUEGPaZCMj5Rdiq2JZn3PEzHXCCsdg",
  "key1": "63ss5ajuRo34WG5pXjNXJLKhsuXb1yZEPjM8LN6NEFry4sVhbiQHcVFuwMqgRRfY28HBB4dDZzQLZF8uXKAqrUDW",
  "key2": "54B9QwxnHFgyyBVNVMFThLPJDQB4x1RKbJRuM94av3C7dEwCwoq6HKPpRxoqQ79EpijYmETGa6B1pYoJmEp7AbE8",
  "key3": "4FqwzGWXSa9wKc29SWSdeaSAoLCroY2PacvePYkzKceXH5P7QHxL93hw3GgpM4LFaGpjqD9Gh8RbQZFzWkCBwXcm",
  "key4": "BB3p7kipW1tTqj7CPPcwhh4fCbpsdc7FPDK3n7tsgVZ5MGmpwwcwAUbDGKqbLQB8JfiukfmJJ3GCXeGp1SjgNZZ",
  "key5": "2jnXTKysnfGUcT8CJzUgidGCA4rsGRE1AyKhHGrooHTt58RF1Gx6yUHGgUcWFJ2i3ieuLnLcWAwZ2WTMii5Zh7oo",
  "key6": "2GGHAs1UcawTrWyb3EZhD5Rwi9zareFdFuU7npRg3crqvDMmDoDdaGNSV2Az6QAwKXUTf6Zvca2Mi2gvTpkofgjV",
  "key7": "4i2hLhhbQLBaeg3apnQmeGMUcwcVJvQUVaXt22frNW7wPb8CZdLCuM7FYokQZDk4DKtqLtW1DvzqnYH36h55Q2pm",
  "key8": "2mNB15MaUgg3A1YMsn8u8ffNGYgfmpg3pFPoYr6eQM2gNzHzeDBwCjeojZpL2VzuChrVbLYHfEbZ2dE2VMo51QGa",
  "key9": "5PuVxujwG9xK1EVXtmmDLpMr53kcR3zL657dnxPJ256uMwUZrZASyHSYuNQey6ThmBeHLkXgAycxfr6HhNqEfgAj",
  "key10": "h3YpFDBTKuUeddfZox9zUCSfYh931LR9sYXySavaJkfWe8pniA2aq3R9Dya5NgSosjpjfJuCu9SzYwShypswyQe",
  "key11": "26Lay7brRqcwtis9XooNu7WKhjsd8AtSszLSiFHVVttturhP9paV2SDyxQAYPhgB2csYyuA6qzRq5DYBqnbh6dgZ",
  "key12": "5XsDxw3orjZZQHUqrnummYE67EH6KMDAVdaiV5vNk7gd4SWWgBphaMzBsRY2dFNL5fyyWazwAZvbdd7R6wikH7Pn",
  "key13": "ZK82pPn4egHPo3eW3T7MTraPhqhHjYFcpPe56ZzUNvm56bmwVdi7qgFUmozRbS7X8cDDT9tw5vyfBQYnv3rHjHe",
  "key14": "3rNHuR1YGhj7q96xyQ8rS2HZtT7AKTGRCKXz5vkYP1SKbbjNA6UAZ8MZy1BUGSeERsdgdeM83j9uQ2qGPugjKbRU",
  "key15": "95qHSHZKsUSe29WnggBDcDMNoz9VoeDAcz2w2nCvXKY9YoLMfXtosSdFEAntktGcXh1fvFuG1wxz4QuH36azG59",
  "key16": "3FcZZsYWCBYbW6F3xb8PaMiiWiLPdp97AfpYBr4K5rTkjGy7Bm3je1mRcxJH4KxbCv1SJYET3JfWofRFFHpMQvgC",
  "key17": "4ihUpL9xLVcJFzc4TRXSWZKRVtn2y24j6bWqadqHLjhuELPshUQzuutctidune6V1MzefSVZueCsNMKjcwB7U39g",
  "key18": "5nmRXtA2RKYgLnc8xt6CYo4ViF4FyqMzruZDEmh1CavtfYD5QTQLBRMvYMM9uhi5B4p6d7obBpeVm6WMtZQ6vwMf",
  "key19": "3y7o5ZpHpzEvFfc8zxiMNbeyy6XgCd11SgeeAMHSxYtqEkhv4HjLaqf1WnW4XBSNNspvb9K4H6X29pQRSu6rXNRV",
  "key20": "2fy6abyB3n1KZPo8RBpnGmyEWYQ7EWepBnWStreSjn7PLZjuLD3xqpdnGhFUpanR92QYUZuhxt4RCdcUXQyxgqG3",
  "key21": "8RAuQw1TrpSyfKrhBdZ1KQoVevfsnPt9ShCfEQgPTpfsdvDSd27v3fTBojpeztg5dZC6hQurydcVgTHSUQGwDpi",
  "key22": "22NbrYxCrYhegXfb7HdfYP6kDKNKd4AF2uvWWDVAHNCjf4ocAoh5RrbaDwHjheXqBXaVhQi7MW8VCHiAGPMPy44m",
  "key23": "3EEbY83ahBRYuAn6PAGvGpm8sqHTH8oMTGmMsVfuVmyGDn6euJipvWcHdzT3RQSBUMjbFuKYnuCY32KCaDGYqAbf",
  "key24": "36YwcUdUAXYXhhgGiMvjr7D52z8aGUdJYUF9qnQsLHHQSEAEFvE8JKURQWJAQYEmyLdedsJKxF9N5eeYzZfhhGQZ",
  "key25": "2wctKLhYCWvsWkegyTxyhyhysAGWEwhjNF2zWZDnT1q4Py6D9R2T8BmuzRHCCSwaXQKMHB6K3B9TPNAGwJwwbNFM",
  "key26": "uXZVZXAjFLkKvNRCbEWbezEEfe8BnZ6TpLo6XxoAPQ5iL1iEqS1mUfsUwSQUi8Y1J6U18cdj1VicgzFRtG3rGS2",
  "key27": "sVFc2MXNQSpWA4tLArg96uxNzWwnB8z4tivTQeTB3YnNCPzkLyzb5wj8gZfFrHQk6jNBJvbPkUZSEUDqY4j5dFd",
  "key28": "5SLepNfiWwfcN1KLPpwim1jcLPRRUMtDH7gwws3YL55TFvVGbR3dg2D8zEycLfv3PX6zxLz9c4X78dQ4B9eYnGxQ",
  "key29": "66p1kYpWEcU7D1eVPLZUinVzRzbiAeiaTueEsfwniFEavV4Et8GrjTTAxNcfwd8fkvtmaRFL8kAZEnoHVV5pYZaD",
  "key30": "U1UX5XCi8xiVMaDJpcB6TxeBpqPkGeQNyyqwvnBjpX2w5FctVHtQTuSKz2KuF61FUa5BvVbPENQdSGVA8H8HUUG"
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
