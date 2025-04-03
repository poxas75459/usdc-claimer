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
    "4k97fregoKuriD3JTdqbbxuC9ajF2Ca3wXhij4YLDdqbCXT6MatfirngSFPziCgQnzJjaRrwzZc1aaGJo61irADu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nvRY29W1Prkv7VTmXaYpfcHt4WfppUivhtHFy6aKhhB4eq6Mw8CqgbWLAVTSdT4ERMAhyoqBiA3r2nMxMrvsUB8",
  "key1": "XYLswuEH2rfBE7grZ2WbJERzGJVn5WE4aqm7fXqnJywbocJNsNZWWSBL76KyXWTboxPHc3Vg2Sb9ZAsyvYsxSRz",
  "key2": "4jxg8p535wRDfGedvuj4fhJnhiCq9SapbDUNcNQRQwzSWenUwpboZS4LNnU1NW2YT4GMQ4uD1VGEQQF2kWLeoqPe",
  "key3": "26s2azyUN5kpCFnVc9KXD6SLhL3W6vnHZoYBW7C1CZumdjTMN7h3WM52yvZnFj1N81zhhDrGoCuJnULCGsu2payz",
  "key4": "2c1r622BWGVHkbHt2LBzPBgbXXGCKDDCkhQUR4aXgo4pXu8rpGXCTHLZ8VwwxeqSSi17TeTX7YVvzpYvj7eQZnK6",
  "key5": "4rasRdTpwFMVSRHGWs6YzZHYGxkYBoMKJuUcakGCzY5y2Au8Uun4vdMjvcwmkQUvedPSYx2cvJZNeQBtBtcTkA3F",
  "key6": "5ps76RHcorvB6QD9QZtxY7K9wMVVUsrXJDTNtMEBXMr2WMDP7mfDQTxkNjewFD6frQo1UGcVn6DEyKFV3sKJh9wm",
  "key7": "vZxxi5fcjN2VTWtmJm4gptpDMnFCiast6yYEiGQXxd2T2bQ11LVbVXBmPmyHTHVrtq8XHTYNPFKkGJuuQWjTR7j",
  "key8": "4VQpTnxbx7va7EAqpAW8CqWRAJA3KviJupruuTwFtiRyY3oG8yGvZt2a8vGSahYr6tRWRQmsFXcU4dUi1vsjUtzN",
  "key9": "74FfaF5VxXCkYwz2x8otf9KokPVqF1mBCgVPq2jttVSMHDQn1wNoYYLFpSZ1e2mkF7Un2vWHYsnnwftfLnSJZNj",
  "key10": "3YJrBAJXTXAoMuCryf4vLY6tJDVjTxVdgFrtKanyF459HtTo1FWspBTHcwU6htWZM683Ln2gWDta68DmqWmRdZpe",
  "key11": "31hHLVgtPc4uJwK7ytiGFAYmLYa7WQz27ZLuyna2FnNMTogm917u2P65mrmCgUwFdnypyEU18BEUVg6ZKnm894ZH",
  "key12": "4QDm4YhuNSdGFR7Y7SdK1CMx66na8Nt1csxn4XmpzH47iBBbVkHhmKjyX497E3UitcNfBTjx8MwQJvWyq7tGvMpp",
  "key13": "5n9GBwrfKvR9M8M9tTutepAFg3nLoU8vavZmaDbTD4NDAVqHewaVctZY2jfoy4NQ9cMkBmAvp91zjt3mqiAMFs13",
  "key14": "VCFzeMeG9BzDgVyNqqJSkQUww1otjNuwvg1W9G9AMDi9ahSrGPCdaeNJTkniyzbDm5FmAarJ7bQSV5GLkw7Y3z8",
  "key15": "23jgTf3rVFB68Jd1p9rjUmYe5qRJtXWMf98BnkCcMBMSbJCbbvDsy1NZyBpiTtti1M2FutMX6UVGN7wd1wkd67RU",
  "key16": "CgrC5YB9QUVBVVt4ME2mjUoJC88SJb4y2sUZsY5aTWJF8fuqMnrBA5a7ZGAygWayW5DSMSDrmzQ2RpYxxaHMFwj",
  "key17": "26JABmDpMVxTXcido2JNyyQerhFWLPJVwA6mHEn9E86JrtWCjTfC77L8cytqJ5M5Tbvxj3r297qKiTZkSwBCqwYW",
  "key18": "3fbUv7kxqsUJRKMe5vGVVc5JeVyEUtZAnEwmA5Q9ePEoeQGdfM3mWSLhbAivfX3fR8ooTjyrEcS6d5XYFB8BbdNX",
  "key19": "4Am3YewAbVeLCuTbmB71HDi7VLxgmJRL9eMXjkCm6hmL1FPWNVuJkTqacCRNNhCRNsxjFMWHsHwVNWLydFuNFLDo",
  "key20": "4rFCJRgyCNwjKRWiY1WTEDbzXTSGnxuwXMcwLwLKWhTnfK9LBokUfLq5NUKsgrQ6p32nWvwEFDP544qg1wZgaySB",
  "key21": "5TdmAaVE9zddJLGZh7MhG3rJAorJnosy1NHpipibLdUrMvno2uyYbNBzLp1BEbqEPFHdnLXCnABDXL1s3zj8bbD7",
  "key22": "4SvjMeaYReyLrpMxxgNnrDMQKRCXqzEGaoSkNFbdS87HFyHeszBgR81iBVWw5VfepSiLv83pciPv8nk2hvsVWLJi",
  "key23": "223dq4jrM3iur4Auu63ADdsdcVGC3oHbQAyN326qPCiH7N7WuZg2nNs9VAfiafkqwx4mutuNa2ZJXVJqDv4m7zX7",
  "key24": "4oR5v67svfKaR3darDS1PzBNx1fapyf6gmod1RoiSeJPQJ8LXvvmahhFkPmwAEpP4GryKTcG6kHR8TxtQypuLXRV",
  "key25": "2hagRz4ezxpMLUSU2Gao7m7bWrxbAiSZ5gjkcVPMbBnD5mv1cuKnngdZRZ3P7BrXJHQkGrjVY8eP9kpUDJHVDVJg",
  "key26": "2ojQkkGgjrB88pXKoqhNxpkd9u7WXkHcieXko1penLmeMtubpAmbaDRh6j3eBLwcSjL9YtEUEdxY8DWDNhHzu324",
  "key27": "66h7Lk5Zg2g6z4Qb9wEp9931tTk9xDgSbzJMYGnxR4KyCbSFesvgRo4u6TSL6DAdTCgiRptgBs35JVuQRotJvAGu",
  "key28": "2jX2Q9hTnt4KGGtbTPHKAVoT9QXfCtwwyb4fUVU6ziPGnuwkCTZGhHwNZZXSAbaCKmF2pX9DsAkwbaP5CDqUFzMq",
  "key29": "3W7Q3RuutmQv5H6SP8B9snmqtPM71iX5omq1opogS4w4TUjYGG9JjdrrtYvZ3FXcUjf61ySRw2EnKsRu6NgeEie6"
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
