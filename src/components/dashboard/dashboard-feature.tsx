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
    "ep94aDiWWw6knvnT7UzhGWzD74cP18TryViDmsrccRW7xYWXnq3TY6rpDVSCdd5VBm77xT1xHPhugRH1WtJVsv4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uicJejpoiYeSvQosjYcovHqK4R38ByPR6TKPMbP84tNJHtrAbcP4wo8Q2X7Ec6UDbuKC7KPqfGqDdVX7uT6Wd6E",
  "key1": "gVW7FeDcu5X4ZPWEPPerXgP9GPvjy5ha5J55HjNrvxpQiC8ogxgxkvGQtfH2NEyuKDgdat952xqCLETHSU8cPS8",
  "key2": "2FpaubxtsCjDvg5PyAq26VXNSFEGDzwmvhcwAF6jGeqFMf9BXCrx2mvt7JZdhBGnurPxfoeG9RUqot1UfpdnrYMA",
  "key3": "2kuG7bdm2GJnmB2fMaoauzsufYXADkDxxGKzPsqnFbKrA1uZ6CtxhH1k1A9RtpAS71WtgXQStYpgy6U2Br9QBDSm",
  "key4": "FGkMhe6hvesYaTCjr6w8HpHtDkiQzuyvSMERoYvcjwKRuZpv9dHGFfNdAexRLxCTPvCNLKLaWBYd5EzZJ6edRea",
  "key5": "2KJpNLgRjhbn5qUGYYQMcPaSDWAsPQFS6ZV64y21JmrTMLvT4HTNYrvn59cRBAPR1aisQkv1JHqcV2j7XLejsAbz",
  "key6": "277mxQ4W9Nttc8pHtTxsadmJrGC12gnXRyUr76MonP6Vyhb98DVRbTXWuSKGYd2JLD9iaDMJHuEAU2JwtVQ7ArVn",
  "key7": "4TQEUvHexNwzstoNCiqYEZeQfxewsEiNZC72QhkZfDRnRFWKNgVbnAZyURYKGxJLpVynheXAu329XHvqhkKUZMj7",
  "key8": "25L7oPLSXYB1kVU8CinXELvoGgEhqrs6HuQ27XKKnP5cJQpsF138TSMiUmobg1vayFwGcqpBgPHd5rYyouqx2LPb",
  "key9": "JxXyoanTqz1UDdLeYfGLp557wXrjVhQm4MFmWtykkC7ewrecbFLmUi6PdV7DBW36Zu32wvcmNosT6B9Y5tpSWd1",
  "key10": "YZ3exZUb7t6vk6Ya3x91tdhhXde1ftdK2Wvw68pqsnruaHshni6PC4iay7jZUjFNJR9edWLqPJzU7x3dt6ucLNi",
  "key11": "2sKBsAre5n9CgW4TP63JLJEZ4cM6nxfQso386i81pJnPjkQSU6QtzbtYpsaGrdhzTjSGxTMhKNReuFVZDPkRRLSS",
  "key12": "3bpqngGp4ACUfForYJY99R3oy7wyW9o56rzeqjtNeE8jVLo2feVtwA8fY77sZxFh33ZscgYTN11A6cSjPCYCuEdk",
  "key13": "5rzQK3UaaVGitVCtGim9PznZzspfk37uqfSQW25mvRp8ieZcjM12AL6BsEG56UhaR61DcPSu2mDmH7GckcuRZBpt",
  "key14": "wzSDaQhwR5gXjRcaoxCud32ETwEtJGpp3TLTVaJr4eamD9WA4GCq1mmGjizbmL6Ekg37NNGpXFYCyLLQVd1r9oC",
  "key15": "sLAjdDGFPTRit4FySmCa6r5EaiosAvrKJ6kHnRhMnqZPEGyeRed3Zh9EUADqKQR4121yx13Tv6KqbdRzWkjW2BK",
  "key16": "4QWqJxRkwrEXyDGdisfA9LjCFUQVG8576WDozi7c5wZBXofpEj4zEhQf41jhVFZXAbam1RGADrX43CDRY23m2ybM",
  "key17": "3oTETxR347vAjH2GsKxQw1RpgY8ZUErVceYCic2oXGpi7hNruTYSFvPvZJ9HYgwEzFr2WU6U563JFCRMkJuADQmr",
  "key18": "3TkeLsHqnSChpoX3koQ7uHedExfJKLReMq9ohMBy28vHvpXpc1fbRUzn7pzDVBZdNG7U8QyXb2AudyEhPC8DP3ny",
  "key19": "2YC5YayM1Uu6q1ZLJsw6VDcDv54xb5zGGiE1WRdtZdGhQ31bFvvZLL3Kzk8DX4GAqcKrs7Y6xCvS8Efx1wMZotiA",
  "key20": "65gvGiq2t3We9gRAeFJXtpJaPFaV5HbozJQaThtHmEBbGSRTV9taptvs5M5bCVhG2RSTqjzXqB9Fgk1nEFNX7HkB",
  "key21": "HjWLBYGAfQq8w3aw3b767UtTRc62D62d5F2y8QaA5Kiixudah61Gp5UELX1FUSyWvV9GGndAFMrH1WwjNhYCbqD",
  "key22": "5jGFppiEzNsjqrYCZeD8uVo2aU8MSjukC8wyvU9EUP5oeoL9Y2abjnSgFZ9AWAhWt2e4EEDTJaCqUS9N5ib1Ahb9",
  "key23": "4iM6LFK5pnXhS88Sz52cyaayNX7ME9eKnLTiwZJ63cE3LWA9tuANW6LbNrdaNCXAoWUmgR2xRAxo3dVLjNUXGH4V",
  "key24": "qwWVmx5aYDrpbdqmv6ZFrRcsz3jwr2v46a74F4eVX7PA3paAio4U8yygGXeMs3opFx9LfKDXfyGhcc9uSepQYBW",
  "key25": "5NsYPDH9YMtNbA8jC2Ru8iP7d9Jv45wVVAdsvLGHtPmJLw85FMSsnLZ6rrmmyP5S3fCUrrNRSCQ5Q1iE92AKjLmv",
  "key26": "62GgEwCm1ZapNQ3gHyUKMgrcF6vrqJ6gHuA4w3M4XnKx7ygWakzqZvQR82vfKuxhmCaHSZeQSbGDkkTgThAKMq8J",
  "key27": "3NEP2BWJasL2tCg1b6AEqekDTpk6PMUW2bhh8oyPzcc7HGGqasuchTtjU2TPiix4JQHgScUMhVjke3ehZkoCpVz8",
  "key28": "5PLt69rP5i5NYsRmBRbU92Bh6e5TRXRLmxNytYBGrcBgfbu49QtkC4hW8u8AyVP38WzpNrAJMcjqVqJtHnH1MSv2",
  "key29": "4p8JVGHbF37b6u2Ci5ZEWWUHEasyPxCGvjaM5qyy9HHYCuaWphTgJf3wMsr7atLRqyTKuE4CKheySvWozqeBeLXn",
  "key30": "4ixVgpy7Pv98YoBAp96Gobc4kM6ruvMnvwwrauVMj1DwbQquqP7QxoR9cuTagQJopSF1ytNgK5gyC2TXCDQuuJGd",
  "key31": "3vciYbAm8zJ7T6ADLBFuAR5yu99gu1RBJf37cJERER6XRjRShUNhJ2dvttJTQGHGcdcsRLX3dKzRMsG2d5ZzKCCJ",
  "key32": "5CxHFjqh15DYthzSZceTHJobCKgVx2BdWgw91GjaRFgMu2drsya748xst8ouwXydkJEbL7xagSLYJghnUZe5M72g",
  "key33": "WpCM2u2HU5KqxJi19CTfYFzFDwRrs9vF3fHAdQAhkJj4GLTJSodRPk5ZmgFhb6pNoD9wzFspeC9LJSHBiGr2VAR",
  "key34": "4FAWfA2JCzB2nUMYEnRSetbmc5bCidcRdzGTEhBtGeXCnVQ4xdGf1fBmyKKNfcZa6aV1C1ds48KG32dH3LcyMj5E",
  "key35": "5GfpSpNmykocgQnjc1eNcmY1nERLmR3VNkBQCE7rDx13huFeQ7oaKF9AEXuwkS4oM4dxU6r6SNKzHGU7S7QSJLDe",
  "key36": "5TgAUKrehyY1XBq9VZGCNeUTREvhjQeaHAN7ge7N1nKYbWx5bpHjci4cUEFkkqLB98VtDjVqGCycMJP3RRJBGA1B",
  "key37": "5aHD5FkkjcXCx8LQq7qi5Mu7GLzrH6FTXzATuMncy7dRAf2H8B6ZenWqjRvjY9TrdR2pzuRXN2kJqu2khSTGU6ib",
  "key38": "GvR1YaVWMxysVThcoBMFbFB6Jbw16qpuVfaKoD7envYk3E5f5n69V9qGRHpfnKg9mPatDbvXFWWeWKPYzeEYFpq",
  "key39": "2GHrdyFqiCQQwR3az1ovDoZcVh37pbQL8K3T5j7EbY3msR21zW4Bo8nE5WmnbXE2wxjYeosMYufpw1yaPzfd5G2K",
  "key40": "YbR31YKM8RCdZoeeF15GF5KqhxgnrifWifr6c5nYvEfeMsFpg36YkAxYM5VHLJhaPSLiqaNBugWaC2cyF7Qaemo"
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
