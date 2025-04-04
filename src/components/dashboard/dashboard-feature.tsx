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
    "8fBZr6QXHXxnxXqDxGtRQpnpNZTTUZq2tpx8EHEPgocu5wCqhrA7v15QBnejYm18A6EymB5Lg4ttE5dFxi58MmL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xTFNZQQW9jmfDQeb2hmCc1yFWs9aDSfeFQqja9dMrPvkChoPMCezM4ELUpcpEVc67vhpVNkHVqhGuHc3i57Sqpk",
  "key1": "5KDpow23VViWdPyRU7zTzxWoHxEEwiREPEQ9WCtHXjzpqperUyEud8mJZ6ybF9AZHhw88yHpo6soCzXpPSV4B3Ci",
  "key2": "5KgvukyGBLRFXxrFFHUSUSBbxuV9tQ56Bwjk9CKyGzkU7NGXJoihipTVogYXNyaRdv6zn91K7d95fsqMh3TyHXGK",
  "key3": "5RGQVnZqbgY835AqmHdaMd5M3eFU4EHbSiKCNAUBC1fKKMaLjr5ezqiCTFqCj5FsgNwccuu7HbP5vbvUTdQnf3Rq",
  "key4": "5yEBuJ1L6pzXRv48vfPTeTjBh7UjFhy3VzuVxieYFA4xvu92UvX9kCne99kzZAmU4f2ftLoMvyshd5UD9216WmU1",
  "key5": "5jeoTHjQKBZcCquJud31FR5K32jpr2xA1q4QdUqUEVnNMHFCg5wZ99rjVi3FKRqZ73vXXcZKRjXr234G8fEdj5zK",
  "key6": "44SQ5j3q1ZiMQNA4G5xAasT4w4vXjEYvCmu7GbxgVMT5kFpgDDn1LTuYvXPKnZjXTub6Fp3oTZBkMMFJrR9YYUsU",
  "key7": "2Yari2NtaQfxrTWffymDE8tmn7x84dVRNw6wWWD6ssBAY54Z3WkXWNFiRBpw8Lsjgoxn6VJwnGyNCmjVzR3VaJrL",
  "key8": "5sTzCwHqpD38MWKVNyU1ZSwmkVgsja152vkG9c1rFL9sQHBu76Zhiy7cR6zVMpRK1RXNSQmwJJmNQQ4yyaJ178G2",
  "key9": "2HkEZuFtTRvxbZisVCLahEYceUsrTcGSw2zG8SdKbrHU8yaa6CSgFnvuaBfRRHVrLv3gnkZQWP3sE5g8afToVQzq",
  "key10": "4H1ZyMYbjG2mq3Qp4tRyj1s32y89LwQGCVYvusUGGnraqK3yXQTnxHrKfBg36tAzFubs3QhhWzHHJgDzFxXavbcZ",
  "key11": "2B62nY7C4fDWY6ZZA16E8krcbtQx29Yy7ukNGk8UGRCfkPjsao2U7zBQEfC1R7NJmsJKJ3PDv1QJb1eCKVn9CXLy",
  "key12": "35k48aop1SDA5rEXoDcftutRnHVdTJh8c24c7HRmjcAEKtxLA8PjGFEY1JgMoHS4xNL28uzd8uC6KBBnJLeWMnSb",
  "key13": "29XqzN7M2CPhJhuwjQSG1PnURrFZB85NsVnSA7fSJkSTYuK8n6SCKeYmh2VAyEfJreA7d7NZoZsF65xpWEW1snQ8",
  "key14": "3oxNbDkHiyaJRRBjCxp2E4kg2skYQH5MXBzwNgWXPXPRFfrWMtGeALC2Jfp1ehfjwtG4zLLeJvv9Lajzo9c2J99e",
  "key15": "2MrPFxET7Q3rSsJRAfWofrqWuSAixrngd1CpPKCKz91oMnci8bhVa8Mkgw3Q3SM5fUJo9JBk9EXx3snnat2qC7tJ",
  "key16": "qQFKXFntjKVntXGgYAhozZBTn1wGmNMGzZDSh43jpgJyrs1GT5cFf8CDtYPrFSmwEgCxHPSZoJK4mf4aejTwa5J",
  "key17": "4Bco17chTJWbuywBie5gqxfb5XZ4aZbWySSnqCGwWTJYswCNt5WiSjE5G1Vpt2v1zc2JRSH7e4F4v1w55Rbcv7qg",
  "key18": "5cBrkAptEFANXk4UaJakjPfV1md9r1ndk3h2bfNGzPWaMBnwSUwUKm2RawLApo6xD6ne4Ep7vWRN59LW85TZ2BTL",
  "key19": "4QNfhWNHYpDqnsKtrusm6xFsHZuDesnDzYEXAAqDeoZVLUaXfWdq33PgaEy2CmLRRezidJV6a2GbVb7yvpZQwo5T",
  "key20": "5e92bkPsa1Qjbaqh3jGhNNzsVaUPCNnZijfGNbdMXqzA9fvj9rDMKMJFMkyxHzecNqF1F5PTEHL5cxK6wipoJXug",
  "key21": "5yCDiAoV32nPMpHnrQVrdP4ud1EDkuhf1UHHAWWTGmGSEH72WherNV3e7umRz2pXBoPUvz9HTYuoZv2xfTM79D1t",
  "key22": "3kwkv1SYWbUYQ3ot1fy2Ze8XAg8HfJY5ad7muMQPJ8ac4B3fBkTHRNPKsZYYMzLpwp19csk6A9rmHBpQ54kFNdPZ",
  "key23": "4uHZjuzPsQ9HAWMY4hx6Muo4cryNhqETN7cmLLKHA1GbvyL6njzqnk9cPXLBQDLZEDGQdKzFyZBcFmjukFQ2ne38",
  "key24": "34abYMhhgNQLKGCbPBQTVLRNk5tPaMVrZDfgxQ7W9AYXD6FjtPwucuGcy5DDBq42HvwNVezJBZoDgSejCpSJCZrN",
  "key25": "44bBDj6KkFAFacLcA2vyQ7MiLNNVGQ2fNUnJXrFrtMaCSM2mFXkRF3SFC7ZLjXWCbDfLiD3v6TDQx6zwwE4Ae67K",
  "key26": "35WNChu3LMwsFbwkj954ZSysFioxgsccyeJsRiAWrWGokinvvBGTzaACsgsWy19nZk7ToYHDX2rRREpQd6UpdFMy",
  "key27": "2pWvK6N2h8JZDnfdA25T35fd8CcsUASuUxLqq94ukbocUNrkno1dgetL7Joi9N1aDoAgQFKCjZtok25wEHM2jhuP"
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
