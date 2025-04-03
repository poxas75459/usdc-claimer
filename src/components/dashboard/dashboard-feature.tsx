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
    "5CU3DLbngyyd3zLZv5H94jGkwn9mXoQvDT7RHhC3twMUPF2iosKWmB8ssj7LmaznAf5fqPepSMEANYMqXGghKypP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sFKeAq6oX9X6f2JoGh5dv8eRVFbYNk9u5c6L7xdJKZVaVGQoKkBqjJFLb1z7xYK9XhYV3xQo7TR4yUf9t3SRC76",
  "key1": "5aijeo66G85ycy99DYZsQe8z8nPmxQ9zeeJyYRh9Xh1f4X9T314UiBNFQedUaNN4Y79F6aXMZh1SG6eUn6wHA2HZ",
  "key2": "3eTj5vZKjfzEe4BWGrXwZHFb5resVJ16vgP2gFjyxcWbEupMq8AZr5ij2bxAxt6eNBdvooQQn8972X6ZjyngntFo",
  "key3": "21n8nVZvGJFFZT82nhZzQmjPqp7ch7CzQ5ageZojCjxEd2cg9THuWzEEbFPjkzctPqBUqt4RQEHja6wW1VBgGXCg",
  "key4": "63VHkpS3mryQUsJKH3Jset1frZj9bS6Bbr1NBMAsEWEUwge4k81p27gY7rF61DGFm5FaFjpgweKQAGgC9ta9TEpM",
  "key5": "4S5k8M4E4aEWcySWQSDDGxfFtQkHRsbWrS7qDAxCm1tUSgp833q3iUWJUHGqMyfFJ3b1nKFPwZLDJbe7v1SsJB7f",
  "key6": "5JsywGpFrJ4KCMPNQhEWdeeukecGwXWZAXbfJqMbPV5ovRaYnwBXFx3PRHfEFEGEdjnFTKAT2v7hBRWApCFPuSG8",
  "key7": "21BgTp8GcsE3yke2K5akvpUZBwtparebP14Mw7gcoWMYAzmMdD1UJmrsfczoJ8GFwCwKBNe9cym7xrbBTy9WFX73",
  "key8": "2r8m5i5ARtzkHAN8c7ds5esxAHikpxfJYaJRZTgpooLNbZ7jCvDrwvM8623ypSd8DAmWkCVqip94d8jN5ccA5Art",
  "key9": "5XgwA3kBmedKqmEagjHZrFeG9gX6721yWvpvcKpyHkXGyUTXwbkFMeziiVjfBvvZE5NPNnHtru9XPpSqwD8RQtN9",
  "key10": "KkWq8kJvAqmUUre1jeoudrXng7Ykkycd4S5PkFCRtRrBiHHoz3UCEZVgC4oXhfGyQ8TPiFXBnJinu8v6LeLff7C",
  "key11": "3WK24AEJRubgd1JgssFfHeF6XpviqMRnNKtr83UGvY5MfCDzEKoBJPwQAx1r6HqESYsjKD9fnk1JhcDEs5it5hu6",
  "key12": "4o3h44JxC9A68TfXUBzYC2zCebRvrkew2xEWt5pk7q926L7eGc6QAPgYj3GnX6JHLkuiLUNXp66DVnbMaTG24pT",
  "key13": "1bWHwuz4GjgFULcf4wu1hTSRTgqZJYA51ANzKVsavNRLavsKZh3hyNWVUCXMjCHW73vRjze46x1ovsSmJ3BCNpR",
  "key14": "3GGgVCSfemE67axjYZfeun6MG9rjPACTm96yKm2cmwPb1Cxq1YGzaU3sNE6Gq6V17d5S4Fthi5wVUgUpxT7zKCKL",
  "key15": "4Ub5ADoBn8ZU9L3umyqrdeBUaAhqH8tK8JEbjLdfPuNY6UijP1eYYt2Qtz1ahCHhtYQWoFA6pnLt71HxQtFGUnfA",
  "key16": "3GUBrnYJwyq4HYWoVd84B2Z5MgpCb4weGUoDQReu1uy7rbNhKMwZEzyWxqKUjGV1MLqyfztx8rjhPSkeU85tcbwe",
  "key17": "2Yb6yzfzWr8Xvx1nxzH7EJ9i2FGUmo8vWepPAMt5j7trqBrcaHSuEoLzDwzdo1fDpA2LeQgTXb8AEDA3ptkzF6Dv",
  "key18": "3Lhi6VNfYQ9rPQR8BVZhvfWWEgwHFxqBkATH6BM6MdYvxasJ8FzyEmYqEnnofoBFNfUK1fKit9ebb9fGPcdLAUgA",
  "key19": "21BdE5uF5XmrpYnPGDFikA9LRowEMwb6ka6GVoiTC6e32MaiiCKUzKYaSULzVR8AWHjufDUPLUiXUttS3Jk7R9Wa",
  "key20": "4WwAPYG14E8GFscNEW6MCJgAXiMXZvTJ5FNPNCWWiTfZPyzWhoYdk1AdFrsHdK9n5DYkfBHVAjBQP5ZJbQePLRrV",
  "key21": "2K2Th7gPZcX93Nav7kjNH5yJmdYdmAKDLToK9iFtnXP5DDft1vEfqSLVYU547iFKxf9F3j4KYDpp9uUL4ftk29Ur",
  "key22": "4NgPU4MYeCd1c7sBEucMikQ1zwW5PijiZy94ki6TD4xgwPan4NQNA2WoqjjdobZh3iPsjsCKAdqFPSn8PakkiGkJ",
  "key23": "4c7FzAyozBHmt5z1wdqo6bc5ZNMxAKcguLU3P2hJDYca1cSF2bbBEvyU22rhnextJVgBt18Lc9NrohMqeCB4wdXg",
  "key24": "5xgzSNrgGBPx1ejuhhgKGpKMgRaAYpJnHUXMXdCCK6HzqgLqXsTXxWvEv5eNEJ2ZLu4YyRXgeApm1a6snzjCBSAU",
  "key25": "5KenatEkia87AVXh7Kb7ZArVVgoLo769FitPd24UJ7eumMnPjxiVdXerw9vfb7rMahT6TCr6uUeYi2mVoSQQEFbX",
  "key26": "2iGrAnNVf2hJTctE46WCDwBsbBEvGiyWAFYHyQLiL1b8JGGnUvfkAYXziEpd8Znb9oLg3z1ACnqYWzNr4Wx5svEL",
  "key27": "4JPQhLL5MUEKM7Hr1zmKT1opPMmbHhHETBBV3YMTbUanZdtHg9tMRsJPyztFTXVtmkhBYk5ksVgq1gbF31ubosxu",
  "key28": "3JmBYJPvDaz6DaN3ti7mE1Q1QhXbivAJC4U98cL8vUp528KFMq3Vz3soyuZsM2FJAVFPSKWEReSuoY8K4MVZY6PS",
  "key29": "Yw2YhUWHzqjg1SZdFTZjdt2yFrr7ti9DPLR7hfZcFwMtp2R3FptSY8bjN5esqj5bnRw34q4yBY3wDdhJkstyCwU",
  "key30": "4KCstgWsqKWR2RfhkLaPf78Z9BqUQAh7tggw9ehWHi22XiDXryq95gmryJTgLvQHsEeScj8QWdw1KBu7jy8H4Sn6",
  "key31": "Tek9Z9XT7r3D1itLtoj4uLV88u4VPhGiWqop8kiwdwSAveLckttTP5jtQYSfkEcrH1TZhLdJkdKs2JN3P5pC2Uo",
  "key32": "3xCFudaTHuT4DkAhPAYPTnvZpqzjLoPUavB5VVH45Jn5hYBGYBFxWjDBYigwf3hLXjjKu8g4bowXfFA1X1Eg8GPm",
  "key33": "T739NgJHzBFnRppN2mVW1H7CT5AXaza6SKn9Z2QsYT9dhP6S6BFYvwnbLtzhq59JsVE8cNnxAPvHUWMbqsAdn7T",
  "key34": "2QFgvGRhJBivkWLm7Vm4mi6n8MiVw1pRLFUjjs6W24cwnEAztigi8sfkVSkJxGUZSEjvspEZmfiuLtRfMrD4Bv32",
  "key35": "3DXwYrdTjPSnhvHVRPgbaSAuhTx4SJc24tDJWsXm2dHEixo41amtkj9bbWoYTniAAGNKEcmgWJrESAiZbXQut7De",
  "key36": "5X6V5FSd4jyMgxRriByer3Kw71pb71Y78WUNnLzhLNYHSLyJCQJWR4Yok3D5pdKBsodZ8KCXTnTcob6wvQF7nuBA",
  "key37": "4Z2hRGtKhhiYP6BS7H8YeGArAiPVy5kQAE2KLTxCNiBnU28YdJqKEr19yzJCGPUfqx26iRiRNhnnvKZFyLKxgvNX",
  "key38": "5WPMyjvdTXQW26yJsEuDctunmSSSWZy71BDrqA6wEeeZRVhjetZ7Q9LFfDwpnGPfZSmWVBcbUk62N9mfY1UfsTdz",
  "key39": "WCSf94mnfkKo4rmP9bxzavRu5iG2DVVvsubgFUZAAx6jvMYZ5iMcn3TajgURwkMnV1aWYZeTaHBy5woDQyEZBSm",
  "key40": "4xExDWdhFBJTt1WzRZw6iwhzYeUEtjBLMCkAiP5ejFwXxfjg8AtGBxmndbdLB8yxiWiTav1AJt5AniCLHvSSwvAA",
  "key41": "5yoU1Ga4SWVZrkf88sDv9chdCtEfkaRxhwShnEM87sYcf8184iPGArTvB67txpN7ZcfBYwuMM36X9vaT5yDiKjAj",
  "key42": "5XvNabZFCW7DwAa5f8FqqynJkJQnPnuJ248FrRzZ9crz9b5uAiz3zCqF71sbHmG6GNcLcnNK7Ch3KgpS4dqtpyj4",
  "key43": "3LLTNAN7S1kgEdFXXwXMkfcLMcMAe2PkGn8Me2oZBU7MUt1ATAkfJnivvzNhY1c4Dxr71ZmKYx6zuw2WA5VYCPHc"
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
