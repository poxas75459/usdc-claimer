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
    "3tew8MK1LmVyNJ5HUWULJgeZL38xBrCin1TPCstqJ6ytUP8U42CHceMVHQqGAbtCNihcZkVG32gnP4AyHU331i5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27LfGj1fy8CP2mEmqnFLEX1BQKVjdZifnLBNMuDJnEavzmtUbs2r9vxA8g1q1GqhitGuzVEemCkjuxDm3Xpdfc6p",
  "key1": "3aFGqjZmtEiXAMQxX1y6U51EZhhppAPMRVGQSUDCv3EQa1eotU7CG1t8opH6W89agd5ATuTstGfCnHCURbbtbo27",
  "key2": "3TSKLgjAGGPJwMwr7nmpwYRCnkrxCQsS4iAC1w2xjH385sHnEuSL16ABTYMSc9k1S3REjPtLB2hfxvqJ4LCMgJKY",
  "key3": "2jJRiFkR3qTbWwh4yn2VE9BB1ZU1VCuAoxZgo6CWtfbhPNHR4oaQXjVhzXfmKZyMCmRScDHzQTsyv28fmk9N789x",
  "key4": "2Sj97jbjWG86C5nMMwAVShXefoj5cXcKTBozAa7q3DFebPJTRb4m9CygewxNvAV5tTZWq899TVk8DNMnyRcfo1Jc",
  "key5": "rsPjEELewoqXNxKqD8q5v2567io7QdFJfnc8ZD94AMK5m3So2nigfL6jqbiFwofzc7aFrYkZJUPosdXwjMLGcRv",
  "key6": "e8UzaxcA79g9bmQmFtkiWYZTQn5Ly9HaJCyW7Q6MxXSLaMq32nsHhHC5YS18t6Z6CtpvaRFLNvFKsAkEEBrjo7H",
  "key7": "4QdjyamnhAnGsWTsueQeoRpJBjoLyvxdxqPWCz9aGKMwDNADvnJjgSMjN9XY7D3V1gJ1hcrs7xz8QF1ZoKqRodeV",
  "key8": "5pL9TohnkbbzwMFNKgKSiQxU5bqLatdqcnfPGK2yvcwtr7P72zaWCQvkcxTLvWfAmAxWBamKg9WC7K5CQzanwkHV",
  "key9": "5jQyd5dcBL4rMHYeGnZmcysgNt6cJNpzb6Tmr3ZVn27EuWqQSaJ1pmY7b3e2uyAe7LvX2NET81gmN8TJhqRTNnAC",
  "key10": "2eU5SrcmqeXqhNTAmJHjAqTd7s9WbSmvjuxucuJPQWehf8UVszBDAcSionZAdrKTPk5cbYFjii1iKGJjjLj7vsrz",
  "key11": "2cXcQxcZjCkk4vtZDWfQ9y2kRZGQrJ6J2tTpmComDXw3ZfPjGy5o7fYKV9CihV6sQaf2k2ybNwyain5VvoSfZrHF",
  "key12": "4JyqyqJxoWCTgThRcYcSqGJmj46WJJitMeTYWEevWrs5RK4mwbqqRvFivR9vfzq62QeVMYgAEzJ2zLJYvVULJQW6",
  "key13": "345yMzPDzN3HUnoY336bL84nsPBuUYjZD1EALMsZT4iw1Cn3F5MuiaLNqusnPMiCFPR47wdPy28jSubKRFxEZUTg",
  "key14": "2wqqsaeJD2U4hdE9LibDfkhs4Xer3wttyThF9DmJpETjiJBZonirvj5rxe7g6L2wHiFDjcUgh8yfe6sENCBPZZ8d",
  "key15": "5PHTtyJkRCS27HmqraWsPJCKrnRh8wmKK5Mi4692x8t6fHeQuCoMiTpbuALAXoUxrR6JGJqLWu733Yg5mdMPQ1ms",
  "key16": "CYXvn2Fq4KJNLW6rQVLCrNeoa9T83v5AnhyCKNYeARkzgG3zpmS9TDV1cpYcrWycFKYQnugnShpDMNgsAj23cmD",
  "key17": "2YzXSMRZtUZFJgUaWfZ6AjwQ8TpXyVPAnS7HTuPZEk5az8YQCyvAqJJNNz8ZzR1TmSQhHntfedDwg2JhkfE5gSC8",
  "key18": "4rsensFXpo2YCuDC9cdo6zRFA5CCKU8F91cYDZWBvt8SMeyhd6Zomo4cXkpW8P4DjARJvaBj6XqUr6b5buE4Q3Ek",
  "key19": "2hkhjpKXNUaDfGvu7g5jpUBBwW8d4wYMJEyiUeES2ZESXDdov8XLyedcWuALmV3n2ak7bs8mNXCPoNMM3jpdXpcE",
  "key20": "43qEsmpmqJm7mvHYUoFvX2XTYjcpuAFh5ZP9VFRhzjt9tXoCwWzduCz7djTDPRFAQmL9eq1NHWNaTyxpkX8Aoai7",
  "key21": "2YHocNvpvr8viuZEmMLC74JfAWJrauAHVJtYC6TnUiMreesDXhdjQ1z9jTTgL1EK3cHGBMRpqsjg6dRTJ85iQA9D",
  "key22": "5aryZYCwRQMC9iAZzweKDu6dX9hac3ud1q5fLLFEsY6NhvcK22KDHrgqCRcWYUNQMUPGWZFMinbVFSwX1cJvyJpx",
  "key23": "3JHfvjgs2Tg6nXEk67gbsXs3EP8esM9X7qZmSFUVfusNJ4LHNSM7VjTM3P7cMu2Y9TxveYAQPhWFsAncJ3safLYS",
  "key24": "21QHbgxcnYUdizbMmaohKWsihLMAoJmMhBdkGj1ssp3YTNy6QrrDTHxyAfSv9ZK9GjT5E1msNRgTcqHJRj7r3NQv",
  "key25": "38TSVoLSNJUVQCkdvSuSAkjrSwaVn1DnWvEAvZnNt6NBHxi1dnt2bE9zo2NoWdtC58JkuAXJgwcdcUtrHQQTBYbJ",
  "key26": "zDgtvmEyGjn188zS2M2Nt67LSxS2QpmfaJVpWLUi9e5aTHPVKzqkCiuzeYtvtVsFbMK5HbByg4aE6y4RpYPQq2C",
  "key27": "kr9qqNMrpFbZB2CL8wVX6YXmVhNH5K86LApmh6rzxBpYxQGt9xjYXZMBQuHRYaKoqnTiAaffTGUKGaYwWR6ncpT",
  "key28": "2Kkisd87BDdALBU1x9GCb6whZuvgNsWTiy5UC28t1cnegACMmWGSHBTRDjTY6agHXSiTAqQ8exTcv2yTutm1BoE3",
  "key29": "2ApYU7VPkm97n7eUrVx1NyM1d8oJNnEoDXjLUjyn4ZLpiS2KGmKLBnFTkkQ6gLwKkPfpTaNHscCQhVPmcFPkWBXJ",
  "key30": "47kfhb4yardPzhjFVKXTWBgEReiAfm5ttWzf4xcw2wtzdDGMn1vpe9KHQpHLZv2R2NTJJwMEsMohFpnCiuhs7Gfd",
  "key31": "4sB8z2vnz65QKcksQMvbKHvhn1zU1eXoiHTL3cGLZTr1M4MsaEK5BK6XdnqhGKf6f1mc9q295vu7YL8hCgF1BM7E",
  "key32": "GyHXigC4fREB32VCPWMU8MRzxdfJHLmFVhi3G9awq5r3yhnrCXSB6ynyQ21DRzPLfqtigXaoxzHnJN15mSqjh7o",
  "key33": "5rWhKsSUmr9WU8da3m5sQ6DBm23yo9RCrjiuDGAyaLftP2CB7fJHq5ZeQMBCB1mprMjFmF87ENmh2xA7QjQQfioi",
  "key34": "3r5N7VMpGXuhJNrKXBsVyd93d7s5tcu61o4WAWBagLWwP4GGKaHdtxHNfTGzPHq8aMZwGD6FsL6J5Jwz9JoVMj1y",
  "key35": "SpWdvhRmagTZx64xwURehr5AjxxS4fU6kdYZX6PLLkEX49kHf3iZb8ttbTX9MPsBLFWhg2noNbbEB2GUohHiQjU",
  "key36": "5Us4v4kzU16dbfA2stPvrKZWcbvg3rmDje3yjXyBAjZGoseRmwJWWvWDppASi24iqwq36kJBpXEwDbdRRUZ9zMfK",
  "key37": "3JiB2fcY4sCyjghYMVGyzxchkb6WfEMkoekb22nJJmXnYzt3xQWDVYKzYHRPjvYx3R91nHkGMi1po2B86mLgfwbv",
  "key38": "5UxxjWMdCVkpYBDPnEdUUms5gaRncuXWj1LjTvXqK59kkCcfP2pBEbUbAY1uXvoHE6akRVanVJNTo7TX7V4jmr9h",
  "key39": "cT8SAgWaPebK6thPSuh5heGck6jcWQZosB8pN11xdHE4qmt1dWCeua9egVCLuC7o5xMtMgRwcaMdN8rn9VJGrkn",
  "key40": "4SfYEneDm1g27F2WJED6wy7N74brydhWHCodT7WsyRRsoQGQxiRkTG2VXMtcXwK6coLHdgbvvEbh8iRignm2WDfy",
  "key41": "5RtWyuH2FkDkXHNx3MsmnTcske5CCg4ZTVNNEpaBztF2f7VvHsHiDKyrCqYCHhRyLhrz66EJpmHTpv9MatPgGLg6"
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
