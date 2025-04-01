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
    "NDe2aGgvAdBabGDowiX1QHHaMhgfJukpETdAoVzotFBywNgyPyP3mKgi5tbyJv57utWDiAviPbXsc8XUaaR53JW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "548oRw9AfZd25XzEnqZFByQRq4STdEi1twntpcJZzxqLx298BAFD8Yjzcp4c1tMPGPiASYH7f7JBM1QTdHKL7r9i",
  "key1": "59dvL89g9XiCh4nbfJerYqPWBm1nHVEXCBoNSYTWJQNyjVoS5LDhKQeTr4RCPWD9aK78hvYBRHqUK7jwNLYBk6cm",
  "key2": "21KDvQgAe2BTSg2DJZLVgozLXyw93hbz77X2EmmY26A3ZBMRbYSKu1nThjPLWBEbhNAtphzAWXnKV7qNTdAVhufV",
  "key3": "4RgthfY1i1cTPSAAJxWGsvGzvDXC7sora4x4VB9zBya3gvnpCN5APnsj8yWdtPRwk3diDpkKuCKqnutzqugNuC7q",
  "key4": "3YsPfdtQSb3keQqGGd1YgPieUbZ4pceTkDpnYqfJgovNESQSZd99NZ4bNMzaVkoQsDUyCctNiggrrTHFPSzJrW9G",
  "key5": "3dVfgVJPsWYEtYwuSXKWL5v2uYidNFx2H8Nj3VcLA3Dxgec3kFJfU3D5d6KTccBAhrwk2xRfG68MPw2izYJJUGPu",
  "key6": "3Vmiiox77Jj5pEQvrGsqq8kZ8ETpQeKo3hwUSSLsQXaiLiwr8L7NKWC3FrVK7MvqroDjvH2VYQf31mvzDyHFiCD6",
  "key7": "4bffGMFqs8TtwRMVEKaiTsqt7iQaKZ3W1RQX2UDJipwBVP9Nz3iVje6NhX1pNze1LobCukSjXPnroG9tBXkF1LK8",
  "key8": "3WvaEynfKZRyJo4RdzJiiCvBTTqRi7P63b7y8wnkTBSN17garsKJs3mqGR7Qr1bfPjEWC4wqiEPxQxrkwm8ZwDYt",
  "key9": "Lc2B7zaskthfKXLzriRPzcDYz3tGqdGcrWL3UrANogn5wBxfK8Xvehxr23NKB8hVwzUtaKtVa5WdJJrJ2tat1fy",
  "key10": "eXnoySFMpoSjXC6a4NTecEKUdKSuwrmrJzDjwBbxHgUiX3G4EodtebhaWb2usr9ofdvZMyc3pJAer8povDhXPmS",
  "key11": "Vq5i1XJPFUVkXrT9W3tzrSfhBfSJgj7ZiUv7EwSHKbRUJRHvdetQPx5C45pTmCAoCWurK83FCGJaUVT5gikkCXC",
  "key12": "5LSCK9MTD18feXgA5Ry9WtY1AJUjMTeC4E2C9sp6ubhQ3S6rksBeBPxpWW6jcPYD4K1waf3sSiXdn8wQMZGMoLXT",
  "key13": "XFkMiRhgZNAcnmLZR4XNAKZoYrXFvhris7fqDbCK8T9Lxmigu6R4kzETJhEqfk5AZrdVFSyRkJyoM1qiiy7uRnQ",
  "key14": "4PvhgXAhKmS7MS6opi4KNSpZnKHE9UofPCacELbfiUgH8eNhqQDD3z2Mfs7NVm67kegEsprzmDeetm8rdAWVEAag",
  "key15": "5DQ8qzU2EXYCEiJDwgZgADd9PVD4VqYgfXAq1MtxuucwYTY6XY2svr8GccDTY2UZKurzcYreCVrAzgyUYbwFQnRE",
  "key16": "24rzHfNXpz6zsvN5JZRTafjfbmTprqP6GipQC4Vaxcma2tzAquJwJaV63YrxX153T6LuZGFjahAMC2CGu3j7P5Xk",
  "key17": "22qBY5j7yM9ia9YbvDfXHX6ktCkcZitNXBR8xRRvaexH9DWvUajdeKdNQqrp4Ejb7D2EfRjfD9ShYXWU5WYooPmN",
  "key18": "3QE5HgNzYJvKcJw6nRgUz9n8MFAKmeGxdbKS4Vy2wJjobJcuzKE9C98fCTvSYHShLLWrQEJWgmQAVG3cinW8JGuR",
  "key19": "B6oHM14iZCfZkzZgK2u5Vcjw2wekVVwLmq6R1PGcXND7uNKYSKkzuFW8KhPP1E5BDGJVjfswFLdVKRuLwfkye1w",
  "key20": "4kfx2jCYa3ysNSdnqEUZmQ4jRjNZ4gtkqfobSUKyt6MREPWH7YD8Y35cKV3V91gHQPmPu9eBztUATz5QGkfLUb7t",
  "key21": "3A5HPxqCjnxRJu6T6AohDZs8bTFBeNXLmJrHAntH2pbi4PvixwM5mSBiU18s2VKzF2cr9R6G9WaMXGHT68xNeMBk",
  "key22": "58jaAM3ghz4u9yzTg2wk7PBVaqN5EiUamV34WAEVzaUgcLphMDRyPFERsNNWPAo5NTRdSV7sHigJiNBgQr9yDMB8",
  "key23": "5E81hqsDpFx18dqyPNxY7e87713SP7WMWn2Yh2wh7j9HF4BeGqiesothHNhp1Bfftg9nXmvg4NNPvSvCFaXK9PwG",
  "key24": "4WSNnkcVwkCxEcBmSFvFQSjFfkqdSDGhTfeKCXieqqXw3TyX9MYvqTCW93QUPAG1jLkHvGyemkCM9XS7NDUTPMjn",
  "key25": "359LWRgARkf85ezXar9A1i5x6d3bWndBYENmCxsZ5WTfW9af9f7rMfVj6WfBvdjaJVLRv9XK7UkVwXGWX78wAvXg",
  "key26": "4LcWhuNhUsDctnSqkuTtc2oNdLNT4yQttzewJ4our7fD1z7JY9taCAkVmuhU22fLdVUoYeRivHvPwN6tW3dfiZgv",
  "key27": "wdBFm6fvCGgUdEF64RHkXYAg7j2GER5hcV5tubQcAGNFusMRWMk1Uid886KMDsS8D8K445uDKEHXiVjcN6bARo1",
  "key28": "25d6Ls5dUNC55JHNHwHFpx1GcNkJR9r7usuoWfBjUFcBzc9G2qCLqQd42VyVsEZw59vigVFwkJmxn7hHqjPpDd5a",
  "key29": "4kYUr7jQQ8nUzne68jEQh7Hp6vasSiwDznhxp51TkdfhqK57PkyrrBEkBRUVL5iPdyX3Eeo1RtBPDHT6qptSXXUp",
  "key30": "2dGnhMNCZVo5cqhKWtKfZFZ1nACWoGm7oDBwdPsVemdHSoJqSodGaacQwp8XxLPksdDdf3RqrFPgqimd7tqc4pXF",
  "key31": "3pMdHVJf1ckv7q342drTUBiT95SqRUkNFZ2nyHtsVasw1sH9bbQdpm2eyVS3neGX3YBuYgi8bazy4i7SLQFpiTRe",
  "key32": "27pFqQDsyMSqLSXm4SPCcLgXzDSaqGMrzRAu9rPpzgx2uQFVyNTY8FgRnY7DGJ7SG5QVYAeHLMYpPtHMWQ7ELDCS",
  "key33": "3JezQebftF7sgzWVdtpGJjFazehr8FAyqACgiebXfRTf5TyWudnwRg5Mddfp28H49XW2R65GyPorzaNsFL5t7Y9o",
  "key34": "99McwMkKSk7nAFVwFHYh1CtvukoJhR4ZZphWk6gFKYao9BgZc6MSktGTdA1CEhzyQgy1tDxmYCztxByGdq3vmru",
  "key35": "4eiR27krzXJ4f16iub5kLUnaDuXSgJsPTvSvX5HLBPaUyK1DmBiChiwvzciS9jtsL6gwikmHPmBdv1UUpTkEVrPm",
  "key36": "3MT4D8ha4vKszGUDMp7CdsZvekC2NZe3vEgSU6S2SVU1PPsrCECv4VVrhKsNseeJBM7onxdi2EiGDbL8FbA5r7Uc",
  "key37": "2HW6MiDEDDcr2n7AdXsDT59yxTK6r85459isqV2HRRM17nczMjFkEw7zynAcuH9mNPw3wH1nmMxLXSa1FYHdpkp5",
  "key38": "3F5U2UU61pQY2ae7ySEQ96LTR6cr1vCbbuf5Z1AiFLKUMVK3tMn5DCkuRbj1obMb3QGidLGx1VvvbyYKyjMM7fW3",
  "key39": "5t3EAM5G2FVzsDfVC55iX7DNpuFpGcnCFfNkRz7N8mPEQdm69xmMjUvZtk9b82LgUJB9LHAky7AY5btJ5pyGSPUX",
  "key40": "3Qt7oLYseP56Qp3Emnux1VzzaUWrm6QtEJHU3HfLdn9EmirDtyVnHC9Fhg5vnmMBa83ZbT55eAdULjRosxmf4qJ3",
  "key41": "3NShCrxNQ3xnDTpytzTCUTDthGw9S5G9UV7SoKKVfVnEBrZjHkvXAA2f6q8KV3AYTUuj3JTUDhS8wKeYxEU6YCoS",
  "key42": "mnCPCDMT4x6soJh46vSUQUoCYVn55S7wVBHExRKGvwqfvyZSPeWEL582wqnxtPYo8snkeunb4r8dc2NwXzQtFVp",
  "key43": "4DPmowCg585fqwkbdqoLKQgeTB3iWkX5awvdTGZH1resRMvmdLvzFpd9n11M3ERmaJSJ4UqBrD4u1QVYgRvMmFfU",
  "key44": "YFyDgZf28tGBLqPMprHpX9WJM4aPbsfov4yafX5HyUkZ8neH8gFDK5nNEzaGhDtJbFdkAvEfXr76vSPomAwfq7t"
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
