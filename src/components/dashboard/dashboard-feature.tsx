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
    "4ASwcQDAbMAnDzAsQBMRND2wo3hAMupdbNVjevktniyCqqEHATzPZQJsSvhnhW88dSvdK7c62m458cgGXCw2rB9z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vvEWYfCTdtHT7qWjZxR4rpnpf8d27thtYtHeizabSRNN3mwbA166Ai7JjyUXJKyVLikDmS83RTL45g6vyeq83z5",
  "key1": "2dYcfAgwthxLDNUsuXUFrQPaFAQdQmNLFYH258V4AEXZ75TCSt5AnqH5V2kno6mDwVnjeHp877ckyxNfrrfjUGgw",
  "key2": "4s3Hs7JnVkKFMv3qTMa2gUiCBF4BGX3w64vHY79pBhVjdxdqjA9Ti7v9xvdMqW8ZK54wZrzaYh765FQ7LmWpM3T7",
  "key3": "4d7RpTLjro6nTvHeME7d9u8RLm6g9e65vBb8Ksk1S5CToPdVPZJUCGEYYvf8z5SxoJm7aHdnSy19bW4YFXg7CNtu",
  "key4": "26i2EhNoc7n6UTNzApAkc3pBvzwsS9sXsJAGhKWzYSJYJpbAUAbYkW93aMaN7pitjFB92cBYhm11an4kXJSFmzLi",
  "key5": "3E7Ecj2rvAM1tU4sdBKPeGJS21BJ6hYX1LhjgBKUkHfnhr5xZ7tLLHG5ceL3UnzL27vPF1xn6Sa9raDpazUqWtxe",
  "key6": "kjPrfU42BwHohpKaJ7v7VzqR5dA3itXUxZbrNvq1iAj9WCpvJGiXw5EAifWcJuhKvEg1fc1FhYPRKQXQwhLs1mf",
  "key7": "2VhNbUaKMW3jAXLbS7KAB9eanFcMj9WfJjyrGVSXXkHNKcJ5epPqHcakSZ6bMb9syWiVyvWyDCoNBKs9UnS574Cj",
  "key8": "2UF4SdNsNaUDfmJaswGhS4Lj8XmnjUMRkc3q9EXdHRRZ6G78G7zRta6HmaykWqbhTVuvurVg1jpBGmTx8MsARZvZ",
  "key9": "4FmYQXmfD477jjht5DVajnUbFEutWkLdzD8Zqh8Z3v5n4YfJ9peLUhyHvZrygqBD2gTVXcCcoFSTv6YMyka2TKDg",
  "key10": "3WenDZv95bGgReLVKQt6zN1558pYi1sfUknzkfSzCtwjw6ZjnEaoBHV42H7kiguQLyMF2Dck3xWsGyNh3scdDHjh",
  "key11": "2nfN9nKKgUkDF4bFiRATXgDAeRG6qVsSezsqiHXrVebMuh48f1t2xPz9q5AVE8MdQbXP1RkBw8y5ZWv5BUDicAs6",
  "key12": "3ABeGCX4PsnNaF4TgtTx2gTYNoiLiBEMcFurN9pcCoLzRVwC4fGHi4Gi3otXhgJQhXNiGfDfSmmCpUN4guUfWez",
  "key13": "x1v5JX89WKNgc2Gq7Z833TDAVAwo9wUrJxDZf9JiTR8nKJxgBBLN7Ac2vJp34b22xdtSqkxEFKua9qS2ytcE8YE",
  "key14": "5tUAVuu4f84862EaEw96E51a7RPUrQ441FZXCFL7Ygc8Ea5kRwsNJFS6pvYUT2Czeot7b9LyGY5qEmh3X43YKumo",
  "key15": "2iHqpVbDcE3VkTfXwi4U45EDDHC4PNWJbkQKPRTYCFyw5rh3p98Lxvi1hbTgjQLULv2c1UvXnyGVVF5RmHVRsgRN",
  "key16": "2z7rfb6G4VaCL9ZAWNcQMcaUogwCQtWeCzgTyfgz4weZaZjv32FVDZzgX1F44TeCfUe4gzdA5V7nTrviH23aE1P5",
  "key17": "4eGpiH6fUrvp7Q941T6ZhSW3wqFe3W8M1q7pZVbKh12qMq1SetDjxLB7C69jCVr6yPg5ChoU9J6no9ewky9V7gEB",
  "key18": "26hFuQPScXFVnAn86fhXKgExm699EMSgCtXTMttRASHwfS6wiyWgos68grDre2om18nRgDaoBt7nvh6chkLNZ3sy",
  "key19": "4AEQoFnVKTat14EVTGSTwxsSc9THeFPYHyH4NEdNMwLGmvJLzy1ZJhiTP1jfBDsK3uPH47Gys7JiH9VUH7ej8XFB",
  "key20": "5b9KqmF3nP2XcGaZbqftAWqwCLapmsJEVL2Lv2FQHznoDb4J6et2PZwXqgjpkmzJkZrRALz9msp9zjzKhJFHBkow",
  "key21": "3xLm4bc9FYmVpCo5jw2gCozWzAr5xyQCZxF6xzLUWDK4QwxE6zqQCRHjW2tm1xSB9NPx9veT3FEfz4qF2LoUPN7t",
  "key22": "3t1c9C6bSE4ZXfWjiCLMwegTXpj39QP1EJT6r8NtbYhoWjsTX3XAqEiF2RH9LGu1QshP4SJKZB7cWw6KjJzbJCkg",
  "key23": "YeCqM8uEsWPG22RJsn9Ro3LHvc2cCoh8naUJG7REAuVcS2HKqsbSgMXtgJSbNUF8KXQv5Jp7W3vywZNKTUdhEXb",
  "key24": "kDkVzW1jWrc2oGdnn2fbmytkK3YJ4ymaEYGnsLUomBekxHkgeeXqbAZC8YtFwE8BiHCRnwGGGR2xNNdtXAdfJB5",
  "key25": "3cWraLHmzuGjbW4aFFH3ajsAMfUufWoBhWa8niQ37PRByudLawAr1mG1fBePmfmZbEZFsgKG6PXuYsnRbnf1GJaQ",
  "key26": "3msCpgPchaAYaF7YrNAMtcWMFid9TQu8AzTNT8twSf1QDRdHQpSAvLstxxjNpT7BS6yH7AG6aGqMorp6VpocfaqC",
  "key27": "2TUyuo4LPrPifyb1er2U1tiuJbnRQg8LUmoB9T6fG5nQBeNRMvYCEd2ShAh9vNw6Jb2yaR132tMp9mH9ZZAGpQmd",
  "key28": "4tfbrQT9d1WUtjvQ5a2i6dZhLXuLN5DewfJNmLQxFqZQwEHsfzbaHp9aZMrVQzr2J27YRYN4rqi73dkGyfmzEF4y",
  "key29": "65ryqrh74tPv7EhSEhkF1uaYSNgnB16uR28eNwBamxNu9UetsSYnTjwoS6XFR43M75zqABM4BnEDfbQJpUmBVbc7",
  "key30": "3ctqjtmbuarRFDHuKYWNmdyhabmXuWAYoZ6pVxHWRdgrPKwTHiq3SQAEEgYpf32eDpRVDF22igPkmrG781YhAGXD",
  "key31": "4MckV83XxeTExqjEk67NBZPseFv2v3YVEodfAtqkSF6yyyB1fL9FKiy8px64hAFvZgMLgSoARbAFjavwDYKdMyeq",
  "key32": "49sANWoM3skdhZH2nwbRsMMfzjJkezCTw2ncwy3dbhJMbDawVTAuVJ5ZBJt2gr69rbnemPrzhjYL6KEqfgynpaPt",
  "key33": "3ZdzBorjTePhZafXYwLwdPYbTUqoavv8JR9A7GovFWwtBUie3VPxE2V8D2E2MapEUnhYGZNo9LdPGrQ2JdtwQKDR",
  "key34": "3xvuqBsX4pzWwtKjhedjUHJz26WijBvXujfkXoZmxnqMinVsfBYo4AXLQiy1WSvxyHX43hv8jMgWbVEw4fZABkTJ",
  "key35": "Vsf2n5eCTMWmk99YuYNrSSVTRXRMaqTDGZn5FmmjSQw68ZonnKP5s7yfV3zzs4fZBSJc7FugDFZAujNSZqtiETG",
  "key36": "216N84y9yuMvvfrmht8RDS7dzENAZxkKcaeLwEgyRxSzDj14RikfTjT8PXefazyiv18YNnEu4Gzouii4zJboVyp6",
  "key37": "3Guc2WSRXdQCGCc75vhgFiqzyFvecQyYKF2uqCrbiJHd7ouH3ezBzvPnh2EvWgRrH3tZReHDpTfBhxuxLAXX64sP",
  "key38": "4J65x1fFLA5R9Z4F8UjFcTSyFc6QSBAxx8rgpvUuMoa5goooNWzgYS3tU18fRQTqMKeBWL98yKi79o8tstvFuqvz",
  "key39": "65AbTmhFpbUQDyiPEiBNe6oHeNk8T8bFYaxBu1qc9sdHx63VyhHqtBKTNrcJyKcyXs1LM4QNe2M5bTSjxf4Njgfw",
  "key40": "4RRFjGcXVKKtMZ6m2tk1dHLgGCdSNCA1Qz48MM1E4MixEEvwmL4esWcR2uZRngeTQiHocfzgqwHG5Rjr8HjUTWUE",
  "key41": "5EsmUD3dLYKL5heDK7gNTYP9w3qSyTYaihT2RtBDyAHYPNC4M6bfrho7aZ2LMy2R3KgzFuF82CoZ9hFxUzio4erd",
  "key42": "MZ7WA7G88xbiU2ne2U2mLirPoBRpAASqQESsr3uwZNocodqMTuTc1Kx63bQWDeQPpH1rhohYTzCwM6t2PL24daG",
  "key43": "5AC4NYkRghfDnJfU5LX9cGhfAWCD5u8UkEsgk75LRd6mD6y8AxFPCoMrt4HMjskWbCuxwAkvZViuC2BMqT1eehPP",
  "key44": "PXC5EGoPFSyxgCMVuy5BArt58E6NuH28nMr5c6h9RR4ATiL2x1m7QJHV1PvFsboPx9CLuEhNhRsJmGhPSi5KDAb",
  "key45": "2CSpqUYLppF7kY1dD8pVdFtWHJi7QGAqsscHQCGKmE4PfBL4qVk5zn4peAR8yTPvH7resXWgszzxgv5U1cetq7ak",
  "key46": "21BFxeBMRrfzhh98Q1gDzekjEFjhDXXH7T6PmpYUjd7ofEyPxrPu5dvmX2j9CWtkfMvfpKoZFoQiN3wNB8WcgPEg",
  "key47": "3amL3PDTFqkjgHnMhtQkhrCSSuBf6xwWbf1VGMCzatzqyYWhwcVCyFtXcg1cHxeeZAmTE9DGBojwWPkaBJPCzrML",
  "key48": "2Gos285JU2Hpv4yhzbTVq6ohp9TZDadrPcTg7ogtuo6PxXVzZBD5jng5ComVqCEcvdQtuYvwzGc2HbQBasxwByes"
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
