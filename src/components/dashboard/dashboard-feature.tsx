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
    "2qFkEx8g7DzCaou3vbALfNqYajWuihMHsVH8J3ShmwwhakGvL8tXJJsQ9XfDhxQTAHQfbjmYBRGn3J9WPwaFMMtg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UJ2wQPyTwnWyHCNESEBYkKDjG8kvztswjBpzxhR93Ag2QE45kzp5D7kQ19geJrr8a4bANpCYARW1KHm5FVHHc88",
  "key1": "3zKv8FBDvsDjeQDZpkqbxsdX9rLex9J1NLTgZ4iNA4uQPBm3hMk4SgDrviqHkEwP434WJk2ULghHv3Z1wkd7DzXb",
  "key2": "31qc3V1pJjUGBxgTgyd85SPnrYvchC2KZCfgiohxiohKKxUnyNE7WPnoivgboCexCjfctgV3pKLdbqp4bWF1SSLw",
  "key3": "5rc3sF91LF1RdWPeFfq9uPRNFiphxqJAmao1d7dpYPmJtKNp5WsjKVi6W1ngZ3zzyqSMtaC4kPqdR4ghWbPxVA4z",
  "key4": "3W8i4FsYonMvjuM9WcoHfJncrZHQwEEHoyk2zGdxpjfPj1RSLWWEKV8R9ZVQuHtVKV9hNssRMVYzRfB2ugC5hqk1",
  "key5": "3wQMUVYqRfCof4RMfXH4Hte1zFcLLrakyDf51YBbodmE25dFHwJpnnNayJaxDQQmEfgTT6wPJZPTTh5r8Fd4vTAf",
  "key6": "4o6iURcoDNJijsf2KXofaMvKTrdkGAFgMP2fGv3bYDCZCMS3sPGfxACtyFdaRZSNmDMWXiKUfrc6JX3z7aYKhFgu",
  "key7": "4pBMxzs4QFH5vtTib2tFKEopMYmgaNY8Ycn8fDN7FoPwS5iMRq1TaQEbE8qFwUagsjmAgYJ5M3QmqM6mLz4hj5z2",
  "key8": "s6AiVKVCSe4sH422vuvGQUz7DULL6zxm5dF98ZL4yiZ5Ui92FcmAW8oYevkPvJL7SR83pCN5jXBDEikUDr26kBK",
  "key9": "3St7tJS6mCsuDhRQfxFmaphPxp87rYQ2YWtf7c6qGXF9EpcDg2ddBah3eqDzR8YpPpKKKfiRaaYuKcQHQ5ETAgiR",
  "key10": "5PMLM9XBCvQjNjiA6Kr8LRFomMA6ivwJmVQDCf9G2KUphySYLMLrPp8kayibeu2impAUdeyRLwpJVMTp5frx71JS",
  "key11": "2zGc7m7HtDdSRYWn7Yi1j2j3J1GmqKSV7muRxbJ5SKkW3pCQr58hPaR4EJZTxc5oXYYqUXaYTxh8VdWuQVq3s4R9",
  "key12": "4AjPsqfvdW6JYzmKoW9Xwsurd1p9zwhKKKmp9Hr9ZCXq2BFBhc1pFZH7JhYjoUkAzK7j7L3fH2GxSieTSrtKTY7U",
  "key13": "3UrtBHXLiCMtU4vXiZ1MAKznt1BKSAM4tpRSQVynYCVC4VBxkqbdW8nUx8D6MSmTwbxgyvFTCyii6PCDhmkmu1q3",
  "key14": "4XiCsJsKgBHSW9E4rSxkouikXbK9379tWrvenhsA69VVYtDjyprPD94u1L6QmK5T8bbk5z3sJxxPC8HKenomQc7p",
  "key15": "4TdRCoc8iKGq1Y4J2duYLiNMRmgVts8iZ7ZrqYxXNgVK1WDXVVxb4uLR3iorqv9cvrXp8oMF7RwqFt9nfzzfkVoZ",
  "key16": "dLBYPRFfQWFBqnWiWqjVY19W9X3FfpHLBFPnYkSXx49oRHkPuZUsUAxr6XQUpuiPMxhTmhYPLb91ifuxpAvAhjK",
  "key17": "v9SXyTTFT6yYeSkSR6sCRfw8EqfpWX74RjbjR69jCcX355K4ekfEN1jRb8BdTqRLHZUmFwBwyAK5vPHHCBW3xud",
  "key18": "4RpawGmTupZG8dvnyQg1uGiS3efcTwKrxdHqHii5orAUNgpMvmFJKFbA8ziSmHjHMrpFTSgzU4m98VCrGnfEeqLi",
  "key19": "41FirMfRP4R63ndQCF8TeCZiBUtfqRPLT3eou1oMZ1CN2WHAaMAUkNqZwmJa3C7WkxhW9sEDAaFw4iZ1iXYVP6Rr",
  "key20": "5rt7s3W189z6UqFz5DBxftRgyJ8A7rEbfHiesdzthJJPTBcoj4q94gXqUaPFynYtq5ex7hcpdDPRgaK4dK7R9szT",
  "key21": "3vgBP829KbRTLvEmpyqhWMb1r6RE53QxXy1VdYm93Dzsy3PiAy3zWKU6jThfbvrm7jvwCKfSKJ3CHLRBY1FiEqZA",
  "key22": "5PMBPRAZ3cj6sCqFamr1CUu6yRcg6TbKBWc99TRutFUfzzwvznyoJDERjrFB9yoJhiECLwzwBa6bs3DpW9m6hpDr",
  "key23": "o1KESgwX9td85DqRDoJVjwmhFLNW3QQfwPZVRzVGSdeJBUmPkQPViJEgtops46yaGY2ofhTSgAejxuN7t5WsmoN",
  "key24": "WbwofdMcoiUSZ5V5uc7A7U7DysMnTHohgPC76wzfhXctwsi3pD94HNLG8ff9917psSEG8fae5hkU7pjJ9WVnb7x",
  "key25": "5vYQRRKBe4rNoRPQHTtk4tg3vsY8V21zTGkeGBwMhJdDoiaVCSfipBqJVcY3kGMnSJcGnUe5gFiQ9pBth5j74Q5L",
  "key26": "3MomApUbkWy1ERCKHbUw331pzG2bfniHqVKfurDhdAg5cymeyCFehWrrvbW7U2KxTwrRrqEVFPbpC5wAiJ3URgxY",
  "key27": "5QAfZrw7494t27jJ9rh4172X8aJ2azyZwvRQgrhfxAfkYAJzW5nLnpV2sEEzRxPDJdua461G8yYhU5k1UKg1jZa5",
  "key28": "5YaxUB5ypbqiTLeYrmGnw35RsKZxEV4WDUvRprMynLq1G7vJNFwoFXHMnE1yTPpdgLN2nXjUA43dUEDokAz6yuiC",
  "key29": "4UZaVT5a5M1M6XZ6fcwHDFeudByDkaNhUkdpPRFseAtbPkk79srgKFiRJZXmyBHxBfJk4DyJyqAJpLLD7gBK7Z9Z",
  "key30": "6zVR2nQYUaKJA4z13itZDphGCdXCoNQS1qJcaABdf474YAXtYDF9BMVsb3bvoFagHQ5DK1Q9QLC3UQrMuY2EeSt",
  "key31": "2bknks28axn1AiaH3VLSur15vcwKYwWFDs2mfgptY5zkjAah8FYkwsKSw26hzRk7XWfHvMEVsrpL6BfMVN2D87yy",
  "key32": "3tnmTfiSFW7kC6Q6yB7GTVnjMfSJ2nKwhc58P4gn7JC5wWguvHgddf32QnE4FT1z8rVjDPk3A8P3tccg6QcBEsUr",
  "key33": "5tz15ShCGWb1oTogdUd3YTyPr2okYN5z9zYmp4EJc7Ey4cxoRwL3vRmfwHHGdTuWpEdd4D4RxhvPui9SFRCdmo8u",
  "key34": "2eL7UdQepH53UdLNFJpsJjcxjfbiJp5oCJ1DHATWHmuUwC7Pq2ArSva1KEmUt5vHH4Z6TaRGZHRNyYPkUtmQwZgP",
  "key35": "2mNdNVLBLtFMdpMGtv27qczHsEigxhdL6yVmiJqyeUFkSYRjnwxjxZ8i9jLqZhz1SE1eTBpmDmsoWsCyrjMapNQq",
  "key36": "4KT3nEP5FwGX1k1RNo5N2deKHMF6wnndwoYT6FfncDcsgttoQ3vh1cH23ttaKwwPuku6fMPgzQqmB8T8Wi2u11ZM",
  "key37": "yb3TiN19Cq7nQYVdBBHZ4DvmQ9nCtjuYGkMyZbspLNy2uNQMybv6YvasertxAahaCpr6B39tJxz9iTLFs9r1MuE",
  "key38": "2yFBQNdwkQx7FFEEL5zeRjWW6gEqWBoyKhRVATT1vQfo5Sp7uJZGa28aSrurBHYeL9EmiYVmPHWbjwLi1vpi6U36",
  "key39": "3EZb53jtDaTUxbsgbYjGA3RHNJ7iaNQ12JWYtnxqT1Hz7gRXDVMA6gyiGptZdN5dYXvGRa8nxm9c4Vq6skHyRVir",
  "key40": "2pvcacky8ozaKdk5et2fqBjirmynXardQDWYWv5E3U6JK2oHHSA6LsWtTBsiVBWkFKFqdzNfbBCaDsipeGbWTkRV",
  "key41": "64XwtaEordenehoeX6Jpa6LHf1AEZ4zkqV4V7yJpPiJxnXvnopQyxVVkgXFZHwLZxzwKX8KqM5uK5FvseQ1nA6XB",
  "key42": "hhchVfbzTViaQZbfyKiFD8EAFe8RGGbDtJk321kJ4tJoyceocQY7mecCq5moshPYhGePaTahNVLyJ5CuvHGFsuX",
  "key43": "bgoHpujESXXgjwhCGC5XL8Mf3cR8CCnuMMqiJpYcsuXcspq6Eyn2PMtFn2ZeVs7HGYEEkgTQgCue5u4cx8UgiKD",
  "key44": "2EDCCmhtuYsJB69yeJSp5zyVaTHfT3PnRHcGhT4KUk1de5To4MHS4GEsZs13oGo9WZvDNimQ62SUZwWnFowJsZ9M",
  "key45": "3FWppCoevtrBwwNSwWkGMxCZKN3wg8FXE77LDyRk7FTQ5QJ1ULEHhRgaVQAheaykXKFCNAemgUQunBE1iUeyj2Rg",
  "key46": "4NAdDDNSSFe3Ye41fKpu3v1vLzHvLvArucPVfbbExTUWXpMViysUQcAPgugDkD58R4n44vBcWNUr6ZNd13VqCNrN",
  "key47": "2WSrMdEg5KxW6yqWSCwjcsiu2wHdSEaNWJiDEixV761cpjSdFvSCtksiRXN5CesVHvpn3jUombeBTY6SRjhsh2JF",
  "key48": "qgYSXKU1NDf6t4WNvh58ZnfgfMZ7uvNHc3UK4zia5MPXiAi5wuWbKSuJ1go4P6uR9StUsschFUqT3tNm1xqQFCy"
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
