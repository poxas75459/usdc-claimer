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
    "2Mi1kuTsRWaYmmHs8UQgrpxJQDg7gEJY7ANAr4LuJn4DxL9LbGqqVHHbxRHoqFhwmKi3TFCX434JtZ4GxvRqrUzg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3t1sgbtQ8KerZH3JoFzFM26DWZ4oha4kYAEj6or4ZL58WAzrUY2HWRq7MzdYZC6X2U6rbVum5P9FCbhrCtkWrxZL",
  "key1": "36kRAQUio1fnG3L1QgAiQSd8GieKd6bwr9eB4bkgafjm3V7kKFMXqor8WsRPmqkBBLdP21ryrvz8K5pf5z2BURgk",
  "key2": "3B6rhDNzjc5DH7JtBfin6F4gtRJdBkM6HToxP497HiRAmRLYaqkjwtj8dz8c7UgLeVRxHuV85SwqvBimCmimbu5g",
  "key3": "4tgwC8oG3CMZG9M7EQZ7TXRm8TMeEUrJ6a3y24LsbvcSbNFYjpvs5LGRVwgp6nALHnivJXtT9b3hFAGpLWEn6nkU",
  "key4": "3E1Xc55RDMjjJo7urbq3pWX55GAVnrGJSv57DXr1X8McTJrvyBRh8i8N4TFQh6eTggvH43VXwhYCQN7hn7FZk7Zc",
  "key5": "3PcJnbKGMcUFtfvGz4J6aWj8XJ9ARx8tMrxH2ABVHnvhh9v7mhAoDRmdZbXMZy18z95WjYgLMEGgAWKmPyFUsgib",
  "key6": "59GnvGnBfLZMowfZQsjx2M2RwPhDoS65qVZaGR6TfEYZZhcRYreQ6sRoMFG7H78sYo42rHDN1wo1cvRbGPrv7Z1V",
  "key7": "3Uvz4VDDDGrg2kfwoMjf9vNaV35MX1pRxULHDF9tdbusa3mgTumYLH6rWhY3okATGai63RUz5Lr8fi9hXFbU5uxi",
  "key8": "5DYMHU5scXiz19S3uC5vUSYwYyJaE1Trdi3rrZjpRBkqpQNj9BsHMVTMXzT3KEbu2nd7jEG4NcU2rPDVJ4pdVqRf",
  "key9": "5s8J7ojnELF1PcaHjoySJDv4bzD3Gp3M7mpjX68EAn5MhZY3oVHVzQLhyCLF2Sa94BTt2Mea7cpQQios2WYVo4Ua",
  "key10": "4zemPPY7y83utTYaqqwRPgjBWBBxxfHWe8G4HS1ff4mgZpHhMpYAAAbTvnN82L6H8ZG3f4Gyt1okkhUZXCbqFGZW",
  "key11": "5MAymTT9JmaGeJGLYUTq7m6Rt1RzRpAbvCqYvgtpdhWrN8XwxTiV63XTY7zCn7NrcBAVxaq6ReTQ4oeTGVizJJNS",
  "key12": "27y85Dcyc3LowoycxrMHEgkrtyAq6PWsuXGVgdvHtJRBfyTzGCaVcUN1YWZ93BRqQe9xNWZF5rPwFeZMf1q6eNH8",
  "key13": "2NThN1LWy8Lh4c8RsRYaaqe7s6rFD3xE3F88pq6tGDAK3Ug3eaizmiEbNyCfAhGkFV31K8Tc3zvTck35gcwthbo5",
  "key14": "5SiovyXiNtyUYo4NYzPA9SsACie6vbKw4mpFnn9iypgH9k8D4k2Ch4ZVBMZSSVMvE6M6kbzJ262hP96ZwvgfXHP1",
  "key15": "5LaXTdLikLtDNDA3R5AAh8mvtnCzyzvEi4bS3c6suYypzsZZqZt5tPvVkwwNSut1QmDgBSecvcrU3nZajX6p4J7D",
  "key16": "4J79QNHX3TFne657EzppsyTx56MMRoJuMrTZn8AoP9mjd7mjaNWGFKq95HnCR8sTL5batWhR1xX63Asqt8CqeKvs",
  "key17": "4RKvQfXDX4yEQC66oFfcNqiE1gbvdYFNkHgc8UVYgt5s1vApQcF5jaKbAfNcrnHkyJ1JC7Afxr6fTeTPbsYWudJf",
  "key18": "2VqCSaNYrM9qCTkufu6xDibAEoaJxHz97WhEpDCag6EAo19DBWEufxebHNJwhy3Ei6i7V5FrjJd2zVZ6ujrYCrLa",
  "key19": "56XQVogo982LYd8FYwH9EUk8BWWKNvokh3baf1zJ3GP8Fm5sV8xHp41HiesyGoHzahcHaZ6AtqLuHcDdZxicmLA3",
  "key20": "2fgK8BCvLMdNUFEzrVJBwuALhS1wtTnZsUQcVEDUSUQMxx9rjZdbGFGQ7LAsECz2BsMtAWGSonA6tdjXbtZAYmcv",
  "key21": "4zurfwnMgDcLdYLfegL12moiQkHPg1Vk4b3Utq5KSWwXi1kpsFnNJmNgVyvWBNvpkxxQUGR9KAWaodTM3VimLee3",
  "key22": "54SWtZGFXspjkxpNrWrfCZwsdB8UwqXhu1KaJSycUocuuW9XCstLpX2XdVnNFkgcjGDtu1t9jCysDKAXej4VLrEV",
  "key23": "2Qw3JPKiStbus9uHGxuPw3DzutkfYx9Xrq2j8eDk9Mtg5znPmYb5CtntoN99dtPMS4aJt376Qwzv6nnH1ScC9gQT",
  "key24": "45nfDbxjX5u9gsSjesJ1VxtYS9nCaPfEgyejWcUACBMXnTHNq2i3zvGVCUcvLgQFKK2RqN4MjDSxfch5Zvk3BtWm",
  "key25": "4MmnKubS8G5cYKZoirJdFGzjRK1V5doQWZVtgq1PVB15HB7Rb9VyoAMECaCtaFhTJyRYvazHve4cn3dLhWtwmN1z",
  "key26": "WmreMUehkq5UbsfezpTkKW2GjGTNDsvhj3e7Bs3SZZDMnSV433aYWwHqWnoQjS9mspG4cz727HzyuvULKjeATP7",
  "key27": "3YQCL8Cuubmbkivn4uHBjC395EsVw57kaTzqKCQkc4GBHALruTj4Xqypd1m54X8Cop4BZj45nDz2J9xpMCKahxdb",
  "key28": "4GoMWJ1fNP3Yz1DTdbQXyU5FXbGEFFGAEyYwWP3NGptuyempi9dB2RQJP8NvRsAwbBeq8DpHPX9By3pbKG88dsph",
  "key29": "47GeXGS2ywSFwCjEb8A3N5fZjJWohCo3kyoE7tPRniBj4GxUbbYnpihya7Qg13nSzpFU2ckxUvESTxaPL4Wh21Xw",
  "key30": "4QRzLULqYKNNRKFrpoeUrJSEgrcyLL7ebKpQyKSRNX74H9btzqes3yp8V3mdGG8qKL5CTCVrhBm4BXQZXZpVGEQH",
  "key31": "5EFtRxx1tB9QsMbBkCopFYCxDwFvCL1QrmVAj8oLriUKJAETACyhYePbsPHcxdCrRmLtsiLy8TXSqDALDjqPpD1G",
  "key32": "3D2zXtoFKUA6debCFvQjDqnVroksZQagUgQAe83hEbTVTwvSfyaibs9krWKDwqvo4wr36qKFxraVLgEB4X7Ve3az",
  "key33": "5HzrKorqAfJz9WKgXh8Jpa8yguweoYNmxLD1Q1Eeee4jQEkvcyp6NzYwsqYy8yGvJnerVcmQjt8QDSvvaSkQt3Lo"
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
