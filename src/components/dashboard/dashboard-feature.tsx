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
    "RZvjQccsn8CxegUNviSkfU8crdKrdbwsdg85YmLG2jdvexF5kVib9hkH3EcvVhrofXm7ZBvNANyVcQfu4m248Lx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pUu67WPXRpT9bxTfnesLFcFzNSJjU6ehyZn78b8wnWg8r8r93MpnvvvNKAsuo91KrSNabuySjX76C8KWbTouCmw",
  "key1": "3dkdEZrc3jy7LHf6YGt15kHB7eEDwa5i7tNZDSeKak7K4LTZgDCcXCi5gkft7QgUBzJbCFnyfPHLxitPzSsFBRhN",
  "key2": "2vrmQPQGi4DSYDkPXPW7tcwMvYm2dA4Kz2m4sG7jakVfGq33D5xr8Cty2Uk2FYgfcLEKwvhbYYKDmVGEGFMoGur5",
  "key3": "5XLFJoQY8oEuyBs7Q42q7M8XmA8NSwmCDXrAVRUp739s3xoH4Ao2XV5pMAv3zRxztf1SqGDn9a1qJW53H6iDxrdq",
  "key4": "5P6zKgah4bHD4xFZJT8dULiHF4yeF7Yer7Vb3m189oLxtaiffRsxFqmXJjnZYQ6JYw8qXHRLurcHbXEEktWiet7K",
  "key5": "sjSKpbbNxd6Q8BiXcHn3Pu4cUmCzxL4nRWcQ9kXndZbTWJ8CYw4BR8yyABD6Utd5Q5kf1WbpGT8eKGXKhDo5qVH",
  "key6": "ujagfpVcsF6MhZfqK7jZYvoLwmjs7juwcv7jYbZqcBwRjmMrCJHj14JrWiTn6A8VCa5ggjqtjZrNocHJ9X6rKiJ",
  "key7": "2p8xTfKenicnXjCBkbS5yGym1qYaw6Ldg3BDJiP6g6e5oQ9zk4DZB3w6SNK7UrZ7sfzvjqaqe4AdueQuptzMvzJT",
  "key8": "3Xsq4f2Qup9zeKhZ2ssPfbxN95LCZ8rnPTTehkmPoZp4Eq6mZiMNZwNQ8b89afyKmZMAyH2eA93RWHzWfswupHBU",
  "key9": "5FVjRmVFUYbMU9AJojSgCVPQdzTF6ydLu3eKqmUR2VmsFZa2Cayvmefk63oqGUyBmzXdZKvuWaj9GmVBiXvX5WLp",
  "key10": "5Y5GZaZQqY68RD5YzUuHLe4iv6ZUmZBPhV9xiSXYtQvnrhp1Fr7zmHiLn4cngW9rsnb4q4WmiDTJt8Bw5NktPuJ6",
  "key11": "34aocTc8tKLRm6jeFWtVP3S9R1XwykxT8yiiFxSQJP8e8gU8UDitf5sPbfBCN2J8zXNoJAsA86Ni9eRHcSJNgHXM",
  "key12": "4597AzLYUxY6mtRfTB7dhMPTBBMu96zvcR8j8UqV23yrceE6sxqKSV8sY8Nku4c5EcNfa7L29QsdVR2HpJTvcfVT",
  "key13": "ziN1b49VuesbEaL5kQg9EcEKxEs8MX44GSfCpfXBnCwqNmAJKpa3z8r8thr8W5GEx6UCbdrujA6Qy7SRx9x28nx",
  "key14": "39ozakJh6PgK3887r6sVdKJth18oygjCa1r7mwyBm5JxJZiMNET9n3wFooiHHg6fW5YpBUwFYxVPGpHU7AarcGsk",
  "key15": "NcU9KBdCbEG3nEgvSHa96wjmDfFSwMDqX8ssC8na4Jku3YxcCxidBbRbafWMsj2hf6TTxAYHG89cgP31jq6C3Yp",
  "key16": "2zfYm4GWLRUcfXXRAB78ThhSGXSHWnVctqpY7i3uU74JyEkzNMZJtcmQzoqNrr2q1najZNuqPRZFfKTfJThVwmYx",
  "key17": "FQe1EhuZW37vt3jcZDSqXjq9mX6Ht2thQSV2cc4jFknwoq232xZ9de3kRscQkXrePgkArb73EKVtnTPjXgtSbrn",
  "key18": "3nyn89Yjcz723Fpkfyze4cuXKBqAjZf7eTxHc5BV1jLMEUk5LNCVAUENGazGb7KAHVEbrfEY7gdAbj3tQLnuLeV2",
  "key19": "2ne9wF1yHuuNsSk2AMUMCVykQoDV5JnNQd5UgY3617bubUavYMRy6vtV97qd5jf4ixE56WLdkxwfJZbo8XJvrLe7",
  "key20": "2NX9sJVn4sjcqaKoDdJEAsfi2yyD8ZGpxNyUWAi6dAWg4keg7nGoLwVvUGHeonPGKrNASx8XJxgeV4JCaaennX2r",
  "key21": "VEGCxEM7BpoBorg9FAbAtcQpHURUA3VseGonZHSeFvxgbtYTxcbJL4cvyYspvdtkQpwjAW2T1kWzfdnjxqtK3Zg",
  "key22": "5UKTL3hzWhT3q1ChEMFa2eUnhjRVnyijPrrVG25HSf4bBzjfAJtNyRdQT5EqbGqPiCCNVo8xMBsFTTpfbaMo76ge",
  "key23": "1biKvMYpb97V1VQBz1sBpFrmqtkarKqqYwovPC7e2WMpLZMpfzbWUVPpikVT6yb2y9WZ1RXTsTf11noC1duLJYB",
  "key24": "5DKkCNFCdJrNYWtSUEAjpx9atZvjgydYMdzUfAVM3DPn1u8hSKo2QqPYJV3T4KmwfgB133wygMq7QyA2AjNSDVN5",
  "key25": "5mzTtt4ZE7SiMe97TpBjMz5xLRbQEtkQRogFqBS91q2PthEn1ixh92BCyFA8oHnZA8fF9fPJU8YoCqFBU5SLnPCT",
  "key26": "5iic4JGU2Hbrh8vhkqpkrbP74T4z9uby8wkQo5CcWkAjCAVKyhVGWhwqRnk5i7YPqFeNN3aEuN69sbWDtTSbXEVN",
  "key27": "7UwuUgzPGJNUsM5WQztHLiUq3BmjVZHbUGNaFmqVsVTqyJkK3jUH8RyJASAt35vj2z3RQoWhd93cTk5oeJ3HThq",
  "key28": "3h8cWRcHJ7mRdnzNzx4Ff4zHPN4m8Z211r8YnGG6pAyAra7oHLEqz31bc9yMnCZhr4h2ffMifzpDexRf7bLb7bt7",
  "key29": "4x79JJh6aFtAUrh1JmNT5135VXgpffFEcyzFsbdfScL5MqttF2cMJxFuBcYYoFC47drxVMSENdxsLCJY5XaTKVJx",
  "key30": "4eMYxeypGwHorbsEcs2RQGt1p66WVsepVaJqU48xq1iHDVT2wwLRQCiEDznn7WnZLSg1AZp4CBbiEXFDPgheTGAz",
  "key31": "3sX7bV4PPBtXgCTBvwouYGK8cuGMJspbswyf5Pa9vNdq37uY1ZbJbFG9iXxNXAQvk7aiy7TSQFpmSnY2GrPkaDnf",
  "key32": "qe25z1PBJcYwi7QvbBT36SqanRwjfK4ZGzHN4mz3BDDjLNdJRhkB37MKkXgYFcrBHnNqnYQwc9uUhnYXEHZRVE3"
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
