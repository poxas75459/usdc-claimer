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
    "35KMwXX2pBsdqwHpJG3dryksMwKAD6gtRpfDmqYnX1gMGT26yVa5t8DupdprkX3k39XuVTvZwhP9KcxYZPvQVw2M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tf51RTAAdSEBF7conFqNzdaJvKGbQnUrwX98aLMJkTHi5kzavkUFWXJgJfj8kqSUUa1RLHbYrVMLT4esWZdJ6jm",
  "key1": "3WMNM4ejuM3f4Um8rRf7jsEoYbPwaQrQ5c1SxYpd5jZEau8QM5GW9Lqqpf9j49ZT79AisC9P2DATHNCidgT45C8",
  "key2": "qmJBd44gYJTJeuUdc1Tm2h34oJQnevTT4bC3dwg8cX9NaCVPm6ps2koWDAyu5apBSjtvq9pKPFx9LtAwrdPWveY",
  "key3": "sBznEQPFawCk6kGAyDKccqkThdHEVBm1q3AcEXXDyLWUSt4fAn4jnPpjK9jxcnd95HLfEUoTZPFwFGH26RTn13k",
  "key4": "2xSgYYZ4nwgALMszxSZN3BCqQodGYjwze6B5XN3b63kYfZWxwYr37jFTbhmD6xYk3oCRVz4avAAnkarzvAddc7Xy",
  "key5": "9rsdaLswESoSs1NsXa54SzkF94CVuhAamy5HNxh74B6o2xm82jJUgoh3cr6YEgAsKA7t1EjB5TmCuqGgAToyR3F",
  "key6": "AmxRrDyRdPuJdZax89E5gfjs4HPFBqrRyph5gotPYL5wEfa994BD4PMXctMze2hCQA7LDfVmFkfw7pZqw7E9ReB",
  "key7": "5NvY9tewJQwGD9XzYGneDNXUAgJSBRZvuda5r1BG4UgK13Zb8ubgzaCLRwSmjMcC2Dmjzb5K2ATApgg9kNQ71ZEQ",
  "key8": "4D1ZKCfdU4moCAD3K3BjBUCCJjj7TMYXfTvSVdzrchZp9zVfQEkA1Cxyu2mLTQDc8fLe8rkNqSDKVwJeQqBjYvcX",
  "key9": "dqzoM2DLdcUTBMKnFCYhMgTCPg5c77DzWywD7DFt9o78vB2LuS3WY5QnKR45nEBKS5ccQ3CWot55RXNadGZ9V9r",
  "key10": "r46RyFS5vnEoguZr5GDLsjkn74R2eJHr5qLCGL94vhf4kGpzTwKHJ1PuEAakXtbD9txrtRjQtS7A1cNiJAMhuKG",
  "key11": "kwCFN5QhgLgmfEPmctQsPevBVPSifAdDkyejVxzoPFL4dkHaoavhM8fpUF5hN4bsBeptZ51znxmQPdofGddRcKc",
  "key12": "5cp4fwQADQeNpTiL6ieMT9f2Y1g89Do2Q8S62LCSLzBhiSpXCDBbAL6SrvT1kAxALjqeVj3Js8qgERDaUuvU4sWm",
  "key13": "66HNgH1sGVptVwCfCyw7L2dh3RSDuEnmK3VEziWrfepUjTiGB3eD22yKC361cGqEWerHbnScTb2acAQfPbiEciJL",
  "key14": "WiF99yNWAQfAtxpPiKAdhgoGiL9w5CdcHwqQEBMZpguuLvWnsQifGhcFF2CGHHiBK3RuysR8QTU51joTDCuJAF7",
  "key15": "4Rr6fy2LVunLrkxJjMTQDcCAyVmviMSbrzVZ2V1dYUtpzqmbfbywVWDU7KLraTeEeDKYzmhpTUQuVPdcu2syQwX1",
  "key16": "3KC5m4vokCNuEK97ZjES4wHxjTBpkycV59JcJPyQvZApwMgspvTegJ6FYpDHMknCU2bGTmED9fN5q4i9EtbBcYaX",
  "key17": "5saqpnJ1HRNq63eSbVMnkbrkcDgPJS2ephMzGr8ToKj3RKjikvKFGekLBostBPXSagLix6ssLqDcrAEeKbGLduHa",
  "key18": "4etsjtnFih2bg2Vks4tSMjtHRDjzSX66TxbcbJihCHiRCPMouP3U7ZX4FDhfePQbVtzfp6ZhHf4bkRuxEBTTepEi",
  "key19": "PtwJWq2vUQ9gfEnQ8YG15bjcuNA8FkoZBUxegBpuSZKJA6i7fhbFjp85DQdtRL3xvReq1tPnjxWhKCfhv26VQ4q",
  "key20": "2gnfZJkbgP3YF3Gxh2b9cqgVqpKEDopByjNHNbqQo31VRxGDdfXnGndfFjJ6pKGZcg9sVk69coUooU7mpxqwpLA7",
  "key21": "22ekiuXLoeUg3Wf8CPu23LR3aSian6Z8ZTmeyfpjacnxDnmNoXNWSDQJmEXdd8K9vuoviaK9kx51PQPr5pSyKgpK",
  "key22": "5FxYTZMqDRq5CDH7AUKAt99N3qkPB9FtyX54hjgWjYPkRVNqKaeK544xgBXGeVZBHbxc5AgrMzM931icwLDzXit4",
  "key23": "5A1ryaZPNGYodbGQcL7rexUCPDQzfopqo4KFhWtMKyinXcYgcug3d3HwPrVtxF28LzvDSvJk9NnJCttRD2uSuzhb",
  "key24": "25TFgL8noSPFxshu2A61VELyhELPiTc59pXJSw4Zih3PYkLPaYj992hqXYobGRQwwPC5ouGzM4HRFHpK6sL9zfk5",
  "key25": "2PxKKN1rtscP7UPrreFGqnuu7n8ejcmpbptJEqkHtgt3qFmDGAkPwzoGxE4BJhQtwsqd5onLokNZF11iyf3RpksW",
  "key26": "5QpXFBgWNdKx8GdgwywkczxweZs1oKRXFaJV8SwWtT3RWT8RuQtAa2xLwpKJ8NbKfFFhkNG7PK8mA2PtM5yfuSTK"
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
