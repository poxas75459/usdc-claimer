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
    "UtjRMtufQkf52Dg7X2Gk1oPY7xRQWSgchvHb1cQmFohpm93bUBh82yYLqityvnParzEoHRXr47Xe8JjUu3KJSUE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "R99LPbQzwYmnXjjSxjzdLGUvszJQ2we2bqJm7Yjz7Vt28A6iejN6TboGfdDfstHLUXex1o7rhCBYJKWJXs9wkQe",
  "key1": "57GUmCmasiS6VnfKD1xHFJWrwq4ahwhnyQAW9YMCmZRV8e2gU2qkKnt4rSVJiGUxgeEjReuxL6zyfhKnLjoiztVF",
  "key2": "4jSczEx8Gxi1fDyhX69rvwMTEMds4ZSUxou5kKqvzQk5MKX2dmVUQy55eXtPEbjupJoiQdP1UyQ6rcaqwhbvkggr",
  "key3": "47XKgmZwGd7w2Lxj27WAnW3m4K8L3ntvQdmvM8qXe86paKiv3NxhCjtx9iHwJpYsYqJvDN1NRKnP9RUejNoGpYhu",
  "key4": "5o2W4bUsEPwNZSxFLdu5Um1LJWB9x1NkDcEsuA9Y2UYRnRG3YauZEmSpbgbmtNBb6a6KuhnFyZoLtGBVrc8zNCku",
  "key5": "5XcHrKf6K7qhZe8Rus8y8Jw2nNu6DGnAfWCDQjHv8mAVWaQyBGspfGW7ZfRHMA2Sy4GDfwBoKgb35cAa8RprxNgY",
  "key6": "2LQVF1toGQLF9cZ6M3n3AGSZfSm8AFstPKU8LRS1McDWt1MKVPtVtEs3LR1TEHr1HjCLJHXgWkwGVn6b2aUwaZ2b",
  "key7": "53sQpjBM1NBCJsWtjRrPLwUasfY7ucGHzwQM2ydBzHh9GE4KLyiR8JH69q4fo25BGjXbmsrm6nVzvF63FeByr68W",
  "key8": "2BTWkdUiK5SH7fMMDU169QNde1Tfy2U3QqPNKPk65mE9uW7kwxrGLiM1FGwxmfM28RxQTw4ARuTXDVXqFWJxvChz",
  "key9": "63faqiATYtc67hTDQP65CCCLeUpewr4xbJwfAyMRqebYSku15Uz7GgYdHrefSw9rYVBrYfNCW73CpTmJL7A79WnR",
  "key10": "3RXVGiERMgcPKPHFZRUHfLf6um1TvQWZAQm6VxrsmpHaKpqZTNfCLUQDFEYLEZF2HCgDBXv5bjyx7HeQoGPP4mCu",
  "key11": "2W7WCH6X3TR2eLS3cdCefyhcGg4vS5hpGVh1cUJd7GdpkbHcfHF8eF8RZqybER2Sy1PzwoYEpYmFxH4zh88yCUrA",
  "key12": "2feFgTDVf1Kms887Zg9wQjVkXfrrc8bP4DyeFyeBLPq2gjo3N9WM31Fx2tiJyhkz4kSUTxYFXgxcvmfWH4AKyzo6",
  "key13": "4HTydvMuKFwptGJMhYnhtSxw8EhCk6wR5P18jjiZwrCQi1rv95DqFPZqEALJuz7rbPhpazq9jBh2wokHp31VPPs8",
  "key14": "67Dc7XWWVpEVhehsrzD9XsojT8ixJRNhbCFq9LcqJrgcbsiC4Vv5QXWHMa9EqJrQG2GQpAKa28zoCYEjHdbFdFiG",
  "key15": "3gNc8hTPD4bKL6yzvLoXAYvQVokgr6TKPSz33uC79cgKQZ8jEK1rBHDR47agZPUbMYiMNg8uyd7s8yWKijSKwyMw",
  "key16": "4rJfk96v7KyAZ4ssytwbRiWczJoPwYtA3ogqcxuNkdLQJaZJwarXYxuiy4FPLn5c4JXX7hifx2w2BtX5BjNeFhPy",
  "key17": "2GzvhUzEzNoa3gPCteB8kMu7mAzPab93L4ub8MUx8u6MKRz1eHMfKXgSzMz4nQCvA43Nxa9mWV9xCbdc5WsRRQ5z",
  "key18": "5c5QtmwxCkNBaWyuJLAQ9eKB3Yy87RCJVZNerjXkigCcfARW6gsxQjVtiYweZP9ycRU5WxJZoc1Y6aLXcfgc8mnX",
  "key19": "38xDXhYPWMD43qCNUS7cLMZyhA5xLQ925LgfXzVnygnav1hazhowUvGuJyEVvRNYSbXwGuCLQw1d1pHCPQmibq92",
  "key20": "64vTofjXheKhJ85wWnkdaE5tMdonuRvAUoCdPJ3DRdmbxvMkbDXrrFmUDMMBFMv1R6hX3423R5wUvQB9ghuNT3YD",
  "key21": "2iuTQuaCKeJQhe6Z2QkhSKsFxvrSxkocbF6yFrFGaQJcBr411LDsGSgHnntexbeSSQuz8WNNS36PaY3pKZhYhnof",
  "key22": "29XTWpBkz38pTK2rGDffqePFrqj3HrXaoGpVQfeXvTvjE6zthwEPy5gR8aHz46FowioPWw3hzBawea6XznCXuCYW",
  "key23": "ihXKENKD2QpCZQCAj47EgrJLTLXsoWksFL9HydH9XqNxgbSLeenroaN7jdFW6qke9HCzs4NV3DapsshVVy6Tomt",
  "key24": "2299RDeEGWVPrTedm8uHDd3H51ofbxNeuinoYpxZqmYgpbq8Se8FMtK4pib8pDDZq99fkWxBqpMhpkPBJjEWYt4a",
  "key25": "4K3mUVXAfjN9yngK44mKQDeKaqFks1QwBda51Qi3qoPyj6HP8w2sqWqCENgraeDxMMkEsp8Yh93qDNCt5eQh8NDD",
  "key26": "dgTRFnLaXS8duw49ApRQLUDDX8G66WSKTU4uBvezMEwPEegY9Xy6n2XDDreo8JnowYbQijavyXHB2uVsa1FkcPZ",
  "key27": "5XYAhg364YjU2NqPXDyV7aD8N2BTc8DVzEEfJ3GUsEWjJgb37kHn9dbd2y9CDFR2cpQbrfefx6Z4eTifn9iuPVZS",
  "key28": "2fkwrN87SfBosnaAxbLdjhWAxtsmRLwLpGvV5DNqkJtgfrzejjVKKMuYDfRgcRcWLrsdSvw88d6iTm2huMvsup5W",
  "key29": "ky9ZMzuQbFDyqo4udLXmJc5ntyz9TyYr5Ci7UFv5QZTRUj1fbrQ5FzifbhkQ55j4zXEpnTpEwSGVJa3aqL1ZezL",
  "key30": "5J1H1z8vTz3hwbVn5Feg4dwQMTxTLryYGYwfeNevfDBVA2qZoPc5qegUd2Y8uYFb2EyHT2qZWEZcmqjG5rwmQjoP",
  "key31": "44Au43qbyms6TirgxEcuddir1SMyEDAcqwRK5Z4ffc9TV9cZaJ7FiPZg28ZydZtUmNrqnaGzYu19wuZue5yev6p2",
  "key32": "53QrGy8B5DPmaVfLsidr9eQ6exZ2CdBqia4NKaB4fG8AGLoUwq54Je2VFCbgfZgre2oCYXdUVG7t4PeYLJnzFUSc",
  "key33": "4SFg1NLgLmWcUNe8av2ZdcjnNQZ5pdb7sHYyWJJ1ExAKEjVf6ucs51QhwRciq4v9tYMW6JsghGwxVPMhmHwZLSw9",
  "key34": "UBcpZPBqqncEMP26KjiykdorozW8jys5F1B647b7fp8oh3uipVTNmVAnrzoBkheT2gHvnnPefSYaVgQDwymjK1g",
  "key35": "2JwSDLwVrLokbFpDE3rDhYxzCvkzLPg16ceF4tcXzKxvYTYbpNwbvHb9WibCkVUpmoCMjuNgNX1HfetQnC2QAXuQ",
  "key36": "3GNmyMTxWm8CvRMSntqrsXw2CQoNAcRJGamFwBuqBS4FNzNNhhLdNFKK4AGEh3yeBeYmaicrrdKZUjn7LsUt71WK",
  "key37": "3fbxaXvoiQEJRhH1KKV3cqd6ECouFUR8M3fVkVSL8zks4QLvdLuyJupciLePRXns7BSJn83cGXyuNvSn55t6iD8G"
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
