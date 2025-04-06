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
    "9SiFhZ1RhTHpNMGTZo6UAynpEAk64reNXa19L9bA6e7s9Heqdf2WFrke9zuDZC2PjyVcY2AoCH1MFYV43BEjRpk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HnQoAR2erMKc1YZmMnLPjYU9PW3LkUvSajew5cfZq2LvKKwFgXTPhGcBfdcVQEUJV8pYsbEfCbm3T6cpd74gnUS",
  "key1": "57hDKKXp9X6NDj1zG7uXte9HD1XQnFasEspSYMFhm4UihQCBsUAiCti3Uxde5RkAoRstAVjLnsZUKC6tiqA5igYw",
  "key2": "2Qo7GfHenLkUiWDNFduhtCLtDCu97cMsi4n2odLnbcStVvDFM1Cx1kXNBJUUBTn1Pu8sZLAKZpXRYknmp5n8yA5Z",
  "key3": "4G5Sq699M1DTPhLwpET8kzTQEbg3rbrRSHRNqLpghEBdFumoGiqgjKijVtWcnX1ajdu2RkCEmLaUqx7nSHkbKLDJ",
  "key4": "2Xxcy3YyFEgVLwZ4daGJc6j7FEGeizU1owYRKW8Gv53s8Y5LEpFMYPAhvafo5AuwWouYyJhTbsizQG8r3ebvu5F1",
  "key5": "58LjDCrQXRDVDHhTfWUMyvwkMcXhQsMeSKLQfHmXu9SYNGB21DF4A4G8p8onJ76HVNHknL7SC58xrybDRV5gy5FF",
  "key6": "crhZUxqoeVSggsaUHiXSpSbX4mcq1AbPDJqPcnCQqGDa12WU7UUWwgXFD1kB2rguNBoLsYEqiNSJMiRPcWGqc5F",
  "key7": "33e5ZkEr4ZJm7BpfqohBmNMsW8PzyW6UCaGiCa4am7jTpmwxjWvHqRmz6PUdtKUQcu3KGJsshjyR5UfyCQexCw4o",
  "key8": "3hPghRbjc6eFCN1aPY2T8uNUMGtEac7bvSnAmGcDmoVttUJWSnDgCnHtsf1PB42KJcj6vYJT2o79Csceaz8MM2JW",
  "key9": "3kctaWMt1HCL7YRU3jkkHpcsMbpzWzyLymBNW3JtQrXpbiwmrejv47MCAjSDQP4MyF9J27376cwZ6KMmzC8e1wiG",
  "key10": "4zFMnEjZaqxE7ki98NAZiLgAXLxPMUDtZeayTmPXGh1aZJnaBjxJtb5YU7x8PGEfPiUpWbLiPJquqBSEK7itTtJV",
  "key11": "RrUUsxdRjQoGte1aa8gNDNwVvcKWRZajSR15JWND1CYenUiScW2VYJiVBkNQaJZamE5myEwSCxPvExeYfQHHtRB",
  "key12": "52H1TdeYHqUvPDDtxUpZUmzjVKEE8bXnZtJyjzFYsx89pbfMpQxqU1WButqj4kJnpyia2ijGTAc6UpAWbafrZvHQ",
  "key13": "XjDMCWjDRzCPzrWbJV5LcGZGUvdYrYRqHzxto43NDVZV3Qoayyv8m7aBdE55F6xJbJeaR6XABk9NfFKPA9nTucp",
  "key14": "2AFrFzVshHKJks8P32aaB8ipYdkttjrWvwaswU46jXtcL578h8uMEqf8nT5qa38nDaW8keDeMpA2iM1qJPJB9s63",
  "key15": "irxbxGwMLTwVRJiRiqWhCjekczryonZjyTG94NPdJiobjVjz6Fnoya8v21bHQJ55czeL22YnjBh32MSeAvSSHb7",
  "key16": "8Du2h2K8C9s7Uw6AuBjCUF7pfLD9fj4qU7s22xoFWdCqRZDbhVGLp4AsrosihxKAQtQHV2RaTW7rhXeUzbfrx8d",
  "key17": "aTJhD65o6HrtxspP5LuKLFhmFnTwdMsgx2idrC83UiTA9NiCsewkF9MefYGrdxEBbm9qzPTyrW3e72hoaoCpfCV",
  "key18": "4wDuow5b9bbkuL1RpvQiGUXiuL69YyH1KgLLuBMnZLFbVt6enqoirXjnCGv2cFwi62w8313EffupW3ZtB8EchYeZ",
  "key19": "4NUi6DHxHzF2XuJM8esuCx1jZZoFHxDL4JwHA29FoAvSx83i2fqAx6QUvXWojhGKgoDwGXoFPNP8KLEPUDj1UJTT",
  "key20": "4eJAEN7aG9RvMMbjaqx8mQsN23r936Au4DsimqbYqBJ8VYHzSe7932rWvZSJve3nFCVTJPuU9EMJZNotXKJzrcos",
  "key21": "3wzV5SGcegUL9eKm7Ht4AfRFk4UDuiN17oDYXTqVumXk4t9nNxY52wmmTVbSipUrvi7NWTwRiAhhuf3AEueXKa2Y",
  "key22": "4VzSBTXKnmPyggaJHLCYgBYjJQY8X2gWuWMVKuzvSQFx7xmPbJdARquCqgd7hBxzTEUuSMJT8sTp7DZAHdhL2oUK",
  "key23": "2rcZCJS7D5B3ASDQfASRAPTjs44kAJYJ4XWE7ZX3pW8Qn9P2zBB9BAMojn2kw5mFzeXmwCVWcemNZPNAsQmjBUpA",
  "key24": "24AZJhHhi5NGh6DfGi3kQvnkXGLajJ5LXLfSe2KB7woaTnTYCYi1HxkbrFK3vHrP99UeJZ7KHN9WSntQVh9kRKee",
  "key25": "3M83BTs7bpCGqQ5S27Raz91uKHk7Wu2oXtLuWAuQ38WNBPiYr2Zw6fiCy4cE35V9w3UnTto6GFhSykatcmFuY8qf",
  "key26": "4zNCk1BG1fJJAY64LXU96FR1aMWaSohaDnGtWsrzfCGhmpvppWKjPVhJeotwZLw1RMqYhNyPa9w9pPQGnuxamXmZ",
  "key27": "4uftKPFogihQH3bvsp5A4E7n6wJvJth1Cmx8mckFVPbx1X2tMc7gJVDKXwsxu8yT94YgYPReQDcWRXNvVNjmChBf",
  "key28": "ghgykfmJKc2jy45qC9h2he3vg5KLL7gAZu3wjn6DL4n4uWfEeQFfiZmoKLhvbmmB4wQpGkgMXhRcLXusNTM6dpo",
  "key29": "3icEWDeraCCXFep7SGes1bTt6gPvf1N5djpgeFqE1YdJcj1XPsfGBKxnmLTxKv6muNvbjdGNbFQgpcteUczcxmnL",
  "key30": "4HM6tQTXD7XnQSM7wpYCoPSdtb265D8DNuv9EbQ5bSWWwkHoWtZByM6fj5PyEcewvvfC4NSVbe2fxaadxexCWz3G",
  "key31": "56KTDyv4rnLEgoixj86E4RqWxuvcYPdJGQ1aT1F7LuPZUTX4zrEwgzD1kRZSLM4P8mLpa33idqy1EBJt9gUQ83Fe",
  "key32": "FfeFsaYPfMkLnaLBKEHKRhS3WhyhSfeA4V2nvSxbppMfFnP2GLVMth9KtJHsuo1nmgz3srJvhJAcmCqAaCqSWJP",
  "key33": "3WyS3gptCaeJnMqwVzA9eb8CY1VTW7P3GDL2T2NZvyMtPmWkbJe3UYj726t26vRbfQJtN8G6SrKz3NNFqCqUv9Sf",
  "key34": "3TmoXShasoQgv1Emnn5suUypA8xKXBd5n8j6X4EYWRNUKYZGQAaTauFeVcWwMwYNB2TBpBy7oDykyM1Cz9mzdeZJ",
  "key35": "4d1X4oeA5LeV1X4deJ6WryPy4BpfJBwQFk9rviR3aqbSxiH3wZbSuBqgVH151agCZdQvHV5aL8QXLSWiH4uHXxip",
  "key36": "wJ7QtpnV7Dhi8oCaozoWPvCoDRhf2SexmLf61HFBPPYoUrnt8Ht4z26EYFhdKsUC7zZt2jYFS1cU7KrGNL649gV",
  "key37": "Rc7yKDMW8u1dZkMmAMzfdU3v6MauPKTY3yGQCuy9o621ga9YUMA5fVrhcuk1bHEUetLDcQ1M3dZWZRmkxjaNiom",
  "key38": "2mbeetv814PYi41BeZQX4CC6U87bEPUDB2FSnMuuzBCsKjQqAcPf96z75BGNVBuRvEJmxrPAXfgpMBS3JXpb3V2v",
  "key39": "2cP5y8VZkpNhmDYtM72PMmVnWNiaNv8dT8Qm5fYYNnhd9yRwt3aw9TcviBo2d1Y1siYqfoDBbEKpoNDXE9MZYP6Y",
  "key40": "ZGtU4mnqhJcVxgdXf6KVSXyxzWT2AyhKK2gFpVLu3P5LbRXrnfLVXvk5fRyVwZBy9rkzc6cWU6zBx7SrqPUFFr9"
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
