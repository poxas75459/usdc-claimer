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
    "4ucvCRcgbTUqr5aLviasLrf24P5A2Qd4NJYw9uysc66iB5vSuNqeGVsbHuEanqdAu8GfUMKmkP3YgBtrHAayaB3G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bMNL8NLJuKCoWUQousA1JW4qsuMaeAtYADFdbMVw7JyzUfLBQrSTmLcYE3TNAjfmWPuVYsaRn5GLUGa84AiyZcW",
  "key1": "4uzV5ieTBLvWAumehGGGfmxw7yuBmEQgu5Vt4UbfsCE9XHxSkmCwXnB5TrhyHJ9kj2THHm4SJoYnPSaFxUqr4aq2",
  "key2": "5ftGu25YvS1UA9juLheLAczfy1WAp8x2d7GipkeEXpZrJ35aT7UN7nbxxyandgSr18rTSGF2G4d4cpTtMzLWvWif",
  "key3": "42qKfng8LZwysE3W3pfEq2tKZ8oBFTAMW146XbfDCtfqbUW8cubC7BoP3Dq1z326nPWn1smGuGtBcriWxTTE1m3f",
  "key4": "3doC5NCkF3FyzViwRHpGxKRNRrUTnb6edGJVrcdGxmNcJQ3dRpfGYj7w2wAU38mc6cuMcof2PZerkbhs8BQ5BKDc",
  "key5": "2HX9x2HEfXAmY7BBVCKHFEPXqHPnUAMUumsVJCf2RcNURHxyP9MGoeotohY1EU3WwmzMS3fPSHS9P8TWh2dsfTDS",
  "key6": "5d7mn7XqHBrxbtxjoQVRqd4Bjq18fFPvMBUxJQHVuCcp6Li4CJJgi3LXHp7DkmZbnTy5rzn8LTmN7bbUfWfLFDSw",
  "key7": "VguamJPXXogcDuxtPwA1een9NANLXcuVwTgNuwbXS5oQPjNen2Dh5Md6dfVUbHDxhLX5sDdc3TRqzpxuBV3RFax",
  "key8": "pUb4QvCdcEphw9WGp7YXGcpkScMHRN3dMt6uCjPFh6HwLaxavPngCBHKWz7JAxuenivhz6A8ngtwUPVgBp9s2Lu",
  "key9": "4wNNxMSppCUfJ5oRyV6mVFj7qcyxqntaYoznqTk4RDkMYiunM1d8iCM2nr3mbTK2TCSPxJKDvGYYSRQevmH9cHay",
  "key10": "2vdpo1PMtWzvSCfLr88WqFFcK6wqa15XbMEN8eX5XKE2a9xg1YaYuLbVapufh4fx8hjCrDHJcmadEEoYcWWVbZcc",
  "key11": "39XH69w3NKkdJmHUy8q4s6syVC3kN83PVzu5FKyTi7Kbf23no8yYZjJjR6ifdfgG7VA1UsfkugmRXgGwqxvrzvmv",
  "key12": "4EerU7aySxGwJu4wx2psBPE7DdmXUhMQKtF4K5kFHrnaTZoiVnMGkwukRXfmorRpLmgGutQAifEDShPrCraeSoUk",
  "key13": "4JT3VQdg43RMN7WEBWHXNL5f1ANkzEonvXWBaeBAvWk4J3kfnaMfTSzYtV4V7WnhRoqJk6rrD2FmxD8d9ekEXmxo",
  "key14": "26sZN37MfkRU85NX64vK3t4EdLs8BhbFhxzUwXygogaVB7VUvw5qJxRzdxt62vVMVpJWbzTGv2cwJWPbcZvVdrsE",
  "key15": "5zfXHN91dJuVTgqYjz1VE3FmXN7vAxsJ9JgmtGbGASTMbgEGF7vZBaywJxXFxXuYpyf18EKcGNfiQymm1PN5cC4a",
  "key16": "4o9hEjWKV2sCZZaiQGLdR3wmGtUCZqVJU9KQ9Y4mt5cxcuy9HECTaBc5yMU25j3gkEvhnEAmwA1krXxt99kfqy6b",
  "key17": "245GsrB8hgPqChFBid2m7rqKj9soETQFqYBPe4NdXn7RT82PbyCuneNnGh6fhHg2aMGR8CRtjF3br75LmDxpv3YX",
  "key18": "5Uf4aVcSoKN4846QsqoMADVfbiLPNepbwuuyjUpWWDwVo4YZnZ86XTbAenVuRAzPDckoMmYSThQm5F1SBduEkuG2",
  "key19": "2LVzQrmKwJPQuBG1Gb5m8UjmStmFBHbpwXA2wjaRCwZMTAuFDxCAwtWLmKDea87G66JUS3N9bG2kUEzqnyxwYdp2",
  "key20": "4WFwdtD5UzFb1UWo5pfYdrpSMWkV8hFTR9pYCVd5ewrKSrkMCVoCnNztXmTQiejsegmDu3SmD28NMB7YFUMntDVr",
  "key21": "ScJ3gi2pjqLKY9HQ57DUwMy9Lu16PGKQDz6x8Zf7yZ5yBrt28daB47RNfS87sT7Mm1DrwpunYJ3nME7AFtuLqNP",
  "key22": "5Eqkh9GsEJyG8wAqJJNnSHQ7xJ2EBVfpt7C46m6aP6o4YTUBpCs3FQi1BTbwMYkm92xppSqCbhH9EVi4kSNkDjkJ",
  "key23": "3XaR8sVppPnTXz6o97MrP1xjdfFGNo6hnzmhq2KyKQ2P9FC3crKDpr1UFprbEBtZwpawfyCioWw7s2QT9N8D3J5o",
  "key24": "48cewx9vzWt4hU2zFT7md3xq1AcUVuyNYFokt3Ph8rqJsDc6nkwWsBxFcYndH9iH9RqpHWAMWj2Ez9dxCo52scp6",
  "key25": "29dtdSjYnttE4aPpTL4gKqsHCgeXZUHXa2Nq7mLwtdTTacqBbei3S8fjHeXWXSao46Fq39Qbmgf16AnFUdQ4LnUH",
  "key26": "5yXpHyrryR4dKct2GFN2XcU4GWmAa5ZHVB5EZ6Zvp411TDuDcuSV3k7EzBnCH7BBuvksrrvxJx1R23hoYLCh8MRo",
  "key27": "5tibav6v5TJTkjVvjXiKmoFQ2pkACnhG2o3bfeRyZ8wnRCAzvx89z5b4QCc1uJdM6rfGug3uq8TtS3oepKKTEnfk",
  "key28": "3mMsFHNpjKg4kKeEFifMCXdbT2Kfo3We6NxFp8mcpwBZSubsNjMoWGvW6t8WbPuuTqWxpxKjEFDJ8Bk664feibg3",
  "key29": "2L7ExrWnPzPNaudiTahB3Q2at3d897dz3pHFJwQiT2h5xEc5k6KeJeGT1mTUxxb5fCDY8Bdy4KFVk465pp6P3NUD",
  "key30": "33ZZHyufihV2DnmAy8tX6jxrRQjfJKZAcXH28wnwPguVVVgFmT3fkrGH2fvehfAWAhZ3Gab9jZ3pDmPxSiZ1H54P",
  "key31": "3VwF9r2tAH9NGFtne9QVb32CLVyVUVENP3H7Kt9vavzrt1wByWQGxXaedfddyJZfQAabZ8nxpXcjLtPiNQc2J9vo",
  "key32": "5eAWDo6YBeRCqaYcMm3ZwXE5a8LK5TFMxm9mbopsc9VPiPse4nZp3oxuW92cD7inJwiqfkCepn4kW8merrVjoSHN",
  "key33": "NDkcyUn44kgch21vn4Xtn1iRJzkKhA6aWgmJukpp5YUdFacTZ5wA4o2z3qRtuMt3oK8gNMMzKQnTVHP45UkoH5S"
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
