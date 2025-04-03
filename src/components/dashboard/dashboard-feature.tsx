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
    "2DmWMJUBBUc8XyutGFYNqtKzLsnJtGhNujmLw3ACBJDFDYMYhWCWRxC2Qg2zbfpmBGZmi7enedRPbh1h4dhqvQUQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Eq6TpvDqseeK62Qu239UvB2D5aYK1V6VvoEdNVFXkBAc5Gb54AWEpH4g7Ki4u91f2t2oWPnhBP3aAagzbGxZ2HP",
  "key1": "677pqtJaC55YPyab62fXbbo4JRFNSV7S4tFgFWMDAvBFx8fBCvTBzg1maeXN86mCqdbmoTwBHKkCVPva9VPM3JzV",
  "key2": "4sUnoSNbRXedVoEhkGL3gRmh8iyPZamUDx3EQAbUxwj9UAVKrvxneaDKcDCQjRefEWALFgBV74VgU9hZJJjRVGnc",
  "key3": "31QK7juU7rtD71dhVpbboUwJ35CyzFSNvpwo6sP3m5jnur4RwmVD7zxSWoQDKmVFGSMnU1sD2c87gnUwiGW2hEYJ",
  "key4": "Pnr919dQvVvHdLgXP81xrX52pGgSMdHJKEQAz71uJjjmBEbg4sToj1KJUNuPB5nqYW9WtQqCHzwrPssdh4zJYYg",
  "key5": "8d88adzgz8KZXbKbSB4QCVq48ySfDA6ERh87iAZjrbVCKaPi5BtPeqae9xvVzV1wbrjyo5SiqHFmFf3AvjBQzzp",
  "key6": "4hGpnhFx6pt1hx1fT9yz2eBK9hQcaN81TUqd5ANmNrh1jJhNE48edYrihJi2sEpLgAJBpfS7nFhHgBaq8SM7eCxu",
  "key7": "4fhout6F5k3tcPTTiWuPk9LP4ukCuFZV1KWsWbpyhJtQYVfais1owQTTTWX6XMzRNMqhXdZaywoJNvhqsV7hiwjN",
  "key8": "2wQmBEVZGRR5Y9arUzWCfpxWBZph15ULkaH1hFwVMkXkpwkQPdK98Lr8B4LVUjC6rqCi7AQm4YjLMFP1J3C7qhom",
  "key9": "25EDwubK9Zpb4vzHAr2HMCQs61DWbeML7potyvsj4hhgYhPVexBnjzVFeUZ5kK8AhYJa7m1d7ezpJpnJrk4VWKwY",
  "key10": "NYcE1R9W1ZMDma36ZWuBL2Makwwh5nn5qAAxLHgyrXRxMuTBjrPa89fwQ5spXTVEDxT471oU4mPmd23J38DonBy",
  "key11": "32pFCtDB56sdZ7YaE9epNr32LCSzLmqwKjTEyLBY5survacLgpvWhTtiAwM8xYF9KPLhTQocVr4xgLH1yZkLv5x8",
  "key12": "452rixPmnPFbc688ndcZjn1a4ynr1a68gh6nXk7Hzu5RR6LY8TGAcarmFtmJFq87TokNuHpsTLPX1hKW8qed38bN",
  "key13": "2GYmCk7BD3j7DFZTfSUTeG5GyVHMqkPtKqRG8yh5QXhmPe2zPvdFfCM1h4VBss656uen8fVi5JYxvCWCAe78fLPy",
  "key14": "yuTfpMFh4CqRrjLcZbmjyhs2cd1r3zKwdZEMZsfZVFaghj7NDCVVfFx8575kwn1HRDcsrpZFyMcybZQ2S5jmeUF",
  "key15": "iDpWYimrK8aQzkDeAKeKbY5Q9MNUu6FAohCHfAKwqcBZBNFTM2aujv8psD9ZvZD2x9qjNMoJEQjvfLKShKkoGcx",
  "key16": "i87qumV6SUGqseMsy6ykbBsBMoEEozm4izip335jyayLqSFwnvafJvrSXMZ9saBYiE85xJXcMpW4PfYCq9UNiCN",
  "key17": "4fdLW5P1ni6VR7apNN94atpwCKjoSPBxSNsLiBN6kU9SunnfWzbvRHLexuf7v1cVt6kAGa887W8PRGGydSZEYoeB",
  "key18": "3WnUuAXT3W1P3S8cwNUhTLSjNw95x83idiAMznV59SegAM1bFtdR7o59wfjRF93uDVqE3QJw8XJ77hWwZFZaGwEe",
  "key19": "3CmyEqxpSZDunAmR5UKUoByfuXbxwEKA15QkgDMAcGndydvWVCQ6Hd5rzWK4AYMs1adLX7nTWkccnZdGLDLmXx3q",
  "key20": "2B2ExTvLnbiZPHbjyqRQr8mJ7zo6rsXr9ac7LpEhkJFEQxJLChgfE9BJaVTwxzpYTvUHWU8kkviBrUgRcSa4Kchm",
  "key21": "3W2fRpMo7DHYFhwZ7EXhGa9kz9GCYwQg7Z8gR9FFCSaZhVSKXE7eUZdf45QKvAVijAX6GRv8Kjku9QhPakZTRaND",
  "key22": "4PmUKi2pHh9ztRm54iva5ccaABCk8xv9VrLCRXwB7vDc7mySJbDvuMU1eUQPEUrtArBjeGXzMdtvVW1toJ5u8Po1",
  "key23": "37Yuy8JSioD26v443JprmyQ8Eip7uYrXHuhMnj9jfs3k5MbmxNcmXqFf3ZpwLn6ms93gd3U5Le3swxQHcH4frwma",
  "key24": "3S6XvMTKunummgt9F29KL7zj4PNt4G4YYQFNTXTGRH2akHPk8MGEiesUoCh1bD9cHevxAUSCh7gbWUKaqzuigRuJ",
  "key25": "4ceBvRfzWY7fESySwPjhYZMnxiGcWBACw2yJX5dajKacDP3rXFm4JejceQarZfg1ejmbyE1DLt2kS3kDZsvmND5a",
  "key26": "5Q7Rk4PoqxQyaqtFGjGMwXnsFjuyFWShBAbNNyWST6tEyDro5qVpE8GGtjP1zDzuW3o936R8JJW57zv4tXFCDEW8"
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
