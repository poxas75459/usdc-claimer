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
    "3Ym7LY7Km2mof4wGAECdfQTAwGbK3nkUYcPkctab73F2SdEjKdixXCzQ3zL7vdcTja2HgmAEUwy9bCz7b1Wc5Gzt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yPk25UDdK9irp59yi2UdYwxUEajNsxdd21J158M3Ww4R7gaiAfqQ13AwmkCH4VwUF1pvCAYyuSYWa6i697jMrK",
  "key1": "4hTEF4eefQiqbfm3y5QynpCHVojKAd8nC2McnwoCPqZmzZh9YbynBbH17JqgkzKBfAZdkXirKsi44uCyaA8QdqV7",
  "key2": "jfw2LvPJgVJVi77T8khhMKr4nNdzTpMiRjprhGGdwXwFPdc44Hgr8FNcUTeqPZVLxVhykg3KJfGxGkXsRGprJ6F",
  "key3": "mVK5pcaH1JsL5TP72WMG8TP5Vwgp8MZTdSHkAEcVaUt6EBFSgtrmP7947dC1rKo74kP1BysQHXif9xmqpH1AfbD",
  "key4": "25gYYVvZM4prUSEn1wawQuuBV3bQy5GYNbucsTycNX5UEGuz43gxp6VqYshm2AK2EBcuAaGGaNNj8kQrpEAtnb7c",
  "key5": "2541CCpHzxEwFrWVegfYcyBX5AmKruRGuGrnxyF8osnfJPKjWcr69SipdpHy1e6gj4BqnFhnTicpnn15mnF8vd7F",
  "key6": "3cdWdstQrpPNqdNuEETnStPss8v7Pcu2thE4u8mRKkcVh8EuK1XXeccg22U3Vx5zS9dBD9FbvnmNdtceEoBhCHsX",
  "key7": "2S3UdgmsrNs2XHU7njnPiAXUgZTrbqGyWjGZwyCa7nQyaocbgW2HKLeXLxmpDzY8FJXLy7T5Pa4BNsWvK5CMLw35",
  "key8": "42S2x6D4GfafUDKPo3T2yzvwmazwc8WK9As6AXQRVzdcTTbrxYVSchcdE1BLFEk6nvptEb8QxXxDCmHd3NZwE2nw",
  "key9": "36fjGLWGgGaKPYoAzXH3xYSm6oBJJh3BF1Q3T8g4WVSMbsnUdgGKFUqSvrsnff1NhRSFumL8SkeTTwGvmtV3J6Gr",
  "key10": "5eGuvwmwDbbatr1c1Kxcif82b13kXh9S7yK1A1CvqvUzYcTZBZetuhpv7fFkJSkt7kqHnaNWY2ZSwfJcE6tA1dEo",
  "key11": "4VNjoRLPPHNmWERSA3b4Phr7ry5JfjTuHWrWVNN2JgBrUCcVZ5fZtPGDBVNwicTnVYUf6gt1mAADDwA92XnYTax",
  "key12": "3NbAHrfF4uXTvphqta5J73M8VJtuXi5G9kCYHjodXjLjmycGbZF7ginYJWUs5oHRBkq615BkDzPbzWaoLREaULBE",
  "key13": "65vFu54dFxP8SmBDmNeThVg7LqsG988awbi7p76uWDUr2wnWnnCTNn3x3eA88B2DAJEzxs5CfdxX8kD3bJey9hos",
  "key14": "44cucSqgHCJHyVpQadk9hQ6hR9LgyNwiv4Ddi9QmYNJivKj4jVET9UwTsV7ZrC8iQduVApEBnMvBcwCKR2hHHjHb",
  "key15": "o2Tpqs3xXgVREn52cSGAws3e9KBCXBaQcvgM8xKS8oVhgHt5ipm2JPbMdsgzHGe9kA15NnMQ1Gg2TUBHDzTxH8V",
  "key16": "Vn9yEV1ygGwTT239FgxNwpGaC55iyXgEDAUnMaVUEZHXkTru8Y1yhMXE2QDBKrtCnD49iuDdh55jHboqpYEGcMQ",
  "key17": "5Zz4CktrCM63vcUMP4nGK3QAqxinqMr6b52bFBFpmSTEoNBmHtVQr6bzzW1WUHoHyLV9pCtDEXam484qdsycW732",
  "key18": "2PEYby6jy8kfZTqnBtubzH7PV53A4yy72sSJKN4Y9e8iBhiKoQ64bejUYEDsC12uVWu125BUkHHwhz7Cs2TcCJYh",
  "key19": "3pKpfzbyqq9uPwJAc9dPNyfgkEbGBRG1zXqmJN2NC3kcWD3cTZciGLpMVkHvvnxwxtSHVikYfMuUwVA8JXRA743k",
  "key20": "31WLjjFpMMAmXHrCCsGS4ToqEkmCZf8evKyZPt8fGQySDkbTPVgLKCBXC5wD4rnKtFAAmZrLAUhDLxDxuNz7uL61",
  "key21": "os1jjfAnGZdEjQGCFAmnjXoNEBbN5tEQxHg4pEwKk5Et3VkVcN1hzT7rYsbhj1JkQjdYewYcXjE7LaD2cDLFh8P",
  "key22": "5a3Xx4KjGKdQDop4SozELxka1dTw95LpEEwHFXnDQ3x2VRgDDcPy5BR4vwxZSpeDPXpWznZiaddtLp994PU37Xv9",
  "key23": "a7BsxceuFm6MGZciVPTrCFjyFzv15T56DS5jJjoqLGWiVSCN694ZtsSQmXdx5G8LXo91StLnTwsHbop3ByTME5j",
  "key24": "stKQZ6BDqgFF8sCWLnuAT6PudZre9Z5tZvFEb4D57D5bqLBik3wD6LWqmYK8uspAJNHnnUrXitYtuxaLakyfT1e",
  "key25": "33J5S4xENEmys8b2hNo2SRLrZfLyB6SHQRm1zvt84fq24mXTjW6G2Q7CgqjiPrTN5oPzWrvp4DidxCjZdPEAGs75"
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
