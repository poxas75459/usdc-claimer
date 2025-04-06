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
    "3XWzoqLbuYGGAXW3UN6fASxtwCSW9z5SbaXShZDtHxiboEuCVwtG7BWL8PeJ972tJ4RAThLe2gxwxLpSVSsvHSUa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fEEWNDfJQn8mkpVdHmzU6UCe8JqbEa8aHuznL2aL1NgEkibVocZb2jpuw7WnMQR9FsdeGbL28bEZoH9k1GNuKCd",
  "key1": "5Jiq5yo1ayypgq4tpyRwZhP31Ltptsssuv2yj1WcG669ngCw6Rom9bZZBS1r8XUys9FNXkkNSuG1pkgCpRTf2njn",
  "key2": "23UD6Pq3NeasZmtVwwsNiMTH3GuPCLDN9q8U2WFdCzkfVbH4SXeUCpwWgug33VvRWCuvmCAjKsu57VgkGRwJhgYK",
  "key3": "2iDp7xaquCW8DfF2ZWuRcUAkUjygqsFSZgbim6UKPTthdMUmHqj6WwMdfZza6fZLFQHSmTqiJzfkJH3Jtq3WLCJe",
  "key4": "35hndECCYQwXxW3wkeY5Yf5689itLaLuiSGAsWsoLQxuXUVGJsXnJ3i62awPdL8676q9HDYfWZyGCmMbTWQKnxwL",
  "key5": "46bPfeLpUQamN8wotSsBA5KMFm3FN5tQR4hUskez3Lg6n7LqaSJzQRmYJrryfhAL9ohL8FvpDTVD6sJFwRfPcDgr",
  "key6": "3tmguQ519LzktNpV8G8kaoxgDTkwqCgCYBW3fFjMCQ7iCRLp5MXSeFcZDvTHwm8VymtYgHD5Y7vdpFnTW77c9JLh",
  "key7": "3RbhHvcM7dZ8P7uZoSt1QsgEgvNrqFzChw5sHdFnv3bxznNSj5spJ1rmZ2VwTtpQdEBSVtT23urDMtypWWvNzdpT",
  "key8": "2fjUn8LtoH13qjDT87hnatnqEestsuG5nHfgtJG3okZjd3QgLXL1MRsYy6rhck9n5v9DbiPpyDVsU4WsWjErLHZw",
  "key9": "qfrf8aKYZTQQB8zC5yRtJ3dfrqx7eNadBm7NA1VkxpYzwx8FLRMv8At3JAM5jZ7BSYhhRKxHQrXPkbCyKXvhuKK",
  "key10": "2oQPyxfsVfNqXsFqabdfHJ5VCUiRbsVcjsZctcndZfdFnELCPucfXjfe3s2q1xVVE6eKyvzP6DgSszaWqU1xHqv3",
  "key11": "EKjQF2QPM4PWd1nRRTx1hYC2pSvdJUJBtrogGfFCLAJtQJp3ac4HbsDwLYFcJYKVtng47UN1AxSPpSJGKSNpU5o",
  "key12": "2sLTtuMRNFUtLWeThtwttmkbpyvP6NEkSGnRJ5THTtSsaZP9mx2cRDuUY9ZPGw2b7xjWK2wVJpGdqoPGxYvuBWvr",
  "key13": "5TnU5F4nuNMcTiMPMeaV8AVLUH7eJvgHN6FkSfcAMsvqLDE7B5ZPSf4LFuPEtY3GRLyrCp3HbT3K8k3qWaQ5WLWb",
  "key14": "4MsqUsxesmN5r1BFVvH2rCvwhDMroyBBdfcYeBeNatZ7wK3AcbDT1UVkgPwY5oVYfHHu92g77QzKapN2KHfjrFQ5",
  "key15": "4UVKxxBAEjHG9hjQGLpim3sULdL9fFP29fAUgU8SE4Y9UU4iaxFDgexQ4jBLSPZnUvsC7kJ3BKjZ7xRyauDgHyHp",
  "key16": "5ikm4k8VNVkvaFM9nQbWuRoXeWSaQHgR5MMNEdYVWoRk7WmpYE1JNR1NZUkDrx2tvdBPCkxNhXdXvNQomcxKwxse",
  "key17": "2r2YCJz2Xy1DQKyJQ7dmRmSnSM3hQSRb1KtiyWqiLM8zn3YY6u4tYrMQwkmcEhcgNdPuqyFYJXqJy97F7FUnEMBh",
  "key18": "5zYUvY6wBRZZrArkzXq3k9n3d6znJiy9qTZZmDgpykDHRg5LTDLwdg5TzrmfyixXiBzj5kN7jWV6Cn4eDUAxbQF3",
  "key19": "1g2fHN7M4VkKHGZ62GNgZRqGLmasC3PpPxohmxdaL3sMaKwNPxwYSqd6hGA3gEhnfEJkhgZD17YMV3cEXXDV32E",
  "key20": "4RpaGiqJaQQi2azBzm4u2gW74Vh3ejxT3GTbrcD5odKFeWeA8feZVgbwWC5z7kXJAJ8y7y6hzszVDhD85w1QBAzW",
  "key21": "5se3CSyBBgShfEFtk4bQxGWyVgqbbS4WnSkTUeLwo9MYSzikSJH3fBF63zq8KEKa4E5fEiSvchJfiBrtUukFb8TL",
  "key22": "2js5UZu331KonkZQUBNnPiPCDjyvT6JvbYfTXsQ4HRg45LT6WJfAeJ4re2eshKEcjHuTnC68dpgDhigXZFnpXzJY",
  "key23": "2ezE5yb3SnNUSx5y6TneaaFBfyTjPJx8XHMXLuVi3B2ubJhb9wX369yGDRmdBahw6sUZBKswf8QmDzR8rTKS994p",
  "key24": "3VGsHg93e9tnwCjXMxSURBncX8cudBqCf3wByzY5yTJZBX1BxinGz3xKVmTDFpWH4kXR2NK5ZUoVasoqfhS8XgDU",
  "key25": "2A1t66rT6bWNSjdPmTL5Pji86peYMxaQWddPFVhzsj9HmED6upYPj2BvK2hcGvbZhSgC7EABxmnpJxYZ3FbnimkM",
  "key26": "5CR4CohaJDawvWnuUzxaqNLzHtTSxREagt6QhDpUazYJHFFaQcs6EiJPYxPga8AmUH9YPP1Mx62dJWQx5d3hnQPf",
  "key27": "UKsC8eijQLYDnLsRVABXegjzVLizAQ4jxVeGKRQxKXiWUhrmAPaQyTBk64zGV62r32RUCZtrfDS8s2VzeZ49xBd",
  "key28": "35CRChAxzSehtL7QhFbDrtnFQtaQbdBNrJgbiQHmphiPBPLq6QUL2DtMm7TbQPZ4Kqbn7eVZNQpix98syGoMCRaN",
  "key29": "3TNvQZKEw372GiEguqdZDsce36GmKpbgptEdvrPvatNk8jkZFHEZtqkSExUBM1FnLYqMaFNF8cTh179trTZe7f8h",
  "key30": "3g7VyNeMPdefynoQkRVyHnL8vDWmEzQypfZ9TRibWa9VYBELiWdHp1MPJAz8vXkahKPjb4LybrN7KEnMyMCK3445",
  "key31": "AoDo4Gu7oNPUnZ3WWC4GBzY1m8My6q7WcxtLsrvHSgnK5BAgpFAVMqyift6tKzXRtnEuhjA3kuVarDSzfCHgvpp",
  "key32": "3szdeCraESs5KmNh4r8Tipjh7WNZayhqQMf6BAVQHgSTdjjPWVp3mNr99N2Ai43wgpChDhNPL9FEwW5CCjWUAZqq",
  "key33": "4n96j9GFdVmixPUxgu4WzosLrjddWLVMw6PziLzMtssQcLwx2Eb5DfBMQ8Usy1UiUbVwZdrbM3TNWtjQSdZg49us",
  "key34": "VjSGqiUqyD8NZyMTHy6BXSnHVRWQzow2BXNjrnQZBFKCNxEFprQaKUxtoqsKnxmxetmRaUt2QhiZmDepT3BvQFe",
  "key35": "5hJ16Wj89R97JjjSYMzu9eBvp9fcJxpHd3G63FVeT83ASX2E3UvmdBzPtc2EqKm4GbLXFMVYbsr8YiZCdZHhV9Wt",
  "key36": "2S121g3auzUgCv39Ais3dMkyJWruPp1bUzM8ympTYFxq52V9kjREQw54PjSbrWqbrK1BXF2rRNphKE3fyH4iqyWq",
  "key37": "26qtw15DCSJ1rYSWNxyhCNBokLyjDHHXwCJTZpDzUjtM5w87WbQZGC2yf5Lsmk7k6a9YfGnizx2SFQbbNzdcH5AM",
  "key38": "5h2nvQN1pBaBtYKF66V65aEP8EhA8g95237XRBdbRuN2TxoSZjcWRQaveHyNwYvWfnkHSpt9NwrwgnbjWFHeqpLA",
  "key39": "2JacmD5w7JhANnQECDcucvM37yYW1LKXR5e7oc4Qm54dqSHjMVEbp17NCEqm4mZuMuZ19bqzwCNPkQAhQSgQ5Rzn",
  "key40": "4K1QHyPtoZkwxzCJq5MGfeeWcZy7GwZDrZhR3yMBAFSYuwcBv7Rr5GW7HgY4EVhLzE1pKjoeCppjM1s9Gabj3Eng",
  "key41": "38DgDmFM2wQxMiNwNgC6N1FzXV9EnNak1hAqhVSWxbsoAJJMXHRofwaUDZ5zEt2ZTodTmB3VTZXBzTrcHa9pC2sV",
  "key42": "5X5VzWgBWwpeStdVNiwF2MZoF7Ev1NTDztvkPkwL6sywSxBsjqsaEzdbC1zvotKv4946ZRo2Lb6nbGZpdnqGdoFs",
  "key43": "3M9RZN4qkjmHNyFS9D5bb3RuQc8Wa2VB5q9GzToKagCVpymHbn3ThHUhkiyibPFFzPQHNAMc7mmKtBXjTsydnWVu",
  "key44": "2WVq7zHV68YzuoZcqu9SkybfhdikXVyx1mEew7vpQHvQhnLSvjV7HQzEjVVSpAFCCf8rR4eC5ZRmNrmMJ6J7iDGX",
  "key45": "AHKu3sUgKv7GuB53vBow8RFu1YgPJ7bZcTaVv8WDLre13P1gRQGQ7cb9JiGZNk3n8jtrCnKkC1siXZ5WninDqHG",
  "key46": "5MgVNnnyKADwLrSwv5MAV2HcZnMM3MJA8L1L16rcdN9nLLDNmWs2QGztJ7CQPiQhmJva7NRYwRJEMEBrCaXRL3oc",
  "key47": "gdpWC9ZSkFPJPBaP5GcBgm1ZXnUhV6UL143SxHiei2iafnKNDrRmXMq11g4dizy7fMA1QHiekbzbbrCQUJqgGRE",
  "key48": "5kab8fJzdQoaU7MjhsHQ5bzkdHHtY43VPCXZr4TB8CtF3Kh7yXQk7o2YoEpWKGdTi56NBMBEbuYiyKxkwEYgKD9w"
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
