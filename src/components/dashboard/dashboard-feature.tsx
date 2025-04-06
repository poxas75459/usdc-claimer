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
    "22ErJwi8Hs9dnk1xeYLeXCfPqwyyQbbCwqKweuPu7ZFy2WpCgriBAH63H5jUZcuVPz4GBEncMGkJ5xzVeLJ6Aydy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24dX6pGEXsEbw6pMFq6cCztZubLsGWwYfyguJgbSs2nZSYegP5SFRwZrZwWjtG4JXUKQ7Bwz4C3tKnPYBLXnvTyp",
  "key1": "4C3PYbw91f1aMQebkNjPuNHnwqk6GZ7TifT4Gi56RPW3tsgP3mwumvQqHGvnkhWMd3eAg5XTkFRaNrW9BfnfVb4n",
  "key2": "3MhUxPrPCpgGCk17qMZv94tA6VU5GzLWiC3LG4FMc6wX2Pyjigv1ebABFnU6xTvn5v8xo62QBbbYzvoSPqsy2PJE",
  "key3": "3qkY5XL3X6TBRsK34HFU6QZyLNWJAFQDFmP6uVRz3zJWdpNNgpwtMUbF1EhqeGFwg2gX9jfp3UaMsXghPwujmMFi",
  "key4": "5kYuAf3TTxXcPJaRMG1jg4ibzvhtBVxqxRXYXUq2SWGinYXw7hMFEPR7D9nqUDgPdyqKxWqvPq5qgf5siWxnYMyn",
  "key5": "2jc4sKXnnq3fTkRoYauR1hKAHeUobLdRYQRtUHTLJxgEY4nbk8rfFrLWPW398qK1rBG7qjCaLVy8HCSNaeNXNmX7",
  "key6": "2x1fYr4gtRPqAtXgeEdXuyAx6ECjAwiUkik114oGYyYDgopn1dCXQJ6B6wEKgA8wXwszT7XJvVxNmYZtznGkSywJ",
  "key7": "2XdQTYcHQT8NPmoxpp94qShgi3tR7kRxyPdcox3udMyuz5eCpT9kERHJQxWX8TomoPmFCBRbtnz1tGNiAuiVVAbM",
  "key8": "2AZfHr9qQ9bn9boX8gMbrRAaeZuNcGZBTUNsjAtKsDtEbQLmFygv6rTsKLsvoSgBDomn3BkNjeinmCqxwqyjFkF4",
  "key9": "4vwyNjZTtGAEgGHoqTDYPKbcTuYwDxL4kVNEGxaX5gSB71d514zGZb5nRXvSMwi3S6aV7Rjm6x53YjyZ9nKYwWj5",
  "key10": "s2Q9uqN1wDTXKpJZmZVBfUzpoyM7xHefaT18irswSDBEbZgs4vkYh99wcaqKMDbHCac7D7ZkSneogQ9vfMCi5uq",
  "key11": "29ZMTbb7zunX4HeeBctAtE3xTCteYUy78BgeyVKg6ctTE2opQrWvkoja6bneWrYRVtZVPn1gsqBQuoaG3eAfpdLA",
  "key12": "4aMiBCcNt4ypR2Zhkyx4jbahse9dSVmyqpy2jptvPYhp9Ss5yN8yV9CZCyvMTHTDqKajYVUhPMQKaaQ3rZTmDPo8",
  "key13": "5DotWdzkDQYQ5vj8JPasvxpGwKpnd9JyDagatBrhTjUftLTDkQ56JDWxVDs6NWBumG3gHkMamkbmBxiyHJNQ7Mgx",
  "key14": "4qqM96adyQ1RAns9CLKenjjUY5P7GHaJ92H1UqsQWSh2j6EYe7MTenvPZqn9xohfgtMACg4S2Q3txeqCGPbg48gK",
  "key15": "3jA2qTQiL4F1MnrdT1joV9YpQAMFhP7fFStgxRJPP4afnE4peyamN9CynJvYNeZKmx6TbmioaNGn4XAvWMSa1Kiq",
  "key16": "o9oCMHdSnXitj6pdRwc9P9jw19fB5nYwfw6NE1gk2SP8d2Fu1mZoi6uAyDMC4NFtfuRyEGo6r2N1GVeiX1xRFuX",
  "key17": "2cumvKYgbd4rj93wYeo3Cdrre4YWPX8DeeYqaBqEH2mxVPjZaT8Nx31b2EmsGCf9H2bT7k7F7zf7SUcAXZUHys9w",
  "key18": "51TTnuFa4V5qze3HQjXxYGjaxdVoaxE9h3zDkcUms2nzErenwmRQp52EMhjo5zKM2CUwPg9nza3NUJ6b6d1kZGHT",
  "key19": "5o3a9VtpKUuQA5yZMMMQDYYXnw6DPLjy1na2zmgxZEEph4Hdfyo7kGEnnC6NQRneQHosTsK1yoGzt8TB1R2SBho2",
  "key20": "5bt3X5Myog8AnRFonNmpurHJjFHmknC9rHft5P1nZCuq6d3YEZchM3KMQKVobtZ81nk21P2bkL4aNwFiLCkkDyvR",
  "key21": "483AghrmgJHEBod68abChrr5gFUkAfbtMEH4WC7S1gRuPXVhcTTtwpnXWZFH9mcrcgLwLyWruZX5Sseo8YqKs1VL",
  "key22": "2V4kqeqsuSdP3DsPTTZgoiz23eDz3Y4JWGg3EQxBw3oJcCV3Kofh1SXZVeQFv4Yzi6KSBQMXazgno3vmSccH4KUT",
  "key23": "pmiyJLmGNQBNfZxY6XWU8ZoaQR88tShq5qXjAQ8SnXkDpJgcHCvkpqPmuRWuLGNEYrA1xQAbyyFs1FJ6MmCyJ34",
  "key24": "kATkvYSc6P2RtDgRFuMXkCTf3aA1jmafMMcXLuhEWaAdnrZqEQ47aFWM6RXQhpkg3YfpuhDtghKdSwEKhhXAbYs",
  "key25": "3TwtRiatdMQYWdjiCArQmUkT3TBCZYhumCJcxLVjWU15Kydz2iUWE4B3798ka7xCjz1Z3nC4WW4Bkj8bbsjPjo1S",
  "key26": "5Rw1tFK9tTn3xf6qS9zFbVFrZbhTYvQuCck9i4CGbt8jj7FYXCKrR5szmzwUPLjaZKVDBkyC3NRRM578VPwTQYBe",
  "key27": "o39sUps6mBwUEuEJBP4bVFjiBnJkdKwC2SHpNAEhVbKVTrhgka4byajAwdvMAsWZvp7VnRvzWQn929h9WmM1VQJ",
  "key28": "2ecnweXbSb7h8j7nwNw6QkuiEVav2v8ggWjpMrKG52AUaTtdm8rqWmKNrvFMaYfxzqMQiKzgSFWB6YXva4MHM4cK",
  "key29": "5UCvJvwRL66gEn1gZeGvDw5Ft5LPdRYpLif1pHLfdap8eAbtb3duzQoFyu95bMRr6DFZxE4BWh8GHGyXRDYEJRpH",
  "key30": "ssrp9pvfKBhzmC5AHrR8kUbDTZnZM4vLFVc4JRbpdcyRGtg6G49uJ9qabLA7wHR1TwP2AGc4HEMd4UXdvZma1Y9",
  "key31": "5UGzzQwMKiYSmMya8odLaXX1ozEkMiRAP8MiFj5htFSZcizjjY7zHR3dW9V4oe4bXsfTHHn4zcsFhRA3oWGDkqZK",
  "key32": "2RTNiB4UQhTDbxbEZ593bN2jj4nAkRdEhRcYW44a8oqw6skwqVUozETDbarPmrxMKoKqhoJrLxXkxrxPuHgjHXdV",
  "key33": "3xVeE4y7gobi44gosNNnTUJC37R2E9f6c8RoW1irddJDWJoccWPdHzZjeVUCUUbVJdNAvfjGzni5r17xzzfqigK2"
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
