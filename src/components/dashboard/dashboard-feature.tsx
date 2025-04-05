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
    "bHfy9Ruem3RkYxu8TNG1rNGXRXYJHsx2DiGZmCzywn5dDgcsTZC7iyeey4vSdm37FZqpHLCEfhm5y7WTMXNh6nG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zHdea6k2h5qH8pgvkUeEWEjMn7GyqVYns9ZgEV5sSKRjVSfBvUkxv9bv1jQsaphbvvXzM8YrZ5MPdvsBNpGv9kp",
  "key1": "6221SbjwtqMpx95ayD5Q4HiesuTJvbZB4ZeQJneNqxZXCgrEMHNBgcqazxEvKg9KJikSNFvqGwuKeg5eyEvBQm9i",
  "key2": "upmYEUN3XiUo2MGDMszu1ZXDhZxDvh4U5eqePDSWmgVy4JJFiYAU37B7qFEqvJWbopi97PpMtiBwDA17iVY4Sv9",
  "key3": "3vzD55iyN6WqMwQ6D5bkUpSdvtrbPMthuaXuzHXGT4VhkXREQetDw6tugVJ86P7V63pniYd6UxrwcSSq3fjWVrCT",
  "key4": "56pYFxu5jPFmwVX5hZizXVU2mwTwBHkBm4mJ9unmtFdJSUNCdwShffM5fvteSA2jefCo6HXRFUhGJ5mpNQidyL9u",
  "key5": "3QP4Bo1eb6MHkDGuEXy1dBjdpNEsfEAxGEA1UsH9cQcytqBybGYNHWFYtRXUVPCjaEPXhABnBJAnxDQGyLCRosh8",
  "key6": "4xvnzKMjqxXvYK3tnxcPy6RhM4DC171nug2p66frCEYmCv7Qtd9rF2ABtT48XJz4nkPvCEvM55JE2BDX1S3wQ8Bv",
  "key7": "JKQh6RkZv2xPv6UfTqopf1pZvTtpWvt4QyybU3FbJFvydWVoLLkpd4LC686jymBwfDy9Gxm5naYHtcsUBsfzRG1",
  "key8": "2c59AVGKmFr27Do93DkR5qqX2TW6YoLob22L3B8xYmxpnBKkk86GmyDMR3R9D2DStDNknKZhqU7mQ3jDEoyZXktb",
  "key9": "4GDozKTCUEP7rWS37aheJM4ZsnGU5UKcXmPLszqhQ87S69gHagb5sFsBmq2oUDHv4NGmjLsr2h35zdbLUk2XqTqz",
  "key10": "42yoT7zgojJp1wEfgjTsVjjQti7B9DX7WLCw2U1h5FYDYGSm1Bd84toREEUkh2Ju4SQ8QGJoWU8MjnT51HMhiqwT",
  "key11": "4DgrEKWzSvhdfVqMfwgQ8z1u8YTr2EGmYHWQqB7RQBkATjaMeGbjYbRrdBFfMKcjDFYFCvwNEBkfckiRHgX5WFA1",
  "key12": "3v3MEqvemj3ZRoXHaGRBUijabz4iky9bUmsdAUJ18qTHc2KeBoBLiGihWniTmX9iP7tq9z83Rge1mduVADo1FsaA",
  "key13": "2Kp7BphEgFva9c6bmTkZ2SLLqgJHdTa9e7GciuhmxcaH9B7Vb5sNitjn8RfpenEV2YYw8Un4F5sanNT7sfffCzXc",
  "key14": "3YyhV8SLjLRcBsw4sNKffEsmoZ3GP9SXBN4TBGX4VmKwAvYMZfdBLtHoQT4qsZNvuQhAKvSX5PXwsQY2QBnYLJHB",
  "key15": "dix5DjVXX5MzCZ79VqXmiLti1KqnRnQMmYa9iwwB1dtPzp3BrqLBgSobittsLoKdLZptKNRMC5EjpY9tCxchsRj",
  "key16": "3P85XhE5aRVj7KYX9ntbDsm65c2H5RETziuBrm8V2fR8YCzA5Nk1c8zTerXj54zYtKfo2u5yxcMGtuCcan6Y4e26",
  "key17": "CieKdjPYFHAdUxozmyqdD6MBW2bhFG2tevq7tEUajXHCognPqcb1Kxn77nnaouYnuPLCgH7EhyCQHkEWyyWCdxF",
  "key18": "2ZfqzdWq7rj72qPFpmeB3Pk4uThNAB2CGTWF3ajiaUSTfDrcfnABzzKoxugsKYnjoWyedszVD58omS8achuZfqbR",
  "key19": "4EenN4THo3DDzMtEgujxA3BGBj55hX55V4A3M2pbTpJZh3rHbj9qEJg3hQPR5jNxBcr7bk8M7aPc36SvXhwAyYww",
  "key20": "Dii8hbcYHKxXYa9GzLiuXJLxTbVC8uBD7fgk8VXESXG2UQW4QAfxKS15adksue6nqmBKrmnJhXwcZFGimpAdTH2",
  "key21": "te9EhEs1FzQoJnKbiDR5Mx42rMYrtSZi8Lq6XrKNfqSY9jFcdrUvUzM45TDUasMc2uMxPJqsnjoAAEWZzmDdvEb",
  "key22": "4pLqc55Ebro6Uy1ANg6PV4YsoqMBYnkr1ZWp4e9aYPSYnyagAAoKA8wwCDwXQmhexypsEVixtbgrgcXKFLAhAHTq",
  "key23": "rQLTtw1C9LHY5GDYmrnaKvqjZ2yJK8qiYd2U23BTwpo6ycy1kEtu7q7EZFrwt1vhjq3w7pCNZotz6FsUNMxJrhG",
  "key24": "5xsXm5QmGozthCHofbP9691zT81spzptQEtSCrTBDBD4NTi5aKNWrtfAXjBZ9Sw9q2LmBauBjSDd5S5Fj6Xeur7R",
  "key25": "Qh8hgFMKnXM3GsXMADxDbD8qPp1EGXcJ4qJTBF2npDLfxRtMvC8t9fxbmPXk2HGLAVUwNVoP3ighmNpobsSfsaJ",
  "key26": "3QPyNp3rBTLb28BMD8fat1NdYmkmx3TSL13NZRhPYfiSxpRjZkEh8YeRjHXwoHbEXogNitz9tEtJf4NMV8Hbkk5W",
  "key27": "41YWiYw2nkxNtygERTQ7kJ4hFxjjNZPBWzx6sHxBjPR1ur8Ha2Fqd5JywW1eajME9qEao4u3QajcG3CVz3agsESA",
  "key28": "5ukujWg7oQCU1AgmHY4hnvRXdY8K6CdbxUMLNPhbaTwo9ovGN7KvCkBa3aybLAxqY39CYnFrJ2qiqErazqJFbhMM",
  "key29": "48AxTPDaf8EDGvK8nY6rH5t3SKxaubFNZqNqpL5PdLwmad76xpTLdg7jcfniGVBd5barwn4VkZSvFJNXw6XiUwEP",
  "key30": "5ERChVC9tukAnuMegUZqwb8nKKxsLwbKtzZ1mCNuf3iKpuXcQBH6nWP6AHKfausVhoRwnYu8oA9Pq5dsLQWSFALS",
  "key31": "F7DxWMKbEu8VjPtR2ryu688FKPoj6QfcXNbkVg9NW7gFfetHWnmxeAHSzygemQehhM29xLypnCE9KsmAgM4o4xD",
  "key32": "3KvtLDXB8xjZEQesE98SFxmtignEJRACMayCAjxCUvs12zvSHKPaSURVR8V5F28Tjyr9cVEiQ6zYq1adbQWYd2vY",
  "key33": "AixjWgURyuRU4ewgdAc9ZQzqNhHjcbJsqVSdg2ArYAU7aEjq2vBkCrqmaSPAP6MkhVBQgZHN1izE56nuxodCEmH",
  "key34": "367Ffd1cmRjCG8eiCmyfgby3DskK5dKuUzCPF7FL5ag9Pck2EdYKCQsZKNY3Qcd31KxGi6aHisuQgj4kjP1Jktpy",
  "key35": "5GcWGN1UCeAwmCEjEv62cyrE7HrRQ6UKqHSGZChSC6EC9bruvdCutox3KS81ADJQHBmWAWBu8NqDnW1QctQtsah5",
  "key36": "YkUnHqF9zAfsujDrHR6a2PRCqkFEyXH9afHt5w9mBK1ajWpWK8cHydBfyQozKCktP56eZQgs4PXzN33N6oQEkyq",
  "key37": "5c2f1pUmfnQbvkapMjeXkR5ySMbEBsj2wQiFFVseCaF7vYZcsJn9pC4yZwEXe2KAVCyH6zVS3LSdDWeqURdtmMKy"
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
