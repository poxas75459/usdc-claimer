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
    "2D17SKFqzkyC31NxxfQ5MyMZwD2BvugqagecRYxmqmCz4eHGLDkNULVGzWk963AHaBxLX4vt1Nf8u8KJoLZ9GYbV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PEYVRSCSqaTL2YZaJSvpZB2kVrggy6rq2qhbLtmBMCsrkaMMXJwyuvPNgaJTWjngjqSbLWGYsctzUtQeZiuSmk9",
  "key1": "5pZmDuKhg4ETD199UXC7ZEcvZ2jSnofB94webtSgiZ4J1KVo191Vdis3sV6vC6n3u9JNjFbUMgdA5RLxMd8svECJ",
  "key2": "446JtRULJcTawXPxCUT95tbfSX2u2mpsySK5ShQVpdUUYND2aqDLty6sjuLCGL2P7L8rtt71fgd3SinRxuRdVztt",
  "key3": "5E4jxSvWn46XgBZ7SDPMv2qaSXqF3eA4P7avQq6H4SXiB7nVLCEZavfr5BhcNGHPhEs9gpvJ2FNEt281u9tdyRNZ",
  "key4": "4jrnDNdiR1CX7KQXbZ6RxGHFLsbAyHs5ZUAKYkUszdHw1qvqpnFYA5f7bZcZBNn9rees3PWrKvTQETfCvxFnUKy8",
  "key5": "3qYjgmx8D8ALtDqNCdbpCSeHccNCXEC2cUHNAj77k6NRGb8AwgSDUGJwfEjv2WhKErjjuUutdvwgqSS9EAu5t5sC",
  "key6": "3XCKpayvJ3E3L3hbQ2ii8gHNNFPpo48LyugGiEkvDdvt4Ej3h6XCKTmms9NNxwhLtE9PHaiFZZmELVd2preaYkgm",
  "key7": "3Re9eCa2bSDEJgNiYes6V9eZdsDFuGBtjpctZBmZThXXWrVv5B7VmbdkWobhQnWEJTy3Rp6oyw7f5RXZsNuuyi7w",
  "key8": "3e5gRhxEtEJ8ZevzMuFNkGeXcCLB8RrHYcK5YuAvBhMyVSMoE755xH7btcFrufhgvnafJragRw54PpeLzefQzW5r",
  "key9": "LzuBijArLo8xv53YYURVwoCKiNLvd21jeABAptzZUvwAgcuUReGyqQkVV6Kqwcgd2f1Scv4m3zENWVwULr8LUju",
  "key10": "2updnRNUYGEZ76ow9m51jK2We9K867FimoMXAdgae37ivypXdaLptfgfnwJrJcd1xrLXMrKybJNVB2SWDiWmP23",
  "key11": "3VrAfvjLa9wWNrcjg5gznXZbZcacJtSzujgMrnwcBJn9BpQ7Ny1bvUFsng7yxJMYLEyVW1aFdBz4qW5ngshZRUpT",
  "key12": "JLe1ZjecLEcExpjKHQCRAjNMyfsz1fw22ueyaC3gS94R9z82LeutXPAkGL5UJhNuyaxqoGrkWT7h5vuWyaYi9ej",
  "key13": "AypQzyxyvHkGaqQDtdYyQUEuisounJ3KVULgc4tXBKgTYwPs42QpsCC8Sq2VTKpwY9qFXH7mZqRWRy8DBV2xhuN",
  "key14": "tCTBTopMuedHdiqoUzrTYB4xN9LvcwE5Y2HsN6YgL7AwSE6eBpxf8WSnG15kcCvK1Rc6UzFE6mfiSaKqzBZw5ME",
  "key15": "3S1L1xK7WA8kesod41No8WiNTeeeM551ZrsNGyXxTg21AvdbMZYaZNgwkarTkScgSULmQWHrkRdXSgRMjFkpeTrG",
  "key16": "2RLBjz8pPMGekGNB3ZBVZ3Dj8qszCJ3kuXtZ67WqRBddTFMnh1fMePBK69iaM3rDXR9Ymk5LpfgVvxYqwftbvDvZ",
  "key17": "4KzbtRC19tJnkaTiHDRWYAzYU9GG161X1324XWysvisy6Mm3xmLwn1yoYUdcm2CJLMxaRonqYvFs3CzdG7VgWMrn",
  "key18": "1PjFPzFnsa8aL1qLi1F2oN1iFuiw6bZdNFMt2BLQX33cqs6vsF4yRrs13ke8RptJtMAeVZvo44wYTT4QBegwAVB",
  "key19": "4hjGyZi5MSZWcpQNjYF9NTsBAjooNactRvt44b1LH1DQP5BVVNfjjyMkVTvfR5irVXRFLoPo8DTmLsDPXThPdJbu",
  "key20": "36gStjroVyw5vQhNAB8LoijGGyfjRZGXBhDBLD5ke5dok9HeLqJRaA396zqGic91Xwpgie3sex86b6jZRvE5CR88",
  "key21": "3dSbcFjtrjN3meM6jLauJEPDFs8ns3XRjN3rMv16hUtyThbk57AQJseo4uUCymJMh1heA8QCam7zBsQBgSkspcRw",
  "key22": "5Kb1b8tjQvDWVTYgS6hLMg4ehbysGsqDxZWCRajmv7MCu3uZa5ywHvxWd2gxDtodabfrTSK19nFAppFbPoc4HVQu",
  "key23": "Pa5j9NFh1v5yim82Ks3RRtVpg3nU2dcQaA9wgwpoiewjPJuvMkRyPE2hLZfzUik5RSuijaTTgQaGs4RSwKy6R8A",
  "key24": "2UABAfWvGBn719zFTikVg5GQEgQsvjNjj5Yen9Qp3s8akR1PcpvEo1G2t8DohMPrFr3Ly1hZVQsDtgHXTU8X6Pvy",
  "key25": "5gBmnbmeHGG7R1rxsxup5HB7i7q4qxASPzn17CDRA4kHEyPtowXW6QAYU9WgrgdMj6FmL7eiHoSjUbXZnkiYNHJ6",
  "key26": "41VaYLhwcgu4oq1xvSNG4WDDmVzHxxCWp3gKodzzT7MFFVDGpWQkgVbf1YtbsxmSb9uzRktcDJtWCZsg5T1kPbK6",
  "key27": "5XEQZJsrYL73BGkM4SpA4QYxUHZWdQsQcrkq2zS7vX6JJzgTFG3yNPFwNi4Zkoaw66ocg9sobmNiqq3cv6VK8aRT",
  "key28": "1UKdFCAWW68TvBaB9YY3NvcMr6Lu64kPwLnhfqFzzUnEdaKNugJUQjwX81YxdsxxhFRbQySqXZG6ogNpQGTEymA",
  "key29": "b33gR65wiqetqeVen6wYtcKx5faDm7H4C7GHPvqPg1AYkkAYdzwBEcm87n5GUTJGnMuJ8usPFijjwFwXvw362vK",
  "key30": "2kbFrJFMqRhsWszzA3BHZERWrP1WkHLtkjpXKpStJ9kFYfiydK2X7yZN8TA3PtZNFBvYuBSnaAkZXVvbKbnxtFMa",
  "key31": "4s6Nr3gDqTmFjr172R7B1EnyAnyJ9j41QLpMJKHWvfsqSmm2CrW8DsqUU8QddrnNfrHN6Po158jty2CtLnDxf7A1",
  "key32": "2zkPM25EtcCyxhqpZtg9oF7AFNJZs5MrRUbx5dxAfgstvvDSS9pMniJQmFDvDib1WQAVadJWyAzQ9aksjtbuSV2e",
  "key33": "3d9Zhd9qUKTWDEhSrnvnMjzGT7bp7oUn4QWmrf2QmdimwBAuSEFNWw4se9ygjF39vXE7mXKE7z1SJy19ca5ZSytT",
  "key34": "2q7H4F6qjj9D7NYPPwSw7UZxj5qbfZArvaaSa2R6o2Mniy5PiVyUUsmdjzbqNMsc6UxXTr5XHTarsp4NKoupr4vn",
  "key35": "2QsLnDG6AybtxxmypTbnJ7camvWEKbrGiro4qF71TydPdAeGpC74hqDPMubw7zQjV1zF8t4qfRorwom2bRAc1p8T",
  "key36": "4TxY9WFGPDX5XLTnbcJKGQMhPoeLEg2GkHLUWxFnt6EVLkXJFaVLwo9KgJLbfUTo46pWL8rb2vECJ36APqMULGJS",
  "key37": "3gvfYHNoiw7vh8g4EWYwLH9umebk3wVt83MqCZoyKuygNW6qeKCPkT7wzscc1kpYHrn8HdrZDC2sPSRLehqaQPxQ",
  "key38": "DJQXVzA3k1uo9M7cyadf6zAA5sXoksVCECyQghurAkBgpSHDRzvReMXcq7Bg9dW9XFF486qJxETbLUM7UQRMLEc",
  "key39": "42uMrUskJUWM4JgHfi2mAEHPAmfG4f4bm6S13sCzkbWaKKHYfn4my1JmPbSNaJcrtqxbMMBVbQtMqkXeZw4QQoKn",
  "key40": "5RJA9vp8Yqhs3tA2LPoL5KE5BKWR59SSne9nBucdwLYPHuJStjFppsy3AGD9TxHC3BMuBN8qYg4rvjHbUQUqmZvu",
  "key41": "5ME7cBEY9kAHky7a96ybqnFKU1bWRBpN4NhjAsGFEv9jhZJFrscU1MCqv8TNMTaEregESHToGyy9LGpH7ZhnsXQE",
  "key42": "3r4udtaFRQk8UDHNYkTJQxhT7kqszT3XipzYmSv3UKEeZ4mDd2k7hGVSpV7odESUQgPz1MbAfAMiPcYyNZQixMfJ"
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
