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
    "37Z3cuv1mEo9tCiCcdcKiogiuTxJkecPgWnFGTQPJ2rz31uUkSKkgLwJ2tCkj6ETyu2T6EqVaCRXZKRZkZDXMzb1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZSXCytfUMgvENVBd832i7FZdZL7mNmZ53eeGbeE4Xf25qBazheMrZ17PGYJpvTWBesTUS3jZBApEX1QGQuwLx1D",
  "key1": "3xSs1xDpvit3SXZ1eTVvBDKwP1HjZfzFaAjd1sXTGxBWMtMCZvyv1t6aN1TDH4RofByW6w7unYURnqzzJEovKS6A",
  "key2": "4AzgY5MJzgF8G1Fwtg351Lb5jsPQY9LyboCRim5hiUtFEYYTwcoibPhHP8PP3BnYmz8Ja9S7zfn1VhavbBbJUYgG",
  "key3": "y1FRgFkML1E6AD1WzmD6VWZMq6TrcpMVrvRbpg2SfzsQoqYD7KUd4qaos8KmGQLLpixYg1hUa4YHMEzg7eixD4S",
  "key4": "5FbNJSrK4Gr2UxHArTUV3YoCLX31EzkEjZVWSgrJRAsUD7iGnmeK85JzKoadfoMLiPL8dyxVbULyd2Bq1heC2eej",
  "key5": "bhmJj7QKCLCLAzZm6GgKxk9jVQmiy5gkAm68F1x9M8ddtr6W4fZ8cLZ25grc5thKWpZXFV1HF27ZF6vH9VZ22Kd",
  "key6": "4MQTuCGD2rvKCbHiNGUKCbT6UNS9bJ4bVLqZKAxx32Eo37TajSAKAKt7a2XQGu7av4SXwES6WHNnxzm9kxQJZNhw",
  "key7": "2NhXSy5XPo5QezxF5wxVjGFvNGnRzLctZTAJP9VTcEztmkfWvXZ9AAC3J75FazJVy5dN5p8MHQAzGaV9tcy3hYep",
  "key8": "4TAiGkTgwadYoo7Tz9fXH5PrkTFuzb5vkBAMkjSuWJAtiuYPDxc2ZQwPEb5yBjaX9DSvgHnumDG9yDbZsMKbRSPR",
  "key9": "4yeVejwAv9jssHntnR325Z4ncoaSZNJwxai5NhiUrVHWDXNG9rMWrJSUqHCZfi8iERKYhDYtwjzStSoRgbhoMMBm",
  "key10": "3nUgZqZZucmHrivDEYkR6PT4KhB9gBo1epHrdViAfV1wUmvGc4mt5yzG3dtK3K9WLUKU137ajq1CLFkZA2fBbcJG",
  "key11": "62yhgKtU5xRMxdnpvECHLk8qMPEoxMbSg4f3BSgoSZgDEqQhaxmtoT7om3SkxhTptiXoCcZ7gc5A7mLm91iU5PSM",
  "key12": "3WoaagMBdbUzgJo6AE3Tsm4MN1ZZCEXEhmgJsjYji6rV8Kgjc9pibHPmyBygYE3QKR4iFpmYBz6NnRPSfjNvvEys",
  "key13": "5dogquPnL8L6fmN4Q48F9yY6KviRvLCcXcpwXNyMTQgEZYmukGm1J41ucN3aubUxWiEruaKW2Uftk4YMpLxgaXck",
  "key14": "5XDwKi8p9fhwbzKCNZhdnDETZqRUbA2zw1hYJsRHM9dH5RpMQSZXbLc1M5fdpaiDiLZTx5zUzbbSG8nnV4ru3Pik",
  "key15": "5PbYfg7egLBaNrQB9JS6wm35hagtuKABmLHdFDoxBBcm5hfyTsgqX3NkCYFNv5ceoTWTeYP4ULKRhxzcNeRRB5cd",
  "key16": "5pDyqZPbqYtHipPTCULcriMxr6J4if5Gau5iaJxQwPi9Redv4NriWfrdbLa7mp4To87WUYKZaT2YPx6DhXT9BiTM",
  "key17": "BoPXAZ1BMGhj3dx5M4kzPi6Rjr7gSQYdiRYXRAnFA21GusQYSaYp2JXg44jzLXzpYRKgV8Gd3pdV6Dp8c3k9jrt",
  "key18": "yfjGKN1v6QeThDtCNKgsmDEpsrRr13nZcb4DVUBePrJTPUbQg9bWVQCPLWYeCxFN1b9jTU6cGHiBGTvBAUkNdDZ",
  "key19": "oaAc72Jv2Eo5Uqjru67dcTFFJoFK37RnZTRAzSyn2o9hbHRmxuwDDeQBfrj9JyWJiQpX51YDG8ywi6HhXCLisBC",
  "key20": "5H3AS3CZ65R8hCwT5fwZ4gRZDdLhBpSuc3bYsHNjqdjftUJ19494vje8uTynvvJZf8erw2JurHGjV3YSCBCDa8sK",
  "key21": "3sMYARA5zb3fV3od7ELcT4xSVVNbFqSzdojydwgirCwd4A3bbDxvVhQpGcieAMD8YHTq9WzwE5nVbndibmrqEMFJ",
  "key22": "341NQRryi3yUgrJCotofiX1VYGnntTBxcammqKsueSS7ZVDwhAtztobU8yzQCR132VzHTQJqCVDKvtrpmwsWrJSQ",
  "key23": "3Qiw5PDEjJCFSetcq5PYtkgStAsctAZrZsYFqYEPKYeKDRymK8cZTf2TiN2f9veMJSJqXnd3PyMCi5foLq2fGiN3",
  "key24": "28Bn2jSyUEavt5VvKyWrnuNQ6jsc5uzwcY1eKjjzBvHpvMmVT7b4DG4F7xb61xvXi9tq29UMtZkQxam8fqyFLdE7",
  "key25": "35Zude11sTJkaHh3M9nnux2KqeZCjqsdTgSzUY28Dcw8FvnHP83PYRkrM7397tPnpHqHddBXyQrvsGBZK11Yo1ZU",
  "key26": "3JkNX3ZJDjqiuPHpDLmP5eWUqFJvs43AyHUdFtnnVveMseVpmwjxh7mh33WazPxyt3RhX6NFkoRJqznV9CYNezh3",
  "key27": "2wtcwxSifN7dWwRarsPzyKYxk73k7HLqLNsVduYDq5wwUAqfQA8trBBtFeSwtEHsegZT7dt19iUxEkc4Z3mWgWMB",
  "key28": "EraYcpjPw7zAptfRyF8vcigxGjN1emaPnwL9KsfSH1c56DzjkyTQmajmEbXkPEfJHxjKNLxACmdKTLcmPxNBLxe",
  "key29": "3pm4TagQXQPMNrBjr92rUR5Q8yRGSRL2NKJRGDH7NjMzQAaF74bDxhJawdpAzk6W8GE4yD8Crv34wPKVkv4mb1Ti",
  "key30": "2d6uATEGXce3nDn1AqbZaLrGCpg5tBMx7oTB3YvhW9m7D3GJ1C8P6pDf25daNfmAYTdEjndeg6bGHfuFFU49PGTn",
  "key31": "3vtqEvF3vxTT7gYBCs9bEbfmADWTGoPRBswpFzZaj2RQ2if494NQpeuEJBUGXCTQUcQU5mpydcLT66mw7WJvrwBm",
  "key32": "r3LWAHk6bYCGxg9ppFdQSYrkjfRUNG6CWhrd47RUYwCbiZkm6LMHcYnfV4rMtnxiJhEbeQwEozS2NhGnX8nBwhn",
  "key33": "49aJDx8yHftLWMErzfg3kvj34zykJWUYWmT3DQu3PGasNeBdB4dCDZeNyzCPWixoRZaPzBToZrejUh2t31jKJnRD",
  "key34": "rAccSQFDM6UhjEM3jNe31JvQWRwt8tCJz5bCZ6VcFRhgQZpkwGVxV8qZE47hGV4sEiintw337DfKhJx9JavNrFs",
  "key35": "4aU4fUfFz5aBE19Fsbo4v8i6ZtC4Xn6DukdVndxqoH3vBfUf5UHa34HxaTbLUvy4C2dYa6rzJKbyKSmMo39JbKmn",
  "key36": "3eVc2WDqbQsyF4D3Qzo3fHobGq6e9ugsMp4jtR2VTEyipYdQ3LXA3TV2nRMomqKGQBxpsX9nPPtpQzTLzeGUzgyE",
  "key37": "3VNL1Azfg8M4M6vwF6vneDreY3ZxASz5fL98SBnPXi9q9ZeUELS9CCmGig3FnWAQKgPFJQ7EiVzgUhuFj6Rkn7aH",
  "key38": "2cPD5wsemNwfSXWb4nZcRL7Tu8JS9Hex3xaVGGseyxMFZtHHt1nNUKzpPo46ypvnw6wvsPspc9gjnK4NtGAHbSzU"
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
