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
    "32EA3r67kL79ZrHrM9993T3r421my4CfNfYPcQ8T2QKRdJka7StqRwKvruh5GAJAAb7uFYrkxF6mgm9LNcai1y2N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mFJTQ87vTkMHb6tkurHRTBKcaiwdD9rNX312qEwhQ14eraDGLDhZoRYKfRqgg79eBVShu8QcDfbP1UgbW5TcBzn",
  "key1": "2kn3AKKneDDiHRWdHprCegP9ZYjBUe1NHKxMAUFqkJPL2VcHgT2h2ynFwdhZWqZ7wmRPQfNjJyXJ7rezhRbrWr7T",
  "key2": "srDnSXUehKrRTHBDnT6Dk1WfcvsNEqED9qfbZ7o39HeqWnbpw14AzjCL2zoEYbunBvFtcrRTPEdh11bRgo2VVRe",
  "key3": "3Y7CGh8xASqPhXiWVN9uYy2crAYtoJySgWx67kQTvbAHuzZ7iKUy9ZkcnfvYfksPa2kq1mfq2MMUzNjvfTVRCKGZ",
  "key4": "GzhKMsCLT9HK6zt7a6RnJ7ekA4KWneH4zD8isuGCSEvxnyAZsdCb58aeCd2nWCamt9euWdLj4unSTj9ooDSg688",
  "key5": "4a9EveQzoJr98PmuD2cF5cA4gNS5hzyhLkc9cW5mdXMnhjaMkPANK89NvME12FSay6ihqKp2WmdCtE5nS7LjxScc",
  "key6": "FMpnuYPGUExZwUb86Mkv3wdgyvPr5HRwBiogz6giRpf9esyUCqZAyydkSzWfeZ7111EjKLtBjchX1rjHTyjkk5F",
  "key7": "4nrg77i92W7o4zdEN4h46NKo4Yy2kKGBSc6ULZtAxu7aMET8P1fppm6VmhrP8VrD5YV8ZQPKtEGspECTWMZjVn89",
  "key8": "2EgWjz9hGxTwcZL5c9y2r49bfwHA8g2NbadwBXxARyUHq2wQsQ3NgL9x1ChWyDqDCD2F4erRqDSLvcyU5D4erVpD",
  "key9": "MxVjaWwFRUksgi18d84dKcdkiHS9w7EFkaEEHRwpoSbP8azogAxPBRVDP7r9qREkGcusxJDi83YzUZPzE2c6zJ4",
  "key10": "4H74z7ukq56KK7ZUgn9YPbX2SoGcL4okFKfFo6YvCdDCKMyMhckfuhCMXcm17cdhdC2WeYLgTpsujkLsDv3epJP4",
  "key11": "4H6hXsdP7eXPk9NGbVrEZ4DKQiPPzk3rLvmjUPTHQVivFvm8zPFBLQ34yCc91VGoGcoSkbFikNW4e21nq4C3oEkq",
  "key12": "3pFazkxPL8tQwTusY5iDFocZcqcMZtn1Gd8p89D98TE3P15z1jr8R9oyHeDxueSdpXUkV2Myn1muifx8gzorjBih",
  "key13": "3uxTQzQFUSKxj1KEMz9TokUqBCuTUiT6BXEXSVwdA8R7LMKWtSsUneKbzbVFJbrcDxSZWVzMfcn3udV7eApWKzxw",
  "key14": "4Z5KwkA4mzSXc9GAoGPxiLGguA4Lz8gxk7H2LvCyZH3oKhUnh4xrzgAEirJm8Vb21kA2MJE25pMUpMkwc2mFKHhU",
  "key15": "2ZTtzvR7Lc8CGzpcc3gAv12MWeVbkAkxnn7YPx49M5YWJEDuoWhdams8dcbgd7dGSgH3PV5GPySrsCGMVf6ZU2A6",
  "key16": "61YDGMddSrjp8NdPfxmkDLvABJ83kAJPjLhfqToyNC3fnqjuYz4SKFqpQktJci6bSVb3BKVATdE8ab3SJJT9gJEj",
  "key17": "53CqoN6NtJtsdzJFArwJJE1AfDVVZnvtSdNGwLq6sZWjLcoaTFLw4M5n46EZc2h6iLdXMBw6sseFah2ggkLZCtHw",
  "key18": "5uUCnv5epZAWwpygPfjBK7q84vSXe7exz7F2s6Ei1NHGx2tdVTv7jo1WCLVg6nuEGPfEhaTV9NoHtae9wEm9j5cW",
  "key19": "2fjvqCPevUeyqpGxJkCx6aB9WewiTqAoiGbKUZAtgk8tMjvjJja4SWDMXkBMdhhPzTcnD6JVKJfTKSdiKnFVAe4H",
  "key20": "2q2naTWRqGFJmQEz6nvhGv4So6wadFjNeESSnX92Hdg8PzvCPvqtQWa2ik944VsMgTUShVby4TBJwAZ57x9Le5cv",
  "key21": "28q7LrWScu3eekkhCYKhsxibXqMFr591pEf57PtcajLeLhtm2Q4rxuUWfaUoXdiiHSkzCMh6r8Mg8HohWTcwTxTX",
  "key22": "5dSFQs4y9fNfezVV9v2B3F8dSdVmTUL1mPZ6CLU4jBmvaP7bC7tTRk4iUDhQNxHA2irmUbh1QNaZBJiQwGksKKcK",
  "key23": "4fGYVoMyczJBXEGga3ekbZCX6PdoDeDq4QGpKw4y79W2zcuqfZni4Rssef7NrCiXpHVWuSwrKLSWEtoo1t92t4kr",
  "key24": "4gFaJsBpNGVJ6nQXERK7WyYqbJ4hUDPpnM2pF9XYwyQghwDzwKrmw9zKMNTeiZQnZxeNxDn9d3sBgnmFQRZKbjpn",
  "key25": "4jjuHi1yNbtk7yZH9H1v7USPQq9pzCZorDGa5cHzxAP3VpkP7G6GYwQvwtwJnB9FV7jAvPCvbU1oHtZ9vYt77idc",
  "key26": "4gfq6vFVjrB4Rfv4mS1Nr1D9MospdS6ANQSZ3hbBmomBZqeHi2BmoiR9MoL7EQhzuzeoA3MPQUJPzLkVjBpfDPbg",
  "key27": "414wVHL9KRgJhK9os6GefiET6XgR4oJJc5s1LwaY6ety76BTCfXKimkXeZ3kNSt6pgEoUJzE2mcYjRiKaNbMxc4Q",
  "key28": "4t5Czk3cu2sqbwWuCyJPVRTwPXvvLLGKG2yCAJHVoPE6eLzZfuEWurCREUPrwanyckigEboAP3rvtfkSsMmasMpG",
  "key29": "3uo7EZzqdEv7HEBpCZognZUYU2XV4C4Xek8C6bmP9rJPJhqUUjw8qcyZSpz72PSMw8xRFhsworE6bic2vf1kW8ui",
  "key30": "5WawQFpa5e1FuyUWLh4XhAZf9frkRi6nG93RbcvsqpgmGRK5Nj1RrJEQSQXzZ1NgsUmQiZkHPY3cwuLUhnhhaUTe",
  "key31": "3g2Ch5Gf5ZCoJw1JGdJgSD9rmjDyEBhsTMhsLyE2RCF7fxgyTeiYNu8zef7Xr7J153NMfh35aH3SPeittdu1PAMJ",
  "key32": "3LG3qdY5EyYsjeTJjNf8gNSkQyStsW55w7ab4FjKA8pEYPvLvWPaos1TjUh4KPrR2zBV6ZTtAguWnpVgdjQFLdH",
  "key33": "4vysCMsz15gg99Xqtx8CHSULRnJ3v2P8Y8EerEmVhXmYX5HqmXaUN9BpzyvguvGvR7HcWEnNAJwSKF7ihH8bKsAy",
  "key34": "SZaSR2kZvBm5uvi5eC6V4fNNSCL29h1kNYT4aPQZ24aAEmmQrWj2HA1QexqT89B3ABtqKJb4KRu2qQdaJ54kJaC",
  "key35": "VF3x5vavU2BAzx24y2kntTmLD49aXgzMTKfygokrHmBc3aZqMqZ2inMgaHYPkS6oszQ1KDNX4oa3oGaNjEhVY6N",
  "key36": "2KdqoHpC5dbdxZ9NEKEhvCyDrsACiLzADz72mGrdxNAPAog7y579LtTxwj39EBNAgsG1efaMKFqLenR4xARRo4Um",
  "key37": "4YHBWZwpKq1M8431kJvtsS6eZHCnbErbEq6vUKZ4U8JSk86LtUy8ns3Bz4QeQhk8zBdDvy3wHuRQ171vEWncojJY",
  "key38": "46dWFStcyiCijU7xPcgQPt7sRRpb6qRymCccSZvuCqJBKJGBAkQ1bAWBmKmrctkUrQgcm4oAreWHX5dEjMbnZkxw",
  "key39": "5yJf91EZcYFGqEXjcJh2oH9gtcPUfznL5CZReDwVVSnwn2vEzm5p6DUAJDaZVCQPyrvSaZNs1mYh5JfAw3tAubJn",
  "key40": "3xy8koE8fWZAHDrDQAM3zSeeyJr3QgVUkSLguzt3iYnxzSz4P7YLYUu4HqSPP2auVyzj6wiQuWgd3RZj1fya8MZE",
  "key41": "aMeKGf6V9FiNfT2VJGSLh1QZkLd4MqL2RrLR4k8PrHjYK5n5RnKKMyLp2ZqPrF9aapGrcm3QCa7vXtYvoHoVMMY",
  "key42": "3TeAciwtEAfdtwW1sAmbxbNbT6MV8s5ofZuvKLuMjWwsHNouZb1bKvaWU1ojSTwDQ5Zs1mSqAdnsHTe8r3kW69S3",
  "key43": "5iHKpYvqhKxjQ8DCLFqY2upgx1YijiPNguwqjJ29q7SM7w4DFURTjtmq3vQ4D3c9Jp56ZA3fD3SmttMMMW6wzh4w",
  "key44": "5JM7DJiPkN21zfi9WB9A2a8B5zywSFz5eKKTWtqPY6nsg92HrhzQgLuUyCyCVHvcmQZEU1A2487cHJCtC6uL2kug"
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
