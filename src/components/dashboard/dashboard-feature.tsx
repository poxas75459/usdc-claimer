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
    "4itSt1CnQP99SA8XvF7Q6odcAhFxQFWmrxqFb9BE9GvAUkw4gfRcyPDicHUnrJbgGaPMjTn7xUsVaAgtFfoZRQUR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UXMzErC4HidZDiUf3WHF9gbBqHyrHY6oyUCiia2Uczk2eGS7GroW9kwTKib2KYuEEcCouq1WNpEnZ9rJuL8H2tx",
  "key1": "2ee64rFpr3jNGb93JRksCmHhLwE8P38vF7fh56gx53V9pB5xAihTLDjE2pM9yw6KicTsvK7p4n8ek5pAuKd8sq6y",
  "key2": "VcrP1GPPPrBUGvtqpAJsBvgdw9EjSAKo9wUzhNmbBfGtA7bHs4PUGn6BMr4G66Ar5HVHtn1GxFm2Dxga9dXKquq",
  "key3": "3vDF9aGTRznUxnVusQRKw5hYu1nxbranQhpwErrty4mTiA85HNgQKuRFgH27ijyh5dm5UjavkcGeq3HRV5iqPpcJ",
  "key4": "3PPGyLcdVzr4S3xbxoznep4NrAszJzgqb8EM413GmonpLqs9EV7cLVhWT9GHzv6EAiqPJKotQA9KViQ1r2eK7csV",
  "key5": "4rD47yWEzsB4gic4HvzZ8Loiad42RVrDNMAzT4xv5APntDYqf4t1zEEsFzMvSrR5GN1x1A68YFCAAJhFTLVNiD5o",
  "key6": "2mFHQ17FY4uKEUcgZHpxfJGEKqPqhMLBxMqjmZq5bfcHHhjq2Kg4zt5AafEsGK2VAai8df1aHTXqmSRjBum1pAVG",
  "key7": "58U4g3frxHG5FFhRueXy396mGj2avUTU6HmtYxjz8ZZ2WCbq6LxcVLmP98LcRTGu4Vqv9U78KQh6KSTE7w4ZgAgi",
  "key8": "66XTLWKmz3c3CunduwQbU9ohEPBuKnurVnbTwuQWz7Bsr9vczWDXu55knyr6CYgY9BjoSKXzoqs6F4LwW5XvhcKF",
  "key9": "2A6pLDKWagbTDUFm8Jx3tdrZBQbEmZUMhswcHFp2eym9KXP8fDvwwgWkNsBEKNAmCreejqJNYkohgdo7gaHcm7XA",
  "key10": "fKF5mBL1L8BqxJZTRVnWULTj3S9SKPY5wCHZSyC6pN9ZLhji2EGyktfJoPM7VigaPC54ouFpXMuwkGs5jN2oxhV",
  "key11": "1NPrj8W9vq5yjkSAoHzqXfyNL9iPqdavJz2cKRFU7RaSqoPWxmvrqtP4YL7ZrZN5Kd13eef4qWnamhLBfuYa4Hm",
  "key12": "3PNBSDk2NBjwWox6nhwuS6QjfA6QefjWudhtoQdSJjwZsYCR1M4YXGmiYiyfCURFBB2mtDV71Fxthte8y1gdPoCV",
  "key13": "4v3fPyMXbY6gHScPXq4spSMNBqt5tsKNTg2YmgrdDvgqWKT1KxR96jrdxNzq5yoSSXMYVD5EcVPEbDgMsowiCK1w",
  "key14": "61cB2M4u7m2WMNdY5n4NcmDWekeTpGXCu5cWa7qZWWoSbkN2m5WbF8FuGCJM8UwYrtMqmmgtPqKms2XPau3G4h9v",
  "key15": "3jmXEffYqtWj2T9nNYu8zQXDD8SkffYVMEvD6SAhhzCg6uAvaC2PNaVksUTjA3MXRYZTLxRii99HfTdCyswp94h6",
  "key16": "2LVDbWEr9XtZGdt7C87LfZfNiKRXyUiUaht363MEUCz9EPHZcAvUa2neD6xgWwdxvewXvMakZi345hVECkQ1khQg",
  "key17": "3rqLsZ76HBD4HV4FPxYJxkyKgQAKTDA5phfgPaFqQbNmeoaLYqNtfPRg3jdCnQGsAnXr6FJD7Ay1QSuZeMaks4G7",
  "key18": "5FaeGYGiZACxTnmwMw5zsHDDhLc2zrpkSxY7PAiUd5Mz5xsDp1rNt5M3LRcPjGQ18f2K8LigSUjULkWinc3idMwt",
  "key19": "5mCPGWu3hMjeF8ifk3hpx3nKrJJJ43EjczQAyNvyprDA1Hg27vgjjzbQVnXrtwfkJbvF4yD78rpMrSt8h132HU9A",
  "key20": "4HAzFhjZ1s1km6eyp6FvHTSjmM4hDwCxRA6K6X1FXKt8HLMFi223eyFViY2FQfzaW46VnhoYRBQjgefTT5kS6awF",
  "key21": "UgKYWmfM9ZjQ8nXEdFViomA65572eiNYncstvodM1PxinvzYifBWEkrdCeacURtq5yQCdn871AYcPHWqiWQAMv2",
  "key22": "4jG5bbJKLACeoik1JiS6dzCRR5oCySuHYHasmDtHy7dgLvQVgL5PZk6SqKs9B8ixEdCJUskrrHYoeFMJVNX92Bxg",
  "key23": "eAscna5KPyMudrAbsb6dCRWy9DbYW9nZN6v4Cx6GZH9AzRySeSycsSeYFquNrfMom1ZSZ6QLv11giGm3YADTsj4",
  "key24": "4KF3tkjG2Rqo4Jbq86K1xToKKDTedfekWnXNzpZhoHQHiBmXuKptrMa2LKVQhtH9w6Fiz57f5hiqpMZoeCThCouj",
  "key25": "4GffcvKCmXJxXv6KxEAcTPmdMVJfd8M2HHni5UJ8d6fKaHFUW5DgJRjvbbxziXvhEMRwLTFdPhGLaJpxn5XzBUcP",
  "key26": "hMbYzWjT1s1p4HzmCjMEtE8fSdMgubtmnKS5y7hzRskVadqRuTq5bFSFCFpehrF4DuGDL4uCLnGHRnfkh6P2Pin",
  "key27": "3vd96j7zsXjzk6hZnNaWvUJuHwiYZ3S9MWE6pJEVzn1oPeT97CSzrDDeuW1YPWNd4WyWKW1appt2BMM9Caz6BCGS",
  "key28": "54yXh3avj7Dfj8qLP9RNcmTbcmeFLF6VNHifZr2gCQ8qtE8UBfCTg45zTmCdUW2QjZB5hpEzaqypBusZ98uvkojB",
  "key29": "yPRkog1RXr6wwUgN4BeX9ACFX34yYxe1SxsoUHnzAQq4M3nzcVMc8N5P3fipfcyfbJ86ETTbgMQEeBG49dViQTW",
  "key30": "5yxc7hfmo2k6N84FtKBqaNx6wJWkN6v7t1Y4mfXw2JhJsaHBmSETBNj9ov7BfoXjdpTUiPFgJRUvHj3zuFQSGL1f",
  "key31": "r8jxgh2DutV9CSMmQEQhpMcfTZ63s69saPfUEzMpoTxbreZqsFeTpbqwQbjLdR44X7aem5hta6ZPS3nnyaJBX2K",
  "key32": "4guiNKp7tpXKcV4AKWE9HB2fyGeSDK4j5Czu1ACG3MRoHWQYYqQno24BCwLced7mgHn9T5ku5Xr9rvvpQoBhTuvi",
  "key33": "5npbjG8nYwQFSz9FBx7swFJyjJYgnEBezSweRpyRo6gyo9UkwfWFgQpvSDapjurkVis7H7WXWGmYggCJdnyVDbi4",
  "key34": "GGAVV4Dph9zkaCEddFegGsoZh85oshnNUFpb4fj6i7iPRvD44Pe6FMJ3cp6KNeqDDscCrMkczDvUTy36vqoUFZK",
  "key35": "3VXv8sVtpRh5nQJZNY6o1VY1wAP8S795A3zFqJFyuEwMjUZ17JBQqT84wq7Ais9aMA9h5yYA2LT2CJ9DonXYx3jv",
  "key36": "rUCjZ9kVB2DDY1v7MrEZnoLYdFW8fCjKsif78CeYEBZsoT3e1U5hvC5waBKZXBVcw78MiFXmbYAmAoWGjFVkjNa",
  "key37": "Km4338ySyzoaZewejNK1maMvWLfLrQvyBHGM1gQ13zts5NSNtcVaBKPAaBg96bC6Rf9rqA9FRCWb7hPbe2JPayV",
  "key38": "47woJdTxTgrrTi9BwEZ3w4QEvybt2aGVMynW5eaALN6ZUuocziP26BjxmaXz1SGFCvVAXR1rJLTuBhzUdEhx9Jir",
  "key39": "3ijQYcKDVrdN1PeYdFLSt9tYrKoev66W6JVgpUAxftHM2couTiSQ8wAvxgNA7ngrzx1j8TDTca8GLDS4cWsBHC5K",
  "key40": "5XCyGNt4G5bGY9gVc3qNp6L3kZxYaYzQSzYd3xsHLJAfPiZDmAE2YTzQPKUa5pgNAARF7iRcrjuLpUyc7UgpGbtF"
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
