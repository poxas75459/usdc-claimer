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
    "43La6tX67y38QPLU5MUg6gNz6zLN5Bea6Rd1Wki4X4UMgDCqeB2sruBipujx1gyCAJ9WJ4mRvZxHryHF3WjcQeTq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iy2qtKKLtUrHgzoxsXTu89YBJL7HpbFVpygi773zqp7XXTzbvJgd7qgMh6CePQnjUJWGTx4T2e8BkY7YzEdR5Hr",
  "key1": "3V7xfk9PJziSd2NQwEbk1xD9AtwfZmk4SQPUkmPtYn35gCASAGhhnqnzr75CCMY2a1vWMXg5VDrihHyabCYrM9YS",
  "key2": "2mqAy81b5yWiBECwixYqYp965YvtMoSVbV8C3YH4y9AUeBvjpcr2u1s5unXxwED311arniNF633V6X1pBBYqdLBb",
  "key3": "3JtkJfSpK3nQijHArzEvg5KEPAuRLxgnqgdLDiuARDAgE6zKmy726rJAPw4w5fjEF9nx2csumSGBk5zRiQHXZcRg",
  "key4": "4yDZUm91n9FAZGB5hJ73mhVMwoSqiFHJ2pjYqc3vgTb7dddysZnCsXLa87YMJ2n8SfaYttPMy2oB6wcqfYEZfgpe",
  "key5": "2EbNr1ks4bqmSyMx6cWAT42CU4inuyHyCKGbthDEQN2Fy7jrmPJudgRt9xVthyXXYY9ncjJgVFZmFyHYBsiY7YXP",
  "key6": "2nChoYtpEvbWb7RaZ83CbDZj8D6GEkBjHtmUgNsFmR28Njg3GqQ8sEWRwvPWBzp3E73spKFrBH8peQqmBhzAxb6g",
  "key7": "34h6cQnY3t57Jud1GU6wcb4JT8BTgkD8Gfsbmf1X6mdLQfwHwUyiMwYJV1av1fvkS7Nmk7BELBsSK94oHD5DAh1Y",
  "key8": "5vgTeEUr4bvgTDKAGvZ55is5gSjN6BMPmKNfiWXHpyq84ZxYXjAQWozDbStV2TxtZPRiAnwWGXLZ1M89rKGHSF5n",
  "key9": "2tKtYQEcMxtiWcdBQNVy5KCPeBkZLbQwcxcj8cLEY7Su81S9iaTTQZwLFfvhQ3ztfLpYDgm5GTDysZJo46XaxnhX",
  "key10": "2ydeaPgfd3XQifMGu3ZTJv84NChfqNuGMZnbGiPXnZJ3wydZGGdK3sBqeZuiKJomxHJw6CYjpAPi2kGj65UAYsMG",
  "key11": "3fdrkbtqC6vPqse3M3btWbfmi5K3ZpP8SiG1g4VN1T1hU4HTYENMgXx4JVcyYxoDpT8E4fyX2YZTrK5MKpaMJMXX",
  "key12": "79toJx5ifHYNp16PyijnfTgG62c551eTK1Rbrzettd75ghbcQuavuWsf1y9jLhEyoZCCxeXcnvFqxR75vpbn6we",
  "key13": "3VV69iZSkvm99FK2UtjVZ8SAq7gaKH9sHSc3mHS3uURMgZMDPxEAZpie9gsynSTqQZjiJ6YsnuE8dq9RudGSF63i",
  "key14": "3Gz44yc66Fc7x7kfYxWvvQTvLjYNxb1VSBYfezfqaDTwR6YZEjaNGkpHQjHxShCnm4p5bYbBtdtLq8wQSuN1aTSY",
  "key15": "5kZxeGX3DBQHTzTxF2B9QbjiPscXj42w2HUhn6FcBnQs1ig47oM1kE1sG5M3dNn6PTBXFVYvs6hJge2MwCtUt3np",
  "key16": "4jns1RzArzzJkheS41m5btLhTLkwN7NWAAa2PVNMbJu9hdEZEHxKQSq9jUVFj9qHBNjgWrAUeKRHA5BZSYjPThEj",
  "key17": "2rMC1Wm9sZg2FXXb2ogEApvX2afKzxYVd63nbrU2r5zWcQswqubCA3t9yBymRueaFkGuXkxdBx7ntkGWJVCQXgc9",
  "key18": "3cLqDM8CgTkoQaQji81ft96MkQ4BcuW8DZ7XjDPfNyc5TEBug2MucJenKC9uDirfA8fg6z3tb2HV3PmFq5BKds3E",
  "key19": "48r4D1UQpV6GJsFU3WZshornSrtFbTc9kpr3hVp1D8fs7XpAXE13XyUPSpbH6hKLN3aZtr2qsbFE7o3ZErVijGQa",
  "key20": "5zCCQoLktaMmbPJDYHaqfyK7kgGX15UJnXxQMQ3rYqUaaTysQqeGWp1q2vVtb2aKjK9DrhQWdMpMxnPePweWWXTZ",
  "key21": "jkDa1cwSiaFLGXPs8arwzK4DbCBQdWZ3K6cnpvotjV6kNp8jwjv2tqveKbvEq3m44qy55XuV5rJidsBnF4ACbEo",
  "key22": "5eGpDXAioZrRYh6N8AZdLJFRYuCATUL21yjioGD3LfLCgkSTbnVVUQSXWxM31j5BwnoiNTMy5t1MZQnLGnPwrZS5",
  "key23": "5pzRodmXSgyPcKzTeKQoapXcyonTiXts8DhTmM8gQe6NhuktaCCkx83gTn6FP6APQjd8v1urs51TiBd3KCFArkJX",
  "key24": "r7FBWev6WxXRSP3L3HrRfUNvCrNVFB67pS5fRvn8hKnxbfxk5rPWy52pR4xC7AT9ASF8ypH2BxAhRm1AcXvxoDo",
  "key25": "5nLapN4SvkQCyeCRi7VKYBx8MXPY6m3YvRKrHxz3Gc7ZSY8JpQjXw8iVNs9i7bRJ4MDLwb5i3ExrALTJuTo66sjF",
  "key26": "AbiQSHryMSDccKee7UqJpi9ErtinY1mupwvWigvsy3u1YgBzj2BUx3tvJuZ3MFnuLqLHDXmE5ATcr1fGHay2585",
  "key27": "59to81tkbHM1cqZ3jAphjRWZ8wwhkLd9eEkTnrN3rjvMPCnNjH1j2iDUe4WXiiyeenpVZTskHKcQ5qhpj6FYUKS5"
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
