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
    "2eaVkHxLEBBBKCEQYW9DAw8JrsE2de82vjs6Ztu9duqkF7wNoHYy91vB1eZMvkYSR7ys9s5EDuR1e5yBpnXt2KuP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GZ45qVinuwGZeuUWrpsdVxDSotC4z36uPMdZ7MyxiPCjGZV78KqcnEN86UKmd6v39zQnM8YXm1r3j3iMZP54fnM",
  "key1": "4UCQWRavcmykWaDov6dqU8KyNMjMgv8BhM4QZunu5gFC9fvafgGszqSckS3R1yFxhy5BqpU5koNRDe9sV2gTURwV",
  "key2": "61mUTD63CPKyjbhcyCbUgN5Nh3eUSzGsqSVmBE31rTVngh7CUj94LUVgZzmh6u6AdFtdazZniMnDeThs1mCSbABs",
  "key3": "2khAE3rtVBa3nTQKUTvyDNARMxbSV4cRxAozr6iN2fj7rH4CnPeesS3VPdmF9EiJ8odZJd1NWBtM2iCSyF1AmKdU",
  "key4": "3eNyKbswpSba1LciJ8CjCS9hUBw4TwQdcj3MoyH9UcyyrvVG1WejvfaVBDpYTpiXZCRGaMgh1nijuq9K39KQw6TQ",
  "key5": "3Vaqn3wKgrfgHPwvZkdtFfPwzptjqy79Nv2PY98D9RVMQbFpsjU6fuN7A135CSGqMR4z6LFqPBvA5FJfgmm15S1k",
  "key6": "5ggyEAyey7zRd7ummc6EHA9b6EV3FXu9Y2Pk2m7LjGy9j27vuRDfEDLigYjQujMQSidpAXYSS1sAZPbRoLv4rxj",
  "key7": "492L9iofVVffVLGzCsYYx8K9xXHwixG4FBRFGmea9famCVGR25hNUK7tcTm4jBHiMGG9tfayWw2787eZroLkPLYz",
  "key8": "3AjtZP9hKuCv61rQqYC7qVEmQwkhZmXNqPX3exd2XBVUChA9hpS8bBV7q9jBDe7wDTJQtnwzyMXfi86Ur73RQgFm",
  "key9": "2eDMkVKk1Zwo8McEPDrd7aZ8e66ZEfQRrTkMvBhc4YjrEXisC6KnfS1BT5ERzZS2uG4TVk4SsG87nb4tfubBgAHu",
  "key10": "4zpM4W3iBSW22AovK823nUCQY9oi4ZFk3QsAoDuCkYi3Up9zL1NorkHRyGYnVQ7XdTDDNm4TbEHEzsiA4BHBhku8",
  "key11": "o53pbSDpSU1ULkXhsDPRPkY2e86qLEJLJWnzn9ERWFNyaDxn4XRkYUJ1LKtXGg69akpwSYvL8KKmqExwV6gNMm1",
  "key12": "AhpELBjY7rT8mKA5C5DCHGaK2mV5Z6edAT5xbC99WupDWfEZFL2iCZcgVZksMceixAw4iSxesK7t2MN9XyPRz95",
  "key13": "2XPgG31vhdmQNEJFVR6XhU3Kq54j1UD2HMAh9zDGMrthvF8kfx2dYjTen5mb7MLsEbCVQ8em6njTvimZvJRTtq1x",
  "key14": "3qtoatDjVgeivdsyeYHkZg326T8mDpvs1rgwBckh7YsK7QatimwKXD9JqNyK9C4gqSk81n81K8rUHtUH4qvEXTPX",
  "key15": "4mvwFJdKBfnRMtEk7YN5mzZESNHfDHjo3eH9pTxgFHrYyoK8qyArxk8S7sHF6zcUTpPm3RrvtBKAGDKQcZWkaHEi",
  "key16": "EL6bmbfrZNXGy3Nf9ajZkF7GaoVE1Qjkqos37FfyzvJERY5i5FKbfPXQTfrj9m7uRMJ4nmAo7xyVXfpeFAZFFxS",
  "key17": "ak7z3nzrG3FRtjW8r2Y8QsFbeWJ6wSsCT9x5HkY19v8cQvj8CKT2rKVaS79WwyVvnRi8218845Cbgte1iNBfY59",
  "key18": "3HFZdWzJSXVfkX4EPYbPdWJy8TkZZZkCFs4sNh5zE2TZ3uNmf3SVdTXtvXuXkUeAmFR469o1HQesPtJ7JgUQ6kCF",
  "key19": "4ZKKBtWwyGqXiyjEnLb5LkN8kD7EF8RhCs5Nofuxwhe6WSJxcFzAMr8UN5cgrnrxZvnVCQVAUdWhV3ijQbj69omK",
  "key20": "41ytHVtKvdSGA54kyAcLaspjSWMooTTdpZGnBEK6dUndC8gm9tCwrbcXcQK34CiUdaoVeZM3DyST6gx4Tj4XDMgH",
  "key21": "3NGPaLdQDsmXP7EertdE1HBTB7v5s9KejpHSLZNkz2yYFjZ1GrnVTHMp55jrcrZibUU4NKKtp9Y1nfGipxJPdWPt",
  "key22": "3ef9jLjcTiFbLWqXRMhueMmkUFSRSWRnzaUaovByW7M2BMTUw5aug5DkQF8vmsCoHSTmoeeE1EsZj1yeBkhADpJb",
  "key23": "4R8aX8q2uEeC5nmP23Zxu5hGhrV4zMdMgB6v1P6cwYSdNp72kjHUimM2Fxvs8UK2x3ubpnYMGxgMNMkYC6j8Q5Gf",
  "key24": "YstnujPjzShxfsbjzzt5eCqW2edMCCMbz49rjeGx33sQTNrexTWBAEhBTtZECrBsRozzAwrKZDubzP892y1M3Cm",
  "key25": "4AmcKg1PqVdajvyGybsS3tr6JLSQtg5oUqzXzvgc82EPpiEKDaJuHmBRCHJNxJCMNgpbk7bJzW9d3qcFZZVeNk95",
  "key26": "p5dD4gL6hdPQvHvmHm1kWek9rxm7Pjytx62KhJwMU8sUBRGH8zRSi4hbX8ENKzGD4nvHfC7Gai97QGxYopGPKbE",
  "key27": "2ow6BWsgf3G1qyMJDF3pq59JLS3efEuEwejmkE7Q5zF9odVwG6cqnA6UE65drRfTGykYVAe7hHL94LQdzvgG7KcS"
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
