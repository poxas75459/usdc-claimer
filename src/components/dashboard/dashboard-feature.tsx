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
    "45RANYyNE3ThkUTChC8C9Awn7uGMf74qx7ixyRMTYqLXECymemopFvK1GxpCNrTz5gKHWtWT4xybo1ujbF1q6jmb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "356YNCEvstNKM5eUSeqwMkipFbC4Tb2w1kCFd33yqgkizzpFJ81j888hrBKzqup6jnxnLvayVwxbi1QBRavW7h6G",
  "key1": "3SYfELt6iBDm6mjjpRsnxaBTzQzyPpu8oKFhSMKUE7HSAAdyUqjcCH7jbx4gs9sFd4YZ8qXC1mrcHSLdy2XWws3p",
  "key2": "3AjKLkxFzwhVr8xa4B4HcgqN2AvuDro6hrzrwa9gTsqVVvLhb54KKt9aCbExbQBadnrFX9GF3Y1tt8e4F2nb7tt3",
  "key3": "53ZSDx8BHcjRpvH89tqktesYdpmK7RJs925JpGMZttxeZo4RrKuNFHNtDEudfpQQC2B4jNPg6s1qG7WvMrTevA2Y",
  "key4": "2sdyKEXgKRZttR1fbJDKErs1894EqCrenJnFDKahX9ugtveQY2acW4wHQBmNbUteDj47xDUJ5YuQTdycoh5uDuam",
  "key5": "35qWnhvSyW4iB2QwCP5mY7PRkgQB5kpYSE8MLu97SrjAtiyTKwyFj7myvGQCAGckA3U5sUQwwrXkvCTXwsRiJo8L",
  "key6": "CqegDV6h3JuqLatSqbzb7WLKqCTDPxkkTP4bLY3jfKAfUqScbW8eDy22QXBKYWLmkMMuj21C8qeeSBKcJiiYGLS",
  "key7": "5Bb6TW5kCcJntvF7FMzUiAKd9B6J5XjcQjoifeDhBuUKEEz39tq8HvwumurbcQUhGspx8YEMF4QUZhdjeeFhMF2m",
  "key8": "5HGuJLYE9tjnUqpXQWjsTcvbdz4sUvsTcndoQr5xceT26tqFrDPwm5B6gbDfvpEQnRUCq61EGDX3UbcxAYLH3EWg",
  "key9": "2iz1KJd95HFnGsSoU9xqKWRaEuRYxwMBYn7nHYNN4Nu21F816aA3LWReTMiCnFD2kmZHmjoUgTTLHqbpcL7XRLo9",
  "key10": "5eV1NcNkdpHPjrEcYXmf28e6cXbebiECXWfmDyCN7P5CvY7C3XPeBjsipZ6jkUAw54d1va1mUQxuoaZ4RYG5HB9y",
  "key11": "BxRGVVTcVXbQ5upnTtzriFBpY2ub9hMCfsri4G57H6KqvLyu6ZC9n6py7bV6dquD2ygtWRaFfXqCsjjCF5KYLZK",
  "key12": "t4hCL1B3whhXmd1fivffVvD5JeRkcDLq5inuDEDZgXKjGZXPpXQPD6GD1sgWk6PktWcMKU1KbcTnGfRNf2qEQpD",
  "key13": "4SqhHtpiDd9LSzkcT2MFWAr4CyLSfPF4j6kzXSCv4AmiwSZFBqGifRjXyfgnQCCGs1GsLcfKdFVF7NgGJK1z54p1",
  "key14": "G5Wz5XGPkCsCteJJmTLvsF3SJjvmWfi6bFQ1b2eu8Yxfpz8ZBWZgJSTwJRr3j2DtTb9qLn22weVjLemqvm6N14K",
  "key15": "4ug6435y7yGrPA8xV1yn6eyayDv2hbXYTVKfhhdW3P9MDahvQ3yiBkuw9U2SodKSqxfQhVfAAvhYX3BkWvtvjaQj",
  "key16": "5SdFbjFr71gHkBGDdrcDxeDAKUHgkpS7RVm4WDK2n3TS4x8cCUcHRgrFFcGG4eQJGXxT8yZm96aRbfpkx1GKVw5h",
  "key17": "4RfCs8G2kwu6nRYw7pn937JZyJarNcj2sx7NZtrezdxc8jgZvStXNao2XSp6xcxFhk2vdivwcAnPbCoue81gX15p",
  "key18": "4gwMaPnbCLcQSmrM8aU79bP5WEeUG7C3mLVgzBYxgAnHEsV4GBSpqDtmFt3UKXdp5fEGhkqCqeg3XhSmWCc2WETf",
  "key19": "3oQGzHVTxgMSBZAWizFmdBbtBpdKEyXjsRExkoK14UtyX4BhcyQeDkSpAJ19q7huqHJbzqDosR4kZU2RJBFCu7Rg",
  "key20": "SnWb3eVuWFu1gEFoT2uJb4n8XBWiEcEq3kz2JejtvDTs9UqWUtRtV7Gk88ZwashV7G3MJ9zpWthhvtBXnKCJhCq",
  "key21": "GKZrSS67imjkf3RzHDmwrDtXkUD9GLVop2f1CoKeJvq2pLmBM7jdQq9iifAEw1XkkZTHXMgFSp66664FXfDoXgR",
  "key22": "Ajhzm4woFNdUVxgrmQ4s6Gap9PHRALZnbhHcvWgX1hWTbdQ8nt1Xdf2uGBK8Fvwwy1Z3fWgV39YcnUDEcwYRtaq",
  "key23": "5zpWxgVyYQEEK1D9xgqq9dBs6RYQ2PcpbaDJXbpqHqem9UnxuqgPQaEmXoUJ3DcqTovb5H6dWxbKHaGRKw6UpbfV",
  "key24": "3esezThkuQVASXpxbx5eb7Y28WKmVkdJHUQyTKSJ1dJ5i86tBsa4KnGGE7VWdqVfHdjwTRrvQVDjzy1u77aHRgeQ",
  "key25": "2QD8fducRHJqfMErZVxPCYi7zK4qn678h8pp2K97Rt1Pteh8az61RoYpzpX4CBguTE67qVsnMpKRyUxSz1noKBQ6",
  "key26": "2ktUMVcV8HJnHYvtrxQ7chf9uyiB1A3S4PeS6KJhnB1tMoA1oasab6EBqAtWFKzAfk41xog9FciWCU7m3B37DmUf",
  "key27": "3KuzUpM94VvFvQexS5SK9cKDRN8TuXmWLdMve3LTU8JUa7RiSLFGQvs57dXgHvNK2JN9cA7YUExA6Ntb4E9Lvtx9",
  "key28": "5MBrEuFDECA2AarAj9zLkVQcr7hAEgn57k2uUmwD7f8oWFK5YSXYCzhxGa8137tWTEpoB3iNSN3GgT6ErqrTRyE5",
  "key29": "3TXvNKMF6iuWhm4FyCWZaHwJ5WJsyEBTApjKumDhzJ57TSdT7Dd3WcRX8gTv6DagGfggo15mrJtU6J2MspkJ9Wvc",
  "key30": "29mHPjsz2pLPCoDMsAKK33qDKemhNeL3m2piGFeJp5NuRpJFfdfpBMd5hrSSdEAk6VJanHCjn6aQqtUSipqU1FpP",
  "key31": "4u6aBcD2AoR327HFewmPFKRcKv7K9KFPESBbnfziKMcw21egf39SXcwTEfXdJ3apc8CJVnUEGYxpc4D5GTUEgnAK",
  "key32": "212V4viKeZYjbro7XYzkbXvrKyJz1k5nVDLqMDhsQRNmAoNmhqdW12HdPEK2hQ5eBFnXEAfJmTWshHuRFFpRhxtb",
  "key33": "4Y1FEmFoSHTbbjGUQUfsSzvA5SfrcTkfRoycTjbztdPCgjHKvg7QgnXa69VCay5rSHpKwKRRjXpLLGBh55puEuba",
  "key34": "5MNXrg1vcboW3tCr4Jd4See9vG9gDD3X21JjoVjujubLCVxVqqDj1g1s7QLvNP1p522tmF3yMNHYNabaKV9LdrzX",
  "key35": "42jMFVHN25nwrecDCEc3psfppzMGHRqDJciH6jWmz2NeeQx7V5coCPyaPEZFFMUWfxRm9Lx6DDEPw1bGpfT3anx1",
  "key36": "4ThAQ1RjoAxCc5NPYfBhLSmyTdanPWZwVSdLQekogodgPBsww7uwkxVJ7TtYJ14bRroFkuYnnBiDTcUhjUEgieNE",
  "key37": "2F2vm9vyg4Bz5XumNboRFQ7PxNrNQcWDYbmYNNmEU4oNGJMDvJpzyxyVezsyofAMeC8hEmyfevqUd7Fkr4Hdvrta",
  "key38": "24X7q13SrrRPLcrDbsm3svUPrU5cS7vKKLxNkfUJYAdUmZVL2ri8EdCcNgDmz8pvm5rt6yC8EF7AazFizJCWPDPM",
  "key39": "4Ab3tbZF2NoyXX6o8w6gnNaSfEpesAczuQRtyvYLUMJLdxm3Sq3zXBkteT8mJxND2MV2qzMdKhYXn11p89MqxEhs",
  "key40": "2xvwF3xu7YCt2VZ3Y4u31apAuJFAKJgghdy4RcKtsostkAYR1948wsutZZ27EGyWMo8cJN89erwS6veuWLbdSjsn",
  "key41": "28rcvfTzRRxLhBQ5pMW2MwaYHAA48PtFq4VqNro128GcqE2o4TF59ebX6iRLrdJCALGMPN8N87nCR2RxUyz5bjBe",
  "key42": "mazZKYNTF3FyHkGA254DtsM57tWi9MzaYf6q3PmB4vKkwZ9iipCefm44e8Pq9EZ2X6Xio7kvCYRgJb7w756ngLb",
  "key43": "2mcmJkjZGQPxc1CPro4UrZYJd1Z2BxnoTgbSA86XdWFjHTDPqSdyNRRt9LKzJuTi3yFphu5y7dtAzXwDbmGT9J2v",
  "key44": "PUJPhdngo5U48kHSCqmuBPA6utnjFUVeV5bMDZqTpustQ5jn1bC91LdUKi9EEPyDEiMJsvSTFwdcpevQNtuWphH",
  "key45": "UEv9f26CDrLyvvv92HmEBCvf9qXBx1uPainMSW7pAhoF8nq9aJaUkRY2wYd7SeZkBg924QjsLXCPoTNfSUiav7A",
  "key46": "J26vfwnYVNj62PdxqveRiAwypZzx4gktqsxT2CDnb1gvLsLpHnNR6ByTF36yGSM4naeCY3zWtPyXKNibEDXRhq1",
  "key47": "8kM4syPUG94ou6tMVWDsJSU8aw7D2RmUprx2Z93mXBYGemwM4nX4DHnUoPpsLpMyYATQiFeCW8QaEi5t8CtwYGE"
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
