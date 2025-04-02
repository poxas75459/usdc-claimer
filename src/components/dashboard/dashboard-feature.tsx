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
    "5egcifpkU1Qa2EkGkdmthgzqBcnMLikefTuxVG19pecUP3CKd4vLaTJBbC92npazjcnvzNKP1vPSEBSMYtxpWWwc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2X1Yrdm2AwPygg9HJPCewUmErgkELZhiEGmQd72FWCwyAf48WytAeztUeJYZnyxtzyUesRDFpK5WZDtm2bnJUwRz",
  "key1": "CyqRBzQRVhYYMJfgmwJ78LD2yXU2XLjC2bmYd4sZpC5GEN549Uawe2JvCuoDwpwTaDoNa16Yp2Vr4XrqPfHNysA",
  "key2": "4psdTmsBuALdRCzAsAZam3DnLyX2BKvgoPZdYqajw2S3eLbPZYerNcr55mTXkSqvUYcvd3XAGZqnGyq68QDwHzoo",
  "key3": "RBy4VdAwRputxptorou4FYwr5ZtdGVjzXKWSXGULCqjfdjugLgPHSzLWZiphLi5MJ3Qn6D3k5yaXa6ewkSuStW1",
  "key4": "3epvJb4YbDQ7T363s4mfJUL7MVWRWvGS8uLxFnKeAC5x1cfW5AmcrSZH5FuGFPRuaPJaBsrZwoq9uq2x27N7Dykx",
  "key5": "21Eos57EQcVkGrKzCAKUVHw59oQWgiFxpDMU3Kx8JNnoWY7VcJyuB1myoFrpUyw7S7ncs42oNVvDTzS9vgdJfTBN",
  "key6": "5upmJQx1VvhjjTS7myyDkAk2xTM7F6ider7BpAFLTLe8MUgG1qM75GxYba1VGKBGH3G6bCHCWZnxv6WEM4hHCWpg",
  "key7": "5c8VamtJ1FyzCBWMGyHVKvBzbbEGqtLswqNysmbvJS47QaCgRkHrT6gyhvTLJCkVuD1nN4u6dgBHvbx5LySupSuX",
  "key8": "41ECatPucRkszEHiYe6uczKFMxDNxZB2vn2jnSvzmBcMyyh1ZsWrZacyeiStNbwb9SwHLxJ97njfsVBSQ9ZcZ8x2",
  "key9": "2AKzgzeCL6eN7H2UbuhFsSSSnzLQKEB1B5VuGXVW7vcraYtmHywzq9iLPeFxVhU957k7oRec4RwKLC5wLPdiDWwS",
  "key10": "2hWCxyZHyBBA3RoavQeQQLTFhADgrTwNfXCQVFjE1Jsj2BLVfVU6c84PDBCcHgwButiJiDNdenUcfixnKRMcio61",
  "key11": "4DpGRbDxX8McHaFe4L4H9Gjdc4GJhoo2mZyWzH9S1Q6Qx4sk6araWSCCAiq29N77H8NQtHNK1pc49f48QfbdDfYF",
  "key12": "ESzjm3dQbzHQ9NA7Y4m9i7GFzREebJHoxnaUfcWrXSbfvMXdkDB4ufBLgetsb5dtEoWENkZSPEi3p8RT8h8iwur",
  "key13": "3Lz7D86F4df3BbXtXhY6wtwP2HoKb1eeZWm9P7ViAGuyBNrDsLQJ8D1KK9PF8eMACnwrGqfTkqEcDyTreWX8hB8B",
  "key14": "46RgUfRfRKtzfKx2DekC4vhVkCui9rkBgfSpZh4WQV8SNUWzCfqpo854p6vSPSYWmgSTLpue8z4hyznyi6nDmpv4",
  "key15": "4zK8qkzxRahWXgCW6waNc3ymnKEPWYToCSnMfjtsRzrsG7Ge53nS9oFZqpqhNyv3S2Coh7cEs9v9xprqQFHoXo69",
  "key16": "4MFpbuKkuzCjP6ws5ThmZ8Y7HhF1t9foPx6Jep4EQSsf9yXKWNidaBsXvPjVxTgT13VCCzUYg1wunP6Zuc5W35Mx",
  "key17": "DdnWgMYTZxFJcQTi6ztwyrSqTMGEYesCky4ZCJqVxJCHo53mSFdiQWP4riTCACnmFhejW3sUdzH696xiWa1Aywe",
  "key18": "2ZtHqqptX85mmPXozVhDdVPkQaK8XNZzEkYZymde53uBZ5HFyY3wzdEHcfeAR2ETePyaLSJASpdpt638EA3iQbrv",
  "key19": "5mbgdjqFxa7CabjYEkubMPbthcj6XfXb4RAR1ZpN4FmU4ctynSbjTVNETWoGg51ms3A4bbxr6GJXdUj7RKHw6Gp9",
  "key20": "jw6C1SHc7uUW8m7LB94NgLHqvYcoBGp7yBTEMBiDUir1vntkcs44Q4m6jqyGWFHmbdV4SVrYi596tACLkqDp3ox",
  "key21": "gE1pybgsKgUmRwP1LJsVQ3oGEYMFyjgdRg82B6kiJu1v3UmzuKvv9MxAAisBzX9xq4bSqi5Dak86nZ16yzKvbAC",
  "key22": "3oKGtJMMkHBifdGjXQB3KyrdMLx4HdXNrTL1ZWf6BtiMtAojbnfANffBxm33wibF2HQ6uaqk7T4mbRNJcnxv22Ge",
  "key23": "26qcud68fre2stqrGsYBqLSLgZSmJAU3FEbc6ho8xhWeB4UgA8mfSCZsDqAraFHGm4THefbMcytmhiWWhntVnrAS",
  "key24": "d7cciwg2YtVDBMYBVsfuiR8NP6KmZmAVAH6MQSsX9m1y9pLcNS5kBFBmrp9FJ2bn4S3zq1MydRmjURZpjMMRAjg",
  "key25": "4KzZbUqfX5NGiDxKmTZJSLrRUqFi3YFsj8hwmpSE7cg4sTuFJz1CZYdmBwo6YvQ3oWeEU2YtXdfEbdqRKo8hcAHN",
  "key26": "4cchBzpn2MqXELv3BySYf5WbEUWd9vxNSqvnw4V9HD8LiwP1s8papDHuNKPojfp2MeYaeXuNu6y8RVX85uHU1eiR",
  "key27": "HgpMUY58gUtcy5gfAP12Xp8TvzqeKS8nJTf3s1EFo6cEZK3p4h9fyoEDMn1jPgKGyPsyWoKryDX7tBTg6AmjYjV",
  "key28": "3hw2iP7KVkv3CJ6icoTiEmtN7uFN5doF1CL9h5cCPCwkmoNpdtxeuE3fQdgPL13SqKRLEpJBXvNcEuPS9C1TyuCY",
  "key29": "mx1o5xARJMaqRhFRq8LtSKk6MMD2GiMn5YAcvj7Y96oXxJSDHtiq2BQvchMecRcUhgNjbdT1WGVFtgdRDqNP6gB",
  "key30": "5Vj8AEzupCfob7boHjp1HeCUWjLHL1L7f8QfLsnE7toLQp52k9cAYq2Vxs4arQbS3PBZKyvgMnAorpeF8tP1dYx7",
  "key31": "2xbGTf36QkVraDMvcnhC5PjjBeDL7d1Qe7t9juzwfFGR9nQnyHAC2rCcbx6UWdhtf6KWSeoZEGYnh4vcYKTWZ1Pq",
  "key32": "2BwaS8AvmWPyFxr1oaPqEB4RPUoPUKzBwbqeTh9i9dvqdYUFCH9rfpuWPMNMVAJLnvArcipVyhUbnZMdsGWJoHUV",
  "key33": "4CRwZ1g9yNVDeqMEsEqEcJvxCRjJnivgDoSUwqPgAAUsB2Mm6sBTtBuWm3J5HsPEeF69u5UvskVZbZoxNkyu1dQb",
  "key34": "TMn3GdqAPenQLXMHL1k65p9rwY8eWLBVtakrx6xnmZeGHDPJyNC8YdkbMcy7xNpSXXebr3unZWA7QMvgKnsoY1R",
  "key35": "2AS9mByMaRiXNYSTXiDAkXUGg84fBYuSb3YhQjfSXRuPRiWfEDGdrCbeDUp4rffEro66urKt9frprcBtm1B6vQug",
  "key36": "4SpyhfGnKnoVaZ2zKJx7p6JtA46SR2p2CUAhe1mLNLCpD2UPumNhujZydY4YtzvjreBWwuoTNsa5ry8gRFwpjR7E",
  "key37": "3dzEjogcB9BNjyMLLsy7xV17bi4Y3tj2HwVN4Nex6uTGf2KxxxUrqsdEttF4oE4tqff1iFkghfm84pbeWZGYBQuN",
  "key38": "5mkfkQ8yaktu7EyRNYwY8Bijgje6ujp2CFwL6e1uQsKt6h5KS9jUhTzVoqNZKYbkn5wK2syto3Bb6FH2icKV48ci",
  "key39": "2DJtGDgPRHN1FYiXQQVUQ5aY85swPixX2pQLcwJ4CmnnS7ab2n2HinTVUzHNRrN1yhxijsPWLhj4FkvgSbwhGZkv",
  "key40": "z56LRNosnV5fquzQUZFew6i57Ro3kiYvKWtDcGYCoXRR6WoUcrrtFY4x8f6UXivByYezsqjuSCuzZRmpoFHPoQ8",
  "key41": "2QcXeEuz5DTw9hfCCpTkWxaDrLcvEYNKSzo3Qozv2nRu9cAQ5TakgwWLfVWd5mCTUfdyJAwUwcRzSADjTxkc1XCb",
  "key42": "koMb4CJ5JfwpokAbFfbSz3hawaWFUSn7qpQzM86Pd2JmjGpop2tvL4C4yNSaHuKLdXa417BNPSWeb9Ex6nGo55B",
  "key43": "59QvmvzoxBuAzsN4ua6RPQPgfL9ogKgDWKfRnYz3Ew1hUyUdA61wKK712gwkZYPJoXiJVvH8ZQr12MKhwTyUnfag",
  "key44": "4P3ny3tu89AYrZr6HsREZ7tBbhCh4E4khVFmTE7eFNopoULp6WruE3DACnw3L8NjW5cVcjBimEQynghyCaKcu9bY",
  "key45": "5y1WHb2h4RaW1CWpM8sCJPdbE8QNFfff68y6WsT4CaquHVRZFcWZhmPVw3QHs7dwNfazkmPJxrFRbTByQS9xp5UP",
  "key46": "31ciE1gG2vPbo2Dkj6yi6ZWMucMQKUBvh4r95YT37bwEDVhGWRkvykd84xzdLgdD3zMGHzZQPh6z9coQHYVXj88t",
  "key47": "kxvzuUwundfquD8Jn86G9FBy8A5PaYdTP5LjuPuUPrx5W6NT5bLpiB1Qgsu6zkxLmBpzV5pv3Zyv5SWAeDZcYxm",
  "key48": "5aH4gSkiYtAKQH6gqZauxXimoaLUi7hC9ohXmksjDhqG7gBJtdCw2pEaxE6nXZEtwjmVgE5uDaEsGADCZ5cdZ8Se",
  "key49": "2cJDdpdgxzAvXooGuLrD8GASS9CaiuNHKL13cDWwmbDqDRuseQzYYdVAJtVZwbq97jHQsanA6hPCAeVg7vG4Hjk1"
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
