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
    "iVcZ7hsxfNGbzUaVNNU8mCPH4jAW5j1tTPCyrQESEeoaFwrQMwU4Jquo9mPssTQ8yxg1UQUPMqeHxC55qnhrkus"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GXQsNd4JPxYSv8hkCjwrft3KadiLVw5YoLk1HDUAiu9niPTeD3CqtH3LwQbGxw7E4xqnyTkrjNgGXUDaixMYLhj",
  "key1": "2fGPfvizwubHed2Bjpm1Aj1q2Lt5BkPo7EwhuYnvfCw6LF6J7k4pmdsJAbNKybbkg6y88dsSFBq4T3j9YdY6eZKx",
  "key2": "3f7p5VQ8xWihPdMiR1JuzhN5fbf8F1yU9J2C2hTfEvvy4wRXah8xiNc7nh3LyoEB2j8CinTJCSo7u86kAU9mEw3M",
  "key3": "52W3WrG2m6US1b273fXtHtzEq9YyeW9FAWCf4LVM6docxfPUVzbhhshsYayot1iN1KMFVStsgA5YVQR2jvTjKGiq",
  "key4": "4WNMrFtUgB6xgFCYH1YMrTELrgqLk4wUDc9vAGhqHyK4Gv4kpssDVQnVyCqvbBibc8GLg6KWNSbPwxmn1H8dQdYX",
  "key5": "46arXHNxNEKKQ4ud7je9bd2xuAe5BijqyKL6jXhsp9DbQGJeH5B3PjFjBYdqMYLKn3kghdmy75qMesL97z7X6SCM",
  "key6": "RdmkPDF3M2BjBjAfucL8gCqGVdBQaiK3ScWTLyJ1H14zTf7LSo26h1d5nU7eDr1Zx1VJfLdGzz2CtB8Em2KDU6a",
  "key7": "2p6ppLVZJBZaYSbBpKPa6jgAsfEFDFnWQE7CwmCDsnpifYRy47p8agvG8dLkkE6UKLRxKVzewRs6dccP9oB2shnC",
  "key8": "2jBNVwpEFu5DGk24QUwfXXJe2oy4ZUJDAzgof6zFYatoNiHKr4vpDwja5vsGnC4K4LeaASGjLyMtyQZ6gckdJMu3",
  "key9": "298xZP4KDwxQb1Q8qAWCfvtpgtpCsy9yFrQT6QMa5Gda8hm7H7jZyUXGp4NcxF3pJUdPC4h95un87c7afQgn1bEd",
  "key10": "3saEt3QhoAeSpf4jcReBq2qVY3QLYmzWY2B8tdC9iNqyPLrftVMYYiksHXXJmJrHqXPMhnqiKEEGP9db7pSEoKUE",
  "key11": "2rcyia69HyKRt4oEF52oVYsUEYiza5xk7iteYAGAKxoxrVahw8RqktCxyEbxLGtpuwc3ZErkg6Af5WyV1awh9XR4",
  "key12": "yfygtvbDQBNK5pjbTZWCWrV7bGdVCuzCHenqdPcZQHyjrPZUmP4dtkbbAHmACtTYM2GjUB6QuxUjAWbuJLuy1k4",
  "key13": "49WKgpYppMHCSRA2CXac1KucB5v1x3c1HGBDYwU5qaTxVUwFegLJ74VYtqpSFH7xFHUoE39Ng2h7HQ7BXkv4aDus",
  "key14": "21nCmQ8L1quYnAuHUUwuoHLWfrt5sDQcVG3hC89eT5AmrmFB9d8qBbvNcXLWrfbtwXQqERZVa53XUuscxWQevmUm",
  "key15": "313YaRmMRYYBexnaPRZT8WQvKGM1n8Kxz5VtdQf4CzrjMP3RnLN6ZAof3bpsVJbHxbXRfEHMiiLDKiseiu5UCKpn",
  "key16": "5BmyvcLJ3kYviY7uvApnUrMGEkJk5auqqo4bCyk5LgUxSHdzy95ehbbFd1o4MCNdnbzcwGEaT9cQZiYhGR6B82ty",
  "key17": "fJ6zPp8kazNK7VFM66LqVPjgJ4aJjHN59nNhkp3ZCsvKwUhVsrUDMxrcivggWqwJCTAqVHXNGVyfgJ6P3DXsHRG",
  "key18": "3QrxL9Ew4JhwscLgZ7781BxWCccrniV7GHAsWLzFP9utC9V5Q88iHzeRKeobTcKaR6mmiC3uychx6gJp9n7ys6cS",
  "key19": "5NrS1aLpXwwXuX1UCGjBZyT9mvUpw6q46TJGVB4tAMUY4zZ2MQRovdivXZXt4o44jAQa8HLVULqqo3U47V1BYiGx",
  "key20": "2Ty4g8amL6cnvVdDo15tuHKHqbogiLPmtR9Br7LF2X9BWJbyroLJUDcYkU8HQBBqmmD8MWLBSiVo2Mwfxcqpkbme",
  "key21": "5bUYGtDsSSiVYsYBgBpYT72LSgqrohtxgtVtr4j4uNwqesWpPPM6Cnc6qfhT4JxbfxAGmvAHzMvsTmpL3GnrfBc7",
  "key22": "2ZMt41Nvhn1FQQxTHmpR78ya4sMG3dsj9mCSyCABTxzSVF7Q167e9awfaPUTdKujFtL8uCLdmdyVQhviW93o9mag",
  "key23": "EySFoirt2PjFmUWZrsBe6xCuPoZ8cm6P5gdyZnmUwaSvP6d4yCb77JCQwUrPssnfuTsoE8id1Cx4i3AwUg55Cdk",
  "key24": "4ggKiHxdFMqLsJ8WxskD5N7tsoShbWpvAkxX8MtfYg1jmJNqaMfgxyyTrqA9gJgkKFnQBMo49QigwdBzS3QC5e1q",
  "key25": "2Ym2s25jSVvAeaw4nkzXjnxXs4BsXuLE4FuvAmZP4c1jnVorSSUVhefZvH3veHpQ79MsmDMeTLt5Svdz2v2opz4q",
  "key26": "3FAfnnMHn9p1mB7R8NXGr8RULCGo8cJpa9e28hS4oyLMjTPY4VN2PqVwxsDHUQPDRhBHJzx3qPqBqmZEukfYfWdL",
  "key27": "4gPvjMzeXcUh54WCNLbMXZELVpW29X5XRWMinnopZxkmzxMSADceoeixr88EGsE9qj91HpWvTZRjFhLDJ4e1KrC8",
  "key28": "5weKXxNpJW7SJhGvwwryUW4j3H2bCXszWrGobTuvXhVeDqUfp4LEz1nUSfpZo347P7P45AaWZS9BxppBQfJp1kTx",
  "key29": "3mtYXqV7VBGeNd67hekJDnaMQEut2PcZr5yxKoHuof85HWQoF2FUbeoTZnn2HJifyEGTffTgrabuUzASAKwNsHzD",
  "key30": "2TAHJhB4f9gQcAeEU6wxLH7iCgRe7U3XJwxVmsEwQBQidiVU9Th9kUywW2C71szYzGoYLSnNCQ8Hm9MDFAhV3sM2",
  "key31": "3tqrtNLUkgRvy3dgBF6FLvEJQ5f7i7FYnKmHJ1UjXANWWjyFeqe4kJWAEv98Dciq2hqsz7e77DPkzrSVbaRobwpw",
  "key32": "3fKuAqs1TA7ecuuuw7KJYEiWQ7keaYnJ9bVGeh1qoCa7Wrj97aS1BnYA4S8Z888ksT15aw2xw6rNsTo7rdBgs9qL",
  "key33": "2HW38qcz3yy1ez5TeRZ9KTR1WukWiTWvdQnyvoUQuG6HGmkhoaieRjzeYLzW79BQ8hGdNFGrkoqJ5uojjgwvEvzM",
  "key34": "jtSSs41qpwb72zkDYi9vPnsTUX6jVDqJYHJ72nd7mRnCw43gUykBGpzXAicCB2qLmdbs5bQutjiQWbCaBdeidxd",
  "key35": "fTF1LTdoeDA1VPvj3NJKisgSbbvppQfvqYz9ZqG1NGfa4UYw642RQ9oeGNibPS5CwJCFRqKzAvDbDdaajgFkJR8",
  "key36": "3TA7CQrTsijy5zPFbu3vV71gTnjzbV7247a5g5vHDGYgUqq47VqDyrxazfJkAN9kjgxm4VNvFpSskHvYTTRWqbvq",
  "key37": "dE99T3SLTn6nBvnCYZ1RAL23k9PupqNNRwZnRXAeTngY5YT1kZZY7FrJkX7mn6JxZyPbENGqpjD9cGFug2RHJKh",
  "key38": "H9itS2C6P6WmtwWHAYeQHeS184puRnLzvypt4DefRbbJZ7vq11ce1BjM6T75Ga9LoREnER9iaum7FVvk6Lg8HyP"
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
