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
    "55xPTSVGDqPbEssyYHybS2evW3CiuKrVTAsCi8SwhUZ9YDjF9CiNUJXaAmRttWAh7jRCaCCsDSsxs29Cn5NLxKtA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4H8y6gguSVW89BLZBoXBWPhfKQ8b7rzfFvVP7xXzASszQ7WwH91jZSYag6EtDo4vx4bzeQBPgHmzHCBHAAVmyZko",
  "key1": "36i8p3f6KuTTgubSHZr5kBKqCNer12ZMC8T8b2qk26XvNqR8UfjQm7UfNZRVkczGDK3yJpSCgBNXKqzTy8QN723x",
  "key2": "5UZrEkhoQQqU6JAoZ4ckqDqmz7Uhx649m932cGdjrS2pLrqgqNvwaBLkruqVN9byHTd5udUhtoUyTgxkrmYrviyY",
  "key3": "EyiYLEt3tAsZpDSwfwAze4wmNuxSra3zp8YcgfrSMUbreT26U9ij6XNTPrsE61XE98LoLMSsc8MaG1qSW19uaLT",
  "key4": "4UUhnCN99jVhwtt9RAdCbRk7RiArWYQig6oQSi7fLqFEVLkzQ3LBwjxfBSDPK4xqBkFSnasiFsRTNeU1ek2uTAnx",
  "key5": "51f4LKwe4XwDcfREuEcLCPZDCkx6N5SPU7pVWdQq67PMnp6ap2894QtwnNgsfurXDm6b2DQoXWbGUKNJ6efA41Ra",
  "key6": "2ZGG6Ze7YQq56ffDkvpdThzJhHrRJGhwMnH8RYGAQvNKV8yV8KMPfRWx8j1Lsyv9TR2yEaANGYnZmtnS5fuT1JPs",
  "key7": "2MiFqnYCgng92fgmuNXMtruWeXjzzCgjHqyd8XLMG7R1HMBTcxzYE9qC3PVX2Q5KYrrAkC4fDPd2SoUgZAwzas4K",
  "key8": "5yPsQ5ZyETGiAVAFxghM3mwDtGBeHhAcgE23UQnWncDz13heD4vHXTZysnSEMimBNuACqbEe6YiDivDFJcX153Kw",
  "key9": "enqqtfyuNSKWtqMwJ7AiPPfK4iYxRY3ek71Q2ck4ntDPB2FnLvVKN3DPyPGJ2zwL7dNuPJxT63TXLJETrmzV11s",
  "key10": "5q64pPKwBWQBsaKA8FvSdGMordWzLJKmPggeAcJXt9RuKAj81kGTgYjKMudgBKcCuAmEfSyEwia9sPbWuWdfWk6A",
  "key11": "2G6NX4WKjG4g5YHp8kwDjKDoSULareQU9vip8bN7T5Sp6Xr28FKS7snXsDTiaweWQYVaB7YKYXKgYUtTkCtpzd4t",
  "key12": "2t6kkCJWMJ6skGY5WcvPddFrcX5Wnb4Ls2onHL66T18BNP7i9K4wMHqtKAZSPjP7joDwJgtVMB3DFPcfa6dLY1Yd",
  "key13": "ABw5BgAQoqR8aSTWQuSQFAy6nEZftUxrFNgtixkVmFkwEPwhPGdbeoJcJ1XiuxjmmEquDdiDxqz1bHSje1Wrz9k",
  "key14": "37Wh1ZbPZP7ARSkzHQsFuZLN9YtJ2s6iFbTnf1iJsTyXEcfHSdbzNRDYRnY5esPFxFJnEjECVSQ51JKwNHtq7yVX",
  "key15": "3m5CdqeuPoCSq3kbwR5P5AjQKWTW2WBRaFznWchm3r4aNRMzBUtVJJHLcvqgMXRmyiWj8JHHJSQKsHWyNxkTshDd",
  "key16": "4qLcNqZzd5LU475TERoJPrk8S8u1ffrAh2fW9wL1tvg4d62nsrWERsKJ3CpBzHTERQG9R2nnuKMtyvmzbmAY6PSJ",
  "key17": "52HQd7NG9CPeiako5b6MUwC4MYJoso98SUFkMXBm5XAxuKSMAWS9LsKgFXuyGAo2R2D2LTjF2Cb2jVVGNkQEYYZd",
  "key18": "PJ2cXRJNuvPzsRxkTgiVZz1okrs6LRhHQU2udUB8dt3occuCdPThqe76gqmL4p7hKKn5X6kvR4nCnfACnqLp8fN",
  "key19": "2FMPKeZDtswdK2PPGuxo2ZMx9qjW7RUrfFPS69pgz3xzvvfBgwGgkPi5PJLraMFSejeixrQzcJxMboEY3h7bCsaG",
  "key20": "5f3Vufc2xCK8pf8oiAE6qrvagmNZBHYY5mmSxyXQL7YqiaX3rJty1xyaG5GEMimyj3Tz4Et1CCy8nttKYd2N9Eih",
  "key21": "34oL9c22SgkzdETmX3Bsa33LmqwG99GAosyqvgU2yPtkTQuB8T4Me6MZhXg4VQRiTsHQoyTWcUD439EBW8fawiRV",
  "key22": "5hJAHVviDVCu4f8JmNSkusJrBndtokFB6mSqKipTfh6oSSWXWcE87G45bvuXBbSWEnopmsbmUkyS77dX7PKsTc66",
  "key23": "2rDUrGAnK1AfQHHb1vkkuXeiaKxeLixqLzSPuigpQygXTiMskE7d6U1DK5D1cz1ZrZtokhFg2EVhsU3nNGoYJHna",
  "key24": "2vNBXvRNvtwU3paFvPtx5kVVd5kvvgV25EzU672hPxqLUgZdGTmv2DxX9GCMuBJDgBBAaD8PuCuaKFcdd5R1ehhE",
  "key25": "E9vkPRm33QkboXGz3M72CVgPRvnmpcGsN9gNanFR5j2FiW7iQgoL3XxP1kvXTmFhiinamgc3SiazZaSunp3a1zt",
  "key26": "56HaoC9XgQYz6sqTg6rFaye3jUtN4ioHNXZZeiXyKUBVYgxvmE5BgSxCUD2oDXj3cXVEes1QxGiRdDoBSHM9wZwX",
  "key27": "niYLbeUmNefW7UtFvyNvpzKjHJi2NvcDybYsqmrUQK1zRHZSQCxhX936LhawdfqbePbTHjewk7XbBFq9J1TWBGR"
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
