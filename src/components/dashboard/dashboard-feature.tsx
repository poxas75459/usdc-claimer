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
    "2yZhNqooQFhzfiimjFMBfwBUP1X5bCqfLrSGWooSNCtQKCcQyV1PgsqU9z9WiT1d4KKrvTwyH24xfbzapqJDPF2b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BW8JPf7zXJp45hT4DS8a7vXJiFczzvitdhT6PkMwYSJpbq4y4HnTCxFwYx3EcrcRhm2Jyjkgos1Z6k6D2VLqZb9",
  "key1": "5tWFdYo8vy86PJ4FGzdwQS7LkUXxESCZAQYmvQor2K5yjNAWd2FTx4aVTuhxYuWsqPR7UTJFUL5Pjf6h5DqNp1XM",
  "key2": "sTe7k9TBe1niHNDSbsvzFwG1dHpzctkvMXM4w7pRECx1XjndNVv8Bi4VMweTDCSrtZiJEXH5Ud4wsW8sWu1u2DB",
  "key3": "WdDQ4yh2Twu3BkLvTcmFmzqHjrEa9yhXYEzCNYaFgL9MZfH1Vjuj4kX5KsAkBUv8QLrYZKacRo9dk2zNh7UA9ZZ",
  "key4": "4hZChYBfESHpQ2ZrSQ56bgb7nNNt1Ue6rY3iAYcCUf7pgtpxwQooBDQXGiR3jeADqCr9M2E73G6LSVwVksiZfrts",
  "key5": "2sUCSrmequYgDiUJD59GGhHYy4BVHeTuXWeMGSYUWysjAWgTBmj7HxEuBm7252M9D8jShiR5KBBapnzK4q98mwV1",
  "key6": "8UKYHDDzwJGCDCKYUMW9TTgG9VnZaBKVLpQTmptpraUtAHwu2DVQkcroQrqoY6y7i39fdhsJNEzpGJU8UBXZQJY",
  "key7": "2y3fw93Fo1GJrHw5h1vStoktBCzRzJ4iGKYTYH45wndJswp2VHpeknCJLa2jBgFswqQrAZoKh5avGy7FUDtkY2Qe",
  "key8": "3N1QZrPSJm6RtXmJwRsyzKGPnvnJazuCoeSocbV3x2b6jCf4TJWvmUQYtgZPPyAbpDYm5xTD1E93oh9d6rZPPvsc",
  "key9": "6H9vMUMXuRRXr4jf4HTmKupHCsh1w5b6sLx5YsmCz9zCuKG5fyK49HK76KfRXJG32PwCGY2xy7renEKqAXaixHV",
  "key10": "zciQzWiu2mPNTwbezs8SUMVzDixKzZDaB9Hq6ewuePLm5euKjBj3gY5rJAsUBKJP5fHDBnWHNULe8Vmfp29W8Xf",
  "key11": "hXG53iyW7BQeU6ft5pY7w818N2DSwYtevNDRdLbQmUJ1Vdqo4RL53BS5ycYG6CWy8gFsQ3JYfPtDtw6DCZagEen",
  "key12": "5dMuHMhuub338oPPZE1xeSifddLkGd7NRQ4GhBuAk63DrykS4FWAhCvDamf1X1EN6C8sNQobtDXV8Uj1Ma181CBE",
  "key13": "5Nan13okJZhFykMGZG5KSrLd3avKZNNCc3e5Bqrt1Dk82g3s4NTFd1GxDCjGiwuLRFb4ZSJCTPXky3ARuZPEcqcq",
  "key14": "fy5Nc1A1jymVpETyevuwzSMPbwwWLPXGThXNmtgz1Vs3UjR74JuSjg35fi4qrYoVgPYiqj28F1K9sWTv3tWg2RN",
  "key15": "3WKpHioABwJHiheWtYn1wHJ7PLvRjXcvC1MhjEeVKPKjAomYecApPQANFmTUn7UX9vAS4fu1XdXB3L6JdnJEZcxa",
  "key16": "2VgBB2SAuARiTcy4SfLjxFGjwRTDzf1XqipuiSkdGdYPbcFVdPzM6TKsN2SvX6AdhPwHzzDFke3g7dBwxYbhe2rB",
  "key17": "5rNYWXXQDCCgw8RoU9b5mATs9J1oPsDnTSw6rzN4nkUvvLAuss5M6Wvcwgyw8aeZUMLp9r6AgWj719XTMBuPJSLm",
  "key18": "3dRtZsCK8kQ8eDmq8MW3oizMk6coBNVLud58rD3xPN1EAM2yichwfwJrYEF3kx4VYjzddyGfu7vS388KV6CPPPcd",
  "key19": "3FMPp5eSa9tsfmbuQJxvFE3FNDQkpaPuGnVkfFHFHZR9A7QWqromkYF98PEGUECN1iVCKuXVeGLNVNLL5waJcBtj",
  "key20": "4HBXPddBDxu9mMnE9NDvDM5Q42k6CawngiZkqbbVwJGdJtYYN5n2qq5F7PTJUQ7p9CKTsZyRNyc5RUfN9PTbu9Mu",
  "key21": "5EX2ybbfem7TFXNpTiTC8y1JiKc8p18YDQupExARtWGn9hynHFn6YbG6z682RWv3mWXQcgRgVzUtvLKUX3ZawCSy",
  "key22": "3iWYiEkSqHXafS45CiAoqGgW5oq5gK9sGUqNekRvnqWJu1NaSkXdUj9ikNWAajCmT9pwQfiNCPs46MQiweTJp2wF",
  "key23": "3icomcQpuGv2YXpNhPeVVvprViYntnXjKn7FrV9AVMEjC94DL7fUWdfGKtw3L7AWVmWaANNuJuTq3dEZX9HhFbJj",
  "key24": "4T4sPyzwXRd7v8Zy3QEnoJSnihDLNKAzvkgZWhAbwC3Fv354pJbF5znWjsFrjLUMbmYiEBouB6TXu7Jdk1zmixDn",
  "key25": "3xUbhs6zSpDeq1ssY2nHakeiMabDZNvDB3QGMhR9RfGSb88Bo72k3zN3BvAd7T8nmESmZ7SZp51zyArYhc7NiY7s",
  "key26": "35p4Afngqku1wSgrNScAaSGfW2qWYHgrJJFAkmpNGuaCokcbgSrtteG3cdAoJAjTnW1wrWfzgiiYn2htCon6NAiL",
  "key27": "2uqP8gLXybs98U1ff7RoTPEvQVqVxdVDkZ4p6XvP1n3zuZzUdQwT8JwuKu3qgBxwjnw93AxfBwBRiDyUW9PJqnkK",
  "key28": "2RXESCm1Lrrgg1LhhAPwEt3P4Sot317S5y2VfeJ1CGstoLawy48DL7XoH3k9nGC4peEtSvUWn75365VPuQhGRHLb",
  "key29": "4PXkpZCrQAs3tBB8k3Zo2psCEi1MkvwKkN59AfNwAAekCpxqfpqrdxZAVPTmDwe6UbmFETs8y5GJJnJ8bbCDDW8Z",
  "key30": "5ASNHGDkToMfktNUd9cWbhGSbvgAfhNxjjxPx6f5j4wqbMFv4LbAxnoUHhtokLiidYowmCbBon3eFzYqBLaxV9dN",
  "key31": "2u2sL97bbEnn3nJYhUgE3tpgFBMb1K475377GRXXCkDJozyn2oh6Donb9M6294tFfQ58jY6vi5RRMmGTmsNQ63bu",
  "key32": "3EbbokdzWTj6LDaL56FUMaGaYE6B8sFNgoRADzZaNKAMg8FTqADUiS9dnqmcRTuF48t7KAzHzxFRknkJgu82vHcV",
  "key33": "38nE2C95aThB3xPfPse9JEetmz5mziLLkVGj5qJiZqSjHiMvbSShu9Wd5MPkZxWejc9XowtJxGVpBozBh4h6rr6a",
  "key34": "66SznCCpeQgFbK7y9tqdxA3yjGPYiZrYyZRjJ3m8VUB4ZkA9YPsSn2qJY3r77rqGoM41uifxkzHiK8tJcwopvvQC",
  "key35": "3aSpyDCfsF73PTNYThu1X9spfBWyMZyYTprr7LhMECGgQsTxZFJD8qCLdEfZaJkKAzoKAi62dSc9bFeJopEHCPHC",
  "key36": "3U1jNR7MjEFQaJexU38a1srWJ2QHU2HMer82H3Yp1DBJsHVQrrzuiXjzFL5rzYZ5s3ZhHdrhBkrwNcGjcrtUjoD2",
  "key37": "5178zQd3nDnqp8eLGeZXXEss7miUsKd7rzUPX4FWtprPhcc9ehfFvcWPXZXbacQJBjJDtqYS8VXkVxAHwE6HcqTL",
  "key38": "5q82KADzkaku8W3ThAG8gDkszxa5UmZFU7p9JY9qgfk8y22TLVbffjjzybunxqphGuhwEiuGJeKzTsCt3HQPp3qR",
  "key39": "5GmSkpMPdZRtcMVJzRTroS5YTFgYe4cqFLMs6oTZMYwEkSTjbEuknn71D3pyFYzHetxX37Jvr7n5zLwJJcGaRX23",
  "key40": "4Vshjo9j7QgDC1PZNsMJhyfEvn7feTSdKjT6tAEP69VAsBJWdWUt2ABkYBB3aVsNwDmTSyyGAF2DCAwLH6MV6qMj",
  "key41": "4u6fEU2LRCBhbFqAJS61WKJ8HseKu8uC9rMAT2vs7g3zDrNj3CykkhVG6Kzr2SQrdMEUxeTHg4yzaFcYJdHQGsuQ",
  "key42": "2eeCoA4v6LCMBr9E8gZj99Z2LKDxcarqXaKnZdExoAJkNYVPitLWAgSUon4r1H1937cj69LgQAzs9mipSvtV5LvU",
  "key43": "5VvduNwHQ41qtKiefJuqd2iEKZ6e44UxbKBC5B43sS2QiJBXEc3WVEBm1vfR3gvT6WQGMjJVFLBpVFC2CqVRzuQY"
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
