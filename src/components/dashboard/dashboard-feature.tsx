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
    "2c9dEMQf1vWU9B2adZhU9AkL3MErk3cLspMY6eHrrfUzoy3pHHrNF4wLxpyzqcgfPbuLquap1tgDvPoEorcerBk2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Skkim9njcSkdSpwUMuSyZvyNxF6s61Y16n4xHq4VXiDqG3fbKNXGVtWRNuNdiDCiQThvBgZHPjJYupun9Ec1xPU",
  "key1": "5uwNtzFdJ6pVxN7MexKxh2pR4Z57PhrZprdCZi3drbE2AVU5LX8Aeyr43cyQpMtRgGW3Nro93nSR1edRAyjCLtcq",
  "key2": "5Rqit7gcReQJf33aWfkY9MuGQySwPbCbfSkuKyRvYXBfmJ2G5DhKrfrA2n4kJYwVXzse61ZB6nNyJMWrMVhTZyyn",
  "key3": "46TvwKFNRw1ofNfSVxM6mkZw6nj76b3s97C5kvTNZpJ4kB2CC96nbUj22QEgp2UY9ScYkdW2fYhiJ5BDqXa9JRQ8",
  "key4": "5Eko7aPm3a2CkVJCZeAaHQPPkrnn3nWmMf2B11k2pURwwjm6o4YZ56wd9fk5mkRtB6fWg6mAEvBxWaeqvFBoj4Rz",
  "key5": "5URrsi1ECEYbu6Fsbpso4VBuLshCjicX1e32FdqJFWpfvCckRbhuiuhXZ9oZVbjHnusjqtHjMRGHwZcAhZ5uyV83",
  "key6": "59bDHu5E9cccTK8ezh837Gmjcdnoe8SUzyd28xHdm24LifhR6quMJ2Gp9oj2dwFWsVpR5fM8J9LQCNsaTqC652vd",
  "key7": "YHn7cmH4idx4UU5nNBYACWHGtq1C9mhB1Tzhx1yVy99LneFCKiauJdrQ3eyoPgBz2rsGNsvpHzT8CQxSndKG75w",
  "key8": "3riQ2sDcv4oHPcC5JVw3T8P2byNSk9LvocB2KEw5oYiMPBaH46mUNP7RMGWycTiJXEQqzP2aP5GoMkdAQoBRqrT6",
  "key9": "5M71DbGicmdVQiTS4weEfpVztjskR9pc8uutGtBhtCpL81PaCWrGYXZqFAWaoUqHBDoJR5eze8YwPZ5f2w6heRnN",
  "key10": "31vvWKRQEzwrteudn6R29i1xtgAiGNVV2tXe3su164Nep8nuT2grQSMNKMXes7Jv25PM1p7gDjrdLmzxYK5VPMmX",
  "key11": "2SjCqZwHirnBcV9zevHKSwexAWsfdR85aN4F1soS4mkKaA4epqo4NWiTHfZdztimzReo5iSHUQmKBQuKJtUY8Kh",
  "key12": "WApqUTaBD883gBVPwC9nTaUaAzYfrQUSnj1fgLRVvvBsgimCGAhSYaXbdncVeuDmzv6Xqna3y5nWtq2ARdcQcq2",
  "key13": "4po9iu9cvA9QGbYFJteoBJCB8qExqD3FJyFNjFkfe6441TQ1zbUwEHmwf2DxfQsj3QxT19Kd8zn5QsUmM8cHEVX3",
  "key14": "mHBTzLMsZBH6DkmjJdp5qor3BQ63qpxeFbU7oJFwV48MPDk1XjiQQfo6GCKbk89rASc8mDnu5mbyaozPmSC8RVT",
  "key15": "5L6Xa6iMmtjfLwBiUaCPSQypoivV3HVSL3RasguQmRovvDx6UHjTKJ4u77oWykBTKcARY7UV9L7WVimpYHJVqU8x",
  "key16": "4o6WG2zkCwu11xkhJTtmovqhfTKwwsoBiHA2F8xNrZR7rNxWyKRN7yYDvacT6ydZTRL3FbsbZtKRjbhCH5QBhWgp",
  "key17": "4Yn57rqD1kkyMHcRNrsrGC22Q4aiyewZRZzwouDcRm6acGs7bqH6mENVvFETwYR9WWBHKyy7KCz9kx2rZL7gBaFS",
  "key18": "55rQJ9SiaBbJ2tRbkgFoeLjq52FQwwJrkJ7XWxRjcdpvFxqa1ht7dMRoasoK3QL4HPZskxQFMZx5VArw8BqCXxQP",
  "key19": "4LEgpk1h5AxgaN2aJeC8fGeYooPpQJUTao6WzqkWv5kExwiQyTQiAKoAiCwbQh7VNA4iepRp8SDLMtx9aUggZhhp",
  "key20": "3pabEj7FQ8oX6NtfP6GLCMp8tt9akXhi61eYhZ8nvAvDVot639GPxa1EaCn5Bed6L9aJ2vCovRzLSZhWXqB4VeTA",
  "key21": "3Vax5VpNF2Lq2DDfGbajJYnfqHwapwbcjMaeEQgvzW2y15T4LT4ryE6moc2HeoZbLZQBvdcEa9xvPBZ9yZEoyo43",
  "key22": "JZmiRGg9LE3Xb2jTPfX7bBa5Av64dLDpiiQeMz7Qix4LT4tkSGCEM7omeLzygMNhsDiV8KTZHFgRvmJAojg5T75",
  "key23": "2NbWEFKpwvRqpgNjJVCq2sLJu4oiPf1NegXZoV5x6AxNGqau81DxvsiNHsSPAS7Nv1iajFksWx16ctquxSVG5AAH",
  "key24": "5Rz13LrQDyD8xamcmd5XMCmuZWsAJTfFify4Cc5G29FJHarfSWKwYVy4duLydnxqZ7RwvUTuL629WJvFXWNheSgS",
  "key25": "zb47GxFF2VoNGbyEz2ARzApVJdgcoSEPqTDkyuMfLX4ZJW1SZnEHkaoRyi1MZnQF4Fm2khx7ymM4F7a55pAVLeg",
  "key26": "57o6SFRq8SEP16pES4chA1sBJxEn1nAFnr8QPVAU9Jp6TxbBxpxHZtXcXovkBDVdfFTyoQW8tkGFGo86VoFLwz4v",
  "key27": "3SNEk5T7whLwxp3ybnjuMGgA1nUN5XHGWf7wTUi4t2XhmmAb4ZeAq5NExD68iMPjzmJpGHiK5km6mL1N2TPZbLEU",
  "key28": "3xvsxnLHXUnn88Yd3JCoWbeatX7sfCz41epzuaLn1ahAwDqFT9bWzxoWkBhgV7YpQ8GZeMsmoRruhwxJcFUjoBeq",
  "key29": "2naC9A2ry58PEDakoaSa99NBwXpyNW9wcq5dPtEkHBR5biRBtj7JsFHn6FPUbdb2SRohwsbb4Vn5P9knfbDfGcNR",
  "key30": "2hnwuZKMCuQAAunSHMD8nHSn8iZz3EgULPJ17zyrWjn1tFsTZY4K5dNEDXDroqaghXtSouLHL9PE5QwPCgTXSGv2",
  "key31": "4TF2etAbNERmoU5QSgoykL7AiFr88SyGbqKnqeDr5y6xjmbtTsJ448wa8gBVECZozAntcdx3yq68wYpVakpaEwaK",
  "key32": "yDUf46fVrPHvC8CLnPn5qMxuGtYEgCAsuL74p1xTszVGch6oA4f1woN8WoKNhSKJRxg2qRVd7EoG2wFZw3oC3Jp",
  "key33": "3QxswDh6jrKoVQPXuc2QobAsgatwEYniCXryj4vQyepoP6w3dPVAsVRKLMB5Gf9W4Kzjo4WMymqXb2ZLrwCUCpb7",
  "key34": "5EwuGNiRRB2Jm4iHPCWxbqzbhhFGMYomTJ4VLm3CounvHU5TvtZDQTfBUJ4tqvoQwhb3ZcvuujGSJuu3EYxPig8M",
  "key35": "VU1z4r33uzVbhzu16x7BhM5UTMgDoiKWQjZh2bJTzZd2pzDWaajiWEuobjvfS3eD6DWtqCpP1fbbCtAb8VwBRXc",
  "key36": "4R1GbwBxyvjustxZ7NnpjBoSRbTaehDdMU1sEr2MTUgyaamTCQmboZ4t21HBHTWgSpqaU3sQnjvU5PryUnU3BinR",
  "key37": "DKt5rxhzvJeK6FgW2ZRdM1k5RwohsjdsJq7JXNLXorx6Zbw2Wq13fVVwsenDVhmwz8fyxUnhY7UHfqwDGtvh5Nk",
  "key38": "m8qtaRNdbcz1vUYgzHNQr7U3MLZtbwnGuxTJXXJ35h4rNza6dDA9F2hZ3FeXX6bmKFsNbgAbrgzdXrVRSkbUGZg",
  "key39": "5c4ZtGrtaHPTWzUUZiyDtdGmY1LAfEwniKSMn2V6rGyD4cKMewZfVWM2kv8af1YWSBLyyGfcJVKypwo2PwuxmAPE",
  "key40": "2DH7SPeVQrpZoa3rpCcPqw7ifnrYGrEhRZbAaEnBKnRCCAyDZQ8bbLtxYHwdGPNJxDJfDuEgwGwr4zgoUqsU9bKn",
  "key41": "2qLgH19uY4dhC5QfPwxN5iFTUkkpvTccvjDu3Xw7Hu2Ax2xvofKuooTCRfQpwDj9PKQEDdqDr3EJURtWUqiNW5R8",
  "key42": "2KW6JzqQqau9LUTUExXYEoKtFh9HAqjYz7GzjDnvYffP3WAjEFRPeRbDbweNraRsf6oaAMS8yQa2vFGkJ9WFxtJY",
  "key43": "2pYHJ8ECVbV8s3oFDmtybokKtdPDNnWGxfhXR9ypFPs7ZgrucTRzdHgq82RefJLpRtX7KU7dSHtKsBT9DosffXir",
  "key44": "2KibkVfiqRmy7ahcnQ4ygpJkbT5dg19q22vNfot3wcaPYGVfZXamFdW1C5FJd7rrXWZZmBhMUVMyMxbSKJJ1mNmL",
  "key45": "6u9mtKf78zzDuj7cQy9W8WvLSeE1FBMvEXksZdJWiSTVSY88ParbpCAiGCWM4VLZs62ErUPzT2wCuh7fshjYtVz"
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
