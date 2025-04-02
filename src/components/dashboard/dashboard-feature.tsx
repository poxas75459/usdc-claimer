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
    "4MR4XN2nXerj3DeQxu9Gq6jbP3Z5rzPyCVvPBPFoYBecDm6Rej8kGmbBcyQreiFSx4ZU2bPkaaT4AMNnn5pfGwvX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jSEDfX6caPVfDFQwdMdycTKNnRYwyAiLZDceDo4CBGjroeA7a3zyHgqUw6b4BthyxUSUkF7wikSZeVmB3YQ4eS4",
  "key1": "4DpjX4SQjgjp2daQrYFenxU7idYTmKa8cBJHAAtJkgiaNnS6UU9GmxczbbFdmjtG6uNXsAC7ap1VnRBbR8x5PLvW",
  "key2": "3jxhCoqKghTmNmrT84UvJCgZsfLE9XHF1TwEWSUDc3U1bUc5v5ki7nFbizMoEQyy62t9fqTfyEjyGKtQWRLdqbcs",
  "key3": "2daeyND1ZnSMpeqnYqWsThB1SjELQq1Ca1KTAooJTjWFqAgju174WMek7Xoe12eek2BMyRCaDnj2upP9aNE1VQhb",
  "key4": "4CmBn8oMyq6sCHVcuQrQZrYh5W6uSL4XmAFrvTf54iWZLmQbe4osZxz9zdQrdGmUc5yyzUG8VDKVK6RrPCzm54Bt",
  "key5": "3cr9YwEYM4C8Li2q7u6KaKk4Z4ebP5HjRoEkGnnHyGFRnZGVt7Z5XLf28kwxZXDk67XSfXtZKmo6NvHGZt8xTo4E",
  "key6": "5dXmAFK423AGhe3FCtB7YMxfSz42GA3Pc6xE37wLgBHtuCDSK1XRjsDRBcLhY58tMJPbcCN3C3tYXVcdqBcPhrTf",
  "key7": "4XhpMCjqGZQpi3JTaL1hgTZcHgLZUukhM7hkDo6u4hSebp422iU4Rpbhg33fGmqam1ghjyh8HxaUzqkLzKLLA3Hw",
  "key8": "2k8cTnCQyfsYiHtmqb96zJkPh9B7uCh93QeteLCeLXbwZTyNSGFhKSumEiHzFuqvYzZuQpJUUsjqLskWMnRBcjYg",
  "key9": "2MkThvmkguqkSqXzmRUewVqsbxxsX5NwuUo46tsxQ9VYqe6oTg8bqzphkSpqmejUKJfc7CEMboczc23XXYrukvmf",
  "key10": "3QG7Mwocibc21MMqfDNHbLyJhx4FtCr7RhmUcMK58z3XxH7rhb3HKFnrda611jEyXRPBFXV8who7MPcxCPEnGWFj",
  "key11": "2NspuLD4oRR3dagScNFByJ4AJUokdiUKAzwAVYjGkm9HbNSWit8xDUeYqVpGCT5sZc1kfMSJn1NUMnA1sPqpLEWE",
  "key12": "2D3agGgmYo1X3jnWeq2hqPmHY1PmWUBd4iAyWh9Qy3iVf1xqt3c2hCNWQqc3pzL4DpNScYsTMDPtQZX9LJdFxPRW",
  "key13": "4AEkjLdsUbKNJoZSywTKrL8YkQ9hsnyHAcmh5CrpuyeQiTzMmMBWr2CcaPXadB291PrpHv69DYAYvsugScBtAUcZ",
  "key14": "2C3t6KEooizuMyf4gA5US5R7t1yXe2cbTZhANdkT1u1q5pJKYwKM3MFmrWSqLUk9BRt5GysFArKFvv4zTmyyUmUY",
  "key15": "2LV7VrQwvSMzJc446xyo6tGF4sfNWM9egQnQBXUBaH4eTT6oRn5uDzWEuXj27WCnbCfaEndMHKGDtFFewv4ihuKq",
  "key16": "5HSqRcVjeViRk5G8LYdMjwjadyGM3GSTN7xTAqTnTmAPMSzXiVMSa73d8zSx3asAfA2dAhjR6DFw94jQZwQwrxPW",
  "key17": "473TjBLUqEUrQJGFrWePzwZjtyLCSLYbjW47Yx3pJEXZ2GgN3P2e3LQqovmUnDpWzzCMZLB6zbkLJSe2dJmHrgn8",
  "key18": "2upGfgH59DFmRUqBeGFDojfgSDuEcrL1wkfDNyv8qvM1ak4JCn5bUCx7aUdbdQjdS1MQ8E7BahLpkAmfv2Ky2BUc",
  "key19": "2mYSAct6iGBGB1wJfEuk64EtNvoxLzcTjYKMB1uB6jVramhwqzEQEXVBxvZaqBZG6uL38QgRWTXSSavAaD6yB4iD",
  "key20": "4ecaPoVu4QbfLNZJ2a2vSUySpue6Li5zVPnb2ntgL95Zhs9gHRPhFEPf63hXkBn862KYZiowZPBzYFj3Yv53KdLw",
  "key21": "2axiTBxukm2jr3SovqEbs2inGNdiycCqqfnPiec4iN7b6zhfaHEiujN1CKy8GkBG6VvQA2H1fDUriAcZPvqKtaoh",
  "key22": "4Q1jZrk29bnDNcWrXnqPuEaHAkasFVPkkgkknhDiCWV5urjcFf2pgzJWVpaP5NGUZz1EUo94ahCzeLv81CKubvME",
  "key23": "5u7eTU2dwzAWjohxktbJZGkezQmrMegWua9vntcJsgcz78UWLzYo1zd15RAasxQXXvGrHVGwZ5ZD7f7y6emofk4c",
  "key24": "59wsV7H7DMPZX3BBfoPgyiGzwYCu6KzXv6LYpqibWTSDGYaxDdr2zmRE1gbtG5jLYrBAMm7JQPeoZxUxEm3VrnC9",
  "key25": "2wS5UDA3Vnio8temCerxUvyxywwpWFi7av2byVsoyZHkJ7DRfpFbdA4PCgcnixx2f7CCFqtd5F3fGrYuKb9u9GD",
  "key26": "3Ydijh2ffjpB2xD8dkeaN5wRNs1YYmzKGnWfeRf4J8K84F2nJLsn3yw2TDP3XmMj54cX74VFoLE1VyyVGvyyhmR7",
  "key27": "4QpXRRYZS3FuU3UTGLmZL46HPUT4bhrzJqnA8Kkwb5mak2tQfat6tiG3opa4WcSqCxarNHpStSX6a7i2hNoFmdyg",
  "key28": "CjLKhrX7BuU1DUteko6k2se16fMmXMGAE7W4NGMpJcSoDmFc7B9oJnShq6sGs9yKop3irb8gc48uQ49cvQcjQbe",
  "key29": "5SnjsNxUvtV8s7oqkfj97JwGMus2Dy8Wasvo6Mhh891RuTbBEJJViwEFFZAx8iEi2GkNpp8EMnF6kHiwsGitNFJS",
  "key30": "66iMJXCSATvVbBfcKBUhUwRosQyowgdQ4unQj6EvQ3fJb9P8Pd2iayEyYHgvPspXfC2yG2mn7jVW3wEpKScSESdv"
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
