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
    "51LLpiyR7vPZi4ERGCr2s2xKEFYraf759M9PMtHUBMMVcqT2vE4BQHFZ2Eu7bqywQ4kRZc3UvYiMy8sk2czNgktQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "d6FN4H4CszToeD6AGQgMsitq5WX6ngJSnc8QmhvovXdzbyGv7wBRPkpbkQP1i6UqpNK7TgNGxNBJHqHi2x5yujB",
  "key1": "5rxdS5kvYYtgBLu6VpKGodEGxxJfK4ozyVCFwDAm4C7ftVbBD9piYd1PnCQfmHxxvXKLy5HE5HoaM2FpFcvqPWGY",
  "key2": "UeWymuSH2vz6ZDnjQFZmDa46gepDN4CeANenR1PA1YSqayGh9jBdraGpZaSw6CHMb8aXGYniG3wECrEiSzj3GSP",
  "key3": "NPmJwdmY1Wj6MrwsvZRdTCqvvwyDS56CAegB4EHND6iUqb1j8yHvWf4rYeadQ9ANHxvqUCt7TVnxzG8pCEW3frV",
  "key4": "2AqY3hf2cEdTtKmmuDxPD8JeaVVXc7AUqsqojZ3JeSYeWgFUmGmt5h9RMuGiqCf6PLyGMPSMcrBmffMPGjTn86hW",
  "key5": "33D4PUv4ffSof7TuXkSMNqk228nWq2TgMqCjq7gX9uo5414h54GccPNm9f4BkBAWxo7QfY8x3FHXpp2vLLKRYGig",
  "key6": "39ebdA7Fc1Vg4uh6njaGqqEu7A1cX1vVCu8KwFEeQrkDYB4ExXWwWhuN3b5JUG4Z6Ak2EeYWttsPg82WyQnAMLn1",
  "key7": "4eJNY4d8qfDdCMXj9DAkmFbdcucbRFgM57pEquLHPw8sPC2dFiYpQe8JP4zeFYEdCbMypgyfjpBjiExb1i2wiFpG",
  "key8": "qedztUwJjrcUdi1Kc4AsGsAGXNhWVQUoU4VnFsnvGF75MNaG6XL3B8bvMYARN4PFLzTHWesSAdEQ3vAtvqCZsip",
  "key9": "2g1VXYEcysSXgmBTK8Rxhu8ZekEwoMLGQ1nnoyvNmKDEUjbBfbrsMQXJzDVNeoyJRa2Hroga4eRdSaDvZEyprqcX",
  "key10": "QAwYiYFts6HeFUCMxf8ergYKPz2sUD9yqUeX9MupGxxKQE33pDoa4mUZu4YrmsKWy6g3jrfEemmHBMxwrXNUEWv",
  "key11": "3dkzDtHbMMXSfaDNEHn3jXYeSC73ooB2jGfgWHHfsNJtpTeTxsqoSpjwJhcQJZ7uCNV8fictq8fQdW4SKqTJysNm",
  "key12": "2XSBM6cqce7H9WBfVD1GSczmvTGLRjxxR32A9svuzqwGEsitSa85KZy9DU5sjvqpopGNhidEYti29apsNdp8mqNb",
  "key13": "65zCSUbAiu7qkvDdFEPqqJXpY8fdXfDKCRBcohP4Xaj7UzVizHhnLxZNQksPukpBMNxhxoGm4gFFKD3t3PrBAC8T",
  "key14": "25ZVnbkRTZyWq4FWNvT4hYa2m9KkLVSXeD5cZ9vAmPq2eV3USuGv3uGNA2Zd1ydVDii4jZqH3P1TpBMNnpXACins",
  "key15": "2okazjFuXdRQAJzJyp1Hx45ucZxK8hbjsv54TSBABgzevUCtR949KLiNNwdwMazcfmPstE7DFhQDfocDQQC4yGD4",
  "key16": "V955ZhQSM1cEhH45Vz9zXqXPVd2CeXn75zyP88T6Gw4ReBWAVNX9dEja1V3fa1RxpqzoyHAfMQkKzSAba4vRij4",
  "key17": "2wetWEGQsuWpA1m7W1ydzuSa89kcYJMssA8cptrKA5zuoBbHKmxVdAVE3gdH8j25VUdsH4w8DRxM9G4hwnJSECKS",
  "key18": "2kggyHomvVASS43mpAguZQvNNKXJe3nTxuP5ioeqwmvNtmjWb7eV2mPqYkGeAVNnWb1oXamKKbFMmYXYXycsyqv9",
  "key19": "CKLkoo41EAyiP9PVW3tajWofn3LrtqcMxyBKNKZFnpVJLaLydw3ZbJrBWHxkECs43dsCdr4yM9MwGJCia1eDHf3",
  "key20": "526Nt8Ux3Re93KcUUuFkh15RH8f1VjmDrnCV55w6Wx2Ry4oPyk5iBj6TEUZiFhY4rKBmDLKbqeQVA7E3DPLB2m1v",
  "key21": "3yNcRYhZLN42NmDiuF3wxTYDRigGGwWnzg6QkEfD5FWVpB6uJLuF7vkeVpySnXRGys58HfRxrT4cDq2DaaoodEju",
  "key22": "3AV6X7DGGkiJvZFdQuFtq2xx8TFYMgGz3ETGDQN9oGPbGVWZouFXATn6ebjW6GbNHMu16G6bJDrkS7tKmanQcSsi",
  "key23": "32HSdTG2mcXTpsxGxamt2sPVDq5RfBoFAGNdzcib6X2sgSQPpaF5dpbjitxnk7hzj12Vpgzu6pKDHEAua1g1pmXg",
  "key24": "2LWjyhF3LiwVJ3fYnY7M7p7UMPHDRquKp33MSWuQceAWD7LE2iUVoFhCrLeCW5GodrarboVeixm1W8mrD8bHPXZ6",
  "key25": "2yvcVDxqaax1MbmJ63tdr3smyciUThHu7tsdFX3CwET8JXf8bYsKofaoZuf8dfRRHjixBFPQrk5ooKgZwANoUxnP",
  "key26": "5hPrnbVWwsBB7D26UZgspHxmTJr3KwzuS4GX3gsMdyYs6bHUyKXkk2C9zCb95CHRRCQYf8iZWEYuBQY8T1cGdX8k",
  "key27": "3eSoWAKSZMsFQCK3YVw1qQQvuf2G5gnNNEgdEkxJHAj7konkVriFdyznztNVC6DiTpdFpFzv4VvCdY7ZwzhFRbWY",
  "key28": "2pms8ZZ2Tu15kDjHSJPybB6up3PKAMfPrj2vgQkmV2Awv8GLUH3NKTP9ZB4wQ2umjh6unHMaNffboTAv7t9mG7Qn",
  "key29": "q4PjiESoSGy2o4wBBkfbHio46uNupZD7UMaGykSk6UkvdZY8PQdksxcnamoNdo1ehy6nrZRSE9n2h8kruqE4GZn",
  "key30": "qJ1oeWw3wSTWZgp3eq82FJfNRAkFv6m3cQ3rBD37F6ijtvzdgrPXrgGRw9BLXC1DznvhQzanonokGj4PMLUfXDy",
  "key31": "2as2PwYSRKdhiggKtmyqZx1oGudbs7Eo5bydhASL36wnkVDEUyErasgtJVLpP5BtpRpXRMt9xwZ7G2zuYguquoxa",
  "key32": "Bf4q2cs1ZBQ64byuPQjV6n81ZXWzeQp32zERwBpfiXp1ZMCs8Bbbn6XVM65vRwiXgiXhEpzdYVtuyUvxYMPfe3u",
  "key33": "4cN6vperMpt2E4at8du1M1QuMpugm7Qma6oLUe6G1veWL2R5p2rCyJxpBWLQ3yN2v12d8dRHNADJ7gz8QWL8doZQ",
  "key34": "4aZ6DS7wJBtxJWY2msgGGgSybFgsbfuKQVLsb2No7UbFfPaWxXfwEY6KWwvCrTM22DnRwSU8fpZF5xdWACY2bQx6",
  "key35": "5tWoFUp7NRC81ez6LRRHSM4MyPes4Jghn6HRNBoEuECBW7qLLB32DuHWJaMWR8RnrzAsCaBEc2or2WyBwRBAawMr",
  "key36": "nu6r8TJjxr4SBWQAYumNsYyGNVmPchGM1H6Yy9xWZZnqVh63oVKMGPV1wQYbAnkEEZwwybXM81RB8LvKjFshkA4",
  "key37": "gPYGwkss49HMsXeV6FmYXzCvnMNM9Mp7Kt22jftb9RhXhqPSaSppqY1Sm63fSQkpSJdJYWiUQnG7tcfTNuEBiYu",
  "key38": "525J6YogfyQw8H4FxhZ1mUh5wr2Zhyv3PMxYyagj7f7dLFBwxE6noa15ynF5fMcqRLNhYYSNCKWkGdhSDqbkizq9",
  "key39": "5UYVaPNi8vAqkFZw415gQyuov9Dfn8kDQgf4dCZS4XEkMmfNhdBhMG87BNVZ6vbfK21irjFBZh5Fe5uHEGVMgcth",
  "key40": "4JiNvvimG8Wk1SY6WfLLgHxoeqGmjQrccWBpWW1J52XLjGUF59pkwYx6cw8Q3AgHtWHLqSp9edVjRGZ6mHnJtcrK",
  "key41": "2avyzWszjYrkFZTVJwVtEXi8GCyUaoK5166wCiUrJsFGwMPCj5nUL9ugjBC6CCeQCsS6Z5AfGsMfuxN5LHURPV9D",
  "key42": "346EKivTjajFRcPjPqhQsxyRxpWgHASJ3PhwgDB7hoj6j8kso3ZbrYq5YCaUAshKqnijFJLWhaRP7zvd1SJ37BVg",
  "key43": "4si6F6eKVhLw9xPKFEUi2LcntE7cHmXtGpvEa23im7FvD9mtbGagS17id4Z9ChoAM8NE65q1WoNKbctEdSE2KdQX",
  "key44": "dg7sbAqrkGU4uU64Ku8rFQpsWbhdbZEyPXkEWkBRt2optLuJnEuEMRfNv1Hixas9y53Z7okcBcXU3qFaeriinJB",
  "key45": "4xawWS9Kdvpw4TBBfocxfGQoNpKoLfKUhM8PyoQSVVzJVQBtpT9NaycDF8xq7HkH1tkMz6WZQX4RSpqn5XbMBfDi"
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
