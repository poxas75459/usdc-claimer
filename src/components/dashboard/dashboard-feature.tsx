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
    "4yjq8Sz1aVY8frJwekkjohY7ANe569rHSCsW3PD7V3k2jRenbEcC2C7yeNxfWSy4kARBTcYXZSaExNSKNeuQV5hH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CaQwFD1wLQ6JmH9rRGEZ1upgJG8Hht95Dxb1KX55xgXb1DC1afw4YkUAufLjYoRTptmBr2zfvAyz2bTkpST5pmt",
  "key1": "AEFpaX7891SDUzEGPfZ9hhwaUEAER76UD2M2mMadureerTqdTjNvM4Jt2FraCcCGqBYpgvPCrSMRiaGDJKMus3o",
  "key2": "5scAaUAtFeUCKt9DXdiGmwTpx6bu4iRNofmBEsJ5Ddyh1M69JCuWHmHTP8oRYnegj2fWEyQG4c3YQ1LzABJUTbgq",
  "key3": "4oGKed4WxuQUL7Y7uBRHWyzTxikpcXGQJkAWQDm2dpF1cjWEik6y79fw3NY9E4iD1tFTDBxkWiiGxGxSGnZUZhnx",
  "key4": "cjSfZxJAqgfxmXZfygSLibB5cSfaTtmVUAyN1zs6CVqQjdSsQe99DF42mNYmP11mrxMNiX7Kn6ooqKRP5yjq4gF",
  "key5": "21nRFvWZoVeh4yTeirEwBzGvV3HG7zk56xXfJnTD9wqhSjyaFu7bP2HFAtfiTvehgfsFBnmFDcUnmS2eT9aRG6Yy",
  "key6": "247BokHg1MxWzhz4Riy3D2asUBz5Su3sqWwuRerZkvyrsLJedmNBRVufRNzusTxheBew7T6rgvxK5SotTp6KtWAZ",
  "key7": "2cTASxwK5cGUG8Sg5fK1rZ8zxFDdbvhLm8nc5mcTT11Udhb4eVT7s1JAZx2m7v1seBbUvMZE5wYx3VduCSJKZE93",
  "key8": "dQdTLHiEUGEiX6stVY7tW9v5b2ubJUxh46Rjj4a8xXNhrsjgMG7gSDLD1W7TFwjT5F6cRtXKbgJsq8E5sHFx4yu",
  "key9": "5nN3yc17mwQJj5qx5UPKhgmLXHN6mccf1RQPtt5ieE18whf1qyvgTRJ1VoJ1bNC8RaMZMHS97sAZ28MJyrpbZ6an",
  "key10": "3eZdCy8ViiFkVoHaQQNksf5CXDUXGZYobKXCCefcevW8e5sUhE2MajyN9KN1sF9uqkPdGFxxn155MKUeWAZzLJZ3",
  "key11": "37iehBU7oLzxf8vuVosqur5tjzTDCFwE6yhjD9vtETLjkvMjwrFJVYoQWfdHhrP8mNHEbEUN7C1HQu1SjmMVXF8x",
  "key12": "2tg6f8xLadsFBsjdUenspvQ72H1RWbw2k2EhnZ7hhuMoGNQJq1xHfWPfq7Ph8AqEo77RnA4Y1k3jPJC8VvAb1oEF",
  "key13": "4H5LCcHrtQfvuXmyc9o3CrY6DKwKmKwiPCjWbyBDCAQWxMhAWGtxfFSh54dyAdWL5f9FpHAZm9uRheHRevRRULQD",
  "key14": "3NoHWPiDd65TC3xuqrLZeFn3SSwANmw6M28KJkSqEQW2VVm9FtMarbm811waUscZtr7PhrwSXUZgdvhcbaQSiztY",
  "key15": "sUqvxn4cTK4Hsn89VAn5Dg55xULeLhMwYAoBLymHxjctDnLUuc6pWuMcLJDisCF7yoFNRDV2PNvdceta9disstc",
  "key16": "4LjZeyE331m1HXEBQjBSB5kigYH4DnU7RrUA1LPcQrimCeyZuqcZDnbSQRXUkErQA8BWzwAVnSmng8ZAH5MX9Qz2",
  "key17": "28KerDf59cVYsprFKNskmXDrjAS1a7sRewaB9CuzgaCFRUah9M35qwLqEvxBQw1P99AixTJBCWiV7h46f4mHv98Q",
  "key18": "37fdUxvCLzexGnB8tuc8P8YZQJxUc9JZbai9S9gMCvKzeY1PC28fuXD8B1BcMuHm6r9xvedsTTaQ3pYoGf8SbcA1",
  "key19": "51Z1ciYi9LfddpLStjRxsbtEKWjcyo8x7x3BMjHoJT6gR4nvKFtZqMjkF2h7H7xA2fwi79Yv2vUX3EgFyUnP5gyk",
  "key20": "5qHXApx7bS8RuKcrw8HVsY9xorKS5p8KbsHhgMxpK47hxNbFqPjAvYv1z1AXSZpwDDmQ1G4MssZJSmEzEz5PVvBv",
  "key21": "333Y8CvUwH3ECSKarkiKK1pdjz5mJmUciLDGhxLR3nDDaN1PmGNXwVYjXFewsKE31fE5YDH9DaoQyHUrtYGaJDRx",
  "key22": "s9wV7dd4yaxQqodTfMRVmRqzzrS5t1cyfFWrdwhDZRZsWx47QNGBaMhCssixc4eHNBfpmrvH2UCAKEHLgzTd2HN",
  "key23": "2GCEEK6bgcj67tuetWm318bUJtPdo9gTvf3Q2LQoDKHjX5NyUqD47zZbjXUWDrZfqMjwCrpxXFCs1nkgwMEQ9b1",
  "key24": "57zfkCeXiL8FDvnWYmCUfXf9WNpKYrv9tRYygWeyq6bhT4nM6xHd1Gws9YTW79NoLbG8isfjMEfv1NLkX4aTzbs9",
  "key25": "4w1BmjPsYGbVbYCXQjn7iaEJPPLgzHFSVw8wvQjh2cC6EhexrDTWJvk9ZCLh8B5gBLYV54ABXNVjXjmqxocbGCJd",
  "key26": "36ZuWMd8ZV29KuKVYxMS1WQbjWp3hBXNWsZ6sXaerFQcrGPeRx74a6fZK2VmnX6N5AZZ35iUokvmtf9QjFDah18M",
  "key27": "2P9612BLWuj1t7UjoUywgciuYDKcRwSNC3635hexRrefAnfGhDvDVnf3MQWeHPwWXECWcG19ExafBrTnibLfrYom",
  "key28": "3uJxGGimnFfSjKiMMsGRCn5ycEQHQzn3vuCofAu8GkeT8FaAwKnuokbRtsffcL8xmP2GBPYn9nxCQjB2kqu7o4dM",
  "key29": "4SyzhoTdvwMvFJrD8icNvK42fLM4VWx743tw3SByZ8WKCZoifzKCq4V2W1Vk4z7Yv9Citr8Knii56Gk2LSgXR1ca",
  "key30": "3JtCWxBRRXf9BdDpoFQQLNYNZWYrZGkbExYK26PoK1cNU5ZUw4X9fU8g8Zs5zp1ZQfhRXVBT9ob8gP9Uv7FeDStP",
  "key31": "2B4sgDHrM3FXXfQ9LZYGQoQRRi9L2X8oM3kVD3ovEx5eJVwSYNmncvsNZkSzAXoRZ8aK3fvrKAFpAMjhedjdLXcY",
  "key32": "aDpXHugQZSHBd7ANDLVbUsVJBKieK6jHqNoG2md6asTweCiB9E8aD64oYx1zWcWQsg1JLD7a7YDxJZYkmEqGkL2",
  "key33": "R8FfNWZzgF72RFbKW7ZRywnw13efX4tEqGXUihwqvbpQ5N6ZgNUJHpLzkLgi5q5m5k7o2bsk9Ys5VTWVspS6eZg",
  "key34": "3vk4PxczGogbhwxG5QTLuco4WMEnPTk7kbp8EADJggYy4NnBNNYJwgqixCrntSRPGjoRCpsjsvSQERgcpKnJhYJM",
  "key35": "2Gki8bR5xHNXycaY1Cpx5Wd3z3m5Ukz9cZF4BgbjNTiBKsXLtkKNYHDukhmgezoeVpc6ouRvgGB9YieBLP9xNdVS",
  "key36": "t5pz68w1pZScmZAmrKBTQRTH22TotTn5aHJ77stfxr2V4wR7K4zLp4XvrjBgYtrm8oKC7MYi9sVGy4SXBzmdAQw",
  "key37": "KU4wyHMpTp3vEvz6qVS8T5VkkBLWpwCY9FVzHuU73QkKr83Pqq38sjyRAfhAyFCDFKRrg69BD3EKbVRaG7xqJu7",
  "key38": "cNLAVLrGGkmRL4352nB252DamnRKdarK9zGrZU4sJfryuPsofM2vgBYSc2yUkEBBT2aVjtz2t6Q1x1ANJajNL5y",
  "key39": "4xnmFpC6q5YatEefgwLPtpmeaFzrDyYSEbyvvmN3uUpCvDdJfWdLRD2n33EXKiCVZFF9Kao7i9SV2ofsUXpQoqU2",
  "key40": "93zFca2BayryJPZq8tS7SBTiPKR2bsriwSUZKXtMP7dd4YpiGJAgsKFqxquQWjBHPcTUUuLEcF6WpArkXa1WARB",
  "key41": "3QEvAaHU2gydfzABPSgu1thAwReXjgg5RV4EG19hQMb16z7MyPDxghRtAMf62RzyVn9eBrXiE4NkwvkopuzghZhW",
  "key42": "3r3WcbC5cLNn1aTd1djfofdpMbmLX6X1P7z77egRtrsQazidSviZwW2kiEApaUus5rHnrR5KHg2LPbYdS5e3ZY7B",
  "key43": "2sMfHE8GngJtWn9nbM2UcraN5b4oTn7iSAtC2RbVrLrGbvoy3NuFzHJvVr4vGNmMwuzSdXc23EgYon7TbXaeT4V"
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
