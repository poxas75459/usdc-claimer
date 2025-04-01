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
    "55yjvrg6vir6eSrmicGPz4J6KTr5NpdmzS4FGqYPdV8ouStBe2VzZAnmVptV7zvXCMw8ipenwwrKPQ88HQrpa8R3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sRi8pRsibRxPHRpwFY8ZugdBCvvKzGvUE2Ub2EBQ9KNA7z8zXPLqenygXLtuHqYmf9CamaU9aGHaW9uCyY5q5ci",
  "key1": "2pm6GNQYnCySiat7sPSNLR7abtemGBrKUxfNQbhAnyr6r6aGBNeMeMSG3Kk6Ksn8rFcndsTprRZmnTkUUvHkRqr4",
  "key2": "b68ixC3hK5hy7QPVeHrFzWxfacJW2cgNiUv1zQpTqZe9qHuRWThAWRjkeW6hi1jjRqMF8brdKw3KBVbBvkfX6YX",
  "key3": "5n8L38SqvcDvY3NXS2g3KVbMr3yF5JHHZBw3voJWwdEkHAPExHkS8iEbxbkcLpamWqSpPiijLxcHQfyATSyKJKD7",
  "key4": "5C75874GX8BzntdvtbtedzmthZbPs3RHqM6dcAcn99ysDE3eMNMb4E5JXiHJBL7VRQcnV6twEyHWfRovkf1wP5ns",
  "key5": "5ZJxmgcGdLjvC8KFEGe7HpaomsmZnYFrSck3yqZicEUEn44aUxzVC73qF5uSZZVycGsF2YosXJhoTVEBVFNvwZp",
  "key6": "cZK4FWtTHLkWpbVDQyeodSSGJSmu3ysNaucqUWic9NMmM9dAbaU1FGrfSD6JbycMwuYC9dzahbGtFUrAUNHaKAz",
  "key7": "2REwhoKZD6PhzhRjgAsyVADsEKdLsF8gvFhhoSor11vdnBUGyq1V4aZoMbrcqERiNABGENnuSdcujn7cJHrQFc3Z",
  "key8": "4GrbmwB9VKdKh6X1yo4MkEguKv3XvDeitsZmWarnybwdcCCvyKU9Hb3zBgk1pFeKJoHvhcz1oLHkKcYoquNCZd4q",
  "key9": "28ECDYWDtEx5fctJmdAemJPCDffdQmG8cAvWpdBxWTw5MmuTk4AwNBzbVTvk6GdBvaMRZZnRVPahtWfmpktHeKtk",
  "key10": "5Wt8CohtQfbuRvLP6vcJcsrzuvfgg1Gmz2pBZRpykiE22XF8H8Mjod7T7eDRWzeKpd3cHL5VHRYWmEC9xWaXBsjp",
  "key11": "2KVEVxNydttveE8Dzv349WecapnhRrxBHD8gEbaKSTkmiaiMA8aurvsZ62oZLdZjyFSbtovJSTbiukVNZTBG1iZL",
  "key12": "2HZ5hLb6nqNf9zKkwo7WU8tezJjuQzAunFDCnaTqpUfwgZ7JCV6PmfFVk1H8ggdWm3Wz4hYE5gupVJrFQ93BASEu",
  "key13": "5ACmD5iEUTwhpzJyomF7X7LinTLj22tTN6nkgMmA6VMZ8v1pptvXS34x67ijNSN9hwavrKaE8CKbvenkvH8hWvUt",
  "key14": "43UmyACEXsjx83MtgDiEpcTANiijaLatNehDuBvAooCdc2H9JnaoCSxxfLLDEeAE6ZTM697ZCAbRWkHde2T9ZA9H",
  "key15": "SkZoumzACYWY4fJLJ5F46hwaojCwHqzrYqMebY1UgaVC25h48TZN2aczhBnhuivY7MpJPeFtaMBEUJpiRQC4g72",
  "key16": "4tmJVX3Frnp5ttSqFw3QT3yrEuJFCjGRNBta12eQtnxeKK2RT6Xyi2nAuEUx1J8UVCrMLaB71oBUbG745XV4ZkxN",
  "key17": "3xoa7kswV1QbALuperMjBJJgnfqHFvrQ4RjNvKz1LgMJqiCFMrMU8PUuVwaEJBRS5viHnzN2xjRXh67SznVJV9nd",
  "key18": "2BTXbUiCMqXp1zVpnzbPTctRPn7GChn6LtAih4uHENm5B4Y6tGV2W7RzUbX16KXqm9KzWqjDyJhtfp291CxTwYkD",
  "key19": "4MFT9zAoPawwsxGnqY6E4n6H1dph5NLGQ2zUY3ZAMzW9yPJvkL6bgyPbahAGDmVQUGtBQQH3UN3UNVn2gXA7EMpJ",
  "key20": "4yEFvRWDqd8TFGwdZkt1Z7ATvpWQ9KdqKEazCnm8VQTokC7M9xzsyjnjU2k4T8Cj2GGkAAjd1bDdKF24hrvVhi5X",
  "key21": "2ioDVmoR42gTW1rZwkUZv4a6T2euuZxyWNmsf1GpXUToLFhegc3uAgH4Vi8HcVyqd1kPCcnuxr2LEioNRVtWEGP2",
  "key22": "3QrhPyoZCnboCuDmHg9Krv2JaQcaBBjY2taQgSmeQL1CW2BTWf6v1SwJkwE2zMiM9m9wRxFDnNKpV1EDzUuL7fBZ",
  "key23": "2YPW8YrLVbf9SBKCoTbzie5WmS4ZHnhACP3zxkQ4oSpttYXUNauvvyAQVVXpUAVVRYz92NcvkmVA3fWG8BF5xXYz",
  "key24": "4QocoQvmsW9HpNbu28bFC7pSGCcix3eg3aH8FoWnyAWZq2EZWbdcZrv3UNC9PdHVVtSi8vwohd6CvX5AJqfqMg8F",
  "key25": "3SBoq7yWcXpuw3ZJMH1o4DgpjtWPY7K6pUZ8tiQr93JESr14nXxKrXbvYuKgUCx1ijb7Stri4DmumxiHwYPEtwTj",
  "key26": "3CaaEBvkibiKdNa14EdPXa4pgWfMnh2MwdZ3DcZ2SaLVV8rhE4oLS7jAUa9YubXuFjSkAJQx3T8PKf1WkviJLmpV",
  "key27": "5K3oSf3rqxkaYtSHfwW2jyJRAsrN9JPgKYyLJWZY3x9cXboCNmDPnACGxUY1rxzSxSQ3aZBWNgBUggiNhbP3qMXW",
  "key28": "Jbd22Z9BexsinsvFf8UDN3N4fn38YccTEPin4tvdkXcnxBR1J4MetVbybemBnG2n8SASdMb8z7WHK5FsR45byg1",
  "key29": "3kaEBaLzjKPCcMTWf3EgKEuEc5XzGLP97AxdyFWoWK3EMc43drHD9TfdxUWC9s3GNJMq5VSXxGyr2P84Rn5ePPMB",
  "key30": "2MMcvZimYAv6ZhbUzUgEpoSgG8jty2aX37f2GMxSXUoQD4hkcLN7c8Gxf8GSdJ2XA6TfNN4haM2sCwHTz4eWcTh6",
  "key31": "4r1zwwxcjZvGvwMwmgctfGuyZtk8AQQYpxEmcA58NiaX32aSccgGWKwgJvZv74qNDq9xuVpENGgE7ciXhT5YDrck",
  "key32": "2uhucoruvAM9BHQkawBWkF3YMbqmcJukhdFR66muxvUy5kwvbiHTyjbMxxRe9LxLcPf5MEjWbFqtU1nTZDQfZ6dB",
  "key33": "2KEP16gyS6nUzcmXsMXHwzBzsVBAHBZ4deU9eDNPkEbD1viY6w1wDQAnAzY2fDSnpqRfjev83NbTmJ1N2zsFTeF1"
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
