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
    "4Fi5onTFJPuWjh2F2rSzUvfa2ExTnXJT2oFro9avJTJ7GyyqrYZRABfN3jJ5jFZYv9vZjc4S4YW538SfK59ZpRbJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aHTUVH24HfNYyXHE3ALrrdaQQDeaTAgT1dZcbfSGV2EKaM74ssj5aps8ysjcc6nBiXh6UYvLitf2RuCoi6WP8Xi",
  "key1": "26oJZBU9pqb3sN9NkuUiks16MPk5LcMcbRbhUSxzvxuACUM1WUvjz8gqiG1Jd2STcoA1GxTcYDR43MhwAWnNWpS8",
  "key2": "36FSXJ1JAMoPUqaTg5gqX83jTtLKKzoLgzEku49C8p7Zkvp8Md16sZNNSKTANMxYVHuS398jyyMHKCniKsxVE6fc",
  "key3": "49Y613JK7VpMCchqkJAPtB511qmeHhNSRH3TmRPYwWeJ2Egjqn91HiYKLyRuTUrtVae4j9HDU2Aco4bgd4fbBGw2",
  "key4": "4i3grX5kp2Fbc3QuWQ2EfyxnxWDsHL6Zkrfj4CTys4tfP1tiXA2bf2QhgTgkBYdBuTLLQTcFdnZ1TfzyK94C5fQj",
  "key5": "HxBKR95WeYr7M2Wb6sn76owc6nU2NAVNKRjKTmDmGhnzkSdLPJPGtn5b4sSkFj9hozwPWG2Wn1mUuicz1Sw4pdD",
  "key6": "2hHtiBnp7VpmUBvXZD92RgYggKcxW4kHPM3twzk5BLKcyEn41E7JRE6hbpta7JaKApcQpp128psqhPt6mcuRamBB",
  "key7": "3HQhks4qTHNsLa8KVpG55R2parR8Vto8RjLqzUNJTNyUPEDzFWAPpKSnhF9sBmyieJjbSMeJckZSFywYkD4BCo98",
  "key8": "2ZobPeLZHuqP4LZDcQzczzisFLpEiUXfbC1Z8Pq7BWQevvKKXdbNii4EBRrppSQTydwbDtuKWxfS95xeS3kh7vUT",
  "key9": "4fP8NxzKV42XnuNUCihdL4NPFDmcP7D5kuzNK1xRAobxM4tCTXLRbN2RW1EnT9wtyJRMS4zd1NQLd78Y7iGbrBMh",
  "key10": "4vyUNexBbeAko4wv7TUtNLXSUujrwcFbg4A5W5qULJuyvU7ZEk5GbhZRaf62oXr7rGdtirLjU5YnRA2GCufMFk7y",
  "key11": "2RXNrcYGXYjDaSarQmQzxS794n5c2RwsnaM4WG2pdsRuYzv7xCszhFy49BnTJi3zrTehqkGvSSP9GVtXp6Sqgzcp",
  "key12": "2wPDo9RsNfkmNWZ721ESsTdWSnUMWXGUjwHJyteabcCm9JYMq8WA7TEuc75ACVHeeVjBrNN4c3mfY1QSPtyTSEK7",
  "key13": "566bugMMjUKotveUj7JnHJq3ytcQsfFqwtcETW64e43tteNpw5YEJv47pDGYiZzCYXHCLWyYM12moFESRmk9zLoj",
  "key14": "3Vm1oeNksrRDsmdixmim8XCNvMMWLgfEZ9X4aB2ekmSpEuyxnCR1C2wyWfZL23TRJUB1CEvUhbFctCMmNfGRQSne",
  "key15": "gxSMPeuZzw3yx5qMvtct3aQeKpfSaeWhhpkAA8jyY3fWkSSxqyXBYUbF9U2biCL8Vs9xf7jA97rLTJdMRZ5YfjA",
  "key16": "2qWbxutcZVqfG7uoYbH6XGTq5VWWVDd8EATanGgLPbJBX88LhJgNbVLWau6cCoWPKthw57sqdzyXEy9RNoH9U8J4",
  "key17": "2qtReQ3npcqZinteVCvoV1DyqcPDFx6H6H9QPDQHSopxh5RAzs7uDUB6dJwhvtUJjEG7DJgUMr3qknWBZZy3oir8",
  "key18": "2FHWze535pGDCJsXfBfW7Apwsm1dXa8xYbqXfujpYbsuG1oiR6CXywgAzupoJzypunbLAEoqABTfFfqiGXGUrYb1",
  "key19": "2JzGPBNRxRphXsxMfW2jugfXEzgHsuinxniNfA9PpXhx5GkWMNULJVBmUeuDLw1a9gtJ1LHjrmPPYKBuGATaKgVm",
  "key20": "TjU6MCtWLA8YJsh6f8eMGqsRXUniDdeeW8RZrThFdqM7YzP3dium18ZYe55HHT9ge26csXrWPdvZxQ5A3n5DDFS",
  "key21": "2i2vE7p9WqrN9piaGop4XDLFnHSAAZFqK6seoGui5AcUhykqECWkT5FjDwixMsMSfJC7UtC5r2ADWiYnVjyQNkDi",
  "key22": "2VJ8WNxcUbdvpSPfb6SEqTWiUocsArHwtuLgDttHuoFd8MFGnjMeEXGXzMde39CpkVfbi1pBnjjA6S8GsL9RosmV",
  "key23": "VjdiPLSs3Heg8MkwJLbjJvkPXkyC4dmZojD3hPvUbhtHTEWVRFvSxPYFVAxFjA486qFeEcUstw6prQaSayMPpzu",
  "key24": "Yx5gp4tGd3AhzqzVGLAr6FbNmvay1qpfjuW7q7Wd53vmwfiQM2F2N9GwrzQQ9mZXw3XHW688Cy7yUMb9zrD3G6j",
  "key25": "Sv56V7YtA9UheW3sJfq11KQVtLYfPxishSxXJfqfy4SjWt3Jw3HLvJ57diaNBQeG6RJ4uWFUms8QWYDmpXe1cE9",
  "key26": "3VkHhP1qhb3sABYHp3wCLbyeBWyjyEpxZonenn8bPmXmfuzzTNqEDC5ChB6ekmnKzqNrnYd9BiXwSwtEs9VZCsVM",
  "key27": "3QBb6SzhrBPmEk8yNw6tKhxhBFHAANngXR2o1TmRptbv1BmzyRYJxQNQSrNCfvPFnJyJTTHVjXkByjt2NGgGJqEn",
  "key28": "4kRFNnu1hoXxy5hRoaHUcgeZQjGFeW2MGcj8zTgruSLXHsNNPTpZX7kF1Uq3mpUuD9RMHb8JTie6ku6KH1PS8q79",
  "key29": "56D5yTxVHXu5jTa2T1rpD8K5xXBxyoMzicVVqnnEDEdzJ3uskja3MwCcuFQrtFSq846CWNCM7e6ZzwqjoJEw8SB3",
  "key30": "o2JSX88gWwe2f5SAmd5CVaxwR7toHe11JiBGsvzbrP1HZubYFZDrYvHfj95REXUqzeXPEjTBDrxvpRfcKu7AGMi",
  "key31": "5mSoYz1N26B8CefSXrrzLkCiHVR7tQZyrNUf4oRPJWJjTnnxAQ2zKPAJTtTwrMcnwyzSnkhHGTtjHndBBMbchKpU",
  "key32": "4B1dBZNueCPnK67d6BTAmWVycgEQakxBxH9q97B4FrfkVRj6RH4Qh4N5JpDmn5ABtGNAfwJMz4zyAZRoNCs7vjho",
  "key33": "5KwNJ5oR5RbkbZkZc7Usx1tCtm8AAkG2vxgsugVaK9DMfYTYq31r9ruYMPmJ8o9vXS5if2wtCM3AwhWyyFBCBWNE",
  "key34": "4aopurma4ZuDiA8GxxkxDUC2yxGzxd8frkKaXb2siXo28qFheb5ssQRuWapBPFx4C3bFKPudYZVSS5vMjK7xo2Ku",
  "key35": "3ySAsMJLp7ZnN3Q1dwsWgusnKBR2Z3YwNp2kCWvpk566qjAzhwm9bQKAsYjwYhJyG3oXEhnBNa1CTeXMW3bPhHRu",
  "key36": "6PXmqdj8ExrZLDGwdGdqaCfDdBnWuBEckNbzqGLvMBMQEPXpwJZbvNuRjdEtZ9Ne7H66usNNPXcKnQdy7L3AVeK",
  "key37": "Fj53dX4JjXKpAuVCiFZgDrGXvuQUVZ44udqXGj3hbATJg51WKe7m4ByoFnoaUDz7prabeS2Kity3atVrUdnjRAC",
  "key38": "2vjQFJCsSRHmJEhQiWvT2RZKoVz7BwB4J45THHQq8zTY5Cuz1a2AnYymUbugG89xTd4VmoskJRsz9vjzYNTEKm1j",
  "key39": "tPkftwu6GjTsQ41Nq55BUB7kvjnobRo6RkuBkuZzRZAbj5o4mnTXgwyLjc4PjcdvDYYi6saWs3weSMMyaKUZGJt",
  "key40": "2nQkgo7D5BNL2yizc8S5dGEQ4auAmAGgiMj5fCRuEWxCsg6h4LdKM95CceXtLBEks1Lo9ffL4A52wAydGsNfEFWN",
  "key41": "3aH5J6iLnpVcqAGYxomm88akjhJB66WPh3vD7YQkY9ozaowKahZcStGjxMr2TjVU9PLtHyovfscGfWCKEG96Qw2o",
  "key42": "3dqZMDreyPBGgxuuZqNKWo5B2zYweoPAYE3WeEqhGe8HZWhv4m6WRvXpnLeiiRKLN5hMDcsXw5TncUagBfaNEReW"
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
