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
    "4XQWamtocy7w42hLDcDsfthTvTvTDVwxa9NYmYfumqYiazT5tYTUxWswR5cPBUvrCfWj8LuFoGC8XFvqWEcY4Mxd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uyRJhTzwX9Zd2wJJqELYpPip4qBYVYRtk9wYMsuxNrN3TUVBXKQ8DofwJeMC4yarbCZip8h9jXwSVZQqoc96nWY",
  "key1": "7WRxufTCie63VU8aFSjKxNJZz8wH8LpmCwdtVcQV17eHLBQWrhSYBCVxWdBJUJPdBYDKRRSy2w7vWwt9MccuH13",
  "key2": "4ZJr5tkVMadbYkSQ2AKepnUSd5jtNJg4Fkt8WqUoYyeiXJsQBnrk6UwSuQtQ5Yqvh7dAxNeNWg8QuLVyoK4gosCy",
  "key3": "GYb6oV4gxYFQoQRZKuTT7VNHT1D5Tum4TTqfsevv6svYUZPTLK35WKQfTxcbexd7keiQk9NzHSo72a2j4czX6kf",
  "key4": "2Ms8ghVjz8dZrCm35fxuLABS3t1f4GPkp2fa5pLAZRauZmUVEQtUcvY1mrJACLCxYMuFTsUrKDw7FJ247N4PebWa",
  "key5": "15TFcsHwc7rp3YqwfJAGtsnMQSr33ox8GZ44VPbPmu2X77MdMRHoV5hUVx7i9VyCEDnWRXM3U39VXZtECZYeoEp",
  "key6": "4ag9fJK68CWUYfmBNbp1SDobJS487Cf6zHq2J7hXPg2EVTpe1f8FwhWNJiKfqwL4qaCScWS5GYfLhoRiUNMt6Q1s",
  "key7": "4HTnty6pv1jJaFa4VMnFag3zuQuSBfFrojyApsuKQfJvL9oX3QLG7iG35V4M1A9rM7RXVomH8ywKfHmnoDSSDDfi",
  "key8": "5r1aUofrUUWcnMKzVfP4bS4nVvfRBN167ED5YbbvciCiUq1REPv4noeL3KgmBvmCeQFrBMUPDrVfPdamt8rnjLZb",
  "key9": "3BrU5Qx7Gqq5xS8YxFpc26rVwXDufUv2UmFsAdSsScTCWLeqjxNjv9K6WsEmmXeAFb1hRBM1pNp62Yb4K96kzSLp",
  "key10": "Lq3FW8dyF8wRYcaqnMeWdJ1SLwWUnn1nrDan2BWQhykTK5KSdyKy3U1jdxm3nLFKaNymQ2y1B7DkqZsgNfN9EJq",
  "key11": "27MBxYR8A1bAGdo156ksuVpYQdaGeKhaoWaS6xo3EqRA6rpFNmCLWDwhgnmPwaQaGwuCSQ1SVP1m8UD9B2cyKXNm",
  "key12": "3JFR1ATpskMrgjmXQ6SPE5gXyJE2MsTAkttmgL1nZzhnUEH6ZHVTUPdPyRGZp9ruhwyG42bKbYSktgpEbUjJ8Rk",
  "key13": "BWs7TtL9B5bsPU884hZQybAq3GTuCoaYcenCDinGZGYPkBFo8eWdUx3rgktzVvASVrZqHjjUaFJoME8TnHHEHzw",
  "key14": "2bCVabHT7a8k7kSCc5SQyP4XgcLPUNdLreAgEp4Kv4ihPsPjRi1rakiXFobpRSG9HwTyHUXNyHCtd7XDuxx22ewR",
  "key15": "4ynTut8QT2691kJ3PmyxuLTBn16moaPfN44d4TGbkhjtraJckqMtkhUg3hA2n16DE1e2miufDquXLhmRYCDuc4Cd",
  "key16": "2pdnNzitiG4jpb4cc9kbDsx7iNWWtRqD68u1JBfWpSvbu3Gp8F1sLjuggqri3VW3UCZiRWtw4r51FfAqbmdP7Qox",
  "key17": "3eW9iCFbiCpYrD9arSGytJL3hFNJGq97TxkQFqqALRze2Kh6g4UpvMasmH2K9ZNSixtJfiub1nPdokgmqwykjR6L",
  "key18": "KSifgNoq6WNxZoUZLPcxDvfUnPBYdH2qCQb1SAn8A7rMcQNsnWGKXMq3scHG2HBZRbVrxiNgtGFszCmexexTfXw",
  "key19": "YhkMrZ8ypZ5SruwTieQjPuVV7HuEB2TupZpLAUL77eKRe6J7e9U9oBZ32SGcfD2t6QbZFZTEL1EQUpJSkYRgiGD",
  "key20": "317nMXA3HJu65xeEXQFWEobhzZAgovEjYipsgCrht5yvDV6cDeJHFTf9864cdqSuf9J2LGYttLnBsNgHkPoSPcy9",
  "key21": "4LC8oPESjhpgBRSmN4ZtqxTdi7zc4UXkGHfpNaN1ws1h3LoVm2hX6Duns3Q6jivpXuhWkEpMjvNqUWs78EoAhKqP",
  "key22": "J7B7P5n5ucvmiyVhKLwa2dKENu8FbVu1xoyoVFFBjK3UDMv8qAXN9uaL3jc9or5o54KYTjJyzZBNrNwTKgRbAhT",
  "key23": "2XV2gFDdW6VTx9DnzWiuF4k8Qiap7Q2QTwNid6Kh8bWpJMCzFiu28LoNctLWrH7guaDJU268p51FBveL4LtXYSTZ",
  "key24": "64jnxNnRvf8BXHxwxyE7mBfmyCuGHpdYSmYeLcvsr82YY3PWKEgHoqEXjv3wSWZfiSS1AkeqqayamYkxMxYSZs2C",
  "key25": "5uhbJU6cs2jTTLPJUm84AeXa1K6PWHU9LSuX3tyDWVS5MhQZmSsaRa7CMcN2J3ZjMK2ZtuGZvTzEv2Sgy59BFsxC",
  "key26": "5NRTfndHDNpdGGhhTuqc8f2WFX9WReJgAF7w48A9X3Uc8YyurQnCcGBqUEfLLdWSMNVqHAg5HhMGwu5Qkh9eypEQ",
  "key27": "3FwvX3vqpx33Vfj68vTFmUNqahHXCtb4X1D3ni9jYaJYzemzfLYZyVRvHydCzUf48rGpSiysNfW6kbWm1prtkdYs",
  "key28": "45NkgAXzEaHPtAohKEk2irgZ1ThEHU1fCJC19X48FA9Kkx1ULJMGfs9hP8RWj5wmMGNtxujotb5epEPG2pDR5cyg",
  "key29": "42FjzB4qQNirXjtsWXUJBYpzuP1zAfiMDptSLbg7oEN1wrhRf9PubtvMbqJp6tgz3ecgbvX6yEE4j3fY4vSUNhww",
  "key30": "4WRnHjA2qAksuMJM2kmmjPbhi2anXxu7WkeDhcxgfc4bZqJjLfZKCjHL55UoTYHVGmr9axtmZZ7MQtRW2VEafYK6",
  "key31": "XY1gS6YjxWyC6g3mU39darxAbNv6hsVX7RDLBRrAccFZAav66TAyx3WWsssEFKVXkAR7XQLG4quTnXEaSsUtjSm",
  "key32": "3oAf2k7sazZmmBLZPYWq6CJ6ik3oitbKqsXM4xhQ92doV1e5riHKb93x1ruETbjBbSZhifMAa5PGNt1LRxJqLckp",
  "key33": "57m337SXAHXRZJ9MUsGDSGihYQP8tDpai46yQyieunhJcRev8mkmNA1bSvzyyP8dAKjV1j71nUdpQ3GNiYRAcsu9",
  "key34": "HgXhRvEXQyPrecPYrm96b8vQpHchbnrouEjq56xQVoN9K7zkVUsi2b7pw74jeVUdaFXzfw8XEyAJtyhwgBjeFSG",
  "key35": "3m1uuSXi8k9JGFgUN9FHtshh1BRR22EuUpoh9tK3msiiLYrvdBptdW43bUm2nXKzsLK9Dg2joZbmA6AKk4JFYkoj"
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
