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
    "33xDkKk3vbFm82nQE2JLmGpsHxAvyAFno3vHxTgsfG3FHvVtzcxNayMoYSfG1V4WXEb3LH6icGPyrmnRoWUhXaco"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tbjnZ2sCdQ69Fqmh5aweJsR6tenXxhrpsxoTDCaf5q3Wp7mCL5hxB2JxjwHAahfsAhn7fMURnX7NgwwoVpgt7M3",
  "key1": "59gChJiLLk8C6RKLgNvmmHrejKxX7MEZ3JdTZCUbwFwWKPbbhiUpKfpVdBMdFBDmboSwW9Mg7khdjVR8P798K8Zh",
  "key2": "4M4rL2CwDd3DVLdS9uHgqHgdEupDe1BCFpKyGRi35Rqmkxsr8sb7tUW5XvxhzPVFYWcFVygmc5eETKpo4aK1ii23",
  "key3": "2bGCnCKLgQM4DPF3MpHsDFaf8SuYZWjk1TX2Dx7XdxBRxBEurRWfHa8m7zGSDQawdRLWnvHkm1kRwuqJ12D7cYUW",
  "key4": "a7Whv4v5RpFSBnpMSZqqnfhQy9cBACSwWfago5bv6Pgc52rzNigKLwtxQaVa3vvd9KC9euRb8o5zAU6Phu9v1mW",
  "key5": "5s3EEgmZ6N9SuGTP48jH4Fs21beWu4AHmCDqtCR8JGo4kjcyW1uyVqqMGhChVPTYCvVTkzfsZu32dMJ4hC4eXzgU",
  "key6": "2HvyAuM1KQ4hJNBP3YMEBms777dqteeLBNaYZvdhAnDFKjHCGuw4riDFbYdzDWrf9FtXpB5Gg997ZnQDomifiFHz",
  "key7": "4ZgV3auDDqMr92fce7QKHm2BUdHPCrmm2fi4AU7A1EbJfqEiV8BqkSiRfr6vvrnUnp7SurwGYRqTzh3KARujKTgo",
  "key8": "62jKmNFJEJ486TzSaUQ1Y5J5m5pqAVZ9jx6ofDoDzQURhqkEKCuYmfDwe3emvUqXhaSwfKqjkwCkSW2qq5UaRa8B",
  "key9": "5vgsJ5A8SpcCEdwuPN3CFrT7zpVjpjky7a6Mcon7Qb2WpBWEhntzrpqouz1HXDWmcwyPuYXZ9AWJRtvfeGTR1cnH",
  "key10": "mStZnrtXKbwvKPPj27F2hSNUGyBdBxb1R2fuxFYWfYvZbdNVSp9xTyRthcH15rRCUWDWuhQtNueN5fDBTks936s",
  "key11": "2nhXPwCz9bXAapGSNq7FgEiWpdYYzVktfWHpCb5EjrquNVJf6gBJcGS3j2dbU6iusXytuZmvZAN96khJ81KQgLzS",
  "key12": "5HpeciuTENnTo8GQ9tw4sYF4ypCj8qCdFqbHZPHBjaMvjC4ir4Nz5UdChy3EzPbtQSzQmSoqM1jYghnDY5cfp9vn",
  "key13": "5SD15KphTXPVRNaMdFREYcZQKNnKpAMkXpnN32STvUBg7hXXQAX2QxdTvtbVV6RXPobFk2m5XyAmotN3fiLM98Nq",
  "key14": "3hV1ZXfKvuMSURYo45tbRvZvHKgio98QepCrNFJ6CJpmMcTMuFFMfwungnLnxHMQAZdnvboVTixPgwQ2HPph72w6",
  "key15": "2BuWXPADKbdegYH8NuuXNEetAuF2fE1X1cxekAAApHRMoZ9ANsTcWmzTKHRujTLojdmjht18w8khb5hEmyCKVg9Q",
  "key16": "3a512dGpf9zknfdeBaZy4GP5Nz94JfbXz4ZJFbfGrgiLc5a6YTyX94oUcsWCqttKaTx22ngdbha8S8Zm5p6waLof",
  "key17": "5WQiJN3ydgi4proq6kAMZVo25ny6hMDmnqRcuGn19pmVCpDy5qLQizcWApqGG4rFuWkK7n4mbHLPEfcs6mpjGPvy",
  "key18": "3JrHSaEzF16e1b2qzC6q5sZ8RCKhcV3pjQXnzBBVzmHwgZqVdKpTBX85hqVXnhZwz9AVzrJ97zCiM6cnN1idmRbc",
  "key19": "2o4Pct9NB4rpzNjoSQkhy4BNtAVi41QG33fRTrDWqHzEUy37hdaKqFVxBUduLRUL2UW84zGUUPeB1rHH19rT9iBb",
  "key20": "5GH6fY29ZxK3drSQDwfDvsKWhfASwnp5e4rD1orjHqGjYCVVC9MXfN4ddRETbEmhh9DUiZksSxZMtWrAqUTbsbdK",
  "key21": "3vAt2gWeSGSi6t3HmqVoixkiztSerbpVFdNxVnkpXqdu3Unm31j8BimEaVcrPbYQdD8x2H2ktmMdXy6jE5boLLXw",
  "key22": "33exyVP21c52CzS6udxtvMrLoQWwHniWQqKCNhhBVJ2jP7xK1WWxLga1KeU4Xh4PJmrAe2ZHe3AkNSAhvQQ1dHga",
  "key23": "2xnh5DY6MCshTfGEhpGeGxu2z1FGqWa2SJRUd2ChQuG8dCN7qiCEYos8EBAuS7AGyTAxHg4iWuNP33t7SdcdWJBp",
  "key24": "uYqzFeDNb7XDoHj4Lv18En838gRHEx27pow5BuwkfC423gdDY9qU5Q1SwT34R1ezs2yU2P9B8Luvy8gyHNKwabC"
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
