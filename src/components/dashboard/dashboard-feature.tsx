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
    "3aknAam4bT8pGAJhFfyK4nRBURWsGKEMwZLuzE89Dn44CRJLSwXmPizQB7J3StDizRo56WA7xKJfNbyj9CeVaD5N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32GaQEC9w11GyY1NMCBrjRx1fALvsegDqagtbDFpvWw7sreMFSLZByYVarrJFuBnCyqfGoWcRMQ42by3muMAGZ1E",
  "key1": "3TUTf7WcBTmxm2fyYZD2d6er9AfPJYoojtaVXky2GiitidczAB8ZrshGZQ3QLW4FGVUWDxALhaefridyfZaFiwiV",
  "key2": "5S5srH1YbgRUQRDgzbYPUzNSeVsMdMc1hFttYHjKRTkxGshnAAgvevtqCmXjmK4jDeRgVBoUU6v6zSiYuSpJFCix",
  "key3": "yS293nWhQqa3q5tG4jW47wyp8mtHx3pGUAWX8HSpfSjVdAy8JLiYaSRaKayyrWK2jCKVfkvAhPDngbb66pmuTmU",
  "key4": "4cm3LEFKH88dUNk2mE3BDd8wDB7QHxcWL6kUH3JuKNazK4johQVb6EzbJznwTnYmV2VmwKWxuCx9tnCYxpUmtzoL",
  "key5": "4VxNqgUALRhGge5TndG3wjvBSzcJ4czkzJXuoLjfiycu21Eu5rKDWPfqBProNiZPdXdfeLitZjG5pwBD21jrzKxb",
  "key6": "3JLvYBJ2za6xXnBb3nDNBLpUrJYcfpE2Emv1hNhtuq4pV8uszxTVWQLMt2dMq73fF2pWjJLooimQPv1dwdL5W6uK",
  "key7": "fttbAzvRtewio9ARcA1SosvikgFFRUEEX1ukteH4xcWs8GFL9oGN8koWRAHdDLEsXwZ5Y9hASfEQBgaEf7vXgu9",
  "key8": "57Jfphoqmd7QzQtcpnKVvWxhgtZXWFgVHdtCTnmo4dWh95JAB5is7ti7RjHUgtatrGAdv3yZ5ri4PRuymtNeZpgB",
  "key9": "53AV5mm6Go3HSUQqMSMRxGr7JMVsx3X5GYdTJb8YFUmuM742b3vuzsCmSaNGcRVMvd7n5SPs6Vn9qqc9HfWPWQnP",
  "key10": "55ARoPaEPpY5rqUbJfyyr8PBhyjGrSyR8hzwPJvLshL8PFiUKvhA2LTagEjT1hNkf8EGRHuRf46zJmGSNY3BKBrL",
  "key11": "35aZWcPrkFPoRREE9MpJL96Keqt4pfzqB5MaSA2WAEY2j9MWPeSS6ZcCSbfPfuCqJfJGvxPZ2nBdSGe8rqrBAgkk",
  "key12": "3VeLRvUmsK46tGpS9JnzdiKVLN2f2MVmHWCniQ1WRVbNnEDEdmNVDULL9eMFiVGKJePHdU5fcmr6LXrVHF4zMgb6",
  "key13": "3zaeALUG7Tugzp9X8X21p3JRso7Pmts28FERXDUJZHMNYRW6GcHNdTi6cW3D11W2Q1Mesm1AjSTHLYUVKh1fcCjb",
  "key14": "2kWrYousnQwVAHA567dVLn63YD2kjVsY2DxyNYfH74gQgnoBS7ajSGQniwsYtmATbTMTJCM59MzNG1q65qQ61qdM",
  "key15": "63kDgpJCeyJUvnTkQjtMkUoTsMYr6637NaHuxwyWHLAFaDEynr2eB7vvm2S4NPfywxxpdSPhrFJQebRDT8ZAVQ9N",
  "key16": "k4r5B1ENU2RWRp3jhE32RvbvnL1joxmNs3UAPoqhXC8diSH7zDs7tRYq4TYwTQhDMZRifDHV36v66sQuCVcH29g",
  "key17": "3cVzVd3LnCchFNAs1VfpUngUiSyR6bAo381LU4SQS2Au8TvUm3CPfUC3Z7PN34vJLmzZzTRc7opNMFjK1zS9GfKX",
  "key18": "PFLNFvNB7zmNCWCDGe3qjP3G53ECGxHaxpGWf4jVpfVAojqNBvtQhfwURNddrkK8LnrreAG4VYrJZbe1nfFygPG",
  "key19": "4P4AjKormv7xRm8zkLgHRHQBoXMVqiL78AJapqqapFzfj6o9BkcjwiJNwRdepY6qXo3yMAoaNtVMtCwWPBVwXXNN",
  "key20": "2JXwB7QX7CFX1iYT9zE3TAQ12BTLDJzFnhb2XJxauRANwQRTH1ZZ2je45yqDy4an3JyGbyXxCZnAHMczj92ThGSB",
  "key21": "4ZgFboK4F9mpLhD1LfZGSFJM9L7EHA6cX768ayBk1KHqf4LXLHjmCr4UKk6wYFQvcpo5V6Cdrvu1Qj3n3GJ93NQL",
  "key22": "5Pt8SgjPbM9jh5RAa3iXKFQUe3eGtWFniq35vRjABQXWrzUgH5hpGgQYCAEr5Bfrn5TjszS1z6aUxTFTJwkVJBTP",
  "key23": "54FHuhmVN6xANhk5qEDwvDPAsBWw8hMixy16Gf3tHr7uP9YTjYnHz5xS3qU5UzMBTS1hoX3Vxo3iTJksjFjbQbYx",
  "key24": "mjq2SHYyQxviLW4e5V8CSs4bWFXpmq7uD7ZQ3oHBs7A8W1EhV3GVkMFnwENfNtk4ciyakWmLMTpSo5ZatNdv2vT",
  "key25": "cYNbpXEtLdoucxmTxfN8Zr9gnX7FjwHPgxWW19mLCcAvtKdPArV1FakBTootkFzoV4CxwR8mCxoWBiGmmqNuceF",
  "key26": "4m3F5dzoFxgwWqTQiFM4qB7aFTVRCpvWWVvMvzmSiKfpSBkoPWRyQc4V9WZMDsk8e7xMibwvAwYm59FeB4biu2Mo",
  "key27": "3jdLtUPcWWJoCjeqT4YsgrdMkJDnZGzUoaQCPDJgt9bzNAFfw5RgUyj5zXHqPmFqzV34HPF36v4hr512e6qV5ayy",
  "key28": "3vGDcywwGsiVEvHLQkUXvz1Rn5FFFaY2MrWyMCamGejLD42jAw9SRQmwrmDwp3m6KEFVWTVw4rs5rciLyPU7sAVk",
  "key29": "3rFpZNzshGyNG7rYCojBHEas1Bo1zVMR6rcH3zevXVnkwaM7aWXemSHse6eXvqvRiyZ6bEvrndDmpDnrFeqsbEWj",
  "key30": "2b8FUWc5GU6W4iDdpMDAuZo8Py87dHC9gfiAP44ZD57QeDN3PvJfyDdVm2EaRGtcrut2hMzqLynN8sTDWFYK31fj",
  "key31": "b9EtVAcgvfkcLcNup55j6tKKevLBGyQ8L93EgAAqNR6jong8yvHMvc4uLePUwvnZgF5yR2tQdXhqENV63Qme3qS",
  "key32": "5LWB26mP5qK1JJ3U6ejFUBzwhct33t38aQZquJctJ4uEv6ijZg28MJ9RZeEX5VtWohHtPFehWhaBVYqNmhMNm1j8",
  "key33": "3yMZoc3byRTPJuL2UQZt7QqptFH7wN5j7RytqPyasnbsA2t2Cz2sWVssenQwjoX4Rw851PZziziZjY1Ur4UHmQua",
  "key34": "4k8PmUdvrFHMzbYPumcePgC1nxXn1wE2CvWJZKHVLDCSFpdZmY4xcUkCYipTevqxpBgMsjNTejVe92GcYVNdRYfy",
  "key35": "4aMmSX3fdSnnYzy2p7QyCHtC2nHFmyBusXRtAJ4bPvaXodkuY8Bj6KMD5Nfd8azXyB4tNihVWkmsfaRuv7y1t1qY",
  "key36": "4n1VKN9UL4grrDHmGXvi2q83rDJTuHJuLkLM3NWCuBouDg24aL2AoCRK2aHADWtvSzdzvAJLCmc8pgx8CBttFQ6a",
  "key37": "BcBXs681jaAYCPG6tMrfC7W9ZTHZ6LtN5kXbhQFBKsgXxiraMZYe1J1dhn5Td9L7mNpaewE1N9Targkhc3wm3H1",
  "key38": "35XDC5nXjGr8fknAekTT8qAwQ6Lhxs3cnQM9rLVNJgu1skTwx2fHXtBrBCaeKBA8Qb9pK3VvFhTWAJuYRqvQ7zJE",
  "key39": "2wQr61gVf4FWDXiWDrykUELPG8dWL9pSPZ9mCaVuxZ71298rYHPTzBPyt8RYExim5YVpQCJdgEvuuPQmfpGoAzNn",
  "key40": "43i2kTr614oVJpqEQDAJA7dbs91ue4BwUrsY5a6qKTX1CXVKDtMNRSbwv4L8bYZBFPwejzMRfSFmyqn3691hnHCJ",
  "key41": "587g7B5CvVGKAj5NVDcFMuJc5LrNkv9yq9XzbEiZZjSTwmRqc2VAVSqit6VTcJwT8eGnEft3HqvGYtjVBAZj3yHc",
  "key42": "ZrqZ73RHRcVjPPu1Qkt5aZjRPJs7bmCGLz25vH5AVi156G5Xx9NGJCBB9A5KscQzf7DrGQNZHnrtoqNRwhgGmCw",
  "key43": "5kkftwrDyNqFfC6RckSUhViSPgxH55VPyC2PxBiF1erJYsh5hP228yoFZnuEJMEDWZ2cXtiaRSthRQCNgyFwE7hY",
  "key44": "2ZV5KiLYuWAVgbP83U2riLMnheTh5to3o1bsKw9Nu52Q5tqRCiBornBDTeJq6mcf6P3TXvteoWCzRWcHpzzWR6rs",
  "key45": "vK3wLW47Am693sY1RrojqV5okBxuaxWxrg1xf1zt9XtYZNdaZiry51LyXAQ8kXboYMrkuwNsRzNCjxf7fuhfrDm",
  "key46": "3FkEhS4qAQTgpeqK2r2ToZa2SxkkBBnwgViRS6oZaP7miu8ADVHSvJsAaHuPeV1AExo7w5WCEXC182JSA7GrEkCM",
  "key47": "KUdtasgR3VYy5Tf7M9VMy1EnDPFT2FgNuE5BKWBFPPxVdkqYTEoi1Gn6TuunnDt6afCH7CgAUD7tYDjoTBGpW1f",
  "key48": "3GcNz3Gudxi3usGh7rDqzQxjS5gMhaSvAqH8AXpXgt8DciEoyMy6ABvC1r25bp1qHWmxVtVh7dejbqQDHqahfRqE"
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
