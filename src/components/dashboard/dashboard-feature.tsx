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
    "3j6Zt3hqcMNJw9LrhfdE4RAaYLA2YEdtokNdWxDi2ScFHx2YMK5McgR2kTdaV2dLbsT5fReydngocsDRDBsUPFir"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CSdRwi181oNLWDKgiirnUvhiJzsbXAvZCBd1mAWXHuJjajmcVsaVbV9n8fjGKUBUDhKn7egiHKAFKEJgpkswoY2",
  "key1": "2LX2W2FcCPyzPV1tEfTBERSvMMJbLbH7eyvEZEA4JD8GbzExqfs9UgrUgBd7Sbf9qm8gSsVD6k4as8HQbL9mRTa9",
  "key2": "35Ugir4Yin2HhwG6sZDpaDEUxqqdxwB4vHbz6Qv9eMfjEiDZh6CoD2U28JVqtaroZStEsAWmUFfDt6wQiigpSihH",
  "key3": "3DKa4uMjqZsYGLoeY82FV4bSEJc3vLtCiL2L9iT3A3EBM95jTDYUPNjw2WfcpsAX6KzLeWGjke6kE6zEJnzLiYuG",
  "key4": "3yMgn9GYLn6tjA8yrq92fBkTn2zHAs8FohZPphj8Pps7tmrHuAgTBn1JvpwB2mKvX4CFJPdrnGobn5FRZ1M9yXAt",
  "key5": "3kkKKw5hWqxoXhjoyfyo9PG9fidnLR6r8Agh7msqZBHFjgxuLja3oxeCFshgrdtG7HQx4Er2fsJbr7TDFUZT52R6",
  "key6": "2AQ8TvmMaVvrAVryY1SN5JgbFYC8rXyhmPGh6d4hfrYaNh17yE16mxZz1FjgP3SH55pZHv9WrA1to7Ge1EQTiCJV",
  "key7": "ADfN4VniEwYp3XQbNcbirzmxJj4AiHFwmymd1Z41WTNtx8BJC5nBjvaRyNThY8L6ued5NVavarJXZJ94TwwZaPw",
  "key8": "2vswrrPDBoawUAnvggbmtu274ne8X3QN5uRf2825rXGrv8dy7afGe4WxCaPQ43i8gGNxYdPb7kPnt5YosnGR78LT",
  "key9": "4sdsSHpdV9qVUAbnq5CCQj7zRqh9UC65sqSsEdqLVYL8M9oCmiP5gfDEgZeZQDXX13nH9AQawtsTTNML5LBxJjRs",
  "key10": "2YhsBGMsdkmjdb7HfcxN5ExTaDAbnRMvpmdBRtYnEP8UbiHmgGMsuS5YGymmxdjRwTrYADyJCcaW3S7HAineQWJD",
  "key11": "41YJEVk6S9Z9ji97rYQdQtqv6BKoKPZPg1oizBUd8tSdqxpmSz1JZtpkUdE47q6qHQkdBNspNDdEUyZKDt2KnuHg",
  "key12": "q4odkF3AiMsua9t96FaxAYmCo88Q3DoefhJAroezTyirPcpLkP2ojhxZRuvWnv7Z4ExatCUSdobt3pbbAESujfh",
  "key13": "xT7Q2t6Fh1NBQer37eo4vWj2aZEtHCxtF2pELwpB3aYhpcBHxuSeQ8KLYe9aoMJvLUKs55G5QmD8bQVGmv5rTCZ",
  "key14": "4B9R2DAtEZRcFKENZFZ591EXyZfm3jN4RBF8MSukcdWrAcw6Z2WnfobiivakJarTB7gy2TwiHc9tgDUvtUojguXg",
  "key15": "qzn6HzgGLc6iDQGomHUWKXYTrzQ5saUBSx6QCiertkzM5UeSb4NjH5Xjcmp8Qkz7BBvot7zsDWxJ5nxYwvPqXmp",
  "key16": "49ckQ4oButAwKUAwHth8mLMTquNS4sUAXL9BW56YLJeaoeGCiqmoBBGrFa2ZbkbWBn6MkundZgDheaYSq2iXT6iY",
  "key17": "3WqZySLQJBTqDuoji3CTwBNmBgENPTinXRyN2NLcYUeW3Mv1FBDiYLiHowa6ysDBBqywzKZuhqzUs5t3bWf35Pom",
  "key18": "4nDbqtE1EHDtXGAd53ZXbyPbVoaTeGvzPkzRWZy8oCMib2mJYvscg4SY9nfo73rdTjyie82wFaHMPxJKTrSfDXgY",
  "key19": "3ASqJV3WAok7H9LA3HZbyyCjiJToQRpTLLjf93Hn1nLJF2TC5FLSd8cP5NJE84CL4UWXu51vhr1yWrJCYNvNivaj",
  "key20": "5BrhF3SuwUfnfszD71uHx8R1U3qvH3fLnYkcuWhCWY7t45AkmVLtPyMhWcpQebm516Npid24TCiaN4UHca5m8zhQ",
  "key21": "59ttkF8VU2qpbGWq8jPUiomGkBek1YbY7uf6ZkqQvQFDDqvoQXKwNysAt6BELZd8HsFG4UbTRpNWRGc5PUe8U6Kt",
  "key22": "NFK787tBFLf2SduHHdSskGwErcpmMG669cRwyMaYennEgGitXYE61SR4jfWFZ9KE4uoURMhaSG7kBgZUP5VZ5QM",
  "key23": "4pTLDa8QFHgJb97HmA5sqD42s4GxXMnj74EJe1V6GtfVebCyfmk9kMBXgPFxBUoGJGHoLyBP2eUW4S8BhdcCogHr",
  "key24": "DF7wQVGeUgLCAYqvtZvdZ5uAnbDJkkmfoNqiFk9L6LQzMMpdt19an9pWxrzDzPZvAR7c8ZgFB1kbfrrzVbqh9XU"
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
