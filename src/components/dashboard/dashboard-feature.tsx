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
    "2dda4J1Jyxj1ZBhmJrBuyurSHvcShLCn3j2mww87oCNm22M7jbHSMA3vGRmSFWQVoT4tDPwi7Mr21RifPHoXfv5J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LWB57yreJM9NgJFLHxrGXsRsAWiWbTdMVU7yijHVCu2bJKqhJ431pist6XtmHeoaiUSaVacoNiRt4yznbp36yCn",
  "key1": "2vWfKMmr2vLRgvHXbspbGQLSC89sunTUE4AzFQhKRMvKsLAcLJ8kMCmGQSFvwNGmTr5MadEvQ6UEvT6tjdmwbY8L",
  "key2": "3PpzF7xmg3BFigCk6R9S68S1fA68xEXkTi9vpdCJ6vjJEBDzXFBBrn5GqLi6m718p5mG9Dt4x2dHzUXyWxu8gNT9",
  "key3": "b99b1hSPB7Bk2UZPDmh3GVvMBKq1tsZUGDuZiku1hkmgAu8j56Gfo6YH7GmGvaE9ZAkHcUVi8pBNydGiV5sCpUo",
  "key4": "31nUnch5urhbkMWnu2LsG9ZGawhfthajVLUg9GVkMmbSS1mY3Smw3CxbZRs2AFQDTHumvwvddY4GYdjettS2xHWg",
  "key5": "2DocP61xGNc7rNPMvDq2E8YLAhAqRn74KTLx4bTiLo6pK4xktuyY2A4bFTAA6YCbT3Pezab6jchh9MwaCcMTaEqC",
  "key6": "4Ts4d1gmYZfmXqvPC1ZgdhzJB23WxDMia66abXdDZ1w7M5bQ3jK45fBQ6Kynr9G3Pusgnvqt8r2pEfy7tiAypReX",
  "key7": "wNe4Ts3Js66xGrBPtqQuhcbfcMrmhLFrPVQt1sDxSc5DKjHMcEo3nWZ5u8G7MxGCozq4WSRJMnHCCR6Y5efnugU",
  "key8": "QTvEXEoj4cHeZH55kb7yq7iW9QPc4y8wb9EsdTN3dPzpaVmxCsf6QBzr5KLr1szf4rfrHMztCF4eziK88NjxFrN",
  "key9": "F1LvcfjKQJc8YAZAwB8SxPUZFPUr4YtjPhNcYdhQQ7GzXs4iNcCAUyeSALEvAiHfte9zj5QtWtE8kNHHJW4sPDE",
  "key10": "21UmCcoKABvRWZDNYwCoLBCJzT9iWKTapqSZif6Rc77vQLNpfjinDrBbtzsJKvV4WjfKhgGV8kVjrVLR74KGyKP5",
  "key11": "2nAKXcgSTViEUHwvkR9Czo5coFSgUrjxarwgVRDYYmDiDuA8pjSbypqH7YWHTgyp5NJGciJot4xQbW3gGd4C2xLP",
  "key12": "WXCwcnfUKXJJmn7jsNHkCtyHf1TRiy4cTynvf3ZeH3uzFEFhpXoF9XeD362pKvA2n8a4j37e9GGqteQcWkYq9FB",
  "key13": "qZeqShvfJECFhtHM9eYf1XewdbB5UHVp1AZHACPBN93q65bBczTWtmERDH9Lzfos1tGRnUFkwcoo1TNyXRAjfys",
  "key14": "5RwxG9JSvHdpoypa6zLZdXhbm5KcdMRPNxPdZd83XEsBJyPr1yK2CpA7wiELGCqCrzovaiZCCRcpKwxt4JA3PKnd",
  "key15": "63BXsij8sLXwBux4PgAbgx8dYYZFwgfxcQfWAMt7oB7nYeQYdNdfcNnsPrd9hMFn3fhDyAWriFyQXiiLp51HWe69",
  "key16": "39wYrnNbDQa2FzVN9uRjKqUqxUbRs6Gn5FjZ372xtSiTSHKV6LmF9Tvo6eduaq1RccdUqQSMFpKwWGdP2dFodAMW",
  "key17": "3ztqQDdP9YSUH4A51MTAbpZmu7R92obmvWDKk4bvPc7XMsatJZ6coj6xFEicoX9r1wTiMYXQ7nF8Ray8qeXj2a7T",
  "key18": "4oPWY29w2eo6X3dTLs25fB4jcZ7H1TeMznKHFyJTjQHEZoS2Lnb5fbjJHiXhn2jihki5ybYQggDbqtW3G3QLbgrA",
  "key19": "3zDjJp8RXCShChi5k4cWJTGa3S51pQXp8yoyxJ2SQTXSh9x846t5hXtag3c1m2ZxxJ7jzzidiKMRTyWk2TLppaP6",
  "key20": "5Tm7DSKvxV1PEKn4ezGGNpgqNwUTLThpqtwNzPpziAi5ZWU4BJm3KaUZP3oSG8tdvt99dTEpESZSGvU4E9chfSFV",
  "key21": "5RZNrYmrgqf5rR7dPy79w4sYgkNmBw2LV8KKfq2QAYp4wqb8KJYDN3Bgo4qJEJmixYZTE2cqBY3kXUKTHrzJpTEz",
  "key22": "xShu3wNpxPYDDVaU6WD8xXamWx4pAK3FL1Gq1M7KJVApPpjDDakPepMx5jc6xtLccEt3WvcxtLtkPMHYnJKyyWZ",
  "key23": "2bnPed1DeR91GqzAsajQqRqGRoDBG9K2NRbCLDh4vrCnWHTf5AJsGY6atuAdaudDA2tqfhY7stMmVoTuUNsRKGPw",
  "key24": "5PL8nyCQPkfQd9x4Lot6Z3NzBbNpSZz2uo12k3YzPfYxaa2bhVygSevUtrwPsKxxPti9JRCkXjqEdk8PHHGuNXAg",
  "key25": "ibLL7ukP4VrToTBZ7qjVBYid9P7jKJ3hHoKM6qiDMvJTQyMCAHYT5UMirFcmLgdA3BBTTUAcYekjRQbv4TtN9AJ",
  "key26": "5wjggyk1vjx4rrmqfaP1v5E4gWYjw9jvEqB1WSGH8fHzpCqEvT7F5mmZKW6pSobXRJvgMbGq2QfTDCft13hq6quB",
  "key27": "3TjYyNKoW84cLdCsYy1ZBzuUJjRVbDq9GdLzhV5xoLbmRchwQUedAMX3cLm3Z6DETAptwSzAULaKwkRe8M25euur",
  "key28": "4CS47KjvFW65eL2bRiahZHjSxU7ySgWSmCUM1Lb87Ei8Zovr35Bf92f9tSZfScbvjqjrT3DkmcbiNSrw3XjVViCb"
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
