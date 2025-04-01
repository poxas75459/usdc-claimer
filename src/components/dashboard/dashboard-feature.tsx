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
    "2ghLVsdL2Tf1yH1DtfqAj4YHkkMfds7L31U3p1CQXZtVLEE21D6wSacc7huTReXqPeVXxTHCxsKDAZ8dDmimnqgB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38YuR7nDrQmP9kRbn3JZRPMBd9k9yQKVUJZqNAF9snmHf8SabKNQdDmVoZnCFdvQJjijgTjX2uJ5YzWnqE1U3F2d",
  "key1": "42g3p1iaeFjXTfvQRuuiGJiTKSoS2uXHbk3Hmnu7vse8QkJtpfGCSAdNAAu9gsuEEC9J2Dryack9pmGch4m1giuf",
  "key2": "46uDWAqH7NuLqH2i3jbk637p8hRsGRYetwXNt4Jw3dkeD2vbGxcFeh1VrJGxNb17j8WHZrq578ghn78dryxftuhV",
  "key3": "pGbdnUbeAeYJpu7hvuHaiuQDE2MWniNJfxfHJXaaVDqZzR6v57THe2eVjUJWsEBCAme7PevR7Hnb21MtbgNRGsM",
  "key4": "S4gtcxhfnFfB4NyQ9ETWFpHPwcsUyJMtjbFoHqEgfGvdJrv6RfC9oKavRzwhiZiZTvAzVNoxMgs7gjKeegJvDut",
  "key5": "55CPxrADKViAE92jb9Zt8BFsRkDxxV1p3SLw6BbFZxxNSDcpUuJo3tzwj1ikr74rLaoZYUdxpqm6ehQVEMaoeB3T",
  "key6": "2TtDBoNAZAKfAPWb6RHazFWNiorSFQ4r8Fks6ZN6jPZhjnfpKnimhGMwrxYEgUB5EXG2TRfVCTU3x9AcddackSq",
  "key7": "39mAiKmsRHhV2i1oQMwcWb7cHpPUK1Cf2z87G33iTuk6Yn2xgMpYA3S21sKRj9Uw1vcG74rEkMVgjwtLAKdXP4Pa",
  "key8": "3X1z9fWmbmVuwALnDLgDKgcW8MLcC4Nt93XfFaD5qEzwL9E9CXGBzpW35tU6t1oKjgdZqddHXKcSeoUHWNdbbfaq",
  "key9": "44i9VQLNdMWnX8mDgqSdAZ3hHu2ZwKsqFVZeAeeTGCLPq3PRokrT8DZTqrgSH9RbqTLuZ4rtqZCjv26WQayRgYgT",
  "key10": "4A7YFmAYst6LRA8fgbX1mxjLkGiQrch6TACa23JRRKP5UijvGCDdkzZ59h6j9hbwdQALZM1BpdHajdoXo4qoy1i9",
  "key11": "2VTPxyEw55fXYyoesdfEiRKK6vFxQYMMGzwCvbHyGAMoamDdG8ReqLoQfiGTNSzggxyPuv2s6qHhoAQonbrRYcmZ",
  "key12": "34VCKdyarwEduPbWKWHXvnkwczZHYa4vgqnQL4oafTbJsyJdpeFycMywnWgjJHwn4w8FAuWhFwH1kga7DALotHv1",
  "key13": "49uA8uqDNNmj7Z33GzUfocY6KpeKr9iyHn1cExqBvgK5VLiYJRz1bWqu7wpNk2RiXvomM3odfMhgb48FWdCH7dR1",
  "key14": "2PxtwBD999Bg1igRtPUPXzVK4SmJQupbimeds3iFCjeT5gveMS6KszmTLJ7qH3N2xKucS5BssJvoyfjdq4VfMgiT",
  "key15": "4wQY8mioUxcrGgaq71JRUNn4aB3eMdbUPzoqBGhM1maz2FPbi4aLU57vdNtBMTgnuyNRUZUKVo3ovJc7kt2x8GWt",
  "key16": "4AgJa9FAmdHjE2oGWtvWEtP45swFAAufucPTRKPjde4nhofM4MYk4pPH6PSf4Ey3GHsMT78D7HGxYecZ1gq1nDK1",
  "key17": "yEEzxXuunLdXQvBQ1dG3L1tYkKHrCZog5Dxy77wStQv8ArnVtgMzQgm5jKJfVDHnnXjvgPSBNUmhY4a7TzUFdsh",
  "key18": "3GtkgubGSyd55nBiURQ6zTvXv1L6pkJjj6Q8ULKE5hmxN8qwkX2H9hEiZSkEfBELqBaNT59GkYfQmR7oKnXswWnk",
  "key19": "4MxbA1RJ2gziRMeHfgHWPuxVBU7ePdzwwd8x8UtSzivsSg1WMwyBnJ9gkbkgkCepSYNfPeUF1KFgz7saDFgNh25t",
  "key20": "5ou5DUUmKw67F3DQy1Vx5Gx46Zs4sTV9wMJFkbe4A6TpHeQaL83eD4FP36f1XkvRvJeNvJ3NJa9t7WAwNSNckerb",
  "key21": "3mKGyqZG9NnEcMyTnEnCmaAdgdrRTHhBrGDwbtheaeci56hYvzLHtYHoZ9kJ7bvreMUqnFuDSA9tupbcudTt41Dp",
  "key22": "27F7N5yUys5MSqTBUW2bvnoWcpw4JmMHFqjfdUgTSeBqr1uo3zuwktit5Bj6k8s849nZYign9oyjoWndo85Sbauy",
  "key23": "2J1hsn6n36EV48Xd7C5ycQMWoeoJVNbfeBvYAC7vZ2F8DCPL2gFGQsRCzzaVp5w5eDKtABU1RvoS2TTwH3FkZjez",
  "key24": "59GtMHAzUMFSUztaFsULsfoHcHGDwmHUhH4Q8zeUhwsLDggJvcqANdmra3nBfUj7xzCjHv15fgoqJN1FtrkTFRyL",
  "key25": "5brnTLd6SvKvJXNXLpYLwBY9DoTQsoaL1U5GeKCpQdNjCHF8ugeswUS5bs3o1V9969JtkdzNrB4MR46yFsmkhKY3",
  "key26": "4fs39NXiDsu3c4zqyPZcdoY9aoKPmo2hVRqnjXixYKwMvHwyj2oK1HsrHPq1aHSwYr65fcWGDfF47D3Kx8rqBCJd",
  "key27": "3EMvQT9dG12H7pTAQTqiPHLdh8sWajnTedEyXbS4qi6Yww1QR1vcHgVZKEWdB3ApTG8tg6T79Eq3Mz2Qh2K3UY9t",
  "key28": "5f54npyLYdH4jJpRVChwMNgECK7ycQJdQbtvRSbzZ9F48TfvCMiPbx4R1rFxnYPTw51jWUhFeWhutVbjZ4hVGNRf",
  "key29": "4S1fHRXRJhnH4pVd7Dd7ataZndykMyWmHmuwQusjWndT4QahfMtUXk2S6KgVr6w31mM7zETJM2zSbt3adArg8AAH",
  "key30": "3F5egY8j5kYgDpVVYnwYpmyuDYdZKsKVyekdfY5ikKKMV1xLFgWkQMyiwDowqp3yMJPaKCVRMdTdQnenNfnP4FED",
  "key31": "4JDFYx5aAe89PEsh2kEnddiTcKCzM9NB68WCqXUAVT16GQk7xjm9GJXgQ5KsN5QE73W3ySi5zXfrvhaxPUJZU1z6",
  "key32": "517iNaD7Du3Mru3y8rcwCLWWHPa6aZKM7VByYfLuJLvhb7JiS93meb3PSjFLUL5w8PdgxnCfJa9UhF4ycrm1X6WD",
  "key33": "obtoc4p1RB4Pm5W3LK9PNUgjrtLncoXeyQjKe4BJmTfKC76M2LPBVc7ERQiJWNBqwv6VfMt3R1j4xQ9YjiCRzqy",
  "key34": "5hUYeig8SsQUdYTUoHFAuKcAz2bq3KPWHwpVGZd9g56eFu77RoPcT3XGHpWA6PFqfPdnKphrLmwXYyxNcodShn9T",
  "key35": "57vYjbYbFYHmz2ktVa2uHM6XyGm3Fd1jGC53BAb9MaByfutyL9isAvJs6d5TDDb45Ub8g1W21QtTW9i8Fsw2EWYF",
  "key36": "NHti5L2cqWSmH7VpzwRYBHeKUeCuAvVHcxQ7PmXnAt57RYYNCHXPKRjeXJWb29HQnWQ4WujaZ1gZwm9J7VVXAzF",
  "key37": "52jKUvtwaWa9rXbsmuJjTP8w7TxPXEDqog2YxZZsWhS2cDu8qCvByaQBRdGDxLQhUxubiehbgjQrW6vrrA7kvcL",
  "key38": "3wbat7FkryjymAPFu3x5FcwFGzExommxJjS52DaiVGcErV46rCVDJYTWXAkrqYPN794UrETof4ej34osLWF3LTdH",
  "key39": "5fDPYGRH6L2ubgfFDdgTwiBiiQXpgWVpgKJd3xYrSu4EXbrTN1hc8D1tFLFG1KtVPH9F2Hc9VK5cVhmjsERwWgdH",
  "key40": "3xBkgXacwhpgJS1gWdhC3WLVBjSHxwwPG6ZonwwT9irr34DZCSaFnib136LuyYXcePYBdbB9RpDW6QcASbe8BPXf",
  "key41": "yaaujoQ7xMBde9oGmViZJYT2h7mWaZwTpbvuvgAL9cf1sfPZk9ST4mxsPXTs9BrTzihN7cAU9oHPi94N2BDBNtJ",
  "key42": "3Lcj1tHUoEUGcZn3PuhVsqw6WGrN1nPkFzp4AQxLf9HDxMzRUbCvV5ZBPF8dPiWRTdZAPBb1wXXhJZGh1AGpybpB",
  "key43": "3MqcQp5vcf7wP8e3CUjviMYLRNs57oNZKC8xRmZQxQhCejb2bcq5SDYBYUgjhZAuHLmbzLWeqnFQ8mmLaiYCAefA",
  "key44": "3uZPzwVgdJbMGvckFkoruM8ip57Rm1A6pwzDq1tfQzKPYCUfTmfYLTHPuFzX6CAEcRsdSgX3xmmct7n72FwmQZjB",
  "key45": "5zETGX8ToUbwTedyak91x8nUVvVu77NvJQJCxshK79aKTqSZZJfSyXaFYTXMqKeQg9M2eYjVcY811nQShB5vSe3g",
  "key46": "4Y88Y54wCo8xsPGaxxUEv5iYwDR1viBt4uWezfRjsHTsQKqCn74PoKBwSnqgWwmhGbAaNs3HFbt2uVY1Gw4UN2DE"
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
