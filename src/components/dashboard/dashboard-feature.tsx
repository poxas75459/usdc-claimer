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
    "5vDFe4ciDth9gbs1r5E1cAeusEfep37jxbN2pbSetADqohhwL6XikYnBnQMfxaPXrYwU17LS2c8qA7W591nJieEC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4o1v3RcdDa6AG2Dujib7Ja4Qdh6ce1RTeq8VG5Fz4X3CxpGii4peFdEzvnrEdCbQwb5GzoHmjfyJMysoqoSZpvwW",
  "key1": "4n3ViaSjyAnswBBPihxUfPiHXRu49kwYyURDnXrm1PnoxUsmGLi1QgiHyBPsAVkitSQsPDr7wd9a9AVNpdUQPLRZ",
  "key2": "Fh4GhEaSMT6omkMb8afU2nVhLxWGUM973PZMho25cGBGVP5rNp8xRTmyK5ELPkxeQhfrFw1XkL9HuzeAo4RknPP",
  "key3": "2i4ZeGWkVkG2sqmBM9xgFxDT8qrQeWicbGvhkKG9RV2T3ztQAWeDnGCZ2kTF7ASu3HAcXJSzhJUbbGeFu752ZV7A",
  "key4": "YmK4AqELrffmn1gcPtjRoTARGFk5VG9MRJ5zxV7TaZhUC1E4RwoA4w4Hfjh1TK69g2VCCcAdkM2TaFsR1peKp9o",
  "key5": "3EmKmX1AUnY47UbwhDgHVr2rwr3GFbjtCMvRFJsgJHRmjSAGxvYZncJ4kSBTi2T2A1GQkFCahE55wi3WxBm6dKTH",
  "key6": "22WbxeJ6X6RMWaUmnjsA9VSxDimJDQUmt4179CPFdT69ZtJ1rntmHyw4zcR5BpJx1PM4wUkZMr96mzUA68HneZM2",
  "key7": "3k8PnSjbCbcMSSpZdDh2qH7fnTUyb6Ww2b6MshHmADCP6grWk7pUEPxXtNVKhVXo2FWB5gPGVYsBjNZPdP9fvFMB",
  "key8": "574m4SAduoA19MfNXDxQELw1WvYnqEXuu4Uz3GLmuryqei1uxg5V2Kkf49XdFCHqoT9to1AuPD5n8V4SndGUKi5Y",
  "key9": "2AGBg6no1x8wiJdHYoVEUVrdDFySoX8ist1ewQFSte1Y2Fv7dJsPfst2qkvsZEbfixwMUX2HGkLCEzzgxSgMpfeY",
  "key10": "46Kq57tcnqDeWddaYsNmYSjjJeNRCvFdt78di8UpzVUPSDqhBszJM7azfGiqXB8yLDECbmfe8UKJSnq9hiyjtuHA",
  "key11": "37YapZFf3LAkvkFYSb6Fia5cae6un712arMLEpcpuR5nc8NGgYVb7QQm8LPMR2cR1AUs2PxiaKNieShDjMapChXv",
  "key12": "gB7TKXPrcLZKCUPMbXpPj7EW9pPVqJ69xqVepkecyPUWNLgRvMgDonTDnXGxBjdwtdrERbLPe5QayAnkqbochiS",
  "key13": "574sFPs6AEbm85nzRbKCDv8nQfVj5U7bdenTtaTDPwcypBG3Q2BvEJFBDwjhPJCEkvtoN8HvGo4Mpf51zaUPks1o",
  "key14": "3dY87sXsJ4XKQtnLEszGHPCkjqK5wGJnVnHiLd6BqSMhxhSrKq8T5Xbpre63tLbLbNepWnV8dNdEu1YfbQB4AWsh",
  "key15": "2VR7rCrFyrKmqbbZkQcDBTHs1D1tA8D2jZgPEYWiGT7Xkbnkc4FPKyji8NAhKegv2pFu7MUjyFEvfGHsnSjscTZN",
  "key16": "5x2rmvryMy6rmvYbpBCBVSiz9kgMuiWZm7ULK9LQooZaQ3t3gR3vuuaDyy5NYDkBSuRArVwNGfrWyP9SprG2LLSi",
  "key17": "5vo31neQiRV5SfBrWZtz3qmdp54VrCiL5Acqao394uzyNrCcqxNDHW6fiaprnJd9fXSPQheaFTsA481J6mKaHGN5",
  "key18": "5p2E5znqaa63NcNikGMUy4bk8bQiC4ZaNNjVvtDe2emryNfzPjksonRNTcQBG3D7BvWTHZwrQuV5YuZW9XPpRwxq",
  "key19": "3na86ZJtGhUPmv38K7cn92CRLsjyP6nnJYyKpsUEUYWGPLjn3E2z72Lm2FfcMABtWeTk36XnbM3xmYyEnYz4bnF1",
  "key20": "bR6uoLwQq8hwQHxv2HoCE2rBCejpV5WBvUDBwfBhpDRyGFWyrftSBYeMgpRoE3aQRM3WzW5CQaETeRyMLaZjeLg",
  "key21": "5uUDpvzaHkEaCB1NLdb3UorFKktuwQjmDkUmgfVPGLuuN2wHrt12ZTvxp5TTJtBY6EUCgY8yqQsjeFLY4VYsLSwf",
  "key22": "4hWBaiD1CP8CbLQQybRY3nEygnQhX7PhVURokefsjiwUoSD9hSzWCmiMhmRBzxZigtprYAMH9kBvvNsBviJHC5sA",
  "key23": "4pkwZmXjtp53keA7VPsqfsRgPZXRuHuGZDtmUbSR7nkvd5HkXtDhxwDm2UJcoUfr4GEvX2BGR2z99u2gVvU9bMn7",
  "key24": "5tGSjwxH9J6UKV5c7r3uPx5njjSeqP4KtmwY5oo4GcSUzD1hwNDgDdQ37jes3LXb7WjFYpo5JeL15SZ4mYVujuQw",
  "key25": "TppoXHpBDQZ4QnybnDU29eGGLUeUEebJ91EmYJ7E9w3fVB9kCEs7mi4dbmKbQD2hsUcW2tdyfJyzHH9vYjgaKCF",
  "key26": "64DWAs2t1Mrgo3jQX7wmraDZz5RheDQfWAMPpp8BSTUQTAmwHtZdyTQAqCwth5AoyAPkyau8v6dqBwMZtBYQJmNe",
  "key27": "NvR8FrPigdsyxJg83sXaEduLueyfckMcjUf1brHZbUcuXhujADw75uWcv7zLLFGibKCmnF2dSy3BqedfMJe8EH8",
  "key28": "64efYGiKMu6mx21QdkjFn5Rpd5awbFPjN6jKgMg7EF6Cxx7UeHf8F3LxGhTCMdApj8MYM1u6SpUs2vrJPQiyPYj3",
  "key29": "5SSRGAyecTyPd1UkpUhhgb1bAm4jmw3whuvRpEosqL5ZPRbWnoxsNdLExKHmij6v5xfWX3KiajH8H9FD3YgKTRnF",
  "key30": "3P9y9KoebYdvZ1sWNtGCuJAmRNNdGjguk6tRRXfFDSb4fCAWv2nizWDpyGCm3vx3fGrZn2qhkdS7fLkfiNmVeLs1",
  "key31": "2HhrAiCUmrDu2gwnyW4gEZNTw2FnXydZ6sNNLmcQ3quVY7h8vrgisRuE7yGGCWo38w2WvBXS1ApiNXucCoJWRwMJ",
  "key32": "4Lwr7mxMLPoMU6MKnqLrfoYVhCf3nT9feRJGLJbH8N8vhLs6dhm89woE3JKrNYJavBjDCabhCCxQXbpXeLTNd56T",
  "key33": "E9HM4hz7dCDkHcbF4dHsNQN2nMbLLb2vNxYz5gxVzxtivEh7UNiAgn9px7jE4QjUpk3QaMVSKcn9yJzZMsitvLi",
  "key34": "2AnGQ7VRp53xbntAaY9tboB8ChsFyTWR4E434wmRh9LPNAquictu2GtiZUQ4UBcs36g83H7TfwJJmEPEsMWppbp",
  "key35": "3gmcUtZfMdLotWHjWi8ohdhnwcsXrx515E9rZbUCdVWktav5fLyNpwLkhThjCnGL9UocTh5cWArZveUw64A9thZJ",
  "key36": "eKGNFusc5bjQZ6xQsY8HTTdes5q1c6j234rFUY7JGrStNmSqcDsHbzGH21Hq9bd3WmEcKvubCP4pGmcXprLQXsy",
  "key37": "3zSPWGRsgzySQLz8KvnWf1m3R9DqwZT9cGkf2DJ7seZC3e7ophL4YV1FpzFG2XMtLPdqxwWD7Vq6FroUXGyYd2pH",
  "key38": "3nHh4KGdBqx7UD2u4pneUuadarTyxyYLaXmQyryxE18p1d1ZZvYoFwCos5EgSrJ9Xy9uKrRjPWGfomvwLCp7m8U",
  "key39": "52Gv6UEFo5y5WZiGxon3yq6FFoHznLhymnJ6LGbb5CAGbHrURUCqf8Qx4BvrWi5D3U7d1JbbzS4qzvajjz91GUrS",
  "key40": "3buiwweNYp4j2yuRoYG2bMrahegH4dj1PV19Za3NWvAFb2yySxjXo2CYxFUdTVfsPGvuwTtzKBPSvhH7HhhT5Uv3",
  "key41": "356LVCmobUSQ4yGnxx9uQ1YmZ8guyJPrtxRHZNtAQ4KvzP3YVoqmr9mmaxi3AfwzNLwGj7Yq971kCPNwawbAHAVJ",
  "key42": "2be8rQNWGfiB45vpogn3A5rgub6oX6hFogvVwe2kGUqdzjjX6YL9mqSq4uU7KUmb7utgDMPBY282kTPpBX6egP9C",
  "key43": "5swnHzA4nhLS1SaiUa2LNFUniDNJz8MXR2n3cH3XQNuY633E8JN7pjCH6owVt4Mug2RbS1Lw4xEj6fX5fpX4zYgt",
  "key44": "i92aV4yigiddSnFDMpy8pPXu9rJ4Sn5iHrpxho1WUp8gJhwgBebas8LiBEjfzvtnWZtcor3gNhgUskUGzGzgfHm",
  "key45": "3dY6KxCfoFpc9CPqFYNvaWaH4gqdagJ1jW9QzeWaMPJ6qGKbct5x1TVgbZfTJCMifrkhyTBd8JMdtdHAgV4Lwqk8",
  "key46": "vuRj5k1DvJQo5jEyDThXW5URCVVzU5HNpLrXe4BpMtuHT41AQrXGTCeu5m2MwThZqBxR8zAccczT5aMqHfF4hWS"
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
