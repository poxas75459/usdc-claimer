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
    "WKLTehUCbp2SXWFv62hda4GCc8fWcEdjkkLMGabDXivBaaZe5PWaodm1dXbNumWB6MczFDKQUSp8nXnHviJURZX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LpAq8UQUV1w2YGSvXBtvNDdTMx5pU4tGseuT5CjDPMTPbBhAEMnYDNnFXxLQmAwKxgpJ3X6ahFD39dYi8yUkTSb",
  "key1": "2ckJNkYXHBs3EPbcx5k9EKYJ7bUeZDgHhownDZHAh5f7QTpv3CpVrwRsomM3y2Dg4rPsNxw5LXKJZY9qT17WFGqg",
  "key2": "5XH5FLkywqPuD4RH76HAmFFqpcz6TNhMqczXg2j7jYh9dq4SkTFiAWHkCesfFCX6xn3HE6bJnwd7PG5k8qBT5v1i",
  "key3": "3PwvbSsUFZLp1ryTmLS9UmWnueVYZaA4A8uZhCkrM3JkfwzUtv21BaBwGQ8WyrEwXAtbAZyDrTTErDR49mu1pk3c",
  "key4": "65xQxDG3wGteeoF3xmkz7Uxbc41P93uuaDy4WyVhRjLZWvHyQjCnnSDZivvKkaN2wFxr1At8P8tNZ3CU1BpsXDQy",
  "key5": "34KLD6jM6WBtNYt5vTzmqe2b4RUnZ1gbccmykNrJMiBVKaMRYmS6wNU34o11dChnjXMPRNRcpq2svpi751ERtb7a",
  "key6": "3zfcbHNGgAEseSs9pFYhfxmD35b1aQNHRHyhM4MoPwG7qZSKA1eKJbD7z4Cpn5ETJjDwXUa5c79hJCNMCrpnmyF",
  "key7": "255m7UwwjWM79Y84m9ZXePuF5FK8zm224DRKuCTeT2NBsic9nKuwseKkUoSVg65tZtjWPXQFLbNQ3ZmstetJVRFe",
  "key8": "34x44ezc7Z6gV2FwPrXgMm67Rp7gkzoaQ68s2pT2pFU27wgAtL6BH48ccsUz8kVDypM4eYB9pLgwvfFL1Pdoag3Z",
  "key9": "5TYta8FDrgQhfYGDS3L98uwZmbQ8JRTE6ukT6M1kBeD3oaoDWSmjN1fAdRx14UsjvrnTioCRj4E7MKGEBUMXjy2j",
  "key10": "3uKWg1wVnjNN7Yq6hBB2u1oQwJVe1fn4uXFVcSwLScZ9VBMAxdic8bVaW41Jz2rkyZRhX1Jp7q8j5SP5ma9bfkNN",
  "key11": "35ae43LGDvwhrQTPDUBBnen6pZPHhPWpnFtycu9fCGSyrzCnYZ43MGTGWUpLjPZUkK5ueKTZHrUbbssLFDaxv5bz",
  "key12": "5csYtWzP7nY8jriyXS99cRTThLGP9HGrja17r8XHnnd5QP1iGToVQtFs7FGXSepuALcTEWxqUzTF5XYpAhzTraiV",
  "key13": "Fkn9cm3Pkz4BexfC9cuan7a4iCTnsqJKaExBsJ3Km71uFn18Nuvw1WJy6yeV99jQzKMJcfxBUrxAfnvrHVZMTZt",
  "key14": "3KsRB1xxv815J3T7qRCLU5xXP9uy3jA6vz9VonbR47kFrPm38REkwksCQkipQbPJNCXwnPb7SFMKUUuron19Myzo",
  "key15": "5JAoP3PANg713nBH4sG2Q3v1HJeJeFpyq3nhjmjRVyv25TxivempLM7Kx1eeVJ7b5MRc3E2rUZLtmwhf8HmaYjUG",
  "key16": "4ENn3D9xm9x3JcQinvMs4kHJrP9gDK5hhBDg5KKSN4PzrThh8hsa8StYgCx2rZkNBX3Gu1SCPjEySi6vF8zV7UpZ",
  "key17": "4N5aqYHNfNhe1zdya8fHwUNusHwtHS4ba4jr8rqtownpXzgdfVDYjgjbvV9ve1hHntGqK67Stqd7ydSvXxtRrNFh",
  "key18": "2zSThSNZxvzSAvyvxBU5DonsdBDDW8ZLAQdm6hxrKxSqX4tz4apRqMZTomrCGzKzf2cvvXaqK3d3QZQTkMyxrW4z",
  "key19": "634LLmEwLFWKGCJMWtRjYv9Z2ZntNoaozJZXrZyx3pUvs5L3uCFHLbiUUaMRmekRXiNUWTn79MQR4c2hHFdgJatR",
  "key20": "X6vndAr4uwmyDJjv6XxoUyHJeUULAr8hqFbUNuXHVpdW5z8vCvNveud6AnaCoyo4NZGPrTpp67wzS79BbjdmSKp",
  "key21": "4V3VfVChEW3edbYXabiFPKkppHZSnCpUyY167guGXCsKbcrU8cHisE5tHmnBqaG3r1qyyxLVme6yknTvNuYHXEWR",
  "key22": "4q1RQC8cexmijqumpcy4W71eqNNSuguDRdCTjvPLwMAjGnRuhjLLCaaujYunKuecFMcVC9dnzkfoqKPJKd2pYMRM",
  "key23": "4abNNLkAE2NaafqrhBdyWr3N9BSW2cSejjt9djidXCptyMyLJ5GFDo774vhcAzck3Auz6HUvGuiZyaoJQtnYGJwn",
  "key24": "4H7HDQTWPNcXHT1DhXnMnKU72yLjZqrkxtmoSVaTJ8fHcRPxwzDnt58BpX1JuxG2SoFDbELVhq1e9pFXRTDyio6E",
  "key25": "2g9EqyTBxQ9hoRdWQvngGD91yr2eKphEvXMbJDcqCaiDptAjNnLo1GCBUtLNFsJVF6BwV8BFGnE5e4LsEgBHK5uS",
  "key26": "5DxX1e1Wubtchsv64cQbctYqcgVZB5w3dyMXYxMkbtHEKcUWzPs3NGQkJJC944tWkMQ3AjoCwYgdXRe78LhhAiWg",
  "key27": "5jRQxqwADm5yq2AqXayaAzediCr8AUC1hgzKPkWWgHVnvkGYhZVHZyyM3DeYuacnJRpLNi4ZZJAugqqxcjS325vg",
  "key28": "56RMTJVDSuFRAytYTo15hBEH3wS9EQbR2FjhMZu3XcuNWJia4us3JtAEDHTnoSyHh4dwKCNyo3fwDyT1fB2HoqW8",
  "key29": "2YJRwK24d31W44Kkh3foRdQBQeYZp55LUqpQyuSyYwFnmueZ4Y7wzmLjhGht9Dem1p56YGWABcwjyYFUS9w2wFRx",
  "key30": "5kRkYp2HJfDdzE8jkvkB27Xm9eakD5tshoy7PPpdFYbKYJJNrCB3QqbPtZqP6rjyuBk6h3VR2VRREFUFkRDrBMKf",
  "key31": "5HVxiXw2t8LwedgBgySESAP1U1syRn2dR8g6mwrNcJPdtEiqAXf9s7oqRJ5ckCJ7gV2tEvbni3ceGnDr1mbjUwbz",
  "key32": "h2CpshWYYN9DRMDS2NabtShBKSVntRCit7bhY4sTJgXD5P9dgcNEouhm3AwL3hPBGajiKoqeCpAWnpTt5jnF17G",
  "key33": "3LWM4DjUpkjudQAELftgchaMkqCUanXtaWa3MmmMaxuPuTDU2HXguDU6woCiewi6AimeYBgLobWj1AEAnJTtroNR",
  "key34": "36W6p68dK6V9x7E5ug9J26SSKZHvGAK4dbajvhvULregT2qSsS4EC1PSgp2nsjsyca4QmNWuC1MWcnKsU7jQRaPs",
  "key35": "5kbHLFKxKZvVs6nAiwJRfR8VyoTerM4L7YeDdPNh5Brs6wgSU2uFoo4vV7r4pzVuRGdZvPmLHkBNRnDcoVFtPeKs",
  "key36": "4yvGh8K7wSsh1hNbhWQz9dFYhtDZZSqCkw6boXjc3j3hdq23VwcJ3X4gcFZSQp46AX1p6wNLvikzipvN1rjQzSyx",
  "key37": "3gTp3kVuWkypP8and1KcDAxw66Q49Pp1eWwDEy3EZpb5uTJZoUWAXiLLckVam8HpFkEmuRZXHs1WMdJ1XrP3Xibi",
  "key38": "3QgNFKWfKP6HEVWAaTQhogagMiDqf71T2t52QbxnyyGcktU7SepR55fPcWA59VDmdufsnQ32SzjpDB5hFLeKYzFi",
  "key39": "3BY9joyi21TJLNyJ3X9uYpSAa712NBCc5rfvkpPKdhGCXXK8PTpdU2tc3ua6yS3NPzEpkQZgR37FjK2Xrn5Lgn2y"
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
