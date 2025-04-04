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
    "5vXHKeEf6QxzAtxvruS2MKSXDhG72ZVijNq6ZtRbX81RuwBFBXNDM86D8w4yD4FRq4KZ7nTHv8gCs8obc2rUU3Ss"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yCwtTqqDYCHkiKJjMUW82fydRSHR9FSS6vGnRjjBrGsFEjS6vbVfG6FXCfMx1LiR7x6LtFGjVfCzz9mYpH8ye9N",
  "key1": "3jJU1WJUQeNUqK6GG6etSJJ9nUreU7rm4DbmQ68Xrh4sN8jHCszvgzExvV2C7mdp9E5MmZGGRerByPCDmPJWC41c",
  "key2": "4r9y7ZjBTDg2X5pe9uBLC4Uw7JkArbtGMFwtrV17dH5c4Q4WwypNHiSN4KzY2A7B2PggFCA4e2pppPRmYiykamqn",
  "key3": "3D148t3iMPGpN1N24Qw3FH1CphQkjk1ZMeP1fj8YurfTFiQbDFgJoWBmK9kHGG7Wf7yyRW3heb9AuyN7Ms8mbXiF",
  "key4": "21AuTJ8Gj5H2FAQmmyZsRwq8rYfc2pmejiUenF4SM32jrfi7k4qAnsxpy72Kz41STL3YDeimY9DKtiowptA8yKuB",
  "key5": "3vHn2NVtDEgUvhe4hrvqeaBd6i6oTJBEanXTyB8cvqXWwqKKVLyYopEvfbrUPyw5NMV8nSjfqBdkTRo89doDtEP5",
  "key6": "3nYe32H4rnNjSnr3JQ1pUuZLujntYGPvEbsKP6CyWJcC7MwZdadwRsKSfhp72zqqCjYxynTMP7jXM3zt3zGjXrUj",
  "key7": "4Ue9tqs76JXUeH1HzBCUKvUoeZBoSCvBnKwpwMExaLQJ6wMm2gBV1SSqWnTW7oZ8xD4jMeHyCVx9Aov6Fw4TJBeF",
  "key8": "5Z6NagYuJ3ge4Dz8JNksiX2m2ePLd67usW8yxPU3sLurLba5GX78mRs6YZz7azaK7w2nRTbGzP3ibzYMNpF3ghe1",
  "key9": "28Vpy3zqTa5rTJY6kxie3YKY5MXERv3pdsXPz6n4UtfanV2WMiZ2XgSJFGgMbs1pa94DMsb2xR95CVWThTCtvCY5",
  "key10": "2ZQ8bvnDhWg9XodqWDvr6RrGxf3ranEPVUfLSEo4CH2rnhjCArEsLoZzhApBP32NHyczo4nTwvmHcaPP1EDHpL1x",
  "key11": "4RpJ6gxYVnRSEEh7i1zyPrda6YQqmLq7zQT1e2c35qM27BBsdXjsFKnHwh9iuZdanScmAiLLZN8YdZaZxp9bFnd7",
  "key12": "3ZzLJ3KTjjvVrEiWtDsuBH7DDS8ud76Dy1i4s7TRK9NLRR6tGYZTLSgpyarWxDydZKnPAAf3jnbASh4Kocw1Qh1Q",
  "key13": "4a3k3S719QxcmjQyfpQPzSx8FhDxsXxMJyRavs4sr2vPqRjj2Prj1hfaVpMDbuoghnHfFdgwdSTZp6p8dXftj2B2",
  "key14": "RLE2J9XjQ7KYJ4e3BtcBwSKWDrAL77i1kk4NdN1x8Jw5BShMNQ7K9HBG4EAt7s9LTAkeqSQ7wJJ3tfyK9GKFq7W",
  "key15": "5otuA2WcUjq8f3kj58b2EXzVEGrFXgBxACS7FJDcs8mbqzmKXc8V2MrnNpSWrf3T3ip5J5HfbjPfjDV45DkJagU7",
  "key16": "33WPUrvye3nxCxJwVjJ5GKvWWwdkU2q5gsMZUo5hwK8qQX9GQzjWdd3CjwZ6KzLoDijBjK3q3pgqA5bXkRjvWERZ",
  "key17": "3X4MJ8UbVcosSeg455FrvZju3yjDtALfK2SwsFxnzC5WAXPVBb1kKy7f2FKJaRDPjxdpcckzuAWRXXB3W1xjjLge",
  "key18": "33YKPg8r5Nqfcz1Av1HUBUKu7KRtzJRNoth4PE3W6RLBFUnfkjZRzA9R8EDZJo3TxrVw3w64RpPz5fz3Fqbrp28w",
  "key19": "4vxjXhgWTtctHzbX3Rh2nHyZU9UqesUKLeRjyyMonj8UXemTSzkv13ZPZNBdSfCE95FrjTSJiyPNgr2gNczg2fzq",
  "key20": "BB3veQfDy8jJsS38gCFTiE7iEWARvEBbZTrmVVUSjMrQueifw6rJouisPsmuPHWv3p72SmyyEPRmPbzrcewCQmc",
  "key21": "jisbtdoJymPj67zaCr7cScpptPANdKrFHRrSkXuiFxnwaYsrJ1QjT5WmL4pDwhfoWY3LSbYBzVbV8Es7XUuQY2B",
  "key22": "4XvcCRoV8Mq2dGGegpxSTZ9dT8B514SzQGTuEByBdtLSdf3eiHpvyDqWd4JeoX62Wq22pD13zhSE1oWPmt71MFyg",
  "key23": "3mFgdUNEQigGpgziXSQLC8LoKm8H1tPTJxMCBkEXK3jv8BrStMjqNAmBJvCmcLQM74Yt71eZmmZaaji7S6dTM6Rf",
  "key24": "m7M9jJsZ184mDaEru6yhxuZnjX14iJTCKtbLZzSdRY6PNEuHy4jcqJbuXny2F9mA18R5xnVgrzDbw2vS8iALEET",
  "key25": "2YPxZRkjauPz7x45pGHF9PPAZF3BJGKijvq3VK8HqGgUM1XKibFha5qveHeggr1DSnc1yZZ21LUREGPEkHyPTRZ",
  "key26": "3NpM7uCWDVY37LyaJsXs1oyZ82zyJLYf1K2JDxzNvGNSEFp7QfvKPmB4f14p782XCthVeoHvegQBu8Uis4aLpXLT",
  "key27": "jveseHPK4QeiTWh8c8UFKZq7P264ujm9QEFezTSZESwtrRe9xaY2itjjKUa7SH24qA2EYwUstBB5eQsueHuMKcw",
  "key28": "5xiVDdzWTrAL2GPLRsXe314rTVv4vR587HnHZRUjHSfQ2D1rwi6ugm3RZqhVJaPoBGKto4MBxjtC4b6FTy1CtHJi",
  "key29": "3TTkVrvVdzVRbVPVPeLFQYTJZgLRwXK7GkuqT4fZVbybdJb7dfb3ctwBVLgL5eUQyNseRqQtZTPQhtLhoECoJ7kp",
  "key30": "hkwauKt2YDpWKySTerbBsGUrEByERs1hXeavZM2CxPAdTpy5uTCdehQ17NyqF4THxGagTcsZ2ynxdKUYCdkvMCb",
  "key31": "fem1faGVGf117CYYT4v8hunGKAL3oaWC33CZhTv6dGbVD7m77LSM5kPqv598YyuUBKSAL7F7UQjK4XL2viXUDX2",
  "key32": "3ykemLWA6tzeHoBKnJ59hS8DcwMuHhpM5L3qhuEoWYMFHXDBqwZTCceGkHvHVcLBCfuEXuAP6hXTeyUbTceZv2vk",
  "key33": "ZkQfe3Jfz5auvRMeJxQNV7tAf1M5NGVn536hpugfPJNkgAZe1U3ULN13S21WiWNKVbVTadTDjJtLiQ8SXS7kyQj",
  "key34": "2p5XTao6YFM32osKdLf96fr3oDt5e1cnUjFmSyFnMD8n11Xb3FXPunoQqHTXeHekuqK8CtfoYfHc26nZwgbZWCPp",
  "key35": "5jx7bdNMMzf6reoK9cQyLVbPranBN3PECknYE5zkszXvxMMqHcnAaQ7er9rFZ3gVRr38xmP9qvvThrDA9wxBR9S5",
  "key36": "5HcpyeaJPddECqyrQpfsAd7tDTaQ1T8Tyb34iy9id3WY5nfACKRoGV8f9bTSkjGZmDkwLESybkHFnF1vBLfinsmR",
  "key37": "21oCokvp2VY77gSUbdYVdPfQZz2QpYTBtYKPkKvXv1ArC5Qk3UX9Q9TppyTfb2P7xKMjxDV37h9tRmHb2mTjvqkQ"
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
