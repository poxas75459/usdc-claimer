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
    "iyNPZSTPGNiWzc6HcRMgeKf5LpmDC2sjaLvFnXh6dKAQp7sunymQdAzRUE1gv1JyYpTb3hhYJUY65Q18dVqrWHL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2g8G6fqvvb88Dg1pHW9Z676mPfQFaEZrBdTX1e4V9GSqCp6gNPwfAmoqNdz7Z4D3Muio5nT9RfkepMXDSYHB64GZ",
  "key1": "6es7HVHSUfbS9mFvREVTAQUbEo7oQFWT4gqQ2X5mBid6KF3irR2MzKUVynZgzNNXSVicgh9465XLqbiAgHTEGsc",
  "key2": "4xDZLtqzKCm68NBmkVhXH4yRSDok88RyNt6en8QkbfFUkKMVxcAwm7yDoFCKFr3YVsriHNRdns9sfcW9QzfKaWYq",
  "key3": "66t69YJq3MGdFWxuUurXKAPVfyr2LFKa6Ua9ZZz36mC8qvFDidmgxxwnVDdJWkNcvpLQGmYwdUqFawkizNa2jAxU",
  "key4": "39BbjsZhaZH39JKNdEQ68uis9yquFrJPSoR7oZReYpEdj2coJzcyaZgvrwqDs7HPugCds3zeUsVaBNrnFoYzReiA",
  "key5": "2zkEAbtw3iPM4jBqXJdG44wmypNnxEDytFT4LrX4xSKdWivwmZujfWRBWUa1XtigGUaARmpYRhAwxjr4rw1PAHUj",
  "key6": "2ga6xAw22HgjKuPRHFEd26eeRpQWbVx51CnJjuM7nwA7WtQ4TucVaKvXn4m6qmJQY79nuhW1ShE2PNH1UigjUm3A",
  "key7": "2VJC8ppLTutYGjT6Z6aFckBgoQU3iLAuF3fex7UFDxNsTksTazA7t2RcZuLgjrf7GBYcVSQHhEEG5XYjEub2ZUwA",
  "key8": "3onKu1V7uDN7LC9nAPek6LDzj5eqWYitbV2pbZctDTChYE6UmigQqDyVwvhE1c3ReALHpestmCzZynNhSt49BPWY",
  "key9": "4uESTizyqKhhRH5BB3uCibdiBEeSbBjpHHxXHouTXAANLus5igXwSkyVwbY1tjnthXsJMBvDv1WE8Dh7EyStxznp",
  "key10": "2zuLv1D3N2XKvQZpz6dmyoFGFHyJJMSiG6ad7KNAd3Vz6rVmaAYFtXdTGriai2gwSrkmoB4CKtLvhkTJcW6dEFkE",
  "key11": "5vzh7CshfEx7tGXb253RqyUt1AKtdutWgmb2yZDmGzeRtcjyioFSa9sNw6D1KEZULugSd3ct25s5rvsbk186WLTU",
  "key12": "4sjSmfyDfztzm4vMmoArqeXjSGkVRkkPHoZQGcgTSpZPBkfDT67a4RadSZnffagZ6Axoxn8ERi8Cy6J2uhn2zXCA",
  "key13": "5Kh6tgNPePnpBeQYdwTvY659iPnsZ2VRKpNmWmwi5Whz9hf3ZzMG2UecopX5Fm4EYudJrqgbmZUXe8zxSWUibsR1",
  "key14": "54wiEcWffzp5cVeSw4bUUzB1d2AphBCBCeVeeBB44w7KRbnuzjnjwDw6oE56adxo54SpVnHf7jNS5trJrGhrgLfJ",
  "key15": "3pcBXoWy374eScVefRrmtTdGBD2JtSLANpBzSTXSMqtKrVjYdxZa4zQ2sKmQQVsH7kurhrjHxiQ5N13e8k1c8tQ",
  "key16": "4JYLtTgWppMZAoaUch5YdpS5exhKmTVN9ahKBzjjCeCkAEtX3LUebKgcJPGs6sdeCkrEr5XA7k84EG9EzF78mfxx",
  "key17": "5JNdJq4Av9dDYj3GKYiVcZp9kpi4qjQvoY57xPRf5c7Lck8kGCRuGeyWkBxM1G6LPXjMxaesnow3jenzBYHhro6Q",
  "key18": "5umkSVnLyR5gnEc2MjH5AJg9AqWQyf5mjxoDxDrVHQ3DnzoAZLfbBof9v4LwuhsAyHzB6mGxjKVwZX62YaY69f8",
  "key19": "3aRfXNW76xXkcexyCNtFg6F8JwGp6KM4spQEfCvjAHHzAMXFYGEzMY1hrNqMoLHsZU2J71TTTSrf6p2qKgRCK5Ub",
  "key20": "3FeZ1cQotsoKv2Y1x38PMxTCf7h1arhWMeCS3oTp9gferjdgc1rmJLtnhxzLoxYWJFxD63WWsSKpLDzQEfDVpPxD",
  "key21": "5Jhn8qPSEdMYh1QZMmYky7qahrFnP5vFNYSKrneWkucBHXxSjm2ndYqW4C2wE3zwSZwRUom4TWb1AVrBUACHQuhi",
  "key22": "51546S3kMRYVyjFy39LosjUgABvsRo6k18dUTkMJDzbY5rvQ5Q7bVkJEi7zFo84rjjoiFmQzRUUGZQ6jcchpHPvx",
  "key23": "2u1LKnpVLBkJvbP98nKsUCs8SpUSfjF5Y4y8fVBvupCaSXmbT9eENyG1AAc47B3u9ryTedDEBRNzy8Qcc7hpJzi1",
  "key24": "2Euw8NkAA1ce9koVkFugEMRXwjMEBoiG2Ubebc8Twbd4WLHQNqtVP3qEPsswneSp4Xov8jU1Y5Cf4CVY7U6EcZKM",
  "key25": "2oLgDsPubHexyyYfEsRGtXEThRPUVyutYc2725wkphK7jdCHE1RCyeLHbkmQBjKRgfogKFSJ93LS5tJkjU35K4Cf",
  "key26": "fxW4SRjyVKfbKjNLCDzwmRSjESdyGARoqkSc8XLa56q4RuXHTfGhuGuj27raX9VyX4Dm4urcLXeZ2Ayp98qGLsr",
  "key27": "3nD6Yd5vg6Vie5J3QTFYGVaU2ARKXPV1262URwNtm1cq5SWWmqF1xNVyMhu911VoR47LyXzuyrG4mqifpN2jb6mw",
  "key28": "45H18F1aBMzwXV3QECan8XDbr6AW79TzNN4aATYSpZudaWoWLGyWjyYish6SnMwkaoavWt5gvQ4mnJNkAomhSXiK",
  "key29": "zTfioNTCJVSLFA1qCmY46rsn5zcssToMA6Bno4XpXnaLB9yhVb6zd6y925354aZJ9CEFVpyCxFFrp3gxPzFuwvq",
  "key30": "2P4XsPzN5yBmEB3hUvSg3zBofZd5mUWSx1sDpwp6EMVZ1kFR6PCTT4xW2dn6k7UQ3crpq3qXqQeurb94EcLmkVuB",
  "key31": "dCwuBQPFp7oZ9g4eGfyzPyZwzXYbbjCBjAJ5FL9XqyK2hyH7WjFcrU2woG8bNDCvX8qDazjvpPbzwVY8JR2diRG",
  "key32": "3DXSSmMKsXJK3peaC9NfA6o42PPXpADDce3xAjo4rZgSLnVWdUfqdCkvzdnP5RhqxNU2K3pVVamezmYByxZuiUes",
  "key33": "gaoqatZYAbnPdWns3c2p6B3c6TYBaa9jvjRNEhAqQCKRwtSDmz1pAX5FNog7iCSfaLKMwxfYeQbcoKYj2imvLrK",
  "key34": "HYEpB7yjFgDg5HWqR6cHVRRdPpi2RvN3ryNPGTgfgbr7Bora1Bqk1gXULJcViwiSZbGeUcu7yAk8wh6ATjAVf6G",
  "key35": "oWrGx8zrR6Qh7F6rHG8CJ7GfRtfyc1SJBpaf353KWxBNWtjf6ziSxND5TGWji72TswSrcoiQocVgqL1Nk2tMXGq",
  "key36": "39dBVVqnAXTbn21usZQRwmZ57YFpEB6Bc7xgp4XFG2RJfADxB2TvZ2xkY4ojqfhKPRcyf72ikgSdo1YmPpSxmbY5",
  "key37": "4ncBWojqwWcx2Mbi5HcDWY8T17SNjL4CL52YAGHo97e2hJPWHweiKfpwTsoZmKVDngC9Cn5DZhLVsdbX2n163xXu",
  "key38": "4JywpeBoEpcLyC1e8RqLYrMoPmWJkNGSK9KBynMn4FdbdY37wiyyqoCfKBdGtktSeXNHBfAd5nX9z9332LGNCfYQ",
  "key39": "5PK94HSAXsfv9wYBCRBqwi24aBQE1VVWwoiDEoGcGWTByZwtAdNAxuneKsRKDmomNGjFnD65cFRBVa8ZWKC4tPjn"
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
