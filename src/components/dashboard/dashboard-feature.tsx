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
    "5QXKuMd9RebcPB1yVfuGwdvRMiRZnKeN2dzRDpZ2vp8WG3pWp84E7AjarHgBmPCHpygTopRmNh1J5uyeMfanQGuz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eGkH4gQ7ijeLZS1p1d92XhksdPeXVm29cJhnbFDd1YQTSXjmEvjGhsP61vp2mCeEf5JdMn8vtiZ6extmWddbJZy",
  "key1": "2SW28TMRsKTDwyTumWQjhjegLZUUg5GwKexn5wyquwR59yG3Wwi2QKWRh8tUcaw8koxH7p6mTw67wQwQyPrvWkEA",
  "key2": "4cjyART2YhuJ7LzryiBMtg5gehdrNzxzKarYcZ8ZcnAuEvGTwqvHJXQhdTATLSPNh3MWYqvqgpgsvoNDFEtVoFsw",
  "key3": "3CPS24AP4UmmGmu29c7XSm92pKfFhfGJcziHqGFpg7meLN54NyDEZc52EZa3rrx7PuFzWvHqPVMpmHdTVBHQpbtt",
  "key4": "22epyHWsLXyymXcmHJu5wAh2vR9WffXjxYpzHbMGBWWTg7Nq85p5knWaRet29hWmT1XZMT9vHzzdvoeQuJ7QC5ws",
  "key5": "2Rv6HRCcyRscb5sRfxNr9hAgYACTb76bvD39EAdfpbMNWG7Ts6y2VALKPumTAFfVJbRepMLFwbX3rHj4xyHM6sqT",
  "key6": "65MiuKRjU1UYdrYK359m4tqF4gPCJsV6haobiapMuzw1A3jjk4d8m32SK5A3YMQQrDfpjUCDxntjx8W78y8HVd5F",
  "key7": "2xPvZsa9DuPcCQqikizNdiSSeVrQma5fG6QBzHvTQJGxJC3LtiNSJyUqBttBXZ53BgZQjrut8VCtVQMwU3HscF5Q",
  "key8": "3AhC8w6hYtZcz5jTa3yEHTumiFHgxf1mT5i8ZaGwZTAbVFMceWVoxo1Vbp6cGjTp9ue3JwRXpD4vpsKJTQHjGWfp",
  "key9": "2Khvm3ZgcvyLcPQF2bSt5q9TokvKa6JxyvCiTBy8F2Xsj1QrhAt1at7UQwAY89PV8GXmjkngPw5RFwXuXhaqfmzg",
  "key10": "3GUzWS2ajS2bVmmSsmJjh3UrUzLKXYCowPw6YFBdyi4pazXMKUPUbiZq57UPx3J4rhkPmhtLU61Xarb7PeB9hdKW",
  "key11": "43z6B4pu9DaERGKcYpKuYCMqRA7cjvpnYZf9y2142zio2EU26WCofXeidNubsGaqdcSTZk6s5Gkyjt3M5G7Z7SzA",
  "key12": "4M9JaufozkyCNAEpjGq2sJzNgojpFwkwNKKpnrjCfWoEfvxZgAr48GsghBPfrTZCReuwPs4kPWH5t6AcxozPuBo1",
  "key13": "RnfqowdsJWr79UfQysxzrEB6cyyS7NqpzA6rHJuvdhJCQC8hebrLqdMprPdtsD4HQdFxKbGcNhqeKVCGNnZLFdD",
  "key14": "cryWgMgvdag9eef5bkSv99GbBDsXnsCeHo9DetLXBPfrgDVcGgN9ZtkiQUzD4owpDHFp5dUb8PC9U4HQyFN7Psu",
  "key15": "38q3rKDRRdTvzU2MC5YFQ2wq9ixYiNT3y3SU3DV1NQiHApV6Z6AKLMsfTeCFvi54BHXNNfZgPTZwfggor9Ho6s1m",
  "key16": "5WuvGN6QSv6QMG6nGkyuhq92FMnkT2m1BdTKgmHZjRicV2zMBogLXBR1znMdnJY4CAudoNhWETeArbcJ5kMC1GbM",
  "key17": "4QKw268YBYGKiVeUAqYbPeF9Cbnc54Q5DjeDF9XTUG82CDdMjFF3XRZ4sXvV9GijxgM3hhaW8kR1BKetBAfu1AL4",
  "key18": "JuNiwLZsDR6EAJTKYQ2xV1XtY5xkocJvvmGod5bWJyj9MkZvAdpX8xsWLtgiG7tBtdx18sNZyuLUqGuLED8bvzk",
  "key19": "72JReRrPvvsgehZKWytZrp5yM99kPWPDNKJwAKJyiCS7UmTm1b5zpMkEtK8mwkx9qFUpysbUvqKX56RzatiBNwh",
  "key20": "uUZgDkstgCeVthxHTJUodC5nnBUX3n6WdkF6Gi251fBiS7aAevobUDsJ5ismMb1eyBytsUMQNoxVc6tU8tmdSMg",
  "key21": "yCTM8RHxc3imNyqopihmhvX7FEEYSZhxQATVRRNgo2Xy7uMC8iRqEF2FAyimCmBkpdCrKc4nakarGSmakAtTJWi",
  "key22": "2BFuDmFpuYdvrJGdYvhBzzcXmjJ5UTzkojG9ejTAJApaX5mLYKmfX98usMLjnngPQQJKEwRbspC2A16n2gSeQwkn",
  "key23": "5TfdLAjHVDcCSBM7wMHLncp1SDs3C3iGq7GgDazuPJyCYngQCd7zGwYWSdv8t5XF1ETYsR6pkPrSzRaRaYjQJCiP",
  "key24": "S9gs8vNjYmkcTdDHu4KGuCPwaB6aBj6UyN3nHTypY36Rw25Jv8aVrhRzE5kX2QVKCLrQcLnFtHSVs2xkE8q8BPe",
  "key25": "4BnscicLhMUVR6MArLKvBHw7qQib5omJSN9su1pDsYZg6WPgFnYrs3csBsZxxfPqpNmeDS7EJzF33epKGnwQLtGF",
  "key26": "32KxZJNqPXEUAe9Q7FwQdAUyJhKA4b9u61T2ZkodSgApCiVpnQxhU6ShRtqoz61iVfmhE8yH8HUqyMLiaaYURgtN",
  "key27": "66MHXW15nNuSWHY3zoUAW1kyCF3A4xfSAuJDzdqzEhryZa7TyrP1ZZExgtu5ys7bgEF31QidM3XeYEnwx5fBMBj2",
  "key28": "2SrL7ACkxm3hPTMR5M9GvoR5mr8GRkmvohCs1zTbur86NWNpcS7pttWVT2SodJzfav23RzHMrYZGvEND9KYv2P5o",
  "key29": "51aRxrfc1AarLkCRQhFQCqvgLyC19okDGiPzUMJGYesKiTpkETbrk341nnjEstjJj7T7mhr2Qy9LbSH4SK7zi2ww",
  "key30": "3Nb7ifVHoiU7KXECApN3rvPhydSPYTg92jJwdSgeUNswYXSWbuY26uq9LS1rd2rhKGyDtSAaEsE9K9SPnGL4id2T",
  "key31": "5oP8FdCA95MLA2vctLSkJXrevNcsfrwNuPd5yaTY38QgUtb8PJEsxGpQwuiKNcfLBLbPiWaWM5M8uAkys8Gccr3g",
  "key32": "5nHnU59dWbwtLF7vdxghies3tvSejaShy1WoGyTgv5gxz9iTAZvp5mqk8TaJZfxAAKszPTpYF8NKWr5GqS6uJuXa",
  "key33": "59dBjZgY3pckzXmZWfXLPj2RvW9NUzgz7hpryFMuvozHTyMwTe7hjEhWgt8z6qaTTwbKQVekSYg9FJdMx32KB96",
  "key34": "2vS6A81D7fF9nAdd1e6ZsAqcAurZ7rNKJV5u3BiRsbVRmkt5Rkn6es4ZohRTvpxbDkLAyquC9ivMMfKKLB6aQU1x",
  "key35": "Wedg4eJRZg9yT5QXX4Lf6joNk8wtmpog5LYXYbM3edvWBoe7oKLUvezK99A445SvVyJFTXTf8M9zEw3KdB663Br",
  "key36": "2frMRqdwY9NfFA9iSpzUNL7kmN5sgihbyEtp47CRCndNRX4GqFfSTDwAfB3aMJgCucGdhUfptmfMJDMhdwdUi3CH",
  "key37": "yxHYL8zfKaeCrAksr6k7Vfb7iYvGPgCLUQa6MDaufHdcswFk6GgFSSv59k19oRuj2E22tpgMuwP1zSRB6xabqYe",
  "key38": "2JBdeaNW12YZ3hD2cFRNTDQzsL5cgffU2cPUghYSBvUKwRj5sJBckTha6idCv5AQNJBh6WYFw3n7jSNWLu7X6mKt",
  "key39": "2G3cEECoQa1Y88ARcFjipBajrewcEbve4BtiLNHFiHyAQZ11AvwMG1ddWd4xuYjMB8NebwqgLsGLWcDykWFrZPKT",
  "key40": "2jdbHaeM4o5EQ46PTsG2qepXMHRNVdXr3pYMZDkebptvQfqu4PEwbsSejz5WCzqYLxTygCZwu4AwfiPac1SegA9Z",
  "key41": "3pGorvzyNdwki6UXNGZUVgrooUYJG8jCCqtx8rQKqDqLtzyauhR7bEJby7NQXSkHubLSFZKwF4nHq6sHHRc71BzQ",
  "key42": "5rzJyjjWbSQaAncTjyL6vzkRnyPo9tNLjghwLhpMnfVXJuw2P1NWWkkzia8vmbH6GEhz6zh1mbyoxAeHvGKHxtDH",
  "key43": "3LM8gvrXJomW7M2XFnbE5UfnycBVBk8iTPAJyCwq24HHhULypF8bPgz59NgQmATY8nb12SqkqF23xMVSJmMkyzAN",
  "key44": "3Zgc5wdY2jWBfd5dyRJ1ndNwbu7i9sccpVhXVSgM78ubh512r3sig8XsDg7rQUWCX5yKefvrLXLic239XEAgs8Ak",
  "key45": "5cm6Ne9FaRC9cLGYwE8p5kw8Uk9y9vAGZctPzsEiECWXZMcsERyQycJL6MbYknoPrBX7WfFcu1Von2Zxswy5eFDk",
  "key46": "56eEnNjKmd68c8S4SubPBbsX9kHpzYBsYKrvApTbLYwNRpW917Jhe9SQUfCF5KMVK5bcHdtNz2Rj7FcwfQr9dZDB",
  "key47": "5oSATv55kKnqDVFAc3ZmTsoHtqsWmMn5sugLf1kJj2i4VyzCUMPiFbJTYgsTmAB9TwXqSL6SfpYMDNDT84Y9VENF"
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
