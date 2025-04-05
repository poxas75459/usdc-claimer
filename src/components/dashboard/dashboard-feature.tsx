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
    "3A2wWqUnprA32hevqEEbGtq9hLBZ158XqRW3P5FPfmacjasgMw12ogrZ7bimxJ5Cq8Jr99nZcfeisX13GxYwhbzk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mKf1Rzh9C4S4bCZw3KF4ADMNUUVTHSsQFmRWtuyfF9dcipYiJ5XtCmgVq3vUiDbkYKxLNVUNXaTHX7saHZUSQn1",
  "key1": "3jjdR6RdEG5YeWUa2S3K3SnAXJGVACKBHtzTaKq3PTDCCpHm6Uq6VZX5i39FfpoFQqL4wfrJYtMo1PJDvv1C2trq",
  "key2": "cnm1yxjgMyXY4Nivp5ZwBZTU4otPcokAdFX7CHS97EKF83gbNpdEmd7TUJmiPs2Sxb2Z8b8TM6ngasTfYyNqLu7",
  "key3": "4PYM3vD8eGHRWYexTRqwS5P3FycaF9gzSNhpZ8qxuC8JqAsb9Qh7M7yNvDb2q6JiZfkTXu1u5EHy3ruqUGJQxVva",
  "key4": "3sZhF6nrMPjxzzf1uJWgFwbLXjaPEoDDEGzn49BkMnQqf8Z366o7TshPnTA8qaAXZh6QTQ7X8ioPstqTjnWd7eP2",
  "key5": "3rVNrCP4jMtGFLkUJV61pmszgABXgqZQfq9ZnXXQUini4FYJ2gWd7HEc8m6UcqkQL4XHgqdJpq1W3vYhYJ7wcNqk",
  "key6": "5BLYpasWbr4ksDNbbnzfpffJoYzzFcgTYeyYXfqaTeG4kU3xodYdYXjev1QAQHrjTGhsqLymayCLoVyMXM6MZ4QU",
  "key7": "2MLiD1ubKicszRSMfqCJCWxDEht1hJZ2TJUGgm7LhuXosq8VqaYjT1yte5wAf9DWM5vLjGUpY2yppSuvTSPT9reD",
  "key8": "Yr6ptRa9sZgQSGDZwVXbYadJXouDHR6GuXfeqitgCxwvsN1oiY2NCrmZHkwoNLSw6Au9WSHgMo57b6DDyuBMJmS",
  "key9": "3JLZ3qqmeCWa24rFevSWHLuePjMj2qZsSoqESFAcZwN73XNE3HYtjP5NNFyRwtQjC6VbcqH3d2sxuNC99YAWNRgD",
  "key10": "5qNHuahd95Xsx8FXnpAKG4PekvUtGj3SUUV36JdXiqNr91YPzMPfa5Wer5G7qSBQ2DgNcXSE5yQcnuaszZ8GAosP",
  "key11": "5GD5yaECwPMsEyqcVyo6BQSrnkYk9K9WAiuNwoNq976KTQfVMaFTd9PixEM5UhzNVUFbTBiQgjUgZAmpgx6P5hd2",
  "key12": "2XCrTpC5tds1rU2UtbHcVaEaYUUH4ybPQkyihyMyqTZMxDGPWyuYYPPVPcQCuEjNLjSKaKGm2awyrRCCFLQv6xNm",
  "key13": "5M56nZpY5DwXrPGEebJHsXqwjno7CyCTPeDyFkSSoPeEFu2aYbsqwXVsgVeS9L4o47GzLkpB6VTgRJL3aG1mHudh",
  "key14": "4N9YmM1yRy1dnUMerjJmUtUK5CFJvpFT1jaqPFHboA5cVewsPht9yM3eidUkgFDGkSGfidMkaN8P9XajPuEx64N3",
  "key15": "27VEy4rQJzpxfMFXG7DXnRVqGSkqWqoj6hcsgQQCZwHzPfKsPZmjpABbLf8PZNRoQNRCtGnYZsMiiwhHRrHBrWv2",
  "key16": "5Tvj4VwvcDPqwmtcT4ivWXSJ6ZeWtNiXwSFi3zk9Xo2mbQ1awU51DqVJsFUXqHZrTxPmAAfdSqqcv9mUTvyVeyVR",
  "key17": "3EiSBCbCRxjvK8PLZ5TjLQNzxhKjUKfujqtUUvY8K2tJuwhCivELQi8VYTjBJTANwxkD3dtRZkhFuU7QVg9qAXEL",
  "key18": "4qF1M682WnDzN7XfiTz7TmDZrtpo7H2ktJc2qPeNZ4NxunzgoATcA6MVQRQ2pGyqRNS6TrDCv3meNKwPwyr3VoC8",
  "key19": "4sSgEYFuAYuZ1xDS9VpYfz9tzj5MJNNcjrVfmZtvVc15DZdoe32HJxLALXgp7UgehT7pocfcuFR5bLwkrVKHKm8s",
  "key20": "23ts7BymS4WTPAE4qBykUZ4ygpsjmtdZwojwSMynSv8HDJj4TFinzohmmfSHN98Ghviv4M82Z5ezS4QUpgbyv59E",
  "key21": "2hgA7C3pcT7gYDRTXDWg3XEpKDqc7gEcMutA7DWtV5yiiuUWyuueiyPYxCDm89KMuMBqzNaxTCAeFFTDvsvL8xGn",
  "key22": "5mn8u92KiZqsgtuhi3GU6cLPXRT5Z56Yqru7gP4s43okovXTQfzXSvXCparEqtQFrKTvEswUKTviMurzm2YDqiPk",
  "key23": "2Tfe7LpwYNvkVWDneoWugFMqHJMoAG4wccPyE5mD1k2a8zbN24TRRjPPcEWtxSNJPfwgKSWvAz4HGnvxNUSZXFLg",
  "key24": "2z8vNCbmHdZHpgtN6wPXUfJACk7hLxzUGrwi1nhfMyy4Wv86sYpeuDMXwDVeRprgyFK6ffX6uKJzr9ggsjuk37Y8",
  "key25": "2mu4sZSfccTrEKhheL4TydKDW484RstorbV3GKNkRMabwrzytf8qEG3VRyn2KNhoPohDKKMMTJRozYHGu3MDZaai",
  "key26": "4Gp5sDk4z7acqQMaDvsGaUGLZb5pxR9sGV6aozhy3hZdRKxVqXpewLaUPTiVT3hvsuAX1wJnQZvuxp3dNmnxjdH3",
  "key27": "5nK5Z4o6gDGhCVN3gmR2fkrDsTctkPE3sW5BNfFq9qdDerefLFv53n8pNGxbwdsgdZzcWRR2LawsdXXPzs5rwmTT",
  "key28": "4CGJWgyjijxm7ds1bo5xr3y1qjU5EXzbFKp1bn5Gr8m321urFSQABQXVkGpFWo1hstdfHiXXifQ6Nuav2vkg545Y",
  "key29": "5tt67Rwd4tLKh1CgDFasVPRaRsJfv9EWrxGsobusy3MRdFPfdKwrMNDpnMvdMHZxS7D1dY6Jqv58iqvVfsCFH6jj",
  "key30": "3bXSLt62r9fWSQgHHXrwMGE5DGjonDGhJBmDLGGzJSyCPYWoGgp7UxKeGFn25bkiGcQQDU24TPBi6C9sQb16uTMV",
  "key31": "ub7LvT3XvwVSedEud3cqitk4TJHkLgsazTCwpardpbzmVCdivzsWNDRAhots9Xxqq2z4cs8oPWXYXzZxrnfCs9x",
  "key32": "4kiW7FiL9CcJ2FveHdyaLDbHNeoZqHq2dozxogQSFcmed42dx1TD6ztaytyxVY9oExXvwzbaTQPbTgEYv4oX13rK",
  "key33": "3NYcR1kzaCLffPmV3YsC4y1Xwb6sDvMkV8nLG6PG9bWpQSbEgeLSEUP8CxWMLb65HBoKFupiNQoD8g46dRpFjNQR",
  "key34": "5V6UFwL2AArPZdRrJCW6T2c6D9f441W848VNyXJUAuNvpsM6GqX98t5QgaofoPP8CDPbdrgu67wXHEQwYnnAgNRD",
  "key35": "2m4y3Pj3R1t9fAdFT41oxTTtCgqc9yA1FQ1jARfeGRjKV1K2zk6LfK73tNwj3wuEDNCcuqqD1whrUJd2RXCXS5Qq",
  "key36": "2g4VYD9NYmGU6DDp6iuPZgPKNKMD9CDLgMChSumE2HgaZpLJq4jsUUb93Ha7vXXseXPdkoaiK2dEzVRLb4mHSc71",
  "key37": "3ApXsui7cNqymRe1P5jZt1iDzNtbUsvEhV5PNKj9JExu3zt55YbcUsNkskvsgDv8xovDQBfSQ1xPsk8R4NosWcfb",
  "key38": "5osQYA94p4YYtTcnP4xCZMkxPgkdYouVSp48u7GTKshBMtHs6a38g4faAMkgLmFB8xabD3Q4tTa6G2Bpmb9Pbwr5",
  "key39": "5irpRtqVf8qBve6AdSNvzae7bKG4veew71LvEwzKXCrPm9yL22UkdZqr48uTcUAE8Ein4jyagaCAwscC1WxkrCQ8",
  "key40": "62yk5REPPhMn1ULzgmJL5ue289YsmSmY9bXoBs299VeVvUKSAjdpnrr76xwPEwP3uXWoBWCku7DdnoarPAicvida",
  "key41": "3bvJ6uhDdTsaxWyZp7Hq1nfAdavALpEpW2LtpYNzry3ot96NNXdAWuxvHxjbgyMM42SydqBiUY3KZ7y4ZvyKPRHf",
  "key42": "5ao7HLhDU7uN6YYRxd77tEvB1k68ETHSL41wkNsaLDp7fodsaCSdpU3kaSFw5wd6dGunGwh78syY2dULzf391RKr",
  "key43": "3d5azZ5WyrgHXMBtv79sbxmmSuFMgjZievfJBmGYox8JvtK41vCQ1fjZqSYVFBKiz7sFUKY58oNyvEjzzmEt9uSF",
  "key44": "23gmx26XiyM4MYzWe7YpDPsLTiBwsPLMkxoadaXuAyUWNFkEGfWBg6BgG7eKVDJb9fQcuz9sEzp6aZRpohzDFEpL",
  "key45": "2qP3tYJm28RJ9SBHkcZ83VFgJFctVDNaXZkGxpXCkmX57qyRJdVkvaatP3i49FeCvAVsabJGSW5V6mt1ow9iiuFB",
  "key46": "612cJd6rJQkPZHLdEAWejRQnzkHKkqwe8QEzbpNNbHVqMe3GB4afHte9B7zoghN9T5DHa5dnBWzozUcMhi2Fm7Ja",
  "key47": "5P9KhwTBDGTmjRd2tVs3qohXgeUqS5FrK39y42BnNdakCBsRPwQgLfupxsxrKJLA7Fd11JKrGyCZRX5hQrUnGd3Y"
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
