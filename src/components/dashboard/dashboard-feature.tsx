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
    "4MnTzNU1S5EDhahgH8QTcN8BfhDhiiuug2BZCbex7AHriPWDsNuQb4Qnf7rACFtbpCMcY2hmQPVE2jG6RKt78F64"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2h2ThVxbqWEbuMAM94VpDmfWCzKfvKYjjnDWsWegW1RMBiLakBLaAGQ6fzvch8XRQJqFkp3L2Z6SpS7EFHfecdBB",
  "key1": "2P8TXxp3DHdT9r6Cbc2WqAT38ZSVqZUSbRBMySzrrujjp7wKAMiS4svurdS3prGM93iGepDCP3YzKAwPAEPpseEG",
  "key2": "4eRMRhxBcQg8GP5DauwwjcA8vkB1MccY8nSQppCuyUnumyQwbm8bzUVWwTosWjPq66pPHaSEeYpFwvzX4MV5bN6M",
  "key3": "5UTtCjJNJW3FUXPhqvt95rE8kPsR9W1Gan1ozxpMaM4zL22Ni2Wy6WuoQrccSjoFdiZuK4tDkfHbwWrpc8emZuNY",
  "key4": "3Xxktu5X1Ai7DxgP9Eqnk9pMsySRiTAJERaAoQZ184yd5QHwemYiDvdu1T6z3ocxE9vLkEJz4xYzutcpqotsx4SS",
  "key5": "4SesTjLTk17aQbDhcftnjMQxVkGvwUezMCaNEGQUtxwhUxVNusKcSqCsVYsNYRDXGA2nv9ysKPSMCnYor4kMr8Nq",
  "key6": "3CVSMZp57FAwkx6wEEuLaaBtXRBEVLkx2bsbG65xuQLyKC2zzpSynk3d7MDgp7oFzw7uGixT9VauJNuuYM4uZjUs",
  "key7": "2DgbUV3zNy2HkjGr6ChJ96VyhJtQbnrr9WCuaZ1UHXKBCZnpyEuQGqYLhhKprXQBBTzqQoXmM2Sw1HDKaYyTMb5q",
  "key8": "621R561m5zPPqepWJkDB4oUbj9zCzM6qzQPPe2pWDNxDYMWeJjFpQr1yAAqaUJ3LURHGx5t6H6D4TS68zeNmKKTh",
  "key9": "48dHjjjytSiyUiwwczLKHcuGtJgLTRVrvooSd7qfNs6LYN59m3E3AT7y8rCLhJRwMwUmwugQ2Y2paF97bqYVbYp2",
  "key10": "5J7PK1zQRuLuRDSfPeRJMZj1kV3RQQPPQBePK9VRghW2QB1hrosm7uZk1aL2fHP5387nucRHrC9xQ29Jm8LENR7i",
  "key11": "5kuPqWSsfuBRNQqNYoi7A5UCHCcuq3TgbsRW9GAqBepU6Z6oErZ6uHbQLEXts4x8rpWwF9fcyzgC1Cdn9WRJqBbe",
  "key12": "1a2AdAtNvj9ZSfb5B7KUsBgc6KQAsa4CBg8Rkk8fuNJD67FV1PmsL2wTZNVPH1nkAMjPTE5BRpyPLFPki2aP3xv",
  "key13": "wxpVNDtRKqBgfcpqHoWE2BWVyBeMmkPomuYWUhTRjYmsTyMBZ9hgJ6h9MeqeeGrsQZFsPP9PtkXAcMc3sNmxizP",
  "key14": "2yA4EGPBLvDmHLvQA4HYFh9NeQuYVwrY9kLDjbSPjos8og4aCAcG54izLAFRavQWDNdvGigNLmfAD6BJxzannc6F",
  "key15": "2tQVHLZAsCZiHnsLdbFDtcKVkcoGZ5e1BWib3zwEDBsfjUXh6WS9rAqjteaqQqrku98z7v6jXJ8eh86pax43ASsp",
  "key16": "3LoC9Wr1Hnaa7ijd3UweQ6ztXn3y2hkHFpeYEa5yCo72NYUvS6u2L8uGEjoxvG7NrGr9MfRLW9H8nDXoYmiG8Tdc",
  "key17": "43rQPDASLEiZSswAzeDCE8JARSYA2KDARMNrRj2mv4ehM8Upo8i2BJBGRjmVE1qkdAP27ZJ84GtUKPX3k7AWdaqo",
  "key18": "2F7F9dwnYzz71vaKfJYjJXhcS2UN9T2PsLu32pVWpxv5pmEnR9iBXNX4Ch4adqq3UnE4FC9tH7XkBmKMJ2cnD6RR",
  "key19": "3ovfH31HsBSZmh3k5xe5EG9FiFKacyuNjkknP7a1sQegv5eVqfKwizJkXa26EQw8Dy2aHxTWRb6tcoV8bZsxXodR",
  "key20": "3Q9QghBrRmp7VcjxD5jm7WYWutn1wZeiapjFZBv95Ge7iayc4PqXEexLVpN7DrYVZ5fpWtUSP8yqoqUmLTfEZg2p",
  "key21": "4JjCLbz2HqUDUYzqtkPX9VGzsd7Cv38pXeFJY6JTb5PX9C2tuCG9nMDF9M5se2j2j59wr4MiBuQdYBJQnQYwE8xq",
  "key22": "4jMSNH5gPzyjCfcnAvY4uLA32zdEEFGpiqpLpf84wzYMtAzxtyqSMRd4ngY8HSDd5jRD1oGyQDFGhPyLqo4tojtb",
  "key23": "LGFuoZYkczmq6qzpmikU9HHteWRcJs7weBzcNyWr8TKqLwHuWoFYX7vig8Dfh8yY2YweA22371H2evooddJLmUf",
  "key24": "3ca1Pz1aZaSbgQZibcP8PsGq2HwixqbdHAjtQKrH4DggmorYVHi6Gf1Y6Sfny4VsFhKHkRMaQUtshS4uQz5w85ky",
  "key25": "3RqFHpYEm3Kg1bt29giUs7A4q9DxYa2bZyj9HJpc5DJ7zhhgiq52qzZBDVeDJbiCBaTpGCQTxLoHj2fPrsQwQPFv",
  "key26": "4kuPUJr1mB6wr6ohrujXX5N5joE92nPjY4WtEv4zmDrMW6WpLq5KY62ECPF8G3wP2jJBBfnxw93gkR2TyYGM1Vq2",
  "key27": "39uth72DrgRYeuzYCLXqaSrv6Z66st8DUUHMVMgLuge2AJNFndS45Y76y6Ro5B1YhZhyebqDS1W2vYxyBGet8yZV",
  "key28": "4yga3vEPyNLqpS32EQZcnjestn6uT3bYVqXR4WecoKVmwt83B8fYe2bGbb9dM641p3dhtPKpk4RjKhKaNQFXj9gE",
  "key29": "38oCngqaqsBzqWZQQnCCtAY7cT9LPHQyeCni12ArKBVvL5ZDevGGVb4mx8hm2ZbWQ5ZTBz8w8Fd15GkikpfQ9paT",
  "key30": "4WXwj9k9CcLLo65Fi2T3BHHTkG7yZ93BZra9qv3ww57ZbJuSzpiGuthRT3VuvCEfEuAdf82oFm3qys9XhuQnmuMK"
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
