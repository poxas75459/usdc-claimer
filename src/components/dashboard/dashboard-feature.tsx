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
    "CZn7dR5Hd4Gadp73cS1Rnq5pPDcw535Q4wsm6taDXmP5sZDevtbUZraXQ9Gnx5CyGkeU1k2RZ9cgBa2qaQeoFPD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NFw91GhqWQ3GuZHsbmNDLjGG6SRGDpreCV7CkSsLE1ZSYxGvdgLHRsWaYReQEzff4LhTtUgEH6TLjGCYYUe5qH9",
  "key1": "4e2p4kzp5ABAueEQoCUnVfc6fwGpKnNzGtPbK2JU1drowoDUuDXgNPjEMmnLb1k42KcSShcaBsT8MPpiReVgtw82",
  "key2": "oy7hwEfdJdxtH94fMCqnsoJZE8ZXxyqZEVLLkCvymgBoJKRtrhxCsCkyxivRvDCzJGE45ayjgbyBhSbt3YLePrT",
  "key3": "5s1dzADXXUpbtz2WTQ6MZNXEEeSd8o6sQE9yhmMeU2oNFtdBWCgwU2pBWWdmQXisi8kDeLMsYMsjXAjh7GEcZfyh",
  "key4": "4iEmhipopND9YKvE5rXUtjZvYxF6XyFVW9RRss8hbJhSLuQspfbpogcqDgJpNX7Yfj8qwjw3dGsL7SXYtKsdHoZ7",
  "key5": "5bZo14nKdSeADVgsAqQH9MzyuM15oG9y7A1Q84Stfj2GYdXEzFbZK1hscQRTxTfgWnLXitar7sEfLmAyPrNCoRHm",
  "key6": "49HtxcAbqdhvdRKSSxV2gc2qrogYiJkVUYSZsMVbsAGRiw2ygJcVb42mHznjHebrKDnzVLcnwt81QE7EH2UG2foN",
  "key7": "frd89dd9VqMKGxaBwarWbFpSwVhdyXpQqXH59LGDuQwVE1hqoh8e9ewH2jK1T5EzUKgQxwXvAiAhpYKNwNnpGNo",
  "key8": "5oS14M6H8FsfF3R8hVACsc4CWnDHPXVaofySq1p4boh5GHMcjGsRVSAzoELCHL15XpYmFFy6CN5Ryepi3pCkL4B",
  "key9": "2rQLteT1Szjs6SMM7e91yrZKv7V3NAVABERjsBs4nV8SHtsBEijZaRk8dYJsiymMcTVT89wPRVxjTbzTMM9EAfSh",
  "key10": "3XakiyZsPaNGcnx8kxeVWfw2HyCA1En65vSMcT8X4hNfuW29e2hJ5FCtieSBW4G5V6RmzNK5HN7czs1Ag6ZwYXjy",
  "key11": "2pV5No2btv1GFLKWn3EXuKa9etUKH9MgYnxJ9EMrMF9n5awmpbtASY8XQuemurwzih4gyuan4Csmmr1wnWu3kViY",
  "key12": "4NabnR9eFxongmNWyPRndY5hXRQZc1MfJpSByxF5zUbMjK6d7WFMAVW86FmUqmafu5xwz2jyDeSuN6sfBv6YMCru",
  "key13": "3g3zFPbwAe2Nq1CTtox2ixbQ3bwo9VJzr2GzdW8om75CmV1gSMhWjDtkcoLm8AGzsdGTTVstKW4Tkh1orBk3PBB4",
  "key14": "252w8oZExYSHropRmBDPc9nZkKa2BAB4gFV7bfWdRsXw4trNCyk2WvjLdjzPvCHqMP1mSZKXrQWTax2xSQsuk9aD",
  "key15": "w8L2ASLzbRKywweVBkPRjDnm3acs6TJ9puqDPbwtBRuEQ96nwK46T5xHoKGd1rDh3ZwmgcBKSNAgNhxopCefDaL",
  "key16": "5jzyxVfZxoFjALTHokS4Y6Ljk9yo3481qt4nyWAiQwGcvthduamNr5EeC3WUCSZJ7iMoDrb7fsQEWvbbqXdFWv8C",
  "key17": "2HRnHaxFryCpEGuTc57xd2eNcPRqYH7mMKMXvUTLkNGo9xR4DJs12jCwWoGB3L1broeP4Uky3gvfPMtzgiwkynDT",
  "key18": "2DVdbYhCuT6tFMipQ8kDGxFokQMrsK1bBpveZH1ZU11rAGEWg2tEYHcGbnjESMk6SV3JnTuYHHVy2pqzd1ngaccM",
  "key19": "rrv34P6n6JUsvpAtJSarruR7nq4ZXok1aRqAGjyBKJVgZfSNPsPxUB6ScB36V6w7SLY16s2VcsrryxgfZr8as5k",
  "key20": "3VHkfoURab6dAcY9fZnzctDRmENBQ4YZeHmyfapDCkhNirMgUPZoKnMKLEvbEPSRdP9Nxix5BbTxVSAGzY7Sctef",
  "key21": "zUJhzqfYX3STaac2SsAWwWoaEf3xGcdiJJUZogKJBx1sRTcwcUeE3HnDLnqvCYz7B3q5NUTRfCJsARXRKXsg8Rc",
  "key22": "4b4yVCab5bTQQAR3v9ngjr37YXTb2mwUn6G6HkiEqcntXPdscrEfgQqhBCbF6zYoVEiBMRDjRmJjsgMDfCbH7MtE",
  "key23": "HcMbqUhQoNdTXRU2AApNcGuziYBb5GdMRVqNgBMSk3qqeGM6k4xo6GVMUk4pa5icPTpMazJFqsy3HTxza61tBWp",
  "key24": "LVtGth8Cv8igiN8MjQZm8F8teQaA3S6NZhNziwMGemhHGdcwGakrgAF4Bc88YALPqDPomzcGUh8kwgMSEiAKVyg",
  "key25": "5ophHaqarUPSwXipvRc2CgDgKDzDWB1zAZXvJo3mzUZcn5hoBhoBUSZvYtHnGsshDip2ZAVfxgvCGn8RwSdrafdz",
  "key26": "5ufdzXHfmNv6YWAZBDFaUTkMfMDyRvLAdxbeDL9TZ5Fw2YSjYBYKtmTNmnk3H3QoSvehz5Gq7WdrLurZyonG5Bcq",
  "key27": "4xf9dEbuKUwcF8KiRsLegqhCnrJFqKkX8nmL9SQ7nqyDd252X4wAkXRVu3iLiTHGYnEExuBFiEZ8CEw8pafXFTmj",
  "key28": "2bAvJTCtPqjVyUk6JmFCA7Wx35jamGALUBh9wZBWXYrCadVEQB8Kgj3GTxQ3Z1nAW3zDQ5fk9scfL1wFc3W8cvi1",
  "key29": "4X6mN3KSBRyknZxseJHQTXJWp4TwqQwrvLBRmFvMnr77gzvSBUoirfn2AhSt7XAz9TxsXkKQcCnmkMMy35sDBbmB",
  "key30": "fi9CMaV3rYTxgnGxBLC2sM2QUY3hX73qKAyLRLAqLyPoGAuRjdTcEUnxg2hSzZrYnjCgpkZFk4z6oitMoVZKfxR",
  "key31": "3oBp4YY69tUdcQDd2uNtbKagUYXVv7Hrix4wNS8qLNA12b9YtkzNgCwvap6bKAMPtwFDHHDPgZ46qFkiBgzhPayD",
  "key32": "3PFRQYr39sEVpzCAHafad6P9X3yub76vDJFYgmmPwJmReU2K1aY92QHHrpS8rVpAceHbv9TFyQQyuEyMZZW6Ew5K",
  "key33": "3zd81bWUnBAcVUGSnskgGWALvpeC3rmaNATcukupZwu16aHdJrdSfQdBRRZjzwJfV66y3AEhmFuCn6jwDXjJZRvz",
  "key34": "9LiEHN94ZxarJVbkev7hDuX7XWRxWZR3Hkqfkaxahzrjwfc1YHuSUurVpvZXLvjVJftvHMEpK3BaxgSriJzsH5Z",
  "key35": "aLcwrg9RqpXyn4PajMx4TgfYs6st2eZmZnhnbQFW6EssZ7SAiHSzKra4khUjpDofFFknm6LNkHHMZSatXVTSKyJ",
  "key36": "kbWbzYk5tT2iUmbSTbWg7KmzGcgcDn9Yzqo7SYpvRFahwqkvUb8KWSmgE3zg1EjgG1ZkrFvYzaYYNNAcaVcJU7e",
  "key37": "4UVAEPij3kXSiwfUvW9ZvnfZP7SgfGVfCEdTWbm2URGohhU8ZrupmCLSc2PAgeP7FPHiESR9RxMUu4gLsrc2bs9j",
  "key38": "5Ms8sWJG1WEJhCZ93TdWkDr37GvvD7cNt1vjtUXz6wiF7nnvDnGESz3i34wcD17onmswqkvzk3zYBqPcg1e4ZAf3",
  "key39": "4CAM4enPquBtWud8VDZZXk4DWvjbmeMQN8pbhrZGpGMe4iUHo8F7grqasdQRj1p3qhGUq6tiNB8iUEccs1sRtxop",
  "key40": "3Rphd5ZvXFh8ida1NSdWP5ef7UctyK9Cr7mnTdw9QkKqDy1EFxU2nX54TfnyJejyZNnXjFAc3cVmipkCuK2PAX8T",
  "key41": "3s3xqworp1ZU8N6wkV31KbJGoW9fevzEsjkfmUDJYkW2j1wfWkXZ4KVtGtuuHpJh5wk9qf6g6aArHekGBMHBMzSz",
  "key42": "to6y8m2HXZ9mvq5CCVmDm7M35dc8rKBXBs9m56kv5UUMSi7ascbMkSKqC8miskMwWJYdKLDNHzD4Gv9hkcd8LRA",
  "key43": "2YCV6BmGRKbky8T5rccz6UgNDFmHTQFGhCcCJa3BPX1vzJ5EQTTccktYwa4qEbFm7WfcgAmoYHk42Np3HUzFiHcb",
  "key44": "5rNNUNb16T5CmHKszGCMySHsZRKybuKxhjBanmqRZ9qNaWkcyKM4zqVwBXLT3eU7AMXoBb8tQee9wzEZ4AmKtEDB",
  "key45": "3XfqYzzQxUgW2RrFU4zD4SmgRWsSPY1zRyn9wUH42k34aqAiLAuCUtvuentcCXUaxR2Pk12XqZ2rSwWeVyhPcjPt",
  "key46": "Bk5PTXRjFL8pqJJmv58NLjDPRH2RaoRqbB8rSe6DAxdp6an9dLFBTmVrJownwRhVuTWgLpnsQpL6WeeQf2oCraU",
  "key47": "6A75PUvQTRz6yeRdkViXhkLQ8vFdDej5PzWpCQdfJ7rfjogppY1dkoZGCEtSLdXsfE1d5G97AmQhDAM3QVtoWno",
  "key48": "cQXnqXYRqXap6ZsJL3gs81SfALix2AeKFSiTgEfVbkAwYCKJ9HnrPwtMYunGXXjFNjX5DAjDYgE68tJG9iaZ6ah",
  "key49": "Q9Rp7hJKLeX8V5xxGLyghJVhN4Ft5xfr31Hby9o6uMe4z2K1xkDgx297zUtBBe3gzWy53QG4THR1THP3wp6QeUk"
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
