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
    "2GioePqBoAcQRarQi8R7L3tMNb6yQRjidF7Sest6o7M1d7GefBb88Bqcyy8iDxyu4DgpRaipoVAJMxwKWr9PnjLX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GF4vJEbgCwmYogFqzaCC2wL6oULUSVkQaeRRcWKn1TGWH2Br4Eb4mgqYGWh17u3bLdx182SiRDQ8rkmcZANrEws",
  "key1": "4y4qZJ3Ku7CMV9PoNx2ArRRBYbgg7m8BghSVUhAUqC2oe1znsffMM8JkWjk2irLHysCi7zVdNsjPzWKpAywXwwug",
  "key2": "4UQW33ugFpsTnsdDUziWhp5sFjaCcCBTVRNNqUq97kkCqZFuTkdmmw2sdXDbDBD5648vWx6Bs8KkPT8hm69BGUuc",
  "key3": "B55pR2eRq4Xh3JB5f7opUzHbjP4hRTpEzSMt9Lh8C51GdJbrmSyVBQGm9atXHYf75NfHr88LByzNbgo2q2bsuZd",
  "key4": "2FxpCpaWiAPzsJsvZSHMQWXYGDuxhKks6w14PJG1bYZM1WqksNC6dBSYR4RsRfFfuz1FPZ935eb9SAi6oL6iz4xe",
  "key5": "5Wbbmr99D1fxXML7xmikCk3k3bLcMAm5jW8xozoBkobG8j1UNSGt1Wz7K7sRmVVJhjVRVf1pEAjXW41c9hruwoeq",
  "key6": "5BbcodRAxgXezvxRy2XidvR18WeMS7xswdEfe6LuzSyjfYH7ezAwnG8JQRtLm7H6SfPkLTCMWB9Bkkn5eDa6R2Qh",
  "key7": "5UzYFXB3saqJLvqcrscGKbr2sAvDto7fgMc6vSwocfpgjtToH8Gr6TSYPCqGK6EifHwN8qSrGiiDArjt62Wsz8bh",
  "key8": "4DU4xvDRv93TWJq8DzHb9qwL4D9s1JBPb7kUx7o39tUhw16MYXPjLSP3hxxFdtvcfx233yjSmED8wSQHvem3efRZ",
  "key9": "3ypUkagSC89DuYwJc2ajW1x2nsFSgzjwa3bduJdMSzCGDf6UQWUZoiBwXTsvHYHanZHYkSam4gxmY42YF8sTjMUo",
  "key10": "DstdWQMjcbFUfWkTXD3M54y1iLUP28iS9gvfmQ371p7BGdrM9QviDAVw31u25gbSyLB5C2myYXvtef3thJmo41k",
  "key11": "4Qa2adUuWrAKc8UV5Tq9oBjfFf4smYEbzZntNWLzi4FJ8gDqfskFcPRRRQp3TdaXfeNdBeLkDnj6p5e41XA8D4GC",
  "key12": "4EGkBkHH7aPZY63vLmGf4AaTbQjSbrjW8wi9CH3zEZYZ27Rv68yi6cMyao4HCjQSrUnGoMj2FkXgXVN713swBKKL",
  "key13": "3yPtiUFMSZHH56gpC3UsP23pAn8gWpKfq8CgU4BDDtgBz8MJ9NARc5mz8gzNiT5PmZMTogE7avjcrLU62MgMeckh",
  "key14": "pQsmMbByRmREcDVCxdXgXb3UPvTyJ6VE4Jwkf7idQzhYxiiMy4Gh7NeHBn4HJG3EMADwYLS5Y2WmRH5NwPgaQFE",
  "key15": "33dFpYQ5DWpvxKGR7Q2sgNzyriSRPMo57FPAZsrY1r9e9hvDmsfnuUJRnqqZuT5BmW7mukj7yNezn9F5pq7ktV6N",
  "key16": "3YHZspimtihCQuLPw7pYgyEyYx2UAQYngTLjrgypkRPmvx1qFLBAkZDX3Ewci8xebrJtNgMxZq753rx68XRmyjEE",
  "key17": "dYqhzxE2QwwJ7FM8xbRgpqdh7zae8LL8Ztso9LYhvxiAP9VahFbnBE8ANuK7CnDJksC96r3csTHRb49c77FpRvy",
  "key18": "2Wfm8YzyQDMQtzTYm1MUfDn2GY4J2cGN18knbahCgKNLx3UFJc8pa4ttiag12eQvfBR76LFRQ6waazv5xCVJo7vs",
  "key19": "4FVDREvYBw8RcUegQ2MD21a8YRdJQDbyznR7xmjcE5UDxmA52GdHt4JgQnXMZ8LG29e3kQKsC9V2DrKUKzbNUULF",
  "key20": "EcEHkHy5CkPzgKGiBgqWZ8Vp8zWVboXkPwdEg37Q8opDZBTtRs54a7yC6htPzeQGfDBrbUz42j1TprE4giMbRvA",
  "key21": "i2sdgoYHqmuAaHmTDLUGXR3jdKaVChrDoHuuxidfQuQVxZedMrSant9SiSSev5xvdAq3gyPwm83eYHxVmLKssJu",
  "key22": "4hDNsMtd68xXxLgwSrKmztp6mtNDENFDX7LTCFj2Uzz2K27pCjzGZtbbxMfpsahDUJCwv7xzZ6j27UdR32Bf6CW",
  "key23": "BqrC9Hcx6wkKdhDm3j5Kk7scYCLF4DSuaDrpVswSuFAoCExPZNGi3f9yYTnmJsmXjXqS5h5dQMzBfgC5thtzvxT",
  "key24": "YepK5WnLC9owK2vGvV9fjYZ4c2Z7NrHP7svbGqwQi8uYYbBZuJF228npiEFKF14N34gnHhXRCAALtPyG5TmQn4v",
  "key25": "58R4rWny7PXe8mDz8JoL4Tm7zRLPNJLmeUDAQcmfHjqduN39Y2CMZnXJUat43esrR22WrJGT5WN1sdUEeiMtvffV",
  "key26": "2x25fDb7rj7PA8tymrh7j6K5Kb8UcUVoBJ4cCJjeFWvBfUTNYUQ1KoQymt7QbVjPcgohTYPdTErmJLu2YEkPYVnN",
  "key27": "2DQtsjSFGwNTpGyiC2qKjbwUcwjKyVDPjDieq51Cr1gnQ3k4k42rqiqexaAKVTJU2zMnfyvrftFscvD55bH2jQqz",
  "key28": "3wuU881DQUsMt22G6cwW4ZvVPijV16eLxeHLuKCqeMhCUwmwF2faV91H6VV3UqgLtuypVYMnG8Pong1o22A7vgpo",
  "key29": "4aB3nJ2Y3HhbmNqipP5x5Z7WzKWabUQ2kE1xeYu32AE5fRC4GUhDyrpSeg9vqTik2GqZyPC6u9cYP2zSx2QLdRY2",
  "key30": "4GrDHLvX15bDwWPX5WFDUUh6SQ4522jPdG6bL3AWEeJdzFPE23HDZ6Q6Nz421VvHij8TP8w5U7gYU8ewu5Mng29o",
  "key31": "Q76x6gHLz4v7HpMGgjWRgL9Vp9RCFTcVjpdfoQQqcbfQdqCTwpheeU6Yn4btVuNFoyZvzikmzCqFeTZnX6GwJj1",
  "key32": "44ZDm1qptJ79Swavphkxjj4if5QQzL9uCQsqMzJvTpcBESFLMWdQv7uvzfzTY4T5dAKaKEWpxZWiyzzvzGMt1rrF",
  "key33": "3FJ1KDKrCeSuFiHopKbWa248ji8biM7dDHcjV9aUs8PRM36QUpvtWVzFszXkrRn6Ro4HsUq5swKuH8UqwpBJDkwg",
  "key34": "vKgdGrC66oJKYjJGghRWDhKfNke8ffmg25PrDP5LS4ez9C2mFHUfpPZ47jHMLDGJwgMq7Z8yrvPk5B8Z7RiCobP",
  "key35": "RLKyc93Hr1e4TJ9ApDU6yPMHmtn4sn6tQmcvwfo6sQZoB8J47R9XXSo7LaVRz4dhe1pPSwGujkJVGunEdurT2M7",
  "key36": "8QK34heFCXJ5EZ8CZh96v3FrxmfhRwxHUaKbJBTnvQTbCDZKVnDQ8Na1Yihov2FwbX3it25927gtFSy2GiPJbYA",
  "key37": "5jxZDp4WstBqiiKBsNdxii4X2J3XqG4JWZiLrJxvDz41gbut2UWXDTjmSrykMmmU9dqU2Ei96tSiWHAjZjgauK14",
  "key38": "5ha1B1pZx2wsL7t4FHpToyDnPtqMWSsHiyT347v99wooVtRUfTvzYfejLyPKDaqz2knebkuKJqQoiYVtBwwJBQjG",
  "key39": "3KgCjpQ4FXN4Y5vf7vYW92tnzU8KZuAbWe16hNXWBUEQtdmwz4ayvnbccXCoJJhAuS5cXujc49n76NLtktf873Tp",
  "key40": "2GPLZYu1qSEtxkojXRM7JAboSmV6QZbWGw2a8Y31tjQSS1rnLuPEmvf6khrvWSaSJWtg7EHwqL2HEb9GxBfjNFCn",
  "key41": "2c8gQ9kggBLjR1zqDrwTifR13T5ocTkHognwk2uXRktqNqzEzkE8MMdYJjTFKBgSUfhdp8dzDdxSZQfSJ6dGjKgW",
  "key42": "5G9oYPdbTJpDYCsNDJ3Q5gjj5UbpTCrFmdJorm1Kv4DGXX4iuvnDeYJyGUDq5sVHGuUtfK1j2zgY8tcXjnK2p4tf",
  "key43": "2nhZ4MyGLT9YoFrTLZL9Uu48QvmRWNYxtnTc9XwzyRDKNoFtFQHtRFXQAb99kn9SetCRZqzFvT5Eeaq9vkDLhFM4",
  "key44": "v2qQqqJuMU795natExfftfabSu1WSM44Zu1BhRELdiiA6FTKBjZV692Bn94TcTrGsouTX7Hmsz9LuWAkEhgf5JR"
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
