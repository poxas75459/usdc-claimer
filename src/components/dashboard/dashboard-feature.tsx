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
    "4rqGm9tfLRbwuHAQmYsJrvHvERtUMbGwUZuVLKYc8saB86AR6ZmYt8u7SGtNHfPXQmn99E3tR6NGYZ6cnx1Ruevq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XJJWbrff2JGkT5bTb2y3NdfyMznfvVmnrzJ76TwVETh3YdJok5pncbscP8WcYouP9fkzqBgm8pyN2hghYudFsLx",
  "key1": "26oWvwDFzpZXWUoY67vwXxoEb6P5E66wCoeD7wsrb3vWeNEEFzkfNLj52jZMDEn5D7ingf81mzaFps7mYjivQVAm",
  "key2": "5dK1iUmF5u5Gf612wc49jKcgKydALtv3TTUz9jrQgnqxTAfyT7rbyW9SFMdGx5hp2rHtz8MikWMeDGaKzY4npQkq",
  "key3": "2R39sbSGcXU4R9kmfWjxPsH7HcZhnuSqEYnv7z2qQXBxDHBxAonkxVMrBfVNyLioSGKv3WGrB1b3VryNjdsBoCh9",
  "key4": "ztjNjH5RwRoWrs5KiLHrMv54DcjH2dYkfFxxoSYJf5Ww8AbdPkQy82cJwicaJivbxVwgpo8JN1EvBRDxS2dj55p",
  "key5": "3bXM1qUZjCZJ4aE8Pekqn1F3LNNEVqckvtPXGm5JSWFXepe1Z4Wif222VaiqYDEBo94Y58nGLWEpk5HDLZsL7b4y",
  "key6": "5MGPX3NEdh2RptK6RKzcTbJK9yfttGWN7K2XyG5Fk93fsyp9RTytiwSR3yyCouPhN7GgUeiga2r9XDry2boMFPta",
  "key7": "5G5q3Ck8JbyTkWC8pi3RvDsgSd7kodKGGR5tAPfDrLtHquFoTKMbhNBPbG4rSHxz3hgcjVjPpDxWZps8MyB1C6m3",
  "key8": "3dGBKyx6uZ8fquaYn3QZaMhoBKLE6gpe681tFTsBkpAgxfj5dSYv5acAStjZ4AoDjTaNDgyWKu1gdVbK6yAnC1xB",
  "key9": "2fujsjYwwm5cFYauq6SfC2MY6DSJRiryNpp2u5qMV1y6EM96ucdEpNxkXCrkvy1SCphiDeVokVy4zeqnPixLEeAr",
  "key10": "5fTZNCTP1cJUswwmM34V25H8Ns9kWnj57yaui74XPRPxxnv3YxTY7nB7c1om9fKtACu9NiDkNnuKxkX6YxEa5QyA",
  "key11": "njFRqMCkrQiPx8pLKvN11PMscpMGDHbK5JNp4vW5HBRKpjmN78V7nadMrgPnxRrfn1zyk5w7ydu8XY3sJ455kpb",
  "key12": "45QjdyxCYbLQ5wQwsqPWEJ2nS3fCbnpusJmgKS8y87Jo8PgkVBKgJSq1phCxuuKRLw6pxv8RAyBhuD9e7DcQxer7",
  "key13": "2z8pgoyER92XUYWR7rvQ6YzNS7vq28z8M1WEz5FYLNbRzQ6jZCJWA7ENsibVdVwcq18vkKzsfNE4646aFTAwXdwy",
  "key14": "4swLDHybg3mwVTDxsWpCdpFT9Y7jqBxqfM7q3ptZqAXojMbyH71gKguCiWEPKvqHgWA26z465xao4SQqqEy2CZL3",
  "key15": "LiqAf37HBzr6sHtMMhHK5wcAoEHkVkTRM3PTf9b5kSK6o9rbRwqc4K35DVpC4GuYCEKcErFTixcDgxSZpdDHXCa",
  "key16": "3pDTNdTexT6F5Dx3yWsEkPho5tEMdyiLdpQbHZj36y6n68aHLn9T1DWBqsMFcHjVBEU8ScDLDgoUb7GrXc6sdo4X",
  "key17": "5zWred5qPtuSfN4AF9hBTEE4gmHQ1uJMjX6qn1pFxEYYhHt7ZpX6A4isDQE6fwFMyaowGiesjgrrLeyttLktyQei",
  "key18": "2Q5cSGK2oDab6oUPp8xiVoRW8pj1NGfPJw7BWko5YN5Tfjq3EpADki8aPfmLA4PAdJqQHuc4UH2ZBCaRUJbX8oMZ",
  "key19": "2wkYjPiSguCp4pQduXPVreUjZFWZMhsjNN3JoBm6di9XBA2WUF1NJxvRsv21ZcZe9FqW9ykfvLcW45KqfpjxLPuV",
  "key20": "4jYeZQ9SBswW28ELP39vM3bNLFgwHjGowAqEh5dck7sC9J7DE557dwEkbTQnYiqm29yFqDsUFp26JLUUiZSTgZnM",
  "key21": "46iE6DHX6SwUyphbUhP9n65k2CKgJ5iRQSLMZr1MGvqAJzo4PsNG4YoFyR65Yu4GCRkKUgNsJhK86aCNwNkKxKQR",
  "key22": "5SVjd6oa7x7u4Km1uafbmKy66iNGcCqbr2izX1h7CszzgmyuhTfSBE35rUzxV23gR5rXUmkcGRosgJkX9KksDyU8",
  "key23": "z3kiVSfPhaSLe8zRUmZceytcPUsmcLQsW1EDQfgbXpa6v2AR1j2m7fbavrdD5z42Qx8eC3zVRv456D1owzLDpfU",
  "key24": "ev4rTuYr9qLfX1tPDGwadGTVYUcFrFL1JVKNmqj7sTzFqbi5Kr5x7uFePxTT4CtjpgY1hQSDMVq6DxfLV6uaDR5",
  "key25": "Ug2cYZ8MGKd5wAVQSNHnJQQUNHDSP1zf4b8KX4nUSwDoyrZaetnZy5D55yWATSdyQMVU7kjxY2GmKxKzpWQzj9q",
  "key26": "rw8gANPw3kmbE9bJVkbEL8bBpmzWq6n11rKZS8PYviCBWSNFTheJMP6Bty2pJX7touz5Eo9A2a5prmf8aqna7iv",
  "key27": "4HzWuqonss7TWZ88GjHyeKKu5YSrVyXJRMwBfh9eBsWL3ZQkuUjCw6R53PSdYXmSijKNAjziKtdbf941cSbc5QWi",
  "key28": "2Jk5Exo8syr4tcchv95WNNemRALQuPZj46dfJhZ3Yz4TQZQTsmwgSG3PPVuq6b19pAgnhrM8tToY7gWfwqMsrRkB",
  "key29": "3YNPwsmXrPqBmw9weDiApGgyRsAjiHn8nAZB6KPLHEmmt1onGJcjzUrG9H385URmuqzb9zdnqKd11bvi67iv3gqk",
  "key30": "33VTNtXbkjz7yFrtWyVGxZDWAbmv2C11W8HjN4zSmg1L94x4ASwi1D3sjr7aXYhaVegnrFhLskGzFpJXLNkpwPvq",
  "key31": "3bWYaBZdqU2MnpDEFMGmd4NJbwBnGhVoBNKKpJDXjAsSQBAiaaCyojcmm5PAK89QgS7WKxpGEyWpy1iSJNeF7rvn",
  "key32": "5Xj6itj9mWoJw1zfqp1JtdsLZTBFqLgqTWbACp7VvWRMzo3ZJs83Rrt2JyysVu2SA3QkSJ3cZ89Ui6C2fs1Gi8s2",
  "key33": "5s6U6R79PKzyYC1yTLxqtVKgKUFwW6ypyaKAbBsyrc33DxQPvqcMHbMA7n5a1MNVxNge9TttHR8GzhN5JLVZk7cN",
  "key34": "37EX9QzbphshdSbaP7YZRaTsgVGhqVizZCnCqBFCR2JFGHM1TQmJcSoyn1cWsU9ZYC93tZ9vznb7K9zvwiRo5EDG",
  "key35": "5HS9JTyGZPqRGy94rQQ5PjAPFiiom9h63AVzYGBeTAeVZ2t8fReVCuCB1r59w59tL7iP19mcbnS52Rfrxk2Z8qCf",
  "key36": "5tx8BHy6QBQThZdTvXh11JgNebSinFbahWUBrfBSFDimA312c5s8iAjDZaahwenzxkQXCBJ5JVZo79dVyrw4b8js",
  "key37": "4Dq3x2DrenrUWTrfFjtCef71ZBKrmBnxr7WWemA9sGGu7PRVPj5prgbZoXMeFWN1ioDB8yW1AA9JrszvvFUuKv2T",
  "key38": "3crSWtoUuFDrY7NqzSqB84VJnAvtzTACoGuS7ejbuZ4dGbZahRwLCT5aRwTRAycm7tc97kBqFPzovLzz8buurTeZ",
  "key39": "56cJq6Qjo3qzyPzZ19gZAWtjNkPg5GmLXqjk3uXjP5PP2PTTd6tGqWYcgJg4TRdTEcM5LzXsZLpVSsBoGtAsrCPt",
  "key40": "5RAjhQaB9C5a7bU9iEudZgTierumanEqqZ65PbAtcXrzheSqFiBHKyELidX7wk2T9f1hQ79UkAZaLRtetci2xYyu"
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
