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
    "44Bmy7Wvcvp5SDAPb1yaSY7yNvyitArJZSsGEnDtR1LbN9wMeGkns1Z7CoFPRbnU5xtPjKUmDSA8EXkGkDKcFPhU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "633kyfT89M5WEfc6Aqibivti93LQoUL5D4ATAd1t5EY4eHS261TUvdtNcAE2evWnJrcGHibCuxtYC9rfHCEz4kGM",
  "key1": "2M2Zz5rP8CJTgXZk4ewEqLB5h8h1TM4tijVxBMHBCYjRb1m1CEUkjFescSKqexekn1TztQ9QpYHmU9KAmUgEnHeC",
  "key2": "3evz55uXMxupuecgQoVzx1wzk6wgi3zCESSgrKDdtYmn598Xjyj8bVmMmBdmTc3DDQSCtP9G1cV3E2fB1nAtiHgi",
  "key3": "X3X6KHabFjUV3X6to7otvfoSFGSvUgX1jMmPa3zirhvCSYZYA6JcJuTknZi4MyySTh2HLg6B62iooRfQKSSdUSv",
  "key4": "3ab8MVfigEFmwiAkikqmSBk8G8DFYy3rev5H3Yd33Rq8fJ8TP3oLYpFsJZ8nUaoEhfmtkanCLNC4VHWfooDqKDaa",
  "key5": "2iA5pKAwcFf7bdYa5gvyzjk21bRVFKeNav6hSWRR8Ho2y85JvQK6NkgUFWgWRgeoBYSjvNtMdd9HYyyrzUBxsUg",
  "key6": "4RY4QfVbafrDVXQAw1GG2J3mkmSi9iAGiCPzEo8YeyzVVcLkvmAQMsvRvt3yBeecSEuZn9wXoHvBbT7B2amf3w2a",
  "key7": "3foJejRxsJF5y78hLKBqeJsTnp8tfUGQ25AENKGSdNzpFuYZLyCwm9SEbDpfbg4dmSaX5uBDXQtdfYQjXxw9yH4V",
  "key8": "3qcRM64Be3VJun7CjsLNoe9TxAkZstCn1FxYv5gosSpTPGniXqoUhQE9HXYtFkxDHKwrLGNzC5s6xfRA8CbEuuZC",
  "key9": "5RnsYZE7rdGZej8PdFbvwy46fdJQSZy1z9dNe3sEo5hVtW4eFFo2ZdRTZPEF9kvCcWnHzSkEBi3PaMDrZrnzrGL5",
  "key10": "4uwPCrWHdzsF3f1eY83jFYdL63KtjQ5usJYwWkYPCAfxLaYf6RMbttfEio6WjitUricEDqbyNFLvYw645XShvpVG",
  "key11": "535UgepHmnj6gfnghFXfZBiXbmNhFwtP4NYBbdbLmdU6aE5QS24XfVa4P4FQsZKgmwqguKHWkEPx9GiWuKcuXLNS",
  "key12": "2Rt7UVu6UWaVbVwt2XUemuawz5buFYFVa62iBvRn5XQV5fNcyhZ5XYx2Di7sb4amaYzPggPpXRg1fEWVJ819dTLg",
  "key13": "4MDqokFvUZsX4XDcGsxqzxmGfLpKHCpKD8NJtVCXWmgRDvkVvrpecL4XmdSuCLU2mREYmyU8f8zZLoB3D3kPn1dm",
  "key14": "52A3A97waa7s4XNFQk435Zez2aWra6RiDtyp1FuRFiuo36Q18yngBW1gpjy2ax7DELrFwTMyG6GFFMiJvSH3GVgb",
  "key15": "hLLxCSmGJWKW9fRGyN1pjdy9DudPREbWjQ3kvkNWRQgjjdEaMjzsgowZATdqHWW55aANB2oxQMeCfAJGhgDLK4h",
  "key16": "5JeD4uUK79X3CxzHpTAV4bAFqHGJQD6NFD4Ay1nTdTfD4oYGQBCByiuVfTHZNCTXxFhcx8SFxJhKa4WngUm98p5a",
  "key17": "i63oCUDvjopDg1aFGJezaH2rNmurGzFU8eCACg3B2jzCN1zmbu5meJC3pMfhqjquH25BeaD7F3ENwfb6oS35NQc",
  "key18": "9T5cSm5ES9RhW7wvnFgRJnExXLPdEJKPJKK5ekT8V2dCjh8AMKfqJf5HVXZTcaxCJrxf3RBruvfCeWSHiZSTrZb",
  "key19": "5PvDg8cSrVfg24vYhy1hVePr1XoYL6wpZCZ8bMcfi2s6kFwVxHACphYnxj3uJxTk9xbTSJrdgjL9WjjLqX1V5J2y",
  "key20": "51x2aPnu9XXcmgMG7MyYtwbU5GbgBGYpEuWPMsGFirBKhQc5SGptZreJTSPnMGsVayVcBWQ9FgEQM9e4r2zMZSbR",
  "key21": "Ge5aJPZ2Gd6EMvoRaQemnYbhjLqbY1poMa9EntHa75PijazFQaGcZuDxCS7A4429iybVEFHMSQddqHYYgLPzwcE",
  "key22": "2DM3qmSFheDbkqckH2HzGgnFMs5coePR6vbLeWpxmFi6TvV3bfGCmQN5sKPKRqZzqXHgKyMzoGZE5CHBrDSSM1Q5",
  "key23": "67SsvSnRetD2d4v6HVnupWkWdfbVbSVhWt1NJmsWDXyWqWzVyoKm5yvn4b6v4Kqjaa9qq4hgtLyfmbaPFQLJ3CqV",
  "key24": "2M7ktjXUVb6abFWCnjC12MetHmqtEUCTVsbS6TP1AFNhkp8NfQuxMU1qMeVBn9ewAzmWSCwUzbfgbi4NotCcxoG7",
  "key25": "5bmLmi22aAoCzgeVDs9dFtCXGcjxK2WYCKDr3nofzf1pa9NXoAGaLwRaF4VXzKHRvgRymStjC1a7ny4dJrqLSeAK",
  "key26": "3EPsyoyLXQz4yneXcgTE7Fri18y7gQceADYYBvV5xAUQR5bqSUnrSfS3GmJomgVHJ2XdrLdRroA4Zt4q4y4jULVw",
  "key27": "3NzCJQWVhF2XRoUEbh57m4r3LJkaT1ehivSjDDCFXRo4LaUK5jkt5NuNL934RxgTqGsAi7HNsMVgBUMDvQfMedbq",
  "key28": "4HZggDkXT9XtBdWR2CKeVP9wcFAoxXnKvkntvPtg8eBAJuYHKcWTrHDZ5hu1YS6VQfbxNJGUtXYCm7anjzWJoSh2",
  "key29": "53umxGYfYe3f7cCXjtNZn6Mucb7toxcwHoPCojkiSF6wriPMdttpvVfea4kdGLcQ3k2ttByzgXSnFmUgry6xWxKU",
  "key30": "H1DmCaX9vsYvV34DQPpBVEyA9adxN6MDE4WddPDqgAaoWk2ubCMatzwSRNw3JiySe65d6jpGFpD3jrLNA9FxUxc",
  "key31": "4774AXYoqY19qEs3ycDUDm37da8fBV3XFjpcWDXbNUGPEWoDGJ3LLgohxTUMNmuVzDgBLoVaKKbhj77rZ3JgpXWz",
  "key32": "SjisA7qRLJHB8fmXB29R75Q6rkGwvhYTrjbZhkG5aQfpkkaTki8aG6URqmoQV22WiCzNLHdRHBULBr1UeychDsq",
  "key33": "3qx9ueKthYejeQ4PZVmmgJonvs7gLRMW6XDf33qhuqpie8unxPdv7VRXEcMW9uuPaNh11mTdEA1hf2cQx9iQzy4Q",
  "key34": "2joE8MZ2G6qHP4AcNR5UXtjSEmvrZpR2TLtDH1gUtJrzaDzfA5aJge7GkVhVPBQywFrDu3UuFand6BJFEew2f2gZ",
  "key35": "2Jp7EdLy9hXAVvnm7tH452Ft3jtANeoBw1fDbgaAkqyo6KXu5z1tyEHUfnuJwkG3Eq33gJUSF4mdm2KQ6qUDUnCv"
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
