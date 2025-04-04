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
    "4CMKq81N8Ku8bM695zUqvJ8Ee7qiAziWLp5QMuESKCRT5KZaMxFjahJabC9vjTk2qRKj32FvGHqUZv4JYgyMY9PX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Kx1ceUM61NcAofiKfvy9pTEJpJzFaX7vHp5eUEBbUWy5j1edzsKLAvrD7cm86wFoS1WMctqYqpZShrzvbrc6Eik",
  "key1": "5x5TyUXw9kzXgKwWygp2BMvh2fzHWGps7VGRd2X1LSqC4SyT3L3J3Fyj2qaRS88YAiPS2sTp4r64RNb2L9ApDuMz",
  "key2": "4U4ScmhV1spRj4fkWBy3PPwLjtG8oQEnPwyeH6t4bx2DN2qsebRCGEQnyS5HcLyUhRcyLoPNYDYBVUUgB2adCUCM",
  "key3": "54gqcCWTnLtGPsfJhAPhkfT2paUHQiCdsWtedkipTJYpZyNyQc9H9hTtRw1sxRLfM7wn1H9WKD4du9AXUpBBcVXm",
  "key4": "3JfGEyZFXvcc2geNh3uFxgCHt86AMEWomH9QsiCbKu7Yxr1kD4TLCvoU13uYy3pjjsQzQHpchTek4vrWq82wjfMc",
  "key5": "2LbtxCNspkzLXv23XEew8noDoSnRpWo5gDy75UuyZDmEQEMWdUk1aknH8gNitLE1S9XukAR5WsLJ1dWG4tHwjU8i",
  "key6": "5vhCTaSENYKsntkxuBnk9at32nn7A53yu1B31Nu4HvD6KfJvcskAF5eFQKo7RfDeayxLvTwJcEFR6q6fxoCzEv9v",
  "key7": "4jHFMDGqXZGsUSoqyLUtBFP99gKPqn7c8ApjojituPhonjbahH2akhhG5qXrPieuhqrtDRXhyDFCooUsmD5AbTPY",
  "key8": "2P3dLEfHQbvnHtaXmhj5p6AtD1Fd4KToM3QGLiwcUzHSAjHWCVWJdYdxSUd7MpH24TYwUqtnorUvZEHSUaiwe3ue",
  "key9": "q6AF1MhpXVAqWfh1AwnfgkXTAZPkuBCYdMGqQk1Rxk9rfZXYptvebYywwTXpQcKFxsfX4tjUyjy75ShoMWUnybE",
  "key10": "4vmAJegBpobWSfokNEvggF9ouivJtYKrhaWEoSHyYZV68CnGL5KhaPK3YMnvsRBAxiLsE6FAQzkWqyodoGVQbuU1",
  "key11": "4pW66bwPBDi3iTu1PykSbdSV8XF6WbQyoZuF8EtCaxJUkgGiCXtBNYZeKhEU2nsAaRy89WztYsyenzfC8zKZpoWu",
  "key12": "38eKo9Ep8hBuUTA262UvYPgu2kPneFShYkxuyuPQ1p8gEdRgAJkqjory6hR1aWN6EsH9tAz5VLiQkipDLVLSAu52",
  "key13": "4c3rE81CGosQkfftasBbMMqZqN4x5t7gZD4AqwLCmY6fF1wk5EcqkFvYdqrm2bVkx7VMCtzQ9Q2kWd4VY98EQzPu",
  "key14": "3deCLYQ7svgqtaBsP4bUYbExYu53bJGoXFTRZaH8mQTtkcQZuh5bADbxxAwS8tMwL1XifSyPueBGPi1LqoYG79Ne",
  "key15": "2LtELyUhcBbGYh9tb4gESfGfaNjRaTjboYvitUoTdSrrCG9ojcLTxUtQiQjmFKUWvsJ9XQLrHjztRWzKihwnhsYr",
  "key16": "5UeejncEiJxoMLrxvd7r7psgaJGMQYPXczkg84GCFb3hYgacDkLADrE9gU2PhBWvH5S7AASUbM8Jsu1hyW84nbf7",
  "key17": "54GKnrzS87o1XQ9uYAE6TizfjGzadqsZbVdGoKs4depM2zgGf9234MNdm7eZnPkRq8S9oNPaU4mSnjSU3xdWJnJk",
  "key18": "3BkKGrrmTEuaeGLLDqoMDzWYAYYVX8tdJKaLqK7MygK3BmmWqrTfMsCDAPvVtLRoWjmcHRY13tc2zeWsvVsHyhWJ",
  "key19": "2ghwyZQyzZj5JMtLrgYbc2shC26c8xk1rnFUAS6g4VhVk7TCKqWKqpH6qmS8yNppGSPRZ8Ki6g9929i9qVLZ2cGX",
  "key20": "tKpqNTp9YApD67giFdjDYxXvYBH7nhVkZGtTNHbtY8PnacXUaJH1E8oP4Lm8cjHcDYXnegfE6Z9Q4LwcQYfK6GN",
  "key21": "47s5nuKe75QSFn7ahXXz9rsQ1Fkycoh4KLiwYK8wWTUDit4k6SoUPsXPBsJj9DUqr1dgK9ZoiEd728DAnjDqwFYg",
  "key22": "5HWFDWLBU9uLNEbrti11pbeVE2vXH71uKASPCwyfogw99tG7qGh6DftEQZHJ3SJHDM6qD9gXRbSQ9eFT53sBnUYv",
  "key23": "jgYGkdHgbyS8BExZyGejC7Xab8MgKyk54QnFLHW2DJQnvBAALub1Ftb4xP9xAg5JaZwggbgDVbFnN5B1CRnWTak",
  "key24": "kGnv6o69ohzhN5MMyqhFNsnVTUBNBHbMGgBo9Tn9rs3bCC1P933qqLgZTiUQ8PHRkGBf3Hi4VbK48SeTGtU2Hgx",
  "key25": "5ZAJXT57GwiuC9oMEfSfYDRcMXZC56uFpAqqsjuHdvEwooeJwWS94fUpeAoC4NGEtBVG3MJNsDMtwDmkqWqa4JmG",
  "key26": "59WPj5BFRugHJLPcRJvoyKrUNiJKMFSktA2C7bEURtLtHsbRhwwwWT2kqt8WTVFff89b1K1hFThLZ4EySa4WWRSf",
  "key27": "4HoJG4VGBBLXfno8jDZQQztJbeB6yDCzPRoxjxUPVYhK6rv9n1sjNzTGVjvUfjUmHc1GRGZ9Vxxim743VvBnJGmf"
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
