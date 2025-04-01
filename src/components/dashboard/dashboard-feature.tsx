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
    "5QFCZkG895XdAtZZZYbebZMUEL4HeEoatGF5RvKPgPDcShN9UZtDYMHZ1KyLdRgump2YLJLRmAs85R9kBQ7zTBZ5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HKZHomxmv8nZZrw85arresooyTnLU7h4D3Y2uwwQCHnXcoFB7QMSzCH7YCmRe8jZnEAL1TyzGGSkQ9o6uztuNgR",
  "key1": "4XanfVGpfiwd4vhZ6Pvv1Pdtj118GiYx5FJiPFMrmiBT3QcFyea1MqtPnTyDMhP8BxL65ea9Ykfy17bqv1aDMS63",
  "key2": "F69VvaBZKNH8yJ13i1k2YqX33uv3N2ZjAwoMow72NVeN7pd93QEK9v1CiQCBG3M6RNQxiL1r66MbT31NoeX5Bot",
  "key3": "2dPNqY935vNvMUBmqA3v3F9A8ybHeUbP64ienxzqwK9xpakf4rb3Ri6EskZVv4MzyrkSqEBuydsL5qCo9E4HPzTk",
  "key4": "2Fx32jGWTxLpZV4TzkwTi7HGhjPVSpnjLMAtBbZkk3dGXeyU5B5PUS9K3kbdnATvXUq3LRhJpCkkVa3Wqq3t4pjq",
  "key5": "KQS1EAaKcJAgGbsrhYShZPyBuP21mSeK5V4n3p5e1eSMEvSgMMijkXx3PvKSc98V8dDLhBcTBLDKrzo3cFcuV4c",
  "key6": "4C6PN4ZzQWesRSXq1rNTmRCz2tFWHCNMJZRYv9PZocjweP4vzJYtuVweVSkHbG5xJvxaszDmPsqAYuLBMmUFaqbQ",
  "key7": "4U6e8fkRhTbFcKvmaVz1Xcoi7R8wqYLAP11Y5L6xtHJtRSW6z6EDYCN8ciThtZJQms5vpWy8Jc5WXeRdkLEQ2QKc",
  "key8": "262igiR2m73BSc1DDVCUGejgam7uuUXQf1AD7TJJm1ykfAxEDvPWyXzy3iQBzBzuUeyhM2RrrxJiqW6yxAtTFM95",
  "key9": "3qFBmyXB5PNpTJ9mngxZ2gTXLk8kh9q1dMqqhuh6AEq1xk2VgNwF3FfAygPgr2U9nKXt6ACBj37mJ4KiJ7oEh9qt",
  "key10": "3qfhzLXxbvFCNAVKFbWQt3F2qPcQcidipCLkjjeGgXmXmZ2eJ3s8ghBv8dUNSTkzBbdPCLYcYgeVdNWrh1ZxYLZd",
  "key11": "52s1KXH3mnTLn7ATGyEBxgTZTsC1E6AomBpVSAD5uRdCGhhPJWDwrA7Qy1jJwdsGm25Ko7WJHpEa85g3U8aJR4sL",
  "key12": "5D4h6bJmYEijZHVfZqSto5hZiUFCMvjGZZAbqy2oM4jDpefNiaFgbFTLrNyH5UccCskTeD79oEskZQgpsN5BcyRk",
  "key13": "3EesbMgK4gJJsL7YFPMguZoeMgxRX1b2qmCey7ejq9NJCwDAj52ywoBEzCNnS4b4WZjxkAwqGRBWzjFSrth57y1q",
  "key14": "3e6X5D7RHRGSfvg2oWxHCVhxt3mcMB1H5zAi6ULY5AusE7epqYwKkmYjJELxAS9xYqCQ6hsku9GHSoiCKe8DgBgv",
  "key15": "3rWip2zzZ7FvMBGMxRJC36qns1ejCcBKCR1ndfZ5cNNszFSNPPCLrKRHrhn8DFXsBnf3XVoj6gYdbmMwM73KzXWg",
  "key16": "65DScRSuzaBXMUc7xGWVgbsKMoyBgiDZd9iJwZpFWhzGt7AaGLX48mDPH2uKBHFpR8mKKiy8RkZ8vuLxBcgoJwje",
  "key17": "53raDc7fxsbDbUTmexhS1aKoLqLr3wdzk5eCGHuK5WbDv6qrkbCy3bE6LANYuphTna9QeYyZwC615XMqfYmaAaKJ",
  "key18": "2wPmP1V5DuX6MY3mx47ocLELKBHiZCkhL9GbNTCRr85mb1ZUC9AWwjxJ4KxdEPtRaJ5RfpyQ7LEtM8Z7AiBujLDj",
  "key19": "3yuLsXRC32jW9PN9349d1uvtmX9MeCXJi5DuCCXMy9aMxtQYTK7TsNhgQfuBPJvNuNTUZw1d3nz7moHgTkjUH1qe",
  "key20": "5JJptdsxh9rWxXUAMvGenTDGpzpwJES2DxqaTfZCqUKMkxbE6gg3Tw7nhdsvPrEEDdjkBJ3Zw46naQWDDRGwcaUE",
  "key21": "5UYYQLXNxVJCyYm1xascD8Qk4DzHQTWcaNzzfp7fxXBHdriDmk992oSoGYa98FJKBGJamGaQstQ1LxVE9qze6Pg6",
  "key22": "4dzo3vNSDTYx3vS4bcEBW3fFwXgb8PVx3YbTEJQ8ioQTT4rRpHMEBV8gbj6DLoDoYdq2PcgTKZF9LBJbWvLXaDb",
  "key23": "3MvimLFXgXC9PE2DRs6Vz4MwxRri7Uk5zH7EYicKtFzZ1FcpyxgUDjz23FDYaZp88dYyDZMjXy6R5ooNzLfwqKF8",
  "key24": "iAexH8TqMgMq6bBMdXhQvijYRYrkRW8fByqavozTPAd9qAnZMju6PrzYZ1avf1wpoMgcSdcmVyrrEcqUFLTPVs7",
  "key25": "5pZRhHVSYAzokM3vhoCFA6yqTUUBgct6S8SyZDLRYZUHKpfReSPygGHV5LXhqPcnzxcAgEGkMKT8tCKjNHdyDCdy",
  "key26": "25WkaR4Lv5qpzCRPfQrHdzmkKfYz3JGVkpLc7tqBcxKX5S8TiGCstv1NZmqz1XadJ9AcEwMamiBLZuAZh29LJYtq",
  "key27": "XupZTPJ9cVSwYydfuCrrw7vVfAGCUnnDXd28wwKb9u9hRvojV7As2NzhSaTsEZNVbowT5VVAJedk7GFiaxzUwJK"
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
