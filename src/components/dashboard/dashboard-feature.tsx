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
    "5xnE3VTxMwDWdGDtQX46f68hFZBjKbUvQoWLP7vX7mzkyzWhvrrqZjVNmZRJF9KnsyzkA6JHwprAS28XmDZmUjLZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EaFUX91mnh8uuWX9gAfCaCtiaSEspguQB7ii1hppfppgLvgfiex85FaZJ738Ts3khR9sdsqvuiouFgBksJq2W8p",
  "key1": "ejmccwAiZqcRLYb6oUzXLXmXefgGxqj3TNWiSfyx1HM5n6rkzpDVT86GghQQDPAJD2giZkFTjJuhwq2ZnmoQjqo",
  "key2": "3tbu5czWGzUVJWg1FY2v4qJC1CYjGQcWqAF2A4TwNjWmpXwm9CyzMsJzuGedMC1eFNZWrRZbAXrZEMWjmYoJb2zD",
  "key3": "4RuhsfCgQ7UvQ2AunMuhCt7CmWzgPPaAG3VX3yQRWmuJoeEttucqZTDNmPBG3vTieng64pEundCvgPy7nH5Ypnok",
  "key4": "wAVbjTdipTKhSkHcB1kxt7Qtmsog6U8e1WcMRF163AAyxCvMdNQnKMDvbEChdUV4HecZvQdZUAxnFY8UYsZcFyt",
  "key5": "3SAKeXzt4uFFyrg28uNLwSmybAmMoZ9oPDVunoXphnoLZmDiLbpwpD6ABLSeS4rVZSQ2YAZcU6fbknHhPgjroASj",
  "key6": "2FPcCtfgShsQDNjJ76FRfAVHu3Qkeb1bThgTCvzfy6DpH3FsaHrBHuXbTWSqfSoy1Yw9zxRWdAgWZ7EMAoc84YTb",
  "key7": "2FYmy7RHv8doWG4hJmvyEWm7nMJvKWpXtMoy2Ej2FjZtujWKyotykFwi6KrjQWfyLGFBsPtLWjecMCtLzaB1t4My",
  "key8": "43eGfyfrQu5HY7eXjtoFSRZDJMhr5Z4EmqghwDFS4LSZgPfnTb6rDgY4EE3NtMT8tk6cgtnF7A5aDU1Be2hcdbZC",
  "key9": "54azmUeE1aycfcgmVbX8QjwXD9MkKT33vHqUjXzwAfDvmeY6sgmFYTNqgtKUqqw8a6LoEidkCvtTbv2tv198mFAa",
  "key10": "5yvj8CPqtXsAjzSzZFPc6aFkqbWJc3AinQyGrjGQijrFxFyu9US4jBGeA1LberTK3JiYw5xLBPdW5oi1THhWaVTb",
  "key11": "FpThyesv9VHJeszFGMkBd3AefW5UL4yQsQd12jSAc5yTzXVJRNA5GznnY8654gJ8R8K6KP8bXeWcDLLZQPSKkv8",
  "key12": "2CubfUqnTHYa5M6KstaFuumYao5swZgCGgJr5B9xdy6coqaiM6pdrWDQBWA8aBiw3BCZhFsJRK4w1tBe8Ypc7eDC",
  "key13": "2vVCEnzwr8tmsui3JREF1WHSin4qveGqVXiaYHBvDTKam8jLezrZ8nq6LfhL9rDvs8CLV76ZMqjBC7CCfGqzyGAS",
  "key14": "3dnfUv6Km8hjtVuWsKXzeEMe2YE3YpaxQsUPVAtLubhsmQHvXFdVooYbbqmSeM32mzTaJZcwWdwiqxUkyMZxXD2J",
  "key15": "4bPYgFaTLKvVXjrsJN4866XUTh7g2Pc9xcexWUqrxMPw28ocB1ZfnFPWTLvWtYU9ykwu1yyVekzgtv57awxNNGnh",
  "key16": "2TEYPtWwjSgo2gEcwTWFeEDAKyjoxw6uxb7rzJqaCN3kmUCqa4tDvjBgfbKoh8TuHzTm8Botb2c7UmDLywZ6EFQp",
  "key17": "5j4rw64HpwUmn9mJZG15hWbj43o5yWrTaWdMNjKVvLTWbVoGQ4kfN1yE3ii3JMrqDL5sbw661vuCdQARdyu5zvfC",
  "key18": "mwVgS2PcNfjWiPxXuqsgnbGtoh3Eu8GQPSWviDTEPytyHLWSzVmxKig2D133HP9twCZEgZzXzJXEBxvN5RwS8Tv",
  "key19": "64q7Q9h4wzZFgh7C7ZVxamupEnhNyu6qfTPyjDFo33TtzSVwjez8VjpvMHt84yaE1FpviA2MT71onWxjj5EbDJJX",
  "key20": "2pWNXovGZ4tVCjET8cwd6sFS84cRi35EoerGc2BwK3vwUDXP6sxDRYjzewQDnD65cgbnLoxbRJJ1NZddwBh6hYdz",
  "key21": "2uFsMV982HRpG2Y3NZJtZGTNURad1c97ePWq1v63HsupqThQTyeGeU7sRMwHNSKrp1HUTRyXQo1fTR3SS452JESY",
  "key22": "35LGVY91BXdzMwG1vvJXMDcPyeVKxqo1aL8gK5PsfLaQtnxHaTWWTUYq9dBdchDDNGr5iGRusehw3gD3BreMqrcd",
  "key23": "5FF2FeFNG3bSqbKUYuYj1dqDGbnYyHDc8PGawqy3UawGHFKPx94BqzJh9qR583jHZ4Qh4VYDakJhJew7PbxYnTUe",
  "key24": "2FMJG5oLLbAy5dFKouvqC4waKaavtgRUmYoPTkVU552b4aaXCCXMtpoTEp1GLKgqWiuYDTJ4nWLYsA3RHg4dq2zf",
  "key25": "5SPB1L8iEhVAEBXRkFnwsCN4CYqFPAztVwoH5NNMH9Ag29HiDwUX3bdTr9updSiKViNLVsE3R6YY4tq9LFi9Ra2g",
  "key26": "3UNHeujEN49rFc7aSVBmDLjPsA1jfkhHR2TLHVNKa6ue2tEokfTR3ZEew2YeHqyrmPVVsauscqPYgfC9aivVuAvk",
  "key27": "3bx7E49gjKYM5GsMAdr3dQBb84HK2uFbCfBgyGyLriR4KNjth6xUpc8bRh5GrwSTsrhtx2mytpb4vVet891b1U3n"
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
