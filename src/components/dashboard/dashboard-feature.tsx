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
    "2Q8MD8q2eEfgeXZzuZ3LrnYCQEVS4KFMvBgmsThgtrPZDFsPEkAuCinPSYJoE56tgf6N3UzscEHSJLtjjzbPYCU9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57NkqWrFwBSJYXiqEk3QJAmYxZJBwiVVrEqyaVCXS85n6KvMB1WNMGLYB7iHaAkBLUwt5fALvSzqVrrRh1bNKRYQ",
  "key1": "hqG27T9A9TtpNmEHHYtKx33Af9ULdPAmcpPHCMe8hXcutm12re2Fv4UapYPGS9oiWe3QNJNpV39RdkkTbUcLram",
  "key2": "5zqYnBBF1V74SWCYFdN2fu4Vzbpf8hc9dqsJs3LFsihfox6qtTLghvdjno3fNitD2oKaMz4Yi56E8uhqS7fUDUgn",
  "key3": "29Qzq7pBzvob1zFaVsUB7hXYKh3GLKtKFW71euUQrktfqpPL2Lgc3uHM2E7ZTv9hfTGmAcirybEyMeZZJRERKmnV",
  "key4": "PqutjMpmDkJxP7DxJ7s7BppvtypPnGhFZnDCLhhqiXn1eo8fHJojMJW4accjZGG5HsqFYdbgE9Ye6izzcqBnq7d",
  "key5": "361dbisfWeoPQaqdWiCfWxGFxjLqt5T5u5qLX9YMBLtBcDkDpBnJFaQC9CsA5aBsRv5PB3sg2q1pi5zhJoyh6da6",
  "key6": "61XTo5Xo8JWmovESVZSZS5sdfYXrCU6gkShuTWtq8kBN5LmV5fS3Cz7r7LnXooFRDM7RnwaL71asvwP9DhnG9xHW",
  "key7": "57AbQFTzb7jFAmRWceCUXqS3GYFyoYsDHncK9yBci6dapBybHgU819q2xRQSUHG5nz8kbpBA8tTb9MiGSfwQbXsM",
  "key8": "5TF7NqVvfG2AMaq6rucPi7ebmgEbWvWHk3PDfkMjyb3HKQsNFujSsHKwJ1Xyn1r8irHyfjWeRbB5zCyS3hVVjCb7",
  "key9": "5RJeo9akfboC5aeFjiSSMhMAFbSBj85FMSt93oaoKMfifWZNbhgVWVAjZVfTAjYqt357x35F39MxqdJu37ptmoWH",
  "key10": "57Fn5mCr75KBzQEVtKzz2mWtFd99mmewrUMccwcHzBuN1nUbZKYWnwPWFvTUMNWcd2BYuwmgQi8MU6YTscqciJQK",
  "key11": "3tMsj2eiHgEJBQA8reBXeJ7JDrs7TLGr1KF4yJNSUQvWKamwJNfCeF2ezxtpgo9ck1sBrWVijeos6Sz98BFo8CDC",
  "key12": "12GRZXDEuT64U2G8xMiK8kZCZwS19co38YWiespToPmXNjUgTMokPpoEjtwaTKQoFSivKp2bKLmYmHxq3fe8JDk",
  "key13": "4qtbvcC5tNW1RYPxDT6pJdPmV29iDwptHNiM1sYzCskTiYdSHpZriYsnzx8nLNYmDbCKT9Ud7Eb4xszpnKGd8ESM",
  "key14": "1nQkLnNnFCFKz7QZMksBqXD9iB6zdGNQjCAk9aw8bVt3W9MeBA8r8eDFFdhLaNHbH6mMoPk1QSeEofDAFsrwXKX",
  "key15": "1vqFQNegvr8QwEbfVwk8vvvL1S8xCYXWh8Ugg4GuKD3FR8Eom5ZgZcTvNmAhazUrSNhWLXZyuqX1eAbps4A8p7Y",
  "key16": "5mNxjo3LaVG6LwG44p3eMKhjrPpUy1MozPY6zBLt3zFA72eb3zBfQoeE33wL3pThFbkpkdQd7jadKxafv9b52vpY",
  "key17": "2phKjHm1toM8ApdXeB862bud1rKfkge3Zmo61QEecKNxnQUQuoSZjQzDfy5wkLTazSDYt42CB7VMCWTsC684a6Eq",
  "key18": "3mhxFDeJjoP4jQeoDu9iGi1JP2i23AVJEMjiQwSg9FDJqPbd4j3D3FPCU824kTe4u63UbXGfrgPRRup3JX2Yb44m",
  "key19": "oKJaEdQ696RQAUMASAzpX1uexTph9DjiFmeWwKuHQBpnnib2NdkdiroWyeJzYQoZNcMo84tkbYTjQhDAtbawwH3",
  "key20": "2o3PycXYcerQbZCsLsSrbHZcnMSnQxNPzghMi3Z15BSRC6mn9qsjgwARdMVP2tHnqSEVmExAYKL1ohafPcZd9XcT",
  "key21": "4mMGf6Tdx5dX9F1fQKiqmyqayUt1c8S7VGDzAfFxvbUYAj7HmyQWtLAd52eZezNJKcw4pEC51cSgjsgEVhdmjzQa",
  "key22": "Ttmm7TksgUaaJjqXE7z2WxCCynYPEJBv2n8p8HbQPQuYiTrkUXRvoKewbkyneMcP27bHLSLr7PWcJCfXiSVLeth",
  "key23": "2vEZgSgJTKiSCiFLQcxGC1exjrZo1mexS4kXwA6jrR1CCYijdbA9SgXA9GyqA8Duu2AmbLcXfiMChxoGmewTS3WV",
  "key24": "5HTWqfogXMdPNxHfiiLn5cN6cQLuPnCbrbWZNoEQvryToVedUjQPXYr9ZLXsUbu6LwpbfFHJqpHzU46pWUfsV7GE",
  "key25": "5A9kjEARkWW9ZPo8c23qSopAEos6m3zz2NCg8z1L9dVzBp391Bu58BW4TGgQhFNa49fovqHyzMptAoXZaFJqUsFs",
  "key26": "JFwaKYsXtTxeyDJc5AdQj3szga3BE3Xr1jqfHSNZXtTK2PLLnfd86ZcFfZrxyp1CdJ8VWJMUo4RNmYo5kmwyRLS",
  "key27": "2WkfF5tpP6kyd1Gk9ziAiVhJHrGoHtkBa5CKgByMjNdt2MCVHCeJMP1iSBRCyUP9qqzhouGeARVc1vtCVSts59zZ",
  "key28": "jyWdohWoNubLqvb3NeiXNwXq5LazABnkJEXeFfaX7wvZ9PB6D8Uk6912gLBhQ5hnTHLojiTanJnnLr8fMEThqUU",
  "key29": "RWRLtC21uFSWXFv67xK1gyMswhWePieXfWWgv8MC9tsL9MBHertCVUq4p4wQDpDWhkaTGRyC6V19tzndRFwThDe",
  "key30": "2mtH4FtvM1KaAQjT3RssZyHVYLp2JxwiyYEnJf6LDtUDEdazK12kA2ioSKKKjNSSitbEAn7g4EuiuCY1LcqW2qSp",
  "key31": "44Hr3oeyxWmxv3bLCt32vQyRTT31XjHL8fYKbfPv35oWh2wwQsraUK6cipWq8TEwefBQZEzGoRdNpK9Wcm1uZgEQ",
  "key32": "2NQEYfsgsMvK61R3hYVvDTiGxNwPtDNfJ1c3MJpdrtL8TRzk4esJqDNtny2PQ6B1FkfbmJkgKeB3nXDMwNiHTTLv",
  "key33": "2w2jziH9TWsusv5LJ3LvbdSoJKnhK7yPixfemqgik3ZV6NGcFuNg4FuvapPHKRqFdNUMvXByn8hDWxpQEsWiqoWw",
  "key34": "3Hbi19x357CuPCDT2paMErELPmao4Mh9fFvrwxQ4VpNSfmeiuRZWCoiSr44pjY5xt4eScY1FzTJQZAdcDqHPtiq6",
  "key35": "4rgmMD9wB3fWTVdWcwhSgUTHodJPoqxiBBADuetVDjkNTNrNqmtJtcoaNqGz6TuV7wJKvSVviePTZz6JDydNsqpR",
  "key36": "3EHtCrCDZ23NDtYxE1u3suT25HhtAyDebZddvshDDiVbWUnqzSg71eogAnRy6JUcgPPQT9bsWHH6ivDWjbEj5ZwT",
  "key37": "4g8QAuAFSo7pEi7NuSTWb4NcELgXq1ETYc9VbpAvmcR3YctpWDTU1bcbeUf1fNGDzjth6JWY2ZB9ns78dkft5Yhy",
  "key38": "CQJ5R3pvEqNeS7wtre4FppVPWtw3J4jUgSYpEwSie4qBenVnAyaUuqVFsztApYJ5MAsaHha2zZ6PoHn1vhx3Wzg",
  "key39": "2cNoDh5qKiCkVsPXGFsUZrVvfUtWZhLiEwiaA2vYdC7AxNdJMJegzWwuZMa5mgGNkSRzR2uozhgqMooSV18TrcMs",
  "key40": "qtzuWchWvQdqidE5UWhS8JSMs9bUUKhXEqrneydiHnTYS3jg6Q8i2285oxU5j5X4dyvSRJweCSbySpZkgfcU13N"
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
