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
    "2fQch9sa1pwccozxYUMqxU29ZrTQP3X7ZhEq6oUbMbZjV2XWn1NV1CjRZC93boyhqd5QGgNVEUDGqvaigzyPpZER"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VK85cNLoR7dE1h9MyGazW1Y8CGZbso3hTZxu8tyj9Bg2stKjhZxCJdHM3fhdHuJYeNbftkXfDd9dqouzc9CMrNP",
  "key1": "2secPo3ptyfZfy1zcSSbfpVUuVgedftYoo7BbYsMGKsu3cv56Rv7VqvaCiRCMfpwAnCcXiS4Fe7FcoVSJxzUzzVM",
  "key2": "3GYtgKt9bcXwcBtaoh1jeDHJLh6TN6MKHYjn2KTEAGjGBmsTVaprkwQ7343w94w44CMARJBBuXaLtMYwZYSUecjQ",
  "key3": "2By6MtVPuB9z71fctMenx36AMsGXCCjgMfMGKzDYpSB68VaUu3nMBTNnpAoEV3fW8t6RCDLPB8zDr87hfVDALgpe",
  "key4": "28DrsHSGf6zFi8JseLT6u2tMagebTgKx5s9CwtS9U54tjXPM5maGH3hPz3Ww7rZ3FDVuVi1G94oWK1FTen9AJNAX",
  "key5": "2qkxrmViuhvUxNrMWdVEKzXKGp6QchGG6j9mAG6KcDikMQ9GccdBTWkM9Nb5PARZBYu3rbxaQdnurBR66KkTbMbX",
  "key6": "36gMkVkGsELTT7if18pxL4TL93TehJudZQgTJHfAGbVpjA2NBQCTn2qVyLXLksiWcVzdxKD2Z9VqVLJSbDBy7Ybn",
  "key7": "2Ri4gyJbRbbrgbZNfvjFmELW5fXD9Uc2B63VNckzCn4V4z82BNCyNFpYA97c3zrBNJD2EQYQX65KAgSjyHhrmMAf",
  "key8": "66P3NwaYEiguETGQ9rNwGWRx3T5aDKqnzQPfoPX976B8Ku8RFn6aK3zjP1nPkkxuhCWzj3AE6oZsVoQCAD4tUHpu",
  "key9": "LaU4qLctc4za3QT69rtPA83k6Uz72rDNd2QAedbfuFcsfWtr9q2uPcFW3CGRm4yo9JDxpXfYi5gKEGBxfXw4EVP",
  "key10": "5PrvuX13b7UUhrRYiaFLpVLvgrC41qvKKQ64iaQHcwKEmworqTxxNGS7GyLYqMbbAEWkyKLfbSeHMAthK1wHb1Hv",
  "key11": "iGnkTEfiyp453VqoQ2jkJ3KuDdHnbxM8sAPjEw2RNNeSBB9Eddqut5RGULGXRPNnPamtUMdPii1tmXMyy3G8Z3B",
  "key12": "52vGZyUzMBZzU8siyin7aB7MQC935oRxmoiGX5XK51zxu6J1eneLJDX1vmsUWGoE8KoCu6bz8kF8M8AmPVwRBPyo",
  "key13": "5e79chzDDecHgsRtc6wjhp3rq5c1QmV8BRfUJYohRgfRkP1Ws8qEu5kuEVaDFGgkf8KhW9TijdQqvY9gGYE9PkyV",
  "key14": "5T8RL6TJ63z9Su7wwwHwH9Pb9ef8DKv3Xp5b4yRDsyxpBDkrfEAPDw6bM4zTzWtwgTgoUuVnwdnyBHWWFXsaNdEA",
  "key15": "2wKpfEU7uNYskSXRkQojcVKgKe3qjzcXnmSHZvk49k2RKviTvSXutkXYqErxM5HZGAEhaJa2Q1zzCNdhUMJ42NT5",
  "key16": "QrczhUGRhuFXVfu1aKHUF1fXTZZU53wdXXxiRFJGr1BzFhzXvQwafF7Cy4rsub6KBzMB8ddyWsGhMz9bteLVnkF",
  "key17": "4GQ5BZhhZe4NNoX63vxfgSLDgzjawExUgfADh4VbcCFjbnU7SXU3sjvBNahdShijrXev9oB97QeJr4Wr4se6yNNs",
  "key18": "2sAcfDFuJsRD8nHqKA8JzVtsfr2yezP7uSwApC5EaChUu2nHGybtmCrwoEviWDmQx6uwxDsjY2ykxy2Co6ea1mfi",
  "key19": "29RsJiUuz7FhkJNDw1YuYMzKnNGSqcshF7EpMAqrV7r1xbgD4pKfaVxjqtqXDBJ1JKcVqFZWCYjszefgku2FhMLA",
  "key20": "333WmDPTczAhVL61fqFZf3ji3ZBPnH3hBsjirNKC5BxR8kJ9nU8KFt8pX8ddcpRwxUaGERyhjg3b19MXkibRTU6w",
  "key21": "21tEqVvbPYN1eeVhQRkMHpvBY9tosfFg6Me8V4jDs9QK6izkqzYqV17wU3a22EiPfbxrQFuW3M5pGoimTKqtvR5K",
  "key22": "5zCSXJ2MhiJWzMgHhThq4qZ2ztgMg2cbW3RgRZLmB55HEiPcGPaDmcUXJVKYFjwaSs4Hi6Powj2cUJdvQcNmisF4",
  "key23": "2tLzUUQPc3QUq1puZTrc9bcXv7R7Sq9JWoYa6wCGfCg1xfDwxuBwS4c5gimP4kjffAfNF9fDQUKSYJDTowfe7Ydm",
  "key24": "5csVcZ3HgMvnReQwxUDvmf3fbxQcZT6SRxYCaDtyVFWmjyxdKosVBZ2oJhdKAX8L7CFZn5nY3yR2ReBpTQJFWyi2",
  "key25": "GH7Vgt63rFnJMvsdSpRy4nmhMxb6hCC9xFGvS7SGwCPrJvs3J3FYewz9ST3Nv3RHrCWbdNLNZBUQbTSSppVp1e6",
  "key26": "p86xbz3ax5FjC7xUdvyxdcoQedq3GzEzHANBokCJw5rRgfW6avXFbXqr9fMnqkb64Eip77dH1dbfvsvtqvy8Upc",
  "key27": "272qMGNXoLAjhBczCTty9hGwwgmdpP8DYUDjgb3S6Pw3vjZmAD6NjzQjquNuM9zzArSuQBvXkLUB4zxsvXb7ixNE"
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
