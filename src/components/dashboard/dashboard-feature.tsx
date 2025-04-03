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
    "53QEt4Uk68BYDCEbYpmhhUU9e6Kejko3F8FzCrSkhccj4WxWsFhjT1T3DWN4CKSRBG3cJmt4dr1TwQCnG8EgMxhz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FZ52m4G4Cw1wtCfQ9iJeM4MBVaHVHytHxsuZAQtEirDXjqNDkMJJ4SJPNv5yCFn8NLB3UNJBGKuSWisCBuFbqrb",
  "key1": "3NrJqYvT8RZs4cXm9Kp4RKTdWvfMnq67h9dq4YQzmQSLs6CCdQqumJRoCqtPxR4eR2jjddzeux4KyxAaaxdCZU58",
  "key2": "5as7uXdEVzxjqqkKYQCZW4q7PmKSvqX1hZxHEbwYvVTi8dJvu7GWt7mKpHRAw8jymJpcrVBXwsWCDj1ijSATQNMZ",
  "key3": "4zqBwkikKc4zbZp9G4F2pN8nn6bEKpEUaYoTbJvAk5AUHJiLbfdG3VqMx2kk3saWWu99VSQrY4pw6axmqkUYr8Z8",
  "key4": "659HtvsQ7ut6ndfFMAHGaJ6C5euxWT8QqjTPs2HeasLEFhY6hH6r9GfsCdznNro5GDGF1UnJYAQAiCNc7bJtJ8zC",
  "key5": "2kfwd879vrnQrHY34zd6XPeQBnvKLovXtrq8egz56Gb6nDmjhJwmPzX5YbkkQexV7eUqaUARTnNNgz9tGnox7BWY",
  "key6": "2XAmJT72DZRHsEoHuXKMjRD88TdpabNxPSsN74VWTX8F6Tcr5XtkESMzUR4m3Zre5cSo6aUzmHBn7Zq6M5PNsjaG",
  "key7": "2ZsawMjZ77tJGYjKrUMh3437mgcn5cju623zgwpqYyFoPD4fbejSG3tsAHmTxg4c3YBEvZwbSWqJfYxuRYMGZCoC",
  "key8": "QHhLzEd4sQgSmdxCTNDLhUgCMa2qdvnw5iYJa6kZjfsKGkfBdJxpupSxkMdsMNTFZaVnRSaKrDSZZCJB6UjfaFr",
  "key9": "2Qk71TG8QeE9wXtzLG5ummsgcfcR2s7x61Byte2v1PSt1hLw7uhv44nYfrdNGMDQtKtdu2zYRfyUwWyeFQyqjjvC",
  "key10": "3jvYKPwbxzdvgKaZq4PYNuVCGdLwx21QpBdBF5i4s3ekRx1bKLYMgbpGT3DEGwKJ4WRbWfSnLw1efnvz5NJMMwPm",
  "key11": "S8fdh1QVL35kWw9RPaVQcUcRULkUuPZPAetPA7226CMCALonBSgG6913hus8chHdVH6wAfJUns5dZiQp69yNeUp",
  "key12": "3dZufc1gqkAsZenHoqqLG67dMXqs8XmShagrwiWLQ83RLWozuFnDDFboUjDk7mhbxm8LYSLULubxLS1YthtYGgbh",
  "key13": "31EJtMimW9WGnGDdjgMiUJTf1DwJqujAgStNo16Qi7yGb4CyLKrtaonXXDV8GtzhWFCNizYxEtfTpWMGwBKzmdiA",
  "key14": "3Zh5R7AK36vvmyS98kC5A6QypyQcUJgH94mCnAquDZ3NKJH3pHfQWeesaXu7ANtTz7BD36TubysFCP6k6NZqwzdn",
  "key15": "5oRo9pPpZRQY13fV3EEyyX1oyTeWVyYjSPax7d6s1TFJDMmR6ogxi4TiJfsiUQUxnxRzW421MJmndUa7rXzf6zUz",
  "key16": "XL7dcrUVuu8FGQLoxBnkqGLzJGoBXipKkNts7geJYkTsWXmX12mHWpbbAxt4e9o2G5nqoj5AMhTnEATh4gYQXPD",
  "key17": "5GbbWe1c62x9eDsLzjLpegZQCRH8ZpmgGceWV7cBupECEcDWQ37Ro7yfSRvFUvMQGxv1oeE6T9GvQW5baSy76NF7",
  "key18": "5XP4DcNZcdMfRybbkv4Hz7oCQJHXatU8fAWMmz2t6fDfNZD8DVwj4jMvDUob1f51eUkjDGHJfUASYWmUgX8YQPdx",
  "key19": "w6r2gGkVarUpgs69R2T7t3bKmKqMRv77JgqhxkKMXTKrCbr9PizMHXRahR6Zd9V4N7snS9sCcUUPKKwVncBYQKo",
  "key20": "3uWba38QFyAbZYegFwwvXwGPYmh68eugqYgm9kk8AnKjhu51RGn7k7ReFAF6NnWkiTAD54wr85iRxZB7npm8PnvF",
  "key21": "4YSQZTkJSHuGZPVdpMAcxeypzy8YDukLwCSMX5wAWFEDoUWoLUykAFtVnMraTA7nTMdfAbt83iMpKD5Uyo9XrKim",
  "key22": "4KLP3vGrN3twuqmyPzcLgaQWXD28pWBqcKb35YvL2ixK4b276ZYydadqLC6cW2CQ26PbkFB2q2Lx9S45Y5pLUak5",
  "key23": "cngm3uZJMkXyKKET6jdYZakcognY4juNThbwge8M4vZqcbwiXBenX5KzUbLb7br11DhWenkANu3MvXupL5DTsLr",
  "key24": "3aKxyEMFR97cktedfYfd2cQi4Aswrc57xna4yjVJwHyxCRQK442fizBcY1fBAUkJwPW1FM2zsFcwKmRTaZPD6CkC",
  "key25": "8fVm1h8HnQSJAo8H1sXuNNBVTZ2c1nY2qCpmLY7WZNVtA66ZHVdSsUo4Z7JX9MYvSmFGGM6RHDScAJAp9mtLw2v",
  "key26": "3VEK8XnpQJk9kqMYeQVEMrTNHGp1sJ6fAQDPGPju3LN1J43g4x6LrzR6hZmW6PRpKPxfmi96Nvj14JmaYj74AGNn",
  "key27": "8CvYhNEc2885aguVxsTmmJKGURk5NqCMmU85Cu7eSPPn1xQXLFwuuYCGSn51VC4FSwo5ezxanc7kujQX2mzXg2p",
  "key28": "5WSd6WBWZfb6Djh2ZwpY3u6YBEbmhWKgjVhopTsmEQ4WWESFXBi2oAbBoXfTdDgtj63XKxK9R2UJpqv9ZjX7fcvU",
  "key29": "2ykoJFaWXu7qvvAdZRx7gkXXY129bFNdvt3UrPL8kA3EKg6jpByy6Uw593G5thSbGFkCw1UAdP9sVxCimJr8bDoY",
  "key30": "VkRsUU2r3P8g74y5RbcCaMUnPgTeGFU3yBNPjvS3X2YXH9SqUch3J1QEcKYh57JLAd5j96kWfHYrJ48eYy9krSu",
  "key31": "4BwaeY2hAoKPE9DPZrnxbUhq7YWTRBZkyfXf3FesVWWPMA32ruLMDTmhRD2EiqM8TiTQM7ZHKjww2nMP5gN8FmJF",
  "key32": "VjaRGnbMWjEMSRfSuzGaZzbqxZ379cF7xseJFX4fXRwKoJorVgx5gYbmPNAFAWuvyeQYoELAQHQ5TEteCcgHbpA",
  "key33": "4DiFcyk368ySK47Qm6N4FDxyZLybC6uHsuUszftFBRdqQcf2iGhr2KrceU8BqZC7E5AjaKHhLGmHJrJRKjPFsjeK",
  "key34": "xUkwYMb5hKp9PRs8FxMPavSZfVzD7PvhueJfdKTsCH6htd19htSnoUUNb6AvLXpmnBU4pGNiQ6LwLWeetkTn6oM",
  "key35": "5Dz6JYDmC9W9jYBJxcx5wHPBWKr2xUup97WBCXnkvo4QF8WNkYEksiD2uT2opZAYER6wWJZYzqBtAVSRapg2vi2P",
  "key36": "2EhKinEVe9Qst6jLLES1y9BHFrMMNCs9LhQWq4hsax4zGWwhRirGYdCLWGrEEWEHdNj6tTzsJLmtwDqhfGB8ghDe",
  "key37": "4MQFKJz9ue9mDszrvD8m7mRoQtPfiTqYUDFhAYTwbxDq7mWbNXT7uGfLQVPH1Z2kS9WigugQHjhaypDKc2YPzzri",
  "key38": "3xxPoJUCkpkemxfyt7MToh3sFEiWHPR8g52siLjVRTzLfjQ9s4SZHqEaR6JnSMo6rnf5FHmLuKRizfGTPrGzTg2p",
  "key39": "2wFgzG1JjpGfKQ9Dd3eAYPHC8F4Ni7TxrLzfzZrSwKfpfBkKEMG63JAHSRkF25RagG4H9jXQyumvpfJzd2zvkvDY",
  "key40": "57RTkqYum3JDrDEU5CSG2fNs8zHX686h5JuHYso99nTMD96nS2DskDXW9UJcYeWHGyF48rSKGEsfLwajgg6qKF1W"
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
