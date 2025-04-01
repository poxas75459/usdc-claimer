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
    "5UN5eJLij4W4MFDa9Qi4Qqv1gt2cf8z7ySLdJo7WLJz4swrkng3T6h2zuq2fatoz4KxpvuZ7Nc1XSWgnN4mrowpR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hdKTD6MQqtsroVxHZAXH7J7f6KpP54G22hNbZQCidNM75aVwinZASMxQ8zsoCYLjqB64UpSnsYatx8oybGgf1xH",
  "key1": "2DheVsj2QNSeuQYKX5anGGx2stjtQ3ooroEFZx4vMmTXMpUgJnMuookVyMVaaKTJ8xZ6hFuDFXcr9f8K27NYTUfN",
  "key2": "5Xh1m5edA1F22DujZ4jqSr8SyVxsTdqYz1Bj6SmPHdcEUwYSSYmF5NafLpHH8g5WcwFik7xoG23bQxhaGY4WAwc6",
  "key3": "YEHPAc1ew58SZxLgJh3zgBdbTr5PcUPz3UmqPTvcRAcWP3LpKB9P6ZKsMx3dTpCP7qSsGpLB4wR9WQvTwWwkYpZ",
  "key4": "5HuaTJUcEzeLhvvkytXaaAH6xTA4r2o4PodBC2Yd3JeDgxogjCA9sQySSMEDdFYP9ML3AKphcmREGSMFgKxKGSQG",
  "key5": "8aogjkwN86rfPk3QSPiaX7LMvaP9qhFdJrrvWLcXtCZyVWuHF7gBEEcdThFxLkUfn41Yked7hxEYdr12FUNEdy3",
  "key6": "3HU4tMuDvS5tJuhfmnZai2ABbudnghFXPTj2Hj8ZAzRngxKFp9Qxy9cKazHihZ5VRYaVyUQQuqhWLPbSXPt77sSV",
  "key7": "5teNfsCagyq8dti9CCKYADDPh4LSNKbcYa1gRBjBYAonT7SymBqtd11nGtfL9BueL7QRPvUByUvoBkqhUWrUFMNA",
  "key8": "9skH8cYGQUoVB9T4grvFLhqoM1gUWpMYP7yehMzNh1KscyeUR6cjdAqD377xmC5c7e13s7ao194ypDTT25Qicxk",
  "key9": "tRdwCbbgsDAMmj6emGzBchLv2dcFNAqmLoSNp8rLKrbT1gEy7JJGDM5NYvhU1Nf5qavVZjB5cz7txpLLNWp48RD",
  "key10": "4PyxaK1YQPNRNSwRqc9TUGb4oVtSHwL9vRVkhQ2ZPrCa1jXXRH4DUPvK1hTvFoFWZ9BDjV7qzvfHRaCEnm4VJUzu",
  "key11": "5vGhzAKe1ZtRcVLTZsH8CSrdzQTpnpmDDP1jXf82mqAzEZr3B98897F7QzEvoCwYNZD2zjyiLApM1MrP4kxNqFK",
  "key12": "3V3KyyGXrnoqY5mk5b1qfgwN3pPFBJkP9kdNZ75BJNFJRNimGdC1PYnLTq1u8Ddb3KBBnbzqrgDBprbYPbT19i1P",
  "key13": "2x1EVjHSmq3yyHshWpXqUhY7ijgZEeqC1gUU52WxyKCTKfu5YheSTvrschCdiqHxnXbpRLZYRW2nrJBpoTcBeGsH",
  "key14": "5uHfm1Dcvv6Aqns5rp5z13HoLb57dNsyfyemYYrqfSiLNPDtAARCBUWbGQC32SAdAh8RSa3fX8vR4uK6MKFYKZSu",
  "key15": "3cuCJi2tfMjjSB9tdLkiBpo2x9SAvfyD2jpasHSTi2U6AHmsLAmx2r4ovGazWv2pu11An1giUfB8Bu1aLbCbNsZE",
  "key16": "37NothEYW4iKLojA6F3qpsrQfDbxYhPwDcLJ5vy36PbCPhALmFJs64rdjhKbhqwymRG49A5zJeyX9djRDkLbPk8j",
  "key17": "4Knot5fB1FqYnY6wwvF8sDaP4JH81xpQMe6BuCCSLjxCrRzZeewy54UpMweyc5xrFfGVquKUMF59ugQiYWz3jjpS",
  "key18": "5mZBZopS41CX3GXQf68mMTUfoZ82A5KYSX8mADdA3VtfnfoVLjNf8ANgoX2YjFyKEiZLKj4PPuysA2FQdGi1Ed3s",
  "key19": "7B5hbtxZ36bhAYaWfJJQn9JJEdTdoKFRZggaFgGgrACsJPiCYz459isZ6aUZP4Qn8cTfr7D4NPPFHB1hPWAdmkP",
  "key20": "3LYYmNuH3upq3PQZFiNp7SQndoPrYq935ZjwbFefG2onwv7iAXDNxm5UAJrh6Qb37U3WvXaHVJsaxdRWmyf1z4Hs",
  "key21": "3Jrs1TqN2rtz6KXt8CYweLRc8EL8iGH2MVqRauzL6PY1AynPjz82L2Skx2cgwvUW1LXkCEE6JKNdTGYDc46QAzxr",
  "key22": "4Lc8rtzmeZaN2fdMNBFwPa4HtzNw9ENWUJYxsRVs9GSCGrYCddfehU98cmzK9PFYu8EtiXo3uKp9PS4eXzTLin4N",
  "key23": "21Mx6XkMmKvDHgxz8CjbRJ2qcHQiitVTPVcGQqRyRsvrhS9dgnBcpVzcxPjQKkULnu4u4DTW6cvkjFPJbJUzpGNt",
  "key24": "2911QuEUKULZqvVy1Gohqrwz8JjdxbGWmvUQv82AyF2KWf9YrkMtQbvzZ5JenYjYmR9NgYi8Qa9C3wPR4EZCCEUT",
  "key25": "3JZrcW1VFWAgySHR438HryK3ZdMdBz6Bo3iWAgwBMpv4SSnf58HL7vR5ZaMNRccAYEaHWDys8FkLnB4SMLMKQ7Un",
  "key26": "5Fj9bomrcsoJhMjKow4F8Nc7qEyotV6DBoineYkU2vSD8M6b3S63k57MEEGsyghXyGsCk3SLaXBmqFTURZyqzTr2",
  "key27": "4Aon3xTzvTwBCMwd4YBgc3ZCPeUNAXZnJ61wQkPex8kXZsCT7UysDXiEkteLDDzjQkBkn7M9WuMcn9D4jp1YYU7Q",
  "key28": "4aDjczi5x2AcvgMDDe4wkH9jpc2MwwH1FrGYnPzGpWNNzzhYhK9eGxetLtoDtv4Zsu4hmWB8x8CzaH6skH8MPjeB",
  "key29": "2yK3QaVLyfAx9VGbTUu31pGkmfnrWGv5HNadXUHGPqYHAhVK4bz2cKnYLNmbviJi9fDQwVyfNVcWBP1ekmiGQ3w7",
  "key30": "2rpFgBwMdSQCrt4bYpbg3sm3Vc64XafDe5aQjCsyukbPoQwuypyPdBHcuivNy2gAKKDEtmthkyLJNikhkqoSykxg",
  "key31": "2tswNsSDtYnWv7z4nELioNwi8UpJAJyxPuL1sYVenqo53xPbamsPMj5fPJT4s2RgHwfxBgZ3U287eJ8q5NEDM2iZ",
  "key32": "2enB2pJLQh5Uz3GfceymG2CJkkqvSXAFpYBn3oJG6Nb9v541ohx6dX5g1hxnTyhx2uMmHhrJrbhxQpUWQ63k6K1p",
  "key33": "2FKnQvKsn3v7eqaaHaJPfLs5EMjF2CZoJu7mMHsqTBHZmLzTNXirWEZYtvHvaDXeyUHPRqHyPkgPDBjYpAzkLBKB",
  "key34": "5FiT2kW8seBAssaSNwYNHX8YL4ghRcf9vVRR1U5q1So2MfpGpVMfSqExbRQTZJZ7XvsdwakCPLD8JQXhEgE613NK",
  "key35": "xEaQjL6MuqK3UogutMCB7J2yEGeapqn8LniGi5jV6hcSFzdz4mGtCLvg9EiJ3rv4z12JUydiSWxdLUYumM7BQ1G",
  "key36": "iW3zeJ9tHxJ1etBihAhawkmwgtGSokpNeC8SfR174SGm3PgEgz27m1ok2Qj9Rn86X1YioJHTWLbrchceuS9gWpV",
  "key37": "4iAMep4HtTEFR2HxpgfH3gzeuRZDcK7XreLqQ7fz5Qt3M6uUiRmDnreRxKow9Envvh6GAVDroqT1tEAF8VntogTR",
  "key38": "47xur4kYcwxudSWJ4gT2FGaooMuxW4rpWne8KSnEvDTB5arkZqzDS4PhorZbbSBjBgQ9JjwVyRDzzjmiPQGAC8Wi"
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
