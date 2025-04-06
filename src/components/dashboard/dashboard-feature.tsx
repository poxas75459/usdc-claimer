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
    "HfUh7Lg32qAUrAKvwWiPKPTWzf1wNMGENCZwZoQY5C9WW1RqcoNHC11diNGHcmHtuDftrQRCNqGZpPsLFot4efr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Qb8p1gFWh4BfrQvcXrudFaKvB2Xhrov8swPrWDyYpfxXTGqpGqYE3RUMehpnDAB11hkAo7imwsgyFE5r7DHGCBo",
  "key1": "ndreENXNnbZGRqPCJTcNgEVs1EvomEo6WmSuC5Cc8dsqCsY7NRR2d4YS6PTMvfpLS2ic92ZMAN7WnULzQQywfgP",
  "key2": "4ybBBLyyp7eoohscbGvhEw5zSU6ETNcVL3x51YH9DkLue4BZT5DxhVoPZUdakFNAKPCUXppXqERy2gKpVK5hu3dt",
  "key3": "ude1SQ8FrNjEXi6fCTa9wuGmxyHwq7vmWbXTX5irBo7MqyZSwHo4pFSPJ1YWR3zVf6jbjekbphRVNx1MgGjiAyh",
  "key4": "3JM3gEo4BeF2vL6iKo2ptg8XxruTegdqMMzV4n9gLLfEH7Tt4bhkH4vxssK1ez2CAjcBGvMkEnf9wwL47JxKZ1cU",
  "key5": "PzpjFBS7dU1PhabpaT5f2FMgde3tRmcSHtNppdKTfaV2Jgotdn937ToXaKotbTnjLWJbjR68RMM63W9H9ZvhSbV",
  "key6": "63s3nS6qF7TXZoE9PBqG3Fv8GSAbYwzbVD4xd3r1Jpwj9smLvpUDcLPAdKii6ysMFWpqeA1eFvmJj9zRLaHsC7jd",
  "key7": "56KPjCqgW3675bGEjs8nNp8K3XNpyx1MAnDtUEoUyXZt7bL4sCeJhDh3JMtLPdktUZtwz6NWiygJBFSJk5w9Bjf6",
  "key8": "5EgLcTb9DqDcmi83Q1yUXKr3WE3NXDaHMztdjY5Lz4zGj9M8go6dHWmSPc6oWTZ6Yuw4VUVSWLnLpBxARxk6AR6P",
  "key9": "5fmC5Qfz8KjLMsQPFvgvTkL3PTqHAx9dFwUPPuZjF13ZmgXSQbpNdmHeyfT2HFDQckhrQd7smcioWQdPQymQAWaY",
  "key10": "3WYK8sScjzginJ3zAqvxAVfviRFuAVzFD6AMTaKiATFfbaqRFmjf8FBQaPew9VkGoLSzmEoCsydbQknjZJ5u3VEC",
  "key11": "5vRYLZ9wRsgbsa3dasrprwyJtjh2T3bGFsF7dbrAWM7osHR7Do2aKnZp1kYAiPxp7j8PtFXiro5kfxjXtw2scmDd",
  "key12": "25vH16zK2GFwmVx2DEfS3EVeg4B9FySQgWFyLDTY7TDHfanSPU5RveG3LQhqj58hc8jKrcFq6LWZrszjaA9o3bbf",
  "key13": "619RfaptRFcR3htdpQBqPBVz8TP1URQu8J5pRUkZWh58Q7AF2ZSaG17AJqpgWoAMdsP9S3beVHYGLCTVY9GQh43N",
  "key14": "5bDJnQskPTr9kymCnoo2TExms6mJ3b2iwAdqXiwXrw6cks9SF9312m72L5BpEYEPToZV6YKkx687xtP4EZM8wE94",
  "key15": "xp3yijiDyjAFbWTNSLpteBPCpdYUra2ZSQj76Rb4KHBadULf9uvFyT2t54v1t3WN5MYbZcjV25LMVuwpbfcqN1r",
  "key16": "3tWka9fYyfRyjiZJd9ud3ATNJkCTrAL4YS87KuHHRWVtg2QMmVUKM8DdduWLRw4PLRgxP6Ngg5WkadLeB92q7LM7",
  "key17": "3jcvikoo5mVVqmTxZS7Fsm5RLvUkJJF88zd4mTVwu8JRAUJ9gbtDVKmsXw64fT9dGmyhX3p4t6y82Ui5C4BVhuoX",
  "key18": "TCBwtGSsFQASdQM9NWJB4PwPdRW9pzCmQeGKLAD1YeVGBWXkJyMgEBKs2M3FNj4zDQtdhPKQko1yZsyrdBwCXpk",
  "key19": "2XsNopnXDgWUK78US7nz71yJFjxnzs5nAseKyxSbUqaJDKqBGZZcKzCFkiVrtGF2RxRMug7369MNvtMWRaLbmL7F",
  "key20": "uN8jcv26LkwP3eW13wtfKfSqpsk6fs3sHwkU1nVLNVZQYWoKwHSwqNT3nth4bfjSdTJ5M4xRqFE8juidWqbPJiR",
  "key21": "5Nc4rcBCcRUFcNsuLYCvukNtYjJKB9GzJaRdAn4G3ws1jZChrGHzDTXewpn7ZB3fzyPUFdozwnAUwDrFVwAhuCau",
  "key22": "399SfdmGmzEppnkANEot6vDCz94M9veksZLixEco2SX1KoEgSaKfU8XdgENT8UySvPbinVbyL1B9wLarvJVeSEAj",
  "key23": "4qDVife8MLYfMdWW8XxTvJyMtvSb7QdJbWgBoqkbvPZdsXnwRU1k1vVUp1CD2677HyE82JvAFaAF8gjJtNJWVVxn",
  "key24": "x5FJRuLr4ENAYSTSm3N8w7qPLnskDXJ5y2g6V4RAeWVEfTxhERqcx5Jt2Zb3URyKYV8C5FRwschDWuF6EusRzp8",
  "key25": "2p6W8u56fNcyKVwg5Y6DkUYoHTaY9p656iwd8wbtkdmhiZRK1BeDqJDz3hL7kPUsZykmaKRW5siyJA3XJvW6T8n8",
  "key26": "2AwA6RF81uDnL2vDYoNPBBwbpF1tr5ZDg92D4u4tgZuPA1P6LYHVbCxLKwLQY5UrKMUTnMxkdsNVs6Cvj8QLjBU5",
  "key27": "2AWtZbHgVphtrTWr6TMtJconGAKoSwFCLwAtdefPe6MnJ1cszYXdsMfVunvyLi5c4rjAycfhWCQFxdDCWyCQEnkC",
  "key28": "5v8pbvBqq9NS7nxCBSbuJWNwrNmDDAQAN89zTCSgpYpjztDhC5wAhNfP6AwxCVrLRUAwyXrMFhANapBvjAToKWik",
  "key29": "2bJSRUgsdQ4YXa4JWsw2dKSW3An2v3CpKSD61W1Kt7ndNH3UYqq62ht5EXfqVGo9EVWYP7gwjQXbD9NH5J6rECh1",
  "key30": "gVRunyJCNmg2czBJqYNcA7vq5NzzM9C4NqkHpGkTheGkRMqVFw8Hu8NDqRqwcu7koRZvhTQWU1oGUvq5eiTGMa3",
  "key31": "3RBe9bawe9gnCTcmq6gYuaGcaMZLH6xnTbdXF65XdkHDg56Rt6avvKwMvUGNi9GSfMpxfL8nDhz8b6FnTn42yBTn",
  "key32": "3fqhkYuttbsVxDR8rpERALLBZ2YHMo8s4TrsE8jE6XyuiXSFbAdqvvs7rCmzkGc7ec5bzwbhYXSi2tHX29VEEsxx",
  "key33": "2YZgDk5KWZE7Nkyc4gasTMnQwx6eqcy63TDm2iB9pJpnmSjEEjfMC18Ctc5QYqoAA4rcaoMM9q5ouq719VygJfup",
  "key34": "2d48hXe8cUnPH15U9Jsd4vnzS4ZcnKvKD211HVEzM5Szt8xBYCvqEdguwJAX72EYughPYK5zEvmj7HgjEeYkQjeY",
  "key35": "2fhz5bJ6dwqh2ujKRPxQ7aincFWcYuNcYYuG5z5asgNdLaVjqj1nF5UY7HsSyEkLS5xxt1Yg9s5JKbfMf13r6Brz",
  "key36": "5Xs74vCyepPpPzGwMpY3fYfWJ5G8mPkAc7WYxnbeXC8imQQY6Nh9ZkAbVq3Ph1dpGLT2P7UNT25jLdSa8EbhxuGt",
  "key37": "EpN5WUzVTohiYKRNbPSUrauC9zMgww51kryvYKyESsLwK6pG4iBguxFN5p5vx96sYd7pbzGvTwtZSCRmwuzFx31",
  "key38": "2aYHgi85oSYHwysMGAXW7ha2CaJtmXRgih85wg3f6qtQzqJiuquqY6k4z7gSL2VTDbX3f17SsN4P8NKXBABdbMtj",
  "key39": "4KK74TtqHruHUuMB7jUvsxDFRQLxEGjGQK1YWgiz6tpwG3LQPZb3NdCvjLGciUufoSeCNiwp7cSp4iqgMgebSz9p",
  "key40": "4Vzu7oCWK2cBuPrxphJ4waGec5QFwTFnwB9gmMH2sFQXwgao8nEsQWcgLRpSn8NHyUaPwsZ3tc32geFbQsQcZDoR",
  "key41": "2hyhtTbHpnTD6dBMcxkSd5rTevjQpBGNX6VakQkCmaPYVCNtsHN2Mx9deyWNEeTe8xFds6bikEpwjEv8gdvWcCfG",
  "key42": "5uqpKqpSrNGM4zLHSjUoGvV3be32tUmQiwGTMzJbZpd2sz8frE4CS62YsvLCUvjfgaCLbwu9EcKsD3jBHFFTCUSm"
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
