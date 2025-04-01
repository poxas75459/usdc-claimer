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
    "3q1yrnJJPzczDCrkCMyxNZXpB56x88N9Hsnwsxu6XThLfrSycNgusnhMJekvmXKTXDFfmz14byuCHMvG9PmqFPM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GyM8kS3ULdx9gm7eNVsHBneYEngN1UtSuzfeDDh1d73RB2raLcMbfZJLcLMa6sXBVryLWJw4Gfqc8Wxw7s9HYzT",
  "key1": "3NXySRGicfdrb2SKRJSLV4VB9Xuhm8JmaFbTZP31SHANpnEjkpXDp3XS6ERedP8CessPGRxnPWyXSPp5Leimrt4R",
  "key2": "VxUyMFWJaVdVPWY7SaAFhczim6SPMdxTZqkYxH8rJWo87FHGXJTf8jXieESyUYcp1GYCgMTTiaU1BBBtcoHLS6S",
  "key3": "63cZ4rormbi1K2rLftg7EWhfUoytke8jBduWJBZyNspLVU9hJFbrXCND9jutebC9YidYVgfm1WcnRUY1fViigY2m",
  "key4": "3XTnhyUrDZWFa2TKJR6J7XUsnPdncQV8YyAJZzSoXkdFypa17WQr9tKnu6mdgAwySEWbcPgiMk6UfwmihZu7tY8c",
  "key5": "5bUr1Q4SSB8pNpkogn3Z2BhSGyY3SoxCAwYd8xCwqnedPR4DBctdjfPq74h3YDfd4r74ekKCXuAx28ma3gUhMb2S",
  "key6": "5CwGnZuTh7cB4ZwuMaJ7uXiP8gRnxGiw8nYnFLoBrsEusSBsM2Cdc6z5GMg8a7Fd5bXmLnNWdvgYXQkpMYEFShBE",
  "key7": "2rfYJTQFYaz2n6uKE67AwDodiC483gESWNNykk92TcYGtWPrgct4WApDVkGAayg4sKVC1ujvQ5VFWa4Mw1CwU62q",
  "key8": "5a5PgVd72rCZGtYeQR7ThUwMc95s8uHvWXvJG2JLzxakQQWTAWCFA18GECTnVTz61N2DRnjUywYuE4pX2ivYEisx",
  "key9": "T253B3cVdBVz8Fmzq5G54mSp54v8Cz882cTJzxu9PtMitHMVAWVYkyuA31r64zc9KfXBwHV2U3jLeqHZESRKDrv",
  "key10": "xWaT9eL95v7XusyH9XHmmcLTgzXkGBc8EVsBXcXRMWXZF2aMikEUqhT9rCsFyW6zs1MNEq6fGv77t9gL83FFmnH",
  "key11": "5HZ7VxtXLMZGUhNHHXaK2Jx5ZKE6erKEYEMMtYEoxwqhz83sDrxJzx1bp3UjfeJ4mn9kwKhVCCHQEU4T6V7bjAg5",
  "key12": "3LQ85JxaqWppFpSYMMFrKBrcn5VdCxpPWmLDkSSPBhPoqRnyWgPefgEpGo5MFmcd16biPv2nGzuLTJ4G3quVQioS",
  "key13": "2ThT5ofSyVr1L8aWqWDsZRnWeA9rpGmQsPHZU4tXtnGCUzoFkbXRCiQ2ATqkZwZXEp7VetWD4KNQRoxsdqjydL5p",
  "key14": "3JBi6F3o1SgqiKocmCncsucaHZEbvEeBkgDyRe7NC77ygcboYpAx3pjSHpNAuhWYyf3ZBGaySjv3QweZ7gHALwvF",
  "key15": "5aRTPM5y2sn5ZYJkGrTBvzXgCAkrjNWC46B2VvJzRGevxJ6KXDdhainthGLaPtJ7wkXu8iZdFkgqDXSsFAsjAYSE",
  "key16": "4AWRZ773zQu91H1Hm8Qw79ucVP5B5BLNrcEqHyB5AFzcPdZ9LH2mb2RaZAFdbbR8f8huHeUs2N2CHbmFyKcn9tbB",
  "key17": "29S6QB5Cmd2iqkgWhGoYELBDFmbzuKErGv9w2rGEXKWE7yiaK3NKgthuy7sMiN4hfyKfG15KKF1YCt8sX6DwpZf3",
  "key18": "P622SP3cMCxvq12mvvhKuQnmfykXBoh7yhgoMs52ySqotGxkZQKdGq8bSgCNSaGeQog3X8HxkT9qLvff6yj9eXt",
  "key19": "9au2QJdqQtV2jaBYHzUNWZEUoxDBh8wPKw9M4q8uQQ3vqJbjdXxuSneUUbsDZ45S1FYHCZymzWZHGzaJ5otQqE8",
  "key20": "4BhiShDnJSUdJP921GTdNywSvqbMKh9E3NFeAfSdbbLixRFdpWqZzeLw5yhSSV3NRhAskzhdh5eF1SdwiDceiaMz",
  "key21": "GRMDCK1YW7Y7zVFFoeNDKacWgKxvJyTnRLjArHV75XsBPCMJCM6mi1bn6ydmJ4TeFdJaML5TG6ycFPFgfZj3z5X",
  "key22": "5aEJfJAq4BZ5ATQUvarPifprJfrV4AXeLVbJRpju2mud76LVHGiq7CSa63h3ABcLQNn3yH6RgGRVRAbgejJcGxpB",
  "key23": "NU3Fy6r4CCQzhAFBVaduCcr1ShiRdPdwLzchf6vnyCwAv83KqdvJ55WUbgKHtgySyqW8kCyx8SqCSgUaAaaayLj",
  "key24": "55qMTpRxk57kKjT3cdJN5m8nE9AnU4a456K84YaMQVrx2WQ3LTzJbhhyHqzsWrucXZnpt7tsaNPRBZB33hLErnmk",
  "key25": "3X8CpAybs85kzh4ECpv41V2JrX35AkTe58qD764tPMcANZDuWDRWi8FzvgSjEdePZk9QHkkwJ7hnNNPXBNqpGY7p",
  "key26": "3VkDfJhhJ23Ncp6J84ZcQQ6q9R6SrGLX5PEiPAJBNFsw5frzhcUHgdKSEV576253zzghgdcmZNJzs1DhfrEL2Ns6",
  "key27": "5WbtT8ukWRXRpNimdtixyXn4z4dbEhs8mmhXNMH1J9pdcMA1Abuzm3MbeiNmrHvRRKqNLDosb7HYRTX3v2NNwX6p",
  "key28": "7bvwjzUd1KHULRLg7veb8LCiw1KbGJa89j4WSpRCC2JzCwFHwPvpbxe252cmdkLiqbQcdjQgxSUJS4Zpg86i5eQ",
  "key29": "5jXgGJwzmTJGgzXfzFJyWYKWkg4hBjMKs19a7Xbx1MDWBBiDHZGBdT8HrimbExavHMojo1QRS7PuT7dTcPxbSvoo",
  "key30": "3aC4nQLh4YE1CzvufCsRdu3dhvNSpEjJUWBcpHNqyY7Jb7vjV87j3xq1PBdSo6GqHVYARzfHGczNAqTLXsfcyfcD",
  "key31": "WxuVPBqsJWL5A65PiRR1aT7Njiu5FUCzzpyQfZJrLtZtymgEyZk6bJME4QVkrdZAAFCyVqMGAdfPLxsMjLPFM7u",
  "key32": "2fdHmAgw2F2AA6zwLBJV4ZaAQT2d6xfUjnrYZ119MXRY91vDkCoA4RVpWUWRU1ti6yn1dFFoZxcKvrFNT7n4xvto",
  "key33": "3koE9WgbJcR1tmVuFbYLytLZTPjLbPvPRDTTBn5hmLAEMRxsQKTMo4ZA7ebcdFNgJoDycwk6Q5EynEuFB5EjwNyy",
  "key34": "5hyGTVxhRJyyrjh2d3V3a2diFKPeJxuiWhwT1i5tPQrmpMKoCyAQockgJqsQXRTcSGKM2Lky2jh3N4HyH5rqywyW",
  "key35": "4JYavAmTEu7gDmVkM714xVXvY2oPEGQtExcvuLFhBmGQWJqPqNek7ooLckUs1fewwwwZuuzEvShLMuaxEGoP6mRr"
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
