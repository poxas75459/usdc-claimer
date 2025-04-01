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
    "3youTskYS3DuN1UAZbdTxiRDHgqeKP4hnD6cNMf9nxnPAx1Jbh5uuJdETzWYNm67Tpe4v8TzYqVhDoCvJwqD88vv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QzdMvxQEf37hAEkX8Hy38cwsNQkLza1FFQG2LTVuARAv7yV955o7JDs5CbFbgrodsM8BZcmBfY4hqPbgi4oVKQV",
  "key1": "5kErkNsNwyVMKzNEGx2HiFDbXheAYbcqX5v3JXe2UuHz58rWiFPRDzX65rtoRothmoctjjw7kJPeevWwNZ3r9DHM",
  "key2": "3PDzLVc8HQKQPzxBFTntWDjDztG4A7axamzbgRLYTHjYorEDboVCVAtUFCBE3igGN3st3CdV5WamwMzEFrF44JSw",
  "key3": "3djeNnxeu1wDxXD7hvdgTqZQj5NYFB3YzG4v2WNo8nhcCqUViqaPo8F2bWWzXfP6P3AXEiP4iBckf5Ubds3yxbCH",
  "key4": "ScwdLkoh5BiMGMKnFK19tcYjEwFUXSf8wCi2UgHf3E6T9LuNFS6A12Jiq5mBddzDdgncrRjBPev52VVpx5eRaV2",
  "key5": "43VxMcB5GUjiZQhEFofhGW9RFMBTyRyxta9m6c3GHEfg9naTLyRCHXvxQsf5cxRFYVf394sGXf2TYWeWqTnoR4gm",
  "key6": "2875i2YjqAYUZQSijgXwrkDsnkw5NoxGxhm5RH84ndtDQjjJU1YMRXSnv4JskrdqpDnWNmKHH9KjRywohD9Wr24s",
  "key7": "2ovnc6SZZFaM2tzcB98Uy7rdfxjfBQmqTsVZLmSvaZRgLZWjmJyDazJTC6sGVrfE3C2jg1qSrgDXsyPqoBr5T6qN",
  "key8": "4wBNowHX1CDH6eHq7oT5w9WNLtbZhCJQesdDQHtrtYCK24RcEpJk6aVnWKbEzCyZHT3XCMc7kEuPueNhdeDMC3o2",
  "key9": "4atGrjf3p3HRaCrErKDSq2SJ3J45ptV7HkRisbY8xZsJ3niZUKuYsAoJZjKURL2cPhNP3Cpo4TwF5Ena8pEWGL9S",
  "key10": "66AKxZjkpuLo5YjFeq1Ej6GUCT7wRmd4fzEzjFjGo6AFU9VViCA2LnRXfcMqLzXXiH4TjzcaXhdTKaCe7fTsCeaM",
  "key11": "4jf8R8LBdQrFV6ctHdyBVU5b8x7jWekG7xsxs7q6JienRuiHMmUDqamFL5HXFkXWKYZRrdFAK4wm6NkKfXQgzoXF",
  "key12": "2vCkMr9exrzLD2i2WuTQuPvEGExq4fFj94mJBXAsaA9gpNKh4fcWqddxWW2ZioQRi7jwbRrvvEGGtSR36wMXebcz",
  "key13": "4rpWZggytXg8iW7wP1QaacmpswWMPxpDAjmDfpTV3Q86rAiF5D3uQnJ9jyXCRYLSZc2uMFN5rQ2ZR3TZkLou89hB",
  "key14": "4Beio8fNs3XU9uKrNVfnxHZwDQmBsCX2H6jAkUHjsFx9dYdGbjw8UhavYEEsb4TzMvTrgXrFJTPLbr1a1oYpq664",
  "key15": "2k2Ufp54nDwwfncsjhq5Ah2vWcmPQTx78HyasxzUAqaqk2LGJVShEFoxB2dosD1XkAwvUpieETKVvf8mYFsNfYUs",
  "key16": "43Mqk3UHA2jYB8bhXMQjjQh6Reu5NGXcv4G8pYrEhb7Gn9J3MQQd8iBZMCwvvfdKoEEbgzuvnZUzQavnPs32p9gW",
  "key17": "4YJ7JkPsLLSACWcWmcgsMUu8vad6gxaj7xzUVPfRW23BWn7XyNCoosbREgcw1Js8kUtZyRtqSqF3Z1whDLJA6npP",
  "key18": "3K8Uud95ynajLiUmFVHwMZeu9kSdcz439ZDYhbfXD1SWn61bRtMo39FieoWnVRPP2es6QKKCvZzZv1Jc3ov4s9Qe",
  "key19": "3RfKxPAB3diYiWjCLNjcatY1VSUqWP5317vwTFUcdLp7qviTzuxvmCdR7ZiVu6aHdQpWTF94wByrSb93LeK44cCf",
  "key20": "4WztvBWoHouUzp33hjGB8qPBRUAoZ11KKXhvfy6jFH8fVBsuv1ug4YM7aV8gTYitHkA1hsvVpS5c6hT4zc9pMTk2",
  "key21": "2zNjdxPFGoTK3gjJSeHTxJMFSUqkHnDQvrBNGu9vD4BuKTsQsXTZJivYMZLu3ZPqW4K7ye9HE8k68nCdq9RrtUER",
  "key22": "2XHW8nLNCQkyyFSTwctvi6qMDW5JYrt3mHwxvTBu3NsiZ9RHs9AhkdswBPQVVmporgtW13ULCoZXW7D3mXhRGSvL",
  "key23": "29jbNKD9uVTzbHiFiNirQvhBmFzYQ5WFtgDEP5SruNRT8BxeSwKpCmFKByZJXRzkr4DyA1NqfVi1pC2W55QXon9f",
  "key24": "54bFNik232xsMGd2TaubqWjZD8gAiGDREXcLdDXsaPFhnT9bGTq9dg2qkBfzfLoeBRgyAu7GkpBJgaBUCCXyCiBh",
  "key25": "3VX65vWb8gP3bGececc3Ktb87P1wQBdtTW9AXbWWYm6LrzHhoTSG57peEDykJb8PZW1yga5yt9qaTJpPriKyQPP1",
  "key26": "2eaSuvdeyM1DxMJcaA4eTYxKbmo8cJf8dNFPbo4nqomLjXcL6CGPAMmwBChK5VajSpGtyeG88yXkR9b94LJjQxXQ",
  "key27": "dacAeiRgryn4WjohiehhJBwwfKcLNyZM1FvxHEwSgDqK4HjE6WbraNA4YBbbNsrw6hyLPXwiMGUxxV4CFiTe7UV",
  "key28": "37rBBDvMS925xjGA3a5zAeGc6TcXb4prCsUgGuq25cnHJtEKgjWk97DH6hdE8MRkwo6YoLd9xQoazddLYVEta5yA",
  "key29": "5kx7LzTZnu42iH8oRQfAMRtTUQmBkZLA6AdsmXMurR1yQB6icARPFWViezAjZMnscjyMnaXVKeYjb7p3Vw73GCeF",
  "key30": "2usXTqsbx527JgXTckYxv7rRTzcUJ5AgJH4JT4nCnPXkatsa44grfkbyLx4SdPpwb4iC3tiddhCyEhb9o4AvXmWe",
  "key31": "61jEQo1Sa6zA7pwQxjsg6r85q7HJJA9NLWcYJSXqspyEqhXso88WXRHqx4hLmV1n76na2K9Gu624zAdiDdytbEbi",
  "key32": "3pGUNPYnP69NY64oozvKCXxGSJtFd97RUmb6UoEgz3eu568DBiDVh6XdGJdKihvR27P45ittEQ6BUsqxhF8URxZ4",
  "key33": "3Jzchxk9jYjKJYmdopMpwNyAxn4GPvyvxSnVd6YfRWDuBy21zhNktw512qYj7FKW1hKJnNkAPURgge9ySvnAWTXp",
  "key34": "66E2PpfvcCVZxweH1jUBP1HRjWj39tiA5jAg1TuLfCqwCCR1Q9rLef97c3uf47AKs5f2sJnKmtDrutweNafuZCKp",
  "key35": "5xH8yfUbzRZMCYSHRJyS6acMoZYpqFDDeHYYmME78mgUM4tZvjfgcsM3SCLy4BZj9SwmqTw3q9WSvg9fNPL3AR8v",
  "key36": "3xHYNB9icR7UC3uz6xcF5622MaEa6yKTFGNttfrPULu2cD8wWwRNsxwimpzXMuGxMhGSHaKNWgtqMcAPShy7APPz",
  "key37": "31QCcvRdFNq3j1b2BMCauZancWS2n3zLFN4b7ftz2KGNC6ffFfK3MkUnsdRfFBZF6Q68RrJSQ36C7MtA3DX5uvCi",
  "key38": "3rTSZ5rFnnw7VpPfJZco256MArm94AYEViDZkaPWGzkhwq31M8ELHxAvQRQCWNgJWtf9Z9qPUABdYKwC4P277Vee",
  "key39": "3Nmbe3N7kurXoB8MXvd8kPFygXzr3zdjAgcxUTPq3HXabfw2GStocJkNsdFAo2ktmDQrFjv4sP1g2FRXx8J4KUKo",
  "key40": "GgtX9DVbSBaMZ5ZoXvCTuw1nm9hAG1M5aSkjrPRbN6auq8mv8WBSJx9eRf5dFmEjSVKswf5dXo8G2265ed3rqYd",
  "key41": "2CHELpQmxqfVtZsCrU2LAgenV68BVMWobbjaSPLAc6H9rmbPHBberzAdrQAJv8npG5oBGuqrR5CSPTU8dZCsiqwP",
  "key42": "nsSxvaBChiKfz5mgC7AunFe4dk3FMeXfjsAywXU1FFLQAgRD4sRhXyBKgvPCo2h5ckyX24L2Qr7sMDD84s3VWTN"
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
