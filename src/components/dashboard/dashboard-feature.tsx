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
    "Fi9pKPj641UwjQJzbrg2B2tmUiZ6EfuR9J6hqPKVLTobMbDxWHiT8CZpuase6td4rnkpP3V4yKNzmna93hB5Rfk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZbXMkhsAPuNpHB46WAJJyeSexC2AAnTsBceDnhZQ2hzwWod2rYWWdrVLe5cw431H6aC96ocPbej4EVAAqbBmCNG",
  "key1": "21PwZVwiHn4vr3vEaUHHEuERcyYAoE14UTaTrTRED1vaTvDs4fmSVbQ8BR14vGEhCrPaYgUC3L491iAsXnMart6t",
  "key2": "2BByHmpCqMCNzZ9X8qa7P8t4N2GKRSFFuFRVsULrQ1jjXnUFBEpy88UdhrAjwsu8LyoW34tqixCeFX6iopMegXeC",
  "key3": "2jBM6Hb6qNXY54gaNXithPMXBjjT7YZ2NhEvaBYedLtzRDiJAcmHsyPXa89CAoHiNDP8F4zQAcDvFAUnX4JZLvwk",
  "key4": "2q7cendRZE2AgdR6A4NuiCsv2dsbU7MxnzoDYfMFi1xQs2GWSRiMLMU51iHbbP8gc193voD2WsojUxSbfLi94aVx",
  "key5": "6EmJcsUJHxDQADxdhHcfdb7TxQhULQ1nHKoJoLR5DdMxu6sVm67faWbTLsh6EEVmrVwfZmJ7hfSz9Pwn64V2s9S",
  "key6": "4irbzPcgtiPZhjR5FhPxJUYwFoBmGz3Bw1B8sPMYfyN4ojaCJcF2HQV2jCJtM7iEphfRZYwj3PjW5bMoXcPcCahz",
  "key7": "34xYVgk4vDmHLBYWvxN3oaoUEAVRQy35VvpDRwyvqw7g9DE9sp9Y4RHnszzsHXuMWGtDyTRirB99NbFevbcikEd4",
  "key8": "bA1TYK5Qar2PznVhto79GT8gBae2VFT3kTapCVZyfNcAXP9NtUfPBYrS1m5ZZBdatqWebv3rybHDpU7XUcmgDdT",
  "key9": "542hsvbQyZy21SHGDcXfGVhrgBepYxZjikDpXbJp3BHkUCJMwieuJcRWHf56n6b4zGziEMdiU3o3ySY4XDwqwkWZ",
  "key10": "BhZaJsfyS7Y2a6EZU78QPm5kKuKUz4jXJjMnPB9oxZHyPseJV95xdULejrozWZvGFYo3h6oscsmQjf3nLtVd4V1",
  "key11": "3yRHJZeht8GSBVYBGdvdgrzKDQd3EbqiZigxGgfLecASsoLqfruHKeQkxneRfz6cwSmAoQ74n9sBxWFLWknFL4rw",
  "key12": "2vsfguNgG1brn5AAxKDDCNn5hU8u6Nd5rhvtoG7QVadJRvvUQMzF3rExRpX3aw6Xuuou9PgAh9EsohhsSyLuqnPT",
  "key13": "5wiMW6LMKzyZfh1fUHTMkp7krtjwmAhqFwfysVkNZP8FamiVxzwwEuDPisdd7LZxJrxGM7VF8L6u3h28XbVaFaeY",
  "key14": "3pgGkVMxn3WazJuXs1qE1soYZHQ5om4BaQhq2Au7EhQ93BN1aF7XgHKESqf1Z36ioXHQ5BCksL5xYov53azsS5SK",
  "key15": "2qRDDej1Nsiux88ZkWZmfAUANoiX574u3Hy8ZcxcegpRrjfDFueVufjXpn6nVqcWPYKcpioG3Dg8WEgirCxSugyu",
  "key16": "5XLodVbo7B6aW6h6WCd5c3Abf3GW3KdgVX7YUnWsiwWaW5oYEGy89Yrm67dyMH9hkRvBhyQQucTAowwZCZH9yBAz",
  "key17": "3VYNz93kTKhUMEV4DqmECLWEB685X4etFoWDA8m1cXShgLpPy3QKVpDXYUUCfixTioXy8SPJWXeEWj6qhj5EGef",
  "key18": "4HqhNEHifuP7zTAWh3Nm93nLTkC7nSCJP8tWnSJgNs95YQpi6LhEbpt9joVHhRFGoEXwX5BBXmYEMm8QdUbP74Wn",
  "key19": "45Mr9u9WvdvWnu2YSPu12mvHAQbAtTnygM52YmeMH43qPMwKsC27YgXoYJfRucGcQyFf8z4s3hLKEtbVPW6Gb6hM",
  "key20": "3cDzrXynDHnyypwtfnLin6g89S1fBshjqRJ2bJx5TLwnrgjzaX1UrWnjonzNvZLAFxnfxB3ji8rzczAwRxsQJZGb",
  "key21": "5RDf9sFTeWWfNrC5QGFPugRq2WnKwi749y8gbckUDZwnAAdSJCv7ydNwsrsycaoBDVPySQA3K4eMuYaMzDVbUbLU",
  "key22": "2X1NL33qjpt8Jy8uzVKBZnZbCbxPPyMj9hQawyywUvHEmrLZTYVRcGog5UdXppPDzG7bWv9t4Ngesv3NkRTwS8PN",
  "key23": "5D5cTaoDutvV4i7rJteuz1DLoaovurAJYw6bUZRXJaA5xTjYeujGDDiA594QHgjqQV91v1uiFnJrAtcxELWXsyQY",
  "key24": "5aDVg1jaZ2snjwwahxCyjA6NEP54NWFeQ9v9cNiYb77c7EExEMzWf4Q6MfwC1rhAmorPRDGMkeY3Qwx6rZbm7Qw2",
  "key25": "127TdAoArpZYjGBFCsF1zSr2VSxBWjcaWbFc9AP84AXR2U5vPEkKHcGcdhZy1F9wJK2rDqVVwfSS5Zzvq6oc8f1f",
  "key26": "R5y1R6UVn87cfrArHf3BUpKmJihg4dSAepBuDSTBvKkfzAg7Tcxi7mQD53DZ3GKJobFfX5McTZKxj38f4ot6ghh",
  "key27": "3wGWACr1pE8zznrSohx3tkhWSTQuFMaiKkXaepfzG6256VzuC12oqLoJR82wgQvsWs5MCfAQ2SEm8ftyyzD1wAo7",
  "key28": "3uWCCTpQpP82sBsYZ9xqdVNHhDiF8rCL6A6JMiQdtFp4qYVTUzHVBX1nZXCVh1HU9gnXvvyQtMtbNekQ8kTEi2ud",
  "key29": "4ugHCS5VL1gF6Wve9uqfswc25ML4E5QyhcAymbZ6YQ2kLPnE96jJNorXxSwSj6gfnsjPQu66K6mtPg2U4rDpubSh",
  "key30": "3CiYdz1wQcb7moQw3KJRJP3VimaBAw94CbXc2KVtvMVN1TH4BWrdk5LYzHHA9Fxtuf5fDxN1UfzyN196pWBTwPyt",
  "key31": "5VqWiiiAmBifA8cNVt35ybcEgTFxkQ9qkhhec9MwvYask9tRMrDw1Vj34NnDmjQVwSQxBkxMaeLkt9ARuAFegCDK",
  "key32": "4a8i91bc8CgZHZNpSmbxUjAKuo9JjmYANFU88QUwcAGSsZjSaejCpE2iAazPWYQeSJ18MYquTYvoYqqEGvjThQkJ",
  "key33": "2iuGkU4tmn5FTKEB5giu76GW2kPyehGtmLCb6tQZwr31QWGVxLewwiTEGtdrUUzcJpEjwsf3sRfWmDDB2SHRDfJj",
  "key34": "3TiZ85Gyr5MFM32v7nYUbaRqsKPUxenEgdjhgApLgbuqPEGigN3rFvqttAPa8miHXVMs7TbrcqvyEnthPndsHrXv",
  "key35": "48Ec8ceatwQLdGuR1n2J9ZgwmQr6hjcwxTBMHDmQc2UKoKPMD4Wdr1u4fhKzXBqSp9MbcvK2f3GrSoFs1NeNnupq",
  "key36": "2LD4QV4481yvS3AtZUPGbW2v8yLA3DZ63DgsfLWoC3ZH1q5A1icffStYBbQZgwRJN4GJqVSnwNgGM8dXeRM69Xck"
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
