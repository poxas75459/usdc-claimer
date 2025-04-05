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
    "3PXC7KURBcsZHA98sUqvZ8F9yGBcoQQvkpH3fx8gmzjHRnyA5eBB2M4JDPwVifnft9Gm7mk7vBghG7kPAVQxfbD6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Qfyjhegf76REbsLNBHmFa2H2NePqrq4MGZcE1BmdEgp5tuhGXQaZEubWd3DMb8MDRuncfTB1EVhsU4FgJcgSWnu",
  "key1": "4AWdtxcBXwNJCCg4DDcNTLLntBs9Nv3gjJPcLZ6JzuFnxCGv6Av1dcYckPUsSJuR8ZtMcshEjGXEhWiZ1s59wi4M",
  "key2": "4RxYyHMeyfJaeYDa9oPtcvHRQUo9XmGeT6B2NxQJFsBtQiitJqvCSw6nKzpqcaWdZQCj8yV5RiRBoouztRA7ufAu",
  "key3": "4ho9V7rToiSSWihTrV7FBa2k9gvHboVpM5xYyuC3HmDVBLPtPUpAzu7uWdmtepYiQKyetv2c26fxrc7EAG3kUysc",
  "key4": "iDC2zgQvxLch4skeqpWm8hXGEL1rNCwjmpCBZ5MY5he59ZRbfVUpJsze6d6YQG9jvekQfMn3fNpwjq7gV9DyAvm",
  "key5": "jZhAPg7tWgATnXbpbbm8AyZJqFwCmexycxDHPMinzVNgKrZjmqepTWbtLFk3M8GcvbxpZsDL5P75JvFtDjxqN6c",
  "key6": "2yePWRdKZcNGP7XSNmySyQw9Uto4SLMTfXGZqXjK8X7YMWLhDBf8rJNd5QTZ4gYT5HzvNbcFGbWzbgaj9V14Brq9",
  "key7": "4cYqAs1NjAyxu9aNZeZEh8URAbiufrrBDGD5tfM5ikNMj6pTBDiPNd3FLWFFQUqfcYypGXCzB6bSAxhLe8hu4UXA",
  "key8": "2fNDGcBQrGKKrjpQkFrhe4ztsbtBGGmqbH4BLNAiS5nKB93DJrotH9tVVxEcJb9YkWjxXHsUQwJik2bBReUxziKL",
  "key9": "3DnBuoYTWx3uieeVYXTfnee6rq8KmNXpkN3HzPcC59wiMc521RgBtr7JKAqESz1sVo6icZFU8TexJf2SoBnP2ToS",
  "key10": "5KpyjDjFVr9pXCJtEJb3LL1To4KvpR5VmrUcgL7dDa5tCqAJ5tBByXm8YGCHG1ABxMeEn4YYexdmtM3AqubzpdoC",
  "key11": "r7QS9QYs5oa1VuyikJT67LWk3Q47b7GzPbdE4JFZhvG8or9P7yWRtfncgH18EfaY3pEatUCTwQoGhaDcrYDcMor",
  "key12": "bgANL3ZQVGJq6oYmzBTokdWxTRN1r4dwgUGzntReCLZG4sMMjonbSP7zDuutjsJ7J1kiJKFKUG8fERXA3qzYqLv",
  "key13": "54iigrvFs3f98hV7DYEuWjimL9zNEkDSm29thZX26gx59VwqrkVGSPew4XyEjqGUutZXTK13sR6phN9T8mh7ajbH",
  "key14": "4agqe2xQHfAwBb3yKPPiUvQYcb3aC4SKJB59mYaLXFueryuSHuEu3Nk9nVP5X1Q8rQSsgjK2X6yZvh31Q8bY5CV3",
  "key15": "2Wc1bM19pe21h5fDm6xuCGFBUeaKaD4cLfmzdFyZaus1mZKuH92j8mqRvU1hKaHWbVHLZ3mQDR8r8rywsdPDWCZ1",
  "key16": "QrmEw186rBaYWEzgToXN7dEfed4R6keMKuTiYgb2vByaRpzScW4G6wBVHaQedZLchYPdVMEXaiQuNWKsWa7Er22",
  "key17": "gXiJBSCvVqsADcvwbzggC1km9mJZ1r5rAjzJ383PMEq4wLa23Xzdn5cihYA23jncwV4nWWXCnPjcvUjFL1kS3Ff",
  "key18": "3yCFnUyhHYv7zAQvRKj23voeUhANpRdEJunCD2rwMabnkJeVScpQjeW1Z59bquLinSrJ4CmHBY8fkQWivccUUvnT",
  "key19": "2moTrCtcjWTM3MmoaJ71VSiJoPZ7XfhonuS3ReAfz11xfXPyzMEACbsC5KVNNvvf6F4KuGWLPKSuVFafpmnyVNzw",
  "key20": "5JJTLGwJXHz8du6RbUMWY5CynbCxK4Smwq6yhZSfU8mQmPKFGfKTRuX6tVHb7u6GoTYSLq4TGg4t4Ai1sEW5Dz6W",
  "key21": "3vRgToYETfnAEzApLkqWL8XYbpyBgitTkvwZ9U72ThBbToqWv52CcnMEaqxyDmoGBCxnodh9jCvWPpVH9QunGqQX",
  "key22": "4t4utarmQz2hQpJdtn72tUC7DmtSknhofeCyjF528MaEj2q9sEw8Ls9eihFrQ2yMx4ymvFxXpNJRxG8Fttk3AWsN",
  "key23": "6422ysQvq4uq8qKiVyYui1nqsrkp9x9KBZpjfq6rSZxPAun86jNQ96ZAhNWcLDgFiUBiUfycUzuZpwNrciMtLnSR",
  "key24": "24sFBL14odz1CrVsGDzPsNJmaLuMLshaUtExKtR2msHfPpoLcmHgQTpG1Sc1g79dNYRBFFJtCAKZGBBuRrSUro6k",
  "key25": "3dfdaVhPGeRgnkPEnzhRBg6SD6Cb1enzSP946sFuvfQj8yWpcuAG1w8DaGSuPH5ddvCLRLSZsYqWbKx7MiMwMecc",
  "key26": "4asuRMbSA3MGPmXwcZZ7EgC2qeCNGvnosQKbBBka9XEE4Y8jhmVrZTG3Kh92LCUizsLCs4gUfzWPBCQ2rzWvgjjU",
  "key27": "5oS6zy86aXH2JgW6iHxkuWFuSFmAy8ma7WTgF1u1cNYq5BR2M5AqhsJ1LZH3hXKRqF4bj1qq4NA1SjrKSbMSgKjs",
  "key28": "5Yz9yhonQ3GmDGsuuvS9jn3oqT4mTwFeGYSjtLBXJa7Lj3skZd7n6aTmaG3f5bZ9VZhEQErMDzwF9HedZkZr4mzH",
  "key29": "4JRjUbckva4cZ8mJCPYpPdG8Gw6QkR8TksyGV217vpKVHM2ACt3tE2d44RYJMrxsj6XQBoobiT3itAoGR6HS3MCG",
  "key30": "4k8YNaNWgM27ddqvkygBJJs4oH4Jvk6q2zeDkv9EJUWzU6hWiMYS7coiMDiHk7urPbG78L9u1HfYPp13RpL4fTqi",
  "key31": "5NyjcGdECVx6gSaUcwHEYteNQJFTAkeHQ5AUxx6k5kc3GzwqLQuj52NJma4AdyxaviJ2ysJQnUinHw8sxZxp4q9T",
  "key32": "2EjdoEbiJXRB7heDYkCxwBaM4MieiYFxq3NfUnPNn3pkzei4GZaUc8A9vQag2Biuo4jTofY732ecf4zfZfsgRsgj",
  "key33": "2NYNTCDUrWzpoxD7LLh4vMUVdRpekYGS3A7hWG8p1dR4sgqQbZPfeijGb1jumNMqzD21Wjzu25LaBLRXyYRLZvbT",
  "key34": "4bW8sbk17qmMs1VwxpnQb4hcRM9YXqtsdekzJ6E1SN1Vb8M6h8Jz3dCaZ5dkGZSDBCZaFbRJQbJuZNQCoBaxsg9A",
  "key35": "3RAi2Wp3HBxzLZCpYLYavBdByGhWT5JtpprMrSDGitq1VE6NRWwb9BWKX9pzbo9rUtKQYSoKQLPSYXs1prdJXqTY"
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
