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
    "2w6vxmK4v9ALUe672mHzG2MFBo6UJ9b7Mxy31Q7sbeNpsxK2oAZAKxDqHPGfUFSGKkr5MTzZmMNtUTDPA3aaPhgi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dNP6DsMdAw19RvQu2BU2EpnpbRixvBLenNxBto5yAttoDzEAwz1BST6ATKvmwLmoNVRgvfRuPfdPz9th5qGut3j",
  "key1": "4wzVbtS7ZNMa9ALk7NBJVBTXGyK4Rz1h7oLGg5FVau3aJxzCxJquFixpxXtkAXkpRtDGzgrTDwmfGNbxXFD7YZX",
  "key2": "fBgHL3gopWByEyaFuxHEfZgDYHHBgD61MDGAm6WYQLbjfBLpfQAoLw5bJGS3s2zgApEM8tMoVpcovVmELvWxYAz",
  "key3": "2ECe1a77RtN3pEUFFTjHAeKyCWavZvEhaqx3R7zmUNapgeYUBznrUNtRAzF4FP8bkcCXhkxe5KfxHTSh7DWpEqXT",
  "key4": "Rqmg8E6Gm7JwudruCvFK7JXidFns2a8aLPyZXyZTx7EHXDpXhkChXAtMkqMJZhfVtjAqtzSpAh8Jp1n61PVPe3M",
  "key5": "5iKsoKLBcSdGv3SZ5ScxV8EwN2n7WGo9TR4PUTNN3Wy2ze5C1UkunR8XLeatmDHc47s8tt2XtNeABwUBi5yrrGPd",
  "key6": "3pNu41QTde4TfrL8UdjhJq6EKLBYnjSRBbajHcWx2NKAELSo11SsPToTGXufQGT7TJtjyFPMJJZwgZVK1YM9UbBu",
  "key7": "2oxG7vxyQ4ZyLrFxPtagrmCP86PYg1gYNbbC1PQmpsPDGiBbFJbXesLoi4WRFezxKxVys2PQdqCWwYgSVP3GPDg",
  "key8": "4M4fN8mMciQNZm6xnuhor5VtbVMJgdXwFZ3su283oSgSYSKvCUkdjPVUcEjX8JCbr5hgtPu9r4pWcVVhLEFSmHJV",
  "key9": "2ZhRMn41M2UepYBf8Jg8XggjPxXvaXYvTsBRk9nU6raipq6dsAnKwXkEnWMt658pv6KbXkmwYYzKuB8t2r7ehSFP",
  "key10": "3MdftuZwC8rNfno55q5dBD42S4HHsgb57tWxRchMjzCQ9GVoYV9tqVDxkDvq3zxkR5N15txVA2Cviw53eWMXgsRa",
  "key11": "5eZnJpkNDBW5F3Jei8yDXiU7iDesKP2PhuZKhxSLejTWH3bAtLStqyFQN4AKvFmqvczf8m6MxFS7apZEtjsGkD3U",
  "key12": "uGxTrC41owZLfV8n7pEr2ugF9PtsyRb8odeTXkBndaxqEoEn7jWDp6xTKGcgcfyFoyMg6pvrFcUAWBxRpLimgLQ",
  "key13": "5UDokduuNZRYSFsinCy4rshgZ7csmXuwwwh3ShTgY9aqsckErAdqLKX4uL2MijSaBkpDtktZrBrmVALPdvy3Z7RJ",
  "key14": "2sAh28TsP6upnkCxKxqjJtSmJp6Qih1pnaDP59C7MjtfCGrnaL8EHoZMBaArWBVEa8MhWHCytFpCFsebADFpx33i",
  "key15": "55ubmdz61nA4xoj7vEFYjdhYARaEX3hD15ZK7K1W91X5ik6tNpsmKXkqwtbP47UuNqpuJCbVstgEPKssM1Qg8RbB",
  "key16": "v9aZEt1juJz1aSxX35eBGJ1rB4Yrctqc7xUZrHdf3jyXwjCmWY4oZM66UEMP5y6B9LikfRMGh1oGSTrAWdhHeAx",
  "key17": "5U8nGvGf97jhjYiNVQX9XCquEDCPboV6coVuQd8WRrHqVL1evKWbKhTY4Tu4wRoXXnN7Lcapanqrhr6GcFN62NJH",
  "key18": "4tPcCZFLUtgteiAt2CzrSdKi8AETMxzcWSuFegx96XaykdHf5rBgTungHZ3nEkCBZ9siqFb2fMLmnvq6D8LCc1iy",
  "key19": "5P6T6vZniAKNThUJpEr7eRnbkAhBGHoazF1Lyv1pdAkcUn5me15f2QJJfNVLLCCCneoFALPMTSvSLpEKkw9h7a7e",
  "key20": "2vAYjmFVeo4VgwrEw2QvC7WZgkrz5ZQSWT3VC5hS3YbgKs3AB6u6EkyDFrTr21ztuB53f9schpWFa4BE6veXVQEX",
  "key21": "33RPCLvuKzqHAhjgmgrpQkKme8YnMEHvYxrp3qk7FNs8mT3TR4AdN33oo1zjKms7KmHNjYDWH5cFGaXBBBiasGCT",
  "key22": "4EsUUj81DLnUkcToPXCbdq5fkp42TWgieasbgCRUUG7w46NX4RpvWbV8jnaSQVy7op6VVSBqJcDUHDStvwmNJN3d",
  "key23": "2Un1PX1wwL4aCcypv2crTbSAcFeD9QzDhXdmZUhPgsA2MMUcMYMiMUjxM5tnqzi7Nut16MWgmBjtvMErXdgdDidy",
  "key24": "5UGjhLg5J78MbbPrwKbEY1krq43tFcUWJ7MUhiLeYBgaE5JtUt9DksMw536NjuqpELX94YY6B26dzzyrGeERBYuB",
  "key25": "4AcUXYx1zsszYXSWgDeUcBwobURr8yJHeuEcMAW6fXXU4XEWPqyGBgGbqYViejuUh13Jc5r9qvu179PeNfHhCHMW",
  "key26": "4xjfJpsiv5QjArsAy9SUspVXbyi23YdJgdVgrHBVpvECEwM17g4sMnMcBD4UnUZSp8gf5UBuM9atUSChxH4kHvMJ",
  "key27": "CfdhHnhSGwyGkfFvYRKRVzSsjBoC5ijmLWeKSvFtoW5Amaexq8uGTvk67aP7ec7bRNG88qPvFPmtVVAFX45uFjp",
  "key28": "2pbPpk4dg7Tnebsjrm7kH48sdPdNj7K2pvBx2HAiiggWT3yAWrwcS9hDa4DYYBcqkL6t9BWZzAqqeyswizV1xfY3",
  "key29": "3gJVu25AfexskwTEBhBSTvXF9yrGTDuqdQ9b8zaBs2JJuxzPnGLrdMgP2HYaTCT5FHupJdZx1YxBiDCsB1Hg9dZc",
  "key30": "3Qxw6DzNAQ6R4ptSBq1eqgYhtG9Gt5aDb6wUKNt9iUNmVWTNHRtVqMa74YUvuAamLhc7aaBQZMdE2Lo6ShjVnYvf",
  "key31": "2SNq5fZwEBAMBCP9BQPipRnmAV86HKx9zizaqRrCKuDsamgnUqfoWE2GsDs6Jat94MtPTnDRbNZ9WAQYz9Yh6yWk",
  "key32": "2ujWR6z9iuwSxhtorvPC7jvRwwUj2UxG2AHY2Jy25xWn6M9ZmmeCRBa4wC5xFVYJvbz1DLH4yXQzKjMHH72YMPWp",
  "key33": "Tmu3X3T6ehQNvFnkJS75Z4orATptsD9gPpyekC4P3MKoXjqqAGgHrZ7D99HqBbexV1r3ivxHPJa8XE1gV6o4S9A",
  "key34": "eGbtZ4kU4BeJAgUoY9fC4JcTpeUPGGjNQfMGkhMELdQVxJyT2xqFck4QWzP85dfRWRBc47AWMtKPos8vKwHyTTX",
  "key35": "5k5WtV2YAZomKYnewcoMwtgjTctFwgWNheARwbWfNqAdyeEiUZpi3q5tmKLnsHg8pLCe5uKwMTifGSzvWYii6MgE",
  "key36": "3gpVMy7m89c4t6FvLiifZQZxoxuXw2RrS9oTTTEQxcaYziDLweYMLVAjDsE4E2YMNJcXpvBJbuzhj9s9ESmgSgQv",
  "key37": "2t9e5rAx9VpDMP4btgjCVBbUzPG5Pgi7V8fB7SWtTnV2Ahuqw9rx8hNo5D8asxjMhUMR7BE3hAg19W312W8a75uv"
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
