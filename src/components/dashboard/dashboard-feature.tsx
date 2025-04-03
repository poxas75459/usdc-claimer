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
    "3xBi4RgohxhghfwrMQXod4oKUxA5cVvm2ekCVJzP7wXvNQ6NeAR2uTW6Dw4zqbHNLtQMabPu5Ci5DnbJXMj49LKQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xVnQSYdLW1zH4R6bzVRqVuTUYA7s5efcDiGeaFgeXuDRDsnQETMmSamos3M33n3A1Axc68rUr8J2Y73tgotMdZN",
  "key1": "4jhakM3vV8Kr1X5WJKoZrbYbue2dtQEpCbGV16WDHY9t14RxswJceAtARLQohD1rqMqCTkx3Bt2Vv8139YUXNVms",
  "key2": "4inR1KNnPc179MMo9RGKCR7AoUwTzq4g435vvKncSS1Km32KhbAimikfgK1JpFY7gXymRC4fndLGkSunc1fHYvNu",
  "key3": "4QF1sRWTDhU3cvnu7Psv2GiHmQzpJSg3qoBbrAU7ZD1grJ2oUZTzo8gVMTRhNpNKCc8tvyAYu5eW1rUgtguHDnqG",
  "key4": "5yGxExggsuF8R8SG9ai63MCiLTchD6mkiSnQvcVsBUrJsREf9ycdm97V4C5LJXFusJQpUBQXrqcETMbAKsWpmAqH",
  "key5": "37vPLPTYSG3DiFupiJat328je9DufZ2V3j4dSwCF4AFVMSTaq6hEv1tW7eQNxdFhsEqXYxjZwLvsvg57qnb7zDfD",
  "key6": "5MGTF2iVRpwVRmbQRjhhgyQAQgj1kFLa6RKtnwwbmBK7nhDc8hrtE4XpghN2cRqjgJyK1oUpVmS8vBmGKj1FKR9X",
  "key7": "4bKLiyq2bVMzq3FXAsQDA4XnUhcXJzqXjCAxHPsydTpo3R7qX5NHdWZ5G5adyQ5qZ7dQTUWWRj9Xf9uCJwZPezRc",
  "key8": "2yBmrjsnkgXj6iVFuXzDrTeSsWZ1GdGsePusyxewndkcaXeyM6nvcJMBkEqygkivmqQx5LmVzJEU1fvereaEhavB",
  "key9": "2JjYfoPBBnxu8GiDaZXaYtu2QFhAcD9aWsPwuJguqg1j4ECPavgNJcF76xAgkdH62vwEi6FChRT4fYHtMysudGr2",
  "key10": "8dbgmFPkvfXzL38e9koo9kPuFL6Y6Fe9wsJU2nBzLAt6EX5huGY3HEtKXR1yL9SYE85FGMUzhkEAPrvbbXPVhJo",
  "key11": "5xwUu7B9XQZPTGnyhk45EHvBPV6djBoJh8xqpjrsG1GFVbafWg8jteLFW4TAStaNBTsLEe8yBANiewJeiivpMyqX",
  "key12": "2ywYin4RQnfhsFUfPSAiQ6J1uoHhFtcYm8cYeyLt5igFoaMyGqiJ5tcWU37DDT8xLDQvUkqtLago69Bstz1JWMdF",
  "key13": "3A2MrvCRiZBYT2AJ18HyP5x7o6J6aJaSoz9ntjASamsWeyvLocMZLKuXmwTgQMuAukogNWaSqjHvZiS6KGUDSLnC",
  "key14": "CvbcqiYY3QG7mNK4FaKr1VCU5MC4eqBfPhhYTM5aNDKDQEKULQAR91tu2bifyeUiyssEkK3pKRSbagSGCoweLHG",
  "key15": "4pNianN8e1JtJzGKYXXhsmfwq39TiwsgHxrvRwwyb6jZNRsyjaz7sJGFvWaty8snVexgM2HeKBT3h4qa6vU2jTdb",
  "key16": "4NNJoS9SXtBVuKvFiSnprj1rnBrrKLvJhVywNA1TiPWXRVXB3J4zW2nPdtMP84qxQSH3wxqYA72v1bic8ErKUtvr",
  "key17": "4SwwS2SLojEKp6NvvnB7wZtjk7Pvp5QyD782Cpce8W7ZkfmvZr3xC9C5Tf5uWTcgA8YAnTXBxWmPy6zdzjn9nn5U",
  "key18": "4AWHmQEhtjp7GZwsG2AHxuGfQ6KKnX84ekmMYriw4q3r6LB4StxNH5bffd1P8M4kdXKLPn6WiSZc51T4doamK6sM",
  "key19": "44ksZHM1Zk4szzNdx3Gw2J6LYHKYnH9MLLiPAbaYxzYeYQnkZoi14wba3uHwihjMffH5DU6Sjc5xkmQtqQ9Rdtex",
  "key20": "4Uanjg2bxpUmjH97xiiL1eonb3MS7xC4vz7UdMWEzMsBzAzphxZViCDN7V9iF5amH4Mqg9Cqx3B8mWQxsBVmBag9",
  "key21": "37uSuBPk6ioc1jtHnsFViBC6iBHsUT3RJ397xzN8W4LEzdSbUdp1ouKBJnrwzNME584ZJRRQwSxWyJJhGdGvXeNE",
  "key22": "4LUu3DT7gGjc6vhn1rRTKACJTwbBLinrYwPZYo1WMfz9u7aeHGBqVqC5SfQsDKtZGfVRDPMwbngzE7bib3YzHME5",
  "key23": "49Jsf3hFg7rtgAXr4i9Emuc7g7RHkRjC1MNJQHF1c5RFrrNyn2cm5WPDC76krzfkzEDf86R77HTG1XWbamQVrv9Y",
  "key24": "5AsDhWea1u16drAKcmyr3fyVvLGr4jn6x8d5zdgmBBstariVGmo1p6eHqgRu3PmcVuXLpcb5mAcUn4NWyqrwCC9f",
  "key25": "3Tt1fRFboqo7mCKUikHdHDjHpDEsfwRr8MqNnYepzWmUqDvyBTHy8Sxj8rcjgxhZbMSnTwn9yTJU21rDGHiwjuDs",
  "key26": "3WLnrWmjFDNfzxdDznSeDxUkUPYN7ZDJMTDmReBeH86W2T9co2p9feZ9XFFWEpVXnQXBdFVyy6hQTRUZwQbFPwyN",
  "key27": "3GEqCKs5h5ei6EZekGogz5bGEFLid7g4q8YzmoyDJPTSyzr24zBjG5Nb4MUE5P9hvFdv55zWeQUKuEDkorn341HZ",
  "key28": "2ndbNKdBb5gwA1VLkziX18jPcPoTjjHNxr2R8UVgoLuWJ5PNmYKQJTydFw734MVeLaG85QAptuvEYeGH23m7A7ff",
  "key29": "odFbWkv49CDgWC76QqtPotsdt6fwHWUVMRxH83osvsaLFNNGT8WuTdRDYuCLm5R5Gh9gMpijzpohr1k28XtqChU",
  "key30": "3KyMLz4KsCxqbTALKfuBagoV5gTgjKeCyDUhAJe8euH9a5Kwrb24v61P65AbrZjXvaDBQWinD2FvR2oAKbeZhdji",
  "key31": "5PgXYHeZjJkoetAXjDnR2wZozL1YJwPfTshxAdVsWSujXfonzpahrZLxKMA8FHwT56C2d9ta6Cp4y68oTj9dXgku",
  "key32": "Q12WSvudqCmQ4rzHTdjffE8sTrreuKhguFRw3DC1jwfUQcpUfb2CsJ2qdYJBcKJKoXYhMCSw7t1fwE1p8iZcsvK",
  "key33": "326joPKaeZQfBfD3CecHPGz4p9VuwSYK9LcEcdT8ZSTxsRUbSWYuezt6qNuWVuuYHgJx212ePPxd6Edayyw3vYw8",
  "key34": "xY1hPg7bs7TqQY8yJY8aBomRynFNdvkF4eCCEuJrLmoySxtZVT4y7ybkRRY6xoQusSZUW3JVfQAS6BhYsRgtgFz",
  "key35": "3D1PqqGUTdg8gfj3ZRXwzpYjcjgC6NME3doc2cmUmuW9xnXLdmtB5DWZMiuAPSM7D9qtnaMXwXsF3mGuDYfjQcMf",
  "key36": "B5c7ZdaPYbEqYgx32LyNaRymvVUipqgwF5CKuTDgQqJkhyre68sWNUz8mb14kqhuJExRfPjSzbe4h6w2EwAJFUz"
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
