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
    "2DuGv2gnBEJ49iReEBEtVze4eqLmAaeV4yVyTRbq9jjgiWaKyMqDUXvs7qmiRxKSh2NaSAQfDRGUjdVq2mLyULQx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZbLUw4z7TsFKa4i3KPCyjpoEhPLcUmrJ2BTBUF3JaXqrTax2GArkykESq3A8eyM577tBKbEDyekBfVJZXogpoHw",
  "key1": "tQTd9wfpn3kCBqZz54hB5mD61x8DdLwWSqYe2pcm7vqktzsuoYeYYoK7MRzG9zXKTtzZQ8tkAUwbmV7dKr78uoT",
  "key2": "3eQhMorkSvtiPs4v5N2nN2QJuCiEjMaAesR8WkhF3BfWHbLJE79GTfRuEeXCYhvRLroKju5GFuR7Ztew9xzzKfW3",
  "key3": "4x53y9Z62ztxNBPbWCuYGRLA3CVtKF8Yv9hACrGoi45CEH8fZ4YsNQVsNUtpZxaRu5Wo9FDz3Vzaoz2dqyAbBBJx",
  "key4": "3zEf2DfLYoCXedJA4yovDrkjRmYQcPMHpxUqmaiN5hwtdCaeQtmKaeagz9JiVJjNbTrYPdV7XKK3z9Q6XXDY4weA",
  "key5": "2arKM5E6UK9iBKSJKBxNrovgEb3B9CSWdgEut5C8QBknXXKMocxE8itjpqvGHnD2s7sNEZNhmeSHkbw5Mw3o1Dsw",
  "key6": "5bjqNYPDKDibbTRsiTXYYTwR6JXUwgE43YLs616a5R4L6rT6JzrHVh54p9oXWuAndoVSY9PsREVWcjQmLfp2H7Bu",
  "key7": "5V2nFYw2z7tQJG4a6x4MXjNSNWq6fApZxwVbrmpV8oZwNuX5bmBgzhivLKy3cuVunmT1V1whDkf2Sob6JBB58Yjj",
  "key8": "56j98A8DDGhMJoH9AufokcghmEeUfZqCC49FSeWyM2dCZkS9315UzvVjUQ8vkDxNU1rtLLTZ97JpgL2oXGoet9jq",
  "key9": "58mg2F13GULyViGZUiQx9A5ZbPRLgMRHCFkajc9Nnbnkt7VVJm5arGtmaNywwz7AbAjCvwTo4Pkoi4BiizPqH59C",
  "key10": "3D8qAqDAoyEHNG1Nh6MEJZW6MoQ9hGcYwQa3PgDtGv9TfQbK3WUHpVqh7Bt5QaELKHaDUVk7s1S6LtZws24gzW2P",
  "key11": "4nkxiMk5Vh6CPzDRDfMo3JkbYjcyR6k9VZbSBPESuCxTw9fVV4QPp3M4Kjp7mebBwUNXS1xzuZDY3eCQjwAQFBKF",
  "key12": "2TNkVowCeWtRohUqL48wFH5qaSKcaBxpnKkasuKkGfw82HdRdHftxB22DedWtNpM5JARKWKs1WJPQz213fPCPGjE",
  "key13": "2VjcCVRmUqzfhSAWpW42WHW4DQjPCNMUfKkZ2KBj3wyAdwE723vynU8GkZDFSpJgRXeXmhdwYAxx4drCqDhprsjw",
  "key14": "41AZQxikSDWNWMVBvATWzeRQHJZSmRLr4SrWLETG5qpDYAnbJw6amDNdtzZZuxDCMf2sUkCT4Uabar3igRa8Nkcj",
  "key15": "2CqkF4zrpEZigm69VH1Co8ZiGU5sYJsBQferz3UTtHdLG4ouermbL7srHyEuwMJLPy5RDANuye3zhiaaPKsEWbW5",
  "key16": "3gZNCLEfN1Z4r1GLybXD6kv58Wifb3vrsdvZZrYJ3jkLcnNGqAE3qTDtoCmJ6fidy4BuoEKmqL7e7fURHLKWd7yB",
  "key17": "45pCoV5G2YqgLvybZbJoeVxggXoWTkQA8NmeFsioSLTyJ6dAaduGcimDjtP9EcDSWgSkm2kVNBEMq45ToiE8jC2r",
  "key18": "2jVAJTQYRSVQSpKXZmFMWKWJTZSTdmKkHWmNTcmGve8JgV2vGj5Mra4VgMe6dP1de3xWdb9ErGeUpc6TwviV7mgm",
  "key19": "qWheumk14XZSPU4k3LCTZfmh34PeWp6VK2HnsaBEksEncnonM8pqk2sMXkFbuYSisapXqEbSfLqgzFhJNsyYfSk",
  "key20": "GorTidw7Rf7mBAP6Ma6FXQkbVUddJ1ry5gwK2M666MhoPTyn7h146YjWytSouCxh5Gn8tAS1vox2dFkxYqrihdE",
  "key21": "LqZtXghXyXihnxFFdL2aJEFwb95N5Acz1gmPsD86fvB92YkA2W347Jhub5jKV39StVJXqk13QLP3uhNWcoETuhm",
  "key22": "4NhnTYoSqb7qLoQCqHP95TSSKqtkeix6R1igEgE5gFyzQxsVAxZH72mFX52mdKvqexZtxNCcRbpGo2TBDubg9KxV",
  "key23": "NfmJqA71j6K2ShZbsY9PMtPy4koPy9DKZp8S3YoqbhE4oh1M9oMb1NTW1sBiZBy6TooGRZpJ9bdiKvLa5qXDJxr",
  "key24": "wDng8H6jcSEFHW11BEgtBrHHviPRXxNvoLcZrSomPd76pmJwnE4jQNcaMfDhtT31m6Dx9pvP2WZK118DRQv2YpM",
  "key25": "63a6Ko7hEMpzwHsbpumZe2XEhsne6AC1XCgxxdSSjgT7QeMp3b354nmQWB63vfbQpKHqjdq1rFvVyQ7ejoQeqriA",
  "key26": "23Zz1EMMLPRC3szHaLgtxEt7qTJk2mEmMWgbfSoeDMfYG7sPwWpig4hbhjypU4LeECj4K3d3eEq1bgPQmPoVbzuT",
  "key27": "2BNRASj8H5bPzR8xh5SFgzUi6xA1rSBVZ9HJztvVV9o7GcLycfEFTywcyuifUJ91ZgkH4EbezSVrgHzGa3xHrCHW",
  "key28": "5Jc9RrmXPD97t6UPiDAsBCNZXeWo8p9wH4JDMTzcqtiG3P7PjNUbX8ErkGuN4w7uExHaFWW5wiXKTFr1k6rjURdj",
  "key29": "3gMic7UcjCtDyALxWTzB3AsgwpyvkhBRizwvuRu7Y2TW59pxty532J2yVkWUuWqeVP3v9FuCEZPev71CxUcwbuCm",
  "key30": "21XWvkhfBxZz54PHpTmtSBFyf6X8qWq8SY1whU5Nx2WF2kMPB6LbwqDpGYVTiiVTME5aHWTSvDdRXH7Bho7mKDpX",
  "key31": "44HTAJ8894fYCeSYFft5qc6LownHBxNh3sqNEYUeiU7Tg6pB16Cc6Bd7PeDSMHbgzRPGHyhuXaGkuc9x9FM2PeRz",
  "key32": "25m3CBwqgJBycbVAzbchEo4Ejhcr4ag7Enb2cjBcR8nBDNpEdhpfSPfCpqx7tsvt8zMUK2PCQL1mtz2caf8VmRTs",
  "key33": "2sxH7auwW68mVbFULAzHf38GwNVAjSXzdYpQSyUVTLT4v1LNbAYiZdtXKiLFCauodyvQ5Ae7wqmSZuhzSTeRmPJK",
  "key34": "5T38xZir6Am1LxUP7g6Qk6MWqE12rEf4Q4MTirHSTvQSKPKnMhd9ZDo6zXN11FtusXe2qZ8j4LzBZxQ7eT59AG6T",
  "key35": "5L2TU6tgGa3EVnNymW2Qk8cY9potvX3htagzmxoYxJgzQptjMLUD5DmQAEq3P4urM1wPU1SdgTQPJjxtmYnsvme7",
  "key36": "2UiG689stbyFeJSMJ8oSvuYqVWj4JUfhascBtcurYhQ3tpVxqch9UkHr54ri3BzBaoLEjt928W4ehjKszGYXqzkG",
  "key37": "3jYCjCFhnhM5aernFsjbVHKVfB5qAo2QLZ46UU1VTrVDK2Eb43tAg3RJPx9mkcaoNG4Vv2ypDWJHSR4NwyBuHwLK",
  "key38": "612HbC3gdw5AqERsyovza6saKKCW5tYXPKrGb13wKeHpNixyCnPWcpsutNpf5WSypq2vCeGaTHb1HqFqqdue8zuo",
  "key39": "5B68SNyBJMHrvsGSTt6M1pbMoyK1ok9Xk2XrGoVnkzVPTA4Po9Ygzba9pxcGP5YAU6uKuHmomh1nmgNk4PtmWsCK",
  "key40": "4mQCVF9cqbLz4v3MVT6cKo3b1cRDYqdPjxaDfnsYU47aFJ7WDyZ9jJRR3CetL7n6Yrqi25bnFv8PoFUs1wGkyy1i",
  "key41": "9ahnKGQaYDoMGAQMmaXDBTARJernbfrM9hab2wRkkybGvBszANNmdG8eQ4bUYLxX3pAjz66t846auMr1ws9kq5t",
  "key42": "4kxXeo66u8aB52RjBUx663BeVspTVQJRKiYzp6UhgeKJPGZb4Fxoc2PQRniZcUrr7JmThQ6hDMLDPrrUgV7Ctmph"
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
