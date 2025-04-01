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
    "9xRWkyeiFQ6NL9HZniETiDxfw4X8Ce6W7Tq6acdmmMhzpfTvcnmKqfvddz9HPm49X9T7zjxiqpQC94sBnwePhrz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5m6QPWhB2HygrLzvHvK1X8cjwHwRViML9F1mdwsGtqy91FvdpexEERcyW97u5eju6vVzM8GkmF6BZrec9zYR6G6N",
  "key1": "4QWAU8xW2WVjEFbAinh6aA7raMbn2ivCwasQtHmRixvib7P7QX6jpwjnnbH66EP5kTanXsYdZgZ7r94qBxNJNMQP",
  "key2": "4hBd3qorRkgGV34qZj7yFDDaHjenDaifK7PRc97NdPXBpe5XUqrR6oCopSrDHka1tqtPQZigDT1YFBHLHTudeapw",
  "key3": "rFw3hf5iJyquX9b5571LJvAGV6zCBBrn3ZtQbPbU3ZEEjweAKStPxfB9q5Nyr1FF79QS19Zc1S5tKXWHd8jdF44",
  "key4": "5tkAf6uWgPkNPZ8x8mQ97TYfn4X8qCoJxpde5UwZsNeCAYxvF7Kuc5M8ydJWnVLnNf3zWPcKMyybckZbBUjkDmUe",
  "key5": "5no76bvX8wdwK9UGeK7LWW2nTLT2GPVedKcRvAwqDLk9jbP4sdGhKjyUtMoBEsGvKdtj6t9ZsA75xqSgHuve3QfX",
  "key6": "5UKEqRfYUJs9pvF1dZ1577i5LQJeeVXLqtrx5ZEUZmjg34JVeiQTXFZ5v5GjswXR3gAgYwjWhD9Bew1JTGyNYp2y",
  "key7": "2TPCf9ZCyPt39vXsmBkCgoWi2Hsd7w1KuKgoT7HvHJ8PC2t2FJ6rqXramxHnaepKg194YfKZQbgyVBCMyo2c3WiC",
  "key8": "23Pax5ncCRPmETeVAYrJsWs3fybFse5Ngr8jLQvJpfMfgptJ7Ebq1bqCaEjUzbgGy1wpufaswF4NKVGfGKkSeAxu",
  "key9": "5CgJsz2FeHrSToZ1RUrtJTuBEX2d3u63TYyMjBo7i3Rev3VCXwpZzjz4P3YGAjZsbibdEPyAudKyA9CMr2UQXq6w",
  "key10": "2nKJ2y5LwabHArvhxQFK55dcwbZmcNMhFypTXPVnRFLiMWKQvTtE7cT47iFgCZycKL6buJRyLpPYj3yo9XLCc22d",
  "key11": "4LcUx5QECvQ33t63VgCj1eFJUExtkF83dRHJof9F1s4LEr73cHpN6mbEc9GTvsATB6QEXadNXXoVEjH3oMcUPefY",
  "key12": "4FHUPsdbYFaHRQe2Z7Jebh8Juw4BjQ9v6ZqBrpPvbAtaRRv4SQupPpExW3UvDtMiPiBTwAjDPGsfvvLRwQW6PL3p",
  "key13": "ub8FfQzfhRtVnmTV7sakvAUQm2Yyfw8LkBEqwg3ToUdCQiCFgwurEFdPWAEwxpq8nSVUc8JMS8Fbqf65XnyxiyG",
  "key14": "2WrBVPj5h6R6E8q7eEpQpXTDGRYdEU27UNTVCEPPWbW8y6DYrrRWXKKjFzhfdZiz4vWF1PvdtFftb9yZ7jLWPd9E",
  "key15": "58H3hRA6dRVKR6h8T1NoDcRY3ckUasXpykXVcE8R3j1XeFwp6kjZzDn5UzqYuJiYTEZ7taHyxWTmKWzhf93MQTpN",
  "key16": "gvPB7SJ6m8kXH8pvgYjrVLuDsRn7XJVah2qiHaECcZoZLzc2SZ5CjLD9HfV9VdYXmyht633cT5Z14UjgAJQY93x",
  "key17": "4BHXA58TMPDT5HCkRHmGi1vFdjWFnwAfYmK5H5Awmav8xZT3gJSkgGX4SG3TUJahiu6YrT6EQDXSm5umZ9hANToP",
  "key18": "5QmavhyDv1HLtzbxPH1WzjWoJcHXfyV3aHJtfuquvS5E685A4radrKjJ3KPDAgPpRrHQNaJhkYVdELwpw2VYWui6",
  "key19": "5PBRrn19q71LAarvkWKi2qsZESVjLYNos3rTjRr8KaUMhdSdPBgJPVvbRhC2BbVLFdpF1WfKwxtcUz4EX8zB87eN",
  "key20": "48KV9K25yqXDe4GLkcgBax98ky4RGwk8J6xkq9LaRj9LDX8RJ6GgbHVuDqkSaHMx82GJEDmD3ZjTwKpmBqekPL6Y",
  "key21": "4DmdFpXgKb4FrSSPcDVv5niUvRyc2HwNddfUFuKnqciWVeEskRfpdxKoz1K7B63BfmWeeKd3UJVkFUXfKNSrQaap",
  "key22": "4wxyPBtTKNsR8vJ8Xm4rt97rJB9SjAseBtUX4nv8Ff478uJUQBi4nqUKSX7XQVuLoohEu69eJHpf8UaVZh3eXkQp",
  "key23": "vuvrWZzBko74hmWXemigNF9gZTwLWRubNp5o2sdwck3hH8kcyLGeW93eeZmMvW1s3gPQj2AKy8dZwb4NZv7P7gq",
  "key24": "4evUpJHrrSzU1EsgUaifHNnA2yZqSkvdw4ryaQV3Ek1T292VZGXRoh5KXZwHdGRKksC6gL9fKV7R84LK6gbmDkJo",
  "key25": "5YRkLuFaRVsprJjaWckgu8a3PP8v3inzjhQDa71ftmig3KGmk2iakgpzZd6dXwQtL4p7iQE39iiqgMVaQBLVZg68",
  "key26": "4jQrSnyaVLiWkJ2QonPGVsMr8Y9LmCm9tSsRWkYT9UYebjh7uZcDrYVjm8hJ8NMBKg1xPvV2WP9QuxRcgLq6SAkQ",
  "key27": "5mYETjL3QNovrgWqYc4S73QAvS7N4GV1mwnSy3v2Lbsriw6jERvPXMaRJGkTtG2qiYihP5PnDV9wgEerZT9YVQ5L",
  "key28": "5kxpotkUaNShjcDw3xBuwNw3HLgJ99qxmGmqtMRn2NArMLEodCzvMcT8DuLe2rYRAZcmuoM2c6RijsfSiSksynPC",
  "key29": "3McyJTEEc5ZvVdy8XfEPa4Rf16cY4YaX4h2BnZFZyZBRRkXjgUpC8e5Mattu9C9DwxrzD1qP8aw4Tox2PndBGrsW"
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
