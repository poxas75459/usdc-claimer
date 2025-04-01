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
    "2ei4MvijxCoV7avGbfJEMisEct374fnVUe7pJZomYWuJARntxuexPMjde3AxKvxEXZGRfWdxfhsbmhVRFHMFsGkM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5n5CAmRZHT7pywHu4kyqGhVMWrkTWvZ32LjsfTwF5ZNZ94Se2EEXWYkLoPjRSGjFjBc7p4CRY1L9Lt6JnJLpYo1Z",
  "key1": "RMwuJPJWxC1EcqDHmqnPAN5MP9Ge4jqbHamvwpBLTWM5xEgPZY2Q7brpdAi5AesNdihxjDNE2p2vjZUL28S69SQ",
  "key2": "4vHmDtf5fiJbv13rxNMG7AJKDQaeCyNM77iP3asvq3o2EfwBPx8q2ZscwbNLsNYrSpFcvHHjQQP1RA5YoQdFSLLx",
  "key3": "4LiX88vY2HwGj5k6QLbHv3q8kuWTnDTxBsTiGbKNb7fyz7AbFsMSYzB7rU9uKBrbSbrZYAfQGRdxU7bHBBiAvhDe",
  "key4": "4XW6rtQhNhe8ukVjxTJzHGPtBmqLhj7S1yhw4bpegABfFJXKHWNYx7B4gyXuoAJm8oixjwjPB9ng2NgGCWR5PvaG",
  "key5": "5otcBWDFL97Fow7qPK1C7BVZP9LmGGbuMbJawzSnTYGy9DHH38oMc27Jehk3wd91LQoEFByAKZTCPMMkNYNibavB",
  "key6": "5AqvS748dhCW63ms4NRbm2ZHM7ZWkou7L6EUEbewfUWLkwkGRRKkj5ZukExhZze39g8TYuStvuqAbaH8ekRYDTpS",
  "key7": "4q4ZmrSs8auQT9sdN3ZJLwKeGumLjBCrtiyR2YQZmcVcM7W7SMiJez4MRjAGYFjCkszbzF8scqBfZvWgxPZts4Yo",
  "key8": "3A8pv5xngFKmVtyTR9whWCkhgiBvHjrJQEbcUqrcbF2WdLQ1rZpmWH6bTK3S4F85kdEAwDGxFMCCujjqQX7hNPHX",
  "key9": "266n1F4mPX6xWUbuWTM56rLjMspNu1dvbeUhNmCAwiYkzjfrNNpyJHqeBBgtUqaGEarWo5bS1FW2KRTd7bHpBUXm",
  "key10": "3e5Y5k12bcjkFiRo21dexwa6omJGxovmhvi7SLSEbEfEgfjhrUZBovtVLpjwAiEnrkScLQ8q5STSnKf2nHX6efVq",
  "key11": "4wTgZtkacEX62K6zmWpu6Tys18niVyab15zQ7jcXQd2xoxho6HdSjP9Chnjj26Vgm3GdJewzpDFq3f9a7rKt2mdm",
  "key12": "3zXdu4wq7ez5j6a4yf6s1d2ycMMgZxSf3nHCnbnkVEvFP4DTHcMkkyWdzXYjym4cgFqq5i1NUEiVG9AZWqw1wR3w",
  "key13": "3GCi6B2mXcnu9dhux7722vAGLYLdKjPwep6SUdpf1Dvq8tb2UyvZKrhWAFSZY27XSYpgQCNFJyNo3igr6jPgmoTX",
  "key14": "5bgMf3YWhyjf6ErvratFAWAtcqi7Gnj3itrAbjP7LMfPg5RJw6dMf6bKE4C69c1Ln2jZxqZ4zJ2y6z53QH1fZGSH",
  "key15": "wSzQiRjUA36fSGJr3jVj5uhowJ7V8k5wDDzHUW92xSapjjTigoAW3edcnTuhETebjmiJiwiBX9xu1UcqBfY7BZW",
  "key16": "2t7XwBFhpYAZJEyHuqtDawZe2sQ97jVmprBMtpB1yB7mXSz9rmDZrhAagwicBUffEFbdEFyYCYSbb8Yzno5wCL5a",
  "key17": "5Powi9td6gcPZkFQeLJBcvJWnuUCjQVYAg1ti7jrFw1vhU6dESu5Mpr7JXMXug9bdCb2tQd8GVMMDtCLkgxw8BQb",
  "key18": "66Vs426QPhgrFg4UoyzHFmWnFrZfc6onqKPAhp8qUAxwSjqU9AibaWCQ9NQSUAX3iQrWvGp2bjDUk3ZHF2Yc1DQM",
  "key19": "kWudmF19Rw9x6gGdP9rtPYwF2oE85RVC4QzBxpr4H8ia2mTeraKNvhWL5gYKJqKQPJBqkgF6xx1Nff2ysKjRVAA",
  "key20": "38xfoziGC5Xn4ndy4TyZh5B4tKwNXiTXVWykCcqqxWVywux14rXNiWXyq6HiQNJQjvKmgkXprZ2qcGh9Ur33iFcT",
  "key21": "61tMP6e2RKmLiZqDhopdD5HFHgrTB8YpY7ydRUSK2XXE2i6PAHwBpeKB7utTLNbe6Z8iRMAgu9aDnWHfW5vSKwk",
  "key22": "5nm99sXZiEgx9KWbGwAYh1W67n7Y8cVLbALsFt3mDzoBXWaB3dSaa1S7xBocdiSU5rs53yoy8JriYhQorpLe8Eiv",
  "key23": "2NMuahCtKPHF3q66NZVW9L8eZGGGBRgeoEoQ8NAEfjqXTobSfKCmA3uDRDVedCtGpQUwppYYR7wT46rRrRRLNF8i",
  "key24": "5aR3bhwheA6yYDET7FNC6Qf38yDftDuU7aAymWAJnPVfgEYog9y2FVpNHxXTxrPLWCiLFf4aZo9zDXbiXqGxbJsh",
  "key25": "44Py3DNbG9EHv41DuJ2xoxdQTY2SkQYZnjGPGMzASmMSMiGT6HALajaUto6g3aUeTMFKgmFr6br6Mk8ZUv3ZgbcV",
  "key26": "3bf99WV2KqTFAripGBxebrDaJoYrUCfnHvFxXMYksuaCqyTRyofg4kokbscfrQbSCsZsKL1A3LTGj5sxgtn2qcz2",
  "key27": "3z7YdYCStLtC52v5Mpn5wJTKNCx49kYQff8V2FyQ2ggdVPCe9xYRdMeUcW6p9ZsBtAdc62JPsFrr6JcZVVVf5qV",
  "key28": "5aH28GrZ4H4giujFcq5XNDEHvWKKW4TQFX44YczgwBJerkSC9RiAieMScY2HTzQ423CbKbi2aRZYWcEwPN3QdgZD",
  "key29": "5HvnL8MdCky2L6hnHi4xRNJcdd8r3Stwg9gw5nfD63GXaZFoGWdUxax3ny5y2RQS6iXdVWNYt6Qo2YbndTyMnJxV",
  "key30": "4v8wQVa48PYTjZKg8GXfuYpKTa5qBHb4zN1TBbXfvcrhiudGKY489vpJckVGurm5qJe2Es1J5VcS4jdA8ayt5DAe",
  "key31": "3SSZBG9ZTHebmkqa43KfqfvhRY9yiixBsG59V4SJLiae6CHWHnrnn7hqeG36GQkNR973dPy7TNvSz9Q6FSNmZB6c",
  "key32": "5jbfT7sDXupA8SaLs6ugPog1pdybUWFEwAvnQvae68MfmSR4sTXc1qHunMo7SSX7Jdko8asop6wyUhtMSyLC5cmV",
  "key33": "4N8bM8bz6JtyoRuKbSR6pniGhfjS42RpFoLyzD16DYu55gC8Eo2CxgnPYQdpXztFyMCiQmBcmTQtGmqkisxEyMxJ",
  "key34": "3Uin28fkQa6mA1uKYzHaL3EXPeKLbjUPu1twdDSCff3DzaMDXv1c3fkhkCUEXwCWNJ9o6XyQKQLJyLPPonYXgoWs",
  "key35": "5ybrstkd75NpVvow9MiKEUAH8ujez3NvhyYaanEYeMQKhBPGiWsxHstKNwFYykkB9tMtPsbacpddBx5Ubyopu3Di",
  "key36": "5DdsfaR1unfSTBz8qzdjynsi1QDzyKZRcShdB1Nrsmrn4LXAq1NwpnwDB1HKPkHraJuVE3S3uQgVYZpKeXp6d4fQ",
  "key37": "4xrDyzZfgPNoswUfBES57au1Fw7x5om3HRWBq6aG8qisTC1gFM6MJiMbnUPzoPgacLfzEJRbybAevBNQtrFgL3zx",
  "key38": "3gLAhyyatuyNcserhWGWUraTTVHw1DP515XPJwvCmpe2voMHNFYTgvSbZCySxZUFbPAf29xcSBkTEcrTCq5vqPwc",
  "key39": "47gehcq419r8yuaC3abymhZDQGnZNvC6SPEHRpgyzWCQ4AZJcSYsavHKvy5yEt1gLbHHxffL6uEuWKy3E8VYZsR9"
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
