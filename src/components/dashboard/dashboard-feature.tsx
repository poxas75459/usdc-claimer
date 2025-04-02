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
    "4YRfLpzLw1qJeFRV3pVGCnLuA5T87V5azdwBb8Tvt78tS7XLaRaSGvM9anGETZN9AyGNC6cxXXRW2B92SMgi9Ary"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HGMAf8ntUdne4BG84NNfEA3xmMbGfS3yHgTG1TYToTu9f9YF4K6J2TSaCMjxVRhW24JNTDZ4zFeP9kuZ9Hoq61n",
  "key1": "4cNqr7D7ybD84YFbUVd8a2u7PaVw5AWSxH95RTpv2sJ7qNhoDSkeBJptRDtc2GrHknA8BANi6YkftMg3mngY22Co",
  "key2": "ji7tFq8HiUtRYgEkWpzuApgsgcQFrFM5QEnpL1JoxH2TrJ5j2Acmajct2iyPBSkMbeLtW89fZrrJCU52Tr5Z64B",
  "key3": "5sRcWFC6XWSULv7WhwDpdqRRho5B6b2ZaYRqcYYkgWbvkLnvEoFuoR3kHzh84m34eChZY2a9Ssss6vJSN9gqdmC9",
  "key4": "5h8bT5Y3qyhKcUAFbvRFmt1SYf19vv6dTKzJseLpEpqxn7CQ1JJuruApJJESUrTqJSMQpBqhNeEQ9yuiW8ZfiKEY",
  "key5": "4WJb46Fj9MaWgvKfbBChTLbhV5ba9gjiNkvU786UMXsNzatq8pRQvfgMjBcxBbEmhgfKfNTShQEvjhjZtHV67i5q",
  "key6": "4FcrwDngVWqdP9YAfuSrtm4Xvx6YRB1sLpjcQDemt7duxAwFEoQQ4JRtiQ48p5wsvGzthuzt94BKvwjmZSmkgb2f",
  "key7": "5XbkX6je9TfXGTM54rTewKmQumnyMDeF7sjDtasAmWjVveV6ATFauXCa84D2eCCncRwWdxmAFJxxDLSPmdUoipd5",
  "key8": "k8KG9oJ3oDL3spYnDKkBwMe3Xf7cmDJzVSYxHT8udPeWLyizdsQUygbVW8NRs6QvvXtcbiPfbkVyq5WK6DTux2y",
  "key9": "3bEZHs5G4HUfENZHwSbPfzEdrnZjXYLqG2KG1dATNjA2xGnnG6cUUZnEHT5MkWDgAQKgtVwPwyNgMwyWrAKLfDqp",
  "key10": "3yBtTdg757a2Ko3hjvqNkwfQgfZkaJNKm4ukc5GBaeZKYp9pwrWv2iDqkkpXecgWMcsB5ug2MkQc7utLT9tdrC48",
  "key11": "5JDsDp8edHLgDeTmomA4rJqVbLUtWaVyfztpjSSfhnBpQojNoi9Z9fbki9X4oMkrsnBZjmdcw68qRfi3dU13u7SZ",
  "key12": "2ex8iBGzMZwoxPayz5YADi25PXiLy52i2fjf9y9VCFF5uF7bv9b8kjEiMrVz7NjTq7VURRYxb5CnGzdAZ5UwAKYf",
  "key13": "2HcwDqiBHTGSYFpVQE2pv2r6jamQRddPTdnc344h8fbsdUUySne17H7jbPETik7PQ9fsy9NCDvwjRPQZTZHXH78K",
  "key14": "5MgBfNeT8DrHwRxXuh51pXVEttLqmepB69sGgMjRrP7YyZxAhoKqLJZkuzM52u5TeyypKzPSe2GeakUuvMQasaQ5",
  "key15": "4BoR35zQr7UVQMMt5wsfJopnpnzm9XvJvgtAcYF56LY54TdgkmQdPcNGaZzYjoTkD1au5MkKngcRwitabevEntqH",
  "key16": "3rWeHDN58e2vBQngeYSAvCnPheLLyS7AADS4cP3JpjtmyomgnEZcpssUq5CNUwoiFL4ZJ8qMZ1BUazTcNFVAB4Cq",
  "key17": "45qLfeveCzwuyyzWV7xcNUVmmkv4hMZiyx9zXPU4JUfscizoDTbgBDjFMsAWtDANHbc8xPaRRDdAnGJCyVa4mDWe",
  "key18": "5jiWzhSWLHVhycZ3uakjS5aD1NJUZo43BWFP558HdwVW9r2PMbcw8QbsuZ9UNstoa2Lt6pVBPAP5fhSf9YEk4nhB",
  "key19": "UpCnpjdYYJ3wdADVUYz554eGXg5cCnzAKKApsoWgnKXe6YCBuQ4j2VG7CthH22r6HzE3PVTvDW3JMKzKWpKRVLU",
  "key20": "3wUjnkASvgMYybSad9cGTnPb5TNPtbFMe29B4Ve9mjAeBdmdb6zfTQtq63QRuhyDm83s93T72vpEpxd5AHDnU2mP",
  "key21": "2dVqYCVkfn9w1j7AD1f4FPiHB1VsdfqpYiBgjwvRY9RcR2fswSpyE4Evo8oWwmjtye5UgdxVtyzFUuExz68PEvky",
  "key22": "5E2srsqj8t4shE6buPeaCnBJdb14p3vFBn5RH7bok8Xv5yKNWJmwJYtZk2gLCkiifuSg1rETnrK5zzpHFv9X9yYw",
  "key23": "U6vhxK2aNzSguBMUECKMU18x93TWgasGB6hgBVZDAiK5fbdd1RPMvvPGE2uP26Sn6rLDEQmJCkcMvEBgpNANDmg",
  "key24": "VtTbD5hLZ8iXyBdnn5FSgivxWyJ2ayx6hR9VVn22ZmSdVU2gxGoYD9vUJkN6cpTEhJPDQSPCrLrxQ6grrizAztS",
  "key25": "4h7rh2deeG1rz5eEuJHkssxaz2gGP7BmTHRYuoun7UipqsSF2nvFNq2sr6eFzAbaYGaihLE3VYC86FKBzk7CEH9y",
  "key26": "SsqgS9Z21XLADqe6XbxnDjtPh1bdguBGyTRWX5CqPxZ5tFYHZCEJRbQa1RSv1gk4a13JBM3pFyy9gPLJurrji6v",
  "key27": "2XLuj7rEcA7bhDufuLQ14MpJVJ5Evh15gvCZMAPzkbwwNFRZ9AZLe6ZAmdm3W55XxuhNKcNkMTgnkDjz9Ag74aVs",
  "key28": "g9kDNSpgeF5d2RP7Wg71a4btF2i8sBahTiQXLp5xkKsdiuBHcg8BrMHvY8jpnpSDwoQNACLGCa3FcLFqfLEMW8u",
  "key29": "3E2qfVAgC2j8ChDmRdNpF4CTwSWRbXV919KJG1n49KJfT3bcRoU81L1mMVf6JJCRXmusjWJU1tqpLHDXigjpyMRe",
  "key30": "5np3znA4gEzi9Wi6JvYMqUt4DKUBnd2qU767JStNseRv2rhzndD2rgDbKinQQxLNsMS6FiANoFtzUGFJ5xiDer3H",
  "key31": "4jUARq8ncuM8zU6GvYyAQAJZeh5KJ5Z44UMZxb7M36XDXJndKeVcqZgyJdQkdg2H3Bhx7bLw8kLpahv66QXH2qLp",
  "key32": "3E4ebp2FoS3s7VYAHir73PkV3ftnm77MVxqBmbtFX3aPTtF9JwQBjVrTDWwvsoCibp8gYyYKmFE4bqViHxosRqBq",
  "key33": "4YRfDkvXkK5vxsLimx7tKvYQnP1xNrzq14U4bahei8bHZV7CVZbd7HD3gMHvbx6UXSspFjdMDnfVW3Wtpif4aXW2",
  "key34": "2JsqhGizeL8LBUpjDDaxkC2g1L7gSU4ndzcoRzBS3phjD3fcvRamyo9oAprXspr4o8HfkCZAduXVokoTzbJH9LEa",
  "key35": "5FcneeSDSUxS8ywgnPGi4fdVYGBjTZDrL3Wm6qhnCLr7ykuEaxpLBYKJVD2BEuMTyENq7otNTTNAp2GrJE4ccTxF",
  "key36": "58B4DmWi2aaHMhQGrH23ho9ipUa99BDvsvzUV4R8hNxGgZcLzRyQBdBgS3XuJdS5vQtGEidwm99UGWLRD6CURsu7",
  "key37": "gFQKyR9Hb3GrSyyVZ3HreVvBeyiwNykS82bWNWkZRhi1zV7Co3AyySuFqvPEE5YGqgYZiK1W3M8jTawt52tXiu9",
  "key38": "wD1VVnpCpYmQAmpaw6EpYNyriURiE9KiqzAq6nwwmrCS2DwPtXwRKsKPFeUzLQyFzwBjxrPDRV21pY1yvk4RGUB",
  "key39": "38bQtBQHYrwv3az8Zds63HpLc6B7hmCpMi7v9vrzafmnYwtkMyhn5wKNHwSfEa4ZmvNc11jad7WYKp9jbxRPYNTC",
  "key40": "2Er9RJooDJCDFMBLvEJC9zKzrS2TcRwHSxzWQKoKXKw7KEpFU7Pq85da88wQZkWqNkorrvrZdhF278a6zGtN5Xib",
  "key41": "36bAQUD29jfNwXey4Qu1XNNada8gBjNutLzFMzNqUNLziwp34rTsdEE2soJaSFgn2UugytsXfdFBctD3UQDP7vf1",
  "key42": "U35vo2Bm3LBVFetD7Jbmpu5Wkp4AJHomVXZTY4XHZDpX1BTnAM2f26YBv83hxoRvtPEjZgissbNknSdubzhFRBy",
  "key43": "2VvNZFApC18Gz9xVLY5KYoaDPd8SpUQN2vG9eRshhqT1KALFt1zmRkFqyNiRDitLNJiqntN48xaHW8huXgF1NzDh"
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
