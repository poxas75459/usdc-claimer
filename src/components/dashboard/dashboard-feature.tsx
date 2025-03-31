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
    "4N3d55mGbeCq4AGsXPn1A3d2VAtKTDNVeNi73D6kZT1nxptS5cZe7xedKLNJ4LFxxB7pvT3r7E1FERRHb4Aoof3K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bCnJ4MipXaBB35sztzLhgvU8RoxMTCETk8rG2LHcNjrGaZxFtSz7NuNViy3jfjoqPWE4ZZAxY8GpJKFpHpApByi",
  "key1": "42FL6m7AGrimmPZLm6Y8K54HHSQF4nLjqvDzQkknCLmRfzxJyZ1hc4Gn4oeQz1EuCSJFZjuRxy6jFyFUz9Ea6XkE",
  "key2": "4t2mYqsqcKULTYjKX1taipP2exCYCJ5JPktpmWasGkMuaALSSCFMyZnDrdXSeC4SgjK8ZyXZ4vcQwz85gQh7FhMG",
  "key3": "3NLJ7SJvdSWmbNtnXvLHMCm2aCxXEjkMcXwPtD2EwLv4dWXA8PFZg7nfS5X2vwy93FSKHtNQgcsjW9ryjuMSqqdP",
  "key4": "2Uek8UoDwLPss7GJWP1gcEvPjoQ7vUvkHj1jLChth2H8dACLqS1DbfPboej75tBK776TNDA5ay9jAm4mJ391uHUV",
  "key5": "Q94xkzguoCaVBBPCoZVi8yjVguXY4pNavJRQFXDJmDYx54vkjQfUW7FiUBGZZfsGybbgFADnStv6sMPaYoSduQ1",
  "key6": "57KCpSVvVyx3zmJt84WQ4Y9VKTnntGRZSraaRuToENQShjWSSYWi8oM3mWDML4fzJyD32KrrueCagjkL1Wu9X9Lz",
  "key7": "FtQJvdXVX3XnLNoZ48NuoPAaH5BqCU6gtT3yEPrQdwg5AarwKevrsVhk5NjLMikfuHNA4h9MW6mt5We1EHF7ySY",
  "key8": "4MqGyQkLvoJysCq6pDj84L6gTdvshQGDaUuTUznhyuZ3pxr6GDRMV15gjGMyQ5H8aKztZmyGL2uWpCZzAd3oTCFN",
  "key9": "cf5bAoQV6hs9pEHBHMRncC89TkxaRr4c969aZXD23VqouQ9XE83pZirtipkcKM38bnhWwTyn6HpUhKTHRKLDb6v",
  "key10": "5WBWnsSSvut5Vtt9fBGibHyeaWsyPLzsZ6XFsDGpr5qXXvMofkieTTdfn6UDrhZNqSrb7ZvNTa3F9nxVwXZT5maF",
  "key11": "tJ76Gu7uLJsBc82dmJqKgi9NZdwqEWRkyZ7bsUkjTDK6YPRFwAfxLoJeF6UGKmwAch8CUguMxmbyzGgvEX9xr2P",
  "key12": "4a9WXFWHs8jsjdffF4nYF7wG2dkmX9JRCcdJdq3LVNsaw839G2s1fYdbsDkkoUZZXpa6GtuuqHjQPtWAbaN72tdG",
  "key13": "5V4T9gjwotiAX91QWTHZiD8TsinAGxg2aaqkcF71kfvPgemyTMcuvEzWaQ2Y41kZsBrTEriy8dGnro6XV21zSAjn",
  "key14": "2x4yTPbjAaYaLW2NUYfcSfDJVALz1vuahh8mYdZ9zUsFXtDcYzvbXjEs9BpuQvPpvkCCEodngMg6VW523rmDKqVd",
  "key15": "2z6KFj8JqYtZVASdvsDimuP361DwkkTyR5Pk67CHf1kQ3mTLsgy3P1JLMWFMRavNHyoSss6SuWLE8eUieVmmMmLF",
  "key16": "4PHXvPLQu9VMZfWp7hpz1vWymeUKpGQNKUP9U9wEuA6QDGwbyr3iB9yEjg2bo5KK3g83TcuASbbEC9DqwkgWnQNP",
  "key17": "P4xGZLGbUHjNAwGusZ2Fy7kdF4LUtAcwhNW6NG1HtMR8CQ4P1fjxQTJmNT8bf98tSSCg9sFTSbrS8exC1k4adAU",
  "key18": "34YpLNGuLftBNbXGu2zT7xwSm9Z6FviwKGGLneEpb4ttPHYp9UhuwhSef6oYAhf8Wz2KuP1ekhPTtMnJ7wHKjuYp",
  "key19": "3MWti44xxpyXiHH6V9u7NQFEf7RMB7GQVximFRWKCcZp4igDpzrKq7R2YUE23p9VtWnNyS8scGw5JvEbVGAqNTdH",
  "key20": "4dF3f2jwHVm4rMZcQrkYYeRS9ZcTjBJeEFXvv2apccnVDqSKTCN9qvU74xCaHiMpjKGCd6JixJvoVdopWGjao3mW",
  "key21": "Ci1UREoB6eUpd3vdWK2sepxDdv8JPV1x2jY8VVV42s1RVqiwQyN3zVFVTe9eWyaBLi42DZBgTt2hZpyk3ovkiBf",
  "key22": "64aNracxe8UvGHcfjmrYvfLjeK2UimekEsX63iJuWQi4fRduy4righ1TnQvo2dSj7wArskYYjK9XjvR44Lxfeyqe",
  "key23": "4wD3N1qJk4fpjC4ahbCfDCEsFfVdTd3jadR6SmsJ8ZzKCpzSAEcUBzkx2KsoSzu3dtsabyXafyTjsC2sfHrWQQxL",
  "key24": "2eKfv3FvX1PJntn1fH5xiAvYYZkoCNVc6v5yKLqtkbNPb2hi2yRR84BWQ37wDwZEgeVKcg2K3hKj4QBHxmSgySX8",
  "key25": "Zz63YkVKAXXWKZm4BMvB3KHiJLaPpnJzBhRnxNvoBKQweUGJvXr92X8h38GFGX4yYMQu3H7mhkUXsDPtNLyCn6Z",
  "key26": "5NDC2p86F3Vga4WiRSLhVdXwEtHPkrthJUzF3aXhLjQXpdf9MVTgishYRe99WmV3cngqnXHiGcXNRUm6vdTEJoV9",
  "key27": "GcnPRNx7f2vAxbqL7JVn2oo5yVsSLSASUCPDgss6NZCxYRCYKr6T14rPVoWVMgxeYczHWv3agxXxBbqpxnVgYfX"
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
