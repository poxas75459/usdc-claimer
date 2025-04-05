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
    "4MesJmuVyzTi7GWfeQnz2uFhTY6rSNLQP5zNh5HZCDeLkriqKJTgtSu2UXrYSktDRjFoHh2PQEWS2ya4joB6CsHK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44W12BcdWFL1nmAmQU8oR4wkeQGqBLmHF45E2wSYYxgw5tQJDvVLtpsBXLbmk4zXsE2VgWmmtqPbzq8ncVhqCrG2",
  "key1": "2s3d47ruQhqf5dwG6feN8m1havuyYksPVV3iLX1KAsD3wUrStLhNuVScVCGTbHEQkWF5XsPKW5cy6shb2FGziTTH",
  "key2": "4cbmrb1pKG4CvXwcG43nbHfzAApsBfhrtMUkEwG12Yk1fJMQvwvpDoBYej4NVRjA7gJ2wTs8e5vzjnNwdnUwbwG9",
  "key3": "46Uozj51ikpGK2PnjojqzsJdGWUiVYGmRJnqCo2Fqm9J1VPsMTyM1whpu4bhKXSpZRSc5FXhMQFVJ77ipxQEJsYo",
  "key4": "3pATStd6Yz1WCpGZTtmb8FXwiFvUFEi6KWg4ikz6mx6PYtJrvYCC4FgJUV55v8L3f64m4rWoaJ4BjtpaoDmaaZfV",
  "key5": "4zGKZkUaQfKi42B59mMuvnxtSze1fQbgyDPUVyeSTSoYQCvMabqz7pm5nkM4jTyTawoeeXCbHY9mPhPDtVduSi6D",
  "key6": "4w93oCnjJvqyybHvbG3jH3EyYcNLboH8TKaY6qb8r16zjNzvSdWJMmJPgra9nvXDcpSmQHcFtDdN4P8UdJjeMgM",
  "key7": "5Vzb6Yyo1yFocwrWnrCB4Y9K395fPhPYcnDnw1EwVAHU9AYZVqmNz9gGSbjhNMqxMSF3VCGRYMs1v7MYyZj6iEFW",
  "key8": "3sPKHBDjeUvb2PTuHU41MMCBNM3VhncGetb5ki91DhGxbbKNoq4jnviamM2yX6ZHwKmnj8EM8y8UuH84jbj5LHcg",
  "key9": "Kb8YrQ1sPRtuS3oHvfvpQwtYjmaQkw3uJWjJgsiDzkqmDgW4uKZRp2BdyaAxkvkm4tRCiZepvrNnzNbWHEev6cL",
  "key10": "ZV27ayHbFsZsgEc6tKxQMFSftzJpU22xN6C71VN1f6xqyzmPGvBEDwLinHW72VEtsHFvkjUqWVv5L7hG1qyBR5P",
  "key11": "42fNKW4WrY1GZtPFqAn7sRdHkBbz8WGMtY4iqhtsjJ5AxD3oymR8duMsyFu2sx2dcrvQBJhoT7g2HQyK6tmzxkiN",
  "key12": "VjssdiygsmDFbyaGs83FZuDdsbpYyxMXaz487cN2enxe3zxBhgXiZDJNwsRXMgJCcc4JZcyVY7JqjKX1f6jZw2T",
  "key13": "2APcoiCXHvywTDeH9BGNYpYqn1P6o1juwJwFrc3PzyGNqazKDpwDZeVRbNpKHs5CT71mbFKU4eS7MraFPfSos8wh",
  "key14": "4iuvzhDpYgqyJobx5NP7AzdeZLKFrXouDxQM8fCcavecz5TfYzncga4greSCKyFbdTJcPvWMrkHK9KTy5vVyRsFr",
  "key15": "5KC4h9AJsnnEUqnq9GSwncpVAFJesDBcLK2Jd11qbP5g5B9cZ4cy2Q2YCeEynZJhtvL2QStwUpjadysuxkWD7zt3",
  "key16": "XwdCQMW9qihR4UDw5NYc1EnXy1rywh2n27YmxuJrtFNXH21yQHKeZnCLa1woyZLyLijMjqgp7MX4DZN5WzkH27A",
  "key17": "2T9jU8YuB6uJLCuLvDK4LndHRokAA9zpgNuPmYdySTwtVRwmrhzyqWXJQHxWJ2Gn3R4KkaBTYQA3ZifsGrEfEVye",
  "key18": "23YgpR9k2mvoPGzK1AfnBC6vzUNicSDv9unz1CtUpYZxG9bgaNwR6g6WZvxnh5gXBRtz5ePSjg45SV4Yayo3fAh3",
  "key19": "4RgDbf6kbA2YAPWMc8UnVtFuqFQehjGpfupumDyAaM6Yb1UXEnt2Gu3ufkhWKE9EASBJHurCNXi4dMFY8bNLhgMt",
  "key20": "23h2vBA998o1coZDxeh5z2m32Xf5efTvY6wCdSdKZ6FRTGbMS8de92hGvoCsGjP4BqWQ9VbZDwBpDSFvk1UnBt81",
  "key21": "bRipxMh5AmpFz9WEYAi6m5hZ38mJCMcG1Yg52xzE6C5b1d2DCRoZAf138rqwiR8mHqBcE5F8BeSMR2iBK9MZGBy",
  "key22": "NEkMtrfZ53657rtmiPz5uQWvSkJcj9sbGD28XvFsTSaxxTZHVaD3q7NSDd1Y8DJU9mMD24jtHo539VXpH5sz3dx",
  "key23": "2TjUqy1tR1fGV6bi94nhtRB5kcag9bZ7tBduGQrL8Urh5SGgWeA5oSphs3kGXrYpSZ9ayt7CNdwgPW66AYAMqnjo",
  "key24": "52og5UXCfNeZS8xP1Ftw9GoFUjfexSGiCQvfGz4xqTWPTWFRm7u9Kcz6B72XiVVaXPz2EcYmWjeNWUru5mFEB2ka",
  "key25": "4jurB6Kadf1W95GcJ1v8cJFQvHu7wEjDSxuQbELZfierBrEhugunKrQb816GQezpRHUc5pJzAeB497eoqaKAJZFi",
  "key26": "2oMVESm9BfvT1idbH1P2woQW2wd5ABfBbxq13gbiNfbtm35FNhvhF5jMp6gNfeGwTHTBmzC8FqchHYMcJ9ENjjDQ",
  "key27": "39BKFBzJmdxj3zv7ai3BxF61aAScyNMGQEgsd2EbM7h29JVpRrjQ7r4E9mDucwgwG7ZVbipacKTrUyDP9te6gFnN",
  "key28": "549kKyK2vx8Cxeq8mGqcyYGJYHWEbdYrQ2ED84oPym2YsQt6pKzhKH84gdUawgDV4qYUAZ8twicpUn6tEuD7tPT7",
  "key29": "i2KaNnXDDK1CZ4fUN3XR3CAcPpQZu972p2jkkF2AwFL2kMyreanpwD24huMHwmT5HG5nX4wNw8SetmwAD3rtyev",
  "key30": "3YUNS7RxCseJ52gSmNBTch3VSkBiNJSXhTifPF44K7idsjaWUAoY8GRPfx6Gx3khMNnSEbAzU3bEstyBgGYpcK7q",
  "key31": "2nTjTCcANqi3hAeeGLoRJ8mXGg5cU5jhr5TUqGy1xtk7p9E1kGiiw33FeD7i8P4wjmF36855ShRB8PmjaohLAfZy",
  "key32": "57dcbE7bnvTt6C4qXQzGodUdXRbxx713a7rjUZwjZhYMp8vWFVTS8hV3nqkQFRmr74BPpPLy7xPkCbJjShuEs632",
  "key33": "2PVtHZzmq3US1jFo34ntWPhV24ZxJfffVJmFtacDG6GQidwbzjudAEr9TZffTdRcxiP8uucJ3RiXaBvzYGtsyCv",
  "key34": "5FLf4YKr5pmhhq4HjcTZyW5NUaNpykJnzUE5sqJfAi2UW6Y2dxg5aKK3iR8e9NXiFaKB6gEWcWmGXQgVBJoM3EYT",
  "key35": "2j3miyaP52YNzF3NT8NDRRsH6KqU8SS3kMZgWUn3Z4W5wTmTGfdG35jBZMRkiGWehjn31BQB1nBUbZV1cAGwVZg7",
  "key36": "2thjxgjRk94xSNZSjXLUL2FEMGwNXikBdg7beLeE6VFJYXeX5oRW9ihuCpKM6JEf6LRfjvkNBuZgeMeXn5xb8vMo"
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
