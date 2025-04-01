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
    "Y13Enr8SKBhy6kHvgMijqL71wd7eDH3nQKP114VkdQFCH57Cr8fYLGKL9myQTff3s1YuWWNkMcKMxqeZoJcFKJi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "495483Tc7KSynpG8CvPrrZBhnntALVBA458KG9aUZdA4sGTDm5BabNsKhbubNEu3QKxjgSSXZsxUCdM9MjXFp1JX",
  "key1": "4Pro36G9cGwHj94zRNQEYSs888Jdd8kCH1SJxij4ZfwHiYbJQv1TAXucqcjZTurJ7knWpUDgkxAWYLqX2cvDAKvD",
  "key2": "3UQhbDRkdS3RWu2pzxtgYn5YuAhkEkYxYJrV68YhKW4scLg8GKqYF3Px8e5TD5YZMi2rh4W7onbvdFY77cqNjpEK",
  "key3": "4LzqDL18V6p1ojPJZX9sunxTdEy45XqYwn8godXXFLhaX2We88YwPuWG8aEHfz6bMTxHwmGdfaEhr5Q3sU2iPwey",
  "key4": "4pMUV6jsCSPgEMqE9B7t5pG4EzDavwdzo5jHVBaf1sKgDFbD2rPr9MxuxzJXSn2VvZpUEMVCquVGb6PJ1TCaureP",
  "key5": "5GBnGUcZybYEtuMTJQcvTQZta4cLoUJ9LSE2DGkVKtjZ3TkpnrEXnKbLNZpmTVZPqmYMGbVjwgBs7vM5G5Nhqb9C",
  "key6": "4hiJ2MYzjGpqJF1LHNdEp9PRtaCscLTvqcgizxRK7WmSs1kbH5bWt2LSyUVcxdfHd1PtZETG88F5jARXaBSKE8Bb",
  "key7": "3NLc728PkBWHBFwUqeMJCKZXfMFZudD1MRiaFhwxnr1LCzws63Fe6KJfsmkCPu1DsrBGgKKjnuWgM8kfcUV2C9Vd",
  "key8": "2yAzA6iarJmmrM1mNMjYYtKK6nbp2hyJ8hgJ4Kseh94ALTHoMJynZi3gzaqLmVBfm4LsojywB7pUx9vGbfQMp2s",
  "key9": "3NGDWidDTMWMpKeAKioKzv6rFvsYzVenJRAzQm7TeU7pJoLmBQ5JqG92BuPNFRw4m4J2LH5v9yGkm5wiSR7b4aza",
  "key10": "6Fs1RLyFmW7TMdjeYPp1nDWPUy7CTLw3Y4eZJxJ1LdF2fZvRvp1Q4q2gfV7ajP61sxSPL7p13Xe2hz61cbgFK9m",
  "key11": "26wT4KXMKfJ7cHWD3SoAgUwYdCzsz35ssSN1rrRBreTbfbkkobCuLQSWRzyDFZ4q3LErETnss9J6DAqxXtGtXhdg",
  "key12": "4gXiM2hdeeGhNEPjT3dY9w7ye4prCKWspsKfSBKvbgpR81m48HVwSWpjxXej6TfPj4vJX6AXbmTzQmCxXuXEeQo9",
  "key13": "5MmH2sFrd14T6KbVqUKou6aMAMRMs11p3RczSQwD4hC5cvdnvZmn7xX2uzbWCrCbBgvsSBcdAYqPDjJV2WF5nVvN",
  "key14": "4KSWphg7NoBpaTJhhKVpRm8NpRQkwgxWeRHMibwok7so8EsLHsvtD73W7vL3zLCpcL3AXnM3nrGUHeCRQUsooPXh",
  "key15": "5mzFjRm8WNiSbpyxt8bBXmYX4Vntt1wHxjGZ3AVnyssx1E9ZTpPtoQwSXajTMoyB6iFZES7RpKW6knhjhRcmh6q3",
  "key16": "5Y6RGQoEZc4xKCnx1Lnd2wj6NMiGuAzcMvGyR4EwvcGdapz2Q4XvdgLSUq78RZsY6xYnrxAwE9kNkL49cup4tfv2",
  "key17": "58pVadRiH2i4vL8YeP9dCGFhM1UHReHKH4sgDP1EoDCTxsbxTbzfDmJLHiYiQieFFJHvQwjAvM6bFRn8knwiZ4tC",
  "key18": "2nZDe7idsdG53Hf3pKEo7gRaKNUxWZf2XkTULe9QLg4GxYyWtsYbZYGBYaZDGz56aEXqmQMbp46GauS1GjuKQ5UL",
  "key19": "56vo23RA6hc2SMsYS9h1nUmQ7C5j3kT1QWt55YwB1yzN3Hbvhq1Hf3eQFLSPHode9yRj1goagHdRXqjGfTMWipH2",
  "key20": "5LXLF7piTn3gnrJGMpERK7v8hSj2cjKrs7UXwbs43TnTU5XyipTmMmAfMgdTBvLf7PoZ3Q4t5pp6RxzFfGwFNoH9",
  "key21": "4wG4pyVEPq85GgY4jBKA9KRTK2WPFc4SDd8ok9QdfAL3b4GdSRDSVgMX5k8YwSVpYTNbmyftwZqLrXjKgfWyiJB6",
  "key22": "2sJ1Qm3bS3hytEqDbU4eGFbWTGHV3AAVFFgfBeQ9eWZ5kYLGPte15dqKBwWYuciNtgJkvDJR5qAwwuhnY9kNy7Le",
  "key23": "5L1JFvU2gwiiQ1mUt7nZjMDd2Q19CfViEzNKiWc3VqHQwo7tKGQbSFp2W9BTTZR2PCKWLUEnEdqdG5Gnk1g7LzYj",
  "key24": "2NwNEaPKfJWFP6bLZwKzQTsyouZfjSN8W8xBibaqBN3T8UJ43Wu2z6D3Krb8oD3zKFr9Ux1NVQH8i8TcJBmvXi5C",
  "key25": "3nFjNVrWZLENAJMkzkhFNZJtZVJ2sJqyaji8b6J7rZQgbdgVJoWoHeR7gSAioDJWLF9mGU4FYrdtZwMMP271m2Mc",
  "key26": "5BoC2bxFtc7Dvw6HAyMJ46YyZSLb26xkaQU2eqQiQnt6G52mHJ7NGwKv1DRJQj9AXZibAyhcXLi8rFBpxwnH2xK4",
  "key27": "4t7LV3rUmLd31Lfuf517Z2Lej66ZG2mpPFKznGW6xV22DY7rvRUjX7ZYcgonQGisto8eDz3rBAN1gzecmQUBGBjp",
  "key28": "5CwWegcurzLa5NMbMGrTtg5ebYjmp1XPoJDLf7TjKV5ErzjgSXbxNVyFXaP4TYMbLr74NkH4nNtchEPhX4CTG469",
  "key29": "4N8Nth1jkWGddde8rKZ3NeXbdPXE2Jm4Yqf4A1KuKqLPca5pmWbxW8zsdmDCDAkUWGqXziNZBQmTMBJgNAvGQUn4",
  "key30": "2o1YsbuSweVRsqSyU7pEVjfP7hbXN2MZtWw1t67HZbGsPfPzpUVi4ErkAJKwYtAna33efLwPyEvs9meqtVRWwB1e",
  "key31": "He4KMSfcW3y4qDxUACAQShLSum2aAz5AmjXPi9ARbtmcQuZZegnPbUwy3VzeouwFemEjjkbH8Y2NGrCxVx582dZ",
  "key32": "2hf6qVG592hbXGLbdE8wKofrxRVMrzmhYo8R176t8fKiYKdRzkKiRHo2EBXQsQjijZKwYSHKoNWNkRtx5MHusPmG",
  "key33": "3yeBpUjSvAVSPHbaQH6wCWRpH2jybjhdUHbAew1mnjofGnwHFFavbmzkZwsJBh7jwRRGatwDDncGm5L2HXM5ZeSB",
  "key34": "WpqPEZVNkgw1PJ8y3WXt93bCAPpGNQS8MQwBfXfQCq31MQ6AhgXDFQZ67mHJukyRqpTuyHGof6v5iBh5CySSoEc",
  "key35": "3GKrgYSe1upxmwB7PYfZWdMC3KHZLQu8vFjnhZEqyr2gq2XzVdEjNwSsQk1S2NRghL1DqxNQ3zwYtCdpWKS34vok",
  "key36": "3XMS3Uvz3g7NVGg2x4KJHBBYHbWfmqUj6h7z6JPMxdhykHXKQHL6CU4dry9Ztbr97UKr5hsSBvZwDvu5fHWKACsb",
  "key37": "4Da5t9LB3TYguXaMwFRN1BvgVGEBGTY5nm77pyg1Usmp1YUnfTnmymciBFNSQUu4BZrX3ejTGQJah5iAbrYsiiHn",
  "key38": "kXri7nKK5UzSdcrYx4a1hzHbioXFY8CG9a9R29vwPW4qASWtJz5mn4HBa9aJmHbwvgQ9Ebn7NDYMwAKFSEQKkK5",
  "key39": "2nxhsgfyDfGue2nmDQi8XgTzmKBLDQfARwxufSpxcAnn3utv9VWaXsK7ioeWAArix49euS15JjufehV4pVTdP67w",
  "key40": "5GztwZQfEGHbpVYTtEGdQZ8hfMZcEt9KDePh5fkPDtTia69ar7jgfanfM8v4iyHAjtYR1L6ioxiwQmUs1T8vGABb",
  "key41": "3yuwS3gYFM65ZKMDt44vBard13rtfjyqjdQVZ5BjzUmroUC2bHYSYvZwr9CgcU8XsV51hK9UAwM7UAPxpM1DjXVf"
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
