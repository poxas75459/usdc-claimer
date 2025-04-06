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
    "2wqEv68kQkNSx1e3UAPc5XUiRbzjkaJfKxSmumE4qUHUSt8dhJmtaKo2s625wARAu3Gechgpr9tutXbZNN1Afw7Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3myc9YoskgJVPDTM2Tg7QhJ8dm9Xt5nnjhur3dKNSU1noUFA41QH7Q7Vppf8C5UnJiHEY9pzFTX7Rx2RH6sxuA7W",
  "key1": "23BRVJschiXiwJH3QPz1qkRP1TKN4ezY5DqPv5ENtPbyspcoSSMmFqHxP8UFbLe5ixSoeqhaUoAmtXTrmw9ptdLk",
  "key2": "UzPTJeV4ag9zLkSRYqHNxGSf1Qgck5Zh4v8yzLkZuu5728N44bqGFhztn5t3S62faxqkAhFLNbfJyKro6DRwx4j",
  "key3": "26cyAGxtfGW5fpto4YAVgG3K3qedNc7wSxGzVdAZenMetu7ZAcrmQznPxYox8NPrewZf4C26SZZfCmUq9fhRTnFb",
  "key4": "5m714Lg6Ly9wg9mWYg3JhTWKFyHaP5zwJ86cQwBat6a8ceWBThpr1zHaMFsuHeWrLDMGESyQxqieHoEnQkGCryYb",
  "key5": "D5kwMB76nwwJjCYLCgK9biF2GeVDpfoWDc6omEPKiRY5jpojt6YFiRAcTBmKUvhu2wv2sAHhRyJ3zhfgaQJHpMM",
  "key6": "21vHuKuhyFxmRVH5vKPoKTgJ8vW5KDLPS3TXXYqfUaMsxhSaQAH4g9AQuG3yMFLYPxuj34bu3pDuoRxCUfxXU8zF",
  "key7": "5EP8qeMkQg3KxVPwoBNWC7e9esP1zHnDbsZtmFKNfE5BxUuJfk9jY5TA8pyMMNiNvxJTQ5ruXS8VXjJRE6ci4LPL",
  "key8": "ZQN8PWoEDL7rJwpS1V7uc2qENKskyapZk1QTC4yaEjw16mpp6NJjnpySk3gbnrLF6dNGBhgzhoYcMyymqWAAPNA",
  "key9": "2EK91AkqMfdNorfQVmikrhr18w46XRaUH9KkTZUsHJxuQGGZKt2yp2hZMQVVcvaTHsmbuApCYub6AQuusb5Svkd6",
  "key10": "52uZ4kjQ1NV2P1jtRminQyJSP8hk1voiCMqSZWDxzfJRTEu64Wusnd8W9Z4AqzdTAngpf14Wj5HHb4BY4nxJnQWS",
  "key11": "5QJqg9QzhGbzVgFQScikcnaZ3di5RUjHCNKwNAECBdTcwPYdvtQWJftSopFsFgrc4FMvAFqGYnJpnmQRmNDd9Um1",
  "key12": "2ub76aHH4Ge5mebBaWEXBQ57GCxcwe5sKeRWrCCYfMnHQR4zjFQTHKswbpsYRcdrDLAPZmsWQ9CGgLqr9w7LdqG5",
  "key13": "6gEuKjFY5VHNXhho5SfvgWFB9MHTSb1dQcxByAJSsB14CB8Xu96iMag9noh2UyXJJ61BUcm8i9pbwgdvgi32L6s",
  "key14": "2TuRo5H6P9tybVECGKNuw5nxjZ4f5kbuZqq84JSJFDEm2PxNqWUqZx6czHpMarZoqNFfy9cEn1YUa87BB6UToNfB",
  "key15": "3FxQtPL6q9upc8diyxATtECm7smF1fnLq5RGcvyQHyocA1whQwQ3dpzV7B39fM52Z1htyV31Ask4tYKSifn5UXVo",
  "key16": "3bEuppF2UDbj5XfjgR2nQi441mGLiaz3ZJ991uAzCXYk9eBmTKyFvfp1LsCGZ4td2QMbdGmVL3skqsaj93cNLFtg",
  "key17": "kvnGjcD1YzRj9xyaHnn7zW94PDQQCxt3fJT3LHbnsZFeAhyBusJ8W9uUFkRVNspqsR5ByUaVXjNjKz7BEYMHvHF",
  "key18": "4HEnUS6rW7sFt8M4Y1wvSm7dA833JwQ2uf8Q5oL4wYQey9Y82PhDyP9Aby7DtjN2EXvUw2Wgy4eWHdhuECyVaiQ7",
  "key19": "3CeikqLRiWtt8SLFjZz3axyHnqWfq3cEZkV2ci2f5YLJtLxfWZw1cFC9npdNwm9JvzffUudXYSW5E9LCFLi2NCTs",
  "key20": "2f9yfHn5mRH7YQiWkcZVT3gnDxqsrRmNbPCQC7quWupCt3R1BJGxd4iqQRzpmuZMu8S3g5KvbsX3JEJx76EtTmrw",
  "key21": "3e8RBnhEXjxXwwRton5aSdjtqgrEjZjwT4Chfky1qNAx2ZB6AUS5nFtoN8Q24wvYxRomjMAtyTMeq3xuZWYWATj1",
  "key22": "39VRXnKS4w6BjZ6WUm49kegtoUgV4uJxcJik1SiJhzPBGt6Wv2o6DGsdQsQRPvDmfTvFNaiwuMxHtRUPrvKeUahc",
  "key23": "5ySdHbMoNwA4qoc6QZ4YT5ZcX6vapXhvvawx1aSKbtUPnDgWaXHQAKnuaT77eMUkcwScRmmM6JcMo4Uvv6cFRsLQ",
  "key24": "5mJXrkR4dDP2FYC2XzmrT9SWkLLg1vZFuphGotjmxe3FqP4iTtkBPpo2tQBQgjww1VJvBQh65RyL7UQH1YZBeZTa"
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
