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
    "4S718Ss9EpzqLHAvzP6cBtbPmL6QPvBFWkCBnkUbhLShavqyszbUG9m11pCMrjzdmXEe7t3eEriAEpVmti5RY7Gu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65mMTzeLgdDMFBHGGYxAZMcEJRj4rqrZDRTcT91vjgdxygEz9Qk4nD4ZaPg9K6vXuq8HtfindWaNMRNjdg61kLuE",
  "key1": "5qsXmkFaqC2yjpDptsPivWqALjtGFa2iQqoVavz3hxvSirrdpaSHLWS8FnsY8MmDciXb2222RN4SaazXbsn8ZkqH",
  "key2": "5AfKHk7ANeYn6M3Gev75smCz1LdFhxZLQ1KFkU4oRhEeHKw75XjaqbG3rUtotqQmgfDUogPLXnNsph4FTgnJfrHn",
  "key3": "dQRGikhZAHGygeVWMDV61jtHVwgv8UF9R2EhNnov8USgomxuLgJfoioPCkzvomY8vejcYSbMWUSq5zz82cHNctV",
  "key4": "62R5kjY7G9V17QaL4nNQGyRqLKxZGVYRdVPWrdHweFPoRcDnxtVYFiyJEYUKmUsX5EzMJEa4AVr7iFFU8YhMqWdM",
  "key5": "43BSrpJrJo6D4K1WzTVoH2FmNb8Go8HBgKaskiF2xPNpgSqDGsAUNwjZPzSnUwaTEQyRzJGktSY5CQDBjKasmNkR",
  "key6": "2fDsKM9HitrvU8boFHu7RJqgacDawUon4o11kkXWaszze5yuK4ttr5jbh7GwjB4FFbPaHadv9b1NynHipWjVaFjw",
  "key7": "JhnkskW8rqD8eDjnkT1EDu9hEfZZdsA1EMYwKttV8v5RtWBkFnsoC3o7QukjsoEiaLq26kiUBUPfDoPUAT18mKK",
  "key8": "4Nv4Bqw7kSqd1CKKEheQj6f6oHTMWN1HcFPV3taobhDVJmvquKDBjcftj1PEuhmCp2P3942LKKCtVoq4NyGaK5pE",
  "key9": "4eekNb7VWWVRYnDtDj5shWzQ65ib2Df44KHXtZaq1cgeXwm3pEvfp34tDVuqovKxFy99ZNhEbQadccFiAYSSUX6F",
  "key10": "iJzNQJoZACVppxnq9vJjJGTiHWr21hKni5C43bKDSy6csgM71vBhcocgBAGwv45gpY67WPenXTRXtkWpd8E7GFm",
  "key11": "4TURuxTztq1EC2tBjQxek6YdwFWLeDyaMFTdT3bUokTzwvt6o8V8Jn4EfDw3am6aMeuZveDssFsBpUYMomBFpK7j",
  "key12": "5t4RDSiE1927ppbHeeA7Tk1QDFK69LDvfQvQ35ZVVuCARtJWd8eLZvvdkgjwgiXGP8LSiNsay7tQZQYW5JmnwDda",
  "key13": "5tZk75zhSDhynHa4zFeQRmektv1wuJoz2ZpzQioBuQ4ipkYT9mvsTo53ezp4PDdiRe7vBV8Aa9SCmUQzucRdNeEd",
  "key14": "3KFYPM7n2xednWzXkuEEP14Cm7K8sYYhqB8wAQFgwSGeKpNPgkxqnsF9jNpJMhP7yVie5Kte6u9o22DxNEi4wpk3",
  "key15": "Jxx89vt2EnoFSmuF2TCGmN9nymwQ9nr1yu5pzVNE8E6W4tAMLQZN9VrkTvPK1eg9gg336GTf6MuVDBEoXD6esJE",
  "key16": "5PSTBYyjBgFdR3H53s4RG3BbpEXBagKcYSyMZGGMZFqhGDsmJ7ZhUMeAoiPrJa415zVfZo3e4ahat4LyHS98AGcv",
  "key17": "3BUxsXJVPbnfC9oEw9DbaGKasyJCUd2kkAkrqMwV34ESZukp4CXKREyuu97gD4RSZvZWM6kAXgRziRXSkU68JdZT",
  "key18": "2cEGJj4gRWx16p7BaFMZ6LEkUgHJjGt2LPQEhg1B3CshLYyCcSSw8pAwwwd9HUptMCLsrFLfdHu11nFmHaU1w2kK",
  "key19": "2FAZsFBazTFWh21huTs6LykFmEdspdnEwqJqWcMuMHrFCGAFfQu1sf38PZJXmMB1NhkyVY7zt6QgBr6ssUgw1Hv9",
  "key20": "2AYpb7iTxexRR2GfRT8kCMvFmo7XJ1jYmyPRGpSaijJ1J9pVg6GRc1AtGQAYgPHwyKGjLwJPqAEJbZ1fGuBG1try",
  "key21": "gmeDnW2x2zwAxzEBpddSGjtfWFDKYMkfVXNspGSXSCjghRQ2uQDZpLFkvezVHzX4BEog8nXZGY1Q5TQ1Nqf9qtN",
  "key22": "4PFZGTb2NiiYngKuUHsCky7DBcev9FiVU3T56eSKT1YNNSPgc2AVZXNfZf83VxRmTzmPdhNZfaHMnBcR9EEYdFHq",
  "key23": "2oYkF7no2dLZ7ttLYNaQJ4DrVHEMvn7SiguhCTXWg1XnYtdyiSYtofhvexRnR6BFzhQqKXrEh4c6m8ZhGr4sUx2V",
  "key24": "3o6nh4q1JSonhTWAURyWj2RLKTohYuFiAYJj6cJktVUPPQMQJJzX3QMMkaiN3JGp7Xcu4kH21pSqJncoHheZPss7",
  "key25": "2rLjyH8tFVNRzQRWTEizwfMG3jJ8VbXD6BCvXeYQnwpfjESwmdieHMeFJYhxHUKDEdQUxEtQByfpZdac74uZiet7",
  "key26": "mkuyHJXdG3RjcTpUwoxGC4jGEkt6b4EMb7c36zXcecdLKkBSm3AnmubNyXFLkdwhzRezsUZQZwmYmdQceZ3nNHK",
  "key27": "3ApoBvnqBUCT28M1mWNHY9Qmgsczj3QeGFEWPDcdaBuC3KCRAb2hAJKqi3Nq4dymXuKf9z7KVgv2ByXUkmfk1b7U",
  "key28": "zq2L7C3TwtGizmWzeAkMpFYKi6XbRNcN4xk7U9f2LxXUrazS3rZvEs7Gn5mku77wGFMkbMJy6WGp4Zq5ZaN8KGN",
  "key29": "9BkUwAWcLqDGATEUqBBtWe7SyUXZ62vuzFQT9Fgp5BHXTvPsBGBWZcWY8kx5cun1s15ctSmVv7AHEg2K8WuqrQT",
  "key30": "5kGJXd5msTxW3xVGvUCPcshUr9BrSJwfzD1dfzDpnHiRNUAix3xJAx7qHXQRiw4rUdmz6NHJcbvfskzMkSrPpuuf",
  "key31": "3wuvQ1Hx2VrR1HFQNXbADSo8UJw1TE5gdSdR9Y5u6ShvQ53vRQMkkYhRmURSukvjg9zEtzGF2vZYdHK7wW7MzKJA",
  "key32": "4kjN6rGsBNZcYiF8GKdFxWv2AFGz75ez6D5qMugh1WktUYRykL7PoQ7xytFgcS3XbL6EyBiNhfLDDTpP5AL7rqj",
  "key33": "4Z2kHWjp2YDCo19fJ4XtXdCevpWuEGTAuyaDpQ4VmDdFgz2sJRSoZG7qqpR9RDmdEh57VgMeGbc23JhtVnu7PRcY",
  "key34": "4KJuwXePRFNSkj1gdEvgXaQiLe9nGYvP9VLUnBqrG8KiRxPh5KkhiEFWeU5vhBwa7745fn5SQsyAZgrZ86xiUiLa",
  "key35": "5uu1gey4GE6ZeravgxU9bLRPq5zFKLus7LUN55tERSfQNYNvyiwZgd1LJsa5gysaiAqLoYAbyz7vjP7GwXxQdCqC",
  "key36": "Gb2YKZ1636aJd5Y3rTCaDKSHpXXEE3LU5sRQ2jRmGEFqZicZMJvKU9RfX3KuUJU3U954JipBJXuFYfGChd6VsVY",
  "key37": "4px4KahwgJ2WUKP3pdqaLJNRTEHsDpRa1yqom6c9mRTXN5dSU7DQojoNWJ6HKCrCm4PAoadj2MiLETQbaURgpjPq",
  "key38": "4r6K3DXF66zpb6Q7GBtSNKqT4cCx5vWmHQ6JeZxyrUmLHDHHLK7ZKZSY8njc5n64ZJeyRhPAwcmHN3SJVngP4vNN",
  "key39": "4QHwrNjN9yYX7ufhiFo9Q4Czk8dJxAuc8g8see6wLcxenkp6L5JdVpYycmS6jZs3nSqWZbT3x6vQwnTnaSp9zNh9"
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
