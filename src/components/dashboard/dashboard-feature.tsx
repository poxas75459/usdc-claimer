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
    "3cjjMYm9kcUJEMME6xpKrS6QtLvJjBBBTCoZ89aWT4fSv8huN9wW1gxY1Cyvh1Lhh6khe4QfLkg1Wjirr7aKxZmJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8sEYqnUWKfTEjiuiWJFa4sBQoDabLoV8pXEPobx8W7gk9RvPfi8BBkmxV1Y2VmnnonQJKy7DVW1PYzHCx1YndWH",
  "key1": "5qV3YVdkxNZ2gW7BVpSCRcukD86CAViKmK6vHfAgAuUbomjnfvDQn5EgY2UZshRxAi5VXA3QRyVcC5NTontq9zP4",
  "key2": "2pXNKgr2pyMmouXwDSRJcWGL8MuZw1r69QhDtkMtKuLnkMhzQdxDV4qGBx3pKHqowVTmXY979J2aC2TCdpuQpvAr",
  "key3": "3BQpKnwPZkStzjN4BsbstHSAiPVRWSJyaH1ZtxNWKvMN4tVyYVZwH1QR35nxjtjg7NXJkYqBByXSfcd1HN4b7Hkg",
  "key4": "2Jn6rv25EXJgANT27k8d6rvYKn2Dd52jSErjHyLLKdAVy3KSNeTVvm2pqVQ3QtaMTAe4GHqeGjYg25ikWxAoYTd8",
  "key5": "4Z1y9hBVGvKbraDt1GJqmtooms4UyESjQzZ1LRFqUXxii8gjRcbc7Xy95rC5qaHjnwZ2EXKL7RRP6az1QGGhoyX1",
  "key6": "i3nyd88xrsjP8ZAWcKQ1kgTdsqg7APPbBjmqT5RMQYR2WaqedgYmTTYHvhGtrbsF8xHasXcHVc3rVHWUEFckKTB",
  "key7": "4136d8dYbvDjqRyjsi2qiRckNiPomndsGchSAv9e2pvLYdqyi5bp34TkQfPxhu8gwLyDgRgdZA5QQhPYnTabFMh5",
  "key8": "fBqeadkhAd3x15d489GwGkU7Wx1yZuHucDftEutGXUFZxp8CB8Rso7qaivT4wyfSLXLKniiTa8Bqt9q5PNbturU",
  "key9": "5RdCJPGygB61tbr9H6e1os6RbMc9Gzhn6ZcnZAxSzfMVZtrFikKUAGLUbx6P6CiiaouQZzpSD1JDCgLZuWQ2VWjX",
  "key10": "2vdn1WFE81AsH2mFTa2bYQnkDaHaCgRZNQFdgYDgYHZynB6sA2oVm9Bpm99ePbR19DVNy2JfFBf2cY6BWN42WkpQ",
  "key11": "5GRnHJN8jPKgBnKfeBKs4SiVEQMqu9dFK4NtGeiaaKBo7EE6xMQUnCwXiDpcdJ4BJGJ7i7KcgrZ5ZQrc9coJ9NdJ",
  "key12": "GxVF9AGjsp9bjZd4HJCUxYuyvZmBjnxcDbunJVr5RxvU4dBiS89wEMjJAPh3GBSi5ihqpTJmcmGW3BhBC6X5xXr",
  "key13": "2dJjL5MM3z98mdJagAcQV6BJJwnDn45dsCukzTHtGgHyV2498yWz9dn8gX7fQ8nnRcRAkdMQuT4Hmfkjckiijudz",
  "key14": "2CQ463qEQknroK8PKPWqHugtZevRJZemr9S1Zu3Cudxz2fwfPpTijpkF6wp2sVNjieRoGhzHR3W3TdpAdRVscrJv",
  "key15": "3NCT4UKHDyR8vrtrW6Ener9aFH1GdvDgugaM4s9DwpUtqeC3ZC93qodYWdDn1zRqmxQD12NL5fVukqBF4aDmhGrA",
  "key16": "Kz1k1XPFjfbec1EYwLpSEfSRn3pFpY1na5E52UCt4vNonCZgF8f3kuHoMPEnnoQoPAxpFXRPfe1NyejbcTmJkct",
  "key17": "kRYmgTuLZYZ32SkpYXEY6NbC2JDhXFBrtCbMEWg3aiocVP6nG7MFb8njRUoCq5UKWV7omiXSmpP8GirrjDUXMth",
  "key18": "3bu8VFKRtUmLyJrTfVScn6exa3BNoMNLqQkAwFrnAU6ijo1xB2JmkHGrzUJZXbSebzFYQCv1XcEt7uyTjg1NDruz",
  "key19": "34xmTNE1yg7j15sQYz5qYF2cgvCxYcfmkTjHav1nmFH6z5Tntu9rUMwypgFpCfyC3FKKuJvGiyPHeYXyM4rGuBUu",
  "key20": "5yD6UnRwqcuWCpDC8u7bFCvPkZcCyCx75ErR7jMv7N7ZQjS78ABBbsSFko99eXrc5REcVnMe5MbuVAkXy5c7CEVC",
  "key21": "joyhTUcpC6qgDoqG8ES1ZPWjZHaPnDgssvgF91JbWf4kZEGeRx9zxf53YgWfTVR1v7xDAxYgJQF9U8vs9SG8KAq",
  "key22": "3uuJiAZs9wFVLfx7WSx2VfytGN4ZpqTMCBrfbatcvGhYswmhcR7dCn4vDwDuAgde44nbekAifQz4i7b6mKBGGVu4",
  "key23": "28WZeSGkCcfUKXDeCejkwUm9k21wGEQdEhnjwRFWJcFmri212rPN86hQS2hGGLyjSQwLC15ommSz2GWYvHgUkySN",
  "key24": "4TJdSLNNhothYYa6B1WD1S2mGGFHcFbm1barpk8WA3ukrEWuGitNKMhsHYqBk73kgXH2UV8GAFTUp2sdtwhE7UnN",
  "key25": "3qby3sUbLf7fdhepyLjbv7bhUKQfSmDyV3f5AMSkfHwfxNRjhRqj2fvy77DMeEDxXBDbq81cyVwW2bTudXZzjbTn",
  "key26": "4LbLs9cmh6QVsmfrkid9ktVAfZ9Yeo2jTzjqeGRd5UNjyt94Z9ooMdokz77m5GzY6iw2ju3c5ErkHhfiM8zd5NnE",
  "key27": "5U8oMCToLrYF6biZ27k9Deyqn9RK4jjptZjRAEvSq7QQ323hzBdp6fMaAr2gisTXAu2Ax6nqLfHNXZYieoMWrMnV",
  "key28": "269oqrn9FMacpzq2tysGATZ6SmBgRB9vm1avbzz2NL8EFjpMzs6Au1Sii2mJqgfECPrNYY8yDej1c418X58nFad4",
  "key29": "2JGU9ByH8aLwZmkG5hnYE6CY4NCfus71PLuX1zgNBfvchSEuCiQDwqy7WdufpjWVVSw4vXFzmFNyTSjpAqMu4pzN",
  "key30": "2qm7GLhy3FwLPBiGrkmJDN2sWPNhzpSz24XAAvMp4SYpWz8VgiJ2nchUCakET2M1P8v9tmMhTmYzzzCiNfRWsC3K",
  "key31": "3ae4t6pm7424LGBENKRPDT8HShY4kaJi3vnSSK5wX5aq9myfsT8ZdX7GuLUuj3vwr8mfwUi4hNN2FAsTfKV1NQd4",
  "key32": "3dgEAumv9xCyae6qQTitWwaiPigJ3iJNsQuLDnG7oLPCeDuz9FD3xMTxnyNRsqB6QWAghtxF4bsDCJXhRASxFeas",
  "key33": "4M1WhHq64Yd96WczPFzSvmKbeMBM5CREvyfnnX2PTi2hKftZdDnMMN73KCP9FjGLiFYXbqkbfx9VVapm4VMQzYi2",
  "key34": "2LSByek244Qf2fjpjt9PFzsdDVeRtRPjomQCCUQbJ9MRfdqako2xPV22EZaAhJMEhZGsPTcatqbAcvYmjbmqYoyJ",
  "key35": "66RF5HKA81aEQwwSJazzLxei99nk2VZP8NAgP1M72umxnN3RPMPKBjcutWePY9zXiTidWgMJLzw1xwjubm3p2qCv",
  "key36": "Tar3LofE74zKYWFPbQrHWshUWFCeJw7YRdUR4Ew7hV6VvddpyRX8d4QfUEDeByRwRyEfAB9TqBkY8cS57dnXNsi",
  "key37": "3T7LFpCDVJjyXunk2weXV5dmV2Zs5og9LY5fZDj79NEaPhi9aspnuczXnmAyawrmrJpxtKuQ8R537cD5mSjwEFv5",
  "key38": "27Xf43PDGZ6ZVAeXz4KaMVA75fdXaAoYG7pVNsSv8dLsrnkGCRsn5Si5T7x8dUnPhCQLUUNFqBworu8Awnqb6Pa5",
  "key39": "23Sffow4jxt5jnS6ivin6UmCfwej48AeLdYpCTFfTEqbgJ1Jrpjr92CawbcsGWxLGQzgFiiEQpLaGmiiUXsXzYYD",
  "key40": "tVRPsiBgVSwktvoudfxBiJgKw5ezyxBv2qeFG15XDVdNGFKARo2QsPjMucH9qCoJUynMktceuJfsm7rrrEjkZM4"
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
