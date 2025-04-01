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
    "fy7bVQtRzpgf9i5f1vRkA2qnycwxEe5UQ1eR6ecWwpnngXHJeDL6rmnBHw2FTNPRJQwKPLgwTU59eDaUC2VYub3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3W5mvDdVEehMYuww4vHwQeDMRf4urKCXpW1M2Z6tCJU3LHpddQw8hzKnsXx1xzvsFbSC9N3ceAPH9m2R6hT3f3kk",
  "key1": "JY95STnZXTxQCG2LuWt5mq55GuiiZWYvS7mPTedrU4g3BZb8oJxbT74at2XWG9wwRWyGUcb22U5bZYCjSvFNRuT",
  "key2": "4WXr4SAWcyt97P1YegCEvroFRAUaGju5CgZdzGLbdXk5a5VNizD7Q2ncmi9FFBy1YfH6n14vKHmaVWadv3Q4LuS6",
  "key3": "hWAQcA6SmHRqmyG8xYHa5EnYv31echzpuqX1jj4j2SYwE3JAUM5UmP6tZ6WKooN9vYHhCFK67Tqph8GukgrwGuS",
  "key4": "6ewjTeN6JTPqGvEDS4V9RFy4pv1tMFoUnsBHZ4QK3v5QaUNhTqtYEXwBcnFYZy95dDpAbQFdDNr3yRwgrv77s67",
  "key5": "56Yb56p2rMvdpxkLpotUXL3CqHS2rCC8JRYk5u1jRSQdR94A3FqzxM2EXeEqq8z1qXF3LPvHMCb8gKoKuqAwL9q9",
  "key6": "66NaQqptATWB6VzkSR5GUpkF2Q5cP8cDqyNTautKJTxhavTHWX9VDF7G1m4vFmEhhiSAdyK1uhnYp2szJJxGKwRU",
  "key7": "3EE6bGf1RKTWifhvZN2ae6GQxEpEEtK4yb46yJ1ZNUDuX2CmGXADbdxMwCKbmcVyVv3b5nRKuNdtsmkWsN62fhJH",
  "key8": "4ekDxLBGskTiSqMDVUnAo5jU62RECezAagYYcAU9fL2UYbRB2P2fbjpYnZrWaWNRC2uAVftjGkhJsQiq7nxY2waV",
  "key9": "idBr4Wo4HcRAm8PEwMWoqmqn8wKnmABdPBQTyK4cejP7YqAc7SSqJ2ErAT2e9MMCivcRGVCJdWQ91oAwVpK8yKS",
  "key10": "4VVLCheftYsWXf4EtxtjbvYvsjjCbaLn6D5ozX1Ze2ExAD6SMMCsefD1ofa4pDoSdm2QBGPPHUPLLy8bFhhkWiHX",
  "key11": "25LHGJeivNfE5s3SxH1J5ssAKPTD1bad2ciT6sbeddZemiY16xRW5Uyv5vrBavaCqPmn8imrUZrqiR18MC83PFnx",
  "key12": "3gt8ZVKKkxH9s8rNEF8vKbbhduESNGnV5jDTq1QM9fwN61tspvU6dsvDaSA5uH95KexvgHw11iqNnkRac7pbKBCV",
  "key13": "SU7KpH7QA2C5yRdEWPgvgERUYHHqgTuNdkcNJBsoHRcYw5LzeWAabKCGkBsTfBimCEd3Uv6FsNh5JgLSY4uAjYB",
  "key14": "63ygzAYHbXZLJathWaPFwfZ2xBSQVmr9zQ3apw1CDxNi4E99VXT4hzVhtmQcX88bhZzKGvSMPxaPinbSVEyEBHcR",
  "key15": "2K5RPQHQ8Zk2P5b6puVp5eZKA7vc8sEZazBqmTUioK3sfihuVU1PhWnsfdTnGGynEkmTtLTbVizx2tpsMAm4Ajxv",
  "key16": "3pnRzuY1YW3vzegz2TY6km3ANHjgzUuY7wJXQFrSEvyPhj9zSqLPrEEiYiSzrMM4TGsNtjCxRWDcNBbxQiiQ2hRV",
  "key17": "WnDHYk5aMEVBPddv3t6XZttfVU3h6gcnd51tGtPSJUgd6bYgsBSRx7ajGgyZNaBRnBZnBQL3U8PDKVpLdS51uiX",
  "key18": "3m2UL2MQaKcGKM7zX3ZoPH1HPPZRQTCoQVAVBnPb4TzoWDxuZN9jyQiVci8z5vwMkERx6dpuYntRup9jxbirnGWa",
  "key19": "n4nGQoXJXnTGDPEvwBc5mceR46dYMcTwo2RMdTCefFPsRrvYtkaM5NwEZ3Ern5GCTpr3iEBeP29oFAiKww8ESkc",
  "key20": "2utLBCVVNigDMw7qkaCBEPkgSWhrPYrFAhDN8xXj9ZJnCMQjfkzqQG9EEtuEJ1U4HwD7HAZtXQaWScZErwbkQ5h3",
  "key21": "PoiTe8dHQmeyTerMt2yQfi2bGyKVuW66CXiToKCFzQnWSDYqYDipRFgcqkcnDNF5uTpbek8fPfGPz83D2DXT3U1",
  "key22": "5WzfA4HwcdB5AScPPqBzVSoehzByhAx4NrfMQx48MUqtYeYy1ddEFPCSUATdA9LnRHT3CFAhQ9YH3N3WBcNeud4A",
  "key23": "3ZNzXBguYBbQ82ASH7mrTyZdHKVx4igkWDvRrfpY89ZoBNmVABE71AN2c6ZCBxFGksZEj3RySWxDQFbXQPMtHiXp",
  "key24": "R2o3moFoV7ZRbrUL6kWYehUprQe5fTVfGxjBppMf2DGdCxHG1wYNLjkkV2DcEL3QHsDBBFhSufyCJruN8rkmq9T",
  "key25": "SZhig8jK8B9ftuUXgJLfwYV7ZWTsSCfMaNrEpQ64ohVmbT7XLrJxJ32CWdPTC3rMEgXrLyd8VSYS5iNfQaJYJLB",
  "key26": "3xpM761E2ELSu5CCPV7jagaFpXn1NSbNKqT13w5pZ3BWyJZFB8fnTWSCLeByvNxbkQrEMXdfYieCdcXfTLqNoaMD",
  "key27": "5yAohSbQZiuBYk3YwvpbZ1C61YWT7e1PzaWcdhGZenbTPHBKWHmwb5StgDhgaeRGGRBybox4m3RLX7ASeohut75B"
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
