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
    "3zpAFGobTXwNobRSiqmFv8fKKacvwyQ8eaao4YZqwkbhhBg6gPkGDmQpfYSaENRYMoZEkqwh1kWD6BHjaAF9wro3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YCvZUMhgpdKQ8h9ueWUp8Cx2d9DMBvSGiVn6ropLwefKMq5oUg6ooZ8LzqTntJs7A9JGARsHpkBPQP3S66bjoJ6",
  "key1": "2vnZ7u1sGEAGKm6wANmBra2uP3dMHWDoEiVm2XjXjhXVjTpbh1qoMRLK6pcssfkQaeNaonRdgQe1ZFFiVnU1pNZh",
  "key2": "GZNJzSYMLhMsEAMxHjmB6SY35CfLdqhkReJvvaokxL1WKEWo6zYWQY2vipB5rV1AF8yqzCeoxJRsbxEsg6VyLog",
  "key3": "2XDZcRm42L6GEd9QfaNeG3anPiDGqossJiSzB8y9NohjUNNgvKX8BoxTQr8vQRXeNAdDpTFTeKDNAMWXuK3ULPr7",
  "key4": "2p7gPkUkbTsLkqFqsKMAybvoZpoWsSeEidu1PCWVPnUrvZCiNZAgBW4o9c32q7LYf5SSRM3vVD6DZr1eQkKmPWYM",
  "key5": "3BiBkv8xXYLcYBwrP7nLuwHQen5PNBTeMDJDVqjrtypNjpQTmx1DL7UaiFnEENZxDGWBuwoTk7Nvga9vgwSUqnyg",
  "key6": "37HNG3fq7RJU17QCk3wJkWvTJ3994nsxQZGHHmCdrumETXRxvt3KoQfiuT8bpuAf3X77dHZiAFVSnrvHWfnUBWYw",
  "key7": "BpfBr6PmCeqmsHTiPBtuSPbBtRdZz11a8E7qoHhWen2EpQhtteZu22vp1wAU4oFUeiQgkGE4QmSa4VyanQnSAW6",
  "key8": "2tCWGVozpz2Ud6gSP9GzUMhnCDSVEPXW19jep9fwmWzaibx8m9PwxNPmPax4wgHwFzsUzqR4mDHVzZYqrfaBKvXe",
  "key9": "2aztMDschMk57PMSzZKS3aMMJVo9UQTsSrBx99jeETjWyzj1DCirxkF5GhXr1tmtR3gbX4jRpbLm97ZH1vm3FWgZ",
  "key10": "5dbD1m3TsKa1ePyhZvshoWTByw8mqh5r9Zi6dzUURD2gmvWrLkb5wWnHRnpmWGuBgm4ZT74pBMQcS2sXBGBoL5Sy",
  "key11": "3uNM2ie2uRfx8sjSt8M6xqvjeLJDZF5iJ32Cuo1u81Rn4nuRLV3yaBwdn5bxeSPZzKXosvNWUQCUDn4yeunY24Am",
  "key12": "3KQeem5itXwEVS8uESUCtFihPjKQEouLSyVHhh53NJLGqphDqEXYP6cB4dQdJBfQtkuUNoXzKLExZvpj2opir4i1",
  "key13": "4K8PyDSBUw2NsEPtNgvDsusWfJ3TdtauDsVS5DqQv2L7ms9wHAGvHjr76fQUzAwVJvp1Jgs67Dwez5pxjuQFkND6",
  "key14": "5u84XdPfaxyJQbmdDrHVLtzDTQX29VL7iUQBahVyPRdD8wHRJFCk7LSfQttESo2YKjFgXX1v6FTVwSpzhDRNpX7E",
  "key15": "2LvwDioDVKpn5NWgXVQZvAmj5cdRdxRu2e1Nqtia8ZvSSVnLV6eugATQwCyS6kemNggrrfcXMtGgqfHjJccoR5Mh",
  "key16": "9p4t4TmJyujK2KH7YVK7yKXh5nkh1mf922tYAEo5iTLvf3xEAJbqrtsjPz1WAdtV4dHqAcSR13XRAqd2zW1MVUx",
  "key17": "4JLGK5ggRSjeF2wMmGKf5RqJF2ty1pty37sSu1ap6UFQWRrFmFTcAJoWxFtA5piy1HYPm9oXU2UzpWgTV4DdHyrR",
  "key18": "2G5qiRdiMqVoHneUxz9Nr723yFDJ18up2NQ3133Xppr2gKFyi98TDenQv8U2kXNBDbX6GMwQobdMWZov6tU4CeJ5",
  "key19": "3PpY52ShCKzguFMkWS5YHUvLzpdqpNTTTdGKB2ijoFKjk2wWQN6PgPKgKvb4EXUhwkTqQwzrr6vXMtQU8kRFih1P",
  "key20": "4SugPsJj1frUiBn5w5T5yiWjPpBh5zzkCDwDX4SX3tSzggx1JdZWacySVZCVMBGpRXTEGWHmpEekkycZ2ystAGy8",
  "key21": "5dw9iKQxKwaTh2qxnPpijHm67B8tmAzDniKv2C4URJDn4CyorBMR3cNXQkZ7bRVw2pF86xvRSgA4phMqMy48hNGe",
  "key22": "5N9ecjGHraSB1rAbVgkBzm61dvYqiVw4yeetau8NL4kaJY89K5nA6LMuBuMibbKJd8bJbJbZBUbgAqaRxEk9n9pi",
  "key23": "HSWom7nXz3QQj7ZNXseK9Ndvsnf3LDwrBPMiBx7M9JVrjokRURCJ3EFxJMuFKSqZu8vwBv9hxTrmgunxhT5yskj",
  "key24": "5g5G4Y6YdUEzJQHXVXD4rBDeWfzWh62n3GUcGkQ1FFdKwjPAZWMZmAj6aPRurqLWp4EG4DXzwy4d81ZDd9kSC15V",
  "key25": "5NwhAfjyMh3EtWZ3euKT9szPRfD8o5bLVbzBoW6H6sDQwcAW95GbybHLnFexKLWHKDE279Vm9j2uk4mbQyxRnWYu",
  "key26": "4dnhFvkESS5Di1ZTeu6SXAoWZBkXg5zEHnCbDP42uumi6QtL971PAHxiZudGbx6gAYdf5X4tn9pZmjhgiax8T2hF",
  "key27": "2rCJ3vE55mrMaG47KyxRar22dPQ9JkaNzx9LVT2yLhNs97Zkjw4uW55vEiPbj5PdS1XUA7uxXu7Dg42AvyBWP4iX",
  "key28": "ze7Q1caaBRqjvTAiAhK9ocppcK8dqsp3GLmyFe1Ni7ffgFQq7KbrGHb2k9QeEbE1uhxFAwaYpRea1yQ45AJVVLY",
  "key29": "5yde8JngPkcKqo8kYiBfPitzj2jBK6wWgx1ETzGEJNQVp3pwroxND6Jaq98AzMoBoQMUV436Nucq7f83kfeX71xJ",
  "key30": "4svWEm5Ze8XtyGh8f68aavXMqJwFsqjXdg46adpapQ1Xk4h6Fza7HmgaNo51FjjJT844WZrtzdS2KSQ2F8qXfoWb",
  "key31": "4kXpsEHvPSWy81s8CmWRY67fV5RVwF6F96kqbCz2AE3YGHyKrN1gDiaT3oGyJRiYdtMcVM7ZXY9NWskxbUmfdCg5",
  "key32": "5Xs4qaBswH8PFZVVbAagDxsvqefddXo7LRrqFNy7beEzqnG9xPp9Sz7RvEkxNPHn4sNdLX5R2YUBA4rpuHgAmpyD",
  "key33": "LGuDuPt2CYAtqu2tueyXmuNFd2Rko4f4uxksy7VE5doCGhBXEM13SW9uptmtcBQLNcPEDN6bt72ukhd2GfzQHtC",
  "key34": "3yNacXZdzKBQQXWvaTFC2u4PKqgjjzhJSZSgBVHSS2VRQTvSVSkL7H5eVLqKVLybcKuXAv4d5FSBPoNneFnvbQoe",
  "key35": "3ZF5BECNzFPLJcr4SbMuLnvpKU71aSNUz2McWhU4kXcRvUxjQU1Us4ENit7q5kTpHdkvVADQ6FezBRLjRiSGNq2q",
  "key36": "TNHd6sD7DzMXC1yLuZpLYpWcUueYJ93xfLUHFyXPDTbPYV2ZBEUU3478wvKiN2SERJ8k2HALUJ2eEk6GMoaSbqe",
  "key37": "47yDfhRs3uRXFNsiyoV7Jh5j8aYrtTu4YUGJEpupi1soKe3c82grMTLTFHgCAGf6MhjocMez9qr8EDJMaiKnFP9m",
  "key38": "3csq7MtNXUMoiy3XaHrR8X1j26xQAo4k3tJpcSekuy4PUCem4FKjqtCQPqXyCBiMwm6fB6FfDvZ7ZBVF9REv2xGj",
  "key39": "3mQTc3pXKQhRof1vz6bTE4H8wsiqcTyazmLb8Wf7tCQDtajNpa7TgS3KzTNGsMZtMA5myrhcgYGNKi4GQJv219rz",
  "key40": "32yL6dPTsqEmgP2TKUe4KehBpDyPefhRnFBEcvrFNY5AVbm5habEyH3WsMtsT7jWATvz2PM4dT4rWphyvVozL2PD",
  "key41": "5FaofPFp7Srdvf4rCRVUJRm8vHPUxzMqg77dpsiZXbniFGRumfZN6tLHBcXs9i3Wfr2oYKms32oLteKZhqAFXS7o",
  "key42": "5Po4Gh9fdn2PEDbFYf2NE87tCBh2SuEWSx89cY8KTV9HYecEQoe7iGMMRQfW9qzs2pzZD5P4cornAxHG1RZEHQxN",
  "key43": "5KZnnMbxrMctzMHqvQnKqPvhj1edxvBnD6mDM6NVFfknGP3cu2sxfFLESEgJJRwqAQDGhQe9SvMpHTQ6WN1sqneX",
  "key44": "CRkSsYmxU27nxtQ6Se7s7uPwutYjZSYfRsT7Mm8XRgy7DkRZ7hMfqbni7binSQHb9ftWA78dqtxzGY46MYnjqGu"
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
