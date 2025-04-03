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
    "3Z9K48ZL7bMVwFMzkMHFJA3WMTNcz4j6jyPbsdwgVNA1tn1ucYgqPWZdiPRE73FLdkGRhbhgCRhzfa2QmxuZViZm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24bXrTo5aJjAyghrWUP39y9zQgk5jPjziN16C5qok7CMHiB6eHVahMksTYqL2Fd7xsURN3x4pfcrTp5nUa8XFwVX",
  "key1": "3fH2z5nS4ADRxZPW3qvta9L41kHdbmfkDbxB8FjWqp2FgBW8t1Gaws3SB1AroYyRiJt4FKH4iTq4eEN8G1W3e7uy",
  "key2": "2NmX45BixF3oPc6Tfx7pnaaNKgfMkhZwadyp1TjW4ERRkdqxgpEGH6RohVEEbdisgfstEkJZfdGCg6MkTY6GAEjn",
  "key3": "CpDgzLT99tSnKVP5Tuybe8P4exXWg8xjNQWbzKyEyiVrqc5bKw4ZQXJ3aoLkUt31YCy2sKnbiXvoDM91LPudqRQ",
  "key4": "4J9jeKLxitGJE92C6TXUepWZzTDYT6eNUFQfnEtuug2hiUdRzYLbUtyH2U4CETpaBXpJfvcMax1mZcLYHv532YWV",
  "key5": "43PpzWvqe9eVgVsxy6XTvpPWfHjzX4Hxv4kWMVA9SMTdBvKns43kYJzY7GkzpEZMYzxXVTRLDehNU2J6kZRX826z",
  "key6": "5yvd5nQEHqdjEgCX1GJodaa4XWB1h7W8oBgg57zZ8HguiSeJcd64JafFBe1CSaZKrhqHW1S9uPtkgSoMhAi4JhvC",
  "key7": "27dzHyM1pyotTF3R6KjYqXxBGGgpaz2HtQ3jFmyCPZT35mT8chYwwWg4NYDmBNfxAJciSveo3iXr2inUoRN5PJkG",
  "key8": "3Ev3W3KVTK9Z5xAfjtLPpXS5aKXPQW1dFgTZfo6RsSPSAHHN6zLKPQh1ppQrHUFopUoWAuxycpDGJ3CXe77gCJh9",
  "key9": "59nho4R2LpR9yxjN13xzVwB4CHXX9Lo2B9kpFeMUnKYjT62fhQfAuZTrCh554dMfwHFohAD8UsFFyPkqgA8KJBtg",
  "key10": "2Lus9jbRuKpWB8cxXrisQtwZEfDpKiMfSex6GxJGnbZoBmJcQ6qtSn7K2aAes9vJvWyno2od6k7omzxDa27qpdP4",
  "key11": "4U3qRhjDpzccNKzgAnEKKdsWLh2FUipp9C2BkvywCZjqBKN5EW98nMWVCRP5VvVYPEe3tBWquYCXD1GwXdB1ScPe",
  "key12": "bsVA5DJHTMvLZFhQkhzPgo9RKQ7dvvyg7wBVNdNRwmueEt2pCr4kZf2kKEPHnhFrom9hKWrJhh8QUtv2N8YJDxm",
  "key13": "2tjm7QD1kdA46xG8RiCrYBnpU2FU3Xy17qKeRMhM1imA71ahYa2Z1vkU6VookB7uam7yJWHme4GtwbaUVVCuJy5h",
  "key14": "2BMDu8QrJPebWcFkj28uyrKGomeHAUsWQnLsGmYvbTFR6ybZ6XGx1UGjMvQDpStSzpSWC6HnvFrftvnRXr8Dsv1T",
  "key15": "7XyhDdaBWADEkcFHvfLEs5bzFFRoTURceopEZmpSsmZaGhuWDwJoH4reKJcxpvKAweE1n8hF6c5Hut3g4yKZ2c3",
  "key16": "3q4TEfviCGsq75b5fhNVC1Vi9HfecZtBn3knqxPkNK85k3c7wAzZ2fkpomfaAaQr5ceahvLSB9dXsziH99U1hEu8",
  "key17": "61QqzrHNTJLMaat3tFBZMtEgvRbM6u1sMhtaJSkBMR7T6ewMCUe9aDHAMh3vrW8mU8FXXX1RiVxhkPiK44LU2oYy",
  "key18": "kD5CUW4KFr9bAQyFRQWugvYL7LkGbjtYv7QiwqB4aV7F7jLgPbYHb3NLJCC9VM7S2TswFbcixEBwu7JWbESGwRP",
  "key19": "SwaNfGXNXkksAw9i7MvEmCZtmJwrjCU9My3bJ2GoAWsNZhagvw91n4ZJGpmqi47gL1rTZMR1UyVWXakmTcyRv6x",
  "key20": "3p8an1zssipFkJiVffwTuRkTrcHefPVMZ3nAbYmbTsAzQbdQ4vf6LoCCCpDh58QMwAZgCarzHxh9aBsa5AqvsYMq",
  "key21": "3RS2gZyDRSifTEk4EYhzUDP44K1W5G1HgsMJ2JGJXF8LQZptgrtd334Uxg2wdL66EtwytprkHynVqt6difrMHdqv",
  "key22": "zfq5AvfeCjBJhc8EbCjvXMp581mDdzwMZ3qyTMsFw1QY4MQTnTUpwy446Yv37GJgYa7my6jA6EEuPKD79K4a3mj",
  "key23": "4HFyDimFicpvoVdmDRd783Hn9hrkZcsoXr8heatxtT5VahTEizpXjH89FqmWiZNm5AmViw17Fvw7i6HJv48B1qxk",
  "key24": "5D8Wwf879woeGWjLfnYtNR6Zcri6ETSgKX7HgyRC6ZmDUinhKseZCgVLeoxGzPJPT4RnhV2CNTJB2QvkGrTjeea1",
  "key25": "3TkB2qDCogPm7uZkHYaNHGJNW3wHY5ZaZ7k69YMqiyckP79RSMvfwoSH12Gmh9mRxiRJP4TGGNV9gxe3hHv8zzrQ",
  "key26": "4HoJY8M92vW6JXuPDNB89jcHQbz4iK32FPHbxFpwADHfhtWdwWZBkoZnfgKhR8hhPJTqJZByoCZ2BbzwSLdex2J8",
  "key27": "bveH3Mz4jWMXxT4qX4XyjKMbDZw6nRnrztRtv3fnibtbo7XWDCQRfTSwaHLr4JQXmXtWT6bT8PqQ1GCHQwaa33u",
  "key28": "4FHB8vFf92wyXPuc57dRxMriyFFkXBcq6pNTAUts1BtWx2K7hbFYZF5yRFsNzuXgy7t1oqHcEEkvMxnEXyHiBBPb",
  "key29": "3SjkTP6NN3KEgWqEvCq6UqZUVCqJe7GQLgkcryeE8WyN7kTgdyyAGD9eUq2mUQmBeFt23MCrXMzmgVxeMnLBH1W6",
  "key30": "41LGzEynTCdJUcxPMx5mbkadfTqZbxq9Qe2n7ZjJFRHjHXy5nrWokBXMEnHgebVQgwhxKVAo1ESHqC7T9gDwQTB",
  "key31": "gsa8BkCZD8kQEd3FXjzWiugqWGmjApT7SJXf8DpozUEvyLjv7bdC1Y2n13sjo6MNaE8KjWfmQJMvBJJD5U8cFVZ",
  "key32": "7wMrQ3oBgc62KrDm6rzS6C1a5QaMiujUeRsV2YtYrPVjf3rWMedyRzQk176TJtCRApchFmamQnpXMUz6y2WbeAC",
  "key33": "wQR3Yy6hCYN4uUVeAQXHaLo5FN67VUDdojU3qrDet1NA96DaZKGJRBWxn6rfapdYLMKvky9KrYZdQ2MvypnyHe2",
  "key34": "3JQ6JZFfrENhfvwNxa6Ardp2PHibypy8Ph9qTMRLL4iLWw128jdhdBTNCZwxRXzyYLEsUwpUDZpvyfshuEfDMEz9",
  "key35": "3iPgz8Mag9pzvt3xXts6gd3UoZYT77tbFCE2Cy5ehcnaYoioh7hffEtGYVYqhDdxLAfuYS7CaVgT6FiZv24uTRsF",
  "key36": "4pukYKuxyPc4n88qnbNSjg8scszE9eSY7eLx2W5aQYXVSwZ6NKdCFzXLf6i22YBipzR4yXizeHK2MYjHKdg9EEyH",
  "key37": "2Ljm9WvRJa4AHVEUHc3bfcSN7UBo6xvGqmqyxQPuDa7sqBGgisgECUYVaUFhXfegWbEr1Z65iTq8ZReJwdVZZtCS",
  "key38": "SKQRYHAsddS3PLaJbzKKZ9zM9oNTTp2HPQLj3rcE5F5Y5pHhhP17RsFXYNc4asYBJX8cVPKQDFXVc5wTvvkzyPz",
  "key39": "2U4iU1LjktJjVSHdReQQqnRzUqN4JTirtiU6qcevLMexsUKQtGWfZ9uB87bcf6Bk31gnaWWcYTjMQCKJLSo4RfvU",
  "key40": "DxKugJi2i9iLfvTswdaNfXyeVNfdYCj2a2Uo481MxApC6WjeZKZcU3t56ft6BkUEpppzoAd2PXNsoQSiLyjzez8",
  "key41": "4kPz6JBRrMmtY2Mwfx3RQFJhxTkZXcUxocpqqeq8QkYPFNKeiBwz3wfqiRfFziYiKJVHNp1K38rQBjafjuX4M91R",
  "key42": "2b7Db7RRS8Mwcs3mbSTpJJbUQfH3Rgaj5wsdm37JbDyCnSRMh3H93CAL5kDQ23zCwxAbMwW7BX5B3oYs31EMDJ35",
  "key43": "4upnk2wfYHxnXroH5und9qJKM41T1sE55JEVsNqTPKDfjpeEHZmMzW6LBsNYanmWEbEu9sgeXm2KH4Bx7NGzz3LD",
  "key44": "43j6fVEMiAvckFd8imHmT81uDvfu4xk2azLoREoPXDG5HvLXjGP3vYSQMEymdmTuBxBJkmGtvhApSCskbzojpVBs"
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
