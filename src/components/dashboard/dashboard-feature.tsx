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
    "3QyhdNknxEXTozKy76P5xysCTyeXdbJzz8GXjhRfVFAj9yfqNuKKVQwGYY4fpCm4pbiS6DsSXmKtk6redZVS4FPP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3b88SHkZjATcknXsHj1V1aRh9MxHFZKkFu7E7tCKFfyZyUfGT332vcDs2RVmpdkZbtXoYCPa6k6eUqAGCkp2AekV",
  "key1": "28qQNFSEWkiP1pDgZMcRMmPMvaR92pwGcr1mRxzsyqz9MfaqLDJBxbJh9oseoE1pbkvaUUffuvs5JNkwjYfQ2YTm",
  "key2": "4c6G2gy7ob4oB8A2HzpbPaNJ4CGdoM5NvBy29LkL5f5P3Re87UuNVyNmhQyynDha1A7mAVDH2F9kcX9AaQZhWzmR",
  "key3": "5M2L7xhJ2WBz2g4pVsA1rLW6vKK1ogpp3YYT6mKcxxJ4snJ34GHSqtiizuLactyYpBJiDLksSXNms4uorL9FDnsB",
  "key4": "57doP4TEpHGSQPksCkUpdg3MniSHtiRhhaAGHghyuMMMnbj3Unydc7z3sEmxzYqoPUw18VM2fVtYQhc2jMj33pyt",
  "key5": "37Tm4HRodApLBVzGVWc3aohQLUGUCamDZNFjcJmjNAs8j1kz4cbKz3uUX9QiagzceyD1wGi5LBLhtMACZtc8dEWn",
  "key6": "62v4r4KgBFifSBDDFyN47ehw7aH1z1R5WW1VFRuRpQdbA6UL4Gcg8qmA2H4qUfS5jXyHpeqyHCue6tkdjewqzE6X",
  "key7": "4h31M8u42w4oup1BMHyEmrEJ7C6deuvZqPyAyY1YPVBDRHHnYQd9Q7g2sfFA6mh5hV4b5jRDJ78qaZmypTexXFYc",
  "key8": "5HGtJghgMd6ML2F9nKVyY4B5bhEkM5TkKRF7dov8HmWxnufooHsNYx4z8cTAp6edurnSYuWkMFzpW362BXeVFhQN",
  "key9": "36pbPaWJQgEuoY3zXsq8Enso8PLpXh1ySk7pvqmjSYuXXvuNSoS7FFBKEaNGLEdx9sopmULD9VYtr7msesDeMX1v",
  "key10": "5TU22Y4xqHdEGzbz5mZGszVz78V8Pe1szcJL2QQsMMRLTyyFjqQVjrYFSSz6pwTDefdRuVURXPdxUzxG9kjZuWFG",
  "key11": "3utST4bLdeTdPHuQK4JSNEaCBEcwAyRKd5vcDauZjZamtfUmmpXEDPpAAvGuN53bR7HkueWtwhEJJGGjfBG8WFYV",
  "key12": "5tgkdo2hxsUebjzsyvzCatjVMDZMRpaGarWng36aERqjfwDGkE7eKvVg6HceGZY1w75rDQjJMvpsNU5RqB88xSYW",
  "key13": "3jLX94J6PJJoa4erCwa7BbGvyg2f9bDw4EixsK2w6WMG2XCyegnLxhX7y92wr73a5PHyp6f6GydZ48ivqPPAFkBK",
  "key14": "JBAi8VF64tkSsmAfDu7HWx9viKajctkfjLzaeRb7mYfeVqmmBYTbtZyyrE7DdNKMuuumPNihCdiKwDsJpGNu5GN",
  "key15": "zztqM5UxA8dG24MuL4VdRtrbMGdkXTSmBMzvYqarp9bKBWbrPVQbcFxBRTCFvz7KezCzDGH6Cn9NaptRbqtrhLx",
  "key16": "46x8UT84aQbFWx7i2rtR6x5KJ3qtBn7kddzRkCs6fZzJAZxaegknVX96Qc2VHDFujx7VGkppbyiJbkW2fBqA4ofa",
  "key17": "5DtDFx1AiVFYhd7qt7UtarNxiHpGf1rcDAW5DVaaNdxH3WD94RdbBhxcYA86zdf9iBVYWwbFeRddy1n9uEgArxEo",
  "key18": "4kMdVpXEg4Fejvisuarc5ZtfAYJi19E9kT7BqUsQZB38nJ6sqoMLnYJ9ghDmtw1BuUC1swQsnnXmDorN43LcFTe2",
  "key19": "e9HBTpAqiVvPjbnqzzqVhXoJUwqME2bZwWZB9SFxQqNx5DPxqAfnpLZfxfwfZ48GPiirJJDwdEWJnDuevaCA4mD",
  "key20": "3NYc267oHJocvrsfs1mYZ8fvVmoxNSse4dAY8Pkv4Up79Z33tQPkgdEAYAvLrVDkjsVnwLFz49JM9S235Mi7wYwD",
  "key21": "2k51J7x7JbcUhjVxZt4ESHZCvHiUQxiJzSC9DDBtHakJptwwrjpB97hXArupo9zVmqyoo3ss2sdqGKdfhSM2esit",
  "key22": "5969LXy4JD65jXaYRQRnyXRqnMUgYZG5HET8L2BhExNtgwfvMqX7NCyJKxHfD3a6YNYZoGuVtNtLFBGBXuiPKGPV",
  "key23": "5vncTFRuJb3o7DdkeVJ4VfLpKmd1ew3CMbStsQo8zDVHt4o3Xar9mRM5djfFuRxsAm6rpfZn6DNq84q6jrR16CNB",
  "key24": "2J2hYYtxFY2coQ1rmTiJfQaYbHyv6gmV6qcDpQnyHez2kyj4tzEWrKaGQ3rtUawd71wkxnRu4epLubkLLHe7FyW1",
  "key25": "4QyqDm7RbdN8c4BNJsZsWVgpaLY64vRo22RExaoz2MbkntTjGkQYKWE6CvY4oQR9joKWKEL3gAXSY8qnPcW5vSTq",
  "key26": "4fcBRBVPjNvJkr3d8e4XpsrEquFPTHHxNyaUB8siAZo83fZBKgT63KBBFt5MYM9nPLUhKJTP35V118w5q9E2SHAg",
  "key27": "3HwKBkp1SReYP6fxYvc1iTH9cbm6y3NamBgebqXjR8VhrUnG4VEbWMwohMxm5RqSbZMwaCod9uhYVBgS5F5r8ZTT",
  "key28": "2DTEDaBk7jUYXMgjVpCj2YAE64iY5AeRj96Yrt1AZU8KeUicmeocooN81Hru5LVcbhQUhCPsNhcg5qBUxj4NAhk8",
  "key29": "FXks74oSreHvrY8ttQDwAu7xYzLeUYJ8iBB4BrPhQRx3AFbuxHJBCc98wmyz35U4ae2muqgRDKt4u2cF9yCxJKo",
  "key30": "2WtfRok9bsJaDYfzUseRzjaNQLJKrNGqxXY4SUW97J92zGQdhjEbSohgNqXzBVLmJyLy6pJSxoSkTf4UBPkG5vgz",
  "key31": "5J4FvkAjYNXhmcq4rztzHxUybBcXBaHkpPUFNxmKif4SUFRyTwKePNWwcri2P4MrfFLC87DhRYqmcqRJt8ibd6br",
  "key32": "5XDtpnreoocHfgU8waU1f1yR7DyvDKN1pz62Jz5pwcgK5JAXMe42YhNHczwg25JST9CbuhdHVcTzQ3x8vJB5AxhD",
  "key33": "5zTGZNZwLhz2ckyLjsbVC2ihMYs98sitX61ybrDGMxaoxV3UWLh7N8bsP8pUxDfaDsjT7XN8vEJGaHMgddJDb8M",
  "key34": "39qdMa135LxZk1f2ywYUSeRR6CSYoVBwMF7c3ACMCdkYdDCs1dvDjBSAP2MvPerZ4PtomNMtwqE7z2J9kuJg5af3",
  "key35": "4TwY3WwQsrkhU1GUTYexxoSAGSsv95BKrRjYo7eP4eARLnYY2Mx16fAKdtJHNZAyVfC5SCLxKWG455tJeUzgKvLu",
  "key36": "5sYBfmQ2vyz2R4M34f7jrwJQfrFF1E7NdAX95RHaBoJsNVozigzsfemNhcvsEjzMzkGo2Ep22m62nS3s36XTXbe8",
  "key37": "3qGZe9VPG4krn5TYEvYo53oBmMypDDaDWdLrsq6dJvtM5uyLmScq3Ljp2YjLThmuicCTX89HNVaHkrtjLcXcUsEK",
  "key38": "3P1chPSGFGBxEpPfQLwjdH9Tv1H2ymipuYQAiYCx14MpeWkTPDXFeEDBJDPt7338BYTv8zK4ASafu6gqcXG1SXWh",
  "key39": "WVSeW9CpfS6KmYiGaQAjdqusFmnDsQ4XzYnzUfztAUSxUZE1kEAEX22ErBGmpmwB41aDMftzv4Rr5mqUMGzkrGS",
  "key40": "25xQY2MzvH2boeAXqHmpR3zU1w2aeVe86ee57S6ZtBWJxyciwNVgtjav1eZEU76JXZWJi6ca7pNEbyfkYLmhUFfG"
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
