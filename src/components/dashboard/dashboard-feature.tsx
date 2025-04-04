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
    "XsaWUZuZ5CCQpSCKtGqoKXg3LT8DNifVDrKnpMps9Lj4X5EShHGuA3xFjNpi965GcZrg6eQY9HsqBPmn9a482EG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PDzoRgGFRzQEr9JnncREYXgyvavnR3eHGeCqobPmUshAj9TZ2jHQKT32UkYWQx9WttfVULUVnk6QKVL9WRzfmR9",
  "key1": "4JBseVgqjF5MobhaGAwFWFrNPFqXaAKqzkVazzoKmmqLTJnUGx81CX1os6UGr3tZ5iVZmbKLnCrTKpQuPcfWfySw",
  "key2": "5FWmx5fkNPtKB1GJTCak7LZr8BZrYhuR3GzoBJgfTXyHyCHzRQuavfovw4ojJDxLZ7uMomNd45uhsQQzJn1FykB2",
  "key3": "3hoaU7NGCdCP1ZgWbWkt66yrmsQfjxpeh9rerJpdoGyKakqX5SuCRQok4cDXAygFMjh9v9uW7LjJ51X7sWfFeTgu",
  "key4": "8taYqupfZu2Ey1mFN4bQYiR9WxMX4gee7Pt3S67uwzmD1gQQCN2kDBtgnBf2oypH94kVce42R1NmRYe9eSdNwkW",
  "key5": "T4fdcN5WqiZ8Wk2CN5PzNxfWWuHvrkoAutYcoDWqSzshaPDoqGZYRZpXUmjkZjr3brjKN9Wsq2RLLS6vXXsY2CW",
  "key6": "2EyBsEw2k8HJbLqH6XJeMMiBHS6cKmhEv4agK5cXJ76MP93HpmdrQQ2wfcPAgYcp1GTK1gY4ufxg2M3qVxTULArS",
  "key7": "JurcDfimD3PsuJrarha25HoDPkGw8k1W3kMEM1BJRXUD6ZQd4PNoGcWCwJ5mafzQdACmJdL6zuDSv6BoU6Y7AQP",
  "key8": "zxBHwCuafZzabKg8xMtGDMw14KXYYQvW25md8KBLrUsFm11haEzQEBqhTfKdU19K2mp77VAXiUV4RZiuQZsmTnj",
  "key9": "428dJDadimNmzVuNPLg1eD5mHDpp5CJs1sGEHW6whiJg4JcCvz4gJwbJ4aLLHXQt25g3kSwZJHRcrTHqJ4oizNAg",
  "key10": "2cEoHieLCiwEJDkgjiDjDpKzx16whSNZ87sqe1o3wgqad4PRmyhdiiWxbbNvqiZd1tjC7TCtUyZcNfjjZbXAo89M",
  "key11": "5QUNG6MTGU6agxMvV2nJhRUQjAUrVZUia3cUQhhe9zDGy9mgabD8c2H31ti7DwCKRbKiCqLvZReEGSg9ijz3fuSL",
  "key12": "2dWKztPJEZAWQwdiY5qZH7Fd72oEGMo6E6TiX4bkhgcYYASa21BtAF7KcGkCA5oNT2PUUw9SY97nAc5DsXWyFZZU",
  "key13": "2FmmaYmF2bcBTTZmR9kKgNr3sovY15ViiPgR4NoSw4wnoALFLE1UdDSr4ANwioeJR4pVnNwGuUfo3oHUMyxGQtU6",
  "key14": "5sub4dTEPBL45MEgt1JtTen4XYKobF1M5RHVxLMHfitz2dBE2JsyLmHWQxrSCHhTHEV7GLfa3Nr6jQ9o11EanPz2",
  "key15": "42nTm2NMgHdjtrocnyba6KVc1advdSWLf1HZGMszGiWFTPePBwCKoUxtcs2yAa6bwkKtBt2aSzRre3qXVh1Qq5vD",
  "key16": "hesSSek7NyBZZn5tuf87GT8prKqC7sesLwcfAJrP9dNT2qGeHsWsanpnXg73g8LanBRjSJLN1syMMJPpCmYvxcF",
  "key17": "5K1pZXViReGPwQeBWXrhQV6SEzmt1grE2PmS6ftyc5mpHEEKNWe5RSPL5A8ogY8i1dxt3fwgVA2Ne3Jd4TmMpjzc",
  "key18": "2AnxiziehsB5EJ5ZGgTXVBbSsgXuwQCE5MJaFDAa1xpZfBwF2b8JjhCsD3FZVzXGsxQoMdbZovymD3oWNvrhm6mz",
  "key19": "5vp3XzCtsbEcE549qk9L9ZnzrL9ELwav5SNn8DqEC6GtAyVrTJ7cq6LkoEjysuvPd9Nkxwk1RSrTYhL3KvLkrup4",
  "key20": "5W6LeY9DQLJzs88fDaizfxaUYB3tGzu8C3M1QQEcfL4z2VHEAST4ZQtWVEu3PBweayR1TWS2mDrcsFjwrwwo2bAH",
  "key21": "fMge24GKYyHuSv4mLBEmqHxpcTY7BQAL4CwbrpeYWzxtGBKKvYZipNzdXaLL9A4RDtyyR75MFhP5wvHPx9HZgER",
  "key22": "3ZTsp2dhTC3axAkGeefzKP11cxPv1MQXDQ5DkdF1Wf2F3X1kV8JmTvCJaQTd6UaADUzzdxnMrtCgZRj6uLX2sWtx",
  "key23": "5mg9ACRUete2sMam2s1oAnkJNPpa1zXRDFbLTWNX1whh8gW3oka6TwjqJgsBPQyfMtL6JmTmL9eJfSkqCgCVhKCJ",
  "key24": "4vJpkK5uphmKmdZpiqaHzn8dLmQ38LnjkostvvHKLeEnuwkM29gD4uish28ZBNrJxegjmvqvWh77NdkenpD73ir5",
  "key25": "2D82N1wjwfgyBLRjtkEMHkPPa8ac9mrZYXFgWQNvC3i4bgn7PP6Ug7XRMJ6Mm7b4Xsa7GHZyQaPCdQVVUAdmEurg",
  "key26": "4rMPpTVBDGnV5haCkhN8cEM8vfoX2Ny9V4mdcomxv2XC3stPvQCPmJWe9HVxRG72duSvgZWq2GDD3mrz7s711aBM",
  "key27": "5cQ87Trdgvdqnhedhgtp4ZPoHu3ZNT5XGML8YtSXAM5XAdoo7t7kQvKwj6ezWjGMiYTSnZLBPrnb56XprfNig1cU",
  "key28": "5XJGRZioMcur7FEybvPzQFar3F7wZMepKxX7Y33GDy5guz9TJkMqzykR1wXS6XENufNrbQLLcBmb7Sov5q4r37to",
  "key29": "4CrP8LadcKJ7qfnuReEuZuQ4b4NHwCW4x1hu1Cvz1ou19JDNpjYgbRpcZfDxjdS1AFxEfFx3q997azY3foDGC4Ui",
  "key30": "xShAmsuhvP158Daix6PKrAAHCeQMotCDfu72FXjkXU1DRznbbYszqC9P6KD9WXzqCTw3BT86agM9NPmLjFKApAB",
  "key31": "42uDKM7WSv5nsfLUnj1vF725TquqE2y8UfNq3QP2Lvku8uhdv1V4HxdrhLuFxMsnSgHVTpqEKiKigF2e9m5J9eaR",
  "key32": "45qShHifKKntQ5vx77B16tQF97P5SY9qnWh2G4wi8V18MaAid9iWwnZ9pdKf6Z8MLcf4iCc4whHrGb2GNPazqHwQ",
  "key33": "2EENfLNfCbSWNLk2U6fXkNkZqmvk67wtwXkXBZXYCTP2TmsNCDqYFh1ZQ7a5Sgd6KZgjoZk9CdDH8XfSTmAS6drB",
  "key34": "4bkrrJfGmW2u58wPMbdnEHBYvXekzUMGP3fF7vRxaqPjPU3TSnSQ5cRdqnLTiZWbYg36wTqw3Y6zcFdrZdg8Vpad",
  "key35": "5njrUwhdzGqBUo9ZjCvqbVpW5TgBxxcEp8TZgGdQrMdw8mcZudPVMMGHpnutXc8PvXPTN1My735f7Xzx7E6PycHr",
  "key36": "2iCn69HbpihjAD4t1Xb16WNPvsjgr5X98yNUNiqqmuTmbV81bugF7PdQNtYkAgW9vw6D44Gbo1UbH4rb2Hawr2rJ",
  "key37": "3aTCqoc6NqHwvP9DeK294NbWwiAnFrmXnAp1ocS8rnUH6S2DBF4Wag3BpYM7ARwHHB8wud1B97cEzAhdy4f53tKZ",
  "key38": "4K4scsrjjZSuFGyziRaaW5LMMLhF5X32QysXb1VBWLawWvdgUYpvUGDoFp5cScJQDcgvANU5oY9vhxQFQB8v3vz5",
  "key39": "36K3Ce5xWTvyZ1wZBonAkppvjLGnycMJiqNpYBXBEnmqzYiTByYgkhKkd2wWk8TejDdHqtBHsKHKf7ZzKWGTu95M",
  "key40": "u5Yo68EkJi8ESo75GxQcf5KVm6yWLt5LsAEhUnq962CJKQmuFFkffDxPPme8wD2aaGWPP1rGrEFNFGPpCJZ3y4C",
  "key41": "2x48ZrUEB67crbNsTWdiz2vuhUGvdRr19ckzfat8DMT7oQLqqjeVPgpStEmKted5rErScssuVhNssoTWjxp49dD5",
  "key42": "43B6UH5h9SKsTDcGCbBTQgLCYGB22KF2uwspAN8roBqG8uB4MC8ZdNMCwJMh6JTKk5Jq5ZDGoQ9JfGNZ5fTWAUcU",
  "key43": "3kMbh5nPhXXPYvMi6oFVHA15ukQmZoHdCS9UyxdwkWkHymPLhwHkh4fKreLKz9JxRDBE4Cx8AAwu5ooeod1VsR8B",
  "key44": "tpLfeWrWmseX5K3r4N3vLRxnjpHScksQtPqwV8b96HbMwbRPEW89bfvzqpCGrNHSjtVwr1aiSPHHzMVx27n9L9t",
  "key45": "3GAK8uCeKNvdvxfyMNxC6DS8ZhzDzFrtQRF3vj1Kynme6Wzhn7CychdQqqcx5h7gbRTQncQriasjYnUhi4qMdV8B"
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
