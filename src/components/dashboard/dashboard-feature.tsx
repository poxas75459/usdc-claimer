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
    "5T9Tw44PMdAJhm4dHAXdGDSM8HPZX42UJK1BrzeecLJPUXK1zCLsr689EEVrjhRSRarFAe5GmHv2ai9QTYmjX58q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zo9hnecU4866piFMGwhiBVJV3Xh87qWNmtpWTDE5kvxc5dLTroPbdYik3DdWH3oHEHjrLsTVgszJBxnyT2jVZBj",
  "key1": "2URUWT1L85B3rK234kq1DwGny46FAmT9nrHVBXQ7Uy7MojnwLUpN17LdnTUXS8ZRPpzutAVPdFttZ6hxqxfA3S1v",
  "key2": "4ydZX9WYJcnAkPB228jt3kSC61nrguNE2VFb1qf5uXRbU9frbkapu7kgTRbb1T3AkMMRKWouta6tGhsGZFuS7jDd",
  "key3": "YAaP67K8HP47Jw8b6sFs2kyCEpGjuYcgVffaNCJ3wdVufWWePfvKLYEBbPzGbNt2Ri3xPoFkQav8HsgKg1qmx8M",
  "key4": "4d7Ct8FNMhCRr85VRcoLf2GcfbLNHLj7ATteZWEsoCZHP9FossxxfXjCjt7PjyWU5MhC2KcdLrn4E49bKSRRLmS5",
  "key5": "3hdfRsMQJREifLEmyLgRqakMF4FHoQL3MWDHnUzf4Tt1yw6vJq7MoinE2RXdsj9pfQ8oEp296Q4BJUPAqETSiksX",
  "key6": "4oUx1iyaciFkNoZpbCdGp9JyCQ8U81sevN1QnFJ5b7VtjGzrN7QnxgapWWBz8xprE5r3KAJjuNYTMLSb8HR1Jbqn",
  "key7": "2SsMr7RdHLUGRMfQ6xHz7Hc9Jj5qa2mZ9wCrzyu8dXTSckXqpwbs8YB3dt4PSSFHsEC8FVCmzYN1oLVqTAnBJDnn",
  "key8": "4BcnAX8VULeMfNwQnUhN9GZqv1mVqJBpATsDHHKHaDLaTSqmkCjBCn3m3YFSn3D1REnwQFR7dxebWTSfDAuUP8dT",
  "key9": "UQL1ERdk7QB8F3CQ31SnPwmCFqSDyy4Qk794rZjDZYdYwgnSQawPrw7hDq7SETindMLcmuvidFT4J8gCWjgee4L",
  "key10": "5miAC8qk6oXG5Ujsq96Te1PXBA5SU39WLBEqYQQ9zdvEkMRNuWqDUUmwPHBkQ3bgpuheZ2fAH383H2uBiSY4B5YM",
  "key11": "4hXaQk6Lk1U1tPQn46yuQbNE28CUaCD76UwsiGDYppgiyws8wTz48TsDyRFvdwhPsiQ9qzJqdW4ow9NuEqQ5CFs",
  "key12": "5SLBwAAK8XLFnRs89jTsrjZL8Gq38wBRxHSUZMtgidxsakGvvdCfhKSUtCP137qj4GMo8n35NnCQ3Krdtg5LyCfy",
  "key13": "3jGarzHEWiJq5vZPbSg4hBnR2iXe91Nbwp1E6rnfw6sbAoCQ38HK5bWPQ7WNwoj7nHL43gej5VmipHDtYYQrEbVU",
  "key14": "jLT9bnyGPXpYybCbF9UB8sGpbUwt1ysceuq7bUZBYFgMa2ECfEocV8EkxohwHjkWVq93WctkPep9cJaVEMHLFCW",
  "key15": "3k13mqVeQJnSQhhDdxFvme12yScdcGv9B7zHmskW1dkFcw46TF6qkuj2kwv2ayB7aStNxDAzQhdodS1TybHTTvj3",
  "key16": "4uXhSKtCHSCFjm2gjSytddfoHYg7uJvyTNRE9czwT9oqh1Sxmpsw5Na4ux4bc5vozADkgNVWcSwzWbhy9pdTuGAw",
  "key17": "3QEidmJKzm3Vw4fsiMzxc9kdKqzZhvyNwTRn3ZYKkMSxxoP5FmcXXWmdgPdEjQnRp59d1Sb3dHmrwGSry5htqmzb",
  "key18": "3zp6CZfUmzovDEN3KaG3yuAogGcFJp3G7kboh4hgP4ZTohJ8nCzh8zUAUKCYZvLQyGKuH8LB1W5JHetvuQ1sBuzS",
  "key19": "2PUmUsc9gCWAvUkk7H2tjsNtZWVMoKDggvKvca6XVah3rQeGEo9siUgdd99pGY5F9iRdr5NLKQSJN4ij8LnMpF1t",
  "key20": "3EZhsQKqEGF2Kp4YjpBZx87JEyQMYvr9Qi2uBV9uo3xk4WFx1j1ptd9JjqgG2PDimkAcAB55wa1efLtLKQit33eB",
  "key21": "4eGDJoBTmGwibRyN7GAw9PnPCqZm5XzVFiaRzjPsUERz4sJebz9MGZATWsnTnu8ZPATSvK3rmHnsq9rSLtriUp8A",
  "key22": "NjXXJYGAyV8zYKBthbSakpCkWBCpe8d4WShqqJBPYWGxCGephh5e9fmXmUzPVqPtTzu6QtK9EwoFhcnsYWDVRAS",
  "key23": "4pvfLe3AjLixAvcSTjJfPM4YQXRq4qFKS9Df5B6P72UP8uuMHGjv24hRPPi2zxfw6i5CmiCU9wn2YBBy6mWPXDoX",
  "key24": "4NBeqp4ysEUV5BsmgJwqErQBu1Jv146dvKsy3S7Hqp37SeKyKJVELqcVTcqyW6RzgEvRNL54ccWda5oMkxQb4rr8",
  "key25": "48BENCm9ZBS1XcBEMWPAANqr6gdMAvzdiPpKZdJjYtvwsWXW19KemTHbXe6DH1GXKSscxsjj82goAxfWWzvSoZWi",
  "key26": "JgzhEyf5HMdpVzZvEqiqJ4x5Wd5uuPy5U4Bv4PZUk8CbdSJ3tktFaW8rtF5QpoQZN6HZWVrcDizpviW4PoFZBRb",
  "key27": "2WyMTMHZEfDQKbJMAkZwX4qmfj8fWHa54QnzFTct3WtUpVb7GpoUKiiYC1TqRm3hAbPFsqrS7kYcGq1xYQJ1Q2qH",
  "key28": "7j4eiSqJNPnMYb4jYuYgmnoFw3oSkyHmtiGA7QHDRZwMcAaMsaeEszJM2eoTdSKiM5mB7kUmfjfaG2csTTmSJEW",
  "key29": "48DYQqV5oCcDqxyQk9924a6DRHuiA1yjMsgcUGEL4NgfBErVWtYQK2Bi22bHsdDsJjzbzjg8kgcZxdoj53L2y2BU",
  "key30": "2SM56jh5hcctpUjBsa4Psp7SJQVMkrNdsuzy1cLYWEvVJoJQuCe2i9dNzGfEhTDvTSq8kKFeu5UF1ZG3gfzpR5WB",
  "key31": "zXmVsqB9hfA3wHkEWJjbYkQJJLwSGiKcV9bBUkRQDsdiR6CGtaWUMe5KPtLHVkkffcabEyxEBriSBTKR1nmjcF4",
  "key32": "3WNzQqUo9vdjDQ8adN6WkKHVaF5MYUAFeBpSuZxeZTY23dbs9iXgVx293tMroJJKBQkqREp5t8Lji98rwHUtMjPH",
  "key33": "5nr2kL73WY4YFKvGNq4cQhsecPbAYWmkHEfkoPCvPp7y1KptJP1HLdN7YMzFCHxZT2HsJgqgj9Wyj3jLoKopozo6",
  "key34": "4AkDfrBzdQn7ASKuQFgxihryXN6QGy7yoPAGR24RdtmqhHBc8opURTpde9Xmk3nDqZTQWoQMvmBvkxhPnL2vNf4V",
  "key35": "4q5mszieiHwWfREKDen5P3vW5y56sEEtQbAR2k7tXKHVERUCv1haBc3pvoAgdd6dmRvhjdU6N5XvsuQ42n4Unqi2",
  "key36": "NyYNjivsfCeQhkYYyddd3JYSrhqgXCtxR5BeWjsfC5uUeUoJRbveJs1kQ9UMFfv3xtQnh3Rcpjen9PozAadiZN4",
  "key37": "5BwSqWmXCMC4gzWeeno4b5M5BCQhDEU5YftHxTc7BWA4FrNAC3oNesLVeDW1SXQr5kbTsgPuPqFzPV43mUFwGFky",
  "key38": "2pY8sBLFGf6SNCFAmByxNG5A1SFT8zp6eRuVkGBZBsMyesYQVv6bbrnmBuXhsR2GvbzNw9gaDUKns1KkCeQ1sWYb",
  "key39": "4rRQecHfS8sH5xEkEUrEz6pfCNYZrWMAkox7XCtQP9JtTi28mPX4BzqxVUudfyN2aS1pftVi48VocP68GZDc1JMu",
  "key40": "4obD5n3uzcNQukGorJQknu4ubhJMtzd8hT71e2oicyEQu5rtQ7qAwXSdXQYGcowqhvhxuXc4Md8qk3X1rnzdZDRW",
  "key41": "3AhrimLMx89777Th8tqvGEDrgFQWubegCevHNygaox7tFgRkWrb9dsZJfP6EZHeaf9kG4xWN1de5NgwQZhAsCwaB",
  "key42": "2mvbYZit6A4BwTqSJrDkR4H6SgQUfymNy5iG2b6xfkHRJ8ptsQMiUZpB7URug7NkeqwDTNF61FZPMH9AkBzK4SGx",
  "key43": "2Lje5trF5KSDQcZaLUb9nv5Ua1tmxhV6KCsannT3NZTKAkxuzfekQfLHHCJ4x8GbkhckscQ9DNJuCVyuAQjaKzg",
  "key44": "3ov3PfDHHZeYWgwyjhAGhwbdbtHDDfe8vNq97kHUGLDhSYDJPEnnLNc4pWR7y7sPNFzYv2dHhdxYb9VVBnrEvxzf",
  "key45": "4weLdRwDLiiam3LaRkqN9UpMvZ3YUVqijJyzHC71nEAQNWSXhmsYPKxE2SpumSa5kacH3MPkaf5zUhs9NFF8c2uL",
  "key46": "4CKdNr1R8op63L3rHbNpFkrX6HHE7ZKuJNyFKzFQXcA6GUimiiVdKKaLjBkjrt6R9g8EXB2NjGH1ghg4XWjZkvGb"
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
