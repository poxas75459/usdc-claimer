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
    "5YqyRv15sze2RpbK2cwJG9YL5LKKwk1HZD5Wy8UbC7DJgNjLqttV1toHtMmgr3EyxBt7jsXgQTwQAPujkkA8mQPW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cxewYm1PorMbCzVE47McRBDHWfDWCPRzWB4PMKSAqLPdNvo3Q4o48bC12HpuCLjSY3s1GDJ59q5Y6ZXKCkcLspV",
  "key1": "Xop7kjFp3yiKU9xFor8EWpgsPSBDDYvHgMkRuPobEx7uo9MpRNNRQD31Vxks1qSsjfq2fHBFf4gECmJaAk4eTbv",
  "key2": "3gYisE2yrcPxZho9jRWP1i5hojdLjHeA2QCYwaNckB16pMo3TxhGRSWym9NXXJJn7puRuUcxXm1zv6wh9Kf91JKh",
  "key3": "5QsMEs8CYrLa8NggjLmpLxJXAZS44syjjRQGbSWtgqzvfnqg6TGqDgi8S1wvC1b3CiVF8QzpWXuNBTXBN9M5Pyp1",
  "key4": "4tYsjvLJ6FH8snFas4mZx8c4CXUNe8LBPm9x6o76EVmUVUQQoL4KVw9FT76BEpUTabf77xsMNYoncF11xYt4fwGS",
  "key5": "2BLbN7GiTQYMj67RbGXV7sJJJi4i8fvQgnpmS3Gm7bxD6b2WKwqVupQFY2w1gamnLcVP1Z4o1mtDTvffVCvwNANY",
  "key6": "2NbgUQvMysJHQDxBufA5RNsDKgsF86vBL5KkTqDgD5hjUSwE1xpGvNFzeGPxn7H1zfjmBtgtBRpyanDQod5sTDPU",
  "key7": "4nQoXqmt5nHGafthV3wdHhBvhy4LiZXtBFisP7PzgayAbpYeaYpJci3bBqmQtvH67QsTo528nbHtfDrXSxaUH6gy",
  "key8": "2VrfTpuhCSxkykrzeQD58yUNTPTYVwAZ3WnTJbfJvrZNk5J3AEtX6ySbmpoCyiih1f91z5Xaqb2165ezcmSHfrFM",
  "key9": "L3ShoUdwf9zdVEXiLjZ8pvuuchp27P8mo2y8fiSH249ADiS7dCttFxt6djFXd8qfNkwNkFtwjGoFvWFr79Aqk6v",
  "key10": "59o6E2LbzW42jV1uAMZpqE3aoJYcJLswyA6E1dbQCPwRUPb8DjozSMCwYkYijGM6MFofD1QDtUx21b2pMSLAwM4V",
  "key11": "5RJBopxb7ior8oRTWZS6ZYrFriSbuKoeJdrx38rXhMZ6rXfY4jCSWfct3yNBcFdxpW6XMBtRNPw92FkEooycUz7k",
  "key12": "3kepVmJcv3AvrtdNQoySCumyuyWCHW6jasLy6NeHb6nQxWH8us2EfJBtsHQpmkkuqNCwSsPR3jqyzAk1W5ocekxm",
  "key13": "5pHzeaHsjLruiP6aJfNXvZvS3Qg7xAZcgNyZQgb3n5bsX9fxvCg56eoqnmqnX1jGhKR1LtgXTQQbH9gPggxmFBg1",
  "key14": "128Yy7efd7f5mbJbCkG5cJSgSzGgkwAWvY1F7RSpQSsFzdSoxhTCXBM6yqXhuJCLK1skViAGV2F79tTK44euLZSL",
  "key15": "2NHhJEVje4uZ63sYBxjM7vhBHbAEpx9gZ4CuVkoJe9xPkjGx2vkMigPn1dPdeJA2DdmVmxzCFNNUBKghnYStpEPZ",
  "key16": "mDYayfsTAbEWrYJuQeP7oemJyvnRdgrcFQWr4AbccEtznF81B8Lbx4H6B2cCPaSvUPfqG42wfphuypxC5CvkmPd",
  "key17": "34Mv1Xp8gqke1F5GbQZ3EyN9ZBRNGt7ebfDENtEHJPevNQaB6g7JRAEuNNw6KU6rzLfX8ZZKkxwj17wsMMsQomyd",
  "key18": "f1teZhyZQLwrWHWLJDmSv57qtbsCnwa3xBt2iNvCBMKcX3NSZ9CHLYzxLTfNyMajdvkMnLGEY1qtazcECxacqKy",
  "key19": "3JUJ7bpmBmun2QfphX1gH4WrP77UpBvXzFzt9SrxsHSgBdr5XsbzgTNzE4MMDPbEEpqV8jzrcU7qg6mi4vbR88E8",
  "key20": "5osEnooL3KB1a9KHch3ghUmKqRfk6UeR3PzEYi48Kfi4sTbeU16gM6q9Nw2HJdsfB654QWT1uKejoRjtX3yHMMgz",
  "key21": "2PbNjGtRsX9qEbJEKM7L78Rcf6ZphFB9P8Zcy2VmF1kwgVZW84hMqrb446cGwM6f66BNHZ9pcUXtBGssqBUBiu8Y",
  "key22": "equsCNDRFDbz32q6Ptey28tjas61hgi8DkGU1Hh6cftVxEgUUtWJX29QHkQjdup7daPrAnzpBkTi1W35zR1Fttk",
  "key23": "3eAK1aK2rnu7DrQgUuHzNRpz8xa9MT3AKaibqir6kVLbEDDbZdi7wQ53DQtSeysD7QTffKLRWrscrsPTUMFaek5r",
  "key24": "4QTZmUKpLR6ewzLTtHmEHmX5pdkX47qP69EArJhMMyQXVY66WvcZdZNhgEqYXVaaTju91GGiLc4LehGgv8t8GddG",
  "key25": "3fRjipgVMNS8ubmWLAV438zok1GvPQocfMEgqCUTHz6EvhHMLYP74jBRYLq3HPh18BRahD4vHtyuXvQ4o6QCGpJT"
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
