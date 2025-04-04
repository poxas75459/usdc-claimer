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
    "5N7R6mh5m8A5SHM3nfjqMUxTgrkRPHtExBGSxME5LxLNcV91UcjrWHAH2ZhkTZf1qopjXZUngoXXRL8hUzvojjoJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JmBPgjcLgk5WbjWFJAEgM4TFBZVQfSDsqiURPn5PcXpsNne5D6aKbnZfs799VwqzpCcsau2zv4azS1FcMe3F7fG",
  "key1": "469NC5iVR2ReGENPj8KthsV4LpnZBrYT7DCfTg1u5sSVo4aZRF8Fjp7VUAv1ei7tmrAmJxzCHrm6MWRmNywMdbEh",
  "key2": "2zfGdaVb1CTA8v5L2ttnzU1bASRnecYVE69cUAqb7mhc3q6oHjCBw6nrZ1fhJBTFhtwgGs9eDJYwdmG3ThgW8yPv",
  "key3": "5ibyGGFL2DTegwvmcFmAGnpouV83fJMxdLAv5Uf2ZmWup2puVpHkxKmH4qU3yNppD3hjLfojssSMMh2WFBdL5KMD",
  "key4": "qfAWaHHxAA3m44yH1MvrAiA6V7kFDyUFn11GNJxJ5gkGGvEgxGhjPnL7HyQdJyrMsNeebHCcXBUDi7kmf9dadp6",
  "key5": "4fFF8AxxV1igPnCuN8jBpaDPynNdbbHcgTbcpsjHGLMUL3njDcLQcT9CvBAoSEY8UkDkhoYoSaPNRFUX7DQk8fs2",
  "key6": "5frXqNsNrrPh7v8w5WiaCmyjEcZqw7x6dQYtRg7K8jDvrWrumL33jtD6tMzgJTx5FbtY9YJc9ctVNMDZNGesK8YF",
  "key7": "36jifVvaeQFJuU1vqpwiCj6BbfhPGr5NCdDWjDHUM8Pek273ToAAw1L6s2RSRSMiVgxGbxh2rcXejDMgvgbMREvC",
  "key8": "49mgGEE3fsr7DZmCGUhpj7hyTGT1r8oWTUawPmp4dNU8Jh8FAq7zQMqmDngHeuVojXXZjjkueiLMN5dd3i4yg56M",
  "key9": "f8DtJHgYV948m1XCSFCwU8gAXafCRrS6u3ncKQXyYoR8cdRQ6nuvPoEvoctZhGQPEiVjc7bBKhhe2figTavev9L",
  "key10": "5jdbzZ9m9bfcrpnkY6oUonPhvf1vJS1YBSjAVLUM8auziyTpGweNaynMxksMRyPsThJNcDNPTpWdALKfX5fwYWR9",
  "key11": "3mvt4Uzv5KFFVtMKnLXjdVwVuKLfvDWzPJZWUrbJZb1AEV5c9LqKHbmtUjthki7hsPBdC9SUQZ1TbrS71RUAPfVY",
  "key12": "4C2nDn9xYswGaxyqdtK9V1kqxbR5VQ8YPzpf7EiuJACZd3diRtYFutpxMAAY7Ggr3bjyTNos28uNLVsdM9tgWC1H",
  "key13": "3ovRDsfr4Cw7s8JQTibrPCTFM9mdgZpc9E48fHTg6RYdr8FB8Uc6Bgvz8DxY51kTMszqEpk2CvNJ4cETNCTi6hiu",
  "key14": "23osGWSFqK7CA8fG6ZTpHxVxPMYBy5hjGobMNR7fWZyhmgYSRQhbDcRR8niZn2dwG516cpxEhqtLHmV1Y8XFHccx",
  "key15": "4AwuCZfdrTG8xY85F6toTThMNfmabc774hX2gG1kvcRXC1szytUkAkrtQXaBGVPCHYriMYE7UeveCNtvtA8c8K6g",
  "key16": "3D7U5QFFCVeVz4BmrkqoKcos6HJWrag8S4ohxPNBMjRzGsFRnCy5bF4h68LG1xmf64JkwpigtzY9Pip9CqWiB4RG",
  "key17": "4pk6A9wRDshJ2eicx8RpdiVJtE2jxVpMbCzgHvZY3Ex3npE6Mgj2zESUiiczi2E53qiRGWzPFMWEzpWTYrJUvwRg",
  "key18": "4aCxdqh2A3JqjMxZw2Mf8AqV4oivbexhVZyTRBhpPe8AJ5q71FtHZkk6JPkvA25f6J8YaBrLCRQG1GjgdTpXVNmM",
  "key19": "5DMxPSG4RCoNixjuEhMxDyvtRApfeCU9CndWfHGwrx621fefoMGpzgLyYvJPuZ5b2YSrfrN1asZBibw7VvfLjKKN",
  "key20": "62XnqR25rzfCLPGJZr7hx4DP5PG8gRyvHuD318D9FZAsZwxDh4g3HT3m27EUFiMZ6riqgCpFmDGh977UbPq2FCUG",
  "key21": "4nKNLwvYWVM2PFGLP5AvnWQk1h8TBu1nizRyHZTn7Uc4Mfo7PzjywZFNry7Gqr3PnMax9ot4mpav9d6TuJr8vVRe",
  "key22": "oVhZk8aqKDTcrg3YaoM1taU9CDzMYCv79LuYQeo9mk92H4AQSAjQ2fcj4YmdRpCrWEvwGjgtkTwKXA9BkEcN9US",
  "key23": "4NS4qFNDGS1QrP2woVKg2bz512XpuV6ZcCYQMjaFQXqrfxiRdvoNGMd6xUzq5ymkEFJygXThYR8WqDjcGf8r31mn",
  "key24": "2RzqNM5RqcR37mSBdCXVwyBD4Q2ZXNVMvR7wGqMZjPQeqb2CxD3JiApPbdM4qUDqqzsLnPTBXz76w86hUWSWM8Fa",
  "key25": "4QxuJfnyvCg3TyfZaor3DXyr4SyoYo1DznFzRVgdfU5K4bX1dEeWsffve7PGJvcJ4rKuQaBzz57LjphkhojrZWbm",
  "key26": "5MWPAHPZ8WCxDVRHnEgUib7UzDUEfJ2QBjrtRBNrkTcnjWt7BkxGBYP3F36tbmGAmeHSpuRthJEaurn8AqiBVo9e",
  "key27": "5A9JQXTFdWxziVegDPqYvR7o3ZBe2n9LKsSsQyVnS2DZH1Moih9N5iz5T6HDNFTTYtbFGbZRcmHyj9GJ8LVPJF4F",
  "key28": "2ABtsreRdQCqnhAdWkLzSHTBwwRb5DSzFbgFq1hDvohHdhDRLrwY7hf5AJxAjkzZUpw7h5zxTUD8QVbTyS5uTCGG",
  "key29": "2RR7rPJpFPYfxR1qGyHqnk8G2yASXBNpojgMyJhYhVyqYmqd73ir6xsL4aTeLnctV75KjG2KnbuYGkq7G18mujc7",
  "key30": "4VNgEhmqEJzYecrV2dTrfLniVZf31QeTRnAAeoqGYHXM2gK4A2WDuD6xsB1vmS6vQeaPu8e8H3tWkbBqyFjc7re8",
  "key31": "5nd2sJhiGxB1ABAqabmwbiLDBkhE6M1NMGUk6WTbdDUcecv3NbhzD72wfTmqdMSYqHTxJ697BrnrPu3RBTG8JnmK",
  "key32": "2C38NDd4zreyt6qmCn8DDnUqZLwJ1A7mPnNQq6HT1WFaEAWM4WLvLeDqcLAyG2hH9FbhNKrdJxy9mLM3jfJaRWXJ",
  "key33": "4v2GqvAzeAQv6BS6itT7R2hbYYnosfajuFGxYB75hVsNyT1fpv3ab6SLQ2aZpLG9noPY8EbKMjrrQh4KzKvRKtMn",
  "key34": "3P7cS7GzsAVRuEkBAY5M29boMq6er6vHLFYHnujHjtHTrH8ES9NzV1fFMNqbnw1E3MquGLgA6vANYutcZ6r78PWS",
  "key35": "2dSPUYmtHvWddKSZpGPB78soqz5siLV7LrvfdqHepoQT48zA1ZLs8XDTC8YCJjsEcHGFB51e1iYUPf8H3xdGL2Y5",
  "key36": "4evdtU2BwxX1UUoQamgNSiVJjKe8mnChfthxUpXtbnMcBDss4Gkr1k24idFmnXPhA1dwEdrz2msXgSzZMcsQfP3v",
  "key37": "2Efg2ur8YEmyEu1YpM378CxeJM36LQgTJfhDFuZ4fQXQVov6E1qFN19xNoLTBM7DLqfMaShxE4CEx4QJ1LW8cVBu",
  "key38": "5CEx3HvmVoNkjRj4pjFm3cc89jEKG8LJuLGDYxY1BRYmpfLdXB4K8byrLEUZ8y7zWRptX1AJQAvmYSEFFmck2XAP",
  "key39": "SvB39HAuvyysc7J9RQPNRmM2dKm3RLiNTjGJkCqSmvMFZ5uAC1oxWWaRp8KvjrpPCaz2x68MKKbRLk5T52aTyV1",
  "key40": "4agsDEq562yAn8EKMWTbgaSbrkVjMWJykbQLKEqtHLP3XyiSGktiboso5F9NF6VpvW7WJnRjNkNWJmZnVUzyqN7h",
  "key41": "62y7B185DtWrBQyAv5LmVY7PC7mEtHvoQiVRLFVMQUJS2eyptgexqW8HZL7qK9wSvAg5RJgvKGxtaisAsEdhEFTP"
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
