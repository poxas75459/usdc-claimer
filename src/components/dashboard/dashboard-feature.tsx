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
    "D3i8kH3xXLoMQGVSLixQur7RDVayw8oQHtDQLdPJxLdfmDXkzFra46KNCmQ79PTvfbz7xc5xNJL3g6JFz3S5Wri"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MZVoASeZu4Gb7pJRDujKDy1SWELMhmD7rjdhkrfvVkbbzcmFLFx64y7S7YJes1BuvHTTuTHwsCuqhfMfJ5AkgQx",
  "key1": "osE2aWThcbKoWmkgxaX4cJyLPVRRAm59PnnvDae33UTQphiBmceyQx53J4sBKBGEj18maH448TWbXk2rd2fatuJ",
  "key2": "2fs2DoekepNMcxqwPMLp1gT1ipf8UJt6oqdEYrX2XVbrH9nw6QURLSfQdxqbbVUw2L5765fmQKzU9hJfKa2XeERd",
  "key3": "5mXjsGEtXMbisVtSXd9WkBmnmfY27GKce8nuyRUNTSCGoPJtLJDnKq1DV5QekPR6JMaTaeUxft1wwseUHd3YJ9h5",
  "key4": "4PATVWN2VnMnNupE3qbT6YDMeasXqP4w9b4mU9f8q4bF2iU2cUwxLzuZqbRwfGuVh5AZiVskn7A9ihAL358L9vrV",
  "key5": "6cfmsf86yzFHizr6pN2UyRmVPANsT62nssyBwdQo1LUH1nBGttxBJHVDsNrmeESsgth1J9hdPz5sBhwH8VgbYU1",
  "key6": "4NpCjpvxsnj1zvj21Yh8UqSEnUaHuGsSUjGuKZWvBUSBaUDhBH1nPMMmmSkLwbCBmKAcg6gMiBgCmsg7WfdmPEZS",
  "key7": "75pR5pFBWxCsmkWiNXDFr7R5s4dZ8LLUYfbNPZwaM7w2ehMw5cMXCEcyEZNDLTZudB3ETJSKdbcNZTeNHpEvFPV",
  "key8": "5ukV2T8khGXe12HhBzU9Ff5sAUZPC4gEe92hYR4ue9xaobuCpxxtLiEfuP95iEWYTC2v8qBd1WE6u1Rg6wJLB7kq",
  "key9": "4AG1SPUQBhWx5RB4drHiPFULNg3oJkAzNxP8EVoVBxELnD19Af8asvtK3CVvDXnHaF8kZWYPgeJHKXvZq5FMdeje",
  "key10": "xx8V3BXNrrRRDbVXR5RAfHKwA5VBx71sBjQ8YjNxmowh8sseaMLLKD5u5YoEz9x8sSgaaA8CBWRu3HHacHZix1Y",
  "key11": "2AKsGbeQRFjJhsMgBfW16vyLXuTZAGs5Jn9sAwDyD27N4Wi7CoZHyP9qUCkTLVERZFcrjxifTQv83X9qxZEpYPzx",
  "key12": "w41PkNSVBniB23uHkJb7ge6g7mDinpzSWt4ud1MckhmMrF9zQbHV5hNcuevLbgeSSiDDnF195TKijX8n2SRffGG",
  "key13": "2aDYbmPNbSe4gKY4swLiBQYm2RyjM7ydx3J2GavL7hYssqoqHkvfcmEqG2LT8SYjzTKKcEQZcFBwTuxa6LRVHLKz",
  "key14": "5EkULEUpxY9WfAQUnyQyzmodunHiPyjaKr9M7bhuxSMj1mNiAag2CDaJS6NRL24wwoRrxMg2qS29WhJumNAaKipR",
  "key15": "4NeFZwBGAjBk5BGKiP3iMSfw61ykS68fuwEFk4TZNDmvmc7uExDKe8B4Tp71HfR2zsAcTUJQYibgHbTaU7FynKxm",
  "key16": "m9j9M2G4jdMYVxbU2eLft6SEh6M2Aov7x9Fy6nywNfd1pNjdUnN7vKKuYFLm6akE45SXTPc6yFkDsQZYcuUv8sV",
  "key17": "5fxr3uL5VWAS78XMR6qicTnCBsPRukaC73NpaWsMyQ49jyfbBcPzbhyJQTQGzFBfdYzjMwQhJgGrP2VCBvEdkGcz",
  "key18": "4tc1Dh6oPpMZt9tMzicg7kPgwFgo6RsGFT2sBLsrbSJjXA87DCKY1VNSGgmQ6yaBnhyitHQL88wFcULCHR9hbe5s",
  "key19": "4fVW2qGhztsj68PGH4Srkf8rkDJudfTQbTue7ZjHqHYoQVVNAg7mMEZpT9aJhzVVnEv8S86MBqkYjNyzFMm8EfuF",
  "key20": "4qVZnBRSXj72Ua6bmtN3gighMMZ1bXJ95xhdFCe7taLDD4VuEvGfaD7R6zZBeNFupqQCDsh4njMusadDFsrLzH3g",
  "key21": "2YkWDNncYYdiqxqjFnCDVVbS5SXhQTS7dBA8mSCZQrNozTAj9X62YafZATyMc9iCCRxEU9tw9UVu1fnhBKtSb3LQ",
  "key22": "36RiciTAQvS6hGZKenmeJxRiVwvf6DgydenssXnCiSwwZMRQ2rhw3TRh6baLauk48RGkaMnMASc1CTxH63yPHmLc",
  "key23": "24kUEqznQG7tugbHNKd9gVU3PNT5N5PyAbzpJU9Tc8xJMwZHkFDX8BWyydrLnFnnc8FQ4uonSXH13HuSYxTyGfaA",
  "key24": "5aawNDDCU5QhJF25j6SCa39Hcs958fx7XSkJkMkgwUN1u4rWTh58MuddWfGkTApVGK4zYg3QaaBgx8Hob6uUd8qa",
  "key25": "pzvNyr4MPaN8Brd5AbT9ADWpn6SsXoieEwfgv8x5tcKiL48HZFm4TPxTNrznaQCa4QTDHKca6imYihGQJZb7utv",
  "key26": "2axRjw1t9AvferDc7yQrvZJ8db1gCFRRUzWNZ3AvWS4ErGDVS3wgMU7hYXxRK84eohbDsftgMWAorWdLPaQABjM6",
  "key27": "5YBX4oEmW1TEpUY6CzYZUNLLdB2imucj8naUd65Ti5qWkQFeGeCAjvtCR6uLxBRBe9iK4m4NnXAp6tmY7hc1Uyyc",
  "key28": "33LUyzYnqmvAgdhe9CjdZgbZjDRMcNz8Bxthy6sHy6Z2oQUYgmQcCeGGFNUZWnMmMGTa9aSDLm95NdgYWPFBFw8T",
  "key29": "4bJQpt4yTgUzmpiijP94CaFj9zxF5TAa1J7vjFa8FkodjasFk4UXXeYXGNENyeBgX8NKYs9ZwvL13R1XhhfgMJHL",
  "key30": "2UnSFeSHevwGka1o5oR9tJXPo6v7uJJgCJ92HYMjjzHqcvjiFMiTcJiBJ5iWU9HuvfVNs6NweAxsHmZG2c1XKdgU",
  "key31": "43m9RKUXsgLuQVtNPUWdsrBNC5mGU9Vsd1BzmqHpvKym4STCoonr4iM6pe66iBrnMWkMdqaHAmNrq4mFqXw4Mdnu",
  "key32": "33z4Cxud3SkGHJxT9FdnioaySbM55NMjjKzVtxs37ZgRV7K3RhY12mUX1qz7kbGhwNnfhbxeqtmbEDnNBDCqbrR5",
  "key33": "4MDQKsMVgn35196TKoAiGJvUVS4te2BEEcJMT6JUVTaMyUFDCp6R6rU3fyK33cbMfRpuScTtmZieVU3Yzqx9Ltmn",
  "key34": "3sB3gwAGZwh9Xwqta8ug3YrsvxCinmkT2jUPZ7LgTctoeVeEAYYqsKpovzbsuRYW8sPfHeGSp5eRBpMS4kEiMoVU",
  "key35": "2PZHDQ1suJvVwzGHT3E6sW3aLsva7dzZr9fQEk9uuy2u5Na55w7qP8Y6k1Q7ZEcsTYWv2pDV7XQ8f44qgo4HRKub",
  "key36": "34zYRJAYABMKLLmk7o8WkLEyMkGiduRX1NRneSkqwft9NB8ofnkmt93J1NfS9d1W7cWQzReYYDBjMBf6w5b6VgBT"
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
