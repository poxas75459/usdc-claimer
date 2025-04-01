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
    "38eHc9GERC38GvmQeeMBKSoGJ9dyVWez1jHXJVFcU55Gquz2buwdprtjZv2444UUMWHd42jnvzjyxzkKuZBX2nHv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GKnLFdyfhoYKaSPLuBWeJPHu7LKhD4jNBg7Exvq1Kcg9duuv1NoiiqSwZ23rHHvHxvyZXkMtd1xW8oEwFFANeig",
  "key1": "hVq4ecQQmXi92w5Jkw83k7auLwbS4GqPiVN2XmYmLkrCXjxfuWNe6pMMG3dvKAuV8myJ2QqXMQX8QNvEaY2F85s",
  "key2": "2PFoZtWsrsMMBg34dhdMpVfWUhiMRx6SYx3f3KD1gxcRd6FHqWUpncZYnmuooRigXLu8ugTcNnvLW3GrxKvWvHow",
  "key3": "2TeUDVzwHDD6STzZRhg2yPmcvVGjnXZNEztVvndudNqHTNgya7X6sY4EKA8AWZCzY9NydwujxxhzYBwk8NYHn4zo",
  "key4": "dbVaASLq7TRSY4ydx1nza6EdpKGg9DSVGR55xrrYrbAcfbZsXDrGRuFoxhExJtgwR1cyQruAW7S3Vybrrz2nWcK",
  "key5": "5ikNR8T1sUtNyU6Zm5Tsk3nGuHWwi9DeNqPXjSHAS9j617bkeZoFW1CkBbFwrJo4vuBfEvdCHoFxxmrqWdw4joHT",
  "key6": "4ino8HNi2XGkW23VbS1jj7ndhzvJSVUP7kJumzDXmgPrxoprmbqo4kDnmo12yL2BpgjMDmNqAxZQV8RkVh6dbZPs",
  "key7": "24x6C9qke31vYwwopmi3oSDYVZps7ApCUf8okvru1n8wNDMs6M3q1fkpG9z5QtcHhBJfyFr9v3fapNz8oSKSCfnv",
  "key8": "2X1b6PAtkaX6TwzwNN2nBubtwawPjBqgi8YpHEk4DdPAwYuJooC8CH9GyfRVDaxDCH3nhtwTG5eUQNY6v15ybXA6",
  "key9": "ijD62JbBK6mQKGTmqgN675gtnr2Lp1dw1QccZsbCZ4o3H8dkKocvDBwr1bRV3VjCScXkoHxCPZx1qJ6ods5wuNK",
  "key10": "3D5Re5WMZNc8jJusj6mT2AYvU5rAfTsXPj2dt4zYzajV9t3gk2x9ugDPuRtSByNxd2VkAJMt3s6i9jXgNXv21fXc",
  "key11": "dseM1gRND2i81nu25vaPCo5NTAY9UZFKD8Af7DWCoJAGvi8bJNBjnwxSNSUzZH4LufGYstYW6Nv97gTiSwYNAew",
  "key12": "54KW4iYaCQXdvgRehHes2Y4ekJvWhrgtg7mVkwRSfrg6ob2wpUSTJeCUeqTUSG2FinUHAbUXQAdxnHNBpxXBgkAw",
  "key13": "5LhFByYMRzfvhbEtLesy3GcEefd9vF8XiydTqK8NYWkhHnQvCYPM88t5NziAnohFQx7CUmAdvpv9vmhJ7FabsHqs",
  "key14": "3YYMqwNQx69jRJmycA48nGp4hAki1EY7FPtjUW6xd74zkA5UW2KnC9qF7XGrs7gTzgah3fJzSYsLXgN1uvWbnNty",
  "key15": "55J2xWMjRSyhaX6YJ8SmG2tfamsVbjUxsTGr7ucJkE8YUHGBukPGyBvENkCLNjcVMS4jhTiydeVSUvYh5XacPxpe",
  "key16": "5LqTRKrCddwAH1b3AyR4nFcd4xHJ31cG9WoExYGqxPBVobyNzSzQqvS8ZdCPa76gycSjm8MthmPQd6oKb2FZVq3q",
  "key17": "28Unirpjg2pReBmDFyn4XDNQMHvEJjQE4tHe5vGoZz4Z8ghtEu6gngkgud3G7sdmoQkW7VrJxNt51Y1MqtqE7cr8",
  "key18": "2cRTJNr73M8ZZu8HMshqpxYiq7LVD7RNGMkQ8Tor9p5vnLA8HZ8FRigP1HLbrHPUpqvosc9aqu9M9UcPSrXqVT6w",
  "key19": "iWmnhetpfUj5cz4467xmZbj3ipJ1mcvZRVxYF5JgksZjCjd4kiUR4vJJCTU2oT6VHtjrWs72MfSCC7ZhH4ML5GC",
  "key20": "3JueTcf3QfeGg2xVC8qCWANNte9PtvZ4q2xcAYs3CcVLKHHEGjrFYFNXbKuebCM4TfbZ23PwHKu5wkVkmrz8rvTw",
  "key21": "3sQMKgSWzdrUeWcyQ7pc2KfontumcSi6LTz1uRXbqK8UTUxtwXbDeakMUFDoQUMe5JcEQgRYAYfte51kc2TeBden",
  "key22": "2VfaQ1UcTKxr9ggUPNk8AgituzrkWqe1wJNMmTUnLJbUZ2ZMziymoPxE9PdKBRfncyBJgVnYjehnpTzaMGPShXeE",
  "key23": "4V22HFP9gkqELdzvhYLBszbz9duQUwerDLyt9jYJGnjn8H5jkM37iHyUmqVdxSuX5voiyb9ULtqKfYRdVCypLp3a",
  "key24": "2h68b2UGfqXG3bc3PF1g1r9yqGwL4mXZpHWum3AxeB3UDZECkU5K4kp6tNqmZuWtkXzg4qyJm12wWxXcT5fZQE2q",
  "key25": "kGJ2mDLXa9BH8LBcVS3NkqqZSf2JENQrh5uDfut9q6hYNZ71tvZDCnnuPnBUCAKLCbUWwzHQnpQb3ZSnLUthRTD",
  "key26": "4MXju6DAhJBFBdccdTkorH3zKJ26YajzVx3e5YDzgF9BB6tCfLmRq7eXQX79DX8DRQ2VX62nv3cwLynZmBEwirBR",
  "key27": "3KJ3FoTkmMZpBABGDAkRkVp1x4NdiUtg7hBaLrx19PAzXbY6Rm2hiCUAd2zvqA46Bbn9AwtWpYAhhEU1u1QG51q6",
  "key28": "3Gjm93eqwQHqHSp8z4rreMdGCsNwbNDRvaBtSeiccN427enSKG8z1vA7HniNkyxjepXH5drYRAM8DFEJh412dxZY",
  "key29": "38BZq2VuYMY9MaPLEHv2KeHP5Yr5vv8ysP6U1V12pmdRA7Xey9qoh8iZzLeiN2EHQEx6JxY5SLHQrBDwZYWCNwTM",
  "key30": "2ocfvxj3PtAvg8apKdE8QU9h7kzkHyWacLgWyx59V7n9LdZdhayCbumgAiKtwpfFeywjUCT9pp3aCK4tRUay32Zb",
  "key31": "5dRoth2hFEYwNHDomDuSnLG26prX7e9xo1yV3afM3F7PgU4HExEoRk39vCPuG7JamyXsLnPXmMHxAfjsNVadrUv9",
  "key32": "5qGALK7VDsUqC7ZVKfYpm6EmA8WJFE3wjZWsK2spydTgBSCDF1qQHX284izr1RS3inCUbRs2VDbtxJDbe5THgk7T",
  "key33": "5FsjUCFWLBPg7ZRPHFhJhugjPDYLid3xLGRwosmBngKPnmDgWw39qjAZvzzBg9rNHNBrctoazVkZFFHTU5E4mSBB",
  "key34": "iZV12iFA4WryhtmdV4VjFRACEMYNZJayfGBPWRP3UxEn1LqK63smtsS1Z6XGE3FxWai9WYEmDXwE44as1R3Tmfk",
  "key35": "2i13JadjunxAKvKM4ugyReJEacJwVE1D7vCwYed9oGGABVqPrmj98SbLSoggduckKAxSprNWyqpj9L7qNG8hgowX",
  "key36": "5uN7guD4Z2CiJJoqt9Fu1MgNseKZYnVQXzNwnYrrnf3y7seu9ZZH3RPgcyvTwC7jZA44pCdVVnDZiCctjmfXwGsr",
  "key37": "2kaiu7z4BRiYKpJTF4conyr17BmjvnZa52w4L8dBBTwkNoreT3p1uDPw1z1kYnehLWX3VvGCvpYMV1VEJ4LkXCru",
  "key38": "3ExgZ9wUrTtZyr4AR83XMT2LbkbQ4NUBJv6DbrvxCmGuVhnqD4RLnEpEJFSb74E1cSJAdQP5TyTdnX9catnhCA58",
  "key39": "35Y6NcQShnxSQmt1Koav6iibJXfubZREZvkXroRpR49vCoCYafXd69LHxQViMPjpr4uhfW37zcTSscejdeQJACF8",
  "key40": "2Kegoohvw61ZkgPr5gAuBdsSphJbFYt1xwD9xwzFVgQxzdUJtnPiapkmG17ThagxmejYfqhnCF7qZHu5xvcpNq5c",
  "key41": "5cBqS5NrrDyQBqToZyGNooNdWV621rvdPubXEVMbhQXFdVHXR1x6vx1qPdgwb5U1AJjRSHDMAPXQ5q6SHXZ7u7N9"
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
