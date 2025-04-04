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
    "5pZNSnoMYhL5xcMDDQCsBwmFG16Y1N4oteRJZ7Z12d4WcwLrsMnDEyEGjJfRUrhikoMXtt2dRiMiQd49cq6Pzkgs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RcmWt2nwpJqXaP7DbZcjTY2Fjn2vwvrdHzA3taZZEzymnBVYp3JwiAXEukHZcvD7oxDbQV3vK4JnMQcWPhxcr5R",
  "key1": "5w6ZbPKVGtxYEkF7g29TqaRphY5eStQXNPuAvYpDy31WWMZNSYg9UqmS6Q5mH9nTAwio1hbCMXoZFiMRAHHounDD",
  "key2": "5hjriKgxdX6JcYaAr4iZHQvnRwotd1kNxc4Qm5i6nBPe2kks3Ye7JQ7a8BR7tW14YGUUs56dZRxCFXC7iysf4PC2",
  "key3": "Pun9NzmEtDtgnEEGNqQRrNfP3SLfZKPaGr9VUjpYnVt84sCzc2FhvbeLNm5Y7UqiGiHqSrd1W7GPwxDCzM9LLVz",
  "key4": "H3hXMr98qRNUJBbkphyE8vi53dHtfzxcREb8CDbhCovZFYbVTk7Qxtx3wwaaw1mB16ZHeVL6uYKGHvQfhoqpP1S",
  "key5": "3fgVKVxdCszTsyBz17YedkLEzoSvWNPskjLRykY3KKZ2EYfKnomohMSLheyxziCLybJnQwBR715kJqvFvUEdocWd",
  "key6": "RCZQK51W6usJsPtGWESdqQy4eB4vhaumybHJ9gKNp68D8mpAZPwEyMJS3Zf6VftBU43iw6EFsavbQd8UMnMSEQD",
  "key7": "4kavsHQKUY5qVE6NEV9N2kZJvjNPXvCLqJLvK9BCfjLGKkxN1kV1MiHxQwdZ6JLZs2ivrDgbtUEj95Joe78hWPKA",
  "key8": "3MkLuPkyuAsM7iT9Jk9D5N978UpjeVQoofeXNWJsi587ddUN8GuSrHDXdA4cSTRw8kQGbj3rDQu1Q6qg81it65PQ",
  "key9": "3ZgrtHZzFZgTdUNq3PHHPc18k99VXfPi7dd75rNcdXqHSfC9WvLH6bHZoHbMSRT7MnS327FG1W6tabuGZJ4g9JJb",
  "key10": "4bsdU9b29FUBwY6X2Mfy2h5Zcek7q2FUdYDjKxo9zCZXYvkH2Rov25L9YpYtmwNZriLRDvTxFx6Sz4CxC9gfx5J",
  "key11": "3x2ypDfz7AAj1XagPuz6DhPswKTjEBvr7iKy7mf8WwmpL29NfVLJQNYrnACf6ma3P8JcvuTn9iSHw9CePoaD9oQ4",
  "key12": "5ZqLS6UYxmix8RJjZcnBo9jMXJkTSUHaPHHcAZAHubHWZsxBPU3L4pc86zwEadvPLvEvMkZQKwfJjHbf8RCnG7vf",
  "key13": "xnNhQ83nkUSNWcDGPMy5oFQJWCg4ofvL5mFHeExjXyrWANgcrFpd8zJsxBGw13wGSs9m4U8Cpncn5KSRKMnoLWG",
  "key14": "MKSAk8BjcM3dsRWSaXw5ZqGqr7Wz6jESXqua9ty4z7q2PTTMy2TBnqCAeoGoLh45BTvWgdGiSieCt6GExPxJHRu",
  "key15": "4YP5H3CDqUe2nmxDEWmyzph5CgJRkvsCVrmeTExEHkDKYZzR2ccJQfJGTq2wBw2kiqsXcuWBiek94G4xLAsixKJ1",
  "key16": "5rWmgwyKM328fhsx1zqJK8iUQs1GYwFwGABmDTYYWc8iJM5QpcX5DhhCCoazVNNz2b44VKr6sjyv2qEXpmzAf1xs",
  "key17": "3zziQhj9qVbDZ1CFxQxnHZmUxYGfVMDnocAXHJKyXAfdg627uExC8Aap3yQc4mYJUk49WJ7n9DKvUy8m2yA8zzuL",
  "key18": "4kEEW7Xr5TcoHFmmop6TsqhfLXYrZCSRR7x5itPyefirB3jM19opx3j1ycnY3aJ6Bn2t912FotVZ1DcqfssMwXUG",
  "key19": "2ceXpoD9hBbCJ6sNjtYpzvTzgYjwxi3S2vCSeuiz2wnqxdWAEDvuv5nsUMcEwafurrn9KFkU2Bxk2LFNBEHtmZnA",
  "key20": "3WLWeU4Bxj3fCu24thAFqtKx1K6jFdiAmxtShUpY6LFPQDE4652nGRVuagKjv8FwSqRhQVACodTMPMVumNBq8WNu",
  "key21": "iUMSEmHDnUo65d9T4QB7nyc7ArongSkNMGDyEb3VS6NLpc1zEUS6A12cHWhKvGszRz51vCV7hREuQKh72ASwvAM",
  "key22": "6z83En2mDaxdbzJhm8stZzYNr8kvgRFqmnRCudjjSCT6W7M93ZG4xEigiRsaqP6BT3sQFHNKgfaySXVqMzNrKLU",
  "key23": "2Zbmxof5kEhsbrorFT2kcgxKAwdSwkRHTFWz5fvSbrmjbRmeQjBUqZki6JEsn2nZYMxCeUseCpMRrsdr5jsdxabi",
  "key24": "3mqxjinBAQpnybwM65vdpyHub238zXC14FnjBzhV4TCDVSNqQimHVuWPiGu2uSfM6mdUpbKzUJSTZCszTacpfGwo",
  "key25": "3CpnR2hgCpeBAZcg87R6AhoCq2mGFUzuDXrABfocggn88rJ4JRLUDpYseCivyRY36ZA1tub34gZVHptAxmGgXnUw",
  "key26": "652vxKnxaf6EHvGLpdZK6Pd7H8h1fN3gQ84v28Co5XtAM5RDtBgLWbaGPqzYAv7XBdrt5pJHSdSZ96z2nQMx4XzK",
  "key27": "31XP9fy51U1LY8poVPp2Qz9VYm4YwbkgmxQq179ZzWA7cjmD3s2aRD8bVcq6CF7hqXQm9EBsvhp7eoLDJRmiAj5v",
  "key28": "4k33gWtEoECDZiJviuz4wdGgbGjPF5ZhN9jXxrajm6RQpLmGnWSC4T3ckckDidiZDUp5LBNNCShbxHVG5PRxK1Rc",
  "key29": "Bqo92xgqyaDN6FWuhLUZtMsafh2uohp91feHv9R7EzmZ8SiUHq8FAd5Q5X7uX3fUgvmTTsZhMrUS4xcPuH8vwgw",
  "key30": "47Ri9Mip1towdz4TR8JAqV3ErnHvLp2NswXR1fYugNh8qRoV4NqJCnnonB4PtSmoyrfdvhyH6USYU4o48bqAGX4d",
  "key31": "9JmCvLba9cBhzxT2ncqU1CqTtxNQVJMFboaYkJi2YgXJC6HZdFmb8f1oV42h4iNtJtzub1RcHbX8EcKX6bVJHQX",
  "key32": "619EGhbhCeQh7Nf3mLRkmPNkeav6WddvjcW734jAro43AJWZihsgdTR3dJY4jXEH8HuQh9LB1hEAptzBi9bHNHpc",
  "key33": "5mwAjX4iVaWfiJ8HfBihsFAKAuGWCbpY3svriBA3oCxPbcjkpjr5HfnMFPsiGCiiK83NFkHkYxBY4KoCN33WMkZg",
  "key34": "25D6aCQM3c1KqYzANKoP3YHuSnT7SQp4qWm4rCVG1Kw4sdzEnMNpxF7WHsJ4CynBp1qVK7eJdNcARf8xMcThcZeZ",
  "key35": "23XKXa9acqRmxLmbLjtYqFAsDjsohqqYZtm6XYPZeiZwTsAA28fVZmQQKq23q4aKU56LDPH9xNbsd3PwPQKmGnqC",
  "key36": "MzfhppL2LDjLQgT1yGvHj14R9iArPZ5Lcq1JyfLCyqQ4fv7i6kcNdhyt5Q7GApk37y1tgk5JwRDNTDXffR11Vf3",
  "key37": "5Jy9XxKGJET5iFmZRCMjzWiNdhwYe7pVPcmPbPQxjkTcUHFyU8moNvQoNy11mi9y6ok4D2R6ppuuM4hgak7ADWY2",
  "key38": "4rBGk7sC38FNfAkpWxB38MM7M5CbZPp3GseQ1UGEspZqaTvGb1i8R6yHHaFyhqgpJ2evq3mYhcdf9qR3Bi1QXqvY",
  "key39": "4Y9svMgpJ9DQeznXEUDMTqKgcnsjcrXLYJp18RhS42WoPGohHX99iapMoE7yWiM21BGCmXYZieyJRjYKMsEnTRUs",
  "key40": "5G3SLqsjwbryzz318zv23goKfFpyC22A92PQ5TeTKCsaQo3D8FcPf7PQPTVcf4gdTSPz2Yan8xovCPLfSHe2NuRN",
  "key41": "u4jehnvRyJ5LALkggYmxiYocgDQ33mdadoUG7AFugKgcAiVx6K3wnd1JJAihGBsVjoBJnUBpELMxSEzaLPcJyhr",
  "key42": "4mYFVtGavueqnLZQ4Zo5373EZMEMeBXK6jJZiofoXyWRKtH6Sf2hk6H8fE8XS2C7BFxNLgdgSZbSeG2RqSKX7ZXj"
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
