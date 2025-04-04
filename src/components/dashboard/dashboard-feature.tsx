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
    "TEFbJJbiSZQCcs17zXqVZHsAsCcf6rZnvy9sCe8Grdp7aBgLbbqMJoXcrZN7EawzX6UrnGHH3ELQ48RPFH7uA8a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UzAEzeRzmXm8t87gQicxMwy7GUzAUk7TX9hG4jeZSNTFunn4wf5cRU3FRbSiD95PVMrpzcfqqYLnaWk5UiW4dcF",
  "key1": "Y2YVWe81on4DFbjt456xgQg4BwBXxUqk8Gv6qr82mQx85nXwvqqnxLNxgkhk8oJsgNybVaSUu9C1PLRqamzW2Yg",
  "key2": "wEvLkrLzsGtLvTEHY1AT3CPBwJGiwkgA4KfAabXmz16GoUa4wNJ9J7qhtRVL5UnVhVCcFaYvms1dC13utCnwsxQ",
  "key3": "2Xc8zNXDR5cH6P19WyWL4aTU1Cb545c4cgcUSM3dsfMSqMhSYfKHJWpPzZyFsjsYHmXQ8g1UgiB5HZJ9abKxxiox",
  "key4": "3YWyBhWxyo9eHysiURkznkff1aXFMe8asPVqL35onc9G8SSbeZtZHXbh9xbMpUDtpaULFyLx82ncH4odsPihZWvH",
  "key5": "3SdemCisZhU5sRfAGuGCW8iYu8tfwqFTadBdX4vofsnphNh6WPPZ7ocqguSbKJ2Bq3MAJuUQHCVaQKmJMvHzttGH",
  "key6": "5VFEcJF7f6YGg2iEvUCzCUdxKeCXRiMK2rT3swwy3PWvVXoecG38Rc4GxdrR2GZ2mnCGiJpbHweiDQXRfNCLRMnp",
  "key7": "5Fvf2j42YafwyBLrTuTSP4dWcuJDq5EkhqkxkPLaZtb8kguNyN9g9Z7XQihuEANMW42PKJguQdNm4X6ToqEQEfV3",
  "key8": "2TPtqCqBgRkfitDa9b8K1F3LrHwQPGBDTkBZHKvZ9QgztEnkjynfAEiLL4suMy2UiEQjgXvrwm7ZLFJWQK5duqqS",
  "key9": "brFhuWiZAg9n6nQv48dW7cUNASjnk9oRFZwHhzPjBYjz7Gzvz5sikwCjbx3rRV1BCZ3xXkRPpk325qP1H759LfK",
  "key10": "56yLodCT8NNocnzbk8uzfa3W9FgRv6mLVDNeUfhixgF6DaVo9Wg3nEqVoRFzPqVukArY5pnHvQXSG5QK8wjJTq6R",
  "key11": "3Fv2Sgu9vVf7g47fsNT8Dw9mwuBV4XB9aK45qjUezPPcg4SR3HWuNqKftrw2YabircmhearuqhFsyybZSJMq4cPU",
  "key12": "bRZYmpbmHjViLmJcDYFhUia2rMtzmNeFaj8ucjXdLoyM6rY5c2SCir4sNHxcjTSqL24oJKHRf29kz1UZYo9HHWJ",
  "key13": "3kb4kjfbezixBr6LaTzZHxZU22vEUGHRF5inHZqsSDHuuQat6VoJNvfjHH6gjAwRWcYe82jfk9YX3qohQg1nWvhF",
  "key14": "4i4AyeGWEQxyXhZo6bdciPgM8b6AqHqkoW8Un2m5t6LuzshtF8S93R5awEgwtLqG42WZVzti5xNTPU1qB3CXRUTn",
  "key15": "55duKyXBShPkh7y2oeUjLPJazmrMSCMZKrRCWABMSL69ZFTj7RSZXzdaNdGsCbDCcPwNfrQr2FkWytMnh6vpYHcZ",
  "key16": "3DzF4y3Tce4ck886nuAgEk5fhGTYCEgiTdYUu2E3H6M9V2572wU2fY5hDjFzVnCRCCDRGf9fwSfnzbB1Dhjdya1u",
  "key17": "26iUwrJmqhM3tqTyqY9Jh8mc9fG6s5J3hR6yPViSNdBcpYuwoFPf5bVc644HsXnVNG5cgfkAL9ajUSEPyrGc12vF",
  "key18": "2vQaJBidut8BaEm9EYncseXtz2v35edQj8gmChH9DmVhSB9WadVLMQWfibaUQfCfkMc7m5XnBSGDNimvojg198p8",
  "key19": "2t35z55zP45Keh8a8N1uDYhZ8p2oYNXoQmURt4nF1bNsF1oDCnvRueFZWEReRusJsCXrQTmLkLfyXqkVubRJjz2E",
  "key20": "5Zbq4EaLJvyApan1iL5seEo2y9hbbGUZc7vZsEGQJiGWUXcgj9iP6kRMWRrQQCGVFbYnCF1TqrXwrmwT1s7avK7r",
  "key21": "5iKdYNHuKHrS3TpaQyG6reHmjD83Y6REZsBMf8XK99nuhdy7pw4ibGCgmVc4NbmXsUxYcyt1w31Y6SrAmHgkjnhF",
  "key22": "qgStTrS6S4RR4EAck7Ckh9PuLjBog5aRzeVXRT1TUZSF3xwshGWEJ8NnDh9vMkeNfqM3k9EGGqwi5LjhTZh6u3Y",
  "key23": "3RwQLC8xWjJFnCXVv1FTKq6kBSDp8pDg2JGpEHQRoQuQLYfu5hwrqiCwCT7nhxt61FDD87RvnjBk3MJosDkmy7qk",
  "key24": "32iXoRhSt9xSN7PQzJa8Vgfq1o9uZE3CaXnuWBt7mJkrRV5UuKv5wxynLLSJAT2MfjuPDaSXqqbCLSaLrJA2SxNx",
  "key25": "41J26D82yBiSGccT5Z4GeJBJZdFtYJNCBG4A1PkTZBkD9S2xwVh3zULTUmTaYqehzxyzWrnrmEyFtxt3VyPcPLut",
  "key26": "39Y7dEVyGtGbKtgShy5ovLQdx3UPkiMv1wZcAxxNaoJHkL5or337G4z1rMdn6pAsDexE5eofCBwhzAJoz2YGB7nZ",
  "key27": "ibe4jAht5aMYqu1rNcRJD5a5ZUwgBgnnXiTdfpU2R6ieNW6fE4JcEyZh5Bx3Y66VuDfaJCFFhac1mmffgVLVLCa",
  "key28": "5emjF7QjMPxk9qUhiPgKk8nrfZ6jfLzgiiKnuwHjfxPiGGvhsp4h1SEpVFoUfLH6nT8MmTdpveu4JFZUEHZ6HBYF",
  "key29": "4HxRPLr3gQmNLoGGW2aZEz3P2z33HFaVuSj98DtKJbx5DTzdzFfCoWJvLxE8Hr7kL4JnUNarDUq5a1YE67Md9FVt",
  "key30": "632G9viGAktF7ia94K1qHfvWxvvfCp5uCFgDDCM2EiBH4j6dgrHA3if4j3XrkBS5ExCXNyjh2MN4ne7HRPsBBr35",
  "key31": "2Eva3DB2PDFNp39umATfgU9kv9JhqKffNWid6FxxksCd55yaqg25xPssbRWL5hP7zRSFnfcUYtCFiLM95C7KTRUJ",
  "key32": "4MgqGw6KdmdFYcdQDZ9wXNxgU9yT5SdfLmzV1fV57xWqfJnUahiavkZ7oCR26kwxvCUqgT2vkcGhHzdtoZ8gt4nY",
  "key33": "3aYtrV2ULwymTREWEq2DBUrSMzvM7n8VGqP6Wv5ST5mZeu38y7Cow1qyqHfczSd2synSMApNXq2oXzgq3TSZGk9z",
  "key34": "3PqjH9hi5ur7QApCn4RApL4S6D3nh2PTqjRAZ6qPVpuX1mCHJ7Qqs8YGUoT3e3BLyepX7xNWfZjsMUjxng2y2NMv",
  "key35": "5tT4JJUMmTvyd1DoVHsbsbVuneApfRuYfXuQot2GVXmDZeG7g3EfzC6qgdgLL1GDhNQorEXufEqE7d6GSSdtD8xE",
  "key36": "58cc21qrmvv3Tw5JpZHzR6mNcdJsFe47pQRLrBvPKm8xMYergPGJ7MVusNCoPVucekJG7SR8Qr29Ze8TUs1ELCoy",
  "key37": "3M5nxYoHunnHfDUCDRkVpLSRWJBE49nXZTHajhfov8saRtRfA8LYhuZASHREZSZ1sghcKSSoGvCvzjtcPicsBYS1",
  "key38": "4mF6k6RG7MU9a52Z9ZT5Qn7qFQXxyyZKtWyb4ByCicT9V5XZYgs2hd6ycg2VzPcsgeueW4JzVHdoec1ogyCc2Cjw",
  "key39": "VWx85ZkyWrBiDeun3hm23JRiNhFyJwHe6oYR18de12AXuXwU1BDQiVQHwLCJtLET5X9FfGUfAFfmD25vgFTCXw8",
  "key40": "3D8xNWrZYqNBymqpRP2vKw5rWMoQxrDVHon7G9sFMrjMC5FG3QpY7QfkapzGVivSZ6rymzv3ernMLrUQJL99zmZS",
  "key41": "34aTptCtNac66PBDcxNimx3wZkVM1fYyksWosDqrk4M4tU499hN9yQDnGmUehqmtE56kNty13pHbcojuBmdU3yAu",
  "key42": "brt7iWTpSKTC4ciQ71Aw9oXo5gMeyW4zLW7Ggc8oRQpHY9T2GjsLB4wzYmRMnR1wY57J5enSZ4HvkMcGPydFMpx",
  "key43": "45KBtnTuBgQqPP8CE9bCN5nFhKCKoi6HzqFiykNxCVzfvLsopohrBDTKepiejonpomnE9DTVhUM76u9wJzPp1KHU"
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
