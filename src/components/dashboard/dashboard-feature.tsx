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
    "5YWE6Sf4S4esjdFEge8Ax5FVLvJzRGzG4SMQKmdZtQGNQWy5xR4SHe3VMzu9M9yPXRGBzTsUzygwqbygsTCNcanE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cHLZk8CvhxLoqKCfcpyKCpWvTu5Pzp6cCuSdjcNKCkKGb1Zj26HLofxSF7hVtvqAiYduLiAWXaFKX2FC23sJia",
  "key1": "3sVNRZ2aBdW3madPH7yTf82WWhqbpLcsLKZyVLxVzqRCsEb6khgbWQStPLAZe6pXZbSRYGUBM8RKbRZFwu79MaJp",
  "key2": "3HFdroiMt5xzTxuYxc4TdbQJcPhBGBga4NqNRnDBQ5HXyG76o7fUpAXxqnsgeboNcai1or1xgoYAFmQyrWor7QAr",
  "key3": "4tzKN7xe4zUwJQJpRSxQMepyQNEBP4S7CGMf7jhqQApqUNeUwQdLkczw2ECi3hoz2XGE4yfJxcRrSMMyiDW4B6PE",
  "key4": "2rNqkhGRTEWXMkyp5HRBi2hs5JkHKSPm6tq2nmnfU9zVv37x9x1LfxRygxMFunRQKsBDfWQeSxyGrpNXUXjoyXqy",
  "key5": "3yxLYWpMy26AiWnD3U6eQ3Lzz8agAycjdpFL63Hfmymmco3LVEwaFhW7an3nZmjSd6nMVXZTTDXVcpP2HQwoPMj",
  "key6": "53nkiqpWMFHqiQc1LJPnanWN8w2xHJUoDnByWNepAYLAoGb3TX5bYHNUU8w5rGQmucYB2f6eUXMdHrJLYEX7NSpM",
  "key7": "46HE9qw479xa8TaKoCPJbHkt9GoE4KBpr68Ru1aSuznzAyLSPdD2Z1h3DRtDNruzRr5Ga2XMWs9QqgCtMsFtyBm4",
  "key8": "2PhFcsfAL8gquvBvR1eLmukVcVzxuxgJ5JcfDkeHmbmM5546bFo5TvBxAMgME6YjUij7um7dcrowqmDGijfUEeSk",
  "key9": "bSg5KiaBNneLq6rooapCGNxxwbMhdVEKKge6yJkeVfcbzqfrXkxGybUoiAKxKvnJXmBu7Eg1MiV6FdpDt5VWuNU",
  "key10": "4fKaAUYv8nvATUTx7M3vztAr3ua4airR4Q3k5YDF5m7yJLVV9TsGspaKXNbdBg33EkJCucSJVtKyrJk1KBx4pzQf",
  "key11": "3Vzithfu5o5iCBGA8Cd83DC2jepR1gkvBYC8XZtbQGda6Ny3evURzdVwEa6zP3yqNc5TWiVPoM8i4E465o49ejrM",
  "key12": "5ZqhYY6C2sYQQ4kKh7DLtXdTG4MPLAGqAvigCCyRnkwgfBEmxmTV4YDGkKq8CoK8Y4Vv21JfhJVWx8FfWyHzqK4G",
  "key13": "3xY4EtXG4yCtPHvPqwG6gYFzZ9hxaxDpVqNDidbwRZUtNDLPMV14DBiuyWMidCECnBMkQaxPj8627bHfix6PLRuc",
  "key14": "4A41VuJxmyWikfwWiDSyMjWLvRFxgBWgQddiLwTGT3Q9gYLUJkDUsgQqKGSZkfqcUDb58SnSiJgo1YugnVnZJ81f",
  "key15": "4rZX9DZYMjJmaWvXVBDvtq9qUB2ppXbe26gqrWuggCu1bne2iM95v7DcxjQDfUqCNaYVbKavpAUz5rGcN4e3SjbY",
  "key16": "3RBEkqgAgfY1xaqEcwspLJonpFnStqnjxyhNxaAgh1pkbsT8u1kMdezfs7aUoSCfcLVCVZ2wXCif975UeMyLwWU6",
  "key17": "28ahqg7WpxX3Uc53WToHy6eFfuG9BM4NtXqSVWwkHMbKHHAPiA14tAwqVPBogaEK3pFWsW4xFUh2NWHb8aiHx8Sw",
  "key18": "zyN4nZj3E8YAEMntNAHn68vuhqyNAqscUYwtsH11d5K9Sq2iF7zuKj8R7Nkhs9hPNM3z7asjHZUqraR6H4Uqpu5",
  "key19": "27QMtqU4pqqacewmKS8cnFp3qKCHDeLvdEKY18PYLDq2J9j3i3MeXvFatxJSdx2jkjirE7XwAi5JBzRDvq8YiCRv",
  "key20": "NE1xi1bsrk3QL3DqdXHZBiXobhH1j794mBPDTcDE8pXtx6Y5JGshwiR2yMEpBWp5iqiUHC1bgnJRaGGVin8YFuc",
  "key21": "3RBaY2mm3AFNckfBCHjAYBF8ko4B4LSeJbw1cogKdUs6fj99uQXRbeHbkYrzgBBaKppUGnrE1szf4penah7HgNgw",
  "key22": "3zDJPrfrqe28yFkAjCFigbDRtRRTxDkq5AWeJyce6rCtaA3xke2fQmFAs6zx62C3DRZouEufDpbuXv2wT6aZPZ3R",
  "key23": "375FNtHVF67dTcvzFAtvrkEr2x3N1dUtZfSVWL6Zg4NkAK74uC4SXq1HDPMM258wqdJYXxMaUjk3S7eskGefzuye",
  "key24": "3gbki2PG5HZQxayF3VZcaTy31AmAxE1Bb3a5AeByJe1r1eU7GWw9fAiYbcVTpsb67vnm6m6YXnvzsgKR61BpSsAq",
  "key25": "58aXDe2FPHbHLUzur51vBUpsi8dGjmsktgrcJWRDVj9v85quPgFhhZyh8PaNZNmV5ef6hYUTiKczyUx5QewQmc77",
  "key26": "WhpS9eUydV8nHzdJJ5rQSe4MWT9Vw9UQdGLngKp9xxsnnv68ivU9DR9M7q1aYYj9KLaPs5nJJXv7rDnoJehJjMw",
  "key27": "4ouk4RQZuuxeJTufeJXgP6mCZbQXxBDbB3gSunSAi4maigfyc6NMgQyB5Yb1j9Haid8fcivh3ob1LtbrHNm5npW5",
  "key28": "5rUSHByhSnR7nZnvkTsZwCHtnSL9sY6oG9ZGmTS6Qo5xneV8eWhytS8be8qYHsUX7GFVXjcFGGwPHnn1eA7DS7FE",
  "key29": "563iLDp8kpUYoa5LV8XQ4KKVgekHHk2oVXVdqFAFDyUK1VHLpyTxdjZCXT3NjQ7PxifMgDu86iGFcHiWeruhUSwe",
  "key30": "4jkDv6EoxJposBKS8DpPfBFG1ttzdpXfrUNNncn5XVyvjxwxQ1FQ2TvqWMTkg7dc7oVbYLWWojZ3VRWQdjwWWUE9",
  "key31": "Pwz2X1q4U7rX4Zrvb3JBn6ZS7fBjfdrE7JZwLtZPK2dG8Y22Q72ZkwiADm6DYYVVGzWToLRZP4yyWLTzRhF6gyK",
  "key32": "2KfJHAP7N5VFfRMbAXZKzVJW7AwpgooL1a996hAzZXtGpMMt15vq9TwSRruDcAbfaUVcdtaAq3wZgmrC9vVvsgaV",
  "key33": "2xkFfmwt3YcBZhC2CqKBYHj4RBs8L2bPhz1ymnWkzY3N1PimfAq7LegndNngTi7BcL6dzXbNGdUNucKaRsUVnczy",
  "key34": "3Kpxq27nsdvFDfvcoNRB8GuYTUaeJZjgSSx9YeyH1fqPc5TBQ3Ptb4iQ1LfMomLDYFzXvB5KRkxNmpKWpua72cWK"
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
