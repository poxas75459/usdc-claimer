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
    "66RCPZ1HiDBk1r3TfhghWTGS6bwyjCdfpfuaGjmj9fjGKuCJQjqR7urnCyojPpTA4aKxsmFMnAf9G13Bxw9jvB2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Lzh8RgPHWbyYeswMC5VJSRucMwQcPRqjrZN5am1NygfmKHBBNrT1Yi7rbQBukiin8SFLV1637wyRui1Q7jZVLr2",
  "key1": "bvs9SbUnwU4KhriSJzSTDrewHNbJpmgRU6ywqVaPnYH7rYTcnDbmXF6ZW6i2qpfNsaCi9Xi4aYbA2juiVyMpaPX",
  "key2": "5XaffNULQM7fpbZ6GoZt3uqZcK9jtNMg7VWs4kXfdav1qgQCSiJD1DWbcPkg9QWazFuznaZfMY8ttTNoyjEPFQm2",
  "key3": "4jbt8ciYTLCku4vcTKXBLNoMiZr4hSf4nS2jEP3HuW2VSE3cAEJhZSq47kdu9e2Xa6QBs2vft4dj9tR3qfKqj4q4",
  "key4": "hdP7rfSopEe13AyzxFDm9kmvRAfTZFxDaPWtPVSX22qELxjCdnxgL32PazeCLdpj8tLvCMrZSc1r4zdKLxeEscj",
  "key5": "3eYx68ivdTHcu4QGuQwHKLTcwqeV4hAHt4YE4T9UNjzCd6w8cDdHLM3wqFZeQjFZnUALV2vDbqQRgFfKM1JtR1tL",
  "key6": "5RbF9s3daGKWT7HpM21arkMr9nDj7qTQQLQFUpdjBCpLc3NADQ3HsoTRpJbo7tPWZnc5CADjQohu9HEVxz2NouRA",
  "key7": "228bsZgEMEcCuGAYS1ZZLGmxkMzRW6zE1W1uYPffXWEawyh6SVf59WgVdf2cYMw2YFy7j6ssRK2NGebfCmkA5UMG",
  "key8": "3ttwVtggkm2afJqzgYWYAcpdTHKALP9N5aDC6pXcDACG4UpatjwUuPh7yd9nPokE24ytsdYNYB8u7rQQN9gxb61z",
  "key9": "3wXxxiZLR47GRZ2brkuQRsw753wLrvi2zCGJvPmpVnD5yoy1odX3xZmUCqRawqE6GjoqfqTaQR1dETN9cbY2cWR9",
  "key10": "2GXf189WNdjJFDkvmBfcp9aTvHiaHvFiYZHKxK6Ac5KzFBSwLmgmidBgYoswFvkYu1uAUoXXPuZpGyzfuroyAFkd",
  "key11": "2bSUqiqWnoJwNGWNKARr2xLVCDkuxDho8bi42XixLf48bHukG9HwS7oPymrUg7k26uX1KLz4hP1y9ugTcsNEaKcW",
  "key12": "58ZTQzMJJ9H6jUqWNfAE4gqmN9PxDn59R1ZGbKTd5tBXtvHPCVk1HzGnqwdD3Xie6Vq3Y9yszqej2fG2ahWcQSyL",
  "key13": "68JycQ3xKENwDnYDpXfDFK16QU13hJtPTfy7CnffADb3oVwRaesQBFozwSrWqcBHrncFhxqeggf1cN1zVU97jqC",
  "key14": "NYf5upyeoKwxz6PekmBnLn5HzdzoEi5jBZkMqLahAehWXUeNwN91v1A3H2QUukqzb7itRYgwHztzxPBUxUck9xy",
  "key15": "3XysgNTsmJKxGc3fKPFjHpduz86YPZ68M5ih53yFc6SdFoX9xAikjThPQ6VSmbZ6DK8VskuJ7HJvhtyn1dCtUk7j",
  "key16": "226G1jHAkVDSccgFLKTYHnBvkNGXqg8yCRcXcxidgG53CN7cUSSmv5Pepfhy3o3XssYNL2gkuYGtvvTgAc4Zo86t",
  "key17": "3KzvbEvsp1wYimoUpqoKhje3ygUHHBvqL3ggVzzG9N3debt8ursL5tJwz1ugSxbwk59VmWoKs33BvB7bVPXEGYrP",
  "key18": "PsfpdmcVrW6dFXiwujp7KsuscGYwEzBijdWJXxWzxtogQmk3nkoNp6W5Rdp5JtSHevXDLhw8nxr6HiMXnWb9ctT",
  "key19": "2yiqzLEyzQjSdZVv4V5aq6MwCxBPCSgsJbx34hk1hxjrfPoQ8Bjy19XvxCh4oR7PMa2kfHhteCeATvktYtB6Ccdc",
  "key20": "2gU7ndYKvc3iTvonddymK8wtTQJUGvWfvrr5NunDPVwd4gLNdAJy1svFtJX1dH5nrSWuew37NixLdjNVuMh8fNyf",
  "key21": "qNfhUjtiaxHZxRG6PjpZg45WtwaLv4ByfJm1MWvC5sAvUCXipt8sYcbopDFKYfsCkr4WxVB4xgCUQwGnFHc9BiU",
  "key22": "5od4LYboWe41PuGyt3ww4VfrhbPQ9S8R7fSc9uej5vX5Fd2F4KMUBTA8R7HRNkGC6qswjFcNdVRVMZ5ySCiSe8P6",
  "key23": "4URjthjs6mtCSW5RSzDJiZvSkVtjBTnApcKd81r1KirRHCVxErCu3bdBnCf6yvoBSvghcUxb3vtT9pG34ZZaKL5p",
  "key24": "hxhtDGvGJq8wmZvFeS4NWFJcw4P7Avce8rz6QD11ZLQBnnxCtJfZuYpKNafY92VcP9nHYwfaTtXv3DaT1zdF8k5",
  "key25": "52KsXj4TGJ8bDLGNkATFP7YuabPDLRpUpDk15u667SeEZXMHTW3FFiWgCUwbPxQBuvEkoDAsFh1G12PFK6DGF62Q",
  "key26": "5fCJvh9sxB8ePmgMtQfgcDeBzv5WiZKiKPApHxEfDCt1DvRqB94re2TyF5Dm1wG7TWMELQaLjEQdDtBTwyxZ36hp",
  "key27": "4gCv1puN9dfUj2uVxdaEG6oCdqfrRwabS9Y2w8WYq5qnkLiUYXXVNfQSk3cJKA7ZGC3UVyoaunKYFha8bwxWoo9t",
  "key28": "tMtQewJgpoUaMxdGEacYJUHmaXKb2XUR5d8eYsSEPJjiAcWWy8YjFQKMZA2zmsVw55MMxEbDt2ik6Gcm33BohWP",
  "key29": "3GsjYp3CSJPycMQNKGb91Xi7s5bNp1VneGKRJwLmZ9E5AT4g21PhKGkHCyb7GEcYdXABFyvwp4yb15ZPN1gPVRRi",
  "key30": "3inCTjFpLRdRDhhc5X8g2D2DMZGiK1TJyYcv5WzDcrjFADXgUYEhUC25Amo3rm9xZDT52uX7itHLa9Me2CdaoLLZ",
  "key31": "3FdBUP7L2eGXzjSq1rX4R9psaktUg5BUXKRqQG7P8hKX7qkvSRJZsmpuYpKxg5XTpCC2ACJ5HWpGB1QjEhybhkjz",
  "key32": "5ereUKnPMuVS4XLSQm3pi3ws5WoRSdVxLzDpTAa9qJa4ZdnYKCjBearoAA8oG82Lq6of946yWHK8FYrCpPMPH39G",
  "key33": "2vCQm9j72xWoUPCkWnDy41mR8MzvvN4Xk89KAjym4QiDJmE8s6ZxnAGwdy92siXWnB59CunaxkEjaUXwHMNuEzQx",
  "key34": "5XmLX8cNbxgdXTvexdGhQ3RA3q194siYvc69sKETh1kNhuyXg9Qheb5c29BexTJC7JjanA1VkGRWvcPYRpbCnebj",
  "key35": "4UdJ1i4aasXpdvUnNHHvGcFp14F5cq4iL4u77kewPpCS2BCfcPDHCaLy8fAzSEpRVK8aZe2SyuweUsLStxT5YrND",
  "key36": "2dLBwouzQBACXab97VFYCjzY7bRWAcQRNw9V4NaXm5wBbQggFdaw7g2BMMcKY9Jm6GQWvwktxjZg6Gk2oe5DrHiB",
  "key37": "42Njioc8daUUrp62EZMKBdfcAC8dgmbki6haxyhrERNmcztN5ecJHXJq4TeEguBebVySfFjCVTgXdHkhXSnhXwqf",
  "key38": "5NBG5ryDfFiiPdshtKpryrshKxf1qc8m8edobFUAKu4USb2qMmHx1PqcU6CtyeLLiRUPUhASnFzna67sjtvRpxgz",
  "key39": "34XKeHd9KK9Zpydo5nnEfFzwf2EHvhHLz96CJrAewdFdCab8hebMDFit9YjUD2arqhVvYTFLYDzgkmoQxsMR8MXB",
  "key40": "5Gy6quU6FszFSwkPGAwt1faM6ZMPbJjmAT8ypioRYGD6Y9APepiR3FS5KpP3zXMJGZXBqjcxDfvejheQpgTEDpUo",
  "key41": "3ssiMcjUqhx1zCq76dzqP6EXnCxLEVAZahvJm7AHo5dj4qS2A1ZWLmYaGuGPPWVzodjCj2zYzLHzg2HE4WXnXpme"
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
