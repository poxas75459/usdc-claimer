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
    "4d7SVE3AGDQFUBTP5ZYU7y7Dp6ZmBuWLUv4aENQBdqDY1Kks2Vp7CBchh32Em5iG2hYY8kJmTw2t2tN93iLXwXy2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bj8E3qAvNi3Lgr7Bttqj4FyVzKUiDL2PMB45rCLmdfsW8aNqTyfWvCrr2RhunA7wQ79CpRzkGx7R29tgoXuk2qm",
  "key1": "2DtSpPCYxyNZtiY4PW91baiD7sXYYxfjgkH36ps8JA1A63xXgycaL2D2s6ouBxwBrR9YD3jjjeyGYmqQFJkMz8gf",
  "key2": "WpHEYicokvBW1mEBu6QLvDnQTxJ7MCCKH9oR6P39zKU3srpBQoZHWJHqgTXURCxC9xRqF95Et6D1PidMTnE8BdE",
  "key3": "64NSaPWugTwHQPMGAjhsvM8ZxSDiSgmRBawjx6GWNRTVeFHW5eNbmH694xzxwXbbjuRqPi7csJKYCt2BvU9WmcUn",
  "key4": "5UNTNegENMK99jN4UBfoGYyVUMGHUvRCQ3KCWMDMEi2e3LtzdQk1Ax6rQTq1uM5a9VitYuTL2RQgzB6MLzkVpTwi",
  "key5": "2MxphNJ9kLjuULkUNU84qESSCQSVBRN8XWorzjVbFcvXdn1q8am7NkpNcCUqKfWeY6nRyd6Svr5zEdMa6VzvEL8B",
  "key6": "DnJ5WwvySBdCt6FnZx55vpLwAzDBmxhxJ6TiDB8qeYWNDuWQmMUhm4rpqGFwqqdvKgRsNhTECTgrh2iY3tfjS4f",
  "key7": "4i3PCGz5ozNR86rGQBCZVNYczT9AztMZqXSmj8rBpxz4sHzNxW3fd1GNwZT98xmyuoyLmZ3omLYG98ydpTFwMgMm",
  "key8": "25WYu2V5gBeuMdEaKPtHq5X9eunNYXXk6CbTaoFxcNvJW6Pd7hABJktXTsNfNK8RPH1ousoJRWrpZpaSnG7jWx9q",
  "key9": "3hLbboGGRy9D6Xvw8wjko4NnLWz4zQZWrvwMmWjicmuTqTRTQKvSxkaxxJGEed32B5rCzvJJBFCVohL1g6Z9qAkx",
  "key10": "42iU7SJuhbRY425G9pfskCUxepY1Pk3sitfPRLSMVSV9AbFjAnWPiTJ4bAh7jAHKAGzqoZvkQUjbDy6vYdEJ3Xsm",
  "key11": "2jPdAFAK1hDhkV227K4uc8RNicXr1NJVCZ9PtA47sNmT1vVV8WwH31s9moBbjETF6MagMRM9oLpYY5btfD4G6yBm",
  "key12": "5ohHFQ6hNiYXpd4N1udxDwSZE2SHbdXS5zpzxJsC5sGM7SRCxD53tiAMTSfH3oBTrgm8Xvsz8X34CB9DPP8gnZK3",
  "key13": "3zCyEpL9MDrGmGiuC8mQnjzEC1ebCkVjCtgSavLhjd6Zvbmyv2ptTUnhPY6Kue3bLreKkXGEfRS6iQ2CQNfAN6uL",
  "key14": "3nWcj2w7eNPVk7HQx7n7zJV4mWj2dC6oTgEmZYZwLmyTKBBnuwyq9LeVEbJiKBe3vTPVXjJhUjypA8siKgvgyMSY",
  "key15": "ejPZQcQErifhwAzXH2h6at9gGTqdeC6U3Ltq4LQ9Zp36eEVbd4NTGj2TW69VSgjp1ycg38vNTPVRQZdF9b2cGqw",
  "key16": "5441YpFG9S1MJgUeFb8MV1ds147KWSnhZtZuKouSfqFE8k1hVPSomrQQFRf9Z97AzR3ocTGYB2buXZv7PuvdwNBZ",
  "key17": "4ZP9rfheZjkmtAvCgof7n15KwpmGFyjzh512D4iCq2rLhTfUm1DQFST7yh7ZyQ5o5ibv1XqeA6j9mBXWh8aCZAm5",
  "key18": "24ZCvey1yBvpkFrtJ6kAn2QoK8Uz49rRtG67LsP8z124bmftDoijM5ecoFMJhTwkBR1eSKJdCse38KaBVT6kCgkd",
  "key19": "5rSSnT8AsEyeGYNrgqKfunNq9M5zjzXfzdHw2hT2W6Pv6A8bzxGYpbAjLa6f7HEBMEXrGWYieYDdUhn8oKk1FTVj",
  "key20": "2tN7K8G1r17Vs7Wzpg5W8xBqknFNEDdcKYmCUygDrRE9194CTgt4MF31rQT9sM1PH2QggeNw8xvZ3NcQL1RwFKr1",
  "key21": "2ErL38EwMKeauJQDGuHAFPMsZccEaybPvLP5EYQr7XFZF1vikuCTpZsb9xodgTmfaQD5XvxAdoEHZ961152VUCEX",
  "key22": "2ZDzyeTCgsZc4ggx7a6dQrm3oon2ZqaqfwwnMuUKWC9pBBKpX8GNchQfwMh6f9AExB73NJ16tKDDXUZNd2a2fswG",
  "key23": "eK7AUr6forZSVmnumwcLoaSHrSo566g3DoNszGtUiA3ninmSNS7b5HmfTWMzXJ4L3ATMdNZRM7HHuzeJNsjFRDd",
  "key24": "UxphtmtPFLE13wZhVEr7axW3fmiuB3YDbu9tTScR3y35NT31YyTxX8SUdCFsNFjejC1pVpDjgHjAvmAA9L1BXMX",
  "key25": "25DmSGmE1WeZBWRysa8PtGyUfBStrzjrfQ4mVy6ixgT1uHfNSPCN1qsBkXu2kqG8Z96WqsBHY9H2RHMmuwdUTtzz",
  "key26": "4zSDPN2yoZzoDgDFLvbkPprXchbE1VKG2cbAmQHQtyBSErLZSTBj1XQDajTyvUjP8WANRtxd9gKVrv6iRD423rwq",
  "key27": "4Qx99XGLx7C3FschK1Gj1FvWM5UHRYxcNMs3HUsgCmutjrVFTjwqgtiE2M9Fh7X9KBrKLaeykgyFZVRg4bRa5G2v",
  "key28": "5SASVnDjnQyohfGLco5dpL58qziYDe9dbzfW5E47YyLRPek7hWrWCCnc5qrn6Ky39tytvhoLSHT8UCiVCKqb7GNs",
  "key29": "4rJk1TZwyjJzvANSDUdsp98vZWi3o3H6WvedJjMgFzKNcUeMfcrCc9zrhPoBxy2Zws8s1v4yfKqLYLWMBGduBpxu",
  "key30": "4vKvUuLpvtQmDmJsbhnPKds1R3qMRQ5CkiWinaXauY75MbZfvdZzd5J79ffVnM4PgbynH72mY1rrCzECqeBMJZTx",
  "key31": "3qW6E1NxeocjMGf85xec5sUvsHXq6cEizdsYAJrpC8wR9sqns3R4Wkr8AXvF8TZBgXpCjdxy3frjyJhUjv6pMMq9",
  "key32": "3hmtphrcAUHBpa5Au4gEajhM7CuZcLLnLL454w1DPukh2hcN9pZxsrud1poBVu8sD28DkPLLjccYkCDJ6FLx6RVF",
  "key33": "34x6iJ5KNEBKYdmyq5Nz8bg44A8zFB4Xo4fcPFcN25GPgDzLncysTpb1Kx5R3x8Y5gxC2E5qKHp4WrP8JKoeDUjP",
  "key34": "2gSyXhWYRbfpthhvdvpzwJFPZ4x6NkxUPvFR3JjJXxF7W7aufdEueA2UgjTHqY1THgC4H4aTQur2FX5Efx5ZYu8k",
  "key35": "35C1UZHG1f15MqBJf2Txtf517dwGC7HdHtJrTVvGpSiRPgQ2mT86GAW1q8QFpXcL5gUAiGGZCnQxW7NTzNPMp9RB",
  "key36": "61TeMoTHMQJfvRPAj1kRiqubt9YMNuRjGHC22AaSX6mrgtHbPWoNrYqY24EY84VhhYWunxpv12aosgnEFD1WN4a",
  "key37": "2kM21XTEjgkiY13uzEoLhK7Z53uopR7HwLDA3yr9ZDmJ4jGFGpzM9BGtXkPwnhk6P4iww58waj1QbSw2wjkBfHve"
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
