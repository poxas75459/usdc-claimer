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
    "611iu1j61JTfJVQYSdqXYbax4ZNxjHDGK7FhinP4undRfcjup4GpCnFB85RRtmHDdy6RcK1HE9N4Phzcf1s8Xjxa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CPbC2DXqV3TihyM9njNydW2FSTme7FxpVb3K3qJSPVo8iipPDbtKAcRfkc3SznMNa8N4kupTpqNJByHjaokynXp",
  "key1": "5RAQBqmKvaEEYuehk24MtmBrofEw86wGgYpY2xye8PDP8Uju2LH1ax8i7udKpYYF3hAV92n82tJsgvGEYjQCgBZ8",
  "key2": "56AJnUYYokJXSG5am2cxWDWknN2pgWLbCvBpKde41TtM4LWSTSrhf1me75cUzcskMQ2PkHcp9QM4LdBE3XEAUsTL",
  "key3": "2ouj8EErYuY9cWgBPPDGbs9KWWT7bMuX3YKEBaRjJdyrYD5Uet4fdURcr1mB9eMS9UirtKVa96DGf9od6bSPJuBR",
  "key4": "2Tz38tGHZVYYPDqQPzQKRUUnS4F8CFsEmFojG2JfYQ4MtcHeCehYpfZ1aLxawKYMzsW7z1iHj3Vm3TbZbyeW2jH8",
  "key5": "2oWsJ6yot7JBDZGnvSjLYQULevGdxZCcR4jEjhTYsqups9uxN5eRPqvfHKPYCFY8P2YrpPuMRGYzrqbpxhwkR9K9",
  "key6": "4C6sXdfSshcGnFQbzdNHNZfMFsmpc1ZnQ9YWkWtJgugBdQcxcLDhMHuCqE8eLUdqZFWQBZ3rrS2W2aeSxqwVsZU",
  "key7": "2LywgusJXMvBCqLf7WUuU5hDxLoW5Lnw84kvKZkZAtRFy6sgVzdsNJzzmMn5ARRBVJ8Xw3N513z9nDHDgVa3Z1yF",
  "key8": "3BzFauFJC2bGDyxYS7eW2MkAnHvjtXBYU1KiLYs3xue13XEuYt8puFC67W9AjA8JSnJytRsGTkhpkuzZ4R9NsvCj",
  "key9": "yirWCw3cWKtVUeCaEpqr6T6y91Ru3sDhx5tHACDvuUdEj8H1XZxs38mm6LyjxEJKy9c2tqrDJvDEocnSMaXoAUr",
  "key10": "r3NQ9kDbKYapnXWMC35WERSAr9RnqcWkuzNvabeLwgjvWAo922idLJxVedCX3BjPMmC8S3E5d2jafwPZJmxop97",
  "key11": "3mqWmVWedLCQz6PZ4Arp7Nny9bE1RrSS72y5i9dKwmCCobvjhmQ7eQSmQdYeDWazQECp3Xf9sBEVCXcz4M9Gxwt9",
  "key12": "5yWYg3uEhsCKWk137cXfVwcSqD46km4YQ35vCK6SxT92F2e7jPLiTR2EjWXESfsV2TFBejQda2sAXHwW8yfgYqu9",
  "key13": "ovenaHQ3fxyMCRY3wDcCJcZxxKKERzkvL8wEkKHuXhChXSexWmAmZVVffkGGvpvWjAVybX3WMDeVHq5eTef2m8z",
  "key14": "5wQLKZwttupxvXYXcY1ZBL3u3p8UMcgpLaDcdb8nagTcz8jVx8D5Wm5C8Ur63qPzuTAzyHyXhTu9abg61USmU5Kx",
  "key15": "5bX4yRXDVwNZcbbUxAwekQR7gwBWZ7zBxbwaZPz4i6xToe6FhyAq7VQD97azGbuzaeKGmYh1ZThZuqjNAfPN29n9",
  "key16": "5bPr9xHQzdCxHDDATM9MBc3PSxrWXRGCyKHW4xqsaL7KH6Raq6qmuGhC67CkrbpWUcvqfKMDYPRt7Qee6v9WrN7M",
  "key17": "4aGSbDSfmnGKhXHRvS9aEf9qtZ6XELmXysCZCp7SLcTNk1p7N5jv2QxNyKSPj1vE742MTJm35bNNEGBJAX1ce5SJ",
  "key18": "4BRZXgnBEtobiZ1W6VDuV8CZChrbCFfu9FBkstr4bNj8MwpZpcKvdxxdrk8MnYyNpuM92Vj1Fm9nQ6v2yFELy8zX",
  "key19": "4ka9Jpfk7SrGYSsYWmXBqb2zzxtdHmT7mXht7rZEum4YUYNrW8z5LppepWCdsJaK6395sgi5g1dkjF8Kk7htKQvG",
  "key20": "5NkRTAi9KE7KUsjSJgv9BBfLoegBJbMwG2W1aA4YHwrSEGgBcBrw7Yevv5EP1Joh7YE6zJUU6PCYAJGY5fMztEpH",
  "key21": "5LTkewL3rfNHM75cLqagcZTRhyrTuBQ8T3JtEdPCzkRRmnA9wKK3pU2YFpG6EoXoPhJZtShUuCrJihCC8BReZXAC",
  "key22": "5XvBoK4oJkCZA25zEQfryqgAQtc5rRVqtbjNbe11Brgq1B6eSqJRquzPiaU23KG3859bS6XZKyxS5mrhK2Qk25wX",
  "key23": "1irhtDSF87Tpk85RzjngRJ51FC7HAHGn5ijjJvJYHXvcoCxf9uZ125WMBtwcEQgZiYHntgxS4EbKCpURje5NcuE",
  "key24": "rWC2cx4MD5CMKPfgBo8gCLgtDAHNzKBoLigF8AFBobjNgt4NMUL4EcKMN5iYLWjXuWissoCLXUkvJJf8tA8D5zU",
  "key25": "3ssgSDD4opx2igGVJFZWHLCqKLzrdzrCKuLaVvKmKABAEXn5qdVsGvPSkLGmcz6MoNFxy9UqKp27a1QuTdR55eru",
  "key26": "5eNnbwMEPri1rMJr3vKUKdjiMbV7aRq7DfhijiKWFmgYNGSa26u7sqN8dwLudTsF8UorTQQi1tDYiDCVhUSp8wt9",
  "key27": "3UWAMKbnKXgDXB5X9mgRGmJetrQ3kG5HKLmvuBHmMLq5715Ftd2PeiDCeGFaYe7PsWorB5p1chztbK3AZiwj49Wa",
  "key28": "2oTv5sWQTpEsz2sbZ47qhG7rpqR4BAEwzmna5zTuB29udyp2H2B7MamFfrGCzR4cwzVunbCjYBdC2jP1yXNvQ9Ei",
  "key29": "4LrdHrkiNuLbuuv2iwmsEAEnjRUSHRU36ba9ktbxQHCKsXWd1Cupsi9qiyxgANPaUNcDkUZeREZ5k7f1QxjcxtzV",
  "key30": "4WqcQzKPiXaUbbbdui2nmif311dkjrBeVHrm1qJK7u9qPJKyTCy5aEMqtyrCoh7W2wf467rL6R5DJJikJNmVuDtd",
  "key31": "3n1WJxxSJ8FFj7pMukoep2foEcssMn5aZN55kGx5KTtp664V53vuxQtPW6P3uwfRyvz5ABmye2s7a41AbqPYJ2Yt",
  "key32": "5Yb6kPnVKn7ZuYm539NpzUPnFnxpRJVQ4Pj4Up9VKzFBXGUfPNQKUXFxUQUccswtXCJ3Fki6TwRWDjM3ohBksi9y",
  "key33": "4TKk2dAS1Artz5rrbba3Jj4D4RmyoFvYgnjv6ywdzM3HMu81xTuvjkZpRZG7UXeW2rwURiv9hSfh3qwf8hedYw7k",
  "key34": "5EZU4Kbzsmm4DKaPR97RTjh87DRNdW1ayntfv84q1fy2gvnbgoA5YkFyTkG976TPnVWt5aFReEn313xZ41cqPr5S",
  "key35": "3WSKLWJGCedZeVadKTgnhgDbF6LHPPkBWfuXHN6xwmrCg7RHx7u7UuXXyzwz2MVC5mDMMdQEV1YNGhcFkRePb5sR",
  "key36": "mDZokrLk9xANMePAr5aV18eRU72FU3jdPowJzRWU6BtVeko3KLftTxZ1JyTMDLRJP9Z7u1qtLJJs95hYvSSNEcd",
  "key37": "hcD3Fj6uLjJDhBrzsjzULX7bFbKPTXvQispQZ9RPVqghUr6CXPB2KsMrVd2C7vPW54qRA3UKNNM2A7BNb21qE5p",
  "key38": "2c18o6aPgWAATAZFoEB6LMthBnNuVcSKXNkrgoG2iMV7aucBBuVoFJz5ou88Mth2G5uAp5DpYvWdamxdkGqMa47S",
  "key39": "3TLRHwc5i9HGFxZqopCJHnTH1Quo4jWyriuDASFUD3qqjkEySKZvD57q5vfgBp3Qg3f6KfHZB78GwUVRrYmSpzV2",
  "key40": "QS7WsZED5WPR1XuwRq13rEWdmts31YtmmqrVatKqbrLgZrcY97LjNcE5ejHpwR6dFgerecuA5T7rpLW69ZK42XU",
  "key41": "5p2aX8amPSHhSxKmeNq67mCwv9LidJw8Uq4Mm2uaHXVuqfpusmB2xociuXLPeKbUUJ7SVY5tqSwjydc54ydKWqwe",
  "key42": "4vSEEM546ryXYaXk9YH3W1tkgyDvEbVowwnqUym8vCQZSvWar6rSDemvJhxiX4KsCNqgZS3hjsejD5iCnqz2nMvt",
  "key43": "2W3mTnZ4WU3X4GuvhEirFzd7M9VoyAUBvm4ZBxKSqKApGEHk7RotdLsYNykz5Yg7LPRfHgy1CcjNCHSNq9csEgHV",
  "key44": "3eH2xj9cxHM7Udri7yMh2D7mNsABxERfhDDk7GhBR6LbasgS8VRFp45WFs7ax8kXnCoGpcdJop2fqWvxxZTWjPoK"
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
