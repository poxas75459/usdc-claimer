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
    "66pT7pwRQ48f3mEqaKtD4LbDYq4xfCGSQ4q5rw653aqXMta1XcejpKMdCzGbnwB2pjXepe3Tj4n33D1xK9YUiBVi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5s8nurHwtAnt2Ujus55vwZpWpJUwZfDS4K8G1CJYjoYDxNa51ftzG6fCHYGvxLPpPvC8BPg7aCCjjnyeNh3NzD7T",
  "key1": "5wCTytfk37G5x5xz1fumGjivgWFFU2cCXeHWCD57d5WfrEbMcjtzwdSZzbCkjzfoh29MP9js8fK9E6e6JmjSrGFo",
  "key2": "2CcAxBR2Jgh5DsRh2bq75aEfwMNv7wAv39cvCyY3itC4rH9Ln1Dn4nGM3SPw7uxnEwBEt7tHVVtyNEpFXVm9TUdw",
  "key3": "2CD1xAwKdRf79B4gALx9nFS2KgfgqRFgTzSyg5HMAiGFnRt4H4WpMW7WhWFwxq8MS2H6uzqDMF7KSwZWQxxzHci8",
  "key4": "32QieHUJ4PGSSehprzQpcbNEn7ihJWZHvrd7sJfpMbrkB7pDRZjPDjtP1HXCgyRAnKnES8YsHtrU6gNA9De7pHbq",
  "key5": "2VRoRx49HHmV5rNphmNGpyoKStnEarEZXgv5mTWTN27thCtvAnfo1CXLo1Bzo7sNCZDeZLexb8jZ1j5f8MKGs3Ck",
  "key6": "2nAr3jFEKbziN2ZzxSti1TJcm79vPcYw6o94Pxpy9qkRStXv155R1Jq99gSsY5yVdqqCGJTqtG4vVyfpJfdYRgQX",
  "key7": "4RanZrJ7XDDZs9dqLZvTtQHH1fdDoPTvN6vNqsMkgHd69ksvnWJVBTdvjuUkEzMaFUSc6u269csytGEiGVxEtWAN",
  "key8": "2FkdmfxNMKePXLbix2HV7k6LBFVb3B1RjaqNdJ1So5D2izQFXkv2AgbKQ6Ygf5dtPUgsDeGwR3cQgsrYgazvoeDc",
  "key9": "29tMUC4wCKfXhiCq8dHdxqTBxpMQDntchmb4Fkfn4MeJfSqtwp2uECKzDjp1uKRrKYzzCqGMrPb72km7wh9SkJXt",
  "key10": "2yvRMLPJo6ZJVe7Jthto9mCMqQEafDPEpRddf3kxjVXThnXS8Dzd3VjJDuFo3HnWK9e2uNBhXZr1emSbbTTUoHdv",
  "key11": "3QaQxPjMEzATQ4X7958q2iau22VsCaCbybgzEPG7wrEqpokuXmmvj36rFro95JrWB6skqmcZ6BMQ9FQuwBX6xZ5B",
  "key12": "2TFqcntZcRrkQTHpLxHDhfhXVLFs3a3iUkQNsWrh3DMijQqti4xv6GpTqgJjJt8YPvAY26uDNrGiW8ZXURLosTUY",
  "key13": "2UJqAxp3uUX7NRKAegNYSN5sBkYeoDRJVSEQPREZAYaH6jvARHjdpzVNLMPEgo3vT46uDz7UaKKNEJgM4qD7My2w",
  "key14": "ytZVwWzsFDnmCCZpLBg5sPME9oRrw7WS8TbYucodUAS7Yt8p5R927Miix6cGoWwXgHGERtGDezXuzjTK7ZrZRMb",
  "key15": "43hjRoAYDgWCufCsLqXK7YcGCTWMn4H1Mqa7pThMNdYnBaqKf3sJ4srG9NBLXqATpt5PpC9YmoLjP6GKKVMaDHyN",
  "key16": "czs6mjqnuzkFwdCyGAJyHgEEPnyPZGW4XhaPyfWbN4PsSVieczWaayYrURwKPDTzXk32xT3k8q9zhFyvzeJznmK",
  "key17": "csENK1xytbKrZ9jd3uD2XJGH7yXDwnrAouedTxVvHorpNT38L7UdTU8LvNzV5ucXHrEJeFJQx95wxPM1jjoimgW",
  "key18": "5f8EvznqRn8vBWXwQNdY4FUf5YioDddQVFtUuqazXzzAnWBAfEsneGrPyw6Yr3LajUnDF6ARXhcL7uaQh2NQAb1z",
  "key19": "2dyiKR1o94mAiUSNMxpMN5nYdGq2TBYaENjPFU8oiMtikndbj67WT4qEJpApjNbtRXDVadk5FgDftcZhaCa5UpLm",
  "key20": "fsgUfinwx9i95DMDt9yKEXbeDPHoBEGikGH5hqBss5agNmmq8hfne3ZAWB2bYzCgyQuxUE38Y1Zc4MYGD4mXeoA",
  "key21": "2hYJ7RHXnGTLUEdnTM75GfrUx5eBSWFJ9Lwp4z47fBJSu1Zf4fCbxMU4Zp8ArJMDYeXWBsZhU6CSAZNmP1SXXw5G",
  "key22": "2W4gpcuqzjnGp5XtQGdZL791Y5zTfMXeHNySFZy5wE8wzBbdACPg9ZGTqqfmohHqGKR2jvTubRH5NydPRUpsvU1k",
  "key23": "skEDygqkKbmmQjrP524qw9LNDPyVe9LpJJRoYMKoiJJKnbroUArUgEwFKs5i2N7Urb2UuR4a2sunacnbFchKxAe",
  "key24": "56MYa8zpJwtUrMysj3SaJtsgLUGQqruS1y183XGZU9PkxhGgv6ssS83KJLviPmNCp7aPmcishy1hBZwaLUdrTG9n",
  "key25": "5xziFi92orEMAnJMyScgTdVkUn17NaqTBK5QQZgkU5iTdmckHGsHqFbBj8CLz414RG8wVcerSzQDi91Yi4L8Juko",
  "key26": "2RQrPcefW87S1cFvvMCCGoNBGAszUQq69ZEv32Ndonxmgs4Cxy7LZdN69pyowRuU25doBnbDJ3rALjdBYMEYSEXw",
  "key27": "o4xBMx2KqtxpPEUiFoat2EaPU2dPuoozohE3HGXJjQ1CgYAgSrg2Le6Qgu6c8gkrmkCnSiW6agtNjRjNzqSrEG4",
  "key28": "2ako55y27sVcdYirug1XYGJmukApqdhYQJMsioSRtz8an8BpvtLvXvQfBPu667KSTHBB8nRiBGG4fSqJ3Z9xU6kj",
  "key29": "gv1hCwGrNFgLKwFMSqgAFwfAjpsTSYuHmySNd4JiZU4k4S5zmvt6iE13McfdQFigPe28gxamGHvhLpE1P2Rkemp",
  "key30": "2Z6W5DNpxMMrx87W178Pu43mcRKm4Z1dN2awUZ41eq5nuHpsym4Brt1aEDCgNFvvtQs1RXATg1CaL5Jg1eAFJ49V",
  "key31": "2SgPjt5pmGhwmiznmh1yWTtLZRB4zwp5GcHQbfB2gjRLgCCBnKpVT6ARmMLKC6R96rEWQanH6wBbDNfNfVb3RiLj",
  "key32": "4yRf1s72WVsuNxgQmTzXEf7VVJmMdCadUwEUNVTwU1jidDphdAwwYX9CCN5fWAR74qTYfm6NUaThSA3K5X8an2ow",
  "key33": "51gtnFLi8Ybr5gBbTTtfk6us8ySy7E48fVAMWT8r2iijjD1Djd6vaW87KMBj3ddmxLgaWifWQSE7a1R8p6MDzFGZ",
  "key34": "3TLrFTaCkNJ7czktCbbCQGAEJx8QjhFJcWxfRGHxaMsKEawSypxMBKdTNfa8o9LcYN9U3dUXMun8r34hhSxVdAtR",
  "key35": "4VuBX9JQVH4Zabcnrv7JiTdzeAEVnJANRpRFVJzcC2NFL4Cin47fU4wRTE1cCpUrHzcSrF4xTbuZkWJcNgx4X2bJ",
  "key36": "2NGyUP36Nb2DchZ1rQiHqj32na7SdWaFPgHgN63oRX5RXFNTgvZvwHDT85LrB2mmKFm2zCbzaqeTcFEXopdPijEV",
  "key37": "5s6ypTMhefzpQe7jkTyJDePfwq6tfADD5tLocHLEdVmU36y36KaGKnFuB2fDiV5oXUtwP18jv4SG3nvD9UF2A849",
  "key38": "6cE7UH4QhcZq1RJ5VBD8cVr1PUfmNVozqm5Beqr85P3ECwrK4uWBJwZE8genyHfRXV4uNx6koe4akDPmoxjyEAh",
  "key39": "4cg9Gs1oXRhD2Q4TuagAyH6nkkuR7uLhAYtW9mnfgPZBXXqk6MZh3QrTXoWRjLUKuQck8G54mADrpArUa19SC6BA",
  "key40": "37Yu49eDHCEZnRFwokSJKJqLMNYtZ997YpqRpZuLtT2RWaScubbJw5zw7SbupwEdB3oCyCuwY4mGiLmraU1RS9LY",
  "key41": "22VokMMrLj9U1V78Uc1HpxgtLqWFPZohCbJ6uVTPM5cmBhUmcrvhrtMXVCMAsVRafmRPeH1KvaWy4GnwHd1kU9d2",
  "key42": "5NJqBRkX1rVmrRZqEkET7czFy3zRB1iVzU1h8N36yBLvEwg2ngYbsv6HU1t6gFfz9MnFGKcJ8DVAE3d5WnuwA6PP",
  "key43": "3oJrDfkxknPaBnTvCbN1iCqry9jtj9Aj7QXSia7yFKpfEDqWDSsFkL7qmgC8PyrbDkyP3H1Qvp2bbfqr3NXwxwHt"
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
