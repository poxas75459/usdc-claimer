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
    "4n82JEqyK9QbZDmcR5Fqd1EdTi1zpUfjk9YhgS7LcdaWKPakm8asaySobvTdctQaCY6b2zhBPeYSL1QdgpTjuGXP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LxmhKA9fctxfF5EQnpZJR1NF1bLKPxcjfRBAW7nodsVjWe7bkRstn7KojNeHCmZsNb1E8V5P6asxijHg9ubAHZz",
  "key1": "5y2kDZx4BMV8SZPjsyJnRKRtNqqAy6sMgEyVoP55E3s1xwthzGHyKUVDjiPihjoDivJQbFmLJ338dt7big4MKpU3",
  "key2": "5wwUU2XMVTsukGBX5dvGWb5TigMmqsWHRoN3kNJP2WTCDMJ2UbqFGCDBRXuiEizJ3HkLdfbT3aSFPyB47nRPYgph",
  "key3": "Jh3ZdZ8xcGMYR3FwAP284nKYzR9g7noyvG8UgFBeVV3UYv2jJaUzmDXkg787guxp5XDstYYpDyjhJY8uhvmbzBu",
  "key4": "38NpJL9bokFugz4idYmXZKBqCkZAgxJhbWRk1seZ7eZztDXcbMhpSptbMrsY1NBuBgjuRvs9QY39Jzi1dVN7fVkU",
  "key5": "5gRatf3BCwHNWueGcpxxiLuBeFAne6sTsQtHcPBsQgXSekUuyQXwZW6tuLPV1KjA5ADXYeUtW6cLXGuojTGtjZuE",
  "key6": "3mpjP5wNsGcxgGpZceuTTCbB64KqUHPkqjV6Fa8TJaHe78EuzQAkoXVdV2KsqfYp9grYzuvp7Cm5V3zn3ku63dWS",
  "key7": "54jQG74hF1ipTr2bNj8MqiHA2ymEtRN8GvJRxgX396C3yEGqtDUZFw5vLrXWvWmpne1Ecpu8DTkR7kiDyc3yjseB",
  "key8": "2y23cN6thuEE5zPXY7vni9ADpkb8GW9wWY8UWYY4GK6mdDMBJKNsQoUrXe1KfkLtjPSQ39pcQTmuXy4UBEfy3ctu",
  "key9": "2zDpgJoTr8nnT9hhAYiwf7PoAL9ceKuaCjaozLJk4ZakMmLiUfQjSLLtS4jjzXtwNtHm3HALQXyJCLyQe3heBg7T",
  "key10": "3JBvbbXUGdkD53Q4JocMTGcd4RZ2TxVYDd1YYkGXHaxAgqn23dS1JdnZ9Mgr1zgyZVtn2GYkWwWSCFJo9jyw4bHq",
  "key11": "4HUbktwf2ki6r97sA4NWaunTUjDnzzkRv991P3vsisNGmWKcoAS4QVhQYZJooTQrpiU9HouBYa64xGvfmcCFDkrC",
  "key12": "mDWJc3UoRQsvd16ETxJLRqF7YZvp3y8tHqntfpVPBZDXxPoqnZmrXQZ1NaM6CFtPUfgzzHohPq5LEWaz6cB4Hw5",
  "key13": "2eB4ymCYh4yteUVXMPzCQu9EQtkvxunzaifPXSzgL17DnzQbVcNm5jEapUunULZsbFFHMCS3CPAWTMNWHXpEcV4M",
  "key14": "4Vt3Pudbo8EondWvvxnuE2L53AxR7tG4V8caDRtqpbxqBFyQiRAg3TMALQKMJDhZA6taUszzWZLmSCVkFEnoZy58",
  "key15": "4YQv6kJFpNdzg6b7uBXUNTcrYvrubPQDFRhz5aNQSV2hE8mC6f8LYuxoQkwiRYo312BnzxSHaqzqbVBhnvLKmZEF",
  "key16": "DFJgKuuwk3hDERs2brWNjQedSW16j9nb9d7GmUsV32Pn8f7ET8AANHfbj6AuxyYNibLdqFoCY2ZiM6ASve3Eh4P",
  "key17": "2e6VWQPq6EzuSVEJ4PSPrFAi3EqLeccPUGDFsy4HxGYWLSAYZFYChTSmQffZHeuiSFrram2wpDNkYFMZo7tnxA2g",
  "key18": "LES2XaMa8BDeKu3QcV8Ep7uEuy1iVrHckxqgFFi4dKgDUptLbc6xxu9N1wzR6XqtrcabAH5jn5oeLcmQJUUJrAV",
  "key19": "4kUPwxBHvYeH5gW3xa2HJ1sCttgzibjcRY3eRUnsbUhKZ96SpCyJSjG6iz32Tk7tuXjrWgJUDkzqAuU3j7KgwFDN",
  "key20": "5KqezehNxaW3o6z5HwLtXBR5v35foeFrkzePWHmcneFXoBVrWqWjxfMPCjn2h8oRqaXh2oPm7jx8QU8F1mFEmvYi",
  "key21": "47rjECHzpivK7HrXibZdVuoujjZpMeGYZPTHaEPURqNoNeZiGM5jepEYTS4ANy3NfvvrSFs3kjBPQxzwL4PDZexx",
  "key22": "5LEvKYMZqP7zJYnxkMxE7BUATTjTmZRVv9pAZRbMGgwJPWEj6ULcAVYa6XU3FFCbyQZGYiUaD4w2kq4xQQEQidNP",
  "key23": "4XtoWPdWZTsnPaadP84cn5C6ZN4iHoYwB6NpRmKvDyYPr6eFyWFJcqFEfM7W7r7SVLG3rikAGewrsrXBBwWD8XF4",
  "key24": "4kQCArSYEjHfcgrngbLESkM5kkkrNtr5rjXc3yesLFMvNJps6oNJ7fHbX9dLryzxjgdpqq1nztS59xmB7kRQ6TE4",
  "key25": "3vkHkdSx4VgqQaaQSNB681xWguYyhNmGxHoT2SoihMhz9YG1qPvErm1NdKuawHW1AG7k8nz273TK8jkxnffkVEkT",
  "key26": "2hYpNtbS2UMPtjUcZVB4wPCbKC4GbevPx3PojjgE5gfYjcVqqXKCKxe4pyywkq6ESShcJPWMJMYrNRxTkJCWWKME",
  "key27": "33neVvarULLNRsXH8XaxZjiFw1K6nMHkGveLfKqBiBxCo29MkPXhXdHVwjbErBzJNTHnMKTe4mWBNYXtgvwAcApJ",
  "key28": "2JhTBAMz77u49KcEQUz2D3G9eAkLmGcsyLEwU3NbSMNgyMYTvF4xVTfH8cyoT45cWnZ88LfiKNWE9wmzw8urCGmw",
  "key29": "8CBuNU1cwkcgs2zP99jZk3EanVUYCNkzMnxWxVKAzKguWmTt967HEDk8E9cZibk5ddPvCbag5UtfkFNLCoXNCwH",
  "key30": "5VdkkGgxTqh2kqdDvKWukWuKDk7Hr8QiAaRhyUKkTT4EM2cgh5ysFgEZH2ueCQxCR6iytsvUCibrL356ULmLzD9Z",
  "key31": "64t8UVWbRy1MB99jTSxFjASjV8D7554gBDup5u6zemrb379NCT1wCKjqt8DAtTnxZz3YFUnZwExMzX7besJEbca1",
  "key32": "3uSn5J1DrsdHr3xHwokv59NvfRV8WkEyJwfWVZvoJiMvn5WR6s9hpaNT4HadJpNd5e1NQJwZgap5HkdgNUQ9eCDF",
  "key33": "3pS1DnmRwQXmoXJQEQyreiS6WL5rmwkG6L6ERfpLufhLsMRniBW3Tk5hnyJr5D8NMVomWT4ZnEEg9uYNLa7HyYm9",
  "key34": "3aMdTvXFn8M2aWhpZDYcPZVnpmWh3j2AHLJtbDaz7p5SSAGNZRL2stVJ2EXzLyV6UmSt1jzeuYfWZBHEPpWGN2UE",
  "key35": "24ooN8QoUWWTBEqhRc4A5JiB3mbRT2Yx4njRK167Y8M3H77yhcjyKyj7btYR8rZ5raYjAmYgqHcFe9xEVe18XUJx",
  "key36": "3TzgfGyRnPX7vMWYsoxw5K3ruiBBuQ5mBrgrsFEfkTCZUsTqH5eWZbseexTGcoPQrGV1DLbR4iiA36QWContHGE2",
  "key37": "4xWbWg7m9Pd5vMnfJsPMWSwvMZBBkMjZG8UDMNf3fEbHb9k7JaQSkZMPQwRfEEJyS65QoktVnoQcT9DVeYEDamWB",
  "key38": "3W1rDghBSxsFyugcPEabAhtoZFHqruN6xWYWpFSvnsbPkcz2csV4YxUo27JupqzRaaK32AZK4MvoHtQG7aDzmaoj",
  "key39": "371wfdaBNBWFQGKFFyvC6hjK1AamoFhTZsdoABYtihQNBUJ3K3W4T9jqQ1y6YGc1141hNSfRuLugYF3zmFBBBH3u",
  "key40": "4yAsHS35gueKa25xDr2NmcSs3YxtmuVzhb6uhh7NPCvjuAktFLTUXKmMpi6obD3XSULP8nYvEVxgrig3xz7jAyq6",
  "key41": "2G8A3Wa6aU5GQpj4iQwyt2KkACTvMp56RVyTpMcVkvuysAwwFwwSuypHiS7RyfJbP9BfQqwjSQ8pyGyiMadspFq3",
  "key42": "T1JMtDhyLsKpVb5urNvNMYtYsDVpMF5KWahm82scRfVCUa192D5SdoqnhHNqPN62xvEkstxc4hJgkpSvPWkW8Qo",
  "key43": "2XppX5mjBcqoFRgNiYA5Mf3YZnFD4YJouCGEgwY4YZJ8bwSfHa4KtmRcoDEp9G7aKTcRaQeStHoWjUfpUd7qPFBH",
  "key44": "4UFUGcQiEAXhtHzruYTbDjdUXik4E22kVGRSroJrXnFYqKXbdzBYH4PrF3HMffF5SGkaoR1vvbgXnsmpU8pmK5PN",
  "key45": "2jfFxUUaX2YirzR8598aq6kKFJZv6UM7w7NRVB5NqP2D5qTPWZ255DQhiTnbBACYsFd8GdHzheKj7dVvUaZdSKvK"
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
