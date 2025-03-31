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
    "52T9obvZLRXSdUHWCb3icyKaWzK5aCVqT8824eMueSFN8PPJn7yQSFsm5aTwcBJoioyRuuXVS1ffuPUwwbkDcrFr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2coyh8czfRrEnyTynksK1vf4X3158mGLU16gx348Fb9BMnT6SqoRJPrTqezVgHZsFaYrXGEsjcqMcK4XAGojAT2w",
  "key1": "21JbdAzSfqfd6JyhttgQ7jTPRtpGo77ydt8HWyH8w39HrRxX5vRvxiZ8jqpjedgpT3BsvhpMFhRADtmbuHD5aJwe",
  "key2": "5rwViHB7Zy1aJsnQ3oX8DxebF95qNP9PAdGQFGz2UdrUXzSpg8qpsGU9fVsWkezn6JJPZP6UnfrMZyrF6KtFcUj1",
  "key3": "5kD4jcgpLwDoAoD7aLVJ6xeScjZeLkUVfEYPZeBJHiHn2LbaC8kMBC5CSX7dXRWaKEBQA8i1gi4LrzXMehbh7996",
  "key4": "3H757S1UyEjntdFCKTpmcmLjyPiVbUHusJdPRL5622F87ZpcGhdmKd7ZR84xctxUSeuXs5TtJwsxdPttVxBqFgoR",
  "key5": "Gz3sU2kgnjA16z8kkd2d7JFoR1KQbW3uJmRnW8mJXhuzmDntdZxx3p8wa5nNuhNVqFtV4STMa2EE2YDamk23Kow",
  "key6": "b1TZgU9XyUv4HoPdJQ2ex6SoFvs2y1ad1xsSNshFufonD8C7WbN3bT4JaUcWC7XdkjVm2z91Yew4g1Yqb2CpohL",
  "key7": "3RSVaHG6wDj6z7PK5An6ExGEZ8snDp8weCBwvvA1qRM5GvtRhVZkUP9ux8yzKJtHS8yG8Am5EWrjnWyCcnbAyeHh",
  "key8": "5SboJqM3xY5eApQuUd1nnVGiA1kuUTBcvcSbf2yqRvEciKJA6qAFbXeMu7Tfk5WqFpxukY6amZdPauV6Ung1eWf8",
  "key9": "4fHR1bS1gy2ZwSeo6WDWoaz6xhX4DEdLknTBW7MsPkC5vdVr8cRSajC44gT9aEiRin7t4P22KWVwQaPG8hmARhWG",
  "key10": "1UsUJd8ogp9aV7vBJJWt2DrZPPY8m63nhFr3QBhBkPu6kqwf6YRUAhGkfrgxarwm1Wz4Vf248Ja4XMvhxSzqShd",
  "key11": "UaPY8TmRbT5m9P1QjfyTDSbzFMhK48wEmmALDfQQWywxY5HuaRLDdszBvkxCqaEx1UKEHvguFdWQ4H9s3BTXuf1",
  "key12": "62o71L6UKwwWzB7jXsdwUNf8w4EbFoFePF2mC22mVZozLcRf4oaH8vFTD6o2hHWsYUGgs8LriuXSwj51gzxq6jv4",
  "key13": "hM5r7KqQxsFMCjYnsSZ8khfn6YK5bSN1C424LkmoJ7SJBoKvXZpqHX7Y3bzjGdBBRXwsRv8GFjggM8NYrNZCBpW",
  "key14": "4xkLUBWXbCrVStyDNnfPNnZQztQwd6eZkT7UX1tTaYwWsVrEco9Q3Zb9KXTPPw3fpkQvLQ7X5FySimSXABFVyRtk",
  "key15": "2PMoAZF8PaBFKxSU4h6vQDzvvSTHGkJmLQAT2DnYy7RJx2tuMVb6Wo5aKbwYXmRY9uexkHHDr1rst2GkuPbcUGfa",
  "key16": "5jSRxnp5N9apZWSWyayWk8R29dKgqvt8u6JrfDja8JuwV9xKtiqxkQjUajW3PnL5E7XKvGiVzfpLahCzswQ9Af7M",
  "key17": "2uf15pPs94wizxAzneZMmyAE4gdq33KRvzcc53WefXwYs64TxLBST8TDSB8iNLBS6nWThJACPT8Tcmi19NwdYvHS",
  "key18": "5ULqsoVHHJntaf7oskyjCjLU7x673Nc52gEuZ3jvyDu4DzoTDgsKLrF1bRq7ZKxd1AFAhPfHpy2EPEGFZtp5w8Vp",
  "key19": "3h85NryAAzDwGCW65aXPT1JVbobTWWhowCDdsY4xpn6B5PyhdjjqjenzG5GYKi1SWaQ8qge8zt8tXnRsXc9kYQ7A",
  "key20": "4Mc8JCeGoArtpkh262rqYiS2p94keCTtnxWeEWH3mE9tActcmBu1sZHBCgeLEZSQZVLvaPC97DhRFDA1B1219CUK",
  "key21": "4mQSB8gSDgGr8VNGBveSEfEgR24Lt65p6fxp81wEj5J9JbtCrxcNsx5xKgrbmJh3tEcBhBtiyBcgdtxTKwYuF1xA",
  "key22": "4A6LNyJVNWr6dGVuY5zPv4pEARXkFM8rpNksPfMJPKx1XBtgoa1LK1cx3ptmDEohf4gi7LyKvyYDgD9gQrUmmw6Q",
  "key23": "5bZJDG4ATRjBSg3Qc3jfXS9pd5FmHHq7vtS1zTie8iUbh3WR8nRbqZsFZxoNdM1hBe2bMV1ZLCwk8E79yDnVpn3P",
  "key24": "3yMqa355fMaNdna3bvvCTkaLPzNFwrW5f2i7twgu51DkzQPxZDP8AKwcNp5anRvPLrzr4GVnzvgm4j1ZJnt4L22c",
  "key25": "zAzpcwUJAzadxCpiNdkiyXwvb1minPVqkrKpTwvSdW25YJaTayXnudJisqnWR6CHvqMA7j6Fmj88RPZ4V2F3gDJ",
  "key26": "4efpEQmYkbqpWvw3kqKDY4cZVsFFvR56kd1adwyg5u3Sw2XYzubGs9HT2WUL4yjVc4L72YAUoPvNDqN3ypbHj7am",
  "key27": "3AAgdyDYr7Gcr4NVGqxjbycghg5eEooMkPRMPHZ9BK84Fez1hvPMZY1P67wagekbUU6tfZ8z8DwVhUkiyCHxRpqi",
  "key28": "2wgv7V6i6HtmVHQPHQYH6Swasf9qeChCY16QYDxrc4c2ZNCF9rqyWD7wafxWrG3Tb2uMa9bEJ4U4wBsMg5WkBZ7A",
  "key29": "3z28oUGLSzZEp9uqydi7yQxEChmv2dZdSLzAYiVvwa7MQAgyV57QSMNaLsdcp24GMKs7uPGnzxo9B4N5JS8SRqTP",
  "key30": "2x457X16ar7HaxYfqGd4JnM3Hfws6V6cFYGK8kayeBTmcdzvjhWo5CDQQ38a27V4CeRJqpo9pzbVvGUV6VBVLqj9"
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
