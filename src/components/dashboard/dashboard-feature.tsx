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
    "2FGgDbCRG8HaDLZYiPUEkFQVUaeUZHfhgpM57bZ8Hdvvwn3XNGNXqMib9uH6sdh9nNrBfoEgf3apcF4LT9rUEVde"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Z86mdHG4QszibwYngoBShFysWi97Jih4Jtb2xiXmLxs9qUN6F9n85zPiejxt64r46n1qpXv4T2h73CzvJMz7fNt",
  "key1": "3MLRD3Suk1A7jkWsUFJFk4QBP1onzdUyD1JJmg35NB961TSBiKaXGXeFyHAtjS4PwuWmdihVCTtCpPnJzSg1XCh9",
  "key2": "5Vuhn4dvQ61nSyZ2wg6VZmzDDBAfuR6u6T74kRtpQ7UNF6UYPoKiXYWFr8PuaLbWoYDxm17FZazohHmyoJV9fWNi",
  "key3": "5VgwX8sQfV27DSq9yBLucnCoxUEFp2kPHe4CGY2CW4wfcNppHtrb2uSZVPKTs2CWK8zhyS6bY7Lx9EgdK7CwVYwG",
  "key4": "5mEkGk56fdZPfYo5a6nWfpcrJFCqZcrFcAXVNnTYZ4ZbJmCZNeauWk2WhkFsz7Y13q9y1CisKkt1W464WsdZARL",
  "key5": "5rpzBWS5Cws9PLFXdNKTHYMEk4D7d8sBUKGpDb7TS3URC6MueXWSKUjkwgwjKa5jrCfXLxPcs1hESJeP1uycaYGK",
  "key6": "3TH37f7gqzzb1n9rbi2pRj5JLmUaHPZ61hZUE7T6WuwiYxDfzx3kjkuJfrdNyinaZWRs2MZbTo2HFBXARVZm9i8f",
  "key7": "2Uq8yR6pVjdN1iBqcAMvmDCQG5vPTzdzLHSryxBFjuWmXarkoYRALsDrLJUw6uyxNK1idfcr76yQaAjCCb9ZPbCz",
  "key8": "5N17N5bfbowXUcqc4hAU6YS7cpLuri5NQvjWY1A2KEYX7VQbzFA4BaiP2WwHHZi9BwrgQZi9cixFkZTkfV3VpcZd",
  "key9": "2U3PCPGfFqPEry2z1Mz9rGLUJGVZrmqKFUrTXaquieo9iiHkm5W2hbe8APG9vj6vpdcF2VNqGEsuX7pQs2ozeA8Q",
  "key10": "5rJankFf53sZZQirarXyYGq9QGHBU499Wci9u2rJKbBWHcVYZrncZWxFY8CHHRrWiyMPFnw7QZExmJpAz9diWaLR",
  "key11": "4UFQRRcbXLpfMFb1Y7DWGy7CHan72m5LSGPVMBAZosmLj1AfcdU9WEf8NzTFunTpi1Yb3h8HgGz2u9RHAspi2zJZ",
  "key12": "bAvWfvjjGY8SyhEXHA859FH1fKKYtwW2tKjz7SCoYghqeu5Ys29jZjQDyQXNwoBCwBNPRYRZwoxiKtNYoqJwzja",
  "key13": "32UUJoDmWUraDn9AtHQcZWkRUQvSwhQxPKGwityGLm4uM3gXxyYXNFhET9NWF9o1jDoQApqNC1ta6SH6RmshpU3n",
  "key14": "4rk2csyTnj3gP46KDheyayi47qi6MEkVvE9iDB7fi5KyGqFiNoABptXGZukamxQkk19yxZhwwDgnmobdifvgcRo9",
  "key15": "2cytJn5ysaN9SfHGvNuE1SAGmok3MZgY5mm9GcJKkPPxkVZ4fMPUMutCRMsb1Tn8X3BNXxgi7cMtx9nhoRKoxYrD",
  "key16": "2pvZ23irXkVcquGee9m4J4EQ6LxqR4xhoUBB5Jdb6iCHWm4TGXWzRAqHQoJ1qbUoj3BbqEZzYkKnY9GSHpPu6Byf",
  "key17": "4xio2abhy37Pa1Nbva5YbpNaoZNwhFSFZfMueoy3T9mGcpY4MBFVfZ4vyLQBQnLXAnSSYPLAFr1rHEbfPigaFVL2",
  "key18": "3dnT4r7uSNt4EcVywxH6BWntApBVePt4oGrYBhbJwNCsS87f7pxRpjSmnNthvZNkbRsgcfUZaeT174mi3dCEJ5qZ",
  "key19": "5hsKfAzAgzxrprxdHSSBxUYGpoFpFeExd2WAdDwsdbuCL15cvsafyFdVJRKM3mapAhhNY4NumRaVKo5Dq7P8desv",
  "key20": "4vnaLjf4VA9CYKaSubmRCTkHBmwq4sb2tyaKHC3yooZdGsAvEgYfsUN32ELbM9CV5TueNoowbSCLWpRgpMzifpy",
  "key21": "2nF7BSNV6RMpkVLhoxPSYL5dDKxHeHBBi4HLFGLXeLVKupyFt9A9FJgd8gGgjq3mjpvfee16eiXZ85fzRVcYa6Eb",
  "key22": "2GGcwm2XDWmScR4enqAzz6DSESvBGVYXUo1ZTb5cz2CRFQGMezWv3KzmCHAj6yRxSH3bopcmr8SLJDmF8353iQ4M",
  "key23": "2FiMAg1W2T2W9V1YUrHKs6SgDgUJCWNvBeCw8G7eWx7PDXuN4kFKsdjQY2ZgpV4r6XTQeLXN7nTyDC3pQ2shQwHm",
  "key24": "2e6kaQ8ZKR5zhH1P5YJxWt3KQaHkWbAT5ThKJtN3grLMbp9GiYscPw2o3CkXaJHcyqwBBfejKSdvVA74aa7yarSV",
  "key25": "4vZsMHgbxCaRQWeKeU6toshG1Z4iNbJtMMqmbCkjThxc9Y6RAdL1h1XVh76ARdmU988jMSMCGgrZRyqWU64bNoN4",
  "key26": "hZm7ChVqk3cXgDmcf7YAMxaTE5twighaMKeK9EqTtd2MsumYU8Gr8pPd7L41pp4isF2dzeRhn4bCZREoPBrjpEv",
  "key27": "5yYf2UNkaUXhCia8mov8tbFMoZtpu6NQvYPJM3s8Jp4a5yCqgnQe9eUPW91CbUs2zxaHV7y51a6USseB66aMWui9",
  "key28": "BjxNt77Gp3H1KLBrbvmeoVuoEipGcusNnFNRxMvBt2LciQ3GRypdEhQTJVRFv3r6zc81DWhGGnVWeyjwrgdED8u",
  "key29": "2aKa5TMNhSad6RwVdDTN13jFYp3WzfDd5KPb2Mp3cm8xysYACZGqCJnZuKEVsq5TmKrnXVjVgouBQjAM16FwE5nx",
  "key30": "33boAyypAZGs5L4xWDDq2Lq4mmtDEVWsB32eESVr7VFYpu745hTqm7EuauRSBxE8sFjtS29HNx7dGNcbfZb8vV7V",
  "key31": "35GLV7uEZTxp12x3LocCEDnKaMmL5mA8ohEou74vW9vcwowWKe6d9PULoRoKNFquJTcJPF3zQi8mUYE35bHBY3WU",
  "key32": "4f2xGVzyrboM6Vu55eg14cQ4GyoRPuRqneCo7Nvv22vxa6C9z1nWe5QxvT7Scv1CNigPygR5AadsEE4pkvwTnPPR",
  "key33": "5s3qWqpXNgsxyD8xyxbTzYcjkQSyeR9f7UFX5cd6jNWjg7FD6rVYJSTZgsXAaYzyNzi5s76kSA2E1h5gBGMj4xvi",
  "key34": "kQmecnqipg7miopg7Zk2tWKqzVhJ3Pc8iCWMmg7B7oy6wdfDFE7skhUQTbdLJhXsK59PbjecbvLH38cf613qegb",
  "key35": "4Ksp2X9hEiKv9HnoVnK3tVErEaWpzLMbsjRHcvcH24b13VF811atJtRSL2V2tB2yCXvxLk9RDASBzXn9osGRp41p",
  "key36": "ujtEJz6Di7AAzy5jKXP64ka4exEKP1TDFYbGBkVgQqFWbENtABnjKAHyQtdELsAFuHpnwWR4ehASJrCo7XEAVr4",
  "key37": "3Pssx31uicQKWCzzb3mbJGVtnKgfFYCyT3YA5p3jsJ8xkoUBptgMn2B41kPtzFqrEZMSgnZJLRNSoTmXvR4mF3SV",
  "key38": "2dpDMZ78Egcz3oeofGs5ZyHUDJXT9M4QUD2Z3TD4jga6AchCwPJrxmtWg4VfFpHjvSkw5EUYKN6FN126ENbJXG38",
  "key39": "5erEP1AhawPeLH8AhJVK983v7TUtoqkywC6T5JBnb7ojvueg7MMvdZ61bjhMnnsrgopiku7WF2hb2mUMb3VaXnsN",
  "key40": "5qejGY67TX6TaHAnjLvEgNh4CjXamjw1Y78R3oLQJrAMgFmFozTkVLYPtVw5BLAch5WjQeC8zinJgVqmZ9vZhzUM",
  "key41": "65ueTFx2YpeZUHrJcfNboaCXRxijxzFUhVxyLzxWLKhBEhbudgZdyHLa1jjqtidUiobPUjXhNKoEUTJcuzpodqMu",
  "key42": "FBc22hNv7UkBrPnFu747GWvDuhF6xBmhCLQSKjPqPjMzKX94Evqp7t212QWqSBHg43CA4UZ7iKTrZY2Sd9MEMG7",
  "key43": "5F2jLFtuemWGCAowm5BbN3Tyn9f5NX54w38qxyVGCeGUZWxWiTVy2fghySgxQtaEvihj1yLiycpZmf6uAT1niRHA"
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
