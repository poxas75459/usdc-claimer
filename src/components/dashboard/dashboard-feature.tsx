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
    "3kYaBB28sg1rVBX6GTYh5PCbt8TqqM6t3Mikyu6mg1zPQdwcr5JomiRwsB9UD3kc3LkQ4yWVCSFSkTv9P1TYqkxr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VR5Hujd9detApthsomHKZF6HwHj7ZcikBaujp4Qjhm9CY9oNWgPexXMej7ycweY6vG83vy55exiR46deyBULKMd",
  "key1": "V7swAAWcfyUaemoeU69DxEEMqk7TJ7ij1qddc5QWFUApJ5eYkzWmmoqRCuxC9xqgDmCRrupc6Ktj6RKE6EBYGFf",
  "key2": "4axMvPSx5MkzJDV1a1bwMi2UsPpUGLfBimTA37tezcP2q2m4gzMjw6uP2dHv2RzKVZkZeix5YZFjzby4Dtfy7GNE",
  "key3": "2VhCXUyfjvvVfJXvwUA6FPJY6ArDNE9FGDWabWdeEbSFDGu4GYi3ni2sdPdCEJPtumNWQfU8zJP8YduXSLofPJ5C",
  "key4": "2ihz1jmrtVrw3huQBPRSEgTSzvJLxNA2w6wPdaLUMC9EwrNMjqjAgaftuwj9TUVP3187VMUKQSatCBLdhf5P314Y",
  "key5": "32X1buRP781QZdhKeFtRvRzt1KX2tWSzuvUFwDUTQY8cxcfd65GaQ9NRJEJqL4hFZhq1rH7KycaAyWYMpuyBxohx",
  "key6": "5NEs8Uz17WaPiZALqQCaZVK2m3wfMF9GuMuxbZXmyGguk1sqm6vin5MAhNn9HxZDKVq6eTcr8EYU3QnVpdZSZHeZ",
  "key7": "38rukgWX8fp1RxTaFW8PnYmoAssXq3f4XfrHstVN59dz4QQnXXfbjbszSiLLPmJ5jonxDzZdXYEBkKTbnbNzegUc",
  "key8": "25qqYkPYXK59tkcaRaVL9Ug2Fp3ZCUmFE7hrErjsbza9CZgknmhX6nE9CLQP1ZkwVhbZV2A4KRFkuxqtDZwPmMiq",
  "key9": "HzB8Di3UrN5HoVLRwRWpeooCjYbSVuFatoVf2xwn8Vx5k8XMSsmJ8hPf6DXbcNPfqCCuuSe71XjShhPpxtSjEme",
  "key10": "P8Sigfh67sShacsUpxZ8t6tzxvWfCQriBSemwkaELnVLswaN7h2NBQgnRk2mRDYbyhFnHRNvZwEV3QMnwELmnA8",
  "key11": "21h2fhTJvEv5M53mb6Db4RXUkUX7uy7XAxhWCZEg4LLC3thgujYpDPpeSXxnLyF1nZGYMGtRL57tnBb6hoWSErW8",
  "key12": "65C8XXbKKbxK4dsqSV3nkssEebZVw12KDx4UahCDQdT4GMm87mMZfLQ4CVqWjXRqzv1xByViU24aLk3XY2KcVRjV",
  "key13": "2fXHT4HHbSiKYHbJ9mTEqAZqh3tgZt31oTKUYQ7tpd7symfuJ2CPztKDJRPEWFFCYCouN62HefcwyjbyJbaw4t9X",
  "key14": "4S8FMifLpgPXj8i3LRD5tzEryiatvCwkJpbae7z5Ny2bPXHUoKcsXUMXB3XLzTeUCmJkE2WVyU6GnvyZXvNNVF7Y",
  "key15": "RsPSMiTXdrcMULo7dWHoXS5Zx7hd4nESd8ZjjyqywVsgYbHFpeDGKED6wKGWjmKnmKRhG2C5DpP3NGGbxCQoYav",
  "key16": "ZsVvXawLVa5YvvvhMB67sWdisN6PEkkypSuTKkgHuuVoBBGoUsd6uPdFCfbpg2j9D5Qu7HSZq53aFfymQTNdcDV",
  "key17": "kHBKHFAHyFBEfVLzuVbCrRXjh4fsZ7u8VLHkfcsSHXJtVPi1rFogtRWa1Q91hL6iR4rJjRKpQosui5G69kAWT5W",
  "key18": "4bBtvnwi85gtF3kjDmwWBMWpkBc1ytqoWQ1WhdEao9py34WR5QwQykvaxkdSG9sqZqiQBn4u2Ft6hu1FaMVKFBTT",
  "key19": "7mgSiSqFNCM5cyBPHCLqJorcWv7jqUhBL31yfNvGH4m5s91YFvnXR5z5wa7o7NWgWUwUcJ2X21fcbWNCdn7eJVz",
  "key20": "5eR4JPTkc7Fb8KNVKMR8fWxwkyVrapw6nWJQp2Y86BGNVFDgixh5MWP4d7Y9d5goFvmMWk16dDzqb77gA7WPRqUi",
  "key21": "5Vx7ZavAaUtjugUxhXzzm2sSdMu9kBsyjQCaPAQjCA3g6r3WqCH9CE34za4voVjrg42mtwvqmKjrsEUJhw9tr61N",
  "key22": "vgGotpTeAPrBKJCYDGjy8xK5xEtf1YutZshfrqMviCJMBVUjKcsdK7mWaeUDyjZWGQpiLY86ecd9e4kWAvSMqyp",
  "key23": "2rVidxwG7YYhT1m3YE1JBstQMtm6thYqb3Nbrw7rEksCf1AKXb9EepeMB5nHDqxoqPE6sCtEPkGMNvvN9gCMz2UR",
  "key24": "3z8ZnwF7SBqGDAVchAMcPonk8Fg9AQzwcpyiGiN6pAraqkd4Qvv6tcnH9WtkVQQVtnPQE1hkdLP4dFFptFrPLvsG",
  "key25": "2HHiXpsJALd4Cuuca2y1TWhk8aEXz9Yr5mZiJAhqPjoX6BEpYxMDJWmCHPJAWdVsJa1KdofZg87frNrmNfWV1f3s",
  "key26": "sLDeCpW4wKK48Hh6o4yrhnQgcQSMwwPVmBzajrus4LcHfgG8wCeK3RU3SqwrKEvcKG5iu2PimkHJ72LrG4B297Q",
  "key27": "38jbKXzT5zrwKqLFrB2GLFiByuSs5PXFGWD2bUXZRs8KahjZRoLzW3ys7Hsf4HwEa5aLgWz72i3ZGRjyknVx7CPd",
  "key28": "HuGPvU8xsXbBP3uQjEySE9aRdkAJERFp4u4gjsYSukCcyEYXUEUzvk4WuVKg4io7Zc3W2bcDygC2UzKdbX5udoL",
  "key29": "3yhYSLjnAmRr2ZhFbyS4sEDt9DG5KRUs4uQc46X1akyRLCYYwBRTtXZPPvubUMEzyET1cH4pmS4Y6A8Fw2Lg2gS4",
  "key30": "5Li5C7H4zJqWhidxRhKWg9bgAkzUSnmVGwHg8Ndbv3EKjqrzLavyJGBaUwf2x1KE9eEEVwVKYap4xQKkghL8U6WG",
  "key31": "p86mDsndjAnFfg6VstVhVj4U99TrNPk8W9KArefwTZ6vVsRd5TXfqXYUtqPBxV83j4QgtCMGSW35gvuGdP6zSZE",
  "key32": "3BsSdT4zzR6DfEVHk6WT5vqrhnsyqMaZBrZ7cSWjYU7QQY2A1mCwa7WJRSkseUDa3rY8AGABBQMHBwQ1hkEfjMcn",
  "key33": "3RvbhHzLpWkqAtdnRdeu8qUDqsUyYTbsEHRe5nsQ158QNEhp1mytAErrCuihRqqfRThPt2BBHNKGZcXtCV59mQXL",
  "key34": "5fE9YhUGvNWHXM8fsaikPg3T6q39gzQAtukeEiyjPVJcbGigSbsA26kNbuE8PiMucqy1GWCtf45gxwLh8At4GFCj",
  "key35": "3r59KPnE9twVN3mSt72pt8BXfntV9GF21BnLeGadxJAYpF69N7X25tkAdK1f3kdnRuB4wkpYuAgQ6QftajYU1XYi",
  "key36": "GtGMn7VGSA8LJh2FHtWwkT9Jvo85vhV4iGgqrtXokJS4Ljxm5PTDmcrDMo7Z7r5sMXYTL2oP7e8Awn4ZBx5djUZ",
  "key37": "4yUakrhGwEZQLP1uoBRmtaJeRMwWeJrLkhTQeZ45CNEqxkqWupRrtbNdzA7hzwZbtHeMgAEYbJK6cKbHeRjLRf7B",
  "key38": "2LZzmqrAVLbhXdXMX5xm17sus5AdhUS5DZHvtZ372yYFkU3YPdr1DdTs2E6Y1rcNdNXVC8ZcPnJcSG8XrSdGYwBB",
  "key39": "41fWADCign2c87QKTr6sBMNnMVSfTLWBF8LvDSzQJ4ysGSow6xoMu9ppQ7jAWejW6imctESJSdHdJxw4VsFUzH1M"
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
