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
    "64H2UPsehPSCCXH6yCbkY2LEVuFVhtCnYfojB9n8s7MF7Ft2CaB4cCY4sdeKeNUS8whMf4LzPAYosNgmSoFqLm9o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FAMKgQxbj92LjjHQpgU8rw5HQW9DfJy2YFuqePZK7gqxJ5iz3QMkc6gyvdwXS8CJMAotWnnoRhtXwRqaC2HkEuy",
  "key1": "2cA7qX54Ya1zSiG3rXc8mYvZiUp9q6KiE2qeqib5XrzbEKCmLK6NtHFcc7rmkeCcWwFa9v4dMUkGsGiaA6j7UYAZ",
  "key2": "29gn5TKAdhRRVnhBDetYqVqrvKxt5yqSGyb3sN9dKsKGRkvYKyRy4rjWnaXWPN7NBGgbxqyELNFCT4LBHGHLBe6z",
  "key3": "4nutGygERBs62Uz81grJYLC3zWpRVh2xUirqxAUgB5K2cVfoRN9iHTDTxJDtQmhmmNxy87aqeJ6aRx1GsJfS6WNn",
  "key4": "nYhfxewRfjnG4D1j6eZQaXV1qbtqYX1nunJ21s8yQ1mVYXDuP9JNfC4rp4iScWnyqW8dd4zPrnmicxY73BxmEZ6",
  "key5": "3JQ62aAPLsfgtsGM3TcepGrGb5zaotL1m5bfnuVJ4CEMCAUnNsyQteUiKy6k3sBQg6M8zwWuJsHteuGb9ZKvkqLi",
  "key6": "25R4xCnmPUc8fMupJEU2ws3GG5qUBLJqrWNHksyooMKYaRW1jbCyrZLNFno9EjFXjVF6xpzRk29uAkrSJzbE4adL",
  "key7": "316NcuEuVvRnbkYYiDZHtGHhJ5ipm9kut3t5KcVyUSQMSENwFgkdtxD2VxPzBYYzWrj8K1SEd6DLVeQhsrG946E2",
  "key8": "4XYSouucjCUwDe1Lf4dVFYDqJXxzBAyJiLZiTtXj5YdNs3KDkMSGJAp5BkksarMDEG7fuT9KwNZZ4SmVJ6LKWm5M",
  "key9": "2FtewPpYd7vY62ZhfZcMLu7Xy1yvEY2w21v1ocR1wxEm7yLEjF4h46J14NPkVZJ7xVviqKbcppjyLu1sYwzBypT6",
  "key10": "3icexQxHHKXKqHhxqpT7YNqJe1on4NYp7WEnQjybqhady7ogCuS66rWK5LiaXZESv73bfAtFVJ9te7mt8795FK7c",
  "key11": "3GNy3442qe8369ySGGfBuwSS6xkVwveDmpHhifbAH7Efx3GrKxS25agK9KzPs3h9CFz2X5q5etELM9KyX4EdK2Qc",
  "key12": "4t6VHBd9FJAdJNnr8auRvKveWC3eTFfJTkmoJ7y1ZP1CczDwGQrUSDnBsRbSWdUXPp6QwjUdHmJmMxJrBht15WAh",
  "key13": "39YCdsodNCzadmKCknW7VtHNrZkbsUwdyD7ZW8un83rG8mX2z1SFR6syVaB55ig3ndz3Yi8rdQpFSBf37j3Qmku3",
  "key14": "5cefxg993rkeU8YwKWLUbEuiBNYoHpfdgbS2iriAAtZEzqcdEZCzjNssvyzkctePQnss9Xtvs4xb5L7LppvywWjw",
  "key15": "4HR7nodWc3UHHTeqYYJVs9CnGibL4E9mZrmsXhbZp2u3riRp3Ftp917ycJwUqoh3CSL4XbqF8k2jpw42kz4ep2gT",
  "key16": "4zRXbCdjFSfu3gcWJVXrYsVgSFQyxJSi6zvcSz3HiqnGC3v152LkARiMUYyg82myfHiKfxmFmwNUnHnhwDB6bSTH",
  "key17": "31hAASZwbbtvV5EiNudfrTFWiApPq4ga4qE7tAjKRLCaeMq2CXmXAaki1zYtys1QmzwJQUeZcDocBzYs8P2iysQa",
  "key18": "5F1yY7bwYgayjYRsePWg3RkQU6Y4UCLGmEBSivw2cacJ5Rd9KykVUHnGTnFAqtrPPivF6P4QuQAMEzf3aTMjguQ6",
  "key19": "5Zj5XVxxAwRCnEkhzNx6JEi55wxuQXRFLJnuqbm5YWkTHd8edmstffiQ9JfQJ1FvDhKUmdp8ZicDFbPrr2JP8g4V",
  "key20": "2TFVAmjkZKcsYKYQ7pQZyKgKXCucbBEg9i2sRoARnXJg4Dv8mdd5jeHiSQqBuNUADWSjNkP82zdizoePiig7EEnp",
  "key21": "XRH66U4RoCjNKXDDUrxLwsSzURymxt92ijHk5ZcwZCzQu5B8Exyy32hdV7tgKAHxXpviMNXMZ2P1dF3u3oTEif4",
  "key22": "2UgLM1ymYiQfymfC2i6aXJ6QtfMfyG3VPZUhwRzsiERNiggsDvLBW23x7eDEnozbVomR7yUPY5StYAJHjcbw6Szr",
  "key23": "5XH5GvgJnuLvmRZ4ZRvyqFt7rAyFYdsCZf3NsqdeN7oYrdW16TKgarKBQfrzesrdLMStCatmFphxNYFK7upXKMax",
  "key24": "5E4193CHvjun2Fb8Qcf89Zh8tBU2AWSn7SVWhrrHbd8S9W7Ut34QLSGis6VSwUjV1CuZWyoU21WoY9uhuhibJ4kd",
  "key25": "4n3fZWPhCiFWcjZLMV6wKemUoQ6dsteNL1Q2heXp1FxkDooJ2TgoAQD9Lx51rM4VrxQwqSuvdCbJemBm2FvtPtJ4",
  "key26": "5C8469GzbPyMvQHE7JZ8xNNpVChWwNFgTput1ECg5R72V42YaskSkSs42anA5WfcbyWksiiC9JSjyboNrU8KNn8Y",
  "key27": "5nWQ1WuRzmsFstY7jr2mzhG3oJEesLa6EY3eY5HxEaesZgMKuEjb4iPtj6zHnAynNEhoFq7heXQddZX8bCdTdAna",
  "key28": "2Wt6twqLzXh3rLAE7Eh656RanJPEdwF3hT7nijmHQ8qecNfFoX7RBAAqKVisL23RrYbgdRbrU6NRAVDFhpDQg7en",
  "key29": "5jbhrY3jUz6coCdpRM2bpJMDuKx9uUCb5Yub5Aip1UpxwBntnSAfWB9e2Fe27YLdL8vGrTZPc72YCuryMcx1ea9x",
  "key30": "3fFQxPVpiF82GXFbAY89wWNvaYnvL3trpKsPseaspkzBohs8MkjFY8xgcmE6ChhyZGvZQMLkozyFuf6zwhkpmwZ5",
  "key31": "2MqHf1auxn9Z1veiXBHQAPCL9V4ELkmGreEZdV5RDh3uKu1kPCGhBbUHtre3fgMprHpfUUzLvooQFVQhH3ZZzQvP",
  "key32": "26gwg6XpvWJeHvETqSbRVDW2EfpcoWCvXjHviHpFoGj1wYcAGQicy6k8v9bw9HCmuBWFX7hvZhdFiGUGMXE6CaSF",
  "key33": "4bu48wJ99s98nLnNdFjHgUgajNx3Bez6iCkxdhtRA4aF84BQBrB819kTTWcaG2gu9zKoSNpBV9jGdXCtSx9926Dd",
  "key34": "63x96Mxz8TLYYudhUekQ7M82MQnUij236JMh1BBeSX2P1FSVDV3Tt8jNpNApAHto3Uri9cZaKvRcvzgw8K7THhTC",
  "key35": "2jZ5NzZDfBgjumU9penh5gLiP9vvf9ZfoQuMsWnm1mGseFoXK4fWd2cNBs1cUxJmGSmByVjyUUWjBHKS91SsYw8B",
  "key36": "66WqzJZU6iYcnxCDLwnevKJVkKibri6hPec8HjiKsUtYcxvDVdmc99Us6YKympDAVAGpQy7uChTRA9wYZVkVf7ie",
  "key37": "5xMpTtDS9qiZSCz3rfFehGCgwMKrfjzTuMQnWTvJthY4sXrwrhF9JsU8uBhrwyekeJnGmEjB3qRZTqJJo3Q8t6fW",
  "key38": "4t11uhEJQxfNWL412XyN1p6gPkRgt4D3wXirqZgJWn5iR2fHJhAcFBJYYo2bSZGuW9TVfbRTsSKki3wc6vQB17sz",
  "key39": "2mRvCNDHDAC66cq6CDnq2nETUqKFhUX9Z41HnqDbqDXKtBLC7nxcDdB4KzSrhsD4eXKVsmN6jNmp358sT51cPn45",
  "key40": "5i7XmHQDqToabrbLFQ1jbgfffk85jcPL7zqCJ91V6YpSBJNhU1ar74A9ytVgvSZqsZGK58G3hDxB22Z84y6rBdzj",
  "key41": "5Z43camqTeTsDxD4DXPfTcvyHVb6vgW3F5w3fnDUPxAk2G4XcrdvUkLsEjFFcQYR7g24S66zeEZvUQW5dTBgAQEj",
  "key42": "5PWR4H4nyYVsDSmGWgDZ2Ry6SPrnn7U64b17YJPcVPZHG6Dxj57qi6PiXwoYQy7qGCzb1Fb68YQFqwDKEuAnhPNa",
  "key43": "4MmbDw5X14wYw4C6i6pt3Wziahzjq1UjvmtLPNnRepWvkhdZkz1QYTvZZM3XS3eG6fvJHeP9hER49WTZC5jA8qea",
  "key44": "4yC32jR49qCDBu2jmGAXHbzS8ZhygHmFNL7wPRjAGRyoeADomWX6KenS6NVfSaWhXZw1JoYXpnTsUV8Yfg7Cg8iA",
  "key45": "3WobnGDxdhgD3wjFZNVy5T2QwojxYUVjJUfis45ytB9Wcp7JV7c9TaoNcpstcqkjDQXAUnYXetkVP5wSQpWZXUez",
  "key46": "KTNTyfqgxgqRrivMsZZWpDHSTn8ahtaQWKAsnuBVF1vUEnp2vJFd6hZjCoMjSPoT28sRSAKjooP8QBAzbG2y69p",
  "key47": "V5sszASkfxnxvgCLkiK57GA1Jo9Qkj6E7sJR8eSeDvs775v3UqkYZN5vVgm1iDVQzK3chvejfmJD8hyEaPJE6hF",
  "key48": "5W2ZcFStNMuqi2VLRzU4HBgc2obaLn6RwijnHZ9jvCpuVNdbXow2BMGqCQmbHvj2FibN6qrU9rvY4aEhqd5ttg71",
  "key49": "3WbX4B8MSz2FdPxwqW7itxxroyXxD2EkcHXdifCx6X6iSiXGKcDJ9sHsYE62vKifExMEtNfj6462ydJaUB2SMXJK"
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
