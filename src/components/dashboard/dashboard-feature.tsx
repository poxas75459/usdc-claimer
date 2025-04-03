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
    "3XDm5GwRe8oE6gaFqXivmFKTXxhb9SxB6nFC4GXNCtXxKVK8cfZSMsdcL9ASv9287H5mbqTVL3rNz7QzPDm9etKQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CGV8xWmxpo4QxGNPJT5jD9136JVyCd8jMtKyU9RRg3rzrnmW1aRBge56esWqYetfGLhUD441RLKNyThWdwbikNB",
  "key1": "3YZ4k5aZaMf6Lmb7kSij1b9BxDwFT3AdB9NoK2m984dxiM4LdbMoc74YeX1CGhhpGXsny4QpayL4dgto4T1R5NDd",
  "key2": "2Y8TF319wxF1TX7pj4AaJgwMZdAburoVDgBPVDEQmL632QYv3QAQDd4LmXacpgkVY8FjJLqUcVf5kBdvt2mAYVpC",
  "key3": "3TBQpzV9jAMiFChYiPdhZ6kFsjsM3SwuZtgWLmYKWVuJGWhNfuRUsPjBLZSg3b7rqhT5jUGuRgP6FCjrd7UvSLkj",
  "key4": "5tUYhHvXGhKB6fR3HR7QzFi7rfCs4yLUrWv7jTT5TH69dS8wuTAJ8poJhCx77ADTER3kACeSPm2puSnj3poTCvow",
  "key5": "55aQifkFQkiJMpib4ptxHEHaTysFTS4K1FsDqoB8pMHvQz6WrCFhVuk5S3mH6a58HieiTaKkrUcbjzLxviapGrDk",
  "key6": "3D9Jf9b6hCqPNXXyVG4M8LMuWSABWfHqywEshskVrC3tQSLYe9VjdhQ5mu6Dj7YvyPr4ocVCqWkczWuGnmXvKsxq",
  "key7": "67VxWmiYfAxSmEamTqQ5KBWiVLGs8Zp1qYxmvjCni9SU8V8ZCmDgjYLiuRxrkM11AcW6d9dPv5w29fEUAKuwyCoD",
  "key8": "42mhCWkYoqV1z68FDZXhgFDEq2X4TfnMHGuc7zr4c1feMA7nubfHks2nX3uXAycXN2NV4zJQGHjRLpktUrUFy3o9",
  "key9": "5CTo4mrXEEzRXX3vXmXgxHmyj8sofYy3PFp1GoLF5VXvrtndscZ69Ba2gZVtqMF2QzgLyjoHbJFyUFHc7cWYjmd",
  "key10": "5hJuMMhMX6zC7PRYREGkubXHDpK7tkJMYMHYGLNPsyYsKksBCoVzWqz9K1TE4aK8M4SisbgPwsQapHZY3k93Mydx",
  "key11": "3AhQXkHPZQK6KtU9WJr6k3hFqyxVSuj9CvwYPAU7nnTkfaXiFivqsq3J2mFqQvfXwSgtvLWgvaytvNfDag4XsxRZ",
  "key12": "29WA2ZZd1BmNbk6iTHBGXxXGSyKTYK1eiWPHqrQecjLDtQNqPtTcV18Jj9wDZxJUVjRKdRZXqaGmn7ybfuV5XJLs",
  "key13": "2NTy93FUSmbB4ckAkovNMe69G2CQtBbBJDsbfUmRH8TDWMuYq4yeCB3v3TPXRFCTNj9Yn8fFRE6dH6WejNGJGJjW",
  "key14": "2kTnWR8GgNiUVmX9w6oCwxKa8fYTCEkfG41fBbSphSpA5M3LnCWgUxCggsMQZ7zApvQLiYrrnVDSfjajcyGMcJWU",
  "key15": "3sbqoDhunzhwkwPyjNqZ6quZjqcdrgvFm51n8cNUPc1QTHBTnofXPwHykjgKKVDWJsR56LQ6NSfSRixAcmmWtUtM",
  "key16": "4GgJ3qXkzzinHL3BA6FwTTnP9zVT6guPGjbaCaVRxMDNPw7PvXLS7r3y8qTkdaqq4chRZHACfZdwaAPv5NJVSr16",
  "key17": "2eas4cbkiNo7QBbq2TbY56RQQb2ZWaANJJEjrChL1gYzXJReqrC8o1StLjZUCSgNCKtHpsJFWrHFs8kcuV9Cf9R9",
  "key18": "WgYrd4VsEBiuHPH983Np4tZLYcs8VHmXiM3w8oUdQYcJBbYNGEeX42qjPEVeeg3NLft4zQLAVvpZX2s7Q7JgfFw",
  "key19": "3Ljc2n21zUdpXjJqERBZiiSqARwyYiVjsqFxJgUKE7TLPDMh1i3gXNHgLjeR2P5iGR2Vw8ZNbWnRrBTYi7Wtf7u5",
  "key20": "2j1APpuebBz2XPo6a4br2TwdwqCeaZbVqFSUe866Fa7PsgTojp667LZK1TQfwPophkX6r24os1HE5GHPfZEojh5j",
  "key21": "t1gF4p8MLu6j3Y5ZJ4xmtcSPYkLNc2396zffLa9eynzXYjrbsrQ6weSCmMR4Q7EaYCL9HTYVMDY6VGenBL3KtAo",
  "key22": "yhNTVvBCsdf4J2Zfy4Z1JivZBrCqLZDo948dDK8rV3HbAhn7YaDg9o3MBrDWPZjxMbQSB37yGJjnbwoRdEwdAbc",
  "key23": "LgN8TxnRzDS6wXSh1oJBGcYmYuJ115TDEKPATqLXvddegv9nnkT8i2v86SexsNBDzQb9GL17jJX65oCwJF9wKvw",
  "key24": "59MHX9Lfpx7N3HEbCnNQhSNQf1rtaU2dyHTtLUjo6PAyiggDxTqKcYoF2YwWmWV5VxACjmHqkPaBLaRAawiXufod",
  "key25": "3THLbcRtxUE31F4uzijTqLr8SuFteWQ8QSEYKkM9XLEUv8CeFQC2jgRrCWNyXsZ88kMMqMBrnCByFNP7DZKdSWJC",
  "key26": "2HYuarCCGyT6zAroHYL6Rt5ksNYrha7AeVThXbe1aMCHbp3svVYSMf4B3CRNJSbEYsafBrU7CpCzvrRFrkcXgj3y",
  "key27": "mpHEHxRNmUz66UkhxxgA99wgVTnUvLXz8UbQYnfrhAwvmg4SpyYNneb4NVM29me8cYLWovsFkjQuMeVA4VTpriG",
  "key28": "3bYVbJpphZCML4uCHzxtX3JyyoSh4f6kReu4x63xjo6TyKfQfiLNjtk7vr1PegYXWC2ACNmo9khLJ3z1qUxiF4P4",
  "key29": "2aNdVsMPBbavDfxVAYukN9BDeyU7oUA7PnbSxNzTDzmrJY7xnCD97JNYAHaDdhc3UReSDAGqW3ZVk6sd7msph77u",
  "key30": "35gwZPmsqxFof2F1WyBtAj1fz1j1a1R9nmiEd63tcTkNwctVgnquC5igZQ1aLFkzLaLDQB1da7LSXNLeTZ7xsLmx",
  "key31": "53DUxXnE8qTKmMZNaoJK4gmDbXrfv2P4y6NzPdb8gJD7mHmgTYtS4qrDFrEFWfkjLTWPKtVptxYi4ghcJHrvNN4M",
  "key32": "8KeLEjGY9fHajHuDJqHhhPQW1L4E5UiGJhhkwMsZ7QqRiRTmwLJf9AzowCGNsXNEBJZ29mmqdJzmaF4QNAhWC3z",
  "key33": "4J8Qr5vRkjpvuKNB9ELx7u9rix3JweeDLUfJpN3eudMVufYUPh51RvMPQBe3cBDyPBvw2aBm1awiZPsfCYkG85oW",
  "key34": "2oWhFf3nKGVzB8c3jnFpHswEEGPvFJJrPV9zo46ib42uFWrhm7wTd4P18fNwdojJtvcnj5bJKfZZmp1JkmBwvnsr",
  "key35": "3wUtUwxa7bQf9TLSGhDXmFtjHohZuwKSKh6ws4ABS7Mn6J1FVuC3aqx6g39Qc9M62Dw3t1RPL24yKRUKa7rWafdG",
  "key36": "2Lf4eorXLTJpDw3UPyAoLKBch2C4uw9QBaxRELxpBza5LQ4UA78anxP3A43qfS9ERevTVs2yRQ4psgKpBPnXiG35",
  "key37": "2sRL3SZc49eKqcQS2cU8LNw32XVmCUbutbmXt2c9g5gfQENVercw6zunLFQ4QfpucNveKnjCNLee6Xb3uRyhYAVL",
  "key38": "35W36UdtYtjoK5dg6LVU5R3xgaKoa4rjJa1zp7MXKZDXwz7e4wWvsScJLjVJF7zJgFqnjhkffyuCTscGt7ofgiR2",
  "key39": "5z5GXxqb8ycbwhWtHHS2PytFtbaAfGNNfkcsJ3sbHYxASLymDAH2ML65BVDJ6rm5jCoZZUv5uPm5Bq4mbg3LwdhT",
  "key40": "49DZnYFPWnoAcgZ7fzuqyMvvgRmYSujTGVfopyPEf8NevJuuakypqYwDUCQGs9SuMFVahQurM9ihdv5bZGdSWJvB",
  "key41": "2bS4Af9MxNWSnTPjebNXh3F9NTFxW79QPftEQ1v828zfnbbvPszhQH38HWGXZYzBThnjR9LY1QJE6djU3o2ozFxQ",
  "key42": "4EWFrSMXMyPxoynDuSDu14xwbDe2Swd8xgAFztvWtW2JGL7scJr6U8AnpLsqf4FLTN2TuZ4tV1n63j4cQT8nn6M2",
  "key43": "HUySeSzcvbaJK934vKsmccGTi6x9T3M4RFxMkQhgQUBmBfJcKNfWx6rQGxMrsKFwRp5ccy8VN5dz2YqDWPmNey1",
  "key44": "5h6ZqafP8QSLFh1Dm7AUAziZCAjLBrBkP5NGWLUwgYmf8SnPvFv35u1AD1i8LPjc7ia7LeNYEsgRFrKDu6T178op",
  "key45": "4Pz5ZDK1rKGNUBudBM6hPexZ3PUKRRmGRywVQ8gRAHAanVkde7Pkxbeyz1mW1aNDca3sLjWTixNQefCE9ACFnK47",
  "key46": "5PcRF5oBeRmEzrLFmAweirSLjJgotyKbksMjqCqRNkg9fgJQD6Jf62bHngnFT5Dngep6qsUrksVrjU2RYrkaP4FT",
  "key47": "3rqQjH6ahGsTrVL57MbpFmnGA2KmNEv1QunE7hKyqWGuhQpyzUcfkywmp1e14rhN5ZVkedSwFh57D8jWLPAdn22s",
  "key48": "5FWkCuCBjSnNsocRtUHo1nZHfwfgCyutDJwhBri1VousKhoSj9LLurY5JiRKv3hhiyfrWEPKbjbt7oeiG8SKwxzp"
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
