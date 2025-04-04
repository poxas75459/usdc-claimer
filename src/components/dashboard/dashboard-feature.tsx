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
    "jBCZAYrFWkVEtec5CtmBtREdMHTpPGXNpoXCWtNbtmZKZ2hsutrKD6RFSRQ5FVAQgxB88xVRzAro5PKzz7cLVtc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59DGqzZv8EoTjm421nqDZe2u3aWfUvYPmusZtqBapkv7juEaADwCkL49WdiAAipu579YUvZ2vb5uBcvTTpJiXAfx",
  "key1": "SahVrx653uV7UXohM9UpoZhVXCVirEh1j1Bf3hAVZXqzPFyBy9hrViuwqBMFawyeGEwfS1VhvJLFTPBtELHwtLM",
  "key2": "2226PZBFMC38NX2p56CRdM2eFtiDoW9JcNCAWxwaidVqTt1h6zKzECj6BDm9gpJt9os8pwaVjYez8GU3TAE3MpaH",
  "key3": "5Hcw4aT2pkp31Bi2gkrEVeBYFsoBTn6UjYX2Ude8hXtN7USoAWRKjzY6ZTMRY36gHn7FGqQYhe5PxXpPhgN8bbaA",
  "key4": "4jV1rtFPPH8jNaWLiz5LQmti84SYPtvdB9KKehh3xtsT3asqJBS5U6c6tt1BX5tiLSbpHTdCuySpibbk9DXm3Pdc",
  "key5": "4vb4AyvPBUrM3csPumTqTpmNSNVa1BnNvgC56ecqZ1rsj7jZruAzY58uwuMCWGHdwXEK388YwUkw2KBNwaiMBWPA",
  "key6": "2xhG8xEC2biWX2wzCWb3d8mFXmqS6mVsXdDsCR69nroYGrBjKoyo2THQN7wpmQcccb7PzYaxbBoE3ztfD7VY7nTp",
  "key7": "5PaayxtY8MmxyKuVzKKor9QDPP8W6YTWyRRPvhhzXieAt8xjHQtEzSQzxUrjiRyobXNmgmSekR4xaoA4WBJRn46u",
  "key8": "42zgQ2C5PQuV2Xix35UnMErYdxQf4C2AWNb7bqKxPqHLBNd2Syki8DvhDdQdteRpqH2jPxWfQ1xU4AGHh6brwgwL",
  "key9": "5qX31RxCfLYbbNvo41AN7qtziTdNzj1NvsF4z3NGFcFPDDyo4xraZDc3AcfdQX2isokyiQLRLCaTywF2tMuheCRw",
  "key10": "4DfESvkTdV8msPxvRoLsfMdk7We1UySRjshkynAtTpG6f56oTiQL7NA9yREpvgBD2QxsUwpVpzGw2ssi3ZxHqeey",
  "key11": "4zswv123Qba7fr6XedYoqAyVe3MKSf1fqHHsdtwZBwVQixmWf2KunyCcKVBQ7YAs7gz7eWHYXtufvgYHguqv1fjr",
  "key12": "4eZcuhoHggHG3eY3wgt1pYqDQy7pK1CBxywwK6Sg4rTkHN47eTh8k5qfzsVziAsx89neZqpbT8MbLiMEJGxiueGK",
  "key13": "3msEebr1VByUbPf3rXTGpb47L6szwRens7t5iFb7MUBCTeqLtHYogmmFMTJxV9kGF5ocqxF2rM2j1Rgb2Mnz5gX9",
  "key14": "4TmyLDr52hhkQZBhcRPX65d2UcQ2xg2G6E6BdkWJRaagbKGM7A2ALUFkyvu3yMWakkwyXEpBTZpkg4DtB9jAp1Lr",
  "key15": "2GKfQV5NSgWfr7TW17gbKQ42CAm8GuGqiBwwpd5S3QaRwy4AD64HyzmiiuupmvhJDNuM9tfqkN7YVMsXnDmnytXE",
  "key16": "2t37VwG13TVesM9KgAa8NKvMoqQkzP2HGGJ4wZzoNLahhhwwy1dqwXJCjPpzAFcCE3iqdtLFNcVqK9FUDtEwevQA",
  "key17": "hPmddZ2tWbiqb1N1K6NhH2xuPiPKFoZHSawF2oDPuvtMgYjgHAPVjaBFfkazrPGy8GfnoxktqD76bm5AtzDTK3u",
  "key18": "4BrC82KYhiTzebAqMtpvw75pdK484Nc5ttucgpUYWoEeUbSkuuZ2fGZ2CLkzhcQz6NiygAwco2omhEvjQL1oYd6c",
  "key19": "4yCJssWRDyf76ngiXZkH6PQ6qiqAFHcaZKXuRTY8n49XjyfuWZTqApLfp2d1t93auKWyNLTNNTh9DjJFDYSv2jyd",
  "key20": "1RMsM57wi6ZLRo5x7A9mZG2x3PbF2imYe8fyyCHqjZJw4BpNeyKbz44JGaWJfSk3cCxU8hRvgRJ2LgcdB5pyPSG",
  "key21": "4dgUqLssoxmi1qHqJAm2SBtnj1zrGFwXtvMFchydKDSKZpyoXyJcFhLX3XkhnfiA761YCpZUMk3f8HLo3rkEVAhE",
  "key22": "4ujGNkfc6rPPtavfsRbGo6zB9kdXf8YUBEpfKhtmwutdxxW2Tv2isgaqhcwegTPuxNzhU5rYG8VbzGpX4c1TPmDG",
  "key23": "53gYjdzNJMBVpF5C1B2tYeMy4YyzeHVQDNm9nHZFvH3mF8ds6GSW5HBWCN6g8rbvyiZ71CNqavatuHQybSaVeB9D",
  "key24": "3LvBSMXNHbUxfaEkfScAFuH16UQHGHWcNDm4sSV3cphnXBV4J4aGowPAowbwrCqHGpSS6fjXgitavZJoo3KxQEUN",
  "key25": "2K9qsP6Yp99cdg3WGcX78UvFPTqFABoHHXkVowQrjHy8imnUcTxv9QE7ziPKCkhzcaTtdS5P6ue8hZeQV6PR6rLw",
  "key26": "5h41hqX8ucE17DnnqzhojaXfjwX2qbTrUJaifuAQ6io4VbSikeA1XmctMPCBnkmaPsx65phAQSUU2WhJo2kMAcw9"
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
