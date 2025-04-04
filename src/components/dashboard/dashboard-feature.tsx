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
    "3NzeyEyq1qWz49R6Q3C8Y9NtgRiNZ5Bme8gq4ewFiMUneE2d48396bYjUsjDRPzfYmpa5GyKibPjvAqpA23xzjNJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6DbF1Q5xUQxd2LtMze5UMwzhJSaHRmjSZsUPmLJyDRvUQ4nJPpRECUt989jsmyyvunWxSW3MiAnVhMrhFTA97oG",
  "key1": "51fBi1KT7cgnBnMSdtrNeGVeR6HwPwZ1fQhDkFuC2M3riVcBvagDN5ekrvPBeGh4Bxcjr6oxkPZu7dLsAg1vx2wr",
  "key2": "3wcqwbQh6S3T6pfHnYKJKds5VAVD196seyS2jUQJgA17f1qFfeenjQaqBqNurT426YVSsis25NxCHHcqEktpnZ1e",
  "key3": "3rjPcT4EWWnjzzpr2Z68L4yWYqcRC5nQe3gL5br3JEijKfbCA8A81HCo1h2hzwG4CQ2jdpuD7jShkt1uFzyRxT3D",
  "key4": "65wdEoNbbreg8F4XeqaXXbkqzFwd8r91DrTUZmqkcrZHvVEgwATh9TAo7QkC7CtcLBga7bR4nqFCrdSqNHdZMiQz",
  "key5": "63S6yCcTsFXmpdrUocKgkq1ppHFSjotjf1bRb2VXS76RK4SuTvmha67mwJQjDg4c7dxdTdTe5ScbsUV3YJMFnML2",
  "key6": "TTUKax38aZQ9xWYxuugHz4Y4MTsEAMnjHGezL3VcjyD66H161jgvRTW2As4Ft9iAVAu3W9br6K2r7EEwNvYVti6",
  "key7": "24uAXYXau6zzw4X9oAaMZMVAaAAjFHcZ22sDTaNpXdw8H3WoJd8WWCP6M45pARe3M6jgPo3CYkUcDMaMArH46pQL",
  "key8": "NVnWHQaNhZx98vxz2fMzDQo6wFhA9gB6LWJJuTN2DKk6vHhTXdizPe728veZpi4n5VTXvVpWL7b8XzNyopZ3eMq",
  "key9": "5g4WzdGHr49UqVUtRUsgdwhe521tuPSA84wwjaSeu3VRiQ8Z6uXEVbp1qRtmW3MvJx3jzNycsXbfQzHUGo5ek6EK",
  "key10": "424fW68M2e1zsTctdtx3HZPKQ94Kipkei6WD92C8GDZAuZEHqnhWivWUQnyWoPGAJ3bT1iAJLNMUgv8pf2oXnEkE",
  "key11": "JMUGnNA9GxVQT2iYyCRaijNy1QTFQ66o4SP518FkGwzmybnFP6MjuGaDJG86Y876WFLc7WyYAtU2vMtupgjzcEJ",
  "key12": "3CvNbyBdVZyoNfc7E38K2xDXiMmW2ZVt4UGFZPmG4tjceb2nDCdg3zotjt4jxMtMiSeuJ8jiB734tbs2jepjm1ro",
  "key13": "3e1U6dGgbbvrZSS8qcTHrApBLNEq1DLUsq95d6jhkxmBu7c1aNZjesJWDdofC9K5UarRRnuwXuj2xzS9fBjSvUJB",
  "key14": "R7SjLJ4yA9MhZPLkSYLBdBDisNjSXgDG9ESdxW2bB7U5dLaFAidSJVg4PPgK2jMswEjHkKCRU6WaNaokEzD9uMJ",
  "key15": "sB8LAtNj8z8Kkrt4q1dfhetC7SN8U5h9wWmJnt1rHMz2VUhZwEzatPCHCjXN7Ctd4gq6Rg7py6uSBV5aMgdQX1C",
  "key16": "5EJ5RvNbRra1BgUQx6n9sRkmnEhvuM2KNmS8576AhnFCbm9rjcFS1sWwm175o3bp35jbq2f6jNmVmTmpuzHzd4vd",
  "key17": "3SQKhHjJfxcP9rUF6JJ5cZbpeV6o4MpBLW95gUCiCmQ1CA9GNHf3PkANta22LGcgAq8pqYpTuJcKKGWMvpdhYvB2",
  "key18": "ictzLDdncnPGAMYK3NakAnwvfNGmr4XspgMRHpKgw3gPLUqaRp8pMdyVGHrbgEzqE56iXtwQk94NXwEzGTipSXZ",
  "key19": "2EK3j4uehEsNCusVximotQX4dMHEPfGgU8rUvYd1KdmKrSPRsnqBM58sp6RsQwMVoTeAfdBNbRL1rrLLPkmXvXXB",
  "key20": "3EnHhG87BHMu16jsK7GQogKBkLE5LLcqXUSKjhZ8RBQwDfLUWzDvriUNBEb7qFSxjBhCD77pkojzMhQbA5nVcjVM",
  "key21": "3YWgA1NW4ACXQdPEQzJyZKTty61yW1vj9MrNwze2BpdgVMqBsytzXtzsA9tumWNNeEJHaZpoixThfMJNNPPHu8ks",
  "key22": "4nWZtCtsrjMkYZCkFsWpc9KvLKnRCm2pQ8Sd9CpSmM3xnMaKqunWby2PR1QVbW3XfAJADLm4RznKbXWz6qa6LpRx",
  "key23": "5LamoAVaWbXuf5fpCo9kGa2pXvhezuhTRFcKRY4HKUCH8eEczfth9GTRucupcstfbDwMCN8Z5jrq7DSiybmYiP8E",
  "key24": "4JZMmGf8Bc7mnkS8K3d8DeFDE4MkALFNvnsj5fzQArxVf9uTaSpWKgYGWTxky88KYukfFp8216BrbwP6uVLK9Fhq",
  "key25": "4KEDog2nQmWvk3tPJNGfNVumjx3zWJgiBv1o95oq185hhJ4mrq7Rkw9rA4rMg8QTLJktyvL6BhJ2CZVBCzuUSrEc",
  "key26": "wmnFNCsMyA6Lyy771tUxkCQGVmsVCxtGFQzow2SUBRzHUXS4X9w88KRWvPJefsSUSUhkAfRgzkJyRXZ2WCA3bg9",
  "key27": "3YpYSRCDZZw7M6r226SpQYHbHTE1n8nQLRM1YaKFoe8cUhjth32jqrhkiBzo7bTaPtQiPv7nNgjL2XbZFwLEVPwA",
  "key28": "5JAgXzmAwKFJ52kB6vQWby5PVXv65GLqtfCa9dt7Km88pVP1ta8fjH931G4wKtHJ1GSYdYj8WnH3WFM8o7vea8tW",
  "key29": "2kpPxRLL2FWVDDjNTx68rqqPEiGsB5Jn6PKhHAZksA2gGgWFRCSjhEEBHctBSsKs4NYn7pjg2Gqbru2QSaj6RZZJ",
  "key30": "4TQLpnCpcKio7hpYoQFS3asRurbSy8FDqwpiGKq3N7uJvgwXL5XidGhj6dNePU3Gd3dz1oZvGL7uqo9ZYCx3872E",
  "key31": "2wvRuinfYtmHMaECXR8KeNLfCUa52kq3EB17cFdpJYJmTvPKgsjTAqnFUQgszsncbx3UHMn3dAMuBbYrvBeyoWtD",
  "key32": "4Znog9gXzkWUncdWKv2QMpspCiHALd1Wzd8kMQe4gxpvuCiQ4BuxY5jNfrxygxU6o9uo1V46XRH4qySsytqmrr3r",
  "key33": "5PLThb2MM42VARjHDT1RyWVJzPxuPB4EKR9qw7BFuMfB9egbx2wRAYQaPtZNtQk7tGRZ8E4JpYyWWYqYiahb5s1B",
  "key34": "5SYbMfvRTchydCQHttpWeGJwy7XwJsKKJJXk8evSccNtKcn5WWXX83eGQezLJJALiKLu1R3LhrnbfLUZnqp2GTuH",
  "key35": "4dmyzcouZAt3Fg8wpTNQ4YxHV3btpfBwPwLSTQX8H2MN8dnq56XLc8Fx5cyubHsB26E2n2emBmEXrHxaQzpPxYmz",
  "key36": "4pcMsVTbjQvd314uTFeKGA4nV5LBJz2VwvVCbXmtTyU7teMqLGrpnRQQwo1upH8L1QRa8FBCrtXHBsSSHfzPJGy9",
  "key37": "59HN3jMFJdQmsaYufrNLwjHt9V9caGzVfL4Z4v6or6GfFqEdKdF3PmdgxSdd8hezJhvaSpYZn9n2Ceaf7sMyrxRR",
  "key38": "qpD2YjkScGEnAdN4MJhKFsJAeDLZtYV8V4Tfp4Kq3NSodpjx9Gm9GwCZZS4kpqkobdnSEd7w88uH5MPNwzYD2ea",
  "key39": "4nTiP9BJhn6DZqrw6qMiHrUZmzhT9LXZWStQHnKT8GzehsS9JSCrcvprFmunnC1DMsFDUsLxDNu7rXr4111Qo8kh",
  "key40": "2sFV3eReUekLkZeKFMAvw7CssU7Nm9sxZthfFFfkhd1hLzLX57bSQWoBYeaZ8SDoKCfJD5Z57x89pYmfesdDReT3",
  "key41": "528g8ifGs5t4RAuZTCij11cDgQmGGzEdsneFhvHgSjeN6PPnCUK9JUTMdfAzhoyWSCGq6bSMRb3LGeKTXDtY9gai",
  "key42": "32WnaxRzyzXDJ6cU5rrC5tT4Z2NejzJKmW56zsVVu8DnK7wC7BAAWVyZpcd3mLBJi2QbAkNfRPYSB3tyr1nKD59z",
  "key43": "2cxMHL3Vu7TmGucrRsLuJeTMY3ZnKBsYvsvr74HMNAKEgToxwzLZfVaTYKiuGkBwahULpouyqdrSbDskKqEHzcRw",
  "key44": "CJUgMsVMXjjM4C6uBvGGX2enca3XxgkVpZQVatK5zJhRHDJe14HHsyiN1rqeRVtwnvj4RepR7yBKvX6udcDHhVS",
  "key45": "3PnGVvqGo6LaSGf5u1He964HD56oJjKuPXBuMXFH68HdcS1xJ6pVL43MU9RCnQEbscd1iDF77gkHstr27Zrxpr3i"
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
