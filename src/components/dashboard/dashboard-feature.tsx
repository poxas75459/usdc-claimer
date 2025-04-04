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
    "2vTi9h8fvt1UPCFTQcVQB1EAsmMCc6uyjUj6DaE9s3K3i8eX5nFQfKbNgSGtiWjrPzZNJb4L1faZjhdm5TZcqHSN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GG5855k4zQWdLjVDyLB5CaeZiBfm6QGuZjgdwVsEghefyYHEwBfTy7xFPJyLwDdJ7SRWaB1mG1v8Y6QZs39PDKY",
  "key1": "5ijHPjDLr3YAcu38UwxqrdqXDmndDHzLirEKizoxdYGHjFkA42YZLkaAkdhQ1M6vEkiJQQw1sWYmDDXJJUdFRyWz",
  "key2": "wkFpxR7hbQkfBHqWL3hvq18QBcwcQM5AWpU1bRksgyv5tbBDG3PhBSNhqGuRsyMmgLZiUcp9Mwt1nnX4UPSZajC",
  "key3": "3iCdjr3m9wS34cwkJyrDm4FEFhUkstNHJWeFGqbXg7ApAmWvD1yR4xS3ggo7X6kFdijV2zbPxeuG7ag6jAGaLA81",
  "key4": "38UPtCaSmLSRexmLSkK6uEaVjp8xFtmDUuZrMqie71eQh9FYvHZfQeDnMr9hEb1EkBzqLeGsWNEHF2h22JcyzXXT",
  "key5": "b2cigpHLv5SuYndEDzDHagrddn75vRwmTV8NGVJ9kFJ9JahgSDSHsLVMvTS56ECTa2EhApcnq9J6zZHVTKtcs9p",
  "key6": "5E2VYrif3pv3q775hsLXpAX92zbvk8KkzC5qHpkdAwGKt8cV683nPBB4gCTmXb5PhE3QAAh3mM9zSTSf1j2cnwNC",
  "key7": "Ag43siFafRXLMC9eRNYt8SZCnXAZxKi5UrrQyZzmrLLGoaMbW3sTogeqAzH833y5614WccjH9mmYvSYQbniKTL3",
  "key8": "2CSV5PFZysvRQBANa3Z2h4DJ9RcQnCQ43aCakbPT1yTCECEKZVk4oY1tyzxVBSapwf84LK2PvfDz6Bc835AsTkiB",
  "key9": "55f5RVGzAXLeymYJu7YHTSiSyM7sGxWFN65mE4zZ4R9fr69chzzm4Zt77G8WhALYqw19VMqCvC7KP8k7uCZ1CVqs",
  "key10": "2X3fL7q5i4GzPf3LkiWQVdXrUNwjA2MfZraRHWaAA2BcbU4AriLcAJrUgUeYrCknE3DMtUKzxfRVJaYACrinLsrG",
  "key11": "24nVwYtwtEYsPeAD9Zrx3bQsuH3k7bqJtqgoCVjr7sDYYF6FSiDAZGTnkAdQ8Z26CutpCp3J941y7NGkjX35ZkW3",
  "key12": "5XgZEwuBVJRPBH8scTyLotXjRwGYfiMvUVu8spEt2asb8AM9vSJfvLr3mmKsGCYiMn5r2eDa2e8ebbsq69zTbca6",
  "key13": "2xd5JiiVYH87jXWhZ9GgWiRykxAjYQ9vGQLqJkrgYZQC5rUXNFrrir6kDuCR7aPEoxLy73LLSwmH4UztMoTvZFsC",
  "key14": "2hnUqRDcSyMWnfZQbcXvmek3cHDfpqJptCK6v5eoukXEkA3CditxCk8PMVrmtzZCznTZ5kAXWuQ5JUfDKZrq41j8",
  "key15": "65uDsLziNXH7cRjzJYav2VMb6ePiCLSWvc11Du3gLVYC9fjpk14wauKaEZ35QkWYoi57YAfmzYHwBwGyjjRPDRPV",
  "key16": "4wqPBXk1Wj3fLf2W2uqdNLnUSThhSZWHgQ2QP6Trbizpu3odQDmJdKTvBPhvWEbxun3ZoYe9ipokZT3KaMpcNxDc",
  "key17": "4SDXQd3k5FZ5f3sthUwyeAtp9znReXEK6xCYBV7oonjCoQox5EbTgVyR2ih3VE82b1z7EsKKacvif8Xt9RH5fY2m",
  "key18": "2DopKVg6AupD8o6MGZaAwwjZtfyzX9rpW3mAHme2yZX3yZyWuu8vyM4NBkSzd8YoGyzzjaJK4b5eoKkJLsXN38cw",
  "key19": "4kfcz6qwoXxvhmz62aNSvKJhWbTMym2BgK36LdbfKgfntbWhdK3JFLHWMTJsovUGdLMW1tLgWk9V1a1ZsTwv7QZW",
  "key20": "4e4QtQTCSrZypffbwFjVQ98cjHMne6dHaYzFiLweSyRa29EfLkp7cSwb6NdxSp2Nmvg77XeDRAvZpzWcMaUGYZd4",
  "key21": "3nw6mRfQ9FpbSCDLGgGLuPpCFa2V63sKK9cS9nwMWdmW3ptuPddmzEhhXW5te63LxkwoMaFb3a1Vt5xafEqnWQ8r",
  "key22": "4Vx7udkBf6PhMjgdSQ5urrLW3EDzQiJxcAiDrFUKcdjzFg7KWP2rm4qPsa8iaVoQDb1DqSEYK2XSKoozjykFEKHL",
  "key23": "4qSbKgSYkneXzYeW366d9sSthhCoz4oLC9HaynPv5fS1AwxnPfJmhoZZYeeTeX8dv8D5DP4gsGYBvYhnZcSFYNVv",
  "key24": "3oc9HpVUfy78JXZ7iaRuWhMziQZsp22sqjx7srhU5xtq11Ci61ey5KSAknC7gnFXTDJ66zjJdiUX1XTup7HNaJnT",
  "key25": "ZAiBLFKwxM88UbTi4vxQh37zuSE7V81L49VYBykhKkpdFYxn7HZKWFa6QfugrtY2eEXhrsSzugAg6evHpLB3YdJ",
  "key26": "37bpc7ojPjg6ocCFqKhTJW89YLyyUz182EemgGF7WpRQRoXwuaHao1BuwcLdFPY3jVv33Rbc3BcQbgFkw7Hkvccs",
  "key27": "672SZTsTJ262h4u4UH5zpd3whemFWQjg4PqeQGgVAVsDvo1W2iEWQVBLJqFbPkU3pdexNuxVLeAaDmFCWhW7gTVU",
  "key28": "DC4JmtjmYB7Y1KiPzWa6AnB2xhgA3HmqrqfpXMJaS8tFoVLtdRcJqtMe6RTDKYaHLBrA3736uCsKrnpTCi9PQPU",
  "key29": "2VXdt7UB4UpxGPjAZtk1y3X8ecEDbhUySB3xYs786uAHL4n73tMUDrM9ftXHJjHW9vLX5WNDLt3VHj8pwyttQ93J",
  "key30": "56pnXDfDjxb9LGEEC4948fJdiuzUkuAmM8UYEQwkZ3yUcX25Lsk8rwAztx8yqLMXb4BVUbvDePNeK4FSfb5yUK4X",
  "key31": "nEZmAgHZKzGT8rHVVQx5fqggjJyL4uKGWrF235X1bRGgJvp3hmJhvygVZM9GPipLUSji4LkFgcoJfxL1ixU6y7i",
  "key32": "C5cr32m7pcYUPXfrDih2FfDeY7jAoaeHyrNomwvs5nFTyr2CfmezTkuLwmcLzCQq5aLB5ZEh9A9DscBhdSrFR2r",
  "key33": "YAQGKsU5efAtSzY1FbJ57dfVxWmXe14V4GrAfrcShsGj2EM2LW36Avx5v5qEZGA9fAaqEx8WTYWfRE9oadPF9m5",
  "key34": "3momFJNAJTdCTozq5wrbpSo9A6fcDSB7MqhvhMwxcirJjZXGBokrqy7rtQLgNJN95mDNwjeVTsApRUXS3uorVW6a",
  "key35": "5UWvzZKX35ioAovFjKeUqPiRhxDLMmEEFbj649QxAu5M89PhgGbrXRpxYAXEK2q4xsw6kwD4Yz4BCGGD1cSfxQZX",
  "key36": "4YZ9jjZ5zzpRGerSgRqofHuBVmERaGZiCHmTjiMdy1wZbKxVTwhteuTQX1BbwkCAeuBQZ3AjD7VYh4UmQEfnRv31",
  "key37": "4wNf2vZ5jGpgYwf2A3PzGhUBaqMtBMJFHhwMGg91Xgriw3DTnTb3Z9cGwon4YZwRhyHDNPFYGDBh1uUdhVNeHobm",
  "key38": "9HrkEJAwdSEDnnuvhwGpcT5QeV3ZdW4HwFfb8YRHQE9M5hgnpyYtpBB75wBCQjeFxXdRSW3w1nQtkVU7nLZn1A8",
  "key39": "5s9zyUrCzHhNTejjFAkG3WHvo5f6Je8TP4YKLUgVNNrw3rgtHMbFKU4Fn8sUYttd5x121ZoZLrFoBJgffL6sSvPU",
  "key40": "29TE72ivAVV8cJF6kdL1FwBgSLtacdRz7ocyHx7obpSaXQbm4vmaPektX5toyRNePo8W3cAo7zrexqq7PY7xqr33",
  "key41": "4Dnk2zHJMPZ9tASDa3WToLyhk4bdswKccnYathF4S1avj7yrB4qMBCtr8AmvfDXGV1iGrZ5w1MXXdjrDLxdngzve"
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
