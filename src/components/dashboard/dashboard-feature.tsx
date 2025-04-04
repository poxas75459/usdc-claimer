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
    "5b6H6XdyJUrj8MhSAfTnnWHgETZcDT8nCc3j4Fj6DAGy14sBEby8xffqDDPh28xpncqz4nxVCv8CAtnL9CBhgz4Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WMcQJiVHeh6E49XLoirqwqKiVwM4o6N9AUzNCBF77iSMTbmDS5tMYSNg9KKAz2i21zJe26Uk9Uw8Q13ui52vad5",
  "key1": "5pqZs5LSUCcDAQ9kj8RsnFrpPmQ4ERK2Jn1tmv4u2qHApZdX8FYRGHNLRYCCpp8mBR4Ur3tt1jGVDnTm2RHTGGh8",
  "key2": "39197WwMUzXkxnz9xqfkDWEdwABSdbuDdPrCnYr3kpUGsmYXcCCH6H26cdENxrT7TEu3ToM27pzjY1YUgwAnGixv",
  "key3": "4TDD22RtVsusjGddMMPMtmVqRV6qzMsuh9X49rCH8wSU3LTFj19ESroGz73hgq24N5eTm8gFEPje1uPKrYASAJGw",
  "key4": "4z3p5YyiHtkLALaBgz6cMoiC6UHApu8a46B4aW99thN2d8hz7QGZxiQiSnZ7i4QZofS3ZCHLCdqDPNRJHUGdUmJi",
  "key5": "4jneBP6zVvnctree8eStWb4rkzxJiTTXddSjPHXQx7XmpaR4hvq5JWDecQuW2DJg8phCKgrhn5saBgp8n8qWPjmQ",
  "key6": "5FoBeqkEU5M5YTpgDTpk2BBZmFZyKAU1NVCe4zeQEWb1xjFCSSBsqRkyxa6N8gDqGWsdDCNQV87KeAV4T7raWX41",
  "key7": "4FnC4rkNAiTJ5FK35GmN91bBHNKR2sCRcp4SeTMX6KKiK1LNeifysiNKd674TSzVUM9uSytuMtBS72kN4UmNpbwD",
  "key8": "3hzpxmQoYwj2yWXqDMF48Su3ZzSZfabFUp9AGYs9qo1NWKr98HXSxsZ2GxLHPrppsvR7oLNcwcxKtPoGwCki2DJA",
  "key9": "5fMbTVfg5Dfib8wHdM4ynZKDUv8pxR9Mm9Cqvg72VtcaA96sS47RmfTt2nqLgyJFZBcVqZvQHFXG2mf8uD5nHFn3",
  "key10": "4Yk7Y1zHpzkUCy1vKYFFfavFf5ZgKcKg4HoxYyL6GGDBRQToPCJYRZMs7F3SGycgeLqe3B6A42N57hGWfqMaHr1w",
  "key11": "4yZm1vK3VRNHh6fyuM52gcZsUcEy79de9HMAuDjXUjUqQ457Qrmq4ei1mS7zYQ83KwYH1zirkvwEjDzZvFiumtsi",
  "key12": "2Qst4w3yFqRdwmBKkk4Rt22Dvfo7pfTvXiBJBux8CUxKgTvEDXUFfypuyo4Jei2JYUs9ywQHykbTCP4LQexVL3uc",
  "key13": "59PzR3ZnuMevJnV3ESU9mGQpvagC8DhW8GZvm7QaDLGZB9eigZWuatkhzjVvkXPBWHmP9CQMp87aifPzRTmzaLmN",
  "key14": "5kPy3iuE2XwUadhQxzeW1cCV4yaJGcTTdFnMH5GwM6MY5A4NgJhznvz2i9tjHCzZZ8X7ztDKA6FhEyd9cpqTLhSp",
  "key15": "3CyKgzVTJ7RErC7tALJrNE6q6bE6GdX7GuVBJ18m721SnePSb6nMTccGSs6zhEWFKSz5oL1vikqwFWXkYw1zXorB",
  "key16": "2yS5GydsCg8TULe2AxsEcBSr5pJm8iMdRgRJeHjRjCvaTXHPAt97xppFRSVjByCysW9djwvnMm4dJpNT9rjrr9xL",
  "key17": "3cukpBPNtLraBx95NQPxRGggsvngvnpeK3fhyoAfVe4amnUiG8jWX1wevkW5i7dpirVfis7QoFPv4fNyKFc7Mumt",
  "key18": "9YVbxMmcsvRMfFxengYMHrdPUTvc5xN2A3gL3WcYsbCWrAYqUXhXU3hCkvfHjhu2fS1Wyig7iNpdDGoqkqvFxaH",
  "key19": "4PfXhY2nVAJzLCh6uLReGxhpR12CJVQtD8S5RKhgw7BSJJWSaGSBRxdPGYSRt4fPPQ16umyaCnAyrwoG2CLaUZnz",
  "key20": "2aRCA7tWumkUaWvFT1xCA63pNjVz5kduAhK5jgwSyTNYngxupPw8PWQq2L9svpzg3nr9ykpAi2gdprH9KhYU3RVR",
  "key21": "2Fx7wYFxZxh6pWHpjSfsKCQgEVraSLjx8ufDLzxnKgDGCm8m2gtxG3UMuTU6GyEfEmybuUMXPKWKh3v3mfSXjCh5",
  "key22": "58TzsUBrcaRc44my1xmDaFVkuMEJBLXhtgNJCrUyuxAVFcTAgb8s3JgZLETGRntTsbb7kL8A3JAmCNtDtRUtE5fX",
  "key23": "5Zh7p7uyjPHLqnxPa1Mb3BKtGbxbrtjULLAnXqaTL8cgmnUwsTLpFpB7Cgzy7iTV7uJ4dGgHL1ti16vZZRnkrRmj",
  "key24": "5NxtkqJ4FkiaPjMjixjbQCfJHVcUGf2K56CNXkjWmwhr4NAW5yFJJhHK9YZq4WWKJrRedQbxp5B43GjPyk11BZ77",
  "key25": "4EvR5LVKmPHor6e89DbpSzASwgK6NjeWqzxDR28SA2zRxHDLm77et9MbXw91FcAEeaafBPimhZQ1CyPsFQt8isWH",
  "key26": "H1FAFJJE5JMdfo98p1sC8S6RqSZfzL9y3xj329AHy49A3vop8zoi3oG5XWbXoJFJcPxepxzqqvSXvkGDq4to2Kr",
  "key27": "4gJTj97NUM11jqueLFNHGtbdZy9P58EQ2jeUXjwaWyerj85PufGaN8gDnfj49YaBHanmLzAfbG2woURKfHz3W4SK"
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
