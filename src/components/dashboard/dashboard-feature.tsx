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
    "2YX3RpB4mcQ7PxaXQwXqX8GqHuopR9QdFrxJgqdkY4YrugA36HvAzC4ncJWosZdEWBb5uKfnyGnoxnD4G3gH8Kki"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gFYPnovSETcLB7yriRh2AKCoKLYV9Eb3wCQubpQscSSnFC7EUfQ6rhQ6P5NbKYGYRUxdNynzM1PRg9dTapvzgtQ",
  "key1": "4wbd2K4gf1WcCR5SyQXJ5ikRfmEYiqqCV4H4QqU3qtHjj51zrgAEd1fb5xXV3ShAZtjnU4yQKqe6y2twjJ6bvvYz",
  "key2": "3ucqqYGnmzWfnGEE1E8uZvJGnuCZevy2oDfouFGg6AEA5pFTaXxm3AX5VSaehTw6KGiyCg3bPsoG2Xb8kfrtQZjJ",
  "key3": "4KMRqN5GbnTmdKc6GX2MabAd7KU2EpmoY1A444Qd2ienSjkEaWHHVNRGPdwxdPW4AtNHxJbkEcMDQnPBtb188FG5",
  "key4": "5aty4vqPY1ck8TxhPb98aULWchoC6eXZCyXznppUPf1vhirNFMKGtngPUVaievSyXPd9RHdpgMPV3E4P89ToiSKB",
  "key5": "5uXwEzb4wXqXGN3Ww2nnTC68QV1RmsxUHB6hufPmKmCteNzdCGsbVUqbHU8MSnyDf3dPtWYY2Gzum3hvPecRNN2y",
  "key6": "4eH5PVBJzr7pK4sb3o8ZLsBr3ZHYGjUzo3uhvPqQh5TsSqZ8btDKc9GkbykuCkfU41YcrhFXQtVEtvFpkA34oCiR",
  "key7": "MtjNtccERbYTyhsEqdDuY79nPrVGKSQerQss83qWU6fs9CG4wqxmfDcYscELUSWp3xAG6Sv5mpr7qvSuj4y9Q4A",
  "key8": "5LL77KEAypwfG7qw4NyPW32yf4aVefetVE8EqGRr7y3FJPVH4YQ9WzbLWAuoGq7jFaXbgj7LdJU1vXPthQVFGGXc",
  "key9": "4ducBQCcWBFoEW8BJxkXrtCZBK6NYVwiQFMSak5e4MDE5ow9SXmLyw11iwyThtyyMQC3uwq6ZV6qoJo6Y4PK95na",
  "key10": "v5AgpEpQoZNYujQ2mruyiduK8cqikQgnDvaXjC5QBmMtzo6NiHjkxuCuNQuATcty7ZDtsvnFwrptdSNRjJ67eB2",
  "key11": "3sMcYgr4JbGawgW7XPm1vj3MDdwavRzVqN7w4LrRnjByi5MKT5am68rRxFLJswacrQiP83p8GjJp9hHBkuQHt6bn",
  "key12": "5Gdz9Wn4C8gWkUbhx7YaXE6FtHH6HMSf2HK64oE4kqPQcm42ZSmFFeLnuEVsuZNBgkUE8qwjX1xLzu8pqhMXJUdF",
  "key13": "3VYfxfMemjbrMd8MGcfXyRUVEd7EgHnas2M5aVWPcZMC7RPt39TvEAzjfr5PhsjJHfrCLxozvgLtmcG8hbrZGbZE",
  "key14": "4uXw5owRSsqb3jL413D6qz9dQ3TNWDNd5xFqEqSAAmpWTXHoJsxKemMEHG3XRjZjDqqX5cyAaq6xUNfR2VKw7vgh",
  "key15": "ya5HmKoAUgZQBAmQV8tPkC1R1rWr4GjxBZ661Bo5gieV4bC3u9YtmfQsBLGArjGJToU1wVannG7TBqDUDHz5uAr",
  "key16": "2ocQGtZ9nHqr52o5XUUuATZNu7jUQY9h1M6qoZMJTpvD4n77fpognGkJcGkXvhZihwP6VLJDdQmofJ2RBNVBvM1K",
  "key17": "hh4f4mNXLcHEZFpmkDK43Zvhe3RYshYnzxS76SLCiVBHHzvtH65AoQ118coZyDnxhHxg84dfQpK2HuGE1zfy7Uq",
  "key18": "5ECXX4eXriFk3ZE9WAcuWC3Q5GopDKS6cFsLACcFXVrZhdnaCpKw16ChiMaZpaAfjEpcNaaBekKU3quspMqRqVZr",
  "key19": "5ndnjaCQEktoqKguJa4zfh4r3KTKKRQ1oeS5pmATRDg8cHsQ6hfXbqN3MctC3D8Kp21Hxm2ju83B4hQmDHwGuKMy",
  "key20": "41FkeciuSHQLQL8DVsUdZMSbniJkWWEkeYFhze4rwtE6GN8kgnpAHqxou8s8aFxUS5EkLpqqAswUxsiRV4QeS3Yn",
  "key21": "2TJ5EUx69dxd2E5tQEtrmwRPXT1vaHAbTjVfaiUTDoLjrBDD5RJeekbFyKf6nwn8ngeazn7BP7qagDztsCWxgGXx",
  "key22": "4TtgK5gJggC2Xa15VN4tdGAqy5PKqHDWha8Dn3FCkmoYf1qiRfTboub4QqcrMWGrui6PThiZktUhRTRDvmBhu1KJ",
  "key23": "3EKvpaF2GVp4CypgVmVFw1fZRpXpBo59Crnjfact1jBpDePbLZq2Dp8Fr2fpuQXmvo2wRcLDjthzx7vgP4QS4vsr",
  "key24": "2dhW2fbidEq9HjMyyas7btWPuGKTT3kyKjna4dgXBB5rCSz2GsLJetQiMe5gx79vVBgNvT4BPtQuzqvhPZBMKQxy",
  "key25": "4dEKx2meGor7JTbTfhqG6CcLUiia4a6FWJwMrDhcLSum9SYFeME2fbP34fmGDRgQ1oWmFu83GKuchWDANiNDZ8wq",
  "key26": "56TbVFqY3WRGvntK2WDzndtovdWTrZCKXcoyp9i7gP74NQQZPESizwtQA9vi2GwFq57TRxNmxoU3ht4PZ7U1MP9X",
  "key27": "2HWnxu3ZXaYPe49gPbd3M5uGhVZfGb8cZ2ZfxEZ9YynSFKFQqn4EVw2tZz5Y5WWN53C5Y2rNP6Tsq8yE87s5Pw2Y",
  "key28": "3u5SpZHQY3d5viFyvxCYwAp1xo2FcRUi1eHnigVbR7124gbZYTMjxrm8LsyyFvwPAMc8SqXGZW8eB4z7LSHEDQks",
  "key29": "5txo1FspmBF7KazpAheBXqJqukrtBFGYLdkCCjWUC6zpBU8yJCh69c5y9dC5FDSmKBJbbCpXwyvR52VhPzZY2bxe",
  "key30": "5wTAJRq3guE4GVM3SKt9717Zt86YJDJJQ99tAGHjzp6sPrNrDEwXKnQKwWxdKMP3MUoULE9qQQhrf7qMa8dHpATh",
  "key31": "5stTHbBcH17JFtrJDcbvvdcnzQVWxKJ87vPHoWsJqg2TheeHzPtvGWqYyUDBpHgVhaaoJ9idBPvcmtjTdNuPs1dj",
  "key32": "4nnowRcQxyrXD9soGZCTF3GFhXj5MN8WVqVVqAJZAgGS2HEvu5kY7JEfxaWwzf87UEaE2kwv1DgMNJvVn81BzMCy",
  "key33": "4t1XkdiYfYewD5RBWehFgGqmYw3YP9qSfD7AAKwREbssB5BcTP4EpEPKyCquGp6Cxkj7FkFgZDZEXARbAnMEwDxj",
  "key34": "2iJpnTyysjK8tLeVFCJK4QrEttC2WhEYxbTi6xdgc9VtZvHAAJkE4W52FKcW1i7T6sJC1hKv4v4t1ptMGsAB6e7y",
  "key35": "5WNju6StFLgsDAbgxvJy1DQZX76w1QhzqDYGzWqH8VnCfySx3BBoL91QRiPHhFmZNnfkRRHjTckqXacXkFXMGAiY",
  "key36": "55opR1LeCRyFRo2Awr51NsdfdWoZ4iNRoN78U7CtoAr5s42SqHw1hHH2R8bjjiaFmQSiR2EMxZXnqtxDh5iT6KDf",
  "key37": "8Y6d7pyqA8mjmf6wt5UvQ8H7gX2XFJAqX9E388YSbctEF5jb5XeL1Ko7jAzszaTdrG4z2z5HDxoraPCLWYbpzPG",
  "key38": "5dVEeBaxTPtDP56vswHxyMKVqahRFxxUkJSDsTdG9J6p1kpGtcpGCSn5RcfLSRPQQSVzijx4ZNgviHxzsmhMEGKC",
  "key39": "ae2RBvAnuumBGTpDFyp9Qaa772hNwDNaYiErZ671XBqQvYGMSufoqfw5WEHJQ1NnJaubGtdcsedLNv4PTWgYe78",
  "key40": "3emM3AoY2MXm2828vngVkieyemNbwgRQNrKU5mR6Qrpx5tkDoxDVzkF4RoTro6eSXUsRzZM74knkXmgk98SfFbVp",
  "key41": "21X9FPJPSENqWCdsqZgKAu7noAv9bvMKHsVZu1hEnEyMQRc3xz54Vs3cj8Xmhnjr586aoC4oumzhYKHCxi5iUFEj",
  "key42": "4szgA8snK9uDiUanwBw8uQ9EhqfDACpCsVRUHebhDXzdCKUiL2AZo2x4QdUhLHnpN3NwxGoYDWf8sBvhjrGQnuZq",
  "key43": "h3Ta2f2QLeQZNReVoSXHQYAFKXuYT6mZuiFN371wNSqDPjz88epBrW2WaXuEuADudQAMu7qA8X63kbQj7qjBJcP",
  "key44": "3Wv78PMk4ugHnutKyRNkHSBoPFNPFHEDgVmcoEbTt7RgtnYBkwTBADjPcncH78BoBAV8sm8JQGiFFvxi6si3XZAw",
  "key45": "4KbUTbYNemxLhm9xPYkiYjMw7Dmf9ZyyW88G196ir2kiN1jeFtLUvyZXo39FXoEW2g2VPoCdnZLCNxz4NhoHUqw2",
  "key46": "389wKyJcHavV6Yc9FFTooTu5onduYh8ToXzbWbjuMtXPcdD5ueUXQx3hm5MNFjCZjXwuSgXunou5u42KAcPnkw4z",
  "key47": "4edCSJm7Y8itTrhrUYRroWta9waHJY1kGovrbZ1pgV88niNJH5M3Y6hVE1nXH7UTaJPyAn2C8tPs9MwFqHNdBVqq",
  "key48": "4yyNhYJGFZtykbAsbjwfuXYMzmesYaEGoyVZYuey9DVKUnK6KADNRJi4QPrwhBi7ZU5VgCuNoKjHJGAzLKsUM53u"
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
