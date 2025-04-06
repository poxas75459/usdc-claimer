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
    "3ADrXtqmvUArDVE1zUKGBUjA4Z5kbiEmhb8HAW5JVcUq68UmLcyxLyqKmYMv2YV4fsBhnGmEb1EdzePPe24k2Lka"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67KvdX8kUzAuyJjQKZgA1GKphs1xNHBCYQJrzd6tRDP4hctJZnAdwsXk8c87mcrWFRWsgZ4Az2MBzQqdpXE7nVb2",
  "key1": "3xCZ2EzS3ycYSQK8wfrfcYjaagyhEqd1oPoqPesCqobbdi6kjXsLEoWmg1WpHuUrVbu3DPq3Mh4TtirfNQSek3VN",
  "key2": "49oxv1RUHzkSUdbhMpFucpeKVrYw5VNpDYotscttrbuqxkK9BhDQXdPqnaHaKXPcVTgFhmf6QMJKVfXLMQRidnY1",
  "key3": "3cLftZ3W9bAznnNQMNh4yXAzDPtnR7akj5Li2h7zfCx67DPbJpN6gDcqe2hjN9TxER9Qbc5XKoA5fyuw7DY9NAXr",
  "key4": "22kVM8NfdF2Zmgs8avkK8VMHv4JZrfrrJHWxzsXyFRnfFz66VuAzQtMbRnUqHRWbbNs7Ff1Cnk8sLA4ytdacyckY",
  "key5": "3sM3b8KFju4BHNjXHKjQQ6Wyy6y7qPTNPC6D79ghAKHozRAMFzoHb7qAgFKRwTBpTqAQdnC2qSvqmAdAx6WRNzfz",
  "key6": "25N8HTJHobUQns1DzAXGiSmbqCXwxTgSvzauNMeN2EjLU1bbWArkVV8ujWVeangM7BgpJDFtoqEWYnvBFbGeWgFC",
  "key7": "3mLRF2jaRuBrtqtH5Xk1Qzm6CUeXKqyaxUQDncFHjpdnu63hFxaxZAmsieQ971jrFM139dzhuf6XqEFatkU31xs8",
  "key8": "2NFt3ZYsHnvCjoNZj4YoY5VJQX845XuhEmBnuP5j2J9DdJEvjwuJoAz9fjGbHodyHHDxn1RXgJQWyC4gYBC8bTLS",
  "key9": "4Bfh83ZYbhp9fyopb2mpvMgwNbHfit4KW4LowS24Vi43ZAY3Ynq3t1Hpbn7NW8vVc5BZbzMp7fcVRNsYeDnr2ao4",
  "key10": "4L6D9dk744wif2mMxVAHNf9WjTpGb4hvdFG1G6FtWEeWbmYySLo8ZvuV1P3VwXa5ZFmErhyZ62y4NnQb2N7ZuWgD",
  "key11": "4RiryivpdKRPxnyZjjvu8REc324vWRL5dE59AwD4G78LTy5QMxY6JtjyPPyFsYwkekScoRjjRYpAPoFPQCvRosUb",
  "key12": "5JFQEPhgtmt6QXfmpS21xsKBFPFkgVpSMBkVyEZz739pNFtQEtuGGeJd34iEXDzXfLJdr5LrUGS1Kdgann4d5a4r",
  "key13": "4Y5VnEyX3J11nrAb4vKStP8yX15TVPDoU9fjWpeo5PWWmLwhjyucvhVCEBxkv7b6a6Hfxby1k69x5MVkrkQUyisr",
  "key14": "4Yer9v7Zr8dEBbakuasPESevVUfNXM7bLcQsiSTohUmZ3piA38PWJuUR9rkQh7B4oKKTU4pg1K8ri6nD9k52yyjV",
  "key15": "kKawEkVoq1NxDoqFhZxQiMHaRoF2i6usnva2F9Vg5Tj6JCLZzi8PpWX683JRECLLuPkjNbMXtYmraq9LCPFDn4Q",
  "key16": "vQg3Jngdb6ZRCsNqFHB9d7boXBFZouaDeCUsbxH3r9ucBwTtaBgTbmKeRSf3fp1DY5EbsecKM1TsdxN7nhVeL81",
  "key17": "4CAML9LkoV96n2g169bSeXrnopZVaQ2GBAMU8FiUTkrmoSp5aizXZg4AEhkLaefSpPXa6guB5z34NDE9FoG8DA3A",
  "key18": "656YCJqKEYs4UZfjGvDBRNawSHc8ZYWKsCoevEKqZEpq5EHbaTZpzDmbGq6kwCJirR4oJpizY6JNdFrccSwFnyCV",
  "key19": "677NQHEZeB9FhDhSy86Z8c8HAxHn54Dc1Jehcr2bcoYuAVJ4SymrFksd2vGRNzve1zm4peWwq5P6g2jV1HLh6kPe",
  "key20": "5nFwkEzL8cCM7h6x8WeAc4hsecribLJpjJ44XmPVNmVd7vvgRZVeiT3pXfkGnXmjZcA9Nkrukd12EE91n6BqJ5Rr",
  "key21": "5T6Ctpd814QCu1qo4Cwyf7Rs9zg3ZMDd2Figg2NMA8kHrE9WLepYiYmZCa7mEeGm5N6SdQuzytYbc64WcXCY3t78",
  "key22": "2KnErWJMe4VrMaJczV3FCJu5qaAcYmQTdYZG5nWjfsk2g3cPcFX77KMypcjF5u2DDvEekRCZ9V9XREZAkDQL4m9",
  "key23": "4oHSoUxAKHBQCsqqT6pjg3NH5RTbwhTqn5QFtPVcWwV7yRPjYY9Beg7HBU5rkWBu5gvEqUYk9FPNFN9nBBhvjDyY",
  "key24": "4swRNHV7VyeZeg74W8LcTBWvcxx2trXZEedK2KZLcAhbHcS4Uoob4NDdGghzDb14d13LrXQr6yLgmUjVtYYG5nT2",
  "key25": "5pFVS3TbiUvxDPSEa93eg8Wz88XZjBTcy479bvSvsnAX5cY7uStjJYArsJUZU75GEwj3nLAS5UkadR6pDzb2CGLi",
  "key26": "4vCFP9XSaMc7wyppiPmcT97TtpZYqdRPy2Fa1MSWc59rnyLNxwpqDZV7oYp4NqBZLYTUW88fufrN5H7WQfTTzZ79",
  "key27": "5Ybc2KQBgraB3hbL4aNxxyptvBJDQAFh6nG1DFyK5RmweUuKi2mjZwAkBHhujqfXJLmQxU3qEWYBdGjjQVSZjWFp",
  "key28": "eh7vG7GAVcFaFxLNE4LdEaAjeouGtg5qkbQg1BRLVEq4BW5nPxjaYpwgR6wjnobwcqaTpfE4gYK7qqc1rLbZihx",
  "key29": "5nWP4GfMiQVD2hy5ecZpZ9fDiyythALF9B3KuhjtbZeAtggbT5LwUHvaUgJmPS5wNzSjsv2UN2i9uPABvV8PEaGm",
  "key30": "SxRZYCVRaPpScTcx13LZNjNHADMdQB4vETioRGH3agQr4qUMvu4goRCRfxoPE7jSMw7fE1cG36SCKLPKsoaEN3x",
  "key31": "5jKDTf8ryoB8xUC9SRcQdzqjMqFNnj5cjpoyJK9WaGH1Vq4Zi4rwMXqXgLuNKyJWMi6W9bBcbBVdVT4ebuwk4jJd",
  "key32": "25GkLRCkHpJoHgF8NrM5Gqg9aerncwvqif1aDCdBqsfAjicQtdHARy3sd8UPjZ3m3onZnoM8iksq2ViDS4um8t1p",
  "key33": "2pjEyqLwYaftjYifLbrSEpi9WyzjfPKZN6hsojcfGGzGYf45NXBwmbfpVc2UL9AbhCdr4V7UB9oXgU1SLqe5uHbd",
  "key34": "4HJfWdvoPVfq6QwkBBZrdR6UuL75VAWJjjA5NLFTEb9QN8Ao56ZymRmRr5KRwXMXbdtHrMAJxurhP26rLH3EBDoy",
  "key35": "3yC5Jkr9CaodCeogSf38st7Y2ojCp5AHKqo217nqS3JQMYPnd5rfMikRawvYj4BtS45ikLq3N9uwaQ2FwYy93KPB",
  "key36": "3vxJrtkzCRGB9hqdbxta3DFW8bv5SegHrsdeu6SdfbRRu2hCSTRkcFDhyTgJ8NAn2svBtEcbcKy6w5Vu2jCoJGgr",
  "key37": "4h6c3inCbrbTkoQ1ErTCwptZnPBV3Pqb8DfKPHFnQMjR71NzaTEMiwu6qZXAPQjAADvje6Pf53G3fUjVgFiqggFL",
  "key38": "21ohJhEEXBKZE9XuJSj7ky4qxb5tHa3CAPXzWYwAqjhzfoMtSSsxHYqQRSdeDJDXAsXgZdCFqYZFM8WbyjvF5WCG",
  "key39": "2GaXYjZdVpR4hsB5gAAQ46QjqvW2KRAovs3H3RHGMV58Eh6MCGaZgUz6yL3ikXmnGZ5wV2nXG8kUkVf3cD71y6y1",
  "key40": "rtYtRw7BmrhQAuuESQhh35b9oUAtGo9Vfn8JCuzAdTbWWeFFEtmbBCzAnnfZBwcFtJgYgyio8t5j4spy5F3NxcH",
  "key41": "37Pwwr2akYisjghArenTd8LfFNSuSy63QbRuaD2a7chKcofq5e9Z7RcqoHVGANgxxxpu5oiKa3GfCCmrZCXB51bc"
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
