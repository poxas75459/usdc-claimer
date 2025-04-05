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
    "4ku8cTraYJUhxQtGKU8DrTBF3aBUUoLP6taf8sh8hWQvGMTMdHTYU3QBDgzJUm4aRrm2HJvJ5oJg7rTbCz1km68u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SysM7vxh1AGtmtatHMbtdivUpEnkSZ5h3qVUq9SeKPJ1PwY3euDtsan1hDYRYSedvPqpQWwffMJqrUJd7kg5P2o",
  "key1": "3ey5sTzyYofecy6xRvuJZXEhb1czUTcLE2HRZgc19arK6f7nKV44pweymyMQ2U9zKg2gzDSJr251B9yXBWxQGUvF",
  "key2": "5Pjk387ur6MvXeSLByS8zDp46azz8886ZvcazborMMHiM16ux2717ccg1JWBg7FvMmFwRKUUEDiFkdUtvnqsj8na",
  "key3": "4aJohtTgQfpJdhGE9TLWPoKLmsNMWcNqh9J5rzFXJW7kh5Xfd977QgQX79L1N9M7PAXT6S4hyAXbaNAaaQEF4m51",
  "key4": "35xkfQ3tWTd957h1zzuBRACnNmeNeAGFNrouENydxAJd4cDRsJzMHZTKmdeFQqPVUbfQoKBpcDEXH9HL9gLHFnvq",
  "key5": "5ME3ut5ndaRCoQ82RwbpKBycibNAwuEH25ZkLu8xdembAU31zYVVpV7fo6f7kjgtEy3nuGa1F2oyZxdsTLVU8xK5",
  "key6": "5B7Abbi7knmWjqi7nMVX64XMfNYkuX7EpBcn7MjdLFejYj16TFkmJAm4SRWmRMDpzSotZn4PLVghSGogcQcxm3MN",
  "key7": "4PPj6PRY4zAgJ4bvHzBLeXssaqnUcRiAEHJv16Xc54pAqo1sQR5ioaTj9CdEb4TpS5Viv8JyARkty9R4KYhyT6wK",
  "key8": "3BeG62f24Vqp3JZCTtfGmxrxqJxi3wt1P4nsXaVCdyL4FbJY419Yy5JmyuPujXytyRhkgg3X77wkw9Xk5YLZYFz4",
  "key9": "3Eknt5igDLwB798Hcq6oiQiEdKZ4WwbGvEsAFdSKE4S788D9quNAPgGne7s3mzZhwjNU4Fy1tQecJUJ6mNKk6GUM",
  "key10": "5yrbdQFBhfU3QtnccCGVR1UMUcXAoUjRY3oNJFJtnR1pUmQpUt2ihmdW8ucYAixBxhfNqdCLFuBBrdZMgAdTyy2o",
  "key11": "4GYivWyjEVhCMKTkRZ6kyyovEiwtuepg3LrSxYQuE7AAt88Fa1V8JwuB9YxkquBaqjWrDia1imPNXkNNDokee3tv",
  "key12": "9pwwpnkENqoz2o4ktLzMcr4kPcn4wkg4UokXDBNjpnvdkFVe4creEn1Pw8t2oeumEtevKV9vkj4EzMsPFzQnWDN",
  "key13": "4N5KdSN7B6usETMyqXtdSyMEmG7D4k2zb1YtgrjQEiPhH9YCEGWmHVx4qWmpRY7KzftgVpfpK8Za4QjknLP8Grmk",
  "key14": "3gp1CAgSEKTL76JdpQFYJyuWH3tTL4ecLYuoKWUBd7U9MJtmDzqNWfaWp6GPwitZJQYY2hRE2ffJBEbNb4iNHVL3",
  "key15": "4otjXr6c1WSijrsAk2mJJvTupFo9XwBs545HCCci8TYj2N7H2dZufMGFyAGqXX5xdyz6S71S8WJaG4L2eBZKQDTj",
  "key16": "4iTDosYX22dqNsdCDkbHSWdR3z2tBoMQgwkuHM7umfNvSd1kc3a4RZ4k7JzDhdqwGkufqpmU1mA58RG5dwLKn4z9",
  "key17": "g88PcJeZ3vXV4tc5xBLMrx8RxCRs72oikzjcpoKqekttuVLg877W5F4QPB7tVbuQMxq48X7zCYN8QeD6jRXbBmU",
  "key18": "4ogFUaooMzDjpGVT5bgABQmhM36REhxu9wM2jyPzEwDEDtZJMMkAsVLPXJzn9UgXiVKJo4niXmzuA8AKV12fbtba",
  "key19": "5TvahZeNLxE3AoCoomp4biMfZN7xNyRSkVL23bxBashBoctjweTsKJWeZAeKgd88yC6bVypzhoadEGStY1rxXkQY",
  "key20": "fjQZ6AeHc5YvEt9pq1brMPhvGFCwbfwQUeLLC1WNxm3jgUTMKXPwWkhWkfqdpg9jBNT2wH37kFy1z7pnQCztSBG",
  "key21": "2qVCDYbcijt9DQF3cKa9BZDnCmtbTSdRUwn4XcSyZC5YHBhkPawRScDuVfrZZExRHP6UcD1epofRvbeqM4JL22xe",
  "key22": "2f5GtUCHY2D1dNxsYPsmHvDCbowT7gd8rMgaQneGagcRFMr3rwFhCsWCUX5VTZrJamYUHiwcaeK2RD5JmpzxiuuT",
  "key23": "3iFqRo653Wshs5kj9DNY5233zo2n2dWMcgUkZGeEz5VACFHD8KH9Qn4Mumghaye5gaFGXLKPwZJpJMLZ92MkGLMh",
  "key24": "2FoZb7zLHNis4yb4XCmsW9kBGikZjZ71bUUmZymuqbkGmTttp2MfW5HAK8kS8DbdcoH1k4tz4u8Appd9NnrJ3ksn",
  "key25": "2CkshBSxv2K6H9Q7LHLrAMwBGP2wAMCS5FijbZEDXJUbFE8R84CpiSw1GvwAihN3e7iV9HY44sbJckZFSUniReZ8",
  "key26": "27s5tnyLFAsivNPQES1P57N7DbZtA3h5DFAm5q7vdDrs5TZvtV5GPNHpeSJxYJMaELX6BF49ecx3SEhFHDxhR4Hp",
  "key27": "qMY93MCePtFsZQYdLxbndpLrGW81LUb2SLmJcNKJfA1eDWuK8s5i9gt45RkDJfFdoCN1R2yHFMs3GrZ8XoPJRLX",
  "key28": "2gsTHe5AJsiT8sg6pcagrTJcHFAWLxVSPJQwgpR22hgZ3gTXD8wrt2KLGcX8fCN6xmwQHmPQwsHnKuw1k6jGu9FN",
  "key29": "3W7pGASpYo87D7wcyjuEYcDK318XNZBpRb2ATvPzQgW56GyRJyKMv4hu1JiWWKFpqGBK2dVG726coCVVcM8vZhmd",
  "key30": "4An5p2Y7j96SPotpmbd2QzbRcq7pbmzvKGfTHugvoyqn5PtYeApPsjxv2T9B7UKYFmFdpqkDLdMVpzR48kVzndyX",
  "key31": "3n9RnrSsE1PJEhBxTGVMEJVTkYz6JEkZGEWMEKS6ZyvA89itTVgwhi1Fvkx42Tx1i4kcB2VXikDKq1Awt1o6Ei98",
  "key32": "XoUMoiG38SbNdmtLPumppAUCppeHGuhVa8TEtEbJ1mdUJ9yGZXBW1EViFD2pmXNPmee4ZWQCQwXCJp6zdv6b5KT",
  "key33": "EHugFbG2GydhSLH3ARGo1518rVgGUcGjrt45NHhXNTfW99ESzQjq2A2m58RJNQ8KjzQcdqnBGhTv3VMHcLq4MBH",
  "key34": "2uxpqHwJWWp4HpmtiF37WwyJb5P17UXe8zuCxTbfTRyFNHYhSq31cgqTRPk5EXpfJ7c6NqqPmtX8zFj2JmVHHgx6",
  "key35": "2qowM6CVEFaaJ9w9N6nzd5LHwytT8h54SRKWXkp8pQ554zRjPp6hobjP7h2zLLgco7FJ5xLc8NWnMtj3o2XDtaAz",
  "key36": "4s22Px3mPx2rVcBkPYbYoFcHRhwV7dk31CfjE3GoRiLiBEy7s2psKqgHGDxAFRZ9yXtHdKq82a6jdX8nfhJYmcLo",
  "key37": "4QpEGxyBDYx8UVrNAwcWWBaXccEF3t1KyuqV1zZ2UcLwXLGo4neorCycUSKQWsYqDqRJJ3XwrTF4VMQKobcU5Cpf",
  "key38": "BgKFA2ViVP8CsUrQqb3oBuWgmjp7EDKBDtS63R8wYeFxyrvBwFqCC8VimDd5ytKc34QkpDgogKaWJyuxaK4DqTt",
  "key39": "3XsMBrsk9AJZA5xv82NzSZZZbFyv7E3kw491hm5LPqJUtiq9DHYCYWZvSN3Gmxi4189JBmRxhGRXMiej2WJWjHJT",
  "key40": "eYosG3Ca5RYEYxJ9YT2AY48eSTWG9NRt7ZFeLDkYdoEtXrNdF8qEJsRHRZdYbLrxi7nVZ9n56EjbscgxUQZeyrQ",
  "key41": "2hjFGmGaXLucH9NTVyQqNkLcSLaiLbPiitZxZL8TmFCiSVyJj9rSvszM2uB7DKkWYXF52XiLBuRXSpbsc8DwLeNo",
  "key42": "3hFvwcdZTCZWLJhohAhWEEnzjkY7NJicznZuV8paBdB5zv5GhmeaATXYxSQ48QPtAZSdxLhcKHxuVwKyQGUbRuq9",
  "key43": "4SyhKAipLcLmPifqNt6E7k85mYDjgrit6egoMaHbaCV8jJJbfSqc6vfaEksf3x5KmPQE9nyKbGnK2oPkzrNXSbXN",
  "key44": "sfrCnVYJqxurn1NeQV6Gp4CxfUqCPrpbPK7nVnbiGnRzu26M1GkXzQgDghFMUm9Bc5favL79ujVk3zJA9Gd57mp",
  "key45": "3V6vA1V2YBToPMSQCuwpfdVKU6vp4kTb3CS9saUXW2UwABkWy5P13HyFNoJcfKidCGYHrkJk47wzeD6SwbDb2opw",
  "key46": "4UsPwe3AWsDi9RmJMJeFLCgtPkPW9KoBCuqUedyKN9YMhaNSviWzR1nrMZnsBNoeQAqkbvf56iUDZuQWBtS8WkdW"
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
