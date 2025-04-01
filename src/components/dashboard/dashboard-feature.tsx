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
    "4YVtJriwNngaxoiLTqewoaY97yrjFrgfD8XLGCq5EPwvCskBSsxDCyBauBL3y54RUZ4nM6qtjRJUrUK1DseW6XjQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aZFnv1kjoVgm8dZv6TLA5QLmq5Xj2wY3CJTyBTQwAPyrQQHG8SWvkPV6fqyzMbzVHZesAk9K8v2kLhfMPaUZsqC",
  "key1": "7G5SGdHvYqDUcEXvyXKoZg7rV3gi5hVwfc3fi7jPoVYbvYvJ7SqvgeNNJJhz89sytJt9Hw3KbPmgWF65KLX1nzs",
  "key2": "CV1saAUVJZbQTgTLFLHumpJpT3Wszb66VnyKruXYXquCNKZVAkVfwPzgz1tkdhJTKFcxQa6uV9dxpF2BSPkdfeN",
  "key3": "317fmJyVX6j3ZHKy9HEi82nJ4QzBEqA5s1CWKeURNnPyL1a4cpGnDjbNGAw2cbNGQLANuhvnWYtULXNoWBwiTeEc",
  "key4": "3MiNpLmoATiD8BkdE48BTCyHjHVsDzgw8j21sXXWyjoWfyckTGpprKBXaGM7gmDsRo9T47sozSMoJjhoJtV7QV8H",
  "key5": "2N3KaTeFuXDWVyjzpNjCxyJybqPFSPdgoSLZ4HnbW1xwXy9cRBdA1udAHN6kpapNiCvWLeyVsmxmdpox8LfnCPgj",
  "key6": "4GjG6aqR2osjmDvdzJswRtEncRBy6Las27CmArrqq4NYqikVze9nWisJLuvZGiL5Y81mqXQTCoyceHYPZmC9GiLb",
  "key7": "3Uqp5m9k92XAwLGjQt4qY5xm23CbHxC7YS83418KS8XLKpUvTv3QQADu29bZuQJoaRxKbUby6izsr8Ar1ZUThfFG",
  "key8": "GxZM8HDdmgWc7cPkjta2K6CymPsuGoY1sP2Vkda9aozGrHAZSYWF8GebAsyB1MtbfpGHtjahvMpBPUakptX1oU9",
  "key9": "2pyFxgG947e6tZ3GdsiZ96cJrBKbr7ZNpYtGdtSgYWAAkcsUK4oKWCxEr9TWiwebT1adMqEVNekmCTfU3RZQTejx",
  "key10": "4yS9eWmACagEs8fCiG1e8EhJLX4pNZsCxVfQs3ShMXbZJwgYXp5pHzhcxTix35R3VN5MZYthDmTZHbKFZZoGjaXE",
  "key11": "psx5cRJswjLBBjGoLGMEUVa5qb7MACYzkAy12fTSbUhMorAk6p5uhhvumTydK5TT5UVfErAmtbKFKcjyV4Kg67Z",
  "key12": "4So1vCv7kasTZVUrytgrTFL2fZJgC1dpTNbuzuJXxsTtMW1xiWmUzwEnhXgzZEX82UuT5bZaSgHQfNLEiyLGeKgd",
  "key13": "3etEn2uZCTAnRkE2iY5uub2K4Ln7RxeF2T3RNraoTwHUkYF1xvBFBuuNjS19ncKCQg67C8Zd5YzXa6KDdLbUxHba",
  "key14": "64HPNaNBcT471vn6xcyLXuA8xo8S5UhMtjZpNeEUkQbXE8yKW8uNY4oK7riq2QW1R8SCxNFXuhrMYSk9gZkqS27v",
  "key15": "5YGJuuL6wuns9We9aFeVfY3xigxCJTocEKoc7JMR6fHuUtsA2sKsxNiZBQk2f45KzJEDK3rkXNVfAjVssQwG5KCY",
  "key16": "2ZmCAnL67rVDxMcVwjS3DuYoqhGBnug4keVcT1EgbyGdzABz4QBFeDVMFyACbPP9tTyRnuPro6vBQ1uL7vH9RxCz",
  "key17": "4LCSuKRcKZu7WVT8YLb4wdvuuY2i4SB3pinGGKTdxQ4tHvBf2r6aR1qcDGaQGN5iKx53wNbF3Mb7ESdr4H9UX9JG",
  "key18": "3BWaM4STEdjJGdVsbasPswvkY51EGHzjVDGu88Nfnf5FxxF4eXou9Jx67zmuTo2413mvBoDiFyXXbh1fVKS76qvx",
  "key19": "41q1sPp3wbS5JGTG5PjPHvf1MvCviwWHT26uRVB5j5nrdrPthCgL9fjdCH7p1FcWBpkitnHYMLRyEbpZurUMWMdZ",
  "key20": "419uTs65xq1gFPFxLeKuYrU14GuLGiua4hSiZ5rC1NGXc22so86W6Mn8iizDwaWsupRo5ftqoApfmzsYGzfA3xz",
  "key21": "4P5mZzXjcHhfHcoj9vCCg5MZGeLgBhzXzjHRr9LuLn47yCAefnYoShKThtX2QPdV8GUzV8NR1tuZmB26xwc9FmSX",
  "key22": "4avQZC7GtAZ5tfi9LYHfqvF4kZqgGX2iUHvfPVUq7dh2UhXPmmLPRU6uF47pMSkGoYpdZfoZ9CRDqHjq1dT2bqCV",
  "key23": "3jZckMnatzbuonqZSNJ5Z8zHjW46G58hgtW4bucRTxJZ5CCCSYpLVcDQ3h87CNATAS45RzsnFrSkya3PEx6tiykf",
  "key24": "36gQYUX2mKKVPMr3VPEYhBNNvNAuMtjfzWjFpZSBYALbxGxUptDmu7S4FohQV7Bo37LARBcPRGuPTNsbc2CZ6CTy",
  "key25": "3ZYBznMNge7BYmDkcCMxhabeb5HJm8UuwRWVABxYFdYqYs7834GRnT691cyu8a8TsPazLrhxn4cksGmKR1fMtyEk",
  "key26": "vsayvqP3AejmVJyiJ6t9am1hsdDGjy26BcjzwPCCpwvYz3ZAg77QVRUPjRY6AKW8v6bAHHkY13bmHYjwwfxndHZ",
  "key27": "5WmrQjCJzvTa5wvysfKAC2jZ9mkiDTBJcQgijDfwLMehYtkgZgeUiAWXy7jVeGnVq1HdFwnY1yfQU1Pd411WG6W",
  "key28": "QDjynsQ1xyHxfaEKJJpNijaDjk618RADbkJLJLaCHpPaKGY12sbxFnubPQMYQGJPQR2CYNDbxV94MFG5CPaxDrV",
  "key29": "dqrFKGAZAXitVZR2z9keqNZo7HrJ8MUs5aVcDySkzPFRCAJJafZJLYttEC8D3ywQtcgbaJt8EAQL9sUoHtfviNK",
  "key30": "2Cn3gR5rmE3ZwgKRmKnNmvRABNXTgaRtgLVYys3JCJnr21gM42JQoMoxMdrHohXAATvJoRCxnoP4kWano1vwUFWE",
  "key31": "4ocGQjB3i4mX9hAK4i3g1fyrrFNCsPptGsv1HVFGJ3rRSVQQZFuVPYSoJ9yRds87q9LEPEzhkiqdT7CD89vBWXTT",
  "key32": "4MAEvGhTXuZGGjy4A5G7xSXqoWU1YYJxpeW25qZx9tniQo8ESJFuxQmMgQsvM93dRrvbvFLMT31qBMWzePNA5swq",
  "key33": "5H68eP4CS78RypTfr8FGhrDekTM6H4K3AtGSL6NBbPMkci4hYUzM3aiR3stmVjNtnCJY6hqZsaa4zzsTkQ5A9e9v",
  "key34": "2px49qDpa4L9Gb9F4hkiXpHNVEvNnqnBeBCbNgtuMWUqTNeZNfGvNN7WgmMq9U5zv1nNJw46GQxWoQ2oqBxhV2WD",
  "key35": "5P9ywueraGqJ4cEBf51kMJNKZDSBgKh9hJhQP7ZoXmKiZ9S9qQMPKKPQJYRAmSNAcmS1fWgDV8QU5AuoBsPbSvEg",
  "key36": "55iCG8vjxPPdKTvoUuxfZpbvo5D1Dn2FVnmz8jvHA89vNf8o7GSbiDGTfjaciXZVR2nezz3RqpWtCDoc3PhJBx8y",
  "key37": "5RN3XWB6Vj79C6yXjgqK97WLUSBaEmZuNg7pFMXo4yCMXeyhosBD9YHvWJrs7UChfxbmKq2rB2c71qgWNyDtcEvs",
  "key38": "8vDyRsRYbS9AzC8z9jhhekJxCbC3XBbxuFvozx4rFY1ppJwooq6y91HYtpwygjD1HzfYdwPJpsHZizNgSz452JX",
  "key39": "4Qj6ryuybnNQyuior4QT7REqeTXP3LtYBV94zv2iyBhrtpGSov9Mm23TtfWDm9YEYssySKQAgsW8wjcUnuLh8D7w",
  "key40": "3oGfubJXqTQAShsnpnMkBihahXBs5HBkAY1so1eo5QkuB4CMh8tvBV3v2CUA6BL7Excqb4TqTJL841ApPLjh2Lhq",
  "key41": "5pjsdURAkyovUR5zjSLNxGYQ5UWWmFkeTafZcfRQZ2ca7iAjbYwu9VMWXHTWpaYzk1bJ7G6kxFu8TajQQ67gn1QD",
  "key42": "4ZcwRL8QwdTZXyHiGApyAHnLnV6WDxZiS1EDBaMhoMT1n8Rgy6vW8kaHrFUVnoEsYNGdVsfk4nimK6Z5gzoYPV1u",
  "key43": "3WojfrXe4TUGYNsQG6WG7yz8ypsLcDNA7hq2wvRX94yCdpQEUhczRgQGojMqFKq4AjaPSbFFmB41Yf3Xa38kL9yy",
  "key44": "36WQW4zWKp6QyKa7N8HxzUFJArXNZMbsFgB8eQG8TxuM4eSPo9jNNe8S95kVD895rBGdPBe9SNs1m3WeyMfzAitg",
  "key45": "5vtarSGm9L2rgDTp6YGqnD4qZyHJCdLoiKs6DigXbvvVo7CYuGSqUsH1RcyEqakiQW5xuc97qxxf9ZGUexJ3nWzL",
  "key46": "5erm9XFdEkbWG3HAurBUs8MbGb2yGAEp68v4gKi9fMzAtJy592ZdS67Z4dHw1RnEkw4jR9cZd8w1ixFLTRVGd29Q",
  "key47": "2wvfzT14Z5nYULBzHCa4NgAmHbrGsvZQQsDPopdbKjexJZnsx9fxkMtr8yFBpCW3ABpwZZHd3hc9q7wteridbbVi",
  "key48": "5MsRUVdkJ2Fvo4iemYVJut6TTgGwDye1HBPXmEipJKByMKcvG2DQCmaJxjhzsRqr2jL1qmJxvBGkkxpWW6GJCVqA"
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
