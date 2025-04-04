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
    "2nHHg8KXvUxPiaLEgFXz2b7asPNu1WTNVdPbxA1GLueqsE23vtfH6wfznhVHwtjGfKndvzzqZ3y7kvzXat9eXgKL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qCiQxg4wsUnSsHbgazVD8cd3iUPNQGXmzY38yxUnM1zkd8fMFixyrn6w4QeK8D2rAKn6hUQaJ2U64B55btfMpjq",
  "key1": "57MkoxZgrJ1CL3cKwFq1pLyYJyaVbUb1o8KFd9gUQcLjHKS9nXt7euav9XpaUy6911Pg6hMegXUvz5Gryy69vr68",
  "key2": "DimB6V2H6EUFJfVhqmh28nzvXnJazhinUW5UomW8iwW2cL9BJiA9pjPqJuAGoMkZuTzp4Byb7RYxCcYdTgvWT7n",
  "key3": "5X59QWTSJGPhkAaPLbBXdueMAi1YkAX9MethBJCtQQPZ2uBtdmTmW22mJSFa5NPWxkgAoTczjbQk7A6ySW1fUtWx",
  "key4": "qaeNYGthEoGVqzhFVd3gteCkgbZtrJkZ1BExratHmBZC3Wh2wr4ePUWdoVvwac2HetNzzkAaupcf3VMrHoWzGCg",
  "key5": "6uP3zHbnYARMKAzU12DFjhzk62YEJcs5G9MzjojWqRPWeajcyFkHjzjTBocwvE5EttJvcUvEWARseQaqbVC925F",
  "key6": "2CmRxC4CMfHqdayNDFbopVds4K4qcwS9iF6ZNsZNzLY6aF6hHA2FzyC3TeZN7B5oGVt6nz6hYdPZpnuUdkEni6Ki",
  "key7": "3McMecrNoWVwmck9w4vrKEBhKs5t67Qfn1TXfwZfxCo7DE2Ktpgq6EMp1rntW31D4AT3TwjnLVT6bGXjyXzPa9Cd",
  "key8": "5Cdx8AERNcF4Lt3RjRWkXcnVpyYzj8VadXkCLGrd9YaVq6xCPdkngLEpKLqnUx9iG8aPyWZX49odagvrHRZonDSz",
  "key9": "3s5XnjSoFHnbTznxehgCghC3oVt83Vi1tudyrj4TXAtRVGrvQ8DSjCtRC4PgtpHfpL8UWvQurdh7VHoHN1EPY8H6",
  "key10": "2NRG38uVLAxD7b5mG3FFeXnBQej7u4NLes5tFgpsetr1pb5Sxg9KtAxAc6myiSjHRYnttTRMxns3ZPhX7bBKBzdx",
  "key11": "4bqfXAjS2ASKjMWPEFdYhcbstv7NpfF2NCKbTh83NfGiLxHEBdyQhmMmcrWzFd3ySVzo48ppEfvMF8wNXgsetLWn",
  "key12": "4zAdv1T9FCxuxZUYPMX9QGU7RidvEi1EimK2QohzeZyg2WrkcT1c6mFHKShqRVtugWkfwHZDeGzrM83xADy8nJ34",
  "key13": "3e9GXZGd6j4117yzysgugVcxcoc9sfXcoGeaf3Aj6sRymTRHCC7KeZeMFnXHNUcfyvRHx876k6eDfa7eeetWHt1o",
  "key14": "2evto1joFkoKj4ZrhxYC8xooaTeSG38S9ts7KDb8dF9PJmi3yvhFdMHZ9UdApMyxX4a4aHcDSTEdjr9eQ3Fnj7V2",
  "key15": "5XApehVfyVPEcNvyeXDr1cSnriFjoq7Uub6imu7Tj86LrvqyBFDwwqrNMkuzgQqXwDakpCupuUNsiDFeTsmqXyEh",
  "key16": "3GEj18xQL5n3XMHETgZkhBMh8Tn2gixRYqeyQ5o76CKepNywrUnnwJw7afVHLTndj6UtAKmMbQx3FmcxC7MbLg4J",
  "key17": "UEjXcaaD1QsrPzsfUoPDcugmdzoFrwrB1VWT3Nurcip3Gev6Cu7e4Zzt7kWVoSoADfkHWzhYDE6BY7e8uBKBi6r",
  "key18": "4ZrykCE9dsScEQ4mogxbPXiXFYe7bSrShmvg9ZCLu8hejz6dZSKmrPA2FK6WMoqgLUPLhEoe9kiKYYbVFZvRJDwR",
  "key19": "9W1MT6qatBhvDBmfrTowkXiFBK9wMQPhfjZybS3SafpDTfNQDPAritLqwoTHQjdQ1sEeURUEuaMMjmkJmF5Wz9C",
  "key20": "3VtHwByrQ6krcB5vKPtL5Wtyw7ewn7jtwQ5fCrmkEX7ao5dkBkuricxq2fvp2QY4gUwLS8c8reZXJSsWMsL5MBoJ",
  "key21": "5EBhhLzb8gJkQY7J7b7G5YznpjqWKV6HTkccTW3dpeRdJN59nRLUtYxwb9xN3a1YeVrurw1okPDAt1NFuqF27d2C",
  "key22": "3q1mUGwidWa8e6z8rA7mGgp9YpesLcWDKfuA1ZaRPwhX3A63QvM43F9BZUDUdEibg3rXJgyZKR8nrqDfji3awUAR",
  "key23": "5epH1Vc12EhtMpRXNW94qZNdWTrPwjZYysmg5QzFaq8DS9rRY5bZH1MvTABbSCw4jN4tbRNT9ffBtk2e61shq1ad",
  "key24": "5fqaWbMAcdgUTYsDPrAp4kFTY3mGNz1HrFhmZSkJxW5bz4xEeNNrgvpKEVNA39X3uVBPQXDPcbpCTyrmuqjZjyKa",
  "key25": "5EtsQGEynUQ8DnCudsUsmiQYg2n3ur5eVPkj3SWWYmdZqyq3zF8nAbnVnNwDyAqGr7KFjyXGAqoneVgKk5Eat7WE",
  "key26": "52Ec36sCjuZ2c2gheeeDmVvhodicgnorhgadER72xwG3TsV86TZrYpkYnvKQCFfUyUff42V8m1YJJxPo17vm9V1z",
  "key27": "3Dd5twt2nt1bSLsQphijJR4bcTXLkWKZ4jpEm65qZ9ifkPQi5UEmBd8gkagbAtuEpCSUnys9qoYoCuajB5xdQw45",
  "key28": "2mh6MQEngV8AXUCabAjejSNC8qWynDtkQAj7ouE6qrdJN3MXuPFrvQKvHCVQm4Tm5zeCVGpJgJSAndtdHbqeG3fY",
  "key29": "2S9vEUthydwq3vv15dKoeXRm2krS2464GLenGS2QwxVnDpY1XbQJUHDvTRaNCzPzCG3EUVZKBVquzd1s55xYtMvQ",
  "key30": "64sV3kxVaU2mXbFCXWEDpuzQDGeYe7U5VSKAQwepAmejerwcoTbbcFQ5dQSZVTPoFyNP7fYvGqFtMwhPNRSWuckN",
  "key31": "4vAaX2Wgzh6ene6EY2UNnVJxjzkrqFSToSX8svrLg6nFc1CV2pKLC8Gt44nipFRmK7qjC4mkTPv2ENo15TpF86bY",
  "key32": "2qD14EGNNVfHkPYhDUQAK64YqVbjkUDP4mYT85xDLiMVW6c4RMkmvS7YcCkiRcFz3ym6AfNcYi82wyJiCbvETNRz",
  "key33": "4hSHNDFuv7JtTEC7UzCgXA9DwfrnWJhsHwkqg9bGCA8CPMKwsCAFXPFcBkPQLAGQ2avFotKHpDtweys9D2TMh32q",
  "key34": "5b5XkHgfxfs55ugmDiwkPArSB1UzFojf6LSVQrue4abYF5SNKXZvFzmDWnnnaw2mA2QYRRn7JZTmBtziyCAPqAMk",
  "key35": "3qx39Nhmr3HSJ2DZdn5zT57BvACRgo4LygvZTKuKmojRfVgznQ5SdqQ9eiy6K1ep7sECLMTD1KBcwx3YQGjzofVQ",
  "key36": "3BrXBhZorxGa2vLCAnRgQtfho11JXXdr7SAFgrSAzVTAXCq6QxtjtuuFeXHo49rz7wyL8M4B8yfRFk1aKb9NN7Ux",
  "key37": "3uNFAv7PXSrX5Lek6zGpyLKdsSPaQsXCD2Y1caUrMdSmGnu2MzKLcWo5G2d1tByPVwb41uaiEjADj6Bz78tHPxJy",
  "key38": "5FnkFYY8kqVRCAfF4rjBevocW7BFWYPaBhGu3mjLBLxxqipzWn5mqxDwsWWgUGosibzzkoViGz8UJT56fNNJjBGH",
  "key39": "4K8MnhhM3p1h3vnP4AbSyp178sgcdNUMuzwKv2Z7YkuyciKtfF5DbnZo7F3cHLTck6oSRcuW8jiVTmqTgMJGtxGV",
  "key40": "3sYsPLZwmhcAWCq2HLnssGEpW92cHfduYPw3hJrjvDA8jYPqFmMEBKnq2fwrDADu99uLC6UuuMgJ1h8L57uvjHxN",
  "key41": "4AnM7zQm1oFVs6HF8B5a6qGz6bV35f4QX6nNPyrCnwASSuUDgWX9QxG8q22s6yRadPdsA8S1TKgefmcQ7yFuLymJ",
  "key42": "3y3j5wuwf1JgH8DxKdC8hpEkUDpijs8eTHa34QGathqyWGCjPAM8ZCofr1Xg51fRVEWNE3L6GaEd7BezPaq33nLJ",
  "key43": "2ffAXzgmBE6Sp5rGf1EURDDb3eRDS9pWCt5B97EUjesNdgnaoMke3xBqvwzUcdZ1JDYHnKGo7eR2L8snPcQjrxqT"
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
