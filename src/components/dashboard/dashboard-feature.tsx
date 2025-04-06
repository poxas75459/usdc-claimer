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
    "AVQ4iEXaekmyW2JZfyWKydFD2hYykatuY4LEwm9VSG25qCd5wvuDjC9te3yZT9YMrYKjDSKLurTEpYrSdDjZb44"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62YxKNg5U4PKqp7HvoqVrG6z73RFct6kEaHJWeq3hFcnUP7cjweFcqZuUMRxRLbXMhjVUHwEr7J86y1RV2amkZ6u",
  "key1": "65Lh5ayiWu85rGi8TFWKyBkJiG3dsC8fBXNYqCJ2ghUCiRDhFZNipNv18dgcT7phY3ZeJF3hqGLokZqHxRz2Path",
  "key2": "3QrrWJMPLTejDZFnnGkgQs6aYwAZfVEWmH8dgHvTCu3UULN5b7FVPypqj6M2FJM3S2CQd1ho3w5oEa5KLVx3HjWd",
  "key3": "5qJy7NkXx8QiXQCGsE9XJbDwjHfF3Rj1guhg7SxMumDqcpPYjNv1gMDfkWiHHhrne2nQjyUi6a2GaEHaiGyrPA9S",
  "key4": "5vNCvENrmnWNegSKy7EA4itvBbysvFVPUyFYmNJ1kyXZA7UoctWPfc2DJPRZVgHQ8fFBs1xmsARR9hdDbuGFK9FB",
  "key5": "JS2CheYSGvCNU2rXMNve9S97QFjhBp55ssRSrp6LnF5TTipC8cPJZ64Pkeo2ZBpB82xzCkgh5CfKH93cHwbieWX",
  "key6": "2yizG5DzyPnQQc6ZiJpLLHNPWBrGeAVEH2NRGhEz96gT2HjyHbQRE8sghMuGmQuvY5gMPhjpfi6ye1QV1kvXqe5c",
  "key7": "5aaRMAHCYPsBCnz5wp2fm6FMCXwHza55ULP2iKW5wewYUbjJYoKziNkTYYfMGpLzyV166tgopSu2f7MirmVodT5w",
  "key8": "5XdDBPBVXb2VgtSZTPi3nqsSRkm9KBWZ3wbAdkhbiVS1WgR8FnxetiqGiW88udb8XHFAvKDDcLDyh4Kq4zfL2p4z",
  "key9": "aRNZDvxE3aWAF3D1WL4ciQCsy3bw7X3VhjBU5aRrrF9fe9hfDweyr93pYkfdeWLTsgSFb4wm49K6iDMHbSysWmv",
  "key10": "nCauB6HBsqCG9dqWXC9uGqyZYKVYyjpePHuJD5ggLQQmgkENfig2JqZPzkqdqvK6a6hKwnymrzHVXKusmSfud1y",
  "key11": "3RdRLD8dU4eCa2EAgUGimYVqTwQ5x1np2VbyyeRweq9vnMhJbwtAzRpryCs3fqN6kxYo23HDXxBgZV6woYKn3sVd",
  "key12": "54YsX8sCjUyMpGY7LXXSx3G1SuBVGSbjwCSSpxBfYCCUR2uK6gt2TZjaQ9fSuCiWbbPdCigZcQRhaD5M1YYpbSGz",
  "key13": "66kwFgyJrHUUzzvMNZuLTP5pXEgn1FY4iz9zkHw9o2AacW9oA289LqLuYYEMpgcYZUpkczbCmV5uR8eZktTRrGmV",
  "key14": "5kX7njTxMJdJ2Ka4cUz2TMtScr4C6UoPszcW2gDuc5UVmJb942xtMNaFTxqpmyHswvJVtBdMVxh5BgKtwz7rXEJg",
  "key15": "2PtXEUismdwpcginsrAHj97Fv8GjmjN4ndSkTfRzWsCxyMyVC66A848tEN7vqwujdFh7UJEELAqsdNuwKiQHJPth",
  "key16": "2zE3T4oz1voipmuAjrSFyj9grCW9EPRSuKdJz193kW1UyPBTDsYJh8Bn8Fv8pzCfgx11wgR3Q5kG4pFCdPr5uYJi",
  "key17": "iVR5Sm5r6p2mtU1JnXeFqGmZwuMigMYFPXAJ9aeE94xVx9nR3bBMx7Amyx579PcoCeKcXgHRa88wpYQsZP3nLU8",
  "key18": "2w77VDiVyoHMBXBGBUCF2j5voe7AA2wzxqxfq7pp7B4UJwdVSeH4QJwrR7cnoaPA5RhQSdZqQWheyy9VYDgiUbE9",
  "key19": "4CyXJ27BvQVavJEcmMNemkgz2mZFNurqe3aTzSKESkg197XnQEc2HGDG3gMUfHirBJweBQBUQNrjCU4DWeZNBWLh",
  "key20": "5VWDvcwXDSvbASh64KdcUn1yYG24sM9UnLa9Rjm4q5tGKX5NmwUypsof1GEV6odUfkXb4HBFXKoGBYktmEu1sQor",
  "key21": "63HZVk9zKsKe7VCH4pdJQsZr5wgnrdpJCX7eSRrX32M88zgvDLwYAtJr4X9fsRziZMk3xnj8PJDt7JaiYTUvpAew",
  "key22": "5aNPrUZ58BTh6VtAFa2Yhs5TFegPK3QBjherEdBkyn5QYjCUUXuZH1ArvYPTipU73sKztyvoYvdtQUyyTeN9aQaC",
  "key23": "4mS6f43KE4pLyjizEX3cSdh2RUUeujsmdaBvMnZ3pVkYXmKFW8PqSSQru1LYbe1v4emZHNsyvRSsMAxJFh3cSc6",
  "key24": "57pEwYt9MsyYaknVqzkibkmaibwrZ6fC21Qk3qMZrRSDa3VQmRxcogPmWGWTPPQFSStbtCcnbiA7ifjikHYKSBj7",
  "key25": "4NEjTqhjsGMPZuhNKYKEMHuBRWLZ6ZoqrbPG5cT4Ri4RArL1hnxFD5J84gbutVkQV4d1f7gLnFHY8zaFbvPLu9kt",
  "key26": "2TbY4pS6rDpZsbmXxvvauNPK6j4wGqu3PnrvqJj2s58jQYShiTzeWUTHav3TLfqchddDEjtyeN3XVouKbxjdTxqx",
  "key27": "27GHPioyUfPbrHiQTY27dxcLSdKsdWZ3TpSvD28pXcrBrSCLwaBLhNb1cCTFiExr4yqi7LJxZ44k2x1NPLXVtidE",
  "key28": "xHQ4oTk7o5kuJD44cQEq3hJevbe7AUJLS983asg5pApMhFbKQAwVkQ3J15ZVnhnFPBcHh6Ss9iLqhQstbu6aJMn",
  "key29": "53VQkn3MY9hGHB2nHfuBdU4tyXT1eGsFVEoSvnYYV5wuctSYRzpn5xeLiLZHVxT36a2ynx5Gi5CJCjCgnniQ2t95",
  "key30": "3tutYDLRRdvWLyYPWPTNB4n5177mMRR5cmv4iDNQd3qipSBb6aeznZhYVFmU6ZjSnKMvu6sACJPDfqYDHfZp7ifW",
  "key31": "pYHcJ9mQMQ34DjhFnXNeTFus2wfEA9eQMbpntCcgQEuVJnzYnDXHasE57tvwHQo4xgh3kYuVsPyrnJJTBT88YyD",
  "key32": "N6dX2A5C6AvnQuEwqR3iwSZcqh9H5uUiJGA93hhDgUm2LA1UFELArbvqMtDB7rMPwiSVVcM2FxdWT8grp1H5dUL",
  "key33": "3TRLga6eJbWBAZSB8o7SNMAihUMe8hmL7nbk8duBuCsXmGt8Arc2mCjoWDQgtDvKtovkEjDJ5EnX7HVSK9i5wDPA",
  "key34": "4yHNWGYDkpqjjYjDTsj6wLD9WKRonJ1GXc1ASktCwbpNKLHRMxnSeZLLYyc3dUdQ7gxY5RVM37ah7QbggGUA3JkC",
  "key35": "2fbEKtpaeHcnQWgQEBedtohf1oDbzhaP3DnrECya7b1nR3Zqb3kpyJoGVmgoHMFSvYHZAgeX2YaJ1ceFPTcEpwHR",
  "key36": "4axeWYvyv62TktUvPLF7S3XYTAx35S3kEgfJSP1XHT9F8epMnEAfYFUx28HaQ5zfNoDnZEGMJ3CeQeSkfxdyL1vT",
  "key37": "3EE626bgCFStvLojXm2X9P4hjbbMNuUsARQBNpkcaauEYLxVxgqqFqgxSKVm436XRQ4LmMPhe5meUPnzetV9Hz9g",
  "key38": "2LXx2jAXPNvWK5AvmZp7p7nvy43Ku9HFgTTab1GDSXzeJMozHHNqRfDBbRS8V9BSKwVHzLkkLbhd9dVhv2zHNMVD",
  "key39": "RAkoZk9CYGG8MRz57rXmxT8ZyUryGRyLkQ2nuWLmF4qHZBuYrnqogs3uoVdcyJKhaTyEtkaeTjwfMTkfwknbVbu",
  "key40": "556YHSdS2iDVeeYwmSJvMAvpGZbiZsZKgPsHFsKbHB3y23y7CsHR7YaMeepPFpc1FToTiSYQsFGYZAoVsbLrRzzE",
  "key41": "2H5VExkxP2HMBGshxt7wW7wAcT24vG4YA1fpNfompm3fk2ToVyCYfhgZUGYmCscbq8TePEiD5oYDn817mGx2Q5Dk",
  "key42": "4soxbCfPS8eTjJ6r6VWLk8bGS4tiihiszAALCQfmb9iLV13hphBTBUQvn9SWSSDUxyXPjhuJPJ6tAdrrRXTschMY"
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
