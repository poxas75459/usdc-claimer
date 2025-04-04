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
    "mtE18tTpyeRib9VdsmRj2UgCE2LJPR55z4UGumwrKRbLPQcuwKsJJb5bf5xDdjy1RfyZx1TRcCFnxDRnM61Jsvh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ebvsjNQsk7nJubEDcdbwZp5fMgjeXKUgoBb3Cvp2VoPoTZLoXLCTh4bjN2ZHwCiYBwDsjv5aK2HFm5RYXYGd9to",
  "key1": "4wjd5pW2qvtSYxfnnbMaar6G9We2vKSJ6oqo9WzMRvWJTvi2y6kFr8DjZxRxkKvQmLPiPkjUWcmuEP4gjEk59Dow",
  "key2": "34K2yLUgJUcyxnUdDxieeHwhtLNYHE9sMdUcaPzxLq1WqAGzS7EKXKMSpoUHU6tVNwc3zswACgZffPUyxQ5CRPoA",
  "key3": "314KqHDHifpKETnoDMPCQLjV2SZ3sttHi4UFSW7inYmBrHMPi7ap59MjkMAtmRpi5ZwULLXNPeSThAhfCrMGrM4i",
  "key4": "4U2b7cTg5mYkgeGLuJF4UCExehAbrCoaRnbe7VugTgxB9fgAHTNNTZix9Hrp8wJqmRLV84EpaUBQYbYeq3kLxezb",
  "key5": "J93TGX8CaR3WdTDN15FCT6bmfK4P8jBpHPE86hXoMNs5GFSFZhiAwgxNaC92JGPjqQZgJtg7bAgp1Ar8pzhdbBC",
  "key6": "KY3Zad9Y25fA1LUJ84cYmFJZ7afc3NkVKKWAfuCs6cvHBBLLzS94MrEKEXjfZYVJN7jnpKFovyUfQJjUv3PDmJP",
  "key7": "5EFyTkkV4YsuxCDFK9t6UsdjKj5re72qS5wc8VfMKkiB7C6i6fWyvHncH2qy2o2TtE8gYScbSKPCbugJQcmfgR9Y",
  "key8": "2rPGZAGKHm6rEXp1q8AsQxdjUPRRsAFRVBd3r6ug1bhoANFgQUbFx3ZzKGVu2NQ2jz2QsHwPDRT7r3Rfw2geqnHc",
  "key9": "3NFtyPHwLebKcnFdLmgswoaVxkd6ZYWJTy34qTK3sjc3Ky3NyR2b9vMJm4effcDMPxAFWZzFzEVawPpAvXpC4raG",
  "key10": "rXpQCjrCWaboh2xxS8igxxX2xPUBawR2twaAsgVFEh7eHAPrE77cKN1nPXtiAaGc6mEGAR31teVpZQX5XssCytR",
  "key11": "BMZyG5DMWkW3eKbyLFjJj9nSPh1keqSGW8KSkRXd29sLeLetDc4tG2EcgRZpgoPXKctoFHx82fykv33kvxQEeUE",
  "key12": "5em1AdgZfND3wQSjdmDmgo5ytJMq5v2SRa5Av3wV9GvqVjR4Y2ip6fuQzr3ooX1HYW83Ft1UmdyjxiqSk3cVvEjn",
  "key13": "4p2wE98uQVMFUKNMXzTi5E9Awsc4roXeLVCotrJat6d45rdz9HeBwsaQxhiiBdDYPahz15XrcUem4PhuZrdHQYRB",
  "key14": "5NRyUP7sfk13MUDUdrJmapuYEN1ahUE9hLT1RUxFfvjSZi4dhfwaemypMmekgNVSsjTQXFKmrTRnBpUaxQNp1Gqg",
  "key15": "4gTthtGEcozgxZf1rrZiPUyCuke4UvFb4mNYFQDwfPQsbuAcBvGrTWyPJ9vmbpyfWTtX5Jq9tv4ByiGsyVnagBVC",
  "key16": "3UkKwsFhmmd4E33G9FRaHBY48y8vXEYBccW9kpBbqeE7vX2SYSrcj6bdK581w1kVa7asPmjQvE8SKGvXT559bYvs",
  "key17": "445kXUAFm3DNoRjnhNSBYskm5X4MG79cpjBLWqriYKA8T2fkETAUTKf78wPpQnQCWve9HcP9TuuCFqWbnXmWQvkw",
  "key18": "A7PPaZr1V8mR5jjeDMjqDDZ35QuguwXQmv8Kp18g3Uc8jJ3VRxzre1p1nXtxxjuWoEKqesb3SxzxNKyNHKfK2GD",
  "key19": "XUfpSReKm26UMRcrGTM7R4uqviG425gkHcAMHkXKtarCFr48Q8PvdK6rZxdkbzFBksW9sbHvsyPD312qaVhREXm",
  "key20": "5LPPTSeDNSShrAqhGNhzuHdUb4vRaJr4XfTs5YUNRcUoSwWjCJMDqu2pv4VxWH73WF1wynkTGy9h8UP1QW98Gxh5",
  "key21": "2xeQRPK4U3BNHsuLCWLfN937zgQTza5g16nBsFY5Pm17BFBnzTu7UYMThcftiJPCCDfRxKbCs6kpW6fttSf27gV7",
  "key22": "2r2DyBmXkLuYbhBtt5VTh3RJUc29tZE39zBGUDjPTD4tNNdeRP5hVhAUmWXWigGSxjjS8rRjUuxqQr97SG7hvHNt",
  "key23": "2oJGvpZpRhNmxGG8ws5jHioiy8VTgXKSrpu5fjQ3q3PKQLLgctztHugT97fTFFyoGXbeS71iro6bvDWCGdBGpHu5",
  "key24": "5yM2av6h47QE6QH4c4rE5yAWmCm9F2De129RZ6pi1N8NwY9oMcqbirnsG9LQF8Q64zQJK5KUbaKmRahBt1b83Yp8",
  "key25": "5frzs2HNTafR8HN87AftNbvwV3n2ptX4oWdFuHGfjnnGc73XnM2RDAzAdLWej28KujF9dJJXajsjpuSVgKRrowJx",
  "key26": "2s6wiuAjUSxunwHfGzZoC2NzYfnbLqhrc1XFLWj8XdmYe2jVg21yxPV4QzAHZFty34uitAfRTyAqvJxD5iSh3Xkk",
  "key27": "2BG8vDSuXZGiahLvVZ2MhwVwhtmYNMwgKozLdscHyozwAYjTD1ssY6RvrbtrrpbJUFywzDbmYiRo94RkvyPKkFgt",
  "key28": "4ZxnKCsSXEVyCmZyQAu4UK5SvDqwri221vkNfs15Lz6skgeKK2RDR2EHcSyJJehf8tXiY5MDuBNpWaVoZZ6kVvQ2",
  "key29": "4VXcoY11o9rXaSzDUDzmf5ePnqUpZyA8wqAoEgzhZoyzWHtWyno8Sg7vZXS4gNWBXNPurPpFUyhTKCcYKUY9LxaU",
  "key30": "3RJ9GXbNCy1Rq1rDqeQ63fTHsp9rfW775nPMiJwBZF4BG5b7gLGtj3Pi5bwbCzDxNoBhKQUmkBFdFBDKBfZXZw6N",
  "key31": "389D3VfVQQFTeXwU24kAuDD5Ff7yLUpgYtN3yB9ZuXUhEwkN681jMDm8XnPJJmxbUcoQcLdmzL8KH6ESqge7ZJbn",
  "key32": "26utEAfsXVDaFfKpiaYHzjmZZbhtVHAQgsvQF5SEL8xfAsV5U1STxcxHn6bDnTut7Lim23A14hi62LvHedUWZuvK",
  "key33": "2hAEYbi2grDRwSbwpTtVdb8su2SWyF7vHqBZqQ7NktVccMF8Nhtf5Z1jiupkCbinh6Lyyprifg7rqrRGpfcUkx7P",
  "key34": "3FQuhtCEWGJ96TUazkT9bwbsqwo3EPPVKyRoQw7rFoCHrpuVpwDrCAGbprF8aXZW3v2Um8rP3EewhinvoSnfcnXM",
  "key35": "552YsuXqZjy71Q3wFircy8HrGhGLHw4oyD3dfKkb3g9ouwruH9xZUvvbyMP9ZFrSDkGc2shUaytwkTWEhzgTTdFW",
  "key36": "5uFifKscnB9K7dX4sXeMWdDWU93SrPFi3a3x9i2ew1FNUy6vqErzuVrGgUHcDoRqtyWGbtdxikmHx8kstdYocnju",
  "key37": "5VixkrKeqnkBebm8sUBU1ih9E2L7o9Vte11tq1Pknhje1oHUJH7n8w8B1Gb6dLa1GTwrEqEvRkQfCwRjVfs1VfsL",
  "key38": "2zf8Zzb3zA4N4sangeZYgRZHZetBPK67j7UZBNy54w1y6d4f4f5aJsUgTAQ2Fgp2GheALw7HoFZssYUqVLKabNdf",
  "key39": "62ttxxd1AwkKJTVFR1ipGkinQYK8mYtGE3WVHqt2mwXH9fFVwe45WfQ78v9HeTVJm2UihTvGWX9iv6oXTLdjxd7C",
  "key40": "3zPS9DhQiFXiGHHKHYGv9tfw6VTzBPufVFrcE9bc3CNFuZDqaQQzpbyXZtMbcczdw1iXKrmpzzjGbi9LTvgzTuZV",
  "key41": "N74vPeqBYSX9FzP2tP7fUi1YKhiuynChbf285moKXMUi1twoKN9iLTPBsjPjPzCEBwbQduUsdhjFhEa9sEgJ5LG",
  "key42": "Bm4MrohW2p85nzhfyMVYuqLM5GKQQazimqSqmLRhR1yKBaVaZQCG8vzQjz8gT9GpP5YD7MkXhBPRBCJwv19Q5TN",
  "key43": "64ujK6wq1xhTAcy2s88HqqYox74BAvASBigbasW35zPcu4Q1kHxSZFhUMZZqoLH2MVtVgR1PQaj9X4MN8vU12VTg",
  "key44": "2v37Zh9H3RaKNSfnyypXw4QFJrVnd2BSGXmhZfW5UhoeGyKZobTusRRosjUEWNxpJjf3ZVDYwh8c9xW37E7FC5j2"
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
