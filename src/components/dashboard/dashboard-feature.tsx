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
    "pAgDzeCnDgxwKDGSZwhuJsj2tS3qXCh4DBxFyR3i1tZMhLKDmJUr4J6ixqeqwHcYmbb54kwfMqKv75LNMCToQCH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "doGMtxzoe1tKabX9psaGmbHECFopirYQXzYpVWs8cikX5xLaf7M9YGdKFDSHWUCEokbBTh6DRuW5W6w6TXVWVE3",
  "key1": "NSAfxg4o6gDaKhgEquoMzDFTEHfuFP7DQpExPJxrPVR4sEJPYx9cREZi2rPJwwvLevbiZC45aMkvHr8Lj2dytmj",
  "key2": "5T51LGZAy4WvGxaQXWrNheiDjQM54tQduLTTdtoCNrxHbf9W1h7MmMCaYLE2siqTWzmS766RKuUbBgRXNcQXek32",
  "key3": "3GdoZ9KM2yvBfMsePw6vWMG3QbfLph78S3K8n1ujpWZvxbucihmcDMM7siRjqk3iQFcHNF3gy8EEEmD5v3RryZne",
  "key4": "2sHFmsFeQD3bwKY8ZJdPJyEAyTKqqChTZLiLzFhPjP8M9kmSP8e9L2LUETxXD7srR6yJSwa4PBbmq5zU7NwRgHZP",
  "key5": "5K9kPKx1awU36PeNQXhwZnmHMLFRjzgSVb1xQL23MUzWAfTLmVtEHJDCFsLoaXsZG4tcDBBDRsM2G4mqZybs68Wy",
  "key6": "YBqUwdjQajbwmSMioE4oebdANgbT2u6x8suHu48kBXUQKKQxuxbq6S5DSLNnmnk1Xg8LfJrMavw4hfsbFpAfPs3",
  "key7": "4FVxjqoqZJ7nb48EdPDzcV671XUfBuM2jkMpmSGka4gg7EurQnNeBke2ojmBDH1nXMSy97xv463trqQBjY8Ndi1r",
  "key8": "5JnWBN8fcUf1HTASEUKJ7z6dzkGi6uyhVhCG7P8KcyMFD6QokZuY2EnKRUWQbKD326P5kVJmgkExUBqdeQ5WMFcf",
  "key9": "mivzriyrQt4PdYsbc7t944oQ8PvR2o9zthnkEehmDnsvfgSwbqeFM2EBbgKkFJZFQqH7SRF9jTBRuEqu6bebHPY",
  "key10": "cj2LnyvUqgMm9Xj4KtpxRtZ3icMMMNNTkYgNAab6r7MapFjBRfrgoUoiHSV2JF66yaFXUW2q5h6ZHA5rSJMWxFV",
  "key11": "2hWQA7u9RQcJYYzLAPZ8bsEBd4UQw3ZPucf5RfsCDZ5q6dc6GyWHFwDBBkyX698qFd3rZRGpjRMDouafBYMWxX8o",
  "key12": "5DnAUe1st9GoyqcCHyJkE3ezRnjskUFMCV4SAYwh6r7NasSvgXp4CddsMyyjaoC8N7BZ4HzdatxmdaB6B4mgsjVX",
  "key13": "42zhMSSxEAb8Q1P2X8pTrmvk9qtaViwGfBVEKzzZNwcsJVVUZQmnw5PfKb9vtynkRrNkg77sCcwpN9LjNV6MNb9D",
  "key14": "3Fsc94cDmKGGr2oswnAnKmFJwQTAWtHajvyzv9LSP8eCM1D5owU5P6DrdATfxJz4gXba1Tvu8gi49ez7bEtFECnY",
  "key15": "4w3rVv2RLs2X74HCSw5vnw6g2p4JB3gBY79KrjgwbZpj5MWXvjq5s8P7HS3g6krLVgHveZgGG3ZNbaPWiJfHcEUd",
  "key16": "2baPjepqtpkQF9buAEdMb2DseTpyhtodkQrgsdsqs5jEAMMvJC9TvwiNEkH63NoBrPYsgfofUh64BqQBAQ7r1XJb",
  "key17": "3TzmYJWfqaBQk13RxKRxRCVLXxD32FVVXP2jwSGXJJYkdrBdV6kUeE7Chy8v4M4QB6puVA9cwaDBj2mpss3DAx3R",
  "key18": "26eivssabEwz4uBsanZvERiE1NVBp2Zt2NpKvM3cisp5yecWoEZaoBM4poiCa9bTG5H81XB6H7DECdwcMuqR2oM6",
  "key19": "esQZTsrDwuxsXVpkW8z7KAUrLrQrZ82aZNNXJ1fgcPUxh6JEe5sG6MXyRbiQmH9XKbAAJDkuUsmua7FehDsi5zF",
  "key20": "4ZqjUB3PUk5fXh1P8a8ieDD2EXDk2nJrPhEqJKDkSKycAEKfaRUVnGHBaeNw4c2R9gVeFgMDivjTMoQQj98AHtNi",
  "key21": "37HaqV5aWM8pvy629S5G6xasC6KGZvB6XW4CrRqontRbZccbBVSGgkAPmhDkMzPdUP2YvzAyG4Wbfsn9jbPg7qNU",
  "key22": "5txBHPRYXGBatCxhaaacVuBRVdfzBaX18FNPCkYpjQwhvbitXaJMnybJGzZQJFHcCBQSuhv7k4oZdn2veXvuSv9W",
  "key23": "2Yj5697rq1uCdmr1c6QBP2XLvhSMegXt2bAvWp6MPtvjSwUZXXPpBeLAQ35xQj3jsee3Ew4tfRQ7tLjjZdnD9p5v",
  "key24": "21USeJzNn7WMh2Z8XxEU6QmBcVQdLPuBLufsAEJHwgEN6e8mauYegZb5N7KJmHm7sgHAabKqG5yuvE7iqyRoe7h6",
  "key25": "3cQyiMgjK2MK8yKirkG7bK8tJ9bJpnLhAxSLThmzcdzKTAPtETVYbZsyrceZAnmaeNd9vvXyhYhKNH4845BCetYm",
  "key26": "2cZZV78yDf3uLHMgoCxjL2jFAtYFsMjfSiVtddGLGQfHN6Gdn72qYh2uwSx2H5s1mC899Pi1NpgBkJXRV77atkUW",
  "key27": "GV3UCxoB1xzJbG3aadoRu3mtwnwdMWZbgTeN9fR3BUqYMiNwa5D1mmSQRnnLhshG88E7KwULtuuKXPVmeZihsnj",
  "key28": "3ChRevNh6Wrr11B4x287EMS41hoNVow94Xj5ZW96SCB71QAADw63pZVrrgS2AeVWBWkQ587tPtYkhymuRpSdVr7q",
  "key29": "2mbSAEXHq1rFnHiXE7XkXmgbYDf5sBMV9uUYyGkC3LX9bhfEDFEYqsWYzuscHUFWECJwN7mSVq1772dtvkFJyrhR",
  "key30": "41wVfz5yNYFNoXTMHd5LRwL8rU4cd54A3WxsgKjco2h1ygyLwaRw5ejeNGdwP9hBMTfddGC4kTbxYfttCjVRkhnx",
  "key31": "5kEDo7LPiDZLR7irc5sc4hPf4VUFBJZNRAuzEBsSEaY4vZxtwNtEdSGqmu42BFzrCjJ4QnDAogJHhjLGZunBXf3W",
  "key32": "2FLB7zRusmE4DAFKavsjtX3U9KmLg3XguqF3aYGqB9rXUDdUGLRMLDfpHTVMFjnCyU1WjAYx2g8ukysHATTzLatY",
  "key33": "2XCSHvjaEdinAHc8BZ32TXfZkikvkqBR2eUySQCodwpPnoKJd5XwXqhpdGQDR2QaSvUzBqw1MhsRyoXCJGLkTNjp",
  "key34": "5G5NCNFRNyhEM9EZLCqaJyLwXaXy7R2KW3C37S3z3MC8diuUQm3xFkeRzQmFJDMXM4Khh2LcStVp2BvHaCCWUFtZ",
  "key35": "2qZRW91PAair5uDDrrYx6VyNcJPS1SgiQw71iec4WNuuozEo4UKVDk3TgzMraiRBJRWGAXGHw2fb54YJzgSGG81b"
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
