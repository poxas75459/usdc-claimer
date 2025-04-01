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
    "FSD16x4YanCBzGu5bEGk5AyPqqe2Xy3yJ3uitXUwxrsva7KbSJecsUAHvpEgd2pB4XFP6puoTDw6sZAQ5kxoi7L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qCRPv3TbJHGmGDjxHEb9yFwxN3Pibvg2xND9vmJmURanKhG5EhTrDF37CbFpRbEQsfWp6s9WUXZCZmgbVwjQBdL",
  "key1": "2FochFL73FCGyJE85KtAtWDZuXnHk4HE9D6U6yZUFigYAjgQABkAzAWVMoothf5mTSG5D2YVZpSeAqVwepfEnoYW",
  "key2": "33EXGLHZrinp2TeSM14r3KVEyAHYucS1g6jjVSRP92doCrXdL9ZbAdvSYKMAD8yfKDQMs2HR6C6duZnAb7E58eX6",
  "key3": "3uxyMpbYAvKZvsxTozWXPJBfjzo4K9cP8mf6TVn3CsSzqArMmhmFXhTn9m2XrGTfrX8NrEm7RvhfZzfZJBgDbC4w",
  "key4": "5oUw4bDRbfEMnqm9FoWJEhBB1Hgkbc1724TQaRDuyJoMX6kG55ABTgZ9UP3MSARcR9JJdiJR6hGH3fTDGL9kunN",
  "key5": "2p44CB98kcPZjFifkRVPcC5emkB192QLtGs7E4qVGKJ7B5RNtsLutXuEyJPLSncTyBizz8L1ikAB1SSNGkSK1wR8",
  "key6": "5HRi78nLy7eviTRJU5rBPGuHU8hAAkoDV7ZDtvqyLdKBsTMwXFuUp2sp6j4MMmcgMnnBnVv1b6CZS8LbaMdzEsRn",
  "key7": "4xCTcGkrsmRPaApUNR2wax1Rq5jtSvrBayrmgnJXHF18GE3McthKLvrc9YK2hz2VjQC71iLt9sUcHSNnHCun3yEb",
  "key8": "2gQ8rkqfTsqF8L9Y9vryXYuTtvfk9jHjwCntN7Ra51d5snEEpBoZzYsCQpFXjmv5PsgwfQjVeLCPy1XYQwkHpJbQ",
  "key9": "529Z9pixFH2iLhfoMRy4ybCCtSZ5R5H9shDdrnBR61ubMnXNYtddKTkpMTTrGtK8c1x6tmLnTnb98rbFbSbQuji2",
  "key10": "3Tpu2fvwPCZDRboATAZcvPqJNTiAD8xRaVGWBfGu8cGTRxekA7DMvuLit1yEMKdcaxL9cjxa6WYQyRsWcoavygCh",
  "key11": "5pvpVB8TYQqVBGZNrgvMDiKqAaVZjUxj6LoPjvQ3SHskRxdApAv2PxW2DmPyPhQdjLpABAA9icSYcD8EhfNPBrLN",
  "key12": "2d7zx1TVitjxdH4e3zwWbGPSifK6mqRvF9CGS5Rg3bWTWadCDDp1JFTpNVxbCkS5i8YHM8ophRGfirtReg5xRHSS",
  "key13": "NjfAQ23kv8KN3fcqM6mvhDeCDXoxuvsxrGxgVR9gdEbwuuYBUbzxf3pZU7HZWUzwrHraNCNSeXWeWVaxV689h9z",
  "key14": "5dUpL1SA2DGUwQsczsJ1cMkGQYe9WtARmYhYnqUNmZTmAA55FvyP6X36aMk98QkDRUpRCvSe8Xr49zGM7b6X5mxx",
  "key15": "3H3n7tjhbVc6dqGJcJufMPiSiHtttEaK4a1BeoPTmnMPUg8UoM8k1YE8LAyX2pBdG1ezCVrdtFAXWJ1BM8GYw18R",
  "key16": "54waepghsr9vz3ZJ4KNK9uCjUGq4FuWStn1CxKjuvbAEbCscmyujbpJo5bkEZdKJDUhPCZP4meCqb7R7my28Qt4N",
  "key17": "5JRyGPuSDpEyiczsbPu6huVejVnQB7fc9xRmUG2QKG3k6ApBPUbU1QnRR43cuURDFRfoAEknpdr3eaY8bDzizqi4",
  "key18": "2U1D5t1GuAqySiCNSutTsy4oE1jTvj1Xw2bpXGbBgHC77sH3EPkmnJxtYmnQjC4yKo7uZFSUYopPaHgHi5diX82G",
  "key19": "5zuGfmaJauY5TiXNQPmHx4qSgXEKDTpXPwBdiVa7Luimsi7s9h5Pne2C7fV4z93BL4hRuai2k5v4iqLTBkb7GQWB",
  "key20": "4Pi33AWC27DRyt1jHXgxfyrjSAugDojMhnMyMfiDRYDGm3tpdEC1rnJ4zRUmzqasjpyjt3pyiaowMNJyHqtvy4Q7",
  "key21": "3CBduEGmj4gWj9L1nL4iemv4jEVz1oCFBCVH55K6MJDmgFgGSrycAvidW2a2nSysfVLQtCmZR2kGnkWse45SXhNv",
  "key22": "2JSrAkUCexooi5KFFMYATVHuYoQAD1zCPKyFHi2ouT25CGGvMwWFRZ4BsAyT1dDVGsXnacjD5PZ9PH9QHLeaXs3k",
  "key23": "2ERMCGv52tnp1nRL3kXLHW5NsEZsAb6Dv6RqT1TL83Cuy9xDmDASjEJVd5aQLMYJ8UFMSjcGwE6aLvcxEjKpvKdk",
  "key24": "3Tia1izRMNTTBF7sNwkyZk53PHKsn3a9XLqDqtgHKnRZ7TMAFYXGcbkgV4KQRM4FzjiMMExcdN4m9o7hzbf2z7fw",
  "key25": "2SAB1KQN1LWX63QvpJ6GZJ8cDnHTAoQLq2CzQLiyNpdbRp67BrvvGBRp9fjwaMCKvC6Uonfcoss8mst6CGXj7XPF",
  "key26": "333ihNFAWsMCYUAhvHVLoVCskDf8atzWjuLXJvFWtgewztYBqtJopAPSgDjcL9jbUJ3YmsNEQhupK9as6JnCA4Ns",
  "key27": "4xzvH7RhqFA4JnvfNtLQ4dRz52UX4tds2Mz93DuguGWjJGU5zL3FhhMNp5ELvrq7wLXTytXMrMGNBEXceWgdH5fs",
  "key28": "2ygPgyJA8hvHw6tfduxzuVumXo4PiHScyTkQcbqEbUtnSvzJjrfFmWDVeB5JDULeheqnEoPC24HvSu9rPDMQ94aX",
  "key29": "28LvXEjvzKEFHzqgXfFmB3s9fpoyu1Vk66SXLLhETqztHqHMfTXyQBkm7WfzrbyqCR9N8D8T2r3pVTxpAHmB3C6d",
  "key30": "4rLabC3QhhR68N45GJo2ybT6XCV3xX8Wm4W7xWJzNHAr66pQBMyUN2b1Ko3E3zgyhM1JGq6t5Sem4Bf2VbuPxqap",
  "key31": "2yu4YxH2XTZudTAwP9pWpoh5tgr9rfuLbHwEvbTfm1Az5ZdiMn55P1SXxHKcUKy5vcuV2MWf5nwmtUjHRN45Merh",
  "key32": "42RyUmwpynfBAfS6VbCa2qdxnWMhv4qMKs9BnAnActeMYSGXq4mD5QntNukcLYpw3EgVkty1csqi1uHoqpzCcqmd",
  "key33": "4QCY9tw44CD7wXqeHLysY69pzM9GBCF5z4s4YqmvCutCJHAQECm59knGdkb6RCQFVCbsTU5ZLvYwsj1iSM4VFrMj",
  "key34": "3p266HfUf1CYfVn7DBggpdnhYe2DoPn5v6aG7PFMq39Ma7CsJ7ptSywqgFs9H8f71RHiZ5tdTjVCgPtFAyX2Hrv1",
  "key35": "45SEZMnFGUtv5PvND2Q7XLyWPStD6iiYBwxs8iw2L1h6wmdYnuA5uwsi31cTLa4qzU4EZsihUKTDBXsvdwicxgBf",
  "key36": "4Z7J1W8YXYdksKLYHLguWEcEuhRwRweSEsaq56hiJueJ8AqtAShtcDLkWNVy7RPqV5jm7CjnBxu1ExhWmoshWdcg",
  "key37": "8f6EFrwckbpvWeWy7y3d6VdKxRcBWEVQLJnWRdnR5FQXKK2aNWX84qobEreGq3snZff5jpoQ7JYKD8cZBoDxsGS",
  "key38": "2dU8mW29xxQErTU6xzer7oECmg5eys5Y3xRqijvhh93cvQC8wG2dU5B2ULQypF5GQqqvY845SmtByEi5TRY3K7Lw",
  "key39": "5hZ5E3D1usRrFyTYFJKza58jBVpnQyLVu87ErRtJFj8fdU34csBzJeA4zEAm2LVQkKBCCVUPY7bXqZgbz6bMs2vc"
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
