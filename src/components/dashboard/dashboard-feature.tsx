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
    "2pLNya5ZZVKzKjhsBVurZeYjCSHdxWuXzCTtKhJW5SAnVA7mJCL2Z8enZgwvcrsJoSkn8wYMVVAFceoJSwwMwXYg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ktWhw3AWjtDh8d79PprznvYAQZJNFjuB8oHQJiUeLeqTD4uMhYgkD2n1UJrg95R2iYkDCJuNMrV6fKPvBwDZTjH",
  "key1": "51zkahH5KLZp8RQjffyZV9pXnD1DYMRf2mqDeayWGTJcdAM4YvTEtYPTVT1v6FNCPR5uAoUmBhhSfnRETVVE95fA",
  "key2": "jW3vM6tNLZEkrLVC4kGQrJxHYkU2QRoDz6hPCNC2SmWgZdQiiVYixxf4TGi1go5yayo8tn1SsZqLpTyvbdYmXbm",
  "key3": "R3WX88R3mNb34pmo4DknFF7i9odkSzVk9v2dDPsDgL8BoWWeXEr67CGEPTaqT5eQzanabU3ZVuy17ZzX9kXUsUp",
  "key4": "5B9nRiUNLxNDzH5jFVu6ye6xMmvgZKnH1bnxvPxHRTpoQxQsetCAneZmfL1HWWDWtcb7BrwcbYKHDYbB11d2g6EK",
  "key5": "4TYDSzYijTkMoKwj8TtZA43UQptSMgSecLszhe6ShW1vpWHW8xGg8fqLTavopkHASDLCFW3aDebDxX8kHNWUHHjV",
  "key6": "5piXcVVPbZYKANovpGPBxoiksdWWQGjtqHEfnj7Rvc7BxrJMEsqB4V8qrsp3pHEHKke5xC6omXrZJDMjij3iKcjk",
  "key7": "3aVXpTh3hzyEBGLhzW91ptf3TjA3xHyTpTQR19pxr4n9SSQwk2ZLYicuAAjSwqKqw1Nqfh1G3aexhMuHaCFtDb1N",
  "key8": "ZTiv6XTafFr4oBtzs6SNSXGBW5Z6sFQHqZEA6KgtAeTtDma8ESxsV4BdsbWBuFynY1yHZRAbgGrPnzRx1yVAThh",
  "key9": "628qz9gH7TNbbug3uZ69DTRjemnddXb5sUpQ55Kij6GCc25bKmzaqEhDkjpXivKpfpsAuu6Z8c5SgdSp4QDPossn",
  "key10": "3q1UHihNP7B8xsP6QRMbiGXbZukr77wPRLn7sfs4ft8qTP8zfJYgnJ7qfJG9GreuoDvRzTDNH3P4e8bxonePNTUt",
  "key11": "2aAtYXPVDZGowEN4DQR576hAAHXDqCztEBd9SZ4vccpPjNgiwsWest8CCPrZtSZhkvfkBsQGiCT8EYyRm2gpK5hm",
  "key12": "5QW7WnxN7QwJAgu4QGbrCJ8rRJ3LoEAUstHF6cY6VsCp8kgqT5LRBM1heUcK1ztMDYZLL17BPoEvJRDCMFNzZ3nE",
  "key13": "2Kt7rt7gqwBC7aNRLy9Cw56wNmoaSpDSaPdzrvhthPBmR4J5sPpjARtiQs2or7ymDV4wiDaTW28SsPmCpzQhb4hc",
  "key14": "2nxErJagcHMz6YqNdJBP6qsLQ9ge29iABvzUjtUSgNDMW8VUZcDYKZZktojUcrNecLB6AZJstxETj3RbqzNRhSRq",
  "key15": "5V8Ern8kkJvNY5TUsU4EmCGHarLmGB1s1N7EgYWL9eejwXqzKajtNmwudk38q2p6PRVSiMmJiujCrGCqDA4ojSQe",
  "key16": "2RqyE4CTKdi9WXkzbTgv8T4818WaPxuaaFKcdmYWFTTQRS6WvfSczbyQ8CsvMZmsFxZqBiM8ZZnjo3Rg4cyosav4",
  "key17": "3KsAe8wve2Yq3A6jS73QiZnKMfknGLmr4uYCGwiUJ5L6me7MiahyzQX2qvdzEVcGYeuwU3hXPQoW9JhB6MZBatMZ",
  "key18": "5bGfECyCb2XC8UoyRssekVZZYSJmwbrQdS9qDF7xfKozo8NdNbWJPcMXA7UqwoqD7JfxZS6ywjC61yemDmyRQamU",
  "key19": "ATqER7KyqK1V3o3bUSrHjiroaMjm64VnCV38f7wFbWPfwk8B3KejQDkVzA1QnzMYhWP1pYtxg1PjMae89Dbnpkv",
  "key20": "2bhffctm9zYUeeEjfZLcL2Ey7AQfnmqMKr98YZWvfxJDe93uxz4szFkPvLFnXEb4QMUcrGLaytTyR41xaU5AYXZY",
  "key21": "5wz7JG2hB8nkWt4BmuPPhE7t9D22RD1MyXJpdaGVeABHLw7f6gBdvmGqLH4Lnqb7mmCEtY5PVtvHrE2BYECFHUmd",
  "key22": "8T3H2oupRATuj85a95bPDHgSqcnuy1ggQoxrX1EWNZqiXMyi6zHWesWztZvZzJwdBSmWVqhzY4LUcWjipmFjrXg",
  "key23": "2yHeMUeKrB1cBspNuAskDZS1fEu4t3nfpY316kNEcvfaUEG9NyArbFY2GvqqqvaCuCrnJ7KUPudWVPg7ZQPLi3Nw",
  "key24": "5JYrMvSgGjteMLtd4B8Sbxf1EYar1emB6Pv3sMuSsjqdo4dHaEFzCfmN46zGUBZNwj6RD4kr8sUKVVgq1HpxF8LG",
  "key25": "3xnfRcxTnz2gk8XA1pJKzpBs2nRAvzE6erPZrBFkn9zzJ16WJJxKeCbY6nQ5bf4rtiFBy9n4i6duBP8XezCeBLd2",
  "key26": "61EoVEKesPTdSe1vuZZwEoYCoikf97DhMbzhHgZjBDDuoPD8xyybNW7Mj9vHRR2mTMN1x8cMmt1M9nBF1NnSkjnB",
  "key27": "2hUp7LJzoe2nfW1gSDFK6w7FSknkyzDx7ETA6kDJdAwiQXSFR2viZZeXsy26K5xHmij7xTixsZzmam23ywDmrs7M",
  "key28": "4qYPuEGtrTfNvNEbh6VHMawpkrkFKhxPxbtkzCXweU6yiGkxDVBeZvunoZCd8WWru6KxqiqrrVXXn1BzDt9iSZ5q",
  "key29": "sDnuNyAQq4oekpVK3AQ8BZC51sD9w2rM5nidwJ9FaSLq6TBzvyGwEAeSQEQG8fEEZfjaeJWEd8XyweEgiQFFyLP",
  "key30": "4MzwAWzCr8nMyyx5Gu3J7uHUfFXJmHW7BffzjcFgDhwD15HUVSMFHDUsgAVR3PeRYUFCbVX3TrkU7vVhHqh2KFy7",
  "key31": "56eW8JZnKURcXNXMrumJRn116g4ykbdiBePHA7wv75ELvzBoR7Dm9p56Hamywxgn9QBxoBqF7HsifncN1RZk63VZ"
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
