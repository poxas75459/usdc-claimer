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
    "2cZVvprpno4gvmx8ATtg3yTkWBStMecJiFnuJA2CTCtm2gtJAbpdWYHa7eBpam5AcTqb9qQNH3zCqezajNP6YEsN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25qms5MvxfEPH7akRQCm9NqNkYCo2HG2pwnQB6TzzXbXeigbsDDhLr6s3FHrcoSsV4tpfZfdAFX7M8pCwEA4iBhj",
  "key1": "pozqRHLXramNyunHkAjCipdoKcACV8vhZF8CAEd3j9DHbk8UFpaoY5sj33CxFmc88mfSLwqVLAvVZuR846AVHqR",
  "key2": "2u2f9C61jWwTaPa4WXcpqQj1zgiesdtbw5Gw2wsbz7im6iHrwxvVbFoYZSmCDc7s6yF9f9BUQTRqTga3zD5GoicB",
  "key3": "cDjGkf9mZGf3DF1BrFSL9xxCbkjoU5Qm8jLTD2VQg5sNKojDkBEudxuZjWs3WAaDS7M8NEMFk4z3NzevBRjmjup",
  "key4": "5SgwS2S7eAd3EtnDM4eiNbC42cMyRrf6KCsg1oHCMmeWdvhrGNKgzXrZ5To4MKWBk6ZtNjc7Rb76x3fUwovKaB2m",
  "key5": "53KmzkfokihXvHRsyaDaddxJsJUQ94Gs9AfUUY7VzD6H1xsxbGGMm7ErT92FpU15ECFs6k8pDQjNxE3QewJFQxuG",
  "key6": "39igacW1MC5fiABkMkNWGuDqaj3LsswWSh9wt9p4DChyX3pvybhkQ62aUdrrTpyhqs3vwCjHDyQUEDFCGtouxpSp",
  "key7": "3FGwYrTMZr71WqCkoD9duuXAGqFwoWSeVgyuf65mTTLAoz9F4eMySWbw1uzb8BD2Be1hHPMBqY2RkBfqeGXrzzWn",
  "key8": "2RcdGuFLe7XocB7hFww4MXCbNRXXhbtJJZGYgDRpK4NKQC6tMwBhiwtgtndDNPaU7tDk1FZz863QdJYBAQfGGUTB",
  "key9": "5CnonwEynYmzkAoKoyKHP8xqhTXPeqwhjsuNmsMPNAThTyay6wY56unN3vWs1HSk3jgtYkctVehnCiovxBd1QWfD",
  "key10": "3xCgtMJZbYRuXPpA1EkHJwqhFMvWNFJAxm6DrVkFy1LJfPknsEuurL4XBbxidgiBRWxvg6ecTyPHcN6nJZyxKbqz",
  "key11": "3pztuiaHqP667KQ1CuMWnt4RJkridLD4Tm6ocp8onfRFSiQzjaeqStTNizqHzAbTteSzUSfNR7ZWu8RbgWwrmvmT",
  "key12": "2BsrzkD5j8mpcNyxdWbo1MMVxkAnnTY8eSCnnjszNevvr1WjCEkdJWhVDpaSZKYZovMoio7zqjgkgLwqE1GBdPHK",
  "key13": "24DJY89Bxvy1XfTWDtAWUj1wUdqgj1qPgz46kTZLwiDDEgrSV1qsSo5TsnTqGxUMDYAmFyc2wSZpink6rN7nvkJJ",
  "key14": "436fmXa2eQYXDp2c18AcQCh4mmZdP3wJiPjVadmYJVBXqvqoxGz56NYmTukPYdGrAqg3HoMXHSqnAr7biisc1NKb",
  "key15": "2DisWsDnaVpszKB23audL1yBkAFBbvQ172qAVLMWvVspzyXXjFjQiAunv4SFYGGatbWzRrFsvbi7qMCbKgYvtm1q",
  "key16": "4siCQPhffWHhhjifdpNEKSvfGB4Rnt4HvmVD8L9tTtDSZacg76bxKpz8wJSAaG4ostaC3aAAKxsKDFtnm7GPdgsG",
  "key17": "2BiNuyjMTWh3hP4BrbVLmqy5gpdY8essuj6BPpBrrY7KD89n6WthRgpCovthsKeYPN5L5HnBxJzesWY65xwcts87",
  "key18": "2wZQE5LU3VecbA2fEHJ5DCq6mqk1ZdrbaUpiErPZvDBg39gbVSqE9YAtAodcAa3aFRztwsoAUaLzPQ8usvLQpTFq",
  "key19": "2n4UrxN37ZkzwTDoy156YH7XSasxuSpgWytRY1TsVvqDKLXSVfibyUgGq32JUiwpNZ2JS19N4ddKqq8WyungQ8QE",
  "key20": "4dxzCureP4hunj9REtutxChsGkhC3N8nr1o5rHQ6mRbWYjuyxYZ3huBpUgE156ynqYWTDFBYH3j3cwq8KHqqFS3Z",
  "key21": "4APX7K8akWbBJiADrzHTRFPA5adFcz91HYMQsMaALbe32y3415UwLeUz2Rx8EM2GpsU5CvgoweMWnMotihsgWp5g",
  "key22": "2a4PWrD8D5FrfVN9hzBiTGjGHjdY24FRbKV6fc2twHCFz6y9r7Xs7kapCEhLrVwRqacRhdmHNDXMMgoahRYUTdDF",
  "key23": "3VdE6bG46w3XptT3wDW1RM95399cds4LNCzbxzhX6PPkoKPtGBx4UmUW69qQN4eQL8dn8qxWYsNSmvJNXPPAf5Z6",
  "key24": "5hmgS3cUEQVE3KJWRRq3tVV1ZnzP6pStMMn4hkSny5vs4QHqy18yqszkzRMSqfdhLfkVrZhZMtQgzdcmVyPXw5Yh",
  "key25": "xW7gHdHmxidpyr8mAEgDLGnipx5aANhFT4iYAgQ2p9JzYWb7ThYfdFNYD1142P8PZ17tCLJDWnoEwXm7hTvFrqn",
  "key26": "2fdGoM8oyYbWqf9Q2bSNHCnioWhrkx8jeKHwgR3MpYJL2Qs16Eyw98dEyUmG4w3kf2hC3NVdvLuLzBBjUJ7FAzUX",
  "key27": "4rQKkhKaM4D8PAKRxMy6sVXXGLcGQugpzJvQkZ432o3usnRvCRpX3Vut1cuzdL51oLtSUvA6nbWKhTJqUJP61CRe",
  "key28": "2DpWWAJqW5T7TqcoaL2FStdap3ZmqSuxUwQ8azREGUacJQM3FhEZU5kUiSzEpHmMzM3xrEzRm1AnxY12U37Rd4YW",
  "key29": "V7UqNssVCut2kiVNYNNZWKmcLC99hzUJici3HXBnbsKs2uVkqcmCwsfDa3ctpZUkfqwv1TMdNTQ9bPhwwSJwPoC"
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
