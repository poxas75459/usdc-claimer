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
    "3c7yjRvEeGGs6kNzuz3XxaAL3rfqpLx6P7bRC4p5cCYpdx92jV7oZb5qhjb12JWk5wU8qwU2VyXEgxZkoeeaTVmb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mBujrehgdh8dYYzWFp88Tyz8B8oAD6bqGrPyzSoMF7a2Py5Dzquq3B64Y7CZV5jXuzgnozf5q3HzvSDdpBCf5SF",
  "key1": "4xkkXvm45X9ceDTmZVwWxx3GB6Chu5MngFAunrPUs55EH28o7s4XX8oenwkJV6CFbCJdcAUHdoVeWeo3rHaKcLqn",
  "key2": "49VLQCM4SYvXKujXcbRJgpk5NicqnUW2tsioJNvf78yW1HLJrSCh8useUC8g9eBKpNGjgFzn8zSAxBgvAwjaLgKp",
  "key3": "2zHn3E74rbzYp5HxxwREQH8bjYFaDoB5zsUfaJsmyHLKNBU1RDBuRXXuXJwj2Sn6CT1QzN89DWQCrt6mKVrMicnb",
  "key4": "5Mjt8L4Jfrp7nzgAUx7fPmJTpxHpU15SXwCHB1tVytTVU2mKfM14yyaXRCcULqKe2ynBydEUzweXZGZ7bf8Y2RYC",
  "key5": "4FY2pBWJTdLPYbWNwLzNzfkB6Zry1TbnZD4ZqKB1o4FoRqdPMMY1pTNjWmWLVqrUf715t55YsBkAP5HAW9qtq2iQ",
  "key6": "3ktL3MQAzWUZioaDS5nrBt1vayV6snGA6M1thg5JAyxYf4Q2n3bvbVc3qU2a61HoKMXNtNBRWH8dDXfn4Qbig1hD",
  "key7": "5BdeihgA2agtSnZrU7jP91k4FzitZCSe2XdXSbWy53DM2f4R8UTzkRwPYVnDvjkyP3yRaj1sUCkiERMmAPwXMWbp",
  "key8": "sqb2hBU3ty31zD2tqXqXf4smLvi7h4DBXeFSteDcbnTCS3pab9dsMqcQ4wprJc7hU8oSTbnDpLyd3ULjKNjyxFu",
  "key9": "2UQXefmT8N91BomfRjBCRDWXTpXfJjaHvq8ziUzHeQN3PztRL9JGMNHfY3dzpEdQhLVnDswAWuVWmHtuWNVFPJ8T",
  "key10": "FAG2ufQnRhqZzXRZqssoff8HR9PviZaj4jQVgnPyrJcwM6iyXFrG8EqpYK2SiM945nH4vM2WtfiUc2q9YJGtW7Z",
  "key11": "9zfhr5ytX97H2ZkdL1SGjamR635wzQwsoZnWFT5WJKwJCe725HZNHNgs4y46LSQWrFkyAX2VtmRDNfL44hMMGaj",
  "key12": "3HFPtZgrJ4pTUXBDbie9xvZ1GXGXQA1MsMDtzwY7ZeLDrDJKWeGYym9xnasCph58W78vZYAAUqm9otFwuNLLxCzj",
  "key13": "Q9kzfwQWccetymVbABpmzAE4CQ641vu8uGnp8UsVaGtu2w8zrvN4tmHUa4U2Cq3U4okQiKwBNF7aWXyzzRws489",
  "key14": "5YwXoJxbHmLUe88UxRmmDYc7k2S3dmSbhqPFkZm22gHf1hZCR6MZ6PmwYPgFGTsdCGpMcCYVqMWwP9CvqU1jgS2E",
  "key15": "4VxRJ5NbkE6RFA3yFkAaBBqqaGakGWLzdTsBuJvQCPYQvV3U73Q3DuYhVdMJK8kHHUTLABWcH1rJxx5Hem5fJNrZ",
  "key16": "4BVo1iQfEgWqjNiEbBh5FvSsEqrbwke6WUaeqobnGnRRv6LRYFy5QQRK4DukNz4iPKs3SSVia1qY5noiVuY66J7c",
  "key17": "3qwft6nm5rSGpVquSUXZ9u96i4gbwkpwuj2HupyCsABGe1MrTJuf9zxamyyevsNYAhjZReCpFJWYajxUQc1QBsuL",
  "key18": "2626cW1TWm4VPmL2oUaanqKi3dm4dsQ44NVwdxH8WWUZHH11E7jpdQdkZyDFBGsa8aoZ8hDYvGvQy32CeZoGmbKT",
  "key19": "4vcQA2vMDL4Cypo6w3yXGaYfX9GTMS9DHwETAvezWsbYfj3fqw1rkmeMM6iRK3NJmTP32JW2mvKqbg4y6C5UWJ1x",
  "key20": "59NiGfJeWxAWdMBbjv1tSimP3KtTxv8A1tKVZpijwb6Pe6uu9inqyTKCMFH5aUZ5aJLsHpjUw1xHUMF9EB4RFR5e",
  "key21": "46okPDPUpPcCPJYweMbCjqPw8Ukwy9yc51PzHi3wNARJJLkqAgvj1HrZzf2Svqzs2ormREYkKzeU3vT61LxLh8ok",
  "key22": "4duX1gQPLQeZzF1G75h7cyFMNFpXq6VwtiEwqEPDx7U71BKRKtY8sYYod2HfsKQkDAjzUWDrH26eijMirvjC2S66",
  "key23": "QjV3Xz5BuxBgCqGs6cvwKxDxEZhWzt8QuuiGv18mB34TbPfR9vfykUDprSBQYf4cjgzVonreyu4KqPzpFUbXPgE",
  "key24": "59Y8kstx9Y63a1QqmDFyPjWAQNuSKdKGPJ4G1d5rNFjNpbu6kZXLyVWeMimQD3xdnChGTX7tRVmeStVjCGdN17fK",
  "key25": "5NtnrLZVbuACeBtV4dwao3d5DnEZVaUk1XXXfK24oiSQQ3DiKcSk7XfwFm5vzHYxc646YtWDjuBdavbVcUCU5AT6",
  "key26": "3aHe8SWMbGJF3B74vAJKS2sufsasQLQ8dTcKsiLdYSAnHG3HdtpuGS3g6bRXB4FEiXWr4ou8r7Fg2fg3uZixaDc6",
  "key27": "4sKUfSMsn8K5XP9S6g8ua2S2LNPYbwGbM3Ra63n3WaEHNMXHeP79FN9nAQCgUJr6vkS7CrcodP59L2PSk53WrEB"
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
