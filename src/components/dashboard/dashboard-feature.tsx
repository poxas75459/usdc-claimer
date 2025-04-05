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
    "4rqvJfXc5SMx6pmwfkDEwZqkHMVXLsPWst7FKzizp3erwhtdnHBU9i2A88cRNXRWu8z8WNwFoCq6t6LG8M8Yohxf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EbKMJBHwtN7LyVbGtu4SSRLjapS3mS2HmcWVFMZya9q2S2x781P6gccLwm6zHBWFxrdnu19UzGH9d2VpsChCfbQ",
  "key1": "4j6RheKGjGLdcSwr86RoqfG1TVynEB4Fc8hfhAsu8dMFQNQ61P8fVs2moE2wbTLUFUYCKq3p79nt6HE5T2S3CSCP",
  "key2": "Lbiiwa6jsk2o3vVtQ3MWYxLTPKx38cLDyQjYKCNsVrg32izy8XTfi2DJRHpe3vCgL6Cvfx4xsJCWqv8uoc1kdSy",
  "key3": "4tUHMgVjj2CvsckSA57xNMnaswfFxWxaYWfVYR8oAiqFqvkbgMj9ynP4BExYdmYabpzqhxfNJhMsANmeyu9xd2Hq",
  "key4": "L22GpxE1xZWWs1myuz4ZHwgz83YdiJNgPzkKnyko8Q5gjrjxXvUN2pf8t4hTcJ3iVrY4ZMYEk9s61C5ptMCM7zo",
  "key5": "4cf11FjyqWpNKbwNUoErXkqHRFG8FdVym4Xgx26HYfzTuZgMvxUrfRAESe4PbBV8Bowi1K9krTYQsHBsmoPQ5EaL",
  "key6": "5RFPB1bVcjKDnFXiopQY9KXo7MFe9qATzjKvYoXsktEnncLxDuJ4VVUMn18gY3L8t2bhvcQZHm4hR5RmheKBH4G8",
  "key7": "489moAKyGsR5ipmpD9zXCqzgzeqmkPh8iG9v2cjLR97oaPwxW3R5TYCgz66jdkn989BoRHCGGW5p7cjrbtNMLVTX",
  "key8": "5gxemdQ8h7LH4jCqgQCk7h4Eg8wbG7amr7fdhJfLqc2227Ght6MnPPnBT7FcfjdxYxCQhfnn6iGVJ1peEsXWzmfC",
  "key9": "5noiztorSoFocyVtA8b8M36ZbiLqhF6tZnCVCX9xcsZ5FV7iHzoifacKNfyhTDQdfM5EYCWKZYZw5Dcjo5dBWSkf",
  "key10": "4vzNgqRTvFHv7cghsyCcGWckszNYK8e9YpcetuHN8PVTAY8pHBE1mVNKJ3cfwvDUM6wourG2P3a4vU6XJTnvLjy6",
  "key11": "27YX2k9gusL77AcGV2fe1DCA4Du1Z6pJ1ZbU1xpbLzZRkcReosbki3fv86NcoWxq6rqwKXMzMGensQeYpQ7N4ZML",
  "key12": "2ZHqV5tGvFDwz55cPveVP421VXYmbNiHo1V6vntAHaFA3KQLiDYXnFK6uAq4rD5ehweQxnBkvWWXy91744xvLrUT",
  "key13": "2TWr3n8PAfV2fp9vWCH2sReevd8mjYvS4UfrUoFoxA7EwiQGdZVgGXEzLMUvGVaafryMHEjpAhXX5amGUjPSb2if",
  "key14": "4VAxUdbofGqAHMbMHqSEJ8Vhktn9tbuoaBbMYUvzD46o7NxbGCuJ3ffWNV7AESSYpYPpoeditHAztzpcbC6j9QTY",
  "key15": "4jY7XHcszh3jAwEeBCZwh8rbZF9PX4yBKdz42C7UuFiKYND4tMFyfW9odoCq7tWrkUrH2zbvS5v2dpo42greVuYr",
  "key16": "3ndZ4gSWXvHifj7SbvbNWGbwiETkeCMqSQqsPMSM1Qz5GmkPWA5pMWTRt2xdQmzQF1neLnABj2E5hEFDzW3UpWAL",
  "key17": "2fpwgdhK9nCs5GvuoUMZithedCzUDTAPthhGDJph2Fs5pbfKQgpTaU13xCpcwmaoaw9434Fx8SPXaZGVXP9Vi2tN",
  "key18": "3TeagqD5YobigXyykkhx7GRt6Sy7ZKV5TnRbpqGrRGd3jD7Q9zWebVL9sqrqqmX2ajqcYW6cBokoF3TDcw1XCaiy",
  "key19": "2r1kpAMS3KBctYzxSCYXzZxNvcEfcCdaLAiVGcKvdrXAou6SvfMcMg3qkdK3pery4UUKa94vW34W424JHVLrzeaN",
  "key20": "5KMVnnS5yM31eyWzmSjo8G6b2wz1qL3G6BYUyJKY5TsRmBALQyxLecBgeG58qo5Mf6Lvf3QmFqREs25MduzH9imv",
  "key21": "4MWezTNa9ttYNWcxYpm4TCqjcz2Z5KrCqNxQVJCT239DymYgW68PnHRyB69ipkKagpJZNoErCGF6tbmHRyXGMgRa",
  "key22": "3KKR2B3N6SGT1TCnK4fPkpqjCFmK47apqRCns1woiMyYVbqNVghRZxdbZqp2pGN9hQM57Q81nDZ2ctAQe8hZGK6y",
  "key23": "2sM9QpEVcA7pEtPe2UfMugvDb2wxDNtcDmeufiQ7hbr8hxC88PAef4XKLMn6qZPToSonqoKz3tX6a1mMrWyHt2F",
  "key24": "5esnUQpYxdjeWhwfzykZcgrTxR1KDSbskVxpJZyWLk5EJa4LiwkGBahieDEe93W4GbxETLepGCu9TcBeUuoiDbp9",
  "key25": "5r4Xjbt2b4MGAdd6n8yL2mxajrBWizcC9cnpvmfdB3m5rDNEmWZoYxRRCS5qBZ62RXLrVTckcn2pSDFPHoKzw62L",
  "key26": "4YpnkQfqrUAv4EMLSAStGtv4ZgryW8oEvqV4FS1ioCQgketXcH2JTFRErtXws72bKTL1rcL6BndhzqMQHMh2eU3P",
  "key27": "38Wz4uuE1mhBMi34DtQot6mbw1pFVPuuWKQP1j6ikpNSSw5Tk4iVBMwh48sP85Qmt14NTeasD5UgiU8zke6Vuxdc",
  "key28": "2feKhzVmyM4Ajg1pUGkQhwm7uEv5ro3ajUe9tocTFNpUMc3yA9S7zcEqQq95NFDm9RzzE6bp2am3Pqpa7Rd81x1A",
  "key29": "4Rco3j8JA79c4JL6j9Zbrsb6MQeoQJL1JwJz7Rd4dK4j1fwu5LLWM6sDQSWHL5kDFtnShf59nZqDF3AhxnDTNDNk",
  "key30": "3m9ane5FgNYyGrsSZzKJ4114hn3dnKkt729dx7i4gJfGBfH3mhZvZQB5f15eTDgXUFzwt1BmDQbRoJb8mK3ggC83",
  "key31": "3hbfi2EmTyoCfztom4E1wUapRmeY5TyjQGVnDb3rQBgFHmY2iRGBZQUnXsh28CrWREEuH6fuVwWT8X4inf43oeEd",
  "key32": "4FUeg2oWAEYLEm5WzRLzwxo8LtAMCGk9ddmTUPpefUe1zYjNC2ufVaHLPMn1wNjqBBhDQDiRoBexyeRhRXNVXKu3",
  "key33": "stCNFQBDHuMAdfHPmEF3Si97utRvzLhPCg9Vc1Y5sLHGPmx5NmcvVEBF46ct1WpgcNKUYDsSvhBzkvhDRSgqDS3",
  "key34": "3tGN7636KkizqLD3Jy9VSmPHszcm2qfDgcvW7mmbxxpYvZraV8BsU4vnrg9A1i7J7aemJYAMJCJ1zehF55zzNuJz",
  "key35": "2Xd2tPFnvJyYuVpYHqZRwx25UYrSiBm3qyR9Dv8YzfJnNdbDBarVNkE4wBomPjfNjUqVQ4rpAttU7DSVPB46VwMx",
  "key36": "xcqmcQBmAJbTUVmu53CY9M1kgTGQcKoTkFvmSZv3XK4hiXyA5eWwTbPzUA3AmRieAoTYghjdY8dqEAQnUxduzkP"
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
