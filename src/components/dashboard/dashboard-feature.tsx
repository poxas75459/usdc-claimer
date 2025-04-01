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
    "wH4Ws5EJACL4H1jAxNiFSpUsJcaqm27bC3gpjuJ577x79jgMC8TcP7m7bMnJ1Nphi47kEYYCASR31bUgbgELDbF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2to5zJi7ha6uKbPDW7v383Pxxzg3SHTNU8LatGmZLza6oRLYbvnj6eqK2m5Ci9NVs8VhE6sbMtst7hghk2ajX2s2",
  "key1": "4m948pxq7ynRntN1cbiVSPQHczEJcRFSjYJNWeuZZHPMSVvWgf9bw1k5zAhExnXZAsAd5WN8zsfLXHoJ8y7PdRcE",
  "key2": "J22VozdpucHZhTFeAvgBgSw6dywtnXeWHptJEmECrVGPSgSqHxnNQJCHjXXYK8QT3mTd1oC3sMgSraorKo6KTeH",
  "key3": "2wVpZHikVzS7B8aH5xLc1uppv7YKT5JXCSKS1zg9c3JbX9tcAyVHRZ7qh8nLrfb9n4TSZb13DbB1HxirAgEY7CE3",
  "key4": "5yk8ND8mMJmu2ee3ZBDfYFbzq2wnZhw5HQmAmgLBNMNQFSFvyc5HDrWcnHF6mJ3uAMmY33y9AbCyK9B16VEZ9Pwr",
  "key5": "3iukhEJhXU8K8235PTL2WewStYf1FiqPtjjLwvY6qpoXPvETGAeGPbta5BZvJaAHmcpiHx1bvxFXrRopJuo5N1Lj",
  "key6": "gTV52JyRdFWj6a52LpdxDVLFxhx7j8LjZvTLajpL5PSAannkrABoRsobB3yUAfDXFypQ9w6k7cfVcMuntxsh4Pk",
  "key7": "4EjJhidJQTxhHYDtGT18S1yhdX49Ht8uQ9VY9wwuTTepWbDJBawE5cmcM9vCtMZcKSatCgHUSexbfS1ZvuXdMfv7",
  "key8": "4HDK475KBb9Y9U9G6TyiZgVbUphnLasj4cFJRXZcnXaQ6c5rm4p4LaUTb8QcSK93pdrqQt9TiAS1jgdQLEQ7HFg5",
  "key9": "5CChpc4ezS4FKxc1hvV3LP9EfShxr1LJ6xBXXNmWgr7CmTj5Eo41XvC5RkhNsC3gLwTAEaZCQuhrweL36LoZiPJE",
  "key10": "ahDsenyFhrnRfGsYnZbxbSwuGfQsnNHKqLfhbJZzvR8ddGZGhyfwYwo8g47xU5LdcJjPGDrbniRVJx5Z9F9iqte",
  "key11": "L37rt7TER7CgUMKk8HUJh57GznnkpCGbGYka4ubEC34ZPEZxbprdattDxzSNVrDJNYPwEL5UsV83cA9RxKykKsg",
  "key12": "3vos6BuQCQpfBQ9ZevNHaZ2Cbp8u3Uk2xdSCBYQMaP8e3yBWzz8S23nmpaa2ao31u12th6CPsQWQBmNZUzSnKb2M",
  "key13": "5YTqtZJE8VrsN4dpCbYyVeCJ78xAGzjdkUDmAkVpUPGpKWxfBAB4yZP86Bjey7VWGEmVihsS1GaYSKSHXfueFTsL",
  "key14": "xCeybs7iBGpK5vCfrPjZhJjwEAh3fiCN1a3z1JqqkxmbWggT3WKGAtv4oaj153cVyjtAJSYgucrF5LmnaN2LRis",
  "key15": "2P97U1h3tj9oNqyDmCG86QFXumegW83jHY89x2ubBxhE7yTtpXTYSLKiERqJfwFCPA7wRTLeYBue97bzLz9z1V3P",
  "key16": "Tp5zs8TGDzL18J2bJA4FigbhniKs1CYrwrvBTemdenm5yiSotasskTaiP6m4FE6K2eDTvpVXoEgfsqLkYy3LL8Y",
  "key17": "5DcHvQn6SDewg6HgRuhJu9GbXdyTjHrbPv8BNqYsn4T4qUdRuwxrYxQzpK8ZbWctaMRx1YfLEXfwL6hd2e8swbcn",
  "key18": "oABTfuSjciNHY9RshngEWTYRdYh7VLnqdamkNpghN1TTJQcBLLGuh86VWzhpRtRK48BSAsiSFw1QxdzW3ePsd7X",
  "key19": "2Q1YpJwE4rdmpL7E2kWCc7o8bCxZiji3667oupZ9efwe6K3kBcRmDfcdrrJ6PmmrisD7XZQKYWwTJnj2Hu2VRye8",
  "key20": "46uaGYyahfKercwvdEf6Sy73EhZujSFksTyYhM4MPr76v6A3UgQg1sKK9HxgqVU6wsRzjFGkjQrf9GZopy1rQhxv",
  "key21": "5aBsUuJtJiVf9qHXoNsevbJisH5f3JmMsKnJEsUFotbcynfKGnmtjDwpmoFYXMBqXkXhwf4SP9fbBKzwfErwA5gb",
  "key22": "5HbeqmaWE9VuBJfJaddqgbXcV9P9wNSjdPcrDLmr5NzsHH9HVR5SVbSCVydwbQy8xLgWZpxNexF7bgpdyjKxATB6",
  "key23": "4Gas6pSC5pch48mQP3qx441R1d8JkEHtCyk1KqspwfgBQv3Spx7ykWUqakkMrP8813ZQvzc1UsspwR9VaB8BJdJj",
  "key24": "5QzaeSKF4a7F4DEGmXsPCxRmvDEYwze1uVsmVB3LMu8vZnESYPzTpX2H4pMxAeckSUGDkTsnMM73U1Dc71c8KqAM",
  "key25": "4YLC3yexog3uvm9UfLW9BdCW39iZ85nv9vsGG83WSju9VQLXjZqUx1MNSTJ7uyEwbfEyij7kucEUKnys2XD2Wo81",
  "key26": "2rdj8RPn3UePZ59Ke5hJnse1dy9CKtvw5NeS1ur9fBTdZ2NvQkh6qem73Td7ZpRbvP446P7FbbryJWWjKo9CopG2",
  "key27": "PiYpNHNW6wjXb318fdJqK2aVx9SJVTHx8itU9H4vAwGSB8JfV6mB2nhpxiELKPMmYJah8vrmq3e6jMkcH7FbHBx",
  "key28": "2AN8SAgWqkkWrDkGVv4kFmoTTkFdjkjX5zQrpkYSFtJyfuSdtLuABBqT72uyHYiXin1cv2ycbzio5Q9FVcCr7x4A",
  "key29": "2aQboxKprcNL4nRA1uVSakeZVPjPfqofNMmXLPb9pJy51jrefkhS9Cp4132Pnm9JLH5QZpyP32oxXN8mWp3yGSyS",
  "key30": "4xCyxW2YmDfrFJRChZQDVKZ89bbs7F4ujec8tWC3HWJd3Yw8ebyVS3Mkq2gG4jJHezCqhNTCx1kgsciAUQnKDdrD",
  "key31": "3CwAbXv87puDav5vmTTMgaW76fHXjbTgttyR8d8PdKVcFUHkwPTFnnAfxwxF3YtapQ8W4M8DARFH4BtyHG5FDVyc",
  "key32": "4rrkftXYZQvUGjjRv1wAv2CGZeTU382rV3NVLt5cina3WiUHQeJmKTdyVezHbV7fkajPYMtw6d5FRnzFEXu29fhj",
  "key33": "z7GP22JPWv6DggQRSUrCKLPRYZioz9eabhCUri7bnQ8JoSy4b7kS7kyH8uPg62W5ASkDfpVK6VPE3aqZE6GRZqJ",
  "key34": "2ZcxwgLgKq8MgSTSd8sVt5jctXu3MdKMFDE1o6czbzrLVa84GNxtnQwsnYM89p9Wt169KDBmuVY3Pk88YgV4xEH9",
  "key35": "3Wptb3ZfPgJxzmnc7U6FtyAtYJZqzWYLFfLm1Ts6x6YGxMFDDZ3JaRH86ejaCUDpgJMvuuK7iy18TqdwkgbZmTSp",
  "key36": "EJTh2QAR7Q99L7UqAqefTK6As6c6chGvihLGJtQjdgbV5uLsDxU7ifV1994K5GY9KYxYSowheVFt1gZNd8a2SRb",
  "key37": "3KiWXQn4BSpQoEnLayjLdAdVk3yVepwiD8hvZkE8NzVsRbfyrPTCfw8bHzCFuL3zmP4vxyY2Rw18evKqXVE9poTB",
  "key38": "51aMMm2iisEPPJrTeFwg2RmLC3n6NTJE8o67jAtpSzsca718n7JLqsmCK7zYAqoqGPsDiJgHJW5mNJpqfLfMAME",
  "key39": "5tL5JhhAseKZrKxTiYkBTzDJLxXGfbXoayiCf8cNrQ7LkHV2PSSAL9rWZom7gjqCeAXdKVYY6Xp2swFytpT6xPDE",
  "key40": "5yG5Yr2DTFddivbAvxb7ix7zas4icDSPvhLdao8gCKZqnhtYC1DFsehvbf75sLLcTJ9EKapbnhgEFtxjNheyUHxC",
  "key41": "5xjbNnbmxradHiUHf3kXYiFNHBqmynhGoVbReoCESeASCiXzKK31iuC3ExF7NGGCgP1tn5ATyae14d9yY3ZEqJU6",
  "key42": "2ioM76Y2jGVkWTK4cNkdaMBcGbJ7wtJyjqfGPvvPHHqrm5AJqjCnGQc1tWX2BSnRqtpECnHBUpbgRKhy5dKPE556",
  "key43": "3orB2ubLbhbgU71SVqb8fsvDQkq3sf1fSFoxmTVAhgMUmDyCauCd8nJ3CsWYWkJadPJbqeDcAUtceDkDzJemRT5Z",
  "key44": "3YRr3fpnZcdYrXwbo7aVg9NsmQ9ULZWbxTpaJp9cDDSTR2fUjvhwdB5VT1xB9vmwCvyEn4hzhQA7QJYLUsQ7AxY2",
  "key45": "2tzqLURtWfBGDks2HTarqPf6Fuk95uAnWcvUyfjege7xj89mGcVtAf9GfzEEmBmafsK9wejzU8xwJJCqnXY9sF4M",
  "key46": "3tbbn3CduQGQZZD1wYaFvVDg1dqHU2PSECVHFJtPP3gTv14f3yjKBfcymFZwiRWyy4dfzsA2U7Egr4DyX77FCc5h",
  "key47": "4di5VN4r2PaFQoZA8XcuRa7TfgAaV2Rs9cCBBy2h7mhWEHsQetjX3hM57w8oK2xEAtaDp6qFkPv2ddhNMbyUWE4o"
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
