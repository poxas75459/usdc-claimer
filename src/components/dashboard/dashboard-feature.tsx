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
    "62hJ3pn3EYdJo9LixoGuS1UfDktX6xAi331wB1cSF4sNUoed9TnpE8Fzg6bCKmB48tfNyryXmnB4X8yKmnM2UZNg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NiWquJxk6XQ4dL9R3rTw8ZWoGSG9WpXTNLEmW2UK1MmgzZPK2ZD25nxzeuRh9XozGKAkdu78LXo1wFCVnKCi4Vv",
  "key1": "AJmUdS5StWx6sUn7NkyPHh99rsymdC3eQL9Y8RpZjhuTNrK9UcLQmT5SiuNYJoh9zZkcqKCdgecGhuCHNXVZ9bR",
  "key2": "T2iRrU52pe8TTpcSUz817JHs6PzzEFwMSt8DEFjQAXxdaAu6ihXnD2VMxV4XScS2dLeKFPMiLeu5ipwiLpfMnzb",
  "key3": "3Q3orG9t6gM3e9cDHynm5h2oM5XWNgZE3Tj6biRwYmMo9P28UDA5YRFgb2u55KkQMeDn568jPj6ytYZPWRbM3d6Y",
  "key4": "3KqvBjGeQAECVPudSQu6FQqsVPq1RRTjDec2eWUCA6gmDiZyiibV1nVYAHTL51BYGh7cvWoEXAvUyASybrhTkm2K",
  "key5": "3AjPPhgzU9TGZ1Mo8yuUforxXpNCZ8PPvf1F52bvKtwaTytiTKHmYd5rafk4zsgMySW6HbrtpsYC1WiwaiYsRfAU",
  "key6": "2WZSSwjzNpdjAsNPPh9D3Wh4YGPdQnzhQZ6caieekth2DeSNZC78jTS6cpwW1rz4AtWHmJUDyQLcW6Yuj1XRkytM",
  "key7": "2YEDqvdd11zhDoS4WwYzv9uoBahNfgnXopfBwf99d1mb2Garfnn42Lng9kCqWVb1ufbBymJSgQenspQZPLX7hfvi",
  "key8": "4VJ6Ae4C5YLmx9MaCuZt2urTNGKMbHhwJs9uPDZzn6M1sBperhvEbvP9iiKMxNL1FWUUPZHNM43Px1f7Ef4D14dX",
  "key9": "4dPLXH7caN9xEsNhfNZffSYT11LoQEQkprC5hzDjcU3DtpVGSa7VTKTBsHGTKuuo5Ldh2Seq74okrVdaYQ9ifV37",
  "key10": "4nyfgedXqNUstQBsVa6sDQgdAHA6bR3xHNeEutoXZ8b82ZeGmMuPqcksT8Hd4NWmHrxMHLfnGpW9ia15JJTwwPY5",
  "key11": "V78y1N6DA1w98cCx9DWhDn8mj6HGYCmg9n6fzhaJTtWjmWJWjE9Jb18rjQ37DRwDvgZDeNwWpJ4CPVK2NiaKVT2",
  "key12": "595GJX3V66tG1vEdq9Uhv1HvNutHjy9An2bxGTCvcU7f5LSdZ1TdK8pkFVyVAmuEgXjD35gEU58mc9UeZu6jfyN6",
  "key13": "5WVrx8Da2yLYsKp5pLZHvNfPq35zf7Kr6q85Tz3A7Cw7ih5cGMcNv2J697mTBMaFVvd7q6n5PeFDbCrXzwdcn7DP",
  "key14": "3MVsQRZuHmHNnhWdf9vN4JyuxU6PfbsdjbarCJawX5P5MzzZ2KcrbnDCNPWWmGKNtmVVNrtW7KLtP2WznYiN7tym",
  "key15": "3pHAFbwa4wmLYLwmt2A8cV8f1uyYyYV84Da7JjiTbsWWB5cYttV8QXbpq7ofWrP6k7KLaKCYsZTsXdaeXgVr7xQH",
  "key16": "LzMJiM6fRoYzwSXJCxXDouUC26BQiT4EnjpLV1osmS9QaD5WSR7opyF3hj9aJGAkNE1212q8kNeydeAUCbj5Myn",
  "key17": "3pjxbReEsqcgcrctaoTZDBDJXP94QdEgtTa84mRrWLs925CGiunGdtSe7RbpBqgMXdtarg8AzdWdLhptxXKfDcoL",
  "key18": "dTX9S9eWSrowna2CRzXQrfjks6PD9tLphwJ3atmJwpVJpfcqzeEdRbTeLmB1mtER7PQ8PFP69Q1ceLmbGER9QSw",
  "key19": "yyYwe5fJKbPQLRBkzhtvnni2gTHgZBy4ysXHBxZSodm8q598BqKZqvnCQ6g3vyBKs6z6sc8WupAVm5avLRjWGtJ",
  "key20": "2VP6hQtoDSZYSWqTcY123BR78dHyQAYimNvJ7pm9RbzN4ugLAwS3yh3aUsvm7MqP5agVLzWYLddYAs4f72rcF8V9",
  "key21": "2GNjApgbxALsuctPwAFqzH2KKcDqCVg6TyiPGAaerAhdSd3r5YS5CGGC5aipaaD5zSs3VQRooWiUDvG8QpNjRdmk",
  "key22": "2xUw8htpfTWhXrKJJyLM5jKf8kH4hGtQwYUFXs5CELeihU3BstmzzRJkcYNkJvisYvHkpuR5wTfQqVXqEsLooKru",
  "key23": "3n4jVwhepoBCLpnVNDuB2M6zhCXZa2M7nzRp76WTQsAnwHtRFxZG5TS2VDCBZLBXVV3Ckf4ti7B8em6HrLubJiCU",
  "key24": "bFDfzwN15hbbZyFGzC3kmWZjK9QgopxegXMWVNqkuVDXMsKv4sdZ2aJY7Yg9kCUWjNmqwSvDWVpu48Y5NHrPVaL",
  "key25": "2MkcETyqyNooXxPnhZa8z4gs6d7qUijEHuuowae3DJXofQiSdkvaKLCZNa2UE4VMYs5XrwXXCY5pU4tqYySso2e",
  "key26": "3VQCVu968bwckLgs3DmQsMmysEsje5E9JssZEnD1zmNUfz8gueiBXFtqSj2HQQmRkYrL9WJfx3rvPR7iNF3SRGkZ",
  "key27": "5BAjshYziVaJQBKsTd8aY3VtSbvrovBvqNEkmK3dhLwmZ4vthHPtgrYYy7A87E8DqMoz5kBLtbRe2WnjynMMVyM3",
  "key28": "4sA8S7U5zbvmUe3mdX1tiodzFxzJet2tfx4QunuDdNaY2VXrNPCWQrinxURr7GhiMbbDC2yJ5U7SdzVtLR91TeHQ",
  "key29": "5wc6UTscwp1CcXY1um8sh1W8c1duYtWXbEPpvkPSiNqXq6mK88XTsxahqnDHc8v6vc69Sx8BAf7ecmSLV2qhq3WB",
  "key30": "3U8j2wxD8vZATPnsTBJgBRq6DAEJ7jwiX5kyKhJDzov4z5GjBvyS2duLdvef8PrAKfXypXtEYsmSid6jHBrB9RRi",
  "key31": "5UAFy5Jjm2oaZyUu4SUhuNHw7yrvNaZ4LCTtjgJCgD93QMjphMJzdAa5yttXJeLwndXQAHvhxb3Ya7n1niL8wgYQ",
  "key32": "uMx78Pi4KxaMs1MYFBnAoApU1CvwN3uTvG7LC9rcL7gdAc6gveABMBHNt3FGXFUMn9BgwjoZUW9oGmhQizfgwKA",
  "key33": "5G29qYTh2rkF39riJ7oCu5c6LJ46gGuJ6g2goTMQx3RiaU89cvhXxAAWHq3tLoF2p7Lt859Q6iGmAMRCwVjZrkWJ",
  "key34": "5AZDF6FPJbfE3Ee7rMe4ZkhPwkrLhoFKMsqgTZTk2KDHEdojLAAz96PA1G2x9nbVsaqi3TCNUPipRNXGN2xbnw1S",
  "key35": "fnJKznWsi3Hqfoq1ERAgrPHnqK8yZgWzYUVGqpdZ19VeaysNxnihwcomDxvSZ9BkSkQv47rLmR6rPt3KWzJkVdW",
  "key36": "qZLPnApbZWaxaqiBMtbzM1vuvMDBERi1kLWnNgFJYctZsTAhKjcsjEd9W2ikPeprVXd4yZcA1KN5jshf2nwzPMf",
  "key37": "X1ZDsEPTFYHhbL1fEWTeeZGZMj1sqKPdRCxoKqomXMLxKsnG9o93JPhHsvsWZ3gvBrGmCg7r4dKvWpDdAp7Addi",
  "key38": "5JJ2gykF2aybrBVV2c4M8G7ChcXDyFANb9zaWoSiXVPKaS6JQWqysR7J4A333bkGxsjGdVggt3zqMdCk4WfdSpou"
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
