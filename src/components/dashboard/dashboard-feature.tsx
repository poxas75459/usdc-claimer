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
    "bZ11kXoDFWcJWiWneqij4RtK53tgsWRAX7iE8HJhh2gz4UZGDnQKELrj2vUURTH8fh7yRiE2EZD7MjHieX3WdqY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FkG5etPELHmyMz3XEFip7atuSqhNgNkssobyS1wZ4NkC85eDbsD2xVvwP2MABzcmfUHBJoXs8mYtCi2pCZ85V5G",
  "key1": "2dzE7oJeekHXRiRE75JFNaNcoLhjUaXZEyzT4cUks87pSDK7Y57CgVtVrmAiAHu6VAjGDDhARoumtqZbeFGEuy1H",
  "key2": "5JH9nDw4WsmTRTyTa9XpCU1MmzUG7cKBnjpay3YEcNpVqdeMKwuMspxV7ans85K6UGLkYELKEcQbxsN7h4x38qPH",
  "key3": "gMfNFBFxim2WbKzwg1ArjHoUcfSPw7QCRhLubimnGWb1whSa7yiLmdTdy5CK7WpX2CL4uHWShRBU1notx8RWEUG",
  "key4": "5YZqZjsQCX13843Uh13L9SicXd1MwuLm3qtsorhJkUqK8wF6T4HZcgGvSkPsKyajRpvi5n7MBv5a1BjxRYcCvQbL",
  "key5": "3kjERGbXnRXtF2avvMMdGsipobGZrW2k3zd4v7g5mu8Y9QtBtfkGxdaiDzR45TXizAJCXZUE7d9XdWPMh8R4LTiQ",
  "key6": "26bGoP9rkU8dvMfkKUnLCHNpzCmDthfasUZfbe3ZdzTrWKiViLMEiPHs8eoimzAJDyRFac27br9SB8WoNsbPiUz3",
  "key7": "ezQDMj7gxDyYm4R2aFFxeXCekZwpNf816V7GDMafYeeBDxV1PrpnfpMUKnSmsDbBVbD94JvKtFDui8TAx1WC1Zv",
  "key8": "2BRJeW41G1daJzVL1NdbhpE16ZE48PtdYw9sgg9UsGjcZ4EUx2Y8EGXEgLZYkfCrACNcE1xHY8s7y3tS3dERv9ZB",
  "key9": "57nXDCesq4qhmA4jncWoKmBxFBnqeXYXwgU5wSXFmCp4varyNeS8XjCxCt4JtLvrDKBvy61BXnS2oJKGuN2HAbX",
  "key10": "4k6CRjiY5WExNT6zvWAr5Vxra65eMbNjhbM8adGr3ix4naHuua6c3gUwZC6dDbagibawRp84yPTmea8xGYQRK1Qi",
  "key11": "4mYPyU9DkdskKiUTQhLxGq8y68xo2vYXPy6NECzRu4HbeENkBcpdvJJ3ugYGHhXeQ7inQy9qJRCTMyretADs5DpK",
  "key12": "3YuzWCNMRWZ1veKZr3v22rJmrxgj2TfPs9krDktSo4yR59LhbTYrVCe44qUq3otEf3vgN78gZykgvUS1MpKZjRja",
  "key13": "2S4mudniEKFgFekZ9KNxrNUtV6ie1BEVE8zT5Q48kwfbS3yZ1dFc6Dg27XRdSsH79aKp3QSgTJd7ERVEExSS5Atv",
  "key14": "iUYuP7yZLJUgbNhAQfyCarUcA8g7Vg2PPjaGZrV4BZvJG2YgHwAbLbmrag229DahR9cugqQNkA15wnXrkYQKecY",
  "key15": "2i7WgYxCt9b7xQg1hDMoPYxTETcQjNHzHzAFdN1DzVQZkX157NdJNRuD5VcaioDsLgJAUBz2eX86Vodym6WBDTS7",
  "key16": "2F7RZMXZ6cXJCMVxXKSGfWrNW7aPeef15mu5fx89AgaHKqYrAz8K4668KyMRERjNaJX4QZZtbRHwBA8XjXj9oZUw",
  "key17": "5xRv7ski7cWPddck3mEvfQPUAZZWcRpwMUGvkGB5cHAtnjAPYyrR85iPnAJfaE9YsHPLgvdGz9SF569woDWQ4vV9",
  "key18": "5hVnnJCDdoRRjS2FcGMuumaeBbLNhg5eyWFsja2X6yW3qWfd3Bh8Pv8hS3GAAXHAeTQYMfqpU7mTVgxfqW9y1EwQ",
  "key19": "2BYmgag4VSWcBtJHWFGhMRgysCZv24Ld1TcVwkHTYnkrXMjyxcgY4jsy8vVP7Drcm4Pk1X3297ijJgyNfpBhwczc",
  "key20": "2UkS94vbHnGzXJJhGDkGCZAtiiVVx4zTDEa9urU2HB1PKCANweTRFbFCAiTZmVRTqstmLoHNt3HwJebdf637zn8d",
  "key21": "4CJUEeTHfdjLQHHY2FPNN5xPM7ZesWVZz3BZSsVKSGC94tgcm8t7kpn8b86cTPQDU52mKch4SS7nsQ17QepNWVvd",
  "key22": "3XJ1GgpfqaFQqdk3ksFkGDjYUVVmsjqaR1Jxo1yb1sLxspj4vYtLZ1qrYQeoLNksv9tc165DzrvokfDjATUPceMr",
  "key23": "5tGXBEivWj1447WKNZrvRt9sdnhfBW5fVwpe2a2QW7kpPJPoEnKttS7BR7BRbFK8p1onNmqeREL7Ci7siE5A7qFd",
  "key24": "xBvHG4TkhdsNbaTn9E17PJ9sd9gkWMHmrNjVZnbQEtLc6wX7gF9FjX4pdtgA9bfKnnE1w774WzZkcAkXj3n4NM5",
  "key25": "E4PQniAUZEghM4PzEnJjSEsy11iKajcSCYYid5fdT3CypX6sWT9fBccWr8XDgUSHLZqFBLp1YXMuegqZBQx444v",
  "key26": "38Jt8H3sSTXjAAWvMwd5YxitxaZJeqY8saa3rgWSAxZaB4tTCB7X65QaLDhmfDEkkx8CuUtCKvQyDPLHREJsX63p",
  "key27": "4t6U7HowNTsxRPkSpTxTjFQ3TPvo8WK92ALdU2kkdXyJBPiZuGkC1AkkcbFX5ab9rCLfavauDKphkobCrSeA7JxJ",
  "key28": "3y9mAFt3g652xgxDvTAr6tzM7uiCXcUN6pJ1xrbjGoJv8F6b2JWyJf8jtSU3LwH7z3yziAfcLTzmfr9gXzufHBac",
  "key29": "59WrSh7gobcAvmRvr7VbKcur5xqHNt4gKDwKtkkWgruqaj9heNJn3PHdZik5SUwihFboobhq8p7Ty3w4nYBo6rcX",
  "key30": "32GS4H1Y9NZfgLdztcHi7qF82ZgH77aEFxjE4cxVDLtY6ojw9Zo2i7fFxBRfzB41LokmfJRnXcHHqSjNddj3Dxj8",
  "key31": "2tKAurFz1P3FJj93rW4yh4wcbF3TqwccRDwdCuPFVutQ5NWGA3Dj3Q7w1YFrMBdEvmdQh7enp3D1gz36Lt8ur2Cf"
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
