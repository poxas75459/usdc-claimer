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
    "37JgfZSXUCbfWbKbqW9t4gMkczfnhHgxVxhPzi2msURjvbDR6YWmtX6oy7rgBBHKkVBbp7HsWYxtWJkc7djrCvVM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZWZbSkZNEyQ4CqTf32wmeJ1KrsDnCnDpF5mrdimLQwRfMTkTMNm449GAWtYDKDu2GUh8x8dw7Ho4MvPQ5wWkhyb",
  "key1": "gZo9s2WN24bV43aG7Q6GnTy7EJuP8Qe7iHxwttMAXi8TCR7UKMF3tCYQQDNakYGLBBNAyfzuhQonL3d9bqMg9ws",
  "key2": "4ErYpWLXuk2q7qVKrmLJWpsQCBLfh8reC81dP9RqHiNBw91ohSbEaLStEEVHHgEi7yrz8W2oWrobarrmRKNtu89c",
  "key3": "4iEBrdjxkgFpqAYf9Ys1BKnwjWDYYs3q5itLM1Cjt598vzpNBrcCAjR3m6k4dMpJnefV8d1KTLyaJFNKYGdz7qxS",
  "key4": "2vqA2zTaqipQTyFNgNG8GirtbSKvwqo3uK5BfVkT49Eh4hLr7XqXX7uRxoQA5QEDrnJq3nQfa5FKe7DAp4ixw6y7",
  "key5": "5Rsob3NPKqfbLLASvrYDTRMxwb7dn5Tsq2rqMkUfQYm1xnScAJj4P5Tfy5JoTjchpV5AiLr4ZHMSh8MC51LWEwC4",
  "key6": "44sgoJwwVUKxUEEWys8mwRwwRKvY7NbaUdRn1yDs6ZzLCo9WeSxFKUKPm6QYdTBwebmshrvE4htUAN7Au6aqYv6k",
  "key7": "3sFSYonrgtfzHd3qmG3xMK8oFaybQhmMh5ZZtnd6t7jQ4Tdj3qx4cPiYrrN7mUDfEeSfLn1Eq4eS91G7Em59MYFq",
  "key8": "2p5vTU4WLLkc8tGM8GqY32VNMZ2yQAeQSGxsNfx3F1ZdgBZAj93VK96iwwsaeEdJVk35VWy5PptVVqChL4j78SLQ",
  "key9": "4WWnHKnMMHL32RM1x8RGbFzcH1bCYaPyvBjjkcUAXMKakAiyAeZEY64hq3QyFUz4n6m28cbhshKN8kuaqYPABnbx",
  "key10": "3aox2CJFHKeHLN6RiVTptkLxjpreuAYWKfyNn6dLUNbwBnZNZb551cQVrSpRt6mNbRtw2kr5CAFUDHoQmxB9HxqD",
  "key11": "2yK6zeUecSYPdRxZzqinZuCSTMZb81tSK9aHAy5hskFAA7NRdbfGdD7MxYdb71Y794hA1xd4HBiPhgjoY4v1MLgc",
  "key12": "pyMWcB6QncqHh5FAvRw24VMmuiCZbPd3k2TKFqnEw2qfD8b6bgscQwJjveSsRMwNd3DwxYSrBm1oaV52XgZjbqm",
  "key13": "52jXKYViDSx8avB7ZyNpXBM9hvJQhm6GcSgQxtuLwcPSsc38Amtp1umUep2zkyHiLQP2qFnU2qSQfGCHpoD1teAe",
  "key14": "5LTJnqvsXDTHUpX6Wf3eSwksnhRAaBvfY1n9CuiP5uRPj9A4ddDJpWv8eush2oSN5uVk6vK8apTxvUbnzuFfGnFy",
  "key15": "4dqn1HuDGCCJj3HHa9PmqrYLwsd5iKsosudB7G6B34Q6NALiExeW4EFsy48G2d16MGF7WffVpovHj3FPrvGDXp56",
  "key16": "3fdRLeC2KVeawq9fRnWzuRSgqHqcQ8Sa2GerbhLCcSRd4s9KGdsEhU6DF3QBsb8zyJG39eNLTajExHjR8aedGMJZ",
  "key17": "3giw4XvPM51WeTA9toHZdXccRkJV1HTWpEF3utgGZhJh9bEBmN7sa87PGCbAnhiB6y7J1K18AWQtMiyk4Y4WZPyN",
  "key18": "4rWttfsiFmeeMvLtwRPkJZxUNCS1wqKQqoKR6gTkzjqZdXSwgQqTF2n679KKv8YLZyUaurDbGbHCZYVQaGrkm82y",
  "key19": "2Zb5FNdV7dD5sxGoDjWEXN1pjKVYphJ1213LjW3QL6cj5bQJkhhAth78bkRYXb6ANVJaQscfKSEyxPo6TSCt6yzc",
  "key20": "3ar7eQQ81t3WWo9mXJUo8G8qu5FoevtYv6cwohusoMrmRsjbpMsLJRanMnAaPUPVTufYiRG3CgSqr4zosYeLm3sd",
  "key21": "2j12QmyZBTpDGHBWFXyNn5eGfQYqk3F9U3kDaPowZSW1hy11QLMDRbWwgdvtE1qWKK4Nn47YL3YVmfwK5RZagL4N",
  "key22": "4z8BWzBtDDZGvTt4WoBQ7AebNeAu1nhSY7svP48aJc8LqK5WqTunowyvBkd2RiAUPnuZpYSjnJrhhzPLGRtNC3p4",
  "key23": "33qMDwCHm8iyww7mWtzFFy7Uo5z4AmYS3Y1kTt4wipmszCsvibEsEsyRRck2aSDr5LaYTNFw4wKEBMHzo2W3qYpV",
  "key24": "5bupoZ4uC3YpU6EatXJTHGmRhW4pokpWkTN2htXi6G3m1UiZfmm6kEfka5APLqJaty3R1UHSg9KtwrJ3oPy8smMu",
  "key25": "Fovh2MupA38FHdcmzZHJ3CiZcNKnMz1uMWg97JEB7dEkB9ubuFycsVM4FUZWFATvXkQeEDejFuz1z6ESY6K9Hez",
  "key26": "5Z9EqkTCDucViULSCm39zEBwTbbqrRmKY3Jj5rbFTnXaLhR9STWWqU5LUuDCe9jZpq8bYCH5UunZDNgNefQmga1A",
  "key27": "3fMEhp5NPTUxF5u33VsrLBFhURprmXL2P8Qfn4TkWMgsqtFC5PoFRBZBu2mU5hht9CLLEZXzaU41srXQeauPGcvU",
  "key28": "5hizKFUEnjzjbUQZU5ZCsHiMzNGvh2WiKfmK49TgnMa2ai84aVNic8zCmgMs9KECMoLbmngZxu9m54WagN6JXL37",
  "key29": "3rVqeo9eCsAp4FvuTd4tAT9ti2HjBUNZTwdaMyEoEcQdKAmtLYEGfxnhm2UZ7rgT9VugfprRodPUSPRXx5jpaUF2",
  "key30": "AXVYi9akRKFEHGJ9g8nmFh79qFpVD28SJMeDjVobKXd8qjn9sfh9VwUmso29gTzgqja9ZRRVHGibiqLWjvZWddV",
  "key31": "2JfEnERieqaNUr8Rh53vX8HUQEwRX1vRyBNi1sLnUkBmU7HYATKNt1hsUffvz4rZZNKyWjzDhocRm942XzMPykYy",
  "key32": "5r1oornQYkfEKZZfzQrfXYwABdkfKPtap9y8Z2eVKCvCM4LwF9xbQafCzUAxM7cyapPat9iRNELM1x9sV4NNDVUo",
  "key33": "3jhUVRFgKfEb9rpetNirX3eyqCCenvKotmFtL3hr3prnRKTzcrsiJ5UfvBbfoJt9yzMjdXCLTdqMPaGio2rS6Lpg",
  "key34": "5Wehjmri2VuFYEgen9LJq2gQn5EtH1SUQWQd4n6PbcAWUkKdoR78eDkNwDWLJ9UwW2vzHEbUNt2SwHYVfZNFMuns",
  "key35": "duXFnB7MJ7rUEhazjk5SUgHoETdavmrE2752NjxsCffB4dpD6F9hBtDiKDPwejdhX9FTpivM8pAshha3aRC91nJ",
  "key36": "3e25ia6P8vuNo22Q6oC8iEWyWMeQuajmxYWuiagidgvkyoiK8W3UNUBUd63na1brU5T8CXTqcBxGPPicMPDQvh7f",
  "key37": "2ux1n6JtPVVgE4yUKzAfj9kAPmKg6DJjPhYzP6FKTrxFMpHvXoRGyrfGyybAqudJHdE81HtzfrHhwMHTQ1JPW128",
  "key38": "2CXDYGC8YJKiF8rp3Hsd1siTzKXfFtsxjExocDiAYFEquSCRbQzWpfKVCkvpkeJfoMxNuiUeRFae2iPWbUrpqi1Y",
  "key39": "GSY41TBpseidMF25vyW64hFXXXsqaLep2zadavxZazHiGnbnh3ZG6v6GfscZ3ec8SZJH8Qf1aBpZH1Znszm1hCt"
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
