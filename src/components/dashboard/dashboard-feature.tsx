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
    "YpaoXtn2TTfQ6AWrmJKWuVqijd1MoYyAJxm7LoKcCTHuSiGNhB7kRfQZrLBCkYL5EMNf3Lgm47UYpkkHmAdFFtv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ArcotizhfKs9DBXSp7CqA8W4VobgYyzgptDUAYAn2qoWVrzQ6cN6yFWPksbZpSytmBZ2Db7SefRKapo9UJzGM9o",
  "key1": "2PaBbQ8D68jKTvHq2yjm2fkT86rRssbFdqNHCN2igQNup2RM8LygDWZLUcgoSsJNJpHCWfXgLgej9SQmFtwqeEJx",
  "key2": "475wFgnGJaXciYDFMdsLScfCgq3e8E4DZVZX1cabU6rq212yneZUdJrXCL1ny2QXgCHuQkdJ2pXPgHurzSGYZ4wP",
  "key3": "4G1WVmZUFiSTSrFRdjE4ydKCTk6KgAVX4FUXuqXGKhJiYXFwmweNm14K74zizP1B8gGVoqAsEH5P2v25S3JDwD9V",
  "key4": "M8CM4VcGxKTnNzBRNDCcztxUxxMeAVuV4KA9PCciqZPoxPzCQiidbV5jbZdDqLQ9KsMvq9aVYbWQTMvWdbv4Pqg",
  "key5": "4NHic9McD64u12oxm5SvUDayNKp4dC2QbaXHS2zJ7KLXzbVYq4GKyNSWWuoR9sqz7oqmFQywSMaj8vKfSK3RVanD",
  "key6": "qzq7Sk7Zdkj1rjDEjQsMqhJ925CmoQD6CzTpH48zrRtPg3ttJ5XpGBgrkieXn2n3mGwEUS9Ekm5FaXR4p3TT5Nj",
  "key7": "33m2kU75DSkurmPdwgeNKawc43NMDBmyutJgZs88sN6e875cWxsDN3JWKvMKTUqHkwsgvtjvjyPC8V67ineMJVQD",
  "key8": "2gCdqtks28Txofo6awQoSKLeq4c4eF2mDhsMHdsM68y7pyv6NqjW5AzsYRwsw1vjpo1v61WHrFeKXQdSLjZiytZR",
  "key9": "3e2hPxFPPJgdMg2CuiEErRRTQXuDn18ntX585NaFP5neZQBouf9zJwU91G3FmYEMquNxFMn8B1Tq1TZJHg2KuYH",
  "key10": "4Y8jpqREzfnYUgRQfrgaUnzH7rFH4zVmeByVvNPvgRH7WSBXYJio8r5j3wWbK8jtKrK6TYA29Ne2sJiFR7D1hCZC",
  "key11": "RnpJY4jKa9aCsd6SwExyuxQQScd3juQwiaAR8BsonDZUyw13oWJJrfz1UJgSDqpNnkUgW8r62yDzV9vLZkXt9FM",
  "key12": "rgqLiWqjQkNC2EZ2Mz31Wu1BVLx76YxmoeiEoWV9odDquTexqWWMBz1HTKMm1JejiyiWkA4zGajp99c3dJBJQFk",
  "key13": "4BGbCr3gGm2dVkSRtjpgzpaFx2uM3i8k7iwS3EvHmwPAhpjAdQ2NiA62WYfbsG1gp7J3goYV3Q5CwQzsQLGVpvoB",
  "key14": "4qi6T6RibHoeKFba6nWNjNedp8nZ9mAThAaNcyfNQEeigiTzs9zy4F2qQFyeNgQbWeMQEtKspE2MyHgX3WyM7ZqW",
  "key15": "2PobqjKeUkRwfZQLNFMhDWBYKGJucNYjtkxaaWnv2WiE7xuw3SdWEhVpwHk9ar4SzbZSiP3EmUstBeDYLz5j2szp",
  "key16": "51JkXcY9BrUGEVR9BZ9fwowyQAgC7KRyHpCyQBr7gs7J8ffarWHM2RUCFxTpEeLjuTBx75K6qe3rvT5HjNaVqsYK",
  "key17": "5FXZPoWi8iSkT21eUPXRaaEPUHtxyyS14R5dUqWFHZL9gD6A8CLZJuscotFtNCGT6mFKD9pEggdjAzEEviZddPUR",
  "key18": "54icPUF1oiPPzH6fXqUFHa2SE8vw5QANbjHGxVD9DvBsceDeL2eqXVjNSATGRWexZV5eAmDKepCwjvpNmJamoKgu",
  "key19": "3VekzhZzLiXobHBwugccCurZXEdM8ZyWXNWCeHZPfzGGv1d2VTQupyHWRq23FhrqRX8oLt8bzTt4Ld2JFwv4T9yA",
  "key20": "4KiGwhDa4tqVXvQDb9ti1iyNkZp7MenmdHvzzrD833Xwqcfs76X5odSHNfnwuvrLCURxhomKAE1R4s3JXfS3bouh",
  "key21": "TkcWp3nW3UocDxKtFrE1iXUyg3qPpbwrrwheixQQJg2bB4JnneKn5LCrtPTKu11vfH4n2ca3dAZmC9FWa1Bv8Hf",
  "key22": "3Cekr2cM2eKCTqmNT9tsvwAoHNf9CPWaJcUKPAvKr3NbkWjYxoVHNW7y57uV5HUieuTz84PDGikC9rAGorDqo2vG",
  "key23": "ytV8ni74ojCa1x1neqkqU741rPX2fCdGFAK6R6pHkzMMTdxhK7w1iv6dhRJQxSYnaeKU2xNjBzNrqL3AkwmgG9F",
  "key24": "4BgGNsvkW8Qx7Yp3GdhPXmnKohtfZuwnCDSBgR7vkTE7NJBbZxjPTzVnnhyWS2aUek5ErVw32qu2ppXymhEG77xV",
  "key25": "2Ds3rUNLSq8s7LEnYrsApDrygxwFfSh29rgdjq8VhqyVEJkwKfuwbwmGFFqT8yJCvZAJ5C8YBUASa9RrAZCVFhi7",
  "key26": "4Z3H7PSVNBRk9d1D8H3zWVFrWjsAXyKenS6wuAQhh1mwwTtYbf56CNMLpEVYeVqbuXdWvRb5Nu3nCghfcXV2xojE",
  "key27": "3usXaHCGarh5v2LTUWqfmeiRxRr5EasCZGbAwBx28YDtgxcQk6bRBHqfbTymV8AhoVBFHB72kU9s2bYRoE4qptdX",
  "key28": "5yL6bRTXMJNtppYt2iYQ1fAhYYrEf5EeUiqKqzWJUHgN89xHissc7FeEt2Np2RtciWP921Fdy8Ab1dqTrnGHStWN",
  "key29": "2aR3iBFK9j3zKFdnyEuB6KASKutxcrH1xrJjKGD1v3eExyQqoVJ3hRXdEgDf7iZ6YNCLRKS7xVx5eZX5myjRW9hW",
  "key30": "4wbntT8Rindwd8vSyNUFEnwqXYncQB33Ej43xQENCDB1kMgsuFKNxPUpjL3XovdQ5JcqV8aQbmsTKiufJCKYvx5n",
  "key31": "5vXKiM8p8B3hWYuQV2x6RYWotTXUV3Gkc2y1MWszsqzrTdhGzxtPXJ9EVihtv6XpFWxYsUgCgLDWnhW7YgTzw8cd",
  "key32": "299ZPZRdGDXKXTDDjX58Smi3BW4MA2ChFg3jHv7tGY6L6snzKfwqLa9YGX5XxTq55xtmNBpjuYMpF8ePV5ZMLRgY",
  "key33": "28TXdLuUjZ91SE9dRdMDY8JH7Spsmi6FiJqXJxdXpz2ZmMh8VydkXXvyDeKJRaSNimE52VbkowhLAbuPCsfitAq2",
  "key34": "38xYgPxtsTaJGr2W729ASqj1ADL51ScgV5C3t98HvWtqwNqk4UgLDGXkeAkHK9QmTuAU4P8qZ3mKjmGiXaBDJ6UH",
  "key35": "3R5jx3Lxb7UHQp3qv2XbzmwNU7eNY5UbickCL4c9QVyyMokR6iKgZScZPVWuJq6VSHvmWkGiGUZqUYB3Ro3Jzhsy",
  "key36": "4rmrRxmqpm6dgS1aKcfw6NNmX61GP6r6zAgjNdEEr596PE3vWe4vdasqRrRxS6ouoxAfGkZ6c5G7XF5veq21x7aE",
  "key37": "3tucBqbSVY4D8onG1G959mNcCQHz5MhBQmtTbtjcxcqv3iNFRu8JMBdNUFqWjSyu8SsMJFedd6jvGHct4umNPT6D",
  "key38": "2wrbWKWUXLmcnA6fxW8JRDyQDZHj1ryHENAjSYCrcpBvuh8BSbKB3dDijCz1CrgNm4w219FmyCr6S7FCtJnxAEJD",
  "key39": "4QuZZHQkN7DTBNS5a4Z1qXGmM3zRcAowAFFZyXABLiP6VQpaw8FieCtCGoeGWb3Wdk8nrf9m5oYL2nKZebXLMpbq",
  "key40": "32Um2pkntkjHWBSpcSqey9RTBA9PAhJt15d1pQRRuvEc7Wh5pDqScefsnYEPFEnLnd5mxmVFJUCuN5CoFBkT7pfx",
  "key41": "5qRvHpvhaDTaQHueBytXn6dXrEaqRmUTR9dTGLtZf18cZaVndHUXxvDr45CzeDjJxFiinUt3iXw6iG4L1i7pXZSM",
  "key42": "46DECVR5hanUy3G2bAtBeqqbdPwWsRwJ4Zxw4UVbr24ThAtqEEbMo9rFRbtVXuJzsSiKFPRD131Ck2i6c996wHVp",
  "key43": "5HyQUdiuwGwePS51MfoKj5gSi2kQNcPrCj8BSusTAinzh7fqNHacyfZgnb2reAWZCyHKUdUJZmyQJgDMVFNgV3DW",
  "key44": "5XF1Gb3cXDyg67cUjrxoD4D9AtVERmn4vTf5eL94M9CFCmumS1diS2iSGaZ3ssUxv3rNFayn6Es2ycLj4AggkXBx",
  "key45": "3LRm3g7GrYT73vFQ38RR78Tdfs4Fddmy1TF19tSnEo7kbN55M5tonxZshPqjMB2AYTytYpmwBbYq2ZRmzUFRzyQr",
  "key46": "2DbtgsU99tzBdgG3mCeuDdRN85wB3nfQ6f4y796szujurkKVcMuJXjenrSH9aKv6ZUKFr41dBmNmxhHdxR6Fvtej",
  "key47": "3HEAmJFCtPRYKWAKmWZmhbPEL5JzL4DAXA1U8tS1JdX9mkAsZMFFGihJcpo1A1rkkr2jNis5D6JKWcoafmFtBHK3",
  "key48": "5RZzzxNG4PhzUewYd3ZqEuocTd54eXQcR5oAoXPiHWcR8AqCiuzroyyG3D1dGkQvLu1k4Enk6kng8ipxzsKUg56s",
  "key49": "5zCJg9y414kF4XEHYi4ksHYC1WzeTdXp38x9iqDSCAmLLvQqELMFHF6mGkw27u5v1svHvikRR3Utv6k6f8kFa4NB"
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
