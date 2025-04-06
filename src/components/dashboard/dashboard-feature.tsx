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
    "4jBCx1ZqB2dY1Hx5xdzj2QQTUXPL66hxWSi4mTGM6aUkbaB4KrPv2kZ3uJzynebq49hfb7ypwXEJUiEgU3xYpsmH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "263KcdrMuKFSsYDqUi956nSJnJBdbmJyhbcqcrGWjZ41aDnmptoDAjYzXCCxruYZkNTJ9xS6L8mB7nuq39zwipa4",
  "key1": "4VEo8zwMxnPCQHMA9CZR2VYopBpUny3CqCXSA5oRVAh59BX5VTXmBnkzp29deWTNheMpKYdmsyUxB5U2V4BNJvG8",
  "key2": "JWdW8J5L2tUN52kLkxu2YZFDwkLUvbmjdtngt2iWPJDFD4MqXuEe8kStWPkgzGC4UNVKDMYCf8eN142kNMSEryb",
  "key3": "44wH1fzxQf9ML7q57sxbyisTTGi2vxY3K3UTrtMv5EzsreYuTFod8CY6vR7iELGySH4czahmjCSpoP5ncVg7Pkbh",
  "key4": "5L6ih77uQe4sWcCfyahwUPFFRnv2jwFRPqp7yZYn2PAnw25EiCTWRKJqxccMTMr2iZxbWTcaXa7bsxzCoo4h61vK",
  "key5": "3c11iBEL4qDBEdMzgwANQ1bgUDjBTW8UKtJxB7QUPJmTdtvdt6QJowvnz4hWyogGo7LcyvCKp6nEnwQBEJSxkHJs",
  "key6": "4YxDJXYAByJ8J79wE1kXBHZjeipPGgrjRVozKQBDUy4FbPG4X2LYtgeQmj9sjpapzBWeL7nKexXdVrLkbdVQj8h6",
  "key7": "Yujix3uXvBHjR91vWj7TW8FhetY6PHJNZY6d1F61JupWchBfrEkztgmnoGZ6BDycATiJnqhbXirLT3CUMh2uJXJ",
  "key8": "3pvS3bwVDtuRwLznWKAyNbXKPXvcovP1rWx4T4vJSRgcVPQjQFF3mHZnhYUJ3vt4ypVAy1JY9y5NW59i35qSRPNW",
  "key9": "uyrFwqZYZUM3zA5JBqdF6neMHeYXfBUuD1crMkkSo56NZ6d6QGQFAa2Z244L31GM1BETMRJ7DhVi87yPENJ5J2g",
  "key10": "tHSuCgip72d8AhE7dvH16rSTD684cmMjbRd293pKZSwdFdaX1GKwVArUxeshGvhaKLiH8bbgrs1N5m7SERxqFf2",
  "key11": "3TBbrZPP6xo1HxasAZvjc9FHk3mQpz6vR69XrogP4i94srQu8SwmvgVD3jbLrp3jTYKbEEsGzSFLgbwZDgNk76xM",
  "key12": "2Fj6kw6D7FoNbGebWmaL1AiwA7ttvQSLj4LsVfgjDMpNt5YVnqQt5FnDnGJjg4MY5kUVLRdi2CbhuZbhE2JmHL3p",
  "key13": "2UBBzSQpq8ozH7Ku1fCbMgzmeVBAouYhHdaiph7SPWjBScsWRgfspa9YJqKWc7f6bYfUQY4E7cGx1CSzF6mgBYYc",
  "key14": "3P3GY7aaa9KbK3WkUfdEp5BqigqB3yuutpDLt22KwDhxw5DHmV9Wz2duaDBQePHQojSbabsNrwYzhTfMgZviibNH",
  "key15": "411Jjz7C7j1gRvRKNMEFeNXnAkcGEGYAtPiNLBhBC9Jrnz3NFGm1SANsSrAviwhHdD8kMm9nYPWJbsw3vMuvVWJ7",
  "key16": "3XhXV35jfpMajbzjeAomdjWyVZm2KFKFKdLDWoieMbXRKUj4AAYCsZiAfeXYBeMu9EL6HK9qr59gthTBgZame1hC",
  "key17": "2RATnEXXtXPmqJXA6HStAXUtRKb6C5bNuPfzvvo4bLLC74EcJWn6tTE7bMQFcz2WyBpbqn8dQBnT6xksu64NWxb1",
  "key18": "5FrodGYtSUYNCEaRcRuacNUkjUsSbUmkvgFGW9SpkqddcCjzEe4Pn4vNNxS3Ga6nDMRuMRe9GvvjnQxSbpx29XhR",
  "key19": "3iPQ1KoW94kaB4GoJ9zoBq74buTMiksuRhD5MJ5RzcyTgEvA899DCCaS6ZMJ8BNA4PCZYfybrx5c4RvJEo7UvVHt",
  "key20": "5XfcUQyd7b8tQ8YF1bF7XxH3zhjjW1yJy6o72GkJwRdxjSe84GuSGqvreo9KGrfErABSswxkb2EBCnDLYBXSM5rU",
  "key21": "3bQee5yJpKPjBQqnu2AHymTaoFxLkxMZsc2WKVxYr3dJ9TQ3CdZnpPuGpvDiborh6RCtuuswCvYscXB6gQov8oay",
  "key22": "3q8fKHz7FU72gPmzxLKQxduRRJxQGdsVemXSZE6atrksBexx6LTiUxaqQzqzzC9TpoyBGNnriymh7QrNkYq8Hx1a",
  "key23": "5suTXZ4ymNDEsRZHNNbfTkaB3nsB3AZKFX9YNyz4AvzrZrVFuAhZb76CQG7Hfc3giZaNgW3nBnrNmhsrca4viEEe",
  "key24": "djzqg8z87XMtNJrmn79UwpYpWbGyUXMDrvc7BLY2iENx5odHAMCB9FMroTmb7z199pHajb9DBNivXNNMZoBuBGq",
  "key25": "21JfNxCng353NR6XatsSA3ttud5rpmobedc55zny25aSZCNH8fRi5VjqXKYZnAnyyCFC9bzxNEijVzJCRwJ5ey9V",
  "key26": "54qcST3z6HBUozcsPYuYmeKCJATXwvPpP91GESfdL9pQGsg3pMaWA122KHqaNXuRs723YguBH3Dw6haevwkSPzPC",
  "key27": "4ogKvEACwF9QMg2qej2GPmw8pm2SE7JxTRxofPGCs6FEgzWtd6gkVJnBKBxH1CEGeST1d2uCDossy8K1avRxqVj2",
  "key28": "5Ysovk4mAXWTwxp2B1sM88KviP9KxxwWit6CjnwxC6ZHJ3FkzyyvQ9hNQCmDshG8KuUf3U6WCEatg2ya4przCHSS",
  "key29": "4sH1zuToiwrgeVXqqoeRQBUSvgGQhEwrz9Q96WTqNKrFroyYJZGzb8kYqgz3Ba4CqMQqPdUhYiUNf7dsDx7cSrvL",
  "key30": "43MaHtp7mip1SoARMz55xcakEXiVbUws4Pn589En6HRkBU2osL1B3kAjAhVkWxXG2qf5MyhtmE5nQ4MM9oKNMF5Q",
  "key31": "4dDgC9BUBXb2UVscrPLuLjydMQXWNg3pTknbTYmwmQj6LrKfEWXkgAKx2HBZVajgZUApESy9sg53jfUFL1zGA79Q",
  "key32": "41R3n4RdgS2oRVfVFTAg6f5GAGj53jMxQGVPD4fu7dS6dLx4BiC5s3n8o5bhvYDaX2eLDy4QDoiSSZ343cB7SBfp",
  "key33": "4zavywLCjyJmhy7HokJJDLpk9iFnwJWkyR87oYyF32XuoLwx6Qo78vyxBF9n7DEoxgNVnaKEdUGPr87usQvnqSdF",
  "key34": "4xSsLS85oMJHByGaqrAHFNEgCMqmTx95NpqmosUHn1f3UfRbbKi8h4kAK1H3fX9mfCSFJP1zsDHJeVd2pQp927GB",
  "key35": "3swhTHcC7hm3R2FjSvWChahvSCoK5JnKqiQAjxeYzy5oMiAY5f82ftJk5uqHWSqWjWBvL4qxxEoZoGxWTxVbQ2U1",
  "key36": "3WX8uA9SUnGfZ33ba9qoGkRpeBHFUxVaGdgGBUFo6fwphwr4wAqZnZCCmUENRauCh6i6BfGzMFU2XHZTT2NYFmdt"
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
