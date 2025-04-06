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
    "3hUGw83zZdfXFB3jipnjD4HEsgJdD7yNyK27gSWqZH31x5R6T79Hv4MQ8bEk6ZuhmQba6Y2Vbd4CoxyJx9mcQ7oK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FswTrHmQd2oiRAve3xd4Mmp5TnoEGrviC5WAd5nzfj7wUoQ63CJALo8SVn7XruLigWa7qXYoQWQ5A1t6f65TaTx",
  "key1": "5ZTDSW2A6a1fGgHQZxzRzzBMjPePsL3tYU3GatxJKg8tZik3oESb9sDxMoe1gRwZzmmLyGUrUeApScmFMyGCCDqK",
  "key2": "52bUiJB8Gt3WZmLoBSpFQFY8iFJo6moujegZTxXVazcCt52tUFv3iQjUVKhvcXgpYhygHL7NzX6wm87SNmHTCSC",
  "key3": "5x68dAgXg23B9G6nUKDsPdEJcdbnqs9MkXYWw4fZL1jnb576Drby9pfpZNFry8hTTUapCCY2kjsuUwXm529gLQ6c",
  "key4": "5GyziwScj7pUjFGnesvFFEzoWauYQvEr6JV1P7R5EHKgMteLoHShEEWx5tti3w6gnsBNzryxhTB6BoYydZtS1Pd9",
  "key5": "5h1DDmLrS1A4j2i7h5S4X2mHw8kTunRJbR4nsHhBzhX2gNxPufXgqf3vnjnmNnLpnn9i6ikaeGDovJoCQXooXjzZ",
  "key6": "2oYadLwaenx2PduSkueYqDh61TViPAJiWErLAxBbRp36FJwVFLrwbFg7tApq4ZYJUcKYK4ySuSNVysfSzFzet5kX",
  "key7": "Fyqr5GxLSS7XzpXr7pnriv1DL91ypv2HbYppkkwikkTCQiYcuijEfDwnsCKxskPWduwgKD3EyViRLv4SPjn9pPB",
  "key8": "3a7kN5b64mDfihrVp7eED7WxW8m1zToz2ARWpEiW4d9X4MEf6W8HhPaf6S6SnkQQ9Kezcvf1mPGJ7kL6oNWLYagK",
  "key9": "4WtadKBp4K3oWpKsnDgngg3RjWTQHPK9QT2jJb3anxcr9V5wTzy4SdDroTifvEvU1oUpGZU3oDSrxQJxtef9gNiR",
  "key10": "286Br8FZyrX2kYTTi9CHiQxuMxGAhdpbEC3CM5apLoqW6YMMkQFnJzBBRJt91PjByEXfQavh4PdGJ7BBpoLYdbjL",
  "key11": "5i6DRTquFBNXkaTnfAKhp2gcemmHfbcS65XgcYjzwkkafoeWfmbHrgMS7u5rcdm7L5sVq9gJX7RfG9mGZnCTbA72",
  "key12": "tWCXqSHT9DFohBphDoF63GYyyzkCMQdHKd28jNsxYHEXs1PB3X3etpvwBbDryKziYjbRRgTw7FswGwuqoqiq6n8",
  "key13": "3kxqicC9VjfD8NmNp9oq7Uf4e36SSyGKF1asabn6imtq9BxBoyiq8egfJ86Szk7vccZgh8iLkgZrgb1xLEiqR9EF",
  "key14": "61PJM262U7z6EZnK61Xa7TvyaycrxXrHcFE7x159UCt4j3TqAuEnvpSyugRoPNNn8grmswGd8y8Xzsic2mNpxHgf",
  "key15": "5xbEvH9e6DdzMmJwkm6L5mpA5LH9bHT2H4C6QGwL4P5GnS2RX2qmnjYRNHCDA1QTU11AEaLwWYcaLMj4Gb5j8kMo",
  "key16": "S3tSC5LWawxtEdpoam4oDc9EBQTzWhGBCeTnL5tnSM4wWRE41i5xD68cY5Y3T1HXvBHnkkT6o2ugzP5gHZ2pHs7",
  "key17": "6tFuofvL5HeVDoNHijNmbkGzWuLG2kywnJng4fueESLRQx5pyuHVE5xpyuv3i3LYA3kXxE9Tq34LHFUTM4stjs5",
  "key18": "3sX5pq2pH2drhmhBNHA9XYRkhsjxRNx71jW5SqNYrK2cDxpwEj1sBZxcrVo1AL7i7i7crXe7UprJCSLdq5VvKY6i",
  "key19": "2QZ4xoq72danXCtMnKhUtj2W4GHHCA3ARkmKLyb6YdiMncy8dUusvWWxi1iGNkUzzhGadhoS2WZsgtD1nvjD1uCd",
  "key20": "3er616Xnr7nzmuFameKeR1UvicUKEpq5hHyGaPLbX3RF1Vbzu9hJtVjauJ6nxL53dw8x9bKTQiKvQ4HUUA2sVDfo",
  "key21": "5itdhNedrYDwcRzVRTKy5YeJhP7FADm2WnRo4XoVWst78AVBys5fVnK7Uoj6GTRYSwze1upJU6AHrWSzLer5oTKn",
  "key22": "gQEy1bKHwesaQiz6AYKh5rMHKXKfGEZqjiRM3wSsgahsRuS26gN735cjqA51YpMxwgWH1Zq3iMHgCGRh8AoHDdJ",
  "key23": "3fbJYhzVAj7Rs7CrQ3FaeWAsWGiAG2ci8hjNaeuv9qwoKJSYM6KQGtaAsX9s7BUnL5qg2SbPf7sYKh4Lucx3gqte",
  "key24": "4rHnXS2KJB2WbPqozgy1KdcWGESBFvpEBCGjsPKiQJoGoMbrNeuKifZm3RwDKAzUZnKCTo7aEi7bZK13nu9KNTaA",
  "key25": "2zqSHZuanj71zXAhPn2MzdpRJaGdyX7wSQ4AjtzRBQzkfDZmNVNTLcyJB1pPSXYhJQvG86A6KxgrKgzVVwViThf1",
  "key26": "2iU7muUQsZwmzcdbNx9KkgqTHZrbNn9d5aBUHUusCT5fgZQ8tyoHXnYGHGa8A6ina84hhLoHFjuwQyYEk1ZCEBGX",
  "key27": "4HK65jLTG5ySgwGXmbAmSqyEX25fNa3f7sdPvABrqW5qwp3BAuZjYXdGqa8DumEhezdVZYLQ2sEgYtVLD3A6NZ5D",
  "key28": "4i3C4WcGy4UhEfu3DhTmUWUMrBxJJJ5Z3rSgo8RnhjkF1JFJniWuyuCy2DqQ5o8DWvkTxtgPeaZb4AncZPJrii9h",
  "key29": "5f3pj4WAqHfJ8fAee4iGy3kg6xeh2gVWvq3vrQBJtFtBRbziLUkQzm44EX2fmDfWtwST41Doi6uy3pqowgw8RSJG",
  "key30": "2AgfTTmJpCyTfd7XzT7ZvqbPbYbAMow5caQFhCj4P8XCZda7wmgXdHcDExTgffMdkM6537UkyRGhUXVzYziCyaK3"
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
