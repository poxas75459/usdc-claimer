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
    "3nEFFyAwA1sT94QUAzikwoBcZZcFH3Yj15z9ocgDfZvbufHAHGR8Kmo3ZUBGm8oVrjBjR8cuDPb7isKhiDzXrYRg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZWQu4BTHCWq9vYkjC3oTwpvfTCHerzQnJKd8FtXM4eqXHtzGe4bB12MJZCbnCuvVwRjHTHAQ5YLN8rC4jejXAf7",
  "key1": "5iAd4kDmKYHLT5f9S39K5AKQJv5XG6Sx4CEHGbU3YfaX6VGG9dwBEHe2ni34xEiZr8zRhjAEXC9EXioFBxGLxTWM",
  "key2": "5AUCsJgmUfXfTppBH1t6cTcRbp86gc5tLjhpnZy6qHv38EsPChPgcJTE8dNf9uoH4ZSw5ByFdqhkmQuJgUPJJmj8",
  "key3": "a8C83veaiCDrxpsBjan7tg4vPmBsVQ9hZRSc6fHrNa8JUQtG8VyKmZvaGYtQ7wqHZwR2xLcnLJy1FchLJ9G2333",
  "key4": "12iakLwsM56vHLnWTHosE5XgnSGQRkAAneVxUjbgXXnzs5TrSpEmjGwufhEh3ndiGgMjAWajiJds81WQQGevSnH",
  "key5": "2539GhCEXkBhQKK3a6mi9tGz3yxN3zGguhHnA5hHapoNjcU7q4fjseHqvKm7EPR6nVtW8Do2czonmrnRQxBVbj9a",
  "key6": "5yVS3kcn6cAtvZKTEht82beBF54LjZERXiKFrUbbhGm2ZM6t7FJn8j6YuNfL7W4bBugLDfN3Lp7aysPesmi91YnZ",
  "key7": "fDzycRz2nAPBcCgTZDXrX6yL7BWocVwa9GsP4fZqz5ns7pHn3gqtPWQX8XoRu641Voh3JjxT1BSWtSxgxduAxQL",
  "key8": "5hNzYR7CEtojm2omm8r65UA4Uv65toqcpizH9WDLozJ8Gi15y7JvFKBFBZGc1Hx3Q7LxfVvd24M13FtfikAVFbSQ",
  "key9": "5VnqS3s75x5jnh5pLpnZUMgsdCHXVLrq3p2tJT3s1H9KTDPtaXq2P4fUJVVmRbXyT44gvmkymy7vRToNu5UghTAN",
  "key10": "bqbcZczB9W6jnxKuhYKxjzom5rbdvoh9Sd32RMMNqc9T58geVgYuUpXGSysBwZmycLPuRwpA1U7CHeRPvBga5zh",
  "key11": "64HgNV4qh1Zqfx9EJUKpcZXi7vxmo8LbFAvZowFiPqYDpjsSnx6RWukBnsT3MU2sJp8ZcccLoKCtin2CmZXUFKsM",
  "key12": "JAKx7vok2nSnN51P3ZKoCoxAXsuf9Pj6BZ3NersLJeydsfGFUCjuMiHzAApjwfwiFPDpzwGqPC9Qt51XTysQe5J",
  "key13": "3TZHGaVJA2zsLGhrfipxyfSyw4ZpnSoBJJ2UEBgtvEywYNhSVN9X1q9ysdXRd3ogHCS6umpt1D5ok7bGbCXMZrV6",
  "key14": "5M2ViuBHbpTTfhUjfdrdtmKn4mtCUTkDqXkKp5bRRcnnCJfmYbygRt7k76416tvFVTKX9jcGsDCgU5P1E4Fe1UwV",
  "key15": "3XWX8hk5JxE96iPdTD4HuNmUqro5tBCnPXT51Aovo1EH5sqYVv8YsffDvBja5WBsqhMXVVFwGcQEsrXFdMWbEjiB",
  "key16": "4ZpynN9D1pzhDaKbNDCHWRyFCxStBx211yMvSW6KkZYTR7kgWyiBqJdgNipSNsTj8uvFi7pPNawF6qpNnqXvGW6n",
  "key17": "pkMYoVFYfqXFnLt9kmLRJk3BRNY5n8Lv25snVdV8aUS9mNP7FdJE4Npcac4mLF8kYkJDgaeAo3BFw36hQ4EwbYu",
  "key18": "36xpwDyE79ppzBdbdFs1DqHtevDypyjDBv1mTxvug6uG6tN2mQiD3pq1DjjrqUMQ7jmHkU3DGd4zWfvF9mSvia1U",
  "key19": "5RWxPTpXWcAa3Xu2GdHAK6QmbqeMnixBptktyfYJY48tJKhfQY6ZCxH9eWgVaYW4kBbWzzyeUtqCLhdpdYfXH8F9",
  "key20": "3uAsr8E9bvi7QP2seAB1sJGHfVCneuD49Ah9eZZMpgSivofuJnCpbwq8tytDThjqCoHu8GBB2cUifPgfuqGh8i2z",
  "key21": "4qErTtjwtgt6JtDs1Sj5TSod45jdhFfoUPB5dg7bkTALxguFCDEWkPaTi9BuuCEPzRJtMrVJ5Y5V6CQgysNaSDJZ",
  "key22": "4d43SA1fgwP3vqwptB2RJ4xKtN9sj7RjSiVKf6NskXiMvu8cedc8fMm3XbefbyJazJezpLPpf5r1mNmqpYiQjgqc",
  "key23": "4w28rdpUCuxgzhRAy6avXxKGPKN2v4ZGK4GKtTcYVjectvnb8cW5z7pQiWyNZoogutTSBR6XSe2LBn266fk2jrqk",
  "key24": "5UcSxXLQ6coQ1sMutFz4KnwX1KusxqAEzqStWsGEUfgQVGwETXxp17g8B3S6ZXvAB97ZAtr4scKtahofoyH1UQJf",
  "key25": "5xxeUk7v12mBTLYwHvs1zFLbDJwmfrHsGPHxW5z8oU3o7n2p9RZDRgbdE2yAVD6eBTRdhhFDENz78XUywtN3Gjkx",
  "key26": "kJYCh1G5XxcUe5UqUeSt4Sjz1t6W8L2htASdNshVaRNwLWf4uXdKwcLnMtSHAcfPR9kjupU6ouLT1thkJrLWd9m",
  "key27": "3mVXTWKQgWRZESRiDY4jAjqB5CMwCHgMcmrfFV1HTxRCJWEXpvgDnX33Xz7XZH4mbCPym7i6GAM7SsrkFKSgJ92L",
  "key28": "3DjsKuZAaWVKzW7NA4a5rmBapjki59Y1BFx6ya8R8Pecm9yysmeDgKgio44xMPkcupDpxckWYrpEq3QSKwfcBEQ1",
  "key29": "5uSCfGpSCfXE7rei5HwZVVvFmHoYETYAJvqb2woeCTx9pvwossdhv1KUTHj4oWToi1eiNo2JT7bEig3fi2fyxn7V"
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
