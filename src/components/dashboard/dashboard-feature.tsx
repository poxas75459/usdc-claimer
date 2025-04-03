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
    "2uPntwBy2M6UkcW6zJ2AZv74DAPkvkLZdmYAdvf8DNCV7AGebbkCANrZCaHJyZuNUC4ZiTrY1891G2NwQJkUAohy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RDYTijb1ijpGMBQEDS9hMYLKMC1TQQTcpYNbwPyxrTb71iZk3Hu8BVSzCHMJ6WJH255QbbxNUWAKobqQNat7mTA",
  "key1": "5n5tt89KVy6YbQT83J1GP64TX6MNc5DhoDj2QZ4JV3p7MKuusBQ2hoVhDKS9H5SJV2QKPtLxX2vvRszwdjNJYorc",
  "key2": "2exsodkHV2MwuPh7Yxznac9WtCfYSnMACZoa42L4gpHKFUcRfTusUnZ4bcbyMXTPnsnEahBYWxVmqee1vgPbTkKs",
  "key3": "5nbYChUAUkXNMDZ4oqTVHRPtvJyHAWrudJQU83EDeFUXkgqFnPp5v6r6U6Pk6mAZuWC3Twg3WnLFWqAfUgcBkrBM",
  "key4": "UgjjNT3GoHEmGznBpXv9LyyUx3RH3jACJsNbY2qULSnYWd8TPsCNkfaHZ9a89XD1uDASboJv2Vs7MMWXvKMwrrD",
  "key5": "49xXYmPLv4T3it36wGiMdLwWiLS6AjiYoraw2KpL48hebXc9JY7UbC6sqey5jHuGLsG1xBjLvWK28RiHgsfi7YBw",
  "key6": "3YJFAvDMP2EsGdXLVigmRt9i8UE2eG9uD7KxnxyXiXm7CT7FqCHriC5Q4SvhWtAM5P5sdQ8hiu9brvRcWR7mB1ca",
  "key7": "4oBVm9F8u6yD8d6ec9J6Ns1UUUTdCZinxGJtaPwXvnxPHqjSP36gQhoPsUUgHoBb9pX2Uh5pvA8ycUEzaPWgL64",
  "key8": "2T8UT5n5aNd5h4DuGDCSFEemVPFzgorb3vW5Yza6eiM7vaF5EEUf9iJDr7JybEGdQyJqAahCbjKnRGGqRYkMFHRL",
  "key9": "5izoUKRt5JLWyBqNHDtRv6QjffrKVXft4sGKGCvFKA9pyksa9NBrvX9TrHhJFoMeUcvs6xe1XsD9sKyPp8jjxnqG",
  "key10": "2B4dxreYWqUyStDW8UGN4nVqiEwBv1vKGvQpSzWdnSQj1Be6Lbg2Eb7Lt386LN8oQHXrJh9BxFWHhEwubN43UpWd",
  "key11": "5pYRh9RuW61bDT3FsZT67SoYfWVA1C5d5oVJFbfDzjaVtYjHy9DGyreMoNqJQxu6MwL5mXHAwt5xVTBVDvrdG9UZ",
  "key12": "5PK25oFgbXB3nTMpREVMCEbn7khp4nMu5AmKtZeXdWENkbc39ANwyr1RRa5iWh83HXVkyCQgmkd4Pp5yApRtczus",
  "key13": "2dCSN7ibXv6Rjw1NaGT1E75wm4msPWqQyvhKT4dX5ouBnMaPQKaMBunSsD2K4LnUGvinYyXjVFKEZdHN2QgPpxWV",
  "key14": "655UWQrehpgWocA3o1y8QvW7eG2f52cMjBXfR3cfs7y58dFptNJFNR2Fc41XGwKmNS1yXRgo8ShvADFSvRQ3jwS6",
  "key15": "4649CvSBK5hkhHgaQPkapZ7M8iECq1VQ7ovtvGW221ztdQzJuAJkEtKaz24Yyj3Sswpz8LWMr5DAvoBXQDVTDeiM",
  "key16": "VSTT21c93f39v1XNJaib3589tB1w5HvogAjZiehDoXvAnnH6unL3bPvok634mLaXubrumw9oEjSjuTWBp4KmRbq",
  "key17": "4TKxm98Qhg2hmp8garzxLNPpJsbXaJSx72V5aMrS4RfjbsxDCfMNW4EcChAvRDniWD24s6JWa1CeQG4tHC81XVkq",
  "key18": "5nyDFpyyVhznXLfeZir65e8XuhgUqf9dNFkXPCVvZ2KgsPh1PH9avYGHzeKs84S4NXvACx68hSMusPzD4jX9z9KL",
  "key19": "4zyR5JQo7ynVPre7ZLEcUbEABA1VDVNTa9Rx6MREG9NhAW9HxzRohhXXijNiAL6HnAZLRnW1sByn4LmFJEBGZLHP",
  "key20": "3kfcyXjmj7vjKLnVnpiyuhSd9siVzjkYieuh5GS4oLyppBQS1hfRVLZiwXWEb5PxY63ZWz78SY2rwFob9DYtMcyf",
  "key21": "eRtuWDsZciisY99L3k1U7r8Ra9jmKc7MWpA9qr3BAGggM2uJfEAftEq3PYMgvScGYosWVTatUqkxL8G4ztPt58X",
  "key22": "4fmaKzWCvNUNTcUnW8SbpYNNQv3fkpKWCNwGAWnKe5rJdcvYeHpL679KF282chWD9cSf1FHtT8cLSVGStDwkMUXf",
  "key23": "5iY6ZQvoyyHYQTKenaZt8d6uSCoSx8wsr3Wq1qUAgu3LwNwj5zwgUNRn4KR4X6eYRM8eABqXskpKh91F5A4X7Gwd",
  "key24": "4SWYEFKFxcaVw3SB6zg3D2UXpFwZcbqXCjDUwnSD8X3SVbfwgYT1R3fxkgwhtrpYGwx6aWGDejLagHUfrYVRmvMn",
  "key25": "3Fk46oJdnGrw5Fmdv5s9fAGEbpD6QsW26WJb22vXe2m5qm2AwJM4VqnGETHkPycsKu9W2aBafcwSa6Cebu9NDWG2",
  "key26": "3uZQvNLLZNTUFEdu8BX3RHebDdqYz5Fv6soPyKM6FbUW1kVyxEV71xjFqpjdp2982dTJBXuTP3TsexRxxSe1sBCb",
  "key27": "2fENyXpMHCJQ7BoCcig1CfnHpgE936eGy91MaVw4wpuc6PZoyFgwRTTxAi6ECK7rhjUuBcA5h4435PWvty8PhbAV",
  "key28": "35JdwiEmkrmyBV3uhwhuypiWdTwihJETpcEmowHuw2YdBERTTYvJDD7ZML2Wf7fFUCwmDqznqkEzqccVp8jn8auZ",
  "key29": "mihRjb6o1Ny164w6VLz7CFHYw4Wnh7cRF9SH5LUd9PgP624uBjKzX2Z91ftshFzUEksWs4wAqyA3aqRrfhTD11g",
  "key30": "3hWSasK2op82Y3K2WTvHaTbd7G6Gcwdc9NkkdyTLagGmPCUZbQp22YjUV2dN4irwuU1nes9SgiTDV2YY9eqsCTjZ",
  "key31": "5cpsmxShVPz8jZWk5jxHkDx6XxujH64vjNdLGsoLmHztpWNBk2JfFW6ucoaUA37kw2S8zkS2PU3UHXtJfQrmCWih",
  "key32": "APsSrTDotaYo1tCLwjeZD4777Q5H4Jc81P2xo6xS8oKwDG1mptiiiE4B1VkQXxRuA3cE5PmEfSbqJiE4SAKam4f",
  "key33": "62cXawrGDpKrcbmfLR4EFxnxqWEbb5TLdDAMNAN9deWPEqR6JcBPqcBcKDwzp22qb5NA2XsjF1NSFWSrdVpT8qhF",
  "key34": "2CgDjaHx99G5aqEsqeC5PSvbspV1huixwUoF6hCKa9y292FNtjXFrTyhgR1TWH2qqZAmxqxbcUEsoyZDftaukVhM",
  "key35": "wWqSCHuq8hpZ3yZnEv8zd6LedkzSuQ2vTxef7DLwmdbEHcDEL7gCyuQLLmzkRrBabcLCuHvANAVkr3MKs4CE1R4",
  "key36": "28L8Dehio4EtzediDs58izq5SncD6scUUakt3H9LtccoYzkiWoWXRjYS1qsXTU4bMmYRo5iKomST4iodiqxQ5gkm",
  "key37": "2hUNzKiYTNJnNho36MHTYy4Nm7MtYTxYXsqjrxkP3qK45xfPbXzca23Gq8jAXGjoXn8RKC3qExWoGVKjjB1x7STD"
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
