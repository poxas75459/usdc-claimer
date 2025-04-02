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
    "4hWTffnaNCpZ1cD4RyMcnFJ27PLMvykMHvUKTzXihA6dWvVt3hvXJ8iy6La8gVr4QPz2LHE9YLThyuWbu6U6FJ3v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XWAvQE3ZbckW3QwQa37kgGpPZCFi8Yt4CYCLp4YJ7uJaGR27S4VcQrtxk2qv4atToExxD22N6MaZpAYiw6zzVx5",
  "key1": "5UbiVeiRNMXBYHLPDJYghVHHw4HhDEM23Cba89qCUJNRaWMaD4LxqEJwGnqaPpGEkvGSGrBdZwqBJind7KKFt1q6",
  "key2": "fDXBPw3JcopPeNQbccnohwhVzwftpmVwsPTwZnXVoN1F2xs2xXPk6XVXVhWH9RQnncgzngKHw596m1xtrCLp898",
  "key3": "3ASpo2zDM6rs1qekX7Ldof6Tpxigh5KQowUUXyxU8iCiybFt3LEWWpgQPHzd16hdZ8NhfktqaPQnAJLRkLnX3KLT",
  "key4": "iVZppv5TMi39RgQDSdXx78WCgiZ271w2vphvKKzmaVhPWVwpdYQr6TXWY72RyHH3usNLS4Av53u219E8AzSXqLL",
  "key5": "4RdsQjU3SRxgnQ6wD1pVc7zCgyAwreKQN5mFHwn5FWyREvpFyEcpBGF74KRdr5GrwdoQq3yG5x6rg3Yj1Aur7Xrt",
  "key6": "jWXvTxmTjoiqfkyNqa2oWeo1e7oWuiYy5jsHHjLs5yedT2mq44h8nYDxz9EmEBHMrth7aNJnBVHtorUHBodEVW8",
  "key7": "3gfs5eh7TG9NNisgXX6TUsqwVGCeREDvYKQdg9xLrUVqUpkFLpLxSjTYFtmaneQxhALedWLxJ8oBp1gFrL6AFPLS",
  "key8": "xxvpHXG8HeF2uWAYH92QD41g7kTWuNdGfFZqcSgNGd2Z6pxRmWFvPB5MCBt4TBDZk5VuQW4R5287P8EMikL4G5B",
  "key9": "d2Hde7pKzJ8JNnJd26KmuqvjsRL4DQPNFkL5jsEAEdEfk3QKQuo4xHCi3ts3oSfFBanAaPciMhnxi85UP2kCk9M",
  "key10": "4tLpmxS89RE2T75qqMNa9RM93PxSGNXYV1Xe9NhtztiALqJRRJunhMnsrGh5rudYwcNFADzkMBVmsnWP1c24kHQA",
  "key11": "2wjEkTuJqRPJG7wjGCrN2KZrBCKBsKs5rYHef7WdhYmJU2CPiKLxbsj8x1rKbsUEeTzkJSeUy8dHA2PQGarH2D9x",
  "key12": "3YeRiuJxwgCGdJ9gtSXGrMeug8Wsawev8R7Y1KSCEzrv44LYt2LYFu8ayVRK3exbxM2EY9M3xaPPDXaPezsHbDxu",
  "key13": "4V8BrTcB3QTEs1qZz8wrj5NroZyUHs1fq3eoRwT2WLDip3xs4TnETpGeTBUxRc3o9bjuPs7gi2Rfi1nGRs7y4pco",
  "key14": "je8hazMvxtxGZag788oow4DGdEqVWqyE23LyZt1PeriVXNxRF3xGTJcZzFWmRihLVqtduaz8gnXykEVVYHZCAsW",
  "key15": "2HwspABKoRY7KPEA7Q9ErtLP73BxN68ptPHPMJFg5UZ8P9UNGjxVcRFee5HffvHddEidpM7tMdfa733Fkm45vyTD",
  "key16": "2y8dhWJmpQiBwwHbR71knHW9Rn4jHXmN4iQWt1me6onHmgipu9k1mEYBEusLBhMq8GwsE1JXZiHxR2WaYwRWAQyT",
  "key17": "5JYuRz8RApZJMY5L5koeL4As54j6TwAVqxPXAM6fXjE7nuYR2GozJ68HS869mHzjqzFBs18CZdRpKp2M1TN9yACS",
  "key18": "GFY2SnCb8J6iegpNrGGoErs9V3FB8CYJrc5iobnqBwjB7F9xjokRTGa7L5FdGfbj1pAGKeg8DEZMEeZnmhhR59X",
  "key19": "2F2M58gNFCjqnpSo3fev3v1pdesxqpTCqMPgyzNk7UymVrtHvVbgdNJ3oGSCppKeK8rLpAHRGLjgiv8fNuuS1yxH",
  "key20": "3M2HYnZ6Kw6Y9wFFhm2sUXkhCzzfGaRgtW4HWB78qufXSSG2Nk5NWC7tzSbHMukG6pKzZqvJ93Sp9fUuKHQ9UorN",
  "key21": "2ALUBPeq7qoWUF8RsZnZhFoXLLraenyWThmkT9SaGwVux5D5LTETh1RBeF38PRa45xti84gFoh51T2oZ5sDtqkxA",
  "key22": "5UDK8DpzrtxWKDZjNwy1osDKZN5ptGvXHJG1A1zGiYLxGSqpcjtqvEYGoK3eoXFSjVLyHaHsoiUHc3mc8XUrnG1v",
  "key23": "6VvSYhAGY3k2VssePHBUN4ba5v8ht5HYtgMeo6FhKUFq7z5k5H9SraLpGMskUR6bJHCzzC75YnBfR995HAw7Gy8",
  "key24": "4vYro8DXuCSmNHEq6QSJSLj2HZf7PB9LAyFZ9TWjrLsbmFiUVggLMx56khzpYWMJCUw8gNTcd3XD1HcDCLa7W2Qe",
  "key25": "HLbniH3yfYP2oHeCyyU18JkQycurm5t5awvWLCR3BZCYpWGW9qn4BawXXBh3cx6Q6wEDaQgb6EMn3S9u2cD1aeA",
  "key26": "2hLuSdFMpred7mfsSNH4pJsSfU4ahheDXHNQiiFhwihHYAj79MxeAzwjq9n2UPwpxnLH9RyUurpYMd8TwssJrjiD",
  "key27": "3HB9xMpoFLJNxS9KQfZpKrtALeT4BZhfQtZjPzLf4oXGpons6kxw52ESavPBTcBk9e8b2ssLckLWt6AcHHwFAn6u",
  "key28": "2hadTrifwc3FTNQ6XsYjKXbNiBbtuQB5SJtDb4P9m8Nc1Wcrzh9k2U3oGQjZyXvLGnycLmt2qiR3TaMC3MAiWCo8",
  "key29": "2GcV7faANLVVEyRMSh8XzWkimRXtKRueiUveFt6DRMaB5bHmWT2kqGZWCvDQt5fqaABVgRwm2qyyPDrbggaqrQv5",
  "key30": "2qRadETXuUCVuhMgvEzPtRz33JzGagFeN2J3ikFoJD5ymASCYjfGAp43LoQ29QqYFwo2tM59mTprYsBkLYq88oWo",
  "key31": "iwLuQNUR1NnM8NHWBB8SdiKNnB3Qep3367QcWVUonEMV6we2PwMRew7HF2CrUvJcSTUc3n2bWH85VmfRbrSK16P",
  "key32": "zUsrYy5vouZ7cafe72gEZCevFW9MB6wDrEBDQB1PBhkrknBWkQjyhH6iBptDBPRHfYFM7Q4nVd59miu6BJUWuq6",
  "key33": "mJfK3YJkvvt3ysUMJEouLdZ6zneMjxzoE8fvZysGtvfGDvmEym3Djh9nMexEdH6U8uBWpWxMRz7ugSBRiagQY8J",
  "key34": "2sza4vo1UocddmbTrxqA2x5usMLH3PqGVzdQbzeWbvitvgUCyqDRgVT2mM2jz8BejR84arm6Vs59wvUYiPhnGv8e",
  "key35": "28iVZA1VJnjCF4uC1qoRLaYwZW3ackcSzrSEhRCVxw8qBTHKy8DyjH2CqqazvBzniYGDzkfzMrFncCVe8RdRKUZa",
  "key36": "Zmifnjo7Nw55GN3s9cgWgz6r9kAJHQh6NWnDW9Vu6ckwDXUmwJ5gexrVvVCHu91f8Lvmyg5wsBeTbwPNEgkaAtJ",
  "key37": "5RVtmtR7PUFifThUjok6FqNHTxNhtwRpkNdsAqe9zoocgzqi1PG45qe17H4v3MLDBEuTaFyYUDoNPRfpKQw5UbkE",
  "key38": "4GwR1vx4CYKi6QPAsQS4Unu4Ty43FDszdKUdKt9GwpkwryMhL4PQj9u8fv9cVQVVCjHcVMYX8CHhp9gYBJwfS66U",
  "key39": "4jzQQrfT962jYMG7T4BMLviEX18JmptRyewmsoMyU5RwheVAJ2CiCYuAX17xeGaSWZepNuvHWjhRBXjtrHuovpoU",
  "key40": "3WMcJyj9e8PLJCg29LFvC2dozArbsbyYcJC5PFvu3urZJ8BBPmNtF1YQCiPo5i16WedKoTUFXMTvKU11fbFuXyyU",
  "key41": "53DNRCxSmgbRr73cY58LvF6UDcNy2ibLUmwjoRVkEeF9gBs5BQkVkv4cBouXhL2cEe6RzyZ9N9xdSyens9mxPSuy",
  "key42": "4A9ZBhkKvCpnBzH1UXunqLQGTfoe9qzEpNXMio1T4VXy7npSH4jw7Acpy9R9QyvuMVCBiZFL4skXqfBhAg3hS42C",
  "key43": "4NUAoxEaYFVfkFr2cDXQPH62ULnw3zeL6u8mC4EVUKpRJsQLYxp8oQaQz7Vwn2pkaZYEfCafA3mbwUEusqPkz8TG",
  "key44": "2La2LhUtL6csTXvXi5cB1ievTyEtSe8mCRFPp8UDjzzmQYRq2hPvFbPB2JieAaA92ktXAsPfF7f1fCBeSUw4YzFD",
  "key45": "4eKsWndKefcfC2tBPzgCyNCHc8Env2BxbY6sEQdjreoFo2XybtR4BZSHEngTeN6u7hdCuXFQ9JkQDaPP1BMXf1iQ",
  "key46": "4bmKkfx5kQVvnNjA67PhAPeCWEiNZxwXBmyzcLsSQvD5xCzGeSHybEnsPcwSgEMNX2ZJvMHymLqHykuNjmpUECWn",
  "key47": "CFfYGQgeNukYNEsYXHxUnnQwHCsCkqAGndQF2Dfvza4oKRPE6uViHc99aW6JvpQ7isGrQ6RaYgpr98wtugF5bbM",
  "key48": "2dj4TK45JXXmouDr6dD4Ri24SJBKz5rYYMJSSBJGyuoH9UFNCjRnbxQpTBsBiabBKisL6cWF84bksk1U4CS3yGW2",
  "key49": "aXcuUwqie6YS2vHbEu2aonCKeGzj9jRtKLMnugxRB3o5RE2dJ8q2oUxJ8uYgjbAqhQk26XPirH58RyVMSqfnm1W"
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
