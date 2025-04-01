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
    "itMDWUmav3cQVSgHgg9a4AmyYUfqztdwX8wcefaM3e56if15cCRi5LSALSujrEhfAn2n2RMBxai8muo1KZo18Lr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kxVAjmdoUHHUdBqChz4u9XPqu3U3ui8PwtgRvCFg4LWZWcNdNy5AyTdcwJx5YpHWYFa54Ju9L28Qhq6X5jTLTNK",
  "key1": "5a73qLiYifKxDy2MaCAmd56ffH1TjbKpBnsB1mc54TWzkNSoPLjBaauTfoRRjcZA5umdDFUB2Xgmf3fjWUEpr9ca",
  "key2": "5cHGpvRC5Ufe5sMUXjoAnzHrMDqAa8e4EZezejJAy91F172bzTSJL7tTPVqxBu4XgaCkuqiEgV2K7DdjpQQFTiH3",
  "key3": "2NHd5y9aj7PHBukN52iW4TjD6aoacZgEQLjDWhEz7TGXVS3Ms5HFr26KZZ7u3iinJCvhyYtsSFfjdWoNhiMQ42Jh",
  "key4": "3eCDsu4hf3RXS4ibkjpN3icV8YVrq2asZoHyCvDzUarEYVtfejAP7Ks934u4cAu4wqf5zif3JwYL1CBUWbDiy4Qv",
  "key5": "5Hx79rcC8MWuzSaEPCMZf2ByNAgEGg3awoUL1mLue37WPtHaXWqmsnNc42U4cb91miN1dJrRN8ZaxnoCVg1hmXFD",
  "key6": "4MV9RaWyE7rQWfo61UmuME8cptQtBvBJHN3EzZ3br3mBwVFEjZXwp2HC3eBP5Z17RYpwtVLDbu9RoFAhVkaCor52",
  "key7": "4pfJBeCUsQUp6JqTRLyzH6cpUpzxDJK5rNeGtFCm7z5sQKt2VEhL8pAXxUjrVBrTzX6uc4VrbhJQbrnGumiqCffq",
  "key8": "QZfnjZNRofQugfbmQiw2H44eBueiwgrwGLDHwnGJsLcZGgEHCFc24xYiYgCp82YgysdZuJTYDkCmy6C7QyoRsnD",
  "key9": "42zdvwKME97Vdkk5bKEQ8gKbncx2xW7ciQ32AWpVZ4eKqLkhqWpCKia9P2ETEJeqhD7sp8xDKTys2mUgJMvPSsYB",
  "key10": "5nWmnqoztKtko8Ph6PdqnGMUe8o182yPbWG87DPhFtMGfVzhs28gVnLA95Kdm4vCeiDQkqaJ5jkcEZDnGtz3VjSj",
  "key11": "2iSkUS7CeEnHsDRyXxR17Ad8Dc8ncPMi9RFMZLXH8fUyge4x9Wuo8ZSZY4no7dwaA2mbnNkS8hHL82MshgkByqF",
  "key12": "5qcizsamdzBEaXnV6YqYdRxaqiooeWx3vqwCLWpLPvdehFDhxCNsT6LsQKrVojEn3vEE2Nkrh1H3tQ1p2AYA1L6L",
  "key13": "5AFqhzKCFjKwaimSA8LD6pdhCBT3DDKFZopAyb3xrhogwGXPrdoBouF2XzNtaykXDhVFoFy1L8LLgxgEKkf4zZfN",
  "key14": "4VZNQqv4ngwvFcqmZjN2oQBhqsNjF3oGUCY495h3hyfZFAAuLgrrgsrvA5SB4CpU82vKDNg1TDVmzrS4wXPBCgzu",
  "key15": "G1ucneD15pszAznJPvEyvgwcCvMRa5siwyXtKkKSd9FPXsZacN7eLBkqpC3VBM8QX973VUVr7anptfyt7mhPEbt",
  "key16": "5mkRtR72ztT6w8Evob7dEGEFgLNZKrDAGsrTPJpfmKx36U5t3kaXJntJmDu9ckXXsUDhQXg7gBQJJT78WfNvzTdc",
  "key17": "4uBr38pG6XHfZLHEp5SXnX7K6okfdMXfb3dd8pLSefZXuwCvtxz6ewe1c55SBq5WkNcbnNuext6qAQALLW1Lh4vL",
  "key18": "3JLSqno3oNqF1C9LoNEQ7xJb8y1hFj5zXi8BgQdiF9fVETxqzBB8axm9FMgX3vffMBDYiBmmtTZbV86GLDaXRodd",
  "key19": "nxEWW5NcasM8tJCxPhkpV3ApZu39gFx236z39MnzhEUDGSZYTaDwLoZSEZ6xy67PRZDteabcoziQPrHtXJRLZn2",
  "key20": "46ULYYRUq4wws9XrRfWhEagLGB8bER41wSEKH9X1iQyZ91JGyLxMiaDtVbv7CTP85wmwDu7DfHeyyuyv1c7gwBwa",
  "key21": "4QY4VySWmid3eJPtKJJwVQus3muDP9Pyze8kQThteTvNf716Tzs5ixN2XPkQ4WnZnMhLwZZNXm9aX8aKg4Bbu38Z",
  "key22": "3TxZ4Z9ogZv6TtvpgT2qJ4dBdBWg942YWNTish538TN32RRcxKEwh7LSchs1WsQkdTdPDNBRReqqVgmaxtPRWspb",
  "key23": "63ji37Cqo8to7MMqKRFpPU18qh5fuPpAzRGY6KhoLmXzB6iQpyXdgiZT86goKeno1Vx3wxLrCxdcdwD8AVpRJZXz",
  "key24": "5fcWgNPyheFhhKgYWGu1w1Ao428eg47NwUxcg2tT6vjqf4EZtXW4A1Z6VrxMcDa6gm9EfhiYivVspqknCaH29qN6",
  "key25": "5bvF2UxwUedTRfFkH1xDWvR2W26cQg7mDUDdaY4vXA7gLLK5teS28z49UPfFUk5MrLRognpvxMMkzptFwj8XuwPx",
  "key26": "5EGZsQkNQD14MZ1o4otsw99BAEk2zkyngzfyLLHZ2imvMebJPArMsaeLrSzgLrjb1uPR78abnu2eXuNwi45asN4i",
  "key27": "2BLHty2XJFqJPQ7ZzoviZrzrquLgx3NENvHGGE3UxVAriqq8xGcDZTeVQS6FUpy3iGzG7h1MrbsTVUSKRsyyETFP",
  "key28": "2BLZ7jobDev6EV2QRD2pqd62MCAV3tywyrSggUHKw1MGvWiCkuvA6FM32rFc81ohkU6nRTceBn7cv2Bmbdz6xcBj",
  "key29": "5XDLVnnxarV8kLoFMMh61fkMycNNcdexMCaXYCuYrhhedEAMRyiUSrZGicksHK1ePZFucv3HDxdrsWxK4yd4sJCT",
  "key30": "3gJNH8RvQvcdyTsawFPdKaH1Bw5rzr9JBrXW5x2pfbwiBQBqkB54Hba5ARYLvdtVrkUs33jLmnSXuhg1ytimdRWX",
  "key31": "YPtPPcmo2DLLqYe1zYDvR4AGidTkkzLxz5VBThp7kVoJKXBexWDdQwAVLWZaV9vSTZZTEq7kXE8jy7AvqL47o5Z",
  "key32": "3vhJJbKP1yKcLWsKqDZmPrZJM1Fxnn5LABfRJwsPAiMBHcD4NpxX5aijVxdX8pNsDdfAVKh5HEvZHuZZmxKUvutf",
  "key33": "26UBZoMGUFX7dC3izVu2QveosuLgDu3kYb2sVQr53KNMRd244AN5gq9LjF1rBvcqHNP5JwvDbN9MLs77vGehkU8f",
  "key34": "DAKawE5VbesUeracj4W42brunJ5F2vyb2oQ6kJm2pgcCMzTdiuwHQF5hQMxtbMyY6yYyu7UmdWGtmWbaonFULcc",
  "key35": "2ciTKDbFyYyWKHviTzxyFtpCbCwHF2tD3NhnYxwKJAQF2vjNHBxHERXr1EmsUY7RWxoZDo2LFcjbghDNV5Cq5CaK",
  "key36": "4ftAqycwS3KjiqYaoPBVAL95szUbb615TzcBpDxU9uCLeFPGyeeq3aVs1RY5TfAyRmseG5rDEruDpg2VoDafvhti",
  "key37": "2JvAHaNSh2LZGmci9iS9r4qfr7QpQD6aTAehtaeTMjHPPxs2KNpE85fEtPA9SGix6Cg6yhDAZaABaRwvDpUtyZqm",
  "key38": "4qYh4EoHS1a5AnzWQi6Qu6sMVze5xNG5BkB59uVCmwTwGGyvKFdYagoCRzyYzM5wcYo34BbwCmmMumnmauKCAD3G",
  "key39": "2t1cM4N2uPJTvx47SARNVL6A2b46XPa1a78fsFnANCwrd37ck5asH2xvhZ6BRcGfGxpHJKkrD53nSbk216kXrjvR",
  "key40": "XbHNEkkkFG4URh9yxxV8G3nrwHdJtQz3KWwhaCtibLDrZTju6RZrCw9jteiHf3NdTCmK7mwecS1rWhACVE4zFiL",
  "key41": "5aDwvXxovrNCkxSJNkL38AmfwoDXMMQdomy1pPU1qsHu3jHBdbPdxGToFCCHDVs95kzYmxoSPuX7E8BL6pgbbtKo",
  "key42": "2gmfMHnt8VnaLiwcHgwAggSupQV6zhhgHRBE645MNB7xftVKhe4T6WDouzcGbHRzNhc7RLfPFVNL8G5ReBBzR9FN",
  "key43": "2tc8e9npHbivwjG1j8MipDbNGPYJP318pKUVZsfsneCrVgaFas34TWMw7ADPKo5bbHUY9k4GzVvDqy3mFeXdsZBk",
  "key44": "4wwQebDpmyd4WUa5D9DtnGnTg5p2hFtSBB5Sgu4G54E9BURH5PXugw1Gu5ce3CGkj4czpu9zSdKQXWzjZQKSotja",
  "key45": "2tFst93Qt7tqiSKCYHZbM8bJ8FofpPbWHmAnzebYoMhECQqbWVHx4b5ehJ7HwrihqPqvdBueAN6bRw3k3BV8FBiR"
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
