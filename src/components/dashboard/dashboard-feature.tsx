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
    "5RdZ6xagsauumYi5KxkvWhpVZhz3RcxnH1LgFRuAfXS4o4KDBHV97jsCHhqo6G3rCUXSyeiKHDbfQhZ1VrQCH3bX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5o5FPs3P2BnKxb2EfSSWgM26nW4do7REnvCt6CQpNYLv7mAG5QKN5ig3nMKvYapm252C4tj5tKwXtnCB2tnUC1Cg",
  "key1": "3EJNCwWjG13FfpBPBygUev788Drqp7g8uP9UKE9CN7zrYyxtVn5iEe7afHbMF39YQLbCJks9WcfW1z2bfyVmZveL",
  "key2": "4ezpe5VBCf2n41GPp17kfWcWLvpRd3hg1oUcex9QxyjdCRnKdWbzyt4DWoW3axiH2MXY8G2RAGiAC4PtkHJMwPfi",
  "key3": "6Lg4ZY9qjzuF2CfNy2WSHELttGjw6BefYz37hcbZYWr7ptxeyVsthmSJVE4H4fZoBysiatq4Xo7bfY1urV24Z3u",
  "key4": "gp2hRzp42vaqcBtVwCEt2FLvbJP3ryuWULLR1ENeoFEbMRPBPv6faDGnBVnD45TpzqT94kFFa8Vdkk3Pft15miv",
  "key5": "5mCNkuvLHBTXVGZfmQxaX5kTozNyq4CRmPeyW2GqnhMBx6cFBL4qdFV8yrKj4CNVHCixSsBfDDQrr9wSq86R35cK",
  "key6": "3myMvaB9uWrPoKmaptS7qCcsXukoUN4dxbgANJwJTFswTw3Ue5nJQoC6XyeEgfMjh7J535hZCHWdMKrTW874ot8X",
  "key7": "5BjVpa9Fk1fKRbLjxXFWtuBjzJZdwKvPFe8egGrRGJM6onWt8aAj7T93Fj28j3caVrKV7oRae61eXqVuZ2ejRCi1",
  "key8": "3YDpzEuRGWC6T3jtio8mjQTvUeX8HBMs3RDiGXBdWrNP6tRmKd31HKiBZtxb3rvXwjPryU4Qj5aeaRXLPYan1YZa",
  "key9": "2a5U4gMbQozu6LbcLokhBvEHkSPyQJv42gEjR56f7emug3nyDFDNuEbUJB99PTawWbzZwWjuyB5MqWMXXTfzDuEp",
  "key10": "5U4ZhrQh6kqqbpEKcrbsZR3iFuWRqND5rkb6DzjFzLwfx1P7tABr2LjMMZ939mR7nZ9fjpVAy67yuG3Q1fixpoB4",
  "key11": "3KBG9qsB5tEncWGoF9nxgryHJzNWaqAx3DMq5At73cmssNCQCo9JY3Vwz4SfoV3xwKuAsvDtHvK8AjhCyrFNdAb9",
  "key12": "3RUQxiYSj6kwQ32BfBGTkHKGSekJMeXjE8wnfMUEtWaqXZ6G4oGHFRdELBNvayjT8dRJr7VRWM8zD1FK5FSfepo9",
  "key13": "5omDKQ1aXRydrEonx8XNMf7geMiaT5cqSVhjyWBTUtJeAheq7agoifYAAUr4njckMHwAECgBeYnPXksEhAdbcbNo",
  "key14": "5MzJXeYNzjCX274qah8Qtcgs2bq8ybXJCZPfivN2Z2Fh1vfF6nZj74xfx8Vw967RGzF9z1DDT7RA8ncv6rkKcTe2",
  "key15": "5uGyiqYBtEYQzrZQKaDzYP13pH6UbFThzNCWx4n2sJrxZZYAVb1QaKpBuzjvWfkoREMYPMEpNH1RxYsXamDm7UjG",
  "key16": "3xpWQ642Z3bo8nvV8WobeX9M95BgqxpP5NKjdySXWci5QxywxrEkMKcyihCsuvWGKpnmMLZqgfp2pCgVqxw9ifkW",
  "key17": "392kW1KwW3uYxTL36Q3zQVYDweS7UvPMQYeewPQ4Xn3tYPcpr9XqzX66L9eFQBBKYzNDdzu9ftNac9bmVDBwuhvB",
  "key18": "25dWdWHYcxxHSLEMKcq6sij3bemJ9nW1ywvJjntgwz6JajjDVwjL7xYJeaQY3sdsD4unRRV8aYPgK9BFEYv9q1mB",
  "key19": "2qb3NDUE2iN4Qj7CceVmGcYnRtsXRaqgisVx2XHqGKMMUGXvxsAoaUeyAgakbAh8GPJjEVe7hErF4fVSfno53ZVv",
  "key20": "3QEZ2eX4Ebj9TFtxHT8Sfg6oG2Sw8uXxeDV4f15JjiKQAtQu64UxbVLax78hXvUqv3w6ZGVsfaRfbmS7szNVbUvN",
  "key21": "653i1nR1seMUA34Exc2TZhwmQrJPL3x15yDDGc6BLUKRMUTats8e6VA2a55kVqBX7TwwxjDDtnw52fETVC9G4XyT",
  "key22": "4HVGE5Cz3Medv1X8Yt3L9NZ7f58JYbT9PWnCHYzUgYw56WsHVSY7yucN4RvfFRdL2NVMFpkyGMQkMtBu4GSxvcHc",
  "key23": "5whDzLbZ9GmkWn4uAU9USpbJRRjKfjVANqob3Jstt6eCbKKd3UQoRjZFiWhTuPfjJdSkBEte3XSJw6dhybDLSkBa",
  "key24": "fzsnbZ3bHzfi9aRGQ1fLU2GSDYmqR7agFkdWLvpJtQQaVD3xCqYXFfHSs5MgASCf2w68uGwU678MSTyXYSUnpPF",
  "key25": "4oHLFxgXUpomcLGuf79XRkxvfsE2NBwEVJ97cHDBXCGbDckkx7cvkU3DQkLPjUBJ4B9rpyGUVkXEcUjtbNv8VdCs",
  "key26": "3FyZqmuEJWisq9F3oP2bwPNSD2bTTpMojTUsdtPLCzf5dZSyYVy7WJxuXPVXk8nT4sZSCg6mkLetA3pq2kWG8yP6",
  "key27": "kyD13a9ZPAqm9XRcDU5kCPZYsY9bZW9WYggWDKw1kCph41vWFm61PHbrDhBcsf15t4FE4uVQr9zxGJJPWYsUTKu",
  "key28": "XPyvQH5iFiae7sdwAeVKRHpRmmr6ataH6i6jVDHhHjXF9abv2uczdRe4Ahr9xzgjpgqp7pbsZfYPh6QhSDtVRZW",
  "key29": "5HNS3JRAKMrtkNNu92FkV9h61Qg8a6aG8r3KapVkfstA8byytontXNkdGvV7a99Lk4QKGHud8mjBfHJd25pgUvFj",
  "key30": "2z4XzS86EkBKb3jRPaoPFkcSYoskyqx54TnScFEiG1BAvry4vm8sh1RKywcFEErGbCvCBUHxaKpqyoCgQUvgg8rt",
  "key31": "53bTsTBD2M3UpDUJjnD9okbxif2vyW8cKMM9q1ENr3jDknWSPHpxS6Bwv1Z179iTwu67gW2SWkkM3543XgXiTYf",
  "key32": "5eVr9ZT4LwB415vtHiQDpHJEABfJBjZxirTT7pARrYDUdvyvdnzPvQdCgmRkNpYkuRM1Db7ig567rBhtoPKSRp23",
  "key33": "hnkLW3D2DMkYJqLmujmD86vJmX9w2fwcXa2PH9gLiRKgoNUYfBhWSFwxbrzoKZfTx6c2wkK9YjjyhKVa8qkvrhQ",
  "key34": "4hjYDXiEEDNMVhNmMJYeyTNmx3pJSiiPpbsRzCnTHMfgsLakwn5M6Lx2Gdi3j9zvX3WS5bkARc9xkNb1mTzU9jXp",
  "key35": "3FUppUEZVkj9RWjVG2k2T95h4fSar49LV1xYBQWzQ9R5dcGKsePf6UroATJMtw6FvoAsjwXsnp8e72BiBuegpofR",
  "key36": "5VWbShNTb49GT2gF5mYAh7JmFqyA8AseMfNZab78tS2bcWy81LmyUnPZqhwp8fpq1P3F5YATEWfqBFNXmyUP9PWv",
  "key37": "3WvLwgGNDtc3G28mnHCuuhr1fkUecgqg9qBZSnkhkH7tJVnZTamswo9U6n5gC78qPpD49jp4Efnc9AVetiEak74W",
  "key38": "5rQEbxNqzycT6C1rMjQiHAfN7oDSnKdVg7ydeQCt6L5n1a5ubd7SaKNJomK1C6A2zeyrhRKHnTm1te2RZBz9bgsg",
  "key39": "g2y66gNaTDepjDp671YJDvzWagBUMbSgBuRQpSC7kbYuQM5SuWFtrVrYvmsch82jip3NdjEyqrdj9hvQfMtWg6r",
  "key40": "2pzuxYz4jaZVbp89xdbfJVQprX8x79SKo1M146pkJfBi4kg8h9ZRX97b8ce53aBT4XjP2Gnn9YAqaRPeBajjk2Qj",
  "key41": "5dREqeB7Ps1rjXHj2ooLj41UxGErhMYq9ujr3hsMtx2B4GWcdajXBGxVGDZLcvsxxNjUKe5HK7LEcUV89TezQCv3",
  "key42": "5K9EaBffFtgteffED8s3q9EvG9zSRhV5op3YXYKggb6jnLYBCLAymfZ9dajkKxNCmojdVhbepWMiatjhfhyeDaHh",
  "key43": "eDEF76M8yDe7v2yyFchkHQyj39otRDCXP3pqH3aa4tyihcBz2dJ9TdNYmg3BYnsxh8ToALwZN545spRbZPSVHBC",
  "key44": "5yJmtjLPG9B65tMPq6Jw1mMXqDRyJ6n2d23EWeRecVbFAtANddwJVuj25KdmFtuHsTYBHcSz6WrKownjPebuW82o",
  "key45": "5pqSaWki31amijat3Qm27bqo2cNKdqwNof1v8hzB8iFDEFYjfvCcbvmuU4bLCfnabo1WzV9DdZQqCfk8DpUeiJAb",
  "key46": "2vAifsfbNixWz5XdTTKQnJVQUZQz4SSVyK7DwdwoL8qiRVri1M1eg1w4nrJWG3xgBjXEhe3oaNzXmN8n5X2iCYZc",
  "key47": "4mVGB4bYZhA3Napj1CpEAoriDRUWptwt24n9VsFSCzmB8tebhcQ5p1jZSpk2Hfm53dt7wNYVgDmfuxbV8UZbz7iG"
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
