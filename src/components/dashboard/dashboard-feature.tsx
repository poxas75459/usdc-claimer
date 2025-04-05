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
    "3hUZgeX76wjbhL5vD6bcJfWo2AhfhLggU8bAJsQ65xpDGV4SvLWeVJMktxPnKTK4F4dMBis2Tb1dnRXqinrza4GX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RVbxkrueNHPDUzYH453iNBDk37XKksosAib4afTYfBZPmBTtebfnz5B7cPvoBaixMnp6tTUG1EeNQVT8Tg2HmKu",
  "key1": "tf8PdFZqcnFaKPw4ZRL7QUQjXwZAnmYQ3MyViVFK3RD2zuioqYQaKD5xwvcWt7Nti8uJNjZJngKM9ndEw8xQn9z",
  "key2": "3q5uZYepQZGekWkUqAN23oPXy7621F8hojVfANFKFtMfnQKz4DkAFbNrrqJxQ7UDXd6BgpHXgk919q8q8XCtxqRx",
  "key3": "5kfpZ6HYk4pag9Cb9ETGCgSJTTLjkJFYBhCeZXMSqnfCipNLAiFUxp7rUhVRgae7dSDPrvEoiPsYfzViSFmjTQe2",
  "key4": "LhoVnH5mqUt3SRrWuLxvURmKNumDGMAhJ1sbYMCPLgAd8BqRTLKakt2hzxyhGRkweTi3217RGfSJ4yBqJqw8XWH",
  "key5": "3arGK6kJLqjAd53qQwp6YJbAauiwiMwxJqi3NC8C1gmmo9Gce7XqXz1kmg361BBAfMsyAWBNqCD3Mpzbt2KPSA7X",
  "key6": "2yGsJkXkVFhJBRBSA2pu5oqKoDht3RFK9XrGKF1Gz3vPJSKhvWgnjrFc8xFYYcUijrsqropVZQr3qUrkhMgzTkcq",
  "key7": "535dMxgDKSZmNTXcJfWDPzJvDwuerCxiCrCnqejkhHSuxrTsyi3MNDxQWTP9ao3W5QRQh2FZBwV12ei2cJFXRr6k",
  "key8": "NJgbnecQxcfSF8kXUG9PGFm4Bukc3eyHyHTBgVdwiT7KRQrMSX6JB1r5oZtJuW52S4sdkQPTkYwaW41iuZDDucN",
  "key9": "57PaVDhr3PMBiqDLrbbLPDtWnHScyxWB4w45egPxB21PAUizsZ9yv5ShDMd1rPqNgTAHkaFA8acaGRH61QTZHbea",
  "key10": "32xzxuaL2h5ryeR9yH7LoeUwfN3mvhgojrBDWrCQ96FEnAaLP2JL3wv2SJQUzu7xNwtAAgsgPVGp6i693ymhCGVo",
  "key11": "5kNZgwgiJsnqMuWZJBFfTiMMFjbiaSbuybPnSefVujoz9pGico4WTkVeE7pzhFJHuehnrXk9zmeDdaDGwCBj6Cst",
  "key12": "Eu2MUpYKmq5KZahaAPVHaVAavKaUvyeJkgDMTRNqWmVusDDiGC5y4RGmAxyDm7YUcBnnHzvuvEhgEftJFaqgM65",
  "key13": "24wtRvEQP8qr4YX3LXworjmGMLhuSqZKQ8g2XknTBx69mnGiLY7kYGqLsHf1Pnzcd7LV4ULPc5hzHiwyNjd58QkP",
  "key14": "ADwv7AiF7a3cEXBW8jJwpTb1NEfvb5vscKPHBw8MwrZMvgEySQny9HZJ3ZxhUnEPcfUQboVfsdkZ5Ehz8Fs9yPg",
  "key15": "cr7hEgw22Jvz4pP5VJRapX9nu4E6NhZENt4cNLhdY8Euvg8eMwk9y6asKo8WmVifLXtGjTbtoeA9fdt4tmHteCF",
  "key16": "VFRai6Bb7tHbjThdHzceGEnpREiCamajwi5ybPY8qsdT2aSxX8nXcjLJxdpsHsr1B8LBFk2iF5EWPTrJNvX1HRk",
  "key17": "4DQwz3TAsXHFop8muJSQVfDQgCb3KcEegWc96uEtxRkdstXxYub4dTZFrnVH5RuxQRoEiV26xQtQF8PXHaJmr3Ko",
  "key18": "p7d3fVYPha9bcY4U197oypzKFZjomYUMCNQ6g4R1sM8ESAPfj28VNYFWBQBZsBAUoMS32CAjfUt5WYa5UGbK6uL",
  "key19": "2SXs7Y9UN5fAWP4qprvDScj1YnwJk2fVW5evf7jo6pc8tByk3h4sd6dekJGCgZQcFw9DeWP2XgoYaJ5Az9jZZgJ9",
  "key20": "5K4BTXRbKTJeYqVME9CPm613E1rex2P65syU2QKDBN8iNDYJYAmng3kSZT7MBxLBZViund4xDD33mbft6VBKnVfC",
  "key21": "4xAEkwSowBb6zNxQ1SadWtjdbYPKdz1NztNV2BsJFMcRypERUeMVU7wqaSXaBc8d1HukvsPvfr5WhwZhoEJ4MJtx",
  "key22": "5Zoauv1ouP4THoSPP6s96CzAmjosXWRwi59GcSaZMbriHJbmQYWRN74YwdzWZtzpdARRzf5esvXkyH1YPWUBaCy2",
  "key23": "2kP4YGskLYkz4ZbCTyPqtrMCjm5x14nMnEthiBbmZ8PSMfJ7X2irUANm2zpMzxvAVq63W5bbkQgMV1ysy2nrEZNj",
  "key24": "2Ve6PXwWGH2s4c1H3sXPUVW2NFJpQdc3nsJXCFB8nL3SfXz4HimLUJVChKSDTZVnHi7jU9rUGT7k6MXpHFHLotoG",
  "key25": "LpdqQwnifSa4Th3MweMfUNaakhAbNYXxL7SYPDnWWQ5YtzK5tjiirbr94sMyBwaKYCPYePxRfEW5826nTD2ZdAp",
  "key26": "5gv18kivh8zN7PruMBs3x5jqAcTCtfAXB5tKqPvhp7bh4bTdK8y382ygS7yiHNNJBgfRtCHMtp7Mbtkz8mjsQx1Y",
  "key27": "2CCzKDnTqomeXML4kuhboX51Jj9kxEJcfV3vUo2VbQDyPVBvebAt21516dy4KY4mbjQnBUEVzPq7eNQ45rUZj5Jj",
  "key28": "5H2PGMgN8dQHhFRr5FiJS6Qtp17uUt4oh7rQZj9TSmQQLK1hujHC5Q15AqdKxpd4uqNBaNYaqVDBTb8EwLxGpS3J",
  "key29": "BvQgBu9W1t3ZPWprzddRFaS5fTs2ShBcYQgDMaF6rYUmxDwv7CpKwu3dp1RFtAwkcrVMMGZRaywqjuYdypvLT5N",
  "key30": "GWUQd5x3AcZs4Zfoby5rvfWc5izqCCEsY2yC4fZ4qqTtxNfsAr878xM2rKjWrYeLz8ztbApBUae5bQVNq5FGNzU",
  "key31": "65bnGRv8iKzyFKS1mCsyFVuKbHqZU7tgzxxiEXXRQYpDS8A1c3cbcf2QdpF7UQuzXgNPb4zc6N75anXnrezuabzz"
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
