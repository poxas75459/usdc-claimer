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
    "5p7AQo4Xmao7g8TepoemFYKuih8vdv5EdGj5RhNvVnuuZQ1YVV3DXqd8zqp42xN9xzbxQKaUvaFaM4WBZ6u4FpGL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Hpth8rFdRbYBYPRjEvEzTiy96yZuXRtETx74FrTjoh1p5mzM6e13P1rJSecHYs6NFoGt9tRvwy3cqxjk8t8iyoq",
  "key1": "5urDTLe4vwwQ3qHNqvb5pLopryiqFbmkARn2P2LqF1qoEyrDb4LEaDS597YgAdMmR6e22EirzqZHdYpiYhDERpzz",
  "key2": "5qDcXATfqb3apohhPjum8yzNZRjM8XM4fnebHHG4Rk8XTJdCsoXmzb1zrctUvGHcxGVeL21xFMYrhUKbtFdGLpHz",
  "key3": "375CRMLe1P3BFnVV4Q3LrfC17Q4vSLFKQnFMw9BAeFVmdkn3rCpKvofPwVwr1EX3XpLTRdSu7MQbAC7HigYGBm7y",
  "key4": "53kWRcbu8prHHYTt4R8G5HGwzcASCqZZmgxChLEzP9fv85kByrQ9dpznuyzuNpamKdoCFV7x4shzLnPMkRfDzsUz",
  "key5": "oeWRtVjXquvwpCgLNgqvFTVrAWVCe6McFyDpuBcYt6KFujH7rBB8Un9zFLkmizW4AAR9xLwwM2XrVRxXih9BFDQ",
  "key6": "4jdey2zd2YRdsx5uAyf6hcg9yLEctcJnVUUq9Wb4nu3degxs56FUQS8r3dGD8Yn4uzMRhhG9dVPgcauPfNAQRpKw",
  "key7": "245o5gHVgpsc179uRoxDibkzJ53KNy2n555xA2c8eKbtKkZ36i3AskJiDtyseLjTk698EkAz9scXdeGq1VjtXdpL",
  "key8": "23YYivD6RCTi18C5J8m7a3P8c9vPZsXre8WML56ZELcWmMKpzSmizNXajHR6ufnGNwZz2g8MvqN172CAWsNdYHEn",
  "key9": "2bTC276tjDAQyiPMWbkuS8NmSf7fEmCgrebz6SJYw9yJLFi9FjfQXq3R9E7oHDV7ZdgFjRyoeaN1f6Ek8HhVHKDB",
  "key10": "ibxUzn6h7bCFnUdzj4ykE6UnAGsFc8DNXN3UEzfYw2Cj2n3nyrFgoZwWJGUvyrBqUHqn5zuqQ4GQd2nzU67wfkS",
  "key11": "2bKCS3aTH3AYSG96CkDMUc7rV8QNmqP7pUiRawJ1BUp1qiUgXzCeNCxxKhxe64Jm5zai8SxmU1GwGPLEWP7zRCCQ",
  "key12": "5CguzaQzZZdGzYC73ET6253RB2fdtkdG1TQyVkchUpAhbdexE3XwiyfutZh67UBbpu3tAXJB6FVXnpd2T8oaqrXr",
  "key13": "3DiHW5KQtRM6Hw99oWAx5i1MA7HsytB8v49J43XBk1CrA619tWWg3zbCNP7wad933T72KZyzSpiB8QZfAL4YZEw9",
  "key14": "2uBYyXf4veSULrfmr6r9MP39iYit7CfKKz9nbAmiWQKX9iRyJgU4Xhgxg7Y2C5CXjuuoUWzYq6Ax39Hvm8HoTFfT",
  "key15": "35ZsDMCTvF2k7RgZQUMMdCcaNkVv1VHueJFQRvM6kMGakfTnS5hYpjLrPGJZWJGs3etVENzCYNGCo7Xofx7z4nqJ",
  "key16": "2PVai6v1Lzho4pzkUpsG4wbXKfp4Y3BoQzY1asXqmB4Wuae9nqj2bYNWAQUfSByuShoeArXMFghuac82RmFzupjc",
  "key17": "iBNAx45XDCCsGtB2xdvNmoNr7u88So69u4rveZrsxf17TMWuge44BeGa1SViKbEoQ76qNzrL2i1h4VeRjWWwkpf",
  "key18": "4HHx5Mi62kGvMD9nmighJGsb6Uvvfx5VgXanS2MjtKJFkkBghxyAmH1RRUza4B5CcBAnUXTi72K7Aj45Sikwg9W8",
  "key19": "2WUVMhpkcqnoLYMLqpBMKAXDpaBH8D1mcyEWFPB5JTofmSkNsXu4yF2QJwrpS85tPrbegVLH6Ww9p4ZiYRGKeire",
  "key20": "1NGdgDVdx6DriHheoB9JWoB2DesgvUS42XYuQHbRX2WjYA9GYreXENNSgFB8F8a5cT7e9SBjN5kyoNvFgSxXStC",
  "key21": "4qmsRN5Pv7LbfJj5ya8sLBpp2aDZfPWSDgeU2KwdpmBz7DVac52y4GXskfrKWPyXjMkKFCo53kpBg6JnStqNhwre",
  "key22": "XCBNYjm2Ta3akzJgU8rNGzAQCoap57mgw1edYNeTSPfHLaU76fqwRUbgBvmbdXcxsFQ7Z1kZTCczZ6zp1eQxy9j",
  "key23": "2bNQrEkrdtY8otTrDbMkFcMFv579F1cYTp8RnG8HE7pgobRvLpsMyYA9b7cvJJPp58ZtJfHK17eE4ELVZk3vhAof",
  "key24": "3bA4iJf2wsX5aT7raA7G26hS3De8F8zE3JErYpfgxyrXLUNawEKMaBU6WbCydg8E5RwMDNPxQfP5KnPnjEuo7tni",
  "key25": "5hvF4jyiWg7hv6WTcrSz65TJ9hAWJFkWhcAw5vQ73SchUBA4qbwYqkHkxK9GZSDBy3sXDhinZTGBaPZYX8AcU7CY",
  "key26": "59yxipAy76GhPGXMR4mdC6PpjsSRuu43feV35bgyMxgTpdQD2ykAexFNTvafvRY4BXXJCcEkbMwVtobRQabnAW3S",
  "key27": "42MFy42omAr2tyMiFhY3RhLgYcNVjta7rn9KHXyYc7Qy3C6f52VcGXx5q3ciFxDbWsqqPfoXERGy2Kb1fac7cMWJ",
  "key28": "3Msb2entJxWzgBEvmJgoFR2GA5aqJYGRi7nmu9f5G2QvVeHAQfFggg426eYawFp27qn7xjV1q9jKfa7MnVE9WTKs",
  "key29": "4tLZhGUMMfxkd7NDAu8ufJAxSHtGaeJ3JEkTeoauWb61tVgiWQ882UNCmWVYyyGmguscgSNaNNVAvm8sde6BzM8e",
  "key30": "5btg46Pz8FUWJktxg7ySWde9fYvvfUArE9V9gwnK4BHy5rEZB61cgwwzwPEEmLe3svrjosRmbu2dbFhrAoMz2nja",
  "key31": "QPpCf4ZGTJb4phPtd8D2cHmzYS2NRGa6w5e7jFZtr3N3UfrQzQhzUoqWz76f3VGN7aw2jjdVbDG9BToBCHBGqFp",
  "key32": "45MiztdULiaXdavtxQjk9ahXrLfJd51wmmhUfMo7N1qSz8XiBaPN9JHodz1UUf4FBp3MNZ9YtXA1vb7YpqAQWQB4",
  "key33": "4iMeyWeFYnw37Y4DoDpBd46bLx3pLB6s7SZFw9YoNsRx9S3Tf8TQKt3pRCtWduQPRqYnCV8j27gw6uLezUyEBxca",
  "key34": "3s8MrBBDRLqWLCo87VBiuagrbhi3wuyUWKhDfdVw5GatqeuoEajCLDPER8Y4e5ccsLrcCSiMnwyi69N9m9eHWKVr",
  "key35": "W8nWkee2gC9epRtPCD1Qi296R7FvfDw7DLVXsv3E6eroNQi8weT9fQnBRDacQYrMA2F7WYHuhiXRx7pS524nW94",
  "key36": "52QpxVHGs82L43zU4HPrQ3A3qCatdrmHHf62chNbQ9heUskoutZ8JJMq5q9Ec1PSHvPKjvNAZQ98E75m6k1x3Vsq",
  "key37": "4iEi9XPtzrvZNzV55cgWtQ5ujkpJVRNCRc5wyT6inzNKqUNfPpHTxESnEHSU3xJuEbwvAQ6CDmisdZjKuRA56Wkd",
  "key38": "545vmzboj2qRsZpKPdSEGjuHxFQTFj3VTFyPUthqB6iHa6zefkCUp1WCZtRPyEwh8gYpbEP1tp6rXCvSezPhqfbA",
  "key39": "2EDi6LVyQetpZbUEBKhVjt6KpCjZcuSAp4o7zfd4M4DCZiEcjxcvTayu5UJ9YNgj3BZpykhkLJz8trEpe9kpLx5K",
  "key40": "jG6dW1rdhwYiFUWPAvqr8e69QcdZP4GXTiPDPe8H5Smu7V5ePqptNHG4mBZ2hFvpFwWVNq7vTtddFb6XoGEnhsq",
  "key41": "8wDc8JSLYsBnoSh1yT8eDYX2ZdAQ2GU394oaxScHD5XPfnYJreQKmNx1fbSVvQNvb8smbhKVv7GXGs4NLoFuKyK",
  "key42": "2wUHWy23D6coVHtMCsigJfsodin9zw8pYjAByUWnLxBy6CtjWnztPUyAoJz5xELrbWKsej2JuxRLUg8HjkRhWqTo",
  "key43": "5gpUR1CPB4Hp7AZZsBHvPDWKQRpwrwmqSABkztKiB9EZgAEQLUc1Jx852zPBwwMh1rd2fRbv8hZqL2FQQm2zedqe",
  "key44": "3MVojGoMd62qy21VjNTsSky1i3M1uBhSb5PbmEqhMNNTXDcgeHVWkJqJZaGV7JEhwScmHN6zTE5Wkf8ScBM3pVer",
  "key45": "4EdgU5q22xzRvWegShiHJ5fP5nor1jRsiZhfcNUA7nzdQ7TjVUrF6XxfTF9Vo7Tf7KZZBcRyjvPcNNWXwCgFVtk8",
  "key46": "49LdZBSCQqNLXNYsTrLwR193kUjrdAutSTCa2KaSDwMjabucLEgYGUykK3Z9JbFCXqefo7Rxymywg9ezi3yP79a7",
  "key47": "oorHV65pHujixeHUPSHMfSjhcVf9s9YYKw9avCYrhKeNgE43Hfkg4Yh8g8UZtxeAQogRt5gBJhRDHyudgcxoo48",
  "key48": "2dXrjgigW1Xyu8kWcoF2dLJcWRKDZWyj667VVCKoKY9cZMcRcDNmk4ygarS9JirxckvxCmiasBRHzWko4deEngdX",
  "key49": "4ArdyZ8aFsPRrAFebFvoP4zwLG5vTqMZiKZb9wLFkTzma6h1Y4AXCRYiRSBtM1CFNx1nCkQZbzw53dJ8jMZgdKHM"
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
