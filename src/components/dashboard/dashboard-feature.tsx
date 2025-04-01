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
    "gyaBaykx7Tk3wSS1nVXK2DBxeJ2QkwUoUB8w6d68DHMnEpaCmreesUhSLivGjJrwWUDoSX6q49XJek27xDpcELk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DWh53NP9a1B3Xbn4q325f2Car6kAwo6qyxbGDxAvSEf9sJ6oTXNsDxH1pWNUehMpQKD8Zofrif2HXEw9nndVGdR",
  "key1": "57sGzzTZaVRnwSJ8dDaBHRry4eFJqdu6ZZ7UBxAcZQKi9rwm4324EG79LsPUMcnDp5dQZxNvmqqVE1HVkDKw2hkg",
  "key2": "3nvdpgq7oLdyB3L9c2trjXHfvMtLatQbTfd1vq4cFmRptrqzDrttKCkotqwKMHS9vrJzFd8p5JhvgGB7jkyVwrTM",
  "key3": "313zVN3TKK2AC8F3zqzQKaHf2Wq9wQM1ysrjLehmsbRNX6bPyePE18y4t9crTFtXeVUq5D8nAAJ7naP4rhrx75bV",
  "key4": "39aSnQ63fa9ner9Ai2Qw6o6WphZ4twhxTsJAwd75c8ix2T1eAsrVVDK7wqt65msrJ2ehzXftJKwfDswCCyC6km1m",
  "key5": "3YmoyA41Ni2EWNEK96hNqHmMzAtTAnnHvxsAboCcRfGpycGpVQD61hXfNa8GaWS6uxdd15ZdSKgAkiotXsFX9qYf",
  "key6": "4YYDavmNwod3bZY64813gxcPS8bioWX2SV3u8eXvN6V2NSDDgSdtP4xDnhhQrWN3RBXi4mZGn3NuVKTV7TLHZFBn",
  "key7": "3qbaWH7gAEEJ6iG2zotbyy7jJSYHXbsddA9DaW1NkKvhDV1YZ43oozbAuyLH22NBqDpZ4Xvreevod8EFTw9f6x62",
  "key8": "2qF4wBoaD8zTRamjmbCkjv6SUpMDPUdcx8zg4ejuzpMqaWoCMpWRN3NzE1eD1erAGkpCPVorXo85joKdKWTdJgUK",
  "key9": "37Ddbmh4Zcc4LZBqpqZyrA3QwSBLEQwxdiq9zs2Qit5Qnm8rdh2JkNBV6vLjcKjtaQaSd5DWSTQ9ZK2QY3PYfy78",
  "key10": "4vzsv669k5Je2R98NucUaKd6NPuQGtUtGMd2BkzJS9KwYhK2gMGYKbJWftWSjAyBNbUbvmxNm59n9zUaRFxokHVY",
  "key11": "eWayyhNn3GDrVBMLn6pzF4inMuFJyZdTgrEY4vxSsa28x3etYzECyHx8KUjC7kK54ZP1RMGtkrqk4WxP51jUcT1",
  "key12": "5AcMihMmYh3fHC3J3y4fB1WcMEzvaBhZ3ooEeDVbRUcM9outAYaycapWdEo68dRwjoxw5CNGnLQRdJxDtmRhYinE",
  "key13": "5BA8PzejtZNymbDV5qURhXYnX7zG11h24rM174EGK8eHQU1T9cQo8kceXtQHvo1eUbrd2KQNA9WJGFkHjFncaTqt",
  "key14": "AiarxBjQP6zRF1CoprRPZN9x5cNSwhyJdNa96YdhgNk3BXDTQph1Y4uSX14panokeLJAC3SNVJenxXsrutkJeZr",
  "key15": "5ncUJuRLyoGVeDuJA38hXeDAP19BQ5Tc8RyvaBsph4SJCd4t5cFRv8rACcbexEeYEefwQ3K1b2sfUk3SSx1scL7R",
  "key16": "5vPtFP9iRxSsNpbXmwqPXpWvJsdjSvgSYywr1PjYrP1zPZVDaHBHTKRQFoTj9SSerA1vQbyQTEMpo21Cg1WuunEU",
  "key17": "5xeY9V6Zw2J4UEoWSNb5kRibV8RTEgCUEz5GimrffFYfFLjPwXiuYwjReeEMRi3qucxPEiVhu5ipDAz3oNapPjvU",
  "key18": "gjgfrZLKBsgLkx8NYWRtRfjShbXkAc5Wk3TBePS8vUToEJvWZdKPpkiVJkkMG1LaKBcHwt1oNsF19eKSJU6ovTq",
  "key19": "2qgosiAFR1L8bqYJAMz94DkbjUxqoryynq1GRqevipZgYyGa3nFE5TN6BdPfduEw7PHQCQsZJ9AoarfnmnYhgYJJ",
  "key20": "3yFqA493Wr4G8qgVVCvAXdikdQCqwhu1A1WHveJWBBQweuUa5pkCEuXPEXSj1bDhLY8hAf3NmuHxc5TsGqxVLvEW",
  "key21": "5yT23KJHUCoKMspjRHWfGT1HPYe8TS2bFAU8uqgtcqbJWzgXFUjKopNGWjfggKgRMvdT9zqL58XBKAjqqDFc8Grr",
  "key22": "3A28Tuu3Q3J7yWw5ZZ4QcbFVbZMMAKNCCLkfE3jBQ4Drwf3Mgo8uDBjKhvR2BnhxJCucNJ1LLcFpNWo93KM78VZy",
  "key23": "63iTzTeVwgNNgUSYXoKfJjAWXCwvJeCZ5xmcTE15eMWz5HQcAdpxaUnH2z5diYqT3aAEn7yPSuswskXguRts3uLD",
  "key24": "MZTCRov6TpBCLUGX3KCKiwqsr9DLtLzkZjyR6Ep8LuR8zRX6pFveTcbTvNdjJgfFQx4Ubx7Awu2NBzsdpEJsQzW",
  "key25": "2VDRwH4Jq2dtNc7bYKfLbiz4LehKG14Hu6BWpA7FdsBM2bMKUbu7Kc4y6TUuhxootbFXFb4QBN1tPXgHsn9eFbCS",
  "key26": "p8f4Xv1kgSGERNcYCpwGNywV7YkYw197u4ZMJT6c4UveoRqr5cmwhkVRvSVnwJyF5xTJvuX6bK9MxFpzvcV7rVr",
  "key27": "3GWS9zYm2hdZyhSyR9sZ62H6miGje9gWTbCgBoCrN8QmQk3uxUCe9Qn4pBfHWnc4UB4jDcGoLMvpVfJhTP73VVY9",
  "key28": "urBgbpacgeGMDV4AAsvLubEF3PRU7PwDo4iadKDZTM41hUvPEiN5S5LzFCVvq3g4JQvBjNE16W727oTnoqm6eA3",
  "key29": "2c58vAZyXfba9HR79YtidC1MjyVrDgvn7jVgqCcZGQSVeN5ACg6ZLh7rVrPSfSUZ6WkGjA24FHFmjPJFdw5rR1yZ",
  "key30": "gUakZDh2LwaNXCb5E5vRQpansujnvyVzPXw5uTNdMTTuthitEjQawXcneSCrqMn6k5mB7obNPrjQYPBHLQei9NJ",
  "key31": "3ZckRwv5nqyq6bgtzEuE2B5NQh8f7Rpu7oCN1ae4cXR5dmZ65s76xrf8sSq3zKcEKEjhKNzVYXc4dUUJhCHPS7it",
  "key32": "2TJQ1gHszmBoGbE4G9uxJVV9uay1eXifmW5tCo834R4ZmzFYSCSYNNDEzAauehUj65Mxmd69iaCGHFCMTKbYpTrP",
  "key33": "2iaHcwpC4LRbTtTQTRmT2VndW6sBo8RejiVhHekBqqjF6inT5Yj9yisa3ZdZAqDQy9D3z3gn3XGetdvM4x9zm6up",
  "key34": "2fHP183xuY9VYCDgF1VHDcuWWP9FTmp7Ggt2jDfiPDhsaLbhLXfXxHXXocx5XQ8cMkvCSsbE8cc9XYb8jLq2mgGR",
  "key35": "5EgqMGePATPVc4WwJYtx6Z2V6ECe2g2FDwb2KCBPwPydDMkjLt2nrczuCUP8k59QL5mmmuYcUj8KqjduQVznXs23",
  "key36": "2oYYp3jGjSqztegJSm6W7hnwA8qjJAUqu8wkYWE2AB5iwa3fhitFs62eS3Vyf4n1yPujYAqrEuiuVvRBrbN5Tonj",
  "key37": "gyLCUQR6odZn5AEJGBk8KobeiZeNtfQRb3sdiasAXLRuUkHA3RrBcv2XV9csQxp3f3Psj7MMdyVnCm9A58fHSB1",
  "key38": "2ByRxwNfLCCFnS7BGF2VD2r1dEfinY4q7NP3d3gdQtzYM8gTcEqZcTAZToiPXY73ZgabjVyKdiAtDDcAR6CfZba5"
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
