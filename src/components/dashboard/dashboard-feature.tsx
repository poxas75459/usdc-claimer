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
    "3KY9jpuMCVBmKAtXohZDTXaVH8NQg61Z6q9B6UoSpu837RzzyymNCE2QX7vfW1WG3ugBp43qJPWP5iSsPD2viGhS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TpZX8gj1XCvdUun5f54ywhb7hHw5x3Wpv4yZPxq9u4ktec8h5eXwEYKfC2emL4YmNxGn61xp3Hk2hUSWaFn457v",
  "key1": "29517UM6RPN12JLqUc4xdu3zotnhguSKDJS6PmVSdjA5UXMeijaj76qnekx2pyeBQ3tM7PNCcD6FKrWHjtPcXgAv",
  "key2": "2nHpvC5QHs5G8427eHnpVKqPkZ18sS64Vu5Jc7oHb49p1L7xFKaywgsg56N7BhD9QjCPoC5gnCx2wPc8PKuiW6in",
  "key3": "2ytGqhJSi7EXiCXVRRNP2P7kSC2kPMVb9WiZvoZbFGxxGA69M6jihCciizM3ye7WEKW9myJAHvvtycaQnVfctoSY",
  "key4": "41C1HJ8ks244TMwP1tm5dBZ5UoMTEyWtGkDrhDoVFECk9N5Dv4cxV1yHqmx9wSTcSwGF8vzYNew4NmQicgQud93S",
  "key5": "8eqrmHWLdgTA1U3BsvndN5TUQVGVKbaKc1NEek5D536GbC45xjd16q3Ncm4DCgaZQ2k3YFxanRUFYtdZJrAf3eQ",
  "key6": "51jjYNzhwpkd84irWaAS8AhPcJeWtj6QdGXqwotYKzioGMqj2oG4JUmtSjHEJwSf5Pd7b2Q7o5R3ifkD4mBZMSzw",
  "key7": "3Z83zVNyMrMDmiFEfQurcaNYXLa29chRoD2MPVik9f13oGn37XL3Z1W5MXiPmN5oJsYRFoZLe87KDGKTT9uq4LF7",
  "key8": "5DKe75oMr8uaHbGRb2b5CUMryUdXGfjViy6gXQeobvUBr9q3xyLKgcMsVzc7BAZ8Wncy9KdyMeubsqEuBBXX5DiB",
  "key9": "4wsHGBsSVpK42shuVRhfFEekSGLTeof9eqz7jHK6hwBAf6TphjGmuy7393judftXazRAaKRntJcQKrCvKPQhm7PN",
  "key10": "2PXkqNZ9MgjGw9VJyMVz2uAEetQZv8PmqvKy6txdJ3kHwWELhaeQfFUWi6ovD91UG9CAQx18DTx66npZYb5EMf7Y",
  "key11": "5uv7AyuYHCprdpkaRu9XuZiwPvV96BcZYtF1oW8buFaJg3vNsCxdEtsvcqyL8VyQgaMVzFwLK4L5DizJ4YLnN6dQ",
  "key12": "5UUjt6sfk5uSUF6KWZ77YSNSSTDircugL2BMakN45xMcZHWGCAqtXqxRQJ3Frb1mLEkzszf6XbMpU2uUUtvv6oc",
  "key13": "5qUKyDGMignMwAAq3Uu8fQwvqddnHcN4XijurkfdUZai5G2K5VD4656j24C1eSwHDPvRaP6MQQser3zkvv3GP3eA",
  "key14": "21F63Zv5vRdtxKoYuVZerxwg7Qf5RynLfVFUYitmGo18M5Wggp34nNnjS2EomRVdvAt6eZdMMTjw6qKbBym8uYzz",
  "key15": "3mPHp756Vxk6CevkUvBSv5sRnpECt6p679wJknLXFWD2UBkubAtqpUcSx3SazHLzNL7MAb3xADs3zTJQvVeNWr3L",
  "key16": "2VGxs2Xe3AN4PekyLfCfydAXAMEjWqXdZMsLN1u4nVZNYWoxkJWeei3LAzLR6FNkJCpmptoKQCEgDcJA648EBN1s",
  "key17": "474kJ975UhbBF4D1FtHQnUmMroB6usnR2fkxw42hno4s6YfZ6WMDdbfZBbUpHxZWJSVax42y1BthEAuYaWFTg1t",
  "key18": "4Dd7BZ4D1roxhw7v6UdC429GKQuKEg13sSuvFfqzFRDbjqX12Hbd1d1i7Si8Eptx6Wux5ko3dRjgbPQadDEMWaeR",
  "key19": "4oQkUxwtWLAtZNEttzVs2fGe7eJSe6SRHiqD7FMWKw5ZXAGjByoNxmGHNgobeR4cnZyJzf8YLE9vqwEQ5ZyzTdTK",
  "key20": "3dHnk8AcYzmjugqF3ED2RxG4YVuqzKG1JvSHX8ACW4bxHdsafT2HrPhDJdN7wgQqY389psaNtiEJfbDcuTySavyR",
  "key21": "2DNUbwFjBpEuU7JXt51o3vc9LSpnRYZsUEX6h8GK8RBjEMHSoLGdqJXVj78U9MC5hbF4CGbdZSwe9nT5fDr8nfuA",
  "key22": "4pGWorPoCVbmzioH8Y9gEbHGg4dLs2zJkBanyp2hK2S6owP5euQxbCCzMwZxq9LV6CtpHN2oHbkWRLLKuUqk4j8f",
  "key23": "2PdxUNCSmQdtF5fibG9Ey6L2Fc4A3TsAq7uXmgvPwuFwd34mHnePtQATTx6bh748EvK34ZXfT79aum7ErkcYA1dc",
  "key24": "3J2NaCa89C9hrTXfDTCZyHEyJ6Lj324VPdxy6zGaVFP7mE5AQ2hNrv1FjnGSbgjasPvy28262Udq1wwuBWUViqcG",
  "key25": "2LndL9RjpgZNtboDqxuCk2E7JmxFzYn6b7aAysah4YH6Sqj6JkA8aMMLSmTAhpKtKJXZnZ5qZeGsc9nbSnr8Pk6Q",
  "key26": "TT3zRMuHtqM6QDxhTGmaiYSUAMLnnib6p29xED7c3hjjzZ4GALL8hbNpZXDUhju3bXxpznSpE6F8dfTWU8aPNmF",
  "key27": "673SuNDKQdL2UyrJz9pUuHDwCdFWW4MoYHUzjk5v7X6t1su1etK6txtDz9JMycuiPJh3NoxUKQFwpGWyNQD5vPpJ",
  "key28": "4g9NtegpJdmTkoqdk7jiuFGJySHh8VUxQfHofcXL1NxpCXRSqSVjsLBqiAf8kRbZfCL2NvLq15f8Hwg3QDZKBDdP",
  "key29": "57685gs4Pwf8Y4RyHxbeqphFMXo2UZLnAhfJtdD3M76My8dvdvMmfYrFEFCNso95JWUeFZsnxvgvqzJrwST1t5Th",
  "key30": "5Da9rhSJTEdKu1mfbmgcEUePZC9kzXcSc2GQyKUwXYY2hrhT8ntpg82HukwdiPS4KKAoqtFmpEeYUEooc36sMQDJ",
  "key31": "2dGY1Y8Xcskb593z1pZ7QhkxFTors63kq9ihkXvYjJ4HhRMhggBvT2H8tht8262XwrCkeWCGZCzLaDfYeYn7NLwc",
  "key32": "KXjaWzNzETd8mv7P7oExFQmBKUiShh4uuQ2524tFheBkAEusva2j3zNGh1sbBJS6SS5Mri9WfY2poM8CMyVSExy",
  "key33": "3fZxh4qjCeFFUUkH7fUw5VWZegch9d5nB1rSGMLtvKykzPR3WZCt3FU5nLfTniae2vpxKnfAthw7JQPzqUNyqbmS",
  "key34": "2FkkRFwYf5SAocggAuz4XWcTLsbM6JYwmA9kKCQfNMNCdRtxYZnTVUqC9LWpshpsNFe8w4y55Wkp4DiEmmsAziJ2",
  "key35": "2h7qi26QVoY8QGdadR3PqSWBVDJcR8Jfn32kbLBKWQaGZXFiDBL3nvsSHmtq7pVy6fB8mUmoZKbfSQnc7x2MajvE",
  "key36": "3DEPCCDZfwhwjsz96vW8vNceuNUfEqgrdgdebAaj4Dm1fHky5zxPMghazDgv6Zc1i1zLqBQqa4s8yuBLZrv9PcwQ",
  "key37": "5kbTyjwTGaPXYzNwgPFwFSR2XzfWjJgczbTTUKjRVUiNH6bEFma9JJcnKAhAX9n8rLoE7YQn6bZqW1M6WSbY9XSy",
  "key38": "4pMAbXcYUXqNe4nrYtkBnmNRDVrCFuVkkrYKMWnPjzZ1MPL9imwG4zBAVWt881jPKBuJDgjqMaNicgqYo9QKqsNe",
  "key39": "4r7rx91Cwd9RUJom8UpcjjzHFZPBkrKk84ZNkrjXkXqRP5TKgnuEu79F63xTB5VpxKxr7uSdP4YncSme6Whwfj7R",
  "key40": "47sRqeQyCzQoa8jHW5y2eZ11bMoZRq6KuuGdWSVYmsD8tTNp7XY6Dutts4SHLZR5PRyEtug7RRq9EB14b3ZSYXBM",
  "key41": "4bnhpwApbf6BrunP2zrX1XGSeX2yeSAhWgzwmHFgSvFva6Mjp8H7ZxvZuNeSmF8UU2C4jbW4dQucBCrZijpqgw1V",
  "key42": "4T4Ti4qJhiafZ6qnEiJoycauEFNyA4JsS1PYPFzB5LpXmE1MFz76AYn771xu4NFQLrLwAm8D9ByQwjui8VD2BJzv",
  "key43": "oFj6uPoaDqezRyTBEdMCwBz3WTfumDfYijT9XjCm7DsvnnjQ6BNSRG9mx6tWnPgU7PdPrqddu8FRB5xFvkJABb5"
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
