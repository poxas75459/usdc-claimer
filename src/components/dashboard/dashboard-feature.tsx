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
    "2Gxsw177XEBTFG4s2CNkf3nFHV3st39pmi4GQ86VGzLWPr3sTwUcDWrpj4WKtV17r67RpRBcrsjU545aonyK5ha4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xuGQzFrxMrhqrev3HBpy7KDMuwPdxbtNH2uAYVCkiVMbWTm1JrJ4ufJZaEuFGZnNQVJBQTiV8YLvvg4wWwzaL2Z",
  "key1": "sKfRP9naYhach8Fh8J9xDRTpa8jFNk86oNjUxfJRW8iQsxbF65Hyd1WWQ4uvifY51Bg5pSCdoqq8126cdDq9PMm",
  "key2": "5cg5Wc4S7n8kx9vXdeTwC7WgU8atQHaqgurKDG7CtGvjF7EjYL142iUwuUjr746y9PaWYfZeeTpfqm1VyUZucdEk",
  "key3": "23uzFnp5RBFbQGVKPCjmx9okiG6jUYUcbQ6oJFkasTKtwB9YJyWSV6dwH9CPBgwkZe4RHsUrrWsCHndNZUwsLhVZ",
  "key4": "63g8XRuZGgaEdAnQQMoH6zm2eM8m4mfTSwyB2kBUakgZzBBxvk9HqH32e2mvLjMB3yGP4TszsDWmBwLU3CCe7JSL",
  "key5": "2f2GKhaLM1WLJ6hKAWQNNWtap6QAAfnoHtDBxY5vRDsiSfnmdiJ2xbWPkQwxNsciB6zvQK99u4q8rNYHfhWdyCU7",
  "key6": "3uRjS9u6bqToawjMEuyCf4RXq4het794AVJFEd5b27k6FRfxjAEcioFPRENxCJBpoWZy7eNzcM6SUt2mzaWdW2K3",
  "key7": "fRLhwtBEGxs8GpJKJwSnFwfLdAhyAExuUN6VLLyKsBPuuCTJ7Uqcfi6RVnauRxsNkWoCfeJv5WQA9t369t2krAY",
  "key8": "36dqqmWsjXWC33MHbxAxnms4YAhVGuCzYRnBEHCGFs9p1oo4r1LngFMqcDer7K5Yx5yFFkEfmn5Fuc8j8W48YVXC",
  "key9": "56zaRwr8tNZgsq47zA9HfmUsPXZqc7dQ9QZCLajfGrBVSeSeEFG161Wh1RQ8MGnhBJHyzVntL31ca36TuPGdvD8i",
  "key10": "dtA947Ym8oiLCAp7zGwRLKVHjeVHKoz1oZ8A81DZXLKV1y32Chub3o1sGmfKnFwW3YCDaSvfKQmvJCgYPEtGH2E",
  "key11": "5RczRqRp7aUaF5zhg4SiVPmvn7yd8L4qAtLzPm9EhaCJWCKYaAwqoe6pV86tMgC9o3wYNZdn3U7GZ48XYdD5kre",
  "key12": "2uGS4UzkhgoP3HYiUmhFQvsS1tfD824LnNEvCHVCpnzwncTX2McThL2dqpon79akzBrD9C9ydzJbLMYpMeajTrKz",
  "key13": "4ZJnbRLY4YHynZ1g6VdEiRwb5scVucH4CRPAJ7KqRPWGcUPHzreY3a3VpXzTT98gSTKP6AwbCWpzmDePwnXzynxr",
  "key14": "26ZXBBjnaiExj2T5eDb8cGCNhecA4VVGHEH1TwF7cwwyU3fsm4Rp4StapAGMBMEPTnXCN5Qi9mYjLxby8rYYUiRY",
  "key15": "59SBvuxFKuQ6LRnfv8UHKRQ9wiwn9XFjJTwBuBL8VSHLbiGmHsh4SaBXN5uCkHRAT8fC1xf5DMJXFwhFSCWA7Jkr",
  "key16": "Vp9zSjyQCN1RHKwDHFfXab79SaQ5mJyz1B2dQ4VYsru6eJTW4DfMQjdD8Jek7vB3gDy81aXFLSKqmxyyJfxxCVE",
  "key17": "4PT43d6TBTsvMiHLgZ9TewAU95tf8QvKCobWENkeD72xNn1Jvp8iCZvcgfwkgrnqcTG1PnMkePVaYrNzvGBhVbDu",
  "key18": "38Hph9aVqpoqU8RYNyG7VHxjowCHBrVThM67BH2CLxAxt4R2WjBq3R2CcBufwD2dk637GAaodjjZrnWursJ2aDCN",
  "key19": "42bgGuPW4evu8nsiA5aGw4wLJxGjCGeEUNjU25YggTABHGHtdCJoztNrN2eixA1waR1mkiJDCxSrjcymHh4PcvvV",
  "key20": "3BWLG8V2sfQSBPobDNnzLLEDY47UJGcKSWFxB3jBmUY38Xm6S8SUUtxFhZ2X9B4pXDX3z86KhRHduhnSVy3aJRnq",
  "key21": "fLHrAyozLNcpAsEMGeLo58nr6DaYgfTQpq4Qoodkb7JAP9njV4sf6ThCdd2YdTiuHj698k4wuHEb3A5TBMwmki5",
  "key22": "2ULBWfA7Ptgh9THG1mB9WREf4UiXi1tJM2LLSg5fWVnuW33UvEBHGCHe8GAwiQTRdbJrGaQcXQhYtABKKBTdrRWZ",
  "key23": "4tQN43EZ6fKumDRHe45UkidwVhwmEWPDjuN7ibCs5oSM3YkxXJWUEVdw7FAzw5tFNk9RrWPAtS9z1BeZrfLRZjhW",
  "key24": "5sw3iAfsScmwQNBvYg8XxmBb1SSE9APKqQhKptHacSnnhu4EnVSp1o9x7QeHVfK4M1QMGAThJoMtLvAS1p3ZQhYe",
  "key25": "5NaK1kUBgQ7bSZt8xgeWvymFhHSrduxUr5t3882Ki762tm9TtV3WQjFUqc8Uff2GtDdLe22MfJqRnEk3Y3F65gCK",
  "key26": "4sEvcGcurdv2QfqqhPjUFFD3WT9jF2ZCw2aVAnbVY2MPDaiU78ekJWtE9TGqP1nsZZLBvyCbWgZqiy8XiqLcFh4K",
  "key27": "5tC686jnuDkS2TeZEEybVZdH8Cb6dLf1FfjcmKrae4LC2C29FGUB7rqs2UMYBRYYP3MGApYVBLEHJbNN1kkPaB7F",
  "key28": "3GtvmmmG5Er7XiFHxmhDZ8j9Dfw9HqDTRRFFCCWLPbzS9D7jRzkGTByv8jZBR6D31nPdz3GpGHijgZ91M2UPnL1c",
  "key29": "5JMiyQXABYNuJMgdfPwkaRw6FLUPgorX3aou5mu165EBT4vTrbHmTLpFj23PCBwec8xnwf16Q7ihAVaenyoeDD1u",
  "key30": "5bFYY83E4oiA1VsY5raCpFyAhhdP9Lx7MqCEhUjmf1amB4hpArdhy4pw9esq79McLwV1PCaoYCsQ6sXtg3BbVFkF",
  "key31": "5aSzcB6LN9RgiHT2HBRmXMutvpdYYB4BSDfEr53Cu1pU4SD1kJmymQ3NMrVKcr77NW9u5ZZWHH3aBVVh6bP1R35C",
  "key32": "2iGZvosxbmk8mxbGaNbLQpAezsCWPAnASbT9Q7qCNTAuH6PVSFzx1W4a2TrkRpnnvfD2JCnVbLngJJ6gYgc3agL6",
  "key33": "2ZqV6npxoMoWCuSPs8Fgy5JcERmvJbt4qbYFNw3Us1GLvVCA27iN5GMwmUacVod6zyMWALkqboayiXK75Kombxrt",
  "key34": "5PUiKstNL1cjq9KKBaKTbHDPrhqdpTdZGBQEkafUbk4RCESyGmH23kTVXciUyzo7EvmVeUqewWfUP2MVCn5yz7Hh",
  "key35": "AwRvgvBvWPgQnTJnEXhbiVRJ7kXWyFiYbCuCH4aRFQBTw9jpSJJZybp4DkamaCUFv7fNkRPFtbn1VxGnBpbGd4W",
  "key36": "ho53BeejReZheQrQSfHsurwF9o4zZhZePQYfHvwvWKMnEFxEQPoZgmxUmKAMPdY4HARf8AhCrnRfi6skkWJsyHd",
  "key37": "33rtqvC4TN8rVEwk7vke3tRm8j73ckBb7zEB7QsrnBBf26idSupFAqVatKZJJtGk94w9PpXWkJGg9bA5VevXFumn",
  "key38": "G5zg4cBWkQUEnWsZMmvDJo2afmFNfL5SN6gWJcqBYhQ7pmcVkzhEprgxVbGzpXye84E4hoj3A9PpfafF5SQRvY5",
  "key39": "5KAUxJTn1D22aS1edPUWaNxxd3UhVNzARQqqQEfXyhjBGX64KP5wT5QdZDFi2Bj2vaGEMJsTRB8w4txuMuqLXdmU",
  "key40": "34Qx9szuL7nAY2gad72g2J6HNe4doxJ2QFzG9xZSbqHPvWq4zUqu3j8iEUVqAk64JnTy6wq1htFgViHW5tC5GTWA",
  "key41": "476TCLbYpuHJA7e8WihyVGq4Fg1WJw9JD3H9WmVY3vWqS4mbBUQH2pQJWPVVp3s8MNcNECVT12WGNtpXHAiJHGFj",
  "key42": "2FmJgpjciD74JwDmaDpCSkk12bqeWDQ7wkTJoTUGN5wd8gZ1afA7EvF3FJmfhibhvxVWDdcx3LHQwtorGqhpcpFD",
  "key43": "3jzafqDUTXepXshfYzLwfLjn5My5VB4fvvuRHbXdmF3TD6CkKojJxdNgWoRDxhj3ZQ63pL6ruU6eAdGA9JN3ZqFZ"
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
