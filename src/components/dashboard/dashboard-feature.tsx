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
    "5iWkaQdsKrxqUhwNH8x2mZP31dAggQYF4EkyXULCwspVWfmYV3sDDC1zrANS3AW12NXZ5sHNMtq8pVBH9mbWaAXk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Du2qrJAY2JuRLcAs6os1avYwZwzotDir84y6XiJ8sdxqxh38nKsahfiC5u24zrDpKAADyXTrGeHdpmhPdaDS55S",
  "key1": "5xx8F4rw5cL4aupBmmCjZwwRifvnMAMTK3zFNrFbDXKbom8UGdhJ5wZkuyAofd7qUM1unpHsdsEzEd6NzFgshW2J",
  "key2": "2yzECQKTtMf39L7CrdoHTpkgsGQiAnPohAkZRX1coppXRv7TQ7vfbjbMPV3pBA2EVjmEbrSR3PbNDXD7vfrpgFv5",
  "key3": "5sjW25Z5G1FEnKDwv4PUewi7T2FVRJDhdfUPHCDQymVETa8HXN1T2N4jsqsim6fy8LiDixz3oeCSxtj4pQLUDSU8",
  "key4": "4CHWVnNhN18dY4Z9ErYLCToJXVzqvCU8M6Ldrb1NYD7AWjZC3z7mMEKXQiqkxWddvAPM8wJR4opDZs8KaxGnj3uz",
  "key5": "EosTjBHRcQA91xPsWfauYqwzn9wegcdC8S34ekCtJQY9br9VhaadFvFupnumG4i8G3SWp9nEWrL9zXrjwRNDMCG",
  "key6": "2jPVGjXQGroutHqAVGKgbaarNGhizvTzyAdRwXKXei3VCfgfsuZqmq24Eb9cyapRrrcBVxYHmVqw8fFMw4Tapj7r",
  "key7": "4BfAts8BfRCHNuf7rfGCGVFi6vwGWyF8XxFSZz9YvfunwWsSCDNxD7GUuzsBuPF72awZnrSA4VtLywoJ8v4qmSWT",
  "key8": "2Evu8v6PdbvMhXV1rF1nBeh4yJt6DPpfbHB6B7bqiw7zoGtSLqN8eNgAonEvCzbG8Xqd1KjRq3K6uhRgipKigKpS",
  "key9": "2UHEmufUeVFVF4aSa4PU145aavL6HQeYq4d352TKxNyEg72huYq8hVYpDaNEywmJMnYPkfFvoAVLzczv5qKbVmYe",
  "key10": "3U2RDRmjkuCJRkPwmpgvbFYBodcSAcuCStCMz6HcZrvsJRvqRk9Le6PHxEmsszuAvZgfjvCYbPQQQzENJppzP6VY",
  "key11": "5uHoY9LKoaJxuftHhgWFuyjWamax6ru35ppfzfpqefPsiRd8iamxRppLgeM3woVodUc6MD3MvrGj6UQbY24XDuve",
  "key12": "4NrQ54apprN78B1YZcGadig2PbfoB1ni9otVxruajefR13m8cmL3xA1K2Ahn6eGRyq4gRNDSrrMhR7hp9d1mtLAc",
  "key13": "34nQXZ3yjSmfjdVN2HJBxApfHedq7sxXxXofRcUidiQvoNuPYgcytbZHheohdqppmLz7NKyVhfUhCqv3byMzLp58",
  "key14": "312YETET13FPdGhwLE993fNYoJWcD9fS3hPDvXuE35hMeue4ZhFwLkanFfoDRVgBxiuuaT2JftADWCJUEWXQdqNJ",
  "key15": "5PY6bUTwhmJafj3hjb6c8KnMDPm78r72tVPoGfizmto1Xu7LAXwuQNsLdcFiaCfG2E1Log7GjkSzDphVSgSprBdY",
  "key16": "4gb1iscLivdwokcASJDMYYMUSYVn1BtfNucaa7jS9kJWGmcuXgpZ3XpK489a4PPYutMZLip5q7d2NpNEoawe88UG",
  "key17": "2rtzwtUgHWmsoBkpQjZcrXimvQvLJjF6RewGfF88oNWcTvV3hnM15yqTneukPZxM2HW1MZpJHQ13FyzmqhEPEtM3",
  "key18": "4nQpToC3CMpzjNQqfathV5862jnUyEeph8CVq5fJY4zQ6vf5JRoi91aYjX47TcTV9JTe1T3KKjHbebY9BwVbEaX5",
  "key19": "389MyXE6FaTzZSsjCdenvaLF9av5iLW5gvVoJfYHajJATJHbGsxK5jbgYqUDWMH6yoyTdwYfuHwH5ZfSTeTtqXGn",
  "key20": "85szwkV5eZ5do9bHRB5Vwxx9p4n5YSgZU5kFqcWJmJt7nR7dffVr1VL1AwxLVQEtqtCXfpaMHjBAcNrr1Dhj3Ht",
  "key21": "VibuHeMemzBcDe719p5cSekqLfo2RdjaT8jPtXdotWiAB8tRN7NBnGK5WVQcyrxUKPBetdaJ3ecqHgNftfjxaby",
  "key22": "5JRmLuurHxtKr7X6dddnAsB83Fr5YKgC9QXK7cDnv7EJ8RcJMywJqtYJYhqyRH96kzeyxYGtPdrEgovJLUVys91g",
  "key23": "5HT9yynHpLsv5NkhNXG5rQSpNsEKJr8crfZTYL5vkLKhZuoG3n9pjqFoN1Du12XBMPyB4qwQoUkNPocYoFC167Sk",
  "key24": "2btyzpJaXbws78oyzGjcUrs2vQbaJfVwRBBza9WDxE2jLtANxF1A9FSmnfYatNZH8atnnAuvGwtbo2CaAX6fofZt",
  "key25": "5nykeg5sbL1NmdHGuhkjcXLgPt5h8Edic1AuQQkSqysqWVGut2kpUKtQFJU7rE5mj4wqBxjUSjHyVFfHQ5HvX8Dp",
  "key26": "UEnE2pdmAb3u8DEhpw3LXvP3f5buPPjqXLjzSndcBdX6aDjwDY76VpBZLKsRfd4MNeSeSb35Jr8KZqXwUzUBMM7",
  "key27": "27uLyAGVm9rPqKcK2mq2u1566A6NUMCx9g9T834n8oJcjSCpmd4Vp8DD2vaRyJR44vQ71NitgW8FiYSNz7mmphJY",
  "key28": "2dZJ7YfarUjwat6hqMUugkwzyd6P5YjYKXqHrxj3P2gjayKMuMYRpDQAumEjtGGqEzWH5tdBSSRFLUWfELL7L9eM",
  "key29": "2iuCGvsYMY17hCLNoL7W1zbMCrXD27sGZ8kTRK8winT9MbyuJ81p6d3uCxAC5gvEoGqa77D6x5iQpepKniQPChXq",
  "key30": "5dHYaEJAv3SwuDXCdzLkgs57Nm4bGqjNsDCUkaDdeNRNcN5xAwq1pbNZkaKuNzvSf8K95rewnuGMUJXzeejBdNDq"
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
