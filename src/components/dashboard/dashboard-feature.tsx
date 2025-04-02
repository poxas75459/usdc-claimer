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
    "3zdWpMNbkrsNsS6CafKYh12ARTYR4EQnowUxAbfhBGo35tDk5kg3kH9w3TLjLxCnt8aYfzGbW5qp5PufUL7MwbF3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Qp3UDyzBMakSZhTbWAM8hJkQE3z6DixFuJWE4NpWumBAb64i722xYreW67E2C9gDKyNNemijYbNkWXoYwkbsR84",
  "key1": "FTcvZ1oUPBH4ehWez2k99JeAy7GayCWimrVWfk5iJGqPs4a725LVKGLuGtRPQxG88BHZw9ULJsh8kbNMNvBN5tj",
  "key2": "2TAKCES4BiHuZhprZ3dMxBycRwRosmaVfKjD1k37DkWqtPt478wjiKKQx1CbW8zrq2hr3aW5G8Moryt27Ae8cw3d",
  "key3": "5GvmEPo8vEJgatdRrwevh7HUmDrusYp8GAfqgTvL3Mn7GuT2jsyoSEzxkNJjT7j1nBQSg9zMMd3xrHhxHA2vmmDH",
  "key4": "2ZAV2MwBZ28cUf6SiS3jufiWt6HCoJRXfmakK2Np5W9S62TSQbCo4EvHufjRQrWEnPaFVSxit1RBf69G3JaQsD4A",
  "key5": "5RpB1nXcjNXCdGGodbYdL7akspisDeNgKz8ybjH4ST3MgtMUsarWSwymMeFHHMVckTPm7hKbXRhU1QLbCUSYzp6b",
  "key6": "2SWTZSYCrDddyPEq2vqrKRaqeo79WBWeyteTG8MqqHMC8RsYuRhYkAURQNbqwuw71TueLWWqToT5c5hGtfFhMFrv",
  "key7": "63AVcKQUKDUan1vPPUmQXi3XAsychkd6yBggABcuTMneQh9NJ69YLfqLgjWWgLv2DFBixTmKy4rDuP8m7KsBgTUx",
  "key8": "672SNuX6nvGtF1cfLaKJmjDzTFmEPSd1TS233vrfyqK6qjWBE9JGuX14ck6xC9HNGgxv26sdLGtuwZ3DHcXPSHVJ",
  "key9": "5K3AQhDT6PqGSqc6mDg3SfKVPZGb6VhnAWUbVZ87WsFHWsesJP6NUZUSfuf5F3B2GjyQNTCG4FusPgucTeyQ5PyM",
  "key10": "3V3yYgYxrpVZEwshHrghzrC6r76YdSGvCm6yY1hRmRa96mF3vsVj5kAZEt5WvJdJVi3DhHiftuEYiJfzsvT9ufZA",
  "key11": "3XUqThhM3LjVJfnuVzUvzkNjcsGsjj8EowiMuCACBJPdSuYH4qz57vR78BXud8F5KjxL23tyByy8LKB7K1LptEuY",
  "key12": "tkgpFJje6W13vRz7SPUNNi5k5v1JXa3WiWinke6arjvChyPSUvVeqkG5gAKNBD5Ucp1vqTY7LmsoMYzVbwjFRx3",
  "key13": "WWWxdj6hMHBT6aiWehJywiNUi2wftgDQA8exZvEKU8LuPXX4YGunDu98PJhz1UvvKvyZrzXA89xGZngGMBC9Rh6",
  "key14": "5ZwPdZJ9hW1mLfekYk9p1r7gcAfJUon5B6m3CTotpqjinTFbgSuzXhFW1BfAvhGaiNYdET2ScE3BoRzboX2MpQXF",
  "key15": "axcnXuStPhJbrejA3zxFUAURqRPwZmWevqoYBCt85Z9UdJy6UKfe3Ug1dQ6qA7z1EszQaDSyLGUdXugtpzGjg5Z",
  "key16": "nfvUYJybquBwXN71sZdFqphDtuw8MoETZxfFDrxs8Su1QZ5GxUcJSft3FPKBRKBFJskA7yFp58xWbuHULDZjHgo",
  "key17": "268LDZa337dX89A8NFatepGnqB6WyQjKYfcab4vsjvadgMf4LJaPUZdSCrPtZVXsgN2jDKZSdeZeqb4Dew8YqmGv",
  "key18": "R9C7nR7wSoPPUKCBreve2DdBYtfrrftXMEQZwF5mRuV55kxHEpVNtK6s5Lsg1VxjsVtUZCgpMPSW3AVoDHszDQX",
  "key19": "yZL5aMPN6t8stbQo5hB1DNcNWfjyP2SSxiBrDJ222Lhrv2KaKgyJbTBsTuezyNh117BVZBVMRhN9q7H9W1Dknki",
  "key20": "3H8ZLSYFGGes36iyJ8TVeFa3oa7GxPtxqVUuTppGkJed1eb9mwuLNQLiDPXGEbPoX5KfowHm5XaxHVobfsLs7XAy",
  "key21": "4K8e7r44eS6Qkw8WFURzceq7vgxGB26aHaBKXxcL3j112VzjZgqizn6xfdE8fsDqNjhq8spXGMfuYKhhaYUeCMKa",
  "key22": "5w9QjSyLuq3bDexGj2FvfPtLFLqMcZ9B384qBanFM6Yjswb5yJGjGfohuWaaWFCkBoLxtvzfo3Yqgct8RWBjSw5b",
  "key23": "5gMPjiWE6W2YUNkVNTFXby1d5x69JBzGtNqpoApVaubCTuKQdg9FL1BrL9xDVmnXrLsxsKSbymxLfe7hysgJQaTs",
  "key24": "2eb9SD3jHtYbpU5G4zA6ikuHCbkm1aQyZxUhwZXKJHBQ4RrqFfxNgV3ggYESwuqU7np4mEaeLiuwJVWaX2PCFEvR",
  "key25": "4htLigkio1uU5hem6CnpTRdHFa6txsmv8Kiaono7oA5hs3Ln2fzCRAWU9wLcQneNVfgMnvxB6QoiQqvDHUQArmaW",
  "key26": "RZRHLjavBfQFd9GVtF8pNC6F386RTEgS8XZNFXxB1Ak2aHUu6WvwEk2TxqHa625idmrb1iYhZjzXSCjR2GftVaC",
  "key27": "5NeJ97JhkESMyQTKKZhHfaMRGHnPCt2dP139xcwoxk2fFTptF8UJuXKh3PTbFZtuRjCP3EeJaEzAohsFjZ1zVoNU",
  "key28": "2CSCG7umeq1PTnnwcvVxDpiXo7mpZbmZgwZ2YBmqubeAWYo4M4bTJYkzmyuETnzhZU9xhjotobJP8AZzx8qFjsuf",
  "key29": "5MRbwRNsdZK9nVULzw3gTquHAK8ZzSy85qKGkcHLEn8f6oXLS8BZzYzUjB3rsZ2yf1aqqXFJWRBUACDB3J5d7qbn",
  "key30": "5uHq7qp5sRBUWJ8B7znGL2kqtjTEyyb9Dh6r4afscxGvBrGU6KnkmFoRdQEQfDig75GbSeaQ9x4i7bsBugE2rY53",
  "key31": "2iByxaqVTM39smMA7bnvzbyHKrFcNwoBoVgzqcary9yc1zJ2EVNupuZuuE1xiygTBeUELp847WaGm45ErGWehVv8",
  "key32": "5CXQoRA4QPUxCCHztuuj3wC7Va3yonHttwtXg9vRMyQt5VPVgWA1D5qFdFbPDHBYUFtkKC715tqXm8av737F6pbU",
  "key33": "2DdZs7LoFt5bspU8DbY1nrWCW5atbwJobbgasEQsNPZktReV4dHXCHc4rhFDNuDXnivxCX8W6NrJR1RQa5j4xRT4",
  "key34": "4Q2LS7twznxzJ88xUcmCoocsQ5kLcX46dJciUhX4bkSK6d79WtY8FnyE6WbZj1VawkNDCPUf6zTnxbZbgEDb4tBx",
  "key35": "ohmD7qv3qFh9rJ97SWJAKacSdrfxMX8Bw1naJjBZR5cdTZxQfyTQoKfvRYjBjqFfAT5e8fPwX2TFGFefXFzNBVD",
  "key36": "67RCCPmUPfVso91QUoJZKTXG5S8EBzcWcqRX59NcgZpc8pVk3LphQSY9rK27utqXkFJivk4APdAeyF8cmP5WePQ9"
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
