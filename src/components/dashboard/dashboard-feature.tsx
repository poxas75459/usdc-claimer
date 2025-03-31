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
    "3CLxrfykegwddMKjawqVJSAaovKD3uaioLHGkfb4LwAPCs9GrePFjKhZNZvzKjyvWHVzXf7kqzYjFXeKghqmC8HF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58mVEqdgSB7DvpWASPS4afe9Dk4ZTWF86pXuYFRRdYSGqmBUisAgnDr2n4uux4pta7u7LELm7VAS2aHS2U1swftB",
  "key1": "mBnMVtsNf7nkeKNxrBzT78CfoC1f9CXioZ7s7qnqiEfU7ZgJU8peje8Y8ASFqqaDTnvYkQJ7RmoUUoaPuuRxT95",
  "key2": "5y5mow9b2FAECHycCdyEX5qLP3zKyz4ho6ep5xqzY11yjQU8dgHvUtQoTDF7LqHeRahFsNoeSn1UCu6hYeCrzWmk",
  "key3": "2yyFKMiDUEWRKh7kSZsJHseXFTLEovr9pVaT664SMLymGDfRtdoke8TXhoZCMiZinLZJkJfzHBYG6APsQWef2u8F",
  "key4": "4P3fPa7N2LhTMUuWJWVE3rtykzfJ1RWc9afzMTzFA2nkmspise9uQQ1UgB6mYwUW7njr7i1wLGDcxbQAW32TyWyN",
  "key5": "LGHGeKY1qqcuLeZsQ8sNwpKLwf6FFizLA5bytsV8WP6gPW486kaJht5ydFHWZUvo72r76sfVq5g5btQLyfNa7AM",
  "key6": "5xTg5enwSXveCw4WNzzqtE5zgrhRFmEPga9dmFkDoD5hUajA8FJbdJDEqZuUp2nywhGhNxgCAZb3UxtgiguFZizm",
  "key7": "514b4wANfWkz5Ekz7Fq1EDKdyNAVdxVM3CGvya6bP3EkaZxPFcdfVJVbYuNrDZR85RcASVZi7QHTnLexuLZbjPjL",
  "key8": "5mRU7dyDkVp7c53CenHBEqbFYfjqQjJfNJJCfpPj1Ap99AZqN9fuVydyyj3UrKRbBZ2mnunRXUmntptFFxwC47Li",
  "key9": "4nbEA19rc8ZkKiR4GRobZNzbEFLd6YikQgUfZKmfgguESWAdxmzEMcrnBNiEd1v3WKLbKMRfMpyncdDiouJbsLot",
  "key10": "438QeTGrAtjZhnG2CR2mJFodBz8oiD1vg4QYSbYL4nZXGy3UPMVXLJJoZpx3xvYcguFYoJU2CSt6iH6zVMeCmMJD",
  "key11": "5YCJM7wz4HzdZcS68ALf5dfGUvDGWCKsrUG9TRrLYjEnhp5sn1r877BS4Xpudux4SuuUuQcemA84KAd5mzkRf8EY",
  "key12": "5TcoouUdVQbf4mVz56aqTfNp9zWSWyNFMXskCG7FZheP74913gZqEhEdVCzHjE2NLJpSnsN6AzmcaX9SckMa5Vfp",
  "key13": "4FAGYzKTKwuDsw6vatE7seY58bf8RSHdU6HoGVuNXPeZYkQYrvjgbEHQrUoTcyutXGqftDxRV5PQNtQCq7L5htyS",
  "key14": "2TuRp4wA5tpRdyi5LyQoaihbPPLbxXVaeuEiVgQ9pAVXyYFgTFeepk8nRss2ztq7iB6FqXfYJPGkDbkj1D173DfK",
  "key15": "2REAqTAwSCoyFHQ6gGGEvKXapg42epCmoHESZQPw7sAfLnitGdaHQTf2bHvVgVFwmLpJXNH2SuGincKYRKvisN48",
  "key16": "vRRqdZo8Pda84n7q3wAfH9bsxHqazBsXaLjgYLf7dxRMX6AEkdMR96BkVZcrrJHTKihuZMaGxwhGVswDuFaMhJC",
  "key17": "4dyKe9tvGaeiiWshRjP4K9i3fXariszkY4fiortedHqNuxX2p7Yu2fZBoqMoT9xYaLuCfZEPqmmDaGfdg9S89e86",
  "key18": "4mAVc73kYML5t7PM8umW9qqjMNKvfq6yjPjJN32aGTKZtFiTzcRBrJWKZpBvE5twPGkap2vFBKjnee4sPNje6YbC",
  "key19": "4864fFkP8c5Br2GdpFhqde4vr1xhQTnJSuUqfqx7g1kmJazWRMGk9xBwnmq3prssSoCemUFWxtiPczgafD5Sy28A",
  "key20": "4CETBjZgafoVsvojDY8DWNEebbVFXyLXw4yS9mEghTDELVbeL4t28N674zHLnBECqhJKAfyVwpk2o2toVpLKLFGM",
  "key21": "YaYgubD7d2LyVxddfnmUhxrNC91hqycEPsYB5omamHBvAifMaCUxV6UvBncsjTwJeBqxLkGiaLmjw8FiDhkotiQ",
  "key22": "59hHUA96VzwKoopYxheuCf1uXoLZghoLBQiFvVC4Siqf8Jw7N1zPBeHkZE6pTTH8kDz2etkT3qwTN3v9xPmTb1xH",
  "key23": "5HzMX5Ye4W3gdJmLca5D8qrMRhToLUxiBFBCmM6r7BdPk1VzQspMCnwP4NE53956PKWCgznKmxj8P7tyhcwqKYCr",
  "key24": "5WBVByccYnmPb84fthJVME1e9eQxTmw9T7wyGjDgfWfE5hX1qiwS6QVwfXCLTBjLBSp5nnr9WtWshuf5Hkz1335B",
  "key25": "QjU8AuftEuFKMuLwiqYuAEpACvEMpZ6YWxvh4nMtJKmPNYsjqfGc4i7eMawjYPmQ98RwAwsZQSDYLLMS8wvbpLY",
  "key26": "2uUEobz4z7sWrQSqvDHY4dFgAdz2QR6LL1yhXg77xdc9wz82ytWbndL9d4bJT6tSeFC8XxBy1PJbEE49oUcdxKTZ",
  "key27": "3iMsfZuCiBgbU2SMfYZa6fwZGQdn5YmqzVogyDnMTtkY11sPxfAiQytnhMsvH9wFhPqCK82eYSYaznSm4TbW4fUW",
  "key28": "4qp9Skehj5muay5RX8FeVGUGy2D8KXjbtCGxd7HF2Gp4iVx5WnwdXz2ZbkGNVVGKZUwQK5jWPxUcKqHjjyjUwLmt",
  "key29": "2SHRFSZHdGzi6Ps57gLEmaRcGcQoegnz36CWJ3nenzvzQFHhhVbrEfdwFsXqfeMkHLknZDKvUEFvt3MycMr7TkDG",
  "key30": "33TFjUeDKb3ejuqhPzmsx2SBE46zxxtRVxN2o8QLSoKLX6yqabbZ1xZVPXX6qabzuFxpQWSZ7mfU4fhukDCqthNn",
  "key31": "2VEsEkB2qfJXjMMvzWixBxsippWMLmeEAo4UPfbL5HuQuh6ZsmJXhxyuSgL5oQAxYSYLpdTdZFhuS8MvDFzpycC4",
  "key32": "3FBY6AGGWyP7hHHpiTcRfMq5xmKrGSwP4nEgxs1U9TaakKT4d9aubU89exUYXSzhMRF8fmtbQvT5Vweyygyg48Tw"
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
