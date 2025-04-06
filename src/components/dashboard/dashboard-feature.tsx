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
    "2HaUnpJ78aA1oijGnLBVSg6RsHoycvwDhScib2wwMj1nsNNwU6623SmnoihKVwkYiuQKWx27VuRkGaCzDRBs7gSR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Hc8iGRTw7s1GVwdUKw1Zcg1KucaPfvkohRVcPWiAhCqyVMSGmYuCq3wsFLb5b6a8WtCN6V7Vs5zsXpzYJuT8K6C",
  "key1": "94EGMJErJfizsGVKZoyRFLN39464PFddetK87YCDDd5vLvYrQu7dmxYpMzQbVPU9MPstRWq8f2wkTjNnBmaHHtT",
  "key2": "5CYQ6zXM2c8neTpCGEYnSGfRaRMQrMswLkpar38zgeG1AP4FcNVu9S9BjPvkCwFYgVVDBdyuXAW3aKxS7oq8ED1D",
  "key3": "2LxDVzCiqdjVaCqiWLotL913ATHQ6jptZgUj4f2cF7cZEV9wV3cmTr3adsWiQz8hFgu5cqjwC7WfC1PqjfrYDRZo",
  "key4": "5KPacHrVw6Ve117QLKFy8P1APK4gzDc5qXFYev7myiKJVcYMt8H9iBGqNyGdhURxS4MBVkEuVU4yANnqZJqsjn2K",
  "key5": "CQcPeEyRzEQN9yqwMY9wsU2bxzB1Jw9RpPKYsFCuSroMz2LWoh1iUDNjhowjmdXt47VxN4DJFAJnPk7dLqXgmKQ",
  "key6": "2vbbUkk32W24fo4K6CsDPW7LEFkGkwfhS11NfS4chCD8e8ubKQsBD4UfvaNgNZJWQFBGEuybrSuWZX89cWwvz2Gd",
  "key7": "2xkH9xEfj1BttzYt9dJYnvGhCsgrXexGYfGahuRmGsut1ftnW4QU7eFF5aaEoNN6FLt23g6xAnx5fmQWPCqE6oRh",
  "key8": "ZhF3pNPfqQy11xqG377ofToJ6BrBG732dwCxXHnJ1SbEKQ2ppGh5Syt6yWrR7DUH1MMBzh2A9zuCT5UAvw6M2ws",
  "key9": "4vKcQ2asmXoZGhbws9FexPdKL1tunFBGju61Qo8arsZUSCb5VN8MmjdgoUKu5Lfd4Hd6mWwJcMZGomELv7NYWtfA",
  "key10": "5Kt5MiDWsthHnzgHA4SnPKFSNNZiKuPSottBvqKQuoAudo1PqUnoQvG5t6tELE11tnhXQyjVsDnXqRKQ4mgo2MM4",
  "key11": "3eVWBWxxx8YhEKUck2WpQjzx85cAQppaFgX7nxAZxfHfQQax6rYLog3N6p8d9vGhBP3JNtQKoZNLQvoYRaB2JLM6",
  "key12": "55ssrrAra7ZXenjWmBoK24CbgEP8EEUayVzVAscta55xEQn6aXz7iqCniKXy4VpaLR9X7qKa7uoeyNwzh8x2T2TL",
  "key13": "kbLuoM4QYrMWpzXXHF3EJrwG14EtSNCq7fUFs1aGoeALE5oXM6pyCxiNjCYC8YdYa4ysGytenRAFaFfP65Vt7Ka",
  "key14": "4NdmUS51aHx9LzzfMX7cfeTtbPxuCV7fnDBi9ox9YeJo7WRkEo1sfJfsydUuirEKy89Z7vsaPSUjgEB7UTCed8J4",
  "key15": "58i12KbrwBiVAdPm1zmYSeBFRof4zduFBEGvKY4F8k7AS2UnFr6UeEL2m9RDcmxGQB17cJp88bwnkUm3AN5VTP4Y",
  "key16": "63ZEGGXSuBohTqQDL7GxFbFbbRUF1jYZRqzHZ6QuLkfRLkae2u9WfrUEWjNx8UrtVsXzNCmtJLAodp8y3hZanTrL",
  "key17": "4DYLf41zqLcNBT9xn5EuqofQd3xpcrZ3VdpZEwDfasiyamLnpbjT1yVjaAiobdJHKJrCgLH4y2r3ppGXNpvjsY2j",
  "key18": "4Yut2MAtpqhi245C2UtaA6VNqCgvEkN9TJQLA8fmuVHx7zi6PdKTUWs39tJAWEtgFuvBd39EydtxSPgHGGBRAVdk",
  "key19": "d4H56Y8WZTDm34ZTFzJ8C8MguuEZujShCPMBZ7u111VrqJsV5vKcYrU8MQpotRkSdP9BnSKegSX4W6VsE62mksG",
  "key20": "5HhU1iJALxvyH1HsKyDs3fZAPETsVTDWsdPgu3EE8vAM2JTsErPnmopJnuksk2s2wAPWvyE19u4jCmcXAbV8nAaV",
  "key21": "4Dq1pxqRmYDRw3gXDMTbHpyMfZchudvTqheF3aJFXjUimtmpgzMpppuWyPbRr59A3WDWaiiBxM767Ki4UJ9Ex4QG",
  "key22": "3BdYGJkCWtXr17iAZuravqdPSiXHzPi9KinDpWDZX8gaJw1rLzBDaHNMKHXDDWTw7DyjSewfMz3A3Xo91phmmF5y",
  "key23": "xnNHjWN4FSVvVvLPUTSVvoQCWL9AeKZVpQyK1hfD45TyBi8Eo215AexqCJQtu71pADUUJkkHKdVeykUXj2UPzNn",
  "key24": "3Z4DeUGKr4VnKEiCZh7vAv4KjWuRbwT9Vtc7rNZ3VvQsTSV6TtGSc7fkwfTXvSUJb15jhHR6BwEgYdaTJcvGBxG6",
  "key25": "DdjbEFC8XA5kMEuTbgzZhTMG8H3R3wdDVSZnfScsYg4d8NK4ikjsZZA3HtAY6hkiQLDe569KFmouVbJAvCiBHD4",
  "key26": "R1nW3xqMRXELGkFSAyX6h7r5Rsxwm8nRLZxs1JYUP9DJs6NrCx5fN3xeDD88TXjwgL4zBBS7C6xtKr3airUCTy8",
  "key27": "3TTbhXA3NKfHs3ZgKKhTTUUTvyrq5WpePffz6x7TzyJshAwGBQw5X7iXcey58sFjVnouDXc2oxhudsvW2CmT9qEH",
  "key28": "2twN4xVWQVp2yXvMiSN6ZWKTSg8Fd2sPjYYNZjHugw38nDAzB4qr2ZWJ9pZDBPh4C1kzqYNYVrQZBSdsNmJLQ5dV",
  "key29": "fPsmYkwYHrESwvMtsqkDTbM9cTXW5enLQ65KHhRttWMth2cx8HyFgzDD34RhZWZgWw4YXro782yNkPvNc6qEw2F",
  "key30": "tRz8NASZB65zvBUaCPycyrv1zrwcWF7S8ZuR26MmLStF74tMi9yQ47Bk7opf9o5VTxYnBiHCyhzoejxNGaVFqzN",
  "key31": "2RrT65VVUGPcewLLSssfuUEQha9VasPdsURHe2XHVbErEt12cfrehTKs8aN1G6Qq15qssAEMNBmvn2BWYiGUd6ac",
  "key32": "3yimLg5NdNzUfMENTatF3RjLuLfV2HFbT6wvdEPhUp8NHM8VVJExMBw4xdg4nBdsbob3ysL4v4FQ3B98dCVozWv3",
  "key33": "5Xc4bLLF2ezpqt9kPMxToDvjqSpg7J6np7KKWsaa4SQEhdZcVFYjtCrPfwYpHsqQGwP2bJY4gpKoCRduvkM4qD2v",
  "key34": "62C1LFCkLrZx2armiZPNWUpBTjAeFHKM9EogfLqkrRUFeQjtx5WrxGeg5oJV94sUdmtMa3K3kuRw62fCMr5X2suZ",
  "key35": "5sH3T8Ut3oVA8AM497qJYhi6TjH5F1BjgffNahC9wD4XDAxq5yBsDGtxvS93wWZAMfXYWX1XXEJKMDAKrFTptEkf",
  "key36": "2TQnBREy7iQgWuXCzaLJWiPz4NHpUV8AuZmBPJL5v9XvwUo2vNaHc9F34QEyV1XP4E6zmJW8rcbiMqCUHh254Zr5",
  "key37": "2ZAsaCdHJesgf7rMxDAP37xqmXE79kgfY4Uuc7xFLoCNtjXQgFJqcF3VDVYWwpGWvWmNEarnaD1d5YScyFynPGyV",
  "key38": "5TgCZTcsgZMS46MGor4ty43e2ArMNhByots5yofz8X4tpRYCdLo4n2tnAR9c6EsYJkfRMQ9msSdbmZouZeJJrG7x",
  "key39": "4wUuGDCrwaNsK28rARB1hAerqKyxk8k8wCsQ3pjebRQ3dsrj5YjLSUKAXiEv3PZuBsj5Tk3bFHqLnVbH1DyFBZZp",
  "key40": "4yUaSZdcAkJkhntwjqGs11YUTsUv3ff88B1LgiVu6rmE8XeczGp9Q7u1dTM1j3VtjpTWS6VXfhULFvKcEmkrY11D",
  "key41": "5KHQyjWQNJ9h9RagSJU8T9rGR5bYuB1vw4u9ZywbLGteN2qpWE4PWA4mJVc3WTRD7FbK8uk4jpPPYZqXjjZfLciM",
  "key42": "37oiVJDbzZjWFXJXq8MSQqB3fkwGAbzAXdmfKSSCg2weSEfBHWwwS7k26W1b6cuLqFGYGDxP9cq6rshdLHkrUBCY",
  "key43": "3JcsLJchGNWsR9w4S3jC7oPuHHe2GihbA291yjqVdyiAjx1FyD2qrhe4waWjNpqzwwnnpBPLcpiwJby7qUGEdAxH",
  "key44": "y1uov6s36hxCxDggwgUnXHdLPM8qiEp8EGVvCbiQboJkPvH4pTVsjKFGb7UVQPkjPXyKni7JtXHmJz5FKp79TY3",
  "key45": "2CERkzuKQjFyaAHeqRj9NQ3t3Y5wMiqc2iRpmx7vJJEdgqX3BBSpF9sqg9bvZ3orzv2uFPje93nTtMpcBC6ruurj",
  "key46": "EmtAA5jCENz58XjbKGGDFTcRN6krFk7fpnqmf7gC3eBXt6oWkBitmjgWKf144nbd5wCNMTAfsvypaMtjfgd2fY4",
  "key47": "4xYctC3kXXDHSEFN7vGXkTQv4xHXL6xTqmeq7xD14FouS8MBYPbGK1isppRr6uX9oHQ6sJh82kyHiSp3itykYPQa",
  "key48": "4MSee2tobudnMjYq4Rc9QC4Nq2NGERat9NUDUbuHDKbUDJoqmTq7hNy9xENUEkZTmfres4R6ExRzeKFAJsSWtrUW"
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
