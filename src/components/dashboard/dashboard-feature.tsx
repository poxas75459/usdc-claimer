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
    "2qkAHABvm2VaGWkKynuWVNYPrfSsx9NaiWXYshgkF8VK4Zmc41QzaKqYV58gETP8ehgty1jukNbmj4vpUYS2nnfx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LUhoiUbdS2XHjFcT61P7WKjnDEYAnYSvs7N18fXra4p24SX6arGEXitbnBQXoCL6cuG5fRGRDbzFfLAUoVrLnVu",
  "key1": "4Tur913MScWF9WrD39haxJeQQ7rd1N9qcD1F3yJxCeUbQX7pjHEBxoVKHfkRNArgeCiVBZCz4a9fFJhx4boqywS8",
  "key2": "3q3NLU9RWcuvQsnve6XnFRUjPZ56A5CzwMXAK1ex2xfojs1BDLtDSeUbcpLWpcvKJioWJhMucbgfhG7WhWwTDm3E",
  "key3": "5AW94gYAyZeW8F4JTmydS2mvpQrLLn4RZNwHHBnEGcwfz3UzG264UKYxib2idgudaaSQwUt7ikzebvMPdKeRkzEg",
  "key4": "564JfQJJY7awmZPyndbD7kbB2iM3BkSjhXKnvYHC9HVfeqM4jf5vDZeTrT4EyLAoLoSt1mP46BdYTTczXLPgeYyj",
  "key5": "4UMsQcuaTR5VUPVKqeSdiFt2rW4U3XNnp68BTg4fWTc32QAKQQ7h2vRC8zrq87whZN9zrG54wX3sMc3TkgTZvZb3",
  "key6": "5RHE7AftXZZXWW61mHgzx3KeT6FK9gLpcHfBynAcnJRYCzHmhghEKJQMKYuSLzj6DDnXnrBBBiqcsNMWzwK2ikWf",
  "key7": "y23B2fMFRVtGhpP5FW1RzT6dAY6bmgmWnzW6c1YrDHYYG8VgHXz66N7CDmZQm5KqnFG83dW7VdnQVbMvwm2tVG3",
  "key8": "LvQ97jgRQnaEKGW1mB8bmyUvMECvdUEaKqf8zrCXgLVJYbEvSm7wYgtGjUvrY3KY6KhtrFp2oed32bJSiMMAKi2",
  "key9": "4GGsUdbA7ZgSgPE1AzW6k9wGc1GgoUY9zZJVd3vHF82BrfnnfBFXxhPBDd1obKFVUfWEVZ5nrYpKpp3utJDnj4Yy",
  "key10": "5URewGAFYtmqG4orfAz1QB9BgU9aZMnR24H8iNNtK8N27HxLL5LfsMWUJ4vxaAuXot1AEquwAckhCw1evxJiwpmv",
  "key11": "5uSuQtLRKAntFrSMm6fMHxzhQgU7vcKPTsxHkLMgLNtyaYkZyChiHSVoCbRHV4ofBC9gkpZLdSnbdREqBHro24mx",
  "key12": "2TeiHN9LAC4KKc8Z2NpnCNuZTRJ6XmifY25SKZY91iJ7YhUzQtfDP2R7Y1rFPNFZF51cbDJQSdniMTwst9CxdsrU",
  "key13": "4iqTUjypUjACuh5YwCgKxxDDrEbVYwQ3rWnhWK6PuXCiwBwQFjBCNWSsYEeob2UXQjnNYBnUnbXyU41xtxnR8Wmh",
  "key14": "LAUhpyMSuNXP4btH7arvpENXZNNTbAKMoeMVUiTRV8zNvGCkqp8CB2hVqm7p1PR9CW4E3ipAJ8ZLZmtwsFwnQCx",
  "key15": "2u9udEPdMyZcboSYRZTjnA1dH1nVwtYijjyeLT4xt2BssGDpjta8udkoi5hj5SZ7STK3q3mmAM4JLxyBAy5UCMVC",
  "key16": "3BBcePDFqaYjjwXxU7m9pPdvGJaCRggshQhPHbdPjsMgfSwGVCEt2LRQ5wuWRXbY4RevNSr52WcGB7mMpnnySqGu",
  "key17": "2rK5myhrCeLtpGaATgSQT2vt6dnPPLTzb8mkdP3x2o1tKmqBH6mo2Mb2thJZ4NERZDtGjyRkXP7fBKiiLyBEtu5V",
  "key18": "rt8CZLQDpVBJmnxd8jZYKpFNw5FsNMYZ9Lm16Fpa6m9jFvpMKy2syC5h3tEkmpnPQKuAjoku3jubrLCobPqjC2p",
  "key19": "P1wCzEr6ByjxcvztVpXh98kSC1t6wB9os4qBzS4BdUmnj6LGNrMF1d8Zf8RuMYSZt9Up3JHnzjtHjhBWLbDvGtw",
  "key20": "4Z6nug5xqa5zdqbKhMq58rWN8VwQYFunnfBW4TwZmtn6r4MtYE3vUtm34upwfXMNygxyzYt5UZUs2FKVSWihYCwr",
  "key21": "5a4sToKq2P9k4KWcTTNNRykXKocd88cCMysm8VBxRHNHMKENNRMoCbydmLif3dokkcXR4L2UYvqbPU4yDDrxfRFB",
  "key22": "4hYcyLTeCaZSX9rdfjn5pXpj4qapTUDxeczxBDFz2jDXqDnj3qPjdgERGg9Lx67eUBhfYDg9zWwJ662d9V3SpHN2",
  "key23": "39NKR6trARKWnQsaRAvqqbyq9kytRZLjAuVJv3nzhVQcPWphwaXNVeZfVsjAf9oVMTwN6g3SpLP5mb3ztSqZgRsv",
  "key24": "5jf5KruT92HGvFJY4qfQq3HCWf9EKLY7ZZemBvPSaVvzjcmKsLVdwAMT23FFXuh6dc4dSKqc7XuXsZEt9sdzo5XK",
  "key25": "3gHQnpvmVfiyxZTbh3TwpGiVsnCDLA3voias5TfF3hDi4DZn3WLb6eZvGFA6tm1CXRdGo9et8CZKXG2RNt7k6w9r",
  "key26": "28jb6m2rWjkuu4an5Mf43qEFSiqsQecBZYAG4MZoSnpXmAY2Wwd5V434gf4hMhhSNuJMNYkgKuvkvTnYZyuRbjXe",
  "key27": "3NMKNLAZN8m74ikFfE91RtqDikLEng2WnVRXKNskgmpcHM9BhhHCcxhxfVmFMt4L5Zm89BUCFHEt8sTuk2TZNEsE",
  "key28": "iy15ncYY24Ngw4GK7Qgxcrp7Vscsd8hPts6tsms7B51sXNjUJuJFHCipPJkeYcByg26MEfjr8FUr9nt5tMCUDrB",
  "key29": "2kVooUADPFHua9M5qzCzra1RiNkAmqeJGCep2655wVfWn8JpviqgrDXzrpLH445RVdN5vqhBygRNTPxzBnnLa18Y",
  "key30": "33kVxWPWvzsQBjF931WLcv99LSt6xKoU8X1E1xVoj7qkS9EX6zgAvYPiYxdqFg2rhB9MnFDpCgxAAvMXVVMvxCB1",
  "key31": "5wTgiwT5mBZ5g83XWvEvLMgUQqrnBT4DMiTdQJnhdXK32FH92MsAuCuwcNrHasUSwVTa2uTMckbyWaNcERpaK2HH",
  "key32": "4RvgtBqtYqNzYczr9xWnU7nEAbWgBJEnBVPSZvAqbpcvsKjbuCNHMZegsMdmQe8jW7zNiZepABWouVEZnnBqQa6Q",
  "key33": "3Sj2XdceYxe6MYRqPQ1JyLVZNPCuMHthedsJiiTiqbhnKMs7hiNp3hFnfSnq1bYhU3ZysYuU9DjYBbMxA86zZQav",
  "key34": "5w8fYGptruEHprh5DzLujTgoyTBudrEu2NgLkobgaFVmSF5CxEp8FEY1mtfXyrkeBkDpHPoLjbQDzSw6cg2xo22e",
  "key35": "5rYht9WH1GGG1tBYb8x53vxWvcHAur3GqF51cP67NQJPJHaV5W2dPQsrwRyFmWZgJ4atQz3nDKLzAppGKsJZUyys",
  "key36": "5fWsGxLXd81ptzftgiVuQhLmCMKbxVQVdMW5ucwPWfYTs84TZsZoRADW8mXHMpj6j7V7PXnGXJV7RHymVKBLLQZo"
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
