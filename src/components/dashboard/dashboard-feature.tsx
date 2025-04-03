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
    "S8nzjLMGH7rRw6nD8DiLSd9x8R56X6bd7AGux7htuLCCtZUqByg2J9YYygyXfWxXBPKn2oVjq9cHhxBSAB9LVaX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xy6QarD2L1ArC8hKhx8i39WhvFuNhB7UguepHQyqhfksBajCBUtL9Gz66abfTeNuypimh9p3uT22d6V7i8dTRu",
  "key1": "5HDsvDnrZN1rR3PSYcf5efkPfRfTZLzhvfP7vTEw4UQDmo8eQWbeibtPspWDCqhsEhuXyZLSKPUTLjGnJvknJqGx",
  "key2": "3SFs6qVH1h1vH4rBq3XtHouBCbLJcTSYbQxFM8W9vNTdqrJyguBNBiU9QwMJkS8GHp9iKiEJt7MrTg21SC38qG2D",
  "key3": "3HxmEWt4e4VGyq1Gj3mxAGEmG5kzLKnVmbvUqpNERfkRXWMos1W6FhPbteb6TytwRdVQy9bpxjyejrT7PG9JPdTj",
  "key4": "3RhWiqFybYuZRCmej3bowakjmoDqkFmPrSpNEgF38gFeL37XH1maGLTEnALT48JCA3veBMAb55TTTFNdd12CH6L7",
  "key5": "5XgRrxwoG7JzKFYVZpwi2DtpgWNFLcDgeLvDwfPZHkjQFrMQnqiGBxeMmFxAcpFg68GgSFsuMzAvCCnr4b36dxyr",
  "key6": "M8eNW7Yvc3r3131V8eQDDxaBkUP1xJ3RN6LAz4QmBdZesYw45YVa4G2AUSuDesdHBUyNxvZ4ZmFEjbT9ajgwujd",
  "key7": "4HLi4uy2qndyADTMMvsDYhswZMVtbibHMyHC94TJhUkuZ1QwRAVKnEPuN4wFfhp3H2ZUaqSyzh32zkNj8aSBhaZo",
  "key8": "3xjNqgpL5jFebUBje13Xf7vbGEu5nVg7LqrCRjW1MhtS3ztjkTmd2xwDNSBNrwP6AGefdRxYX1Mx5eT2xychbu8Z",
  "key9": "5XW4SvtwVukuLLyjrVATMFp9n3EFYjVxgSdWGHpz6esAHj8BK6QRd2b5ofRLBVHzTq4APaZ7GUFbYTfR5onB1syH",
  "key10": "3146n4fj667RFP29yzJkZay5iZvmgJddzdQQ3hnpPE6o9wBxLSqhcdMspAtDXnUhDD2G9kDKWhoZFDTGoX8LMSw1",
  "key11": "YrGY5US11CJNmTqoZJpqxZvM6qsJW8Gi6mn6vcgpkS1DqbUGWiy6HLAUo9VtukrD77P21q1Q7TLjephpH8kDHdr",
  "key12": "5xQkQC3jrLjAsYgS2wQZu5TjyWAbomKTGPpUW9kMYHGUQLNSwVt7vxtwv4Gh9JgodShJvrBqJ2qF5bysZPMiCpCk",
  "key13": "4NUrJRJ6dGQ7KtBTtSrqUtAedeq74EkEBXK9QSWc7ZZEXhrMRBm3UrYUTgfvJUbNo8eX6Mra5iGkKvJpeFEGqKYA",
  "key14": "5EqYYXSgtKBmydVABvvuXi3iaWspEymFMftFV2iaBNmGsXF9NAD9dpL5dAqvsKp3JHu8Wzqt6ierhrss2ZoQe6Xp",
  "key15": "5q7tu4xWwjv11VQfY6nwqtQciK6rFEYrRJaqcT5zPs2vuSZQ2tg19mPrbsUqT6cQLV8gFqVRQfevYUMeyQ38kedA",
  "key16": "baPcbfaQdFxHcqAYRcmHMfnN95nCW89irC4bvWedn1g4Nj46RwW3idCwb9ZHUtLhTjofManZRvt4LUip8u22T2r",
  "key17": "Coy8BcknbMarpdA5BGqmuMp37AjAD79G96PrRtYw9ESajWcLX28b3pjD8vpYsR1W98VdnVDkGEYgm1tqTiktgNY",
  "key18": "4p6dWP3ESWUUmYXd31ENoUHStDmPTkJdzzvGLBFUPpFDYsrLLXKvAfxzjh7aRvNGVRBwSXbJ4MSHBANGH7FmSNTv",
  "key19": "4SNVbyqtcKZScroTSUgYwDQoQ9tgYUVoikg4dKoCiZWFcRyCynDVQQBDUEDRqxGNV3LhwWEp3NK3z5i6ASrcy9ST",
  "key20": "4nfq25VTFbNCNT2ySqGjg1u9UZgvU9vs7wgV1zbka7CZBqPC5Weyzr1gYVS4QkkkghcVD1TsE3Dj5XB36kH5tLiT",
  "key21": "2oDYd38FbUfTFJ1kUDXHExH49mY6dVSnDDMfL72dTQVorNWsCjhgDR3VxCEpUQafUSxmE446AWYXVWq9tn4Qu7zP",
  "key22": "4bKiBrNeE7pMhsbZZEtbPjHC4YsLrDTCisRJUw8yKb4UcPJcYFhzyNjPknpQudbYG12N4UBEuxi62fSF5PvkhSkc",
  "key23": "5cAoRir3U24WeLVFr1tfrqtfZRisK2PHMZdMv5vpUqX6dsdLozEb7pE2SvUGyp7qyqNcfCKTFqrrPkfvYo8r7EVY",
  "key24": "2HUsX4cd8xRXVHFctSXPtdZeudDrm1D9sicT3d5FYziqiagNJXqgbjNdS6HaXvCHA7VvX55iniTuqhzPwHfZYv1N",
  "key25": "2q3P8tkPv6tYu6xuXjGdn3b7cZcuUU7xh5KswDMM7QLFn2AhVneLd539amtCcNJMuTJbKvDfvaBGJHbgShZ6HJ3o",
  "key26": "5KAcTG6v5EyD56mXeAtkkK2mvo5qsAYGNb5iCEVdZahvFyKsoybVtxch6FDSKaTBrE1fM4PPsmang5zFhyH9dZFM",
  "key27": "5eeM6JKemCyx8wJ5a8bRYGFQ5XxUjkZN5Ym6cL4WQsx7BFwSDNVKxjXGBsFB1fLEd6oUWcMDvj9eeTeuy1ZJz5Ko",
  "key28": "445Movndtkmi1AMLEdv4Aes36soZVjMd66REKwsFV3RncJT5VZ7QDeGSXJSkJkXLvT7MJVnCcA5Sw7rjPNa8TLPn",
  "key29": "Xo3pSVVwtWmncSwHkNd41odJvXKCCZnTCjbZogENhiZLgGD8T2NmLedaxUiTj41ia2Bd53U1EMsHxfKFPpTi7kQ",
  "key30": "3xfGc7qkcvnDwkpW68XH38vkw5rhQqorQVkByrEUjAXDFbsJsRK4ZzvsUcsFRwZcjy8PNH79LqMppmd1tAdP4pm4",
  "key31": "5WGyfveU26MU8K2YY8EUFmtQP491hhy1ohNtmiwhzCQXTSphspNGArJrAUtoUsZ4m6og7qwZcEjbSBgihGYdH144",
  "key32": "2cxn4xTKfBRjPVFuf9UxDUsBBsq6Gq5W374uXSDzLgddoLedtM4DM3QoXNZtWFcjboPoovEpJCE76LezDXg2XYqh",
  "key33": "5f9prgUtMbA7nk1zF4LRMN7GBf9ksygHjzgfEJqXy1JyjsAx5oXWzc9KzRXWFKZPUSP26nLSCbEBHTN481rGKRkP",
  "key34": "4LQtpyJHYFLLQinqbAZHFEmgBgPzCc357XkqD4ZZwg2KKJRS6N6byTNK7UF7APf4ownnQj5ZYxazbWHvqsU7zxdA",
  "key35": "V1iXyW9hew8Kq3W1JNbFjjSU7hpoA1ibGqoxxgkh21eecbdgpLfVwkBHPNkLXn3heDCkGxQitAiFMy1vNktcigx",
  "key36": "pcdg5SS17Qk5kNwGCm1Wf42RFZ7GYDTsU7km8hEozgu3u3aZtkjUFRzRJxriSDQTHgGis8Vs8HEwgat3e6AuUQu"
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
