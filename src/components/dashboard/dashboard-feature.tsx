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
    "2bUGyADssh8dj4FRhQtxhAmHmKds1UwX71D1WGv2FLcAcqKZQwbnHDZpsEYFPcZym2ZZxx97LNbQsP763hoHZXJy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zDNhyveghj17dRghjzFR7QUj8hcbyRCMoh6D26apDCCRkuqggkdDPxQTyhRN7MxUPST23TFKnhoPVYnyva7dhqQ",
  "key1": "3xrp31dzEWKkKXUb4SE1jkRi9SGNAK1mp1VG6enhoCGCL4qge51KvEm1vhsiQw2R8bryJzhZ19b7S4XzS224Lu9d",
  "key2": "Sg3VLu2N2nUgVAQmbJQEGo4s1qGpBD8Yd2KbC39DWAtjiBQAEviYojjjQNkmoFY3SgxjnW5JqX2xx2rnGBFKFYK",
  "key3": "4btYfjz8mC63HGG8rkx5nyWSV1ad3hjr6MyFbhw8aVSuuomnbo6boUG2SqSZo3H97G4hjQzRmZ9AJaKRCyR33kYM",
  "key4": "2A483VSrLwWN2baQM2y3wxMKmxDThcpVq586FtcTCd4NJfbJCWw5AKyVQVnG9H5Jw7ZHAynFaMHaFSe6BwMx4ZcF",
  "key5": "5Z55qMBsmxYEeXn8D5D8fSbyHG1jtmtfmWdt3MpEBZe8PiGS1CX15cEYG6yeLsQsgBNFjWd6Spjb83UddZH9SuLk",
  "key6": "28uKjSyRkADRADKE6X6aKUStY5usXNbRqekKiiZPPBCPbiDhxxTUJjWR4yjYkBkw4medmDgizgP25UgZxWtjvgA5",
  "key7": "5jZaU4AhoGfDmwMUTQhUbWyVJGX6E4GtBUHBzsDAewRDWh31R5tmwh1ukbYAi21tvRSRmfbqXpDvuTvr7rbD5zAb",
  "key8": "3CJPexhpa7DcRQ6p8G4hDeGPwaB3NJXc2GRcKC1ewSKDZiKvvASdN6wm4ZyBZ8tURSRvSzdXzDY2YfpxKSd65BCh",
  "key9": "3nzgax83cAxD1NaacKvGo1SkJWkY3FdGhueMTP5ZtSzUDJCdr1TQ2Rkyqoa2frt3q78uik6z6R1RW2Fv95DNJZnX",
  "key10": "mZb3mWiKerKtHqJcSCC11Pz97G3qFQ1fShReytVGTK6Nj6ntQXkUv63Qd6ddrKATPeWLyors1CVU1Fr9BiPXb2V",
  "key11": "PfhzQnxxmSBXQeJ7s2B2v8LqqvE4q8TjyVxXamR1nzgUjYZeknh6JzGtDvqkV5iqxZXQX9RLDqfAT688FWSE5Fq",
  "key12": "4i1PoddhX4hUJ64nmVnoGoQX9g9WRTvaWzfJhGxcpgLKQjQ76DQj5JCwpN6H9RZuoex9Fk3DwoW6nMcfyCDGHk1T",
  "key13": "5EHfA61andvdBWUqEpjzGZZxRn76YJfkapZHMPisfwfRKh81ZJnDKASUsik5hg8uWyJnaRXVsVZfQLbuy2WiAoYb",
  "key14": "5jHvQG6qVhJJDkQLejuSsBAJnwuiPeNezbtbSd2vabJdvoBisjHPeiDZAnkAyXQRTBbbyGWyf1a48H1NY1ubXJsn",
  "key15": "2hpNsfxH1bvWyBwENjgpYuqyV6UHXsWUKuXUMc36pmtLhV7fuMRExMz8N7GkMZVXmFHTZ8KqoBjfBwdjnqrZnyLo",
  "key16": "fy92Eve3YktgfTgT4RGupnYSrRyrXzqwaKQbqHR2MdC7uTyfyfHTsTKqtHxKPL4bFwwXtdYQBWbkdpMLQ3DhSoU",
  "key17": "2Yhe2m5ygwe3syNcAMnDBzE5bHyiR3nRYHJ5CuKdijp7h6FbGdpUEued4j8FbtfntYfwXG6tpvg7UcJ2YDkUPg5u",
  "key18": "iguUNe99w6ZWoRf8szqyTy8mRzX5a4env76p4i5qi8XcNj5A18rsAwiHS7NFDDVHipuPbbSmfVnsNYJ7JR3W2oF",
  "key19": "3HtNPcXVDq28s6foz4dG7Sv3ar1XAFrpbriFN66tauHNGASZnRRhHM4jgPmtUjWX7QwZbBYqie5yqttKqsLHMLpq",
  "key20": "62hsjGRHqGypsgCqUhxnuuYdWFi9EUc6khX6zDAemYMtKvtVuUBjFEZDZXGhE26PhzVCLyGfw6DvbNmbdpnR9XSw",
  "key21": "4W2ZxDUJfCDoST2wQFaTCY7zc9dvH71JuvGNAVGNGDNrSEfRapXfcFVTyq1KJ1u4Z5cvFqph2QTieoo67euokQGA",
  "key22": "3Xbn9Es84Kfcw3SRPVMj6yY3a9m18ZP76KFeaA9SNeJJmU6wQBGVUAhCXyPqsF1k5HzSiqHEwXF1UAdWzuAnoWQY",
  "key23": "4XtGfcgnDyqu34knaSQvWvEAMhQxSVFpu5nCCt4ra71Uru9m8wwGEpWKc91gxpeaxrDmNvprGm1p5mszhbueoszK",
  "key24": "2W9CgeZuDYPcnRHVv27xRyQ5edWeoLL63q4SPJi8CyZnY7xWnTEy9qhAcQc1TdWMq9XVhzvz7SDdNncTHe6auqoD",
  "key25": "3hLdozPxAGB3cbsZAbi5eyRBCLfYDQyvanNnBKK1GLK9SPMWiKURMDKrsvALj1RKFMwTPwdZBoYJsq9EZxJTrp9A",
  "key26": "3knue8oinYQHEXtiCdp5gqLQPwZXAEoEGTb722WYf1GsiftfqFDpwzPoaGbEhGmsaYKYw61LpfM2VoaDCJQKFQcV",
  "key27": "4U9vAm5NaE6FYmEb3Jq15fwefrRKGnsKXCNtDPoS7sFepZLL57beR8UNnFcR9ea8Ai2MEkLfLDk3GrRPm6Z1Crcq",
  "key28": "4Wq5qcDVhqqVuDY2Rk95WgAywDv221cJJyGHdMWS1eU9UNPB5LpDa6y2JFeSRCiimtdBu4jQbMz5PVwwBonCxPtr",
  "key29": "5iJjxairMVYEduYpkHXuLkH7MHyFKKDb79a2hFM1CBE6Z1tNcxZ83HqndeRdFrCJSBgFbvnq4cjL1Ehj4fPjq7A2",
  "key30": "4ZM7hDxPGJi5WCpVgatHkoKYzEGceW1UMbU7v4Wv3uvoQQBwyrFKzPyU86bYpX1yNqKwx4jqrfibqoHPPEPnWjMq",
  "key31": "AodxMZkJ79Rdf3HUhQz72CeArTeWWbpwK78PQimTmeRHjP54tz3stbfqTg5PTuQvd5fuDx55QjF8pXm6mXdWWTc",
  "key32": "4u1qMtuDDSZk4xczniuFY3QX3ou7jYn2FkmtJNA8EgVhsTBg24PmJCsuiVJXYubNnBrLx5RD64y2CvANqv7Q6wwm",
  "key33": "5TGnQejAR3wYfhsUNQhPDwPbGinZ8h7aU4XsfPECJDmM6vULQJp7qvTF8CiHCJrYncSxEkLapUA71aafTEFdRMc7",
  "key34": "56zAPnnRq25tHWnkfdhERvwFV6amKAXkkefVWpyB6tE9vqM926D7CQ7AoGRRAzvnBH4MsMcd82a4tjYTtpQL9UVz",
  "key35": "5jGJtNppv3jQwMPiPsEUjri9Am5GWDDf7y4TjKZMVLuhoB7RdfvXN2k4BPPS4S8gLJQbPpTtodxGZmCMCWhCg2J8",
  "key36": "2SHtaxCh4KL7xc2Ze32kLLihYYTKcPFtWyfPyt8LQSq6TifBHSmPx7TJeT8WQfDHcmshXmGzNUnQxmdz5dfxKUwo",
  "key37": "4Ng72sxx8N8us8VdiEwFXCx2eC9cKJVEoT6Pf9c4SNWeNAKg2ZwTY2DZJ3cTGvtSrrux8cpWHd8UWPwBUdnFG7qr",
  "key38": "3e1vKgNv1xZ1A2wX6NZUKabpCVxMCmDtaqcGukMG1tfLezuPYX3abcZu5Y3bmGiXKpFvVXz4Sax2WQyzc12iUp32",
  "key39": "5XU4SKynpjP19uKHfYMHMzK92syrfPTdUKCAr5vho8JF5bvwEyonV3DmrZnrXMRacSkdqstWtzveqqGZAfaAp23Y",
  "key40": "5fp8uaLY5ijP9NtTfddfFjCGDB4L36PRTufeWSFP2LhJeP9SS8iiQ9WLb4cyDYfGGSjPanBkV892YLoQW9NwJNHV",
  "key41": "5foDTtiYshhJHerWYY1xD4aLhmrTvzkqSz1FzWxTzZHXoRkqLQuTHAr88p1afW8Lp6sgvaopxFKQdywW67H8iQSP",
  "key42": "3S5eTFixmWtACg7j56GfCeQKrVg9Z7CtiYfr9rySQGiZgG879U1dbcg7rmkw9MCEHhzbn5PZBTRSqztAEFYfxqjx",
  "key43": "4j1FcgDPBZDWRAtM5ceQJ49pdHmbsY3tVFAaHfA9zb19mssDZ1aArDsHfGMgAm2uBa6BHVqv1GZwF9rHD87vogHn",
  "key44": "4eYESNxLkQxFxb4E48E8NWuP2QCncbvGEr7qJSkNdxvxz1mFfQRLYrq3QQgnJz8yTpbAjVSxmKFrN3cS4KQAywsE",
  "key45": "56stRAeHh6kiwxdRXxpzbwTwhb74sC5PduYdMC9qivUhQQ4RQmG3yiFDgMkwHBYDBhoJms3s7gb85MUtVEiLgS1b",
  "key46": "35TrdG7xvngXGZMfv5uwpw9Cw429kwotZY5vir1eDxy3HtFAuP2Dz3u4A6mm5kjpKgBV6kUfwXLHMNEV35KgDShp",
  "key47": "2mbX41Hfvcg3csGSJEGk1dxo8dzbLJ33MHrudgXDeoBmrysrSFzCHeSiGvH3dQQHF8K8r84dZkQrzwGHLonRJJAx",
  "key48": "2XsCRQfanjyBLXiJ8nYq7pqHL48eHM1SUi88pcdGAViA4nWVAeqMQ1BsmJqzXTGrtCUH2E7oJGqv61MUC4KzqZor"
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
