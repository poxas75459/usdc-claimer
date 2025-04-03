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
    "3wFtzpYz9FtAiJ3tSC2fjTMvbeAK6pcmgc7A6MTw5bNhc18dGBxN2du3rEpvd3eMzYfYSXjX62NQ15GXpFpifuwg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SVh85kqgaRxZNjdyB7VEVo2Kb5PBqihz97yxLPWNr1EZZeQq327EbF1RtRNgoRBUyKtHYsG2KbADkKSFgX5xYx6",
  "key1": "26UMGg6Djndxw5tzuKv6Mx5s98wZcm3qfLyYE1XNvRa9jx3T6pBBgucRw4kpSAEqMntsBPPvogLQCj21RzXpWkJr",
  "key2": "3GehrhmeqRDyDJaqcdZoJsmhs9My1fLtAFa3w5XLA3NGDyWe3UTbeE3RU4wyurfyZyM75WBiry1MxryCrnn4zPDJ",
  "key3": "VhCKE3SoNMyLkcsRKpbZzeYMfYhWV9FNZdmYLx4aCGeaVZvaApTtZcqmsvhFQaNwwvXAL3DBbWmNi8sJsbHQq4j",
  "key4": "v69pmpFHodx9aige1SXAQkzCRaymQ9fDPM8AVFfbnajMe1t9aXFjEcPRinAiMNpjz1iuMcrbTGgQKCAEVXFKnGd",
  "key5": "3E13yMThdBD43tqPnwTvozeESzayiAAi6KmMvFzQbkPp8NczcQWctEEUL7dSBCtdT8MBBmZ5PdnJpBp5wt4qZJRd",
  "key6": "4R6dCNi4uxFTzRMqnjFXQFZkCNkRGEj7Xe2JYcth4C8tLXbmZucYYbgdhS6hA5kuhaq8qw9EiWJb5E1FSrLGhEHJ",
  "key7": "5twRAGutsshvTZZb2LJn5eieabEbChDfwmtuq6vdznvQ3as1CWLijUpRhPUYoERem669ibsR9fuPq6qoW9BoRGTc",
  "key8": "4u9gneVEiSBuH4dLpS3tCkcpsKKeTMcGvf7hGUeE3DryAnevAQJBemKDYmvS7Hn3R9RtNmwvFMJCKDv9kdRUuqSQ",
  "key9": "5CTjeP1aeY8BXCrtDj4jW71jqVEsfr7Uw7MCg5tCJVNYhyjgQ9ucw5GaRaewoz3sszwKwtD4YuhfcjRzPamipdAY",
  "key10": "TLVwadK3HURtzsZEtZDZCes9zBxPvpXxxDUBcGBWwGzNJfpWjtPZKFQaoJbn6BH4Acoqr2x8AAZUcyETzF24UkF",
  "key11": "4RRQkUWreLP6cd3JaJS3QRTZtH2AEpQoMsA8q6UhY2miyq91Ds7xytwujWoUg9CrNmKvLM42rAoppmRtksyXFMFx",
  "key12": "4NztcrxuPmJDUkCdQqa2Ehmki6BVkJY4PX3H8vcwABqo9SmjamGKxVBmDkR8yYEHaVMKXTJq9hHZTU85hTKZNjYi",
  "key13": "2ttr4KUpAkKz9VeU6mMRSbzqEkPscsvgoFhBoEkQTFffd6KeJPsZKpMFVkwp1x7crm8VnJLRqB5p2aCWjAvSpto7",
  "key14": "KEwUskuRMPDQyByQcAqJHYBfmv1ZqttxEk7sDbu9KvDnxNZYmTnySohdRXMjarR611mvT39TEB7h3S8vBXLQNDv",
  "key15": "3ZBEwY8651pGTTo1JLk5cqHCR528NNbm2Rz1HfBCwVyAWMvHQ1TCE5dup4sfCANqyvYYnoXgEFiWu5pAvtdsDUUX",
  "key16": "5gBi6DeBGChu95Ars7VZsRrwdJrw1md6pRNjxPS8cnWFDrQciRmJcHcbCmpdt1GKiKCqm5HAo7nK6qjiZCDHrBA7",
  "key17": "H1SYUu6ZT44uoFQdRbh6Zn1WSXZF88gJMc9v4pcJCT7ZiUjvexApjiBvu6GLxsBEBGUmDBo6SzUUbH4Zw6xPzjE",
  "key18": "4kZFvBSkvUyvcT7gzuJzjMsAydBhx4EDn92HrGBfgnUTLEuXnar1617Mp8354eWnR61Umb5NxM6mPNaE4joC4Yez",
  "key19": "5PRpHWwPtAdAiew3fZSjFa8VdTFLQax6HizsSBFLumrF93AQacPvvSqt94cKL5YXyJkyyffgMFd3VPBmDJvFWdJ5",
  "key20": "2NUYcpvnSSdT4AiufACpkozx3qTYBFqwqzSGeAKwav5Pj7a1msahHJjMQMWNyKF6cQKDaKpeWoZfA7oJK4VRottb",
  "key21": "M6ufXFWJdWMiHyehQauGNNu24xmrLuWQoJm79WV59zgWuEDjYknZp5kTQBcgUDARyoMT5uN59GNRm63uNFAN4gL",
  "key22": "433M4p8MNAipjfiPup4NfWPnXCKbHRdc3Wvd5CZEy5UVQ5iMLoBcpJMkBzfkoatQ8GYK75ymhQ9Tjf7ygcLXR5Tu",
  "key23": "4v2mo2DyouvLA7sU3JoREbzZmmhJcsMPyeFDJWkEdje4REWC5VBmqbgc89NEH3Tsf77SV3H3LvisAWjrKps2ySNm",
  "key24": "4E7PDCgiDV2v8w6Tm4tySvd9nTr6zfaXDgz56UV6Az9dMDvSd7RPiESfhrM2ZWaXBoKegNK2zQDMCNAmr9bwZmMm",
  "key25": "5qPjBLHv5Cc4egivtGWvrex9H4EfBDFM4qjKJJak4G2CT9wb8617SyMLM34gBsdmMqy2iHkkvU5gYh2dJQH5wx85",
  "key26": "48vFdUVuEhDhr7ETywpCBrMzvAMCyAcCcQdWPmtt11Fs4LKeCQbQGcPKkyHp5fjkPGbhBywpsHmQHbVLg32uMXVx",
  "key27": "5eKXiBrvh2DnSmCAVVbtCURbgSTVWhTUseGeQHo6jE5QC1dhWkVsXWU6LHWyRN1yp4cyKKm6WqX5GHjtLvPTRyVr",
  "key28": "3pLEiQLjFkjSniDUVCAop5LTjpxeUBPS2wrx4Kpy8DNvWdwG7MqTZzqc841AsC9ui5tmDNWvcDWffxEkLpHU4C8H",
  "key29": "51CpSEXagoSCQMm9PNGpHmVYCKtCozXiUyS1zMCXg9gRdp79wiyi3qEqZmYBAowYDEmMc1CmtnvXEQdrCMgPvmtF",
  "key30": "NDxq12bXTCAKEnEN4ww4P7wr1J2FzgDb6Lu1btEg7BWoGkVkXhQrYdyVL9P8yCTKa4XxttCEGZ3Fb1za5zQYbGz",
  "key31": "2DhGUT4h5y4sskVp5Pjkw19BDJn3rigrgZDL7rErzhW5FEvBWEhXC6BYHMRcPNWp2cs5GF2rEy2a8rmhs5FGXztx",
  "key32": "3PsZmMCbBcQ5gGwaQozVof72DL9a8PZeEGL58hcvres9MkA7usMn7cZevdjCXEybTsi8PrpbSpWy4N6MYhQRvwXT",
  "key33": "28oDsxCqfZXYFE8g3c75xZMMjzmxyZW27ajm1qnZWudXaMhkHHDcX7wi2SHLcMnusxMeupVcSCFSJKaBYw2T6gz1"
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
