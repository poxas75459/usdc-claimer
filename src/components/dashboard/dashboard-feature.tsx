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
    "57fE4mnyJ2bvRANd4G31oUPszFto42cj6eow2by1AqgGWm6jB9tHDaqSLryKqX2h6Q2f5sxYU3ejvbPwij1c4xVD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UQwmzE1TUg1VigHrwJNUHonnxbhQKb3PJuSzXHdgKovVp5ddxwbqg5PW4cgZWpnj7eLn9HMwgQDjEGKQiWTBB1t",
  "key1": "5shyzqZhz7XSDZfRJ1jHPNPM2irqv4KypkjYh9p61rL85VmSpmgP7JtRXSM6zM92MfkicqW4bBC62yRgLHdmgQhn",
  "key2": "45y45qLDy9UnRx7qunjXo2SKmAnuvGiSXR1osVQfRwHsdXoUBjV9yiG6EKtMK6MZipBVc9sJWnH3z2ZuwYtxm7Fj",
  "key3": "5M44TnZQR48XLGbKwGroYxqbcFTMRJAUssjwXgquxsFimgYj1EhvgiTH6WvCb5c2VJ1ymjq1PQKXWavmW8Z9MnEm",
  "key4": "wKmT5fvzEhcPv2rnWssdeuxWkviX6seoZgQDrYZ1GFJpFkdMbJjk6zSR7vZ7kYdHjhYApaWzb46kQu3BZvEProT",
  "key5": "5TcYn8JdbYmptxnLYtsLZnwCQSRVd1fCgQDMaEZM4ZtZf1nAoDK7ZW7bKFcQZ8WKN87VM9WEVsDRiJMpKtLEFhRu",
  "key6": "2o6NrcVeK4jPtMLitsx7R6g7QfDXHvSDJVQx296akY98inFoJ96tATYoFpYxcBM5G8vFXd5uuRZ1ed65pGwNcLAD",
  "key7": "d4RRomVLUSt3DqynhcVtjmJi2VXhW9qLVExvwQqryMvspj9VMJQKVXhR73moNW6RiL11S8QnCh2TxQS2TpM1L7d",
  "key8": "6R2Nhi4WvPtv8ghFC94Xxx6KVecGVfQM5LZg1dtGHgNi9uBhvQJ9hg9MShFqYHf6DFJJcnGN9t9Avg4hYRWazhk",
  "key9": "3BYYJF6jzt5txqQzfmaRHYsyLUjtTPmvFbQHCfjTKLsRkGshsAjbp3n5mr2iyZz73p3QRihjiDPTvmmqmuVabBpR",
  "key10": "38KTdPf9VpNXxgmWK2pSa2dn4Dq5wnYBXSG9qVC3uA6AvSsDNevN4SiHD7Ha2Bn4CnmeW2jFg1aDqzy2NSumJJNx",
  "key11": "2XKr9ydCRm84hsPN1TX7LGaJhCkCD8ZJYru1zWubYrFKHQjS8wt1ns2YETJwE5L3kVxgyF3jzud6CEAnw2swjWR3",
  "key12": "66A2bYGxrcWMyt5prZDRqy7kWVabzfKw1swup8Avt4vztc8QhV8AWmqH3XRDYfCa7oPuMwJZx47Vk3nz5M5Dq9LL",
  "key13": "waug9eJ7ALKi4LWQ1jfEmTyTH7oFeXiV5tHjuBRscZfZgUmeQa8rkgNYhbEJRYGk5FKA2GHGatoLczu2Jr3XbNU",
  "key14": "4GPrpAoZDkLE1B9spde2pt7akCi1Ec4x6VbtbWdDgT5EReunEbLSjjD7ZnFgGfUkyxQXt4eK8BjiqnLTU4eTJeeU",
  "key15": "eo7LDn4naPtUrD9fW1zeCvZ4xCJaca1y433K2kceUzz55HziGbGcUprUSBPAitS1KsytV5SWVJvkweMz4TWXYPR",
  "key16": "4vEU57mFyHn88Ug65zp9TPvvZY8rPJHLT5L3wpBNfSJyH3ytkVqt9SnuyQkxG5Lu85bCJQfAoDmF2VgaYh9d26LD",
  "key17": "5YTiPYzDxLnCVx7wY2jEDD68jt4fA9nBVzc8Jsvk5E4GDkAZnzdrXvgmjD4Duh3uQEVkep327Hxww7rNLtkN2tbg",
  "key18": "49iB9ibAMhhPr51kKsgJtaUSi3YB7NrDfcVwk4ESsinERRJeZXbTqwCmcBhwHMHnpgNMmwVbfFhxgR8kZhda5SSu",
  "key19": "5E3nGvnt2owX4BFKtPPMNpd54JXPiyVLiW5jQR2qdbMpYxjeAPATPMQFSz3qQvECMvBRjo9boePD4foCqHgM7Z3t",
  "key20": "4duzLmAhUgfRThVs7Gi6HURE2HugTvVPu7h3HKAgVC6KPZQEr42iAfkMjsWisc28KqzE4dCYrZuH2F7p6Q747e5y",
  "key21": "59P3d9SdppaPvkbZKRbGMKjmAZ5sBKJbhwvaxN7ArwTZCrzNRfeyVGvmAb24N3zBzmj8a4E2LmDrb2PpM2FzQ8K2",
  "key22": "fBQuH7w1JowNenYaFUcEv67AcVzXFqf2o2e4DYyR4JRodG1E5PqeXD5pzmaofkmasShLyCDTuubqnikLXwv1AJ3",
  "key23": "5HGvWT7WtvCUSz41KAxDDFWWoWd6F5XXn3KacFM6hjJhW5wkNu5Lxz2c6tMLwjqAeX8zyCQRqZ8au4Q2HL8Ze12s",
  "key24": "3wZ3Bdi1WowNqiQCZfJs6vK7dt2YNaYEm7xXk5tccsuZKGgTnSpGVvfHn4qs9i9VLkhnWSBcsZfvd6VpedXkeCeh"
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
