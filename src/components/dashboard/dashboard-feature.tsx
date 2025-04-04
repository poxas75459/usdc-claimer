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
    "2VF1TvxCs1nzm2oenCCJqAQXrBe3i1ywRyZr52aTNEe2kaUtL4JpoqS6eLXpE8F67URfskJEQ31ezvxwDwycCmS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bbrwHdurCcaHgQtRXop71dkCn48vQtqibzuiUU6XCLnn71HtTrMLLkBo8wGSDNCTEKMTVnn6AcFi4C446bYpUha",
  "key1": "67Nx7wKSVHGa3icB3judn38ZPFvREf2fMmC4io3W61uj1kmmP5ziEzbH4WLi3JxuENBiKLTUZGBH4giZoqnf2X6C",
  "key2": "4zfUKWMkDS5uz1KuKC6gAWx8U5bpsNAbrVwBQwtuFCstuqBMJGuokATPaoGzwUufBPgd4LVrPr7GNAWtxxwm7P7Q",
  "key3": "fkKbbn73UdryaSP9V4KVmGer1wdSc8LBBDZQKVvN3AbvTjZiRH6tAnDt7uBSVKET5zE2dDgoaRn1FjkDw4JunHX",
  "key4": "4fas7DVmLjXCtCdmzE1FxfHmbaJybqEZtR8jysb695gNTRaDLaMzLHsR6NGCgp1RXhoPGRyR66K4qwspddPuYZux",
  "key5": "2g4MDCUUJvsx5ow4tgWgur8GQWKbip85FR4ioFQ4ZSvKZNt8QxR8pA6fpZnzs3TFedy1f21cDGJnLAhyaH8n2rdV",
  "key6": "Drc641byz6SRyb38kuCrFD5rkFsEVRLd7cxk4F16Vd156QqdBiLtngag7nqCsio19Ew258USmNmoA3GhHVaZCvi",
  "key7": "5ktguv2DSoLL3JZRBCX7qspiMD1cpRvMbpmih7YG9hhW9s3VYPTdLVPbGB4162aoXrHqN6H8XWsiee7nKvG818K4",
  "key8": "3Hu4FphnyxjF8oY1QxvtYYxTpJigJ4ATDSG6J6iZGyL8Y1fh4CoKdUsMHXbHB9cehwByEbKcS3gth5GLYFnoVrLt",
  "key9": "5G19n7nbYLWiwjp7C6BTzUsrQFY1yPT2PK5Sex8EFjkJQVPoUDWazb7728TZ9CMfFQewYQ4GUEx5kx91uJc7Wm3s",
  "key10": "3JmBjBSvJL6uN27rsw5HUqhbEw646rRzXXijsqCs4dm3dcJxqCSaaU42aFC55jhj1TbUtTSmBMrCaRAWYfkpLtUo",
  "key11": "3hxg33KVPMn97wdEPXQ4P3vo4F2KjhZxvEc5knbAubTsAKka87swtiECLKDxm7HozYVfkqLRRZKWZwU9UzZ15JvQ",
  "key12": "5u7jRUCvFhhzxnXJieL5Cxi7gZ4PKzGZBSWAHwMxG1Wvbz6gfv5R9zgEfXvksggAcj3DWX8PHGb3ZmQ8jAar9UVU",
  "key13": "35VDRJyJTwpWSceHMJnjRFhKeLXRJZBQk95tXZ4FMqdacJjnoJjtQ8BXFCi2S3kP14KXTb7AzPjD6xi7WmjZBqJW",
  "key14": "2Sinc1hVUBCWsgDEvWkQadASLSzvkGT8R2RznpPEpue8dpXJmqdauWHQZV4naG7A7S6mnHBC712wtAAXX6itvjLe",
  "key15": "2spZAVC3DFdUxuBwxnVnWty3jcaTrFYfEtwu2aPBCowNncyKBgPARxFxTcFwmhmsNxUNPNMSAXmzwBnwvRgEgFS4",
  "key16": "3gCxWi5DytsqqQWZ5Pt3DZW7xtT3Mxdui5cb6Y8TwmQJNvQEiW6d6vGZhWt3kG8Xh7DQ8fQWDnzxwhfCty4bppyx",
  "key17": "58szLWmmjXMY1vetpkEULGuKN5XoRV1TAgVCqza1dvbR6EgUGkw7aC7sJm7fkdBeioxzsEPwWBv3iid37kiwApRA",
  "key18": "Ga6bec3mfwKXTbq9mPU6ZfoxLAVcjGgKdi846jbKgSNusx7WeVuWKqhJ1d8D4mRm541CxeXU4nLhZv15H2ru6wv",
  "key19": "43k9dw3BVbnV2dmAQdpkADJ5JNHXShzjMZqr6YggrMiu81X22Fo1ZZEL3z65iEf3ZaNn2BdN7Z66rdg5iTvTeGcb",
  "key20": "5PZdqmXYJR1KZoCCRPjq1uUqkMc2hGSMq6Z1pqJZ2E41cq5d7V7j2grvEDL6L97vuvxk6pixL7mDvgakpFgb5d26",
  "key21": "4Z58PhHabN3EWXZJ1TT9eq8E8BHX6gp5Cth5KBKnu588HT26cfS2mFiSmVGa1VL962mUyL49TzjyGwSWfiN8HLJk",
  "key22": "5SbCCfC2AdbqrtHmFqNPwFhBA8cNWeyCTywA28MFo43JrbHnWBhupp3xtrKYsWcTie8x3gG5yckjUjKrmwg45iJ6",
  "key23": "UgxoTCmRqRpYkDzg1qV2RgL9RCkK5JN5LXXYGh6yrH4n9nHbVFnG3gf1dXq1J5rgsNvtMdvWbD6JL5tNYy4Hotr",
  "key24": "ZNugBApmV56Zy9cvTYM7u8GryiCmEtoLWSydPMzjcHn7cvaAbeaW8Xvp6YGzCVcoijyEmT1KrvkjVghDTxVwjQM",
  "key25": "3gBgNwxFgbFovjSbvNmU8MasTEry85NxT32d1PBucufqfTrUYpUhGHhNsuHc4eurLM23hh2T8dY93s4nnKrtZVXE",
  "key26": "wNJ1pfwiCw1Z5rGGmcH6kLGxmA3uasSmYEUh2HTh4smbJTfnsMxDU8h1yiQGqNXmmxZ2VwgNGJBw4pE5MkQSift",
  "key27": "4TTDr8XanfDEmMbbvCrtP2PYBWjPZikv6RiKPemHu1YGsaFA6oYHMF61pJgRt5KsCpgukYKKLkrcWNzsK2nZucBk",
  "key28": "DPK96ax4qP4KW2CPWiWXChmDfpNGGvru8PV3tDfFSe5NBMk8NPW8Qw989a5Lrg7mLuPXHdrv81u9M5vRe8wY1cG",
  "key29": "64tUzY6PziwWmCJbUYPSxKhCYAwbHmGZTq1TF5jE4mQdt9Fop3hUVf8NaNRYPSaq9a9NXRQZqfoAzYPibrksTqHt",
  "key30": "24d1FeCN1i6bfMxgyTJyyus4jV4D7RCxd4PGzxVaCrEcN7oX6dXEfqe5xwQMai3TNxv5NUsN239uV3XqnHHuYrdg",
  "key31": "2KxQyUJB7j38mUQyLurmQmVDnSwKRyQ17TNoLGCueSTWJtLZJhnwfArA1dw5YGDHYsrQa4xmSSU9uxCStkcSVvAV",
  "key32": "4XvuzfpNNyP6Yf3DSoRsdVfjMN7vDXrnTMSDDMXaT4C8qxwLxeVVghMS1oWc1aLhCj2qYLwaTmp5H7TQJr4C9fkY",
  "key33": "4QDGijabKYRyd8SRvWjJmuTRANTRRXie2nGN9tcGcJVMxQVqQ5FTbLBCPVNsMpXxT1m5AQLVSgJjTrmAr7Zr1wXW",
  "key34": "5zzKqJ4YSZB9urzfGQYrXhqU8i7gYwDAS2PdFbLCEawkV39LCwHJfiDjtXGg2mg1nxHsVbNnumru7EgaSpHzBpMt",
  "key35": "641RQfsY7Xda4U41hNmYvUTVnFCcZFrJ5K3mVNNSsydABARYv495Mk5fDhvfgZPiMSPDqtHFsz9WCdd9jat9xuZ9",
  "key36": "5rM1RVLtZFw9pyEc2BgvDcNWSgwESBJwmA8PPJVGxSUsfgbBnkQaPf1MJgyguxpTRU9aronvAKYC11CPN29QkqtZ",
  "key37": "2SphPViNPmuY1XLBw9aGfr2dEb9GBfFRisVW8BJZwXsctVYtccgamTtDKzbd6fHhgiPZe7qojUacoPTWerKp6kAk",
  "key38": "2K4P76xhxm9Kaicj9XuQtgKrizXfT21KqwH9LTG6Xh2JRAw3uEWPSiRT3vNZoP3b4NgLtd7oFJzvM1XoNZ7RRqMx",
  "key39": "bAYYrG4AkCPmhg9xD3HbKZpDAkiZU1ABCu3n2Uhi7XXwBpRfL6T9KX5FjfbR3pHPAna7ngbtt84HQQAGJf6uixE",
  "key40": "641zrTWt82rnjy6S26aVDi1FtacSSmu5v5GVDqtXYB3WYhrJWGxpJ7rcrxwnqHRo2B7yLW1bM8NrXnLbVYyWXKW2",
  "key41": "3Qo78uE8yQw35onjiNGpFtg7LJAKrEuf3C2UnECuXk9jbABFjasvh2Q8MLzMK3xJ9yRXFQVVz7JFHjrhQnbgUHyj",
  "key42": "4mgEWZrCnfsySnfU5KxSXLPMn2TdDCdc5HPLzf7jSXsoiHtjZci9dt4ZY3QtFak9GUemLJhsZncP3E32AjSTyzz1",
  "key43": "yB1UkTX5s3LTmZCvCZEZ7YNpu9b5VkvpZoacWSAHH9uZz7AL7ZrPBUxM7wZ48zDth64VK5qvcxb3tL7qMK1KozF",
  "key44": "2ynR3kVYR9HmzfckZMkBbWvV6uggpoMt7FXRNJDGs7nmeE9NRREpx6yRiDAG5nifaNRfSqPHqHBTwHbUve1TA577",
  "key45": "2jJR2DHnFgDb5GuwsmkqeGuce4rEYbNNC57XG9eu8eP6ywGqac3jkR9M7YBU6xo4p5bJicirAQhSVK8FCPL8Peca",
  "key46": "2E7v4wPgVGQ8P8Ajd9xwtcRLVkNYapodE3sBjnREuU1cc6k4ndtyKBXaNCz5z1hS429uwDx9uaCM22cns1aqbSY9"
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
