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
    "2QuT1977rcyrYJnYQT7RCEcMCzRabDJBpgpMrJE5yKj9L76v3Y6J4Np8tBUkMUMFUq6Qgwk5U8oVs39mLgZzxA5a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2s7jEaTrhunjBi6pyzuGWF6pHk7HYXdA2Sd7VZ2N5BXAA716cSQ9qBkuYZ2gCGCVwvPcAL1wDPCtY6jq3R6twP4J",
  "key1": "2D2yz37XJxAtUvaRSNMA7LuNRKM2D1T139c8GcSwHBKxEWha2R6xooLKxdCPg29rBfzKZDckt5KXvPfwTwMrLncE",
  "key2": "5BLVbAmJrSA5WXGtQxbp5uQHxTRXBCURkZVsbguhnGcx5xU4px6YsKqvitGjRXeYmaDCDqZrNcw6fnGZuSQ7DATf",
  "key3": "65GoubtHbEDVkfiVaJZm5jhyF8TtZpLvuFKhGRT9P7XLAz7UnqFfXjaZ8Hd71p9ZJBmcgy5tYTy6r12VA4XwaFcj",
  "key4": "5zdeBNYGbaaLczuMkue7AeWpGcwLSnBDtUL3cQXK4MMZs8H8shshacdxHnVhX9KjdhnawhwbCkBPenVE1kMdL5Xa",
  "key5": "JSSNG5yjqwRBA9zWxKujAnzKE7GQayL8MwrJXxkLZc2ncN3y8wV9YexKBNocJnu3phEPV4eqcR9yqFEizGPFaWz",
  "key6": "f2sD8ok1myC9tLRXVQGS1Pj1tn2MwxLmQKHyM42z1qEs3GT6yurEgqY6wfvFYEWRQp6auT7ADKZeeb8QXZNNbtC",
  "key7": "2Te9Q35RRHQWPm77XEHdtds7JUZaMQFRdwaX3a8BSgok63euQ3UuqpCN2yQCCpRHyvhg7esNbUJL6gTxNFPDUDpf",
  "key8": "3yV2aMF7KrB9yygWM731rL1dtjyzcHSjN3fyPoH1eRVmYzrVmCYZ1js2Ue6HVcv8t9n3YYaPhrnJxJQxwmuBTBJ1",
  "key9": "2QWtzWoZKydy12gViMw49NyhuHkjahReP6m8zLMhvRE7qbBZKGyMeetQfkUH1Buis2suBuPiHzVThDL8SH9t2i7u",
  "key10": "5iyinKrh16Bw9ZmPPf5XYTkZX4uf1n1NmmmpEBYNres8e5ajajvVW8Rh1i72KZuJSpE6y7huFaQjccDMZkuMUCUs",
  "key11": "ZXJCAJGnehaA1LsjH5mCY5wN4dQJKNbhpwhdxvSX9EBhSs8QC5ogaLYBDx8maFntN1v4ZeP2pJgwS3rceEKns7W",
  "key12": "4JBgtzsCG5iD7CAcNyatyXDcPxUUrG6knMJpopWbCUMiQmMggYjTh4WripJ4ZNE5feujrGw17QvwZ1KBQuXZ4f7w",
  "key13": "3QSZj19fFZGderVneN5CFTBN5bYdNssndpvzkvxejeTXr4AhxSK2N8fvChYwYwvXBx7ETdshhTnT8hortHDJBmWa",
  "key14": "4jaDBuRXMp8F8HcTAu95NBscjUJ43vcf67TBpG7Ut5NADWZVYSpXnrUM9hKqfJsaKcPkKF6a7t4AUkPvyHcuxvwN",
  "key15": "38Wi2h2ovYWHhhdbQ3TJ5wXL8ihoQYFecVmqX2sPgXsjmPKj484HBzzTV8N4wSySRcyJccwVEChoRC7mykuRaf7q",
  "key16": "59TAQPRYCTQ82gW8XjqvRyyErL1jHzdbfJmR85R74gNisuTq5i1iQ2zh6u3pTVW4JCDHZhpu1bfqWQhfFq1mkJXj",
  "key17": "659wRMujb4r9YcSKXc6dqveinmToVXshodSFdmRnRsfzcNC4fXfCSj59hwq9Sb5tmeZ5DfdVYx4UL6F1GtGnkL4g",
  "key18": "5xK6BGMnLNZFQm5V75DFkN8CjxZ9FVAW6EdRnBbqop7ytbdCQJoC11wnC1XpH9UuQUfzW7UZEmmZiWzH2MUkA2qZ",
  "key19": "41cpysuEPP4W3rFNVGCm2zii7His7C1VG4bYX2Vj9dtaxPs5jtotQGnvkhbqPWacJowCSLtEZTCyY2XnjwhAwaNJ",
  "key20": "2oEUCDtLh5FNDQd3y9ixjWZpgU8SUaJd8STRAHDaWLwFVHMoU9uTAuSMUZbyfg2JnuWLeUYmp7bxWnNRHBHJor89",
  "key21": "5JrVHcchF53d37DigD9npNaUKTrrhZVUsrKDQrGmsv8v1dUYSY4LtxdCws4Dg83eVk6j1aQU2KrnzpMmW1Kgmrjy",
  "key22": "3tDEASTdhU7b8RB8P5kwMKFY9qJD5oHPJYBB1evU8pjaidtdaZKy47ZLPDS13UE439R4MN1L8VJkCrAzPRPpib3J",
  "key23": "4nmfchfWfcjCi3Fr7nVaxpg21VE2nqbmvgT6gvMfmooJAiLrZjhkt1iLkSy7WeAVWjEDvqyHtsrJpNvK6T66pMST",
  "key24": "5nTzF69izxiu5ViyWfHX3rNPAzUpCpTJR5TmovNyEDZHcWRTyQBoUH2uvM1bVUT2SwFeAF8vfUgdYLmQn48dpHkq",
  "key25": "2fNmZRmtsytfPSom4Bsa6pUjuTdTeMULARXnQZDnv9rsA2zznK6i1SKLtDcnK5y2VieDPmxjPmPFxWdSttKxxGFw",
  "key26": "3BqEQwRHe62412cSwxs8TRWJj4akpMdSZ9gL415MjWHUTX7RT2moiV3V1eizRfPojapoFGXek1Vk2UfxGT3LTeK2",
  "key27": "4SJR7bkkWvukJ1BXETQPxz4tXAURmh19F3Wk4DSJ3CXdCS65DfinPodf2BBMNNDkfXbLhPkKFPAZvxS7nqrkoXG",
  "key28": "3zNLpha5qqRCYU5Nt9xUkJyEumW1M8p1FGq5wjeowmbRAqmdzdyhyvu1Zn7b8uqM1MCvDnz7qojE5uV8cvSaUym3"
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
