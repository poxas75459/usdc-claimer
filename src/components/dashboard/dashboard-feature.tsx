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
    "4Gdzsxn7vLgb2qx54dvkVzzAG2EaK91C8XgBUxwwCXjKGyCgr6fLthjp7zHmHndq1L2UfjhEtTGMYDQRnsVBt8bi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tJcNdbxvck4eMgr2HUEZ2KniiGH1Vd4kLZtAax1sEAfnKZWz1c1JraL5LLr5QrkvKQFCze49Bc42TMgMGZrV6ov",
  "key1": "uzM63Uy8PkZu3D53zGD1sqVWKVEBbHSVBpbw8y6d16aKiTNfJH5WxJeHcHjcBGviyCSWp6JNM4E7a7fQLpi8KRY",
  "key2": "3JnU4NHEY53ApLqCAgpimaMmLenTc61fRuoLQUvfGdr1cdJ6T6rB42RLmm6oc8YzN62w8NdkjpTh244JnDRU4iS5",
  "key3": "2tXnPAkLkF2y52VvpS8zcuTH6MrkgLW6YsmJotG5SKy7iUBbXMwQsyEdPF5QYapYkZkxAa3j7ZFZEUhywycNnghe",
  "key4": "4j8SvMBzRFRfA9mEnGwHj2iPRj3Z7cwD1dmpAt2ZvLofUf2xq4WAjs2EwP4UWQkfXHyrBbSVUKZzjGFxWi4bTX93",
  "key5": "9V1Rf4BGAHS9BYEBDrpSfeQwJ5gRaGV4RUAERSj3ZFH2uQz8Fj7RnGyUDRyVTBXDfyjtJygUWBZEd58ss1Bsb6y",
  "key6": "3ybB16a5HDd81akzkkvZbuFmcEJ7cw3g9CV4sHUFFvYPmLPFnfpfcEptHE7CETiHyjHk4dSaiZwmU9DUo2e6gDDD",
  "key7": "zX2D5tztgY8aYPSLhNgfFXBVQoCyew3RJiGNZZ9L2c3N2RqBBgpexf4SNrt6pRCHEX9qk9rEFR49vrs1iAfeezE",
  "key8": "UPxfqW8WVUedWoeukoT41Q3vDBfYuLfbrubJKaZHALPUBvNTyoB6evuvayfxw4Hr93u65aAUVNvYnBHcecvbZi3",
  "key9": "5rCVZQiawKbeGA8XzzyiocvV93o1NSFugepbwwoZmwBYgm12yftxe71tNxrezTZaCkMHK9AmKUFv6RZhFp5Fpx8n",
  "key10": "4WwYEEgoCHnBJXSiox55rCoRenwvfaVvxk5Z4hE5brWNHpP1d1wgyFUcBcdtAfAu3162o63fn6io9mdcnEct7UTW",
  "key11": "NjYvR2xi2SmhTVqMwJgcWwnVZH3Yy9J23jcezfzUVq1CbeASh65QXwFNFn97Lgo2qYkcshbHKVg3dJwf5Ztcqzv",
  "key12": "2njfZG2RJZ271spJxcK1ChZnmbDTkm3rkDccomf7yDbARC21TCH63VsPpw2ztpyodRWyQcJNV3nNknfsNQmmWeso",
  "key13": "4Aqrd8cUPwbHiFGwwphNubFS3NzJbWf69qP1EYwMiZpX78xdYUYuBMGVZVJNLJ5mt6fzRQ5ezXiMme3yJaNwqYh2",
  "key14": "3H8swHFXx5urgqgha6qN2RggnGFRK6DyvfSmkEXR3qEoQ75aKzDapKf9heMab97nhYY4WVcVhJVYZufmJqs1mZmx",
  "key15": "4Rwgen4CZJ1oqF9g2krMendjQZRXH3v79MDq3UahtyvcD3hTxguHjfqhYT7iq6n5Y6U3ADcCSFQjeM5iTu1it7wW",
  "key16": "3JV1mwrCFgSiF3Jtj8pkkRhX7guSCtWMVkTgHG45zs61Vkd2PoNWqYZQ6wPxWTZ31LwHzQFrToVmVw9UWzMjEHVr",
  "key17": "wHMmrbdk8PKnyL6PxceziSy6HYPvKmzEhcT1XDLHkHuBQPTQuTsUZQSBCiGxFZr6rRhGg7117vm2v2KpyfTU17t",
  "key18": "4Cb94omaNkp1VJFjs3NypjmAXQ8Suk8NWTkPVP1AANac3w3FzdQaTJ3kW7PDRq3UwFXtip5diXDL9fx6Xz1bx765",
  "key19": "4YvKoC7thTBDpNdFxquy2RY697SKEqiwHoMrVTeRiWXY3Fq7hQoGfhCtABiS7rEeNu4TxAXesffn4kKf4rDZTVMi",
  "key20": "yrChcxyUixd8ZDY1oiXgB1tNgNpczL68cMLnvi8FkHPe37qJajet9zcjEdioL5nuwoqBvApcEYKJYgGiFS6KupV",
  "key21": "2M5PUondhASmzD4xXKJ4ubnDFvWpopBf1C4ucgcDN9SKAoRy8ygAscRndEzAsNHfYfdeQJaGqYvHXNipnrZiY5dw",
  "key22": "2PmSBW9mAc83WwdhmmmzmwhScZcbm6KaSfk4uiR1PGP467cs65hLxgTWXpEoReTBPU2YGwGAAFpKYnSzDFeoYSPr",
  "key23": "3u1mVvpGHEr4UvdxmuWGxPMWv4LdoptQoX2B3QSEeQzrtoRPVPVmoa4Hs7c6X42XoiYFaAbtbGLx4Tt8eMRGuDYZ",
  "key24": "462rtu6Peux3ZxpCLVZ5aiot9FHBvScbJm4odTrHDp8FJpY4p1HBKArxGZ7AuuddykaUHJPngbKDCmvJBxXq9gUg",
  "key25": "4iCw7nLWyjD41nSXgHvbUWQcMXuDgXeGhzBPbGzPt4YBhyDpzbk7E1F2RHhmh3HEHtyvEkhCvDDtkJGcTU5RRpYA",
  "key26": "Wt2m4yuQhYHYVmRnaeHcuMJ1uNmeb4LP4e23qfQmNMYRB6pxe4WMMwpvzyEnPeaeFp6zw77EfrWCqhUJ1vGXW9i",
  "key27": "q4Q6SvGU6xyry6YxFDz5n3K6NdVEAM3pPkcizABUZZ4W4rdmuUdfkvJYtBRodawzVufutLRfWLH65RszxYH4BWs",
  "key28": "35gFGCMBY7RLoyceca3jAh5UqvD2kQbzGafevNUayjQAvpCKSrTDdtsbghd2ymUnDdyXkGE7MynZ8eECxtycVhb7",
  "key29": "pcY3sTwEDvz86QiyckeB8zz7arsmWmhuDmayrf4Dt9gjmYjwX4TwhvwKsQvBv4NXrcFxm4dXDHE1wwjHqqngtra",
  "key30": "5t4cYKizbKwNtvZVpcprvE5KDSBiejRYEEjgxXhjSVPEeMpRMfvYewekt2tYoX9H1utJPPSvhU7R1Mo6n1SrQQYR",
  "key31": "2mgexUj2uQDpgSvjKGyEGV2RpooNs3NckJktnF1G8jWP2tkKRGc2NWYSEogxUCtFxc7W5dPRLoL1JMeYXanDfc6j",
  "key32": "4iU411P26uL7TVzXXikBXvs59Fi8gR29NfwH4g69dxkamT4HsVQHsi5B6a2V7vmASv5B4GFQHMvqmz1yMGfZsQhR",
  "key33": "5WzebxbLTRXg5kwh8cgySMuwudAx12zY2HxztDMPK5nGvd262qX9rGFVRVK7wtk9qvUwES2UykqGzt3Xy226tius",
  "key34": "5867SWrDkaHhR3TzZnGxFHLgUEGr88SGtDN2mpWFpyf2c3s8qcdNfQYKpKWCHmhEFkh9S2Xssq2S8mMBzSUD2ptf",
  "key35": "2Rxkb9vNB5PBGWZeYcP5HNvZqZKzDBAgRRYXCuoikfSKsCTQFoZBPE3FVwvMbGW7zEcfuZsvVNoU8RgP4GaXRiLz",
  "key36": "2mBU11HHvVfBod4Z8e2M4Duy2UAtUAe16cCQpGU5AabeFh97nqeDKBvNKetzu7ApFfcpE1nJqZJ7GhEfnUqTFHTX",
  "key37": "4NeBEwy41uc1R5BPhL5yWKd2knneDLcjjdefoQqiZWVNFat9C91ncqjAAWwiqpuzs8CwjdERdzGYjiHaUUwxz7Df",
  "key38": "4HfcBQ2b9YCjB8NFgRr9N4joyM2yhXpshBPzZCMQoqPFNWrSZQB4kEpjgMiZDcaSFtz6zjc7YacK98cup9Jrd4XW"
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
