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
    "hTTyM25Tv9stkeyB6RHvZUkinHaFmLNqTh57Pmj5FscYnAxrFGFVLjQBtAy4EiiVuXYUwyTjUyP5uw4iWkFwKhr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cXKWz6Dh8NbKJT1qpkJZZsbp2UPm8fUgztVXxeLzDmDsCQjqsbwRcwzXqB1BzjwVjjXNfVewK2aLQ2YCCCysLg2",
  "key1": "5yivJTT998Vr6s44zW4HBdcJWJGbb7VQSBhg4hPkUWWi8hKYoEE293UWoXpyCkWb813YXiDrpb9VbWVWeUdmWdfN",
  "key2": "2dfHmTSHfhZp9NkvKLAkQ2EXqbvhBJgUPP18rF2NnskKtxUHtkxFy3jD3Ym7e1q44ATve8n3yHYjL9uG8zUAo5z9",
  "key3": "3hdjp6ZrYnhQj9SvGMa2m7eep2KMrTqjLfUnRAUpS6MSF76z4shjA4fBD6Mi6Rk4c51V4K19R2Frb6y9MrMCpdVf",
  "key4": "4gTg4J4asH8a4pYsJBtQTgmCD3c7wpgbo3REbWmjZKVzxYJ2X7e3yipbNTjvLw63Rac2CH3QFSgrnjtYXyfbrrga",
  "key5": "3TzUzoPMUoX56S3VJG2fnA5ireGPmSQXRKnKYqF4RtMQjm9MTv3G8sxAFcecG9BAbjVnvKEj6oVRooQ4kEUJt9uy",
  "key6": "4DyGB31JFhHaCo4MvrHiqLcM7WJsJp6JejNHkRkBZnFbSgu7UTpra7f3psPYurMEy5268HpPCzkJpNy5qejZHVy2",
  "key7": "3s1eyqpT2qGiFhLAdWE5e2jqjngspBRpTSVN7tf6K9S3r5sjtKakAMwD6HqsXiFv4m7UL2gcvx1gYM8N1AbEhBZX",
  "key8": "R6wq5jGoK3fieN6Nxds5DZKAr6bo2LQdpXgQC2s5MsaQPcpbPhxeeBUDUTAT8V3BJn2McBScZwjmf3fDEpRXKbZ",
  "key9": "2P3MtdbL5STR736bpTpVa6jVNqr9BsXa6s4DzcqWh4xkbeJPbaRBn3WcpC7yYAJTkZjtiT9YbHQffiyGFGHKd1QW",
  "key10": "3fVJ2AyebEGxvwrxwKacNuCG816Lzs7b8DsBGAVMRWESLMF1NvTLzxz1Ga6YHagVFpH1nBj1gQkYMGdRwxbtm1sS",
  "key11": "4MSrpY7zDovBeX1GmD8VTZ6oYWfmZKZPDBuLXwQpNFfLEt9A5UqGicTHj3daNHLGewYGvFaqhc88BswFvzZa25LS",
  "key12": "8FCB8wQLNc1w3tdFvFqawAxQwFypZfB9aqZNQVToW11mACTZd6s3zHA5v5LPMkZ2BHC2TPjetdYD8EaCpsKpwQh",
  "key13": "JXtoAe3WQnP4UFcVAgjAG3ag7rwCuk66yqzAojz2vqwQgzkaYMtp9seDMAHWZutg7dn5M66s1fdeXnwGMtsPMHM",
  "key14": "4h6eerqaShmpycN7Kynw45MfkyWuJDW3Xgw2hXKDYVuZ4HSyHPJG7mBHBtBPS859kSbuEoJp9fiKg1QQRnRFowpM",
  "key15": "4UsGFc4MvPictq1XouUtBtzsKbPbRN2gucbXjyZprbRKWnTfZtLsf5urfcjf7htvuWBY9ZwZA2jQSwYWrtpeTxJt",
  "key16": "5PoYsA9vj5UueVUDpaxH5SYbDPdvxqWhtPzFvLo9Cqjque2rikuaqnk4oiVzZokcZ3pFj3CgY5bY8jqJwwk5FrVH",
  "key17": "2WbFca7xmqCSRpM99ooVU4nFGZrWS9wgW7Fck7Df6H4wd3n9knrk5ueF62fo6ta7hwTVRj2Kw1saBev1FKgKudzJ",
  "key18": "3fghyvH52JAKZH5baDGEqG7dbGYbqdPCPFQymaa9h8TCJqq4rg37NUpLfukpVC9araA4VuE7UjohHcCJjDKoP6GM",
  "key19": "3D6FdWVC2Wi3duNbmpgm71EeSNsAc6gArsEAa6PNaxQVD1HPoob8RDtqNmYBzJFLKhrK4jrgUeaXVfriNEjwcSYW",
  "key20": "5Q5iMJiNaavK5JBLmnp8YYjVczTkVEuG7A6zxwqYjdtVuZAXb7oJKuM6kQaNnvmaUCJhNHKqfJP1jDC7f2SMQz2R",
  "key21": "3Jgt9M3h5NAKErD1Hj8qFtmCgUsncFhTueEm55zcLt9B4V8xXgeuFJv5u7f2y8ZcTACfA8qwzGeoKCV1zumBGWeg",
  "key22": "sgszdThoPanmxtEE5XbauSTf9Mej8sUbgRMXuWhA9pM2ktUYiBZNUqjWTPwymXrTyKrSdUZ6jVviqyqvyRRz8t8",
  "key23": "3aQ5ymPZFRydZMpB5ya6pQnkvoXqAQ7YUjnFo6hA6pwXDgmp64Apc57kw9FyjCkUY3HdQkqqZLjexDVGPMv2FZcr",
  "key24": "5GrmbCBNYQaP4YCWLg1Aa775PFNNL4XpURyYRjdSaQXSuWCwqio3KX9ur85zQi1rp5iQuLKci79JWvcX3pVhduJu",
  "key25": "oCpvg5HQKb5chz5tX1Q9Zsx4JdJYA2vdWJM7dNEfMDdtjmn5TWVn3u87LEbdnENjK24wVAb89xpR8iitaVoCXfA",
  "key26": "3M6ai5FoMaT4j4nKuxqRMgKnv2GKN9BWnarghA1kfNkVPLqR5rWeD9js3mMaPrHJeQa2SRZYBodmmMNj3EfgWsUJ",
  "key27": "5YMHpkoCn4FVcjbgfoaTtCieX6bmZ7BNFen4FurHNQcLpE6qRcw2C3N2JEyeKdyhHJTX6qxpUMjqvkKhn1C3YJyo",
  "key28": "2uYDAGwKSsMo35TxxByWkyuvP5TNo4ZAaH4XfEn9DGyCXxoBJf2t6aZgJGe5iE28xWDgKqCy6ejcWJbRirsRAF27",
  "key29": "muVLqT5cRaNgQRFm16SGa6qGq3gS2G4QY53C4p3wqidWnAh19PkKJTs762qynxD9pwcq7Rk2xtncbNZqj6y4Mtk",
  "key30": "2ZFyHrgDYzmHXTGGFv5s7S1uypiiTbbuhpMXRGMvyAR8yEBXxpFKLUfgc7m45Hkounhs8ropmeQ8jamVx78hxxXU",
  "key31": "5HW54q2cS5NKFL2E99BRz3qSwBUTmEHqD4ZGahpY5P85NQH7YcsMpLerAc3WCArmEWqEYrG9Evnvr61fzTKDHAn3",
  "key32": "65CReTDeMzY94oe25ke62rpcoFXjeJpdovX2WKwmJf9FWfauTGKoVHNimSf8vpdi3uxyuLrxXwHLMwtNwtyjsNe2",
  "key33": "FLAotd9T3LCkuX4QcEfXe4CZBXLDw6dDqpwWQL6p9cwLhYR8t2fC2ZNPUwsrr65C3WWPRrNW7HroYMHrPgbn3Gs",
  "key34": "5sYUc8RtzQWUyTyUwbPRRYAeBFFbL2sLrS9BzcP68BMwG2EgcU2TCdHc8r6hBXgVUePQHqrXNu8uR8Ysd94TK9s3",
  "key35": "2fDXzQefZwz6vR8Qw8MkiykBUjtqCok9Z3ksEvamLTLksoVJnRfsCWbJ5VkaNwy7HaTyQiWqBoJNMKdLuBCCzwHB",
  "key36": "4nvo1rjKvdCVocNLEMn9neyRFqMzR8bD9oAvqges67GDUisAXjGDSNp3KjbPkwmYe78Rv7X8r1KU1E44NMmY3Asx",
  "key37": "2ihuaii8pDLF7vniJoUKfdHmqNw5QfKEJRvxGJs7cH1ex5uehE6ps5SztiCaubCZKU123qb1g5MKMvXcZwuU3iQa",
  "key38": "5DA75qo2wUGFVX9iRtdybn7tQTsLxpi63WaXVmv8fL7S6KgHtMeft3cjywHxHKReEWyQY6orYKbAA6hTiKVkkL7V",
  "key39": "4o5Z78oumtyzbxo8cTo3bcspNQkUKRxRdfjqkHpCzGKgtn42UkxT5YuJ3bk53GdZm9gK98BwPNokqtTHMWA7J1hm",
  "key40": "5v9Sikggz45uh8fciy3Dy5ntGE5TjhzZw47sqmAddYQSaPdGKjUfXBPJN2ohuLf5RAanCKckhxHV7GPe7eHeAeyu",
  "key41": "2xMJsJbuAgPRNd4RBjtcrHXfTq7WsTCm9TcA619qRGDnggTsZER6dUb3HfPMqwmm593itEtdtNTaCQSCYeSb174P",
  "key42": "3kxmHeYxcYzbyz8V3evXKJP21xmuNYzHoE7KhEgqAhstDkCD9t1q7vRcbvWZaT2j8KVfWdL69FaGcKnh5nQbrn2P",
  "key43": "z6jh6zRGBc4qaiiG6dZoSXxJXbbmN7DNxATeTrGW5NZQjKnEsYNnwJybGAFssrZzdtSUGwX8QCQsyEshUs2asnf"
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
