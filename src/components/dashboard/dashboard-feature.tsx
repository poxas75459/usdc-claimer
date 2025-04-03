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
    "2APhRYPUK3vx94DfAY3vWpDH4dB3kW9xYLpvyPPfZ1zsWc632uQZZ6GJn9eaDkg2KETSpfXb5PNZ8RSxKwXBa5Up"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ADxRP4H9YsjY7ZjTpcU8SB1fw4S9SA4tzkzHv5Q2kK5CfaQDSzXwZJ4G7j3w3sovGT45GggRKtwsn3jKWssD5UY",
  "key1": "3La1PYHeUjjyEcXrog2uhXamLrtX22R5w3jwE1RyuKn1KrsAp1fFzuyEF5q4SAEQqMeL4Dk6g3KXyaFy1wM8DBzs",
  "key2": "2djvh9q8fxDVfDd7ds19ovYSQ85E6cPKc7gKYzBuUtZtngK1YA5QNYekBXKWKoNMp6cVD2ZqS9ZgYuSqJMF6udAu",
  "key3": "KCcDZtVniqfs6Cu71DXGo9RJmwNp1TCDpGtQKJL1doj3uD2diWRXTi4ZXdovzHpxffqSZ6ZqsxGHQ2AwkHymJ7h",
  "key4": "5Ka6X7sJa8DEfJwjtoiiWc4RAKVvffk6jkYjP5DJ1ENA1mFd6hqbNPQwBoWdPeCq937jtw1cRiWpTUR4tmcqs7NW",
  "key5": "pDhof4nUn2YXyrLkx5d4hsCggF2FdXD4JjLBSsUpD6BHFAfyw54qADZmopBhzXapT4MjuWctm4sCEn5JkcEm3sR",
  "key6": "5EfbBNDFMezTqz9pvJ1Dj4H1k2CoxFoDonRKroPCjnFutoroEvWtmtGzAJzSePhW1LcH37W4XxiGD5zg3SLbMvnt",
  "key7": "5tEPqxqXq9DmTkrdiRkPVTheFr9pxum1hfMHpP4DVrDKYiRa5YETqPux9WAbY8snkAdrESkjMVVfqyyYGCvNg5if",
  "key8": "4KRS1PW3yVU6bLU3We96FSdixrNfCoA7AxCtFLSVWATpsA6XaC5ByVoLK12HWQPvWjebuzkAcnABGqVwEqeSBbwr",
  "key9": "2dM1tPBt2XoJ6fXCBLTuSWQApcPenpTxKKFANzdE13z59LdhtEedytWi2koPfNnYPFxHqidKsNV4xGfzicSYVwtx",
  "key10": "4vWy24oBG4tAEVMiS2CLm8j4JMtkvo4MjrbxTbDrV2a4jg8hjmQUni5UxU9CnKZjFCQMVC3eYjkaKV7nsAR2CWtf",
  "key11": "5g3GCRJfeAAT7CQ9AUeNLaWFhhZUWyufwYWEU7aoFBeam4B22AzRtPNVhtvgRk6hWZ4BSo9VLSi3pNWHrxVd1Cq8",
  "key12": "4YHDXXYU7SgPfzJFv5ZVah5rc1S9H43pRYCHEmcFVxWiD5yt7Rv7CZob8hT5bhhnHRVwm9kiF5wtrG8PQQwbzF5D",
  "key13": "3wtDBTE2guhyAVRoH2JBXBmJHfcBrfHwdsD5q9Eo9urqogfXEwFdfWHohNN2M4WUpjPTbiey1YQq5vFQM2tYWABw",
  "key14": "2heLdQwgkzHQ3CLDgwnmFPQBfuzmf1wiy9rDJYGhGjjC5uraC2jMASE9CnXvvTHMPgLTr5KtyAPoNXxQ9H16cBYu",
  "key15": "2Eq5ef2maFdDy7d8E5tJXdLnHkyd9vNFswWJ6tKTo4DGinn9xRsyMt6Wo9mG8QryWmM8FR7xqCXsmwW4cE9whwzh",
  "key16": "3khUaEBHBYna8SJdenGZoXDvDSovVSDiVKXViJdvf32XFbt311GFY5ETLtnW5i1Lxb5xrW3JV2GxmzJTzvofHMng",
  "key17": "3TB1pbGuGkgdU7qvgGkgHgqWTRL5LDBhYJqvXvxkyWzf6pa3jdmxbPSpZGJvfNN2XdqS83e8xdW5w3ikhLBys54N",
  "key18": "32xdj5mFUDfHLTKr8QK9VLMJVU86Yt49BoV24XSYrNJG2DMPbniDpy7edoAxT15Gb6m1MDUKfSz8nJYmakREPW3a",
  "key19": "6466BTHXBGxntY8brvQcEosjpR5DBm1zaCQ8qTvKeZrUitwnnkiE6jys6gBvWj5PGLrsdQqrAdTjJMLetM4ooH85",
  "key20": "5MDRyMwXKqaxR98vhR85hjSuzkPduddEpLQgDQGdVZi6WguuVGaLTZFcf5nYWpg8FrsPKtiJZcERAnCZuKDfTWJf",
  "key21": "4QM4SaxDQax4YaB9UpksGWroAD5i2YfwkaMzwKfyuQqpNW1nj5xKvGGwbQZL2DxcEH3deqmwLjVx6Z8Punr5KdP5",
  "key22": "4ucmGR534Hv3U8RcAnLNQYJNx4GdS6qhzzw6Ey3ZxtsWT83CMYwDPb1yBDCXMUfQXm9yGd7Xzcxn2aZJuG79igbe",
  "key23": "GcyRU8pSu6CvJJZjkk9shRG9JddyJTmf5CYMbPiQM87EmAvMX8Yw6dA6HzpWuvHY9BrVFpEczYKsYUGDTLGKcaK",
  "key24": "3LEDJzHSo6h2y5s2i3NhEtBE7xt4E7yDqe1KrrS2tasgwRxMCjQ7bNKYhmQoESh4h3XF9HnFuyQ7xZuKZKM9DZnp",
  "key25": "2HJr9qh58MqRFrZCQ2CJdVfQck3id6G5qoxfQFKTDRQipU1Q9KpE6FS6kKYmkrJ2oSoynjFTR943BNPnquhgV7y9"
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
