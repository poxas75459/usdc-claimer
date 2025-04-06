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
    "5QTX8911x5P1xzC2VGqcMbBPMdJpszpRgRYZWFhHPcBDrbavbsY2x2aWJwRdjM7VfeAPFLhR3wLweN62PBrFKWvq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rXLGvCSBwNCxeJKVxKsADTs9X6RyV1UZ6H3SYpqM3JwqvvoLiRShczV4EoibX4V8Wm9hDbomMV9FHESjC5jHmc6",
  "key1": "51aypSZyEJCZfbvuRTuSYbPHxW5YgkYfboJhaoh4EKgGToBCTBe1aQNPugjv2xYVNxZBjqQkmroXwhLxU14xNA5x",
  "key2": "2fkLmqRPwEsi6N9EqVXR1Rg47joihcuvNobXVcuoNUDEqW6S5xAB7kM7ZfSXtYFf4FFB4EDPAvkc49yikJK9mFs1",
  "key3": "BKJqD4KSrTMfPxiMAzNB2hoM1pcKSSWSxhXsMQA4EKm5JnRtjvC7kbYsYTTQehXKaFyHWL7jyv8ZwP6YS7NDhRf",
  "key4": "39SR5SBrbFWBaZSzs2AMEHXoNfybHMuuqXEmPvaTuXKnomBw8CgJHbxvp1dcCSBDtnZroLUgbJaL7RT4hTQLcLnf",
  "key5": "2eTGLmLniwCDj9T1vjCs5by9XARoHy3sEtNC94XXFueAUrQFxoNzJWfU2kZvCDC1EAhTGrSc2zZwGDfKt4DLcrK",
  "key6": "3eGMrB8LaDWG18YEBhU6NYTcMiNApMJVGYYdR2B3JKmzJHfcbBTxfo1g4gjxfCo7qGRdJmtehUXr6dvwEJ3WDsSA",
  "key7": "4REFgALfKkdmdf8NEezKHZmQrCEVxsi2E67pqQXNwBNRJHSqnkHxcH9vMYS7KgpuDKYoVaR63k38yZRJhrMqcUuW",
  "key8": "5nameDvXjv9VwfVh8QYsjAnNy6276ZDE451iA2NiVPHsfR6UxyG3c7tcC5iDvXvFrvRpLVRyQ1QrLWq71YJzWT8C",
  "key9": "2ZMDNCcHhgibtdQHVoidSDyoUNGshgM1RM1g3C8cnqn5tphteEMAQY6CPnErXS8bGPHZTfwPHAhiymiGHiuwgLq9",
  "key10": "5mGbp14zVeQKPm99R7MC8PrYvfbsCZPzQ3PU9b3wz7FdWcTivDjsa5cBaiAKxwerpanN4H24YZtm7ji4a8csRZWp",
  "key11": "5J5Z9Lf8AqEVkcvUZWkpmoeM91zdpuSiVVkKmKE2Y9Qo7hiXcjeYksTWnJ72XK7PchzM9ChqQrx4Ndd1VF4ABcka",
  "key12": "33qaY1VsgM8Ugxm4SjhuUCVYBcbhHgNiXVb5bprdZxKhqG7dsKfPcNSoRojEsZUmSA7gipiM2p6g3KM3qURSWzYC",
  "key13": "5xnoPMo2xsaqnrwEAknHBWyXiTQ5yxeEa9rqY1V83Eb7TyMv2QrdfVo6eJXkzRuG2stgGoJeBaZw6DfNBGcyC98L",
  "key14": "2PR5Hf6z7n5zehP9xtN6AngZJCsXk4fN2a6Cp68QFr31AhiFo9qgzUMghV4tvQ42gXn434kqwXtToHB7BLfExC3o",
  "key15": "5phws7hkqjCzFWaXQEguqmwNVQ6CJi65yvhgn64J5r7rToLumL5ETH1LbkdTW7mFPBBZf6p29u2sCddZYGQpRHsv",
  "key16": "2BXsHCfEjamXkdZg1bqvEfSpY5sBuzyHeYLGgpKStZVP86sahJ1A5basArWsaaoJkJSSPHZtw9wVu4AUrYpBwtQU",
  "key17": "zZ5o5LvVLPvqpXvBpzPKVDuDiYpJDgJWgo8iHG2pxvJFLK7S6aT1v1FDZdaX2qFKRiPoZKZJuNtMqCkmZiM7tdB",
  "key18": "2RrWu7hvKzJ7poVdhqU5tVrAEzf85zWz1hWvy87eKZorMVqzamSvHZRzCgGyR6AzUgXedwfubE3VN1ihcbyM3RQc",
  "key19": "4wd65iKfRFbhR4U9BkjpkwNvoEXXXGvnQXXj7331VUmCmckXgnqZHgNZRfw1kGTMqWAAyVNDu3R4HfXteXmcWoAb",
  "key20": "pxfXcECjBgdFFXCNrzz7C7hxQqdHyTC7KdY38u9prZ4fDKr8epaDgSjSJafKyBtFMHsNda3fNPTqd5Bo3DUTJNL",
  "key21": "4aCZPDNL9Q6jYhARuQeo3XA8n88ZsX9nY6gJLH3S1zp6xjTsde9ZJ97ELFFSUhJY6SiWUjBtdBNzt9raSpQUq9q8",
  "key22": "5Y5xde1CXzDBSfrYBtGiEpZD8o1qF7heJyu3r8kgo9a7a1x62YWg2GAWdzZUzi2ujXCDxPwBKGVo4629m7SXYJ9W",
  "key23": "5Vxgfu2S29NxbB4utrPpZ7SXfW9F7XzKWL1SLUnQBNHb1rGxVogk7qPveWMDkQ5wxvpxWqLHauj3tLTJKrJcK1bz",
  "key24": "22SZaxptDx6MsJZazGjmh5wTx82Ewk7a9BcUgwEKWt2vLqnZGKaGSC8zLYiySr1KR9gxXZ2NybQcgyPf7iFbFjxq",
  "key25": "5TdNmyQgVQWXxyjTBqrWfEFjrvaCKpAvCFSA9hDogfDrs5hvaVxp2e17ahTQcCuc6p2kNHJd2agvo4Vu22zeHQEf",
  "key26": "2zdbEVwdyZnVKh9zJ6W1gPeX6KKUcDbvjyM8Ev8t3GM21Pr2gkD7xg8ZqEccpMLsxCqDzJTGToxpxrLskAmvXXqZ",
  "key27": "3irSzF2mfQ4DzcGE4myFnKRUJyFKjt7Ss8mP68YK4zrin4ZKyRjWrs6DTYkbDcYo2Kdet1Fp7ZU17Jd9UCxCg2ea",
  "key28": "5HrNMFoNxLev1qpGQgzRHeXA5HLxuCAjZZmJibd1RhHm5za3zj6CgL5siwc93tbsd2naqQPR5aW7ZXQYWutHkgGk",
  "key29": "3YddW3uQffWqbg5hJwsC3SAoNCfecdaSwareQ3bnFBuG5Zuos2Cepg5iq7PwSjaie5QRhpYTtr7dDMw5zkBc9mXr",
  "key30": "yjawP1xYU9FbVTzt7WNqfGKwCadpE46Vpv2v14KMj4ZBTXpAYt4SGrnUgiHWqUHZA48NY6VQbY78x4muopCaPqG",
  "key31": "46V36GehH662WBeofCTVuiYJBoZCKnoj5dvaMj8v6EXiXYTwXpdXgTDvcAUH55LUw3kU1MWvbn8XbsiSirL9mFUF",
  "key32": "329yVhDTSvDXmvfyaEjpfJ9Ykj3gdjAtZZNpzVuvNSbCaAZ9h9otKH8QXiymVGVRHUTaateHW1SnN45JveSeFCFa",
  "key33": "5hzCRoFKJ3G7dsetNfsG1MBq6Gr18xsbmQ4ysgcpJQmmELsKMK5K68FajZE8hAyD1PDfy5vqqsWEfiGxSRmu2fiB",
  "key34": "5MCgrnmbAqCF4zP1iUy9hfSm2hJk7SE3FnyY167in3xkv6sQsZRsx732VSis2JG46KmT1fTUmviHjV3kr2wBuJrF",
  "key35": "2ZYFN5dvSoLZyxr3kEJFY1G3XriYSSkdVr44UWAqyiRYtDXm79x4PCNNoA32AhPoSRZVUAoJurjjhWQuAxJusk4h",
  "key36": "5gUJL2FKnnVYQhAKLSKqJJjpZwLfE2Md3BQDrNAL7e9u14AMJeY6ePqqGzsg5TDrNwGv4FLLzagarunfaWait9zS",
  "key37": "4zXXtUocrWTqh4FyjFUofrGkieHKZm2yyLQmDD4PBDzsGEZ7pyXKGw3ZCug3gqUihrnM3uBhWEsr83MZBy2tpBnT",
  "key38": "qUiViSp2PRoRH7RnMh9c5oy3MJBRAndeqpic2zGttFtWAun3FfXvRsx1vttYjyiF2MfGaw79ypWmaiujsnDBAwV",
  "key39": "4GqJi1dzpiWgGTUTU3F5scyy2tKRw8Pu5tcdMiA1aRuQotM9UyZsaJN8HqsGsx7zk4o2se7iLQB3bQtZLz3Zf8gP",
  "key40": "4shsKYzCzTDRfe5g2CgYPx2hiukcHGyu2DGsZQT1ZLyn6N5S3rofoAhe2XF6YJUUkwqJjKkSoDPciQfhmh2mPPYY"
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
