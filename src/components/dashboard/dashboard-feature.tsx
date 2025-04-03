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
    "2rEjKTxqcUPQxJj7tiuGJPzJD42yQrNBZBKZfoPk81mPuBwRPdEjpHiNu31REnhjmnpFaNYPbDUnhjNAJWCe4qN6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48FcyV2m4PTao9A8y9FDLm8JEjc8joeZRBTiagEjsZfVoyBawWZNarGbVbVCD8R5gK6pPVHzqFc4ibCvzVewc56k",
  "key1": "5jHkf7G5ML9wNVtByyj51yPcqzPHMa5QB4BQTx5x3mKWknKT7BUN83L2VbsGMcUpvRCwNJoiotyjz6wTcjAEGghB",
  "key2": "2RWTc5ZEmAbohvbzkUxwXqjLPB9y1ZvidPgpB6cgo2gXBdei5P6ggcxBZz7An4HMA8YxfguwLiQvkkkm5XpHDc7L",
  "key3": "3u2MwV4gCYjyLxecYgqMDWQNswkfP8DzKaMptLb171qwpHKbcw15qc8ZfLwBoB6kZ6nHBHpAbsXUVn5SSCJyopev",
  "key4": "MQsj2GBL8Hrfjwk9b6cxaMcjmzZQ8oE99ZvNQJuyuez7ppxaKsK2KqdPTU5hjMGruEFtNPMsktmJQqpuFBXcux3",
  "key5": "5huFhW7d7d4mP12JDGmmJcMgCRTxNySPzman3QeJRVQ3eoPRTZjhi7GdKaUqwrAEECkJw6raNMLKZ5CKM1feqVSU",
  "key6": "5Gu1vGKKoHbjm1pQpc4RupZgqbmEGYERc3CpeBx6ufGEyJhN21vJ2LnsVEpZ7bkTrPk9iZPnGXWxYu46SGv8npGS",
  "key7": "56L8RKKHpXfQwRdXe1GqaCE8j51j6a1eoa4yTtg4qqiNW4GtWFtJWWD9Ea8UsJuHodKiZAHxugFD5eoHUk8cZ6CC",
  "key8": "FHFWGLvH9EyjJkJY9BR7dgEf4HKSuA28ARtivyM6DquPh55L7SrURqgxK2C1hxg4df7Ti4NgR2ahXECSuXxSXck",
  "key9": "57iszm6aSDRp7EVvKEcZWhaFdwuDDydgWa1bbPRTrKmwM1FPvYSYH8An2BKcUCBvHq86UwmxUwaUren41UCLeBUc",
  "key10": "2KwgUE8efuqJdEG2ForcffnyPcd2dhfigmDkMiksNgGYGbTFXSixQPnpXsnVNPeg8vtgexWCt2Gk3vw9Gzx5StLb",
  "key11": "4nayxXLASxvUKvh8YkTbf2MV9RpFM9XRDS6MBsMBatuaXWBNVVosGvLcKfFDesguSmW3radKpDv4rp7EJjV3BonM",
  "key12": "g3Hz95CpVTUxUNs27v4kJZa81qVy9tbiMZgFeCczoEFBV2Ha8UX82QL8CVqHSsMMagSY76L6b2D8MNHxPS2YiE8",
  "key13": "3iMSvo5xb7yDVQbcuUg2RhAmFbj38dJLwLsVn4XdkHmXuUdaMkJLhXkFAHrBYCrYhhcNzHkGCAxrhhv8GeLmZrj6",
  "key14": "26aGqkdBfyZBPTQvHs8syqhizu1s16KPcjcPyzUHfdJk2mCuuAUX1w3ib7BxdtHmw1644Go8KeUppM5PGx7A5BP3",
  "key15": "4kKrMy6kHd1nFBRFsWTmerEpH2XDrUhZas8YeTttdAArXEWemkvbp1Un8nKY9g8L1NYiPprcBY51mDb5hkiHS2Ep",
  "key16": "ig24PNa5n1Gf5TkuetxfkCKFWEUbxkFjJPc1Zw7u9xP6xBoqPurXfsA8NQqgFSyK2KB4orxsGwV9E328pe2iGAR",
  "key17": "5YfSoJjSy6ZBFEBQB69rq5W3rPjKdoyeyrJfJefkb5vsDFhWH6nnFTJjSchCPR5SJmhwgzHGKA3NCRezv4EAQtjt",
  "key18": "U3K8P1eHrWWc9FwYCyiudR8GrTgbuVeSiPs2LhPo57kzfoTWta8nhCAf4eagndnqXBgcfEWWBZRG2mLHbYJUVp5",
  "key19": "62Gy24GxUExDtKE7vFkoeCsVP26SdF7krUcQsBEJvA5zxTcSjHZvkUfRpo8dHs5cNYNVjmUvZoxhqTU4eWYQ2xFv",
  "key20": "3zfmecdawYEfPFFPc83W2LaW4Znx4MFVGWx2cUW1rQurGywNxXFED5MtMVgJyC6JHzQNUyGFypiPBhmoxhJMHrfG",
  "key21": "4o7LTED6QreMYTttggJ17Jb6r3g1F8vNXZ5qxhdwdaETEaxpo19NjTQtwGk59Xsz4qFd3VcZuhUWioBFjavzthP7",
  "key22": "UNjGNB5f5ZXBhLAhQDehaV98dGGAKChFQerRbs92DSKc51LsC6ugHaRxYq33zL5orVbG5CMoQJj1PaFrstAJekU",
  "key23": "5bET2s4Pjmaer1ndtTAYb5cojfTD8Une9DHNw2GqrE2irzNEmUASGseQ1pyvAhKRsx2YNfgkbi69N4FRRry7n74p",
  "key24": "3UnFskjGaontNcmAUSwmbQUP4Vic3aqKZi7kGN1oUQtdvNp7J6HdKnkHLazDkTdRzbfvnhdubXm6ixU1HYnaXS5x",
  "key25": "3oQ2Rc8etn3Xn2yjmpN1KiTBkwaRyBZDSwk34DPi21NwGTp3oe4oieQ1W6VM5JviyMFvAhHXbpCz9YJXhVjARzyb",
  "key26": "54GMUWitQ8mYm5nNDLdU4nzgDe6oz3w8EqTtckXhchFuGbcBxr1QXKHraStJVWd7TQPUhPDGeFQjjEw6QzYZ6JKj",
  "key27": "5rX1uB9NgdzuS5xAhBk4EFvXjTZ3cyp7NyAV9nmuWTWUazqnhNEaae3VSdByNtWrbNs27CV8HoN28NBtx7qHaCwP",
  "key28": "4R9Fv559LdpUD2NZ7L99JBgnCYJLgqPo5NbKNX57raeXQQWV1wRq6Zyz6uyEHgH7TtbhpVXy7Xxj2LqcdMZz8igZ",
  "key29": "4EdDYAJPehPb13CfweJ3dyaBqz9KEgbkbyPShDiUbxEFahhFR96SezTw2NEvF4MK4beMyojSko6r83db9S9VcMLS",
  "key30": "2bETG9MBa2T8GMiizkQ75HYT1v86Szh6e7rNx4J2ZTesYdJjjHm7Fb4Jso72c17kPHXNVCdFBPjcqMTAA8y2oY18",
  "key31": "65vSDb5RpDATy6kpsB4TMUgxtaYZZB6caoRgtra7nGLjNYNsjUvsdT27MoNS97tEMc8W2b3S3LJqf7wUneJRywjj",
  "key32": "3K1kWNsDBHv8D4dHHBKDcu7xDv8pkDJfS7F9z3MnRgC3NbZXRCjqEehM3z7RSnrHN8MojdTnczRMZbLJ1xwnKJyi",
  "key33": "5ahYXoxK4Dyj4PRqrsT1ZDReEXtANoooUut6nze6WmiaLGxzRGstpHEbvHyYt9pLWW4GAxLzJ9ULZ2SWrtr3gxN5",
  "key34": "4fi1wEtfzsNpYCVQNPbHdUPB1FWDJPTL6RomKTdf1asK5JwXDEkATnApdKQ96yYyq1zBFwnYz2PdzPfWxej3s3He",
  "key35": "7upGPjG3zqmSijGWuPyetpRwJNAfW9K3BM75KUpiQc1mVSTZDQs2PFkrCyn3XJyZUyn1ESAPNArYmLZirNshxm4",
  "key36": "Pr4kzY53o4B37Wr48DjyJo3iQVm2ktU1KAZBGBihe9BJ2DEgcDYu1avtbhcqLokrJm7TqhamnkdpgTS8JYziSc2",
  "key37": "3JUfaJYuvAUU1FAYhDbgv8GdLaRHgVfBMpBX43raroyeHdCGGif8PJgTcuqdnovgxyNqXmZUTAJpogE3zmVEHJph",
  "key38": "5fibxKnxJXRtM1n4MakMHpk4uWWJxc6gyAXQBwmXKF7fkkpoCZMFNy6ardZFW8Bh9tWXTNhaV1eQv5VKFhWAsa4V",
  "key39": "3usF8qj9cnvGJ7k54YcBU4nUhN26NsjFE2NNnBrbsKvmFsvAvxZk9GwoJ2QT4V9DnJaGxpgQjuTXt3quvdXwJRnk",
  "key40": "2FzyYUydRFXpGzZBVeS8p4JRwH1fH6E3unqASv1cdSMrb3g2simf37NoU1BmY64vMJz2Vc7wjCC7mmwmDiLXJhDa",
  "key41": "126VS94G6pbVGiJBENhUMXMj16g8DU1MJGDJrcScdsGMKyU7gX1FK9b3Px6Hauf3UwCjxDULkkzn6XeQBSBWq9oB",
  "key42": "5B53tB6WU2rdxdoL7Y7T34Q4Wr6t6DM12fkYR49CFsJitW7SohuLALJ9BToazMh2TYMD49QW2mWVeG4rNfom8yT5"
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
