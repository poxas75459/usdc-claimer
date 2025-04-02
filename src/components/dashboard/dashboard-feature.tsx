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
    "NyNJsFkeMcuLm4vY3RKn5bNHQh7tiArL2GuwyM6xnbRFyKEmCaqN174iuPUd844waaRoBd2kTtsrT79BTznwd6w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Vp4rehewKznALF4efN7vQWuVtmcUz2Dz8P9w5oH7xgpqPmbM9nByw9EAHJVoY2FyLo6wkK6YUfFPXF5m7WLbgUU",
  "key1": "3d4qPiBjEST7WTx4SmFjdf6n9yqaQWTqg1a63mTuoJJuzqcw4nviJWxic82AN87m15awF4gPrCw9zZGHhr1Tm3uk",
  "key2": "2LhToaPHPiMuHSgh3du59BGajXSbw23yYNhq1mpw5VxeiRLrwe6MhjJdnqoTf9Xb8Te1UyhTPufm49Kt8TGwc3Mx",
  "key3": "TdcpVqKrzgEUpJ6dpFejRFNgbPYojSpDJsJNi5vRg2N76GRHNCBSJES3UAR6HeTjYyx6fwXcGCMYjREJj5TAoA7",
  "key4": "3zPxSPkNjqJUXPPmuca2ku4PjWWVmTK4LaKrjaxUkR29zXoqbBFYRJveFiYu5eEy6oK75MkRAu3sE6MBuMY8gCW9",
  "key5": "2YELXPPXnPTvwFjZYKujoAFmpr1rNBWC76m4nSoNN6pe52ncXCtfuyAPiyvSP7tGeXemthwMsZJ6riNtGdEQDWd7",
  "key6": "2V3EvaN382PaAfd4rfgpHGe5aBtWBatApxdXUsTbVoYPL6U39SmLspGFrhQSENCZvJVLE3DLm9dKutqjj6CUz2od",
  "key7": "k5PMFTbHw79UFYfCc4FkB4kBQvm5GCL9aYMGsFC916Q52rwsdwRGMR9NxSkcAgemUSSAvC5MctmKF6akuMVD648",
  "key8": "4bKQ5r8dYnQRN6NqA2GgQ5HofSkYQ98gVkgLHbxp7euiYKNkjkN1jvijcVXgkobbQNKT5aUDrxusMDJkKJUh1mh4",
  "key9": "Ny1bGYeSWvHMVPqTDtdwvrmYiSfK3fwaFMZVXhGVUzkchEwHT3iTH6h6FVen6PPr2fgEwJrTj5qABxG759nndfv",
  "key10": "WgfAPqYXiuFmurHwbCKGJaBPSXTE2QPgWQCX6qNepUUqRZ8PPPPUFYZ6hVpVNwirATXRkpXcrpRhshS2TZ7QUN5",
  "key11": "5cuLCQkk2aSQh5j4yCz6uirrxdRdhcKV9mtarHMQrYworzhAjEdy1iLhe3GS7QtbNodUYvccDRQcFbK4esFNaVSk",
  "key12": "4NYJ7xbL9X4BVFE7psmP9ifbknfgxRcvGSwr5pG62WceibRWijf2d5V2t5CnqURYdLdrnAM5uztrnHct88aqxdXo",
  "key13": "NqQu2dWwi1WieLKMiWwDQt2t1H81YrKi6v3RHfhKVVw9gewT9jHH6VTViq2UUhd62mHnAYe4G32xgnY4r6DPdFf",
  "key14": "5uWPkwFfy8rExvVahtobukaXmJJr5Mbu33bBvYsXta7xv8s1xtnEnBBpdnsMRok8SaGTCsjSJSPnmarmzqSxkSd5",
  "key15": "2Mn825kBWPg1cyG6cMGSeZ9YJnWrXH83sfwsP7RH5FpkaiyJAWmNj6QHrYtPqeBUyAQnW3a5g9ZpYNN1BQPwpG1z",
  "key16": "3yScS5WNv8QTKvPHcqkHDCh79n8zmnKo2S5u93679Tf7d8odePLxXeyULbq4PxtzZynmcsDzBomz6cCQgBkJEGi6",
  "key17": "2FjXd6PbftLbcixdxMcaPKempYQi9qjfRNHP4vcxifr3DBpEdCfjMPBYC5fzBs8xjfRzHQnU8wjF4zVD1wLENCqi",
  "key18": "3GT3GKAdSL5PZMc1GLGVQjisVvHhEx9ThSJwjozmxKZCTHQANsBGR3XVvL9VX3wfFDC66QQD4RLJ9VW1GSubKCkL",
  "key19": "4uS6DC4i3PqFKpP5cbnDMH5Lf6xnfguB8cTKVGz3QEAoyLHhNQcHMDcM8A8TjaSMQBnDHKFvwjDrekDyNs9tThov",
  "key20": "3kg5vRVJmKz8kFMQmnckVmYH5BaP5Di4oWRZ1z7uuo8r12BEk9wYkfYFWic8Vvhuc76iQx5b9TsvXgzAnqP4Y55G",
  "key21": "2p62U5feDrbNEBGaA7ifBCoQNuSukPFLubh7K91RgpWWWkBDoQwdeA7mXNVoUpfp5psopb4aanzNZLMwdEmMiYzz",
  "key22": "5AMbZGxdRoB3hiPj2GYWF6v2uqZdWEGtaJi72vjkV3SDwTZB99WhUNig8Ki7UZQbQaBHwEQ3oeTz71AKwdhcx3jt",
  "key23": "5UkWbqzC6HsxynzGaRV8HZgzDZpRBv1c1Lg9JXehUzGdDBsHxnJZgVqsPTUYEYEMQjVjK8beW4d4Wqm1P5NJcKSj",
  "key24": "3gxJXACGp52FgidhgLj77yEgfFAWDUK6Uh5cEHtemoPG33yGJ79JDk1oMBWHTwDcWzBkYp1y16VKefpFbNoaccfL",
  "key25": "2D4EECRuxV9y6kzQjtQ3e7GiG2yUJMrCXDVQWxmmv6miXjpggNv6FW3DwaCtJRBq2qDo8sYjNavg8vt8K6hPUFLG",
  "key26": "4nYAQmU7NvVaPWFooG3xymnMW3azVQXUVW4yy6kFRvvRmidbTD3qo8GscGuaRB4psPyeDdbvEBAZJHnhRS2VsJ4g",
  "key27": "2EYCqSdo4H7mpsU3SYENWLnzoocP2nrBnXeJkP1M5LjPR2kBX3EQE8rqmxSqiTupQvVvZGDpcR49FdEL3na1WpNG",
  "key28": "3wk8yRN1izmFQoMMsjGto23VNLLNdBmDNSc7yHzXiX6J3kXisUDWGM56Kz8ro7jmNqC9bx75aZDoh95jPCRqrTEz",
  "key29": "2DyNb93GqGPfeH8EwHHTxRTzy8UEFMANNo9wuM9ohbfuPoNQkDsKqZyhvP4G1W85Xjy1dtx4KP8MLAC8wyxoaULM",
  "key30": "2TzivoPgW2ZZGmVbsc5ELbcvQQuPTJpTmS5gL7L39GT2QCaQyWeFza3RvVFnAovW4XU1V8GxUWousrUE8TSgiCmJ",
  "key31": "62GcHudPa77xTjWLnXc9ciJAN72GQAJoxbSiwPGaY6NJhEEwMpqD1r57UvCCYWSaLAKheuyBPkpj4Sra3KdG3oqp",
  "key32": "3Jq279sBfLma9twtvviXUZvXWpABEyaVoyXCg9W56mQLEaGMiNkx2HvCCMDcwAWJnr9cVcaZEL4854beo8eMfnJc",
  "key33": "4J2hdpDf71Rb4kwtn7EYQFfqj2cS78kvdzaWRdT7Zen1HEjqmiHfJqUAnnWcwAHx9osgwRG4rUuJ1eWmEHqWWNpd",
  "key34": "ucwFhtSTWJRMxybFZq4fGSnLgRKZA9eVpd7kXeghjG7YuXtaQrM3nHPJAm8WRJTk7vwVeJ28SxZxn8k5w3pidxk",
  "key35": "4WGwgjHNWevJeisexNcuACpM67BMLDYoabBHJBZcmocKX26zw3rGZcfC3v7zsPTe2LMDGaHRoATpFua5QuEUbNwQ",
  "key36": "2Rjt7Jz8BnBnSBGb4dLGQEt64uhymBYreJAfd1jhCSNkN89DbKtfEqQW3bzaETUZXzExTX5CFciRRurub4wL9K73",
  "key37": "x6dLLVC8PAqDvSkgbbpiG8h92mSz2BJEPVycmPZuTgSwyxoPQqaJcF73fqDwwGRb9jeJ8myomixa3zkihZ4w6dS",
  "key38": "2F7jpSg9HsmPJu7A8JnjKA8m2gqCwYDqXj7GmrMsQqC5hzqeRvrUUaExv68Ck3kPgYtkBHqfeMDTbYWkG6piGHM6",
  "key39": "9Zy2XSJVQ5EyFvoArXoMehdk1JLR32TLoQ1iytebVUkNTibhw2dpB2h5XoH6zUfdZUE2QcMbbb77KGeDp2KjNxE"
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
