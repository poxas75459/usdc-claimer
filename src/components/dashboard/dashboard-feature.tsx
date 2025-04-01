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
    "zCTaLpbJcn3CHShgdyqBxcS4DsmJkd5K3Hd3aTu5nJt36zU31ZFqbA3PXAyMN49JsSqxgCyqDBAupWovv2m9Vjy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SKnKmRdK7qUpbXHEHVvgAucBqkuCgZwqju8wBzrzNEyBi7SrQr6uksEvQticrQREXFVj37DUDVD179WwdPQrmqk",
  "key1": "3C3KRHrEEu6a9ihFshHD3dWDFArNBKq98Nge6LgN6ajdPwiMNxKGnmEetTPoLfbi9E1ZrtofLRnzUcBrP4xqffxE",
  "key2": "65586UiZS7Bm4o8DkE1S2prfk4R9iHJgBRxrGCJCSyfT5GB7wnmRDaKHZASJXj99dMaXCf5obEwCVdX2HBuEXMiU",
  "key3": "3RBYJ3MaZryCa1vFf17C5ECsTNf7srpXUKFkunUgV1mVdSmPousR4s3LocvwfHM3m8X4h6T5EBMuo6MiaYuHxBP1",
  "key4": "4B26UPok3Ey9QLnApgF3HxVqqZGhK4yr3BoLZU2aEsew2a7RBujGZgqF5USPHCyktKMumY4LvAELuWg5nceixnyr",
  "key5": "4qQ7of6PSN8PG3BRHxiCxKAeeojiQiuqsfRrTe3MHSRdug3EarxLkr8GqTKUfGCXTdGmrWAWwhZatSVW5bJLT12F",
  "key6": "9iH1B8yrEswVvsDtMudPGcEBw4LuXh3BmzoTdJtSmDUqgQzKMJVFDewHFkgRH6BBwtPEc1nmP2kQUPkA68i5jdt",
  "key7": "4MTXE2yL5quBgqWHAsk84ryvLzTzijCkM49hEfwUCNn2tmPAiUVDJvuJTxXTWM6zd3Eyw3ownasUTM9uAJ44MwGV",
  "key8": "5rLKC9Y5zGsdZp6XPi5b7UcDMnbVeiynNx3ebpMdUMjxdNvoEQf5GMUhARcaPCE5ry4skkLkeVQg5YZG6ZCockpc",
  "key9": "64SSfevcbWfV91dMXGoyrCDj36E1TiQyifF42P8SeDnsBFscSP6TRKD3VKh5t3RUAGzthsFE7jrFWmR8UHMn4zV3",
  "key10": "59zVVzHhAnVjXFowz17yEEHUBtxpZiZTmRDKF5eh2YdEbNktRH5Xz8SU3ikLiikQ5MueLhNa8pQXjbPen9hmYHxT",
  "key11": "4UYq3niMheuoLqGFFpZo87NJbSiiiNMkUCaKPe8T3VmPuiKZD1bLp31ECtrg3eGTtDy2Kr5R8R6bYMMtdtzwiJ6f",
  "key12": "nB9iwZvKqsPXwfKcnqYr6deCkW8UgYw1CS9YVeQf8ypoUaNM85vmdnN7ofDxU8xQVf8fckGoW2EASuqGsgQFkcA",
  "key13": "YvEWnQLdZHpSFxP7RE4ic4geB1syQUraFoRAa2ZWGFZsrbxzqMP9RASEoSAreMeyER7o6UUyuo3MU6Sqq7ibmeh",
  "key14": "2FydXxsrvHfqtx9HHbauwFsEVbKQfPpsDBg34pwu9xxQ1gNodgQmCxb2okhfLNfa6YUrphhREdso7qiheiwAgDMd",
  "key15": "43nHwcyFXkDj9b86TZDgpAUMdSRoF6uLt6zUPq8bSDFNLcTNUouDX8L4cFrBjEKdxHDDYZU5vi7jK5yxQkFBfhXD",
  "key16": "5rYApoHTm31TZUunzaJ8MxDTLxaeLKenqc3mbf2wFwyMJfxhbEkR7hfGPvUwze4Z9U7vMjNaonHAFHMQMywsb4Qa",
  "key17": "3wGqJ5LUM5ZydY5cF2Z4v4NPU4As1YCDctD6X8Dq9JKmwZ7Chz5aTNLznKyqh2uEYMFqPQiWvH6AP5d61hnAkrSZ",
  "key18": "KFBKgjeHX1WuSFRQmidWdqM67E2Lha6zjfAPSeHhScMrDKiDinmgVoSH4CRdNUDpddqTrwQqEDoQoa5wEqEu1Tk",
  "key19": "61cc1Li1VeXy57gB5w1gZokS4QVrPSkSBwauZynsppceVSBVKnLLwsnG9XwdYgsbhi9kP3cU5SZWSrR5JxWAEpKy",
  "key20": "4B2HsytekNwQ8j7W8pxo9HixRdCcaHuv38YU47AkdkHiPKi6AVK7qkzGsvM59WucpWxVUgChi2xSCqt53gJYuHPr",
  "key21": "61F3RDd8dgqCEhtFyZBs7bSrD7tdie8pbAyFPmg8c2YGixKhYSWMYomACqu5WLtymXE2QmBDj7vuUEyFFPrPfEXX",
  "key22": "3XB6nHsrEsLdFipHgezN6CYaKGN7sKuxNX1v1N2NTWYsKTjxAUVL6WjMwqRfC94SYsY6FCzj94spZMMNjgemJ6Xi",
  "key23": "4b8fC6UoWyAd8gQ2mZ6DJNQ8FDYbEsYjFcXpatC5wVwtWU51BT7zu26Epw2ac1oYeiRXuBuUC1M1ajLePEUAAa8k",
  "key24": "58QCusud95NJYGMvhqzdtNvKsyXN2y66pxRYN2ZRRd4bCnG7txLrUd7pSBHNKUcAwp1GxtPxXuFzmbeyrm22Cmt1",
  "key25": "3AAeAEmfuTPZrwe25nQR7zUwG1pD8KgS6upsoyS3cKA6GyjSf7BErWzNr6otisJLxMU57kuaBayxGmg5bDaRmBED",
  "key26": "3RgC8E615H5iAJ1sDrEyV8uZSRn3hKmd5GdUo2jmwwnBVztDwY1S4xVAA9CyAdKtPtxTwbwJBznvE8Jzv5D1AGaC",
  "key27": "emqaa2g3c5Vo3Hq5kER4d7xE8GvJmz6sWFbNcTYDWLnWhmQXXxvqKW8MNrJZLj7EVi1qEMp72hmntnphDEKqHyN",
  "key28": "44FMro8SY2VTqZhBUtHLwP44KUagWxJDiggrwmWJyhTLjb1rKxeS9ioM45jdKt3CRQcGMzNQYsjWoFJK6AXVZ5DT",
  "key29": "2y941dHay1CAMar72ygyn9Wm6eDZeSU5TZrV33RUFW6V5qf4DkEZs1Mcv9noDNQ97M9CZ9fWQXfqENSAJr9TLxPo",
  "key30": "5KCtJXCeHnJ3VrqTNbcDCCrRCw3xEPfYWYDMmcpNGF2tzZMFj529HARmqvLte3ZJFACgBFoCUWpXBPwkN26rtrxu",
  "key31": "3HQTj7nW64fV5LmkXjoWQwJ3BdyMP2J1ezXQNJWBcknUTUPE4TfKmAyoTcVbz7SduUBKMoyKkvWchxBQJZkBhnzm",
  "key32": "2jy99xYvB5PjLDkoPVwqyX5JivGPRZEqii1HQoTif8ktaND5VkBtRuCfb3ugzRqzNTfUZZh7wGDh5f7wcD8e3Akf",
  "key33": "2SL2fU4Yczspr3VVTBk8w2z6nSZxvTis8E7keVdG2ZiMyaHurEZUbXZBb8DCkRAFx3dYVfq3vrHsEo95ymmM16te",
  "key34": "4RaTC4e5iLZZhmtuX6CeYMKG3GSqpeKosQxqVStpatGRPuMqstqkBnzVAB1EstXRsUu7S3PkE5V6uvqeYCbG5zka",
  "key35": "E84vdgEqVdrpX2Rb8yCcNJguAoJFenxin7L88BGzx8vxD5397qcULFWyHqAWq4MbpCsGDGbFDUbpR568zUqka4J",
  "key36": "3a8WFokEUKsqzjFCAkLzXxKfUiVMHfTWWvz8pBpSMFoHvDpZzwoinvnHGjyrvUJm37nbyNeN23DPtDkexLdYuHGm"
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
