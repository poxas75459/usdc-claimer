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
    "4ZJCZY2SUfx6abDuCfLkQcsCetSNBQiQJVKsjVFWbYqke3TiTxuvnTp2kpmABLJmT3hYf6p8z2nEdfSQsgUMdCAa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9XpbZ7SGkwt3cRZJg7nAUqch9JA8cKdNAvB6LzvuK69Bd9sd3PK2qdxCWqUaQnKiFepVBXn7cLeuVyP2z7TJxtB",
  "key1": "2qqzgEHD2JZoJkMnSuK18FWv1Qo6XmMgvARbmtxsTqAkvreb6Kdx5pdR7kVsMiNg7vR2yxrxTvqJHBCThscsr4VB",
  "key2": "5M77JK4LfaHieqXjvyXvTMHRhTqvjx6YRw2xPbhRCbg2gsehK2peiiU4brRrFLxs3iwe3ja541M6LtxrEDgHVXR1",
  "key3": "5Et6oek8gRXGuwY4dBvpYPUrth6u8LdER9Zhc9M2coQNriBW14ya4Q8LB8EuczrJ1CECx6yiSN6XBksiq3oYYwwd",
  "key4": "5UVhUeFy7ngdHC5vGiUXAFixnrV6pWhJmdPmCAYv3j2v3kP5mEVRxKHQJ4kfB89w2761wFVRKubhet1DcEbMQFo3",
  "key5": "2pxmGdnC6Fjw53HtG8bZxvkiDojPs7tevsfZCR9HTYCE8vEtQBk27yPNwPHQuPZb3mgDnsUAijrcGXpZSo48FCnB",
  "key6": "Xf9WveEWx5NMgJuk44MYyecjTtbhYqdUUJiJJ463R4e8kfzHW8fspULrDwB7woZqqESQvxtdn4YCLrPmjaRXnSH",
  "key7": "2SDgbuiB2jioxCzdGYpTpH4Q9A8QF7urR265FR2qKnij4BDSDPT3jR2y1Vuj7CxDAGiyAZ35nV7JSKMmpcNLzaK3",
  "key8": "5LwtTCRDposkjHusmScfwFxVDJYRvzDfRgTbq7rqxbLkF6jTZsADVsk3MGPQwM9HGk2Gv3XbZt3ZKV8TZzfDv6QU",
  "key9": "3NT5rcxYaZ2JSpW6g6D6sgRhgCpBeRAL4KvGSuxg5yg8ZNfZFZ5eRVXDAeqm9CTe1XLMAgGD6X8vDeYRnEjPueZG",
  "key10": "3jNhKjDrEzAJGV4YbJy9Pxqr71f5DbRw2FcBDjhkfQA1riS6cp1Fy98GywhE54RgFpVRGMopXbCQ2HkRqJMmE7em",
  "key11": "2gKY1PSQbVsrZEv3jZU6GYTGoYQzyz3i4nGTgL9txoP6qNDGJBoXcz17tDJ12vNN3unLAjjoWPYmGUMomacP2YgA",
  "key12": "2RXfH3KJA4iM2pXLYwbGHY2vvrgNWUGyPGMWL18JUEG9szuGs9tqssVRfxRUJgneKZkzsoED8Lh2tQqdMb67WhKP",
  "key13": "5j84mBSDDfyCwMfYzebw863uTF6rHL1M6tPDSKPHWryxrRpkmyp7DQigRVkETPjrVFaUaUNpX8FMEyGp4RpF69Re",
  "key14": "2jPPpeYB7kFxhztLcq3vMoeP74efqLu1QGPjdmceAAv99TvtUT4d4D1tqnJJGC1T2NubiSP426jQHttAo2duznys",
  "key15": "2CiAcMwmgPrwu8UaJPCzpi6km5fS7P4kUNSoACQ5GKaAFCjmAo1XFFx3AGUQu67PWvfqcmBMZy3d1yDnkqBEiHU3",
  "key16": "o3GLPmD7V8R83CqwQa8ngcNE953qKgiKuKvEJog4jGJ2avssKuQviCZ6svYpKWiLuH3ZS4yuQQ7JwLSzYuM2XQb",
  "key17": "2tYBvkdgLjab4RFF61w4URWW9KvFoPtqrZcovoNMgYNKwFpnArkGM22zc4RwU5UcPt2GyYJ752uAQCVhgJAeekPY",
  "key18": "2A36RLLvUXdjaq8AWSbdYMemfiqsVBuQLEdXvV3zwGatcd6wWyCwobKF5XCqd1y4b2ppPqr7NH2u9QgN1mnsu1eV",
  "key19": "9DEiynPUPsU9tuyfC7fApmdHZsNAh9yVBFigr41jKGdWbwGyQakTjoAPTSM1xQoALULNQWQVDVww7BsRU7fRHD8",
  "key20": "2PkoTv2Gq6TeEayggy74nDJM875ja1LLT1KMNRDjX7XX4YH8XSEULiH7YwHd5BNaJRHpvShjvctyBG5DHvQqHtDy",
  "key21": "j51kGH9H1Yy8YJ3gL42Ws9RsD1uTCEGdAN3bDDRE5xEXX4KziCadQBiVMfiTmyf1qtKo86ZfVViUX2gJTcf7Vdm",
  "key22": "5uAd1Bfqsz8nGzUgtkhjR42LgkB4B2uFMQBQ2Zcfpd7riB9kcy9bWFi948HgBftayfbPB9YB1pAcFSZ97g7Bx7fz",
  "key23": "2ZcFAfzPoqZg6BxsnZmz1mRZ2DDB1rBkxmMLKMgoAQp4Zti1YS6dfvgnn4oQSMk3qU7PTgo9Xtu5oUrWpnA4jwdf",
  "key24": "53WD8CiyvZEjCJiiWc5jREb84DiNjtu8CN96kgiYwkuC5AhM8Df2iVz4hcPNmLQLfadzcWgMe79Tcfnoc65vNLSL",
  "key25": "3Bog9FiaFVrT8ZtDJd437NC3qH2wVMZmbrWtpP3NkXJ3SKGH4DWMMx1uS2axi3GHpPLZpms5z7yFUSZ3MDpAsByD",
  "key26": "RTZVqKmugLzXHrio1x4Nwz9epguE9d2Lg9gspWM3HTwKka9UdSkh4gMC1cLN4VGN3Sy1YexR6XLv7QfB7AToXwy",
  "key27": "dJV1Kc8PWKE4BrBmQAZdTKZ99SiSws3jDPVthrrZRhqDa9bj32odhQfnxs1n1AXR7JBJSp2ASrqFHkf4MoAMWx8",
  "key28": "5hiZSaYnTS6s93Wv2JrV8VhsKBGsTgVRmVs3bosbibjUpeHyLpVoKNeb8bsAbbyFtYrNeLiXnDpN7MBZWJjrgwDd",
  "key29": "4WEKt1WqPWDx1Gk6Cw6qZR9pBFs1U2Nf6X6kTqshiQgnT7fuLg67yzzx3JiYvSuw5eMBdN94W8HXki7X54arcFRS",
  "key30": "4E6ZkiheCN4Kd3h1cbjZ4YD653T35pcePrayFLHkWoi8Kr1icUSFcEAYCCEYGGxGa26NpD3XF75Y8Zm8SyyYUNd5",
  "key31": "LdDQtCzbrq8PSqU4iigt2QXzdkf1sD7TyLpCMe1tDZwbnozrSrZPADdG3FBv5mvZd58V3XpNXhADfvUDDciQ1Tz",
  "key32": "5dfTHvgyVBfnwac578XQRZA9WacYnjur7xDWfczx5UPQb3rNhxZfgK9yH53MiH8X7uC9XNLdurELEycnSTLMNwE4",
  "key33": "21PUehvTHGYKhABG6zixvzsT18jqjZWH5JHuTxVTP2ZMLkm5er5LsJPTKR2wHHQUtSC3kP4EF6tJCTx9WZSrCeJA",
  "key34": "Hb74ZYi3wgYJ5g7mkX95HLvVyV2H6TTb2Zd8L4a5Uc1Xou9xPY4gMAZzKmkjhxMvart6LzmCVF8QLw7k8NNCJqS",
  "key35": "4NS8FWXcHoTicRwuXxiJxGKyeXGtEnFCtC3fYqX7AYkQEaQDX7MHsddGpexAuvSsFyiDVwA4AyRVqfd8REtK2J5p",
  "key36": "436vmR4gV1oxK78NSDQVTEEw3wYNxhtMc5gTvpPhVyp1ANMZgiCejaCo5XBu2Qo7u8uFuBsuWqSDntP4xsHREd83",
  "key37": "2zUc5LSchZNPCAVr7C6MLNdJV8QY672L2ZtYKjTBom7idKq8xPHgm462sNsDAmTyKswF54cFbyR6m8om9A5jZM7x",
  "key38": "5WtMwRTQLU6EMKkZdQ9ubUtdJeJHhD4toLcgYXNpEwMAWcGDJYbrzpfiJJ3bA1zAvm2jQ1Ws43TVz92TwUp52XQf",
  "key39": "63FuarUpNNVrSfHqvoSKGH2chKBL3UQ3HgrEVwTy5r12VbqurtrQKtNVw65QE4BQbXPRvSELh4eKW63E5G4hgRq4",
  "key40": "23bnam1PUBTiCpGNnsr6FPEqDy8oRiqzTRuDks7Moywdi5A8wofdL9fKH6W11oBBb2M6ZfAUUhbk8hbGYf7pouZ1",
  "key41": "mUwgGoo3B7DpjVBbrdsvXUzKhp4yuYe1bRZu7BVgV2HTtGwLN5q5c4gRPNTHU4mZGqgCQyLb7Nom3boLv16V9un",
  "key42": "yGUEex51JNF544G78nxop72GCQQRhGB4vRiCqgKncmzSBGhgiKpLrktGNojSY697MhoBTFzFP4dQ4gn8oxyFW2m",
  "key43": "3grYX8S3rixumsBE1RMvHYkc6i3tTZCNkMPQhxeLtaS6u5FCucPbq9o3tnk4AV1BXcVA52U7dL2NXtGSsnsSPgwD",
  "key44": "3T9MJ9WBs3vkwAaSD9jS8EXbLTi6meidPsHcd6JmuH7dGRHtho8kDgqgBfqne8A2JnkuvY8rEGV5WuEEfLFZ65Um"
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
