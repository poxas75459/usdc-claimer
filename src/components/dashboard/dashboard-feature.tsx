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
    "4UKubY5N6FpUArNGhEuYQ7V84mZ7N449mL978zVoDoPJEJpeaQyyuTBJzP9ochLDbJgtjAXhTPdqDzk1hANtwn6R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61PBMKLEzbMwbet72VLcC9JPKgnf1yVMdatr4KvRXPgnPMasARKTqTTRTUpCZPn9wSdoQ9sDU49AhJ5QbagoGApk",
  "key1": "yhnmtyyj6Xbgw1VnJ6bnCEzL4Zq1yxSndEko6haLjET4tjQoD8FHg1LeaGegu8pTKQb6MtSZtvhy4coqJkQEVVx",
  "key2": "3YqVcvBPVac63xT1WBAqoPANdBG874uzteX6sNfR2MXQo5cj1zJPj1TkddYvF2X7iYAoLjAxtrVbVHfMoR5Vsdt6",
  "key3": "2GJpx68E6EbjWUCA4hKEH3SAkoXkz6wUzzya1MFig9pffscZxKBuWdhjjwbTBQRNt8BBF28StoYS5rGKGUJmehzr",
  "key4": "4ep15rFXA6y4u3mBcpo2gXMRwyDP9JJ3pqjVi7pY1iLRh56QHL57tHPaMQAypAi1aQXvtSdYq7P6QSCPTJ64Uo4N",
  "key5": "BYB7V5YZrSi5j3TvEvqjb2r4CLaZc78ukfPGxw4EogvLAzMjWRqa3m6Yx61Xb6C8Pqazop2iJfpLrXXbr91UP5r",
  "key6": "27KUdEv1KNJotS9FNJfd9cdBvRF8H2PZ1SbNmFaHTRNKhifyoh4VZcVZ9jLkrA3KYwXutwvUY99JjGvXzo7AzE9k",
  "key7": "5XnujU5KvRecAQENBfFcfEpxj8SCUKzSWM2P9eXLf4LPGR6obmETqrUJevQEbso4e5txyh9uBtsWujyDY32giNo7",
  "key8": "3o5CyXowozyKCMLyHLCcoZW9RwVdDrKPr5WFVwGb4senARKnRc47ABEQ6z6pDfGjksVyeVfRTrh4TyjbWp5SFghk",
  "key9": "5837NdTYTCpi2qB7wH39WtFf4StFjHp45dBqc9v88Pn2jTDt4ECZdDoqqh2UARomTb76eDKFtW4NZdy4WgT8yRH6",
  "key10": "3a6HHEZbMDQjvBJDGTh1tcoAEB1WKyEekzDvYG66ynWDTReMgJHK4Mvg38VDzNqgc5doMcsJsbdnSm9MFsQgaWJe",
  "key11": "AKbN3Boez4JPVbFrxfZevyK884xHW6Hau4nXL9TKvoSUsaDmioHd9VpHRxHqHVJZ4Q5Jsxb3CQPygRhm2gmeSsJ",
  "key12": "2zUJfSjkdU6E1843otzXCmG1WAk2PNEj45CqAzS3ctVzxY5JqMTF7SLBiVEpKwjTipGs4ooagYNtTDv8X2aGhvCJ",
  "key13": "625xdbHR6nDrsGGoqrdjpKb2Fcy7XBmP2Abkz4MMTHa5NRXWgxzD9D2hVgN4tEqooptGQzUCNikvWXW242JYbSP8",
  "key14": "4ot7ScaZzt1xqoupKepNJKhiXP7rMrwkiQXSAadE64iYLnJCA1GLgTegDukVLWegKrC91mw3VGJMT5avPAhdCwfE",
  "key15": "5yhHD2zB7K4tYkCoiAsrTcpJs5gLoH2Z2QtofB3ePsC1sa8zmth4AHJ6TG1tqtmiv1AtyevYPw4sbg87o5AnMNVK",
  "key16": "TYH2dxYYFJgvv44VSbDTnoJ72v56j822KPXyNaa9LcX1LTyR4tVYmVEVk95hLqzjDrKXrCeFXEEAd35GTEz1gEo",
  "key17": "3DhcDkiT3ohk9F1t6Q9YVtFhwTVdLqtaytTHWiZTvv7w4hJCXnHNj9q7hsoxiJ5UCvVpAEsx2K1Lk8Fbdz3k6CK6",
  "key18": "56vX2PC4KoxhNSQvAay4e7gdoEG4Xwp1Np1LtgC9EG6Ksc6tqWvQbHir6SrCzUmhRhZh2CdaM8wS5QrtEmMBpHaH",
  "key19": "S8w1KKvWZEuXens9GWRzutwWjoiPTMft1neAe4MXrsNq29ayHteHAEHunc1JWUPGCR3x7F4xveSk7QWN9bKLN7w",
  "key20": "39tDWpJK2iqXoyK9ycMzgBN9zmtFnhJtCSAXiNut8YMoqo4e1MeuWAyw5PApo9dfNnq6UqrYJE2mHDf7Fg6SfGrK",
  "key21": "HXxy5kzxARvQ4XrKkhXdvs3XMtD1r7MYtBqVbnn3eztcfmVExHVMGFbxrVLtfZqrLWa45P6msRoyunAhitTMpnL",
  "key22": "3DSh5LKHSAMHj1UBhWpaMSc2qTz8AD4wntodQMohDWRvCiWJjqVBsHrPGDdSRj5fQhA16nUyQsbG7Kn17JFhaEQh",
  "key23": "4tNCDufhN5BZGJtz58NVwR4RLY6yLwfN3qt9fVwZoQ3UCU8aEUubZzoZjWVND2yhZHjhFzuHLj7fWtXMbBVFd5SE",
  "key24": "g3bcVP9h5VKYXNNDaVJVwwPsyEHrWEre465RYULEueYBWLfgzu4Ygan8AfqKon27jRZjY42pJEghWNTtvteVQbc",
  "key25": "4pzBmpxxeU5nHLsiv3YXmZPXibYwPzzkJTciX95EsobwJm4mRVHGPx4D1WmcDbHjyRBynpp4YhhVQCwfQmZEZB84",
  "key26": "4iYeGbFBXVwiFt2gjYTJ2p8EUGawxrPYws53rVBaFUFexoCDDFWfXE62MjTaL27fCeHuHAzyAH5D92xoxkDRmm5D",
  "key27": "38AaxEyLnSedNDcyA9nMqY6e8hd5qQn3GzdZradgvKbwbvSB5kjx4dn7K6nU1jbyUG7tKJb42sFf33UaFshoVRaA",
  "key28": "5YJrCgVFCB1dSCZqQw6jeX95gdPDgGLArFdFWZNXawcP5vvKgewtRkebj6DnJFmAMc6MuKwnEoPHZRkQwDs5pu1d",
  "key29": "DqiXr2ne799gnPtjv6XTqaYuSr7nvYmPRtGo9CvzAnucE7KShd5g7TdTvTFCk6qXNSWajbiTuGhhcQqkGCGXeoe",
  "key30": "2K2BEPAh3MzqCdXiuTEW58zbM18YCXx1umu2x9szdopYgu5XpAUrqv1ttTeMAQoA5vRJ4WebScHbqGw6bnAaqcuf",
  "key31": "3kfVFyYrAgGcPsmAijMR8Q7Hee8YhC9uu5wuM5ntXZzhyRQWwDy8bD8YhhBswknEirgPwSKKbAfooEQzUdDTxW4n",
  "key32": "2Lw8WX9nV7b8WdihBP1FRfxuiHKZVA2tBXWkJh7dhmnt24WT2qPYa4qckwQbKTFhvKCLVEYEK7TfE3bjPkdF2DBM",
  "key33": "554L39dywrzMB1fj9yqPNGptU7MGBHWyvsqRYtCHZw3koa28g5joxcwoKFnhevLrAXDw2h5UXJcXY7zbfJyE6BzQ",
  "key34": "3M6aswjsn9MQWWFEUE8vKq792YSWoqkyZ4c96zTSc4D52DypBzCtZNDWtssQthPw2EyCJjU7pcrQdAvnnAsn1C3Q",
  "key35": "54pkYiyttXmjE5UNxECDUf5dbzdfXQojsmpDNU7NFiF4gxVHYCgwxZaG9G7uTss4UWwYsanzUpc5PmRaPo1dBcie",
  "key36": "42pHc5pMYgkQp2yX97yzauEhsQW3ehJDA3sypG2fuK4jB2i7WpAH1Ha2V1WVYR4tpXEDZ7juJSxoZ5bq9EWddfYR",
  "key37": "qetAWNRH7Se7xZVWvKW2sCaz14coJ7KS9jUy15CK7KDJ8GecwZNi5otBE6hmZy94umhvxJ6niKn4FaCHLdNKGWL",
  "key38": "497aFeQPtsacTNcdt2nr2hvB7Sf9dLV4UUvfBH2YwbWtnhM9iQ8HKiWpwo75hpRPgCoEUHr11GtZDL2KWy5kzhCG",
  "key39": "2LguvUbgBXe9kUP1kRydRSL6p1h7USp1xSLBTqXDexRrh62z1HLZRm3YyZanQUdAgFPnVyknQXJFczmFGKh2LyVb",
  "key40": "5gGj9Y5AMY5y7ZSHwfSds1kqT73qc9B1EZSHPNgFG7f5xGSrSmQ37sFphGprGpukBp6hjpSMwNGePJK89oLGQ53b",
  "key41": "5jnStMq8LD9SPwgFuFeBUiZAEs1tAdb5T6QyXcqS89odGf3KEpYdnEsiHYS4ffk8ariJ2tV9Ah4jub13LU8hu98p",
  "key42": "2jRRXNm92HEQbXBHMrKYZiNWLVaJaaMLZvYN56gJjsye74CkKvvjvE9WSEnHH9PDGCHCRKNPfMVrF9QefQsEMp7Y",
  "key43": "2sHrxbhKWADPxLRgvcMJv8TuHundq7GbCRQh3E3uSPefzcYy7Pvd3SVUG2Hs89BquamK7iSwewoxS8qgEYdwnKBK",
  "key44": "3LVPDXWbW9CnUAckt4djyJMygbeUbsxFH7Dy93KskTQgr11DqSbBFGDG581zDzzFXDGo8HGXWgGBqXFGUni1uGuE",
  "key45": "cCaZuMudVwwpG3fUhKjPoFF4uSsZA74cwZpcCH6rCHQkqYsX2sFwPhodBrCg4L2raDg17d3B1sFbSPASxZaGuBc",
  "key46": "6SroUur1Y3abNiPoC5xDLVisipyB65qGD2rKiic9PTeZrb7ybWRp6aGnebJxmanMa9UDW4e7P1hcNxrWB7DFmwm"
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
