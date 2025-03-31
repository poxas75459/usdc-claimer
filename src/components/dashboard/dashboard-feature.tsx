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
    "121SXiSs9X4hd12KDuNnjMmCmNRE5YSgmUwBCv7jcJ1iHebi63dx9xLKzur5GLVnRLcwKkVYG7ZkXFQsTibGgthr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cJvax9kQ7PzPwcR2TPFYaSRXWxnxytPBrRfejezoaGomA7aSipGNqcBb4GKCtyZCet27hrUYMac2WftVAT2TwH7",
  "key1": "63npsceoX2pyD7jvu2yYNVPe2gJDjkPzqp4joPMmD2iCBF581u6ePJXyqfG9CU2Jsny6FEtKvnKL5qKuhwjau43i",
  "key2": "qVBRQo5rUb8FNjU26DuUDdBoj7jqXeeEgvC9jqAKpbGCJ6WgDHKu5oq4AyP7243DGRVqGfmfhKwjq6e5eeDzHpW",
  "key3": "2hQKDhDVMyeNNJdkiNHoPhKXAUr54nma3RS5Zz5QJsBFyU85gqbQ5RtKc3yFftoqNCQSx19CH23cAWtybgv8svwM",
  "key4": "AWTDEsmGC7EsSxcXBXQ5rdZozR1WagdzLLP9zUmxL2E3zJ3rtvftvkKfW3rwnepfpXBzkhZkqJ65hWehH5WnDj8",
  "key5": "3SNSckDWtctoKst1vh4fbEidFxjP4BD27yDN8uDBgUtJNijTYiH3VvYwfNKPbdemCPJYPAcGiib1bJHtMGjrGJju",
  "key6": "5UFcKu4UcycFfEvVPZvMz3bXaxc1N1GuGuwQiByUiYtjH6QR5npRvfSAb3HefBHxWaQJ5NHbGQTusJJeB4shUeto",
  "key7": "4SUjHamvgc9LbXGdBS4DL2zQutcVV6nULs47CaeEt45NHJ7uDvNYBs5nFsvV2Enzss3p8V1s8xZ2E2EKJwycBDqG",
  "key8": "21VDkCos3B4GYcnRuuapnVYjkMcS7bLxrEGGKMHF3cCEiBmHphiuCMTyhaxY4nuzQN1avKLedHDv5CJnPGXSNzuD",
  "key9": "JZRSX89qfJmF3MQcWY85T5Wj7S3JCUBSBUArPUe9PwDjfZ3EGcefEMTMHdkVvRiU5LdgwAFdVQDcp9fEfXHGNuD",
  "key10": "57YQJUWfdZVYGufsJgn9Tf6vr1P9YyJpoa6wL1TJPTpTGKtrV2caddPEv4xuiKqcmGwigReaiudHjnRuevKJmRMS",
  "key11": "5FkvdwcUgZUfyXjirddLbFM3ZCm1xmELPcP6wUxYbAx1yQKhctEUYr7o4ir15BCdJATrdePw3duvKezoVhEt3apN",
  "key12": "3GtPuFF6qHXm1pKJmptno3idNmYbyzsWXafyuNQiUuP4kXwB4nknC73iyYWAECvWk6BzMLsBG1SZrMRB2RaeUFMJ",
  "key13": "HAzJfVdbwkW4bADk7i7vFEkoHK6uzYZxAe2NuDehALfTkfaWaBi1X2vQzMeJrkhvHXdZf2WGTK2tP3r1LpKPU4Y",
  "key14": "saKcKaB83XS1M7fj3c4NjvX4Mg8GefkcnJSyAhZrxaKPwxT8MvcpxpHmNANtFEe8ZUYvo2mdy6ynwcRZU9Wvjdu",
  "key15": "2Gyz9D23SYHg6BBAJPKG2ME3X2VfphTnxLBB5yY4feTwYUJvgGkKG6vs8tchp9y5axqbJjDJZkS6RTcMUFVv6wCC",
  "key16": "54JLUBar2J1EQjPVUUZwhuRqHcNMFRcNBz3ASHBFPgksEr8F8DwhkdXrK81bDX5JfwLDLu3nD4JAMihKHUkLitud",
  "key17": "3vQQtmNxUFkjk1hVZ8YGxscQFo5xKQtZP8U5amfBFv9NPZXuGmfXVA5JcrpzwpaXccYu37U5YciC6fZjMpcPoThv",
  "key18": "4WctJcC3gNhAWeq4vPvMPNn71ckueBXy3dTibHaRGTwwuX1pftECGoBQ2KA58XWnpptemTanVhy8sYGqBqdjR7oS",
  "key19": "2PKACP5xCywYxxt3X79tJYQNA8dQtKJbRC5HBBfDodJn1W4WZGK1MBr3jeHZUb3xtQwmnwJmvcR5YLvQkF7eo8iA",
  "key20": "3EAFotkd4oeTzw4titUWtVfLKA5pxaMxfaZA5AwkuDxpuXLr57ddP28PX6GDUbbNG3xvE8UXJH6vNRd4wCmXSYxq",
  "key21": "3TtRqFaEptKx63wsPEv4tF28hA5UvD7gmhha2zBAmP76YbiLcmjdMT5xyUeSayMUxPSZQ6bre5GGfJoEuDfZsHZt",
  "key22": "2LTGMruCTVNebhD57rjr1VvRjvivkGYhnj4HG94PoGzhza3LTdxcuXwxqJhNqK8f7oezB63x1m9HVKweaMfFpnBm",
  "key23": "rFc4vtFUXJogwFcsNboyRV6n2QFVG2EFZxYT2hXvKLRmNWAU15s5pCKSiRCRQRG1fE4VumREim7QreL2yhiLDh1",
  "key24": "xLVvvsTSELzKJWc23zw9H9hcA7cvU6g4jKEKUCrzKQA6wai4GpwAE8Szy49NEwo9aBX83kQJVUegsGzHg7FkhgJ",
  "key25": "3m9uXCmzYCzN521hxDMeAbReAzqwTn9osoECXE2QBEimjwcVXHHTWuq2yCFokfeZRVqSzr3U51NkQqzDSL6MphLA",
  "key26": "2FgCQrihY6izuf1TqnxT735LzdsUg9i4VumrVGzc6NY1AyQHpqvbXcVMgZhyDZv7SKLGJDQRrpzRruHoujwYj4q5",
  "key27": "2VY3KjH8Mh5t1rHE3QzNcuWvT26NRWJzLJP3shf6e5HwTxbP2HUkNvn32zGYv4GaBbJL5Ry3cJdgPt536KpyUNbD",
  "key28": "4GPW37j4rZPc4kk6tRGjBhGtsTvgPnDtwc5YKN9criEmngDq2Z9buBGfDE4wkh92yC1JL3cfSBB6D62ZsiLXHMZP",
  "key29": "4mDFt3pydVdTk3nsxibXRQQZXfWnAyC8toUkkDcys3YruomKr7qEfHKggju2awncGT6GvwD8Ds5Hjbveykh7a66w",
  "key30": "5Hog2Y6iBzssCu8ccuUxCTC3G1sV9e1z7hHAuYWiVnnXvyEhTeg9JCxPUboQ6jjTBFUzDdR9VppJ8oe6BD7sjsVj",
  "key31": "2VA89D4QBSJwVo1TThmbTxCBc3JiguPsMAuADqtDhxVzNnvyj6t1DheyVpCKthJwYQDLQq3Wriv4zRChMMqdb7r1",
  "key32": "4RxsR5Boe1WgSunQabi5YqEqHkJEsQ57oTCkLk5wy3rhkVLPZ3s3oxJVKjFH4SQkVUV3y5Dg9yzpASQVcGEaYUHR",
  "key33": "47siqiXQQ3a4F9NkfQoHWpH8428MN2NBtaSjGfPPa2ka6rQS74xdwtqoTsovJ7i9uUzT1RbjZ38raiwevEFYpZkq",
  "key34": "2otJTYbbqjvq44L5C65cLUwnE6Th8BiuN8XqUrvFYdbEwSpF7kTqQv14cHeDhCbgPF1b7Pkx3b2gG9kdNvKiGr9w",
  "key35": "5nSyaK9aeFDQRqb9DxLuEX2Ky8FoZCXRbUsHGniDZPAhmL3ZEpC4xtKYgonMKPMQcUrytWSeHAmTFVHCZncjJyxt",
  "key36": "4iPyT5nd76X5KHiAQ1f2TYrwjvanAFuRHD7uno54CsnhJYc29hQPWBRtGjbp9AtRUyWHEMbF7oWANNanR8Cv4ebe",
  "key37": "5vLBWzbMkGcLToLomzxV1DRMdE634JYqgKPBc9m8rBBbzVYomFgPKW5Q6AaxbhNzhCJ1qCm6WufrkNjTmskJRP6d",
  "key38": "3pnbte1vJMVRaYCn8zFA8GJhdecbBzWXFzhu7cyqxGamLq7B79qyCtsWoqJxE9rAr6wEHpy5YMCDH7yDAGdtzgEh",
  "key39": "hsND2yt3adAZj2SMh1wnDVbh3YGhUVtFyE2AEqoJmTswMza6MdPMSkSc7agrMU7k2s197jWCpAXdebDi4Z7yvdU",
  "key40": "4ZBbXuN7nK4YZiZNq9EALiiqqj6c3LNauvFGVArB5SbWS8hhsYV2LYc2waAw6LvDihZELvA629x1KLM6ftquwaAX",
  "key41": "2RzJVJrvxpFw5gEzw8749Axybws4VmFEKzwGqggNqygvtsdrmGdwXGR49qCKzBeT59WY3iHgCRu1vn8EMJHByWCy",
  "key42": "4heQ9wpFLY6ZujXErVzVWeZMybNpw3V4RmYtHLZP2cLtRmyid7mVR7VqYfU4nWDTPpJzkwMsKEyb7vHmDc4kcV4m",
  "key43": "4wE5QhcSWZH4h2F414k4dZ8RhexhwUJU8B1bWvABAzq66gJBAbwA7FTD274P5j6YTBbVmPCiJNkcmMxykSZHSvFA",
  "key44": "4LPdz9takbZb3JRJuwChb1bmqa7YFyyMGBBtXRNKgjsrx3oxeEM95TCNqaUqSxmhpZU9HJH4MaM6EvPHJDixmTFh",
  "key45": "5z1Qo5WxztJQjSKVipHVLwuSs6Wd7M84db4Q9H4N35bpB6Q5rQv7FzP3mh1Byy3me8sD1UT5cLf7RkxxUTjYuCGw",
  "key46": "NJ2pVKtDfgyEqWLEECpLCUiCA83U4vy6FNWNxpL5J6NgkZ2Ugw7ZaECsMTXoG2rkBzyHNqQ3GAQ9xcKp79JHELM"
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
