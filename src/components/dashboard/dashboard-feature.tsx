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
    "wj1puM58EUzjSYw7YsLkFe8dyvRTbig9VoNedy89GDFQkCrNJMYwUQ2Q7t7zcNGR4mHdsXwrvBCC1rGZC13vTCD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KhE9w4Nte3UXG2M1J73q4W9QQiaFJ4ysCYmyP8HUGPnTFkZT17qnfwr6rJpu91HrXnojiAAkVRf3kGtqxmHUFwJ",
  "key1": "2gw2gAzDvfMTHNvtdo9AyPeNmk6fA5VVyRkfx6HW4LbjGwHhj5oX8v9Sbz5v2pZyeDfeVc4NB1DG7n4X6H4DWHmA",
  "key2": "ZQjXY1kHm4SdgLhcGbCfDVYCgwVbgWNUT1XYDWhveZeDa3zxs1c9QyvKCRvuC7ju3hvRaRTAskzTd7QTbt4JHJu",
  "key3": "Nhi5U4jH9mgpzHDGMVSfRAxWSe6cFSCdH5P7xidm8hV5Z9eqBXtqkEJ97HeJ54DBqD3zrMJ11utPqMFbisS6GqW",
  "key4": "d9jtBLTFaN85yMN2e2gqimXTN26GeR2aM64BbvCzcd2NdTPiu81cKksqJR11mZzwkgS9c5mDVkvx1oVGSjEkHUs",
  "key5": "5EH7CPWoFJf3KEQntXMmuUW8PGtdg9F3WW4CNEUPhu6758M1kXF7mGac3mnVXdSUmZi2p2BLuXR7yHBCCmJ3TsZE",
  "key6": "5LMo6rzY85SXoLGwhDUhdp2gm9zc6CQBvXbuPcfh3LQn9MeWtLdRrnzdHQYveAfV9ub7U771mzBRccuD45A4kgWm",
  "key7": "5BqR7t3K1GuM6LD2cjpoQWUTmW5pdwzyoQ74zBFdvXiymm1nmxmho494P2XxVfryCB1qxY5Gc4AcuQxXhZMNcv3Z",
  "key8": "2DdL7Z63zpkFW1tLVfT73hGqdxXAWGASAde1AcE7BnN3mnFHTkxyHg9ZK7Gun1m5KNKYcH3qLoj5rokhWGhPPf6b",
  "key9": "o6duSeYZ1ukcgDNfEaDj54rU3BW7d22G1hgKEgTPWk5Xy6XapMUudba24kcPoJ1TxEuvV3no1E2UDwSwrZm8r2Q",
  "key10": "5qzw61M2MJ29MJaEDwUJZTJPWkcySKhpybaeP5dEkPJos8dZRf1jZVe4UsKw9vmGTnAhCuNSgwKe5bjU4NnUMnWz",
  "key11": "23ARN5kf5h3TKtu2vNN9c2Cy5qkBzpjHfi7VuE558pk2AdKHBAMNhYMq1BpQBzs3JFZvXgaufC8duq5WXMamSDVR",
  "key12": "2RWTgXLynQy2aQT5p3qrV95nJdkW4pyBouunjtK8DZqqREFEB3KaPYvwLHjdBYkRj2ghAUegVTLkS3PttGAntaqK",
  "key13": "4iiRZXikgVMHtrZ9eY9n4b91s13WTXeibEHTtpb3pjWte7cXBhGEPLusn5Tq2iXKgqdFekXvCS62HqXw27d39RMa",
  "key14": "2QMt1UXXHpQSNW9cjPrdm1EjGczHHp6bPGuUUmE5D35NT6n4GhQHXYkaqZsU88tMyNh6PbvxWTr9wKXqhtFTpmqx",
  "key15": "ijiWm3fzarFZE5ec4VpALAcqrVoVhSnuKEWQagy5NW7rvkerjHshfDJh4qEV2GFax7BbSpX5HeexUGq5i37WXCB",
  "key16": "3vjnKRjDrydjPDSxNCnjHxCzUonnxQamfUqa1u91KhrUVgnqGfZhMMmrHLzLLV19z1sLNK569XFbn3wJabFkc2FX",
  "key17": "43JqrQo9sdYWet16YArDjkPjJ8opcE13DSZWvL1hd4vh36vKCyguyCtFaBNmWMs14eR9s4zxvcgu5x86zf1ATdYQ",
  "key18": "38PHkYKqcVUnr5nag8FjLBifi7AvKBGQu9kqtSjrARnfGgnT5TPi2yo7zesKpAuKxAL7cKf6xDN7icYkr1U3UiC8",
  "key19": "22EcK8F5uWKaxqx5UhEL84rQ5FxFqZHX1PwH6MCi8KPwGwhheRpaETn5BYVZHNeiUc5SPcjAQ8DhZX16jkUR1gJX",
  "key20": "55o6ihgK3DnFaMmSsP5Mcw4TJVaa3dbsy7djBxqwzTG74NPhpfGFQx8kK3eufPwGBkFe5iR34o9UWesTuN6xJs69",
  "key21": "4gQZa6DcqTDaQ6hLCPEjT4BQ8bE7nNyvKqvR8HESW5nJiMjW4wLijtoUBSNzCqAe5fShFxfn8DrqVbjj5yidGwQq",
  "key22": "4iBdLpUtGm4zUFYCGtGJvLPVQi3NpHnQpPcqxP2zs4cbkiGXQmSa7Zykh87kekNLymBQnA5ZBXRT6EnteZFNX9wy",
  "key23": "4bHSHC56aZUZuhiwkmptsvyzTuZ4EQqzDgLuagRdg4UyBmryd1FTM6tpystLXKGSbZoJvq2hkeFGSKyV5MxV5kCg",
  "key24": "2Ru2QybeaB39i1Zbq63JcB1JpTS7bc9DRf861Sf1n8JXT7YQAtEf3K517BuXPoFzWXT74VtKwZW4QiR1r6hXMndV",
  "key25": "8umaiK2J5QcmFZhYVTW5ziWrvzxFHAoVMSnqJfYU1txVx4D7SDKcTBTdwxqWMfsbySRCaodYV5sNpZP9M7AXjfY",
  "key26": "61ZJk3PWpDXdXRL6Wh3CB1jM919acvMNgnndqWHTbKKF1qBfDvzYg8yDvk4yaPYogVG2ceUcmXpTqpKJQPDpcZf2",
  "key27": "5weawW4QxF1a6Ak7T3sU4915EC8nctfXaDgZucT1wgqqPZGL1SEzjFBxeSEfHwqPZSfEp1ihEHCQa5SV9r771M59",
  "key28": "5rVsHowf2ptbPzmu8kVo3g1HRrZJxNKHwFHZKJer2r716HFojGXuGSUoyVLYvMwnwZgqrAWRUh5KCH4RaXaeZepQ",
  "key29": "3HHb3ge8XqoDvPz3oMrFmrhwyEd99Eoosrs4tCnn2gh1x3fLTYFPpcicopQtfEkkD8E7wXxoKA6oL9YekQQvuRCM",
  "key30": "4AyyDKonhkPYqp4A8NmZD1MBsHV3uXSWCMfjnyEhAwGUKWWAtcQwtjGMKf1ZKSNEd6qJ3QE31L7JJ9aPDuQ7Lahr",
  "key31": "P1kdsc3yRQMc9sFnrVtZHio37onPmdd3ntsvjfKyCaJR1NQhpb1BihPtdebnAXZxNCk7dmywWhpLPFqH4GbuKQd",
  "key32": "2ogKLUrbTH53FCmCdKMrvMjgERy4C89FoHpiWNM7iccvuYFgnBAcj88V8Yo8gZPDLU1TtLa9rEf4yWxoxhFy5CpG",
  "key33": "3EFaGd3LuH6aBEgXruoJAN6HSfBARshR2cMURrHwYzTTNQvbA6PHYfSEbFpWJLZWyxXmxzuGp9j5eg7Dg8piNY6e",
  "key34": "3kYSNvGV9bN6ZW1AdjQA8xpfkyLdWFcmHbjZ1DtWJ5MKqKPzMRL4goq8uWbgsMeug5zuY9WQNei5SEw2gWzX4BW8",
  "key35": "36vv8q1y7EjWttCjuUytPW2iwGJEowRPAZPDP3xDTGdCEVrST8ZnNZV1w91wftBPaf4B6BQGd2jDVRUMeua3kYf1",
  "key36": "5gAsXv2DAEYfECDZtkT2HNycJYnLQMihaxzpyPcuK4uzokBsSc6KqgdCUrJjMdwpdXuTsh4QF1DtijkTAAss59hT",
  "key37": "4sN43B3qz9CJsZzrge3WN7XiV9GqoEAVQwnoxj8BU1tUa7J8H5npfgq8v8GNX7kaAw26Y553eQsFu7Xfedk5Stxp",
  "key38": "2JsthhjWN1NdVf5ksQ9PJY846H1oqnfnorUENgtNQ5YzPyoMKjUj3btCYHXJQB6wEhonbxo62Ai31vs91u9up1UH",
  "key39": "26oJoSecTHxUZZKjdZzAUiJ4nXWWjvjdx8YcA5sUinyeiftv8A8Wk9eNZ4XehkjGDWVQnHaHg2uKQwn5qQ3fhQM9",
  "key40": "4xB4imjqsZ9RBF9ifenKxuFVWnUG99teaPAp777rMYK7qPeghGTtVWW6X1AMuEWJbUwNKeuVen8bQ46DvBeF5nbV",
  "key41": "3qRNBNGDbwsZFqzxtjdQ7kxT1BKFUL1gyuDSxLEcDmN7YjiY8EBewVx4H7GnzT3xi71yqLzxdtTmE7S2ysZaeDGe",
  "key42": "27uwkjxhEPSnCA3F85mg3H9nqM1h1fzrvbA16dhiFyJKFeMTZjaiko4sPQoxp4mV51JcUGrMLEcTzAGW3RksqGeR",
  "key43": "3ryqzeuVcAzF9ZDyfxYdNoxpKhtQkeRSuGLbEYhXPyqYUSfBcZ5hkmKBkbhvR5Fwk24awQhmiK6dZ3uNjm7om2dB",
  "key44": "2zBaeCsLeCnGDmL8Q6p3XqTpp8TwgZbptwYeGhAN7D9WfuX9XwoZtoVmub393eZ8TRC2zq3Vmx1nGXroTs5vzEWL",
  "key45": "PAwH6ZsrpC2HrG7jdq4gMQPajMPfMw5Ybot1SHVE9sYL7CrRHYRavp2Bk1QzpJvXkxnP5exf7z56YQ1ezRy56Xn"
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
