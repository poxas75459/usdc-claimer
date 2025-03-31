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
    "WDRo4J3JQ7fQ82sTNWEXPv39z1ZJpHMw29CgT6DL6qrakAcK5NQWdMa2Rqu9xiPmxsPiKQUCfTEBahDZNd5T4v2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ovvcD8Qs6wHHK9pZpGQuFUqkkzCq4c7rBJMajr3YWfxNXdeQrRdFH8S6jNoAq19v22gSns9fkxkiisXE7afQbHW",
  "key1": "3opWzrhxuRXHCX7vuyzQ1QMYydRbKwAAFeq4DhsFdNTryoEDSxAvLEpq1ybPRQG6wgC9pqL8skNg8PPVWB79oiYw",
  "key2": "5PtDRnbCkgGH18FyUiZfYbAj1witMwrp7cxsyD4ySDXrCwJKU2MNzcgjZci94mdv1VJYfrwxWYjdBPR54qd3WyqN",
  "key3": "3hfffMPzVk5jJ3c4cfvYmsMXtEeVWi5QrxgXq3hcoqQEce72FaUmE2UHNgavFWkziykBwvaejhHCZ5HbcWDKAVTS",
  "key4": "4Hx5jSEo2zUvJzq4hTd6ukvTD3Yxn3FMrtNiTL2QLvcCinXvRWDgeRNNSXnsCrcurASiLrhn9HPJPvtwTQXBfDMS",
  "key5": "4rGvDMZbxyYcrcBmuWW5jkGFSXZpdam7aTs14iu7t2N1Ti6xvmpgHqx3LbPPDWd5U1J4DSmeAwJKjdftPZTG8NF2",
  "key6": "4Xb95ygbZA4Tmc11KQjLawZkSA939qSVajmXNBWLbT5yRpBjvfEK9yarcdAwkyyCZzfVay9N81WXGjkQsFnjsmV9",
  "key7": "TSYafmJN8PyHT47maJ64euuf75X2iWxVpSE992DMmLKaQQm3PPSRsBfnc26abnhQVzaXFL74pA9AwC99gEgazV5",
  "key8": "83ipc93RmJFYN7p9XMC5dRXHqQeoe22cMJ4e42Nb5pqHNmaFZ7jwP2SU8vsrdQD1DfkiarXdoX3WijPvzr3ZM68",
  "key9": "2tRYdEBAE4PbJHAQLPURqLEiA9ZY4iYydjniFcLjNehh41knyB5Qjiqkj2RiRgKFSNEkE2mu76345LabNZRF4Y88",
  "key10": "392JPeyfmSmUSpif2FALXV2H88BfVPGhz8G7tdWoqfQB93MHKWATvLXPtKqoztcjL32gamn5WHHiDE6i1V1zECvY",
  "key11": "5bcQ1F4GaHdDhpSFk9tDD11XxY5NZegHeGDzM7bpcuSH5taQFWimRK997s2qnS24cm62rPGsNKZFUcqMEbnQ4fwk",
  "key12": "5jX7aKtVuXLqoCy5FF9Zf2jch8u2MKMeWV33iR3egmbQapRKVj66ZZEJqtwPWXXgXLXW7ZwNszSt6tK5soJq1qxP",
  "key13": "3Q9JXgmSf2gfuTkNs24tSrkEnQyFuyJbCWFGvKZrLGUPgAGLn87TgbaiD5taLLrxrjJ7do5s7DFRf6fZctocPemT",
  "key14": "49NTnyLsjgQj1KpA3afXTCSb8tN4Dv4oMwFzwwPSmExafruoSHsTJSoM4c8XiY5r2Uf62YL6mp5LsEbctHG1edGP",
  "key15": "5MG8r1YfninT7fMscnvhJ7cH3deLHKSoLXRjzaxBSGcNxCKBHHqYuRvmXAnnox4z38XbVDbiwFPV8J15KSxN3uNS",
  "key16": "3vpFRAEDHSJL3GP2Zfa7ak6TvN16Zmyb5WURqkSTogttALuwNkLjXR5TgF5cmrvM6nopZZFZpgbdVa3eUjkx12XT",
  "key17": "29W2Y2GCQ1HwsLUzz2Z1i7kjtHKCpkSkEEQ2wBNwzyekb2DL5yhVLSocM4CbDqBRcH9baHgBNxEc6txu4NXzTVaM",
  "key18": "39RwASxRwAutqNDqaKsCc1HNUX9trGq6Htpo2Nanuo4nVCeD7VmB2WoATpPm7fmXiuMokD2ry1YqUcigBDVcSgfm",
  "key19": "ahhBZcA9T3Hb36HruhkiVMXycuLho2s9BgQKkVRKjXTEM7gojM5eFcuxh4p4yxaxWU4Fu6fhWFbYqGo3CBWYkre",
  "key20": "sweuppe8BcbaPDarryjxkAH14jRmtNs2VyaBYb3EWHmugFS6vudwGtgJ1B9T8QbeksDhCgbwmVPDf9Wr4TY7Gbw",
  "key21": "22yRDCnrT4tYnGE2Pdm1ah7wQhBqng2BtvRMyDbKucMMrxiMPsgRaNREV6B6MFPwWi8MHDotfBaTggdj9WD6icY3",
  "key22": "335dvhiSqXKpQsofV7ia71Asp9nN4bWsPH9EWrKvyiLwo3Ux8CVgen8NtVMvRHU8Rpf1BX32oPcqK1Qb2caDmrPS",
  "key23": "2ybgT5d75tg2jxuCR2Adgfw2jQCngYRCchcdPTqyjxyRxLKj9V8R8AKmBzKJmrRWV4fQ2xfHDr98ANKioGCHZps",
  "key24": "5M9JCPGis7PhJQDRXhRXnNGrjwPyWQayEnjUZnYkkEg8NVGioAcAAz58dqmrNChzrnsxr6yoN2inokaLtLthXu5P",
  "key25": "4fJkDtx4Qj8j7CKmr7Lees7o9TCbq6roRKVRZStpJYmtfKLGbmLpu2aaepRbvxhtmtJ1PpL3AdLvBkvXYb5nS6h9",
  "key26": "4MaR7K3izQkzChtgnsKx6jaZKV78BkFrMn3yWoba5MvSTQCPZRPvpQ8rU2PT8SfjhsMMyLwSDrHPx6JKWUUKLiXR",
  "key27": "5xqLikD5ZjwhuFKPdEdwV51QXCdQmCcQ9uCvTqtSGSXNDNZRNbCSvkUTCbzJH1CatjnjUCxjr4xdZQiJpaZpUPvg",
  "key28": "3625dLiDWWAbYUYjsMXXEx5NsDayqYjucmnCscG8CJ1ZutZawpi4mCapre1r6u1mj1KnxfzUsAfetW2g6CphFPHS",
  "key29": "3WMUt5AH8d6breV7S3BUFX8PdEpuDKGXSKeB3ncsoT6NQygwMHa1TFDXnz9Ab8M5JB34tbhgYA4QEWRX6XvUGkpJ",
  "key30": "35xbfnMrhZUAtUuje8fJ7U9ahVGWNf1HDLH2eh45szvBDzwMkEc2viYKCnih4pk2A31oAPJvAMXpFFqPR4SZdXyC",
  "key31": "352HDFpe9HRdro3yZKTDAVpyaLKFX6deYodW33HJbSaHtpSxd39P33G7T4yfEqotZugVdSMrWz4tPFYgCngT8Ycb",
  "key32": "5KeVwMLyQLADpkHbBxymB2yoQZHysmkYWUXD6Uh2GX1YF3tGryDz9PgkF4UF9WQScNxMkpCNoS2UwvqbFWquuoXz",
  "key33": "4Qah6wz4VZpftKeszM3ruBJh3SnCi16yvmBkLgdDEUN7A54SbzzKYHf7LukTeJxcRaaEK27wJTbLaHuce1Eu8sjH",
  "key34": "2EUm9g8hDUeDRFTFzmSQbwMLw6Tbuuir2yZVVZQRxds2zAsbnawdcTvwHTBAX1Wa4weHBCXGsvMyjHGSaT9hWL4r",
  "key35": "3MYjAAWGu9Km1aNeTP8DAN4hJRbU51aoCaa9aQ8L6q2Fa2zbETfELaySNXo2AVPFL3B37S4opc9FCNViNNhN9sAP",
  "key36": "xnS8phpBYrNP6KKwxvqk9aY6WAv36gG4Ur8QStcJ2BRUdaHe1TshGG5UtM3jtAjtAHfr3okotR1yZXFpExvtBVT",
  "key37": "4bhEmiYNxSSmPLGGvSWi1KfuU6J8t41zxs6wdMjmhTLixmRVdfeRQzWCVqLVNLdpkPniYk7vmKuSveMzXYBJhYfg",
  "key38": "62D7xgvbVAQiTHm2b6vgxxbK84CbpttB1mq1Kzx2UnGeadFnc5Whdtt2tvJ6Rsethyu2VLyWE1SAEo6qoPkUsJDc"
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
