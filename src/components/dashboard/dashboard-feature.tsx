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
    "4RQJ9EPoWo6dbGnJ7yoyRnrYDcVBJJSoR1AkrxLyc9UWd6jsNiUdYvMv7L8kBLZpopxQJ8rCU4Cci4EqoMykjBXF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45sBQMgjimHTPRjgdoTxda2CasW8tJi6a7UjEw7BWqKZffSZvKbq7SYPo9wfzJE5JM782akRDo2NUS2e94Zk3dqR",
  "key1": "573f3pwveUFYNVLyVZzkZxqXg616kJ5SPTTUBMTJ27sCjD6FKJBa7LdusHpGad2zMxWpUTkSmyCV9nZZgJneu6gb",
  "key2": "2MtVhub44gRJDToDtWz3PeFPyb362WayMFSNPZcUfdPfocKYYqprS2w3ebmNuDQcxnfmUjyPNMJY1QiZ9fum9PRw",
  "key3": "uSfA9fyYXH3vcwQjL6wrog926fbGLrCNhkp2Gi9KsQiAokbQuSmXSYZh3wtQZ1LVmyHqFbBsKurShTXidP66T6X",
  "key4": "67hsJEXVtkUfoSAxBkki9BPzdJg2FJjuBginAfhKyTXeKy1U9JDHRuJ44sZvyc8Wj9Pi963u8jW9E3N7j5T4xV3h",
  "key5": "2iA4SiFaDyWQq1wFS4H9wCgpoMPDNS8xZQfPa4rqfdXnHrnr9rhPM54aNuVrwSFZU9jjuqLYsZwJTp82q9p29RxS",
  "key6": "36Vf29aZvgndyydvTw5bhemAT6r4oGUnVCYKku4N7Q7fz5bbsZXRv4bHEa6FHFakVNuUjTRPKapRHRHcimo7cErb",
  "key7": "Z1MwAxX1DuuEYZUBecm5n2bbnNs3LnjGwTskqoB6k2bLv6QCFkNEgf52maHJNHTYmaM1CZiuC4MacfakgvVYiLF",
  "key8": "ytvnuJ1E7AzYVo29sghnewkMGAs5PAhhQXhYVS6SBs4GtG7dhvAwd6DsUn53pZVNc4941Mz1cFU1k34uXS8bHNu",
  "key9": "64NEdUzk2GSEx64xcJBFntC91RCRpADAFYSe5un83LhGvrNoWXZUqEJCxhhmdQe3AnXVKxcRqhLYhmoKD5wZ9DFu",
  "key10": "41WDsPQG8yFdJhRSRc8Wsg53tB6SKWxhCGJ6iBFJiprjzHsz9uwt1n4cWrK4wkMTLdnG8WSNywxNdMKezYdd8BY8",
  "key11": "h1FBWUt7sSRMzqqDLcEfJN2WfqEzd4G9D26zye91dzwfFSzxVPiDxMmTG1q1twuJjtpsdUm5RMJxHgx8dFkMGFp",
  "key12": "N5q6VMRChuQeuDud3SvZn5fxyxntvP2Meu27UbwoWJd5wqg2g1h5QBPLUnroEEUb6UkzK4683RkFV8EoCU6tqqp",
  "key13": "3m23XNv6RCmLtuT8eMK6bEtvB41mWBQJTuMqNALMsQ9dAnorp9GWZeWPxLvYoqJ7gMhHjvK1tXLEDSpVmdG81iPM",
  "key14": "39V8tsJ2reaVWxACVb6p4Pdm7BsUR1aE2y8uDMAnSg64wiPwfJx1vqfwnmqiLL44W75co5KCPgfg66rhtsFSjRkX",
  "key15": "4DjoX8D6CZ74pR53V5spWijjtjqHZEc8KfyuiuAtcwwWhHeNKz4yGq5fsdbuNbFfTGqkfRQ3eVxVCeUNFXpUU1FN",
  "key16": "uvB151Nxb3yjALjt4afEM9nGxrHr4PRMAsNuZQUV7CdA4JNyVLB35VUNjkypmFHychu7NLAQf3SrPmGafb6s2Rb",
  "key17": "5kP3F4LfMj89771ZNKLw4zdftjrJyWJZPYSi1MqE154d6LPqYnzCcBacUAuMN6VwgshUvN6LkBmSyS11So75FZWS",
  "key18": "5cQzgh869mccq1tgZxrM3hRawxFLQ32pKtGMYKgMW1maJFef6bPycoUPKSUeQ6pc1GKJ1SufJhkthQ2u7YZJVTLU",
  "key19": "3WLgKXv9KFqEhX9UdNKuaLdDzNL3nJTfmQFpq2TGpDs6MketapRhHqwQcWG2PgHGie2BZrr9QLL9XFPToUpFCyje",
  "key20": "5UAcBGa3EdhgD91L25UaKC5g5oJUGeSrS6jkDZkq6yoiKS1q32Zn2hYX6K4As8WCNx1rA1zRGgQTv76seAvbLXt8",
  "key21": "2bDQxgNq9BwGvL7WYsbbAuV8m9zUKChUUfePZkHwZ7Zq2Utz31vBu8s32JUheNKtDq1bkF7cfKaMZN9WiQYH1EHA",
  "key22": "2T7mZ7qpVkMU4a5gendtnN4gV17azQkKDe9xF7C2t23ToVmFVpwgBKSvVZz5K36sKA3cBy6iNNDNMtc2Q7gYYu2Z",
  "key23": "3dC9HtE5LTrP7WWB8HfqqYc8vhdCw6VMsNxvDEheyTmEU4PQ5NT9rh7G9m3Fo9KR2v7XL7QeNg391BcMV68VV5vK",
  "key24": "2KRWtNUceBHpgkFkaFedGHqE7YP7r13SCmMapR2qCTp3bpAbrJKKVLRPQamBsz9TSsRjiPjs2nbrmU5xHVAhcLPM",
  "key25": "62Q4vNZs1dXgDdbMXe5K5B6snJM9zfodKkDRTuhhsPUNuhuzAFHtuaNps32AbrguVjGzsVvDWedjH833aXSZtjMm",
  "key26": "3tJtx8PLzBNjPsX7iwYf8zihoTM3cCXfr2MFgBRi8jhPVSfBm9AoRQuSnaJeKCNy7XH4hxH2w68ycKnMFTCLB9wb",
  "key27": "jqZgXUuCjz6h5X8jpqygVs26YtzjJNvuGZZG8xvAS8a68iF6b6VAciVFnxdHYxwr5b8TzuBjs6hPKuLZecMVAbn",
  "key28": "4ViRTwM9FQUXHopKeqSLejn2uVqFAmvoR4kVSWuCzm2Pcf2qWvGdjDKUpt9mvUKXhkLeDit7VZsNYPGFyt2z9aY3",
  "key29": "3ZfdBhBkDtPCzKmtSXYu7MbB4mQH7TMXXwLtCMsJphFhAwcCVRKKeDXoxW5kRWx1YHqjmnruCuVQ4w2dSKELhoXG",
  "key30": "gmznsBzFBkMEDPsKvvGdVbTxXTTtmVvCg3zNBGCw8AH4NddUxweVM1maeEyvbJi7LHCXQy2wA9MUyHq2onQcTAo",
  "key31": "2g6ztY3N3kfCBRSdZTPSoe6s5tKSs4BUo4K1kC98db9mgn5SWJUWcNB36Sg7tgy38pJEpuF9S2RXzgDX7TPUCmWq",
  "key32": "q692vMcy3uvwNB8XSoR5xm9uwZfrMnyMZwJnfih9wqDpF51kZQRuuQNefPEd3XwqXGtkbQiwVZKBt9hDFhXds2V",
  "key33": "51qpuU9GMCyyJFVyNcW4HhcXT34ztvf2UV845rR24oNZqTxoBu4eJHZZRxeD9t4vYzkUCKm6QAp1bK1e84aeNRzc",
  "key34": "437kaHYFaL8YbgpEaoa9wBCSBLjUzcbSf3Co6L4DuSP2P9nsnkCajQuUaxtay8fyHkLruBTBtZ31RXASek7gCHAx",
  "key35": "utLrtJnaKxMr5hHBjJeNg7BXaZn3wK3dzxn3nh5ZbxZNwXJc6fECtxMgvb4V3oytfvZai98Xw3PNyb1qnRE23k9",
  "key36": "8ggEibe7jghMu9MHPuBtWL23UCTwXv9xwGuv648xmrwctyRn9ss8WpFpAMMmMgD6g1H33cxXGpVpAp5JbdVkEcD",
  "key37": "2Qm7nyziAghoZyuZLjLMNwEqmQLxbUFMHDHLTG9bNxPcKMJhm2GwMaFaEqiuxbVKpeWBwLzbefdhfYmB6rmaxM1X",
  "key38": "56DcpqP55ETzbYuvFEktuG3umxrnBihBcbpVjptt2zadXxAZoUsUca3LPn4Em1Xo11eDzQRFQNWpyY7smagguKyk",
  "key39": "27m5zBA8ZUjBaRLPWxYqqjAJFWAMLSFdsMww8xa2YZtCJsU9EntYNAt6Nj9MX1YjFdgMP7LgrAfMrv6Wsp2jDZL7",
  "key40": "2zUhgxLQwmRBdU2ncbWyAsvBLpApmBwgXKnsVwTNDBHwoCt4Lc2cj6kFmxDboBdiUhxs3LovcTgVJLjUj1GuDkNV",
  "key41": "49xxYV12gtizCXezrCRPJXYqw3tAVrRZfX3BcGA7UcYfMbnxVgSNp9DcU5rjciMby5faFsXApaMR2w4DXhjTvwXw",
  "key42": "cJRhvFcNdvGwcYtKKteZ816pRh4xjtsBEhe62SLc84VjgvNk9HzV4qU9YfLU8wm7xrcmtVAz6LxzqJxVMNLGxZR",
  "key43": "2gvrPRGpVD9cAhykuCBAN8kFLkqRLTUWmsNs2jS9iQDcpdsonBwCVsCiCzUi7L5Cb4ZQdVWP51FBRQZcQx3DBvau",
  "key44": "2F6VauJtaKMWR2F1TGCw6gk5w92FKKRZdnrzaBjdjtrgSocLcVAE67wv3z2MEnVQeS859ndjLPHJqXQtTLWDotLY",
  "key45": "4PCkxD1kCJQhgyLJHyDgBbEijPX4Vz53Tkfp7SQbqUEsareR5gxKhg7TMbpo1ZkF1KeeJjm5hKPyTYX3TE2vKdnV",
  "key46": "eYXsvvh3TJ8BJcuQyHdczZHw6sA4vMvxWrMBby6xg3PNgcvQrP6WVECj3UqpigLnokq6hZeYvuLx1VH5oq9MrgX",
  "key47": "5t9nbivqyYh7kHvWKiDKY4GUvha5nfFtHMJ13pKhczEjbDrNRRpN6rmHouAtDzBUnSyhZVXDMiuccSYtAf4aWacn",
  "key48": "5hRmY7rY5xpicLtLN6RxsJ2kBVcdvoBTTEidyf26UwshXT9irmug5Q1AN4McY4MdBiHxHVh821bzaqcC23dp5fwj",
  "key49": "2JmhWgXPa7UPAN3qV2ZgvhXF4P8yRH4y1GodhJEHBoZDv3LxsSCzEaqwPjE3p219Pw7gPx8in72Y1CwuoeafSmie"
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
