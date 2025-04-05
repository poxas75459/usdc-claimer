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
    "2YcXyKybeseZ6rqXTi2PJ9MQuR2qGSQGCBHpyNvFU6HED9LEWsPyxUcTSmGJk6o7sDzMJ6i4CUny9cbg7L5D8rjG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tt8hgQrzTruPZJFiyPp8JqVxZhe3AgWiEuyhTWfNtyDH4RXYYsq5vTPVZj3UF3ydztH48JMdu7mkD2bKwQviaki",
  "key1": "4dktrkkzaLcAsu4cBAS27U1D8iRmZKhT7pinUKRi662a2TTvuZiHhfK3rXayNFuXZMb5DmAcEpzRahEAmuzrii8s",
  "key2": "APrF6szJKnv9oijf1ZSqyVJPbphnU6aTN9v1CPNpHJDi7oGZVFuKWrXy6KjQfncY2qxvEPpBthjfRZmHGxoydyi",
  "key3": "5qgJqjzo84gfhW8WhQU4hF1DXTWz2EM2xnpEGSj2dWwnRs3VSnxSsCq7ZcJP1ATkZWYueBgkNVHFmLgHFAcnVMoc",
  "key4": "eb4dz9UKLPhAkmW7LXy6wiQQkV32bfBqGXsZCrSDmiufyi97gj6boKw36ii7s43NwnmupmEtUGe4r8Mh1sEP9HQ",
  "key5": "3bks99B4uCCibFjS2yG2xM3qFixcxjeZdgHi4zVtQfSVwPPxqTqJjdLSRfQS2xUw1qBhsWfzYBNkUtuutwmk75Jc",
  "key6": "5dxottJf4CC4KkDnpN9HmTsEqNW2K8csHzXkFobXAmDWQs1k46ABF4QHMjrGHEBTFMjMDuTRWvomjcifPtqmEU6o",
  "key7": "4wFawoY8wi4t4KN9vPfzNEeZsN1xkn5nDPxFRrQ9UveqCS3Wf4qYjMAQYWkKZi6F6yV5kbEfjm2EXZdqVo8pGWBX",
  "key8": "3ePCBuCMVAhMA6d8NXnbf3xW938v7eoy2gDQsZQkVgK7hzRCDqDDEGh11GTsJvi8WviaEv5gxxDU3roafTECafDY",
  "key9": "5Hfee8yvDS3z8V1WewcgyGQVAdr2VNLMnFu49KhPwKpZmmzpm72BFB719ZcH7wTo7m4DxyF8uDpjENfhM5F91PTD",
  "key10": "3TjdqP57scjcBV21xpG8nbFb14smeS54kn2u1AzYexfQeS3dG52LWiB6ynf3j1nhpuPhsQjnd1J8cTa6HVARYzVU",
  "key11": "5KDRAQpyhVbP6L2JwsWDznS89Ev8VKfw8vU1Dv3kZhbPwbJFjFeFzfy81aPNryVwJznszAKNXdaeDcXsNZYBkmQH",
  "key12": "3FLtfxuLfhghUdpjai7uzS2ucGPCEynEU7fhsakKF3hgb549bRr38e3E1fGYidZbQ74RAQgUo5zrACbt48pJdKTe",
  "key13": "3ubTV9doe9LgzkqdUhr1DpKqoHhemGp2v4gYbTkzirPd23vN9VzWDPCjazMU9FSBdJEXNyfnq8G1o1CbupEp43tJ",
  "key14": "2PXNNbyK1uiKUjZsvBNpjFD5dLBbCffKS5KtfdfsQNRv8Dm2YxTRHJnmtJeS9Edp6ccmwUNbmeuz2NfhQEMDNxEE",
  "key15": "5xFruEmR8tHwZnFpgfL2UE2LeqS8TCzGuDCJnbQqhXB78nF7FjAkHLUrvQAHSSLmKhAyNYMgEWBagniBzrWDQuHz",
  "key16": "4RswfRwcW27quKRNHpjNnVStA9Nz5TLebT7fGmZed6iGg5YY31DfH5fZbAaw22E7nKREXNyspNXZ6NTZZh94Y9Bu",
  "key17": "2cCRyK9QsN34hyr6KP1jZGbY5YbVd5fswcprUU961EzsQaQg6NjQDjNniPoxhhx88HxD9pFha9gjjfZCmNUNq5nC",
  "key18": "5wW5ePUGZEC5vZwzQFLTYwB5DER95oJ1zFwZPEJyBCDnBgSdP8pXxCdTda4QNdsdtZXhRai5ySKZsrSAqnFMHjPd",
  "key19": "eSWYx6u2PJyha7Tk7bpXViEfPAAx3YVW7BssPHyER7EyJWerPqux2LBoytLBCELd6mdY5kBdfWL6uCj6gYnJ5im",
  "key20": "4HfWTkLxjj1BC4Bb9inVG7gXpr3mpmbWk8WZauBLzkECvEny9TAx8RhQmLdFmbjypZhhWdTTYkNwjhQZRHBkc23T",
  "key21": "fWNnX82knTJ9AaSqXUfVEfmF5bJgaSd7DRDrwv4wL41ZCurC57xMtdKfYk7VzadeyshsiuyhS6QWSJiwPRhdwp1",
  "key22": "DScMthFk644WcMfheVHXJHJ5nYyPEMwJzntLgQG75MpVEjDDmHs2vzpQpSn3iGCqh5p7kDVZQmcjz9Y6xoMHU1F",
  "key23": "8BswmaoHhpFMY7nXEkztrHrrYraPM3zhJ8Kp99VCYcFnZQcYwsSC2MQ1qtxikedEJtt1L8triBqsg5udmmd6HfE",
  "key24": "4TUXusCEHu6jj1iNegY6UZ2KUqjj3F9YcDxjrGnWNZHPasJRPWDpupi46vCmKuYjDywcG6Vx5vqGRrGULinHJ8s1",
  "key25": "2JLQ4CDFggU2Cb7iRnrVZhCYDV8TyAoyq6cVgXettaL5Ug1b9en1rCS8ErzmUFHHycSEhy6WuhjgE3m1ck4r9h6H",
  "key26": "1ZoFp1gL2kvwjzaREajZPETJeUSD7AopPxHkizHCDtTCQEgPFLGCMqF4ZXSdMZQ92psx1wnzA2YBPTsAXuFe3AN",
  "key27": "28ckQ6JiHJdRWaJCH825JDtMeuaj1v17MSFd4NJt6fF49YXQbV99fVAXQEmgwBWvqduWsmVu6za4fuEeM9uW4bqp",
  "key28": "dkMytyBidh2pTGLuVdQzYbwe8a86VjgryndS31dWuKMHosnHi19rgKKr7eDcpanS1ro4Jvhvj4pcbgdi5Xf6WTA",
  "key29": "4gTLHPHzVFhgyajihbRcGoccCDi5A9CvV92Fw4ERbSLKEET7HKvP7N6wHVBdrECq6q4bwfHvtd8TDE3Rzgus8eyL",
  "key30": "ayJPFXJZp14EGSJtPUvq7uRGQ6P7E1hrxfx1iTHzUeYDAR23CHTTZiy2xLiYq6KEnYTG95e34KEpBYYWq3giAhP",
  "key31": "2jGKi3ALDuHPujTykdTZbvF4KvMncQ9sj1ZkJKge53U9E1npKAoDYJRoenubYhXUtRJDYaXt7AyK3ghRY7QWrL3H",
  "key32": "3WdUNeqJidx7Q3u8xWbb7KLDYRYmZgQZeKZpM4EEwcS53XFpiMmcV8eXEzsJaqbcLMwBwKgfsSfG78i61kpCty1o",
  "key33": "4fqKbsyqkDEz2ALaxfwUBZzT8pnwDN1voFuUyi8EFyESoqzLq83RHb4P4sqxTFdX1R85DQvYbFuCMyKHSdEXyvfL",
  "key34": "3tNa4aFSxNsEdD2FHaLZeKDLM5VxnbnbJsNJ44AfKKkHGxFtp2H7mHEevuQbDvEKT9g5osbtjB2rTzvicWwfnxTL",
  "key35": "yTPfdFpNGZgqsA4r6gdqdz7JRPkmeTjqBA4W5JuYLpvzTnn7K5myBvTYANMpd9Ewt4jaJs3Fh7kty6zWBbaZ7Xm",
  "key36": "67odvhTvrrzqmX6D5QtHrtgiGz9Fbg4PiAzttvRGao61AVPReStHUfw3gzoaNetYWngySwuAjWRkHV17csJbe2Z6",
  "key37": "58HNhJ8xoFHRyJ1PK9MnUnnYiLn13ZwFmDZpyctShWgcf1kLav6Tywm9ycJthpzFp9frXKSvgv2MhkTeEd6h5pD2",
  "key38": "4HnBVzEWgpywf5yLmdx9PzF1rEUTz2FPuqKCiQkFmNB8s17hRzFmFyPHWY8VkPAdWb54Qouc7GtbLybNcJePBPET",
  "key39": "5963Uc9xoMKLFXAMZRCTaZpXAofV6sLnfJQL99CzCApvUFQ9k4DdsKSJYHUm3eQxkSAiteZ4uQSPwa1H1XLknDL",
  "key40": "59rMiK9L6DgQ6bQ1DYmBS4Q2bvLEPSM8iYwxVXCqeZk1cgZS17vvN9bRNEMo5eiVTiGsTLnf1W6PAXnVPrYJGT1p",
  "key41": "4J5HvCB51XRqcq6h5UJZU3KGwSM6PkeknzTCTWpdeH5uibrcUKih6MwgFGrRVQvfAX8H2RJVjTDy2TGbiWTVxVWC",
  "key42": "3CH2jdikHkK5YZsUXPmymuqb4gC3k8Xe3p6iyFU4Dfrg4orLqbwSQBCJMGDga51GTPDsrQNjAYX64EeBSUtpC8BX",
  "key43": "6hKFQeQMukxf5iEafGFaptscuZmrpUEJUkC2fprFN78HFhWchfPaT6cfoWv8gZCgFGg7a38UtFFe9MbhkpBVwj4"
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
