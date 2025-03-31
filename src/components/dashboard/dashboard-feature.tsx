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
    "3mmq9eUDFK6KnakuSd97m8wwLrgtCjk2cCnHYx4gJscceTzEMe7eDod7mGm6hBAyWDGeWtSVUWP6o57iqKdw4eYf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KJpdyEMbKuF8oGvjsGCkV7YipoMSmgCyhn3Dc3qand3Z7jidu1KwXsTJ1Vyqd8xDLntTekSCeRRmQ3es2iB6xD4",
  "key1": "5Cyc2Ef4sNcXgj9WGEVgJG2u3WBm3PxkGi3VuxJxoCX1mk2gWi6AeitzYLEFt5PVtTxC3CBT77KSmtbZwBbUNHCL",
  "key2": "3shU3XV3M24ATZwWJ2U9UgBs3rHDojipMLoX6ipXfWxEW86M42Qq4SUyAcni9BoEQHNnPixaptxAD4uaLAUT3p16",
  "key3": "3qWNfzyFHimfaQp4zB2ZGHMFdfcsQ2fo4LQXDDPvmPacVXN2i4HnfbdBPshESB7J3948vVwHQqCcVesTUaMVw9SV",
  "key4": "39kh365kzcHxKZvRNjnA7fAc2qzrKXyg6689uHVX5i1wQAPRJfZnWSakGgT2oGgQoB3UE69R6d76MfaWEGVcWgcB",
  "key5": "5mfcpZ9zGzyUf1pFLjdGaeqpM63Xp5h7nczdoVB46kS7wyfomQSpAxGEtNmw1UNyQFR5WpVUM8z9Cwt8A7T9pYD1",
  "key6": "2Ho9CjvumFcQseCMWshDBU9ojbAKW1XygMTGJoki7L4wx8t6t6JnmLvGgbdz1ciGEedLbG6dVEqdRadNhkueDYGb",
  "key7": "QQBJgjC9vXH2mGDgPnftp9qSMmqUiUmHgxKBrbMXBbqHnu881rdABBRKpbSCeapaWcynXxqPB8Pk9vccREFjPgH",
  "key8": "5vZYzcg4QfUnyLK7ug5SgsCtMUEYysj5HBf7RfN94pY5sLWoWXNeEhvhCURLhbpuPksu8TDKGgYjPnKcJqAQnHMX",
  "key9": "5Nk6cof7rbJMifv9z8HpMJgyPTDbJhpRntJv9WjrrhtTnKEvP12g8u2pgZjTaUht7XeQe9pLxwisprVfMYTszT3W",
  "key10": "5vXcxVWsje8SRCxLMUDuD4oVR2ksmej3kYmUxVEPSv4FGEKmRnHEZRQd5CWtnZ6nM3rdBBZT194tuZSrTqY4fYps",
  "key11": "2axUkffwET5c1RYi7fMUhVEqC78ymKtenvxRDvU6eonESCMaEZCaPuV2xtv8nY1mXcwGJi14q3BZr29odUoqrGin",
  "key12": "5wsyYXaE7mEthFm9x9ynnFdmccsjQroBEm7tnvELNyCPN1VMRkXph2ChAe8H25e2DwWfKzTPoTv8jiWFUEFyxtfh",
  "key13": "2sjbQTMJw9o9NYursQZKvh9SyhH6sriCguYHi2kiGPoUVhE9cwrJcoX36m1gTvZE8nnMCuwybHbnpEVcA49tydjz",
  "key14": "4NMUapxBX7ZG5hXss9HmzSkezfsfgVp5Dms2L5gaeEthMkBuwhk8t15D5KEgFHHzhHaxwSk635NRfSRAR8rTodi1",
  "key15": "5ZviS2XEFPjDXoTbGUX2tBotzfd8YR6tKfxDJotCJ724UdDU8G5DsexG7iXrU7Ydn8jeZTLdgyL3LyFTWqUhkY4n",
  "key16": "67KuPmzJHNYTyvGBYSD3W6S7F3qhFHY3sFMUZ6E735SgwB4Ap3hox54mbPXFdJhWjbBi5oFBszX7p8JdboCV7fWp",
  "key17": "4yw6xio2YY5X9YWyjfVp9abKKPvURA6egrW7iTrkPBDNj452VkxkKg1sYgwtC29ava71iaUGXYgxgi85ghoTr11f",
  "key18": "5cGXV6LqYkECYbEyXPkuwF9bPekTGTQgAfmLpxpwL4QjD5fHGDMm18E6NmnDpVAG6Bc6uXgf6ECzJJ5zWvd7re3A",
  "key19": "P1GeNTzUeo69YUoe75bTJj4CJZj9r1rXNj7bReDV3A4ra5sPvQmhaL3MsZ4BK79qWzxN1jTciL4Lrx6YqbEkj6M",
  "key20": "4NosP7G2NC6eUguaRjnwx66Ra3Qgsn28awdQFiLNK2R6H3aWtr7AgEpxG2Ge7SjWrafwZWtzevTwE51pWDXbMNq1",
  "key21": "47aMYaUfVEyuq7AqBD7QVGmZmnRrmhxYTDnz8iU1TGUuLGRHj2QSg5yqSvbYsF5kNmZcoy8gq3xHrQ3egEDmzmUa",
  "key22": "227wATkV4ccv7N7ZHaJhQdgk6bzWCKhXWyZcueFjfFw1UDAzvnAb6okyqRRuw245fEX7tKMFTmSp9sJHxYSx9Mdm",
  "key23": "3Uh7wikwya2XxNw759D4pqQ6DhuNzE1QjxfjBr8nBxowfEh52S4h3DjrJP1VzA5eqhegXxFuvrM2DE59yYKo5Yvv",
  "key24": "6Wqm6ZAqkwGQpMTaZ9koYD2ACwjcYFxdhfoe7nrVPFRGUaNy1vJSWs9pMaJ12Fe6Udf2cgYhzJV7Ak4r83Cyzbi",
  "key25": "5rSdZWxztVr46wjVmFp4cU5PutQAQGVshCcjRS66HFJPQ4p1hEijF5Brs9NnKx4k8WFUGYV9ciNvXSJwffHLb1AR",
  "key26": "5HhPXgZ1dLVzqikLB7XYjG2XZPXMhNGkx8QEA3kxK23PwbksECTK9bWBXEcQTj7L6MNJbgFQBRwWHViXd1XRnrDg",
  "key27": "43a1tBvAT4bDxCbeEvJoWtTRq32mcvJSa6bXe6DrzoD1T32sCzy9a1rvucj1NCQ7ZazsaPDfjAKY6GxCRkoUKCPM",
  "key28": "3TswbFJeCM5ZDweUUVJJCzFTpH8NKJ94SueWhDdxxf1eVGKxSYFhT8pFw26dx7ZSBfK5d9zJfPrXnuDKsEzhrLDo",
  "key29": "3b2dPknuANtY6Dp2rUHxzabQ7GYHRiRhhHibYW711gggz5pZn6DdUrf9D8LFmzg9qVpcj1hMRhDhqXWKyf1uVq3G",
  "key30": "2gWAcjfVSJJ9Evcu2wi3omzWJHeNgfrfsiBBuBuoGYYcA86C1yDrDQL3MgVLAew4N2fM8V9GcUcugQTYVMuMyKLT",
  "key31": "2vyzWiR9B4qhpTqFfwzQ6HXFkXY6QNorq2G3TjZYf6LEhJW7JbDDSCCQAteD1gVogkPhAKTY6kar4KxhDKd49L9E",
  "key32": "4xBxuU9nXmq8MPHrvpm2FNP1HX245fvo2QLqrCDepa71B83fEqdt4JmUVcoynrc26SKdcEEoLQ7n6TmqHhGdZkYG"
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
