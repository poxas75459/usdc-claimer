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
    "4ZuEdsmm9qjMDNmC1xDRCYi9BbDvyUTJiseCMWgM7qPxeMAS1FJrDFmXQhKwck8XPHUBDEy2NpA9fPrrCb1c13JQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3F4Z4DCEJfh2r2nB5Qg6hD5sN3y3UeAasub8zWmB4TUP595yu5TmJg6s87w8ndaX6V6ttLbfJAPikSaUmb5mFQyE",
  "key1": "5LTfQSHYrdBF89NVxuADEzffu5a5k47SfGVJwcgppE8EizWHRuvyCiGW9Q2NigS2jqunNyVnw6xH6pni8pC8psY8",
  "key2": "2Vat2koxCeQQfpWWNvzwCLYFJax2UriswCrJfdniKhyUWKusXazhtthceB88oD95S99TJKXVWxuMTuDEHJXjPtAg",
  "key3": "2Z7noHqNmt3tdh2MnT9wxrrDDxLPWmLeGMgCqPhcqzqbDXjEG6ThJctkSXwKfSYNjiHLi2NvPp3eShtZBQqwBkWu",
  "key4": "5skspV93cG6A1RSNGckSPMoiH13b4QTheTZwAgBNfReRSGzNDPVkP6sihZ1TJa6CDunyfi7dhjF3uPHCPhDZc8ow",
  "key5": "2babdA9uNc5GCWtB5pANKNnsNVHtxRtt1mp68HejSez8yUTCgaaFJz3CTYpynrbZHQzsfT457532XsxL8jSLP4rV",
  "key6": "59aN9wAdZyvc1F2WNaZXJmKRmUDYQjoPoQCaJDPxRCxKq6QeD4B3ESKP2yijkJz6HagVus7Qhv7ZnBPxk4NCQJTZ",
  "key7": "57SB3s77zkZCjhM8vAcafpfH5nkjxUkMBFkXsLQZ6cVbUcpZXSpQBuSMYsm4zA4aZZcUWgrHQFhCFm4qW14Y5PCz",
  "key8": "fhiQhJgdzAuYXSrRDBb6aak2XznZsMPFFy4M77mQprQtM6tmxvgPyFm4yjUBxoKsrycPkXf4ahAuhXSa5MQiAoJ",
  "key9": "4tETN4mjvGs6z1mjo6JeAVHsRRHQNbPqgCGTi869Bmf9EK4cNpacFGkHavmMTWhDYwDRbbp8RLpBLRNssJNtu8Ud",
  "key10": "WXAY7PRPXJJYkJXqkzEXTh9m6UALzbark6xMDo4NxNHg3g8r4SJtvLcT4iytvGyRuLtELxAanguSgdupUNzH94D",
  "key11": "bVrhEVWb6nbz53XuwSgZHjVwPnMWw3paPNmRcx9DZuBQdPfSb7817SVC61zkXtmg32mUZEpdJtnHsE22D51gD3x",
  "key12": "5tFTGMgdZno7vEEKnKe1Nj48nNFUMjd3dxVJuvrusnB1CdbofncYfWSbGqTWX9TFa4TppvPsFpbm6c9fWqsmwRjt",
  "key13": "TZE6nZL6Xd3o7Rvw1hJrBRFQAhhWTe6N8CX1a31Yw4gYMEG1cx8SEfUJkfFfAaixqeSKn2LuTP6uAEVuJueqxEh",
  "key14": "kWVWGxzdgXND6GK2KdcdbZ8LygtJAqiLDDaQCicMMbsxpwUJ2xbrCGkkQuMnZBSPYWhzRZkNDhSaHW2h4kyz5yi",
  "key15": "3Efn8qYkm7DcoA6wTWcy3KEd4pDAEdsL77NDmSGXhPvxZoeSNhBqyph49JqnHo1FXQGyV8ZZckfFMjqnprEga3EN",
  "key16": "463Euojah5DWAAKAcndruJuCjJHtsrEjwrCKkp5AhJcMQSoqsTT2wFj3YKVjuwkae8Cp3CGMa64EdTaXv7JrfcBa",
  "key17": "31wTjt2H3nZHru8mHi2GYq4BJDpThdrLMKYvXYXCgLiV7BhjvjxjKtVpnuPnRVsC25dxw12dtXSek8FTkBNWNs2R",
  "key18": "31N7RGJMNp56XcRV5Cyf5dddEPt29KNwuuZrGUGK6FupqgUJxAvsLR8Tnnsh3zM2MN14QCNXoh6bQUQTPZMruMAX",
  "key19": "28T4vDi3AJnE62PCMeDUQfLGJbmcWwFWA6AtgH5gpgNvSbqS4Uov3ySBooz9LCBirNMuRh4DvaRRQ4A5ocLpErAz",
  "key20": "qxhdj3aBSrxBhJ9WXAAVqUQztj4rFfn8D3ufY6KoEzJiUy6YyRWV7iRQQZLN3VsJMeWyjhwm4nYTaxv8GacAwC5",
  "key21": "RKqBXtHNHmBu3ur7HUt5G2MZVuBpb2KqiLsVEdLsVkC2DDEcnzyk9N4G6T3SaP5FBTg3dy2WRdfgpjNCbWLdf7D",
  "key22": "D9bogLuzUCyxWKrwW2Qwehd4iWGBNpNVC3d7vDCyduchvYZSQ7bYajybWjvqrYCbSuXL9B57ZpiqgKH4ycwAtZt",
  "key23": "5E3HzQksspZpnBQayB6Bu3VV3hppno1jt8YkTQBwMPBCJEQWJVh9yVfNFvX4G1XSVzsmdhzmnHzudQdSaLpc4BP3",
  "key24": "58yg7ssWWQ8aRkPqvbY8jFjzs7REuNyquQ2Rc1weJY2m4o3MYcctWoUrJn9GUWsWV9gsUkMKHtnKPeYxqMoK2CjP",
  "key25": "5TYptSuRmXhDCLX1Xfje6C1vajRGKGUmSALZu8khdTzYuA64Fnufitayepg3EbfqnvBKfbkZMawLKofRjM6WpXec",
  "key26": "3ubrSkPfLtTQvyo75xqzc7jVgYPdAuD3RgELswBxG5csS3zwecb7FJj6apLAY6xZpJRJcRU7RctG7rPX3hGoDy9R",
  "key27": "4qWEgBe1ELurR89yE6drTjuKESYxd4BiPhX2Tb5goRU8Mf9f33G1k8o4bPdvguLXebiZVeTpw56T2oMgz8DjBycF",
  "key28": "2YbFYcyoe5aDTBPjMGu3oxXAnvNoA3DmUX9Sg6JrofDpi9PVTk44kUTTE2UcAT9A5CmEEwQJHaMsFXE3wL4Swdyh",
  "key29": "4cb6v3t46WbCBoQpQrdP2UfsEEBomVxynuELBhCPGAgR8wqSNqfzvSjYvLTkEQafZms7robMKEoy7oKsrNnr1csP",
  "key30": "4b3kGFkKC9527hSaqZWYWtEQ1UQEkhymp3NG2oyWVJ11Xq8SjEKpqfNf9A2dtPSsKvc6Wn2YX2FesPsAUa2FCTUg",
  "key31": "oa2HSKAGWCTMqmnnzufXT9ExKbsR4F8J4EhDPb82pJZ4m1B5CQP5hGycGyTkNXrZWctptzTigFo3vs3vZ6JPsiG",
  "key32": "Va1GbPebGqqjjbzPBR6yrym3BKHvdwybkqWQfLhditqNDLnrmDwAWwMtNgzynT4MPz4uwJxKa69vrTfy19XU2ab",
  "key33": "TFFDq2CCGLxVE5JNQtHE6dQjCx6aUfU56eH6tyCDzRTyjLySt3S2XwYHgpvj4d4Tb3UhhvcRCrudMg2dfkKn7Cj",
  "key34": "66JN7FEtBdmAfNZ2Nnr13gmTQjoPm12Cu7DxX4sWvv5hRNQZo5ihPkGypoc8KyrznGVRFu8DdgsyPqoX92jtwEgj",
  "key35": "4zV2zoV6eG4TSHL8tw41PMMPAg3y3CRqRMHeJh2wCgaMBMGSTEuJ2Ux71w8eJGXFJrCB3fJV78pvyvPdVjvXhFqN",
  "key36": "2RLiCkouK2AFy9onPxJJsjdDyQxJojg8R7SQz5gVa4xZtZquPyiQJcaMN5qkoN1Z6u8i9Bc8Uyf5UsrZpmSicUCu",
  "key37": "3Drggr1Puvn42LCrM36i5bhvRy2xfzjXpo6no1eTSYfJHxYX4WiFtz4whe489mCzrmwV7vNw948iqaeBisk1bTBb",
  "key38": "WuANHytRMCbNQUCzSpbScJHmSwjDRxskeoUuzs4aNTBFSkkcXnAxhgKdQDUTwB7oyLjZZzRRzco5YmHxtmnfhcW",
  "key39": "bg7WBCNXFt92Lrtnyjv1W2AD2JSqcuPXrN2rQrp59zSE9DtTkCPTn6wnPKyVmBwQzMM65pWKCrgqJCpJLpGYxqi",
  "key40": "Xx3fvcjJg6P9oNvmUcMdu314n6LXoqdVCtDQDugB8k7nXgBkxgBf9G4nJSAiVyHzVnZJFDPeE8ko6z4zrEnCrFf",
  "key41": "nTe9G983N4b99x5D9qwtfHvFjFgk95X3f1htEkq4wwJpfh2a57aneUHP2SuAFa69Scaso1YUiDpgQRUzoKyDrhR",
  "key42": "33yRB4NzGgr5sPXkfRdN4JSiRFQCxYLCrdMBJMdxoLicxwq5Y3J4CYLWmPpShpcPzXo5jix8swZEv1zyCyRpZhtw",
  "key43": "3PYXShjVrGZiUu8pTwgcQem9ADT7EccmiA3S43XXgTr28FcQy27ahuvy7ZgvxXaJuRDytqANy4TSqt7hWFr8RANa",
  "key44": "5J67VXqPeJwbq9bipVcXWK57CTyqzCx8VTgqsZJkGrR9cTWttEC5VZZTpb5PBgbcQK681EUYPtAi9sptXXZ7HnRP",
  "key45": "34kmB1SXFdUQXQwKT3BjDuk15qzwPgttRuDR1szQVPaFx2bkExMj92v54GJBhqnoe93DpTwoVnAzHx4a4yJLc2Ma",
  "key46": "5yKdqrSnK5JfrPmYWwm66DZBn45Ezhs3ogtnSX9z1eGBFW9Dbbxn7bLTGzmjbcwpt6x5X4aQVh6BU8RJYDJ2bk3y",
  "key47": "17L8B6VoLGjWSmgLJiAYB25gESnP82o5YXzPgp5SR4X6uguRoRWZwT5u4q2CmwXF8vV9bEfU1ahyKjBWVdKUsCi"
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
