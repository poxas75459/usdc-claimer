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
    "5Ajsp6gAcu6fxLtLvvFr2e9ig8bB9KzhkGpfCouXaVwZ9gQc9b3DFWWwp55Pm4vQZLLGBgEM9mBxffo9neW5HfJr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MhDuMAzmJL7Lm57MzgMNJQiJmCpp5Mmbk5CYTsiVRqPmnL9cJFiHXvVWUkJ7y58PX3rXWwRRhxCcrWy2tCWBEz4",
  "key1": "5crDyd1gWAaWX5Bmm7EoKf4or2UEuCR5PFeAakAeqHMF5L5pxny1fPbLNLjBPEvjHQvTeRep3La6Tm5mmsDzHR2A",
  "key2": "5DqANunhftdrjgahNEWPcMeQQjggRoKDH3VbnvnV43nQkYep5k844ETvyRWHWxnEtVHuri5AuT8wgGF4MhM6662H",
  "key3": "37rc5KAZmwJgT6rKyDWdNY9aNsYzWKwHNNeK382gC7yjf6V14CMBRKR54VAGhLhqTZ24ntQz5F8da2SMuXNtih8S",
  "key4": "5hHVBF6P1aZz2p2NZFpfDLCMd1KJmDGvVj5j4qpfK3GNgSskCA6b6gAnf3qBkRcSXZquz2yXTFC4FAHTeGShqkXm",
  "key5": "5UGtz3sU8NnHWr4AAXXUejoW1d3oUC24sjeioAT216g8GaFnvv76Ua4quugDxPGWtfThZoCzgRy1YU3iJt3ZDa77",
  "key6": "4QpLkJHsVVTPdVdP9iZsMREKjNNYbyFTWnQUupxXc9DftZxetwomYFjRbSgNpyGpsBakkD6cZVH274od6rPQn43N",
  "key7": "61HTKxEDo7ACkxhe5V7jNjSRMypA54mBgUbPBpcbzyuWt8LFRJqSXnRumo5pQnAK4ACUXXFwZz4xofwqZpCdLJNY",
  "key8": "3RwjFJ6B1DzYECc2Db28W6hjxahQGv3pdFrnPcHG73LjDR7fa2NFJvye1A21Yk9HEAi9zhs7zXvUK1Yrmjz6hV2V",
  "key9": "61LDjiqb4oJinYRortVf1HYtJqg2fHnNjJSXTzFpy4CmQ4tpgDD3wPrkFM4KjKofnJiQQUKR1Xv63FTUeN1FG7cW",
  "key10": "jY5GsxWE9NtsJEqHuaqYRSnBt9RJwHSg3FhNFV5576aahYVfvx5AeJjH1p2UgYCSX2SiKwXNfxjAEHmCCLLKFBG",
  "key11": "5vkPXE1ZkFZxRm6215bWWrneQTPXrGG2dTaCykwGxUpyj2QxdCTfJGk8xAms1TxA43GaCtES4czeqtKPGrdUaZgZ",
  "key12": "5hv7Zrxxje4xa1eWSEwijrLXcr4BS2aQc99rbKi8VKkqBgWzrCffXf4Y4WM881178PGSBBN1pP7jWng62YukvzW2",
  "key13": "aQUbXKVhzkiohG6RW1UH3gEUgSioeeaoNPcufEEprgcjHqREsFVEqA66NbrFtEhu7y3zLsPfydeBsENtiFx9ceK",
  "key14": "3sJwjgpq17oU24tEb5zFC3Bph8A5Xp4g8Y2UJX1EcJeoUyLDYyK9PJwmFKYZEpJmHoP3CUCwrfgVEnWWtX9cohYF",
  "key15": "JmfssZiGq1oqsxksuFwAPsSdG8dUTcV5uNqDm8iHYi6Zau17Y2f9RhSfWJNsB6dxpn8yEh9TVoC6czCWD8FAWj1",
  "key16": "5oYaZHPzCBNjhT89SwPvZgqmUGY5NVEd1cP7siR5UvkzD5TePDaPGRyjr6v2dTWQdDRWrZEFAncjaB9fqEStaZLk",
  "key17": "27kRg81f1azSHeiaEHvqzW9fBfoRb4ALHqNEBRHJFWDFMecWuE7nswHtB3HvNdw8CdcU2R99ufZW9knCkkxD7PEY",
  "key18": "FbY2h8GeUF4HV8oFjDGcdpgbWWkQBHRqeGKYXirnn6UFDamYSHn1m1vT47e28E55BSYqwyxoqxWSgeqBC2ybpv5",
  "key19": "2aSTFcKVUXtsYS8gmkqLM8iuapkEcmcf2bQn5pLvVQgU2E6CgD2JNMbgrguskj4P7dDUWGVirJgq8nNUd83xVN97",
  "key20": "5yqerFfP1ujQYXG6Nim5ZftLEfz5ghtGwtoqbd7Xyizg6WRiPU37yQadzwzFtVVYPYty7SnMkSjyJWLi5kkTbc6G",
  "key21": "3bDoXzE5znjo18d4hNW6uYbognKpNdHHXr8BDZwEN7r6ywcucBuaoqrSr1kMLsRGAGQ5BtGZmh4vjPYbHrhy7icU",
  "key22": "3TPDKW93GKqwQKZyEhwzsPKpisk6ymmWqC36dd5RgmpiWxEjN5QmnVaS9MCVdCHL3AVstfiGEqVuiEQzAVyHfa4M",
  "key23": "4RhRmEjh6xaCWyzrhexQZhhH4qSAnmw4tFBZMwizGfk1f6esKUbEKna8rvhSrqvqRUMtDetgJdHX5XX3u6tMhm6C",
  "key24": "3eiSzNvniZ4BJun6oU5vC8o9A1z8yoa74VWebwENpfvbyMPybiT8uBiYv69fTA4XxBgS5re6FrUzCfeBzHNDgJi",
  "key25": "49uJJGprfwSF9zNsdYSoiBtFuDjKKoKKBCmSaGJLRHUxWFFDPmXdpHLxjGpNoFTYJso9VxPKreC8VPB8sXZTtupP",
  "key26": "4ZFD5xotg28pckUEcTo9WhumKVwJgkpXJCkJVziXZAqQ31hXtfSRtEq7jYSg8tobSKd5ywgb3Q3aKw5EWLo5wKzM",
  "key27": "5vYaaD1pYVrFW1gGgPTSPypassrTFRgp4HqAJQXdTCpkgzG43udPr9YU3369BrrTXTZrBQzXSNmJFocpxbkF5VNd",
  "key28": "5Ty4x2oe1isaXLffUQWByQA5QAfZYBfJKJP3ZXSMTgpcxFsZBkbnCzj58SCoyf8m32Hd6rYLwDe6oNkJznLoH6W5",
  "key29": "4gCmjwvne5zEiBwvsCRVdj4cY84i5Y1HZjvHq563nBRte9KxS5NoCsbXd7MNhYjUPhxyJiXGQFY8NDQqWUUSseeR",
  "key30": "5pJcvD2TyC4gF65NT21wYHqx9b4TpD3xzEZsEaknhmRW2kPYtGoqEzRWuZU9P1iUSC49TrmHAWYofSPjbVvsAyRw",
  "key31": "2SkXvBAkM41FJyaHctQL7EEuAcyVa1zYeC85opj8oXCuf64HUe8YTWYU8vYysWjmtzJQYzFAL5hAepXKztY5hjG3",
  "key32": "Rbq1EC5VLvezFVnHjDi9vX5NsiYjG74zNDDhEpsD7ZP8aUtLpyHycd4ckaWiEo5ZghT8ajeqSSsFNSyu9m7npkj",
  "key33": "4rwWr4Ds8KWtR8eogTNFsSrkEhXbtyigfsvdaJ4YYRZXsaNtZzSqYovDpciGkeqmTrUb9UVXdrkW1TR3qTnfux9R",
  "key34": "4WcgvHdt8ThrFJkwd3tRL4e6G2QiFRZLihJ7pmTdrtPvckRXWXbdQQg3XqMAVfJRtKJVcWvdm1qR6CJYyM5oxMYL",
  "key35": "5cdyGwFcu2WBZEixiK39nDVurZNXrwJECkna3hqazJjc5Z1tQkSct9sZVm26QxG94i62HJRAzo6ZWwSYiE4tyQos",
  "key36": "4MYHQBtMJPKe9vzL8egbggoc5EAoh9eRsDetYtq8XaG3cWFxUpYKS7vrKYsRwCDbYYtCFgyGB75tnuxSPUgyegDh",
  "key37": "44pfSNzw3MREhwD8zkMSvKtPjTmjMG1Q1k3QfAJbLNRqG3A9CFBJ6T2izwYJMRcpNxJTtwu3KgF1hCBgyGN3xpTL",
  "key38": "5TEChMJVpGtTxK3eJrsd3BDuoMD8CVBQuZFw9sGR3rRHXLKU2LNmaUwCdj8A3429KU7sw9H44cVngvLoaZWh2inS"
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
