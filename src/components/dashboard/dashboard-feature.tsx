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
    "3rqm3Pjcduf3dXsVdvMvhzmcUsLFKbcmW9nuUgkRBcToWqTGJdNNFLTzpN71KnLNHqbRFwbTnkFVZcRgm5FPMsue"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QRCjsqwa8LXK3WADDijYo4uSSFSrWW9zdU9N8VC2XATCr5nKamZpJcF95WYRcpZ4ucqFFerZjdijXMLoLJH78uq",
  "key1": "5nyrpK1xcWqAEnrNxfF8SehpqwpvevzLFtVguGZYyihqR46NG3LkLd3FkpNYMjNUFesxpRSWbh3anHRT6vw3PR6g",
  "key2": "z421r5aE7nsPpBfaKVuctQJ1KkLxsZJpokaxn3iJM8gLryNTJt4grKU89izmW8MzDjDhXx2hd14vE9NAZ1ia5hp",
  "key3": "333CJrqiXFqp6KfGs5fLxSz8jphQp94EMDnn8JcZQ3rKDCHTnbikzYdjLzwY1iBpEq4ys2zLXNMCFC9NRY1es8W2",
  "key4": "3r9UNXeqrjbynkr2NjGmv8MLE91FzZfimH7WXARYCzZiHdEGj9m6DWeTrWtpqcmiZU16GMkZmX2id2Uq2HdvmM4P",
  "key5": "3vc2Hi8gZ8pYCHbsujqrv318d1jmfSnnX1Bga9apRGSHHHuQZoK89MgmjMxRnXBKnAhRFguPWU6rcf2VzMzuhUs6",
  "key6": "3MGdyu9xrf6DkUv3VyKVAQd9ZW6LGZ1TR71JUw2aZ8MCNcrmgdTunFNmvPypD2xYYfne3KPdxDttcKCFTTWrSzNU",
  "key7": "4kXjDYtxZGPP3k2whvhTDufNpDYKxP8t33Hrj4oxBUCEKidJcQ3WsSYbqr24VqKeiAxwve4XPxinXTygCa2SWobm",
  "key8": "Esr7mjzx1yMRLzhCRdFaXde758WjExs3F6mLpwd3vYFC9jsfizzj2YoEfVCzP69tAkgXKfiZpkhkicR3SNjLW4Z",
  "key9": "4yh2vtE3t2RFy6RNMHcD5dQCaXb41eidtYfFQ4HgCAzRoDDz5aNuFqiasWMYD48UryodKUbeiFosreSgZDjWtVbD",
  "key10": "4r1Vq2aWghpu1qj5sRyJsFUBfB4yiG8cPyB8kHa2DJfAR6DYYKCt7PHV4bhWKpJGwBvHoJGpxKGzqk1LQz1DrZn2",
  "key11": "JiQpvZQEYJa2HNa8LgUHiFg1fWpxyFWGYJBTjg9nw6uHAvyGprNT5EGstzmwCSFs44tWT4jNAnd9kskKWnrEDoF",
  "key12": "4H51U4j8vbZVnVX6rponuTXqnUswmUJhdEhJPYjmprpW6jYc11rpd9h8k4ah7fB6Gcv6pbFrBCwR3vHkGX3EUUXk",
  "key13": "4nSxoFfo9izgi67n6dSmqUXnFpZe478SYG96LJ4i7P1woVDNEiXqv6MvpnGZpkRzvn5fkm1gzaCVF8yaFR2ZvYUF",
  "key14": "2Wtegmnqe5B2ne8yaJEXfyubWXHiTdidEagC6R6XPFczEHgQE6F9gKCjWvym6eRC9bsNLXk5TDRDDmCKeTVt9Zta",
  "key15": "b8DoETpWGkPNxESHbnoUaPrYf1dfieHQ9sszYz6TYhG1ZQTRzZqNysmxdX6F4v8kXTdo49dQBmn6BkeyJ4cQADL",
  "key16": "32PvVfKUV3kuGhLyeMjikrH4pbkipsRZyusQbCkVwz8nUGPePHqWKwsnAw8aNZ6KcFzxKbmPXJRCq9Jc8j5e6ERE",
  "key17": "3zyU5SbHs1rKhwGcTiPgqiwxTSr9fyGs9E61DyL7LienGUsvDABbN3qy18yyD5gpZPX2ieRmqN9xWGTGCH6pHPZh",
  "key18": "4WZkKaQmiK9oRSv8wj4gxE6nW4uxFGMv5pNjmU7k7cuDNPnQjo4KGicE46H5bzfYutEhwSqM6WFS8zeDcnLJJWrG",
  "key19": "3tTbe2aEZzVznxbUE2VbwEEwnAmiZBbHWxjfXpV98yYZGvozJ3N1Rchi22LLiMtdFTeuWUg72GM98E2pvvKGYW3A",
  "key20": "3XKH6yQZVjnB8TRjdANmsCpBAqtmnRfkhiicX3YN5kajFr6jUTJhmnKE9En6x22daJqgGrZZymLCNCP864LtpAcG",
  "key21": "f53WWFhH3kWNdh182K4yLbgJEaHj5tvH8nwznYLWWepHqujZ7vgmdLh4z5RHYXVLbBQ5r18C9LA6SXPBJfGmMkX",
  "key22": "4vVSwydhAf29S8QSrR39JHfJwET9U7thFTdo5sNKAA1Vzynv4mDMCqzMvAc17L5ZxUpauHZzrrBZc7Vgqvzu5ED5",
  "key23": "67ehQwSQj2VqPpgL7HeyK2uG4MCVwFfP5DnJG5oDyz5nzDyQto7YijMqbKsBrCo1GdEdaGssfacLPsAu8fMXAdd",
  "key24": "4PDnDxoLaSAqmZ2fEVSu9wVUXeCYuzJzuXmjgPFg4g7oJ1nQ6iaArqj1sYXLMrsNM32jhvb5mFy4UhLBawZJabDt",
  "key25": "FNxPwgtaySA4RXXXpFkLDBKgBL773q97NZcYsH5UCoGZxTXgBehGWyCcNQXh78R1u8FMtS7cxv3pbijRs1FAsMZ",
  "key26": "5rAA2X7wE1owUw9CBpgVonSEapoAjLYypP4p5TFsfZ61Ko29SScjiHKULV9d88caRMb4pPbPH9Ej12TiR8H26t2c",
  "key27": "asTvfwaQoizGDpPTMTQyTHKZB6EHzFcDCZuaKZMD6nr8Zg7dmBPodiDwgt4jBnd831xM7YatbLYzuhkNyCnwhXD",
  "key28": "4zhnWr43WiU8S6mP3yZxi23574xw31AtK3r558e9zjetwCgLYo6qcSXezUw8cjxMVUo8aYy6T2Qq7GCeDzFFQnJt",
  "key29": "4GAj95gbjruRnLkHDsy9KJfyQ8ydZV5C4Mio9MhWNERsHrUqSrx3eZHBkeKmBgfrAdC2XVQMiETpVis7mvW88KNy",
  "key30": "uS1u4E9Pz3A1FVhonLvh6CE8gxaok5zKB5EFnYog4sdmCPv3WXZTMHfCsYd9eEs3FMWprxH3znmHH8nbXhobT2E",
  "key31": "32dfQCesXUfMXTeqxiPjK8MFL6T95oqhZ9ZY3kr1FzTnEAxbFNaLW6wDa69RVdWzH9ZeLiMQfpCanqEKXBuqcKCk",
  "key32": "e4in8tq2HskQauHsueQgKtPb6tCnJujHxVQXJ1LNR9QhKe95kjAzZEB7gQ4q1i2khqrxDzFnuMF6di4gTG3JiGe",
  "key33": "2R2f2J6DBeHpMJAQ5NTbkM4cCUmAENa6AmZfec7JfaXWzTtMDWsbtqA1AwyiVSfwAL1AEWZxyENBBDabwfdTnvoz",
  "key34": "Lq6wtxq56w6zcYKE4654xHsgrbYZp7sHU643PRuffp8fxfJSg4hDZaPqbutTgREbWj3N4seP9cTnfBqHfYSsncF",
  "key35": "3oLqjusLzqkUCvw6uwGL4er59hunihtuQJwQEENGWQwsPV23JFX59zJL7cGh8cW1hafWhyZsNmNEjpAnbbd7HfFh",
  "key36": "49RVbGH91ywdB41PTHuZ868HgkaPrXXiti36Wzpbosry8YqFn9cQzEEJhtDKC3MyRZXmXZHb2ab6custAe8SKuS9"
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
