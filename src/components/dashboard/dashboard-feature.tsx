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
    "3JzZ2f5b6FwnfBe5QM1wAtjMwBGdPMHLah18wnidYuaYfxFR1gBFfLDziAzT7FqhMRd7VvqPeBGukuQzghLdT1uR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Yve7gZkPvj1mz9rYWgMJmEe7FDhAfQNPy7VPC4wCRPUzVkqig71CJbMCMbFGb4YRDxs7hWfBH2Fc6aDG5yoNB5S",
  "key1": "2DRC6T1xxtjSc23C7B7M5HyfBUqp2dLdzx5T6CUJzSLLh9QgtULu2jrPsLAB5ijuHrt1FDbEJXEoS9WMK4WTKhwG",
  "key2": "5Q8JgjvGioZJULqm6kciBQwFy624UHbEtqsW36bh98HSWibft4pnnrRPw2QdaUwDxCJmTNMVRc5CQ6jYb3cUNnfn",
  "key3": "3YuWXtb2uXgYessCpQo9N1DstH5W9HcUt2SYb1ivGaWMHHRootaXRpbhz5JEKnEjK3pLy9U5x8VNuTeZqed263Wg",
  "key4": "4SYH2PuVrKuPfyDhWBT6NrtMUxDaprmSDjDk1S6sRFeyyKNb54m3dVDH8nE4Dg8HMHihPCtKVwDQJQpTES72eWQS",
  "key5": "58bUXVAU3ehEShGELpTGd24rwBP1mDLmnv1eNcnUEAGGqkoGZLgnWg92tjXz4r7vvguGwerRHYWPrZGkvL1dzVMg",
  "key6": "2EUiTNR3s1tnCPXSR7mantpyKuacvniZBShzaxJDThvW5JEf1fFE14zQqEWB3b7ZrzjE9w565Q2FJ1fzjbvDRMmH",
  "key7": "3ckukNPDdrYaCzBgT8P43u3aZj5o8Lj2TrtGkmTVzi6ZKh1huNZYLbd6ryYkMLVMaptUG3rAkkdKUjr23QNFDEa2",
  "key8": "5AnJV7xT1vcswdeXB5Rn8FZbvTYkZq12J2Zpkcz9a69q3aT2v2MXHhznsKRxMPF9G7XKHyuVr2ybzzJ35Wxj1oQV",
  "key9": "51oU4A773ziAa91jALMFbADKELVGZMMqmYQy7F4tmb8MSkoXUGAg8D1ei1eZ3xd7sDtavnpidsT5dZyJ4Pn9p8dn",
  "key10": "4sKrUn9rBsAFiXqhyoNFPqxEjLuiysU2Wkntob7KtdrMoXT82ZBAwN7pkGrNKvCpWKfZba1SaHtC4NvWu8fniSwB",
  "key11": "Kh6Pbc1ZUmEMSMpjut1FiJMZaFm289KE2otjKrdvAFPRVcv7MjynKUmSEFUG9tGBRaTDuVyGSHqKSA8YgV1hJC8",
  "key12": "5TgmrwBQHA6pR8Nzj1f9YWXpWnvWjEHxgyoqs4kSvy2EG8yfZN2F97XSk1wgmSCD1Z1tTsN2QEYNj5wewquA6nn6",
  "key13": "4s5zqDzdev8roL7EoPoYXwbY8pnbitRsd1U3qkQsqWzPbS33xcrBfKBts9v4ZbKZQDyWB99EWee7DGLk4YAJ1PLd",
  "key14": "3ZusvofYJpz98FxiHxXHihKQ81GwzpuvvwkvybffuXGCQtA269aRQhGtyEVhFuKSPZkjAmKVN13pbLb6dYdkRaB1",
  "key15": "3iQZY5KvyMDHcf3xj5vLW4zupu6LZxHuyZMMr2xcBQJjrqgm5dmDemcdWcoWwP6qcHspgUqpqHjUY1h3G5jXnrza",
  "key16": "cUbwbU6SCnSRNYty678ab1MJrvtvgrhRoHNeKvnKqUXaVzxqM3RVSB3y4wMCdtfDgT7nyUeAmS7jVJ2z8YBcPy3",
  "key17": "26UXc65ESYzs86AP9TbaDqT8bBoqwQmh2djDpv3mhtMJiJK71sYjXxnnKwdVa5MSirH2Y52sJdMqbsb5LXUFUi41",
  "key18": "5MWezLzvn4mJtWnPY7BYXi6nkZwTJtbuAk4cj5ZyrFeF6kTvLJ29eWoJCMPq4dU37NLLKiwAdCBpRMe7dm4rfm2V",
  "key19": "wpEHyc4Rfas8wzwYwTnFgb5UHiL66YUB5pM6Ng42qbRsPJJUNdk2V6DnhkU8h5U4JtNesoC7kbEHmGRzpreajjv",
  "key20": "4QJZ6NMDH2Z8LR6DC5SRsbXra77GjzCwCUva9oRhvCL5PutFhzSmwMsuqzpT2z45eBhmCvZhi4p4SYo3TEtJdRA5",
  "key21": "5dr4JhcFodJifyzSjF7onCaS57r4LNuS4pLZ7BgbEMAer8y5QYirgw86AXtTsHi5pC5euUw2JEAuTkhqEN81CQq7",
  "key22": "5Y1dUpwWkzJyxKJ85JRFpsAiE4o7NRrf4DVdWV1wNAnipWNeWmNkMnJKojood8hUBFKFNUFL2rG38oXG2e1z5NQc",
  "key23": "2eNbFV2G3j6ihxg816b1KL6pYNyqUUnad5vyS2BJZv1qxrU26faS1CucuSVMYRtNjd2PwDF5LYwJAGy3M1UQpChp",
  "key24": "CWrexHq8ZhrhuDu6PjRZFUToCnCCbMXEHaPsd9piSboKyo5TtVwjSh9zJ5T2Kjpe5NBKP9SpNkPiyE6GAxo693e",
  "key25": "42oURTrWTjocA1cWCHQnThYXqh4are7QdrzvFeNo64kSt7qPfxyZYXU7ZoL3sLi1vNJjMfqtb8KkTF47odL32Hss",
  "key26": "4X8LBttMRYESMags25vR8LSxyXQd94pmfpEzfW28JuYfWQKc8trgyk15n35kDTfk4WZeuk4fbUvg132vgqYdSTXx",
  "key27": "47iK2DnpWFbwiUSPM31Dg34WtqkVoUvrzkbRX874foAxVSNdYExxkeiD3Xyge37hkWfR4tDhyCtFwvnqUwRyaSAV",
  "key28": "4njwDpXBHRBYMftuirLC8G9vSZh3WqRX8VNtvu6tjwRcXSQZDL778VGi5nGhRQtFDkU8193G4VNG1gUDCGNcLJ9a",
  "key29": "hjac1fX9QY8GvM8NHKyhTdVDoeWWY2MwKH3gYGCUjVkUCtzRzVeyG15bWVrbuLHX4sHK5iBTQXqDCyJ3c9rcdXU",
  "key30": "2hBUkB1JZFLwAjxEKDwXhcmzXDC4PFNoBqYsFQiPD43qphTvk6D5LXK5wefrNEmi4vC32eT1go8uHzpJzhLZRbm2",
  "key31": "23kyUpC3ygmChRaVKYfQGpHNgcMm4SNDeKp2eLoTzhn6DWakQgwn2LKXbKmGxgCuVtwU4h2tctAZVkTWxzCHTvHX",
  "key32": "3V2TTwXwHMPcJPYmpUjeeMgJzKSeqLTeR2zNJtBJXb6uMTE9eXfadEzznYdCaJFznWJGVGL5HJWqFoza4a4fSvF7",
  "key33": "4A1di8wYMV4eApi8Mpnqh2pg1TqzkjSfUAJCncTurTPWMUus23Mqv8FYoMkK6PPFiAcf5kz3UryAHsKfXkqDWBH2",
  "key34": "2typd7bzNrM2KP5mKUGtfTHRqe3rEd3Qo7ySL3pG1BHLYeQugq6FedP45hVus9Bb7gyt4WDczqaSpt6V6aXwNarv",
  "key35": "2BxHPy6q6aiTx4EmnyyDbqeKAGbwbaiamKsSUGLDcps84RaEY8Ck54LT4xLyALX2kcP6eHvo3h1YG8SLnDdB2oKE",
  "key36": "iEJGMERXfhDrK7j1mUebvi5ZcxYcDASMhysASBY7vTSMLTSYGd2JZSfYsv9jsnARUP6N9BTd1WqwuRAW7WmnedK",
  "key37": "BpeRCtpMbBDkR5CHEZrdLDsFMXWzv1TVm8XkPBZrHBWDfvWy8ozocqTtX6fNoYUtzppgGYFeG7msYB222ghVK5U",
  "key38": "4Sh14sL16R4d7bp7W8NBXZEMCnBs7DjByMJQsFs8TZcs7FcqvQKra3qeTWW4ychNuhj4vJGV2rZZUxEYFUzFcDni",
  "key39": "M6jtvRPkNKRsAxNTAL28BoriuC9miN7hhEabdix5Q78K6pBRKUzYqq2BBq2oSLxHbf1BhyYNkxhmdpb85GE8z4k"
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
