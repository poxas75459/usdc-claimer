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
    "2S3pAZx51eJYc8HMxz5HoEU6vgUsFdKKeaNN4XUTNgny3JnV7yQJtmNW4mDFkjzf6Frk5jMwC7qWutH4HnrjLVWx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44fw7GgJZoGDq5MPbamRC1JXeiCzaNvCQrCGN983AEGm1Cie2U4KbKTBYAPxFkCcembqX7vbVGRvTFDnUhtXMTKf",
  "key1": "63RmRkPchB52xP4tC6V96L4SM4tHQiQ8mbHp5zLaxKXA6HP75RaHDUQYAmjYjB95Ff8HxVZsvoxGQo7zgeh2s9Tu",
  "key2": "4aYxsKPZhS3Vq8VjNUfnQ38zEL1kjUSsq3fYn46hA5NtowmmHmn9u6GUrpJj7hXxuK28ZcmCfbZrrPmNf5dECd6H",
  "key3": "35JcF3LrRYHGjYky6TyFovo5rKqCGMo24yhidN7vHtdC26jLQ3g3GDvkqKbWp6KYS1FbSb4X9H6Unc9WkoHfsqS2",
  "key4": "6GU9PXp6wNUZGXx9oitffqWmPHKhLX1hki5B1Z5TV554AYAZDJuzFu8VYGK3FZEfkJjUdZZdqnX5ZcGEXz8Yoip",
  "key5": "cmJBEepJNkdXB47QssF4CE9cCmggHY9TvRQZijsaBbhaF7idNr6DoSqeBAWxAbKKzRR2bU9twJXJoTUPXHJGmgy",
  "key6": "KoNHvUEifj32HyjFVzdrmmLRvK8PXt8X5493D25qPtVV7fUhZnJWbVfbvtwpJDyRLs3DZ2oY7uQ8EmfsJtb4NRV",
  "key7": "5vrmZQzrnabuqmhjdcPiXSrVoVYxH7zkuoYo9zV8jVSyk53f18TAe1utS4KsuX64p2iq9Q4UDkUbvmiGUahdzetp",
  "key8": "4BewWHUzq9Xm6F2xhZbb88PXa6wsbctgekPFkVLAz71DzGxz9jRWmT8MKZvMYJDdHwoJVsjPUtbpagbu59a136ns",
  "key9": "H5yHCZH3gJcBeD27kb5atJCR7pXQ8ezoS4YTDowWTiky4FRSbLeSTJtMBzSPeVZve1XRw8JCq1PKGGYa97eREmk",
  "key10": "PJkkgnietqVxvQTCgMoQN5dfqMjDNwynQuUky2pVWCKH6qrnuzgr9owrjRcj7uM7s3UzX2XSDJhkRyGjJT8E3MP",
  "key11": "49Jmcq5LHwAm8GA79wWkLExGnXDbFAfiiYDeKzmZAnAcRwcF1yBZudHcCfFc6JDu8nEhncjVqdQuXjj2RG8rQx5R",
  "key12": "4h1kZqpx7W2qKRDeW9Vqk1BvG2cNAiYPH6VGWLDoHLZkJGHNJtbtuvkyYYeKQxeK7rHzBJTb45SgwZi31R3XJMZ6",
  "key13": "B8UszcAZVGC43gWFeLDMFKQUcmpSVtVxifNVcLpvfKhxxTJb7hQGmEyTKjwfNQfBAx2vawR1vx7bWxbqhuX4Ecv",
  "key14": "5gs3mpTPrdEf2ZaToupu1ipMzMY6AarCWuWDWoCm49VHcjuQdaPiKAoXoxpwTv6PL8PgJScU6H1HVmRFqBcEvqo5",
  "key15": "4hUW7Yh22zU4VPVNtYEjqmzQvzqVPtAsmpUDsuqM7bsvH7pR7EEKqD4ev6sybxAThiG92Av7LDksq8Ci8AvqQauJ",
  "key16": "eCtP2hR5YYEbR3N6c2ehQEko9X58K8reYiTkPne6d3oZbu5t7PNYg4or5WTpfz4j3VoxktrJRcLVGznJ88pExfj",
  "key17": "563XEP711jm3fhpDxeSfLSLeTvjzw4Y8Uow19tVAyfYPQAuSRfte3Ah2ic25XduDdMoVG5EVuJEkffzxX1miGmMk",
  "key18": "26UtE4Jtf8SYN2xYFMJnXWVGEuq4Gunbn118mcnCMcKkBrCMxrBk3wrhD2mDkVKCHYwz6iWhuNmA8R43uC1tRXSz",
  "key19": "x8gXxozWZaxhccV8RFyzTTYVXAYyD12YEzPq875Dp793ZxDDpSpBaiXtViavvvugq5A8TXK4eT4bo62FFV4Ufgg",
  "key20": "5kdHnGLcYTY3kjnMaZ6t4TuWNxjJCFLdwFYJyojgBcs8bZSHPH96XuMbZbdr9Vv4TvSUfvwbbngQzWJNWam1Db23",
  "key21": "pLUkjQfsxoRzArpKiJEbS2kfNLrtzAiCv3fAQpK2GDhYK3s6Sk2cDwyXKUYAj8Jiv4GBx4tQUYo4811XXv4vLp4",
  "key22": "2HdZZ5e5nwPVbQKXfteuChismAm9JTFZ2hiwbNQwPhrCjxYioaScMtJ1WPtgE7ZCmTxSN1A283TDH2ixz5H6fh1v",
  "key23": "SPETSstcoK39ABJrGi6W6qpjjbGwFz9RCnCHCxDyU2SGr8X6bDMCruFoLbmwCfDmqHDXktZdkpBWGQsjrNqe6Cv",
  "key24": "5kT7z7b725WT5faLLNnwhtTuWTf4qJbRRmrPmsizcKH2fFafyYsyCRSWPb6EoHvxTaqdgr2s7iZDvbyXxh5Qo1wA",
  "key25": "WDGDtsRqS8pY2ZiyMLFz4XuY857jNAvLsCA7oC6dJ2h5RwMapq8U4XNw6MF92zZJDdmejNw9ihd9MGeCh8ygP8A",
  "key26": "4zRWRN7R9xiyyxqL3oempa88E2dpx1JeNxhzPZLCENguKt85qxMb6AsCerPnqEAwFa3kJhT9QvhnQLmZ8pvUaaZC",
  "key27": "4RMCBGSQsSEiBNBNNnCHNezXV9zXtnf1TWT6VQMGfEfUmg5mmbMsdXG27mXPJg3HgGqH8v6UcAMmrde5RaXpaemD",
  "key28": "622huKT7fMDXREq634LLxsFWDKiavdHGNJbwjN9APV8iueQTbZaXUoLk49RPJQsspWocbxq5REyVBSsvUQEFKTPU"
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
