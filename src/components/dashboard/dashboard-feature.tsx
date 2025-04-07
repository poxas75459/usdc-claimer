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
    "4XvKv5uqk8JmW6o2gh7P6UVN1bAFgmws8ekCCB6cfw6RvNRpqvu6UpepkB4Rd37xEn7bjRrsCb53HmHFQNL6nq2F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5droyaj1oPVhCxnGeVNhJby2pL1boA1PaK5gpua24me9NiyJvDSMQ6Jb3N3WT1DxmBHfut7o5idd4g4yyH1Z1xyJ",
  "key1": "5sFdSfqU6Ttwmho6SRtDEVgzWT2gAnJ7mxZF17T1kxa9HSEawkkXN2yT9zkVrqnp7tmuoVVLUA9NHnM4EEXAkmna",
  "key2": "2JJkfMK1i7fDCE2mTHsRDk4kHc6Wtbv6CoAAQnC57pdMQUt2Q4vHK6PvB6zMuopdC1J4fRX7SdrvSbcam7C6XJfr",
  "key3": "7CnWbSNf42eYyQEivcCkYzkxhBKA6mLSdbu6mtk5ySUiJdvHBdBKZ4KkwYJGnXMQQRFGuBw46c7sFMjsPEMKHjK",
  "key4": "54xm883v2TwuUNx41FnjXdQQpFUxfyo19mNaNfcNFFbjHMSLqX3okdfJwrAP1PH36erxMmZm2xnMS3WH42fczf1s",
  "key5": "5dqkkyhCgTtbfAzBLcHWGDrboKZnAfWaYiPukkHhugBkFQnWif8dZ99x3GdLTseRG18LXBFv9HnyJ5m2g4B5CDnm",
  "key6": "2SxTH2qjNeAaWBHfsKkpMv415QoCesa8sbe4YgwPd1hhWFuxRZ4VUWVKHat87FtY6cygt7bzh93rypjLstuieYRe",
  "key7": "4CxAR4vVsQfgF35PwxAv36tM5xBMvUoDeugg2ibVkbRRU6TFxUceYpYmsNh3vbR2Pchyz7aocathGGT9sZghExdL",
  "key8": "5UGkmaZMBMxuN6fhUZjE7qgtqUvdby9qr5xStUow8RuR8MytYaEn4D65urXXmE9SB51gZoGiu7Mdk24pQ3HLN6xS",
  "key9": "2weeNcN2iMSbv8My4tD6AePBpCaGJXdnxALoJahjJ9XUF2K7pDBjj89hqhZQtuZmrRFXr3Dh48SQLFA84ejvgNZ8",
  "key10": "65djooeUvkmfqxMzL73TRgzFsMUBB7ziqy75TuvNtzdZSBBPxGjeaTFhxNVGatuTcnf5AjcUVMw2MGUe21p1fvoB",
  "key11": "2vrUfkxsL2Trzpk6nzbGk1Us2LNBufaj93L4uz8afuy3gmeDWA7vhYmCdFS4bSrFQSL2oU3NSu7RGFvLwThjwVMr",
  "key12": "7QQcSz7m2s3j436jWc32U4VizK8CpaaeeonhSoTUELC3Sa9ViBo7eqHzkBNLFVPtdh7RkRL9DigT6ijyWRuGnPh",
  "key13": "5ou7DNLyLNvgwtXh2hae49wXvZKxHmEVfs5G1Zu6sd21vBzTALjzF88nKkDpppgpKtLkwaKjiCvBdUWstotxiDj9",
  "key14": "31tGzRqKuwzgdL6o6XVKpEY5B6sYjTXHZpMMv11FV7gtceq4MgfUTvBkmuPNMZPDJvogQNXE1rvameNcTCverDA9",
  "key15": "4mMb9MUEjoJauoy9SXVSzMixTfJEmwHbCWAAhPFWcNgzVjH6HBWCDzCsqbGpurPrMwwbWX7shRoCvkx2Ny2FjoKd",
  "key16": "3uKcVWYQkc7MFMCu2u4S8cP1CYHizq8yVAGXcvuuGwek4Drg231TYvHmsaw5QGoSQjyFz2otrQsKWMwuhViD1amU",
  "key17": "51Ydg8MySXbuAEfQX6uC31xpkjmxpJrzB3yY6ioGUhtjMiyG1eYGnnvdtHdXPtBYBhXh1Hwh4hKoKKXvHNpU1LG2",
  "key18": "66DZHL6HQBWVuXEf6becpbEmvBvS1z4kQKtdFaEcxLYhJ3GDcwduu8gcgreoHCW53JAD3ozY7sotnXqD8Wdjmnq3",
  "key19": "3DHskhiDTZiZSbfJvKpuRfRjFb87abbei1EX7VGqMWHvii1udyfUerKj2B6cveC4Vq1jeuiwQEfELwtCp3LhShsj",
  "key20": "4nRpExL7FLp4nzq73pNH5C4LWwV7n3RJVd5i4AWfZeTNPLEFo8ENdC59Zd78nw9c87fHr72hHeTp8bCHXyxwgxnx",
  "key21": "2TLbqsbguEbX9Tw9dATb3kCPr8isWofVj2j2kpeDpMGZMpHxFKJs9Ewzy1RcuztPLvbkNJmG3VwQcPXSnJR8eSLo",
  "key22": "4PH9JK7kiavBHiZQdTDF54Y3jSLwS2FjMsktiWyLhMg4uqUJMCgmDn1ReDVC8BEu7pJ6UdesCj8GRJY1D53FqkJT",
  "key23": "Qm98WUeFNmYcdn6X2c5ejvc2w8Rc744vJkRyeooTnPsAg7X4dc9ppc6ib9Ddgd9wfKSg42faFYmHxJqrTnzrhY8",
  "key24": "XMyYAPY49eRt1KLLn5QSjFvvK3wfwAqpaoSaSFqtLwMWaVYLr9vNRzASJpa7Kf2HqJGqYgtMRwDDurXzFCv93VV",
  "key25": "2TsadmLhLJwzxHjustTwmW3j5DLMafmyuNnQzc6axYsvqd7KVreteWoshfLeDP97bQh18hqZKohmqZHkUKzoR7a8",
  "key26": "2ARuoDKthmC86VVLWyMXRHnTmzP6yYN8oxbuZU8KaJvhEq971ukFevPp556RZ92Avg9u5LE8A563kLbi3yJcf1a7",
  "key27": "65EGDSuJVkbePcc2Ceax43D2Bs5CGDut9NprkYmPu66WRXLiyu6F3U6QVuj7w6nGBSVZmJdStnjXbZPCTakC817n",
  "key28": "4N3BXnoxmVXpqge1Rb554xSrYFcqVV9BZfLe9bQeemzr182hCbeYqckpkUmGGri5vtL9FNWA49s1Fqw3k2FVYDEi",
  "key29": "3ApVXtaAA7YwcVkGAnV3dadFpQpkfKedFfdTEmcZWBUueF9aW6w26hhWQV5eUbtELEmugXW3dTxWGGiho7DyK17A",
  "key30": "pWwHz6wL3iRYD81x9LZuzPR5fiViUFnQDbrY8pqtcL7uoSufh2vRJkux75N1m4cd27E22iYRwCLZfmPACa6NWZq",
  "key31": "3XPYbZXWxYH6Xg345xeceXFxJCLsNTZDHYqRqryC4Gx4fuWFefgvPT9bnZXfUxc6baAFW8v3YzN8qSh89CvrbuZq",
  "key32": "4ydHJFyCPQgRw5MLByfPJZ9DVMQ4XemhPbWcaBCbJdDvXodK5xYDqGew8LjN9gocDtFMfuJN5etHH8HXinAWS3Rj",
  "key33": "3LJddqU1TQKG2PqVnFTmUkSqFp4e21fi1n8em1f6xBPYqgABmFKh6xfvxHdKmqZagBuPJ8uc16AjvLaLeEoo5F5j",
  "key34": "iYmrWn8UhLSUz1vdXQWLst68VuRtpFx8z6asob4BD3yasJ5qKnQffyZTANxnVxCN6gaxns1yuGB59QNat8WYL1H",
  "key35": "2LgYvsuZLhM8NNkrN4orQgtu49vSrvdUyq2cfCn1sE2ZY1bKcD9Hvyc6VGSD6ki7B3gvCYcZBheHFdRpUzixSzxt",
  "key36": "2mC4mBnG2q2hnW85bkssTmDVUHjaSA1zvGM3X5BoWmGiTvmd5i7f1gVBhUjDXKfV6o3zi5sQrzMy1HsTqz3n4RTJ",
  "key37": "32yKkGbBupXVimsvdGtJhcWkgnoELBBGRmkgppoDkNjUe1TmBTfz636zm5RGfK2RbrbZx5kfhSQeWWy2Bm9Yi9BH",
  "key38": "3eMCF2ZqAV6o6zvbSBi5YRtSsfcLEsmhCePa1CK4EPbpbMeLHFa4n8oBK52YPstGJbfdatB3cYoyaChZK9cYt7oV",
  "key39": "xNwSdVmQeemS4emsr31ACdRX9AFHo6Ve3RXqcZGFXt1GR7Nkn3aTnSqsnMKUTSHbcqy8GN8cdFj3b3SChgDJSe2",
  "key40": "4UwSFC5JZt5wVMuN6BgjuHtguFDJcdo5M1f9jkGV9XmsWXfUxxo7iodZ3qSFaqKfyvj7KiJ31SjF4LZ7RfB3adMN",
  "key41": "5gD9x1EkkkMGzskNLjoB8CYJ9opKbnBKSQHbdrqfgWG7C9gzd8ezZ25EUNNNUzZNoSKLjC9wd3sRGCCtPqCQXjjD",
  "key42": "56jCx8Na2CFbq5Fxgz4Yp33EQ1jyVzx3rU1pEA7Vy5ZtRddid1noekswhHeb52dttBJJtZ5qEuGXi2zZ9odPqR58",
  "key43": "2gJTfXi4iJpcrF5QYkvDnPr4m94NR32D6rXMssPTUxc6RysWMBo2jHgygnD4DMqN8Zb7VsSh9HtbcotrKaz6n4dW"
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
