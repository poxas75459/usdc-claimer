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
    "uumnJJ5C6RHhWaWMrsFGAcA4LW41gqS7orD4FVeAnDfeJJDp2pHuLZppJTeXY5xNXmZ3S3XkCpv6kVDZEUcdimE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JQ87GbCsyz4E3SbVDmD4yCs9p47UL1J8uCLjV7a3B4YTLcPG4Vb2HoPk3Q4YXp7DiDKawrLdbz85SmHF3XJRBQX",
  "key1": "MkYJb5e6fjHbWrjTSmBxKtqAhH35dvc6m32N2K17kU2ZezkS7AAeNwUpTZEhRwVhp4tMvK8pWJg6ytgQiHUd6de",
  "key2": "32Zdain8HmvKyXg6sYtMeYFsatUgLpPf2xfdT4Gon8cTzbsnwGo2E3ZTZVRtPrxYpdwxygRWYedgPFNtjRLH5vf6",
  "key3": "2ee3m3neNtwwrZwtHFNzYwCJkb6TMfQJ4UC9auTdTNuQ4F6jsM7NUoc2QT2y9wNkRpUha6RtLYRr7VBKfMBZMfeE",
  "key4": "24k68NK6NXuX2hV5ryu5erBRPyJCLpcuxmS1xkJ2ZJ2ypQmiFshYWdtwMi7ovZr7fhZXJW3H6iWR89o5Q4VzP7bS",
  "key5": "D8g7D25tSvSZ6SDrSkLLGzzE9xw1ks2myNJ2qHsBAYmXbU7AsxGA12s455qwRjNBK2uyxfEAPd3PGEPH96iMkec",
  "key6": "5XEeHKH2D9Q6iHX48uhymUXKNLwTUwLgp6ySiu4UN3xF4PjVMbFX1a5L4GzUcy3xZhNYcckNHmNsCKuMCMq9mcEM",
  "key7": "4oj2QjvuKsZy8bAug7pzueXWruV7DfJfzxi6fA6fvtbhjVFvQMUto3cnsPrEwDUaiubNXu78A42tT9cs2mvzcqFS",
  "key8": "5RUCoYsd6fwAS7o4p74MCtYNPnWbaGRthfgyXhjJtiPzNtKE4UZpJCz9m57g54VMurPHC4o6YS8WQAspgYJJqeVP",
  "key9": "i1L3exqeKgi9dpB3DRgQdVhm4jgWXXkk5Ant66UnzBZCAeDQSjkSZ14yQSmoUzgi5AgDazymE61bAGcpg6NZhqW",
  "key10": "3vggnUa6buk6N4iwkshF1SpcnEw8pjWPeGTkkUpnyj4RQpZr3p3ASQ2DrLKerEtEbt2R12DZYK6pmqxeeru4LRyG",
  "key11": "3BP41jvDF4fzWE6aTBmSZSDFx2zn7fq2dpzTBcBNqCXQSJVjjMpxfPgBBMyCyujxZwcRDGJABbiVXG1KhyVjcxat",
  "key12": "5K2pbrb4iyAtBvBUtMmkRtkyWqng38cbfSuqe8eURtmbH6TLzxVbfayNUfTGXmHpi5D6CVL84ytc4Boj8qFTtcf6",
  "key13": "3qdD7AHWcieBMehqxD6nmDc9Xatfq389H23y9uGMW9bPZTPVUSR8DK5N2gr8JXXPsVTHtE2QVA9dHAGYNAaZ1frN",
  "key14": "3D2XEsHkc4Qg5cjEbbkVf7n1gukY563yTbvcMqccoXgHf4PRdpPEDS9VMV9uKpnWbGbuqpyL1sBkFzeREUHKX2XH",
  "key15": "3fUNDpaHmAdzrwg9aT8GNKBFPMRMh8f1k4YMpvwymy1TtVzmWgGNCkPtjgWtikLmrd8Tuah9TKYCvm9GdYNstx3x",
  "key16": "2WhR7oLRTopz5dPWNozKvZQZTrkFW7eFRbnjRug4WUooAtnHQjCNxF14RgGooGrcoCGzn46rVFedEiwDxza99Wq3",
  "key17": "Yxkc2RoNURSb4AetjuR5SEYP8vYVzWgJrWKfQiXdu1p4Fj5btZHnSofJSz3CsjkD9PCCUQyJsCmPdpbWN39KET7",
  "key18": "5CdbhpuJ62GSg2kep99uN2AHftPpiq6GvJQNN5oYqtcjvNwQgVxFDSHRCduLEpLKZ3WTFTVP5RHQ7yGGAg2A8i2e",
  "key19": "3myUZFEzSXJsVZjPVEQvE2idbkvejBmMuz1Kk9a5GjaSvvmtqVoqJDXEEF5LtQKoi5pKrpb5rsh1UAaYmHbeVL2y",
  "key20": "VChbowciJjva1Jy1Efh2LBzBhZbzkmVrjYAGQctNbmK9paZj6mx6yNigudqKiLVPyChUMZqZ9UcpSBMnbs92LpW",
  "key21": "f4H8UB6R8DpgZk9yqSoPn8Zm52oRshUNbtea98v4AFNAvBrLEZZ28yETZomtdefVrS2s2GqFpii53UKLJrdMFY5",
  "key22": "CYnH4NUVJwgPFX9i9gapx9ZZPKuKPCadEU3wT1uyzmbArAfXWc7pees5yG7euajTwwWLqDN1SpiRh9aap5bd5Rd",
  "key23": "9gsf8Bz24c3q4RLLfURPS1NUR2h56APycYrPCF3H2Rfz6Bxt79STfByq1446LB7DMePGi3qiqvG44ZozT63sRgg",
  "key24": "3YFNehn9S86AQPfW6Web4m3bWfJZ1wAEZvGWhbqUcuQ7GDxxKGh6ggrR9Q3c7s91Yju7as1qcusx2SzCBbCgwbaj"
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
