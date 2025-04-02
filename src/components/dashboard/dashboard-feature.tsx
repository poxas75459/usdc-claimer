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
    "4BnCbKuXgfhWsypC2ZVfEQPWkCU5djG1MM1aTmVhwfYSXNZAuYeLbq9VowgnFjkK6qPLejSeYhkRtdSvh4rzgLHe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cdJocxD2Dm6YfABeNgfP9FPuCTmeDtteQ51op5EHvSgd4A5uVxi9ZFzmfC2gHGQT4nQcdANJ99v4RemShasPTpT",
  "key1": "4vQC9c6Vkg5teiaXMEqmxi2eJf6mKUc9wVevummH5SKmP4YnMteCPxYoPFiNAQZ4AnAcXBX6ptkWmkssvGp4aqtH",
  "key2": "8d81PDFPFtejtE8JXwXx45jsuQMU2uhnJvZ4rw2nHaAcb6v9uhQxxnrzyMAvc4aC4Nwrd8Dsu9AQ3p4Wz4wQ2CU",
  "key3": "YJme5mUDEpWoS3Jkd6U5RmP59cxEHFXyTVJ233yebnN2bCegQHfsv36jB9wu19Gmo1XNepzVxYjG4G9zekZNdTZ",
  "key4": "5CkjZLYCRCJ5dAQJ1CGHAsKnJjhxeNyLA4kr9xTMBRCeUEyAuPQxTk6k2LF2SCfArLnF3JvgREDUjBSDChT3rSx",
  "key5": "4FBPtwhKaJdqrmd4tMDbxf4a1yEEATzG1PbK2yRwvwYcSd5SP4FtBtFqXff8pBLExicVcVrvnoapAmaVhf1P8f8K",
  "key6": "R5Sb6AwM5Dcmrb7dfbcwCZrNYLi4h5YKaJUj9nxXnzpEm1pLHXh3VS8QHPojqmDckQyAi5ouyT4te8PWquqdQcW",
  "key7": "5hoQTD3En7j4uaLjjZQQvcUGhGMTUe6kgXP9anEoFMGrD6cFSE47DHPqPo1EeqivRgnej2jpDGafnF7JeUjXvrCC",
  "key8": "48G71aTcFygbb7n6YE77yXZZEWuKHUvnvX3Rf7CN69hDyqVWJinGKn8vi2x5WzjPJy5T9QqiucyMxhLedd9dAa2",
  "key9": "52JDArrrTLDxHvv1qbTXVTVz9QGbFqirpCGCtWD3fd32BytPCKJV4KQvbp99weBJnVcEbToSLtg66dPTtCUehkg6",
  "key10": "5vid3MS4a7FSirzRJCvsdwTrRXPat8PWk1TXXcznV7X22DKkLR9itiFKDdC1ib4Rf3dGMQqa7ntQxsovpXCpqRyW",
  "key11": "TdZA2qy2udUWDhHebQxRrEmuQrfX8mnvKtMNQHtUbqmN2exAwvFUueYU4zUvxMT9UxYrZRwMgEaRMR1fZjXCt5t",
  "key12": "2s9vst2oJPGgWHv46VNHZ1EoqvuPRdbv5nzNx4c1Y6jKkziqoWqmsz1zJUyaUyZjhM5NvXAcHDLE5DhPfWRwNsAT",
  "key13": "3wQnZkogfUwwDo3QV7AyaVBhQ5phTtX5d6DsQBzTYMSBvFZTb8X3HAEFshbeAdZCpwLsTjqomBb4TDcfkQMdmDTW",
  "key14": "5LZRezob84wNQuCzLULYJdrY5vgxFsZKfbffVWxUno9heC9hkidXwAU8oy7dE17WozUsGquBKNFLMUE2946y192h",
  "key15": "5fHJrDoQPtu5Lh6ZLgboWFLrcoXsehjJhDHBwQMcN89KrMYQEYL9Z6yW5vEGdKnjnSgNjYbJMhQY7e81pmm7aLW9",
  "key16": "2UesUeb5V9d2UZmGQrdMzn4D8u867EGXCgbVUHgPb9YMSK4RvfE3ZYyGiTCdB9Q78Q7dXRZuMuVumZRG4mHjvkSE",
  "key17": "3k8pCgbvMekonAc2KQyRQxTUZsvYxViho9NZzCryNBW2fevAoMfe6B7jkTxQJjLodxTbWg1hNRxniFxfuHov8QWK",
  "key18": "2etKyvCP2zRrzMLmu74m42M5NZK3cvGpMyu8iFaAZ4sEKKH1EbiCz6Bae7YF67cATG354sK27UAFvJkcN55gHh3r",
  "key19": "4KadSUMdFjmbQiQQ51VT8bcJnQsbfvMrboVxmFtLfy5S4WjWxDZf4SvNseZPwddP9mh7yREjThZbyBfFQr55RMxm",
  "key20": "4KQ2MSJ3nyK5GvbB1ZeM9Beu5p5ZZrkStA4YDRF5SQvttG8DJKcSjDcbSa4WFAq1YERvnDewPERRbMVAfNSqkABQ",
  "key21": "5vXXGr7uiJzxkiWR6wJMLp9uFUFZJwYUzNRqUujz9RQpJEByh53p2B1fyngtA1e7AWJgrtb1g4iZUzHzzDDK512g",
  "key22": "TjuErikK4AkaQrFFj6pyLRt4EXWNxA8pSmiJErvsNLL36DiB5v57Bd36SGCkKNf2x4LR3rgJZyVJRi5TJnLdMuT",
  "key23": "WBH9Fp9bRW4hdron32xen58JFCfzSqud7ivRg8P3Rzqpk5xpfgXYMQNbCHfyDuVryadpsekG9pfqpnGomK2S9Kd",
  "key24": "2EpPG2oCaDTWhiwmGGtYEY6GAoq8N12gyF8zUaRs6YU5BYTUky5h2TRARA28vEQ9KUR43kM3C4PWVProvmmGRb1i",
  "key25": "5fTU9K5AKXcahhPNW8c3zHE7Mtc1rchWvXFLoeBhhGeKcRnKh91f56XV3FTRQGro9iXkhzcgYchesR592D4Si74Y",
  "key26": "3JeRqNp5FDkUCynKRJxUWatZZ8X9Dw1RKaEw2KT2xCEaT8eay8Fo2FXu3XLo3kzU9YnPeXxkcYA1hr4U3GaBUdbG",
  "key27": "2WZ9CVZfFdtHBhMrmPRQBFYo3YvMCiQAfxjXgyXWYXt886XnFQqv4bauJHQ3jYbquqxiyr35DHridScwYHAEAYNt",
  "key28": "5cYfMeHWPUv21F5iitdakSDQ1Ji62RnR2jRkTkUDtvVeVmxyuLv75SsMcJpX8K7RwQHoWDxYgh7u12BUsLkZvoyH",
  "key29": "ZkBjbtjVNYCArcHeWmCad6RbjHVAJQbKfe3fDEtQt2ibgo7LPqmLe4ePv1nE1V2afkNghZHdw9nqSPMHRjR23jc",
  "key30": "rfZfkUsFfGg7RJmdXKJQtsLMPjHjxACDagpxfbAySej2VwwxxGRKx9L8NWxqnY81PkgXGCh3rs1MAS5CfDeZp51",
  "key31": "53ErDtNN53BBhLLTatwB52eLyXYZUhjdpCprzAkRJj7SbLxGUgaDyToMsnTdQvnwJkj5bx97P9pWtD2YMNPiN6P3",
  "key32": "3JFfazAa9J58u5oeugWnHp4L3EPiZeF6cUe6E8e5YyQV7FZK287rDCKiNG6SvKEbVnm9dptzE5raCnUpTsFcEUZF",
  "key33": "Cms87Sxwj8kSZWS9BiuCCbFK3HEJ8kDXs1K43ffGWBL7i4TWEpv6Pzy7FeCyPQoSxumsxVch1CSKi7LjKiaGWkd",
  "key34": "YCuvdnv1SK9naxLhD7mziR1r6bS2dm5zGZfZiApz987ubys1xRMoK2xLJ45tnuyCSB3rTkTXCbaCHfLD8FA4Dgm",
  "key35": "Ld2UhrHQaW6oKtnZCswTzCo41CRjGSLmbDUEWJpvRCAYF2F8hTpxFTFVrbCMkPPA2kuzSzW9YiimKmz3gzMcWHw",
  "key36": "46nct3JPHeDqeTZ3cGZMaHbmUZEJkC1woTabAEDf3fVvSkWSsLu1cVUGh7vh3XfKri5SvbvwV3HQqD5AZKCj2YrD",
  "key37": "2BsupCH1GQVPGVNHDxVuyr1oagf7FwniTRhHNof64Rdeti6YaVVN7JAFVyrkxBWHW1QUwCf7Zsk5xUVa9K5PReeT",
  "key38": "3BMi5bwzJnChhmrEh4tjs14i9JbxCBfGn4enXCRU4CwMBk4sj4EgzsA87cNZdaQAhJUG4dUTgQWy2Fnv8qkoFZPU",
  "key39": "2Ew8XmQmCWe8UMeMaXn5rnTLeE7osNCfab5w2kkPDMbWy1S2G7hC8Pf9ysqyfy926hfxKA4EwfrWjUVdx6brZZRU",
  "key40": "5sKN17Wpr7Pyazz7By4hmvGMq5xCPrWKgsTUAd5yvhG7w4b4Y8AtCT6vk4LZXS1DbtNffT3iNWSmPsMeaXbbKkkH",
  "key41": "3jnEqRJ4oHf4NW1Y83imbpN4ZqiZahuZahzac6PX1y7J9JyXrf5hjHSVvMTampe5mjSPHL5PTtZjStnKzXLRxA9G",
  "key42": "41q7STNsBovpbQ1KHJ1XqKgu6ttBynJFhTExHA14km7e4pZmWYXLU5Xh8x4wMCZ7d29w3kt9ANGZ8zAGbEgjq5Lk",
  "key43": "2FfRbrqo6S77RwS926v6fsbHAxnYDHJyhmSd2qaaFKQL4XgbqdMRgo2TnV8jyUqjcyMH9K7zDp728Vav3fCrMPj4",
  "key44": "2uxHGyAhR2xfXoYEDaJ83fmayPdngJ2HLv5YGGVPwWs9RwBBCDzdZKQxELBx9sqH8g8HvoQLvZfRj6fYBRPMqCJa",
  "key45": "48up1qFmzFhLj3qPALPFgjvz719YAWnwXttx4R5PNuwBSM4atiL54R3F5eSDQC1V9x4xbLZZMEU8qKvpENDz3uV1",
  "key46": "4chRD9TMR9hYpi6G2oL936eUUDscPXn2AvBvqP4TrLzLuKipzTo4hvVexptiHgWFhLHaeLAQmM96nyjy4oneWLh5",
  "key47": "HH5P3WWQ9L8PCQotvFFVsQEZC1uA3eNwwGRPa8kdzwoVUgCBM36ojJkGv7NWrKwXwKsm9tYPjLP6pBrTaqjXLgn",
  "key48": "4cEwdJYEr7VaNEhyMF4aPF7PSEuvWAxTRfgQ5pRzWg8JbMVWwhrUUwf8NUJDkCyvpAtebw15uaD4NCAu2sct7GGi",
  "key49": "5pX9tV5bifpmCKWLfNsUJKRqLc3eWPGdzGxgWmVMo92yR8wF5M56VcR1nWa2zkjYvEJ3XZCiE9xHVHdEVA6KpBm4"
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
