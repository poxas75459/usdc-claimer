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
    "49Xa3a85YSXBveUPxypLSwB9dqmgJXcf9VSe563agM9UBUjCSnM2pjSEhCoC2Cz8EQuPG5Nm52UwWKwLe7JyHFCT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rFbqprLmQ6xoPsKGr9zVyq5cnSdxqXrdYYvtKJM6WMzCNkM4WaNz357JJRZh8qea7HCMi34VvnoMY66LtaNEf3c",
  "key1": "4MjEnPGDpKS2jjV9RnNGFzqtuVJWdYcuYtLKPqkM7iS3WC3VrwWEC6VT586v7MvAf7Tvz72Ha8NgeaGBzq3VfWXk",
  "key2": "5pHoE5whqtSJTQ1EakH56c4CLdBPTb3n7W5yJoyigSddBu4vCzq12kVHjk5YMU1gxifw4CDznjnZnMV6MdFmCRi4",
  "key3": "3nRhcXZjrhSZoUQD7b1L3WX1r4NvMTojku65Ki4GMjwR7xykvp5DAZuBLKJaE5wKCgysVftj19EzPmQwZN1hBCo5",
  "key4": "2dgaU1yjrUdvB4kFbnje8R7EzJ9j5rjVAcJLW9Lbu3ghJmxtUw8tt2gU2dVKD4r1AGngoJWca7w9ksffLRi9SXNq",
  "key5": "4yUNm347DSErA2fsUWmy2p51XPXXUMp7HFX4RzYjz4psPqcfKH5XUzREzPyVeSWR8WKZFN1NvJhh5wS9TzvgbnDP",
  "key6": "4vnYToR1CqwisPjyrDtXwtcbigTj2Z7MyVZ6KE37ywvMHsgHHVdJo2YrwmjPt8QxtAH4rFQzVoUw6Sd6NNKbb2zV",
  "key7": "xJYsH1uCGXKJ2dpuFEHmYWBttEEG1fnvgHNbmjibFW5nKcioLkoRAdVcbAzdZrr6mScUYb8VWnjkrekJtbfVvSw",
  "key8": "aDKE1cRGv9SJJqeSMux2w1PnTYaFEZQznFoT3Ay9SgSnovNNAJpiitNNEdEa5uGwQz2ogjokwVQhVg9CAFaNvdK",
  "key9": "MW1K6aEwiTnexHHXwPatpftmACFt5np5KwKSzfYhtjASDnsYWqCdnhhZGjUPM1SezCrhHJYB8EyagBXawpzuyoK",
  "key10": "398Yxv5K9YDcCavxtifbsZFKnUsb5yeaxhaJ1jeDnRGwktmVgBfARHeuPto9f7arAgbMLjmPtEZULGUsdWz8ya6o",
  "key11": "2nPqYcDr56SEqwCXraGG6H7XPjuMNyjRRAp47ESJK5My1AEg5NZdbnrs57MkyWcHPzQhreZytnEEXgqbRrcmTAcQ",
  "key12": "3kT7uY6hNHUyFMN7fLQBXKQCSmeLuej9c3WsLHpRe7BE9ttTxGTW6jZm69KthyqbnckUediNSTNmu4tPbZG5wEum",
  "key13": "42yBEqutF8puk482WtqhvJMHVKRVn93jwR7dDaXrMpBa7hRGmgKgWg4i8fL6UywAB8Yv8hUYLRyKoEUsftaHrCdd",
  "key14": "WdEuKd4o2HT5JRJZbSfgWqG2VuzjCL46hzzYkpogFu9JHhmbCKAcFLGEZShQTg9pmoUGb1bRtrUoe15KmpqGrdU",
  "key15": "5J9YSaTGJ7By5qt4KCt58Lb3bjPKBdG9v6LsRmdz3gkdCX5CSJ3BGhZdTJwiiBkC12m7S3F9oWZ3TqEcdNSXsAwF",
  "key16": "4t3JezFCFY2W1aCZgbJc16NbCXMg1bJNtxRUcQM3ek8XwixP5hNc818WpBViuGcDXbU9FM59ZctLXKuHsCE7Ht8Q",
  "key17": "yW5GbeheRD1xJdyLqVeZKStrza6pyMQGGAFW7jbTLBmukEC8T8kdMsAkqFk6uTZRUoXj9v6mdAb9Fbhd9UAaNmc",
  "key18": "3afbxH2qhUYZ3QwURVHXWjWQ7gt1n2ijYLRaqF9VHaDNdTqbPT8oJL8xEVoveg5DkbncSB6VvgXyimKwFozveeHQ",
  "key19": "4y3ySVoBPHo6DgKhHJLozkum7PnTs4JJZGiBPgCfHS4dZTmYmSBezhMPthgMLgm1FUxqPRXY5GfkULgxhm3mm98U",
  "key20": "2qib7yj49ZaNJv9mixDT9x287DW375nadPMjazD29RbJo5wUZMb3CGoXybHwCBZTj6G6u7uWhb4bH9aiDeUxhdwJ",
  "key21": "qcwe4wVpADrgnhuWzCdzAX8Pm9CUGqe7eayLDgZcHSRWWLed1rhVfDedfE2EegdakqixBrDphU9b5a5SuqesBBS",
  "key22": "5a1tGqzdeLCxhvQq2AFudDFrc356p1FgTtc3jiwBcLC21df7Wv1SZ1jJuu7u4SVvxi6uB2QVioJXphoCTn6dBeRe",
  "key23": "pHuZVB8N7pKthPDBVFXakuUu8uYvjpkApknNedWUDmQmi4gc1naaMZ5iPimuAkgM4WvLF1pfgi5kG9u77G5uJrx",
  "key24": "32NSvhm5ieucWc95MjYRp4wSyYxAeVyyALmNdmSijXxaNhudCXxBypDFhxm6ANfhawoBZNvu359wHA1FS1N8kryA",
  "key25": "4zFFwhAynHBELh6546zr7eLp9o9Ge9Gcjz3iS6RcCVpzov2M2zGCrrxJfxf67FKfz6D8Xan4Tr6apPYsV5Wv1ME8",
  "key26": "2ecYJX7PdY3vFNEeusmxUkfFL5XcAw71ANVfuK8GdcDzhHZtzckEaCjLocCKtjN6FkWehFzv98BAfTqnG1Mb5iDP",
  "key27": "3V2FiyKqT6wW2rx6Pieb6EcPfKxBahyu3aCkR6HmwQreQePyK8cDMF3wxBiRbwKfrpQ92Z7cvJxqkqdHB7WTG3jj",
  "key28": "2VY3xy3Qy6iJF4XAXmqNphsaZfvvRiaTYZTowX8zUZCRYjfv1bt6PNeMbxM9teR1k2up3dpCy83Rrtn6E4cxvWXj",
  "key29": "5YKHSD1yjq22fqbaFLpdjEYH68izMmyKd4yjTYyMMV8T4typgJQZaLbUpcvsE1TvY8r6Le2HCqBE7MUUoifyfiMX",
  "key30": "4YuEM4VTW7gukWogtQ1dr8gM17V1CdiiZkfJ8NkUqUSsUCRGekYEpEd2suKY1Mq8DhbKrbMVJdYSzKjGAJhoXqwT",
  "key31": "511gEKygZimCDv5vre8YSrSKwHTG7NZX5M88g3ojPBqasqpTLf8CpKWw4vCRJ2v4e74mZ1wevsS9CJH2tuPw1Drr",
  "key32": "2J6yQFt4XKLfLcEXCSmATHbVza1UvyPexSNdenbmJCmSz4K7iggmJEZJLpDXdcrKU1H9qmjevtLt67CMS4UhVQnp",
  "key33": "Q1Riy9WSCznFa8w6GqHeQQMq212ZFCS65vhQzrjvAbLnnt81ySrqy9y8NfuLdbgrtrDxk5ivfgzwT8fbuYdjRaw",
  "key34": "nzRWmSejM4nrp2L5yTsCSkAfeUWSoEpdB99EbpvC8zms1Ver5nPz5ck2YgYsuEeb7ny4knZ3nU2yFxjXnrAmRw5",
  "key35": "3rbHcvBF258iFuoUHrx43M7pG585yCiqH1P5tm99Pe9EBwZPi5xXU6E1VV1PN77o8NGhmpfLCAYT9n1eyua6w8Ht",
  "key36": "3rA5dC7cqfFPr6qECodAUCsmLRhHMiyLQN2FGVi8oQqHN7ymexL1te65XddFqZZZ6Tb8JHznEo6w4TaJnE9VAYYo",
  "key37": "3Kc4QEyFC92W9wZW9otNLzsic6FosoBWdV1MnKh9WHAH9iWsX14iszya7ZC7obV4Ciq1c67AMsA4QyxfsyGjTd9H",
  "key38": "4Su9NtMLPLW5WKoN2zay6BsDLEU5YxYC4fZi1Fe2k6wyrqorhNpvrDc8g3EZqtG4HWxGcCuyyd4QCCnKypdnZ6jY",
  "key39": "3ZoVHabkm6eVSHjmxMFELQ5vNTft6vcXc4tP6c97A1e19dZQPYHoqJYC8pHQZfka2xXpaj4XMn6MNyWuqS5VnZR5",
  "key40": "oaJtz2od5x8uESyMV3SGYY2DLThBsVT7KTbmMeqsv2HSUieKYh3yzxk2wjNMbfSVLgH6kuwnymXiyRfp94nvNwZ",
  "key41": "2WNUHjauCSHv3R8Mk6pUmF1eZayNfmr8GYuW3fYj1nNfPZAuZcxvA6WDdn8iLRJHQn5W3AA37mUhSfzsW6FCyMXU",
  "key42": "5J6arnkVy4hVq1hNB3D3Y4wjKx9NcxWzLuGrC8pyuPd5kzihVv746bKS6marGAjhLkssjpD9Ms5TSLtLKU6PBXRp",
  "key43": "59pmeeiqQ3oMNzxWRCxjWeszVtaHkv3to4Xwbjv9scKmmrQ7fMLo56d9Ujgvo111RdrphNWn5D5EH9JMecw3cxsr",
  "key44": "3GwHLcw7W1AP7Xzutwvvgeyx6dvXVfgD5x8QXkYff5aMSvjpiCieuvD5fX1t8Bf6yGZ8YPAhpepAxpsdFzHZnSms",
  "key45": "3aQvfQcELvw2C8N96F1dmSwZQFNp7368qzC7iA6ru78mVJ42D3JCZMzwmTT8tnDgfiFLSZaseKRJQyCJAa6WJngm",
  "key46": "5HSrvVkAfvYwjetSqyZkodsXDtKHuteMxXdstB1PV1czL9XxGSkqq4ew1rdrCQGFAdBaJZBJCDvV5uugNFyTgnaD",
  "key47": "3bZbvvpCauaHmaATwf95Vbw3bKWUs1yMsDN5fMta6GNYaMAfF9JcfBMxAwMZgoDjPJa9VUcSesNvt4sN8GhwU6YT",
  "key48": "5arDgikt6GAWbPQDH7tHRYWLYmiTXW1Xa2ou1pRHqkhh2Rd8os76v5fMRFM74VZbvwzdLAd2bAchpCEa654ys38M"
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
