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
    "5qakYm7p4Z7kf4Ab1ydX9u65JXd4CzLfNQiLUX8i6pCv49qKz6d1KqTMyfqJCKHf5NzPY1spkcEdQcss2Ybjced"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UTqFpsC1Rb2G1dwF65gGNCFELj7bnpgu5ej6L5TzMBMVxeYD8tXsMs1cfTBb2DRoKh8LMTFDtw9xL33xR66ripm",
  "key1": "5TowLY1VW7vWMqbdU4yTmDXniDXjjqpyWF1AMYV5FaYnqE5mXoUkRBF78DYAqPH2Wkhf5hvNKjpxnctAjw8SuAdR",
  "key2": "49yYaWVEwC1xqwTRUnHxEXGVz7H9bLMKE7nQ6Myf6tMtwSg8Ghk7G6PaFVyMtLEWxGms8uqNWBypqYRf983PU8FN",
  "key3": "3jKwryt541a2TrEREv5VDW6ugRZf4LpbC3YmXFdbJFQAENuBS2MPUoPLLLh41C5mN4gkCwmRWbbx4FQdgaYJdK91",
  "key4": "4sqetadWf2ci6gBFrZfsNiuYz1UZjZ2diN9T3YqS6W32vUbbWo4LpQVTTUApAr5gy8wEixJsp3y55RL8afDtZKNp",
  "key5": "61ZuBdsFVoa6G6xxctC9aXXZ4WyHQazTu24VgNET6xmkQpVLKyvFN2mofrUzdHWMzjMMnQnBQTxkcQWxtzp7SP8u",
  "key6": "3GWjx43c7H4f7pXSnX1zy5SdA51XX7dEuvyTh4UqRSiutLokeja1A4vSHgmTTagHQT8TTqneu256Nb9D3u3Q6Usi",
  "key7": "2mX9Zz8aU7jd9Mo56SFsMaJTUkAfHJWXjrapHc2sZF5mPXAbhqvhhpwGjtVmryzBRbNZUUztyqeTPZKiLDLRRw1u",
  "key8": "3qUVmSH9ev8yEEExAcnCrcNFXokimvo7BXj9nru6QPDpQ81ej3u4Wnddi2QorEiqH9CUuLS2GToQXtDsPXyDDXVr",
  "key9": "4obh2A8bkj7hg9b845a1h9f1ETyAhWG1xqDvYTAWUnEQE8ZjrRsqj3t8NDFcfbb7mpLgCjnaqLffrQxDZ9rVDhUP",
  "key10": "2gZV7o8HuvbmDRccP8xBbPdVSXa4ijZPAXkyqb2ezGhQv1aY68XaUb3yKDxWBRzKWmih9J5xRp3vs7pYnFhMjhrm",
  "key11": "3ruyKjCirPh4QTHYDZAFY7hQujSQUBhHqYSQTTKsKFxhVTKZvZtZMekAMm74WngzAPLqNn7hUuWJFp5YgZiSQDsd",
  "key12": "22vkFjbhnbbVwKCkaPMPt1Y3iBxUzoqL8Zfm2XPHJUsm4KPasyKtjktfbfXoHmBoEXxYacZunBsRpLyL8TaDAnuG",
  "key13": "5tXmLyf8NA5Et5mijM3vorGGQqcriMp8AWcLQhbUr5tujpqgY2cZMU3cRi4tucZpz6vYp11saJz3jgV3egoGsKGd",
  "key14": "2uqpXvEu5o74Nk2EUiekAa42afgQaUcsKZamubkYjnDf1nYgn2tXoTqTpZCFy2NG1ydJb68z9t683XwPcAeyUEPB",
  "key15": "6mNs1DgeGhbz6T3Fe9raGdH5CFFF9Zj6E6VvuZXobUB47vuRgtut5yKs6z6ib5wtfTmg1RM8tXjuUtDkdMgc7sA",
  "key16": "4Q7JYykFpHx6gz8dgzkGT1cG8y59tUGDvjNVsRm2JkZ5KPLo4YFD1xe3qR9HGsWa2AhUGefttHZ3CHoj2jXSBZic",
  "key17": "vvEB5N7sqF5L8vmxtpMx1aqvbUrA6XQ9hECZPtpTooHxjm4RrZQDP9iFBiSQyVgiPqAn1K1FP3kf8Kp3QCadP43",
  "key18": "36nL1mbUcZMZFgZzb7p2GL1HbNyDLNrwKvpVTB72r8sbPWMJBRweTxs9mHvKFhggaQSRabqNb4Bc6hdp5q3CdvHd",
  "key19": "KSxj6qWRAgqGcqfzE516he5fUeWZRgXibAcZntFixasSE1paQRPyc8E1vf7Zi5LZ3joqSgSPaj4W5XkyDjtCXSk",
  "key20": "4VLmoKaX7VdpNd59MMpyNjtVLToHEJLnMiZq3S45MRPZKbGrG2riBFBv3JwKp4fKe86sG7qGyiGTifgcnZ6rTbxT",
  "key21": "4r5cF3QtDcK6gwMWNs1pMaLEhW4p2BexpRRyqq9L9Yf8L5ZQGLyEFrPegTWkrX7DESgQuX78Keycy6n3DD9cE9sd",
  "key22": "2qEyvRgNi7bY9n3ejekUoN4x8p66QYhFkoXoxALN6qdbVzFcQ1h5kzF9fFMSbG2otLjgYnLNWqvvcht8FyMjy24F",
  "key23": "3wSp7W7cdAPncmSiNoUNoALEmQuNewWuiTSNecAWaNyF7rs6uLe45ch4qdpdKf5XgstNafKRyn8YE9Ppwak6iEEK",
  "key24": "67f6rCQFcDyAy8QLkGQH9rWv31SpaW3sBjk9RyJ2RHq4MPoiRZ7yMuFvaUqJgudk99u4BV66F6KwdtDQmm9ccw1e",
  "key25": "5gBSaeihsnhh9NeH5nZkPjGahNpZgaqHs76aH5xaFy6St23k4MzBbi9BHSw9yqNrPyXgWF9b4pmaYYNRt7hQ1VKK",
  "key26": "22zVU1xkbFs7b5ZpEBcmBWXQfCFePNgJuijgM6Heg6sdsgYCd9QRbBXMXZ3RLL5BWTPgj2xvvf5AsaXtoRDs6bC8",
  "key27": "3f65yg2XHjmFJ2LzUNPTexyYSwQJLRv5XipZwnbMG4Z8EW1F51WdkF9rh8VAY4f99sjNycjxPfnEPihDTgKiEAqN",
  "key28": "2Q2iq3DyPhbzTD2gTVhYo4yrXdF22BmbmKC1pwKVmvTrnst3K2jA2LrFFhWyCbegA2p5oJcqyALwYpryxt8tfY7n",
  "key29": "3tCqk5TWnr7ZSM2PJsF8YQwKQiWZkWALBTFtB9zf6i2cr4Sd9pVWrR2Z9yZ4x58ivxwzTjzJ14H8CKyfKrvKnP2k",
  "key30": "4aMN43d9LRvxxcYKVUtzsTg2hsYhWPZxrNhBHZkTxqxY98XWG3surahoo1nXqzCU7wksVpfjL4rbmahPB87Zi1zp",
  "key31": "5RwpHtfCEy2aR23FctpYxDt5qD8Y6EWZaHbiwuYUYacF2GwfCRzvVvygfGwT8aPSVT9dpawCkVXpdUcg2o2ApyZZ",
  "key32": "tJvSHxkRgiDGJ4qViikR3zpBBFiUHai1xRFEdgzhArYSRFqYD7idz1Mvt7svwHHJiTwE8SNLzCiVNAXPt8wwR9r",
  "key33": "c4jA2eD7SfJz4ugz3HSDyGkNE1cFELi4aNNXdKXBRjazmneE6cUr7LqU3ugc731eWM5ENBDJJFSeRGWhtPnc1BQ"
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
