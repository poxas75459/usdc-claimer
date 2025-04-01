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
    "5cHqrRR31xC1VSUa2T1AqLc8cuUX8nMuuKsUuYGZAjWYE2Knk5iNNWFmPoXFpNgWx6Ei8GMhbry1TWMYkQhPeeav"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3x869GfUSxEkVEZK3gpR8mq3AfVPHZ8zD129aERnQhJ2dfeG7q3hCCxnX6QQTb8H1V1FWn35yKMe3YfA6hEayJuG",
  "key1": "2V7WQQya83qPddurfHeyx3N1edn3KrrTNqif16ow7nLsPbK5GmyJXbTs9PqrfFZSVg8LLGCQidq6krNJAPLNZy6K",
  "key2": "4gDSSuCgtz28eDVe3Tb1u1Dzu1y6Bio5yCiyE3QaQxnd6aS3cv5ixBiWsQdnPFjCiJTo548V6ff5FsGdpQme5oEz",
  "key3": "3YzAD3qb2L3xcNgoXrp6rhHGuQWbiZDesnQfhUfLRKaZH5kC9Bp5q5i3kCtpeF7dgSz7tfXkttw5pXuAX8MHPq81",
  "key4": "2U5pMPXRJnnwNoJm4wszXD4UBDDQPBUJZ8JHkv6gDGNJNKKRcGFZJxzdoufgEdDu9zES6W5fTwXbpA9yFbNntxxB",
  "key5": "2cpZsgDcfjt1qar4VAH5QRaFNNnAPnLTK4gpBi6qU1fCfsepqCCebrgqHXUE1vNTiNdrpwcFQvvufc46YXwKaFFF",
  "key6": "3M1aN1ZVFsjcWbN2kRAeoVnT6p6UWd7APeBfHGC7Gh7m85jCqJpgUgdHPSpEgMiDna5p4o53v1RkZj8tVHnGHZ1U",
  "key7": "2ViRekDBzbA9n8vi1imLgBqphBidNDHaZRxMsah5DqVZgncudcUR6dbptj7TdkFd28sKKn1w8AjKGWFnJ6nKHYoH",
  "key8": "Yi97sjuTjekqt8fUP5e69oBXGADbu2uEejdK1gSvpWkxuu43rDwYqX6qDbj7jcRwrGLprZAJu3gdfoGVRQesMpo",
  "key9": "2G2rseNcGndCf8XATye26RTgKjNzBHYXz5sWG2w48CmT5mm8Q3ZQo2pxtmeDc4EEBfNx1QNvGZTPgcJHQV8NMzmP",
  "key10": "4JC2uFZSiBbKC5FiU3bG7f74q7We67Uj9qqwgrkSmp5meyDD2uza84AHCbDWNH6Q46aXCjb1yAD9aTS3YtVRL8iC",
  "key11": "2VbdUMTVQe6PEgyz5XRLWcyY1iEhiTpNddTRYqhJUex8btozekN5VeZ1bk6yJR7Vu5suaH6fWgjAbc16fLnuHBkj",
  "key12": "445Ugk32KDRCKNTHwdbCurAUzqAk668rB1qeBbCRAjWUK8jNr9htReRjrsHbag1fwDC3G43QMB5JF1dSNfKh91CR",
  "key13": "5V3LShs59LPYN9uqah9oxZ3G4Dy6HMbohLYZ2jqWyE9k7zMCf6XDMtaC7T7dPKGdKAKSa8J82CRtw24P3KcZk6d7",
  "key14": "5ge3DD1jqjKWcFYmws981piKTn44VW2pv6EYJFZobKDTEidfT1NgLjD4j763RXAxUt2SRiF1o2AQf1D97Cn5As6X",
  "key15": "2drFLgTJ6xhFM6KFo88E6Bs2TU4YoUDTFphcg2AFQESgKYaGBhyHBP2Q1V6SJcC4oX2TPHrgZLUc6jdENcBvoLVo",
  "key16": "nv9x26VScSNFHoKdUVMZPkQEuTktcJhpzprrhFaMETDPxMcfrd4cmnLKXcUYetyLw4Kv976Dp5pjWdAYzJUHNNn",
  "key17": "4WKpcKYMnGPEZHFuLzhYbmHLqewis7dUKjpEAr9WWH7Q2RKTiL9BwqEjCusU4oqsXPEoc46grcj5U9xaXNDPbsE3",
  "key18": "2B2Maxmko1iM2Zkz2CvZV2HyyTsiCTsHSF755SVDke664Bsu3AUP7gbSqYgfYEhQMWZxvzSDA1FokLz3xEHB2XSi",
  "key19": "2GGHi83Ar8xVsC5Br5gdXkwGVcjeJjEyDjTz2KQMk5swtaBktws4JKEJNiMmuHwcvqn1XfbN7BbrQBSv85Jvwo3M",
  "key20": "5bCT5m4ceQs4mnTLqiu8E1iFYugFJZQ5xBZqXTFk6nu4SX26eLLyg1Vg5nQe3cUELLPHrdW8MybpebDDKQB6tVe3",
  "key21": "47j3fABAtqL71xwc56te6rTcuHa9HzZSSj5ficQGP17m1697JAX7YYSPQGxzZRJCmV8yF2haCZTAZHd6yXGU56U4",
  "key22": "64QHK9MH3WZVxrzJb7uGCV28pPedcRT271gVFU4HZeXRCnrPQEvJvUtvRdHNpuMzJjRZcKqu1hqezMo3WHQeUWtY",
  "key23": "4gge4EWkebiogd5pf9knmNkTrskTL3weNJoBwnEVENW59KCUeJyy6M2DKgPDV9t25Bvvs54FVmUtqFqZV3TqajxT",
  "key24": "5vmjonHrkL4VgU9KjMPZoAzgrEUDi5uCmNjUGmo3E1VAcbVCPtqCGgucPKSuom816uzSZZ2AG2yeaFbuYaAy9r6x"
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
