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
    "3Uqp9QNRfaiLYpM6ZGJj8of2UyfoJ8xAyQhVzFxxAt1P84kuoJSnPS3syZWd7nfqaXnURJDXkv2WqELpn8KkA1Qj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uzfgiJJAhieh5ioVdiUksf7coM9SfcG6opY8DJcSAzae21y9MS91wuSjtZzTnnFpeFTNPJhjK9uP4k63V9JvhK4",
  "key1": "489FAZhUUiUTV1STECjePjFsJLfPm9heLGjXXHfZZxc7aTJMEoDpWjxKj7yyydwebv8zMNQrHFAiPXRZy7Np3g3c",
  "key2": "2XaadK2tFEdCBJGGRtt7Yc3YmSARw4x6oHNhKTk9v3b45UMJMsVYpb3xGiXeGZq3tX3hrrfQhXeL2R74H2Nvr9Bc",
  "key3": "6cuQnbNQwBNzngSpQJ7uSUiTq9q3S7QHkd5mxekW1wieKS3aVhAWY4jEMMMaRxoERHrdxNBJcFXapt4znnm5LJN",
  "key4": "3Hfv9JXqE6xRoduqR9xztWRST89XrcdjJXQ1mXfd6DMxkSbYd7FmmEW7LAgzeZDW8MHzULtd1gbYHvoKL1fh5E71",
  "key5": "3xLASCqCR9Lp8eWw3r6BQSK8Ah55YAtfGqtG8j2A7rioJsQKRpeN7BXA3D9iUGXbzUqRL9CDud9td9rU5sd7PdBf",
  "key6": "3B84XBwwhqu1iFvAtATdihV9bWawXHBk81fTSuqgTGGKjqzQc2ENKP1Ax2Fb5xugLjGCzgsGZhwCA3S1NjPDYfBc",
  "key7": "3RPp6v9mNK1WtJABwGR9WPpakyVYmjHuoakE4CV9mNgvRPqCMzn5TJGqJUcvxP9gP8hycwQJnHprjYDHVGn3Sbiu",
  "key8": "2iQDH61jSmJCUUh3FKrL3LYgFpmSRpAp94udZNc4AoWqWe8H6kHF4RcUPSsC3hSr8XtJi5FcRZdNBbuy4DG4PsBx",
  "key9": "4MVxx7afnBhmgpQaCbKkHQhkQTN2T5VtwXAfBpWB6xTqygGhQBRFXTekgVUMjB2c8EnLmJ18JGtvYdbMear2FBFj",
  "key10": "4QEJ4BbDaAHtrRk8gtWRiHA34mBmokKNXfHcCnZRbDSW9f8bjZ6TzcSVFgURf5TynPiuZaTcD2WEMoW17JMqzdjW",
  "key11": "3s9uvYDPqi1Np5at71z7DhAPi7WEvcWxefqNuHuKvxCMrmjX21UqCwrs56Y8dJpnhkHChs85m4X2Dss6aeafpuKh",
  "key12": "31zxZYqY9v3Kt6qj66G27m5byr1Vj99BYMdSJ9d82LopGr893NnsR6G7HHijArqrQuvMu8MLeCbDEBef5UJgvRY6",
  "key13": "3qE56QgECNmRBMZRUE3H8GLWvoADTis6W81Tw5HG4A3sxqJjankB9cGFzvF5kfeZSLcytfP15aULRM3qMSe9oK91",
  "key14": "4eTEQ4fTp271F1GnjuPMydbQFhfGRB8rb1ziWCk85AvGKmR6R6F5NE8vVnxc17WAQUydfKk4u3N841Nts1JKd1Pz",
  "key15": "P6yH3SKrpKDTWw242UfAJyNGJGGe9jQJEheE3MhxrnUQUwVTuU7R1yJMa6Fkn6WYFZebArv4jczetQ3V5mKorkg",
  "key16": "tc3gh7HYVFABoF1taj1b4tSLRbW4n36UEMXCYsBDrU4NbpoNMqqSRHp1AJRzeU2g6dApAscVYKMaqf5eQtBTXhB",
  "key17": "3ewts4C59YQxhd8x7b6M1isfcchZfpPAA3VjRVYgVUMuFMkcxp29nd5fWcXPHeYA55P1ZKfpJ8Mw1qKwiA9h2kBe",
  "key18": "2BExk3WTyJCBqtZKRBeWsfKozEzDA3XsUPBgiCRau2isd7FuH45P33XhWGq7ExrWkrDeWQ1VgBak1UpXNi7RcSyU",
  "key19": "vZKMM5j1GJDYSy6vqu65bK45UdZ7uhHhbSXy55vYLqpEAFNbhVcfUAkZ9ondYkZ2pPYPhFfkuSa7cD3KjrjbDd3",
  "key20": "2RpZgjBhbrwcRVrWPsnXH4VNU1npBtCVJyR4HKP5xxYZZepTJoFZaLu6Jg4oA9F4so5MJjMJyYk8yxZvaZd5to7Q",
  "key21": "4rBPFot7bvspY7mF452uqPS7BLJ1oPECyVu16iCrVZivnNgUhPuXkcu1AKjXSqXfUMYSjtqXNgm9bvUqLTNnsh9b",
  "key22": "4XSY8BWKtDSPkDNTbZfWF7hX8Hk9G6toDWWp2YWbYxHTNdsMJoL7QdCkc6NdtofXe6Cjbo6jojmQ3CogN42yjqJK",
  "key23": "4J8br4beR8ALtvvTTj8r5wLyWvGRAFDxdaqrC7UA5ZHvSMY6XRcBzg47HuRuvdEHCMhhAkTSeUBgXAGrvBUHXJfC",
  "key24": "5Hxav1D2hfVDrrFPC7MRuaCvvpgbaqSc4rwxRzHfYimmycSmys4fCeThBUHApjiRvxEQryksEg9HqfesGeLt4hpF",
  "key25": "5HN9pghgifmGz8kahbFEwLQNEWGXs7J2W3qcmE3EVoV1A1FwehFDSJByVdioo2jhxwPiY4syKyiMr9vfNMNr3Cxt",
  "key26": "2G2PfCYbEDB5xpzR5oLEU9gXMpFFuCepu3yWQwccvmRVjicMj5Vd2yrtk3j28jdFoVpvdW1fFcg7SqAi7HVSevno",
  "key27": "cfJyftT4WrhCJfX3LzvxPEYmg2u9VYt65oYjhKH1ybQTGZqx2VnvgJzU9HLXshq1mUqUJJiDb42CjJmcdyx9RVd",
  "key28": "2YB1hPgMoABGaCohapvXwN7RLZfAPjgGC6gfxVX9WS5fqbTvtGVha6a2tGSnjxZmmc3UiNywkCTsrsVmzZikVgrV",
  "key29": "34SjCACjzocRWoWjTwubgD555DBUxZ4GjiVgfWgCLuJx3egBjBsNHb9Cxqq42QDwEB911SwKPtDxiXLXhrSNVA9L",
  "key30": "2Sgugh1h1NZbNpssyB4VhRWyQW633zfnZnK3QYkbmXQCUBqVTWdNcgiK3Viwu7CdszuYHkZLfi5FE2CpDBv3R5BK",
  "key31": "3piAYkSEyPy2foEuX2Gto5QMQsrSovL7wwuR9XjrcsXmNDfoLuLcfWvmXTjyPiaPFGnyvpQfdJy4yekHZVGkW4gJ",
  "key32": "BnN4FjZCTHbz51XoCsQUEqsnXKHqW2eABuAoyMgkvNY6Lg9X24j2VVC5RXmwaXeF2q6hwVR4QdBSxAeYsx4TpYn",
  "key33": "3YcfZ6oxcVs1nLjnVjMSJmoJxD2dZPT5YYp7L5H5YTGcxXj8icMq5s4sJkf8vRLhPBjDWDgbXyWL7omWJeyVszdx",
  "key34": "5vy5WdPB5G7eVt3dYr9ZkFp2Lvd86Q3ZuV7CMsgQqf6LNAexfu4XxXz8uZ4LhCVQbqzjTQWCXM5QZVjoXGECENMd",
  "key35": "2tbrZkKkVQrpjPLfDpkxBKKzmEf61moFFV8iFDQzR3HY6t6AJB8Q3C9VprphanYamEWhgGtvV5nnRFV7hmqE8FhH",
  "key36": "5q5o1L7zku3JsRNoxQNJTYYzWZGu1FkVepEEqCq455E3FPuGLjBMibUHthsuqJxfwzovpC4LmVQrABANnfVV5vq7",
  "key37": "281biPujMNNAtbamhVBj1Scfz5BwLRQ7Vz1MgnccM5pnPkFBGXmwMhtJBdWgSwuNqFUnNqgg41wAukKrZixUAb3z",
  "key38": "31n4q9chmnhkvqYbzbh52Qb7NDxnTGAQdb89qHv4Y1s7vmH2dsSWkwrDBTmzQqE9TTyQFQSbm1tckUwsnwLiMVzd",
  "key39": "5VHXuzxPtGkWthVSUUrqYbBWmKB6qMvmRH8rmXSTgsssWCopjLtWssAh7w1FxepSPGbdsyreKjnovvGyEmXJusfN",
  "key40": "44EsVQygexb4xxF5w3KjTPuchrNAPXJdQBNMsgf3YFMEULUje76QWtDcNpTiLFDZTXmcVKWNFEgqh7izq21fZypg",
  "key41": "SAax9YMrrWSGHcgfzbKdT4i4ZVKsPPFd9sUJW5ffPqDe8LqapopNQnQQWPjJSW4eX6tT2TF7wLaFewwHS5EeHfA",
  "key42": "4oCDPNjgJEGxqinQBNVgrVYCuU9LnJm5TueofSRGUA1Zi1FfYHvuetrykzXLCpd3ocga1UPy7LYngUusY8caGAjE"
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
