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
    "2dtfX9x7tcCwpV2FTb82JGqtiWK97XawNeEst4cpCxCpoiTWfUta8CHGAWDb72UBXR4t49SeqZYahM9dwpYgbjxv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45hKnkR85wJ4M8UVa9dSSYeW4s3q2qdHnMY7VRJtBkhCP8xX4nKeo6Jm6JhLKYeX7MFvKgY8DcLK3CepAdagv2jf",
  "key1": "2w5RrNV5KA51CMJkunzHnJpSxgxp5NYjkKgv3WmPJg1t5ANqjmjtRGjqGPRTULaGqqfD3YyNxwmeS8xzisavG8qZ",
  "key2": "sQ9ycBGzLZKzzb1XCrhBipGVCjGxq3nEzfkfxrBGumAVqMqSmtsUdXpTMNcji9VhjqAyB9ehieRUW5SQpDMT41E",
  "key3": "4XAfhGxhCZYoAKSe5C1Y6e8bwpyT7nzVtMcbrkGXiSGhKFbeka7mBKJzdysXa735fPDWcNR1uucAHFzA4RV3qFey",
  "key4": "5dKJ7fPbgyPdgdzDNv9WGam4tDanV6n83UZ1uV82PhVPMV425bvvsi5rLq88xECJZgo7EvpAT9jrAdrXMpoK9kXp",
  "key5": "65mq2nHVbTAGLYfCLFSmrbbkXzzyYwgKuBZ5CqPjNi9CqavqFPbHAGv6ZXpb7xyfi2NrP8AYHntJoj9SKgQuaXKn",
  "key6": "3XJnDbCcw3eeCDBzmBTZUkzGqka5cBj9KAokyci4yBFGBvSV3AGmQ1f3zxnsRWN9VyBfv5LVxi2GkRQQueqBATR",
  "key7": "3jgtTTvyrDK6uF8c1XPUJU73ZxwdksEk661pcYQbuqbjt1BNdCa8r8J72CbJwjVJrzt8ZU1sRaRsB5vjRW52wxMn",
  "key8": "5NCmqBVrufMqxjh6JvYE8By7KfevBMyxoDMfhrXe9zqNdLa1ooVJwMgDckf1NY544ixxpj76rfF8G8CJCXwTMwJN",
  "key9": "3AnZ6YwNM7NypsUSZBs5isgB1Y463PHw3uDRvt2CMYggjyPaMCm8bNYFzxiAWsCeFeHqAkQKJfSacbFrCwyEb4We",
  "key10": "2X9gV1fLoogAd5bkndk6noeDo1eosyFqk4qHnP6Vwv91p9jdncnW4sSp8ZuhDJ7eLLDRyL6uSaeWXuUSmR32JgBP",
  "key11": "3zpf7B2Qd6urtiS7Q8bCei3jYreWPiorZZYJgTBshrHGjeNLvTNPo9urWPHwyectswKvk1fxJUumnMnsDQxjKd7B",
  "key12": "5ezCigCuFj2PjXm2PtDeuymLCDNTSsYxnDC9ws8Pfziitg2WKxqNsM1uy2vVqKqXD2SK3xJSHx6zVssZQ7oeyPTo",
  "key13": "2mEs1QQWK5uPL37CTjYVxF7kZYsWBuCrV1Sx5izFkvV4mnrwMdSjJ3EB8tk51iiTaXAeS8YawDw4WXGwDc3ME8Vf",
  "key14": "2ySRokPE7tbS1CGi9tmvBjUjd8RgfWqtqxNXCivVpLEHaqwbmh1NUWqscXitb94RTBonEVsRwqQzsFCBm4quK3uL",
  "key15": "3eAPPiQsZhD6cz7prNJFnNEpSj1hqJNzajav7ULMxdUZgx6cbGZGbhqoq5FFBrZ1CKkwKrdnukVeGJTRohRwLE78",
  "key16": "2inEdzqbgweSiBW61SXAPwY8zSBV1vGqqnTCEiuuRDGeP31RnkuHUuZneFEhxqZTB7jdD8Pqnz81sHMgtXNUk9FQ",
  "key17": "498iNCKHDGQuYTQoP1gMS7SDSRLYKRf6fPh9AYgbN6Jyfj94qXUd2P2UtnyiQraqr12tqwbVfsapM1f9fh2ZXrRR",
  "key18": "5Wa6K2RVygioDvAWHjKSVZGcBe2gWoirjtjPM2Fotzq8cBmZZaJsGpa3SDtsusXwgLYFzqiE8TWwPcVkXUg358ET",
  "key19": "2UTkLivt2jBzHoE1UvxkPvgbTw8uHgp24KgRYNoqLnXQq5eyb7RNvfkkccT6R5mXjBScPqySYvwrBkZn9x9WdgNc",
  "key20": "5LybkwzAQaLtjeeD9yVEJDqKKHjeTD8uYwuE2EgBestdD7rPUqYnEs9ikvfFL76xaxkRzXmriJG6hyCaDBJAUszq",
  "key21": "5phJNwpq6USC1YLhNCokJEMGxhN5LdArXMSsusF6bKQBbVc5Pmnb8gSUcxD7WCdayr9KFDxM1ms6Rfg5SmZQQ2EY",
  "key22": "3AJPCAuW6SWy5ubMy7v8ZAkD3syzx96pCTFGrCD2tiHGPtvCdgHAoWcHsCUDKxbttYr142GjrtxkkPqJqLiPmuCX",
  "key23": "4qSQGSy4FPDSYWKwBwntDQPFLWJqAEEGrmB8qXvZrcw5gqp1QogNjMv5KCpqv6Fo2aUbnX1zs6SyqDddr47sGFeA",
  "key24": "Nhq2vJV7ULj8FUg6ZmCXjcuanSd9PABAqAzyRds5kWvG3xPiSvEoPYSYsUB8cXrcdyPjG8epuyawx747AdHYjyP",
  "key25": "5Za34H8a1ED8mPG46MYf58N8B1nBHnsWDVXay9Tt2r4xyhJCtwtCBP2Wk7rDe4Z454s7o7NqnvD68fYxMU5LJthy",
  "key26": "5Mj1GqGESLZVh7HACLSetCbBmXLG443uECknnu1Rnuhr4pxJEyWS2n9eT9CeGC2jc1CMFAbFu1mYcU6YJ5dRuZ9a",
  "key27": "46pAodFKc1jrRx5YJbsAbBqo3mBKLoYphmSBwbtwiZMEWCPQMxALvgFLmHxpsBihUbj1Ano2ZsmwpggXc3jthuT8",
  "key28": "47qyf8rymRTmvV9KXnSLtHjkJPk2sauP2gJXNnLU3uEnupziDifqPxLXUmtGGFnVA7JBsg2DgFrkrTbvbk13eD7T",
  "key29": "2Mwqz64dUL2sCqezoKkQCEiqa6AhbANXcdkW7kjvV2iXqBvdwUJq4H91LEF8K6eZtug52RGPWVfQVzJjGroi6fei",
  "key30": "njXqDr2qt45tFe8dFWVu2Qs1X8hwQcv6C5BvQbW7isWazrYHM3wazGQ5k9CkxBziTQBz94B8q7RnKwdAEvLBr7t",
  "key31": "5R3b1ANQexzwqB55KeLBDMCsqNh8CL9RZiUo3PBxiQUKtqboTuKjkTSvA2ibAg6MUJaEQ6VQpxtMbGCf9oSrMG55",
  "key32": "4yCG8QoE3s1Yrd6Hd1LWxQD4ngFEj9WXGhoNFMKc9fiiYG42TBChZLHiNDrmNHA1m2mDDzkK1hB5Ak38wS4iUChs",
  "key33": "2okinitdWWWB6McEgHqSRyApjvtm1W53SfGqwCAZdTcHdcxRVcA76mgUmybtm29tujSDz5G2TSXfssXrx1zkY6WJ",
  "key34": "3xyDfNBeCLBivavaVnUCY8gDmcoGJ2knSm3oau6wrUswa32V76ep2mdwY9aXHkYXX4RkjRHNSTgZLnLVU3vr1wFr",
  "key35": "4yG4EMpHkXD49LJzBTQaF2MFES6HNhu8hrkk5mY6EPb3BCMurV2RPYjLdzRLSDEwMJVDxoukRYZjmXXUFFwaBTNr",
  "key36": "2tkvdfUSA1YLC483mZcxFtHfW1hcDzMAZU2F16KzbDdnu5R26qdSUwqhGYF4CEihfumAvEiCwVREs24JbqGVqxSS",
  "key37": "4HYZ7dhHERXwNEMHFR6Xhz9Va44RRoSvvJZ6aaLevf666AviGVdMmDRGTDkXKQpjWsow2ZdJkUEvcNm5Vkmpdr9Q",
  "key38": "agaktRt5m9ft4Db1R7USQ9qsPBigoYgZjxfrZKz9EQyiVyggdFjsNmNmweFndYFkB18FAqm7d2nRJYKR8eM7NQN",
  "key39": "53fnNHP7YyVudZQjxGi2Sjv6MXFCxxVcgPeRerLXEFFCvgaskjEizm69i7MZ9NcFTZc1hM8DSL53ZYPXqJYX3Pcv",
  "key40": "2FhAdQA97bjtNeuY3MZPvkHNSfn8Ao8nSvt2c77JigAhjAVFQbnxUw3dMJvQVw47G5WahAsm1wqpLxcG65VsZoPw",
  "key41": "3SMVVCmPJwpvcH5KLMDo1LJ8d8yq917WwrZpc7nC5X8gygc134QCA66uPzH9QrJynQ1ho2BNDZZqoZWCKqHU41jt",
  "key42": "8TE5kg3rHsyn81d493RWvmQwVEqTgQcxxKritn8dGvgUKhivgc9Ff7kCpdc7ttWDmZfrVbCBmG1gi4nTvhLyXAU",
  "key43": "5EhTR9ivmFyFVQpTG3Fc7JDNj2ro2brcxVcPeAP5MkAZZNT6AcZ3so7ja8bMBtEkVdJ64WNjxPUF92y1dkrZDp4z",
  "key44": "4atzuiydQgkGn7sgKmW4SEoJbyDiw7Cdfm1mibdUQ8mNuSkqGdukFiBxqsHM5MzJpyteQtM6J2gbDAYuU2A5jpZd",
  "key45": "5XuX999iaAteVmvhhKu8kWX8ehfR2Km4iootSqSjDmAQQkBBevU13JrNDnVZ3D2DkdL5EAU26xPNJPUeN752svFb",
  "key46": "2CNccCFa6XmCXo47k5XQni4VhVwrhDaT5MChB3gQiXEsbqrog4bAFdDBL46EMQnRfEzTxdVj2bpLjhobWUTtUSZs",
  "key47": "26UwizJPQATgRVRHKx1F5n7zuDp8JyiuqhPbCXVvry2CKSFVecX1igMwfe9ZtMQzaeoQwA5Vb9fDse2WH5ys4wAx",
  "key48": "2ANEcJRArh1ms2cLudf6pFnJi3d8K7HLk65CnyRKbibQNPRfQufzFN1Q6ECPq2k8TEvnbj4x9vZ8sJVwPjSUB51R",
  "key49": "4SKwHZ58g7A1CwSm52wcJ2PQPAQZ8SxSZw3jcnyQKLTWnxnqx7csLwVJTw5HEYKTPPk6Ki4RqGHwzxJFXHcgdqD1"
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
