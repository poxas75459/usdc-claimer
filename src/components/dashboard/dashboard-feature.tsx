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
    "4oB1NfEqobdXZMpaj9EEf2JckBfCJoVDTbL4MheWVC3umE4whf7mJ1N3eeRuDEZe1GFXTshZKCY37WHY1JqDdQ6j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BrbYQcP4oYawkETB4FkNPw22svCfCkw3mWBKVhExe691CugbcqEbXTqV6qNBYJBtnUKVzoDYP8DbqkfQZZTLCNp",
  "key1": "3wpk7nnuWVtm3UxdwEy5duwYVUSAmKZq8Mu1e9NX6dnTwfVGRGd84zAUMLRMJdf31DLuKtba6fWuwyHKMNebTAFn",
  "key2": "47pakoXPqQAmd13QSDJNt3X8ZxuPqSZceNLNcg9D5oBFkzd249hwHqQaZZoBUcpxrzYgxHNxHBvKGyFvKN5BgSVh",
  "key3": "2vHWQJNGACy8Jx8AXwiQgGFDL7qM3e1XwAURqE8HRtdLQGULtZN2EFxGP5umjkPrq1gKE2GL9rPBnSo7bVyTKLJB",
  "key4": "3vudKf8xQHXEp4FsBCznsHgkusLqq2JR6ZnqM373CSJF5UfLXGKJhcwqgDY79FzxqdbQ4vnoD8pwyYPeHSGy3pV1",
  "key5": "3hhL2LtYpG2mQGaH7JGZw3MhXw7AGwAqGHfggqADcNiBkABqbPVsQ1mrRghbjbwZruyPmwtacrPzNTWeByhUFgA2",
  "key6": "6zygw68cNNyLJPdmpywLs5r6AKUCJKrX5qVQWAxjwVWjJrca6MqE4bS53d4VxEJZaoFcDFUZHHRNhS2w3t2fpsX",
  "key7": "mKBGoWF9azhmk8SPzpq5rZSMxzseCiYkE9Jbq5iSJzcRVYeKDH6YHpPoQNGgWfYzCGHyqMwVBFxdrJkMmzMu6qK",
  "key8": "5VQzToWVuGegNwmJToozyMmbGvPuiEEBjKft29upAyjd6PrsDaFhP8nNRXBWPbRaRe4vd5qYgPY7xBqNxJFaGZx1",
  "key9": "3kRuEBACZp2QBquqSKQZ7N2n36QFu4owYMqaxdoZgFAwqzHNZYgFBgK9Dh5TD4wPqeTYbftgcxt6DCmCnysaemN5",
  "key10": "Xri7mFbLdBMVndfYQD7GuCRsDsvmLKxgsgjP5jAq9fRvgCDP7WY5ium92mMr9g8TBfCqjdV2sb2B4wcw1Ms68ze",
  "key11": "3RfJMJKeaTdrQV9ArYe7dgcHMAbbM5qFCQScuLcNmiaJSrDM9JoBuu6ddKoHk9DzmBqRPxKRPy5fX2U1dxuksxso",
  "key12": "2KMZ7UZL3UrkDXadFKrheq8MmsZM6Pok4XQC2M3ugCtDhQj1J4Akn4bcznyXHF6uDnRa6yg8Gq6XYy3XdiPKh2kw",
  "key13": "GFABeS91pbU84tyjsQVWB5ZJheLFZ1fib8Ji2ema99bBMfaVzv3b8DzmiVjWAcmuQfPkMrvcTWC9F22dCmN3exg",
  "key14": "mc615vjRgJJ9BLZArdUhtVziABdiUbPiu7DsPXsKwqwK9F25s9vafMkYtvEUXHWkzvFwsgbxRFqekhFKZVrLRbJ",
  "key15": "3P1DGfNpnCDx6iMiZ5HNkTThMxvjciqYY33o11UbE15tfn8pDW3VFgYaq2j2f7vmRG8bxhJY89rHVMnRdWEauoEQ",
  "key16": "5sE1ppYyKDPoo4bBMDYtJGVFGrHtLkKKfht4zDYFAX8o8xcrrpAxcGkw9ybNgzpUzPsR1GiJWFL27SYEm7FVm3we",
  "key17": "4yaMeKaAx5GWJ7uwc1TXfwboY7UJhnprXEpQ9V8KUfSYiWj2pEeuKA4AY5VetPwU57GQCUYzt1kSr9BiF7BQH9xV",
  "key18": "2zCB5rB9UiBtzppLWb5YSVX2zMNESc9mhUjyT6MLZH1L1JsB2xtFpV4e1Hhd2DyekUckNAFkdh69M49Z21PVpkWr",
  "key19": "29x4Q8Ygiu1xkM5EDoXnrh5p8f2uBbE2XZKkacrfzkWfrhKiBCZBP7Ruk2B16K64AbefRXMgSkox7FhD97Su6gSG",
  "key20": "2YTp6Pmp6XjC7eQ22aNppiPhykaSTB8qihngdjHGErXE19NwigqhsikV3rPoUc9QAF5dk2LCFu7oQKjuEF1LLGzo",
  "key21": "2dM1MnaRamJj4DN68JEBU7w6CAkkfzBt1doDAjgqa77mYWV7EPTYBGbkacnFAcXvShJKabMDqAs8nEjtD28pJdVm",
  "key22": "5eJuBe3DjvahYyPbWLp98xg9jspGPndyEE5pH4V95nWxduzZZ4rToYyPE2v34FkHbRZQZyUsYRYMFy7maa8AVZ11",
  "key23": "2pzQabvWD4eio7DzsyArwtSuTF4KsZoMhfzP7K8nUcQpCmzLmXQKYUu2tByT9GBPHj7inMLHyV81KxvbLd9Pcu4v",
  "key24": "3yTZ6AFnKdbGwudoEqApy3dBkKATCbhVyjgJQBWY5W2S2c4Jvo9QGaeVQSJByLTdtbNfCZZdABGdLqhGbgBaWh6m",
  "key25": "5FLFFco4ZL2hDdJqff8d7JE66yfhN9TucYVrhui5ukXC5D6bT15XNFjMA19rHzSdLUyhVNhH24q5ZwfHWHe8X7T9",
  "key26": "2SmhCZbwFsv5zXN3nUMHQVtWVNHoE4nf1oo1orNhsFkE25YzKCNGEFqQJKqV4tLxFuX3AQNs6aYPw5YzBJnj4hC9",
  "key27": "32L4yMYhNP2DCdkxE1dgCQpg6KmL5W6PSd6L4eqB2SMW5HiwrY7dozQCXkbHT19dJC2jNZbvFcZx3vKdPRMiTxBT",
  "key28": "5f7VTJbCz3A2jGxiAwXZDQZLskpmZ3C5Q4CxGGaiT6mrNyJjPLseZNW3Dutd7ghz8aYu2YanjYCGQw9ax485wRxb",
  "key29": "3qR7KYMsicCp4reJGYTxFergLaqXVZyyrsLLs69Etb5XuASEEF6Hm8HTBo2Q7CMQgJ42cYFoQ4iMHoXnw8Z3Uq4q",
  "key30": "2EJupofdq6Kcj5j1s4CtdDph8afgjYpsgs721sa8ouYyTSxJz5KgKUgSH8GLCeooNcK5A4BQf1id59FigxAnZLEk",
  "key31": "4iDhbAr4Qor8VkrSnSwBWLArx5CkKuDzS6yStGWv7Pyumqv1ZDHJzZMe4yigv3dZvdLoPtvDB1jryYKFgJ5zjY3P",
  "key32": "CJMv2fAJ3cZEjeLNcWFLqfk7UjpF3CsFCL7WCc6JLfSowdz2NeaGUkDjtLzVqDJfKVAUhcooW6f7sZKAFD7JFH6",
  "key33": "mALkme5SUaAa29qam9hcV2htocXj1Ltv8YHU2sqFWdbJkS2J5GVNDGSzzpDSWndm65R1z2F97mCgvZuJ6gwKVxC",
  "key34": "4z5dHPXPGA6DAJao7TS16CiHtHw4cfWPZ6MogkLFaXBBdAkgTv4MiGA6pXJuoMNFk9q5x67fW5Fgeb3p4jH5dAfj",
  "key35": "3W14hDehxWSQZYZr8TMKDtqv1f6YMvcJEKCC8AiVfPxkx9LgYcsWGSWB4XTdL7eg9AeEMaZuxcjjgo3pNdVU6mc5",
  "key36": "hTjKFZ8gdbGec2Da1Y4rkALumMTTZb1gQ7CZmyvzypseCN9ixjDTSBBeqUxdfzSyaATj51njHARyKsK3e4yZBKS",
  "key37": "5YPfbcYp6dV85UnJ6k5STcbxR7T8xd5WtPXGhtimdMPwVjcEfTjgdLvSoVWUsL83i6wqoNNd4hNuGUpHXqJF9tVW"
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
