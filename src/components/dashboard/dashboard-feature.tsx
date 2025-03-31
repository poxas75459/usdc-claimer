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
    "25PfGRYwF4chBzENBfuBRF8X1AQGCpi2AJTMKHieDqYM53Rt8BAbnVPbhQFVjqek6E8AAGPNER4AiFNcVgG9sDfv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qSTEBQ8EQzz7fDr2PDNMrw9yFtXitKhGMjQKJiV85c3SUkBJ9EXePwtj2KAxqMEqYtN4kfUuiUqtostQTNsuLdk",
  "key1": "4Bm1WnTFkVm78HJN7cTatpKp5G8WuCtP7ZG2rkHSxJMKVw1DP3fJM5rM1Dsi5ZtNpkbiPx465CjcHiVFkdxX52Ei",
  "key2": "58vKmLmtfwFYiWXcnDaX8BRbCxjnuh2J5DGYtpix7AsuSkFiGLpVpMvox8A32vK2WJz9YFk6GQGJyfT93St3sAqk",
  "key3": "3vKRhVSRRGhFZFVT6HzFkCMaqgAVyNFX5qRHMUUU3NufiS8gVTrR48dtaYM17pBXeomTdqAw6cXda4o6pLoykrSS",
  "key4": "66SDqP2jZsSZo1WEHHABzFRNVdjK2EvgFYdGJHVWdfrtiVUtn1Wya8iPq2MC1matFGmFm9SWTx4XpgaWGnAPPUrK",
  "key5": "xderhxJmeqGVQbPx59gxqCcZshZSESyLA76orGDtUKVzeTcJkB3qT3E5tbKGGJuf72zxRhAk2Jq6xEcCpLX3gFt",
  "key6": "3D68PhVdhX44kA3D6JsabtwwDiNzewsfGz9zHRRCaeqVvpEAsFS51gJXPHgZtsgdMSc3fRv7XqcMZTB13KXuHhh",
  "key7": "2GY6Ku2sZScezXLuzr9BJnXhHVKUkjLvBcBZPt7hwjTXMHu6uRTTFfSDtWRQuERN5uiBy5m2Ek5EVnxn75nPxg6T",
  "key8": "2agnjQaEfSQ3QU2g8bKAQowVvDoiv4PZZ62ZbHe5ukim1tG6qoc33DAeG3VfPZqq9xGvMLw4LxTWpmzBVk17RS1d",
  "key9": "5NBp4uQq4tG3PECifFKTSyJU9XP4R2uNtHBMCo4aa81EVtSbrbhtPn4tD4DU2EKceUu6srP6FMRtLS1Wcr711JNL",
  "key10": "2RrvTy6TdGC96kTZnkAYKoQqRRV72akqMn4VGpwHRRpDDvZ1ExV8Lmur7JPkfqd5yte27Rng7v4UaUwM49bYJV79",
  "key11": "2oKnviZuJ1v27oS6whYpH6b2SD8q1o9g175pLPsZZgmyE3icv8EfZnzLnxU8G3XgKWj61pEZ5JyUgJXhcJKwkrpM",
  "key12": "4A3J79JyXKtKtbqKhPNzzMPN1NU4Cu9kJ4X4aC7xTHEgo7NJZrStHQVWHdUr5Swd1ZCPe8NC7my25kQwiaq69HJe",
  "key13": "4iqzjifKFHpqLeczG4y7MEgg3GYGKdPcNxbc6H1JWyxMtw8PubKGoZ6huehnxq5tYVtfRTBSF1sWtXgcKW122PNn",
  "key14": "2mKBKoFU3hKJKCvTzLdaEj9t5BKoRKfuemDHxWDvt7kqC4AVnmFF8YWkE4LhtDeH7M2RsHmiLnrPrLpYZXUW9G5L",
  "key15": "3DAhEp5tJcEameaC9kBXjx5nYmnzRjdcJTRX2L1gSyHX65BVP63jDM1QSsn7QKW152J7RduadcVuXxQEswpDJPkr",
  "key16": "iMfVdC6JukZ9Am59qVLqZxNkUJzyg3RuNdDMc9Jg2jUKWSScJm1NthD7SC2eqrRbcE6ZSs5Luni2eVsG6GE1tUH",
  "key17": "4WaBTXTEBtYBJoGt74PkpFcvtqWeuGx4WYDfWFWabxYMxfWW8PPAjpTVumPzmaJye1DtkewKmYfK2pS3HR1FERYj",
  "key18": "3A1Hnkvbyjd3gcJNhRYAovJozartLR6ZEEdRRX3jq7YH926pVkoNp4VY2RYjaM85iiqAY94AQ6nbJRVp9jzSMCR8",
  "key19": "52b6zeYMU58KHmtFzuA3VKPB9fVaVfDRh5HrV9oE3LrVN6KvUU72nVhdS4biVXxqmJmG2PSPYbzMRgqRaSij2cmy",
  "key20": "3Ln1zPrsbpnssogyGXtrNcjztSLr6XPVYZJMN7WJJFpPwqcFmU6oKn73dUrAhiCLtx4gE2WGmqA1cBD5PT6i1HKd",
  "key21": "qgQiaG7QfoEBFZVt19Wm8xep4THHWPxkWLoWc2K3Gv9rWPeDb5SSC7zipqQUrs3dgbPQDuuXiwBuyA34f9wURNu",
  "key22": "5tEySnKMJxt6JzJkLqsn9Be72YiLAweiBpid2Lx9R6aHzWAy5QSJ5JWY135o2HcFrpT6fWRTrfeZq628hUBE78rV",
  "key23": "2nq2LpBWvXrLx6XLN1g1vKEELn2FMxqdhJY8yZMiT34Gt8L8WawRMkdeXCp8K3cyomYxyEQ1sjpeBn3nYRJL1gSZ",
  "key24": "63e8jDTXAFm2eGC2aDTbzHtnWzzPFtGNRchDuJziTzxFCWR6dzEnxQ6f62RCA6ayDYyKkmbY2DLEvLBE8CF54bXG",
  "key25": "5b62jXLWgNEfxaEJcdSn8Ssbxpa1Ej9XC7QHg9E7DHYZ67i5FZPRLNeX22tTuSmWCjNE7saaxAFbU9ZbAHA6tPSd",
  "key26": "25ayFpWC2Y7dC7TWAPQQzunUzysrHjpgw466uSjwGwoPszbWHExktnjejRXVx3ZStbjfRRCdKUFv6Ygekdbr9VEc",
  "key27": "27JfZdRJfsXBfbbVkjFwUBHXXxKbZ7FYCUPotHTE1VZvCa26JoYrarqXq9DQwMkhpY6dR1uzfzyNs9tkuXKcZ75P",
  "key28": "5kpXRftBd8fzXP8b51GigUWi5Apo1vqoFr9ybcjDC27wwaM1pbWSxUro8zVcGfMDjdqFCqu6z9GxQBXV8ZFQtppx",
  "key29": "4gu62uT5gav9phBv3EwnZvz61wBJNvBSTKy9Yo1VY6d2tne8uHn618SJgbvYmhSYnisQVFYERRahzyFYFncSgzYQ",
  "key30": "4bW7CPDt8qYEJdQorRUGwyjdxTermsfKdcjQioFZTg6NetHrx88icPqkXmKHb3U3NPCw1VSgrbeP72LkerHB2YmW",
  "key31": "jYXdGD9QnxjgJWvZAjnG29KdHk6RgpdUc4cNdqVo4C3KDdudquszZ86gfJT5bEr81tPdvW16sJrjurKjdxs6ra3",
  "key32": "5NMzYL5dJbeqrQCC31kqtsGesphdYAVWh8XuZjYHSAVA5ysj5BYX9e4ByDik7mhsEg3fZNJaxXuobCyxzHchVajb",
  "key33": "3TwkUgFX5ikYgXFHzHtA9JynHS7aF1BmFGYk96CaNEorT7EE8rVku8WVfnV9xfpvV8nTMYr2hCbeQ3e1YEN2iUYA",
  "key34": "281THbaztinbQrqxfXcWegtjChwPuSqZGaUorq2yFsBskiwvr568Xz6RSwZDgFsgzh7GTRMELpMxZ7J9AVxC1v3b",
  "key35": "4sx5HHG7Nmip6iGyS6mipc4P5HnWF8NzX8dUyRQbGXuPxUQq4QKCHQPAEkLDGZHi7STsznRFie5DHv9fUsEoGeLa",
  "key36": "5zS8UU26xvFVovcf52u1kDq9PCorgDbYJTYcEevzHrH84vrzMrrDFuRANa2wyNeR8wvrMAzgGLFbbQ683EEFyyvv",
  "key37": "KeDSVLhuyzsA4aL4sMEpBKB2JbHgBd3WdxPsdCyZ4q8rtW2csFxFhJR9ckEvemtJ9eGzyCPDwJDhj6LsNdMTb7B",
  "key38": "2Y6tYeHUJg7WUaGwKmrZtvHBBsEaMXCMNEBdeWbxCBc6vEQS5a3d6xus8TshWHQwmjhGMUBB38gUcQ9TWVtSi8A7",
  "key39": "3qv8rLRTLYrUc6Ezsy8dP9c52e2WZ4avXbKo8VM4Nnmbrb47GZoLRy2x3Ps6GeBYqtPMocnGMPeNGjcjxX6ALjUo",
  "key40": "3PWp3BgSBTA15sytUfs43KVU8L1JqpS6MPiTUiDr784m9N2hcC2DNjX8qotYiYZeSP8w1WviAQ8ctYybJCkDQZxx",
  "key41": "uSjwL28BE38raZWNneeMWDanx9ptq695vC978thDhT4CtbQ3ZaojWwkmfEc3DdXk3FLZdTQGYjAkFurA4YBKMJR"
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
