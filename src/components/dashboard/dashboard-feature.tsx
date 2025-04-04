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
    "381ctCSwGhAEGLSxMHqmXF29jS794Tjxw6kiTLyUpwRhr65sroxSG1xWCEieB1NG41bitLiCtQoe2U2zRCkdX1eL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tscPYGSyCUQ715ZRHDf8G3NBYcZT3mtEqLvgmk8Jtcn9W6pXwhz84fbcjdNyWmCLuGWAkuD6HDRhcLjRpVFy82u",
  "key1": "43Ex3UQ4nqX52bdsByfzbRT23ymkaVYwWje5KgXzdN2nvSmcCmuQityYzKKB5WZporo4YNZQypRMoaV44TMRVUt1",
  "key2": "5nJ9drNRQAP9uxQcy2QhkeTa2NPpxnHrWBM9nF6vUTiBJxtm8SeN4Gy6BLYiApu5UbM3mLXJpL5N934C4MtXjwTd",
  "key3": "2vYmFD2iFH4uAtHw6sXH26Jvoi7j6WzkoAx5C7bLN36oJEVropLa9t3qhDFdyntbtttLnYQq9Dv9bVWnLqdDeq9r",
  "key4": "5oxEZyWA5oV645vFzc8qUvreXr4gTAu1fat3ddHZ1SHA36abvLskrPwwtyrQ8pkaHZ9RGai7ADZHmbHiDq13aVds",
  "key5": "3jMNPuEcxaZpcALKfxzWqXfNarpanZ4AfBSy4uYSRsKmXKxXV3MtoPYuXbK8CVfNvQr5cEPS2nChjcTi18KEZs2r",
  "key6": "2v1toJZpkV6oMRhYeHp1oW4P2jsA4G7Wc49CrnJh6QDSMNtAsyXUv39JHdohaEHJUHzu7X9EjCEAdno8ioE55jbm",
  "key7": "2mGiz5Z7Nh6GHU4HXDUWiyUAMf6U9Nmqa3bA9b28z352sX9ENwT9mVnUwxzMJp1nYen2sGmfXfHiV7hpQ17WdubQ",
  "key8": "4WgvvMnhRLTrAjGjDe547zaNdgGg9WVuatnJ7ZdMzyhbcokoSsmZM5qdjKLLM7QKdkWHgSMzaLXx136MgSZSYwMY",
  "key9": "WAbmpQHQQyTdutSM9KzA25Nfd9BrKmSjDJnxtRBakWgLWKXqA4uaddcw8fxj6Mx5tGNcYy8XKydpSpaLE7iBFsH",
  "key10": "3E9NLx7iF1mNWuWPpLc2JDbuCftPSockHjiEpoZnH756omqs6jasGNtafjM7micc6wWH2G2sqfhRNnJsayqhSW7s",
  "key11": "29ihx5SwJpAWT3tnBei6UrzAmrMcEXFpW5a4QqM3CC4ggnARTLoZDCwGSPbQ6Psef4v2p2B9xqd6DVtCTce42sZm",
  "key12": "2nrJUjaHt9LjXhaoW39oC2aC9WDoGL9Ub5uXK1NdMXJXD6PMATKjq7GYfPryyPLotJMq49JwsvCgCLeJuBDaH7CR",
  "key13": "5jtCb6Ep8TBUqS9M9nadtQcfwt5tKuVXcZYZ2TxHvh2aMGJM8F2jTHTYkw4nUiuBv4cuxV4ujezzLebcQeSboVHt",
  "key14": "4NgC2HkL4KUwmALw18AhtYnSrkPeG9XZuZk2adbScG43XqZ73snVxeNpjjMmRKY15V3NTtzLFqJasidgEqAzeYhn",
  "key15": "671b4LNG8zcgS4WQXUTrZsLUTpoursa9VqeuMz8YHHfjmsAyciuhrJbeQnDWUEL6ZsF7qYt8HBDQbURpDkSRVduj",
  "key16": "3MrkUTcQ94rB3Kt24Wi9a4Q6JDjH3MNv7JnCicbmE7gAx5QFJNEhw2wfGqyShJTyWgiKCTuzjYpJ761SAuvaKwxj",
  "key17": "b46Rth7sfdJaWkk4kyMCrXzKoLsqN8u8uQ5EXyqrDfY2UmYx71KpB5DugBAj25ZqJAZcrmL4ZYJjPS9buMLdTMh",
  "key18": "32LjQRuLasxd3RdKPv2pRs6mNuTsbCxUbzuiqMKQ2WAqSxQtuga1guXitqZ7E378vhJ2HfP831ZTYifxGL9SFVRo",
  "key19": "3yY7yfUwSKybx9bVVQAC2SK4fPKYMq9bZ6pS4EEWioWxCzE3fb2NPztHhKcsRU2yTM29QLhGVxrJdtfKU1rUZHLp",
  "key20": "5e18Z99YJBctHuqi8GJJVCrrsDJ7vzjB8MX54ESj2vHfcb7idTRyTDK6GAraPQixXkDmRaDCvW6UfwUhNrHjUrxx",
  "key21": "5icKV5UarDkWhwN9EgxPiguhAHvmbp1FmPC5jcjexrQcfScwsMqkTF7v16xrmSmVRSNXfzHKiPBdzRVScTsS9qmA",
  "key22": "5uwwaGpRNQj4T4diX3HbDMA5NE1uH1Xaxza2cx6jtQKtc25QVqPmNztaxPft2wHEDi8M3hHE2EvfY7wtoMqc6W2f",
  "key23": "2oRHAzEKGavadWFYbRPkG3Ho9R6S7n4YxVzGDTepwPBo1JAorzsShsdLLHTtxmm3EBDosskr6YxBthPAD94sdgxG",
  "key24": "3ffvesb6P5QmnXE7g8fHJ9Z4w9pnSNk9Quiaq2iottucoGgwv3q522HYamSJoxAo9ZQFMKGTTuiijE66h9vi9enp",
  "key25": "JVC9DAaBFWtqhaMBBfU9wYEcGU1M8tZiXGgmm1Tw7mYzRgZTxzvZ6GyP3eZquUccoz5Z1bkF4XYj82GbmwPtfAh",
  "key26": "33hAEtXV3zVTBLbVZXqKfDDvNWDPWTiPmvHGjq6mssBUmy2AwgnYcRM4LwVxPfEr3rbUTUWts6sF27cxWs2ZSaQt",
  "key27": "32xz8UBcMQAPYfnA9mp4rWYY7XL4PdwnF8yMoNGuFvy7HkaodN5Vv9N661pLzGoY64QkwpsPdSGcGe2LQREw6J8n",
  "key28": "45wnsgTfzTzXr8uEZeCRx6PQU9KxgMuMKME7P9JCuLHqgpfZ8q1mYDo4QqBTkj2Z9gL5bE4MYSJ5qqfjtkTKm4Sk",
  "key29": "4QQHkWAv1j7QXdsGDKtQotaUywfEMabaqAKDvfSp3MKS5c6dwe9wxvDSr9GkX6zqXh7v6pChNvKLVh8jdFVUZfWr",
  "key30": "2qoXKAuS5kweiii67EFjmjfwaGVRSPAx67N1z2BFfYKLTSEUGGyZcb8LjYdWTrsWLo8GrHLcx9xRpTwdCXTTniAm",
  "key31": "2yGhXqHKo8iuLE5CXAvRF3w5XZLMko3X1A5xxpjMEVeThq4RA64B3w1VAKASUX81TrtojECZA7KdXdHPdVZcXyeh",
  "key32": "3j14iPDLF6t5V3pZC8oTv68uKpchHSnFn48bV7VMesbgqYYEfGXHenFx9kfFtE6JML369QBvRNL3CM1PJENrStdb",
  "key33": "2hBzZ8kswW3XARvC5tKYw49PL3DSWTKRPJ1zLExMJkCRhwjxqyQan56isota5r8fGTuFXouwC41ZTbcZi7zcvwDH",
  "key34": "3euMpCR2MZ6NDK5jppNyjLSFbs5ghSem6HQKx3YXo2gnFKdV51yicfEcMqYV2C7re5ZFqcrDz4nq1m3MWHNjmB1q",
  "key35": "2pApH8tXrekWoBZ3FrYaRiabBcjPagegtQRPWoejCede292s88zZxnm7JUYUrPMtSe8ADewkaoCFEFTz9KAipWDJ",
  "key36": "4YXa4WPaEJ8ZRH6RSoK8T4QedqQm8zNYqLTqvCFi8V3ejpEVbtFaCgvGyCkfMU6o5yadUPuH964gcQgggbDX8kwz",
  "key37": "58xsvUQ7XnhBqto7x7f1urqg36Ghf451pZisfegVsw9U58HEkfrTjDmiE1kCZL4pZ3HPf4U1C4JYHeJKXWs26DjG",
  "key38": "WK7sVo13mfGcMnEnxSskc8puRCzyyxLxy78ck5PXvd7N74XQcjo65AqbSiPq2uHDBBf1XctcJDWEU7EWA26G9nx",
  "key39": "4rruJ6Z2zmYBbrD5psnCaYFBFDYxwWcqCT9nJc1LjNC7kZ4rbLQLW9LY1DHda7QH5dm4rPyLnjXkXKzkJG9bkFiT",
  "key40": "3KwrpyqjQCVsVQsg8vzR6jHVPJa3LofXdgdDoDwKf4UgnbGTg1omru6Zq8qNTromz6Wx3fJrkJAi6ddN39QqoAJZ",
  "key41": "4n6J9ZN7aWz1iKwQ7oKx5niBkmbBJUzK34yaqtWSfdtxxPNW7rqMRGHsty68W4azUiHiCak6Unw92F6chRJHDJyT",
  "key42": "2mHu9KN1evjrzGpycsuTvSNvWGacXvdSyM4PbmtsqiijPfdpwD355axBu912p7aqc8YG92cjgcj5yXbKyR9zroc6",
  "key43": "52FUgC1NCSss8y5uPTAGrdQmdpV6tQD5URf6r2PCehjCWBn9reK7jmNcVENB1vzAJM2kBLy5vQHZrFUhEM4HVr49"
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
