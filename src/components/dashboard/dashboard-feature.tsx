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
    "4yTUZCBsaZ1nbvwddZgyKdTQvXy73XF9hRGU8mCkBM1jHsP14Tf5vVX9tCPasN6s4MaZtBARrU23KmY98am3DxHf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nucjhutvs8CbN1gu3dCfm9KdQ6gnAbcsugHP4iwp8ULmBmu3VPSTpzqWRwmY7BVj8KFBSnRwn54GDxmfsfq5Lvg",
  "key1": "5UGTpxcN4kNiUppbMGJvsT4HvDq2V8w8YkFiSDL3JsLEjfak6u9NRt9vspqfQsr3Zw2Caf7NEyd6RB3DY2YuenVB",
  "key2": "3GN3GaJHVudZjq123Y2Uj973GxR6TFysGrFuhPZ4vsZqF3gm2Dko7aGMrRbNYhiZMKJ5Q5YFWpytLqw3vk81ZCTm",
  "key3": "5sQmGjEQjYCxk9bgYkYzVpBp2qNwF1ywTRdvmbd19AzAgGH6XuhzR2Jg746uakZC8J4oiTwMbP7Xr8cu3T2HHnxC",
  "key4": "2GyrKQtPUutb2hfYw11FMAbtoiFfJcz9oFUBaBEyKytmjm4Sph53Xu71it4V7XK5KK7tM8pimmV5hXGwqLmqewir",
  "key5": "4tqLXsY8SFmtC6dz9C8u8LJ9zQTYQjxwdTXK4zawFarZyTpC3rEjpeSbsvptNPQf2o8AUEj46GzTDjsk2uUmbfJB",
  "key6": "4VAVpi1R58XtHCEpe1uoWoCcRBJANMWa7ib8us6u9WcPRa9VPS8kJoS4xFU2ybNxKMQTqmSXDCtuLQNRF6vQV4Za",
  "key7": "2powYoNSuwY5Mix1S9pSgrkiykJtwqoK2r9GnBnm9tRnorzUnh43QmWKSk6EVnynbQJUm4opFBaHSNQhMYru5F2C",
  "key8": "4Waod5MQj1LyRgBrEDW7pvAWmFAcQ8fNWFp18tv99WYKASY2UNDCB4JzWyZjCE9JxAFFqbEdLxcfM7H8nuRqAwRo",
  "key9": "59jjgtZQz6pCydSWhP2FbR8x2DPsR8BMzjF7axo8yyPH6Wjd6DmFQE9otrdPmALtsrGWH6WKdGfv8Dtg7MXrgChK",
  "key10": "4Eps1LaGGtMZ36k8UDXVVMHC1vsERdgp42ihCTqnkZRgm2iMCC5bdE5irzJ6EC7byDTVLFvNCz1ntx9Shc2irFaT",
  "key11": "2XRT5cS8KGe6nwAXLHgcVrs5sgGG3DvSbZiTpu6u7PXQY2kGRsgbnkU5BS3PPaSQgRnJkV18dxbv8xTdPtup3vox",
  "key12": "2mo5mvFPtGw2Ks339ZrB8caRmZQq1t1pXfgDvvY44fSuTyZFnGAkktDtoWhgRQvkWjNw4TL21tt4svCmLMAQvEmi",
  "key13": "5P57ggCxU5LQ66kQzJXCSES1jto6DtKNstjv3s93hrFmDbupxZijofJMxxA2o9Md6cQcqpYY6nfbg8zGznpjpbJj",
  "key14": "4ANsSy4Bd5MRpXxCFRh9nwBsKqMggFwt545en1STCzzBhro3y3fCWMUor8RHxb7771BuTjn9hHpXXJsTbmmE2kwL",
  "key15": "3HJowdPPKQptQG9xR6JFLdXds265Ha4oQqgT3cBf1zF5YkzbG1z9SgA1npKMoHFe7nTrwUa3f9ySDo1R2EwsnZ7X",
  "key16": "2CjzammVaM8Gfva1ehfqhY67Q5QPBkq4XotVuVJ5oVUkxb6stJsS1R7WGGfswFprov4o2fMj4sexfUZ9xE59fHVv",
  "key17": "2s9yyZygwZo3q6b7kbbFrQYLsCv2k8UQgMtvJyZJEZFC7aihmvUA6v9hQv6vPZiUCkCZwz8eSvRXPynPzJhTmffy",
  "key18": "2JHSpqE5ZSvhx3g3qP8vMWzy3EmJhjTKPMQd3gzGgMMvsYUhvYj183MXduqWyBTorSZikkTYPvbr4Z2kqekENmh8",
  "key19": "5LxgzKzLkz6sa2irmsjC75sUtwZEsqkXnxdZhmZDPzBVeuxASU23QawWBTZvtua7gJhueZ6GdcCVtGywEra3W9CP",
  "key20": "4ekS6s73hBHxWMwB74PBESWjSYbT3UjoHq5Hbw78dF3ihMDp8Vo4qoxnLLNXugayXK97UH3Wk1A6SuquhZQt7MnP",
  "key21": "5meuocs4To1T4f362Dw8tto7RCXbPJMDCuhTeGURVuUkUycxgmbLM59Cm4JYTTwGdcaj62xm4vTgi3sNxABM5Ba5",
  "key22": "4jPSH1r2e8tYyW9EW8t79Rg26BcDURTdyNujXo5F8dCzLg1YX7Z1WjPaiHkRUjGScEm24Xgk1hJcR374Ko3YmoLV",
  "key23": "45NeeQsPobkfmDjYB8J1UoFXukYewJ9abaEfpAVSHcm5JdVRaewujkUzAkcKonrz12gswdyvBeCdyQSGsnoRToHV",
  "key24": "2Cq1tLeGVRFo6zEUc1WYZHoWBTRLRE5xTHbiqPmHyvYfhytRpB2X4VL8FN7D6YrTfLGrmTRM3YYkqkXyt32dXJrm",
  "key25": "29dNkDMndLrmXiujqFJg66uRTHtCAszwfAWEbZLRaD5yddtjFdAD3G2pJw6QvdPMv6hKcAssEM3fTZPZwv1WyeRY",
  "key26": "cmSgwqBbdfsrbwCsdPATHYCC32k6DgXR1mF89w7wagSUybob9R1hMciz4n9fmcv7E6HrUpBdSTb794Rgy7VutLF",
  "key27": "4ytXjVoqCg75mCvB1QLPxY3tXpgr7xCbSzGx4DYiZWDCCMCzGvCvYuhx2N4Xkb8FMKSvt5sXJho1s1WFitYFyftU",
  "key28": "4yBZ1UnURxrGbBNn66a3Mj5onJ3CTF2buT91SbQMsFybXTeew6qFbvVQh3YvjPjxXnrtjiiMW91uHKiVLZ4rthv5",
  "key29": "5GEk12LUNzjC2WMu6gaBi3nhbXMwjZCdVziv3ovMVXnTz9NPtmgNCGaYa9TKR7caKdPtDH1CqFDW4iKKWpLtRbxh",
  "key30": "QdnZi1kzXB38Gqkqi6fzvnqCUNkhtcCXx8nMRE46HSQBYfdehXzY5VAHFVxCfDZkVNdQXQAW926z3NnVCHxo6cP",
  "key31": "4nvMnuTTqhPV1pPAVgKV2GAEMnSjHBmRejK6YhWDgnHKw9oPwj4azbc8W21Pj1KRa4FnSA9AoqwJ7xcUWXZxwZtw",
  "key32": "65HdN3rhT9NR2VY8VVbvJV5FTEBQvGLkYGHzUmtpn2yyTtanK5GG8nffCXGn7oG8RNqJHpdmUUBAGeyvyDKkjpZQ",
  "key33": "4zKCYjRqwpEmUsW3RdKWrsZFHFzRePmWqM9xejboytFPyFxdFEu51YRndj2ttkeadpEW16d9Z5h6RRDUaRUb4tqB",
  "key34": "xvcrTN9666oitfYaHEe4di2HedsYq7NLFJTdqRNZvqYThtnzLYsrZGPiMePNKb5yL4boJTCeMdyFuU28ARyDv9s",
  "key35": "2e9vAKqF9uytR52ZT66TNcsTrB8pgEe3Aacn1PpnbTJvEcNLxMk38jFPgNJiktF4zQPy8sSfdkbCZwpFpwmCecvn",
  "key36": "9RC4H2M6sdDUFPoooozoCUhtgWbfve5S2jmFnC1MnBHfgSCUAqQjDLkwEohk3ejXdpj5DGMfgaPH3xH2RSwxPeS",
  "key37": "3eVXnr25QkDxZPZ4CC9caN43P8JLYSVY97P1EGSRZJYEdWssfvav5SVZoWsjYxWYGLqWNdG1pV87r2ujbxuBTU2s",
  "key38": "U8yBdAoagtkmaG8xnVsEfCLiWXhNhMJ7cupuZWWFGZZCcPbvY8QNtYsy3dcSu9wGMnXUtsKxnwDfHXrcBFvK86h",
  "key39": "4iDVDXD2ehopiG6VLPLCYrmgNnqeAUqrSP5mDbfsMuos5FQ2ied6vyfWXqJEGwxzJp1pssDe8FTKy7Cv2kS1CzBY",
  "key40": "67rowdMFF63tEngjKzEA6n8WEr5N7Siyj2TB41qx7pUYzKjVbR6zofxecBT3MdkNEqJ1t4oTbQnaQfssYi7GGoWP",
  "key41": "5i2zPVCCcN7uRUu7TtruQpUf4q9rM4gK3Qxr1azMh9UYxNcUKv8wWkSTFg2wNJWtToNTRJ7jE2znqkjZJbHKkcXA",
  "key42": "2jvhjHHurSnWKajwTtyV23Erd6ev21DaQ2xKTQVf9yh9uHYfeds9LUi2GxW4FiAEMyF7rPz7no3w3jVSupkb6jaJ",
  "key43": "4F9SJ9oyRmMsXLFeKbKRJcT67cp7riAYpczdz5QpfAu6SsKovbK2QUYKh5fpbgoD3T24do9nXY7eCV6Y43XiNEjb",
  "key44": "2WuuUJE4kyWNs9kkUKJfheB7Yay5JQPpArXib58BXnw5fkk6Q8zE39ZzoG2bduRRS4SZbSVfQDkjVV3XjRTDnFD7",
  "key45": "1thpMJ4MW9ij6mQ4yNyTSjSVmUQ6FLff7ZxJi1jEdXiuyknkhohB8zYWfXHe5gUK6n1rh8XsepVDmxt8LkJunN",
  "key46": "2cd3zXYNUxZue5i6cJvH9JpjkK1iArtew4vpTq6XUQ4UbxbKMtMhTepsGoG2hHPyGsB1UH7FtbTAC28ok5pu58YR",
  "key47": "5eXVDCshVSqGREqcRgCTRz9yNY71ZYod4SRttCa9KCNhsJBstxCgfL88Lk5h3TtnbjCNm3ycnyWTMh34orkvYaKP"
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
