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
    "491vN9gABNwueFU5CN24CzHRZyd1VgGP9SvTzpfU3gFFTNHqeuvwrQojHcFg9PW37VmDfbDDfVGnEc9x4Xz8DReR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iKg1ob5yGG3uvLnHCB85c1NSHxhGmM9D4XUobvKcrbyQEnDbyRWhq28twxoyppCWkN46cHwEirYV1JzU1jUroXy",
  "key1": "2C4iYqrSdYVU2yks1aGE5jyAjt25dNUomj4hShmXmG2ZrPhV131gdUxzJrwc494uyDbs19duefEMT1b8cmThk8nN",
  "key2": "3tdbjK9hgNLtdV7Ee4rXK6dE7yHsysbvsxYrYLi6TjZXoyCBd3tR51825YmNW2Q15LGLYFD3SyB31m2g3sVUPpnR",
  "key3": "4oLMzSP34tapvf31AVEbQzFAxKVKKVetNVX57Zbyqu1v43mZPVTeAytVNtAGesdFi4JPoZCdWeJgL3JPMGxTzZHP",
  "key4": "3TRzz83qKBGpkxnh1YaeW9UbKXUXYZ3wqW8JEFqHXTjFFYo7jRja3FiwKMhFBD5hadCRuVBUqjnWdf2Z1p1mAbwL",
  "key5": "3Dhz1XqD5P9nutY1qnmSiX9fEwR8Jvk9dKTxhTR1Dc2t7H5dfDDprHDNYnnPaFDhrDZUmnEgJz9gricGbJCKMvRX",
  "key6": "LJavcFrScfTgmsFW1zxPJZaj2cS1z7ftNLrkCsLjUhBSCWSXSuHSVFC4JeCNR1JNs9mV9sS7PawjavUhWADQ5Zg",
  "key7": "PY8p8hcFvnZnf7s5NH5h4EdX8EZL1fb2HGCA32oKNJZMPqdRZocexjJgo9BFvQhfSSeSB6JpMf4CY68H51Xc5gv",
  "key8": "3QHQHbULEbpYPSnxFxanx3ZLK4HyG3QyvoeoJ1FHuiMx7KamhkWNgyx8sTtmnHbBHumqui3acg5DzwybxKC8sqE3",
  "key9": "3owVhNBpjhJCFdcCbR8UQJWd473KRanYPuZuCnFjeyMW6uJrbmQq1zynZx4kqeKgZQjbqry7hPV3dNa4FtCy854p",
  "key10": "5VJ87LtDtFrywpL4mwgaWwHzKQT9gKihSzQJoNK71mS5Q8imDj6eZLWF76cnD7SXTgN12i9Vorph85tVYGq3G9Mh",
  "key11": "5EX2sLnBeeuevzDwToNhyAkBxDgFcaTGDGDJM1RnVt5cWuJ1fveC6YKh2MmmcNV757b42WxqgJCse9weE2MT4mUj",
  "key12": "x3ijF3fPbMYek6myUNmgXcoSXdkYuMNjsGVWX5f1nMfofQ2HDDeNqdupgMuiaMaPx8uQw6C1S6modpM6hgukZMg",
  "key13": "51qHLVqbkzNQ8cxiTTkHrEi4FyN4ECqYiMH7CQuzcnLTekhiYo7cdMPh1qSBn4tWMxcPemeae5KKc1aYnEPe3Tnw",
  "key14": "4jA4VMj4Z5xoVihqN8V34DMToxgaUUP63qYSxLpH1Hs1DkXxRpKdpMVvqGvWbMsCBc3wFnRLBiq7h7MgsRSFoPo5",
  "key15": "Lxe8b1Be4sJgnXfaMMvF6C57fQTRiBifPRXZS7fUHEeVqYpCboFbFSmhkKrmwjZqsTbpjiqz1Sqj1EUQdRbFbha",
  "key16": "4CKsB4jPmPMUSY4CjfvWAZat77EXyq8vLHkbj182gmVeDGUb5FnMRnExt9sy2MYnuq137kBDXrxYG6Xji1YatvFD",
  "key17": "5QGfGgDrmrypKV1f1QsrYZSVAKWgwzfc2egrh4veR8hgK85eoEEAQEQz2xEKJHfa58MiKifZ99ahGa59EJq1u3Rz",
  "key18": "2wjb7guwzP74LmhFCLUd3kYTj2zx8azUNYdskAj3t5b4CPqayAyPHUjRCx3D5QqSj8zeURLsu2s9kM9MrfumhZrC",
  "key19": "4tCdsYGDuH1TWuLGU6dwafrncHwLWZfYSSEFp843B2eHwFbpV1FXCGYxNUTidchEci3JF5g9EhVHvEprRM5edSYE",
  "key20": "imgiGVamBJSHjG5G2ZmUjt2u6b7cEqw3opStFupMuFxXyDvAgBUS4ydfLkmRpmjQ6CuU3aiDsnUJ9yr33GYmawx",
  "key21": "5orWqLB1U1PjsZzPxs7UeXLrZ9ftm2MSx1ZMovz5J1UjZVVGa4rfAHi6th7jGQysoYUWKsgDAVoJGJc3Qw4Lke6U",
  "key22": "5kkYhZo17Kxkm4BNdLYVRpP8upP8gksZW97NA5ky1jYBv4N3wDtsscMZdC6t86Xz4FUPDq7fhnKXfjzYV8kntHY",
  "key23": "3u9VMufBDZQKPMEmSJgP6TeaP55URscW9PKNvt4VEJLW7YidkjU8sevot94NW6phN9GEByCqgxcHdgSXZPVv6fpP",
  "key24": "2aLoCabu3iuRs7EhbJZZDQP8WePjwEfe3HEhbvfVM3HRUNP9HaBzTUxu7RRFtEWDuBk93z21afumrJpvQ8cz9JX5",
  "key25": "5X1nL9FGYGW5P9RCNotQG9kDM4iKYunwdae3K54hHcpiDChcAKxq2rJnVh7Tv9BYMd4nG6ogWewNtsHvL8JTxPcG",
  "key26": "658hFxJuR5tcGtYfYgB6PVTunFYbSVbodpZx8nPZR78MfGcewW56qvDky7AnoYVQmR9kB8UyCqyykibpwAyBM1LH",
  "key27": "27EeSAq7hcEoSaxCWYUCsPnwPvWfxFeu2iJZjU7w5i66RXiHjFgDSGZK3vB1FTz54o22wdNgnSAPdXwMdFCC8EPZ",
  "key28": "3WPzegLTahVJ9vHafA5xxQw4eBa8yzyjmsGB8DBrUGhaSKsZHj4338wMFjYFss8VzT9vqVDJvaZLrAgmGzniVaoX",
  "key29": "3sNiqaLHPTHC5ERkieppf2Z1YzEV6AmYhDJZRx3QpqhPJUBPAbvAL1W26cbRzEFdWMj6xhRxAAGjjgdN2A5J7X4o",
  "key30": "2UypgbZWjJSov6WsAf1uoQ28sc8JKHy9nCPmLApnETB5suY4FqDsVvgBZQ94SmMX81TyJNtqCUA8FLHnic4P3ti3",
  "key31": "3yse7aDckjiKCgnnfCVyFDhwu8JqnRX75qBbMCSXyGVEUo9kfvWihhtJY85RzezVTkYk4CoQpuY9unHYFbJGrar4",
  "key32": "3KJ2PcY1Yvg14CvHjBynKXsEa7eQyEXrTYjfdwZKhMGiNvntiooE4W3D8NHJTve3dZ8Hovzp34zWDLYXLAUdLWDK",
  "key33": "4sfr3ZkNTrB95Sk6HAxCWxZUy4kn7hFJ3pku8xAA9afZYqVsDsasz3WZxiWMM9CpoBzPcJ86kYdfsbbckixYM6GA",
  "key34": "5doT4UhvYXqZrP7bFADvZVPyvo6EmqL7omLYJRBAqmJPrYbGER4FJoWsSmZi27aEVwxjTWQet11jT9BA1icXp5co",
  "key35": "4zbucMLF2TdTcrGPCgm1mzEmF4haPMGHpwypJUtmgvpV18ezEFw6Nb3VUL7ugkigvpb3zQJmbv8CwgDgkAfsE9QB",
  "key36": "5xRJCq8LWwmU5eq9XNHkNmB6asKpjPpS6Ez9vu8nPSYdk9CnjLfx4V7AhUgH4aueKqgmS7CWuh3sy8CzvPazEpGH",
  "key37": "5gpkpJTLsN4uRjciSPEk5KrwDzzjy1aBpAyPxqsxterQg5wCm9Ay1mXcSTHgTTU1EBHpPRdrVHqhnGqvyT5gLqPq",
  "key38": "27EePQkftvvupH8s6M5YNdyKKYEFq4Lc3iGXv8Dvi44MnW9qTciyUpr2ZJFkZuUA3j2bDUGRjivvCxfnrE4tvrB1",
  "key39": "4ah8igKpPGUma5rsz6m6Rrp2dhNVNreLipbp32uu55MF4K8xT4jy9yJMQaPnYXuBrW3ijAzdSj9X56STi2KHuecy",
  "key40": "32GLrt9HNfhyuy8MkKH1N1wrurGWHWXByXswzVnhSdTxrBprQhbQte7k2PGF1VENTudQ8RTxLGniMnMUN3MZCZDP",
  "key41": "RXaSUX4ejJqZ8cdAXoPL26FxBLShHHpZUUb4oXNjNRtCzMpfwFYkGLh7TymVT3ojscXvfeSAMYgc2sRSvi9cGnY",
  "key42": "2HPpkYPXtQbBMVbZe8NvaSxVsvmDgsdXbq29ssS6RAk32N4r7D2sj6JvjZrUbX6zi7bC4eiqnzgMjySZS96kWbsD",
  "key43": "2dymaL8WdS3DniaRgnYBj3Hh3fJepiSbNDKN5u74U2SrnXSKSsHn6iFDdyboP1NTfNTp6zrn9Poisz3aR1gnaQuY",
  "key44": "3R41BcdxDDc9npUcv4LMoDkUS97tEL49uJJ3V9EhpftbtxHoLLZhTPRWqQ12LuRP6iYWiHKgwbGK3dJXxSH49HVq",
  "key45": "hHgYw4zHQsUkWDcrpNWAJaZeaoXS8GadUS6r5E85gRbFkRY5oa98UpdGq65rxiDNhswWAqmWiMMETvNG4j9AXgp",
  "key46": "47ASYJqeB4aZKpJPCP5am7W3tUtARRcpngDT2zz9Br6J7L8UjX76vetQxRqAY3NpEAaAb6bGt68CuprQa5LpuQ61",
  "key47": "5F4mEx5evMm497MEsXxzPF38F6MAnHedRQthG4jh4J9ckKYwNRRZurPwoR7npzsg2rkBG1r5f4vozLqQstKpDCK7",
  "key48": "5MvoV8CyU9TY7Q6bB1qgg4E6BT5SbV74WvtwZTQ7xCHkY2tLaMZamBT2Yy9iqzyqHzUhQX8HkXRPhQuSqALVKMFm"
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
