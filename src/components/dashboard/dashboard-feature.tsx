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
    "7zbyXfcJyrndXmsCnSM8aes6ey4oUhGGJdNRZZxhMqoxH8SXSyPgJWNmYZELPzJcG7CXEfD91WJ7zrKQ99K5yqo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MibSTv7ag4jU1vfy5f2kfBBQjkj4pNHb2LpLs4oDmgA8pfd9fsZm2BYBbpHuqR31MnWr8PmfduMBS25XzaU47uC",
  "key1": "JLHgtnSU4kBqzmtkY56Pq1i8w6SoPvpgf3sDMtCky46PnBLc2Ac2fRjAAJL9zVk72uVJbwPHG1zZZpUKwfV8qtp",
  "key2": "5P14SZ2eeo4Sb1vPUrHQh6Bd6LV9nUN3aKn476FS3D4qXQQcagir4caoyp3gLavR5RbUHB3BCgMrqcuui6r19ZCz",
  "key3": "37yHVgQfrFBWUyBKD27JTvxaScpxkjk8dsgYmz3nfSvYuUPdrQYqEn5pcn4cX8JFsh97HQP5bS8mD3nuARGb9JTF",
  "key4": "3xmmUSwVhHnu25A6NeYPWs9SF3oco11ikcWiSCaH7JDqRRsMq41rg7zPQrMtj3K5eacjZZvaDndgkP1aUdkxHgw6",
  "key5": "41KoSrJvk25mfVx7wpZJSGUmiKECnx3x3Z27GrJ5Vr37PmrMaQPU6qJMjgiQV3EEa6pxu5H43dsdePC81N78nfC5",
  "key6": "2F12KUB27w6FVy7Jp9uNwmvW9yubKZFz24owSEq41rCWwoQBkUPcYkSDFD7nRmKaucDV16cqLNDZrRQ7mDDRidpc",
  "key7": "2J2Hyped4j5wteNSosP1G1bJpEhVFF3wPaM4NTrqWuz9dQC6mG8YumadtVM7qVWdNEsfKhjtj2ZAB77z7fPBCtyt",
  "key8": "3ieoxc62HwKDjq5ddcL6cZdcYhSHBuGvrmLgcX3JpuJNtQuJQiB8iwNexruTTFUzXZDdZ1FCifmrzBF81zDmRdEc",
  "key9": "imFZ1NEiyekB98p7gbUEypKed6ior1C3UApkTQ2W5ppc7oRHBo44AwGJHeUdea8PUj4ftzaH8TR5DgKZokNwC8n",
  "key10": "3PudZbCyGiRPVmYg2gRDqWWWHfXY5ucGzSs1zw9q4SAQbJhKYeyNpJqdwYnJQJCE6ofciG3bdrcZCRzffZohdqdW",
  "key11": "b6ocbrYHKUQMimwYYmXvpcUA3eAKJJCU35AA83qifLjoJzURx363CKb1GDEipqh3otvaYFAaEaKrnkqgtrd9E6G",
  "key12": "3aJ2AptHAtQFhBmPCLuAb6Zz3rj3sWmddtPwz6xJHFnibvim7C9K978b6nwcE5A4J1dmb3gSxyT9xiF78St4oois",
  "key13": "51Ho8A5ot9CbVKkiB5xCGGJGb2wbagyF7XkZXUG6s8GRJENPNT2JLTjwFtQsCpzg6bHg5gyqwzfMak5HRRWEPZcp",
  "key14": "4B1RaN9n8mMU2qJdExD9uJyf84pTzGvMN9z5WG7zKAxd6UxL7kjKyxSmQ7SSdWMG22K18Lr7taqQuXJy77AcHbAc",
  "key15": "4bYi4FvwH8wm7oCth9mpPgB9NMNVUwQL4YhDtRFk5GQdWRUww7d3dD2MPPRwNjpD91JN4VVnTiir8B3Lrb2JETVi",
  "key16": "YtvEyiBvKGZq9ky67CUrZ7U2Yu7v6wfyNjSvmg1A7RyqPPEhEBrWDJEaV1j1jwPpuUFWesjehwbe4q1d1Kfs7b3",
  "key17": "4JnaDbF6NT7xZaSk8bL746hwhm1c8zAHDraJRzTRTrDZxbtzfYSe61uaGurt6Kje6Qjd5RdeAfGqjHT7j16yJX7J",
  "key18": "4p7tmXfWkiff67bPiEQHYUvotJGt386zKYQfKfn9hs6bAhjRJejDKn4xWNhG1udZrY5QmL6sEDpTjQK5gMxQfkGX",
  "key19": "2HWcXz1BWGtE5Zkya5vjC1JHeMzRtxpsHtZj2MxbKYCLRxrzBwnfyP7qNspQ5tPSKmJev9oqX3sPgusSsxzmPQq6",
  "key20": "3jCGjkD2pLXUEtyCgCFrBqVX32RSjj2FD1vA3QUbKyJTatxc232nQwFokhvoaMgpSDAn4g7qafTMrpJWHUZJMFbE",
  "key21": "PKMtVhsnL2zmA6DpQ1nH9FyJRnhvrB88MFux8tcyjAih1v4jS4dih76SWy1wouKnEpt6ChGFJ62F8gRmp4LhNMW",
  "key22": "3BEnQhEnHCqipn5s3n3pk3QHiYEkuggGnxgCSXbLSDipihhSerYHzAFfBjBjYGi7F8QEti9SFPPm3dsX7vkeH7V9",
  "key23": "5FMaCdjUxHEhRFVo3pMHooSMs6wUik1EuLfx432JQchK1Rdw8JZrqDrzyB7SS8SEXPMMF1mPuKdsbMXprmzcydiB",
  "key24": "2na2Z42N6wnHAxWViRccUTL6scntLqEJHtRZ1pxhKAnnie1f9RdsEJmcuLoCjQJorQw71h4CGuYyWqwkoeP1kJg9"
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
