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
    "5ENXX35geaxJFyYJoxgGsYCPztUBauP1xGFVJv6o2sFpuY3egap8QQ1tWd1CEMM5YonkqVnNgSZPZNRkG2gKduV7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ahGLyMWC4sCa5Urzr72fvRFX2UXn8GuK62ZD8r13tUpRWiAGVGVNMzvPKX1EPou7DgtaRMKaFkGv88PmQbdcXzv",
  "key1": "zGU17Ar4XEHcaQRhkd29izBeHjsQgfawbcJJpgHRnxjoZTnU16rvtVLdTXqwx8fs3eTAfTnt5boESL2YaPGoL79",
  "key2": "5YYpfxatUyehwCXQx2u4mwJDAGzFepBYPhcgEJHeknk9XTh5wJ39HroXmpQVAKFXVe18F2gCzL5WjphED6oBRU6d",
  "key3": "2AR5CGooW5AioEp8kcLDzhuBjbCRs6mHh6JpMF3DWN71TUhZTwbaHxXbBQ6teH9D5yYUcZii4mdB959jiLZjs1gX",
  "key4": "UecWpJhDwnWEojL9agNNuanECBryXzkdxGFRBKtZoui6QsuL18XxTqcrZYojbKcVwAKZByEjFVsuX2pL3unMqpA",
  "key5": "61jWDQynHgSW3hNod4RPzcJhZqRFroqVpeAFeVnvt713NXJJKQAtMuGLmjQZUgeDygMmBBszdMZD14M4FDmLARWX",
  "key6": "5AA6MFDuG1Dtnrqo5T54K84cozD4jopEHSjSjtxJi7FZ5Ue6ifFczfNNzSaTEvYaKy97edsXu2QyZY7hyky9bZ4C",
  "key7": "4kRqMmQtXnocA8GsvJSooTkwD39nUpMimZLLohxYRSriTSf17CWXgRKqfXCrt2RR3dPQBVFDYvQynkSQfA1wdrns",
  "key8": "HHEWJPu8q6mNBghzYHudSJqLCCSf7w39UvgirkAJauYDdAH4xTgpSe9BBMjupARVxmoVxB41NgUpDrCJEXL2FG1",
  "key9": "6XjL2rKVMRpyZbHYWNtRy9mnhVC7QkZFLXrxpjjTbjBuEf5vT93UHRWRhZTt8TsLU13FT5nn7XRuTJs6DqMyWYW",
  "key10": "5CvghmzC677E4DFfzEoDy5XSd6DsNQj7fzTYFVH8Kc21bSb3RMuXm6vUyxzp7hdGXdLP8Y41f5pJjr57LuyL99jq",
  "key11": "YvU9irdDVyw6NAhbZn5oiByxCWCyuRLJ2jzPv8zZEy1w3hrLTskHrq7VQ1N5j3TjrafpaFiVxQLp31QpNZKN7yQ",
  "key12": "4F8QpoKjb4gsu8LGpne6rLptWpV36oGqJxB58hargFC5cbT6EwspeQSJhe7rnRvonpKGmhPcJ9sr4XD9bAhgcqMi",
  "key13": "3TT1rHjorhaJmg5avRaoLTjjiCYo6vMZgg9XH1UE9iFYPyGZM92eLQjoUtP6P4fR2dRoSpTt1gntqdZBBVUe3TTP",
  "key14": "xMGyLhPoMLSksHTd1FU65ZSnDBCLWhw12JmSU1mcQJVyitzSSv6cFc3QA3gtPJ6LPzCciM43zbXumU8APenFunj",
  "key15": "5ZM166F6Qf4t1GnxNVoJYgmFpKcxbERKcAMbf3NgHctvDwW9BuP5DZkbz7phtZGgkrSoxA1ypP9F6bzFqiq6X94v",
  "key16": "qZ8ZhkXb9umAkDmHQLSFCqad4vPoTh2b74ZbU1fMYLePSS815qbCTQd8AejkFVKXJwV6qiayVRBATuv6WvKznc3",
  "key17": "5crBNnb9YveKpAvjxUQ1gnFssdyj33rs7GtMwz8vpTiTM9hgYpaoCXwg8cjWFz8mCEoqz9zoA28x8msWhtuPDXbU",
  "key18": "3dSJh7k4rBc251ZyxLbkr3euCf9wpRwbY5tmUxf7MZMAQYPr7b3bYDAp2v8rq5ciV4C8mvURzshAmpF143DnSUaA",
  "key19": "38HPV3pA8rQsytgbA2qHpcenc5ZdtUtUAGvTNDnyDcNV7hN4iB418VQKJ5H1sNZjEF6zMKDJGDrKbEAgCrwCx6Q6",
  "key20": "5nGEqZqkk1jL981E9AsrECGC6JYM7k19rY5vKhzrcGsMxX8pYFkDJw478xwu2T6HdAWEbiUijzBZCZGzPRLhT2oN",
  "key21": "2VsPeTHuvzvNWPfXUdN1JdYtFndKi9cxzpfvR9tbrcGPDAvu58evFJwuE2rqKfRCtAcvnCLwjSPrAij1gPZ2vaS7",
  "key22": "37BDjLWNR4TmeHNPJwiNuFsAW2PEnp98rWdwCmr6XajFR3Jvq3foRmZseLcaR79eQr4KFdLY8TUhmEbM8mZEn13x",
  "key23": "3uVANkJCkwUGeRSZBZFS7ibpK4xtXSrharwKDUULWBNWrs4nqAFPsQAWnk1V3V9BTJWjnAKZ7pMjgzH1BxPohMD3",
  "key24": "3NcmemVzZRRGBdSiAbz2g6UDh5imNmj63ik76r7HRe98ThknJfBvtyanpedhGHYzvDfHY8wTs8MLcL4xnCihUqbP",
  "key25": "2t2VqyPjATUupUpQTcL1mwujSrwMfNChcw2GQcf3pNEMyjszPo6sgk8Ve732ED8Qxkc1j3iBdQz7zxgCHpDTysrH",
  "key26": "6kaNGRiUvEySJzzWsYH1NKogrrPHVx3KRjSAsyJ1kUf6oYjy2FR4MXeGgtmBbmKKwj6WZk8FmBZFwxYxkmLL9Ab",
  "key27": "5q78i4eQ2dwJktXa8hyrisQwbRjDkFjkv7uR8mxt9u36xPZM22Yw6BNiCTAqnigYPXRfXboAEyNCLi7dGNgGMr6y",
  "key28": "36hK6NcLeBXyjLkSSUiCTeU226MrbWxUMKrBj2sC9Y2q8fFF9vA3fcP4nVnNRLUmXDrJjE6X2tcycQx24cgy4hYa",
  "key29": "2am3cL36bbL8PprKBrnrAwKfmaPWZ6i2NfELpMgvkWa7pRyPNFHNv77vZ5pou82oRKcqXSn6Utm123AynQqtWbaL",
  "key30": "4RXmai55MF6yzh9wxJKmrgC4toGiwbrM2agahrjTogrpaN9RcZv1cHZo5cLzxSCeAee5obgfGMvrYf4A7EzoGA58",
  "key31": "4Hm7YYiqtAKGR2uSrhy6tDB8DzRZDbYYfeEhcfq5ufkMtUHhfJNhDKfKPN7S6qihAVns6azvNaifiuKmYoT9sH24",
  "key32": "z35FYWTCDLBqkfin4Nrs5LYmCCgZL8VCSKVTtu1PEo781hmZMU3gpAmNML4QES77ScFPeeNerXTMcgnZnaYtuuu",
  "key33": "37dhjyHaLaA7kWR9ZDQWan6hRZBwnXoTrehNukq6MovkkNEiaUarTCVHWJUjj98h22bkmu2brCM8wCNxrJcZvc6q",
  "key34": "2sqM6ZPuMBhWWQ9eu7Fn2NVbph5oUcYUc6eruZQnT88iaCgZfPvG1VkvB2Ykn3EoTcuhAPFKLnKJ59so4attwz3T",
  "key35": "3DLCy39BomTWRAC6ZbmRFAb9cxYwj2RPvTRRiTsgAjiNHE4fXpVYHJbzGFEREz5gyxSZvyKLmrA3NMEhMBzfp9Tj",
  "key36": "2nyGk4XeURjoFq6K6KUKtNiXcb3xxp1nyinUqJgd3rXFTij47pDnxLxhSCvNeCKqdJjqGMLntEH4rdQgu2ZbFjUC",
  "key37": "4KmEPD5ikyxqFNFsPqMHqWHFhWryCg14eoqfjNJcpuX2v9TnWoCWvZ3dj498mNeEKZY4pbG2kUdpy7H4KBL7KoAg",
  "key38": "utV1UE2jRyEj1VMNYaNr2MGFXA3an1WPFcwsm1Sjfc3MQM5Bd6N78AeSwtUooeYroRcWSmoSFUjETHR2KRqcMYG",
  "key39": "2oauSRBPuXqdLSMzn6y95xsZ2e6g8YfFjB5j3sBQHB3od3q2Y4fVmd6d2ihkBrKwT7MydLuPmvRE7e6K1aingoB4",
  "key40": "Fkf9UF9tW2dPksGEedSHaBg1dREpm4Jq4BB4xgEAS6Mjnj2yAJXLfEcZQigvfbXRzvWoyZDS2VxcFGxu95WvmEV",
  "key41": "5XmRWLtkP9JHGtpbwAk7p6HWnYPRL3umdp1JZvVwMhJfZKF7UJ275rgBu6VUtxFm5Yq3Q2jW4hN6f7VxcnQfnBuG",
  "key42": "ZoCHMThcyJfWC75e3mCbkv7DgmsgHZpTP7gc24cznVSy1WagfZEagdWjpPaGeFsX7M1zEtcMZGjrjdYWzQ1x8Ld",
  "key43": "UoZaPkzUKSGrHofv6VazkkkVwktyDzDLxWWkHczERe4tbrVkTWxCcqAk3xEaRmgpKpPMHMbM78xKFgffEaXizLz",
  "key44": "24sjgASd1uYAr6HgMLgS378VPKx3mgp4dXeiAtLPpuGQgCXh5Qmo7uzHbZf8J48TeCiuZUy7wjX1WhzKhX4sosUU",
  "key45": "3BUQ1K6UBBGYTt3WSUdyxmCc8JuKWzJgfDzbFunx9mEm2hpLpD3SMfdsp52HW1PVPnJ6rquWiBQSoHipuypnnwue",
  "key46": "5NLURz3YeYu1oKybi8ZZM8fcjsZMcd2T1ya7UBc6fPLK1UKm9HTSRQUk2A6Fq3ANXeSwv96MP3UGbo97QYCj3mVp",
  "key47": "4TAdMg6P2jBMAh8uJfnC21pEMBAMDzLUot4oUNMZxvhYoUtiMwQRBNRkofFf8YH8fyT2qSV8jvGpq4DQKDYA5n9b",
  "key48": "5C3NAKgkyCqK4YPDWtYnkwtV8yrEVBRMmgFJHqJ3bXuECBiPynZDXCUbJ7GjtLYTuxw1T9VY9GkAcqhU9z8ZP5b9"
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
