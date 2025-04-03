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
    "5UBfdJpFg5QhMnq57PzH68QvoJiMPu4G7Sxqt3TFrkFKYC2nonrL1TLx3ok9Dow4pYcpavTgL8kS1qM61v6T2rch"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LijG33MGMQ7yu4HYgTSxEjB4qv3Km9F1tETwteKt7hVYg4Mc4XfyzgfW7t3fHLSWfvSuWwx7iVxj9BDPWThjXKr",
  "key1": "2Gofiigg7yxAEsxHsPo2AghhnRTkW9Thr7Zz2Ba5uPaXfm7UqRQWq2Hb6QrXb4HkZqzToBKMY4omtS94uxy8Dwpn",
  "key2": "5dHHLaC7BSjdBK6LLwKy1ZMxo6mXdDDir47eihYmWbcNnbUBtgYnaPyFBVyiGFfUSVmd7U1tB1zsQK7taq14JCfz",
  "key3": "4YdchiBoqDhjF8BhzhoT7NbP4K8zxGDRyGHTCuz7hWXQDadvaWQDPN7b4eNLxe19MpPU8PGZMMHgLrrnW39Tj8vP",
  "key4": "3McbLgKJ5BePv96KXG9NsWF5rMVDFzePjipiFxSTC5iPk4UyVCGzpXvMzC3W4roAYanGuNTM7kQgEpRfZGo2RKcU",
  "key5": "2Z7aWvekyyFnkWu29VCyUZyKrhEunnUfD9diibJWHssaJ1m2XwdUXV9fsapLDvzmwPrvPUjsqRZcJNBGrjMQcw5D",
  "key6": "2S6rDxVak1vymUjbBBvpAdTcLGWSrxt7TuE8ZMKLWeSmB5YF4FBSSqPAD2rHfsyzAKvV9sG56UbXp92oWfdz8ZhR",
  "key7": "dHwuYTCrnMhmmLNMbeaSyvAkQD3kH1T6u9K69gvczb2MGNBHtvvDhL2VDR5XzNshSej9tgKYNFk5TvhtgFMTHHP",
  "key8": "44q2G8SFbUqfGPh7QYtbDzqHcPkJAgLxsBEqJx4swysrefxbEi7vs53uRY3cuyUnLqVW3xcox8HQnzrciVhngMsj",
  "key9": "5uyRigEuNGFKDTcm1iWPoXD6SCo8iZgrGbunoFCiENqPV1yzwQEsbTVDd7pLkAiKXwCeq5Tpi8YJ5yURDd7MWarf",
  "key10": "4qsFC96X1HB7NmL1ipGjDFGS9fcEgF4qzjKQ7SsHNrB9yRa9M9BBNiRmWL7Y4rDS4MPA7gmn8PcYZKAvUq6yWA5M",
  "key11": "3ZgKM9DVg7qSaiTA8iWwb6dop6euwiJuiESQjBzwLDG8om5Ywnky6rrm4vLovTjiubh6b5gqffNFefozCa4fZbdK",
  "key12": "5rURpLmZ44yaUsYvrJJUmr1wjFmaKiuiujthucFNPZKaFdELJput8QusCnWKLU1Ag7jVkVfWe5FJn6kXH7vAtpBG",
  "key13": "5NN5KCKnDvE6afiPRLwsgRZ7JttBivuHgreJRCpcFSHJD6MmwN7BJJqcXoe74pLupBi2rxV2tKtxTnPfhFhp9V1C",
  "key14": "3UEq7CzACYV8iGV8XXkgnkLtFVmWN5R9BJGGPEnFqhevQuawhgY8JYDamrBRXHtsKQkeNzwu1gyeoWd4MY6UQwKe",
  "key15": "U4Bd3ZDQxPqHjhyzrXGETcdz81SAY9EqzmsdCo8mm9MrjJzQgnkjhFFsTxttzHYMuR6d4s49EqRQuu9SBZ5uQ5x",
  "key16": "5eFdorH9uc5foNzaDpWKizW99muwGMFmhENPufwY8vwMhRrMjRu7qJqBNBcFEojW8W2aawe6J1vy5dMg1dHhFTzU",
  "key17": "5ZStoNbKgQFF8sco6gbhX5n7eejWNXun3ebS3uVZzrjQW7XaGcaYjJN2QrY7GrzjzUHBRFsRdZ2FFZ6UJvKcxviU",
  "key18": "5q3EW16EDxkbAK4ZiHtxUGKZCFgrffU3mpZQ1aFUBM7eb3vjbUGX564MtrKypvBXGRmTL2sPALkpzoKzKUDMsodG",
  "key19": "384Pu9Y6Pp8FDqnMVGRvhgFznui8X2GsbLAFrQxCeAGgjDgE1DGtUrPTRmzbrwGrnkghiX84ySkvKMjbgL1Dbn5m",
  "key20": "45WvQGey1JB84zQEsxFK4dgXZ2XRUPAQBYy8UnVLg84bgKCZptupoyBjAyiiT1qhFftcwgVJiqqfzM1uBvEmy4CS",
  "key21": "4xRKcZe83PjndHniCV2ybhq87saXXLFUs72pMo526GupnDuMNTTgVwSzcXX5wM2EjjQkGZmQufhdnTkExs7Kzc9D",
  "key22": "5KTvyniwP18tY6WZCDiN6eHVAProMD81dkVuLXmjMHHjbmkFa3QvXMi1Ht6qJt8gRuW43ZjF793PaMexdFR6xdW9",
  "key23": "2jy2VVKsyLktzRkJGtzAEk5F6T93i4Qh51pdqzSPKn4RGwmTTPcQGAKQP5Wn2UbKXCKAfuGCDRb24SQAfMUuHNhS",
  "key24": "5HyLMhSG4ywT85DGjJaK3YPc24bzPtozPRE3SDE7bwmjdojSmX3Z4WkJVGFaCEY3fwcp8t1KjXCHhXhfpj2Ry9XT",
  "key25": "4EBiKWoJkQzW3DMKnnncXMXgjuGVwhPMoKB82vRtFsPpAe4oAJeXf5qvqNbVsWFxQC9KweSfRiSe5BDWKvPMkFVv",
  "key26": "36a7PFw9oJQcogE4WsvWgRwUqxHRTCnwRDfSv2vCgwKfK8DygkDCj7cEqmxabAeEQbUFZ5NA7wWQKBmJFjfdE1W8",
  "key27": "5DSzgN1BuC196g2qWrteJGUHtFA8TDKZRouHdkhkFgiEkAQbh1bfwYbkTLpnzmRvDjGCnby6rSPq9DJD1BbRNu56",
  "key28": "5bGoEdH7bau1M6gSsdSi7EhRXRntab7RfbFrgWrvM99Pmu6CoodKFN5ffh1ZZTs3vQZiJviGNN8dM4t1WY1QAT9n",
  "key29": "4moseyG1Z5NCmi3unsvptGGdrivpC1upDfU6GLL4r6RU9zT8DKmXYh8DuBPCaqXoeZkMSU7wD9YXumTzhMLYejxD",
  "key30": "4t5UJ9hyDUMcjBZnJR5wheXjnuhE9o8Y3q6weLuq7MG5qvhrvnD5FrJsk7Cw4zx46Btz34u1xZJG6K7XzGzWmbtT"
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
