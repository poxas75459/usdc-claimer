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
    "sKbCpq9EfG2NHrsfrfAGMvVD7WU2kzQNqYwh9f9jqDcvgcyZWPW75eoGS5BDKeUwV7UDhyv6NBvgoCX1qGD9r6A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44VhSSK28TkYvNhL1n1AZaqkmL5FLc7k2eGviQkArxmW44SoeNGF3PghB2cDnf9XQRj5fm3wS6PmBg1nX3tcgAhv",
  "key1": "49qMPmjE9cNZpPVvQPtiPXxnYsYN1F3dL4TM2VyWt7fwpSjAKXzNZt2WafBkzWKEmTUsSvKtmr2R5fNGuhFF19fU",
  "key2": "3MUK9X1ot7hfxRZ926p3BhHuNxfYjqwVnbs4ojaqd3dWMyH7KRNtBXAxoY5nLFQjF5XWFEkFFunmDgKrXjQ9T2w9",
  "key3": "4mPbZT8tpvszDptJzSSWs3nVKsGhTAk7he8y8jPxT1yzFsPH1VSocLunWtuxBtQe5Bv6rTSvMJYvwdbZdWvg6Nt8",
  "key4": "f3NxiR6fm45DoJZUrUzJEgf7bgp376gfxdqrf4gxZsfE1s27oGeTRg38xtH2zVVTobx94t936gS6fyjeDXUjr1F",
  "key5": "5yBvZevgTvQNxA39QtQU6x9iQnHCQFUYaV8ozHrqTgzAJZ4xw8JykzquVyLH63t3QDXH7B2p3SjHv9vJcFpPjuj3",
  "key6": "2JNLobJUAypnypVyTBnGGGtjhnkTUFzJUaCJs3XwP2VzRWQNjBPWmn7w9z1Rbg7B6XjT6GwuhWWGBnw6SaSKdp35",
  "key7": "2T6nWCxdBXQE8UtS8Cm8CJCHd8XHcFr1eBXX88deWgUUgxN8yxbP9nKaKL5zkSTMTpXBK5trghxst4JpFrmbSYKA",
  "key8": "3Yei6Pn4cQD5rirjrJiRgXh5XcWdVXnxWa9k7m2maWDHv8fjvUEpR9hsjA2cvVUc6W9im9RFF7ScboAT6DBZVfuT",
  "key9": "5M9K9aJCkkzoPncUTrfm33BG5T6MsLjKvTF4SpxaUqS8MgspVHqnEsJ9Zzbeu5ysMQ35vj1kKpwMGSFzuBDkxDes",
  "key10": "ZLavxthFCLtnnCMjXrGXVVT7vLaAsUAdgyMKXa6VYH2WWZjZekEVNiQy4qkX4yiPbXBzT4fLm8SDCjKFEtBgTvZ",
  "key11": "3eQsNN45VE1v1oXdc8CuaZQqhGTCqfqh35jKqRDgWgCRmPjhG6FHRAxneqKtXdwypEGRTCLgyqSunMarbSUnA7bc",
  "key12": "EnZLmNwvR271sALj159HTifFGx1xvihQFrUTT8fVmmUPr3HZw2ub5HD2G5TZi8TT7kxmfrxyncqGk1Hf8s5ibRD",
  "key13": "65TtZkeApj2VBnJeHtMyDHL4imnJvoHARCXzex2i5xy4tF9Cb2fy8wUrxgp4AS1Te1woWSQDBPtgfThwehXWL42V",
  "key14": "HjgGBTQ98FSbb3gXwR2mm77WN1uhsYrTbJcUKYopm8QgdqCobJgrwrs9hYJHC5r5URLcpfz4QCRuhUhQ73pFp64",
  "key15": "5RAS6vkif4jT19JLTutp9MQk8K2EhawqX8Vmnhz625X9asXFfpMhYWxLoVfNPp4dPLth2ffcrN14tm2kAGPJHgH5",
  "key16": "cqMhLB59do3KT69rrsyCuQKtUECBQacTwTAsCYJWQzAhq1WQWPb3eraEV8XcS1rGTao7XLxzACFusc2KgPwNYHo",
  "key17": "JCAhkvUx9utjjpDuuf88UzaKG9GAZmqeqjz96ThXYnbzH7VdR66mxArYwgsJo9cceCCoGfMoVLkCVwFwyhZRjZP",
  "key18": "3PUEmJSHrjtNCSkf5jKRNaoN5EYVfhj1LPcovujtZ99feM5rQzkNqPodVtvM3ncJt9scnpvTj49HQyhcYpCAdwPD",
  "key19": "5cPdRobfY98fqT87uq8YedX4HPhJRDhGQHohdebKrAx1r35f8jArDpyoKYWFHLNeQV9VMgyjpaFVMLfNNmbW82NS",
  "key20": "5TBpnW7pqFxNbomDf5zQhQ2GzHqrgqgEEciNkxYQxk4gDzHkJ6VytqPq18fTt1Z5CK15W8d7NDYtP1rzjZVRWsvZ",
  "key21": "3iTC1cgxvkpKrwmTHDJkVo8xqdJtNoK8iKobcs8xkLG6XhZXoh3Y1PgJmGeoJhU1hAtSpyoH2UMpi7KTj9C76TBg",
  "key22": "3PXp4H9Zix2Gog22ea5kdFQiJr5v8Gva3xFYEbwDfRnGVWpuU75BnhPXaBSmidn8TTobY9CH9pAs99RyyhbAT1uL",
  "key23": "CogkLD3Th6kTtnkLDcYCdLDmHFBfCX84nS2NjDyt5XbF3DaDNN9Sjkhh3EMjV8sti5uugNK7jtao7rRVWBQomW6",
  "key24": "2XshBayqGcfTdqwAAMgHuciySSvPpwAKxiczqKZqH7mvnFCrTiPJvbPzgo9txeibbqFKiYv67gPNojaoDf9VDtt9",
  "key25": "2mCDs4t7vuvYDVHsDEMqZqvvMyf4VWstj5JHt5aDfZ9jPW7gu5iEeobrA28tFJ6thz5JQ4uSzQHSxGHbufhZezrC",
  "key26": "XMuWk93YgJ3KtYNhEwcw8Rshe3yEXmNTd3P5xXdYDTmi5bKqHcGDbjwpNMyPGLYQtm9ztnzLbeugy29srKzLZMJ",
  "key27": "4aXcQF4SDkMHiSaVdL7Wi2Qd2Gp6Ff6xNyBWw639M8SjZkeCtQ1vcT54fGwP9rxqWEjmKqc22yRgaUcjZXgKHsGE",
  "key28": "5u8dNeRmgqd61jaZk8psa1Bg1CWqYyBMawujBmLrrLW854VsQiQQr81ihgZjG25JEcMPj2jVPyFeUvu9HqGbUuXw",
  "key29": "26Xj3LyVBTkpcDtf6CWH3gEwehPYZRi5LG5WYPbfmib6Nm4v1cS9ipnXVm3gHbAbhXipRYc3ETFYBAkPASM3mKUn",
  "key30": "2f92Fmp3rT32SvrtGrxHHY8ySUqe63HbZ6wGEhb8px9HktMPYJEJx6ZhARGdXmn1hXg1TPds9pjQMNrM6LEYHRBK",
  "key31": "5mYh6CFnPgVzUAXZzMo3GreKQe7fjFvyV6TELBiUpdS1BHSXPUhA96EKBm2z86n8GTKDUmXxSGErnYChb8CAP3We",
  "key32": "5LBm1mYG8Kp8S6SKUMG6HtP5ehDXRFcUedsaxBuL7y1gp6WK88m6ALafruBhK6sJRezasnyp1vMB5vwGvs9ndbY4",
  "key33": "3C5jXnRvSV8Aa1U7spayMpdXVXMFe22bmgEm3n38feYkPjcNhuQM4GtpVkBb7RffNM5wJK29ND3kokHUhGpnFtHW",
  "key34": "4B7hXsti7SKW7yDq2pewyPTzgyLx6EiRZfnQWUHHiFUGwxH6i7qFhMoqC79xLEZFyNAYoktAJAu4jtxETpxKCNBb",
  "key35": "qXMtUiZhLm384VhDxNDDg1kkAWs15n3momr87W2f43NL5d2v4jHdxN8Rdpxw7V4uXjBU52RLVLvChoGrr4fkuav",
  "key36": "5HgpnSt7TSrTFMeD1H1s21ctoLYDGbB2t36MsgXHLUy4ZoMFTgdzDgjQH3sPkLNXgY3z6VDYBz6E83mF8K8xG5kx",
  "key37": "bHJ74ThZFJTWoVpL42ykCvtv76HUotBd1mY3ATLB82Jvt7C6FzhSQSCUmQdnLpwP5V6p7KroKZhzFy4fAFgK8Fj",
  "key38": "5Wk3EdwzSK2Q9YJpvKuKSEifH5Jz8pCJjWaPBnBFQiHeRGDwWT6H1m8UepA8kfnAB7kMUxqJPEpngs8ZeuVEQPLR",
  "key39": "qGghAG5AzymSnJXoVDjG9cET94LvkceR9QedY7D3j9WoGLzf4XkHGVvcvNFfMWzZB1BJNHrtqZXjQS1xayef9gf"
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
