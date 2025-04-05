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
    "nYTvTeM3bHyun75JqGjypgb7GJw3zt6jT9Gtug3fmUXdRFQrfDFxojGCcQaXRND3oqpqJ5G1uRWBa6Q7Lwbkj4J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3D47hKcmmsLGZ6nQtcugA1ggUXEEA5DhCnknE1EqVmKKY4TCWt3snx38BDyWj6nFsRz5eCzsrdfbTRHqPFTnGVeR",
  "key1": "4B3DCVaU3Zcn8xEp7cLBfYC6aF5M2Xwdy9Kf34mRBBw3PA6bqttHyHoLUivw8PcamYnJTqWrM4UHTFdA7SzrrbmG",
  "key2": "dMkbybRe371WzHdbKTW2i2jRYfvJ8VBvwmRPCZo1tRxbJG1HwynLN5wPTJjDnTcPrKGM3VxFcuzJ1r4RyHSfMT6",
  "key3": "5LLt9pmwSDhvUpZhgdh8ZzKbLgHUYYHowp6E8QkBve88dbzTUdAuXSTLi5Tto3GHVTDYP1Taz7cexQznbCEXChzy",
  "key4": "4KJiwKf832SZSjhrPYseiDYJdrKaz97vBajPY4FMjisxzXG3uESYmYnxgq3DutvcvHcNBeKR2RAfpx3LL186bf3k",
  "key5": "5pGkqxvEZwY2T5JoQ5SC555Lxr9f7EssdLYadmh434R3wFqzMceM5LKJfgj4a1Uv9FzBipqncQhUae9coDXY8QnJ",
  "key6": "37ezKNasNuwvFs95XUWc2FAWKQDAMkncDkHUbffjfvNpqxumkYLTND13Y3JBm8PZWJ8jYvEbLEmuvMX2YMnEnkzT",
  "key7": "4v1qXxAUTdfKiXvhdd4nVpfGGW1UQQRLrHEkAGpCXBXK7VTPtBc4fMu3Lp88d7nHHWxWzZCZArApCjpVuGT2GEdi",
  "key8": "rZFgpQ89yrA1dLLvpD9kGYWuS1afMkwgjBDqtKHcGNgAY1GnhdaADsXTrUoY4Xc7v9aUyZWz8RsVAqSTZ7CYCWf",
  "key9": "4ucqHjvdCmqrx9mAqNm3NeRiuz7FnMNDeCjVSMi38wGPL9VFdGDTAKWGR3bPN5d1YmmpKAaodEJb36LkpYD5M1HQ",
  "key10": "EN42aMeuSuZVzEetN6UqesMANU2CoZvUrqMw68vU7Kky5Xedn6uDUoixeMpYf1MLHjK4mJrdmRMwkz6fbngNzzr",
  "key11": "2xETP5eSjDt8FB6FDGftgnQnyG3gKAeARC8xcJHhei7NVQUACnFuShHU37XwNCt2STHKdNseQdSYveq7WyVuxzK8",
  "key12": "2tLuiBPiYu5sg2NWYjU2pFeSCg1qrMYyaYDSdheYte22kwLtY8FCe179ZVzgkYVLoeNutHLjFg9BYHpk91Ub86Kp",
  "key13": "3QdV3WSBiqoNm1AN2fNbVL4jzsFYo4bHz9QCn11EKUY5j5wrBrtMd8nJx1YZUQjWnfA4zk1nWEEFV5cqGG7FeHCp",
  "key14": "4AQjWPMEBWsUMArPEkqU5VobFhBNu9Mnsu9dn9j6RCb6vFkudyn8SjkY649NPTF5goEBsQyiYaMnzsDR4cA2V22M",
  "key15": "53khbXXFjjMBPD8Gv74wMLdY2E5d2sgb4cCUJGB1K5d8eu8mhJXxTCHA8kr1DmEMvcCgwnSHCFdvZ3qDQxnsQj75",
  "key16": "m5entiWetk53S3c9M5QXF3GWPmYB8f9mzKzMNn8MgFtQHLBGDYdakm5ngYoTsVqFRjhmjh3YYoaRE6RCco4XESf",
  "key17": "588GoJuJrbRvHkmG79nYhuqZZ9TA9AnzgpTE6834YRKQspYtyMJRiXTx3tPbvBorZsBvGdHX3Me5aJBoq22A4MZn",
  "key18": "4gJ38dJbzPgSXs2rV2EEwHwdZTSFz37m7BcDDQ2occVL31W8TQC7xALD4EU9uEMUBRPJNu6GxX7eD6NrCXxseMYL",
  "key19": "37wDoR5RQ9mWMU3mSCLWhcmSKDDWRTBJqUyQ7a4KdkQM1TmDg9YdJyGbWXpLsanVzhVpAZKBxssJDWBAikmrxwWH",
  "key20": "2XppSAWDB8s4nu7Q4ETZmMmT2KjqHBaTF47QyVVHrC66ctGAvYMg1eSU4kw2M9L9pvF9CSTvU4kuZQyG8vz5wLwz",
  "key21": "36yh9r5kmd5VhsJ16Q6wxiut31vetMBsQsGZeN9b4mfa63u28P4LKvHXFmWfGK5yNNbAwRS9pY44qNwXMymPLQ1h",
  "key22": "2XadsdRhQUDKD2kGp8uh3WEDLbauPMDvvZ95Xag7W6Wb8PBpPq2evtvoQpHvSGpoyTEnygLBdUzE5V7fjejpqGKt",
  "key23": "2hsVqq1Xu6uFa14XpZixfu7gafGBDGH2sYyn1TNwK8JY7nnQDktaQyuHY3Jxc6dzBmYpkDdVPUPk984hTZd4UrFy",
  "key24": "frpwjKSdH4wGq85prf9Rv1ZBHAADPGdWMR4Pb2zyYwunMFC63knJirRCFwxQEG99YSHeJUQUxik4GZ8xxMqU87w",
  "key25": "3rXN7kx2EWTMB9MrcSGibGGBZSBtjtHY594bgkDSo4r1SHF63tczMRicxmzhUFhHYz7Q8DRd2SN8bjm7AJYyta6Z",
  "key26": "dYHfJr3Dg6mUaxTnDyySCX6LjvCtGmDuAnHn3mj5yVY2TRY9kiV74PuUVGczUsfPmwtJ1BJeNihtyvBZHPR35wq",
  "key27": "26RcfGuZPPZngSi9mQecaHHGi8f3GNqgmXDwuZV7CRcJASY6UPW7uXHRRePRg3tiCGe5x57dySH6bYaqwJjGPMtN",
  "key28": "3vku2GbfURDctg4pjTPY5fwfsZ9Adj4K5HZxoPhqzCTQdBax7cK6FNqxCf87ktQxZCm78WwtpN7fAQgaXK5HBR8G",
  "key29": "fNTBMAQwZ65ruqZq24N1zF1ayKxc1vmPHeSa8ESgTELPHUyVhdAZUrZjQcfN39hChhCXJEUeTpE3GanDSepN6UZ",
  "key30": "4H1DaYa2syw14DfWN6MDSXYbrTHQ1522HyC16dkxf9baVwCwGaBdzT5PR3JAvQ9MP4KS3dZamRTXHFZeQajFg7zM",
  "key31": "22Yo6SiVaEUa2CcWswr1cimJuWqgvgWYouxxuU1rSNjW7oX6NWCncwYceqybr2B6i6tg5uMQ2nQ1kdgwiEKZPiz5",
  "key32": "2xnQ7q5pSccKVxfGnYWqYtuKJCsPf6Uqc643MUg6nfkUHPVj8yggFEreA5Xmi3KuUjYowzyStwz76dqzVVwpCydR",
  "key33": "3RtU4r8kDFeNNs8mN5tKkCwQJ3G1W2pGE7HCYe5Vmn36kLrUM4QXEAe49v2JK5mYVz3eAs5xYDD91xCn1vEVbtWV",
  "key34": "3XkeaurrXui8Zeie6bCCKPCM2dhE7Ehn2NBtJ74vF3fSARJE9JdZFasjb5KW5Srv173tkpJ8EeiWs4vbNtWw6DnU",
  "key35": "AaGVXDPT3dEpt2uPaGT5pbAGZN2vH3pkTaAQua44xi5xf9zPnMxVTkfAZLA7nRdTmi1uzqgGJkybgHXGF3goDar",
  "key36": "2fQgt6R9HDLeKCDLpWfh64JYL4AoejD5aA8eXr9jwmzvHt6QKBhY1WArvyamCgaC9GdbMvJx75B4TRPgdNL7gZaw",
  "key37": "5Gjnefuxia8HSm4w2GoP41MKZoTnHCQYiY45d9RozEK3WBX1wFFBnfRGVgByra13NScTAuDLUzkXHcnjrunKSCbg",
  "key38": "3YkhGyiUMQkE6SgfDNNQzhvzvwjtw9CMTkrGqWLntspXx2Ebi1Y5AJduNcQRVLgHnCKRpu5HXUkm7gMwiknn2tqR",
  "key39": "3vPyFcykvKqFu38LroELfJG75KH5MKrqfKZb4NcpVi6r8GnAbJrZpiRKvyTw8tv7T4k4EfMRp73rUf5SWFgN3VjH",
  "key40": "SeqS5UnXAXwCTRY66fypTdrhkiC5papNDEadFfTGAWXg4VfUTGdXcLuWTvEbgtNPiLGgPgsHQH6K7daaZtSFvuk",
  "key41": "5PWs3rUakPaNafqwJPmEAzE7HvBEdWbmAFjMULoXQkDgbUcQ2X2EKPKa9ydJeCZ5jPAqJMXCY7o5BBiK1VaC6b1N",
  "key42": "2pgbi9rGhCB1UEuitTYMx1TasSvuAKC9ikaW7NpuKEzkQEc3QTvB5mnjNLScAxH73cF8yQcKNAgF67yrgjQ4H3W",
  "key43": "66YTdWmafEbFHe6ASomGgrNh4SSxvvaohiWu8th8MLpoX7h34ZZ4dV9mU9QZBuWEo1CWUT6bjxq4SZNnBquyyGyK"
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
