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
    "3pjajm6wiu69dvq6eHUr8gdvjyE7HG6AhGCpVLw2Zgo42buE4X8yJM4Siw2bKyzjxX23LmwScbvuDiXfukhYV7di"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RiDv5oThHm3ed9ygLzpXo5ELTVaJ1w5XaKcBwnHDZn13uEdwwn3bT3RLLQvxQpdCx3dx8xpQLgiCRYSS3jy44Jx",
  "key1": "2qSFYYxvLgyP5EB8ACjoC3aVaYSnAT7Y3C6d7uS1QL483G1LYqtpsjEp6mB1zQrzPFkStYLXA1n36hAsocEdxU71",
  "key2": "3GTxspmEqkzgdQXPdizQB3kSLeJFiEQwssBVv2SitS3YyyanCPEuSYvhdPit3ZLyg8TsvLnnwW8Bbh3gEcA9HejX",
  "key3": "3dfzFRgBCmtgmBAn5BvCZPwx1rNRRoA5Gz5CDiTcp7nsGvowooBCCPNk69dD98D7ikLcsg2DFWrvJLuL2aK3FbPt",
  "key4": "4E9yTJ3ombySW7rWUvrxNj4A4T4HM68cX9z5pzPMXMKASmJdbVGxtM9thGL7Dz1Uc6dr2HjCEuMmyeCa7qoK5yKy",
  "key5": "5kAaheRtZ9XQxgzpS5vxrLchCqoxX9YzaLaN4cxMUEEGXQGDt6SgYzsK7CyEqySnN9gyqNZhWXevGz25ZWsV23kf",
  "key6": "fqp3h89Fnt3C8H38KFeJm14YAbZnQdKXJ683fEMeA8oRSB9GCT8CT1NDKX2MKZvVVvSobpxCW2M8AwGarpz1b8G",
  "key7": "3JNEjmpANADWRDHGedTvmkc31K9V5t5heZNiQ6mXbJ1czSC4xeWUKEoZYbDot5XzsdZoYzHUH5ZbFvidRb7qw4pJ",
  "key8": "sDVxa2UjXc5daesCHkxsACXURZB3DQbQNCmWYgy1BwTSR6JsiRamY8c5vm5bwRRWEsc53BccY6qmQVxKT7pkgvf",
  "key9": "4j1CUD6KpGcCB12HqFNXFpRBxy12r6CXCzVVGxiAtW8J32WDSRiCF2LPQKkB8dJrLXbvk5cYP229eC17shQN9cCv",
  "key10": "3mn6pBLKQHKrc3Wv8vtkMNr9FA7Z7SY98tM1cGN1GvYsUnwfbWfTjLXaEwTJs5XHVCiCWLrGcNFL75VZATqjFtzp",
  "key11": "EKWT7NsZn2C1zsgsn5MU6XwoiprjeAqdssLt8yMob2B2kgcEqhj6z7ucN525HSEgmQYU1j6m2s7rohfbPevbgip",
  "key12": "GG1ce28NiwhRAR5Gis77mF98F9buwk2y5AanuWwgS2BWaivsRSSFKDutzHxrV5KCiNyxvTXfnGHDx1wkr3SP6Eo",
  "key13": "4qU2K6gvuCj8Vb168Y6GrDnx75rA383gfjwUCiVywdechg42NWF6HsALwwqJke9x1zFcWbyaDNcYYuT4NSH3P4SB",
  "key14": "Pw62XXPPC5qxa6vepnZYEHLSydwfNMntV2diU2cqLQ1vQALS76HCrwyj9eh6p9vGo5rqymuEpN8zrZW5AjyAQbi",
  "key15": "22md7ZND12Lm8n7CNuBuD66BTdQfmJm4HTVVk68fwQTevUM5bw66e637fkg2iTcdwfa7DEVk6B1pyBS62vQ7ctwT",
  "key16": "5dLgip8dwAWoHN598CiSBq1k82WVPTXhg6mgY7mi8VZmrT6HGfrBuLiLUS5Hici3fchvEHZYMebBhFBGAxA5Ha22",
  "key17": "2aabd2j6suPn1sGgJk5FWHPmRpPT6R6SCvHNQNQfuGg6ghbEJCpEbXVdcdh7g8qNX4tMAX6jMaVQY6dVNiLdFdQS",
  "key18": "3g69PmJVdMJb6Dn87bpzFb7sphFHWFiy2kyd5wSgCu9D7tn8mkbNKHFvLrZrgCNhBxAo87pe8yEwhmciKZCiUu18",
  "key19": "4FAVZLspLA9AVt3az15CPb4vgk5kTAgtJMhtRopyyGY1QYjCqEdtqiN3wH1YJyuZKsxhVm6QX6AsAF2Z1F7bZgog",
  "key20": "4Mh2mHeUUBcXxng9A4onuFPU2XcSS6GuyWPmeG5A1aJLaQ9dLYvW2DWHjvhtGfFadf2eikbRwFKBdWq5ztt9fdYX",
  "key21": "yBnfTp3iYsgb21NPSPzHajwQLBTr87unTEzQVebAEA66vz1Mo4AYKPqwMoB2zdnT5sakGJde6zfBschMPLD1PQh",
  "key22": "2rp4bhQxaMc3zUDU8f8ZNFVB4gVopRCQex7cVsyFJe1BRSsstFBCdDiKkeWJ5RbWg2tvYK633zBTV2AUBrgozTGx",
  "key23": "XhZ88AiEDrrAxb2aMeyLd7eJtihjg1fuMiHYNeGsapvbSanz5oQNgAE4QreyJhu5h7bwY9PpwtKGPWiwEg2tEbA",
  "key24": "4RzoXTu1rYWRiQucZsCSXjgrXzq6TPzjJnRfbF5d29CGzkrXMfauyVhcXwb2a5KefiPVNU3HHpLpPocev7EzYmLD",
  "key25": "457A2tiz7LSLf9jRAVXMsSJGQwrGhdBn8sA1jPtG5iQ2PY9xawDbsxtzQsY3tnPtYyyzzwakZZ6p48vAjGbYu9rn",
  "key26": "2tkuwzu52oCgx5D9Efpcuhco1Ve1jimk8GV4AvqtWPU3KFFRajhqTog76mzsEvWEALxk8THRSGWGZERVnbQhHzRE",
  "key27": "3DXEysQDyUa8zAti9rVoYKaUNLWRyYkX5catbW9Bw9aaDUVVZDupzmPuZA8tey9P2B4YUVSQrEXPwhwSpTpaLdRm",
  "key28": "35yvrLrSjyLuwRzRjPT64s6zmfLPa4tzmvrJHRbfQCzhd2jX6XPYPKyRNjd6p68UzDwBpiJCAG5gZcMR9QWnJW4x",
  "key29": "jzebU3eMuzW74XLWtiA2UNDsXdNcskEoNt5ZpCyuauuugHsYKLM3eyJRm9FmF4mpQevwf3qggwGsZsMPYqRmyuZ",
  "key30": "4JeiWfsgAN9LteRiJuSvSxaxjwawYzoQgUB3QFssYzucrbqijkLJDHR5hcd627bhcr3tB6dD5G9o1JvaPdBAVpmJ",
  "key31": "2ob9BtFhBXgz6JPTGGGFQr2u3qRyAHCyXU7NmKLwTMgYWvddxR1cbcnNCqHcPVK5ndW4JEcq1Eiu18MkcXJ9bXmz",
  "key32": "4GyRCvbh8LycYP5H66fmAaPbMK3BJmG1MgaUcqJ5vDa7H3j7toPm8cEPXatMet2REkCgJLiZwyvxqxUXYGXJLTyP",
  "key33": "3vmVv1t6myJRCGfZhSuGQoPTjjscv6nAUvDxnVuu5SiN8edGu4Z9DPLRrLoJuPetW5aHgY88vuzBccAQhGuiTutb",
  "key34": "3bH4FpGbrVuXpA6YqDBfs9qqcUMkmxWsgpY7hkWmjE2jfxWcKqazz94Yjzt7vFVduivjej7SY19RbdnPR831tznx",
  "key35": "38fuwV2NR6ef8MNfuzhT7bEYSGz6VihHCnkuTbrr1fnrTeJcKyA1j9CYGK5rYwynahKjXD9SrZzEy6sHDj3cUEz8",
  "key36": "5GYoi22mzrYrA5X9uq8dXDDeyPkKkmEyKKPv7beJdaaVsyuQ1HrNiccpTaPS4M6bCdF7mRiibp1eFACDj1ttvF1E",
  "key37": "3eK9PLQf6nKDmFveHD7etZgstatMJvgfdpK1W7sV6Zy4hnguFhTtsY1pRpWRFV89h3VwfCih9VuqJFcm2CE6hsoJ"
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
