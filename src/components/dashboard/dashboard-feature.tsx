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
    "3HL7jpUdvv2G9SzFKFKZvMDbkhDGQhXwziBkg4qArGhLVzNrgYZgR2464AcegbMoLd17CTe1jTXAJBdirZGqfpSM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "547zcRcD83NH8o6SaNRzqERyJGJkXuX3mbhSWAoGMJw1bxQnSLu15B9m2MyVXb2EkgXceXdtaF8h5QxjgrzLfVse",
  "key1": "4PjKv36BHwReur9CFz27M22dQuKiBdH8ZaNYRSNzQk1hbnUqhtGWBChV2ny6fBKTc8EBR3VbFaWWCMjoJGahjDEN",
  "key2": "4EbuoDekmcVjnUyFBUL4SqDsKLFY8MScQBWAEwD3pNdkrJ6om2VpZiGRYXxCU21eapQvSxvoTQVgVUXdB4zaHT2r",
  "key3": "5rj7AUoSFSxNPDoU3TXTg3PgNentr4Gbbi1FP8fVkCy1zyCoLxJ2nGfhhu8vB8BsRGAXWv6hrFzEyiuDuao8aMXK",
  "key4": "sijXbNUyDKRjP9VzLbvcg3WXJqhSA1sBsDFHnkoycn4jb3UwpwKVVqoppPzJwMegextJ6DBsFyC8iCyLK9f3wwZ",
  "key5": "2LBMGj1RiXHYyxcgLmRHodQW2eEitNAyX3paQR5S8tEVLqXwuZUkiu1DmuCJnYiR4ZEEePsHyavdjkayJHdsjYC3",
  "key6": "2SBeNtguZbcTETQd7LBjat8ZBLabZLY6B28crS7qJRsu29stRfx7CoCFUfk2CNuvqCUDicc8HysFHDTfMq22eJo6",
  "key7": "41n9q7tNdW19J47DtHpFt8J1q4m71BCtXSauQVsDxjVhgLcXgZyY7UjF7zKu3Tfvcwn8ryUc8Vdv2uTztaRSqJo2",
  "key8": "5xL7D7zTYxXKCdqsfiPrT9YksupvFmU1wJMDSGE5KiQ5zcWCn5MPkLN8mw3gULMHckXnBkxCWKfGpVTdcjJAahjz",
  "key9": "4qDLZMCeEMBB8GuPezEo8iy2svTt3zSejDbtkSNCHm3D9q4S42MyBc5g3yWAXUyjgTyBtGmZo2NyFCMGVtLeMNzS",
  "key10": "QrYFdmPBz3hb2rJ1TcUZb8HnK5o4LoZt26YDaoPVk9b8FhogbgX1v7fEsccXPqRzT5GkuA8ZSS2qdRiP5xLCkSr",
  "key11": "47LC6ooM1KXo5efoBqH2rgJNvpeV8fEVwndS4ViHCmEdZouguuVYeJZpYPbNGYE7dFYExuyPjFFETpx8yuKPkGMR",
  "key12": "4QX2ePmw7uos844kZLZQfYyWjHKHYAfmGiEyFEF5sJaMzhZAv3uhmktdUBEWh5Kp1qKawkPNwt6AvcxZsoKpVF3J",
  "key13": "4XfJp6UEPD9EKimtBhYizqF2nRGupHPzPbFXjieZFLkmH2goDKnygyk36ewbXXP7QTktdTPc4dPbkZsi9si7cUds",
  "key14": "35WWJiaCCvUbRdEGkW4wNGL9vNPT8rK6q12noduoaLQ92EoGRxCrBbVvn9U1nBn2jn7zkMhe5sv56h8DoqRAjzFg",
  "key15": "49wZidjb6DnhveYJhBm7GHrTsukYuNE9wykJ7E6uKkfU8VTidQYYNgourVs1iZsUYbJu35Ndin6iUHLZQbfxvvsa",
  "key16": "4Gds8P5XagVJxaVCN49Qn8CzDZbHXPpk3FVNnGjeEGb43c8VXkmhzFg4uZPHqUHhmcigBtvnmrxwvsg9tfZ1N8CA",
  "key17": "58p9uwCTvfZPY1UnKQiborCVWa3XBmQgaTSGUMwmJHAsr13Rp2eyMpWDMRvXUknxSDEWKs8aqcd1FUdoqNA6iYWx",
  "key18": "41wqAa4i72xS6QrNPCDLZnnXYrHkvp26AhmiFt3hzJDpzsr2FUzJFAy2PtFTTWoZsu2R9FXGJRhkgZosLXAiV1ii",
  "key19": "27kzvF4SEZnhwSFJza6Q4iNF8YNAY3hKwc2X6T7Zax1qayPEYXkfyoKWTVy8bxt7ct5u1aQynLMJonyDM7nbn9MK",
  "key20": "3Bnod8YaG2LDiQGsfQxUpnAiyNPHBgUrm1guojmY1RPeRxju5ZQYtVtbtNpohneJkxkJycdoCXDhiFLQ6Hzhm9oU",
  "key21": "4ZEUohcAyhkWwv8y73jJVPP43hSGvp6KuCZxyo4kNTTUXRNJUNUQNYWyeTP5N64iyfZpULiMHvdqMYdUGBWx33VT",
  "key22": "39deXHJ8JCmWGwXVBMWG2ohPtJrHXhvrjTN4BKsTRh8H15T5t5BwgAnPNLEc1K4p1nXHmgZW8EDqVZj7hdLFCiXa",
  "key23": "yNALMPJqXbwVQKYxUt5Xm3cnK7et5C9r7r8KD7KPjG6WzTtWW8HvkFSnkqy7PBYFbQfgEbeS2EbUHFjRhp4YE3Y",
  "key24": "v7ndfH4ohEAodTVJeCPVApZcUNG5LoBXLVWHBRZ16gW5YD8LhwyE3heAqadTQq9jbUKdaW4HTiDaxAFbAM2Ht7R",
  "key25": "SRU5sBsymkgQoDNCjonQRNYP1v7rGFx8ajSb6XvRXFD26nPtuwLnGvtedqYppGLE23gyCyv4f11cmQMQ4SAXQiJ",
  "key26": "3J3NXVudsQ1Y4Fqn5s9DHKuLckMANYBBaRKNuRX5ezJ4VdYw5MfTmzXZ7j6NJ5pHzvuLmzF3oUVrXMvv57bW88Qh",
  "key27": "4LhzcFTcTMJwi26pjqjz3SHeBmmrm6Xtpqq3Qo5sKE1BZF8QDAFokhukYHfavkhh5K1eMtj5x27yjqf44VoLfoyB",
  "key28": "5SKCjbQ37Dm8A9GNcD5noJXbcMAgrjyJmLyYyFS93zABmCKduDNYLA28Mv72VXTgeopNFV1BoHVygAbX1FDQfjE2",
  "key29": "66ortzMD1wpUytwNXMfa9zjVd4UVF3q86Rgt29Yv6QWUBXkDUBZ3XVgGxQMaNiZFkYAyzZmMGbPu1gBHBVK3Wau5",
  "key30": "DnVgDWZsgNh6prTZpVhy9Dg3QhcDL8EFzg34A1Eja8Hq4CoB78QaUDU3V4c2D32ij8v6EFyvR1yvfwJwxrQqwE9",
  "key31": "26x2RSErNdDM2FRM2uLLU83jGFHVm3R4KxxFCqecLC7HH2g4BoqUCqYVWJXEvbZMGY8UwnqyDa8Bnd1ZX7xoQhRU",
  "key32": "3YcK2hYUQ4CHerZo7VLDnzF7epmVPJkkjJDUeKpgehEZtDvv1WEE5LuB8iZdC8xzrfGKq1nuMTxuVPkZGSvhgPzp",
  "key33": "dsLYn7qVpdevi5x8R8Kpo5jKW1XuXcyBn9HS1C4C5KagqVVus12BLiuZpdzoe4xQ1YGb7kBnV2BncgYpeNeQrVq",
  "key34": "2LdHvqDQPKPxQVeuUryejkZqa83sWPf4UauiabwYaqDXn7hxcxBemY6ww8CLt4kieyy72QtDZKrWf9H5HHqj4dpq",
  "key35": "5HGNkRYsED3fpRqQnPSQhkjgKiPyBEP6pEsuzKbMKx79e8tguuHsotTQcZaQ5zEeojcBUXgUpLyaHuDyyLaHvKNz",
  "key36": "TJ8g62xHiiEb7bSVDWbWUHPwND8nkhF18gGPCXbNLUskTAWbDi8WXnmWb1L9qxpCavUBsBaDCGZ31AidCQuQs7i",
  "key37": "3DTgqYZp3JdVznHZx7m1WtREPffA2LH5JfQGb7Ks6Pwi6U4EWRzgeDQh9q3tqzk8YJp6dSknxPvyUFF8SwbNNBk5",
  "key38": "5mPiRiTTPseU8qNMYyV7aF1vYioaKWjCGtdcrxqYEhinQvMys7bY24B1Ukt8oZEWpZubC3m7bvj9LiaoovzjqTZL",
  "key39": "53QTPGAMm6BmD1p7GjDXwMrM7maAapcBmWyMLo8yh3Fz7WejDJiASovBwGxBRix13AeerFibRVo1EqcXfo9pTcUY",
  "key40": "HZUhsGRepDYU7P97iYEyzLyGgyv1L83RpSprzwYspT56vNdQjySjkaS1x9Gqf4eoFFZrrCQ9HEoNr8hsqp8qd7v",
  "key41": "4xkVQFa6mQ7nsUo25oiEUcdDcmGCnCF9huQffNtFK1gybXNpC4xxfMjTs1UikxL61fcTMKDMz8SBcgKc5M88ofoA",
  "key42": "reg4BmXuy4Fq9xacGT3hAdhaNgr3Ed6UZzBUeibPgMLbRdsDy1bmtp7yxpCWrX3bEe4QVFLDoGQn4dmaaJExy8m",
  "key43": "65oED1QML4rEmVRr3NtiCM6TyXFRZ6LNFWZWqgQmzXJPNi9nezoxKYLDjuGgsMsVhsftrsoUE4gTuwwxss1jLZqV",
  "key44": "5pVVfGcJFH2k4c3qXm8g6TCjcngNTP7RYu5V6VRDJRedYp5vG9xnFREKfWbqko1wDGM6chC4SGvxqgNwAXWQ7twy",
  "key45": "342Zd2wMuPHJADiHTSWw4o8KuEQagY5D1u83YTGccZ7GN9wVqjNky2jFhB2PSVYVNwS7bac1qeF7hR6ryCNCqVN4",
  "key46": "3GxY8eGYWgBbNyTUeP2fvRKKKG7bNDruwk7H7wtPQJc5iqQDVGzVqqTikmsQpBukrz8Lu2e88uh6kJCBY4ALmSwt",
  "key47": "sARpoy9V5RbgDyZAw3orwsQ8dSk58fx9YUFrE43MjbcuWnJ3qJ7iFDiWusdt3wWFrN7NRKa8kgNBP9CfopXRdQH",
  "key48": "2UArRCdBs9oZ1mC2Hsoh7tp8kqYPeEoyUcNt2d7C5o1Bb1vhRqE7tFJ5JzEuqLLwLqbMs8cy1yTzqpKTSAt3fwBL",
  "key49": "61brU6rhU64WDA66g73dx9oFPXsqBMb4S46AjArmFT3S8AjJqtq2Y8Gvw9MhDRyusEWygY2uECYiXVk5ePMZ8d2W"
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
