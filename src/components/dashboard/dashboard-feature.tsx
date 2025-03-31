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
    "5JPDwPKZAZZD2huMUgb4awUfJ9At9gh8TCAUVFQVmKus9Sb92LkJVXK2K3H33f54bsvhC7ok6LYpJGjGq1VCBPmG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3chFe6s16ERXJUqa3RrKmTHcP1y3uF1ffPnw8fLvbcFjKo9rJa8fn52qvvoz8p27eRckMUPbVpJ1T5BXGjkuRRYQ",
  "key1": "4uiJtn4PnU5JVi2KFjzgoetnCRSTi9EnR6FmmBTzRDhYLtM1W4RjAEBWpKiYnuiNxhcurmgaCcmY359XDSGdFC4N",
  "key2": "3o6SZnPH1WozzkSMiKdRj3CqUMBi7THdd4tVd1Fr9tjyyMF9wHVrMgGRzrmjbHMzFgWRqUTG1USxs4E97XPLmd37",
  "key3": "5mZVDcHHBTcQfrMiDUUhys5vetvQZq62Y4gNBRa6Vv5dYbM1LnFZnicqBpacyjJJQeLMccjrhg9H5aQBUuKknjp8",
  "key4": "7f4kt1gTeZU9LXK5pC495zLTx8iyAyAp7TzQa7nKsxRQhvE9p7Hmf1GQmemAoHqhaN6fbbhXm4qoXm1wNGaSEuz",
  "key5": "4zDfqjPAWmZ8pWnmxhjKm695MfazANHkPTWPT3EfkQnXKAwoiGkVpnJwvwAHN5AhXxUaBG4WtZoVxAfjx74XRein",
  "key6": "2N3sPKBqns2buFaFHoFXShdrh5F4jZoujrUNNku9vTAbLo1fZA2bhzmBQJmoNc148xS8CuDmzUYeKkQzcDx6Zvub",
  "key7": "5KwzgDuwED986xXrRPgN56Fk8hQjcfCvHGUddhkrdJ2DoHqumb1LnKD52GSa9CvgyeHb4gNEeB4b5kqKQUiConM7",
  "key8": "2wtK5RoKZBktguf4E7iweKWtmbfXB84iTQQqogGx98hsm2HJ8LndoLdR8UAzCi9oMbH3wPHQW1vu9BLi7FLmajXS",
  "key9": "64VYKhjqMgKb9TR8kq8GnQSaxKVrVkwND2RPUhztAvogYRsB3q8DAuUsAtr5jZ8rKscPcG5KW8JYHArt9nzxiTpa",
  "key10": "Pur8vw72yecBRKTBPyrXccdmGYY3SBharjupTNntZfWMrssqmjYnkmePniCattwSw7gEFatxkkk1qUHAL5Ha1CW",
  "key11": "gpYe22FHMpLQdvUEwK5PkaaWHKRUFMwfBfTtuNHxWzec15tTnCBsviExjk5fiEGnyJa1zMp1Mca63T5ZfWoNzHt",
  "key12": "3ubMvGB4qAiHtrxyBuRUmhDgouh24xnz8NBPZTtUkwZzA6gVK8XmRWpYizZhzRBFanwhj3oHV8tcrQwJ5JCUyrvL",
  "key13": "5moQvMLJya337vm3hXm7xjHGZkc4wNSpV6kwEpsqmZmZTc16sE3iNwDacUod7rzBGRQUBZHTDZe8YysXnZSeny2Y",
  "key14": "GDcbqFJ6RRJcmg7PrftMSPVVGf96G8sGbXpEUhjWEPDuGbDzGo6XkmCUshXcu8adqVwcEEf4VrodgdifRBogtuc",
  "key15": "F8NzrXyd9gjdZ7uQZ7xXUzDawWvp83ejAh4LMG7pfTWEuVuTk7boSQWuiRrLoeDCzsxpWmeZ8fmeh3NJ78FEsGM",
  "key16": "4JVKS3XsCAsQsqF7gbx3h6kExcgQieJEk2FxXQ2dhU9tX2fCF3bmoFxUtFmtfjmMcQr6wwDSPRVPZpEoLDvs7eYf",
  "key17": "G1KjYKfFj9iPpGRyQDdNXUkEUeSkFY5BSoJMeSp9aXp19Q2Lqcb7JAyVDywkwiAQMTbzif982Ptqm5jzZ61eyU9",
  "key18": "48dM11qQKrDsDGmAGVLKduLYN8eQWxBgWDL7haC2boPBi2S7sbQUFZk3y7ZrahjbLdYQHMLAkSsQr1anSrxLdmwY",
  "key19": "5UaocGfTgfwjiFZBFFQ9kfMcsus7DCp1S4zTEoiP3umstMnXANbwuMjFhdWmdsu2Zjchafjmx48U6sR1E1zGxLcN",
  "key20": "4YAySfuyFt9cY6jA9dwhwkR9jUA8b9nYmJheYn2XoY8TK5j1rkaRDPLF5iKsMrLqZSTJaGA3T8CXThWZzMYbHdj",
  "key21": "34oknhdMrrTaJbMvuguBfLsHpXHiMaS84xnTuWk3V7cteFYjoxzZABBP3KDEKdtvFULEAGxXjURaZF5BzKdMS69X",
  "key22": "3T2R9kP1Ddgptczty336pgD95GoTESUrDMVfWAjSKBYbpzNKoAFW1m8z9dtvQjSE7EeiPMZpeyyeNcwctPT88UpN",
  "key23": "4AKkMdWugX5x5xK2SfYKz44Q1ibmGpKCjVYnUuz7GEGnoVXMDqSEUTLB4bNiiVZ8PJ2xUonPtW1nnrNLQKHomBv",
  "key24": "VZBZZHd68Khbw1oN3owrdhvEnjvJm9rjRhp2CEhE84Mfr5fSZ7AGUsPcmGysiUEJHG5Z9KYuYEvfWwBVhYb3JWN",
  "key25": "6vwDf8GCuibjMGrzEFqqBWoQk3y2CQ96ovb7Ud1i6BpXuRsmpjkEB3tF43sHF1q1eA1HwKYiXPy2LbDnSPPJpHp",
  "key26": "4CMcBDuAJwBFjC1FBca4Vx7FQFTWdBAhP2yu2QSxb4DKDsnmpBGoSbvqdG37poayGqbmYb5KfijMG34kduCwYLxQ",
  "key27": "5fV5xLKNSookHByfsPfrzVCbcCAQ9ZeM174zn4ZCE65XHppG1zPBVoasETcAepXtej45Zj9JQm1td5hhV6q8sQZY",
  "key28": "578wr9HxXNcWabpSNKN5hSikDnPKNjjW4V72KNQNqveuxe7Zu4sGRwjonizt9DuLHauSMWcYGByFybFKrHAgJ4b9",
  "key29": "4RQ9QpDZPpbM2AftJEEPfcQys6i15Bv1N3BQhMD3StgAQfPDK95eW8GWrvEwFoKm8MhC4Nu8oA8q8CpmaKarYZ3D",
  "key30": "W2mgPkdTNFshGtY5uBdhqWpC325SjKa4JVWB3wLDBM2RQKGakv8a9gjBH9VrUpBUM41R9agNiHFyMeCzs8zmJDL",
  "key31": "5UdEddvw2MpGUwSGLLoz4mekjNdGbhWk3xuCyB3rPDrT5MTHwWJpK4fnaWkdGHB6sepw61pb5uzwVbwzU7sNjFcq",
  "key32": "2oyjiYfnMiVKiPAmbH1cFzkG2yGUMFw1oRvV29aL5rzJ9vVziCxpLqaZ9vP3dgfsxf2AbP33fAZMNj5xzrmirgG4",
  "key33": "4NPvntt2XiRBuFfpxmG4ByJDCeV7KnFALHSU9MU34B5t8E4MuYYn35v5Yb63Q8KjLCHoPqVEbxxPgsfBteg46Pux",
  "key34": "393oDqjeBpdjLfEdfiMp7qT1qKLJUZFUcWWCNYjTo4TLbyHWVzYBXzrkrXLm9Z1d1ZLuqAfnYn48BZTq7PKvsBnr",
  "key35": "hfxGRsBxK6vkyyN843HtatNzkvgaqgb2htgpAN4xRkqw9aPNg2YXzXQcNL8NdiZZD2paNuYXJfMQeceS8h7BH8v",
  "key36": "3jtnQ5bDxDyVrRAf5QnuXDobX5M96E9SW47AiUsvJM8pZq4JYvn8FBfz95b3337AdstcfNZq5UUbufUrGT4DL5z7",
  "key37": "x2js6GbhTkMn7pCBxx4MkHx6KaBnDGbTJnnfkoBMNMHgr8M37GAyEtkrxRVp5q1FeaCTTZnHme44AYBsixH9zwj",
  "key38": "L7pBVAVXNmpeZguS7u1JrxreajKLwPdNHxTWXbK8fAT7CrsnR1fnSHcx5VwzWVUjWfuB4YBropRCt8wwSDyRKLf",
  "key39": "JYCKNHaE4hfhxTktUEt8QVywyUXnkHdqC5whjgLw6YyUpPLLSATLhgHum2DHTCimC7aYYtJrnArH6HrthUQ9hXQ",
  "key40": "39o2UKUKQGiYd8r11yY9gNW52jkJDxX5MRACZm44MiznXhyn1rqH4W5x3S72C1hwZN1jsAKW9Pgp7F8i7vkpV2Qp",
  "key41": "ZzQ1r4mU9PV72mRQ8Kp1GnZ3qmtU3z2eUHMxv5RbArjcTxS52UdPRqd7TAGCFsZzEVy4UVwdqEv1CiYDv7hxL85",
  "key42": "HVQbRqqEGMHynMQmxRLjQsvXLQoMGKEHwBX7GWSK1HZqfWnGpFVp6xWFNLSskx1e7WUkKmdbMcq7XD7zfJ1Hc9m",
  "key43": "5r84whH8LEmni9Qtd9EXg8d1bzQRzhQnZkgfRTdx73QQr3qMCf5GDa9amzAshi5gbzC8D3MjkY4RP6CKLmE2RHjW",
  "key44": "5C4DhrzAH7wtT6Yu6QTHYoriHXHm4sYA1QQ5bcB1pG1yrvnpTiKjbd9u9kjruMvGHT9VKbB3hkfgopceW9kznXNE",
  "key45": "4t6szFzf7JMNzPvBD8U8mozch7FUsD9KND5ubgzjQeQVuZwN3pAMQCrrhEMgCSM6Z3UWmUwBmTZdWsUE7EwEwCk3",
  "key46": "2CZC8UgifxQG1McreZm9iGG6cyitmwtbE4TaSqywS4YPwoMDLHpzaBcqk5HMv9RQc6fQ4WLjmyC7mHN3QvQxiWPB",
  "key47": "2Ed6LbC3rcHTQsTKvVSj44T2w7u5UUJM3aNTQRtoZsM4imrLhsx4giLZpAUpZ86mtmurjWKfZhUPBMMvYtREt35d"
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
