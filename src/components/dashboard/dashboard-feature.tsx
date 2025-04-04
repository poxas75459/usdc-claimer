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
    "ziy4pXTx26AgTTtp5Y8eAQpycgfuQpK1vVdeUWrirayNm8PE65roZSm7wUjqeCDe6A1MdjrqfS51N3AEJmca43K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wXmqPp3Csn1TWS2R5Ge4f7DFT11m2guornsKvK3CrCz1mTMzJGRVHQC4rHKxhwCYweBygzTDQPQry3y3kTyLQji",
  "key1": "5M3uPcg6ervouJztTiyUVrz36ndFpzgV9nwYknKbjWGvXc3RrCvW3LWAWT2TcfCDTdrddLGWmeVzCqjP19HAmtP8",
  "key2": "Y62RwCGt4opNcKPRPgT1KuwvkNAo4KCY8rtVjSSdk1DAcUdFgrX7vA46uS9fXqw4Fq2TLgUH36LeMddfg3ebuqC",
  "key3": "33cSX8VbkGS5kyWSEATWq8R3EgSRVN528rMkaGSjgnW5pZ22gi6QVVt1eKUfch3TFvP6PkiwQtuoN8Skbx2HC2L7",
  "key4": "UX2R3PV38zC8PeEPAvqzHnZM7UMJ6G7sNqA4MkgdbzvdXMs2AtYFfahENdLSLHLTxrZz8BM19kfngGuvLBN4Uo4",
  "key5": "3WcqWrHFK87LbqvebvD6Mq3Wf9mjvxPd8oH926eWkqzJcRTiRDtQua4aBoP193Ek8sC9bBQpJvcMfgGhyYDJF44m",
  "key6": "5AuRhwuUhTUfN5t6JddYXQqRLY4SeD86L1ToHXy6W8E8zPpVNQ3Njknmy9Yhphkb2AtMiJ8hximG1rKMxihZ5aaB",
  "key7": "3FCbGakBKpufk9xv4CXFj4sSvEnYRogpSH7KCNwwsTY9KHiKdMWPLTdvykuY8146tXLjtcaoczu9EcDiYENSDVR3",
  "key8": "2rSPzSQ93JZqMcr4Y55SpYfrJc4ukcAc3JUBzvtfVNpc8iYFjDXFZUSALvSYVpmusB3xGMA1EeVwcFoVVzfwJrZ4",
  "key9": "5CqYXDxxkCZqBsyGq56DwErGePxPXXqM7ZMv4xM21BTLuryJGEoCsZY3bf6r9Q3tAEQsSigGGapkRnFHdT2KhUwa",
  "key10": "2hCpnbzQycYB3wpgG4cVEH345EdCH26N5daSGBELGU9eddUW5WHA8CBWetW2fhUXpL2AGBeMV2MEXEp9aVP4Vb3e",
  "key11": "352cYDdcjzbaqVyTqrt1gHV5hyPowemGv8KMU7avJmWPDkJee95KAT9nzQuzptB7tqAeWnErg2wjkXqHFY82KCza",
  "key12": "4q8Kgozj1rPXRN5M7gu5KjYkUodHe4Lwihxb6WeLxtLArmpLbTxcMSUTN66B4c2uxK2HUV4vKmP6xZBtjrNGsZju",
  "key13": "3bvwXfATqL4dGcC18k6ia1rAW72nQWHFKeD4c4B5P8hUhFFKW8aN7rD9pC7TzB9TDKxRJnYBzez2nqewKHAcRHLv",
  "key14": "2ZQoEszAPz5oczrcr3wUDv9MHuhUtxF7FdGXuZ1YHxBHzjjien9mNhhSKSUmVGXQWZRbRmWA7NgzWnfo2iG6otc3",
  "key15": "5iujereZ45fHbcWhDJcgiVCLhySMAwLVzdShArgg6bhFenwGx8BD8J5D1w6vxnXLCnCT7eWysEYAP8kEmTk2cxJr",
  "key16": "3yKuMTvBFqATLJ8FMmeW6FV9QicsYNxGDfWnFw9dSwwtq73aPN5iAM2jo3JatqcC3xxoekQfWBf4mFzcZxnfDQhx",
  "key17": "4FFPPDC9DxnZPZsK5gAYJyLSR6fezTBCpPDpwszhgwhTMYxC4aWiq1xVL6eCqgajij3vtsUkRC4aR3Z74XsoRL5K",
  "key18": "2B86JGuFe9B9jGh6MV9BkryFJjD57NF4u7TvBqX5xoZW8ptYGJnvfZyZLY6GMUCe6ogAZA28NGn4dTGJyWTvtxTE",
  "key19": "3FcUYGhy9Qw3CsexFhx3EKWfDmkLyvEXX8uhVEy8uy24gkskKMnpdptv6hto4W11ug7pHmjkDU3QMWRktzh5oTqx",
  "key20": "dcJpGEpoJGYkzH1z2WXcHEvdc1WGQKHEv4nCoKGJQ45KGRbhR5Sm9tLWtGoZf2LfNr9zfuX2JSwk641KdGxS3qr",
  "key21": "5ehqd9nCdJtW7sypxFzM6sx8uq6ACmsWqdaRDeZmSeTXqD3S6BVHvCHUM1ccU3zmJW1hxTsHWvym5KzLUswCy99o",
  "key22": "2vK6ihbu5rUofAyKyTbAdH7L5CByyspBiCpd1r4XJN3DjFvSE6Vu6Gc5xpsrKnNvYXye11v7x5TPU9Cxz3jZz4yD",
  "key23": "2RSDe5gnscrnga2hqaLQhQUzDyFPwZyrgToPHDMHCtRk47qJa2DUw5KuNEX5dUH7oM175zBvmRN8kxjCtG59sHkh",
  "key24": "3YxxfssLk8cPPWAcSxw4D8NoxneQJovwbFJqtysp7J8kQBusjGV3M1LGASbwwnqRsujo7j5wDsQHAJxjKQhixdrv",
  "key25": "2fdcKAHoBXGZEQsoP5Vz2uLazo53F5ST29Jq1UYMepfg2tH93EjSD3RkHA6BLhGabGHUphFmez8rBrZsGinDdi4X",
  "key26": "41fpSXuVinmQjnHske18JBzPBoakpgRidyWA3xFrSV3hiZpCpTH1PbEw82gTnHs47KYth2WiBguD4bhkHQQtoEju",
  "key27": "2tyAeK5NDqAJLCWqDLbatcHrt6REfCUoSecuTWpinq1iKfnTkrXjDoMTPwgRZdNh4aXu1kauGYN17CRn5WdW8wEN",
  "key28": "2vp5t1AWe3o5bk8Ws6QLABExXZAvS4tkCSrZXmWBCY1RRe5gRR9hTBEmx1gSncbxtaVP67otPYDLz3UkF9fe3Svu",
  "key29": "44FezrMJ9gxVuVqpTQpFFqGmuY7h5ULHR2xH9ZGZxzDJPuBjWExWFxTtDF3uHThfxDhtyyKZnUGYaXWzGvnZ58vy",
  "key30": "4aVaMQCmPHML3zBC4SgmKd3xG3Xyw6sN1S7nCfHD78hxKVDPZ9ri7QpSFHnF1uEi2FbLqbFUWKiC1jpbSov7sSw7",
  "key31": "3GiXCRcKc9SJCe3n1cpiA6RPx9nJXxmASp9fVNk2HNaZy6T7GWJzx9nsnNpzR3GdaP2HtUVeAv7x6KN6P5H2PPkb",
  "key32": "s3RVSrYv9efyMXeBnDBPM4bCeDcxVcwrZk8SSU6szfgXyWDWjYJsh1bhJbTe9UkQoicWq4mRt9byERJa2RNS6Bp",
  "key33": "5cuLqhrk9eEbRh4iudnYXu1NbqhrTydP9Q7DD3X3ZNAN1oFD45xQQMAUxyQErNdRArw5MQrRwqQYx9Tp9t55QSQR",
  "key34": "4Cbd72D1nwQF92NQBXAeMbUaQVvcJCJzTo59wkNJ1QtnkjnApbRoLMLMiAb3xJCD2NRCww4SCfsqZvkkMy2a2kdb",
  "key35": "4DRttNPYNaGpMttMCnndhgynHjFe3VWEZbcRCoTQFT3Kbxtgzey3XqF7wEZhawtMCiku6FXjAX7pUcZriohoxKTY",
  "key36": "k8Z8YZeRWFmbWsEs9goXv63FCBj8VFXTG5n12iKEUbzm1edGGzsEMQuU9DidV2WSvap5abfrGP6KQBtwBoPehwM",
  "key37": "2zWw2xUJhNF9c8bGJYUVjgXiYyw7bigdvaeH4jo3soBoavFEcrPppFoZNepjE8UUgDjR487JDaZcrZdysnNSiUUW",
  "key38": "4uqVb1Li1eZJYpBeZ4eNAxRQaS3xpMjfsJkbDArxQi4GUHyGE4iVJBqN2FRTguJkwNdriB43BeZCCWLJ1fpaeREr",
  "key39": "tvBF95aPi2nsSnPcbTiGWhYJhgjJt8jtziSsNwXJxNkhMv8gTXAGpcyVik6Pq5Pp8NB23v8aFv9tyL5my5s5WZb",
  "key40": "hr4rghG8UKn7QZgYWEd8Vxsf14qEoDEkJRAD9JTz9wUCbezMxM38FkNmcE38mUfiP3YrPuSENeenKnvPCjeou33",
  "key41": "3Psx2zgDuj45RzaHkcQMHayJF4MdFLqjKbcQqeqULJm6GwifnwyRHH4EdqAAqYhuk41MrVDV2B7NrARct34vPGx",
  "key42": "5aWHKSAWowZEQne6xKgmnyBFfvkj4hHMHEagmHUx35mDn48W8vKckUSDHvrhh37g2RbRvwVA3jN8fQAa47a4bXwJ",
  "key43": "621pPFgkCWNJ2318fSC2iAFnmDy3VGpz6XTRR6UWYkDKbigFdVc8rW9Fj3FzLefNzW8HgwWzdwKYUqEBmwoAu86G",
  "key44": "3u2yF3KayBfP1vMZxsNZuRLKZwoBWdM2LpH5uWZJS1damdH8StmGoeoof62CteoECfjziGgJefBFkXr8KJkR1CBT",
  "key45": "2w7NLfUPV9jHc2G6968JV36zL6AmYAvY6Vcq2Z2srywPvru1BgQAmK3dQrx4ncG6qXQbEjQtS7r1Cn2RNtf9aeEL",
  "key46": "VJDFwcGKEy7gVH3jUYzxwFAeSRVUdm4ZvcSiZwD2WvwMj2jexoPrCdsni46LANMF3siEL8YQ3XiTW9agumeYAah",
  "key47": "5hwM3s3T4J5qbchCpr1zTKY2ozZ1KsdFgncDXPSZ2Mi9msVNxo4zJimgMojij2xWq7PdEPCkW73i8QaFMfGQM2Ve"
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
