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
    "S1YeWvdoLMjQvo8SoDVAmfB596voD8PeteWjsqdhhgX9HZ2sDSb8Ly29zVdXdXEpgYZbZfVLvfVNwgLvpVmERFH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "571JxTx8gHBb2E7xCyXUr6SX3eYvtojsk88p6UyuBiTjumXizNBG2b2FGyskXyWj4dvSLMZfW1YXJ13GSJ75MTa8",
  "key1": "4rmofG9GYS2EdyM9sxJJxZhJRKf8RaGTdyemmCGENwfsogUnfmJMp2iUvsLRP2B24Zwo2E3q7pmJbmzVf9dMRPeo",
  "key2": "4dzo5ZgYvAS2LsBtuQ1SQRwZjNs3pvkKat1uwFPmJdYo8urEYrnq1DSbHYJoZfG6omd5ujS7dX6qVNNnmNTf8wHJ",
  "key3": "XWLoHBhUP6H1QtJQgFSPM5L2Zi4wxnGwzNe2vYNdqGLpucqg7qqJqfssJXyFsDrZWFddNvUoYV4E539bdNsyBwy",
  "key4": "4nLQL4a8XhgFX165UJ6tRM9xj4i2ApebURdLu7wktdYJXW3epr4oN4YAya4ehdkZwW4ELKzh3tPNAefdEw5udNHH",
  "key5": "543gbwL1HEj6XHwVaCf7Zec6tH9DwZAAAiUZqB1jojMojZA8dbboXjpCwdxCpMnvUBRocpoUP7yWL8u45WmFtutD",
  "key6": "4kkZFjQfMeerjk1xxewKrMiyZKjCKUc1QSigJzRXgEp61Z8gMRuPSx8tTnM2QLk2XPJwp3Aoq8aqz71Q9By6pA9b",
  "key7": "4w4Bkm2Ma8JALjcSK7aYeKq7cowUHsjE4yKottAXHsFjnQecKZy5Vm8pBVyWVeRAgUqHSGjTMhxDpKB9U3zJ83r5",
  "key8": "5a52wQ85vvcJbs3VVX9B8Fd4TesY3VmeWNE2iaGsyGrNiBgTsrgV5rNtyU3zNfB8MebT9P2V3uwCN9XvHWpJMJfk",
  "key9": "2usnB7gjQDXpnPzj5e6dA3Dxf35RN81Qe9GykeKbRnP8GXD7aUnFk47X9RpfyZ1t32G3HzSLH3H41LGwRPRtAEqx",
  "key10": "3t6rB9txUjsX2xTMWsszSHDnEAWzPY5ES32UmbfwiyYiJDtJdibj4EsXY38UeYTiKH9Vc7j3vUa5hastzoVDkofu",
  "key11": "54DwjF4z9Ywt4jSHWSMAH1TBVh9PaLtEdCMGzZLYNmJNyvEgRUUWQiHLo9JiaQ4D9yx4cfZj15VVM4D81ANnJFWt",
  "key12": "318Xo5SaKEkzPPzvdsdkKeu79xD6eQYxtrwR4WyMxRfp5wTCT6UhumpZksZ9HtswnxAYJneUcfsg8UFe8BP5hJHQ",
  "key13": "38nuMYJcQr1KGWJAwHYwJ2YRsmJdRaCgTDHuG64E8ZpdcZRETHf2uLU3eaZFmxLH6ykYHBz52VPMb9PyAPYH3X6r",
  "key14": "5243LbxQsB4oXs4tQUezBUqfjCV6YqPYCmqT5pZMyjVu4F5peBrenjWsraJ5nvAZ2sRnvxDakymX64GFuPiWoJxV",
  "key15": "5uz3p6TERmztRT2nN6GARU7egANPz4jtCmsEyL8yZy9Zrpn3rvQTc2ygqwh2ueyeeykNDs6upXW84uFNAbs9FPM4",
  "key16": "4JytHQY93W4YqiYGABS4nuUL7E9wq2LBa89SikihMcBESFUTNFPZPt7977eNhzHJ3iCYnkC99W35YjGGV5EWnVeB",
  "key17": "4MKWwhSwtoYTV2FQKKddwRZfJcKWE5hoNeRGxeLX51qLBkB7wYX7Zc1x5QRqMbM9S9fwThH4fHUGehCtNgc4Cmgm",
  "key18": "5v7QkzC5CK9NkWSKpwJmCff9X7RdfUKTtwNfpjRr6GYcgPS1MPJ7nJmAKkjWaLEj5Wd18QnWTLBsTfwPeqLGnMEm",
  "key19": "aCuwFtFEZGMKG2sieZifL3EB8QqnzxCcN2tYhBWZgBYU9bi4DFWARhqse7j3da3bMdn5ab4XFfpEjZSDkkAV75d",
  "key20": "2A7wJ39czZvNBZPWujU6TosaB2hnqg33xT8pRVZDws3euU1ADLjPjSH1GKfuKKXNNALBVtxwPVBdVzFTA96uhED6",
  "key21": "2pRnzAxUUu487YtDNdcisjNMnVtRkqtcE5W3k9xrHV3ajB37jZjXWPdLfxpvEHZgju46PDQqTJrfsKLZUKHzVqYc",
  "key22": "41i276fmS7SQuygbTaSWHCevv5vwtjLU5vkA1kBtFYJBTCcp2GDoqDUKTQeSxN92qVgicWUdXeoqoqireg8zX9T",
  "key23": "4ssDVKXBkzQ2FywN3nEwGNYpTSa1rNCoEKq7KSq7mGPe9ENk8ipTTGrzvSjazw9h3sr1DDCHGtX8ypTvouQWSTCC",
  "key24": "35MxFGhDmgHUaj7oPkw834nFVwWnLmpZL8dkRt3invzoRfG8Z7CqaRMvC7vCTVJ2kznTn8Dh1E4QqX5aVspHnipN",
  "key25": "4XwjPNjyqv2WfihUG1iM6q9aMGVsWX4o6rpurjafPhRyw9pVucxurVCsr9tJeaLm2Zz525Ro1yVLhoj5ngTd5ci",
  "key26": "2zKSDZMgGNzWoPU6YMYddm4MDFcm8u4dnTFnuLFuRpWgMpDHXVwoxa9uEhkAoV2VkqKNKWbRaiWjHTAwL4dkY5nH",
  "key27": "5koFZJV3HPQMNqhbiEu9WAnczUjfCZyBLDUNd32TvwPiywsZP6eZsxSKZxbWUe7WwozTfYna6BW6oUwYi9MdudoF",
  "key28": "3oSbhVw3rvWY3X5uNZVZa96pimVPKmPzBVNgHAvkNKwQmX9joBmgSXM5QCdjorCScL7v7u2qi4apVqZUZJHdYHat",
  "key29": "4ekYay1X9JzoLG6zZagqXV87tYkk6j94AK8ktLJaF1JPLmjdbz58tKY4gd41seEWr66P516ZSr657qemA5M1UDnb",
  "key30": "5sv4XmsxJnGVszc8MPoG3RY9FSwn2itXHh3TZU5qa1BK62q8cbD5B7voJaUSmPqZ3dwnidg744YCxdH82FrRcyx6",
  "key31": "4LQbUdBgKwaTGEj2gViv96f2pdngiL7fFesguv6sib1ZQgpZyYhM8aGpzYaZZFhw6uvRYcNAgn7SEoVxFMhS8H7X",
  "key32": "5cYyqoAJNcQcCtPoyMybLh8QjM5WYPHixFeCmTSTRNc9Unbyb59rmHbHd43B4vztBWvD3eB3nfLhfcW4AP9eWk5W",
  "key33": "2E96L839wjgiAasjxwZjQkpWECZAKwfPpCX2wTqzzcm8eZoKCC3aM3v9WKVxZdfqohvGerouPsktP7efY7x2J8wc",
  "key34": "5GYkuHn9f75xQYNqeDWFGzxCiVhZ2H5qaw6BHstnVZPdiSsJrzbDadctskXCYxPVfeed2CwwRayHQPtNAWCJW5Xi",
  "key35": "5mAfbWRQYzn2Cq4hNSc9NHJ4RbDBK2SCWgq5JFYxbSEvPqpgA6BbyZ86CJbpgfGgk8T9QZFBsy3XsjN17tQcsqd5",
  "key36": "5qRU6cWz1UUYKS1xKDxbrmrZna2bpVjp5ANaauuL24v6AxcN2dL6JEWG8HKTM3Y5tesxegwawMvNW3JoGf7FuWy7",
  "key37": "3WoHVKX8uLgbVH5qoNd6gCpKsKiisPFJVkJpCf9aUxkdJ5rxteCeUz5SWNqfE3zi796udWBWo62ngw8aQNzKXCdh",
  "key38": "y6FBLt1uQYxqtvB9BcTNZKrDs81kPhZeM93cEiezWz8qC8iN1L9mDvqeM5PMWecan5SidcxZ4uiEHJtakg1sPVT",
  "key39": "GqgUfH25fJoXuzFKNTHffqA529Cp71CjoB9owE5piiYWifLcFd5SW8ZmBB9KMsxPeMiFELqsMhbWBSPtn7Tgnhv",
  "key40": "DDVe6oyW8F4RCqumJ6a8r4tzKHp39nqcmUfFXiKPg2mT3hgSKyTZL5Eq5rZRob9qreutZoGKTv6t7NamtH6CpWd",
  "key41": "2nPy7TwvC8xCuGosYWG8qmTvyVa2nA6f6z4t8k13LqAFetfxzz2nDNsm2pBVN9SJPsHPvFRRbvY9BjgmjPc9rw4N",
  "key42": "47XNeg4jABJnQ1oftqtbm1LtdA9yjuTxTqwM1PeCEZMxieQtD3KvLS31ttBTnBqnbFpcZZwL2qiry836pn8sLRyZ",
  "key43": "2z8kRCjK8cgJswp9StyiMczk6MZGVYFj8WZ1GYUTjwsi7229tEZinvMh8KmcgQN5PccAxQv1S8HpZabs8KVjXc9g",
  "key44": "3BwJL8YSDrWdK51TiuhAi5AAZsvAsFWzCh7AzAWNkwuoR9V4L7B27hgsbrZWLa7NHZCupYwX6DxJqs52yvfoNBEj"
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
