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
    "2w5mDwVeFgK6nfdzx3rLA3PqctF4rD2DCCS2Qwq1fjxbDd2T7usYVnKFY67CrPNimvyEfJn58AS2CfpWqKmiYAfh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uSfRurENanY2xZmDB6oQmSMcG1zowpZKaZG9KpZGcYUCb5LpVq4daYjgUrDfUqNuhqsNZtScCKXo2wfHXMwhc17",
  "key1": "4LCwVTmd4L1CLKTQaRZKYqEwyzVtMGFNhmLHocJVviw8MCUKnY9FVFqcRRLtTLhT2vXvTNNiypbX7hZWMvgXex2i",
  "key2": "2mxixodPFudsLs4QdWA7tn3KoGAertvBFXpkgHy1p925koerbqjWgUqBUfheAZXf998qWjSsLQWwe5Bpif34Ahp8",
  "key3": "49RuEi2e4TcioQUQnRJDMJSJ81JER9RBMUwpvgdjwq1eJ56EHm6ZFNFuTiHt5cTCVUJDDXLg3TJ9SPB75HkYMcXc",
  "key4": "57bchrUq6x5KXbwQ4291M8yfeEDKKNNMrvJuDzDfnyugU4UaCk5w2Re21yyYS9Jun1bex4zHdNqSEJP91H1nzUbu",
  "key5": "4toVgTVeUmvQrVW1pibXH2mxtvtuDKBfLUJaUz8DRtpu6G6YnJWcspQeLBxhDgW164hKBr1mCpfC8SEntKaskzhf",
  "key6": "2Co5tptin4i6SaXRwNbsMtzALpqThZDRLRsdHDjxc5cBmmZT7U7jUrBUzTVh3zBYihHaAnEX1q5ufdpFvdFQNaJn",
  "key7": "5YaRZaKyKDFN11usoD1GkpyurLWQHBYhnFAWaJv2hVPvVDYvpeNnc7pPQ3qYtpR7FXf1Dfqd7bjUtM4B8atMVUf3",
  "key8": "67QGDh22PKYfkPoWYasHKQ3BBKZkyLkkxf916w2kJUyQRtjoHFChTmJ6SvjC8uNJTKERLYnxrvo1gEGyDf4jF5pp",
  "key9": "5DrF5mMCGMetfLAeue7A2qExKu4kzWMGyvN4PonHpakPwvxsX5ySj4khitMbqA1XEKxYgMsxWaHaeLEnLYA7WzTh",
  "key10": "5pC4jWeFPWHXDueinx52aDfs8tSFisfSphXDUFYogSJ99wpwdVQHM38jG3QcceZFLHnzfrCESfqV6HsCL9cVDAyV",
  "key11": "x54FNNsuJUWbPfZ1JtCPZEfJmMniZkF3iMVjU93J8nHwJGBEGWdNLo46FtAuk2WoeA86vJMJveKQWoDC2Aaw26b",
  "key12": "BArofviUWcQqHiBJrDPr7g5R9VDteJJyFPZCfhj2SdnXFAwcurqTyncw8jv4ceFxFbZYkn7usyLoaTbnoraBbtk",
  "key13": "5WP4v7eCoUAzmyEBc8badbfMaFKebe1anipANNk9Ee44rt68HXiXc6WGWEBXtyKJWpJ8wnrPR7KXpJXo8tsgWKTu",
  "key14": "4TZAL435bm8zpozzGUMNPdYSiNniW1EBZAcwfSyXtomjkrN5ZWRm8rVneuhp8567Lqh6C8NLfVpyYZxM7VBRVGfp",
  "key15": "2CTEz7g1u69QMswADnzNx6NCwEKyhvPx1VP8ML6rCBVYk7vQ8hfYCKFQhajLuWb1ni5DbqX8pP8fEVKqY19pDNXz",
  "key16": "KUFXRzskwG1cyBX1RR5UAUpu8WN7KWzwTE16H2GvyGCzScS9iCEZ1ytd5KTeQ9qPxmJapkzYTeQTooa9WXhNgqp",
  "key17": "E1H5RHC7kjNfB1ShT2ALAwvzxcJjR7Z2XLHJfVYQtqud2d1ARDJBCDgj12JFkAUcFEJsoENpYY8ofxXaysRSCeh",
  "key18": "3CBNhTThu2F5W8YeA4UdU6dDWmTvw4sEaXVxNYpMp3BTSta5qLgWX88pzeKndR7iftV96aTgL3a7kY7M51AXTpLV",
  "key19": "48z8znPW5bDsDm581GRS7fFLXsQZh3AGbRgmvePKqptYrPXNi2yBpgAZCqVLMQQRcuVdzp6R126WvxYqLoin6Qmf",
  "key20": "3y4EhCjCzKqosbqoXfwKocrtDBwBXmU4bCwQvoy4dd7veKKW3yLjBHE54WMjiTFRFXMRKCnRdkebgi5Hfvn7uU7X",
  "key21": "33PAVFUCNE2xkuo5me1dVpDn5gsfkJJhjXqzsNKNCzsvCpqXKzeZCPDM8V5CNDjvFS7V99dh3QFsJZpshFcUewHn",
  "key22": "3oekZUxkLrF59BEZbfGnWVuD6LuWqEYo6R9rWucMHs2nq8vE5zVZZjPCY1c6JfV9if9pcscstr1t94MTpqLJjQuD",
  "key23": "448DCnJ9YyWob3btuJ723j4nnie3No2eM3vZjJHeT5quVVNQNTPs26tsFB5JKgA4SdnGZEZ9sD5hF9bzv9GCDQGL",
  "key24": "5BowVQQteyJuZszLiwJBBKSiBa6tbY7TWeSZUwrMs83BoHZHNaPkWHuJUKcDnFAaJHP3GbmGfX4L9j2NVtMEgsqX",
  "key25": "42fZBsWQk2KTXE8ci8NWDo2ZCLv65QXUZNMtBMxtWhnAzxdSD2piNsKPRCtQoSv2vYh7eCybxkfKh1H4swDfSQi4",
  "key26": "tXc86B82RaXGWZYMdMo8xTEbrWkJqvZ2bHqifdXjgNsdT62dPnAXyJRDZtjaLzpoKM4iyxdSu88LXqjDdH6eVCQ",
  "key27": "2KdmfpLqYQUm7dhVyghSKueZCbBNd5RHNu4885D8mA85mhjMW9CsH5oL4X9xxqoZtYz2KP6V7EagiD4xfmiPmVcT",
  "key28": "7JchmeCNrP7ThVX1UGZm1fi48xMVWEYwdgY6Ud5CwyuyheH4R6b7B8qoiNNfWav1Pbzaov1h7Lmcn92kvZq4SYZ",
  "key29": "ZMMJc7ypzyj52sKUni4YGcAkK4JKnLvxpvbfb355ZtiY3WeEto17TnRhBStRNFSfoaMXLEEBNmEJsqPFTmpSU3D",
  "key30": "2SFPxqnZFFxReBEQ4rt9FxPNABRkW63UrvEnZnFvYJvCnKSXRjTCgJZF7rntrGVC8Kyv3PiTG3zRPDPDfuS9a5ry",
  "key31": "YzPgygmR5JiiugHQ45Eztr72tY4r5FWvSBySQaz8bD4gYyEds1J5QY2iQkp7rpTR7uAT5Hw6iYTky5RX48onBSx",
  "key32": "YWspJKCkjDjAHCaeMryLTkjkRFPuL8s8yh7JtNmozCFyNxXq6iAso327kDCaGGy8UUATTDhe2VUVE3dv5qbgTw7",
  "key33": "59jpnnyayXLNieSxgcocAH1BDB6y2PJRyULh9sL1sdkfchwh6endVevMLHpdPav621QjqQqpWxvMWyKkUj1pgCu5",
  "key34": "3ummwYiHZi9QFg8WEMZQAD8kCodqBpaEeQLK9RzHqfdvHsoE6KSpywQGLT4rZ2s3dXgp8ezFC9zCnpAPoLVnLeS2",
  "key35": "4WFUfH9Rt5QuPDTRY6yH3oqXbvXu55F3EbkP82Cep4n5JnFkch4EViQuH4HMjWAzrwkibDU6iCjL2nLAHqm5BNg4",
  "key36": "3Znrj8v6x4A7DFrybQ8CZcT5LZnj1CxP9Qm2ppCtUG7FaKHUF6MY2cXNu4mpN2dGFou1EVJhQCAQfvAyAsp6TLkf",
  "key37": "tx73pX3UKua4p1diFLkhY4rD3nYTVJXw34pLtGHGJQSmAumXyRD1MXWxfsJhELiK7dqhTsaMDixoDEatgGz3reK",
  "key38": "26L5NCWH9meNVQUQPY3EQAoh51VVoEU3miGxFEv48ev2qCcXS1rceY54oZZwopdJUk5NC1crXCcmfYswmduy7boF",
  "key39": "5Pq7sPNRSRXSXb3hCqSFSgC8kvKGQjsi5LSD23ckcS2ApdKdwGmPqVbXn4nSiR3hkA52fhGptMafziuFcaraYJis",
  "key40": "2v8VSHX67AKors4dBwvByNgK98K7tt1WUJwmNYJKtypMeyJ6Cdr6xJJUW5iZAUDMVuZFCbEa6vS4Y1EmvyY1X6jF",
  "key41": "5zQmNSHq7EcVz7vMT1mGDBppgQejo2Gkpk3dudgSiiDngdYrjMgvfRdh7T6vzLA8opuuRTQEFv95AnQ2fH2jNXFj",
  "key42": "3xcRASAbrmJANqoaj1q5MQ7YGkTMVGENRDDguVj42fuXuzHW55r9ThgGvd1tXzhCWHF85e5J6S2xcPDJoMvvBuZT",
  "key43": "5AY9vrckG7Xs1hQZa8mhwYqvtuTPdhVNPFYLE6iw8wP79DVfNnmCT2zb9TuYqfrNDiNnEwRiUF41KAkZnzYp4u3v",
  "key44": "3894h3avttJ5xwqqSWtA3LQosEpFH4c9diTN2F4R7ns4XzxQEyej6zU7ycKGDSLADPX4k1pPBFd6We6gW52iz9Sw",
  "key45": "3VhpCHKN3sAfZpPM1GnCy4ph8ENiHmPm4HayAXBTwmKn3wsJ3NhL73PJfRDrXtSNfpKQ9xsd83wkjQb4kTvXm1Xs",
  "key46": "5tBFjWE5UU7qaEQmWLLj7C1ySYAzsTHvg44QqmUNL1PqFn1mcBgATo3Lce1e5fiBAERYCif3NVSTeJfEc8fjJEvD"
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
