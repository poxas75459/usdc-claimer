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
    "3eU8gusAj39tiruhx1eqNNnaJ8g861N1BcG2Efp5XHAv1qbffYnEjXgMsxz93w1PnwRfHwQ5Puf6hD6TMhZiJQmT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sUFHrQv1CR1WSejW59wbXcxgFSX19kzFXSqP9NH8iFz4hS2XHMe2qapDJugJjah2eeRRj1mvuzdEwa7MJsccJ2k",
  "key1": "37EtkpZpFTZJhBWBZgGSmkAcr7E1vJfrq6paG6SBF8T76Y4r3VC3ckEbVe6G1ShRLgGCEhL2wFSE3yNCCuNEj1E7",
  "key2": "5ygeaTwerXhgkYib9QRwRwwzNTiCWJszCSnXMK3J61yMTSkUqqwQparXDRiC1Tw3BkcYnhAbNgc3oCajD9WxUsBq",
  "key3": "5xVqXtyFoqCNSpBf7pbweGX9e79ogP5Ejzt3eXxQbKaHN5L6PFEnvxXT4dpcoEVRgByr4K2UxVjVcwuZ4PD4Tt8q",
  "key4": "M9BXiQv5cCyFwuHge12fSYu3o6NVhQNvywjskE99gN2UQW4v27P2qjLLzbAHMfyk7d8nkTZ1HADDPHkjExyVCJe",
  "key5": "3QfJqdntgF3tH52DUm6zkb4xAxBmCKEE33ALAipfUtSjaDgG1JF3rhaRwGkuGuMYGw3cr5V8fGUyjKWEkhLuWJ5k",
  "key6": "2pfeoBoGvPC4ZFnoyPBsG5umHXMXQaw26dLySM7DXFfQRCNVcvRDPxDNkMrwz4R1Z9XEug9tDdyPFMYfm8DhPnST",
  "key7": "561B8DTKSLk6iBQXAabbvXf5egYTMRoYi7HomrVvjEUe1z6vUhqNAptzeEmU6v7T7jPUkAdLmv6UFeJs8dymc1eg",
  "key8": "24P2bJtuRiugx7ckW5qRNZJV3WDBtLe4wn4wN1z2PhA4Px1XGU1mS4oAGxQAYtFS89vZTMdiytgVnm8bzS7QLvL3",
  "key9": "3KmxbscfMfVgHcEK5scgEN38FXGC7Uj8sVCFMfnDDFaX2VmWfwstSe8BtBtptLgRFrYaZFbh3eJte8vxbQqYAhLt",
  "key10": "4oZnAV7WsJrhUhZjG8iKxhHT4jAEgkg2Um1qPPhZQpNzrWXXKCWfq9G2TrNNt89YZNY5HB7eLqEeMx66d88XJmsL",
  "key11": "2gL3vxb5aqQCckFK1oLgxrz7FHTJudX2Zcpr85fUP961tsm4iii6MrTkYoxxVST9Hz3FyWXFU8tuk35RD5RwUqPG",
  "key12": "45VXb6e8wcZJ5XR5BCkThkKPerxzna9pP7ZrWJGkeSSVPywCBBAdi8N5x3hAYT5Bvn8NDyLLAz6pBuixzXLJu73P",
  "key13": "22WBRt3TC5NekUpyhvzsMPDweM2MmEG2Ccc27dje5bMPfBdaWoHU6dKdsuqnw7qMQdrYHi6uyZzfFkpdYgf27yKQ",
  "key14": "4gTXupbdcL2zyLVhiZ2pcgDgJ1BxoYiakuK5upCZ6Ay6EDRPnMaLGWL98sZUVp8ZAKaM4T4qRCM9XDkNah1U2Ugu",
  "key15": "32MFQZ832AeBHsDf29mcCCSBewtMZ3wqNgVkw31GteQiwVTyvppTgPTKgM6tqnfpnbKDUndNMkxRkTqMqN8MQewH",
  "key16": "566tEPRNHv1zdeZp4TZqt7HX6c6TWUvdQo8XthPEjM96t3vDLY7h4XuyhZKZuZ2LH7RM7zGGeT7NBTJAEJDR2Kx1",
  "key17": "5hNmhHZLBgihk2DaKdESDsBiG8cCN6TKrKnFamW3QXG8hTgnYA9aMUDMyvsXVq7dWdfdWrt7WkFKtWASSNHr5CYW",
  "key18": "5mDZXhaoXdKoKBtXfUdfttwc6orahiENSWXRLwCZARZQ7kK7Y7eRCzLHm8jJNJViZc1JRSTn69o5dbq6iWN5WwZM",
  "key19": "4tJb7fR94pLYQozsTHDgTEm5hUcfcWR6UzYRkVgUHZ3q8U3e6VUgJ4ayHK1Qjvu3adLUXefWcrbFoBt37FguDbYk",
  "key20": "GftyC5mZJ7EBpryFa7NNDFe5L5vfigzfn4xKrUyuXoTk3JZuqtjCnJWfG9MQX8bSVMwfR9HJLJ3Hr4ycMCp8pwk",
  "key21": "2c3gjau8pTDDfbXhveLvHDj8CZnnn4dBZqkL77caSVebwCChztNhhYtsbbNsUyeyXVLjHytM1rcB7FNLvci3MaH6",
  "key22": "5sHHoUyyPjhRJh2Zp2DFoFMjoPw32QyLWo59xkGr4yg5KRrhtYKYq761qLuiJK8Fb1xK9ec1TD7QVk6ui2pcV4nv",
  "key23": "5Ho12GjM575jBR4P48kHfjvpjtiynLynmd2wmwGa1uWRWCPaCg1WQVbnXZrpytjTutcLi8jQ1t6rmADueD2qWtmQ",
  "key24": "4hoh4ikqg1xag18AUrz1fDwd8vB9FN9z7TvQdvxKLRW7gJWHKL1dPR78rrWyEhVjqmiREUXsaCX3v42dHA7toKVT",
  "key25": "2YUSyUZMFVsk94NczsAdCA3GDHqu4TchC4uhwLWtaiF5jnc6A9nuBq1JKxADMJ6pC6RsK7n8CuH6iM9Sg11Qghh5",
  "key26": "345VfBz9fpjT5DwxmrFG57EoVm7RsqX4Wftivcda56DjKRymzh7hjKhKfc4S7MJCw5vVxr3yyuNC7xzSQvxcwSRF",
  "key27": "3HfkNp8QF5VGkj72yWGJSmLqvjjxZBPm8RwbLcSSKqgapBXZf5AqPfzDYQVBzMPTWAXrBNqgGUQVUrZ17Vr1qPzq",
  "key28": "4HAkt2RxdPQXNUQRvpSAfzgRqXw7LnXLXKVumByK5sDe51UcdoiLwK9WQokYJmEYJokQcxpYR1zhCzDfk5S6D6MT"
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
