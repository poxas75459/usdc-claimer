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
    "SXgWeg7CTUbmQsbhUGT3YAnJdtJv15JCoc46HhCtTt86F6FHtJ9Lv7RWGUeyGUz3v2HSkQnvgZtchoMT6qvk1HV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eUNBkCZ74284MeVNsUNSTANasVmvJ45YsroSFeVXMXsX4fDbvoYMkyX6ygyHsHmV6KViHA7PbVfR6oQbjuuJqdr",
  "key1": "2UEGLaJ5YJXVQgv6d7Rz23CZaFoYQnx6AC54KPD7wYhVrWwne2yUJCkzfBUUz2W6yzd1B2SHvDfLAudutvaZaJxB",
  "key2": "47727kniskP886TufVaM6uxPtvW6nV1ZrkcVDP7hJDj3oaU5kiv1cLmkm18YUuNdBcCWzqzX7GDPAw1nhWKRj7WF",
  "key3": "5EswG3UZhLKjgN53CGPbXyBLXLYpvKoqWKjTGJSuEXW1F1sZyQBQ11svr3uXKc7b7Ka7t7wE4FwAcbX9LcRmAHJk",
  "key4": "5zwMoiiJbdiDjGLGFqnCMNgxYxEHBUycEo5AovJhezqNWAXdozimr4pYMfXnX61mNfucr9urKfwSyiYKv2739xoA",
  "key5": "2CQ7ip5osGrfUrSVTpLCuaos8YhaRWcZjxDXsC2PAC3wDvuvcmZfjx4skGZigLT4X1zNhuxDtQBFXaSnc38pTtHX",
  "key6": "3v7V1WLBBE3nL7C7DcGFkPBdtBgumZUUkNjwvueynamRFEoFqVEevG59MS2B3WGHwTc7AT6UzTVSt88N5HWNkrbS",
  "key7": "2qC7sMCJoLP36PgLT5bZ3ptXxoQQWeTt84fMZRYSLodRkzGRAovuqGGH5Bkjvqd6J4AQjM86yJNbF9AbERihW1aQ",
  "key8": "62feJK1yZhFQBkpNynJH3qK2TDS7hejpaMdWnBzFA71rQE34cKg3fPUvEhQJhBgsJWy2SSiGGD7RNk74rgs1ynxT",
  "key9": "4XQqHhQxPvn2tuw9r9bvEA1ZXSoW8qEJf4JZLogkaeg73QyLm3zPTkvV3sftZjRkdRmUKMdi5yajTatVW9Qi2Mar",
  "key10": "3az1h96tj9CXDFoAgVkphavV3woBM21uKxweHG8cH2Ki8aj96q8X7kyq3tmGn5XUBX67BJYpicGS8WERYe1aSfvM",
  "key11": "3fkvfHAHbYp3oWR5udwurhcRPEGkM5Kr7B8bWUmDdcJMFxsQChe55XLWQE9sVBGeTDJWpJwNcWgiswFMkqR9XQbH",
  "key12": "2L93aTAzKFknjVyonbLHjoExSr7WJN5Mwd7rQNsuB7Nt6Dzjv9bhGowamjDv9Fqk27mgnqyR9TzutS9JD2VTsmWf",
  "key13": "hTa92b7v86PyvRHpusvMYKhYqJynNwWp6bkvEETpAQjHwnqtG7JB7zCzFtCj2jUJSyHSFDutBgW2iUbih3MPkUv",
  "key14": "Pr91Jfmz8r8oWk5yhBmZTsoydF8QKvoaCG3hJvLt9hT5EEZxrdw5BhoGHBt5qcY8akzahFkfqdinZ689Wocv99Y",
  "key15": "3FSPPByUT7GgxHAWSejkMHij6FrpceDwxfcizpUcKhKZ7QhmDsZSNL5m6YYKTPHxhPzgCHXY2wLN19o6G5YUREPF",
  "key16": "4oveQbSNZwMrtxW9tqFosS3t2G2zUGFbvX4jneQJnRcRje3QTSTZvtTnMD9ucYFfbVrr987eJuctrDcNKoxPcGrU",
  "key17": "tgMcgiYqTet926KZmecVNFe72ArCxRT7EazVm9bfoRSqUiCp8R4b98mhw1T9eps1TqDivL4n5JAHtCJebsP9w3h",
  "key18": "4KvNbCUn8UQCY7XQKXLWEJnHXps2HHDERoxUFn66PkBCTuBfQmFJWGVFgsozkSnM1bZ7HPzX58cAiLxEbZcyWaz4",
  "key19": "5LVD4KjgLquJ3pCdNxFUxsiddU7Prs8WSfCA37LgMo36sgrEm8Bna7nqgncuecWHbSrHv2BSbtKgZn5jiCf4ims7",
  "key20": "mhCKgRySvXxxHiZ4teyruWEVrrqHsJjTuJN55ojLyKZCRAXTaxYo8kjSBWcVACGq2qytB9ZerY2AbfrDxSiK6j1",
  "key21": "46x6ZAEsECkVWBVCkn39GLjzaHvLDiCWmhjRUVxCrnB2huFKHD3hYcATMTQ8RLqjoRnRht9QK9iBySDNt6MDRiCj",
  "key22": "2pzMPRp9adtUGJUYVG2LGGjyR8ots8f3DxTsyCfQvhMsCvC4BGnk3YoR8oQ2cVpqQw437QUKheG8yHyWck4qPx2y",
  "key23": "5RWvwLx7eSCjt9ZqqFyMytbgr8ntnfXfGRi6xuSHU59hW1agZzvRw9qfwE3AvW4XHxmKAcisaFKJqcvbt1SyU2wP",
  "key24": "47TBU1jw3BBxmVVG2e947DmPrYszAtxTGTcpL7EHrzHMaQV6cchf4d5e75AQj8bjkVfXiXf2fufLkWYoLBYZsNsU",
  "key25": "5nRCUbvGij7RLGqtugwH8XxBKV47Uts68sKXv1inbtUWkYBJtT7rb9Gcb9LgUR16NTHb5VoYoadqD5cpVR6efUeW",
  "key26": "5K4L2v4NYYsLc5zRF9XPe6SM912ENYGAe7Em4Jz9ceQJwAsEbYyznPjbxiJGwZ7y8HR2ehR1jk1fSwxSroAFQmyt",
  "key27": "ZYQEyQRG9bfPeCUB6Mp5vLnSLzkF7VRRgikfzjunecQZFgiW2emjCZTpRJRRa8EpUKp8Z6VUR9dyXj5WrtD3kKU",
  "key28": "5fmGeG93YGPwVWaLjE4kwuNSRmi9S7zt9yPSBJjw8JPnxUG5w8huqe15rYqpGqcq558XuPyKzPB5A6bHULEgYB6w",
  "key29": "4zyWC1hUpNpi2ReA32VJzQtNBcuWbNtT2w7FN7SpjVWjmFeANxuDzY6rchwtQWsMMrJRcuUZzhUrQYmkGY3ZfCzU",
  "key30": "4NMq7tpQwKEEtndEuJDekVfLLZ5Fxzg5L3ToXnBktQJZtPyVg5cBmFsLbEWgSWebT76KHzvvJuBweAZcgcVZQdfU",
  "key31": "5pVuCeBseGHDsFSnaqzQnHCXuUcWNpJChJjSNEtmYFqQSoMgNTn6UCk5HnFJ2ytin7ewZu6gB9otMH8JYxKLo7nF",
  "key32": "4i6VtL73cq6EwE9Rb1tE85oap1i4jnKr7NTzy2dotSr8qkEyB5BuXoDXaXsqvgvuhoyLh5gwQVJXTRszdRrFQj7d",
  "key33": "2Fn8nnMCjEj7n8BnKxDUWuhsjXj98afStv39jtSnuY5bF1y5XN4Jy33k4vAvZnFzmApCstq5LvCiZuEaPxCk7w3H",
  "key34": "4fVMuUwyKxP947iKX2Q1Dy6ZpKevrHyQsHkxcGv4e9pVMjJMUA4dyVawMwCwaTnhS1yjezuunrDcK3Es9fC9zS2f",
  "key35": "57Sde1vuTtkViT3yqKoKav6aLeQoFA9hHLeSTeqinM7feKNoJamKUm71brF9w2jqaoyWJx8cJ2Dez6fnk9s6JAwq",
  "key36": "5Q9ph7P9S6uJxPhJ8sRnJ7wwHLSRWDnZbfUDNFFhSZ5UpYHxoPCdo2F3Nj3n1WvKwZAJEsDmiyS5tKMrGeeDKEQi",
  "key37": "2xgEHBsjZTfaEFTA1n4ZaPLp65noBeEMWRcZoydPXTxgVxk3WBGHHLCzFHYhDNz3hCgo9QQDeysjMp7D7NmKu51j",
  "key38": "3h5hsAGDwJMxEmwy9uZedCJa4UecdmNTXV8R6qFzJfHF6smWRuMehMq45VYpVjYdeA2qTKxhyg3Lf9Gtzv52YhUq",
  "key39": "4Xf91um3NmABpCnkcMMmV1q4K2MEGMJnUskhb5uXBrSiSvM3YXjKVeRzLn8bBPx8kchCkanJAeqjG8LhrnEG5wuJ",
  "key40": "aTWd7VedgocdANv1Q4CNUHKeMwMetqDYj2qzz7BPy3dLqMP1a769uX6c5CoY49NYAQ6nbcnuJUPjrsVmV8GY7Cw",
  "key41": "4j4Cr2U5XL1vtzJU2xe7X4BjZZTuo41Htykm6X19VGJt8fe45VJbXLd1qZTjsd5zXNNafuQFHcqwvr9iz2Ht2fFW",
  "key42": "5GFNJBQeossTJDtWMkDGbt7iXZ3vUEEisckMN8YT297dHCLSscWVTRHMp7wzXgdBzMz3NxxQyRTKzanbu13qyuKq",
  "key43": "5AXxyZhLp2YwJHLobfWmXh5yFVRnutkM8MbtW9VYYjPcxPq2ph6Dw1EeUJ528CHwQKGyZAYh59a5Mng5AmzsqHz1",
  "key44": "5aBXLVnQRV91wBxTna5325qutNzcNZbrekAXtSEb8WdRBu9c42WNhoaTnUsDFnM83jhovL13ph34wfWf7sCYW3Ne",
  "key45": "63oG1hpSireFkHdF4KLEyfZreuFGnhhjTCvX6ZW3kuAQUWLEeumhuJxgVXATFdgtL1wCi2gHV74XrEWnyiTQhri7"
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
