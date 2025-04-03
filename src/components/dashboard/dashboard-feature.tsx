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
    "2P8Mthcy6iMDp2YjoUMsod7o7TY1i4GPDkQ2NxAdPWCak6cdNH8kPcBXxwJmPH8UdH82t41BRiw7LngbrtMf6dh3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RUE7D6UQ7XAkT54K4soGEWftXNMuQxDn8BcE5Cb6fAiv2CRHLQ46DnoDLWDpbZg5psVykyiFmWVwZGXkBoCyyy7",
  "key1": "4qNrccoaCCz5udW14gvmUtrcjJzBw4eiLTWgrk4r8znvQYCQm6hH4naRhyVmVceuvThqukYM7CfyW4XPaxD4Zsa8",
  "key2": "4J7Apqx1TPgEZZ7aHRkmt3UGVPawCVMRuRo8yjVs7dAxsKu43VKcdKJtw8hppsbwWu11mxrnX49wVtCJmy43r5Cd",
  "key3": "4WdC4eNL2ELCZtyMHqAGBFaWMBL8Ff8JaHsXXNSQD8TFADYUEKWSasE4J9MNwVgCY4yHg7z32hiSZZJ9m7ai7LZF",
  "key4": "2WC2rJ6Eo1qrqR6rFErS5M3LRpofYoYFuL4n4YXoCPg9TnJoqtFZBDK3vpPPeXXnZoxvJvic1oEnSXmvRkGHDzbX",
  "key5": "2B2JAeZnVikdm91Q25evXTHspHucqyrT9UgaJG4jwRKvR4HUNKrThZcw9WzfBLXMKXGTnac9YFNCq2eXudwAvR6Y",
  "key6": "8PXgdVLntqQTYK4UgiFgEY7sjcyHF1EPd2YDvSgnsaNthwKbyoPQQATLiC6PAXSkjvEQ8sQniQDvLCnzCgjDsHL",
  "key7": "5jz1KVrfzkQBGHCS2YhhJWtyGBqx4tt98VxUbgxodd1e45Pxj5o4G5BzdY42HjP2xJJ7Afju62Qc5jjC3hhdbsdc",
  "key8": "5fUKXeaHhcUo1KJWLXd4ixoRnPojziGwkJG5wadVr4pgzho3bWnEcKhe7BGDEMof7PcaioKqgeQQNhyqDQCs5tNR",
  "key9": "Y5TRJ3k4FzgKKe46Krhrd64FnBtoNRAnKvsWL3TUQsU6fAepcRti9uUFobGN2sDcDDV7LXi8uPLsuE3dwzpaMj8",
  "key10": "4fusH17C56sihkwAoK7mPn8pSbrqTSgrbmt6MkzmhHunzDgkR1hw2LKd7Npdn19c8ooiHZf1JjkWigcbKtUeCfRA",
  "key11": "4k7M4WRnyKTfSUh7QfuksWuBYi2ZewrM4jCbz5ZFMUq6FDd3cvSd9boNLSkBm2exsrQpEZtQijsWD987f5U3Ej3G",
  "key12": "5K2L7Y265tGMqYnNyDGjHUuKycrqFE9xvhdbiicQm1dAP5Rid5FMEFYDyKwjj57Bm4ZeqrhtVtZUT4PZ2DzijjjD",
  "key13": "YVHhAfcFj4Kc2asMJvpo16VFjpsdmcYdES5Kcmb4nMPyad11XSDXV6ZWcCEv4LWcAcSgVQsH5JNxhsTHxmicgty",
  "key14": "zBrJBnMVgNmKQTGW1osHfpxGDa1anQLpxTYtMLzywe6dXtXshaa6AwF1dowXUKvHUYtBuApc61nPc72P6DLHQE9",
  "key15": "4FLyvjs6oBdTvGaVXUxYJ69xFefPMrrW2uMt3GxmMGfGynQMmMXtG2jgjhteyELJ7aDoeYpApXD5nT1XgLN2RurK",
  "key16": "4igpqs6DmogDzLGyMg5Z7XVsjqWqN7LdTes3vx3F4tMmejwbKWasuwfuALWhAmCfpaKzzJLFddJNa6Sc9jFVRZkp",
  "key17": "tzmLXGu3xprWnSRrEavHnw72pLXUU4EgtFFRETbwbqZyz8XZNXSZyUikA953bjefPDu4hhNJ9NkRjPZbwDCWFGK",
  "key18": "DYLfUouaBPye84XUTQo5Gb4kHx2DQbUnKwNUMoGXcYzqWNT35qQ3ABFgSChTYgrLfsXjxEBMjPpnbVGXMqeu5AU",
  "key19": "3Jxy4dgRMSRM1tVcTmx4CBLf36NokhbeiVbgPjTFErcjAc7m7mDAk8iQVvD8eUVLo4iFjFH9FmUUZKx5D2dcepkZ",
  "key20": "k1UxLsb1jtjdRiuZ7QPpyGikrnTuWpZPUkHjqE6KCgVKsPKfvhhWwACCHjjP1tYqAw86j9QchAerCey4Wp9y8yD",
  "key21": "4vKPN31Zwn5vDsKbzLw6sT83Vpos7Ae41j7W9RYyBKLMfJNRTo2Z76VE9c8Rk7ZNWgcYSW5H8vDuWfcQcEExJDT7",
  "key22": "a8d7E8L5Z5xxHhNynJQ2ucvXPwd11x9nHFsn2K2qiagsThdJEYFgxdihk62UHgASmubjyjr4B8aGr9KDwGcK3LJ",
  "key23": "3AU1mf5TWLaAfEmMNb5GsYYGFyzZ5PQTtFEzwtVtfQe7CHQR6z527vv8aj3pZCBAvqw87iYBy49LBsiPWS8R1pqt",
  "key24": "5S9kQgJMnocirzxHmQaTccjJ6Mt3jQpPE1KirytvrrHLhBKMx1dNCnXxqfbSJVf8itVmqsQBuB4sSKhAiHhu4tkX",
  "key25": "2VhjZ99GAdtSLbHYmBGdWWFeUF59gHQ3xXq4rMwMnLkBdAk7mbuZESHDmSQNEfNQAXTDSDerrRqa9zoMQkoLqsKR",
  "key26": "5Rgxan9eBDJsV173QhcYPPFJTEhCe3hkGX1JBVwUa4PZUu74cQmTSCesAPNtmZPbnf2waWA2JHux46MDTRjgzwbT",
  "key27": "54MmMzNKyAD8PN2ebtzty9e54acAamC9w7AUg1Dzjtdh4XcCNsNjjMDw1hmfKsxkJUMkxsyoTH8XT4BZvTssqsJG",
  "key28": "5rztnJyN1bgQ7GeCm8B1husPFbAtFEdSwcfF2aRnHBYL5LEmbs2nr38zKoNwbqTZM1Py5F5Hkso2dUu6PsW91tzQ",
  "key29": "5PiShuaEEFGpQDBgqN9UqFGRoiw6asTHn9kd94i5cMUjmRZeuqCKMr3uuifZ7PfzUuYBbqroU3KxGajdFG6QEyLv",
  "key30": "EFw1MryMHCLDnoTSUMiDxiTxVqMW4BS6Dn3nLKVi6kDtF5bNa6UAohyugABheWzU3awcnt4BVazHpSg9gPYQqgw",
  "key31": "4ZVbZMA7jXzJ5z32UZomUMSCkaNC4Q3kCXaSPvYr5ebdaETQy3aseQuhCfbQkfH2Dgssh2RqAMUsxjfCxpdSfiev",
  "key32": "1AnHmzaz9f7dhoDfKmkCbNGRQ7Y5gYKZwdeDWVg5G1YrM8fEJhY68g7dtJCkXZSe5DVneZjkd6h5TLgpdVN7EDG",
  "key33": "62sUSJPbMg6pFspY3hDkjSQ7eoZGbxRXR35Fx7jE7tMebJMiSFUQuDkz85ji891x34QpvbU8xczRjJNufTRcR3Bi",
  "key34": "3vidtzhKZfy8isovoTiuEA26JyB4QfJDSmC2NV89KEPuDCPzPwXYsTXshj1XyQpLG2fwHozb9LEbYhv7RtbFKNdZ",
  "key35": "58EMBHRpqmLNBdSJPLaPiv3j4ubzNLdUcjiLrcyhwa9XLo5bEF2PmtuAjqRyTrVWXHbzg5QQSbPH5wh7VCmtQqDx",
  "key36": "3egK9woZ46oTSxKoHyvTMbGvTSbGUP3L5oDfv7PMwkcQnsnZrPHq8hd2Yivm3seUuAXYFgpf5JG4bhR2fxprpYHT",
  "key37": "2Qvo3DtSjqEgvYYgPqmkd2JgYW1aV2dAPqsx2KMG1r1ZZ6knnpNb8VTu8oQrRAT8yGDu14o7o7hHGpLZ7ggusXLu",
  "key38": "4Ay9QEJm1SMP1nry4ehErjeZUWLNYJKB6TWQwwafhwppaMrymVpuKPcAhYpsMqaNmWqB5RSqsi7Nsu24AvwRPU39",
  "key39": "2aDeiMECx6KZER7U27BP8dS5eGGFmohQjEB7hkbKksD7VkEr6Ud5zQ5L3Ucvfgup8tpEYttNN3RvtkVUAd68BYMC",
  "key40": "3o5cbxV5yUZiqFiMJuTZzdNaLJn2aPJnWWvxc9fMcoAdbM9HbwtWaKiPzPhEcC8aBnZ5jVeH4FwZQP2ce8vaeZcJ",
  "key41": "2otcZMpx5KKL78bVf9oWCpBMfvdqZ4cFaTZxo2TFMNMS8Xjm76EpCXXyJU52Dk24wHd5hVM9ZvYkUWjkX69RixHR",
  "key42": "55dZoWxAHCBpgiR3WCM89iBKNr52imBjE1Ps7ZRbar2DKJHLfot8rjrv2RWn4S1yMx61wYUHzGaf9GdHvMqueud5",
  "key43": "uNu24W3j2JtQSgnz17PUqXdUgJt1Ttng4923tLJzuV3V4F9P1oBckfsd17ouRVtAq8bY1vwedHkx2oLMJjcZA77",
  "key44": "5rroe1QcWfhjYaHDWUJBeZptzS1PHyAabAWApN29zUncr4BAKktCQBiSnVSNE7k6rV8srNaFu5ZUyiHiaKDgkKeV",
  "key45": "3ojA1SydH5Z8oZJSozyypCBQt7TnnwE4BJJ2LLRTbXXuJLaDY1EJtTNSDuZUMqbCNAHR28o9yrNLsohW7Nrm4svt",
  "key46": "249kUGAqCeEA7eRz9L6jbLgQFFEtESMEfogv6LMKj7BnsrrFwonrwQgdU8V6WmvfCfyuLWox8UR9ECqeKZcgS1bF"
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
