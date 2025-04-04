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
    "4rvCzkQ7nX7cPV1eRpWnAMiWTi7jSx4JXdq7BwycwtotXBbdZ2qPHuG8Y7gwPRhas3CVfQYU8sEJf4TFPPbtMpQy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ejb7UGR8Zz4hD5BmAkBDX18c956cFD4hQCXVX3EDxJs2VH5NRsa9F9p3zis3ppzjbR3x9jR99vyG9B4xUwzz6AL",
  "key1": "2fwU7gfkVrrv3xihdj9Xqfsa4tnHzHv3ub3iDh5nmwWtz8BG1GAkyoCrNNMffb1Xd3q2spoatMhxDynMZqbMgrZp",
  "key2": "2YAs58HV1dCHy8BJhk7UihquRgxVD7VuEiaGUD2E84Ji9BqB3TSXRFBKUVB47wkc6ejxEkGz65NFLR3QCowuGNdS",
  "key3": "3jBmNg7P5WuX2uPiYFN4t8oxbtzeHXKtpoSQoaxj1XhHpUrbCmsoY73TtoqYdXnsunfFnTbr7hQNX6qoFSmit3Bp",
  "key4": "GPTDC2G4J9vBg2PGJBSyXEZsxF8nsTY7Mokoxa9ypaM3ypwDtKLSJTBVKJnDECgcMM32EtUVKtUSy7rc2UMkfti",
  "key5": "2sFL167y6euRMY6ivjhyFMyvKR3ShS3Kg4Vq8CJTC61Lfv36RP8YjsnRLH9mHTsS5KN1FsrziWFEEKvuwDpTk7HL",
  "key6": "2qfSaKXA9c5ziD7L2XyYip3v5XXGDEGUwpBceND5cBANu4PeW5rQQiy8Jz8MqQAt4JahFdvLFt59cNZ5Sh2M6Hsb",
  "key7": "2rcjCQphmVHoy5RksVupS3DpmgMB1rJnQRMw1bHpJei4XgApNQ7cxq8jp8zAc1srCFWgMzr35gi5rrLuSHEM5KnL",
  "key8": "3GoKy5gU1Z4i4AqZ76eebUCWxm1HTmQWV4iU79hcyxxH3in1eKQqK3QAdycZvwVoq9QE5tYfemBMXtZf9dUZ1K91",
  "key9": "2RRn7gQJopHnTYxpSSefNgQBisJFtmRMmXar93bWR7aEu2a83rEXXrwigm3sX1fcbbX3GXYkB5ECYMkiZAPbneSU",
  "key10": "53aqbzeU55YoLW677hnoAPvZGuzY2B5XMzK2cRSChhZQHGw2THZy1FLYY21d4dXj5yhmkAZ5t7oLgxcb8mqooXjs",
  "key11": "3dnRYXXvDHsnk2ia4Tj6KFDjkmjDUruqjCf6TVApR8LJCDACJfwsFvZG67EyKsHRv8gUT44xNBRYe5EP7VUeDGwh",
  "key12": "4guJPFJ6b889XcHcaJJ8Emqdq7A9a3TVagQU9W96zJ8VW878swKJ4Zf6fTf27JPbsMKaf6UrRN7n6qAiZtGmvGRk",
  "key13": "3st6zQxjepYNRZEmTQ3tHVi5YwZAKFZM55AavqWTzV3CAjqqLVbGuxsRQWYoE8C9g36AAxawnJDC2XMno1HKbY3F",
  "key14": "4HzeRc69Hbtq8hLjLX5KQ14wuGqvWmvTLVCAHzjN1zNr9Bj2MJrjc47TFNvpokW9fdz1AZPR8d5znbH9kroPBUb5",
  "key15": "5Ss13NY1SDx3yvJ7oCdrmPTMGDfRzt4smqxDbSKN5c1YR9ndgT94wTCUfdxoYDSGGLYjjTQ9p1cA4xd74XDHamUP",
  "key16": "5u1JNSfU9eoB5H6JvDA3y3SNqAqCzfGQ1cjwMtKFf96akc9ne4fNhytxdeQaiytp76yPPGPB8UMeYzdUSL2wqAz3",
  "key17": "U69xZWKbZ4kqVpvrdGv8hrHU1duL6jDmPEo6cNvZ4Wdv2DaDkuT3RyZR5dgbbC9KcY9wcPDbmX37sxkVxaKwe2J",
  "key18": "1jXWN8rtvGPWddDukqeyMWh9xMvxGM98zJWknKh7djcHQQTDyiDY9HWSpBVc61Eo6G3uyqqSc8pSBvb1NGWRgCW",
  "key19": "4LYYvDbgzS2ov8KKXnn53bVWd3EnFt4D8DHru1VM8JTWCzYPQJui4DcU4vrHdbynbiS2HR1vgRCtmMgwjzDpXUdX",
  "key20": "2aBHhpBahZQdPWfb3yw9MXJ7EqmVY7vwHNgfuMMaa9MKvvc74CrhntXqHUjFj2zn5q2hGGSnLRuJ1cmyauMhdU9X",
  "key21": "2SUN8WrQH4t6sb4pkPFcBqE43qfUMbuTjZDPvqv84TMx9EkEeQvBK9TmSKGrFRTa1MNSkbAaaUUw6RutV5w1NEif",
  "key22": "471fFWYFJRAsfnLBCL5B9UWE7NhoigfEnXjvMbNrA6ZPJ7vb4crhXSuRwcRzRRKa4NWpBvKasy2ub4D1yjhic6Uk",
  "key23": "61jZN9ci16wnUX8LuwvRQ4nyN4EhgpBgYjsbmsrrWFisgWc3Pifw55kME7nUEJuCyY44vabRjHFmjcjarXwGkUtY",
  "key24": "YwHH1qhroVL3SXDFWUh6D2n6rXrR5apr2dQW8AFYU4cPLZMyxt2pdMTsCSKFmrDgAXzqVomxBUSFFUJLuVPPjar",
  "key25": "5kDHJyokKwT4EYtEn3vmNyGJK2A3y2GQQuqeYY6ZXJhCc66GnoGdy2q42wzpYaybv4H6oRdaHPKrqNGjLahQg85A",
  "key26": "ibsEtLXKeoD7R5TknaEoTYujC7SzvtxWiKXRK1V1ptNraT99HhRAx6ytQBn23Mv2H25MBWds7pGNCNxc7ZoQvtn",
  "key27": "2KY65hdYpf8FjJDj3HfLAvDkNhZL5KRJDN5WKCGR1xrerzSDbZF1G1oThMJYuRLFEwvjTaEjSSCDkeoe2vXNee8H",
  "key28": "2aCAo3anSDR92XwBG6JQSG97zAJMUPMN22cDL3g8hnXq8GYbX37n7kit1pEVtmjxiZZh5rbvGE8BXTMJ1YJL4tj7",
  "key29": "31DJUcm3dTw21MoMK888h88MDA3i6d8skEE86jaiz2u7LgSqitji6qmti3o9YP1UfbH2NeHuSxCNheCp6Nu5McHm",
  "key30": "3sjLbYQtFNrH5wTBFJd5mTbvUuYGhkZ7TeYBEXJMMBcHRTi5unx4tbXR82kymUUkun4ZbmDyLU2mkKajijbNcfAn",
  "key31": "ssuzNsMDYzLFbup3seeSG2iPgKqNizZ2gDnWx4T6kzeMv9eEzeS5eea1NSzUTJL6WupWDjS7jSMmBwYWXFp7fXp",
  "key32": "4dCZQthxjc4kVgkgDXGcAoNjgHBUTo4YUzjuvS65ap8VfCxXpDVLr2i1mujhyYaf4fVAGuYKDJvN1bP3MAoU3iDP",
  "key33": "4QBvWC6QFgZXDGsPF6dUDSd2t7JbzCy33UrfSdiMQcWbCT9syqxhCbrM1t2zu4iLTV32Dn5aCahUyWD18Y6k3i84",
  "key34": "3fYvx15BfntdRU89jN4Wxzp9vhRWLhzkDDcRNkRpz4qBgUyQioDPeX25qT3dVjw2gxdKvmKqfUXe5JWv2Xxmtw3s"
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
