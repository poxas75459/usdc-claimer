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
    "2GCioyxxSmYpMPe7FbkKHV8yPDJfANXAuJZXNTtdJ86k1rXs8mks22SKo5mcPf44MyNtWr85zGF8q7mMnBEiWbCM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fnt3Lx7ge7QkaPbwKp4CuaE7CbQoHtCQf5NVGX7vUr3fXmMPPfhhrt8KJX1cNzYwdKPHvt6EN6uUEwjY1bau3M5",
  "key1": "3AgbEnp1GGQoZdtv4JrGiXsFRX5ercmEHVWdE5onHzttn8VtDJqE2w7FTbvRDwAN431yFXMVhFbS3ukSid7X9gzV",
  "key2": "vJu6ZJDPR4dkdNUvwzns5Png1UpQBDRTqEWGumCGc1nKDvHw7YQStGk1obg1EkwZAg2EUouzQ3YFww77YKWXStz",
  "key3": "XEA63CcPuNwfx77usJsBXV1w7F7pcaoHeFMGwcJRR5YFsSWuqskpxQqU7PFBj5mMqnP2cQnwWjW3FvhmdneyprH",
  "key4": "4WKNdNSXkVnhXqY6XcAzzsXGoNKzTzNUTj8oyCq76iGNEZwvQAqXufBRxYpir2AgAdwp6NV8j5SduxAS5WVx9hug",
  "key5": "XBoE5wgcdxY3e8XC644Cs7SeB9RgmSGL743d9xZV6sjc849nKPQaBn4XkVaZEyPjTi39koYf1rfGpcG23fdNtQi",
  "key6": "4wSXWimoXMLj9Vvr4w8A6LwU6gFeqrzXFzWkBUDhY97zXVtRqqnV1JzL154ARz3YH4qeVHhcsUrSQE5X1TFJdiBm",
  "key7": "bUEcWPtbPJkz7TH7PCJKDcQtSSf334SdcYmLVuwKmzZUmPbtkaGQrjesUamEJWWMHxktvqUoRvsELkXnY456heJ",
  "key8": "59Bebrbz7jMEgXWGV3xMTuUBrDVxewAF9vszZH5JYZkTbiLiwNPVpiUMaKXEwP1YbdwaT2cXMerstW9T6E5SWYKs",
  "key9": "3kux8jA5k84KeiUBkYidEN2LkEFSck3T1HXikLznFtADiGx8zwecpZzjJX8bpaFiYuXegg1Lw4iuG9c6WzWiPSEx",
  "key10": "2PMsfyhfmwvwyfBRaoohLTL4w4RzyUBVZex2dThhwVz2Uwp5gaN91MjeCMtzvHagBsGyU5fYrfcbUmzXK4qSqXA8",
  "key11": "62YUBxindcNzVEjbJjbfbmyRoAcfVtUpZ7ePZpS1JMoybdUQUN9q6nxAW2w9qg9uiT3HzKpVCiWV7oEmCf93kUDT",
  "key12": "2veh8wpcufzohrp1U4vrmw5CPP1LY972FzZQsEBgGQH7EJasm21fGT8bVfXhZa77UVSaAqvyPuhQZz1yEUrHiyZi",
  "key13": "3F6Ryj5VZySR7P1EmYEWPzpmjKRMtM4W6aRkp6pNrr37sujXymKbBerQkGjvBREYqhTVEYxcCx3PHR9zQTeDdWvg",
  "key14": "2FojCtgRYBXHy8hj6fkHwuqiRNC4BHz6LtnQw1DGhChQXJPPVfCSeD6jMcoAfewq4cwv27yU7iBd6vFSpBD7aHZo",
  "key15": "41gZ9j9y1Z5ux4LYQeNKnCKQcgpQm1zpLNdWvH2q8xskS2h1Z4YBQMD4RqxUVGjHdjXrAZ1PcNZLN2GG4ptmQNXv",
  "key16": "3JfRPmwzAXfWYXTHC4DzQcH5BwgB4pgyoBwpXW14bfzoiLxfurK9ZrFuKHbhoWiMAMKJHSMe7k857hwSgrEKbtuv",
  "key17": "3DXBDrX7d9XDaQdwVxfU2DCvZ7s17zhFD3fbwspK7dJepcaRUvZ9omhKfhkwERSwDiKHiM551PhZPM9bRddRVQx4",
  "key18": "4evZ4RoQu25ic3Jcw9H2g9afbMHPgA17j5XHEMLQ7co1aqYgpr9gut1ioZqkrUuv6Xi2Gr5EA6tKpUAgn7YTt3ua",
  "key19": "gebfxJFnd8U7ZGjb58HCsurZ4C5TKDUKd4Qr4ti2bUFhmTs1bFhBapnMQEqM7NfoNFfePxM1zkyHy1cc5hZxMvV",
  "key20": "xXFMpdta8eE2PeSdYFEFAx9ZW3EqyAuQXiyBUmwX4SuAukbRYN1L2vUrDfTj7MVZYnGBCvyR2ik4w6Dvbn3RmXP",
  "key21": "mxAHcrLEyfUqukjLzW7dXtnWqDJAJFMUYvbVFjS6AZ9KpwzTz67DsuWVcmotrtfyXRUYafH1LyW817dd1Dws46Q",
  "key22": "3B9CNA48ojemGzTs2fzqzLtgaoAuRHtAw123hHoGaynTFffbLGwGkA1NXYbNT9LwvavwMJM2mqGo6Rc8uyD5QHVr",
  "key23": "2mfRtTcx3oMeSPvpdsPSkiVSuhXQb3VdYTx7o7AWPtcWK5XAYEBiMEaBuTFkWiQbJSCtG1qykwhvsZQc3UjpfL9U",
  "key24": "29KA9KGxsGQfXtd5tLBV376LiCyQUeiWWqLVpDtwsZPtcbPUMegDCGwpaT8ySG6XyvoCRUrxY2F1uQ64dYiLBWVg",
  "key25": "4PwTezrRXixqjs11mddA6JqBCUTsj8FCuTdqBBWKeFu23D45AWunerGY7wtB4JCbAsASBHxGJZN5CXYgRT5xRFBJ",
  "key26": "izKAeuMtsyxVV6KDwDPednqUHfaZ5vKHp1ude3M52F8qP3fErtqpxt6KvFC3qL469j8oS8dcQeGmPvSTN4DzHgd",
  "key27": "4n3FCXEBG13WBFWgoH3uD4UFzeb29BCEnrRTxooV1KUD2iBFZ8Rmo1FqD5whKd2DGPYVUmSKWh99UfwirDDmq5kB",
  "key28": "4hXJGhxfzUkmUNdmDEFyH41CgrbghqnYHw8H743YB7oVsfcyLQa5c8jvc3vVZU2cqEaqsBdxELPdSgidfntA5XDd",
  "key29": "3dapYVLtYtP3zqRHaP8d4gsnhM38cn4ACNEFQ6yQpWK6gu8KwohJK8ipcNx8NNfxCJZSwEXGizytVdp65y7MedNv",
  "key30": "2tg3PWFxWWmziPb5Zc2oUxbcvS99jRFfwu5fqD4gQGMScDCKzLCKpbmMUHoeYD6Ui4shsDj6JPWWbD1F6g1Jpc9i",
  "key31": "4j6CXwcn6bQDjGqnzBRZZFXwUQftKgbwPNrXXtnkGNagDDFSNrDNrcJzAX7KMeeMTSPX8NLE32uaPLbhQq7aCAPr",
  "key32": "4AThDYcPU8mXgLnPKxZq2iaLP8sVyASrr5CvApnBhvWiviDgGkTo2gojodWAd8hGkyC95ZCtuoujn68hen23Nnjy",
  "key33": "HX7Di3wYmMoa72WesEtkv19VfLywpvrHcmGWmusvBZ9F1rHJ6ME91ednP3SVJFCisxfmskn4YSSmFHwMea5eiA6",
  "key34": "5Aw2msdYxvBf7eYKft9W3tsr3Hd4uLohcrVyyozdAVb7huTqDCymjngvRBdKcdWj1JGKycYDoEjaJerGNpKaHWCU",
  "key35": "3HmkrJFdmGPviWgT2HkgqYqpY8FrkV72yAVLKY4DYbBL2UTtRqQ4Xdbg92YnP4m8wi7ikuSgQHBq1CajyWwxW8iB",
  "key36": "5VYaervB7jac5BdPBKtTPm2EJsU3gwCtiJWWLaCJYfSFpdGtuFRPth4jk6ZiWL1tvbUKTkLpJf88m7zCV1GVdmgy",
  "key37": "4rKKcfLGpZ2FLozRNWngg8z13CVgjduQ6AEj7CFCCAJefCj5rDvCYr2Ee3ZiXqzBVEyr5CMwYM5ZJZynaqheW72f",
  "key38": "5VidHL9mTqie7WLm15bZc2EAeQW6tp19DyPQwowfjRWdwMz9td2EGLBNF8Eo5U5jXzHAWVbePKc5n6j3vEipXfpP",
  "key39": "2mqMCce7etkm6HRfK9abS5YGbAxtvPTdmQ7aPFy4W9ir3DEtWxBzc2Bem5aDqGFsT2uYMqkkS5m8ADatcoCtrUtm"
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
