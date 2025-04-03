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
    "61vGb4apSP1hKoyiXUYdNzPwxzckGe3my1Q9a3f8Sh14bB13Yaexv3aokr2W6ezbGe1Nf5CV9dh93bjxUfJax2EE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Tz5PAFG63AKcPD3KEoTa7YWZsGttP5M2Nb9cetM9E4V9GRgJo1d3p7k3fKZHfqNVT4WqQUoBp9tKACe5jQtr4k6",
  "key1": "mUYhMLQoRiXoAMFHcPg5NkwkX5d3uQ2CE7y9bkATg8eJh8E7pZWLRWTkDcpX5Cc9jmCRaH9dhAWQsLoDNPKtivc",
  "key2": "2wDqtsSdGnW5EPdrtkdsvHrfS8Dw2gi8iXNqPjVtk2CcX2vBBi9jEQkvqZtDraNBgpsbDUnr2rshCro92MBjs2Na",
  "key3": "57Ci6KiBXi4rjpmMcCzysiMrnDr8difMp52MthY6xStRjzxFt5LcUce7iAKRbHEygdf8qrJAsjTb7DsoEW5sJiyt",
  "key4": "215wMDm7eKWzZXq5JxnCLSFYiCHcXeRYxGgmc24aPbhKPu7RpNoZGeM1YBBqadqWXQK5c4wQ14V7SobCpqDqFYqy",
  "key5": "FP4crGL2CHb5KAdF1rqW86rPSJrwudmeabeKGQNvNHyryiqgD3nGA6GiJfQW5nwCmDMpdP5vGKdK3ujs6PYHPsE",
  "key6": "2fGhVzDR3Z4CYwCA6JZL3nf5jC2TGPaP5MknL2n49qX2mxr6GPPqEACZLzmZ3tLzqa5j6Y9sKAe5KqE133J43US6",
  "key7": "5V8PwgRoARYFtjrx45jnecpFoxmubKQ8epLbjjz14vkMmkGy4vHTDApoxJK33HECaHMSYLVe7MGoPMChkxxWeicD",
  "key8": "4U231cD5Xg1w9Q2JyQ6cdrScYZaVGzc2vkRcQppdXPASgRer2CNRzViLjARKRALgNiBgREA4Q2UXT1LYJgWrrvfw",
  "key9": "5RMWSN3DHkr9KtTBrY5mfpN1vy27JgLxBDaBepq4RTnnZt86P1gbmjkqHjCgj7xBJDk7gj3sRBE1nFy7v95sEyDH",
  "key10": "rrmjLcHoPGmtzEijd1UTReCaF2EEAfebuCVmXX6bhGQxBrGM78xM54kYUrQai3jFqUHDn31kDvcXUrVjWFKehp5",
  "key11": "BKZHUt5qv2vnRLpd3YwHJU45vTDZbV4TrcYNnyPKQwCxSBy2as7MrnEfXWGAmkobhT1ho3zsLaezg5tsD7WEsYz",
  "key12": "66mSkdvpUim2iVvP6Dpvy2Jhhrp3Zm5XYRiPB4wSzF9TwR7zdzxaZx3pH7yAtxCSoN3Y7zgv5xsVqEdxVjB3khSs",
  "key13": "5GAMSUsof7mc6dnoUhUm4DrPfBULmhuQ5Gpiku5jCMRdk4HBwbAZ8Wi674S7UeaatNVeq7BAgv1F2Hunx9iPwGZP",
  "key14": "4XuMbgZvUAyqyhUeYvs9CX3bm27zvHUF1JLrKPN2SR6zmeYa67qJNPXkjehj9eE8quwSgkFrF8YCME7dz2T165c8",
  "key15": "2UWsfUvdHpeKrFuk3nGJkyW2ZACEw8QuRo2a9wgsUBmJcuCAtUNciYGKhp1Pd6eFP4EZcKy1hqnqpaqFTRiQ5hsq",
  "key16": "3A56kx9z9oPCxdVF1sdbx3jYLSnbdJbkn1dFKxGiuLtGZFUvUm4FdMW5ByY4NviBMaSVyey9HAbE3rtsF5R2usem",
  "key17": "Z8YLMyrtQqsidqPT8VXwt5kQenrMJMzU4BTrK5PBZ3MNQdMqXu16Jj5uRSFbLqMsf5mcPUksTa68JH7oaXPLvwT",
  "key18": "2Fr8YajdF6jHVpovvaW5tLppfhMpomJEsSugVSBzBwi1vA92YovMJ7hH8oYavEvsMrFUWD3ezueYSymw2iqaZR3x",
  "key19": "3u3HTnefMWKBQTfJZdCNsdvUET8gTHtVDmNPyNMhiqqCSDLM2k7Wso9iFxfH8GTVJaz4QHH1ZX1j4vsGw7AGrxbv",
  "key20": "4H64EQQ47bFKJ47AGZibhWNXAZ9yTfBDvpwUkbs4ihAqh4LQ7r69NoTVDUYB3G5NSt31RvY2EjMKWMRE2hb9Jt6E",
  "key21": "4LSAX6cx6BxWY2tVfeyKi9T9FxrJ94NhvMz8AxK9qNviMzGwSjJeLNPg5nmBKoAvMtpAWXRKK3ZDa1pF9yrLBDYH",
  "key22": "35j29HPen16qKV6Xc2NDPUDAiC7G18dNHwKeh1YdYiBH67oA1kpJZdo8hyPrVpm5uSgrVDqScdpGmfuQeTr2GFQu",
  "key23": "3dUYixVVBxf8oVWuCptvZGGPfZnABv2psU1fvBW3wo5GP1aVF3iWwc1bkuuc6xWE5CepvWKs1TS9grewLwLvC5Uy",
  "key24": "4WPM2Q4o4qdLPiubJTzVK6bxMwFuM9AY9aGhNbc8ZzPZysw98pgFWhm95rWSsGdiWYRfZQc4qrTP1PGwnfkVh7mN",
  "key25": "dPYv3JczcMpAVCBPg3eErRS5wXGJ1sXL33Q7znRe7E4Dy1oLjsErGNjbyAWZ4EeLk45m1Ut7BULNGnjC4s3WKGv",
  "key26": "p9QM5JBtmnvxD19NngSn8ib9uyFKePyfqM4UW4Xzb5Uro7AE9n6MazCj471riafxsqJExy7isymaraoKxTBQcXK",
  "key27": "2Eqv2oh5fGTFffVPubwoM5btFEC4LuPcQZKhtitfgnBLUe6pfDC5pnKAJs1sTdtsaMvoo3ijjhVL5E3gczmMVLLo",
  "key28": "2iAGiNEC8UdQ2qsmf9Rqxmf18UsTJf4GJkAfXAjEQyFT2u1E7zsHXa3LBaDKv4r2Ct4q4z1FFLfEVC2S7WVXfAV9",
  "key29": "5DfebRqD7XPtU6tw5yJ1UMazyji3663tzCmtKxaG1et5DouB36paoBckZ5rjpAmTxVupWSJxrHtBA2kRSC9RHxNF",
  "key30": "3fbAoYiymKTTTYmTfoWSCMcirXHz6wTnmhG3L9ZGV9tuqL4AAArqKmLSMvavF1JTEkBGNsGG8ScRah1pAdsmEx6p",
  "key31": "2n8dKFvkqW8Yh4cp7MSq82jwi9dt5iY8cqJPAoakxT6kQyXaogmbGGyzsSchFzFvJBBmB2Mo2QSSeyxHLGUCSHCh",
  "key32": "Ai1APzWbkCwEwgY7QYEqhTsXy1KSHKF81LNhv93hp6dwdLnjoK4ZLPbynMPYtHP3ncJtJk4B2DMRKfDSaXVdMno",
  "key33": "2bjvjbhfCWZXFvFfVXWgCG2tvSE886B6TZ8QEJvfKAWY8jvkTPoLPU1RbUXePxaQwvLSoYVNn2fLC5MoBrFYdCeP",
  "key34": "Wsi9fkUhvJCbRWSrNk3wnxxMpQkbuN2wLDCCafsUkWxXLa2R6W8Uoqm9NreCyheAFdGwG6Kgi9XxyXek3Dc2gpx",
  "key35": "2Le9yyUdTFDRKoAyVMhK3KrQ6BAEnd9MwvyS72ZpXzrio1GjWVmVTdGamc2TeyLTQ9HLjqc4cnHVsdBMC8o32pqg",
  "key36": "3xDySkKQNoAPnUL6UAjhWBj1Fw5uHHUXWNG87fxte6EJdXPNf4EBvtu5gPJetpiLVttUdSgWxUY4nhKYMGVnfNK4",
  "key37": "3udgg3XEZNJqNxeFc4mCuyD4fk5XSBZbQbksuE6x8gsUWDi69SPqAJXDufG66Q59ujbHzBAFWKjDaPxD5sRoMGFK",
  "key38": "2DgZjQc1eUWaNDX4CKdhdCBXoPhCfbjma6QRcJbzPokW3wmb9e5ePxEURvwdtsbxvM975ywjboUDFUvpd5XWJuPy",
  "key39": "3JVCdYHA5rEbfj2ePith1yg2ZBFNdrBXe7voQQjKoNWt37UhPWRqP6jecrnH7mGcLoH7TKAa4fasy9cviLC5MQ7h",
  "key40": "5Uxu6NzJrnoukfX98XWT6SLMwYHiYiXuAY8a9yUJbDYK7jaCz4CnR94FCCe9qT5zTCUEiViLKgVNKtAKw1Teeq87",
  "key41": "2Ag5Yqdd1bkQa8tMWSRh5iBofAR43jzyLWkZXVkFcPhd6Kpu7XUW8VgTNBYRWLUg1ciQXM6BZ4Qtz6G4XkzMTFUC",
  "key42": "4iguGSzENFRSP3up7VWLaS9gDMU1vwcTu2CDVRedv5UEHoY6YMpyanyKCnscenXyg3Tz4qjvPCFUyioNacp236Q6",
  "key43": "3ziVU1FBw9kmtL2gQceMMtv4nqhCPEZ3oruqZZiDAfBjAAsvhynQLahdYGSonDD1KVPceshmgfDBjnEdobjxii8S",
  "key44": "y3KVnJrRQjSTeisxHy2c7bWqkrEQ5KQcUBtWAeJAg5n64UiPqBC1KzUsHkVmG3haAtdZaBhZAFe19vGhxkEw8k5",
  "key45": "67YAVzRsCFtiKpDWfszmgiK9FAdBMdEyL5BqjaNDciy4BRNcVgnKYNktz1xvCizEQgiF59gWcdzK8NkLaF45HYQw",
  "key46": "5r6VEEFE5QndYYq2oRuA87xVUQfebsAsj9pjV6BnVJBa5VTg8VHkgGeYbkWeJZCm5AcSeKwKHApWhqnE1p7cSBnk"
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
