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
    "524ECQKVj95fcMn4hmRzreEYjVnxaga5AKLcyZj5Qrc18HV1ppMVRFGJjgfdqpLxPMsWNp3zeCsE5MAyzq59hh69"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3F8wSHnkybrcDcbTRVvkiUPkGzGPcSJ73CBXh5dLpwhD5NWeGDCkDRT3H6VdPVLTDuzHFxKbRwYrr4brZogHYU41",
  "key1": "2YYUednn6CAobsDkT7pHpU45rM7eK13bivtnfAurVEDBm1qJW5wwXLKGEg5BxBrx4KMnQtFaszt1s7ACGiBcexGP",
  "key2": "48uroQy67eVwibRVubaKccmTaYxPpHkq8PDE9MLrBSL42MmN2hnaQGrjPxGmLMVkRy4EnTGGAwk2pmXntD4ASx7V",
  "key3": "5JWYFnzFnTLg8wyZLyE18pTLpq35wvU4js6ng9ihQYCLEsALfTaFCgktpUY3MfunjJUHRLdca35Js1XUyJhJGM89",
  "key4": "dzuFbJvM9sxpdA1bug1FmMP9mXga7xhGGbPZGjhHPhbhhDk3YRz4M51VsNjsbBvA1HuRAeeh1SE4z1fiLK1MxtF",
  "key5": "2G98q4bseZniK7qxzjSNL88enz4EwSi6Jh6QmB7qLyvQiCuh6v8i58uVevuejCrhzsn57fjuSPfRT2nQEv74aPk2",
  "key6": "54qex8T2owobdo95yEy4uvYUfawGtvt6S9sDEJDpWqpinQmnqBYXhGy4qAmxnsJCxmUvtxHDJh323KXtvHQaWUsh",
  "key7": "7ZfCC5Sv8zioftAaTJBaWvV8SkDZAAoSA1ko5VYTfqVPgjQUdhMJQF9oN2tmi3BfpyYa82vcMdNoiBG4RRx82Bw",
  "key8": "A4WCP6Sbn19QYxSuGamufMBrYh4YZypJzS5fFZrq6NydjY5oNvsvinBwx7FvJERMBRmtznFea71XAQsQhgrSE7E",
  "key9": "2F5Yo26SLanyB5eaYMvjrTDiJNARAHKdunG3E39XKjDgYRf2jKSnRcrHRL5M9NdywjvXToxnAETcXGPs1eMxoieK",
  "key10": "5xqPYdUTfgzsk24t8RHDEcia6twniajeNAum9VYzHkPy4BkQoKFELadJKZwH3Ama4wVWvnjRQGASDQVi4xPfh2Dz",
  "key11": "3aFtAYBztNmUS1PvVSuTuoxkkhwrwNC45x1UqhRBaDPDdTms1w8QR3KCKtFrmvD39hMzUuZQ4sg7fTcDTeJ8jmWp",
  "key12": "38ieao7N7GaJb9jtvFm727MrfQW3tdxG1oLBkqZsu1yM12fcvnTNYRKnuy9jGLUGo4bQnGnWRrAe8LzddSjwLjgj",
  "key13": "55ofqBVArXe8WfrX5CKMti8gXZAfNKN1QC4ZhnaKXTDAx5NHEY3zdjkG7S9Vn5X6rbDMD2vHcbDfJ88oGKqsNU84",
  "key14": "4Mi8kNZHrJtyJqVF6g3gZLU4bZWcvzXp9cdQpLgAqUW765FUzswQsQtNdCfF3D1aJ9NzEPBasQvKWsWSwd61rhMb",
  "key15": "2RWUKA95xqCLsFcPY6SP24YcQGmNPu7Xi45oX4SLbwpwQxx1rA4Ejuq6VqYCPZTnSQ4FnqHRLxn7u4S1sRALzMxi",
  "key16": "2oQiwXNU5pSFDevSrZ3NJm6X6JqMa9SptQA19u4nyZommAbpXG5VeG1HEFCapGDYwjgm2irmZqMiTnVV7D7aDLUD",
  "key17": "2f7A2GUA9RyWEG3Mmj7bQmNLyLp4ktEsrZ23mXmxpLQ25BRwaRehimF3kiKxSpGY2gobB34EDhs5ZEV2ED585ouj",
  "key18": "4D4acm5BaWBKsb5H6LWVWKac6dUtDDJo96wQGKFLxaKKraNKnEN5eg7rcWHVBibjmCma1x7iJvwhXhv6WU8cCca7",
  "key19": "2LEA9RPtoWnLTUkScHD9vh3eTEwy55oUqjAD32rULkvnTx5FN8GkfJuxCQ8Ao5iQay64G9sAgc6nUmaUzpiCUsto",
  "key20": "4b1fpwZHFQQw8t7yZzas2dt365eAWDPyJwS98X77pqc9wFqL33qQjXZX9k3YJyxed3ZaSoLK3dAPpTN7xSSS1zUW",
  "key21": "5VkEJXFrFBHidywNUADyg3shGYD1puXjYMG1U6UzLMPd5yu7UNxgsHPMMtSNh6PZxY7U9tcE2Ca88mvMJvSsiEXo",
  "key22": "4U8cnVd4d8WmqFeBW1827wW5sBEacz234zELuSVNXDYYuQqtpGm3ifTNYc4oN8EaFPiKA9tbZ3QBMRJFKt2HNAoJ",
  "key23": "556DhEVgw7fDoAhiEDD4Yo9Ns4oU5bhbZLBkabv8k2uJXz2mqgdBxrXCVaF7BWWTwSYSFJPvLnYubhUbggzWL5Yp",
  "key24": "5gCxMvxsoTYJVi32bvbRTVtcAhEWujaVS1oBmw1nJMxtuTy3xqGT7Niio5rYW9rW9BSNig2PqecERv9cHnAJYN1H",
  "key25": "4Ejmzgm2ZYphhUfU9PP5vyKtNdKRa6qchERLpH3EroaE4Ugmi5oV7V6aTMKVAtzCnyHg8FfsnTaHkA711tnXvDB1",
  "key26": "63xpcVc1BjGzcFSE4wew5cMZM2QjtM9Lv5fdRG8cU6Ao9mYUT8TpF9YcRxxpkDhCGQUZGtP8QKjsdZGiyWt3c99J",
  "key27": "67MJDo6kQ9o5zpEDL3NqP1bw56379bAxp3xjUbrWSj13RBgCVSLvLTKH9BN5NSqTG7gxKHdXeEKBCoL91meD3fWC"
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
