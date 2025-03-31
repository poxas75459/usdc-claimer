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
    "dfTg58fBuhUwwBdhYtfGNgSka6QnCreKq9Kpx8fwyXdoLXuZLKTx4FvwEu2tJb9CAG45pBC4Ah3szX2R1Afxju8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5r2HE4tXyiLwTErBwevipEmSQRbxqWnhHRvms2KfFccVZ1Jh4EpFPoHVovhGocb7miqMC8t1oeiK1c2bzP5AL9fx",
  "key1": "2D8FbjpcnbYkiBeWsqxuf38tKHYGMhB92YvPKVvRrpBQXC7xYG4Uvw31Ayb9EbG8knZEHBAoDm1bNLSNYtK2GGyH",
  "key2": "JGxWQ5PkMyGBCfkKxht4zq4FhSEvUWTZLcN4H4f5BSkn3aDwgA1Bud5LeZXpS97AS6ANPY1bQzPfh4vvkcu5Pud",
  "key3": "EtmqiPKcuAFwErMiuB84j82CRG4dZWYwBwGTxG9BCMF7CxnuSzacjvcXptVtE8qSdfwQ98GujDZGRAackaJncQi",
  "key4": "fGneYNx7A3NuPseaKoRgeeEKK2juxqqaCgBufrpYb9CJpSQuyAwCYnXWrxbg4zgE5bYnZijgJPUpTXYbw6Wqc1H",
  "key5": "ikA143B11XgtqC2c3jZshqSjoFp7YtuEq3Chhhx8L8YdmHfZfr4jciNAVRAee9EPG7Dfyex9gzxTqgjyFmYTnDa",
  "key6": "4WmEEKKXt9WTW6vWBYW3UCs3tW6WQ7QLx6NUgkPRs5ovCJznoPFc25ZibCsGWVZJqduX4ZrN4AyyQX127fCUXpab",
  "key7": "Eyk3eVBFBvGWfjEBJdQF7TiXgRQqVwhnC3Xm5rPG6CSn6aTkqupyEtThVr3KSfU4M9z6tL5LRWFjgHHWnjoPNyX",
  "key8": "2uRcmR2YvS8BdmWNRBScwYCpsFpNvrJYEug3UZ9wcAAqhk1DkrCzWBLNmoguxnvXHWmGt7jgLr2uJ55Lek96FMue",
  "key9": "58RwnZDY6qn7VCbsE3pkctkmxTZrnhpu1xNJ4S8zBtSfbTCCKwGbbiEWPbSDDMPBQEL7UpRKJ58j5BZxhP6fUA3n",
  "key10": "4bX2ZrTXU6FJx3Pu9wym4idkvHN7eo2sz7TpXrEie3uLRu38T4GeEZVvi5G6wK1mViUYh13MoyxnyLtrMeGrkr4T",
  "key11": "2QahggQPLvxPutQvdbJ83ciAdNMGeo7vDZeYr4qSqnKYZA6UsWYACaGj6L3DWiYapSoUwUVrXh1fPcEaeEFa6d2",
  "key12": "4JMTy2kyt2qFtDXt4rTs2WTeFRppPfrwDxa5RWYUXbWfbQkGS14DYuehGz6ErYFL1XPBew6mUn3W3fk9APnp6cuT",
  "key13": "5KGBCoSbfjvwpaxw6iUrWxE3bCXuwvsKEH57iZwhFt6BVHLznwvQ1iBVtUxizT1hU7D9YmfCKrKEirRK2ffeQdjb",
  "key14": "vEpuiWrSbrhMct4nPcrSX9ippQaB22gNyP65HutmhngEkkMvigxqB8mZT281w3uRSzmG1nWKdHjK1CSKCkZcXNx",
  "key15": "4AhiqrnUAK5KeMANmf2BacU6g4hveR9daAGxv2Vd9EECUHXktgrAKjKKFk8R9d4uxG1uCUvhKR49H43g2bJ7zHzs",
  "key16": "4s8oB531YPJsCE7ypdLAn1U5oxepMKv5wvWtUoWphh49FUwB5YiP1ni5wkDNMPaCdV23cGJBK8HUnBN3yAymo8go",
  "key17": "57kdgtLzdXJaqjYV3oBBWAteo1XfL8AUEuZw321W5MnhJF7E5uHmV63BZ3CRtLbSGjxBoVq4J8AiBgiZeMQDGaDr",
  "key18": "5xcR42ej2oYdtvikZqjzSvgcarxzvKQtGHvnJWYupSfR1YdTvNANAt6j7b1KBjmWi5DFSfFdD9YnxYvzErrQ1d54",
  "key19": "2Z4m9HNNVBDJGCQ1QXgZc1fuB8qG2vyPkZzCEBHRyG7vMTGfJ5S8uwcXqj1jCM1HbUPz9PNoQ7eAHerAvPuKHyzz",
  "key20": "2TMwo2bCh3ZPRADQ2t9qWFJTPBZMQdGqj7WzWHdM1cvjHYzRZV3hyss5c87r2gkb4LeqU4bhg5cwpMSL9xnXRB5h",
  "key21": "3RDGDU7Eku8xSPwGn86X2yQq82ooJyqp22KdfzEGp2yroEoqJHJz9DJWKXo45jfKLjeowKhfo82mdErFvXmyovMR",
  "key22": "2nWz7k8YL6p7kZWESZRri2TXqFi6CUvJ78usryA6vFE5RtkeXP63iCLYjBi84dNw6havd6FJio2M18UmPwg2wuRo",
  "key23": "5bz4jT1kbxSPmMUhZRVuheVDM4RKTP4pRvk1aKREW5AR7qCYynNwW22xahmVfmToJxp3AiMJQ9E9soqCWwgyqmQV",
  "key24": "5AQigjtcPrZe78DbwdK17zjnLae67FmfkiTRMY85bssXmhnLQ6oqUBVoSS8DEoboGG9M718u4EKzhcSKheYwtKSu",
  "key25": "62K5Nv3GPcCkN5b1PcuPQjuZC3uherUcZzVwkrGt2H54x2ivbb6eXM5te9mBFN1Tgw1iKWaXkBa4mfw2zjSnW8BC"
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
