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
    "2nZvbpQbBJero9q2ht1Nko9dknwXJJu7Ax21kttk6wuZy6W3NXE5WxFh7mVjoyHPZYvHfumYx37E4P84VAsmHRv6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kqmLzkhyx1h7axLoTA8jCEY6CLMpiy3PoFpB9VxUj4Vq3Haw4Uqw1iHxPngH61FMuWgj33PYiyE725ypVn7HWMG",
  "key1": "5tcs2jtdmJ9hxsvHLangEwN9bFkm5nguVwkjfTWt9a7AyfMNu6iUvEW3FBHApy67jsGJnp6R9JpZv6zq4P4RPwfz",
  "key2": "34YTLiSvVBEPG2GRi9u9zgGdogxEeX9WTFyiQGfxpm4mZEayJ9tDRDnAkD8voZEqSxWSJYX9AViZNB9PbGC5UYgD",
  "key3": "4hYVBaGH6UEuDc5orSawuVMdfd8imCakhdcPaGS9xPFVDKfWeYQEnwaudwjLzXqCi5G5hawA74ZyyiwXTeFCuGjf",
  "key4": "E1JLWaqS4hwTUZpVekadQckwVVq9P3qAGH1MsjUc66RSXcrU1UG6EZr6JPYfo9R9FZaqtB53uWNj4tZJ8wrUU5M",
  "key5": "2wdU2VG8mX9bQcXfMsfnVbRbSWS6AyCZk2aDXyLy2k2Sowh2uJwTrC6h6oFPq3GMrXap3KfngNACRfYoaBXbsnqj",
  "key6": "L57m2ZpNrjskkJ26Y41zENp4sr9TVY6NQACYt4J3H5qRoiLtjKHEbfkMLX6KpEwej1XQPCUFAgecumSaBamXWxG",
  "key7": "5wmr59CXEdeETHWczuKeFEnNhrFknqJ4Vn989WWJZNr71pMMggTtNxTEdyiHu7gHxnjoeaEk9jTQcrgqqiBJnztS",
  "key8": "iMBnYWcvR7qNVtJYX2W5m8Ajm6L4HU7yoUNDckDRZ5uUcNmsv6QK7rnuDf8Tpsmo3aBuPLE22FFnDTfdJ1RnHV3",
  "key9": "VHv27BzfjmpjnviYH2wWQmqhAGwwMm1Rp54qJdVkfGCAPxa8WnwWFqswejUt7PwHQ8GgRVEP4ZUuYXM4rYSAC2P",
  "key10": "4Jbgu8o2B6ZRRtNytjMHmd7rweQZyoZLkrj9Vb7wb1Vt5hXHV7ofBAKxSNKP3x5c739DoUZuaSzwfcYfo7rdw9vU",
  "key11": "2iHt5MBc6rMBmRHahFtamKvTC5vW6AKvFLBrzVJke2wm6LNppRX1PJTYGw91g7taa7Aa1qDESnEhv8NpDBdsTUYJ",
  "key12": "3TeUdbE3Fs9ep2hzB3XQwD1TCQvbrUZC1Xv6D4srKBinQBgfr6uaUqbreAA3vTmibvJCEjUMtUKyU2pEy3S9MWoK",
  "key13": "51nyq3zAaFCp65p6UKaDVChwGyVXwrYrh6GUfAzXT6EyuyYbGNNR8yAzmphvPvcEPLSfq1fKv2iGDWhx9zL2rN1H",
  "key14": "2Md4QEEwXs2tCr2oZ2MWfZfVuSiJx2vbXmpxF6vpovThoYYK1WzvTeP3Ev3qzfmpiDTyQBSta4nuuYZQVwDnTLtn",
  "key15": "471YQFJqQyRSrA7RBQoq2CXffxEmc7edh2fKKKtJaXvqoee3vqoFBLHizgYfLEp6wfUCsnMkMpew9y6WsLpNWdWJ",
  "key16": "4iWnzadFJKceA1jHXVPHr297HB3w8DKj2MK2mDuEqHdvaQXSuyKdBqhgpsvv7wM3azYuc5uPXtV9dZL9QnmHDMwN",
  "key17": "wDoUbiCWR21nMrEsybFvdknuKKFEUywadUfcdmirAPZbwqd7Ud31hsPytUSzsL4F63wH7h6BkJWJweEDQwxVXLE",
  "key18": "4uqMzjruap9RpCQ4hbhkdHTc3WJdzGX6ESQCfijeo6ACtPRY2b94LnerP2DcaMjaitUJMAEY4apbBqBwRpsti1Ti",
  "key19": "2y7meWmewoTUeLUqMVYSex83eM2guH7CWXfsW3jXPkRNXFKxgvtPvygVyLWoEuVGKbsig7pY6WzuWYdXXyaKK1sq",
  "key20": "5V2ZCAK61ZqXN2wwU8RFBgfGYS9Ujg22Qkq8CrPQ7pXVSPMSvEJsszspprpLLR1E8vPw2pSD9wNWhQuT9dAYiSb5",
  "key21": "4zjLr1dmGr7zA1yqvasCDLiPCvDmu5jB11NgyYcDDosdHzS4d1HBw2Urxsg1ih2fLv7emfkrXPWigKXGJYivdWhe",
  "key22": "57siH3RRmhLYba2KCuzmbRTBj6BkD44LysgTfwBEarr3BjQwPxL431TvCGtNHqHaEEGN2kSRRMWLurUyc2K6B9NP",
  "key23": "3qKmkGVbGy5fTSjwqeDWduSbuM1WZwF8qa4KJKDsrgrCde7USswM8V4U5JUZUPEB6M5dzs2QrM4uBTVWbBRBCuiB",
  "key24": "3CYdCTDtrgCtuHYVMmvZTWrhfgCnSemWR1Mmky8w2JK2F6diNVppB8tmyzEGUUEnT1uDSY8wUhJEcRzNvk2giF7y",
  "key25": "UpFaoiSpS2PfmvqpsxJFKgLfccriUzFcWyEhk65eoVygbQgHtpYRg7rdFFtvaoWVL2qGc5b5D7JZyVrRWxE6Ra4",
  "key26": "39XSWDSh2PxSFnhgJhJLThweTxnia22k1tqMgNTTMjSrBH7pCdT464FxKwvFGdSt97WoS2gRZQ3gwswt1nm8sUy",
  "key27": "5VU1xvoQv2PkEpbCLymxUAGvknKXmjjVhiaZraAuAaJs5mqy1bZsoM6r3MPuqXYnHMFFNgD4eLfaYQZeFhWxnpAE",
  "key28": "5qxwZnYyjcoF5vnyLsYraLdVs2wyQf1SindkzVZNbpWe9ojatkC963G1CjHScBspNkbY7xVC5YkX3rSrmZLoXfXB",
  "key29": "4dj7wZQQahiFoSgnq76RJbbVhzGMMFX1erJ75Gbmj4PGKj4FhsTQomu2ib4and81XohZbbxBP29gB1P7Ga45C97i",
  "key30": "29Ptmj95ToA5BUpWDH9DzfvdyK7Ue6kKuVYG2TMAD867gS5E72ymZQ6zrWJMmHPASdbjuz7iCaSYnNMiTeo4jLNM",
  "key31": "677pHvW1cf3rVckfztM2jjuhY533hsGAmpZx17DDVNDN4193gxPohXnm4c3hEPJcpkpnWScAX4fYQ15Hf4aEhb74",
  "key32": "3GAmRHtwJgib2h3svcWwKMFvmm4NRCwmmS85yZpn6KJbdh5o97xotSB4bthZrG7GJJiWnyoWgG6Xtja1pWM97vFp",
  "key33": "35TitxkfH3VoTtNKrrtJnMRaYuoFbt1LqfCp1j9dLwHtfgBbuEujjhUhh26F8phLuDQFwjZKjapUeqRtdR2Fghcs",
  "key34": "62MYxL8d3Xy7AjgHXQDukmDuHUg3fWJCxJfLphHsxFodSEGTGoijH64XSPDNC389zgUPnRcNCHp7uyuKTmLsKYrj",
  "key35": "1n6sKmtrpGd3NjhvKQHZuCuqnUgr9NY7HDSvhCkqxzTbrEaBQCzH6oGXhKQc4FGquAi998mqZ9GXdV82vaJrCsc",
  "key36": "5CqqnX1pYeWv4LVuShx5b7ggx1vZhEsV2YiagKv5c6q2ncy5QGK6tC444RJA2kkK44YZPVh1D1MR7QiSmGb9GLgs",
  "key37": "2QJLNumVDBAzGsC71joxqJnKpgXz6QA31Xmve7Gy4r1h6h4WVgyfSD7ZEgDj9SUkwFA3WDiXdG8nA2cNkEDwjLqR",
  "key38": "48RWG8mWBG6RD4oGUDCMZXpej8veggwtDiusYGFKVcqGEjd17YyVtEmDNg396pDH6M99fhF6pmoevAFdjSrbcW3x",
  "key39": "3bTMdAh6aaM9b2dPTgPtRSB2ENbMcyfSamctrwaTELzknhTJqevyderfbjcBYE8Qnb84HfC35Lx5hGNqM52W39Bs",
  "key40": "3iPY4sYebZ71kKvtd4ADNdsCg7jNt3tBnZuj2HRcQgaZgYMukMjM4swxcnAPC2YoJJP2iLpuPugZhFM1yifmaT7v",
  "key41": "33f1Wwv79qeuk8r7AiMEbgnR4sN2fi7Ef3KPBM1XeKUs2narjWAKfBYKJq1RpSEPq1PDTziouQvpJ7X3Rv465oAw",
  "key42": "39NovuX9Evh8JbdixHvMudSXHciMYFtsv9HkrBDbhCK1AWKTwPGCYsAAUyip6vHuU4ECVCzHuGhbficPvucdnmAd",
  "key43": "4J9NaixdHbFQ6ehtpiqdTY6oignYbr42fBxwVu1CPp18AKqL8jq2kJccfAr12DWa4LYFHXaEsNs1dMmYmZoPe5LL",
  "key44": "2CRTw9xjyEXLK4h1aY4muv6Zg3CY7cc3THPNo78G9RfbdCjjrNyj1kk989SZdR4Z74WoAntg3ZnnNbJaXCJvA8ta",
  "key45": "2Nd5U3iQLJsJa5LyV4CHWF6yBKkETSWVPRmtGisXQ9s5FKuWQQEwCiGt8BXCkwuKJTxVAEhxuqK9JFVJRwKWsN2m",
  "key46": "y55MH7mQSo6gbLX56J2ittBRyycjHkfFzgqhbQSUzjDgyWBom8LubkmkQaYydguvHBqgPw6rx5QGWJGBz3h4ZRV"
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
