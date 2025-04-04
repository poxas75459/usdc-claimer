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
    "2ecNYmZ6k49xASo2K1SR44jJDWp3yzBfL8p5SoixgkU8SJsabV3h418ngauYcDTCKYhdvU5fmTf4GHDR2eLbWdUZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3P6SSnfVx6Jas2e1EC42pU3gBtZjyXe3qhiYohvAJ6p3AA1S7mWDBtY6z5y17Ko42tQRN4Qn7cASoYiXsCns7BsH",
  "key1": "4epGkHttHZeGER3ACQD1hDfuhbjkfWDip59xngjHNPeR4mQvGm6QHDH8Kzx47oy6C5bunv9Lf2JTmgbKYorTNfxY",
  "key2": "ZWRgcsdXgaqfk3sXDyRJtksn7YWHwMXcTcJvwnDyp7KfNQM5WtWkQmBGqasTMT8GjbLAtwZr3EPg8MY2Mm4uKsL",
  "key3": "PHDL1o4kmKSCjVNmmxijVKmSVyGhxzLteJEBgd8g4ypGaNvNEod2aDYwU18YcjnbMx31pKQwk5BtXXfvSNxKKDm",
  "key4": "2tr4AbtqAX4Czmd3QMDFTehbTNSZoGaHFd8St58gxT9aXd53hXvBWYTQgwGi7fUD1d6H2VHGCJPmRkuJjogRmCau",
  "key5": "3YtzQs8UqR9wRuVitoNXyvLrJHRU2X7EDPRpzQEvePNXS2xpDP1P7ENrSXN7FMcmKVX5uUCLzssLqWy1DXZtYZs9",
  "key6": "KeAYYDmjtFTbbVw7iaJ8PiE4TBLkAjbxM7yyPZRgNW418GiJgnRX7Bv5kYz8EQQVyT14TLBsqfmJgQX4SsNGGsu",
  "key7": "4ZReSpLwJ2eETQ9dDcvnM9Ds9tFspbkvPdAUjatCSzn93h8kfYzzHZSMJcxpGfoWz2Qp3TAL9QM3mfz7gPCVWmfd",
  "key8": "2ak551rDM7Rsp35tamzpHNh4nh9Em6RthEvFDEmtbmFaoBaxNNQGxx4FETNsWgAfj9erH7QQhHqyz4jp3NtR2GRx",
  "key9": "3CVcfWscS4Wk5TQSTFgi5CxVRBKkx4c7hx5gsdVxnMff7BMQj4ZMxbzbZvEjFHx9M86MkScwskTqpkqApYuCMHiE",
  "key10": "2zMhHcdgpkewxtZF9zQV1kPY5tJH6eNCCou1U7qLuyjjtL5CxC1npUkrdSQvKdt7c8ykzNAutneiommo3rx3KKe4",
  "key11": "WLv2xwDeD1Wjs6nCv6CSbfUppnUNLuB2QpwMjmn3vXBU3FzE8ygPnR1zgsvnkRabeaLFDDF2zHhESPnLtdzgh6j",
  "key12": "5cstdQqyTHuRQXCSBBBHWsM1LN6GvuSiHRiKpZpcCVUyfNrDJS86uJfi4q9LduFXUPHstFkMZ79FuLAVenFtipxQ",
  "key13": "2ia39UZD7TZ3kDEu2iG9rn2hqjCQp3yCi1uCi4nfpTSKtYsTK6qvzY7TvBqPJ7utveuDrXsTiaoARnR5JucgaarY",
  "key14": "2EyAjxaCZL2VDMC2DBFy5172bZ6BhH12fVDU7EsoWvYAbp3gxtQwfG4e39iaXgUpwrBnZZiwCj9Utb3WraxsHxhb",
  "key15": "4odwF8zuUAuph8qnEezE1nHNkbpx5P62TGVpk6AVShsbGMj45RBcZzvhJsSCpF2yabTzyYFSuEMMqopU1KX1Vux5",
  "key16": "CAtSeN6254boSA5ngfeHp4PLe8PpL6wMrU6EstT7PFSK2jFemyAELsEcqBVsMm5C7V6dGA2XGjq2Qaj8fLssJnG",
  "key17": "uZUEWSFn1xcG1nf7HEAEefwqUW19JYHZiQ78NRrLBcTwGJmaBQuiFXURgCGxTnCiscj6QV1XLanTwbEGZUrE74G",
  "key18": "4GhJ7k37WopDZkFtZSpybSGgJpXJgLCyYH4q4pYMFtLfBeRMtyjBVSydH1QGUTQNZfyuaAi7MRwLEd2JaYiHnfgN",
  "key19": "3jBwaSFg7bBNNrZjrYqn8vup33eJNuFsdbGrv9urrng6xwFuLTvPhXUbDoAhR6amvbUPJBijiPDG3acP3s3wMGXM",
  "key20": "5gVoQs3RTybMao52GPhmYmtKHNzzmuDEXfDQkJC3VX77AyUFu2G5hX3DZmQCTnzrArxdZwtQMtK3UkL3P48uBCcD",
  "key21": "5ypQijPuyMHn89q5CcWBLYZ2ZRYHtpBfWGz4W1Y7G8UJKqQQCFe28PXVeXwTfQN9bG44u56exHFmVee53x58RG46",
  "key22": "5SpBbhtZFzi8ktGFS1R3YqaD73NWfomnUBimpUGP97gRN3PjBcG2yojejy7sdKWNeD9jaU1AYVAcsgjYu7WxtiZn",
  "key23": "2Dg4VsmagQiuNsEXJfFFiqP3bqoEiGWWtggAmRjxvnDe2muATZVCWQu9R7xowmf2AZ7gsY2DeKMSqyVZE4e6n2LY",
  "key24": "3sTAAohCs8En3M1jSCnNaZqx6KVpUMEfxMhH92Eokuv2AW84U2XE1HoJenPapyqoZF1wbmTYP2KaKDdzc8R98zNL",
  "key25": "5B57nzP6xHfAvzG4ozdUgQTi2C86fbESRu6Z2z5haXw69527NGoZd5SrE9hVBZvA2hJN7ZYCfsL86AYBCC5WHK7G",
  "key26": "2HWkbEbSbCWqC7GMHkNZFkjEwCAtSSRXQy8MAm65G7EBYQidWcfv6G1K6ennA1parZxxeBJjLqem65WeP2sAEP8E",
  "key27": "2xC52oBHiVxwQw7aEqv8gozzgYSZyF9CMjYVYFwGcrKp2mGcFbEkLFC52SZQsdiV85m6NULvnZBr34VNqm9ggJnj",
  "key28": "2fYiDahHbvfnZnYB4X65XibdoLLwMRSKki9bvqCZwnAGnNhMqvUiQnV38GdSo2ZuG15W4chEHPhKY5CAjvdZZMBF",
  "key29": "666wsqG5ycCA225tKpoPT8RE5niv5S3qpfy4efTqaL3RRsFrBHW8cDJLhr83vwcxG8rEdZFmpr6iqG8LbvDSmM8Y",
  "key30": "ic886pSg7ZRCd5Rg7CbUbNry4Carrzh8Kp8SP53NgvGFM97qoi2H9MyMkQ2AxppdZsNBbzJQPtXYAscbnoL2txu"
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
