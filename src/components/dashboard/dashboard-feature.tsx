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
    "DAMvG3G9d6Gsk7auNM2K8Q1G6RJdfVhAhdb6oXw7azqjhLT1k9ExsV13AXdBa8TQvKaXcSwsLX5qNx86kKmc1Zn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KoewKSQz5XRn8kUYpuQZfGjDYqw6BP74N6hzYB5zN5rrBcdwH61ew676GGnTdz5mrY3KwmiFrFEKiXSJYiyU32w",
  "key1": "3Q1qCfWeHgTLDo6eTThtijGR7pbR8dHEgPxvzkoQAVvjLnABgxpP65aodbtTxfEfge9JFPCaBwXkXLqhFqsSiUbs",
  "key2": "5AigdTP2VoWCxuH7ZHJxW8ajKcmpsibAuKUptgfAeTTZ9HgVCc6hWP3qFU5yfxWg3qWHbkfoq3JrLT2ABxJ1pwwe",
  "key3": "4fMLCmhBsAatwDZ62dMhP6eJMuHNpUr9Upx85fMPLjxwkacg5vLPwnuvzcGWk7TaWzCv38875b3DthfX4zz6Qnz1",
  "key4": "4Ycv2zepWsmSTGSRtBiG9z7pjLB6aHA8P4Q9sWj9PxGSn2YMQ7t7bmj4LcPcu3DdyUFyJZ9mRnLbbUEyw6X8ojEv",
  "key5": "4D6tpdL6DSsGqahk8A6jH8bK5cxQsy9x5mQzCiQyfawXpANhCAaL5ix3ciU1dPdrAj5ZJf6YxcVK6ZPAVeGwKY7H",
  "key6": "9fKWzAXyZhTuN3d8WyWrGhLdvRRVhvqMds7a8h5pQCQ4RHVUEHjEG1sfri1zZEXNsoraurovVtQLXh1oemVa4fZ",
  "key7": "3CFhXFWL2F6mDqiQB5rdzyhKwq8DGBNoSazfUnHSJzyDhhEFzagpe5xQcwpExFim2fXzEax3qQ5pm9VXFdpMm4Eo",
  "key8": "2WUPgCbXxLzrdH9foba4ob9qaBxheceJR3zWGzudpcrn94eifbNBL2B7nJBPTncFnrtmkTq2h7ir5BxKhBQrZTdQ",
  "key9": "4D4Jj23w7csN5gE9BYgtKTvk7iLSFWeXSFFTX3T6rHm5ZoYWgsBSM7qVhpzvdV9CtV9EMAC36J4nuHqLJuLZcEMU",
  "key10": "iF5GoegKWC6484ccRd2e6aVNYS3kn16Me3w4ZqEhHdUDmBEkKnCcHqtzruVYiGJ2jXaP3oNUzq6tLkN4apzamK4",
  "key11": "V7Q68JtrdLrdo8GEuVGMwXpYx9Duh6o74nPCS5Qf8mP4qH4ztn51ybFRqFEdsWQfpipZUDgpWXE13Reb9Ff1vJk",
  "key12": "kMnmGkivgU68VZvcRF96wnKWQtyiXtPwDCoeUi7uSWXhcGzh6HpeztENjogiPnARtWnp2X5mC23Bdv87Wxao96o",
  "key13": "5UedGpwMokXUwaMeotnKArZrA9Yq67QF5gBe5Y2DUQ8UVnSKdWmwapKZF9wNE3rnV5jbxt2a6qpg3xqXXapaNsW6",
  "key14": "22rAYAoKVUrKohhNANH3R4McukR6TPgjLK4LZexuL2iVtt2JbjMvVn88R7Cq68a6v4i8vDXy6QZorm7P1xatRTR6",
  "key15": "3KTNpNa3VAFamGYESB4nENi99uWNpJ8bRAZG2F8dYpqDnJZpug2D4hEhauSd3grdvzrDFC1hnuBh1r3m8zoWZJYZ",
  "key16": "3At65BdhKADG6Qs5KZcDabe63LcRykaES4h88eU9dovM3Ssa9Zx5G2Mn5gmKJcBLGHaej8WPZLvuVzHTfsB4MyrB",
  "key17": "24jjwvcXcqmQzFpSBmn1ZbGZLZWyHp9iu3289KRe6NYaoTy6C4VhYmB1D2TuCjK5i4hZxTtpvP5bTmNxWqK5uiie",
  "key18": "2XnKNTGe2DqW1Z2MrsmnpAdEByQNcV5aaX3xHTp1fuanfpNVkq4qrbVhqQj15acXmkCYiECx2A5VcMagCbQLoZYc",
  "key19": "5AudfCmxFQAUBAmubidXmgSgZaSCzTgf44jCDmxJQU6UexL2ERSTRAED8RCwGREtgedJVQFCrnGquqWcyUdBUQhV",
  "key20": "2Y34GpiHGDRggar3kHLDQaPcybfxwdRzKXLhYps7qVxMsBrxD1Vg67xTPPvUTkc4eQgUiQpJCMvLxJPPjdefgX49",
  "key21": "3em6Uk7ywrqgjHFf4gPKwmz3L96hdK4XhNAxT14sJwpv6NtG3JfeGSkJFe8HGGn4qCt9FxBsyvJMrxVJXpPwNrt3",
  "key22": "pV6qWRFsxZg29e5dxn1X5MRzYEVeGchAidiy5YHHK2rbibzToZvGDDXm4bBsmYgTLMWR1zNuy8ULVWXqkKZFsNX",
  "key23": "57h8nr7zVMzqUUQk3gie7VHdWYoX91F3UxvfMPp8asAbwoW9pMpYKFQr6AxLhpoKubCpXxSk6r5HAfBrdLnQHfp7",
  "key24": "5YFh7xKPVu52TXKV1CwiWxvELyqhhR48wdXpak4ZfUEwSw7n7wFdVeBfv2Jw5WhVKAbuXMmZ2od85XW1HvcdyXCM",
  "key25": "4XAtqjFxpEynddf7fZLmkWnGQkkSzg5ftrrcpTXF3gFAR8SEv6dGASffA27BSrq7f6eXFLHptVy7ychy1UN7WKuP",
  "key26": "247v9qjGBAEdyfoc7hiCTddA28jVZiYSttNeWs2ye76cDtFhRPem3AWEhu7DGQm7bCYmRoV3epKjjLgASZJa82dJ",
  "key27": "BsVc2iijkthAb7LCtVke7JmcAzYeRzCbwc3Q3wo6bE2NgbNGftLRj25ae4qNe7n5kpwAy3YtUMdFAxJWnqS4RiL",
  "key28": "3ww7MQHuemu5ZkJgnsF4zM8nUmmsuCeN9K1qYC4vJgLnPKdZJko4cJiLNVE2zfeP3mQPePyA3HzSj6m4EJXnYrYn",
  "key29": "5yvvZcc9r8w4V7792Uay4f5xHJabNs3nXfT5ivnM19yhbFE6nBMm9ULx563RCkuvdGYmUsZnQrps2zBMtVMQFU2L",
  "key30": "LzbcMzBhRuDkdEEM9jfkeDkFxnxh6yegw6QqSihXH5njGde8LxW2vtwtXW2aFZJsqfwzp1BiMV2XNKPcnaT5ecv",
  "key31": "4MuYt8mepFKQDVHK3sZUaEwzuwU137njcuyR3eYiZustRYceVK3sVzHrNM42dHefHuuBUdNqnLU9r3HEYoXxf64s",
  "key32": "s8e3y52J6isb26uokJMnQtHoQ1fGoQ3c6KkAjgY8XttBb3bHHaAQkr8VWoQgtJA7FuTSXrLxPww8VmHENYn6qfc",
  "key33": "2nHhZacLVdV6t9XKLxNbRNt4trhyQU25QiwpWA1M6F5PJHbAz8YnD13SRDkw1LbHr2QbKXBDeKhoo3m4zkNjR7ht",
  "key34": "2mu483FeiGzYtzckMyPkgYHse8AAhUAxYU7LrWdk64yoSPxcLdSaz1u2vRYcisLYt8ntciFmFBmL5F9ib349ye67"
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
