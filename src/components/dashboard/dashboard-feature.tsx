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
    "4nugHXXsg11iiVdcTe5AWoQXKf6rZBFNxpACPAbiXpfU1J9VCZ1uhnjFxo7127epvjzGwr1Yb8vUoM5neGhnk2bs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CiALPHqBmPnjs5KWXnMfZagKhpzqFRaJpXECXuMsrWms5ES4QxLeNuDxPSRpZQAs4NB5MCrGydx8cozD17xuZsj",
  "key1": "D5MbonazZ7Bnx9d1vcunfvvZQcRBL6NXtB1ZW8PVBPuYTfNuvweb95XF1WoUgBtiaQPBCmcKBX8rsy9yycCQ3Ja",
  "key2": "2csDzvXGFgEFBARRbEmtx1Buk4yTLxn45rEmBXQKehyM1TgNNhuJt7Ut6hKbeJMCFNLxpNkwVC44bCpXPdX3qeHK",
  "key3": "2TNqrdfqSExVAF8gTvLVvYYRvDKBeGFd1mJWAtC9X2wf2JJxpYuZ2ah8fejCfsU8Ho8Es2R7r7MdJj9QTTZhY3jP",
  "key4": "QZUuJwj1WBg8ekb5pNXM7VDudw8kM6sBtr6fWoaiw9s1Fq1CYW1tczrxzbKPK5vubkxU5bGpLCHFY3a6TdkjqcL",
  "key5": "pkrwy53nQB7GaXPDu5YqRVSJgyBgLJkHTHoqq7eti7XekCvgE4mxe9QAFxphqu5gkm6gWTa77ADFNGJxH5gSc7q",
  "key6": "3acf3zaLkWk9LgtyeWGQJDYHaFrCWb6GCroAo6NLuGZMGy2o6HRHKfkPrzo52y6Uj7czvGeMNnDs8TTPduYY2WTt",
  "key7": "5FFqeJG3hGY9YcJPxe7fNrz93WstzYWG5ykWzhiEAZHGAqzjYgERLch1Kf5R8JLX5smkceDB5AK4gEEFyLsrs9LE",
  "key8": "2tMLpt5JbLfyCejGyQMd2YyZyG3FkkfsMx2bQU7RFuQpDGF2hfJoQqqYy2NGrTxmMwJJHhjg1KjfMxrzUeqx4bEi",
  "key9": "3T1KEvkTHMuGLN8mV1c6Xuu5tmVZBDL5YyXi7djAEqCmU582uEQuaXRCac3fdE6U9He2e1uZJYvRjYJYfKrqP9yb",
  "key10": "4cd2Amw1Zf9zF9sMVvnxdyswk29XEi7vKD1G6mxJmiryhcNpSMc5bKMbYq5RTeebpteNnKxhKaCud8PSpeGQvUqF",
  "key11": "2u6UxTvzt56njvN87vhEfYUXpjSC4Tq1gegEp9BrVc6HMXSc5uQGkqq9KLgkKaJ5cffTcWy3za89tGf3XzJiTnB9",
  "key12": "4KNY9G8WqRy8nLqj5fNoZ735vtTb8KedVP8FQxietpffXqoqLmzffsdBKg9UDShvZuvzoznXJ2LbYfYziLivSShf",
  "key13": "4DpUvMTM5ZARymknMoP2q7T8wRGsFh1ExwqKB2RNv4LcKwTgabSfYRgDPt9LKX8WKrmdYQMyPNWP5pFb7nbQ14jB",
  "key14": "5rYSzCSdTLtobMf2pKH4yPiSLDRrcyzJhgrxXE6GYDcNxdy5Pi4JFztsfend2LiDgGZKNvqgjkiLfhKEnrFbKZAb",
  "key15": "5qxz6n82twtLMhyJvSJ9GKtU8Ay3YUekb2DxdYzngqDrgBSMbQeQSrSMooF7QftgnEAgWPPuM9QFJ6nVnMxGfHPp",
  "key16": "5Ls29cd7MMujbb92Fg8ty5eDc3oxgfJXcRreE9AYGtd1paAB6FJcFbiBbohEu3WbrUt9iPGPG9HRczERLMuVLeie",
  "key17": "3nxRitzX9FRwT3EBHn8kmjHvHfNNnDWaLDVW9duzSpjD4EvN8zzXg3JLbRCbz6kn2WXT5cUW5N61rvvUhkSd4SSs",
  "key18": "GGQtKKpNp4VCExS8Jo8nRbrFrvunFs5WVVwhAw9beGX8hQsh3mqPMt2AwNMoxZhhjqYwDysxwqdG4q5v8kDop4S",
  "key19": "5SDpX45poFSAo9FARUniFNPJaw1cQNjLBsC4goB6DScvYd6M1KD4oenJUP5NUYPr15YaXS1vAZ935xRHKwjkLRRA",
  "key20": "GjyiGtHAgkuy3SyJNnuGPFgSjt95bqeYwn4C6B2SGcMLvLQhkjUzK3CgfxaWgCYZtqG9wSEBnvhqgXFEgzLHCG4",
  "key21": "4nRZg82H6iaa8qr3Pp4ca9ymYdueM3G85AB3WPCQ37BB2z8Do1rdQWASYaqKqHDwK7DWBHRBPPWL5o1DqwCsXAND",
  "key22": "5gHLavxHjs7bCKt7niNsMB7gPYUZpgwCGq66xktwAfQGSX3Tn2Ni1kAgWKdPjp2o74ecZsbUUpciAXEJp3DBsCMq",
  "key23": "34zwacQU3kyhBBE3GtLV6ThAC7TBNZPaCfTL1XCgMntk1BiZjhubLvthShRdLPEkh9AA2FYFDFGJyrCGmNFFxHMq",
  "key24": "4Ze3DJ8ewXunt9Ua24Wvu71hzot4S9cks6Fof9TWqT5DM2utwJ5JQoHMhTcMSBoZuMcEP2sZsUR6tYNUh5x1WMuk",
  "key25": "vhWxEtReGzwZc1JEtLJXg4duDQamHs9CsPfMMTFiR7KJkqEp3JMTNpZXFQLvF7vU75wcUR2KF5NCJ1dT7xbjdPv",
  "key26": "3g9jndqrLuDf3T8E3ijx8cStKdrUt2ZWMkq7uWZPJfaMi5Xr8W8a9gf2RwmWHLu1bVED6scToneZ8Mbjkxs7AJJ7",
  "key27": "4oZYkCsDTrJRK7VEtKhs5tYAJwzRBu4adZsbtQNbo17CkWQiSC5SySSRwfaUqZCuw43hLohBeyw4PssB2ARQCohx",
  "key28": "3o6mdmY4ky6AmVH81dnFikBkiX7NtKtrCdHQsv9fLGkUcuva29ocBiSA6z431McgKhhJNCwjGZrxwACazd73jPnf",
  "key29": "2AyHSwJht9LFCFTY69SWKnUQdx6vnRbdi4EqMQz4XJpGPPyBBsvd6ncZPJvvm8MD9v8e9S2QgWoTGHWtS63UtQRq",
  "key30": "2UYr7V7XoaiVHBWkxvsP9EdED7LCFd7QL9GARiduQzvjifnJnx5iQhuxnaHeZxwCio2VikyiwA1RVC8Tvkup1Lav",
  "key31": "3Btcj7waXSfWyqZXh3AiME8yvE8wwic9jnfrWTnj7ZnCBi8jUESpRVBLdTPtsCJDQucGP6cCiNz7FnzeEsBAtrvK",
  "key32": "3Jk49FBwQ2LshdtBp3gQjzt8vmcshFVKpQwwd3EWtagikYZVnbZvHAUN5LC3GtW5F6VNiUCbwLXAnFidkaUFBVte",
  "key33": "67Rs1pTJU79sxbBHC8usnyip4m9WWjAqUAgLuzf6pw6gWSdLHqKTLM6o5TSWRgFssLYKjgT25LEegTr2JQc5eCh4",
  "key34": "3SH2xfTi1E3a1ErgE3UrjpYftNVbjc7WtHjUyXWe2AZuNrgadbHhx9PpjKLi6AphSsvu4eWxukQd7ndcUVmz2WdQ",
  "key35": "5zTaNf4cyLR1UvbCD8WumRzQ8tF64Y6Z6CuDJi4he9ABEZqTjivLTqc4UGfZLjk9JLsuVJvDWebty3FvBKyfD7LA",
  "key36": "4MznrmazHbjm7fW3rBouZXfNuGpC9eMFfeppd9sNjBpjQBwR8KrfSPGMBmNBGY9YG4iGudfBR65Jdx7ww83TMRLL",
  "key37": "4aZWNJgNiqwUcATNrEUASx8Jh8kWSuiaRphdUxawMpefxkUDZnCfZTqGFRAq7Dj55wRgJSQEAXAvcMD1PCTFxxLs",
  "key38": "2rcZweQsXeDt4F33hzmXCPkdornirBbG9FwnFxrh3raxX4uBRvzHfxkS7fLXLQ2ewLd4igApaofsXBkonoXzMe6C",
  "key39": "2ytjwWL3sw3pH2k5dnxLcT3hf1rn8JVxr85jxz8B1LH5DAMBn5AbeMYyL6bpnmWj6eWwKuGnuGCCwsvNw9sjYozC",
  "key40": "4XkwXdVkqXU3BmgCgUBLqE4io6pKPsuVXVPpQFTUHo4hzotuwhzmryvCLjcDuRHbA2RVp2HWsgPoDbZcySPFYHjv",
  "key41": "xigfp4MmE92Qo8eRYq177CEtmdJwg1PX2q8YjADFbjB5afyvCrRKZPdZvPf3UgymYnJLF39SCfacCbqqwMGubLf",
  "key42": "41xPUgBWhDxgPZhVmo6n2tCc9jC2WUtwJUiaZecAQTU8A4zDSBGrzi2GkfD71v7jhgNF3KWxLaFVMjhiZzASaYCC"
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
