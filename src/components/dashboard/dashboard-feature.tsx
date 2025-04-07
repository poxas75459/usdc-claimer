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
    "5Ai4fnxtdmS9SQYxnCtt8cGk3kSzwAHvejz8U2nzyC487QG3n4fACbKbyRws8bnKzVsi3xSwWgQTMGSRq9xW3jNr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iy5YfBvpcQdBmKXn6ihMgQsChR31xMyfqQvQVZ1Fj7szAAtCN5DQLKvanKby8acHXkyMuvHVjPdqtuQm2wXypHH",
  "key1": "2NPnendZcmWNCBwPmdKcvSkvpPwvT9fyS3BGxiB9kb63Zpq7cPSutTHTZHtDP7TmwaNDbawKYRtPy8VhQXuhfsyC",
  "key2": "oik6AELhFajRwS36jYSq5fsEAWZMrATLveHhqRxQhZh6gFboT44r9ckTWFCfYX68NuUWRsjHSUeAaFA7q8SyT6R",
  "key3": "ebbmpk9vXvXXGGnsBnNbT9XFJX64zefkE9goixTsesPcCAkig7rLexRxazyB412DUjdpeVtRem7Sg7eqeLjh1Zo",
  "key4": "3LaRAVmj6X9DEY8fJH46ihmTbme78RMaWT3Jhg1qyv1PprTbmLDbD6hvH5pqQLYY9FaLfWULgRiMhSjpn2rGkZnK",
  "key5": "5fwgAwx8jUnX5A6dpRxRyqgbw4BTtyAVSqQxXGGKvA9as7eGQsb3Fk8UC4ts5YkGahqV2Vs95FFPU9xcHBebwGLe",
  "key6": "3tKGGsbC4UkXx9SMNDz1fMVGP5t4now1ZqiNa7RK2AENV1q3yh25MKWajnMByMLcWYRFLMgyQaEwvuiSPsa5cwFu",
  "key7": "5JUSG8ePRwSnY8oPsZrAiduQoZW5SpbaNd5URKHN75bcNkgCCBmKowKyBMeSpYiPfbBvmBrrc4tKivdii79hAkWd",
  "key8": "Wou25caadCSb6rewfopiSSUS8vuxtvQovCadoyt1Cz5pASg2Mz9cvpEmAnUUcZc6TN877yya5QA3zQGR7fwSvhr",
  "key9": "4rQ13jYDbJyXkXjN1obmnydHWvGV8761cKXEc7c1ktHcQ81MXjNeh999am5YbcFrxsvp7iqSVj95RSLCQmBkhS2Z",
  "key10": "4sgnnartR1zCoMYxE2DHGnmevHz1tS8fmpug69TSuPn4Vu7d9VKRis4yuZTZRWTJ9Ws2FgDnDPCE5D344Ub2q9er",
  "key11": "32kbQrYjniMsXkGdyCC8p2K4mpcYW38zpjxXg4VcL5fXFaJiDqZPYgfTWAdgdocq9WN5L3pMDhvtUEsofiUvdCvf",
  "key12": "48pQghZUAkYzBJkfVw483eG1uFvKRX5yfc44aTWkCpVZdjduYve4DkRTmedCkWsJ6CCf5ANtL6jzsPXXmt9C3Gkz",
  "key13": "5rEAzd4M9QHMh5rVJdHqErD667oKQ57gxV25tCruD9J35bB9gme36Far8WUuygggD2DEHCvHXPnFP8w6pLQ2Cf8v",
  "key14": "39o35EcFu12XZkwpYS65Z2wLEmFdfiFxXeUEeKuX8DJpzkwrikjTJp77Y9CvdhYHu4Cr64FKAbWrvecbiYRrNSgz",
  "key15": "3Fwb5bnFnFWwhqKJFfQ4CzENqBJa3cFsfGbcWpAXNknYLLnwgdAcPyjbXXukozeNkjGiXLR6eJYuowgpUCWoc8hi",
  "key16": "4gaBo2KteW1eshJ35C4ErVrrPU2MQrzZRQVQNyqbTpd5ttZ2H6kYPd1UkZ68zNskLeTBh6PKiPPsLN3MXVD94vPN",
  "key17": "2UBCWp366y8Tkw6DxD97sXqbfSrybWB2dGTyrPcv5vT3ZFrkVUjKVZN8VwFCQujD417R22xqfCPGzmpbnyajwH85",
  "key18": "3qVwn4deY7Az5dAh5FVJnHrNLjHP6s2ZVZ4P24642enizMkTftqZZuWvPcw5qiTRgFcpWm1TsG2t5j5wzbA8pbk1",
  "key19": "41keMmW9AsHTecsY2AcEAPb4ZkDKi7baiW5L5saveadPz9VYE7aqQUM94UPDVRKcoCSGXkJPozDKFvxgvdu3hA9T",
  "key20": "2tFnEqxSqZT4WmyJZTneFbV5yEquDF3xPw14aMM8rdJn98YNyPHncpoAMS5b7vap7hHFb44LySeFinNPii1tgiAC",
  "key21": "5DxouR5HUFAKrhvFkEVCn8V8N4D8RRJVaLJfXamaT2MqCwoggGTjxduv9v3FnyBfTVAG2yhVnzK849AiDzAW1zBx",
  "key22": "YCGMHQd8mttDKj89k4zMsU5wE97LStkX9Ufc2oW2gFx28EWVDtF15yKAL5s5b4TckgL2zsTjXMKe2ihQFcEgw63",
  "key23": "67SqgWFRf3PjWRAxGuy84beuFEWtyrYYx4a3BqYwF7bV8U3AvDF3B3cXH8NSf8AcPcsb6D8dCJXwcW61XapYLErW",
  "key24": "8xG1nn8ovijgDnybhpozQMsjTmPkqhE3EJ3BoLq2yJifgenkWXv5N69gpRdZs3f8wxApLUxgHXsUcyCq5PGwzzq",
  "key25": "2SvWh2tw2bTc1h2KJLSNjdi4SgZScbNPrE1vVBZzdhUTNTgXyNNe8Y4DXpEVvoMLkUCJdKmrAA1onXmwSpLDD88G",
  "key26": "6UNF92oez6AET8ZnMXWXC4d7vjE8wzjSLRvPYkmLW7ppsVmg75Y6DKD3wKeEs7ycZp13SzxHbJrqwPaTHnTZo1S",
  "key27": "2oNfuoANoiYyiBx6vv5HLHozNeh5eZM9cWFveb7ZX2UqQgHjEaiqS48SoGn4fXPadfYVNT24eh6vznRaUNAixeyQ",
  "key28": "5joA5NwP75ozsbFxMedACQCacSeAdmdFtzsAXN7wB8sMfmu5aaBEWFeJE69tsFuQQJWuZ4cHcdha4Jzb9EvLGsSP",
  "key29": "4NbNkGyy4LBFiRoAXQs6UQ4yE2R7hpUwShd8DdYufFJE1rUtU9UQnZLFgsmo4xPgu6CS4LrXPiPYn8UUB2q717BA",
  "key30": "2raqcBq3kvoBrnUD3upH31FJcG6Ptdq2d48Zv1wVr41C3iPpAVsSsJST7FeoJoKSGNJ7nA1gMxG4txapXcDDYaUn",
  "key31": "2SP4ccKQqNB7AQQWQsfjMN6gD7tzotWnuXCch76W79xeB3TVDnvmLRJkFTVEhja97VeY1Bwjsf7spsdyBtChTJmR",
  "key32": "3JpHwrFWeyGDNbZDRaxUkxqDb6tQuWAhGy4hwn18hbL3rxDqSEibMue5BBuFig1p6qxXoHBGTNr3nu1A2m8D22QM",
  "key33": "59cu7p4FN6HMdAfjae3Hid7qLjSumpUPqt2SKvjK8Gfj24b3sbQTNzyAvbXR87DVyEfrBYsok9bmVSwxGAf5ecWv",
  "key34": "dCfD1esi67rnMxGgEGdPmZSkv9CmLaKQXwbxmCrxvWc3Aq34xg7h2DZX8qhubpCvqhjz4LpwxFdPAmJLrW7Deym",
  "key35": "2VYVKBRpDZgm7NEpzgwgn7tDxM54numiv1sUj1vUcYa3CMTWQHeoEHJj2L9aFNiYC7uhnEKKdk68uxdyCm4Gvkhy",
  "key36": "3dQjFhNwTKxTpDuSEvE8Wgp9W5uNcwTUp2oYJJQRJa6QgBU38REtQhTop2K9NjjGqjpx6SqUdmTqqKfLFWmS997r",
  "key37": "3J4g118BbxbM1CKXDKGwqi6G3bNv9mGWxij4bs9msvHK8UNsnZBVZptQ4PxREKSiT1f9ghpge9U7a5nGpLRafzss"
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
