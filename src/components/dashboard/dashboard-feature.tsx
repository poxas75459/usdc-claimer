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
    "4FU9uvGckaHFkqaVDiNJ7FBP6fwb4APL8UCc6HiTwabKZFbh6kBnnPxeAUqKjdwNCZsoJoVrNdVCCnKauewXePmM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uEHTBt8JMJqJAj6cBABvqErbHgW3jWQ2GdHQBLPpiRnGpdABe3JgR3hFD5R4BSC9PMvj3eAdsHSxDgKyYuYvKhz",
  "key1": "5hcbE16wnAK6Rph5mzEnCRTuHC1KNA8HfsnwpvX4XvArr8FriDJ2iyevFypUA7zXrJ5YWQhpzge9sgHqTNVq7H31",
  "key2": "58se4Wu6E8w7iRNt965Gse9UKw3TQGnpRcZmbq4AEooWjRkUbq3tZUWJm6rbU84WBRCJNiDRGcW9wMG6xfooUiK1",
  "key3": "D49wT8vsiEhT8vEzrxG8s4baAvChMyFywR4sjkSwTjqmk1U3LPjByfrFDqGurcw7iYd8zgQkbCZMuRStRVGeR1n",
  "key4": "2yAcF3p8hYMCbzXGanfgUkHpMfKnuTjufynhgoShwVSPqpWdeawm7GeNtcZiQQTTYWP8gNqqKtPdHHp4YD7soQ4g",
  "key5": "3oS4ijZywp4A41CiP5VgvMGRUt6RzYxLkpEqRAixV923i7d7ipaqjn8juGXg6U2eqtknGeu4qTGW7s2noUgwBb9",
  "key6": "3n1cug1LHf7RbPzweBXxmQUKrRWLBm1StoMcdAVUMPWnCi89Zz3nHUacUPSCoLMJEvD6rS7kh5LYgF6HoGMBd3cH",
  "key7": "egMZUJkPNH1BK5yiC3aTqtam9vK16uP3ftDXQU8hXZ3V7SZr9JRa7usePcVUkuNQUi9xfuUXtgjWCy9eMBPQ4a5",
  "key8": "F2bBFHcXCDaUmuSif7XpwxLuxdTbgNuK6iRKd5aeqG5rVQZe5Dnv4nVNiZBmcSQYmwTsX8f6uXTraiicomCTaR1",
  "key9": "NtuYawyUcKt6MpjoYH6teCPqBhXxLA7H6U4stu8PUcRpfhbRPG7DGFBxm9QpkmUrkpKtn3cjZDiN5g3jyiQMzuB",
  "key10": "5yEvYYoXAKRk93aoptmgSAk8hdwQtrFikcP1swqipM3cXJjA3zNF132n7hbnwdqNw8CW5mtjVXuDrUtiKJ3Riw4n",
  "key11": "5f9f9ie6rxoJPrqcUHW2fR76EVZE8Yn3yGcvZ3GqvsiRnJDm3VBTbidKvs6APEgyN6y2M5M7ib84FhUbSmMmtohY",
  "key12": "35EhbvGyAM5iRfUkywzyJLjEgVLpQnLQLMAu4bzJson7VZvrnKTrnc9mApF36u9fyr441m6mbNWXNDTBsRUq5uLg",
  "key13": "9dwRuBHs3djH9F8L5shqKbpUxhuW4Aj762zmTQPPU72P2GdnTBhghCsjEjT43KQA8DZ7RPE7jntHKCZ8aHXVo12",
  "key14": "43LPPqpiJgZwd59Q3RnzyoDXF8bxVMMYBbuuNtwGRtVjRhw6dteV52THfpDZ9SysPHsuMCkmKDXxXAQmVT4FczYr",
  "key15": "NDpJwX8XVVUFuvE9HpvqsEgByoE21tgPKiA77mYSCsQNTfUfyGtGrEzgi8aycCWbsQSuTFwnngNRbJRcuTEv5gb",
  "key16": "4a4WPYXX2mvDU2udek4J39RkcNErCs3FykZsTCMZC8VFfXkndh7BpfrrKyUZwbTZJSqqvjeMgj58fJymserFTGsj",
  "key17": "3uVXXz6pKxr31zDFuxNyxgwhkDx66rfmQukYWFU3Ji8AyggYbDLNkjB41LdYqQGxcVXFFwbtT3D1D4UhgqgnU51v",
  "key18": "3Ctcus5mHyRZZ7whvU6UnsXXHzrqsEDapr4TXWUSAAwxYd1RL7VMiF97h9ACqgV3uMVtW6cFQwsd5s8UMVDsQRXg",
  "key19": "ydgJkdiKVCjEyurZx1daaGNSH93cRtAhHehBvrLxE91mTDGHYukJmSbQbtMAC4xqhYKgrrBDsYTsq25oUcJHGCW",
  "key20": "3CLDqGzicuD4ziZVNGWUkSSUCHWogUXK4Whp425PULZ2yu589VQAs1puthZRjSuUkWAsutumRmxqbcFTspNkQKt",
  "key21": "747uoTSxUuH8Lr2vTtxR9C8dhU4BMgKUyUVpvQLh19vXk6ajbquNWve4Q4eXB8CMsQup84MXpeNMCBf1RyVVwqK",
  "key22": "2UnY9etXLRxajtz71DjXiJ9Nur2ktWwe4WcvdRKjwk9VsEUNnDArBjrwv78DuwQVZyQ3bz63uCb4cJcA9BK8NH4K",
  "key23": "PuiXBg2JySZfKB35H69yd7VijWh3FbchJxaE8SvnZxLVp1DDkMbZnS9hSfuFZXmCUadYYgb51kzGkp1xA8YUUkJ",
  "key24": "uAdiYYA5yZe26icAc6X8pzHsyTPTmkcfPcQYvgxXkxcGgCdiHtkZhZzVuNzdodSfRN3wPAZo1rUVYuxqVPLe9SC",
  "key25": "5Uo8gEmdJE7qpT2rFTsXCtK7vN5UmLsWkcz2obm5UxKQfH1nSAWHGBmcHADKnDinXfVvoo8zAZ1Bnz8scGEHUHqM",
  "key26": "ht2q3ZaZfx7KZbfbKJHH13be7xvyHYhRqLMka8TcyUyP78xkHsywe9My7Zau1dcbmf4cuEM7YuaiK4y9AKyWuFy",
  "key27": "35agaWEfy95CqAGRL4UHptZspKKdfS8aaNZ1XgsV5mimYo7UGZdBkw1EnbYvYQhHiKiRZhUbpxazWg74c4Z7oYbn",
  "key28": "4hP7UJdfWZaDgqqs1FTuiE42ip5oJbj7hwwRiwedXPFhgTJY4cDPEqWjyjUPeG7yncMiWC4rGQqid5p8vM3dXFsW",
  "key29": "4yLb4aExCMmrvwwr5Xy94haQRWeGcT36VZWXMvmzMqq7LFha2NXSFyECStGmg5rVz3jzmFA7KQpCKbWTtkRBcxUG",
  "key30": "3e2sMNVi7mpXQF3zTBEU5iw3aj9MqGxhQz3QQD84J4j71iQh1NdrpPnDckDhD2b1eAGkM11EA69cxspGxK7ZKXk6",
  "key31": "3LPcSxHHa7jRU1kXZQdYHLddTvjuGCTuSB7t3HUDkLFn32dia1EDh56cd7czQGJnigU5CF8oKCWrVEqeByFRsWEz",
  "key32": "24aZQUJr7nTospAWc5gy8WogX12JsnpcJR5gJsBcowz3Yd1YqA862KUmZGKRkscezZTGMv8TMX1sHamiW7RsuA4G",
  "key33": "57cC6qCYKTFsPa2p91McGAaWg6CKSLnxD8QGQTYqnHZZrThLVzRQ6bCsgLcQfjNYcHHGGBibFD5x2iosZfxGkYZE",
  "key34": "5a75ANjgrKPD9hYwsbLPz6zjeoeLYfrBEeDqFaRiuejf9hZdAvvY2ryCteA4DZ2gkntFNp5PALZzHTKyaW21GJtz",
  "key35": "2XZ6mqg4BDzXvQPzr1WRpLa8HCgqkwt21td4ZkqG3TxZizAUsBXfyHgM5rHub9vhPJsifmvk34kE2bwna9XzeTZb",
  "key36": "4w7L2MbPU9vuRw9Zj8o3SSexzkWcmfizw5dAWorwcqZAsejr7vMSXD4dVwJBkGkskykpouMRFiBxykuFDMsJBnbS",
  "key37": "3WTVnpc6VexYACnmCj63fmQqtDGRVwxX4XUDjUNz9nFZwuithzZ5dMf3ojKwyVjj9ZQJ1QrDK5pST1SAZvwiqL75",
  "key38": "2wnkC1FVrVaamwYUkNz1qrqrLZLFL5neoXt3kLWEW9BJPU4bZR7YLNrC6UEZhfDh84ANgHaXqHDazuWPU3dwa7YZ",
  "key39": "4Fhh92BD2spuGFd93mY6j6irS13iQzgK4rhtUjpmtFPRRrXbU7M4ULCNDngpMVwUJyLxTNnQc2yEdGPrvABCpHgx",
  "key40": "2AGt3FXs1b6Z8aKCRe9rxgmavGcQUgKP5QD6XjenDUk6CVTBbZ3YgVWp87wxDjG6jAMtufMshDQHp2tkveaxsEQu",
  "key41": "4SESeVQvhLjX2bkCPiacBAH2cC3MA55t1tv1X41njEn2bYkCafvtDwJ8wWSzkJzovEQHxHjuRt7JsyCfsrHBKAPK",
  "key42": "S8VxBaZDA8thV5ecnekHZmEjTLVWzWMgASUXVW7CcKPvVhnUcHF7UWzp4H7cx7Bq5KBPWXZyEe72etVFc7S7Tra",
  "key43": "4NPePD7RTtshxhE6NkUz8E9Xe5e3bXTLGoQpRwGJDTomhHxgPX6h2n6Dz5PqKYCo64P2puq325cMuDbUrk2Toj2S",
  "key44": "22Zkd8AjtGH5KyuTruywZdZTty4b7M5jpEHBDpPP39Tiwfd1ARqJNEr2TrombvRekV4FBx6Wpct8Fsj5ATQpasc7",
  "key45": "4C9XDYJua7czPHwLFfPb3aBSGnydH7DRT9TXx3pktRv8zPrmN7TKFe3na1zYb69bSFpjd97uccDfTqyJkCbLBcHC",
  "key46": "3Qv8kDLgAxWG8ahSZenPaforPk82xet6e4L37HEJDyatewVbuc1zKth5fYCy4iBjKAC3tBoaKjczCrVqAKEmJivo",
  "key47": "YxDGGQrs8asgUdtdLHvaZHo8x2BohMEbEpmzynwuxJqaVaGDMX2RY8HNUSPX7dvMdBrFxMUTX6MWzSj7MGjxynd"
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
