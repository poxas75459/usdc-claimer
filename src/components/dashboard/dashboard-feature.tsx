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
    "5TxY3L6pny7pJN2Wm4xrPVe11Kb2Zfj7fwtWW7AHfA6FCY3YkuQaZbAd4qDAPN3hzLa4eVDqeRYdCopCUWnUH8gA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25dHoAX3omRHNgtZKRogu4RSGzDAKmkLxj52D4wh2RN2832GjHk2rZck928kMRpwLbSDbx7iQmDpirBYoNEh2kMr",
  "key1": "55MfvMwvuBWvn4PVL3ZUz9MK7HQfXSShjQmSkkZBz3xCwSgnTsikuPHCjBR5QgQ6SWxEEdh26Fqbo1bwT1B5xyVo",
  "key2": "3xwhnzi1aPb1fhsxm4R9KKx7EjsRJN2DZ9DATb6Vvf7oVBb9hbCeTRx5wEtVzTE2Y4cNKC9Nkpw1UAnK5CgNFUP2",
  "key3": "5XcTBgAPAz8JPCrVf3eXmLRDBBBdhenHHZZtqiCB5Zx8MWqrBmePs4swg1BXigC5rgfB9UWneJ2XCwKA2Fk1EHcB",
  "key4": "4GXo5aNbQECUshRMaRqF4zNJJXNes5LptF8j2CzeWDwwAopE2FNprRA37pfGJy1jCJiUBHqjkvxNTuatGxay1Hxp",
  "key5": "46UHvwB1YJqCMzo9B73EY2k9v19GT1CWed9kPkiyJxL2puMyJou84anYik9X8umksS2tG9iBgcGo9oVwA9bvGmYu",
  "key6": "2KY62PLCP1JSjBpbEWLmZUWT63nG3fjMo62t4T4WLUkaRsG4x5Rrb5WfrLRXoyeto9G7bXa2P2bTbLYtwNtNsFLe",
  "key7": "3gumHtC1PWMZYniqMckYEqcFNQ2KmRHS7mv3eWjE38TLxfKFos3MAJmcJgqWafpYu6cRYTGrY8J4zBK4VrGTM8xD",
  "key8": "57WNCXJrfDTSEcHXYG56mfzyZv4uhFsd3txgzd72sRMiqnW3p9RZpyiZaRtD4LhCfM3HqotBbJEqP1NBiGCw5M8b",
  "key9": "5vgRjMSh1gH31CU5rdX2Pu13QX6bS1qA32gX9gXF66K1o35YTzkBnBCpWSZVPW6QGeKAYQNAQtCqpFUQRLC8eftA",
  "key10": "4agUyqQgH7twio4FUdn1c7Gx7mvfB1pPLSBJZv1tFmafAk762BUPZ6F5467PgxhJgatAPhmJF7K3hRBADQErYqaQ",
  "key11": "2R2szHu3oCe9QqQxMinBKH3Y3xtXDfTBRmQxjW3Xffy7QycQkMkb5CqfMpPis55zvd4T4VMoZ1z46PoLUmHWpVSc",
  "key12": "5cwXJsQREbSi8933StB9ksz4WbGsydWq6KLs54kPQFaCgUncot2DVwaJXKDQgJYanwRCqJaCJtnxtFPYGuBTCsB3",
  "key13": "4zYGCLj8u7B7rgo4hPsFEWQyBv1759VgA7QiFzpTHwtJTQSfNjvvz9Kz3xev8PKVfxVnzu72HwzpAEijJjC4oPZm",
  "key14": "2sDytPTU7fu1FWRc3grHjn1spdA98rmqk1NiYwvo5oCbfTDtRF6WJkyAUFjYuQKktyAaAa8QnXrwZ5jo4ip5ZwaT",
  "key15": "28RdActg8zssRazokSiq8UXoreLJ6GKqJJxuwb1NqBeYqYSdFSwzRjCSQmWJnjAzZmHtj1w1m2yYNW525ehueRHR",
  "key16": "2PApVWNsVJjdnj3NmD79ZHtFtWLH8zcCVyPQh2wpDi4ZpHvW5hfgdbrM2qf4H8kvFczsqR9eFojtTQLDj8XDN8Rr",
  "key17": "4m7acse1npSgiUTEhvmGqdjE2G66dCd22TM42N3myLHdJMsQniDTcyxQmcHCC3iat1fj4DLNymBULCKEnk7UxoAC",
  "key18": "2UQEdyuTDFvoCUvu626XpZQ6m5DMuXZEDF2hRhJaqyKMnYVo7kE3sPmZHwxAhJgMbpf5Lu4tcjaq7DHmhjtRKAfA",
  "key19": "56xkFMV2ChuXYfnqznhwLGiqVRivHvxHz1wpcxeUvveJujjGneRntbxXWgrjxteJGpFG36A2eH7ruZeM3n7jNKgu",
  "key20": "Cr9BXC93tTRHhHkuRjgK5JMzYtiwj19uTy5jxZTMKJevvNMfJEBcWBTsSSwPxgodotPn9Ax4Dm314XXPvUK6tDt",
  "key21": "511ANAtjzp8hLm5FfPAhPdPZBowBTnwmyaF6mXU1WEKfHWjq1VxX9hYmj8uHW64uXLiSR2C9joyU2EysoRMfAgTf",
  "key22": "3Vp3ERntT4sqhNsUSr6VtQiZ1R8m3T1QG2rvctE6WWks1CcjfPY4SgDPE92zGEgBq4szzcoZwVC8dKf3WRn3a426",
  "key23": "tE63DSzKCfvxJSLssEeMu6TF44MDhjoWcD3ATYVisqBvyVtrtP3nPh9ZesM2TtXDvQXPhgYY9dGespmEvtWpZUn",
  "key24": "4E2Njs93daUMJxngx7jGVEj5JA9QfKzEXWTqcDHwUHwWGwccHxTsqz7ttLC6HCsbUW18L1Ep992tCdX7mSQURHhV",
  "key25": "2xPXXJ8W7Ap4EpHpKjUxNM4QUCHGvuv5CnYiQFGSwGyn8b4ch6URZVrMdpuGMdr8YVdc7AdVt2zptfX3rxSESahp",
  "key26": "3JdvziFJoNLiTtnfnWv53Zs3a4buSwCJaJSFbZjq8V1MnKNDq2w9Q6HfYdx9Pe87pZDYtQSaG2bxmtTb1f66HkE7",
  "key27": "4kWbDseSWDKg832tVTuQZfuEGrLvcRywJys1xfDs5xHNaEENe2NN9uCszpJqh73bHm5zDW1duJ7Rc5kWWjBaC57q",
  "key28": "3GEsucBsbi9fLN37aa7ETCWK3VyrfgNMd7wdXZCDpGMMWRX5s67QbgSbBCqBDqBYodp1bCMu7Pm3ASARSnwTnqWW",
  "key29": "43z7zcWtFSS7XtLjACu9NzHs1ZdKWAG3DMpisR7SwtA9CsbxrdMMZguV48CXYZMa4fYAcfYcL9JEon1BW2TXuryL",
  "key30": "QCeo7uaM6EQcv9k8M6UECB8jA5vAQq2z7TsoAtrUr3oimYiQAnRBvLkVM3iTomALWbMzS8TGScmgCLfCLzjfCaR",
  "key31": "34VrXRfeYwJ9zvXEpuzQT4JLQRpEfZwke1mPv1onNtrqQqhwRLoCiefFhZeRFFppEar5AMZsnetDDJV6TuBP4Bhr",
  "key32": "4Eq39graz5ccLSKr5oqpcCnhWc2yqZ8snkeP4Q8Q3Zo19yzYG7zTEsGxiuiUDgPLyupgyU1Kqo8sMuyZgQviDpdt",
  "key33": "2K7MH7gdXAYsLmAJCq5jg68VZWi97zRnf5Kgk5vftMNhv9zpLH4rXH4eyuZ2gxnmVWwJ4vD4M2R6HGrEUebAykjP",
  "key34": "4CiMEcofU64jM6Qev4XCh6SZngPB1gqU9GKXdreX29BbcHyJvPPTvkFPVeTagxREyq2W3C74kGUEjzPKWiM7JkZU",
  "key35": "5tcqw3Q3LNNap4sJWXkRXdF1TB2NF9Y1KiqAbGzwFCZ1JTcbLdUijE2iFK8J7wNckJisvPoJTaKPAHMmKjRWNA4c",
  "key36": "5Eg1WarLCEhhfq5iDiTBXcub39n2STBpAFMCFkZHCdyYNNAhh1Y899wrLrBcuqwouvMnKgKj1bsks8LEAuzdXSvD",
  "key37": "529C6ogpRfyEY6AJU4yRnmkG7piHkuB2tV17yAk9GPqx1sW52KoAxVgCTSS48uFpf4xgadHqTM4yrDAwDWNriqsp",
  "key38": "5CCf1LdNHT6cA9T4E8xtk11XaRvSNiNqnrZudW1WgvXckExArqF2BJTJcGvjzezBnrdhU6MX5GH3bpXVmTdvU6aw"
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
