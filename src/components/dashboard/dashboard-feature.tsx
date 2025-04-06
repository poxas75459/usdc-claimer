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
    "62KvdSs7S9QkGvJmqqLZwJkLCJZubAsFSgVyP9yqE3rktLor6g4Ztzeck4FGF2t3sASzE1eZXXcWXkhcJz3HaT1a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CoGT16v6FdQeP9x1ZRKRqGBDGUoi1a4FdxZqBsWX9rJa7hAUjVzTgvn9V6d1L99n9oMEWuH2PvR8Nmm9LL31qQY",
  "key1": "41ZGyBCxUys4SsrMxpcipT5gLCewFbLyzyNM7Dy3gCb2afBBRuT9t6UtEQWNNwNJ71XPxxiX5WUWMRZVi52K5Dbn",
  "key2": "5SEfQtvtfywBzC3zspMCqJ62qzdUtEL3DB74m7Mmr6HvhwoH5vQeRXJRiz7cq2ityuqUSpa9NQnUvERhbVCF7K62",
  "key3": "2Mhh3jHCoFEiU77E4W55BZS31SL4iwPbE3JBKhZC45Yv1prYr5SMgjGasgH4ZDKkhVQMELAoeaq6aYnpUiUfyxqu",
  "key4": "JBbUR7NThfGCiiiwLMWeCPmDd7ZYhK3D7ZoAp4vorsuWC11mzC2eDoyrqctxLSThvroKhuGBuEhwAxsmSXF6edp",
  "key5": "urkLRnyGjSFGFNhj8VeyXYqBTTQgYvDZPptDoKTAnzEH9J4Hws12nf3yo3qJJFthwjHg9D2wFTz1B3Y73aWy1Se",
  "key6": "QdqXdykwciJfdb371cKSH8KTxBdLbmPyTB5RN3u3aiujT8iYDJkA9Vnr3y5GMreN4rRd4PotcqfinfAFLgRNJpD",
  "key7": "2cjor1uc36rr1rmu8hbE1H5kVwKF8Vuaj1CFxxAQGrsSJmVyR1KaJfbuXjUA18Ce98QC3PdoAyuoPLXXPL5ubGoW",
  "key8": "4TpANPXC1FxbgDx8S1Tea8Zucp89LwnLaqce7zG7ig32kAZ81Fhsp1VTbT9r6x27qpBueKrqeGJkX9BM6QhTgFeU",
  "key9": "2DCd7LWGGx1od7fZLbhcVXKq59yF5Ze2vGbnpTg1WhveYZXjm9Pk6EaEJiuG2FmYCSs635HqPENvoeGiTvZpWXzH",
  "key10": "4UihFEv257q7B3CwcPpkSL3rfga4ukePncqZYZjjvQuMpTopX7uK9drjwZdNgLP7uBJbr79kgFQPjijJTWCN59R1",
  "key11": "3oadZ72vWWzHhki1t4oJfWpPc4Nx8xdk3q2buTSxo39Lg7UnaqD9U1z2TLST7Tgvcic2LSgYfeKkD7XzNVB8jT6D",
  "key12": "3TkrwdY89fZKHbRCYSjYrLucFBvwfMEv4Uvqdy2daQRb7JFCPC6SYLDKsPQFh6k1hvyh5rEoSJUViRWqfjX4EtCL",
  "key13": "4FSDDZN2Vj7QJCtvtdvznYCMib7FYxx6mMoXkkk1RWPciNVebYWfG8jDfaVyJbxbRogwGkqWf8akqE7cvXXeJYiQ",
  "key14": "5KGy7b72PMLMnPzVLHjHdGQDJhoXG2LQyt5nZHeH48Kr35vxXHbTRgZFBDG5VypWe4jePF98Dh1FzSQo4x5jhwan",
  "key15": "2qDcRgaLvPFyzgANK5i3ErNB6QWkw4dRBLnxCR6MfQ5FyDW92fHGPFzMKqTbSt7zj8ycV3pMGwk5qUZBvQ3gKsns",
  "key16": "5dsoHByxikuHTbuS3szwP9vP5bqY8BtHpFomgvTJrSYrg4JWCqnic6GqsndY4rWVuGVHtjivsbjmc47KgKET2WwP",
  "key17": "aXSW2mtu6rKyo7tpuWTwpP3XDdUkTXXdcPCQ9KnGK97PExHCKmVE3ArxnmCxh25AoRqm4D7sq5wzVuh7WiBNmkK",
  "key18": "55jeDo3Gg3vbHYox1MtT7mVAZ2bkZsrCziotjrq5Kd3sRWfPKRqXUZfQ32y2LPn8XU5Sd9wS92QvG2cWK3B7DaLp",
  "key19": "4gkDWakxZ1x1h6e4cNiJXAzV31Ww1cqz43u6RhCnbgtNePbV5ZU7HcbzGJaTsqG1Fru9Y8Y1kJgQUvPPZ8DqgLvt",
  "key20": "MjQT31Y1D2kANuyBmoZ6cTT5y3bLAR1xM7aBaPVButxBuY6RVWKz6X6gPAtGrUctbjHzkTeVNbKR8zVREC5RdaL",
  "key21": "3woE17ghL1NJoBhj6aifE2R68m9McqrYp72WM64avNKRJV2rX3CyjjpeHNeY9ENfewP3HGGb56uDWRwbAyLnPyCA",
  "key22": "1nqjxAhmjoDhATrKhztRPbFrnf2GpuaoFGiPDWNGkL74iw53WT6Vb6bhhdBeZE33ExmNZWmN4Mvdq1iNyyoSmZa",
  "key23": "4iGM77wXD3kSmjgAHKoeMfeuub1JcyTQdgQnBzwtHD2FGAmZy6YRatYvqoB7ggjc4X6K6XSPYkU8vrBUnCamEB9N",
  "key24": "qzjAdvosrMh1jx8eFzYSgGk2uwPoXFG8Ms9DnQ438Z9D8YUwMriGuq2sLiJ6suZA4mDAxfbgoHM2upXYovLoVpp",
  "key25": "5ctz73ftesZD1VZFbQAUEKPS6XNtGpZ6RYdLy9fGeRaA6T1NxeehWdyXn4GV1WkpgFK8fvnZ2HRVc817MCFT4j8w",
  "key26": "42M2U8crYMgjtvFDC9U2hh3qFEcrJDjBPENVAamswsNZw2grNj2Q2TbCWiewagmd1sU46sqTkU5u6to946ByGFvv",
  "key27": "4yvEcsRhgSU91JLDSKHxhTdJBuFDwuSVsrnmiSU3N1mMY1v7Th7SHtbGT1PmE4yR8MtwAW5PnFfsFq3nzE4KdvzP",
  "key28": "49utrtbR5qM72G3pCfF8TEAtEEgyC6qpxofcQCno8niqVCDW5aWNVUtCNEhs9QGrMB7urjBUpSACwzvmysjkv6aJ",
  "key29": "3mW6GCqFuXnpsk8XCSR2Czii5Yv7cjhzkRANFPdjkUTEX9cU4V3jexCYHP4ubAXBi6mx9EGquEKvMqNN6ajuv2zo",
  "key30": "5BRFCwdaQhDXM6J7NdPFb5x4LW8BkmFS2Q9wm3ry8X1GPb8wZMtUgxcY9aoiPFrRhb1SXnpiihWtwP58u2FLfnWT",
  "key31": "NVjZHBusFCwpRmMFr36cQrCrnHoEZxxY1QsGU1iPb1e4eQspuEsQosjUnMxWZjHXBVSWNkvFCCNWaMYCFQ4ADSy",
  "key32": "3SHatwVHewZ6AWL29R62Lwcyrsm5xra8MJ9nELx16aU7eHsi2xJPhuVmnWay5487VjF5jjT9BtCHRAhfndj5JeQ2",
  "key33": "3w8TFZVCFPXcJhkTBVZYkwJPDSKnfqPViyxSNXyUgBZUAwNePpzavv72dARCjGuSmBk5t77SB8Zeus6QSrWH8FFw",
  "key34": "2V6hUs46Rd8qVAeRuxzE7rzaL5TPpGir7QN9S2jnL2AECJGns7CJMouCcPjzTEMXPoaRCTfFWX9ZazTFd9w14697",
  "key35": "576yttWcFCB8sspckevWjpSMs5WGU7XWGQF2XqmPDTQ21EG5tbFMvEpJKuoCo3UQkM6wwRSw87XvPyHZ1FRKSbCH",
  "key36": "5UvpfLsovM3nCVJVCeDAqnuQeUjY1fFcXfvkHGK6v2UmhwDUYKv7z7MGhdQPvWKFXMnoupzfo9h9Wamx9UeJokmN",
  "key37": "2dVWr2uytixxgUrdt9xHFb7H6yUMzE2PdiSqMu9ho7aDYq6BW1AtveDvnerJ2sym1ZqxaFatAseWpqkpGUzHTMgY",
  "key38": "64Ad5Z1ZsnavbdJkQbZPdif6LNxbiMLruVjePYhHpY5gKH3Cdy4Cs1bvszM8n8gwcMtDBzRamcsbgZFz7F1ttF2D",
  "key39": "5Rbbs7MSSu4m7gBShwzZLLD6KA32NRZMDr7LFLnimKna9TrSnQsi8mPWqLExdQNC6MWfrPwVTV9E7uMtna8FR2S4"
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
