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
    "5Kk17mmTudik1XngdpM8bvNuftVTVfj9hfSjKAnLGNQpcXHc41kJKmrkKc986pZ7AaQNDNNuBLA87KWLBYHTWA5b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2R8VhfB8K1YLDZyzcagr5Vf4eZYLyLu8mH4gBaHuvBGjt6gcA6cE4kws32dybCZ8K3ZTZBw3KMMFfunqAgygvLzg",
  "key1": "2cSnYqKRfgG6xiWnz6S1wm8qj2Svq7QkRtpJvMjq3KorYixLjeWVFNkThn8TBVKpbStX6qfDBSgrh4qVZ43EsxEQ",
  "key2": "5FTbDZ4y2TKVs5FDVV5WWV5LbZwp9d3BMyLXDBaWNLWqpzQLa1c7zdmjfdJrvB7Jbin8bR7zyMcUMV8WMuaDuFxg",
  "key3": "2L9LZfcYFWB5DE7csRovWGWxGnrnJAF3uqwWNynMfVtYUDb73iidDYwu2YRaU4AtPVfpXNtHKkAigrCYLywzeQGp",
  "key4": "2b4byGQohcv67gSR6sfotMfr26WbCChStMZVEVpK6nLpHLKMdL9Vb5s4b4YNs49UPSnqdAq2ugobfnYMngxFQUMw",
  "key5": "3xe6RnU2sDboVBpDiuFzFgAQmPuVE2aCFHVCknxioQwzzMFh7WA7KKJTwcLfGZybX86L3aXaTP9NG4enPnwXbrKu",
  "key6": "RvsnnkKw9NJbBCSYKg2d3n82v7iuHQRkXBT2GFm73bJsA5M8P7G58NKXn9ryLMfNh6aMfKpjZ14MZd2kbcm35MZ",
  "key7": "5TnHZFHWnnXhWNHhAZw7qZXQsSkQegQH8LjXdUEHsKdPmUfbKABttvTqFAu3CRM29e4tkDsV7yraTjwMPvtZc24H",
  "key8": "2n77ap96Gft3KXHVBYyXzFGcidort25UCRGg3H676mnZhyngqaGBLj6F6WhTgpAEj1sbttX8XzAqQ82CmUZ941u2",
  "key9": "2zY64f4KNyPNVYeheuw5LtuBZb3cAYVwiF6WVs1g8PBBsmC6mLjF1Z6EafWiuYAmUmjBHg4F1hst7vreY5YjNzfq",
  "key10": "4hznxXvxLCVSfFga8z8L3KokqESmiRuvwvvja8HtFPYCdH6SWEriFuBBHd7HEvzdf6Ye2a1AY7NXNhrp44vro6p3",
  "key11": "2Rgacz2d3whoXwQ41upaMXttr5VmDwGsJssvESCZkFtff2ZPpCxj3PZFnDBJUeYZYqD4WCDCGovrUu2T8o2VRNjR",
  "key12": "2va5WkzicLoEr1D3tx9RC1eiuFiGK3Qfy3LJGyhpRpVmcannpDSP8v1t81C3qRUbomAEQ8yZqsLzCYh76SM839Jo",
  "key13": "2X4msKDHeM1DkLhD5oQfUziJCQRf1miL4r3JgknAwzk3PEfnKLkVnPg2znL1nminJFM5b7Rbv5uYQUUYB12CvcDB",
  "key14": "GUaS6u5tS4wDnZz9PEuyupxwZeihpwAAVeAAvTJK7zxBqk4bL53T9AVWdX6VKgHEfvFQXrZEz2sPadAQ1rXwjew",
  "key15": "5Q6tcFAXFEs8Hxz25tHsHNG4LE8BA6ouXWyEJNMrxSVsgGuzPbzN8RR1VvJhN4hKUv1CQFLPvca6aT94tchpVExS",
  "key16": "3CuXmJfLvcUskdfR6X8fRFBzjJg3ERTi9sxYpEWxNhWh6dgRgfPYJwPEUHvi5KziDU2tFXkkmZJuWf3hvtQg8zCs",
  "key17": "4UhtLvn7EYcapXfFnQ8LxEgKsUGymgY6Zp4cbMJk78jJsHWZffy9uhbPdhaTuyF6Jt4gQfFgYq9BKsMiJLBwQ9aV",
  "key18": "5RtUuUnAReKu6Nx7CkRttkne6S2p7y5nPAF8bP2yLBPiLHH86WmV6A8dSatwrhfG1164HetHETf5gS2tbmkpiUNG",
  "key19": "gD2zccrRJ9AfsWQ6d3UzdiLxZjFnRz38A2ayL9PBNegyeBE1WetMtCCJu819inX1S9ZcRwj8veS8GePEXLQvGqu",
  "key20": "5nNfrqhfXDvoSzAvART5qLm8gyMxLWKum5LNWtoGoKZagSEWwvj9NnWFG7QPvopiq9EV4ifMMUQfnjAfxDx2P3Pi",
  "key21": "4ku4e5qVoaReSpJbvdhUNf5wHNyXF5jUzDbbdFKX6Xw6Fjth6qBahQNwLCBB2uvMpt1GrKoqeLbNhtoN8jz3vuPc",
  "key22": "yL8sUhHYTRzdK3NXsRFw4s3ZBfHrvx7Ydt3xd9rdHGmREcDDJQm23rrixAnQaYyBy4CZVPUe9kPFHzi99oGpGhQ",
  "key23": "24QJC93aM6T6EkhUkDFaKkPrDKiepzW7qjGbCg24j7uZcaNj9KDjSUAbW4zeBD5s51Ya9SDDKtA7hr6FyoKv2F25",
  "key24": "RfyXL64oQnck1YrL3oL5SxUHZeHCA3LJ3pBMdBsEWnaRLJdDk1y7D8Aowm62e9F1B5mULy5VsApGrKvibmEMawy",
  "key25": "5gfD4tJkPB5JUDYBPmdx1wkQKoe4Rc5GkqHntYRX7NiL8ZjRMo6vHNMh8ngvZdmzkQG416yKLf3yeSY6WpjN9fqb",
  "key26": "5EDJ2qSukK9szcAXe8YnfZBYVmakrHXJ3Z3Epz4HwNgiD6Frkvmu222nnK9QTmdatpTc9LtvpDwix2ZntxAhkWt6",
  "key27": "5EujnWnry5AegDa61uneXF1r9NQK4vHi3TQ1qMibAJW2aKgwCAURVWWayJq97uWmuuT7Dyrcyd8v1RadkB57CQP1",
  "key28": "2kMTsy3FkfqtAYwRKqrucKBkKCYf4yzi47u5aAV3iqeYKWMETAnPpDBsgy5nZ4XiFijsbekMT2qsADT5mpA5mtVW",
  "key29": "2P1Kp96G3j8mXL1SRnEixkyMRsBnipiLc3DSL1CaiQyVxVx3stz8h19cmxASAZTMgV3jJuqfdWLpyBzhKdzsrmAe",
  "key30": "4ESAK7ttpiwVgpf9J2Ep2PpmCZ5eRj7yTB1myV28ZjMpcXW6qtrGprtofCQSZyC1GiaQzmcdB6tumPbKKjHPBwnk",
  "key31": "2tZzUSvBNLvbhHHWCSHx1thZjdd6pNfyhjNNbjdAzWxJ5NA24Mpb8pC9RKvA8cWJtDZDAkaGGErm75KxF6ML9nQT",
  "key32": "5sgecBVwzPS2mzHi5H6xmGXfB98yEsBY1fnnd4eUzMKgdrMrV3gKo6cwt7aNQHv1bRVouRPBVRAXGcmWJuyZ8SK7",
  "key33": "5NU4vtCYjjo7PjGveEiS5i2LMKUVizZc5khqvehjwwoyFovGYJFRUbkxKNmb7JscDuzP8ZcSbXcgyr8fWi5w6n95",
  "key34": "3duGrHdQhZUm1cmR6vVr2aHSHx4kHww7Gfc69KWwN41reVEVuXdrkEdmpDHW2DV1qq5Zxa2ncH3ubcVMVsn1dK9r",
  "key35": "jH9Db2VKNwjFYroscCsof4YL8eUyJMjothXahjuP4AusLhKQcdS1AEwU9NHLDZrU14w2EsRFh72EVxP4vKo8RXX",
  "key36": "33Z5XpHc8K6iAiKpckirNsd3it17tn4ZewnfSjxdWHzNDrmKZum5avvaKWkgp4bAMP1qZEwkwxDbwphjFsK5Wu7F",
  "key37": "3RV2AvcBcLWGSAQW7n6pk4ovtnk19xBBU4nkjysVMF4BWCVfukf4HdrEzt2gAHo74QC2i41QFsp7a7LkVK6WYMXi",
  "key38": "2nBwkS1W4EchB38dDc391Vpbqyq2PNmV2dMDcUNBhEphcPoJJxmzkiyG8M7BeX3Bku4iNLN1Acb7rHNUrHfDjoNf",
  "key39": "mDeZ8EQUjwkzuX3SVN4dmGBDPnt33kt9rWaeGCC9gRZcpRGrFtFWSfcgKKr5Nu49qAwWaLvYc1TvFX2cvqC2TZH",
  "key40": "2zFqmVZi3ytPSEYFv8ThRbGvLdDKbVN9YcZXrHzAduVyBSmpWxttzNK91WwA2ZNf1XqVSUia1VaE4GfpMcSvcQQv",
  "key41": "W4d89qmFUa6SNewua1YbiSR5RPWM11X4Qmv29zA33b89Kx15zzjC4kZzhTj831QdbRxmwhnQNXtdfdQp9cXsbjq",
  "key42": "3skbxzNL4GfBpLDWVo676Z79RXoVpjwXfe6LNxQGsLYqW7r4xgPdF6czvVJtUSQjarVKWaqdieDx5cwvTD9H6EMU",
  "key43": "2Messuy68xMzBRa1xwwbKWdS7Xtw87LiB7MQkJ5zzygrneakkjH7mXo5LcDN9zXjs4uUza2ZJzxQHi4zNVz3Twng",
  "key44": "39MTgZ5TV5RQqfhrsxJNxwB1rAPmUsLpTV1YVKz68Y52L9KLNHDGUC6D88FeJrFLsESCaNGtsDNQX8P93fmqtmyf",
  "key45": "3ga6aHbUo3H9w94wZFHXHoaTsNrVJtFfqBuVZ6ag53KNWePzKSHxqgV8hRAMzoSmskAMZaVjczARKhXQzz4xUQJ7",
  "key46": "3xwYttdaMHHLjaaeGykoVuLXRYrsezyeU2YtEnWNso6ZWPRTLEipkZUAZeDBxcXpVwh1Kz5k7cr5vVU653BECyxq",
  "key47": "2kTCp4mxrhv3S1Des2EcW2sUY3ortMuWB6qY4MFTjw9Co61ptMYsTrBpcpVfeUausXc96seUExW59HTFZXPXEHLn",
  "key48": "jX2Qv1QWGLrrXeQ9kf6NF4aDGV3DyvxD9LcU3rrLwBQK23AzDp9jXvpnukKXy9srvitNMXW2CjkcZZywibw6bir",
  "key49": "5ZujW7NHGUUYYzw2iyQ1CPRHfcqMRRBEj6McY8g5JPrXSANVEF3C4c7a3RV1WeM9VHYNi7ScxQJDAq7dWdrA4CB2"
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
