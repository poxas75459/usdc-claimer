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
    "2EHUESmZQnjHRVqXZkQVfV66JiAd6LMq8zBYYA68t7Kgdk8PShQksjTqJM3ezuQiycQv1DyqFH2yBhjrUrzwG9vR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Z3hsKiVz1zUdSWYJrKnio2xgaovqX7bSafs7JRcp7yW5CLHv2UoeaTnxLKxGdYs7P6hAJ4c2bg4h3w5tBcQR1wV",
  "key1": "3HvF7Q9G2FCPm6VNXyDeXBUhKRJ9W6sqLfBfmQBR1cp9jwcwHEgFVm6m3RVuUd4EtJkfJr5h68jyzeon6R4waWyd",
  "key2": "5LTnjVyWWiCrR3M9bhJ1h5AVRuYxAjRvn8o4cq11Vfi5wR1fzzhJBPGu47wDMApuRn4jrfMQacfWwwphj6SvdoKC",
  "key3": "4vbngwQrH7mPsAd4jZUSPvDJYR12i8cWhaNaQvuVv2mubMNsZF9KY33zYPLxVaNC126K2sNSzZGias22Dc42mCeW",
  "key4": "5Rg2tTrKWyYGJWoUyMdBWN1yTZZ21Nyr9nT7uGN5PsbuM8X7363PY8WtuRRkdtvSp4cHfos4DMCKmWAJfoPXF2vw",
  "key5": "4bJ5N2aUE7CjMxf7Gf9KUGpWEj1b3rF1KuwbiRJDTkvpu9vjqo42fanTmZjkptSEcVCxvg11YWhVqucytG1uqoSo",
  "key6": "3g8NPdBzHemTtyPCYCz5Wnce8fGsLdKZWvZthxhepK6eQFCWnLs7GfaAocbvyUeCzhkYVhNvfdKu1esE6LpgLN2j",
  "key7": "2dNm9PTr5yBGCnUP8d7KAXdE4y6HUHChRAaNh1XCStEo8NfNMXkp2Q6UtBHb2Dm5suwjND5LZknToR3r1uvxU6Uu",
  "key8": "42m78RVG81LjH3hBS1WeXgi5wCgi5SRvYM1n2vcRCDp3ky9ijpVKTq13D8uCDtGYgsuLzB9bmydViGRxonxRiYEm",
  "key9": "2U58KJkigLj9Rfg9WT628twVAzkB87AKfnn8cbSJrzKsRjayBa3m2tF1WSL3PJTE37kgzzy7PK8zwgVkk2QLMmJA",
  "key10": "35dCDJ6r6rThWpdsF4HTQCm9HvvstqugbAxzaxYuWpqc5wA6HxPcu4RR1smFD8c2piESrt4ncZY69pXjhtj7u5vy",
  "key11": "2rb6kqo6hAtQTut4LyzYrwiddfspvAQwkV2Y8cfvyAYqoUZjT1c5ZQXDQnvCoaDH9qa5vJfe1Kg1ZoRK5t5WN9xF",
  "key12": "4z9VBibZQz8Rzrw22SawUf6yDk1XHNPnTmi7j37zsgKMnva1u2aLccUYhTFWomZggx68LhHBLEmqKgGi5LWyTutz",
  "key13": "5Wkdgg3HTXhkAG2UkaVSnGk6syXReubLaRReotTXw3YFjuXJqBUWVD9w61yzG7rNKBBVYUtBgn7no5vuNvW1ZfTg",
  "key14": "4rGGwfojEVzTRAj9zhK8Cjx69y1uwGhmne7VTPo7nVDADpjdRNxQ1xpdUKSKfAtnqALBFebiFj1viLZcVU79gndV",
  "key15": "3Kbpe8YmMXmU3yCPjADq5xk85mK5oj7pYdRXDSvUztxdwi3KmFWs196jNhBanKoNDqGJCfyUy7Qpr7uK9S5nzPLC",
  "key16": "3oNamLMkxb2S6vJsSnhM1gSGfZD4EhqMfm6UMqCGpQnbJAeZNMxVSqDAuA8NP4dmMJotTKTrbKtSvbbxcruqhhE9",
  "key17": "5ngfA7UMZ4ZQWKiFr2KhXH9TzdTyDiEkf5udyJ17YCYDYkonRbxXYUnYPCdzWGua6PReNJCea2fcVhWmr7YxS8hX",
  "key18": "4ad3WAsQLMNTukcegB6ugNehpAodBHvbvkJRHRGMQrW51tnstJgu95akWFUKDFHZQcMqHvVh8N6Fjx3au5q54pkb",
  "key19": "2PyfFk9nWHnmRo5XQP6HawUYTiknhi3xnnVwoxNgmKNL8KVHoyRodXqM8qmKwb2obJvxVCeyuWXMtuyzpEdZTZNq",
  "key20": "3kSZG1d65RorSSFezNxYDMsd8xwGt3FkSCivA1SYBc1maZN1wAdxjhsmxsgLq5a6KkrMboaJ42okoo2Kk5kRwX37",
  "key21": "ojbgwiJeJoWi6Z8hLEpWeYKip8PcVAg8r72oq9z35xD5NsT7Xc2GdCnZjTiz5eJXk6f9dG9hGEwZPGUpf4sh8vb",
  "key22": "p5Ba51ncssehA4J13pBoRaPn8FEs6rpyMP6YNsRczQkH5PRZV5WU4CpjX8i1CAkcCcK6c6ewiwdovfQN4wSn6a9",
  "key23": "5oMbYNcFammAyZeFbABD9Tbt2H8LRwGZiVaoFgvmJ8N9bwuc4Mx6LBZqHuWAziB9mxva1zTrKZbSYeyhFpvNtfiF",
  "key24": "EGwftVYvdPj6ECQFDVC7naVGXvujduDoTCRiDL5xCuwMPk1rsdR6XgAvPDcxLiT3Lvg1q97krdHBDWEaCCAjhNd",
  "key25": "3nXkrHtrcDr7TJg28gWq6ycjwRiMdnNhWor7S2RQetuBJfs1N9WwiJurK2QPTrm6xvieWzDawccfcARtkVuEjf4D",
  "key26": "3mwNNF4BqRdQJjNgvk2gix8jQuM7rKwpJ8s59ygpRQ8ep3NnKZBVRrRBy17mZXWk9sggEEPGQ8JZPZo9e4bvKAQr",
  "key27": "5s8yMcWPSMcAZ9KrjQir1fhYMbC3PBR9d79xGDg8bjTbTWJozaRu4Xt9ZiVDRbFusaX5hiHhK5WeM9VbJ4mBCD6t",
  "key28": "29DSLzi5Tnhb7DPL9n6rBYP5sgMYV6cLqPFMAoRM8xqforL5aVA1xVQDEYPH6JowdLijYPNDZMGV5VexxYTAdFqc",
  "key29": "mQ82NyAWmMHBpzHMdn4DMqad6AMKBgh3DsDSoPUir9moXExgrGqDB29UH5ut1yuNkEHSsoAXj9VLpbMRv3j98gt",
  "key30": "YscuL7TiemFSMxHEcGNxVCcQhCi5vUKEc1qXTvGcL1JaJuyC6nt1AxBR5CYGjcaTygSo3R9o81TzJUP6ERidfpP",
  "key31": "5kb23bhafT4X9fECL8QcYaN5aGtMrEjwCHiGXBKdvgDvC75sew24k8r4RPnxa1ZiHPZ52xEk3XxytzJCTiV8ATHB",
  "key32": "4BgsrvD6TtFWuEj1qv6NHmrMgwfugebTiECcmYKZ8hx5urjH1piRAxEGpPubGqjT8PJe3qgbPWiiu8DCZnnVzuJS",
  "key33": "5J3pVqhu2pNaLH7BVDosyRbqiV2FQ7KhZ8Cx1jizPKHbousJx536NASmCBmURkU19gSjqJobzwX17begQjCoTa2N",
  "key34": "4orwWu8d9oLmw9Ac715qud7kZxzLyU8pt3na9iy3ToWGavvpWRydERshiec3gkYeod4BtgkU3vViXVMdbdDc1Jyh",
  "key35": "rXeJkFHwPytVgTQjjGpno8DNVYHZyHHuD5GDbohnR46Tz3gCGetfP7uHLmQdD1RBbTbFXNm6waua69m179PMK89",
  "key36": "2qdGhdE6xZc1sq9Uah6okL3CxFweriujD24NYGSNHX26SkQ4nEa1EG794KTgBv1NssWWdE9n9M8zyLvZEtt6f6Mc",
  "key37": "4qriUrrWsftypLbYLC1LKLrma2fEBgdNaKY6qns59WupRehDX5tVr1fucJY1f4CPRvV5SqkNAPLo1GP9AHHmd73C",
  "key38": "3EKoMmtM9YJLHEfywydFwu5F1ptUZGe4tjeYsvxa9E6wj6GdCUkTJHUa73MsWsgqY7nW8d3idXRdF6LHEXFYi54o",
  "key39": "jZVQD6ASoNZ8Ej6DSivNLZTtPtJStW2Qnq6eUf2akScsFWWfFt92ahXMuoc5T4Jyo4bqEVqDhQ8a63BHXaJGceB",
  "key40": "25PwYTZ3oF19Fd21v6dRjqfqLE1zTc9t3WoBgBgzBNjg9iAFWguRabW6WdFUSWjFjUKZbzy9TbrNVknr7wJFNsKD",
  "key41": "5aorJaiA1dw27vDwKYe3oARbfxMmhb71va7iDoYJV5GMVMV71FTDtofEdZ6qpdCQ8JpFzX22wnQxy8bqiwqQFgVw"
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
