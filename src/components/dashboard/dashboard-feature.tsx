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
    "NiE1UMCPoCqZGfmaWwe6Bwp1oEAGw7Yg2KtWfLvjrFvVa8gLAcUcZR1JmYXqjn6bM646WS869qsFM8NUZ82VKaY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42EBfLpLhDmDmJZMusf5Fc2rLQmzvk798mE48c2Bk5L8B4PVjFJMNbMh6pydbVPmYv8SXLvkAzQHDD17ixpJ3sQ9",
  "key1": "52WfoTikFQVYZ6bK8N1zPG3CcoM6aycyVuFxwUiLbqWWmfH7Kk3eRxXVSfm7JcwUyA2aHj9EkJoBViwqEePVdDyd",
  "key2": "MQ4qPFaKRg3nxRuA9RLrDxgzAYbuB5Yibh4M14tYJzHG9CucxatogZahxpJ7AuB42RXizPCHyyHA5teQcXjkXzG",
  "key3": "53pNF8awLEenC9tggkJsoVgzzwxvLJvr5VJtMro38HydZ1YY5Y77Ua8fBDK1qWNg8rTrUtWNyU8zXW3nAVWvx7Bj",
  "key4": "CGaudE1jgSqTfK9kmqJFDRkptR4fsPLh1Q1vRcxK9NBMXW5EqKsBE72weDGEwBverJXdj2GaTRPmETiKinMwVAY",
  "key5": "4JzNs9sb5yvSSymFkxpXWguSTSzeLcX6UQEztkGibfAAjy3aKMeLLvxi3YUZyCLU3BK24ZzHJmG685sJHCL2LYBy",
  "key6": "5SfEgApYbPQkVS9Mud9pnQ2DnFQxNoXBemkAjxUbFTgZCBC15EFwhQUwSkeKn6NBbu9KyEkpu3tTLAdwKg4tZbzf",
  "key7": "5pK4RSPYKLX2JUNpAHgsJS3GjVFPuQgWHmEU4s2d1VTQtsTBM9z5aKBdru6sshEXbPnZR2VMBpHJuQHyyvKZpJvW",
  "key8": "CaZVELR9cyioq27Nsb6A5Qbd9DjNRNpSc84ddjpL14akkcxJHPzyFmdVXnwknXjd2UPWkxuzk9fnn9xSkCmjtox",
  "key9": "47Njg349i9e4r3pMhUuua11uDa7jAzkUYTruDrRiP3B4zwG9nwtYfiLXdb9edB9vjRF3DA65GtjJ4rRJL1UUAaBw",
  "key10": "pmWLNxgRzQmW9uv612NzFVPHDAPnR9jAqLAKZEkfagCepnyJFm1K84oPzaXjDT5QVwT5ZbfJWDZPJA5TRFWooV8",
  "key11": "4tnQXu9oV68HnqNZxthJk2XjT6Fmf2V2abr8wAjZcHfqLM3ZHS5Uk1iGSYCkqUD5TYj97gs4tqRzvofyvJSwd6o5",
  "key12": "2GyhBvm3i9ByiL887cvvcHHqtaXo1qCQMSFnYV8wuCLgW96ntXzFYU3NmNsTJ7J3eyrqmVZGju2KC7hBNVPGJELH",
  "key13": "2w4WMgtEcUXc3dw68Gkbdpq9dsYZv9bmaGZVambsUcWMy11QDXvYPmKsuBdwqwwhg31jkRsYke7RwGV6hQSypuMd",
  "key14": "5CYCaTUNWREW3WwxW6st8EXuLx9M9zTWyfhs28YyBH1XMfyWdqpciFERpPL7xvbhWozy9ZXK3ERta35rU7xudHjN",
  "key15": "ZS7a8mPs2SkCBPNnCPbKKaLvDpCv7Fgtq8ufZbYpZbFcmvhY4bGpAWnUYn3cBZnREu2mAU85tXyon4MPWKQLFY8",
  "key16": "43eLRP3dQgV4A9ohJmr2WhnUSzLZXPiw3wq6JsR3kRjT6jHXydDqSYphL4vSBUY1nSQqRtLySLsGrzvtFb3syqBG",
  "key17": "3cqT8jydnfZKXW2hmRjP8fKaFyMdYbwoaB79Q1UnyfR12muK75mNcQytkeBXE2Mcemzo1TdwGf43gBhFHdubjPAg",
  "key18": "3LZq2SUFg7uXWPWBdqHK663MvrXjyp3yUSnsYg6ucUwsEoSNLyHwMzF5JorkSKCani4ADLE4W7JGCXyBxKKQjkJG",
  "key19": "4CzfEV1bTzf8CP8LZ9xbknodVhow9q3UCXbnENvexQmR9MqsScjt7b9JcH8w2z1yhUW9omVnyDztMpyDDhap1iuU",
  "key20": "3ZtmfWtSVukGS2XztmDEZiD17SkALrpLkFiBgTQnRHLii96FkzPNc41YcAsWNZyasdi1rYvvSSRb9khbxz4Hk1SC",
  "key21": "4mut9UC6Zdq2PuaGaiuDg4j5vspFQjqKqo48pJ75VyqkGa2jKkac2J3iuF5ecBhB8ZZmwkBPaw8JmtXm3jMXNF4W",
  "key22": "62nkEK8UvDpf4WuWVZwVLCmmSSLgGngFbBjr8NnQ8x9CbLq5QAWjGocmGRPbnfeoPqThvmGw81bcyCRuGKTDYfS4",
  "key23": "41YfHRCT8v4YwHiZyK5tWnAH6opj36E9dJRXWJ4FtNC2ugD2udeKUMdwWkwsmwcRr7MaDSU3pyheaczbooLkY6fV",
  "key24": "3pzjRtfb3ZVMwDsGmvdq44ugtPzv7KAMSQ6mGXg87frbjpYXF3i9MKTF4zwBxzSDHeqpieWtweB4k4JJ6NpbogLT",
  "key25": "Q68mB6gEJ2bgAwRNoaRGRzy8X8ZsT9C3t6sccsiWcMfA1woo682JWvWRHcs4mjrt1SvZC5GCPa2ZVkd7N2CweQg",
  "key26": "4drZgtfEFjxj3FDZAvrvVnqCTE7MQNh69uYe1YBL2qD49hDJfo2KDEfxxxULRtp3LrEGiUQXaqLFY4ExFtfatRAx",
  "key27": "tMPpNZm8VaJ1G7Za73eFa8ShMNnYZCnGSsNEZJM1fTWZJ8iuR3PtBTZGtyMcmqJQHEJeAynNFAuCAnV9zCEcFeJ",
  "key28": "iFjXk8XtErhAbfqHBVmFm1n4zwFHP9F4jgaEpcoWs151DwzBFsrzveoDx1WXg6Td239jf6LU7Aomw3Ckg4adPr2",
  "key29": "63M2RptFdy8cH2DzvEsGQqgHhHaawDhiarUWsBmdkiArYv5sUSbN3yYoKEEhqCcUcuiGDDVAMMqgzdEpPtLbtcCC",
  "key30": "3az9cW8PaYqn7amUobg5rF8Wx7tBWkg69TMbX9SmuvV4FSv4Cj2RyQufZuaDcxrEg6jUYWgrWUCL7tk91CXeYyAF",
  "key31": "2z4s3Yesjbkhc5ZF3qkCxEDysdFFUNEdXXF7hquDcPwX3ddEJfeMN2ngZFRrRogyabN8yTkyvGA6eyeZNkdgL795",
  "key32": "5XJ3QBfY8ffvSbt44D8SmwD7dgavxez5PqouqxC3JbVTJXHAeYncHjc5hgda3dzA2GCZPtevwBPjsLGNNJ5kafzF",
  "key33": "4xzJfKWGPRJLGrkUunuXj9U3hXDJveaSRjPJ8Ffb6zHKhS9PW4t1FRpp4HrahTtEMsg6HE4kMYCHT3kL8euXKHvc",
  "key34": "yUEwdWAuW82D1YUaDUnZeFne5PR8ubk2won2sZn5YRN4iKfBw2rE2PwDkESGLD4yRpuPvd7mDr8Mq5chHypAzDf"
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
