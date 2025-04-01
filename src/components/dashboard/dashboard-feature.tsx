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
    "3yuXTtSkzhPRVgpMuE6W89yWVDAybnuUw4t5X8nQEn5ZhejK9ACrY7btmrpn35FVASkC9ropmCAphfAwvGjemHNV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xtmHBo63vFHvyx1qBYJeCvTTYsv7ZzVnFe45zw8JvRH3t4ew4RC5w7mpy7tYaFxJwYzZg7PpxLjt73Ke3NcCKhL",
  "key1": "3fCLe2ba3UoDrK147RfVUZYRf34icWCu1DijuK8zLazXaPgJQ6Se5yxWHRkprQXMNwAGNmuMCAxYzaW9DdMn3CXL",
  "key2": "3yDYJad4mCvRDQ4hQWwAdH2shqM32LwKTzE7gWRECMUtQekFkj2MZ4Ck8pQFLWJkUjqoGpZJAafSQYHKqqnwyM5z",
  "key3": "2scdWzbewVFCw5K9kjSR3ZuZmraHno1Go87yym5gjEwiXqoigW1QTdk1P78pUDAXUm1hXCwkjyjZx5UBcRZetV3F",
  "key4": "5UuP6uzVr11rhp5R2TUbLsZWZXiKSFXdEVK7cmoGnfuQQ7vzXC4T9QTA6uGcKpCuMef3Y3gFc8akXQecbZx92xDz",
  "key5": "5DXWJ6Y1jPZmLBqryhC1m3PeK8QQ986rCatfguw68B7P6nEKxhfo3oZQ9CPP7vfGzSwJj6GX7ky3PtJXjCuyPmCt",
  "key6": "MzT8pQChcukRKzm9ygzRo3yBsFvBSVEX6xj6WQiQc61rC9P19uNi9LRnUVkTzguLWnJtvZMN1rPm57j1izTiSyZ",
  "key7": "5NmdrakyF4BKPKGAXtvLYxJ59qv3QWhwyxRNJdg1Wvawou5QNtVte1DuPNYuf3hg4gTmZ1MuWAEMJtdKW9bNsRix",
  "key8": "63hKJ4k5dwz5arA7SxxZpUjHfUgpszAUi8M4fGvQVvHvGxB7heGkGqATKzKczGHKkKCbUtPVukS5cKr9CZWuuQmh",
  "key9": "4pSfffmxcTtmG1t2KXr7Lvgc7kQN7bPXUjeUbCSMo1ZEmMDZZ1EuTmKNfUm2xjKVQVHue2vVKtgPp7nFgtHisiSV",
  "key10": "2HoDPqQKmvCJFEJY6yghXb9rmzRqBFrQNe2wjeR58LEziow9PZL1njzaPgq9KNwnyDYngs24th4eXoicfGtWzG17",
  "key11": "3kJf8Hi984QLCy2DqXC7iMsXx5PN86KEQSSCutz1dstZST1wRACJDM2bgkm65guGinofSKgHb6XDT8PhagjnrVaR",
  "key12": "4qtktmt8UXP5VwW91661dRLKbDXDwtj6HTiuzN5nwQzkDcqxymcBT6bX8wyNZ2TJCZ7qRpWLFHYDmDyQNqxoP36",
  "key13": "4yKJLNqq4T6tvMJKWUaoJ7Efu2SpxjfqwrBTXxGD3RPJ4M8BNTHzRaJVYEpbBV5PMBrTGZRZLJgNQSoiqHrt4Z9p",
  "key14": "3ruETGaxJCr8ZB7MysxyKiZrFHYjhCdzktLjKRn6iew5qXN1ms66DUJN8kv93foZ3DTb4m8UFRQ7if9BpKMqbdJN",
  "key15": "4ToVjgvZxj9Lund2Tmh64VXQAd4NTrEYXecWhYn1t3CQBQZmKy6hVqWhBErR9P3b2cSkV6c3Fw52E1u2TuWersX3",
  "key16": "58Hpx6C5cwfX6SBEJKPKECYRz2UJyCFUM6rYFRam6Ruap8VATy9KAiCrPFzqz5ExCFUjpQ3xDgtU8SMw18Kv4nde",
  "key17": "5jeyzjCNjbwpCB7FUEYqfz3wJc16mjNyPpfHAToeZ1wWra972zGtFaXZULwDu9khwYwRXbwWV4toCHueFxLR2F3p",
  "key18": "3c7cnUYo3cuTso5ZNKGCHjKTYyha4THqzrPMMjtagbBpguxsrFRoHi6KzKnesoidN3jpqWNtbazuKstzhGagpdHn",
  "key19": "2mr7vnv7LmqrZ1NgE6fehoSFo6sgzXijVwteyrkTNsmDbmkTQdzqPsydWXoiVHtAREZGHVat5XYApT45nX4ma3nT",
  "key20": "2mVAcDAEYLxUfj7Z9TEVR1K14Lcjser4uBPEWmWnANhMCZbhDKxVi2DJ83h92VmSaMzNALD1bJt4P9N7yhg2mafA",
  "key21": "4962iyY1xWPHWqACd4WfJUqQExdcAPBbP2GApFWvYjNkJHfR1nK5QixCTVPG2K8SVwn5mJ3mmoAJbgFHqMEi1539",
  "key22": "4tDCVC35aPE9NHKmY2abaH9JMAznpPTMZmCNgra8xknz93EPCik3svFpMUZTRcJxjNdHmdbS3qMZhawwhG8Qx4fM",
  "key23": "4BKDUxhQkD1PDiu2rdX5r6cv6C1yzQ3zm7yE1Siun5yuzLQpD4R2qjVUkuWGqAusuTcm6ignvkbLxJs3YeDbW1dz",
  "key24": "4Pxuo7yDCZ3AdSY4zfmfMkqdod1mq8Y38ZAiix17W2ZboAF5T7SYpKfETkBvkiYTmMTD83wi8zLm8h4dWZgGzdFS",
  "key25": "fTb8RQPVwJr2sBi1END8f2bxKHzky7Ydct93YFPDAMqyhmUb2XPwjAFjHAkXkoE9JJrNh8gjDYnJR7E1Ro51APE",
  "key26": "4ju8cunEgE4GfKbdoQttrG25uLhPnRRDVq6yrX3skEPmHR4du67Vp5iunHD1zDuFj27vmuTUoh7ASGxpi2xWBeCM",
  "key27": "kPGv3GfutQCfsyJgcXv1HcXUxbKXTLEp9b8uDxc2v7pfoXvEFixDVwgbCuoTR6F1w6upwvhHy2Rqe6E7RDM3vnd",
  "key28": "1QXrt66mFpxqpfzXWVWiZofcmvj1ymKe1tyBf3PZFwqX5WVTJKf3XN6zonkKPtPWQnuNq1YFGBkYm44EyJpXymE",
  "key29": "3qkTqFCahyA4hSMiJs8QPhW9wt4Vza3N2KJ18dPKZ8AtCQLaq7zj6BeovQMBZTY2MQpiQWsg6DuZqXCU7vHNkRPf",
  "key30": "2EZtK2MCaS8CxPXtVc34DvT1tPp6YNYq5kiGPjdyG8M1XvsiD6rszyqDLfjHATq5HC1bS8tbA69KCRxaPgVdKBBX",
  "key31": "4VRUEnVpLYYw67MCKixS1DTh28YsxZfpZ3mCk98rVMSEVai5niKjshCfpzF9LY3MgGhbz6CP8aFP9NyJ3G2PqBfJ",
  "key32": "2PQe7LThrizBfHcuERrKTmyyVWu7knbm6giH6W8PYvdoAzD9dJceA9iBWH67h3TRNR174MfmB5LeoRSBqq1HMQLw",
  "key33": "48iDcNVAaQcgRZUQ2unBHzZZiAr1Lcf5R6GPMFVVM46jk4xZFWtZ5XkQaQUceuRkX4P9swZzS6HSDrgJH5EauohC",
  "key34": "4n6TUJw4eNKwEXTHe5Cbm6dLSUv4h65JWgXZtXrokY4XnyPHFYPnEk8esHj1GryNYHzs95CzCyAaMGByufF2Fs7q",
  "key35": "3dPXL7Wt2rPsN4tfsm7D1JfJJpA3yU4A24Wr8NRPm1qhqyjmcf5AtX6XSxhaqnBWc96Zu8gNVgdK4BgN1UnKEntZ",
  "key36": "4qmS2pKEMYaJraTKnMNWEb49DHtwX4jXyNrwfPsbNikpUueXhBTRDThHnP2q7MugX3FmdYBApNCKcR1nZTMffbP1",
  "key37": "4EdfAEXLXfJfYhaZb38G3584QhioJpPu3UmHD9qLF7FDWsS6YU3ELPkPCdxrerms3qHoVXdrsv1zaEoLVMMjagvy",
  "key38": "5QTfFtt5MmR1duRN7quTvPFzzs8eMLdeoKL2FH81BKhvgEFh72Pyet5P5iwztm4R4nrHk8WYZsC9QbYWKKSuaHMG",
  "key39": "DCXenjBVJT9ja784T4fGy1uc5kfqsmzFx7yFnju2PzHaKMBiE8AD6nCeXfiDZpoCpHuNWh8nLJPgrmct5Gj6RZb",
  "key40": "2eVLfRysxG4wcMvtMWYaEYrL6wahT6XZeEPRnMzeBB5yBk46og6rzPukbkdkBEkCw1qG7AG626TsjMDAhgHsnU9S",
  "key41": "2vFnrU4SYiD11rVvD3ncvav2riRFuuuCnG7YpNyV6WsM1sUJjhCXKXaKB4qk2RajvGXq81XbD214Li25TfzUpXZ2",
  "key42": "53hcfQs8L2HW4fnxJAyeAThJzrChi1fdTDuf5zuVC3Pn6YNiHbGii5TMBqNW9bf2mrWwFRrewCoGdQW1SbveAnjA",
  "key43": "4KZoj6RwqFhPkNZSFG2z9hStkuwCVeQ2EcPC8ttJNNcHK9MbBBeBzEbQUfBJ9Emr9vq9YjUZdrFGCs7g6yndjbu5",
  "key44": "3e2xzKWN1jtfzSYcsee1KcuqoXUtC8CbDaXxrpi6XHFgfJYHJbBbvpZMQCikLBwyh5KkWNRGFJHYpKRU5RVaqwzc",
  "key45": "4nxFooJ9cmLHRvkzm8pngf183wrWh5EXj8TX5XRSNHLGkMudDbGdDu9TxCQ7tdfiQ3G1BoQndSi5t7xYURAzRDH9",
  "key46": "57GjdxrH25cF2u3Jqb6Zet6a39bcLF9KXfWsvrHDc56TuVZFtf1RcEjnWMorG451DZwr2JY1fx1WwRqY3X9WMeVL",
  "key47": "2GVVHCcqEQzAMTDLTMeQawzPDDyCZEFZESAYU1KJYNtPMnFWY1vtCq7UNrLGgEb2RbN86DAh1VVoF112fgtm6c1R"
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
