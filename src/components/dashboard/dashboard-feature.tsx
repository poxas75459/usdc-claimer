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
    "2Y9QBnZLCg3VjLiuwhhgTMFpRUZMsZ5iC2BVmdrQQx6KSQ3sMuhgXPxGbQdFrArpfBc4X7sNgiY78M582L1iaUyR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yisTGFqZXkv9te6uf8gyiJA2QZzV8U9V4gdpo9oUHYeNr9EJ243WxcQS6peZgFqLH8oMhreVTDakWbjjAoRaciS",
  "key1": "5zJGZ3bw4C7kcnTiQ2z93UJbkM9mHU98PANpxvrArj2UdVQX39QXJ3ke3akRbsKUuzrfLBNezpFnbMFyC395VWKe",
  "key2": "9914pqrkxgvowpxVgqfnq4tnpAyWtRmfFNrBTJvpBnpm3av9bxpjvnTmrJDqd6sdWrxg3xR4Wd9G65odFtnRruj",
  "key3": "tLrmFx1T8VHkwib1xh8p7dWCqfUxgAq2PUuxypCqLmdWtqiKKBjLxfHGWxtEcGTffD4zAciYqHKMEW9ANDvTsWB",
  "key4": "2dMsCdGXRtG8wgLucHxy8NDhAdgYx3f9th1ak1wg9GxsETveRG3GnPyLczgMU6eGnuu19Ks528mYJW5G9a914o9x",
  "key5": "kHqfDGyM6akPMV64wZZhRqnux7J1WcfEfdRsm8Bf4GPa9AsB6BwjffdYvW2AcjZHHhan7gUN6DJDoGJKnWBs1hT",
  "key6": "5otczVnLCwRRCZxp8CjsxvbMXrHpNyyd3chZBGpGN9wVXjSvG6R2Qz6CpPd87b66FhLmYpzxEMMWCtRoNp3FH6XG",
  "key7": "2ZcJgEQ7FVtVSn6uukvHSTpmMcp5Y8EG7k3qW6GoFFNmUrJLdH4LGEjFacpxkE1mQdJ5QdVHM4rDkSBWuifra5Xf",
  "key8": "3KMy68H6pYXv3UtiFPZUg45ycvaXXvGroYbbP4MgtnCkgkmZbJvXtzyKwgM9ZyRHrBqPw6CqX56CLK4XNifF3jYZ",
  "key9": "2p62nQUhoJL8xjfLUqWFDRpTVsnYHDF5Xp2VHf6Qemn4rzihRjJ13kZxRL4JWp6cN6Zhpqojbbgsx7GCvxLakAFG",
  "key10": "2yEeXLpAXMUHLiDGjCHKh2WmJom9zg7Ww2aoDBqQ85Y5VdNnJ4N53jT5X1gV3H9puwYkAkSs2jeMBx93Rh98JMy9",
  "key11": "3z3MofNzvusZGDqC5anQgQrrwV15ekgNCiz9qfo6Ayo9uKcmPUiuUAQ1p6cqQaaq3yNNQKoC7W3zjDLP4GpX7n1W",
  "key12": "47pRiPq9WpcfL5TQxiB33iqFWkanUY1UdJCL3sUkCjVGUFZ4kCkHn4ySWo4P56cXMYnRWyQx2zUEAaCLcMJLFHeT",
  "key13": "VTfLS9NvfkQxekKVUGyCajF2VKh48VkB8fR7Nxhs1pvk4hFcaQqc43ArRrTi5rbYrKqPBidrCiekGDatEb36vtG",
  "key14": "463tf7fBVNWLRrWtB1NorxfPb4yxiQAMM9Wem8cM3ymFnkrtcFitVxKhMRf3ceo9YjDPHZBT2FqV4fKRTFVK8gBY",
  "key15": "29zCqDRaEXYt3NGoCV2TDb4YpdDRYWFTsxGp4o2Pz6pAoSNBhLZHVKHUrqYpQgexrVJRmdyXHVvu3PcFdCysE1Vw",
  "key16": "ThiFfwoiYneMZYmY6MCpycYbMXZUFtrf5vMmXCPvruw6ZEizZnWdu1kpSebg3SeBb5kZjoTYsBAoCo5JbSB6NsE",
  "key17": "3R7bDxan9EFvsduFjNhtKH3XbosBMkR5gFBLhyPzsNzkvvQsaeHDjsvCUB2RV56WaUc5YbMY5iREvGhre1AsaKLa",
  "key18": "4rdeF12WQodtn3vrPXssaqMU59BiYZ18p4yzFuzPEDZP8dFaohFZPoH9G8cfXkeEVaEwNiFr9gSgka8HMUcZETzP",
  "key19": "Z34PwHK8n5vkHnyVACaqKk5FcZkPWEms4SXursEyixHqD3MZXwSceV3cCaQUwvhPr5YgtALPekaHdkQae5Ns9X8",
  "key20": "2KnfCNc5tKVyA9pqaP79xBm232nDwpnbEFBhNNz56fuLikow55jWrDiD6gejWtHVsraQKuqGjeeMaQz2iAwaeDxQ",
  "key21": "5ECbbzwE9mhaihjWWwmY41TfNKXQKrYd7TGJvVpPRu6KkzJo4DXk6iUN2LtaQtWRXs29DEcEhrY2EZczGjdpCBs2",
  "key22": "3tVzy2caD1aMmi5jbRgXZmG9VLuebaHUpJkZkL5Mv2oBnxr45wN4BWHJtbEF8B7P3PjfTnEfGShBcDwJx4X7kyCP",
  "key23": "K2izEM1kKe6zcprwfZcf5jhRmHRm3wwccRHcJx12fbGYehy6NbtxmigVkoCgtcGqfC3tyHpDq3pceBe2hyEMC1t",
  "key24": "3M7z6Pn1FbVgpDhZNRrruwBrGPpbBMXA36eZGTGTiJxdzvGi62G71cFRMceyEuXum9j6YLU55VF9LUVY38n5gm5D",
  "key25": "3U5hDEzVQkX3t3BtKiQnERnbSiU2PcDV5TwrNWhBPeMbHqEDoxp9BUh41SCqFt3RFCeModRXYxzzSS6LjgcqpaxT",
  "key26": "peSiyB3L5oaw5XQWxgXWpciFkggCV6gYBZcNYX9XCEJzygLbtTjx7xhZJ8vooMQncm26c8C5w6nkS6LmFzsnuyx",
  "key27": "5VjheSP4oyhTYLcdD8XWr7rEm46DMcrQUMNKRVqDP9HtS3nZcod8YCJfFPEKTjiUZLn8qHWeFZgHbQvBmfs89gNF",
  "key28": "5C2SmGRqXZC4LDEBcnztyUC2mEhzP4NrHAxN3qDtreAfrEo2sozKPynQgzVKXXa2PtQEGAfBb2xxXyg1Nc9VGzAW",
  "key29": "5uadT82QHxCRSiz4BJ1NncPWKNcZkNKFsd5t3fJR5CFaexbF4QF444ZGcq3mz6F5Ahiefy8q8UkRmSbK54CMCcr",
  "key30": "2Q8PhGYScC4PoQzi7ivG3hpjGwvp3tgzExTMkz82oPZogJ2qog2jhDSuuPcttcA8Sg6b2TtgcWtPwEKLrGTwsDxX",
  "key31": "Ff4Zf9AATfkbcEPFKJzGAcS5Pibaa4TPHSZPuSi8radr1xFCzsvhNz148n6JbNQkfqcDgYGJ18eroiMaMCfzMF1",
  "key32": "4YAXqySV5BxZ9ccxnpqHqPWdPdoDraRDg2smTu4jRzpA6Mo1DjYGRhKZpC62bvxHbWetCjs6E5XtrJFkjsdqai8N",
  "key33": "3KmXffUzr29oq2jGTiSzLEuKErerywgKNoZqCBaTJtq7czT1rAtZCGQESgwE5n6ZWUidoajEo16cR5PJCmDrdLH2",
  "key34": "4k22ZcunzEhMcsgMvMgBwtsAbpt4g4Dzddqcmh6ysC4UymvvAxKi9B2eMFdJo6skYnJzd7VWKP2L9ACUYTZGGtxA",
  "key35": "zDgx4Fjx1ma7g1fhYMdwj4xwHMXWvwMoYgNvgo8bvcwpeFn4k3De3zd1nFwVQmvQaXqMFjq3XYpV2d4LEDBQr8x",
  "key36": "3eughd6ZS7a8aKcnqxt3Gv8p1pozdjeXdELR7YHPwZA2Q7PBbRzLesDKLdRMWu39GK3ak69s4itjhL5c8fKKF5eX",
  "key37": "594NdnPekoejei65tNCTqoMFMyUB7Rb3Ckt6Mj5YDktUYCjDwusDPDawxkQAfirjCdpeSLvzULC77W8xaziQJg6e"
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
