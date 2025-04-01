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
    "36w6W3x9wQifDkguedojQwzdf4AfuVTdUN1XjxfugWgpyDNgvrMEtUneob8NW2riecug9hKRZfAVxvkQ6PszHE4N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DGtvxgWf7c4m43vPctVtJ72i8mzW7yhMX7MLvdH2QYXAercE7z8uxyP8qAtZ97q74RgDYbhxvLoc1u1QeCuQsjA",
  "key1": "3t4vc4D4m7K674yYkitATtGNEVfLPdqPWT8KM7jxG1XBjwCsnepCqEe4HjJecDjoHcCb1PkhRLc5Mu2zuxMZd6n",
  "key2": "62PMopcqyyXvPRmGRJwWP6Usup4HeQWup6tJ2vrSSRg5xhhYKfrAEpqZH9uLw3tWavK3VhKFb7KwjebxvUkK78fm",
  "key3": "2XgJTKGubPD6F831PPMWRUvgf9gqU79Wkh3ZKJuWFww8umdiygDCx3hRweHXRHJovWoRk6we4ZeYXxA142WSoNqe",
  "key4": "L6EyKopxZiEhXd1Pu7pBMttJmLnBPYdAuUgPs3pbAJ5aY45uniPEQiUeMJpRuA4rnxQ2AvMHtCF3LixVGTYCHud",
  "key5": "5TkqfRNNRGCr8RzCvrKyoXo3eQpucWbZHto5nbgu8u7rKdTKZx6L1gEcvobz836yzAzXpsCtHbVkqFUuUfnL2Jjk",
  "key6": "jVYGrgwswiXuL8GMFn3u7yFSHkNQX5zPhZeop96yGn3B7jY7D7Q5MvFp2JHfwvnKz5RHrF7ocJwd1ThDyUiSuUR",
  "key7": "2z1RyGzgTJDM95QuZdP3JUqBPMrfyDmMrA6NTaHC2dz8t7xiN7vHESpemgVydobvyywGtdoG3KZAX8y6b5eSEBoz",
  "key8": "2AEA7HDoabba8kuuJxuZB9uZu4oyBMKQuKKKyucrnPUNbkDxpWAm7iP64HsdLX1ASB3CL6usqEaHDcCoa1zubj57",
  "key9": "3hhNZjAxCbac57AHWkqERfSWhuFVxTkVbDbHVGFnmiUT7YfnGwyutnGEq7WyyjNvZ2db5ptH5dyHDx2jkou6LXTt",
  "key10": "P9xezT7vRfTUxEyHJcgQio1ndQb6RQd4dSVxGyeDCXMEwTEUBMPdAKvbEegRXTo37fcFZLiBzHeRP9AFnWS3EYY",
  "key11": "3kY2j5reGqrR9aS5yaEjzvK4bquyCTVi8xQPswH2eDayQSQNjfxvCGxrNrzkunHmgd1aUCYcmWx8G2gbLFeXaPJD",
  "key12": "55FLAJRDbJqLEMHuvFX8Re8RxLWS4MGCYqky1shgJQttoYwgR3HjhSkAXVhGE8ofkrX2XPfK72zyQRqGXPG5o2Gt",
  "key13": "3hJSwDqSmj9cchnHzxapAxqWEwvSawyqGVH9UcyPZCdB5k4MVnDnqik6xQ4xbQEXw1Jx3sXRzTP8o4x1zQW5LrzJ",
  "key14": "5RH5g6njeDncpjxTGJpsQq3k4VFx4iVDmWwjZfzrNyP8ZidtNdyLGS3GGZeNGHNPV5yGN3hSsBfp1zF2ddaQ3vKd",
  "key15": "3XTsmowsxKFeGHQZuLpJNSBtRh8Twx9m2N5M9DbnjJYpz8LHBNFnuFibPbiMv7gv9898PapBZ8fqcBhwJEfytSgU",
  "key16": "qruXx1DU7gErnv2jCXWm89pC3BckweeLWFXsooX4Uw3HUy35XcDV9eCdJqstttNSQdLpjNgN4sZ552aGWyWdDuC",
  "key17": "4dpWu2XszQTchYgA5P7CQaAA3iJqJPhCkENdnPDeHnAa5f8eysXrsZA3Yf8bWcyHAFUjaBop6FqBrYzcJ7VWHMXK",
  "key18": "4ZJ65PJndVwK6pBctFLj4eLDE2HNoRgqQT1JvKMJoKVAYWEeEd8ddXX3EZKvk6orS6jX2tFwQ7mLaLy4U24mFjdU",
  "key19": "3BDjZQ4KHdATGi6mNsnof2tZckYhW6GbhS9ng2Tq1kATHd5riFo5Kjj6dUmn1bSaAPDYumHjNAMdsvYZvvdHJBcE",
  "key20": "3TJsLFcokCCFJ3ZhWq7CAGRYhR5YyCp3sWZAxDXPKjchghyRq8YrjupWemUEVvsr8Rby4Mes6Q22VjchEKpX7mPK",
  "key21": "KTekk4QGqQygEhCdffKEeL2wGYZ8LMcr4PC9HUCidFiHPyXfKnFWJ2dH7hk6WBy5bRGZf7MEhjMfvWT8D8jkAST",
  "key22": "2hWA61SG3FCGyx7beiveGPRev9zAWcn5LhuAYngQhmuR14eDbmU7Bg53KonzSPvgLxsQYd6Xhjb86dR9jakcrdE6",
  "key23": "5FXPUDrAPnKtC9tLTs3v4GngtPNHBHkwxG6uXaTyqXfFjr5DW7UVgvQBxRtdTicozYaZ7LmvCmmb1ep6fEX8BxfC",
  "key24": "51BjXsQYJEZ842aPSRvxYSm9dZ6GvSo69P3Kf7A8y7dEmYpvwDMH6AY1T7QQqqXpRFr321JaKP7Kfs2nseZkKcnA"
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
