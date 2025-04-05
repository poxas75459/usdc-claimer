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
    "37QrsjCJCDT32DSRGXG5Zk5XDPYwSiCXyzXoS1f2A4htyXhJngE8BdsYULThLLQnEhRHs9KAgNvVCmMYp1MCSGN6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aqK3VzTJXbYDV9WNs7Q6xV5Qv3dFRi8ApZ7WF7CgKDvTaXdLw54dEiBWZtKpYeoN88GJ2wdK3JZqSnQpQnwEreC",
  "key1": "5GmVTAsQsNBJhAJRHPmApU6FeKjJH5mjeYVYpuCaosWCX7s4y9uampEzYigwBHvGEJsL8X3Hhnmc7q3ZcyTU8PwF",
  "key2": "4e8ArDed8B6EdTknMPWzjueHxFR7m9HijW8CdetA4ZfmgxmNaSy53NAKwyJhzzAjcmLT5234qSNEByUKg7s1JUQ5",
  "key3": "at3o6xy1JECJWYimhTD9b3Jp9ghghscfiR5Cn6tewDKT1MjpcBJATNWLK3RGz9yvA1Rfazg2UJNfzbKKKozzK7V",
  "key4": "5jjupbHBuyW7WLJWnEuQkFQKTVx9QfpAjLrAXjSmajZ5Y6q2HU9QgwWHj1qdFe9Aoqw59ib9ehEKE2K5gRqn9nuF",
  "key5": "3A64gkNsdF8SNjMH8mT1VTpZoihhKv4WR3Vfaiqh7W2kv3Ce4jTVSN6H9gnwfVFtYqRKSWdB6w4jbkqzpCKzkYr9",
  "key6": "4QRYCW5gvEVkpGG72sENdBSDuyWN6V1RcgdFnL4ZPsFfF86HxeyfYUzBUw4UjjQEfchSGf35A8uxNjEnjdp9TJZk",
  "key7": "37VFW71oBNQqX98qJD7PYsraKSn9jt4BYCkkCajmFFMtj8aURU5jKih158MMCosiWAVJZTFeZyXC1z5UJy9BVxaK",
  "key8": "yAKopHstXswPiRW6aZ8NTUTvQxmgbuGStGM6fmpFjZ8VdANymwqv3KowXPvkm5EETCzAjAJnCjDzvqWHLhz1FQq",
  "key9": "437G8Gsu5SjhNKYy5GNUXKxDy6d7Z7YcSdYrAAEGuaMJUAZxrBiXXa8SkF5vC4iLEE1YQpUPzoJKB83qU8dZreRc",
  "key10": "3sFnJJrmiL1cyXWQfKCYhadZcH5LRWuf2uiofeogjhyzvc3TawpfGa3juiLeBWrwdzpUAQ7h2XhJiqgCdBFdN4fb",
  "key11": "2kGZ7mNawFYg8Y7LLHYmEswoMBeojvZ8DqKg4ppkTgC8cfoc15j3ddqnQrLpdvnnEBb9bYpSb6JZXLFoVdLyCTAo",
  "key12": "2jN9JfKTakF9n9yVL1ahH5X5A5t4Y2ZkDxwwwgJcV1pqHxS5Yhyp66iinLDDtZ6iX5gYNEWe8D2M4tjMiMxHvJaA",
  "key13": "5R6fGUmuk9Nnpowr8sSbdiUHm3KqUzHfCmP6JbNdntJYajrfzzJLzNURQ8JmbmiFGRWH3TbF6LD6GAbq6DaUkqdF",
  "key14": "4FDArx7D2XhyS5mom8rT9ViQuqCGszBc4ZbYzAACiEjJZVKCFCtHvHxqhmk92EkyHFXm61iD6Q5HVQZnYaTmtiLR",
  "key15": "5sZHJKBKJk47aDEHfQnXq25jE1Uz5PxhSnmp8Bd79HX1bNXpCJ7e9Ghz2WU3xyttFV3fSz4Urr2EWM5nhMuZ5Jnh",
  "key16": "3a2zGHYWbHKxzs3aXim45cA5aYsRtouucpX3fTf6Kt4Mrc48DDNY16WJFDvwRuXbpAh58FYnTzar64z71dGgp5GK",
  "key17": "5AibrfVZzGxKWQciTSAKgMZhDsV7VLtAfnJSEL94RT2JjewbV9dFZY1XyNoAhRXPLhDgeouKxnXmUcxMnDYt5d3g",
  "key18": "2BWst2bzeALjJBhzwZqoSrWEFFQ4mEDxfi49JcgSxPC6yXuM1EyN6K9eKif7nPwwE4m3jxXNuX3nGNV5Lyk4SEm8",
  "key19": "4ycxKQ6y7Dz1hJZLxVViEKM6YAL57S6ZtCj9gicJ6qeD3c79zhwoNrDvLZjygPfaJ2gpeW76m4ynR2D6Cp88V85x",
  "key20": "4sibqNLu6AcW5bA4ASM5gm8txEuStL8Gc3Z8sjw4bx1Vqq8wqA8H2CNnDYATMUveWSkQGYSx6jqS8QQFhU9ewWfd",
  "key21": "2VBZMfjAUZ5K8HQuVpH5UKHxz5sjKhRKu9nbz1EfBArdRmgsjJBBqMdFtqdCo5dM3ScMwsiA2NZbMMM9XVrVFX3h",
  "key22": "dq3uqsKj1WDKj2Li4ghHjdn8Nns3SYENT3AE4tGVTx2i7vazQaCuUnbWMHvCdVFnLUi8gTNNCVAQ2LhYahycEV1",
  "key23": "5FAjhpNEzcV9SF1pG22BsWhgfPjsJ5StCzBkaZanxi72Q7aj2YmCg8bt4cvMHBEKa1xkyEnaWTtXEGpYncbN5pr1",
  "key24": "5E6Xp7ZBenauEED63ZQSYWWgNjJXjAZrEuTF9A63bRWXGgDADvC7SrNDL2HWTaLpG3fo2fYPFfwS8KAUdM6AwKx6",
  "key25": "ALA7CfhW1VwZX9CD3v83TDBemQ7m4RUnyhxQqs5NFSy4Uj2Uzhgu3a4bdZqnVnbckW8Q3sdWui84wmgKCzL1sjH",
  "key26": "2w5iCUfau1xbc2Xc9MJkGqCRMNCDxQyimG8VVFjhzpoxcCz4hSz3dqgpjq5v1TPjzavKWg1J5jJDq8ZZGixsTUYC",
  "key27": "4Ah7GdYPeSCq6hf17cqzy7DFRgVDUVrB1EhCijWDQ2MqF4YFgUnrL8TEcrBLWTDQDQRLVikSseTfsomJiePiJkXJ",
  "key28": "487M9uFcqTmDU44ozdMBLjcpVpjZder5oxA1CMeuBFgw16FpLCbD1D3h5odtaXj8tGeScyTffSCL4B7SgQAcHH2t",
  "key29": "32cJmSQbdtxRCQjy3acHuGbu5RqbauChLmXRqtHDfRZwuZWiQmQSyPM3E8EKGYKnY9QqN1maM4nhhCtyK9LGBWdW",
  "key30": "4BgfYAJB7STm1GF8z5xzeC9bAGvQJELirh57gq3SeDqQ6qRJ5HeQ6NBSbk5hv85WkKX2yc1HXjjyKueQsaKmc5Uu",
  "key31": "j4Y3wTMDVBnsBHDaaAe2vVuE4R8zEe2fRBguqsKsABem5BLoJtPwNT3VGb5PAAu4FuZaAMZJWYnP1wLrXf4cYcJ",
  "key32": "36TRhb7RbyHLgJJdyEJoXEbEecJJmb8b8MbXGf1MX98h5KmACVZ5BzdQi8WT2SzufDnaZw3a7BoFd5kmVuhHTNB3",
  "key33": "4pfw2jR2WtH1CBqK4CqmgpbvBzDLc1cLJCihoqHFL9wkESenBXuM1TxxLnuZ76FPC9jvJMUaT4bpxggbxKVNFoQY",
  "key34": "8KupGDMRXptLAnJGvKjzJEePZCAKntKM5eH9B65ohfHBDbRugf8KaszbiKUrHv8GLk7bxTuaYPzPW3awqFyDA47",
  "key35": "5qGPRfeWE3Qv5rdzrrxQ75Fe7wCb5Wr6DQzDy7vg3SAXAZekLabGGgJqzcToHnsd4u5aBhfMAyP7JzR5d1jFTZye",
  "key36": "2JSmNk2vKs5XY1QuCDU3j9FALB96U86Fo7FUDC5npRmmbuUVTfgxPt59pgYDMtHWmRDqGNPyKd81TPSwo9Jfgp6t"
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
