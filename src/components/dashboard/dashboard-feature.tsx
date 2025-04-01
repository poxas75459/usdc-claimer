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
    "33rBAD3hjGFxTLppto9kcTqmJkaEYDVacAc235JZozjGLAq9JLwMXc67vbdiWBikiMG4FxJFF1cnperiS2s3sa1f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3okbf6MBtk7taYWpbWo4SZQRT1jJs2NsUA3QAy87naMdeA1trqCsBUCT575RwzgKpSUuaFt7FRXZejCTqNQbcswT",
  "key1": "5CSFc9kHvsiL5ggZhZD7CdscbuW1PB1Y92wm2ZWKYihQ1JvyzGKpWpRHJjiUBTZteAJABF92M3FG98mo3gfQQLTg",
  "key2": "4LkFSVjMUoQdBXN5MSf97QNWqRfssfZjWvgAkHQgLGT9h6FgYkLh2FkJbCY2BbV1Xfpd5oUhuvuQrYdz2fgAKYk1",
  "key3": "62x3s3jp219yMa4s8ThwesTDqRPK6yXmrkmJQT7PHL4vMXKSqLJ3D2LKYdcEuT9KTo9iUtB3jXJ7gMutTEDdpiFV",
  "key4": "2rmPv8rZBneP4VUzv4kPNw6oo62Qqt3NTZGCUpRcagx3RrjkQ6vKhYExpxAV4kR85NaWHAhB1Uyi5Xh9rdyckRu",
  "key5": "32nasTUCtGfiefn5wv2ur4P9AJWsusN9AwiSBi29SJNg9k4pcAfC7MUy7Xx9Bt2s8r2hXH4Z2GdAGguR4YxKHAw3",
  "key6": "3rFPTjgBvZmVi2StUhjMGH3AQehroJrVDmKavz3J5GEptxm5Bfnf6X8bC2Bpvco8FszUXxPGoVSU2RGrd9wLuNpX",
  "key7": "4EQEz7ygMMmew7K8uvimx5mD5ujr2hkDBbCUfWakjVRTFEZRLMk74Pd3msruBhpSQeSLY1VL5wAoK7rQQunKiVFm",
  "key8": "3DEQi4s9DJFyR89P8DU7CTWooN2Z223MXrrksQo2NyZ1TFNZduqakU3vf2NRhWvJgpvNP9udSeKmusfHpDQ4Kkjz",
  "key9": "4oYzRLmwxK5AMzUKfMPvtyPMCZsB7EQW4JMH8v45CxDjDrno6Eu1NfkxFKpo83Gz4c6qcAtghaKgdN4tGkU6NYbr",
  "key10": "mByjumbXhuh7kFTvy3kGEMSugEAR2HPZxcbNqyEX4YNYXiWTJSFZ1W9ZtXzdNrDUqbWr98gMA93ExxgHYJx7V1E",
  "key11": "3h8K9wBHHv8mXhCsWb8nBXpZHwsshgVkAACVuJGQRr2ryphgWskbopRg4d55xCRr5RD4zNJtHM3h3yZ4CdyHHcgs",
  "key12": "232FMjRJLMk1TvP1hoUR9TteVSLi9AZhorN9qTrm6GPuJdKp1N9vauHsKD5yqwqSKS1g3AWH7w6MCjQrZMxVkEPt",
  "key13": "3iaYi9maHRNR9u5esgf3EzNaDwusB9mZ2VnFa3xWN1jBfjwB7h2nxWGun7hfEWSXLGm518G2pUXQDu7heGT2Y1Pj",
  "key14": "2WfCUYtDKLQ5tsFPSpDfvjewvnMhnvP5U54VzG6WtZ2vyXMJALMpztbkBNJHh95JAPgnK7cbXw6PA7UGV6yckXFh",
  "key15": "2aq5REoMasT5cP5oDrvmemzqy9Row2FbXcXvMwTCzE21NNyYCGsMxQxvLudy48cfjcsYk2DWQJ8Vn3YWuNukoWpV",
  "key16": "f6jDAVRmn843MKSCgMRsQm5UmgepaNeGuKVPKUqppWFGACn5swM7dqqks47aqpTqhJSTixeUkqMzqzFpddymaCV",
  "key17": "3qdcFoH87zC5CnKyQu9JogHqjbgWUxjWyxQRbtdiCwTxoyuTVKqUpoWU8ftz4DobJetwz33ko2NRfi3ZTmTiyt8k",
  "key18": "MDsGrM8T7BCkhrbNqUoq1p7Ei3d2cUPwP5JPeZCfNxBNtcWxhxjyYqaW3Qfx5MqUPKBzmERpz7nK3tj3vZ15teR",
  "key19": "vKt8Jq5aXsA6fmXqNv3ShjNoAVdqVBcpvKNFRqX4B54h5JLd3JQRWGJHEZ5gZJsHnK7AafeYm7t1LvJ7VUkz5XB",
  "key20": "BPHAzdSvLMB38Ek8z9eAbd6mtS9XqqqVacoSSKkXvxXBRLKovBCe53jU8Duffr7FJBmVqqsCAoXoiTbf1cYXKmK",
  "key21": "5Kesd7DHG4d57L9ygGNY1tfhR3egFFZ8tn7JH97vVQJKGf1ExVYnoDqzpFQMvHbnAewp7JUjJwkLMnSyL4tzU74n",
  "key22": "2BaageutisUPA4UyDogTqKa728kYr8sScULHViZmkGRnMqNH8SwtsnZNUFFy9pPWdFeiwgriGuQM2rNMNX4coQcj",
  "key23": "5Uc7cSZyoQyBPXZtHWNFdEXM9KeMJNn1efm6jXcpZk18WxDdHTWGTmLBTQRbrdpgX1YVftFuE9V6ALMp8CsdKkGi",
  "key24": "pt8ShsbQf2kMU3mMn9zGXqiQNbHpiEgDjZcm8aBEjTgUm8wSnFskRdKSScbnpdCLPJGaeizDQQCatqix1babYkL",
  "key25": "3Zywv9MTcP9Q64VBQ5bsRCB1BEEWAae6ip7Ba2ekUSZzM8SdKyRWPasmNCqeT3n7opHHqoEBF3bsWP7NagLVjQpJ",
  "key26": "mi5ki85nxYwBQ15TSEnkGF4R5fMnu77Z9MpSk2N5crGekTqqpE1affmn8sHHvgqMZiuPzpXKxwW2zf39xVLydZY",
  "key27": "y6tRKG5Q4eEa6nZ6ZNAQBdjsWii1nNyL4eNQ2WSf64AjYJPnpoHshMxtjcuLNGS57ZFcnJtCL4Gdo5b9HVD5Mii"
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
