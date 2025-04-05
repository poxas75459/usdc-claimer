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
    "34Kv26CZ5r3ZWFc8qkBGvai3GemU1SuyzjQqzsDUxfhQoFwz94edfqC1kL7cH1YLDUCbRhKmeHEMmmhBYmomCM4S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32reHvRruJtd8eUibSkf4aepss3aETtykFS5LLUMj5d7jrXin1aPWgAuf3QG6JNLFkhqMXwrCWCgGWy3bpd1PGPh",
  "key1": "2Fn9qCWYdJSxAMqHiWwKtJzWmwdN4bWniPWqqJJjdqTza3uBt5UfqDX7aZz1odXkfnaDNXB2Z2LXqF9Nc6BgRhNq",
  "key2": "QPJuVKJa4XNaon2et9mtu8TDkbY8xrmkHPZa1G1dtpdF69bRhTa23HnMtW53wawTgvpW4UhPEfPFcg9Pc3AVr1S",
  "key3": "51LzmsY3ftrsjpUGSwVMxBoKsQRGZKpGU8JVPfhy9V5qYb5UR8tYeKYpyxGL2FbnxfCH67KN64Gi2qdMwkYzHsV4",
  "key4": "5iQUE8s6znR69ZPY7XgpmZuvXdZYAN43nwNYfE8QZ6gGJWhUJLFKwkEJFbJ23z7EDRanNdtmC1aXbuidhMEG3vyS",
  "key5": "2k1ozrCURpvkWt5F6WQY1KGrLUmFP2BDC79W1cU7KiMu4Cx7EdHEKXrcZ3TSU6aTQHGBFU1GVfrP243YgzypP3Lb",
  "key6": "4Q4QQiKGy6mKyjKRtcBET3my7Ctkszwqw2cF3Wnj7Qv8jA16tbv4cVg7o8BNf8t5GY8xQkbceBmM1eLGvLnbSb2J",
  "key7": "5TwgDBQow9p4AjtaY5sZzYch93eUkhxjFAH5CZ3sac58C89xEyt7qFFNyY3ECyh88rPc5E2GdP9r1Uk5rz5uGekC",
  "key8": "2FreP6KRLumt3om6VRTbfNUahTEJVgHjAJSBnjrKp4emjRJc2oD2oC82uAHxCRrUxgjQamBtCJefKLGDBcEQfjij",
  "key9": "2A1DbTLLus2QvuNKNprBS6zjBaUFTmmXJUTtNtjVEq88f69iGZWgNkZCrzxgqUsxcAuF9KHpiuyZGFNuY43TcYHJ",
  "key10": "3BDUQNRD3vR5gezVfro2g13tv3HqUceXJaYDjaCCyr9D3C9qM26GhiFMVnJTna1hPeecjN1tLooLNMHaVfYK51qV",
  "key11": "4NoMLCmqyobRGtr9yEvvi6SyyxjGGeaYkuo1Xx6QbQUc8MQCFq1xJ62a5YfQ2wa5Cu1yD74VLMXL2rUZeq4TXUpz",
  "key12": "5n6KHJbqzR6ksiDM4CZnWvxzTfW1rG4TVBnnrSyUS3fk3zrJfwFJ8D249zUiG9k3Km9rN7vo2j1Fxu8JZGgUtMZk",
  "key13": "5mCQnfXGt8YUzLaEC6XqCifupXbSLuUFVAYFpJF2YUUA1gMz29VpjrKZsfRbbRLPvqabvFxC8ySuNG2hAoUeUMQ6",
  "key14": "v291Va4HuW3Zw3kCm3L1gm8r76EDaKGgbmTZ5YJiigqo3rzc151ztvmKjj5pG6qv9U2Ju8Fymw3GZWTdWLK8xRk",
  "key15": "46hTPMwbUp26bMz17r5p1ejufL7eHq64X2R6m1VE377hzaKUBWkJZci4FzQWXmThBX6bJ5yPMrGXWFjSUXMK7Syu",
  "key16": "22otwNG9bsL3L5yRs9b635X6qoeaMZYhjg6UVBgdmECZkbEGvySeCPMSfCoWjWXnRbjs6WZcAidzY55c9cDZHcgp",
  "key17": "4N4MeCSdA1HSRWgXW8kTEx8wjXYpMo3kmxXmN2bNY9jjjwYQ4ZqA4SzkGiEtR7zXmvfcE9cor21EXTBDgTp8oCFR",
  "key18": "5izfsenVBmAk4a7n89FRxP3JYM2JEZURaEoGM4oiSYMJY18LLfP5zRbuuy5Uff9QByJzjy2UF9EeXe3M6xAg18qv",
  "key19": "5j2G9CsUgKxNoyEzcjES3hrVDhV3Rovu7s2WqTtMKwd948EYe8CFf5cNuSsvEMBLqeX355ZadHZWrX5mUFksFfFu",
  "key20": "5Z4ghL4nZ2x2QdwBVRuhgfZr13vUUhbDyoTo4hLcbmo57YGso9wDqEvMQGDhcbfo3NHxq2HhkPgnj3MqiR12SMni",
  "key21": "iZVkWwf5e9bThc2h1ZPsTNpXXW1kT9RPRjAeEFDMgFrNfZ578XJpvchzNAmW3tCsLnx8g5bvGRd5n2vDfVmjHsn",
  "key22": "2Qp2whfNrbpBxhjCci7r8uPn25BgK2T22eHuTLrnoZnRFf8UjGzfQ1EeYaPcGzaEC8dn2QzRk74ZxtJDFQ2d4Cp2",
  "key23": "4hta3zFKWrsxRUB1rLK1VKWi2gNmz7c7mJVgZVJ1bvpC6ULYZZn1zbzK6gB3irx2vTMdtFogjyV6w4S7mpSHD1Gi",
  "key24": "2iYCtUMKkhiqVYvW4o46CQVmhBQpXN3PqmNnBaCkMv4fSEHFFfWX6gr9N9yYdnC6zuheqboYXMgxHt33ufBntBrF",
  "key25": "4Mo72G5vTL4rYHkTfGjXYq6xmoyfYhDXxapzH3VEkiJhZ597379KC3aF4oEYFFmGsp2MrTgN17skULgish37Q6PL",
  "key26": "frpGeteu8hdhQpH39RNLWowwYp2qNVTQbKXnwxjBnRmqHet5q5bw9QUaufnznvo2F7H8e96PHDxA5qqktpbR9MX",
  "key27": "3KtuPj4sQRAHMbc1sobube56oFEGjmgNapWqygLXf2vMkEzF1W6V9zcm3yLgJDN2bMvuDWVan1NCNTVgzDytmyW8",
  "key28": "5rkwzRYCDtxQ4eyBd4T2dbUxkBSs56K6ynsNcgcXEhqTD3415VpRYTjzYapFM2ziDFHgwxYfKnBm8mdEdLrs9rGG",
  "key29": "5sPv7AxzAZYRYRgQpe1NbNxEixDz2eeSdbefuTrwFrgSain5FKmPvSpKFsZsv4AzQzNpsJHEWacBt3DZ8m5Ew6z3",
  "key30": "3DSwSbpjdrSXT4po4N3wPYxwsM3EEvLV9jCLcdS1pD3TRuL7DH6QD4s9L8353apZL65MaxA1EwXqxz4permAt2uk",
  "key31": "6krAjfesuwhMXmcpJhq15L4ySjKCnjdmCUuhm2oxjjpw4R2r3u3KLjiXw2ifrkvvWhNDHnmFbT8NT1dw815vdG8",
  "key32": "5pycEbhBRXwVYfMK2BQKGKQsQ8b3ez27vSsgV7vN9idDUQq3vvYYNPP2NCuUpjNTziaKMDihYwZCCkrtvD1Za5o7",
  "key33": "4AqpEWAbtntDU9yec96sZKJSneJKHENsm6oX5KqfPhHwW5wgQEPsSxt9QAXxgYma9hpeBd4b7F3eHyoNM1Yr3Wwj",
  "key34": "5QJoXWtWaYuhKNUzjpLDs4dswqVgNPNA6AUjXGafUGciJCFPM5a2CpM8FuoxkC9iH6uYy9RfAihsJwoYEpneahMH",
  "key35": "2JRL7PWXAieWnR1qLkuJEkvkuDKhUP3VseMR9hULh4jW71XQjz1uncg2V6BFiUL7BjRRPYV57kMra7QpYJnfTUnc",
  "key36": "4P93xfPnGXBXGWm8NGhYwrisDkKeGvC1JrpBtyDZAFA4muBwdfdS9SnxWzokuTgFUQGAbzp91ckSKYDq7DyJS8ds",
  "key37": "3uaf3wzfskSyNtesV36QJTJWs5awVnjfad6i2mHzLAXLMAyBvQAqVzXqZQDsD7c4Vn7bmQo5shDpgS8v2G9fHHeT",
  "key38": "2kJxQZQor2UKd2jkfw9LzVm2mVgbuX4yqaGvTJbenmnxMrZkoo9vbBbpuCMvWuUVnAepYFjzV79szFCQC1W8p24T",
  "key39": "2DwiGvyURGBF7GMDN19wbdPDKnnQwbiTfRhyyyphkRF8men5EdcaGqV4X48bLeBa84t6dFSXqP9vcwFvmzUBRzeV",
  "key40": "2g96kmB59CZFxKymc2ngu7KYsjUYG6pEiVLiRBqyomKhw3s9ye4cJXuMpf6WiTfeW3sQA5b816ZCiVHgFR82e85e",
  "key41": "vV8pQDThVtE7tSEomuH74aFArLHU5q5HWRe4q36JpssBiCzaKt4grPDYQjY9yjiWHhsDc9bzi1fM8SeHe3ZZjX4",
  "key42": "5M2rnKgSrg1R27KXuYDtTS8dQZerdp6WLVWr5nwHfAPYzPRE6auFoENrQqu97JVyuAy9jHENh29RziwDGFPb5k2r"
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
