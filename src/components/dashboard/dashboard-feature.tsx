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
    "2iDR5uP3rA3Vyg7u7BSWktA3VaB2U8gohDTR5C6JceWfA8ZHg9suQAdeL6bWopXbzHYNWKWnhiYVdrXSjC2wPk34"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Q1WAFRZfhiAXjJSvfSPwYUPrCNhdbSMBuoG8v574h1B9hnDAXkUeyAxDXLJ3SgVHRE1XpGMzrKq8oP53aJRyh67",
  "key1": "VLdXDecBmXfgNQXXiAZqU9GQHnmoFSVowDtG7mqZjJaSwSECU638W4545G3GLBADUPENfTJZxJbgeFAriHpmcTZ",
  "key2": "3uBZohuQinkH74ECYUpFNDRLy54F17sDYm3wN6wUfhsLuwUZ3HrShrPjd1mezaAHMMDVoeF43cNh2o9UJnPraFDb",
  "key3": "3NwbwbfPbDJnCQiuLRXwnHhqWYpuHBp1FYBUAN5c8qkuUJuZTYjePpUuCakDDLgPTCSrvadLZDWi8NS8TmM3ZzbY",
  "key4": "49Cb9r9qMxMnFFPQMb8r9Xb8vBYg688eqmq6ci3sbgehw7cr6sDkhTPhGhJNWt7FeDNusjySm9wcnzCwskQzg9AV",
  "key5": "2UrNJBTtngiB5S82ty6yx2uzkzaxBmsrMYYnMWXAsMKK63a7MG4Dqh3NATnpktDErTSfryB7FCXvJ7hJxujT9wya",
  "key6": "bxt76MU6Q6zQCpgnF9ATCwKzpvwKAqYFkZVDpt8QWqscBCBGDcpZCsYFCHFSH4ovakrjLg1Wz44vq4QAAvdCoBk",
  "key7": "3N1qRtYn2ZEpzcAf4xUVz5mXjdmYnMVYuQMfRWy61RypE9Ept4JUoSF2AypuMo1MAm2zZNQWBYEb3QekUDXVQjet",
  "key8": "5BUDYFe7qkyA8X8WWZAcxyvUesHnJa8dC4ZLJJeCNk9YteyFVCTTx5MfiVMUHRVAhkrEdCktYndkZzmqWmaZ1z9w",
  "key9": "3wneM9RbmJBACFYHRwtpF16V2GDza86kdqrgT5CW3CTrzySxDxKXB3vpd6fXgXgG7fEQ55yoBjLehbFLUEBZqUBw",
  "key10": "4zaeFrf8PSaE94tovtjaZkm4SLw4RmQRhqVMomgxHng4McbN7gcNcEJ8L1hc3MokTy1nqaT1KmSEDt7KQwZBVi9G",
  "key11": "5qssYMRakwRt45Szxqf87PMx41FeMdft4ahwZLBJa4mG9pbG62SvWQ6ZREbfYEeXcEYCiy8wh74ezt58FVQx3PyS",
  "key12": "4Bg4Livxpwt6hykmmyBLZeYfLiRCx3PmzdVMSpfH5spucKKiatfmfBYURAd1WbJKvHbpus226b5mLCwkFis7WZvG",
  "key13": "ptpaqz94G133ufMiNV81nBYpECcanVoYhTMDRccCqjwAMaeeNRHawb2jCuB4Qt1icsTL2dtpSj2dyeFjvvpdhan",
  "key14": "1GiyerR8auwtEtfyyWJ35F6uLk7M4y2H7jbkXZB6scTCgrvcgMhmoUJhMGwMn4yeX13yWMZtnxp4DEcWNG76b4w",
  "key15": "4CmScydmtLJDy2J3Euoj1h9HFGH3HGE7xEofpvVRjWb1toVurFcticVb5joYBt4XhTvg6TXsZ3qNnjZtKTnLpHUB",
  "key16": "4kJavgmNJzxogDJh3J5T9uxgvr4FyaQNyPg2X9HUFzkXXWSg4LjHNE2YnzvVjkf31oAdohQrMiD7hEFq7aVfLWW6",
  "key17": "APNDwQ9gu5f72QTqvQ2n3PaYTwnF64GnNxgYiTmWq7PR4HXyRHWCyVqGqUPfGZktH5u8gstwDcXv1YmymbG9g7p",
  "key18": "4ACczKEYRuJ8rQuWFwooPNL6Zmr83FU97W6iLUXgq5uAFW5e9bH8aug1rohNenqA8CwgTPDa6P2Zui4A46MedSSQ",
  "key19": "2qo5rfjykvAngEj1ijY5Zzp9SkPRCrkd89hWnqwn1HUKj9CUEDcpMJWCbv3sPVmVjpCmykdWu2zdrq44azyPEG2z",
  "key20": "2jhGmbKggbe2bJRbvfphjaZsLZxYMwgUfmofjwJc8nWw51u45HYTrQmKuZpvQ4xMNRFduUxVJJqDdzRHNLGGB6eR",
  "key21": "2WNiQyX3vBJXuXt1sUAKU9iTzmK1JBTEo1NH1qcVuPF8V6BqhFRp54kQrUsMthu4KKoxbFAWJry2nEwinJDaExWA",
  "key22": "5gpmC6aCq1ShXoxn4FSnA6eASdNfDji2irJyYLSqMtnsPcVcxJKc6WPqDkqD9hzfNvhwnA71kqbUprdBSd4h6mUW",
  "key23": "azjReRd18nqnduEjjULSU7tRHjrpFRAEKmDa95nEBCtPaDMwmexvg35pz7b7J9qGUh4jAE9SaHg6F6n9qmM567P",
  "key24": "378EhjvsQcLc8k5xeJv928Zbxed1iFgJEot3qaY5qgQ4nL5mXEG2HpJ1zGswynsF7VipozcxdcFtxgGSsiBwxyv",
  "key25": "4Mh1JapGX6pCk8DN5Qrq3jd7PmdqhhNs4wF2oz5JTVdrcicGGMguYeY6x7GLokgCHaBEsvJ4k1JuTPN1K8qqZpYy",
  "key26": "4pTa4c2QhgZQtkxFcSo8ewrmCsKnKwp2TVJiPiUDpcAkdXqXorF5tRdd2aN5TV7fPARc2GqSn5gXg5YUPph6rSnN",
  "key27": "5QRKqbV7xu1o81fgdEW5m4z2A8f4itYiHvEbEJ7QF711ASacryGa4hMYgGUovj14EjRBG3fYgCSSLuwCfrELXTsF",
  "key28": "64pnjW5WwKLE8hC4deDZS8x3MF4hB54RsZSJYRQGRYSTCBeYCX8Ld8WEPfewHpkxK4M1Mu5gpRCAmVS3Z93oPGJe",
  "key29": "2rUZLRL5U599J9td7Gt9yPc6GHHqvdL4dGaQJDQxP3NgYLPXPazX3gmMV6dHiyV1bi7shKJyfFp6NC2bykKcLqUj",
  "key30": "3eZtouWpP6x3n7gQXttiQeNhXgjYBeRq5gS1eRq2mJqWPqcH2WRNfaCEsKYsUSVGhRyDtfjg8FMiQoyksZPAmg58",
  "key31": "352BnCk5rKcj4tqTX1s1bc6A6j276yDbATBYZw4JR4PCydSWSpSFqeBBFNdyd1JWw26aREWJgJnSk3qcBsNDmtd8",
  "key32": "53SSp5ttQbukSsdxGg2qtek3EBtB36DkCyBbr24ALMH63awbJRpCnMAha9sFqBX6KrnaSSUWfExPeivdYjTowBRm"
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
