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
    "EPW4EHwhAKBYey2PZcgLgB89EdEWwcu9u5KXWNafNSMdkFiGRcD6KFx1kgojBmETcBXVnCBhfM2K9eSEjJfxmg2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CvpNjazc7dsccEkEwYGmpTiTDrNtLs2Dk2SrbZiyLLXkhf2uc4HbrpdTdorh1bRNF9CRooC4mgqrYxxjZjuL7HC",
  "key1": "3La1Vgsw7sXH1cBF7Z3LvT6ggnFnpgwRvtBUVih1mBFxYsVX95SaQBeoi4KDW1aYKAbFuoNSyGuZ2JvidGsX9zrz",
  "key2": "5xwMWkzEe2QjNZX38tk7sTkHnWfaoYfDby4qzpq12cxfT8dJHpLaVyKSvTvMKjQz4BFns1pAtvcrC27oQXLWMtyF",
  "key3": "5kqnSnE3yfzZAe64Zha2wB8V6Z2xSCQUNsVFGCARAfRz4n7q3Y85QNpThSkDKgoDn9wZebNcBL6ikSdcQe8Qne7N",
  "key4": "2ynvMpQB7mGJ29WfGzFzB1fQzrpAwzqrvRQX9B23WnHwBPhLc4HD5KFam2wPg6qekyFzXqpZYYxpXHugLWWy3TYV",
  "key5": "4zKHEQdvVrDtMKjULTw1wnM5JiQN3kcHZYtcwjq4V3Fx9SBoHRJqahEMtL5aGg4ENnarG7abdxcSVsuWfLsXHvEf",
  "key6": "5EikAzqnXUj55Bssrkx5k9A2JPqgHVPEzzfWKXN1iCKLz4nRXLa8jJLRKsS9B5EjufudAzTVQyJ8xKxyZ7f9TUPN",
  "key7": "5tYH437DiKE9o3ZhNpHkKiiSgoA3mK2rzkb4RtEzSnVb9CUyp3a3idGyCgq1iKjUFfgZRkECxRe8riK4Xmqh73S2",
  "key8": "2wwWxVcU4xYRS9VnWH1pqSfgg1NzX2URh2CMEU5X3JDvBBS48DznNwCpi7kPp831Q6HKyevssPJGqd4mgbMjcnwy",
  "key9": "3bn2ZiLpuhYB5B7GK7SfgmbTAHdh9DUmwh97EXPYwqsWfjzh4JcQVzeq7b3G45JmCCqLbPmjdRCPVdLnwtoK7Ui4",
  "key10": "5ucsmkmtz4RKhFXdhc8JFdp6r9nKmYBwzwjfctuSAKjjuUWFCAthdP86tDokMK2MpAiDkAVquiWN3VrEkMCftMAm",
  "key11": "2sFYEJFspfeiFqf4U4agGvSEaiWkQu4mr2K6fREcdJXBijRCm2XcaVDR48bZrHJwU4t2VbjrSvfDmTbP2tAthiHU",
  "key12": "5iGBHdBvo6FxdGRivHbn4TJC66R5SknGHxMyMrbP7FcQrwdr3p3HcqvTXkfjQSUf4b8FHN4GVAg261U7wKtpjsZo",
  "key13": "2QqZbgRve37LnWRAyny9KB9eHVVX56Vv33myTBexMQ9ajFnXEYE2YirQ8nLLfdAwKKRVVAzRVGCgXhoGapajTZg2",
  "key14": "3kgoUDB4gA3XAmzVZW5ToFWgQTxrSdW8wodGL12dwzY268qG37q76Yo9VvpcTQKa5Chtffdet91aaMHRgL9txYX8",
  "key15": "ez9s8K6NXnDHHcEhZb6TgZgbKZnn1Q9tqPWCuW4BsPfAe2Z3gjNJQCj5yvNJMjL9G6hv6eHiTrKowSW36T4VzJw",
  "key16": "fRUMSFMYSWfdTACezr7frLW3S2G5dg748hL4J8qpzGPcUwsN1XHyyUhmC9MwWvHHsSZqppp4kZV2B14WztRa8GS",
  "key17": "2oem54SyTP79wG7KRnBwKVjUnZGAVVEhFEspv7pTERZR8mvKVgr5TngBYdArNPSiCcEcx7gQ6M5TFxoVSPV3iKcx",
  "key18": "5Q1xnNs87Y3tPgiLBQk5uqJf9UZjxm4oUhbDcd784AJjydH1KfYE3XrVfg3CJmVEEqNwDASkcA5G7y18qJgQj35w",
  "key19": "QVzki6gY4gQDDcmPG2UvJdv9MeR2EMJHDysAbJeZB8JrUUuK5PjwDwPe7nrVJwVQB59je4tnkdWdQJc4iCYjbyQ",
  "key20": "92uKgYpcRzj2ECccxCoymnw6otmUtdWqUdDpWQ7RwwvQsztgk26LA9jV3XF7TbYE2vnfqwjg4QjrjaDWnMVRQGx",
  "key21": "w3J982ii1FvSr2uCGbkV1E4btToeXDSwBsfLCYd8eNusJnhJumifSzwybUvTf6SHbaGKrcrEhQtYsjnzKjywsWZ",
  "key22": "U6iAFNE1VPyRKjGTarhxo4jmdRUJ2mkheXtPq3Yhya7vwk14qD8oHjBQfMpvKiN6FzBnHZGCRCCTjsh9273w47k",
  "key23": "4TB8dk9AEMTJ1Cq5iaom8qai6S5PiqZ4LA7Ek6DVekovLj3mC8dTJCNPKxptfe4aT1bs4c2vmqkinB9AyVquzztK",
  "key24": "5eWsTP8aZrcwZN7aHKcS8pxxCoknsTkWiHXWKpx8oZgNCGkNEKsNAU668PaQGyGXTzHKS9adz8Gb8RQc7kQ5R3n7",
  "key25": "2ssJgtPGz7NVb4iBPHAfA2sXYJMhQqEekAFt1qR5tdZEcoVj3QVAnTx3yzV7HdjR45HSdjQbNunyuckJ1mrpW8Pd",
  "key26": "3WiLnxqXmx5PW4HctNbVJG5vDBEpkoYFPaDawCyVZRom1Wgqg89MbsffaqLHsvkki7waJcCLHxCAaSWj3LmqoYuw",
  "key27": "2qjGJZUFexfZeRsAcLyUuin5EGYRefyvAWMqF1g723pgD11c926nYP57isQmjii8eGExkpJM6JzN4jYujzAZnMb2",
  "key28": "8DkLE8ACWY3YgE7AUE4nyGf94zyqFNDLLE6cBeaeWrLgypxWkcpodMF2RZqKA4RJX8ox63bwbVM9jR3NHSVvNot",
  "key29": "2o3HHXPHp5Vo1nsYfD7EtkQ12kNwTjE9vrWR5S7jxazVELJ829P3wwT9937mkNWx3QsaZu2bUw4wgSf7RvqkzU7v",
  "key30": "45H57XEhRWw3wHtayo5zP71tnoCJrqh733t4NKM6iCrQeyAfjdMFUgLQ8F6seymyNpgVH6eVcNytNN3okm2rKZf4",
  "key31": "2AdQgLhyCF7RS6xK6ZRp1j24e3W4J3a5BWJyoTAC89HGvCAxURCHAs3S69fJaDFik5k6XjGGZyMke9y1H2q2yZnN",
  "key32": "4csf5to2oeghNPME67m8DX1SKT93LzkvZZJPEAvFRbKVGZfv4kk9sg5GyosmcWJWmvfYSrHNbK6uwFPs84H8Kb9q",
  "key33": "3Sdnv3ArK84KRETLb4M3Kk6rBYj4Rap7rE839byZmVo6fDRwSpLvK797JBTcmJwNqbsCzv8cxQj1rKd41uAT5W5d",
  "key34": "tvsMykyhk1Jfd2qd2DYsDxKTgETL725fgqF3rn5YFpEt1besriHjkB6946qNMSHrfLsGrGN9t7grD34ResAorEG",
  "key35": "bQ9cXSEp89iTinmRtqK9vZRYyDtqm4fQJrBN99yc5igGyJtCGEcYWqMHKPJ5rUPAgBgRXyGuDWBEqa3PMS6LMHj",
  "key36": "2NwyFEsp8HW2sDMbDVYEhjvsAosV3JwSR94uomPapfoRTN48aWdNn82GewGXZyxK9cdsthTajjdj1hiMXn5Xmr6w",
  "key37": "2S4sd6Euatp2HGqhmFPR66KHjiLon6VcJ5QUNasXwusNeor2amSnFgJbnpvxoiZiQAPyXs7yhZQ6egH3UTdDVkmt",
  "key38": "4j83jQEGx638GcjdbJ8bXam7dpNEVShx7Zf9neVPLU297DVRgW9LL4KK8J1dCoFerb8ox9eXDk5skgxY1mJd2b7S",
  "key39": "5NVMjQxC5tWDgz39rdbYxYmbxFgUv1KuNnizzKo7dWkC7rRgDfttWYHCh7UAy4F6BD1o2udDngqow4PVX9aWcH7P",
  "key40": "5z3Vz3QFrE5g8LhHR3FvpEYwW1R1fr7pRwktoDDDHFDC2a9NiunwTvThnBrsNJbDiy7CmXB6otSSEDRjamzmRBLw",
  "key41": "E9A5PzErtmmCNfjuunMmB8UHZ33CP64wdWEz2X5XKJUUY1nVHAWbMW5jzykiynJsuMaTYiRASnaH6PvWyNjS8rB",
  "key42": "29MsY7Q2CuXhgFWWtJifpPJniaUX9PdiMezEYbDQawCZ3r8SocfmfwawgDvoKKRLWCxyRHHr1zc31ggG4NN1njNf",
  "key43": "4SxU9GdskeciBsFN8xPw561FkdqZBq14Z9ZctYQvnL92g6CgNRCeQ51qk15UHeJuMruLRHo5NtunUwemCD89Fb5r",
  "key44": "3UFgDM7nGHkF5kV7v899Zd9sUQrKHSfoAHPUvMDwh8pvtRHC8ZqGGK8NL73znYNyCfnAywyQpgx1mUXTwHJhCbwH",
  "key45": "2d9j66h5fK6kwDDHBHGyWSWij8KmLs4tB85HLAUjCvqZroZtKEYfEfoN1xFoprhvTQvRWwo9GEBhcJoq8ECT9F4m"
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
