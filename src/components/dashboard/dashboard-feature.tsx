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
    "2j3piqhHL49GhMoo6HHgr5hPqt7pLhWHwi57NNNYN7DQwqotu7SeerNjsqZtJkb57Qj7YVx4cZKfKHi9SynpuGW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3c2zT51jSZMh5JTMHtp5hAu1GWZaZhRmxcAZDBsRjYqhVYLYu81h99DKCVohWhwK5gNowvUVRuUtNuutGY1S8CYE",
  "key1": "5Nf2zUFLsNxezxUBXsnHWVD2azfkZSEEYwujb16gfHQFtEBHQiZbSoVyyAUL7srM45iYRaog9GXT1utcMbSc6wpC",
  "key2": "3ppUxCffaPAN26p97XiGphD1hFpHG7PLkgieYKgftvNiBbqRTqurgMwhBupCjWRu8T6JBEZbnK4vStvKThme6E6v",
  "key3": "3WhE684uGZFrqAZQCDF7HJhveikQs3jqNjL4CqLcVEE81j4HbWCLCBWAnWUVGes6iQZV1S8FWyv4xkkEwVDUKNnM",
  "key4": "2h6rSyvdBQZvXDAgpSNnwA6kd3JWx5KjESZTwd6F6Y7PdhTk2tJ9ywNYM2sfVpia1baXnGJvoJ8d3GKy3iu5zYjD",
  "key5": "5kw1GHb1FHFy7nvWQJkG6UJ8uSMFDAZLQYzacHaA7FkGnjbnzccBCwtMG3HyzZE55aTuFQLLsSXM1LsrXB1qZ3Wy",
  "key6": "2uMxwJDhBtjEeWBZVZ3ZzuygmMHDHrLHpA5xH9vscSkKLsgRQ4Yy4XynCFGGBi6XC48A5XUbnNotVCbXnTyN5E1p",
  "key7": "xjRLxQyNLT6U6N7Eq66EFnag8KVpsKgpUpuNUk8oi4Qai4JtA8SAnF1jFQpciGFf3Z7yxfy262oWtc8TdhUiRPD",
  "key8": "33Agvu2dij2FohbR1AHqo3M1veqA4JfDq4briHCFg7WPAx8riYKs4f6zhJKrG9LC4UW9kqdy6Q1K3teZUeievirf",
  "key9": "4vSPEsAQX6ZxbmsFNgYci59zFwYJXcWSPyxp62Pp5qFfq1yefPZYWD7JdKseKQYgbWMK2cQRDC2HLAjJCDW8PmP8",
  "key10": "5xXDsdQ4kvE1s4c8HBKL2XKbfbj8ertPQZP88RPopCic5pFJ782EBj63nM7hYkWLga9gxKTJWMfW1B72G3QkARXs",
  "key11": "vQN6VJQDXjUMG9izJCp5TfLVswaUjcmqXU54nCcBhzYFzA8mFnrFp272jeqPnJqd3xMJDcfXoeHuxrR5xonp2Xt",
  "key12": "65NjaA7JdLML2r9bkPQBmnAVPBpzL3qq1cEG5T2fCN72GwPLB8NkU9ByjPUmJy6PhmTbDHSH2UmgQTkn7S1nCWdi",
  "key13": "2M1moUX2VZrdtpk5xffwviXPaXNaeWrWPCEWorSNsPkEVbyNcGDHT2iVLVfKsbLrbFJXdTd1kAY1EhGS56L9Rb6k",
  "key14": "4VNJTXUPEW8s23ncouYURomTmAC273yiJcMyUzu7o6PtqADj2LZoEaqVCUKuQ1MJX9RLDyfkfUiqSf14fSxxHfx6",
  "key15": "35teuLJAyxJ6QpBEHTyfSyAwSSCyxSrftGHgqnbACd3kFAe5wv9zA21ZCpUdQohNB1kb1xjmuKz6ouuaC7jFqk6",
  "key16": "5nw4xdjUnS4LP5DFHooRDKGTcGa1ynxnXNy6bEM3eZpt92a72yY29sDAhF2ZakmN8TV34fafHRw8CdbkG7x7JUet",
  "key17": "2Rh7zVoUtdYzFBBTpbfRBX1XrerFsU7KwzAX1NaesY9eBttLCxhWn28eLoF6UcbvCnu1SgdzNrsiC61X2z8dqKRQ",
  "key18": "5DbVKNzWphUmVZe1TidpP7haTqcvRZ4a8Q9dZFfsAyePbxjcjMcVpQKmPohAkRjDn2t5BdTZqKUNT3AhE4mTThNi",
  "key19": "MYfyPqZ5G4SVCVngTCtcbrKkx8h9TGQJ9mrFxSWfFeSo5qwzSVyLqaVPEZ1EKdmA2zkaxDckAS1B2Pho6hHTJn4",
  "key20": "4EW2jX6WLudYRz86JgZ2aVidXhfcHdQLvM2jGCn2Wk32HE1AJSrVw4d9ZaTZeDBoArdgZuDxcPHwu4mPZBNXjcZq",
  "key21": "44ir3Fu2qh7KvkEADaZs6XMB4VUFuohYhWjGqjZNdEBhfd7oYxSYdfFoK7ypy2PyfNM12MxBDQbZirurUpx5k8HQ",
  "key22": "3gYxhAD9jiKSPxYKbhm8pCcivTYvQ4h2i948RhiDb7xgH1wYoDa1ZdFvSnmmiDLLkLDYbnXxCsJPHjqo7e4pfd4w",
  "key23": "4HS4AUAB42SQNMotZnRu1v7HJWNeb7aNu26H8T6Neg5BN84H41GdCRb7ZpSp8dzs2M8iq97Rv7gPjoYqnnTaSa6J",
  "key24": "3DKmuoMFyir9UeK3peWUp9gESsZAQHpmDdH1sW2kpZBVPx7cr4XDLAZicqi7zK8FFohabCaz6nWsoWYiJ4oQX3XC",
  "key25": "28Qt5MTnV4e44o3ncYSpLtqjYb7QxhbZvmxeETBv7m3GdwwEfiUAWBifDfqWHiQqSPF95o8Mg8atXJhDD1J3FShp",
  "key26": "ZpdA8bnJ5Dg98nSSXhn2FgWBgZxfyZ3QYi2zoishDAe8Hk9Yev8ooLWSepp53rRRpaCZftncuQ9QFY9GwciRxgs",
  "key27": "h9Z6kboTVPoKGGJycDgzXn8y74xSGu2wz7ykdhDTUq1f36J15XVb8yXyDY4L1sVy7hYA7Wi1cvAuxEsU7ZFLY1s",
  "key28": "36pJeJcbF3oLuEWDCBnRZ8RkSC1yMVGaU9Xh2kNkQ3wyR3AXxDmH64x9josQ3MRagZwr7qnNfbCfwsC8yfKCKmFS"
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
