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
    "5HedZfKNAQyA6tkhqJZSyHNx9ayjHb857o3V4H4BYa6N2q44d93SkrvsW8KiqqgBrTaYDRW66fKeGJ1e9YerdbRs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YsJkTicvzNjLj5S9xNCqkUVbzPjw6owsAkQpBPgx2MTcQxiFvMDnPZXoeNk6wDSETDEmCi9bC5gduXqbnU6Maoe",
  "key1": "nqfGDq2oS4VWkGX7w33fmQoJqSDc7mvsKhge1FHbWynmYrns7fFaUCc3TfeFgyAV12ny3KBC1hE2UnWqagNGLBM",
  "key2": "2kbu5rRuzLoqquQ3cfBSNPkug8a2Y2fCsKbHW6acyxRvs6LNqcbMWjm9sBTmgkn6yGEaHqRBFekpXgCNCRviRMUb",
  "key3": "29MpeyZhiQDs5v2F3759gDXaWNTmgoanTzmXawxMnijLf4uHrYSJyWmkTA4jQXeZvLoYQghPjf2k8ay1mXW11N79",
  "key4": "jqS8SL2o4ddRaxHD6BCweZVr8WDjBP8wsqezrekMa22EtKuRfQXDcH9NtFbYcCKGZp7oe3SJz4F4eVC2fM8xQK5",
  "key5": "41ACU3Qf6h5Gf9AMAGa11BpNNHggdnPVm4i9r8eyVTVgs1PCEqCUNPsr2ZTCYCkCwkH9c2MLgMUARSwzBvTswxPt",
  "key6": "3XA5FU6V2fzjs9nVKyWZbxNEnwKJ6o51YvaGLR635MCHTyWFzPbB5kGrBLK7rcopsbiXZvr47DxXFj2CQz5js5VB",
  "key7": "5WzqkH83S4gU7hYe59s8ZDnKnGxKLJDY8EWiyLyLi5ZvjuAJEnYEE9kEsLkbMVM2b3P1BSdZ5oYBPGxnYg5F8VyS",
  "key8": "XtvucQ7g7evAmMi7xbBCoK1htNvjkpF4tDp7TocgX3jBF5JuwH7Y8KSq9DjXcgxWMJWGo33BsnX9Sq11f9Mmdn4",
  "key9": "5PBnRCXA4BuMfaLGgBSFc8kmcnGq8xfosaWQZtVA2u6wiPQzRWDdJZC73qb2caZNvMsNQxvzFpNhES1N7qzjdc7C",
  "key10": "2rmtWrg6rauP3xpP1ZLoaftZ2Pn9A4EG8MRpe3XNPWuzPSUACHbhT47ko9GYJcJXH3s4RSo8YhdRoxYzshZfBBfU",
  "key11": "2aZpVv7yop73b2b8FxgxxTCmdLChmLkymKqGB782SU6jmiNstd3xqVqxnnSnnqYGFTqyacwyhpYB3hys96RaDver",
  "key12": "51rtBuL4NzeSCXjuYU6GWkhbM2Wo7kPgp6nAv6XDc749NLcG3EPWxj8ajqbamBxzDQoEMASWt1QJW4R6T1NN9s5y",
  "key13": "25yJ25rjPqfAMkmuLHXsan5TjtcXvJaozyyiFkisTozEzVWZD9VsoXWRAbYU7vvUwWRQcTTdMtWoSn83iZ7BbVZC",
  "key14": "2PvFzZbMqgi3K6AxRX1JT5H8HQEJ8xNH8eFuGorGX7FsHHaGVJU7LAsUADJNxvv7R81fPWqko4mcTomzF2m7dTtk",
  "key15": "2EfGJ9T4fvwwdPrMhZ9V3GfcjmYrNzXBQkcdLNUTszVi9zTgPoFH9GZ4nYTtYvHTvyyqe91rrvvdbssQmKaYoVB2",
  "key16": "BpzXicDWTHcuW9Kff9hRm4DHE8SnEUPkGxPFhrQJjA7f2FiQn2ZzYx9sbJ8KkLa5JGiZa9EjjvH2iEM6xnh4PJn",
  "key17": "4quPd6VTSiGXSP6QQTyFB6Ee7v4fJjpwgY78AkuLv5ccYGyE2GGmqyobEtvJp3DjxkiohtGeG9tWRDBumwFuxmXJ",
  "key18": "23fmJiYKFjR6mkBjypGbL3dkwyeWLvZwL5gsp6xfqqX4nnkVcKWMESPE9gJWadUrGkGZZfRkcoyDm3DL6462Zaos",
  "key19": "xCkDhtNcUTCabkDMcFEoHyfnHdYzKEBQDmV8QBcewXKfbchafKkxeeBxLfXmGBj2tGYmvDvqmzzA8MyCEUeEnQg",
  "key20": "5tR1w9RmEsptPHkeAuicsnD1TrpZFgYh6nus6HhtKbgkRJmKmQWPCHhJHLAVmUQM48ZggVbRw4BVdgHX15qX3hon",
  "key21": "2DSj8Naw8rMdv6uaQc22dpW7nNWoGtnhG5g2iHfXSGwagCE5rZFKuPC665Ds7M4py64dgW8FeuaCEzbaz7erAdfj",
  "key22": "PiZmi7FpoQm3LkPGo6dmvJUiiyLoXUE5H67kgKRxphJExS2qWpjdVQY62rRDPKF2pFNj11DXRxwsBcRVDzP8ZT3",
  "key23": "4xWvFjwLoyz45TifhvSbuKqnUyMh7aKsXRFdwfviBGPLimumX2zUjWFoAfA1e3bfKNkPfPbxjDKBgbipVzV8PK8M",
  "key24": "NEeDHDuYtaRXvbXUrg8CJkMMZrguDvXaFDCHrETRt2eEzAp4yTRsMoLRFWk8S92Dq55VkiMQsHBuuB1sWNgQQqv",
  "key25": "AyiSMHSCyL5gAiDtY8Dxuw1Smv1hPU445cFVSVDLCUcxg7XRaX49PzLoAKVrdrPbEEix4WWY6FZRkZ96GCRKjc3",
  "key26": "5pkXfULngrXhuKSacBMbSHMKxTKzsGer3A43KiwUcJ3gwro5fwMX1AxrLfmbu3FJpLnyEDePvuvJ1QUsASNE5xMF",
  "key27": "4Rkx1GbPsbYqFiWxnKwyjnok5CSERZN6h4oADwBDUgtCVLmdG9QrwEfpqUYUmE9CvwJx9hd4iFFj9siXjJje96A6",
  "key28": "VkVa9Aa41PV88dYVet36GLbaqEgUX1HBHrNksaimcj7FX1HYzed13Me2oz3i7HKRcW8a4ypkjCaydssszLWcjcp",
  "key29": "tkmsPqgJvqNRTJBbX3yKEifXz1B7gYahvXA71n2SxwwVxXzDfcVRRffC56AX2EZtr11kNwQ48szpkxy8bDaoJnu",
  "key30": "1mHpF67xjMgNgM8LAcJ8fV2gGoutUVSG7z776oc1YJSFvriDtpkBQKDoJ5RxeriZcrLgir4uxE5b4MivFd7hkfK",
  "key31": "1YXveTsdy2RLbrXQRKmFwn13cfW3ztmzyjQVngca11MSdvDHq153p4MUmkxHHGuyVdYHgZ65moMLovWbfD88q9J",
  "key32": "VvsmUzkbEKeJHoADuxj1KhmpFm7C9KdRHH9oUMZM4ztDnegLUDhcpHVWNmPGzE17EtmfGxWHyt48aa6PLHZUycd",
  "key33": "4QsFBu8fFi7Wu4DssGRh6toY4aJW8RKHBaJLYNDUU4CYGMqLq99W4AkRdJCP5fZ4TYtRvtsmK2M1rkgLVjiaMdmB",
  "key34": "62t4jk5BLZudwzppbnQsLsMjwUkg8dSdtGBmnhjFkbyJmindBM2BwV4cHDtwX3ws1haMP9qpxrDPauFcbshogU81",
  "key35": "379aVYSP25Xk5c4zAKYDAjT1grNXPd5jbpS8Ge8XA9PE4GfiDzgvR74RBbhWRCaaQQj3juuY8HGftFxb4Bb9wWp",
  "key36": "3RVKaoPk2pHZxdwPJiQpMbLS877tsMNkxGbPSxNqsPgpD6tSeTqahYu5XgN74bNnqP48PjUWVzNh1fUY1o7rvFeG",
  "key37": "5zrQMkZXPc3UDSWKDXMeshm5sfcJNEpnfdf646ZMh4R26bEaKoML1q5v6AQNNGPkjiz3EdEthn1wsTw49A61vDn5",
  "key38": "24GNHbX2m6sRLV7i25P5kHVFuvNMv4MkQTjnJTRvTdcy2kpJWKnQ6ag6KnbCfYKuQmgHMh5e8HVKDyzDwQuPcCMV",
  "key39": "2Q8tiu7u3L9Ly9hUtBL5yLzoZfknNsjgCL4LJPZUTgdRYeoAUgpm1SaSfU8Q4Aikt8f81tuFvvj7mVbYuvjKSbYS"
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
