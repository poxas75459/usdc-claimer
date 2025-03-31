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
    "4gaByBkkUsSCxfSM1c51fDVMfU7RVfBWWH8Lho5EDRqAfq2XGBDJHmssN8BorYRCK6fhTyu895ao1pAjKFTjnRLP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FWhTAxSnLzS69dE25PDHacL7MsX4jvgrAUYLj1GANABmDGFwHLTCDC89AggUQiguf5hd29SSnrW8vfzHcr8STAo",
  "key1": "jKsteiqqumK8faPBTzsFwxCHfTvQAY2GHp2WsV2TNKpvqXsE3dzooWuULPXh6qSADy26Rm6YdmYdyE6upgS2A9G",
  "key2": "5j8235hV7kdYMcmitdPPYR6fbzGYEEwx6oUtao5vWaUs5kuHtFPTDRcJz8gP3GcB6LkT7VMZqrNu8djsTnbd8sUP",
  "key3": "3tZzWDDEU8nXDgsAz8gD1M7WuhHjJBTKvo3SK4qdMHMFPf8NHKSRUpg196qdEkexyrH2KFEsL5Y3Pw8dnhpkidiD",
  "key4": "znYWBai8qkkskG3Sad4XAGTy1LBLF7hSneDMWZU5GBo2QnRgeWDZw9id6QnvpjPZGbzhdnAF8WvsW5L4f7ig68t",
  "key5": "3uZQiJVZ26epf6KvCT5c3eyMYfUcKXdy8Av4Ka258NNAdYpEECLFTnYEWt7fH3wSX877hzcYdmazyGYKbFW2bcch",
  "key6": "4uEWUxq4t7fYsuUuc584D7ZLUCSU8zF9eM7GecMkFrbCrtMkLWjoNFfbU94vt4BXhvjoYBaHqLzjypHTseU8PRLj",
  "key7": "G7iG73MCumf6rTitYigL9z48RT6k4DRrPR18jir2Pep73GKyR8huNZZaJhuWBGxqYTQaVbGEQQoyrHo1rcRjnap",
  "key8": "NpUQkKZWDx8VQxAxvofB5qSwJcmxUkYgB5Kd7SfuzK63hqcfeCfoy2Uipy3dqpm89Au22xPMyxditDLByJkkQJu",
  "key9": "2ufR5p4Wv24HrbHdsjb3YuY3qozdNinHTHhfJGdj7r8ruQiwUs1Kku69cjoSvZCRahgKrBKqzHZo1FQCCvvNEz9G",
  "key10": "3n9vJQXCemZe4xaGyxbMrahAx1Jfkn44p9DZ8QaemzthJvXwnKnbvFbtdwQHqemizoSnboFcmZfypMUKVvwz2SJ3",
  "key11": "4R1bTQMfTk3hAv94mKJRHU7Ak4DfP6S2Wrezm8PFsocMQaTDEwq8sQD8n2oaLi2UCeYmbRQLS9jGdM8fi1xQX1nm",
  "key12": "3At1VC3YPq2wiTbmEUva8T9t238ECAn9SgkyJKvpKERFZDB2q8yiTB7LDETeVei6LcnzzKLaQMtbtNEjDY85NN5v",
  "key13": "5KPbojCW9edtXUGQZDzoBztEt1cxP28hn1FcEpwdp1mTLGzYTbLDZAUVPR4dUp5M5fi8NpGjLhyGkQGmMiCJEymQ",
  "key14": "3hAXDkNdS5mZ3AVfmsnuvVzFEt5jAjjd2Gf2VzpAgWMGUKjoa1bnnca1B3TfKeVQUPeH4p53KQgwYti3FtiWHPji",
  "key15": "255arA4S5Lfy2k5Kh9CbewVQMY2fQXezX7Wg7p2orZWyB83UMUuQiepWr7QTmdUGgRM2YZLfkMDdSCh7Syi8XmBz",
  "key16": "4aFez4Grq8YsZ5mYmSErcLaUzsLopY3REoj2YRHBR5xt9ty75L1ERroVkykgBYbNFce6WBnNH6sQwwiademkdUqc",
  "key17": "4dSfa3cZ4MrzrCK96Wb9h35yWpg5aiEwz1PJNCdSZ23GeVzHUqfPHgfxLvL82cPHuNH9vVCZBrgbx75gTRJxDPaR",
  "key18": "472FPg1rPXboocnNbWBzxjuPsNp2VrZsYnxjnrX7jjWXHeTDkLXx5xwNfR3xdudBRpZrdBwQMXicgq2ypxbfMe5r",
  "key19": "3dA8M5VncFiGt4UZgDwpW6XYAJjhPcCHnZd1HqB9PbTXGdjknK1PgUmmYYdx5fm287JVU8eHvctqYjXrcZKBX9yx",
  "key20": "Qs1dyfmHQ7Yy5QHX7q3yhRTvZS26H7PqWpjVn8SHD27EFqFLjPpL3hSyeppULoiRnSD69P13zjsR4EvNAcEoWJh",
  "key21": "4ADqBxH3rEQasrJx3pUtzNb3Gpt27BU9KvJiEzhL2UF8Lm5anBw9jrH6QEsg5gvACs3b7o1xNJAAoFA4KtJtq5Hw",
  "key22": "2PM7R7L2nfeQkViRbwrLFiUEf5cEeaMCpv1duKt6riMhZ8dqwsCbVZQ3Ev4NnLao13wnQvx5GbzBhS3BmrSeKthB",
  "key23": "2yhQDC8Wc6KnnEZm47ZKvx9UZiQ85SMcm1MM4i3dcVNCCJQSUcnqaJvmWLaGUHAn35oRYSQerrsN5dM7huwX2Ab4",
  "key24": "BLfTgnTJvfVXjJXNafkbFyHysv6UDVpsVFem24aatzNmUXRF18deWXkY5f2hx1PuRC1uU4XXU8SFhf98McqxwpV",
  "key25": "5oT5foHkVX8DDiGji2bXiY9bjVELeizskShmVQ8kXvVqFpRieEhMBuNJsqe69i15hDLb5n3C87nez6z98GQFJyZh",
  "key26": "2iuJyHVXitJTBEjh6cdDXKbGNg1GsgdtXpjjb1aPTDzZK6Fmsb9aLhYLaQBPD3Q345XMQFdqMLXqMvbu1TsFMkB7",
  "key27": "5uMQVLsAbsWEXBPcwKBqhjbiHPCKQZGzLEjzTnRLJ88jW9tqJP1upmVbfgFxJ45nS9Mtb4kFKMgpvztheHBhcXR8",
  "key28": "38wH224pm41jnPQH253ua9jxWK9QodSwoUVjJcnxpkKHZRKf6M9aP4rcTHXCXHAWst2eXHcFGc3tWwV6ByfnuAHQ",
  "key29": "67PZYpco8MtFy9HTidT9RaSQFWjW4Pi4MXL7jeNkt6qRyFoK62iVtVfm85agNt4Uurjo6osRG81QcrQQV24EBRqd",
  "key30": "5J7ANbevk8VQyaEwxJ2SxD11EtpCbpkqa7xj9G6P9K1peWsCWtykJPUZrsu5S2ENP4DbrEEdonyWvmTcghnupkMd",
  "key31": "3hYsi5sYSHVMtpCQndfYqseY8ousZEz4WfQQm98veRxwMwTpRfkFxPRB1Mkfx8XFNVQCSw7j6iE9XgTX571AajcF",
  "key32": "5tvYqXUK179UCRM4r2Yy7m9YgRPb91gB2dNXcDwVmkihb74BsVRpXoY8UHy3kvJ9WKYqg8ryGUPimMS8gSvgRDva",
  "key33": "Q1Jv8NaGJ3wjQR3bfynniM1NX3ceKoWXG891DKQ9wvj6VACCrHCi8f4iHdqZqmikRL4LYxVU2A71w5nJKNNhxE4",
  "key34": "5wDt7TPxSbXDk7Z5xGRVKRMafH24vnensyeZZSfStfKhSjHdbdr4uqVcpNFZESV4CLxRjpREo5337UDTF8iwfsUy",
  "key35": "YhH66SVRsupAmW9EV7SMDAij5kx6A3jd1h3HghJgP957NxQyQJ2HYmeunrsdGnCRz9gkvXV36RdqmHDzzFqsiUF",
  "key36": "5mKFsEd7PgmrTAjDW4mPqLcAYaBjLQ7CJQ6GLx7dNcCUG7WUT1tabJcLgFX6wjZWeFqECSx2TEmvT6ZY9Ji8mazA",
  "key37": "4PFymTmjWEW7CU6XoF3SRA2BWduDaSXBJTsjZHmycZg3gptxaAMiNv13c1cnfe3Q46kvxHZZXfKgvecC6Depb5Ne",
  "key38": "64mm63wGmtwSbLQBZ3iXUZpjGFgHmmYjerRSGNtBdkCLxb2BLxwAmjJf2wZhxMryVkV6py8Xndb9XgV8RLgin8sN",
  "key39": "34F6i8CSUv6mFVPxyiaE7FRvsTRzz1qMzNqRMcMQdMaA1wMVUVid88nZmDVDfpgqVFxWMCnCEstxq1nPcE2CwkJK",
  "key40": "v9VaSxmNzxZd3aTB5r5MPioytwvBkEpMUNHENr8whFbYp3vRxBrBeEq2CyDipHhZDeHo8YqYts4sK3yiSHmqvKU",
  "key41": "2Y3qTRu73geqE2XvK4vwVD2fJRGRAScTjMqLsHF4t5tRHM6zi3Zh3TxUDpPkGHTjVNP7LnkMdYy1wnFiLJdMF97L",
  "key42": "3csqWqicTyrmms7GrCDdi7BY5yguqkJgtHytfes9PUT2CawAWdbCBvBPXiFgMZFPNoqqrzV19DbfQC3UpAe9vvyE",
  "key43": "moeeCzHBamENxkTkNToxFe79kBsPhW6w2kJBtUpyG65EboXf8un3ekhjniSGC3nF9Y8dwN1ks2mYjeKCdT8mPn7",
  "key44": "bxdpyoNcourNJ2Xi688jtfh8C7EgAoLkeqepcMLk2mSmmsUJzKp63Mbptt2Hmqwc1sNMTnx7zbUD1AfiLQH2h3Q",
  "key45": "44bLvnCB8nYVHYDxUhJEPfn5QWKeJGH5sPnhxQFj1JY5wAjiVZtpNGpoTdA3KFxygYYQLF9EL2VTS2Q33N4CbJap",
  "key46": "VemKfWdCg8bdj6ENUEGJ5AwRaSKsh3hrnbk4hgNgwH7iDMui4herSC6EqC4mdJNSociXCs764apCjCDqkvJRxbd"
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
