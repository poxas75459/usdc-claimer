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
    "2Ao9MZse9GG2BNn39fyTcePbbVrMTnMiCTWVbGPQPTEEs7NtAu1mhphgysCZJWSViBX9vEyYN6c3SNgLUzfaV8i9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eaXH5nfuu3BsUazGKQmeJu9NgGdwaV15Av8D5kRMpxssCpTvLocw6DSmVSQ71Sb4eE1nTdFHt3NzstVYTcN9Goe",
  "key1": "3fT86xwwjDcyMxzH3y7D8hxCj1Eakbhz3vtAfoXQVXNbbkjTsdeebKKKRXzwQTUb5FvPS2MVMRaCyHZ5Y2BgEJtu",
  "key2": "2KztSobTjM5DqMDsq6ncMbRDsGNL5NMdSp22PBZKhBtGZDskVbYsmRLh11x43jVEPkSCRb4ZXcweCWHdwawg22S8",
  "key3": "ENDw6wcg1TPmf51nLo7FATwf29dqfGmC2uyh8X5eBS47b6nkPdJR4js5FAwWRmccwgfPkYz4e1nGddMRRyTt7uU",
  "key4": "3pA87hcAt2YXDWcjSLtgQP7Z6cj75AssDBSCLZpyNLnmZjz3ftYJWwRzHDUxgYV8ERdjhSnJFzijYJQt9msdp9tE",
  "key5": "5383mK1mWHsYbPubPpZZBM8i3wdVHDbgdGgEyyPUCg2JjB767QFbfho6YktrfmiBuYHLQ1JLEQ9xF9QE9rZz7ZDY",
  "key6": "2o23LXUQtsksi2X9URCKF7oqA23GvgFMMfn8Yft2tqPVg18zvNrR23yK94Wn1ABzoc2BXb5y7qwTCgTx1LMwJ5a",
  "key7": "ob4ybRrYQBQ2PmmGZ1XAQrPvM5QkGb83uX3oR1iXpzJQwJnXxNwvejyAg2heJABZ8f2S92pMChDFnvz2S4QMTW6",
  "key8": "5jdJWkgTVJqnjvREaz6GPLWwMaYB8s5LZrcqKyGTXn3qEyHEV6MtGVxNKQtAHzg3GSN88uDw1z2KR6eovmBphJhs",
  "key9": "MMArq6gYDiuAMwyJfQECV9xhxCvjdBze1qqnzCKn9Lc4QJz4rzPXLMx8xHLGoANCJ5LhJi5geyy2NDvzJZ1y85U",
  "key10": "4USmchJrQzddotZVs88aKcvhk8N6dY2651ZpsweEFsD28NWwrvoyyBZsz6ShBKiWkrFeATY8DAMftRRr54pPXWnA",
  "key11": "5s2x8U1MiSMfHqfUsmbvHvgdFk3iir5DRMRrdyvsddH1cBSs3Tj4af2VKsbhn54goVd19NCFjR1etoLZpiSAtzVh",
  "key12": "4GmZn1ZfPRBPVsvEtrc1AraB9LCRM6nZBNDoLCQmkTWGXBU4dKNPYzVFC3EFzRUvwWYvAZsPk3pZYP4YVn6v5Bix",
  "key13": "5595mwC6zXjuQgYn3E4xT57hwUkkQqeFfkMxSRjhz4TS4KEQuMVBX2iQDdPsCMiAQQWABZmURHaLDZ3ANnu7qBkj",
  "key14": "2TNky2s4odQU5NdCceYHuDFyUJEkmCMrKZXJnDKUws8iqbRghsFdZfJRMCSUqHJmGSGhAH6YueDnFBhaieNDQSQJ",
  "key15": "5hx3EcJBzCn54ThCVeoGZD2C5gCpbEmmWSRd1tYtWc7pe61tXm447zxcfh5mtrCFR9K7o2iFJcL53661XkMLJCaG",
  "key16": "pNe8FA6jjmRzmKTMeo1JSg7EPokHpgM6KYbhwMLHdSJ5VV9TMpgb8cXXVc8v8sZcXH59s56D3FL1niwN3x67aUi",
  "key17": "3YTE3Y2oJ4nq2uacb34HNDqcVsnNST4HpKRftMbCEdxXGYTZvJkdPhMvan9wLVY6EWtKDEAWpBV5Go967hzz7sqr",
  "key18": "5js3eE1S4mMePJdbhVxudu1dgZR3yP6Nec8kPei24gJTqz9SNg3h78CTbsyUpLgf1hayH96FKXRzRWgRhzRXWACE",
  "key19": "2UU7dQjeJmMVMgxjhpJ3BgY27saHV9todtfZYQqXnfWKrrZF9PeavQAzimU6iaLWh8yubLHG2C1CS6f7bRx1bXfY",
  "key20": "4kEbGyvfXXbGs6E53m4uNy85eoW5n7W7DTEj3Z9rJLAj3CtAaTADKx1ztyTgQp7UQXX2m8gNvWWtopsBH3hCSFJD",
  "key21": "627MVkdmvMXtPPR86fSHT3qsJp9HG5MUjnP7gxrwZZufKBLJcf2U5HAqYKvR8LbCACWTTaG9pwcDYVJSbw5EsDBY",
  "key22": "2vKG9PjczsCtpfLfkrGkSnuoietqphoQqY7ttAgixx3X8xpqer2JNfU9AyUSFh13M28NoYNYU8gtqHTiDmsgvYEP",
  "key23": "4dhTHQLfaeUHHwCoFG2QgUArsyvy7cengZU83rKA4g9KeD7hFT4KAjtDLnmXxJFwWSteEP91eJqKuZKbr8GtuiCM",
  "key24": "4hLUc2X65am8zqHmsxMNkUu1SDBfoZ7vvn6w9gqPxsXRNQpxuNb6DJyUc8WMpiEqz14yqdcByPCuvtGfm2DVKU3V",
  "key25": "sKdMtJUGroTBA5goX4UYEFAjLXrqcJd2mtBWmSSDQqJwiQusxx9ZSNuxUftVMZNbcyqDXBJhrocKDRzJeoc6d4a",
  "key26": "5G17Qt6c5RFEFScmMLEkn1ktjdJGTqBKfahuZwxTT3ieHhxUb31cuGEvRHuMdDFWg9HDGXK5CgkCpZAKo8GEuqXJ",
  "key27": "4JfmtKQLML1cnScrJKHk61BAuVewSoLuDysyFa6NSCbk5acMZxx1Q9euPARapyRon6d3xbSidoVV62LTd85nJL7e",
  "key28": "2dGMsV8HjXBGXgbbx6ut4RbxwSgDLjhs7gZVBBPZ5AXoyZKyttU3nrtpQgbiwAN8tH5byKmLsYxoJmSHNdk9wnjm",
  "key29": "2WBQAT4uL6MGAqNcxAQQNF7vVwrXEhy2AHm2HKwGFrkvTjSsuWY3jxsdsjZr7VtMjk8vH2ifoWfmDsMCyygtQtr6",
  "key30": "5bZ3AgH8DhzPEPEhQvweXAnsLuSZrRoBFXZ4YBPDe351a3DaPG9YhengMjdvkuLeRduGDKKDntJJzxABJRsiirkN",
  "key31": "3kc3VqDNDysUEgCuakSU95MdrJAmX8d7X1RyPLeaXD3aruv3VYm4zG3vYkSCYoCzLdZqwjyLyG93FqMaGvJAwFuQ",
  "key32": "3ohmyV9PkYp3Eka5jxytCD68y4Sxy9g1x5Pixh1L5CYHL1FeLrWibC3MdpYN6b6Phxq3xodneswWJs5JvvrxxMdC",
  "key33": "3kYc7ZF776JXeAdpLqPChcDTmm2bYJ8yCda6m87jdNuTaCh7mCWJmTRwgnwn4wNSpuF8XhgLdZjZYEWzpZ5czpiR",
  "key34": "5nxeYdXj67mGpWMuFYE9YikT5aGXnqhxVvmFJffcNCAd4ss6EMgwHh7c8AwC2GL4322g9ecayn1FK564vHoz4Exz",
  "key35": "4tnEXsnUGoXzyDvfaU7kEy9BwdoPs9hgRvrucmD2MjAfcrk82qcx9TjWdhYpVgj3ntN8LYWUG4an3JxHXCjhTJk4",
  "key36": "3xq3DEkcNW2vNKxcseKiZ5KLQqpdajUgp9xvYA5n8VRZc9ULUd5ehBtrE82RpcuwjdnXk6PzbaXt7brtDwe1hMmc",
  "key37": "5ALquHCF5bVfhDdQtjfyP6mz55fMVzqU2XNaeDwoLeWzfAUaRDNprUB1oAxccJfEhPcPQjxujrMW8hFygNGiXnEm",
  "key38": "59iQz1UpqAZzbACy9MKVnRSUTbAsZ8CDnAYsNvijnPuxiE4Sct2Yar7mKmykjM68jHjv3ehAqUDst7g954CgBUmK"
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
