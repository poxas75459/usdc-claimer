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
    "3vCZ4At9hfgzhHpAUwsnS7fKVjpHV63SPNn2UHwNPb7XCzs1mgyZ5iFFwfyZQ6xK5RUmjRLR67fgNH6UCmAQroYN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZqZUNGFapGTnoRzmwv1bY9FGRkKhh6DJ4tUnLdT7zPGqav8zuV55cbnaKwQcLkGawrNtBMpWDGHznRHxMzQmVkR",
  "key1": "4RmSooECHLidRhyu9hRKpFzirpVPvPrS4auxvZAYtyPSRmvPE1ppXmpzf3vhBdfskZxoavrQBPB5qcbTKz5pLh94",
  "key2": "5E2m5VVVfGNQrXwUNxo7nMqtDh41dih8TWXK1wMUqecgWVDaWsV4m9y7CaXNUCwB7htpPm9xegYrCPA4svLjrxWn",
  "key3": "5a45fMGp12s2HP6H5ViRR8yEZ6cJ3Ye9Bh9mfAqq6TKmQK4Y8CyxBTu9QGrN5b53TfrxnC8cg3ec8E84rkP4jT1x",
  "key4": "3xwtLf1VKyJK6NkGtHWL22zdvRGypP1rp2mgrG4zUYyMHwas96KYw9vWuAFWoNd141NgvZQJBnG33SA7nwrMMqoP",
  "key5": "4bKaALS3evE3odHcDcYTdX1hBc1bqY4uHY65DtSKPeBuRQHhb7uzA1koZtrpL3L4u7i4TPc99p1Zz6AtswS49t1M",
  "key6": "5JNwCVTyF7eE6U7g3cqExgEDtCVuug5pF6JB8ZFnLzS1ZnPhuGR5Z2kD8A4HoJ9Sb6FUocKR9TWFFmgF2zjHzFHn",
  "key7": "4rQ5gLdiPZ54dbojuHxzc6BZrZsqdEnRE5uixS1iPCS6wiyaJ4homDo3vhxMCrASquLtz1BY9sELjS2GWMiEp1J6",
  "key8": "5XJNV4hmS2u1T1uoU1rMz5Ku59EDXu1zAojRGcyRFBan8UzmqUW6ZuH82fiW7khgQ1bh3S5h6yNy62opuRUcyBPU",
  "key9": "4SVdUuYYpCvV8E4nh7hQ6tL9bBymr6XrmtiEcR8C6sznVACYpLiDxYFVihwNcbQBpssjBKPxN828gT8VWmLoV4UU",
  "key10": "3rE2jAFBgWk7VyRxe6QQbHeZ3NfWiioHjMieAqEUmD3FEsBxZ2gcWMQW4rgcR74FJuuwMNbZMHyxL5xEJHwdFgfK",
  "key11": "kPeKPVEqTxEUHdKPQLHctduxVLWmkFwDfxcudrf8AA25rAiGne6tsu5ucHP8VN6KyVngqn22871MrywWaJ5L4sP",
  "key12": "2Fpikhk2WbBMH9KGWJDaxiU5rRUgxkQwJbge9CmJC5hJGB7dkdJgogmNEBpwwUmQSjxJf5FvcdAu46zbWzsKMDVD",
  "key13": "Exc3b19MwGYB4CrswXvWCwixWYNkTX7cMZ1kWjai46hzWDxi9N2NXS8Xnr4FGpezxDneAxXcUXER8SQ1fTa3Unp",
  "key14": "2pntgpHbJfS68e7Y32L2LdDm2ygok8EYQJV9Zm8wTod6gK4muyTpNqSBonXM5r735j8w77iG7mK1SKBkB69dWNgb",
  "key15": "67qsLRqH3omfjpAZCX1ddDufPEVx5LF4X2vLRpAn8UxEbYYTgGtahWbmDaaHpWabMziiBRCJtLMssMT74gyybcVS",
  "key16": "52JQbiPxzKyYiXsA7arv2NncqjmN3yLBnVoC1T97ZzQQ425LnkU2X9EFhdRVyJUrfQSJgGm3jiWSd2qbtbZLNpie",
  "key17": "4faFQTuQfRvjppjGqZBH2Ybs39JZS6pz9tgbZDbLgU7ADgsFgH2kgfJAojjJnZ1TF7ibfbfjWdBCuA7dpin3vpUu",
  "key18": "YiVJpzFnkw7NuxfDmtG4nxR7D78wBaYkRpHMYNpvWGKVCcLephGg4VsJyuvffk7PPSpDdDpAc6jJssas56ou1p7",
  "key19": "55LjTL3mc16DHueyoj3gMnruM59mm5ad8TMPe9yypo2deffcVp9suonBMavqxrp9WTvomPFYwjREZHnAoaaDiV4q",
  "key20": "2f3UdsKzH1TTCbsaDCWaZE9gBJS6uZhCwWyqjZvhEijQ7dmzjtCZxCVwPR4mbtur5aSxBrev6AgvMMynpDYJr944",
  "key21": "3MQ4rCiu3JpMXnwj2SajF2wrhieG9BTf13vWr6EpLyTGPws7QGJgGA8ZVVy3iP8h98i8xYikbaoTJ7JZyJUUmamp",
  "key22": "23k6DzczwYQtKdDUJg2mCUy1gLrwudYN4U1z5e3vt4ehsDNQ2Xq5pT6ZNjWbnbjJ3YHcmBMNWgssNUeqfoXZToYY",
  "key23": "3jprQgS73pThhG7zK8oUCeNSu9ZZRkSvhg9sZh9FnZgq1gRPKY8HJzPgrVmwCxqr7qEsZnXiit5vKQheFzcmcUTb",
  "key24": "526qzkqRCLDH6TXXhdYPwksMNcPdPndRfdTBBs6fQiy1x51xPyhTuHLPxj694wHXRJB29CH5jR4VVrZd3y9dXwLX",
  "key25": "3fBaoRFKcLMZeW5BnJXGj26omPafAv14m6SkxfVzu1WyQWYvdMdesXry2FEVcepBhrcLPjHG2U6JvEBS8ddVjeFe",
  "key26": "TePxeuut3CYMjwxC7TJuGcrQ3BSUjzafQ6HyixPL37VSyNsqmZsGrZzT7VAjidaEBztS1PpGWqdUCxjY8dYmFvT",
  "key27": "5CKubKxVcD9M6gwQjkSN6bExv9RC9J8fypyW6CtPWQFeogDLuQqi86dw8Q9wQqUst5N3cpJQ1e8AnBN76qsPQw8m",
  "key28": "3BFrk3iLUtsJWYRi7XDtutbPmdvv8fJdfgLhXYuqF9eAKZ5P544um498FAETN4kAFsC2yVGjfDsYaJYpsehe1x1x",
  "key29": "2YfJ8uRoR6hGzcRfQqV1EqFaUV8u8toW3v8BRxMjuJeB4oExoeY9vb4sHoBkXfNBXJ11YMz88Le8w2yeL8mbAUn8",
  "key30": "Yxdz4NyJCqWExxEZArArjgc613ABzLHLNcmSuN1iXpV2Pwq6jS1VEdRhpoozYVMyHVwXiK2i8hxq8zNMvr5oBre",
  "key31": "3E7GGidkRbbMPs9JTyr7tXmgoYMWstZTaCtVViVNRmmdNbq9EAewsdgY57nipLZaoQ7CnvBY74yPaZtmbod6CVRo",
  "key32": "3CacnMptGtbCPw15JB5We2x2v3kV8DVw9dv2cD5rGoYzgSif4AzV4MmoYt4oNQAdtWdwMJB8FNyx419ncANHBTTY",
  "key33": "33HXGseDD1uSfaw3K7EnDjnFL9NKDkd7UNn3rQ9o3ASSbbdw4ukVCaicZM2VijS6sgNo8xjcwTFtAiFuVqEqGm31",
  "key34": "43mRdA9UAtW3UNzfuJic1Hu7NHvd1tHDW81a7CBND4jTjhfh7GLiq3i9xnxeQVNXEktKXSg697o8WAZ35Cdp69aq",
  "key35": "4r9tG2rSTon4RMmubjm1YorLfad2yxn2v4wChsqj6qNqn4SQPENzz3Te2Wnyx2wdCN7qtDxsgXBUp6RneMj1sC3T",
  "key36": "3TK2YCEpNE7midAz8NtSXbCuXtiRyMTtTXeYUgc3S2K9ZTA15f8FkzDTkBQB7rCHnkDRj3NLJa93FasABytHgQ75",
  "key37": "2jNfGFTeF18G1sFtMpkRcGaao5C7S5Ttimcvvbr3kroJjHHPz19XLgS3f3Zk94G99jCJw56cPHjKExQP5CprsStj",
  "key38": "2HWYa95nuyLTAKvefsdMP8vLiCrchztTVwqUCbfKGMbFu3stnK7Em6jEN1SbCLUjCEupKsf5D7BhJvPmFvNqm27S",
  "key39": "2PxJokvejB7jqFXxDnxDqMLzW4c2XJDPoNEtkumXVhfbmSXRWd2nGb7SwuqJfGe962ExbpHKNdt9UCvTzdhJvbmh",
  "key40": "2NJZJzxAHdNc1jap9QY86qoaS9z6qokD7CMguxW2se8x99oUJunZKqJPr1Y7o4AFL5VvZfy63EFfsz6PfcK7eYXC"
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
