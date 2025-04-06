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
    "5oufFsVsmDZde1PaoAZMDp9HGvVAoqBuUbUGWCGDvP14Gak3dh97teYZAwjBaR75ErXDKNjBCxuAGEmiizheb4qg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MoLNtdFD7sJeY26uYCq5Myn2C9Xac2v9enBEUvCLVt6jsRg7tVUMrnt46RL2CTdVevfJb2QpSquzthm7knUzeiw",
  "key1": "3whHc4w7MAU9DDfsh2W8xgKV71yWuy8HnGNHxVU4PohYmT99Kr5zB92gD1cUaSS6h8qPJJjoxSPj2SakhizEHsGK",
  "key2": "3oZopTawzJgntKkG7zvLPnjsK84TJtx1bTe4JUYuc8gpj5HLadUzkuFq2yq8gEsV9oXkFPxf9CWZcNqEobC2JM9e",
  "key3": "sTHfTRC9QWTtycH3j8azkRdP7o9re7DqkdYiGX6FbASbGrs7iQ72JsqpqiTJZM6ZCXVHLvE3VgVhQPb3Dkv2gdU",
  "key4": "7nGaZvVKnm9RV8jJUHB445nXMZM1sNmr5zLZ2no9go5pXxsPZuuqckVMR1fczQNpia3YZ9EXpAEpg6rvc4kCLm2",
  "key5": "4pF7KxZbtb7BgpeJ6M3ZSSASgfQiynN6USvDKNwSDxXCC1SuWCoALsU7JiNdo7mWSTwPoF6fCLper3265wzGDtZa",
  "key6": "27JjdehKA1d2tZoZGit58qigmMByC1qvFE5nAxVVfSaDuZY7rUgMmtJtnFrZAv7ot1DE39ed85VxB5dH3k9Nu4z1",
  "key7": "4eF492eoPfA5tLmGLbapRXQTcemU6Y4Q3qWGQaMd9uFeKcfQQeVu1pKMEi1N7MuyFqv71hkvKtuyQy8YD5weV9X3",
  "key8": "3QMT8xKSbcWjUHngjksCfjBvzp97MH8gWc11JLvE6CbTHQs98d9tncPUy7W3AGNrspiU3myWRw7wfzmZvTUqVkXq",
  "key9": "5NdQAx8GGk2p6x2RmhCr4cmeRRedEydaxQoaN2Vei5gPCTXTkshJqY1G27g96LZfjV9fsfCZpSzkeNWKUZ23t6qZ",
  "key10": "5g8iBdZRKqps7oYLEeEVFuAdMmGDWjjCSZqr7WK1iU388vRTMtkKtp78mcJhSS5J6c3EGrLAuSaoR3HPsAkPvyra",
  "key11": "642U23Z5fdRMfgHTUBQsY9B28ZG3TX5qT77YdzWdJMREyusizhgmQXZftUhc4UihkCj3ZkxYSB7m4UymrusPjFfe",
  "key12": "2LL5hjiqqpQt7eVRavB9HfhK6m5VLin7F9484EhSNUwSWxf8aZL2ChYayntkeCvtrwdo1fas9Q1rdP7w4B6aZoJ1",
  "key13": "5nJFnQ9KUUNGDVQBcY6fJeVS61qG9jU7QUZcYZQ6Hdm9AgSYQ68xnFkcrQfAae4xSPFxksuC8KQp6UJC2zCaDT9Q",
  "key14": "PpkPXRW99drkUwKRDDsHb2TmWLXpxYYTDRKYxhitA3yQVKZ9jLtaDY87HK7SBKV2GQCJkFaUXCKUYPXSTAeZZSG",
  "key15": "mZ13t4hMPLqnxPFMnJaYQj83zFS4CAt8WtiSHSGi49zCFvn5KQEvXtpVnyfvZFuPmE8nHaBuoD4xUf5SfkqzsHJ",
  "key16": "3bM8oJUNd9oTJd8xTVrCn8pX9K4oVce6AW9PibqNp9JCPpWe81cNsAVzt2SZ35PTVz8RmW8zxCQgbd8kwUYoKtcJ",
  "key17": "QQ55jCbeeSiHSiJ2MNA1gN6Jbo3VVT1SQ2BjXksPuAoNPPhhuAZCBwGDqDm1fyeTru5WjpLdCRZDVng3MPTRWFp",
  "key18": "4S5w5Fbh8qk2R88uoEq5HLYp2tb1keCBxt4erRfqncpGyrfaJPgwgrVe4bmxGwcmMYppp8dyBbrkB63CrUpTG7wH",
  "key19": "32jkR4qMcynPknCSfsvwqWFY122oMGMq8uVKnSiHbHFu5kL7Cc5ML7VqeWrYYtFbobfyLezZqroNyD9zGejvnuiW",
  "key20": "25pT1bRivPpQn3CJS3MQQmFgyP7xC5WJQozHSkAp8L6NHRgYJFkMJpxqosaF6iXC64aMgh93mdtXZmYxkJuaAVxg",
  "key21": "4Myc6diXVModqwHHHo62m177SJP4rTjtjjuBxm6KWKdMiicyBV2sBdb7wYpGGeiC175y929hUfRPNYXqWD3GzsLS",
  "key22": "2rAYhrehmv2ZkSUaAKZBFLevPwWgaCxJ9USt3JtHEqUKVYvaTLqmHzWmHHW3P3EHySC88XiV9XRBtBHiRQAaLh3F",
  "key23": "4CvDTLCf6TUpJkhdyoEk8fDQYbbcWQkb1Z9khMiqrCC54NB94wzsHBXvQCrUfG3fdEsJ7gEuXYTk6oFr8AMawoN3",
  "key24": "5axffNXdcuPXFZkak7ftGNiokv3hwWDdihQ7osf73Bf5rATgmsS517Dgsem4RduHdr3DwcR5STATBdSRHTjTfgRL",
  "key25": "5xzfZXaWxzspiFkPpeT3NbHSkE74WwY98hAPPHW8p8Li3dA24USnk8zc5W3SMx5uPh8q6Rrz1R6v1izmPgCdggey",
  "key26": "5YCEjpVVCR7AAkmQaTGLFdeKth5qQryUFaXkQn4nwRByqDQnXbMMFfj9pnsbm7U3ijWa5SX6jYHbrT27as9F5LZb",
  "key27": "5jAfjksvyswFDXecUmwAXp5P5QpY7R6VoJRL3BTNdJyZnVt8woTwx68oUsvh2aJ9mYDm898EdhB6FiNCjRH4Wo2w",
  "key28": "2tuFeZifxXEGS6zW7WKJMmp9HBCPEs3zM4hgvJ2qWb2xx4NxnxZaqa13PgHYMxj7QgpL6xqaBaTHAgKeMmGjG2VM",
  "key29": "4QjU4KLeTkDipXdio8hFm3zk6vEpbiWPa9ELDxnEFVHB6T9y19XrK7Y8jpkR1yz8umMvFhWWNkP6aqpkG4DRh3rq",
  "key30": "x36Xh6kbXUKkETA5sa1YdiGBbdQUiu4RGoccTkneVwmBk2EGiSskUmf53zgG9dpEicQRtYaMYuVna2F9rbBXJSx",
  "key31": "4FxvYe4BFgbnL4pozg2KC5wkfrSVMm2KrnF6VqahC9EJBBasTSKMZa2ez8YMMAq1UwAK8wHNoFSVTEbrMg2QkQZ3",
  "key32": "4uB3tybxkkbVUi1ra8uc5MkbiiEBMTrXc7hptvH2s2VKMCJSCmiu9bGimuW7X2WwJoCkQAhc1a2NTdDka1V57kvd",
  "key33": "57AUtPcEB9j9z7gV1R6tQgJ4F1fRRMC45dCSZ6Q78uv7rJuBTSjpX1cSUUqHygXWUBZ11ZeE3qYa39BV2ZVJb4Mx",
  "key34": "3R9pymrXLGZbs95kvHLCRkELMLi5SSm2711gEQhTm2S8K32SNCTU73u6MZ6RnTQ5rM133punpTFLGDj3HXMyK1tq",
  "key35": "3kxcHDvgQXFpzVK9FMiDKypBogX9Md26KPY3bZZ3eVC93bDWQNwvuvGKTNgZMbFUKeCv9TD9Kysa12n5s9C52Rzm"
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
