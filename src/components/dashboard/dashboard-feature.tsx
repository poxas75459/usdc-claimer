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
    "WoKoM2DExe89PdPjYpvTCRsqVyUVQosyjfhzCoKRnDhnFVKiipzf8xMJeH5AyaJwQjEm2ZRRP13WNVp3CMA61BL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qhstkG747phSsJn34nmRBoXJ8v1NGXnrndoPa8MEzeQTq2iiCVcm48K73q8LkChwqhPTEbEh6WhxpLRswBMbcLA",
  "key1": "299jGpDpQYkPLsK4ox4LoLrG4SB82Egh3v774HXTeywa9ehFMWfmrxLvQ78jjPfEEtusD2dbuHppFbispkSv9nFD",
  "key2": "5UgufiChuzz9HeN1JgNFufQZTJZ4unm1AUAJW8N2HASNggJe1reMJCpCNBN5DXYcwvLLwgDFvkCRXDbTmHxrz8Mn",
  "key3": "3QFnm5qCRZcoo2RJzppkZn8g5dW2MVhuVjG61ZU8f3GDe9qAfrfqqGNTt1VEQANrHGpg2d8S8fjKSd4sHQLfVoPJ",
  "key4": "JiJreq8yZdRF5aS6CyPdCBVr2xDP99SxEz5zg6CENux7kjzkMm71gipeXvX3LTFQWfUm6giotFxASnCUKzHvDnx",
  "key5": "2TWi73Ur9b8pDfxHqaAc426B1triBiWHcx7DHcwXRiroNaBiDWhoJtV6ittLtLbMA3jRH6SCuZTc6jAR56iM7GEK",
  "key6": "2h4r8eJ89JhGEoA7AP8n38PeBhWDSU6Ht8VrmWkAaVZrjvicoGjBUrd5tWV1DPGyAcR681XQADkGLm7jUw2BdL7X",
  "key7": "3McEYpKH2jX4VauEA6JBQWAAkmkxCF8J7PMSa2AVgnSk1iRTzyBnk8BnjMZ4oyqewVwjqeEWtLjaMSZWncjY8DHc",
  "key8": "3ydqdoL8qH6d6HXrz7W8JxtLKxUKWDRpZsC5vhwDV2UjkxVe2C8QqeorGL4fkZHH4K61qstK9XPx4GTdqPmaf1ML",
  "key9": "d6CQvJWHPrtNVfRkxDJja4Qvy9eD9j77PNUdFVD1xzCHYW6donwwftY216W6eJe9Rz3L69Z1SAeCKsZtbDPBc8V",
  "key10": "SUzwwT6yyQvJxRdZ36kRtV13uq55cCcbpR27VEhEufgQEPxf2okgEnru1SaSMNSFpmhdXN9p9dmsErJ8Vqfu7bv",
  "key11": "oPpYYaMVosFfwhbQ7aMCGAmQYJTJhA1mSoHHg9FezVCtZb8PytbRZpyKU8hyzQnNfjyuuNHbbcvQSrsrBgk61tR",
  "key12": "2EBXRqgvHU9G2wauXx5V5sbQueACAiwdpV6yn3RJefD63zif4G4PCgZsTJydJSXS849HhxiMC3cPj8VvqV1Gv7sv",
  "key13": "5jFiJ9SuUiCBwzXaFRYAz47TbyGdqHsT2e4EVeC8mwP9BdnWHkiSJ5g7hqgcaZvSAHuQtxmoD6mjK18Mkfyu9wbb",
  "key14": "4q3gndd2k6uojei72YwFpVbbiTYPL5KHHGMuqPsujev8ih8xaTFAqqvAjsNqmyaWa1WKqsXBrxUcXGFtcestH2tG",
  "key15": "21MjBNGYC5Pv7fWATYDC8dhGxmeHYW34GM17Vtd2k2HrSoGNZvDNuYBbiBgFgtupHng3d5vUYsXrqAeZH14GVb3E",
  "key16": "2gLWKysZyVadgnAkVCKrrnaZfGrq8ja7bh9Ctt6cx5rFdfJrFN2hhd1Zap8eHD84DH2FqRVaFiT57hdFNwBtngkN",
  "key17": "4hHmx7f7CK5yKzQmWzbeWn2nToY1FZUW4Y5xsTx76JHytSXy63DXF2LaH2nxQW5GG3Fe7Pjr2FAim7A2uc21wCN8",
  "key18": "63Sj8EzcFUrnEzcYQvEdJ3ohhaHpTepXVPTpJsXWT9oJ47e5RsbAbkCcXky88p2ToWHxZ417czZbHr6P86ojN3CS",
  "key19": "3TBANBNFknETRMPWnb84FRuKxAoRRtWfU8YzbtYzLYEEWa42AwNdKypFukbpem5mGB5eGsa5rHU4XKutSdrfebnn",
  "key20": "4qscuStKnrBcSQHaowRuCt6EETG7H5WLoTxpVZ3SkFMWZ4RcrJXzeRvzAL8vEcpwrvDy9Zjran39yeCTvWUxp11R",
  "key21": "55MPYf3QfujSzS6q5d1sZDh3t4Qy9TdzkQHgJcJWEEQ4rCGSsiBWgJwyB945v5DbdvU6DH6Q9XkwrQQw34GcGWvL",
  "key22": "3dkhoTKeZy7qFaizdw1rkfyV2qNirfhNahHTaa1PVTYDM6QaRPGc4pjPkgwSp8Hze5XzCn2cXuAjCVKUgVnDFTJp",
  "key23": "2GWV4dua9Z7HAoQ3wERCixycxgSAon9d5kqd7ca6iyBi4QibzBA2UEWWBqCvYmCPH8tukbgrxa5VvcujZaqgR5Yt",
  "key24": "56uSxTaSpanZdVjNfwGEKTjrkQfrBEUwUT9nqwKMvzf5vYrR66y9NUUF93KBgiyzNWtzfjbmXa6fQoHdyigjaQgN",
  "key25": "2aaBqhboVaT5boHmFz3PifaTymjqVETYpYn4HDE9YMevL3F57y7XCXmjezNYiphCLgpeHjRtA5ftHpJeyhdi9fNJ",
  "key26": "47jUT8KMtGaU2GE89PGgQXzUxxiQHFxpaG4awucH1wK5Uahy6DeoPCscbgWwVvgZBeMwU2UEvYTNhhkvetXzEKeq",
  "key27": "nzgmLMB4W9TP6DqNFMAsPz6mvq3C7JRTxtcq3EE2zv9SnMXkDRgxwR5m57PWt44AUFZnDKY1CHDuWzNFvqwmAEm",
  "key28": "3L8q7mVD1ssN6HnrkLs3pMgmcZpG7Fj7zHgtZGfPrPPjtYV8QA4VGMP5LothcMws1UuA7KX5pMAgMpj6KiuPh4QE",
  "key29": "2TcCh6VP3xmuTXciXpC1LBWuLsBPdX3ibjijLqktWiajMGWU6C6EDRwdcHvVn9fPXzbVAkS9PyLQc1cBzuPBwhGk",
  "key30": "3p3j5s24dSe3K3pAVUHnpp1LTVhQfpv3gHoHGZNrewasXtw561khgxyumfSJ6dwGqkKkoLtPyA6qxx3eHFWjCMbY",
  "key31": "5LooDFsiBrcwPjPh2vuZb3p1KwppDbiWuWrQrygjS9RmSdhjwUWoyJKvFZ6UAci8kvCHrhVVWDD4unw74EsJgxCM",
  "key32": "3X8YXoD7a22vtCkKamhR55EAfEKGbmF3GYf12pJiZfMbSwVEEPeHHPUs7s27KoyQhvjFfn11bai8UTW731seVs7P"
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
