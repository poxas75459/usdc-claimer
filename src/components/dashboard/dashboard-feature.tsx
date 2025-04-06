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
    "3UiG93sec9N6DMynp8vCWefiZ3xKTXdEzw9MJqmaLtg6cqyV39cf4pZzCnUJ2Yg8Cwy9L81Ceu6Tm8T1LrB1gHez"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jeYtf3h5PxEr4rLw8tkcXW16hz2jUiFgHs4D51UvFiJG6vN4aQaZRo1UK18ujYcWdQupx4D2hXP4TT6JMUTgN7W",
  "key1": "5HTXbhUiyfBkRLLLBSpV7LXS78QspgW9E2iz5dXyuJntB4P7Kvj5SZEqPD9frDtweTiENGBnmBs6pJym4NVDJK9e",
  "key2": "5op8JHLawLx57Soo6TgVxkLnD1hVXraDKgUCx3k3kyxQwJ45avbnbjbSpyAMye4w6Qq12D8JywKGGQPDcz7MfwXx",
  "key3": "qfgPF2LA6pGBfHyisjdG32ZCycPL9Q6UcLHuaoSa8PyaVLLLcDpgGji5HZ1u165YTarWUpH3M1f3fst2Pga3Xhu",
  "key4": "2tt3FZcBTYuEAbeQhoumRV2EHpbsDt8FyGxruhF81t37S5WSryofgRrbZqEsc2HfJuuNaAnERRf7ZCfvf5mqX9Mn",
  "key5": "2z2n5UcCxABTFcUs9uUGAQDDf5AU1LMFt5Ua6n9yJqse4UCfxBTLQc4JpnBLX4scm2CRGWCnLoiwCmLx3etv76oq",
  "key6": "4egRRNVdWnvtcNfKFw3XyHCtxuqnGcGyaRJHq5fcXtGaVsKycYm9end8yUf9kZa5LU9RhXXgGcrukJRjJszHkMia",
  "key7": "3kZP2yqzfmd9vbV8Kw3q9VKwrTojj1QmgLqPdTyeM15F2SeyNpmLCXDFSs4rMCPnG9NwucfxPmMPSmogWUkzAcnD",
  "key8": "4jLZXfKQq3MvPFKwzDgGXfhn3k1VKXzx3C3kmKshTjGAmg2atnpWQkMrT6pnjWavBPHqDK7RFM4U4rHHJ7kSmJA8",
  "key9": "4FxqQj4sZrT27x3hiAysj3kBEWRjMxbmoUSJ5XHkRNQmNSc56UQjbNBgs8ReXPTU9aSPThCmsqfXu7bcyAqDqize",
  "key10": "4TwnYatn3GHpWXS7CfWP36EszULXxKS6UZAC4LFo4bEL88Xh2ph2PLAFFsytkuyBXiqYrQsCUbbuZ1YbXwpnyqQm",
  "key11": "5ryytQDj7evfjWVMwL59AApiBc6AzLp14mSNqps9Z6Y4uGHn1jexYurccoi22j7F8PQoQNDy6wdCLsZA77VJGwrJ",
  "key12": "5sVNa3LEm5UQa6yGreXxrm3VY1DeCReNc8FTaZy7UjcxHnig19eK8kK2FJXU8rVdr4r3Etx7EKjYZ8P8UkWzGXQT",
  "key13": "5A8CuFS15ENWJQDLyd3ZFNPQrRxNnex3ao8xVHknYpFgkvMGuYWWJkmni5CQcPcMsfoBhcr5vu8EDCCi93oNjap9",
  "key14": "DRK4gQP65uNNNkkoCfVUnXg5U8ZFJVUD2871mkDaESBAjTBQC1kQmDWYrvQLsvpeyyykf1LzfQu1PW5p2xEq2ZQ",
  "key15": "4ssXwDVYQxns8cVQucw1qfNEjnAwzvKZE23aL4joM9zpB6nBHxrZZUJDBadbqiGJZKTZYadHyUnSpCPwSSYWvGkK",
  "key16": "3BBQQ7rLz4L1Uq4ZnbK6XgeXWXRrC25ByH96oXQNMVpNiourfN3pU8zNpZZstUfLbRmLJXUignVuvQxfp3d3xHTm",
  "key17": "4xmqNAEm85T4WXuMfkU9nK5T8GTSa7YYYZ959WwEXsGJzczd3sQe1XUDU7n7Fg566X5MjzENHQDPTNDQoyHgJ2Ga",
  "key18": "4HYqPfeqGMgPNxFpE7appHU7tjDTkMfH12jcMxAEWMfc32Wszvh6WEUfBAvsXstZcc1CMrxxeCn2RadoQLS9JW1C",
  "key19": "u3AzCfNg6J671e5i9hvmEDJhzTBUqwPBq43RyYhcsj6mZT3Us8nFpFbrgAJ6a73E7MYpbjAn9sy6kMYU43WjR7y",
  "key20": "3HHmcg6C1gJ5zkAQtTadKmYk2NzXmZebhBBNAfst1rgwubDXqozAd6Jo9EaaEdRJE3axY3XCCLM6ep4YZdZGGuph",
  "key21": "5NozMq4zzAtPuEd1VdhQRT3YCE83ESN4FX2MWZXAjrBw3qXAzv7kbjm9me6K7pq8UZYUEzcq6NjaLFDB1vrdvwWN",
  "key22": "HVq5Fw8FMQHotCsnDeanztTmYTkGgPeXP9Bx7DDVs4XsL5jwuLguAPfZJqgkN17jPydCHbEzWEPDKqhKpF9cxDq",
  "key23": "2u6C1hgFnwUQFU1TMfwNsRED3UKgx9pZTSDDX9EEz5KGX2oxBfEia9Wht3APF78LP8UpyiFukjqBHoLxca18hVvz",
  "key24": "2gFqxWjgYND92hpsuvVdVV3ZSVRRkbiyxhnntzvZoLg1uEw8zHuTVkCvRMdnE5X6xfcSgrhbUERGUK8pPtkmRY4A",
  "key25": "qCw265pJKmV4ws6bwofuqSjHPS5MVFmZVRgL3bastARzMtAj8VJDy3DH8j5S6f1LB1c2KeL18ZtzUDH8WwFJSom",
  "key26": "4yTaaDVAdcie8E8fRAiWzQjo9xQGE2tMztGbMbwGLrMCGd8SnqQaybYtBbyu11dNWAJLgU18rViyNrhmNiQ2Tr9c",
  "key27": "47KuaRSdKChy9g8keMzE9sQMoKExaCmi3vzHcygUfjUpndbhWKQYVSMXLhT22FLjGzj1UTkyjn9Vw24VMyKZ9L9P",
  "key28": "44Q4XLKg1sHzLcVGrxmc4rKh6UiHbV6TrJR3Diwm6Cp2nYGS1coTVyR6L3yjxtafm1HL5eR6T84bQr7GcogXTAm9",
  "key29": "Q7gNeoXJBwE78B7qRVTbdKKrLtg2v75uDZLKhoZKykb6gTFXG95h8yEGktidxxRkXLGFg7pA7dWBB8vDJTfLcNe",
  "key30": "4AMJwSXvmgdojHsKKchgCqPKcCC3T5gpPeZWDazsm8iZCYRgSBsKcTd57iKsPNdAn3DC8A79UDJ4cE1dsRnMoZfn",
  "key31": "3asqTgrRai1e1x99ck7vewHiGhAXrYyoFbzM22Ci72XRhnpazfuUiETFPgVrAj3NrebAdg1m7U3tqQC4a2E1wWfe",
  "key32": "2p6u6ww59D9Sha7eHTMF8cecjWU9BRs6vFZ7rkXDoUbKr8JpDYNhsJJi1Vt6tGV2W6jjLMy6BFuDCSG7cd8NWbtu",
  "key33": "3dpp51TMq8MW7Eni3n5LmQZWzaTjw2HDgzRz3p9uuTC8djKToXgPkGb4NtrbhFqjbQiWWzYPrYZbNmVodg41Jtf1",
  "key34": "29iaN4auxhiQM6yJ88G81t2h7exAdHFp27Lc3ydwFwbSDgNna646Lrut2jB9Z1J5vVGPJ3uwjuSJXgjUSeo2rDG6",
  "key35": "4NaHk4kdwPdWdkGhVbAFrgS4ZUPJ5NzWzhTf6NasYgYf548Si9UgRtdHGGydwm8qQ9wgmKnaBHp15gKzh869Kgay",
  "key36": "43UHDMQ1tNKvuQuzMcVM5VT5LUzhdFbFvvSQHakgwTNkecJ5Ryx4Prjfk5PKtFHcGarZ9ich4PGY1kLwN6CoPVJB",
  "key37": "4AeffTbRh6HR6XVBaaYgnzVjSKnJAfExNU9Xc6d1qir3SXWxzLFiUNZJoUq8wkZdvXXiQhQtc7ttaidsCUjdZyAM",
  "key38": "4LrPaPB5y1fwNcbSkKqvW36RyLNh8DurJJp3YrezgDUP6SrBJJtFccVW373RSb6pnycsepQzDr6t2XHr5v37pbKN",
  "key39": "5ibH7MW5qKXegc9DutafDpzfgDNrcU1xqMGGur31RvzENHNZUgmr4H9cQ9XbhUpJnbyAeDfJSadXGeTBN3tfhkmf",
  "key40": "2dXmHhWZrH59g4DY7PqbUELZVxe1yYP9ygjkdKcqP1TVMjZtfqSekdYD4WuNaQnnMo6NLfKpXy1EA8y8n66FzDX3",
  "key41": "4Jv3ks4DPqBijrfM23FrmSizZyx8XbeBd1ijueQvbfK8MTYwLfPGE12uuyTP7Mpunb1v2PCshjo8zscDkFuFrLWo",
  "key42": "rjfUX8XGgLhgpenswsM21NwdsBkJ4vJ9i9QboVUueoGRjBes23wXx3fkvtxcfP6iPARTimKskvqD1UwMCx2CxL8",
  "key43": "3PT2BCer5snM5JyaEaq37moMaiVpNeEkLosKLzWgKpTsfoHaZJe4jRm4S9Aq9NCubWqnQUA1zr3VFGVmihynaXmR",
  "key44": "hZVuDTvryNdb87U1sGSx5QRejrujkxkK2r5BNgTsTV8ocPn6uSg1bPNJ4MEb4ieQGP62t3JZhvBBYn7AiM8f5ST",
  "key45": "5W7GGTLTjJWUgCdbDcg72ZHb6Bb1B6WjX4QaCrVyeGrqthXkPUDAhs6MDmMkTEEu3HhoM7Lxje5UVDYwdvnNGAHQ",
  "key46": "9KAac2Vo2CSGSxKSrKok8sqtcQ6hRJTYFosoYuKwt3N9aJgwTHGVakLTD1JUDeskQNxEFGd9fdTL11ibFX4eopm"
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
