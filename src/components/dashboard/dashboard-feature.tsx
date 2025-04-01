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
    "2uQaQj2NLU26jNVyE3fs34kHpoDapA6gK1F1gV64Ga1S7NPXvWFXeftgbwmAGrf4KskTnKkwxMkkjcQHHbbT9eVn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26b35jmex8tu9Xv5A5EnqG9SZBi1MD924dvi9GikYNAA1u4CoWxrvm7e72pPSu96oXEXonF9J9sJeDAUu1cvE58J",
  "key1": "5njxZ4SVtDADNXHBj3GmpVx4AbKeHWAFLL34JnXpPWmrHNLWGHdSoo3udDF7ohY2F4UjMVD9Gj8jBx5JNKPSEaEJ",
  "key2": "4s9nKSqcU1ZxvUpmEfYLXbSjL1nNAEtYQwNkDiWBUZ9ZTSnEqe6R9RYwQvK2wHgD1vS5tKWKiApRSmKmL8pMzFWy",
  "key3": "555mt6LA957rXf7hinR6WbeFp5pknoU3asTVrt97WZUbpS3uUYbbqEPso7X25jSdmEpbbRfaunAR5ih3tYPRGUgX",
  "key4": "4RGMRhpyvQEE48MdPLmnKL2Uquk95Z2YkgtjPPoLbcp6AbFcBvPfDsCJsVyxcD1dJftPLmiZm2bSdVWrXjreV2nE",
  "key5": "DiRSUGRafEJknzHNgTh69RoDYTbH8Gx5jx5h2S3bdGxXtX2wT4viGqBwpbv65vWQDmxMrxgQ7Jm7nYuKCMfQrtY",
  "key6": "3vXjFmvArDzvdMAxjzgS1oj1NkrxWR2LTYPDhZhzGttY3Aw3R9i7VF2NXd7raGumcCTbeRq6sUNrYoq8gDEJvjdD",
  "key7": "c2RXwHmx4Sytsjz9nDxNEJpHmE9q3TTgyg3eHuSRid71tK6uFctHFguRi78iMYKbLgvUcJB5UnK22JLQHYMS2PS",
  "key8": "zNRqU6LJmB1pGvqG2ZAAqw84K6SsYL9VcHfz3FQ3Fy2PCohWgpd4LewYRtEuqnwJhvgG2WYjimMqGGJJhWAchXK",
  "key9": "36HLLTkqnyRmqFK3njkNyeLL9Kf2ZjKC5UhD3k1EcBYeDbihH12s2JD3YHPDVChqSKTyanTJoeTMfeEAvDPo9PMt",
  "key10": "5TQPc9zagq3TNwzbzr9RvHxNmFAQhJbxPfDX7kQMLBopPeCvTktYW2tieQW4U8sEuR6qLz7yLfc5A6hjTpifmXyX",
  "key11": "3oQV1NuoJcAanxybsDEucsk2ap1vU3VVeiDPQ4Yt72svTWdVfjErKx98thCCMKBAMvv8Tii4BKFBur4epcZTRjFX",
  "key12": "2SqzYVjrcGB4EHuzHWDCKCjzpWciTJX4hjs8STtJNkANjsQAAXePAd1cHN1b6JNTViSjpXvh6saNQVJM9YehpD51",
  "key13": "4j6MZCz2KSkWDF7GLJRgG3gj21fhuqmRcRT3BsyttdMfHHtGt19mjVFFLXvtk9MJ72SeCu6k2emKHttkrCxFEZXb",
  "key14": "2PrXJUZf6m1FYhtNsLnzsqVN3sjQqFSXmDynGfYwNwQznBEYt345kSjW7pVTqmZVWzK7fW4Uhj4hopGALBQgsx3E",
  "key15": "4mN7j915VSWbUUYUKguBKFwSG3oWYNPmJg3xwSBZjN1y1xN7zDZNZkaf5Z2RybjdkuCCyY9mRWqb6rqzkjfhMzu7",
  "key16": "4otXvzDV5pWhi2tBfK1WfWvXnwAXgiXVg3jufEuAYyDk74DeZGye4vhFZGCauxbouTV2ZLTg563es8bJ93AVbQKr",
  "key17": "4RkAXJJKXkgQRwRiaC46yAQFu1NWQjHD2H5m3BFhK1WJBfR55tBHDamYukPfiPbRv2hbqMRsNPbAdjfsFn1m5LWb",
  "key18": "41Tt5AqBvuNfwuduVqX7fjPx8X1UsRKv2Smx5vPm1hKZ5fNBHpkzt6ti6gfgZoDiXPsZv6ZnmEJyKyi43CJwHtxW",
  "key19": "5TV1nWGrYtQjU99YaJu17qPYM4n3pcsUzJquCxCMCDGNuddE1LZa9yAHGT28tmoLgp4UU2wo6rJ6PMr3wXQodw1t",
  "key20": "3NeWrRK3gNMLL8Za2oo34D3HjwKkawAabCKLGZJwgGosBSsysiiQUK5kiFTiQ3NqLDCZvCBbvCEUFaHs3cHWLfkn",
  "key21": "2tkWwvBKFkz6omu8477ZQpEzWw2kQbnUWjHSQZnhqhFRvLJ7Dyn72eYTFctR2WRW7q8g7FafGzvhrFqYzTqTmiru",
  "key22": "3Sg4pwJWAQBkMcbRMXvjTngC52D9AEhK7Nty5G3QN54Nex7ES2ragmhJcyM1PCrHscS1ZVf9HMAgKX8noLgAgfXA",
  "key23": "3i2MLxSh5vuF3cfmX1dxEAeL1BGBCc7t64oFhr7bhQEAUrtUVdCCrvF4vGNL3k13xHVGgscDMzLygR7f4oA8uASK",
  "key24": "3odq9FcLsddhX77ZsbjXxCdPyHydXMDihPGmdWrEgs8nwKq4eofbdzrUp11PbqHB5McErbZwdrN24xpX5GvBoPWU",
  "key25": "fnnEGY5yFyWeewzDjKsfE3uDEXifRaziuLY3B7w95jDtftQiGqecHkrXER1qPgZgYWgAwij2PaDTMudsBowuMfB",
  "key26": "2GUibY2gc6MQUbcWVXCbkarNe59yPC2pRyDBzfMXwcj4viNr2vH9WYS9sT5dZz7xC9TK4acAWVBNjKHFQ5egZtND",
  "key27": "31UjXUXUX2Z9a2xnc5qSmHrC14ELsk6EzADubQpyuAqAddZjm93Lv9tSkWBiAtXdL1sF9awbw88VT7K92t1J3MEg",
  "key28": "4w7oqbdFvGU2sBhac68hCJ7BYdVKbxC2KsMg6PetkumQs3mQTTvxThb9A6NNb8GTqsQYZEUXwXU4cAkekU3fAfX1",
  "key29": "5HumscWwfivm2HEu1yoCxPr9WaFjYKisaJ8qPsycY7Pe77TU66pfnDquAbvF9SQibEJiFrkkM19e7dEoZDiw2MVm",
  "key30": "4QDg6V4JnRbGkm4w68DgBm1cEv2B5FGJvxVGfUnSc1xGk5cNojASeedxBozoA2s7NoUENmCEmBDZATLqQX7VmZ4H",
  "key31": "4kNnnAoRqfntZXRWaMMR5bMKHiNDWSVyyAtf4QcmKRhnKE3yUKFebB5y2MoSCdCjcdqpMeT7C7fopedJbZtid9Tp",
  "key32": "2jUkefNw1KpppsgoSm58nEdcfj6Qir6YifZT9rbk1KnJWanwMTtXzWAxzGEVeHs12BRVksaHEWNDkANtcPs4US9F",
  "key33": "3FSXYYQL3N7moFDteM1AHUqR4NpNkvMqfNVPBfLVAqjRzeQCVj2PE4yS6CA8H26KZ5UgXkWB46KkGXFP9U2EN2Jd",
  "key34": "BquyK53rrr7cbAruyEdr1hvJtFyk6G7E6aJisbcDjs3dXJuD3FTimQjQcPdLsBjtMkxubHVi2Mh3Tky6vAU457q",
  "key35": "UH8diABe4rv9eKaLLPFEMM5HpkCa1cDw9MNHNxkUBLxxGyRLydQKpL76StNz68xtAgZbQ4x4MCmtDb5L3e28PUT",
  "key36": "4zvPXmX9UNuiMT68ykJrnzeQR91BE9o9oL6F2fEFJn3B6sHsW6ZoLuKtdJMVhf68uMEkvxu5KqJCKisLpkm1Ciox",
  "key37": "v57hzshGS6tfh9F1HXkJtHc2jLPGwzXX3tczS53q2NqdxLPGRzEUoi782i6KzGmcQsYtUnyPHi6ANEcw4ULb8ED",
  "key38": "4RLhfDo129nGcmxttUK4YAHN7dTRK6HQHDovMiqGkasaZcCWzqwXr5zAhGWrKZqwhX79DV7Tv9zhLNfTdhDAVmdH",
  "key39": "2JJYSkEnnhXZREuA4aYHopNwzVK8cnaK4KzoQEmBMyehgkBsh9WPrU4CbuuHyWoyVko4dFauRrNWPHuPmNZ8atXJ"
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
