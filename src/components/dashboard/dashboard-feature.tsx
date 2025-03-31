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
    "5qPwnnkKtmQtrgqEMkzKUnRzTRxmnNNAQMqZyEpLP1mBs2jyharb6coCyoBuEuja9sCmMkDNjrFTYbJmLEixYTde"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ip64ZZCsq2E5LbrY9ns3msVM8N5fcNM8K5eWkETMHirRZuR6BV17bq81Kopva8iTvPvTA8BnmceXNJUvp5FTfkX",
  "key1": "2J8sRo7Bsz3hNXVDvQzNw5VGAMGTGJhL62FSLgZbZUogN3dpxnEvVvxZtiVTCu2g4aWRYcVdutU49Th7oheDJsHW",
  "key2": "5GQezznqsupM73rET5qLCQW8vFsBNpi5zgET5W6rVVEPRU1dAKTb3kE5d5Ex1ztCCdhGS9JdtXgSFMh5TbCAU81A",
  "key3": "5Qcx8eSJrYxsdRsUiAXDAC6iNVYRrYdbuyQptZmaqaH37cdqj3fR2m9GfJTMpJDvfyKit4RVETXJgKazusJ9FHtk",
  "key4": "4JPAmKMHnFR1NGMK6BwEVXkszNSnATsWjnPWgXGXpeQwL5Yp5eyPtKHWFMVhTbudKRA54iJ3b89ac1cfrFxVSScv",
  "key5": "58KovCSohDreMqnBkMbqRMeARQXbjW63NevnJNoccMks3Vr4LedVmZ6LCY6c1uHDYEj3EMkuBYdY2gM7hBS2Kpyf",
  "key6": "5EVjLSPbzw8Kao96WFdXNUjbJoccyQT7SY521LwjZKviLSWPY8DPxQWGEkPoxFoXNvR5Gr2BdZpbnCYQqrYotZNr",
  "key7": "47r11AdoxcKE1EtXdKqXSAbAEJhRGUHZeRpH2o6kahQzZ47t59mbxSgV91s94ubaKHK56pEnaWYBjvJKv9pdkWNy",
  "key8": "5Yf9BeHUJRXATR4fNjUHMgRr2fAgtauiFxyRWrYkZoy3ARamHETJZ6Ua1cdncZQvfPYhq9fqN5zKkidGGLEpoLvA",
  "key9": "3e5eJ6BQDRm16TMg1iCvjfcuSGDx22cNA1G2X717Nd8mUxaUfCbpZkYtSeAj9EZuxj7DPDN2xRa8pteonPxtP4W3",
  "key10": "5ucPXEVRTud6GB2p6faScfZLX3NZdo3KgAcmhJkrBLCicaGKhTu1sQFx3C43CtSHqBWoo5BkZaLx8GvDxQCMjoD3",
  "key11": "3zjaUntFHzjBkaunWePRWTrKX4uRwJaKKaEJLczFjcFbgkL9wSQWJHWY9VcLfBX2B7BkUdANkY1RqP6catPbGe2n",
  "key12": "4MqDFQtgd9XQu8HWWcSpuVjJgXrhcUxkDYXeomTBiknnYQHiKKyKFSKfSLkva5VdFidukn2PbZ3XF959dQLgMRBG",
  "key13": "4ijHxYrKkRS3TB1zswBG3Lg6J8f7DbANV6mtpCzFxXYWs3ER2tain99C3nmijgN7JWCXakzAatt1CTsxEbhzsrj1",
  "key14": "5ER8QvMM16HCoRAofApD6xsq4g7cFd4anySfsKp7ZVUKmuaWooTrkVGevBBeib67SNZJepbGkUwMgn77HXv2yJzD",
  "key15": "NYGaNH3Af2xLb5W6EwkFpCCKjGdHU8W6ntUBHzUtd8ZoGSygiRUiT4ihroxh5C83HsX3tTTY2aPosbjZUSM6UeK",
  "key16": "5SSxxohRqPkzD2wqFHa8TodRdccXjhPD4a1AKEvm4t7cJ2XHBjSqNbD37iDsULza6hspssLXZWv7LcjHF24x1b2F",
  "key17": "Y26t8AdKWkj7B6RPEo75hULDSR9GyFvx8QgaV91Yr8mvYvrGi69pexPpakfiFkEWm7ofUmAEBu2joWRsaVXdn6z",
  "key18": "5BYetGt1WLzgiCeLAoDx3c9fkpbQ2p27L6ZarZ4gYMaraunrStuvShdYYPwec4vvMegcNNsa9Yu11f5ow22KEeP7",
  "key19": "GvoXK2TjTBdCNuCriFUteo96ruiEWieQ4N64cgiUacjwkSfxPAJBr5RbJbns6Tz4ExmxUKgestqkRk9Q91QLV9X",
  "key20": "5Nd6cMko12yrwLwjeQQu2PxU3PwghNfNfrht219vxGbWYBbjA2Jo9dQXwvVSb7VZdBM6rq5qwYrW9tztaD9czhYg",
  "key21": "2oiYGV3mbjc6Tszn7HkUo1h9QM1hRh3SazwLLXAbgfYkHfMySANR4yoJYC7BDss7x84BDgnPrPngx9Bawov6nkCz",
  "key22": "3TuVNaML6PFBRw5FNLtU6ALhrHxyrAcFd5FggwKYCDwT938rRqvWUy1eS7FzBxxt196J5RahysU2vBKiBkFVjFDy",
  "key23": "3mdzbuyxcBh9naGnYPhiMybxoC3xz8xRR9miPBKeimQoKKAJYGSRZjC7NBRhif9Fhh11itLqqexsU6z57vprY3az",
  "key24": "3JnHCPhTDCsQjntAUz8yXRDtWUstSCbpPaQgiazbQr22NKE4euxKNaqTvPY8SaXz8LGT71yvcG4fyAZk7mJzXMpV",
  "key25": "2TeYZGoVWU67K4GFk12JAH7gprYVnW5GMGa3u4UtbURF9fevrGAxpdLv1gB3YiEXQ2kxTEMJVKvWwhHjV1ZtuMrz",
  "key26": "56x4MsevUneSbGftd6MQRXqZA26CnWHr5ELNFCF1qekqYrjyCenq9afgyE2vmmtjRySqnaR11z5Z6SFPB17Ajdbm",
  "key27": "1msMGkSsCBXK72z8ANkicQQhaeiugDmySducdgMDfDb3u4uNRLY3HMZSwm23BeJSDpVxeBW3xD28kKE9KCDU7YR",
  "key28": "5GkQiEoQ1Mvki2GTf5kcGGdqi3fxAf4KctJKM2VXjxHGXVQUUwoNXepwTHmaRQb3Mwxiv3b2DLq6SV9o9KNy3EYL",
  "key29": "ha6bYkMfEjeZhD3tXdeDnFt4Puw8LnzmePXaxT1FRcDkUsJ5b1zfe8w6F9yMjJibEyB9V4cdZpJuVyQtd17T7Tk",
  "key30": "5yBrDL5YY3DLqY6YHqFCcGb4E3rToPSg9rshSHFrsQ8yLv9dfTJVNK8iaKn1bBmYyxtMP6kpLT3rgZ5HdB6fuamf",
  "key31": "33MhQFWmWM1tVjyCERVaiyxPw6NemYh8TGCNoJQWj8gLEjbUrBbNHBEAXDiLHcbf1QWATaHZL7tZrrGK6BjHsVSS",
  "key32": "guMVmKZzgVrf3LV565GE74QyUWhuhTy3dgUKQSn7kMixZWmkJpCaDj3tYjjS7k7pwNRpiUzKXkVJs2nhbYv1F3N"
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
