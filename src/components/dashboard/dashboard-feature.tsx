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
    "5s9541TEcticiMtjiPkQnA5QB73QqDHnWMMh9cFoNH9Lrb3Kto4W8AJ3abWp2Kc7cyJ6STi1djjkR1xcx7xFZMGa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Mc1ScqxLnbS4N7xRkgA4dfgUJKtL5v3mL9dkQv1MpBeJ7cNiQQXgwhY214Sb4S8G1bjvb6M1u2jCbh2qf7nXZG9",
  "key1": "w7WWPwx1y9z5eNUYRU9vcgxGFASzfzefcAPJJxZBVz3a8jyQcgo3jqtiA5xKUnLtPxcmUeUJuzzi19r1fQ8xCjj",
  "key2": "WmVBSCDYCB5gvj656wrjGNzKSZ2Y714bFoQZki2DtW4RgvikbUfkuwV5je4Z834T5a1x4FoZkLuGBDSN2FQKTg3",
  "key3": "2Egg2GtyxvyTU1wn7jqTWkS4dmasRdLBE8XQWWJy1Fy6ULr5NJo95NvWyv6aaAiB1pZTwwRd4jvpNu2v4GAAyakX",
  "key4": "2iHavcB7FrwhoNwBbhXUJhnaN4zyDQYyJbQEi1YMBYZPhmBUerZvq7hSpF9zsRyuZ6f9kuuUE2uLPvP89tmZtF6k",
  "key5": "3ueA1di42UuqcNwG2ayThxVdy7SDtZxKgE1CHjC4VQg2a4Nd6wPyuvLdKDzrGqka7BvGKPapntSetq9g5xWxdnkp",
  "key6": "4hctXTzHG7SkH7gwxZARWsnYs8dDs9nM1cDUJYxLKmF2dMhazJhpAMZVXHTbJ6NmPvArxqjKNtM9u7bLxd4KyXwW",
  "key7": "2B9P1pFgypUENcTgBsrhmnBbvLJCgKNEBmd8wRQAHwnN26BCk56eEU6KugWmQGepNnoALockUagMDdq7uHxfpMdf",
  "key8": "4PQrsCEbzJXfB4Cs1xWLpvod7a1DdXJs6iTfH64K96BVPHyZFRw9FtR9MBQtYn3Kkg7ytdJPSCgEpfpkHkrwfH9N",
  "key9": "3MPKuAqi6zaeaH63e97CpDtP7x2yKqRozD8ZUv1HDSXKE69osaAxD8e7qh12jU95nvk8EQhXqRhahZjCcZjJvUco",
  "key10": "2zx3P5gr8PFejMruRcCgquXe5XDJrNhcNAC6cbpess92jX3a6so3r12Lp7eoNocJL5jqapJYWmTEZMZgYRtanbkm",
  "key11": "21Lan4TViEgePnwiX938cAzinqFDCTwR8zYwASa5k5jpNsXcDjcMwYqke5x6ZRWY4ezyko6ZKwLX326FfDQhRgaH",
  "key12": "3aebDADZ6rJVtpPFEc2nfBqxJBV4n5wuBehoiCLmqUrGQigkRHC2vaVCqhuJMhChi8Eyfcz5jiV8gXQBxTYorsoZ",
  "key13": "4t17eYEBRtoVAbDv1JK64DRsWPQZzUakXyLoRt6fRcMtcnS29K4cqtshSHz4vwZpmaxknVKwNSrRcdyckGmi2SXk",
  "key14": "67DkzA9LfFW3stUsf5Lejd5u2zAzFBnJCR1uDRdEcHvyV6dvmbAv9VpvkwYMNLXUaK7LdiWAHaeDkYDDkvCV1fH7",
  "key15": "KvJyGdqiREZpXwCsq6epyFNaom6N7PLLXsQTzS61Wy2heune3iYfrwCdhBvbtP2VUJxAvHAUnxq9Y92isbdHEau",
  "key16": "26BeLncQum3Bog7osZfRVgDomuXUSaknvCcygmJbBATL1r3gbNWumF9nqMnDHmFHkfpqvXiQDbGG5YdaV9W5tqMZ",
  "key17": "4nkEnW2g5CjeycaYmfV4CuuUXBa6a2xgYjj4YMMeYkd8mSt31fTAEbtWxJBrVqgt8VE2s43qvqx6R9D1QMoQyTCW",
  "key18": "4sExR2R17BeTE7Sp2dVZu7y4gCNATgpshXspk8C9fhervHxuw6Uzcghq2wWBRuFPUGhYLVMpHDnJqmjhMNYkgF67",
  "key19": "3F1bv7SJMRKH42LTxVufyn6meJgTWMPNhV8f9XBBHDVwBJe4qBtYjHnLQjjpfb74bVN2cKCBtPKiJfiuYqyDLJVu",
  "key20": "2v5fKwjmdfck84pgsMu9xHrXFgMEb8mhcvEVEam8qsZ5KumywgaTc2kC4T8xkr1t7ngj2Jejg23nwwGiMoSfz4Ys",
  "key21": "5YvDy3Qh5iFQ1RFKSRpuDtTvLZR9N4MBQtmiZuRWxENE384MMsdBv8Q3F2hJBY2aFzFmpRFq3T3ekt6wEdGoi3MS",
  "key22": "46PvKmFHsdC4BtqXDTjJURqURf4VVZVA1vKDiFfBMydF29vewFAunm3jCL4vN5C49S2JhyXJxLd1WutDN3fnXcjM",
  "key23": "5RhWgfqfYsarz8GR39CwFppoSXAL4HSCRLPw5oN2RJywgEK8fLp3y3vRyMVaB5jfXSf2dE8fcoaL7v4mVop25wPu",
  "key24": "C3PbL96BPZVdBeW3awu1N6CCuuXiSFZYhkZL8NojnPpkaqrmkKbrf61ksoxvAZXd4rFvpHjUemCnsYJfAbXNWP7",
  "key25": "3pw8FZYLfBoBDLP5NNfHHDnwsnUAUfsz4N8rQyJ2WEsJyapFHLnJEVNgyyJBVYMcoNFcHzaDxseHNMkDxFwXQE7n",
  "key26": "2WKehhxKXG7MfC8eeHa1pb9EFqcshoPWfaxi49ZzvRFuAPAx6uxH7LuJX2QdSdRBm9RHLhV7FUqRHkvoh6Dz7x4f",
  "key27": "5symvWeMZaRf62eM1GVtsQByZPV13ojHRr6TZ1wJfKzcHAAfBQQxmmyD9JrGAmoqdULYCof9oBisLmyrGoTfJcUP",
  "key28": "4C7CxUvMmn4W7vbi3X7zNj6nUFaai7VqQuAjKsW8QwdVnp44cXxxjhMG73U6ScaZ4s4A9YBX5SQVEVV3udJWXdbU",
  "key29": "4qRvoYu2rosmaFEMnuzpe6AwaGq6mTmY9WiyUoDa14bYzEa1rM3Ytq5kDhwHEqQcnQZA2MGmMkjXMkgvfSon9F7i",
  "key30": "2mN8LGDwzmYNAtbiEc4sDNEqb6CVfmMFDidnuZyxQ68QPehVdttwLvTmqrP1WshwKKzy4DRmE6bxXZya1EybyFKb",
  "key31": "2A5x56WYQYjwrJabCTKc1n2aKuG9R2MQxK2VuvQSgCwf58LPVdsXAhDnPUPRL8F17TzozASzHbtNo6itMJuZWizw",
  "key32": "aRQSp9Eme6ekQaKc917qcrbpS1pPgctQWsnG13g17kkzNApPuMM4aCjGaEUythpJUxcUkbrZjv7C24J1zW7J2PL",
  "key33": "5p8TJRLHJA5h8Mv2cAXM9iDp5NnutXhZax3mmoHzLcpDM2xRpM9Ew216gu8wQAQEUQLMZyANiGJWLFcGpwwx5NDc",
  "key34": "3jVyNTioNw6Dr5yaFoWvdC95nFxPM29YuhuXNrCjYbbMn2BsX1CRBu1kg7eDpmcQrVswzvck99y1Hym5bHVNARYa",
  "key35": "3QgLMAg5ZKAU9fcHWdYNgmzvfgxd755yEpmryRyy4DNi1bETYmWJ5V5XaNunrm3oNcmZXCE2U6eTe4YDovQk4k9D",
  "key36": "2v6csPFJR5SMMtu8boX8dKtEKZMPj4jSSSSAUE5Ru3Mqe6RLPg21erVcVUXbFCPJ9vER6DLeUqb1rYMbPAb7hXh1",
  "key37": "4ka9TRGWaMuVE5X17ApdrcjDptZpNTgFj8dRabf6ezuytf4dq4oH9qU9jYtH1wJz9nqzErpwgCWyKRnUixHEiCQb",
  "key38": "2gnuANu9QLKPsfy3FihELeCghXmRAEHTyuq4vVW7dg6nRrbsURW8SuMDg8qZtkxw7XXvTMdKRhLidQCEwhZrHLzE",
  "key39": "YFVR6Lgta3oS46iLytzjAZ1n5DjYihBM7QU9mdScVpn2fSEdKtCDNRUAgAXFhtR4NTov4A2BKzAe6eMsVCPkbGT",
  "key40": "3w9sHafK48EueQQui22xcxUJzF4PJ1etgt81NMPLH3rDRQrtmYtAJm8KCHtkLhD6DJbraxzYiP8U4x94UDH6uBzL",
  "key41": "5fELN8UexSBPkYzj8KfLJVoruMVT8cKDRknTwMx2f5uXQJxEzWZYw6hTapSr2CfHN8DyL5ktayWHANJzXE8Ekc6V",
  "key42": "48gA7KHLfFARaovK16A5DtJ7YApFsQDTQP8QB7Rc15XUcLQkLSGibGi33YXFqWZzFmM7wGeEPbgekAcP8z7JzQGu",
  "key43": "2FEJkfC5zGjmXLPp6yVFp7QTYwvhxuaTJvTokSaYLeddevZoXvvWRV1UKbQB4iAmQkKK4zQirybsdKcwbhTYAttP",
  "key44": "nkjBwU3riNnWJseuBpb8fZWKXQ8vWyjpL7FvzeFzDZKVvUmhsyN9SsN9Gkcox4jz3BmM18EgEnKuJH3w95LZERW",
  "key45": "5VgEAiMcHNhC8kxg5Etm2nseunhAmMj9P9fybat9csFAu7RnW1DFZXa7CY6czcAash3pxygnLsRTxBDvdEodoTQL",
  "key46": "MGsoxPkhzXPX2mNd7Xw1nFaHqh1P7ntDmbAG2jntz21pvwZuEjpMPY3oLFvhZ2PYwGGDMvXEQGWq1FUNeziK4mW",
  "key47": "4vZpPwumvDCmx4DtTydiESomx95W1Xy192SiB8JCo7UBpsEwiKP4mHzXQJC5x6RFy2CuDNxWyGAUK7GykTMCV3xj",
  "key48": "4dygv2XkmznmrDg4RXNqSRwdXK19KNZAx4c6tzhJ2idLrJC3gine9HpEJ91WyPgxgbA61uv4R9H5TDzU73jc7hdm"
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
