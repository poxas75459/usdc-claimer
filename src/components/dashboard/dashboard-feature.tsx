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
    "4XgM6Xwxp7aJn2R2jPDXg9UmHZpgPmeKnLmbAHrVndehW5nN11CaWVTMM147E7TSt6KJmfepH75ThEASSbH2uT6o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Q5hywYnNBbLH1vfXvzAnWHW9BgfaLTSsMQFWLe8wUcNKbSybvjDXp7nBycgEokgvMiFfG6ptuKzpjMD5rB4WRwE",
  "key1": "5pw1CPoqo8E8Yha3cDi11TNcP5FHJswiRHzP71Gp6wBFtpvBdYw3Dn3b1m29Z3kTFWdqBYn14ZAtSYXiqQooPBdB",
  "key2": "3UuG4kwT6ZX7YN1CXucLXyVfRuVPnCYD3kMGJxCVXjia7iCmYqiSorX6fmEBxAz67TUxNgs2oJFvHHU2uzeRVqW1",
  "key3": "VAwJNfZ6oYNU5LJ2encwYhX5LDPQxRQWHYCfgqD5MePQhPfbULpjSWB3Bpm5veGZaU3TEy7b5unbJWqsvuEPJVc",
  "key4": "5QzpTzNHNw79UfB24TGBwXXduAhnarnHJJN9QxoEUcByxXzFCT79PomtbdBx93Y3i1dDm8frP8ydboMBVmdCmsq",
  "key5": "3hPffZVL6R46LnCMmpQqGio6qRVH2wTVtQxmQUiFTqQ5HToXQK8pDoWC3JVyA53SKB8qVPsv4xibiDFpT5fdBaC3",
  "key6": "4qNxFj2i7Egs3SyfdpgRcA2QnHn6tXi9BCfsGkUsrUBd6VtJufNs4bdy8EtDYQrUwT3JBrB5H2WkdixLNiYX1yKn",
  "key7": "45qcmG2ZVaBD1JTzjfo2k2N6Lby4mYd33296nsG9j3FYoqthezcRd9ccquhUHrkCyi3xrNKT7d1UTTyavCMPnyg",
  "key8": "2gpVFxNgKQU4dJJNGPJHnTnwQZAdGA9U9BKgqcwmwC4kwj9B12BLYzWQBAEn18Cgpn8g8r56vQVkWPu1EnPUgeJb",
  "key9": "hyByVc2JwqdHK8dbMN95nXkZdEfssuGGsmeSu9TcHFNvL1FyaLB41NR3PznJAsNh29xnUKyBjS1gL3TrrUt4D5k",
  "key10": "4AbZfQRMEKeGfMQozPVaUcNrpzSDA9V2jbjuQQdBkRWhtfEYjPjnVzPxvLbDh16wHFWHtQPs2sWxuesr7oxzjhkr",
  "key11": "KUoXJCNXcMmUb9wEareTJhN8mPMTohjoDEkodyL8CT1g1kBgeK4eHMCeWWe8UuniKY7zRqjrCZjMESirPnu1sgM",
  "key12": "258ZZPpjJTkKWGk5vtYkEN6tckN2Hw6JyUaJKQysKD5LtdUphc4Mt9wn3jT1K3MtNC3wwuLdVb4jaBiNC26PQ9gC",
  "key13": "pkx11MmVn4z6ZtKZKiCkmnWN62Ravd5ecWn5HaQ4xTTk3NFhFFyL9hYuKtvZDnZnvjTmu13xyfKTwZEirCPW5hj",
  "key14": "4aWwaoGtNZCzk83VoKgnbc873zTVCniG26usPGq28PJurGEWi2CXq56hcEuc3idcULqKNtq6odFX3jbB32XjrmD5",
  "key15": "4eFP8C5xeKDLaJZn2iCGkLG8JfcppoGA2rEtB11sEGuXuM4jRUdTK6jUtFn4uey8PTURMb8pQi21sZPzC3eT7SKq",
  "key16": "3ixqD38PqtUaoB5UTkdE1auAHGnSESWdTZAoRW8v3ruV9yYhnZeEqFFfcmwBkoiy3HqctTfhkUHBwHUXjiQJAaaa",
  "key17": "2hG6ij1mZ5rVCAss1KSzD8HLC1RF8AP1H3gj8gzcGr7m2ctv3eGjM3fu6sdStE4LSFKk6wD3PYJy5Vb5HQLoGYr2",
  "key18": "5qQbmTquaRqYogBeJf11y9LF1pAWYsEswyZqAjBXxwJkAANGj5XAUSsqFMNzv6nuUD5BZYtNuEjZRK7tHQXYsVLD",
  "key19": "tkYvyNxUUGPRQmL83RBZh6M3scFpU3aVXYJXr3D1VXnYCdVFz3SoJbJQExnfSZcakpohJvY5N8F1auT64nXsTc9",
  "key20": "48B8ghSukep3qT9rXKEbjLRVD1MzS7v32uXjQhhYF6seDJ7hWN4c68RVGgJ1db932Az8XLZ6VMcgcHDSMfYNGGvn",
  "key21": "2ptPBk4nK8kEjuUXTLqXM3z6xaJRjXdEFY59Wwp9LcCcMRbs6kxdKVDqMgBN3ktzr6HST2QKRW1dkAXjJhzHwBS5",
  "key22": "29bxi1m1n6N7pEcGjqYqfZEBFWsExLFp6YtQmXCpSz1kKg6eKqPcjx5JojtkS1nGmyA4Mq1CrPPFqnzQuLRwo7yR",
  "key23": "5iuCJncpWSAGakpJdBFGrETh2RzSK7JWRXRyFGKsemHwkDxoM9BBATK4Rg19DSjb35SuciecDbgMkiyMRV5BwyoV",
  "key24": "2g5cPHig8s1k6Rm1kEvDwfuYeemy76mRkMbKCjbcFMkAygyoTWirtnSjhtNmaiNDWzVCth5NqaXGzCvVPdPNs6cX",
  "key25": "5gkTPkBg6cAen7RZXpxm2BwrUkLVmjrB6CNyR5WHgSu1bEgJz7JTBmhYqqBpxtCJ6KKhZx4ifbmU5B6TmeuuW7i6",
  "key26": "2KmECMYKdDxoZisNjuFFB1mjFVNWG42hV61bVLNPeYBEYKXq67wXPbB85i8jcZp7W7c5DPZKsEUZkYkDuP3q8PvE",
  "key27": "5EKxktRZGATWQ73YygDsyZutwn9CVVQbfGhKqzybJsdR5aYooE6PknL2jYc1nttcLFVQUwJg2jWes1tAFi2Gwra1",
  "key28": "3FWDUf1CL8uPqc6pux5GnrRe75r9GWAR5GAo8Wa1CnAt4GtZ5rN3Zhy8CFDz2PdmaECFTbBq3de34ft82Q9fNhEW",
  "key29": "65BEdrK8dqWupFCy4Q5i8Ba9fsNoeVfUPCnELVabyQsKhmpNzwQdC1zheaQ1xm5twt3usvaPXV3Bwso8NotW9mMv",
  "key30": "3eyezQySF2MBq7xDpkPKQAvFbtCyZgieRQMJQAH3TCvwA3kRgA46Hdo3B8J4B3ZcX5t3PzY73UHKieiFs5TWuVkR",
  "key31": "3Nok6ZYXmCS9VvvMs9y4X3u64JqW1tGTa4YXG1nzGxfH5mknymgHHSySgaw9Wzjj3GNvMwgJGVsFNc16E83AX6SK",
  "key32": "5v9EGPK189MMvPvctphRrJ7rwT7dBbjUDyEiZGunQA3oMz1cfi9WfbkEidwX7vrYVojD5c5RXfEZAqgyyDxtuhpg",
  "key33": "tehZtUCjV7EGYBuW9Sp3dqwsMhSHZWwNhNs2ypXRrWn4niUwLpEyk9QDWqEjYdCXAqnCZmMuAtTDByuhvHnw6rJ",
  "key34": "a8drzP9AudnkyBQgLP5VXb9K6ypcpqNJpruLZm8Y8Ce5QvfivWrAAB4gWLJ93VHV9mEhirUdkQsHShL1MZ4mGe1",
  "key35": "3Dg86THLeb5mYzYsQ9aUjpvghtq43x6CtDEAedXwcNvhTermhPeR8svG35wkpFYxY97n1T5e6WRZKxoRrt9SJBqW",
  "key36": "jrjj81HrYttQVDJceXS2Mw3rdxPyF9g3onTDaodyEHQzd25LLt2icH39r9MG9ug9ZCpwC3qVJtbw7h45z3knWoX",
  "key37": "2RrvCDUnchZETq6NaG7U1Mbhpj1DkKA398isky2viAyAsiW2RcU8nuNzHBUQSZ7zmtYobhL4GDEN64Egz7JZJ3vf"
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
