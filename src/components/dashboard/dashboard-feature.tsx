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
    "52E494gUpEi3ecvUzVDBKHGHLdATFb3acV8STQuitpucuzXu1WJG9FoBo2cxT5MaFSqr3rzNKLzuFiq9az2u6rxR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mvDXWbGjZmwZ1vhyKtvX4K7R6H6vfMGTWpsSERve6BiW4QUiAvkQU8MnvaTnzyng3zax4u8YmNCrwuu7pgwTw1t",
  "key1": "Qp1wjShgLKBsWbtb3TVB1h8cM8d495ZCdYTDYiTDNsUyPfBj7phCSX3c6AaNuH2LgGbn3N3Nbou8xmoMKnEBdBt",
  "key2": "79i1GSEqQSRQWkhtdbqeLtTgmcK64167T8CSiDK5pUxfsCBoto1nQg2VcMXeDUHdnNJCpbZW4Tq2fZddtg3Gp79",
  "key3": "1Hd1MBuTY1KmnmAGaLGLKrEyvuJZ4ZMt7XeBbzxagAFfTv5jcETq8SkUsWU3xm7UVKw7SRWNwZvVkj1RbzHPjy4",
  "key4": "2XjkCS3wFpdFyuqRX7b1qjPWxpJpv5HzKqnPJe9GwJmTjZ1x4w8vsphSEEQcgB8Sm8xBoe8xaBYrzzDwqhvgEiXp",
  "key5": "ZjYome55NMh5mxP2JUHB9amciD9KRefCD8ksfmWWxKT8J2bcvBPWmnJv9LGKKCo1bWooe5abpZMs7eKgiXPJgYV",
  "key6": "4mvGwTRfE7FWgnk7SHqJQdfwUtBpoJT4Fv5yJK6Vwh8kR9nkqyWifJC1VmeaQV7Q9uxQuDuucor7Lkp4EK34vKPw",
  "key7": "WTiQELfzVqnXvEso8WctUQYPCgWbBEWLcpt34sbPzW1zKvpk4rwvfvqXX9JUpUgnniEBv49Yvoubfr79ZtugxT7",
  "key8": "22UBnSbkRNBC9Joukih5wuz3mpc3NHhS2DT8c2KBSeoekBv6YWBqB6onVYSomcXXj9majc6LeqRr9fx2kz9kpZBz",
  "key9": "F7nnQnE172CAJmFtFwSFJUUxZaTZJgFRYxs8azsD3fhjK9c4op4mpVAXJQsjvwkuLcEcEJagscMsVFHDXqnhBW4",
  "key10": "5U4CmUVKtzsZALLNZ16bhQcp4VQw4JySPX5EuGjAPTsJPdxt14B354Z48MDHdixeLFJedsFjm3UA8Vezayy6SqEF",
  "key11": "22gDmKWmTDx8ycgXReAtFyxLce8VnpcoTKgWxvtAdweLSZxukJSwUPQ2VrC3gGSCpQECifL5LVCZyhBAYg3TaVSP",
  "key12": "3npFw4GPCchZ4wfrsHkkXs9WUsMYkzkAQK23JMLSadKy9ucMGWaoSmfDGdt5bZ8ZdX7s9FfkpcvzyJmjH2Ra65AN",
  "key13": "DotN1cqhH7YR1jJCMyatAsioj3vJBQooAwxqVpZYqKoJuXLrmEHMowfCsQVEBQTsV5m8QGhjhTtubXWrj3Phq5R",
  "key14": "3y1Dj5p9zBZs8M5SViMv2kA4GawKjtxVjyb9JoCCguY4SkeqXX9M9MD2cLTE7AiHdrRr2MeAeZDVyUnvokdjQcsZ",
  "key15": "52RBqocsY7PE2paHropvMRYdDsMWBWBbGquHLcAzEnG6N4bndauzqiTunDmbWg43Tivz9D9ifmaQH9N6VZ4j5Y2m",
  "key16": "2d6emhKYuM5jtYvCvtf85MuN2bhzKskjDmVac3bGHYj35XpBesHhycQsweLmRsB8AcyXUSF7XpdGmkQCFfYhGLyf",
  "key17": "4T6ecgttZf8q3UiTCfkiUCaeVcuMJt85htBJfe3L76homVq7ku1KJjGuxFV4JoeFuoNZM1at6MwrHFuR23QKwG7X",
  "key18": "4JAPgJJF2LFuYvpCapf3H34TXfYbPMmbZvGkvaNyR34gXPKnviQPZ4E65qewBDDN1knqcS59dksPSCYHJtBj2xjM",
  "key19": "3VaXqCm7XEZc81hLr72mPFhjsizpYgsBtnQ4jwfd4oXNdHr2tf49TCzWRD9WCJTouxquRSjCCThg4b55DTWQt7jd",
  "key20": "2CBw8x1aWoEQEBgiAaeLG7aY3BVyngifXsPpBQoekzD6KBcvnp7aZ8VwdXeFnEKo8rKsQUQfndXZLZgzce63aJRK",
  "key21": "4LN5wgm6cWKLfdhgVdCoqy2YS3CDkeSGfHKVokxEPzj7SAATMENkEHfbgLKukk52h4zPCUraXRZ7Eq1FfohRXQkt",
  "key22": "5B55AwrHnEiJWEHDBkCZ4yv9D6V1rAEjYD1RS5HUwsCiaYXG57uhCSz5VFbGH13peT3C6xeQw9enXjSBbpso9myd",
  "key23": "3xYFtGmbo4syAZpdYD1ewoKtsPiFL64dX59xLzeDxoa9PLr5jkd7ZcDCn91PBkNwxjrdMsXNHXHBo4zqnzDYYKvC",
  "key24": "5Q9Xa8AtW1uJnJ9aPK4fQf66RZ2TBRaFBpQ3szom3Nmko6LZruP9bikJezD9ZgRV3fUgzCyiGbNRFCLV5HSATayG",
  "key25": "4F5ZoXCniidzGT38C8ajToL1pNSRGdvBcLFR4U9YHXEWiKwtq7BZFsoTEQZjPxw3GJJhAuZefkW6MAXCYw9h3WsX",
  "key26": "5kByFBmFGsjuH1nZbfz9tZEqLt6TLLem5z1k7N1G3LDtXDidQrm9bA9FPFvXXQumh9HXfxgdsVSMytLpPCkREr8B",
  "key27": "2vsxya4cJn6QULBm8FVppa9DrPCcj6ykDcDN5ou4KW391GRabMyFA1wP2ANfdH9eAnTytq44bxQDHamy2VLnNNo8",
  "key28": "59A1y7D1nK3vHoQTf4NgwAGHpWLjbvdSnFBPzDyYmZ5T7smcaFCuXZfDaHkdzvxiSHoGyd3pY8ZEcjVbzLC4faWk",
  "key29": "5chq7jA1wzuYGT9PhNQr7qdSgvd3xFyNiXS6y3xTmcSA5A4P56n1N9r9epSt4uNonpimknowcssXJw2gxzT6BRq1",
  "key30": "4XuRBrciz5X7z7t1zqSpJxSUDW1CKJrnMX7bTVgZ1r1HuvkZGDjgMBwChw7A8FfyVZLZNjESZEi9m5pdxxyXTxPL",
  "key31": "41W9PzotCy9eJh23FjG19fKJdPfuSmoM13QqKoHnt45c4uHajLt4iZ8wCcV5pHDtJun7Hfp5rxjJmQdzyiRcM2nN",
  "key32": "uMyGMKEBwsrwonaMUankVb6SvoE3eZ7F2vuJmnqqGQ62gtTaLpPiVuvsPfZZWkESCto8qRyhvoyQRdBGs7HNAXD",
  "key33": "3Ve4pown2Ydu7FFhVafTGzGT7HSGPbWXn2eFgUZRqHdV3hwHDNA4eULFALsKqzAyB8X1XvfUTzm6Hu5E64LKmVHH",
  "key34": "2tfYJAyZv8yLgiQVBZBDgytRU1fL3rmQzRtQuvrAj8mJWtFVwVCo9ZDFWGw8HN4RFn8KZ43QvbeLhpHzLRHfWGZF",
  "key35": "3ZWvmyznpWStR223c8njpUG9kvqdMscsi98hAYAYU92r154myepoK4DPadnfXmHTRGAVCBY7adZrny6wgUvtdwu9",
  "key36": "5FxNFUhfmV5qDKh6ciSdL19bejWZXYF1Yez9YYq2eqEtsx66R2te56HYQUd5ESHeSUziJEpCKr3i3xfPeVTtLdto",
  "key37": "2M3yf3gUhmXVAFJQjQaMdj6eWULT7aojz4voCGTJiBB2DS7Aiiv58zte5D4MugjFD9JnFkdKmgiCvdAnHGq6Rkit",
  "key38": "59pJxcB6AeuyrDKQqV9NiMV71jCe4wp9yfLnDYmZxnwZDZjz9uUHaUBuqpHE7xnSF9ZkxmYhKEC79sX5f3Wdi1vE",
  "key39": "4CoNZnMLVh5JF3HgwJP68GdvSZovwTa6SdubrNP7M3rfFmCcbgMnyqAHJkTdV69iMihE2YoioeVSridQbtM7nodm",
  "key40": "38RvKYX7x3MvMU9Wy2SL9z3tYXHSEcKVW7UhBM9DHVdDqQ1dHGJX1piogLaiJbUMijcXym3W5RqVLJCqt74eWEdR",
  "key41": "GchFQHziPqp4bhWoZyYZq5F5A8VTdtM57DGozGyr4FNsCY9EtWLFMmDM5wYLCGWF9aLWs56aYKatt3WKGcmqxGi",
  "key42": "23aQD9mytr8NzLDLGESkg2bT36Nm5keJonQhG42MEk2jZ5CmEv7jGS3JheX2je179qC5FLk6uF8KF4qM3sZN8yLM",
  "key43": "5iXztci3cTqAvTbMuU7vmtEuL6usSzeeR3ty7ZvvYoLqSZqYaxkqcE6xezeZhSAYbk7ujBNSGTNdPFoyv9wmpF2M"
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
