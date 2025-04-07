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
    "E47xbLMsV8LYN6mFiVuT4int4mxjFqb1R9fhA2kF2SDbqVF12FKXxe45WCCRmuuUVmvGFVjDQZV2D1c5EhJuRTL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xTZ2qTkKtRg7fnoDDvbNUBbwwT9g7S5y3pfBFSQzHYvC97gfwFJS98iq9a59H7KYh1VNMTWua7YVaoArm3RMCz1",
  "key1": "4xjquXwtFPPAJ9DSStj4QKPtZH3ZyDxuSiE7NNKmCFCRu9DTyojF1QD5thQ2Cyu2C6hXWYJbrfPNXLtkFmxwjxLY",
  "key2": "2fpwGxqMHUb54DMyF9rGKESga9ajR8uaFPq2foiQL6Zw6xrcT5idJfUtEbcNJsKv34Rk85fQPdvzJA8a6PMbCpwB",
  "key3": "4o2NAGaD4ykiR5yEc8JgFFRFpCKkqmL3jArXuSSDNFjWRw9cVuxmH5PX29HTRZcz9JASHFdyikEpvTbnPCajwvsi",
  "key4": "2dkUyZc2WQWxuDogtLzuzK9HZBP3TM8TpehR9tD9hUNanGeYM8pfYgvwALPRerPRQQhPywBZ7jTYTmzphRt979oy",
  "key5": "5zMGove2aCFg3bahoXD69jHqSXPHLT4WBcMYoHjEnMoHXgqL2fKBWkuLxhi4z6K4uQoXKUtwGDGNBSR6YpGDhHhm",
  "key6": "3otDS9c2EkTc61wNebUWRkRFZRdNaHRqe7spmofH1MAouLQxg3MxZtoZXJ4Zewz3Ft1kHJoJk9ogQLfeKb5wg5qY",
  "key7": "4zVzKkLowUnTuZWmHse3WjrdZKeRZ4QDDMy4bpj1ukjANKbiTC4pfqLkvPaFZjJ9WNASHQ4mAczkwzK4HinLPNBX",
  "key8": "5UEwT3bX3F4cABAnDapiKgmR6ueZ9ZHtWzgezPnso4LkQPKpt4NS6m1dpnWVBHnpg8CrQgtgmNYKVofKtkVBVNBH",
  "key9": "5RwNyxp8j1ZxKHRjNf5WF5fria8tR4HYJreb84GLtSbzbGUZgAWMZFQwegx9pP6s9n8ZFGZvBA2FRTRj5iV7es3C",
  "key10": "pyYEf7gBSNHRLFMEzxoicmFHWfWEbYPCKau9N7P2VAtLT4amP6oH9Q6MYb7FARGfXUmSWnDJPo9rp9tkm5mSCQH",
  "key11": "p16m8WMfViTrJnHdrj2u6iZzT6jAnk7KdYdJP5Wms6ybq4DAJKVFtiLPHvXXX1UJzjjxvRNdJgu81i8EBmXx593",
  "key12": "2Ht9ak2YRxGGnMSA39kzobEfPv6JD7bCH89zqEocnAjGQGVfrsyhEPcBhXms1Rji52NLLfyrcxB7j9jpw7quDg25",
  "key13": "4B86i56w5uTPE6aFrZQmeW4RoR6CipdpNfiHpDhAceDEpn8FaFTf1JTa3cFRDvk6kf3rEgssJ815wqTbMM6TtvNv",
  "key14": "5oMZFvk7BFwR34aNqbTFfWKu8kyrp5kF68VXTukgEppd9giP8TiM4GEKxfZwaT9HDKu5CuyGMFzFkscXpBF6Aznf",
  "key15": "3MtpVm2saJqN5RReUaZZ8caDjuNpy58VJNRCAFtbhJtFaMPRtedLhAJ93aYkP84A2Wdgf9Qc5SCymNAznBPZMNQN",
  "key16": "4B8tv3QmBmAa6kboJ4bqE3PwepdiCEvQaetbUGPVpyYzKy2r6KY5bNCTA6UxJvh7gpnR23Dkm3uJ9RbkGJvgosHv",
  "key17": "4VW76XSBQGmJ7BeZrVhESbcnAk4hXjFq9uiWbg6UzqLVYPVa9acREpD3wZddj8z2WDcpqgrZSnQax6mAUhyyWx7P",
  "key18": "3gNJ2EFAcgbNdQy1NChaXym4fm8bfrUVr4zBgZ4fvicRCrB7emDjCkFaxh9Fcbrmd4woHcSC5FWp5dSv47twUizo",
  "key19": "2YDyuJGNSfk7fPSQQM5Uxf9uAUZPRES2qCqg4GFbtEJaqvh8e7xLWi7seq8uWBAZYyppiSeYk5txLx4SWNK6wxub",
  "key20": "3ay1aTwxn9iipdwfXbi5bsPuSk4dMvW7fRvYT1nmgfYhzqMuEUwwm1HwhWAeUhFFA8msrGjarxJ5XbTvqWnqCZdV",
  "key21": "2HQskSjYDteWCc34gqkEz8N5sRB7PwycZHhA9GYRaSRRXfZ1hCi56EwPgNAekGARKbWDdDaqQZVwaCqDA97zMgan",
  "key22": "42AfRiCq6dSvC22sQQaHEGxTmNtemwBMPMryspasP6uVy1jYnktXhgb5rsYW865JaiqprsMbxcwnggvwx5vpaw9x",
  "key23": "4eVqp5Zq8KGkkduQjRZ9Ky6SxnhFjXgJiwkmbZLRUzQsEJ5zZTuRZKH1uPxg8miWsfmuAU5G8nyZw2BdxX1e25b2",
  "key24": "5LqdwCApNqhdMGxNxu2fKj8oNspHwUMnWcyFs7jord81opGjXt5HCXT2rDeEVV52LwyzkvVi3ZGndBQ4EsCeFXb1",
  "key25": "3f97hyJhsgKQDuiMoEW57KvgHtnQ25Ff8sub5VBHSM5uw8ciPWe4Yv6a2G58cto153F8bcAQr5xEbDvH1AhfBfDF",
  "key26": "5YnBhpSKMi6DvGXsiU5uQpT3kAXRNrTs6ZqpCRdrhSsc2wgkhKMLz5eFLgak5YvxnWYS9XWnqaAzfiZk7aKPpay7",
  "key27": "tzrRdqD4hyYkkj2n8tPGoMd7Gm3BDCsGAUomY5tqu8z86Gf9EBfaJktvMVWvof4Qa2bxn8raRzxFwT6PEDiGBd5",
  "key28": "3cFURFYuw1a9AMfZHo9prpniJMifftmobn5hW5T3SUHpeozSzWkvwRZsDERvpzVsf3pAedvcKVJA6Rh39DJqid1x",
  "key29": "512x9KZgugevGPcDWBpAS7EwKiSh2w3w4p2AdxR2XBotCTUXZCWX2qqMQaEvqAcrHBfTkSA3gkQtTMNno5kTd4yU",
  "key30": "3sz9KanES6f8YsPP5yUPM2gAapWX5H6heV3ia9geFm7DPi5KFQNpHZ165Yk4Jhxa7FYYdvqtgDKqa4T7P2DU6nUK",
  "key31": "3jFegwkfFhSmULyrsDHZsRyQcpRGJm6SzW1EFh8H7y2q1JcwdiAs3j7CGpmX7vHgALfFV4xkHia6LfnDMrcyoBsy",
  "key32": "4EefGTCMgHj3AUDWgyGJbb1bD3BDWbR3VfouiCWFpw35VqvzgLViRnWLPCpSBrS3HnBUZE3HRuMqZp5wCmSS5RSN",
  "key33": "3LexNPyVUcLcts3svt7wXoR49tUGNjt1JRhyuioFKoip41SctBrc6kejj5u6NWix5prmoSXBcBmELMJcYAfhNTvq",
  "key34": "5zCzJmRk29FsWgvp2pkVxGo1G9dkgNVPRcJT3RHZEJcMiwGNzcUKD2R5Ex5imA1faXwmJF4aMmX5R3M2jL2CjzFU",
  "key35": "3u6an1M5gi3ELWXoVsWYA4KAnSy7fsX2VXp158q3MDMaSJ3U1xvCQNXRTWmHyDqTtq68nfhpXUdAy96exWgofcR3",
  "key36": "5HtJAbq2jzSFsCvCqNzAMpz3CTdsaa2RTNRYmh2fEjmU5s69t9VH4ffKeA2MT6NyZkdeJyof44kYNhk9YZScVx8t",
  "key37": "2PDijPyhUMs9yRdgVkZ8AtWr3uRFKW4bd8rb38eDuABxghkXTfP6SfWTQRHjVnnt1RseBeCJ3GQaqC7hg3pQSXR9",
  "key38": "5BEvemrQ1k7BeXzajHbwVDriGsFLUPi8fzdWAQo3ARTH2VEqHmZstFF2pJXckcKnyBH2dxoFH5Pai1ZhUWnLJnKz",
  "key39": "5Cd5uFQCZgEao7s71h3RjXLwVanHxsNF7tFfWkzivJkh5Z1oSAhfQMU9vrQTWfcxfwQXGLr4bAGMQUicchDmDLEJ",
  "key40": "5LAxvrdyXkRvTSXZ7qYNiz5mkzso87dA41aC3NRaAL4zmhQuDgxtZLkEYuBJcBRJPECLLB3rfQLdbouV4TSkivxe",
  "key41": "2d4odnF29x87iwxeMJ46KTGHoRvLBL88Xho4MxYKRJGqGYY5FwtFvpopHC4zyVuAcLHg3oXNS2fZxpjtJEwrKFyY",
  "key42": "2vQg8pZWJMeXwfptj7FkpK1yoE4E1QVZiqDph1ca2YZ8UoyKeSC1wJTW1XpPDu3kWPyv1evFjAAunqfMeGC3yhBH",
  "key43": "yjEe96YFLREYxRPWDSiDyjbv7kdUoNSG4LDLyKBUfsv6Q4Yu61dVpJBpT7JLVHsaiNtHwdkdury4oLWGbmEza8N",
  "key44": "2dfAKpR1pZh8aDi9pr7pBSkuXCYpgJdvp62NFzK3cW1MJa3YmgKikJSdaTg7vx85MipXnu4U141x5JTrPgimBzAL",
  "key45": "5KTkM73c5c9hjV279w7DVmt6DtZmirAvp437rzxDDXpz2u5xp1f3iDjXivDjBjg4vfNqp5Wwm3m3UK6SpAmttELm",
  "key46": "2TZw41kFDY2u3ouS3b55yeThW7y4c1u9DkmmJ9SqJoNFqvH2uKZLRooc8qMJnLjCu9U2RrXCdUnwUe3XigqsZnwy",
  "key47": "ARYzD46J2iQWGNZDNn6dXUHkyrMDfPQapcRpnbsqLLHWggdKSgbLhVAmhCDBvDrCjmYJ1hbpV176R5ivj64jBoJ"
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
