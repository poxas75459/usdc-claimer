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
    "65HajKbAVBPX26h784bPkfG3eHqLRGfd83X4KHicwoyuSX3J3jTqEepGHrqA5v75BYhaoXVAcrsuS55BWyD6rQUE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oEoqgoMTFsfZQrniqdns42gjK8bgGeWsAS4ZSeUUgvpUBzWx5brDxHasvWK3BRjoP9SL1nc5v96BCV52ZteEpQ1",
  "key1": "2qsVRJPifiETdwUr1KCVkd4ycsTa98t9Qmu3KBKKjGjotMX1GVWxM72nrVZeGsAXxkjiYxtpFnJYopH36My6pJ2h",
  "key2": "4Nvh6DxJPechyDSHxAqJ9Z6AVZWJdfAk5a4LmLVsuqbFvrYKqE7LzWpiypqVxUGv3tREa7zrLjgCWvx5Hqf33yxU",
  "key3": "51o5BUrGCxaNgc8g7drMuY75zfGQ6F1v3ZtfXvzAQF9F3QMHKekanThHCLMpjpw6exPL8Acs7mtRgvXhpYi5ZRUi",
  "key4": "AB6zhKEayJoHXkRApBgjE6moEwpnJZUj5edSYPRX3BnssJckPwMCLQuiXf5RxMaL9R6KP6w5BGsBXp65JCGYADZ",
  "key5": "2HrMnTVvUXBnwAoL6ZX6F9Ngwvfd5DPbhcabEfQfuwHR27pmCQSw9b7APqZoKJyssrcfBYkesqtRnKyodPfHmDdT",
  "key6": "UF6gU2iNkKMKMMsL8P1aMWkq7x2jsTDq5GJN77LeAh6Caska8quDFaeEUPfKV5oN1udq6abbDTnL6E5178TeHvG",
  "key7": "57b6kLwEPrk6kEqtYs7VzWV1REo5Z9RghTux7ghpSFY7mmGdCbxJxx3VvtHGcRCfWQvphu2NnsmMzAxFmifUhDFC",
  "key8": "5t1nb9fpiJVm7Y5yiLtxgZ7N8mzjJLWqfAMX9kosnL7ZXN6yr1kbBfazzPM7EFcKXQRfr8vYs6uxAxqA8WLRrSNi",
  "key9": "5PNyqUX9pXBwTDikMPj9QFi7WZYHk7uT3HNBtRzbf6mMqdeZJv43wkLF1HvXPnHeU77g3dmfGdLNKUHXV7LpRE1F",
  "key10": "3xSvEGYJdM455iEZcdLTHhNToda6ttoN4R4CAtuHaKmgqVkx44PYVsNMhXXWZwxSdGrWQpkhMAb9U3ZaugJhJWXH",
  "key11": "4ga483v2qwVBgwBivuZsiR4m9af38xQMXxGraj4UafRF8iYzgX4sXjQqC5WJsbB67sx1pFvqffsmZzEaDhsuo82x",
  "key12": "4bbtfo4iaaHgUftRou9FTpyTTHh1PvaQc7G5mkTVVSDASmYLccADmnJ7Tn7nf3mx7EZCrLqnEX85MyJieYiR8JE1",
  "key13": "5GNqXfHoRdxHbhywAysJLZgzQXo4nsNarumRew9Vo4y7y5yKPe43wJeGNsvNWfGWT74qyJQ5QYvePUVNFmSX82sW",
  "key14": "5VEiobRzaw9YcYEkgjGiwTL9amoniBqajVxTGNXtMaYB5iPShXdJpBhAqreqyXAB1ozrmuwZZxFhnghBxRpzoaQB",
  "key15": "2D9uYyajcJcVFcEJh6ZknwUHYj5hGS5QCwyLAqyDtY77J5iH6UqPdyoigdepmQAwWappFG4ocWSMa183v6KpGSN5",
  "key16": "T3a2bGY43whWBanSkNtwRoZJnd9ZpoecUMm5RLCruB3dMMaKUKxUCz2CEvVrBpmb7tDv1uvr8JMeAAwGmoqL4n7",
  "key17": "C7MS7RttBuns9Xs6tvFWzTcGSnxpJeifSonsD4owLbDTXRTDYZBozhF9iqCY99pSejH4SWo42EuzKsFdR3YYwPM",
  "key18": "2jTEJpoC5NJwt9dFuxXVg9ouk59L17zzWNMS6DgZyjrJvWqVr1LU4zmNfMXe4tzULqg1U5Em3ru6FPC5Mo6HpjMJ",
  "key19": "2UNDxsZ1ZjC8THobiBU53QaUX9YqE3ERewdh9sjeZyYGRx5oojJ6ZTaLrsmkwH4oK1FRCes44uvMzJtCrYP6Jokh",
  "key20": "3zQuydjvrKoF4W7MVMtywoCW8zxneVtEevivQwNJqVKhSK7BEDYKY9RqfotiPaYuAsvg9gfDZ9vSxBH5AUz6uq47",
  "key21": "4UeFVNuWeHMLJBUUQDRb8ocHLxgV3UzcwcUsGJZspuv6jzXWYrwQiqunjMRDYBJ3cqnmMXbSEfuHwYK4t9HvzyUe",
  "key22": "GnJnPn9AnLbjnXwVKjxKiiRJnwJ48ZGPdq1Jb9aLEsoJ9vFkKM8HX2vusMHaTmc1EPk6bdtsbYqJZEnAimqjw9B",
  "key23": "34E2xnGYNstZnyvvG7CDBwEeHxcS6HK5XJmnXad116NiUYSaACcuthUkt6g1M9R9YzK5cUteVQ5oKbUsgmt86xT1",
  "key24": "2eAdfztQKtVgWDFjw3VC9ASmBx8nBKzgQMzD2UN226bR19wDJmsKmi2YPH8gvL3m6afdoJLE5xG6sKPEyBkSoid4",
  "key25": "4Pe2REUkeg3vqiRdCYK4QADVT5r2xiH6qLH5BDgPG6E2aJBSZ18RjGmk5162dXTQrzr1TYaw23YS637bCNcPjq22",
  "key26": "2zmTAzJTiqpTkMShFMfG9a7GcdA2ygF2Wb8cXg8Gxmv9gMb7tsGhpG1yjH4sQmH9rPb3WkXTrtEBRnvzdrTwR2kh",
  "key27": "3xEFudgES42E9o9yAvroxVft9Fn4xhM8YD3pyauGjFp3BB89cE8CYYok8xo7rQWWm81Lc1QjVZ5238mjfHAsVyxM",
  "key28": "4PFs1L9yqw2TJT6CCh2dHHsznyXxkzHNvTewQGpK7hVV2uaNLiKZxrUnhTHvyJPEjnqEUPfbR4pZYmGA6WzRbFAQ",
  "key29": "4Mvt8yM5RfY8K7ySvijRtrDohw5mKWkApCkkYYA5BuAKm5XhbPDX1jgd2twDq1H2zZKQss54btsSzRrTyAhjUhUe",
  "key30": "5GSXbDTofrCQvGKAXqTyxu5AhwvZAdrWjP4NiFJ18PvBYDKMNNBNjfCdDgrorajVF3Cfuk9XhhPUbCaH8r2d4QKQ",
  "key31": "4ckY3UNufjU3Rrffr43zRduitXJrNuwxANHoE1cJJrc58QHzAvpQfdZSFb8gnxK2Gp5yeAyKbud4QQ5aEBq8AMhw",
  "key32": "5VhTukt5ZaEt2yJc6Jkeb85rxJQ9sMqAy2ht5q5uSNLxFWKijJRwWyBX1XFxAsG4FJvK5eXApciskAK8jdrf2Upp",
  "key33": "6qibSdBoRyRGqZe545xNyP6eKZ4aP64xXvNLnvzwR4WKhSH5ZpWo9PXXr6RCLNcjGi1kkeiw2nsF19tXZo7c2Xu",
  "key34": "vjUmo1XkRzmeu2NiWuDA1tk6Ck7VYp693hWqhrmfTTdbR6qXJC4tcE1cpwt1fHNRYYTe21bcru2Un8bdveGMz8y",
  "key35": "22J368J4c27AW7Sx5JaLq7CEU34LzAVAkx54hsVweXAWPxhvUJXR12U3J7M3uC4Q3sfHpBgTqvg9EWHbz25CHARb",
  "key36": "2LRo1WwW8YGc6mZRQjxAWvV7yaJLoPWhbn1f4XgQ6zM5CBQyNoBgN8vhbzCCY2MKmKLcfY6qZmddm1ku1852wxF9",
  "key37": "2T3FgYC53YiUqJQj1cJ7FYWL12khyr2Qq7NbgopnePnG53QDRtzxAbY7rVHefMW5Vq712BuF8FAyXToaePAeYU36"
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
