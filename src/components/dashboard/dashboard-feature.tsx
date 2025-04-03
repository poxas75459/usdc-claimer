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
    "5eWH1QV5Dh9ufmQzMEZQziH2foymxTsgajG6A5Yy5oHWyopBXzMoAuY5fVUAu46Mb8FybvquzodiDuKjPP1Zo3cB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25yBaNtfbM77mXCdrqMuUWwUGGVeSn7TRH3cFxU6vgZogebCWNrLfGp92uXjR2uh8mzuTw54FCPX8XaWhRa1URFK",
  "key1": "2jYyXYWF3naWR45wCF713qxpCfoNVbstw2Qkyrp6MJPUiixpHw7LkaxV62msantk77Qzq9BY6ckaTgjxq3vDkyRa",
  "key2": "2XKhKfTNp9yEQ8oCqHJK1DC4X6ZX459KEX3NEXaTfvPPj7G9xT9q1eRiXbfBCZBUqYF3aDSnyY9chJXvbxXeLZjL",
  "key3": "3rUKvhwu3C5Lu69e7tfzQLAFHq1Pziw2KZD7NiBxN87GPbULbHTSRKE4TcBAwWmQYUYFEDNvg1xSPbXnwxhTQrfe",
  "key4": "5X4d8J6XwhGFNytvYmi16h2ooHaLaLiQ7B8LUF9wQvMxoK3jxdhCVnkS6P7tDQUaHB2B7QouG13D3vEcFYEDyayy",
  "key5": "MYib8A8RE9jTpqqZ6dsJ1Api9pYVvBomtfXyrqwexjZBXf3t5KyjUwgTTp313UGVHtqdhkfwe63p8AxPQU8CwCt",
  "key6": "3WvzD7BvCCGMewgYVCGmuTTHk6PckS7w1SVweXygigKp6fWE1WtYJZ8oPEmQCgpXxDrFyAgZvj7FNPWkyaMW3eH1",
  "key7": "27dgFBATLf1rtEzPZsJNLRsoABZBqu3WRXYCqvVn1k8ELVumxZ3tgH3KRPLFVVigZo1beyMyPXMZYkoNXetKcUPh",
  "key8": "B8f5Jwtc4g3GYaPQdcRMmKfLpKAZBfkVdip8yQjM8YK6D4kqgBZ5ezBj1sGssWNH99uCB1YiqxpTCbEyVJZoPaN",
  "key9": "2Qfd3KUs9Kuru33MHK2mxp2fgXCD1ndc63jouEunnU9Zzdub5vgtja2Q9hhaupH1iRHeraDHs2EqgjuD37hrg3qw",
  "key10": "38Tm2zGopoeoCTJUuFRQt2YXLouTtKArVYBRVuHZQvLb6csAgiWU5fUTktHhQfwvsBtwt3cdrt6VbCNAyJ9k6xya",
  "key11": "2n4WDU7XJ6mR6GWRZz5CQhQZfeNn46KvBFTPjZnDNKRrNM1Mu12uUC28Z6QiXqYN7sgtskmDB5hdqLSLjWyTVyya",
  "key12": "5pJKxwMxmJWDsnCWp7xQWSEPgMgU3cF3j3bwreKB3J6C7UFME9ibuuqX6BqUcNr2jb3BYNGCFnHvkKEp4S4oUtMZ",
  "key13": "5ns6TRUhCZiWpgKXtUhBbVPKqjGKLyvQhPS6ZMM7r73JqiDsFy6p5skE523wgyQ7UUQBMXwuMsghHty8TYqVy6vc",
  "key14": "Bt2DfiJ6xQES8fZKmVSygwwcyuWvf5MamWSRETgQ2Si3Vdt1F1Lo3WQX75Lgn2UKTwBSjRieWnk1YpBmrnPF43A",
  "key15": "5W8W4dP7V8rgq8zRujq1ijSigCQ7uASiq9iViWewp6WLxrmNGQKHbQt3fLqz92Ldud3EGF9etkK2r32xJEgK5XF2",
  "key16": "4aZa7suGevX2vbXBDWuvpGzY9VVZESsj1441BhnxitoBbDEQaFVghbxTFh46DpyQU351ysoqKRYagaV648yx1sSB",
  "key17": "EBKQfNrZzzAgthFeW2SXh8x3QN4jNmWByJWA3L4h5t3qASrgxHc11QbdqVeACQmBXpTkNxdhDozVngdqeSZjiyR",
  "key18": "4mNcumMHcRSYi6SsryzdE12pfoidsyqP3tjvmCCmmgU2gs8CmuqoNEMdLdr3HeaJNPbFNcGgwqAnfC8zvxdLE8Tk",
  "key19": "4qXKUGrjpjn3Uf8RbYVzaoqie4yB6npFSEhStiTKQcpy7KQikbymfkKDYLjw42jcZGrLyRBJ3PDaJvrjoVsj4Fs8",
  "key20": "C2uh2JmH6gyMzSZ1XDmAnKqdpRMKwX2bU9tKp3QJtRgYQXxQVkKF4ghQ6jYjdBVcTXwzX7x2Z4EyA3DsiMGgA5g",
  "key21": "srdjsvb8DgCXzRctoirtoJCCRaHLnns6nckgD75cA9uoXJyu4zyeuzyWqtNFW6H3zw4ZppQmUFWnw6uCM3mM72U",
  "key22": "28MrZrfJSg6Dr6FPYnBgjAjxpGPYovcWmSyUf6FTitPH6by38CvemEKxJFdG2hS9nM9mCzsz5YFPBHekonuWF9cG",
  "key23": "3NKXfujnheHEAA3Yf9iPEK8T7m5Ltpuz6Jmuk9aQPaQDNTGJUshprqn96nsY1HxH2Mqa9NBmeVBZ4C2ezn3QXyHX",
  "key24": "45zXYyptrFrykghihZ3BzZ5GbQv6f97SX9kDwt4RPVo3xhcvaejHQbbeLG3Kyd4vZwswhZSmMGmSqN6LFVhP8eZd",
  "key25": "3zrDKmrSriB8CJ58LLekhxpjpKH1ccWyCwj3uvKvdVCSrQjKPqtgEtjMfCfz26jUVBfd5R2ejXw6aR6WLw7kgLQq",
  "key26": "2rhvSY8ed8Nq22w5Z3WoXwoGxbLoBKECL8hUDtaAn8WxzvdCzNT7g4sHCCcFNPS4Sgx7Zsa2rXpeD7jnBZStxpwn",
  "key27": "D6GPDDmY3wFrw3hZFPP418hyQBQXzgEvrmTHFteuf9oToc79MCz1ndxKLK7fNXdDFkPMKcHxTyv5SR1afMWptwH",
  "key28": "UHAv9y4JcY6nRM7F6sXRkRWNf4m2TFi82QxL1XGuBBkz6Uuhpn2VtmziueYUaiiUbxrrz6n4xKPZaf4r1h6w8dK",
  "key29": "5phiEcqoiHJwBjRhWW8i7ALP84gBQBGoeVkruVAbxLpExu32HTH5qmJp4Rw8sXvMbd5HaFBELV8mZEEgA8JZvAhQ",
  "key30": "2B4xv5nFqJTm7X7sx8VuperTmTEkper12gHvMj5do9KstWQvvToWCiwbJBEaKStrYXgLTfn7pRexNTvxi95P4b31",
  "key31": "5sBbB7DV4t7pGXAJehh1qU9L2fKHni27Q8ncH2ys4RBniqPL5YPH3g5CQJcYpcxRxkNpA7QtQ2nLi1zEq3YQ5iBa",
  "key32": "4CzuMmh618X7BdGHs5xz9zuAMf6Dc9BXhKGMxj9UfEQdA5gaxi5ji7w8ikjt15qXHy2bxdQSsiBTt5SnNEnnCocH",
  "key33": "2kuWUijfLRtYLaMxw9gbmGJW4x6LcZVfd4SwZg5Y8Va6gLeE959vENjxTcxFrXTQqkJE3vicTBwPF9SWJotJyNA2",
  "key34": "RUVmqEogTTbaiRSgQpUhBB2WDqGDAwTdmBj8zbajeKufrNGwGfsxHqnxS9S8Sg68vCjerCowXZhRtPVTgeLsUqZ",
  "key35": "2yLcocHXbvWAbsozqzDCs8gadKw2XgB3yoMKfTrySKpgA7qmyuVJqRS12tT3Eb9v4sRHucUbmyZP1WdJCYFHT5Yy",
  "key36": "Vcg2Maq4sBaodcxzM9FdoorJqWSoPex7FbN26zQCYx5DxFwqbj9jQQpHjWNXP4GY8eaP1U7QzVWQCZzcbdaD1gj",
  "key37": "4Jx4Ls5NCG6UGEy6J3wP1t3bD7EH5odML3CnS2RHu5jmUkga1qKjv2kLtLAFuuFLstjS3WnmzWTTiNrYGJhvWHmL",
  "key38": "5F6S4qQRVTuom7abZd23toc7qGjEnzTFjD9rvLKj7FmxGsSaZLX1qr6upgQXs879ZHop4dGzDpzUTX5CNcSdtb4b",
  "key39": "UDNXp5PCAPYQZwYihmdUuM7P9rVGhTdFN9usFkqF4hX3Ce8URkAYTaPM6BwzSTb1mK6Byx81DxRszyxHZpyr1tk",
  "key40": "2FWL8NVZbWpenwsb348rHzymGScxwkvrcaUsiNzKNc41emTPxbgzJDkfp3sBsa8NCmVwi8rNwq9uGSH4zSVo875b",
  "key41": "2Ga5KBpABSnJiesCPU6fuNUkmq5YQhY9uph5JmKfnXm4fcRbzJFPLNHjbAgq4mP3zz1PVabuuL8SVU8gwj3Uq9uc",
  "key42": "4rRF6jjrnya1jpBhdrqYXVz6Q9bcZaJBD4Q75URQtK3rQDVSJufxQu671eLbsKimfadwopddTHArxLuPK5JVxGX4",
  "key43": "3HE6QbH7e9kh9tUn88J2TrA4rehv8Jd4N2CBSm7qvL1bKuMAU62qUEc6qWyru29dVZaPYspSKNGLYr7T4yBet5Rf",
  "key44": "3u28ZyoFZhrJmsUTguqgG56W26GLfrr6fDGdyAAMUEHjF1jaA6SEHHHv9o6FoxMBMowPS1dtRUoptH5oXKh9prKV",
  "key45": "qUBuq7WYw2nj6Tygx9FtqWujXAkH97WRTbm69i3HpthgLK6xex9nk2VZsY2vcfk37VXTDVDfqaEycbpzxEhAs8q",
  "key46": "57d3ySEwcST2g6Bzqt5KKtCNQLsH66g9TtAQwgz3RYoQoJvjZzLtBURGjWR1fCFJ6fnAFwTj6PaRbgA2Bd1hggDR",
  "key47": "cbDenAA6p9ZLkMG2QpEe21qx81VABmznf7yMytvYyxx9RhPc6t4CCKQjCLagvdF3wNnzL1jHduF7Jh6Y57QUXJW"
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
