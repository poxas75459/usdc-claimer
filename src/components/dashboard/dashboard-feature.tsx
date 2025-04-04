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
    "q9UobVcYTtUpeUzfMB37tQY31fMqebvGPnAx2r2iBe7f7BFqNBP51bY8vn3Uj2hwGXnzPnCdfBT2Svw32wDJvkM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ss7DV6n221DKbwsq5HH6DwWAua1652nrDtyzWB9yWoAgrwrFUiZ7qTfsfbpF2NYZYjG4suzzMFmRqpqZPAJmzvt",
  "key1": "5uJXb18kA4qrpwNdgVUhCpn5JrgKXr2eVb8SRwGx4uBHZpPwmFBLKXy3CfKrwzyLpBD3wnsEoRjDUdc67XmBbVyL",
  "key2": "4ybJt98UA9xKcZ2bnoHiB8QKWgguDawex9cBR31gWdDovaX5biCXa5Ck3jmzfvAWt5hcZwx2DNKvTCCD6WkgDCnE",
  "key3": "UWFPBWggw1hAuvgz3GoWTJKChMU4XDsu5DMkFRNFMXhZN2SrQWYzrJ2mUS23wJDkAHcAApNhjxcfGEreTXa2c6r",
  "key4": "2nDiZyZvMqBz2HDvjQmPzpuHM5iPXjyfVQwEopJRFKfSmjQSqoq7mHN9FBRgnvrUzueyC51tHzr5ij4xxNQF2ByT",
  "key5": "3p555rBpLGf7CmYvmUTUgE3189jX49Qqojv8WFo3ofEaT66a6oeMk9mgaZz1UBvZH5ktUw2NYcuWQ5JJTscxxBCx",
  "key6": "gi7SX5pCnYLWLeCJRheK94TJvQFE5V3nHVDF7YtXvRgVzHTtQa2t6yMq6xgZXaSgtdXVADh1Wa932cPUJ4uCf3k",
  "key7": "2AWcQMJyXFaKXsRaNe3ikGb2z9VEupLrrA9SGzgTzrySuUDGPLkET7JrjmQJXCWJP2EDtGihiKJZakhb1HSo43b1",
  "key8": "49WcSydPjqBJRtifs8K5cwzc2uA67UmbeKmvntJNuxNeiyazsNwvyR3FbBj4Xn1v9d16CLy2HhwH6JS7zvJT62iW",
  "key9": "2seEtYR2jN2qeMXSTAfBoA4L5rgtZG4JZ5abXhQwdBHQmZVHprRyEnTqf4v5oEe5AMHiyXjai2aVJMiHv5KhLBPZ",
  "key10": "PzEB63tYmc8JeNaVujpgsaEwv2hS2Sx64dwHPfkDQvkp2JBC7BDRezkgWXx1dxgqYwbTjmB73tK7kLNdCgturku",
  "key11": "4zmvhxpP4KteK444dPYJzG4kqMAzgj7wMrHK4czoXzcpo8w4JNGUF2Q3kByKNT3UKQuk4FVu9ChD8JTSMxBwFUQj",
  "key12": "5sT2NXL5fZ3S5wECtcTBkBoJ7HttEyw1t52P9dwz6KS2twJqh9hM6krkrPMFr3e9X9nwtm1Cbgr7fe4Pn1Bm9Zsd",
  "key13": "4uP7Zotj55x9onMkAmWC5EKqnCdPiG3rRoGRLZrGskpa9C4Mgkpk5AVAhLkBtMUkBE9L7dfg42F3JEgHaPEgyhBM",
  "key14": "4XzLadcr7PmamK853JjpJ5yFaUuyhKitGccMtk78LwZwZ8u2QH96QHWCrhPt73HApbfKVeqsFmdDrzmKfeRp1zag",
  "key15": "8FM53uYvvS9RhZW2FpVbFT9RsYZUkW65rre37zxd6zWZ65DgF3iaRaFCodbHFybNqcmtN1nvRFtpafoo74ih2FM",
  "key16": "3wSfDaY3mj2XLSmcVaceVJkG9HH1tDWkeepVaou7FDrjgbFvQRdtzD4He2vT6o8rjURjYgZyeainKqgpxfjExQXX",
  "key17": "5jjw3nEnSCDL5NmB5BftWcNYzPogvWWpVVEfboqiQWzxnxSdWSUremkw9yXfV2mZAg8p2VpkyBQeEn6sanwd1P4T",
  "key18": "3rXsR8CiENdHy3jTb51QA14n14MiA8hkLr4jsXJeJiWyHLeNG3D2z6LwPor72ACac6UhoX1MwSzzUU94iuFvaQQC",
  "key19": "487phLw1MLcMqQkhh9uu6zs8PDgEXK8WDMMK3pviUr79oJ2q6fpAfM7zAuRWLdLH1RbNR5eoGhTpZo6djSSnqp6M",
  "key20": "3K8M2ZjgD639d4dToJuCJCgeeQYyF5bt9hAiBtej2r72mNxVvsyUcNjaa7d8NHycu2FjYwfdni8bsuLGJA2yApm6",
  "key21": "3BheLCqb4Z49pVLmsrn3meC8wcW8rNWAQwLaYyPN4GHuDB93v8dP9F3UcKzVM8uvxdYZZNmNhKU9UfCqB1tfdc9H",
  "key22": "do6TuQZTM8LiqTEV9Yyg96gAFs8WvLvkk9imaHyRPncawCqot52y8WM8Ke1SAvs6YcmrNfG9SHQXyLpUMZmYMLg",
  "key23": "3nRpboNEuoMSVP1xJPFyVMReirXEEYtii2yhMH3cn4R13TcQ6Gfa5fp8BAvvFGTtMXh4LGtKcNEqEdd6pBUeL8kU",
  "key24": "4DzGACPcdTYsnTEMfaXwr4LVWyo5kXN72KHx7pfFQDtoG3hzGAaR9Dd72QWDA5Vt63Zh1iUe5QBxvC8bJq489DZH",
  "key25": "23u3GSf74QfixDcNhc7c7KX78TMBxMHS9oeXm8mGAGGLoLw5pPgbNmdjm6BdPY6Tf9ARVNvDt5H8aXxksGBwAnCd",
  "key26": "YmjmghdsEGBkboLDYjbkFoFv2ppFRNkKhs5rgkMewZn6odWcHv1hiCr2xXJ6xynurDyYMdrZAwQZtViLXDo6TAR",
  "key27": "4cAprUXZRySn6EjwccqHPsHEk5Cc4TXbJVNWvoM8P7fo2kKGkNsGdapGZr1s1Qt9RAmHWBivetFLVGmc83TfXwhm",
  "key28": "3fG8FEcr63xDSng6Zccj5YkmE1reKJpCWZNwYjDgrXKocj8PGxWtWLLHFbXBv4a9vEg3jHrgkAZjnvWGeBkJMRLS",
  "key29": "oa4D15ELCzw8iDCM2heYMGw6NnFPCwCJ9ozjxAmPUmMPY4qQqiHBzZANXdPEvvsBPEyTh7NM2szFKzA13a9EN2S",
  "key30": "3XdqxYUpzqcBtjZdBuNzq2g4Brw1DgKJY9xpnfEPzUD379a916zHQnmwGG2tcphxyhCWo38X7XPUca3FfqGwAwRL",
  "key31": "2EPxxZKHp7HcLFEzwHRBDHTM7caVD4Axr8sm5VfxCVpsAH9o4NoQwxT8xMKhSpQvTuo9F6AU1x8eFmQtsYiYJ97x",
  "key32": "4XeAU1LkYzPbURT1pLK7WrGfzXBzN386wAKxMhWvAASvwbHmTkj6B3wFbpJRREUJorRWd1NuVCrKY3XatW481nre",
  "key33": "5mTiGu5pisRhgev8k6afNhi6tEJnpsZwgzP9VTnAy7oKmepmdfVMd3dy64nmZ7qGFkzKPYxNZTrCK8dFbronY4bn",
  "key34": "41Tg3jKp8UJN2XVxw3NaqB4hrogmbwg5cyubUh6YDEM1BP9RCn5LhqLoaTAGV36B38XSkWSQJ9T6UokfbFYYW6A7",
  "key35": "zzh5iAeRMFZDYXyJFzBkVJ9H8YmhGhduidi74da15G8bn5anukvFFuyju3sqRPsMJcfXo9YfQGkJACbt1PhiSm9",
  "key36": "5Bzv23m81psf78LnpjHFE7fPEfv4d8hoBHZSgL4Yi7GomLtTMVTaMAm7U8YXm9ExZssLs8afyhnMWf3Jm3BvVcDe",
  "key37": "hx2iFRdhvKbdG52vg3YBpmPWTPJ9pN1YNuikAkYvdSXGFMV1WYFjsVphyt5jgsEN1APwMXFcCSLrSPq8LN8Fs1R",
  "key38": "3TkRtYcrLUawuSeaNCsk8NpmH1t3YDXhZqB3gJ7M8YSy9kJ7dG5yBeaiWBz8KNi55Pe8Mq43JCuww2QNz8EYUAR1",
  "key39": "2yKeL5pzMCXjmYgh6oERqh5YQ1xpZyRzZx7mSmvZHBAS7ogTTy7sy8bFjHPqbyA3hsxrAWn5K6wJELhoeKuBjjym",
  "key40": "2jDmQSMt1VSaWa7NLvEmwS7oB7sBbxZeXZY5T5yU3qQ13ujwnF4PxnsUY9vgqtkNfRFDpwAFbrAVzfUqcsS5QhUZ",
  "key41": "Ub8WqKwPThFfJm5qwDiJ1PY9Bpm5wfaTcAAK7zNFk7CGrLdrwTcT2dFRQCnReFrnbibUnNyCF2T3ffD6cycvwm1",
  "key42": "2BosQptEf81GCG5L9SuC1GPA9b7Ki8eWRygZMwTogAH4Yo41WGKvDty2u2QnV5CKxrKWhnVXEqH3EEogn14QbbAL",
  "key43": "44YZmsDEXbggsrDVJc1B14X3x4NbEY6nceQ2stMtp4Dz6SNrSQdtrERxzvh6Msdnn1eydCoB93fCpJu37S36u1Yp",
  "key44": "3Rc5fBcV4p5VmmC23sUMDccLj53g7gHE5mLf5T8VczWbMoxxtbsMpjuWHFYzqqxAP1QdtYDjskF9EhoopMARZErD",
  "key45": "4rtT2vTuSxddViH4eKDbw2iNHUsPVspsmFQN8WFDDNEz71vm8cmMFSApienoSRSdfdQH1G1YzTjxWhVwETv5DS9f",
  "key46": "3uTyMoPYJEMCVxRbZuMjNapmgTDp1BtVB2DX8pZ1tcg3pXf77KkuUWzSaZ7EG7pN6hU5AxSxPZiy3j4Z1iUNq7c7",
  "key47": "5QQ7SP3Vs59vLaDGeU5AvDvqiAuccccgDEWHaLyiXTD1sVpWpYp629TxKjv5cAxX98DpZ8e6abTvHG4B6v7kiw4k",
  "key48": "3fW8KGQn35PPb777eikWVLvC23kxekF4FrT4RfGfHdnVcHG2NRCAaNLT87KNyyR5mDybkwi43t1w7vqtzzwYaJ6v"
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
