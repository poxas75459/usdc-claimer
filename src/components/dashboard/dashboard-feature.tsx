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
    "2gXMPYvDiVF7gf6zHK2V9LSFjUrcbFyYzbJKneyotTrLs6aX61Qn1WuTCSuMWpEoqm4antokJE9VDsQRHJLP8pDw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TXhYBbBHo9Ho9d92T5dYsRFg5JKSR1vwyCg7JjKA2o8B2iBzaJ4sgWiosHRyf88H3mDVCKv5qLfMwGpyZzvMqWB",
  "key1": "28dg43RmkGCKC4tDoX3B1PDJRrNetsockhoQGfoSyej5Yhrp8zepKK4S2xmu6wtZsM1iffCNhtCB5986ggMrYfcK",
  "key2": "aXWtAdD4T6keam9GFG6mxpEQDkHoqmCTVan8P3GgpFeKHUf76SqhuckQaNbmcCaJ6YjAqTEeqVXAvPDkNAFu2EX",
  "key3": "3hPfg5BAEkrXc638iHrbHxRfXx5zk7zruP8TEbcVhpHs8umSCfj5DUtzAMeUyyiXqSRfeSVqtAZs71MYrQ5gzugy",
  "key4": "4HmSKocxrTRGghY4EdxvvrwpMt4x6kTzG7gy9VMBdaqBC2WFC2fxrdcRKn4rNaNETNVKmZRZmj3f7oR3SMxYam8B",
  "key5": "4cc3SfZ9Rh5qD31Sa87qEzA7o4gUejKtvuPFPqmRYwN2x51FZ6jxTUXFvDvJLEChwqn6uRxVXvT8rZBJ6uZFcGxz",
  "key6": "3J9Pjr9jyP25UwLorbPWhA4gu8ZWgqhRPqFYx59TwSV2rq7d8Tjfx8q5WEn8p9xHwHAxf9Pq2fv4hriPtT9UMbm",
  "key7": "5CLGRqYPSEzA41zZAfjLD2oJzBtx2AHcyW4EMGJgPzkhFoy2FGygQt44JkEFjbNnTQTQ23QdYHGbvmJ37gh1wyUQ",
  "key8": "4cf1X3ehi66g7R3AgWu1RYHhiLbzQi8DpoQo4fUipqAKfUbU8z63hur6GbY9Y6YoQM99BXrQ1cujyhTAZcQE7K8D",
  "key9": "4jyxsmz9MSJPEdt4wRLgUw6EE2afDB1DngeTzACWvK3ac4GMPcFYA2j8pwT4fzfk1Zudiinv5nxnjsnnFNLx1tWo",
  "key10": "2XKrWcqBmXx1JiyUFL6n2jNgRTfGmjKg8AdWnBBTrKFaSLD8Vr3mEGdUpHx4SunkUYVz4fQ5Vja2vf8DZya3AZjy",
  "key11": "3Pjqc1kNmogGFQgxPEzcqPCVbygfZyehLw5RtUy5ZLtvrXzWdWeJr5Yuo8D56QjtGP1BAga9b7z7WGGKuomcQYWi",
  "key12": "jdfy2yP4HeWFby1VdjreyJyMrudaGR4n8zHSDQ3cLyz6kpTiKJh9rVG2G7iSUU5iCsPn2Eda7f6K17RaBQb6iUH",
  "key13": "5xF6xwv6ncSuEbABBCuq9tzkUWpSfmsr38birK4tr7Cx9LDxhL49F8pVvYKnbUxryJmyX4G17GWFqN5Bn9ErVMC2",
  "key14": "sm2nWWPWtf5wjmpwPrhGXwNyUcc3yGZnQ8WQH9kQqGh3FJDKuRGd6w1yNnsotRZicknEy6T6dyZWXuqxXGamAbC",
  "key15": "26yyUgWcthW4JoUVsWYswtWaBcNvfY9EDNdhrrC3QF6sXwVawSxGXPFZnLjtMceNyraciWHMW3tdpH8MXddZkQ1w",
  "key16": "4JmzddJo9jfoXHfXSnMnw9KTUzcnwJBKh2EUmRCqjUi8BTYgMHYoerg1efhs5tE88oMRcg54eNyCDetjBYQzPvbP",
  "key17": "43eSt6fonYaExgUJuzGex5j7fS9PtVSEFLJ1vbc39ABrmPAGhanZspj7TF9aKXdLqBYGm7jhxeYmcoSr26PECr9F",
  "key18": "2GyFSJXq2NrNJQ2tLiaioJWAsjtiqEzJQnwqGyMsMCn3gGPMmvkMmdStVSGjsYyt84VPKMoMudheqt4B4Bh52Jfa",
  "key19": "3HLtP4xfPoT523TUEacjYuotm8WSFVnKQpKtiBqZKCCXCvoLyvDVX5uFcBrPM3Px1WUbC6yehSRCW48SDcLwDZBM",
  "key20": "5s8MNkFHyicvrRLfmU7rhNDftKTxXUc6JA4xMpieFkWsHxEF67notBfPvwSJVMHw6uv299egbQurKoQzNspuP9Ti",
  "key21": "57ju1zNTigJfiXy9JuG4vYhnBCRLMLzYFhDjAE4aiqxRaeFsFTKYqXFRK4PVHLqMwyTpGdUMY6iD7RqqntN4GUyD",
  "key22": "2Mek6CZ3NYe4mG6iU173rCwpMvbBfhjDpizLGkuFrmmexmkP6bfg2qKEzmZbDiE4gbBSgeJQMfuTFt2F7g9audcp",
  "key23": "4jFDj2FDnxCQsqva6EkTu9zhp7QAnqRB88NJVzCPLR2RaMCFmNK1r3zG8qhTk8Sa7vRSfeGA8uPD3ReAajs6mJ6k",
  "key24": "3ru58MStr8tMG38sW7UP61MvDNiZRwsnR8QeXGkwjFgX3CwLRVmF63ymNLuNMqtFJFX9vQ1CEC3HRqLMsgTCymG3",
  "key25": "2Vjj8DUyeTC1TGp1HzjibEsxSBGWD1wPywb27mvVmxTpMWZmctK2B3rNS9UoDSj1FWCEqePueyRJh2mLdkL1d1PW",
  "key26": "PhDiXzUnD7YXmaBhGBswiirHyrvDhQvnVj8DrHyFJgpNxhFYtr2ZzvBUZnmjBYBs41jvfS4ht6Rsi4BoiQe13Rf",
  "key27": "2H1dWW18jEdmWFHhvEHT7Hd38jcrBjvQDPkFV8JX32u57uFnYdbfGVivLh6EC4rRdJnmVEkW1obZibgPE8Azqn1k",
  "key28": "5GPPRgrb4ghR2BjPZgkaMd62fpanLqghs76XVEu7DHwXjjmLXZ4R3CMYvseTBCe2NRoaSeuUQVLfy7VXFr1jC43c",
  "key29": "3mGyEpNmw7GTy57zYjGkCEuizrix5ngQBNUQbrqpVmftsRQ433JC1kKLrLA9E1mS9sXBcdHqHEx6trKeAMsojfG2",
  "key30": "2JqQLYfNp3xQ4fQJBAuYX8Aj27z7Bd13wzR8EqWPWEMNpDEDQFqGw2sbrenLwdh4kM7twcJRvgDigJ2snfGXXHS3",
  "key31": "5uc5L9CAmPCX2BFrjzZHHm8CHWULtdS3wE2eEXJyoyBYxU8ZxGYXqVfexMg8MJeN3MnmYT7LendH2L2SkkdTJb9j",
  "key32": "4ksyNRTFZ4VFEVXAW976exEkvT8oxUgHYV3QS9xFUPVCdFR4JakKnxV4TjLe1tGRq27evxcuyM4EC4eGByavWxZ",
  "key33": "2gwyaXeKsprJZA6h5NuMBiY1JiyHL5hWtS56cPqJy62qebkArtY16ZiMC9rFJ397PareBNaweWvqB3u1ZxZxRHbv",
  "key34": "5fp8pSVnXP48fFiF739gnnvuKHgjwsrznYEWZm1adk5KLRPGVQNfgADpfhWJ8DFkVCxz4axzzjUZmjqvuzDHvYr5",
  "key35": "4nbnTUHANQibLz2qg8a76VoksrGKvbQuc8y9M9skgcX9kThEBLdUHyD6X39jpk2TftRSsQgqzvvaJYeVtt3Z4d3D",
  "key36": "4HQiordY1GeKP7vWWhzAvwVUkGjphzD4MTRvS3prHHAbhgaWkbmBLwWjPn4Dox5CbsqKNtG6yVzU3WQLdD5hSQdb",
  "key37": "54AQ7L8qLDV59pThuCMu5sqMavAHU3JUZw9TxV7cbESP8mU6KwPQnr72m44pRB9YCVCTu2zoHw961qr6zen8PQMF",
  "key38": "S1gpSqBAvLuG8ZACQNtHVj27j128YZxpX74VagavBYhMqj8WbqWHGDHorH5FEBGYJHGoXnpBAVbBAhisgGHfMmS",
  "key39": "4PnUEzdVVAtJGK6G1x1qPRDixZvdf8JSTT3A4qiXZdRdXfY1ogGRQUbam1oAp6q4mK9kQHmsHyScpWV28g4kj2ya",
  "key40": "4Uxn2DN2RX2GLVRo8mTg2CTwniJo1hd8QUv2qbv5W1pgNTu3dqgKud3Z9Fx15jCKB8MYJqXh16Yxmkf26KA6Ni6Y"
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
