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
    "3k1LN7VxwkgjMv9zsJnfJeqPH1cEdrnxDd9n4Xvg3tvjowZmeY35BCtnrHn3marsfjkzfEYWtjumom8rxLUCwrFn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WVCyYGTubZJRDyRA2N436RsF5TtWjMNtDhsYQgPnCFBa7GUcrykKKexggMeniajijMZddKFFiHTotQ6uYfHxfYP",
  "key1": "56y4two214tRwRRyAmQwtgZoBPJi3PDqeKt5EA3ggeX23WNzzpwfxtNPVmDNRMg5qMPN9CkLDtgcD9QMa5NU8HPm",
  "key2": "3iot6S5XdnHbRWu9UR6j1eF91Yj4zuX4ZBUBwoHmQSdPCiecTJzySSeEEKwGH8umfPuz9Ri8rNVJHC62MnYb3Jet",
  "key3": "RNakAZniHhjjYrC5qzuNVnC2Mh1xQ561iSzGi1XTmtodUnRGGw2iB3f9UeNLeAN5sYGxbMLUNmSfWQrTMtJ2i7B",
  "key4": "2DYEuapBJxm7odLTdo7wd1PLwTHn848krTv8NPemTCBxzjSMyxEaaUgctPo8co8SFekXQYd7xdXEbSnDrZuRQyqz",
  "key5": "5Ww7uJpT7jgPJVyxufrTSzCn5YC68CsJXTVXMG4ZigvcEbvZNJUimGMYVqbdarn8pBnxFw9ABCoWHzik6MqGZmtd",
  "key6": "3Wm3HY4uZFmNHR4WJgian1EpUtr3DWMnWA1pZ71jsVDjjc56jLLVmptCRb2wXsmSQKCjBqJRqd95SiNgogSb8aVb",
  "key7": "3Z7pGkvPcTZUAADuBKsvWZQh1VEy6N4bboXS8Sk5udLLs1TB2igV4KT5XHJm12cEwhhZMTckunhZ33o1mQ2kJxm2",
  "key8": "4u5YUF7sLDe9rQRsmUuWf8TfV4GnYfRdvLF68nZN1U7CRoBg23zymFeJVvYGp8gispw2Znjwp6LnnvGbHZvr7cvj",
  "key9": "5mAAyiHcEhHqVoJrjtnQNdKEt6yq6HGp9g9BDvuPWQref7hMM8NMdxsTQqef9AQSKjLy7Smj6TzGJ12YYfecoDhH",
  "key10": "28Sy8QraUeEFW9pcfKPWqkEdnJQKNjtJvPCBq9RACUrU1wjAjay5tdiyN73b3oDDqeMjRoMedce6r5i7T55Cz4iu",
  "key11": "4aNWj5fcXtLPgtfJLAUSBtYmobayAhjnEZsnaXqG28zUokVNinEJ72NLufWzbempDyp5K1KJdJWDw6NJPnvG8ZqC",
  "key12": "2Eu5xujPyeuGVVjwdwKDJZV92NGFpq4btDN4M89ozrSxu94u5ZnEGfGQWnpFHJqe7SXQ9Wv8wXm5EYuTgH5QG4r",
  "key13": "5PgkA15iRfT5PLNkSTDbmZgeHVqGMrwF3AtbgbZZhBmrYa2wQCsWLQkBMZX7eqZSsBDgTNqpk3CM5it2625Fc6LC",
  "key14": "31Jx1ams8wGKgnjVAa54BKh27RMA5hXqzdt9JBE1nKrkRKg4hgsGi3xoNAxT9QrpSfXQyjCSDhbKXX28EmPwEmKj",
  "key15": "2eg36fQArTeEQytHFrFtp9dDjC6xXWKzbepiBYoj1rsmmF6fkbQBc2cZ6nWN1t3WPDDKGeTjk2uaD39MYneqJXVx",
  "key16": "4mvvetG8pwToCfuYb8wbq5z4fRSdSkbncRimfuQ2wAVZgxbiHK7cMimHnL2CXpRDVUrNZMwusFMYiNMub4bREP1",
  "key17": "3d1RwF4S3VYfkvEcABA62hGrGZuL3HJEH3o9iAEYrJQgGwPviLUiW5dz1w5zaKkVWfg6Nk3q2UpZLpFMeTgBiUe3",
  "key18": "5pUTLBuuRNuh5B6F1KaV4jqAh1p1XDUCvfRXq32J5fb8FMpvhYZuLx9bVsA6trdqZtgV5zJHZU6LaQqfpA1iqaPB",
  "key19": "2reAvzbn4UxSk2JqWC83o2C5r98s4cjjfPfvnhYV4a3FGysXC9rhtmtLjERRKR9YzaaqUiBhToJ4fjnBi2XpbV15",
  "key20": "4LqHTPo51dNfDdgMuJ3BcqBLNvivQBvyXPuWrQeP6GMPLeQHS4AzShrmhvVSbjC7dh28bkocEYCu1kDu4g3Cos7C",
  "key21": "4qmgcq3VaGGVBPF5pKSFn9XwMN4NVgrE53dXPCFT1siE2qvvSokwgAkD55yyBHfgw5KQMsdUroHKZmyccDzamVuB",
  "key22": "qA5px8d2HjijT7juTxX4gd5Ex2Y5VBFQeRV3yjjUiX2P9tG6vTRkxGyVihYwWpxddsAwjfjuGxPZqBz839PXpGK",
  "key23": "3a9oYwhsKNjLyGZMrFXvepeXiNzFema434s3wqHLvJFtgo6J5wdSmaAiumLptKFrU38ZA8LvEkexquUWFHWJbqny",
  "key24": "65US17kQvSQYxg2wjntf2mAs7NxXYzkp7xRSsK78rgjKP6i3JyN3eDTwkJ38mgpX6fsyunJ2syEbnhUXGEiYeiyz",
  "key25": "98LjYAaxkuPbyWjjPgx3nxs4wY6beuk1Ttd7WS22RcT1FTf8XTCZD61kbQyXMZcpnH3XoNqk37jQrRkMiufw7HK",
  "key26": "2SwhMxgncwK6KyYH9BCxdkHhdVXYSGaCaYd3WXeNegyyeLent21uXqzM529Y6LqRFbfrof1hEixwPC3TXZmf4Qtv"
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
