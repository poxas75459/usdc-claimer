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
    "4eXc3zYzX63yqFg3GC4dQELhQLqHYWSmE2WU8JbyhsQ9dr6ZhX3JZJzGxphcht6qZ5cE869CTBNFd2MfjhK31aJ5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RR2crSqzc93QLYTN8Xz14wdUws2UJHJp1K5FSfKo8hsErA6van9AsczcX1et4HzMGZRVwy9gLbnKt6CvsQwbFf3",
  "key1": "28Bg77GLNqq3JKBPXi7ooGnjVR9nWdC8MLfkSoMmP8n3xiAeyVi32MWge7GZpbphWZkQfJRT2x5Mo7FcdGBEgHdS",
  "key2": "4L2u8Mzs48E8vgkyQwGGfm5nVZAF9wLKqpn4qjHt9GPM2TWciiNmQKK7Hr9C1xSshs9PR8C54er1JBNTCaXowt8J",
  "key3": "5Sr9AYRxkHeoiVkD6UmtvTXUouXzwk1yJU1mbQ4D2gMReQ73rW4AHV7LLuGJmA36Yig5Hf82W2XRd55bEfJWtqeN",
  "key4": "kkV3RsnGC1H5W1vLwWT5nW27ucbMA49jgBsXjU4z9CbtCxmZNkaUHkzeKSP9nP3YUMuvWRh37Ek6GtpfykzuyPp",
  "key5": "66H5B3JLjA3Gp49WBMVYv4uK81aN8p2BxUDAAzoqe7VM813ZtYUUro2uB38GJASRh3wK22BwSRcS6DppespZ1sSb",
  "key6": "AQW1dtPN1hMj5dMxSppF6paggggeoPsC1xfC1oYt9Jisg3ZA9tidUF9K11Je2NrCvq112KP1e3X7f2LkzBmcEyS",
  "key7": "qngMso6PscnVE4aJKTCLi2WfDVRRxaZryg9e3bVkJe3s6qvvJ8CGidNexYA2wT8B2RAYDrJfwQxoiXMFu85h9ge",
  "key8": "5jq9b7XYUKc4ZHociUMMcpqvmd9kHMeKcDFHNp638GoDVjHAB3tLzaYnvx6XaokpxSdogJDta6UyNNoHVE5jvvk5",
  "key9": "5Dq51FfW379RZTchyk9JyKdRTNE6CDjrrUrove6kwCHbDZPDcVMc3UuD1vAZhytJCotQufCx1X1dhvyjUnQsgCuv",
  "key10": "ACbNamtzmpTdgBXzr9Nu2fiK6WqXjPqUzcSvNH8DYmtT37WmVByyetmYKD9QgqoZ9nmMXmZ4P5TL4Nw57DgKT82",
  "key11": "3g1TmgHcVSxarSrfLbUZLKeXJ2wDixEV7Kf8BDSMSGJJbGuigaqTYt35HhF9zTsDtaabkVKvpor836VHsDQ5Kkhz",
  "key12": "51M3ZCn4irvLhYCxX3d6VQWFcoKkinXwfkiXjukt8TaHRYoEJTHWy3FBL1Nfwb4sQUVD9LZTVfZmG2ZV77mcXVV6",
  "key13": "5DQFYiVYvSmCMpJM4Cs5zxCM8FZvfDWuVbVwUim2hfKnXQrzvQakvJNfxjFNGVbe4oNDDz8MDs2GHETYkLZR87gY",
  "key14": "2xwkvvx35BPjVJNAUvUekKycBLeNcAK9bR8msbwdLHCpwAtp6rCMUknEqT5zQPJ6oqZy5vakyxSV2Qs8SgHVRsw2",
  "key15": "pou8Hb5PU7zaEhotQG4gqbUzo8wPtAZqP7VP4nTpHzVurbKqN3ENPCR17d3it3HGog4pWgGdKZE6gJC51hgtfzn",
  "key16": "5vM6ET8meAiRbo5SQZfCzSgN8X4voyuSqAbpysbHp7xS58n5vjCGvRVqjkzCaEp2Q7pZWyXbpc4eJLpGafY4Ce4A",
  "key17": "2XRYaVsVRBuCPqk6iqVJAq35uju7Pz7zA6bfCJFRug3QNLNdJC2K8JQGxGe98KTAB86sELZqRwFZbMxMH7XDWsye",
  "key18": "5RoDzDP3BsuXWPHs7p3dKzUfXRV9XPeDiF57vNkKowJUkqKALWWiTqxBRqsbXHVb6ShkoDR3G9Bze7tob5WCH39r",
  "key19": "4j5NeRxuYByn4C2AN7pUmWmFDpnVBQA5kD5NcBAJdzFTFjhgJrfvkuwUd4rYbiy1zd5aD2BqrGxF5J5cGEFFmbmn",
  "key20": "5NNyet2xX17b2FUM9g689P8fukr4xVeRY4TYAxbVQrMHZcfsrhFeem2e5C5uFZH4H94FzGLjTep5UbripPpDQUKj",
  "key21": "etgrue7BDArzowfdmN9UQwJV2MYxrbzc67gpXv35ijNkbYSiZwUu9pK9akTqQsSva5QrRLo9nMgRH5TkZG8vMAd",
  "key22": "WPaDNsM111ovqFfQeuuy7XctbJs8Jq93dEX6Dp212oxYJ6SLpnQioMWFdJ1fQvCGdQuRjcgUW1rmRmBQgowwExU",
  "key23": "5LSfN1qzpDbHdVv6hxdVr2cE34HDSV2FduZ8gyK6QZrfU24Ss3p8xKBJgMTcxSeb885bFqAazPvoNTGwJtFytrNU",
  "key24": "2t1qmySJR6RhnbQ3fYmfQwjMRETRBwETt1ba4TE8Yg65ssPEfEC2zUVycmqtBZLUQd49XKMEXTCiDKT7BzjYvi8",
  "key25": "5t5twprL4gTk2p544WRZgwkmeBSTF3eCCbSECzbE4rHU8cGUt2BrztrbSD2kX7EfVYQUyRvsVwrU5YyywdYxykxF",
  "key26": "48yBMgj7SejwRHqbynKEGCHE8hENBNQCmqhiKon56BtxCEKTcpZ3GTkQQuBtsv97k4j4EaEPWNpC5jvjtMUm5BxT",
  "key27": "L2bdcdew9QpRVjzu98mMKD6vK8AT5Ha7Vrx9CwPxsKHK49Gn2na65rPvvkxKfqQjCNLPePCyQ6r5tUgYycRdrxz",
  "key28": "2VZ3MiTegaNZGCRBnTBkBfkueYeoFme294gkS5vscVvARKMhTxdy3s328qhDeSBQ3sm8G2MVKVMjPpKt3EmSrcDX",
  "key29": "4SLn6jcWm2jPHT5CLNJq8uTBSMDYjDkkFDJA1vnR6Bq3pzRVfXbhbBJib66i1q3N5fWiCJnUeQbFT9mABeUNi5Lb",
  "key30": "3ifYCTdWZcjkqxHQTKYMNbeSruH6o7B3rYhntvY8MbLbwrdZUjqCcKtw7pfT6HzKFwy7BhyzmDB8EMZ8mjL2h9U",
  "key31": "4eSYYqsNJ7TUKJXULG7NxTWKXH8zUS64kU2fXms4ZuKSt4vd5uVwjeDUdX4ZoV4gjSjg2DWkkiqC5yzcEnXDnCpd",
  "key32": "2nRiDU25r5cox3Se3JmoxhYqFB6yDA2dwSFu3TXSJuo379guAsUEaw6x2aM1XHSk3nXxWeXNT1Z6whrwgvJWwdt6",
  "key33": "46RUQryCahZh6e5gWaujUgmo336z9XoeRG574gffkkb3XwULBc7RbEyAsbLtKtC96QEK1tKGVPnrgrBDjmkrzQCD",
  "key34": "5GhtHAFsb276dScCpuZ59pJeVfBbuzGKeUfdcBdK2ksSZvvfZEH2JPekDBRVgKqWrDrPaV8jJd2atwPZtbHWGb5V",
  "key35": "2cFfxvjYpcAyPBehsN2aK5LSRq3eURY5riK1RZoZQTouh1M6x2W5Qi62rxM7kvYGqbdKe6GuA67PYy631WeGPj3y",
  "key36": "3UhpwJVTHPtc4prXBtpWRg7q5SWhypZecsikT6QR5YzwPi4WVU5Ag3SXLxJmvaiz7BAXFzjp1C16gXtNSnHtUjwK"
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
