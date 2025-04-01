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
    "5Koi3QG7kVANGKJ5atuPAzmFaLbUtUmTVhgpVnkhDvFdkwaESDqG1aVkGbQMUkdo4gvMkqZeV2j6XE64UUdkAuB4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ASJS964hqcpiKP2p7GDEV6iFRo6zo6ovgz6cBPwyPCBMyjjzMTgckA9aN8HDgyYSh8d4bi47ZvJ4BbM9FMLXCt4",
  "key1": "5ZWbkV8vQsb47MKqsxoXCojgjie54evgjpVvRgukBJiXNSneUNEGdAq7bgWZUDj6iVwWzneuvbcGfZT4TGDbUiTQ",
  "key2": "3EzQnjNMiVytA5Qb8w3vmekUDt1XrPbJd3MExdB4vHCLhUwwe1tZ4pDfbAhBos9DdAB1ncSDNWDPMTZDhhhuNaZ2",
  "key3": "2Joijup1t6ogLmShTHQzKvWaT5rBMYw7HkkYWbRoKXDKpGMXo3JxJdUsSrM5y974S9YpDvyvTaQB7Mr94dBjSLqz",
  "key4": "4Aq8S8vh7FqayVXSNcgDim9hCxAhnRAQGaQLPC7FxwMenwdDdjoqorSYfLuCERVTht5yu3VZYZv4mNPVzsH91ar3",
  "key5": "65eQjwAQHq37HNxKHkarDwrPUN5T1fDV4tYPyQ4CVZ3s9aVHdgsF94pRg2FiwDhH5brMFTpamsbAZThmiySQLbtD",
  "key6": "47xnTFcdrHu3PBMxks77mxzm2xaiVy3eYB3qbeiuKMUcbTLCrMXvtiPB17vrYYshx4LFsxfN3tTfT7fZSDz1c289",
  "key7": "3s8F7jKHPcKuAiLjceYu6FLmc2vfAVxZKqzxM3BrFnooczu3DMK88jDAT5GwBkRheZTisHHisk7k93D1tMG43bdH",
  "key8": "gCpwe1SSTsCicvkvrvbLcLpHPNggZWsFAgh61NgzutUKbxxLA49QuPLkr43hHZeDkqsayVERejNor6aj36oTqsY",
  "key9": "4E522GpAq53RGxbCp6VD5MyY8wPs7j3Nv1TjTrvpLCq1iweCiSZfqvk79nwUBaaXLpGaGmLcZeScve96Ufhjyixd",
  "key10": "2twYKk4hPwHhG399yMc5Lvqjo9NKCsfcmjpN3kda6iL64SasZ5vzkkDEG1BD1hHRAQoV8YQtwdK6VXZfRaFfhj8v",
  "key11": "42iYNf7YoU2uKEUi3ektivEFpTWjJc3qCoVETZGdBPDUcHKmeMyDzWezxDhdQqQX7ujH8gS5yZ6sjpfJqgZPf8Ui",
  "key12": "4iiEh6YDmxL5nM8KPf9YRNAm4c7uQbk286NBUA84zYBw8NM1N5Pqi19ULMLT5j9UspdE1DzfZGEunPjykAGsdVew",
  "key13": "33W9bVpDJZj4rGevUvTZLvcK7XWBGHYhn4pfX2aCcitD1BpjbX2tM5Zq4pi2EEZk4mhHFg3xcGC3mj2xFrEiHqX9",
  "key14": "3jkj8ynEsdyw8FirDneBxzcfpsiWnj8kv7HLBVoHgsDTvadQP8tRkv19Zq6Y9LQpNiVdzokLL8Q9RMix4EgtYgVb",
  "key15": "21gUubSsCEuX5ZWvredm6L9g7wrq3chEhoiySdRtxZCNx3PxZ6HPjReA6LCLxahRt3bP2rDVhhfAY6hediYfFcUn",
  "key16": "3zVTUo4sqjurmAYk29FjXZXdcRXemjKTqaedE21peoeThL61aRdqiwaUdzqxCjGvrzqYimbSh6GvU9ucU6p7HAnL",
  "key17": "16jkAr3p9PA1WWECf3se3ue28s2q4WFkRa7wuxQWvpiubvkquCBD7dUJSfmX6WpAuw6aUErQZXusA1kfWB44g9f",
  "key18": "3Pztbsp3faiJ92nFz742rHJn4JfLqq9yhdNroJLvM698Pkfxkj6Syu4aCzQwJGipe9W8h7TeVQD5NCTwN61Qykny",
  "key19": "Ag4iraw77x3NFV7WZYUMv2GgBNJou4ZqVikZy5h6aBY5pvrzfpgLWXbA2SJpM4dYntwNpUy1S4eh6rwBNud6pjF",
  "key20": "2LcoETvzCySbW9uK9gsVCyZ1DGSPUg7xmnX6NTzvHRp1qQ8oudz61ziHuZL2KypM1jqbvLyBJvqchKH3g96EGcUo",
  "key21": "2tCgWFrr4RVNzf3ZhSyR9nR4jqbLJLhF7K2ZVczMBoNoZMFYeEZbVATZaiyKENpn52WGPXzoBFSb7JecTwd4CQBQ",
  "key22": "3z9XYvXMGNJ5xcAnM2jqFHN6u3P7xMARm5hwudgQ5wBSK8efRNJyRigUcgmoJbm2ukuHwar3TGCqZVfQEpc2St9U",
  "key23": "3XBY5vbQWFGV1Kpa5JhPhkKHwm3oKaaz8Pm2ZFC5AHoXJAJvycHawwpkSKivR6dQAF6fAXvJTKGNd5vhvmy6geaw",
  "key24": "RMCGxQvSjzMgKDCNAT5c3HTzL5LQxPqEdWGbNVPhKGkBpxqzG3i8u8PB7eNDVVw1hpfnrWHFhwkQYFi5WwgyxGV",
  "key25": "65TAEF7SkkYmsosHDqMnKE2GEYxAxoXCdKp78NugXnQNZNp7XhjEeTjAfkNoyDhqcS3pz11vJRJJ7mPiiHnx2Bgj",
  "key26": "3Bh7u5CTdNuCp9UGXud8U5yv2dU1nPzDq5tKXgReuyrQBjAG9qZHZrEL7ZFGaSbzG7e3442WTAx8v2Ghy17gHWNr",
  "key27": "zxEJA2ygpEpfnZ5qo6RoVTt4wVx9vNiRJ8jjBBdXuUyAuKokd5Acb3crAXgv7Vg1tG13yGpX8vaDfAKWdaY7aLa",
  "key28": "4b31K8VxosrHgkqaiTfm6Tk9B6dKhfrM2sqMrFix8qxqFisMJG1MYNXVnpoxZsfHQ4B7iZchTaXP4hhUu4gxXJa8",
  "key29": "2gJQ84NcPYRYFy8dZ5vg7TE385NgLU4SZqsSC7tsMf6vGrj7hmCZ4muuiLnsC5xJYqzjhyq1sqBFJCyH3zbyg9B2",
  "key30": "3KP1dQf83EW6FMvzWyemUTQth6Hvtv1DLsAPg4KH4X5MQyr1XT1aoyAbx5V8kaGEuXF6GwtxZthTJzWw4hzkbStX",
  "key31": "5bnb4iHRfrjJKcnRX8KMCTHvgoBvzSgqeK4wwZBQGpqbiae2FgRr3en9Lp9p5yFw1kuSn3VHdy8WPJAFfMg51zg9",
  "key32": "5WYwVZQwwnvJycG96GnMuNTcSFLNGZ6CRwfxVcgcjwNuvgSqKstF7j3jcHvZGwZ9FUYEBKpNKH88J2xjrxkwcL3m",
  "key33": "F3bQfKADQXMPyerDFERypWNUbcbutJahTJsA8ESyfM3oWw3tRpeiZ3m4HWseYWQouLMe4YXocLTUVBvKDGiAKWh",
  "key34": "ahfVdGtvEE4jTHHAC72JCbLg3boCS5yfsDzNdmUALWxYEcBBz5GD5ct4kfdfkreK86YFwPW17DQtHvBrCYGES1d",
  "key35": "5tm1YeVV8vm3oNDrQVzUFVtGn2Nx9gaPU5UFC88ymjQgE8X2cdzhiriR6Har6aCDzB3bKf7Qm2GHEgNbSUmdgDhL",
  "key36": "ZzNs4ty93GY7M1xsko7yna6xCn8LiBF5amJ2UjAWrBX7HFyWnUUHDQZAKj7bFjYe2td4Vkb68RGhUhZYfUEwq5Q",
  "key37": "4nPnFEbuYcX1HRafRfBDWnhjvn5Msn7gAbsN8QPg33NzB5CK6D6geco4ptDYPMLn1ULvQcAN16B3tCn9WfLktRHW",
  "key38": "5sLKtgpT66ZEoLjPebZGgUnZtiwscs7to6eiR5HbGz8gPUhGKqJdjHVWT8NSqjinERFacjMet4DMfif6Lb7o93tM",
  "key39": "3tuft2DUryaAZhnL2bQGx29JJo3GCatAHXxhBp9yTT8kErqvLiJjUs1u4TDWKyBPUHchyoqMUh3s72qRxNaQqwam",
  "key40": "QUn8E3MzfWwuhbLS11uGctosTB1mg4ajLY8Pyxjy4p85SE3mHMHqBGGWUrUWan5BehmmNEAUEZJku646pkWbwiV",
  "key41": "65r3wCzzhx4V7BsUoiwBnaereywt1E2eepaYRotK6CPrQa7o9shHpC2z96rTZ2xYwaQiGmAtGgP6b1ZA3YisVFDM",
  "key42": "5oZYA7Dk4nhPHBJpNaJuEujVRc3JD63ry3YqrrZZ6QoAziy1khcqbJ8HDZ3i3267Fjg8zcC1BPfCUTxDnuL9tqfn",
  "key43": "2ay4D85P6G7qLskZAL1spKMG7pz8aLTF66qF8bSPt3o4Nte4hF8b9QgvJkarpCyjriHPcUAeBRDspfgX8NiDycwN",
  "key44": "2vrafXSwV4MFK33JMHWS3FPwjefsyM5kq9CMwT3x5fLrMut3WrBPdH9cUuujaUMtzB37tQGCFaVeEGePyXNsepk5",
  "key45": "4YvtDRfFg7nt4bKp1MUKjQzNTTAZ5PwnCnfPfFm7mVAmMDzKCAiAJLxyKpwifGM4Ko3zg897Jgc1hJszvKdnL649",
  "key46": "3QGji9SgNU3tmYqeV9qZHMKG3dodKBpjFHsC1mCWQGTsdxM6JSsiKzJXSpfUKo5vodWSaVDz49mMiYrA6WhuQVRu",
  "key47": "by1uTUKELJ6oAUdRSb11eRMtTGiWCCqTVY3Q6EpFcrQXdLb87SxtbUtzi92kzi5JYXYnjiN96RKyGAjWS5rEvud",
  "key48": "ZmnE7vgEzepwhAC9M7hiCbodYTYno4YeCR9UN6EZR6jThYoubakj6CgnJ3Sn7ePrk5h1DvQGEPcJFP1wSE1JezD",
  "key49": "5ndZjys6BeX4xBZUtJFtbJwbqEb8YDVksX34Nxpcup7zsZbrn1whCHiSX8u7HDLcfXAff7dQ4Q6WRhKn3FRAVdxj"
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
