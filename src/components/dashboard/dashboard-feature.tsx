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
    "KudtEq2ViqxUvAg7TNTPywosoCU8g4Nh9LkLARMxCJwfAQj84spx25dsrvN1QqTriqyxmHoXSQH5koeRub44AeV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31453QAWTUzM4mKSV6YPkPjSzJvp8952c9DAiPSGXVDcNh4tiEeENb2H1zFNgXM8KRb4ukHG8sdCLoftX94WkCJm",
  "key1": "2e67u9agbwzDkWWHGAgTWbs9roP6u5P4vzSGbftC2hZWUt72WWLNgU5k4MetqLMFyaiRrQXfQKSP2TswJUR3JVLC",
  "key2": "5FTufWfR52LbopdpAw3oGZgyZ8ok49GPbyS3poxh3cf7vLGgn5RVMbN56U83XTYAB8ybtQHwiFbcJaNq2yhLESkn",
  "key3": "53mJxdS6QNWc7W1RKcWRqmeqoK6C1c9Y4Je3DVDbCBfDQjqrpRp5RDQ7yexF4maCgTiN8frUqZ2VF7Vy7WwZ2SAd",
  "key4": "4iwmPUbC13HknUwSSYnsbBLK2Mji9pANbuV57foefHrakdM8ytwPP412ouJSozDNoZRbYsFkdQ3hYkPAUNZHLZBv",
  "key5": "egjPeacZVJysEBTrJ69Hn7CvmehhBBcoSymCaoKbp4izYpYLrUzqy53ZHkKDoZg7xRgC4WuJcbyyxXaQWzfsd3p",
  "key6": "i2oG4GL9Au62SqpGwtdxX2JT9TVSGD3LzMV5kQVgo4zBSwVgru6Z1DcXy271DhYE7rYv9jyRTAvAaSxYk9XPMop",
  "key7": "UDs4swTTvQKuwMexqwjzYq3PkGnAYsBjmZZNdVnPLkdLadRsWobgu9wZGCno1TQdMqgwmx37LYkszp7UGL5fVBH",
  "key8": "g5RVsggzGFJnursn967hineTwBmjLrnEPACByJYwfkocGT3FW1wQbA31DetPeKeFPsYLSRgqY5ATq8DQtiwfNPf",
  "key9": "2XjPQdBWsMt4wTP5nHEd8zRJuoeahCoAfSPHoDx5L6uAgDo7EjZVTVPApDTcMhk628ErQ3Bd2hopwJseShxjcDLq",
  "key10": "oAoAKj2TDXAn6mp3mazB7N5aAfXk4UGYyuh4QywevhmW6K4xMsgERBcdmTb92PYXuTe2qhfHCaPQdcwruD1Rg9Y",
  "key11": "51Bcnz3cXqt5JETx1b4oGB9fAuxrT9xcRuyt14scP578rPQiu7RFDet8ycPvGkPqWk8ByZNX7j5myBo1B6o5ztYE",
  "key12": "RCG1bHB2KnTytL2PJ4aDyE4fGDYvq6rgqJU4xZbsf5wiuK6ErfGq6q4NcFTzQN2QynSZL8MUhPeU92SXdnyGayt",
  "key13": "38fsAve7VCLEkPkdg7gRPKcvNAnVkXh2TFabZ82xJFj9MTZazQz1XWBfkyu7mFaC5jwAFL2WEc1ATYFmcGuUeapS",
  "key14": "37HBx4ShuHyHghmKRhj1xkDQfefQrbbrrNh8YZ3NCZLEtCttzbKQs2X4exJRBS8H2BSf2owm7gocGryCYMq7wLdn",
  "key15": "2GjphWPXX9evWq5NP7zUQ8v86mWjd3h35GFe13YkZpKA5fSxabxCQ4AWmkZXgcYSh3vDSbp2eUy6zaE6ccXLivwm",
  "key16": "37FPxPuWipdZgFfNtLMksqVbBxjFZjCkFrahi5kLmYekjiRvf4ctseqDmihhwGTRkAg773YqFu1WuSv4bgT3i1LH",
  "key17": "2vubJREsuKDkKyFUhKdGK5LMxc9vQxfiju7VLQJtTzvmPcLHTTh8rXgchSBfpwHogF2XXc2TTCBUxyusyAb1s2nm",
  "key18": "5AQRrzqh8xXTCSNwGyiLJkgF1Mfw5quEoxFi65Uk64f8U1PZkb8hTf4sSKnFkUay2awKAPZm1fCUTKDv8epG8Bk7",
  "key19": "32Lhx7JQcXhXcujjzpCjJXfNKNzBJnwmWxbtbd3E2dCzNJ56HP3ReX32noyu4mCBWAE8Zprv3WoLv4PXaW79SFLV",
  "key20": "AJGtUikeNs5FMFUHaAAoRQyXpoyFdRffNDgUTFfyBxZCLFMDGBVJFh3x6ZZdryp5FDQGyXFfRV6zLA6EYJUS55x",
  "key21": "zqo1HsAj2x3MqBSrJurR1RsHBPnqWcJY8aMt2BWATsuur1kEWzWxi8ir6HgHxonHfvs8sPRwXYG5pProS3Cwtfk",
  "key22": "4scyVUB1jT4DMS8b1bPpP6qKGY8UTM8em4Tgc8YqhpGyAtE7KDoSGwfEBexRsAUakpSGjtyPMrysKW2tpRdhyM7T",
  "key23": "2KVbAS7Q1WifpUY2yZjCaMrDwSTthSb2tr58N8k18vnMAj6iWZLP6nuw5swNm877LewiMptiwrZ2YXqx6Mc71nKC",
  "key24": "3F2PixuF7EyHToSh1WECyEkbagRdzJFQPJaGVftYvAkjSq47bKF8UDFJNHj36t9c81mQF9ehHaEEGvtSk5gLBYaw",
  "key25": "DCouDydy3TUhJFighMMUV8sYVrHGcNPKUTexZwq4apankVr4iTYaDvtYnoZhPkjBT38xgzdNzNGbLwb6FZVogdS",
  "key26": "3yjmVDwLM4RErscRpV3yQWXd3av4uTFZ1UbUrz3NS2Q7EyRgTn1em6bdCYS3kHiE9K5d6QCcgcxvsk5xqgB2Hobo",
  "key27": "5kmkCjvh23ibfbNJsghgMhSe254TAWwLhKFZJbcgBDUZ1bwCG4vzncfPRAK5VBK1QdzC83H5xYRG8GJVBDcqQVxD"
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
