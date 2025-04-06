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
    "2jtjkL7FU7ktSEQsA4FVExTJpGnXWUJew9yRvTeiKZdM4kfkaJ8uKu6rxxtMSkKtbpJMd1qoeTXVJLKSnW34RXqX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YNZbf6NmC52MJwuuJ336oQ4dcpemxxcb7AGTnLBvmfo3LrSkfDZVvqWdtF7nRswkVJfooSj3AdcNHBrNv2yoYzb",
  "key1": "4Eq8fZKGKowkH8dJzVN9wR14JG81qpMLZA8qYAZKvm59enppdPN9Q1B5m1kUQnmRUd84XnxcYbK76aVmpnSJAWVd",
  "key2": "4yD2M6UwcaCZxiNfFWYuVX48qYBPbWVZCexLmCbNZ8J7f8RjtE5tQa9rP4xoU9xbjRrtBFtYh9mnavzEA7hJo6aw",
  "key3": "2yeLhjkaFF2CMY7vHCVoen5HNhi2yK4oBGU7nDDyWJTDwDzcq515atZ8FaG8nf85ZBbr9B4yGnzoiRs9Y36a5yyM",
  "key4": "678baqjNQB2rdQaE5oY73SU5TLcqrcBNG8WcU2Yh5jeQakRcyYBwJP2r1ozpyZeLUe95eY48gYmqGJRZiQg8TE6d",
  "key5": "4NaSz4v67tSkp4NiqSwXD3VwiBfJNF2582yt5CZP6xkHXNS2ac2ZbT2Art8SDk735LjNbkyp7kgC4WHVdwBpvrAX",
  "key6": "4QqrJvSUA5rqxD9NKkjgQMiorpxA5v9sA4SRJyYrZvdN47iUWALgbSZUf2HEikPyFvrTEG2Y6C9pbZ5uCj3LZ5yN",
  "key7": "3pLP7WsgS1nuTmTUPfJx1RhTB9NxQsH9pY4W3DupE7sNWFWTwmahWTnya5HtcezE8oKsibPR6zhHw4g3d67MKtgB",
  "key8": "39HYL6xmMKwR4jZ1U3iXmgj9BU3idynmv7HYE8CCdQRNobGtmVMJiLB3bWkK2F2BWKmVYWndkGBDhRxtrUkdUuH5",
  "key9": "5icQikWCrtJRVxvEMTStDjSmjP6EkPzX1gwsjYuFJA9LHsMtCcc9mZpH7n1KUDaThHvNBKdDkD8LNJwNZmStwcDA",
  "key10": "66jj7WyLrGdEAX6FXaaf7b62zWCe3DftYVaRAX496wzYbm9JNafMaZeW4FXNkASXfvV42ysgyCtmd5ndpiLQWbkz",
  "key11": "3dnzZDCdHTZFFWmaVbmmuyvACHV79dszEp1FEDNuucckkQ8j1EB94ft8kFYzzP5FgqJkkqkbWbvHXbq3AaML3WZG",
  "key12": "GLXrdgr17JgKHLSSdpBrBKzr13CZZ5MQtjiMMAhovtySdfTMLYE3cq8tW3mC495TUCXWcTyA4b2rY516K9mCzNt",
  "key13": "5LxUismQPg8x2aPEfTqr2UC8Kd5qwt75mMovaNjKMLpGUjGRJWy7So2khnFz8vtTvEUzeFteSf5TYiDfpBRFHGRe",
  "key14": "2tzRFLuKa94LCbPVvjaxDcftN8EJ9sKtDcQ5Fyhv7L4Yz61tJvPhbP1gqFuZGKJZWDa5e9PbXAtoUHhfR5EkRjhR",
  "key15": "Ay6vmTJbPKYH3FNMgNi2gBL1aFKx2ndXyLSRDkMSwFXhLDTkvTbgyLJKh1htMDFBAozFh33P4TufRDHvWDzQtck",
  "key16": "MesGhVsEfbq1GEbxRXcCXWWaraS2xeB2aWuHuq4YhsJG2boXjX3YKW4SRqFMzUR2qE4MuYNTr1Hk6z7gKZgkgC3",
  "key17": "2v1RtvDcYUwiK2DpJRA74VYjsKccqw4Cs4iDum16HiihvBpAKcLdtXmShi9n4kCKGkgKbNHGyHcP3FpmtPWoCGwF",
  "key18": "5VdHNrWkhwVfTddP2fgmMTgD5XkBVFnnRE5vp2e4FsHDuHvRymtC1y4LY4GG1sV8NzRhZwHHdWyFf13xUGRwQ6LS",
  "key19": "43qjh8brPhv2FBUTwdWsXvPmfmj5FWPc5DSVAF3T7BUsqVHawVz16gDBewJKgXk35KkbzKzHse24fLQ1WtmzpX5w",
  "key20": "2egRNcb1VWL6MiDeyULCxFus1bDyzxCL1Y2q22TQvNwFgNgakwXbsrr3kkjfAqEbtFjJXeZKf2Hem1n6jJw9VoTh",
  "key21": "4RGAsz485UovdRkGL5fACPLMX9wNL6vxgJV2XNkfhFTt1MFZnq2eypR2Fh9vJguxL6poEAyjhcWHHugameWbePV5",
  "key22": "Ba6vu2kwH3RuDkdgNJvb7RHWsahM7E6MWAU1AiMWSUbzhh4m9XweMEmUUzCoCSyP5tcfMicDJoc7puH1rs6pXvo",
  "key23": "2VdyVX2UvNb8wkP7q5gHDifPnT57d5MVgAwBw2QjdFfJiYgVsahAyyfavFXffoo46jXcmY5iV6g2aFkx6aqCamUN",
  "key24": "Ef4D7mBH4qtaRhDCwBKvjz5QfGEB9kuvwAWryUM9XtsU7SWanNtAtner54RxpV3SxM5Lb32F4oERxKx2pmb8Xcf",
  "key25": "4NEFQXWtiuCphZKMU2awtcWnQP6pw6QGfGeXKo1rNdX64AttUgLDdyjEbnAcmskuzDCBJ2YCko8EVtfH7QupE99i",
  "key26": "3fXDGEBpDWYMNeKk5SAczZjoZWKjRuoiaTyMZFMX7WruDFpAGVHJ62qc3r8Ur2h1CZZSPWsXNJ59oQomDG8xiYFy",
  "key27": "3Tv6caeqa9FRAsSkuLyV1T1TKouxeKPvt5rKBqGwNvKkK8sLf68uV4uJtnoNiwCY6wdnGtKkR283q14phk7xG3Zp"
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
