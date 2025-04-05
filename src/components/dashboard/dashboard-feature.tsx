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
    "22UJdFXMhnYbeU8mKeRiDbAT9bEMjkV8QDkgfoHVqGYsoTSKVyYpeUit3G4wpEFYt4f1JgBKzduvHSp8oMFq1z9Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sVoiKxFS8qQPvfMLQom9X25XpR3mguJWXAQKPQoSLbPc5YQJWA4F1jJMC8Ru2E7jvf7HRiVdupjBfnxSJniXQg3",
  "key1": "DUyZnFZZbLRANUbqji5aVx5PzV4WdQvTQXJqSFbjC1BH6QNF11K6u4wETAonRYCEg744xJi5UMc42aeuvXMCBnm",
  "key2": "4o1JLiUmuFYkDgsQP7ntdpX8dSqZcAbA8sCCme8Ds23FJKC3tEy1vdJYCGrE2B5tYmPWxUe29B1Li6UBsThCAaQv",
  "key3": "2vVu9xQhSZD6HJA7jjXtiT3jH1NLP3fs8mHtScAMVEhsBsrsvEFQUeEVMkTAAuqY1sTurz77Sq5fvc4b7eFzVYNy",
  "key4": "Zm2rs2HV6nVtCykhmKsgLhQKa4b1dmQXQc1rhfqKdZP4KNM9zp1NnFSExAEwapbbMP9riSWigXAMK8NT5ewAeXL",
  "key5": "4MW2fCdhmsSZ3CAKk96mbyxPdZqyFAQgNW8s3EDfbApU8ry3xJkeVj4tfD2KxsBqedNN3nx7GReDRR86gXxh344A",
  "key6": "4FhCNLVYVZ8Vv9oUzu4J4JoLKWsDuUa15FWuPUB4meAcDx4UtGFAqb2en8dJKSHMckmYuca9QAGANUuPfJ7WMN4M",
  "key7": "5CSvp56BrVgMQvqiWF5uDXSvVvfteavdBMEni9PG9pq13yhSSWK1Sr8i8R2MRafoCtQ8UkgkjjtLLoSkYNGinJio",
  "key8": "5oE8vZ215wiuppVmd4jHFmKVj49tPi5iqEh4G67YJHsFoqY9yfe7UuUszkrNq7f7srxQWkDy3jbw1ih4VXSay33t",
  "key9": "48swTymMwLHLiUpj5bmdkQ7SootX6jdrz4xSWPy6zdGdy78LYToSYUuuLDCDB5pjMBUR5ATiKVyG6yhY2iiWrTZq",
  "key10": "3JwEGYPpfmmqYhp7PnPbxArh12sm6Cir9mLz4aSLvuUEfymGsY4Twqxcb6Jx1TFDmSXMrbbEH1RkZLhyz5Bsy42H",
  "key11": "5JFEwDxuPTQ7bHkvTHuYZ2E2nh92bQgpszukdUtNdupjHfQgubuz5CMZxfUyZRFobHhYSb6JfcSQHtQJG19Up3Ns",
  "key12": "7mpHVoqJt1dqNoQ4yW19t32erjwgzWgTKhxhr2itSpvy2Ha6B8YYWtZV7QoGL2APHNu4m1ZWYgAkjgWoso9PgY4",
  "key13": "2Y5W5ER1cmorVMwfqzqTLBGxuLJ3rKXjQs5AfA7Z9wByoBUFLyn6FMRmMH8PmBrSaSHyxBsbKRNWHJaanPrFZDBN",
  "key14": "5iMPxrAHPAYyKnb6UxKascioTYSYzkNTu4h2yDz1fLyatJyJA3iHaepLfTKE1xLrzDMzLfZaoE6kkbt4shcjYkz",
  "key15": "GsUewGQt2ChsKTZ7Vr6XVSPWZhVwXEuMpYzGGEz2T8XdTEewRzhXsqSAMnUP7D34XVQMV7J3VepTK285SSgy5kM",
  "key16": "5qf49NKtZh8Fufu4PSb9LsBHbyxJsnydNm44J8tp2pyj68gbB4S6p681d33JyzpkGNX6dcGeMuDDFHa1tYmZUAKb",
  "key17": "5ow2nvbwKbidKb6iMwFgTdYuYvnSXCMFtoC1nis1qW9xCM9nqwccFyo2LUgsRaufXHs8M7JAYKW9uUKuJJVRP6iY",
  "key18": "2tSyx59cDsz9dqqEcxMjniA81jaN9Cw4paHN5Tvk3vKQAwBohePS1w9JxiLN4auWZz5RgnhutEr3FqV1fVkZWhQt",
  "key19": "3Zz33bVRbUEsYbmpLTTruNjxuNPXqrqQUCXt8YvjVwZ9gqXHdoM5R6b3FdT4HnR8C2w9qeJiwRvuj39X9C6xsN5G",
  "key20": "3uPtkh7V4vkHwL9niHJ7ZK1pCwXeiAnbW5xjFp8JxUhxi7ddquffF3XVrc4dcwEr3yPqocniRFB4NMwgA5gzxVhd",
  "key21": "4tGx7mmfHeyJ5ZuaGMf2M6PHpCcjKLZRYt6BSgstynKrRrK5o5XTmaD1mCmmXoPM5ci5x4Nu48QoKjBKedWvYd3b",
  "key22": "5DrPB2deRmoLkbTTGo3BUx24AybwFVeqiBUUTPsMoCCKRSdYVbKfNcWzboSYhdriDWxeuxeZY11fiLzAjYhxrybj",
  "key23": "DgYKvtHgxgjwZjAm5LYX2Cvq7DJm6Zd8vbCdT9d5vkLpMV53t8rNm1Y22GWnwge3BXT9HMiHHWuQ379NEduJVQp",
  "key24": "2cUpFoEenSHHx63YmYNLoJumymxGP3RwFPoLpjx9aXg4PAQKNc6ZwNDsdUAxyv8wMERwNvkuiHvhBtUfpvfrdEUS"
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
