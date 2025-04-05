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
    "gbZeSjBjMcCpwg6tjVLzvmMBkuAiL1VTR7MjeaHC3w9qfNA1KH4JJxFW9Ng6NjLAH535MUDAn219KnXw41J9E3W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WwJt87cGV4mMp7bpxEcN4z2VWtGudanJ2gFFLtqJE1eawnHdVKjXv3fmykZsBacsQWRTWHznuk2nwaX8sUk35mg",
  "key1": "2QTz2NuodSaNH4C65tW1Usy1CdvhdS6iLZaAXzcW2hphhYFE8JoPACrTRaGX6jhA2u9WirDZ6bB4uJbe6WG6FaFd",
  "key2": "5VzAmJZeELr1igEmf2jhDj3JyPwqvvJkdW7W9UDAxAxJ9sQbuon3LJhqK6AbjDzqcTdvNZLSU5xK6s1kuKX7XA3N",
  "key3": "5EzwkSvbUZXBhVk37wPsePH4ihHPbFjaRSVi7bwCiBjhjYSnX3HFExUic8SAAbQjcjxgdW6qQhoeRxaMKfFCFr9r",
  "key4": "vip8PHUAoFL5k9iR41fBcPMXCbgig3VcMjh3cXXhgCESJxaa9LpBG4FtnkBXxVbXrJEikMa1UUREe81XFWReKVd",
  "key5": "4xBRceYMuf9HaHcRFU3vkeRS1ASjGUfNsWqQphedBychQiLqmGeuooYXC9f8DY4UVJDa9GptXxwmFkJWnrguMBTW",
  "key6": "E5Vd4qUrnEroxrMvRiXPVRBk2tHxV4mdBgxgKog4JRAeQ26UdFoFJtjgRPEDogBQiikBfx97kv5fbYjPXTr4nYS",
  "key7": "Z8yLoEo7iJEqB2683VkkFZ6debySh8xHr4FAqq6q4R19fSpgH3SEmqv9naRWhjdgBAyqEDbp9ELsBeNdAWKrGnt",
  "key8": "5FYhvnqzJ8fHntrZ7jMGGjfJ59iLFbRRSRh3gaMEqiWgb5yxKP5ZLFRf4KwF8JQTk55LP3Gy7ryWKjNAJbGPdjxW",
  "key9": "3zgCJDRTNMQSx1wEdstpTau3FSAofWDgXJvHZagBpdXqMMoGuY3iNDP8ZeTfDEtgpvSRVDgVj1xgFrBRQ1RiaKep",
  "key10": "4TJhbVrdvxLWaruAaKMqxSyE6PUT5M7fPmm6oXfH6v69ucvHNKEe5aEG2XNpqMBYeN1yQx3tiCAinFBZXz6XCxMX",
  "key11": "5rEFqiJwbndA11tVvDxAEuex8x3t83boMtQ7ihva9U7HijS66ZqFMXoyKjvKPLMzBUKZKiV4NPH6jEK9NE3diie2",
  "key12": "2fmorX3yoRgQzf3ysqr3ib7Sb84q7EFggHPExCC7Hx8BsKMF3L56Pe9vq8VJFzYJWbSFp5TokAAP7NyTZNeH2bsr",
  "key13": "XPMhpn63NtnwBpKeh7jzBBhCqnjzpgQHjKGVvJWaEFVp5EQ7yWXMQp46T13CyaczLu5Bc8L4MxGEFM3D7waxgRc",
  "key14": "wbC8jfsPunTKshBDM6Pqb6EbkMXK8kPq6ZX4dYTmkCMkTb6TiVCikGvCtzYyCiRuN6tfk2H6SHXEZW6BWZ3RomW",
  "key15": "4uEAzpqgdMBnZEEL9SytFqRikYzj6fFLhhEABx5tnw6Zz6RUkYK32YSSdRptB5kyKNhZL5MCqKUnNyzsJMu3bja8",
  "key16": "5VRJF8urkk48th2KizbKB9xrKVSBVwfv9nYQNuAqwfcwM7sz4k22niRoxhzkrScf8ZnToQox1q8NEGby4paSKS15",
  "key17": "2RLKKqKUtZe1UzkZ7bGk3j1ZdsRgGehJa77xkASztMnAYjcdWSFS2WppmecBNk5iPDWuayG8GY8sRtS6rgDZXyAc",
  "key18": "2xjdNUL5MPAwvBc6nF2UZHR4mpXm9mBfomNQtHHBB3xBa2NpNvcfeHDi1jhP19TvvB2CiNeUgoyiQLGzsJ5FHKP4",
  "key19": "5HHqjsE17LDzVP1ABwMEUUqaoNwqubXEyqPf3K6CiPLdFeEvhV7tPZLhVkEDWNDU3KJ5RMurtxoiGvo9szcu1EN8",
  "key20": "2rWAp62S8FSGD9yEQu9uL9Vk97c5u8QTAnKMku7s8Dqnv74Vct7SRNV1X6JGNtNPVoeA2EJPTs885JG7gb71WtFH",
  "key21": "5URd911CRZ64DsFcnVP3hWtPfEweCmd3hfBSXTRCS7uupiWcB4R9L2m9WzUwNM3VVJxheZYSvPjZ6KfLcJa5xU24",
  "key22": "29YnT3uUokSfgWzwRbpL5PvfLHkMeGwr6fZL4saHNber26fRYnRoTSmj7cNfxQKPm1cMsuNFNmh1Aqi3xUtsLzEN",
  "key23": "5DEt1Q2NnRSLQpQBapicedCkUsakEfwgKoieXnUTedocpmY45TKzYd4W1mXMAHQprnm1WY3AiqKqCULW6Wnw2v8k",
  "key24": "N1N6fHJ1ryyR5KL2qvn1LXo1JD5X9t443c9q1huD2gE73qczveBnFkEfXJU317n7Bf4DojKdcpix4hvbQbfSXSW",
  "key25": "5c6goo2f6Tp3aZNfyXbCnBhWPXQJoo1xRqHA15PtQkfNfNbPsgBGafVC4jfmsux6sBnEeuiL9wpB6r65NvhTjagB",
  "key26": "4CbmBsZoG7Vc2SX4HQ8hdLKwN9wyqNG1cv6GRG2n5Z9byf8kFUH7x6pTtcCoSjAcR3d1bm1XHjpAThy3WAk77mCB",
  "key27": "3Vg2qoq164braiCyiJEhvj5BbrToiUSKx6qYoEer7cNwFew3q81NAj5rYiRH7TgywWoYjzPuxUahYLQ5Rrvj4a7T",
  "key28": "Z9oggBQKjM1hvnBfUoZe9cYYXAiL51EorZ2pvnRCA8bhHBJWSs4mha1NEPtbZ6asPJWVuftUA3jDYG91CA6p6Zo",
  "key29": "5Y17rUUqvxG6PtjTTddtG7qjHyubdPjDCf82aGdsfzSA15nHYZAuG3BQ67cq6YskXnhuUzrH2hJ88r6AL5h4WcKb",
  "key30": "J1B6D4mZ2UmVXgJHRSLZS5shK6xGV212St66eS22wdQ6aYQ3fWbB82sAJhmvyENcVgT5CJp8mEMrB3dNn5GNLk7",
  "key31": "4b1sxX7oPa4A4RZaM9ofon2iv8a5EogAzFqz6KEbxcrKMtV3FucXS77SLseaFvC8f2J7FbffvSnmFJJEcGqHTAA8",
  "key32": "5EsydC9qj1sJRrAcVVVp2Y5qDttyx9EFx57mQmCrPshH61jASQn9FduFjkjeks1F4k46YWGHndKSVeReShL6g3Ug",
  "key33": "5Ydf2j59mQa6HZZAXJmoRjJGcBXhp1bYrLmdqAgGgeYaCAyeaaRTHJeE8QqbYLtpMVp3qCUZkKLk5WLLjCEMPFgr",
  "key34": "5iTdrMe7t9azTN7v4BYUcJTohaaxUkjNxqcwiYV2tJ1uVY3rYbfEyJw1ebqbuQWkxgpniaEByNjXUK6KKj6cEHi4",
  "key35": "3TLESMMcujQm14FhfZcDByvii2iHzpmo77N1EVbD8XHJRp1ZYLM5TsbiTjWLmaKBTHnHgXgNy6psjQpKb2nVhsua",
  "key36": "2BRVZe9eeGVXxLYGKJoYTBpsSSDX837bfbTNrrL8cbK4QXQrqvYH4AhBmH2xPEsXmgJhMRQGnYcm9LS5WEaEFKfS",
  "key37": "2S7GS2Pat1oGmbkX4PvxJQgdDJxdtfX8UAT145F6AAQQ6JXxMdkGvLAPzoLAVbFn76okZspkHtsZynRMY7BtTGtw",
  "key38": "3JSctnxbCaBKUYg6UzeLRtxCizbbHKW3Pu7trJL39Y8jx4B2BQ6MwSxbB93KggtRkGJ5EUBJHcQ9Zogof4Z4GidT",
  "key39": "NtF9mbtgLkMe8BZ1Cm9qT4jJcoZTwHRE1kiHHcqhJigjzdL1fttErdWxs9FS4GDjbQACpDQTKXrrpSMW8f5EXzg",
  "key40": "2mvZum4P4a9X5hFuTArPVvMs2vsdYDFg7roq5UDM2t9Mvy11W3HQVyY49h3oKZgXo7Lzxkio8GHxL2HXdMvAAMtX",
  "key41": "5oZPWoCMhXc1GMs69DvWYyc6UmMWZTpCkWDFcxKjt5wBBD3Q2qziEZ5toxkovR7iubkFH57fr2TxPEoS2xF3Uijd",
  "key42": "4iezUj65Cd2SG7rFKVgeoa2DLL5tpWoZoW3VMaUdBjBtF8n7PjiAc2WGJyhwPdbC7kyZxETueUpvTysmzWPjrET3",
  "key43": "4NNBGYbadc5f7bMjnFt3VAVfKfQUpP2KQLbvnhueN4Sb2fnaucRimcdBTXj2EPZhfznaax9WdegLECXdRUR9Cjy7",
  "key44": "5EdWuwvLDhfGeyjjQjuuWiFutxZMmNondi18MbQGdKKVZgsSNnTNrxevCMai5LwxsZZWk63xePHNh9UAK92fQAkf",
  "key45": "5acvUbs1YUu2AW1v2cJqPEdz4ENUNPWUGDXSrHtNf38G4Kr3FTcqPnAN1KVKeC536skyVAXr8UuRanAuyYY25vTC",
  "key46": "2Mf8PDPUgR4FfomA4V9PpGNLvtTWKEsXPFqrHJTWh93FWaqmAmTjPYGTfRAGifSLpYLD9bizwDgXFb4c9LCHywVK",
  "key47": "4zV158LTTTxbAvzKg8Q9PM9a3EnH5rikcZxMPggnJEegnuFdg7kecbPthfsgUTJjEw565eyzyF7WvBhjoyGFcH3i"
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
