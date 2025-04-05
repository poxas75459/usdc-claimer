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
    "5UYkxC6XA7wB358XVSxsB25nziVaDeUmkE2PjaFUTf3xedUiCe842G9tNkPP6VFnSS7j6Ykwvg2Cp5Y2tkDMryy6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sXkSaTytsqKNs1rWDeYHysK6vxfQDurGFozpfqGTSjsTTRumunS2bUtBjagXQJkhpeWasjJcWDU9wiXzSB1xiu5",
  "key1": "JoNEn5hLZ5Un5Xad538HC836gh2UqzQyYvjpq6NuHLXuLzDjBBSJegcQZV9Ht2MnyMk89W96nszjar8UZ7dYukC",
  "key2": "4Bu2MVaSe7PQNT2uEpZS2pr2WJYt3ht9vg9Lf3DyVTs11rot48Y1VcE3Ytq5gijLchQEeVWQvhVK9yvUcUQjJWRt",
  "key3": "42CMmWQHRkBbw1a6zbZad27daWprbqgC17nqu1nWU68yX6XYAcHoEe359zL8qdLEEcgFPVq6HF8uFbsoKAauQykY",
  "key4": "2wpUiDYtUyvESJSXUWbg6p6zbepiwinL1tXWu3w9RCaBQZFhzKiBUpLEoN2iDshbnFmqkgrP9szLWCsmSCJhAW1W",
  "key5": "2AkgYrV2Tr116Toihy8JF53si2Fov3pX46JtLJn6ntZDrjmnqgBFoYsgudBLmYP2HtGJhvQae9gNZbqq2vd4Rs6j",
  "key6": "2YYY4WSDdegDR1rAX884M2C4ZXTbAXPTQSPmEi7dLN2VgkDMTi4NjqanLmBwYWfx5V7FNy3Z3wNFJiW96uBozgK8",
  "key7": "VS4BUm2wZwnchwMYbjEkE3ZH1MWBLjL5JZDUfzAuCcjzz9ii28MUhKkXcXcwGokCSLWkgYK32HnMiz68PaTfu34",
  "key8": "3uQo7WoxiYewF3YWtAN62XPZrppVEWE3SxARRQ8arUXBbrKshNACW9EdGRyoEwrTAofXCwq6ofvyTmRBt3iqggr7",
  "key9": "4XUdT2f49BqTYbuXDooEVDTppztYXPAdU74tgtb3WbsZjSmbpyMysFP3uACAKU61UgFWV7Wz86GSmy1q3PB91wHb",
  "key10": "2LTuFX4w12ZqQgqKZb34M1Q58oCDvaM8yfBnvX8JDWaaYMvkqsWAPwBswHAjC2DyCUCv73dVX5oBk4ZLCg22Hf1q",
  "key11": "2zTF2iHfyMytZUp2fbF7W6nJfEaTtirp2PK1McGnNfQa4it6VXbVvjEYzRKtrYRTqzddUwXbwKperKrPLLdVpqKf",
  "key12": "4pKKC4eiY19NdkyjWuwZEqwn2UKBThdfFB6fUoXMSqhtZgtavnrKYzGEaNP34wEnvrsgGek3Y27H3XGvaiTXZsAk",
  "key13": "2AjoCA18LLihJi2aHzvH4LmqFMbeW14G8KRpjCogEaggpRbuPmyVF5aBQvz2yFiWjmyA5jWoQjsfsSzGdWghENcC",
  "key14": "3NbXax9RhyqzcKhgyiJs7Jtjkni9SCSiPDBW6WkMaZXfhLozK1BpA91qKN7gpyS9oHYPPbRcxu3M5n8VJVA7bqPi",
  "key15": "vruV1JvrQtKDvCuF362N8XZjY7RSU1M3MEHcW4TvW8mUeHTozqvEn7X5GLL27VMDph6Y9Ynm6BxjVXEJdQZ8bT8",
  "key16": "caD1bNgMk48W5pu9MY4hMShcjsRXW2JiVFcDYXkzxWTy4wF4jgDrxpYcidQk4f5jgS7v8cQZ2LMyh6XbnatsyG1",
  "key17": "4MMNxBZsqajvdgMJ4VHWvYeZrFcKD2Unww87rQ6pYcjdt9DZJZEJr1StVBqaKjfQA9k2BKuF19RXZSk8yW3t6DiQ",
  "key18": "4oEySrh3JyzDqH2Sets2QtZfWAkkdAkemAHm5aqEDFV7Y4f1CxYfx5JUq5SFHJVAkVKnrtR4YtrmGvE934ScjwK3",
  "key19": "3dAKjxZGRUAGEKHfT4GCYrTEe1z1JsBpCGfzMoa33RWphQaPBM23DUvfBBangtN5FoLLtfgUb1HmTfe3wTTiznUg",
  "key20": "mD9NvoiahNmN8fCRhQomjYmCfttjB3VbeuVt9pKmmtVeoC1H77eJuZDKNW4ASD12Pum9mjJZVskxTu82ani9JxN",
  "key21": "5jrYqeJBytb6kZpS69hQSHe3Kf9vrUb6op2CkyduhNEDZeeQqEbx9MBUNJfVedRPbqV8RTfqYvghTHcZpAuPCma6",
  "key22": "3WEzJhwoVYMKauWKcXdyRpPLVzSQPRvgKTeQ7WFXxihFJ9yJQYB2tDhkAR77758ey9DXLkg7gSUQueanD9zSYfpm",
  "key23": "geF7WpY6xsk2C1sgUuuArqWmJ549ZDHcPWGMjZrTUnWC8YCDkk9d3AVfhxFJsSMUhvrCwSpACK8UB9ZnWbTLbjc",
  "key24": "3GTsqJFqeDHV3P86gN2EiJqPyUmWFKQ4Upr1oABVkDg82Dh3iVbYHzrUtKSSwjUNK9739X1jd89o7u718UYAHJVQ",
  "key25": "3JAsZjJZ3KaEHjbTTyJkBUsxPbVoc74731vADR8h1CepQxCZZq8YoW465KDBarz91P9BX81tmjdqrXhqJ5Zdrd1s",
  "key26": "2sjZe5Nvy6LHtQY8QSzkoijtYQ9xLkEK7v2JiwBzKMTNGZt3WZSQyf2Pyhizpa8P6RhUGchZ12dr9dLN2hwJbthL",
  "key27": "3xr11tHk2cQmTLKhFie6CraTC19Ljaect6PFej6T5MgHG7zZntsfhw2BdoBFSnoN3nQ8BSgZvdrTp4vemhCbaorr",
  "key28": "2Z3q3pwm9Sh38BRmE38K21yzmF1RSb7Bma7L8cEqUF7hcDZcMiR6GrHL1nGiNMF7LV1hMH7pgTvpGiFVpFEJaM2A",
  "key29": "zUtXJDYfbg6PRe9pub8YGQL68ybvGD7zKFZZL83p8vMzjcL9Y41WF63Ks6WMuc4KKCFGmbRzyM9BCoVhekxsMM6",
  "key30": "67HrwBHEmYC9FS6t19dtYvaDPWqXDVNNfeEAxdB8cCfLFvf397mzrxeRnytrf4dLrMQyMuRGHLTuysDQ8ZFnuV5v",
  "key31": "244CnkcPadFXZdaSZEzkvBuwBJmZmfrkRfv4bDFy5hjeoaEqmbSERFQqeXg6TDk3KjGuvyDbEhXV5DYiLFT52QJe",
  "key32": "3Vpy4LQYzr3NZVqN53eYXGuqV2NcnQp52QadJRAzn668vB4xE4nreHbQ652XFGq6FcvGoATieXtszXdVBzujYMUC",
  "key33": "h4BuVy88Kg3j11FSgKzQ1PUXgW5ivH2vyYMDVzQfhxiimX382W2WtfzF7kPEFsA5HEA8QQoedy2JzTxWNQXfHdL",
  "key34": "5UGrsfcb2mDCs6z2acoEuVCfkXbmMRBfptWhY9tpkFvB8Sw6AV8tZmHD4CetSXDzsWPm73R5Jk3qfQHKsieCwRp4",
  "key35": "5jRztDAJiRQ1qxRzfAGxq9DDuuaQtczhyFw3TBc2WnNFy7sj1NN39wWnkerM3uQpTKHeMvDEejwjrre3YVjpv96",
  "key36": "57mCyeV6trndwEVPx5rv9FV3z588m3dPzAoFKUMqzAiCvSD9wTRW1GVrY5748AgSj65jwkkKNUviNpeeWeF6paRY",
  "key37": "rp348Ua53TMwqKfk5cnyya2oqvXZFUr3payCXZWVoGPt8ynmMn4baEtdygiKJRNCUVKY8zCWgCw55k5rWPTVP8s",
  "key38": "3kpani87SCTRC93yLqKnYvQuu8eXxuVat5ygdQ2qSaRdcbVXsJr5CUyKvCC2EYfPSwUGcgXbFtAABii2WroByKVc",
  "key39": "43usfUezvkTPFg7G8BvSVbwHT4QAbpsL39rm1iVj3WXexRaXvucdft47fmMT2EEYuJccSGjgmoHM8aaSuwGyx1S5",
  "key40": "3QGBJkawoHf6v3tgkgPk3NW5o4FcW3yTwurhnVJvcNH4dZCkLigMAMAsE4kzTBPKmBro7RohqGjdQrv2soYKhxMP",
  "key41": "45ErvQsvx9pkSwcVGFh8fBmMp54r6Jgb4G5caJ1rirNgWfNFW3HrHpuQjYP7KLXS29BixkVjLcRvZwgQpEZJrMJ3",
  "key42": "dgTJ6qz6QttBfypPykUaZrs3HZXY28j36Gq4S5kHk2puhVr7aXiVT48YCqzQQWQxZtqiQWVEynvnVMtewVGEnQg"
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
