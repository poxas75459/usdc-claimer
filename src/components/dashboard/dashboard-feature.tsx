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
    "3kXN25RQmV1zTPHrRo8LrZWCHMUMtfQeg7xQQTpiW7ezDVxppycE1bHPN7UBjbpqNJWFBu7N8b8drjF6WJQiiULW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TboXeiZSsXsEJ71wX5ysReyd8kx11YW12yHf2m2evrF57hNtbrij6TbFYprxnnL3chSbziyDAiw7afUjVdNsorC",
  "key1": "CX2Da42PXtkuDwvHq7e9GLm3vDC2Sssnokk3qmpyr63V2M2uxVWgEHsfAnHiAh5pB1fmcqdxuHFB2SzQaUuHLP2",
  "key2": "4rWwnHQ4BeaU6az6DYdNRN4n3awvQcVrvqYYvML93Qm2jRJ3WiCDWXu52N2ffeUjRsEirVRiJZrVWHt4LQJxaZZt",
  "key3": "VUc4FWoWdHSyNmPX2NVe7soNBkiNuCRKihwBnYqijS1vDsQ2MPRAU9Eg8uhMM8Po5ZYChmQUxDnRcJ5QnzoofAX",
  "key4": "3iabVSEm5q4Q7E3ocprUcr6d2PVqKtzJB6wKqB3ug16TALHCfV37NHoKMB3NW7dz9RYfJXY7Fts1jBdPQmNvFEeD",
  "key5": "5MsEexBtpaXoUpSSfHEnWPp99psAHseik9PwnYABadmTDz16nXEow4jse17pLKrbXaokFEXWNSeKoAdD8JaYvx6X",
  "key6": "HdvodZJ2V5LDGpfXtCyfhzidJS9a8txE4ZuUpEwy6QaiPQN8XJ1LPkssEi1CEQ5wsKzPLxQAAVwXmWnkvYneqtY",
  "key7": "rt7VLZr2PjJySKbdCi8JQav9WnzKV4ci4Nr7TTJEfmpzvvygs7h3qGGoYqcpLM1UhKwwGjZtS6ZmQxRqWWgom9r",
  "key8": "2pmhRPJ9sM4JuEXx3YeZyPTKeTCWnB1VLNormnBRV259hQFbgxsECCRn68ynUePrGjD7NTVkd3eDbCVyUojeQQkX",
  "key9": "2YVqWsAmpaAN6XgWJigd7ghwqwiPSpz3NYyC9pde2osUBdaaCyi6qRzHm1NVdPwYPD3rbjHnBQVAGJtqdBcEZFeB",
  "key10": "3mRazjXmH2cYV4yRyywWXEDuxwCaCvdtTGEJVHvWGgtgiXJH5RHJdxYDmEmJ3MUMtcSh5fFpQd5PDuVzBKS515G8",
  "key11": "3fbun5hEuofUaAjgRMj76x12oQRigK2z7Kjn6AfgapBbsXTRBojmvwSJcc7cFZjoWUsM8UF2GGxFxqAjLTF4JF2z",
  "key12": "4V8Da6ijKVPnva1PLJsZfamK6uinLvJhyFqbzmn1zK7fFZFZspXaQC4zvHY3ZooreB4RCDsXa5b5qBXVgjHcybew",
  "key13": "5RwUCeEQB1ZJGgqfnu4fdPE1JLb6L8v6eTM5XPfHtKwYAkKfUDaWSdH7bSJUEet3aHkPqTFa2Lp6YS1pKEvaMEa1",
  "key14": "5eHrnhi2HFUKEKMgVbyX5oeDTjBgEecCAP8nDz6ZkEnZo4HagygDTqMBrqTEy2DwXiHyiSRzXJXZTarDS9Zyhbfz",
  "key15": "5UrEmQjHi3jNPLZ7q1rnpMkfPUxTxQb6SwaJqCYZadsi9se6n5uqc4oPxdSz3wcapZJEEBstcGEz3U5wQ6HXcN5Z",
  "key16": "2ZMjBuiXahDRHP9AqtaASBPbsnsrxJXi3Q8gRLiguTMBDT7naiMwe32pAPbYACGmEpNboX6g4f3cPxSGSxwP3PD6",
  "key17": "3fUund8tbjXNmbnHNSRwXi2XaitJeCKnpqVQZc1JqZ3vAF7HFR3jTtz4sRXxaCfTqZA5mTWLiQqThfxLQ3zacC4e",
  "key18": "3f8pqQqDm3GtnerUHDd9fvBaTzD6WjKiX2ew4zLGJwaW8neF1dLc4geNGZJ6VfQPa7MrfsfD6sUYHyioj3zWM1rB",
  "key19": "33FPboAy6PeaHk3YkdfmSzhsArpQRoZDKfT5Km4gd4g62H4Veutnr2LXTFvUaDdFb8kqadAJV5uy9Gk9XWjWmSZv",
  "key20": "3RNNPMmdo5h11EwXZSYwsiAeMBBcsnY4AqzZXZLHYj5Vg9SfJY8mfBAmg87NjcLUaFQdU3PgS9WUhGLpgaVagPtX",
  "key21": "2ZeAsMgZEGkc9tBeVUzEN4EvUHhZw4Pqud21GaxCRqmCXTmXzxNhunqDhiSh88vAesYaYpmunPGWkUDs7Ev39zbN",
  "key22": "2oubBLW7urz2PxczWY7r9cGaVohb5QuBf97ig5AgRh5T36whStkH5C2HUr8TRaiByA7WHeDKdhjwsfd7aAwCjseS",
  "key23": "22sdA4ZSjooszzq2TJPLkXvbeVu24MfRT2n2sa6jNHY5gcH9sioafput8XF4dHo2mWJWEm4QvLDm4vJMtoxjHLZn",
  "key24": "RARkeYvGJcH536EzgZ7KhspvwoiTzeEMUcoGbdGGvbdrABwAnpWGBb29L8TFJ4YDGK86fu9uuo7rFdnVPcjU66D",
  "key25": "2iMtcauSMQ4AvHEY1xXqdFdbkXU7gn5BpJsdDTr6YFtb4qZEywNt7PXmNPfsBTEhUmioHa4vef6cJFZwHNZreWPG",
  "key26": "zBxEzCZp8U73FaCVx6zbR1xgKQHixp4ntXv6N7QTubyKeAJxaZNfDWfj6yqak8T9U7c6hCctrCGMRpykgtenRDS",
  "key27": "3zovsx414eqx1e2j7fDLzqqzKVioR31C4U3RChUqSs23Q6G1EXLAQJc5Ar68pdHiaiy23EvMwkvhbbpAuXCUZRDa",
  "key28": "319pP6DXdrikuqe2qtKFJhwmNM1bGsp65GrzGRd7JCEoPxzGmG7WYq5iarzoWFvnuKxLhk5YuUSWQ8euu1Kgzypj",
  "key29": "3c828EJwcjChAcp2YN3Jp4n1vs7gTNFd332bGNCbNgGRPz5nNVFQ3AizVggtuBswdXz1WLPkx4PKDo2S7R6HGiPN",
  "key30": "4kwdw2TT4M3kUXKc2x4rwkYi5B3sKTAuJu4WYDp4kYrbrQTmeRzgXJVW9kHJWNKQ4dyj7roBKJMY7PAr9yR6Dhvv",
  "key31": "4bWQmF4HKf3LBNGTTWuN9mvTXbSAv9dd75uW6EAsK2gov7os8iuHiYUu5uRhyHtHP7Y7nk86WCoJs6q1o13SYCCL",
  "key32": "66YweoUKDRhewg8cV9Z8URTgTTuJPUMV1xdBEKmuWcRXWhLDhEhfQeUDH7bxS1Gi2946zCv6arBF9JHmzfju3uqY",
  "key33": "5UBe6hKTALA59nENXp9QinkRaDntz58YNSkVMBT75yKi9A8ioMwA5f6gKUTPbTCg625MjN9PtXbxGyE2VfxJZP4N",
  "key34": "2YqPKRa8WA3Ggaccm1c2FbEYGhs8EvoTJaVpAMLczeCqUUZukD1BFzbbCUSba1jtmddxRJERJ6BNqzZxjVnSrDFt",
  "key35": "2HMEZzy6SRAxuNKrGSekFyTA3oUeWjye2vTzaVj23cMYNXWJvK5uA9BeQ2XiYesxBcoD4HXGjKHEqkjJNnnYCRAK",
  "key36": "4xZJi5zrq2VLPzaVVEM7E5yFPWMjQBP4fcdH7VxtCBzgk9fqrcUV3UELw1yoY7h5V3gz7MtNJS7BULx12TRvuX4G",
  "key37": "ScNYD8MKBAXc2BNz9vMkxdHSdTCBSKut5yPVsSALSaC7DXynfEkp9b8f1qKmy5HYFy1qvZPTc3MhedsrdY3sT8b",
  "key38": "2Gh7b5ZqRHrQfvJ3KQRk93mwrVBZyb9s3ADGwKYodUxaswQadJTRe31GtCxoNgoCvbj21GJ1zhxYgVBRyEf6rzyK",
  "key39": "3wA8an5GKrdqpquPtEx165i4zon3GCcUki654xQSzmNuNMwN7CX2MT45b3d9wdhHqZRP5PTYd4BEH8ExeBM8E9ST",
  "key40": "2Mea37Xyvb7zQYWvqTXJs31Hkmcok2WbQCZzr5iufQHUnQGNMJMiUFNJ319w9rfPKSZzNyZfZ9n42bq8cKBuu7jB",
  "key41": "B9HQYt1UaPKi8DKDnNqJgVERPRZncDYP4PvpR1Enst6jDvkywJ17GwXXn4Ta2sLJGfpfkkLu1pL7Lr6HZPkVXZk",
  "key42": "RFfn4Bvj66LyMfVSX1RS5pzdnMeQSv97VXwGhbr7yPGcPzhDpKXqrxTEaJj9cURfoX7hPNtR2yVZhtPQt8AXK8j",
  "key43": "4dgq3vfEQms2taph8puxgz4FouBtE9vK3ykUkYDNxueWQHtTUizzeW7PtJFQ6VecJLLsjCUrUhsRneaNBDDAsTJf"
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
