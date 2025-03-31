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
    "2XnSexkTPU64mSXmRQKyK5CJUEYpxD3sDkqdnNV9yX16NAFKyfbNt5sKtLqL5jJkVLuiPYMaQVrMGRVh13aSTPqq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36CXRc46h1v2LFMVfyGChbP2xVNsZVKNybQ4oXbgAKGNawDhryQfTWDiDSoDW3PjzCwpumoymULDmNz8g5QZP2pH",
  "key1": "5Z3PUmmWKvFNz3mTwnSxYMiBsyagHzv7YJnBFnFta2eDd6yc9k2vnPDJd6hmuzM7kQ4Vfw6tjLLvUkpThgexHEzR",
  "key2": "2Fi3vQSetNyy6E2REprbnenTFm8Cu6DgekAgJjkyzaDAMT8vJYHgN9PsTcAYzaKyMjh154xn1EEM6SmwjG3D32tL",
  "key3": "5vGRzBsMvN6x5edHTRXdkv6P6oh5auhFJVohQGw5JY67e8fCUEWtffJ151FMmntaymiGJtf3JrRUfQfGociDifRB",
  "key4": "3kWtaBJFR5843Drk696u6wmLPPVBaAvb5XmQjMN6i4wvAx1B8nRZF7NU6f8rkotCv7sKeAVUGGV6Cpx3j3ms3ZHA",
  "key5": "2QCurtRMtQ65W5SsAi1QBqEj5hEBbQBB9rwoD6v6U3qoMMMuwYViFSHiNFDEbapS6UxCWu4mH4jCMQchUHrt56qZ",
  "key6": "3VVs9cD4DRoPowL8mu4PA8i3KPMbU2RmAFEeASYSHUnpzqTbTkHLBvZwDdPak5LEm4hKyqf8jzBDBcLLLpbXWjro",
  "key7": "35FRYktTo7bbiyKPxWxUtfRMvBfbSD4dPgxo4DDR6L96XviagtziCPKEYztru7y5Z36V4JuxgHVTdwFbEpYHSVzS",
  "key8": "2QfK9KATGVUaf2sLjYBR9AKtVYMuMArkS4vnhTnzxLGUFrv4hBg2GBYjFSoooibKyqWgNYuwoN5GjAfr8cfJMFZT",
  "key9": "58gFAE4FzGVo5fN6BJKnukhYqEtvjFeWaSNCcaRziywqaV1rrC3Y41zjuT1cXBGuF7JBpLN2atWwQbKXZayMHAdT",
  "key10": "3JrwxLWKGMs5mHBieaoP8S5g98CB6J1nSFuJXvgXDGJekKZtoEWWCx4gXgC4Leue61yiQYUrrxHkVV9iyHNmddCK",
  "key11": "33N2NcoEC8NvFPT7Y7rFWLYTJaAyKe1295yWoNmb7A9ewQj7M9FKdLVTCm7BDsqQ1Z2qctbZkn77D4PBJmL3R7k9",
  "key12": "XaSda2nU6uFAKAgCKEve2DWYYHyBBW7gH5VSAsKTDbxsdbj3rYyYCHCaUxAWwvEHYWCmaAZRC6L9MHcmSUStEL3",
  "key13": "wCC1CNXQV77RNWizYnBdAvCajU1QgcTDHtWcvPEncYz4csDmrUehE6K8F8SDuyLLut4Q8d5g5rvkbJCHJ9WHSra",
  "key14": "2SHNPTNxqToE654F3w4hmF2V3oapXaAp71uTZM6biuWqPCd3znnXDFS73Uwtwn1uDBam6zZMNRAizpE2a2Cwjzxr",
  "key15": "3RDr2kqXi9tvp1HmgBCpoTNYpigcUucovSmmBPLKEiwLfkn9UYdZomMztWBnwRNu4fTEnkoTJCdK7CAUYNUt6YSb",
  "key16": "3R3KUagAVGDUt7U1MgMCu1bMSwPfP4eNh9MPv37RvkM5qda4AomrQ1VGVR5P9ZPEUmd4cV13W9N5YTjAq9n9W8w2",
  "key17": "hLFBgC1coiiQpBcjb1K19LcPNkF1vELLPr3KZAA6wGvBTQxpr2AiPAtGx5T1Nez1bb3bTtLXCJcuHRjsRp2VLVZ",
  "key18": "G7vqG6NqV5ifogJxzV2AukZqfprHAeLVmvJXcuvy3DMBuxjhQx6SGZDW1L61t1EWCTqECjZR4dXEawbPoZkA2ya",
  "key19": "42nVaib4vmf4SvGnnbjv4HymsbJ8VsuKAumR6vJ3rzoUk9vZpYUaZZ6hmp4jLjrhkDLj34GjMWc9Wjb97p7VB9tq",
  "key20": "4knib7tAPccAvW1DpVNdmjq3UeT8CpbmsyN4hGui7vrvrsHJBuVWRni5Q3WXF7W5Sypcem4qQF1NUXwYs6ahqF4g",
  "key21": "5G8CHXWex8fBxcPB1dbdFcU6x49rEZdwN4FxtHjgfamA7krM2cApAKfkCAodx7tFeiC1WU4TDgVhXmgHkmStq3px",
  "key22": "43PRXNgEmeEqfv2ie6CfrtjAbZEQesHA3kLeqpxnWc6gwA7QvoBcpc5B8ByMo2q9iSuS6hwquu5E7tVCHBR6MDjQ",
  "key23": "2AfDjpBrMzJV94cDujKZiKApwXB5n56Ko9SBCwFuofAc3bNqoQN4tXMgkYKuJkS9HCc65MMRUHJEmMEihhRSnUBa",
  "key24": "2xow7awy7uATxz7E4678JJcwEhuQedyYTSXiMPTVZNjQnojhVLqfZBCELx39Mj8uaaeMdFTC86HpVvx8NoeXHU6N",
  "key25": "3W4TFaZb8nRuHc4D7zW4AtZaePbXc59fZ92uYL3GEF9GUQq9jAtGnBNmRdUKAjL812AEKaEbdpZK7grkPsB5HYDx",
  "key26": "2QyJkUWNxffbHuaygMcigSWdHvVjZyRW8aeQeUWuCAdqrPuiS3NWSi6zCEUQw9Qgoxkx1crZTFTHNGYT843WE5eC",
  "key27": "4TtHsbyNq7YiTtaXUQ3nKn35S1Watz7eCCv3DvjPJbzVgtYqckV1P7BH6idNCDrVwkTdNojuewgJccrxQiFn7kYm",
  "key28": "4VGoSfes9ECz5ypM4jYbgDgPRHiixBCasvaUgLsrgv2ncqyp7LAcQajEUovvQohG1kxMAtDk51zQrE1tktGCwn5B"
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
