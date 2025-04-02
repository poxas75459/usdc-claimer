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
    "2mRs8Wog8gPZYeygFxbWPvod7fYbbVLmfNbFNuoLTkpYC9cyHNkqK8r48faVSFrwfA59CRD7xvMVM4BcRBhgoScp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Nhwe7TxAZxT3PCNkc3WMt8T9ZKtR4jRAvxyXW5GApS3GBdSLYkKreuMzezCpHvYo5RTLHdCZstuVjPZhHZ9oYLP",
  "key1": "4CrHtABYpsWmr8cgWHnr75PB1tL8jZXCH7cWDD4GVecYu7c8XSBGeMBh1DftrPfHnGjrXS6zRiTyMJkG7egJBJF9",
  "key2": "5vKZvDoSv4f5m4aGs5eJYZ2EUjnFLjqfSvP8BS2qkaxxKFrmxMuhEKUXeGjbSvcFM1CdnY2Y2t81bU29QC4D1Ezd",
  "key3": "4Ga8XBhMRPKfNYsTumsQWQDRcwisP1NyfhigLzLSEjCXzmTZi7rwSYAG5b6y8Zegn2ymFJLgiK2u3Wus6V8e5zdM",
  "key4": "38qiz5gRDFX6EvLcDeio1JcN3WFLCytTWfHsyK8FuteQpA23ffpgnG8h9ohHU8jUbFaEUWFe9YNSheUEpKVXBuKJ",
  "key5": "51CyAwCPh3RYFV6pfBNmUz4vr8beobPcgUkaNgZo2bA8Eu4qDqLzrxVv2pC4QhnYBjyYSGbnB4Ze8gTouqH6ZPyR",
  "key6": "rFJGKbyobndVyU2vcDWDpE2SexE1HMwJSAdjcph8haYC4NNxd574iaXP2rpPubfvq1zDj1ff3ZhJ6DoSz4eicNH",
  "key7": "34qqcroaRTCQGWpzBnRMhJC6adaxMQ5F5fjbrsM8aJU7DVkPWxZ41tB5k7EKH31Jrc9QUB6JMs1txerechqfxmqG",
  "key8": "4HoJPmmSeXTV2sU2KXMQ4x1k36TfabbXXBZag3c3fjWMEi2GsvqZL26fYCCzFvytaEP6cL1JnnuRmE2vrFGjjonS",
  "key9": "5C6bvjEy3rdV9gh64FUcG5weBYPMKuKSfcwxfu2AhjFMhN5XDXL2zrhe7i7FWkKV1fEiErqHqDLgWmXYHcwaaGwX",
  "key10": "37pterVhvRApNVSUJC7EkyVnXXCWBtUjQcvbAexyrEjuJueCLWPAECffNocStY5EZtJzbN4xZsJYsjvZknJSyJFf",
  "key11": "wun84UY28W7MT1n9XejWgdunh46Xxb9XqtgawjsSLRjiSmjAhiKaHrYJpASKnFpbJtZSF1VhZEZXEFMtBGyeJ6G",
  "key12": "4EAa68VKc74ej9yscMcKTbwpe4cY8gKnW3Jitbk4dpqd16n4R9rUvg3qPdUnLUqiLdqCwXiSE2B6h8pWcxDNEuQw",
  "key13": "3TGND3kVaL4FAvh82EoU21nXYbkb59g1pjsfx5q1MK9PBMieX268hXhUdkAC6yEs4mKTxU119g4xnCgDGEKWdS2M",
  "key14": "4FUvjesnWVYYhWAfAABCeSuf9ynVBhwrGSXmSjHjM1Ka5CTGpPDw15L6P9kRYdZuoUV1nC2Z6htPTztAg3CVsWPK",
  "key15": "jgz9jDb8VkZDwvfmRj6UAaTzCxCskZq3Ab8k6AWFrSuMnDe6zuWabJBrpEpN8w799deVzzgto8g7W4m59qv9aCP",
  "key16": "3nwaDnjdnLZjUAvqZJxKrSuwmCKsnj1zJ4sJT3wBADmG4M1wpoBiCWCFVvnkedYMXAqodBiK3ZueVwpNbynpgFH3",
  "key17": "49MMYtuJkHq3Cx77NVE7FdsHeuYxv9KC6eF9rpCCrDuAHpoV89PbBMwKXm9WSfoJUjeg8akjEkfAir6iqNapTzAj",
  "key18": "39m7T9HyW52iAdku76XaumCGwEeyAe8R2beZBoaqeYhSyXkypcYPtE5rnRt7QjMQMYd2ASxJB16a9hjtfhBZGRKV",
  "key19": "4gJUJUcQnnFM39zaWBXgveBZ4Vm2JtGC8rpav8dXNkMRbQXTbLJ5DStvK7qke3T5f13dXvv4goZbN3zVE7F7SQyB",
  "key20": "2DqKf64uPRBQZUjLNAe5Fj74J5rQv2cBK7yzLS7gU1jjCmL6pv5RMWG7NcTEyTdbumL1ULWFNQmM5mWWTUEHuZkY",
  "key21": "4GuCST7LNCB8etV72EAAiCLksvwFVvHZzQnF3NkQYtB8wX4cDvmpxMWAf9SoMWQk2zRLQsyijf11NXc7QApE19y3",
  "key22": "4gzjLumeufL3nEde5EKCrMAs7qVWhbnqTZpGdvFMqddW62zdTpZUxMywuMfF6683DJcjAEJCrpJTEYpCZA5bSbAs",
  "key23": "BRXUPw4GWqaV3UikBEFyeS8arhrkuWvUdTUPjjbfBsZqZagpYrHdYodDSLWgyDXN2nirwKHbB21qpvaBommLCvm",
  "key24": "5H8XFgGai1iDotpA8QgCFj5YW1wy8cu9ywgfxvoB9cJTcWkG5KidJ6LDugZXVEbjFZsuDSRkoRBtCm5FiJboq5yc",
  "key25": "2KdFoHpX5LE3yAYTxaSRuhtTYYFGZ9ZvQYznuEEqoXyJ355faVonfatMKQRi9EswYfN8ApZqZ7jZFf76qyzYxkdi",
  "key26": "4vtrijiVDpyVHY76uyQcMPTVfYzCkwMQauWgTJ2F3vxrKaVNvX52NjGGFGbhe1uVuhVk2Go1LwtmMHVP3h57RLhT",
  "key27": "5RPcHV8Ft6haeBoSkxbuUjsL8mPBJzKoP4f1TEL1Prp6nT12BufJNkoxa7vbwvJf3peayeDa5mUeVjvLyimHGkzW",
  "key28": "5g1y4jj19qMiEC7uB9oHkSRG9k4fuhsze8zb5apFr1V437GAPvh6AjkRgAW6VbDXPf5HYHkEbqVKffxZSYjuKAMs",
  "key29": "3epfik1VyuxTQY1y7mGRqdmPVp7M2qXgaXtnebcw2RCHASspJCppHYiHXCqznmbHkpXVGm9Ldr1UZ86xbuhRRkGP",
  "key30": "2PVTo5EoXDxMViBDBxkPhZ2bLKXrya1NxHTBYRDm7GNobWAunaSmjCCuCR9EsVDe4BwtA2LWJfbmnHaxxzqWBNvj",
  "key31": "oKgn4ntj8WH2k8nx75nqmiJud8FqvsFRPvBVHYNCdX7WYRZksJUxsMNETB3v2Wb2487M3yNEYPD34KNoejdGpei",
  "key32": "3sSh233XKh74kGtV556XsBreK3XsmeW32afTpzqjga4LymutrmynNuECSzZuTYPg8XHprmb3kaqvVc3k7QPa5SQA",
  "key33": "3Rni7irgZLAajqBYUiJudaq7PErqcdvmqXwbcBR4PpHWDqHtvJyuz2sf71FLyurNUdAmZe9kSWAiQ8PgwVLgDcwJ",
  "key34": "51aAeQpGQsY9kMDvmmfyVideeqZSF3b53cfo3RRMz5QGKU88xTu65Asi72nFZBkVHyxbFA765U3DwS9fZBfpAb8V",
  "key35": "2h7XtbhP5o4srJGRLQkuyvrcxdGRWnuuZJau8PSRuMCiw4LFsZkoS2Dqeqco4FHLCDeQFH1n4SZTJv58ks5mbkvu",
  "key36": "2ww8YoN11APbSYaKrSNoxoM97m1CDxzGHoAZmRhzvdhHcb9pgF4r3srMRkjCgYwvrtb4wikqYDGCP37m1N5LRRNP",
  "key37": "28gbLQrBmroi7X8m1eGEe9egG4W673G1xCDR3FDeaCwqYyYkrM1QkVPU63bUBRX4AQgfHhZ99EbcaJ13vcrYUavn",
  "key38": "2nwir81rdLCrAHgnSfGsVYRD7HF7XTT27Q52pEuXGZu9bdkpne1mzov9wEWeoAZpnY3H6oo8P6HVuVWcY96DVLi3",
  "key39": "4qyyWQhkWvQ3nePKbMYFUuJH24jLWjnexrbu9aPKFsu9GaAzwLhijYwcqSUqP8UATjJJP9ydtSAgZcrpJ6aGHSKp",
  "key40": "918QUh7jkUY5EcfKhBNCJPtLHCe4kFnqtdPZFjf4gsnMiGhCBrv7UakXgQPU743ypMRHqBE2BNsnU2KQGPVv7CM",
  "key41": "2qh9dkgdGfzz2fowhgvkiQU3Y121LizjPHeCr4PQGU71BjpmKmqjGFHw2KjS26CVmzjzr9M1AwkyazryzqkbpHdR",
  "key42": "3m1aGocP8fXxBbXqbvyTWtpsM5gaM9X4D9btFY49eenci7yVqH8U7NtZuw4vbxNPtYoHzUPPm5Y5aqoJYAiVLYCu",
  "key43": "5Yn84toGaHdGRGvALCMCGpo7V1W8W2yVh2qJGGeMoC2JPDyhCkLgs74Rpr3DUd9LAdyQS96C8zeQ7ksWMSd8ZQDT",
  "key44": "3v4JC5sexX5pLSmrUbGqhfJJCMj6Bmf53xCKp531KdcdRf5shvAkuey3CjGNjcNoZJvwtmPPM3GgcRf9MKYytGZn",
  "key45": "52TRtRJkqHkigM26mTi51pfrkZFKg9JqzgGzf8gQ8MSzuVSVgFemZAyD1o7k1qyGBmdkLPPc26ChN7CaW8cSG8W3",
  "key46": "231egUdH6GaH4QvNWzerD7KoweheVKaCDLinrEWbs3hczVmzdiDjhCJc4eU5PUWmmzjVFb4uJxV6c92pqn8jQD9J",
  "key47": "3VKDJmpQ35Sn7PVSY3GfqvZ9QsNU9ieccgJ4SmMYFiq4Df29GuHjZujq12J9WCPQ2cY5sF4VAqFDJ3uvuZHtXkHx",
  "key48": "87EpBa8WAZCp4CM6F6DWtx34wVbmgeDZkmjG9iumhyhP3wq6UJq8cMZdkAkFBje2Z3gPwEsUUg16Gf5oBkJAqSX",
  "key49": "4Ei6jeQj6vR7NmYHL6AqekXXzXxtbLAnKN9MTad1RZU895FxhVVM8vwPeB3dL3MEmE1PUPQ48Z8RjLqJwEa7pj9p"
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
