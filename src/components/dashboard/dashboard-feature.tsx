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
    "2K2mCnsm92E9VzVfzpivnfkM7U1FcpmXoDc1r7MXCm5FzJjvTdHARbj3DuCRxuxSUW5RRGy5EA9kUm1D1UR3Mhun"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HwRVYZDVSNVV1CVJgTqDLpjbcsp6AdgdU7C1GzrwQkC7Qd578GQ8bg8EdYskzr22bNn7YHbZJR8Na1bv4f2acRp",
  "key1": "2pJ7hVvnCG42aH7tqr5NxenoLuJZ9V2nCUvd1NBNwpFp1qJSWwbcYrJsgUUT2rN3Aq7gcNGDcLawNjAsmFfJLEVR",
  "key2": "2GdvAhPRKXGAfMyXqJhEi4EtE7LZGqhWGLwmVW4HJAVmeRnbota7Bu1KB7iFsDqt81ctBUnT6SX87N188KTpyJko",
  "key3": "2CRGrCVd8zjzw5tQC3jGKXGDm6yvzYj6HhyyVg4Yf5RmfX7fVw7my75GQ2J73bi1tSczTCQXqifbpmFAXc4NzWFU",
  "key4": "5mVX5fpEiKG8995HPRhMPVchZmibUvoNb5utgSDRbnWdxJQWS6H9tsnjjd5o1hm2MfCWtUfxY1uSk5XSmkvEQGZq",
  "key5": "4U8MJzCfSEvngzzCsd52Z2FkwVS39n3nDVnXpZ9arE3Q8EHwZhoNjrTMgZEzjQqe1AJzZNK5whRYkh1JSRiqNXU",
  "key6": "2FrPLgauqCQCsVJ5A2Wmsd6QDkvAgsLtT52MjsJtbtFFnj3xvrXUNhnC9qStmsWsDMkkkbpwGzKJtjbBCxmQhZwB",
  "key7": "2cPK7bApm5d5gQnYvnp3QmqdNSgRTFHW3BCQNLMukoRzKHtiwA4MPTWRTsGsUFjkkVFC2fc5Hj4rCzb4TwH52uRj",
  "key8": "45Cev739USqH7maQzRYGkEjgajUCJ8TtgdmoSzDSzWNdnAkfxfHuz1WxXtpiyonEm26cmV4o59ZpUvBUXqbWvWa9",
  "key9": "3PYTvd2gfbgd5BYDr5r5DBs9o5TnfVvGpC1Q3TZSV1QKpVMjSTNA89QXsTrKbmQcK4Waa23ww32fZvYyAJiQW4oa",
  "key10": "5hsscqfH9PThH3PP6M27kDB8Rwjc6nsMc7ji3sXNdDzxNNXKHY7eS4egLwa69vTZBeMjLzzxVM8X7kB7BtBz9Tmp",
  "key11": "5w6S8rgJreu4r2Y6ZN5ucU2XZGkq1icKi4mxzNMrQsV4VBLctjK4gaQ8E5GLDAC5KjwDUNsyvQd9rBCf8VX8UeCA",
  "key12": "4bbyqTtvePtXzcqfoZYH4aCMMCWBjkqNSbtvijxnC6k47WLd99ke8hzeAfGqWE3CfxcXMQt6vojdKksx4fkLJYXa",
  "key13": "3N27yuwbKz7kTpqfpNdQTzng8WCsxq7tCeDKsvnZaVXaAVPCeiHm5KAGS9aDeiibQa1qsDwM4V19RG9rTRX2QvEU",
  "key14": "4fVzevGFM3orLxU7W3Ez6jvbJuaS8jw3LgpkdjXSAaUC4tMUvRvaMzw5DbXAb3Kjf3AvHSgV4rwzhPt23Wt3HKEJ",
  "key15": "2rQWPiETdXGmevCcg19RsTtfyCL4zGhnptbdM8uiaJEe7pL6puvg9jM2naT96J7GMWXdNXHBooWPkfn9QR3e4KT9",
  "key16": "2GAMpZnUChQrUw211vuBJcVXbeSA3tvuU9JHvsm6vxN22iwKRhyEMACdKxQ1xJYXkyGkZHiTXS63S5Zrx3cJbpp8",
  "key17": "3YHoHz72fD98uAFvx5924pNo7cQo28xVrHabHBP2AssxkZ1R4Jt79g3RwcGWAgcmUVokBQENVTeLAMuyzX1DfUcV",
  "key18": "33rZB1uALYx3C2ctzTyFtxmnazPw19Co9oHtjaxfuvGPHFGn5wdJ2wNroQ12aGeK7UZJ45fi8VhR8oRs46pFewLD",
  "key19": "5KVSKxTHiDsWmHc3Ykg1KdDREUXJfx2Nwf3sg5MXRWhyZX3oKmeinMGtRwsNWWLTv13jfWtE4sGGPv7KcxqZq2ST",
  "key20": "3bB6asEwQdYrjQnXiNR21ZnoUT46qK7bPwk6TzUggTS5CvqChkftLZ8f7P3tS4Q7mBvhHFbaL8GTNWQ8iZ75MkmF",
  "key21": "5m1ChFLTcwXkmiT1hnSWBGYmfJcfYt5M74eBJyzkzAyrPWnR4t6r5RBSEyqDNEFTWLHZeA9dpBdwR7TWSMwEXJwC",
  "key22": "uyLB7J1NpFSJAx5bdpAWCjVVibjUtXL2K63JYue8RQHArzNdNBikyRf2rZQyX8sBTeaxsDiKqe3M9RvS9Sb4BR3",
  "key23": "32Chgi3y32MFA1JEmJjuLKXhTTcduZVLEuPeMcKf9nFyjXYQh1oGUjVaK81W5oxY7DJxYNL5cfrTJkq9JoWhZhde",
  "key24": "5Mt6QLHxnPXe2z3kBdAbDqBpcnh6sNPverSKUSNfFMKzcbF9G5c3PLKwX6Mzg6QSVZBGMhBmrsSW5zoDYnbH1job",
  "key25": "2x6YP47qR17fDEFBxwhBqddP6vgtcd4b2CfUyV3oxuvYkF7rxLEqQrreLFN8AcSYeJjBg8VhgXArER8bYLcqfX2T",
  "key26": "3UcdVjfzQ6dn5sutF6jTcY15cgThufa3WXaxPNJ3ciY6iCxiRAPTge7s65ubKGnQUSFBzTPqJ6ug9gsrPQecfycj",
  "key27": "3i1fhAb3wWDAhVq6XK3zUnmsKo2FHZaYafX2dKNrbxEaZsEo2SBtWZEAUy3EMzfcMLydaerH3BvqYnjUZQn4viXe",
  "key28": "4NQ8qMM9QinYwurpcaMcqTPDMjdooN5ALSnYemmKKEtSwEtFDa8BtaFuPvQ4LB62scc2PpVLXB8Dwio7Tt61nocK",
  "key29": "Na3TosRrKqf5vgodzsYvsiVaEFtKj3L2kY93yDLfkuZTnTWmUpUG7iCDK55NMcvEm2xijMvYXHAa8R1T5AEJ1u2",
  "key30": "ciV31dbFs1Dg3vNwpq7gKt3tsXQkTsZks3qBLxGRqB2q8iFZR1CDcmLE9YfZfsSFZjAaLzrmVB38UZFiVYNVJ99",
  "key31": "4UF4Fk56JrivHtPPsEyZjLqe33dJrnnqdKS7iXvQzYQrLhGt2g8SvWVw73XcbFkCQMUUM4iteSLqrmfDcax9xxc",
  "key32": "8t1nSobLXhDrxtCYjwTUsMaspCVa8YqcKvokzcnscigcCRpqG2LsA2a6eMHm7RFxyyo1TdiYQ6drkKr4mLpym13",
  "key33": "4yXis2Nqv6byD47TcbsTbxfVstf6bgp9hs8HSFUba8RAchFeDC8HS1y6iNJiiRrKT9oPbvnzdUXAEnSUBYqTtY18",
  "key34": "4Kjectowoz6E9W8nbiV67qG269k8uxgy7mEbZfiJPamcKxaepRajHCuQw7wZuCTt9qcX4qamb4pJAZLRdQYwpkLH",
  "key35": "3ZZGYg4VGkgZvGkDaWZjMHtvLsQAm1T2yooVbbDidPBKC4Qo446fFi3ErC8MQp62VFX1xiarMjJe1tuYGBXBVGkP",
  "key36": "7FjQ4Xmx7DYqwsifN8eB6GQBE2BD3TQqPAmKX6SPu9EUWyDsoVBM6mAyB59Lu9DWr7n1uAnGUPv3y5AHJpHoGef",
  "key37": "3ywxNo2rjdUHAxNpCYtEQYm7nrBbSmKL5B4ZsktxyinPYWuHkbvgndSqeVeSH6FXxoZwmN9VLPwmWmDeXtGHqZMV",
  "key38": "3Lr5mXPkhnAPwh1RkHJYHtiSKMHd8d1Ch3gUoVFbnt9woj4kkjWUKe4KX4UfEncypTxUzmVGLGRxL3dF42VtDjnj",
  "key39": "2VRDFjVNCciqaEGCYAEaucSLZnNWrB8Ppea6PZLbyAX2dDJP71jJVtjHdanxdEGfGSBVoatJB77esyD6Jn3r7uz4",
  "key40": "4yphuCWyLxets583azNEeQrMkE3PA4kBEuG1D5iztkspTBsTvrbsKnxTaZKqFrppXy5u1672HiZ3aqxWQuwAKJMa",
  "key41": "49Si6ZdL8yKZUiyk93gDTEZErSLwNtkWUhZiD3Xy1Xrnhez5QxU8Qa528XSjdZwXun7RjohYsJpKdcQXM4hdd7nb"
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
