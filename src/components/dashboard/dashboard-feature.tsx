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
    "2CFurWqJzkzzegiQY7Bi7Er2y4YFo729EYYuFknARRyoRnLPmKUNthnngQsMyrezYBdHV6ubjbKxPvdMg9tQJr5g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vjoNkPhpSET5s89jfHKoegi9fRPRv2MazsF5Ky8pQ5ypDyKKeVjPGFW8po8Ge478xnkLcmCxo4xRTLWBnyHndnN",
  "key1": "35MfqYd7MJTed99uLiyzPwf1aSA2B8FxiANdcHBtbs9eXYk4Apknainy858JHWJkMcke6FoquJjhgterbn4SvzDR",
  "key2": "6525kvCgWpFfr7ZtKswxsQ6oUqh1LNM6ajhxNnJBhmKHTpWQqFDrfUzTqWT4A7aUx1XbGz1Ph2ugdVLb4ACh718t",
  "key3": "5M9L4qZhCDhJNJeS1P8qpyW2BgkCkMhnu6f1ouJqyf2XTVA6hzy4oxtqbcyENakpKeZnkqToceQafgZ5ErcTvNS5",
  "key4": "DRKdgga6jJmdRAPQHX7kqQVBpkYY76kKETTQJg5ndvJdGELtvEJuB3D2jTauGiKyoBY6aa6VFMRqcGezvNHLfNA",
  "key5": "AFXj5imYBnkpGMj6iMWcJt2y8QhbwWesd1gxzXPo5hAiYoQyFek2DivVjELxNHjg7fyZByqQSC9VnX1t7ra4yTo",
  "key6": "SX485JbY9dTzTJpmZFuUqL9c514CnWruzBX8MEFYqLrM2qo4ocPbLYqGAqzhVa5uDGuiXaXs62YxhCZHySTGVW4",
  "key7": "4kdLi5wfK2YraDVGANMnMLobzXUtaXKQkjoCgwgbL8o3NG6L1yLyNLiqzsBKvDW8FP6cWic4kLFrzQzv3gmkvubd",
  "key8": "4JfvMt3FKhoUKKpJHscBtfopwXoFnz4ii4KYoEVMGAzEVsBjXh2QZeWCf8x6y9pRa1BRodkd1M5XrrZStsFzm9RD",
  "key9": "QFmmSh1PSnie13RN5qasYiF242cXWNUnJHBnd4fW1zatfqKGTGXwaLyaVhoamBrmPd8zQv8hPidq4qf7UQYnrD3",
  "key10": "2qb5GVYaC9QoUi1cw8nZ4ERHmHpWoPkKN1VR7LoQTWy14xx8cHqsySppjj39n5P5bTmB9VqE8kx6j7GRaXbn2dr7",
  "key11": "57xpgK7VPpiFf1CGEFpf1ECtqPjCmXHybr6mAJcAmXGS7PuUFLUoS2NgvULMEBqQNsBTxhQzH6r9Z4QQBktDHmJG",
  "key12": "GkiRtpAdnYeXC44pD8QrLAhCP8oKFzbrqoQwFQHnW2Jvizeoo2E13VVjK8CvfQmsVLd6PC2BKqcpSdc8t4mduQm",
  "key13": "4hGHQF7g7jmNDTeha3g418JWoMmi6BC7XWZoDqCTQW4ttzvsX4RaL4DvJaikwZ3PdM3aneLCpN35N8d4r7p5kbm",
  "key14": "4Boa9PW4dDJHRg9sRC7RmAF5JwxmefNzFVjetQx3pCC2VzEyzbonC4ENJbvfSzkDfZoN9gS58enzjJ9wV35dZP24",
  "key15": "6cVK4NSCaHHPtcgi6uvBrinnQp8wytQFb3YcPiHMfMt8Atv2rkBNuDov4Qxu7SCjMSZSMteyFTxP4eKVofu7KBs",
  "key16": "4BGhuTJmFHFDfunqbnWmD5xzaqzpPsPE7PKEYWhQcfm9YCp7iNmxXriWjkMTHatKU7TmDuMvEZmcMSFZJTm2d7P7",
  "key17": "5pHpAdMWrVb3gxy353TRe6G77JuaijtFeFFNoKSFMMZCDPxPbdEGUAZFvT1D6yMRLpyyswuXgCaax1TyZx3By3xD",
  "key18": "3m268vtKxm46zcewqCte1ftR3khzwBfuzJXYNG3ur5jmGroDCeRHuZX3RNuj7pHpHoiYuQueCQauNAXNLsinKNMy",
  "key19": "31jYVW3dNLvVQhHycrBwEyFgoRn4VQJvoBNHbvCXVhmHZawsnfSDWfkbhWuUKyroFe9wkgCizKztFFv1v1LSEAkT",
  "key20": "4MRdUS6SXrVuYGn7bdrz7hwJQHoiCbE4zkrMZV2zVdJwG1egKHdA6PtRRGR3NKKNmKWHKjnFHgkGghHqhWioxqWN",
  "key21": "2FTVeso7ZvBp3qLwDE5t2YNDyRrQ7D4c85ePavd8MViNKb1csuZqwZi4yN1VGj4in2NyP6oZWWnr9c9CQcRpFg9t",
  "key22": "5s1XsxXoQVRjDna7mGtffEKnkwU7eYngYj7odLj8o1uSYRg6AbFsND3fXxxLR2FgT6wxibidwxrLACcGqDc9ev9z",
  "key23": "4RzQzjDLjXtXoCDBr8yPynV36SqwyXx3ssuBQpGU136AmLJRhn4peQQKXR4bTLjczZrtY11MNkxVDW1NM22MRrKW",
  "key24": "FtLay4sU3hjUsBGoyChXE2RtQakLUfckXrKj2tGsy5vQHfXKRYscuhxo4RWFYdDShvLRZjWbH3SXuXcnNLQMpKk",
  "key25": "5ja4cKLKUvCki4Qtmg3i1h1H9CikigmbXnTrT12gMGbiWr8yrX8PNtHrSNid2TTvhiDS48bMzjWySwtPZ6e2QWEE",
  "key26": "3mkY2PCfkc9B1quF4GVNNvLrADGp5tR4reojLqyX9HK8ygsYcM5pAwzWTshTytqzeXPjwHSADi5uB2qdFfSve8z",
  "key27": "64Z8YpL8RiTS7PKEaJGSxmB16J4WpA9HMaJ6qHjbiNhhDsZ81Cs5okFooPXt41BEq6VdD8QBRruXNZ4X7T3WftMW",
  "key28": "52jZWusT1QFEPSBdSN7JZqS7CikTAyqf1rSajG7P8fGjwbqDZDrXEE7byd73pb7jr1FKVkrVad3wAwhNXPvLN6ZH",
  "key29": "2XHWbH4MeVVBJcSNvuykWoUWvgcq7eNmaBf5FCMCgx6L2BKHqK7MUwycqpM22SfPdKAWmwDbZQsWRAR94SATPic1",
  "key30": "2oGjPxGjcfmVCjVo4nn2yfF3NCdZTYoqpTyQGAddA5V5TNtLrm7U3KKXqMLYqAo19LRnWnNDkLzzNgMszMPsnfX2",
  "key31": "mFZAPcQ1m8FnAWD8nK32wbscW168j3gCfV9ENKGvYeXUe23nCy8vvtdtG2ubn3VuyYqZFp4SVaCojKrU6Gv9WUb",
  "key32": "35N3x4yAMYohQZgN8h8NWiScamb4HCCa29uWmP5vKP9HAK1j9itgjcRvAfcDPkkn6AeB3W3BS969ZsDBP1FNMQ1A"
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
