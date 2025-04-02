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
    "5xMjoFDNUcpyzt1zoHuMmEnfo2RWvxjKCG4Wu6ZoBqAgYjzGVxcYSLZ3PpNNWCRds2Pp3gXQXLZKbwn1XP3CQsiF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gZYowJUr1gVRNPmxfDEtWAMZSPZ1k9NwSH8Zfrom1H7So2EbpVHoU52LVdo1s6dAfjk2wtrnWYH48XUaW7Gbt81",
  "key1": "5A2FKeb3ExCSL99GFsyDU8sXjqkoFzq8mJbK9BDL6ysCgC9Dcy7MXApeVVShMaPjN5nUBWsCC7jJ4RbbCnW58NnJ",
  "key2": "59LVbDWWKjnZdAdDp4B9Z597UgBkHvPZVwMB98MKMaPD2ox7Yj6f4dx3jYYdDiGxZnwH911fkPPoGoZeUSA7qQMC",
  "key3": "5viNr5B4kAkMdjEiQt3TZTt3emrZH6Kxcvf8aK3BFDx8fxJHGnvWbTQhfUyRzJbnWMXArWs7wo6JbB9Q2wJXcVmM",
  "key4": "3QUoh3CESknm553dM4xeXdVvDfYUW8V42QNAokniGe8oTVySoyqtfhnoC8yvoLq5e6a6KCDx1e9iQ8kHW43NNoxr",
  "key5": "5YYQQxqBSP251ZYJ5Vo2EbETD1Eti8VFJWj3tuioQSz9wxieX2gapPmk2PVaFctfEKWJnz7frUKzRiJDE8WNdrBb",
  "key6": "4K1mv3L5TYckp1DZr4EhbkbABoVESSXm6mSsWQ9yFGvjaV5swAeWcFKgHyoCJpWBB67416NFkVejimoBCciZLPck",
  "key7": "2pg9omecgMyNU5yXjYnk78JdknZ4u2TqQ2rLihXrPP1L8MHsJy3t9F81eU4XrigNNZU3ea8pJyZBdHNth5GVw4j7",
  "key8": "GyFcTXunKV7vZENTfHWEes62NxfQNUGuXcACuyGZfHeM4D65yvus5b7TXimYqFCKetShWV1aZrrTTNRyBFnPbaq",
  "key9": "HZ9hdW7pLZZ2rnXpjoaau7TfkcDdzTkvpis1Hx5CT3ZCRdCAvoWJxdrHbYQriyhc9goNNAaGa7WKa66CsY4zm8L",
  "key10": "wud7GGvCA8ZXvnXLZrJPMPdMcMxqynDUyGnR2eQzQoYCGB725v4daD2Yp5RCGtX58jQfXdsQY11Jph9odyWfRYN",
  "key11": "2gRDed6yiGBuCQaF9UZw3VjnUwUoa28Sq3HKk6fofn1qk4uwJSVP2eUMWeetQxZGQfaMFbzeJw65SdgC1XKmj1XQ",
  "key12": "3tw33Lzt6HtbmtFJfD4C4FRZf3jtkqUHaWbVhkABxf9scVQpweVy6aP9TUKcGwbSSK41pJ8S6gFT5BwsNVBsBzeE",
  "key13": "2oK1gmPA7MjEoMPLK2y9bndKoPG119DDHCxozZwS5EVvLraGzu71pReeCnDXkv4SvWx2KYBeJUr4iN1Ai7fmzEBc",
  "key14": "47o8qEdeZSU7qF8YqmVUqsT5bs8FAoFHT4ohge4WLxQAyJwvfFoumKkaxCVEfp2SF8CRCRMwA5rQZ9E7UZj2hWhL",
  "key15": "d3Kfg4u3JnwyM2yb5eT21tpgJrvwCTZiBuKpLtVBg1K1RWvmzuucg46gvBDpY7NsDJojGsJEcYobDni739Wmgrx",
  "key16": "4NfSxFPFYSGqYNCv4shTSiH444iFPBHMH9oqUZbq9pXvUJXiJfMUsUt6NdrovsiJxEmN2GDiAdSjcSziDpvX737p",
  "key17": "2L42vjYjZVgbpY4b2QiWsJskDyy9oEMjKz6J4vzk69EZwXTnzamuchGZ4ZLfGsU8P6VNjrXK8CU4pae2Xcn4AYAc",
  "key18": "FQb3o7BoPMGEP24gBrkhujWA8A1VJ6GoidkN1LgDwTPm6NKTsNnG115ovFUmNysjAoco3g2o9xrob4Q5TuLgtJp",
  "key19": "3wLFr5ArvZSgSLsc7HPv7QGTspTKrqgyySRaDBg7WLWjNNXWGDnHhM7u4ZmwF9GwZKdwoErSmkfYjcBAujGu8af1",
  "key20": "3yCBFnaKiZCexxBCTuYHitGwnNBBLikYY7UcBoDr4innFBbs2V98Th8W7jYMBwpFzMyh8T1KEKt7d3J5huN8kMz7",
  "key21": "3g8pNawokKUY7LRaeHyTL5YxXM21QXoT1DyULJ1pLakeujfoHTM6LupS6jfYE29dS1V7Zk4aQYMpevZdY4nhSNUY",
  "key22": "5u2xsoYyMkBthjcxExw6PSX2B6UcR1o8DcTZWhUvDraktmNM7YXQzKefFfBsFd746fPVeh9XYwVLrPnPSRq4FcX3",
  "key23": "2UcTVKX5jRTgDJt4dCLHeHzZmZtW3UNreVREczQFyCwvUfkFUJvXHnqg7mkYYT1RYUuAQJ7xdH6ycU7inUp1Cia9",
  "key24": "sAFR7Wj1fV9Xn7LamPy1nsmwGRxgfD94YkWgM3yXfuNuYaDeDquroVYKThbKMsAPzJH81bug2ZQii399sTTFnAW",
  "key25": "4DUu7Kpy8BLyops9DR3wtVBGxtQqM6EaqBDBzS68wg3vm65opJpf9hbkd7WpXiESZfGugS53zxWiFjYPMELmfHf4",
  "key26": "4N4z9p52FEfyaXo1s3WhpRWfSySttrdXPEY5rYguNaweydSeQcrNYMZcmMYFU8cDJGXYK6c9xxGGoeiBBZhZMmz3",
  "key27": "2D8CmmPz5P3Xof7sVsrmGD2RN8tdSNj9DPznCqrYt6pqUBp1LeABZMbo4nGwuPSJyToNx5LtW1sVMYnE8Wqzy1f9",
  "key28": "2WqSa7ZgzzLjo7UQDjgCHxufHpMagSq4G2z6rEBYTajbE7aPHaEb8qokC4ai9vyKQZRQLbJphRMSYxKwzTx4TnRv",
  "key29": "4F44t9ErNJGvKpFfVsGfyPpbsFd5Bcv1VP66YewVPijoYtwLRiguNYWB6WSY9sjFc8P42uTj9Srjdtcwr4SDKaio",
  "key30": "3Mw6NNdA6a291HrrLt7v2mzpoEteAoPc2J1TFs4bqpoWFBBGirJRnoWxJtAwur7bAgK8eSX1hZhKggx22FnCxQkf",
  "key31": "4oVZqiFaqBerf1N13sgohtaSrSkQenjcPDsE9Ke9n9QoGpykv1b3jRiXmxmPUTuPLkGq55PvpmoNXjHDeo2XNsGo",
  "key32": "2Bh2xe8QsUgB1nj8rJDhG9SfsCsqj53uDNEuFr66jnpNo9LxJwXp18QSZRrUDFbqCyPmAsD1Gwe1KsqSX2AUZTzT",
  "key33": "22xELTy7mhD24QFdJrFF13EH4DjyfCSVM8fPDmksH6648vJHV9XeP4YDpEMJkuEtAW1ANUPMHmhcCnB75vJSdoTh",
  "key34": "5GUgmYo5XcBwJA8GeMPKpNauGy5y31EGjnnVALKX6XPNhmwENpPx2K5pPnQHHVudkDri2pSNs9BiqJMTX9Rh1X52",
  "key35": "5HrVKtikr467zy25jrCwEHXrKhHYaGWg4UGRYc5mAiu3RXQYCWiAuTE5ZbBufMsQ1mnaqRRhr1ZXqCcWbYMnwppi",
  "key36": "2W8mi9ZyV3PDTHWYzCXJJT9VVvBKbd3bwhX2AuyrbmE1euw7GHfKMqSRnRW1WhnQcaSWtimR7fL2WoeyCubVPY6h",
  "key37": "4heEB1thqwYBKL2bn7egVpioXXymyyZ54zzpt4zQFnqrjsaBHSAJmPtVYyjaUKXEHWUpwU7vrzpybnneKtBYjNaX",
  "key38": "2kdbcQcEfAbRvYfCYTRVASJ3xBsntCYQqX84xhqqEmd5ExAGd5NXBKJggaEF6gEucZAD77aVKGzaUZnFrB4QSWZ5",
  "key39": "2HAxayrrtFdykZ5njeDLwn56QhxyME7dxxcYnth6VHPLGTTqo5LUdv6Pjw9bYnS91EoZatsaEwTkkbpXGPavSSK1",
  "key40": "yqf5d8ZyxKCVyc5KcKksDftcvHpjCEoyViNS99ZHpZ5rGgpyLFboWMeZHwJYa5Aqi1XEucfnqfHezpFV3aT9xpf",
  "key41": "38k2fp8RBYd9SjEQTT7aYE4TQBFFXKAd75Fj5UA7mcEvHGDi9aWzHTXi9hzv85xv3mkv8xJjFs9uN4EHXH9SyLaf",
  "key42": "39hs7MsYepCNp1x1kd3mSv3saq8Z1KeNj4Z5FDu1TufpZeAt6z7gm71ih26bFAwBsy91fA6tG2T4x2zPRC2ENbqV",
  "key43": "4YY66yG2d3dzQWwe6GDYWHk5fYNxGRgXu9ixJyfRnqNE9RzCdYHJrRcDBdtGh41Ecth8ZZsysGavyUFV3Rcxs5H1",
  "key44": "pRuRbGcoox7M9bc1pmhGMjgLa9cHpfUquru5x3Nk1w6qd4uQmZxZPv1qhL8PTkumtTomgmvv4ZAUQfKKiFJucXR",
  "key45": "AwPipLyUjgB8P8MPrbF6trRimyZHx4oMRyoUMXithPvsEKvDVP6jiTJEniQMMsXekeKCjQZ1XjZEGvimGwrJGXn",
  "key46": "2g7zBHQmgDkfisxoU9smsb2XijPpmBNfjGWNQSHPrWwHgtkj2TAx9YKoXjfyfR7wU21GqiF8feRUCSovvG2kGU6a",
  "key47": "5CU4uu73e3mX5dbMMGZToViKdabvzUCSvtH94E1fweQN9ifS15MSMsPe8i1fS5fEUQZUAwxEwWUzkEjrXTRAHUjY",
  "key48": "3mv37hywN9DEjMoLabZucnZref86YcCAR7vkcDReEEtNs1Xe9bn7bLS7NxBdZijWdmFTWd775QXaVDJC9r2CiXuq"
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
