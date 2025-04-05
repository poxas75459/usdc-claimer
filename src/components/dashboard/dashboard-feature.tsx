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
    "5d5T2cdaxvKMJ8VDu2kxM5cxVAiZuHbCygx6x4N3Xg2VUPKMzGzEJEVTxWsrKLkjQMdEmgk6mt7LC5Dg6a3rfTL4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "f5waC8oRNyy2jYgbX4KJuitXU6KCKcw6J2pnA2YGcjPuwYPgTJbYvwjdNsuwerHXLWoBwYZH4EUdKE5RZ4W2E7D",
  "key1": "2xEgdC35NMRYrnri9hHZ5YBarJeYPgkVTXqD4FRipv1jewn25VuyjtyXLRrfi7L8GVJMdaU24NfMY6vnAsspca2T",
  "key2": "2yKExPcHv3KrNYumjy8mDS3TvHtudHPEufSr3rCjicmMLoTdaUMHZS5J38zw37njzkuLQxAmYxMFVS8iVhyVpSUB",
  "key3": "22H9m4dnvWPC9nE2xY3KNZzykfCaEjRf8SypBrym3pwqm2GNeNjWTYtG9oJQw65N2MYxX3BNFAMmNUS2UgEhaLey",
  "key4": "4Y3wqszarZo5Ufma4rynEgjF7eycoRAaiHy2JviRxJe88E9vi9CK8tAru1YZ85VfLbaEuheHLQmoYmYLv3QoPqmN",
  "key5": "4qPhq5v1JFnvx23iw3D1beXEGSpeHwS4zXdCmzT9iGBFnkuMdGo573KyshX8y5jcAdsRKPE3RR1MJMcfmnZxShWT",
  "key6": "2FnLA3tSWu1yT6Bq39XGoXh9anZLpG75bcVXKVZfb1hKweDuEWFNjg6QJtepExCWgejq4DsbgzRFCfGejvQBSRSY",
  "key7": "2YbfdvV1TbJmPtUm56pyLY4Sygqwd4V4VdFKiZGQNfNCJ1orarvNoQJ6JtVMQp1ZbRRNThHpPArB6ULHUuyYaLi9",
  "key8": "2nnAYsZ7JWYw6yHB3BGRuJ7fnNtStgp37PrVSt3YzMFY9kSaXfQ1xQC5TCpoV4sur1tnLsPN4ngJ2reNerhZM5bd",
  "key9": "4bV22ksqSHL5tH35qskxnX9GcNmmaMjBW46nwyy5L2kj1jnLA3RQx2yTgPjDekv2yZQLke6uXhGnvjYrKw8hK3Wt",
  "key10": "5cm7KqmKVa5HQxLZeBsKWsBxwTzZeYCPBWdv9VEUQAHs88uh3CBx7UN9vvUNuX8yn3aqhGKg5Nq18ySuJuq5uQeC",
  "key11": "5EPAHTjcSabHUEo7UgZ1n943F3nj9bbZNEF2MYdrXjFJgSL71M3JcfneMxkqytwaPusJ88aT74KUDvXGhfcJeVdv",
  "key12": "3DMsbe6LVpxzmjjoQzfW8bmuHtHLzaM89myvWYK7iBPEVhSfqUCw7jnuyBcuvkCTx62K4AWHwssoY3MozUqBaioX",
  "key13": "2U4gGFM5J6Fa6PLHDAacky8W5DW3TK6YuGJQHD3zECDLuaoZN9qoHDVK3MayjUCZL8E5YAoLCPvkWa6EW5bdyKWf",
  "key14": "M13vHW6n4FzkV2jV43P4WeFjdZwRBoW4tCunGcux5eF1rzL2txGrBx1gzHQNb9M4ZWEEGv4ZzxYf3dTjRjJ4cfz",
  "key15": "66WALenrFDLCEFgA7x58Ngni1Tu9CaE8fCtgt8JypLDUJy3ygKFtaNVCVutvWKHhtkY19rEQeLWgT98UGjDYf2jH",
  "key16": "2WFbw5cdjxVWkFXaMcnSVbCmDMUhDMuWX74yuY6kDpeLMAuLFrc8cqH1PXcRgsqEc9PwDdQnUCcN29U7VTqWAgzk",
  "key17": "GR55qurHCB6phtjjox4JqAdtAwQ31cj4J28PdzdacLcFBVoD82PcdFWoLS7RzwKbWGaCHBjTRXMapXg5GbeSv2q",
  "key18": "4KCx2Xj9J7d1AeqLN5eLEgV3AR8Kn5XXYtYpanPwEvhgPxb4x75qE3ZTEw2tmasp5Nwomnrv3nZ7dhjMbj6jfyKN",
  "key19": "2qFbjYgSijkXwA1j6KFVz39de6ZV1iqNgmzuT4Z25kBTL9rhckhHgHUUCT54VXtPemABG5xwnEGE8RBQz2Z1EXPL",
  "key20": "dCbeApuCDwr4Z3ZrM9bd3XzdGWefuS8qE8BxKvDdDTDbJnYFW4SuZHP2p3UGt5BpRPkpwXQGQyba6gHnX9gGcgv",
  "key21": "3XSV2817yfsxSFpKkcsMWAMPfjQjdxj8gZdVQ9jj8BYBmYVgYJXiikMUWQKEjFhjwbm59TZUo1uwgvbJMGbBQ5vs",
  "key22": "34v2ybzfNWW8jGPw7Jt5gskgpirxdSf5vtFLcoots8UhGieAQM6pobkc6gJ1E9oLdfPTNETBxgRXbBWTGySJ3tAn",
  "key23": "5YVHrDzPmA29584chU2LopXSLchSEk8fMd8DFzsv2UUZY48hSjHa4cgxAJYNxqHpY5WTxytuTZfFTNLN1FuiRhHc",
  "key24": "4vQ4K2gtz8gQDStu8RMoEM6FfQgzndM6wUuRuihYYftfg7q3T61rrSdAd7PZzTydW6CBQUkZN6qbvvP4R36gQyUW",
  "key25": "4MBcFVCgaqR4C1ChwyLgfvSFknF1Vt22HpRQ3YPn9t6bqWdgETkJNpqSoowVWpGnY3EHEAytEvJLLVxaLpJfUXkG",
  "key26": "5ULuaw6UkumkPy11MWPyZpHUyyaBe9uUso3P8zqVXpyYZ1jXFi4rUmUfWC5GTFbatV3d4dLgjMwiuivH3ns9dPV7",
  "key27": "eQkTNmv8yhbwJYNGqMB7LCNBsfUrpK3E7Jf4qdrSpvK3WThDJZHM4PiEwuKK5RfWvy3wuRBXGHfwYEmJhjLE9f6",
  "key28": "4KBT8jxXpdLSzwrrbdLnvoYCVgay3ge5MFJh3NfrQKgvm9URvyBfWkTm4xMDKnTrB1Zfr7LqN8n3PXJmcWWd8hYz",
  "key29": "5C7wuBD6HBccP31VyV5XciMnZHHUzc1aos9i7MvGUFHMhtY7XVA17owZBkXxLk13yW8Hcd1kmMXSbA2jehDiXAF4",
  "key30": "4JNJhktxNNEZYGrX6recxcopGnBkVXBmEX8SPRn7wWFjisK3hvaaa5nZvmopvjqTBfcXF1T4xq1PXaF6xTrgyqBG",
  "key31": "2HctWnhAe4LS9vFmLE5nEwjTQG5vZCsczP612wne8bMcuPwWNHZFkWRF7kjHJKMHKsztwYkgohFsf1XW8Crmtgui",
  "key32": "2NMnyBe9MwEc5nESLjpxsAWUm7oWHdhPeECZnSHjjmjA1cvyiKxwUurNfCkPr76BpjRfmNTfY27RfwHi3tedYzvw",
  "key33": "2RFFpCCRVzaCN3x3NhLg816fq3KfmBM32ZZGp8NFYDw1rm7uEEaC5HZFSQb4Y6JBf3xcZUcPTu3fvDFw6wNoopTr",
  "key34": "64QjVtBpXHiQ6HCiCshv8W2Mo9RnSXPZBSPdytdhee8ShvY4uqsoZt1xcKPRvLFCkzgpv3uJYD2cGpJVqKq3mraW",
  "key35": "22nPjpcVs7seasESjxxoWZT1k8Qgx3ckCxpf8A69f1hfLrPUtb6pGVDDvaDhLDtwQ9qKKvBiURw859ZZY5kJZhno",
  "key36": "3bE2EEu7y3NThb1EUGseME2SQVYcua9N79xCyTiA5bxVPxR1EU3BbAR7mZyjAYpX9JyVbdxoY89wmU56fU8zuXJE",
  "key37": "4tunqTuvbfT3yRdNSMmBAYujDu8EnHb6AUWF3HTTai1Sj5YGmuDUHVuPbkvRP723ggUpKTzGL7miMXofZLiAa8as",
  "key38": "A1yt6pL4FuP6Dp41uHFidgXqKhWaGQy121PK26yzfcvzJSMVMQxNRokBTGhGCi7pXU1VuQVYQYrX4X3xsd1WYdx",
  "key39": "2rDxzHymLx3V3PZsmq53YGRzeDPgpFXKphYpa4Uxk3nASB4FBNuCvWSJHQk61x3b2v6RUFf7T2b5qTimM3q9xp4L",
  "key40": "4t9G1ULWvcTd4khdHAkBVCLQBtSYCzqXMojxZBbqsSwGh7vgLmrMqnerXqkk2ZQskLXQEM9WPBqfLay8ea4kZ45P",
  "key41": "53ttsPDYFe3SmMUuCCuvbNcwhBc1jtU1qWdFHHktLGGqWccdgeEQ3ZkUoNC3BBRUW6BeyVYrYhDcvZoLKEM3DaCv",
  "key42": "4CoJmfVxJKj5puhcnYa95EYea9q8qUoZ5U6ujFqCuJegm3PWcZ7eSQKgCvJw58aKv5m6ayScY3yiEWVRxcBKBG8a",
  "key43": "xkVGQubeGJXJeD3LdUSDjTkikYpeuqyy3112mm3NNUbXMT1JsmECgo9nzo8RBr8sMgxo1pTNWxnFWEthS7uaGt2",
  "key44": "5T3Wgw95bRrvfa6GHZQNEaJ4rCAhd4a5aNEnaxt635L65jsydV3icyaMDThLog2hgB2bx27xgKEGccib116cSwgF",
  "key45": "2if5PmzJvH9UfMrCQfADtWci8maLXedinkqYBsED4HXeK1NC2pg6WcnyYe4YYgiUL2hU1Xfu6xoKra4AwvXFsyVD",
  "key46": "3cd7a5JV6EWBQwddLqPUkpnR6wQZ76A9SD26MtPJpwBgfaxkX2XzPj4p83zeDDvG12Wz3WWTY31k7dxnkjbN1cU7",
  "key47": "3dB5zEXNahCMaLDbHMcRgxkaorsbfNYAw3YRPCLr31rMucBrA6M7nLSsF3mR8N6dc4tUKM4zqXygkAFTmHBe5HVF",
  "key48": "33VuvYUDj2CN8syLPwW7CcR4kYYxzubM1ARJQypk8NFGNU7PAuT3GrFNtZQbVR7X2K76pAyJHMmiWF1qVRhjUnwa"
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
