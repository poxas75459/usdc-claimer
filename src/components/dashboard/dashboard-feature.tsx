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
    "2ZtARv4RZvAutQdKGy5ZwzRAgxtYgHbcq1wLNYXDZdQT537z8z8VfNivxbA6Y8WYFz1D24Uo6bMogdmqLNTf8Nst"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XdVBGURGJRApERAoMSUYCZjGWRJyU2ze7VwPsjvD5qUdpyaq6VNFCyYK2bGZYBn77SW2fqT3N7qua2ZzB2srPkW",
  "key1": "2NgNeW8YVWNxp47CEQqxPcakFe75ssqoLkaxpPZCCCK4TwBgrAmRVtU78Y27ywrkP5GWWhYWbuL941JHhstHQWvN",
  "key2": "4mBj6rMBg1NRBN7J8wvDRfLyhXfV1SzjKHFGfiXjmMayJfKykfpvwvZR53Rf7nVSxqcTpekXkP1uKg3ntKiCdEKT",
  "key3": "58AYoEQzayGw62QsVjasURFG87MFeWxJq9GTyZ76MQWdf39hXg5vs4GMAtkhoGxFYbw3iNasyRC53bEeEQGhvYMs",
  "key4": "4i85TQKY7Ygocrt68vxQm6c2A34re15tUyPysEpLo1K3eRia6DzBmnLKbLKp1GtEev264JVsSkQnALefXdWEfWjk",
  "key5": "2PE4jUJugjecXJDcHxRWYSHzyRJsFmJMTZzchoTT1upUtj9SekiuryHgd4bWFfTYtKz3hBwwJuS2UoLGvuaFf7wu",
  "key6": "39wimAtysXkJSvGk5eXi8XgX4EUWaxvyDjtkS45sj5ecDBmxvR3DKxHTgrB7eWZyvJqb9VCED4SyYs2Z1ai6k3wu",
  "key7": "63568y27DtsfawBEGc9z6UUBjAoZyAHGhsFqpFJGeM7iRtNioxzvaqGExakZLBFnKF5B4MHbAQELn8EfnpxqQhHS",
  "key8": "U7XsADNnxxEQr7PBcPqimqjnJKy4Xy7V1DGWdCkZ8jLddW2GCUrr2dCUVakKL3kB1rJPbHP9RiQbVf6uZrbB4gi",
  "key9": "4Rwkux1riybq1rUZBu7ujo1fZe2aWLD5PJhTQg8tmGriqmdyFqGEfWCzhm6TCeNvGy9iTSjriEqjMkhfFZzp5s9U",
  "key10": "4bd13SnPJKDK6wYhsmkWANc7qjpnzCyFuZhRacvPoA4bD3US3UEQByx1YDyFbBEhDi35ZJAfpsCJFEH4wDhjgTJT",
  "key11": "2Gw5a8Aq5Q78F2rnydsi15jEopudjAMRYTjd5KQ3zLS8P9kWU5wjUMtiT9KWVygzgyKgC3457bnut1UrtxZzNaJx",
  "key12": "ZpYAcRX4fK98Azk2ztHg21dX6RTvaeC2kUR4sSDifcKGicvHQhzMXqq4DmtKd5jTi6ECsvreWyyWPrHEFTNfoYz",
  "key13": "56ZsEjcpmK6eZpqEaRAKk1aPJVYXX3tRs659bS6gTPtbV89kb4j7uCLU5Dc8BSwL6oPmquA1HVF8yytto5hKg9wR",
  "key14": "2GpMSM4VveH8D2a2yiUFHQtegtKdinFdM6pbpWm5QHY3fyNoarVscpHSSKNPeSsJNYbQWwWycxsQdGiwAdPa3tjR",
  "key15": "5cxtnwCjVhNxxMjn322MLA3whLFsHynivYib9qWSpDikQNVtiX2zQz63s31fZEF6jevdrwTw6cvk5ySqxNBnpJka",
  "key16": "56y8A9hMaTqVC29ASYqwSDrtQVE8C6NHN8iL2dawbq57bbMCJwkFbJa9DABfMbZ1p5ttsFirWqGLQZT7ZMTHk2Ys",
  "key17": "KL4EmvkRh5o443Jde6VufekkJUqegGkMS3QFBChrzBHbA2qoigzCwqzScMFbnsRyzfDoauqyN2iz8UZKJv4k3Xv",
  "key18": "CiL8zGGsC5UdtNTpkSqUcVWNBwgcPeKU1Uh2VbbRdxMr2c7vnXmjmXBSkpWiDsbu7WK6NYqCRTBBcn8dgYbRz8F",
  "key19": "S7sRCSKbjh5MLefNQ78jUZVqQd3BjcJHJ6c4CzwVneLpyXzwap7m9JpuLwhRxRCpGHwNxYGPSApcBDHpABKf3Hp",
  "key20": "pAaUjcXQ8gFg6PsoNnZxkw88hPhz47iNCCQqhPpZUXcg18SqgLRWLEcn5oeyw2DgGwNEhi1bUEXWRGUp6dTcavu",
  "key21": "67NRPVQTgMCpwuVuNEqpTQDqtZh7UTeAjr5yrxn3W4JFzmTybR3fjJq1qyQozdz9ttJstJne7m1sDT4LpAJV96KX",
  "key22": "4nwgCL5945oNZFXzSSH3xUYPGDA9oHgDpwZbjyinUnLwXppWDpMsb9wkh3ehDuzvFvgwmUPa9d8CrDsUXdb1kDDU",
  "key23": "mbEayztknJwns91okKXUyCWp4R7xibwa4m5TLgbh1RzYrruWxChbWFKjTVzpRBMsTJvreLMLaHYoxqHWe5tAbYT",
  "key24": "5fqPudM4YFPys4KQGaNVTWmCcx9kJ5Qf3ZTxobawPWsvKWSExWKbzn9L38TudLjxR7USNw9EvUf8qy6w86Nq58Qh",
  "key25": "5cAHxw18bGAH3jG9pQeQRTJ7MrKdRwtejX29Aapny255rAzBYwmmxvaVUKpBdnQiHos4dUMCwSdK3C2YAMnJk8j7",
  "key26": "3wQVkryKZv3o9PDB5ZQVFwxdBmooaYbLwagbcXaMTVQWfYCqifZdFXpYWuTRfQfqCf23XjRa75czwvLJ2LPNjr4q",
  "key27": "5vrCD3UoPadZTgTvjXjz7Y6YXHQioX7Je6BFwQ4qPnskuffAbnhVufPA4UvJ3EZKQ7Mx9nCzZopK3GcLC2nhTjqx",
  "key28": "3VF7AkzCfHmVRRDvNtnzWZXPueVMx2ukm67USyHWsfLXhdvNpT1aD16M3Q1EtwzGtoL69fkExtysUXJBMfujD5if",
  "key29": "4Md5hgEfJmRKtKsTzxYuiWM4PqRbfEfbgNTzQdEYDmjgJMd5EvTywt9VBaM2jS6zAZeq5eCBCGnLYRor3oJf5bYp",
  "key30": "4XDvUcPkCJkNi6XwwAw8EoAXZGj6rT3axEEXaGWjHRVvwuFCSP3s6m4JsB5gHRQuPSjX4aH9T29TGh3BrkM3mTvL",
  "key31": "4BsmbvhamqZeB2Tj39oTsSNky2aQdkcxeo58A4Ed1zZDeZ98nzVWLbpqFmsrPCtoBUVmcKTvSsjUceLK2hq65btN",
  "key32": "33uLYewS5y5TVyhfJjzLvTDuaV6aLJPvmn9xF3v5dii4Ypx2BfmZPBvtsBq6H2jo6X71a3j7NKZAZSGauLyRKPK7",
  "key33": "3gbfxTZGq9NtjE4Bky1XW33YQsiE5ytrqMqiQYajbQMkyAv28yMbvUBGaJsBXGLVYozLx18eR5CXjGj7F25sUGEr",
  "key34": "3uYCakZX9zfDHFjEDzfpr2o4rZ9qVWDzd84CTdjJhCi31CnqoGg2jucsttwYVFzSigrmLkEVMS4gKpk6JD9fsebX",
  "key35": "5qiWuaKS3e8Bzf4QY7iP2Pue5LC7d4yjmbX6b7dwMYrqUeATpW3J3ampZEmeoT4cmSX2X1LyxnZHELCGhUAs2QVB",
  "key36": "5JochrgcBTkUtpX4dsdN63bokPYkXC2HpN3sgJstgaM9HXdRGc3Lb39QD3e6WXeVUjgoUzKN8Wkyy13gfNqHQH9k",
  "key37": "5FDi3LQ84dPtPyFQVqpJByhE5sb6nrMuwKApDMcu9WQvdUcWkyAiBEZ2r8wNpvucfUFoTMY1n8VgenGZw2eS32Dx",
  "key38": "5CFGdujuHRLy8bK2Hd8UvxjhukooT6PtTGYZudGKkqCpXWeK4SdCuD93CfjZRPryxmC7C8kS26DAnMZL8QNDqhs7",
  "key39": "5MsYU8RXSnjkPQhABJArPBkfhhuhMiEhsEQHkAhC5vhYBW3tm2DEtcjwG9psZ2JcXMVVHXr37zQTKBMN7rqhhx7Z",
  "key40": "MiYW3wDvcYJbMHMK7RGTEbu1cT73iCBVb7LkkMNerEKUnaW4aMxfT53pZ9A5vvUD4RBeP5Y8qqfL4Ut3YDaM81p",
  "key41": "5XGTojC13F2TjPxMvrtUFwAJvJFaqXCD8NPQbcNEuQX67fWNkKFAzr2qMhcwoYYs8TMnvfXtnQRcPVZ79LorvedT",
  "key42": "3EXbjJYwB3ywhGsFZhidH7nCHwrGtmwWovG28aTE4Hg4AzSGBPyLHfJn55FxqRHohsdFirPh2KsDUFjeePSadgKo",
  "key43": "47Q2iJRcsqmMDGTjHLfv4zhszEBbLiXWBunJHdJXAGFx9f2wMADRPm1z1m6AyfFLj2RApLYA2sdgEaAdckpbtpLq",
  "key44": "59MM5DirrkBc4u2XptDzSdbKypFXDzxn3pUo3LXpUMCEcZLJNgJwWU92rkoi7MU4GbCanhUbLuAFKTRfWNyAkMwh",
  "key45": "5YQnhz4ayfee2QhPKeR2wdivuvDotDuy2rogT3TvsqmM8HQ4WfuTeVi5CzwJrZtizveHXKFwfv7UJBGUnCBkCUkT",
  "key46": "3YXVF1Yd5zcfat7fgEjbgeEoKBxzYutnSqSkeDi9w6zGhVPhciSjxdbCuzQjiNn9ZQhNzUcpBV9jcpF5Gx6zoarz",
  "key47": "2wn3htPnMX6TiLxhw6quDxHRaJyG8Hcc1Zxj5Vmq3LjMioi2uddM67Q7pLDSdqvDJZn4RZPisnVgCqnesstyiU5G",
  "key48": "yZf66vnpoapiBmTPBf7Hb8qHigeVjpa3YkLfy6tx5Qr4LZxnkZiL5WEjXdjZ5W1qfp8akYyuNCthHAjSj21SWvi",
  "key49": "2p1YErZXLQAdkn3jjZa2YpsSvwerDP5gSg14WBeyxwTAGAojQLiFeWLCrTwTgiDTNM5gjarMG7PRgSJdc3uk3pyv"
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
