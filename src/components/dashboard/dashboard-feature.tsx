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
    "5zFmZQc9VxTtqNgRMLfNXQa2TjJoLnE995SUW6wE8hiEFyjAzktUTE1MwyNGZZmttbXHq7jAhBmGNDFBBJnSyX7f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hHtNcNVwrhMDBbxbmZUGpobKZvzx5rarkiDTK2WWoKouA748mkHR64TBb6Gm89XKrM5GCXY4mvsnomPBbYV2brq",
  "key1": "4PkoE3GTx7WvbmCVJZVnqZTVPPbztAJKLaDaiMVhP1xJGGFPFxqVYZF6vcEMiw2jvyERD7pKEed5tAztacT6dLr5",
  "key2": "48cE5k6YbJ5yWrHV2zUdPwcNGKTJxPPukJUaD3DzSWnF66R6B1sDwvfFbyyHNJ583o4tR7rdwLn5mQKQruCKP5yt",
  "key3": "2KhM6C9g4NMk7aJGVDkMsfns3GzF9pTNCTug3QZ1kVvg4NR8aedzQtA22Tixon2nJcm13Gz9WuCS3wo7eFJMU22b",
  "key4": "4szrMsykUDLbKHr9VwWKfhS6CBv3vKYv6HC2EDUbyXM2BGTgrqrhE23js7yt4cceq9iuP7g2upAfMfCavFra4w94",
  "key5": "3Y1RkDdEEo3JheNsH49pYUHN5bK6FVNuhur1KhE2xNcN5iiLvM2GaKwJsfhb2CSgu2PQrvDmUd5W4fHy71T94JcC",
  "key6": "z1S4zVsz3FS9C5qNo9L8N2puUaXWsQZnJMoTeYaKzReSt2fA3rF7mLUamhEAiKKfQY4RqpJoZCcxbmEACVJdgSA",
  "key7": "36zmSU3LRFdTA9zc85t1EfoPdFcKKMjKbwhqHqhgYKmKbEncEtAYaecAmeWuvJ9xGAUDcnXQzVcTPSJqgxhwZuH7",
  "key8": "H6YaHSZ7WVdFq94DmnwScBbMq2uyJVJ6r4moG1Us7Rb1oHH4f8oXPw28Vu6bLtSP8GAvb1eSNG4pTVpNBkND9MJ",
  "key9": "3GvCDUHWNWW6VznXx2qqmEB1X5M867UZpMSErTXe4L1nc98dqi4UmrsonMaovgaqdBky2r38DJWVxJ9fPbCqmAJL",
  "key10": "QLaQ9u3KDFg5NyC17R71LsJmdwFWGk1EDSFqdwxsVsXzqeXDqWrR44WK79CWd4k9igkwKKQJ4pEnLk8Yk3W5gLQ",
  "key11": "24AVVrsFrUp9HgfhEUTvgWmQeBbe9GVQAvzCrVinJfndxiRtWsp3VF5UHUeSVWdfEm9bNZnbBJ6nuneqgAkcGxG1",
  "key12": "2kvSzMJaeybmriMQyqQKyWzxiXNBuasAdRituPRbjPCXL9WRdD5ryQ8vyV1C7GVHefo9qTAS6qiMS7XqcyUiefio",
  "key13": "2cQY5RDff9sSFTVRGJgqvzEfqurVriCKJrf36ewT3hn6qybRtwN2KambwcYQxHJTNAA5k4EjEp8npQQNAD7DpNNs",
  "key14": "s94LWF5XmPkHim2JnBd3r8ZMrzMySjuEVadqDTo5n3iTZXZdmeVRSPATPzh2TFbVJLLL8pxYnnfDiiSgYkuAakw",
  "key15": "4jdgSo4aDLLUkfQ3ZXmEcP569UfSCGxRBZTNnQQTTB2LPeDZBTbY3QHwyBZwJ1H8TZF5evM5gNVyLNE5EBxmwmAr",
  "key16": "5vxW9wKddLPSTePgGuP72inLMgjZe5MWs8XJEXLR7uWCUimC63BDyMPk19CQbwFJ6zxWGzaZ3NAQyKMGbwAESX8a",
  "key17": "56aK6Pj9vR1zWrrU7dehnG292qCb3bswqg1B4pZHCDsK9JjkRW7HV6a75jGjQWJXC8pbWwzRddSZST9EBty8FydG",
  "key18": "5BhUhKM1C4wTnwd5g3TYYUz4mxFywX8DFVcasZbMjxAJarJ128BKEJQAsriAcPu6cp4FoAekrKCC1Yi2LinpqmLj",
  "key19": "2ESXzv57aZmGY5KL8Cob5dnJe7nxuCr7GdmBUKipP7PRfL77J54KxbxhnVLRyduQ8GEDeGSKa6EZssXwUBkqidQz",
  "key20": "22CiQ4YrDTj6A6gEemKEP3gSuXZgLLQ9RmH1ijqCNg71ii2ESorezpFVwpsbnQXPR1BLXh1dgt1wjn3R62HXebZT",
  "key21": "2sJx1TcazWTS2cokPJ7ggTCfi52cWQsMKMEKcQ3H2EUjTsAzpkCv7LJeHZxN1X25w6iPBrG67MpEDrjGhsAKpk5X",
  "key22": "2TzWzpr6mwEEqVvpKxtBDw69CtXgpWNX3u3v9Q21kqtTtpRJD2HbwWF6znf2B5bu5aLYiqkMjG8SUxz56GWe1rpe",
  "key23": "2yDBog8SmR9MTCttnJJTfWWM5CKy6YvBZkBmuGsesXkhzGWKW2LhRK5XYX2twr3XT6G734z9vkvrT4JqadZypFQJ",
  "key24": "2XpdzWseWbSKf8hHQg4kz4CKm888Jicd9FFy7JbgJdWUXHqoFURJwkRZrdqz69wRzoq17DoYejBbkbkGmSis2QtX",
  "key25": "5KSrii15KwB7F1AP6nmXzmSwJzrWEEGCX5x7zsrL5f6vAXCb6bjpDaK9QzsnM4Gx6uZRzjwK9TkUZZkfwuJF2vGS",
  "key26": "QVCd4ncF8JYov244xCSTAQ6ogFFcR6AxZFLkq1VU5tSc5TpEsaaCpVwtc95GCJnpt3hUvyogsghYQw775VueRdD",
  "key27": "5Y5CbcSJXe3H4N6eUi3tcAxur2PpW4ZdARrzpqjTMtu8awApFvqGe8SminPQn3dbnoRhrBVuEw637ycQTk44uHC2",
  "key28": "2TjVfsuUPgEGWL2b2dTTy757i967SCbterkEDDwg1BHBegCMUNUXeQdctomfcoEsUYfYQ3XHjhb7K63n7gv5uZCc",
  "key29": "2cTzb7gxsGtsWSr5za7hZgp4a77oeptGUJFPiys5FgpC9iM8zykfXWPCfPLEc11Beo9Km5EmHVFRG1D9JWTLJYgV",
  "key30": "BB7Y4Sdj5zyJEhLBjx46f7qmKjHGdbndyxLtJTbifAcMj3hnzoGauhZbweiscgrfs9YX4wM3YaJ3irN8FmXHUzf",
  "key31": "5LMch3q2mczpFb2zj2ZfYrAX3XoLsFE53yMr5761EQBq9FJ3XQ6F6FRytxpn7z4awgCGVUNHK81dpeK3orqBph9N",
  "key32": "4yaQyPJeASeg6ri8qK1ajK5ThcnKKhHmhcanSSz6TAXgaw9WAmLXXR3xphe3SfZbBm9kizdmKZ5tpbLeaFfbkEnP",
  "key33": "3tFGdRToEavrRCAmBghcA7kEtohH4YvRL6uZsgpmXDZoBuZLtqYXiWPfCgejdgR4CGvDZV3MzhfqS5VH1mTYWawf",
  "key34": "2poUPn2KxTHrT7TEaxkSx864fzQRS8k6jG2GKDmpMj98iESyEqrVegN7mFvmn352iQgZiQEfYecnhF73spAvJK7y",
  "key35": "4REtLXFmw5zg7Trg5vaP9TQsM9mtftZB6aSUfdnFL9ukMcTk3c4qjfQXEwSu6va2fvRAEGHTBLBN4BzGAhHRCaAz",
  "key36": "5YAZ7NGEn1sBPktt7ikvYjxULuX6X43c6ECNSSqP2nhNWgG51c3KCaSg87FYrikgCraGmeZBySL1p6evjteYQvoy",
  "key37": "56ZTGXGdbCMsk1K5XqCibRPiN3JzF7Q2tpmX8YXgosU3dvtcwhxh8e4L9cznmYB4rsLHQEDv97pf5AWiRAHYFeau",
  "key38": "44jCNjkbsrvv4SSSKWERGaWNmZcZCETNYawFKrLHU9NpZZvv5PiatKGPzSkPik9Aoi5LfzBs4ew2inaeUMEMidcq",
  "key39": "4rZvbz7NBL2DEkhrRqhEJ9b6ZafisLRWe5aB3d2s76rA4rvL4foKoWT5b3XwbDz9xqEgDipzFUCjpT8n16kyxD1H",
  "key40": "iBjGDWVDfbZuTKrmbpAhmNEA52FasiGFXedcQRyZeffRShW3k7Y6ouoHydNDCiodBnbJB1HPdXRENsxwRA8euYe",
  "key41": "4PQeRwgENfdf1iAYZwMoLmXMZ5ztphZTbNSULwa7vnrgGY51KewtkFKNVSZ7tY5QdLyRwBrbqFzGMoX3aBGHBPcm",
  "key42": "4kAW5QsbjHmrDksyTfVzkJSTXg2bc4VvGeUBw14eVZm1b3KVz4EUuiPE1PT4Cax1i2UFoUxpMeepYdamjoyhevCP",
  "key43": "ZN2x8RWx6zB48zGMfGJGgzMb59wJP6GayybFSCB2TDV6wVbBKWLaew463DEULgff4xTYGVbqBGjbbbVyyYUtuN6",
  "key44": "4m991L3y6E3jVAByczVJAcF3hyahGRcNMS89YueqqSPwACSQEC9iU5KkZu9fAtWp76EcavL2LxQCC74c6tznL6T6"
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
