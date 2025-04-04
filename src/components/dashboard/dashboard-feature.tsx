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
    "4uvLszpbDqmpWmEkf7bHq93TccrJXYCjo1TxwDe7RT8DYfj8PdZZzNUdJtnnUoLk5RPpi3iUMTPDqdUqEcqZxtwD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Sjak6eM4BnvFB9q9CB3mr3B8krhuVNUFjLGnZgfeuyiswqc2byp2JJ1Lw23cQ4qTRQ6xue97PUZm6Wa9F9QFGwW",
  "key1": "2e5fSsdYj5Q8PpjBwTKSKjTz7zr5oBvQ17Xj3EeZUqAMT1FPgXGokN7iKo184mjMJrF4TwRvPWBFQomiguUDJmP2",
  "key2": "LnqNuTJ8MXxTyNSWRa7FSqT9Szu3RRXjjR44mckh724Fbx5xfMAedgqr1Dfi51XS7FFQLDxEKVY7kLDWyQmypi3",
  "key3": "3LcwhMWukdZqC2zJhLt2H8a36T5Xb1YsVLfQNAA4C1a8Sb8dEpQXyxNL6P5UFAj6V7EzQuHzFdajswUaAQDXgbzE",
  "key4": "2b4TzP4fDXy4s3tqvpBkghazbEMEZyRJTXtgcpEFrD2HgFqL9WXe4ctDG9wsaAPuP5LChbRU4tu258fXJdMjYBna",
  "key5": "3wG9RZE4Z3yLCVKmyXrkFXwM6nZtATjxxmjZF6iyyqUn5GD9Ap6DmesBWzQgCrUwBWktMmBcJRYdnVd3FD7vfaSA",
  "key6": "2HTEVrgwu1dB794Yu5G74Ph6EXqybCJPzZGTxAaA54hhWY2aU6cW9mAQn46CLycp96EQU3S2am7b3uFEw7KaZQue",
  "key7": "4L1M1FJ2B7w1TV9DzirW1GiMSMY4r6KawwnfL5WZsoQd4QpeDGtj13vwJoeQCyGQNz5rEjpct9WwntMcFo4ScNeQ",
  "key8": "3Cp8CwRw468tKCztLGvJKuWKE6qdmKScwdDUBqVGPVER8AmhsmXGeNoir9rDgLai3n9rNj9svRX6nNW2Wu8FmWFt",
  "key9": "5JJTCBg49RzvMvQdy42YahkcsdSFnreCNpJx6jb8sqJPkHxVn8xA7i84EwBdxVzJ7f8X5TMnN332GhA8MxzCmopM",
  "key10": "2mRLDtWJrsL2Dc58qVtsND8rg1iKughMxCCKxFjqJWsJTsNJs2Z7YErJ8DM3FPdvHRndoXnWJoekz57M2EWFvWX1",
  "key11": "29aw4ZeXq2kNVFUiFFxN5nR52Un57wg1aJta3fZAm5LpsaWyVWjBL95SM4pJoF19XwGi7c1m6DqJiSh8FiH728e3",
  "key12": "5Awt964E84ZuGTYq5D9Xi5PUXgc4SkrTSccMjo7CG846E9Pc6grokS6pnCtwqbmso7M77PLruKcG3xBN3hSK7mzw",
  "key13": "5VJ1yJEQWmRcZ5hMsAQqzGfPePPX1cVuQbh8SCqijsBbDTAwzs6RK8NY4PShipkU13X6dTshP3GRSWurUiFafGgv",
  "key14": "2hqgYYFLSR8zVthYBCkV5Addj6DcLQVn1QDYkusfRW68vsDEhWTQhyJMZEj9VcHk2soqwCfnDEcBWHDnavxjW6nP",
  "key15": "4p3ia1Ex7KJiUP8i2PiUrREB2AYJLgruhfHcirERwkkX3ST8rmBipVrAJTtrE7cf57PUP1u5ChPPnmJ3UdiDPvcH",
  "key16": "4HhoyC8AJXDocQKaLKdkVGqRiunSiKWezqK2G6QMkDSVrP457pFq38ct9akQc5LZUhtW7Se6qxoYLjLfoXGiopMZ",
  "key17": "2xLE3JcuGcpXhdMHLcKnQQJAiKbt5oaCxkPyNhDejUSg2czW6MqS9aCEFc1NHGa41t3VbwLSkg8mShe3a6LSivCk",
  "key18": "5LDt4Usqracn1jQRextE1sxuQKKRkAaqRUmPNFBRWSGVqiCvhqCsa7kgqt9ERUbHJZjUv2HhNPTL7hc74GPN4nBJ",
  "key19": "2ziHPC81EHN3oCGrRTLekxYLH119Ur64T7tBPYCopno9HxXmWPZ9yMts2eTwNQrKNyZd4LQyCX5mP3ABXbzw9xFT",
  "key20": "55wtTDkehxBtBZa2BrWidiAwVKqpbKSxCKoi53WQjiH6jYWzKyY44JD4L1sTfMdGu4TXdTU8qVEZusjsMvxAJePn",
  "key21": "3hjefJuPn3RdtsTxrLC6CsX8zvNLsghUiSMyqiX8B4r1eddSe8hZ1AQRZAd5ZKHn2333WoHBedH5M1XMbzAXMoLx",
  "key22": "3SWTkEqaWhTrEUQSHsG8xcqUmvQT4B5jpfoK59s8ixKJZ9MdayrvCFJGfhKQt3Tgf1qNp5jkD9UXD8x4f34Tgwoj",
  "key23": "5h72wgxkirumjYn9ip3o4DRigXsiU9so6adb3LBpxgxERHDHDUirCCHjgSbJpzcd1M4FjDCqYXG3uKDBW6hT3j46",
  "key24": "3wBZoxq89mJ97KyXHdSday6UpXcgnCGAFr4r5mmfqi46D3itZUTWXCvbq8AExS3EMXXJ53fq8Q8ncpsnvFAx9Wxx"
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
