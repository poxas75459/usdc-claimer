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
    "2j7GMicBqz7qTivmNyDzWyq6rxGgPQ3PwSJbrGTPGRnwEU8guxrx4ygNNrs3GdWZZ8kCfQPJAEGeQpsZZq3ViSae"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WHBxT8ERjrv1Q8Vwg7DKP5bU4seWo2yD69WVS5nUE2a3spYjNqDReKFVnD6E84Pbgk2aEzcJSwRU7H5ZJFmKHV1",
  "key1": "3BBoa5fsYLf97kuWwVTEQgUKJpkY7vdQSUQyBjLxy9GKMgT5w6Qx8uooBDbf7ay6tq5dpDyCsxdpLGgHzG42t1fZ",
  "key2": "4dhVUNX71WeQK79dpKkpn8395XjQ6TEEaVR584EBQQbXHgfbjy4HYBRDcVLTc3zzqvmQsYj7BJ4KA4SCV9e2CHHz",
  "key3": "rSmMyWeu55kB6UH2RECjKhyFBh96DXCPDRwmHcPTTJhaHW1F7hFEU7t8b79ioJBe3YU5wxagYhAzqeSwvLGA2FQ",
  "key4": "4UaBrj5HsqT1mrvmn2Tt9vm5VqxtH4E39H5mnXDNLtQzRnUTye4VcPtzUnYJidcB2ZHrEzfVZTZsUnx5A2RfKdKN",
  "key5": "3HBsHzLzR5GChh1DngizQWBKf2Nz7QkHzQELraSg1FXqxpmiEyMR9jvNPYUKc31N7sjHs89n3AY6CmpLkbpCfKpz",
  "key6": "5LEYs3ZcdzYTEe2aA8P8a1rcJakG92YBD2hAVz26fpzpEKGsQRnPtHPQTLaK473QmWAMsS6X4kME5GoyFEhuoxjY",
  "key7": "5mMcvPC5nHyoPxk5KC8J2CoWyb4tnXrozzPVDGKNzKheNUQvbR3Cx7HQLgeEm18FXor2MxEXHydGor3RuoGZ9dJF",
  "key8": "31Lhk2NQVQgtmqknjT2kYqRLKYvCZ62fyNa2TfXXXbMNConRRkKfrvDQwxfZeW8MMkTapErVkw82Mgk3xM5Qk4ax",
  "key9": "36CUSdqFVxUDSVMpaG4m14q724ELzN6bZGtJJfB3bLbhQH5gDuPY9N6yS4KiWVWUqXxc3VmzYqvPbeHD7V46WAAo",
  "key10": "Use6fQqBC6yXhSgDXxSTReSnShB9T76zKi1sypb1okCku3WXagEVctugCcMwU76LyoiHp8Mr9XRAJiSPNWQbsHK",
  "key11": "3NjKZSYmQuwXiKUk2wy5dZXvCTJsoGXiqqVP1tUqtFCXMb1yokW1zkLFcrgBoWEkaKxGeUWQmybS3PzLA8dQD3RS",
  "key12": "4GvYvfbEmbBCqT4nQWHNqkyeu4iHo6sG5ZTUDQPLwXsv1KZdWoGKALuua6fj6AiWowszPxyZ9z76cUDb6eG6JDBX",
  "key13": "5Byrg225BoHsnWWxPDZkQmHy86r4Dc1bFvRWRxmcnkGusSbd3xWt1qBFKqWtdSCDvteUTWWJr8gRygXQp1SUEsC6",
  "key14": "3oodZUsiJmMmwT7WmXBqKeJgZurTK8tzNNvUWok2Q3oHVwZGTbbGVDNK6CSL6BjpvK287k4M8wSo86nyw2fG93kV",
  "key15": "2w88Tu5W66dEtXM7RGgjGJWPSdSEL67VF5AuewCfYXf257tqJCZNdnDm3JMRbWBTKwGxRGhhBwJPCxiUwYAbdeRe",
  "key16": "2uMAKhkRrgzrPjYgY5CcqW8xovGeGLVK31QEvus6gUTFB4HdUPeLBB7fZAqpRGfQBvvA3XYGKssFKrvvFRnoBGJ9",
  "key17": "2aRRcHk9FJ6pxQnewsRfEubFArhLhS9cNsfouNoYmyA41MzWfEZ1CPXTqo162FUmAqZEyshNF2msCX7vpyPo2gKg",
  "key18": "2dLCACKLbfHZvv8vVAVxMs1L8M2sKh3NYyBLTGb3ykRzzCUc4nfzkkHFuwK8XUf4pkJndW1HBrjFNVwuNVMo8M8f",
  "key19": "48AJLwuhfVy5xDjNYeewerW5hVXRKY5EsKawDNUHyxB5MeYRwxc7b2xC81DwSUUYaqZ2fQJqFJATeZwRtCdEzaKf",
  "key20": "4w8csKqGXt49igQ3YGV84FK7A2bMe3Dr4DLoyo47cS3DwDFxzcA5La7MDVBGvnLy234k491TjYqDS7KSwW1HZfZw",
  "key21": "4eeE8Fwsjr19ZkYzYFkEKrtbtoCAjYHHkN2oxcxeL9L5ue3f7H4qevWVETQYyXFVyrzQoddoqQK1MmdgkzEgk9QY",
  "key22": "3P5zVA45EoF2rV7nzGKv4SdAPwHUnU7oqBdpBbM79biE9Cze1Bs2dCGaA9YbXd5MHN7fmg8TXGz8i5v1cXbr6bge",
  "key23": "s3CD51ra7DatgiZoq5e7XiKxnuJycQJRTR34o4YW6aWciK52tZvqfyCMddWSJ5vyjjAiEyYPJWCG67W4p3DuWwF",
  "key24": "5dVwxZCNpLaAZt6CBzXHDYmHx79K4924A5dvG9S7r4rC7S6k9NSkpLdkevz1iSSfnjqWao4hH8bjwZwWzy7GYRYE",
  "key25": "4m3uNVx7qgJTE2FsENXw7CkGsEMXZ24QjSnGHY3zqQCpKMmPKkVvZtqsFm7ALntu6W9UqBgbY6q7T5eQMGmABx2C",
  "key26": "43RtPGArehBXh7eUEpEQoD2iCRPejnKzMYGSuZCaqg7UWhnKNF2YCnGdx2MCEjCj3A97vdrHC5KBfN5qzx1Rj1XY",
  "key27": "2WZKsF6Do3hAQWMH91svUYY6MCaTD8qVtRoEiEwS4HPybs6TFqTDBqx14sMtihGQS4hTNf9k9RJg5Cra4n2sLfYd",
  "key28": "5vRaer99ZFvPXnATqB4uMWhZBcZrhqu8eWMktcuc24nuG77DJd4MZoyoXBr8UNGCZ9EWKq5KmfBs9CPZCLwqsM5h",
  "key29": "5bZJBsxBW78rKG2uxGhDS8e2bjNNqScSqF7MgtpRsCUR97CPkTez9eGrymPToJJru1c5YzusnAs4szpboQmAcEFy",
  "key30": "3wWQMjrqb1UDXm8NQTia3TqjUaMRfJPtcKRq86Mne1AjTatzqRnVmpva8cChqxkqSePhNEVcTVSBALn7w3QXiAyC",
  "key31": "ERTXHPcFf6JMhSvTA8NUUMu6bKUn9uaV2wVQeRsujmPfVoZfQDYN7p4sqEes1LGczUhpNWsVnwa5U6t8PtGBjkC",
  "key32": "5KcGMdDZHwtkxZPKdMiXti9tD2ccK89hDK4whdrjgsUNtyP78AcuakAn1fNmyrqxkd7HjfcrDHEd9736mWTCPhA",
  "key33": "i9R6BZcom7HdbDuk7bEbb6kK6vd5KzpckrA5cfzdx7RSh7qVgsJixkXF2VgQfaB9vQSEDXnuSGTsiRgX2RCQHvA",
  "key34": "63WdmrfHuWd74D9KyAzTTpCsHGfvKCMd4TALU4wL1xEwr11hP5JNms9dqNvX43WdZFB8aFNdxR2Hr5kKaKsP5LsR",
  "key35": "67LnJjjtNKKrHoUuiY8N3jFrLsvAHVWoXEFp7wipHmwoESp5h3HXxkbjMxQyT1MBhBE3rFnuNFNUWzz89zWG8V74",
  "key36": "5LdAUJhJqRSSxd4JXN2DN6bQevYLSd5NMW9ijjkVKgJeju7VLjTYxxWpHzTP5pR9Dqho6LLTd3SqbyiWH1GnMDjj",
  "key37": "3bqiMuQbssNEzdpF79rN6rpP2cGtk74wiRRmeA6NrSGod5RoA3RzqBjrJ4XfwFAvPirC1RNr76ncN3svPxyYnvsK",
  "key38": "5ianvom3KeSWtRsDVtuP678LZqUb32QkZ4QNdy3LBU5oCeNfBsnc3MnQjgagy2FAPd1oqVHQ2aYBfJiwcCdqsaaf",
  "key39": "2f7oTJ1c2QsREnxzRvzLWeC3vaMAyXbUsXoe4ate6LX5R55dqioVT7qPmwzuG7ZC3fhe56U8KG1x1jWmcW8UzVcW",
  "key40": "3CnDwd4zwEWvzND6rJ7uko6rWDnrbdfx4bn4Q1RV73GGgNTiakN3H4a1HttZ6cP3e3k8eomFWbHbpLCvp32r2gfV"
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
