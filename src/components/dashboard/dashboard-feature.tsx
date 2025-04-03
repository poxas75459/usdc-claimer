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
    "2oKaPHipWrLMRGJdDyF7RtTXFp2egPHQnrvMfh1bpdNt2R2X8ML2mq1uxQnMctj7PB8nUMEcBgN5VsGMS1fU8azA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EcTk5g6uCRbK6W5S6X51BvV2TVHpSeMUdMGJr2zs1s8DBSUZ7u8RrTVUVw8pWFUPm8JBvfkG8mwRiHh7jEYEf4P",
  "key1": "5cwpSvQgndbDeHstBzpap4Gk4h4GtBiJ7B75v4DQ6wEycBxN2GceLLbTKqqVExYkeuPhEFrEy6Z4pxDJUUqFdqmC",
  "key2": "4ZzvNhoUEpqicBqMC4yU7scoBSvHuqBXRNZHRKoo5BHRgEKi3xn3JiYeucCTbgRzvVCHEMTCWEZ3Uh1MXCNhbLdt",
  "key3": "5c5ngyhvMoePjgnrGFHP5Dg3xvzZgXJPUKwVQ5P6YEiCVucu7NjnpyK6mzpvmdcTxe1HGjWbMVDSbEGvnUBuN3rh",
  "key4": "3wZ3Px8hwyiKapi8zKWFaB5Y6gSBr1iho3Qx5m6kEJFBPDoWjj1zkn2C4VHecEMudAzeRoXU9vSNuSMDyeaJot7z",
  "key5": "4xZCSKKX33iqoQ1CUeL5UptorTr3TXxZqrFEjUavxjdWMwxfrrpVYsyGioaCFJwN5FbJmuLu32Mq4VohDNUMBEgP",
  "key6": "2cCFJztHgdxUwCFVkSVBzUhDmfkCrJXqFNq9DmocQNCAwxAidTFGQXpVz48guk7wc28CZCgHuY7jCdwnZBZw3uCa",
  "key7": "2NeqVC5gHYZjBKxPJMmUwWvBmxk2fo2Moo6qKyC7Zvf1nFJPfeNtGdYqPa6tipq1gJvAmQrNYdJQMZZTxWYieHBX",
  "key8": "5ahinn3LwE7Zk7JxuRCSTnGLcZ8CdiqAPdRT7J59LkiGFoRT9y6XFDaq2eJLBw78YHLzd6hZzFMfSjdkqxHyw3a8",
  "key9": "Fdn15DNwWJkzqkrDdCbehjxojLmziduvNJhAizScjLBiqqouyfRbssYGRCipgLHNHm9Ga3X4AR3eCwfwiSqxPRq",
  "key10": "cnjyQ8hJbTS9s4rBa6f8MzMWQH89Nx6PaWQzCq4L1XyTu5BoA95wZsjmmj55iWs6ZKTJgKSDVngAXDMroWcsHL9",
  "key11": "Gi2QdKbw144kh4LtAeHkXYqruDKc413zHrQSS6ywpRmDZLurhEBYVDB5recFjgm7k3K4uVxvsW93WYydyRKLski",
  "key12": "uPpVmWnkTyWh3HBkK9QrvLCbguW1iAJeEjVtB1PpLSw9NRK7NZGPxr4hbKr3aNPEYs7YAoGFyrfPf6dXTrg2g64",
  "key13": "5B1K2SEi1gC7uhaK8Hi7RXFWG7xd1E9scGcEpzK4krbVbNvhf55s8knc5ysYM6g1k8vxKffnMm4mj5jhQigd94Zn",
  "key14": "o2qekn31joLChZP4DAH3P3z8m1X32Tyh66cJFBoZH8gxt9C3iPxRB4GSNRxSc4eJfTJmDnsiXXDuFTbDqt3BtBr",
  "key15": "dViDf5D6NnSmcazJo7swJaS6sibLBc7rvRNj6GvTP1yAXLdfeiBBENNJpuACRv9YNaH9ueJU3x2zhMazGaiLhjr",
  "key16": "4Rvj86xsKECM9tbGkFwQRjmiWcNTkqKps1hMKH7ujUEs5BqSnj7fP6pv9ELnKC64VStRuGRM1uQEAnhgYV6KNRY6",
  "key17": "2iWEMfM6wT5XYcVF79q7qUABQiTuUMMYbewMriKszZdRRqpfUvsQBMEQFK7iUismdnThevqG9KTKD284k37GaUL6",
  "key18": "2XbzPBaea8KUyt8ztsdN1nZoR6MV38apa6RC6smYNbeJkbEsnZjuWimCgwSWcW6xXRvKf6TdHJSpC237DCBFr7yX",
  "key19": "4HZ1smSmuPAjE82LnmxxV8tUY6jiaTtQ4chQS3ZruV1B1tpFmXtW2g9K1YNCxiekKu31nxBaj6sZZ6vSU2oUKz2y",
  "key20": "3yohPuJiYL4PjhpK39GMJUWmwPbKwZ7ykHYzNwYERo7AHKg1hnhYjyZQGPBNhJ5SZXo7AbD6mUb7cA5bL8DseXty",
  "key21": "3dcyaUSRgG8SAYinavKvMTnfQ6PPyjKaNVo6Rzwf3zn7dcX9jhbqu2rmSht1HN1Pm4uEzuE2GaWmMG5ATd8irpwr",
  "key22": "29nUziwr6natAg6BjoBKuAXiC7wzGjpmmVTiPuHAWrGhRS2yyZLcefgzsFghBq9kHhfiNQju5CMMRiy3Krxdu2mW",
  "key23": "4mEMRFQhVgTca6JzyHrLtHJndDsA7BWeh7mfyv7WXML9CfgBaxkxizy5irz2bcMnZFDv9jtkxMXgdg9iExScDev9",
  "key24": "2vFQL1SR5sYvdfikbTnJDwAuHVVC57VLpReDu6ALPNFZ52E2MwwRNumpd4NQrCzTAijtbziiPiwbNdBRc6KMeg2m",
  "key25": "5jufdbds8k6sFzPFTWc4PtvFUUokW6xz7FYCBZiDUnDw3iRXB6JBqy85bHR1daMEb5yLueYYa4ScgMDxUsWmZ7Eq",
  "key26": "58FbGgUPwHvu9xFcHqah5EfAtJ3nARtinYzTBBdwwTcVD99kUiZDfAXh2v5cSQnQSa1npzYjgygrigTzQ5N3LRz9",
  "key27": "aqFxvKCnZSFDKJYzb8a2Jas5SS1GvZQ4AH35fSqx6Frc6E7LEkK128J64zuYoFTkpr2aX6XVWZt1DYxso6kdfQq",
  "key28": "KqvbiumUyWUgTegSG6ySRaogaSJUqjGfC4wxdoFxMJf6pjq9ViZg1jGaVRD8n2pZQ36VVnGSdcVwqLqAdn1x2E8",
  "key29": "5XvbW8Kd2AmAivwgkCwKyVayKk7NADCM21MKDJc1tR4CteKXVUBZGsFWom6NCtxDnhMyZfcNXbHeAGM8hggSkcQJ",
  "key30": "3KdWeeoNPftU9vshFgJdBonDRFZjHkmyNCVjFPJMTo18JRgaq3NVRLXP4wYamfWEoZNtPoGqFn76etXBXNyT35S7",
  "key31": "23qSMYB3xu68HfUSYFeCXxqUTfhaGF3ZxLwdBkJ7rxAzuavRpMFYsBHR1aEjwDuTYSvCAGC93no1vgLiqbhDkmRh",
  "key32": "48Tt4L7csxP2Kmiegt7BGFKZaztfftbP7wa67Co2cx1JHXmB2sVcg8wbucvMJaQJJUtdqTT5BEP55Ugk42674WEz",
  "key33": "2MxKX8iexaA78SCZQb638vscgoWVGhW6oSY2ypyA3JrW6GeqEHYDytnFjyTZgdkknthXTyoUZ7NTNwsAbmo2ECLJ",
  "key34": "2kzkh3RTJJ5FaJPgxzPZUENueRBBpiwogNRSnt2ujEn56hw2k7HqYVPK3gfKGzMawofbUXtvwk2carfyv2aLQ3hm",
  "key35": "2P3EvyGvPA8XtUdsQsc5z9WqijQo15foB91hHfCY8T3oFbDWSvvzzffueeKtXByCz7icG5y4wSzUrhxv7WJN3Rci",
  "key36": "5oCQrMBJ8NgwtAf6SeHuz6xFp1fHvnEb1UxcLHm28YvUQ1buEw1jCuEJiYF5kQGvH53vkpNdqhTWmtggrHXzeuuR",
  "key37": "2dgyXb39k6usA2SunAdEmVwXCvpSvRnaMnUNuzJnQ8nXc4GNjz9FdF4uyDHBARQWZ8fnvro4n46YXrog1fJHYaC",
  "key38": "5GvtjPZeHAiNU7DeBnixH1fmJ9LUjmfBF9fspDBLMTeXBNsLrQp7xJBomKJUVZqXFK3XMAkPH11xX6pxvaFqDV8m"
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
