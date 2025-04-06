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
    "4Kn87xm4g8QrhVy7tBHBZ8CSoRWd5rdsYv8kZTJr7BGLxTHYy97VjGDUN1bakm6gwt4fRehwBnoeVEaCFPwVBb1n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3z53TBbc1ptC4RaetbPNGhqkMkYRnebBejVFg1XyVSKUqzNzWsM9zgb44Fe4TeXLtqNFS86irucDkvAwPKMPx5HZ",
  "key1": "3pEjiycTGiRY7TCy9QepL96SypXMoRENWEqggcSXz2eKD9C147oVcHwBgNgNMf1unExBSSL3Lh3guRdbmkro6D5n",
  "key2": "4KuUsVQnUvkqeNPurQdebAwfc2cagT6244afCSWfnvPTPztEXEHa9fxerginRn7NM2kxaPJXiqnxrAaD8wkUs4TB",
  "key3": "52k8Da21DCyYe48WAXz8vPqCM71RmjvRTbWyvvyRysLcHA4uAkuxX5PpJ9ni37iZbM21eTwVrJo1WFEbYbkhC8aZ",
  "key4": "36pTyyEjH1bNwVboaVNHa4S6uRgNjKySum8SQEj8szoCn8T7oiNZSjF4shMFdmTa4V6YvFdaqWXHJ7kioRk5vE9a",
  "key5": "4w2wAELrBQWacdmUjEvUF5qZBRTVyb51c4SfvfZWLg7VMxUNzSTpFhLjt2CJ8JvL9UrXV6TJHuMQxNJsSNVb6L7j",
  "key6": "4ghVKhbAJVmVUxbZ9XF4kZj5JwCHkZAxKPqvGTA3aBBPKuHSMDxX27wJgM19crRgUdGwffeAwUDceVV4f2RsxjX4",
  "key7": "3LqG69P1EUNMrpa2ixcctaX9x6Xfk6Z3H3aVraEKPhf6LHsvmtJVBRULxUhEa66eMTiS7fUvQzS5YRtJKAQrU2rQ",
  "key8": "2RybogWQHDhoFPJotFG7tS8ebuuMMpjViyRA2UaXZqcJjSakDjGw62GdBqz35AEVbkjvhS6qxyHNiz7xi4ykZULj",
  "key9": "5we2vjnxBmGwxFH81xCSDjAc6TRmd9HLQL4jN2bvpMhPDxajdT6jLKRXuVcjXjFavJhU6Hd1kz3scCgMuPQK5XGd",
  "key10": "3pfwFqz4XnuVrF4WxBMHGB8zXMxfhBkhL3WbCN8uNH6ogE1NgoaFxaq9H5L4vgCFPkpatbCv3FBs53qfk9m1iGjH",
  "key11": "5Q2vtdMso1TcbmwRjFZpTGKvj5HwWFjm523QyxWZ6xXcrZ9d8VZ9AxthxHN83Yg6yGfKNusuZ9hxstGEtfuqHmLM",
  "key12": "2KBUMNTZiSK5w5WXMBjpUATkXmvCgZxPWEmfq6ERULdd94rBS4Si3HNSHXrLgotPPtpJoVBbjf1wH8UVZnsgBAsN",
  "key13": "3kto4RrYUBKQQto163B9QXySB3VsSNSuWmBrDknwzvSuyGMr2cyQbN1unz62pjUGzmccN9jpm9c156zXmoSS7bM",
  "key14": "5tGWsq7MEQS3N3o1juAcN28bQmacVysAVntKauLSJEsnZCXSfAv48y72zBhcwnVmjbH5UCFvGL4hrot5oiK9eQV9",
  "key15": "2MCFqAsi191UrKJreNtX9q9468kF41bWgnAYwhemzoqABa6YbpREL8mUtosJxPGstsgdQ1jvmM2DuYec9T8LYBnp",
  "key16": "i7Ft6hF9Eh3pK7i5A5c1QyRbtkD1MtVEDUHk1nG1W4ATmdQNbxZQF6DTXYGG2eMPrwcsbGFVTjD6iLVKPx1h3Wg",
  "key17": "4J4CCCr8vu9kw7fD2TfmzFVWeKiJ1TAMJ2EWCjH88MHRLWHVWRNyJsyU1mcst7t4S5N1cEeNAnqo4KYQU8RNDRfo",
  "key18": "5TN6bt6MuRDFp4STNAg74QBssu9Z1yXtyLzJhhx5N9R9FLRii82ngZvKQwUeQ2e4B38yNGXAopABEdWcpepcf2f",
  "key19": "5zDmCWSjucPdwPuBFNr9GZHHwXz6UAL2vqybayKsQAfTKQnLCQntAB2nApvYQp3PnPE77xk17AkHHC6PgVzpJ9a2",
  "key20": "59k2BtR5biWyRC6yafWZJQZFqayZcnuWxnmG4cinfGwm1vgUwqNbXbDejnrvQv69nFhWX2WSDMLbNpdxnTWTKjPq",
  "key21": "43jXAadssmVbbxfDY7gSj9F3SQQaZD3BKrtm6zKDreB1sF2THCEsGcnemUN7jbm5Tr1DALi2j8TwG9NNE64B3Tci",
  "key22": "M89drG9r9y87WCs1S5uNPB2ZN6KN9eJXXDFKAyhjK5oGrVBQhVH32vQCsjD72B5qorbjdVGPcW9MjFws4tHi13N",
  "key23": "3djb2F3Zew8Sy4tqUURiLUUFdK3qsVckCmzuo2gu4nkhEoL7WMRgWqBTWaHMWZd1SMqvK6cyyo4DmNshCnjUdTGL",
  "key24": "4z7tqjJnSAHAj3APpKUWthmW11pZzeYquUtmAWPGonMamiiUuytVoqgZ8LQsVbX9ooXznArRwN2HtyN3eU24FpGD",
  "key25": "5FVaVcwYHYcwHwTEkAj8QFe6TYCXmxwkFYmGCyTvUUuWF7WrkWT9DiyMbQSFxwXAReMqHcUhbKfab2imKB4FJKCY",
  "key26": "pZsT2TEVoV9fUKk43yQzMiRNw9fXv53Skh3Kv3uJQCBv6Ynifg9jZ9RaPLqgykFNMQTLgXb5HpiN9o25NtgBFCx",
  "key27": "5Wprv2tQArFV4igNTnB3Y9rMxVezWkusWiQqgwK1n6XEZgaN5c6TZ3J3F3kSEaje8nsw6Gjik9Yj73WjjgJhdWbj",
  "key28": "5CrfKtNVdQVGnye5pFMn6MrQrikzrNxEenBAajvCW1wDgnkaiL2NMqf2Ade1wCU2oPFW5QFVM6NH6u4up7ib2SAC",
  "key29": "4ZFwNFgUU1v43HDRFugMW4Nj7cVKYeZpHvSQh8hCdLqXC36rM3FCb3H4mKdqig38xEbj1UEwt3h18Zqg6xWienAg",
  "key30": "5E8iYdmqgLk8M1bZ1hJEsm6fMPeB576sYfnKKKNwkSpSeekdiYAtgEKLRL3tcKuckgmLZYULWCkccnCoSshCZujj",
  "key31": "5EUug6sVLokiWpQafT6YC5a7fB2yzXSDpojeKM8cbV2hM5NNAyf5p7mjo73cKJCUWbdQxkmHPp4CJFAQMG3HZTj3",
  "key32": "2k1mVmAX8DV8MpmmNDizHKYf3WRQdiaoAC7YrRu234eLW8kYqfcysoF2micb1mtRiZuJCdceA5FFDd28BvdZxNzd",
  "key33": "3HoPd6Gi9eE8Zk1EPTmbaNMHBf7kKpazYTRPVhXJ9hFEhBrxXszm8rM4Jy2ShsGB38cuYLeYRo21c2W5D3Jn9Py8",
  "key34": "5Nrgj9BWYBpP4SBkALVfM6aW9Xsamtx6pEtSre6Ls3SdzqqahhBcztjj3J1emiZQ5pEZ8Pbyiz4wL89gbcw1ipXc",
  "key35": "3LFVg21GkRnpC8jKFqpLcQ4ssxaxqHNwx2dfdZHSE5knbYVa5BtdtgiiFDFMAkaGzLNFTg9EX6pK5jPnt41BQsh1",
  "key36": "3B2Rr6Z4bBLFwsVP1DBvsjUt6EEGmVFSdC9B3WYawJCnaxSWY8e1u2cCn32BZBy61K7i5GgyuCorzmiz7oJskQt4",
  "key37": "2aSGNSXaFQX6Kyin5ma64BTMedAoLGStyB7waPZ4boCeHVCAfEps5ivNkKqdSmoA7VDnEngYojtXQvjPjZTrv6mo",
  "key38": "3xAbWAfJwmHmeCy1rPxL4nYksSuVd1LD218uDYBzsjcgERe9DUaVRsNqJNexwjLXNUPpnLA7sqnJjygkdFCx5gy9",
  "key39": "3WLxKsCrFsNqXDMMjUn65rfx4mHhSLPDMAw2LpywfU4v4ECeZ3oXzmnYzUQQYCriuQVTAbiiphgHSZq4XdvQKgSG",
  "key40": "53H3qaJZSEvBJFGSvStrJSRJTPKCbZmcqSuaSADMerCurwRnUd1XGwszydS2BAGJcGWYpqTGbYHVmJKDeJu7jsNL",
  "key41": "36xpMg886uXDL8sB3mHkm57qEhCeTGUJ3n4gZHsfwqXa1FgJcxXwbPdC3e15BzDhLZ6anVXDJmPMooxzKyiZBXSp",
  "key42": "3jvT6sKm8h7pWTjXNEtS4E8B53WzUJqeY4VoScWfb8SDb1zKSfTNxNbHijSn3ftP4FKzpygmGoHAzjVtrFTPExdd",
  "key43": "3eyrr3A18cY7HSJxMqXF1JPbw7shLbc8zqkeKfY5QCaYqefk7TvyawmcQ4Dgk1DByj2GNEM6D96Dwkbn1R2Ydhpw",
  "key44": "558suMSAgy6FosB8KH4ZBdhM6sd2xktEjTtn1thZ3uwSTbrQGbr8kD4o9CDxqG8eMqcpCNZokrvAZVaNyZdWQPuF",
  "key45": "2JK1nPjVDLBttCkDcHXtvon3kXMtWXNEvKUm1LCdmTSU5tL2JTAoDSQ9r9wzodqUHnkTJQ6VNYve5BXBFtQ8oZYx",
  "key46": "64LgqJdk4iFGT4G6oxsTppVyrDJfQt9pBBcAm5Fn4Pp9qgvcaXKq3SrCorTTqyW123JinW4qa6phDRJaNbSi371h"
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
