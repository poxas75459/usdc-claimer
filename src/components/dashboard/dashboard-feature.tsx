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
    "27BgNwJUMy8NaUrmCgKZXK7RM7wsFsPkRVNCkEJM1vKvdsptHo7V8qF3AYNbCsAxmkgvBbtPtSKv3AmE8DfUd7LY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "awkExA8NqqLx62CXCtQ7v1eVgYH6sGEf9j8jTTzinRsFwiR8Na9bMuw1aNUzV3bfD3EQuwZ2LUbyXnM5DGvU59i",
  "key1": "5UcAJqFSSizSiFuquCpa2Q7MXHMrqHxFerDFHETMFjyPn5bawXyJHs974Udgoq2xqEhJYSSWVAPWzXzYFeBqGhBS",
  "key2": "4qo7NHaZhkkoUjYEB8XqFaxWdFd4UbSq7MsTqGopBpy6THRJwxHwLhb8j5SnQJUaFC45uquJcpvwjp223ACXHeUa",
  "key3": "4AjY2MrFN7mB44Yy3mJXqiavEjd8zFd6hM22h6q39rNgaYtNpLSrD5LJmAbjHWj9do6exshAeAsQ1NPXVyJbsbsw",
  "key4": "9XA6j2BL3MJu1e9ndVDX9zBFVknmPKczGcUVraQ4gpxXJiy3dQWp3y7FeMTizeZT37rPab5rigBQ9gTRQA2a4Wb",
  "key5": "5yYT5zB8ecjEUCaP3oS1RJTFhwrPoSTWXSGNzFT5e7UUomZWVjmy9X4SzoN2aMToF7KMzEK6CXPTjZGHHbePy1zW",
  "key6": "2zxBWCJF9XyxW8JTmjcrQhXYkyKhVNqQwB1VWv84tfd1MWQVbXFpYDSnNpqB7SQDCnL3Tsoi9h7QvU8DuDkf8Qkp",
  "key7": "3u986wJaEzdJYWUiCSt1yhYctxAvjkERbTyWfgMvwZ2Ad8jFzP5S9ynGizGqx7HxsLvE9S5E3uUJs9mb7ogzoVtu",
  "key8": "3wHfo1Exime9jhWYhAfeKzeg3WYeb8x4TrPQwtxoCW4koeU2HbQJ8QsyHx4FzvJtpKhUeCRBkJ73NEiiHHZUFSFQ",
  "key9": "5LtBujBTP5geypJySpAPYHyP7y9Qafo7JB9UFRbkj6643t6aBArAbcAmvgCgQVNS3vdarrihH97oHEt2hJF4rkTh",
  "key10": "5RhuUkGLSW7CssfKE1Vokybx6jjej6AEhi3xUFXiNY1TrD5kP8cuNBfhHJNZqUeeS2thQnny9JFoS7yyf1fNmEDb",
  "key11": "XhvmWppJ5NPHZbTba4C2o3DkPp5oBWtyvQMmGCPvF9ZmSjcfErJ249oVqknzHJVZCxUx2VfV2fyN8Hziu7L5JFP",
  "key12": "Lrpbyf4VempxTJ1qv5zi6fFSsC1WYYHXvetBiS1xgLcA6z8kN5wwgQ5d3bEoG32JRYJn1wTpnjyPCP8PfY1irf3",
  "key13": "3GSt3j3tG1FT9cVfHU9ju1EJyP2DhceY46VfXJ2obAqzPLh1juFj1DWA8aLL8s2NSX83Yuh5f8Q4CWirtDBJEGLc",
  "key14": "2GJVoRRXJsmN4WPgqNNrGT5xqfFbTPiGcvLaM5u4jAsoYpSTe1cgM5tG1oh4q46wvMew8swxb93X4LuUHre3tEv7",
  "key15": "2gmHnR2ziRSqimntdPEAphfy8j9zkhn25ayCUXpxADwuUFrzCeiCaiPaY1Whs25uAqL7dka99wVvrNzFBUCwPE44",
  "key16": "4YAw1vSa6NqYKyQmfunfWiSvYLwkN5WHwUMhXnF3uF2FqU89XuMfQ6eBJXa722xu1XiFLu32f5LHFu1SnHFsjpwg",
  "key17": "3FnqVTasBFShw6njxyqoDiFinLJktGuC3G6ZzpExxpaddw85YsxTMDXV8aP8to3qi3YFp392vQZkD4gwYEbY5zda",
  "key18": "3t1tSZZUiigFKLWuDxAmFNv4idTAyQVbncz8xsXGAXakEU8c5ZZjr5cVFeki4muKFfwKJFfZrEZ6CAN6vWitqZbA",
  "key19": "dmz7NPmCVPLtrbFiQvT5UHzCLq1mCs7PNKf5u6naAZjYZndPkPpoY9NccNyNDUQit4hLLQktwCGpnnKKD3KutYi",
  "key20": "616UBnVPYjj3wWkYgv9SwW1kZ6ny9Jp1yNFUj6M2prvwCR7WdFVxhpoHp5Z1rfsvUCqiivBpfioUt3JanmC8aH84",
  "key21": "Fj4QuP3JdVVDrzSwFcmaaUPNyarSb5FiioU4xGLm2NYRpA2ywF3e6sRDh6azNzCjJRCJ45xk2EbYPXryQJ2hVeJ",
  "key22": "V2R7fqAS4iwTtcWczSVPqF2pA8oGakCNgsDo1gHSNfFLfV1RNmGcbTnAm1TqXJLMyRQt4UytqvDJE5n8ihFbPDg",
  "key23": "z1vBHHksf6Zb3QJDEGNbvgLjh3HSn6L7VCi8tFPWZGXo8i7EnybAUceXnobrE5u5kXeMautEDEX6KzmjUV9U8Jx",
  "key24": "45RFCWgaa8MyrL9EFJYzsMZDiiepWiYaVZcFUhyRXgmFXcjF3q8AXccqUV677N6PpEQ2fr4zMEovmjbUuDfrfjDj",
  "key25": "3sGbCqP6TVhAEdjBMWieFai37DGSh8xbVLYWcUpLsqHaurg9Wx2f3KSFtBUDxMctmkoDii4BG3zV5ksUkyRBJuAz",
  "key26": "26o8nqXC1YFEu5RJSaBaAvDt5jWBGf85vca5prRxfV4bCDRXiuyWDgDsLSYw6EA5Jk2PddQYJDWQHgDN4ngZAfry",
  "key27": "bBwsW5beizZ7ZusKXJ5sFAPLEP8pYgAjAiA3TWvHFeUCxy6Ef5kd3DtZYE2hkeyBPGJP2EAQwfRwrgUDSDhVoqH",
  "key28": "2YZWp8rC7xBGx2rUFcGQs3ik9Tgs8NSrkNgTePzHLTVG79enBgRT76s5LDa36jM1rqYUe2T5pHJHFqeHGPLU7aHS",
  "key29": "DXTqWyXoyGbLMjgqCw9pqzGKW6pjHZfLCSf8ctBaHXH6CvxJXnBsM8GMQjuz7g9UyM1aFN5Pc4xeGd37UiYsg5V"
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
