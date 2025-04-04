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
    "2pdfbDd12mhfY9P1vyo1zfeV994sLTjjZeAmLNa1eQrdYjkxTGMkf6joTSszxV6SvqsyMZUHn3gtMmzch3cBydGR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Y9nY29bjXYdUVoZBzi6eABbcC2NLBjcxwKT4Z8wNNM1amfXKsWu22ktbn5gA7XWQJfw9RG2uKcQ8inJD7cTqmeY",
  "key1": "237RmKAsGo5shU9nFgVKwF7Ft3kN76fY7SHLuGRN7C8yaDXkdd8B8FXLGB78Xu1KEk4GcJCF26T6axk1ZpLqueze",
  "key2": "397zoXRDKYptABQ3ckVrzyy2vB9WpLgCwfNdQRXiMc1bPEU5YL7ih5rCbUctv7xjfy99JVsvXrM7VUakaEBGQNNb",
  "key3": "5YeNFD3F7z3gr5GS46MKyWmBYRBSaFPXfpDPwJTPe2f5Nyms6u3E3t9ZTGi2XQ8JmTcP7jKt3GqN7ujezyg5bVjo",
  "key4": "5A8XXH6oeZsu9pJQ8GAYS461fqQHEh9a58skQ9mtXjp2RkCYvEw1UkceL8YqpAFPCAcqLTER67rAYN7ecg4YRWDp",
  "key5": "4CToDJiufH6iQ3wCjefN7hPBc2qeHuVyRRP8q1U4xzaVEJAoBwYUm78td9BNdJsdGUJSwRRPwLwjXyJGN3JNXZRZ",
  "key6": "3TT3HsQgffxKDecM3m88ErnwAMWgzA68dN6X4nU2sGUnvKsKMCcqFDM1RdUVULFZyR5dXFj2agSyfXjsaQkJaBGg",
  "key7": "4dCTJADaq5FwDWj8WbVZLSemjN2KBNKqtSGdUjk6yDoLPAhskNCrK4kmZBa92F11DKynksBBhHuyiHa5xeUL8hgR",
  "key8": "4qdrhXZLgoUdJ7F3xAcsN8Qw9wppUVi4775Dy4xSCWa7WPu5NiHoEZzgRMRwsPqGEKYZ7gX1CGirw97ZQ8nUGZGY",
  "key9": "2J6Zifgt8t6XeUmMzas6LVhDXjqfnL4w3D3u6FusshfQiEd652yQ6KJCLNXHbb2NLS7AgiHDYhUURDZurpsXicgx",
  "key10": "4dSi7ccAVNtgE7d8L75XfQaHiBKpNYV3vFPFDLNVAzw98fjZQ4Wy34G4KCXMnQBAvZzVJLx3mJVNfBuY76hHasQW",
  "key11": "3WH6jnbmdaLA5LqBWAiHPq1oQmND7GcE4jeJatyBW5yTs2EWLSPx4mgS9BCih4V7pdT7895GSSA9gu5yhpiQKSMw",
  "key12": "3s7paYFTax88D3fMJb2nhxDfnWwXjX2mxHQ3xfFVSoHA9TjMuVtrMYKyHaKPFeCBuHPWinGA263CGoxvsx156xPW",
  "key13": "43nwt9NCtHLL6mGWzLLQvADGcmxvj2Augp3nxQqCinERwhgBGDT1sgYyhf6YekhSrzZfEkbAt6M9jqqbYL3wf5jm",
  "key14": "52zcCXSNEKPRn1oU1GeJZU8wzHLb6tLuYhVLjKCKJFTJ8ZetxLr4skRxyw9DS7FzTTu2LRANmi8JTCmBUr9GFD5B",
  "key15": "552fTW35xS2UNYBLSMRVwcrMU698qmMpEtxCWVfZdUWiLXCnuxrwJxzKxKE17rz6PpLMJccWyxMpvnPafZUzUMW5",
  "key16": "5tXPrHjsofC2apZCavQqiFoXjG3tgrN8RGsBRdqZp5Uq9NV2v6GAkm5iDXgAhn6jwcaJkWmoKVh6gC21sKjwpgvB",
  "key17": "2yXQ5wJZxdfci4PdUW2VhTwRyHcehcXapbHiio22vAcmSuHJyyf3b6upug6TibYU8RR31htcFqkZBYEGjzrGYqfh",
  "key18": "65hYiz8yyQkPdtbcrceNsmh6Za3SRXCvZaXXKbY32r3resbd5q287Ud1xc8ZtHSpTvyqRruQCqCdQvfquW5mUkqv",
  "key19": "3AyKNKAaGbdKKRkAg5VpmrJDBnJ6KLbKzaJptUyLaxVLXAcc2hKatMUsheBfP55ge8QCuqU1etnF1ze26ZWBy8kE",
  "key20": "5RcDDAQigeVDz2RoCnegyNuCnpuuhx8U5dqWPMFjtz6EYd8UU1YCLV91ef5vA5ZYvZn2dvVBr7ueHCSb8xf116y1",
  "key21": "3daPXNfLFjCisPajMGwyWY1TTvygkjmDuCepmAfQohSApptVhzWddZt8XJ4iKTTKKhfM1zPs8b8gRRaBAPeUTe4j",
  "key22": "3VTPndSfutPcrnpqsLtUN47b7o5k4EgLGs45mEwCcLvctnrD2vHWh6hgJbBHr1o61krD65iVJULJTRyatrLRrdLG",
  "key23": "51G5gVsc8RXarCuR92tvRnkT3TePMYEiYQ6F56gLiusaiSdui8btRrH1QspphgSrdfHTEKwHw2BwbBExcEsfYgTB",
  "key24": "3ZoURdqP7CmaK8Kgt9NyERRMzvUfrfT1P9imVqEsnXJczZGDZn7xCN4zmj9x39Y2bxY59ZY2aknycTne8koaDXT",
  "key25": "3ekevSLd1kRHZAfUW4vfRDBvS6gZPkozWkoRWstCCPy2Kzn37tq4TTUMgtbYjiVjmMGeK9nG8Ebt8dJ2ykpEeyHt",
  "key26": "5zUt5nsa1pqw3L3hsccrbuQsd1h1FuvG1J1uaTK7yYDsTg4ZkvG9K5VbrG3hDfchYXET5TpRFmiG1tDirtEhahPo",
  "key27": "5qyKLfmb1odntjBpiZSBMpKoZb5fKHWqdTCt6PWtfVoBhFaum3cerSNNqYiPQmhHVwiqY8PNtifnAMTHew2tiBLy",
  "key28": "63kNZwwUZoaCDcgtXSMir5MBVjy2Bz5z99n7NQAKKyVUrZCXahdDTUC9oqoZgxwkMfDuJCKrprbwgHAG4YoiHU32",
  "key29": "5SsG2UCp4HXou5kSVvyiheL8t5nTaRH32x12kBFMsgkS1ijenuA9qdPZm1vvka2vEb8JgUjLNE8AdAvDHwA16Gua",
  "key30": "4bucPca5Skc5c5QcXAphA9uidi38S1szyRE8NADEaMq7HccZG7ED4xiogexv9MXqm8rYE6gjXWWbmq7GxYB1YNuH",
  "key31": "45g4wbNnzsGST29fEnHxDLM5RgxjXio3Ltajm62jaHLH3q5n2vwTtmkChcfqCAGbxLhgbmbkjnF3HNJHJFg934UA",
  "key32": "2yPf6aKXnWWdtkCxhLHN7n1fFUmdfSN97QzvJsAh3FEG7qQ6HRGLS2MkpPafL12YhbR5anyqqU48etxhooT5m6n7",
  "key33": "29ZGrULjthbSpVZKS2efCuaT7eJaUzbbf3dEwY4bGFdQ9dZPN7y5pjbjZpenoksp4myrcsdH6Kdg28HcTp3bQiMe",
  "key34": "3jEvcWsTKBF1LwSxV5LMyFyr7QS8M7cVocpPf5TDPpjT2nSQN7uQkPvXYidgM5zUUKWBcEeRLS5rbXugpDT9T5cP",
  "key35": "3PJ1V1DBUs49YZLkoX9SRjYVJfT1pSdgZJzhtUvmY1ogcWdd5fEzNfpJFxJYkqxGk8LTru6pynk41GSDxGXFzoXF",
  "key36": "4pf8tszVApuis3siqj5qQKYqSUsxm8MSfYeaC6cYGsxZphczhwbowEtTrUicTu8CmQSAfCy6NN4suLhi2LWuVmGn",
  "key37": "5iLmYHoCmvSfADVgxEb4UjgXkA95AGk9iFnoqSgN3AP4SuASpvnZDnfcP38P8Wwtkb7TMKVZxmsnAxdqwqSLNegp",
  "key38": "JUN5yod7ncLm6jTNsk4XhaY24Sgf6MMefuLcJmdtENWGFrc42VAJJL7STig4Faj6aMUHh3PuPyMAF9RXQzzXXF7",
  "key39": "27qUNJLHB7Lq6MP2huaa53nBmfZy2yumUTHScoBUfNT7jMonwmjxLm9rnzU67QfCh7az3ehyMKm1nkjXo7A45fu6",
  "key40": "4uxwXXy2JAURxMXiDEMhLe1AHZi2Cm8WfUjN1Pm1y9qTJuChM3Mxv9yDEb5Fei3zZy2f1ernGyS2p9moyLFpAPZJ",
  "key41": "2P1tWjmTNqnUD7s76E7jD3aaT7PWuMt9LeZUhFEfYuMufzDdDYRTa3bUPUmWf1Yp4ohGfD7sjUycUucA9kYcmxMa",
  "key42": "5ztLHwF7m31NYUarw5W65PeRcKZMuxeLEnb4JyNGGqQFyNiod8gfvptgrjJUbk1ftBtvksQyszcBY4GWGMMbR3Tr"
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
