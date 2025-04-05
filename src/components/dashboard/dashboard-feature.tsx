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
    "2uYi44qxpKbMciNUehdFVX57jwxKkf5kBHLTG8sZqeDQsf34DYK555MzpLKAdtmk7Hb4yX1n49ox3k91hgPXziEt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HwxCDQkUQsVkchxVwkQ6Z7c4NM7DpgCoFj9Kr51yPN5jUGTsYgtBLX6gTVFjZr9QKYrmS7SzKQ3xo4jh4bpXR1T",
  "key1": "2qbZfyShWXBr2Zrz8wEfVHDW5Msp2SxBJwvTDJ9fxoA7aJZomRbWoxsEAFq5YW3pWdmUNSNvkk9U38iekwufs5oK",
  "key2": "355bcX2VdUX692HDUEcRF82Gsq2ci3S4CQgAewC124A8CBJ9xSgy7fiRFmNVoCGyaghsWqsQSeqMAGcZQMN3vjeH",
  "key3": "646ZEBUvXj6gn63xoVa8Qm7DEdjMD7UPrvxq953cKQ6d4nb7DgAmfYstPQ3ixLazRDfLDz26xvCzXoxEpVbF3kFG",
  "key4": "5vDahGg6wWn5VZmc89eioZMdEdTnpKuiXJBUnAJDZ68pqkRVLgndLgFGD5rLgvdKq1tMMZr5UXisJUnMy1Z4Xzcq",
  "key5": "3PFXVXpH4w87ttAyT3f38iqvwagAzJWgtsyxHYmmtgLT9cfDqDWmU4E4cdqZNpgaCW2PmMYE6XjNasBDYntwnt7p",
  "key6": "Fw1S6QrWKmREkVrUJFcf19Zo5fCdBe23QzbcDfjvfp9J5gJPRxCQ8uJApa3TT8zDcnxTB3EKmhpfXFWuJ6AF47B",
  "key7": "3p8ZmuWBfDCoLQbYFBspmY5tCNpmeYLJiNDkV1mLrp28PsSAzfA7zcck6y1FnVbsiprSH7Hw6vwau8KKM7pW3eer",
  "key8": "2pSekJveQaU6akHQoZg4HJJDo3yus88AKb8ipP62BiVHXcSMEsrf4pYXpU7kDNeUeF1QMBunRMC4bkoB9HBUtb3i",
  "key9": "3E2YLnbD6wL1S67zQ6XrQgUCsMCrhprH1WmiyqHAUuYFThsEmn1Y8UnHwKjpmq4knmnp8oHrNQXjwJfvmfsGh9t1",
  "key10": "3kNFZhrwmjUcuxGeJyYSPMsHzvDBJptw6B47aKLkk3qHUoFB4vw6UusE3QQDoWyWBd3wnhVp2yQzqw6LvZdvDUmF",
  "key11": "ygedk9F5U7BTveXBNTWvbfaVzVGg1D4TyaHWgYnJGeBSo36tkm49rThF7vYsBpVfJNzTv2oTbdyeUkeqQktfXxh",
  "key12": "3XuWwMrngRKWvupJkZJ1yhbFfu7JMh3TTyjj9rwZc6gxs8yL6KwDjGHjTw9N2MVBK9phzZeibAbfUs5XBwNnHCMA",
  "key13": "4ZY7LkG7TsapuC7vP52nhBVgvwvswRGQu8Dq6j6EHer1joWSGoViUpo1fkqXzzu2KnVkLDsJbvYTzjxghyGjvCne",
  "key14": "L82ftEjvHysV6B2SkQ6f4nxggLofTezxRhC3Whs2JUrHj1aMEtdCD6dQifwCWK8mx3jHbC12CGZEyZYD4YEKHzV",
  "key15": "2w6hPvy2TtcTQ95xUY3u7VYYBgDHqGQ3VNZQBJa9kroEQyr9hYEJGaSXwFmcWYmTBGuJUBaq5sFsdVwpB4pbVtHa",
  "key16": "37Fe9UQ3ZmHzWNFtc294txo7ddoGFRcaJDL8vbY255CReCh2iCA9X8tWihAgDXaCRhKU1xHqTkmC4tbexN9XoZdc",
  "key17": "4hydDm8ZBryNhZCWgNmsiFGNdQkB8cp5zbJsHSDm6P7GqJfSvZtfktoXCZgrWVmxa3insUzX74rTXo41YKHNZ4aB",
  "key18": "Sezx6CTYKAGYQYFS1USrfwuV62StvQJvzX9c2QopdeDqqmQfvtZVJNiD4xeHvt9fy1t8TFf2EmK7S2RxrP9CJsW",
  "key19": "2TRFB95QEssboUJcBqsXTbNRSCepM592qUjwSwKVNP6VsTnHobKwSJXF3hfbUGw8uWBWwJndrjHGZe9yHN1VQVwZ",
  "key20": "3YGF2563Nq3s5ukQaP29edQk52TCRj8TDd7DYp4kDYCgCNFjjANPDiuv1ncmwc1tc9jQNexT4TF7DS5PA77utPLJ",
  "key21": "3VtrSxSvcpNaN2kRTproiwSjPePBqcDtacaCToLz5WSmPwTu3YXiyQhxLnSfiDHQzi2C6WyVHMuTR68BAjCYBUpj",
  "key22": "5AypP6aaFeXr31D9cMCnfzh9nZnZ54bEUtSQfABL1p9o4bh6HhdEptCZzjqNZE3f23Vo6gLgDZEaZpCuce8fNnHR",
  "key23": "39NNkNPNY1kzwxqJCD4mQHtCv32ZwYXTE7XgayUd8W4TtYJe5ZbJpa9b6kJLWXihH3CAZNsCu3Zd981p81rdZq8n",
  "key24": "2vsqjqkDuoYn85SyC9nS8G8bYE2wWz23LaMWmXnSpfLiuV6tP5BTnSs1A55nF3wbuAEm5htW81KZ1jqzw4vGEkAu",
  "key25": "97mKTmLha72uBPLFdMyHrJbNdfDtBBguosMhJfpM8Sqc6Jo93XegxBfTkfwboKKKfWYMP7ZHBdU32VsVUTePNAZ",
  "key26": "fQj4NX2jfibNWpevS7SEA1gyf3Vpb6shmx6J8fUomBNF7ZkaU1RLrmChvb4Nx9LQ9znMUnLcF6mHPDKYwSMLN9L",
  "key27": "49fWQRC4dmYDpzYAzSbVETQb1dv57hSSURtRjVfVwmz6wQhSEsC3HPCiU13MKJV2kDS9rLAMVQxmYsZfvLkJzdfG",
  "key28": "NSqL76p7x2p1pX5k14fBSeVtdREkZWTMk9vvmJL4taBfd5hK41pDc62WexNLnNQ64ZbgqdKHc6UUeceoFtm2E3b",
  "key29": "5tCdeWGDFvrMuz3SiXinszWTVRe6fM8tw3GLUMt2Wv2mvfznZWGa4zxyAWD8aSD6jyax4C99Wx6R3cx19NnTwWd6",
  "key30": "1bXnqb8YhXDFfAKDVNXVDWqizHxqgn27egrsqaaLv8GeeNFPiHBuEtYcxswdYLi3RhTcC43qs9GR9yxztHbbHby",
  "key31": "3mFdgyicWZidWUmWvBeMfB62iUjTT8KJTbwzzio4R5bt8dAE8oudk5HxXk5RdUJsWD3yLYmXXrkfM8GAaHbtuWfP",
  "key32": "4mZrRVYZ6ZS3DY5ZcviD4dMWwfgVW9CrY945wpTWKJrgVUpcQc2Y8LRMWDHtkyDv64d3erBffG2BEJrCjbKbYwAc",
  "key33": "Vc3jXVpHWfb1Wcz8RodMY3rYDnpNznUGB1bWi8aWA7HFXt2HpCRhx8gPneAhWetJBTCeMuQs6umL2bRj2aFKCEb",
  "key34": "onEZLnMYDTJy5nTEGXYHGnvWhCqQoQRKkd12JCyt5XQcNPkknqK14iMJwZcJe8HDNdv5rEXuWd7GT7XCnvum8tW",
  "key35": "4u8hXsdQkDeFyjUNyUamtYiDfBgQEBJLEhJKLFNfDdA1b3gBGdd8j6jdiinTqvwnSxXUieic62fUMtABDszdt4bR",
  "key36": "u8jqEDQJCXMpfG7kjmyGEVXXbmZ5DwEipx9b89sUxTEcinudCYpoghvz7VFXYv1fVL5cxsY2pMSBMLmAhtTXC73",
  "key37": "39HG48BMWvfkkiHSSWig1UvFXo24jN5q2wg1MR6WTPU8PYnJq2K6rmJrbtKpY2xMntwBsGgJw84uxMmYVhGwVC1Z",
  "key38": "3Gwyukpr1P5ZjQnSns6dhrK481wwkU9AJzaKW9omnWXTwknUmabc32iSKGxRBqujN4jQ3yYSvxUF3B4XhXoxpG5B",
  "key39": "WW77J1fYG34xBnb9ih4GGR2mKdERrVUm9bQdXahNBDm9jyatdwSmqA3ddLQ666k4rG9d52AxEucQJKBWE5HPFcK",
  "key40": "3GkvpLiSqAtV6iRZ8WVrDeNMWfPqGCymCNv9UAdkkdWyoT5V6m2RADFPAqTh2icdc1SDHYPADH4ABcLZEW3TGMDe",
  "key41": "5fFbuxL3GynYKvtGQCP1c5yjF1ZdSYunP2dFjGuAgAzcTkSszKAJyxRYT5Uzv8znqnDAukJXmr4mhSapMSN1GrvS",
  "key42": "2xZhevME6ipRdngBHVAXg9zXL9Vg17ACqeNvB6VL3QcwgSoLQSdapiTEK1KjMUycuDhqHRuK4g13vbEfqZZvzaGv",
  "key43": "2isXN4mNPaXofhjeJo1NnRztveS2qzuFCyNxG2ZoMz1Xc1M3HTPUyCwMexAJvdGpMvmzRN6s5wCHSEXzk5Mxr5pd"
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
