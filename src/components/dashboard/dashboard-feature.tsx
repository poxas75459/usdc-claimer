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
    "219wh5BYxoATGAU1cwz24gf3hfoY9RYhkZRktANRzrRmLatk6EbwG3RYcKXuqYZBP5NixY8Vc5HZyJsfZAWcBHaq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rZ4rn3ewdi696zQ8XLUDJTFhUUPJDkKDN67qb6FYzWt5SfvBxj5RAbb7GvsxwyRgoQ9V8QyCrPj4pDavAFmFeUw",
  "key1": "S8V9jDhfFd4Ce6gac4VEqmZP2o3nLYf6UMguiV36T6HoocrpL5WDmRjfPzprqMcf5BciHobYPVRr3JTuA1pagsr",
  "key2": "4sEX5bNJXxTyYaXVV8gZeZGY38Sbx7m7L9BPDMojEzaC2cvZNuSz7duWh5Av19WWHaDUwxvm3Rv36s9tdwxkxAjG",
  "key3": "nTpgocMCqgfWjNZLdECi8ynvCVPFBZxVurwbpYjntveT5HUyNxKoRcXjKUruYKQ7TdrfvF49PfbzJKSkqJxYHQQ",
  "key4": "3dmQhQ3GPUus66b3WUQS9LRLBuUXi87zskCwWQfhMh6wiwbbtKdJUQgpxZrPvGSe87jszWDSHtoQejH4SXnJ55R8",
  "key5": "4gjP3voGQHeesgsMuDowBhTidqWQmW5eV9LLSyE4fafMew7k2CX9LTXstYtvgQSokFDCcqFrrNZXVwSojdFWnZxt",
  "key6": "5VH2NLcwRNbCvGX5zJxK55xncoHMJx3yi9Lg9H4aXgrkAqCFJDJ9oYHKKYmsn53c9tZBbqoJHKyeyJtCScmsQrou",
  "key7": "3F6eUnA8knXzxPgx18LTxWtEQfM6iwQDH9imM2XtnqLQGKyHCEdno15k8oiERvmqNiDfw5wCkKX3kRjz1bAxbUAi",
  "key8": "xrFY3uypUAXJy6wR4WHBNuiwCgXPD6Y36UUnxCxFrxQHA6ZUhtXhcnJYKGjEvknhNk6rEdcMWJM3vmXp1bjbpar",
  "key9": "2VB47RLuGjRyVPFh245JdAsup8DTrL4N9FegrzUbUdjEZwfYYNSTEgi8C85co5NRUZf3WwjydXXzvPDfE2De1J13",
  "key10": "5bgFFEutZMGLtbQpWqCkyMFcU4i1gmM31gt5sLCvfjtKmWqn1286izC7fctvztRnxLDBC7fN1XBGt8kCZ41TXGpu",
  "key11": "25GPwNkKS6GyZtnwy9JwWrbkVCQsD4cRPRtshZsJBUPpVoGPRyCfQ1c6YyXvDM9JP2nBBKPAvTm2dJPwDHCXVDaT",
  "key12": "2utJ7ndGtfqDn6buLmgPUEM63H4kTzefr5foa7BFQoNnpBxFpxkzjQefh9v5uzVRfarodwtD5ZpB7xWKqrtCtmxu",
  "key13": "98fPMePx73F5KoWrw6ieUEMVpcDYFUKVppwu3CdqSKmmG341SPFkuM7YmdLq7tHr7jYSR8HLngifD5tqYFekkdg",
  "key14": "4YAvmZGfS21p3KegmCo9tTgHt8by58jXUNgN5ykKWRcjJQufSagqn22RpXsMJwFZWeU6ytVNdrRvnNv5SvPFmW1J",
  "key15": "4ZSgj7GCBDjBojLPYWKfNiBp21jnmCLwxBLHD8g92yKb7oFGfJQmpzEwQkzpS7T9mNFnsZoDUJY2rWWFKwWhvfYZ",
  "key16": "2V6a1wrT9t7wfamu6cSMUDTD47nfAavFVgf1iVkQZvwTbVxoDAvUBYkpbDgiwDxKP7aUvoHMFQ38DqTWCERkXvtD",
  "key17": "2BZ7Fy3sBdYnfHcdHiz4fB4iHPCXm6mENVK3uM8odc6odBPX3hX6bf7FXD2ooCo2oYWJhMq66mCvxxkc3pcUMqMv",
  "key18": "3xX719Ss8Z15cjLjc6k6vWKhvM4W16vvTjuMAKkbag5QBV27myByXKLsNQaF1uRBeSUbhpi2FDCgDzPfJAZWMRih",
  "key19": "4iCEKa1mjqddedZtYGiwKe55Y16un56jEzD29Hdz71zY2RPAyy3CfnARr4Wy4H6me4rxaq8dcmP4LgmBhrieKKHD",
  "key20": "4s5NgqHWgLJpaRVbG2LgJpq8GdnfKF8fjJZxiSASFBEfxD7KkcP3tXJhQ6FEqmCtwGB1Usj1ipoSqqEgSeVytCMF",
  "key21": "5m79TmWreC11eRDFm43Nbfyp7RQuopdQ5ehE8EfP9D96yYvAdMwGrQFCRVQJ622mJvguK6D9ERLpisXBfX5HKg4L",
  "key22": "KiQYE93uXuMcd7ZQYVokVCb1YqcTVASGnFzgyJ8tM4rhL1KrV45J7Prde21rgTAGgTkHzdNeG4pqnC2Cm8UPfMT",
  "key23": "2N6KoZ6osqCJJUZCqb359H1AhPhn5CathB4CjRmF2Np7thpetKtPFMpH6iKGK3JP2aYXrh1y19fWp5dAFHutvzXC",
  "key24": "3sfCbGvVfxWAbppgsZgRtg1BkjmnE7UwD6A7acp8vejrD1KvKx6hZV8mQwS9dDSHE9V3BHM9Xofjx5dVMLcMGvRc",
  "key25": "2C3P3zgAKR6Gd1ncBNwrSt4582A8Ttv5qYzpVvsu4gc5LehEnZ8C42CiGMfnrrh5RG5BTMrKyPBB1dRZx3pmKjjR",
  "key26": "4KPdMFmk7zwENivdoZy6m1KFd5KZKg8ChqrP5BFqwv5TNjaAqwgT6vLkmfz7keyCSGU6NhWf7yLmBWN9LA26RWV3",
  "key27": "2WRQ5FuCTZ3kqv7K7vEZ7Rmc4xDTFuZkcFpPXrnF8hLTXWQV36NPDh1zy9k3U7y4GLTpU6528Y4YUtYeK7hQ9ESQ",
  "key28": "3s8gCZRivon2mbbXFvWh5ivaRvrMbe4L49qTu1arQXrA3PstfrvKsjRaPnd87JX5RwkvpNcbo7hSGLGyDu7DnbSV",
  "key29": "4tLeBrPVKki2f6LyUwTejwUsbmeg5hA2BgyNWyJs6rZMjdgRdj1qw6XugG1fiuLBQU6GfjcpWREmxDGWNgcgLKJo",
  "key30": "iGez8J6HErzKxJG5jDkUVET7XGVXt8opCEHY3HsjFM84VNfxqUZPAn7Sy5xhxhn9xLVvuoQ2W3BygPv7bcaZJLX",
  "key31": "2MwXx3fFBP5QkjDEbUdnvHTT7T1cgUSAHdFyQP84tRGN8WMPjqo4nSccRRj6GHbNwyafvsQtnZWWZJegcXUWF3fP",
  "key32": "xFSdx4nyL9WRjkfQRnUTFc4qhdGDs8j1K3MmdoV1sj21FHkMMCWoN4VkL4X5jN32JoKQ2SFYeyphMF7LruvFcBi",
  "key33": "3j15kSZkd5DfEhY6eTCmS6tyFUvwvcJDrbzxrALwuaEb5NJ6aAR2PcFRUqiQvPGt8vnKtnZaazEXH14cAWeKQ955",
  "key34": "4pwFxKUS4pD9bRWj4ccCvg6nsXe3QECHKHh5Ao7f6Xp4iyuZpCMb5QbDZq2YjQhWoL6SDoY6AFN2LhyF1Z3LWFw4",
  "key35": "32wWjvqvLHKoX5SpqqnXKAL5d1UYxnZVxjwg2en3fVwA3jg8bAkCDiMKeCcXaZztmQRyTUqg5mNMrjwjxyygAt4H",
  "key36": "5ae1kxDbz54Po7P9XQHAZutRjou7tftxuZXqXWSMV1emfTYQjzEttH6H7o761PauJPM82otcyc2Mps4Zf2SDsnoo",
  "key37": "5KxgLGJke6wwtgyoen3QuzAdNJamJbFNfVtuWDhnyCETJLp4x9yr5qVkadCqXkseikatYkw8X86sy3w5sbbmHjYw",
  "key38": "3Fi2N8v7hdHrwiHAAxPNtoD6LuwenLwdj1M4wCdwTVWC82q2qbymxUaQMVzG7xTex7byVMwV9Bbkc1Gy9WJSYvdY",
  "key39": "2yqpHvCHoLz4biZvW6dYymrAVC1UP1q6TmdynpCaxJgwocG9gNF6fMovksScJCTqVxnVqb2644N45yN9TBfuhhAX"
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
