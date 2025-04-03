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
    "4kwpthPnn5kQNPYVn51aQB2fDJwuU7yJpfaURGzqTsdbCNrqhyzucHSip6EpotZEbgjbm7ZaZgwiyyrPMFiegtLg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PH9L2LfU7At17KxnjDg2ajesKxdEssRS8mdYuxfDXTzpT9Xsv1mQLtUubT9ZKUosaBAsTQoagqdcv9yzbVu5YnP",
  "key1": "3HycKQ3ukTwhA6RsdTjT5gw537qzh8EesdGvjANPET5yHmj3XqV5ka3mxLL1QauCrpJyNAusiQwwN8jXYhi2ckT7",
  "key2": "3VqZoYr6FpXdHoWgsgyiLAG3RiC8HBCSA9i7rQKKvVbJAUmezmWzTeDtg6bFjM72nJGyDo2pPK19Vt2SufUtWo1Y",
  "key3": "3frwzKMJEMpPBM8rM9LyCZcdgFQnx1paweyAAfmNW8b84TNUzoqGWTwy118nXNRYmaPLasK4uCqcXsecRniKEqnC",
  "key4": "29TZJuwEv7WHTX16eppaTyZkn1oEPhZhe71JZM9NYm62CJhCwMS4vkExJFMDKiRuHTSayjKiZtA2YSGijqRoecU6",
  "key5": "5oKyDniLv1Q5pa7tQPcC4fNpM1NHAnCyvMEN4kQqURnDV1wf16xZNpUa1Nw2M9iJLxBvQy71kJVT29cj6oZPvyPn",
  "key6": "4c7hTE4uEVmjAcuoBwsXUx7QBr1uLFeAPStrjbwyUq7293U6LWZyP5jpyy7pNZ2gANGTkgwyCgc564wRQTVrCb1v",
  "key7": "2SvnBktg3dcN1gMo7XCRgjLNDZQvQDNJX7wYjmXSfxpc7Ur4msAG2JfA2Kq3VKzZ4mfm7qf6zJynHafWiovTgHT",
  "key8": "56bU4JZwiqHHFBFzpXpQqmMTNtLuZXMaV3SvnLUM3D3wnai2CR3YUDM4tyr6Tm5oXRMwLwk3K8EHV7wW18pcgdMG",
  "key9": "PepqvoM5JUBiq5X8yeVtcwzxHzwiTtddfBV7PBgN1pFbG1vyEMqPFoeYf8GwA4BfsYM9Pyp6Gqb7xK4H7gRt7kD",
  "key10": "3aGWES6X4WtjXejcpLpQRTsfbVVx4TgVSDUhLftrrXbAA9iibKCUzX3ZPcTQrHtWrvzsMU6nXCWQctHSehJgAety",
  "key11": "4hGQ9BX8rM18egh4PedfoZ6BeQqrtDnjkUG7pXnASPopD8x9bAGUPYtmJRQEzXh8orn6EUuRgFzvBg3d6byhnzg7",
  "key12": "5rkPqefnGUCpEsWYVRnSYkAaeBFoR7XEof8FvJaWGDB2bXJ9E7Z2Jd7dhQ2zaJMg1xZeoEgQrU4LXwPxxuZwAzNG",
  "key13": "pCZ4tLQ1MkVwvP2Wt2ZERpucW9wRUXcatsvy7gRQ98dG1Qu7UGhme6nvw3keFK1JgjTbCi62uKtssm9TRTk4FxU",
  "key14": "3c3Z2AyF7EmrixNLEoehXbreTrrFyxAhGtxWeK9Kbey4r5pqTrH2yGQnydt5hGrDtBmGS6JYAsmV8VbnFPALynnt",
  "key15": "2kptiBxdrzVcDKyMCHtw1UFYR1V3TLAP9e6N1AT4h6sq19kvmkWmxDhY1PQZRXWQAD1XDSgN8prbVxgF8bMq8awj",
  "key16": "Voq172mmj2VbZqFBhJrWBztCBHoG1FJ29BQELjDq1GScP128sRfLwp2WwTbMFngDqk5hQF3S18nyDUx5o6cs953",
  "key17": "5CiAhqnyM4zAsrNEL9FLD6jBktqbmuzVLAroTiZt5nuZoVZwCjL4QyvBtQXfatuQ9XbFgs5CJsqyK5oSdfYnH2qH",
  "key18": "3oG1vP6KqAvFifX9pJmbEuhQhCbAmU4bWv1qNPtehFU8TPM8Bztmmpm3fjad2RjPSLaq919utAYJUax2i3nwDYQT",
  "key19": "27uRSNCVaosPt4PrkcsvMmQF6RbLmJHtQS6nBFHEsVwxukjAMttU9HxmtqXQdZgfNUhUVtN9tHgvQpMoKsiS8Yk6",
  "key20": "4XrK13TBHonH1jG8eJibLpUPPSyjYnPqLtKUwtZ4dRpbcuNguYYxasG3NDEYTntuGbuqdbFxRifRHfSjDKw9v16f",
  "key21": "2RyYD2kfMs6L1VASbjgATAm6N6aEhx2HWK9CsdkgGzotSZBpQnSPnpchBguJp7Z27Y61o3uw8WjLqgxLzbVVP7yo",
  "key22": "pX3ydqfNB1CspkUVyuKoCePUR6RcLCfkMTPbF7GZYj2XeGtLJkC52SyaaYM4UVNx1Y17PY88SNW9iTecChwcwVv",
  "key23": "5u9FyPA647H5nXA6JLheCeMX9yVzSn5vt2cV9mHZBcoVidNXugP8F8Hpub1jC7Xy8GcmSFAANS35Z8hZgJdjb9RB",
  "key24": "42C9gXHRMx42998EinPtBGvsE8XsU3ibX92e1UPZsSBSJUiAMJrU6NA4nJfkyY18qHyVjg3rRuJwNjreHRUEH6ae",
  "key25": "8SACEtboURHTYKxb7WT3hSeJJsKjCrmMZ9uvT83NqWNkzFFcr7fjLqDAJhrWuEDk8C5MQoWDWcLvisxo5EGE4Xd",
  "key26": "5MmC6QgNAxzFYtdkpCQBZ8GFddQzfkmL5BVgY6XfXxJ5RS71KkHX57SqnLtjNUXVAx4GE6HmZZbrYnVQhcDWPPXF",
  "key27": "4SYLUHDFhosD7PnRNAFJUJdPc6D1P3KmyY9zBTbRRy7bwiBdXPk6TJWEjbH5CSQUB4ou6hZPreTCLwtwEYrEVcYR",
  "key28": "5wsx68yCnVvHveg7WTcCQicefpDaQB7QA3F62hSSJfjsZSBixmyBcFQvWaZu9URFXiSjZwFxbNyJcHXh5XA8K1Eg",
  "key29": "5ZmdjjUdA4cXzqoqCUGvut12Sd199ashGZEaLRFMa4oaEqYtvFQMj91s97isWFgz6DsU32sF6A1ht3cf6iJZhEH6",
  "key30": "4Jkh9BtDptswFAMSbSkanWADnB1xB9UB9TydM3mP58uvydbecPvNfh8YDG3LzBVSABTc7HcWFt2wvKN2HBkTKThE",
  "key31": "2tdNUvaBzui7y989KAiE5HwqPPKNXDWS9yi6Jt7ssCyFmzdSqUFEK65w4Tme8e3ntadS5vJcCP89vxKg2BygJT6t",
  "key32": "4BVsL3kXMA5Y855wN7MSwrcTUXEJvDfYAVHca2etPn3uNLr19fYPVBh8W1r6gccWn6hUEATvpMaYCrzfkk26tKnv",
  "key33": "qZYUsaCcPbbuCnqEAq1cfNee6ZqyQ7H3jPomvY7XavqgNfQbWa7GKKzfV8eqUfb81usGyBymyMU1VVtYN9SZAJo",
  "key34": "QBpNoELE9XsjZqYS6br1hPFvtS7qppFujF2Wyc4LgPngQVhatQShnKU2kipN5tWiYPU8PcC58zmeUwzKN2yfT1U",
  "key35": "sqwUhkh7qcyrdVroSSJMPCPCb6B2njiDRVjhV8jJCNqhrbvS72UBSNfShxxJnYhs4UxkwgkAvsXFG1bc2JpP3Gy",
  "key36": "5LSbToWVxfXxNxXyQuxNYZMFyhFk3ZWaWmDeipy1GLZRUsxKEhKE7LFNNhwuhmZzJFk528iQq1sT6m2GDs2h1Xp7"
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
