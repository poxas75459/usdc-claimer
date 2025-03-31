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
    "3vXks3TBNnKXcbHyH7s6K3BCjyJKwTtcRD4gMFhc5hvuHZHEGPVe3cHaMGJ1MSu586QYL2mgCaPMswoAL75tyPyQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "g7UekzfUYnXQtHVW5LPP1Sfhgu7RFRcNR2L2Yiy6Xfjdav4y6FBXKDY8GSENAkVjv1SHXuvkw2jQQHMJcduynYE",
  "key1": "2ew7fR7ztoKPjYCCzcTyDzwWcL1vUnx1SkcwF5FUPavVBogeqomztteoqQudhLiVywFbFCQZ1JchtBwzvP5ei7o4",
  "key2": "5BbCPJdkpAqQzVz1pLP5ohxmhae5xzuwGV8vQsRwfwBavH5NXfoUbH4T4QSqZwtG2g9VtGaiBzWeD1rwTL2pwY84",
  "key3": "2VLkK5na61Ycr8ZyG7tntRxjrLGAvqZfH6kFbkMXv1YSDefuoLAQFiuMG4UgMKEhQxkXBZ5dn1d123sTn7WFqFso",
  "key4": "4EcRNwn6R3jGksWhCoRAXboDAxGvTLUfdNedPnCT9qNfyUs6iYkVkv7dDTTwf7bSaq7rb4c1X22yxu8hrG3uXH5K",
  "key5": "cDqYPYSwZNFwN6YsjTSe2wA6cd2oDowdrYqUEED1jHG8aFHy6wvCetd5hKGiuMsUfKzJrnh8TcKHSwx6ogzxc2f",
  "key6": "3Zt4TernKq3sQduLdcPxLG2SqKrhmXg1pRRB8QM3UVLbsTzMVugALSAVqRws4Wq4LyeYV6KGUXGxz2FTxaH8TZxK",
  "key7": "4LVYa6xD1D29VNEwLbZ6iSx4bRDHR8QLU4vM17HAqb8tHZBn8VQdwQfH7wStPCQQTa6uUNk1s48jYrqXEtaq8MGA",
  "key8": "5XncMFG9qQbmoGZC32mwbWHCyQAG8PdvJGGhdGghdEyuqnNc1WAt3jvPfPPoiS3WHR7xtatNVoqeeSzHq52hRPq7",
  "key9": "2q1LV3pgo1e9ZDQGaVTKxX2vDz9gUmFWFnkaLg77vGdRTmV6UniJmkAq427YkbhFHL7Fj2sJTigbXskvnWAK7DYu",
  "key10": "2ygCtRzGwUx1KcSzAkNXCQeJeMibWrntrh3sQRhBnzu3SNySuWkcxRL5SoMHMDywTXp1DNmwZY7mLCQ7zpfosgNf",
  "key11": "wpxMNh5rywuFvovYo74h5rL2YE92Uv3qsBVUHSsmfRBnkn85md1geD8Fd8s5WMMtQhvZLNhWNSqxZoJ73XXr39N",
  "key12": "295hid7sVrcTGKMHCJNMVXLVWA3QdDzhVBSkzmCMZ4ButZzv8dbBkYBTubsa6tcDYkeSjF1gBgn5atnSgUBjqGTh",
  "key13": "5aiKMGhDnD3Pp2KHRuoEyQVLNyC9xpSYUfqaVUCw4iVdQks5qore9XKrg9F5YoSwMMgTJdCdG4XDz9k7fnYe8qPb",
  "key14": "4UYV48w8CVfymdyYXfG2V7SyRmd1UW7S8x8RragH8x79V1XPitK6cqCiupDd7nx4DdqVF5MNY9A8kSJnnueDQ8Zi",
  "key15": "2W4ofHUVg8ogy1L96XPTj5rtj44CfwpMbQtctPTEuN8673xsP1X16ir7htcdCGTbQLFymoQf2hKaHQr6VrUCb3qA",
  "key16": "3JKW2VEwUzUC2psgmHyV9ZJz6faQcxgveXLxHf3KBUj5oWb9r79aShHwKibrsyzUEeEiMZ8nv2RKTW3PQN3JHDag",
  "key17": "3WRir3Fofb27qbNR9zyYtgajkEjAbgKzhfEHaSucKUGJchKLoneNvKgDM9pWmByT8T9mxs8qZMAXxd2suyAfu8wV",
  "key18": "qMtttLw4tBfYEykBissknzwBJNe9hatYPq8Hw6nyy7YVxsyQ1QiTRMUtaoZLUTh3p2MP9s6UCW4f4gVrrnBj6TS",
  "key19": "5HJMPZEL3VSeaZaQcSnYxauTMFNyVFRoHBNbK6Maex4qMh9YD3RM5GJ8pj4jsKdNvk1W8tykwiQp5VE3YRfK6jF4",
  "key20": "5KgABGxeTGFDX8TVZoqGdSz5xi3WprKxfsbfizkPKK9yzRHHNRX4yvBpYaDi3p1QbKYsBnz6ZGnw5zBaDZUss5vg",
  "key21": "64bbremqnmqTiTDrH3mzBD7Zjxb4GCY4wcPmvUj1LQueq9CJ5PKC5GFTvzD9FVmYyPQTSnk1WhHtw37uoeJRmYKi",
  "key22": "16oTR8pWV97VpAm4LSs8tZYVJ9pz5MZRs8MmgBFWG6EwUwC21NQ3eYs7ZBBYQV9oPp4RKPpXkrECJUAGeXo2cu8",
  "key23": "5PkPw8ynU2ZnH81pf54MdYmYag2rhkYpJrqenz3ys6RKbQK68HSmCYX7eUuarUHmxDfKeUHQMf7yMFtuCyEVp179",
  "key24": "5dYtMgtD9cAkMsfkZLjJvMwaHnuSGGHcf2pgBdusAzMDb8Yk5VuYnCcHt9cubYBT2JzmuWorTJSNpiNaYKNKzfZK",
  "key25": "4mF6whYiJ7p3pgJQYmU2HpPNSNASm7Ct8eJ9aoyv8VGKiVNafUXE4YZH2AMUiwYhRQ7XVtYp6XfQxtDDUSAcXgwC",
  "key26": "24JQYYJfY7wYv1gYbWQB1ZDrDmuvFkmkqJQUKDuEDyWMJKDWtEKHcCYWjyrgsVbU8YkqCecwXdqEjyKGH4iyA5iC",
  "key27": "4FgPTFtKnEfGurovnw2HLakiaqN8GGcpVqhz7CCum8pasbu3eo2GjjhfugXxiW7dApSdx4V4WPWvbVHaLQayHb5U",
  "key28": "5ouBpECcK7wGsVYaXrbTK53yZ5rk9mjh3ZL2afE7oJ8dD9X2vvUgHW3x6PihRYpVWw4bottS82N2P77qVUFDxE6G",
  "key29": "m2e33f2tKv59NAj8XckNoVKNZ4J5GBqpFjVMu8mJqSDkmzV991xZcdNW3svwHjVAKswDaoRTArnG3ZRZSSAk5e4",
  "key30": "v8H2xG8odYduEeD8CMrfQzeFsV2xmvmKipF4jAsuQDxvyVG6RzUiECYtpRaJKfeuKJ9xzDw3d2F7FkeHTE1o4c6",
  "key31": "4pG73qAq1D5dzWsLSSnZYggFkP47JLpKnnjM7pKzdxJLm8W9nUrupqQbrQ2QH6q9MnCPGAHLw1NmPazbkwzbByDJ",
  "key32": "4Z2i5N8zZgnPzikCwM9Tgs8uLFAybH367crBUqPmPxobEEwzaitrTQ6N7w87XvPjQ2iCH9S16foDDemi7sfRkf1c",
  "key33": "3AVnLKubySB61YPN7oHtw2276sy2NbvFHBQMeJ5dF3WavBZt6E62HxJNXGepohA4apE5BJn8AEUjWraZvoMghuf4",
  "key34": "46YsMoywSLgSySQmmLpqBKxWCniJ3JKoD8R7yJJewB3tVgSkFJinPcXiC9QCUfYDPtagt7FHUZ2ksfMdNX6TMsZK",
  "key35": "Br8WncXL4DrePP734K4gDBx3F3bTxfwifrpfW6BaPsSiAPhiN5Y9kxfjeH9aaYH8npVW8tCwYZXev3fnQb8cRQZ",
  "key36": "4VXPURbdJSKFnN3WkdHkjHd9sMX9MFSuWf8fUgWpcNKS2XR5i9MvmWa8CUbjqGbseTZtwasymEMMtEjeyijU5JJt",
  "key37": "53B3XECHT7MJg3w6MHeXaiCiBmjoiRS47Ec1VtemLdMRyAvTifBunwPRv4RKre9VcnkxMutbBCsR8EBKusL9yK34",
  "key38": "3xr2QksWNR4NBknZY3iKVuRSEwqAZXgdFqyJVn1P4rhPBavT2H5w4k8acdNcBhbRPngtUiowLGiMoTT5JArzy2o4",
  "key39": "35vRFmTm7D6oX7P3dUfFdH4zzaMFyzbBa38NtoGQW2iTErAEfknUVuXQpLXQujhqLqcXJXGWWZt3cZeV4DR5tDPq",
  "key40": "2aW1gxZ1meYq8U2uHqLXTSYM78nhrCpDv1v81XB5ETeH7y1ox6weMS8a9SD6dVYtuZB3DM1S6y7otwiVyBS7tkUo",
  "key41": "5LV6e4Tv9iQijKgD3dKWL4dZAe9dpLGu8mXxk7G2CUgLdbS79yHhw5FH9fRRg5noNTMdbBrWMG5mnJBa12s6AdCM",
  "key42": "3AKDKpEH9QeGUBtwqMgsFGnDRhuk3s33gRzWe6qRXLLeCHqyszdwD1UNf9k5pX63ZG5WswuwoDo4ugLRZKfWAq2N",
  "key43": "2v14r4FTXC5tAFjSKTQCUXn1JM7Qf2W668PuWAN4edQ7Sg7mwtNeEkKLijhq1PmD1Sx1z8dBPo35rxEMjZW94FBM"
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
