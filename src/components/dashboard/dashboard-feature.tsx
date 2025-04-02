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
    "53PfjcDTEPBqogQAo962pJZ428d82YFyCLNQwd41y26bGLrzXATxyufH8CLaA2n5BcTP8s2KxkPiYyaQepV3TGE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rdHLi4ksDToSiEfAF8Mt9hyCBGKGdDQUFstPMjrsdnMsA3pAqNazuZtsn4x5Y4ojshbWkBPrirYEpG9aQmMGk6F",
  "key1": "4yobLodzq8ZHiBTSHCY7oKp4k9ishpnSNxGRDsacigWAM4a7yDcsFP3aso5sthWMcuM1enw949QfpaoxGuneK739",
  "key2": "dQGyXQtQtjRoJ9DkuZX3KDqpjUrKpwfN2RihynWLXMZb5218aH8B6hY9jxux9UvrkS8s2py4LfMs9trAxd4MGPZ",
  "key3": "2vRrzSBcBDzMaspwVjwwumix27KfxEBcbRjCdpk98Tqsm26PxvUsdi8GxDCWJh6DE4uEeKe6T16qNGYUYKfmptKJ",
  "key4": "4hsz3ridokKevTj9qMFAwg3c4FZewMM6FpNvUL9gBbjmZ251UcCH5kQ27buEdXTnQameEQs1xLqfL738VonC5FUu",
  "key5": "4GcamrSHtdCacfViTLkEFWffv4CGn3hkAGHgrrYvy8aRNcvk2RRBMt6UgzkN7BMarnuXC1BukRPwCGZKXiRbDzZW",
  "key6": "SUzqDH6dKxdUdo8Mkc7tofY5YPpSrVe8MixTeWn4sMeq4hr77gzwLAktoCQiCqBbKKvBu9a98ktVCP1mbQ4kLcT",
  "key7": "4MYNmLRNFEV1BtQokxttvfGMFCSk3T55G4VWZrcC1jP3jiizUmwVypfBCdLxS6wQk78xmaxdSEfaS2GDP16XjTqf",
  "key8": "2zWBGukLu5VUwrTw6FjoJXPATDjQ9abkx6CVHZJLiJduxE9iBhGH7tfviizbCVAM5fPmG8t8ysEanCoRuHCM2TKM",
  "key9": "3tt1SVnVp7AwqvEPKjvboSXUofXkmhz3rkDXm1uRSWhsspLbBFqCptTNo9jGEFFv1an7CoS8QjyXhq9iRRWpdzaN",
  "key10": "65UDySRhF242BFoDxT9mvFk1uKmEV8Sdqdj91twFeAezEvDZoWVrUG4mnAY6E2nMqsgSKoy5JRRqYQA6NqANxJJ5",
  "key11": "4QYVc2Rf1qovePaaaahVUJuGdXt531cmDMQym6mNLsgq6u7BJb5XHzcLPYabBLjf2U99wr3WtVzfHKZp8Q4JDFBo",
  "key12": "VknfvZVj9AZo6b7jrukFGvkbhTeANqxpkRPYumVDT57xRyBpiM3RLpEmWhsx6H6BHr63U5yGCi9KB8Eh4fvbS3w",
  "key13": "3Fe1kn7Az8PZVXvGzNupf6rivL3EqfiwAkZVMPd7G41t1kty2dDH5QCmabCS3V6h62qJp1WiN2TEnjAMp9DXSvA",
  "key14": "2Uegtg8CWK755QqBnSPenFteJrvY9GbC3akfVPzZTZUDDR2fZG8oAJWoTdJh36zP5Yd5ev8wcLZ3xYjLXwBFaH4G",
  "key15": "4zXcjTBnfqD1uii7b4RJpdK7gcPjyKwurPY1jfSuvtYLVMekR3koV8huEnz9TUiHU8zb6axEyx4E4KgCDEy73yqD",
  "key16": "2QetiR8LmzdjCJwJVxXZNnr4iHWCWyrYqsXWLchDUSnUU9njZw3onSz4zvfe1SVbYmZ5v53xJz8Dj7VZnJuUrA9C",
  "key17": "2GSjTuDQe8yCb8RR1mNjWugcQjcxazgkab154GdsiztxudYvSm5JrWbBBnfSyRnbMYALoAyuugY8epvMB1dnQBag",
  "key18": "3mH4346L1embB2BQ5QY6MEUxEepk4RsW3QgsSLiTkf4nNGBFZT7JixsYsgJjswVaE1wSWgsSs59kAwx6S9hrLXQ",
  "key19": "5ZxiF8Q4dgor41fJXSM6d9qujpey4Hqd1sYqqXvGyufQ2y9ybYoyJ5jq8LkW8pqbEYLftY43N4a2XaqcutPc6Wqf",
  "key20": "E1Vc4JufG6JwXsSFXnxMFCbL2RRaR1Ud5JWTZbxqKAiBboZyyhYWQhHtnLSrqFbJz6y5otxM52Nj816tToepDcH",
  "key21": "3EpaRMN7Wy616dK7W9SDygGErHcP9BXsKFcQKP9axHJVvqaN1Vv3Qx68VDDhjdxQxbGgCgpAc53zb9A5kW4aKbWM",
  "key22": "38t2QCGKPLF6HCr1KqoSEWarkMwoeqGKGp35qX7C8epus1ZTgbzhTZN9fwYeBXXvnKMbRZt5qCxhfRqvHgJNNcEr",
  "key23": "3xExbgagbAwd692jxm6wYeJ6WNfUTJUy1pW3oN3io4rBwm9Aud2jFKGT9s7sPAWnwsafaYBW8wdemwwVQ7zXZosg",
  "key24": "5ZkoJ6JGRpJyKTSj6uqynjFdp89MHj1i2sKGkgUaWNskVwJ4f7y9LgooZBq6VFWveUH69Qh4x7FuJzy2cPJLJjzj",
  "key25": "2XjSxyPiGHByn61n1YzqaF78fHhMhxXYLvkXVq1TkWwxmK1Qbwn2ad3usSa6p37jmHKnK7ZRfgVg1pg8ua1pwFyK",
  "key26": "4zbYR8RDZSfZ2nnKJXUZnH3bzbmo5oyh7Aaxm7z6aLypV63pDQSbvGh8K7UcrjH83TYSFoXBKPkdMLgg3pf6s8BA",
  "key27": "284Vbfg43dja39KZ8E4vtLAWUNMvsJj4VAWP5za6poq1TCNfrP2febc9nuammfg6rbMx6pXk6jxEzMtz4wuANGGy",
  "key28": "2yRy7q5VFkUe5w8jHSPmDrQWHtP31FKVX82aC1ixfWW1TSr96pwZZdQamR8u1mcCDy4oX3QgwRpqpaXgjnxc3SE8",
  "key29": "5VrYKs3JAopgoQVPTQCTr9PVN9doS3WGPbTgFExzbj89Cs8uv1BiL1CVfFN6h36Cz5cJfERNczgux8a7AdVFPyZA",
  "key30": "Q6GnxQk5Gm7Em4iK6JMFDeG3mBmjXdoDBiw871Zqd7s762kkiyBkXcQh1haVZe9MjCPby3fXvJ987eiu8Z6nikq",
  "key31": "4gjHwxmeNwbAqmt1BQQeixLGMPWgx1b9k3ff21TLYG5RpJAhWYAwPrDF8TMK6Sww7NGRBsZzbVtCuW8bMZF6HaQC",
  "key32": "65ZNz4kycNoEvdMD8fiCpqRNcnznnK3mnATXEv5pn3N3W7d55oyLBhuG8qGKJKcLwBjsnfwM4kQpWwfStWku5x1s",
  "key33": "5Y5W1mqHQcY5LokKSpQQfktkU1ZGV6YnVQo9q966KZePZrpE59v9NjSc5oWMn2wRXRpo5tdUWJmEUZrLnWfhfjCX",
  "key34": "3F6VsVD7KAhq1aBvNfHhk7redQZvkxGhEpcngBqFyEpAVFCoXgLxvHgwfhNBKNgK5v9RS2EdKNhq6byiXJvMdQue",
  "key35": "YGU2svxTFvJNhU6XrV7NyC6kXLVoL9BpvMuTGXtYnAoY45bjCCwdUmVJSnEsFuBjX5DUWRf2FBYLbNriPZrF6WB",
  "key36": "28H1gyuRVGNyySvC4FAiruCbc8LKqG4t2rsFxrVQc5WTqPGBf81g5GPEvVfQ9rrr7DY3unyd7YXaDKTKrbYf4iL1",
  "key37": "2kQziFm5jDj6jWNEgYxNceN31iamGk1opKnMkK9NBrDbDjmQykhLbJHWG2GeXsUKuSXHpQcAJySgjkAmTg3JhuJo",
  "key38": "4trPAbzWwERCCzLYHH5ND3xVgi9wEuq1h1ZbvM86aLvCobSiqYm3RgzgqqqUpfabxmixztAcpmSnUL1mJQ7aZKqp",
  "key39": "qc7iGhFDgYUyRsZcSQw5Aw2RVsMRGepH9jtTcNScbC7YCGorUkBRWBAEsXYZh7pGJaa6Qt7PsSE5SBMjPsZ6D16",
  "key40": "23TxiB4ydEoiZ72HhPWJXqXmLhxdUcn6nkYWf9Sd279TNT3cLNWqynCSkYHS9K4Yzxw9FBukbWfoq5ob8GjW2EWC",
  "key41": "4GznWwh9hd3TtGpeMSF44H1hMoxX8SXtun72ddzG9umW1pQFYYdgxvFArfomW46es8Ap187xnNoRRCNCiNhaP29R",
  "key42": "3q6mSAWiHf3L4AAnBcat5f6guxUJyAnPHEjJqrsLSrCgakkV565iVXmjJdDQp3bSBLgNSMFiUnWrcrQQwz1eqm9h",
  "key43": "3NJzFGr385myoq5H39ksVbyujCmBCtyogvnPMGXx1Dqv1paAiKtrfzm9HhtLyV7dqHd7Fn7c6i3gFjKfyfY1tgnU",
  "key44": "9a9DiaLuKG9JjV7EC8VTRKGfL9t5q4fUAPi9cnDPNciTyD24n63AeKtg2PG2wXTHQqftcmy5bzRq6metcwkzxjq",
  "key45": "fEV2zrG9DN5pTkznveEEPS6czMpirREThQr2VKifc4vdzzE1eBEEXZyc2jotf8xQgCKSQzbAuRvNReXF8vxdNLn",
  "key46": "2yqtR8jTZUdvc8wAPj57tn9uTohzBaTkJ35uhiqC7qEZnaEh6hREuu6n7sWPoaoQHf87Djg5DaQEw1xW6gRCLn9R",
  "key47": "xnVgzTAX8xeeos5x9xgpYD9jLUao3faXQeEJyuXyfy9NPETLzyVi1Mbk255zKr9hQrX3imttq2fNPpVJVg7aHEy",
  "key48": "5GZPA7DfvotUx6NAPb3oDaq5MLV4CPuKho1fmgVVexJshDtx7QfEYz98nDyyEh3pR9LW5Cnsf9BSh5BvvDjUydwN"
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
