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
    "3ZNFfNG2it4gEHAwtkrKqiBdHoxX8ZZx4f2rFdCwWFa4DYN9u4CXG7rviuxCTxdkC8BYRavp4KtLqn7FVV2sU9CQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "247x45yuE1Uca54vNM59fXrsF67E4PLLg4dZg2GSrDJYVFXQvTwgtMTgVsYGEXfrpEyzT22nB9DYBugjBA277AuR",
  "key1": "5EKrZBWWKRYtUeHABuzaUdPvkfB1Vi3K8A2TDNYPgsYBrymfT5qcc947izCpVtfgWHXrmnFKAavPoCoVShSJaCv",
  "key2": "2Gho6Yaz6n13uqEUsuEAJ5qgdwboamupiRD6QFcaTXUDQ8Ap7SBBWobP2zUgJf3kcZ4ecCgogCDqBPdtV7DV7Mst",
  "key3": "288uQkXtvtfqD3NhHXpi36EJd4ffUYsvL1jotnycfqTaAskuaSDQB2dkgWeQMDRF665qaZdbGxJ4U8A8vSiayXxr",
  "key4": "Gf8yQ2aeuSwu5W1SBsmdJiRkmjvYPw67PzBXbM7mUjQGz59tsYJjmxtUCPe9yis9EY51hWGeEGZKKUfvfT7ytCs",
  "key5": "2hMVauCC2bqwKMxfNU3E96aApDyLAiPKNxLcFx2ZvnEiujHYhDy2uLRSGj6kK2zdXX7MXSL3ozK5XKz5LxVP9Qde",
  "key6": "2KzNWmCM3jJXiL5c9a27tPgeWwNTPrWQkL15LmWahiRrTaUcvHW8so1sTmTWBzn8TfbbW9cPQyGjsSsEJR6qeSVH",
  "key7": "3HUKeeLv48HFnYUrZ9hXcFfC1Fwvvvy5HyPFYEpeL6FfDnNjQmnAudLj4kJv8gs3A7N4RjpAC7ocPB2MhZMnZdU5",
  "key8": "id1cesTSXmDyuqCR122bGTibAg1kMkv4r64L41bw8LxMdVbE4hqazLHZQAgisp9XWYx9QX7DZvPCHebZ7xMy8Cr",
  "key9": "2WnNV2hEcZKPEo1wbem8EDUgaL5PtQgfLJL6ccFBGVefbec5MEyFi2UZUkYwbUq2kkAfWemUHaf2fA8DocmwWL37",
  "key10": "4mnfXiEsuVoG9iQSsxJ1c9j96x2knn3o8JWbmC3pgTAHaNZvo3UE5d11KikKycy9QamESJ2daUHmGvSDQApB7nvL",
  "key11": "7TBwq5ZDVXgXgAyWTGihaZQ5H81yBQvoRsbXtaM9tFjemuY7PZBH3bCyDCTJZ2ZaD2y4WQ2FUr6pSorqaunUWeZ",
  "key12": "5ChcZcNGR6wU54aJ1qHc6rUhXdBT2rksskLuWvv7biaqX8iA8TqYA7mg1b1dx3baxzoixqRAHDBndX2iV54frQSN",
  "key13": "4eAGwD3KzfYKXsfW2TuN1Eeo1MuNhmHC1dV23kXCYwh4r1hxmxEVCGZxG2QaH8C7yUPUnvwqq2X1dk22kmsHt8g2",
  "key14": "35xWyDeoNfD9YUneVYXxEHzoazG5WP9UNLgHm8Z8hDQ6AjA8td5EurtxDMgeA78EXy22xnuHqFfRRuhsERG7cg62",
  "key15": "53yf9rdfzERNN1x1esxbNXjq6UcSmnB1mk5VUWKFQpF1wA9yWyB6tU7mStVgT4xmkui4ZKtXA4uRH1DzETydC18d",
  "key16": "2ypmNeumV6AA5xh99jkAm89RvgNmFGQa3nJu5wAohRtmsApaBBV3DEnJoxf8zrNK6psaVrdq4iRRd6tZ497pzzA8",
  "key17": "5jBJirzPNSg6zQ9i4VcPERb557gvCSLfaETDCpJMKhp2oQaixUMnapLb4eYa1hqa5myC1MTRuweqFKQJXH969X8V",
  "key18": "PBY5jGwVcP4ZvS7x58hzrsoeYtYuoDeYk1Tjze43n4foVKUnGCLLubrkvJa9FmAQpnpCda83Z2gFKQYyx2XhPid",
  "key19": "FAvhMz2QpMbgvdn8zQoQQz2qkV6z8GDQnptGXcQDk85VjjUkePcyfoUHW7FVYb2pbScgzJtVQdp8tT2WHV1JpPM",
  "key20": "aJDnmxQkJoFT3RWMgrHBW1znoco8eS64R67763EBVbUA9dypFsHYMk7GWXKURk4DpR6KuWGEiE7WDGPNPqyoXNu",
  "key21": "5iiteNE5ZD4UBM4XmESPUkdhDbFkVbgdjLzTC8ykrQkoz321YxFkrEd7xVV6yBsALiLEKTSaXdiZCuZd49gaygZj",
  "key22": "4amqhJ3M2jBNmKa8boLiysGfrPyHBUcp3Y7Fq6qQL4fFB67p5PZPZr5CPboivrQzyAukHDcifcV8dCViqNJU4iG3",
  "key23": "3cWd1UAPiKLExqAwkASCb6cyTAK1v5xv7WM2453yQWgBGDs7NhjjLfYY1XfQ2SCGJhQMvmwMx2rYY2U4y485f2oK",
  "key24": "2R2eKD4pUuBoRbBruEwTXeQtGPa7QGUaQqzMHvhDAz2rwuTk58MwnwGH9XWurFEpXcToT19zfgXNC4CgcCqenFEU",
  "key25": "uYwiXz1mAaNvTwBM3XrKgWDoinUADVyi1qFUFHYq4XRBQboAXpJbd4XALejhe7PhFbjk6w3ShsaAPVZtNLFKDFN",
  "key26": "2sGorJDneprJ9hzvRxFLatoXyEdWU3Ta8AZ95U7tMCfLKFi2sEtLV5UVgA3WCAiuAMcYfQryUyds1eEnd62pUE5B",
  "key27": "2sqT5Uv5swywMdQxktpZTD4NB9e7LwcMenXVQ1NDCtaFzMBdwjrwJC7QZgukV1PbUQBmuFkDK8ikEBMMVSsHmWbf",
  "key28": "4JSvd4dd7a8kccBCLGVim6k4y8YkpiZCAMy1yVbiiSNWfcqVLoZVms8UaDriR6Ewb8HRQZQbnioXnBSvcSzgLMae",
  "key29": "4GL8NTLbUbjWagboGk5bpRCQxk5zdaVZWD6QCyRjPNhwCUWKCT2aU2VdFACBU29XzCLWvd1kQxovk7pyy77MCCBY",
  "key30": "3kJfB3u4zuFFJkPQxGGtPZbpnjjxF7J3k6q3SW2hwAsnqGiiz5rKuzJ45EYdQtWfp66eHHsjHHH2EUSqGhMFZv2N",
  "key31": "5mrAknyQADB7dNeQdJYAygn6bWM6M6JAUDejQQ2fLipiYBUrkAyJ7UsLYU72dzCcPRXPQAQTERNm6i9HUsSqgAue",
  "key32": "2YTsnLHJfMkC6HSF17E6cj6DVdd9Y2i9HAxDSH1nCkqUdhZSnpnxKfgtd25fJXWGKSVP6EfDwQ5N9iJwUrZ4x5hp",
  "key33": "2cr2kWNy4g6fpPnEVXtFMQGezyRgDSN2zMcdWrTPWgTKUdkYhy2Y387RzBXdbbDvMmLhLU31XMGT1hVW3HMd5Kgw",
  "key34": "2Kic29Nf3G95H34utJq9zoSroUsEDXHkB1R3wYcFfVkyCTwtjuoKAwWVxkBCtKauaQZYwPMaESjdRgTBS1Zy2kjx",
  "key35": "JB7bqh5VaKAXzxryZj9V1BnaMUuHCaTsu2e5K5VX6WbVEmpuZrhxaUHyM8tw8LnS9nte1fRjYem8Au19N8o2bJe",
  "key36": "5sLZCW5MCygWBwzHKhXfV5VTQYfVx9D15DwkZurTWVuQbMnhfPXVZjUCZ9A3z4k8ZQuvGxKiagakKJLgdNnLXAaV",
  "key37": "42hg4WCRuoFBs78vokP4AKMeya5J7zPAGBR4RHK6FBCqTrtwPMKZ7LZDUV6U3xophgc1R4WExBLDMwukNHakzi3x",
  "key38": "2R2min79gqVgScdH4oiivdyaqQb2fewrpnzpWAchspRmyCpnw4oQLtxwHCqQLSpXyP1UYzr1ponTTPnXmQubB62e",
  "key39": "5LphWWfmy2YhT9hqsQQ1uGKhQBsfVrASTbEssQkhCKe4vzde1MVtEbj6BHFfa2ezBFo192eVGkB8uVwxVTkHcjkK",
  "key40": "WnhZq965zLHrLpCFHzmrvkHavAivtsC4e1Qga5oFBYsTB5LSRNWxNLteabP75itgdA5eeRLJe6d26bigcPhyVxp",
  "key41": "gV5XaXM7tYjg6uCqvE37gtPTcvwXmTRh1L8JHu9RVuzhrWSAjZBadWCcWQax5Tw68NMeyJPrbVux3YpnCsQsWth",
  "key42": "59261ReFCHggPYcNs1T9dWiwcp3x55vZ2jaURfoqK5FkBZY6mVAHLvZCW5Lui1ihKtFMUisjev6ANJP9o7X3AVLR",
  "key43": "tnikVVjwnjKuBER1Mt4tSA7ghFsZvufqedMCEnnJAZCXDHmqm1ZhpeD7Sx9aCaDeyJu8F7jRTTWgxk4YmxhK8yA"
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
