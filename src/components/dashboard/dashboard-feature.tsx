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
    "5AMo418vKCiovd3gcJvLBtUVDt5tCAU1XimuXAK4RnBwh2bRS1hXuSjHwcnBDnGM6JQdD4aYyQuW91d4mwePXvwE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UtHrjmtQMvTHyfTKsPQb77xRnSc5jpUXY1w3zixeE8LCa16C7iZPzyvVBbntCdYDU6Gbp2PxEn3YNBLpTEQxfm5",
  "key1": "ZTTES6YrWAJNqyTfKnqQVpMmkuRaykQArrMrhMUNHT4tSm4rx6Un7JSkvudufaq8mmcNWuLeq8Nk8f7RiWGhjjY",
  "key2": "LhFtigddZayy8JaNmzM1P2ZzYYr12AJT6nT5Xa7bnMExpWzAtBBXWj5yW5HDJtVmtoWHKtFcXqHAj5impxYxvf4",
  "key3": "3x2SKhCvGvQqHYpqwRNuaj9FGmDDC2FxeN3aLGdcrGv3W77ZKjbBVJcqm5vmWDP2K7S2uBiu43FY9XmTMzvETTuJ",
  "key4": "3TnH42CLqDFbtB1HSUqMdhqWLzSQ5YXLjj8p9BK6Lbntz5rCeWefUqxhq3RvXfazh5cYrubtmqs3vNGTMjYLxMKn",
  "key5": "2AScgUhkJysnMiza9Y5G91kxfenBtHRv9V7nHiCthiBHZqJ9dbgwoxt4suZ8wf2pgYCBLW7PFTeukN3irXLF66FW",
  "key6": "5zZ4JCkhGfwLX8XEQQDVwq3293XMgf4D4DVeGg543YoQHDS6mR4iKVGXs2b7KEALKFkVWjsywUwMigmPyHYTGCUM",
  "key7": "5EbhZ8tRrnnisCqgiAuUgu9JNMDeBbFUshRRDfDuPRrRfKQa8vXgaj4qBDr7LbTYgrkQzY8ugwDFJWjGoB7WjeJd",
  "key8": "2yfUvFDoL58mS3ztomRJ5TGJyU9n6qJTmEX774uJ9uQwRCtqvudheAeuDVVMjw4xjMQRhdrqg1aTGzrFsueWoumT",
  "key9": "oAknThyNTjDhpnPmoVtsh77P4RBQLPPdSoHTLH3XmKRMB7fEWBPksf33wcYguJSqsFpdriG47SPmVzMLiFCoCma",
  "key10": "3jUT6WVYednhretHiFLAPiyxtFPCt7kHahbEwxjunJbJ72PMFs33cR6KNG63cB2hSzNWr5GLZfd1NciRRGgcUCCQ",
  "key11": "kG8GHsxRrDEWTQzKmSpapZ4GWUqykLopVAPn6yQKCCtpDuXFakjXYrxEjLZfYt5j86Pi6zjz44rQy9Z9JxdzCUz",
  "key12": "5qd4seiobsMtXhBK6JppD7R2bFeaCUPLVx2M1VWdwSdmF6HcGNNnhermY6to9qwX3ejur3fqTRhD8LiZwfm2jLSV",
  "key13": "4WTTLKscbufkQ7q23juFVjZuAQkhg4MdoucNXzCQbcDnuSxoVwjkUSLuW9d5fFoa8ozNotTYdQVwgEcs8VTHJFCv",
  "key14": "4BN7dC39zSUjAXKvCDhML3PnuQsLBooRgQ77FfBT985pxxQ1hnZECPRQ2xjPxpY2KsMb84mSVwM68cfRRqCAut1A",
  "key15": "RDsznzhNmuHRqrYZUBY5RENGuFvp87NEYgoJXkzahbxocGQYMr91mgTKdREN1E7XgR9CCETF98qywxXJcj1pGUh",
  "key16": "2gukuZTsDMfRWZhX619ADBAXjWXBcWHRm86FmDbQCScSgCiSqdGQK4kRH8CWGCtTtCEf7gxH7nnhBXpDz6To4vZP",
  "key17": "3GcpXQzZctn57YWrAYHJwRuyvVTx1hvjdATJ62Xdf6Cc8qUuc3XtnxHzrF4kt4f3UczFedDsxsvapHw55GrK3S7W",
  "key18": "Xq6Ae1StfELtpFz6Qi1NF4aniRbp2eEz1s6rAoNz1rdPdu7CCNdeB84SxVLsK1J7RG2CKn1nsWAxkZMjp4aqx2P",
  "key19": "5rxmDdkL6yaBVzLdmbV8PdjZv1DEPUFLGCA5opuvb3Mdriw6ERM391bMgVb6aVqTkKom5rreaa4SEJiAJmexXNoV",
  "key20": "558J8eVAsctkfoJfZXi7aNPR8kwLey5jiTSGLbGpMKFxAQsnsgrUNBBcmAakvNv3CEz9Tu42UXE4KZCsugHMCCRz",
  "key21": "481guYRsg4VjTPFvgTKJR5VCdxjNV5p59QfhE7w3UvdR5VZiQ9c4fBwYhzV1LtFKu9ChofnxEouaYxVTk73GgYTi",
  "key22": "52ZvXYPpTMo15wthFhxc2C2emgDxEgUFthNCwp9d6FZcmWG3uDyd4t2FhJYwFqwzFwf1ycaJsg9oR3qvCKSVE4vg",
  "key23": "38XbyQnMpVYYzr1G2WWvyGW5WHjPx7ctr9YsNsutEoaYpRR8o19QWdcNmY7JJfWnmMDZ7ofaJ4v3ddbP8fpUBQPk",
  "key24": "5UsWrbwA3irYRYN9wU4miqfY3xu5Wt9FyCSi6aYiJXw7ytNXqeGzfEQ1VjReEVkZttAUFqChHz7Uu6Vh2t35vrwF",
  "key25": "5HWuw1x6bzkrz6THrpPwsTgxML13GkPU5XxTSRtt6B1YkHduKzjb2QFskQPgi6Monzp6Nnz3L8jHAokrXwfwybBo",
  "key26": "3S3bW7QU91WXEhV5VHhfoLe4N88V9u1Dy53tjEwak1RVuufpgWEQCxSURWEVyVfV1TPsXaqGQt9QDdCsuEn6Y3MT",
  "key27": "2DbuTdhk8gfaEmSaTkRRpfy4s3fTMaYmzsuXji2qw88p5HRN2bTNoPShTnbTpmsFzv21Vt3KrnzsCuzkx33eJFRV",
  "key28": "5t1v9CXXxeeGDQCtRC1tn1BCSAYjuLPSt4YwovhtEhBkH7TgTgFfPaTBTkhkpCHV6MaasScSfRDaDSKBaod5JDK",
  "key29": "JP4iaZN9ZTDKy2ueKHcnd4z5TjwRmjza2qtE9yEKBhBGyyYo9VUK1D27eNKDps9uU5N9JZYJ9jWsgTez1J98WxJ",
  "key30": "5rSDhmMxgLgpmCxM3PH7WbqVrRDb5APno8sNJw5FrXcCyC68yCx6cDwBfDkQUfb6TRTdZejfBHsamMseuJ62gj3N",
  "key31": "44TFXPj4guyWyXnhTh66b7s99otnsJFMUg6d93dFt6EfwHkSvNEoVsCy2tpiS8JXqvtye3mKysfus5tCZ1gdYuRd",
  "key32": "4a4JWu5AKxxX61CLrZ9vdfVm24qKLkt481DdN8bVKHnNN5cSTWcPU2jPxFBAZ9zXkghK4oy14mzSeq4qMzHaFM5E",
  "key33": "5s74e6KqhT6MseHJYq94uENCnubZnAxeSWVbsjZNoDVZepD6YP65r37QtK8EwAD2LcedWGmevPVtXr1RCzG9bZw9",
  "key34": "oM7GsDfv6pYK3EY8x8Z3aiVsjMP9575hkiDsUceG8hXSR674PaxD3jBTgPvyciiafBS3hJTJ664ANx5VkU3y2bf",
  "key35": "36LXWPZjkuAD5fLgdTtxz3uBtxRaJE88gFigxj9aPacBDUYc2ygbcrW9wRFZKSZr5bPpW1Pt59mW2fopYUQxKJ2c",
  "key36": "5hg5xpH5y9ASZEXUgNUBsZsN7eVc3KSzgUoMWXXxY34wYZfjYuz97sdLfqsRQwPLdCCkvrF3kiBLXigkvX9eBtHt",
  "key37": "2ureX4cFj2KMgK3uw1HWiEqKVdtnZSBmqqCRSkYeQRoRH8i3h4HsUU7UuUWvmagbXQxGwZMdPomXeZJ13wtBzVNS",
  "key38": "5KT2narYZsoikEJXVihh7p8up6Aed5BBsChuWy3BMD2Wjg3aRLzsiXnKxp6nWwjSb6URCwAD9KFKfTS9Lc1S3FtG",
  "key39": "3CtnPpf2qQ6vcCLUb5WhU1kKTRgU4bKhhin2rMfBejxbFJTtFCQF5ymjMVf9BMfUdwDYrWLJ7hXi3zR5qsYXuzFY",
  "key40": "e7rrxDfbxzSkAuytRWqdgUEmaEzdbr9mrAK7dk9u1S2cDcW2n49GuAUxfU6wx6K1eB8EVKEY2PDpxngoGPseeCw",
  "key41": "5oRXHP7Q9n1nkrfhX3cyLArcFrdZLAj8hBzAkY9wxUV5Lr9tuLmJcPz6FMCKxt311v8Se5H5ydYcdD4UCFW95kC5",
  "key42": "25rDWZgKKWZAwDbhFU8LQB23Uq5gh6ELtWzGu1b8SPx7LqNs6jP3QjmFFLfJoiZ1E3k23ZQiAeDyrzyow6bDBtHt"
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
