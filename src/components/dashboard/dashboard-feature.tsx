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
    "ep6bBAE6iNFcRBtCrKNBd9cZkGmUcJttKvijFrCHmCCUDRoxRL5YHKreTTTQoh9JhkpgsQP7hx1VNNzjTcz8JEE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kyL6Q2aDUmb4FFLjKajvxDjzcgyAdAkfxc1zNWeNERgLnxS9J88XS3Ymz7vjzGWz9AkNsnfkSs2y7GcxqABwMMV",
  "key1": "3put5p99HcZhgn8jteb9RLfUs3siMn4YWVZZ6sdTBSE8ny8FdYMDrD4MmRgBgnJv9kT9Ycr34Q9fUCntG42rTXLs",
  "key2": "2GPrm1ovY9qY8h87EE99Pssye9u52voRM8Q7fPnop72e8dgk1WrxeQKs4EzDgHnN5J9sq3qR5NUdDqUALyLcbhXy",
  "key3": "4Xix9YTBgRfMyMaCSDsrBUCJCyya3eCExb4nLq7o9iJRSHxkgChUnYyuyhWrB9LRUeB6ek68FUoUzeBcFLUFy15N",
  "key4": "4VtKqmQUPoGc2R9rTYBJn8DJUyVMgV1BmMtPDUyAz37e9v2V3dggR5BUUhxbyUEEsg2mPp7PSGjF8YmRMnpUrZDY",
  "key5": "23KdiP1ZXBfLC5BcnwJ4dEnNuWRqNPdmP9MgM2ffRG7XBdYkyGRnwQ29hkGyTfH135xznrQpU1N8v7NxxmV5edLt",
  "key6": "CrqwjDp3WrV4w2m7yYSfZYQh1cW4CccbEahtqy6p6EF2wy4HKXFsKHk7tnrHb6V5VGM3djbb23i9cmfo375xsa6",
  "key7": "5tGK3NCoGJTUa8n5wBHbFPaGZ7XpTDqYLXr3DPA8JEZuJrCUV4ba1ecFTarH9SghThYFe3dwMcw4GkCna2gWnRfQ",
  "key8": "4v9a44UDNtrEKuXA42kFxC6rEtnjX8So4iYypSm6pQ2Gc78q4V1Y6M2AU3mXLxJushd5Hwa5gZdLpTV8WD8u5gVs",
  "key9": "5T28jJbfCRcUd8nJE5e1cyDvGfNbm81diUWQxaRcQhVvkM72Fzky491y9GhxgxvuGptHfaNhZTqejxcgDzMivZKT",
  "key10": "4h4qpmC4sMEkHGiNeq4rUmzTPXR2drbsgbUAWD5HU6AdcvNDzFn6ofu4PKs4Yqspsvy8b8BsyEn3xGaGZBryttxr",
  "key11": "43irhLFRX9CdpbAo8ZR5Beh86KFAdDNbzAa4hLwicvKMsrQiBH2u2HstCDuThpaUb7PQtCm1KdxRiWjtrLtqJR38",
  "key12": "4HVoKuA2yPPPjRFDXCceaBVeEWwBweCwSLEMBn87k5Eyn5NJ2WmiaVDVp34X8dvveurTzhBjkvYa6tzP5pMRmh4K",
  "key13": "3tMwKyiYonm6uRYvdZuxZv9mnjAyEqtQvr4KXraRJ8hAMD94MddVUMuGSdqKUfi8vzJJ37K21xppBUQpWXtu845K",
  "key14": "4aPTciTimqErHm3QhG263GvpW4zJQY9LTrXWc2WXbFKSvd3drxzGgtXsrrScjH7dfaBmedxCRL2rrSqJzBS58gFd",
  "key15": "4gsxb87Ae4T25js2PEsBToiVMxAS4a9pXCut561vocu926E4fQayhrTapH6DvFRNogUxPwT498GY7sAiWYsMqn9X",
  "key16": "3GFSF2oi7jVCpdTrjAvgNdCyL1vsPrkJpFxUT9qnD2BPSeK5NAbPqKRWsutFMxeebGHyaYHQJg93saSs6fa42Ewi",
  "key17": "4CHyrVkPMyx1PTfo1e5gS83HfamCYto74j6prNVZmTYZtxM7TYDMb4qN1CYAQucKYYk5gKFPgntw1BcNZNr3VPXP",
  "key18": "2pS6oojaxYVQRbasTq3r4B1eaLzUhW67gypgM2j6hy3rJ7vvmnsA8kDEatADTx8uqjk9ehtqUtK18ppNd2BT7XBP",
  "key19": "64mZwS5xFfF3hk8vD9WCRf5VpWTsHHRG8FPrXvra9gUxJAtfiPmSUREttzWZcE7Ccp7cFCKeXERoqWXh7zPnxbvM",
  "key20": "NS3CY7WAxzk2oWvesVkoGbpib1bmb7e2ZLPVtNrBTFYodjj7RpE3uibdCNG8Wn15EXVm4w3yxKNKBGfCyAkRvo8",
  "key21": "28zSg6j4hhpMnUyidUe2xfhmLDSBEBTyV8KSWHvnR1dH5xovzAZyPvYZmcXzrTSXC7Ysrq7TGvTM93aUxVxLku4k",
  "key22": "5NDL7bEFnRWdCtDHGmxPjDmNvwuCPaNuwx2ErLaDmcZuf8on6HRqpdMTVdYk1oSaBL13kAF9hDi2zofXQXHaoA4W",
  "key23": "KqUFbjL58PWDK7ScCQTJSXoHpqxDgiUToP22zAxZTN2eHDchHCLmRrax2viP2sED8PUfpPBYwV7jS7aQH5iDjtn",
  "key24": "5qbnU8imtvSSvrZGZzubbwjKWLqKM3Syaq61P7V1TMU8QGGgCpsvyjpyXUN3NLVfFy6yd5Fxanh4Ya3vG5e2nxP1",
  "key25": "4Jix9a1j2ZXUhi4ViWcWhAATEeeirDCZGfxPizAgDuxCdA4VozpinnmwnCxcd3QYmXaAJsoJuKqYVz3QyaizWhMP",
  "key26": "34EMXAwxoYJAwEJS1yxoqiGq43Tc1vZiFiY9tKeafjTSe1BUxkoWXZST3qXphD7JSpQzFQ3x6FqzzYpfsVGePgDo",
  "key27": "3swsv1iTX1uzNvZYCvwgArEnnQ9Ab92Hv34tGhRa1ZREi7qPxJEoRFurbUsRF4V5j1qwUWdXjcdex8NwXpJQd3Dv",
  "key28": "3ctDmJEeCFuu8b99ZQHxht5LK6Ku8Q1zgczgNiefnR4Fw8Rj5HmSxXfwVBVMiDcX5aVwaUCLaNjvtcp1KSNCotPR",
  "key29": "23nP797ziuTw6ku2bJCEGJxp1TiiXXpyT8be5hxxdMZywb3BGjFwU4N7nQKj2of5aoQ1kpRcnLTMWq9AjVvBHjnw",
  "key30": "3wDDdLWfRizibF1MowG3MHc5qGnCb9RCBAfjzeKra2S2T5JFzTDsQdexfFjZFvCfomNzyND3NNPHejgiT3FoeFJN",
  "key31": "2ArygXENKX9eAhFdt2aSeDvV2gGJNyr1QE4P36rY5B8U2REz7D679kkn1pykADa9EkLc7VgjR5gdusmJiaDw593r",
  "key32": "52qH6ywFMubca6Xpi9CY63vFqLFw2dQxcDoMQJHFw9wehk2Pw937NW2W4bBcdPgkcbMGHH2ruacUNUxjcXj5tvGj",
  "key33": "4qPAwiFwEuNs561f4KutQ5fpk91Xy6w66bEJewAhYTuWJ992AYKXigHQapoqADjQRR8gTrVDwkzBJhoimhUZMXhp",
  "key34": "5Ua8deazSYQDTiuugAKwYVMbWd362sG5qRdaLxBCD4T67vNvGQaXyxQs3Ee4bfCMjsnXPaQ51D4dEdsicv1Sh5g3",
  "key35": "3w1qtrGDQc4PPSkhZJ3YcqeyBTCSSGFwKmH6QQDom1cXUMUDJZSdCUj86SJ6oAeQoCiMwFvtN9vvcQ6kieTZWdxG",
  "key36": "3wwv75CiKTEhS3aaFDutFgxmPc5oNf2ufUmo2fvBwhLJw5xuhMm61r19YHVMCbuMG5LDs363rifPMKcdcz8qpaS2",
  "key37": "4hH8V2f9Hj7h9w5LrFy1su3StdHEZbDDMfAKb3sLWpESpi5QtfHHCT89urF3gDPPXDivjU7xjEtLhbicyUZTSSwz",
  "key38": "2cSBDKBoW9brTbV9TmwVv5VYvH81jxNGcUTxKknSSdxCDP8mCpsgwWZZWBWVhsksx2SnxcsHmqsdmJ9B8wSfjPqf",
  "key39": "uSdMf6fdDArqyHzSRfE2NMLJW52BCSH3yuoe8PvbDKoMfgMfMRWTDi99NKdpknMCK4dLmi38JYHLfjRNh9gSEoc",
  "key40": "5kgZikvwYZ5qgMk8FAaWVV4o5Lfsq9xZu66Yta7RCmnzzuUkwFWU6xrhZGScEH4TzBb6m23SpZE4LWuRVEKqJaoe",
  "key41": "2aAoAMsrhSjbsr33yZzVFutWhbNh33o9wwRoyFCgU6E7oi7h8oWXT8Yf1bQXNjpcQ4JBmZWWwmupR7pBX9tyyg8L",
  "key42": "F6PsiWG5VaBBwEt71esf5gPBDZH33fPgWzt9N5TPBw82s7ws6mx5ibke75wTjizeVFLLPzr2BDxEkndY9wjz2k1",
  "key43": "2VhGL1qFVXBqKTq84pRnAKfcdSgb2DhVLb4p6XFkdNhXQJyd5JDSV6338foMGsmBg5sYnjDRXwAbZeAEahjZUTBT",
  "key44": "27CzurRkN5R8Rt9C8pLYR5sbuZhYzJJpDhkqyt6LpBSFLNkJbYsyMECuDDfrd6c7fufVnE1GKjtDtbcmPmmSuAnM",
  "key45": "4Q9PvEjB4SvCzeF7fQVYa8wPWjXkZau9AY3SCqwBr865U7kWxbUYWiP3KfNpF2AxH2ZVNJSSG2VPnHkb2LnosSF7",
  "key46": "25MLsV7KcP9Ko4w9PiYd5PeF9Hk6nQ4w6fQoxgZaBAZWcc1nEavMPzf4bbcwBomrDHJMdF19BHJhvXeP8LHEnz5K",
  "key47": "4x9HLsbT56f6TKD8whryaWNWfbqy5HNR4JVARjR2nW8DkCT5hkWgvZTBAbwxF7vqNUh4v4mgdKuEkCv1Vg9UjkDz",
  "key48": "55phoT2ZcLs9BrbPGXnTdXk86nmfBgYgKoB8RqCCiqEjxrXSPej7WtXyFYFMmXHYESJTiP9QbcX2gGvmgVJPUFFu"
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
