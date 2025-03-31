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
    "5xzAi61Gy7tDkb5XtbyBjD9zkfFmDjb4yx6VfVzFDjMEfbe5cWuW3s83YHyx3yKU5sd42qbL5TR15Hq844hWCSk4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KxRykb6oGEP7CnpMe8d5kyBgkrURjV6SU4FuxxcNUxqDLTBhHMEu8dKgQqQBayDtE8nPo6sCaSqtSusp76wRMym",
  "key1": "5UPfiXwGo7gTXst3Ccavtm8bZUrxPpdAnmJzgUBNXrsWdKvTBRCRAXCfLQfnC9fUezThQaqX6JmF113sPcECmxKu",
  "key2": "3XWbum1hqm8BiMmHdBMcMkzM9xjvnxV9k5KLrPvrKQXxcj3dda2YUWLN8yJ64dLMvA365hBX5TPSwYoneUxFLKLN",
  "key3": "SGBUX6DS8DXuk3jAc1RyZsyfuhLxe4Sy6hehmJMLh9LzDsCxMK6PAnR5HxpjPGhNqNL5S2u9a3hLAFtQZMGQtTG",
  "key4": "3Zp7YNukjefJ6kC7SyTpx5kvUSqH48sTQitTYG72cc7hY2oNb6eQAn1B2qTkNqT6K37wPn44DGueKNNJ2dUGzs7t",
  "key5": "4EuWmhBghhFcEymNVQznmgw3aogAA7C9fRspMcP3SDA1oJPvx2fcaKYgAx7Ugq6HMXS9mBM1vc7oMPd2t2b1bEeD",
  "key6": "2scPdAYgsJ4vXYP7npFPvHsq8DVusEtKTuvxM9x9xULabpLzKu8d1VivVyA5QAXTqEhw88ate8DiVunbVuv8P5nP",
  "key7": "2wuBQAUERhd8yEBGAxMMGK8Hyz8mbc73LSaGHUdUZjFBRoGXmLFhJ6k8sJZ5e9xr6uPySWhV9osNdTPUxUDgx4Fr",
  "key8": "2wpbabqN14BrBH8zLCVU4f9fNUJ6vENiRRkqaq2M2aZiQgkyV6g55p2toxHnjTGisRggNW2AXawBMjYurqZfrgCx",
  "key9": "3PsKjxXeB4A4HxfCU7iTQpKugaEijjEwQe6e9yoHQk7WE6ww7xqScLPhuDfbnZiDvXCFojGo1DRsLjxLesTFekmb",
  "key10": "2mdWKsgNCKXPTwTKU51vouywWhB9Goz7wXbjqUzDp3mLbWQVZPtPoMjKqJ2z2ohjAAcDZxpjiUAyqGDBQeJaXwJP",
  "key11": "Y3F9bneiysw3kqVSm8wH4HY1kyCTKeF77P3sXcAoUmCkJQsQAViQPSZ9R3uuny5oC2gKKED2xqjSUQRVytHgxXv",
  "key12": "2oziwE2M6jM2zc3oP44YGhuZ9YTwxopR59Pf5yniY5RxvQELobeZVSgrL5sTiM3TzPWSTJpGh7j7mcgK1Ub7TYGr",
  "key13": "jmKXvDP6bAW3PpZT9YG2myKybmiDn3bTr71eoSys9u7xRQR1jbq9s1EQwDAFMyuU34yXWkea1AjxjKM22fWf6sL",
  "key14": "4h6ciN4RQVp1JwdjeTtsnN1rH3q7jRtLQeTq6gffcr5VbHiRGETA2q7mwBzLVMQbhDHT3oUx9kSkC8EUh5jLMZiJ",
  "key15": "2gvNzMMxcj84dHzo6x3hgG7ngcFtKXZMUg1q7w6vWh9eVEQSyFft4QsUTvpius9f6mK2KGrL9fEE1t2DxULH7jo1",
  "key16": "4aQfCRSt4KyLQzJMjyppk1uisSmnCXsZg6hndK38Sc1HXdsb3Mj6YFwEj7UgKTZSpq8d5tCr5ieZHogd5sRuVHng",
  "key17": "2JcayzxYXcnGGFwpNZyH9KmjMaxVmqDFzbK7ATojzJ3iGZCvffxR9LBHGLbeRtWJz8dzeaYJtnmgQu2Z5KoAXENZ",
  "key18": "3doZoUT4G8DCadtGWxGyeAkinaTj486HS5S4kpXE7qr7UaQYHUHj4Zsmg7jSQhuXxUtfTACPKRhkZug2ojjV4yCu",
  "key19": "3WYSbe8c1AkkJmd31Xh8cGqut1X4f8ebUFoX4AFGGWpkUwAxYyyivFdbCG396FWAN43XSamiKTbQqiN4Jb3wJL5R",
  "key20": "4NtE2iq1eTckV1D8j7o125ThGtPW61qArhoihqZsEzk7FK4B68x9dCkCQk3JcXw2PypvaKrPxf3roxncXqd66fGh",
  "key21": "3mEbCDd28GJyA4WZnBs54sPiuoWGLn9HfzgxhWm7VYCpEdkykkwVnwKpU9T2CyBbXrL3aHiDTVXKdh7htfMFzcUc",
  "key22": "15D5nM4A6LFCA9HNZftmejx4iq5uC8tbLHYoZ9AgMsPbDWDDpV7Th1NHHf3Zi3p4mt7cmraGhiAu1huYHKWyKZ1",
  "key23": "65fK7isz2yGNbLFA75pZhEnYkygayMMYoPUxrUQztsj84M9cugvwvXTHC7KZDZnNv7jSfHZqnEGoxzXKr7zjZPr8",
  "key24": "34PBaHjLF8KC757RahXpMjAtQaFEDp1iCFVQbofjbXmayXytdt9252yxrdWr6xEiKJmUd4CBdujUiedzJTiqLgz8",
  "key25": "2EhkGZPbGRKFEueYnmjBAB6FnYWKRqWuxF5nc8mTFEcdL2ZqzwWcJGTRehsgCbwni7KeYEEaE118AE3tu5tvaRqC",
  "key26": "4MyJenpbGwRC7KBKuAAau4huKy7AiEGW8zhsSUdtoWGpXsPknQpU8jTSxuSWWNoZr4nJuiheKs2wBBYVTWCFfPrr",
  "key27": "5sKJk9gNNVxcFr8KodGbSohLJvW4b4hUJPNhTgW1RNUJbwsg5532GrrDfdMpBJMxT84P6ajrqHGLCfNS4u3pt2E9",
  "key28": "2oU1kQHUuErCvWjFCGJ39gx1hehky6RfkKtnemXZjyHLVp7As8TRFpzXcwiNvVtkWg8ms1gKni8mA8NgxQwPXKxn",
  "key29": "3redSitAtZcN1FFnLJYqTCbrRUpkdMin7ZvmxEeRsWQfkTiV77HVtyNypkbkiKTwYqjcCm8Y59JUbKwBLVrGP7MX",
  "key30": "5Tw3AWVk2KJXBo2E55YetNAjH4no3NCDD6HWFtjienH4f4cpLwiasoHdU2hEWS4kwr4VYWnKUdGDV64sY6o7NBYt",
  "key31": "3vV9sqG6x4svStJew2irygxjqL8UHgC6H2c9BnBQfR7BbVSumGKNNy6ABe9Bein5CpL1ydGJ6kqeQKwwSxAcW8wS",
  "key32": "y1q8J7aU1HzFf7Fj9YkfhiWKZuYVoTSF9dxfSuUp9agBe9AbdH732TVapj2QVv6Xr45zUfB675UNLNXtbVBpewL"
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
