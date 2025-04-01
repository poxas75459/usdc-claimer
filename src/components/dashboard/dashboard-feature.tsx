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
    "4roxq3qS7MacpFhTjcenyV8aSXvPPJ2c7GiUwZ8tN4BfXBxBoBJKzH175XXByjepfW5mQe3mjwPtYoY12EsgxwaV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PXrNEGXdr4aFkweBdbrduXPH1tgUwXCVVAcqZVffkv99DHZyqeVf6vhkY6FgagwnBUF2MTekwNzRNwvgDHLkozZ",
  "key1": "4PsDGtfh3gePg9ymLLgb7D3rEAq7hHZfEfwPe537Ks5Evetxy3UwVeVVTFaFqVun2edWs8cXTem2jdGhb4Awmjeb",
  "key2": "4EUANcrrFRQaNa6dDD8p973Bea8KAbd75QuaPb3FQ9cPGbXvUv3HSGWyzB52MXYn4U8uEsuHPESbxUAKZJX1HSg2",
  "key3": "2Vrx7wRCshwPpnRSAB7GWXPhGsoUmt5VxfsvxdKJWmSuNxk4xF4aLDfmp1N1367KitY9dZDpKDFvRDJP7vDVU9aU",
  "key4": "2iMMU1AoU2mGqp67vkJrbdaPXdSpV5RW1mNsk7exhNZrMqS7sN4mmtxXam1dEh1fnz8WxWaebp3BRxMhnLNr6SYP",
  "key5": "2DTeXiUqcuRsyz9hhiB3JWcFxwvZ35xzzwbsGfi43M9fnJe1GMq1jatW22UdYVgawZVo7NSU7wnMX74NryzhGxcx",
  "key6": "3qZpv3JWaGZKbbBButSy5MznYZChHpMXHJpAHAo5wyeWBfkm6SaUkwdhdSqxWRe4kG1YSkuJUu4kqgjDbj1SAMNZ",
  "key7": "2rc1EuCEPcDPuZjixnGxTgVg2FSeAZvdtJ2NNA1DVHa3tHhsRk5T9gC2R6iGb4ZEDtJUrpcJEHuVZLnFriXxtQ8k",
  "key8": "2SM5pD15U1fDERXw6ScfRMNy5afcby1fEbTfjn9kvx8bZB3pwKmVG4aV5Zx2tZjQBwi5BCHeD7WCNSPn1BWFUh1b",
  "key9": "3z9XTfBYMpPm8V1QfVpovupf2brcK5Yq8YfczKAGvJw1kxBKCd2oqSiSUKYD72zcxCZJyaecaA7gMN1dWWNwcwxR",
  "key10": "64yc6PFr61Ec5sy3e7XvNWAVLVDtu7UATdibkV7MPiHYrzeouGKrnjKnNdNP8BsfdRghrbvPPMJMSKxVinXK9fnP",
  "key11": "4HBventh5CP3m811WRMYYeG7J3kTpGH4JvncAdjaFPEaDyAiUWoiWZjAaKcUxF4Jr9YMnn9P8fFsiVqQRryx35uL",
  "key12": "5p7riiL77QwFSe3KNqfyHFN3cv7CEewtAjusHfRE48yHFJjTfeAr1r72N9vGhCoU8HVrYznzDKoZfBcyDxHESZQV",
  "key13": "QHMX9KM1tRUkvKkRdqxpHUojk3KfvezQf34XTqqKzqwkywPHCevp13rgyjgJ1iETS3ZKkYuQpXfuVnoWTd8pSie",
  "key14": "5Pg8hVM1Yvjg75vUfkUsFuWS71UWLuZcvsi9xfczrCVxiwBMDEZ3ENbPGimKshs4VqmFmwcWnW3qw6tAeTKdAkgD",
  "key15": "gSpnGkPxoeHeqgrmP3VAh5idaBv2GXvTBeUcm8ZXAqV4vK9j9YjajsmF41XWhTxv5TEp3LxN6gPZt5HTQZZP2w4",
  "key16": "Dg75yBpcGJe8P7bnqvoNcRsFMMLo7dgCiDcK7T3pSHU8vKD3EDaXqGycTeTewrG7B4JZs7zpqJaX6G5gw5DCWsN",
  "key17": "3uxnqUGvQ4uue23rxQNHpJcPJPuC8488Wwn7UXRT8QyVs59FsL485Jz1CB6riBRNeVagTxv8vqxhiFf68XRNTxYr",
  "key18": "4JqQvNdKFVUEfHFqDqzRKnNTwZWZGfbeaDYvf9u7Zwbeau3cxBq9CHWF1c8twpkNusmS3CKmQDXRpoj7F4MeFj5r",
  "key19": "3ksBsbnLTjUTp874hvTHG6smCTQ5ppZZKg2J4h9oQBHDNMjSUQijaHFg2HX6r5gR5ZWJvX7R728RBaJxbzLxrm3D",
  "key20": "5mQ3K5XzxqfZGPUxdBWyENNZFfrhMLAQEPjmyUAmtLgkaWzRpVbmJTXAmP8cPeEqHHTvQnUPqaSJGatAxixjYUrt",
  "key21": "33kdSRiuEsPtshYNfYzMA9WdVb2ZgEwJwaa1fNdf8JwKdmgweaYgfwW5iDLGYtBk9NQoC7F62UpkbLqaMZju24Hs",
  "key22": "Ko7wa2tyQAiEmhvvYXjjoyZU29ruBBqzWdNxb1eVZtfQ56hsr3EZuGcXeDLBGHJi5wmyR539DDwJ5eVEctnVYa2",
  "key23": "4mYTEj6KEmzcHPscngmvgvBDSKmnCwnsL5wWPxHuRxA8XrA5zEtN95oHozL5YYLiPKJF968vqFSA9TLycaA8n9xr",
  "key24": "5FeVRrxAx2UWnUBfGU4cmV387UD5811hKkHppXUwqrzCqUQ4HfouVNRgRu2uDw2KHfx1Hiji3ikgXDn85mvtLw7m",
  "key25": "27SxoiZreN4mER5AjTzP5AysXQ8v8BWPy4vEUgCHJf6koZzThpvUvsPv4kS8emXL6sdmmb9MJNQxWNnPNDvR89Fa",
  "key26": "2seHvm5P83g4m1UVsPPGpupmvTnCsAtNVKk3KYnDp7jPJ7KRpRdzTNUQpohGwqR7SSDiZDgcC4ar2paZ3nBXBqWS",
  "key27": "5VcPZAty4n1SgsJpTeRATJJp7btbMA2RWUkmk5WcEYJikysDDrFgk8PU3r1DQ7g3BjF4YHbgRNZonCwDYA14mLKJ",
  "key28": "3okc5z5ZpcaUb4smud6t75tw6f5m688kaqgA5DXV8duCmA5bE3bHJ64a5xaU7pYNxnv779UxvEBipJoF9gCNY4eh",
  "key29": "3D7D2yE5XnoBKNkTLXgUrobqybMhPUGEFwrhrDuDNrytfpEdcd4UbsJLLJRvXDa8b6H4C3U2QnPTUyFEbKLCLn3Y",
  "key30": "ikVFK2QSt48snkCcHW9zn9H6JtXrRSxgmRwAhzwbup26eBtBxT2Gy83qQ8MfczsuRBRUPSQyKqroWQqGYCwvRGQ",
  "key31": "3Wkck3uW2phruQXtpSnNvb71zyt5kndJFv1Wsx2Z3hU37dzvZhkdPVJYfVnJjKQAbfQM59c9h6djPQhWLEeG3T6B",
  "key32": "5DveHSz8QSZJ6vyNMzCzCLRkMdsnW4a7jAYS72drin4oa9a8oFgNrxRgo2Rf4xjEjQg2CPcnPbdbDgEWyzyJhgXN",
  "key33": "54nrkBygzJwYkgQf47n1xQW4Ge4LcXEbVJ2UKL9AP44xNqU7PWhLC97A3J6k1mRTpTGBzXMrpza7yd6KFUsmQQFp",
  "key34": "59dAuQ592ypXK85vkscJw1p739LbiZbJ2r4Z8LpTBQsaZaKyDmVqXCzLZ5RYXd92wTAnA4ef2HaatrXWrWATU2rA",
  "key35": "Mn2hMnBEq5TQx8YtfMTocghLiBE8foigjWLbQ5QmHajwvMe2Fay37RtidvCnJXgLeMW5gjeS9VxvgJM1jvm3wU6",
  "key36": "2ZCenQS69TQQjE1ypM8FpfN1iGuSVzKKHVd6NK49vNFmVU4prdG29sideTrHCUa5wQwnaavdx9tfrNR6yUzjvzp",
  "key37": "Vy96ggDYnAd3QpsVHjTPRRc2gB8q9csTv69mvdHUtQo8rcpUovDWSzgCr6qk7sFfyNzu3xJVbkLxHYt9gV2fdMV",
  "key38": "wDB59WKgunyL4ZcFfG5qSQNJs3S4pNK3GRsiUZ6AJqR44HVjBSqWE5frv2rBL9miK3FE9aTvjbc6s3vLuq7VwB6",
  "key39": "59up1GAKjGY3wkNG7bNh2RDi8RDhXG4rnKUVybWmkkNE7KD6yhhRosWXcDoyo98LBw4EpcDkg7imbeh3pDuo9RQY",
  "key40": "3WyjX5R4M64CVqo7oRvcarrVMZNEJDWZBBZJq7w6MXpDpx9tHEyNMbjDGwaCTvG8yr8EMA6bwRAW4noJMMLBGEc5",
  "key41": "2gpn3W16rph3GkrH9vJYaKHvEr7Cf5779Zs31DjPmCrNSvsB2swN43D5JjqGzchscSjeeTHa8i6KxgknKyqMb9NB",
  "key42": "yWvh9u9eFvGKv9fCicnGQ5mpHeKY5SxL4rCU9Q6xM186iuLCsUZyq7V1HN46G3eG9hszZo4ivA41RWCjRZZxeUe",
  "key43": "9qftkFAmrwT2J4SqjGFCbZidbDiyf63hznpadab8Qgyxd1mkoTaFtoCva7C6New3vgZPisKxLnYNikQCiji4ffU"
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
