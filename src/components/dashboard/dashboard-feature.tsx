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
    "5YgYjE4cX65sAA9VhFjSrLkDJcnBeQsL2nV7wb1NcvpY4EuQycZo12nFG8dUaFceh7LmpURR1wqRNysKusdUKQiS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "226UqqeWDZzr5mXnB7LB5eGJr945o47srByVTNM2x4b7uN5JBrs99pqh7aCJRY6o7oLT2NJKvWMdcSMUnMw1FZ9K",
  "key1": "2fLVKaHKf62tLHU9cQZEiQCngAxYT78qT58SvEpQgLYghe39Ret1tRsDp4YW7YXQ9cP2BNYtqQoCj7kqLmz5tnXr",
  "key2": "2nhyzsuL33cq8BH8Mob89VVSnMFMzuGchJspjwQRrY6sitj2TbqVNHGPsxQHbQAkTnVe1CHyh5dgnv2QbxdsABcP",
  "key3": "3VuuPPVJBWuH4T3jTzuUvfNhjuayGW2Hv9einCxZkgRLJMxQBXJyLhibCEQe2iHnxhe6wrMhJLCLdAAu4Zpk7hgA",
  "key4": "31RdTwpcwkmF55yuneH4biHwyb8Ri18t1nKUq6DHBhgmpvSTmZFcfEfd3icbCi554Yv1nDMJyYcBfj7nZGFEw49T",
  "key5": "35orFN6LMwDX38wpXgGiMQi5SKGPXXrXtGVXozamR2CBG9L6mted33skBAeeHdUbHHXkwBvX5nxQRe1CkLgPi8Ph",
  "key6": "2ET8Rt6mrd266huPSSVmwBHgbPMkDMFctvjp8hyHwSFyV5RbVSHLxo5odX9VYM5Vs27Tevz38PNV2RXvTroYtJ8B",
  "key7": "4W9xBNqx3rPY3pUpsLuBAjwArAdBArN2eDA5p2KUHq71qL5oZ8w7SpEwPzLCrbRY72Jm1hXADSDGQXCjG4ywvwsx",
  "key8": "Zvmq7kwe5xo5YT6RqW2AeGUrB56hngqfqe85UzeK17VW7rqZA3jdtKCHEPZNPtQhqJXPdHtD7CCRUqyEU5oxo59",
  "key9": "hvwdXp5Gad6M9UqWFzPzc8Caf1vQSwmeTtHrkzVAqHH114tgYxNLT6riKEmNxsHq9tZs11Z3kx7MmYeB4ABczAF",
  "key10": "4mVnjrZuu9muopsGtYKNHefPoZKTHhpLxA9PoqhutmGQooaiUJnatXXxRvEpaf21fTJMr9jB9RVZFqaEUMCFXEXJ",
  "key11": "64eAa5HT46h2iQpoLaS7P97fzJAecsr2xQeQx894skip4eFfNdYfNdSQtEmFYrUSKc3zuuhYB8wqQaAy5iVZCSpF",
  "key12": "2M9LqKG7fKJWrjvKgViUafhDWPSG3MJgdFd8YwAkwg8XkV6cB3bZ34YzfrRc5VRLdc9M8LQGvv6WSHM7R1wv1Ei3",
  "key13": "32bBESgRwEbABEmiPpJ7bJPHwY1SnpkXvHJL97vUtrsgRqTVisGKmzuoJFphGm8JoRYpq6X3CowZwZfkVnmMSM4q",
  "key14": "2zbCmxcvEfHBSjAhdtVPcB5RY2mZ2TYvv8ztpiSL624xKpEUENeSa9J4Qx399uSBb6QKj854aVc4PVYEsyLWCKmC",
  "key15": "48r4pBKPQZvRuNh7vueUErxxu2Vrkjo5BdzgBxGgzvYwpDMsgLk91UKQAkAAZDZcwvxiwCVgJ7z1B2dEFK58TUL1",
  "key16": "66vLsSHU4uKy1rvRqRUWskK5vmXcy2pPBzmcSwQTVqaA2zChPoMKmDxPM8XhV1sGCnfBFHTjS1YjBKJTN459kY4E",
  "key17": "2aaowqcXh7pZXkPYgLCRQS4TR8YQ8unNh36uphD5J111miyc12YyU9vj9saefpRXawqhRxbnkKFHEuDVNJnw1erN",
  "key18": "463u8yNXZjrUrofUnFQE3dmrYt9Gb1azHnJeAToTL8RX3saZ4oEk6fPzvsijDTJQstWFm63rrCojxuTpjDcFmYoY",
  "key19": "3TRKqhguH4KE5sNFqaf1BRA7JAJsiC3tDu6zjHNUCiR2gP1beZt3JgasHjCaB4jg7C91ppSqk2RX8TzgbQwZZiqk",
  "key20": "5z27y4iDBQ73D1eq6ijdPSYwtKSq5oFGXYZDCiAbLrYp7CWR6kssFsTjcbkdFW6c7gQnhC8PeCzdRz6JNFjZuo4q",
  "key21": "5oRvAn2qy3hD2kkzCx1fZzyhunynQLXVoRRo2N7q7FDohqav9FYpQhoFuE2unbEmqeoMxF7QsAhD27R8Tc2uTxiA",
  "key22": "zCizfGnymqzwopD3EhhySpsfTbnpEPFRG7o1tDMbc9B7gd6ssHmRWZJGJU5pEvZs7N7suZxtKwbJtjJ5P5iDDFj",
  "key23": "5yaaBRkYq5M7wW3XZTjHpX81PVMWJP32tyTxUAjMYURRKgprEewJdtVpaqLdMUgnqL36fyR4iX6SFthdHLkzMANm",
  "key24": "5MQPZ6vwVWkcwYthYE1cKn3CZoSfc1kgBcuKegZX5KorCCZbgCpZT4NvgYKPzkcPntJGZ7kXASUaPRouq6SAuqD6",
  "key25": "5jqxKiDQ5Ds4wJrhacx8ZjHNkwxt3Jv7SnswPRYPvRx6XevoCunZktEJnwwPt7E41emecdJHGZiRKDtcTYCoNTfy",
  "key26": "3ZpS42GV7Uise3xJZETWkjnQa4mVJFXhNSazPNRXFVvd6gVUmVAzxXrpDyXCN67HDSR9bVszTZTfyQYQWP4rD3kJ",
  "key27": "xQNcdFB3iMitQwSL1YymS8Q32Loi9TXQyRemp2xfFckoUQshL5ZMrpmrgJ5sUXmVgZpECi6RFYHfUzbz6uPxRXe",
  "key28": "5istEgyHnvdv9i9tWw893aWLLzrHMPxumv7HokmogsczAdyNr7JjPonFFARMPGtYxc53fweSgCW9quPmvnpFaGee",
  "key29": "3Y4YeCB7gTdJsLuWQBeiEHLF21tUATdX1oXuoSbdXWJ6jkeycj5DDCS6ourXM4Y37euNpFrB1ncfUTAKALGJ4w5M",
  "key30": "2FDC1cKvubEFFoPgmxNLmY7TWHaAi7zcuEqgCMZBQMN4Yqj9GCmAbaeC815DpYtyjY8cPU1oVsu6U5hnzg9n5vKX",
  "key31": "456Y4ukmdjZsEhdB3hM4ce2ucjgdT3nKKPimzmL3m2Xrw6xd2GmJ4N4zrQGxjVdSwBc4ZGtA9eHD5UQdAUdCR7AW",
  "key32": "nCm6qf9D3HEDuQsgybSkdox8e5JtTT9DHfvddWbSMJgDhnvVgk29oyxDfXgYYm9PGYRqWkHTWcMXRaXaVGMHkrA",
  "key33": "5crP2RHDsFKmeRZQv4Smz6qGDJsjC5k8th69y1C5L1cGgEvbDL8uv6p9k1CErwrXsf7xqsxAWQhzGpkToN2bkFC5",
  "key34": "2xtWWWgVfVHvNNaCAQF4HrzBK5KmdsD2pfdSRXGHux3GR7bq4cv8MMPxmkt5BfYjjsEzJ1c2cUtknxZt7FiBvdmu",
  "key35": "21DJnj3xaeCS2Sy6exGQWoqqKFeMVm3WAaZuBdeLNYahW7jzH7YXYNfvrRQttnFu5n231qRsZVi8emcjEM9JAekd",
  "key36": "3RV9T1ooKDSsyQcVGPiM6c2zkx6UvFd9ZVvKYXck1v5GkseZiN89puraAdVJUpHrGQhux36tJsrZ9rSMFDLRGWp6",
  "key37": "5ME7dGgqU35mUd17RhEvGABJJFJGJKABRvLeu3YpTYrytjWDupQYLGAVnWz56cqk4Tjk38Pj8BPghTdNm61KW1s7",
  "key38": "wK6aFsxXEUxy87ASDXKze9QyHaktniTfP2rC1xYincLhfy17ic1rjFiJ4pDxVDxGUAhmrnNYPj34huQzamCh2Uo",
  "key39": "52Z31efNiB5NyaB85tGno1p5dkj7sxmiHiXL2b9YzAKxzM6SucPdYfDa4ExJVHpsba9tpemk2nh2CLwvF6HtLbF7",
  "key40": "5jBydTy6ZpKCMpiGke5nGyRoYS9NpbShJLkR1H8esjS3SkWmvEo88tCLkoAYrDWDGw3TRcyaUXkcvPGhLxri6Fyp",
  "key41": "4odXazq3GSFs6GzS1FwMT9w7vSxRik3azB1RgJzTduZ1Q7MYG9XQVgFC51bZHMKPgMcDVyKQSyNbS8SJTJCCMoiJ",
  "key42": "x9AkPKAUBR6A8QtT7b2Wt2TXweZjcUF2VBxufyvkmEaUU39L2BMdEcxNJs5DixrcUq9e5NBb9Z1AWPqXS11Rgvn",
  "key43": "adM7Mbuyen87rUhuet7miT4cKZ1jmTh4PzPZkk7YUxqJELuPcosWHoW5fGP83CXdXkXfqPwdtg8FK2GbGHuUNH4",
  "key44": "3zoiQ9XWB7udHD3KVNhfFsFdJYzVqRkitPWjFvkAHkDH6m6CUu4aJTketATze2aticAVJnC3uoAhX5TX4FqcP6Yp",
  "key45": "4tNdHMjXV45Z5acN4G8ye7Z5Q4KMAjY7pc7wva4jo6fhLjBtPQvC11qd6cPU31Axyn7G95npPaQsnxCwpnze4Hnn",
  "key46": "2SVc3pcc8X1aq8JnVkSi3FFQ32Qy7zF5Esz7gavUd3Mj6YdvyxULX7Q4gtuNYzPHVRLHAckHBMkyGhRDNVrFdty9",
  "key47": "3Vi2GseQPHAWyyL46QtdAkzwMTASiFpZVrfqgLhF8BUsT97WUtnLcNgYyZuXNJ78f1VnEbCs7qPBAJFo3o4GN52R"
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
