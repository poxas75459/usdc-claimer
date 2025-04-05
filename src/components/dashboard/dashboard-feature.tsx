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
    "iDjr6eHiVgExMqjPRXVf3NH2BMX26J7djnGh6T8tQq19Zmi1zxF69WxUscZ5eZjdKX5VGaJpzJoMbjrgpmrXgv7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nnBw7Ft192cPVkQvWhbrcQQqVXrYCdcphigYCB8aWcNf4KBNr8wzvrh3EfwuLXaEXxSyRNs3h9aLQdtwuKQPoJv",
  "key1": "3jYBR76cB6VTWGiMn5qzbMhocYpV2UQrzqyMs61t5EHa9Jh7ZinoXzCy9LTvq1sEAT7baJZ6FxJFTAyhVaTpKcDj",
  "key2": "41SQMPu67wgxUTogeXFc5pB8Rha2WCdjU92mxPHvfeW7oFiBSiMPbJXt1zvP8eWBEhL8JmyPg8aQ3iv72GPKmcFc",
  "key3": "kSrLR82rcRhsHnQj1unB6Thjmu17gfJEoxBZKXRFKaxhmFMzgNa9C64bLkMqhHWo6rnM5uBhHK3wGxTnyu9ddmD",
  "key4": "5JEQHfYyE4azSmCWXMxgHWtaiYnhTVbsm9CndoCe88146yaVa1Ez1XmZjwUTWWVa1CBiRb9QkDnR8nGedCH6Eie8",
  "key5": "3LBNBCde9i2zc5QreExDChkc3vHEmEdjsqB8WCFkPHRHShWA1KKWdZo9889SjyP1469wgFFVkVqWA9GaqccZHj5k",
  "key6": "5dfbichNQioa4K84DMjvXYoiX1hvPjxhpYVfZmFxcHgJNMr5vcS3TUCnShaTU2EE4ydN9dgwxYUnu7f7QoX6yinK",
  "key7": "3McLgDyU6DBNNs7augwrPD9PDPTNJkfMDqD8GpAfX7WsCCc1LkiPrQMbzvNZyGfotYb7Vmbh3fSzKXtmX6hsBCSt",
  "key8": "2sTzFRW4kLEbrda51j8SD5nMtuaLWgo29Swe5MNBZk8sVh88PGXAizaLxgLoZoAp3P498pJK8Wa6tuNzwVQWdhKv",
  "key9": "54AuxBCgYnoBa5LN1sFjXA9Uh2RAJAG1ZrS1sBc9WfraJkctxqK2M1n4KNjP47GfHvtpXP4fHC6fMqmyaciazBo5",
  "key10": "5qBTiEojkxrgx4XMMZBj6xrJ8oRnRPUEc5dDsuPkdqfB9SF3rTCUuYyJjcscuTgxhFuhxfxf6RFBhDpnShmuqH3U",
  "key11": "61LfLjUNQdKKN1NDkz2YDYjhvP52yyfYZ4LoRaBq1UpypDW8eVCdBSq7hx53WohHGwYQRu4MM2Y2xv3NHrEFtqAV",
  "key12": "2JoVj54i9o1nEEqLgDFfpTgJsdKosX1DgbKEYg7KjXvFor2QjYd7x5NMUXgDxEJdrLKgyMyEV17AEzWQyBxTzV3h",
  "key13": "2xx3xSRhuswqPVXChDs5KMbhBZR5eFE78QmZHi7WBTQnmWwWvU9CpisX81o4EQKm6UnDSBDs4Yi8rGJbuVedbG64",
  "key14": "47Qekbu9SPYu7QwfuAKvLKpzKBLsAJ4SPjDDN3U2BrFYAe3VqfDksYGHvn5HNdgYZNCtufu8muBhKTzhb92ZkpQo",
  "key15": "46L36HikVAhfG8UzTuKfD8oJHXT8xc9mEjwHgBDF9UUsvSUv3FhwzkUFdwe9LLFF98QK1n38o5SWTmhvjwHsbX8J",
  "key16": "4cQKtvJQwR3aMnH6njBX9JC6D48LBVWGm8gXP7T8F3sw11YFw78pEctjg2WvcH4FRwdpnT5p8jTEDzXsQce1FFAV",
  "key17": "57s99SUD1CqN6fnPmXZAtivjj1NN1hzLoGsciXdmyyBQZoEr7nH8ht2T5TjkZ6iuRtdmGtPigzazY1m466Zk5ST1",
  "key18": "5PpSWVzmXDatQPbeanf624kayFsvJfjemuxXYFECT81GtNtwZxjj3mhfzv8m1cpBdrT8qWEaZWiQmh2M6XfTAmnJ",
  "key19": "126Xwxswds1r5jz3jjCRgsZWJXieGqdUtrMqwTjev2gVSdDwHm7Dycm2twTaq1Ydiy3yiepfdwq21SPU1V2tULpC",
  "key20": "3ChmCUJKUCxo1hUct6rQCmbe3iKwk33DLeX2N5bF29GS9vh55fiWUdhfFgiBGw5kC1JbMNuPbJtGKkGHyL3163WT",
  "key21": "2fkEaNxoSpWnUSqaDrJVqmLEYtTQZEHEspv75bA6KK2PeJSnYh6xL61joZrJtztKVk7mFMcWDZAD2QVHf9gd6rvx",
  "key22": "4ibQkzdhRapkJTM8v3874fCAHTgkEGZCPak4JogRi5ejsVxCzz59qprjQYvpK8zZnCM8Hm4D3Uj1xoLkMyMqU8Ka",
  "key23": "4FgZVargqjcQTVWztcVP9FEr9gcdP3snSqaxFC1uVitUDka3Vn2eQfJAMJ2PbMvs52GAXviUosWWpQvs3DtfcR9B",
  "key24": "4XCZnHFosWuZUTqwkniLssYhwxSgK3aynkcDR6gMWQkuxJesVvHUVqgkB8Co6T2Befs6PDCNPttknR9EPEHh6mB6",
  "key25": "3qhwjt8X5nkGZnZvBynrFzbWSQ5DVssMuYxriRqaMN3hMHhG3b8QcCFKgvFosAEgoZG6Bh5n1BD2uEN84XbdJL5v",
  "key26": "4oCPua5Jud3dwqem7XmGVHAJgEAQehuSgCDabhNoaaAdN5nVLdz85hM6kgyNYYUXZALeEXFYvGyAzhWWXHStfmb4",
  "key27": "2zy3HMUnhsDMpw3WhvaGdjXAVVVg2DpTPnzYr4KifRj4hoR6BAsDqEufLiyx8DxmQEmLsJkicSk9bQHXM135rEtj",
  "key28": "2TFbJdBafvY9PTakxK9mNwwcbvrUQjtzmJm5Vwbvm6hfaZmebH5WSunHhPVkninke5EXt9tPbtn3zjUT3yBqG3Wx",
  "key29": "4o1vxckamf8mttX74PvbHWA1i5pkRhpWdFjWKfXPTTqPvKVRY5pf4eddHPW8jsportYzXAmcgnv2BNrAXJ7fj1sM",
  "key30": "579D9yca6m7pyQcE1Fjyt3KjQazaoKYeCezZsEze2XSHDhBoawGtQrfNQQnTJmnPeYV9hGALL6m6ZnPH2BoAqVbB",
  "key31": "3qXsgFRALpf5KzDgM3J47LdWyyPdZf3jBqmKoyXNz6QQQkJttu8wit79K5nHPGHLBrjd2u6G4q3jKfWpxt8UR3b3",
  "key32": "4XrHG1Huf5ARoAyMVA2FueWEx5S2yaZpSEmM7r7t4tGLntWj7GWJVjAy8eFErNsmGFfismYxc6CUG7oAB4t5svwX",
  "key33": "2quQNkX34TTjfW7AfuuWFcnNnCTBa3tH2P8GyHSqVfKByPN4mrrfNwhyXfptSQzY791V1ucV9QDrs3wDjacPECN7",
  "key34": "5JPkrvPcbANNBcVQRSQEkRJ7eTAjxLqKe8oeftx2cwPp8Tda6j5BjgoZDBnEyyzQdkF4FHWmnyu9UXedaLXb5Y1H",
  "key35": "GALCsBUDnj7MHQ65kdYB94YCJExE9wmm2ox1hoYhHQotvvUTemjiWiG4wTjsqDf7SqvrN3BvpQpAZ1u1CMC2aNY",
  "key36": "51dcjzuUFQQNAce7SuVF1a4qwihK4yF9odmgAvYobBQsLxUsy7wGYQd52ypivSxPHTshew5koMWhLvdEeC9mP1Gu",
  "key37": "4RSAJ3VMQEC3eurgxxLWER797dErjNa6ovgrCztz7gjATbAV2RUMonQi4bPM3zKnzD2NP4Dsr5jEEww2xdNj4BHC",
  "key38": "24x8zkoL3ipra6TY3gE9NSus3KpEJHBjSbRTCfBn74JBhRhRvFg6HKyT9gZn5XM7ePSZtL5CKr149eS4J2fZRz1N",
  "key39": "4HkprftN75KqrE8EQjMcmk6ZuPeZJGmCZ4uvWYPanWAB8egK7K5NffdSQnThsK5FkaHSpPupCiqX1ZXgNeetpoab",
  "key40": "37PqfDykEcKLDocobMC79jvzjiZqmksPQgAs1mhQYJHyoPWr3MADDj9WrMDfLab5UszQWJkZRii8MRfo6rD3oqmZ",
  "key41": "4vAxXKDBs1GMA5fuKpdnqXuJ2uA9GHrXf9yVziVec662DRL8zde5SwL4rpwzou9nWK17Xixz3NUQNK69zeycFNSe",
  "key42": "3hEVNM8AXoggh1hPwLEcor7KSfiZJxMvB3mtCMXh9VGx2QgqKq4MWM1QV5Y3izSu8eag9VuAEZrpKprVJ9QNvhVo"
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
