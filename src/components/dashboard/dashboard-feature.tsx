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
    "234BGWhfiXvgkw4BzGrAtGQihvkZqc37vuW6UyoQzsBj4gfcs8MGucJzMWaMGA7x2kYh6w7mWAZNpAMejyjRkzqJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dKDpqaQLzvmD9FmhYV9knEkB5c4zwrvkKzqY5aCUvv3kKURW86TB5oAm6HXF8MgxCsAUoAMC7czviU3k7n5K9v7",
  "key1": "3FxMZbNFsj2KJoNbXgzomEL9CrrkRzPKgfDKGnsAXRxYsFuX5XPVpSUxYsNc7qiR7o2mZsGRcVo965iDx4pYmGWi",
  "key2": "acn7iP8g5xq2mvK726wB3xMDiBiTvnXNe6nW5ZYVi7eakSuWrMxe4Uz8PxzbsTZSBzgjrQYk155xXogDBkRJceC",
  "key3": "5NPDhrgtvimeSL9w8Jc7ZH8RhR5nG7UgErxg8aFCVx3QMVCmxCj3KVJYpqAZF779uJvU4j3ssZKnoVPogQRmrEGJ",
  "key4": "2z3WTvM9wJStgkCXgRrP5oC7oq3YpHxQwNTpcgdWC9pvW2MjBEUDTjC6yEtPZ78t9eghHDMKADYiAbZEAyz17wkX",
  "key5": "5zFzddmACu2XxZ6d6ad4QuuzX4JQaUoP4FKbCcy2ZgA4bmXDYLVPAmFwvDfdWPq3hAzmvExP4E1nhsZ6VidfFShC",
  "key6": "2UVzQkW3EEDchGmQPhpoYyuxb4RN3Aj7S6Hcz1AzfPBwS9shMsvsAanhMBPWtUcvC8Dt1pCQTtf4UvLDZKJznrJR",
  "key7": "18eXavgeT2U62XDRWUAwBRM9S2YkC5g1oGsdghYSoHT9HexfdkXrefraBzeezkd6Fr9GMBmgMCWFb6JrECYSKik",
  "key8": "2pQW2u5ifb9YCg78FpaoVpiPwoStfVVoUrXQmEsAQNvgdq7y8984A1zADWiGqyTH52oijjfVVBy2TjoKd5D4GzuL",
  "key9": "2YSJKqEqwe7qFuN4MmY1iLGvUQFpra5gZJuqCoPkFc861tF2xuuvzXSaJHfTw2zW9gusXbGWrwg2iriQ58QyuEsS",
  "key10": "2QXP1JmWLkS98YiuTLCjsJfUuixGGk4iCLPh4yuNVy5qiE5D3CcATr8Xprs8sg5P28e19kgrKjh2FncPSLx76Vcc",
  "key11": "5D4kAPccGScJup6kicgAyDMuk2wJzaK5PVLF3wmKsXueANS3oozR2jkpQNLXMaBzHdaUXui3P9XJzPgbjqtQrJCL",
  "key12": "46SyTx51gQMSkckjQ6YbVxQTPbiWx6Dwtb3mBgGLgLCKaCnBF4Czy8kLtG3vHtpcfsvA7TS8nSQseMwXrcC2kSHz",
  "key13": "5KfjabaLCUXSuNfkc2a6atBsECbvFcMfbN6ikVh756ofGCDNnmkNbbAk12nN2Ri4tpvbP2eskvBGqsHHUyspkmEy",
  "key14": "21ufRv6VeZsRCT6PCe5Mv6Z9Gp4jdv6qtFi9tSn2DkmnuM8y2SQgc68owzuZcYx5oezA6fxfSdZRDGyR817y2t7T",
  "key15": "fU2cPPS2ZgRgGfdgSUDBZBaSqEtyPw4XVzXiDtUxCLTyuVWjt4rzw6kzeqowmU1Kerrf2Cx79yQmaxhiSCi6irt",
  "key16": "2Uo6N2E2P5kzx2vo1CmGUXv6fvZZBtJmJhjKNCZkaqza99zmwTy1RFCJve12Me4iSk6zbSTnwHfKGFkwFWDcbDsQ",
  "key17": "4teaS4666qAhf91fNKVAKpQFc7gfrF4FQZ6SQ1cwPwsrXx9oMm8K5VspGCftYkUVonivByrshnLTLJDW2MGQYEB8",
  "key18": "3PcEJaA47cFNVLnLtjHq81du1wnS4mXQzqySU4xj7ZDneBmv7N9QzrM5JKWvPoJjLPMQvhXdSQJE6YKmEXY5suqz",
  "key19": "kjSKNM4iChHkX8jhsG9qBwPMapY17RVuRRYSgT8w1FNVT1y7XyBHAgHPH7MfPLSkVZVVWPYqb9sGoP8ExwymSHF",
  "key20": "3xjhLQcZZctZhbZY4zh5xdYTTkf6tEy9te3PSqJkqJJBJY5sTsXh9f83KYwXDt4VGBQnA4oNsCVoSKWrPtWUisnW",
  "key21": "3FS5TEhuBNaMLVgYLu2RVyfmnUQ9myRYY6iaXbxErMXALjn8VLsJ3wtxZHMmNzpPuuBhm6avSzg3ZGpuMjptXs86",
  "key22": "3hjPYFhW5o7TBucYmRd2itDGoBeEnM1xcwphTHK8aFQ5Yczj9yCufhaGqSksXhRE3hMWEMAPmni1PT6rT9RDwZst",
  "key23": "3vHqb6CBqNgM55AV1cgLJ2F8R9fkiJGABSvpa3gJoDMzFMEaCbzQ5iuzwu5ENXsrbjgxcvpSSUGVq6V7FNP5BwbK",
  "key24": "FrpQDCKd3Gja4yyVJ53uex8wJGFskL344kw6BKEFgSii6Qp5MSSkTaNz5YS7c97LDZXP8phHHofRgUiPcrwkTRc",
  "key25": "3bwYEAj4EZeRBoRaKoeTqcgYp4eJYJRWv2QYh4eSab7WDxuN88n9HcKmus1E5NLwzjeNonSHeJFDkygP7g7op5rP",
  "key26": "42tJmk1yntJ5maexxMLgCHcwqJ5u4GgtALJCGHxC53abt2ZgKo2XDSTkGTifvyFR3CJP3KU6QcZTQ7mApeTFfhv8"
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
