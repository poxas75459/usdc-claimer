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
    "2vRp9ye96LUqtnxcQxMPCmD1tLwyg7rQNZNDPnoKw3zFFkPjafJw1ATDxt6MsvmfxzLTnJYDbxTs8im7C8fKzUtB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UNTfMKj3TRcwK6Sm54pjq2EnRVAyb7fNaepfxBi9tVxCJf9HxHF9233qhrcaJZCSsXp17QDjAukVb28x5XHJGGo",
  "key1": "XqimbGy2LSgMKRiZG1Yxko89q4pVVBKhZ5ByW6wATaKGbskGQs3yUFmNMuBkm4EngVUfz3LGM3ZYwZ4fFTZZrWx",
  "key2": "2dKRvK9NyzMJmqxyYxPgsu2RUTmNSu6geEPdAd7AwjCQnZeFygybGLzi2YkSbwgJZV5CMCV9NBp87JGyKndgLiTz",
  "key3": "kyyhUj5aUsj6LZ1UQ7Sw1JZ2JX3s2GL2fb9zWHgJ3VtajCxqxwhwbcch8zMckfHybDzDEFonjG2QnLencH5BK5u",
  "key4": "23ApkcLqTfr1SrrKAKPm8JrxKYprWVfGxLS1YL4uJuaC65hUaRR3amYDjZXWHwY7TpeMwmNJ1T27LLkzzb6JPMGV",
  "key5": "1SpxjALiWhPXgkYesEeiBhUfk6D8Pr8W8k74S61ycE66kfHKU3RCFCua2QLYdATk5DHhA3YRULBoA4UxW8wLvbx",
  "key6": "3o9tMqkyKVKBJ3zR1qqRhYYSpWQYAEXC4CgZHozpe8RJSUYWGUFJkD9521z4BMMJyr9kXTMy2MfB75ZFhycJ9Unh",
  "key7": "5G3PgoWZYuvFXHx813UZ9UDo2itrtvRjyMjZjMafS48ouFh4t4mnGwUZeE1MhkL6nHnpNun2VHEF6C6xpRSSUneP",
  "key8": "4v2uD5kiwZpcbB81kmcgdbtL78Enu9L7Z5StFKkGpi6VvreMLdQmyaNr71AyDgBsENBGsHBQ4kSevXrNeN8vj3Ks",
  "key9": "5Xw7qoDt8GiGVeC6MyZHBKBgDMVPbG9p32GcTk4fhj65updVRsgkdd4eHieT8NU9aijnUCRp7HpqygTe16m6yc9M",
  "key10": "2GGogqo1HQsYUNnNFA5aHpPUbUifSktSvVpny1CRAy38qXpkuyRxfHTkyQ5ZNnzGTBDfYPwJKGN2ujUHZ6ixsnKM",
  "key11": "2QTfxXJirmUtAtGEmLfXpbAYynmgm33uGF1psLCFRrKWAwQsVzoDtKWnt9h3XcBmVCFq1Z8FFZJk9d1KKmnwUb2e",
  "key12": "2r9JSKLZocSR423Gw3GS4beQ3JYDnxPzeDyBcKjro5c6AZfkgyLuzztyB7qDYojEHUCUAYL7U2CjWnE9YMQHRuhi",
  "key13": "3vBe19Fb7sNoL2hxTnjM1TKBcc8HtAxeLtHpCzRt5CMnMPHViRPnffYj2CBrqPGm4vb4gV3xzd9yTmctnaHJxfuS",
  "key14": "2Gg4jLji1zQdiGBLVXUzK4HHrQCuWuzbV8eEggSzT5FHFdaNQ65t2YrvBB2MPo2g7b1D6VeVw8Lb3nuzvhzihvs7",
  "key15": "4j6eh7JjvgWVQwZdg6CLJrSBFaQNiYof5hDixcP5d95bzK9zZP3xzkJTwyUNwRoaK92ooLtYSxB8oJmi342Ms4CA",
  "key16": "b9HKxtKDAzkJhVwjPVQEGuxZsiBAAa4AxykMWw8BUFy7ZeSbZh1qefFP4tnEXb7HRLze1TLbwKHsznTWgtx17Pw",
  "key17": "2SNk1HYufzFuigLr8wVzX6yNm9yf7yZkjuBshWjUMNjMs236HUX1kLBBatbZWxppfBcCsoWe5CcUfs2jziMt6kf7",
  "key18": "3MLsWFSQv6jD9gCh8ajs2gNJTVodkQn9RDB1JApdS4EYWJtnJvxNfZZbCZ425CXh85K3JQarTU6uERuLK43UDMkG",
  "key19": "46bbkdfqjYcX73sPRGkFGiiSF8CmAeCxcyPZ4rrka6m4A79hx6bjciC3bZTp5SztH7rgL5FGC1N6w1oZ3qdoCZN8",
  "key20": "5MmxfYmRHNJyW23maNMKpA9FmD18CGJoRZu2LXvh3EBqa8JxKNkzjJ2DeFEHTMSpK3ctDDn1EotBHVgMpGyyg2GQ",
  "key21": "2ZrELAAorDstbEfGkYatzuoPwc8ZHodvsyLaPfzpsd5Hb34rN7eHjMW6xbroYhPosAswmitE1GJsosSSbN9kxYX3",
  "key22": "64GKkfotgQQKNvSV6TAMyuT73JYmdSEJw9M9XeNzg4vfoDbpPGmEBKSZ5Y3ta6mYPkkar4eyZGwcPx1UKEvj9oBB",
  "key23": "2U1N6k3qZTng7BhZ8V2vSHNb3vKhrf5gsq28KuZnPN38NJLy5vyBGg6nqHyvwtxGTomgNdsM4qpwDPuBviiik7mq",
  "key24": "3C8DqZDFgqDr3LsE1GiFGWif9EniYTWYkkZfqe5c6seUpDAzbyXF3K9pWPLJ4QXbd1vg7JGv3Uw36yDMPKcvVGEV",
  "key25": "3UnWffv7wz9niUhyCPAomMnfaxwBCDqvFDdAMuf7e7Y8SesJWArQZS6in5XZ37D7aVkD5834QzYAe6VRQwwyhPQX",
  "key26": "2moMEYRMJSKymf9GHV18te15M55qp546G4ni3ft5exnr3isWE7UirYcfRX6jXZNN6ExmhMu2ZDn8yWVGwXdE95b1",
  "key27": "28TxMFkCi4ZkHjNNaTYrcDtCXWKMrss3NMjDYmdnyDh8WYUX1BuM9C5mAPsEoBqh88vvVdmoABrZdsdfDhwSsZNf"
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
