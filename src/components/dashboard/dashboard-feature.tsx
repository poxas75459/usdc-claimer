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
    "2DBZwKszMYAePx5f5vcqWfftWxRVEnVq7E1iaqRWb7jDJ1QB89ixTeBzhuXqBm5hF4GbQKGsQa3aKDiSe3RXM5S2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zZj7Syq8qMnBGTcd6J6BPw6GoM1d2dsqJjqJikaga1Y3pRnce6zoQbGvqUocoqmXyYHeSTHXrAaRbCSAq7Wi9KX",
  "key1": "4m8KENXRkWYRwXcQ2Q1Mkqqq7s17gozCiXSKF1nZVpFotnDKorqTVCieB9Jgsx92osD7RU3eELGM3sv646qZB3xu",
  "key2": "3cxq1bZ5dAreXaRwEXJLmyYercEwer5QecL8SikiQHawV4GoweTUCxByXRYgnVQZYWSJH8Sce2eaU1hwzeiDMQQt",
  "key3": "3jSkyimBTM1WQg81u7Z4GF2YiQrq8XrYdsf6AQrB9qMWdX264fm3zBES9sq14PNdCKNemarycHxbr1yhXvyEa62R",
  "key4": "eWuFEzkYzUqebzbjrXdwkWcaT2TyfXkjwGKBiK1bh8xKMYRwFRdK6PnRNdZRK3xaPbAczYaMwDNSyUxNbCtsc6W",
  "key5": "4vSuURvz52JUPQm8K4XoCem7KE5W1nGATiNzJAFjNfgTGzGFxThXZUfKFGhUjh3h9TfJrf45BgRv9A6QAwHyXowd",
  "key6": "47weKZuuUzJbmsvJwWY1keS6kD3pfXEvjxrES5jUtd9JMyjZSYfARrkgcdu65CY4SJnbT4ZDheKTARMtMUiJtVc1",
  "key7": "dWCbjEJei8ECWrwV1UQbnxCUig4ANtkr3bAqSDV5RXmUE9rFxwihKjQtWHu3TnisDEpLHoAppx3YjsLsrd7GH5F",
  "key8": "1275FAt3iNfYYBHhX3qrZ7tzgKC1LQ9dfMp8rcDPMWPzrKcwtCF9W849KJZsk2m7Sr9eLDcXdMDfrQXaJWD83vSi",
  "key9": "2FVdvuGVHzrRdKFcjJZLLGiNa52hcSgLrStQCYj9Z7d2yFKJdFe6XmYnGNEUL2g3PU88QSArCD9XiskuftyapY9X",
  "key10": "iAtVRJiRus47pmSwVgUEojKojhSQwMcG2k4j6xAfcxEjXVbebPpwk8n3p4KwtRbeBwwzydT7LXPaKLo7bijKHmn",
  "key11": "zCVCxS5Y2YHAw1w99PPqiaYhcP1KSDsC7LxAX8k8AWocYNekJuzM4kPUvevTS3b8eiNqGv4UfpZtnjhEkSrRsqt",
  "key12": "4XM5aXyCJemWkj5ZRK8L7VCH6rdB4ACusT8d1XtPNPADZU4QUGLJ81PPFCAnc2nPEUpmjcHkKyRaBoZFgaQTGnsE",
  "key13": "3hxHvLC6ZgbL7UBSq2kreyjicQW15HgSkeGS7mW3j61ZNv6X7YjnfWAyUgtw8WLXdzutkPJ2ESBdjpUR85QLBzgu",
  "key14": "2dqFk386Jb2kLgvk3JxgSYNKgrpnpCWEWDbkKFsVyQto3gHgdGXRPh2cKtSayij3oEAcfxnXvkJvmyAKMs7k9Mvc",
  "key15": "2Q9MqbYJYn6Tp1HS9gKpgewhb1J58AL32BjGxtRio4fTpL3HH3Zh9onnLWsrgF1r4NhBLmLqvA8zMXW9GRECgwSm",
  "key16": "3EYxEhAWuks5UrTFPxhTs3F14ks4kmGF5Uv8RWNCsbTDPvSoW58toBrobzqHXD2orvCxL8JLgKi9ndZ2vV9V4gi",
  "key17": "4PRnaWGisgyKiukHNSisHjoA3ZxYzXuKC4bRF2eNWNjRE7kkH2mVhQCtmHxWidtAhRM5Yosdy9LHSQD69mpH24E3",
  "key18": "4wMpchudm887C5wW2VFZ2abSMnyPJNEXy6ye7YnhkuCTkRfckNBkWDz92GEqdhpqbZqdGsUBhdcVmVJ9n2YWoCho",
  "key19": "2sxT5NxdHBig2mKbkSoJ6oH6kLZsEmSpaJ4uChbzRMTpL3JczArq3K5snUUNMWcXieFPgS3CFxm6mGWzH8qXfr6q",
  "key20": "3pHntwbRupcEuR1DABz7MBsdyfA8rGK2h4nmRuEY4tprbhDutfxVkyuzEiU4BpDLfDFCdhfk1cmyWB4eaPCt7Las",
  "key21": "3DfL47JNNeyDv5YPobAcS6tzSbAA3svNdQxXiXfzJ8iqmyNp16oLfWi2ahGCTZY5EYDgychgvd7RDeQZK7RguWkg",
  "key22": "3AqPqMKTUZ9rT9xDSaaVUb3XRGxyksg4rssr6zBWgaTt8kfMxG4LLuhdyRvVUJ7XWttArcncVNoz5XbbFw9RVJGV",
  "key23": "2GxW4Z6xNMJVpqTZwDPNAGeTksDGoNeXN8nvBbau8CEcBhA5CYdVjh6oKuz4wSBYAtkWupLFRCx46B1CxEYN2QdM",
  "key24": "3AHxLbCXy4pGCmUpvM82s2F1M63Vnj4hZzTCWsUWunBVy9rZV4Aefrd1CBc4SPJksPSwVyCF9nmhyR731CHwZqXr",
  "key25": "5WtDjL2pFYH6TgHYe9uYvNyYNkLzqN59h3NMbGhuNmaRJZAX2oc1mhK5MdEixdVgYgSxksEy7T6NGvsuZdBLzxSH",
  "key26": "39NizNxREMGMRnGbf8yH9ufUWhzgQcoqJQTs8gnSU6VPfL6mdRFngYQCaDpb8CrDPznN1Hako9ikvoBG46iyPaEV",
  "key27": "2YJ1YQ8xaqrLmmiJBaPgYer9VG9m5YGSgDn8SMxz8c4iyy2heFyUFEMsno2Eb93njC4Rx948gh9485fH3YXH5HV4",
  "key28": "2ZLaY8FPADw5vRUVnxGDiuy4k8ejaZAvmwQ64ob4RWD2odpM3RWeB5qih9gnJs6iixBv2ahNMu7puYw7tkZEwint",
  "key29": "2b3tWaXf1RerFGte6tvx3aoVvDKSoo6zykwpW9CPcX1EsZUXw66bu75WEUdZKEKdhuiBcXifQ3osN4VvH9uau7qv",
  "key30": "65PUrbmu7Yju7nV69VJ9sQoPSPcp9YjhXLoJZDi14YesVE661rhGjHicZW1e5QUq146rCZHrxXAN4R54JcgZzUYe",
  "key31": "399J76ouub5kKDmgWPqqss2544QvG3z3fsK76XhEa3J9qstWJFnoxSG87TgQFiAhkx39CvU91N1DjPAbdnCHiBze",
  "key32": "3NyYkokZgZxYD7pSF4SrCE6nJAf15FbwmXcChiTs4L3Pef6dMKjJyHpwgh69MEKKbwwQMyFnnsz7FAAuxXeNBpxd",
  "key33": "5gDjweUWgd1wAVaYEwZkj8GSH8Z31xb681HW65aUNeLjZ5TA2zf7n3NU8NAx149MHu4cCrQUteLkyzMKg1Cu244D",
  "key34": "3kgp8GfAf9LwZDfQMNXBaZnabfeTt5Lz5TCimW33oC3bZxgJfu77X1pxjqr5cGXULRz2znT294oSbFwACMtzpJ7S",
  "key35": "3Esd6jYff2rDva4F8rXAFWKK3zBiWKMJJgrvwqViBuf9HHEGMb8joG7gWuena6579cRvLxbxgH3qdo6PqXfwLBpb",
  "key36": "42NjkX2ws2EBFh2CFotA9Y8eRfYm5fjeNY316C4xd7EivunYGjxrhVKFRQJYMdnJtYsGEh5dZ3C1mFak8322BrPW",
  "key37": "E93bX9dKqA5R5ZoF1ETn67hz4Tn2hh5myrV66WAoCyyarg1GgMcVhFcwkWLq4mEpu8YsRF7CLQ1cZVJ88Q5SAXZ",
  "key38": "2LxomYxHVU67W983J4NvqfdHuxXujYQYnUEMq14MuFNkLSJfyRopWJmcWUKx7giNgQKtc4nH4iQ3RsJkXoYTGw6N"
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
