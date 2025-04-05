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
    "5YCjFtRBUuKTofzd6jZ6XmZcAzMR492jLD1N5Wv2CEiEayeJmBAVzT87AHLXuZgMgjErvrJDrxnpjTn9x1Fv8PRU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rSAT735b1bZMsGfFC6QqBU8B1PuPLNF51ceEfW1aK1oZvpnS8StZv4tPTTfrgh7H8iF2WwQBsBQi21Ewy2RF3S8",
  "key1": "424RDghKH4AtKmi9RqaSgBCQNXRP1wAK7yZTt6MCxJJPtJL8qaGmU3HWh1jHcvjQy6hYQR2heZWLYSdnAiYn9cXS",
  "key2": "rfN6QAzmXTF4jJ4strxKnU4kshCAvbcfd5CmGuw4nXsXp68icd7J1Bfv1tRdWi4HQccatBfcoTqLwfRBpN3CSTb",
  "key3": "5GhooEibRnXSxpCwFDQjLB6zVg648vkxGJi5Tp3V19ZSb33JgLTn5CeCjgLjfRYjkA1J9QJi4jGjoVYVupLyQnhv",
  "key4": "2dJff2pKyy69eJuFge5jjySEb1KoGSDhCnhHUXcV6PZveqhiwRonhCmWMEXfVU8m5pTXf4yC3gSezGchanUGvKV4",
  "key5": "8TKep7bZzmDop81FH4egYoFBPQik1mzNzxCdwNoBR8c2y7jbpU7bb5ao4FLU6KPXrXmf1EauFPCctCAeewbtsq2",
  "key6": "3H3c1MvZNHDhadmcECZB3kjQoC5eQvxSRwFv2H6aaY6Vrxf23FQ9MeFiqJ4kE7ec6gn1pxS2HN1sEquJjUpozvhg",
  "key7": "gzKzkLYCnFh6mWzpZcwL5sz6hYRGraRgtZHHubXBPov5Nk2MhCwswCE8VY5LQNrDizKJDAi55yA1B7ogqPDh2qE",
  "key8": "46fGuQ6g9DDE9oH9tS4ZrWdirMPwT2xPKcvxgqo94fgGqmTE1mSXD7hazAe7JUHJBrswswMRfaGpBCaLpxtbPrgL",
  "key9": "5kVzg2fUbejTiputoRcX4x96U1j2R7WZJSKwo9EwHLVoMyXdo7MouvdKBsgVzT54nBwNLeE9JHi1Hgttdxt3yVu6",
  "key10": "62683EwbTPFPXmYbscRcbCQaJFReELbzgRTCnZFkGSdD3DaTGvWuTQ5wh8Qddq9PGSkFdiV6N2NWzSmPWB3qFpRq",
  "key11": "2nR7ywXyyxBVUtduFzXngttQ5GboXw7dzo7AzS4a34JKYCLL345eYGaAkg5oCddHQibF18LVY68KBV675PZauTag",
  "key12": "4DBwSk7hEFiADsHVs5FaSfhp4Y717HPWMQr6yfEB4D4sZve3paaJFhmCb6zddcDYLLxnTaRbaVv66ht1fY54WX1k",
  "key13": "5s9QMwB2K49vBvWBS4rvdvL1GhqTXtbdAWDFUbco1LYi9sxtNTgNSGinGymSWU2bbAr5meTE7KHETU9XpLCZahV6",
  "key14": "5Y9u79e8Szb7aeyt5hDy1ASgJc88iM8uejJBaaAb7GAXooW998yBW9JqVqkiu67AeXEz6oQpGUg23PMphR25o81d",
  "key15": "2ddboGjbw8NB66AVPvkAHuUxBF7umsFLAhV5Khs8YtKUeK14FRiGvGd1hhZEFYzi6jNmTEhY9KyYtGBbtajfZxjB",
  "key16": "5wKcUytBq7UuffRctUogQgwpDAzqHEdw1N7F9cnpzuBXoXMs41hxboJHqVRD2VjkDJGR3KDb2SgYMDMrtL7sufm7",
  "key17": "NFrfvRgLDBfAHATsNFiydQMVk2mzKHFdJHpq7EnCrgqxQdFpJv2idFQGnS4LWSVsqQVKdHtkE4merk3pH62w2jf",
  "key18": "2uqFWy8dQr8XQVnM3VinxKg3WNqQ8aqpCxAyLQB8o3AsLf1ucMxu2eVbsF2GA7JcSojXbokCPkZykqQQn2Soi4UC",
  "key19": "3PM4g9zhc3vAWfktS8Z7ifdKvxDVtASE9JygEzwGt6Q55ECA5zWJhQLYNoLf35gxE5Ynzj8tsfmEgtoyTjE7zsX9",
  "key20": "4C9hU6BB1pM6W68vnC1sBGTFH2FxGdnAJ6qziQA5uNjWZkH5DMJN4Xuz8bZBadq8vsbtN6HNLjHLoRQnhwE6gruQ",
  "key21": "25G8TRXUcFgg2nQMg9pGbjcYSMju7r5iEBw8qnYtzRU238T5oEzhDMsG4TBMLBPfGQEkbhGHtraWegNkTrmzL9jV",
  "key22": "5wGyUqVFz3d63SVsbEUujeoBsrZSFmoU482pscfw4xmCXACTkiuJaP49rrshiLQc2P22FmhQ74qku1w2R6DD9g6u",
  "key23": "47zZST21saZaCfxmASMLRwx4hpdftgeAThCzjHFyqkoSxViabFafnpwqtXHKPhyLHHVhYjMBvW2bBnih1AubTvUM",
  "key24": "35kbBfhFBkyFgGsaSbkoqEJBw5y7QiEiENMNpGCe9XCF4qsUhzX9uNfSxiABntXokqEJPmDVj1ZwzgARBZQ1AaN6",
  "key25": "62sQ1ARXFCgvoCpaRn3dsiVRi28MAyfcQmkX32tZWNKWE1A6MM9Y7e8CsWqTcnsi7XQkfXoAgtSx5Y6KCodkx1xi",
  "key26": "66XqUcU91QVzyTCVx3m2gVi9iWAu4C4xFKxtf93CT5P8f6VUSBmrZTZYPVDBNux2CBChT4EkiXcCE73sHzrrohhB",
  "key27": "4UzuiaPuEihRkn6SeAXKYXpuuZB5Q6gd9Dp1am4Lq7PKWCKXyLywzumFPwwTxgeFAanLC3ZguysQ23UPzUUcXiLj",
  "key28": "2bqzfcNJSF339Uxn26TyiBRMkxA6rwBFq2scGAbcvQPbKCsLDFDQXHpj5Bh34EyVrZqpk6mYyQqpPbDymEYa4WNg",
  "key29": "2rudCnFKuaefxaS1oiBqfvoffdAKojeonx5jywCzNKryboksQy2NzryzZq8JTDngpif2nWZNgdSJ1HM1xbEmEyk7",
  "key30": "4RCYCnu1Wy1MGHssSpweZMxAMgwD6Pak1ki6ghw8jpkbQqSXVEaaWLKH6WLTCSgGSRGZ2qkwZ2Hp2yUj2fTVKhbf",
  "key31": "4kPgX8LX1o1Vx1HaVvnseAKXFUdQhuE3qiM2qLEWR3yTjRE9KZqmuDnzeewu62eiJ6vEGFB1NnfxjTfSW978f7bH",
  "key32": "5hRLPGUGPyxE9mgqnS92nqn4ERGGENTMbTdaaiwJcKjmTsjGnz2DYo757Pi21p3qtsY2tBgjPF8d55mr6oSP42bM",
  "key33": "44Gg7vcY9QNAKLWxJjgwNmfy7B4r7QRkznCCkZwum4JP1aFy2fZKur2D39uYi3iJhYbXdHCS59R4UC8AWBpzkTF9",
  "key34": "2tVVPCKvFskoLy8vcfim6mZxtDAkE3N2BZP8sg3RWg21W1wu7EhRpWYR3NjB7PtEwT8rPwNe8mE96kmSBizstQi",
  "key35": "9EsAHJRDKAbaxEXG4nTzuT1NeAr9eb3DZzPjDezu4V96W1ztFGPaqBsko3bZ7jpRLyEDFDwQJrrCB5KWioYPGGV",
  "key36": "oyUJiVV9MViCHsT9UYAjzDEr1Y2LMnxXs1Kkqg5B5uKqhPzGBitjm8AbXBW72Bwi8xrmmjycA8vTd8mSjkYSuzZ",
  "key37": "5hyn4sAJusz7YsXyL25awAeTWoZmDg6wDJBjvcxAAmMjapcJH6YsCxG7RSkLT3DUPUbgiQXAhFUxYsk57HtDTzRQ",
  "key38": "5fnCxi2jmfnvQzEPQ6jq8sAedh6WHySCjEYDHLe2SoEZEVA5LKkrs3Qe25hviNsfsjr4gVAYEpF1Ea6UCdmux84u",
  "key39": "bjKGGX89KXjRQZpPJFo1MnF2ikaJUCGu8FeVhBVTACK9ZLdMiybEgSSd3Q3LT8j3LUg2u1jLqaj9NGBZ7DL4KTX",
  "key40": "3jvdtywgnk4PBGUjTyGJQYMr3G2qW7NyeWHtp8rHSHzWkEDmjUvaJ91aHGB8nizFccn3LDwGRgZnW3osTT5p7tUc",
  "key41": "5wu9XVKCXQHyA27BtDm5sfcWXDrcxQWRwFV1aMMMkHpeuMGeo2zdk5kT7tuHQZU4CJSCbBYSFiTCtQ8AXLX5wNqx",
  "key42": "gayGqpc73VPBpiNswqTZ5Vdphce9dW3Hit2Qyt9zGwY3JmUXCMuuckc11xjqhYUQ78LNzq5ZrpDGxmF9whC2TgZ",
  "key43": "9F8BsEUncJeZ9XktLWtjYBTyfb8zhmAwzAVggqXTM6NBif6H7x216jkLeAxqM39koD3FTT7gRmJYhHQXXUU527Z",
  "key44": "2G4bZvpopDtaM4rZg3xyFAak7eip7cXPYaD5BiPEeGxo8yTVMd8DcZm4UY8WgPoKhZ8Vr1rsd81nNCGjc1HsE9Fn",
  "key45": "4Cj7hdzSyRGGk8DCru3iefdkkY3Me2JnLaYmYNJGkEricbKrdaXFja52NBVQ1BoFZnwCmBSsoBAaVVAdS984mPeU",
  "key46": "3CqhGjtrFXuFP3w726up1y5QF6JezmWXxpVbavdrj5GQHcY2KQEER7WBxh2WDkhsoBcAQrWQxBhcKTxZJ76xxitA",
  "key47": "4v7FjVQ6nZG8KGimbpw53JxQQHe88Ejt1SyNtfUAgvyzVBgEQJLhXKNM5123VYnVXhY7wuwmCNpvq7Hife9g7Mqb",
  "key48": "4vVYu4HVirq6d3ciguRpcXdAY5Ueh1wKcgTr2p2ieNq1tB9SAYbeV3JHY6mvcFRQhGVRLzp9F2dKECdkrLzAwHVg"
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
