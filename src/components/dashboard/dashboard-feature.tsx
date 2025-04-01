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
    "56aWhsXpeYC434TetGYe2gTQa4663BRj8iNoqixqmJM5qCh8KYsPfPYNR8Z2r3RhAHfVtKixZgwKosRhX2FUJSZZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fzU8sesj2d13ByJEQUswnd7r4VvAiPLqkWszsWBg26tFdh2fPzFsf41CpAreo3a7qiPega4GfLDniJ5oLtkK8wj",
  "key1": "5WxsLWPGzSkR7NgybqjDZx27dHuaYYycBLvwsQAphp7WFH89MdgkWrMykJ5TDDCeStaF5ZxKJdWP6DBjrJMcYm7X",
  "key2": "4yBXzwt3aJt2Mx5AK1rh5sqTtKCv1CtdpZgJSXpPgRtpwHL6C9ywUEudDZd8QWeiddN7NuR4ggWBUQBuLLZeigfT",
  "key3": "3pCV7ZD8rH3FcUFeHXka2icp8PzytRb7CYsoAaqUvscd2aNpxrgC7RHSXerwQPkuVsyA8FhguDs1JfReVUWS29t4",
  "key4": "4nYRBsXQWt2mKGtES8w6VrTzLoagFNcChH4aYqGuyro5PixBjSZLdoNXVaGLM26wAtyPfpBzwMJ66GKCJ7AqsXLF",
  "key5": "2VKtHxL1hwoNfK5BewHRjmDL1EqR1QwTuNYDLvzXRy6HXRY9V8ijUYe5uM1nAt9K3H2f734hdiAgzs3iNfwZgrvn",
  "key6": "545ePCQ6wAZexUg6fqLzg6dB6Y4WeH9Xqy5VPRBzaVvbhzS4ZW9okJe5yf7VFx842kHfFfF2GWZJNpkatCEnFRa8",
  "key7": "2XkK3syjEwKeUyHzbWfffJgkRchj4fZLERME8NQuuiS1vgjsDdB1DvF2A9dHvXFMAXv5iPzGF5BKKoe4tNTpkXrT",
  "key8": "5CDRRng1bfsQNJs4rawnrkpHfTfSFBdJ5RxpDTQr2EyCJc3P9pD8vAH9Krddrvk4mqqfPahBLeYuLvqjgCRvj7Z2",
  "key9": "3NwwzQbwNRR6XBnwe3fmKcEEuq2DSnKnVAG6vCZMrDYhwfcDZL66PYMtioEyDSXc69iHZtRmFpXwgpu3fAKwM7ak",
  "key10": "2PywdZ2DpQXoF6J2t8aPL8VKNyxbk43o94VTZKfAifd2DyFBfmxHSzhPbKnCeGgbj7UEzTvButKV2W34S8nmqzrE",
  "key11": "5984zeeCVxJACouLCJ9FEczy1W9Tpgr8ZQYNj5tAA7DmwLyznSgejWzHmKYejyum1MgLQfCsB1Hmp1TFeTeT4DgA",
  "key12": "3wogMzLQV7THyozkPaKBMjeVhz1eD4jbeVwJ7ojCJQCScAubDze3WqDmCCpSroN3csfCM88KSQi7mEqs9BDQKNNz",
  "key13": "2izYjMbtbFZYNjZXipkYe8EWAV8nssNxv1LgnWDsV1oRtgwNLXhUGKQ1pFruXPv8gVYB652NaBMxkbpEBTunYZth",
  "key14": "3sDiWcjFi19wmheS6niFKco8wJ8kW5p16bE8tYCBYzprztSstYHvD7LuoeWR8WTUQjLWKRBtfKRaLEkJjV1wKe78",
  "key15": "5hEGLVgd8DqbBvb4cjZxS5vFywA6fmA5phM4ymJzYGSJnmNGxprbDy7G5Dywy9nHkKW3nJZjS5GPQGGksMaMd6J2",
  "key16": "SSLEWjJNpkgxnhFw866DYTqE2pgKTf6GhbA1R9fRtUjBKwSZW8LAtJ7ZgmBeKNahUPAuN7QVq6rLsQ6uistLa1T",
  "key17": "5ixgQ2C7vxfX3MinhSTEcP6kr2mokoDoU915A7X7zwAQkRa3bBsLS5FSpZUikWc3kFPEjU9nJ4LDrKEsHfDDZ95w",
  "key18": "21PFtRGWdP7g3wYbSWQnWmeaYhvDdye9S5cmDCLDrr18do2t4guxapijcQWZfVsuefrbuaZ4JzMPNbneqjHACRiB",
  "key19": "5iSM3bydGpKcwYW8iTDkoXgKbxbXMJBU6aCzVxP6o8gzFGqREgnSb6xK1LmPLyTxgDb72supFid1yu8S5rGSRsm",
  "key20": "2EEfQ5KUaNe5GCSJaBbQSYVfzn4ibiFSAYfFuLTRfzH7LAAH8cVHitb5kZTyuJtQmQtRt7P3bRous21nEZkZi6N6",
  "key21": "49WMi7r5Z2aWRmniH3yWBuZasugWi9oVm5qgVyKuTMBSgkpGtv6S3SQXWEoYr9gvEFSZrkuYcWtZF3spoWHmCr6s",
  "key22": "y4pmWsAmwn4CjMB5LmwefRwM4e1vD3NWViHmfhad37RNeYW8fHZLxTfC51diLQeojgpqw4MxoWtfQ86zCs5vfV2",
  "key23": "2pFia3bHiNmftSwnjQn1uHgtJAT5n71sqKsjeVFcM5246LgqGcsXQbUv1kxEmBrEbXmJDTT56nHNKoadJyCNiMcx",
  "key24": "2abWC8SiKU2AAtApfQ2pX39Fkra37qQs2XAdNvxFidVfBocU5p1Q4oXCN9raWxCoDqNRjEG1PCC4BuzB7zYbW9UD",
  "key25": "3UoN958JuYv2iS7Y4jMomxd6nf7Z1zJGxYptWJhPsVUcfTA4dDiYP6HPu1aUJrHcsHk3X4fRf6fjvZn7wUiaGcdd",
  "key26": "9AnEA8CxdGwzLhyGtrtpmQPWgSb83mdZt57w28jJYHMrz5zNKEkCp61wiwinPQ3kmnUTwRJGNDcinLtDsTwcSFW",
  "key27": "4xutCk7a6QJvEou9fZVt3R95ZxWgbgNa6LiNeXsawqGXGjPBtpWz19nDVHj61mKFWQA6TpLEvPLrnJPEb7eVKbQ6",
  "key28": "2JBgNMqqQ1CrFQogLy8oNYBCAupfAcQpNso6RrbaZz1RZzc4MfF4RUFL5Zn76uwSFgKkbpVWfLUU4rNNJf3rEmtc"
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
