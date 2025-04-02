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
    "63HGCpH9KS5NfwN3qfyuLnoqT5JeBB63tA1xhsdtp58wbwVjMnsUVZ2Hr4W4ar3Co27s8qjwAAjDq6iynDKR6xTT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sCZYgEU3mj8uzxKMZLGdPc1J2RG2UhWkGhbdiEhrktyAZsNrjgovJVNX3mVkH2dEqZn4xjxBnSK6C3Twotk2CiD",
  "key1": "3iZZAuznTeVRtDQTxmmqqUqfacf4XsPvD4NJoNAxLRgsbov991CKwkpqFtC6VU3ZV4s57SjBmFS3Cyt7QC5sDMCW",
  "key2": "PcW5bGaK9enRmUBsooB65Q2uB2VkZwQv2Jx9BE9qgzi7tTakBLRMQRJd6CNigSVJqARCh8YBgS8A1ij2oKkuhdG",
  "key3": "THL3BsWxfRHaJHd7Fq67tKxczfjUHPGcqxZv4WdxHHFpNLfKHNKBY3gXyWZzPp9CmNcv8hoieiyBZF8oB5Ppz1k",
  "key4": "3WGKfqhYmr39xHv8SWPMdMTveeNWaJb4MgQ1nig3D33WweYoj1G2SHqKi2hoLqufuRUgx42xrdeTtBZCgoswsqg9",
  "key5": "5CdEGeQt8hc3xDUzCgErWZgWx7GZS6NBRVF8husWG7mCtyhhQjoVV1SekoykgxpmNM8JM4mCKh6EydpVgaroGF2i",
  "key6": "4FDVDJfMvvkN7uXbcH2VKuMKwPNbBwMRKKRmQ4GbsGksfBfakNL1hQJR7SFFCfo4rVvTDh732nDorwGtbhTSbU7D",
  "key7": "5DWQbPriikcmhnxk7JhFxTKSrwJbQo2EKVY8AK4H91NypmrNRXsqJhZgvXQy2kCJCmj5P8HrFkWgMCWJPANi3fiS",
  "key8": "4tz1K7LTuZtfRjjYc8SPq132rp5g1qS3qAzH3BPhcnZofqqoM6VpukFGcCd6Dx6SZ4eBsXrZCXrvGUKmGg3xGGF7",
  "key9": "3ZeNrJe4Gu6Z8r774588stXw5xPrWLz8bcCa64opVnNp1mkC9n84MsjbpLzh8T1PWq1DT4EKm5JtmYdWYSqr5rwr",
  "key10": "Vej9nFrimCAcXxieV4W8nvNy4wgqT4nYM8j9qM2DVTKg85Y5puzR3t5huJAFwLmH9XT4mM4UPtQnPKvqj2xQb6p",
  "key11": "4cU83pAgDdAv8qD4kWX9veHJE5iZVfEE8wx2Vc754Q2EoDXNMb7hX7u4jC9tMwPVFk1S4hAV3VmbF42Xd67qqUWf",
  "key12": "2fQbYwjXUZhnZUgQ3xgDamzEmgxg9WCw5BZsLbZr9RV2qwHz5xj7LmWRvSxmm6tzRitMnHonD2fcVXjEixbjnWh7",
  "key13": "2VDKCqAV6jCYzMDebFbZGyGevhJHBKeDnFwMmfTjR9FrjG6gNPApuEek4eaSkuedzgjYf8HGqJsFBrbdE6VM9LK2",
  "key14": "4a3wAz1tEJSjfia5n9Uf8KnYpkJukepNzBTUnoYKSo2J5pr8aavktyehiLeaEYU5qXMQE2c5efF5ZJhRgNxX43kp",
  "key15": "58Zexs1pjKUtuqPUpWrJzK5AEh58G4smXvFrRcB8LUziJqYUZA9RGQZ2JaUVFnGPn3RySDxhVxik2BXFLZX6NBAK",
  "key16": "2Ggopavj82usQX5YxKgLJcBNgudn8HsBAnMuEYh2sKARHt1xcofQMzJ5Cw7N6uYUgnr1wRDssSBfUjw6nyrDcaNS",
  "key17": "3XPLZSxEnaqGvHwmrGVgp2Y6d7Y5hjGspazaozAjABwhF4Md54iM1RALsPwwhWe3xZSMuKzbn4xNDJ2zRQQydbvW",
  "key18": "4cM5qKvdo8M8esdd6UxLPS9vRiJMQqy7h7rv1gjq6iAcENpoHYyauSzJuumakJmynKWfLv9oE45M3ZGnjqdJspE8",
  "key19": "5SaPGejsTbww7X8MqWthUR8eoFGm52HxVKvZvsdnBXMrp4jqTyCa1idZGbSGhu7kt7cAGNeUGa8U2axh8TLsv4a4",
  "key20": "4ktwdntuSUSTkZSfD86fpUCy8noT1KjUfVxkY4P1z3LUr3keyu5rE3LMjJJ2vqtEFknuQSSDbwGBKMumUHxSRMMH",
  "key21": "AA4HM863syiH67fAHssP47phJEoYumrB3eqevK6RbW7VNhpxkQJg7ugECMMvzGmAVQnjRdx8ZNsotGABHar9XSa",
  "key22": "oftVuNypyExDJHqmX3N9Vfz5noNk4UyTkktrLd6xUnZHzj7GwQTwqT6LzDLGTCHFTxridwvXor6CddFLC67g1Ap",
  "key23": "Q29WborGTSSr4QHwxEuS74VdDDKE3w9XfWuowCX5NVFkjHBLEF1K7vLp5x3PyZNVBmuqTSnw7KfyzV55BFaNjc2",
  "key24": "455eJvXn1veAMaWbdgjS4jpaJqrjGVEWKKJuz73ijmwhkGsAzpnUzkRJCmLfnuYuNdab7itYxUnWnEFyW8Y8KEUE",
  "key25": "zzEe2sjhgRHAdDXBdmVBh5vB97aaCUM9VkToyCRfvCbUAgEccNhqYjLz5SCDGCPSC3LuZ83X9RGQhQ8i9HpaJEC",
  "key26": "EevGtnxudpij24rfuWL3xJAmkcksxCEmXNXZfvTjLB9Z8xxoh9JX39bSLRB73A5fwYhwEtJtkijvfrck8Re5kpL",
  "key27": "55bw64o5yefGhTH6m7SBamgY7bPpaFuMBEV4okN8nCteSPfTymqAQRYW9jSu3cbPr7YTHExJ9dCURhRxYYJ4mKrt",
  "key28": "5D4GxwejmgCjNvNyQiqmY7M4Rpot4stJZyLmnrYs8gPB7vWYXdPh8M1Q9ruYLSULbmNBYAmw2er93ao3ikL2i2Mj",
  "key29": "66z8c3kR7fQruzbn5VANhMHxqbnpmat7ztitWmgncVVTTH45rR6WUMmkDYu7xMAWJfnSfFrUN2NZqxzMPfAfY746",
  "key30": "3yesBSbfegExsgPXVqDYRzqchsCgYiEDEE2EeWwkD3JuS8FgoWveGEkg4Kg2VPbtjVdnmWNCkH6iU1hQjTKbAayb",
  "key31": "2cYuyCyh5bfHMwbeTbBnMWGx5A8sngYiiXAG94e7fhGsJdN5ZTAwwdRPzuSuehV2wLNEHXG6eSX1YouvRzmSVvjB",
  "key32": "5aB8hPGtmLDsCEdqsnqTnNKh8JbJfvwhv3HLvwr3TFGMbFTLs1WofTXwnfy3mLBMQrUk6Ky9CJiwBMcDptJRtqRW",
  "key33": "2MjHqJTJEjNDyUeNvS7nmxDtTBQvqfnqWpU6CTmQXi5ULUAbCSHi1orGAm5YEU7R2JxDYAEWW5htvNxvFBTMgdKW",
  "key34": "3EJsmVVFXRUbc2YZiDch5Mjj6NF9jokCkpyunarY2A7amGV5hMsuQcxwZMoNDynCSnJ8CceCMLbZr8mkAAfHBwqS",
  "key35": "5iVdwYCxM4JGVPAxvu5dJ1xytZFWywFT4GBGGyv1TBfGoggRCZ9oLFEgXT1vSodxeJEwQ4uNvHAxA7CDAcYiw8vr",
  "key36": "5oaXU5r2yR1EvB2d918J1QbpxHuBhQFS5z8Xfi1a7RcxD2VsWZZmho5vPYtgaAux9tDpKR3eJwZQPNgrr3A41awW",
  "key37": "23VGoUF1vnwHsSN1R2Ta3f3K7rp9pA8jc6RQFaszJQZHM2c34yc8yXA2ZiGyW2eMqkArcUYYbsNSEabcVD4yq2Rv",
  "key38": "34tJtGBkVetkzMQXQhNw3UBngWxSAUT6VaPZrFHwRRAXRP13wQprCqzqZd58LNNkLqsAuom3BTK9wUdf2RxZfMWF",
  "key39": "43caF3h35z3sx862CXKbB7TLB8K8Q4KjCcXHuhPkahmgocCpcqHWjYFAp1VL1QmLSmr1tXzxnSNF3JhNnCXZgHUw",
  "key40": "5mijqyp66X7GLqWrsCMHSYXe67tiSqSasaFM9NjUiupQkEYuyDWh9WEy2HnR8sLqFXjRvKa1wi5ACA3wDzWZrLxw",
  "key41": "hdrZtWq2ANchSZmu4Hxnpv1fntdRAHHCikJ56uGKtrWhSaVMibWTQSnvqHPdGMJo2hbT9Go3S48vy6JPmdAQszN",
  "key42": "aHtGPqfUa61MZAE8ZE3o94A5qeWZTrJKNeEnCXTU4SrHoTCarGBoo5WEyXTnuiVKCBjiCCj3PrNVfkUSFFzX6EJ",
  "key43": "5AQwzsfd4EkDB3qsinBqMcKXepjWR1GTPEa1YEHDrX8N7xDtUL9kjGF98KkTCW4PdPHMDrW15LDVvMbiZbCgG6zf"
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
