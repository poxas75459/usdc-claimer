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
    "JFoYd4cJjxXiHmFaZ8rH93duK6P1JbJkeEc2wms7YMaZn4Fjj8epoPG54GW1f9yDPn6yL3Kkz8Moc2VJabwRirc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wmwLayH2idkr39EomHkCvsfLLEj2AHamSkz1EQYJUFfpeMGqDFWDaGDA7nFNJ5N43nq88gPTssXEFDPyvB9VhV7",
  "key1": "4PbESW4zvyStDWkKqzUVgCKy2x81n7edo3sqYKPhiUYnVDC6sWUtJPvxfJcMDfNV6HvZ891FVcR2mWtujNKaKMR6",
  "key2": "2QnJKPhvFLBD1k1ZDjWmkwA3akzQvhqproWgrL5D27sMmvdrHobdSWnXuHmyXWYh7ZQjNisKjfYQdihuRbwXQsC3",
  "key3": "F3SDQeEpd7v61jtkLamNezh8SDNNCvr9EA1fW4UwQFxj8vHjhMvGsEaMdc76ssp4AUE4GdqV9BhWhQo3rJgsrWh",
  "key4": "3FFFPE3MfmQasetQ8EFqJvXb3GYFU7GiQM6W5Be9WF9sGZHvPQofpGQUKtkMwACu6SwhhruePciXSnNCrDR2yP1y",
  "key5": "39kC8bZ6hTrQabNsKf6Vwo1S8Qe3D4W6RQ9ez4fEd35mtD3bd77on1ZCC9cgscPM6aDHdQXVHfaEFWKPiPtdnNYJ",
  "key6": "5tHtx34Q7gmJWucosWKzmUWFuDQc488PfPCu6C3hEVZzsu2dnrWi8z6DEJ8pNZLx1ngvuCZK1UT75SAyc7v1Lw7S",
  "key7": "iF6YHdN35B5aRQNNd2TJCYaA8sTQa1CYyKwX15JJEJzcWEaRSm3781P82m3Hyuh5j2quQu7hgdeDFcnN7zrhPYw",
  "key8": "2EL15x5cg8E6Zna33TTT4N9GnexRzadkFNYwh12QKCtn9KDhB9aERCrtQTPmZyqBQEBZ897hD7xhuAk2hJ6pdVJk",
  "key9": "54JskmxnF7Cdtocnk66YtXbBdKxH7ZY7FzFVEiVW5D8usA4QGcE3YHhsnQkq8VdCqVa1CJfZXWSKtkRnuZzqfU79",
  "key10": "4zZTTXdJZCvCEufotN6vaz6NSidfc38DRpAjj2sMeaG2o3csfgrEN5RypUi3nQYmo99R5GH9wLMfckRdvYRfJRWH",
  "key11": "5Kn9GHaKbbZHKg4jxCenTAhzLHhaC7mDX8bPSGbYjvZ8BPz5FFGVaHoC15UD3LrPfJfJaxmvg8HML1nWQyahcBg8",
  "key12": "4YjxQnvCBysJArjBa9hrWYvjgB1uj62GReAj2n7afoeTvS8FPtAiB4jfiQyhwPZomnWbUzaGF68ueF7ArQVFpvH8",
  "key13": "2rt7E9QcfgN8kM6C3XHUKCr5cUcAn2BMeCVnawuh4e5kazcp8p2UNHw4ZyK1JCm48JgL3FQqVfV96gXE9ZtVx7wm",
  "key14": "gLuZj7VWRnomWXcmW9A4PSTBQjZzqDr8cpbiyEbdsao5kU1ftW7XRzVjXujL5sfth4PkQJ14Uky6QrMMkDpYo4b",
  "key15": "ko41rurHAWWvt5QNu6eyzTzu2iMGgh4EsbYcB5D9zGtwDVC2nMxyT9JxaoyPDCpM8K2GztMv83HzKecEasGKX2K",
  "key16": "3FymkfPxdPrchLSFv1fv1VQn8zP4uDrdwTc4K3eWawCHcNKXKLRu5oPf6J4TziDK5omW6t3bdtJDiCCmsXPmT9QF",
  "key17": "5DThYUUUCGqjDCiULvQGg595KcyjvpCVkQihi4vRpCiSM63VAg1bryXGcbKAWqZyZCQwcTY8eV9MhQrNdAAFuGy5",
  "key18": "3U1sRV9x9YKDq3F8xPsPedBS9i1azy3vfNZu3Upo4DZ92HUrwA78EXkoL2nmtdCtUqvm1krWJTpqitzDe5R6MFiq",
  "key19": "Bqret11hk6ypbVzQ6uEpAbEipagEjYtnf28WeC752MzYA5n2GNZNSLbakTZJwj1qht3TVaHs1tenoTPF9Sn1KL1",
  "key20": "3obeXRdJr4A4pRfjuZ8jKqnkxcBVrbzWGvDyyBXTkkzZF37VupW9KA67fscXhCsw2sbrxzStDEhsSuvTnyADhAsH",
  "key21": "5UZj5oSEEaLfHYpncNcSL753v55XFMKhRkw7kp29PCpe6XvN7YhN48i4NtvtRuPspgi4TQRWCjcK8wgw5UcYq2Wq",
  "key22": "XwXE1mz4bEYx2Dqim4KrTz7BSC2AmEjC23F1J1uLHfEJ5MqWg2LE8fg14T7RZ5i2EiqMt75PK2W2yE8aE5pAZgd",
  "key23": "GMdzc5DUXwLgqJmgwqNnk6iLnWvTnQrLSSNm5Pa24WwSGaR7WHnx9GckGyUmym9HTRbEhzsusdyDp5SyG1sSCJT",
  "key24": "5RbrqCoSvQnA9Jnv6fWWV9GZPJZziZcEuZjRWR2H25JeYS536yqjVPTRgzQFz49yqQo2XTJmYiu7QvXf4z5pg5am",
  "key25": "65HVfRbzi1gNNZ4uPqcrpffZ7EhA8EnEijrCDkSLfSCXyEhfGn1efZxDbinLLNcSRaRvQq2YKPdtaAfbwPbb99hT",
  "key26": "2RVzp6fvB9Gw9KNQXBXdrxAPCBuVM8nUEiPfyoETPk2ugkiqTjxmK2pzxc2CTxr8hUD9ctB5ZMY3f2BqvPboZrgj",
  "key27": "4FUhu9yim2cAhefhsiQ3KEGjfdMuF3PHCG7ojymPGHuZngeAuK4TNzDRFrNRA5oYHrjXdVLg5mXicaXd3YQwBzJw",
  "key28": "zjFQQvA774WqgUBrBzDsxH4heA3Q7SG76qxE9P4Uw1QWwmX1rigoGnW5oSNYTEBS1fSteciVqSKf1YezBtFfeqz",
  "key29": "55uBTEaPQCTKCbNxW3quR4GqvNttDcAQQdtCXRxo6nRYp2LeVrtepKVQwunXoPeUEphdTrCq95QKkQiGrwKVKF9J",
  "key30": "52avTWTon2ZoSxbgZNi8Ca15XMQNyQwush8cT2XVNrobkNcrk1GqJS1TRP2a1ksEMnpWUEqcciKPL4KUPTjb6hUd",
  "key31": "EB5WwtWjWqdmYbcQy25GBeUhjXJioJCxF1o262JDdrqVsphWqRYvyPP7BhYctTgURqdTnBq8TKZ7AU1UFgM7i3U",
  "key32": "2ErcK4wGRcTRH1wiwak2BT6VkFpr9G8JMoKojE1obe4c3z87cFn2PNAQ8soDLrvpR3MYFNetq9jyZwTKns9g7ZK8",
  "key33": "5TUwuSFeJK2zwyNv1ZiNkq9vKF2y8CtEF2XXoEPKr274DuBZ8o88j9Wnv1pS7Dtxcw4z14FiypHFkdHfxxf8nEVV",
  "key34": "2V6mh2rC129rZBozSMJmPKVMREFYCsGzBrEzQr8rajH49zZUDuZGKnjUQZCQ423PK67Ze2EEQ3htZn7cTKm3Gj7U",
  "key35": "3Tj8BCLUZ7jhCx7yGwHnuE8vDV99piUCeCdVdG6QrDc4SuQi4fdU1NXAjk1nutAE378bzZW3HCHb6ZcJhauQ63Ke",
  "key36": "4HFCxCXJJ49EbUCGyhvBvgqb9phhp5KdeUuuHREcTGwsRrK1BhReopv4WZFQWX8CJSrMo42KpeMNrZboovHtq5t7",
  "key37": "5ScHofABmVidnCwMJme96uNEJCv3C2TSHuG5QChqByECePu1NLbarbpvTSiAjE4YYpaSzefeQD8DbTZgK329yawo",
  "key38": "4dzchDFtpSVQa4x5vE7hSW6MDzV1msFoQgv22dQWTSLExvhGHfg7kuJ1mzhhjoCbTfwCtnJhKi8magnSuAzs9E8F",
  "key39": "tYg1EovgwpQCA3KE2SPg9s4KJUKc45o4nJpXyaDRZequtLWDG6fxx3m9xRDATQUfjAEXiF3Ej3TFh8xn7rvEncH",
  "key40": "4rc53DDX4R48Q8SgHPq9zoUJN2NV9MgDCBXZRfF3JQYw6mYta5xnqv6FzvoGZPzBQZmcMcd4nL64EGtmHDWmRpFC",
  "key41": "29PyC9oAnHN8QUG7x1mGDn3GmKoWA3S6BzZkAEUqaeHZh6Nwbp6xQEkLJ5b85R3XdKngqRJRWedHmkhboELeokem",
  "key42": "4nrmr2WFmUyiw6tjRvrpY9eJSH69MwivvPtFeRxZhR6UNbJZ49sxiyB3X1eFEh5HsArKchcQxHrJne44ug4k8gm9"
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
