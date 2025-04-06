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
    "5fd9mkuiWsKfXDRyE3cygh2BDEpVw46DP66DiJJQwwM4YqjPUVzwSxcxFMHq7Qvog2Lc624P5ujz2KNFh1Vo3LJv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YR6r4ThgfHKa98Z6QCafuZfn8cNNn6cxWWn7PMKVUZMK4yunshtvskjHDLiiiqdGm4cuQNdZjTJhYQ5nowVVEN4",
  "key1": "2SPezH8CjrJUyYwCLEJKBfCKbq1zT4L2kCjwMyKbL9K2BNUMXMEqKE8SrK7Gdf7SwK6DyUnhSNysjEQgVERZCzV5",
  "key2": "4YMwg2BN4dwEzgT4FWxN9fSPxv5TGAQ4xn1FR1H6SjZiHaPr1uqa7Eqzqkg429RyxG6gVATDw6888CftxqUK3YqL",
  "key3": "3Si4rRrYueFi1DoSdXVc83cMNDdqgQmfU7iDANWa9LasmjmTjQrqzXUJKDZwBJK4grb2DQAPkabPFwJ1285a4VKN",
  "key4": "2LG4fDwxbEdx2J44xbK3PGoCQwdHax3UGK3geijJ6C15y9sqVtLvu1eBuvcurX4dgnbfX9obipiXEMpZmLZeR7qs",
  "key5": "4D17AU6qPfjsrLBDtWRRAj4T4sPBTWLtqBXsGxHCbpxBESPj5RTpUbM1PWpcrv93Yfb8kZNa7NvKbGk6d1ph4iRX",
  "key6": "5wDsAGhnJraaC36F8XPzWHsjfxrxq4rPRacmDbvKffwTbTfcDr6zRnubYcBUKkLGj9ctaFB5sPDkUqcCnQCbtxEz",
  "key7": "5b8cJKwL9xirgYEwrzZbPhyqXqeDoXnmQmFaATg4jC5T5pqhkGbD9QTUMoPZj65uQadhe2ZFkbP9C8XC1YVCSSv8",
  "key8": "2SNQBDk1N2yoNs1qbCXzfAru4PsKj6mmjj8KfybScLEBXgERUSFH4dh5CZrGaHPmLpvS18igo2d7G5wikMgLof9V",
  "key9": "2jpoycV4rEkd1e97LZPu4J1unocw3BsxGWskDmnrSTkXzc3R5MXEMMRDV3RQdC6bXzAKxxpr4ki1xRavy77gqbdX",
  "key10": "2NAaxxjFqXMGQWjTxduVfcrhC7nPjNAtaa5oBTVEh5YTJrLdqVJhxjhBSTStcTdAqKabYX8AdBore5UXJHVFWW78",
  "key11": "2yThapoR7xhHx3wTkSmMCTn3mqhx7RRTHCZyWpebJEHHYhwqquQtWjx76kRWcz3CdDUx1UD9QX8WUXXtVHKE3VmY",
  "key12": "4z4AH8nNtFNPpKAG6YYPfF1zdriP4Y8VZhc1zQSJZT84bx9Fa5JYXtFQfxDnZCngenqxVoXNbo3Tp7LCyZknckvy",
  "key13": "3Nvro7JhhXUg2mXPAfoBTAM6tcKLs8biQgmLoNwtJ1p9T8iiEu5jyrysmp2c5ETKxRjmGL1mf6FAaPQYeBYuto6E",
  "key14": "4GS59vKuabRXLoYYmBjeT2gzTaS5ZXyHb6x7PbwHDEqgv4CTWhGRP85QWHKMGmMs9btK7rBswqJ4uAeAvyGAZEZD",
  "key15": "2g37eiHJM8xW6hpw5RHF6W8LXLq3qYs5iWh3EWffFKXryKjJwZB62v8zjeq9kNWnWLaVTgzp3i3mRWpg9b3RhRm9",
  "key16": "34NHhFsRsLtPAHbqECse2f1xz4k5nQX8kgjyYCZT26iy66MwjYLDsteUtEL6Djyzt6XCeAi8zJEbamKaaDGMExxL",
  "key17": "MD3Fx4h3aDjViLUC84w9xJ7Hu8Uwpwj3JPyWvjxpE7kyRg2NkUjSHcRXuVgnwJbxbtdfHbYnoQ5P87fDxRj8a8K",
  "key18": "4dDLD53HqaVXSDQgcfCTcmJFXwUGXpwHYYhCLdEbeMgWdnrdZrTos2fK2s58Hp5pbr9USx9qjRfCEhiKB6jdJhc",
  "key19": "52P8tj5hy4LEJDZLTRP7g9BrKjwKJy4GBdGMJ17pbKcvKD7txZXWofnmw58UsEzUNrJ92bThe2yFc8fRxhPyQhdt",
  "key20": "5npBw1eZAX8EmbyqyNyntYR67nmgAxEjZJhw4a9LRFWiPKkRUxBRMp7YE8X3gf5N9cbesUodsVjgAuipvNrfLuqE",
  "key21": "58papuVXTsRtaz9UsBYoEQS2bgR4LSXRJqP7AiXkbePfNKBiCzQeTB3CEUUWSeQbVpUnsosbX8EhVE7XrMkxCAqZ",
  "key22": "2cvW4fAGCETDn9RbapjMAnaUghtuCq8zVyG5oBM5WPXjGvzvPevQJRMJoxH7Dz2ZUngozJj8EM37ZK3NVnJyE1YZ",
  "key23": "4h4Pn23NddKKYHVJdTbCx2P8GsNCCPC2k3VN32jwCt4xpKG6SUXDZcGaZqAdLfhKote1oo1nDPu75P25TkLGAGPb",
  "key24": "67LbLRDdABLZ9oiqnkwWeDRzioQGaiuJUqfgNDDX6SwgL4yaCNLvZnb9UepjayWzanZ78Ux47NDiGfcWLCcEJk8J",
  "key25": "3FTqm3ks4ccHerGv7tfJA2K5dQUPF6jyFuoWr2w91ZAC7tzrP15xh7jVtQmbJHk7nd9UM8oXn3QKqvcuMAtDNZDn",
  "key26": "3Vp7zDw6ZyGXGbExgix2hbyAG8HCXFbHdcKzsLDuYspnPyL44L4nYfmWp1HMn2YBuPRR6535k5GBU4yP5rzZpvrT",
  "key27": "3jfMDSh5KE4PSFgv1yPe7iwTPcTioQ2EoDShNnN5cx76dKrmLagHuAM8AVJ8QiwT5tki73NqEV3yCsrf1kq8ta3s",
  "key28": "5SyXX6X3xDfsWdjVe9W8nFSj3X2qDfFS9pUCkigytWxaPJcx5oXK3S7PQPPxUsvuMex85XMLggE9Piv6xgwNZpgb",
  "key29": "2xxWcVp25N4QQAjHBPf38e5pVkT3R2J6DveV4fATTwCbyZFaJqV7Pe26HP3mUC9BRSEVyASAddEniwHEp5nWLUT1",
  "key30": "3BAxiQGQGSAafuugNJNNwJHhmFZsLsz6rj55dzGHVbQBo9Yf9LmgsQsakuij7GogF6ratZa95jQUCRD5zFE57Xkm",
  "key31": "4ouhwG1FWJAM93qazNttvFx3UJf8nJCdUqhjtgUjYjBRnKqdoaWxSzdY5pwChyYYfnYzb1VQ5UGnQBWDFPqKLzjm",
  "key32": "DUjAKxYHodiy9JETjJmyPY2KuG13T8tnG9jYqF6iWFGKAbBkLBzwMExVUExjqSgjnRVhPXLV2kAGTr3A1fLRwPM",
  "key33": "6oqHf4JE2YyqyrBSASRyKLnJCuE8Y5L3DWknG2taczUfHeap4g1GcBqCFVaCnAprvVoAd5LBF1JjtbCS4jQKVhb",
  "key34": "2M3gejNqoR4ubSCq74Mx59cn2K4nExTkAkiSiWjU37kpaZpPYYuz67gDXEwuKavwmVfsGkpYDrJmjf1aXVUqCD1J",
  "key35": "4AsSv2De95QwHpdzuozTkWMeM7DR6k4DiJLy8qozyc4mP2M5h78tmfToXCt2d2QhnQZ6MfwRpY5A1KLFACntQMfB",
  "key36": "6193CsiC5ssbCxdZJde48G6C1mMmXuQL4PfWtomPrK7CFeC8hCKNKMUEfm47TYefUsaT14v9bSmw3xbpoLo7QoAi",
  "key37": "4QaYJ8Ef2jHG3ZRYfwsPw2y92VrQ6LpSXbCbhVutmyxki3kUsRdEwjEXVbwnF6gVQMQtxGeCkQPY7QTRtdh7kQFN",
  "key38": "2o86kJpvXT9aA5RUBxqqfUeXD3wkZD2shpZpBxw74Zpc1q2GkZZgc5ypzAFNYSVCDR9HWgfWFERTXWrd5EbcZmfA",
  "key39": "5RibwB2tm3gVyh135DYfsQBfHm98UaGcpvk1LAqnhuhkv66Mqxm3RbQiPnamyDtRUBLZv8Nhy9SdXCTeM82qtQEh",
  "key40": "5BJ7swBwuRKmYkGv7iCyas8SUaax8jywq6X92wHke7a5HBhx7bHtEso5h4UzCeZkK2nuDHJ8aUj4rQaa7bbXqPcG",
  "key41": "pAwPfWiamhuJXRwJMpbY65qDogaEjYgCzCqYrXfYGDdKHN68UGkft2F2SppRxbf8aDa6asWPy3wXa8WwmynptNX",
  "key42": "2YyjaojuACLsARkMrsdVhqde2rgwgCUWeHMgrS51tsZwowptPoArhTSorLL3Tt8vSuURrRWwu8dqynzPt3fq5k6n",
  "key43": "5Kxify4vxKoCUJ9bUEEmpXpSTMHFvZvRmx2ZZsrWS87fPHQquJjps1RudV6vWDo8cSAX3BskATpC7hDaSLcGCwmH",
  "key44": "2ugQZf2kdRAKQpdsT3xxLcxPnxGYFHubCFYZdZ58Fc9b6fHLtVNpUu2sNjucmQFq2xPcsZgTmPzCVSwzXGRR8VLm",
  "key45": "3YAT5UznvHwBrmHf4mTpfpd1jpPigRmHVrS8Y89mAFjo9Z6KRZEC7qKVKvFEDEqsKQDvusgcPAFndf8wpLFsEXuc",
  "key46": "thHDSuTci5aV6FUHW9nhUzo4JLQKULZiv5d9BswnoUARkUoszPC7Lb1JgwysXxspciaysPsvnpcCLp6Rc2Mq8he",
  "key47": "3Tbnjrfvco53JErUzzaHXb6fTGyN5ArTA9h7pKUJ9q2vgz3r6edTnZaJfMtg2p7BP4GJmH6ySRRApbFcmwyB9bLD"
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
