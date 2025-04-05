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
    "63WGWLUYoJct3RTtzr8RM3JpqXHQUmkjFVAMMAzEoM6zZ9PbQtwQwDsGE2WEstHqf1FshVL2aiUn6FNgkJSd8JpD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38s76X68eJbPpYqy2CDwKNwSzfy6LLwhqgkzR6ZAncpsFW9FfaH1XDHbZNCcRGdJL5MMPFUYk1nwQbNLQU1JbNZC",
  "key1": "3QKZL2PHLnBALCSaGowJ8JmnVUVGQ7P76AgQFm2jzt4zQ9gfcbDEiytWNYFoJKfL4pBxvzLWxVYJb6xnDqnT4dfu",
  "key2": "2k3C6vSeDz6VPFMiNVdB794Yg63oktwpUe1k4GzwrC3zou4UY6HdsFiynNWqUPSug4NVgE6v8edUhbewQM9i4yip",
  "key3": "3DjrwHDwcenQZExNki8ncvL1VnR7RevJ58u2FvQnYJKaSUCE1Q9rHu3EfaB7FSjDx48PNBc2jvLTbxKGGygGob4e",
  "key4": "5H9zXn1fR51sXr11MjKjxuH1nM9YzhgphmAnggoUz9riVR81VjYu57hLCByiSHYypKKAxbQchFxFGRf8HV71rHEx",
  "key5": "4HRhJTvn3FYVEKp4H48uEYX4zzaiUEk4uPAuAxuTkdumccCwPKsPEfWACnyPpbSKMx9FV9fm9XLvBf8ygMbv6qxA",
  "key6": "33uJyiGYTxoav9p2i6aADPqbypc1RKJ4ygdTeknMqxxvXEQS3U9Dx8z9W5NabABcWxnEXkwCfE5rTKZwbzSTB9EJ",
  "key7": "2x45pUkHwLJ8RXmKVMkgkHadVhPpKTJwQFQJ6xVACiwosCUk1QydAMSRdGcDfdAbJSN1JnzwEMbFbjQ96hyYP2Dt",
  "key8": "3Tc78ouDKRAm4rxUuLv64UEPL8UhSDLM63MaJP9xdWN1jRaSsajBEDvMy6tgcm3GUfamtZxhN4pgnMn1B6eHsq7F",
  "key9": "2s1R3FXhmZ6aTKxsuPYxQdLx1RVVAZEFTBFHykvMMWDc47RLPwXknJq4h6YV3cFquNeDiVhFUrhYjRsbhdYzRj7E",
  "key10": "3VGAuGT4SYP6AddUbrJuSERhjZf4FFX1RpcBZEvbA8T2nMhVYDsYQttyfgqkJzKgpt9oc7D83iBKsXMNQssEpjfE",
  "key11": "2RdfUaqanYTKJqKiw97VbE4N8P8wTthRZ1utMNCKPkFWoHT88mHuqQhv7LiYy92fG2HsKuffTztLN79qLSGJ74GU",
  "key12": "38egAxKPYDLFeiHmybi8EPQMntAaYdiw9RtntjL1b9KhLxX3SDR3yMkW18C5TF6JeKyMZUvL2DVwkQK6cGh7XdKe",
  "key13": "onPsgXXj2HGGZURaQv3qwuawMxMEkXWKsbkkP1RtzKSRJLRkyA23DQ8zs149g2RS2ZG7N95UXdRo6ecqVnedYGq",
  "key14": "3tGuqfrts8YA9yTja9xyXmYizP7Uhy6xCzhL9BxVRJDUbP1sDtJEg9AwcLxcrJvspYtbBhQ5S2E8aETeiEgQrhAd",
  "key15": "295J9xWTkbUph3o2pvLjxgTA1gu43ET5MS49G6vHm5bD5zGc9Z1JLmXXYyG3W6FbULB2aw9HJU22Ga8ji3wDLjxE",
  "key16": "4Uv5BB6ieotbd75yVQ7i2sdqi7QgjVNeJ2X2DTsZsHzjf4HtVEMd3etiTjTijRyvtCXVv9fbKKMfgg5Q7xrPo13H",
  "key17": "tR4xajaNnBYfU1c2Nfq9WevgsyMLwxpU4HTcS86Ex3JMqWBm1qmHAQPWrAryj6KJtWcK6c4WjmvqvMA1ftr3RV2",
  "key18": "3EL85nDeZvgBtMj1khJpLi9H37Ud1gmzQehkSjyUraWCBq4ktixHFFf9W1JoKhsLB68YWqgKYJj8TSGLcWujFwAX",
  "key19": "5TYeoK9xT2rgDiwgaaGsd7mJdeSdxgjxW89tmxnaFVEobLMbcKG8yjoxuGSe4gwFy4FbVwAxUkDHV8WpP1gNGukA",
  "key20": "986dTe24wAVuzRrWKu8TFq2MTU4QXKD1o9CsP1mR3EeGZmFq79DEDNbC4kXMePXQNg1L1StFWDFro8DuoVbaNNm",
  "key21": "3xQfU83Mdnc3E9sJBnwUErcTYrDzFLGcqf7QRoLfTdPWJmkNHKAMVsZRmWRYrWm3CUGAB1ZpFTKuFtGb3RAW8Z8M",
  "key22": "aeXAnDueBp4fbnZHXpKFRx9sLBFZb8fFXD2ggTcfgPzUPxejMYqFzb84NybkphQnBSsQCXSkLs4f37kKmpa41Sx",
  "key23": "2L7Ju95UyKJfo8wpBBAbWyn9pa4BZeaUxVHvagvFQ1jcPQxF6cUsXgpN9ibf9ZgxmPPp8MvkhqEazEPm8BK9Ksnx",
  "key24": "3YAeLyDSAzwu6EpCNhL4yd5VALnajoMuWmZ1rpANVeWvj96D7reuyasbDv5BrmMwTEgnN2Vg3C76Rj5HiRd24L9A",
  "key25": "2qYQFTAfEqtAniZehZ97SLNNHUq5NtqRGPPnUEr35Y5poddDctZJFDzR88bsmQEQrivtxXFPrYkQRqkz9LTBQoHT",
  "key26": "35AaNt1Gusx9UHMMGaceMKCJiUgaar3dEN9WwLFFFey2TJdq6EpzEBBfJeRwVpenF21vU6sjuHBswGcDvWUo5Gf2",
  "key27": "3qh7t8vBDNscM4Q57V1ZZGBoYSryfvTTSRvdHDVt93qn9vbMaaLACYvuzfsF6qMyAM9KQihKjbv5sYzfTYvayqcF",
  "key28": "4djK1iWM1ZM1XkCYA7yuyasDQKguVdcHt5RcsBM3QjzqiNcPAjshQuxLkorVakXxLJstBJs4a1dpKU24FTviVuDV",
  "key29": "dGavXxzReDhasiAgsRQkwAixGczhTFyzYogicHvZ3recVGJcfPp8tWmedHe6dTBu3BZ6asLPafhSDy2RPAUyK77",
  "key30": "KzyFy87QPzST7pkjF3NQLjgMKrRPeEUVRRRzQaWhiAcEodRR4M3gHL5cRmvuRvyXm7rdUbAhRDNaTRhhRVZs1LN",
  "key31": "5hzuJCWr2iDuVMwf81qmwj1nG8X8KTYUCDuxBXM5bsmoqu7B5YtMyXZx8mRJQGVspiY6b48rUnCwVkKqw8w3Lqpp",
  "key32": "54n8VQJ6YQJtwPYC1QTd72VMw7ru4dz11kam1nqfZWqSAYXBtYXRKMFBeGJUcLmWP5ub6u24zwojYHm8BhL1qgcd",
  "key33": "3WbwD9ghcHAAvW8u4aefKAN4VtxqSmmPePi5ygrTPYhfSpdBVWQFv5kZ8MH4knW6LS4gs13F9AsRN311tRUEZfzG",
  "key34": "4urECjoEG9uXAPMNKfsHb8bUKkPvLaDpBCB5sHtLuvuTe95FstMqYSCkA87CZ6oq2dzzWSE2V4ufpn365UDLmdTj",
  "key35": "2pV6Gq559GKK3Qq2GUhK9ZyR5sEQaR97Tw8RF9jBckEPM7ygE2PpaeUo3rpnwa4MbCU1SWZYQSLq27fEMaSZJZZQ",
  "key36": "d5bWxybLVpo5stTgtYAs5ENVPnM3XE5QpjbQ4MPMF5H6ymPtBhn9vzSMLc9DCqda8CfLvNmcVy1jvBGPJtzxDF3",
  "key37": "3gUx36DUPr9T2NxjdZW3aBYaodogvb9RHTaB9k51K2nEKHLr1qDdTxK3XRD5K7R8pR3KFoHsczpvtXdzjxWbmNYy",
  "key38": "5evQCJ2erkxeBQdNDgMn3ZBqn2YjMVYor5uubgC2gzQpnnrTa3BJWxv7Uu4qGNBaQKfJxtT8MYgR73dy9wLkhvVQ",
  "key39": "29sbPpKk35SS9QYTgJNpURcyv9wz75iJVRPsKteGRASJFF8tQ2UDTC7zxzhfdYxGfFzUAY4tg1FmLNsLCxTo8bkq",
  "key40": "dztQe3gHVbo73CXmqDiKFoYSvGBdBcUnd9mtvUVg9AhW5Un8MZ5iy8VDc2G3jZSWz46AXv6mGEQpKH3n6ZzMpfo",
  "key41": "4U1Bp8JCMPePE9Cjn1PtoN7i2RQMLMKnk4ZMa7FYBJAKnwNp7bJzGnQASEWqoFgBcyVp2KmHWCzXrYVWgEX8yzxw",
  "key42": "5L1PRVQKo4UsNrktjbD17yGNBjV9qkGKLgAhEHfu6vG9VuVzNbEP8hQrfV8ZKw7DFMC11f7EQMMXVoR1Z7N4Rq6R",
  "key43": "3kFfhshYjENPAFvN3LHbQTHfkP67bz79cbPCjK7TGFxsJX8CNr2cPj3N4ZSrjkeLhtGiDgUcFKk2Uwutk7ab9sm4",
  "key44": "2fXi4EdZ63NQdBut3ETsFnH7PiZVgbP12gbfhuSGqhp7TgCqGjaRp8UpunuU7se65fsR3Q3zn5yuBmAdAcpmBPi8",
  "key45": "5j8NFYymhpYUsZCtA7hMKir5efTAQRGV3gxqKRwnaL8fSjpAnvvSU9qoqmHgCzzPpEqTnj19WrWbBMvtxKKHobDA",
  "key46": "2dqRnjAroLK9UjeH5WT7aq1HCubGu7f5HRizZg6H1N6YKZheBjUYE8XoBN7Ue1Z1w7LHyBHEpy2EQaS3kk4PRLfY",
  "key47": "52w6CNLhKAcXvT3WBApsEuNnYFSniX5RMdCDRgyjiUPqKni5GpgSsiMmsgqH1e8bmNwmSqyv8J1eYrL9Y4K8MTsL",
  "key48": "3zMLFUoejyqKCj59VBVAtXwEqxfQJrkYfxbkzXQFQb4k6eQJfFo2mEdfvaEi3Xwzhz3KNDJ2jT98Aq7j7SKDT4Qr",
  "key49": "2r1Mkmy3ycWv7tyBVan1XFAZttiifaM9fcmGqh6YTiAHcFV2knZYucG3DgYJ4rkFN9qcCAwuPqVG2CeQ47TghGe6"
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
