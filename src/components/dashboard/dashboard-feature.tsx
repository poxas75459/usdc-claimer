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
    "2yceboVz37nfYj31W8PFJv97siss5b8KctVzabpvKEhSFxGneg391qdCKuECfBFSBYqiQaSJW1TaDKrRXhpDVRDh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5txMLsoNV8kB86yELBHWGY4nq98yMuj9vVBMMQhQwTJzgTYBxEgqtB2KbnKR225T34ZCpHBRSqRW7nLohmrpPgx6",
  "key1": "3vhfHsAdmuYKq66kyCkSCVjteAzULASrZXkLEH1G9nzgxmVJ5QrkJJNTrPRwPPjDaKQfxim7dQF3wFYm7KaWmqsZ",
  "key2": "5XWStqoVSJfCAetjv6DYcXiyXtQzryFCcvL8nbnYg48ZMn7NyZRLWQidZpSbJXz2TBBt4ErKKXHLt4NeMoBgL56N",
  "key3": "51YZKhx9Ty4xEje9Fuur5JdHK7BFmR2vvGzif1KdWKnGaBMfyoahaTdWN9Rg3cPFvUziHDqN5jrwgjD6K7KWdvyZ",
  "key4": "2XefHj8hWxrMA9BSNuEBSnhhne9uwrhMmCKunZTy2CyktYLou6H4XrnFymTcECqAv7Ttr1XQmNstMQgG9D7SGmcW",
  "key5": "5JzgJvjK4q6hpdpUJJcnmGKfqLzs3JZZ1G8tqXotAo4hoNXrMeoGFcTfoACgFuZXTFH3CEt5qU3cP5qDyuMTi4v9",
  "key6": "2NT8sL4Q1kTuWqAzJa7sM2wCDvi9dbjE6yJ8PahNQZ8w7ViJXqRycuiMw52r1TdpBPVtjvvQCBL7AVzecsAVuSbC",
  "key7": "593vkyZz6HWFhPQvZ89RM8b6vMB54dXJJvmvY4XtREFgbbseh4U4ZoSJbyw9zGHDwvqtZXSQEtKAwntaniaSNg7T",
  "key8": "2kMV5g9AHbNYsvmSQqKX9Qi8giUNwCtm3du2AYykaU1JwJCvzXe2n3BCJVWwZAknfad51y7X61pDZYWE4f5yKYEC",
  "key9": "tdBfTeaGPvu9JQxQHJTrFnf4jFjtGf2UP5SMFagXiV68SQ6W2bVXrX4yrKCUJsDJ3AW7b7YYpathc52XtMjeNHM",
  "key10": "ym3eshnwYHZRZda4atQn7iQJu7y2WJt4dQz6N76brANcypaQedzstUzNj4tS3oMG2ohAy5WpFw7HphMKrPToZaA",
  "key11": "66cmtx6ZiAxowCXM3dCjFfQxhffhs23ugbC1PmiprEAKVozhu6TtvfayjDwBQgK5ZzWSArhWhQCaYHtCKzXWpMwW",
  "key12": "4F43UB3WQJWDcA332FB6HTEKMX2i9WrMNReWtdSM6QbgG78vHyABxKMRseZZ53q2bhnF2UbBtCz7tWwhPrMEpNme",
  "key13": "44ckssRcGtrJ1VQhFtSnKGGAn7kB9gcjwQQ64p5g49H3qD1ktxNBvJyVzo2rumpR3eUAPZyPdy7w6ZNu4WdX6h3e",
  "key14": "5SSRAr7t1GwVpqqz3Ypg2278mXvw7CUPWskT12iJQLxAVY6WpRPvnjVLpZYcHGRCtxchkxtDLn8VhQqgs22nTuGp",
  "key15": "5pdZWcZGAd38p2AqMdktutDsS4qVdKy33R3soocFcFxqoquFJ3oQ5Hu9LF319fYf6wjkGTsyTgdtnaacACzmgK3i",
  "key16": "4c6Jzvb7UCZAJU1E4r2iRgZozkJd2KxkDXVT2LmMY3eqFdpFUFjgNvPRWrWNtUQgR9913o83bVBgZg6kzCRWHgB5",
  "key17": "2xmRfvjFiZ73A5tYeh5LcjYZa43ooiNZVPndMRQztSfxyjoHsRRYKeSnNosk7NL1WY5akK9dJQ7wzEM6WvmmUBMF",
  "key18": "3Yx756to4LPAzA3a7xrQqP9BSV7CGQwa7TtUhbYyuD5H4mS6yieqXiV2Wc5ch3eFc8ckMkStSUg3YAskkZJhqxKE",
  "key19": "4293ANENs3Gjrjs5t24vCCKe5foUPmQzNS2n1dAtXzHTQNtTc86n1apCbjdrt7aaJrufFqz9N7oo9DwN4QKKdZbk",
  "key20": "4iFnjWfoLSrNbendpWguopFG4vfZ1X6KnZh5XSkWYZkQA4kbEEhaXbcCksDiEcExU8KMUcycwDpQrPtgUc4RdxsT",
  "key21": "zJNVy53fuwaKiVrkX7uBrW84bqPwRRkoa6Bb9LCpyS2EU2SGfD3hZzYeniXbj1Nh1mEXgFhFdPurKBL5eU81qWj",
  "key22": "5ezTLRAMRnHqXiiwanZ17TwenJoYA2WFTXNatFzHuDC3yb18faAEYXUQRcR5hFShMX2zDFf3z4DBwhMQkGBftHW8",
  "key23": "2X1aX6BmNqmSzXM9cjRp82LLaiGZYKyst6QowDGVbXWU4bUwVRM2JrY7YrVH2dmQoScNUMFCnSBhsVgn4fmBUa8v",
  "key24": "3uQNc4sWsQiQVuAFPuEK952nsvU1aJ3HzCvPooGKiU9qWWr2Jh2Vp4S19tehER7cZZ2KfT3GhvNwbmggC9wBvwoS",
  "key25": "6B1vrozpexT1TTrD6HzHSYrpAsWQ3eScngkTADXJ1677YSXN9WnndGtqfbxPj6xoGoTRbbaFAT3PXWpRRuwi6V5",
  "key26": "2xaPJJfpxoorse3YtZRGhMiEgTD5Cac48td7zuUwH6stWthPzrw8ESUhWvK2ugHDhS9EeNrhYbX2PdSd35mAzCyj",
  "key27": "3yv6wgm3FLcJRGrgFv9NKTzVxsmZnCP21LcUYaa9eMbZKdDaPbzdJDwV2iWDxaYxsQWsuwnLJ9ZU4i4nLQ4v7Eu2",
  "key28": "27JBdc2PzMQQXPTDFnJCFTD45rweHEVpTkoWwD9u1fTsokqtni7ZQuJuXi8sR864TvtnMvR6WsL1XB318qX7ZFBf",
  "key29": "gFWexbzV4DZBQ1K5CFyWMWFbykZ7EocT6exqf1XYAAkDpdfyRLUwX5q5TBPGqNF23oW3tt8R31wrgLd3h5WHkKF",
  "key30": "5uXke7YRsMTTRnR1sM6pZuE8UodCyMvpsBdstgJXGj2i77FSqWukmyjKnVBBdN2aQShtH6E5MUDV4feEh2XfHUtG",
  "key31": "3U8UFJekucY8n2h14J9KTpkBoB72ZKaRz9wR5xLZj2svVNBQ45V4TT31v6REAM9tMMCL4d5nsRWgtcKMuv96e2P7",
  "key32": "wAwqARNstFHB2WSekrPnLBzdPGR4zgfhkYMaPNVM4AmjV1W1tN1ve7E1HHgZfHwBvcntwvMUi8xyj7a18RgbKHr",
  "key33": "36TYnWefHh5rVP61RUsQCEku2BzCWjCCEUgkNvVfYur2XNxoALhpvstQVJL64c9djAJkQXJCEitpe2p3ma5Af4Jv",
  "key34": "4CqcfmmeGCrXKvgDDC7g8cJQDxC4xQgAcTvoxwNck18uFSkzaxdb2pvqMWtAKXSQxsiGNZ7SNjv85KkqyQZu7SRT",
  "key35": "2eor9tf3oVWdTw9iRyCvuxEWGLtBNnGFBKJnxGuxjqyroY7Rd5bdfYppn36uP4z8d65UM8qu5B8c5TV5UjdRQwNc",
  "key36": "5mqiQGFX6tRLK4jp7anMMTn3QLT9DtQZms5Czy3GTtr4ADkvHegukx2KPjwhahjrpYytpUPEoq66St2ZMdx9MKJo",
  "key37": "ntk9rKpZLbKAsCbYHTuYQ8FgeUBzMAZsK89jc4MGSJ1PhWXd98yv4S6Fog3JzwQysokURxe3R34BTEz8ho9oLCd",
  "key38": "4ueRXBrUGomSGHwvF92bAUcuYehiSqdSxa7DLchMP2w88h5vVD62QTE44cM6RrnLTCNn3yvdLqWzbgGBy3rmYBL5",
  "key39": "2ZdnCUVcetKtgFefAwqcpDkfeTW9EhncHXYTCiLDo9VdDTVMh6w55QtPDydfaWtjiMVN3CwVMub9mp9gcnbTBtSC",
  "key40": "5vZkHSzcSJuF3c2e5zoXPVgAQhbELS9UBZiTS5FeP1PbGM5fMGJf6Dn93og3AT3775Vc5AMWMzgMwz4AVXAiKUNz",
  "key41": "3ybcbg9d4ScpN8XdgU5gXvfY3VPyhyaa24LeazzVVBWavu18LYDovqdcHUoUGA5cedn1CT3miNRjhjjEDnMAWmkq",
  "key42": "5mB21ppoQBG4c82u7DYgM2YkXfdmoQg739Q4gLW2LDCbmBg45KdpK6eeFQcipQytN3oHezgsocGS9D895oTn5VVj",
  "key43": "3RyPEPVGGkcLouVri5jyhSQqgPYMVyZ9s6kv6VcMdTA6C4udqPiSoYuNyiZxCbM4hjocgZn8bRp7MbpQ3FdBJHRA",
  "key44": "37SFSsngt9iS3dupUVQi7jE7f2z6SMyJ2Rdv6dRkxS2B13ajGZ98jj7ohoJ3XC7VguVNzHL3JtgriC3APMKbZQtB",
  "key45": "5iMzebJigfWz2kTV6gKpQrVEe5CvTDV5SZApUL2aqAZ5tuq5RzkYsJcWsHvymvYHRToVocHMb1VBhbXQ5JWprtaP",
  "key46": "oLkNWFUFykKXdDbxbcSNV8W9oUyYFt6FpVMobkCHTd7JXJZnP9TvkwXbp13LYX159ze8RQqdbcn2j9zeEyjjaML"
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
