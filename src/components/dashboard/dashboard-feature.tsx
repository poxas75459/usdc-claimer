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
    "dqiqFUcwqNRg4BuxQKoj5zHzuzEjgGLcnbxuTaCWLnCXZ5bABDZddbSz868f94o6LRYw5PBGLrjBQQkoRWR5NGo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22uVBC3LSgXVqUPzS96MVLwgqCLZGHfgKpCoWnNUKsfYnmmmvPpkXPaEyBz4ajVeZbAsmA5EV6PK1nZdDnpqjN7G",
  "key1": "4VcPSQUE2665kA8PX7fTJgKzK9xX6AeM29WmeJqY3MC4Qp6JUwwsn5PUA49Az3Fnvfu89Jj175CeEMiwpSdQJU88",
  "key2": "2zV6BEaZMmsb663TmFG5tkXcHU25RyCXz1xfZH26AnGAum8MZnY2ixdreQ5GgVgjFH7Na2GhRBqqucw8pXqQwz65",
  "key3": "euksdgy3sMATwdX3HY9fRHx2GiydgLZLEeUX1MAhC2X55zpSgVSxMa7n6WsLrYNupxKBfG8ETLJcJtu4s3DathR",
  "key4": "4LD2BmwdsVAUKfwZpWPhiR7uGpMKJ6VKPPeej8qHoSuhu5teVvRcYFUZFhqszDJ4tEaRxVLVDoGRk2TZE68ax998",
  "key5": "4WBywqAMi2FBrQsPcD8JMn3JiVWyRExjG7ePSwgPbp9vRL3usmd1ggpXXj6b3DLSpLempqH1nGW6MUGAKzJdQHwk",
  "key6": "2Ys1UjL7F5eg4P4rhCvqjSjTK1UtQ1AWDDqthieT2N4NSBfdGpo33xqRgo6g4YzJGajCuogUN3ojmhLvMvjdUbBM",
  "key7": "4JmeiWzD3quiweEvqDF6pUhnyQu2hiHUtj5D8aWVDhNo25HGktroWjjahXNUbqja4GfX6fc43oupkYmAfCA7Lym1",
  "key8": "5Km4Lz1cckCTrJwb5vpPxs7nQHQhDftuCWmgWrafAoMpE72BEiyLu1bDojMRpGpD1D4rX4YCLbmSE2bXieFPFf7k",
  "key9": "2Y645NtK4Xj7PoE7hNw8EaagwMqrUxZtkZK1UvfBP5TbYFSjNiQTXEnTnMZkQXv1HfEkW9gkufm86M3vgRiKe4QQ",
  "key10": "5p2Gx2kzo2bXNRnmjEEypRXqEw8ZgLuZ3VYRLnQkYfSxvmoaphuudgv4S3UjSGUmRv7qYnqmwnxhevRAn4WqjuHN",
  "key11": "34EbcqL2iZK8ezqFkybF6b141EryivYDF2Uti8mNX6PgMvRyiBmXAd7kfjcqSBz3BF44vLrg1wgtC2mw3EJTFPFc",
  "key12": "2oq4r8zR7zcDT1W9Wf2vU4SpNjgpVLtgfH5girPPaN3yuu1JGJraGXi5Sxxr7bftXoeqahH34oDghXfQzGZ4ZGSY",
  "key13": "5gYok4TBSNYWofbh3TQvp1fa8SPMvaNoKgucgh3pQVsgF8Ug1EC1m7FUM1WsMvwV1tAioMYh14ZBCGPR4vigfaAm",
  "key14": "4dZ71fRApQAvAp2MTUiLSxSNx4QD36CAg6esbi2JfeiSUYq5uKeCYW4CZaboLveWS24rpKr66KkdHVopgeYaKy9c",
  "key15": "3bm8uMRJzjqMHwPB8FAYhv243zbq1RA5G8RarXiFV9KbJsKH4T9uHR27bkED2BdaAM9kpgdBwGjfB27Rp7EZAAS7",
  "key16": "5X2ULVKoc4nbaYWEdoM2QmG9vdbFYMgL1FK1aSm9DoskyabEi8Ge1AtSa5Ks3phQaznCv7CpLnA8a8knmVSnyb2",
  "key17": "2UnR3FRTSv5Q2Qn5K2sKmPMX6ZWBe2ndYKUW1zhbFrLSagmCTAXDuvR1Nc86FdsHLm8ZEhXK4vqRnJNLkUm5rpBT",
  "key18": "5LiPoVkSYysyVsqDc5SkzmftgNcJ6C8fLgfgaBP6zVFvMwFH1XsBzqWS8oFJJ6fUKMZr4LQ1q1GJyp672xc7Qn8v",
  "key19": "5bKqfPwhG63x5GDphupo5KBasQXWc9XKMWrR1NWDdep45VwgykdNoFXM1u5TQy1TR7Mjvf1dCRq8dn6G3VksuKCq",
  "key20": "324wXxd4tzratJvw31XdA6XRVQyj2EgCW4v2MCm8aGVayPKG75Lxkfk1tQa6A9juQ7injjPnZNzTUWYxsDT9LeYT",
  "key21": "aRs2bYr68K7kdrxtDKkmMiHcYS1pSdQg7kZSgSaXtm5hwZbs4Kx2PTsfJbrcNVun7Kzwfn6WhiP7a6tHTKumSvX",
  "key22": "TxjLRrAyQJndNtvNPvNyGLggi1DAvhZ4bjyzfBYzN3dGHZREbr69HEYvsuyt6rnJWZvCA5x8asDm1iyFdapqwgW",
  "key23": "3Z8P2wkEGuETxaF42nwkNQbHmV8JAZN7DqPZ1yiC535UXRPzwGxDo4rX9zD3fttvkuBaUgpTQXoGam9rqHQLkxWK",
  "key24": "5hbyCsoSkzw2fwecBx483a3Df2ihefNrD5Nm7bMtVniX29xb2hcvMLfMg3d4poZV8bsanvkrKK943F7HEG4H8wt2",
  "key25": "eX8PHTHkLUACFpFH4keWEFpmnDwvTsYtrfqKVvwXwBC78UtyaLTjoQqmXKph8kbCeAR5H5gBHxCrumiMrMLf36x",
  "key26": "HHnPZitkSVtv6JntqfpTmYZmd18bksFTrX8rP7tXNrN2r5Hk2UMuwenRhsxwsR3Xi8t19QPcMrWvz9k4suLcn5g",
  "key27": "JTjZb53ajgqr1PCyhfwk7yA6CMBGzw1TBg4k5RN3qYPaf5U3N7iK95pZpc274kfrW5DnL9dMBHih4NbYJP7nrQx",
  "key28": "3ZgAKz81GpWCJxrQ8kvEaVEL7jcqEpLXMXnv9HdS2zFR7kwNZs3iHSkeE6t9GthnEjQEbYmaXKYgq9xhUxm5CYfs",
  "key29": "UntHUmCisiQgKcxMGbPTKnXDP1rAYYvtvbyH49n3reBZLJMiBp6ZqQE6NVoEmq84ryZgfjh8UhmYazuHrK2oSLy",
  "key30": "4dBZEJaBdjcisQNf9LWJTAgHCviNniUKBwsf1mgWrhCsm8C6axPQqR4GphiukyJoEZKgy6Ti1SiHWcu83Yf66wR6",
  "key31": "4mYGxsHhrHhhAgAHRpeg4SVQrHqx3mnBpq88gs7Ea3yQr1UH2cYA6ye2YoQDz2rFTEm2dfMzZr3WfxFoeiCZF2TZ",
  "key32": "5hwNTH1vHo3HoGXPvRd3qGXBF3A2W71sFvdm6yyedHUgvohEB9ygWQeD5joZqdiQP3f2NQvUooh3rB4uUcadaPNf",
  "key33": "5R1jTJyFmn3MMk6aUN1Fd6SYfqHrwENEBWxMMrjNgQfBxV7MW64S1LKUDDvFf4oujQXdSWC1GuSidFRGjHNfbywX",
  "key34": "3nwc5p9vHdi6A2pKriyNmD6bVwfXbttEqLJJYEi8cEBhAD3p9TrxjPwGr1geqn35rn52iCSpCmKCuyxNSASQBHQ4",
  "key35": "2TBXKPpUhu1U9xCEdcbwnFiVYn9M2kYB5LP3h1vEvFRFpxHA7YtibHbNZYEeQCC78mtBovJtUtCG1whuEBpXvXtG",
  "key36": "4pVZCTxPKGCrtT2mbfV7mEfp5DKYeayX2DMMT9JFzjbE3kh8xvecWamdifZCgXiEafdR3DmTBuJdBJzJXsVKrZDn",
  "key37": "JbSxGcS9rt8rfMMzM3edeKW52YrgqGenehgbtqCYhH2Z9AscHgSs3zFr4o1Mq2YHQLEWYz1Hb6kPXvbsRxUgxeZ",
  "key38": "2GwCgS1SgYSmnTWyJm6WvhzpYK8mZddiRXbrwwFSZaXFVoeZzgtxH9A6GuzDXngtxZ9tFXPb7ck1SSxeUVgtiRhq",
  "key39": "X1yxdxaTxnEHw9sYkxyBxc8LUzR1zNUNCWsnULfUCxZSYNB2nFLujHGxRG5P2zjebc74QMXLNJVJTbRApbTSrsm",
  "key40": "3bbSD2YWkXnYPAU1zrB8Jut4eiD5TvJttJwvXbcV72eimiJ7efRGGQTV5chtzcjVx5WqHrDN9Gygx43ayLrd3Wm3",
  "key41": "2f2QY113roqCSrfQnEDUwjyBDsPx5wWGK5jLF9Msv9qVaHxkVXm6vLE43cVodYaPUgrzJYFTEwexNgxEPMcgdHYf",
  "key42": "64AxKbdMXuSGr2zKhD5ipisbzkSf1nMZHHyhFfC8TnxT9q51Rw3rJK3iWbDpBCkYymvmf3JaEojg4JTsUeAsxwBv",
  "key43": "4ovP2mjnkG7rJ9Bc3KrHrZLoifV2ChsUU6C1dYmCSwTdi9m2honKgQgBr5Y4es67ihTWJDu2umssJfWLg6FVPaWk",
  "key44": "4NcqfYVhmBxMUn7RDTwcb5qEyKQVgC7F2xMTS6sPAgE4RgrshrwZSEBaUkQGyqY7ZYDaEg1Jq4DcpdDuFMJwT7aF",
  "key45": "3CeVLyVtfrDgkZp5EudeK4716a1cEiyZe9uu9amP53sB1s1ADcHsPDDppaGCXV7SdXRW92vFw9BYuD4vmq8cprCg",
  "key46": "3Z6HUx8FfMqASqb7N7rQgnvzHo7xCyUxR6oMfCqycSz1HaeF8iZx9cEN1eYW5RHoRygM7mTMTPaFNjoaK9L44jWB",
  "key47": "5fShyad9TNFoqz19uoddeJXJHhGhTanxVVqt6mPUbB4fYxd2NB5GUfVu5tMiHK27pNVLKJTVrdPmb97dTSro82kQ",
  "key48": "4zKstVP95Gs1Ne4uRtHp8yeWENsxjiNa61VgG2XvnmvHHfoMqQeKz4Pfrn4XK3PBc6FxjELndaFuvayoG6EQprSu",
  "key49": "bJJxEVtFAk9t3b5txUDTt253SeVexJnvRTGG4MSR5jLWYoeSdBKG9PU9qm4QmHp5wGut2hMzSEzGNymE5rwwBpN"
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
