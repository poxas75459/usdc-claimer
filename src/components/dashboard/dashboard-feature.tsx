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
    "T7qapaNe1p6jzodUg43MFq36rnNa8F3dKNzKmQZejuh6CyeUo9hPa6VSMNa3v3u5o2u7vN3WYekMbiyZELPRT12"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42XDncnxfQhum4QttYMG3SnpvdA8okF8E1vHxsvDsAMoRUa7UK4LChMhmAxxniD7puPfiVLvhixa7nXEC3NSgTy9",
  "key1": "2k3n37TyRW2R5P6SQS65wHWz1jsBQii54oML1m9r4c7pdW96DdxFwPuvRovnZx7ZTKaXRMv9YDp4Lpf2WPYEoFja",
  "key2": "33L1HqSPYWYVRTh7EczJTVKAK33upMMY8c7K7zVXr2cm15HTv1FcxaiJKx2woP7H873eySgAmEVLCBAYLPUKjSgD",
  "key3": "5DB7RhfpPRHTDoq6F21iXtJXqTiuySux13QfCx3XvbMQZzzgfRvNUKXvVa9VXZqB7WFiE51npWsoRutaDddeiViK",
  "key4": "3hgey1gtJQ1LbhiC1t2BLM7Jr6cgNiDaeJ4tfTmwEu7fi6mAjf4ifvYPLv3jrWssnBDK5q3pwpn3EymCfu49Hwdi",
  "key5": "39uaG3DeJM1yE9aYh5cZ6UQvK8eeVpeDCwRYDEaDhQZrioV8xwnPTHiyAWzGB5myocEsTeNFtFK7W9UBW3cMudNk",
  "key6": "5CruDNdAJVv6EdFyCbnFN9hu813HinPdo8oaCErp2DZUAG1ikDSuEjpX1VRZG6SY9LPTxR6nfSQ6ey548Nnt9Ls1",
  "key7": "3wYn3qdMrQ5mQAhwcAzdLRJqatR7UqkX21hVpEfpduFRBb98LNLaLnyxSaCXbmto4TBXkDkYcJhkUqDL4qdHS5k7",
  "key8": "35oMVatUZHm8KtE85LLMayVZYYQECXfdaK6Hb8jSfJg3UMfTWtDpPMDEUy8RzbhWh2e33KCq6DgxKGgybRSGXaDd",
  "key9": "48QH3RS5u2uUBhBAgVJYGPoGoiVrUMCh5nMTAT4USQzUQBpQuDWK3Y3YneiREvSfydJGhfM29FZdwcMndR2qFjM6",
  "key10": "2Y5K3fGgTyCWnx63V42ez1LmS95ayy9XZE1Tpdw17cm5HNoszFFT4n3Sr3wfCB4z4KK9B2LA5sHUaeTcZdcmuVt2",
  "key11": "58PtijNVpPLLVgrzWrukd8enMw16eRZbpxNExPHfv8WmHtpGZDtBGgKCgpeHmvjzsTZXK13u935hxGX5jxGBQqnB",
  "key12": "2sZgbXLXkitkheAfSRobAijdL6YqKj9S5rvhouVCxrpcFqZiQX3PxECXWU6n5HhWyHRUFDLSGoFmkMvoYeSUQ4Xz",
  "key13": "2jrm8YX3tW8SBUPmf7bpM3JyePXZUm5kB56kg7rEUW5yU2rkfjJqHXMPBKAAvjHuYdf71iFJCby57PPMmv6TLeEG",
  "key14": "3rLGmDtPYLbyCpLhEWTgkwJbK8EkgjT1d7TvSn95S2zNNTCMr2KQCBDa89dYoxAiPcMzec7bkDpkbArfbngARSg",
  "key15": "4gnL25LRZyhpH4xUNsYMrS8NxumwB38NhfpgrnYmw6unKjFEVbHUhpnGEqqCoPQXqrGst2FmVFo1mrBhP7iBkrv9",
  "key16": "h7wa2zbv5L2H5nwUgz3k2sLL4zXY5VuZmZFfTbkoWT6wexpUMqU6hJWXvt6jEr1tm4qGqUe2B6igL3atnCyZUPT",
  "key17": "2xvVncGw3pytCaa86ryYs4412a8GPgaYRGYC9DAdSrUZEdvwUZbs9NiBpKs1VWkTpNwTorxEHQqqtd3ZU5FwTbut",
  "key18": "pw3tm3F82bKivYukyg2nGWAYoC8ngkAzDjaQ5uYWNHnBDy1ZsDahUXehrT4Mf92WY5VwLYWaYMY9ecx5zJyES33",
  "key19": "xKdVtuJtQVWUKNCfy4XxpwjqmtqqjA2LcC7dF2u72GKV4VDgwdgeBiuhTXboB6AzBQQfaBfzK4Q4xkMr7zJhjab",
  "key20": "3Gsi3ZYJt5juJci8zFdHM4SqU6w7n12y1jFxRisqeiuDbnUXAasP4hMQ6a558hfhNcqGdCFypjKWrr5hxZwpQKfL",
  "key21": "2xnZVK71qEYL6icRSziPePBcPF5iGHuoqsHDuX6rp8sNcYNK1nZYsxMFmSkjQtpykdMJiAJTvJa1hfjFsSJ8KAMh",
  "key22": "3dysWxLLLsJzE1PKxkAeEivyQjPnvqzj5LaUJWod7u6CCwRgqVPfwKBskDwhmUo7mrkfj865B1Hj4ciThX5hhmbs",
  "key23": "jqyZrAzuakeMiw3zrY9mgepdPQjEtZ4desYhXo7wVcFwya4wYb1B5BMUujDwxTBPL85yJr1Ub4rjypKp2GG1GcY",
  "key24": "2u2QSsNvXgzPhVJd3E6B8Dr7WH5sA5o6JHgtNA2ScxZ3bguxcXGhEYwXuzffa5TbsrTaU1r3wqaicwgHdbyVcZjV",
  "key25": "y6bygdCAGTNHsxrhg2bjYVJgPccnmq6xs52LxWwRpHwqoimRv5JAzKwVUhionc3yp2DrrrDcpvAtyLAH9gXSxcg",
  "key26": "YsEvefG6tnqwY4ofi1w4TTqSUs7zh4mE9TeXGb66LL4881aLFBZU1BgVtiDtn2BpfX67tTnHPmWtbUvAsHR1ZMa",
  "key27": "2kQ9D3nJwdf5DmtC3ETtKTpFfokcDdVjnit9u35Lb8cVFqhienw4yJk5euGRoaQw2wStmk95yivJzhLUKBaNdkpK",
  "key28": "3S5naMQzFqPh6zkLkvQtdc7WVhz7i234D1iLEMAzRsz3RatuezrAPzi6uguKRi7Tk9fbKgeboiupthp6bLp15ct7",
  "key29": "2erDgMqijY9BNP2oT5WfAP74PTmU7KqyqT7zCDA6KtudcpVji4eVV1UVZfMfcSLYG2wSV4vBEonDor4SZrTM6FZb",
  "key30": "3TEzYaG6g7vcXkGXzGn6jvyc5zTspafem3fsqSDBSdt6hbGpdGdxV2oejAasPViDjuh1h4mtbxzrCs6Gc5YYARVZ",
  "key31": "4MhyZfs6BYZut4mRBvZEh9fZcHcG9J9noZRtYDc2WtfV3xNNUFF8XPYG2fLvfH9d5oDs5kHubKRwPcMEXEs5rNrG",
  "key32": "2i76djKeBdFx24iC6DFCccpDMJjwS9KCsJfNbQo4L9gtMTXbKA3yqTyD434wyrgx1QakQUfQRwDdgaccnhPQPZQ8",
  "key33": "5gUd4aa2LjgbRx66J1RdXAd7ZJzdcKzxSLrtrUEASRJZcBVSHBLrTLeQecA7iQYpusq7BnzGAtq46CyDdcd2XaES",
  "key34": "xHbCw872wBcXhmUs87nYRc1um4VY2iSCn1PVKUyXFJe9HmdznDWbVPUrABmCpCrsYEgbQ8adj8sWeL9MoPPqMkH",
  "key35": "3bkWU6geRB11iKV4Wa2A1RZextMcTuXZMWdmW8oEKsX9HPA7eiGnEAFgb49nGMupaZh1cYbPjUEo3nX8z9JUZZN",
  "key36": "3qnHrqih8vNpQeBDAwYzAHdpRfemczYCk5fu31mxToKs3LZEaxWYjWG2SminbZbSsXAvMLMeZCESmKNbDYNcCoNk",
  "key37": "5mnRF6icbXhFu7nopfg9T4SNdcUyrj5kzbvMopAnsGYg2eYCfZ8DzRinLwap5J58VaqczXBQewVXDA8sPJwqt7Z",
  "key38": "3YWACqvRikX4qqTd79XXesMuJpUn1j1oiQPZgWmuFVGNsrPvUpqh6WcPKJTULdqaCCDuxeN7cdbuqhAT4gCyrxq2",
  "key39": "5GxA5oieE1GSvjNtr8okTHM8foBKU8XcUpmW9YexwCKpRwKwWS1m656wdeTRJ8XQFWPkpSoVZz3PhTpMb8X1VJn9",
  "key40": "mVoZ6Mikpqhg3K4EocGCaDi1qNWjWeSKDymZ1VqSmRGcdAA3W4hFEtY7dganBR1HcjCEkzfgjkmpMSqZfBvTLhs",
  "key41": "3n9UHFMascGd3YQjPUMpky5J1R7TZenZ4TjkFuf1KoHLtkCbAqDwH4xSYkUHpnExN2M8xtSpYfBWCUqao1qWCDbU"
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
