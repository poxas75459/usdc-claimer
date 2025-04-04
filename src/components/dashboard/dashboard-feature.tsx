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
    "4FDWrtCa3pCynGttmrFJNMvdGArVA5M2MHas4sAsvf8W1CGMv2gH2iMGGKeAwgCvihVNxmepfpropCQwvKUYZRaK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58eVisUjHY8gE6wgeDZcj4SC5SFgg4te7tTdSG9uNgtjPaMEFotb1Hfu5YRX9x9wxdsDMjv7f2BjHKx6ABZPgMWH",
  "key1": "qHtasaig8cQZgR9hQrzZs56ELcEdKxXKEMsJz7cN7fXQCQ2oM9vJUpwU1itzYXtZiasUBqm8NeeiHLWsTpRpapJ",
  "key2": "2ze8JSDBNCE7PNBD6DVrMr81W8Yc33WwhBWKxMJZ3cMKxnUoc9QJaevzURC3ccHgmvpQxBiqN5YV9Wz5XJYT2t8Y",
  "key3": "5pPzX8mCtQnv3teHX2rGfEHbZoAnWNKVuCxTkzgKvJ9jLxjMZzf8uHxRbdFbdrAXbbJjk6DS922dp1z5LDtEfxbD",
  "key4": "zSARo2vgVDnoRhWDBwpVmBKJwsJj71xkWfZuHqrqhJwjF7arJzmz19qqXV8Wh3ZQbeDfZWJtN8BviqjcR4Qzrut",
  "key5": "56M6EzcuxVEvctLt4d6wnTVWZ8XQg2kMKt6iRyDHcEKH2mtsaerWaCxdAaU96f1hta3gzSqwe3qt4TF9dHUZLSWy",
  "key6": "3nMBuQV2sE22WNBi7LQh7SvMTQ4bCABy1QMSDnSD93QEKhiAgTwiHtrUfmLKJscNCXu2sJbLPmwMEaSbuhM68GbK",
  "key7": "3SGQiWg9rJf7XSctKuyivfwNHjj345g2X9jhkwaPBuTfGY6mqwiocZ3vm3M1Y7JYdiDoJFobVq5H5VeQvdtTwXea",
  "key8": "2quCKwKda7qDo3nbtHmjgekfhym6psv8vxoK8RWPBmjKATCxwDA4uAYgj3W8mQjgtPe3pFvw8Lc8bixKg1WhncT3",
  "key9": "4NFN7ihzo7812zRUCBk45ExtuGLC3kTavQ12AkZ4tkSCfKE5bz1rFYq2dW8r6ahEzJTJ3VP7rwLmD8KM8ue4CLhP",
  "key10": "4eo4tPXdwSFTkafnuEecUMz74i8QoqVUr2G7ZwsFc4ZQdpaj43cdkLiPwQvCW7XYoY228Twz2gqESPwVBy6GC1M6",
  "key11": "2J4KuDohYHD89VPZFwhfiT7cK7r2sniNkfvLPx5Pz6ue5dYVvLqKFNNzey8sh66Tf8LXw9SPc2c7ra3gh6L2wCmN",
  "key12": "3YPhqVbWjyjcvsA6oArvJfh3amKG9fKWN9c56fi1Mpiqki6b58QB6ohr7Wz15CsdSZNa7q28zD7rt69nnNTGZucw",
  "key13": "53h1fRN5AsipXKERt33rpizS9siyoHv16Vmqwghj9hdVQmrFqsEFSzhJWRh5X1jmdZsyxaYwWLdSAY8TQYtEiok",
  "key14": "5S4CgfUqvk7s9QaFLsunYtjuY25BYM2oGoJqGtKeCW53s2RJhLU13Jkvyimiwyg4g74qqKEnTA2gQ4yaBsHq92ns",
  "key15": "2C7yAhn46yBZhJ1wNNTSWfivXEt65WCNTXmhfgb2fC9fFk1yeZrJ6SUMuTR6i8sxWDEXKSYXm4umKmcHQ9Wdf89a",
  "key16": "2jvHWqVZLmmHgaUT9QqErAQB8LCYRyoch6gXiE6ARpb252iFt31yEGE1Eb1ig71toG1nifxLkrSnnZRmn5Q7gXBG",
  "key17": "4Cc7GoeyBo9a1zBAhFWMiqv57wioWqr3e5QiEQbqcyUAvH4N8jzHHuNcYcoBiHBMRRSPULGWDURp3X5DiNhRZhSC",
  "key18": "224JxqHuE5wAqRGBtqXBCjEzFc5uDPupwdyDWSQLQueUDuvWAYwPsHH4LmarZniqjakK4WXKBo35QcUnRL2rnfyQ",
  "key19": "5cGVQCJYGiiTZYmQCAGjcwnHdoXxDmDy9nA61EchEGvYrs2qnDLkZTA9nGxxU3WbBaZWj96pTsJykXk42RjYsGL4",
  "key20": "5iy6WcK47arEPBVx4oH2kojfQcCnbP4hYusYa1y9rorS2HKwvs9pYrHpBdJ78VTrgouuuefRjjpLAJBX9qFey7vt",
  "key21": "3sUfApT1FyPNZ45mNvmZwYDicaDqvzicZSGiAuB8jV6Zim8mWZSnAqQyeafPFy8VimybHDGFm1aSHcBHtfQmYdVv",
  "key22": "3ugwjnZGMog8E8SgFn6GZLfvcAponLY7Y6u14PUajuiXSoEC4Za2nyx4sKevpHtCTdtCQzJ2YwGdUofgFqV78jJm",
  "key23": "2DWWapunyQpCzGab7RboMwjBHZNh55qZnupZfxJjFmJpJqo1fNbYjddkGpFr5ryepte99Jm4PhZmamifxUvf7b4G",
  "key24": "3ofqyjbfyTmG4egyCpCdC4mEa8usLzVWKqLtTkUTo8vqot62joYPRepyJsMZKnVa14goVpzSf8oVJYU437S4sLM8",
  "key25": "4fPWbQsZbxT7gK7vPRAVaCkdcpKYKeWszcpLLx3bQZVC4nmpbF3c5ei3Y5Q9X2J5SLWdtgVUtohDcpaQvxppw2f7",
  "key26": "2yGUc16oQ6LUAxwC6aDkLPn62p7bReoe2eQJXEwYKgDgu69ykKzCdAMfnuwWCcXtGJuzwQPubuA91X2Zmi9kCqq1",
  "key27": "37uZX1mrBvbjmMozYkVnR4Evz7miB46xZr9VTbncq4fxXxsndNnv55rfvSG1JBA6vnDm3Gu8Mx3mszeu2WXryyG4"
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
