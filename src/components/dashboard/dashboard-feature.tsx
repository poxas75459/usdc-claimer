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
    "4ZVwsAVniyqEEujmLgDaYNpDdJQ5ih6jkZswpac64jUxe1vtYXcYPpRSbcTdBeh36FNY2UuQu1xdPnTref2gD5u6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35bJVoBgqyo4WdcuYkh51w3RHXTbEvf3dEjSAoxuw9fP9RH6AfM8E66nwaWksp6acW71tXSmE1vZPzeFmLXCj4v3",
  "key1": "3oKAPgawcorgekUNCnAiX5ifNy5biYUcxZchmzpDRsT6x2rq5YvAFuj9MLXqsod5YKghtypHAUGAbLLz4s3UjiWu",
  "key2": "5UqXeZJxi8kChqeEL4E74bcuJMQWDEvmjSF7QCeqkLm5fKyBD7wKhESuSPAsPXRr4Vj1bJByYDpc3WmXhFoYVRF6",
  "key3": "3c81ucFWNiqmoeCeyjTVqTguFcCP6ydBnUDDb28NGu49NT3kQoX5u7Zg7HXEbxcXdfFYeshEBvErGmj1gRZoFPQc",
  "key4": "wUg6yBXcze76b3pRjz8KzbXyE43jhkXtbd4JfFg7DbXVG9LX8dQxErqyv9eS9VhnRvnswoMmCZjLdt4DQcT612k",
  "key5": "UhZA7kFzvnc5DaceM1aqsW6U69H4wa3fjgHDMMtYMYs1JDx5WRVVZsXajsoPZ2JSaXtixFbtvh92zmY76W7L3TR",
  "key6": "3PwbDNPakhCD3Ta9iPBiiQ6D428a6DzoBaeYm2sCkqNuKxseUpinrFDTohwrnevG6ia9suX9gM6MQ5V3HtmyM814",
  "key7": "2eyWJdPBfkMfR1QtDpxiTG9RmB3Geid9gfpoeKRzEY7C9ozF5zPwfD466etbtcvkUeoniv8jyoFau4CK49VBQhnU",
  "key8": "4fMPphRnWuptvmCWawi72ksTitmoyo6U1c659J1c7y1UVBeiwoNpH4gZprM49ri4rx8KprmjgWYS5PVmfKknh5p3",
  "key9": "2Xy57BYoVcwgSabYiWKo3d1JWnLdVG3yLNKq1v2atueSr7VKFA6KC96TKco1x7m2NjfvZWYSAWnbEqTi8Da8eKfa",
  "key10": "4ygBMcn9L8J9n7at2uVWeVkRdninWVz6Bo1sYUfYLaJ77e8R4KxwcjTyEaJE6uoAY91nSvLd5ydut3eRgU3n8XjH",
  "key11": "3Bbn1NqRoL45p5nu4zcZXZjCTksgX5ApSt6d54CmYh3RmSSpbMNvsCQY8e3hy5rY1mGqbxXb3BJNpDh8MakbAicT",
  "key12": "3iF1mcgUACEsKSFCzUjkT4QUjTKWCTAhUsCdjKQTB4ogwjfvWaFgLxrT95U1EH1eoHEbkeQZRkhB7LMWCbxvGksk",
  "key13": "5EkPX561tHmwLPduNmYgDRQfEHy5vn5FzuFjEoDKNPStmqYxc7tDbHYBsAbss68TbzqykM7vFxaauGfjZLBkmwut",
  "key14": "iEKh2AaqtSmsrUDxUBa6PKFbTjHz1VKNKjksZ9uJumkAxh6Bz8pXVmqMbjd7VMY6FRLYX4rwRr7nzijwsTGVf9v",
  "key15": "XmRraVfdkR9Jh4ZbDghoN6XXRpTwfh8rxrxK4rQEYyz33hG3hszuqkEZxcTmRSkjresgrNHw92SofpdihM8GWoi",
  "key16": "5ipEAWESQ7JyVfqVxWEkwSRf5fJ8zocUHJqhG1WsqDfPxSk3SFVUW9Da5zD3PCySCuepsZLa612qvXV4iLp7jM8z",
  "key17": "39yGCmhdLuBf8UpfbooAFM1YzNHTvmUAdwUYZL1FwNPzAcmf4a1eVbZCembn6CZjV6wuK8nvQLVAhgwS9Tvon3yM",
  "key18": "3J9ZzsoV1JvMuJrLTqwTrpNbAYGmjv7ngpRZpxHuoEs8czNX6No8bexqmq8Z88v81x9TKQsCsfPQxSJucnytqF1Z",
  "key19": "46Yzrs3zHb3xCqAYBvBYmaYuURWCuU5KEeJVKx2TtNSmgsfpzdyG3WnwqKiPkjE818FtqmRNhGhjgzhduVP1fG1",
  "key20": "P2CCmXnUtSb4z4Dgai8mWvzCFJcNTwugqugVGgrdvUsiqdtAQ2XNv1QQKreQQcyaV2VyiuzonkbKySQxypuCChs",
  "key21": "2KLKNKkJ1dt4C4LW4K2jV7yjTpky5U1L24Nmt5RePUBThrVpsjqxz8XU2c71Mk8iP7hdHKtpkD8dH3ZYMApkN5xH",
  "key22": "4gsru4xds15GLpneYHYvKJSytPqZFayByo663s2mKD7ujr2pVb9BeXpqdeQPjCUNv56ebJp2XU4ffpy45Z5dMAuT",
  "key23": "H2h6Cy2fr6k3WMrg8T8diM2cZKrDHDRchEssDnc6J3fJC6pK6v82o3ttJLF2ZGfBu336ByvURz1AWkbb2gzgmA5",
  "key24": "3K24V2vw8NxeGcZb9AuNxBkDoZ8UdWhSJ7DSpa84ZJ1PZXjBYJc48TV29fMXXGozh43QQ3dEs45SzYi8fXcSd4Zf",
  "key25": "2fvbcyXDVXtjRvafhydTyFsy7QjXrcxAABM5cHybZoU8E1mt3m6CkdcnMc8yDEv1gy644oSUhUXKut6g1f7TB6i1",
  "key26": "4rjoGbQ7csMDiod4fqs3cs6zuN1EAnuCjXrtxeH66KksBx4sASwWSgDBXzaefcASBgCDTmDV1L3PCBcK3u6GbHgN",
  "key27": "35vRnAQc1fmWZQxLrwn9GDU4aDjfa5vDKqqPqZ76M6Y4VC66ChjvuLfW6qt7GkqftQZYZDeuwFgxmWdkfbx6p9hd",
  "key28": "3yXag33Zxnnh1tBDpyMXGsBi1DAXJCkDSsX966vJ5K69tVUgYpAf384navUbamfWkKQQtKy3Lw2NX2bMb6PFHeym",
  "key29": "56Jx5kqciWo5hDiDV3hpa3SPoQaJuBEmR79pdgeikVVZkTBMLcMwfn8g3Cpc5MjYtKF9To25ZvS7QS1Mc7gxfx67",
  "key30": "4kCYjzrc3QsgRAhCAK2qFeBgj1PbPkrFPEgEq5ezapMjZNn2E133G15svfMsgrksZtvtSFAnhSbvhURdYgpR4zYU",
  "key31": "3jRAHj2VH8r2m6Da4F5ZiR3jjQ6HLQ6TMdeRkEbzStvavpDsBpE1bWRBaLep58D9PX8w7dKyFf462W3fsHvCaENa"
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
