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
    "2ub5yPuXNVm8swje8NLhmnLeakJz5FVcHHDSX2yvAmYyV8KtKusKGPxvMRRSLyDaLsG9G9aT6BF91P4mRa794gaa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gmMFfgHqh9djbiCXCLEgE5i37sLUaLpFqPYqJJjbFwAjdj6DVnc5Dk1QuyU8FMUbMi87Etcq2cgS9H4wCwYmGkQ",
  "key1": "55WskASNKioP8J8LAgjNTLaRzqrtC2ut5zhsQf39HfnozwYg96oz4MWSdfL7qzfBXGovD81KtR5yUxdeB5SRNbd1",
  "key2": "4B5u8UHLkAwLVbFmxLaogFzg8dSynoEfUV3AZg4BLWsQtMrU4qaDfiKHm5DxA1556DLxMudiqzf1jvEM2WgvgD2n",
  "key3": "2uJZr3dM9hfxJ6AcdZbSFVqN3s2G2agq6S9vo76fvUWNL9C1TPMmLTaN6E12Tkgq1tWAojijQsydGza1NHbmgRX8",
  "key4": "3cCGBvRwVtqjFDRLEFGtH9mmxan6gmPnaNepDC4gC55THd4L2rTzXmzsUtVyXbSxEpxTy2pjTuaNj1FpLWfSEHDC",
  "key5": "3eN3R7BJFYNivin4pwgpH8cAtZoYdw7Q4K8XzgPrAwYGsLHApi5v4jpL9Fp7v1q1QZgti9TAD2skAwCYXcJNQ7b7",
  "key6": "4ddHBn1yA3rEnMLLhtLSpvRv4c7bE89Z1tmdB9beRjoFtS7ZdqpFqxL5yG1ZoevDPex65WEpmE23zmoB58ovaHLz",
  "key7": "4Xyq3BHirmy2RsnU6VcEFwS1CeaQMfXovPT5hsNqSgFuNAZt8PmrzEHjaNYTxxkUU4Ff98vwnG5mfRe7tvPf49qy",
  "key8": "3PHjM1zPqpQ8rLEivyWQYxgKRz2uyTJSgHGURzMBakyEQvz3D2ui9hS4tQB2Y63x8NjFjC8AnK8W2SZVYiTqbFvm",
  "key9": "4qD8PRUuewJiyQC1vRy2wJsMKk6obVAuG88twBH6cPbykbYUUrizDUoUbnWr4aWNWbjpmm3MHDGiiypshezkh2u1",
  "key10": "2EvhuUv3q66gF9zSKaAAi7qb5mXWYJjGAsjY31qDMV9rqPMPv8jykv6SPqpuTGxHSpTSfC14NQuijxBw56zTaNn6",
  "key11": "i1juNPxR7o6JQwVHhE9VsiiyC1yUQNnhkJQrnotnsoKeXFE5KpDwDK8pnHT899kdd4mParkHMhMWnGJ1MjnmnFr",
  "key12": "4pveBBQ2vpWRstkYAR2ewvGE7B6dpEdLLjWUNPYLKi1kiksE43vbkBjxVbR9YUxipMfrQmp54VH5cTfnnLbkKP9X",
  "key13": "2DtYGh8hKWcBQdoEMp2U9Fu8chKL4ngbunmjzgtAZXFPkNfbPimkQ1L252wCiEG4sU1SWVrmozD5QgZgPK3oaeyq",
  "key14": "5xLhh5r22G5y3GFPfEFhLdjcgzJeLXVxb8FKw4AP98cKjepXjGU24jdyX9YnrfsqMuq9haMhbJfYqvZtbbxtQ3M9",
  "key15": "3qLNK4SUznqL5ySHGKW8qGnwbyYrG9nm6M7LjwBsseLzwC3HPAUcp5aVQWmCyozHnYt4M75w1akz3hV28KTrxrUC",
  "key16": "2e1oNYi67tKHXUaCLbRBuCkCiTYSL8Eg7r58Ykga56Ru3N3hPdYkwZNW5LS7nS5Cm4RcnksCNNx39dGnucCnEHzb",
  "key17": "2d4P5spZmenwgGgWPaANqGdxjUcBiQXa1KTUs23sDifFd8q5bKSjvAX8DsMdB1DtKy8YMc1DXfyYL4V8NSf4tgns",
  "key18": "3yedyeRfQTDcvBw3rbYFpQCZFufsCZvjfTRHyoGJ4EoBfuEexEBGJYujz5MJ8GvLS3KvVB6FYjrYao8mnzjC7Wpe",
  "key19": "15xmewAgeNmkkkZDZpX9NGwwxqCv26Ya6oTxjJU8ofeoRUG7bR5PPQzQSVY37WD5nKhbvDcVrHbCtf9eLHvATxE",
  "key20": "4mSCx857HqknmuFmxaDjkjmHhxQvBTPH1HchTdMeeHVT9GDZ4qQgsnFnYqYTEdKC37LMGFFzb59mYGcabV89BxYH",
  "key21": "nYwkQXZSu4VHxXA9aqkHcgtqmqi4StQrs5c2TpSFzatNYTzWht9qTDZmSbUTAnUubwvQgkuXwMRyRgZyJM4onBF",
  "key22": "2owxtiZkCFr66iaTvUvq1tw1AMK9YxCn11zPeNkGxUpv9Ss5Ara2ZyMWzyeBbnWcnpuTfTk15Df8ci3xmNZP35tm",
  "key23": "L92ZMpQ9uiUU5v7VjX5j1o2K2jjS9urhTdMXFidRWfjKTxvsQFD8stt5ebrHsVuDz5AHSHsffgLApm5dEYirFwD",
  "key24": "4Sjsni9c6RavuZ34KfKrw3bPMYV5kuivm3SoH9EgFPrF7kLBdaYBHH7XR4MwhuUQdMRt2ow88koHA5P7TLviurUm",
  "key25": "Je8qg2ffXrZ8kp1wk9xVGCZGKttqm8tPsL4A3BZ1gyTZ5xm5UuCpKvT1KdFLPkZkzqiKLyJ24TYTFPS2uMSdNJx",
  "key26": "2tSK5gYWjc9vSYkPcWzCMpLhnFitCToPRTciSAm1hXVn9FGVbrW85VPeMbyWEDQU51zqmLXA5Yr6ZJjZ3h6bHuKt",
  "key27": "43syUQrnRUCFZYooKK85mSjJeweACNVS9A9Mvc2emwoSJpwcewgGncu4h2y3DtHGLLbYudRbbCYZs8KTrbRNAAgG",
  "key28": "2N3Dne1Tttc1Rps96GdxH3Lf4kGF8ej8FAZdaeoP6a8KPak9HGyGugRKDb6hqRMSJoEkceDCjvvMdWJNWXnZUAdK",
  "key29": "5rBUsbnXBLXHpAdidWCD74bBFRpBidTpwAbERMBfu4TEhupHdFL6E66WmmkUEQ8EK2GKX3sAMWgqY52fMFcWHGgz",
  "key30": "dSKkkyF7r3R37pA2JnQCzqj4eAXCXH7ryZBDRrfMSyeeMs9LcHD6gEtjQLik7mM24QJKcAmBLanrmbqPSRXwkeU",
  "key31": "5c5n2Zm3ntdtuNWsxRX9GAzF5zm9o4UsWuviavVu7nXL9gJkT8D9Z7Mgv2L4MNwtjCbfCwtsX2oKJtDFErJdxSWn",
  "key32": "2PZgom7ixvkM41skjj9BVBTrCDQktJENarEjU7Gu794Kwt8cwA9vtY6vUhG6GyS1pFFhee1S7AkSiD9Ketjuwne1",
  "key33": "5tqE9Pm7XT332Hn63hT3WqZu9kUNjqQjzgjr3HWUqhJrK1ztqTunAb4hzTsfdvKWHiLrGmHUjKkStDioaMouezkM",
  "key34": "2iaGgVJCGhdbzUG4ULtzkgTTA3Kvv2kwzpYpo5wWFpxfuGsfNNUSnf3TAgGW6zcnPABnHcYgFQZEteNUVawv3TyS",
  "key35": "3SiyFeaoWriGrygNR7cHTn36gpb35m7EbvHKW2VrXA5NnWVPwA4n3T398FzsnZxGBYUQt7WVfsWrGNMvebgrQrkW",
  "key36": "5sPhAzhYz53NxPCF3EqhiYb16WmLy3nWxYURRKJtbW3gu4RRT3o8Sw3RaGUgRmssup6wahuemd4kcfeKWxnevTpW",
  "key37": "3CoUMZNYfLyZwWQDep1UuT2K6kEYFeCzbPrk7dX3uwccs7fj7JEHiPVEo5UFv5KaKgCNhZ6MvC8QpHVXuuQS1YZQ",
  "key38": "5aR2RyR6GmWtP99C88X1TEGeKV9DV5uE8V5MHYyBzbs98gZStk3zFvKR8Lwg6okKptJDQXtYge7PyzyDfw3pyEa6",
  "key39": "vyKym27EAKa88skYfEHTgdX5eEFBJGes6fzS1SqZU1Xu2h4eMnEz9uSVYmPH9W9ULsVWqnAPC9ZsMo8asF1ZdgY",
  "key40": "2cAwjNAGpzEc8JPEqB8oM6Vav6k8pZXdKv5Bkh4j3C44v2tZ7DcCLbbnqdyvpKFBAEVaqbzZ87QvtXV6hA9awpc7",
  "key41": "2nyQMCxvBvzmUYfwSA78KatuZPp7nZB2CUaE4BKsYw2N1K7xLMiTRPYpfsJpz9AjvZBg5SPpohkj8yskLFbfLZDU",
  "key42": "3G9oS8fvKVfPSMuFvCR5AKSRMsuFHDtHw871eMZTJNvPSQA13rT92nJDsXAc9XTaVUR7drkcTXpPT7oyiTxjQFQ9",
  "key43": "YYQPgvzSW5nvwHXo8zx7UnUfRsd1ArL3bS3gXB6rNHbuX4dG7TCGx8Cvpnx6RWyjDpL5WbxMf94BNzYMXLdtuUG",
  "key44": "5p4sGcCG2caN6jbtfuB5fHy1iHJEVq55Fzw3SZFkANhvSbas6TucNAyBqBFiQ1ceV7ZK5tbE3XDzSFTDRbUHZL6p",
  "key45": "2puiQdvqVuF2kk9bTk5kdGEa9RAkFkEbFhmNbuhPcjS835uCtXh9v1wVp7ttLT9u22Ny917XnATp3CkGs413Vu3V"
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
