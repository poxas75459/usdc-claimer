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
    "EpTqmjrw5QRnq6EEZfm91bHNuJM4XsT7qzXkmF1sU1aeaxMHeWS9Ai5UKPF98sYroQaq77mwK69xdVuzwxSqPCG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Z2nqygELUbeANC3U8gewd9b1w2QWW2YK9u2gW9iMu1wWtp3aLS9Xpmcck4nQhciLqzgXDGynTSC4AfKzGVkMX96",
  "key1": "2ZqcbwfxdYDgs2vqQsaSe3GwsCHqbhGBjbDHma1TrvWws4UFtVq8yKqJGkMANX8FpUksTv77UcFKaNQJX4vgzEuw",
  "key2": "47TQ1em96BBDiwXHKD5x3ZysrRCWVJmKEarKqeKexroHf1EbEs5ZPfaWGWCCTnJkPx3ZdU6sF6f2JrANryVWfT2C",
  "key3": "2e8rYrPgxm3BD75CdtxfM8X4CUBFGLZbk2Kqadoykeg8J8G1ZwpaurKZ2ZgCkrHWLuS49YxDJd9hzaMNCkn2qxVg",
  "key4": "4XCvkqcT99vanfDA6afWdn8EhKMXDcE8AyAFgA6SZrkcQsw3rq4DXsfR8nstBKG4ewzxcZPTBzqtjwnMsmERxN42",
  "key5": "eTgvgMBY2U4uvGxUuz4qHfiy29Z7oGjgSCd5MNWXxFRnkQ8Dpq5yZFBUfMhCBZfz2shEVnsQftdvzxS8t3ztrcs",
  "key6": "5aw9tYT3nwLrN1mwJs6ApZqYu4YtpoKDLr9Nes8kDWwdfzp3DZ9yk7aLfnJQxXDSNYtZzQYQt28keqk21sq9Rzx",
  "key7": "2RsmZKQdvaNUC1vwXTWN9U3TR2xMTqb1ZbrksYF3MatzGv2yLomC42c5RTCwBpGxqKseLbzZPj5Kb6sGxNPcaaTn",
  "key8": "4JjktLKV8em9JSdZcpuzqLhRM4ybv4Gcq32rk1bvcCiQpAkB6LoAUQAGP4qcoKbZsPkL2FoMVwQQkYx8o4VxK9UN",
  "key9": "3opaEfTdq86GUMTLRz9zV6i39nHsZDhWZBQnQ84sqffbreWXqgSWz56QEAQYvVke9EUCntQjacYwCQvb8zn5hadL",
  "key10": "HwrvpJ7ru65NA11rGnPMKZ9eimxcomBUoQk6tbtrgWLSzNFXFXsJcmDhmu1Mj7zxDx3gHVzkf4wKjSFfTcXzJL2",
  "key11": "28XXhZ7Y79YpcHyi9k4kK438xcw9gnVAJFcEeoqJPxzhaPcKB9x1P6SwpoRpRhMCUB6QiUFe4CmCtTU26wGc6pzE",
  "key12": "yFVWPzn6rRXhGQ7NctyXViAy8nyb9JTE8Y6KDbCCcSjjwM9UvRF38vZgc7D96YbxzCa5DWFR6nvEs5ovpotFVmf",
  "key13": "4d4WJUXNeYuHaXZR8tP6EXanfz79ocmR4bHSqHjwyXjYVyGxhSzyDJ4kNpeHazgwWweN3ZGMGoCSKhVC36b2t996",
  "key14": "5dEB6pcmhL4wTiPN3hxnXXuHPknTDETcyaeZXcZ6pQX3eLE8jKe8tJSS32TuMz44gvn5F5UnnAqnq1npbwrEWmze",
  "key15": "3EEK8bSZWZ1cRx5jcuqcjGD4spY9qZJ7aW3nNaQeWd1saKgxoyhv1SvnWcH2MoGcucZsoquYPChYivxBG4LzsKmy",
  "key16": "5z4eWbjEhfC2yAR3FMHDJ9PW2ro7mQ2rr7dqUV4yJf3Vw3s4QVCM7s8HbwufKDGBebyb9LerrbhyKeD6mh4Jh8Jt",
  "key17": "5nBC466qDQv1zXB4oFhxbQ1yCxF7PVJKZD7JT2rv1EJEFpZ2ZKPUB4LDqEaukk7tSC5TLkLf4AFppBtuHsS1fQFc",
  "key18": "2FuYQGF6Ks4FTJRyVQ3wxYF5okmzLoZMAA8wwxwhHHajomePgve8Q48ubRE15sQTPjebMmPQVSfDzctrWD7TCbiA",
  "key19": "5cHuCaSQCYDGhhrSR9kJqs9rgPmcUGAQw3dDvu7j4REQDpAyFR1bsM3YX9DTvy5BzbmpMvthP2T1AAP87FCnAxUR",
  "key20": "21rDRmEXQgv7SGdQaBXkr7Aqueaeu7dxf1cBP8RTJFNBd5z39GBzadnPVv9gNVnFCKPbtrDepc3Q1chFLiGSJjWu",
  "key21": "5Sa2KfrRrsENfNHomxUTR7pPy8b3hb7bPpEv4tXEDTadB5AcppcBeN6MTusaCtWTKXWv1bUx3cxALTWpCXyRoY8G",
  "key22": "2dHAher7tKgYfUKseXWJgYkcd3bhoK78obNP1gFrdn9N742rAQxUw6yw2FDF9JkohEMwdtbHoXyHnAZARyRDEVno",
  "key23": "2o9BPLffvdN9shYsK4m2a2XQ4bJLKGoSuLqfnTTL526C591TxzSe66Jdbe8qDzZZRwJdY1vGgBAr7dRaZnDS6tCJ",
  "key24": "4izJcdPxFboJVSWEShtUbtU94Y3AozQpahcDwui3BfeHkpS6EnY1Vw24DNBP82aEqYx64SjGzdnoM5WJsp3u6xmP",
  "key25": "3Ww2vMeLnt3QPSRRCpg2gVVcL528QerVXpSmqJfWYNhbcCbdpYh6yViebGMepBjptFcVwBouKyAs5188SVGne5Bc",
  "key26": "3Ap7FNZ36Dj1NSEAnZ9u7UzwWKc6p2Kwcd32EDzA5dgaPT49qgUtp3YpRU5psDN1CA4EfsmZkYcS5UEDytGtNnEJ",
  "key27": "pTVGhg9hmjneg4XK3Pts5AxfMfWFBwtM2jV9Cmawc1TTMFvmuBh6ZpfJ1FWsizEdqRFNsiG6HmErTbSj76rnw58",
  "key28": "ALPfm3VCvdv29uemo12TmpAE2NUQ4bUKd3qQ1kXsufFNVhQ7vDe3Zm2vnUENoJ7G7hdajYEpU9NZ4WDy4kfbRXr",
  "key29": "5Bju2Y3de27fogJtu4VRToEWu52kuNwWrVj7TTCFDFR3tsUkHZsrEVyt9wG533898arZv3SNgYQiCSVBCHacxEvQ",
  "key30": "5SrquznUTa9ohak3qfezofVqwD41zFZxWj24zKrzKwmk9rb3XBr1eRwMMTpwiihRHUP3RBMvFNTy2u4wKvR5k1F9",
  "key31": "pi9SzfAYSRf68dLNzr5dgYSRgnwRukV2HLTifaWXBY54rUhc6FzFMz9jAXDhxphzY3bX5iY4iicQ3sZnDLuFCin",
  "key32": "gZPMaqtgFoBRdNjXVhaWiYQ97uMketRPUadXfbWst3ZARX8u3ttuwaJAUxNMJVxq5bUpazT6NupUDw2xt28NhCK"
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
