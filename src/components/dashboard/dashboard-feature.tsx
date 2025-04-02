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
    "4mdPhmSrDewXSJocaVpMKzRZagitx6yzeLjeEPwA1nRTYSz9KtHUzHU6M8T1BLQnPbgjJQMK3psJB8HHyGHTbvSz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kUQVHfXJX7T9xRjzkwHC6XyAgrXLck838bQiUMZRm9vNYiaSTRRQ4wDeadW7PsbQ2dALB7gsDj4YFDLcxNYxpUh",
  "key1": "54fk6Tpa7VtVDNMLWcWW1RRYHDvsVdHwR91pgjZKD5L4LpNvgj4ARpHndY7KXXJATHhq5B92GA8caCZhXZFDe1Yz",
  "key2": "5Y4TP6TjT44qd12sDPGABzzyUy5tLUTRaaAwzCDMDeihi7j6xGZjja5YQFCLyC5JPXkeK9g4TamGYdv1snQHrKka",
  "key3": "qsTiEZzBWfWstULzhtrjomuWduRUD1vtZsU1VnFDLiga39ePkf4HFNe1mGrGDuHGZG1XcxvYtSHCVfLTj6hVL4P",
  "key4": "3BSmjDpp1f8V9wkTW9wzVyy2aiUbDKsbqQ3yLogEppdBwjtfLzLLjMW62cMyYtrMD6S28PPXvjPzrcWEJuYcWJLp",
  "key5": "61tFpVzt7V9JwiDaYrtjYkVthsuwPzrXdhjvHVfUSdPqS5zxhJpfsuciL8wn864tM83KvSxeM5u3XaF9PwT1PnER",
  "key6": "4MDCzTPWzxgd3QaayKZneMfNrtE5716WnTRjuLu4B6UJrVuqQfXTiQ96FuRC1hWHphTZmg4pMwdFKA65EWvrs3vT",
  "key7": "3bihvtkfyc3YPa7ju3RyMDUKA2JKnKK915jMQcsiMdmgpqe8cR3RU4VkZYwcV77h5CkaS3jn9FTzM92qS9qAeCGy",
  "key8": "QkBLPUtCfWhatGn9xk6NyKVJm5EYNmvehigNpZvt76ThHfzMuEAQeR4Du3RFzu8fwtG6jdS6zbymHZEXmhGRfQe",
  "key9": "26hS9o919rdKYmh1dEHv2gP1JvBKEX3xpbVSnegkbHeciEAdXhE6RE3Q51idX7Gzmgw9gbT363D3BNa8mLGncKd4",
  "key10": "4ZPHum4jei7hjd7yHczdqjukFs9tXDth5H9dKvzihkEJD7NhcmzUZKDYL1Avr9S3gUW8rgk5Zci1qsirhn56gVZD",
  "key11": "5wyXRh1YFkgsDWiJgXKpmTeFT7bJTy5LBomKJoenHP3wDYa3qLyk2HLmrdJU7Uwb7dnYjnPjES8RgjNJHSKum9KV",
  "key12": "3PNGGfxbeaAUchZ51hMRfvQ3FUpXHrALHPMiP7Dc44n9PXpTpLMFRrUodCNm8xr3uTWxx4m3d2rtoMrEM2mdiQqL",
  "key13": "3cnMhWSRtzTy3GAkH8tyeVHETBkHHB5w6pZp6rUaTB3Busb2WHrmxhWRhfFCGNgvUN151oPzdcawYKonfbY2Aqmz",
  "key14": "4rV8Y9718DUALrp2Tkap3YATGg2sKmV2RXcaZgp4nMks31Xq74kvFDp4cZM9HmUiLCpRArRzYucovZ6rwxhW3FJK",
  "key15": "4jmSCBB6xDffzYQgpTqqPjttrpbuR4fcqEi5XGCXnNsFuajXhH9MdGhwu3L5UWNJGH1NB1EGECT5pPxpd7U2UfDW",
  "key16": "2CYnJdXDYX7XBTbpTLnQin83qjfce1kYAHEA7jRCzL4q22rKuFQsdJQojPFD9Ek4B4EREUrqbq9cdo9rVRuWiWcq",
  "key17": "652hiXeaL6FG7aqZDN4xxwbbH7Be5Bk33PLnCPQFbQuWi8aHuFvHfmj14qLDVenRhUN6Y52xAzZB9xYuUg53Kx4c",
  "key18": "2qBfQwWHhaxG1ox9DPewvetxyLgdPPG3ies71xRSkiYr2WBExRtFrxTzmFVbT4E8zdbGxV2CzvzktP8ruy9QRU44",
  "key19": "3v3ZTWRinRvMWHizQGPWi8YFJXiq9Zub79pDNF4MgZFYUUcXTYEcA28vatbE4PZ3HGqS8SjEuAx8yxy9DQRiG2c6",
  "key20": "5RafpaKXtU2hYqn1hKns6EQAPTH9uXsmJpMoh4EYsRYtpijCpcN2Bv2KovReTe3fUnKqwBrfkvEnBarhTqJUNNUD",
  "key21": "3Zp5HTy3UeL8Aw7ZvYjUtyMK1sdTcpqR5NcxycXWfZbMZYUQZzEKLEgkeb5dXDXktW3Kk2zozaxgHoTF7cBomVaq",
  "key22": "5ZhmeuD5C5CinxNUv6HvtMZ7esSqXun2tJ6ftWk4bf5k1JVPFqUKiRjnHVbdCsnQV3H2G6cXvYankxYgM62fMwgT",
  "key23": "5GFUpEEjjHHr2bedbuk4buZ98Tx5cREV544PvrCraqd6MiqWn8jmiUeS3gTMhtqyvUX5HmyouP132RzNQksJrtuN",
  "key24": "2cHVd5mCgyunk3wHc3Vqot71y14hYEt8E3ur9f2Tuo3QdEBXQqs5iJSHs86AFEMT38wDFoukZaSh5sxUHzv4RhpN",
  "key25": "MMzyHenwkEv3UQ727jMeBpYATKqwLkwnaVpDzLiZEu5W1KfqdFKFqMkwAHfZYXr4oSKHHGaUuaHEZi3x37XiJM7",
  "key26": "41UybZh19Txk6kv4jxtKFSoLdYPWpkKdMvSSyub1kkabGpYtLWUEMvupLsToPhHScYkkXMZmjjnPgUDfmA5Q4Dn9",
  "key27": "3NvVW6yrdUGp9Pp3DdfF44djENBrL56nyg8fiEigi3JWCZiX7Pjdk1664w6gauKFyskGPiUpTHEcWRBKQT6xbT4x",
  "key28": "5t5GsbX5z8ZfVX5x59YZRp5m8BCutKj4YNthCA7wLLAPa31PhxsLrK9MqKnsvZib7L8Q4ZBSieGVmpn4aCruzpSB",
  "key29": "5aTcmVLKuSqBpkcPgATjZ9MNvyHzj2V6yvJEYRWbx7nMkkB5U8yfKp4kXhuaXMw6jw4srHe1hZRBKMd3n9ZuSdYG",
  "key30": "4r4poPFEMFLnQMKAaKdiSAVunqucpXqq7QtmtK76S5Vs4rZ5stL1THRYJrVdSTVNNQjF4PiptvfaJtC7ySvyXnrs",
  "key31": "ya2sAGmtzcs9TrjK77XDM5abZgcUTBVEqivYcQExbtS9J4F1bN4HjtHHnS3UhsGL1RWzWJddtwNySZWEMTzR7vi",
  "key32": "kAoQcrhPiP2cdc8BbgYjPppXuB1cPk5b6zmfoNwWsodztKjhqRUKftAqvJnLFKhsykHG4Z3jVD5mM8FKdu5tG9e",
  "key33": "3nXyj3zyaJFBLWYU7T3gPXmHBvXp3u2Vdp6H5togvDknCv33jwH14efT8rEPJuHhoyA6ErsFcz6RXmeoQXwAJ7W",
  "key34": "3X9UFRMBjoGDvhdni4C5QomH4yL9PURfMHiZAp481Jbr8exJ5mfvnWGhJaFMuNi5BoHFWhUYWjv9wPKkgkj54u4r",
  "key35": "2GHNLZYuvnd9M9vwhTUiqWgKjAFSYMWUdCLW95E2mRG1F49eaDWSXdTx2kMESvSuC6ZcdBsgqKBGAESSd23PDmWY",
  "key36": "4WT5J6RhWuKcNx9HDYKrG6xjYrMddusXtzNMkDGjsMHKJa4Do2nRwp5AFVQGQfiYwE9Doy9wDuFgtXyNb8ncLBVy",
  "key37": "tMN68KvcShWo3Byv7G5xHdhzigzdcnvpvgQXFVMGjEnpjegppoRo8mi6TBrzBRoQnT9a5EQ8zobM48BN5q46tPB",
  "key38": "ku9K7Ec9hcpgpnnqhkcTvsm7gtvDTVCRVbCLfXePG3xVztv7dDkB1GprWkFqWsp6nKyRddUh3CY6eQQwf7EPmb4",
  "key39": "2eBkMQpAPTCakCV2xsR581x3Daj5Wqt3LsgPzdNn5NatpSBg9PDU6Yg8Z4U7wjZyC9CntGEVoXAwM8qVYCDDHbxv"
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
