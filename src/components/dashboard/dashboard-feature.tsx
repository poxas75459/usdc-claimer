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
    "3WPY7HQymLchH6GL1B5W3hBX1oazYT6vq3z7L4L8gSXQdQmUVqncmvKgj7oibPssN1NQuS5QXep6QRcYhYsMeGjR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Gu4PR8ZBRJLfoy5GFn5UfFxTuXP6NN9Cy8FrajmttgNvhDmALufFbKyb2QvqjX8sVUpHB5CT1R3ZcrBAo9miWgA",
  "key1": "sHDv3NmtcMteYWDmXBz1oc56yqFXkFbdiSNn7XxMxRct7fJ1Ga5i6EC7Q97QKehjxA3eZhv8ux71HRroCeJhsxV",
  "key2": "3x2EygYhBAiUmDp23dnSMkbz3wWduQnFceDG47837m7EcudNgDiknnsXkeNXj5EvRj1nW4xAzGtr46bqd4pBMPw7",
  "key3": "9FbQbhy2CMEu3e8VsfdZef2kuRzykAU7sya9kuBwtFN3NfvvRiT4A21tPJxihhbLoK5qh4a6NTfXLUsdzYGmZPG",
  "key4": "2SgvfcsGE7JMeEi2KLfKEDNSuE73SNEUdX1thQPCPH6SQjgB6mQXgBQYiZCUyBzFCM2xFbu32jBAA6uJcimpg1CK",
  "key5": "3kiY6pCxzFEwTXVPg1i6NNtQoQ4nL3MH9ZX4nNMecjAw9aodqnuSF42x1ChxE1jmGGVYZR3rNcBugFTP3VHHftjo",
  "key6": "4L9BvGe4CGL3ZAD7PKBRo9zxe1ARBJqqSAHqVS4GGzqXcpvKKcgDAHH5L3yf72f944zQH9mmzSEn3P84CJ2gos2G",
  "key7": "Tdx3aGreXAAwYpWgxZYtwNxNToUtvMmPWkLw1TZij66nSBKucR3efRRwYBzXLcrCaJnLfUNQFN465HqwDzdiwLm",
  "key8": "vWP9f7N3oUCpoDumFy6cHAvyZcXVNfYbm9kYAcUZhxyUCvJrmCrN8mcXfmSHEdSDqGYao3ZLyi3qobKfDKQ22qt",
  "key9": "4tGiPQxPN7Kwsm1VimKTrUftAuJ6YNVp2rWV5Vn1XVJw4hKjAvfjogBpozwAAy5gmwMn4SD4VUDMR17LUkfQ2HzU",
  "key10": "3pMyPfrbfJPALoK6RZ361s19K7ETWyZcFgZccBZnSXCC17rNSsGWx6M3WFwiqhDLPdKEKtPCQXp8SGEEZUcYgdjL",
  "key11": "2eGw2PH7UFKXfb9CSaG7KgV99GghnEXmdGLmAS7jDN1uboxbyoQsm5KRqFGtgkznMsKuhxJqEAuEt29xp5Zz1KGj",
  "key12": "BGWHWX6x7wHhEDGzmtSQdnyjmEDp7eXihASqZGNHR1janSYr8oSj2jP8Jg8B9aCgGCs4VC5GXK93sniJ8ixgxfB",
  "key13": "4FLMUqrDYxc7PfRBkN2jnKUzqnzmtTHJkv9Q41ej3ZBzNMMesHTozUKJffvcenPiHvGAhbfiduHt6PbkHLMKMxvi",
  "key14": "3UxSJG81MsKNx6q2uR1Nce9AH39JHcKmqPsVovmPrNRZoTEXvQu1kHBbVZK4mSGixkiQ5nUtHjpgd4EvSp1Fdavd",
  "key15": "236YYLDfQLVYKTUgFVowt9tktUQQpb7argZ324rUUWWsyW1oKjBZkRK8RXoSyzwQutoKLjRwfQ3AVAb1VCzV35Fe",
  "key16": "3xPzR4dVpL9e4oU6FTaJP2ZuL2LjP9wF9XjT7FBnFxk9hR33PRMcXEY5HChdfyVriyE8acuYbKkMkrsBtpbcRsK1",
  "key17": "B8AxVoVtanoGK1azFrH3UE2SiNUNBN6GrWn1U2bqym4yR715rmpVdLbDfp26b3wyWNAM66rD2RiUNPr4herxEZD",
  "key18": "5MqhVKwFTbsi7HgGUxsQaq4AvBEDsDuT8HxJBcqq3zzb7ynUXvfs73Tf7VphyRFffWGjfdsr76sBAH5xzXPxjZZP",
  "key19": "3VqFgk4PyPuyD5FEKWfXqMJjQ9bvb9xBAdRrhim4cfDvEwbBVcXa6KdDR6Hf1wqKSLmZDvcJaQHt9eEcniBdNA9B",
  "key20": "SCW9Vm8tALGABsvv8qk7bCx9PS27S6f4imWYX36oiMQ5Lbd3azhLPnQwHJ71abcUwhRiNRfYkmV4TSZZusGZbaW",
  "key21": "3FCoWPv5WeJS1oP9RSgDUFRWt37NVWA3kDKGaUUfFJ388PJRKHfVuo8Xrx7e668MGdk91bkbwm6HyWpCUhkjVPrE",
  "key22": "2Lp9ax4dE8s5m8TVsRQhfwS1k93Mc97g6gEtVrYmqe5e7ZftZfHHesghq6smFK3nnSd2CFHiWknoZ2KXDUjRHD9h",
  "key23": "2CsvYEJ4976cYQEoYB8yF2yuticw1f9idKdw8yrDL2Qp7hGyEtcJ9YJGc3dwcXHUjgu7JNFQpvnSn3X23KudMpAi",
  "key24": "4MUpWy8CCR9rN7QqV2mBzg8vEe7crnW6BueRo79rmwUipuH2aHXYcgSq3uidD4qsjzhNqjEaMhCLAxjApRCYaDXG",
  "key25": "5x7KteXjFvijczZoSTFPyMbbbZXcxGPHVTfNQju6vVgRNFWuPkjowAe2PbuuTGdpmmdYNPMgqwZzN9qKM7LmJZ28",
  "key26": "3J9yxtGZGSYKmZcEJ8G2nYBg3GihuqseYPCnWyUaFocr79jM9cC3FKpmZrwvPwAjaBxtjpyEiRTorehUv4NkQWhH",
  "key27": "4ipbWWS81F97LwMaSXy7g36vH7Ec3Ayki4npCqAzrhCwoHi7SYUanwRfaaESKM399aCLktTQg4G1S9v5GKemBdfR",
  "key28": "5s3usAddapiRo9Gv7mjNFCrDwxAGX1mosZ1DiCGhb8Mpz1LEiKuSXUKJ2oUyjAk7ytWQVfpM4cRfqc4WnV5PKioB",
  "key29": "5QScm95ppawdrYWDxPmSp2N7w6cEid4PdmnSAzRDxMi7KkDtg1rvpMPktVNn5D83BSoQzQYJ6Kgh4UPVVWykdpbD",
  "key30": "5Vs31TaoM43yKo4cMf8LbanNvmt4VTAtYXc2kbewYNvZr4hxF16NnXoPmD3WSCNQQ6m38VdpyFKGtqweGbUSLcam",
  "key31": "5gX83VJyBGqwbCPGZtjHvCS9thu9gdawuAu9ecPfq2Kfm3VTyjfzxrXt2PNApEWuPNBr3QMWP21E6qeoLRXDRegD",
  "key32": "ttvvbryRFkHBHazLyryJ26NCzRkV8Cd6CZWD9XrgzbivT8E58fV7pftBxW37wM3du3dxyY8b85fTPypuCKKSqA7",
  "key33": "4VMNyCSEgRjCkjJWmbLtBcK6jfDEzDHgheFYzCJHfYRkrfokynzg1z59hNusjGxcZpkjAwWSnKeBupzNu1Ctg5zY",
  "key34": "5352u5rWjB4WaEy719Hn2DLBTnGJkVue1ufw8TNrnbLRvnno5NDnE33eyM63TD3xVLGy9Hc4Vu7WJevEHWZNL4BK",
  "key35": "5LLHAejzmJWQ9WQnWuPJLE7eGLK8dnQgV4SYV4mZT81eVQeWi9hk6o2beQWusUpSo7c5Kj8AF8Ckx1hUcnZ5qz11",
  "key36": "KAQqWHcDRYQDATF1251MQaUraNyABq68pvTUuFdBbcmQTGeyBmPsL8jshMrRBsdCV4b4kwvRRVYajiG6v2DwBrX",
  "key37": "2FYKAtxPxATCUoKYx4u4ggMtYkQM4x6UbJnem81ViPP8epw85HfJNEPJJSRPzcBL4MuoFneGW2at86hE6Y2JY28q"
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
