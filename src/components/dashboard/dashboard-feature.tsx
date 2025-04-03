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
    "V1qvA39nWScrYJCFcX5JM3tuT8LKwvWxTMAtx5ehtBMHzJP8eD94fbatXSv23sxco4kwSotUjx9iWjbbafLaerj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YN52frBkDiBRxdNTyMH7VhhK3dftK6rup2m6JKmivLLbfL7fsAPkvZNRthNHb5fAdWGNehXz8gmv8kMJdytbQuP",
  "key1": "35BKdT9LS9fuGvx7jAstsU11NPqMe5mq6Z1tzQF1GneutKZkKzBiTmiXzHPpaJzMcw5Dw9W4Xs4QSBNp3WBqdZ4y",
  "key2": "644iDMbAwD2N5fNYVpruXFrDa6anf6DnD7uW5ntBAt4P9BWamfg97XwNjaJ2atp8TEpVu7u7uxT6HygxgLtY2tpL",
  "key3": "3AAZxHVVPc7mfJ6Tf15HxNVR1fKkcxNG8MeoynfPC7ZnvaJPgn8jCavJNcmeLQLrEScxDNA8EtRzKHHHvp9YsWwP",
  "key4": "jtmsqFFhf14KxhoQXSXdU95YaHANPnPaXQsZxAcn6D4nmYv5ThXmp14qdLwmkSpDE7saS9R8dgRMLZrhm9cQFZi",
  "key5": "MtARChM7Z6XotkyC1cMqiAboqszDRyQuR4LcDG7QqNHtFAqCPk37oYAcoSnt9vbmE1oikqcLkaKnvXE2W1mRs16",
  "key6": "mJ7YVXtkGGLHFTZQoCqeKBTT28NFTAsNM8v1gfQHsXLT1WFFctRuvKobxDJi4e9AVLLfnLcLrBWfydST6S7ieUa",
  "key7": "32GskcN5Z671RoGJGficX51NXcuTPyXzzKr1P3XM9CztDAHvfDpLNvE2dsFyyEKedi8sBgJ8bG69CXWcWKh2JvZN",
  "key8": "3iAhSxyW9sSoGaEtLUxdCfWE9vhWAeTNAFwJf3LHhTdiPbKaHny1fpCd2n73h7cXiA64qxSPSWaJBLgQG4oBrUyY",
  "key9": "5cwwKTp6mLirpfiyV5tyWDxC8PGazpYVJP6uJr474nDLF8tbRPvwosznjhNZ18UKShWbJbrZZp29YkDxbFYTohvP",
  "key10": "4XcQCH3g9zRn4Af7QMhLpfVSP9UjEoC8BDSm6ZEmoDufQk765bimZ8Z1Ug4v8cs2nduhzpEbqPF8D7cqbbjvR6ig",
  "key11": "2qGCawiMb4CPt6duS7mLVssommwYmP7JAGnqC8Gs3ziuHjZwrq3oVAEmiMjpP2AjS4Lvbvvpsd6EJkkVriG2rvoj",
  "key12": "eeRSZyegCR4hTDoVLVU9MYrTFbAkg2oSdnpn3sKjYn5AKm6cs7WZ5tnpXCGVZH6oSASnriMg9yvzY84TxjhoKQR",
  "key13": "4tQfUf7MHs6w2LqbrWBiqGfxmTjbfV5UtvtK6MWkufShBmcaYyKXTK2TLN3GweCdM5KjNMCSNosEKHBYyhe8ixXb",
  "key14": "2Fj6poeYXZjbak59cN8xZEKucf5fU5Tq8qqoUYFePUxcXdYfJmA2wLWGY384V85zpdSKFM1fHXeGnZaBWzxvVXHV",
  "key15": "4BCfRgHHbwWMA9AqTwsuD7JDwu5W9cM2MLpDLxAqrZ1cx46sgeAo22Q3iCrmzN3aiYitmb7fykqd9QTizWwqk1jN",
  "key16": "64ZGypi9bA5zn3rZMbpHbEa3KkXWpNoKshUWmkcQ4fB2SzVTi3i7kc4tKLxw7P74K8sTAPewGg9ZmTiuwgtPGrXd",
  "key17": "2PX3ksRcyXHoKGPsLfeqK6C9Zpw8gXympiccycLP5bR7iUjwfyjWD8RDAuD8nKxsVwvc6mz9NVptXSUHSqcvNxY2",
  "key18": "5XWo39g98Lok5nrJdhyQnMApVmhuuw9Vw8MqZjZYDRTuRjRjvXQdiusoNQHLBpMKdctnC3SUQeMTqWEQQSuMhCkU",
  "key19": "4kVYR9kENecKGMH6TZGveJsLRYhPNoeEamgCfjfcGXcR2vinBSeFs7bZnxu7RGUR9zxDSSUy7aC8HcZwTNgNGgZu",
  "key20": "44vZKc7oyArWWtmHKaBAtp92ptGq9Uyz2BHiNGD7USgNoMMBoS8DGA3FMsCzYgvga5rKkupAcCrHiY1f31ut4NpG",
  "key21": "3WuwUKaV4LT3NPsv5635Pi8MVXVaBSWebSW5rVCrKDXuygZkEjWNg1F56WmcUURCPTPMK14xsMfr7DhnR3ftfQtf",
  "key22": "5tgg6sgtZ7Z9LYXuPB4QN6dNrvEWEuW2tX4REquKqBXfMfEmncYLboxqpufZDK1uF3uMAac82BDR48iEqqmteqDK",
  "key23": "3ptbwNNVyLTCm4fHif91gCR1EtnfQBzgT6gsPS2XdpC9zPpfgANvmSpKLJbspFzEWWQ1WsSGfjVRnm8YosTT2oZT",
  "key24": "3NyGeRoJeDXnYYVUq67XbBMFarBKUGGbjrHexx2jYHjZktSSeaRcGToLdbgacA2JD3TatxhnDsNcEnZMy3Py8Ub1",
  "key25": "3cxMHCvaWdozSLJeeE6RordUaYn3jdZzQ2f2RYWCWQxaV5VCJC2DKVWDNF2q5cfRXd1SAQryvw9DnvxM9QLLhBYr"
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
