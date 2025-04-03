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
    "2M2QaY2P2LFskanUyYLwZKJF2ivxUKSzV6nj3tAuTFTdmQVsoVsF86MUkMWxDrtMHmsJDnq7ZkwHGFWcNhFrDioE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "o3CeXPXf64tiZnEDohXn9q5iupo1QXRjTpwxvJ9AV5PqYFCPwTn8qWuaB4KhBCVskd1pxWAP826oaD5mcLwNitM",
  "key1": "3kLVf3oNftYjxR3rQBsyBjgr6wpxUY9UHUTqKQXfP8Rs5QsBUEe5BwV5Js13RYFFxHMXqYE2Gi6AhBEPzM3mDVa",
  "key2": "3JmCopGM2raiXip6yqeAgNHhj67bKo5Puji38VbdYcjWqoUvNZjGm98rd5uERJiWdkFXzoM1GThwpNPqrG6MDsnN",
  "key3": "5mTPPNKUQ29yq7Ce6rQLAhgd2tY9uwLkpiry2RwQTy8sthcUXJMdVZ5BwKwMRqLeY8NvBdCfbBCHJ5DWiMaSyoJr",
  "key4": "3SRZtgZvyXJJGfnA1mE9He1pMqSUP3iPdhG29HX5qwYZLhBsnUxkT8bLouxcuzHLw4ccz36MzSFYGMSAZxUDWHGQ",
  "key5": "4MhhmCWoWvj43hpKy7KmhSBbNo4MeVghd7ekF3K1t8KxjwvRXzPLc5yhpGoATYXYzXShVRy2Mmp4sXrwBT1Jaazb",
  "key6": "d1qFDKeT7kuZWAYvLrU2ZtxKPkJus5i9xW4UQXjWsuv3xksCNJW1RaiTVpzzwFpWLk3c9XtHhdP3TZMgKaB21yo",
  "key7": "i6K4mnU9y2PoRir7QrjiKFJUoFThHBmGpBCVgo6kFzyovYnf5rpPHrCe8SeESiXbSkTuJPjgbBEJsijbAw1W6w7",
  "key8": "4HZFFFk3Qbs4vgEGEMhdNG6EnBnSqs1cpn2TGGhcV2vPvzUhYEZpCov7Aga9P5Ktetvu7NR4YtwMaLoWJLWaAUCD",
  "key9": "3JNFjgbTUzZrHCxLSJExqJC6e3j6BQPex3T7bPbHFMTF9U3XRRmmupiBtkYcTyEeBUGoPNA1TfYYkrzcoa5KE2EG",
  "key10": "4FMxmzksmz3TjYF6mCHz3kjnc7A2W9R99xvB1yMzvgMWTo9CZDh4GmpGix3VygWaGde1aKqfL9H7mjvnQCRWvH6N",
  "key11": "5byTQYk2khotNuQuF3cDjAZ9LfAHZ3QREWZoMgXqN9ckQdQbkKo8dZV4t5n365XaACxXREbnLyUUd58YFmnDm7Gz",
  "key12": "2W1i1JuvZ4RMfPJ6TvePLXoc1Hfb18WVjf3LekaABXQQNd7TgasXvxXAWTMAw2RxictRxcBs3JcBPnDZp2SxT8Da",
  "key13": "5voojgND1kQ863XGAq49Lz2EEBj4SNp7BbHXuk5jBfYtiFyyaJ7vWN6nrvQu6kSuHcvQvGzB2SZB2JXsjYWFEfFY",
  "key14": "hVT5CbhippA2XwMk4zQ6rFcFavQRzfXWMuG15xTxb1TxrNfk18UQ7bHLjydmPEpMS3RDUnBvX6mwZuNmNA6DpjM",
  "key15": "2sfpnyb2Mf8cayjtDVjSZnZhiWWxsRGqabegevvmbUkFy4Hm4k8htTbRixXW9StUCtQBmH9ZshnXzMUSUfmVbDbM",
  "key16": "oVeKN9meZsU5tojbD6463UrsU8zn6JQUuzGvGD4pmo5jMGftgBkXhFqRiSnir6oc6wuDs6LrBKDum2EtyDoe8f9",
  "key17": "5Po1mnN8T9CWpZdSqWPmtSnETfL6qjNatjRLrNXXeNpLns9P4UdS3BNDzxBxs6mKjJjX7Y9W8HwMZUmhNQDRUX63",
  "key18": "LwcAGzM7syhXvGtFBHFurTXSFCZyoa1EnpcgTU3NQY22esnsjQT1XPN9E6HbJSEzYrHi6oUDwVB2TxAmYPQHTni",
  "key19": "25CC8KKHR2KK7mZT6hBGRmEs9Esu3XfGAtt975XcRUFki9o58jRvRc3a7qYSgN34hjECJKcRPNHTMybg3UsGa2jJ",
  "key20": "4w9R9bUsZPX1Y6wASqA8o5KAzjReLJcTycjRCKhLXieDTP94sfgG6mZ6q9tj8KLF7aCqbKAgwmEs4oPgVyTGVqJZ",
  "key21": "5VRVb3RR4WFUwLxEwhptvrmmtRHF9pDCNGXuVEgCjnqJQ9ti9TLqzBJWBoB7Fme1krpBeLLFAmgQFGmkJ6JTBotD",
  "key22": "59s2ZSgax2WhPqs2inzAUdoFW8eNcFbbzp7VrPzW7X4D5SspmZXGoe2hyh87viDruYLkaTrPGbL4wMLQAhhKY2Ce",
  "key23": "cK2z91X1WUn1BAaVSWgZkbvYvA9HUyTsxyVyFvkQJdHRFtthSyk6gbPUv8Mxp8dFxDSaj94ovudeAXHNEt1LExL",
  "key24": "5sXPRx1kX8qHd9Z7idK5oaNmvdoRBGPxGmhLGLcrPw7qjLt1pMmxgU6xuuGRoNvHVHaTMgjL9YHzq9Q9wzny2sYZ",
  "key25": "4BiB7QW9a3gx4Zn2qz48f4BenbEkpjEfp4nCWd5t8oup8H1ZquYbYN5ERDKReSetQcxipNreRNhoqG72SWUGg4Lg",
  "key26": "6RzjRt9cbEruEjfE6kHGkdQHwJYvdcU7XNMWfbstwxiVoTdsZbw7CxoFizc4kvmFh7n3kPDzzphKT9mMecQF2r7",
  "key27": "4MRxh6kLmoAo77ynfqjxeEDtbs19LRMXfQN1GHcC6CD7Z77Zsboid9GoUdb7HAbR7VAYUhZduwM4bSoqSbRa78Dm",
  "key28": "6419mmgJcSugWtRgMaXtwjCxjw92DFVN887Rd3CvhwJuX7TwJKQgkMVPN7PJJHRd6yLrm6Gr8FNBDSo2LhwVSw39",
  "key29": "5S2U5nm25NJHa1Bkg5Pq85SASgijMAGmaiKtE4zUx84SDr6d3zt2KxuVp9uKSS3RJaF5XCvrKWS78j1BK7D8mUNL",
  "key30": "Tf67tH4XRPGjTTmWApHGjRTs7f13cdMWixgJDpUiM4eSC856WoVpYDEfrEyuvFAqXbe6RarJhXpjXdtkbKv7STG",
  "key31": "3jWSXqFovKVuWHiGN4c2ZmNMW1L93jKMutBPhb7yvMfu75zGq3DsecAYCFp9zqdExTVJ5xezfRDFNfvs4EKda86r",
  "key32": "5KYKHXUo6EcKx1AvyyjZjt4G7SsYAoVkSfqas9vdfiDC4JCAnmPwVziT4TYFqG4xrqYo5veJUZrJK5v6HWv53g6T",
  "key33": "45QDoWnXYt9x2riVeahNVWrnz1YB3siduXyPHjpeYCCWSMAWTP771d8YTRUFtPgCFbSd1xxsefPhcPzXFznx83Ec",
  "key34": "55jonFJopYGjQohsZqBXkryM9D8zUpNPU9mrhwZufEiYAp57J85uvH6wDeL4k4k2uDi2qCXdmwYkfr15wdyFLiLZ",
  "key35": "Txbdns6VfmtD2YqtG4TZoYWSD4N6hb9XZVcgbUDs22H4jgRWYZjutKapTH7mXArraoX2bTAVHquW2u23mwvAwbB",
  "key36": "5CESZxZ9MQrEtLjNvgfZgGMwCuHsj3CLzhGkw4imcxwBX9gtUfT8DQWUrXc7eDnQJHAU5HLUPT7bqWLWFD9Kua1Q",
  "key37": "KNUfFDhDNBbf4M2AgDByZ3e3sY5uq5aBrsbqxCsNANV35vygFYgyhcuNQjBZamNMw6wyNhgsHcs57B18wT3r3AB"
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
