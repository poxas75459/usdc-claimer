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
    "iaEEj3zJgQRufiKrsUY7r87sFM8mt7txwH8aotJAaJCj5D1WqGxkjJieJWAMfVYF9ha5Px5xxXbC5ajr7z9TKWE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xCVpRQ7veeKJQtNfUMBPZ9epb6vv9KJbZDrEpVt9hBxGMB8GB8dS92dgEDncjgyb38idWnDy4ePCwbzMBeyQQzs",
  "key1": "5vrB11kQXEDnR9FscDVSb8FiTRSSk94c37DU9syJNv5XWMvuusnWE9GE54iCXhkuUUC32n27kjiiZ7XDcunq756H",
  "key2": "5tX7Ez3w9bxcvYDqey2ZeLDU6CuA7y4rt1ooNbZM2rDwLP5SqGqXgwXCXdnDr8M2tfUnw4rEiXy9up6X7yuLAMtw",
  "key3": "2jSDDwUAa3NKsFbMdXWU6MixnsAKFnEMdDMnMP7YhZfBbDUJHpNHnEKDnBgf6KwoxrigEnmoySDAUSYPkLKuSCTg",
  "key4": "3Hp4g7rG2rhVMmLipZ8WZ1v1cxEitxR4p6AS3CqUs3Vxn4XeR1BKE7Vq51H9rGanVgfQVsQx8entsEYeZSMjviKC",
  "key5": "5ZTDiDqvGM2T2RP6YiUVcfWb3SaUFFPdYVp299bs3F8eVvuR7GK9i97vwWCFA5pWYYtQr8HDLNAZoHXn1fYdWyEJ",
  "key6": "wz2v4qXH62SopucAjiyAn1v1H6MPTex5n4Wk4gFFhfFivNysHh8KM1enJ7kDEQsoggSoQwCcW2FMjcwKJeeDDn8",
  "key7": "25fzAxz3kiJRYkWaD9WHqkXKJ8vv9a5i6TE5qZGy93PkmaKzwRAWeomozaybcKHUbQXMnFSK2pQSuAb5WUPMMaz3",
  "key8": "5B3hqsGbJaUM7igiLfjkxcx1a8CDcFT6N1uZmUAQ2ZyFQ9ftQUAwCMEEwoqfRv5mUYBT5pVpUoKYUmFjoRhEiX6z",
  "key9": "2PZNnYUTFAEGmXAGHSviqugtmqLW9zzvBXuv7NdDfrCT8a6J42ecMnPQexQiJEn7LV4LWM3ygn8EC5B2vhPa8XwE",
  "key10": "3tX5hf1x86R6rvNmPPLY97kVqL8V4KpsAvW3jqEK16StsdDbquQCkBNh8Hy3LrkrDWafk4XX1RFvyRowBLtstKTE",
  "key11": "4iXVrEkn2PVGiKet8rZSpLsxvBndfo8LaCQ2dEg8r8okMMcyMFHwNyDF4KMxqpLAucFGEecMXbDs8tU2ZU8CBkSJ",
  "key12": "3Aec4cY8qGFe3DjyV36cFQBsorZsGd28rDzbRwNkkuVkHT7huRAAHXXD7CYGT6yJ2ooTSVftnZ5m88A4XoJpcPKh",
  "key13": "5jdQxFZGPCy4rMT9SY3DRBd9qe1MGZLE5K5vCNJrLBUERXjGmrkWyKycaSSSJ2Gjk5X4HXZEfxBx8ApGHAdua1zd",
  "key14": "4ZkCYrS8ty9ynhkbZuC94LK6NDdMozera9nwcbuYQ41pkcXwMgoPz6iVwBzecoHhjqFzBovAxnsXLa1oKyezcpup",
  "key15": "ntagAvHstZqUxT7Mz8dpWeCKQK4EfHELxZvLXcTxkitVqzgX6GKAZTeWLVdencGrDdAMqu9RaRk7h7CxBtc3PxX",
  "key16": "iyYor1DcGbv8j7ujDyhYqKLQHTRrnqC1hT6MUYAgfzF5xe63hdNpcZ632b9UzgSch54tNdLvT4NgsGs2esxp8up",
  "key17": "6FtriXBKhrAebgdVm17WUSxJ2jLwnxFATgNbrUU68YLBMGA8yDZWPDKskkeu2GwHZEVG4bWJ3xfZ75i9ZnqYGGt",
  "key18": "4tzBTpvTbMWFomhBWwcuifycr6pyNAwCztnSEWCV3xFrxivjfcFwRVCp5nNxkSrBFgKtkCQvp5gTTLFc2nnEsVwW",
  "key19": "4ujfTHuzjkC2tYTapunoj5fTNYgdrn1YPgTwXnbxGkkVENX1gndSy2M33EEr8XQKpw9SB3KHrgyT5cqaKHWTajYb",
  "key20": "MivHoB9VUUoBmW4gM7GCBGdNrSqN7SCEJFbqyx2w5vwAiR5biYG1KZbDpRjiFrvbE6pk8SzFD2disCQeG9sQ1TH",
  "key21": "2nYZwPPiLRynuF7nBAgVxBPHrTk5Y42RB4jjpNvzTh4g5EvhEmkjK2Z7Kg3g5yM7bZeJjL3xwAfvmGJWmjCwZjZp",
  "key22": "3Jk9dazWEdkUY7vozkTduz757A6BhVvnVE9c9VQNppva4x5cUbAyttou6fXg1AcjtuLCVwhQPTDBvvpGCyqsN7Va",
  "key23": "5deJ7bMDWuWpZ2cfGd9wZ6rhiZEZLojEwLMiEVAHArC7wRd63U9vwuiZArGojbDZmcJdUTCtECqDafJ2py9qWTSL",
  "key24": "2zmH8kT8moS8aCj4FJbfQtZEPCYavRenfnEdsTLV9QoU7aFSwvF2hgXMX2Sg4S33EDyjvxTScwPV4D9NRftTh4J3",
  "key25": "5Y8N9brTt7aBft6mJj6ejxGF5eBtf6ZMWJySfHjQuqyFHF7aK4LSXqxfsg3vyBWgNroEvRiZP1xdC7rwpuUKKsht",
  "key26": "5KLPowNjd9vtrnRoJ9DbjBKDnkKGmMyUADocu2HDdcnJRXNEbs2ocVhtZebQVVanQZyFZFi9vfBxhF59zKzLxj4M",
  "key27": "QDN7mcSmNZwzdVdDTRP5JyKmnYL9AtHzmemoUBX1rQNNe7VTfJd8QgVoWPBExvyYiyu7WCAsDZU6sR9JAGD9MVc",
  "key28": "PYWp44oUKtDzcZRcr3Md985XjpvQUFfHHKB1TwcfsjwA8wQ3PXCJ5d9EkXJKQFg2mq5gdREcyhL9DwBsXsJEvho",
  "key29": "4PXvkvsNP79E87Kb4WVWiFWXTGdqd7SBMhrtJ5iPo7bD885HrfekrwikmfSZWy8j5bHR5kK2u17FJkQKzHn76aQT",
  "key30": "5jnWqNW3qo2h6S4e3PedzCpvpDDN7aKDhyrK6fsz7VPGMTWG7eWWZgbKTMQB131yaBNgsM8XaSaLiqMRPrFe2yw8",
  "key31": "4FqhBrAKkYxBdafkmejzNsPMmKbFC4pxoi1sSrE6LyYoLp6LXLYZamRFkmL6WDvpDWyx2fKnCC336eQPeZQJjXgk",
  "key32": "AmJ9UmzSA8m9pjyU1vUTEsadFxNaNZWdGgq2S24vcgLXrYhvaEncBFaKd8gDcBxneduG9jsh3dSB1hZy1WVjpFe",
  "key33": "4muRGHspYKEixGqhaddwvvBhPbB1PuJGpifiVohzYkBykTqpj4BLNeWPqMvkNHnwHVeDE6Hfjrqc1PThQsxJkJ5y",
  "key34": "3rzrrWr1TRmyc3AfaYRxuJYGd1fQP2b7YEJwiKQeZyRfm7SNGZ9mNc5QhVPeRJXfYG94RLzmT9F6n7kawDxXofoi",
  "key35": "3nZana5pNyHj7V8hoVVqynrq4Ursc3W6TZa67vSJ91fx4FTXR9oWHQUjT3adqNnmmPMvzbZGyEfsKmFx8rHGysZU",
  "key36": "4whaS1mA3KHEyc4Q7d7nECvvXAPqBkHkXsvrkEFVtQiTqxHLfMFxjALRX9MnZBz5SYH7PMxM3na3pKea9EQAsH6q",
  "key37": "4gR1Up6HjNNsfAAfrkwHibYHRX3xToazvn6XhPwKMZmV2f4mGQme2qeciaeMLjzQnxgT3uCHSiPK6uUMSKpTG5SV",
  "key38": "KRZXdJs5fdCSAXohZB2iU6pzHY9w6kTmLCBPcLMaZS1PZcUtXMNE6ky9i8ayvEotg3oG9EPiYFS3LfnxHvL1Ppn",
  "key39": "3quB4rkvdYgWkYgdViBDAm75SJWJqU49BcygDiWTVEyyQjD33nC1xNvQA9P7H51GcRSqjmEv7FH8tcckKaQY9px1",
  "key40": "2pGY3P8gPVys1tAJF99ACVDSSS8jViqG4ANYu8y74SxZUFNm9u7ChZBARV3WBmXkdErzc1o2nZDgJfBeBQtbx9DY",
  "key41": "2agjb4T42Pt8BuzwyyK62igFDheETGKL2Zhx93Q6QoSYP3421SYzU9mEGzZK8r7rzBrRQN65rsqofA5zEYYXuYGM",
  "key42": "2sJy7hrstvasyMwkuUUKRKGafanEEb4uqAumjrxdjUPm6RJ2So6iXhUFkouzK4dvH8ckQXMEBRrnTaxphhBqFLXb",
  "key43": "5actj5AHPYYibmWQnRbM7p7J3MSiVGsEvRQTfhCpR55KXeALwQEhAoytAfKqPjQKuFtMx2JFGLufNVKcfA2QsUSr",
  "key44": "4eTGc2G6bhMqviGvpL8jcH3bgDaYG57ZbiwGn9AHDK74aB5nfJdKUBgP8U8gRadRARnPqaHsGpN6Nex2iXJYt93",
  "key45": "oWkU1nurRxLk6x2cmfnS4NmSDVMxu8jWe6C3UXd56HYAbyoCrcgrqWaSznSUbyU1jzDZ7GWzCt8ypCcKubHmPxh"
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
