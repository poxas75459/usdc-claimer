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
    "2brYySoCkqhsK3WbXXT4z6yQ4LFNeDvuTunwMEXWLZ98vUbSafxi1NvccEqCXp5Bdypi7LrqfcrJ2Ptb5i5DdoTL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MDorYsfr1p5RtVWCCJEK1yySaMmDcWw87nTrkhyBRAiMWibiTnt9ReZeaf9xWxgC5cZ1wpW6LPmo1frnwtSFEiX",
  "key1": "2kCzCNAc5ym8pnDP3tvyb9DP73GhvD7LSo71qQHNKoqw4C2ww3P6TkDfs3ZmG6RaJqqeUNutiqbNnuz9eWJUBzKk",
  "key2": "4bu4YeaxsmsCTFN776aaHPHpkBb6DuLG1sBcyyxQXsqwDLWkV2cMJkUowwLTdjAiGrVcLAyqxt3hCafsrg3x63fb",
  "key3": "5S1oLtTnJFLP38v4WK6SECdshYVbMTFuDDnxihVesSmWLJQ4yVi4D7AASRoQCUnwVxYupLJZzvCWhm7nEJBmf1ct",
  "key4": "9Xim5RPggx4fyKEa4Xonf3UACLcmjBo299kr49XVaY3FNX26wNSTxZqHnddMeFWLd9BwFkdGgtwPr4q1ckTKbU9",
  "key5": "3Qp7MAqzt555MhbcKJvxJ7JaQ9jpQ4RCAVLFp4LgVAEKaDrUEXGqgFn3J1pFfovYBRvCPWxUsMAL4hV51Y7nMZNf",
  "key6": "wVYUh1Db4zuiQFtb2C5C6Ba2f5j7Q8EHF1o3kbf4rNVfs2EQdVuSABP6GEjWFuyQUHwVt225CFDHUfFob2srHo6",
  "key7": "42GvSnUs14HEkvBn39Yj194n1Ga8wcyLKuxYWwjpzeGRMBNRyHZFoL9HkMqw8bFdPtwYUrjh9Pt2VnYAZPNjDiUo",
  "key8": "2VqRTnB5hoBYPjEo5m79YAo9C9B1wnmXPcdXnrtXzKKpCyKd3ceZNYQKS5Ac5ghHujJsYtH3XepiEszVe4Kj9Bfp",
  "key9": "HZGwCiFEgnzgnga4qJURTeDkwJRzzqS1rcAZY6MHbDceU5nQJYVSPtZH42Cv8bEtBFLKQg5GG4xppQty6d3MyrU",
  "key10": "aa65X5bMaMqyHh8FqELrjYVrsHBQQVkkQk8QTwyh4FfX7Kz3kyCojKJwwV6ViSnEvENCMUjApUCr79sWhFXo1Ax",
  "key11": "5mq4W1NFRdM3ekS8dr9JBZnTYFHcZf6n5vkrT1QuNkdiQnq1VQu4BVtf3ZjviVMp1K6mp7G6WoymHYKTdYjzvAs3",
  "key12": "2msnsJyq2wHsfGJUS2YuzNnSvLtEUMYj8WVsagwgkNieASNc9EEJtrUhEVJQ5M8qYYaoHgtEHCZDws3NL2KZYBck",
  "key13": "4t9eTvPjZ8JtQ8eQxdaCic93jY9hwfxToh2Qq324Q5FS1zjFvuUBCBJS1w1wmgDc24Kt13epgUa861vCRFiEuCLi",
  "key14": "3ERTEUauWKuauAsJ3SP8g6sE1xFCoduuMhmnzjj5jWFEAtDFcMQ9LfUyvwfc2sj1nZcWQ2AiS8kFjUCb8DVq9vUk",
  "key15": "3aGgtvdL4EuS4gxujtmcESZK5s2bS277gnrGDcoLQLY8KzxfLCX8QnYsB3ZYTR5QF2UR7YG8xVP29bvvfRWaHQxY",
  "key16": "H6dW7xAjxU3fMC83MtKbEUF3Y9cnJgEsEebTzcbpnXoiYHCGkAy3drfmoWEuwironY4zhV64GWTtnevTyfaEtVS",
  "key17": "3pgcvEeo9d8NngGZABkPbEANUGrT8tey58HMojwUSABQ3BMZoi9jAUBGxaCqdJQTYubftnhKYh5XV8G2fwgthvLb",
  "key18": "ifti63j1rrE7pVAVdDWFiigdLrpuxMrmJpUYz8fgiRhadeBL7Dq6HjFPJdHfzAUHoMk3KeSh2ogepgHFRW7tXx5",
  "key19": "2d7ynuQc6QQcNz5Vm8tfbcaVm9MGSgkkShsAuvspXddpVnAmC2VTmpGCfQqzkjxHoYt1VfcFPxMzefk2SSbHVeuP",
  "key20": "2wps3bg3hnbrR5m5JFrG2HiLyMw9nmRtCU3Xo7mYkK2i2rXyEUeUqkDQBbJ6qAyc4TgDcJW4LCR1XJvCVuvvvEtd",
  "key21": "32QqPvvnPmQ48KQZ6WXXk1ir8aezT4JvxTRqAJrHzRAhFN5Y939uLQdcc1WMp2WLd4VDDrwnxDy3joKkr9DnHYiZ",
  "key22": "V6wfj43cy7mp3Uwb7fYYYTziTfUjYrcpkwkjQGJZC6x1fKiBkpeQAzLetN2d8SnAPHhrMkTUWyWmjTQjA5aKDUK",
  "key23": "2nmsJkWq7GMoTNJcDHGz8S1YtMt6uaZxU8qPAhJ3DHzyo87Puh2L4hm3iktjHXyY8S7AS7nSqfKSLegT7x9bLEEC",
  "key24": "5T5EF4RTWKFjCoDzeHWXFSwoUdLMEXHxwTGASHTbzfwi1byoF9S7V8QoT62RCX95UUXg4kwCU792WTkxw7ze1HUT",
  "key25": "3NSPiFuqhBHx3b5unQ5DBLbb32jUYAJe9w7hQJxGbKkHZPoa2CzF9jYaTUppwUYPnF9tfLYwcQhHrMuvr5XRBiS7",
  "key26": "5Jzk4XdKD6NfDBH7o8XeoWjuNtsNEXGg4hwi5wTPgfy8mqh6kH44hYq9sYdDW1N6s1FcwicS7ETjGBHPcpWANsGj",
  "key27": "5LRwr3t47GQXj1SzQWBSKxXjac1DaKcmkPHT81P93tSA5s7N6JPUVYv4KTyMxbVKJRzzAkgZPsmk6wmDr1MdLdGM",
  "key28": "3r226om9XUuA9g5YZD3D61iDM4xAeuPHLgAw8Ntujx1WrrAU61HzWHg6NQ2kKbA7UtgaH7FoKB3QfL3j8bHakRo4",
  "key29": "3Kd3StQAJaz5vky82ZLbYuizASagfQoBPDXiUvphkYu8UfVXBmBiWZRhm3TDmNz9Txs8mVUpPbf9DkZkAnpytvDB",
  "key30": "4qaQS1SeTkfyMfJyg4XcegZzjTosjX3UZDoMaHap8k2j78bBcDaATzExynozPDXViRHMa8PZmBv7FCJeRxVysFL1",
  "key31": "5APFGycBaR3Y9KCbzUGpabY7JDkCMzUoGEZYHjW4gUWQYU46yETLox4bXoL1uey8anM2oq1FSHd6NWSRszK9Lrd",
  "key32": "2Y6FRKCdjMkCWvG1B2v9cpybwR5Rg2kTuaC1G1sZZH6rQKs2x8BXd4yRnr8SukrxZNfQ3VFKw1woxyNs9FbDZSdB",
  "key33": "3Nf1kZuX669GmfYBdqVbteysVRMqz4jPVYzmeKJ6oBJCXgwBjoRzzXxBMSDTAm7SgcYFmiTCYwphChrsnSnD4faV",
  "key34": "45twBWBagwdL2Vbu9d9tL5jAhK4SSwqDQDz1zv7TL2hyh7AT4S54HbhNACojF1dpxkeoZRnwhEMsXqzikGVMRQAq",
  "key35": "4uzrY2RDBGLzvHkEpUeutTjp4WKrSo8VeizBoqc6rdVKw9JHmvkERsANLG6gEj68e25cd7SxbmT287pEP79edcXR",
  "key36": "D8YRhNAtWJDGZxHaQw2fK4saxt6N3fHfmrGivdM3WVQVGPftRYeQPhDsMphedr8GyLEn5N8sZccc2YjhC6Wvekz",
  "key37": "e5nNUxYXCWebrzsVXyFp4JfEjhYwNmhsMkEQJ7uVB7QvJatUi1iLHidZAmDnyGCF5K5kfSXkiXcEbQ1kUXErTHs",
  "key38": "HRYpn2zJdfXPcQAj7UFD5txZbNh9GyUfQz2uWXMUhbfx8WmGRYkQgLr6ShmmeTz315A5S7uc8PTeLnFHXd5zqNJ",
  "key39": "4iLjWuhCEebGwxba9QJxe8HoAfWbhvyB9eS6XuwTA9zuqqjPbz2EkBrQNfn4rD48dfuEKd6AKM7M2sUizKs5ATNb",
  "key40": "56ry94JrUBNw88qAUkyTrVheGKZdLcWzqMUYUEhy9w17igs24nj9RKm4neZeVFgG94GuqrZEpYzPnGAzbzKKF424",
  "key41": "hgAs46yHRbCZgWvbyL4vr9RRzooNmzrbcsvRcWaoz3qjpTj19fJzZ8gJbjzd2jFZQd4Q2zoFFJYYnezE7BZhUxN",
  "key42": "5fmmTc1jNhVjPDJYDPCa7iUNuK7nu79bnTj6e1zVdtE1p1Jj8K1wJKiyS3Wx7EF7N2vPeYBGg1XBvBGfTaSDveU6",
  "key43": "4w2c7AXdt6pHPaycWAYiqKGrsytoksZLFLqgaJM3iFDXX1QSXmeZCGZbqTMve8d8KPM8F645PaSvgzLiDVFY1oE7",
  "key44": "L2wcdnjC3td3wTYzk3Eg38DdQKgU5FYXTevjcmzGf9Va7wxuxLDUhYdMBLR6fZzi5mKTCybkNnR35CaWNSay4Qd",
  "key45": "5tqpxHs8Qc6wqbfYwNPJs4wUudqR6YBxCjUd85CuAcNoWPTv4L2Y1xASbpqsmPwHUfuHntwH2oHBzcwk9pqAGzao",
  "key46": "5Y9BvsXpvPJvubqDz7UBSBRyB8ukZN9S49Z39VZux245AATL4cFG5aDciRNMEtTNty8ndYbcMzve35hifj2Xstwc",
  "key47": "2SYAS42hRun5Y6whvhQ1XdkNjSjuTKwds87QSZnPPtQjD4SoEz2UoJht3B78wNaDfy3axUPGKr3hNPAR4sTbsf3k",
  "key48": "5i1yLL7sDEWP93g2iButqbn3XFbuqnq3pMfKoALqG68En2wDzhDn6zxYP3UDzDuez8aMarbgNnEoEDScot4tTnsK"
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
