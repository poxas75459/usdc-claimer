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
    "5mse9rVevF5o3WdQtsvj7R976tWCCs4i6Z9ckVgyzpA66Q7VbVWfG23ovzFbUC11nHivuYkH4oaLq2LF8XvvcCob"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "233a3zqZc4ZJuf86Tby3cscRNXmJQYkoaqEPjXenof6pwAdFE9S3ugPbK5HR4V8a9FfMDHF4R88wGWSjXdyVD3rC",
  "key1": "5Rpoiw5w6yarPSFSeZfBCyMEohTZrk3Mw8Wk4Hb7mvSoSSgvaDhpQ2TzdeX6yUdXq6Hyorska6YCMGjd8MPzG7jv",
  "key2": "4gizUmLDyM6i3DfAaeunnmqWhaJoaQiW1B2yejRRjmjtEa3wW239JdyYn2eM5CDYRt9HRqPG9EBJ9KiRB7iXsoBB",
  "key3": "cbYabhpviPw4PkYDVrsYxrhcc36wnz3cimgYmeosUj88UFxVtsS1u3vUpymjZHvFZsVYxa3ULRfKB626eQ8tnzD",
  "key4": "67kr2UUJYyoQvZxcPR8Hd8VD9MrYYLwHK7hAiM2zSc4A6G52YXeawa7XEf1xUtPQT6NAStTfV2nH8LB83VoGiK91",
  "key5": "5AniVKxP7R53ERpctUAjTJg2FRXJ45waWYas45bCXEjwpNhcbsHvmbuZsYj48jFFYYx35EJN6kxLZnTKF9wvy1X8",
  "key6": "31pMmGAiTrWpkEoSLV4MH5Y234Jr8vPnZA8WTRJP3x5VgFLMmbjnkXUB2UXs9rvo9ATpRNNYGsLSK1YsirAenCrF",
  "key7": "5XHwzynDqTi4iDXMcgoNgHyjmBqJoeKrCvHu8h3PZhfeD6AKoH3xLHAym3tCsgxPiN45emyBgUrDdm2U9Wf7emQT",
  "key8": "5ysDeajqCmk5PzLQBcTT9LtCSCmSsKnArD6mr1ZdqaXhhKH3aEX8zDNECE6Y1B8vqpqvnQnxbozYPYxax5oVLMFf",
  "key9": "469wiHfhgqe5pxHkDXdobgyMNzjKjiA71CJsTxndvTxz9jnD8jzdx9uNSwUCLNpHF4mjj3sN1nH1JrJCdyNJL6Kq",
  "key10": "5aLvLu5GiYpwiff3c2fvDmMyqbMnYbZPLujAMGTyXhdgnUSjpFSuyjtUJiKLQMswPCov24pEYEsK2nUp5RtwXno7",
  "key11": "4YjrCTXgHJsascRNkEMZnJHMeFR84ByWVHDJsxV4xik6VFsk9ENCrWAngjLx4cQoU6BSgU5E2u2A2bknH7qtrxZc",
  "key12": "oQacVcwTp3FXMyWFLLcPh6rFXJ4BL18j9uFdreAJxEWWvoDW7MWcMoF8j3s6kQoY9vtgWH82AxcTmEWmb5feLUa",
  "key13": "gbbavWahDVr1b76wskWkbYParr4ETfCCuDq9PRxTgd6yWUsatPDJHffLVcrTDb38dZVkZaUyECq4VjjhSVDrPii",
  "key14": "4icby6XzTJHBZa21bRo7XTCS5VyW16PwF4To6NhaBgMFGFMD9TJmt8P8er54bkr6QPiMov8XsZktRCfwxuWvQuqA",
  "key15": "5BYGBkvjEuJHwxs4YshYTkJ33UbE1ZrsiwARAmP5weSzUiq29L7xAnbT6o7jTLqse84hKAeeonthDizXEwvZMvsM",
  "key16": "2LiJAi344c7KQvdMjaJaDmZ8xteDPWsXuNmbc6KZhSu4ouh96ZUVG51q71zkA3iUgCuhTXRLnZEr3E65x288TYmr",
  "key17": "5x1ZSXAx1DiZPd6eoAJsMBfU1orAdSVEStxZevJ1TUMPxiMrPyp26NYvFkKUx1v4ScCjqeW2XGYHfXRVszSNSWBJ",
  "key18": "2RXsjis7jVDAKLe2JqyCFRDT8oJhgFES7EWMhLFSvBVHVjmWRRoGqgCYsmxR76cyyke3552NNeymH1LMCJE5hudF",
  "key19": "2EFzcpP2rAmtYu7ziyPaHfhEjCwujAqvEwCa86ceHWc47FPZ88vp8QLJBsXkt8XEVW6p8JNaP3Ajm9euxS1eFHGZ",
  "key20": "zCzkdAGYVbwpgyXbKbpZ7hWK91TnPX3MvQGRrXppE3riZmTQkdetRBixrfKV2LS96Uo7o8DmPUCae5iKZKynpjR",
  "key21": "8WYmEccutDypgp3Sxc7Qc86nsj8GwUaaNJKPRRHHvLS9A7v3BJq8owpCAjctrdWPCcgqHr7GmVotYoyGinKNxvX",
  "key22": "2Li124axtK8AErmT8jCg5qejX7dpa2c8nXqdsU1TzYKseJ5JxdFkRwb9Lq9RGcT8x1mhyovMuHLUaZvyauDtimmM",
  "key23": "4Tnes7gXJ1f7rnWSmu5tMKpZDDe9YCNBKeJs2YR8x9sTRzvKh2wfx1Fc3b55FZdYCtHDU8b4B2CLyyRwiZeqttJS",
  "key24": "afC3vUbhECtQnhiffnaziDZmMcQ6qhBFZEXfyT1tYzmhbgRVHxNEhKs21yC4HhVZuPq2o1A2mLjPoRKQJ9ZSvZh",
  "key25": "63RmCPxtQieDnoKBqPTZSnZ7LejB9AY1QsbgeQiEUcwkt3HDJiqYRn2xRDr9g8AmVwEsBgiiEdzS58YJF4zwHzX2",
  "key26": "5iWUPRrPS1uahEoRdgjxk2dE6hoYKbwPRfbkANeqW892cJV5Ekm7HDByWPmvKn9uT6uwTsU1yjPUxERM9F5Rsgnm",
  "key27": "5mpx9MuKaJoW1JYAcTnAUqhurZHQR9tCdRmGT7QMshhgdPw7Yai4G7sHZZxfoa5tZLhPod6rqJhLTj6P3ozZWhpZ",
  "key28": "3kD8PQHeUPfAsmCjkRAjYfEkiXYjprERMzjkFuqf4fG66s2s56qEdSnfMiHZbhNWrw5L5f6NpzyKb9mUgN6w9ct4",
  "key29": "3vfbUMqRAGUE7RUEUT4TLyXkFWmyKP6V49EzSEtuPmYqZDsJJg3Kt6M7E2iDm8BZTNmAxg6ab9UgTqcxEV2Pp188",
  "key30": "2A2G4JZhhTf8A7HjseMGgFGsyRwEJMgsR98449EUFDDKrSuavzGx2ahu4PtDpCAEKhA65pSauhWuZ3zrEzGqMaXu",
  "key31": "4h9DxdxtDySDALk7bSyCzh3dkrHjQX2RiFrdYtyB293YJxJXYHUHm2g18RYNTZxRWXr65FToujzeCiFXU4x4cxBr",
  "key32": "C3VWX8t8vgmYXwWBzEFL9aMruqEgkyRkjXRB2aN32YjQ9ydPKGhSGYi8cHWz31SqttqpP9DRPnrQCnKemFqEKFz",
  "key33": "4aq6HiuCM9b6AYnHtGLRrmUqLNVUygAgcjnxZP648Qrkre8Ja53puFqEAHwE2HCp33393MkwyZECtLgv3Wh9vJ2s",
  "key34": "3DtLiDXzqfq1A1z5WsYhLzX5yH8FV9EGQegwGeLihyrGgffr1nF3QmDfBfftwo9HotHJgghbWuN7VokJQuwuUxz2",
  "key35": "TYKDPm5ZJfUGqFGpLXcUxNYaEP6BnDmtn1KvgkAXKnbeKt5UKWpAzDjZiNqhDfzVJMFesiSw7oDHRNDJGkbSFtB",
  "key36": "RdbQJKTN3GcLFBZKfGuUyhydh4FiizYNJfZfnXL3agwKrsG6nwwr2MUd9qEkZPXJrZmjqfxRYz5a9Bz3zo9v1Ey",
  "key37": "54ndyD1avvbyzfiJNaRoMQwRARajCnoZZZtEYancFQDGnrbuQdroXSrZYKojLRoohFnbhTCUeowggo5QBHpLCrcf",
  "key38": "55w6T7z84iLzVS3xo7rUM5sudGDdQPV5kxGD8aQeDuan1dvCAEi38CCrPKVP9raWHQEmApUm1TaWbR9oV9SrkFvZ"
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
