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
    "FQCLbDCEZvMe4rcMSpTQN5AUqSHPLv7pzw2Dc2oKd9gs7ekPHdTaDTsXrweFgSR5uuxWBUAkureT5itD1VgLtXQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YCYxosNsqCDFU2kdeZQsBBWRFjjPUguaFtjpdP3H9UXQPbqkmQ18QRLjVWuw7eJwwLJhYC88NWKsipUTCzQTwzu",
  "key1": "64PYX6beahtGdiLH5w7TU8UVNwruTcNjfdhx2Q4e8GEfNgXSTNZHFyqcgqYYBZGHqATKoHZsH6p9RY6MDJEbpjhy",
  "key2": "4q3ktjYdHrbhzRqgDmxW4D3VizhFvVjPJd7cqPrDevTh5BEHFm2RwdLX4neinb7HhJtSK8QUb4ufR93sNsx51HG6",
  "key3": "458sFsRaKEkAxqMrQHZDAeSvHzTvKsqr6nbqoGrD4mkG2sLzWd9yDAXd4fdcsXQ5PnEYKgMtLsqy3qvwpSpDnhLb",
  "key4": "4CdWYzoRWjQ6mQMUKLp284FiUV9wiQs9vBVDCCpi5CyLXVPjqWf1wDhBnYr2qZ5DFkJamgkZ3EhTi9HukSdPVMxP",
  "key5": "ZVDSRqsLyXrd5K167bR6wZJnCjunPvi1KsdRWSoBVntEjJcVuSVFVtLgZnA4ZeH9cypeZdhgXgYxq3dqbNJvw4Y",
  "key6": "4AFabmqX5pVEc6t1YDygwgEohgkXZS9LKes76E6PnHmtECUqK59BCZjPmakVbycTusZEPUSmdrFggzAuYfSV24Rf",
  "key7": "2KrtjHhwJhnNEBbvkNSkyqJMqxk1vsqYgkjs8x8LnomAv54qnxdgtw61uRjSHC4u12WtUAiMXiDngwh8S4Dda3Nw",
  "key8": "5i5gpyovshqd1TNaXt5nJDCgmW4ndXSm7BhYE4b6LyXwA9GXSZNCnC5jV8bE5J86pbWvBo2HENfvKxTwMUBYskW5",
  "key9": "2bXLd8HuxFawfFpPGY3wT39Jp5faCSb4wZSJKCc7NjqAP2hFJ6ABey1BABVx55noqyn92vxwkA6U2BSXgg2kaawj",
  "key10": "2HPA5g9AiT4dJjn4D3ha7ScoAEB9d9mpjFoMcqjvAqkZ3xdZBWuUCL2DJvvXGk5ckA35TppDnEa28w428vPSmbzt",
  "key11": "2qtP8WsYeFSwpn3bNWTPVh1NsyJk5cZ797yydNGfMFwJKLEmEhufwD9Qyo8NgrRFs9Eb3CvLZvwMe5wHTnPBXMFf",
  "key12": "2Rp9AHgMjoYPRGdrHfGeZsPkrGrGXg9HsvstyZMLAVbP85yupptEytFd7pvtk37ycqphHW3xDmsqGTH7T75eAvqZ",
  "key13": "2e3BdammS6kA9T7PGKWR67bh7utQShkpR1oGqHx8Afox9tU427BVwfgNeTDftQJHoUzTwiFuetB7FbpSFHPWNz8E",
  "key14": "3ueBhKRiXijAxejxuEqxijwm2putUF4SQ3oiz1KhuyvH4rbbsMFpTebzLmDKpdVHL5apRxpYX7Rfcr3gonW2c17h",
  "key15": "4KqTpCYm5cHYGh5Dxx8LmANwfqp3Yy1ufb8ddFoRKtbJrGJ35FaoniZwnhCVQbYT3ZsHYWEgZdZNJi896hfe329X",
  "key16": "6269Ht1dxLE4EJPpdb9UyKUug1RafcyiBzj6iN3DdNqmkppx4HQqNxoXk7XsvamNY53RWcHdqP3cfvBdYo8R39bk",
  "key17": "5apTqQan3mye2s6bcByyuznKsnfe6uX7U6XpvLpDhqk6FA3cFaEX77XYqjjZsam5UkPmNobqXKQHDPUNTPKkqeFL",
  "key18": "26JtM7GFFFrjHw7HgRWiKXtjLH4rzvEM79PHELHsw6sCbNiRPKh7xW7ioY8xxcsuffPALHaQHK8MzhzZUPMWMNsf",
  "key19": "3Ssa8KzoHAi8zUtCNSyYJLuB5eEbKVkDXVQwMxPqc89pRTpSo8Eb7GMCeFBCqxkoke6cHQn9UTYWZ2uE2DsyZAHG",
  "key20": "GicgkQYnsaSo91Z8KZ2BQ6CKcKkafRB7ptJMBYPPMr93xiYHYRXdTDvhFj3RoV6W3TiE5SPnxggUxSJjqaZA9WB",
  "key21": "2aX62T5hEMnTVWgBCTwjZuTGHrcpYJCG3y6G1qbY63KCHBdsKUcDGeDJousrADvqCxKqEjtezfyhCptUq1ncMS3y",
  "key22": "2tPtxtjhvqNA8oJBHenFmndpJKVZi8vtqRfJyJVbPr1Pi8HzzdP9nxf7cJTia1ApUrRMVVbssb2pvWhL1xrgbY54",
  "key23": "39Zx1k829nb4Hw8UfL24PoQmnZwdF81Q7SU6KjAHydR9LZPBPmes9XyQPcSf3HnpqazhdDjbDiv2Gczn1TzagfyM",
  "key24": "4s6Bos6RAf22RExwHWg8aMc457Cf2MEqhZpvRNMVgjtuG1Cto16KEnYpo1XaVbPuNpgRnqw6fenfVzu1Agrvmakd",
  "key25": "3Qscn8Eagqx99vuA4AG7KV8oonyV9cetYZevErMKW7C6kHDqSfs4D1LZ7GHEdmUpKA9UgfNuJ2yUJDSmNVtm93sC",
  "key26": "5CDgSQbKqE4Njc1J9SqmghMPdr5z1GZUP7qLzgRE5cKG7Rr4gvxg6xe4T28v7RxggAtSxPUfk3KZtW82WsvrX2A",
  "key27": "5Uu2sUFE4J3SHsm6fcMD6Yinp8WAoEZgona8ZAkjpAiwGWBaoJRV39pesnKzvLLkWLShMAM3g2SC8K1VZHTGEHC3",
  "key28": "2dLUCwrqvvNxiVSE3y4eswRkpsHaGbDD9DFSX1etEPqzy2kbL2Fz2eR2qXJcCBCvmLh1PPnfziJSxeQw4Gf1STe6",
  "key29": "5zJoXVdk4XnyW7WKZsKQxiLXqpCwrueFDXkBATC9LCNWjy3JjcfcT1wKcF6d3ZHZxaWcFt7ZER5TqLMAWLck2uhk",
  "key30": "3E21Ag7F5d63rNioCo5H1pB3jbVkvPXKCJsaRfNWKf8wiuYviCRw2ohnttasjYFSvNurgyJ1JCZb4gRKbmKYhw5V",
  "key31": "5H1oEHUGiQ7CSzAfHm4GzwuxEMELgQYWst4tYmvKvZPiK6ykfrApwZvq1CDnz4BBzCvKypCkQ6ncgQJXYpQNVkfu",
  "key32": "4mGimLMbusBNPJeTjmsumqMaZ9VznKjhMT1TN2PEz9Hz32oukeztVsB76DSVKKzveDnZDaFyz5KNeMfoTmVEPfhE",
  "key33": "yWcEjbVgUNBsJtjx49qpuioY41GwAEE7zspFuYTivhgEd9agtFTkDRxm272mPcidPH7DdxD5qKfkpWhdR1ia4Hi",
  "key34": "5SU6JGei2mHdz1PiP6jp3jaPNLCqvT4bZagvThSMR3Q7BmFvtYoTaSgoiqY9mfDG9FwShWY51sDvX4xYkeuWPar8",
  "key35": "3o2yucPn92gHkVdMJbA3kC2z88V1YvhYJvFVz7ZpU1rgGEC1ip3XDHmgWzT5AWcTdzpY8V6rNS4xLhcQBNXN42fv",
  "key36": "5fnZ5JNmABZeDjfkpqvDJgCp8K5Wpuz1amuV5ab8zSZZimS9rXn8QgNrhDkVUSoRitfX7ZEwTYi8PBsrtaRtytZN",
  "key37": "BvZBw11JXcszo2zvMdhpikRiB9rTkbiqza6aH3DMKorUK1QSgDN6ZJcvxKEc2JmDNGZQjcBUDgr4yZTP4gANTWF",
  "key38": "2PfR7gqie2ydubCDNqcgr9Q1U6etRpw9sMnjXo5bk8MhtVDmYPZUUnCEuzj9W9Amr6j4GK9wFpuu21DPomdCooq6",
  "key39": "2uVecT3ouHsBdi9gjA7Uy2v3tHiyDNWxufZ1jcFs4q6dc652xWKymZ8iYpGBPwDGKSWpz31FxKzEonBsiDkJzryb",
  "key40": "3AbDYuwo8RaoGpHjucpFzrD4L3xkkmB2PYXp5Tgf4YDdA9tdVvrztcQSWTAg9pMB8b4BLhXRvxC6vjCqNKxFVWfn",
  "key41": "5NhZsU6QUQ17YHoYzHGVLQxt6Uw15Nrt4q62UnxsymQ5LrV1EgHnrRVWnLGc6D3NxGyC11ZBt8Xkmnos14NvBfEa",
  "key42": "LBEFYsK2zYB4R4LUtRtFtVShfG5726jaTLcNFkH9WqpRofY4rsiEbAbKdVHmAPBREDFu8V48GxD2ayXX1MYBC26",
  "key43": "3qhVMMwSi7EQjTh1UmQhJgiUHMmgVWGQERdpivt7NY393Qhpe8dQ4nWy2gKvMd8DvyKtVykaYXhhgWbt7jDt8b1i"
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
