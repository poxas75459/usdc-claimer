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
    "4u3wgV2SV1LN9Wcg8qDNsEYQTV9itpeh32mq9TpQjZhydgw8LPQuprLiBgkYbyXpgLDz2AD8WNHYCoEe1YpRX31U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wR7ZL3y51do3jmW8hkwiiKiGZaGzeCymN2B6zYJcCkBm1nRNVRXLoZzkK77f3zBpQvF3Tb7yTSPfVH2FFqcUdeF",
  "key1": "5wefAeBrbDwN441Krs8J6wYsV9WuP1G4GxD54ki8NHchASJvfbiJ2nQaTyr6irJ9upJzVzyUvy49tW6zGJwdHxYW",
  "key2": "2G5bn72i9Z5R3JgaH3FmHPt6eC9S66uk6JyRc7UryTgcqDvt1MuiDaTwqikyMiELrmJPZRtVTReT1RZpqGZqefWs",
  "key3": "F9P2rGgrNSmkq7kYPYEHLBF8Ayxw6ddpgMjYC2gEpGFc7h63tdL3oA3nGGv9P7Jnomv6uPGZjMW1eDGinxBr4uQ",
  "key4": "3cncUxrQ9F19irUEb8Ekur8JZj6jS1TPWbcwxQ8UJMYs7NY4TuiojG5GwCe9up5APUvgcmAHWAXV1fDyGatzZro5",
  "key5": "PsxdEyqBJ6WfUjeYWg6GER97G3xLufm2EbJSQGxeueAwq3yoSP33Yn27V8jQnQb3zMQeV2VopAfKaZnGG1d2Kmv",
  "key6": "3Nh8viM6RQ5RNiuZMsZco8jt7hXDxdWTtSDDHvJW5YYti9FyN7EKXYdZPPBUE5WnsRDXnjAmPk1gxLbfc6VkMRrm",
  "key7": "2o5F8x3mpB9BXCscHRA4dyxbZRWqXncYHG6Zxy67jNYUUvY6wTeeH7V7eM1jBVjXcB25ctGf5Fsmyrxo2bi1oy4q",
  "key8": "5CwZWVvgSnQV7Dmomuu68NJXDkiAiKTuSLWDtcbTDzVjXrqLC6D7dQ1KsVpSKNQRDMa2uKcsLqKzQzpWVrqvreAe",
  "key9": "5ojRH6uQXgucj4PpQCE52f9tBvkoFsfen728doJNBARhoV2LpkDVPa4zu6pzJKQZQMP2hsFKHiyGe8RTzbGrX1w",
  "key10": "3ZMHru8QUWWDvh6S4rAnVubbTxnwWZMihm8M6vUkfRfWPjmJ3cGveqZvYf5mcn8Jd7JytxknK7CMrGvNfjQ51XYX",
  "key11": "Xe6yGaDrrpiBvn5htT2JRpaQrcRhbyYZF9PXFk2v6LiMjFHQ7CTpFBLFTQmEMDgkH4dfYdE7uaecDDy4GeBXBWY",
  "key12": "bqU7hjoFu2HpCYUfnL6n9enzXTQSU29CWo2VtSujQw1YZr6wjuTDmJpiaRVoUHLKszTgrKDFKBA1YnTJKhvAGRT",
  "key13": "42dCoDBVefgqhFnDpGvG6suo1eMrzNbsSDzsztwKRtjUCPeEBpxDYUazg3XbC6UsNV8YqwaM4E6QvesS33YeqpqW",
  "key14": "63Y4aZz2Np28rywnZqVHqBwY98E51ijfBsxrGSQCTE8RfHsHWkSh98BFkyeEkskbqdNaiqY7SdxJy28wkR4EZjn8",
  "key15": "5capJEgiUU31j7vfkB4h2JWPTUiH6usxAuezpHPjEbvHNwtj2Mqpd3WQGcQguxWvCVfAASikAKHDbKRr8domXxxd",
  "key16": "3CwhsBRZeUts8AZLRNf7c6aRojRGHmtVPyhcSmm15VpM3VuPythgHgMXnz6HV36utKoi1SYTRg5RXbhioKN3nsaA",
  "key17": "Qxr2HvJdGEu6uLMDg3PMeMuY3GS4HQUyYA9r6fW1gTUAFJ5vB9VwQCFytGcGsLzMQ2WsgUXpMUUymHUMA58fUdm",
  "key18": "3Nz2X7vStZB7KNPqArTQ9R4o5cUTwY5GiFAC2jwSqFcZ5UNxs2uAfZdGufb9Ct327PXvHznSG99LX3U8g6C3rqoo",
  "key19": "2byhReh5VJzWD7gChfJGje1XHr8axFyvravevmsnKrqDTKg6GWACQVtW6Rf3tWB9Xg5pktrAisZDbeX19DcR4Rsb",
  "key20": "24HP6RJLVmiVgVw3c84Jd5xgetTkfxRRqxGg5amSV5gKpWm2qPgBDkTK6NpP6BW4JYxuSosn4AVdYDsznLbJtzkM",
  "key21": "2fR7SBwixGgZ66WhwgPifGnbQxeauVorRbFx5tgZpDAVN9fyG8DdzrQCeHMEeRBbQLteGWjdx6eAkjdbW96JrfDK",
  "key22": "ytxvQQkKmGfapc4hRrCBCdGXwRFtW47a16APTNN8YUuFuBdLEVWd3gXu9i74DCMHvinRGig2rPFfHPi6GFmTncb",
  "key23": "2th8ecZPmmRSNvGmdV16fvoDx3Ax1hJJeea929AT2nrvqfEPEX95ZJxE5xoxZmgUyn9benNt9XcUG7xL8VKD61Yf",
  "key24": "aR9etzkHeXYp9gUYTHWNJNiSYsR9c62dSSqoXiYrq2mw9sLsVpXDKkTD7GYR8SatF6rucPbCNCCAxix8v34viDh",
  "key25": "2bsDjKR5LyLwASzqpc1YCnJjbMMTL2M9HvFxYNresAD5qkUN6nncWb1bfJiWNWTPi3Jns4Sqh6sK1UPdcpDx4QVm",
  "key26": "5jrxJd7CVkR6Sp1843T7RM19mVZVQwaAULXPbQEdWoyko7y8XcbZzvCvrWXoBvv2dfEo2MxWrZRDGzN8DyEcLD94",
  "key27": "4YKLmPb5SRT7kH4vLfkRLknYSqTaCHyFH7DFmJjiC4oiUciyWxtCAtjKYynkNZTG9hjS1FPMEdwmsRSuGEeHhi5B",
  "key28": "67PDEaLEGNeF2cYXcLbM2juwF6akiXCHK7hzQobVaprgJK16bHbZLgbZY65SafjdfwbL6WbVM8yypBD4oTRCdy4h",
  "key29": "5Qvjiavy8Lqn4yScgFhrqUF6eZFUKZPCRWaUELa8Ghzx3Y1rU3DLRq1s6Gf8ATHmiHwfhZNwr6UMNvRZQqqDyvmB",
  "key30": "2zGnhojMURZchYuPaFpmGZJuYvgrN1c4Fy1hs139thk6xeEDwz1XQHKjV17e1WWxEPk25ytSBZAe4PVpiGZivu2c",
  "key31": "2JXUzcrDZpUWceEoZVnka5ztKHSpqbLRe4NyeQiFsN2qH3f3zGSyMPHykxLhXRX1uERQVYhZD2HUCa69StjuhxnZ",
  "key32": "ZNLU3R6d4DrJC65KiiKNSEEFEY8msDfDNHghe2Szc12N1kNm1GxzKcpHid3YoV6TNpYfeytdBGfAifcVHX9wKdt",
  "key33": "5pUedRnsrkGSX7j8nM7J413tBD9zE7rxXi52VXVDw3iUUqaPG4KNqgd9VinknHcC7ANj6ynfng9daWYbQ5NLvYjV",
  "key34": "HCRKkaSeV4Jh2FsrR593Q7vdriNDjkTQmRfZiUVbFhLMrHbypbNWTcNX8f5BEAiestoPzrpeL1NdCT3QPvNJqGp",
  "key35": "2Abykt2LTgbnzjo5Kna7jtMec9mWkL9Tq2nEXaqgUxTyE46iFjTtbidxfAoWC1guwL4NsG3ac9LtmPyB1fsp44Jh",
  "key36": "5BsEAC96HHWQgwi2ZypRkJwUUDQpyFNFb5QFvYXR2LfCMTvU3Jg9fqB7irrsBAexaqunqwav1CLSfT3jpudfPBBe",
  "key37": "3t56MS3dkwUDo1MmudDbd8rZmgxbiGyq5iEa59CSEyJ8xwnTM3QeHXGL39eyoC1rJExJ7G1FvVdBi49PrTM6sxYd",
  "key38": "5wRf3DcXG1onbR8cFuJCQMnCfwhDbzQEkzoegQCKgMeWLSuvYoc3XorBvwGtAk6cEdGnSG8oA1H5AF7ZgtrJgPzA",
  "key39": "2CvCsttqHxBur34bhRQWzTutXFWQhSJqASsZog5VYnNw9tn1y5KctztViiBN5CKgsbNLAWyrZtATv6mE2Y1SEdeC"
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
