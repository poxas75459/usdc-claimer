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
    "5T4qx3j1vzTdCH7bKnNKeSTvFujt4XDWkpRuCEmK2aZ8Q8WMJZxuGPrjy1LrUVDRBYW1Bv42badfjNxdyqmJqziE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2noGaVkYsKgZtgtRAgVLJe3vdxnYo4h9Hm2zodwdYoM74DCmLFY76wVANVL97QxvsXa6ZcX7tWdNsv1CaCEjJdVK",
  "key1": "4JdHr61UbX36Vk9e3Y2uWrSB35SSyMMRSNscvBJgqHW2qpNBbtR9TgYcci9b4aSx8s59BALdzb9LFgtM9kk4Xw5C",
  "key2": "4dB4NxYvFsEDN3X7io9XuyGo3f5qc2jSU64ui1rssbm3eALTtbqcpF6a6isyCUDF7u2xKbGgZHpg5ubGUoa8wFaA",
  "key3": "4yqmY1N8fYDASWUxgYwMUhYtWiaeU5C6gPixf9iEBNfpPvPmj7H2PAtN2dfLMzoFCj9iSRGHMmYKd5PTxYgs6sbc",
  "key4": "5uSB6gLccTrhaUQ6Yd9dVLeQEYGB7NUypMGmEofeF66ShYniChDdkvBpKNVN5zUdsiYsfbXcZfMyVfdooJYiuczp",
  "key5": "w5QMZwwuK7sHzPQrZKsWkt6pU4g8dUapnAQDkkDg2v55w7sZXmKwHnjtvzXZqy8XWtfTWLjvwU7R6AzBKufGeTa",
  "key6": "3UUGWNP8K7LSVwYUfdJbQh7fFJ6gggbyx8yg1QT7bHjLeg5aNXKknidKHyRqr6Vnn4gBU2aAo19RWiiNDN1TFv8H",
  "key7": "4bcZVTRKu6LF7zt54gmda9CfMctQk3Zm5kkTQy9ZeZ1J8oztFybjBgT2jYrWcsmydxXK35yFgNj1Ba7JLYguyhQA",
  "key8": "4KmE354jj2Fxt1NvVo5KC5Ex6uctrfSRv49mDm3tab3DmX2sUoxfSuinTtuGGNm8dBHLHBb4E2Hvx9T39ZUMTzYr",
  "key9": "ALPQr9TYwGHq3oLoBHL33vxqstVQ1HRq2RSzu682bg9kzRq2sVTGNKqdBAxGFaYVz2YYXU3sMpLhe2QtJnc6tGW",
  "key10": "3nQxkSsyBzC6d8HtnzyBCJGh3BPn6E5GofoFcvDcs6LBYXSTFJCJh5q7BNUNmgHHr7UpRLEEgNhoBMUZrydVpQNH",
  "key11": "2RGZHtfxiNw8fecXqjhXASPFAarn9F7946BLYx6u7gKB7EpB9D81TkhLues632ZeKFjyge2pEiPDMaMPgL3yjEeg",
  "key12": "4px8AW967EYxfhMN3aFsKqrxuReHQ9QShztVaWbszDjQpjsieVHRZB5Aq8v4EhspcwsFhNg5xZRFxrRYJVyZSqx5",
  "key13": "5WtApdsxVF9MNvvWcGoCsNtMdKGhnc2RNforGiVkXXYUyuzqt4eXPHBGhxbi5BEQfXtmsKsAy6jxanGAC9mNT3G6",
  "key14": "3fQMiJcR8a8QWNkB5pS1iyEZzyquivnShuaFjPoDMS1JvgdwxPYx1HKU1axwxSiu5P3au4SVDYomA5nLiA9tGjzt",
  "key15": "4YtbuwgSnWx6A9hzvHParb6tYumL9kurCY6XfHq2tNBygnCjf98MppRBXQj1we5ZZoYa2baqEi8DYhFqyrz3jV5V",
  "key16": "3XJhZefao7DU58kK5JrQRGfAdzXqijbz7oABoT35CExDLowGHS1BX3wF3YXqicVZgqKNRyxNFnaoLbKyPwcGU2F3",
  "key17": "4a9KDscmyWQGPCgrST9ao3MTbjR5hwwRFdkiBZ6XGLuEwmitWthSPa14oVBZihz4skfb22V83L9hpY3kMP6AXuB5",
  "key18": "4yZrnxqaH3ej2p2yXsKD1SviDPfD8299ob8hL9JN6yHTTkj6ZNRFfPuuH1f7GUrKd448tbqHgNkjy4i2f7PSviSS",
  "key19": "2Y6pNWWxJsCDFgzpMghauZiwGGPTi3qttdM1KXrKWsrPthLFpNBBp4mYMaHsXCqoZyovxGAazKJvfZdwHLQH9EzS",
  "key20": "5gR1UotYtkkDrEhBSuU4gzxTCSFNBpDWD5r7saUBsVTVWGetDnGUrpAsuTYn7QtrkZoGjdRxNb78ti5siLPFMThH",
  "key21": "6178cqnnoL8ykyWje61oUnfXGBmjDuXopKbDHGg5SK2RgesYs8xCG5UMrsf2sJbSCctysTwXzUhBk5H5ZdrjKPGf",
  "key22": "3AFY3AYWFLSdxkffkVQqK6o74cDLnc2NGY29UMVuxLk61MC6dkMPQq6nTGCiNsWpV8Cqqrpv1wrEW7FPpBqjaipL",
  "key23": "3V7TKFH8zEE4uWzZhLXbqKRcmzSm1LrqxTCAL4GYJ74GC4xgAAcyxtFzT7q6nm4kSVPVSouyocLWGnrhqWVCTKSN",
  "key24": "47UUpz6GWAWBpwCsuWKkq6RgskGWmBUAqSmQEzj2sFeJm3FGCAExo1YEo9xCrAAdJ9PUjPPY22x8weYqQEuDHfGd"
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
