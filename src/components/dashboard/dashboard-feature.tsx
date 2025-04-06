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
    "5Hc4XnpGe253YJCYR1Pgga6tcuHzezKGuAFBSLLJotWaDAGSycZcmXtVAYdeVh6uYxC9jc4c9A43fKANwbisSREB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "o8fZmE2KZWDJCDLUd6AhtbU44HgeA9dAUfiCXgCtRh12auZS8WdV3Pnq3FfMhM25BSZn7ueEVUY9eUHZ3JKW5DQ",
  "key1": "4gkJrzoYZwTAFvELJgA6BtnJkaXw3B8xFD61kX82u6qjpcWTzvmV9S8jPp8Aq1E9JPJgsCbtNMHRvocjFKBGFLRd",
  "key2": "3a2shNRyHAiLRZttvAbw1m7vEoRyMbhLDCHkGYbjftEYmU2XwHSaQtsui4vdA9LXPhjryXsyAegaVBFwX3iCW6zM",
  "key3": "XgiKML6yrde5yAkN3YiywVxstGYYp5rW4jPXD4ePxJm1eLnWkUTPK2AfWfypfinNFrYGM3kXkihZi7dd2eMLQHt",
  "key4": "2bjtbtPwXtCs6Q25iP6t92XfFL8dgyqaV4irFBJC8xihPYGMPRwbkA2u8xfpBoufBRwEUDNvKsqLx33mWD3XYicb",
  "key5": "3aGarrWjSKzP3jaepwxTyMjrpERc67o8Vba9pWAFR4UiBwpNCnUGdChoDWFNR44YScCfmQRR4DuZFNCM57C8CqVU",
  "key6": "3kV4rGU9A7t2hNjXntieKxpzJ55iRjedL1d4iTjVao7v1PQmTMRb2L77uGxYTfLQH85ArGukKiyh4ttQNWmmXJkN",
  "key7": "5TikLGm2wFu43XVGTZFd2q8itFWx5e2QGNH14MLQg6VvWNsyJ6gSSrKREea6kW5bW7S8HCV9mZgemPHHCfZvKcJT",
  "key8": "2L77QLD2CptMk1H11WWLTvHj4PHRtVmtgMXtyJU26cMdo4rRFjEBhrSGtgGQ9NpVRHcj7dtK4vSMXDfh1k71wGS9",
  "key9": "3mEWxtzngHczUvuLkNezLpz1Q3UjSF5i2ai41kvrWoSomJs3UvuCs3Ye9qp2kfr8shdibsuwC2m5jPfeKcmR3TVY",
  "key10": "3nLsstDQDJ8QhAUN7cCbCKjfs5uLcTBKyyQrjk8uX2bsjTPCmCFX4xt1yB359uFyF7opUDaMW5ggE3RbrvBUnTWR",
  "key11": "55YPVF6RVbQR2TkBkmiPmHdrdhGxTFLGh5kXsRuMshSBpFKNewhJG5gZf2XZtVAAwJ6qc8MYR2GJBNQgxHmHnXeP",
  "key12": "654qmvCPcRVS1h6z46TgUeiStxLxUe1A2xpuaw1S8p7dh6VrmRcAgofRDRtZHYZG23aF7Trfwusoxg5yVUGz63Ed",
  "key13": "qpw5fSdskHEKSJZJ6ho5GT5KrCRwsfJYAGRVuVTd69CsJjwcSGBXXvDf8bc5ei4p6jAtvd23QuZrHTsiPRe7sc4",
  "key14": "3eLFqQNwZ2P9m4XUE987rXb4FbvD7cP4roP8GvFgQUhSj1G8busKDuoyVmWwc3dLPPofft6orWMru7A13CDaQuZc",
  "key15": "3QUZ2ZLniKWVri48KL67MvP76uxJWnhnV591L1z6BXYsixnPggLCU8vTgWiRDjf9oDiwsXD8gVM1APB7WiRmbK2g",
  "key16": "3VhqE26B99DyY6UrNesHG9dHuLP33W6gCaD6o3UVrFuSFTRmefTKSm2N6pR3Ls2U5FqCUjpRmWxvFu3tyzpkTSMz",
  "key17": "3se7z14kM4Th6DTo3bnqTq8yRxhGSrMfNCPjXAtYvpq6pDVFTzY8x977JU5eKcZ7LcuQGEfjQ17D6X98EaNqAM9G",
  "key18": "645K8485o2oYGKCYpwXiQTXZGt7E2BTXrJ1J8N1p75VqmXXWoggQhb8Zht276WRTtMVo7ksLPJHeoakJkhpDCi5u",
  "key19": "4QpMFW6vWprguBgEvkQQQQPDSqfhDVxmsdQM7SoE99Jg69o4h5mecDHPzAfzUtST1NMdTRpq1nJ4BLFL62UMno2P",
  "key20": "62jbxYVbqs58Vi8S9NhKn8NbxKvAaQWXhxpEieN5ZidxDXs71vmkciZpTjctdWxUAwRqw1dn5NyEPZiE84byAez6",
  "key21": "3o9mg2nQZ9ApvtRxbJXYC9rXa5chhWiRBpMTsiXuBta7d6ZgUri5ttzVaJv2NRrXxL9Gphw814vRBkCGKEZwU3Mx",
  "key22": "2kn49BHWFXgxCuZG9iUBhchjZHuEuUHEFouy6zKSRng8aEuup9FCF7xng3Mw5mTJubgMFLb68UVRHpWpnC9kB3h1",
  "key23": "cBGQyJdf9xZLgY2nUAGRmFqzfsSDi1Z2e6sAjYvkhCcY3jhPUhX51nuZx6DAsLtYAht7eUzTBU4gr2xMbercEjS",
  "key24": "45X5kXT2DsXJyravrxB99A5WmCVZMAs45NtdjsnBcvLUKbT3w1op8A4pQYWUxTh8FVxPDew7zibj5h2stXyPHxjJ",
  "key25": "3pvTMYk8iGfDPzzFmeiJz79FstxzbQqsDfWtuH3tWCKfHasUyeJAvxuLo4AUjdS2jMZMtggUphtXxtZJnB3rDisY",
  "key26": "4hNvQ515gWynJTZ3KjAzqJ2fZsWZp2pTyUxiqAVw1YVnnBm8qvVpr9vJTrZ7PvAevjMME5mnNJs9Lm1phbRZc9ER"
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
