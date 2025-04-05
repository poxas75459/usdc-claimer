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
    "4x5GEmRL7ThiNhX5NHaT74L5kWgAUoEDof6CGf5Ne9jv5AayE6opVyTsjyFYczJcpzE53JA7XPu7KCfGp6HNzpoT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AQfJ8meuAEJemS7yjMka2My8huhk8THQNjLrES77YjQe7RYdhyNwWXtqqsyFQpCYjWWbuojV51ukmwzeCFcBkRg",
  "key1": "5X4bT7Ph5qoj8poDPsRvgCKd7H9KHQ8sBCoGStot9vY7C1xwnQxyXHJMUyVoq2rdKY1AeEAzuxVYWqhDCyob3ZM",
  "key2": "2BQ87KejUPCw3WS38s73oe9XeRcByxxCSZTK45qSsDTiYpJ9488zHRgCqiPnCEvcSsyCZEcb7boDuTRMRvs8TS5G",
  "key3": "291HxxcmcU2vt5rdTngvb6E4Us5b7WrJ8GLi7VZxeV1Nxub8tVoxBeUTFYfTeagvRVW4D4qznD4gaLhxhDQbdmJ3",
  "key4": "5pHokJcrZJQaYNM6AZ74rSQjvyzhXEfmEJhg8i6DnSyTktMUqPxGyAicscWHVZJXhJe89DVKtUgq3XBNBgMnd8GB",
  "key5": "qzd9ejP6oMygz6HXnzUKfVWZWs4ChjiZVMQTyDMTJh5gEKqqhAbYMwZkex3qVfSjh19fGCsuap7teLrw4ZXNYU2",
  "key6": "ZBWW4LgkDjvQJYywMHHoD7VA5Eq2oHaWb5urCzGivgefumvj5CQTrHQ3mubQidjgLAXnrfvAQyb3DixCmBUTDXT",
  "key7": "5mCpYKpW2U4KtVm8ErAEqMaTnFu6o8Qx2VsouotDi2kYPQBBs7tooMFDSLFQuowxTJQUPwwT2yuXqjiWqSHVoNvL",
  "key8": "5tJC7Q7BHBAkfWZaH2RZ5r5v4rp8b4xNTY3bgVeYURuWa7jGEYwpeL8aXbDsdFqeAdiAYHcKJacWatYFjCaByzGy",
  "key9": "vwsLhzfadVi4Kd7X1Xsj3uV1EYZs1SsneLNLdE667dGJGSh8WJms6BtBgpa6wt3P3nTN1bYdUxhS2pcZ6SjDFFW",
  "key10": "4Pb8ttWTBYpB4MmfSLDiSuGzWuymcGhJfivJ84TcE8E8Qof3fXTnzN9H9TKqNepW15PAthQHJqa9BZ6FKuDAQceD",
  "key11": "4atMnniTMsf1cLxreuc8dFaZ2FmvmkaucS4Suhmx4HeXJFyUEkb78FLhfuzUqksccQu9T3h9224NJzreAeznSGn4",
  "key12": "3EUQFsAeLsP8ZwxHsJN4ZcDPJR2K5y7wuGBhHbtCNS31LaeGuDbshtbLXHX4Xirr7zGW7q1gXRvCwdZUz7nZUtBy",
  "key13": "4h3wCUq2R9XiUAAZqcJq1UTDxKQ5oTxDtZRbCCtJEL38jc92fNPXJTCVDgeonfWbU8Nm8DMdf61QBXNeiz1A9H73",
  "key14": "5VLnX4RSSMgPRaZ8HXdBUsnsXx8KiafFoeXixFxdPXHjnpuiQVcRuf42GRm1UUruYtVUCq1sK3EaDvgbbekmGXx6",
  "key15": "37bfLYAeZjQSwzQwjAuh7wUzZqbvsgczN5FUoj4rnGCpwiEGpqyzApmX8dnc3b64xpusdGrEsTkdrpd8T28RteXM",
  "key16": "2JNWhgzpixR8iqe8aJfhZsNgvAHyt9KbREHoohcF5pRQRxvfYDY9Uf5wXRFB3JTJxxM9TkAtkn2E4xwiUhYsPa1G",
  "key17": "5WLndNSmP4LKZUYic9qcbihQCUwaPWfLbbAJfJr7P564cicvhkvuBAfEkfAGffifuDFzW3fY7JxK5qdpeisn8dYm",
  "key18": "4ekihqcutubokiLM4hL92QDKistXr9e3QCK4RpFYFFn9vzEtmwxtXvbvVtjVSA7Nkv1tmJzXAHpHE7VbQVgpEZQV",
  "key19": "3uqnZE9TgPNXaQ6kSkWLSpaAzD5SJ26MpHa8VP4n3DpQMaMNpwZkCh6axT1pZqkN4zWeGyBScB92YmGPqsmp2N2T",
  "key20": "o53rSNyzPw2d4xxb3CStrVkMi7ghkAeQdNtbYDaZJTEanpdL4mMp48aU4kXvVrMCqp3U3RQvzp7UrNXkeoWnhXZ",
  "key21": "5Dyyufhoj4JnBzvML6WSkLMSJ69KX2BYCTGGiLSAWCDWMxiku6bkwA8m4UADVaLpF4R6aECSZJg7oHZk6QFoU4vw",
  "key22": "4LE45jkNN5qyxKA2d6T58Rz4acm48WfCdwNfSx7wh31NK8xKCJHfeQBWfco29vg6hkU9tix6Z8hStqpD9GemyznD",
  "key23": "3FDaswCQd6txWs9ZUnMLYb4iuvMAP84hF19rZK1xMJWNT4Gw43yv4VpAWXqPSLtG82PZteWZCsbeTokvboAesEV9",
  "key24": "4hf5rFCY8bhhU1RQpwE5RLQwV4fVmxYUtTJiUdNkLQcNdD6raebboun5od3dVh3kh12t9bAAmLK7YxVRBbxJnw8Y",
  "key25": "66zmJRsRNvf9QZQqYov2W2EXwxYhEEngBTd1hpmsTrCC16C7hofAqg52XmWSCtFqHKfXE42cozopUrqnMJd9Vajx",
  "key26": "2qQKG94hbLU8ufUAHuVSQ7xGwN7kbj2CSzK6AVnWgLejkfRk2cFcGt2C81LYnW6yaxG1kwnBqzW3PC3TjP7zzQZp",
  "key27": "67konU3zceZgAb9oPgqWC9vwZKEJwPB5bZnvBAYwgzgS8Jn7uxD1P35fUuYxMZMdfzb6bGAWXXNGnCKkZMnxTtf",
  "key28": "5sB1BPyqysiXNEwWnZRAUPXKsMZQLgBbdXweWEvm8GZRT7QnbFFq2sX13YuBkyZ9rjw8hEzhhSCCkpZ12GaQPuFb",
  "key29": "21F79vRL9wyH5v6LPwJRDKB6GoCkvLuFjAsKNhkzXf6ydrKQd2eSuKjJhWfPRc4QZMx4nDaEtoUzskMCt9UkbT2X",
  "key30": "5ciFKmgqpqW6KP3mdFMQXf2BMbPXJvLhVvfC9z96ihvvH4Frn7Xzqb9i2cqsVPvpuaSrQdcgVoDwWWKeWDj8pSJc",
  "key31": "5J4ziYNKLw7rfMM6L5ufQT8itVD9W23TtCQab55gbM34YhaMkP1fUk6Dk9jMS1Dbbyvov9bB8CU71NNU1gMDo1xU",
  "key32": "ABogLvmfoHLGDHu41RpXPn7DFFDgUyHQUwRRS5n9n7LsBSrdF1DJJKcxunA3SUFq6vrzEHQmE1KbZGgeHryAQRW",
  "key33": "RuNVXJWSVYhqhdZk5JGQy91DnPSMMZjYdfRV9HuW4wW71sg4S6MV3YhazyxRvdzq7BhDMBNMaucVEXpzfNj3HzW",
  "key34": "FsS7uDdjV1X3fUYjaqCRTiXVW5VJagejjbBaN8BLscmEAR9pu7uaWDY4T71Eu2EZnb9AmciRxnLfnnwxeMkDULP",
  "key35": "5YVxwPhwC5948dsB7Z81ycf3XCWC29TmvRALqjaXHUVCcmtVzHU8HDssfwPys7FHgRgS5w812icjRTnh28CkZYkV",
  "key36": "4czbmhUh7xn98fKjp7GEpRi1xiSPPcHqz5QAoq85ZZBvKJMPsN1jxm9eXHgpxeWKy2gaC5krn7gKejCiA4Yc6eqz",
  "key37": "3GKR5hQwviEV37VP1ZgFyR7ZUBMBo5VdTgCxRZB8VGS5yMNCzwvEsUNV5n9kF7Vuc7HjWnayEdWZkP8zMktTTmch",
  "key38": "4mJdw6ooHbcyeaEewBhBpQ8ksGMJDp3rkFSZCmmgcUPSrV3tWqc4yzFKLG2vvf1cobT2YYh7ndz3hWJWXNK1CJoT",
  "key39": "2yEXuuo65thCyWKC3oYEcraxtwFiyJJzD5kEHtA9fT1SveNucV3pt2USYTihtyhVCbcdWifKos5H6JbUTpKqBtAt",
  "key40": "2d8KPMJjJe9zZLQPHTCjLEaFdskXfFCScwHYBL339fWw9zkUN1dVqZ3LR8K8b1qVkh1TEevFszzoja4uitQ7JBb3",
  "key41": "4qmAvkeRWfXrBhZnfBBBPPddmJ3Rnf9rgZ7HDQwEPc5X32AEABDvVtNq13dLEUkLJ6YKuckWJbbyhFprxB9Jf2AS",
  "key42": "2aWrmvoe6wqwUDVuhrgA2maPbHwwYedA7ru4ZBq5rHBArLYC65KckajfC4DZ6YYmywCV4Esg1dsJKkNC9pcEqvff",
  "key43": "3qjLpCzuNqyCYGxT8f6PRpUi2fkUxyC859xEptETGfmcuC3vvCBrCXHfDnnd7FVn9rdQvPHnb24FzcRNaBXBGxui",
  "key44": "52yF2w7tbN2tmqNwdTximXYFVbvo9diiS5VovWWTbXscw1HWEpkb9sJkXqJJ5fv9WTNQiCgA2q3TVWzYbveSKZYw",
  "key45": "4vSQGHywUYHMJMi1E8bewe8Mee1QRyGFP2pcxDm3hQKHyVNhXLGSBcNMdXSkMAeDHL24LLr4S3HEPQbnPqdEFaNB",
  "key46": "2krzJjr5jnjKKfTfMuRhE4ZBBtJgfVCERUEMACuKMSpeiJG9QfWGmJcLR7mLrHt8t5XfNCzzrsbrLBmD1pmPnnsY",
  "key47": "az7VWwVvDFkRSoA9sC1PwrJg2iBY9eiqFiFjNndbSA8QKYxSmPKBSSz3HonTqAXCEPghEAudN5MuYJjbudWcqPS"
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
