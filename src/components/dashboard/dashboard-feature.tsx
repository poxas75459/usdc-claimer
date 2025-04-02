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
    "Scraq9nDVocWf4hirXDgz65rnZb34miscMYGU4BeQ21U1D7p5dECBCD9i3T4DMrW6SCHjRiV3QnjGNYCNKNwoGy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aA6uLE4d8AQNbcs6nYJP2QsJb63Jj26Hy2ywvUtd6ciGf1cWcTLHaiiMwKJnoHmdkhtbEPebndf2jEoWjnDgi6p",
  "key1": "3HUBvPkpm8ZXA2kfnTYBqgBhwGkWp5fUhHJcsYXcZzNtEWgvP4NydDwYQqUyP7hHGyFCRmAhb3h3HatK3kfu194j",
  "key2": "2VhNDSzpK3bTau5g5EdeJsLoKbkUjaGiFca1oWR8DwL9FygXZByKz1eqXp6uUXu4ozwhqt6aULKPb9Eg4zVnc69T",
  "key3": "5TtS468iaGrQ5xrGAJxNjYNMq1EYBqQE9EkF9H3a5i5Q66PmrHPQ9SstvLd2eoShbLS3vY5GJmYcLwpvpheQyPF1",
  "key4": "5Hperu83vn54XJ9XjKz8Bp5tziYDoBMaRHYN1YGChstBYG6W3bcEGeFGk6brVKpoAfsPGBiQNWBEZxDjdenHUTyd",
  "key5": "2a5mWCpM1TjgbMzyJoY7snogFz7nUWaEP7Mn9EXZ3v2yxkJKaH8dffJRNQDR5RMgDtf3xPqeX7A66KqawKajPUQ6",
  "key6": "5QWcgCt41H283194ieXK7cqVt4idSuuJzLXhP9viBvaxffaWpQrjy2Jib6MtBdpE8jiCUTcfj8zTPcXrfvZDDWAz",
  "key7": "hiqSAvudcyzyjhV1tS6YRWDW3TAkDXKpAJzk2eFpjTjzq9MDa8sss9QQ3Era6Js7b889UPG2cTutFPd8NVCc52D",
  "key8": "3wESMoFskNcQEP6BJy4JsnV9xWNBva2zq4bhqjCvy13bASUvYHE8dCYq2Dm8nW8Zm6V8eP4TiPDjuLp3NE2Z1fBd",
  "key9": "MdJ4CqoXPukzjDVTofmno8VQvwSGzfoqY7U26nhzDY4o21YDsUgbqRmKZojkmEAaDfzMSW5YzM1no7kBqx6kBWV",
  "key10": "2BgQss959r2EnCjtn7pyZbzqKiagXgY5dddiRaYUCtDPzHHyQE6og7GaxMC5ZZHDqzie46peqEZiWP8Ebg98FzD6",
  "key11": "5kAjpLTQHpfke2SBVQ4VV4rngMyrAipHz2Fwsf5x9C6EDNQ95yysasJ16p5q1sP1h7LXsZNJ9M7FYjNKUsQckVkb",
  "key12": "2z6dGF5wDys7DjWcsrPjREx5oCUyzXMjFJ4pwuMb6zotF8fFqZiqS4mbBSQUV6v6RvJhf8FqQjcGB8pwnpe3uVAh",
  "key13": "3XcH3sZAfmuUWLutNeFMCmxHLj6x1jB2fxD7dHX1qajUx9MAY5zr688aAAg7FuGCL5jE3Zk1GPe81CswBEc4zLm4",
  "key14": "Y2pVwqkkkfc9XhtXR4yRphpoTJNaQtCJq2NvnDhJRsvdJZQTZNwuyDDW2A646DLdtZkUYLcbz5mgnAqoDUfb3Jt",
  "key15": "5tyRexRTdtYazHNmN3gq3GfBmPkqScUfJ5XrzD62GacnNGaFJw7Fpb1WmM7NrLPzo1weGGrm1wooKxmUZxF8j9FP",
  "key16": "3DjrQFdLhfsWw5tYXifrdkt7nAboTWvqHyEn8nzzDtgtCLpBAURinup1v8ty9tDivxfM9aNdAToDQqbMrU3nUpjH",
  "key17": "YGqXygDfd4tNw1AGeWP83H9xmHhkLJSMVpVAu6PQvqaX4C7jajUmSWJQgd7hsVN6aySSVh53FBgWefAC4Uk6dZG",
  "key18": "5zdXRSzg73H3CorL5rCnqksBMsmbcbYRDjaBRA563Uw9D1SR5VHD5aHdEGGpJmJ7mrs9L2VVxg42oXsvq7fViQnp",
  "key19": "3RstPU6ycu2bhzyS8aeZrHsTmTxk6EwhqJBCyZujTvoEY2fharxCYhXSHjayB6K9Q8NZh2TGM5QnD4edDpKXByef",
  "key20": "57V4rXsV8x5wrM2BcDAsgx87GL5QYjSdkaoLPfTTyTUT7XdeWc1ZNGThqXgvSGoAffKtsPm2b5h6Va52B1jdrruH",
  "key21": "43L29NixDL5QrLYkTH1vewGr7x8p5bR44mMeQdkpmL4vTZQu1VYpUsUBZnWzdNbzzfscHrH9XLb7KbeTZZ7uDiQX",
  "key22": "3Lbc1CAGvZV6bycii1dCvFrhzaoyVvLXzuFRnsyHRfwLftoDrRswNg2fVowPfEHw2BCzxsQBJAjQTX3578RXyrs7",
  "key23": "24YsTWzwTPGXTsdP877dTFSnrdsiUMVoMiKfDuVri9sM2w81GrXW5UtpPEpJYacYUcc9ucpeJnGs1a2yEURMMfLz",
  "key24": "2L9ej2t6weRQFshPX1pDxTdPubKsvXXRpcjWtpbAXakpFMJpwKGqhYKzj57xQSkqNfByw5eRRMZjjxZYDjFw1Gym",
  "key25": "5kcQRy5pTWVqpNdhyu8hhfwM4FsHeTuz2e4Sr4WLZ5Xxj1Vs939g2hvNBSGaCfLq7yVNfcLyxP5MyCTKBNTqwkx8",
  "key26": "38YajYP1U1RKtU3223286sZTfJtSXrqoPPS79wvDtfbKF7yT1P4n3niyJHkPCcPte7dD9ZDuc1dRvCMhE2uFKwX9",
  "key27": "2aofrZLreEHXdJaUKs4757ptT88YwwQBysrM2EbHTz1PmN1fKEC85gVyZJcswYgUHwHtDLvkqiUmxhDTQVETtYLn",
  "key28": "eBzFvTby3PFfLPJKhLJjL45W8tvNridrC5vvUujjuVvKAXvHE93agPaB8cXbm8gRkvmLA9pajMYi6MG9cUCLfF3",
  "key29": "5vNnzvFhvifLEzYG3rAnpzmbkiGLH4L2d9odX6YtdsZkJJPM87EhCdugHX6cKKvpa2i2BA3NER57FvH22ige32Ta",
  "key30": "3gnrf15DWnMRMXeUkBozMFRQxaF2NgVpT3fLS1D4VeMGxGjFkg4t62M2rnGdX2EiFjKAGG4vfWDvXircgG6sUELC",
  "key31": "36ZSaVbpUFCDDLzkncjaptqEtwvEvFrrytz1WBgNaoCYB6LWfeMJDJoBcLsQ4D1uhn4ZesXiPUsf7EQFCTSEPtkd",
  "key32": "2WK9xLdoK6SkXkA2pAvyB3wQhVv45Se9zk3ZnJ59psbvzEYqwwkrmiyQPUKgeYC4c22zeswTbiSaPDZDpPVZxMxX",
  "key33": "A5ktybsEvFLe3rxfhckzrYAr3NydrM8hFjLNWqyA3FE2hnSLVQ6D6rRhEymuRPg9fs3D81iHAdYkdqv1M7nZefo",
  "key34": "31zp25nodvgh1815TyXDCnBuQeME887edL2Ea37zf79V5h82JWjcU4P3r9TdVLLzUmvyVRGBSoEoXEoh8tyxczLv",
  "key35": "2Gc6jHDNMpJ2v1iD5Qkf5tZhUAxPK9bqbHNLH2WN6suer3hr4kwdcXtArBnjjQQ4ip8TY1h3jvtQSdzB7QRxcf63",
  "key36": "3ZTyaCSuUoYU3Dt52U4vigKz8dX5W82KDoaQ7NrYrdzGzd2SoowLCnpzZyxAnhFTUJ1nbUECFEBwb1UV5M4iiCYU",
  "key37": "5zeDu6rjeatXvvZ2TB5Z9WuQiKhNzF6TmMFT9kgsdjaJF9qAjj72MvRoNRxEoaGZWSZhnMkwxiwZhQqHEong1tUA",
  "key38": "ezD738LcsMawiYVczexJzsrMoqEfqGev9xyw2WwiUVZzbfvdDueempJj2DZSsWotRZR5VAT77LBEVJcqR6zUMVk",
  "key39": "4naX4Lbwdq7bPWukP5K93KpVm1W48mpBhCRgiTKeaPv3wLu7MfTxUTsfoe4mFiqDxf7Ct3ChEJHzFgqWZQacvvyY",
  "key40": "3v6kswKKTJNT4RKxSiFyqnmzy3sXR5v1sQBUCXta15pzodjsFbzgSrkzHRpb9wjArR4nmNwbGDLbNQxkC8o2SEqQ",
  "key41": "4MYcdXgtUpnYyMcAeNv3iqNDzj1d23LtbFp2Pcyc5yZLeDstuk1qQugLdEmUMqiqQXekWhCy38eizCtok86tTZtf",
  "key42": "3dzeXAi6ddxb3WRYmPnSwkGYjNfkaxnYt2R8v1VizD8vfLUCf9AdTEj6fnnbGiHqx91nEMbS25bAKjWq2moWq7cX",
  "key43": "35NETGoYepcmwQfUTsPMCzMCVmAaq6C8DzjVTGW6WcA2fZRJ4FyARVmasFPXN3wt2z2Bf7UWzP8bn7Twf8kNBG8L",
  "key44": "5RTDY5bo2R8zYaNPdUtt1i7PMgU79uTNWUWQVXXUz2r78v5S48uanx8Ab6xnj6E8eTjR7fCyVBKp28o9iEEQapwn",
  "key45": "3YWndcgaFWzAQmwgAuYrnXZoKNmUexeeLh1CjZWNsr3WaEoJCbN3mTfpcf6iPa6SsNbCgkCcp3AyQMR5qe26WVyY"
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
