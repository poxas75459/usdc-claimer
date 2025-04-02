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
    "3FiW2vVcb9mB3M3WdWwND8iLmuhPX5nTieKGXErpYzyHebJroiJ5QSHaCdeRGPaKK8ehejTUr16W4Ld93rANQvS4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eJKJyXWjTcZLMHwjNqLuWzs2iK5rK6Hsnh4Dr4QsgG73MyRMrXc2vK3kMbUBjTMGyfpzRzPgjEBxRxjBMCtZnWp",
  "key1": "4P6QLUP6xkBraakQD9eVHyneTrTC6BdGPTHNy8EVM3YgkopYh1Fd9Fu1AemFLRR9cJmFzcGKCvEK72LEYYLko2fV",
  "key2": "1J9ayWzqEZ6EzwF5MB9jKfhYZkGSeXzURUZEsXmek3b8kApco4yg4Az9HbaSkSapnggLGUKZ8xR8D4nwnsqA3yA",
  "key3": "5UHTddNrPzdz6sa8o9cAcUyCyJwaD6aUb7LXpsdtkHwXSzzD71RdERfKBsQFs3GckheGaYPT8JwbeCYjG8sz9wne",
  "key4": "2RWSWUPiHSUbWP9g52mb5Vs4PAx7wbpuF9TJi3Nc4KFQxmaFz43QwXktZL1pF3JFkx3Mo27hfSqFCWmHBFYCYwwd",
  "key5": "43S9mUq4k2EqjWwzYHCNQdF7v9ymB7UTsENykXV2omVa2vHiXLapKRVrQyDAAuaRxVjUJHhUMV8kvTvX1TjKQs9P",
  "key6": "5hnWzZkieK1E1fy4pGJUwi8QWSh7WkuDm3bEJmxCEBNxR6LQqdsVsbgdMV6gGWbrWseKq4qa3FwbdSyPurcwazKa",
  "key7": "VWCQBSB9uRkWeA1WuSYwsEADgPMLvxdFnLSeWMxq8eGbxfuZTUc5s5rfrXSyVjBDLDHBFvgrfhVf86DvhFyxssW",
  "key8": "3q5gsWRT6HMEFkWoKvijzfVGtmBjs7XoiHt2sJXtfVKPRLpR4zxXH5k36JVN9yjqpp63fLAspYxjguyWsJFZGTr6",
  "key9": "3mDNheHgiwcifp7VRooJSX5joXYTQxY51jvz2GzBfYAgpUMSLfdLPgbbVAHSuvzjqu2mwtVHCdXBfyngQqVHKbRR",
  "key10": "5x1bmtDYza6zGumgVhLAvnAJw7fpzreDiqRgD8zHvMXEhxSQfqio1oJYAUeeNApWqoMYWz1fqKg27YRQguN8xBPj",
  "key11": "3XRrMeaFDcFY1EwZE8ksc7FJ3enYBQPeFh2oWGarUpzT4vzJKcZQNhcrj1yQvTp3MN2NXEhXj5PQyb7m2imXSLoa",
  "key12": "5jvdx4KRU3Q3TSdSoUxmDRM24uuFt9hTyyfLtKC3iF1dTf5YfgXaA1MezX7r4k7tQFCcE4HVzBkCAsLQ82oPVB1q",
  "key13": "5be9mJmpJs6BVsTBs8PRuFuuNeJW9P7TRsghiYs8bueAmWUeyADKViCquaWDxC2JVM6XpDtGdZBkAjZHvAedMYkh",
  "key14": "3vr8bpE16vN3wUgJX5zBZLALGFqKLhpgfuBCHhfxxB6xsYEeTduCB6r26XneDpb2JmF3bvf5L9dwfSF6ur7RftUt",
  "key15": "4UqScE81w8sYWL2zyb7XRokZFk3MmDqPWfVey6bbuQ8YaRRcnXwqKzmAjiFFiEEd9zQyNQDC5TeaviZdFvcbFgJ8",
  "key16": "5gScEyqTj1rtbCP16NNscJLyy4fTAdJc5Kvscoottnpwh116hsCYVtm2rRMcmW7SdP4nTwVX6kEQgjRkNCVjF13W",
  "key17": "PDw2s2A9XSdAGFvsXXWAiXxDgk6KYCCWshwfHTQbpqygAi7Kjt6vSDjxnH5jEhQz6A5UuHLbU88973hmMgXuE1Y",
  "key18": "5QFXEQgk1M8txCCh2Pew9tWncB87MpAPb3FV8F7HtYiQXi7hrHosyPQiULRKhBS35pSbMAxoGvDFnvXfHiPfu6P2",
  "key19": "38meJBoDGRPAu6aQDTpLD4983FWsWNxZjsSmgSxKTc8Vueg4yqbHBtRsiT1mYA2Q6vGuFxKzkZz8veqd9T6YqMDW",
  "key20": "3mw19fYmZ3p1BvvrorxTPsaVNv3ocVRVYDuJH44dMXLM54z1VxkDd3QPjPsUMbcLZuzxtFvAJGUErNNKKMjqj53L",
  "key21": "2dPNdbSwvxdWDQqyex7v51A2wk4jKsKAkg34sh4qtC6vCVSydRtC7unaMLNNAwExetEr1Y8fjmEomWwnGnJZVrRd",
  "key22": "484mJ5p9mUsZ1P9rDbvCvtS7ZbwLzfnCC3UzLpPb2WffbkMdsGhc2xkcw6BBvb3FZfwEou3fSMPndU24C9CmwVYC",
  "key23": "5cHo1JbY6XaPNRCwtQNSp7Fao5tVped2qzXU3F99wMT1NW39NLXGWLZdU9FZz9rVRqGiSM5NYxdhSXLL4pzHzihW",
  "key24": "2SJCFowVkuK8imiPgGezzJjNMsP2vHGXMzBWpXByJsB5Y2SqVbLNfzbVefQqSZVGnckVrUZC9hqudAfAbFx55wVy",
  "key25": "3U9Q95vr2gwZa7FZgmrdeX9XMjn1pZoqZ4Mf1xmyv2Lbp2nyz816bdrYKiWDRTaKFZnyZLsxcpfbH4PoYcKPkPPi",
  "key26": "2Ez5p4dReDUruyZmK2SkFUGQ6XkYN24gc4e9jgMHN5PSMJ2aQvZETEkhr6DN7EYkCZnWw9SBUxDZ7NePUDfC45xM",
  "key27": "4JjaNUk4gDe3GFwZ5z1Dn45PTD9cQt6CWLgwjVhtj4xyoagPchgtwUPZK4bQo4qcYFQ2PT8M9MLpRgRk39FdGMJr",
  "key28": "ZucHEbGMigo6hyY1erDFN5tBzoeeUApy1VuZvZPU4sU4XDF79BffhCCn2WSf4Kv1bvHL4GiHYMod5u8bTAqWVbC",
  "key29": "3Tcpn1sPkrWt1nj4guA1dmDb2RADtkcFMLJSkmDxjsZK6jz2Qt9z5Z8qheZm2PprBFN9u4hXX6bgt6emN71cG2ya",
  "key30": "2LSVKCxQTprNsjHV71Fi5ydiUe9uNnyGTpKw3xH74qcsGPvm9NeBDUmLhXNxAsmJtPmcPbGy6dPCXXHE5Q8sQX8k",
  "key31": "36gSohb3y1PT3G84iwMDbkP7F1VcKPGep8NcGWQenjn2baDoooiEpDQTVTZncNrQTq7LBsGEmLUHx5MCh4BYU7ug",
  "key32": "5JJ7syhXuLsLXiykZM139fWoXRmujiCP9Zufndi8Xca6NPfdzeyPKdZFcC1c5ouiw26EhsnW1b1jgQPpkMyrWKur",
  "key33": "5rx5p8PzM9Qn79vahPnfPQ57DHUuRYYHWFGvEJybPSLPhbZv56cE4CL1BXPFBDDXDQaNqxPDi2vFqFx2tb2bs6sH",
  "key34": "pEuTj7tBcEQ6ckKj2UrpaCxLrC8BLHuE9cU52qWNA6CkHT8BfMnWde6ctxpeDkAMCNXM44otRQt33sPJCejBW18",
  "key35": "4A1pEPJgaxdLNTTvytwMrXXYokBwpk7tQVHvTAmHKxq1endp7VHqJWdmszt9qsKGVSh3iiVQQFceAqCfu3AW5jrD",
  "key36": "4wA7SuSxoRhy7ZeqNQkQdjS3j87LtWdao5x4vtDZH3UmVzUyYQMmtdeZfwFDPKTsfWmcdemj7rLtfuCa9KGQckUj"
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
