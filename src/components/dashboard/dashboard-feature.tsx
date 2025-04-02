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
    "4yNTP1WnSV49MkawVfpfCrAg3cfT28qUzPtPVtUEVQTRy2CmrAR1VxYytiwPixuvzKqGgqwQpbkbytzCeKEXmCfJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vCJZBzGLGh7a7JrZuQHg9NZn5ZMhCYCM7CB5uj5q6YUPc4eD3Pu9jQyp7wprdo5jyLfqHK1dimrgNrXJVW8MFuH",
  "key1": "eeoudMPzUcZh1XxqLe6vYY4MqqeAddE7vNdoHya6vuV7Ntos3XhHDKaG9XGyoLjdKLkEtTZTiRs7YtcUkoYo3ki",
  "key2": "5itQ4aKdFKNbs2wfmtF5zEw1EV4Ca2sLXVM2uNMWvujKuFQmGvhVUqrFa8nDTeuMsFi4gaQUfXE3P1m4EWx6L9TR",
  "key3": "3r2cdyw7T32AWsTNYZR89EcyyvdJufVEy5LwbRHCaEbNDddk9RWwEp1xQhML1jiVACBkJ5nXu4j6zCyY69YWGTYR",
  "key4": "3NTrhyRQnn5UgReUYuZUzj8kw85pudAoDspVeRDccAScd6DUqwd4WwH31WbfMzsG5trYZdxmSBTLjBUdRRYPxzn4",
  "key5": "2nYjGufCX6sZRxWL4EdrTzyR1niBndQnndGFb4Pp7p4d2UD6uq33vTdkFSuLCqMFuit4faemWrDfA5yNUwrwAPLm",
  "key6": "5TdYsHBSNz6EnD1zYDH9yUsv8wrEZrG9hrg7ARc1JRDvw1jiv7h9Tt7X4U3EbzoBJNi8FmTaJnVYpDM57fNkHdAQ",
  "key7": "58GRDqJeQyG3SBLXG1a2Ep12ztrw6dNeRtGZY13HFGywV2fLcQsKN1dkMAjdr5Uf2ofzSKNQnp8pSuuLwksBFtmv",
  "key8": "5aXbytdYit2xqAu1VK1ChNMJigdagrzyPt96NGoxAMLttn56fzerjALTyQkD82vfh8JrQLUqy98cLuZGUxs267mL",
  "key9": "4pP4R6FPeHSUWDnXgHTkxTcnrv3F3ejiSjFRMiQAGr1wQntuA6ZJPwGhoymYkjofx2qZXeJtxjmKhFKDUNquNpff",
  "key10": "4hW7YJpsw2WxZ8Y7XeXEacr54AqnEuqcG8dynK7pJLwEmxLYYC3SPUjJ21rrFvBzwXuzXxBumLc9qzjjWr7V2Sd9",
  "key11": "3FYLQ2rWN3ZN7UdwCJ4qF1hjrK4orpmj2yykA967Tw3k9dfDkduZgA4u7d1pFiSPmupYy69Chnis3sCStfmkrDgd",
  "key12": "5EGe2PkJXrbLYRidM82bYhbX3oKGxgTG9B4fvNR8UVah4hEm29DJ9nEtGTfeZQeV8t7S1ofJa5tP7e4Vckx3VqfQ",
  "key13": "5bQXspUyo2ca1xw2VzCtNNeX7fsgbqGqfWWqBcb9obxgagKEoL9T7e1S8XQxB8KoN8DJ7bZ6NPcrouBrsxYHh4G6",
  "key14": "4dLQXhSDUcinY3cqAtkciazuhQffrxmZwk8pDZ1tGvT9CAuqtyipqyV3YkpVe5t43bkLZFCx7RdqfuBRH4Rm6FVb",
  "key15": "4yKDr19GvrZEUbByiXEqKBuqSMqxQa6PeoiusCsDJ5iNBdq85g7eU3XJbkgBhEgD8JCcx8UPiwHAADywzaiL6oc8",
  "key16": "3wLwdqN5FFcEnecwxCWx8wYU1TqE6ncDXBo6N7d8CgRSoDih65PA1VAv99Re8q7KAkoG854HcTbWAVVzQzJLAxVT",
  "key17": "4Hc3wJwhuDoarPG89RDUW7HVFm2bGipj6uSoRFjbejwvjydfW6JyKAX626cSKthS4nUbaxGf2aWw8fQsL9NX2h5j",
  "key18": "4xYiPM2wbpEYtDGYEz7N62j4gUzXtAmMCUvBJzxxUV72srKJioY5iwradZPDWTZbc4ESGmSWemuBAHDohxzWCUZP",
  "key19": "2Xh8uRa4mKwMZbaNFjwmknKQj3M4mMoRx2jHwvnDeBsfynce4mFxSKZT9HqAfiSL6CXKnZ9CJEzdh4YXMeL5XNBJ",
  "key20": "5kSh33dHFauRJ3sa9C32huDSRGcc4EE8X5GKAc1e9a52WpmpzGgZvcyFJcJ1XFeRQmwdwwcdhC159c5jjVZCQ2aw",
  "key21": "5EALm1q7RcVQPs4zhzfjhvqh2XdnokkHLKKUyrcLsr4FFcaB5ozbUf5K6TqpdFNj5AYKxdCcJRxHp3xUyZUtqe5h",
  "key22": "5KjKUoVLNvTTZinryJEcijJynUTQRNzxpHG2rKR8jExFnzvJfc3bNE7tb2AfUk7ymTRooibXJMayfk92mZSVhgA5",
  "key23": "5iYZvEvTNYpXFBLJWwB8BY5yryABA9YeERPWXRUBUT7ZHccfmCWg518QcTVQ9Jj33t8gWuS25oCLb1gBXAdxBGqk",
  "key24": "3ngbtoi4gTTi2noLXzQEbnvLXJfn9MYYjZQCwiLtbmDtnoDD3bDyto6beqWHEiBxZCn7Fmhjr7zy6XwJPtxwaYiD",
  "key25": "3DkAfyV7d2YS4CRYwjuaWj1LqacCdQt7mExZM525MCVJfRR6s5QfbUEQLNo4zBq8VsD6viVP4W34xtnzPkDLmjXj",
  "key26": "2uCkBWFjWhu3Liscw9SmwieEQwK5SoePAfTZ14TvAASj1XFcoQ314uQhuFZAM5EFtPzKcCiCnSMqLQ5tCwhwX7Qm",
  "key27": "67GP7DBCD6qsBXsee3eHQSyMc4Uc16bFezzd1dhePCQASpu3Vaa2A67vYKctNxkc3djcgZFQ4ZxUZsqeBGBSC5M5"
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
