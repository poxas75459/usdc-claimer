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
    "8hCSu3Wi3ob5aBP1QQE73LKzYMLGct55tiAVFJTXjDryp65qqj2ezj4yom5i6e9EDX31pSaoE1ekXjYxBbU5fRE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vMrWGXtTtQxUh7YqyUhehzEs5EvEqDjxzn1E43t6qqkh2G6nwamVeCNizYRkPM1CwVmygkZguZsRBvxCQQ7qVAG",
  "key1": "xkVyK4qZ7LSRVAoamku7fgr8Ni4WYVJ8Mqh9AiXtrguovAcLAHXJVWmda8oWMBYXu31DW5G5RcfYkHDJdraH5tX",
  "key2": "4aT5f5dmPmNWnBFBtyukRWeohtpszStpc6rSvtK7FzwR2HSyJ6DsNBf4JLEnDYNuKL6s2pZs1XWJVpdEfKWpx5Af",
  "key3": "3kBrJb7Q4Hux8jCMBUiTiJiFYkfnFAV67khUg1ohNXtbd2HKPYLQbzgDpkCcCSg663NqAfzz28qYNcw96x3FosFx",
  "key4": "26a52v8CatEyyfibGMBPB4UbxCLhoVfskToXq4qrVTKd1XjDx5UiqszCaJLYo9DqogP1E8Unz9tmNENjECmKNzhv",
  "key5": "4U2qNhsguCWSizAKTtv2ZYSKNY79AHkChMSvmKa2KApV4MwEhjdRgFF6VdFX3d8T2yHVkWrAiudaSEQeWvWrx4ux",
  "key6": "AGM8C9dkPFM5qL5r87Bh3ztKCTRUDMssMJ2KUjhg9Gg3KcEAQ5XAxz1aY8rf1EhKZD4m4vS5Hs9YupEygXdnoKA",
  "key7": "wpQzad8ntNLZBjxcbE5XuTAa2KMPw9HA1cNt8pFCvP6uXtzaU4JyrtnTuhkSMBkduZZMrSUV1PiSQREYYdd1Jn7",
  "key8": "2D7Wzb91U95DhNodLkzJFKmq2RNJQ3niW2d3D51byrvn7962Hi6gUPha2vgoMfqFdEvRFzTbqUBQEsyKgbiq9p5z",
  "key9": "2qJeiQ1vPD6bNZcnCA7HfrQKqcVaehvVoHugW5CSge1bAC5V1vssXMiemuQ1YcJRJytQKSXATfenZcBdhXNEgnxN",
  "key10": "5JcJmEj1pxs58KMN9n5y8ko8BJLEKTGgGaXPxRS3QddkEGynYnj1CD9xPSLyju9eiYPy3aZb43pnWMoBgGJMJ6zn",
  "key11": "FHgFZVmpV6JfKWUaKUEoiXzcMpWX23HqEQQzyb1FmDutDCrSVf2CNsBrUa8zsQJvqQuoRa6RaQitKDp6aAPDCNH",
  "key12": "4nitSxm1hbhNH9hSGSunTqgqanp71BhGmbbwksdJkUCYFC4cHV12zjx6vFheHzWT7FX5GmCZbELbtFLBC52U4qKK",
  "key13": "42D2C7RXxk5sxx4LQznh2fe9DFchSbKcngboUri1wfrsv7V2YyV6SuDzC3ms45iSc21Uo9wnC6LYTUfpFrVtewWj",
  "key14": "mtuz9fQA2LAZAejV4e1zV6ZvknrUzgCXr9RuK3GLPQ3PKoaGxM14b2bVChyTRgEkVQKSyK6aXonsLmr8XjfoePy",
  "key15": "2NonuoUSpSVsgV8rQaUaPGMUFNyRmWgcXpsDiBYeF43QWTTVNHUazQszbvdbt6ggJFKSdyQvhdhFpbsTCSX8jTUF",
  "key16": "3y8j2qhroEKRaiaoXgJeRwBvV1T4bX6Cb1kZaFDdYQ83hYBGYA4R1GWy6J2v6XiAaTShoqRbSz1YNatvCGrZktCc",
  "key17": "Gj2xnvS3T8oNFLwz6ph6dSrscVuctkjDDwcvAzZyPGg2nKf4YCXpM8PXrVDyaUoLZqRtL8FxCdLY9ag5JqqRg7i",
  "key18": "4Jg9WPfMzvVqaKZhnyN2RuHeF8BKd2QbiFo3NVhuFEF8csgZFrJibMEobKLFj9FTw2uZf9uawqkwymLpx2WBswWj",
  "key19": "2pKEwtKG5MLXDWyT8HYSjHaEn1A5Xuxyh4wEepNQGBJZsEMvyrf3NCrs76tGiPiWN6aMPuRhzQwcCxWcP7p8vBEG",
  "key20": "2P2UN7iv7hCaN4NizM1NNJRJ1EooXz5yDupG5Z2uGdpuEfnocpk1Y6WZrJkepZYX1rtGwWKBTa6B3wp1q8gxtDcu",
  "key21": "HoQZYyW4miCvhaZpahupBeb3bzVm1AtdJDwPPgj8BUA2qARrVwhcVvpDPz7epizBnTe146rxCnETHMzr53r6eG3",
  "key22": "4DZfTEsA6UTSvQM9JChYYBc8hZDn3qqDZAJSzZeEcqBitwqm4V1dGivbhATF4C4ozzoFEqXwLDjVZC8ky1mm1dox",
  "key23": "2XYQvztTaQ4FoLd6c4UApZF5XqFsXyq3FxxM4GpehxUezTg37UUA2HiBVqLd3vEE936kpXkbWBtEkBYKh1eR5KT6",
  "key24": "43ekkQ1w1m8uvcpDPFzrpUQX5ruiaYbvYnon6M5Aevj1Bg1mbZSz2B7ycqSnbh9wTCQEdSnNWhERvnKtV3ABzv1x",
  "key25": "WDzbA1wPPPVM4eh3BjM9UiuwiZ21aTj7jRj3NcZHYMMKHYSMCGNEHsw7PQgpD9ttbS5TbLkcyboCxcSWz48rLC2",
  "key26": "zdCRYJb4b55c6BqsTWCjQnveKk3p6X2jE1M2NH7izxxjLnvMU4zWgwVEmVFcLRrkzoz1yDhUWSkGpkSF6MXfw5G",
  "key27": "2hJxaaEtQVo2j9y41Yv1nrNMQAYzoZv5Ys8uJP8W1AFb8JerYh3qLwkZzAPHs8NA1YiK4UV7aLSkkvRg2KaosmrE",
  "key28": "3PYMqmRVxc7m9KKCESF8fYyBoyRmGtKgP7tHRjmhybRP4rNMyeEoCY7ZMcs9RY5iLSG5waWw3B6LHw4yJUyvTJwd",
  "key29": "5UwoTUicNGx2cUXnfBnqbV27siBbHQrKfhtkMBVWkcgbkrYKcz1vXkavcVFfjPN5KGUyn4Y3yAyBZQans1CbBFpU",
  "key30": "QcpHNPc4Bm344mqiekDKUy9UGmmZFiYengbNnuK1xwMwU3ha7DJT8ABNejNqc9JLRAmRUFcBXj5eT3wbTBTsyYT",
  "key31": "4VZ7RwW33jnnLTSadTDjSrvS81LdQ49UyknWKq94FjzP4fHeAn2fHeCL6AFYMvwcosPFKVvBd6YxdisVPwFLvR7y",
  "key32": "4zM3pkfAzY4niYMxiSBMntEQp4FLupfV2hvXdCdPrHXtMSWipZVBqvTgaj9FLVBMT9Fx2agTFrZ9gCerKMEt21EU",
  "key33": "Tfx4KfGBXw2air1iu4afzifffrSo7gfPMKXFUtyrBys3NyaHffB9Mc9JZSbxwqoMaX8FqyFLfm75SLMtieJE5pD",
  "key34": "38fhr6dFXU9F88dfPciirubmcUg64mLknr46Bjk6saggQRz155xeLy7DaqPpHEmRFFpd4Cf8AKumucU9vtwmFRnm",
  "key35": "ZaLAA12vQ1nbV4yTchRYPuW4tRCv1cjefsqTFiTvLh2JWnNM8FakZ6pz9L5JUDH2mKEUG94hBHLmuqwXWz248DW",
  "key36": "5vVM7z5ddDN2VqDKvh3Hn7XFxjgTUAZfU2o36sEWZXnNpjeyCuJX8FF6WEtj4w5A2ECBVjWi6WYa5YDPbd17EXzx",
  "key37": "4VMjfzvbv4UfjRm65n7qwh87ubCmZofLCpwrCUpuuTpTrQtkbbfU6dWWBMTfXCDVpEoJJmgCm4AB55SHK1WZfvvN",
  "key38": "4jSRKCy4WMbLL7qs19fQJpbNRx3WkYcJrdx366GnMtyrPsg6hV3SFYVvRPuDxuJkVapw3ypvDobJQ9uVfXWrdjBY",
  "key39": "3uUF6U3MQkMvhQkg3Ez9TcdftwQeYLJd4ZcpwEbDEtxBVo2SK7M3Uqeh3AfLqM1ZDosYtoMN1hmCs3hkNfGszdP",
  "key40": "65XiLDedE1cf67zDc2Kb5s8bhBoV2EoEuRKTip4B3owEUjzjV84WK8XFccL2t4PWg3ugE4qgjh1pavxahoPxeP4j",
  "key41": "2JNtwAUGw3MibdaPob1RfegUdfBDWZVzDK2Y9V9AMioAZ7hvEoeaNrQaptWYYh7nhsTmyU338hJDyonizS9LhoED",
  "key42": "2J7oWBdtk41nZSMKPTFh1cMPTkXfrgTjL22DVtFSGjUpZmcRzzW9AvGzY4U2VJJhzKGVSqq3Xo3FmixWmHNXvxBj",
  "key43": "5cLVaDiPhkyV5DCyJEXtd5tvz3Rgo9ajeLJuxUcR6EcNZStLCv43ZZi2VC9xnLDF4DDby9j2csy8TxJzoTf9HL7D",
  "key44": "2n2q7Y1oyGTXktNHprXDf66YT52erVmaLb1PdsBsKjng7tiYmvTM91UN54UmusiLWHCPXNLxY9w5dggfD2rtoE3p",
  "key45": "3AgkCtFsxrjrrUFHwrzP4hWw9iTBXvt8LTQLo3ufDS6XXq8L1muvgempLSfwMWKmdjFWz87T4YTxVESoYkHGmiCW",
  "key46": "4EqfGvhrRZTMp4NxeA6nQc7qfA38GS4yiHsmqFdGMf8qy7dJC1ZuoTiYo7tQKDWS6JhrSuh3SBDAoJEshgiqNTZK",
  "key47": "3KwqZDiS55JGoiGjCZ3UGE4qB2NzCiNd3TisKyxDWMN47LcJXYrVDsV3RXvwkdcth7cnSELFVhZmFdszfL1bhgaf",
  "key48": "5sjYcZ1rU3F7t3gGSdGLVsxiAbdgcEHSUKsn7o5EJnyz44U2hTRrVWDcBAzU3eFFNatoaAnEXbXBfWQ2nVCrRE4E",
  "key49": "3Sd7YYxYJYbajLrpKZv85fSErPmjzh1JcFxojeMfi8N5QpuS4YrMudPFVMcuB5yGjacrPURdV9ej3oaeqKhQ7Ji8"
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
