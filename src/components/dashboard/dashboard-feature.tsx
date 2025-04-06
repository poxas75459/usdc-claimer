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
    "3cie2XR3FgX61i4gC4HqoMWZkrPTkLDabcGAb5wfN5BJKXJwYydSinAyKk1Cr4TjRUWzkHCkkW57MVMyb2D7HbRX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cw1ZSCQUVUFtWY24RGnP66qBg8RBUwTAgW6xqh41UryPJw1wJJ8gS78gkD4fgiy874fEqRFhMarfBs72oAB5M1B",
  "key1": "4N3RJJw62ejLG8fMRHfSRzp1qbnozPKwSbmFFYdiLsouNFn8dUF7REBi8Y3P46UqkoPUxj1aDEPjmxRHgKtGqikD",
  "key2": "4vW624PYn6moTqhP4a3MKn63ijbCrDBoPDhKKEXUcHgYi5U56gCgKXuiq8uaSyFfVajFAzmzseeoyDhvyyh5frAK",
  "key3": "5RyrNKo34NpafyMxHzpJ81zEGR6xkZGALcdZUg52jpJLnM2F1u5YhvNVofCY9mudJPRmf28TMzhaZykJ1rbPxFu4",
  "key4": "3Q2NUVu499SQaSAvvqMtWkggPHK117vHmUNmMbFAcXwQP8fzxsBvTzLH1MVzXztSegKsSX5Yv86vJ7dCmgmQNYwh",
  "key5": "VbhmdhBdMD9GKsHYLzUqG2BJkZCLVpXQHtjvXuE71LjdQaTMZBi12b3VSSNp9CMLbnmNL5cggnjcjNaKXrJkWWj",
  "key6": "5UVoJp6rTv6gHdT1838MRAvYS7aaVoXeda4xJV4GNQ2bpUjYtq2ixQmxmqG7o6B8uXBa8nNdYasoeaCz2qgKzeqU",
  "key7": "VmwX8Zx58FHfjnLZz372bBkemNfmot4CZnAjAaVsWPqcP6h3vXUbeqiWZoKafTWqyAsg5KWe1QWvZKPAEtsGG4n",
  "key8": "2s4vRDPhwDCQkzxXcgCtxpk8aoTUVtYANsRGY5UToTFJbwEaxCT4y7x8cqPmh6GZ8kpohNLHXyroh87pH31wMkmw",
  "key9": "5wU8qcdeQhHzndtPLmE8kdNDZZWCmtGQTjNpWfJagZMSBN37EMdfmoqJbbypCngB3A75Cs4AzDkTDhxn1gbk4y6Z",
  "key10": "3E8kzkGgrvUqeR1HAMvNtsMRg7LpguczngXKjvy6JCYiFzaDa2TXZTKLpYxKM14CkqccbiEjWp92TmMXxXQyfqyp",
  "key11": "5AqhNiTka4cLnVfMASmHJDcqWGDe9Hfns8BLJPZT95hqrMwAWq9e7rN8335ryUXvj2Leu9jNULZVFSysp1tCZRRd",
  "key12": "4AyC1PqyQWidPQ1symArWppZiJUbJjmBRhP43ueL5XbMRGfGCi1TUMPxPRseZgKbcxdGkP8SAMnT69zwu75wbxdE",
  "key13": "3GB4n3NEWe9Jvu4rfpLa2G2UR21p4NPfDMow7QahiT8AJWe9AW8Hj5E8y5YBhqfPnuhUGeCewsYpGWVjSLhswosu",
  "key14": "4xFknUU8d5iKoe46k243PEdoLJLWoAcBbzmMKAV9zHukQNUmxk53zwDizpRSWvL6FFfuaMYrQmck6497Dt3MRZC2",
  "key15": "5VsnhJp4jrzxKGGswtLatU9zn1M6u85EuuT7p6C8RDFu1Pb4hgprQVUqxkNnzsCjwMaJ6sAQFQKzvRW3ujy7CiUn",
  "key16": "5rYK4gkQFMbbDGhxL6CYpXtyY83fZF5y2mZ6Wz5BLcHW9SpZ3L3Pon5pxgQkWt63sbjZuBTzVGLSub9a1fLSwwC6",
  "key17": "4WeSPRHZr2jDJ9hoPUqMXQv9yVSt2JqvkyaGfB1JUUJxmxPy9sN142gmMqHgpgANGrocW9Hbe8yAkNg2sGFi4R1j",
  "key18": "2ancALT9dCBAHa5Gimc1RXniiXNxw7cUo6Qesfbj3EvicfWa7GLajKYScaBAVbE34eZRdCPHevGHb1mzdsLJvrut",
  "key19": "4JYjYtjTcMZJypaXvDuAdZqkP5nrWzw9L8ahYz5LLWDfJe7xwpFbCcPom4EfDtJfBQdbHS6rkCUYaK6ic2FnQeTg",
  "key20": "5wDLWzV8SJeySxgMwhvfVLsmXt85SSAFvfzrtPSYooit4jcMFRyUP1ujdm7DfZ7hiaRVhYBNuL2JKzGsok82h1Pe",
  "key21": "xbbyUPgSddeWdfep6ZWLJXozh9VsnUMwaRMpHPZmTNEEakLtcCBdnn8rbJnrd4MSXzH6byGnyArcGXUVBCN8Rgy",
  "key22": "39p7M83fgpyspab5YTkAYahRnMQxF83FzHxmWiLjJxWfFKEjRu8P3tds3sVpboKg1ZWfsfxDFVTmQuWAmxv5abjF",
  "key23": "314svNKWjnkLbCa127m3w4gkN4S74Yy9gxFrQ8wF6FUHrU6khF4gypPywdQadAbBdHE5sZFGmrASdS4URY8v9hGK",
  "key24": "3wKXuHUmZEsmYoGfkyFcoze2epoxVWNVazKfRckPVaHuFELRjBbTCwVboQSGnBZFxPtru7kALddNnr8rrGHmq8f1",
  "key25": "5tcZwXPk3fTfWkQXEngQueVns4RGKGX6imQSGR4MteopyhjZPZE3HzPV5RTn7uc6N2PA4Q3UB2cdKvNgLf4SZMvq",
  "key26": "64Q8nYM6uUKv8Q5Mzfz6ktSEDbmMqtnHfZrJKLMxTXVUbz8KmCyAJAkE8KatHdSjLka939dfD4KELy9nhCr1Efc4",
  "key27": "5kGZPHosfmMUDBueZv9eKCVvcUL95qPMwXahHjHiHuCiUDMRqyr7Nq6d7Jk5tzNcBS9XStnezAtnc9UgsuU7oAv9",
  "key28": "5SWFNxXbYfnuj1AU8AaLwyz7RKEk4eygrJwftaoAubpqNCMkQxsJXRHRwEYd3HgdbaP96Fphn6rSzUbY3Vq6FPSf",
  "key29": "61vzw2r4VkKJVug3tjcWePhpdw8j8Hdi6u4oS1gpjPQrieQmfGc1UtQJh7b5TELLkb3aehuEXrz5cgxegUECDnwA",
  "key30": "4Uux92ZNLTNBHcaJUZ9ZwdAK5fqKuUfiQs3fthBdLecNYPzuKQRe1mCkeTSvVDanfN9m2pjo7cVrpCkJ3Hep6dk8",
  "key31": "31oj5CksTiL5s2X1q5y5RcCgkS6j4bag7Mgww1yhJcbiS7PeCJdyVkPAZ5zLeMgctnRFvUxDdFUZ4gy7xMemwAfX",
  "key32": "3GpvaZgNQQztZeqTvJFJ1rkwcn6RnSEktruPEcJcCnEfpzyBYA7ToRoNHQN26AGaEymg2Yw8KyvSfQK8kBCnkn5a",
  "key33": "3aHkY6KBXomQHUePXkyh5Jgxx3nidbwXcpstvic4ujvVN5LipQQAnyHgXaoovGNWoi5gPceHq3bxUFehh8yniPr1",
  "key34": "2wrEmCuQdSZwpZmyq3H3PYRmyxAkrCFLrSfWhssd2Wy5UdAjAPNZ1pWgmfrnnKW8qjWfVTq3icEUi6ZtgBBhDvtQ",
  "key35": "n9iF9hmBxZEfkS5whFTA4PbHsoWNj63wCJcpqaYHvxXiG1teCwr61ZrfSaXRtJS1KAAzsJbW9jSNc5HYTcKGH7A",
  "key36": "5xLVRDMaTdxr25x5xHE2KA7YHcYnWHSP9NJg5MPMZHRvU4rxsZPPArry2R1SNZMQ56vkBB2Kk5QN2hfPMsYzrzRL",
  "key37": "5stPxUbPcphBxsoGfFrKn6hv7vHExSKBEwQ1RCFLYa78ehNSgrebbzENxixMzgzFR5BTYU54g7bCxhqGP8n15aTR",
  "key38": "2aAQWpnXoczQzuHxmrJY2Kh9PhD1aLvD3S1U3LzZfkGQ8KmhgCF5esqK1cC5u43Tc93tsvYtgH9oG3G3y6SPwPF6",
  "key39": "4iukQWtqUfFfRMacxLdyCjRoz28nt899fio8rz4iHRWYfwGCQDvXoCk6CpjCeCVXu8GyKq4rJYYmspdQfNfaH4qL",
  "key40": "5nfSBG9WRcjQgXxmeE2evKzgxn2dZpf3NCFy53dvruqzFZcs6fvggb8SvE83GV8LBPk1vvRQyjrWXozuP4YZVev3",
  "key41": "5R4LE1o9eFhKANX2SmggYdwZ1aj92ZCR6k2qiHREGogk2yU23ohLtVotaZs7S4CNJU4VBKzsou4Xe15bbfx4RVBr",
  "key42": "3Kz8vTAHveRFpzJJgoygtFDccG7htFDtmoqfj6phn8fjBTfxzG1f6hiEAzx1LkEbeWfaaYBejvZxUrqhmXDfpug5",
  "key43": "ChsKhpFb9ed83KsPr7WCp2AiRtQDFEYCskaRvJWP93hzeeDYdm9h2gbkhAGacWYgp93uo5wqS5Yz8PTk58XQLLc",
  "key44": "3RsEhTFHRmRzdZQUa9qScyr4MUo9TbbbgvWCjyTw8Tpmgv3Rmgbui7U6Nom75UgUTy2XnnfxhpLsDKAv7cRpdodc",
  "key45": "8w27mE4JRNGgYRaAzNYMFnfqEhySZQDitjrYUYUkDWfwYWtumbk9twGq8jGTCYagJ7sQ2qgZgCtvuBx8KPUrUHD",
  "key46": "57DoMyT8bG6kNVKK1vpSzbLjgEFfJrfyXBNRUvoKh1mAD2nmqySmFGGsGGbRr2f3P1ikpfxCzoFZVitFGiype9Ao",
  "key47": "2bh1tdzmBJ5NmUHKMLfJjKZwDaUAv1gxgZVYyQg4V3KWnQsNMDApGXLVu4njhakPzizYu48Ypms9LW5UTybJk3Ea",
  "key48": "vQAErRZPhL8j38c1tQPYMvLcXpSp4TaAG9YpyhZzjCvNZgqoVVaqfnq79KvEpguu2Qzh15hh39XnteJcnUuGMdg",
  "key49": "2uYrGVVjf6J8fQCUvBgxfaCUvrpkrmQNbfwxXAzeg8ydtighg76TmwjX42GmEKtL4A4gtweFLnwa3XwSPEpFuakW"
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
