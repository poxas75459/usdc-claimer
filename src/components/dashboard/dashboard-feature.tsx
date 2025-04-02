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
    "5Dtthu5ZJaBeEw55oNUDhdsQ9XfaaNYhHt1fWGdQvYaFb3q7Yyj96HwKuAiTekcL6XBZJCmmRq888uJGGYu4WsUX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3g18jnEc62kDAJaxSBxssvU1ykb7mjtEVUoGa6sn4yuji8GdTzREYpjy46W52vtJDgBqYtF5ebxNCk8k2qpynofj",
  "key1": "2NGpWfrnxLVsRNJnyL9yscdNCFTEydHfVntrcYnXuRgD8aQRDxGLYCeo9k8pRjRTmbZzogzRioL1HhXScmb76Dct",
  "key2": "2ZDkxwDN8gDjtUqeatdHUhAp8pkqhU4sm6CsPacTnsFw4mGKKW4Ae4mK6feFA3X1xER5Tx8R9ugg86WirwAny2pg",
  "key3": "rTVRENziTgDmaY3sSpAXKG3dNXrqYjk8qkjFArVKk3yzEtHKZG9J24TLP55afkRFfiZqhF1qPRaRpTDc5RSgmkv",
  "key4": "5WAeR9XpWisLTGy8F4u2hKdkk7ZX9E8aG31J2pJEXFrqt8oGcC1R3bVUVvykfYf5Ywu5yMwjy3oKBm5ENtmPDTkr",
  "key5": "3dMbw5qXvrJmdJbC41jNENZjeqVUWTh5mCxj47qRQXrZ9JwBtBSQ6sWrJhHviU7knXBWzJ2FZp1EC2xuVd4Z29p5",
  "key6": "3qwUrWooLwjUrjSSKqLCsC1gRtAuAawM4om44XvMui8V6affo4d9WkbaimsCJ1sSYcBofYRd2cBke9pVsx1Qa4hZ",
  "key7": "26YV7yP2KadKpJodisscE7C7XVR1h1UR2tUrAxxp5U7WrbSAmdyjY7FEHFquSQCFe6uCBRBNY27BEhc5QxP7mqn6",
  "key8": "g2eJ7JjKFMy36gHpHqgfHcbWM14uy1hKPg4uowxGoq4sUiZNSLgptdKv51Jia3YpNYCtYhYY8WUQ8kxWbnnxAWv",
  "key9": "4KAtv621Pir7BboMjc35Hfvms4hUeQ7LUmLShJLmq8ijjAQdUhefTwn6BSDea5DxpgCBPvZ3EuVGWKa6T9xhoKon",
  "key10": "4TCf5PtJN5ibZ7nbfaBu9khusW87D3uLUCgLQC78qzACuBES6F1kBYLwtcKjdcFw51wGyjBdEAXqc3w1WCfdiocX",
  "key11": "59FrMnGQS2fRD526TLsq1RAKL65g9qeS9PQAoUVefbQrBkCN8hQ9NwBVkyMdnh8ni9dkHUroPD5fZz5dzBENURTT",
  "key12": "3XCG5bU2uRZsWNVbskcZ7wAoVTmRrFJi7SeBVK5paRE1d8zBxWE3hvoN1oDCnwbqonNHjXLCtrHdzkdHKDj5Mvsv",
  "key13": "47wQKAZvUASeRA2W7E5CWCyUWVix5eX3Xr4ZvCrcDCq2N2tym7RuB1obkkwVVXWTo2jVgF4JFHvFzknfrQhtKmw1",
  "key14": "2aecYMH3B8vmk6vQi5DKLtGAnT7Y4e5ed3nr9awkikyDd7LmXhTn2h2KP2fDaeBkpQrYmWDtPAgM1yb3JDf5Jqsc",
  "key15": "57GkZXJRVxxrVW5tM7mff1L7tY4Nuy6VFBki1FUW8AR58ZkXQiDnWS4AoRSwAVsHap7e4NVDNZvMnUkUwmDgyuV4",
  "key16": "2UG46YiypDUFjGEkvSdcgY5m2crGFjSTAZr6G4gnskr64fFbHiSFg6sqYtGvdZ5ZQkA8vpoKvBkKRLkGQxw7iszs",
  "key17": "N97a2bBQX6mEcCQUSBawR1D5cRMuZy9SioFTXDM9RT3edXJMxcPNLENomoT4jAtsHyz44p3WZVLsjgPkXY89buU",
  "key18": "34eoG4sQXhhN65SoL6ZiRdqUu6StYs8xGVJ3dxwsVbTsD5PzmYUjwhrwZy7t9UtZtZgHugZ5rB3cUFoJ5Fmkjq7b",
  "key19": "4UjNR8g9bQfjXdY6JQ5vhobBZs1mqPHNgwmVsQgwMqdiUN7jHQtr73MEUBSrN8o5rPGsPuqaB9H9GN6eT4sepTPm",
  "key20": "vWPjcb5rmLLeX76TAbVk1u2AfCCQVqhKpdNk1zwoAGXyKsZCk5y7Rp9Ay5tLNXhAiKvTN2tJG8kp2FffX6yMbVt",
  "key21": "56LRf74THw33jvGEdTiqadrz3LiBxp9ZodiUP8ZiVDHAyspwBf8x2R4eGqjVs3Y4B9Ksa8KMSQwzqi3Pc5C3RTcN",
  "key22": "3Xykx2F6y9o6PQrTympEtbRWwurrVWTt6YFW7rwXoL4Nu4QGL3w3yTu99MN7b8NkKNLrVJZPcxPC762JgCQY4xVi",
  "key23": "3kRcnL5DcND5wQVUf7WJVYaPNKMXZNvQtJTBoTeLC4FL9DZKHb95LfNhJsHUkfDgtWgSXy8AqC8bD6BFxi4nsZG4",
  "key24": "5oG8CpqhRbo3ZGjw58yMWCDke8hBXpeT97kwtRNXV3EQVtMbcJzc8USVVfvMTDDaXzgMPzkhPkN3XqygLZbHeyYw",
  "key25": "3ReNdTMcWvhYbsnYYesgpT3cNdwnbAJBBK8SSMq8YwbFJSzR5PaQAA7Lem2545hy6HvZHfxousahcz9M3kpx34GC",
  "key26": "3FdguvbiJTK4rArfNFGKvBbJdeHtnPrSLu3wXUaoLL5MGGAzgLinxmoLWqw7vZXiQx7m4C4CuqXK7eeC5ma2BMSH",
  "key27": "KNEAgN6AJSzBeJhbW9gFz56rrEtZkB6ruMSMJXHVBhgmQSuDXtCAgA15RMMiXH4PFAZ2B7cs2ztogM3n3MeGEyd",
  "key28": "5FHY5MSoPsFzYRkA4tZM1huKdA4G7a1rQjDeodArhM63if5uHR9PRxJ9rYP31urVoCaW9618L5bshzYxwHiKSZju",
  "key29": "51YrvBhfE7hUEWQ9xF4Pjonvxer5yeraqMPXohERY27VMVvs5gBiuHYXKZzp9XkpRrL5xjiuoBkEkGJqrH5hTwZe",
  "key30": "2KaW9rKceF1n6w7q5LW5SasCrsMGMsZAMoSLgjG5vdFdDcY8ZzmcNbx5V7HhZvpsNUJHuekrY1BoNhTKgKNiAS4A",
  "key31": "3qyeCLWtoVnrnM1Mu6zsHJwzChSAYAKWbuy3mHJMPEM7XJvhfUiWamfU1ghQrfV99cccY1Cymc4Waw4paP4qa5bZ",
  "key32": "4sJP7B3WgmFxfFJJpDF4CKMYuFX7WhvdtwbNAxKxXHtyGypKdS1reUMfrmJwG36QTHPVJj2L7RsRZxN2CqnAktdg",
  "key33": "661XDkMzteweAzQxSmNKugKzdhcfUnhfxDoAnzsJqMmpzaywwTviuYBjo59Dnq98HSujAuYBSxGQ6SXf8f6r7A9h",
  "key34": "5kwidxjk4UDzkjqagHksYWKrkavuoPdoanmkY7yy4FWZ8Bhyi88wYhT7zH3tyo891KU9GyTh8Fj2nZgmJq6Vi71E",
  "key35": "4E5jMWzdYoDThiWMdkQaAaHXCQ8Xn6Pj8heckeMFW9oi9BeuYVDyMxXPsfkgHD4PJaZdrWfSGnTg4LKm1D7KP3cX",
  "key36": "2Hd9idaWFdZbAg5qfyp5ewbEc46wE6fDiQVezMGFHfsfyVbrXXMFrf8fB6V5bN2DETZpxye48uM1J79BxQAQ326J",
  "key37": "cHSV58rQ5jTCZEokp86XSNqUk8y9kUBQaGJEFj2KkKQ6mZ3UVTgqDnweQ521oT1CZHbQR1kocCZNWfMyNEftyiZ",
  "key38": "5GwrAyrdKgvbkd22rnSze1LmfQ8ySiA32JNaCCdihib1nHoyKjU6xDsrJ5wHg7fYPKmoPgu4YZ8bioumv9w4Y8VQ",
  "key39": "4N8e9fsGeALL4nFLcwCmTF5NJy1SShHmB2WzUPVngP9hj9JzzPSNt9PQQXBjwcK43wUxbWyMSY5Bf1vAp5mwC9Nv",
  "key40": "4v1HNDyvUVjYcWtfZJk3eqvvWNgJkqvLeiMhV7jbaZ22kDrLuchAtkSbYz9iQHVY53oNXiKUWQNkHR5S7EaFTcNE",
  "key41": "2Xo6sLsz3kyvQbHAeoNnZkHsmiHnpUHN8HZGqgX8RwrzRBSrfnAbAxfWcJ58gWPvYvTPCtcrDKnNPNTM3ShG4wcq"
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
