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
    "4sZSXZPdUdHESLCKtXRkvtVGL3nZUsM5qc4wNmbYBDXUabm2iW4d9jT7KwaczBE6Zizt7uJqMMBpJkC7NkEA1ZUX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2m6JiohLEvw9ghsSjGwRRmb48AnDYwk21eap26h2H7dmSuXavvkaYCkejFHwKwWHRXnQeT2JfpYYRiRMBhpgWjwn",
  "key1": "45rihZAmrhJSqqWjtpdgSnfX5eUs4nN5ZeKxiZcqZup69s53EA84NSSCdXoGs2pmJw8gQdfrAHeoDvx4EaNLE5EW",
  "key2": "7R5Ca6HPMpLtCiceHZcUrMvxXJuK48UD1ZNTAxk6wWtoQdJaXRJbtZtJ7CRMXLmA8TUhsaFvfmgnQqTHLu5sGVP",
  "key3": "2PNmE7b3GF4QQpCRYasAPKcfD5wgeB4BzJ2YHLo8wSiRESxGTTDHNG7iTWvoN6M3xqsesukCX8rVnnLtq2mXGbr5",
  "key4": "3V48Wr7odAzARHzaCei3c97b6B9gkqUVUFq6QuNuM7Acovx37vjbKKbiPrnYTTw8qTwCeMYvSGfriQY4U9X82Nqv",
  "key5": "55MsowZnJhnaXGqn9a9B6dxA2ZE7gX8AU3NQXkKXqSEAuVdkycc8eE15UfGLHorZFb6zhZ7sU1bvPG9opT65CDr4",
  "key6": "4wWAdWckhqJn79sxEYW9kj5pFv2krKsFMQAu2MV4DW7gLpFYngu46Un5p8J87GzUcwf8ihUu1su4WkMsjLaCmpMs",
  "key7": "33GatyGanmmqHBJQnj5LiwiTpGRrSsBuYjgD474XrVcz1oBm47FegdixmvPkcEzGyJ5sVYjym966KW4rv7TkdmZz",
  "key8": "4jLEPWyeL8NEddvwX2cAY45Myr1kBwijytjop5ZgWQWzaWRA8MLJ3PqKwG6b1GdvBeduRezjDZMgH7gC8BFTQkgq",
  "key9": "5VRta6DfkzS64SzXrhCdzgzvhEqpmgs3EB8YeEFiejrHRTxKxzFX2GtH9gM7HvFfGvcMNRQ6oUfuChdghkveaNCn",
  "key10": "5tmPDcuWZ2kjQE3HtwQFMm6CHK2UjaQPB2PfuKRPPA7SCCwzZFwVvAjqQxVLCRwy6ZTGgoLBGzAEwaweozjxwfbN",
  "key11": "4W5AAHjRk7LUmcvBAnprefcc4XwivzqmuiD7KURYhZQjF2zutegdzSa4Ks6bEo9dK237DefnMzNymTGYCud997fz",
  "key12": "3wCUS9vEV7rD1XvcW8UntXPd6tPYVhLXu62HRvmc77YgtqVtMLsXSEbk1NNf3jKHGCRbbga2kKaPCgto55rBYyfa",
  "key13": "4ogyUM6YTixRNLRYgFvzXXuXmNfUDe3CG3CFAMF7DRgRcuGfDVGUxdAqnbw9MwPdkYABo2e7WZwZoXAcRD3bYzfH",
  "key14": "4cuwMGrXweapTznfB5Tv7yFznBLMc4H62YxjmwGUZjNgPwCa2KLV3HVShrEGRLQokFZo6AB3HwmVDis2gbtKd1Hw",
  "key15": "UsJn3yrn7U8dD2go52LhPCUct3QVBSje1prifNtqY4tGxXjiDDi1Z8p3uUXohMMJDE3JGs6zCt6gRmfWhYhEf4L",
  "key16": "2s7J8TyzGyL2qnG6yuaHnVmWHDcseGoCdPpA3YVUDU5Dc35PWpey47GL93YVWv2XCUNqbtDQYs7nZXEZX97hpsdK",
  "key17": "g2KSQjWZZ62CAVXLdKYLvr5vH4HJFn587nihSsBYtA4wBDTGFgoFBzNSpuf5QE1vDyHXhrYTponBi6Jh62BE1Xp",
  "key18": "34UV6cvXsknyB9Lkcurb7RFgEy7AYrCE9bxNX7GZUvwsG6T7G4DkQkHGxipi5LwtNYmCJuPYcQUQ63bVW96x7AQg",
  "key19": "Dk8yimq3cXFJMJgwNG74GeqqdW82rwrDfGf8oppLvrnHdQ4GmhL2SkLUyUwHrVSsTt5BQmF4icDQXvcgBcbfNAv",
  "key20": "5fLKKjCoXH8tL8XJ4DEmSmaQikazhFd2xFsHe3dmqDL49jryBvCtmfRESGYLWFVk978nWFmHrqSetRVLVVsHjpLi",
  "key21": "2r4c6K5afSeXitRRfVVqu2Kup4QGA8VMx7iMmSUUUtmqW77UkijSf1RmPQpBpNLiu7Sd91i8RTaZwGpm6e4iMHAK",
  "key22": "2Cpa4hMVn45tirXByCjzghPiBVgW21WZpFUWixmxPC6xdKSFT58x4sMbXWUurFtHUGQm4DYQCcXzqhey9HYDCZjL",
  "key23": "5yUvdMJr13rbv2CreHoPrff365PHK8xGuNva7347VmA1XTgh8E15VNMKFgHEnsJfFYHnScF4L7bzQDtBkpNApYJ",
  "key24": "5F5Nj7pnz4DV8irDe3bZ262LwdEJ1C8HZKEAb8dyy54eFQr1BKJirnrdujHGqDtrpQUC6bDw4uc7BCT9Zzy5C3Ez",
  "key25": "2XG9b2sMrugsbriYLpPsfb59C8WwGF1FtjUWhzFqE6u4cZG8t9Agaybuhgbi7dAYrv15m2QVYVqFCZo49Nk5Ed8f",
  "key26": "3XVdMzcTcGfpYkRzWgEuMpqgHxqR4F2KUJwMNC4NzHGwAnZZ7oVn49GcZX6SJQsidPE8fFRHobS3fxXiAhs11ZBs",
  "key27": "25JoRDVmoWhKEkfjn6CZk88pBp3eqLrK4tjB7SP3MGqMMx5VRJ9CLEZHEpbeGjq9ZbU5D9MD5tsytY841VkF1ciM",
  "key28": "5V6oKb6goZofLaWkV4JXZt9MgELwBbH88dBVHYr8BiFf4z31Te9QsVuqDEQX2nziJSg3YK4mma2iyyhL2k4Yn3CP",
  "key29": "4ftvtDJmM36EKxwhupSvcQApoQd6HeCkyj5V2kCHSFaGdUQEMGDN2btDrDrYtx83NJoNaEBPqubByhbHf1oS5zFR",
  "key30": "2n6Vc3YL8e2S9hJHHo7mUNgz5dxgLzcU1oW5C46P6VmMzidbFyEBmebFvCBaSEDaBkD51W5aqunyPCV8Dq9hNtdb",
  "key31": "63SRMMmCmjxSeWGKPc4v8Hk8ZC6twXxFjLNhtVHKog81iUqBA68KF83Z7kb85ghoJG31yP7ebqa1WyvKvXTb1Dfn",
  "key32": "5iLTxaYPUAmDdq54dHa7fAGcQrPSrv2zSESHNUzDiZkiQ54SP7Wkcv8CXEWhb2RwMUwXLCpgD4MSaWHFqxgq9oTD",
  "key33": "wqn5xMHfMnz8YbirnJS4EHPjhDgAfkzF7FMy5otA6QfddVsPmnxf4ovBWcysmKZGGCmE5xCR2UjJodgAkTjLDZV",
  "key34": "CgTYox3EvfuvfhXg4CKfguDYXUdKAMCkKEojpCBzUYbV4eyCTgj8g65AuB5hFkmrXcxgNRNbEevQmXBn1yqZ9oH",
  "key35": "cz7JLCVXdVQcMJ3CEX9xX9pXtuJHKTPLRJRffD7eNUvArdeQNBKrcPSNc2FHbWxcFZ7vwUZVuhdB4CKDcgYLJKY",
  "key36": "3Z69faBVAxm3saKpF7S55Cm2u2Jesct7kZMjJQtMqCGRFieuqsu3rWeg7p5h1Pgf2zYgWX1zAHcS32YzCGNsttjC",
  "key37": "x26gTEzcn2ubCF7G2SrEanTq7apabDT7quDCUeJcvaBNBEuuf1aE1s2Rg6Dq8F56njiiDNTH2cQZrrcsqMutrCH",
  "key38": "KLeK3vUoopMSkSUJQ96s6SeVo68y74VD182WTWv7dC9tr9wSGsYriuvsDK2So4K1TMTodqb3VZbSKPVT2CSDGTu",
  "key39": "4DytUwiCpuzgmyL99TjHeLY4oE2wByXi4M6cCCbsQzAoEB4srfxQxem7AhuKNJAmqRpWkUaHYN5apqM2xD96YJBm",
  "key40": "2UFBX7zMDewbH6f5BPnasy3bfmxm4u9FpeGitsgRUv3M4TFsuAVdsZ4Ho9zwepP9XiGhdVMVGhHx4N4WxBfWB39L",
  "key41": "3BciUifZXXE4PSBTX2eGiFgH8npDDsMBjGXW7WPda5zGvjbL5VdUq1i1jLCGYCboJy1bcYzcT648i26j7mS4BpVV",
  "key42": "YqoY5rmZ37UsXKCgHVFHGB5PL8sbbCJbRRVWYHmj1LNV9vEoFKNPnnGWQMb4CmV6FXDbgaKPU1xv5vGM7kgfHwL",
  "key43": "3NxoNsuvAaH1aZCrj4hj4djvsy8gxBds4sxC3rng6vKiSCJemeTEqVL5mLssJokYzNmX4gNBvtsDaQxEaU4othQp",
  "key44": "2dnJuFeaioqM6t56LCQFFB2jx3pu2L5X5K3a2MSEPFMS1d5pzSUAmVf7KXT5qjC1BGuf6rEE5MkDUxeQpNxfrdu4",
  "key45": "ga7mgsJt7NhBe6rahCwyX2XDvK1G3vLa31RWff6ZhmgFVXPjuNzTPuwH4xrDd46P8esTg2FQEofXMLt2kwZWKAJ",
  "key46": "5VLGi2396q4JNDKsyiqATrW76Sizro66y384Cnbk4rZCh2K4RYE1nRckeZDd1LP4kMCEt2WvitmBNcdQCrfzprby",
  "key47": "5ERhRh76mHPsTPYFP4iqSCfoFYB2hZ74RHy66uny6nUpWCZ1oRJB1TJ1VYjtabWNYAwVxyshQPeEtD8iSBn5wUuM",
  "key48": "PuKoi4d2hY4MitzaBKE8jYujnBvDSVR1REehodPLky5gXQzq4DHjg2p6uEkTC6hAfxvtgr1AtuQ1vFcnqhEL5m5",
  "key49": "3fsd3qFvzAHqvw2Yb34YmpHSHDZtwu62k3vDMcZfJvJ9UKNQYnxPDiJEU6bcw6Uyg1MAhsbTdE2dd63PSFucmzZa"
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
