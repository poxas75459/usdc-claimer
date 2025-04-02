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
    "5Dzsxb1rwWCqDkFnsg4oMwbW8Y1pzoqwUNMTroMhowKoWsqvPjEtiuT1ToZRuxJfmgF73Qpovd6tsbwcY73bQmHp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23NjNKSbRrDFB4LXAMKq2cyc1rRHBDyW7KKbiGMVo7qDU9Uwf3ySQAPDyzbhcnEwHNoevBpJABmUJvPW8N9K7jwJ",
  "key1": "2GXoqUfyvUWSU6mLVXJLvcvdKWh8XMoCVv4WoMdiiWkDq9Rn7gUTpG5DCQwybjKzBxj6mq4jsKeeXMvSbB9tEcif",
  "key2": "4hVt8T1nVWtdyiTFophvjNhmvvKWBfYCykEBBBFQizgdScYqeqSRM5vBvSxeFczRcSErYR2CnkqaDhVT1dKVcSRE",
  "key3": "4RpNrikmC1S3eQYbyuNtGNpUCYK8TAwnPZdg8DopAGDY411Lzp8ipkJS2LB1HttLD4wdWkDwChwAuC1ExUz8yx3r",
  "key4": "5pgXs5oGipZWmf17vCZ7YWzxj2tUAPiDvPf83aEQ1j8VPNG3BL5rGYL8P9KbqHJRyyXrRyY88BywyNG91AbhKdrN",
  "key5": "3iSaxnnurqNJdXGFkANhtj8wDzBB2eqHyNzs9ccumLSYpGXq2WfntfhU7nbhq5aGebmy3MAhVLdQrFb8MPYvWB89",
  "key6": "2UyzYWeak4ZyqD3ZR97YnAK8FffoVnPJY6PZZtoLZBXXj5erdsenLgXKWMubK8xxR4cktU3ykfb5G6eh1wYmcQvh",
  "key7": "4KKwdHUZESb29z5RoUsEApvPaAsTAmvLbiGRbZqg3RhNZXssBx9NMDKxCrzKcnzhSXChPmnpT2HuqUeb9XQghvPM",
  "key8": "3RrNuUL2CqPpNVSrCuNw2hbVoRRNcNMAZAeVxFaqGSn8WWQQ37MGqyW1pgfp2GMoDs4v98eUyi1FP9emPX4TwFwW",
  "key9": "44KoLnWo5v4hgUFun45R2PEaPdTA2udWgdS6qLD76GQfc5vQETDWti9RTozhsQWsqDsxhZyXUTLar6NHLPRb2gCn",
  "key10": "2CkHNc9Ye2CSs2Ak5DpdPK3oMrvmtyFBiDSoToT9WnNtkrtqAWqHGr2PsuXhpXek8Hy8pJrUumAnJSXo5GXHWoAn",
  "key11": "pJDgPk9QTKYjQBY9n8SCw6LQJg8CNpzag8id6dmjvdx9EzopFXnaYUgpXYAJVDT83Dfncck11JAmzBLJcGoKsXi",
  "key12": "2Rxgrb8AYrUkUhxbdgKYsXiTY7DGcPuRqEicZs8aAER5UHhjdkjoV93dLhF4c35gsJxDTtdbpRbwknYDCqzzHe1T",
  "key13": "3TN6MkwR33z5PuFQzrfTDPKJ9pnku7nk3uwaSGChbH4ZqshmFvbqAUQQTcyvUFvFdxCFr6ZVgcDube39oFrtB9dn",
  "key14": "GbwDbVaPvjMzsusVRpnzpJhDUA7X5PF4vKD2YFGTJKc5t41wpPbgVkHXLgGBiy4WY5QpNzqp8PnSWZNctbKLbD4",
  "key15": "5FakNvWRy7DtPfq3CNmSoTpvqr4RrzpuZANSuzL5LYT89spKf6NwGawLrbAgjnAk9CTbhaJ3AAuXArfPQAvr29of",
  "key16": "63oghXaWLaivKGxMpPzKjJEXbDwy8MAD5G69UaLi3cbQ9oRN72KSBEPTeHK58hM5YnA7W1Tgw8AdnM5xa5s9wwLK",
  "key17": "5MMaYiuX9zetunADhTUM3kvNoJXDCSy8DLjyVNQTi1mG7b8qFmgNM53Ru4uhqtgzSKXP5V2ZVF26DTEokmKxVUu9",
  "key18": "4geNeWXUg8eJSKD5pMWC4H73ocVbARDmyBUzvJZZRyzjTDdpTTvUovh5b5y2MvY1YaZiG8UbjmxTXL88f7nMrGJx",
  "key19": "3chtJLn1NX2rDjVjHHgXBf6PigSYFAHvzgYjyDtE6ptADWRKE77C7EDHVBM7tBisB97NHMbK59JPLdvqatZfECk7",
  "key20": "4vCjfoQEBWa2FJg46mKg5KMTMMXEdp14XTpuXsgqgJbkWhwacog8WXu8Ac8UV4kmZ4E7JMmeueXdwWz8mpiLTDpp",
  "key21": "3or3bEvcX1u8WsgoknKXY6cyTpjGSksGbgi4jjWhCpE4woGfZf1dchTPrx1BGyVrnsQw782RQKWnXdV4taMqHBK",
  "key22": "CA7LLubxoBUJn7ry1CPKLJSm31QgcgrERrYRbZpt6o1MS3REQEX9KhpmdPhkxKCraBYnasAquLjbf3q4WC5rNNA",
  "key23": "3dvJJvmh3qHzTJjsrNaZaYB9mRRCFxeyKH4fsvqva7GkcNEq9RfPRJGpaEXpJKFAKYqQWjPiGkFa1vHBqb4YMfxh",
  "key24": "4b8VzzDh8QwkpqBBH3KTYXiX57jcFvoEyEMYc3PtnLZGWyVWt2U7RBWPZ8DQzrYgpbhRYgpRfzkWFKtZq47ZSpJj",
  "key25": "7sC86wBKPjQs7D3GfwLp7fByW6EWpmdWX8McCvfXhtXHPVwayUHWMgnZjec773mUWjyDAkMtTvaBEc8DEdMsmuW",
  "key26": "2dtUHkSKoC1nSmpAPAKzovHm4GD8sDcgd8SFEyRXirwKiG7FsfKUyYX8BeZn9NQqbQHDXenLC27v3bBP8pN47mc3"
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
