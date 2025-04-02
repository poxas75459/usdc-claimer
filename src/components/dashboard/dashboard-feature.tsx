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
    "kHpNcqxuJM5HL1KZxymHNPmb1sHRe4MSoRNeGTHCWMRqsHSWBdycYBjHKjk9JZ75t9rhjtHgtZQt56afHgVymAo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3geMkgkFZ9Mj3Ru8LwF3F33iD8YDuxv9P61eNoGGF9Wf6exY61i7Xw55RhtZMsaw9RLwn9VKXPQtyS2gCdDTffcb",
  "key1": "2keeRLEiTpFXU9WiESVLhqD4Fza6mBTcmeT3Vs1THmqLKJ3knCzovBVmXAHLBuZBP9aHftybDvWdnmcnMPke151o",
  "key2": "VP7RHB2TmiFCeKCCjFRdemoMBNQvoeTBzRZNYmnKGKJtL8DUC5tM9cvfiRArw8tbMUzUAEZ6mS9SpWhU44Jju4N",
  "key3": "48BpEhT844r2vPkiPtyuCcK9QfUbAxxughmJPUZw4PaFbksmV5gHJf9cnjsb7BNv6C7gWFdqUWczcLA5a78nF3Qd",
  "key4": "uGEGZuVWb8zH3P1VXfKE3MQbU3r5mLkzepbqTzqvZjAPskmzyyLU3KG6s3271c1zDk4Z9asyxmGAUe3DHtrLKTb",
  "key5": "3frX4KFE6Q2z3uBvVXbPzrzNtNV9C2WgNzw1GFVUcprzR1RAbAUsWAG6oAQZpBWgqsK1vF3Ums76CdBd2iwbxiig",
  "key6": "4n7XPaZQXfhdRMWJ2Xhq4yZeW4vnNyDcfQZNvCpvY5J3Ym1syroJrsonSEgdFBcmKceJzL1hakGQwuLFM2CiRnAw",
  "key7": "59K7k6Wj78AsAHZUkAsXTVniZERn43K3bH9JoGCFXN3qu5uQR6J5owTQX84oirPTeXHJnbf2G68cc2VCwGvL9jdh",
  "key8": "48zqJDNFguukn2gEqKCMpSeVSeM5KqivgUXZihYYAojQSfFLpZV52wLkoXjSVvhVzgpLYZPJTnrqNnXURfm2LCEc",
  "key9": "qRBFyRWBCkqj7CmPodQc1VyJ3CWd1jLSSfhMht8GFRmdHLvooyTMpQUpamC7GN6ffDEQZ4vurJeqvMN7T5TiwF3",
  "key10": "5nd7uNNivab1KXGeQeye58WiD7XsLsqWrPcAXptUVWmeU5qqfun4XUqMSuJBrKaQpYLWLmm2TcmWEPR5RvGTWVET",
  "key11": "2zNzkuvefDNmuizGupjvV6yf3xDz13BWPkVkJRyK5UvHsua1WpdsbZQz3i2banWYpJxk1kR5oxgbBmDcG9pt9GgE",
  "key12": "4mQG39zJatsY1GqkP3xqeVuRcB5hA8AUKbZwEW3gTPqWqYnRHgwpfXtDGGRU65aRZNmaRLdjz7ftuMMTZs4oQXki",
  "key13": "5kv6aGarfj9r4GQXa4WRfjQ7YRAZBNeXhq5gkt5L32u9AiNxGwtvGLPLLvQDR4uFUCFQMT3Wamo7JVzhqZjSEmyN",
  "key14": "3P5uk1bPqk1Tekir91kQgevRighTpPA4mA16FrWTgBWRzivEim12QHa66EUo7zAtNy4maW58HbsRhE4ZQXL74PZt",
  "key15": "5skHuabpUMniZA5EvFXQDkSWcCD1mU67jeLp5d1YKhQjxTzyahjsT6JPEXSUG8TvPVLrEhAHENENfWCUhKZtSDWZ",
  "key16": "2xrps895BagebAonfrzGWsEx6czYfP1bLugRtVpYZzyLfwyZ1UsHkdUXwKw8xisjxQeXuCcSH6wVjr4NmevNkJwx",
  "key17": "437LzzL9iziz8SA8EbPBYVp8GvFyKBEAPjnhzPCLg33nQ7vaKTNSnM9t2cMKsAvKp2isPLpdSDucJRQUQ1ZJFmtA",
  "key18": "5sXja3EPoYGvBsgyq2bVezimemMg6Dxouvo1HZt3tvXg5yfeoJBS1mmzC6WPTvG4fnfXHMxpSH5C2madC5ki3qZU",
  "key19": "3pFFi7JE3JnQrTdbM1oMYM63TJgBkNRPY6sfM8KfdsE3W62Yo56J565n6xGudGinAE6UTV2363LnAZU9wu5HFBmc",
  "key20": "WCXWWSV4kXoV5BLYWfSsQT3dF2NsE8Q2gJYesGHtiXsvz6CoqHJNXYHHkycQiuqe4kv3wsGaUfqdEmRunvXCgQY",
  "key21": "5125bMP17SyMHitbDKgGC4eUXTCPLqzvowhoVdLYXyTwKVFb7ezy2g2yafLDBKmGakGccRumk5xuE795gDQZjzLs",
  "key22": "5zNpXQbQ7FG7huH39pvirySQwctiBc7Teb6eUBK9TS5btFSv6TA95n83fgVSZkdA7hSMLXgeLgwUaa6FjPfHk1SP",
  "key23": "4idPex6Rp9hMvocHftrA4oDsZdUDT6AodTJLZfQ4o1Jsm6Ka3ZnRnFaQwUpvEvhdkYLdWPJta6JEdAKooiV1Pvo4",
  "key24": "5steyUXp7nocApXD96yaYs667ebo2CXHeYjifRfbHfgmyGtLLrv7JxyAWrvX1ZwA42f5m7hwo36Q2mq25RY9gn3y",
  "key25": "2GAbpiNsqWsSSXQKUxkxQGtBrPW9WaBCWtD6Jmm5nuT5e22WLzuDH5WqzNsMVgiAYzgWwRYvvpW6ajFrRgZoUYSM",
  "key26": "4vbav6PyKXXBhJmkK27xAyjBCMPQU2gVhkBHpTXZL7gR8nuTrJrsm3qbDz6tbGopHUtEQo2N66n4Ds2XkQoJUkSr",
  "key27": "3rysYeVEU3GBHkSHh9cPZvLZJ7bFfpbEdskpprtAVYnjgugrWKaroYYPPkpLr3zLQ39cSxdB4xibdKJikiVWpq8j",
  "key28": "2GLw61T9CoWoXYD1B9ytFLry16MqeGrXv7iVbjbNKNkgsBpdUfAqtfb68yGxthBPsKf4YdUdbXHd83EwCgfbg9SB",
  "key29": "2tSZtiDv7po8gRS34UrhPdDNULo4WGXdpZxkgBX1c4c6An2NpN7vsHkHhfVkQ2EiJApSxBfYn3Uf3SbvfmpRZqRJ",
  "key30": "2mV6nFX98N2QTMFkxfJGAiqANapSsWRuibnaTwBCaa7Mz4Sx6ymMW6tgv1oSWtNFj5wnH7XrvCHeXRQwR8adGD5P",
  "key31": "4so8BmzGzYq2zSi8gqAvAMMvmJCCkm1WqdwhTRp7NNb5TUJdQrSoaBbQ6RHUHnZqMK9nddpe2zBUxPxNtznKvDjd",
  "key32": "aXmVti23ZibPLtoGAPwLmAQVtmrFQZSHYJrvNTp8xCrodRWoKFdXHsMY3raH1ZuyL5b8mGJ1Uu9LcUgwbDAYj8W",
  "key33": "58W5FvfcRApFJd9uK8YbZzYpy4iYSyZuPqemjq65VNv5xLtD4rJ7YqQufW27UDBJDNUL3YPnK7PKSYJdVJRJRDTZ",
  "key34": "5FMQVdZJf3EiYMw5S4kPDekWUu36HPGD3445nAjLspYfyhYJBWsfYFoVTuUF9QQiT4AotqMUQ8Yzjy1qEV4qAytx",
  "key35": "aavtGzDNJBTfuE57M22PnjJ81Tt1t8ohqas4q5QjY8Zib1ZVPwBnfNyybJPFkuU2gFbVpf9k5QEfjSM5zZLGmrZ",
  "key36": "4RUYyyagAstGw1AAmh5epqKdKhVv8qJzSJxeNMiMQyYMhSEccxsYwBjn2mt9ZX7LLNTHMEbS6NG2Xg4M2keUEauo",
  "key37": "2wJm8nkqknNZfoPh51gC9N5qSmj7nBcVd7ZXdEwXmjdoHWahsQKPfEofEmDyavgk2X2PmU8Cp6U9x3YmhFp7EL4Q"
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
