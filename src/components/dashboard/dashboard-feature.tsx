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
    "2NwqDSeE7RgyK4aGem6tjCDrGQu26icWyAsEhLwgD3uKm3Z4GUzPY6J5t6Zv7GQAFZ8QqdpUfWA1vCJMXPJ1WNKJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TFnWsM6DiphB2yU3JvHnWUxic7Pj28YJD7hFWQ1gzn1x56q4NRtjM2QhvyfziYeVdPgU8usLMPYovr1kWou2nbZ",
  "key1": "VipF1XZqSHVzND7o8X5Wrw8mqoLinfNxi6hughnWCnzUbi8y8o1M7zBZrhz1rBpWgT7GU6AA7B5YZsJgErEamzv",
  "key2": "59FHjEGkK6gqmp8EDxjd1SZa6MunHdvTZe5WEUCnTgdRhahajaoqGa6497gcYtmHHYLZELSHK51cSwwaR3tVLBGY",
  "key3": "5YaQe1gAGQPjyBK1dADtWegNaygHUKruype7g6vC1WEaJnDLbvNFV2TfviYD3WoSwGSR2ukSm51o1wv2naQGmowL",
  "key4": "4UMEvT56NjNw2udR9GeXqeTvxeAmiXZwHUYttBkts3L6vjuuJFN11i8b1NsTBaLTk1McxzedFYtihZGRNAUuPSNG",
  "key5": "4DzB8kK5M9XBtUtmp12h4CRz8Ri88euiAkfvttj1vf5axCfNKDo78mqXxbHxP16EM2aUS6UD6s3SArTYsNWdrcVd",
  "key6": "2vh6R7aPJ9ghw45AkpUi5MCbk9uzcW2bnedsMmQyXyzueZvWoU9d8eeaF1o3iJZY4ziABgzssQTrm4DeJeWpuPFc",
  "key7": "4EdRSuuV5f9UuJ2jEU4RsTwtTDDijFCXej7xUuwM1aBvpJKBTudjWbUcmAtdxRhwxoacUnYJPcakffpRRQniRY6w",
  "key8": "4s1TzyYSWu3qwbB6UjqB4bQmMDpKPGWsbU8ja92Y1AWGUFp73LPQNSLWoeEY2kXr5n61MnWp83sHLSeX5pjPskEm",
  "key9": "3nE68fA6pbnkTFJfCXZB9ovML6VaZTuovvVP9Ecr38iGgPW51Dnp3Cf3G3dbZbUdGRQQ1tNYyHo8VSCVoE6G9c2G",
  "key10": "3qcNyJB4o8QRGiQbAJseX4RujstyUPMs3hrZT1BTvqrThcKDsmF1ZZjWtAWrV9wYjHPYw72hNvsdZtYAWCy4yrXJ",
  "key11": "47Zi3r5BX8CSHwXWbEgKUfe6HmRzxurcymcacg9AHAmrttiYm9eLX1TRSKNfcwyytpbonGVK4H4J2PY361YguZHo",
  "key12": "CsMETYYuMRCozCBxJtoSnw4e6KwuXv7dk5NGg8Sg2FraPBsAWbn6KaexAT1Yh59CuZ63USBnS8hafY9qmTb2tYP",
  "key13": "57mEJfm8ns3SkHeX8KZeyAC7cxCPZq4uApFpyGEzUv1bDZMRF2HgpZPfRehgsW3AkCykQbfZqtzeSBcLP3Zco5pa",
  "key14": "ghN1cHTecuY7UtUkixTUQsRJ8ft6A7jmWc6V31duHvgKvqP211W2eVTwaUHASdJGwCZgdoUB3x9bHSmbjL4Ujgv",
  "key15": "2xHTxe9kUUwkhLc17d1CjH57tMdqXodjzf2qzYtmUpVZMWNpmyEQxXGXpWbVrb41jcws9Yd4cUf5Q1cwRpV3NkcW",
  "key16": "3VVueE4h1pkrybQxS6FzFKsrMz3R15fE8WjrTYbLQhnbDYA9upiC8RqTFZ8aMjqPWdXGSD3iUjPdUsNXufKNe2Gs",
  "key17": "26ZWVkPpdmHJhWRkPhsHKnpbTbAKUvaHbN2k6uodG85nivwWJpvbfmiwuNFk3NVkWo3BTMszq3TZafgiWRhuFhmL",
  "key18": "62apRPv2Ez88bC49bFn6noEpKzUAuF2WmBsxPHuqDVpL2AyELgqPMZSCT2y3REAsvbh9DD4obRUojamaQa99BcoR",
  "key19": "zU2o7EvY19LsMQcdC84DmDUyrKaodLHLMSNbBgLfWCNsikQ9jTZk2687V7SYggqXpJwV63jCVHjidgjTvbeceNr",
  "key20": "5f1YyDEVFzeMvGPmeJpqCGX4fAuCzTLhXfwEEcREWhe1PzXpBT5o9WHGDWr5kLRoKMh32fzrWHDiMt68kyyRQeyJ",
  "key21": "351VGoypAHKk8nfxtm3jwF8J6GrrydH3Cqw6bKHprxDw4zpyVh4vmeVvpdLWMZrhejTuR42iKkca6e1VtwRHaSjR",
  "key22": "56gggRSbzrEgfVoTkDDZ5LBoefhLNgEKbDLFJB1EwcJqx29azHNM5NERCaCm7bUWMMYUEJCN5inwgpiUhYfmQUBb",
  "key23": "4LJJri3CPHctqRLs7rkbN75u2KnWwaoYE5EYgE9ZxGXnfXY6qFtqrNU1QDp4n2NuewMBFE7rxuWz4hD7Y18ufcad",
  "key24": "BMmUzr176gyE2qBvPUgqdpsyWRv6QFcnakMzaFwrP8Ar79dkMpqm3cEiC7Maw3gb1HvLBVoLp9arYURHMGAjWRD",
  "key25": "4MgXkL14NRdULVd1RTd4mcVh4ipN5KiwpdpWX7AEjpf4xzpc3nzc6izrC5xxhqj5k5MJvZzQjtxa9PvhY4nRQW3r",
  "key26": "3aSooFNi6c3PaanLBpA9hw9LBzq1bxqu9CbQj8uWUN4DJ1wG5xLGDYrwnwSPwfY3bmLypBpa8EtAkscYEfN3XTwh",
  "key27": "65wFsXy1g9srXv6PscyA8AS5fip48jfay21qVLEWXuG6nxVS3Q8hPhiPeKTmQ4rFA86ZhjmmusPY6BJ5zKDvh5gs",
  "key28": "4wt81ABYYN9i2sM19JNH5TU2mYtHTv4DxtHZoTcsqGg1aWCkufgMM9pHD2fRrPZPrHjDGXvN3iEhqSKy7Aa1Ym9F",
  "key29": "4jT5CuU8feYoBCaqkwwWN1mj4kAeYkXNczZcRMWHNBL8M5b7azaE9P17MuohsE5eUUsDfsJYXhGNBTeMunrnZi6m",
  "key30": "5Eb8mQQv8Qrh2AFLwvpsmRwCez8AiGtr8WMzfdL5n8gZgj7gknsCdJHhfgwREyTuKWSYp7t9kGjHKVbKNqunjk9k",
  "key31": "5NS82RNdi6x676yDppMJXNYss8cPTLWoKdR3sovAeLog9rhKE44j4MWSwmdMhDyg4A4SKd2E1KFrH5v8XAiqHYtb",
  "key32": "48nbe4j7tMtGcT6hHQ6akoehBnxYZrM2QHrongW3CeXENqVQn4iDSgpuArHLGzvAuCwEg98k9vpERAutXqgiDF6N",
  "key33": "2DFKANGwwGAzPAXt2HAsVY7CcNVhn7qCctwWBgxNrTU6E3my16SepWmzykSyPxt9ZMWpDt61vdPp1qp3Hp2cYXWT",
  "key34": "42jVYaK7cPF6eppSbDxyNH1e8v3ynvKzsQFKxtwVHweG4VRMwEgyVYCE9wFroy9iHv5SYkXF7GCsr8vNnRyB67VZ",
  "key35": "57JP43WKY2o6aSaA5ixKYoQ72XvK1mQwSNwFbyfxWMohrCAgunzB5NWTzjikZnb4LHyTsp1hyEmfhQv1z6JuyVGY",
  "key36": "4129VshKYYKKiGYfzD7tnKLLs8j5tz4ikf2kCyCk1AvKH7DZq3DLtngNntKGqiXzvUzykLH6duk7Y8e9PtircJbx",
  "key37": "RHSUu2LjryF6wuEM9G1hKJ3YwWqraH5gLYukr4DwHMhh8dLsUBdNVg2HYMtf8ZLCYqfDCGT9dQyigKjsDDFeQmF",
  "key38": "4VEL2kb6SQgqtEFwP3vRLdZbFWFvr3QPTBgqPiAHw8u4vwHu2Qczw57CWVTHrNLKLDERTvJnfXrtq1CFMLvQUtgV",
  "key39": "4f9ABR6LifNWnVCbx5V814ssEHjmoxf23L2bX8wVZohCJkwPCqQWAamAnJWfeovQjfgCCyx5j6i7S8AX1yzNoPgz",
  "key40": "26qb5xWYJzQwGVBcsZbw8HP2MiSdmHssbfomcVjXtRPmuUSBxmeZvS2hnKSSa9QRwj7qf9FqM2yPUFWg5KwfJXTa",
  "key41": "2bkRS9NVbMmrfcSSTEttjcJgWgyWeWcEGYgWfik5FejCrdiwPMK9KJiNH5gBcfUfDeG8SYyEpRt7QeumaN47y4hQ"
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
