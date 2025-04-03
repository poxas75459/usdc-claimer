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
    "23JJP93oe9NUMaVoaSXbccfZMQENymBkkDa73og6kEN7mUsBa4ELPvmqsqWphyLGxpWUd1QnAUdhv88JJjd3q6Zt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hHzLcbJ8oVV7sHLZKSqHWq17sarTRvKrKYyV6ioXFTPDcWuWV3a3YHaE4wyUenmU5JRhRfxCmiKQ6RpWi1Vsuur",
  "key1": "3kPatcMm4jNMJxGtRgyAf3yCBUdo1tKDTWAxi8jRNx63qG82n5mtMyYs45oNzqC5XSnzBCiojp9jhqey1GBao5PH",
  "key2": "3zvw525gJKfq2Kx6eEnB7Gc7LYuAX55UtNt4rMVN9wrMYkR9EVSfUmBMgK9R5oUZLVSWopwmTFA2t3MkR48Rbyht",
  "key3": "37oddP6m627R6c9bupxY5nR8aDgakqaLrozbknt22gG2EZ2sthBZkCgEZRQhv4dxE4FvoVzMm9Stst9y3WC7wwSc",
  "key4": "65uYzVpB1jEiVpynmP3XtPerLjuoFHkCo222p61ryEHFoEeMRzpd4athVhdgpffThmaehwLFQAow1X9A9fRnfS44",
  "key5": "4gvn5MKgXhYnhgyXRQ5sJjn9LrRb8ZMp8q3PkqMQaiX4a2jm5fxyM4dxsutjAteBqrQqS3136bCBauTfTsdxArAs",
  "key6": "25WYraWpL5sR7Mp24mk7RQHxArogtvuG7vZxAgEUnZoGQdaF547JZXcCqTam3nYQ1BzCmFyW4oNdDaujR3iS2tr5",
  "key7": "kxqW2p8z9NhXrHbFJvWHssDSfSssFP3Xn9AsMAsEf1JkrEHH4tb8kAjB8cc2vVjB8mUjBi7vVCdzuYb3WZveFkb",
  "key8": "2Qbsev8mqpzACS99VFBtd8RtmvpFwLmoRQ64zEtS7EeHS1rq4hsKSooGtn6VNfQBPKqeyUnFG5cLTSoyJTdiGGXY",
  "key9": "3iVh2axUbNyRdKynsJQCnwpTpe4K9TZvcEsbipY49VG9i2CKCuPEBTmF6xanTvQidE9cFanNXRbpviVfTvA4Wht6",
  "key10": "2BMY5nAWJiswbHBUyD4HXZ7E7DJdmQ9ZWowUW3baBKE8cbhtiCVqcqyRatojHXhLR184UZoMgLyfHHp414s7LQan",
  "key11": "5CbTJT4fGfJXas8Q4tukpfddJUDWygR1Si5YkKxy7T6C1oqEWw29gfnVgFgEo1Q8XXqNAP7myccoi3hZUx6vMhEf",
  "key12": "5b4zGXeo4KfxWE9r5PDsDCV26i81AmGBtNJxQWSfeUPZQDCiKdCngpmY1z3d6ZZvVKW3JDXQAihWVMD94Vbbb9HX",
  "key13": "4Q6WGQ81fkL7TTbywBpUg3pyj3oEtnAzLaqQY58mpenTwfChbhY9F3XP1c9c3hVkvtLPWNhdiA5Zh8Ef1qoeJo5M",
  "key14": "4B5dVVLGrkZ9iv2vuygbMw53cS1AVwapwoRKjPP33QGFByqGg6cTWishxqXYAdufEvNaVVW4YQGA61CGsy5YFgAF",
  "key15": "fNvWHEeat6Xydpd9QR6wLAAvxFdLAq9SZE85pg6BZUedyxEFc5xcQwy9yJVTFR5XudSWeGPSuHu7nsroFkMSFkp",
  "key16": "3mFh2T5xiBSBAJs7KhyMRUaVJXcTEudvdY9LeAturueuSrNH3U5n51Q3J48gNTyBEAZzZ7LddieLf2tGcWX5FHRk",
  "key17": "24ufJWaaoFHXWitiV5PQDCcbr7MJ5aAYySDrL8XMy5SrmJ4LjiEJB2nBTz7UaEvKvEYHRycnv3vu1sfvY97rv5uY",
  "key18": "5dujZASSNwiuE5sif5MV567JDK4VS8e9ucwoveYGLhkYYQaGtzX3iMSHs43N8FtGMUDdvkpN727z5wJ2g3A2n5N8",
  "key19": "3peWostzTF7Td1BN7GETf5dDiLbeYCutCyoSRLtgmwTjSSRcZAich4C5GbtYJXTUK8ie7C5qXfeyVEN7EkirwPEH",
  "key20": "4tEDBi55X7khxeBZwoCYQySPhxh2Ld3XAFdHirhSqxCTDnjYpt3J1xxWfYn5K4afwTos1e4BbuArjz5MMcZgSs5Q",
  "key21": "EYRw7Dhevx8dXf4LDLaKzUNB9m8ovuWdKVwaVCBuVQBntdDYADjoHiBFNoMfW9u266bubSNznPGFesU2UzYWNMq",
  "key22": "gD2Z65Fyfj4BZ8azYR9mxwpt8UJS39SeqTx8MbPTQiztyQhX3LQXWZpARQjBWYzjQxNFPnqQb8UycgJUqknaXZU",
  "key23": "59gfqfDWA2FbedMUrR7zvqJPaYyYeVqs7MZP79QNWXwMBqVVZNsjUCnt6wsEynVBaov4p7PycW8coGf2XEE29VPj",
  "key24": "4JUEbtSgeFRHtNztSqKrjvq3BgCjses6RcvgATPHUfsUc2XZ1YRFSzDEPYXchjy21ZkCvkwJGvVG1jGzZyLGiKja",
  "key25": "4nMg75cFBDD8etuJ9U2Buw9N6cDLSNcTzuTdX96TkMxbEpJSpJFthNxwx5ixYBeJjsYdfVrqEQgKCtpy2N5c4enF",
  "key26": "iaGvYEXmZAMPMyCP2NxtGsfNM7gNVer24CfLAo6pmMmayP5H11ujvgLnbVRLNkwBjKvWFtCqWW6VYCzR5eATj7i",
  "key27": "ESTYuZSfHaVBv85BCTsUKLCQwh5HnARtMfHV5wkhB2gkMPcwJ7xbRgTteEiocND81Rnkz64ojYm48rTBH435fSh",
  "key28": "4ehrmyiRLL6ZAW3y7ZdE6tuo6ktjU3aZL5FxKEWjh4j5iMcBHBrZPzAeBLbC1aD4HLPHP56AMSQXW4VoGSdniU77",
  "key29": "5TJyR8WNoPit2StB4rQWYcfKD9122iNSF49NLyxuLFDWNGzCb3o38zhUnJinTHrk3josC7tCF2w4dFYfvrV2ayti",
  "key30": "7pVriyADZtNaxoUzSrRYAMCBnMNTtGxf6NNJDDh4hsNzDV6yhUMwAumxW4bQRbZoU1FLL2qLQdFK6zYwukW6SgQ",
  "key31": "5BKbB2DHZtUtbDQjtuDtSR15B4Paxbf72CCYRSHNK8CBAjJWHyH5tuWKYHdK2Aq2FzjLcDm1ceuwJszwZMmu6H8h",
  "key32": "2JtxMKLkwJ3yVycfBLikqmucnYF7y8D36bikFcLoNUYyFfhhWBiyj1hq7b99oquX6zSoYQ9n83u2Tztz3oeFRkwc",
  "key33": "2ftHidiGEcZyPBStHMfCmPD73K6XmMP9jS1RyFzyjq3rq59yhgeQgqRX1gsb2496oVo2cT79H2pxVwz2Y6dsYSNg",
  "key34": "5sWvLQU3aEj3F4iBUsNZBWeJeXdP7kpFRxzQJHjHgdLpBe17zvQVsUerm95qwZpVtUzD2U6MUnCfdvEzxfEpLeWK",
  "key35": "5LpyLjWdAaZwWm7tdDKFc6JdKjTPwESa2visM2ropAF8m9tWyev77hZaPauUC7ZWhGwXt3ifmibZrUwKLWzEibBc"
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
