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
    "3JEN5NE8kpSTfuZuRqd4LnYQj2QTX47Jd41aohuRNoRX18F4Wr7vrRidHmZUpDTT9SPD5PGv6EZ69Tnu4R8exzRN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qk2cn6EYxXdHPXvz1ZzhSZamig6S4auKX8h27xA7TTVsik5WWap7NN9c1uxd8yLx1vw9q8anmYBoJJwX3WTcLNa",
  "key1": "4EaSRFzHdDAYQ5x7JVaLwBwVB4tkiwJQDWvHyvDu76r5YnbjeprBJ6Rg9fGXTQDJDV8RYJr5KK7aR56mrv42AKjx",
  "key2": "5zBbAUYd4oNpWdt685CnSCfBfnKec8EZg4KcwqB3aQxXkHz9kFgW4VCoxzjpW1XdwAr4LyZxvyS1BjejYQV5b8nm",
  "key3": "5PaRA3L9JeB632k3CGfkdSddyuNpbS8Z64wEAPWwBrpXtHF4m7MmAEZ2oRXE2Tp2fjVd4Bv6praDXGes4KoV5CMP",
  "key4": "5B62gtNWM2vhf9ajDUEKYvb9fXdNbFKEJPv9eQHMXyzaFx36rA4hd5DqsBjdqPd783fUrG5PanAfecFzVs9nUBJT",
  "key5": "3zPPbJzoJHBtBZCLKgmnumyMNLFh4kuqikw2g6RxGHbMnoRg2yv3A1ukciGzUGH9j1qnvJKx6WrCKut7evGcu6oB",
  "key6": "5PVxrz4Hzon9sKhAFVa1kNxRSQGvpbAxuuniq7Epf5KuKyhHs3Xav7jESvWUHbRcPZ76eEmB1JfzUuXWbhf2jCK6",
  "key7": "3NewaE4fMuksxF6GrzA3RrGAbUwdXCPTVffTnM1PkJXgkutiEVbte1yrnTeWK4C3kAA97EiirmCGZMufQDD1aDs5",
  "key8": "4bKS2qy79Ve7w6w8RkDCgRBGjvr8CS9F3ai3A74nULS3UpaYbNjE3seSCZne2yUyrJCfJDUrBtwfZG6NDKw7E2WE",
  "key9": "E5HRHsdKjkqfbTHFfupyTNNMcdGA6RLNNZYpcCPZxwkAq2fSJzKXmQ3cj2H1xtMucvyorUdK4juPuwAtNZrYjcm",
  "key10": "3NTRka8tAPvstxuh5nv2Yzs6JFTfiqJuQV5bUaAVBCHqjNjBDv3wmeVYsLxiJ6QDntJqWndzLeZJrqnZzd7s3Ef9",
  "key11": "3wRXX48DxHoBPdTkfYNXNUffH51eGmp2DYVTDFunYAcYNnGL1qBZ5Uc9BEU3djEagWTkpjFJjmMcwgq8UCRc6hrB",
  "key12": "8nxCuMqQnUaAjav5URygADREbgEb5MP2d8Ngdn5UibAkf3gHjPt6D4HWofHzUngqLRjntL3zcRbamV1bYMWLN4Z",
  "key13": "5YCN6HhM6mVS4upF8oiw1uxo55KLoTxJpomaxChoLsPgF8fXYE7eohDumute1Asg4ykAx6xvrvQj7q7kZaAmFf7h",
  "key14": "5pMMwVGRLGPTDbjWyzkVBLCyq7J2q7twv62uVzvviJzTPcqQYKfCCLDdMPm6dSn7jQvDsa13s9cUmVUy3heyrzxV",
  "key15": "2YN4ZBefFDbbZ87vU95cjs9ssL6Eg8NrZQRdcEqpAj2D11jrWatSrr7642RjgL8xPtMTTVFbRxx4T6MgoquVwpnY",
  "key16": "54XRtaz5hkey9pAVHctASYdM44H4VfT1eQ1eybBXeGBJ5sP1xLgrPfxA3A2jKrAuETxiZjyuYApboezbARBK9g6q",
  "key17": "4pfbNpTNEGYEKEubfLhxBkJSWdGAPHuHvcpCcmXiRxDFCKZwchp8XcSsqnrM73frHYPUwqRbKzPFg9VnYE72kyuC",
  "key18": "399qDjW34jzssYFxsQg12V9dVKR7sbQr3k3jBJw7ZTwCzk5EXr3sebrVHLwnFCGyHdwUBZMewao8P5jjXprqtLLb",
  "key19": "3mNij7uyAf92393gKPBy74AQg7qvAhwvCfxxb8yQFQPPQXM356mSkQ9dDL7LrM9iTTBhwKipnedvopKwVY9jvBKR",
  "key20": "25pN1PGAsN1fEQkAkLmVVfkk6QfbbqPhJEbkNqLZHMaQt9eAGTqURzkMa51zq7BWhYPZvzqAbWj4SKKQfhqihL8T",
  "key21": "65MNygEHg9UVimdmoZVkxafxVwLVHoBaQVcGCdLjM5C1Gxbk9JzKYaDzngUQe3fdUhUGLZ6Ca8mBeCGHXoj5ewYu",
  "key22": "5kp9s4HkoCdGAbaasVLAA5FHxEToUVpb1qvS6CXgjtXmHB8GtMPcvVTkynqq8KDQG83ZRRF92jmYr69yXnuZvshA",
  "key23": "5hEt8t1kU2Y4HNojSmMobVXN5rBAgvwZ9zotbQEApg5KYPwDg3fxyLUikzmC5ufZNyorAnoFXHBKRBvD9z1xNgsw",
  "key24": "4Tb9s5zy4WpJoXNpYd4M7qGQfZ4xinVGynLSwfkK5VZU7JS1V9Y7BpR8komxXHo4u5SCrnxnb5qDXSD4QaoA4cCX",
  "key25": "23EBd7aoN8a3MkNpkkp6KouPjPNxFD9JzJcAzmuMVj5k27tDim4r34rWmPpAFv5ipyLDGkSQzwLXNUJJdnE2VUbu",
  "key26": "2b8xcVadNi1EHbumzD5zro7NqNUfJrkukBjWBMAjfE6Zsg2BvKsF79cYRrZ7wDuoT6XVVmCKAwVeJgwQeLJWFKkp",
  "key27": "2JxWxrckMSuq6B88ApyWXRZFeVVGFn1mjncYXYn6qLoxd7dDxTLidHzNFptU1tVCKcdvypFKpKj5ZDFZpRDpPd4g",
  "key28": "4oeCww2CKPKGVfPEkg1a2WQ3CvCrCWnntRqEcBRzpKJehs3Xkayo2pHAHw7rzcDjFx8KmFcwCnBHZbNU4njLS9ud",
  "key29": "5vc2vfhdoY7J3TdCiyy94NhUJB5GgeGG1KrRSLHvmfsnxJ3ZaaQh4hoZRTQK7qdbUw1vj7tHgDw7BdzUs8YQu5eP",
  "key30": "2V1igVwp1yh1cRYwwzVMHEdoWT8X5EJoNUuHgEPTreF2mTDB4XMcbvruEtWcGXELQ2ZUDHgRb5fTmRyPgQ6hWJnP",
  "key31": "5hEfzR79NxGV9EaZDLa9wwcrRD9oFxRRumG1LHBtSUFL5ruT3J7LghEH1bxFiFNgH8nKYCA2Pm8xpTFc132Zo2E2",
  "key32": "5iG6oBnn5VPT2Cc8huv9D3XUoQaLFrtMnKEJQ8srgNzzpppyVmdVDphYNvntQxrTzCZT9yyzjFfQD6CVusPGJogW",
  "key33": "52FGbVooYM4sZNNS9ssJZfTpGugtQvWocKFhgCmiwNKHU4cigYU5ErdFFzTomLqvNeThdWRzUu3uuQmisZfjeoP1",
  "key34": "UxpRxCFwMEtfT7Q4mz3JwFAqXrp1EEGJiziHRdBbSkHqAdF9B1BLjf9hZEjgZuognZzddCQpUYuJ8fAV5JDksdi",
  "key35": "42mMUyUjc16FkwmR2WWehuAQdAk86CZTUbfVmYVwPPTf4ZR3hBMVEXRRWvCuL55j5h7EvepRGixCEu4NoKFm4h4n",
  "key36": "3Po3QHnAfEp6s8E5x5U2gAPLXxv5ArQUmxhbr1fTzWCpR1zPtnMn3DEDi37y2vspDzh1tNGfgn6n9VCQsZZ4wP31",
  "key37": "5CaS4JzeJ5YP5K7nq56NwZngTnbtEWvdenmtmrM1bymzJMxMnp8KAiPRVzwExTEgbRwaTnMHSoimojwVA9v2Tb1j",
  "key38": "4ZUeqLEYnskBucgFRUB9cSGUpZuAaG2zjwXUp3GWN1BiLuecgjh58Fo6wHhdvWkTN4oNBNzJXNEQuaRF38P48JMX",
  "key39": "49iyKPTnJmG6y57KLbtjn8bVF6qhtpNpAivTs464gwKgnyDtb94SXN5WPdyzLftr6vdC4W9RZXxMXeeALwDpWyB6",
  "key40": "4GTpvqt34dEhnFgaunZKZpYSVTFtJp6k2ttHttN9b1HLLCe6PFjaNYanPJBmLrVWpXVvUJgTK1xkcrwHYrQKJNSb",
  "key41": "5WvuMjh77UQ5i6nz5gM2HiaVjsW6VWzvo9S1SSnEhHoFFKYekYwQdLk7cpV7FdH5Ftit1xZz8KJfVMfKRQWqLXYB",
  "key42": "3cYsW46Ka2fUHqFjWR4fJQ1y85JCBakpnQ7qogmZLXysD3kbmLLBp8ieMF9LETe4sc3paf8KCoTcSDt5ewhNymdj",
  "key43": "5TZfE1mFnsL8UAmhBLbLbKh7adxhxtyMccawYPr99cMHAfQMpHeF2Z1rje8JTw5gZ5qr4Qc4SkJk2q3qcja7iuc7",
  "key44": "64EcSXsGRXEYTQYCp3V8ZW6f16f4aBRdHhCvorZKSx4JbPXX57ZAFG4vDeMewKt8SMpQpxDk8aUDjtysYpTrdrBG",
  "key45": "5CxqNEenhTwk142J9aF2fdTczZQEMUHiDjxaAQbHtwqwNk4AB15TRBpRg6jyxdsBXw2sTvWDUCYkwRhHae7FxTqM",
  "key46": "ks368cGW5hSDAkjW4ZESFT3Y8nSVZ6j2mCh3XFsiZ9JQautwLRodyc7cxdJF66xqzWoEGxEh6jgJTGpfdHDQ4f2",
  "key47": "2vfiU7aQ7PKgukuaMktPF7u2n9Dv5VHRWcXQ3q1UxCcq2LcT5qSwfsGxMc8yEquJSN168dMDT8rktjp3shsDZJuF"
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
