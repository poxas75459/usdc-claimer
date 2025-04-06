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
    "4GqDTJUW1zpvcBspzCFyvxkBmYEpLtuGkHm3fSjQnFihYSNgnXyUgKNnHHUNT9PVyLeAdfMdk9Y1zN1maRwf2wkj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UBVReBoZ3CBdZ1giSW15SngAnnPSmndAv5NsyEWqxwwCMdLqXmnvfPJgRqazic29UYZ1K3rTK9AKbEK3zNuJs1L",
  "key1": "3R8VdpNXwZXtaSVZBaPzoG7no5EJgoLXeNZhe5w9PWPQmYUE3L5GhgxKQY2NYUWyg3MmurqMXAeiQJUDfFa6iiyb",
  "key2": "39kE7nyAKo4wi7SCZY4P2VgzYaecd1CNnjis82JupbTRovrB6CvDSCU6SLJ4APDfEARV3DW13d4eC848heRPoZ4F",
  "key3": "2ZF9UHiKpExWCYKV1Gf1WwGbkiZURvKKgfg4RmjgeycCfstBvDGWGsncawv8ZHUYwgNaFpCAwnAzYYtdU6eDuZBB",
  "key4": "5RcVZm4nNswc66p2XUKiwFZDDRVHzNJguTmD5rhcr56Hgwvng8q2UsBuAwC5P7UdVE6ScFXYm2TgD9G89dTvXSuJ",
  "key5": "KCqmnj2tGfYqAupCbU4kwVfgqBFNyLjmaxtq654qSXEm1xBrXFQURtvem42KPQgzGMmZYv9yeaddM6k1HEvapTr",
  "key6": "U4Q8mhihKQWHqBbnZdy7Jye5zseTLtpUe3XRMcRhMb7JNpYRUFkbwPGhQZBty7yEKooVgZ1tzQGHf2GMzzEnkcb",
  "key7": "2c3H5ZZxCEx8gCCsN21paSzDYgUZD66k73poWZ6HZR2gNfyLtgHfUyZqfRFwWN2axc3AnTarcQ2B3mTZiokoX17q",
  "key8": "25rZcCTCRvvjGHCS3sBP6DvdtCPCjgTLaQHZtegse7JanDJSQcSFHFKm9Jn73LApqGkGTZHhJjy2CMog2bKFaniD",
  "key9": "3P21B6VRBTYS4YHxz2pcaV3PoGNPR3MGoKnYsu5jB57zVrS5gLXCEczmhRXkFddLqQbX5aZ4XSFzsCoJdrrjPNRL",
  "key10": "4kZ8wPYs7MHuwUPnRn2jcrRcb1L7i2A31Z6s1cjmdVT6ERMmbKxxYufWs7psJ9Tg7f5T48Fxcj5zjZtw4kXSkf9N",
  "key11": "4ZgdasDeott4wbdBKqE1UwRmBcqFBkcTPntfjfnSJqU8Qp4xZQyAR9GNGKzb6kLttxwLQAAmdUphAEVLRzjsRrsq",
  "key12": "2BUxqetdEqwTeGNMbAuNzkWNu7bC9yE2B2RFLiuAxpuLiJfSvTcATT5rbu2Qyw3pzhPLgTKefkCeegXr51Wwdd4g",
  "key13": "5BCVDfo2S8rRznQtj22WoRZm3nPGAWAmA8nRHXxycmb58a8PQV9EXYuEJFYZY5ksaKENutZAWUAocmUjtJzbzmih",
  "key14": "3vfxdeHccv5wB9423AjTjL8HsUxA54aEzKPiYFjWMFBvZqStXWGQFehDe3MtoQYb8bGr4amiDeikvgamocUBir9Y",
  "key15": "2DXPeqkMowvfWjQkVYG2h2iKcBbUUMEJBXHsE2zr7JkESgQJpF8ZR2WCNYBvNCT8L7KAm5bo8JNYgnj57N3KC6H8",
  "key16": "2hz5jXPpaJVEt9H78Y9avvT7Au8zLo7TGX7UMsg8U8gQwBbHnWBcTdnanpXwQZ1Lq3FABHju3DoxASQhuYJs8Eoh",
  "key17": "wgdfSjfnYEUZrSe7HWwYFXCAk7bxM6bAMXQrgPDa12F1nLgMXuAeCLNgm6o9xbjyrqRgaExdZiEgnCBDaJFhk5L",
  "key18": "NcuhWKuGEE59Ae7NdmcqYYEi3Gamc3DAf58ndFfiEyi4XGvFkHDnPqMCfJL2AjQumEFjmePFEZqKiyubRtatRED",
  "key19": "5pDePa7E9CRDv7uPxffFeLnUPDgm8znNkqHsqnnqPFjBuzpkygmPX2r8ZykKMttc92yannr7n7TXqif1o7TF3Cxp",
  "key20": "3chMua2w3rgAP1UqRUGYgL8qHtBfexkFL4Z1LgY9AxRicywqT9iUZDsu6KzFoBwsZzYU4J46R6qLHVz6X3ebwhqx",
  "key21": "5CNGgeLN2M5F7THsPxcy5AsNHDMpjZvSWs4jVnE6FtujaXD3bas2VzyGKq7xbcvWL98YNPyJehiHTMYnZi6dmE4G",
  "key22": "5SNXrs8Z2ZBnGSMaKs5FrV3KNKccHJ8uh1BuAM6J1hgGPDGPL9xX7y8QcpujGVTcgjyJWvq54yTCfZGKAFL8aivL",
  "key23": "53jrSHb7WRdy2TaapwJqH42SQzMwhdNus1hLzksAM7fZMqUH55ZmM6haCxNVaiM598MkERs2BDR6sfJD34XZaG6c",
  "key24": "2PVhKFqo1pTbbitNm1tCbzAowuiSRyyQob3AP27ZLomGXGidiLzQxxtE47rJjVLaxVFvKb6La33qV41MpeFjfsjb",
  "key25": "5PqAgk1gMEsMMQMubka8K6tVWRAMBPrdniKa2mZVK428cDhcn2A62LqBpQB7hmtWwuuKoSQJEo1jdbcAqkeTRGMV",
  "key26": "34jNgnGjMcMJ7eeL1GeU1Z6vcnjsBdHFuavYxpWtarNs9Mbu9npKR2Mrgtpi5Htckx4sMudPj5wrDQ74sWdBNG9Z",
  "key27": "52t1gCnWMyMFd54mC5sPbQMfnN5DsdzJTgiLuLg22Ya8i5ep3wwMbkhf9onTsBBXekPPp1SMWiXEiPWxykx2UymH",
  "key28": "5PwbdFjW11dqfL5G6KUKbaGmXzPAbkddFNcwCVoev2nSd3LrWKLK1goxi11oh5sW5Yw8ZbGNTGMzLS4JSEWNgx3u",
  "key29": "98k9HsyiC1vza1LD9nit3Zrp12Gnnj7UeCLfNeY73yDga2nYDSnY2xMCKBp4VYdvjj5jX1hrD4dbQjTfJVTtMJh",
  "key30": "4Y59KPA2QUbMed3QkGBGfEoiZ7m1SD4wyHrvkhxwusHFKP6tC6UF39zFFYx3AvQCMqX27PmejRy5atjbAn7VU1Ep",
  "key31": "62QY7Q3hLh4Npcrearj7qViPoAQiFnuARjX5KBy1qWFephg2pruvU3Qjnp466aJMGGtpGThcKkPBqAm6dDS8amr5",
  "key32": "4o56SMianUAaCeAuoygnpD5PBcN71doJrRCp3iqa23FyFeHacBaU4TAH89kEe5eafGNoFbsmZGb6fh3yJf9KhJJK",
  "key33": "4GRNoarvoDXcVkLH1JHuUsKdDG1VUftYA8Cbv12odKaE8AL3FUoeyN8ZMi6tg3wt7QnYdiPJf9swdLKBcHgwMz31",
  "key34": "3AxTiWQvRdWMrwDxrdZGZxjcYAVmgGg1VfNyCwe8SyaCzAXWhtqi3W2Ne4JzzYEDSupfbjUdAUPTDrijhKHZUgdr",
  "key35": "5qWW3csdtwwZaZt1xnyv5NA23ZzEwkv2z61hJMb6kVMuGFxDRkzX2JVp7xqeYRnyTyDm8xafHv9THt7Z1JukoSxU",
  "key36": "oPwa9xw9zcq7QubfUckJMfdAwemtpXTrUwN3N5NqSFJC6NAFHPqA1Td1zyo68kgVUru1nMVncDNk1d5UmWqZhZZ",
  "key37": "62t54hyL5RM5jaadS4eyPwY68Fc7weh61d2aG5N5jFnUFFXDuEyAJadL7AhTTb4od2RmbiosdZsf4S17ChTLs7gf",
  "key38": "4SuKEQYoVv7jFztg8Xo6QVnXwgFdqxBGLuDQDkcvGWfsPS1a9m8Y3AerwZLgDwAK4vmWmHGL7NQKJLEm11PXtDSG",
  "key39": "5miXhZjgcDMmWm97KgHqyVyhi7woEGj6H5QbJj3f6D9kLsP2ZysegoBFcWomwWyr26NsrohvJ3848psu5TV2xi1V",
  "key40": "3jzTGLcL25DTGReBS19zSyep8by5bb9V8nG8RPiTduzQETNPbhAdqHaUHfKxMskhPWJWcq7VsSBCtJeJyubtLQ1h",
  "key41": "5jYPKKNXSVMCPUQmfPkH2gXfzdNAe4PZ61fPbE1jez9VELx296beHsgjon95d5RBmsH56ry2ifxYasuwLDZidGnu",
  "key42": "NPM6PSXw7W6XqP1aiwBRN2FkvfXCkMVnDRfJP61LgGamDcTXJwCBrsdrFQF9YKt1GsKXi4dg15d63VDHxGuYe88",
  "key43": "4qcpA1yjB7uMLs9PbaaFkuGswZP5afz63K2qm7K8UwT3iNyHQyMrHS98PouwNqNtfPQfemBJtBnSvrPwAE8vrxKf",
  "key44": "bWDDHpCqjV2eGZbwC2hCRChgJ7pRAeuAmWPKcEQf2RyHFvMvzei1aMqn5FyYtpV51AYKR5TdbPFf6MhtZGVLM8N",
  "key45": "4z1Ykt91xd83JfB1RQVdYgsmt25gGnXT3kBTGwUsdpaVwzCnwzp6gcQJbiFq1AKisHNZoheVskNZfSbETTBm3LSf",
  "key46": "41wdJYxJ2aRCeDpChFKLZUymmwxWjsszWsZDuefdzWuzABm7VqUBDXhbVLrBhCqcTmiSJgAkxh6gQGcDmg9t4Q4A",
  "key47": "hYdBsYsU778KPqsquksMCyhGzgyBtfS2mpTmXhQo9nBmPngt45LF3wYL54YHR5WxBG7cRk2rsGTL75QuzUZCcdF"
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
