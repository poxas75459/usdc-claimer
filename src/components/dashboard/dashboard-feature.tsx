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
    "2QszHsx3sJLCF1MoNG7gUz5UQPYtgJehc9LbRKohPyoq82wZBDdtuU6J3yEnPxji5bHQX6mFwJXDPNfbz7y1FY1n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WVS2eYgBvBLXk15vLudHL5R1cBhwP31suh94VCqxWLRux8RNScoeJkKdaDn6uak8EecpWcNRXVD8QwHJHjcVuPB",
  "key1": "67CnqqL7Fc6J3qQJjc3VBB69z3VQ77iSSvE6Fzgcx588zAFQ97FmS2A8HpFLTSqniSSNkCSoh8PJHRyn2tTMMHB2",
  "key2": "3vAkAp4X4BZZeAmUnHy53vbVKeUc9kQag9U3xCuGjrmiQe3HMPrg6B3oWVBpKK7a1ydLTQzqcVKi9odbKgTw4vhe",
  "key3": "5S99jokZC9yicWjqvo2gWmWssQGi3HGDoF2bJMm9p1bp5haveeheEmibhowbL5TuNyaZhj32p4WT4m24ehbSEGsY",
  "key4": "285c7muWvEFUvE19xmmGXiByn31ofdeQ2AmETYZAmjvboWyp8yaCTwTSUf2zwZnCu2dwKNeRSWpCZRGnBWK1iYC8",
  "key5": "5ZER8e6ZRPLNf8gTSK36zLbdSb32tDm1qmoc4QsMkFnW5Ramdja1nVKNwD6KXM7Bp3rkFxt7zWmHB2ixJ9jVjqZF",
  "key6": "T8BSWtRJJf8ajUdFDGZXap7NCQkKauJcuCcA8kzQ27wEWyrZ1n7h2xvtxhh7LEn4MZukoX33WS5LYnKhB4vSzBL",
  "key7": "DoFWoXSbfLK9MVdftzYxUPi2vMGfndNhPrSNunpmhPB3MLaA2eEz9bKy1xkrYJ3o5rRqtVYRL2cW22QSvT3ihDT",
  "key8": "36QroPwMTqjLe2Af7ZAqDRTgQ8TpXBMKbuRrdGGqWJbYpoXkqvLzxmb1neL1XVWj8aRpuzAufcSY9CLtyyTeV8gJ",
  "key9": "2wmbCod2oQDUiKhaAZrCf8m8Fak8KxiEG8njStozJjCHc6i78qd1GqkuKqvGBySLcyHW8P97EdtUfFKnxpsdtb5r",
  "key10": "bQ9rDBT4AczD9e7WAccZiw6XMNwdK7LmLynonzpNAWbz47H6wjgznDbGCicLXXuvYUDWsjxizyb4AP7yHaZeuuT",
  "key11": "48aQcp8sXcfj3PUEVSs3ZcQ3KGg8SshLbnJbhLht5JapemzDugiBVUemA4rNp3DSMXgFWnjee9xBbZ7fJxNiDFet",
  "key12": "4gjk3LnErxe3owVoKbSP5q41LiEsoCcez2MTCurqoJgfXcK8B82FnpveWvTvv6Uja4cQbGKkQGhidAjvUWGP2JPF",
  "key13": "3W63GCJ2CXjP6EMrnvJW3SXDmk1aAuHfZ1JfnUiXi4qAp5E4w7efoKfDaP4mgCYtCWDJH8Jj8dENHPiVqTeJDmTk",
  "key14": "2kGgCohK4DpG6aAjnFUXVq9kEssNBGKgEkUNPW7DJVTcAje3DFugZNnHJeinsL9hWuf4gGR7fHkwRMuEsM4jpNwB",
  "key15": "4DZgA2rrxyhPsnG8h5wroNWjP63o5CwfcbbPdcX4Zk9keKEzV7WQvLQr5aVwKASHAjcGgtW6DQk72nduTTdSoH5Q",
  "key16": "wE4T2tXPifrEy69azwAZ1Kou8XeCweFRdeJwLsoFkYzuagfiwXpPRwsqB8Wvbrcx7ZTyUrvm3XCCCUeer365V3E",
  "key17": "4TQ6NG1ELbkQHTxfFYB32bmjxGMyTFhtH64qPoQf55ZzWytpAqUMXYjBVKtpBjFZ5rVQDqXFRhy6V1vhHYjHaQcP",
  "key18": "4e4HSyqiBgRAW7MbY6ufpr3QPbgnh4b4ibu6hqeqZn2bvb5f2AgA2qeRte69hWDjrg1i8L8utfcKwyPbYasCs2YP",
  "key19": "fNYshQxumgy6sj6MHvur6DdWumzA9BiBvDMZvTr2bqWEMBpVoPj18mGoSUn4cTskhRMPKx6g8t9wXPWepgqzBhz",
  "key20": "27bD4m3Gax5YXgJuq5kv8FEhXk3Q29pFzz4BLrGhKYYZW9ULACVNpS8HckkJGeY2LasHUcq5yggqfoqtmR5Xe1fz",
  "key21": "3TQZnaMAZpCuQrTzdr7hhbBADPWBk3gJewkUnu5dJ4CNeaCDNqEztehaLVwCRdWyKPPJiqboBPVGo2yCmsvYZtsb",
  "key22": "5b9yvokoHgdpyEpWNpVXncKbRNAu8DzNjMJzKbES9mxmWi9QHG9UzkeMTWJisS358RP2ZyJHhqbb4zDkUiuEZz5H",
  "key23": "3sFNQD6bWNVUQNzjA5qusGfAiqiKn2y9w6YFiHrhdugpji2MwUCbwT3uGX2qyvyrwXDxv8R68x5y44HTKWmRcP3L",
  "key24": "2ervMkrfS9vHD1nZw8zkprHCkVt96gwiFbW8K2tWXUNMbBNuyWRRRpFAL8LtsjSRzGyvPpVXMXRUgtLN7MXGfZ3o",
  "key25": "3vgsMtF9brd91VJHW4Zdq8pWZCwE9AiqKeHFHj5R33otMcqupQ6r36bJyYyN3kFM8VKnihKqHKT7g28qk4ZVQ6Er",
  "key26": "65Zeb6pJdFbvbomHGaoAKaN5JNDR3PBMWw5ah19AJbggQjLX77g8kj7G4wz6AnwTexjYx8wHKM8HwLSJUSYJtvHR",
  "key27": "4Q36EsjHEnxkw4y52dvrUKVjnNJe2atkpg8odbBurczrpyvD4KAsr7bcqYoc4VqbrHZBz5pJ7QZMUpL4D8bVcPSD",
  "key28": "2ZAuJ5y2SJjXMh3QKiYea9A4xRxZL725sUQDuJYHc432pSMa4TXvrHE6RoCoeTRcJQTWCnj7ds3MftQiBYaVxeor",
  "key29": "4LVnzmZcWzJr4CVY9YS8btEAEKVmp84PRPsbxYMxvm435PZoUyjWqzzB2xz2vvYqYiq1F2S7fzcVpP2gYp9WsQ8h",
  "key30": "2BKrRrGg1ZprkfsobKkCWiP5rRhAXgxEa7zbhoEZrv4e33LfDjCK4zfrnoKa4TGAoBQp6eVUznaYe1E8vbEvQpAV",
  "key31": "2djKMxRn1GfVv3pABE5uyufbqFPjgXbPpCbCJxjsuRidzR41XotqpxL88mAWtxuJL6iGMZ7UJ6qebBYssAc4WLxy",
  "key32": "2FF1EzV6yR8kcz5SCSc3adPkQtPWhbBvwtG3X8p31zQWuPWyUk7waiR5qH2qJTghQnmEXxAJFKBytKihiqwzVxJN",
  "key33": "5LZxdBBWs6iC7Y6Df368dTddKYRvGxCzt4YFLRfHniwW6cU5X5fC7VmMet9Xp8yHVVdSLzfqDYhAcvRrya7xsnSc",
  "key34": "4i2xGyYNwnsUvPVTx2dHzF6n3JcNKamXdbnJB8nFKNK4K2pue9CJnE5ZgMtEc95BffGoVyJRpyL9u4U8o9hsaLQ4",
  "key35": "5C1S6xLV1XZXqFu5Txdc78Fsi5ehrdNqaNkqBXTMxyC9MQW3KUAGVbmmB5KGuL8o9eGPowvUrdDMKimNtA3JTeZo",
  "key36": "65jtV3ttjUyTFf9YV1NnKTSCW2qrzNh9KxbZXTLUonhADXXiq1ZakRsQm8mPTwwSc8xtAN1WK6qsVaeUnF5Knasu",
  "key37": "2db7vwcuiJh32LnTBYLu9vJHi7zU6LDkwJvpwaBFoVfrdwyTz9bf9ur9Xu19NQ1hhKgtmRqb4rmoGDBapaGgBgAB",
  "key38": "28HUH4xNDcVXho35jz2jcD9KKXHoHjgcLEL993urNi5hAsrc1BK8yJENSjM1TD2RfS3UUeivJ1riZVtShpMxyDoP",
  "key39": "9yELQyZyUjoPjsfQRdVoHvfbBo8y4ZqhfUkzZoEEMSrRPKpniXSQVze9RceL1ULw1youxx22s5LmG7GWozFnqoa",
  "key40": "5hctGNge9A8WxwfJr4VCrsyFgogyuFZ3UXBDkq3RvpY4NiWi8aFhxy4ic9PXgXCEPhj4yAabff4gn3AbL4tCvrm6",
  "key41": "eCY5Dxz1RqBoUATxG8RbG8Hm9kdLhX8RUUkWKqd7w2hYuSFcHsutr3uqyNptaBYELFAPRph2eH8379FGaeg6B62",
  "key42": "3UPb7fSNexe5WRmVJYPx5fKsd6VKcUjEdewPJyErb5b9tihBpS4MHrJ9YXiHcC6gmR4CPwoo65nrHhYVQsQVq9tv",
  "key43": "4gzRnd4M3gZiNKUDSGsTBcjvgMfvcAcxP6dWXjcUszxEoPBnBgnAvJ4JoGSjRrrDwtcvnUV87j4QSPVrijTNw67h",
  "key44": "5TNo4uDjGYEeZ4i5iL5EFMjiRZtpYgtEp1udVvfenQpkMMbyXvazbgWsocGp24cVSAdePEBcajF3WeKzXcyY922H",
  "key45": "vrEz7owtaYLuvCa4ray8b4JYyrvsZaucffYGL9sYtb91LGTPLWa2vDv6o7v4a7psmswKSEsgzk6vaCXVL3WFCCT",
  "key46": "519A28s2u7qn3LT2QBFib8Dd1k6v3AMFNavAJR9QY5Ner8wrMBqpDPD8dtTFMWZD6gKovzGu3YnziVMjgnr1Gw5j",
  "key47": "5a7vspChE2MsxZ3fKVizFkNg8vgAC6AZ3pujYdQmtvFvpGfn8cKw5Qgq5T5b3RTyHRQqjYggFjCserbHrv58XQar",
  "key48": "3Lw6gU1LcevGXN2j8QziMZSZifECvnGmqZbCCYXQ96wGuWdamovq3YRswBiMm66Pvk7bXyFt9KxXJEZ7YXFiaucF"
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
