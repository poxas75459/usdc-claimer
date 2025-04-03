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
    "2kq2JmgGMoXR8CPCKPUQnYNu9YUKhyDabFAsu3ZZff3pQJfxBfWFtLPBqciXzMFXWi6i6JtMSbf7zQsqayMZ9jrR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Lamd973yf3z2L4Et6HTso8u56gjAeKufyZQAKsxLgcCpwL6WDTSZbCjWfL8V7RZRRLWmRmTQDt97Kzm6Z3L9HF9",
  "key1": "UPXqS5FS5eZeiBXHEkngcbq2uap9wXFv32PavxCK8YWj5r61Sh5nbveZaUnZvHzE1f1LEss9u9xR8ZMFmEFq6HL",
  "key2": "yrcY13SaQeqSkqtkCnZ2fNMhq2m32iqZo35jg2G8XLNQL1YGLa9ASEonftBa9HprK6KsNUbQvTko8gW8XaK995G",
  "key3": "2tuGzCsTmVQhUFZ5P6838WxBTuMg95xuYmT5XcypKqgUeotiSrCGAKayqAgW9QuvGSG6JGfRzw8LHHEbn37ZeCid",
  "key4": "4d3sLbUYzriZPF2z4jqEPDe1em74Yy7DtCWbYiC4RKfQsha3YLgPw4AegBMHtd2U8dq4HwB3qELAdXLy5TJE89JJ",
  "key5": "2DLJGauWN7UWrDgaGVcjYF7vjyC1UmnKyh4dFbY1PXTrTe1KxP9hRuGJcYwCnicyCCxHzPVxHtN4zLJarepqGsNm",
  "key6": "3w4mbtDsfctksVvEKMSFKj7JPYRyV73AkFXnU9BY6bTgtro8xdXwxfD3u42xm7GfyQkL65jdZNoCJjjT1gjPsAiJ",
  "key7": "452nU2Q4DeYjxk3NN2HFWg7VdDWSsMJCsKjoPq6CzMmioWGBUen7gf1spM3cmtqY6L6Grjx8PHqpnsKAYkzC3ZRW",
  "key8": "31CgBeaB3pYkrDmtLZnFB5wkCa5wXfdHjLcwpMWwioAi8zAMGfbkGgNgr31LsXqPxctz7PHVMrEMzMos8UahJh11",
  "key9": "47GcWJDanFFk7AfG6txxdTpCV6F3frHJ8n4fU3cYQLG6rFKzWS5ZZxe3jo7eZLRsh4mwqeEDQ4bMuBwrzK9wjMam",
  "key10": "t5EwYHxfiiSChGkRZgVVxUhazUFswCrEYgWNRyRxVcbxnxGekptSCAb1wMYdk1DekDc7eYhUVqZhYPEFzdN1D3R",
  "key11": "5Rf84bCLvs5MvwFRdPzFNhsddNzgeGnkpbQEAktAD1uLyKvoQz7T26KDf25KboLQNMeHBXaD89ndJNorrjtM7kik",
  "key12": "4jwzsunzC1Swps26VZRyfmj9wndBDS7cZ9aDyX7aD5o5DvML8gG8Hd5noQZWYBMQ2QE6A2rJYBSnoNzCT2LXRnYR",
  "key13": "2e5k7h5kpjxXVLL6ZZ1TV5Cw7g5894eB4um2QkPEBmMpL4gW9dTBRj4EW58MKfB8m7umYpPDvq9k1wFMT58NBqmc",
  "key14": "3k9M9BrnyfDfKjuKHWMVpBMc83X8ZYCp7cekLoubeYiN7vKN2PFjpFEobV8F2Pf6vdyrjq6EFgL3raFFPNj4uThX",
  "key15": "5gnvzYk5ffvPEpDasdPjrosQP7NVbwNHXezsx14ExHDceFwqr8d6vGVinKabSAcQKXz85LZGiJgb4aDk7HUA1bTN",
  "key16": "4jykncRm1gn7vumx9U3KrGCxZcGXcck6TWrpbsjiUDtuLfr4yHEAijeYsBn1ZqQnXBS52vpz9g5qAB3AWVYGpjFd",
  "key17": "2smbkS22EstN8xzWes3iZRsJzSPxakGWWRyLtH5bLHAjfUZveiCUSqZr7QVTHQkXz3xEySwzLR6Y3ibjFhXtrb2N",
  "key18": "jzTLE1aRH8CU4kHEqH4FQ4AZCoSh6cRRWbFdunL3mZ8FDMWwJv8X6j9Nd7njdU9bqsdmpQqYsUWtw87kL4kuRb6",
  "key19": "4HyY8EVn8WqL2DqCMhMzWkuRMo7B9AQhZ5aCgZsWBxyfMR6bLVrmuBM2TfbbDv2VoGg8fSgFemKYGRY19PSEKqSq",
  "key20": "3jFfcnk8YpEws68BYLVt5673XEwhxehvvLSTShVgeAWSR5qdfBrgZcBfj35WgDYbZt2kn5w2D9NHqzzQKd4P8XAL",
  "key21": "5B5YkCehp8jQWvTbxo1nKdDran5usnEXufHEKbtr49XhpJRWafZeU9tRdzAXmSYJdgP3c9zeDUhAo7FGp17txpzZ",
  "key22": "2DwKBeRLjZCAyjPSZCGcJCQmFtWvVTCyaKeFScT6bViQ3BNE9NnWnDv1HnaLw2pefLqDkJzuVd5jhyA7XFtNPWfv",
  "key23": "g3aBUV7CpWVok5sDFA2j5e7LY7E1n4Vdw23dHvZzuhnYTy5iVZJsjdrwQhovFzPA2541jDeqCqADQoxK2q2gtib",
  "key24": "5hyfePjcyaYFXAVk2Mm7DUg1eKaKQXLZZpssmYDVtPpbgUZHefYeZAKwHiPaSjhSs81GSKNJu2F7JBxwiDS6PZCT",
  "key25": "2QtZAcfqhdQ393cxXTccA89EqZVQEExERUzj33GbfE4bhrX1uFokJeWKjNgj29Ay3CMZuFsnyNhHZgRgs3UxiyF8",
  "key26": "6aL2TiS1x688PaqXjdnG5Em21jBk72eLTbmJNJsFL8e8ZUtRGKFnx1ksW4a6h4AG6B2XaGzodecubrYkpSApMVb",
  "key27": "2MMfhQbUm2twPX7mg71amA7EJxPJJcsHnroCxPCh1t194q7dJ6eDhpcPZ7dj4AodPmDkAKkswbdmuskT51QGsPo5",
  "key28": "5HBAEmxVL2KnkpJQ5THrQ8x8AzqnczL1VyTxEdkPo79qZvKBTsgJz4AwDCaMJaB8CW2u69XcW1EXHMuZpqH3gnpn",
  "key29": "33fdd1mzYuRo8vhs3VjZmR8qyzJFkiSPo729DALrAAQG4MWaVtNNaw2J2KFDviQRDRtGBmncmPEfgDv6j692L2NL",
  "key30": "hVyFewgYvWzJScfH5o6x38YAZsEGiHvsqKWax4xKywxUEN6sjtcK6eoFicozcQ9iphk9DrRrn9JQE6yHMmEWinq",
  "key31": "2QSgsfMVVn6uNhX5kffXf54f9Uw8vBUreS38sqANSybszdNsdYHB91CLf2H4xnFcQXLmrNtshDvNH5QRhVb6KUpw",
  "key32": "Ps6eWAkc64prgHZWxh3UPJhrBjt2wPsoMcyrv9SQbEX3997JDjbfdKiJZnZjpgEuDFjjduhDzJ36C81yxJGcRyF",
  "key33": "3aHHdpFA9CtqPKWtHWKtk1NgQrreUYmmQW5USyPZboN8oURBAZrXrB2yvoipBY32TsueNJzNH3t6p1AE9KdXmTiT",
  "key34": "4gsf14Hob92FHNku3niqBaa6NQg72gqDABXgcs3PvRj6twQumd3b1nwqr1yxMjjtrrGznLH4SCAbK8HaYy567Pto",
  "key35": "1FdCwm45iy839vAr8iLCfqkiPk1G5NqGXnHMqtcruMifgxKoYHyisT3Yo5icdbQqkUEivVPhS8WnNRmKdyLmjay",
  "key36": "3DZzKhn1FzZyi8KaZMFt5p1rvLXdMF7kcr9xfucdrWjNvAHqBfevN7j5R2PFHrjLr6ttAiXAKxqy5yJgPQkjDtjo",
  "key37": "3q5VYwZQYsnht6TWf9dE9bsrV8qKVR3EakkUSqxSNBWsziKzh4rkDVnwDgpASoWWCUMJPnCsUCfFFgysgqWMAQSm",
  "key38": "612nzuSKVVzUX8GxBTXcFeoxVoao56twM5bRzR9fguRZgyv1jvCtE6bfoM5jn3sxVNqSqgXR6wxTsxYUcupgXqQ3",
  "key39": "4vbZRf3gJX2rHJPRrcFNxfmHPzCUgY3US2CdkfvxQ1iUadHhWD5aYqYdQGT5Xbqm4hw7yJyx1Q6mn1ofrH5fbbMH",
  "key40": "4XQ93YcSQ3eWsFHieiGuW3TNWcjbjrW6Cf3ZtVmN2xBHRZCL1js2KxAU4umaZS7ja6Szz1vTRHEzGaLEAtaeCDA9",
  "key41": "2VW1sdRQ3Mo8QmVqKXXCg3yuYJKXpb1eShMiNkG6ZpbKNDS1NcWU5WXiGJ2ds98usLpTyzqLfVVeGwDdfje7Qfsp",
  "key42": "3z5uEQVmHVsredB5fFJymqnVSv6pd3EQvUYtceNoDgh7L2zFabiCaupLxtPuRT6cARHADBR4M6xZ8J5wY3JUUBvi",
  "key43": "2YyA8fgxBZKnhz33GMVnYUJsfTNgqxzmUPEsR49u148p2pLbzBBLWzWC3kSoKVQQRSGKg7JS83w3UwqrsKmKUAVZ",
  "key44": "5DdggGbbr5oUWERz95VGoPQoEynUMberK8ByCrFnN795uKJhoPUrKYtY6AoqvUsiK8VAixLdYcU1gH8C9bGCi5Bz",
  "key45": "ZrUNTw9aB27CktkA9XeN8vzWgLbX8xiUTGdsY5XpnbPhaHCeNbdmgGdzjEUR7HovN5rETym8CSaHE6zbgJ1rpM1",
  "key46": "93UtbQ3y5ktFH9VHPT4P1hJHJZupqoVMFK6ySi7MFrZXtg9WNAWvbCSJMVY6tqkvVCPLLaTaSZkzFyBuXp8PHSy",
  "key47": "3eeQCNnmHPym9x6nKUnGzyNhUJCy8G4Skr7Br5ydSHb1UjaosAeP2ntQSn8NK6JbwecV3RmgCcV4xMgnUwyPMLLZ",
  "key48": "3UG2xhNXFc8MSab6GfanaTCQSUcDL86f1Awo5b3SuCB5qZ2kcfadbw6HkbXTKfA2yfV7tF9KuwzTBHMki7BTA686",
  "key49": "3Qx5aiwA3FDJjFzBpyNUW8FA4ueJ4DxVREbRnRAkcW4yZ21EzJ8JfYirrMjSB55suJ5u3kHpgqbZz2wuZT1hrB96"
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
