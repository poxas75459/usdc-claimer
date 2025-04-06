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
    "5i64u2eBzviddjc1q9zL7yaEhCtjXJJvKcNAFWUJYYnAR73CPD56wXo16N9hsuzUNsQ3QMdktL3W6R5VbgzRfGTx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yVYwzVoFVLpe829KpNqMCR92GFtRi6mXfstGWXkkQaGT545voXqbGbr7FPhihgbftLVTJ51K11QHXM2zDacx3Y3",
  "key1": "2ufFHbd9ww2YXSGBDiFfeehvQbhF5QseVvKdk7PZGYE8Pk5Z1fwcKPr7ND2Q1Nbq1wkuN6rjqSFa5Cwwui3ydQLn",
  "key2": "2ob8tH6wsFeZZovcR4adr55zRitbU3WiVvbzvcNo4MunuFgUsJSEKpkPFjMu9BNvCpDd5Nhrh5RWH7uVEdmTjBmz",
  "key3": "3CcutHtULde6X7xvneivM1vJ65whRQr8Di4yBVRYnNjYP45wrs9Sx62mvHK5XtS7SGDXTG2gJ5gdKsDfFBiygMga",
  "key4": "5KaTUCsGTXGjWePLV45Da1mCNj9TBgY5Tz8tCQocUrGzJg9EmcBm8dyDhLYQncxKuUgKpux1d1x6C7R4PEwfBTHr",
  "key5": "3V1JVobtB7epiPUNzqFL9Xnu6xZ4JiMN35hVdE79eE43sDyE66Z2nDXgjdVJJetWRAwfAMgvpfYt8LV7tSxE5pV9",
  "key6": "3y3dvsVDGL7sgxLoU5DtZGu2eTXCRUN6CF3zhRDXYRLPxSVZu7JESX9sMvhPNLKDFBJyyEhn7mthguDUY7bpyzPr",
  "key7": "3uF1E9EKswb5vfTEE9ur6yEcfFKiJYFvS2uMiTZfFogLKMeTsXbxfCgrbbikj1zACbHwHXCSCKg6H9BGfhES48UN",
  "key8": "sY3LvBgJiaFWx2Cwq34RaSFwi2wK5fPKhhsbtGVQzLdXurjWeUbhNG73QSQRWCU5y2oLpTzY3Ga4ZEGifubYvGJ",
  "key9": "3VmmWGPoxM1PaHFZMwD4ubtiKTCWbM9Py7DurfwMe7MrLVU2KNdAhGQzNgiNoHBfBFKuto443omFVkPAe2BNdshm",
  "key10": "528uUtXgPucv7BAbnT27N6FMB4S2gwbHB2oiEVgUbqa3bfyh7iTrCbnmXRSNV6eG9mvXVUvh77LtooxHVLYTLTcH",
  "key11": "3bPxVvL7SX47PaCz3VaUgghVXVM7mUGZHKtdS8BvGpXvPfBoXe437EwMKDaGzMXKYMH7W6DNY8MWu3WUYGkkD4ZF",
  "key12": "2VWWw9bAhdZcJbuZiugh7zqpXGM3DetaanSUT8nYdU7Gk3CYdPUtu3cjdwq9kum2yJA4KDopxhxvvMEDhYz42vHj",
  "key13": "3ovSXyJrLYaZu5CGjsYnWe6CtsCqM8jdXQL3UXVPkamGzqxwFraFVCarmBdh7HCt6j7QajepYX9YBGTiubQes4X6",
  "key14": "47GmazpbzDJMzazUiRuJREb2pGwLzNi9cA4tWG3DaYTAjeATmDXmT4p3GdVUYccLVeJv9PsZ5RNukNcBcmu1jvEG",
  "key15": "4hNiAwc9RhFpvBp32MoE3gCgadFZWY31zCwEjgm9J3BWyCxo2rYC6xpD7jsEqBrVYtd45Eyfq2NkF4U1USiFajHV",
  "key16": "CrzLKSuUCgGZpr9NYxecaCuMommfnb16iXPC9P4yv96YjrHuzrV5GfYUEAzDcSMA9oK3kpfW4j4DwgZ1gH4MTf9",
  "key17": "2tkg6RHTUArutouA2QgvYpRzYMRfBxXAnVLkYyxBzW3YHSxY49TNA123dBSSWmwrzs7SDYVR6DCAS3BiG7t1Z1ZE",
  "key18": "pvXDAARQTBiSytX48TqmrxJNBVWCRvnA3eNxGmkAupSvLTqSNrTZ5Fq4VPQeeyhcThYocs773Qy48wdshWbREYC",
  "key19": "5tAYmuRNBX48FNAmLaVTPJKV6Z6AUo4MzGqwCG9bxq3XgdPMLBtsvyh3DAGun8GffEysSvERxbyqkK2QsV4Ezita",
  "key20": "4PoHhuxEDwF7gJ9THxqtfwHBUxNCWWwEV2RtSpdJAy7AjADNWPu478g7F3DrHd3VEvGstcvkw3wb7bBt1M5dV1Uq",
  "key21": "2bdKE6G9sJiqPJ3XoUntBNUabjzowJ7U4GDUvZ5sZBBN2xBrqrA9hU6TFw6BrvCDfe2KB3aZnaz4fmZ2Fre3Dn9S",
  "key22": "5G1xTtgRhQBQ97r2RtdKXmrgVtE6KpcAaoUVsCiaDfkts5hFWFKeer7XRDoSnXmAsJidEXvk9bSSkMMUTr24s2CE",
  "key23": "2EMNeXVKQnwrji8LkvQMf76rnNikJDyojrVmEWKa4YX3AkTTxY2xxfXXjzXXZTVupWhRtLb6QNTkX3WeUCSCs3NA",
  "key24": "21j5J7iE4s86sa4MaAcMzhcaHQQxb4Ck1LYBYFVaZtUZrcZJspQ8bFhBc5Te2cQURvrPbWDHuJL9yfvzr5xHtEsE",
  "key25": "4eyWr7VsXJNkC4wnxJktYTSKuHxKeUVEQ1SFK8SE8QUfu5pLiGvuwinZkf2iyRT3ZyS24nJb8AoxCDmFowZ48hM",
  "key26": "acaZ7U1q75cZfa7MUdjjT7WrQuQXtRzYDco29CemSTcPjnDqCT42gxhB1eKN52sf4qTQa2DHHLhDbtEWNujfQoR",
  "key27": "JqkhTRZr3KG9wYzLgNdTngMmCS5eRN59eY863DkgfFMQXuJXvHUW31GCfyNYPNKK5FZQ4ws3xAqJqcVi4FLPPmn",
  "key28": "2JJCeC1xQAuAmwYq8DjfTKEHKxXBXjDa7xnizQtURBdStJ1KUPwn2xgAyCUZ7LV8Jf6DzUpsqK1HFLavFnqUUeJY",
  "key29": "3wt8GAoQNtfMwJAU1FkXnQ48yfzg9KbeTSwh9nyTESUeQ5vFXeVPihQ3ariUHWyD5iqVuSSMg81uvvrTtqacg7Mu",
  "key30": "2sHRW6WjE9QVrc4Nif6KVVupZde7kWfGVrKBdfuzBUxAL3PTCbDY3Wo9hbUQsB9LJyZPZqgozPn4iq1MS3tFXPeu",
  "key31": "7hR6cy1gcDf3zPosXRv96BinRrPqLiheQP4yuViQpJ974jsWCXWDjYhFBTxVRHa1LRd3C2pFPeunXpxiWDYETP2",
  "key32": "4yjrzkFcRAHpwqxr1bRqQEp6XvRQKyHySdZGtdcMD1KfBA3PLPBVZRVsHncAjsTUpqoSz5ZPVypbakttGZcBUSwk",
  "key33": "2uqHWcq7wMQpP1kaUHWQBMDkeQSe7BARyXz6xVdtfSwttSTnswfupEKATUsf9Q5EsFXLStEkp299ZunTVSB9g7LS",
  "key34": "4uazuPDqxcYecNZVsGKkJocgM4DbJki9Wobzkhjd6Ca3paw35eUhTQVEsnGHkAhNhqtbiFH6LZMPdfFMkPF8csWs",
  "key35": "4qq6iii17nRjHeDrcRMVQUwPBmFqywNZ4PiXDHDqEoNTXweF1rBtEMTiztfQyxwYVTse3h4fwh2Rb1sYcveazrRv",
  "key36": "v3BWxAjdEbCwfbWDHx5cLe3dCF61fbpjeiigPcUuTpdfG2xe3kaUkYvFRCPCe3uCGGN2fRrKTaRnFvvjahBQJYb",
  "key37": "2hQ36efPbaJJLxkVkZkwtPYCo7pp4Ef57rK2eT6RFzJL9F8D63eLq41ajzRKeupoauMqd56wdSQxL69j5rL6yqco",
  "key38": "2E4CEyJyzwibNfRi4gXSoQkX3qNW2zy3VSJD1USNwEA1TAdDGtRDrFwMhb3en1wYksksXubeGpFBh2JEkQzAYSuc",
  "key39": "ezHRPn4iyy2ZpQ7LFud8xsij5w3BYra8Kqk8UDvzDXgNG58VzsuaxcpN1qrTqYvtQhH5C6YskVEQ2Z1WUxQvyVH",
  "key40": "4ZemQUsxdxFuBt4SyZxT2B3esESYRiFmKYm3QRsHaWGaVZKUrasGngdjPKJbxju1ReFXJHdqqyUGYLA3ucyS3r4g",
  "key41": "2tHkUaxYTCADFBanhJiQFLNxzTwbLG3kva1ev8CqbPBPZkXsnxC4QcHeqbZ23c4qS36JjbCokHKs37SAphTswTTE",
  "key42": "5KRGZkKnrNbQwtUSPgmztEgs2BLPEE8wN2YWJ5R3i1drGPg9LXVkWf98NcDAgNjBLk8yB6tCp1e7y4CDUyZWRDKS",
  "key43": "g82AiDfg6ZLx6QKxhcpw2DgzBFuuXrrKbFLS2Y8aoZ2qRpAWoYdMCwoSgyU3LmoZj4sHqKEJkmqsrhDCcHpF3hu",
  "key44": "3SbGAn2PUSia3z3JWWy5bHfsBhMker9kz4KiN9RntWRiB6KGL4iLEYFwLXrRfXdT7xCYU7eDcHVVQcUDgE7Wxnqg",
  "key45": "kcq5ConxN21fuJdGvUq8JVnDnuvd3JR9oGAUVX5aHKvG9j1hC45nNcscWpsz5WcRKxGViz4XpvzbjnaNodFsaSm",
  "key46": "2e7tVrqw1wKaNTG47vXypLUCJMwDXGbXEeymmfG3TKqT7fvGWwqvTvKeVXtCUidSC6SPafTi5SEqfA9VYCuzuoFM",
  "key47": "5dSpiFixNjPNhuzyC9bdiVj85c4iYfyXe8bjNS9qakM5pN6hnFZzpDEfeTDs6M5yWrcMG224Sq3BSyncEWQmToY7"
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
