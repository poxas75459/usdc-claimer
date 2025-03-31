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
    "4eeVb6RgMUqLKxM3gEhovbQNv7ugN8ACtapS4o7RfkzmXQd22yWS4o8XJ2LNzqiskq1xgBx4cbrhS8XWDFWeQiQZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qMbWRK684erjj9oCTY1NHSmVpF7KiZPj2CfxoB9SvyY1vQgWXLyFAbrHsT4EtAJx1eyddGGXuANiVSnA4w2SSpD",
  "key1": "2i2PSvj1NSeV2uiaJfycpshG5FWwrdSdWoKMZ78q2476XQEUQAaWitRK4vq6CAdbXyA6yooG5hMf14UB2a2fU2Mz",
  "key2": "5a63YYJFdmRswWS2yZMmpKe4J8cqz95V86zJ8uNjrExxGpKGmabWwn8wwvVnv7UVpYzaguxPa46qXitpvHcoG4dv",
  "key3": "2drLMhZdWUXiF2frDQVmMBvgwdTwWH9W3hpq8eyxuKURv52uU3BW97nCUKkCeKeFKrzioxWfNFP3onJcZVzAtZSD",
  "key4": "4UkYMrPict9tWm2KTjCjX2XwBS7khw3rxw1bpey7uKpv1rwb4RQstU62HNE6efssqpebbqSqWRck3xSHRZkzacB7",
  "key5": "HkjWUTsmtyMCdgudvdAZdZctH5EPkZTxSk9tuc6JjCGsBB6qDPrLEKoS6kf8NPFLmfoTvKvkRsmhJKUWwJZYJRo",
  "key6": "2riFFbCsXjJJbdyWrH2xdDm6WVKfEtHTh5wvqi1A7uaVsfaRqo1A9poZcf6a76BdvMbCxBurQap7EcG5XVWkBCQG",
  "key7": "4CvAWyEQ6NZmtYotYM3LKRc92Gih4WKHLMSExmWXx8Kwh8rS4DgvqN1zFWEwTFc9Vs3yA8ZgJtQSd2fVDo5N7KQX",
  "key8": "5KcGGJ7bHFQNJKtYh3tKFTAump2meAq8A8jWN2C3wumNnMicX61TotVGEREFFvmBueXvSUGiu5w4KvQtmvvEk4RX",
  "key9": "47FTGiyoSVWdQZfdsPxAzuZVTJvVieLF18qK4F3bTHsPW6ZLyye5sp9whTRV97ufgRTRAZYjqNoSpHMDAh6ujnT6",
  "key10": "2sBa7ivhcJGDUQN8rLAQj1SaSKksMmYq4Yd69zqfgzXk8LBmY2G5Sm8oYUyXiSekvLVspKBDz9QDpR8LiFwAmwNw",
  "key11": "B8VbNpoShJkDRdz8WfYh4dkdxeSQAsEwbrKpTU1Y85HXrFpCWpZss8yg8YH7zcK4kJSRWqZjneBK1MqkwBSBV3F",
  "key12": "ofM2xzrGCXcgsgaHwFLKRkdvZFitX7wAtMQ3KaUnMnWArZ773mQ92TDLq77Wga15TKnrGs1wVcieHV9fy39Z72U",
  "key13": "3EyciD8kRjESpRBwVZnpUuN4EPKTYR25jU3WnLY9Dp3yZ3QFqm2GYxRX4V1Z9Uq4MgQmbm6tm3KHj6kywCgRCqmu",
  "key14": "3xLErXXbZ2nkbbUwRQtV3A9bhjKKP4eWHr1R7DFeswwn9A1LEjuBGCTD96ucHHyCdNN3HoZYBgFo22chxS5Uzm6c",
  "key15": "5NDhQhHQxNkfcPxCPzHxMXwe87YxZ92PrmxjPpaCm1wooekMHeCxfgdfs2mH9HaiNRUwhe2smDsqGXxjJfKJXciW",
  "key16": "4WBDKaVUq9LqFFXbPeyyXuSqbkyrBUv9tR3PTESFaR6md6DeaTALe7FNHYjgwPq3VL4K7RhaXLQ2aB6P91bXDvNz",
  "key17": "6yVs2u43jFVgWenr6j7eRdFvbFwrvHeuXs7EgrKw67WVBb34RniFLgBENFZQqhNEpzRH2MX8mQfkymUf8JbbEPc",
  "key18": "VhAvNq4RSS3JEd7MrmeTP5UZS9ahaku1uXLrQ23dYf5Mmp2YGcw3iYfyP31FoUBacHT3h5QMjG8wWupB32XgaXd",
  "key19": "561u4fhfeZRBh7S7Hras4gKf6GpYMoFAH2biAtbkMiywX5tjfiAxEAFFA6FhScRGMiiHFTGrcZKN6C1mY7Qx4M4u",
  "key20": "3EU1HEAMWPVyVvxU8AzVkAXRZ2jd4SNeQUc8gkrhPoYWmmPK85FGrPKox3jCUDTbGyksxTpvyFAq22tKMNB4BDnY",
  "key21": "4JGv7kJBykosWeMXmrL6dYcU3zstMoaEmLJE5xz6Tbt61MWs7B1rZQu5EkaT7Kuvadg2HUFSaUKA2NmmcbEnrGKD",
  "key22": "Z1uzrTGWhbHWEvuBPZqaV2dss8t8yUezy6R3LXBxP2zLXAMQ4bR6TNW9hT2NCPdgZEzcVFuSZUKqPKim6mH8gsV",
  "key23": "3PraKCFjNdcAHLa8JbJRYoU6MRgbXA8AkS848j3omvg4j42JpNvooK1HFwLcvbkU7jfXtAFAe9weVdD1dxmMzNBU",
  "key24": "eCUzTeru3JaV7srGYuda3asyqfXFVYrgayQza32z1DbaZXotk1kYndepLnoHnarKhfRc5steYFSBwDRHMkRdeFX",
  "key25": "4KKJetaesEdhNaEC2Bxbq6oLwLSgMDUnhKvAdbREGg3TMUr7aXpATMYahpZzV2XyLa2a2NMQ7p7w1KAerjvwXxut",
  "key26": "4bvifa6RvaB8e2kvBSQhLN89fX7D4CkJk1GxGgrS6f7hnHchSc5DJtnyNgXDQyHeCQMUmwATE9ZkXmPKmLAXQeyV",
  "key27": "5QfbASEigAMYZent6vZMJkvozPPLY2VtQvNbbcfcmFqDuNjz2CikdJWde9AktggnEZ3SmXAATD5fG9T1nCyJkGvV",
  "key28": "67kexcvDtopdxaB7pr3QRn6gkYs9sysBWhgW1Sw4FqRQXMwxKKStTRGhjiQLwbtZL6EgygKZLp4qNUx9DHdmzgwq",
  "key29": "45jXEYYm5G1zsiGzo9okXd8RT65mPzspkxVagry6PWwv8QhibgPyXkPCRNMebLNPSbsJzxYMWncyH9qdRg3FngNC",
  "key30": "4jmpsnLUvdSW3dQq3u9E6UuxTzQ1idemcpemhDMrCu6YbrE6DMhffMivQvjy3c7wrBpS4CQRUJCjwDiS1QkaZ2gw",
  "key31": "67kBeGJsyeXFHhA1txxYPCePKg6zon9dfkbMiwtvYDFh2KVHp9LehcVVUfxb4qrNmDqtqGXbZ7yexDNd8vL6HpCR",
  "key32": "4kgBtzswP5dsCKnanpJxrpJCCQVS3cvxod8o6utGiCsC7pm7fxCSRN1aGC4euVzaxYpcFQQUqWFgjmwMceby8VE6",
  "key33": "2Gc1WKcPnDyDzkQ5sp6skqhWPFjpEfKsYseB7RWMx29N9utG1h59SuAzG6Tp64HW7j2bGztTF5TyWyjdmV1k5TN7",
  "key34": "24AbmmzpQWoL2i3P6jz5stQY1qgTEkZvCT1M7Vt5cMXRun7FZd1NZdm2g3w6eD4nHwT7b6CwekXmbBiXiK1zp9XA",
  "key35": "o1oG5asKh8DB5KTRq9mLpEzS4XxvdzdVxQqnYsP8kcvNh3uzJfUoVYdiNXpcNNQwEa7P689xLD7x9nHJcdEasWU",
  "key36": "5ZytYTtbtoE728AmMx3LBSuQfM5MWsFjwZsT4opKw3xBchEwiCzfDeMrFU1hZzBZhnfSFnXoVDX2zZ626VXrAyxz",
  "key37": "5CC9BgLu9rzgeURRKPvrFEupYHbuguYYfseZfgWvCQHLKDD6DLJFe1fHyHj2FHHNkKvFapiV2vBbdACgnQd9FFZ7",
  "key38": "4Sx5CocSojHXvYAY6S93rJRpMzBF75PSZd4DaNoJCFhbhoBWFteGAQXZxMpp5PwgC2Z7HXxD2cUg12dugwnHmZHD",
  "key39": "37EjoQ7mPqx4z2C6kLZuPNFRNREghxcQuXujGjPDKxDsDDmqgSDHe6TkeWQYhDJkciqEBUj7uUnm5qwmsUBqewZ7",
  "key40": "BaHyRrN8dsJtbETtgX1vXwbSRTtaRJie3uzHX4w825t7FqsnkbiD5seaA54NdouhuYBTcNHZ1Y7DHk1qBCtZoy7",
  "key41": "3cu6JbjkNb2nqpVuxgN8vWXzvkqbXPRUewTDmbNRuNnnDgmZV6SfBdKJJn78p8RyvfbQgL338qnur8kZMJhgPC9j"
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
