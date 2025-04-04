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
    "4fUxX1rnAWyQjfdQGgvY3fzYLneS81Q4mCYHAKi8T4HcWS7JWesr3v9uiFLCNGqByGDgbqx7QikB1NiuAcoPQLvu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zbSViCy4wVJCQK7XoiGqwFjgtQKZBuLZv85Kg8bQZ9QV48rwawvTkw4miAvfMKitGkUg45vrVnGbteTeikX5Xqw",
  "key1": "34bzPzsr78f6trRQeWUi5UFf4kq5hofXrgBHVXFwhM5gTXcentHnaV1KR4CiX86AiCGqDAyWStoTr2YpgDyUcaqR",
  "key2": "3gqZEBiKchQQHCm96QZEmMMLzNu5npHgGmCxXftEoojsBK6Di3JkeVQLa6FYfyMC74cs1TREgs5DK32hixQHuJKW",
  "key3": "3kWaRLR3ZKPAznoH8m2SS5PkCizEV9WYzQBAfidGkAMjq94jaaZRKrYMj19hkZWPRxRUFXZ2c9HVzQvUfZwV7kQQ",
  "key4": "34hyQEPYB8X9yGo8cDhR8FApRDybcUmVMQFtfr5eE2pjbSPeYhL9UWXnBff3xA8dn7uiBub95qqx161DqkeSTD29",
  "key5": "2jZiN5HhUmAPBGkt1LnivngzZree95LxtGwdkTKBtJjT6RSUhQk1VFbWj5HBaNbzP6RmtMAs5gAPL6KCRUatZ7ZA",
  "key6": "279Xfw5fmERF2yAWvymedAD3Co8sZTC1nUKze5gBchg9G3V2b5Z7R3GFLnXYkhY5qLC4KVVY9C7hFU3X7JpEVbGu",
  "key7": "2ovVMJYrZdU7v2d9Rjqx48vGjvgWksPQ4VsfcWqWfWKLCpET7U4UJtenYWEmHjwYECXdR1XiqAXexEHCKZ3DE6py",
  "key8": "5YFcFYGhyMasZYDFC4JFP2PnDVLJXChZDjDVyRzzKEDZik76Pf5VUun53QyfwYAVxPmUDRKRN7fk94YrmN16gUnm",
  "key9": "5b42ChNZM9fhiusyBzeg3MUW9pq3kcXT9aPp6fBz4GGEDazVysLq1zrFLpcT93yBsWKFQr1xN3KWJAxhzTnmKjim",
  "key10": "5YWFdP8ViNs61AE6RnUaizpss31tdFMXSZSpQZcFZw8qYkCoxi5eXM3o5N6nwt4pr42E9D4Wx5TNQKYxFnhv5omS",
  "key11": "3A41sLhSJDnoLWPYHJCbHfScmxjddgppPAHWEvZ4CSY5phSfTw6VorbZj4vrgfaNh5dcHH86KAnyXwZyF1DvBudN",
  "key12": "3LpEA98bTFiZkuj4dKxw1qitDAZGEToe2BKJgZRsUfMVFvhHYevwVdz1b7s8rS19Yeb2qEWrEKLjtbitA67SbJ7M",
  "key13": "2z497eFwWczeNBYuoaqzqHdQ2SMYcZQQ5oV9p1fxPBxJrhBobfYDhx7UM1F1SatByu6p2EdAwSBdKarREUvMHmaj",
  "key14": "2sYGYyeST8LhwXLznAuSPc3EDiBueoBMLuV27FCFYZLw7SM4HBu8uEZ2gGW4REuoVDpx6773W4gUXfqEt7sTk1gh",
  "key15": "5GYRp8AqUYBjiiCy4okwCv5HBJiPb5NVEaKb4G5FoqUwqurwAX3GqzJT2emwtuasq4t26KY64ZaaWLPqkmVBsd5y",
  "key16": "RMnDXpA9ihE89NJTpD6Em1upFR2jYB1zNVN137hCVbE5tUHov7aym1wnJSxj8BwNv2ZrB3rEscZrSJo9bTMvgwV",
  "key17": "4YCxWW5QyrZrgWhgXe4DtG7KMJhNzqfruAwUsKtp3RGr8TTuhGR2iJnbNM22WVE9yrhjVihDQQ5ivWAuCuGU22Gs",
  "key18": "vcHRqCaAkBa9vZ7u7XRkBLBLm69iRqN2yQpY7Fy512cYJf4PwwpBKop9Jed7PhWNwLW7fCMFFF22a7N7GSXi7nk",
  "key19": "4Y1hqhMsfa4skA4gzW17RLJJiHuUfWfuLvoUWyLW8Fe8B5nNbNNb1hGqG27aZnz95R3BtfPenr34Difsw6nSFZQZ",
  "key20": "45CCc2j8c52gemaJEUmL5e4hTXhp8HMRLnnhA28oHyjyKmDvGuWqwsbWmq2oEoiNP1Vvjsq58xMpChsMa7KJ4PhC",
  "key21": "52RViZ89rQuutfA1HLtkCiLxzbosYPBX1HJdaJog5VNhyu2SqnetRbgmZy8pbfnytxgU1FRicrxRokNbzjGnYdsy",
  "key22": "38AeFobVTuVfiHGmPchX6m6tpDiM1MMGdWaQ2QGdoasAjzUAUQqSbyu1Sm1FcAWjpRHu2ng7heDTinXTAc3sm2qd",
  "key23": "31CCevnFxpKZQpqsWJqdh5vQ5N35Um5tMSHGUFymFvDcW8fUx99jiA8T1pKj7eSCHYiShn7YutFc4YGe42GpD2nn",
  "key24": "3VZb1t2VWxwyJ4sDuGRa5ymVQWsn6i8fDvfhAFLxWVfLKYWGSRz58uxh2M8uhjXbyqSfCuvLRoGctMm3yMkLtwBy",
  "key25": "4vNhBkNCakzTQn7sBjwtSkSUPgdKSLBJd7R516XHgbZ8Rb1NEcwoGxZA94aqdmYgK7LStwx74Hmbgj1dDZgVhQHk",
  "key26": "3ZnsCC3nc6PvWTung2mur7U1VsgXT1EWFkshwdztQiJNiosyspUfAViMKwFXUSuqyoxBNhhrLorojrdFtUcpEfZm",
  "key27": "3YwJtxP2GsPhLV8R17FuZ8UqzcEPFXbHqjJeH3rJ9URkRfC9X6ysLUtjd4UAb8rnhY9BdqW8u5ax3rpb2jbU51jc",
  "key28": "617GeXoMg3CWydFkAy14GAaiB4ez4sA7KT4m5bsddbajB9cfLWFLN9QtHRZurB2WQodeu13u43KXTi9tq19fMuAX",
  "key29": "2ysR36TDRRLxjLH3k8kn2d9LpMdRjPco9TgJbFN7ZjjLd7anW8ZXb7B5oRWtrs4AZeuo4MKh2oRscSeTZyMZJDae",
  "key30": "4RTmwMMBeJWfrbZ2WvczkBZakBEgBgppZ7S2PJ2wy1FRfny6GNFsKZmE61QqDSEzJ3sywfj9wPNiQgRJDvivWBYX",
  "key31": "4qjvBHASivoXcWegGKkTzXL2t9AHMjNNZ8E6b98fz7U75EyUsVRWLFwrUZTcc8wtLdmZhNYw1K9Rhwbmn1ePpiLZ",
  "key32": "2p5UbrTKB2ctbFxGJTCD59MPbDJqLnv4SWMEXEE7eXEQRaLcWEXT2cGDthjupoUvBYemaDo3QtgBTJDJpZD1ExJk",
  "key33": "5FtRv2cXTggUorYVghLg8CegxdrThTvoHMApGiZQb7ZA15QjhtbYTifUVpr4D1Sp2NhpAia19NEWzX8aWW4VZX4V",
  "key34": "4frHM5rAL5VNiE3rH8UViMJzt1XL3YEgw7AHa5gynxw1WfjbhJU2yQ3RoQVDJkhKaNvqJG7t8fqrj42Sdx1F2W61",
  "key35": "3Jk4facZhvKXmEPNdWL5Jsm3hyF9SYkbLDHjcHQ5NKUomnYjjp3wP4ch7tETT4XMGiEkApaKQhbz6DjHQcKx4aBc",
  "key36": "gQXzxMpgAUBTBwoD73xayXvCMYhUhpTLd2dxdjPPvqsX8u1stiztmySEVNTYavr9mp1DA2h7Zp8Rq3eDEDMBbgi",
  "key37": "tRoGs4B3zLj4y6GXqQaxJgborvX5Nrmd1AfYgzp6uCzGAAJGm4s4YNaeu7VuZkRPUCQpyxtgcALnQBQ5ZKBnS3s",
  "key38": "67VD6Ltw44GQUscNtr2GiTsBS46dvdQo6FeZPp7hrHzVhHNctxx3bAPzexFuqwkfy5z5Zm5kjBqmnsK2QnTexeDi",
  "key39": "mZopofe6m3XCTkbZECyHwnE3CnELoYKrvg4NH42fLvgxvD5DCLFHqUVVae6Vfb4k6m6RBA64bY1RYp4Pj7gRuNq",
  "key40": "4WVk3B6w2EgRyCCh85NpFPaV6RS2S7UsVVXrMzRXdBM81M9ByG9xTN68YEwwoXha8QVaQLqX3M2593Zceda6w17C",
  "key41": "5JtqUfwQZWWCk4ZKpSAn2CRjV9MzeVyk45VJT79SW83Et8DUo8PJGf8K54CFyvUQDC6yFMvz3LiGL3RgZ9QLyAHa",
  "key42": "5vHDCxLgdBBRaL5hFPF9SZCHzFdfpXsm5MQfmcqJ4ByhpAcanK6fDTn7cmKxo2jHWjt6AFpFKrashtT2DSLhwDyh",
  "key43": "3AnXrt9sxB1w29S3oGAk6PTnFidi7JkhnVCLN7haXPGFLqhSGc5HidcK3k9UAr2sqsdutZdrokKtaNCfqz2douZ1",
  "key44": "3QiLtKeYrUAZ2oBYWdBKxp8QPtFcENhJc7t6RMUjQ3rMfjRB2oRdADbE1mJr2UznG9LdcgwLjhw9s2qJNwM4EZQN",
  "key45": "5xUU4nxHKAY3jRdqVstbpcM9iiDRWBbR5pbxq8CDasR5ACTbBqrywdSc4KTwUTiNuhFRa5ftDgRzUxQzyNk3VHaq",
  "key46": "3yUPuLkCvvKXZAqag7tyB6BsUB2QQPLyWLb3k2vQCJVvdaXrttp6AnaMF4jWm4LSzfRumsTeBFusGrhy8o4BbWUp"
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
