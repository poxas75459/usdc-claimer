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
    "39DwyCdDcWnSa558rCEvoCE2Sg2AybSK3q8dnyUDUnZ6zwRTUadAcn25GVRuhhjRYALGMNFzDZf4beoDGUUFVLLE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DQVxoiPR6AY9N4T68Vo2Es7bCLcRQUKGHHoywp4fU6up49SipS3yN28oPmVo2YWf7rGw1xAGQMiZMG2Vb6HnyNT",
  "key1": "3gZqdtvtpdBdssKw5BbhiEbCszun3JmkeXWiws64gxM4m66bfLJz82fLTurehFThQEp9myfztvji9TXaMiFfJaQu",
  "key2": "2Wp37caMcqUnZ2oWT79h7fsdA8PqqdhphKYhJENbGveuXEz3BvEUWiwUu6DreNvytNqMkRCS5MxQAfe4iPEf9deX",
  "key3": "4gtDKyX5KuCw7ucMS1Y7isEtEGuV1nCHxAoDWTfz6bgDosKcQGY5VgJ7KDX9exJfAFNbWrNzjvmyTbffQQ34eqZY",
  "key4": "3MBZqxXAoZXXPuQRMPCF7GrofLzb99pdQjJFCxfjRevTzSzbND9EDWAUeoN9VafrTg7gud988FdJLzFn9LFjVv4J",
  "key5": "4K8SiHrq3Dhn2Tbe6r8cJtmDHrDrrraGVSpptVZHs98rayrKcLpCpKemGzFQpbeYnVHahWCc3GjRk31CQyfwU6zz",
  "key6": "JvTXDzDZn3xxycngWxjxBkboFnLT8oQPtH8ui13mHC5QGPezp4aevDxt2JhdqeX3cesbFHN1mk1s1tUvqyXbN9r",
  "key7": "2vV5r321VPqMhH23QMzB5BY7aMv4LHpCMptYqnJFXuR25b4grnqnFqaDswezvMLqQzLucVqDfRDeMKH9LbE1oqd7",
  "key8": "2agAxBmSUZJtetHTdnRy5zbW1EKDRiLJgb7rnbbv2AEiY7Hxdkt13cokomdu5FZJd2XfAeXQncwNY7Z7YcuKwhco",
  "key9": "3XGz2t2b5jgyF5RyfCCmNn7658kTk1QkHZFeV7NSk5j9PHpweuMGZ38GNPFzmdhvUHdShtj71rQQDdr9iX3hu8iG",
  "key10": "5az8XPneeYrxjdMaUFfJ8BWy2zZUsknooRbvUhPW3rRirmjozjE3T4SzaXfo85SxbqogQGpaVL4wWNHVFczL2Pem",
  "key11": "5PJdsh1FwtxNZ5NG94P5gRuKDcG3XNvxpbZBWaRi1c1dwg2budssoErU1XmtqvCk8cK5F5LTqKYc3dEKx9n7axQG",
  "key12": "3d3v3zQuf79YN9pHvEFMXZLzSYMAD4mZ1io9ojDmYaLPS9V2WJz6Sm7498bQdLc6RB8yRPJ2HgXVAW5FGp6eZqMw",
  "key13": "29cn7AsvFoA4Jcp9uzDPZWMhps5bSE5EXSSNKwN4KXvQayFuF3vvoPHqtaeixartuEkwScXaciiFewqKzCVd7AgJ",
  "key14": "2T4dxUgWPdD1cHoGW9xr3rTqd9vA1Ba6bzoX34EjFzkVQ4oLvtuziBDqzkbbBn53tjqkKKFXkLrNWsJwdGJGrbss",
  "key15": "5B3iHT152avcH1n2MQr46375ZHiZtai59L3nAmmpxnFjLph4Y9H4QUbM3t1kkEs1nkDysLaeJadG1Zg3hHksNNWh",
  "key16": "rpaGzeh1fUr41oKm5uuTZRgCFt4ytwJ5oUCfwPgeUCpR5or6TYdruw23Rke734Xdn6o4h6ZC2iimCX55GKutpwc",
  "key17": "nyC56GXZoLtd2VRVhgSUA2TZtb2xwJZ8fgHuWXRXyVicSMmHLcyoQLVLUs4gfbNFw6s4d3zMqRD8aFdM2pW1oGJ",
  "key18": "4fSvDwbbDbDubxmzGE1aio1H5JkgTXcQpRvAPY8t9xW1QpsxGnFiAgRbRzVZq6Skfy9c3SgtAorA3qgoeaLoXGpB",
  "key19": "EeS54xUGwXDnYuno4pdBv2XT3o9A8zPBmYMZkowLLvC9xys6kkedqjRKNkDZY6CmvYxv8EZqhibLzkoy5VYzhoK",
  "key20": "4TLJVhEdnAGoYMWbTYjrAHv6bnN8aer6CvbTx26FHcd2Hc9bYk3H39G5sviuR2NtTm94fURQtHLF5BxS6BiXD1ct",
  "key21": "3XbL8inTMZ2LziSDRHu98TsJ1n2tyNfwsYmmeMmoz7D3w6rwH2jm5GYfFMbYjPjEcjRd7JtdzDZpf8xYWhCyoqjw",
  "key22": "4FB1thGRh5Xm8i9ATRtfpbzfh4b55YHnfRoGgSVi53DwJynqTzvjkqhDx4PC4eGqWeHfroiJp1ujnSQVg4SE5Jbp",
  "key23": "4Wf1ePTj5E1HH5A2FwAJs9KBchaPLdEHe2pwDf7GQQoVZvqspPoBZqeDzZonMcQoXNHfh19hMa7DMwAnYUaZpDYd",
  "key24": "2npwghWjatAGyrQCa1woQF4MJFjMrpAPBfJTJBGofHq3hyaKv2uWEsPnAvBMriz4RqpXYqeNgarmKFRxmS85PAJp",
  "key25": "5gsDBsR97cVBQ3mmjE1EYspk7uWhk8pz1KzN1LS51q71kvLSkBkiMTViTYZuMVVZLNwJfjurfKaaCciCMHSDQqL6",
  "key26": "57ApfUcBS2zNxxGGtUqJSaiPZqRp3vNBdroWKa43yWgH4vd8JwyKNzsJf48mTV3vhNAgdTzvaZ4MtVM6vZK1bRpQ",
  "key27": "2Z9wgJYSedE96CbfyYQsgEhM6JBKpiQCWRPeC17s6wtbsgTTSGvADwopcXSxtj75VxiAgGqFmgemFAhPEQH577f1",
  "key28": "m3DBjHaEFoJfhTh2Nt4tZZyupAnkMhanUEFCoMwkWz2ANcSJfCpsGTx2xExop4sqwiaANVK2dE3HLRqXAjviAsJ",
  "key29": "3WuBC7wYDJLcdcWBLkoNVema5yR5gZP93tr1KGro3VwEcCszfUTuqRd7ba6KnhtaXm3vJmX3qH93XHvYgJzbajWg",
  "key30": "2jdp2ib5WTEyDH5KfsTWo74mVonpKgpiWN2mFR6JyVoiYz6ApLtbvZakqrqCkuQL4Znh65ZCYrgRgH94zgX3pfC1",
  "key31": "2bbpet1AcxquvgFcfxE3xZ5ZfuFyTyp1JPSsT6yFfVHJXVhyRkgFr81K6N9ircv4HRGVzX2FZVYZgp7MYy2qiZec",
  "key32": "Y4KGFpa8Ejj4Yaa1YJe64AcWAzirUkBjWoRb61nhkAPXJUrFeoVn5a2n5tgjiodLmnMVxTrLJ1j1LpWEgm18rpt",
  "key33": "2acqyKNYfAVdogyp7oLnjBd9TJP3Jpbm7xNQuGSHSBrsW135FThmDHfnLgpbGE7RhzcDVvv9c999BWGu2ETjZiGp",
  "key34": "2Ghu8FkbeRSZJsADRJkHrK5mL1bXCMuUcysjowm78vcT58rX3FqkQ8qVSzXYfskUymh6m4m3xjrtMPRCtLrmsF8B",
  "key35": "3C8L47FSriU515kFUcGoaJjViK2iMN6GRun33jsVeizYjBHCdEcRHXMQZTNXFT9kcSVNhsYX7bqhSKHTvrvkt78N",
  "key36": "5e1Pi3WBgmaG4UMznVZDkb89xmPLatriqht8arveNrC7TftB3THFXVSSUdFs92X4Cczh7DAMsh7H73Sx82usHtfL",
  "key37": "3aTn8YwsqUinB7G2djMHyD4fDbZApnU51hbTNTvm21xNGMBZrkYnj1JWv2eqrUn1yvT1HTVYoLWPaGP8h1EGJDXS",
  "key38": "5SdtsXh7UcPrZ8K4RxP4JFTb2Cg62iCiodVWtfRX8XTZRbVkaYLVr5EFMHfoT3wG3FGcfKiYRF4MQcmvE5CUQEaR",
  "key39": "3ottHfnPC9ke7VZDVK11eoUuUR82qnSn4ci6WAcr34F4ebzVRh1pQM18odHzag6W5qR8bWpCWxRcYLhsGYj9xHc6",
  "key40": "3kQWGPjx9Ge1Sn336SHHVA1vwvPRAosKoK26vpDARj14wsisLCju9WfH9nSbS7ayQE3PwDJgGZz5hRg5bwNHoYw5"
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
