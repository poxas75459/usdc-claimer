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
    "2tCrkeiubVsmLV1vtUYFiYxaHDcGqNTdpykBWJDUS2Vsok3PPXpXc6sUzvgpfaRPxVJnmaGAz8v6n1MHBymqWbfb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yJLbYoAgVnnXJYGuKwc1e5KyhVx16rRR7mVmkapnwFF2dFywF1PB41vDz7QzKTQjCWrQybSxyUUmSKMGttug5xd",
  "key1": "3f3khAkT8mAqLrHU68pqUko7DfjxfqEcU4MjE3rpo256mk5wgc3fkYjdh1Yu2YE7fFe17TdBE2HaPo5iyzvZNkuS",
  "key2": "3WxBXfvXcyTCSenFqeLs4MXpeJXSahM3FuPBE4ZTgSVC5igRReYsfXXadUmD44JxynDHfu2iKr4uURZaVa3orAhF",
  "key3": "5EibEPVTSjrtrppgWZiAHYiBNY74Y3EwD4nLb7fQrBE1QdEtytKBuc4UStGYRCy5YXjS5wSvawXTXz1tUZkrP2Gt",
  "key4": "5cUK8kHuUwLPC6iFT5W9deMr21t2qP1hwHKyqGVvVCsfbPbPk265KWgR3xDnpWUM1UstuQoQ2LqyyaxxBCQbkN5D",
  "key5": "32ZsysgsHwv5fKwaDKvMVp23TcGt7ZRRLyCbrGNq9htdA2AikQTSh17h4X6FkiXwz4wsXh6wjeKVfeicNCbKYZ5a",
  "key6": "4qa4mr1TWouSqkTg5uvpBRFphoEeteCYfs69TkepW6281pfo1jFzRczvDeYfpoLEpMttXEmTeKdZu62AKknH9Y4M",
  "key7": "2DyDFohzTyazMUTXfiEAFRHiZ2fAp3Agh1k8BaBH8TAPFJaF5rPN6p2DXB5A8nWjVrdJjr9S2jUVFM92q6ZtL54W",
  "key8": "kv16u9pNRkQGEFPxjhizch5ptNM9zD2ZAr2nYSsdDQ1a9HYbNr7Qq9LYkD8DJHQKGxgUh7rnsBQ39Yr7ju9LZFd",
  "key9": "2meKag6CS3eBFDXdPnKymzsoAm9uLAey5C9k29oNdmax7MgM57qJYDDcdBLsZQmNDLntG8BwCFrqTLKN7m2vVn26",
  "key10": "rwcDPWGvv83JTdSRNJDktLWdwhkSHprj8hK52gX3TFiTdRfZfoMhsx4X36fJFrCTerMpvg82tGepQuxHn5NmcTB",
  "key11": "5Q7LgffvxAtLMPU3ik1vspL26iSqyFgfpmfhuJ3WFdALpkedmXJGc1RQhyUPXupAdsvFwXe1xdkr74d6gQh5fCkS",
  "key12": "2QyTPCTLdDp2wm4ng48UsHCH8eCjbgHoybtL8DJFg5qMNuJBa6LiuB6a9hVkhT9w2o9b96U4Qk9EK7C5tUiVkpqa",
  "key13": "5M9GeSrNWJ9ztpAiHf7th4ncjmeTBGzaZiBaKmKUSEUjQZa8gtF8dFo1dgSjGD87natVJYZYMNd1KVew1w4njH8u",
  "key14": "3zwzVSETkQuGbE5MNerhD5aYvqQcJMU1A2Dz6Qt4AN3zeLXYhkA8b7YgR12bpTa5bri3kd2667z52issXvhCymfa",
  "key15": "4vokTeMRVRpsfVUXhWozYVuB9iaR4xvAQaQHhxX3MitUxExyRsGu9LTfEN1nutZfPpkkJfprNGXyYFdxiGcEHqsi",
  "key16": "5a2wWhXxaQfGf7oTqhQYYQ74qFYP1eVN5FqSGkQYPk5DoRkUZuSUSdrMWN88sgBiUoTnbkhYfPKFEi1NntBG5cDw",
  "key17": "4QrqBiBfbJhZ3kR3z5fKyDwzeGK3xTssXMqVwRaBYP6wJwpXgJXXiXpNvxGYKuy7rWXd4xwJg6VhdFq9EsrETKhC",
  "key18": "2uaq2dKu4f2YMwzNscWrsDynEkpmM2Nt8nKTRo79qGCJh4aBiGS3ZfPESrrpC4VDiyfmippKc8wJefgHtnZJ5AVz",
  "key19": "5N4vzjcnf8VN7obRAFJRLF9rc8apmveTv54FqYnV9FZaiUKF5KbwWWDLPdvCpNSe7xGJevq5HJhp4k7Qaq9ZJSBs",
  "key20": "3qzazBGz3MSVzraYDiAJ583nZR9bnTpZezs7JRgdWPgs3Szp2H8NbkupZA62zGRuhwLhSeFeB19z1dnpGQxePejb",
  "key21": "8WgKckbYTtDEJjm4BRvqCQ8tddfczCwaBLLvbA9gVbWH6fqPbNyowf49pdDSWJiKAvWU3HVSPkRKmKiRY1NKisJ",
  "key22": "5yM5jtUzPp27dGYTXW6Qm588djRRYbyzy3upbaB87ic8t7sWdjVjg6phVCudnFgM2KFNUnmMf7VTKtpJ6inm1hD",
  "key23": "1276fA8CfJwv7UKXn73sJ31n4cSu4jbRZts1wJogasGbRBHJiYEwt9yQEpkay8mVyEpuyMynJXzi8inzog6SGpcu",
  "key24": "yYq1mDvLBpHPD9MAhoQEwQRdnwQabA57f3SVgxdi2xH5Lqufws5bKWJzTKSVvgYz2jAWLGAKhbA3v4eq6ruQr3A",
  "key25": "5bLT14Z8Y4wYpKCUJGTuvZxRptDE8zHWZiKC7zf6mvz59AtZP7wWDZVAzZpKzFTF6c31Ja8zVg7WYSZYjFKDY73Y",
  "key26": "kAv9i1NbBS3VXCPb2vZjfJcK9DRZ41yCucQPfjrFUG9VGZf6oW81j3Vd1ZJnmbD4gipAYToK6eBkozSwsjA2Rtf",
  "key27": "5mcG7J686w7BKtnYx24WohsVivpRuy6N3ea13Ynan3T9fponwTwahVLbPZogp1sf82F1AfWntGekYTcWHtUi2f7i",
  "key28": "5HPSiZwbgmk7x4eGSJMa4CCwLEW9T8wt2w5fJ2CpgbB7zgzc6tcMXUEZV6c7bVBi8MAeHTpcjJ67o9Psyd5jgccD"
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
