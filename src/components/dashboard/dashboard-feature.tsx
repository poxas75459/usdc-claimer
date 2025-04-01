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
    "5M1qLh7Qj35FtiGpKdHsbjeLHdCtKPSZAUQ88t46XYzpFZqLfqJoshcTgz6B4BNB9EjZSJKfwyrs5c1GdWP3Nmv6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8JJaUXQcW3VLCxhiUWZWuzkAe2wHnZ2XUG6JAuNqYHK1w53L8xEh6v1B6kLUW8ace1RAt7nTRmPa3qESUEKc2rx",
  "key1": "3e9SkfedY7fA2hV8te2QuS13dv4uEA2feyYq18rMzfJrjTMtjAtwhzV7cVwPXAtgHxwgdK7tdzTYgrh23LSBHuyu",
  "key2": "2A1sssNxhLGpjqtsGpUmgtbYPUjMCpzC3Ea7LC5TwyePN5bEVgLWMcNDMAQUqeR2xTJgP8y5uCh1686cufRBYfke",
  "key3": "USdyfe5zokK8Ki9DnbTNXmmqa9dqgvTbAg6VP2dv6PLuPWNyu8tce6Yye5Kr6VoyKuALuBK64oXhPSSbQ6MMBhK",
  "key4": "45PdTEFPoPiE3kfPVpdBCDyTmWhrx9kUj8WDeV3YBUekJ6ein9aqWneoipuxEedKjHuXhiFqz487ms8xBUHZsRZv",
  "key5": "L2Wb4XugXLvXgbZ584zCPkv3RKgbuPZw4eQ5HTve4qjsQ3EmF4jtcBkvkWPC689qy8ANmFhFy7JoRnMAVsKT2We",
  "key6": "2z8xyzG9KBzrJGSMfsegZbX2iLX3gma4VRF6dbWooWEnMWvqgTpzCgyZD2utNWsxzcu8gwBH5DARJ1vftciEKeKv",
  "key7": "ZSHmR3BpSzis8WzL88rWhx5qR6amMaEdpdet3dA7Q82MXhHbMSUABeYeT3RvWZ1E7Ai56LisySf5G7SYNBRiZpc",
  "key8": "3juN7nBEi1roPE3Go2hn14sAWiimZqNn1pkdDvFY7yZwEhtMSYDLKES6QhpxCg2ogtxxKvjhBhJxajENxt55ktWC",
  "key9": "4b213RHL4FyvrUCrMvGhvEdEchWkKFrZFjcTEr3MugGiEFPjrv1o2LscQ8t1EYv5HYpcLhjMRo2UaMu5i1RqLZap",
  "key10": "55hGbiHx3PzWEdZ8KwZ4TJDjG9YMR1Cn52AyU6xPKoo3StiD2sXYzWyDcyGEjAcdzxrxBcQoG5SNzMUGm9ZEBWsx",
  "key11": "4EShKwv2VRaz9tKENxQgzJQdxu4hmRcqHPJrVcJpkrWgWiLWpwScQQBUstgzQk6vdwH43o7WJHaoR7PnSuTnvjnn",
  "key12": "2tLZ5jcATZTDx5mh4MUjCKFDFSMWPyo7CRNgp6PNfJUWr8RDjZBHeduMfriqHVMhmTs9WYHHysqQvtFuVbxBossw",
  "key13": "YFkAExjdx4G5J2shbktvukWrwETsUTqCR83EPrDGWPgiECgb2NEJHqyjtGENtdbPXYNULTeA1uf9YKioQAwYdJm",
  "key14": "5DWP7MiHnaDBAGvt4nmDGCcM6DeFDcUKsRaX1iQT3kVMzUMAkMxvvH2iysVdpRv2EfWPsnJSnWRYMvuEMTEt82EW",
  "key15": "54uoBFhe26FByyynjjbzpC59Bm21mRSKaMg8E8jKKiaS2VfjYATkxRWD67CfGcuyeq474d1PjFWvAqqe8LMTz1nP",
  "key16": "4zrCKeBznPe9ZGz7m7swXhEsnhN6dF9FSQVdR2o1aNrBCR5RPSwwiDUy7qVJAoKNRhWghrmQTGrpq1F2EmM8kdU3",
  "key17": "2EXa1nF1LEzSGvQH1egytcTWZ9Rt6tZURvA9Vx9ZpLbQJkiQsXMLWytuZp3uTFPKRrmqmq5W9VQoqsH8ytqSVqGE",
  "key18": "4gpKsgKKiEYvJNHECyH3XXRvRxtVpyoF9PiukQu2Y42M2WGY7gXdUwvoUS162LuSQuYBAKau6t9sXad8jvvhtVHK",
  "key19": "2iNTWibFWWFYMz7pkLAyubmqNjgwaFzZ9DiPePwyNCkYxpf7TkvBX9zfHjgahx2zPN9AzForXGDPv3oEiz7Yf1sv",
  "key20": "3KVDGn16hRftBMeuxtEDNhH5xd6UTaGABPLAT7puETnE3zh4hUAMha8iY1whdHmMP4s163xGmNYW7jUAnxY8VnPM",
  "key21": "2S7Uh6g79PDjcXv8VF74ZDF9TGuMYQJeprbn6V5BmXquKBJ6ABfQibTVPkTBcue5hQ4BmGib9vbX3p1cWseqdhUZ",
  "key22": "337CkDnybwTi5qpaec4MGj7kXVzUXVtpgpjCAmhbygSzHWcttayHCBNXdzXWZT4QDEZazcWJecKAcbUKpdNBi1Tp",
  "key23": "ftAPXBunQp3UMaMUtGmeFRspQ4H1RYtXBaDwZzcRX3xH4E7e6MCt5HWWAaUCH5kbmW1deCozpoZmxT3ENq2HCss",
  "key24": "4HPFzz5n7yKpiRBVaVmez2wW1gp6RiZwLM2VxDeNyJdf7iAYakjRG5xKX9T1U6aA1hnYNt6imHFE3h3vfJ8xdAou",
  "key25": "3cEhW9NuTLkzg7ZeqzqByYizjih8aMsVRAAGnvKroi7RrbfqSjv4RftR2VjBV4mqkhHfza75r5G2m7ibZ6PFqoF8",
  "key26": "LbqvNouHJ11JHAQDWC7Um2iJnMwADBomtqCFqJHS4x8ZgCjVDT8woPGvzjjGHtYGaRUsxFyunyFhxd2uXKHtA8U",
  "key27": "2kAAd2pvopcAAWqydf4M6vebQiffSvaz5V5q6mHgZoU9Us6JXveV28PhQdzRvrmznEiKU5P7cx3K4jEkpnq6B9Jp",
  "key28": "4xEzWyeWvayiYzuMuuZ55Jhp3bB486bRMgsrSTEMnpSc8yiBE8KCSPQvrXuy9XHCrDBq48kK92oSataiuctPKisZ",
  "key29": "oQ43ZUimwnCoMmbR9rMFVYkfLmgwU9B7jSezzrkT66WHzjrsAn8q3FnMM6teZoCEeahJyeP7giUwTNnFfjDRTEM",
  "key30": "4nfW6jLtvw8bVLZkw6vSVxrLyKVaVbnFt5mvGMANRENDkDAxzECPKhG5fLvajetFuby7JPnhbCsFA4WwuWm21Y82",
  "key31": "4Fr8vxeAtup3jkSUTYwh5rn8974XU9oYxMdy3otgbQqKwsnwcAyA2pp2uEn6DjZrTJPxBoGGsofbPLV7UEyew5zE",
  "key32": "e9gpnQ6zNCMfWosCW2Y3K5SVwjyZKdpfgQi3YS9UGZyUUxu57GEM7y5RdMQejBJfWXrpvTJ5U8r7WFxzhXnmJft",
  "key33": "4rTWXnUKaD2Pktoum8YBMaDHNd2u94J2DKNWktpEFqzLEq4BraMfACFdmA8uCTzBnmR37zaiUpLuBQHJ7o2h1ZNc",
  "key34": "r7ddAosaB4CXoCeZv6UYNUTrknV6Cxo6ZrqLeWCfpLjFNVY1VZE3VVGwM4MZpa2wQ1mzk9NHULkdZpHpXciXytT",
  "key35": "4DpFo2BhsB9QUMFc8Zx2Zi7a3ZJqoadaFmZfnmHLPZDwGtEki4XjBq5UUoL7XsyXWkqgd5LM59RSx8cavu83rJhq",
  "key36": "fovhePwRTpPjwsHHzwpeMfW28xU82PWrXvvTTXoM5xBHz9WKsAiF49KUpPJHanuHqhA7TsTKpAsmSEePhuT24QK",
  "key37": "yXH1YnNv6nBaYqPds2HbzzttK7oYmiE2CcUCvrJ4qDiSFFxEymWVM23tMNRhAbvFvQXB1GhAHJMBEQVMxXf7fLD",
  "key38": "CaS3z6D8XGzaxFGnxVXmQC76XX2wc2sGt9WEJS9kVgZ4kqYido6RSHvTBqjDGWcecTPuvSxAAjCkJdt9Ka3M3fS",
  "key39": "4523EM1A1FqZ5yx6e82XsqxZD6CBCQX9X3rmhtyDdvo1AydNxFk7ZxZd71WBcWLUJWJJ3abWkfPFnQwjGVxkwxDH"
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
