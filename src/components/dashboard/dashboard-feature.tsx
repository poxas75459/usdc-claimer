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
    "4eDpPKWPXWmivy7PYG1LmUYuS22f5fYbzcHsen4AopXXraChwYFM1cqooLph6YeU63mwBAkgGW9d2PyHoxwZDYQw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qeCEvy5Sf1Jy5pxz5ZdC4rBKWXXFZFSuipe6L6XwbBW4krnbHBmbD8JqVJKRyeL8KEW3Gkv2KURfpKDFn211UmM",
  "key1": "4nXqS9iMxMFf8aVEDzUFpEaTzUebciwWZUPC3rMWBHSX2pngwBWwrbQP5dyvxBKowF47nZBCai83z7pn1qzfxVpL",
  "key2": "222H7wtWtAKFo6e3vjma2T7buBE5hmpt5Jh24T3YMgMF7zVaNtAqPX4XLEQYCQa6EzT1R7FToWXHukThtomDpSJ9",
  "key3": "2LPBHoXfWisetw7gpN3JLQup7iQmSLTVtE4xHuhw3Yd4eZf1Xa3FRuKdXadPrGcozxizrtFhnzBU1ER3cbudwAni",
  "key4": "2EfvCc9EbXpCh3oppGxc9HWTZpGCGiqsYn6V9PYMBUxgM6MZSvfxEXRdznPdxjofBsfYjfc79i72J9AbfokRmsgN",
  "key5": "26imgV21vXrZeSzJz4aPMP43LhBCfK7ngvFA6j3tnvBmWLHc3rEHpEpBqXPL3giKaEHGPeLgk7Hc6GE4aGxhDVs5",
  "key6": "67jGPdgysDs1ijxLRZYukBejqqWY5K6S1rc5H3sgSxvkKxs1ZvhdvcpnETugLTeEyK5gsqxh8ezZLodPmLPTQe3f",
  "key7": "5eGQi6Yf7aAe9kJHcVsswu3uQpvWTCBUixP6T4H9Ks4aTqffRGASMnoSeBrBVpzCKrNbV7WE137z37tZEwBxa1HR",
  "key8": "3vgJVwsfzT1wDnrmRLNYz37qNxB83SN7zCwSMmgicgptonTS7wd7SRoGYWYX7kEum95gcUVcLdigXbPLAf7rE2Qe",
  "key9": "4vmPUXdG2Mc6KJ6AziUuN1bxGHrLRkQopLs5XRxndz4worMsofMquoh8gLbHiRGhJVxsDmPwgwynpUJLiguop6eV",
  "key10": "4YSDYxJq4jFkNEJpK6NwYrVTHYxzpUzV72i8VRDZvRLdWb9CyNgFRRCVtJaDpJBfy5osEHBYV67prXqnAbh3b8VB",
  "key11": "2n85DA994Dx9vozt6CDyivyxDSXNo7XmQqvcHSgAVux85UmZqTazqq54EwA9XVVCcvnZNDRppHU7AF4nRkv2EGWQ",
  "key12": "66u6DXzsDxQwHXcb1macgpbRNhTfQSU3Jve5kTdXnC8xw6g64YknAu7ayFyrzLQv1vH9dUDzqeDfqvhb97feBaKn",
  "key13": "3BtNvq6twrL5zXUCYeq62xTFAqTz7SYcZL8dcWEFin92NP9CRDv94VxsRTVdg9s83jtpUVSVGZoo6is8FCCrLggH",
  "key14": "5q3QgbyQMUk2yEgA3x3rK252XviaftogR1QaRDcrY4yt4h8jmTsP3BWqeGXZpPYBULK1hsRnR963tgdHnyKofBwW",
  "key15": "PGQJcV2R87pTMVxN7AuVki7ro34utNPVMMK8LjmXvLjoEKXZcf1FTBCMxFQdQ4Q1cWkua6aKchB4DXF2vZv7SjN",
  "key16": "41oftjJ4McPANm4qK8Y3CiTMr4FtjoWkjLET4XjZXZ3ebyiBJXTr7d6HGsEHh26rnRGi98MydJavw42nRPRgrmkd",
  "key17": "2QtykVGFMjTWyNtGwN6J7KoBxKBZxPcygH9KxkqChkzvQ7v9sEM4fsMJ1zwd8fkVrFJMu3pHdeZCU9AuAKd2uYsE",
  "key18": "3NDDmRWAWBxtq1SGXFF2XxVNtknD9yzdargiZB7WBmNWAqkRsxYWGa135V33TUPhVZsCGdUAepLrvhPYK9yGGHKN",
  "key19": "5oMXkyT4XYM1QFxQJxBwMeWXn6Utd2xgEibxoiYvaTyk5A2iyDaQjzVJvN5DuRoTuv6NkTYXNa62uyzZggYPxC9K",
  "key20": "27AAaBRM6ffA5ETcNS8r4P64f2YRmAUJHswnn4AAUrWwwqxS4piAmSmMQNgPTJPmA2Dsm4bnn2z32N2cra8kihar",
  "key21": "23FFjeRk4ALJDh9WVdt4M4yvx7BLR51KdEYLjX3oThS1KGqXrF7E8YSVoJcpXMkBSkddSNv2jAHmU9gokM3kVGPK",
  "key22": "HeJcpr5dyED7dqgZkqrFHK4zqEbEfDRkoyJhwW4YvkLZtALNwsRKzryaWosq8E52p5BkhqeDBXM5SPmcVHtsjwH",
  "key23": "4HzyJJR3g8LowXhJE13KM58RCsdAQ3srFda8XZv4RaKTe8YNoxxrriVLaxczayPkveGgoQsZF1g6p83sFrwYFgUo",
  "key24": "5mELtggNPyAyg3UDGZMBS67rFK4Gendk2ygj1HEhBxdfJ5GeSkwZ4tJ4jbYUZhMVEKgqCq16r2SR16Bua31cr7S9",
  "key25": "E5XAFBc2KEhboMxmm5kGkvAYk7yiHwUocL62AVhXQTfuyJfeZN96CAuZw77wKwNyDziU6pzf1jQfFdXun8GipmQ",
  "key26": "4ExrR8krJWFZwp8vHYC7HMKVWEwXpaRnmrR7jS7Zqv3PZSwtgDTR9dPj2qAhF4ALMBKrHcxZLDuGEPNc9nwHZ8n4",
  "key27": "E7ox67Y23DAwyozwwz5VXKFKUXGkYdhjKQj11ybZtBEb6DT26kZDgCDQtugi8WZA8RaBz42JZHrtWpy4CjE6EMb",
  "key28": "5C5pJbXJrPK1PRnKYegrQJyayaY7zcuCbiifiZR54SF9ubntFRHU9XbPWnNMiBZPLdW5b1PrdPUyaUNSmXouMZky",
  "key29": "KhGR1cWBpoEtVcbD48MixZfhkLtaR3gey8WTSDoCMSwZsbcDDYV2Ga46wFd4qGXk4ghUw1P5KtHG6kVTRJEGzzV",
  "key30": "EuThyNBAvFKg9pqoC2nuuwoKJ8LX51QG1FdPihonoXXvZ37nyVyNkC6bf6CVFZW1P8Vhx8AsGNdEks3osHDsU8h"
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
