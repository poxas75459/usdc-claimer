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
    "5F4KivDpT5ACRsNPuvipxvzRxUh8SABpVrS1rq2q6gWBrpvMQyqrYkZ78AxpCir3oPbmrGmqAK2jjd3jF1vHcv7A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cJQiVFoTp2czSMPZ1BH3EVowQ2s6SeGecK2beb3mTjQLujTw72NCXCEXfj9D7BiaJLbptnzGcG7pQVvqd2uVVrH",
  "key1": "3etbScRmL6ZiHjBqiDKpia8UGYnmFYVH1MTfYnE8xkAS18dfZCHs6m2Jw4q5TZEjJ34PZbWVU8LGJP6XLv1hyyHy",
  "key2": "4b1wehdKjFP5FQ4pXHMEipuuchh6yy46BonhtBo7DWkHXcM8JDt8Z4HQHboXjL9sKXB3g1txkFYgNQx5bX6kxqTs",
  "key3": "2yrSb5GqXy2UfXt4ncgfzjUtGWB3VrXQC13MdUQm2PUSKdWcLBkBjbKb7avjssK81hL6MaEbPTGqXMq9gKQqCYqb",
  "key4": "3SP1Q2YzX2FrZhLvnLCk7nP9Ren4eyyJp8SGdsW2Lq57W7wJM3yQK2EDvPK8DMhfwQGwCEdxcRxg9AAeaVhCBeZd",
  "key5": "5Gt68gqSE6CxuJSp9UaiYgz9DWgp64qAiaZgKMv8hHaNBnJafTjirGuPG59YTrYkeCgSCizK7Yu5fzzXtw5dH75r",
  "key6": "21LuQ2G4ofQiT28Aj9wu9KYAay4Y3pVFpSoAQaVJZeLSxyXH2gu4JLhaecHd8MYGT7moSJLQEM3DJNX6L16xob2z",
  "key7": "67p8sBGNZVoFHaqaTAMCJtwZKv3RuErCVvAzyXcZBsCKzNqHFaefA8odVdJpDzTaDWnY7FLnrPvtyPxgFKKQGa1y",
  "key8": "2QKkwJLxGqZSyPxB46cprhqp2S8cQCKWBCJqp8bTJXS3B1AVVxxAAf7eVPivDHmSuoD5mQ1aVYwmkN4KJTFQrLmj",
  "key9": "5DkQ5NFe2h3KAnQTKN8fmeBDUsZtHfZZ94xxS8X3GyG6jwsXAT178Koa3N2WrQKfftNBgim3xJDPEY7eQkayVrzw",
  "key10": "2H5m5jzFzKoBeeoVHUkLZW8Q4omcBf1oEH49JX3PBztfRF3ApzB6ARCC5e26M8gSiro58AU3sTPHBxoTFHV1PYVC",
  "key11": "3eviLyrh3zdSU7qTNFimcVFT4BmbJ7z6TUWxvoVHc9ap1J8qjvuzVaDZWKfRaw7FefjFzQThWhCDaZGzrR2DgN3P",
  "key12": "5jKi5TzvQMHEzBymfJKHgzcy4Z9uNwiGahqUrpcN6FpfJuQNgwkExASQy7u1sSgYp4t7uUJVX8Gijskz2TYynU2B",
  "key13": "3G3yH55pNFRgG1HzPsGqZmm8HF3QWZrQ3xN9z6rnjYKtBt6BkZCUooPDKsGbVrPmjQGTi1murBe13jsiWqUowZE8",
  "key14": "57aEY8fY4i2rQadcYumwePk7jdPvJUP27BWRhHLpm6rvpHwW7YvK9EqTUTdojBJMLbvbsYPeuFoS8wZ72BcadP5V",
  "key15": "UtrTFcDEortQamwwdbiJthb6zzt491w7WxX2ejEeaGbDkR8EP8esZDPRRxgsGhsGKnJP2ZmAtTLwUSzGDVenqCu",
  "key16": "WNrbschwQFewCjcJKc5bbUAnHiHCrfGm2jgqAQXSdXosJeAFVagEYzYA9VauisBj1brDcEkZw7QiZaGUpxk6mzs",
  "key17": "4r7mTJhFGsg4DFJrZDd6sVNS7R9bk3rABWRG67XMxnhXKXfQT1iCqbFbVuUWxSL4rmEud6N6D65wZRMRka2r1vQz",
  "key18": "DK14kPbnfwxwPp6Z8jNoxEBUKpGf1WZVEX3P3tN3TrQkTaWZgFcqfyR4QEBamvEZGcnynoWqFh3B1BDBSThKcuJ",
  "key19": "51Y1KmrVrQfsZSNJ2yYjBGiANXtNn7tbWg74ZcPPboavKV8cNJjW1tuFK3MPbGwt7FGs465A9Qbbu8oNK47XG9Nk",
  "key20": "3n3XXahBCcujMU7zYY9VPBmj4zEy9XwJTSKonwWsuArvS2CtssA37dhVhu85ziaxBYTTQ1VdYACjytuKnyqexE5g",
  "key21": "67mkH5Lj98Wbo6f9yBMBufV6fvsucT2DJ7SJZmnS88Xw5A4Ma5ufEDH17f3qRouJEMapBXQNFyJULQGsgX9rAERa",
  "key22": "5BnJECWzLbrvfrKr5VBfVewtu4WwAkGpBhAWaH8PAnsjrxhGvmqR5UeaPcTCst9JJgHbKxGhQB9Gw6chmm2xt2nM",
  "key23": "nMeL8vJ8osPWWJvWBjHbf8EkmvbK2srznP36Dk4b1wBs1UWRtAGG2fHb3dHBqZgS73NAdKg5UdEmqUQM3HcCpwF",
  "key24": "638hZFVJJSuuzAn52pPJcekpP4K13Ce41KNog4mSUuANpScYmCNbtaB7Yn7LfsrFbuunZSuYXBGeJVLVrKJoFL7v",
  "key25": "4ARGVA54S6wKGBWpbvxFhEG1Htn89YYWfx4vz3rYAB54N9WXetDW7mV3oj65MdcjE3JZFkWtprTJksQwP616f4rR",
  "key26": "4XGBGapUG43E6qFzwwC3WaRbaGW7bYEyZbxLefsupxiGpQBn7tzGx5kWSkWatzuVzCkaauHhESHaNW6qFcMGGPx6",
  "key27": "4QaKJFCv9Etmahr38BXSiKqixDpg3aQPyuZaeT8CX7XVUCDLX15uQmLCfjDUY9Fff2sz37g2ySpxW9Gv1BJU46ee",
  "key28": "2iKJxFaU6s767gt6HkmwtvarFknZENMx3w25ocRdoQzfD3sRNJvr29AJ3yiMvZYqa5tiK5kHwpBirmFQs9AMQMAj",
  "key29": "52FCkGUaVp6bDFpZYj5nDrHkFwZnj9GgdFdSGgxv4MhE5QrzXCTdeWrDaUanLjAEek8mRGwUiTct4P9oY5avit3q",
  "key30": "43PNkydTh1unmKW9fKmT5J5Pxbpveq1sETVSMuaCgAiFvwJcvaQjED7ZMW8u4bfuNWgDigvkavCFX7iqE8tgkgxk",
  "key31": "5xmqhQr4CDhe6GEieFHe9XBPMvwsxA6GGNJRPYoKq23SwgW2NQp5G9FhAztQwHfygUqvdD2wqGKNTwL2hC4fSofS",
  "key32": "ejFKzVmoMpaboNLFKd61Psiuv8ZgYYpJWVo2j84kF4uysaqmi5vsguKH8dDxunH3dQs2aDeNHXGxPX8GzyBDAvK",
  "key33": "3QYfAbZvHFp9a8xxyLQfDdcbtmCkPePXBR3thtF6Hc8V3c7GpDcMKEFrkQNhpY1PNQn9Zd1AHyeZKboxztmz4zqX",
  "key34": "43ftwCsp7U6inGV3nPfbNzfWkMydxFQ52A8YoV4EUbN2c6ZtpkxZxbUL4W6eazPb3tjPbJJWHXR9YFmAyyweE5pm",
  "key35": "NubSAh1Ws3min1D7b2Gow6DUW3V4FWcqz5A1Uz5wHsAGJcKeTx5A85qBCRm5cWRFK9FKQqabvEYSw7MV7cG5CdD",
  "key36": "5KrVwyPbAo2UZa5QyzAEdxDBHoNSQ2GNpRYeE6ZLUxpCHVGV7FoTnSkX6WX49Aaj1Brywz4A6NBx4kT7TxVCBaJN",
  "key37": "4cZNpmzcE1TCmJoFePK2d1aK2Zugbm6WuB4FB7uV365pYZAGnDeuR9WMEyB4Xhb82x3ckGj27nWZ3PLW3gQdSCsB",
  "key38": "2pg8KZZbbKh8pjW8H9M37SYoBtF4KytWq9U5BDdmhc6HFPoJRTLoudLoxNkHefE2vqdsABcAxBnsSH1aWufcN1on",
  "key39": "5tx15dQEW2uDBU248ew8kYoxwBrGwrUrUjXz8PDTuTNz9Euk62yhzT3KsJL33q3V4CVo8xE2j4puFo9ZQyug4EMT",
  "key40": "5ztENavVM7A2nmJ4NF1EHsnSLUQ6yuipNgmVGAVwrcR5JNrTK6wkWReipyH8G6DjTH2Z89uGRHkkVNAMQpqG6Fou",
  "key41": "2b3BHFaUqbDtU7uscUuP82j9LwwTQX5fBjLbfwmcxNCsFro6kG22Pip1iPJrVNn8mt2HonPbhZewRhmRcc6nHvWj",
  "key42": "3yJCRovfawyrFAEu8jLF4pbzKxX9cHkuXaBQqkdanzeZd5Wiwq4pksKW5JyznhGNd3CEPXcVKsyK67HEv3z5KqPA",
  "key43": "4k6DShpwh2hq2c96z4m8HBP8m5gNRyaQWD3Qevs528SVnnnecCpkKxtqFgAi9sfVtWdbLnE2fa8wFXJFq3N6k6iD",
  "key44": "4kTWUzM4aiYwR3rS1kW42GRFeDwQTLCvvtzh7gtp3AxnweQsGqf2tLZVKaE6vVt4UwKyyJMmhUr6DHK5cmgQW4QJ",
  "key45": "5i1YJoCwDzbtFeJx3YN8rzJ6mHSJbe7fRTxkxeC7tL3H5YHn3NDcLBSqeP6t3qCbrWCufKsug58aVHqd2SrDbgBk",
  "key46": "3juJGJgzFAo2tKBGXCpA797S2PqpkpGn6KDwzv3EB5XLca1JzeaMukMQmCdAfysdTLAswWuUh431B5RFZgkijBLy",
  "key47": "2iBxZJQKjv4bxuYp53UkhUHM5o71DpHbSLGrnjS8DTYFS3gcMmb2bAu78odA1jKoy9dYjRUUrjBqr8cdhqgfyszR"
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
