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
    "2Kb23ofFwdEarcXLQRv4ZSAfbks8f2udfpFBhLiKSjhhCRmDFQgsnGZuVo65vg9EWtfXnnrzj1dwNUuTyfrm1P5Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uZyiBktW91iuMR94RGTH92j4xgPuH5SPcZzGbxTy6UfksSg4dCsjP2pjuNAtMGBzYum6sCAKviBmPN2fBb64LpU",
  "key1": "YS1XNTS6wujxP9LZxBMV7Wg5o8evQX3c5SeMLqYuY2Zew1Cs6m4av9cjXB4mGV7auvq3B1JXkjYB64meRfufZGD",
  "key2": "4KJpobr3RNbnpRWWo5q7hSgMVsasxybkR8nUeFa2LCzHy2cnviExd8M27G1aJ342Kopi5Kt9MfSSVypjrbKVYGW7",
  "key3": "4dzUKR1Ny1QPa3RcGXbmjzhPZbKQQQRqjT7HvHL7ZuwiqfbyvgUCnQguN4d6fXhtMmurTYMpvyyBkftwQyZfduC9",
  "key4": "5NgvzA2CEK7A5DgGu7XHPTnBGiAN3BfhC3mYAiVNKJhhaSKgkqjuGsyXw7yoRMCSNkFcN4ar63v8E99JSDMXMk2o",
  "key5": "2CfrDv3YDcsoCY2nCisawk9fQ86x4QA79EQHDcwV3RkcUTMg379wMSumaQoYL5gt7Ex2w2MQVhP3P1mXLfSRcZVa",
  "key6": "582sBGsceEdGE6YkgnZAxTguUb7TtUKcZL7P1SvFcaNP4R7fmoE8ZmicDPmHq7WC6rXiyWeYUDUW5EVLASnBhkKv",
  "key7": "4G9abAqGBsQXX5FJ3SSnQZ2bvrfKCSt8QB1QqFZ8U1u9SBUS3QV6Gz3FdF6CWd4oo41sGNjJiVixHsz1BYAunY4f",
  "key8": "41PDm6rYrg7PF89mGHL72SAMhTWou1JgeAoB4LcEWdZWhSRxQ2zHYV4YKCZvpkZFZRGs8TnYrSFBzZ8v6rVRnSLP",
  "key9": "63yKyzKjxFxC73sxZ2SS1kxe5Sq2ADxmskkY9q1Lt3pgdjAzG6f6NmfuVzyb16jEjxXomtoZTPJSCgKkJRocM9iq",
  "key10": "4epBTVGfSirUKQbHVaAf2eBRCz8P5xTX6duWGAXHzYURX7mYFNRBStsaBe56wDP7HkvAHjwYFKPKZ92NjWSkHuBX",
  "key11": "2eQxfzrH4hHyLBpsBxggsWwApmmzFkG3XsTzxDs9kZYFV2bATrqAwAkz5PMkCxfnWurqBTRnk5xvra1pmdR34wvs",
  "key12": "Cqzb58HemTk72qovDsTwZW58LHKXi2BFz23kRm8AGJN3Nan8byN29ZZC3LuLHsDqtxs95UEbt5rKCFLWw66dTP3",
  "key13": "4spD4bksk27bwtfHymNpay67b91u5UumVKpjRWtP3FSn7Qo8K8McsoL4XFDsH8r551K5JX8tYJtbaSTVUza3uTys",
  "key14": "2czN7ahuYWh5EZJD3cTvYnbcKWbi5iNPz4KdYyhmQkbT7aay3Zo1ur48MATBQXFnNLVTWJXtnrnM6rBrqZYcR9Rw",
  "key15": "iBSJaNSkzTiLNknXsQZDi6J3q4LDPYSd39dEjkMpCu5anrGrmpwbfhK8bSez4qq2i87aTaFxcs3XHeboUa3MaQt",
  "key16": "4wJhokhixFL4ZTnBKDWexAZT5RhuCGaFwN6STMT2VYdDTiFD6C5ZWwHisXQj3i752tkLUEYfti4RTzNFidxFMM94",
  "key17": "3WKa8YYok9RJEPiQ1VM1iZ1VUTo4RURPzHtYMuhyRsLQgX3qVmnx5wJvRzYmuPpKA3oM8sEMaZvn7nLxhaN4Qqvv",
  "key18": "332v1VN3zBUfuoq3Dh1d1SPhbVgDZymCLjVbBG6PBY6PVMvQetHmaABvQ2FtPcDhuzRuSWAz6ztidD8c8JYSWFC1",
  "key19": "4XFGY6SWTJ2J7sP3i5LLhNtwWqdXbtdpquyomKFtZwuepScmja4tApjMKPot76ZHeBNckrobZw7p5AYsT3DeLWUS",
  "key20": "4v8Y9Qi9NHwV2jZit1zpnEfSwBWKg4foTqr71rBcvbe1wFobx5pRBpEjg59MDdKfqB25A4hCqu5g1E6moAzcYw1f",
  "key21": "5tEXqX9j74mCxDjm1KMWSbx5b6iAemE2gXJEDCftM4xGi2U1E9WpVyNKZVnqSAvzcYnzYM9EhMSgrkrY35yDbMdC",
  "key22": "4ashc72HkwGLbjR9MVQet3S7nCH83syZTLiiGqhLVt1PWSGJRN4E2xH92aEHZxBYnBKtxUJt91XEaqxymopaKjro",
  "key23": "2WeQP8KosnhqXTFmS15uhfArW8sfC3adjE45um2JNJwp6pFyiD2cGbc1YoTiF3HUH5ULQUidzzzPghTtis3PnfjK",
  "key24": "4bEdjRZZNTxsvHfFPLuL3Ytb8Ui4i4YgxLnhbs4jS66s3RETyebgdcLqpSzbVasWuiZWdTPLhhFcZuoGidpHVpBy",
  "key25": "3iarXU3vmp8V6Xksf3PG7y7u154ZviqCrdQ7Z6M8HKrdpWgwxJi5pqj3wVXGBaLrRN6673fPnAA1H2fyPVwXrkVy",
  "key26": "4fLvqQfiKAdLwrHDh82jqnXSFh4WrjfABQQzGLUXwh37dwhhvHXaCkwgK4RKPFschu9dpyPvChWM68ux2dpWowsQ",
  "key27": "2SELqb9MQFeUa6R66MGMhasmpagpBxn7tj9sSPir6jvbgpGd8ghX2HzK7hK7oKvCZbDyqkyrWWtCcNKDbbhKLCot",
  "key28": "5dBY5EDkhAkF6S2vN6SASxDpxXxqcLnwPohXs1UVpJW8FfEKAuCKERRMRT49egFsjMn3MfG9cKPLRUhopyYhQTPN",
  "key29": "3qc65ijJ8bL5gf14bNznVgv9G3oNug5AATUNJfveCeD7Ha7JWVAqyNhr42kHhjfbmLn4P8umazm68tsJTN14WBsX",
  "key30": "5JHn3oa6Rtw5873npYzfKzkzCL7XGCVyiyr7tiALg5PgiJTeK6c93zPc8svsBKE8WBLoDXFg836JRpCofamedkwZ",
  "key31": "67BeQR1eYemBD9u5BFHWABdcbNEeoksSA9fwgqrpEEUE4maNGF3ruprSyYxaZ8GhqeVsYJPBhVa2ntx91MN9m1vJ",
  "key32": "5T8ghBpY71o4JT9uV43bU49yDPV445veg3QDr7hyoYsT5TQ8JfTUbdERAXGszJuUERxUxZWk86Bn6zFUB3hvNuL9",
  "key33": "32igaY4vyLGiZAD8ZQCuuqf1mfRUNVhNZJoj3rEEKN57DRmYkoVWfhu95jDS7u8iaLdpowP3cUQRhpZqYgYRV7tp",
  "key34": "saVW7u7SBzUkx4kpJ6bs2csE4QZoMsVLBw11rASexkwymVDod31EecHkGbfAQ5Ch6DqPYT43C2bDDnSD8M4W2Qu",
  "key35": "5LqTehAqhaRc9kVgyTbDNpZQvioWTTV82KP9xd9hWLjWvA8Sqj5yx6xdb3U8Xa1pDBN3cDWknccuK9FHD2Y1seFX",
  "key36": "5do9tFvBN9YZQxHtN2z2nPtXzHBZkxmndR7pQn7SS4cBduWTAMosXxHDoyu96cUxjCyDRjqPqe2YLAvNShgCfuoN",
  "key37": "2ZM1eLHshhBdDgCFYnT7TMduWpzrrnumVgkqrkaAcrP27bc5nXrCwKDuPr2uDpwECkQq3NwiZXctkYFytVtuPRp8",
  "key38": "2ZGhJuAi929vvQdQm7Ad5ZB1bAnH5LVDVbrqYor1STkmCt15J3L1b5Stj11A9UJYw6fb7e7yitSLnychUopPhXgA",
  "key39": "3QRdPH6UCnfDYF7mPUBzMwEkbp7Etfdn2YysATdA9YWNZ73MqJ8PUWTk1aNXRmehrdYbzFuwLugU4Nk3FLNHqRem",
  "key40": "wVKsHZ9YYZHDxufP4Yo35kTuk48s8yBLr3WAfRjgihoFAf2Voh3pQRuqUbL9t3XQAE7ikupioV9fBDSMtzphZee",
  "key41": "3mcwTGoP68qhMpYtAcTFm4Vw7BfuC8MsJD6y8kb3j2KCkS2LPCvspiE8FK6GoMiFWrCBdwUnqcyFVpE9BGYnFJdz",
  "key42": "5i2h5fvvkKFrEi9QSS4CmErhG7vFgxdXWmxEztNDo3ohdtMCYQagvcWn2Z3Xf1GAVSxVVHiXX2s6XEApvfYMUkYR",
  "key43": "4cssUayemusXNS8CHutXx5qgnfGpcXvrGcFhQYyBtCWErcAK3CJPJS4ShNLXKUKRe1DdCPiVvV7JENVXaa9q3qjh",
  "key44": "2iVRnbFr4JwHiNpTBVRDfw11hENZqembFog9qcVC1gPQo1cqz6rCdarcAaHzbwWTVJnfCsBUd6FknTCBSSRnBK3H",
  "key45": "8hJudWiRsgj7NwnSdscoJ53vorb933sBxbC9nxc8QiRSRe9aTqxmZKbJbBPweedZtAtsTzLBaU5WeGBZMoGSay6",
  "key46": "3Z6q53c62i9GsHht4kttJzjyGjYKEKtjWpjfZhhS6GjfhKTWuv1WBt9DgeYDz9aVRAQxWUSXUreXrLMhg4LgT7zw",
  "key47": "CAxxN3w2iLdMuZLpJadomutsES9JCdHN7ciKALY6tBsPdRgqW3r6Ea7RMwvRp9U4VStJSJGFK5mnfT54Jw8rcHx",
  "key48": "4cW8vz17C8EZVdoRyzxWF2rN6aUTn3y2oajHEHyzAhqvFdwaUarYpBwJCpoy2cVq3g6QoY5Hf8zEjgC8fGaFAgwK",
  "key49": "313YoKT1x1JM1ufDiYEjpXRgadK1EtSUeLWjixvSGFWqpachNrAFQD5eJCvibdcaNnNiwMBk53BQNpiYuHDyo9B2"
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
