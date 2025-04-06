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
    "1i11wLJkFM5tu8KiXdC8LUajfosa3TQQCY8ktGLvHHQfBDs2ZHHHJNmwLe2VokA77vA1jNy3H2N6K7BE6GxWwRV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ikoY5ZP9Ntjj7cU261RRhETbDDV2bK3hXC4hmz2k6o6n8diVu6qWq8imRK3cJgFpsWzgoKoDEFx7CuvpzxMT1UN",
  "key1": "3BBm8JnauWUUWnKywMN4QGrUFy44gqChVgjoug9hxGjJMubPnzGtm8Wy2WgjHPYFWjBSwf7Exu3rCUnAB8G3ipQt",
  "key2": "36LwZg28PFhCQi9GzNzvN6gTGDn7KfbEWqTYrY7YMHuPqekwLHJJAbwF6XuVvXThhx6YkqBntFT7p7oEtKnz2KU3",
  "key3": "4rzsSSwnDGDtPkCxktoq7zeFRaEqHrRut38iUtu9iY9wUyQheYuWkLFLy9NYzDAjRmjb1Q9QtyNtzb7vWThywUzk",
  "key4": "4vaomKzHgbiM3358JYoJ1ofhzh7ZeCT3aiz9xvgvr9gUWEkL9ai5HEtZHAp3XHtPe3kKZXeMkuqJhnKRsdpumFiA",
  "key5": "3XhznbvGCEeF76g9uGcADh5j4Ufpnxcz4d9EJ8qNTqRquKaSGip3PyP2BVdwMcGWWKwh8AAG6s3VU5pdDRYqDfVK",
  "key6": "4amfNRHvJCm8f7bZrwTd4JngsUvEY23mh81YEUtGFk51DqesexETkdNKcXepqEDasytbDept6fCM7eaZPfFmgNBy",
  "key7": "BibneqLvMbFfnkRVdni4fZLESDyeEJjuQkR3iD5qLf2cyZLMFf2J6X1YdLSeFozxxuEzoFRzndSVzpdMrDWEoiV",
  "key8": "5UHB92XSre4DVNW1rHsJH2rKY53EHzdCQ27qn6FBru86Z3nmuSugGJuR7261oN7k38bg6sRzqRDuRv8o9Pbr667z",
  "key9": "5e2nwpS4hCMxh4CsAkZw7nojwrfza77HQxQyZkEdwXu2Lp5zcsSGdLYrHM79HNB1s48FcxwEKRoEeAPrCFhwyFxX",
  "key10": "4u7D6uJP7E17FFD5JMzfvBCGHWa7F6oEcGC4Dr5cSctBC2kzLC4vNangx3okxeBJ83iPRcD7nMYSGFETTwS5P1k",
  "key11": "5EkPG7Noor8rADvL1AFavNAb5ty463qkoNswzkP27pouNGcmBZ88QJtygPKd82mL6bJ6yPXGydmsJn4BgQFrDZ4G",
  "key12": "4mccTsgCrS933uYdDmCPqJjtgjVGWEAGCfnE2RVwap52yNSNiT7n48wZWm24NiYRjNt35kUZfguUjWK4qECKRUrU",
  "key13": "3AfFEZyxkojqcNM9tzfPiCC9km1JyFqmgNwSJuR8CoKe5FJmbBGM7MQS92MQ77ahR6NAFN7sZLWKb11C1u3wLt8G",
  "key14": "4EFACKgsbe4ADb3PUQu2GZHhJ9bQq83CXbXySFDgY1iixmd99tWuqUU3Jdpvzie1okhC7AABmbM2VvSomqKxfTqU",
  "key15": "4cxmq77ExeNxb8qh7En7LshJkN7U4MxMQxnanx2UTbjht9THzGSELwC6QTF3nX5oDWBicK1qGshVEL5x4CkVp5sS",
  "key16": "4KL5xNACMByH8Dyw2HjNWpy7Bx2KMiGtoQzawXDBxezM8nH9zSDJX2gy2yYAXdB2GbGG2K6SBFxYF5YMjWUtLkSH",
  "key17": "4FeMo4VVkK9aWiJdj6LThzRfpoj58rU4Ww4VwoxcbzY6tyQpCkZWouRAn1Qty4HwXMAeHzpiHqmhUjJjncMvtJwz",
  "key18": "31BYns5QhaU79NqSJUjqQ3b8qaRsCxNXfEWBoRk4rPu4d4EKPqK4wPWXmFUpvCEDhX4CC9HCM7bxWB9yWY3tXAgy",
  "key19": "4ZAABTUNsUwmMYkqVaFogZyZZNKY12oYehDXyW2oNqvyCgdUtSmRtvNiQDUcSDbYdJb9EyoNkcp3JnLW5HYyGTSn",
  "key20": "48Q4nswmT6CVt2AyNaeeHiAHAw2imxVHvfZKidwpV8KXp2tugs7qZQizHKa3UfvzqH2sQHGsrqwLUyXYo9KYmsGU",
  "key21": "43JjRtR6zqL1j3PPNtUJzai4uJhg9YFLBxy6Y7MFBtNDyfW5WiH2xrxr1cgaFgi5C2ztkWarnwt7efCKyZD8eMD4",
  "key22": "tUuBNggmifLF4sJ6Yc2zAjpekcvN5q2vMYyLh31WAPmyRJEoMgWNW4FtoAQP3msjPVD5nmrAW18Jbwm8zUsfqe6",
  "key23": "5EmHNP7GRHfKLRpuY1P8AuMkcmwR9h53kmfDXh83HrE9kHQ4jBNswzzxAib7tFchAFaZkwEknPBx9suJyLR9wb4Y",
  "key24": "2AnYAiYvjrkQEsay5JKryiKK8DEAwTdEU5GaRorHXxCtXzXJShYiep79QBpR1FP7c2mJkGBWRiNDLGKxdKFcvS1B",
  "key25": "cWk6NE5P6sXJSKHCC35MsxafdrtGRTxfKj2gJw44DvKNQw6hwy2Es9P6QyR62BHFPZrM4umhnaYFje9TQdtyeGR",
  "key26": "67CVM9YdJ52UxbfBRUQpAWaf75qxUSpT2uTequZyhaRSmQCZ9a7GsHxEWPpHD2MH1uLHqjWabEZEfXSnYLXjNbnk",
  "key27": "TpdCM8qm1wpgUfHyRrYtTxS9MJL11L1kNyanrWUcT1LbgDnpHeUcBaukp92DwLUkf8G3Y4HvD9f2iWrN2kFern5",
  "key28": "3Z795LyjrL7sA3k4nut1b1vdCgsvSt7rD8MrcXAiVyGUhuRNhoiHJ27BLeyU2CJqXpp8woWfLhuyG5tKnnJvMmd3",
  "key29": "mpf9xLSy1nrYUng3WBnAZqZ6fB3cAaBABJxELsZq7mhsxnqNxm3yvLkD9NuXZcSpmPqQWrZcYAr2b1n6WhhL4d9",
  "key30": "3nSLDZ365AiDjhL6juxx9xGqWiuvQU42EyaGJBvzMrHF3FS9KNWPSdSqCjxtN9PPozXuSfuj1uMnHEHhzGMosmaE",
  "key31": "24ywFE8s8EucUCgFTqfW1PbaqsWu6jiyirodXAfx563TDKcVCCBDaWtUDh5zPAwDP2xrzjhop9uomAVQPQ13Xqn1",
  "key32": "4dtZ8VuRkxYAZBMafahDFBQrD9tnK3iQf9CyqGWnpqFCadyBYNhkqBeKYSTyiJi1ZABztCinMBcDAF8a3frAif37",
  "key33": "5p44MRK2Qa4cAHTjGCuF9FMdf2WRWbRbtF83Z4cQ4BxbPuBTuuH9f5rvu5M3M86tfqdnYZuYsqQGaef4W2WXmF7Z",
  "key34": "39v8NckMT4hNEm2mRcksEfg4wFq7xBL3x5SwHKCUodFSoz6BFGqCbYhE6VvnjkXfTyMCXouzqArnweW8NV3M2SXJ",
  "key35": "28Tg2hiRnBo3A1VD5PksB9yLMMnzYcDG6zwn13FKYFsXKCtRjDi9qMGGmfYsxZDjdBpRwXzw1QPhfUZL58VYY1rJ",
  "key36": "3XMkbwYDUj3FaoQUovU3BRySQqkHL2uQPMpTjxhfKvdpZiD3ojfFVVpJJNSMXMmpBPStZJS3XeFg1jLWzzvMGJZT",
  "key37": "2Y5pk4cWntw4JDpJeE4Z1wXLVrze6wy4CatR8qsHKzbsQDE2DY17EfdQskBQp5wcmDSqinoaEsdvQ3FNXWfYK6Bc",
  "key38": "4rVZQpAHK2SDMTfwww5RGawEXQAsXc5dr8UunCJ9PJB2Mt65prskUTUuRcTvXw67UYgfQ6LBmE6hm1aBHjy3NRHm",
  "key39": "SYhqbDwk6Znc6AXM51acfAZ8Eh15rSK1xH88LKG8gAJwT4btGPhw4DS8XvsqrNuVvLk9CFcFetEsPBpML4UNUDD",
  "key40": "129pqejNBiySpf2s4r7jG5zLweiAaqNPdtahF6aJTBwkMroRqUW1kYDB3qnqbaGWQXxT34y2i1bYs7TeXZZAbqBN"
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
