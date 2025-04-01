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
    "2739CWD4eTnuHsNK9v2vzqPLbfqqL5nYP1isYgQu7aqsCUuJwvmpm7c4oExnSzVVpDhBEtgASLvgpxpbEAdyePSz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mL4TiBxv4syHJHuAdpCBWYce8T4aPcTLSt5E3mxZ5yseGnqV19LvqZ6ACG2TKLLS8o4uyVVyG52mMdDyecce4FT",
  "key1": "2fDbuyaqswHYkAD7cJyxwHodFUkspvdwrtUnDnGVaLus2zoKWnmrTdhRKWqPpdyDXJADbJx2GRXkH3mvDZ8yQWUH",
  "key2": "4FDQPz6rbjGnHXcEgvSRiv1NZmeFYZRpBexuBoUCJNcTbQkcTpiNNntN5RSCB2SCaWdwDG5E6fk3Jovvq4VXq9Qv",
  "key3": "WuLuSiVzmUYsGnKkkADx7xfNTacBSJTjKfdNorD9As6xUbE4Zkqev7N1eeSy77L4dHcTRW1Sqi9ES6wiNVf6fcG",
  "key4": "3qJaFQdktZHDNYtMEM8bndTN7FGQyR7hDnuQMAJzKUEXVCfQKq2gcHg8ExZGQzCwsHTRUjdWgYCdfHxMJiGSNqPH",
  "key5": "rz7iDUBMEU9TcYnu3myNtYKXRkXA6JQEpzAYf1o8h7RgHpgRueVarsfP6X12TJBjYUVHK9zsazUKUz38m9ZXN9T",
  "key6": "4aJYbondKkNzjV2yvAyaLDpcpcXUNtviFVBHtUpFXxh6xU37tCWUJf1ytYXoihoupmW33tLTcudDvWNKbgWqMzoD",
  "key7": "3w5K6w8py1MojEw22HoXv9fM2Lna3X4pSAbHisQvEnJR2hXciB4DVnaFXhDYMeg34cTtjxgDtAZwGc7iQHEbVNas",
  "key8": "3gNSMYAFfFCPxYwMKHjwavLzjv4nPaKXFCu9hpMxtbTnVrFN9Nh6sygrt5ppLYaEWYDZc7UL2refun9dtjLLLMys",
  "key9": "4Y8LpLoBffpADEinYJr1oC8yN1eeQUFDTJnPHufgCjTQAwk9bixDP6ERTXFE4qFDSxN5CQpLZREsBvStDKTZ8Pef",
  "key10": "Cnvv1zhr4zDRUe6ujWbaox8eGzpu6AfAxPaDP3YWoTCzAtkapVK9KuuaSSg8h9AQU2CEgBJ6vvBdZ8tRLNvRfEB",
  "key11": "4B7dwXn4SBSgrgbcvc9yi9nzSK3ek4vuHe4q8QHwGmKroZhC58qR1YqsUxJSRLRdHqHN1uavaYGE8kTQtYYUoBi8",
  "key12": "5oCEgZPiwX5iUgr7BBp9pZCTruUwuKL5RKvKqMQESTLjdzkQ1D3NzEU1pk9gSzrxGYibLUTcHAydYcWeSTZoETtg",
  "key13": "2jBM7GoJqRXsxbNNBZGair6mVeHUTFjWMiMcVKTuqPzqcvmTNsEec28SqeYWvjgBgVtuPPrzGwp52VtA1zE2bybz",
  "key14": "2zVXRghLc1V3fUyNv4WPnH4pqAoWPMej3kturRgpiVzN6n8yyxPLEBWpryeYRqFsnVEdgrXSHr9uqGLmifScAk5k",
  "key15": "3jJkc8zzXzmQGrrqNAc8eSpdTk9z8NSDKBQ9L8vfVY3Xo2cNJJZGaRpK4xcfhVBA2BvQUvrFfyE3Junm9sRUpBg4",
  "key16": "64MePg8HytM55cvtXGRmV2jVuCHrCL5SyTZfRon3E96Es4hSrVKQJdFHWPWDvnNrWRJJN8vsvuFEqymmTZzUxAVv",
  "key17": "66FXN3scQh4R4JKhhSGxuouHECmAJB6FB2W1urNiLDXcKPNRLvXCLA2wRYUytUj9iwbgbSdCXrU9FcPvscFte3wx",
  "key18": "2QWTp94ZbTX6MNG6gKhokByuTun5xnT2GXzdq9WDxiF1RvfSrK43XuEcjkSpnCVRZt3RQekSc5Gsmbcbnnpoz1HW",
  "key19": "29wmWCdY1D6aDmVVKepusjoi8NvAjJ3vsPHdKfJgCczni3uzJNvBhfPrHkGN12SwoqC5d18iLm5VGzY8s2eEmEaW",
  "key20": "2xu8GCtJT6duoq9RKTKSgiPzZYtY9gYqkUFxa73Vy3RTnELqCMsF2NNAozDHNrkR8GT2uYUnQxRZuq3Gi49fGn8",
  "key21": "2oC8dHHJx9y7emtt68ParSBWzMuLLazWJ81aGpgyvbW1ofsdrznVhkmh25dLyoexX67HfxuRrjYWEeCHeXUr1giw",
  "key22": "5eD4AnS8FCddbAK264UrvZFvsc7V14vLLs7np1KeDrNghpwfuWTE6EmVs77KVpQzPgCXSa3eJDJYS8vnywZjm7yt",
  "key23": "23NGgkA6XYRYNgV5sKVj4q6qzXTCU6Gu32FYqmZDqa8vX4iCLpDkx1wNi47MDWCfhPXTzWTHX7p8oR4mSN3qJrM8",
  "key24": "5LjbLxf8P32YDHcyfqNix5QfcRN7vjN7ELrkNZ7UvbKLzaNojXAgL7Bgvcg6j7teTXCV7ph4R6gyrDgBHxNwheav",
  "key25": "2h3s1K8uCCY4D4waiSHca4Ce9yH8BuQ4DE9RBsPYJjXyzFVzkS53dt68o1RTMVnmxNe4x2AKVS79dxyNwNn8Ff1A",
  "key26": "33AU3w9RETs6yX1WtYnuP6qkswNVvLFUK9CM7mjqneYMwx3Yrb6qSiVVvGAsHPnngXqHg6RCunZsWTyJ91RHNFWC",
  "key27": "51gLfiEVqyq6N61E18YutTugj8nQtYsZCS5b744xipkgH3jZMyEAuW11YCurbcQYmD1isMETiiL2naUpbQ2P6Kyk",
  "key28": "4YdmpqUTDWepLLoybNZcJTJEURGv8NMg92UKVK5SRzz1ea4JnxW8NWjNVWX7r6c4tLNCdFaSdTQF3kYrBJfdroJC",
  "key29": "3ZkAM2nzW3dThkMkf1QQDayMADdHh4KkvHPAsobeZHv4EezJcHguHiagmqtmoa6QCeiV4WgfRnPg7qRwixwfoE52",
  "key30": "3ZanYpnaLQnF6Nit7oiGeryZFVoTqsPZ9W96KeLdesUGuAhb5EEsT54m5uWiZK4zouhC75JsdKJf2MVVCMVHdJgv",
  "key31": "3LnHSWrxmZgVSQ6CWKcEzkMDPvGRzEYsVJSvyBY2V9DwD5pxeCZ229BA5fg9CPUKq4448DDCz1BWRnMVuVyYH2Ha",
  "key32": "2VEGi8pkr32C68ojtBWYkr3ekPjPAhz1VBqtgFyGZwj8sp5AFYAgEjWRWrZzei7SUgxNjZQEXGwtgDf7Zv3sjwpj",
  "key33": "2UbPS1yWqThNkgB7aC3ysQVjJuvBciBEaQBSVtrwfxHmutBtwYJK92krMA7YxeV6eGq2aSwG6wkt7uFcQpGQd8AH",
  "key34": "5kU1AiCmfkAsv4uhh7fczSyiSq8kv4S2yDarUpChBGaY8Jb8Z2CrZY1xw1VBdWfxuztTJHyC8Nvgib13yVuwr5Xa",
  "key35": "wb9PeMtXw9q3XP7HNQLU842YEcZAWMx9Rpfj4Kgd6MJvYVfwUz2KoDW3XccMHzVonXs4PbS5kzYyP6MQPxe1nab",
  "key36": "3fceA2dPaXgRGFcRDn7w6iBcM1qG3MjhmNoQ1aNHzRLce6LoJTv8213txv1en5yXZmQ3XuSKSCckjBPtDKh36rSp",
  "key37": "5ehYoeaW72kwRcyxmw3grH2hfmUYUpP8XtiVN9F8gfq7wsUdaovemMTPNJeUZkGAZe3m1zq5ZfotgSyeu4mgdeAi",
  "key38": "FK4iNfSHwdJYtPRh5m5degm8yLcpmqdzLZhE7fntWyuEnRFa4KKGz5bd6Q7TgrSPok4ZuwD8G8idoEtP8wn1rrX",
  "key39": "NReAQhjLhXDywPLxsYTnaHLxxwCHxGyZ1Drm54Um244eiWKRqu2Z1SodxvTk33d28VfmcXR63J7C1Z5JhQUjLdQ",
  "key40": "5cFgEhgWSAWKp4CBeMVBKAFobGuf4hbNUR6rwW4VzMy2ezqBCA2kgfAUrtDxAuPinQERGBP1EE5fF6nw3pdwRFDE",
  "key41": "2hwU87KcSvhSqzF9CpjNumso5yqDkPV5vknYERBV3QTEjghamKJrHrfdrw8mu9HcXNaw2d7Zfx7mZ7tqH7bz1XZE",
  "key42": "2MEz41Q5JL5CvgXcgsBw9RBuHsjsxevxD9HxinAgBF6mqSAE24PQLnYDLnDJHWmBfGMpZ7Ci33Pw7eyzHF29YFL1",
  "key43": "4MmNyihznPWCriy4YGDHt9DhKYWzctEJC4AtBnPkQJnWJbVuGTaYq1cYxLEdTzK7wiQFJskEP2UvMCSd6npnCZMW",
  "key44": "2oMJGPXL1oFcQTFmC8bKKQDNiJHxgsi9CxzYMUzHYNxnRGmJNbYTfkHNkioAPCyjkWbBQjCJC7Tj2q4SQT33Frd3",
  "key45": "3iHKRrGRApxyTrQ66wmkhMVYQFWQ8JbALSKrnDt14PPZHM18D6vPAeStLNFK1U1wBKvzQxnnYV4hVwCCQGMKqMo4",
  "key46": "28WwzbkRiKRar6J5zDyxoJLQkhqREZLZ9VgGHRzK5e9ukh5FhK7fkLLHfTB1nxBhHirjp2finY6xVuUQSyRyhXnG",
  "key47": "5xnWCrp4vGp7Xr3wnGYKcLY71pfM6YDCW5p2tNLQy4FKbJpce9wF9nNnBak48dydrCw8d3Y5dAssVX7p5xQLfA1r",
  "key48": "4vS8FT2YKkmvdCXbNY9JN6ib9Gjm38cEdjWw6zvb3aXFZxxVVtp4gRuuVAs3PsRvkquvmmR4Voh4rYDr71UeCb1T",
  "key49": "3DVjwQMKnrmhYUt16KTqBWwVwPELighrtECpAJvgpWogWhThFMwXo7kYboxLXvUELKoPskeW9kugiRFHTcDfCSmS"
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
