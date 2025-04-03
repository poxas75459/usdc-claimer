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
    "5Fzz773ro86J9qjRG2y3dnPMBtQRJJm4WEMmXrDUoXuJXkUTJKt8uvDow2vYjxFb2S3erRJ3cT6WiHRLvzLwgzZr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Dt3ttYJMGygs7N9jbZdtCAE3MWp7AHoPyjz8aGS7EGEyE5QN5HhEM4qdCVDRBiykBvUkcQkJriK7TRym7CkMApA",
  "key1": "hqt2kAehZd2rdjj7wLSpdNTmMoiQvNhKuLaNzp2gmaTY79zmArLSkf3dCYT6mvMakdRLGgaYU6u5fVN4ukwA5Zb",
  "key2": "5Y9TTTfhVtzo5SX3jypce79m4oAdmK1iudYK3BWWYzXNukWXXTpBFNVyvvvbir4NRoRCz7ioNUSWyF9w87TyxvWu",
  "key3": "4MfSbSAtjcHZL39fsEZmNa611pWDfCW4gB912ZcMtB8y87ob3NYTfYeFsCsjf25tqB2tB1VvaKX7f5esk9LWe4ts",
  "key4": "35gRkSwQgHG2jjFEZcwN1A6sgTLRSbC6ebq6qxWq4tmJcgTYDezsNvZWwEAwc7PktN8D8jmnMy2qjQMopXuLJcYZ",
  "key5": "2RmvKhpJwoU3hHWLTPaiHDEGoU82qyB1CGsCq2f5krTDa6XeXjx3H6JgQSDFrG1NbwyDoU1i5o46AnmusDpEZUtF",
  "key6": "4Vsj23sYhwvnkLUc5FeSVmND9UEEezLMzzz1pFUiQUBYNHLvpMKxXzo4HQwA1WYHkdvKC2WJiQGuDbGMLoNF4YgB",
  "key7": "5vNemZqwVWioXCAzcGekXLdDod8y4ckAAmabA9962Wf34ECz5vdBHepYjWXdHbZhcKSA6YjViz8zxtY9ZgwrjbUf",
  "key8": "4tHUYffmbibYqV3Bm6hiD5cWV57WrFonu4MKWoMddoiAXPWoqpWiaPFCPBji5ZANpcQKCvNxf5AYLAv155iRfhfn",
  "key9": "2Jt4uojGF2scGjVWtccCt6JjrYo67ZWczUGscFijayM9BxS6dNvofvBrX4uCjdHxaCZUYYQNiHw1YCJjkCDMi5hV",
  "key10": "3UVp2SehXWNyXW5UEF7UzQ9q8NLs7PMHMHM1KjRmvTx78QQteKBuWmgte2rUCTPQ3dLgxvYMqYGEBS2sqF1jPR4T",
  "key11": "5VVBhfmsF9NRtzSUX4McBHbmW4FFCvA9ZLJzkLnd8juwtaDP7sjLU4qViBpbJB3BLBtQRbQtYN7r6RMHbE8kMin3",
  "key12": "4jWkMsBZXVnDfk2mY5vsb4cBfTcx82myhMVHsVT513azoUqGB3LpU2DcZgB18r8aazHq4SvgpuHb4RSnGe9wVp6K",
  "key13": "4D4Ch884v6kintrc45X77SSLb3BxCpFFtMyFa328D1J6c4GXKBCj1FhezM2ucAgxJZg28WsRPKnwcCCsXpgRyjWy",
  "key14": "n57H7Gq4KcRJwroSAC3CUWKQn4x527GTxB8zeQiBcpFbT151Cgb9vBzkFsFVCNzbY3MzrKtJmdri6r3ecWZAFsh",
  "key15": "3NpLasefsUBqtNYSsxzbANMHV443683aZmjhAQeMrQmjjwSYfu2Dn8ANh7Ycov1qFZN8yMXHpfm4nqktAo2rP8VS",
  "key16": "3LQUmF3q3VmrPzwLpDMTvh462fftfectjPfLqw9RZdDXqNqZq1Z55styGkWtH7nm85PrebNgbDkFwCDo3nsh5x5p",
  "key17": "Tnt8RwmSUhxY8stSzsPq89YKP9LRewE8qdKQFse4w5j3WjZW9dwjnzmUgQpexZfU41XqyZ5ekfwnh1pmEoV7gFz",
  "key18": "2wWmkQUoB1zkrExwRJ5f1NdZXqvqm56cx2JJthpzRBZQ2rty3bkF2tD9Vfdp4WXz9f2AXtbNodU7FpLsFnfjqVTj",
  "key19": "2MRujNsYLpSGCnZV6dkcjL2zu6TN7MYc1mitzaa36M7nh4JyzFs6X2PYuKB6LnjYwqhiA88gW7i5Z1XnjmR6DGC9",
  "key20": "4N7TQh4wYkcxB45rfwD8AhPEC8kgZxxcs1EAbUqbvYEpHE4u66FmVDd9h4f8vC2Txy7PZtFeiQcJokU4RazfGdz8",
  "key21": "5TeHWhm1aitDhZ2mPRcdcxHAVZvdA5V331KV3LMGXj3Qbjf8cgLyYcxZKcddBfNz7khaB7MRt6VoVWDh8AhS9jw3",
  "key22": "2F5EDystqo3QSDgt155PK2UvPE4pvtsrARDED8JCyu8qQvLcyTvp8FEjgbshVVg9B71g1ivbtB7hVRMVsZ5HnLt2",
  "key23": "3d9W2BsQeEhzqPiVLridiTeiKRARSGB4ig7R5XoYAotrFX8hvzHXcM6GNVVayY1uZvTtaPQrnHHFPo9CERjefJP8",
  "key24": "2CxUXgAffjJU3UQ3Zj6tDEXihUhcUiHftaQUn62RFYgGB1JG3pbJ9Mo9bz9m1CR8EJLEKmYpear8wy6Kv1ZkNk6F"
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
