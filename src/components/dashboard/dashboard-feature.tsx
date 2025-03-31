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
    "2TTbWj8xLR1e7CFdTwnWZSkCpTi9Ct3kViZPQAHYznT9GxdTxBTDpeyuW5epAQG5ACwndLGbnK1iBFrLjJuc1eST"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5j2kdNPRVZyC3UAuXiH82aAthtELUtyu5eTqAgCVKCBkqQdtXbLRKUHfFDT1xmrfTVVpEUnfefeS8cx4nUZDQ6JB",
  "key1": "FC3CvXrntKSGzVi4gBnWnhvSwa6ENkGcZYQjvynLQTToP6WiB7xQTzxuq16gQcAqhR6FJY9UzcmHeQyhfdr3sgd",
  "key2": "5JUGDciEc3JSwxwzC4SbKEZmqiCK2wwBECvWoV6CF1fWnt3k7mfVnYk9pMr4PfeVUKZsgcnBspek45tsW5RQzHDo",
  "key3": "2LGWqBXm4uhr3eYMUZNxqfq2ZbsBBcHSSkqWJkcbRTPcYQYmDZASAVhZrzjt2R9kSZtFejmKTBx2VttVyMjWmVmC",
  "key4": "2uj4TxscPm9QZBPWokYnRyDU2UkHU8CxDoLsgb23PtSofrgAwwSDyCvJJ7dWH1v7bxhCnDuxjURt1eZaZh4wGHE1",
  "key5": "M7mMyY399aaXc3B3Tc2EweshxqqV1hfR8ouhUnGd9eXpVN1FzV8EE4KDpCegjnkDu7TnekXU3pHvkDBbxoDqc6G",
  "key6": "38m36xjyCfqeKP3j85a4TSLGFfU2wyJfxbisdAZZjtbrgCmgbKSUfSwY39h9egh3JFDM1Xbv3NfR4ddp1JUM8vhy",
  "key7": "3m6zMpy3JRwL3mH5catMbyb1hiADGiNVSDd8fftFQZAVybr2dmbRds3rvFo9MTLgjRk8dtCWYuUH6tRJyL9v6MLM",
  "key8": "3y6aQWBb5FfjcKSCSyEnUVaAiDcqYacBQnyocqLsoniM5DAgX6GD6UB1rTm1aLU25aQvjefKWnyjr1xWuuZmgaAQ",
  "key9": "5qgP1auqqN51M6hvTiyqe3s9qxQkihD2Lez6kV7sbBU8UoaJcoU4p7xag7fnwfxKjMNZHtw6et4KiSdUmLuWq1uG",
  "key10": "4WfTQHNUh5pBXDX9G36MxLvZAGhzCihfZpx48fknresk8imYj7NTXvAY5PvovdHUpP2Rx9ZnBBeZc93QFineoRK",
  "key11": "VMznJa53f6LXuLkhBKrBr6u5iEWyemqA7b1fXjU7E82otoMwtkKEwRuuxbcDVMiSTTNckHfAHtacudjjc22cNip",
  "key12": "5GC7e87mcuni2oxASLyrgcnQEa7tSV9QMLEFKnqjayNSA1xwgKPPbgTP6PMWawCDe3Kgc1W2qNq3aNCa76Pqczbx",
  "key13": "3BQSJCposTiCHgatK9K5kFvnd5U1uALUd6RdTj2HW4Hdv444xooJ8tHkZYqk2z8H6sz2j822uugMgCMCyktNpV4i",
  "key14": "5Zuswwtef27HVEdadm1hASGPxwmtY2qMqNr2TZcsXyk7o62DMZWQgXNbvNCnuioDUd5PxXgFFZvK3bpBGjUerzkR",
  "key15": "qBWKUnzfEUxtGXj7rsH4BJmEasqpAKzzqSo8c4HiVtc9YRCK3Pp1AKpbspyLqmmehZSiA8zyPbWPY61wBaLpUv5",
  "key16": "Wg12MZQAzyYoYsjBW8iB9kAqbGWbZGUfKwwcHv4zPKuh8Q5wuudsZCx8McEVQ2s7CTndipQkCPJjkrhUrLxTdVJ",
  "key17": "4gPARVaxrATApGtQPRqSPGemNcfYtY3wuTA3e3o9d5DTYf4LSWm2YrFY6mT88QjxpCPAk3RU1YUUyeWz8GF8LtNd",
  "key18": "2mebn35Ewa6WdXdg4whUGeM1ZESJKx3a3uu3anFtEuRWcmDpR5TyvPjSKueBsRaDLTnhCQrPH4wDVsHB5r1uoxXY",
  "key19": "4M2aBBteB8bhn7GLK8rUFRMmLmq2R43JSp1Urajo8ZSLgaF4N3NH9VseLyPQWmXkMZbrAHZUzVhyjLMq3aLmbMyp",
  "key20": "3T3472vg4JbAGBqTpV5CC2jJeByjEYX55kEy19Ja4FjSMc8bVFBq9bqDGz2nN6p2nXi4XBKMEWSJnBUBd2iX7v5N",
  "key21": "2ywqZuvZ4mGfZy6u83PmCyzGXKE8UEd4tQrCRPd9Vz2esvnfBrkDVL9vLDyfbnrL56CDWxBhZneJxjVi3B716AX2",
  "key22": "s5eRKjicpoAMCaTFNncMp7K3uYBwA8taTYx2ramUAgkX8C5sijtCe17tq9TL9rhSUqEMvv6Ti3YhMUSdqbC8YNm",
  "key23": "2YyFxXRErC52fvAquoDmAbwGDbe1qrC9QwTvAv5JEU9WzCDZfskuRPLpoN9TgYh1uN32VoP7e19zm3HkMopXuNY1",
  "key24": "3vZVuf2y2aNLu9nEVjfyg3SxsxeWa3RjW8MaxeXeU5k4hGfAdnWbVjjCaWDEQWXoYycydzj8aXKfo3avfXnqL4cY",
  "key25": "xNswAnxBhgRjLApKKDSb2g8h8eCt5oePBweeEvAmKafyJpwyVA4SovWnem8fmtabpn9AeL6g7Qr7W4Bhuvuv95V",
  "key26": "2oCNZ63UTXDW8t5L8vGku4DzFmd7Xed5DqAVMY7WFGwMh1JpVgVZCfDpTUWme7aasPLuSHerxSM3BGDN1SbQMnH9",
  "key27": "4ZvdMUsdqFrzHhzSQ7VGXxU3CWzEKhHpeeEMnczLareeFyHmqwX1DqMWRC5s2zgpSsGsQikZZXxhU998WFcpZ1wz",
  "key28": "5bQmJbHsJR9JCaPfTS2RWRUctv8jooVT7zJyKgnzSCefdxtDmUCLXM3CmzNhnwBvvdC6WrdFy6FAKWqxbabvJS5L",
  "key29": "GnJjAVZKL4B6ze48dqmwoQ7cik7XKNDRJpxppngSsvVuFeYBARjKeT6XGNjvPUaz84XRoXBjxiEmgmnbgWvHBeQ",
  "key30": "FJHU3LiFjPzpP9EYpAp11NQfVaqjEmYvDeSjqTXFTmcWyc5kMVuqWAaNzGdXT8TwXw36vqToDEuGJTUcgwEC3Fg",
  "key31": "3CQfbTRUg3rYb8LwCuZx613rv7czPmgR5YFWUKupoVjtSrHko8hFYXmq8BnqYsa3J2AsxSPa7S6qXNGMS4SQT5bH",
  "key32": "34JMbDokzuHzRxPTRVqxZ7rbEk75evg6y3ryDi8hDojJPzLikHAoEaBEyhYXTmqAMK9LUuHZubvoVf5o841j3Mik",
  "key33": "gEVjguDokTh7gG2oNWLPkWqNsSq2xf2RkXqE3RiuwAgHHQRF5fDDrds8YWjBfYiu3pwNGLZrfF8giwx8uhbSnCv",
  "key34": "WkSyFUWRimPmvYLBM8oqdnFSfCHtpohmm3kQWijPw1kXFB7mEV7gJiB1j22j1dupEZiLxW49tFSV9AksZqCWcP8",
  "key35": "2kQQitX7DfbgZkgnmBsL3dViZTZoybWWHS2CVjSkoFzHbBbQ8TXs1m692XejseyWkt4HGbtpcyP6p2nJXDtRcxQL",
  "key36": "tQUx6vYTF3hPebGMsxWwkReZbUiziNQ81BH82ua8c8z173PaYn1TLdu1mHMTd9ieg24LMquY5hjX2QBaN1LamWN",
  "key37": "2wntuPR5Q9kFrKCfCXDMu1DyZYbe3TTjQkmjU3kuTcBwXs8Ue2mAtDYQHmB1yTTseTwiaoNUkRCqwA6xbo7C46Wq",
  "key38": "4thSThrHu5qUtTRhb33naAeiCfeQfN5xK2Eg11gfMoekRkTwyunZ5hAfp8k39cn9WYq2k2eaSAnfqH7X53sbpb6b",
  "key39": "2XrxCiKfKXGKPMLfdaMScxu3wHpXGbzwyFcXHaq9wvfsKQkWmHtuhk4JkFSK1j9ueinQEKYL2si1d12AuFAtKekV",
  "key40": "5kmzmjPxRcZhvDxtD2EyMzTUnWJ1DYPQRaw2qT2NAZG1iauNKetUdcxeXSQQzHvf1o84xM7c5Mt7JFKeWTVJis23",
  "key41": "4qfP7b1EVTAnCjpJAhR3CkD6Qc4qB7wQrMzz3p85KzeRhqSFEahbsaWSsMuPG76AngxrgFit9kHUvq9sTq5NBr35",
  "key42": "5LBCprgag4Q2fhp1KCNTyZa7GjUE8GeexMuVpfg8roTrRhhY1odEuj1KmY52SpJSnNfZRqeDm3ZYSqQBYHRtaAzb",
  "key43": "3Q8Mh3fewkkcm42GU5zhAioaB9vDXqeWCqX4pFDYcJELxCvJB1qGNnCF3PC4hteo7sL8LmkBFeKSnppoCqufV6NM",
  "key44": "5hHtRBt8kdG1gxGBmBFXvTrVQNDRG5Ff3Sp1VhSGcMghyHNkiBJE8cs8jYUAdh53otmPVMkVPu2LHt16NnkYbcA2",
  "key45": "3ksCCUkzhEJjo8nJd3XeUJdxk8g7pNJDFuQVmd8SWuvfohRyo8BnF3CcJNYsoi6Hkjntwgzb2dxSbqcVVfaTu6br",
  "key46": "3qz8yG1JuQFUSknNn1ExLeoZ9cgh5PZBpM1nmsBx9fLqdKPdiQ84Ga6yVYhKU9rX4ZDqqW7fMpguT4YKrjzk3pme",
  "key47": "2qN6dF9rvYTvnM99UxF2Y2q3u8sC1hYHggYsPnv8urd7V24MrdLW7wG9iix36y89gYjkzdiCwJxrHtk8sz3A8437"
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
