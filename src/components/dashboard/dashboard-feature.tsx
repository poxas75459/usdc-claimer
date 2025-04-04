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
    "2VC5YXH1qMcG71aDXh9VFMhZ28Ep1f3VWhW5rHtQE6fpFQ23cgNnSDHHPqsBd8c2jEipHFdHxafjjecFsBYvE6aB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rinsmwCkfkADjrft4q9taxPCJFpZQe4Tkvn6S36k6Dz5iUnGXDKWaCn8gXUyweUhunVuS4Fd7P1CpZUZ57PruvV",
  "key1": "4CHAB7Sdzdg73Kw78F6kQwTMtnVsXsHHtcwyBb6yeGYvMcXroQWvYygd3cRX5NzKUUVQRLW8YPu6t3UuRgE6pASe",
  "key2": "nWYg3n5AJYsfzojRWiURNK3gcVUXXPsfm93K42JwudoXEcpR3Sb4ALshnGNQb83CwfewY39sLzdZffCEG1SunL9",
  "key3": "4JLEfkTsAHmKsiDrm4h21gv3xyBYuRtRg5AqeYBqy8mPZXh2YgGNEeisrVRU1Pnz2dQnnqtEvaWY56pNYmuVtLvT",
  "key4": "WMnAsUQKj8SkCGtXfEdEbqKfhU1ByCb48WYY9ipmTHz7Eo1zpTCB42gCM3wKwtz3EcwqpKE7yopT1qt5QcWohqX",
  "key5": "48e1HMPxc9EGymufwTkcjCbo1452A3KF6R4D4CKT4tLwL1wSE1vnFR1LhapY8KofnkVr4i6eG9pGrgfsVbSKvPaB",
  "key6": "3QWGvgBL1jznkuYxweKQ9tkgbf7c672kvSVocs174T7kDGeNK8Ego13JwmqmKjWSDwLXS56bSjtXrgH2Whw6fHYZ",
  "key7": "3A7ZSoKCyGR3mthPXzk3tNASeHa6xp3q1ntDNozPdVyciDqF2HSPTcK3U5r4NwBUHJY4NZBjQUmhkC87tJFPTAhu",
  "key8": "5iEpCiuuEQfTDuEwo1h9cH4bDaYKrvqVuFYuAKLd13dZgBb3jg8z2pqgdVy8rA1vp3GfEaWEsuoU7XQ6uSe6PAe8",
  "key9": "5UJcE2uY8VjWXdXFt3b3E9sMioPM2cFgtSzHnpapypr71wPogrNEy4bp8wRVQ6uYgpuRdoBqHHCBmbV9xMjoBrVC",
  "key10": "5UaMXSs5RvKzDbCYqYENH2rRv43hxVkumz3LKw8FM4EsP6KYWgHZjUMCV46gZKUhR2mKKnvz8AcH8wvDS3cVAy4V",
  "key11": "j8UfN2VSNKSWvXDesaH3CN6FZqYByLnb65iawwi5YurqHJkAxpzeRyQ3YVDaqSese6CTvZMCWT3bEgjGg22KKh1",
  "key12": "5fWbXSujzBne8rjStJfGpCMLvsJ94x7Eo6d2cod5YGWBfZKA778yigV8Rc4y1n3wF52c4aowzqFnxn75s3kRFhUv",
  "key13": "MwH5zxxgTWeDE3thRxUmkyjqZ7f5GYECuAAMsiiVKWTB8R6vS1rG2W9gFpspNb8g3aXtJnfWp6wBYGL9HJnuiyJ",
  "key14": "4ff6zx8ppS9fjoJgeZpxotaCSag8hiE99JHzYTVp4Tum8U2wgV5qpTzcLU8NRks1eWZyXD35kvmSWgErDqCNeVn9",
  "key15": "2K3gi134aR2p7yzdupm4EPnWvQ6fcrCNCt5qqgqLcmR3TU3qeeCouFgLtniRPjzweer5R7LoXVGig9Lvs2cpvNMB",
  "key16": "2Jdi4LEnFxF5HtGb9bwjzArzXt8MMbviGJW2AJvhuWiehfjFCQjbmcNCj263ZpBq4TNhKpdftJj3CsryrsFaaj7X",
  "key17": "oNxSWz1D1V3wyvNS7q8YyVQ8739Lm3c6x7UrLtMEuXQvASQVxw7yRudqoWzqpyPcQh5z9BbVGaTwr97xbaNd4Fk",
  "key18": "5S9vk8DAusdTqkkMAesbvwW1rb9UP8fKu6XhBhZqwXpfZPuZVir3SnY91HEarzhyLjh6vFvK7RDrX1ku3m88i2BN",
  "key19": "4ymtMgmHobUpq2FGpLPq9VKtgV6guknMku4uuSLGJZMnC7VsTtghXBrfuaQzQZEjfrHCxPsATkEZ4f1fS2oq3DqQ",
  "key20": "5MipBkY7jkgvSNSC1ghUba9MDn3rNKFhwYf8Wdj9DPnvPpCtJRShGyAsbxi4yGRjLNMofsTpyVxtMZD3y3natygm",
  "key21": "aEoz2Tooy25TsdncJmW9h8Baq8vbPkxWPmxbufk7v9YMmzSvSt4Axc8JEmdQZHSTw3VQzhjisFU7PyHfG5w8uoN",
  "key22": "2RNB6vEkzTbwAwSsRLwHoUgvTzNKBSCmG8fK8kFvB59NSeJXaXhGAKBD8uySy5ZgeBWbCt4sxAs85vQnSdjwEdw4",
  "key23": "4kZX7zjTBW8ZLqhPq6AuPXGT59rLZJ1BmioPaXJkBrRdytygpo2tWBgL2QF6trbNRTHKzSJCKdvimA55FdydfVyH",
  "key24": "9XYtGCH11ydrxuTSY4PyWeXhQF3CTP61qvYH2VA23zHo8fmzQBmHLXbopczj9vBRuPXUHjsWXDQj5npmS86f8un",
  "key25": "65TzRhjkPf3XWfiZQh7g7Pger6uLvdiQHdN9aWczFF8AC9B937XD62FMkL2frMQrwbp2L4uPTfKLGpgWt6Nd81Nr",
  "key26": "52kGpv6hLnKMrHppnpeR8oX4TuBhY2Cc12fEkynq7b2PPUL1iN6pjXFEuHaSjGWzYGzLoy5J9BgYkZQr8JNgSWkX",
  "key27": "2PCqZ2MowZz7gs4hUfCoWVbqrUBiHVvTgak1qgGSSsrvNA8WopTyAGp7RPdnaQ9eHWAvW1s8dYzBZkX4izQono2Y",
  "key28": "5UMR1sJ9uxEpk5bYDR9BRovQyymJo4FCoZfK3v3uQCKBW5e9SjWMtnMqSfPZMAwExhfrPLjgtHNRQpqsNaDUxoqS",
  "key29": "5DN9zoYJ1Whc6AvG9yWnmS4qdNHYkxxkJMBBEjtJvh5fJzpFMknntDAdPnndqhab7uZedyxXN95C4X6t1NgPKnaM",
  "key30": "4fUAZo4uRctypDJwvz7rV1M1A5J7VeLWdMsY2Tcgz6Z13krtVJ71sbZSPyezQue1W3tdgBBSpiLxPvofhjfBmysp",
  "key31": "2qRXa2uXbhkBpdih66MvG3iibNLkDs9o92SbHPYz5tvCzG8SuMkmfg69PW4kigE8zBNsiWJAiK2ktqfT1yB8PnhT",
  "key32": "44xHaZL2gm2vCo63UHBtjv7AEDaR518msGf7m3vkRoGH4N49XWgc3NBWqSyrzevntZVF6C5bLK5mrF2G7fFzwbk5",
  "key33": "5aHvi5KDLh9AkXhdTg7hj2onznCPEqYH9Yg7dERQUp3P7g6WYcnUjSFBdhmVy1C94wAtEp5djjtBFmxLgxgVtV55",
  "key34": "ZFJCSpmPfrzSfQxKhbuqhFvu8DvDtW14FXEbZ4KF2dkTvuKZaCTGoVXhm9gbA6nRHzTQEq6NfkuGCjppZCB2aMb",
  "key35": "5mj7Z2CQrcJJisf6L2Khur1QCBaNaZ8qS6KjgHJAUUZqAZnYAxLoUQc74JtMJQafTDtAvaPAAcCS9sbfnn4QNAHL",
  "key36": "HrdPG5UZaxo1aXieNV6CD2bk3GiFQBg5muPATqsNn5SVfw25GRANS8mDcYw8gLeAFYd6ZzfVXbGrsq1rUMVQQF6",
  "key37": "HU15YxD3rZzwC3zCTJTpsGWNS6NbJdRp2Z4ca3CcKQQnygB2fpEWck1W1ab6CwWpXaw8GRUb3KZMzkACCzr1eA2",
  "key38": "62MgZESgdurDChZS23DsEixHXvH6x81csa2r2dFnRsszBhdSMhGf6W9kSKwcH3X9pzckZHSfFqNCW9oWHYtMN2BJ",
  "key39": "3PeGADGaJAszUDGz8cKENdUo2V3QSdhjHPuSoNc5s2Tv3hW2ErZA5Fy3dwfnT6QkQZEKePYq28SiEZDMV3jk6SdH",
  "key40": "3VS27sinV3akpEYpyk2BWBJSS83wk6xc94KQVPgMF8z1VjBTarEApDXUk8cFTFjp6NcYBeFzDQDKX7uNsPeBGAUF",
  "key41": "3HEYcLo5BTyy7PbUMZD2B8xvpsPoW2TY5Sc5D1ub5ydywRXyWhnAjY389sGtWMeJ9fm5kbdrQ1PwYSZpZZFWUEiR",
  "key42": "4Hk1iipJe2wLj1jM11mXCo9t8Vr498XTaVULziVfGshTiNe17JNZqnqiqMPDeM48BEEM9xcQYBfRVM5y1hP4MCJH",
  "key43": "Cjyny63uxTRFyVKReccorvG4ir2ZyD3nTZLCAJTPCJca7ygchXRDHbtyBLsNAUUbDhixkvfRJmyJX74CubJFzFk",
  "key44": "2GSQHA3XNtTMqpnQALvnHnPij9L79TJqfJT53f57yVy6CLjWkBfzKZSsFUSMd93YBw6KCEWvsuaWZeX4ftJeKVwC"
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
