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
    "Esiitzsea4iyFNETBQDNyV81RzLUT7jqYXQbuxj7Eu8kuHxq3wda6UN2TrWQWSptsM1Nhq8M7kUdPfRfx5oAHaP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rxMCoFfQPFRGGDJzj8XSS7nRj6if15U5tijic5E3nAgJG3YsqkFQobQCfX7Tt3deZLpbEQBsrM9aMXG43a4io27",
  "key1": "5mbS2Svg85q5JeFjiTf96KrGuqmwo48pjtJk7n46CTh5Uy5WNRkc5snmfVzeXaxsMpPvYKyU7jKn8ZqawtSCZTCY",
  "key2": "3VzUmoQZicQD9AmghPurYw923AREg6SYL6YsKDD3atfkq2HDZZEUEGaJnfSmJtArmi5UE7R3pzCk55VUcyScd6ZD",
  "key3": "4EScAWsVwUoA47XN9n3rwBh63NeLPukSXesAEARPnyMad3pZjFp6gUtiiPpivHsFEMGLErWy78AMgf6iFSvZNHMD",
  "key4": "5ajSAdtGjw6AgLSKNigxzEMzG5vkGSyMYLo7J7LHRTWwrmN8U1XgDqoH7aruzuLD5B2Yq4iJchwNQSpgaYXosNRj",
  "key5": "4Ugvuy9xWSyWy4bMhS55bvbkWkRyRv53QMVmkwZsjjbzr1Bzpy2fnsCfk5DYesDBb2oJTitWv8ZxJqEPoyz24VKY",
  "key6": "3cDeovn5GD69GktgJSR55zF2JmeRtUM51aSvF9vVP9z1iTu7cHTGCdxZ9eyNhj4wgrBcS9cJULD9EEfMfjjzYakF",
  "key7": "4Uvc74TMhGX938oJhWq4Cvdz5bD9rsJUDFtsQGHoGiMsMXgDVX9drNWUaRp9XQk5Zk6zA81PSRrQMyX9bgj6X9oC",
  "key8": "n57R3Mg17W2tD7jkAeVkiddhCJiKC64XZKdK7z55cr6brsw9FVEFaVFusNXqrgNr7pEHzLuYmEvQzr1S46mNb6D",
  "key9": "3Wf7ovUiC6MK6hE8QnmdsKLxtLrh95Hg6GnYkPfhpKrXzhVuhXvdVs2ecLzoFRbce1p2yMATwj1K4K85uiLWf1tF",
  "key10": "Jk3jssLzEqMxCWTjojtcd99gRyBQFf8YhPCMJoboKW6BfeSRHN1SZ5tE8RhnF4ukjMyHHu4b9YurBzM1AJePHKh",
  "key11": "78uKcMM7dF787KyYxiYs9jW75mdXn1RyzZ5QYGLhZxtEuFA725EFTo1UPWRikMz1t2C9FLphSfsNMmzfmdFNiaq",
  "key12": "4NLsjnZHHhXjQmvtaxQnsVY8DPEGFw5Ctzz2wYZm1dbyiyghpAtYdKQ7pAvd59jDT65bxCUQjjQbZGouksSSYPGg",
  "key13": "34h4kZSMDtEhFCdwAim6yRsYjs4XanDkunpKfE2CYpkgB8EwXZ67q1daXxN9iGQ5iXUuaoLLKZxAnsexmw9aE491",
  "key14": "34jAz8eqtSrWiuWnm1iYXRftEyznU9CLhtwidfZkSWa9uXvuWt7Zs9dB4xWfQ6g5YXqTDh7eNbyt5iBsLDcMGzUD",
  "key15": "3eHvtdihg6hKuqompqJSzhiQEesiDnut1i8AcccxmKgoSyoXJ43axdM7Jjyy4PhzTE723aN3UbXyxaETQFQ64CpH",
  "key16": "4TG4Zqb16KjiboH9QPigVRmi9cycy7qiid89vkU16tZ8uYukp6EN3XTr1dKqp7dQexAFfMTw97xDe2nWtX4a4ZqF",
  "key17": "3qVeiUqjCu14hG4xR7RVMZZ1Z3y3xh1ah8WHomWaD76NF3PDwxjGwHbNriEPC8ejuE73aY8Pwbfp7x7JrTSsMSLR",
  "key18": "2foxDewdGkgoRPaQDx2gSVNCdZ1h2F258zw8qZFFEBM67bgeLFkvZc4oWZkzrGjSr6iadAgzkDPjGbqgbZorXsSu",
  "key19": "4DRRT6ZeoJV7Tz37r98EB4y4tysqyRtWrmGXFkcm5MS4qKfy9GQNb9iaLM5rC5ij7ms3Ww9qr6dL8LXYN74Uy2dG",
  "key20": "cbp7oqf1dXYm937oDZBnSt4p7YGQxSG6z8dKm142ujuRsGc7LGs8WkxNZMKZkbuecRoAjyZUiaMAzRPkHy6BXfM",
  "key21": "5j4g3skZRYqLfnBrTwvmS3hbDTBUeiinWVatbhtbqW8iuHMD1jhBHXwrCN9ojqH9SKr2t6CiS4TD3Eyjzg4117uE",
  "key22": "4BRrg97DwGYRNBJrKcH2QgVnmSqfac6g7SJWEywTCbdtjVSCioCrfpskWaGaWKmhdKwpfQmEtpjLwvAa1GuwEuqu",
  "key23": "3E1MqYsiAPK3qfLswTjhScBzWwosStMVq1AYFJnVA9g2zLMjeDP546m7jPCjX1coM9ZJUdtyAsDbSAS58xKCW1J3",
  "key24": "5MDgwH6g2XjVMohaU1RZ4uCk1pGDQmoQptevEdmtFLbs8MFjkv8vUf5AHxU6M9UjB68RpJbKm3pT9LB2dQ7nZQKH",
  "key25": "5WbYWuz3unmaj4CtHEi1TuAqT7Eik3QCaPJYGRtz81S8G1977aEH5CaPR1LknyM4r6BHH1gNzA36mnnvvLb9sHAi",
  "key26": "5DjBbxYWKNvpigQbYVHq5sSx3QheJpZxMNTJsSJBD1n8631iys54mhGw5yzkxBZrmVB5WanHN5gNAR7Hb7z1oTYR",
  "key27": "47m6TpWGR3Jpp47uBivEMcvXBoqLbYTGh2wx3WSDTwwdNFmRiRK6uF9MKR8fC8fVp58MNphVJQ1SzM8Ak1wxyZEv",
  "key28": "Sqsa2kejbV57BYCPYhr3zBsgPKaPWJ4cMvbNGo7TDDsGJ2W6N12ytRfFQShVMwvrjtXpVwCJLwWtDnGRXiuoZXV",
  "key29": "5xj5PF1Yhw8TJ5GjqnkETfMyi6xKHJmwuJYuajnuStkkNo5q8LR3Beck7ARC8EU33H7YJqxYQwomPqCbmxoWgoeg",
  "key30": "51acmubiiMan1hrBURoGh6EgR94XzSySLg8D3ArWb6h6oKZbR2Nn65x1VuW3ML8SnVAQZgKQrdZMvkQSNsRH1asC"
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
