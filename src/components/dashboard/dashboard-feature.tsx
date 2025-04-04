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
    "zDN6GdBy1DPwjeLGHVtvdzuPeFvUR4PG7uB3HqJCWgj32ygwC6GobR4wpbmW1U883CcV4yVeeGz9x6HgHVcWRW6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qjLoxLtENsv4KjNQZjV5Zmg1U8T44hgtjgQHd6dh2PkK3YLtmZTfQ2qtSZmtDfnJrCjUNVjBdqEt5Msg6c5DHgr",
  "key1": "5a6qfbwWYqzxMX2FgvWkwANUB7bNyKv5FmD3HjTK2VrtCMA7PiDFi4a7MyJn52L7Re5H3iVmjTDmmvuV9QCqVA9a",
  "key2": "5bXWQRLr9ygCM74oD1hB69Aqg4CqiymtJrAioPME19exmU3hCPpwAmiSM8SRUWoYbfm1LrynBr1pANNm7e7bkDQq",
  "key3": "31kYtavXSL9KFjRU2NdJmuKwx9Lt4qDS8XnnXtYjdsMe2UaC4R2yP9RwFZDpsiFUwAWLpkrY8NeEFfpWLG1HP5Pf",
  "key4": "97aNQjaz13N4Xnxf1ETBvaPC8vzdkQPK2g5d3vU8rkm2w4tfVXnG1pquQQg8B9H3FsVJuv2pJ88iWeLQr7Xmjxy",
  "key5": "5jrmkJtrMKgUuvTZrGdawfR7TZmLWQZTSPk1pmkZVp6Meh96KFpTqU2Sifg5a2dwZuZ412Bta45fb1fQZAcv1LUe",
  "key6": "5XfM8LtKz5fSPPYgSitKxY1FQJTmjnhzShGb7t245ZSyqSeD1jE6uLmdvrkmv4AQ18H3rDAD5S28zXVSk1Xcmzrr",
  "key7": "2181FebVmng7EWqX5xk4qnQaaACzxFU4bBfHdmbPHNwrwnyPeJPtyKrr4sUtcQSw81a3gowAkTsfUNjRgCHxf7RM",
  "key8": "32mFpLvdhbTw5jWYxzd4iCjCXjQjuvUd4iJbY55p84H8qD9KRiuT7DxhuggVrQueyN3xzk4bEg11RGYL8TXvYMnw",
  "key9": "2FE9mDfVv7RSHXb77FAdcRSfHrvtRCLY7kJDbhmnZEzF7u7XFRN5qT4JNqLEoUJ7dbdg2gUSmbYLpvBKJ6qLXWSE",
  "key10": "4cUtB8w6YUNpcKKCX6pUHvgvvNMjGbjMoNTdtoMtGHrgmeNbmB6qtL22SNs1vuH4qffazzT5ZWwYw6xbUbqX4TeR",
  "key11": "4QJYRMoiGyf8tEya2xNmWDM4FV3BvdeqZr1LsBqw8CA5UbmhZsAouh2mQkDpXNtKzdoze7rRUZwyqXmZgM5QJNJM",
  "key12": "5XEot7amJA8fTEGfFyBvzVz6XxvgKNogH8MYB1J6G27L8Bgq65tLg4tyksSUPVBb8iPvuozV7GYkgJqmw8xPiYkr",
  "key13": "4xuhBGimrnP3bj1A6Pp3u5ed6ukaoZq1ZfK4ueQbqqojLg5HTYsEvG5i2z2dBxMdAxttQk8tywmN9XExT95qfBD2",
  "key14": "3rjnLfgSZsoGn6gKHPkyaJ9D8EuB7ofQAnrYR3EaLpmbFdWuonYYTC69vQyMssUNtncz23YBq56jAsrHDZgvLNWa",
  "key15": "3rguHM85KQDvvZEonpK3CM54HTZ8HqcqL6QaeL5ko6HSxcunw9KUMDZX19PvUTqNavirDaqzMEBjsM1rdu4px6N4",
  "key16": "5xWpRBMC2BoNJrGqGSb9JpC3VQ4dJ9e1ZUtbfeGsQDLewRiHvefxhnV1ZCXYbV1dSRAwErzqLx1L7C8Ku2BbEesn",
  "key17": "5V8pRnz39ynMH2VTXvqWsMEgQbQHt7ejPekwHWq7d1m7jrQSmwCdqmRt5LFtCasSWxz5E4sf7pWJwUQX8kdb2Dwf",
  "key18": "5GkVSQgznz3nmThU6ezBykL5B2vuuq83wTY6ZihCA89P14n2xeLuvsRySwTk4ZJJunv4Bm6XGkb8a21gsqkB9e6H",
  "key19": "51kPM5riLE84rwnSWhRxYv79CsyfkwqKRxdBs3ZXPcmBSh7QsyLFSbVPLTchvNr85QgVfrVuVR9Nd8zqRLc27czZ",
  "key20": "BHAVTDN8ZQJyNiYAvBk4v72xzyeRms6YjYJC1CfbK84m5nPBMEnykV74qiKUka8ySBcxy4hBVh1MKYsFcd4AG6C",
  "key21": "124cZpHViPd7KYMuMd3RKYk5HLeXByxMUF58QsVLSM2Y7C9DcfE5pBpe9cUCREvG4UJ98EEyBRiefJVQbXK2tbW3",
  "key22": "4WwSVGr73ec4abmUJiGj5c3bFi5E82PPECA2a6EZymrDGRHfkGaR8okueH93izhgnpS7wbUzNEffPFHFj2RcTGw2",
  "key23": "4EdkT8EW2GygYfPTvysdKoFgQHidtNx8ydZrDfFkDR7n3t1nApccnVhNNtc3QmCzNfcFd9H7JoWKtcQhn7SWF6Ey",
  "key24": "43F4UPfcthe1MoqGTQbdn37WFNN1rWjYkqfxqpuSmMx8QfN3RTiYDy4TRCnabGmR4j4YW2kk7ZkQh9GE34Rnats3",
  "key25": "3NvRRWZ4L89GVDcjZxEuY65AirpPvSGKQhccv7NemgQg4XLPPedaF1GKNbFGZxZk6iThrsthH33PCWZ67mpNtAv5",
  "key26": "3sV2SfZ7yRmTQQ7vGhVMiFi2Tdidh1X2jeGtw8UrGVbwSo6mMNGoN37CuKPaZc2DrzChWGsvGaPedDMPioXeuLJm",
  "key27": "j9bCEcFvPnftgV44yXMLRvrVeVicvKAcx65SziqCRu5KFBBA6b8ZhjMyZJ7jRWPLSMbSRmGcBmxeWDnDtu8Vtaa",
  "key28": "5j4KQFKoH4f7H3G7RPPqeCS9JB759ghehy1Pb3FxfUFm91f7bgJ6igAK6c9NE3LsAy3MvkyDStvk68EWB45u7rjb",
  "key29": "2YjhjTpcwbSBriFqu4YcPuhiAh5TspviCZmG2ASUss8mj27KSP6MFxyF3qBoPdQDgW3FAWTA9x7wUu9tjqvfHGPG",
  "key30": "5LgKT9yAbNhJQWUxFfbzLnV6PMeix6T6Fbraa7TPAhXdxLSGvqyzsp4tPKPrjDG7j31ZUp1y52seJGV1wKc8yuAr"
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
