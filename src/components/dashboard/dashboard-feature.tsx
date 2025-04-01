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
    "43EpuSjXXkkwiKZ2DkFDy11YvbbpqtBUBg5eRSkTQaM9oe1ZPSdBt1isExoykKpGQ3sqKmdFyVxSA5LRxqp2MTdJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WAp2RYC54HZWbhVn4WGqYznVYvkJSKZMiBWMSuuFstvr5fMFVBLs9G7EXdCCxAMjULLQWuW767YzZB93RrmZiM1",
  "key1": "21XnwZvd1T2y1RJcFJWu1i6WqvxM32NptnN96KEjunFyLmBLbCNUMyH7PHEcBKjzCP6sEScwfTucQutbVgCChWmk",
  "key2": "3Un1PHHg3KXP5uczrxtXmcmqySQYSUy4dDWFRxjQjBKH9LkaYcJ9Us5hzgVKS9iM2p8vVo5TQEm5GYRHVvPy7Ta3",
  "key3": "vAzFCqbTSX6kHY5fF6CRdme7yVJzXbW8eAeEz3jsW4R37i1hJG75pJpxQDQx6EFG4QsdfZcbjz6sVHT7V2fEodD",
  "key4": "Uqsk1jgYfbh4L5VqgAp9Vr9QewT7SQBT1pcheg9BGpE2cEhKKuXdrL5j2o1soMjW3Ex9xCYCeHoKu52fLRfFQqW",
  "key5": "32pcoLhfoxjvtwiNFsPQThcNH5SJ5wTWqjAm1bmxTq2dvngHYjLqJLp5zYxHoRoZhEBLPMHM8LKva2s2FeZMArPe",
  "key6": "cqFiPTA1KGDKCKukxokJm2Sr8rApXc9nj5Ytk3vwihsUDFqn8sdosq1xeFiN7RdkX9iv3ZQiWHwk3YV3vWaubUC",
  "key7": "4daq9nrrHTZruiiAkoEGyrTgfnDGsEKGhj1ddzpBnb3dJFyKcFYMeeSQHrKLikoxBeraELGqABdA4LV1VGS9hdzL",
  "key8": "2dh74UprFevn6eLZbpiRu8bRFXQiTESpSoRJUdaLtiu98PaFF4cyT4bTVT3rzaBmF9R7kvHPCkyVmEMPh96uM6hS",
  "key9": "5YbTsP3GYPT8naoTESmcKZfFpDQjw4VQ9ssuAipod6vAt8JYuvkVaKiDxza1CH2RXN3J11GaJfGDXyLKvtrhptqi",
  "key10": "soih9MEDh1Fzo4NrjjyqTy5exJE8knGwnN18DPgLcVJBDu8FGj7FrboUdKwK5d5i3uttA7PiGNDpb89rKR3B8km",
  "key11": "APQazi1eb3kfKxzhJur1cynmDSuSdUUQGDZoqCnNNZVMnzFW5B15wwBrb3QMWWkvTfhV3uFRjK85mkpQftBzsRb",
  "key12": "qttoE9DoRQzgh86ZLzJLYtyiFDho8eTLcGP9bTxxpUUR4uCQGS5qGtkZkEhpxY8f6paEhXbBLi1td733Z81udJS",
  "key13": "5e2Prdp17dHiKsLiMNtBxoviS4sdmgbn2mVwqkTp1GsRkTZ2eRW6UkVpcnB4weuo9ScZCD3ho233p3k6buwqNzkK",
  "key14": "2SoHaHU4Zve6XkDtouCafP3QEx4bEciY9mCosq7rRhKmxRiSrKdYXcEW8GywR9LG9UbYZYpdq4Up7rZgubQS3LV",
  "key15": "1HcUJzX5CjVoMzV4DawcjaB7D8weFW5ykwMiDkPnLqfhSreKNNravK4HTkEooTX25YJyMmHfYq6sfwpZfGRJBru",
  "key16": "25PwJxMUJvEkr1fyFxKYt7RcivJ9xYqZZsYkZeUpiTBQwDykhrNmu7bKd98g52RfSjtyifj9MPwG34mPmhNfpLQ2",
  "key17": "5X8otQxeXVDHCLfsqzsXvd9VjbyGSPgsU3nZARcDSE6hdyzKXbqqQike6dEsby7fDGFQsYfQc37ervV4xQ3Ukj3k",
  "key18": "56T6d29TBERaTRYi1HmYwz3QjTUHyGmeFyBbFqDN18Pi6oGgrh2jQRF18dbMNT2jfigvecwG9V8gHdrXioSVaSoh",
  "key19": "Cy9Wq25v1532XTTr8RBxn7H3duWxdX3AKiKfeZSWtMBjPj2Ni6S7JxrrvCLN2QcJYqiPF7JTEv2UQixp9b8vcfC",
  "key20": "3E1SREm6DUCsXtYEsaAoLtVmKuZeebjsFYrL7q68X9CFrWPqZrxsrMmGArvamz6jgjFe8MPoYZnj5kHtYV5Jbcyr",
  "key21": "66uMHo5koZ5hhGm53NQ3mzv2AVCTTENB4rF9XqyTrcqfozcwJKmQexBQCqQNA9uBvSuZ7itsE3KbMf6Mvmx9nEYT",
  "key22": "3goBJ1u3kv1VsUUw87asdbauNJmYngF37KSUv1R4BqTJWys8JDZxQjofvJDWRa6X2x8sWiDwebtx1Q54tU8JbbyT",
  "key23": "3GmUNVhstZvs2WEJoLiUn5Xx1PasN3XM5BTry3QmBKmDd2J2cPAJ2nHh41Ckr2rryoy53XXcLQDBv6ZCF1DJQB1s",
  "key24": "5bmagnAfD3wNV5gqXmCYnBzq3NPcEw9iLZHxJNNCbSuT3TCfS9agptV7EY55kpSwaqKMs1KcAJG3LGjbSxW7ymLq",
  "key25": "4y5y8Lvfkz2ei8mGPTdCRwVWYkk3Bt4XyXVCCnAe6ocyDveb8smks2TpUu5E7Skoi1VjUUGrcBLSc7CmrtMegDgd",
  "key26": "5f7PWUvVSZCYZTTv1pjzQvALXhXkp3z1heFLaR4VvKVDcLrTtdT38jgtA4L8h3Fz9vnwLhfLG7udUmncd6jdk5o3",
  "key27": "m5XCHJCvnNFrxiHD4RX78eoeAX5pBDZakNJDjwQXBdQhUa7Axh1zzE2eF3qk3fuqBkW8rE74JgHkM3tydQv9CZc",
  "key28": "5wsrMz87J8CNiXjGiVWGrSE1gjeMfGxAK7cTvdabd8qEXazD96uiNj9HrVPvq7sfo6cAJxrDtQnLotoxC98SNLwM",
  "key29": "5Tqi5SmymtoNjK1hUEhjoiz5BAyr5VdhCo6vLZRhUsQjZY2o9U4FM6T8mshqech7YD8xYh2vuwz2s8nRMgxnBYQE",
  "key30": "32imTu7ovPXVpzL7mdqzaMDdzQYWECr4Mqixwxxky2PpCexoyhR2cVfn3duL7nDHcw3HihXUeYdPsJHkkkhdT1KN",
  "key31": "3mydpHoQKmwCB6cjb6n8LbhGVWpzzqWCfXmmUQ46rkXsDea2nJwW4Ruj8YDjTr6ajFoTcwTP2q7reALmH7d51PCx",
  "key32": "JSqHrtpSPGvdqgGeWvvUL7xNRJ4xkVeg3gEU5JhUoqTRZmHKmAX9WKoFR7hNWR5gP8Vosv9siQNBk7xWNNM7ctG",
  "key33": "2qnsgYTyA6FXyCVxwF6gqqy12cRbpn97Z6uXeFjn9S9sGwwt4UhgFdSfejiwXeqo4YRX33zJh3VagqE5NrEEbEia",
  "key34": "3pz6YCU6Lc5Kkbr75jTRyQN3U7HkndCgDeWAwz3eijzL4LCZWFzF54N9p32nL6Sq3MoiLVvHDGTPrBkyXSzrCnTb",
  "key35": "2W9McE5dAVwG9H51xEmzT2hNSJ1c1HTercKX3PMUUToEkaFxQ5jcu6EkvovTR3PD4aYbQF5izS8GCQGPLHC4Lh3U",
  "key36": "2ZTTLHQhFFsqPVJHqpdqEntHkxEPqJBpoTLYbLCVJzVazuJyinAk3tcomvWEEhgtpRSEWCaejw8BWD1tTdHvkfi7",
  "key37": "xbX5jaRqSduDsm9WLrySnuXTxVEQWJsw9N5n9VuHsk57iDrQbCL8xFbY6kgfuez72BtvLVEPs9xHf3cnTEh9K9L",
  "key38": "25rRCCYqcpgFNjVU1AWJ18uN5zfqJGNZBkRAL5zYRextJtpSCzwvUJEtZRXu5KgtY24twKtV6uFp3nm7TiqHvve9",
  "key39": "3LoeQxSCcW2bi2MxUrt1fcB9gyJ1AL1yxdn65cFDp8gAimEq4D2YPTYUSCQ9BPCPsR8pCoFQoMpK5b11gG1MW43L",
  "key40": "5voLmhq5zWUeoFmWTzXV8epNwYR921DaZ6e9sJZ5KLD2CzNTcMeA3HB97DLnCDjAYqZ39Bzz7HB6NKDrcrBVN9ch",
  "key41": "51SK2yDUw6qKqX8PWTUV72j26hWdZTRM1xeDtTkhoZHeYdtifLuWYnEc5PRywrP4mnvjm3Kr3o42NBKGfFgZ7ycq"
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
