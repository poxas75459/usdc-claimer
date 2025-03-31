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
    "2R68QvfpwMytJtDgcuFV6TyZHT2Ds6NVZPVQAm3QTDAuRJqzcbdo9AzQQXVoTMWr4BLvhN43o8fExjNGoKTPemnQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xFZSBwdWfp6PJACSaudmfEmjAWf5F9R3o35w5nZ2vDHjVXUPiun6FEev2evLhHnDzHu6ZExTqjBfTBdy3Tf9vVQ",
  "key1": "5YfGEdE5bmJnGKBMsdMvhNSd32vrpd9zqq67wbERzQDqqHC1UVbNophHveh9MMiZg5dzvWBKUvTbkoH1UaGUaiRp",
  "key2": "3GuP3JwS4R8MHUmTG3ybJGB7gFgoavN6pJLokUEc2jsCMaUSKTSFhaYndmyw2Fh3qUFWxdwHAJQam8pbZgFZUwMv",
  "key3": "36h6FtVfgVLnRkJmoiay4NkdvxLTre2BDK29L3Ntzzr5fWmwrG9nrDNX62HBBgurnXhj6yWziZ6CuWMnrLVWGt6e",
  "key4": "KN8Acf99DzDBY5g7XtjJZEf7SauwMWoANvrpidThkVGDk1i7rPbpx95ByNCoMV9CRknYAZcdoBMmSh4BqMXC3Zb",
  "key5": "3L6CNSE53JC8ReAGSaVPdWt1VXhtQscinLCJdWJYQijs8hrrRhk4U1vDaYLPz1FSjjsPd4GN1Zob41d3U5crgnmL",
  "key6": "5m2xJWfg7ZNzA9AzKUF1u8qV67TofDFqExJnxPYxzEwhaBLRXPVav35b7fVyWC8qBrkXie46iEajm3sJY9RAt8uv",
  "key7": "4BTFJruq3YLqtvHvGzKLSxLGe7F3dQRdh4ZvKzbXUmaaz5Utfrht1kfwJEuaVx8Tmo3aE8RVjfXJ8RrR7CVAvvAg",
  "key8": "3ZNVujD4Xyvau5s2cEkBL5XnaKxJVzEPvSeSSZRtpDpWM7f4DN2zVx6LwSNWqTUjqayhZM6wfLyHZyoqGB4t1Tos",
  "key9": "3zTKynvQmszhbVqvy6Ry2GRquBg14wgEYpbUEyqEsQz67UCpjoyEE5oYtMzfJGSXWEarMkxL47yT7dt6MVZb9P6b",
  "key10": "25sKsERenZAD2csziKQ7GjZzGn6CVtF6u71gvpu4U38sdRZruHPz7A3zQ21FBiR4jdoqVPi7kwn8J3yUJ6K68m8P",
  "key11": "CzNdX86fte8wwA6YZFyAiwZyH3pgX8TbnGVxC6boFBu97BXZzT3fjip5g41M1g4DbvEAbfHYiedEcd6ytjeyvsb",
  "key12": "2rsqFEiTW4hRupNdE5bixBuRkuJrc5X217YKxyYm3J5LsAySSPxsWxTqYjLn49o8RUC4FyWSDBywEytEVJEPV26i",
  "key13": "53Z9jzBfupcHg8Q9Qp9T4DxzGC7KsHLeEyXjupcSFE15VR3yoYVzMFpdqTDdFGAvXPhM7ZUZRFUZakMUYZzJsQfN",
  "key14": "Hi8DkMozhQ6gtaEmcDfFsHDehXFn1TfX9edPjQL1GQdEQxPDoDcMSrcbcvs9FMD7vnEJF6aiEYLWshAmSk7QnBQ",
  "key15": "5uB1n7iaJx5yXmbKJ8XtP3bqNQC4oJBebgFVBdtYcCupJGTZ5r2sPYf5ChbmrDLjzM1pNcuPobnnvfP5krdgA2U9",
  "key16": "41aVEWANYGjSqCJ5pLtJjBLQpoxVg8dSpX939SnTqjR8aWtdmmFqGNQyhmGZ4itGzKNAB1eZa7wp3qWPRhd2qN3m",
  "key17": "2esQUP4e3JLSAB9zwPmKWwXoFMuLAqkk6sNAeWJWxhnpLRwSNdQRFmhG7tG9ip9pMh8X8AvwZXuzPy7Qru9RKbsb",
  "key18": "48enZM5wY1KgEeXGrEs6ZS2fSH8FKNgLgoyE9ehDTipr3i61LW6hpd3PYi7AU7zvvmY2qrw3BTmkjMHBmLUtA373",
  "key19": "3PdsMCLx146zjsszAbjtLAbenuJeKuNqNwkgt8Yajj3xdQBeKvsEeGmJ4nULsVqKDq1mpe5hAMg48GmETazLKTxF",
  "key20": "2VUPmtWSd8BNGaDznQztkoAkZoWMQ2bjAcgLaV8DA1QQ56oq1CbffSp6uZfYdUWga9vv2AWvTz2m1a9vEe3Ep6ts",
  "key21": "2N5wDTKu68J56JFRLs9zqXvNwhsXjRA5dsgdkhNzoDfUXfVXCAuchjj1fbx2T5LZzNzWVSLf1D5k7J13MUWypXDp",
  "key22": "4HtK9ceTEwkqSVsxbn92YoEFUbPxTzrzcRupBFzzh5vdxHXUNw3wwRahz1oU35go4o7sXHZWm7gQBHLpyGxvE3nm",
  "key23": "3Wey4MUCrsVpSk2AqPmSvn68LLGRgrdinpnpdLdeBMaekqkqhLUpJrqrTK2o25TRuDWjjsYcTxCcwRRqPvrTKZbd",
  "key24": "i4FUkcEd7rW3jY5C2CVtEbQJBthyHUdWv1JykSga5xoJ9nEievPFvtoJCgyAVVz4CbrdsAmRvpRDokT9HSMSszM",
  "key25": "36HMez8Be8g6hySUWMBtGGhFLTrdeoJ3azXzUqXMDfg8sam8Uz124iHnPvzFKRT3BsJp7tMTnbugkBrwE2KnNagi",
  "key26": "5AWk6wnV8xejxZ9iUVVVtcaauRgTrKKvY5v8mjfcoqh9U5UMfp6WYXB4NdsVvhgyLLqfLHEEATdzW6AnXtLpvYrj",
  "key27": "39yGDcNyCLFAk6Bdao8pCMbUpZbc8LvrPjXZgL8UKsNAeqpPm3ZFCxLjWz6SvWHKBG1dKg6mH83XsXfWux2rPVGx",
  "key28": "4PgwpyXyTmffryMwXfhciLikq89nc4p2dgEvmZT3w11Jgr3gefWW1F1Qjjta8d8w7okkSUZ7p4jPp7HXAFzU4QFD",
  "key29": "54ocGmzBYBBDrwu6N8hwbT34N3iSZXHufkRUfP9Neda6Hq3tj6fo4i7afz5zK8BJEHVc4uR2yAq7uBqqU3NCJGmA",
  "key30": "QZ5E4PBbt2aDxRSjDWkLZrvDAk8qhTrDagDiFvUGHXPBbCQ5cz9B3HqLso8ZZsrq18honpHvYWfGqn2HtJpURyG",
  "key31": "5seBS14TotDMsjnzgXx8A5bRZ17hfbvUZkVUbnMJ8hFcgnYMKuRHQCHGxXLfkbdXU3UZy3owKP6wLLxRnJbZ7jUb",
  "key32": "3dH1gReeYyMMckqKgeG39GErqftz1KME9YAb8rqCiesXe9hrDgzeZuWvzYfbF2HgMpqHTKgJqrmpNKprmwKCo3Bp",
  "key33": "hTrbj8sjPRXN55ndp3fe8zpntCgRk5VuoQeEdjwdaNk82L2P66nNssYZSn4SAw5BdxHoweZPhF1CtsrPBCTUUHm",
  "key34": "3PsSJFiSvdFrWRM5Xpa4tnnCuuZsYESVad7LBrMMF8Kg8g3Xv4jiZeUzCTofEgsWcoizKcrXCDNbeo1a8k1fjqvn",
  "key35": "3VC1zC4SrdWDqT4cLk1349E5gz9C45FhUs8i5hByC3MEqWyzf4R8pmUB6TTdyi9Ntt9924P8ijXCKWhVWmcJaMW5",
  "key36": "56YygodAWgBgHhkjG4t5oXPF2s6kVVSAL8i3e8KMgwhvJdTFcuCLYg6gDR7niubveTiTdyyVHfaEknHAyUpWmNei",
  "key37": "56rtS8s4E87Lmv7XtD9G27oFswUqL56xveXM1KJBL3AUsJCV2qhCbW3A5aw1SVdsg1AMAEXMVGrciscKevHD91gB",
  "key38": "5RxgHSHZVPGUxHQxGymBiy2zNS641mbGnXC1UNTXVQoyt32y553DcNDUie9zbnnGAwHPmadyf3SVDZvGYQoz1LxK",
  "key39": "2CM1utUZzF2sctMHmduKcWMgt7p3HWobqV77W7CcMxEKNTu5x58CjYxCezCkHTQcCc4VHdc9CT7Nmg5DJnRNyZ21",
  "key40": "2UCtyskmQJWBoLRfTkoGXRS6ijeEpXVRJzDzfV12K3ayn7YF3vUTmZp8JXitVt6JX1cREHZfFvnwbWgSRABztYqQ",
  "key41": "3ZfsRBPLb4gUg3SapbqqeX129E7kSCdcgpxKGAUKgwU1bdNJnDiwxjK8cSdqsGtaprCXanN1R6Zqt6SzPqfuq7C7",
  "key42": "57Wq9QQcYc8m6i5uxKBF9ZJAwnJRJ8KHye3tsNB6khZyCDQU5aaPNo2ruZzq4EGKfKnggEXXqoAgH8wW5hZKxuxF",
  "key43": "5qettv18WgFv3pgNm6fwnRu4f2qh3v3KNKqyJDQthU16x17KD6crjV84c74Gp1FKoi1e3gA1az5VSCABWyGM1624",
  "key44": "4QoA8cYrGq7KXPGdxgAC1Vmfxs9ryfrBfhtg4ZcLoKE8EnQKYUZy2ifiBTprrb2XAFFrCSPPhBsW1qfNshfeivJe",
  "key45": "4aiiS1iRfSXqSWaQ2tqZAFYxiusByJpeUY9NG6JWWg6J8YHoUWie39PtXdgSYdCxBZP83MG2cVqGiyyTgKs3LPK7",
  "key46": "2xcvgXmcxu2nFHnViCH2rBrpbAgHRRqDs7THPjdu4yx4STHfpAQr1KXCgFNvvZPaQFy6FwZHyBoYNKMjxm6wW3k5"
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
