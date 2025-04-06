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
    "TZJfx1tQQZsypSHRnXH5e9zoGSYF24oTd3FbezwnXhJv6zA3ZPNyQrvpUkKTx188wwTa2q7rH1sz4n9PLDxF3Fq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3c54ZRhqGwbYvTR8ju1D9MNgbYEX1JkA1sewFZy3MKWdoV7Fy9PAbvBD4jZeC28kQCQTd5848SCPnwtSZUmsuWbn",
  "key1": "RaMBvGJiWBZxMJdHwrK314fZnkeqk2r7iHBuLDjwBBRN2fL5kFKXdUSWPED2xpqNNWHBLTZx6Xc2eHzoDayDuFP",
  "key2": "3gReV9zquB5Bgy96NyRHC4nyn9eBdTZACnaDbsHT2PX3ejrfXyXKpPpU68YrLM9bhw9b3T1RFfhpsF1YJ27RuuPp",
  "key3": "3tmUCitbYZ1tuvs1vPPLFj1PYH1NRUp37EwdtjpPKbELDHs4SbN6tAGukCcRrbXRVrzcmYLRAZarYhfB8PYF4LR3",
  "key4": "2mY1C87isffKiV1QuYoTaBbPGPbpLVhGeG3SPoEwy7cszaSGZEiNe9nELxUE4W8JhTetA6jrAizZ3JbsYCHssxim",
  "key5": "v2Gu3KuixvQCXPnvqWNerXdq2CndzqV2vyrDkgokaUWprFgBne2sgXDg7dckxZ2ht9kDKwpDLk26TGxJzUPbNzH",
  "key6": "5Yx5eR3XyUrbAsazih6NYJ7YicM86qzY1kZKGMRKukSVCqmhFDHKfQq9Yd1CSy1N8ixrKZPJEqyTAbwKN1C7xxe3",
  "key7": "2vbDpRPn7748RoNSJyeRqX9g4TNPjBrbDiuvazR4SbJ8FpcyzNmugyyD4iSNQbZ3cLp7whf3pSba6R96dWpYoXPo",
  "key8": "4bWYjEWvcZwuWx5zJZBp4xFL9vSjkPqgyA9QkTWBujc7koeHSjHm6DNgYU6NfvxdrPFWFQQyTRBSronmHuHVNNLj",
  "key9": "2FsYfjDwLtDLnf6h1mjK86X67XRLXzuHaWJrrQvGyqcYRmzB9WesjbXPbCabEwGyCYuvtEKyTzPr8CG9H7xvciaG",
  "key10": "3DqNwX9FAqoxKPja28V8j3XMK2jVLFUTCvNHm6cru5APjFe7BzbV2dymnvLCc1HrnF8SCMSg8Erbio5pyPEmWwye",
  "key11": "3GD5GCb6RkWSmaWpBmYqH4jDz769mK4hqTo8ybWEwYRq3ZBTv5dBvURCDJwBc8REjMEW248UzNQi3RKDDjJjqgRr",
  "key12": "4iXyPABWvP3saiDBkjkQzBCdo5R9Qy3PGUn51q4jTXUigEn2dYc2TmVzAbQPUUwqkPjZaGXHYQatUkM86LvGLYe2",
  "key13": "2GT3mXTtonntRe4fkpGL5cHBiSSi31Wt4K5vKATFQaB7vU1sATDD3pwRvfJbKJvXjovuhE95oZHG2Q4a8MxwSauk",
  "key14": "3CTuDQkXpTToCyCco4HxfgYYNZPpiSGnH663BTAtH8qzovxSzwPZBeiReyvnchSD1GctMW3zAqc85HE4azmvi8Y8",
  "key15": "3Wu9ce4tVK835ZxyjtfPEJpL3Naf6P4AAH5JDHs2idN3QsH82x78ymY4ZzbsWgNy6WFRssjDCpeUvTf3WX8XYNuz",
  "key16": "3PcweeuMstuf16SASFRd17C3dKfzMei5Sh35dUdSPB52MsFQspmUN6QqVrRLv3YzPxHWwTq48XpCAHbkSdUF3u4i",
  "key17": "2KN9Ah3BU7vzeAb7twXfZKcuLTmNpj8X3qxzqfL3BRXqNdiHc6mB994x81EKgwmRorjnwrMvjwbWKpxM3KesSfqW",
  "key18": "5NoVE6o7k1Q8nzit5xy9gFtUXXELZcSEzQYfU9h8rGj7jvMPMn8REqdSEYNMaEqMco2z8SykQKD2CLzuHxnYEHT5",
  "key19": "3NCEQ2yBsHVk9FLMARXqUEesWSFf3bXFo22Pz3BaygDAnudiMg9BCcNYHinVpVt8QfJZC7NTLxbojR84tctJtDC3",
  "key20": "4Wk9CRrVhtRkQdhCKkJquydJWePc2DpPrQ4kq24o5SVj9DKQfPHgVJUypnSBu3QYDUG8J8oMGEZrZ9fZ52tmUqZT",
  "key21": "5xyNpWDaHCwbNEZPhpRu9cC8d5y557HsJhKV775YF22UkZ3Md64wjry5xAPdu7sVYgdkvz1FdSR7kZdBQRD2EJ6U",
  "key22": "2rFp97hNNoaaesj8czUfseDETW8pFbvjDorhoc5bXudFpdWpAV3oiqcsUme5qm39CeYkKFuzLRMsAQWExoEzrxRs",
  "key23": "4qipDCPcSgUSCdvLZB3hTTKp6Dyfvi3w4EvCDQHaNRbsMVENKCDncxaJQy55LgdRRj7jj1JwfvWTzDL47nvyQb2q",
  "key24": "3C4dRCVx8oHpP1CDNW3SKSqkStRKd2GSsYn7rRE6buACeLYjq1FQ2drW79TYeyoVu1mS8NWa9cKgLNzHSbZKths1",
  "key25": "en7FjBQLcoSDiLtEnmrqgAu38xCU8zfN7LXrWX8j5PXAHgnQi3cK7wBFPdXwuKNvA3aoHXmbDWZjyKubHvzaMaT",
  "key26": "7UAXJs5YN1BngnWF1X69r8NDh385eQZZUF3H5ritPocSuGeXpPi6FaLFx88GB5GBQW7JAzU5TsMhC8yEvSmEe2U",
  "key27": "67qawHmDY18HH9ux9ej47NtgpSTSkpfJVorwem7xoKmhwvHdka9qsuLHPtkdvogKxiuFNALr5gANkhTpaiQMx8CG",
  "key28": "5eUZPRFzedHVhNkxkwvHnE4kMMtUg3MS3escqfLmpZF5Twn5ZdhKHQ7eTziuDHiT365hG3NCSQtaUKTVM4GE9eV7",
  "key29": "4w1Z5eVUZPzyk4gpq89vuu9AjcXeEYVtA675CoEVFRendUsvjMGRtJjk1848Rvhg3obiEJSwWgAUefH76ytB34XT",
  "key30": "neK38CCsDDH49vX6vJhkrUtGqu6hBkxdgsjYvn3m2fub2G4SZcrFwiEXds4gCa44Unxx6NKr5QtBU1XGvMQ62Qt",
  "key31": "2jhATFbkYzW223kyL3FdhYc6oV9r3MEeMsgrGCd3ibFTsMPSti4wEf9Z9VP9T2UQJg2DsfAD91FLHtEnQt7SUeQA",
  "key32": "5A6KB6BSYUnUU87ggncucjb7zwr6HpjYuQkjdxVz63crk1t9JPd1cqvd5D2DUKLPoLV4owpn3WydwjhsbUXJJtHj",
  "key33": "Ajaxvi9pf6kSJaS5vcP9c55QQoEDoa5uyjUfQxPG6pDye9DdCSjwp7dDCS3Pe82Xfs3QgMSEXGBfs45mbkYJiZb",
  "key34": "2QP6eEt5ZHPaU3yp9Nj4G6RXhR9jjRdVvn4f1tRPHsd2ZyYB9v5mP7LWxfb3NwyskeHSkB4Sh8HbVs7z4K7pZRKy",
  "key35": "2G5d1AzAiUtdXsvet7WMchwX7jBwS5NgqWr71YBsGVpZhUEdnNiMaDHQXzVbuMFbE3ZCHBQpHKycSLwAUY57fJBe",
  "key36": "2wRbFW8ipEF1ptiudfPXkApDTHja1mCBaYGQA4eBe6v3XjmivTbGoBxJhjFqZMEoUNsfm6G8awuSCsnQPqpZMNjT",
  "key37": "3RJZS3uU19YWwejb12xiBYRZPKGAHXeRNToyjbytyqKcepzi6s4VkqwMabPBoofXRkFdoqQCjzk7z6Wjs1Ciwe3N",
  "key38": "2iRSrDbRMaWaZg6BqZUrsp2R4rPkNMC2VtMF7obYgujAFp4NMxjRC11Sy9GgGGBqgptaXtZYVjceb66oknPdpBYX"
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
