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
    "GccByoELtzKMQ5jmqYkhs5GThLyKo3ZeVMSiRgtUFEpR4owVraSAQxNu8Q9YgysSqK7mnBfpCDAFwkFjLFY4pgP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iYbfR42cEk9SXtwLm9aH1siTuQacZb7v2dmLYSGw9W9DwjMBdRoTa2NrX2D9fpnasAfgEZc1Xqyjjt69f1dDjKr",
  "key1": "5STW8kpiRLMVDi9exzuNpxMqSujpUuqCCYMSdhGvAZDgBoYhTbdGLKa6QxNLLVHp1Bi4Sh5Kk2hhFBMN5nF4tvtU",
  "key2": "4iVMgjx7ErSSUGzcGTNQtexmvyQdfTuSFLEuXswNiRfDA1L4pBHJwt5Z2AjbzQo5X4QMCw8j2Zjp3QSAuR6WJ5Nr",
  "key3": "2rELsX4XrhvTRDvmEcRD397prYuTfAfrNn34cBbfEBkNudtD9uKDc5Yye58BEny5coRoUEXW8Z5BD93PYFbztfuU",
  "key4": "4SiU4JpzdWT6QDvJWzRm5LCKv3i417wwMwsFrQabQ81iEo2oHhU7MU1152CrHd2KGt3L3Fv5AbcgjZWuhc91kAHY",
  "key5": "2QQL2qVoKaEqDxRWagT7egnY2wnfhW89Z4VHDWUhVnA8DYFSPkrSAzGqjeR2eTRB1D77At9XwvXy3xdDMVEJuTJC",
  "key6": "q6g6838qAnhjDH8MgJ56v4FkLPafRogfkX6Rp9XrkXDxCYnoTbuJ4MHF383c2rQUksdGhoCz4VRsQZkZxD6B1TD",
  "key7": "5QxKdCsiNoNzjKTTfCcUEUiE9H8kT4dBSyFMWKzKTRhAWsumEm9zHkJqJtGfiBPJD5sRWhiMQWqM2UNWXNwfpvhh",
  "key8": "5hkgenKw5Q1Amgir1RCuab2e5yycnkpPHteKwjwVmE7eEZAL4xjbTtkpEKU5qqC7b4nnfeZ2a5NJsDJjFJKBHPnF",
  "key9": "3Zf5uZ8GGg4c9TDaRSTo5LwSejxsa5jTvFGTAZ319hCBrfLGwYQCB4UZ9SEtTi3yrQXeDqpDha2HzRHfwXJGaCav",
  "key10": "3Z3VrZmR4tJoQixxkUyFqzaQeWTYf1NaewvAmmgdbnt6f77Z5xNDWQNGjB3fFsgveH84SvEetJR2DGrpsn4hmD64",
  "key11": "5BcGLFDnvYixmkFLq7GmYaYPaj4X2LCNGzJ9xEPXqSzv8owM1FyDkritr1wvUSLwBjFpPhpVFrboRkS1DCBRyVGJ",
  "key12": "664hQj4uTasg8uTa6yGwhiVdniumewU44qYw9ga4mDeckHynJEUE8BMBP7KcpqtjA3zD2MC1EbAkDbaPAFTaszsJ",
  "key13": "5YEhYph2pEc46Pfmb2VSz7wnSSpaex7Vrod9NQt4xwEkdt4yG4te7aUaozoRmJmcXvnn1ur24QwdHGrv4V63iu9L",
  "key14": "4zY3B7vma9NjXq7BUcG6ePJCvtLSQ8fVJLB2HLMEa2FDNSUztywvEY71STVRbp2jeBoquLZYMsCHg2tBPzh5BdzW",
  "key15": "2uXPT7HMFUxyf5yCemASJYFfaJvFPRTKLypcXQYzUbwrfpojACn48noP1bW2kJXsij9muycxKvdHJ9QH5a6nappn",
  "key16": "Avg7b3qYhwJXh3iHYiuTZuxyZ3Hm4mLSGbJpAmnaeycfDtgcJjY8QC7wokXDwy7uCxN9nCX5kKNecKPkCCvfAQX",
  "key17": "5C1cSJ7TYUNMRAwR7dUqjPwAsWQJ42ypXxS9QMBkqJUAJCBc4i3f74qEGgwAcJMZx8u5CTmdegowFpYS4NPXWUEL",
  "key18": "5Q1T12CwarYW4E9Yy1DeEk2x5oWcGnUDU6MWhKBJQrFn8qJoF8pc7pA7e8WZEsgs2E2iRzhJpmc9HP4VNSoKje4R",
  "key19": "2AFHx2PgvtUPabGHoNCsBSUnHdmWAR7jN2KNubRv2PQBtni3GWPVM8igKX3xooEudCe7mv15MQqMEWjonPkE3RER",
  "key20": "5r3U8b4Frtjb2LW9cNvrdtHRjvJT7BtHuDWxMaBuy9ru36YV3jACBLXgvnpjcQwScTiRNtYpCGg8ngCZJKxBze7J",
  "key21": "56LkPnc1JQUf8YQKEUCAAE487NF8Kk8kH9qmxvTsWnpHQeJL91WJsXJ3NqSbz2QgKVJS2NWKyFUdCcZbFmsonbs",
  "key22": "eBMcNpfydVtGaXGiG127u2MVJzxMgrUqkw8rEH7piqDvNKtGR23hNd1xoFYrk1QrALobNqTM5FGV4JC4oK5wNuX",
  "key23": "vYnpDbd2JGsccjb69wwCEz2kMSCVx4766v57GGdHcU9s39uGb6QD4K6BNSsGZYuM5avvqfQcJAb6MqyzeFzFAbL",
  "key24": "2piDHdMrCCPz5PRVJA91xrGawkPbX9twVGs6EcQD3MSxEpSKvahXWB1zEXquZgJKcKakeryz6EnQ1267Rw1p8L8o"
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
