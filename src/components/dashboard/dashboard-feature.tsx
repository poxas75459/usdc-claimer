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
    "2WNxomztyKW1M4LtCspUpz4sfwqgWAoxBH3WDtr8x3sQhXzpXNpfESbHjvDcdoTRE1uCpAkqovJ3Gi9tDDbuWkBP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wPe7V5qVDzwk8Qm2GruUCAiffuAJQTM2gCs5hju5H81yB6nf5yGdDuPMjpHYEweq8aHB3n1GGymW1YBwLnJVXsX",
  "key1": "41MeQdk49QKKhXdrk1hhRvG3ap8TNqCqWXNKqreLe36UJSXKwsVY8usqsiNr9rNBBxgKqT2eZfHhR1St5ThsepBU",
  "key2": "4feoy2nNdFRDkVFQxXvsYrUmzdt397rZT2DhUeSTi34cWuxsZaH2goZxXHeF3UjcfBJXUgDWzDjVTi4NwqLSCoC1",
  "key3": "5ih1Hwmmgt7sUu5gYCtaxgw39crM4hs6rHkCTRbbWyrg6RYiupJkbhe2VEjP9TjLk7Ymm2TrVwRkumijSQzaopRe",
  "key4": "6ndBuPMmSco84tqwaY1sSeeo3Bb8xEQJgcWTWTLFq42zkK6EbG6F6mEj86z8fHWu5KfSP5e15fDN92mTmHGugYd",
  "key5": "77fabuJwjpi2FKeVxXcqjQtzxohSnDoRj41vjMcsMkzdM24y2hVu5qsgT7ZoQ19QMzVAMXVdJQWCCFVVQKYfJpz",
  "key6": "4b5mgdndCaxGFD88r6CcSfNXNMczq1QQx7ufyLjynPo9MkLcewJM9FmpGs1M1gDAXgRcEtd85T5WENtcDae9HUaJ",
  "key7": "32iCG966GRQCCakF5gGnRwRV8ddwRX1pwee4Y3tK1XWhqtBUi8GRhys52DW2uYwNRoBNik3uqLKNmF9pXX1Y6XRQ",
  "key8": "4P5aPnPMKkkZX8NY9opBo64ddsoNqyWWvbu7cMRVhFvQJx96PmtESPBxn8rCWFKFCqij9DXrxc6nkVSFvkQ8MJgs",
  "key9": "61AWxUm9GtpHP6iQB8GdcZn5CXtbZXFLxegwEpHitwSHrmJxDdeBk5zt81oUuMPpZVyDA2ALC1vG4VHChC3qNsBy",
  "key10": "5sg2PJ2UH45vpwSGkxTZVdNxb5pe31hWRprCWc3PN3rLdiRCtRDdxkMQocNCrat98Qsfmp81qFWSFsEqWfA6Lje7",
  "key11": "4NmNq3HE2jqdQd2gjsfmy2h6ceb5r9wdMwAt26DDfjHqcao6Nn4CZ5xnzjMhSGn6NUJdHHb8VDFjdjG6EYAmkyXh",
  "key12": "4kwXcxJw5DwhjuEFj24skXichbAxuGCWM1x3d9bhx4TuwTyvPj7iSroadLbc4ubukZnNZpexh7b6zmoU9MmM5diy",
  "key13": "2RYH6wedEApFvnfqXsjksASskddVEcgyUc6edFo56PVHgRRsJJu9dem45vNuJ5XRNmo64xRezWmNdmmPrCoNNHkf",
  "key14": "5zRLtiVWpzuJnY1vtBNFKACKvZAEiByeYHqA22bnARAraVut4scM29m8inc4ssXa2TVEkFLv6KsJ3wiuwpFafTjE",
  "key15": "3yh6ZftxLu7R8stz2tH3HwGM9KtdMDUyWX14VbobTPN7y2vbwPFNQfbyawdwJd47zYPzdMvSSRtzamC1SJdAv8Jz",
  "key16": "55yXkW7oZeUpmDAtMPAdAMTcgRjoNxKyYdkGYkv17LJC9MznpwBH5aA1bJRybHNGbECkHrq29fxBLdPmrzENwvGk",
  "key17": "56j55pwzDbAjLk5vLpJ5nwN9owJ939ptUYfbWep2JdZjDiEJfLdqjv9163VjwDWZswh259WfkVsLFwca5SVwDY2H",
  "key18": "4Wb9HMT5mmRgwNkTPLjRsWD1rwgkNQP2nF37RGbMNUJnMcuEiGK5zWHgTvwdg5vYnw9RbHDA2YVi1weavBRcMdRF",
  "key19": "58Yq79LpKxwxzwV9iWmLrgvhfKfYieAW5RL7pLyPbiyhQfCiM6Ez7QvUycJqNKndYtM4h6dEQ9jbiwi1eKDYQwNN",
  "key20": "4oPZFvG8LreYdw2KJS9Wd8GhtSoCbongZddVCGrwbFzwZ3kZCqDv7KYaBeCTaWktKBHw3hvpsz4v4Xy8PHPet1Aq",
  "key21": "4GAejv2eK3Mo8vzHpYeuSbiA4JbXHUycXw6rQzLJjTKPzU1b2QraqynamJPjayH2Zcz8MMpreQhmWrBnzzFU6GjJ",
  "key22": "5uES9JPT2DS6pkeiC3FcgUcxEBK8JNu87x3SUNY8j9X3FFbxhGEEJEoSGdzaUDFoJyiP4udVDF1uLQv865CxbC4s",
  "key23": "2Fxq46wN85wWZptzJvTpQkaQ5RhxxMieAjWHwY9UVRkTm6n26Yd7sRqGeZz9n7wETnm7btpre9bboYbPqzAvcoBp",
  "key24": "2yq6DygCQNLVB7kNyiZVjRPGbTddCEea3dfP52oRRLHowh1MUud2ugoeMSWbixaC4UB49pPQ7aQmFBVksydaMikj",
  "key25": "3pB2iTJDgb5Q2zsbEiDrLBKqAEwDKhfpTkoAnLj7hPKrNWdJPKJuTU3PS72KrYVyHAViow93uvgisP3kuWNQrhfj",
  "key26": "5gAKahntniM2K2h5A5ggo9bqhXtH9wvjCtosxj1bQE9GMUTJeeKescs2dYfUsSx5fhuL73hkSzZ79ta5aNSzqVgE",
  "key27": "22naTQphduQzwMerRBmVqxXbnFs33jhhD1Ai5dDmtxnho8QpAXrZNEBvc1tRPNoBPTZfySH51PWqbjbKipqdktsF",
  "key28": "3z13D4FC6if9d4CMEwJt9spe5m8d8LTMNQte9xoq3x771bbkTjtCEc4szdEyJrsoZB82zxg8btaqw5XFD3KDpR8d",
  "key29": "3b3X11jrjh9p4JEqCjxZ9x6YEHUQ5RZcA9bkdLQf8HA4D6RRUvG7GVTTt6QogcwEPWtRUzcdZKBghFjb7uNaLcAU",
  "key30": "5LaDtWFRDyCRLtbsexbrhDCxUW48fTQfJyxX1tzAs5KAtwPSmcavybHZzngNqh75CdNryS7RcxCpynrYS8LbQoEp",
  "key31": "2bs6Bu3XaadLfnRqmDHsfgv6FJbyZXTk5QtAvtke1aNzDV83EzzA95dkroiEti7QXYhXGiGXzZnGb3uXjaJaaZo1"
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
