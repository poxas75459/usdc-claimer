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
    "5DKTxQNa8WuyHbdgJXqb4WP6NDBX1D6QZ5WWSqoeMQ3D2dnWHmQDV5XFkC26Q6xfmjPiofbywMBwh2vvHW7NVpXy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PmJShMDMTXWHRjcy1uGhoDGVmN5wYqJxcMYmcT8p75e9gwztkaoz7v6fQJTJaZbURRcc7dS2e6UWHhxvy3ZzkFT",
  "key1": "76TwXjVW3LjPftkEkPhQ85b8GUdz8PA5HDRhico7j4mJwyZfepiQcjAtu9Vq6m4Ds4DvYJ46saViwUsVgLkhWVR",
  "key2": "3QHX2dNmiVmkhoggktFs6SNXBkNyFhXJuH5mWitEPuQF7QCcfFtwQv68aMnr5Ajs4z5TkAQHDkpG3vrfyL28LHxz",
  "key3": "U8avAVfd5ym6rTLy4zLdGfm8xGAKwgqp2ga1CcfmwFXRavwZFuCRWkPXeQwgQgsFbemFGvMaVj6oJpoHri3eZe4",
  "key4": "2nuZTQ3qBNEs8KREPJHeGYnax7WAiJS3tJSZqiLoNz3z8LcZWMuaoiJSVWFTo8tV88MaoqbgWtJWBxAq5ZUL1yfE",
  "key5": "3HA3VXFUneu2gnDWq1KeextEcY6h6XfUyYTxb2zomKTRosHCABzrDY7EDtvy2n5xdknHvua5xMundWNynqGKGp5",
  "key6": "3eG67bXjLGXCwiprHShQ6gmp8mVjMLZ8AQi4mLc3ba9zfgzj3Vfd4VfjT1iB6n5ykE7SKP5HKCdvX2MKrJQTSCBd",
  "key7": "3L3ZKbvtDg2eazf8tjVTNkWgTcJVzVYih96KWJh16c13qVytAckFryVW5HQUNjk4fmB7F3NvrWFxfQBiuWXFGCAZ",
  "key8": "4Dzixu548sX72m7ysrwEvCeSWbA1GeotAjSDKRuU4UzGQVksrUhouHpfePiKcfuHbXc3mQy1vtswUwuC9Ut7Le2N",
  "key9": "2Uh1uRGCoMFZ5cymuYkdh1yNAr379LZG3uKoEnJxMUAgArh1mETJSVt4DwCCDoeViCWdLxqB6XpiDqMDf5isQT4d",
  "key10": "2aV7Ab1qHHRhgTXbBZcJ4PvhfbG78NQG7kyj8L7RNYWKJLGc5u3apLV6yzHZghJr1kRFvUduFYtt3xMTUe6bkPu7",
  "key11": "3kAiV6ipUAKgTw8CgiNzFmm4BnixBNHWExm9t2J4feyMKYQUjNki1rzB6NvVvCrSV11JbBu2ztSfTo6WkB43ZNJf",
  "key12": "mfv5tcmxNqaW7CHfiVBtDST6iiVnXdzFNVwGe4bd4WSNSShZnzJ9Fn1YFu9yTXRVsohTy8JPZiFkWVR4ZNc5J1b",
  "key13": "53Te7nsQXqVFeYwMQjDbUmLfwMTYsAfcJWuLi654pFqKjQvQBzyR9cpHNqgiwsRpTZPUMdF55wm8PuPUfLUKniS",
  "key14": "2cQMwKMGVJvXQsJYcB3RLCmknudwoT3jdsw5ev1X5hUeaaWJwkKzqGcgSci4B3QrePwBuauJyDS3wvkvCASHL3Un",
  "key15": "S3yY8vJfM1QsLzZKT8P8LeCMpKjbivTpY4AhdU5a57BHvZtUBKfY3V1FoLVA9ExyaGSqwk8dqob3B2soAEoGJ4A",
  "key16": "TEPmUmJAMwDhiW2aJQdrguw4tnK2mZh6bgJtoDTdxCeYZikWaqdWhbr7a1VpFF9aBDAFFvzQUjL1z2Xed6rtrNr",
  "key17": "4FKN6eDt7j3KpZNvtfuZ22M1tJooE7pjJG972C6LpawGy8JKGyWYyJp34SgiWkFtJdfN6gAd5P3g9afhxr7EfoTM",
  "key18": "3ZYC9kPn9bb9LWZb2VeRRvTGREyuLgugNTXBD1a7qq2BvX5atykXJuZY4Mnvzfq7oN7gjG6JTgy6JHa7NHbxcyBi",
  "key19": "3PsvmoDjwSfXjJusQz7wDEeUQWbJvhcqh9jjGm8mNAt9fxAbdmcEUsT6mmSwuzPFvtmLDEYBJDmiQvTyEVTAYKNc",
  "key20": "5qTSBbrDnbsP1rsT3nc9AcgFmuGmB8EyQGQSe6Y6e6MBb2huBUidJFWq1Wcv2wDt6RRoWmkD8LiwU1UbdNGnVKf6",
  "key21": "2SxbJUGrBj97Pr4KS5g4VVT85a1mU4ZbweaX1MkPsxivGtDdwnM4M3YHoyAcFi1DwEfHACcfJ8L76bVZBQT3hDxK",
  "key22": "d71e7AshnRsmgmbZTcTBsYzPj8693wFSHaKMwNp8KU5UqHqhbK5jCGaz14jCUpBpX73Hbz3e6XVFDN97uMGNas7",
  "key23": "2WXiyUEjxkYfYyqPKeVJPwLoTwfEgiRNx9whdaFbuSXKHtAWfSryvH3YC2GxYXnz5Ckcy48MCx5xvFmgcmbrDHSV",
  "key24": "3dU3v4eTeJYKqnKUheAHriRPZWymzkXwRHbPuyZVeqNtREuXaJLbq5vM6QGropvKKuwtxRyzWF4yS8WgwMiCe8Pd",
  "key25": "5Zk2CwY4NWSqqqh5KnhwqVmsWNaTp9c45FSE1SG3soUjmVGZWDJgyP4rgf9T4CoNwVdD1uHe6JxkNUTJZ7TveLhs",
  "key26": "q6RrMbTRtnBGxuXpQ89VwpXF9ySxpLT1zT9yEqYptGDDBeJYPx93oFE7VKfGd2rhX5RGBZeikwvCEoJo4DKjWDH",
  "key27": "5CwPxcys4NFk8mkC2ZGtDf9Wv1ghWjoyuszpFoswEDHmiRxJGgziTnFjFTYf9u5PVuLczU7FkJiMkpeyVdLxdFYf",
  "key28": "aEtMcihSv3msRrN4MC4wAGxqNRYB8EY4BFATczXgLuV1VZkg3z6ANLxmEnKnLCMimdAmhSjPWkiEgkvmtnNkXKY",
  "key29": "2FEsM9m1EeK7AvjnhXHRhYEUq3AYgMc1C7Qwf4Q8V1Bg1Cu9jPyrGEannGLWLFmUg1kbTRs1jhgVSYsFGThpJfW1",
  "key30": "5uGAZBR3G1Cb9uRJrLHvEMqrEoLp9vXA1DYnYQgvVG5sWNtDc9ZaSpqxZ2cet8W1NaeuaJFoeKKeD3mPj6FmKo69",
  "key31": "33jar8sr9PDuL1ENGEDysHctyCU4QH5E8TyPhtSo7NGv6BmFzcREpryzbqRyC1g4UM81qLKtBNY1t1gw64yromzp",
  "key32": "4dvGLBdFwwqHjhzsf7t2ELfcBPw54gz2V2yHeEJd2dzmCTT3bp2k22MT4DoUkCHtmvMrX3d3uLnSWsT8RWwTNyVq",
  "key33": "Dn2ZE2U3SHofwn2Cs4VxZj1R3ec2h8BEy1ZhdMtBUZaCuJtoY2aANHBFgMVcb4Qkh1KH3bZFKE1PcBqUJaPgv91",
  "key34": "588HqSMAHytA1DFuxVzUGm2h63A4qnjLdsbhGdnVXBMfsZQ25TaXAX23w4PH4ijLfWC57nfjvuzePKbELJ4h2wSE",
  "key35": "28wetNRf1pcDHLAyebhBxo5PRQBD31j6ibuHTFqjrhFErfyMP21sm6Vvdve6bYcE9cPE99NvTtFRV1h7jsqXwBeV",
  "key36": "3RCdpzzg3he2rJitMXUc16pCg5BQYvjFZs3gRs9Uo25Mnes3gSXhMVF1i3vLHPb28H74pifcLf6eWYeSz6R32Yd9",
  "key37": "4EAqj2vgTm6p6sMVAvbribkwSwL2gwMC8KejgwkfBjNzyDWJ767EWraUbMCH7VK6oShmfXjPp8xsRc5FVBvtoAHT",
  "key38": "5KiQXycEUUBNLoyy53KsaaVXiAYQeVxKx9aLnHJkAfDxoNGvbGRadLMav3RJd7jEWpKR5Rf346xGMQtkgKHdpqRx"
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
