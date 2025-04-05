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
    "34joc2nFMcWWcdZ1PgNdmtyb7VEoJDscUjqREC7KkmAxvUnjJyer8waZ2ocQbPDWMvmoJ2RDo84DPoC1S2gkUAbu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58Hma8mJpozJzHBx4pxwEv85jwz7A3bcUBgDZpd4GJ2HhxRcNFcU15KvghT86bPPmr4Fs61QE31RAbxxR12UzXV6",
  "key1": "4AM7fkXoA6UK8zybfpCkgqtw91qQ6PSRAi1E9EBvqEzNvmWSpsBbw2biAiVhem1y6Knz8hqTqaHY4vY8jecLVAmS",
  "key2": "3qfdhkeCWTLmNpFYUgzvnYQAaAcaYvkqcNLSnhB2z5Jmko2Yy5wKLDkfaR8HRAndw25rpGcZkqfGEfp6ZYye5JXT",
  "key3": "4fxuwLWSLLSQ7sXHhgfP7TXFy6XrXdn729d3DRoEJpGz3KpQpAWA378oai3sYzpjgzHidm3wNG13foWoFwSPJoCZ",
  "key4": "5pgq7qY4GMZzXj7AVJJYW9TLYe4yMTWsjULRhhPMLnQXoX3J7uDGDL7tQ3amrSL5eyBejvrW6XqzjgGkSrqcxqjG",
  "key5": "2Zv3BapSf7b51mrh4GE14VqaVoR3xzBWPkkQVf7bN1nqF5w52qUt31Gr3cuLkfLsBBoxpfPF5wG8GnaWdpod3NT3",
  "key6": "UybBpGFZJ4N6sYy718vKC58PiCZ92p8MsCjkEhUQ1JpypZv92UzdcKuPLMWwwnHqx4bK5uywsLpKxbxWcH8AayD",
  "key7": "5xEUPX84qyAjjhPLE2Go9HyejQnkjLow5XPUpJebUyQprCT2tv2TxVFtg728XJJe52U88dCxJtyBLDrinTVFqKWQ",
  "key8": "GV4jdmyzY6N5qWTy9N64ftYB8iRLZtrdEKXTThbz5aNgX1jTEEj2obkS5C8D2b4QpVsETj3Zbp26ZuCpN4es6rQ",
  "key9": "2wY9AbtT75yMpzhnwZx3FvGwZc2cH9XVti8QhZSyVEPbnQcNBB7QWqWyKCRejdbx54967WS7vXZrnuHWUddE3TVQ",
  "key10": "419pDsfNecYQCvTvt4DYZaMscaUdgo7wSpZjs7LgSdyVrNLPv3AD5NRc5TqttrEhdgViUafjiXBGzWYFWBhoCaWi",
  "key11": "5QRegE2TvDFa2TiTUD6dbwJYUKKXwfP6qZ42jZcqTYMpBGYjQsGMZBzLWyXwTCDr7d3e3EXKhxqvai5ZpvXaugMr",
  "key12": "5zTQPycZScKVhPQtWamg7ne7P9tKG2sTiRSdMCAhuMcGemnzaxsfhiRg6Gu2roebgYeMauww78qZJqwbm7EPLVhM",
  "key13": "2mDe3ubF7BygcCEh82ugiwoAkkcXEoG85jExMKr65BaAabx4YoncpERq9aCmEczxxUsKjLLFt6xdcve82UP2xcvr",
  "key14": "YP2TebqUuK9SKrXpwULNaJGUzhqxjSarABQKbLRsFufrZR2qNPATapRvkvN9cQS992LBZBzkPnWY4vZV8a79Wy1",
  "key15": "2pE2rHJELrwPTnV3VAKG4F1dspnNxRjnLLVy4WmxrfJGFMWfraQuqim6tVfog3pDWrrTBVuWfAufRYmSD66Y6dVR",
  "key16": "4vJkpGaVWmVZYExtb4k81uQxXeNFTXwPJ9xf9cUBY6LhfKjZsYaDD4ghnFwBPaXtVkU1iv8WhLiMMmFu8xZU779m",
  "key17": "2tUqcsbJxx2C6ujxJZBWfVdXRdgjyGcfxviwsmX8BNNPxxCDqpVTizWZniE1Gs9UUzgqLmohpvDVkmGazAUH1CuE",
  "key18": "zQVGRYs3oSaFio92t1RkAVmc3CVskJvBHLLKkMbKR1Cs3wmvyXAru412Rt3aXJyaFDBjaJoWp5nz2Mx4hFUS6jw",
  "key19": "2Fe9e5bGgJRChQoBFoGQ6wkLi2NTTXjahXKjji57C3N4nYDfqw35m8TgZEaQaqFBvyBKPghuFtPJNDn5gzp72apZ",
  "key20": "2bNrMRsCr5udbwxwsKfuN9qeAnnZvvs41z5NSbvmHwg7aXty6dJ9dWGGhCAYrsHaXARHDv2Qyehiurst8oLGUFno",
  "key21": "SM4non7dbqn9W8hdRWAJf4oTQnCAj6n1bbSc8apNa7YuMb7BjuVcxvVnnarREB6kYuRYspPL92353tAhhQFsH76",
  "key22": "5MivXTFVGnaKNZ49VjLZgfitcihyu1svoDvfdDhnf4Ra2gmVnMVK9eHGM488GzGBYEHeh2s17CHBzA8xmJbcDjNQ",
  "key23": "2mHFTaFwereqYMofHiwPDwR5Nx85QCMdVED4kfwV2RWFybB3U7gc5vugwshmHmsWJpXa3L6XJKWMyB999VVu5YsZ",
  "key24": "5MLpfabhRkUqJHqWvchxd42ub5YkRF3ja6rx4amVrwvHzRQNP9puq9BkKi9T3uEapq4pcGnQiyPMUrzSyxQj1gSG",
  "key25": "khx21JAprVmXyVWUyin4vc9NRfyRb9CmbSiPEYbM4z29eTNkngsNUSsnYkiU3od8NgsdttoXmjw63RL2utG5aV3",
  "key26": "3EnhCgB599bpQRaJj8oBECH5TovLCJ6oowC7jwQfSy9dmSa7o122iqA6p9FZDW2WK67tETq57TvfTVJH2CHiEMGA",
  "key27": "nCQUzsY413GWyqqwHz6y16sW2v1Rv7DZs6BC29tewN2KyGqsDzFf5JdFGsPfxcEUffuyr7jQbsN2mqXZR4xeHUc",
  "key28": "3Fj4PnESHxLnKKCxbp47kkHQsX8YjagQ2FV67HtVNEADM3YcoooTn3VuquruMskbRVsKDmhFfFbEPbcwDjBza66a",
  "key29": "2zmqHUGSzjv25EhHzSe9HGoeu4QHGWEEakD99Smi85S7CYMxTBZD1ufDvsux8Utb8dxd3BPXHQGzshc5o4JCjRp2",
  "key30": "3Rgekbenj8VEqR6uoQsqNaAETU4JPW8p4nB3dMxJWk5bwrXKfzcw4sDPf6hKixnxPLULtPx9LwKZ3khoMZWtGdsA",
  "key31": "4V2HuP9MH3eYLeqKhYPLYAoqDsNCcvyTp48bGBAo7uHG8bBjCBZ9JJsJXXnVyeT82r4i8BHudYyt6Sg2YrF9uqKu",
  "key32": "5ikWRy8gm3qYzY3pHnHdtXwQAG8tfoPdbxc7fSZvav2Z6L5jg9WneQ78RnWoCYkrFQcskcnZ3Z1UWHykRdbyLSCy",
  "key33": "vfxJ3XQeXV3JYFWxj345LBtyS1f9Xc4C7a17SD2gpxuStPxDEocXhfHqGR3Tsv85aqngrNQtRefbM4HiNs9vg2t",
  "key34": "427Tio9KZ3aZpwVnR91R8capfwxskntqXgCDVifekTSy2nSVhPyzopNXdRxdL3J5fbSiMECNkcV8vkK6ycMLKVqG",
  "key35": "5wKCujEYEJyMoSje3GQvexKeBtLikKiX3g7BhnmqedsRkAhZKxaeKWf3zyybk42b5MQebcvhWeHm7S554jkEpCrV",
  "key36": "4yr95ZYkbGYTYqbn2812REwijCjWxTRGcrieziPRX4RFpCsdxyVdhuu3XxTC1DJvE5RF3quvd14mkCGosuCQDadB"
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
