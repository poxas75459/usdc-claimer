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
    "BWqhqCt7iXwUu57CuebWj6faVTMsxSfmhBxf7cn3WWjjXmykWXAa866qP5GDg5i4N76z2aeXBdW148RbE3b8CRS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "idDWZbEb83quwkyf6jMrAPy39tEAoRr42iUNMxqoTicM1rQPLwrDv1AZssFSDZZ4g8aagVHwEeASoXgYzb5TDd9",
  "key1": "qXNncvZ4LZRrfxy4y18bjy8n7JdgwNXVMLY4QqAMqSqh2nEBvFAwmYX9QaxS92w6oQT7KMxM22ThxX8fZ1LRSnx",
  "key2": "2LJKpPkF6Ynhh3UabnvdCVAshTikqLPeLQTjAB6gUeHkepP6BUDixLTnV8QTKWLLTpSuudPE8uWD8EUTmFKLzHX",
  "key3": "5itWduJZMcZprMz7zQgccxj1Ry1aArSXHJi9XuDktoRqYAPAkK7XvTrJVqCHDZsCVRSavsXbbFWsQFVoHXPiExo1",
  "key4": "3Y5ZXBNiYEAHLK6jFtdSBGkqt246GEco8qxrSdaaLkTLPejBx2raPpQJTo36Wxpqy4QeFjwr2SwniExcmaEXz74P",
  "key5": "2eB54sx83Eok8YNvKhLZiSpPSBhFZWWZgWPdPyHbYj7wqTP6RkCy27hvv2csnNZzktDH7uas6w3BAQAU6yoSEvcG",
  "key6": "4nwaziBTSgVPEfQ3NX41mG1oHQ4Sy5pc2C8KaNLQ4CZYmzdu6Fwh5X62GxLQmgpdrC9KPRFdCuzNcywSN6qkTSgc",
  "key7": "4kh8VnaDFwaotyHbmFfJMfdTUc4t7SrMHcWx53St4krAkZLHeExcznsyqoT4ztG7iVStZfXQ4n9ri3ZCSs44YwuV",
  "key8": "5kJdFFXvLDy2dB7ecqNPg4NaymnFTyFEto4SnshCSzyiBoEkZcSLK7MhQXkWeF7xWWHDvkk2PiP1ZAWDoS5QbjGr",
  "key9": "2xHaS3maesGKLQcu2amCyysYWXWfiKcJgSrgU8QFKnBvGGj96QPtenfgcqMK1QnowrfaokgDK3mRZvGqwcQJnF7P",
  "key10": "3LjaGmcPRCBeHP3NZuF3XRjyiVp4fNDGsA7orqQtxyYamvgnKhTgX9qUABhrWjJ8vPgRWTfZcPMNu712EHax8BRk",
  "key11": "2WVdCaSd7orz9QtHPY45xyPWNEHyS93SdGkoydJpdkU3rNgD91AV9LfEZxrjB93ZggctEEk8iagevSJq6sbQBHL1",
  "key12": "3KpQBUqbb5rLN1Ur5j3jK9PjzaMP7pQgWqJedB5W7bqNfYQh8DfpA4tHjCHArhy4zNNJfVvU82BCu9C4ouCzobSP",
  "key13": "3ZkqFgb5VX9R4Wk9gjLGvtrreQ1e66rngxSways9cTC8nRJiPQACo3XQSLq3zJ9d5wV8TQCVDMVAtiTeDjXvAeYZ",
  "key14": "2o7kn74DDgAFDrR4rsT69J4ciQSZQxeCciq6hQsZMGqB7ixenpq8gLq59gtBwXeakcK48o7JBniFszY7RoJRbYAh",
  "key15": "fn6QwkDe7UTtuP8L2Su8MwUgjbXqTg219agUQqY98sdbSfxtrGtwWEcCq6Ur3RPD1Px7KE8nNSJkaRZ3zAh1HpD",
  "key16": "2Wza6JGLDWn9ZSWkcZhSjHgZbFpUTpuZgKc5JWf161ULXBXi9hQ6PAMzvHx3W5d1cfv2wv9RJWDFLcohCNvjJ5UK",
  "key17": "59DKxBNuLDMVLsE5NyqbFJbT3jYXxoe38SqMPY6e7TLC37NX61QWvv2or3X9gR9L3Ffsg8Gi9oVoJiS9dALYL69y",
  "key18": "3fNqQh7fLrnArbw2aBbWFPiCE5riCpgu3G2r2wSUxjnwQ3CcoxJENfp4eJD2wKekJHRqUHcJuKsecNyTeUyMGsJw",
  "key19": "3GwfmcRJ31Ti5zhDzqRa5mHMddRtxDvJ9JzzuAYejGqxUuLPmfy1Z4ePsYfdryvSYw7zVXYtuATGmF8BMcwShpX2",
  "key20": "4KPFojga5cFRM5kbtq2FCLx4YWpc9YZnDkohei9bZnVqbLedd5jEjVt4ZAVbzPEDNXFkULUoy2iwTBqKbMMmfVWe",
  "key21": "2Uy6JNoZ67Vb7oHxGuR5Gv1cD6CEvM8jXN5NDzSPo6M52VQY7m6AVTP3CSgJpb2ism59WaicipP84bEWTPuTBYxF",
  "key22": "XrPFUqH7rqSf2WUiLrk9roa4mR7xZbdVDFaYNa9r8DGgXm6hjyeeu43SGD1WKHBZciX8CtJUhwyCQm3GWxm75Hu",
  "key23": "2CnykbyMY9qMBf3vDNk4XiRjMdcrbhx2HpnnVfhGgUGC2qoLDvgSDju8zQBoLmfNerEpiVt9o2pohqbZ9DYuu1KU",
  "key24": "4hMo79BLYU65Ps3epS3ESv51CX5n6c1s8Ko9cDFF6UH45gixD96QFQAWYL6TiYouBKrCxZoEN9WRmjEghhB6w35X"
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
