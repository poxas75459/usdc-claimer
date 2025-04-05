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
    "5RWbfrkBdTNYVBAqgqQYB4XyHAsKaCyAHCduhKbm24AYVXBF4jrTcvoNC1JfzuA7rKznvs7LWRvMx9H465HEuZve"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oFBtf6gv5tge771op24mDQj9DVvrFSMT3dp2qN8QYn3LNyi7GKvkEepG5TLLbLA1qfQofddgEVbyWVuwUx7dkwA",
  "key1": "2mt9ZSaAutdQmSXS9YLtZECz4zw5GmtYQrYVmpmyQU9nYVdtAutYQSyPuVAKoJYS6rh4NBx7SnMCjGnLcDKHgTbQ",
  "key2": "4yJ9eCqZbnewsm69sJKD6Xz1FHXBqY6oHLZVPhYFnMm2UU81DBetxa6aSzKbW5vjrsCahQezp11aSuexQfq8Qfwy",
  "key3": "YX6CARwpeLFUvZhVL9cnfM8wNgADdXhVSC8boKQpmT9gfKXBp9iF4zhvbxZ7AcSnhFEocFAb4iSdX1yZ6sQxZSg",
  "key4": "4fKJSbXdH8d9BC88d46QzLeSHux4JdYfghm6LSvKNZcGDPj4yKcZz5BDaCkcLmgZphJJogWo9a2wBGxFAPWuTaTp",
  "key5": "5kM4GzQvdWaGwaPnjp6aSjZ9Yp5VoM9EBKsAZvP8rpkptPADGpvFBzZ7EnYc4JnSLvG6KGmeKP53NZWmWxy1PAbS",
  "key6": "4uwfRZyXPVWyH9BaCrQn5nWzBUkkfduv7bMVrW5v6V8BoefQo9yHCDGSZp3ymrMGnz39m3UAguq4kN4BSG1UF21J",
  "key7": "3XdXnCqjk1davC9HBeT7u6QoiVeHfTb3YY4nm65qcvJf1zBhyDt3mwe3mGaWu8g7vQjKvSbf4hAitSGVGuM5ovx7",
  "key8": "2fNKDE7pak8YJTcPunAXHdRoVh3AN4ogdcT1r9pjmNBaKctg3B2X7yeUs1cJVALnM6H8gAtXdAzHwCphZqhJD9uk",
  "key9": "LJwRdpabPDwL7pj7vg5n1QzQdoSsfTFiyBVFchtGdcSFKWcyK7kUj5CsZX6q544Vb9DfQXgPPQCFi7QN5AaMuHt",
  "key10": "SDu85Kux5wWYFYXeF5dFb8gozWncsLp2Jn96ckFmfnR4pBF7cL8AtxHbGidPQFeZCXajFh5MZciXTR6DTa6pd51",
  "key11": "55teHnBf9UPPjM3ohRE61r7iQhNPFb9gcjcFr39AWBryX9Z17ESGq9BxURvdaAuyMFLWZNCctrxQujGrv1bzVubK",
  "key12": "55JpNwcpFi5B159hDymSNvBKjPWJsEDHKLpeLF5wqSvc5MYKpbNm5ze4iuxCSbjoYvb95BVCQmaHJV3FZkP1wMhY",
  "key13": "4RArs9Vg3ADW5JUQmwPVrcgsfwGagPWy2grray1mTi2nujJPhyCSXR25zJgENDzyz7mymyoGWjBY5wz7n8cRGLLi",
  "key14": "288PgpiEPnXjaLvvauvrCAeGkMYHjqJRb8k8rrGUc47oXrB2Ko7GuCyTt36aLhf5W7ukFpsXEL93FvCd8S3CKDra",
  "key15": "24mkp4EiNGguAzyBKLbq6NkxJZhf1SXtv1xucLiKe4ADPefXoM3R1cv2iEDLWcvUfji24xcxfTpcewaQQdPpN1yG",
  "key16": "388JHMTb1uksS2AQyzzRNvRtccHNKtArVG8PNoPCNxwJ8XnzC6VbUpBYysLaMuD2ox4UE2Wha2noE6nBAAvswALQ",
  "key17": "b3R3wJqyt2qcboKThH42H7WqyruDwCh5E8VDNUSyrTsBmHc5poyPQWttjJtXaUVWGrJ4fVeS2aphpxFA2eidq4C",
  "key18": "5bbRZuibgc25YES8rVWmJvvnZaaeCTxdMqH8FCMxW61ai98fxU1SKaosaqtA2vyBUCfrCXVGVmqE2SsuRnWY6UmT",
  "key19": "CEMRGGiwVdWHSzue7Xuk1EL76euTMeYK65xSA8UqQWjw6nT7oihNdqx4sSTvuQ7cSxqpi2iH4W1gpzvHfgkHaM6",
  "key20": "24C3y8tc4NrDLX7jdhFdx5ZhM7xyL4PzRBZHd75gw7WNmk9LkpTLS8MinmdtwPPDhT78mvu1HdF6GKKmAWwjNRQB",
  "key21": "3RrCJLPQBRBAmHXR6cUnJA4AER6vUcVB2mEF8YJPQRvzi9cok45J3uooi6W2gZMk1D8x9Lgdk1DHAwhKd46RQjSH",
  "key22": "4Wh3LJmxH6j4VyAkhagnbfEVo5wwnBaFD18fi2Q2EZiQ8pgQJcegwFjPcnGAbZGT8WiTzLpxFRhi7aABeS8pPUxS",
  "key23": "2CCKYCTTCRpMfAaNWZcWVLXEpR5iNPYzYPBF193Y8WXpAiF61T9BWNKBfh8fYRxH4sr3HtKby4y8mXN4g34uQZ34",
  "key24": "1pe4rwUBYdZSX6ofQCH2ni18ueGTuaRc9QYYY9k8Wn66mMMWz9RYJnZ4NEW4pxAo485PqAbTKEmCBKpaSM4fGhd"
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
