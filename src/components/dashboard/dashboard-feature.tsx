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
    "4CzUXCP9S9muXsxfQ1SJPeUFCv16c2zAMRMVU5FczrYqqJ45YXPbmd4dZMowJQ5fdfiq4DCxPH3ukyeWV9x3qj75"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nt4XXEXQQA3g6hmqBUXSvERbyiU5nLmcPBnXQrWe5xetxZepAAVcBbANmk4A2xCLzkLb87fAgikyVdy96jiekKE",
  "key1": "36bTdFZb94kwwV7dM6vAk9v1WGfiSu4HCvYkaBHEdFZUDNAevoKrLPtZkV8KCGNqiKsVaiMP9R5wCARgWpWcjxWd",
  "key2": "JwHcNxNa5Bee4zqNrh3YzYA4F2yKEjTd7ZwVbhzBATEugXCaHu4D7rDUpJQoi5QK4JayxN4oCpypLtBsbdfLJgR",
  "key3": "46pR8pRe8JL9zUQLVvL3hFpWdXCyeM1Ru27nAmKXuBjbwBs8kkoTzipxKBzwggR8kaG53b8GxgdXWbZQRohQgTjX",
  "key4": "3AnsvXq3MU4S2k2Fq9QB976jfxpvrRgkRguTxZB92mN3hyJ8uJqgYjgHFJyATJ9yNWD9QdfLeEZdJEjsySFtPjJK",
  "key5": "oEQiX4WcfZvuGHc6fYGuuMt5BS9EsrhufHFXBjtY4LZX5TgTZAkkyYPmohtT762bbufYqQosqE4bzbREhktpjep",
  "key6": "5a2CE31TDSdXfQxbRAwW5XeuTbchNd3U9Wr8w91nekKgGzTvFgi8fbzLm8G8Nc3B9yVzuDK2i5UfkUF1B9kXCtmZ",
  "key7": "5Xwzw1aVjsy47dBSUpHHyFaPZ7pXiw5uszjxuJ9mvLnLR56XPMob9wmC4BhAKkKRzGyMe42PuofWqAz2QkM35L7b",
  "key8": "EAFJjYVfifefaJ6C6t29b9BVCEYBadWeULoeBdjDWsgKumQtTNFFh3DLuycWB8Vd5hXtKcL1pqB1vaNXy5oF4Vo",
  "key9": "3V6Y7PjDekJTgUrTpjVYJyDATVrVJTJwYpUJdpf45tDG2gLrCZPkcJHSJP3b2xfYEshGL9ZT4jArsMRGxqairUku",
  "key10": "35dtPizyx3A3NEreqSYJJN28RUAWrtHzaXETjkSJYy4pttvmDmrSqiZZ4Hix4j65Qe2Go9MZZAqo6qceDS5HpPCs",
  "key11": "4jwkgU3x1ocqfzoNHXBDBDkmE5mkkEsfxNx1RgNrUF2wm9UgVTTxBGxUSedKR1aHeKdrZkiWCFpY7v3bu8W3nW8J",
  "key12": "47NrWBKa73hqX4TsxqvuRjoszgVELNgPMCRJ1H7F2kwyLafQW5JjrT9qpumTQVkrWaRrBu5TLMuVaXdJYFevzmWP",
  "key13": "psDwTWbVJ6cxnvRRbJwH4cusSAFk5GZ2q8ySJrLp3XGshnk2aao8ZWs4EZGiuUp7fu78V1s6gkqajnSHXtM1SAS",
  "key14": "26aqrx5NFp22tfjeFyPuPuDgk13PGj76XtZaPkEGbZeCbJBf8Lsyh93ve2cd8s7KWZqDWCKhE1XnkzuVTKrLNdpq",
  "key15": "2Z6xAJmb4CMAcB3ARM3LP1TtZgqLspg2EHRH9YDv47pBEWeV3Htbs4MCzFqurkzUU1meKDfmNkv2bWeg3jNayag6",
  "key16": "2H7zTHS2L89cUcaQi4Wd6M8MonSmtLFCQ1NePN4ad5sqEXEq277YFX41Mgj9KPCLZgg26CnhnivkexgsrpX8aJFR",
  "key17": "1MBJzbxvgBJvTaA2jREJPMTVw3jLXLjciuCobqNhAq8G65VSQ71H9h5c6SJSVdPRhAoR2To2NngNzny2T3H5Fcu",
  "key18": "zLPgtrqDEXByvZd8Q4pBQQxhM4KQrHNFG2p5J6RSYthjnAYo4QXmK8cbv76Sxyepp7rLZv5BvUQU4AyG9CgqAP4",
  "key19": "4Vnu3ehUvpbYhWgW4SKqXL8DTXRXy73Z8AgxLimeju6Yk5NC7fhVKB2XPmSPNH2ABpqY9ALhDmQFqk4Q6NnDCK9x",
  "key20": "b466EgaXCLbTQuKxh258q7ZN5G7TWGygSjaCqsZgPEdz5fPis7cmY1iysEb6pj9gZyWC2YpvCc1MCtHUJYEiaAr",
  "key21": "4R4fgpFjXqXFxGwGvfutoDUyQsacmr8nf8cR2TGkN4pzWvAs1kf2qu6wmWLZtKFRbDu52grQxc6Ma1uW13SqExh3",
  "key22": "5dUoCNt7RHrpZDvZL9PzyGiAwjUJRq3f64XLUBzzsj97ovQFRaB5zzwd4RtgBhSg5UMthknr5T49iriPfqbgzteX",
  "key23": "fJZiHw5Qaxz8ZGBMbybKXpT45fhKeZUSv1vKdVDrJBbmkGvUqgnyJrbWUCmKaEqv77P7EDWV8dWUArgz7xhfX2y",
  "key24": "5MPxT5R9mKAVbshLQWGRWnFY6t7vn1GRMAmmhxra8oa9pTJy8UnyfCY5SJdNcaUJWun35tmbgxnMmkymU4zRURiX",
  "key25": "5K6RGjAGQaFAfMHf2pSpGyBpYPcCdkUBJaUqGJwWTosfUvCEfS15gKMeK6tQfX4LT8kQ54KxrTvnLSASqrYyV4EY",
  "key26": "5CkSurYvr2w4puk2SPeGKKmMZQrAmkRNzLZsGxou8KakLh6g48zNJybkM1LpMR8tfrX61jP3jCGbRFRp5JX7iAgF",
  "key27": "KHfmW6HncPn1Yvnxpp7QNpZr88USzF1RR8sRzMJTBSs6fgsd61CWFbNTHjkSM2j1igHvYeZ6NsVW6UP2dnWux6e"
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
