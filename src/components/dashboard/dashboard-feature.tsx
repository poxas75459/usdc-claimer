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
    "3k1ZhZp7yJgoJGa9Ky4Z2UKYkP4DkkbrTADjvzxMrcz56mu21GyLEjog1FSLWeTsH81BGd6jG9u1QS7LVx5VN2Pu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5d2z4CJyXH4JFk5epwEuVKBnvDhZDaVx6bJnKW2BwsfQzySukp7SzdG5HdrVAWVDNNNucds7iLPM9g3kZ2TwTU6V",
  "key1": "2MiMC3tgCQbJvP8upjrmcmyfTxnRo31PFP4pT5NWuPKE7HS2QwwcXRUcNEnDvykPqiwgv3wFQbMRsLABbtAHN4sN",
  "key2": "aUrcZ1QdMrNkofHGYUJmmg8bLYpMwbDQJ5dBdyPH3mjJTXocQ4VthSBbum6PULHeFVh3akMAAnPSJEscCfc6x1Q",
  "key3": "2UxupViycW5UeHSMUMzg1wMWRuopyVA8ECc2kaQurRkewRWaanebqY1cRkRH9gm2ob7CSEkC7uZtWEESLFqFxqAK",
  "key4": "3WstPWfWGn2LmK4k6x2KnK8kQdUmEakJB1frQEyHgz7TDq6ct5bYuNiuP5JWYq6KFpovRkBSCyre1BxEb4UBLrsr",
  "key5": "yJVXcNjBv67SSQRoQaEnpjotfY2fG83Ph2TeWLKEwEAuYRD5crBzSiyVqKy6AcDAsXzagoK2pAJg3HKaCcZ7erm",
  "key6": "3xookFH4jDpT64TBd1LoVME8eP5WPRHqscDTHcrb6GrPbWgvdVkLdSZiJHMfG1GLDfNqkGRs2jpbbyCF2uRx3MSs",
  "key7": "5NiAfSE2JbpcMo8M27WYzCx7dkayb8Xs9ghqNUf4ppgpcQg5VPxn4FB3U3F7nkUXGveeDEQSvY43GXNpwfddHSCE",
  "key8": "4QK4wrap5RTBumNba7jnmpMpMdYJNATMazMVYmjdGeL5gPj8rmc2Rrf3Q81zqLssMdqfD8zj9V8Ew86uC3SQRLnt",
  "key9": "54XTaZLZ6Sez5ddT5mL4eELVb32qDf3KdwtytCumiqY38mEYJ5bzXG6SEVRh3jCm7GYEZ54Uuj43JepGSnt9Yrje",
  "key10": "3Kw9UwuFi9DMortndxftdtnwnzvDwcJ1Uz86soFWvx6ekc9FrduNrrcFHiiik9Pqy9JqatXGFoF7tEX3rVpGFUiF",
  "key11": "fkehoiBUr9draeAUGrgKwrzEpFwBWMFRbjJefTLfRat8LJUAgNBnp8qCtMqqowDAAzAwtu3NzFAiGueELj5niJV",
  "key12": "28MThG97BK8ToX558cVjceHbUYAtxmxo7F4AsA55miGnA4EQcr2nqZYMDtPxLm6KaCswC5psjVu36G915SNT9yCZ",
  "key13": "pgC4yezFy65aaTNLMJHm8yzJy1jHzSp5Y3gLnVMBa6JgQqJzwuSbWws6JuAeyDxUEmipUUw9BEQ4N3oTdvpor6J",
  "key14": "25Tnytc7AxTp2TWtNsFywTD7gQaCWeUpD2qk9TNScGPziTiPxJud2MMMwZwJWLavVoGoYTXPJdnPq8spsL7Bt2GE",
  "key15": "3sf3fjErZHg54iSgeMRTo5kSnLuEcqaQHwuTsdL59VrNnFoa6YBXZ91pnp6Ygj24VZHAQfvJRaVZkogud7zuvTSM",
  "key16": "5kAvEeg5omh1XW76DuMkN1bTP2Pu9tdQb1hyi7WVAWCnbX1yoSphuRvMYA4G5qTqzibv6VLT2quTHLUrLgP8VtR8",
  "key17": "5wR78Va8svmfJJDTA7kpL7CdmWSRMbMZ33S9coNCNa7oGRVqMZvCgjT38N8pnWV11vaCm74sQRe3kuxXiRyW7thu",
  "key18": "35UJuisCn3e7zD8fYupppfV2BaCvrwG4sh3tdCFSukRp5qSVxE7S1pWeKd3QTGCv3h25XL3u6SWDkpjQxCPb949E",
  "key19": "eXXnybuGk4yGUQgfG5pzLuC3zUetMQmVvLnvRMqB4xoHifEhCNWFokEDVStsk64qtE83QRYvb4CnZfiTNunub1A",
  "key20": "5jbvkhjLKFELEbzJ8tPtkVFZBJvw7fe3AwFMLQJGpTrZpjQawWDpU7EZwWnMmqyhj5AWDd7AR6P6rRX8sZGUADfP",
  "key21": "2rV9DU8JjfMwjTbJyv9zMHCfVrAE4ZgKdwiSX2VSpEXh17vcq3vDwzX38kXhKKtU68DP6tEP4VNDqi8Cg5acxQoC",
  "key22": "3trer5jvBhA2NNq32ukE5QXpwWtH7rGL5dupwhtZqgbqeMmFxmSqFy8Hp3YBreeQEJufFRem4T6FA2Z2eoW1nG8z",
  "key23": "2bktkNnsWH1zeZmq6yhEUv7PNQt8XgPagCkNJB1jBHDGo4Aq1z2ZPUccdqfoMhuaNX9MW8HzCk936nUdn7LVZ5ey",
  "key24": "2A4EgpXHZQqZk2nSzLeS96A8uwfJTjZZZQqKnxnouPrz4mTMD4SyH9XRJ8movimf1Ge5emkkPbn2zrFZZtcQvqvQ",
  "key25": "4VQhLMgBw6dt9UTbG6W3tw2hjhFKa5uTZQis3kKdJCwqkMnRMaccpqWHQeSDxBGW7x2Kzevi4UE4xWqTTcRC6NVS",
  "key26": "4zeDUDeXVs9679GGz4YuoG6HeUBqTzg3EFBeS31jvzfdZiozH32VhuAd2MpUyKWRvF53khodD9aVTan69zE1CXGK",
  "key27": "2UUuKnUjuYrrmwFWFTQKDT22WRsQHpmDSqLBAYsPRsbYVkRpbm1C3mzGLCLAWeRkJbFJQDa6niUvksXxJnAwLoEp",
  "key28": "fV5QAuGz7HJUjmwkmSPfbD5ddwn9zDTZwKtZUzs9BPFccknSiC9jLacxmKbGLfiAk9vcLgapcboqdrvEuJUHQao",
  "key29": "5Apvgp4t9k9iMiicwzoohajjUU9kQyKVoUV5gDBYbCnjDPpE6aaNs4auZeH9TkeDDhhU6C2riCLZryVVSDYhznYh",
  "key30": "5Bd3K4P422LzEDMTFVaoyP85qgHLZ2FDF9yL1YspzKX3vTcgGh3rtnXNUgCaG7dL3x8A7RPkkPjd7rLAwMwkBTC7",
  "key31": "2foPxWs2AZJ1jPs83NC4HrkYsAU445F3fizwzvd8wyT32gbJ93ooCQL5zCfZLBHWii35esokDxHfQuWqxfyTNQwW",
  "key32": "4FHQsGceBGBPsCpgqfdN5Ns3UW84nq9F3cTeLf4SrtnnDsJ4QWakwLhHzXNCkTN1KHMqHhtdxciro93azUwkT8dF",
  "key33": "UBbDd5v2oPQznTX91PFBNTx5Fs5h58SQcXrACvr2JTSKfGqXnCPvYFw7gm4JyhkinBBEeGDEcMF4gZFmVNhwYXR",
  "key34": "3YJDPUZ9Efb7RiWUFuXSrAgFuxvLmZKTZW7SHUJXimpfESgzqKzmHwjyazwR2GJzS6gWScEMsXTnDhfABZdaYC76",
  "key35": "K8Ks8tx8bxD4j98iq5doYUZwewHJJ1dxx389xeGC35WRCdif3MLE9vZUt9niTr2yHr5bV5MLJb3Rd16Cb3gtWbZ",
  "key36": "25Z4Jmopwe4hS7yVYUAmvf9CjkiRhtNX33krLXDtWMtFWDNEC8qVqaFaooYAgeoWBynEH5cQaQkDrDPEGKKFK6tE",
  "key37": "4FLNLrqrghCiBLFJeRRvsMjGMiNnC61p4euZLAJJReXjTYZVFxBrABJoaA65MAuaeBgJRGCFc9NEkFBY4zrMEa6F"
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
