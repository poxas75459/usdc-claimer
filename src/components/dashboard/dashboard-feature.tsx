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
    "4xLcFDe15JUm4qGcaZrtNMosbLbd8Bn8rZUsDqFdpLdKa7Fs9kVYe1TV4m4czeuTQEvZsMpUibw7UfCnN1AzLAU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5q6WouoR8iJnX9FkjRNCQh434vnAZtUY5HwyCuRZTmDzUS64DSaScXdUKig7x3Z3waF86ho3mLEgjwJMWBH6yCwd",
  "key1": "5UMWvUGmuyAWy6KdnRjgSkSuKskmdmA4nfubk8iKwhVxNHkg1iYfcjUdgcg6rVsePEMp8TancAEYsm7DtJwzeSro",
  "key2": "5jr1d2XZUbCMHR61EWr23zTEVWeQSQarRzRxrjkuYZpJnjtavUG8Ps5Gfb514WBNDJjDMB4R6ekPVHNBo3Bm97BW",
  "key3": "2rG9b4x7XoWyQRPRxZy7p1WY5FhAnFNDnd1s9jBSc4Ez39suu2BCb3uEbREtxnHByXxHkFtZcSFnM5cCJxBWcXdP",
  "key4": "34GLSDppk9hK6kg5Bqb2q2VaRHNft4eJpGpkSkmdGW1JARYu1zU4SDmCcLZUizXx7BpeeEVz1fNhY4SgHgLPRaKb",
  "key5": "2yQH1FcfhDpH9JdE8SQnPUEEp18GVcb4nC4dfhpB1c9SYp2mRAMGRiV79LVJhXZeYPQuwWktcECndv3Gt1JX483v",
  "key6": "rQmULkvfVHWYjYTQ3EGciDdDUQJzMeWhzofSS6mJd2Zk5vgTejTiy7v12SjEEkrUazY6GjXTUric5KgBHCMhE4P",
  "key7": "4WNjV3VaHsyB8NmXwCYJroPSYyyC6xXSntSvScdhgdY2YnjCEWkYrmtB9Qh5RzAkoxSzGrLfQSrduWxb1jz19GFR",
  "key8": "2ch6us3UaTQUY51LSAtysHiN5iqNSdAMhxEKzUi6JHXATScfDhGAYKuxyJQCLKyNQWBsq1JoUwtnupzVELPThEqp",
  "key9": "54CWst1pf51qAzVFe6n67jQgejuEns7J92PMUKyGZpiYpzMxZYmoaVBnAHbESBLytaU5SVqKbruhVY5sycmfBtrm",
  "key10": "4sc88GC5nNiJZLVbqMk1R6EpY8EniyWZ1T6SvW1ZGeKHcFWAhX8f2AWSmvUbGRT35UdujY1a8pttyKCwX8duBumH",
  "key11": "5CgDdSBKmA8nMVDMdETAT3orqNCai2oCc9RtRXKxpkZ8nMRvNa4H6dSU4BdSQnTSSTfShSDtTZgZR2yCfdhtjcUy",
  "key12": "5pqghtE9BnceMfSMC9beKo3h2N9t3S9bGsdUD9fbNjX5CqdiCKK1eD1pMvJ5AFc1kcBgTB9Z5VihsuSijZVLroKB",
  "key13": "5DnaSTbncjGqyG8VvAWgyJyzEJ9CqZdAQsEe7cKAW2Pk1UiiFHrvkRVhgRsNpRKyB5jcQu6u3dGHsK3VhfaMC8yZ",
  "key14": "2CTTx9MUpCag1GPezhTtdnUKVLsLoBa6Dcyb5qtqjo7YXDy8Bb2rcqi9CMHaDNR7MHMpWB5e2y9uGSGw4tSwgGT7",
  "key15": "5qSZYtbui4Kw79er68zQesc8d5bQaJ9LPYKPtRgCU4v4KP4zmrG5wyBiaHsTSPvySFA5MZgPbmUnH7EYuegAK14b",
  "key16": "5AG6UHRLHZeBvTHg5MTGsToHwdnbmrFGaJdtZ1Zb4StAPDcW3v2WWWp4gVJjpSySpvDGYeeNFF9263jtcvfgc8KZ",
  "key17": "eU8Lv5HkFD8QbeNvStUHRibCVdiJQBXPpB7serromSsuYajNH7Y6rqeg3jT1HLXd6AnVVRQUYAS6nBGo43vX524",
  "key18": "hamPrtLA13HTZLzx4iocgaREwDL2SvERh7aqsPhv21w4f68X1dAiv1uvLwuF4Rc8hUQM5nZ4GEMn2Mba97QjaeJ",
  "key19": "ijvx9GLuYDZ2EjJqPjo63nGmSPvceT8dzysL5bwzMVgA1ZQRY3pKwpckLYzH2eCkuorkbkK7knwJejDU6CanXgF",
  "key20": "4SCgjiuFxRKHwG6ZcXnKPxd1sYhtkdVZ5SxwE2cuGdCdPeaBr2RmsBZr2XY6N1x79jRYehq2Xpg1hfqdHCeUqX13",
  "key21": "2Up1HidRHVH2V6otd7nfdzqKPJig13LcNfz1Gqgy8QmvizR8U4km4BpXfS45qLYyQB6J1yXCHNwAw41HyjfAapP6",
  "key22": "2B5mxi7qfD2Bj1aA2qpCF2k4Ldbm5cbxNM6QLjkqoMLQv59NidN5M9vNdeJwK2x2fRmetq4b4fmrL8MJu3P7QCSV",
  "key23": "5p3s145dqL6QXQv85uYeBG38K4vHCz1RgaWEXdtUz5cMQdWhBsA7E344o9rQToTuSd3bgQ3FX27g8FJtzuKGUXzG",
  "key24": "5CcTKide7DV21BLgWaRLhohAFxpSceudMrEcqd2r6b61F4Ecy4LnFWwbXYejZRVM7XP8UrXteespEH4DLN13jPyC",
  "key25": "2Yn7k3qXopjrjYA1mTWN2eXzoQ6camTHNmLyPfV2hUrsiiSxVXLnkkzoAJnSX98j66esZtJrHZYVgRFyRJfvFuRE",
  "key26": "2QLJ6n1Ki4ua8cMa9Uc1aLnXtZjcVYjFX7qZhyBBEDUemvLohiKXqpfTntH7bpKkURfQgkApr5RFKpE4YfEg5NU1",
  "key27": "3jHDJpQKXZ5ts362GoBPKpi9aPkEeM7PT7Fif1YCxFHpV3jNpQqtbYZPfUDnzaVDM9utEzfkWxeW1uUTH63YvLo3",
  "key28": "4C2TcrA3wSD5ScSt8cKBizDrd9cq9kapystdTmppn3USD5iLhL9SYENecaujCW2LufShGyM3u6dVbXw2KvNopmgg",
  "key29": "2QrE4QaQrKJgRyCPApptaAV1JVnis5d5Hofkuy36F5di8x6oSbTK32K5u7fm7YJZkuUHcuhps5EcCZ78WH2WWTzb",
  "key30": "4UNNvNJMBXBPXmdBq3RVgcdtzZfHkgz3V9wpUNavEhpReAuQdVU97Np3qWmy1PY3Sb9u4mT3Rg6q7WeEy8X97SV7",
  "key31": "Sa3dA2SfUNbeD43cpEpfSoN1Sv9ZVXpazAABBwGG7ak5UKM57NXpuunY8bofKwh8PGRPT84SnnGrxEhPWwtZhPD",
  "key32": "3kLgGYefqtn9fp1HNkNYfRcc4TyPz6ZSiL7QppzjAtXsh3cvjsajoJm7QB4Q4ytRye4UeXn9ur6G38ycej3K8ekT",
  "key33": "2knYbekvMhLBiBZEgbF7EDSkXyVCuJqBzQyCovf2GP2zjxNP4YBUnj79vktNXjNVCruhZr6ZCLmsAZS4mRXT4Etw",
  "key34": "3czZfmS3ppE5sJP3MsxvWdybGyDYVqkUAdgDQQCggJcsK1Snck2jQBVYHFo6SYy2TjdshjabxMvKwrH93kMsiqZ3",
  "key35": "66WmkHwLaBxntnpBmheNR5pghky8VZ2MU4xY4rmJMLtqCUk6Xpaf3D6EMBwwpLNx6GACcieSYW1ZK8aM6Tf7qFqh",
  "key36": "48AXpgke2j1Uknp75YiAJD7qBoS5L8z3h7kon3Tzx3tWD5AtkCKwh47EZfakdqD7RKU3Mr61NdHCj39WU5Umpa8m"
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
