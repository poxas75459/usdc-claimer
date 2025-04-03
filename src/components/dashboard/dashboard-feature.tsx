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
    "2dDoqda7taBKzjrS9Y6xm97wZNafk27MkmgHWRMHaw4fCG1JTbbY1dtJurgv8WDhLN78MxZBc24MvJAsdM3yKcwc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cwtYNqHEVbTmKAoSCh2FvUChrD8VYoKbG3AbGjuaabttadKKnt96qWsRut6YWTjN5JKQvk6KtiXa6ae9zwcv5ad",
  "key1": "5sxdwDp9vBiDwbTqisUq12pCdFyPD7PHYMqutNdR7eZPFS9CojkAEtKDw8AZz9c3fuNsSU57EdHruTs5Gjtv8LoY",
  "key2": "3NnFLeCUdLJHZEHne3WLuE7kNZnBc7iJLExaA4mmrwsBQhVd7KrCfwpSmmve5UpGuPNwRyQD6zxT2UXGwcWz5Z3F",
  "key3": "aVDUJ2eJxS6Tg23kzS9RxawL8mkCuLFkcgvt3iaBPVNhhiFkauCKp133JbU2B9WUGZ7egnbg2bRZb4SrsrzWDWb",
  "key4": "4fNkEpnJrhdEEm5iXJc6nmyrad9h9Rkf2VB5mtophpGAbHFyCdctPtA11nzqQxs9uvkXGfbRoVFfa2W3RNWY2Lc1",
  "key5": "3KRTXFiJaphKkiKCP42noUsJD7evoXmNDiHCrZDotRyUTUwqp6FRawH2QCcARVY7YLTmxYTCnsnGMSYxgjTXaDkv",
  "key6": "4nUApmk7y5Pgzin8DbcTJeMcbfwka6jFmNeiodXQMtNwaxRNuFoPcuXVqFs1Q2WgF6M7MwFmBQM375usebLodRCa",
  "key7": "5dt3MmcCW5oiuxruyCP6Xw1BDvcBgPRH4RRe9coFgeyxGzjBX5C6RTSHE8z7LyZgkDtEWHkxyR4Z2qCwZQMWEgPN",
  "key8": "5tceDrEyEYLdSQZMMJw4bFPN3QnDvqDoYiNpdS2DVcJ7tQUBGzMpjZ8HpQrLSkLEfvNWwhvwvsaJv2T1KY5PCeKY",
  "key9": "uWMrtvGr5rmyD1ukhY5PHpjuc7HZN2AybU95kuLqFejsVi3Uh3EhpMRHHQgU5UzgYavExBZAoFQiXFSkeWnLXGV",
  "key10": "4wCAStbD4VKqMtMfAPVS8XFLDpw55AgZbZNXhhQ5ne9PhkbExLNkLg9BxMsUV5LcJ9sBKZBwH8YQPFhUJEQ97r3Q",
  "key11": "sYxZGXzbQa2qzSeEQeKuS6fnBNiWEe2CkN939jz4AUS1APHGXWfjWMvwWwpeEnDAA82d6E3Wc9E6FU4LXE3A6KE",
  "key12": "29WR6EgytWJSSDn72Q2ijhmz7RkdncoFn4ekPEXjAqh4Rn8cgz1ezHXR2UNZvXzhf145DNGAXQyyZz7jFD5YkSU8",
  "key13": "2V8kawNBBoNsrbziCqADGoNgwno9D1mrzP6HggFv3EQxv6aZNbEVPLajxSTvpBrFMMKHQfno3ZsuPAPA9nSabggs",
  "key14": "3LhYznZYMm1PKDv1hzN6uaVX1uEGBovaHKJhsuSLxoHt9AvUJVgaPVgjGddshYSAApPNHK6CiopNyWLA16bEHKvX",
  "key15": "3NcDEWeB48kSQidpjmLt2BD9qPxiMbU2jWvM1aNKgrhtzDTtfdtsJ9AYZoZEQcvz5vmZWc7cK9PyFQLgzfhBWRif",
  "key16": "53AhcAdwYHi8sdnQUGJmy3McPWmkAH2geQtTi2nLJ3b9N2PSnpVzFkzJ2AFLriRoR8rSZvSqWKuTRxFUe4obnerf",
  "key17": "2hD9jkc2iM2MPu1YJ2225zpAr39jN8m3ZkSxgDrpDeVtvq33iDZUb1ZihJcLanbVvBpNkHJostK56GhL9Ao15oRJ",
  "key18": "3a8wHJDnez96hPCdtLvnmxRNb1BNiEAzCZY9QBfvK8nurr8RA9tXcskvvBussudDiVEoYx86bvVfUWFwq8ChCXAJ",
  "key19": "SM8UPcedGpwcjuezbzLxw363qpCvtYcPxk8jpQJ8yPV5U6m1Wa8PUoRXsmnbb4wvUEoASaBzZrMNXWDUkh95CZP",
  "key20": "z4mTUVtgetAEp3uCekRfx8MLpkYL3nZUUDRXtGPVoXgwiwtP1zHuu6fLZc8XVxNCmVSZTeB1gw4rKzpDdn4Fnmd",
  "key21": "2BVdFxzkQCUKaBaZfM781b2ZVc4PUbped2GTxAMaH6JKmeoPs8EebTh1FbPakx3ze77dPyLtTN2LYA8Gh3ui7UiV",
  "key22": "5XeMwRhg6rFzmuE6SVrLFukUZ1VsKjjBKyuKrjzj2WDJ6s3dAHV6nsqf4aq5v4gEmw1zkhkTWt7DLhzFyT3AVFDK",
  "key23": "4memYoVNpufjyUHn5FTJUm3Yh4MsXXfBXaegNP3f6qk7aybFG3vt7yRaPH29rGe2jbCppontkJX8wpSVjv5tsNQX",
  "key24": "35obBtaZP1XMRtkdwyWXfhSmraeFu2yiRaPrYJSX4NHhLgk2Go2fU4D7UbDhqPvEnbtrqmoDrAWkkByt6JjngTVh",
  "key25": "2JdKkCrib8zPgBsai4BpWhVcgZT5JdAeVgozEz3ZBdB4BD75998KretwZrjjT94esyTXzKPuVFQF6dToLSA5vdrv",
  "key26": "m3dEoASS1oXFGSVnRsPiV9h5AAwDMDivB1G9oLHVtkARB16qx9vjPhPMGZxrXUn1Rq6Uog3wUPTF86Kxss12kut",
  "key27": "5sPrudyRKzkQWLcPgB5YiVRWtWcoT6ETTkKkKNdAWrqAM56WZF9EgiKjgHZDxMETPgj7HRHmND7qat7a5NTQGrSw",
  "key28": "GJknKX7NZvnntkzDMzGCJoKUUutex2iedKCCCXSc8yaR8wxQQoxbS4qM1VsZPMxuQVpDQMMLJLUnMj82zVE9R6g",
  "key29": "WCgBpQaEkQbHQM8WiZgZ5nZzT2hwn4SZPgfw5Ej17Rq6sC6RUnqufsC8BpxLwhNtCy2WkYbnAWX5Mn3Wp2Z37LX",
  "key30": "2dkzLsWmwsAt81e3C8dxuXiR67JNK3LmfPb5ZV4TZQpzDNk2akGt9iPc4m3nac6297xDoNZ6zhJfpSm39vT4eDQM",
  "key31": "4cHCeruW9juFnBWkxmTsgLtCbRjrUshNxnNVSYqnn2yzzHYQLVQJdMLvzbbPHoTuA9VZiVueZywvUTNqEtd2sUFL",
  "key32": "gu1LFn9c6v7EQbahUu83idg8YyVpBxEA3e44RYPKrknAbyxdx82qPA2ji6skSZ3HYg4LG9z5A4UzFsQZsE7Heum",
  "key33": "238vyctofBc2H2BTP8GYceGKcLmmFoZn8QDiCf42B4BGAJVjfE2qr3unm7p1emzP8ALhv4Lc4Afwed8FTq2gMD24",
  "key34": "3nf7ptdxcGeVDn1cfpZmp7bo6HKeRAtwki7yiH1fwUCMtSQu4wB7trNqjJbJjCrVkVCNCjmFNZBtuwf5U1D3BinD",
  "key35": "3fNg8w9WsndsUsu4euGcBC288bracQssnoj9vYbNzFDvgjUWT7Ps423XG7jzoFq4bqSnWpNL8626RVrsnyjTMsHk",
  "key36": "2EUhbrsyZBYWwsfh8jQpGis1SFDV3y6gzqJyLCJ93FvCJ4gpW5g2EfiBxYysUZhdoeFksRuFU2d4mFPvJjks5Lt",
  "key37": "58WGSD13kZgbTVw53y6qhp66mBTmKbFYAFJ2MXfs4D9njpXe19EehtEqBsx7LrBxBC3wMjLZ7MthKHbZcYEmrGa2",
  "key38": "wQFgVnF4J7PQ67XofgGioTe7HDHUPfGEvCLsErzQxExvBdP1zvQ7UbCAWrrjtDbordAiXEqvX92xAg9TxNNywiv",
  "key39": "58TRayFReYL5KFZAYoFHYtcADjyUDgGwEARWLnV3P8dmo42hgKPQcDubtgCW4Ubh9L9896uf9Tu2zEAmaS9tbaey",
  "key40": "33RsGS85LnvYrzmiXKXEKXCXE4w3oij3XpsE9Dwypmo5zTMNhStyMU5aArgXCpqKBWzBBXg5TcYBeEj9gBgaSWtK",
  "key41": "227JH3PaD1Ga5Mr9WtCgYPh8uSFbrv6XCnYhnViXJhJ2NjyeWPKRpYS2hcAZ3jDdzdtGS2ws4xDbxRpWH2vwEzsL",
  "key42": "2CFdazSNswJDccij7HwCfdySyqQxsdB3GENjstGSsCRitpsU4BgaJEK9Di4fQdM58F65UtSM624hy34WsA8ckn71",
  "key43": "4T6zAhMXnuYfwLPe2JuZsxZQ949khrhAgKkeCGCstawiLMfr1Rjn1MhpvpkfABu6bPaXYL4Yb5soNEcrB8bqwLzY"
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
