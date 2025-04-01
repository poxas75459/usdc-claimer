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
    "4BrR9CxGXzSCqpHamRA5qcGhafeUjhnXujsavKqC2N8SuDNWQMLTuVFFfkjE3TGZr4X6SGGRZFRciGG4Be3mTSXk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gzTPYM7wTM4mqccSSab69es6SRtdDFawSo1Jyj2gFLT5136Ky4JaBBx1HHtpXrCX9PwBetUtr7rY3SHJf5Ftk5h",
  "key1": "2yMAy2Dy48qr5A1Kad2JgnB8R2RBrAU8j3bjZpMbn6E3PqZbJihuewFUrhiK1PihFBPE5KNizc5KGB7kwMEzf2NH",
  "key2": "3KnyBYk3n2eQVBw3Rq1zMf5rZUk1vDPXknvA3qUMMha7fRaHCWgkBB7FzrGQcCWbjrdvD3M823d5GS7mwCqFguVy",
  "key3": "8fhJGQcrZu2UTzVV1tDnaWsmyec9cZisZ3sorzfsFZmt39PS64rDpKSbHLkKJ2SvUQpDGhTAeTTXUDDVyavhjGU",
  "key4": "9G16nzdYfcatqxBtaskmvH6ECoW6LajVDDeeHeDMHpzLooqp7ksw3cuqDWcjohtTbCWUr5xxbrLT1X92W3JAmeM",
  "key5": "5tLdLejgT5xKyRrGucp1K8Ny3eiyGUeQwTjLJJxXE5e1puisnPAVScC7W8VHpGsshsXUTdn296LjPhBZvcDTRsxC",
  "key6": "2uKsKbdawpwJbChwvnZgZk1N6L9HBbx19Cevid3sUkyWM5nF5fSUTPxEs5i64utTxUBTcfkKnHivxqWP2rkbLDyD",
  "key7": "5VqkZVJaCL5WMCidJv4hNheti2TBTwcwz8hNWbpD7L1Jd78nofzBUqUJ4GJSasaVNwfaBQu7CmhVvgMuZBYg5V1S",
  "key8": "5qJrWxfKfJr4Wm13WTmqrHgrp9Gwy8gZABiUXXegthnNNfZ99hyyoRhYoMZbkjxvFqDsTtH6BDMjacz7frrFHUex",
  "key9": "5AkeycG7qGJEUER9iydCZzJDKuwv3i2ffxsqdq6snP341zhTpzsTmqg2m2GguMGQev1KiK3dbrVLvHzLHy8gouNT",
  "key10": "5xHdqBMdhEpM6QjPKibkvfHbnqMehERv5dPwBjqeB8o5VTD4VwR8QH9m1vzefLddhpKPU3k25B982utsuheTMuqL",
  "key11": "5xinzHnYcbixvSP2v6zh5z9hYMMQp3biVZXkEFCPcnhdwYaU1tQ2VWMqqKEZEvkNHxuLmvLeqxweMHRkvmU4pxiA",
  "key12": "2DrRUeVEJDmyk6Eoahn2hVhaLny5WQVVw7Pvw8D5tgvK7tvay7MAYqbTawDwFoFafRMv4YZQRjiw9qxg2k7qQWkQ",
  "key13": "x2JzEsy8PLGRFNX1kBD9gmxoyxdTUTiMRESEHpq5sjjLXQcrEDdjsxpt7DPRXjXCsxmbBrEjCwyANDkFvhtF3Ey",
  "key14": "3rzjLaPyW79E4nVqxaLAmvvxHq3BdCiae6NLtyHxiWsVF24LmeP3empRFsDJC2SsYuDP7FqNqKNykk6gXH1bizGR",
  "key15": "4JtZpFdKXaLJTQwm46UjJaDu54d8Ar9omCyx9S7MrKo1s6QQ4LKT9PVnqxT6xfbsN2kmWGcVZrx5zbqZJcUBFqBB",
  "key16": "5rm9XgcjkBRB332zfPybAx8tD27YWzRsYGPsZEsn1ESnaFG9zdkbzeuyeUBUT5mViEbwe2KpC3mPscwmJkrzjnTo",
  "key17": "3UaPjtetej8cjrrffK4txHEpv1upxmM17oqPNAb1QqFa2FvDtnUs49TPhsNzLxPtjcU38qMrApMTC12prSKhwuUC",
  "key18": "4vdY9MWnNcMFUbMBYLvVTRWCipmZqGLbZMUJxaJbTSd9NgE4h2uqEjHQrhcRNSdxgQBLX24b9SaebPJANFXxyi58",
  "key19": "4vBbkHCfmJbMAXzP4ifmojZXPP5tYEnV22Lqd2F6sVBV9aLdX4iAkrd2achX6QSoh4TXvusxqWwnXQbTaULi5uLJ",
  "key20": "2dEpSFEMwnoV2SQbYaPsHpzAXE7juLS7eCXpHGC4Yak1mpfQkXTK8PHg37rDcr2ighbmuL9dnap6aTB6fgRgFh6f",
  "key21": "66o24wgTUPdSx4QARUu6hoyAJ92aB4FpEKr3ApiNA4VWDhocUaeGLms2fanKvff2MSHxR2WvhonaCANFQ4BWoy2r",
  "key22": "3F16So1j3xNKRyhCZ2TFeNYofcuigBQKFNncbNBMWXx3i77iopJeVHSNyTnaCGHgS8VojUtRF9qha6XnFZJTgubg",
  "key23": "5GUsWdNLSHuCda3rtcSVGwLSuw1FCzs34cqrtgcPdV7axVQkctN5ECFiV43VJAszhV7Ps28CT9VLyUXddoTsD3Gn",
  "key24": "4ZCCTuSzuQFC4ibENtCUBhyJifR7uMAWGqgBQzmk8yBiwNkmRxPJKo5MwbZgUaDinzuUcuGt8khwT5BjEUseHpLz",
  "key25": "5wQbZy11Wpt7gji8QighikP6QYxSnopnkhR7DkUrqs6ZEsG3E5PsWcWhnwb1YqbxbnMgygubrLq1NFUcA1Wi3gjn",
  "key26": "2Gh3AWJtNgdPVrqREbQiQBruvQxBNxhXXPeK1pL19jY7sqCKLtcti7CNk3NnGxovoDcwezBChH4SmrWtsYfPLQPJ",
  "key27": "QKMPnJqbkfy7Z2xiMCfKFfF7UAgLS1riUotoaRNrJjD89aSizwsATAAoQNGBSHxaCpcuHLatJQ27pfmRfFDR8hy",
  "key28": "3M3fctGkxYEUs9dahCx6Z8ChRr6zhUz8hKeb84huapuaNDY6XyUwMvkTdN5rq3VFgRQ8RepwWzCzi6sXjBbAWJxU",
  "key29": "32BrUrCvZ9MqWehkULYqgHMYFjwjgrpYiZxD58wWkuapdUBYZrJ2ZuGU2ZMCG2tXfFDCb8eSdifTT57cTEgDGrBL",
  "key30": "4KD3AxhKG1J9Ya1bZQCdDeFgFLi6ggNtAGmU5ruiGBVVspduj8HbE8nfeTyPuyi8Asjc3h2e9M96M2YUdQnUUu1N",
  "key31": "5JWvHVUUs5DipeyqGx4NNjaYN6SgENaEYUzwp9jq27sKA4MGyerUSiVqhNtM9wGbNwauCF3jWFaKg3vp6QZ1Ukop",
  "key32": "26k9p39GFMPw26RmN8wrswbJAf52m4wPSjpHxFQGHhBRFC977QBDFCwynBkPMjDVnJPz3m4EnpaJLRokv9XCYcaJ",
  "key33": "Y1Vc3Mnas9p1newotxaRpVE92n8iY5iQY7ZW2wT4atAkqkn5ekfCVqDXbB6qdRAHSPu2o8UtmRiwS7dfmPXnXku",
  "key34": "c1FhStPaWFpsX6j38YNeghHPKe3w3HwK4fkiGobezQ7qecm9ZDw2KNfnvx1ZUgEhFWwvvY7vuMof2SrBqUjhW8d",
  "key35": "43PzLmU6RjQFBWv2y3n2MVsHzJTcca9tNCE2jeH6LEb3E216hhGpcpZCj4WidfwKgR9EEyYaAnXb95RhPNYUNXf3",
  "key36": "4bp3MRbKLe4AxHRqGYRZomtFPWWzwDSvfd9pjixUZmsekPjVj1sybWuxMr4kH2TDTDYYjiW5ko2QGgCtcRVjXtym",
  "key37": "36AW5ErP94FKBNz4Dhwv4eqFooi7cT9S2Xf8xpX6BTRcuhawbDD4aEnMgJKbVE85BPqJZ4p6ALXrLFcbtY4QPT5V",
  "key38": "9HG8swy6RrZEoUKttLnTvNKETDDbo7jPq3sy5iYPrzNB3H6M3fJsJASS88G3eLJRGmTZzVhegHGB51i1GZrzNmm",
  "key39": "264LVkF8AaPaUgYpowD7MZFP7FHJoWa6ktJw412pbfuaozDUXnjPuFgiyM4MR2n9CreNWhSkbkrju34nbCuXy3Ua",
  "key40": "2z4ff2WDRDqXNf8H2nuegh5Ru2K6B2gGKSbmFhRXAsoJ7aY7Q7dAWZDnNnVjxEkvWfgpLRCiX8NSNSBXCfC7sxE6",
  "key41": "3W61jWDXW9t5BFHgENSiJZyEik2iUc7ci1smt9CatfrtV7BByaLC9F5v3y5K9x8p4kZ5kRYqwrifFdPw6p1Uy833",
  "key42": "2umFoN2iPNaNNh8pWK9pwpmK7WU9D8dcNgExMYQab5tH2zHj64FLhy6Ja3Atwc4ZySC9JgFpnmyoyrK7DSVkNrVX"
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
