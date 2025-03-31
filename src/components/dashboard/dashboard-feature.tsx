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
    "5cRufY5jfXwQRGeqFv6KWJf1jYwfxvqXHTLzjqaEeXGhQsCA82jR4Uz3mcezH98jjfk8RrL7wZysVT8n319zomLK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ohjBAL4WWhTdSkZNkzuEYvNLNTR4CuA5AgxijMViyT7MLqC5o3uftAorTJM48pJsCoP9UMAAhVF4CCdEr8Noj1F",
  "key1": "rhMTaeq86JBybJ7oJxAC4dFrnHmtw8vTMU9NLW4Asiumdk8rFiJdXee4AHxMzwwipJi1VeJcNpVD7QWxoevB35v",
  "key2": "3H2ms8KQT1GgaXfiQNn4UhfxJQa53XRcbHQVWGR4KtHNrN2gg1tQehNnUW2PoEyJZNe849GmRzjCZuDEbNpQ68RT",
  "key3": "3Xwcj2AQ9mfVugDKy2aL5j1k6auRcQvoaAMWypg7wpYbpNoo7BxDxnasnmHgHShFtMkvtKZ8xv5nhECxKW1RRu4d",
  "key4": "w1GqouR6pXQSTFAAGWPJHpb1orLcibGTvRi3EturV3CWocmUKtwf1hwYabJkYAyQfKuuAeBefr7MhtV3mRa4knP",
  "key5": "5eaKSMUky3pWEAwjZNzxTGGsjmWAiF2BNyditMYMhAJyGg7x1VYo2jcFHtwTBLbq5UfUSxNRGdKxiSRtMVFYxAo2",
  "key6": "3cscPA1AkvR3bPn5WQZtPprWrddtjf1rkytiF8aM7ABrnAp2nSaC5kvUoKYVyrpJpEFmRo3GW2vVThNpZ3PZYRdK",
  "key7": "5XpgA2963p8HRpMmXMynQUmpib3rhz6Yor82oYUHUARLk9RkjTx24UPjRrkBPVVq9auPQo7GKnJKUWd6Kpg3H2sR",
  "key8": "4rwu7d9fZwEYVPm28Q5LXDF5mxVyuqfuRwyqF1oMtig4irkpkDfQCB6bfgiYB7PSyLHzWJX9kyJLknA2f6YiqzQj",
  "key9": "2HrLbwyLc8Ju4S5XfWnX5iBN9YWZ3pNNZ2vshSscipSQueZbKRxxGatbZRD24dotnqJDuDtCXP628HSPoh61jkC3",
  "key10": "3uQ2YtcKzp6a8p9krC2ecj5i56QsF1QEUAo1ZrGvkQd8kJN7vGVfArHfK4rb5MkJEKC8cMyzKi2bm54V6uCKMJB7",
  "key11": "4yM2KzgkzEm56aJPtWDbj3UNzgeDTnsT54rf8HKcVb39CKDuxDSripcb53XR9txRT75soZu1JdQSCYpdgJDjttdi",
  "key12": "65iqcBM9ygpuCg8P6TrY8ELmYhXKX1ssgaJQQBkp41SegZXnvtKoPo6dSom76mcJudYj31K9FdaqbQEWNUJho6Te",
  "key13": "5gBJNjHYM3fnvb8396o7UJAuGf2YYV6T8jUegw3yGXZLFodVCTe134kav4Sd9qkJPHDkmTGhoaNhep7GKy1EdY3E",
  "key14": "g8TTV7D1RF16fjMW3TNdDQwg87Z3yyvJs2WqedNerYhm9nuZiCkFqdgJV3jesTTCbDpLhciTxq4ZKdX2NvtJmgv",
  "key15": "FrG3W57S1bnuP1svxF4ZdTAY5rEeVHGYgVSTCAifE87NkT7BK9Ux6bBkqhww2Dk1JoV4Zd39JEMey1pqh1Mu214",
  "key16": "hhBKdFR8B6o8y3Hbq6iDmRovUBAXmCobH2JxAgRbYpSrspJKyiQndFHakxYqAY3WMbYamuie9WCrjE3ZM1BZZiV",
  "key17": "R96dCWmG52UsjuDk3Tsu8xWaVAXbxE5vqeCZMMKbiQTPmyqnJJfpRa3JfvWtamoJdb9zC3sW9KnDx2XDPSF6HRj",
  "key18": "5uHBsk32VPnaMCRimroVb8pnzM7vonLrrp9df8dDMhYX1Cy3h7SSUcZp6s6RHW2rC8713oeD46H2FuNFLrHhB8RX",
  "key19": "1wS5irs1WPjCrfJ7Kko6gkNFM6b6H6kyY2xsZDcuXFgQ2Nm2D1qHJmGrckSkJmdvF4agb4GkkdhYK8sPPydwpYo",
  "key20": "55uVze49Q4uHhNZz1HnnTdsdJETwDzjq52D9kwGSkvo5ekAddKfRNapyLXAtvSEVh8GYZqrxifWCskJNSZp9BdbT",
  "key21": "3eZDoSWyKi5BBrcv57YE1jRT2kUySWmFmqy1WqhnjfsoZfBF7V8SZCEhzCv3HvpimNLnQA3z5wLPFZh9EEN5BdgQ",
  "key22": "2tQq2qCkxxp5ZjP6YQW3D6HmGhpfBUjiRHu2sy3gMrXRz9SGhqSzM9rTJMirsvFUfhBkKHqAHfSN9PtQXGms4PAe",
  "key23": "2FxN6duFyTMik5GGK4JeRfmsT8mSvFToedWVjxx6Y8GqD5ZwgF2ekWKUqTJ4UyveWqcotDQKjGnaFvGRMcd1SZep",
  "key24": "4YX49pVjqyfP2pEWjT7T11HVZ47MQaU9bqgFsjaXPrWKXWEwAmfXzAFjT6xdHSCAdfPMBBUZbqUoixZeVPSbcVYP",
  "key25": "2UGf7pwwziGSGsmaUMiGqzeK1Crnm7BkFvyvDF4eNkZsrK3WL8Wy7oVNUtzGRhwqidq1q3kekpiyw65WzF559pd1",
  "key26": "5AYJzhqsgxFCihZEmbHmx4WPywyDXGiRCynUSZyiVjk3T7dgFmD9p9RkQCCG5MTfyafofUHaCXvvNqXPhQrsGSKP",
  "key27": "4HMjnsxPuVhFCPhda2ryEGcj8KD9HMeWDKaSzc8VPJNvhGgaDgQv8ELYnFx2a15uQ92MbpoTnze99mzTyR5MhZXJ",
  "key28": "2a4YynS5jLq9hqtxEggpRWXVhxEsi9m2nDPsTqauuDGe1haUn9XLFX6Dnmd3t4Axvee5UWMz9EUxFWsrr5anh1ZX",
  "key29": "5jMtWoTKWnw9DvoutjDYtM4FvQmD7A2QBbsuCv7Z4f4WYJUJSpQ2PP6nY7TRJPRQyhxt9tV5d3keDbdd5k8xqust",
  "key30": "4VZq3VUPRbSMLAF85hgnjD7hv1NQaFgs5w7LEmCEHK47dKCDQX5rXwFXxZkvA5hniFTgCiBwATDNoi1vsbMxG8Bc",
  "key31": "3xR87z9NURs4kpzHKD6Bjb1oQL5zzB1kkTog54qABETN1M34kU8JQwJwEb32qVgc1T1EwJVV5WGhXoMiLb7XvqvW",
  "key32": "3BinhGdrRP9tMQL8fVa7tKgaqy7h4FWymZwamjDcx8onNrWMGqwKmFr8yv4dSZZAzr1FqawfC8xaGEJ6serJgPUd",
  "key33": "4d6UQG3XY27ZRztxDBRaQaKLE9pS1a9Q4Cj2ZhKsmz9tPQLgHwpjWbLHZC27XyWyLnUsLqWUthinjGrE3uu9TD9d",
  "key34": "5wK2wt4Nid5TaFUCwcAADBAeegRXzo8qd6cQkiLyhR1RTYk2zpyvMZUdze1H4SN164SVvrQerkdPAhsZGzeDesXo"
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
