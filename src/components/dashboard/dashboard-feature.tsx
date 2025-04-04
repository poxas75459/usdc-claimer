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
    "5C3CARopWiLF4D9X66fL8A6EUAukdB6z69zgfUGDusekSaer1wMaUym7BD1zsqstYRJvRc6JdPHRWFP8yX3z3F5a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Bd6BTH7rSE6ALRYRrKGnXR4HihNWwB7TAs2BEiPtHhpS5c2rmZT6G2xU9Q2UH5SRZg7eAHjtUJKvTo5EeHZdn3y",
  "key1": "3ZvmK2xvLQ1NZUhrSGKwEoEBu56AKChy3a1Uaw5JWJr596bSMF3zKVGCoYEuSuB1wfyN6DrUHGyXH3jXmw2rRmDD",
  "key2": "5KFNw6Vo59GRFfFpzsBg3ccc45vWCU8Q534gBejVxfDk8hHxUYn5ZnLtbBqcj4FZ7aAESSj8ef5AB2Kqzfjio9PS",
  "key3": "cPUeHCLFkQfLXkSiu1zLH1kWRAXkX4U6RXsBDBsaEjcAr8ghtfqZZzjtoQhdgrYfdnVxYWANuYGvbTHWVfcqErf",
  "key4": "3hng1CHbc6cE4ofhLUCmRdmwx6wVN26acJY1VHwWP4yMY4GyqjgRM7qLbDSJQbuWJcSXuY3GKXmYzxyH5knm5EcB",
  "key5": "3idDBxdVr452hkP53Mo7gfQGYsVEBoTfa4t1d96VkCx15Yt6qbsDAjvZ6XoparKWJJExGeKxJ8LVL39RtEkKFPxV",
  "key6": "5Mj7anxGgUoQdG3VsWa5WxCYQUzRoHjmjNY5tVkCLmVEtjWPXf13radeo4qfwwCmru2N1wdBYvchdhv1LrLcQhQN",
  "key7": "3tetdDxJ1gZsSdoGkLqYDBJtgWyheou8EXZYZ9ifBrvBnWBnRR7ntRhZp6ubEQ6bSdGr8Qu94pEJKyDHfdB13tWF",
  "key8": "zSBXhND1V84g3t6FEFKGN3nNv6RL9kBN21WLdv914wVPjTQ8EvQPJoxv8Mf2TEVpzTMRVsbrt7JWW45aSx6Qd4N",
  "key9": "3iWNSaF4RTTSHH5zJFEzNZEYuWBUVQQD4vHHCt3SiinY86Wh2CPRck8wQGyXoa46t4TpvozzuVuuCehiFEamAb81",
  "key10": "4nAgmnVAfHWgEHJfbBGtSe5zVCUjy5ZVN4mXr1VQrbnLc6AjzABBHXajrqNqSnDvFvBWoBcnnyCVjnGs3o8Edpr7",
  "key11": "5rJTjE5NENDs3B6Rq71sqKs4WUzywioJHXVL7ZgK8rJn14n1veYMgwXLsSEdWbVQssx23TGRHRNLMAW8g9qDSLiF",
  "key12": "5e7vP3BN6otxWFai1dFYy9ofNQLnbUMcEjForhd6xLNEdG2Cb9vdabpfu9GKw3A3kicLjvibY6TThL2qpvvPTKh6",
  "key13": "oGybvXwA2nUe8tukRJKXx4fLjfFYBuPfh1kKNneBXuUzWiAMkiUHTJV1RcbpzexrJxWQkLdqiPeXSc1aSWmtjdz",
  "key14": "49vZXWQah68GRa3ZqpJCM4psB5oMtjaPF5pDzQV4RidSNfgduag6mN3fem9sGFudm6pVS67bZH2Rvjm8nXRjqT3L",
  "key15": "4y5vv9WvYwriKHr3UiNyeGKpVE45MXRWxUrWzoM49jMEq6Q9AHXhNpcywgXCV5J1o6Yzju4RaUXg4vAQD4Dgu1FQ",
  "key16": "4jWuxikoCpu8qa8NyhD88MGDFiFH4ufo43A2zjFdfFnZqmmRyTpPqY8mwobaDtR52FWZgFxWomKnrTS3UHPrpSa4",
  "key17": "5N11FUfCVHQ4F3owQ861v94DUaCunPQ42Bznsze2HE7TTx3FTEPh2ocKpvjDmfVrbk8EkmBu4ESnak8KZoVZvAN2",
  "key18": "2z34p4mK6yLqJDMYbgszf1EkNVCAabmEStGkEu2uXtQhUAqYQsgxq8YsdoWmiB79zkwe4WqcVpAKWFyFN2oxKd5P",
  "key19": "3a9tzD48Ha6vVtWgqz9tMzZGbzbq5AjxMFgvjAvBsSE5KwvZ5ewZDf1kUhDXNXdWdeAWEtcgfEhkhRgGTDWDdME3",
  "key20": "4bhP8UDKYF8SJwbFrTi5e2oTnhd7MD4v1nSkuBpXR5Em7rEGv4UKbyrQiFNxavhmG8L63A2CemSWfLE3oLtW6Yix",
  "key21": "2Ve4vzYeTZWCQCXr4oeqG7dttUfyGARQC14fgG4wMmD7HP5GpLZ643RTATfAsriSonMjVYFfDKH9ALW2DaJdDw6E",
  "key22": "46EhdKxtRjoYYYeHcoQsSmHApdKBmkCJkhDEmX9RcL7Uuc2RnXc4VHVsaDR8dngoxdDL6Ug5Wmo6vEkDK6SL4xnT",
  "key23": "34a4XNJg1LMb3uqz3ExxpVkx7Jjhdi6krKy1FhZr5DNwiWwKE23UFUQ1koHkaFzfKAZvqUMuN3kJ9gzWQHrwKSp5",
  "key24": "2xmiX8UhAfiQZZnymQXpgfAdBp5hr9vgNziTrsuYe2ifMeodX7YUTKtmU9TgQmxcHWSDUakukRFHgSZCRPW34wGd",
  "key25": "57J7XnHwwa1EmTKP27sigWWyphWtpkK8eoFMjSBBUNgmFpLMG3UhXR5dw4CQt62QauPsWdAYUjXx8KH7iQUSmNiC",
  "key26": "3aryyqZVhyhWVnThAX8fXbySV9skXKzCTPYeqxugoXDNLE5ehS4H2hAk8cyCBjDnnHKYYzH3MGJy4junyaKG6Q4B",
  "key27": "QWbXhKCwjdKfmXtWti7jsJqaDgAZ6JWYWPkN4Dzj5TQYTJeU91cGYsY76WUyhRGWP8xLVT8BQNq3ugdD4Cpg8Zz",
  "key28": "4MKAn9C4YjctQCeXCY4v3bVEdKvPS2HqW2ahCb84PVExLAZfFMHvt1jjjua8oMsuQeCsHnWuEnYoHZrCPfdjrcxx",
  "key29": "2oA9MmLkLxnLZwnZ84ue1XM8F7N7fJGe4LG5zPq74bqbHa7xFKB5SdYesHFg1afmGFUo8F9U5Qd4Nr5yWSc7oVGc",
  "key30": "3eqMu8xbwNEyW7NjJNKXmt7Cv66eiWNLexz7zujtMCc55F2snPgd4W6MRzS8Wrfo73AhE1V4cq8z2cEQ4ADDge5N",
  "key31": "3uh5PY5shzfk6TV1dy2rPDDRDq1E2MEQ8hMoCKPHwiSFoEzyNNRoao3pzkzeT1C3cpnafDzp7He8cLKjU8KYhcix",
  "key32": "4rYrVRZUTbK3AjwyVnNJfB3ftN8Ljo4pfsB3HHstsv2HapET6qoSDqNWRYt4WkZ2cLpQnkmp37ntXpvKwsNzLzNC",
  "key33": "4wwx1BefhsDobZC1diRyM5JMh6hY3X4Pf1cfiY4zi9UCLvH3eW9wtVUzdXq12S1eoSaNnErHJnfpTo31e1g2LqY5",
  "key34": "5wHKzH41geyevFGYTQ8NyrdxoCxs7o2XZfNwpPpzBtiPDEN2oXXJU7oguaJNLHS4BN71RMSVoiQGChMgdQmu1wcr",
  "key35": "29VniGac9ymz6vEfp7HJMb9pirNeyjkzpEw8fnzYeykzamJHetAExqaCDWteMTeLN6e3MR9DaS2iYs7P2DzKbAB8"
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
