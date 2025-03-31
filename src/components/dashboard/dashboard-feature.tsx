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
    "3RijD63YKRYVA6rx6kiD9oPQSdgFB3cCt7ixz2yzEACEeWBu4s77GmfuPUhU7k33huLzjsRNkRG31rJy5r31Kkq2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zMGk9L4d7udG7M9XAHLxsRD3bh7VbeyFLkkWYtt4Cwy5qQQGFBpjtDkQqwjzrZDgwrs24gikvEHzpRhS2E3vUTm",
  "key1": "4PmoPpnVmY8SCPB9B8KenjhGAhwpMaGYNcrMzAYY1yWz2Arm4WsaakwzhhZw6Kc7jZQbffvRxAn2aympcPxkZjBx",
  "key2": "2iQcPRP995HXjxeYspepCHieDj6nwGFkDFWQ1hkpj7iYFnVpokGJeRgvMqgykt57MKAh9bkPe3VHZ6pR7m5zkzx2",
  "key3": "4XZvqcg2ekQnkUiuP2FkraK4TM3K9Tg1hppKyxUSYg7zt288Unu86PY6ynhxqvP4oA3hxNNiwvnEgLhkx7nDtGcv",
  "key4": "39R2VQj5za3XNHg4tpqd9X9cqYQnshfZxyBErPJgfzG8cCuHm8U8xBYEp23jUv46Xcp1PSSfMdtbYizzwkPNq1nK",
  "key5": "SXNtv9uK3NLGP3iWEKFiBgWdNEddxYvhBuatTbFYoqRvNCjjqS1dVsr1VwbskE2Cg1vSBvw882vX1wUMmqUbLJP",
  "key6": "29AfGtP7crdVdQC2pyiBQAaTyLD8aqCxMrJtk1iXxgdkV7aTSzJR2bGSvxF1SR7k6dne57jR6a66sBMh5dhr7Prm",
  "key7": "4RXnqjBGVsgeqEuFfdT5oyhRq4bwfTNxR2WSLZEvs2pYzrj9qDstyYqXhkAHC4egtVYQL5m2fFUXMiYnpNjn2vNL",
  "key8": "2h3GZsmhrUKKayS31Ng3ZHkgqhh5ydFqbMnM241PXyDe3o7KhthjQ6fzAy7KFSYDe1sZDVSHChhgrfHFnbiZvvy",
  "key9": "2vKahKajLrBXXMnaGaMmp4Uc8n8HTCN8riuoTE8esYjPupyfzfv2YVRaWtWYK7vYu1jACnfQJrAbD4uTujqJiCZM",
  "key10": "McXTPZXmMvwqFzGZ5uGmnGcohMkvfCLWCwURYeihUZC2ojaBQJyciNvwM9HFor29dRL1UUQFTKLMjMU5XNt66xH",
  "key11": "5kyoAKgvFcLy8NQsoAGYgPFmjcwfnQ6mYQRQdURR6DWyGq51WvqocBhCzNsDUfc84ynJ54rg3tY2Dt7eoFe7zTVp",
  "key12": "56Ru334wc6by923hqdJgj5YmvCAXtZg1eK3qKvKsDGDBvjeAePgPFxj6Z1FcaG3fnrNmCwXsVGwrBo7aKFw8xPXT",
  "key13": "sp8omS1oACsnx5mRB3ezhwKmhsGLprZVpv8SLTCmxxRNyx3dSzf2zqGaJh5GvtkRbD9P6juUJ4EiR5kmDqphEzM",
  "key14": "ht9ipNvC9U4xcnb2Tmg3QD1chM26fF4zGSrtNAjW4Qna9dV7XGuXLHUxJVPXqeCQg1bHMGPGiY2h5g7bxrVh7rh",
  "key15": "3uwR6tAeKVJ5nSdhYr85W3xhoUoSM7dYKP5nCqNvU2sGuT9j7fLz2rLYB1HZCq2w1oJ2y38hgKEcQDYRjp2bVAFu",
  "key16": "KMhSuRpaZqdhgCjPnMhahYwVa3zVuzkgtQzrMfppCWXdQEZYktxjMJ7evVWmSMfpPx83HAFxYUDvLU6Wb1R2Wu7",
  "key17": "TAATuCjTHJSocTcSsEsVM6SPTbNVUfC4csSV3dBT1KtjSUDTsqvZrRAJDAPXXLUUjDTP41xpWyY9MKzBekBnDuw",
  "key18": "4XseGAZ2RPNMGPa9edw9PuSfCJojnLSKBWiy5zJVpykvE6Ucm2BD3t4YDghFTxhhShx8BsSFnBy3woNMGXN3jEQL",
  "key19": "2MJ3hnXfcnwG2SKd9cZjyuMC9fLvY1CdM9gPWj5edMBoVouorWYRirrL1vH195vXbuKEa2EyPpVZwQjTTWoooQ4p",
  "key20": "FR8dpYHekEdzqVgscXbX4hqeCR2gaei5WwctyBZzgMpqXcjmUX4jpaEGSjCpyzRtW9c5bViTyFFXqH7hWdTCRyD",
  "key21": "bMaFThVFuqaXGCtf8VEHy76NLr9Lpj6gmQxBsCYzWaA3QHwXUusi72NZTZumzbohhPmecDGbJQ5az3WUjjRmMCg",
  "key22": "45ZS9zbMz3ptWKBmbzKAR6ARVgCNfLFkfFCyUSjnEftJP9Lsu1qXSMSGR3adwZxWpYYnmxX67TqCMd3oDNFjCaU4",
  "key23": "2a1hrbvdhr1xXR2Ka7PPQqAvu4NdppAhRR6xRGHWBV2gm5ssLGdzHsG5ZpMsRAwhQsCvRGGMxoRm46gqSd6RFKwe",
  "key24": "5grTpanwuMVVkSo122cFmUpDuFBLpKTKzLP34v3qV2EEtUznfCVumteroFgbfQAuv3PGU5uVEpuiM5iqkMCgZniD",
  "key25": "3HSxeS8dTa5WGcmZLBad3iRkErSFhsDaDDKp91WSnBEiVoDLgStiS2YotN9ZtM5Q1A7czrHjWQxdYgUgJCViVGNc",
  "key26": "62YdNDAzZ4KJ16r5zf4R98Ps1b6yB8ZX8SHLUGUmNViQramVz2pThVRxiD4ZXkQ1zck1N1vDKXkHFjgLzPtu96PP",
  "key27": "2fyFFBb3fQcALF7rdgKSPEFNJfbefxs5JrD57SKGjhm5AMccnW9yAqUdkCGPZSmnGf8LKuX5G2ySTJzKXsniG2JY",
  "key28": "34FWHeyQHgUhzCLgByJWC1NEymfbn77DVcMFB1FVmwwVMThQavZUWCX1asHYkMgFCudUMN2tWgSo5DFAi7tmhqTf",
  "key29": "CtJXr4bFKzf2Hap86tibZ7xsXTtHrbYM18pxxvfSqkFjBjdxR4frainV5twEoHahycGEPyYoWMUZKginSk5n4KB",
  "key30": "YFP3y7pV5N42Rzh1ETcKQTGTxXu6E5j3tbLfpKKoukVcAeS5KLRksDKXLypZjWiyMeck3kr1PnyhVcKdM3Yavud",
  "key31": "2xb8phdwTwbzNDhips7WLmqdg1peGa7rAUEuv4rQiRdaCjNN67yreTp5pcLXFfiWiHZqbAhJzdHm9cYbHsBWD1oV",
  "key32": "48c5B3UMx4qmpoSwwertFiXi15zwSccwoDhU8ERMsYTuU4ASfNTtXxJkbbVYe2gJiUdAREjYaBRUxrgVZzrL6fnv",
  "key33": "3joaG6SAwQGjscewxSpkfKt99NqwjB6v7priXMQv8V8rnXdQLoeTg8bUihEMJLWHNtKYsQdwmPZf9DzdGKyywa9",
  "key34": "5sxPYKB2DebodrB6Gbg3wBqUrsp2GZJVDcowUD7hv9sPo3Ndj4T8G9HaY7KgXSWAb8hpSxaLqsULDAmTTsEwwuWa",
  "key35": "5PhU1XgjJA4NxLn88rTULJhkkM6sZxwdBjuuz5ju9heAffskefdUVi2r4scKGfZ5NSw7SL8QHmKzGAXAG9C96vpy",
  "key36": "5qexqRxkUUurmhbX3nFNFf7myMECNQNwFiRUSdHwRS29EWfqFZXf7JBXFmT1or1N6Ft4zfkWXb3vGFR2agvvtmNh",
  "key37": "4fujGM8RTTUr7sxvmD5ZeXj1q4gWo76SFk3W3qK5b3wqgPJyMEPe38jutF66zQVV6zReCAx9671vUVHfogRJW2ZP"
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
