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
    "59YUJp5rFcptQ2oAjySmFjBvGPoRzHWapJiDfWTR7WU3ev73LvB2VAqMw2L44nrTNriwQhvEAf5j8ReMP1dTXxsV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8L4TFG9HkLSzHxvEtfo8kgPkb6TzDZz4JVRYSZqCLDjPUVfW8EiMMkNBmemK7qUsZGdM93pD7GvPcwysohQH21F",
  "key1": "2NxrXrr9FfVPzQVbcZuDxh2rmt4RVgcTwSZoN3L9NCcABhiWcg26sPNVxwNNgfk5oJGpfb73sWc6crFtKhw7UQ8R",
  "key2": "3LYERXa1EyJEUezkJ5cJyWipPnqPaGwYdewZNiGieRTq9cre3rTNfnFGJWYAAVCH8nArPcNVDJX9Xo8SD6y2UH12",
  "key3": "66hXy7r7KdJzXQEd6V1PRmkp86tyDBaiuLw758A8h8K5cgdr1PMhareL5SYVdxhtpEEbFTMzrPJmHGuwDNo4Cim7",
  "key4": "2g3WEQCT8LXjHKszHhMtGo1LwSz4wJedS3wGGEh6QhopRe5pZNz8WspiwHNUyCLfiMMvR6PCH2Xf58xFbPM3SYo",
  "key5": "2BiKYSSsCiL7XJkr7qKUbmQM4bv6xSaKv98HCPwS5hEPdrj5xtKAntVZ18sj6g3RmRFKFVe4BbrpmVdiUjdpE8Pv",
  "key6": "4uXgNExHxYT7FDYiwAHWThaTdZkByfoL4yFR3AaNYqLGNofLgLPNTaywRnnzPX5MyERgQaYHoru7y5qd9T1wX8n1",
  "key7": "2YYA2gnZmKMsahB4bkMmFiHDqqVy9q7pXxLenmoU7iZJsfyzDdrHreoKrPnrhztCkLoJ8EzrSUykA3C1LcGUQBu3",
  "key8": "3opKTCMA4ahJFVPYT4A8exLhwDQYyo7Do8xmLNjxtcVexecVBiiQngHQdnaW7ZscfgJDJkCNCdpKCWuxYuvdsqRP",
  "key9": "XgYLPV7KJcdbXdt96gTZtKnpDbvPU3g3Lgdgp6rVvCQ1ZnVkzwcWyJtVAVS1Kad1y593Mv3YksNVhFuCuNzz32z",
  "key10": "2VChw1TwM6mGACSWDjBuqkLWsjqriiKZiLkG7zWRWMW61Xxo7gHy9taLycdKviixFszgNh8VrdpiZnBN8aVbXZFA",
  "key11": "4Nq9R3QuAjCubVBEUwkvgbd4vtsXXdESrSKDNMEy8cD9LUhTZojwSWnFgHPQTEphAyfLPWocrqzaw6J2NZaJHTmn",
  "key12": "5f98xVpaPg6DZ4AB7sVM2JE5yWKb3oTvfJFb1zSm6rZuxvTB2bkMu8TbcCq8zpxrJibs77SgKxqTcy1pKL7XN2Vb",
  "key13": "3ugjL5KeAEDGoEXVicFqySX4GLRV5PtPwcDiNa7C3WW2S1NdHdiokxF3gFATAWdrxNTn9sbUPaSWg3qp3gzJ5hmY",
  "key14": "5HLPbcuBfTiXQWckYxRfQMmPGfe4GqSQXH3KuZEAVtLNjTR3Wa8PLdocHkDCmvABzXpSt9cKSHcx7XuXJxisRoLQ",
  "key15": "3tinWFPogJ9rdh447mMz574wuAxpWE6LbN1ha76mMXyiK3CQNfuxWc4SeXFSdvN98TEHnJ8AWo3K6axg4zUC2zbs",
  "key16": "2aFay1VhQesZfDB8f3B9b25HVfFdhKfd54imSfAVMaV6xy8YmFZiLQJDCFr2kHAp6PG8nicra6BxjfdAGV9haUZy",
  "key17": "5G7NpKXuuagjuHfiMbacQCPregSLKUhYzxEEGZLdaUnCcYDNCN4BrJPhBDDciN4TgKifLMPqsYp9qwvKjQouCRV9",
  "key18": "5UAuRsA2zV1PYvirT3AY4CWWgbEQLZWSGZNP5RbnjbARLTU1JpoGFubBFzyGxcifYomdeddUbArwYuvMHKwyByfr",
  "key19": "4mg133zd6ihgM7Yh27shCoMb8u1zwCUPx7sEAw2VHUvGHZiaABZ5Sr5WVNo3uSdN1Jocb2JmZ8Jr2VFQSR4NHHh9",
  "key20": "2MoATn32NNdcGxWzxEJgi9w3KfGs7f55MsNT5cmtzgc4mrsuhW6xwP3cKJ5hFJkEk4U1niRMrYauEeoZgBidFJMh",
  "key21": "p4upFJTX3Mscyjh2TAze97TPX5LxeSXZvafWCzqrhnV7Xp3iWsEUXWU8oWy8FKdjcktGe8Nqka19qgJqqbBS6za",
  "key22": "2BfvPtpwhTrRxvkjCZd4uNivRmw6ezWPwsjGbQbMSsWZHTvoqTB9ynC8ysahZPyeGML4oXgPpKEZ78YLW17mamZZ",
  "key23": "3HFfRE1Nj5NZtbNNLV78jxFq4cCtGpABKoXh8eRXEDETWFaybKkbcp9F8LoLgmxDvBfFU7wgLwL9EXRnSqPHutAn",
  "key24": "2ZrX5KtECHboAbSow1zDJPoFvZD8oLGAp9kavoE7Lp3BX5XfDMDve1v3cRn3fg4SP1J8gPJ4iYsbM5KbGgAHv7rU",
  "key25": "2KJzzuYtpxCGwuyc53tWJijYuprSbWndsoWmANNVthxAipPrGpvPtdETREDbFaGmEMTfUEwZcrryefe1tbNE5PNz",
  "key26": "63ZHSGPDp4JXhEJi36SptnF72BQKCfvDBuZcxbvHdSxX8Hy4KZziyhA6DvjquEXAZ5fDNmesWiVzyVA2HqC8jiKn",
  "key27": "3xPzRDApYk2WXhzdn5zywKQrZp7beYinsoCeLkD2LCN5SLJ7uztCrBPnTKiTHk7zcNDLYWVzKSTXxmJgLtUTnGj8",
  "key28": "5SLhpvfsDajHeRTjBgqYkbs312dEt1Be3tFh25K9XuPX1H8mVz2qFxCLqs7LbeRFfojuRkXjj6nFeFCYSmocpCkV",
  "key29": "5mDo8e1DLmvx327q7frj3AL5AGvCz3HjXLY1xSNVyLJPvEL8Suu5ZmY6rMn9HzQhv8XhFFaLGZPkzcafVgfdtdnx",
  "key30": "4bjcpBc338osBiNEFmJCzLPaLxQAEfRB5MNeKtaqivjak7CMexXXFtSd8weMhVDD934X3VSL36MTuf3Q5ajkTUux",
  "key31": "34tQDnYKdWkbotxkw1bCpwjn2bct4cjG7xLHMuocYcjaQSGeZHjbkgoRjzAE4h5Tqm94CxoQTNS3aS2Eow1ACu72",
  "key32": "4UFzDi9BJc1kCieu2ieNcCLqBSFMouzMhxUcbSV7HTY5bDLvLspaaK64jNo4NEuyL15eT4kjefEa9jNokfD5429F",
  "key33": "62dzvATsZq8MDBmHVTg7asGoD6L9PB3myvPYzZPwaoMbPEePyogr2xuxC1VPyB8EfQjvGxnb8xT9JcAMD2NyuwRd",
  "key34": "4aZeiGCfa7LBCosHWEXia79qQEKnDz2JcM8SZQ9M2GUTunJPZ85wLV87XULDwZT3Q5mKNRaVoh7RR1gUdLekdnUM",
  "key35": "9GsUH2c7ZxDzj9ANfEQA9NLgzp6MSHQRGdVLG3YKCbSZMurVnmXn6Psk9sApY1ifu4E3YoMFiXSrp5opKj2FBQR",
  "key36": "4qsgS2LvCvTr4dEKV92WDSy2jtWaJJmspqjeYJUEaWXJ2mzraP8oM1RNTE7sF9E2ytZFxps36NopMtmWNaT8jeBJ"
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
