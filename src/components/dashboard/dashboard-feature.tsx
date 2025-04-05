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
    "AHWX4h3nAbuEJ7RpWvmAnnkhzUGA7jFsfGs7Qvq53DmjzbPEB2F43GTDN5E6KmeGVgkVoaBCcVxNKVcGgwvKmTn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "q1MwdU2a14s7UFm7gHQeZ16hx7Hoz5zK9GfDHkToKkwnVu7LsDdPS3wzHR286NN9jpdBvATnTJv72fhAEvZigtJ",
  "key1": "45vv73LQ4mF696TXJNRRYD27GQ65EDM5gwpGWUAnWjoHTBGobaRY42AXYPa5HumJWXB92j3XoFVctgcb4drEWXWd",
  "key2": "4szLWbo3hYh3rycuJxm2sZRwkfa4x6R4sKuZ69oc5LMuhZ7CXGudiQwUkPUF2pSmxJNU7pXTo8jnwYmBcm6ZdpHg",
  "key3": "41bJNcy4A13K3Wt3VQM2qYdFJDcNM9ECrgH67b8ByZSgfghbDL3tMuBJDhwSxototY34zfXhopqRKCtp1frRUyt5",
  "key4": "56Xx79eHQkm8uiLmU4hF1jvJQcAFGcaf69521EprktuvQcYbhKhU4YUfcbJMRMzMGe7QbCCGWkQ7pCPWgNxq4eza",
  "key5": "4zr9TrkzrLoYkHsF1r6SaFbdSaqu2hmNK65sA1gg3P678Xm9nSMsL2bwvs4qMe1MpJcPYM482p2azocGM1NZj7Y",
  "key6": "3wvsE4c8FqyF9pWTCXShdrRFRzrBhpqfpeXr5ZG1yhdp4f6RnUb7tdEugBTZAq9Ppmk2CDRLT1PR2A3hjbv94gdG",
  "key7": "4kffhGvMyyqSST9VhSHRM9MdsYGQPeBu1c3iRKAudzAkkiA5tY5d5BPrQZu4P8XhV1DNJ3AM7zVgkLQ5X5UZyB5s",
  "key8": "3h9oq3fUGfc3GQDPvdzsPv7qxM3qzhy88Q2Eq3LV6C6SaMtcT8X49EE6faeKYKVdcyB1osKJFT1EVefgi3NK1EBH",
  "key9": "3yqX2RqinCSmBtW1UpXndVLmai92iJN3DBXBqC6o2nBTAiCVRnYMZ3Pg7z7JJ8YSgFzf5CcMfbmYDTKwe45nZtzM",
  "key10": "5t6x8S6kqMhPtfjuxAn6RedW5qY3g8JAqRhPexX22MYQwiqkZx8fHgkkygbPwYwe6zTNqonQTchKX7pDGAKZXYMY",
  "key11": "21aKcQXdyvoaMZSyaGviuzucuP3dot2WvDj54JZZsCvdpTN9TKAk72D865ijDERrQLzmvSAjvBBkqnRaKayrTjUV",
  "key12": "3PkXUDGrkK3aJVtXKqgPGHWABfKuMqXHq6SDvuP5YGg1FYLomx6t8Y3ZFsquDT8RAeP5myYtiGbwYyJAojrVTAPc",
  "key13": "4aVs8UsHyHMsZGPSx3CdMReLCMLLBU6bGpyjRUfYpqvzBiboSc3KAJ34PD2wnVRjvLcsHtqA67724e7Z3CzPRZnU",
  "key14": "2s4JEoaFzNmiBNLaST5gQQdG32evaBceHNutWRhUNfwcJfFDebarSyNwWHUBxk2fnL6dgAPtiur5RUZK3a3EhkwK",
  "key15": "4dDzEnyq3Luc9ubwAeHr36stauXTtZe7rmiWaQ3WEVFoKQUgPwoD7hE4MU7ie3gABmjJ4v125Zmd96AWjt36R8cK",
  "key16": "4H5ug73aBB7CR8Toqfh6zVwSeKYT7YpZDprCXP4XjKDhaZ7Cx1aiChigWqRuY91XULmBAyXszm7r3fD4oXBwGXxL",
  "key17": "z9MC7b4n9pRLZcMWfbCorYMdykHMYctPFFGTC69nmHLeUHcGe1Bdnojhh9Umf7xLGizyvQhSE5QEfSrQkYrwiQr",
  "key18": "5joqBMarxNxzsoCVv8GKMLhWdDiAZMRixy43rFY9Kkfsqx8Pyo9CyT7hYCLShbUFnntAdJW9vJDZNvwSSw3Y1PXG",
  "key19": "2PyQhtmA4UFmszDVk6zGR2yMjViQ6eucMjzWWUPCyptHWKs9S1eU2burRfnnZhuZDTmxvf5XDvx6mXpCx5nQLp5T",
  "key20": "4y9w6FXNyVFPUx1CKS5WmuHSjrbFZLGWy3kmijZCDYX82Csgb4EatHMc7XdRvfrRV77dEyWVMZZvzFdBFbDXrtnU",
  "key21": "3Q4zNyLpYjg39Y5P82JZQMcZTDFSr7KhWjX14zASbXp8KjPoX5FiK47qJpYJfEuTw4KWjA3S5UKzWNcYcqEHLnyc",
  "key22": "32pdJMNLzaE6Uit5fdc7u63DcQvxkZYJT81CqRhGWTZns7ckgHAbDjcna9cEV5fANeRubHV3SYZ9gLbhZzHpH8BB",
  "key23": "4Sjt6FUCNHkFX3RuXiiwZLCMCJdpUkL4Hxsv6z6QPqmmUWpQhqA96KvGwk2GSJiatvRQ5ze2KsWcAzFxCTczzptb",
  "key24": "eqpqn6Cxo5Ja4qVPFLfWnYYBaJXfLBgfFJKm1jkmuyvHUSjB5gzNnqqTtZb2JC3tz7EEkrAuSX9oeEjdc9RACvt",
  "key25": "4MxJsb2JN5fd5MP2Pn73CDBeyM25ABsYrqHB4aSX5g9k16tp5AW7vW4G1Ljiu1WreZHb4JZcsriCjNZRFWD9mvaV",
  "key26": "2SbtdsDZhp4P2c12mYfujFQuSevtaqfWGLuZzv2qckPxGMk98wy4jq5diFz7PhymMEXjMTWEH9ks5g95kjeyapGh",
  "key27": "5bHPwuFDuovpfj75cjowy4HfVn4R4mD83AXpoFHSceryeFNezehWm72XFS5jToDqdPKjmpiCaZqEeDGWUMst8jq6",
  "key28": "3A6SUsZJx1zBjQ2QEDTmyTkYgBj9hBP9DbfJMu4nzMMPnq8AtUxPPcF9THjNqF77ZCow3698ZonyVZaZBDBTiPn6",
  "key29": "2EW9ae5H23ncuq4XbUaBuGGRksGF9Nc55VRexmyyscEPXkB6KtMyTmw8n91QgN4agrQ97k3rCoGgpDRmaMkJBBkH",
  "key30": "DqZpgRLKni4r6SFhuyxYUSRUM8iaijyEXroSehpxjjXmftshuHPiiUdm5zgSQiK6qxMi982zm6Ti18h4sUH4Vri",
  "key31": "2YH3gcaroEPyw3PWVjAyxirzSvPwcdtwygGWzxgpNzkrz2f691UHPpfMbY85F4vPuwNEWrM2iE56aE7Kpe6oMBjy",
  "key32": "24xvsYhKobZj4fE2ctf7EEuFcaNpVdMAEHEn8VZ5A3TU8TvNKnYp1kQ23u4KPit3WwGQqrwQ5grWyCBhY6Nrh3wA",
  "key33": "5umxuSKnfmx7nm5eT1LbeYMPrQTdm39jSp3u6L4uDmweATDoKsAMbdv5qum6jxSHP8RRLS3tvzoVoFuJ5aUxMTJS",
  "key34": "ZMwY99AjHy9waLKmBrWh7pn1PaxaTi6rknqfv2zUUsQndQMbwLnworT3fGVP1d2E4wH7DCCng4G1AQPb2tpXKvU",
  "key35": "4LtbUNJQrFQHKpk2vpFrzSg83Wk7CnxN2jYekasjXokLkYso2pz9DSGBUTYNBsDN2Qp57NV1keuqauP7SCCMh1xM",
  "key36": "2eEtk1PZtMobkXRsjL4pidkKbzq4Kc71gBoGb6bi19dsJt9zBAciPGZhUqGyWBFbaUzwTmguhnZkM8DRcHDDopyn",
  "key37": "5AXCLk2z6kEAmovAt34TuWc73xT53tZccKZZnLwq7SvQnrWNUiqLFvoDAUfryr68ce5nA4JJYENSBD5qsx8hNjey",
  "key38": "2Vq3Y6kWQS3FKerWGtpsrzuAaEXUE76oTw6cwsCXc7dSa7T4BxhMPvaitvN87KJXBtzVZorDy9vFdEB6BXLMjEZm",
  "key39": "2YkCRrPceWEPum9sxdJdRbWcez316cDK3w4VUPcpMCGHFCS2Tw8aecQrd7xCQC7qUCLPCo7Jh3pwHvFePxExYm3U",
  "key40": "3bkrGFhYPKPJ2u4Ej4EneZSiWzsE247mJusyoqQMU2NSEw9rFYUrG35qPMkkGe83Mo2QNZoKeGkfvSthSy42skdN",
  "key41": "2y3Ldoe7BKBHNr5ZUmcGHyEh7Gf87PtXkF4ewYxaVsZadpT1rZ4Nj8h1sjoEbesBr3nmuro2JRGzCowu2JnMrGDB",
  "key42": "k9EjhHNWJc655EvrZnABSXY857XAquUiEGgyW35ng7tL2KeFDCp7JkUEt3fmaJMXjntcMSkLwvYyKTm2Ln5hvDH"
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
