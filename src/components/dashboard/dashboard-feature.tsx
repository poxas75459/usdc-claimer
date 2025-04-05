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
    "4FT7KEWLJFw77UYaZ3YWDCV6EUKJRCqxRqNDWinuWfde5tRUBVv6jhWy32FKhJGqt9ysES8LyBc7edZMYfDzfTYU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Nq89ZU2W6ecgjecSijV3i4kW4FCBZ6JBbdDVhcmcaamE4zAMPR4y8yHuFuXGVLyoWY1cUbCUuC4n4fHkULNKNLM",
  "key1": "2mwWoxkWyDYdBiVZph27ChDcag1fozn1ZAQAKYtKot91rrKrfrwYByCbtNe4pdGfcbebr36ss8L6wsD83doZ4JcW",
  "key2": "5rsvTrcEYyJsmCA5SQyVF28sbz9Gyc16Mo1SEiJx3q5L8j9DNPyjwdiTMnxT2uX4wPtuv3mHYtY1P8vMrMJgC5eB",
  "key3": "3hX2JfyMgEKGr4Rt6z5oBFRPof1VpZx8oJxgPDUn16FnF72nGZqVGTgdZY4bAYW2oghhb46FGjrSJB1eNM3M5wgv",
  "key4": "2Bh4FoPFDf12ANzJf2fTUF5QYEHiDMH7LdTKp4HHE5833zbSTPaP4Q83Eh7tKGrWjfRY5FNUFtfVWynuDoW6b5NY",
  "key5": "2vPbGWAhXP6kLiA8mts9hb7EbRF5UWtdNensQP6f8s9Jp9z7SffywDKEt2mgdZk2erVfU2VpzSsCncevGRA2kj3S",
  "key6": "3gWkTUyuWpJiZgjf5326ixf5AjLBsyGXjKv2GqaktePFga6yr7JM6o2D6FMrSmev9pWMk44AWrAZMYdjHYocvpwr",
  "key7": "3L13PCkFWBjYTus7qpTxqtepPLdbFfnGvdYo3ksxzjkjgRcuoxYKwCTqtz7TxxaNwJ4MVBRUZCL93dn9aiMuAxZv",
  "key8": "3iurSt1JFCM3DbGnAPoLUBpaBMAV1bc2hDpD7gbCX1kwv4yM7LQsgAxggJ5mXDsDWeZYNtXEtFsmR8NjVZ5zP9i8",
  "key9": "9gqSfqsWzWtu8rodjun4fhVVqCbKdFZwZQtPtS3zB8JRFxyKDwviDUYcT4rK3hTLR5aeRNP1jRyYnqdRSVAuG2C",
  "key10": "2mGskSJNgJndsNoCwqjLuVE65deh22VCUP8YV1oVa9jrVSZbV5KTcWKaVayfUWUcYU3WJimVmk2JExQWshf4h7z",
  "key11": "3Ka6UBz3VYdHEceE6LBP3ef63vAgncSo3zf2mh5rXTF61FrUmjMjHZQrSynkC1DDNarRPY8iaCT92stxTzDSiGtZ",
  "key12": "3RAV3piW2axmQr6vedjE5gbaDCHGwyEzQUUVNxCAL9B32RQAc5S7A9vK57EsRbhq5oxsvESYokceTtsrkeFioEr2",
  "key13": "5q7YraWPK1AjA9PuskZoJuw75UWU6u45Hvs8kicCdh5jKPWMqzjvaFFqz1aqWYGKjS73CjxLyrjPqAFwYoAawacX",
  "key14": "3zM21yB8uB3qatkbgitpcxkSFjakEEedWgm2aVho8b5VtfhMAwcSbpXXxKRLW6oKbh32BWhW5535rArn2z4ggSBD",
  "key15": "3Szdr3kQ6YEGBmWiJsuzgW7i63Z9ScKtJikFgHc3NAFkzPR6KQevADCcxySPFH2fzdKWcArNbYkLyRZaf6PwJwVJ",
  "key16": "4pVPcFMi3UBZqCx9xq7aWPZxWvtiBE4ZVygkHEc65MVEJBvADEiaVtwNmaFJfPEjDP46SzehdMgF2APd4Nezc88o",
  "key17": "uMrYZterisHXKWwJVe2w718UGhEmC2FneoHnXaDQujJYk1DEqUnvoGiW79wYMd3i6U2Xbtyt5awoH5T5oEBH7ZM",
  "key18": "3JXosXG29dYsc66RKJxGZ4QuRALiqYRVBKp2JAMdG6ucfgMKxr3hsy89LSQbpyjdRcQbi7A714SFE5U5nLre6rad",
  "key19": "2sDPRRx3NREgoZoRjhojB8a455DPKuH61vYGw3nUbh8ENgkUhCXouSzzMuzeovtZdNvokJfk73EjCUoqq9nJWikV",
  "key20": "4i4p1NcvQUuBxzvzTMpoUbiy43RXC3QgNegpvQLxsMMEd4LvJkyZx81WP69Ezt2xaEcdo4paQG4YzYuZtWo5LpYa",
  "key21": "37oJrYjyF28MW2jV885sGbWo5JSdYDLWTmfbFTGMhAjKYyyx27nLuexDGdG8ZfQtUhfnrdGRuu2fqai74tYFDvEC",
  "key22": "2UW2H3k55bhZUowuWmLpL8W1QJapB5Tydj7Br2BkeKwDdsuGCQTQjv4yiwgDczdKrhkCjbmAjgvbqpJ7WVi7y1aN",
  "key23": "4pJG5wJBEZgCP9MQHMb6B6Y1msBEwdDSeKZWMbQS6CsgySWGGNYdAWFZaPi3NqimiitVKHAYU7kKih1o3NjNM9K8",
  "key24": "4nmaVauUXsdRmVQHDQBuGy8E439gZ9Ea8jtXbBMoZrtFPEb48jgU13H1EX2XjsH47YvCQ9vDrFUHuB21QnGZCHy5",
  "key25": "5KuErBbLdYTz4VTB5iqcEw7uMJmtPRkiwEwrHgJb2mgmkGvQmQHzLK5tknmt47cjVCK5AriHdFi7JF6jMo8aUuui",
  "key26": "4XHrosXsb9DZyyWjmSF14he3eUZV4byXnVg7ApiD3bGzQ5j838qH2Z5ooGnkorS7cSfu122Pux2b1tQV5sErYbmf",
  "key27": "4WXouHYbiv5oHb4HGLBWLsB1LJUMfaVH3ovFxmNpHnN3LVWRmet5siVTSw5SRFFmmJTVYijXKBJnHiKGQMwLe37x",
  "key28": "3Sh6YtM2txDp5xofVDxkwfCNEcXa9HCU7HNQ9JVN3XXUSBMaeWy83bhRAN5Z9tSkpxF44FQiefMy2pQQff8YTMZZ",
  "key29": "HwcaVv6bwYCAe3PTigTKgW7seEL95KZoxxuB1ehhw8H4jWi1nAxu5A6jvDCBhn3K919oMpTqzEHVAM56nUbqzhJ",
  "key30": "44tXvMqjXUcNjZHPWEX4d5mgRiLdkfMw2qVaiLYhwT3nb2uW1fSoQ6uqmryDhkFXaWk5rgDjixY1FT7S7cZHDGod",
  "key31": "4k8RWwykMrdibso3o5RtY96WhrHGrdxtLx9TD6LaSzSVzcDhagxVT4LNB8usbt9FFe5jPdUoPkn5o4q7rUT1E3mc",
  "key32": "4GRC1TLxtr6BdHR12XEApXXXFxm1GUFrnPvFsi1yMs2br852nrzt7WX26puoVYf414Jh4asemQ8MYGbAY3tsgeMF",
  "key33": "53sZD5HvxByCVz5gfhCAuj32yVP5T87yF7zZR1ALxaWHPnp1kyTv7c5KmdJN1sPeVAaeuz76TbxZPsa3ihur9vwj",
  "key34": "5pHFyqLuhA1kai1sBxxW4PZbhr2qw6u35Yr1SgXtfLewAskUgEZzsVwPA1GDqgjNgdPZvZJw8qa1Vj7p1egCtUnv",
  "key35": "4swCSfVRXRic814sjx44qcgTJJ3ERVRTW23VLdSCRBd4g8wSgmE8VAb7LDcftqvZpP8tTwsJPsCiBg68SYx5rZYi"
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
