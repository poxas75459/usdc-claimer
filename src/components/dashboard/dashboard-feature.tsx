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
    "TSPFYLAwNTYMoJFbrTaAXnmSiyDtngPSMeNmZ1G7ps7NDAjRcPPaJJdsuEqxcXuBUYjKEYTAEwSh3Ju4wCkwaSH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iwHaFqmJzeLydVtc65eo1YG6HURpZ6vHurDS8EA2dBCVF7bTdeeYjURdzgHEXHmKF9oeAbgjT9oUKFUSwaxERjS",
  "key1": "46WmhbzDhoar9foK65WaEN75nMtvKVWUFB4G7R9u7dVo17XiCUxLvYrXbxmxtMVagin71rbPvWWy2h6282u8dbx",
  "key2": "3JfBQr8p9b1gGCkffrTRs481NranaW3pppD7h6CrMC5pBrWhbSihbeAEjTZcqR1h8iWgSXiHVCSY2ZVBBLYKXYrk",
  "key3": "5WdcYKU3xf73eaJdqedBRfXxXmWJvPJxFgqZnCW58fwHTzjD3B5q5afiZV5UL3tkitqe5wUT28Ejbppik3xXm972",
  "key4": "4rdq41hDn898H7wNP1bvkfZU7V6AXPbWMNsKj4GJsG6nR2s2ANnznW73JFBkj5CgapXQdCyaUvYu9LtxTRfAv1Vu",
  "key5": "5uhpLKp76nm1aD9PeHsf9E6bQo6cEe41PeohVXWDmavztTJjoXFE29Gm3TjD9u9eHQRqYXMytfEgyYcthg88aDr9",
  "key6": "3SW8AoSNHYtb7mhGhVMnFiCzV2vgKC2foarZM4r531HiaMJ28S8dY1CagF6ou6igdcK8kZnUaYW8v7Sr8CZPN9rM",
  "key7": "2LsTJZrZbgpZ6B2VqC3jGRUJLSJNK1jmD5KsKCcAg4Pvyp88y8dcm4B22PHcXCXwFuXcDfAygCaDc1tr1Dj6vWjj",
  "key8": "1wFMQFAnUmPk3nkxkue8zpU7F39xSWcFKeM4B1XeN9oCyfbLKmEbN8GLT8x8X2r9AVQ7XTugbeYSQyyJxoRfgtL",
  "key9": "58eXqd1XmX7RYXFNL8YYRYC3M4vyGpZH6W1XkvyQEtU5gzdNN5wqRjv9Lxm3SwQf1Kie8Qc5Y49wxAhv6KPVHuY9",
  "key10": "2Yga29M5XwYN51Pad3pbrKobVTzpW9az33wkMG7id8nzE2NEyDc1xQorkM6PBbhFb25Rvc9VZwa2AvSNjPnEiUQ6",
  "key11": "3TLSTyGNMZefWHyLcmERRKrN1CHMfPVw29CRXWy8AbqYkHTnHdeCYLEnUWTrcCU2WDDUrdt58AVJSTJfKaaYDh1j",
  "key12": "2R7EdjK1LjckhKnv1pbasUBT7Ak3vTPdauq9QU7BJq7nXQgZy61LDEsRPhfuGLqRXxxtkz5PisnoNYBb3i5gitcb",
  "key13": "4J9PBxoh4zRbkDSYc9M1dN34HDs336Tenm2qApeHAK69QRBhtYirhgEffW2UgVKrDBDPCBHoHuarAy1Fd9xarTzC",
  "key14": "NuJ31TERvdcZtVv59Xx3nYga8dmaLBhCVwdVB6gMGVyiq7wMsLQ2RvB6GSJpKXfPWXNT9sE3aDSMrW4iazShpRq",
  "key15": "33QJpX1LL1PipZojSt32juofQTX3g8JcFP4oRRtnFne1FsAVWGpSKkjKFJUyuEEeSJzvy7cGF6nncXZd8dY8fsuT",
  "key16": "5kzZ6AN2Zy2zzWRsNCYbfEMMUUdUugQ8Wr3k9Vuxwu2NeQTbRHoQyQV8ANEp4ndfB7bi73JbNyfKeuaDQaH5Q9tA",
  "key17": "3YKEgddcWxXEw33Jj5t4trK3KRHcaURXvw2PGc75C3gq2WvCECZwStNBvmjGiMm3mw9TqrBQ2iotDvhzZ3LCz7JN",
  "key18": "4uCbyjAG8w5TUpvLxXUBaRD5KzAb61Y569VyigYVA6tg2tFSvksSfaFgtBn1SFxMMntAERMvF28vRpRbNeGHyphM",
  "key19": "3m4QMFmyyiFepdUxrtzDzCVbrSbr3oJ8376uqRFCCkWW6Uf9SpzNtCGmWYmekaZK1ZgvWfPBxcX29CGiacYAGq1Z",
  "key20": "5pQQQtCVeL1GYJycy6anSB1U77ajUhTbYtL4mNsNmZzuETvkhiMwGG4EGbMKJGaw1HpKpwfQDX6HFaHhfJVuMYTQ",
  "key21": "46oh5G3CD7BPGbP9kNSKgJcy223uwMs2Pd3BBvChsSaYZvBPzXvbsXDrtSZ4VyWRz5qsiyXJSmfXhsGtvUCpDwLh",
  "key22": "4yie2GYmbdygEssnyGvEnKoPvr51iJFNWejPjuT8Gp9fbcrQTccWHzYZPuEvcpLjiGnCJ2ZQg2UJBXbxJmuZJicr",
  "key23": "4ZhREdnUQAicVZxCLHEBSrGdQi7is2432Cg9Znz6CDSxREbH5dbwjkpTYcpjeMfXQvUiGzdYfjuVLdhmSJgXG21u",
  "key24": "3ohkbToX8kpffqvvksCpQMdmihMRhAyryJs6eFBkvFpGYNgi3wwtuPeWAFPgnwafqGyPURBFQExNu5GvtW7Sm6cY",
  "key25": "4Zdu84UoHf7dGijRVZHQV7r5ofnUHD6fjDMHsAMZkLAvA4PXv9GvWyoMgeQ2wGyDJbV7dcwHVw7zHNNbDeJ8n5BS",
  "key26": "3F1WR7SA85kSb5thzAv616WvLKeA95bzC3LoP7wsE2fZm5bxCTSufcC5UpVfrZF5qTaxqVXyvVqhLPMvjmMuHoH4",
  "key27": "37RhFieGkPuqop34zckrPa1nLHpZQ4u4WDYmCczPs4CJjUNEkah5GiQqhe2P5yXFAd4Ys4m99Bpz3JRkyQ8tev6f",
  "key28": "oVQ4R94w5izq1YzwbMzi5oKeoDJTw1DsthBPdyzaXmhPRsu1MnovEos4rvK94PRMxsY232noiJSLWnPHD6yDbVR",
  "key29": "3Joraj6dCfrxT4iRjefuQdf3fkv7afy3VaLJYx5SPnpyqWJi88dYu65zuFynnGub6HgoneRfh65FEWzynMM2noYu",
  "key30": "2Cvk8wxX2vehmntZ6Zp4BFgY1mCs7HApBX8h9sTWRNDratZErA89tKNyfaUde2a3UPEMS9peJwrpQ7fGPsyWeJt8",
  "key31": "2QipFT59VBZQGKhz3QPqmHqqPYbNbc5p4FhASajjpy6gGBf7taj8UsyYmWowPUb9wsNzPsTxVsHjtdM9Dm481VSK",
  "key32": "4G1a6hNdDZnXEY9moHMbCnQRRsh9Kh3uBCXU4gKaKpZ2AeAmUo3rx9CDNkooBSkeViFXDQym6qeXp7NZq8LySviM",
  "key33": "2vKqKGDPRpMNfnxPCrmHUHb6AkTfH4Wiuh15biwSNKhQa3TJLRnWniv75Qyp8djDVgayRwDU4n4CK8LUYeLX9ybQ",
  "key34": "3hLB1mgUHu88HThtGbfVM93SwPQaWRAAwbTchbkMHFMMD94BHJAn7p8FT4Bax9rH2bYzwfDSsdbJJyXdPyRNgYpF",
  "key35": "5A1vD27iqUuCE8mzBnz3fmqW6yba7RJgkoMazsRJkFvNQA63SihPC5rR1V2uaPmX4pK7okjbcEQ3mnASWgDrnHJ2",
  "key36": "3Xc8FsCxcHme2bHTbPDQNQwQULCi1hTeJYYEL1hp5Z4hh3A3erKpqqKKDG4swpTJPyLkCNG9MwJY6X8EHXzHXrSe",
  "key37": "3ModrhtmS76XErXbuAA2DRn1GWoqMe3445hjBBarLpaJ7HcRaQ27JMPikA9eeY133pnJuHF9LPDB7BdZHPbUpJAV",
  "key38": "gNUFd3R65A8w2S9qZYMwxXTQUmr8ivcknGKtXNRQiWfTzXK8tBE3eWcUHk5TN6fSo6NVqeQvVtW1NYeu4xt8uB4",
  "key39": "5MqgzDJuBPQcKDwce8j1fcrrZLHY8DmGKHKibJ5ZsAYLS9yHivzWuqaJcUcVUpdKg8ULty8kuC9XARbACH98ognH",
  "key40": "5GnpJRHHqszU7ELZRdnYDgmwDcxmQzTqRUVbeeeAGBehdXVXcL9Y62UK1fPJPqRmHk8UCZ5MNCscbnDPuAK86gY1",
  "key41": "27RfSXSi9xQn4xXyjKRHy63kupPp4W6UVTCQ9HAMi3QV9p1kfC9aJDctjQdeP8qyqSb9WEk7gQZCiaofLMgW3Lw5",
  "key42": "2zbVy6o2TZdeFM7gT1ybTP5KurMSBBxb8a7EqLdGwnrT3wcibjkwoVM6pM52bxxpRcjahauq7qoVh3GgsgbXTVGm",
  "key43": "45vLcgoU6mqwGvepSVf9ksA82Gw4jZs1zh7Em1H61uusTgdiHub7coTne7qqkLuejmdHKWZcdZHqWCKYArBZtbmE",
  "key44": "3B1yRSdvfGaq4jvS7rJEwH76XL1nfeX48x9jQMvatiRQsywS1DD6xZQ16bxKjQLk3p12HEQKsgDhXEeRHJRqcqWe"
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
