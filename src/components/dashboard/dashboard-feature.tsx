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
    "24PBotduumJ9bYRautUvYHuPuMum7j7WhnpNkYmqzcHKKSRVgAB6HvsWAf2ASrfyGWQQLXZ2txmwBRYnYUoRHFrK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54EEw2Lz9v8zrC7YpySBrZHkfeZYYZzvD17B1b5qGYRpbjKXcGQaa5NuxwrUDVuA619Jib47EmR2v1JhWFMjUyWp",
  "key1": "4viYYkjGqtnWYBSoqZRBMxiXUSULDYY2g5mu91XC1aHGYwyyoDRzQTPhBq2AR81bPtWtKePuNaxz6u1LGDqFq8S3",
  "key2": "2wmLXEKNH2MYr2xVfTfvT6T6W7mntLDv24DJfv8bNhbAScgsBhnJwiEwdchDfUVuWr4UrF5CfqwYpp68DX46rBPe",
  "key3": "31etg3vj97N1hY47E7vgtpjJbt2ePZNUzJJi3rwyuknbW3pa8D5yasqhdmq1hcr1Z9zbvaax6Hk6uXc9wBTzK5uM",
  "key4": "5YhvvQCcDYUZTDFdh7U4RZ2b5QWmkXYZqaDJy7xbMA4mTWqMeZULfLMwFgvA4pFmkyBFdBdAE97dMDhGcKcvvRd8",
  "key5": "5XQNPYHS5mDnnKimp7prumEhkyvZacJrpCP9GP1d22z6nAaoWF2HZFLQCrM5S2qBzKb258QXjaiWFoghCXr5gck8",
  "key6": "5fTWXnLaejTZfPK8qoimLQYWzqBx14ejqqZZUgs9oVV7iLG9XCurGoPwEycuzSNov1N9mdVuLzogkprTbvt2GXR9",
  "key7": "ZQhVnPChNebHqV5zE65ytZifUPnS4XfXaVE15pGADkK8MdsUpxbStvFHgJ6G9GHPjozoErhUr1xJtNkggiMsoPL",
  "key8": "2Pvi8p9fvm4vAjuWzsaCRkfo8vJRu3TdV5RFbCCDL7oEKx1YQMvCsC4BosG9ZGKnhdDVvXuo9Lt8EeKEkgnBEByN",
  "key9": "2HFZgjWobKWeMfb7ezuR2SDB9YUFXcUCbbgPYsyzGmwffpzJ49vhqN5V91sdA2dWY7vuaMvVRBma6EGCmVN72tme",
  "key10": "4vrMZcpbgpA3QXKVdj6h4VHwtXgoqTsrz21cGXGHGpTJkXzYEvjuSpnVji3hqTirLRzu79qD2GLrFQ1PdT1eedFf",
  "key11": "4sjwTMkdS1w1dEazp6oEwTP4LMQY87wz3kQGspyHFUXJ7HJ4JYn2h5VmABXHpXzNjxyj4HRwFD4vcpVeMPq4GbUq",
  "key12": "MMSyNFfQnrq2Q6Ft49aHoxaENVutmSx6TWEHN55KhqV9p5SbJKBJRfwmhPMeDSBzSb1RuYCLHYX6XtmcHhgmM2j",
  "key13": "5tZ5NvJHagArijGYTVs3YtQ3keMXcoYQ4fcgpjLACXHwon7buXn6kUgb8kAsVPbYwCQLhaS4pGze3w4Lytiz1xrd",
  "key14": "4YXuVG6m9cjc1eDhaUSULm3J6iGGMrr2fNX2FFSTxPc4CEfrAxGiC5yqbj7zX62VPwj8QsY2eY1DTDLZPFFiRWC",
  "key15": "36U621pBiGKoGSifSDQ2U8pZBFSmUDvKKVPnHaBAFQzM427jDRCPMgCt4ArkojRCST49NpKEUh4ZuvJYTPJAY71J",
  "key16": "33PQqY6YgLFv3dK9A8FTpBGDbbYgod55sJYtQFgxdZSQVoxknBJ1AMw6dsDAYZhpQjE4KgUanQhWftwCrftCcEAS",
  "key17": "2iEMUpoyNm7oMB7dkRXTm3rB69Q5F3f94cnVeQJYbaURbJomKWz8vDgL4WViCwLvTdDanWaorn3ALwnsUD6NuG9x",
  "key18": "5GeyCn3N3eMcfNmgqzWSvs4oqAQRKSGgiNDcBAh4vfGVzLTWAiJTpaK9tHeWzVGLSKvuRjbG5BRJL493etNufZuG",
  "key19": "kwE2HotPenevYtvn7DbQUcdFcLDZJfSk1DxsyhaYKHjQXy6xj4Fe534RMQASDpCir7uPM9EnfSHTBhLBVAik2c7",
  "key20": "58B8Z6iaJN4FxWg8CW9caE13PnjMbNYwaUyEwt1XducvP4L4gHBSgb1gTrcudCobRzEyq2dtc2Uhc64FWSeyfTYG",
  "key21": "5Z9cgyLriYFEAmvZRMiEdLgELn95uJn5jtP9gAa7tuKq8RdFawrBtmcPH5cEn8ZR8ipkZfzKi2hT12frDZspoHJd",
  "key22": "5R7nQUoVSnov2DJw4ed8KSbf2QSq3NbKp6PSUzDrkgAbG2bCDZhHyuc3KaMFdR7kbf18KcWJHkHvgacUmuLkQSe4",
  "key23": "24gVLXaVcAA34ngPBXS4eHa5aPQeabrXYs4rWtC7u7Fy98BwDEEHBdQYF1wGU3uBd3FcCrhCEoaPvap1cRMVeqgA",
  "key24": "5pdc2TfBEXKYECgLbpkrwB6Jp6KQ9FeriZP8RTEeMpCe15ujdeiMCq23VG5Cj9DoGhVJE5kiqMa1pUi3rfe76Ngh",
  "key25": "2hY87y3LrsjuhXre2F9kNw8NCkHZhjuMkHdv8V7cucu2HMyhV6StjRTpZSez5JAJq3Gr2B9avWS7SLoQ1ADUWYu6",
  "key26": "3f8xJ3mfYJxXDz8oipg15doddTbHhCysHEfiJrNN9z2QdgyCkY1mwNDgWKK5vmKk3bayJx658WpBgPvSNM78B8rg"
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
