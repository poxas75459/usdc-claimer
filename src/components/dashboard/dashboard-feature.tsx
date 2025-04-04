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
    "3x664VfqSnrFUXVTMHF5iXM5Vzrw56Ba6uXpbCmgN33BZd81eLm5mxRRYWfHh56nPBQxjHVJq6bF9L6AACa16q4u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PDGeYYeeFLh9ca5Ewnx4hBdCr4QaE3zqqQ4mrMd2MTFYZdXroMSTpcNXEPw7ZNvGLqnruXrFgbLbMVpo3SLRdw8",
  "key1": "5kxnWfzs6GvvzQMNG5gynwjij5YZNEAnNw3czQBjqMqnDw5eA2wZXWrP1891XiVgmp3WwwfaYC9tRnXK5j1gKfMc",
  "key2": "4XJ8zsWSc61WLkxMMz93unqwTTqbWbNwiNE2dNqdsQkkEPkRh93qaKraZ4BnCKSBHWP8psrXJXX1t4EjweaJa19E",
  "key3": "3WecYYsqVZHkbZrQXqBWs1YtGq3Y8zGLxjYtwXTKYVFke3EtbumgJ73rJcTKB1wXsz8mR2Fuf8XcgRUj8g9kqeuP",
  "key4": "5qfpnruHzxC4SSXbLHnkLjXDPo4gNdAgsi7RvhUWuDnGDbaBxhHZVtTgWBp4fJaey6hkUevzS1xBWWUutGL2ofw5",
  "key5": "5jfhGBTfsx172Tf8wYuiSxuvSrNHSefn7M6dyueQZcxUUXE5mVrFipgxgWYuSnYGHXvTTRYS2MGS98yFZSsnGNfe",
  "key6": "3oYrAyM9kMGHq4GohDcpX1VNjvTbVDJUojdwW61JAotQoFKgFVqYELwwNJYcz5HdD3uH6fphsjuLPtpP8zJVL79X",
  "key7": "4HuzkMBZK8xTNACr65UEKcJvQzNNmeZ8HMSnu7i8AJvG3WY6ok71vjhi1UyqCaSE3F99dQobk8Q6h6Jdi9buBdca",
  "key8": "2Zph8BfaDRup3qhkhdqFADcpsVzsTPnxCQg4C8Tmnd1xQJnKRxqmnJNamDxYyP8SGrfVeeX8PYqdGiwgyFqPmSdp",
  "key9": "4tGaJcmtTmFVP6uqbmX8JtyN7VcsBQ44PHK859YLf7uMXYbMao1SxNtpdpNBwfnXqNo1r3Z9rVcQDELPbmh8RKMp",
  "key10": "4KPMDh7U2rmQw6QkPyKCcBftsn8zj22RbgSva1EYrV5BD1SAKtvzJniedhEMyrZ79v2GxyvMWrquovjGBx2jwTmh",
  "key11": "5XPW2M7svNwTh19W7K5aKRPqU9sJHDmwGUXpnmECfmK7ffQEng6StZyHj78j73ZuMeUXz3qGNAiewNFjTtg2q63T",
  "key12": "jGj4RNeyx2XSohTVSbLgQtR2E2keKAzRjZTPyEW5S5LdpTEqerJwLAow9CkGbP1DuM8MNk8z6pAzKvd3bDWUHqd",
  "key13": "TDv94WpxZD78k2otYRn9VfC4LRmW3gaGkfMNfcUL8kgneDMxAuPEpseks8QfsY8q8bNqppjr9uQF4j41x6KUQYv",
  "key14": "YqJ6DakXkGAj6bkLjNGaT5o34tSigaxCya9SpBpqpcXqJUW1igeQgZp26aaNqnp9YqzKLZZQspPwAovxgRjALjd",
  "key15": "5qEeMQwXojyFoBKVFyVnX6jZXcfj5HMLYFRNrMUmgzqF7C2nYBM2Rfb2DsmN9DecfyAjGcnupXHisPNyXkZk8xQE",
  "key16": "55cHnsGM8GQ5RJRYjNCzeomV2JqzdSCVgdsBf5GnLqdjGKaH9ZXjTNBkjZrcSExJA6n5NPbhhCGmk9rDAqjw4zZp",
  "key17": "56g87dPBCb6tRVeWwKEKWaAiV737YaWo7q1uEXSqCk19Cx1VRYL7qRqf4oQYLynqsyLkenbpr8Wvu9beCAGQBtmp",
  "key18": "4ndxoJbRHyCMPNFBvqMvojJKQwPK2aMhf9xfKdhMYWmgpb24iCCdg3pRxTEc72HzWMiRVvyuxVaF4PqFvvziXixP",
  "key19": "Qw6LsFJStmEM9GfWwX17d67rMyhXyCaTpf6YELQ37iA7UZKTzCRjurkmT9obMw1x3dsZTjjA8mUgNZu1n2BQSSQ",
  "key20": "4Ak2hY8cxoMNQ4LDCAzk1QuDRf1CR4q4CAsMEoTUqkXSPGvVZnGYXzr6fEB15359c3WGFLAqxPQgzhkGoe6Qmm2a",
  "key21": "3LGxsMKsYaxjDJCcbAxwcNGMChGYt9amx6SBgiCyKfsX9j7Ga5qGC8DS5RwvSmXboZsGVTHhDFER4CJLTJjkTBdK",
  "key22": "c7aFTHMRxgdDxJDGBKmP6guiTwe4gvg8dCXbhhMgGTzeHTXtumyG892tcr7KSLRyBphv6ktHMHsMsYVmYEJ6CSn",
  "key23": "YBzy1Zi7mhYbrgC8kDgnpDgQiQJDbhSwe7zDNR9Wq96yaWEKG4ytaHXBYfuGV4UgUwgqyrZy8xSjG2sV1WvrVfQ",
  "key24": "JoPWPNEFWHoXiDHVg5y2WhBYo2Hcofcz7Dk8v5FdLWyWZWTrMkvWQJLLikAJCb9DpDHK1zrx9EPgRaM8vWpoqKU",
  "key25": "4gvBBw9KJaNYdquGkApZBx1PQYmdTvdk7rt5SAwRF91enrgoaTCthtrDLdqh2wr12PZz2r2f6wzdfUDkPJqH4SaC",
  "key26": "3A2NshGuLoSLcScn5oeMae9JtEgi7xasKVrnm2duGoR1DwBxSjxckjiZCeQr4XPoKSnH8EtC5vy973j6GCPRaFqo",
  "key27": "2ELBwqJ5PZFWUZFgEA5BZm64A7xm89DEPHGy9Z7VqwDiWYz5t5ZHiuQANzFnfYa3TQBHViuxN1NYgkW2UHgYwcZp",
  "key28": "4QtdNpA6jtGfb85roGXBXyAZtvFxCi1cSHAi1R3Qgg9GFMk82XXarGdxmpyEbr9GbhVD9ybxURQpzy3qH5Hcb98M",
  "key29": "2RsqbdvJrQrxN8VgEPHeLAhEyUd8QdoUSqwRxh9f3nk2xvq731eTiaDG86UqMSKJqMk8n97XHFMq9kKJyvfEBvLi",
  "key30": "5uCmnB2USoDeFomYg17QATUBhCgsixwvvLJAzshWLZ4caTEmh6tHpXEieTLi256EN5XCqJmsL3XjCHPmKfqVLTTk",
  "key31": "2eeiLoFVt14adMWsp61f9JWFgXtU7AW3GpV196mznFweEyGS4wMXCUASiw7oQgcLJbZKS7rtvBpGXvj6sTK4TzY1",
  "key32": "4mqLjKLHWzXfRYTdUWNxueetm8t1TDqKac18LJ7SNFVBqpsLm7FoeJAUKb2deWcdJYXZvbsQA6KVw5V3UfbxLNgu",
  "key33": "2HVzmAxDXKUF8YnwoSptGHv7NfviJbpGZDGhvrNVefXkacPTP3n117HgSdPp98nMiECkEHQRtbXeSrxNp7AbHdFt",
  "key34": "4JVptjFG3BN5xkBRJvHb2hC3uteZyiBVWvTDvqMKDNcgqQrJ6x9mzYfbrhUNccWXU2imVsDDutNDuwJNSoGfGtw4",
  "key35": "5u9NhzViuQrgtCS2pGza3zBXG1ZsrdX3iocKXHFtispPmX5833ZtKZpXJWz6nLtzYJifoZHxCQKeikucLUvvmR79",
  "key36": "4fR2jed9Gg1zggmEVvZA6ToQ3QtxPJUEtsmQScdfDkwh8q77hXqAiNX4bHfyfchhUpji1ZEcpN1KxWhrhrGb7GwB",
  "key37": "3q2TKs9jzv4UBg7V369atbAsJFy9kRCsJXmJLgtbqchWwqEYE8rXek5YrXkUkQWaTGTNhPQw1zeWMnduK9ber6ex",
  "key38": "2TGNi49rf1dz672igpDe9LSLowMYCZPDdz9neskhj1drttTJFd8x2TBLBYsmZdHPj9YFag3fivjevurQYx4v7PUk",
  "key39": "22npesMiCGmuWfR4a8p6rDa7ZJk7vuuZhJrNyk27MTx1c1ce5TwUsumznuevYxGcFtVmpbUKEBrJWiVHrRPZBEmz",
  "key40": "ZtzqsFqwdrvAMQ9wcxLqLt4VTMVW5EeiLYD2JdRbJYrAxkWxWs93WcHLPVT6cTcFQjdR9NoznmEhe1mNFfefE9j",
  "key41": "3jGVFv616TqWZPf6QxvrjhpW4SWyV4M1edaWd4P9WwQsVqtrHD9deMJ48b3Zj65sHuM6nvEMV4eNDFXfQtgEwNZy",
  "key42": "4d8WdAHPByF5h2PSDPaXkCBmLMujo2HjEdWAmCVMWuUgv3j76hoznhcM15uF2c3a2LGmpg3vKnzZwg93WuRjL1Fp",
  "key43": "5hBa2ZA3qRRyacZr53rGH6YaBpNVPRbpGwGvivgNTh1F1CDYeDi5YeMuozHrMcGVRXGVdEJWNTr7rX8KegoMuT5s",
  "key44": "3rLPU3sgu5mnwkYsPCZSSvjcZLAMzQgAYkaPjsNGyF8XXKcGzjATvso94BgVzisEqDhV5F6142tMsPo5srpaMyA6",
  "key45": "56eFQDUzN1BbugYyGZHf1ysgNzT7ucnwJwUgx9gXpoxbXdJecohBQwBNd9j29tMgwx8riGkp7gbN6njGLoY9kpxt",
  "key46": "4QyKbXDCaPSJR79P9fBq9K8iExsXb9PwCMcCeH7AkNVZSfwPrHugXG3qSPsPCEta7Pb7Hsum1Db2wWJcb9KyVVMb",
  "key47": "54r5Z9j1mCkMUaHBgJ84jdBGyPrJvWQbiyYY6VnsYrEa33jZskd1gKLzeU17QdsQ5LfLFLg8W6a5SkygFEnKU46h",
  "key48": "3uxi2j1D7bTTEmA3HAT9QAGJSXE73WnbBquBfqFYDqXmirBbJ2cnYB32UMgQtB4cTD45cNKe5qdfX12MiEjckfei",
  "key49": "5tfkRp4XpGZz4xAnnyUkDw4zffNguYHD6AB12uaPsNZu6DSn1K4zKm5uzx1LGiSjm7AXYV2EUmU9FD1oPemgj82c"
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
