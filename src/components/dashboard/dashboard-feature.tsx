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
    "63pXrffV7KxThLpj3NQCHHSnS3fzeF3DGxQozhFzxHvSPxbGM5GZ58Rth8ZkdQhrkSScXjBcHs1kHn6igr43P4F1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4a8PudNhuVoKMF1EU2Q4ewaK3K86xSkyxjHWduQwmpSuHTGuWQ3acvJJ1ZhMzkh3HPKD3dFticzdazWXzuqbgMpj",
  "key1": "CKhdVEz5egkDrPCzXMA4P9YHRzctazuuL1ocAjXRQtHq6G1Zx9Md8wyWKRZNAMuZ6V9LKB9FfcWW6eT7UsPLJTe",
  "key2": "4ytE31M1N7RtRhjuoYkuNsq79yqQoKRrPKbgXJWm9Nk89fnLo6JVFApkSMJDMsggY3q8TGvuvbm2WKXTfCjWJQWK",
  "key3": "4ZVp7ZeJNoAmdRFHFfSgv8LMurbz6u1fjKtG6iJFRhSFDG1xfcGSYs1kLKq25dTYYfwAufD558VQFrR2tAWp1ft9",
  "key4": "5MjRVpxYJge8x42pUfbAJffiPLVRVRGHqKtNesWV6hesaVwy9tVge89dMz4z9L91CJQndiTcN99XrvMTTwWBeikh",
  "key5": "4f4ps7ePpif4yazKn4USeaRgm1RxbmYn7Ust2ctReKbG3Z8oj7iRkAfxyYdLHoKms8MH97WigAyRWnpcqLsCRQQE",
  "key6": "2GJ21NAKqysYBQxmzH8gZXAiWM8jmbeJVYcJXN4etoboMtDXjV8UCU1o1Z3NVcBnYXvNDGtpuAVwaJeberuZq1Fm",
  "key7": "2AMJVBAvfwippyyoXUaeBdkTXsAi38STYuXwYNeHyC1FXWWX2H1VrekyVt15K3Md43HSZZgnhgdkwGBGeZq36CUx",
  "key8": "3n8dAaDSLZFtBTANQsazctYe2Nbu6h1dtGyyHXkezoqy7YuBMWzVPsFrzqgaHG9eTp3NtqjVFUovUnPCnB7oixFF",
  "key9": "2dcs2LwsBXvtKD2AuJ7vokL6bGTFW5CEv3XziXH6iMYpEZRRA2cPYNR6FxFvLt4ojmqLcYYVMqrVJbbB4gxkqdti",
  "key10": "3TSh5B9t1gHHyvyjsCZeCmhyQKyHdYzun22o4t694sSGZEJRhSR3pRnCzAN48M57D5ZRDXqZ52iyPLSfS8jqz9D",
  "key11": "4x76Nz1AemRL2WSM6WWPupPU398VSidmtfhNwJ5LkJrqtrsREjNvtriUa5JF3QstqkV64JZFss8SscqvfMR8H7Uh",
  "key12": "3fPUu9rE717a3f9GMK2gexA6Gy2vozGeM5Xc1rVmVsWnfbw3WpvtPyej7xSmx6PYCeSyda4JmABpaTJFBRvNStU1",
  "key13": "3mGWyhg6gbuMnkiEV8nrPXePq1Ja7oiTdkdsudZyMRk6T7aZiT55j4arSGyHb4ovgAFdJaUYgCT9e7M3FA6opDLz",
  "key14": "2hvjct91qahTYBB9Z61HgVZpwoBotcP2kGSL7VatfYMjyLVSz2BNpuDHW2j7SXFr3pG7gtwPwy5jWSqjrAcymvw6",
  "key15": "ZQHDna9PxDseMaxrVdZBbssBhZxa5mk7A7RojZczCWdu6KpNktZRScydMPLpZ9eXR4Tq7tjD6FkrmT1sThjq8yp",
  "key16": "2uYuK3DrAQtcFhAnjeUNAw6nXvuW5sm9NjZDoVJS5nMim316EP6PqRcRFFyU3i3UHggVNr2msGipB3kT27mtbsKP",
  "key17": "3eUNHTGE5MFnZPo91xxLhAdnd64rHvxN7Ta4kT1cXVbjsrumnHQu43knffeD8dZbZNy6j7ZxMUTpDaCjiMQMbu2s",
  "key18": "4sjsuqjLJCg9seA7s2LweXLkqqzwMpiRVY5fUM3Ry6iFDtjfSuiyCLHia8Km6tpbupygMyqa7CpxPnFTqCX2yHsG",
  "key19": "3e99DcQHysHXAYMpm5JDczpTRLCHzwwUD6FEvys986K5EL37HpVFft2C9xFQuVGCQqdq8WjXrywm7mUmbpjkcjix",
  "key20": "36F8oTzhGGiBXc9oCeybzeAsizEx5NxJwkWcXi1Eu7SCtVBDiB3A58KgLMe6y5boNa8Xeo5EVR3XnLTTVCP4JktQ",
  "key21": "3vou3ipRiQmRRS7WGrxFoRSUwMNkP3JYTJBxUmFBLJZ7YqsMuFX53UQc9ZsNzkybkaDfmP1rmkqe9GmG2pMscDLH",
  "key22": "5hJR8V2zQGGHBYZu95XjvEiFCEJKtzNT5JBzNPF9AVT7FYGnnsUA8gKFo6ZxQDo52XpuoSfHZrhymGrZyFFBud6b",
  "key23": "3nJL7rR9skzHf5n8rarfwYSfovvUMQZmwUEygqFJ7VxcvFm2G3JE94YS2XF64hg4w6VePXWWa1LkCvMCLjvYS59Y",
  "key24": "3xAs9iYSPR9wnoXiz8bbCd9YZN3BZgGecYqModX79Yi4kpUYCWa7GP3qMMSa7DWc9UuaCVyBRTE8LFm7vzqEmUNb",
  "key25": "5U12bmviZTsoU2YUkeH7AiMC4L6U34uU5aroeEyigwaHj1Hh5g6rDipjPziEERZKEgUXkpXCaKw4kvMuNxr8vzhU"
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
