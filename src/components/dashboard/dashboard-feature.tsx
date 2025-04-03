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
    "4QnkHhhChjFxdzMRyMwbGkJPoyH24PtTjr6FDnhCur9ERCaMdRt3GLXnkQqkAD8tLWDJPTvMxxjQTPGkGNE1fRvg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JLeZ3a1he1EPrsh4wbb9jHBNtGPxBN14gxkbdaqxpU1EHfVSvAnRG2ntNjN7vNA3xc8rxqFwDMxKMY72parhzte",
  "key1": "p6ijfKRsXpEVazrn5TA8UNt2mzVF4QFzW6McURgtQbuHUgodDHNMwVRshTowKm8GYYTAnNoNCca9QyJw3cx5b73",
  "key2": "61fPxVugBDsxcQkPpFNZuyWGr8YCP6ob82aa7XZoCRYB1rAWkub2QqJtSMYVoe7fDsaQ4WtgdW9aFHSosmCArxGY",
  "key3": "2WqUyngQhAExzUzwHPjnpCSNuGntzHXyRQqMMTFy1j4KcPvSEgR6YoyCdAxqa2crHfxHAeGBADENsifHz4mVvZUA",
  "key4": "51nbwz6GVSaH9ECio991HR6SU7f14b1SmHrTW7bjYV2V3fsxzQZWcLnsQq8gUbsVy1LXFgBKG74NTaAesdsBESL9",
  "key5": "3dZzZGZVSj252GDZxa1UvxAnQ8aEVNkCTs4EgidCSyfZaHZY2E1YPCW8AzQyYqUmrZU97aWSPTKmS5mDUECe7aw8",
  "key6": "4B3YLCrDyWJRwZQY7vLkiPSJenYAjzNQAN55pXpE9XLMPSumvXHozGgWGvsCSC6cK4qGcazaE5XM8tmNACs2Dkaj",
  "key7": "3yKgoAdtjtVX5LPCyxZ14sJ2ULuYjdmo6cx25MZ3nZZNRxTrMGRx7axGL6xbprvWhGAsFavbbXGpvkd3q7GhTfAC",
  "key8": "47X7wGWU35yEpuDueZwrMG6HLr6gS9EoMCEcXCeEMF3v4W781fDjPjJ9kjj46GePkZVCyWQwkncSwb1bHjtmT484",
  "key9": "3iffofdwcBBWeWcffUXYpPBLsvoc4XYJwRNDa2xbbw82scUH7ikyPHthFM3wDNzBBQGBj1ALxoYZhXkhedZJMENA",
  "key10": "3gGUKrME6Mhk3pE89EfFM16xKhxWSCATLYbDPv8MHAHZeGiQDNesc48DYHXGSFyUm18YSjiZgNCVPxR7pxC6uLCC",
  "key11": "5RmbVXVwbEEjSAUY3dzw7GsCL47nkGsiMm4Zv6A1r2GS9SWJhanxW2ooTH5CcbPs6c1WtfHPZXx1paS9dDCRXs4d",
  "key12": "2k2DNiWdTt9zkuL9PWWWov3DvtwTJ79poLNiCQfT6pX36sUbFGBAm6Mt9nmRNTPRdCP9F7gpYvSXSj6Ki9W4SkRK",
  "key13": "38y4Ab9qSyNLzBCZK3oAcKnUK4iHbDCe5vnqPSDLVxJYrFiNaiv4aEhPyxbxX3L8UD7GGsL4EGX7FpymXQ2HZnoj",
  "key14": "3qdpGUwj932SJf34fGgdMEb912RWfT41VAXNtKfPzvgJ2TsXXuEEKztZUT4u3aWjmSy2T5tusheDCJ7o9B9xsX8J",
  "key15": "3PZUJvPNVJYnmwjo7pVWgSepgY99XibsN3zwEKNDBx7BJJbQ3GKAZdDDJXBodQoUZ4aG91Vw3SiHLkvd3TX5Q7G1",
  "key16": "3L6LsP4ZWWEFSD3kjxja1Xjnz8Sas6DRyHvzLhWgWNjFBHaXkdvp7njLSo8YJfmYKpPn19yQwTu97TRmXYE3jKe4",
  "key17": "2PGHA7aYv72rQaSSMsW9zgmr8EnqiqUkPoqy8urtuxuxotT8d7CtZbWW9uDSygoqX799aGmJsF7XnYu99TqkhbST",
  "key18": "3we6RcNfpEcQtRMjDDm4Ptjg2SsZfAyBJcmHRxQWwHR14ugajJb89iUtkEDdajEKbzBVZCUUzanMBJsU9mWFnWe2",
  "key19": "28Ji5p283rwKcwxiZMg8XTfJh49ZmLPHxHQDL8tyJcaxFWS9hqRpATgoLDbVDk5mjWnnaLk1mDeZEouM3DGNC7X9",
  "key20": "58rnTb3x5TJ2K44vyiBQapq1tHEbJHm1qHQYSDknjXbHmnSbnTHeC7bMkhcT4KJC94vX8PrttCAVrCmNTtEfPt3T",
  "key21": "2G2aeyAuL5X5BP7Lf9zXkvhaKD9X1SR8vXyvjaqqrRmh1TD4y9WL5AGS7XCxgdh6f66ew3crGUsQScjVehVrZvrb",
  "key22": "4KyWqd2BMmXXWaokBMvQ5vkvWF5qhPcAKd8Q2c7iYwKhtNxTRy47ysjUAXbsw9pn6JhipnMtwwTznG9jgL6RD2Bo",
  "key23": "5ohrTkyqfQf3ZwDA91Roi2u3khAmFiDq9cveC7cupjwRVAxjLZg3T4rYTrV7CbNcZ9DdSBzY8JfvhvnNJbRaLakV",
  "key24": "5kMnGc1uXK4EUwxmcumpxydhGpysYMztZGZJDZXiwSv3JNu1toBWL1DpA82kkG8s73FLc965Kq5yQuf6Yugikkib",
  "key25": "4MobVF8pwdg2ZBb6hK3X8fcjwJNsB5DoDWmhLgqEjDCSB6xpH7byqzcnYh91Zr9bKrusjiQyYJvKzU8YUpzjs7yy",
  "key26": "2QWpaWgSDL6k8TpbThDzLfjAZB6dGLP4KTjJmAbijHVPxbpbyczzimHneFmZ6eGMo1kv5gjkkfkyLFKr77RSDneR",
  "key27": "3jCbRNXoPsFxS8qXq4N1PwxV22fFEMyNb3HTnqgSYe1Efa8buMgpbcmmuGK1UqA9Yj8hjZNqPYCCEeZJPHuF5La1",
  "key28": "5RWWTVhinqkKKTMtsBNiU2CtVgxv9KjXQCnTWfkMMSmVVthuZWGhR5eDujs1LFxzTbtCDPNMQEgRv9owrom4nhdd",
  "key29": "4E6XSrcXcXWiEJr8UMFomu5gmbVr6MJ9PKDuRAXmG3tV6TXWoNaQdYVusRtJmGzSYSNGW5eZAt5teFVjveLcu7MJ",
  "key30": "4q5FsP5Gk2WLqHNRBU4TTHJ9ZhQQtnNYW9sT8CPCBFfWRZiFBb1MzN629Xk4WRQ3891TePRcieksdLtcfD9UNVnJ",
  "key31": "4VqhhqRzTxX6CboqcVoYW4KMwwtnB7SZcn7t7ScTXhA6dBhGR8gGaHPaJv72JGM3GXZEGeV84VafXPQT2TRswnD6",
  "key32": "4BsMPn1WgNYB2ggf59ZHxc2GQ5P1DN2YxhPrnuznpXPEnW1fjTuPT8mvdzEmn6rD6Nnd3ratpS11sTdhN6DXKYLw",
  "key33": "45k8bJggfzKX3Cb4uVaMKyzL69fQ18USXiQrZpodcTBUsB56NYLgUY1MZXYf3fZqtyZV9WCxBshsvN3RZ6Tc8x49",
  "key34": "GudCJi8c2ujKmm7qk9cFkogCwNENZyZ2KhssHi1XtkPKRzeYejUq3KH1Q3wR8YbRe7DkJX4iChdzNNwT2r6i7Nm",
  "key35": "5tqQeV4SWoCap8vrh88h9dDArDrPRRvqCoF7wLyfyQbHZuCeM5UKqVk23cYnueNrGuNa8jmjGPb72xde2T1GLxNN",
  "key36": "4mvVg3nDFT5etJjQUYfUsdawwwt1SEknMR8r4PnZkQh8oGV3D2u4ANtCZC1Yf62ka21Z9aZC5CaZ3AJ2DihqZTMo",
  "key37": "2dXJTYr5L1aDXAUQrj9RvuRdSGoCMSLSrhx8EGRs294ryxLxHrGfTUZSWnQskHMhLvSMFjmmhuictfuNonXUUBm1",
  "key38": "2mTDGtm3MarGYfYVPisubmXkitQbJJb5EaYGyRfjaLm17kUrHvJvvWBxnb5yc5Mq3TmvNyoL1Lc9khbpvQcHS8u6",
  "key39": "52mBmx7sDnA8FBD2t144Meorm1con2fe9d2tQt1JfR6x8ByTxcDyjv4VJwchCs14HAYwV4grNP876DjzaZZz1DDV",
  "key40": "5bPydDpAEm2Ko9ravpiss5VEmnrCynMU5mgEi9o7Hw6KtiBBuTMUB9Mrj1GjmEZyzSE67tqLG4Wm71QFwPo3fF3M",
  "key41": "3jKUkNqNRzzy4MkvYWPd3u5jV2dNyX9KuxpMSvfNQiTNYx46rpSSUJWc4bciLMk7RXc6t8hX3xeHVWWHzZtf5xWv"
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
