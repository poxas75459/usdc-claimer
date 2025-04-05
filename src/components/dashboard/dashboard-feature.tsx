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
    "2GVtT6Xr9ryuEg32ULYVBhstQWnE8mgbHRjHUksob8ydRYEXCGk4iBRkypvq6VZw2c5L5JAsfMCvofgjLuEUrLDv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BjCzTZVpvxUqyYgqeiFimh2aFzNvwkV91wzKKcKtEEx14fgNi681eyxREu2znw4ansaeF1UQHt8cH1Ace3gKRGQ",
  "key1": "2wYvWeQ2w62z4wauEpyit99gF2zBTuSNGzvqnn82ZzXuk5bJVzqkdTy1bWXDJbDPFeM8pzQNt563W3oRAunCxebX",
  "key2": "e3BU4MQZU2ckNvQFqq9GShb8YQ9hSFYYE3Mk4uvX9kUbDTBB1D92DuAGmmraWMo7kos5brou9asAw4rRJLe3pqj",
  "key3": "3zcihkzzRtaTcgJwNeCYqo8D3HcZbxee2wo1CGT4fcqLEvKaDPXdqKaybTkwuZ2EjHh7FEaQc6r81n9rocBnt7HT",
  "key4": "3aR3onJyAm31fr91AtwKGJJW5dHLhpRkgqQBbhfZRmtx2HjGawELb6e4wJUvQDi3jVom4Et4GHHdN1FF1by34d6q",
  "key5": "4iF6Jdjp2TkQx3UAEumhHqinhRCx3WxmdmFWwTcsX8qhrVFSiHdtvzQQFFsdu4tnVrEo2nxhfGp3iUXQheZFdXb9",
  "key6": "2eXusPS5T5k5LdJFpz6WPzJgQpMaGmaPVRFw8DbH2A8646YtY8XsgAv5zoK84j78c7Makpn4Gyt8vo6rADGKN9NK",
  "key7": "CRSb4EVrYWWxF1NwSzGjbn3HMkX4eJrWtFbuvrKPjNVzv9jiiJkDLa5VL6asCGMNEg1gL35jmRVNrzAMNEMawmh",
  "key8": "2kPAafok9iJnkjjEMkx7nPynx7yc7NWNZJkRRXaYimiySKZ2TaxQZX5g7Lc1iiivR6CjDXXpeNPmHtF9ncJpaPyu",
  "key9": "N11usiknHnDqwSXPYcc7wJ9UyUDWHDqL3Zafvvs4zhv2LU8E5phMQzyRsCWUB3FvgDEnWkEYbagqu58mwFynU3N",
  "key10": "dxrxa7gMWRgroEoC8GpZLo7Qe8d8oZKVRncnp9xc6iMGK4hezMZfa842dZGzNFnMU5ekg4iWon1xq111F9MxKe7",
  "key11": "542LherWxCdn3VNN6f3mKvGhtG6vQxHG5BsQFLV7oemJV7m6avLm8S5XZnaPqJ761DXavxxVS6rVBnWCBmuV6YwS",
  "key12": "43nL5RUb8ERURfLcdGb5EW4FUHzz3vsSJUL17Y7pJwhqXpQMF9yf4bVj1f3JSYzkkonqYhLgYoupt4CXGbhz64q7",
  "key13": "65jGAn4d5pRPJbFP9dR26HYRstBSmgks9b29KaJqLevyhpi6yrgC99Ggn2y1YbSkJdht1f5VMaq36RfakKQ8X5kd",
  "key14": "3teN6wW15JqQ7wP3DjkuSg2AzwWHGv4opXMF6AruzZKrQawoEgR957LbfePvMg9oDZg7BgRTbU4XoFKj2buETrTb",
  "key15": "y81SsWTBMFccfvKVhkRRFibC5V5UV8ek5N4BjAXep2yNPNJ3DyqshLi7CLr2LjjFgaVHxSEURHthS9Epo8Z2t3c",
  "key16": "5YSXkd5Ezz6et7U3QPbrQhHPQTMjPqfwi2pkkPwhaTYZxASrqPjLN6C4z9ziQQKzWQVSHrLPhCHd44xNJ38Qig25",
  "key17": "2PAmMQxVGgxkoasoDnDodoBkfbwjQGtjXVpinZVBTUPrTqr8siqJ3gCUqZ2Xyr2jHNJ7YrWaSggfpGgJquHGXJJQ",
  "key18": "5NUTxhozAbGhuGpANkdmMBQESihru6sK5BqHNurqEmRjkP6P31EXh6y3SauiZm22KG7wp4b3WTZbbdf9tMR4mXvn",
  "key19": "27iJyyXJ9CpyRTempb2fN4MGcWEnmEugKmVC5tyQ4m6irK1nuXy9TZzrNmeS4BmX3qseptE8sS5AiCxhQNfsFsd6",
  "key20": "221aPpzDJSFZUTNTMkML1EM8ttN7HZPiHyWzCBY35yaX1GQkzbJfbRF2VrZFzG8qVyLyZECV2URLxTMDbd3uGwt6",
  "key21": "3p9rRsfjPzy1r9WpXQxNMajLz8n95px2JqQmdDs9QZZMRbr61GPJjKUMDHFkGTXCiLLQ9bJQbDrXuJFg7TDAHQgx",
  "key22": "3akyjf2SUuMm2TtTNSRwqdxdtR8QHEHxpYuVo9oFrcX48SQY4VMCWXnqwPBoBbzJ2eukspkeLN9pUS6jxHhTr8Ky",
  "key23": "5TnE2dVjCHjnMvWjcttkFmkm7KUfnjv4TLSK8Ajt1wNTEmkyBrcZA13hmc8RfpBNLk3EYr8ogRrvCZUnZxnR3fhL",
  "key24": "U9zWU8abWjHrXEZARStbnAJCc3kuDZVU7dDvJrsj1BYbCwjnrw9BVexgVHaVHAXymJy8SvdP7Y1LVD99apuqheS",
  "key25": "3PwHerPBmD9EfUuUDVEXrhxRQr42rWRcthwkiqms33msGbjs6u5dw2kavJkBvWu3YASXjx4nJ73ZHPnRcUdUnytp",
  "key26": "5g4h8j2u7NZQbFUKmyoMXxgD1tPi5mq6ZFnTUq5NSbyXHortWyfQfNnY7FfsDXN1dgyn8z88BZzXJ4pEZHdVB5P1",
  "key27": "5CgrxuS9acr54WABqGDcLbDi9Jzu3HHGju5RXPtGLZ8LmXLb7LvDBo9w6rdtv5sWuLAxQ5dKgHm1sfXdmxyrnEzA",
  "key28": "XC9xn4BuuiT7TAio1y3TyNmzFbNJ5cbGZX8M5ebepyLwQCCmShPMSQeqLtM3j6kUoFPXvuVws3Aqj9ZPnxAGApe",
  "key29": "2WsScJbXHYNgizdTvhge6nGryUMDtFs1Acy1vNNzRwCjsrWHXQ1S5nn5fPgqcEFhyYty2Q7AzHtuagZ5NxGKCLnr",
  "key30": "5GeEGhVPu2sTJoSabTDh9z5NgS8x9eRLvujj2axo6fAtoPFWfgYrQTDii1eFtdA2R7NGJVBEt7WPtHkW31uwtERh",
  "key31": "4XAkNUQNHHnVgbK18SpyPYDqnEKksS5jPeGT5QcX4p299jx8hAMqfMuvTkYhteWQu1aM9F2oVup8L4TgG1jK3azW",
  "key32": "2wGWa6BG3bsEmnX5JgvYBfsTz2Y98Pu4519F898wECGTArK5xXcyjSHHMS3cPE8V4LGe2wb9giZf81sbaZTeRaj7",
  "key33": "4NQHto7VVmwDjDPJCW9Xdpv9JiiTBzEyNBMB4EhHEc5oRsABuK1PtzdAQ1f4o7H3qLA1jvMdn8Ud6ov6yYGRi5Yu",
  "key34": "4SLv8AjWjDiwgMKXaz9Vr3BQfRHoNWTZk2XwCKMKxCtAQkzs1xDtA7bsPiXchGwVYxwE5gnFCDog7HsN5aXTZQPN",
  "key35": "4sEtNGytHmEP4jF6Dgy85Vb4MtRiZH9FNtUkpU8g2YTWFm2vHcTNbWTZ4Ayi6vXigxB3GEiabxmYgosFwrCM3pjC",
  "key36": "63dntc5xSBzteWTePoXT8SCbcprEiLv9jrKN69eHSn8m4EhuhBD6JGo1VUQMnDT1ooRj7KwS2hz8SMsTsQq4bwUR",
  "key37": "4DVWCHT744ZcBfnTeNyYuNJFo4ae4dhZnAamLa54mKaZaruiXk3reS4TmmrxuacybY2sH9yXP5EGNqbH63eisugo",
  "key38": "5ETJJTDo4FfcDNK7zuLXbo59hiFQbpwG1BWfH5q9iTcVNWgbSq4MWCFxNFksXiPby3FsVqYLxbhe4HaTeuXfSRs3",
  "key39": "4LyJbevmAS2E7cMbYnbGdi7NNBV25D1uq416JwmwWDty4Px5dN2XQrQe42j3Tc34ND85fk2DmNPiYB5NpaoyMfx9",
  "key40": "5xPxHfDbPv2VEvqfWWVSgWKFNPhF6GuRcmkktpzCJa6J9zFt2P4rrrtMPkSLw3tUGC3uT84aFHeQm3iQ4q8k25b5",
  "key41": "5mGqg1dkbYuEAq6u8tBjod96j8j2D1sUzNujtvWto7Tzo7jgFinEArPsccgvGyAuQZpAe4Vpp62NHQfVFHc3hiSR",
  "key42": "4pjGxCQjz9Fo6vRuqu3T8YsoGVcdpvHQurp7BeDUqJYZ45V9kiDZjrNbXmijonnCcgsx5tnBRybQx91NepvYiW8i",
  "key43": "3Ajp1r82tv8vF47PnjgvYvRD1NK9WTkXiXJEN5KmAyk8F5C2rQ9UtmQ5R7SwvnDPyo5DUuUHGre5d8G8ibuP4KG9"
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
