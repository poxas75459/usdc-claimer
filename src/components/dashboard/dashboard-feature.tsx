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
    "3pMTfUYsuHpqv92ELpg5QViAyNGTvP2kcoCqdoPjXFVY9ZbkrAPfn8jon77KTqwncDR78EokcZtatNDLhfGpdQuJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gL2X7QpbKtRx7t2KJFXuq8JzGhLSAfq634pYXdTAfFd3RR84eQdz3NYntNVu6o2ZEd6A8xdFqK9LZyhMfjFaLYv",
  "key1": "29eb8rF7Yivi4Ewz7wBcbUnHNNd7WGgmmKaC3pxTprTVu8HJWVQo7WdaV7Cjah9VLfvg5Fcn6aNo6WUSbZ7kwqSn",
  "key2": "5BYPEKatHEyf5orFR9rd8dd1fBK8LEHHTdeAhDZQnvZA14kBANH364AtUgoZNckkw4dVGdXXqSPkG7urkgy4jjZ3",
  "key3": "3YxpRWe5keqDxu3VBn3gcUT43pyBP8cuMGfPgGPdxtVaF1eMoE64HTnuSoAnBawVZLw649tVEQKLHvMQmiADUquH",
  "key4": "9C5Whdc8eJqXycsNyQD5mbVjXumkHFAxeA3xnSPurMWLQCjQ3nZJTaEgdnYxEyYLfnwEsuxEe8MHTF23mHBSbFS",
  "key5": "2TgnZ8AAFS4sVHQUmVopgDEU1QC51DnGJc7mZvPRcKMLEefm6x45pqFqVMubdzEXAFFxhrPWoBeCdUAWss3466PB",
  "key6": "4m1wKdpNrdbjHoCoBeSEn8EwBrYC3xHcAqWgWqXS6GCH6nkVFyRDLTiScDc8aLgi6GxZhnJZPdSYSaYWRv3v55ff",
  "key7": "2pxHdQ52dEghdapsTLQDg46rsSf1PmTcYXHajwfL6Xzd8YBMwyKKgvWKNvFBDMc12te6nNJvma53yP9WSKuyFb95",
  "key8": "QC14x9L4zpUMwhgUaAynDwZBPa1xp3dQ4vb55g8h9YW8AJ1FXBEFpTrpFMhTnNUeYun28g5FtAdSJenYoF8u62f",
  "key9": "26MA3VTE6vGsuHZfHrwU7CTz9T6E5qJRWrr1oMsyKQZsTS1XapQug914yNLfyuJuCpctvhS4ia3gB574C9SpVfeH",
  "key10": "4CDc2DU2XDfUukMhumeyeJShAsRqWnmJfsUTSAiF34jA1pqfxmuhdchJVq9eU2cEuC5V3E1eWW7iQU73jcNRWxJK",
  "key11": "2yq5xcy6QwgyaJoZDAzrRJYiqVMt2TD8x1Sx1gnaESpmvs2nbYcAhkC7FyVjtoXof4EBNK17PhUGmZhAcSxUE81o",
  "key12": "3s9xE6REGQ1hqmk8ho3McsicmZtwLUqZLNZFNrV41BGy1ed1ZuiFr4EH8P1TFcXc1PLSAqtucvHGurNocr4FvSp",
  "key13": "2oVuT97EQ2zY1T7HHbduDFqVLWs5xncGyD2Y7x5zAekLuWrnBPTt8Ndy1y1KEN1GgFtKVpxB3bXDezrnUAMmvRaH",
  "key14": "4rBDxYsuJ12dHD1SL36Ti9Hx8mkrZcR4REt2GWmZuhVn9vm3BwZaUwEEK8pSsSwA6FzFJZKBk7HTudr69SCTpnW4",
  "key15": "52LCrXErD7smxzC6vxFm82sH9krMLqnEoBnBEvuG39kVnWBhv86oN4oSvQ5QkJRyzckQqregKfUPRxqKHkkSRyeq",
  "key16": "5yDwFE3NkeuvYvirAYBsbws28NYc3pp61KCE1ngugDKAJK4aeo81ZSt9aiWcm7EEcWCQnUA5AxEHVxbBqXnTZCax",
  "key17": "2dgDmgrcREjiUaHW7mPWzEngviiJN1d563xutYoNntPnTBdqXAiSFqbDjCRt86G3B8PVdBpdvoDDxqRvbmLbfnC5",
  "key18": "6TDKiZC6Tj44Td5JuUKFDb5aSTGiU5x6anFA2BZNJegSP2chLXVG1w4Dif9CpJDQue9tHNC62BYpXqPRU77t4tm",
  "key19": "469JGtPgL9uw6hboqnWaVrovHRe4cNszpwiQj6PPpujNxTQZtor8b5imEbt5Ae7BbqubhaqWjuWdBYvwSpZSJ5Yf",
  "key20": "Ed2x94FJ5pMjendjXhSNSzhWh4tTcPpwyU9AtyVrwhoN4BMRRAqfwSWGfY1fmfcRmxjmDAsV8LHzXRw3baSPGuk",
  "key21": "1NwWpVGLfZDN1LPcrBX6Zv8gZYwk7cfUU6Mf7QmMWW9t2aTwJLigDRTnuMFv5993HBZqUZVF75YjD8zkC8xEXzA",
  "key22": "4Fh3QZqiKiLFsfFAXtx3ZsMx9GyDXe4d5YtmnmDLvpnF7QYohbgBhCfjN4NJsWBVeenUiNGP2A7RD1EWqoiSRwHs",
  "key23": "2TeSj24q4zk61EcjhzTjg9fWbQZtQRQ92q7texT2bBc7wnJ9QaEUEJmDrFxsCnRqU4FzwRe1WUk51GyfEQkSYLV2",
  "key24": "3DfVYATK8a5ePhcpSzvKA9f8PJiPXkzFnwuVBo3T24x67iHNBvsvHFtRQuLM41xDV3m7mVPGwm6RVuX8AAAw2biJ",
  "key25": "Ud59XB42jWbzHAtx2wD7mijLffGMBemAaWgUPG2poTDjVh8grGQuc9D8dwkGpyMYgTnyc2b4YwEnDXpSfKqs2Yd",
  "key26": "3qf7htuddWfM7Dv8oPRkaKQuhpTRKvvTmHnTqh2Lve16hpiKr5CUhvYXQMFPcckLP72weth8hXTcY4gKt41ABMzz",
  "key27": "2TNzepLim5qFcCqyP7YZhinQAk8SU8P4SyCXE1HcSEvz57uLAsCKRjxyWjki18MdJbZ3oTHMqEXcxF948Bo5UMSs",
  "key28": "2sgpx76XqA8CY6hpL3CXHdbMyh8VGpcGUMVe4cMsuee9Cig74kNEVqoudDyp4XAKETivV6SpgNy3qrdQrGuyDRF6",
  "key29": "KG2d3daLuQCWNW8eTY4b6MkwKaPHfbADCpmXCVuFRUifJqnZRZXyrrFF4v8DBgvW2wqrsyJLKur3J7ZknDQBJHU",
  "key30": "2FZu7zz6XkWjxvi3AtgBB1BVjYK5WQaktg2X9EHKa4FJ2yFPiGYpCSHjqC7GLBTus2Pz6RmrnEJ4r4qjoLXJZZ64",
  "key31": "52AEgcz642GT9ZK4eAJiVM2qWi7Qktnu2avGooXENfCUu3tttEEkfGEqwnt68QQtYbAos56VCK8wYdB48mBq3vzq",
  "key32": "5bqvtaEFku9yC67jB1GH4LtXLepWg8a69Sf9HKXWwCAQoK8eBa1Xzs1L3yDE6rzSZfdUAr7rgoRYBAjnCHmXCsRD",
  "key33": "2yZLsiK4BSyH8Y9eVPqD4tfAJWFW72PA3uGAF5NinNujREVqj1K53EF2Dj2CG3KYLtddnErq5aE92MihipuwtVjr",
  "key34": "3GtHTcRESdCCWYpsjY6C6hwUo2dA74Ma9xwKB7JdYHGrdPwmGL5irKSEcTUgDX4yZcYwY6iXQY1YuHqidXF1QJhe",
  "key35": "366GVuVeQUF3HAKF7JpLVThtcRiWG3ZVnn3ZrbUKScZ8qeWDCH6udwJhhzai34VCGRPvnFA3KYDxBDGQW7HaK13m",
  "key36": "31NHZnwceuhRNMBRA3WVMjPUXqiQgF7iB8RMBZEBhPFcThkRa5M3UME2hRWqvHzt3gd6CmtE3mQkZNHeBCaQovb",
  "key37": "3SCkExcN4d3emcjDn5zGrLpYT62PnE2VLYX2Tz3FVEfJczmWRsUfKcDYnrz4Yq3zpMnAFkYL7CHqy1g24arNjzLj",
  "key38": "25P6B9Js6nAgyCPxKWNvsJ5K1XaAstjJ2wcTRuUvRcKqDmHebJPTGwd5gFVETTyRBsEhiaprChcrCocvuw32UfAo",
  "key39": "2Gu3wbaVJAuPDSW28ff7z48j6khssu5Areq1sujS2kMq9XhPfPEYtv5eYQSoY7Zq3vnmyKJDvJKEXp26PnRtWVQ",
  "key40": "44AsUAeEhBzcV3exE3pxPQZnBoQ2pJhpA62yhqEHsn6QVJa5xHduxb6dC2hpb5ckMGTDSu8qehQT6FjxiYSTyJcM",
  "key41": "wYjtYCuA1nKG7mD5HSFDEJFJ9ecUn2TTPTMS1nmRXSczHPYCijdFZq8hgijNfsKHT47qfocVThBiW7z1yG9q2Tu",
  "key42": "3oV26deKsqx3FBR3cfud8sayJ5uWiNqwYutKoYS9sw9z9GvdnezfWNrdjwxJ3xaXHdbbKuxVbkxuW5kApq3KtSd5",
  "key43": "385vK4cMHtFUQGbWwEWozzTwW6wRTviyLfkorXoLqpoUPpsEbiiSN1uxCxAgZsNvntNAmQ3KETmZiqJFcwjvP1Ld",
  "key44": "5euE6QsSLeJmbxWBYbF8jToppBbwid4ciK8cZoyugwjaGkiDjYPvj1V81UBgLnLNpAeGPQHC8BqJ6B5ChbCXLA83",
  "key45": "HWYy9wWiutYwbykJsGF6nVwxLdgLaSX3Y7hFdL8yhmbRdTfnTQFprt78BSaJe7skT2mYSf5jwZzNzATsD2RsrmE",
  "key46": "WwUMaYQM4vufrA2KnvRTqLuqPtVXXTfuvmgKr1UDR8EqfbhMWn6TNRMjkc5BCYSDzXaGdK3Pmj6odA8sPzKqiEt",
  "key47": "47o32vUajAVMBbbNjL19NB9xuxnC6BdVGciSBVFShjYWjFmKayfkEQMTQF3gVRefMvu5uxPN2zdPzGLviZPrAzKo"
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
