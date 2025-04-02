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
    "65v1f8ASYi5iCe5cfvxXSzYpuEfXVP5p3xk3r2UB9YffK74Jg1YqdxjDtJ8e7zAKiPyZLDPcEKFRh7u88TY1Nc8X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dWMaobgrBu2j3fBmUi5qFA8XuzMvpzLbzdJRatUzgTcRbFb1gqYJfLRJkM8ahcL7fW7xt6tSAqMZuLM2AJaVe7H",
  "key1": "3AZr2qyTdDMZgjtaFiRrK7TpwaQuVVgqaqCRki1YsfbPWbnDHPu3mLsmRNMHhKbiorQmprrf9tNygcvBbzVAwHcC",
  "key2": "4skCkGcV2ffioAnWNtyALvtroNGBvUV83Z3FRR2R4UAEz1i1YPSKtxNdQKReHsE5emAHo8WWsTyPjSwyHrKfRw7J",
  "key3": "2GaDMwj5WYr53Q8JpwjtzJxmCF5Mio57kj2gtHJF4MeJgY4MjgiREJoxWvo628V2eT1ubeL4yZEjgqKRkg3nsNtR",
  "key4": "3W4QG5ggqbwUSwvVCRhesrt8WnHnkuJZ8qvZEHqQvu3dckz3YDYgRkaKP7sRme4KQNojgFFK6GuYzquWKVTpg9g8",
  "key5": "H2vAkgKhABHmpUBoW3jTNBa3H5eLaE8kdxfTc1tFJrZTvVgNfsEQ6CjDysoxvRSuKyPzBH7i8soB4yaxrL6cj4r",
  "key6": "5wnb1ywXwFdVL5Q8vqWKidWKyEtxR55txR1vAYppnYmjFzcVC8AV441peStcX1yvPXtzyorw4fsfzfSsAAJrbJLd",
  "key7": "kp1HSHnkEreGFuRRXeXL7TsKzd6utuiEWohXmHcMFvvfoxeJV6UkKHWUVY2pjZtScYcjTNtpcjRWYYsLfdC7ca1",
  "key8": "432bAKfduQfVgJwRgYX7gBk8EiLmHcgTNU4WCv7eWGVWS6yKhJErpiw9dBJv5DFJqGsDA1vhBgyoXXqnhQrsp7Kk",
  "key9": "LrgszbVA1vFaqCcSmSVWPEFe7mnjobZXG1UjUa5fcTeNx9pxN4G4x43RcxHF6Bitmbj6DeuXMYAvSXtabAGyaFs",
  "key10": "3hQMZsHLrZGK9JHSve2QisUDpZW8fNGCbsbBeB6tR2gJ8PKAFtCJ6VjSoy7qqtHtLs7xsLBLYmhiV28mrErq8VW8",
  "key11": "ybgbv3T9SW3D2Q5zQCDkEfEgQLhiLfws1nUX2u137ds3Mwhb8YwJL91ivbQcbmeUE33r1Ft84spMTpLmU8FBSKp",
  "key12": "2Yu96qqriCFz73BQHKNdnsozhZRuDLRMLyb9nVAVB5VYMmWAm48abz8Pwa9wApRoVAUubPcS3wQr4TZTGv9Jzy32",
  "key13": "5B8uqswqXGi7B8vVpBNpSopn6YuYHhMqCJT7f567hJKmeEswa3y45JPKy2DtUBqLwMb8sUhV6GKa2BnnMoGognro",
  "key14": "67s5tfE5QjZ8AhEqynrQhsY7Ka3pTsCmrpEaAdJkS3scm2thecKfCdHKsGy22gSY9atuEjXAhqkByvNkDHaS9uX",
  "key15": "33PgBVjMEPkFRaDt9jjnJqKwt7k5svfTeWd8PTUEn9yFNKRcrZNt4VbgwMHENqjdFW4cZXaFZLsxR6oPMgGxxxz6",
  "key16": "C3hMhPnPod51N46aifCwoaoQf6LgXU8JVSAQgQ9eqQd3HS2VXEBp42MonHseWcSzo5PhxzsNUgrvYNnSASpDq2x",
  "key17": "4GTAyWvvJCwuuZ9aYjgiLzS8RHsbvhAfH5NpmNh94FVDxrKADfyKNsD1utJHQihvrnmq1Hxvns2PdqfswHjw4z77",
  "key18": "2XnTpH8RU75VVvaWAHttcupSWRXeqL64qneJVeqYu6ucpKiHoWpbyCHy3igm5bd8sYKuWivCcyLPNd87MoFs2gUy",
  "key19": "2qQgjP3MBh28fWbYTh1iViU4wKBd4r73StgUpSsbBVUyjNbp8vfgx3m1ANcXDbmUbqXNvsJ1HF6s8YK2dK3FN89Q",
  "key20": "2rh9YkAWQsFqHoNEoRricnLBUh7KLVjzTEweMsZWGJvzQYD5QM6211eN9djbNtbCowjNRLmgTJSyjPX4i5de8yPa",
  "key21": "5ckyrFaBUkKS4XcC68aNH3MRMc5KzETDdVu21uZpVtnxhpXxRmzsUz4vcSK19ZWjmvGkWUwFbSHaNrEeusTVLGkX",
  "key22": "546shihHVWVjjmqJadHKtpS3pQFwxgJ4wLfZF4EAuCHUjg5KE4JK1uX1XiZ2c8oihQrqCCQWJy6qvvNaVjAfgVxW",
  "key23": "4pKX1oYFUr429xjmU9rc18AiCavhHjhUjHw65pogFmhKavQTR5cXn7J7fD6tQrFU2cAMBj9WSsH6TncJasagrkmW",
  "key24": "2SeJXPmgMsEAsYuNZZYy7m4XR4ive5V1qBpyEQvQ6nMmAGsKNzXxJXZqoSoYopaJcWGszgXz5jfJqrW3zAguKthd",
  "key25": "5UTvn6ZpdaNZi6C4iLkRTxxa3tiVYmSYBfCWbRuDQ2tp5VEmrKL7KSwjyTRBP8BBZQpwDcPG64EoWNbV1x4v7qLE",
  "key26": "5v5mSjCztRNXRMZTSZ5FdzD8ja5w7bTZoiJpyXVMaycAxZMmfd4hJbdoBSnpftYyRTSicpHRcLGvQnNRhbb1F1J5",
  "key27": "qSQmnmYZvuFszrVkYoBMvSgm8xQPy3LtgFRiXddNB62zxhDRn3sGTAThKvTnYF8FY3famV6Hernu7S9qnr3DSe1",
  "key28": "2mpuKAsZge1owZekXwdbq7cSMum6cGTf5iLm14KcUX5kDNGZUQFKh6C78BeQKGhL38U7qffKpLLnsDiu24FRJecx",
  "key29": "3zBTKT4Ti5QB3xiJDTxqQwpEbEycNmMNdCfECofGC6fAXwH5eP4tCGHW5NJ5yGrb67pMqWXnMeQUcpdwoPjs6fqf",
  "key30": "jFu5YC85USipEi3cwJGqvUXiff1AmSZsxHiZfSkPM9HaPbGbMBvzK4mrEAX4RU1DcBAcqVXbbCWG3c5dSYWGXvw",
  "key31": "31rDk1YXh225nVK4fMf7MhtcpuuLoYC4C9zAsoDHqWivnrtR3jMkM2vKVssnTQwejSP65uEwQcAbgDH6wc64YUtp",
  "key32": "4HGbqHGiPBpBowNRPyVZTf2LisJLq3gS7NGGPzbJANYvnQTkTbywmB5qmsasyfAMqUAk6iV9Ef9mGTDWYTxz4pv1",
  "key33": "3jWeZ9mgZifdWwuKwKVXJmPHrmxVUiz2oLvjdspk3RbSDzMuLPZoN3vCAtuvhaHfycy47s4MndHByhnrPmAaGX7J",
  "key34": "49XLgydgyadBaEVQ6GJk5itVWF9QHUTaoDRwYcFeC5kRPP444qdjKUEr88PXfX4UU3GB64HXpapJmCtjGLJA5dZ7",
  "key35": "2TCGsCXV5Zcw4qzYZDoo72VGDsS1awN2nGs1Wecw4H7bvMtSr9h8A1ZfQNkYu3jwFC2RZ29X42DFivQpc1uM5JjX",
  "key36": "2i8qjbsDGQQMFzmXgdYhRR5BkRb173Lvztyp32YFvyjHK5XDWs12xnp5xFbALcjZxpFzdZeTforVdhRYC7kKwDbW",
  "key37": "2LZ2pgLSjEpw6W1Fe3x764RxC6XtQYcumaCRkfDi6CW4k9T2j8PbmWy8nxDRTr7mKLNWzXkFMCeLmp3QdXH4wgGU",
  "key38": "1qzckZufRBBmqKoFzxqkR9fVqxYQKhKi9mob3BEwqWXyv6DcgAKGppiyAFkQGkmK5sdkSL7qJYxPbdCa478we3X",
  "key39": "k5P95j8kvMQjUMdb64t6VbmYmGuyMLDguGJLqz5NpjrPBw2HYyTf7KTPNgGR3ppL3ntSqFoE7nKF43uxgUBLXos",
  "key40": "K88ugkmsEgfzUKhDaomSFJxb9au3RBEKSPQJvXYriQGXiUziHqkbjtE4qA8r8JsiG92yx17WtbMH2eYpX7mwog1",
  "key41": "2bqkP7M19JLVXVBjAqaXF1arDVinjjuJnHCa1hBL2mU3AEV3ff1gTPw5bdbD3zXB6eUGA3ae5mHyvqKiprm8khx1",
  "key42": "3UtCnxyvR9ke9Xu5M6mpA7SzYxoKETSRc2hdnFEGEEU3jbkA4YUQdaZevXW8Nd9MnmHdHzZBKPaMFdNa7jRdsLky",
  "key43": "2N2NbwUh2qfPg171cHZz7inHiwJspsZwUgV9msqxEJNfo3h7hUC96etWfpEajJrwtRti4BQVRTF4A9UQGima82ny",
  "key44": "22zuHjyB4Jqe5dupAX1MScrVkB4uwyQ2aqYBaEHmLSJzwbM4iuDdWkTW3GgQ5KUKpsyscrJz2y24xQoynwjbYFDn",
  "key45": "47PBjRNPcjc5QztXUy7YXXBEJkMktK9oPC1DPTddybQrNL4hMv26W1YkadYnmbJHmHntotgXMf965wUC2mFdZMsV",
  "key46": "325Pk89rZgq3yDZnCckWZbzajL1LMVMR41ZqYhKhpVZ1K7Ffx5rh4PaJDLMdVKNVoY4kR26Z1QMhBSCpkRMWwgiq",
  "key47": "4dpaqVJCR2TR2aTwn7df17CFvmbU1viLYLZGmkNTLwSK4JN5jajvaH2ropDmT2P6kCEQ92b9pn457iUhuGsbZm1S",
  "key48": "3zsT8ma2woqqYGwcTo3xhf73YFGuALBEAptkyH1zs7WEuHqyJz5wB7t5HbNRyA1DAPZeD8RLivSM2FAjQCe4n9Fm"
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
