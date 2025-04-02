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
    "ynvArp17o4V1iQZ2hJ6Sm3tzTkoBinoutWdebrX78Nwkx615v4H5UJhVGxiNZXoHAv5n5H6RGBpm3SSMV66dyRn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TqsohqffsAJoFTjFsZGwUsYjR7ntC6rEcmtrZixXRz8JcTK15tXGu6bLMz2RGjUFYGADPwkqnXKCR1iabe8nFHc",
  "key1": "4iSJgVNLucvMrW4ar9bfJHqNEkLnjh82YgwcE5uE9RvGEpy4UyscW8BKRUwCVZagcCdHUvhBsCA96m5SPn1ULFen",
  "key2": "zoJKLoYwmCLQ78CdzutmvKL9jUkdRXYoRuqqXhj2kL7NfKL4Nq2VbnE5GPRqZzVnSzxgWi6YbLNuNoFXoxLmrVy",
  "key3": "3mubtGeeAb1SiRkM8riR8y9Nse7w1zCNfxAFzCM6YH4Fk7bkWQtq3AGCsN1zybR1SKh2ErKCRpcqHgmy2QYtWBa6",
  "key4": "2q8UC3WwT1L7Hzxjybf5akDGHfBWbjZ1YT6AEKSaUten9ra7RuMTBksT6FQiymxtQWQs55CcwrJrPejWJmBDm6Ae",
  "key5": "5293mcLuLA84Re2ZbMNS2UKyCkcWqM6MDr8WpQczUdfuhTLNeYmmDzMh2F33EAdiNNXVxfHYWC1aoV83sYHkNYyu",
  "key6": "61T6f2gB9qaYvCgtdTA2zHt51jtmBtwB4NgbEKej9Xi5HtmRwUz4U33JYzCkeXBjSx2fuRETJNJEZu9g1xUCYQyF",
  "key7": "56SpHBmTuu8KSo5qYqiwN5tmkmvhaSqx4c5TxiSnCvLUzK1Jhqj3hZJ2kR7Vj8kLHiTVBd8iwFW2XExWZp3SFTra",
  "key8": "3DijEjCqd5LKe2PM2nw6W9rA7NQfZQThVBZQpfrf5s4JcmjmNz5d9itVSNXGpC6QxoukK1ngaYq9kZPjjWiuFQT",
  "key9": "ggZRhcBBguaPxfDffMMKoKNG2wF742oyPwowvQFnKwwCjudW8aLcQuPq9CZSnRBNqHBgLfnqU56Cak8Zec9fGtq",
  "key10": "3be2BKYpQWqVveVUbVA1SkbxoZVyGLfMUcHq5TiJW9DjUHtCQjTBEFDkDi7uekEXw8TWs2BAaUVrfe8w8yFs5mqD",
  "key11": "oDJgW6RhVQ4FBWAesvirLL4oe9JcFFqH4j1V5JfTku8BfHYwdyQQ6xUT9wWuxiHgUQLbY9GqDiS1b3nPGFDNrj5",
  "key12": "5J6Duppe7Hk727BHRNwR1d2DdBsWFhk7yuE7GTGwDsWETjQqx2iqrkumL14tqyG5XtruKzgWNb1FN6mGPwPQ1fAg",
  "key13": "52MJQNdyDBJunYwhtiFvQgfZtKjRk2yihFbSEUPiupKEaxemgUFFERvPMCcvySSNMtG5T47cjjLKvgPSZ472vciN",
  "key14": "4gHj4dbceB6YLv9sw9cRT3XJSA5WcpbWcAmZt5VBA8uUvpbi9gZCf4XReeVaqcJHpZ8rDCcGLm8rxKUoC5874L2T",
  "key15": "Yc2kFquhTH1DYmyeLg89BjKoAHqTRM9dfv5gDQSNequSF4mbfgKeaHTtMPEXcFdhgiJMTbma2gQbKuQfwhinxe2",
  "key16": "HHRRCUbxWV3hT3546MHuug9JUTa1bwRutYLTvnZjUy5miAAkALUqvBa7bXteMj7R5FuBBTwwEMGU4L374z1TFvr",
  "key17": "2JtBBTc8kUeVpx1QJyuurpCc1h1AWVUxZi29VtoVQ17wk5iHZaRLF8cp3rbG5Bm7pLE5MaVyHFtVDESkSfBER7yb",
  "key18": "2eWAFmis8rzB743pDLaDHQvVzbexebypebBb1N9CPExruo8Q6JkahqxrtJMneahBANStF9SR6dBCeVkc6ZbfmhBu",
  "key19": "5CTjNCuhz1DKBg9amyALkvRhGi1dePrZ8TyReMSWkbcZsJTnf89F71rrzye7i7QENtow4YydjXg4koQFbapephVd",
  "key20": "dHzJcbLpZD6Ms7TM3d2dNd8RqmUgb1FSqPyVsQAuYtPbsWNwBMUWERvnLe7bfQSG4F13vWdSYtEFkenBp3Dixfb",
  "key21": "59e6SBqZytu1r8BmcqXzQihNA58GyPsy4MqKwaWtfHrzy7YrRtSCuj2h3cGZKCQa2ZRxsDbfnn8p7iH5oX5vvpuc",
  "key22": "4QTRRWeMxzViDdfYQDAD2w64d39GeBVp6fzfZPHAApT2Zr6iLefatndY6ATHFZtCTE17P7Lh3LugAAuHZwdybEi8",
  "key23": "4PtzyFygtPNHtbFHJVh4C1y8AoF7gss1tpEmmPftCBMph8FA8B3qkQ992o2HPYPUJx4UwScfSpg25CL7iYyKDo1J",
  "key24": "48UHzrZV9ktccrDLfM4vKQvfDM31MBdKPSruzjWGubjpixuEZ3aKASwP46XhCqZiAZ8CmL9jkBzAoDm1q8dxpfXo",
  "key25": "5Zf7dgiMSHjMWLZds5caLksttv2tsx1oX37CxVsbvMj1jgwHFk789Aq2DY9yrsmUHwxhvbWhB5Ak2MXqUXsDZzWW",
  "key26": "61T2eSmDHdsNc1zYQQVmwnvwZoyxwSE2ACuRukN8tTozoPqkJFrhfvNK2FWdF8VFNu1yX8HpTWaQE7fSVDJ86FnA",
  "key27": "7tpeHamJZkUagqvvEDf2zEGtH1RaPa1J1QdBVGRa6cocSyixUPHG1DCXFLkpwxYvP6TfrRJSkA4KCzfWPrH12Xr",
  "key28": "2M7RtMXDyiMkEAQYiPmrpFXA79AUM2AWg75DkXfi49PieBboMA17uuNhRo7kkw1AYnpsTdKDSQCWz696DH9CY7qH",
  "key29": "5uATQGV9n4YfvBMgy4DZ8QebAFbgdvLYg21pRuCTsDTkyek632KKGcJdp4N2BLLVjpZGyNo1EzgBU2FHQZpCFCxK",
  "key30": "5jDPeGBwAUD384CmK3PewZPzrZXKLZH2PYfZrXGmubWUzUgEpQZRWmqfTmGoLRHpLQXyqZJpBU3Ah37eGbtvzbFN",
  "key31": "3NeZdVGs7NoLjbm4EYUWiAJKnYzE7gKwnVJXfuKUa8YaD3CV3TuwNNvhWrWbpKTJNDKkPWKv2iHiSLxnxFBmLnGW",
  "key32": "5yGwcvsy6FF7bHzvbJ4VsP9kWfdQEWk3EQUSGmoBNgxhqFdFYetXfd7vJpEa6fAyg4M4dtrx4SUWCLe6rBhWu6Cz",
  "key33": "2gbENPpTEByPpcyCSwnZPv2Ukp93KXpvTqsXq7QLWdTnKudaLfSe1SQR6cF9Lkev5Sb7T812uiCeqnp8u33D5yvw",
  "key34": "2prLBonUdJZUAto2sBtss6j8aHfu3gf563UFuifCm7vn1qjNsUHqpsKsHmoi9VVnJr1Xgy7MJSkBe6gYJ9MPUM3y"
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
