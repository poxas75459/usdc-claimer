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
    "3LLHcneffmSV9PtgqmXL2ujutV66WzGsxCLXjHw4PTxK9tsjyJWD8sLh1x4tnuYyypiwUqQvTXvAj2KEjqps58nM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TC3dc9a3vSj9kZwcpwuynbwpS7To2AzAVqfAFuDKm2g4CnRLdpvm8MP2sJqdpu9LLfvZEEWRcck7yr6mCQ3a3Fp",
  "key1": "3eP7UsYeEKHMsbTR1F9T7syup7FFnFduYVtnF3Qpt4cA3zhU5ufkDs7YwzwcQ9wsfDERXQEL6oosFj4awq8LR1tq",
  "key2": "4cGTum5FchN9o7xNkU6tVbpVDAFAVXTRCa5JnAT7NK8tJiVZUhDCoPZGcSqjKVYSrvHCrnr5ebEFgizroSPAR1ks",
  "key3": "2daV5e5wCj3qTDgj3W3eBvzuatSAvuCQvm2gcBtMcp1eJy2ZtTtYJ4aVc4m9xoN8VB7yLfKyVBTZFTwr5diS1Ypi",
  "key4": "3yeLz7HXMJBnvNUEo67XCgzAVjY7267QNojN7hE9z6xENDFRhuLpSWB9dYTyrb9Wm6KtemZxVks3fBEFNWk3x29C",
  "key5": "4LQAnoLegeVo8xYPLuFdo8Ma2ui4hUGcWZFmsWQyF9sYxd6AJCegD4v4rAKhPtppkApBbqqP7H4mhDpJ467aimLP",
  "key6": "4xQy9EAnYMraMsrGV1DL3tqDUbKmUEsUyUShUoTc2HwH8A4RrsPfTtWQPVb7VVu9Pi5dPxa13Wfq6oi5G65RoZTd",
  "key7": "2dnpSXteuwoLAnp7mP8abALnPRhhGHno7jqpAuhQfKrhuDMXJbKzQs7YjdwRMjLnRgN9b4N1Ke73HHHiGKvpDiPG",
  "key8": "4kFaDyMTBjbS6rxP69t84SoquDmJnPkwLwp7R72SP6QJKAhxxNbn8jsFTQoV3p2ZsgSRJnuWRhcZqtJfKn2xM6tk",
  "key9": "KRHT7nt5Tvu4KdZhCVt8sz538cTxqQFicN5HH4B3Yc9yymn8JTnYoZYwPGfY6zWLQetLU2qBafhto8EcRUK8Lbv",
  "key10": "YPScmnFb2HcF7PpWtPGq4NFZdTTvxfRvFhX9eGUN6oLFJkN2uZvwrNzRSk9x4tDifWv6k2peYnvB3bK7EG6Uq3T",
  "key11": "5k8cpTSRLJP3MmAsR43XuDhzAQKJQxCQyCdVbqBSAgdLUX4DXNs4s2DVHf9gBYsvTT7kFh5LPSWkLWg8eNSrdY7C",
  "key12": "4nZN5qtTKwzJ7Ak9tKmCoJqoqMAqHqBoLWBwSip2gbxi6FGXgJPs5i1hkCz7mcD8xbwC2cz8GQ8X53FcXCMGtNo8",
  "key13": "3Rabkd5tWpU1eT6Q5emLpUpxLgfnXXzNwgM7fiWDnndd4BJB2hY4HNvk2ietyEkS9zoVzRwd2ksCrT28pr1bQtTi",
  "key14": "2REAH1SJSxFx97ugc5NaLDV7mV2PcEMwWgKW5hhVqghVBzD3UDtbHDtMbSsfyZoe8jgJiYFLuxQPc1BSNNj4qeL8",
  "key15": "33v9yjoGabspJRNAxHg3Zs9saD9rLuAR3vMY4jee9UpV9Daqdje3exHbMi1zsLTxvqxwmQfd7fmuH16UoWQT586g",
  "key16": "3fteUHAeGX1t9SLJ2afmssJbZRNf93SraRsSQ7PnzfFLQ2qk5mh4frhUjXFtU4bxHnY4u8WHuGD5ngFdcJFZcp9F",
  "key17": "xLHt5RpktVjysmKx72aXZE4VuBfkXqsFZSKDeasYEMnNwx5dj2vGxmAt2WnQaUsQL7apfxeefsgstgZ9zcUgA2C",
  "key18": "XwK4XTZGPp8zZwsKpCRH6txZxL1wz12z4i26qqGR3aosxqj5M8t3ry6x9w3652gzGzbUapo8miEVr3RfuqLdGcf",
  "key19": "4NhimzqMMZaVHLZxfqedn2vTjLoqxQrsRumcRvqULinyQ4RRkshPv89Kaev9iKN7KfHmkan1qXzedbVfbUWamsX",
  "key20": "sDRXSMsJH51hu31SJT23us3pF51orW77Q94gew6TBFbAL6pytbZkVrv5zoJYLJGdagqCmNWeCCnDfHaYHkvWxBj",
  "key21": "5Q4fh9NvdH4VZioLA4oU45fGqzD9iB9ythpa4tvF67UpdHZTLpKQxSc3sgU2LUToRreWJAQYHnmmvxqaDYqEfkE4",
  "key22": "4ELKq43MTqz7PQqvZj5jGoMXsvobX7YrEX4N8s3bFdPMQCQDS3f8htZQnjKDA4uW4WK7L6C7tSqX9AavuEdrTfCs",
  "key23": "wywiNkh5kLuRE4ueP9E5KkqoMdyJmWWrbTAj5vqMb5TpuatSP8VQ1GzwuxDa6nZPmC5z9vvk6LCepJVvPtm9HQX",
  "key24": "3zczG4ZzYhy16KbnS2HHgP26hbtLDdG92Xv9BdnT4iM69NHndxaoC4BvLmDSJfu9HnLeEV9xBkkWb5suUPRE6isx",
  "key25": "5LHZJpEtrmEooj5eWJiuakk5bbraujE9rWcSDFfCGxaQvxR4RYAQaFmNWFBeddhJhFqWpTUBm29vdwSzRmm6UcRd",
  "key26": "3itkMSvrXg7NdGjjbAW7CFTASu7droYXTMfTyYtfpPzrYbUDw2V5rPdFSLyEKesa4AnjjrqRE6qACN9BioYo897w",
  "key27": "4P39d5gCt4aWvLZh7VqSMkmP2Lie4iBzYf7va3WGogCcSrm1YhehkkuE6xYBrwpRkcV6GShXRPeFWWw3i1K6btLB",
  "key28": "5pqzHiGs1fKqaniT9UX4X6uaw1GcUAQrKYzmgKUNnnsgptiJ1g4f5Fkcb7BZjRgdvhjobeFQYXHRpzi6W31arPsy",
  "key29": "4N1ysBtFpYw7fYMgkvu2pt62HdQfFwg8GUDpdiFuZfH63dvyQrHihjwZbmWKsnuzHafnFAD35WkLULpYwtDN1ZDc",
  "key30": "3J6tsXSHaH1oWccVQWxU7yahQeWysy2EGKPhxLKafsAmnQ5QxwZ96iM3VttNpTNQvPemdQsHEoEZnAL6UbnqseWT",
  "key31": "5N2rYjFB48jHXreLAFrRk8Vzgj33ZBH7YzJUjLRvk5uvsCvyprwpqWQzrHrzwZ58BMbP8486BUe19P17M32n1Yuu",
  "key32": "2nuVV3osb51L4q2V9EVLxNo834w4o46soB6AQc12vwff156aGHkFP5uPGucRm6i1owJVf5QbHPAdAKPFDdDrL2ze",
  "key33": "24YG8tnLcjkWhaQKBejy8yn1Ley1ZiPDZAvy22MCfGm12EvM8AadReakWj6PYKUtAV1nTwWJ7iu9TJFxWRLedrFk",
  "key34": "29XQwmwy8Kju9H17CXSvKuL8mrdAPK5TZsWscabWm7zQNPgwKn83uQcqei6RNavuJSu6t9wUps7juZVo4b1Jk19t",
  "key35": "4YpWqLdv98WXFJe3tzqvKmJpdWZP3guPQuvxxQdBarJCCuPKUstt2Nae8Qy1MuYashJ2nMrackZ83RQg573P2EuS",
  "key36": "5GxcjbSqFaijgFPEuBuK4z6pGWS3h3YNxA6ZQ7q6KkdV2mxNUmTQjUrtrpCXqNVqb45EDdrRH6jhdNpAdDGLEE9M",
  "key37": "4TvzfeXzgkwu7qp4cp5F7SpXYYbGcpuKLQtXKRvUch3RJ5ofPSuorfJTMYALQSnstyvQaPGwwT7Uez875HS9bv66",
  "key38": "34dSx7nykF3W1JjX9cAxhN4zqFSpJKMm86Yciq2qfUNQKsivsJMH3FXBKaFa67NL5vkiJSHjnDLGfqF4XEUYPFJZ",
  "key39": "46MmBFKyGAr27DKBmzXiUPYMKijPRiRDyRLd6dBjKGqGayssYJXRy5iFQvjY97Pf8yeja6Aufp8iA6cSCUxgVKkD",
  "key40": "2JJ2G8qA1nJwpc7g8x7NC7F2dtupPccUioUoivkKFkGDQ9JdU5vuNAZhhqK8aZhs1Ld8if77fQLACsoB2jwUyaPE",
  "key41": "5MhUeR5xPeHa8u5hotDLpggRfefHxVJRdzwGxvbPd51SUSQ75tk3eqBkWDdgMq6rcg6WEmjKbr8XnUtg9wgFT4fo",
  "key42": "58bBnKtbgnmSAeULCLsSToLmBYwk4qS3W1uWzvKDGvtzfXYvJDz3oErHmAG58uegTQ8ZxPr6eT4tk5t3iNh8Zh4r",
  "key43": "3e138rHDAEXJ8yxmPFzSwiGhq1z5gcKH3dAasbaaN8zuENmCYUXC39N5Ptev5LpV5FD4VAFQBJJTZZcx3E4ncupA",
  "key44": "5TW6CWsiJbhpspN7fq4WmsWDDvA71fGDoY2NVAK8cTLjoKBkPdaqaHqjGs94DdcmCK1UAsxwauVad1D9emWGNzRP",
  "key45": "2DnJyN78ckTNgi87z6kPXoyYRoJZxLKBBrejubMNax4R9aSMhV3pEYFuiVhd2qN579PhVBVNBBN3MXXhXRV13qKF"
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
