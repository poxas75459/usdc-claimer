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
    "pHq5N8GR12AGQBD9MR7LPe28nFFMDWPZjY8FFNGFSSS6cykzqFHTN75yxPHAzQA93puqivwLs7CUnq6nDqmtoWS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jSFQuVxCX1cb8rxVPC24cVHUPbpg6a1eC8sLXjD7vn5xYYhQgSgUgcxE39t2rP4U7f8HhCbGcTxBcXAGXFhUzr4",
  "key1": "2U6cKKqKdJjSNhhDd6UhNrbgxb9ZjNL5gRK4apecZMkBgcLeqpYhdm3Uhjv8ogLegE2X3ZJiCxdBtMxVTVsAeYjc",
  "key2": "3JfgdNzsFK66QgL9YHovmyShQcC8QgYRE9y5WKYyxqFbdK5q4oLDT8kvKLGE1Gh7PcjkLmGkzfSq8nHWkwKjZtca",
  "key3": "5hokR5RmNHsWPsw2beqUFo2aYYtgYt9Ts8UUgqMsV5MwsjMBHV7s9arUZtqLBrJXdbhJn3Q2jatAAEzprDF1U1m7",
  "key4": "5Ahh2NrWpYh43JSvLC88yo8xSnPfdQ8Lxzzn7ChraAUMimC6ztsHSD6pSo5pFhavyp1q4HFteiGCMZXVSdzNfb3p",
  "key5": "2PRViKkHFjuWh8HPq8biibXMjXNroH2zK6pAHiNHt5Q8Ng9c4CC6cESqS9UGYHQHtFKPJKYoHCWU6bdLPWoSx23w",
  "key6": "2cAJbKGn1JD1h6yvHpM4gdNYdJ7L8TpRssV7BhAHBXYfR3gqe3niaod68XeBzqHh8Tj7uGqvJc4nqYDSLZytgCNy",
  "key7": "4yAE9htUXEPpz33hraBbgvwrmhgFb7gxr1mbFBUqVvGag12Tjx3cgXiPnRNwDRk4wQPqxdreNp4dkfXRotPQvVUr",
  "key8": "5phDJ4pmdhyf3kBuVeSa8SaqTULQQhaZ6HKPcsTTqGrcXh4bdYzm5BGbLhCBpFjFr9LXNdvAZiPvYY8LgyLsUySw",
  "key9": "2dVjw7JDKxQkGcBETXr1nabyr78Kxk6UXPYL3K5ghH5VCgbGBZEZSDvUJEt9py9pPxRBnPf15wYTXVQdueojAMpJ",
  "key10": "3Uc7cqoRvHUKKNEU3g2bNuPhdM3FrL7J9CGDAMexBfMxuNbPUAMChLBZ6p8RoEcQdmZcEdyWU9StBg7r44AkudkD",
  "key11": "52k7HKJEahBvUo6SWRmxLnNhP3tQsmPrRdptiadho5SNn3pdyPdhSs7pH2ULHsdjYyhbzUPyspy7Bh7phptx29xv",
  "key12": "231mnEBb5JyTsGWF3oyLZCfBNDCeaDjC7Mzhuyo2j5CSJGyFiHNHU8ebAkhEpfMfpTnN7KukeKMdCXGEWJH6wCUp",
  "key13": "38hTrXcKM5Tvcin84yqY9wEGwJEaPMBDVqA7bxBU2uXD6q7tH1CPt3rsLUjQY27gqGwoLMKdcQsPUZPaRQw5FwoM",
  "key14": "23jiyb6UNxcwmUUGaqY1u5we21Rk1NQekGyVDwAJdL53ZHaN4mn8Rb5spttY1Nx6NmcPbZdNhqmV2gn1854BiiyQ",
  "key15": "387etSxA9oMFyx2uXo3nHnfwFC4VNoVepuepVTaLYNn16sKBhohj3qAL8MDJg8Peg6wwZzR3zNXWqD5HFYVq4iXd",
  "key16": "31ZUxPQeVuKaUiz32C1yEh6BrLG3PY1DeJVDgnawqYhoaw9VRJAUmwEkN6oBAboKaruBh8VgTqKJGKwpyBRDTibs",
  "key17": "5yKDLmHhndFYxFWcdFmTtBKBMJG1KoLgnXkZgpg7usZv1dkJAPyNn8Pbe4ZfAxhsFDUKx11NXC917eo7LW5AMEBt",
  "key18": "3ft6L7ATfuQ4N2vrLPa6n5xHD1uxqbV7Y8zZYv6unRCD1qJqXcKFGFcKj3TXMn2wMX3kdpz2fa19BLeW7CiVLRiB",
  "key19": "5KVwjKsRgoJUbxgSm3KkDx6X2ZRZqmuuzCJxModTpvsA2D5txvzJpR4giAovcPFwdegGS2QkS6jayaMZppsCnwXL",
  "key20": "3gusgFkMeWCSrWfG7LtzKkdRbAdXhoDxpxKAvsT2yc8JsEoY9UDamZAqTMHKaa3LtjhorL8xfQ7QsSMZ38esAiM6",
  "key21": "5KkRMNaeWY3LSzr8YfCZk4Mo3A6zqCSBsHat3tF8ncpECGzSEG5EM4HgbC1NAgQUwMJBTse4zsWaLsVmpSXtYZBz",
  "key22": "2EVpWtjcXajPfXvmAJ7tVhE13tYGNiw977ULcsF48QKBWttst9mRmvFDc52QKzAqaGJc6bUDm9vXzVvqr7pzuFtE",
  "key23": "55XULAVT2HLvC9SPKGqr2gELfYX16eekVMZTjsJv9zmRhQ5674VeFQuUtzkENfKWVxyoaZZsMww4vdW7iHnt8m5w",
  "key24": "3kTTwzUaBzvRy4HfnJ2wG7MHCpcxsVtxxQbNtn2zCBuRSZ3FWbcvzAenph4Hcg4JSkEmb2hyAhAtPR8uxDdumxLh",
  "key25": "2uhxne5ACdxNe5h6yAB2cqBWe2xiDwxE6cjYhADFGNYha4TBfXWg8dxZVK4EF6TpJXuy4kEyHsD4r5e1zGkvJm5i",
  "key26": "2VvPuK6seqGamLjrkCWYsU8zigfaeojqazAcsg855yNBgmwi6yXGyUhCqChWjLa8ucv1oJZcX7h8p8mqsvDT6CKq",
  "key27": "2oauHzHGy8BUn9D6HwTnGxrjp96J2EUNJFw4N1ua4ba2VxasykM6o1eR3yET2KAEA9JTPqkZw4HztrBnfmK6HXyd",
  "key28": "5Fg4xoP6NX5meRLHXuc2MJLeQXJM6ap6Qfi2Ccy7bqxYbkCPVtjsoY5ZmGHBbcMApzB62LFhoMfWhMnUkmyfkYuz",
  "key29": "vGiBCmCbwqBNMGMzMq2oZ1AjNXnAvu1WwnXvbz1Vo5feiYGpZGXGBE4hkfaKX3FbEr1ZBCQarUZxQWbAfGY9Ps8",
  "key30": "2fH2YnkNQHEzg6X1xZrXteTGiAMhKvXfdasaCHLA3mnSP2j6mGPWWtPpagKdnoG4vzfRVPoDFYuACeirw4rJihzt",
  "key31": "5vYxD2Ri86s739kM9AuvkZnWPCbfzaHsA42uUUuG9zNqLuGudDjHFCqct9griuYHQRRXXw9YdPtscVDuYnAk4etL",
  "key32": "5Yzfh4bt9a9pfMA6gWsEJPr3nVkS2svJzLxJ1pDk6nvhnTtoL1ok9CACMoHHSW7gQB4Yzy1cnfY46jeeCayk7Sy",
  "key33": "3gNB9kxhBFHZ2vz6RnjdXWD8QFZAkhsoscJ3MHagpSS5xNS7kX452PGEATeSbvMmDvKqPZ4rdTT67sLhJNQAsnW2",
  "key34": "5WFjUacXsS9tK6jWp71RgsNAdZVk4faRnM4DD8qoJLxGd9L45uqWHQAyoZRe5tnbgYZFaw2c4aLiVK8eowzfJRys",
  "key35": "2HqcmNERPk3htwztyKhvLMaaLH8s6zPotJGLrwurAgsFjdNcii3SojjtUE7qMNwDZCBx2TGcGcCm4FPSGuptX6vi",
  "key36": "4mQGfvsuq7HADV9Aky4SLwFfFzUX8tVhhCPJ9KaPxbQYiv2HXUB6KNNtYTPVH3QdCpPDqNpP2ngN3t3YPiHtxw5a",
  "key37": "5ESbtPMYgH2Khb7ZsExWUBScf2M5KcneM8ptt8wXXigKfo23jRmm6V972BEzp2egizweZfhjakMxAs6jjKUkpauN",
  "key38": "5csvC5WK6LNCo1FNfDpCXhnCJR2XwuQdavspVxuSPbwrT7PuPaHkcJFRXL4gZGLg6xXFpeJMnpV3EkCt2fPWRTi2",
  "key39": "5H6vAv1sb5qTWU1WGKjsoyAHpnsiXu88KRwLErNHmWfXFxqPqypvcQCfnzJSWsHWMUKC7Bh9N1XF3BACJy6Uc6wd",
  "key40": "55xpUssse6zowtFHdPdtGSp65DAFrtNhsHemTRxWHxPWh6ru6YjCbWTfqAtGSSrMy9mdS8QpsouFhNXypyLh4T6m",
  "key41": "8ManV4qd2RYpouzBeJYbxmEi1prisLqd1rQKMLPfN2r6BX3TCRuTpdWenJDb7uczuUZCZJv7uenAxpYf4Z8nERT",
  "key42": "4A9agJVmA1HD6G5xT9q7Jh8R8yLADX4M1fcEa1Rt6r86YAA2ZRRfhYPFcnspavCoWT4oHyGtRnYwQWR6LAbLk8aV",
  "key43": "3H3beT1GCr3ytnUTVSfRSg9MPnCRycVyZzitWZnuHEpGGJ9paDj9sQTacBdzuLYtk3uGQVvHNhkNnMZ9QQ6Kwghe",
  "key44": "2tFh7kBHDgBrsc7gAPcuugBFKZDbRocUvKaEyRMeF3Sv6BzFyD9KRrj3ekJ2zsPPDQm1mipFgWccs6kC1PC7AHc5"
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
