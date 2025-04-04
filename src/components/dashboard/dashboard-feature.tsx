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
    "3Dh8dSsMsn9b11URnvZh5HMu3M2fjKeUk1Y8UUawQtbmzDu8CTGjvwHkqaoHEj1NAywWJdoe7TUJYav58o4kU5VR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RmY9P1NH4z7ctNFQK5WB1kwJG2pcwVYf8D9fkTocDmybKF1ch87qqmHvzR4H2uqPBbpbyyeo66VijSiD6NfpCwW",
  "key1": "FRciYRyCU3MQzqHByYhgR6jE8rENdxm3TRTWvPCkuSy9LJYRVZSjP29TcfygPwddvwDpmo7Qr3bFhmU2v8NEc3u",
  "key2": "5LC1DPHcrQdufRTBqZ3orKZ8vSePrcmBErLsvE1Cr1iwdv35xCMpPnFJmmr5tMdqg6P3Ldj4AQPdTGkXuRQ3trRX",
  "key3": "4Q5ET27D6C1GNPoAMcsjpbyejRog3JDffLgVgK2Kj6JNmZ9sZjXidaFeU8BNDujGbdFrZEKqKPnud7q1oyXnPYwy",
  "key4": "3Wvf8sPNaxsb5RruH3yrHaeUiCMazcBHzsGufmbkXNBVnAxpeUtGBfUAUK9yZrkfqCQmdxTgVZCz85kfgrbfwspW",
  "key5": "5y4nfNBXBf6mZhUSWoUW78nxhy428MDEq4fAnJfohi3AbzSzpN7z2hjgZYiZqiUxKRaURgq5sAGeiPsYag9rEjaP",
  "key6": "2wRMrxt9St4xdGtvDWJacFbTKrECeRJ4TZBbZvV2NK9cvqEyrPobgvWAtRzn9c318ed9V4VppHLnJadsiperSEcm",
  "key7": "5Ybis1iJCZ53vYirEDrvSRvxkQos5gLmPi6o3osg6kNAAuopbxzqDccMHuczWQmproDQ99YCzV8h17A7v9MACdzs",
  "key8": "3fj2UntVXUqBHRbkDVW64mgZ2yUUnJMhRdNFkSCqvAnJe42UFsZhkH1XTwYrg66XbhdJ4RN2i4Zjb6BaxQFPbXed",
  "key9": "29QPpTyhPoKjaCVEwpJFUYv1PZWj6xVhEtnKWwrVkxDrPi7Vr7k8o6oUa4hKhHaDcaDKtJRTzqirNanhKM6JBjbh",
  "key10": "5zZdCkfDo25uA5MofWdhnUEea3Ur79tZGy1v2YysPqzPG5hpvGoKGpx5yWrGKnfFLr69CqvLV78GwJZZKMWNUrXo",
  "key11": "4ViR6NDDTaKHNAt7KBuX25xHiCvjpdq7pR5REWe4YufMFd492h8SNVZ86QTYUFnwcQ5u84BTXC7GPBxB8orVhK6j",
  "key12": "29kbyC5HFFEb2TsqHNS9WEibXRZooiBz1Yxu43Jo9pKH92Niph3MMeHo8R8QudFxMZbGVKNaXrdcVyBcQzxKRzVN",
  "key13": "2fcjWJYnXXc58Vpun8RPvFSVETvkApir1BL9CwxU8pH5LKhhRX7xaTQCVZaBtkYDr2TBTTMa3bGWbPKQb6oEYL31",
  "key14": "2ZFb2Tq1uo63goR1M8Faazpqopm79nF5dH5ccV5D2C5RepDAxxPh4S6FmyNDhrJmeVX6UzSQZaDMkyd42mX7hP1r",
  "key15": "3SAPMRE9smoQdV44uJv79hVJ2cFqbjeW5MKBS8L8YvLvPVtjdXZYrJbGzBuk3ACu1YSKYMAakWbDu37tTGVNXH6c",
  "key16": "5q7TCkQRSm3NSuPoyhL9Y1pUnpKFxo1JzGbynpxwNaJgNqkDDCLqTGraHcNyAdFkUCvpPuQH25kWsCrHywDZ197q",
  "key17": "4eYHHQ1Dag8H2uSUjvNGNFSGiynBUKHUaaZDhaUw2RCvQ69hznutAcmYu61QK1UGwdUGRkukLCUtHyCPYan9eUJR",
  "key18": "2bqBVrAkAUmRM4kixYu95eJUT2rbKZHi6hrabLPjCuwNW9xfzxePGCTUw4EgKZsWy3mLfgXSr5DVZvdvqqrLKE4N",
  "key19": "2MGJwFRR2vBEZTyn2zmJhjJfhWQARrkwMN88ntZCNtqojWuQnrHt6PmSPnr18Fbt9BoJeAEE9Gwxtz3eNo9yQyE2",
  "key20": "3dQmBiZQiivFreULphmwSAuizUbn6jy1yfBTnJgbrsEHBG298t9YxeRuZtR6bngyJjjxEHWfNDYPqNcd1iz6XhUp",
  "key21": "2YzzVGtfMgGHQTErGWAriGyfTRLBzrd3zcqdkgTsGEEShmvHwhrhd5wVNbc5q9ifcwrMDzPhK8FRj488yXmR79oX",
  "key22": "65NgVcy5UTbJ6odmzXMuQaVPJbvZpPPTuDQJ2HkJRgaZ8e3LqKCBA5YrWP546ucthjw85bHXBpLRD3UKNAyvFzxn",
  "key23": "41Roiyn9mVTtszdMarUNzMZZMWto1ocZRgU9FgPHoM3K1sW2serrmQPa7ScVg5Npq48D1P4cPNgkfT7N4VUFwAbo",
  "key24": "3J7RZXhLQyh23DP7qmsm8UxS4pwCtfvNMYuQbrNLC3GZpYGSh4Df5GX6V1JDu6bKwSD2CJRCLd7PLkLhRkQFCJm8",
  "key25": "n1M2rnxuoWKzrLrxfDLSGahhg4r6t3v1N81b5AVqNfByTokELR2aTKnTwiiWtRddWqbP25JfS1ubbteBqaUSerm",
  "key26": "2UitjRKhUnfzWwCaS8Gztbc16ZyBzpjEYWZd8BEWxE6xrDvL6aE46vg26bf7YzCLuex8eCjHhw3gmgv1WYzPHbkf",
  "key27": "87B79uPaMwE9pXoT7ZGxTh2GLdjvWLAuFqdGwZfxUfqLWDwRbHXu777iDdSSxQybZYPw4JPfQrRP7gzV8sTBWd1",
  "key28": "54zqezwH2XEsEsbkY2wdEZLffarYqHN5cqhohKnJpBJJUWKhQi9Vw7DmhtkTZruC9KaUREsJksAaHZHZjYAy9TR6",
  "key29": "39V3rRBSnzUMkxNZbkKfHCMjUcdA9UXzmZjAxNSwXiELHSMB7thZ8kMAvCgUszuCYnC8JMgkwVX2jFqXwMt1Qi5M",
  "key30": "5kWzqsnqmp3o7fcrk3dqYG5p4Rx6Mt2E2Q1ghKvCki6p412ug2KXBZ8h45Rh2QAzqdEegNKfC7DrYs5ShXUTFe3q"
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
