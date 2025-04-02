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
    "4Nm9iredH1NuVUnaqHLRTUqhJf4rNm3WjqAB4ZejH5GNwjUQBu5zbXSrgqjRq3kWBPPJswqe6b6WesAFP8Hz9Ddp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kYo6KiV3gF5PKJ4WxkCyvczvbeY7zKfMR6KXcVtbFrnF94nBHiyQnUnPf3rcMS1AH1LFUduYaYrrcbWeo4Hd8qU",
  "key1": "5bPUAFHusucNC1jSaKaMEvUAiMQFsedketwcsCzamwEc7CurVVSERQoESW7PvEuhjV2sQkYfzE69tuLpHunJgoFR",
  "key2": "568n8pZQ2jAAUnziaAz8SCTbExMkoLsZAFdXmFb1je9A7f9kUbvzxFzE58rJ82bPZfA1xh2UHz4iRuGHzjSpSy9n",
  "key3": "61Qncp5egQtcKmbipvhKfe4SDLmMwhWK8tCVJVNxF6T1XCveLMQnbjrywdPqTs9Bk6WogWwS93w7YDsV4RDkQVGq",
  "key4": "5LNQ2yPzJ37Cx7awmbx8WswzuB4ZenHFrYo4bcD37J8LufWb6sauuoCdxVHPwu88cGe3Z4bzJLqHVEnFjKy3R2fi",
  "key5": "kSbdnH2sd91Qjy2xZkN1CYbuf311XmxpuXFGyaorMoBAYJx2VaCgjzSKweQQxAarFPxfFtemD8mbragNHef65TB",
  "key6": "EnXMzur6iqdVJpArHf5GfEQm5Z3EJna92No6xfCkNvTdzN6Dc5tyrLY5Lv4gKrR4CuncpScYVi3gFbzKtXKuEMX",
  "key7": "4xVbLmkC1Hf3eLjFRX35uXdDQAjP9Pk3K91NQJPnhx4S7bPjD7pWwujptvQ1yLU49ym6SKH2GS7vhiNTQoZMZaJi",
  "key8": "2pw6mASP1ZyDwJ3peaJVFdeKF3WCAyqXqa7PL3zLPET6uxDTb5r18PaU5a66fNwzJQtrn8AE8c8Es1nGLU1qyFGk",
  "key9": "5oRofdZny6KxiwPTZ3D4FCmcYnfSVp7eL6XB1uBTVGs6jcRVVM6qo1gWDPnTU2kTn1bPwCfTZhbjKvSjQSaNXeXa",
  "key10": "3Aza6rTtEjvqSYmTNkMwoGyzRCh2ZCWVTePxWQLDcGf8q38Kwcmwk8L4T2AT4Y3zPzt5Zx9BsGRQZsWTgLXCHofv",
  "key11": "49mtdFT5tT6taLWHZd1BPPKUTxuEYbNnZLHnpEnmTtjpqfKWzb1UzGL8ewSynL69vSDfB3FiobisFQbzxbDtoWSw",
  "key12": "5aMwBbQgoBYvokmUnFmJU6wdBwZbxPTZnD8TUBF44xmJM4ogDNCdwTqCsJi36j66jKrnVXBgr1iYvjKkWs3wnM5F",
  "key13": "M6gCEED49CkLip93CvWBYsazVHgupVZ3Rs4fde3gbDoJz6AsHRyZY3XXjFFWBR5qTzu5NMBfmon8TagAkZ7LcBz",
  "key14": "2Y4g6Pyp8ibf6h5mda8HmSboZyobviPttq8SzcGBV1hTL3hnnjY3R7UBYxvPf1qJJoVPrsYbMdjCdvLeCL7vhgcn",
  "key15": "4EjPvgwMyfUkGq2qRoe2ne4WRg4xsQ1rz7e8Uv3j6yC3X1xFUgtDeQzNARBH9gq4fkQkB6GP9a6BkQjGUcXzHo8F",
  "key16": "4jnHr73Uo9LDMqjfmEsBUw3uiQhhAAZmwu8zydkSzydnTXoE3C7rYpy5eX9fHZ83BsDPWZQvqXow5NoKDSuUb4oE",
  "key17": "pAPaecm4TvfPxPpF7QaJ5CyonzgUNiYRvinajEPKt7NhMY8tZMBYaKA54VpN88JoZNZoCCKvLuD2u5XiqEccMNM",
  "key18": "3dsrV3rHUkr318H6cK7dVWEWzHyP7TnJsMmge7giDZy2AuysBCiUjRTiSydtNBJmT16QH5SAUSzLbU2ZBC8Wzpry",
  "key19": "5CtsEQcg8tWvZtsbHRMJf7SEAHt8Tp1QcgjodDRmsR3RrB1Mse5H6cnmaLmnp5Ufyy5DMzkZFoR7dKv5nL7sCT3d",
  "key20": "WzY8GtYC5cU4mGTwtoNwrSzvJidHbobtDYR3rixFycXuKntdUbJUv8HBoyWWtczKbv8Qw3HdJ31HsyUABy7KhHx",
  "key21": "4uqXA6shck51jXWuYsT9BxHua8N7dTsxGcX5vpQL5dZKgrLwFAhqnkAN7VsSob7x97uiWrtJPE13qJ13LxxxHk9q",
  "key22": "LeePe5R65ANaeGR9kujEyqjJHi9wbDPdJSq5yoEy8MxQsv9JAkj3GQB6jtAKgJ45qF1nouFPZH3CTBJF1WAnsnq",
  "key23": "NbL7uyA45jwQPspHWgvsu2V6tFMsPKCBvc6Abzq8Kj9MVwSoNVKHe4nhJsdbg4zYmayvw1rTLvxqUwZJfjVyk3S",
  "key24": "2T8Qro27He7ae4J7tqtKCn5cmh7nvzdDpLerLfsukH9tax4EPNXzrzN9JZ6UfB6Tu3WmVc3LUwDrZndgL5E63P1D",
  "key25": "4ybSR4f5CuDQKeccmeEUDXzJpKNTH2ChW2PsC83DKXrqTNatfqNd6rjLVcbyVznKF2D2nykLZ49xUiKAeXaBSbok",
  "key26": "2fKMHwwG9RrTLeaNys4NtreL473YRaNszjTK2CBJDVAbGLk1xSGfUW2z56XA7DAvvc8nB3ZZmHD6ScphimN4737Z",
  "key27": "4eqsV6KaU7pnVTTtmR1vRKA1dsnkECX8tCNyetYQ8LpsrK5enEKSJ7Jt28XmyRoTfmbPPbfgCHYPTsf64fiuzKiT"
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
