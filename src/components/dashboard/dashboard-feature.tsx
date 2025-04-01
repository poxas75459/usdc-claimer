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
    "uaqHQndLJxK2q93cQnjaGsfztcFdh6Gh4GBehAvcSawcat6YzLFQ3PmYREsQ4YMHy37rR59aucbCQD1q6pfPs3G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nGf6RSK2V7x7U3EHXskvecq1epzw9F9TYEpDJcG7ZqYKbsK1P2qiGF5mRzyCgcfEWWHi8FAkn7oeCVjUigZQQK2",
  "key1": "JhcXwx5oBc8sKXtGbcgowGuSLEXyStTJrVzKKC2K25BvjoG7uu5yWKcBWLsJuidjcdN3WqqpF98CmFsxYvnToDq",
  "key2": "2Ah1pMX5A2ae265DbFiNoWW8f79obVfFeh4PCeQBo2JFCs8pCBGTJg8Rr7oS17wExKBTZgnxGW7nWwYjkf3LYf74",
  "key3": "42etZyCLpgWbLVyvGKRGC1riSP7knJkQVfZPt1PbaBCysvrQ2hQ9wRfVZPJnLk2J5dzagt3Sea3Gvcd1U1aptmZJ",
  "key4": "2yMdhnF9Z3H4vmEu6wbaytDQhDP3muUGaRUvggDh7Tpurm333V9ky8iyVx7EvJvrNjjtFdkBuxdEZg7amTpTUknA",
  "key5": "37HU2fKnzqnz7hhPAZTfCegAe9ks2pWn1LMynCYGMtFBTPMJBhfzLHcM73ZfundGCQfeCNNxs6Em76fn3qZcQu1w",
  "key6": "5iGEJyWgftG6pjGwXW7j9kUU2ob34YvKeKaupeLV2kR794CUVPpHmrxdmvWJiMaour4wDYuXHKkZ3g23baNddp1J",
  "key7": "4g96iUrieDUrXYAVyt4cT3kqcFE8bYzZGiUu4xAX6UAak6PKdGq6RwRjzv2Ttb94fGAx9sUQUg8QbHeATLXsNviK",
  "key8": "iHjoHoecWH2Dm26DQDBWSYa4PZSaDMqxxk7MTrE72VEYQf7kNeHZASzLCwdtUwVWp2QcqMgq6ysGmVzkEB5kagd",
  "key9": "2Bm4Ca9MRBdfHoj7xs5Fttmno8D9ry6ogFF83mjZoZxHSW8VmCwr4VYynkidJh1xhqW9GUZV1tje1DnVjqTGzvNS",
  "key10": "2LXTGeF2XgYSMcPop8MxSRRSF2JzzaL2ReCvbNMMw5TfjWKG7pTsYp5nz75w3LrESZtDkvF6NqCzrzzxxTVHb6Xi",
  "key11": "2gbPkxf25FvKckyWiMaTsQkbWYajJ5chEQiNSQp7wgZ8xygPGA1bxNZtEGo41oXcD9vx2QQymMdbpZfdBjPKpyoM",
  "key12": "56vnDJVe1UoMNK1T8xR6ufgmdiwQDxe9JnH1h1DkxSZhYZ2AHg82HmtmBUS9Cgy3dJSLuCwkRZ5hARfvNXqfmUNd",
  "key13": "AnFpeYJ4sb3dG9tkUSLNfjyR71cGLWMdok1WiECffFqMaShzwgC3Bzv4Linox4rRf6cDpNr7otGqZBjLwH7UBcX",
  "key14": "5CjXryYhJAYSE2FSSRjHeN2hVHVchuLu4hEqHhNEQhabLmCVveAX3XhZTgpWA4SAhQZUf8zXqzHMCUPAucEdxFCk",
  "key15": "3VQ4YMdFNYdCLV1SAHJh7vL6shEARJ1ogYdZ1hRpsEqefk7kuu7hNhwzWKThacNmoXT9szzb1JrekRxojtcbebfi",
  "key16": "2FQYe2PYAJVtZhVhSfnmPp9mNW29yvyvZCNTSBfN7Zf3WPJ7v9Fa7H9jsj2oSKGsvYL7MdBcUFhinABfPLo4dCU5",
  "key17": "3gKdD36AiMvw1UZEJv54rEL63uvCKZ3BEHZ7rSxyey69t8qidHvrX2w3pD6fs9mJATuPbYgzxLix1ppAJMmv3iDd",
  "key18": "3ybLwFLp7BJRyWDpc1SJCjAH1aGBLh2T2DcSuUM2QBr2W3occ9AdXNw4TKFRHUBgPWg2NtXNDc5jRv6xkj3XPiUV",
  "key19": "fVfkbCznUKRmmbexW5Q99dvuC6FYLiCoPfcRt7et7aKJjcvdsvg2TGNJz9Xo2L3uBJPBoyvkRuGLN5PpKoyi5jm",
  "key20": "5dV6B1erNbMqHtJiX88F7PwUx8hxXxGWE543ppQnBCA8sAfUmxmuK7vqQXyXkVWyFa7KyMAtqDx2FXMZsdbXS5VR",
  "key21": "5D6CcSLyMcMfoWWYKfgYFq7HWuUb622Z4tL5ecoW5u4BgCvNBVCrAdyoKudC5xefzCktiwVR1oP91phE7AYfuF7",
  "key22": "55yupaQfXTr6VdMUbYKH5RgmYRhP6RyjmbFhz7z1Ntf8u1M64BNvpFfJEPFoCMbUpW3bD6mdWDk68sDe4wNKqUgC",
  "key23": "uinXRNvDMbU3eiovciCJASFAKzhyFvCzwATXFfHNQD221xT7Qu9YAHkn6zHjU63i7Q5UBcUeUn54gFpen4aouFv",
  "key24": "3LdTbzt6t6eJoHRzW7x541qD7wkosYcNZT5v5UvfY2G4wqo7yhkrseX8YQrbcQCdNwqHvKRWJmpQUQtRFU1G9fXm",
  "key25": "43JqjSXDem3es1AZe9fiQYefQeRTrTuBVA2NDyxkhfn3uCY42tgz4U9HKnSZ8C4YYsTm1C9BrpaBwzUYuCkZ6hsv",
  "key26": "3uKF6vT7tB8R6uuNWEX8tjW43CJkZufJGURSDnaVwFxPUfFXNTWaXP8LAoKma9PU1NxcqjWbNatU7BawadBzHu4x",
  "key27": "2pYQVBR4vGtx1zkJsa8QN4R96VDKamRDZPa2jyo9fcLtiPWfxRvQJCGHPVxTof9qpC4MWiQY4qBZCBUBb2ACe127",
  "key28": "4ja5u3WXDzqmzpTi9wk9fPgkfzbs5CmPU8FxtGQntj2UJZhTDqoebyXTnkayNr8D8Y8jkVq3Ca2U9jvG6rfPYvYn",
  "key29": "3imNefPNVkkUYMSp3K9xQvXshAimuKQftXb48sxiQb7abVTJ4ohn4x8nKgJ4ydHNoMU8c8nAXPEiDLUoCwPtSoW7",
  "key30": "5acM3FqGxSNKcDYjfG6biRv5Yo2hkzciimpFgiWMFUNki1h7Gu1rJXU6KyJLdYfGwa2q2TdDe1ZgR3fBPmj4ih6x",
  "key31": "4K4qfVswXW2AJSwE9yLAw3imgycHfQqX8mSfJgMkKD6gbmDzwWQ6QVKTaZRxLx7pKAJvmNYHZt69JXZFfhjNYWbh",
  "key32": "29fmrysmZpEpviFCxk8oM133cbUBTGR9upCtBfSDemwHNAL3wCPfN1JTy9X7tBJDNBUxF46kfCvySkdXg9zyRvAW",
  "key33": "671VVGzpMGRNKUu8MUwxkP96wJo7waAjMqHt32SpKeuTovXKpcXFEa6xzKqh3DVExQWdc7DdviTACQX7eq4NnzL4",
  "key34": "5Jt3nVwb8n8Kvg54BrEfsQAoaNzSufb11CUuooWWxDCuWwcJLpipckep95kwVfSmMUHwNAnUoC5TXoU9wnaVgfkK",
  "key35": "3L7TNgohQqNkA5nsXvLtXtUsQcipfB3EWXkPP5qKh4xi36nVDyKm6q2iToEKWQyejn1s3wcS87yZoCzHMHBRT51e",
  "key36": "5wSXvnJfQT7HiKLz8jyqUZfEZJRbY8GQ2yBxdZLUrD3QASzDVETc2YCEvACKGVDtbeXpVX6h6ZZygArrTD7v2sX9",
  "key37": "3tHGJ124KBE3Qurifa3kBvSbcBm3JStqSAkqqsEdibxA5fF1rwf2Qu7Dc2G2u9gSQy2dLi2696XbvkpCZQwe1zpY",
  "key38": "4pP163CVm5NFRSVh9siYSARHMUnpdQGkx91UgjZsoz16Jq14QhwwRSotWDc2tRmdRUvPAozgaaErWrY4fkLBaZaK",
  "key39": "4RfqUjCCKx3sUzVzW3AetSnUJUByMfuCQniTSUNjDfKvoNY7t5Xs2P6GPun27u6VxYXvxD4xrZNrmWDVvbqxeAsa",
  "key40": "56LNrXgB6jVYzeCJTzxT972NcNdiU4mFcA7N7Bz9S7cFbJfovKBQReL5oDfGhBQ47kedujPfZUjNCnJ17ePu7xr",
  "key41": "BVUnGxQuDXcapFYGfefTgNURJ2P2G8e61RsvMZtzw3vifmmrrGQKkyoFDeu74NbQo2qBxPRceRzSAq4epx9XfdC"
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
