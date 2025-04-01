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
    "2TD8QJXe3DwesufYQtoiz8QBkncj5J3Kh4z32i6q1HEz7BEUwqUfp2mA7QEnxyq1dFxPhrBThZdnM2zrBW2vSo5Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KdsLdpgtyoSfyfabK953w8jZ3U6rM9aBuLRZ48ojK7mRuvxsCjthzPy4G3Lqnhc4g3VehhgiWd3oRdNV2xh6rQy",
  "key1": "JLkXrYk8SBGzJpbC1Wv3oEWXU3b7KkBKWxcfDysWu1oe5DsERZ3ejxQkNKSbxi5E1UUcsXaChNN3k3jwSwWrMr2",
  "key2": "43nU9gaWFMhddmmoybj5nzjK9RmQLzYkXK9MFYKPLFyUBtqY3rUJEAQh5mpyH9x5JmMhnro8GGZcoVF6sGMBekEQ",
  "key3": "2TxE8eQAJFGQuMuRzw68WSUFvxvoMz85GV1gwUjYasBFAukQsiMmKVx7xMpM9k7t2fRkCo9o6gcwstRpL77N7a1R",
  "key4": "2YfFo3uJgPaR6QPtmKFuqTow4FhVy6gqNRqALocKGrDa42DvebNAJYYtSahqhBoC5JvHoP6EHBNETHd7ehaER9Zm",
  "key5": "3J5G3BqmwHsa5As7BSsdV8Rqom5T9Euuuq5et1C4ZvupnrUR6qtjFNkGkUfrKnoXXQ6cy3KEASVvd4bcwarNSR2x",
  "key6": "3xhp1aqiAYwwx5NxXyBoGmDrou2Xs7ESrtwpe1XeP8zTbze8ThLZrREjaoUcn5EyXEE82rgb6cXXJptRxUDYh3ny",
  "key7": "4fX8C8iMK8iEFyrQq3qxi7rBXSs47z9YfW1KfP9tdDb8cNJTgmjF89pdGvRaeFGMwR84c1RGHnEcn1b9PMeS3pJE",
  "key8": "3e2fg1drWfratMdMCVdrWhwGAzUKsmmFPykXMqeizMZNNKuP8BFGpnLPbLQ817jSRYJNqYd4bASAZqZHtJgw1pFi",
  "key9": "Y1giSZ8Uudvz4bD7LoZZUARAebvEnse2CNf8PPfxUshRtMrEvuMpBApEJfoG6JQVqiNv4ksSRbsz65PBX7ErmJk",
  "key10": "2VU6H8SPGNMJ8SCqqfy1UtwpRgVo7iMBhhysnojbDAdNK7eaqPCyewWijNGqjzUAcGvX3Z5HWowJxhVCzESWPFwf",
  "key11": "2MbQnJ12Q8hmq5GxXtP2EmAd9Q1KaWXaafysch791f4BVhBLSUTQWWQmmcY178WjywFt6TisH2JJJy6jGGrSVZTa",
  "key12": "nXJZUhiH1vMRkrfH9ycMQFapNDjgJ1h5HKpAv22sXXAeTwPDeff2JBfaW7Q5HgGDunCPmcLGa7uH5DVZwQr7mHw",
  "key13": "5WpQMaEDGfaE8jHGVMinwHxv6EZU9ZLC3iMhYho4qKv1xuUxHSVRNAWtWMev2Ro9e7jLN6pGYRtBZNEoKygjsukt",
  "key14": "4t3HC1pzfcZ2rCqMvSsSm4J9m3YwpQnsptnNDivp2YTrAEKJMgXz3e7n8edNfB9e3R3ey2L2V6FVRSGLjfJtLUVe",
  "key15": "c9g6cv14YMRisBHAfZtQ1PwoqNRygfWsMisTaoz13f4zdng2EypyMSdaJhCLRTGaU2xsuBXzzU4g3WRx5FQGhEW",
  "key16": "3LQ9GrSqFRhKpZB5w3wDoAp53u84r5qumQmTYTgmDRzCZfwzG4asq3W2NY9rPiYXDbrH6ai7dVabsaKCT4fRRm8X",
  "key17": "5ZjYTyAougzERjPtxSXcAFU6LsKEfCt6ZVTXArdZVyyB9HFCVuTtujwum4PbdmevQnDi4KbPJvoqKSvh6rV3NgXB",
  "key18": "5tMqPQ1nPDTqDYwSrguweZ2YZn9sw2bkJCX3QfFCMPVgCChig4Pqrgp4CXz4aqdKaqN8wkFbv2BxNfbv352MdDS5",
  "key19": "scu5eLwm4CYv95K2KDa7xak4eqTRy65jx1LY5M7wGjUM2YBgUf8dSfrLXPqHiDKUEktaiPyv6Z7oQtYFwMGV5Km",
  "key20": "4AEpb5LqKxvXaaSubVaHpbPtAMNUZrZSPt7ZxCcyiT26KSc8U4z3uRYo4Uk7wJbgEjrpiMiHH5CQPqvgJyddcUYF",
  "key21": "651JaFAF3WYB8izxJdKL3jvPtWdE4NRos4QgGG6PN7hYjWgHmUqwDbDKU7pjeQXzwQbEuUcLiBNoz1t6RUtwtbd8",
  "key22": "67jbdbiqmAxL8XhhSEQvzvHKpgbfSn6ycSynrm67hgm79sKTwB39dUVJosjKUSBVYZdYJWX9zFncwCVHwmEKrRF4",
  "key23": "5sCMcZMYVYJAu3vaw8kRyznFua2Jw4G15vJ1t7j4WZ2sCzuHHMprXMAkg2jFXTLMYPyyPp1UKmmDYYrVL5twuD2B",
  "key24": "2PnASvtkCY4JzwP6SayR8rgGxXa5TpSdrcjQuQYU5pCdmyjQ3BFamiScHvEusuW7E17LMBCBihPRw8BDHnYFhwxA",
  "key25": "5EKviMVGdNWxgv5V6tKmCLnrHC3xvdd3eiiDX1jDwg6HqP4C4rEeUr41zoDMhZYzhFKz4MmVTn7LWoRG2G9yYyHo",
  "key26": "5zYBvdxycDfr9g6hYFtXnTjReQLtfVNHnburBrqcagGun71UQekNSVuEwiGNJjmHCHHmhr4vSF1KjjJf353aNkqt",
  "key27": "4zBWFxRWP81psTsi61uxiy6mKGF2hfvLgfPub5EKVxto7PQpFkVf9GMPUTaHn3Q6LWQtSS2EdvBsFsmsZcFsK4ux",
  "key28": "2veAsjEEj3VgK3uPt9Ew8dB48bnYbuHvBpSUK2PPQqWy8LQXX9imitJ34ABj4e6tZKWau2Fb9xSAop1b7AzfDZF6",
  "key29": "4vqV3q4JSMpLWHYmKX3PeC4YsdyrsyYWQcSrS5kBm2H9eUDsUbYXZsmjbkxe2dLTQCydaRAPHAicyNxhDhouQvEh",
  "key30": "2CL6kHL6sFYKhfmgHmkDoyHDwMmYKJyUoFjFQi9NtStgRfGyaFGCCcUvaPBfMfjRgwSEhzhtQQxJr13tj89ZK9Gq",
  "key31": "5HjQ66SwjzCUaq2zVexbweChRy2LSLN2hcUrH4JuPCaPWYav8pur2GyTMsnLaDgapHwTRkgyGhYtppiNWzCtR6uk",
  "key32": "3psK37UXnSVqMu6k2m2GNN95EBVmkfCfzfpzYytkroJBFJSVcx9kZAqKmC2LaYEqae6xCggb4fF3UiY6bgCJuPy8",
  "key33": "2Fc7bVfgoZLLkTmRpAJY596o7foKFxvQzTELqGahaonZK4gYy72JXTS1CWWoHfUdr16PxgJvCPTXA5D1cB7f3xdm",
  "key34": "3UpKGPgRGsm74Jz1D1z1HuKFinpXLimGDGsCfXj5TUy5DBRSkvN1tS9KxzGkkgckx24kktPMDoGbvnnaf38cJhSc",
  "key35": "3XNfSE5FBQYKzsxGK5WqgTMToNWFt3q9pkhouhAbHaQc6u2hndFk2p9rNV5ceXXTjJJs1eJHPJ5VCSDaCtU6HD1v",
  "key36": "3BGrqPeR9Tz7KpjAps8P2d6tQXEs46NtSmL9zeFURXV3bGDNPcBQMR54aHwhp7THwH1J4yJroYjLUodxXheh8DoC",
  "key37": "3MjHLu7wsTbmEVCey2dTaJUUeusxQAksNXbmCDYW5EUnPD9tcYiGkEibxmRMRwfobrc7TTkFDAnGW1EoPNbEG2o5",
  "key38": "36Z5tPvWg9rHkKih8n2ipPgzNCrejN6e9zmuoSPNQ7uUiR6FNYnxVggt6SMBgCPjmNwnnt7FC185V8ET6e1kS3QK",
  "key39": "3R6QEo18duQPTR5j5qedABUjN4pNZH4J15cYkq9MYmjXro84wSWcCqaEWuVwv8mrbg6AJP1KudMHdpu1u9Kw3iB6",
  "key40": "5puAzSS7fnYsu9WZ5qoKnoxmkajfdD9rCuzNBhcf7EHeDyVaKCatUEzjjCWz8Vtf55kzMrjmTRGoVzksDPARtLCK",
  "key41": "39X2Zwz9YFfnrFBJhnsesuYunVkAiAdhpGWaWJZPq3qeTJkHiq8bmD2d1ntXLzMvKPUdV1EtwSkrTDDGaNUFAJFv"
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
