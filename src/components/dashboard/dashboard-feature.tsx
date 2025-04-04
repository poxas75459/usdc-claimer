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
    "2UvkaKkycqJ8rAf8hieeyXNEeu1E7wPWtJQ9V3tG9jCKFgRDUiBia6gyyipKqixDgRPpJCdLs1441REYqpgxTsGr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PEsC1o8mHYtfaqnTGeyKNhJrtUsJ9cisFwRBF5YTRqGQwpMFhuRFmVizueDg5wb7WeKUX8jJmHoxeSNRRWz81Zg",
  "key1": "4jGusj1qF1cMNH1RuJgLZLboV5MDyvxoWvTWRwXN3NrcQPTZDY4tGyTREmTHPq9uNb5aAGgd6Aa9NYCUAHpgKVCa",
  "key2": "5EQKMqSpCv5BcuDLTrqa85esCyiv1QVnRtiz7Xu7nzxfGR9bQEYuGvJaGwzTDdY5mVGPLCo4KiNqJ4Ygnsa3AyLr",
  "key3": "2bdy7u4QJVtRdH894TT1QW73Vd9UJtSWxEa5T511TtAVy3LfRga3q2DGvbYsQs6iGtx3245Bpgd9pHy7TJw7pWV",
  "key4": "3SXK2QnwXV9FqhxqJ1pbmoYGQfJvVC2DTLDeHC6nKRbtMJS5XbXkLwu6wFGJPHUHdPUuKNN7EFCUgwzAzvnkES1W",
  "key5": "2jK8rMHEppCbZDGzc8yZQULEcUvDuuQxyjeNBpMAWHLJpdefbue58jpXLtJGkdP64DJXhnMAH7BNArdyM63SEWTX",
  "key6": "49RDhzXjhCVkH5GhdzZDV2xfbAeAtwcmwL3CfPsabw8qR7HDdDkZEgtwKMgkYSAaG7U7eisqadVzAPgFsDQTRYGQ",
  "key7": "3tHLo3oxBXxEs6gENwiwzWBWFNoqkEe5MEAcXdsTFfCz52HKRFTtrhFqriM31DG2M4vzPdoKL9vPtQqTiWLu8tuF",
  "key8": "3RSSGkXawFtrp6enf5js5so1nNLS8HYZvcNkXUFVcrTXAXfVCRmjnURar46QAEcCNrokNou1XL4r7ebaovJubsdQ",
  "key9": "5M2wqQbq578SodmgKgTzFEhsLoiza2rJ44Ms6Tz5m6euhE3yhkg7jSpBe42gEGzmdxXJiaxvDGec4QaJWdHQ5sSN",
  "key10": "2hd3jPrRryopMWQGwPdU3gMYNXANdM2113TMwRAPXKmeGLYpodFVV6bTrM69yXtxxYTGbKS4d93k3qdUc6Fv72zT",
  "key11": "4nxndVZwttkVNRdKJnKEzRR59EfDXG595YqMfdhRHdAxMJyyvECFzcgMQHWjwspWUf6QaH2JCx5qgn42Xt5V3a3A",
  "key12": "4CpyZhAFGcS4hcGdRMJvZfYxFgrgiHZo4SL9Zu7VVbYECp762WTLxNdG3d1CN63pcWhMbb2AguTB6Sop1CYjYF7t",
  "key13": "3VnPRqWyFHnndaNqozyqviNU9BxLb7soo2kKxR34ZQvBgvgU4EjagcEXVnNnE3MQwfwF23mZTBSYW5QAJwykEXas",
  "key14": "mhafy38UuAZK63eJGmwFypTJnSJLiptRwPmKP2RLTnhb2WikcVBiDx8qYDm7uzEPKuXAnsodp4se8bvzqhoMa7G",
  "key15": "5NXMPpF4PWpscQs6izU2413CqifVPGMm38p282jLApN9pjx7vNY6jieWajtaDWmZyA6MwYqqAsNNpYaX1NZ5QugR",
  "key16": "2hDry3T62HmGMmTYCoDY4hpk6J3PNUqcYXVvqnuhAyY653NP4wPNd1oNMbG42ftBx18CfboS1Px8SNQGcxMyTttr",
  "key17": "4jn3Aaha3v4NE7Nu1jU7tyaFwPDgJqhfuTa5uZUWuMMeW3GZUZHt5mFSCSUrbwGYHqbfzg5np3UZJsRFntjXzuQW",
  "key18": "61natK9R6hS9PKLRYMcmzZYdLFR9ndP5FhXqT8yFHXC6WhzxcMZLZS2hVgtCVE4nnbij5nCm64bHgq5oW4deCYDu",
  "key19": "2ijTw95qmJTitWTs1exJeDfMXdyeHmerYDoU3nk5BZYiapBBpBHXF9qRnZJjxrqT5thsKDX3GgWgoSwLHyBCmx3K",
  "key20": "3Wj3GVzjzZcTRW5517VMsF8E2XVFgN18nV73degtcKUeq3kkakuBtBvFv9PRp3PhELAtuLLg6KcddwWP3hVX7gnQ",
  "key21": "osPzWNyruvAjviejHbg4XksmyPWDeDZ22hPBGr7GVKbgpHDwHBYYqFakd54pxJLaYPiZDY3Sn3Hue6X3ZWS5pPY",
  "key22": "2QDaLtPyF9TZziYWNQwSrTZ4VsxqCr7KrnsnG5eRBkdAjvLmLcyr943sg9GcfU6wJHF9gGduryKnycFnFx5DdTkq",
  "key23": "5vxY6LZ8sZMEuZDe23LPBaKbsvGzEbjm8bdmQswQbrPDjMBZgXrAWSjBD2TtfgzCzSAkw92A8GqZK3H8UhkQoYBK",
  "key24": "3fECXDnZWsNRWEAtp4GpPFXPj5JtY3gFrQUFu5t7CC8B7pkFMGhA3QsiMmovFngtTBvWumkViv2T6zY15w4SF9TS",
  "key25": "3EEAVN2uz86WJiBJ6bo8Pm5JkBFMVwFkR4vk9ucogxo7kPU1JpZHi9sUBFNAJsbQVDf1KWWiuK2214jXgjqLmTD8",
  "key26": "N4QbJRJivwBf45HBZdoawuRFhWVGLMTnAwTzVreKivzTqKXW6aNTN4xqFFt1VrVo471NUNgWcxCDQp99sNn4Lo7",
  "key27": "2FSAbizyQBfvDRUnWCEXJofr18W77ipnah1t4M9Uz1f7FxvjqXM8ABUFtKSDoZrrPapRZyYNtiHy3XBvn4U1KvpR",
  "key28": "2FW64nnBLymfUV19uPFbkCWX6MFGQdZyMd4WaKFdA6kQ7sryVbF7AzWi9xnjjxsMcf7YQnTYBkmWXKakJFGzr1Jf",
  "key29": "3b2JEmM5pK51jXQHsuzUN6xb69TitmYcXd6Sae88BsHVyE1XLE4badSLyxkWwJHdmZfqFPBNXb4ovNR9V69scBiw",
  "key30": "398z5UUoaUpLVueXT8Ydo4pyfZsfYFCoqUFcgVQCykwDoCzPpGZd9FtkXYsGctF1ktyJhWyreuUUFXvNMGgNSBg2",
  "key31": "2kht6RdteoFqSorT2qZtgK8PfVEHqUFbgdUTu6aM9DL9fTrqdSDm8Cag7W2gdEZBWqRDb9JJW7KLgDq8wy7U6tUS",
  "key32": "5bF4grkF4VS5UX7FmvX7TvQK9VeuvhujA3krHETC7hyweePn1ebsRGU7L4PeRLTfhabLz8LhjhUgy4MfScYjKtGF",
  "key33": "3xLtUq8MzUCig4B54Eb7rr5RSJHpYLgh1tEELcKvBRrEsULssvPQwcWR2h6XodCNJ5S2jPTzX6Hp9cY4VcgGfVy8",
  "key34": "27T1VPEdg96SE9tg3Gzy8Rprk8kEosrS4G62zNfr1Upq4r13iuLuWh2aS4xhAWz2anRsLx2Pvhr3nTBDgkjCv5M3",
  "key35": "4EMVbzSisq7KCvWZKCssezo3yDX9VNTLxpUgKuaqsyaiFat7mwV2jwzr6VveBAx4jBKx6W7L9iddkBZQ9DCNEXWb",
  "key36": "3ySuRbtAL1iVUMhZjZHJDGGspBL57W5uZk9qNhXLXGfyBdXW7Q671ptFMTPKqvvvtPns1AcMk4gfTCtfJdHE6G1d",
  "key37": "66NYbjxJCfiLhUhYGvaY3SuQEGEJnBncXCQc7GhecVdaysRf7AaxFBmThoijgb13uJMurg8hh9APVAZrCSkCv89H",
  "key38": "9pCzikE1Xm8br9wUJLDQVCxPfHAhLqyNSrXAiUc8Zq2Rn6298uAHSshs9i8vtR6qWEetPSVc8NbkuUJvnKbaxLr",
  "key39": "5Ed5iLDUUjW9ZKqGrWNFcSLfepEKJSGWqz6B49oFDXNBGSd9mhBdtGSeGM8TrqfzgEQxVjPgfdiL5kGA8mHuDAdJ",
  "key40": "2MQ1yuscQR8h24HEFqWbHnBRivWRTyZXzj6Fh5NDizgDxrjxHRSGEqVbyWDhSCeQSDTDHtMvBSeQvAJaUXSAqxBL",
  "key41": "pgmmm8w6UqDT8fYvKpedXMvZrBwXJWRKFsvT2W9N2BN2vRb84Au7kAmUnSsSg5NsqvHBJ69QYKzFEe6DP8578wP"
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
