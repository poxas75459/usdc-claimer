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
    "fTSaYmowgJ8k5DMXM2dx8pPAjxMrZ8fqfez5WoiyFDoPwF2eReDYDoZYmyaW3sAUP7fWAHyts8ySr5jaV6jognz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aktBA7Zv8aye4zw4Yejwc2wWE198hqDwHkNuVymvB7wMVA8xq5vVVwpXQ9ga5UEN2HsPRJVRCvux5c4JaJ2qRn6",
  "key1": "2cGnkmZR9nrpm1cpdbXDFMxgNbKKsy14eazSexFjQ2RVr84GWYauC3y5RyFocrQP7rJ3PhkwcRPo52TB6f2GLPHH",
  "key2": "3icXabGFSR97Mp3g1xLEWLj3b2JcpFyqrbtTFvmDwy7QhsuYFhn1jZsAhGvZesfehFTyw4jjB2u6YBMCxhq2vFpU",
  "key3": "2VQt9qrsqPbf1uHi1DzPRvhdj4yvUEUA3eujpLVUJav5XQUPi3f4PBvicNYNhQSGo7oCSjwbHNL2j7jbP2yoVGpT",
  "key4": "2BzunJXZn2UKyYE6c5xGsaa7A8wEJa314bZVnGPrk6justZLcpoJzw11e8VG7LCHWx7vEwLvp9hfJeZGJabG5Sh3",
  "key5": "2jJpYWzwvsCGfMQ9iFXy6aDzv13p3WgeSZhEppzpCriWYPAPBwZuJ3xzT3TkzW7HHXuAFvKFDAA938SEGMqncwYn",
  "key6": "2zJXaS6UFNPGxWNMpgbh7VX3dhVeW25X1w1CSKQX9Z9wk6qPSpmGjjsbtpcMRfCbZuuUW3mKtVUpcpFgZQRVENfj",
  "key7": "2kykbw5VuvzwJcRGf696YXEy253MPxSLaEDpBTfuR23s83v4B5vD3S2hWfKc3uwxawLk3EcFh6w9FSgZ3uoeMeAM",
  "key8": "4d8NTE6uNv7gmB7YQoMdLyBiPACU2SA9yti5sMV782FQvMiUDoijdbMx3j8mF35AMxbRd1v2SU6NVqVQFubk7Sdc",
  "key9": "2YqJsMvj5gCHWZXRCEzNAHKDKYAFrJoViKz5M3QgTEQmxpbzskZSZhyGkXihbA8FEV7SugRBfBn7rar665yqfiNo",
  "key10": "4KQhZQ21AF248sUNJTM2KyhoU3hiDWsbdL6pS6vaFdHTvUdr2e2eXEUSetpSQhpU1guAEC7GkXkuYiEKvpDY3WVg",
  "key11": "27qPs8A4cQNUthJuEht3xvLJAfz1VF6EXfGP9dN6NpSjsWAHucAthUJQ6wZWRstspuBssWTPJDwQexpCcJu1ksJF",
  "key12": "2dhWMpnKHzMBveeJXTYv44BCugbMf2qCaDLaPoRoH25JeHS4Tsj23cbyR75LY9Ra4CKH7K19KWhBSfrWxHvEFhy8",
  "key13": "23p2oCLRV2HW5Qy791SiSRaRQNRAsyPogSi4amz7GfdBCy5MBrcsW775WHTqD2n4dHFa9vjw5i3UTc9C4TqcqJaA",
  "key14": "6iemG6JgX9dNrdtz1kwfkQLaSEC3Q4vGXBXD7oShmFWHLWaARXkmjeUqy4mMtCoMre9qXssWYx43E4yYQnsqq6n",
  "key15": "27b498BsLSyR4vc4iaosZFRPaNJBgtZfMmGr4e63yg11g5X9BZAfoxSnpUrdaRHBnoXUYLJsuELo7KmMJ4rLeUpQ",
  "key16": "3omJEDUb4TjscMqZVMNvnwWAb6V3LJzZnQeo4tNAWC8cKWRuXhhoyp2QvEp5pCMhjGCSz1ChkK1KeuGWEFVgxjqp",
  "key17": "66qQeM1DHHhhHGFyyXaFNb88gSRSpKYfXvUiDiAKco1dyYqPQX5PTR139M9tHNTxJwvmskMMCd4aoNGdRBsCm4wT",
  "key18": "5Qgvbp2WbvE3bX4mDgZoPoUzDbaPanTdydJQkfNzoQ8xqodQKqcLKXPcS2gVcqRamd37c77NiMSrnRZSDE8Z5APk",
  "key19": "3jQZ8jJY8gudsfvQtfPyUojveRBMeb8mdtrQgM6ePL54VQAZBDCght5yKrt3yLBbLiVKg316vRbqSGtkJrhNzik9",
  "key20": "31oFnMtsGWRNsyxX5LA8HwEM6cgYr24myWm6oNjvhsk4LbLfjnCGoCLPso9Q56UANDv55S28NywPo1CJZMpDVL6h",
  "key21": "4xsKowXDkoaNWFFEZyNmJwaufoZCu1J9kGyJhMxrpVMFQFi5EpoQidmHCm4D8iGN4bepFqmWcGLjTCj6v6q9tgAH",
  "key22": "5haZUTrcVxtnxKPUuYckXGoS7cHrdKXdRrGwJSSdkhGej388ybt6zeHdgE7KnY2rYKDgukNutSDVkzBfBMNRr49g",
  "key23": "4MPSorRwr7xQVVUZ1izk3ZwEyAhnm2Qwv3GdXhWLni39CijyozmYGiQGXtKU7xKxichYzezPnTqkf1J6QCRFEW3U",
  "key24": "2mZh2Y2e6Gxj7pQCLsLCGDmQs5gvcwzCdtyfSaBJyLPf7szgs1mjfbgCJtGrmPG1nTwboaHzDJcThZrYoU6bb2T6",
  "key25": "3QqjayekneeUzQP6fjk126J4uuqaSR7XZiaQvhVNFFSjsAuZ9mPc31VWG4J5tiAZJ3fpdnwC6yvHm36RFDfsbGcb",
  "key26": "n1AoH5QAgLJTergZqFTdTNYTomRjW5MxzuqKTBepkuQc5i5ff4XpBFJZoszD8YEkkzRrQSvVT3tHt68e3ZNJiBR",
  "key27": "5nCyFLbgXmX7u22cv32wkd2CSpHCabPtaYaorBrYJinC79ZogPBxHu3neEtLeDkf9tuV6xP6apNbJXkap2uu7uqi",
  "key28": "63ehwGyKVp7uJrDeWcQV8qrJ5mrrE84VPgYi1jeZWvn3vWxkdZxuFwwoNi43nfJ89aPpmPsFicQfEqKQm8d8TpL8",
  "key29": "57EvD7icTxpNsHdvnnYiiTYjjBBv73kwCaG4Y3UPGCFRhkcH4jHNH4XKua1PtXXWCYyyR6UeDVkHZSABebbpG9iH",
  "key30": "4SE4pdj8DLo8NFddhvDyqPFN3xxacdmgEGNpxLpTauc7rXfzfBbpH3ke2HKpSc7HHA92Vmnnms9mCfswNcLxZmPW",
  "key31": "2dH645wEe9xNqK9EVjqQsrE1Ba6erWftBA35FtUe2612CaSjG7j59Fhj5Q1kgdVbXMQFxTcb1Tx8CX8SdzaCbxNq",
  "key32": "5CrpJeGCdXpAm3EfwrVpUYW7gixTjt573uXu4LETjStXuRWeraWMy6m34Pc9KdLeS3woJWYg2MUYM9EZr2dRXzJP",
  "key33": "2rjj4y9d5KzqcMe4cqL57BjVH2warym4GUTGmPvXm7N1X4zEYTPBuvUtATEQ4bGWjriQJqGwnTaKAEjVdZ8JLsna",
  "key34": "27sbyDTwA1Fj83hudzTMYEtxEASUSTUYxTDhS2QUuRhWGqSfB6hh71ie9kF8SFF3W3JjoRg9QxaKmLGmCLHUhtQK",
  "key35": "4Tr2QGPpphznocdjhziKmjf8arQXWGqpeKo4Dv9XAPMUS5w3s28rQdouddPXsGWn4gCc8kKZMYK3yUYtaNxzmFPS",
  "key36": "dGAN5rWZ9LdjZQ9mnSGrEkCfr2tBai55WeFmnQQaimUfYRjbT3enN1Vk9ESi4EEcW1PvkUBPK1L3D7wYU4vkp2K",
  "key37": "5xjkihDBDKJQidYMWJMfh4PpfaczzNtz5ENKCRfhG3kTJmdmVgEeNT8stfXuwvRkXiGM2CNVxWDg5W9UG2pb3FKK"
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
