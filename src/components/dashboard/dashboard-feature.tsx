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
    "2X5iCRMuE42NsfgH5FfKMGYqvJLLwnbqi8812LiZMMFcP3LHNNkFLhZPRdt9fiTDEgcnfj5djk9bawJHbLwM4bFF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2REvktajjtY2Jq4Wexnkvo8YKHRcCr8kxwXYdKKCdiHw6G9kqxrw6axMKiCLtV1MozVWUFEQgQyiaB8ASuQyJnxP",
  "key1": "2utPpuJNmCVuuPX3WCtzwmG7ZoPzqnX5W2mLdZqfe9pUoEUnwHbgS23fk4itQfEEd8aUF7L5aE4q6szKJ1LfUqMB",
  "key2": "252E9DLtbFAisHRWPW9Ro7FvLqb5vjo69WWGYtt8WjUj6hBrGing7Up2yTEtbMf4oAzAW5iux4CEL6QVUnh2bqFX",
  "key3": "56u1Q3PqNvWdvmofn7KHnYpYyZzpNJWUWCdXFRWQKcvqdRmTWYJcWh6eAqkWMwzufuhCCzUDEP1SuVJuhpP8EC2M",
  "key4": "3oCZLMKJzE6iPR6axqH6LvKacSHA8QvdmQyZCR32iyzEdgEPTfYQFrLBjMuzAkta6EZ9WvCoAJUTzU78rGFC1hDW",
  "key5": "otcTZ4uGnd7qDSZvABUqXPCnCyBoMEkyrVhuswAvjG2KHUFWinuoQThsyuB2ihsyQJjygmeL7kZiGVvRwx8xZC7",
  "key6": "eDyHVDeB2D6qDuikevkiJDUXhn6TCTjrnzoJdNM5aM5uyJ2U6hPJSBJoseQC1E2HZYzQkSt64GVwyyheqwGzLSP",
  "key7": "R7a2uDVJbmZ5g5rwT4pQeYTwLs29fjMyM3wNfY2QGew6bTWUiTsQ6F1iVGihWdyQmsq3kxQrYdLy63k4FDh9gyC",
  "key8": "3wYxN5xVijq1HhAeTvrUU9v6hEGRK2Wgs3tpXL8v8BFQmGHi9SyPMa5i52asJrCNxsZU2mqh3tUPviTpufTEqGcx",
  "key9": "3VvRQFPR1rKLaXLrDUfXr7st2uv1Je6tWeEscxeJ6Z1FettmxH9Ldy2ETyhryxgkgU1wHR9V6bB8zsU8QJr8Nj3N",
  "key10": "hTLx3Lu2bGTjN3DoB5gJSqqPTdNXzz62HUg2XYPPM6H2hQ84MqVZDm1CCvvV3WDpyr3M8zrD7noqHdSNCKoPuiV",
  "key11": "2caduJskYyjPrmT6GNdvbh4mWjwobwqLrNv5TdLzAX3v4zCdyd495UeNRbUoHT5Rs9JaHYibNbx44VwShv6ftksa",
  "key12": "4EcBXb8iKC2G4NP58a9fbUwQjQcRUM3Z85CYL4nJUybfySYUB7wQXYbyFf9kcYKYRYEgRRzTnymL8SVVFrStfoth",
  "key13": "2RcsU1wXk6fD9Hri6UEW8NwFCFJUnQoufEj34LpbN5VAPyCxoSv8JPP1ScQyNJnCd3PVNiCQKc7vJWJhiLuFD23K",
  "key14": "jChin3kZ1VNxfM1tq1us8vVrLvqApP3UfSTj3ckwRubp3YWiha1LTBdKbv8vByPJytELxb4BN5f8mjrRdJ5wML3",
  "key15": "4mLpTcZ1SFqZmQPHnBiav3w87YPPouinZn2VbpP1fgESFqJP4sXR3iRQ8SzmX1pdMtLN7NAtJbstLPuTU5saAFDm",
  "key16": "996hBDr7Mgqh8wpRtyoo6KcRrgTUv6UFtGxzf4RiG4hBpGBJzvukjpHDMsctLCv8uaCcjFQxEARztskP4ob7SJ7",
  "key17": "3T2RDzD6HHMa8FV6a526B1nTiTVqbJijbyAZYmkoNaQfnx8KM8btHz9CdcFQydWm86c3r3vTNA7mLboR2TvhHhkn",
  "key18": "5zYBA1LuBvBBYGeATApmvQmv6yNq3VzNuTERN5EAJqQQixxJ6spgKNtWzvgyRCmo4MRN6CSFqm6E5ABDRR8duZkr",
  "key19": "517qh6WbZHNTAqfxYNRzx3n1j8x1MkPtnaS76NQE87dvKD7PNpgLvcnscf5NMZ2NujHKZ3hTgj5h5juA5zhhvXsC",
  "key20": "C6aWtgSDjS6wE79YwHwbg8nLz4buqPR4q2xyYVp4PzCTAzznfgUNL5UNvSiJke1sebcJSiZmqSfspaepgj2zNjA",
  "key21": "45hQjX4bJTKoq1oPXstfQxUSsJdJ52UhDTAnRaVF6ad6vvqDH5sVtr5UgGR8ypk9ywdGhjSrHGdubCm5mk5xMKqu",
  "key22": "5qN4f16e9cEtjxPZXijZdKcVyt7KVNTujtK1H74D5hWJfoXqL9HeRsLpYNfxgswE6f2oeP7hdkbEeDmUbt8N9km9",
  "key23": "35EcWcumuZiLFEPubp9T7C7R9dC1Ev15VFF76hCUbL9LFqYyuEATvV6qZsr9NGpmeKLpAxZ5A2aNUirHADXUPXQs",
  "key24": "4pycir3jD4zm2aqZMbdtfhxkCrLuXrxsTRuhJjPZNUnTKVqEXWqehaEQarViMMsvMNESmwDrCnTNsc6HjjcphhJW",
  "key25": "2hi9LjEpxN32uSvPTXZyGB2beDZi2UgsXTtvrB9RRjeFSnZMb8ugCF7gVNgotJmGXCkqmm35bsrSZD9txkhwRXxM",
  "key26": "573Jp9yDyXd6988fWnEhLVYWjd693h8TzQGaXnBB6QGSXiGf6NTNH7G3mQCQJSNHQTH7yS166dFXZD3VhfSGGH2v",
  "key27": "2izDbXi717cgVhZ57FazzbDdwZZ3M4GZeVBAgcKiEhZ7AnqzYesSz4MpBq2TezNgjs7rsxGNVewkpWCdcxxcrhde",
  "key28": "4y7Lu2ELUMfwZSpUpvVLkQWszyVNiJWKbts3NU7CVryZS6Ur2n3BTVQV9qX2TysM2Gots8A4S6S9mhZidawf7AiH",
  "key29": "5uU91YSG7yXRQUNGidxotEHL7gWyQ128a23Q9SeCtGebkNNR2Mjm7p9Wbppph5MK1Bus36jPYR9naYsNr34tTabe",
  "key30": "4upFDcbccopY8z123XQX4D7dedBvePMUjTB43wQiBmJqDMSGctbJA2awXuwbBWD1N8taBeZkCdFtKLWVXSGeUXnh",
  "key31": "2f5AL6ydyfoqhCYBwzSfSQoB6JVH3ubMRrDaM2BVxMitvP9uTGwftEu5rYZM3v9MjC6C1UoaNdEVhqWVbQEvEWUd",
  "key32": "58gdSx6VNLRb9pLH5Ux4ufvPmMh7yUH5EhmzbTpW3e278E9R1TRQ1KVyZqreCpca3m5sx9Xmzt7jBSKGeaSm6Mwz",
  "key33": "A9Nmdf55FJoM1HKQgb7qvxWHafHe5Xpgp1M5mM3NP6Vg7xg6zAaKz4pLu8KMH3W14YZpoEDwG871uMGVXLoQCQq",
  "key34": "4SL49xMWREf5PTxmh9ja9M7WVn9MGQwZVLUVVLEu7geFwvdgTeuDTxdPrsen9y4dyUrSspVhf1nW9xhubtwhfMVt",
  "key35": "2xWabp3Js8qsjrvWcsARWapsTtUMeRHQ62FPGnF7LaQYMnkuLeNgoSQx1mryneNwQ6rw28QN1A85tB3pyBNwv3Hi",
  "key36": "3iqQTZMTwhYXfewwZjCPmHmwv8aDtzhnfyjF3c8NgJBSSspoHBn2Em4WY34WHHauWP5SiMhTHq1JeXfM6LmLXo2L",
  "key37": "2RM5raogf49p7RhE8qbjAxsNzCV2rMgYDFzmKsow1ZTof96p1W4d8v7QhzsXrVCgcUEZMnTjW7uqtcrgRFaFeGwX",
  "key38": "5K6ML4oJrERiDBUJ4dW12GgkfY2yUnXrcymwjZh65EtHj3hfei9M9RUgWRaTLwZThGTVRV4MWEr8mh1RW63H6txt",
  "key39": "4sWABAfEo4yrRN8gpnrTvhdAm698Qec4y4wA2S4BrjU5V7pDTXPSKMZrvQdowK1PAhn5gSccNPyc1aiEhJjyWHf6"
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
