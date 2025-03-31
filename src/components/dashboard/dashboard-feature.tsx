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
    "2iKHKkngcUcg91XrZyZvH3Xtj12TvjbQdJtVeab2fDkYeAa2N1JYjkQnmpAGrZ5GLzqkQCrCPLdVe8jcjMNh3ZZk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QxPmZdCdhTimBPQSwJAQvSMb9K6X8SeC94ywdxKNoczvyQsfekYko1FRKqjAfryz6ewAhx59WVfR6Peui75s1HZ",
  "key1": "2SAGPhxPFLe4u5qfv3zYjjFGVKvHnfqaS3QvMdEJySbTwoVnDsDerwruJsAeszEJvk8vNKenyCB5NSg1vuveLpZo",
  "key2": "5iCNfpXoAEL8AN4bu8aLo2Ssn6JxDwzT1RTvRt8hSqWqX1pd8fpLUi9SmjAoNhbJD6VEAe3bif5UCved4b6p5pHq",
  "key3": "s9CUnQnhWrWKAnbTAqonrSbGgmhWbB1F51o3rwWJ5irE8J4QfEYPG1x8wueMr8YbeW3aEGqfArbq7Kko9pqzDxR",
  "key4": "26aaATi2SEbfuGfgAExHBSCVqsmG1YvguwjzxscELoxPjK4Q6aReBtzHz9B9e7dSNPPF1CqWs8tCiwXXfvrAav1N",
  "key5": "5JVHuvhUT9kba8EhiRf45NxXWsTHt2G1ZzmgjsoRpwF6UwqXSBsbBkYBkyEx5BLXGvCGX5kCCMsz3ejMxqQzPjCN",
  "key6": "58hpj81GWMA8r9gzTS3XbEFztEWsuXdyESFVR9ip7WtPgk8TwSwZNDwHSvh9B8K4bGtMfoq76Q6wfHtTEzpd9EjC",
  "key7": "5edYce2NwxXa5imkhvuFunaxoZGDjepzzdupu71stS3oi3brYjCeZQ6Zt9ewYFrk5iZL9mtAfS7a58E99dQFfD2m",
  "key8": "JiJzYzbzXCpXpPtWs4DsvM5nrJjvvqmEJzEFYwWbQTyceWy7GhWmdbrB6yC31uSK3b49KK4aYjTPLkYDBP5PBZJ",
  "key9": "3SEFZhKifKP9v7XreXaFufrMh1wHi9fyeQvw4qDkofnxMBpEj1FBw9LWDvis7L7PoV6G3MANB8uRFsJNxQXTVkUy",
  "key10": "3VxkHCvqqDmbgvGGHin9gjSwoVfBF5nFniD2P5ZjDrRtLPZz5pdh9whUcN9MsLWPME29mWowsfwd3aNh6zmEV4t",
  "key11": "oG8om8kdqaQU3VnE1Egj9hZUgke5bPCpboKjWMTdroYAu3YkmA1XAEYoyVqWBJHFdMBaUz43yxmH2EGz7QTNELJ",
  "key12": "3Xd4HjMJePCoMEFfaa8Lj8rmG2Fk38nFZopJuPiHG5pmaYKHyEcBkpVfRqTNy6jSGCa2tapm9cpMke279mh7gwvt",
  "key13": "3QUGWtZyiggKjLLAyw3AHK2vL7kC4USn7ThPVFE3hFNgHgidRctYhm8R8aAtCjLMfnbxVUAVaM6xHJDVxFkiu4dA",
  "key14": "2DgFuTkwj4TFT5yKfgKKe1eSAjbcof6dnKaNkrUzbTa3ez3D3N6EHgmAisi9DE5TVSXDnjfzf4m3TPq5k1AMzJh5",
  "key15": "3GXUuF6gnmdxEJMNLECPNgYHVmmXnpm9brHY3aYzbjWywKGkdaWatUQv8kZqepqektpRoCCr6f9zK1rrGvQcJYVs",
  "key16": "4Zs8XsL29xAnto6D1XRXSPs28t8SPT5zqQ3y5SVb71ESAF7D59r3T2wJCa9dfMJgsTntSQEcGcHnktMQWzCLYUVy",
  "key17": "Cyd1v2WjN7EpZip4VYZVDRrub6ymLm1vjsjvVHdLXt4PDpRxKVq5tohqEoaxcWwFj2McuJ1onk6dLi8NNN7AerR",
  "key18": "2iQqx69WLiYawgxZYMdsxHF1udurgpFM3CwqfKEzJ4hR2qqq4YKi4P9KTaJJUqBc1Zn4Vo4DNCrJ8JZ1DopUV2ZT",
  "key19": "4ChXgPrHBLo6c2vzvHuiorMGLCqhX5H5BoDHxkeYw2dpc93gWq1FRzeSBUxycnzMp6spmqckgmihV2xf8Gft9tmD",
  "key20": "363vTZcz6VifcmYHZmHSFHNWziEERWp3zGS8GaqBU1x9D3Rsf4utPsKiZCnrqLKbgeKVBLZXp6g4NfhFH8nHt5DF",
  "key21": "2ghgKstqtobcBS2b76hphbJgGg8dAWfyXCiVfsk2ZpsvALr3XWtMUEEvQSK7dFqnXAH8VFcWpE7QGb9fCigAApBv",
  "key22": "5zRKV41ecenWkmPREreCw4CeYs1JVV2pk4p5ooGB3dNJAyxm4kdXGxcJFknDG3ASfa6Ho8PeLNdT5nScgdwbjH25",
  "key23": "LyZmQwMGjyZ6MMMh9qxDZybZAwH9LA9NQCPPy8ZqfsbdU7U1qW86EXrs8PWzeK5YzbQhkroc7uTqaNp9ichkUHY",
  "key24": "Zb84KjJqGQGRohBQdpNAj21vFa11PXYH7QJRKKEDAdU1Jf7toMuMZUuDHz6Z2taVeJXBpdDmKcDdSRgBCPQeA6q",
  "key25": "5PGsL83ettnWKg4auAPXSYiYyAKciCro8sgtDaFqPqHkFPVWW9eMS2S4PAGSVuiH9REA47UXKyAyjWHhZhY5Xoue",
  "key26": "3wb8SGcBdmDeD6yNJ3UzJKXxFK8LwPJbFaV6ijYQC4GhZ1Mo9QDmubvMFo2hFmdJoqNXHUGdkt8cnQ62SuqFaZZz",
  "key27": "4TbCUtSWVFvb95mfAnKoDphBvhsDPADfr5jdDvvUBjzqFcY4Bob6t1s7Ri9d77tjif3ksfuFWc5nQcywaGAYRaFW",
  "key28": "5iTLmVQ6pEwpoBsaNHCfxubmRRVDA9qKVMQXmk2EotpxKPxLiDPEQHv1d2FgdxwcHhpR7RwSSAakfGAF4KtuayTA",
  "key29": "2MYFqUk5myFvqRxVy1NEaT2gLbFE8jaBMmn6iEVbnrAn5mcuS67jR4Jp7tep2m2K3qdSYggm2sVQybHZJ8oUVSAn",
  "key30": "4TDtDNoi1nycB7RJSEGbghJz5Xg8uB8nrYupu2ZDyortXvqC6QTxzsQx5yTfkp4XeMrTsQeT7LdNYSeMHciiAUHy",
  "key31": "3cbmr92maehGDXuvMRGL1knScByXgcJWPypqPTsR1qbji6MUowMEzTCvJtD9RPw1cBe4hjkfix3tXnph5Z1DyXqf",
  "key32": "p6jwDatesajdK6Hc4oWkSu2DNCyrMtndarCgqK7UScMzZDoQZYiy5c3nG1XFhqiFfbKjCcADvvCVMZDSsNzA1NW",
  "key33": "62wzK3Dcv6Bz4GTXKt8Frv7SCuk6bXsfsqJ6rYecXtT85vwXxm7jBew7rgQwsBhYwBWgear58Aqx4y4xvqH77KbC",
  "key34": "4EpUkJRG8fZcouxxG2PDsfQWapWyubCVjnP5MquBEQjouxomJkZgiu64MDro99nZ3eGDYL6ovv5qvdSjAQBSnUy2",
  "key35": "2BJjV1N2tmnMoibeVCoD2tfsMQyDE6mhEaU9mFG4mvXt16CJB1nqZAz94JKu5XzekaLgzAt743L6xmxV4E491UAP",
  "key36": "5TRfPMX6YmEAi25qZL4bxZqyh2L2SQnCUP4A7hnJDKsbEk8mABGVu5HsQfFV5qUL12SQVUShF8tuYnpFDRpYv8Mi",
  "key37": "2LpCXsaa7RWyMrPeKyUdhDzV2Rkcjsup6yHKcNgQKnRnfFNcY4Dd21D8JnXeCC1mmfBSZDYh2QJGLmehVcAtLxpw",
  "key38": "2CbWexs35sBNVc6FEjhshLcf7jEGDYmfyQHN3t7cKfqbwXnHBsWUAFxUN39UHhjeK6t5FEduEuNVL4VHj3PvbwGJ",
  "key39": "5zRErk5w3gKtbQkfsbzhzK8U7ohXC5HQ9LkFx6wt574ceJvc64r1b9UTH1pxpxTWTuLUFaHNAgge2EfK2D9Vce4n",
  "key40": "w6szaoXPBnwNjXfXkovpCyzDdBshtCj7kF5Z5XQyNPux5ZG52EajyGDwoaFjj8jow1dnHnYSHH9aDAit66z9fWK",
  "key41": "55oBZGaGJvehqKpwBdU9qQG7QMWAM6vov6MDaPs5zwaDesDVudPtLyUAzKeC7QR72SwEP4GfPDgLsd4HF36YxgPi",
  "key42": "2pNPVDc91LNy8MyNyXbF7qgPQeCviCEBPYZSm43936XEiFFUXYKRtkW8dGwHJLWLzu2WMWzbT3fP6S5w7EHdEbsQ"
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
