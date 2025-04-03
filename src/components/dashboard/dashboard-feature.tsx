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
    "2SoL1Xq1GYB5Nwp5btx3ZZFHJu3Hrkt58zDTnAiXuQGaPKPcseogg2YVU2toL6VH8uRE6Gyf7F4BRWR9tTeLYL78"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nTPsjk5WEeK2jcfNGY6oMZ3ZYyLNRCQHDpmQkXj95P4wYauy4oqNG9DwDu7Y7eKDhdoptxS6YWanpjdisTVJfL6",
  "key1": "3UxnbqGPa5THpcuQr1sWWVdD7QgRFcnwhxocBTMx4kisXBBBo8FwtW9rEnptDir9sT5pmf6tbc62Q51YtYF69AbQ",
  "key2": "52jTeobWLyvFpqMZSNdBE1oxovKHfGBCFdmxeohrCXhahjTm44pan89xkT1VeRkmejTbLDJBncSKE8KEodpWqiBj",
  "key3": "3U5QZzYSs5zd1JhyK3V4R6nLCzA4Kfip5M6UYkGx2wAbnTJN2dLTogLKAxx55FCtgjPyfA1niTTrQYMKAYEao8xY",
  "key4": "65psCqNjrnSEA5oBrGQBkAiyu1ebQucPeP2T8gAqNAWzrJ8rU2BS4apqnrZFbLr8uyrsfEQqGjd3dHh3mUuh5xoW",
  "key5": "23kWXVoE1qFVwFgWNEAEW2G6DYhVbJ3jLrz8f8Mv1tFUYDxmeyCz5QmpbwcJxEsLDUDTmPfGj6WQmgQP5W4kayCD",
  "key6": "3pUGvFV9Y7GN6KWWSGHigWbLXYG3bzUnreNXVGpDEBGhWkFcMYUHMgqvjBarx4QP75rNh9b9c9vmoQdSZD6Wh9BQ",
  "key7": "ix5B5EZ42TBDMTJxYEenwFv7EQykCyvAyah4una1gHZZcZg4KX8eWzY66cAnYrRiRcZ1tNpjQLyEemXvLjZoHVu",
  "key8": "4riya6F4qPVKkRv49vpdPp9GFb6MYDpfhu2wGrx2xJkMZeSufCEVbdv5sQZ1D3Sb9MZbafmJShuuYSMiKV2CPHdm",
  "key9": "2PGk4oZsg4sTD5pQPUVsxhrzdrSi3VN9A29RFv9aJSAEeyg69kHLCzKXhhbNHqbpnfSjPFkuWm2SJjyx5e18Q7qb",
  "key10": "5QMZqyqDPnBhMPFAE8GGDoiWrWsiPxGHsD2ZvPrR5oaUZ7XSrCzVx52ihGjiHVwvT78R9aNBq6goxJ96idSM2ka9",
  "key11": "VE7Wki6HJwYbo7PVHZcNtf7HpHSkGoFuMgF7Hauj88T8axr1sAxqxemrbjZaVSQtS1DFyG5k2zi57FKdxfiDh3k",
  "key12": "5SGepV42LbcpED3p6Q83b4Q49sGq9VkxWpaMQ8Fe651J7E3X2qqP9hSvYx9U6cdgdQhewhsv1YzU8jrwghy1S4ZW",
  "key13": "3qNn63fddVeAJLZWF94WA935PAvfehSSWo9kX53ziWXAmQ1D5CEoDCNFZea7UuA9UfmiepDsdQLqKN9g3k4NkJn8",
  "key14": "5CJwbNpKaHooNAqvVXesDtQfnNJJgmWSNSu2jebPfsE9X5aE5rKp11zXF2mhsFxgJJ9JW3q3fJE64MkbmfLUyBE8",
  "key15": "2Pjz2KbQhAQX3FdpZoWRxaoanAFvU2EsvbDfT5wHcsGRrCMb4Xpzi3kNMowoBU8sNkd3Hstrzr3JZV5NUV9wgH5m",
  "key16": "49dY9uqEuKZZVmmsX14y4V2RbnJ61cbf77idah2LCRHP6ChWhD5n3xx4SHqLLvHbfmzLVHmsn5tLDCuKAGbwMitE",
  "key17": "5g8uRex1zKNWq3G76xDZNLEBND6sPVEpvuYN35hGedrWMwuYPtcX8jAF7hRoYVGXRjAwvtujCMXwa2EgLVgsGe2D",
  "key18": "Kwfwr2sxpxRjw61wSr8ALknvevWzYaniarju8mcWusy8uY1A7gJrNiSoZiCCqEGGrcYtbtnED3QTRF2cWiaqgtj",
  "key19": "3fLhvGyaxC6KMqYpR5xJnP6BaPe5XXrGwZG9re4oGVwKLJVRmuUdjCGPPvsdusFihUsZguUtHvYZGBS2D24wqpMP",
  "key20": "3Ju223hLxDHWsZVtEHmC1SjNLK4EUBweH2CpSWYWT81AhFQHuu6wrfQ2cbvT6qgtLPrkBGf1EwCwqqVeCAer7QWv",
  "key21": "4X9EZ4w83CiKMxYEU9mCBYmXT6zhmJLsX6JBNhHtdYertBFKsYFTt8j8w3L5WjWuBqWK9tQMrmbBeWnKwPrPezm6",
  "key22": "48qLSej15kJ46QMDhPrDKBw4xUTJ8LmHy6fDjSrn8cqUAEhiRojRQ3n7oyveeAmukYvaMbLvTu8RXgKEmeVuLZc6",
  "key23": "66ab7Aep824JCc2xBChCBmmSRvefKUydfHpLRSKPuHumADWMDEPuL6XjCVsitK4yTsL8hYbfMUqg5xhyAv7jNxwm",
  "key24": "5u99ihodBAcHinLiDg3cRMXhwaTnnG28SU7d5p3STFk95JfB4GEbA8BAMNMec83QjmHDFAnePt19JwirmRe57emR",
  "key25": "3ppayj81QRJAZhzVXumnqz3cECLq5MtEx4JwH7AR8Nd46HjzLdwvKRkEhY4z4Dm4uE7UBfGJ2k33s8HazyHYVqFH",
  "key26": "2fEbvRRw8oncDdd7cu9BiK2R6sTcveA4KGkP4pbh4uw6fC1zsxaKvyriHPWCYe5mrW9MPrmiYZP18NyyJa2Ycknz",
  "key27": "Zy7cDzG4et29vUs8LeYpEfDcDQotf9JWJpNfBV4xGicUo5aeaBADoQZAQdNkLh3ewY1ABckQ9JMZADTv4APsiVN",
  "key28": "3TgYumhKHMs5FfrBH52bKtuVwE1VNNtpxQHfBWZu6G9tfPW8CybMSrQCCefHS5EgNMyZcHbtF5Cmq9Tg2b3Xfd3k",
  "key29": "2qM2ba35KSfBTBBdgu188snjcJy59b5CqA9iG8SA1Wt7uHVq72BMdy2HLENMN4QCjsEdwGXyQArBnLqVTf65RnCm",
  "key30": "5P5hvhHqnqhAjaXdxi8q87WEM23umkMohTB3AgBfttFRVUW8axo8NUui6dRu3WFt6jDpfmka78N3KgGSUsQ75phR",
  "key31": "czKtsvXsMkyn314yKPgCYENYRmdQkRC2ZXRHKWHgFKgyfiZG3BpPfuG2jDaEKvfLeAXfTvbJ3MYw5E1v6iSmS68",
  "key32": "5u1tPg2mELXP7rxPjLohfL28SZ5V3C8Dkzhq669JjiLAv8PcwTSu5EjPgzmtxX9NykNr46qTDFo7D3VYtktWW8dX",
  "key33": "2WG9DQJYGJrAuSEZDPtXMqF8zeCN1NGZmPz1GQyfKYSq7dVz4TFnjun7uh2HvbL45rkHRND8VoiBtcj16i3bGwff",
  "key34": "3TQvJKShnykKmibqrqmf1pYJBT3jUBvagqm1mm3o7xoBudv1DfbcNkwjoQ7vRnCbmjAsQuwjqQhdxG1JH8yHW3RM",
  "key35": "34VddPybrE5t8Zif7fE3UBfMf95mpPQoDq1TA1WZYQMjuDkgKXFLxq6XgW3ZFmRTSbFTe46XgiLnMz7kFXNs5QBF",
  "key36": "8uP9V9UApxMstAgrkYeMA9jmB3PWLs7qYpCEttBTqKAUXT6YNAw5kt8new3rMCNtSF1hy8z4MukyzaDj3DaTiKX",
  "key37": "512qDfU9Lha5taq5MQTi7AZUMhGRa2k4AxUmcvmiGMvcTC8vi7XeYXdL6GCvgCkNYzn3fUPhuHwxM31uY58T2PaF",
  "key38": "3pjKkrXC8gPNRRURBrVUuaSApMJgCzdWwfS1qJhmWEFU2vPokBPeNursiysHGs1i5r3NnuUGLgVCSbzdjWLat6Gy",
  "key39": "3GzVVeaZ3NgZiZqxNoVZFJDJYrBAjSvkCVPvJVNig7vMsSFJq4yqYwWutq5vyMJKPGffeLLdtbPxyvVniLbbBcvp",
  "key40": "4fbP1mVGpKqsR3gmPk2ktianwnEEbioCVnSt9y5694TUbdPgUMRLFG29Be11b6n1FBTvkBZ7uQEmtTsLVLYjQZSP"
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
