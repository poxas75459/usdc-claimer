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
    "5W44DEpZw55qmpmYep3wHSnfpH53NLxFti18nE2QsUXnF4FN7GqGP6ZrvJhrHt5cmB6UzjMW3JGdpuZSNy4tb8iE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EfAcCQXkyK6XfwHbAqVfTXzkc1yJtYEZmdGf32qwRPsFJTvjx7mw3TgbanEVc7yKUeDSM5dnz5nPx5q1Wb6yBMx",
  "key1": "A4Ceybdr3kfKFcmLBLNwSdBhd8BFe4dK8o2PLxcKKLjUdNf5u4xbtRrYi7fsQxM9aZpSVah4UEf2opK5WjFTU7f",
  "key2": "5PgFgt3ZZdi1LiPGk8QYNMKuYAL69vAR5hRkTTUZ763P4m2pjQTsYaVTggTUd8pe1efSpKaKc7FvzV6iGLkGf3j9",
  "key3": "4fvvbEuR8ZYN3dPqKbsDtzRqoMe9TdRBLCVhetdAtEBihQgNhotPwvC1FEqM3pGjfvkTT9g6AwNo2M42H1FkGe67",
  "key4": "2iyRsoqQdMr8y79MHWDSeGpmTb4KdimcFo7YBC7bSwx72Y97WBeJLgDymKthERpVwty6bEn17Yi6ozEx4yEZ9ytV",
  "key5": "2qx7UpyyzSyUScki7ZnnpfpVVrC7mHpQ5MXpeeLFLHzRfa4Af3qakwjuD3nt5oGZXBthDR56CvoVng82MmoG7zJc",
  "key6": "4xqTX2Zm5WPsMqZzcFSAhKL2sqGdGGrCuy71rcbrH6ERhhdW1BtsHAxVvaKEbLJMbxz5MxrahdmCNrp3dqgMxh6n",
  "key7": "4vqUwf45db4DeAyGHW91jQWbhkehbbzunVNGHBpDhCiWgzsksX7EGxeid1wpgXbLoQ2YJEQzLWajwJDuT3gyRY8B",
  "key8": "5XKunw9ynBVFP3gSrGJofo8jMNpSV1NYtGKP1nb1WiaTqArjanXEZM27AyBBX7h2v81dySqinWXrjCnBdKGbPPbQ",
  "key9": "3SkuK9E3VoGBfJ9sVjKbUhq394xKSZ4Sd85TYjLQRTAauXx6hUXDpNdpngQK4pcpmx4FBXuGz44NFfFKdwhnY4qg",
  "key10": "1Rdmqq4FUuGE14DemMLyBheLFHhu9k8uoF1mnqAo64fYcwx5emqjc2XzdLYVVXyw7KMQafisv82wqcSSjKz3DXY",
  "key11": "4TedUu2bQZnAZjoAL1oM8X2Qq3UyS9WEEfnrupDYaDSS12SmQjf4VHTkBZkDPm8g1wuJhmpUQKBLei8JiN1dbRjM",
  "key12": "2NCjWV7mxZU5VE2wjhccjkM7BYrUeWJjab3wniHBZ1Vgt85JbEi9AJW1PLNoSdW796wpCv8J8wp3unCzStP9c28d",
  "key13": "3BTsSRbeuSn8JxCkMiZTZ115HVEPmJEkxzeSjG199VzqmQQKZFkJdiSQYFs8ww68k9WsHbKRzdPanwz47KBEKc9Z",
  "key14": "2tfvAiyLbknu4btMy2NikUaMNQdz5SEj4PNaw9PyM3VBZGnz33ofzPLZEWhavyJjxR22wTo7EaN1rUrp8L5tGVQ1",
  "key15": "2xq2h4adtDL1aQU2gUVy5fwdvmD4x7mY1eVvFtakqKfzPd7298iqyK3fpS6uw9gnkfvvdDSUiDrPehpyik8R3cpg",
  "key16": "t7GgFUwFoVWEXGoiS1aQix5hyfPvDUqdZLpiSUqukTz3nyVbPPFwJLcfb7BzAsK6p3fUJpyRsaMHbukNh2yutif",
  "key17": "VHxGfEitvD3V245jVgJdyA75muv8DFnWDdG6RCnvjtLqxXYkYkJasVtjVHDsUmH52GdvRtdQ9sJJM4qZq6knEXX",
  "key18": "35Ugb44C6kJeVYSHbhbxKUKarxjateSxtbSAjux3bd2sdteUQJ7b8q2Fiwk1wAZndp8qLynF4ui57Yzkp1ADndVr",
  "key19": "3rsMnuYs8TPZyvqQvjdM1R4MiGvRtUkgmkKTMGDdTCa2ezTsM9zB6xBx8ownLNoqVkY1NePD2yZxGZNhaEwC1RdP",
  "key20": "3TXHAdBADsP8XsF5pvmPuiCV52EtdvjM4gnpQo9CE92BGdLXRWkvZDYFmzxhXjdPssqiCcbFLaVxDDMoxgPro1oy",
  "key21": "3kVWUUG8gXEAn2DLnkNA8x3kcN4528ttLPjsqxfYHAZoyhRAtXYgEWDMAkXrtpF69JKgCUrcrSCMa9Z9sfQXdkEw",
  "key22": "5BGy6vbVosPPhNuFQM6Dk9Zafq33RBQwGj5T21qaJWvm514rVcYHK86g6Kx64S2U8xgqhKZSXrAcADFjfi8LbpCo",
  "key23": "4253FnA9DQRciK5ZM1XcfrMtwvng72CxgGu3GneE2VE895mCV5xzXsmLvpYuGobs5dNsvBc2D1WbEoBWD2W5P9Lu",
  "key24": "5GxjqsLkt4H6nHxbe2tai15AEamUzQwASHq7SagEkU3x5d9oq4AyniLaCYAW2b2mFzF2Pj6DvQBwKxersbSCP81A",
  "key25": "4uGhM5H79hCDTrpnJojhxH9nJEtbsptcHBQkPdUNzT4SsyYdoPjmLztTsTudHUn5n5RWMo7gS9ZxhPF3WXuULGc8",
  "key26": "4gPELzS2gr9ta3jAy45xxfQ3NQfvtxeDXQQ1bhQKziVvzeMnzKgMRf8aiKiBWwEkp2X5gixtYSYm7nbtKhnaxWyk",
  "key27": "2cHKDQBTFYfzonKLJ6DXUYHvs37QKrzHaf4LM2siwCLJ37H3r8VDjVeZEykbwjAaviiR4LUAtcpWiHugsb3GSFQm",
  "key28": "2mHcarhcnT2wonHPyduRbacUmj4tia2Fh971oFTQVPdyFf4sPFW6QtCWZpe7m4KRyvvFbGajCPXPp8V8nEZTnLne",
  "key29": "5rfkKfzx38ooyHNW1HVKPGmhcxQMwgYkzauErpp6jCfvV7s559EBeCxWFdiAVFvJibTZNW8SWMEtNUEihSLd2xs5",
  "key30": "32wzissrvP6TDs2gpMtmkenpyiGXT9ST8S9fqB1Ak2P3DH7T3mMBmr2gsq1SJ3HHWcKmV39sAbAGwcH47LAFc2dN",
  "key31": "2NARvfqeD66kDwuD1RrJ62Rz5e16AZQjZH7gwuyVxnjXScC1BPcbrYkothso7fqUNqEMTs6ac1e3zaBDyKau83EK",
  "key32": "2B7cXiYmL4jDrsrpwMRPWh3yoPUgzbgGLk3jdJ3FZVjBW8A6XikKnnYZFSCSLwrGWjHeXMQYvT21mu3zxvNJoPMe"
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
