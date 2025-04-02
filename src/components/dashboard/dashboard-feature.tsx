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
    "2wJFZtZLPYRB9gU9LwUFQn6ApXY5egT9q9KRYiTJQSjj52SLYaG9fTzJi9MrLf6KERVyt81NUWiqHLcL66maiC8G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Z85bArQqm9TUqnF6djL27XTkbyimsWUfW5MqNns3gkcb4NPAQ3kcNeGsrKNBJNkydCq6zrLWutns1sZqu4VAVDx",
  "key1": "3ckbrDMueSXSkEnLcG35moHZwZS44HM6ma1tF6ZLgt95roS3YsvGRD3GFPc7sj6YRf7BaMzcNhqFHqu4EWRaCfbX",
  "key2": "2ZNeDPgvvPQEbKS4ZLVkkpgxDSjXgc4mNCK5Aih3HTsE5MrCY3NmzhzUnLAUHcDKu154KsYWgab8gDT3uC6GGHGX",
  "key3": "4VZxVre4771XhGRS6suamWyUYVisZMrQAaAvSBPNWUTxA5C21Tj8EAsqua5h8xuHo8QjLPqmEBerdoCTU6b5EwWc",
  "key4": "219rj6xQCRWa7jLqfv6hmSZnmgbFB5fkbm2gd1BunhQ8QgyYzHEG3ogcYv1zXbGJMaYowbK7j5Hm41pUShBhCpcm",
  "key5": "3X5m4XsdE2bVv6ExHfYogcxoskr97ZVfPgdykLZgyWbvCeCtMzTTU9Wy3ewKGRcEGKCDuqZ4TDrozkMgSXorUXiz",
  "key6": "5bSaaPyNzsz2cUutp5o5yfC99onjTZFZVQxgTa9uBT2xhq1jUCuW3dydftCV1jih81dHmCF6ANgyFtrGMeXds9m8",
  "key7": "3aBu2BUcWrYUHR9XqgGWgus4WGRRDkoGK7p3c5t7eKLGSsDidELSD3jw87d6UvzmUZ9W8Mnr5RpPG2VnxoHAr73A",
  "key8": "5SL5xfvcX2C3cCZ1aZeGCVAw3hicdGqPwmvGGNkj4gDty3khEK7HuAQRVLZXf7DsvuBS2xNxZaVv9ae2nJj2c2N5",
  "key9": "2K4PNEsqKTJe24ZnmaUarhYQH9CXdCkcaVWmVZFag53FbCMkWYfQTrqBgHMX9SBRYRXD8tUCDXUmHroZXfduX8F6",
  "key10": "3TqJ6Eeedo9de7gMKBJENayHLqd15NzWYfdL2zkcTDHbXsDkuhQPVVQjvUNjTdSNgnunse1jfLammAFWKcg1UKEz",
  "key11": "4okinERST9YKSz3zaJFsL6rm2WToL46WbqWUoTU411MDk19uZDuwh6sQA6WgwKUdAPHPYhjZh1QvRZZsEkTcadsC",
  "key12": "2XnAVJwGzNqToqcen66Gowq4PkVWQEahLvxhzR37AEBEGtbQ19gGz9MqR6Q5QKraqe4y5xRVtr2n8nXfPw1Pv5vi",
  "key13": "3CZRiQ9gsdyUNzkpFFngKKHpG56hNHMwF5a8Cf3mmGUMMSeLhcPUFZ4CgsV4M9aCo5PDonmiQYhhpM6qxhZbX6Gr",
  "key14": "34SGgn13R9rbQ4feCmioN8416pVGgcJBCNHEG95jhQUbzs58xHkdUZ2PwrmYHn7vWiGRtNNDbxPPHMzrCssZDJJB",
  "key15": "4Mg22mML7tWdFDkZC2iysn787XwH57M1r6XG7rPyqjWWkFbqCjhLfJa4CL3vaAfp9ZYid6k1LqWjc6qoxBPhSUsG",
  "key16": "2yESRCj2wkEZxky6p7YQLpTuBHt6BcFCRyp9zohuuRA1deMhjuKW3JYTF7QSejGKXoamoV7X84EeKjM1XAU4PpeV",
  "key17": "4jKgy1yZmoNCvLg6Nug2xo3efuQUfinwK2TF326Y3WjQ1f7nLWhvU1hWeLVkqKA2BhCwBkFaHc2XukKcG6PRJ5uj",
  "key18": "4x9KknAWTU3FHXXKAbgCnE24pW1byaoc29WfKnKpHFGppqf8GnGvFuXo213wyMpbJQki7d8ckmrP34PAa5o7e9Ny",
  "key19": "415QEpGSV8G8rzFJoQNo3CZUivj8bzakXWMEPY3s9uDV1XFrMdMsYJQLeZMk7DBuEgkYSu26Dgb8dMCp4AkJyw1f",
  "key20": "5Z7xZaHDbR3AZcgcWDvNLHJkh8RL7HUww9tqiEjbnHFCW3Tx1rA4u6RK3hweZtrYZdDRkvFSh2ESakxV7XkbQD3T",
  "key21": "2xVd2FmFGmbQErgritmWEQhp7s2kLc6yfCJs8GJsFsmC7RwKYkEeNwC3Zj9MFHCG5hPWjfcnajsrsenZ2qExdPaA",
  "key22": "35RTptQfdbxAg3vGhDMr4nqEkVtX1x8DCdYusGjZ38eF8gVF6REfeVBkALu2FC7aQdwdyNz6VSNznSm39eBXtWpy",
  "key23": "YDP3qGTvJc2QxXJ495c1J3dMa6g9w17F25CnRo4n2apAyM3e5KFHiwRHiVsFnHaAqWJE7bUN2NFpdgbpghV3e8E",
  "key24": "5QrTQMwg5NzosR2DD4Frk7G46pVKgnv4wmYPKVa89o4N1FZ17mEmxu8yYRwb2mJC6gZVYFvPRj2JNnYiymDE7Z5c"
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
