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
    "3cChy9wQmwQqLkrY5wAxU76eBsuYCSagKodFfzguXfPSZxGJMQUdCsboLmJEKi1A3P9QL8gxw9kKpBFJMepBeyqC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "egnseL3Qde5eVnEeo2GijJkoiA9gqiT4gHQW8xkMTnbuueetsDSPEa25dfsp9SaEA3Z3sUnVovKrwaRsNo3VLga",
  "key1": "ESmaNE8TsgcrCgtt6E6fV5aTFiKEeu8Vdmwx9BsoLe1r7ZR3KFAnLf4Qi2piBDrV55eKkvRH4kh8EvKzmc92sR4",
  "key2": "4n2S6iQBhQsKoXepqrmtoHGWXA4XM1qDCNf1hczjfoksS8HFDJ7yJH4X2hFxdvVCTNzvxpugbqPR2pfeSXCRC89q",
  "key3": "36VeAyYqQ3dBT7vfRyFvNeP5eniGvZ7qHmKtB2Deq8prsc8ZbB52ewao6fPhwLq7qiNgVdSGqzTuQYGfcXPHjQGa",
  "key4": "VZKCd9CvnVqM37uGtqdi9HrYFtZ1ErPj4w9XLmNhnZdc8r4cDZsBSyZtoLijp2iSJkaromDgzxPRRbpv3QtVo9D",
  "key5": "3twzPXouJeaRAuc5xGW4bknZ5m9thgVe4fzFqhWUAEfSqeBaCo4RocNdvsZEjX6tbvNK7BuNXRkZyat6bt4cX9GH",
  "key6": "253k5mbPt7JWiLbyRT2KLiy4HhdpVrKffsMg32aotjKa8kvHggmx6m19S9xwcVwYSNDV1MjY2ufLF3M9TKoqg52s",
  "key7": "4cHoUFEyuTGAvJptK8ARkuz2uskUgAkZHSxBjJe9v4a7W3Ejye9cLXg6fBTnHLsUz24pUJy1ArE3vpafaiA3Cfvf",
  "key8": "2QfdtdwWvjZ6migbvrH1vpHrsqTA7BxMACje9QA2FTbk9ZTck6kbRbP1cecsjE52mQLtHdQiQucAgw7UQstMv4qC",
  "key9": "2ceCakwjjm4FiqN4dAk1RHjK2jWFxiumFbDpqVPC6udnjzimMZTff4T2scnfV1xjsVJZoAu423wac8djijwyFT6g",
  "key10": "5yNK5goTPhpB7jgTa8w5Lmuj7xyaJy9JvDByje6vR49zHkeXwdMV8EJLZzMPoH3jwBwxfqfxE7jRr1sat3yxVKiZ",
  "key11": "Kp8Ujnugponon4pnRnX5FWTxsjuyPi1Ki5Yc2weF8PEFrKwWEH3zncABKd6MhADna29bVtHsyUYBbU9RBEmzqzg",
  "key12": "2cu52mZ8bw6Resc4GLQSHuTa6wm9z7jQE7kPYudGsCfwkwNa33H6gjx1XTJxhKcRGjmSsf43kygud9nLicAEEQVs",
  "key13": "2uxbAyADgVVrGRu4vw6kpnCajKfVGfvHWkWpBQg6PSziL91UHqwuoSfH27zP5XtQaCfeJ8Gadbk2HyV3Nep8cXq5",
  "key14": "3ubZnHv1FQf16NwqqK5cd2fF2geFi3SBz6nz3PkbNoFBhpNsPoF3UXBS4tuBmUKtibCgHAtTYWWY17YBcYWkNqGX",
  "key15": "4oD5cTdSkaH1NFAhjxFBBjSmhSFEGXXdLMaVVexCx29VuMuz1vmeWVb6QNZhe7MDWuhj3Lk6XCxMgv54wBjqPHAw",
  "key16": "5wGk6PSUwwvEb8MuBinQwZwHZrBWNfJfRkJShQgW6rA2BV1tC7cirQf5j7jfxgNFhH9UikfPejNVRSsLQiBGjWFn",
  "key17": "5uxDoK4A1XBVMgJ3rD7FhrJMVqcbJULBzSSK7o9dJbnCbLzqAVTorwhK1twYcNMJbtYidyXsUtycror6p64EUBGP",
  "key18": "3ydPSA3LAnjuRdzR1UsUFVaHW2wUXTBKduAXBQKJL761ZGeACdiwHYo2vDn7zUvoQh4R4MVi5MHw9thiqDouqW5p",
  "key19": "5E57FguYARJW4Nn3NPxM1iL7s5jSofpqESssSph14njCyzAS4BGk5EYmR3pddzwi4GMx597EiMV8Uc1UugqszFoR",
  "key20": "5eRWfNNYdfREJenwEUZsnL285yFBBjEvZrVUChqPGmuuP9JbaxbVA5uoG4Ai4aduSti1yb1QfwfHXHU3uDTFDKT1",
  "key21": "5YaddAzajy9yuQnmCDUr66rKwCBnoAWGDic3GtLAnnV7ASH8xrvQQET8LkBsoZdX6HxxzkX682v6nZuLT4UcckfK",
  "key22": "5qZso9e4WBZfSmtryotUXRhYCiDky1jiAeZmrHBDPDwkKJCf63M7ejrDMHn98Vuk6Q3ps8kMvyJahg3fvrL286Kf",
  "key23": "2WMXMh7spHdsGdCNy5g6jW3ATh57Ct4L2RFXhmdRhf4cYHdKYgpuDBQ1Jc2CuF4ZiJgiVvqCNoHwkb8advBk8Ste",
  "key24": "3tvpPtNNJFP7QCH1cTdPye2EdxTtVZhEPegdNauNrM7asdEdBYr3bVbugnz3szNedVs9nFyGwqMriukCKTNMU4es",
  "key25": "CKhXTQscoxdBZ3dtt3W44fQrRqF1ApudSSidnKC8xRqfxy8qB3Q9CHe8rgen8w1RAAnAnxkBPaS7bwshxtSw72G",
  "key26": "4XRmcr1DfDgYgHZ5LHFGv93UnRCvSAifXvsUthmgXm9bNhiBBCx2G4T3ionN3rKnbT598dXZfAMeWxwyMNdki75",
  "key27": "5tEbuCfuk21SyY9zCNJcDBeobm9eP19XJHw7j9RnoNjeDfprgQhitm88TmGNQtvgysfZK9EiTQademcRvtEdh4tY",
  "key28": "4SfS5o9fVDk3WZedAxzaWm1znpN6mvKu4YKX3Cp1XpAB8ArawY6mpNBV8w9UqCHzh7pc2Xkd4B2xGRSQQwoeTRE8",
  "key29": "4FQiHVwjN6hvskGPa4wnN36KcqgXDj6pPC1bMcs6oeHqyKThrg35D2Ns2c6yukmkzkJRBQVbhaygCpTrZbm6bvhu",
  "key30": "PFyAGo2pKtPj821eVzEXxznd5CqLPrzY2aLeJ1tkFkEbhDh2dujvebn5AWCqVTbzHLmwaeTYJAWotXadgemGMzp",
  "key31": "2TmzvF6PFCVsiPbS1cvfuyuQ3uxou5UV22R9AKJx4W7dDpmqZMnJSKUGvQozNG8z3N5hJBn3pWKD2Skxumfxahi6",
  "key32": "2W61tw9YBMMN3gd8VYfAk4pPHhEaVGnEL1pj64Dh8EfWQHzYY56xpzC1um2gu1HvdpN2rqgdBgHYwJwPZUmhm6AX",
  "key33": "rppQgrBEtSq2ztAPdMR9mMgXaFHWM54wTruLQzJWGCqerair4pdMLEsyvZwZuH2xGWieyqeouMMBbQcmPRizcp7",
  "key34": "2RXJWHot9VnVt5wnaazCxgFQZgGzico5U7V7QbenBcHLcSwc13Xd6fAQ2bNLWPczTZmgN9m1PDG3Cvi2XVZhdY4x",
  "key35": "4w7aZFnqSqqhxcDwtW3z2WaWsHNt3qR4bVWVCX8RMUJqELCvimjH6rQJWjeqjwna9pcQV3XXhVUgNMJngdcmAcqF",
  "key36": "3kjo5yHjwRd9kF5VocBJeEDepmfLXSfizMAGf4NJ1HPzFVK2jBMt8wyRbSjeHNRLiatXntbKTVPx4XqFdAFGBzZy",
  "key37": "4zTgNBEDUxcBSpoZj1CGdo3swYN6CdUnVUgz5oFJKqawEGB98pajcvUWreignNttSvey8toEGQ2ycNroeLJYaUAq",
  "key38": "2fz56zESxzy2NXHfar6cPeoXPKmPDia7y8NgZq6L334AavF6Fs2WHqwCz6dZpWEPZ7Gd71ZxR8QxZgmLvLrSHBxy",
  "key39": "2KEQFQMXNVB1nSiYMmQsJjXifQKie1Bhg4rLHbZHYQZNkyuR65wrYLZpobCq3bUT6nEjK98pGT1ErasK78BdFtG5",
  "key40": "pBXt7rToqLvpvQ3M58RE3qup8CiEkwsEhhgC14vD9aLmbMqgm4niVCxFxpWCPk6nvD5eNQtexTSrx1SbvkzPZry",
  "key41": "3ohtVXU1sNcUWmVL86fRZwogKVfxZygGBnSEyDUptWRX2yjpJLk6PAcCHYqYqaiFvEbZ9r9pp2CZCbBSymrPcM9V",
  "key42": "1VYe8vnz7HgExQqy7dTtqHHMn6kJLsmp3RzBeRR9bmPwjeTWwDXayZNQokFeuUzaC6k7qcnAbZTEVRTvbKbfXAZ"
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
