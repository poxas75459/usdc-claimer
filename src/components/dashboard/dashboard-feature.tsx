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
    "2onqc2yZ5JiXBeJ1xER1reH3UtZqyUKZKitw5F7zFoxgktEtefYzrYTQuvEfmLZzF2bSP33Hp4y1jWH1m4Kb7TaK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "623x7CU1PiknYctdxLvWdBeZhDauK3PDAms8dMGUn3XAxSYiDaG6m9wfyMTwBq8D3QeNRPNqjectXSdMH37Z7Cmf",
  "key1": "4KQPXDZHyTcqewvNu7tM5TybysqR4wnYxgfeH5tpM2WMUTtrK9g6ZzTYjFnZmQQqLehnUn8aCnmfuzezHpjCxSfq",
  "key2": "4PbC3VyDgehY76NqV9TVyKbZDpScG1MUUGm4VXbGtNuwpxmKizRG9BAz9QN52uKzm79QhnS3TvWfZZR27usd7fLj",
  "key3": "xsHASEq33WCNRPAn5YbAFhzwTWNVQpQ3mZ5cQoufpWntEowLKMxvF1sUS3KmypyPJgqGfgH5gKoXRNtqNdUJaPc",
  "key4": "5LRLJfJ1pCfSJJMfapyuoKRa3ueNXtQsGfm2BXSqtaiJmuuKVcuHBNo4P7EDaqNrhhiMptv2xApUKuexr4NqHsEM",
  "key5": "5cA8K5F674JqFsp7n5nfuN4NLm6Qa6imyYa9jcsS8tZJNT9bH2W1QdWvmdSpTxHrLeMdg8kvchypfGzTkMihZThr",
  "key6": "5AXKzUpGFQU1RrFsTKWJXefFhY1ALY3rhUF9HRt2E7Y3fzErniemkQVzsuwSP6auuboQAtv4nmZ61iHtuj3izRgh",
  "key7": "61wWHjMHPjj82QZUJraEgsCPhWGoXYmRfLAcyAPXsmucgNndiNThp6vfjmyXcNV8DqLNixWKqCvmNAXMtgWw2ADv",
  "key8": "XtQo2z9pvTGVfdLx7L335XUgpQ9xot7zvVuxQAkSpeL7nMUHD2NEsTNCtmgorFofS6HFM8cEtpYpWqL71vp7zCU",
  "key9": "2PLwAfKSJ8jdaf8c7bmmPKVmcpnkGRoTapppbTDQXx7WZmHj6eqHUcibA1hkRa4zUTbKnoQfEhKWvwcaAKMgzAGS",
  "key10": "3wrtev5a33ZZMYTcB9KYp8oiyD9Pg46Js86WqwN4CcqCWkkZjwiyBKGyM7nJ48XupMqdX9T4xEmu4aADbnCUB2xJ",
  "key11": "2ecbixappJQsM3btW3niJhqTKAYkKG8k2KbgiRU43KVK5oJMcQwaKAa4BoB4gHftTFHYzvyCTBELPTjiZnqhqJyc",
  "key12": "MnNGAfofcEpHAp6i1CoTbg1dsusWjyVnYQGZ46mQkbhEsxcPxvEHMwFpVA7Aq3iAc59Ud95ScZQgczhFF7xqXLT",
  "key13": "5vDwVWry8odEmTtqzTTP1SpancnMS3EKfWzVg6mSjC21JsVYkxLJ724ZLaqGJ4ctFaXAnML4K7JxFiRFcK4rAPmP",
  "key14": "4X7DLbgzS1WeLWKsBZP6rm3g7ogW7zhfmzC25Zg2st9sm3gU32n9qCfHShcCdx6hJAypQDuNuejhp3ih1C2FuhaG",
  "key15": "2PGxs3pFixwKxHsHmmYUHanpnb5jUvtpdEZir5mJLhfdWrdGz9epo5oYkYCpEbR1kHMe2jjNYzZVpWBJoD6YbuEU",
  "key16": "43e2BqNLeLHZPRzTD8GADpVsMWZ7pbuhG5zc7yk3akJTsfM7nJB1uyFo7Koj7ffRJ8tfDmrm9MentmgkgWZNmTcE",
  "key17": "2wyzEzMaCTtJ1BQuRv7vrHKRLMTCvAgkrVjKQfCubMR8TgMJ6dss4GQyyVMtDLt6vXpSo6nS5NMR3vu2jjYcNE41",
  "key18": "2Wdt6BJL8KjuwRhXwVzzkhPjyvunBLiDRisMS4Z5k86SETQvtW8eUceDnUfg582TJ7sqoi8hRmuGiZBFDS1j6NLY",
  "key19": "3ST68BQtzuf4KPcBgkaWcuJ4BpS6mECHBahUxNydGM4XK75gYLhB82FvjCJ18yboRgiX8ntXC2tiWURQnhyrX8yc",
  "key20": "5GcQGjY1A4PTt62HBwphXJx6hJzBERCZLkyQ3s6EufnmFUtxbpWVbp4E9nDvA8QeRz4Jgt5dkQfTKa9JWDVr19bn",
  "key21": "5TCSnuXmUoXGuCfsBw9cySExx6EmFtLCMoQ6nUFjuSHuvqnhC1Wbos1oL4XiiP1xfY7e5N7hA6GCWqeuuUsmhQES",
  "key22": "4i2LAHPqBkUTVLnBVrpnczbFgisBYELeRDnuYQA72awKZopS7VbShCLJQZn5LgTMoGys6Jh1n6yd9gs1G2nggsyj",
  "key23": "5tytWJMGMnpaTQMgWXa5nqEwhgXtcjTGw33muMvUNUWGk88ivhhqbRD2za3sEVSrqSqfszKkQ5Mw7iJ8syPUmu1T",
  "key24": "5D4dRRXTHv2Dzk6AATatV6bkpimsCVyrqravz1qfUxFVfMCeBbiQQXaZ4DkBNRdRQrKLhfVW4w1TSX1A9Sef2Nf1",
  "key25": "3MpyMTZC1sC5a17M2nsqt1YM7TJ64V8xSxTtvzkj7f8KtxXXknmX7yLuRn62cYtGd2oAC6gFxkfCegcR8XYkxXKS",
  "key26": "636oL68wFnborvHjUXEGvRrctYVfL5WKw6f5hC9j9mgyNYAdWx6F1QD5C1x5uY54RYwz6fhCU4YtGH46A8f5P5gT",
  "key27": "4WY1TgESHpHH4Mp5FfwaJXCttcZohG8SyTd9PyxUuKmp1nivggGsJKm9k59XELSpov6DSFfW5EhThNtVnbSMnFNx",
  "key28": "5qbRc19TfrGLBiRoUgcow255AHvBEzrrbJgYFwiUM1TysPYoMATKkpa5JN4A5D7TmiHYCjm95PVUExxB3yeF12od",
  "key29": "26JQUKFgN4mt9xnGRGqoEd5kwVR7KHWTNH1WfDg2doFwDJnQjMtFcers1gnztssygZAw3v7CrDD1uSiKKmd8XbzA",
  "key30": "dqJ8HYdVdgrApXPbxqX11XaNu4euBrmtmCd2isyGaTDNqgqTBrGKD8yiXbA7QF3M48Y4nWunwRfkUcNehv9RNJx",
  "key31": "3S4Tta8PYCbvKetn3dgKKF6QhSuANUDH4qiDHRSvLQ1TkkXfUxhnNGNgDvnRC8oscFFdJk41iYpX4Q7kZHT3jN4E",
  "key32": "2Shc6yiT7JsvG6SgrbuPmj8pfDGpprnGvykbLcArPpr85ZqfPbA5XZa6LCBECpDNcwDyY5xWD6prRFmkiX5T2SCu",
  "key33": "2voztDDiku5uQSgZpFonfXgj76YJ13NER5XXgdBb4pPzUzXQXSr25Am6J3FgWj4p8copgiPGj4fzf1NrAJAddBAN",
  "key34": "5CY16uHATa9C44yMCGJ2krh36nY4dHLkoAhs43Ao4AEDNpUB3JixBCV6iZyoCHoMbEsuZybCpLMtKPxj299Xqp1y",
  "key35": "3ApcesS6cd4UAVwJQcASz2hFFpMDUNcLZToRA8tteKni3y2wu4WZ5dxF14xK4Bv7JX9CQfvM5qmXyqezsrGtTiux",
  "key36": "26Z2MvurVQVQHXSs2k3hF1sALZsJDm8FMRcJYi4HtAsjBfHpJeJfo3dumCsCNEDhogtkScRk4dr1p74S26jMwwSx",
  "key37": "2fZduRwHWNEkfQzJatyL7oK94z4yzVSBjYkosYex5K5UdqYXzrSgeGwEdJy3ifPmpUWeaMm4HoKje4YQo4KaviKH",
  "key38": "27gbWd3yaqef2gcnGPNdrx5mTy63GBLpDbWxyPqewu9bckDMNDWfKjC9kJd28JDE3AQFSxRHufxgWUASSxjrcBFZ",
  "key39": "5VxqdEBSD7on7VLT1CUJUkRW6ax2TEK9YzHQTo5NtZeBqvPzj8ZNYdaXRrWWkr55BJTzvEcRA4Hb4RfuUGKmGxNR",
  "key40": "3AXRqJ1uEsHEA6jxEeA48k7d7SASpyUkKYvCCXvVmdWDke75LAFreq8spDetYRjMbBQHPNP4HoDpWXGwfJ4aFCWt",
  "key41": "q4Xje2CWoYQJ8gZ9EcCjbwn5FQzFsncVyPwScqkHKaWupy9DiWJSo5qedksTAGEv6CNNyKFC9eWZnoeX5ifi9Y6",
  "key42": "5J2rnGGmP34v5wEeTxrGnv6BVaPT9bsbfHkojeBDQdDQ4qHj7yjMoSRui4oDVqWU8hvuBL64PoZ53gZ5WbyafWAg",
  "key43": "49TuAmhsoYJbEcHrrESA7oJ6jXQmr5xRpUNntw6BNV3ckPfCcYvTGzfoxLSVTFFHYBh1DNSMcaEdvLEfcKcy25Hr",
  "key44": "3uEpM1qCitQenmvwscvimnA5cBmGiSwcH3XEfU8QRoPSVQ3MQ8yfpbibXPpj88rAPajrLLw4d7uF49sZHjNmA9cJ",
  "key45": "4njaFb477RjfE5VSPend1MTiB1swwT9fx1vkCWTvXKtjDDaFayKbCeRgznJH52wQNUZbVCvBNKMjcxD47yZCUsbr",
  "key46": "4R3XxBtjd1oJJFChvmAEEZ5R53tMqqXnhvuuUoDzzAJyHvK3imuhLCnYNfpSAyRPyM8TGWECxDDJG5xMVLLw3h8o",
  "key47": "52mnUrEuVZ9rWgJLgKozHegSmX4mosjvpvXSNYnHQakuBxyD9afHwCGxioXuX2aRgpmzSm2Z5wDfMZwpQr1wy2hb",
  "key48": "5iBUAmopjtitZH9w4p7Cd2jPw7qyE4rLnRqzD2SVzEcyRksF93fX6hH4XN5X9E3Qib27Bwa8hPDKs96KC3TFCMXT"
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
