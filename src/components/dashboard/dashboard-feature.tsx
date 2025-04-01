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
    "5QTQ7EPbjXtqe3wT5HsWnHGecHevxaxg5P7sfwRuy2vJHQQK2NttYcddNkp54z5CriiEndb2pcH6qsQKHpkAtMg9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LN8BnjRHT2tFBgGDQTZsgpuvpkPHqUVUkHtLdhfFiGeV2qTrDenUDMY1CK73oRKNWdch4NSM9XpgFshHbygEtrx",
  "key1": "3xRy4pbhwbkLaLEtx6XMMJFDZs78ABD2gs5CafrTe6USNrywgUjbk9S2FPBzW3VYT9pC9iELGP1ZzWnAmX7sNDWV",
  "key2": "2dGGQdh4jY7nASM22JRtdZ2a7o2ghtnf5NMz4F7g2Dw1JDt4NrbcPHnMC1e1pEmK3kCZj8UptihjBuhfqmUmyuqB",
  "key3": "4r54c4xYvY3sbMcFbbyxS13w5CNbS5tF6X64sWRp4MneUyNtAfS3ub6yuFJUuN7H3UxENMUrcvJzDs9VuhaPyPfe",
  "key4": "2x97Ddeo5AXMQK6za63q78pqPDp5wK9G8M3sEjuR2NWWGBqMGN3MsF8fYxiVjAoysk3KvgixarrBCTJYuhobBaDh",
  "key5": "5zj6drLgmegnn8yL5vpC8tojXdUzdCZxGH1JDdxSTnGJy9ntpU3wr3UHbNRdgJcp4Zp6PYcyUCoZUnrZfYJhAHX5",
  "key6": "5qKyXx87X2ogK3qgsGENLPXzxFEFHT6zxtYvgMySZrZYiqQ4CVCPv7haPZ3jY2KYs4Kqp6ikXDeZCcdxcCK8QrXq",
  "key7": "3uYiTdHD5qLicez2ywK81JqJ6Q1ACjtwsQuc9AeH5dJ97qQBYhyiYyMmuzrvBJe9xerbrZtgzvRxxPsNXGrZcRbt",
  "key8": "4RLAES7daSuZBYvVwuqYckMbgxKt5HrexXkY9MRJiTwUBn7Tapv8c2y2wA5JSecdtwpcjdpiZbLLnY8YrYFT3Snw",
  "key9": "43b58EH3i64EVJGkByKWWywyUXi35FbvMxWcdaRjmQHce4eL5tC5TU9SEkdHfP2rECxruSpiamktzNvsip4h51nZ",
  "key10": "4XeFQsrZr93VNNzBkskrCARPuwc6Vaps2auF1ALjTqGLAw8pSK51d4Api1n28rRA6MYzKXHc9XwnBU6zWche8J8G",
  "key11": "KfyFDRWxsf3mAtCAbCwt3pcG5V1Ukg6J3LxoDQo3LEQwwZmDxobiAZG9Ba3gdShdQiFXBqBivodBfskhyTru5rH",
  "key12": "57qd5XDRxyeKS2Qhx7R2rmZ1GznL8a5niS3ZDNmn6D7bMKv67dNFCy4SQVdtKz4mshtFeAUyuMozvF1Cie4kadFU",
  "key13": "aCSz3X9BmwSrf6Z4NCEfnMsaBYQxKNwxyQAmYRjchcPHeTM7yVuM23SGk68EGUcjzexkkCLco9Tot9kFPjy2nRs",
  "key14": "EFe1iZenJfjxAsrJKx3Ve9Y5cAhaCMVsJtppD2GYoDbBkdRYPnvFfRwWWZMyuYM3G6pCKi3Z4exNniAVmfB6cJ9",
  "key15": "45k7tKF9XL4qscFefntcaPnydbjtH9xSU6hTfa3ea3Vt1HDPyUgfuN1ZLLHDnV3FATP8CHCXbMspeJ7i6LurJ9hu",
  "key16": "5zkoSmAdd9JXU65AKzCjH8xUe3viEfL4Sttuvpnjt2C5MYk9rxWXfdFYMzFRBNa9CmToiwVq3GC3dTnnKEkDB18J",
  "key17": "Q4MRCiCN2eiTnfGzk7fELJHo26Q7Y9yz7BZiKLoWCmf1vzufYfR9f95miDvjQh2H1QTwAokQqVgiUCuS34UJdUZ",
  "key18": "4WGQV2zp54CcKmUxmiQDahCTSFTkS4H5AfJWfrhrPiGj986iaPekjQovBGKJ35xZmuBX9qEzGucSkhAcTGAkdHhi",
  "key19": "3gMft5uuYtcEDeLW6YTz5jbUPufpo1H6pUCTsE4kun4PxdxfkdtNhB4FSY2vgx8SaqdaQ5SZfdbUcde55DrwooFy",
  "key20": "3L2r5jyAtEoNXCcQWhRzFKERtpQ9kJvQiEXfMqYdJ6GcTTvPcreMsno68AGR7r8TCydqytsY6rwhMuB9jHNzrKez",
  "key21": "295KkbaF95AZzFCphXaAcaHohoU9tBy7LJw7qAYPZNy6kaEgxcL1BAbgC5ZWZht9pxXg5qgMzp7y5qDx1uZm8iaZ",
  "key22": "3jSgFJ7ojnY18nwyMMaWcYN5JARp1mtwfWSGsUu4pmHcbvGqsaSAz5kXhixXCnNfYG9GiVK81BZojWbB4GcxzTj5",
  "key23": "2y99HePtGkFEpKg4TCc8Q3GkxtgPZD4t5axdgDUjKsRdMtfbBgmPR4WF4TjkPnkRbiFqSufwuxcMvgN8cEirbPky",
  "key24": "4oQFNi9pvUCaASVe2xf7nynrQ8JXXDSMquJpLTt5MVsbj1L3UsT1YeFZGH28qL6MY1S5XgJ1vtxxFm8WaxQ7tjf3",
  "key25": "2jCBnZyPhSEzaWMQZXvBYz8ogJt9g6vgzAykPqkx7LwfKNzXNPyY7EgHRFoWhg3Vhm7FmfwwWv1ApRW32qFGgddp",
  "key26": "Ctm887DP8y9QCs4chswYb531yr2prh5xCFn6v4R8EamgNiXpsLspiFEyfMisiJFrFAVSyw5kZgaDGsTPMvy1YaE",
  "key27": "4oxb291us1W5MHAoTyyz9XDsvg1EqbrxkVatjpe7CGxckv2binWnnuijzZEg6yRECtUzneHKKimbme9G4Kpgfh8f",
  "key28": "4nrgGU2qd8pYq8DykcpakSLX3SD7q87PJb7yHqFAuypW7VFaDy8BJNTbvGSUDxhgxMnYsh9vkNizYXvBrhipMSLM",
  "key29": "5RVajC3MSFL5Lo6PMb1FsqiSVJTiU7pJKrhbFc1v6Sq3rzydE2qEycXiePU9xetVDAg9Wvk8WS8cUkE2tqCzvN5Z",
  "key30": "QfNYpjR7gGbAJRcDcksu29g4oVPT7pzjAzLZT4SpfksWNdJDgxtGamUYdarwcHxBuaSc93y1Q5iLytc2YGtjAbN",
  "key31": "3gyS9QmaGpSLqS7zEKTkMFPg2AYD7yUdVnAyTvFU1B3BgMFzpra6mhrjYZUoFVTkaEsTcKyfDMqQa7fj4ZrFbJGn",
  "key32": "58BVcvNc5KxVWjMvB2RQAHxzwgH2rgJVtRbhXxXfVCYDAdqCVAocLv7YdCAVXh8HQVz1aVmQJpQ8RDtMcgf4ro2M",
  "key33": "62RBr2isX4RgJ7KL5pcrwnsL4dEu8rsZFjqDSywVZGD5zxjvboyAxeyezLf9i9p4CPBEwuR2P4L8cfgmEAkgH3VQ",
  "key34": "63CLREahsMejRHNsp525d1AWnVArPsq5NpuXfARjuhRdhzZrxXz7pGRj1aohV8HWPe8WZTRFBxpw4BT73Zqj8bRT",
  "key35": "9pNMmSykFDSjzzJa3JRgiZ9T9qk34CqD58bWYkF7eBbEiFc7zNiTjeDMw1wWHcB9ceMHGD5b4ByPYXKsouohV9N",
  "key36": "45vrnkcZuRmzPq2oZZej1XUByH5uiqRNi5VJUfRvxewXN8r3BvYv99jLAGQngy1s77iV1QJSKjBhVvt5FoToLicn",
  "key37": "5GqfowWe9Ep7RAPd9TfGQ2kNqhUkZ1WucE2ncDYHGhvpPpiyYKtuw4FZAoP7wREXmcz8A8EAhQ3iGZrLVgtogacX",
  "key38": "5YfVoikhqZFTdcEz14S4gSX36h4W7oqPzU499X5TeSshNFcyQfUa7RX493QcYw2qjAYkp9spMUctarM8EawL99SB",
  "key39": "5h4A2yARsJGnTcUEU2LuhTaeoomw9KQeG5MtNYkL1mEkQonCdpbFKAqkBju5k9BAA2mXM3mWxyPDrUq8GPoC1B4J",
  "key40": "4z9ee7ErBtuvMCqdyrvPVzWyq9aBojZ2toyyLXhmsHVqrDswoUYc1SAZ4Gfy4UE1eZ75vdqXTubCjdiopVMi6GtU",
  "key41": "5EBkRf2yjrAVA25YpbkmtwcqejQYpTdvNKUEgQnHwyEQUxZW61uaecKyMy7oLmAckKaDahkRWnoRp8VuJK4YAmek",
  "key42": "57PQTLHyXh4SR7ELAxzXdj93GNEwPFqvd7gvQPZepZM3HwoiQVM7r1rN6qK9oCQETxRDDfZN1ZYdvAbiiGWU8dYk",
  "key43": "48tc2P9e8Jpo1DdLqpAs1q7C6AwBayE71BhrghCUEtst8tKAV4NfSWDFcM1naWe97rXPg4aeij8aEeSFM4ayKQyZ",
  "key44": "7o5UgN3ArEkRX23Y21erpiceLbQbjBpvjBqfejqRur3WJVCgFvZQXWucGyaaKWyQFgntTAGw5EyYYvbxGudjabb",
  "key45": "5dGtsAbTEQC3BdrFYNa4zXvsH73sa7RLsicSzLAQKJKFbsyxe66TycBhsopbeeZhRgD4qDm5j6FsSWXEMsbYEu31",
  "key46": "5s6WBQCcEu7m32t2ZBf4tKDfztun1JXrbartMeuj6ZzSrpPMxByuMjtWrWWxmBeRiQBfmToX6rQqLxYXoNYAcKjw",
  "key47": "3uxHZNc4wCmPq1EpC4xLTx4VyX7bQoxg4AH1tTkCoVwY1aw4JLc8m44g4KtmQbL2iYH5Wgca2kgJDQvuhBoQ6Hb2",
  "key48": "3TiW1DTS5qVWzRXwZrLWFUyWHGodj2ceF4haRW3nCSapEkUYoQhvXWUdmznDoowuoPrAFG6DQg4oCUZgWBgsi9nk",
  "key49": "4vZfbiVgeLrwNm2EMxmT81eSwc8LXKXqAbp5fgJg7Tg9ZYGYW1e6ms6K61NY7XCasULghsJyk3GG2GTXwp9mAmXL"
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
