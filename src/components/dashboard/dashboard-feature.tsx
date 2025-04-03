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
    "3uUCi2isXwtuPkRVPeCD9AJrnaEUM4QantrnuEdT4cTy9c3NZQRVhAPYVeNqGqrvo5tasFdb26Es1XPkqFheGgiP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "445RDFAm7z9WKsmezyDDQyqwWQRxSHXxSYewRKwdi9YEAJspNgXHMCj1BR8U6YTdxdC7EghkM6YbFLEN4288C7kF",
  "key1": "4oLm1rTR1v6QaG6ocwFFgWbJ78A7y9P96XQC2JcequaD4XqwmZnw4EkbBYoxjUVeDEHMjrJ49HqGD3v4cgQzhRkM",
  "key2": "4KdK8MTyMSfxDUFz4YfTMo8KzA43nnyaiX7McRqmrd4utR1uxDcNn2ZBz461wbAVr8j26wFBU4BsYwQmmo8fQZTU",
  "key3": "3SYVL5kiQrmHsw9Ckh5D4vzxaYSA57dDTZf6oXp5vMWz5orLr1LgsH8JtX9h7LoiZnpYqe3jZYjiHHoJas313uBj",
  "key4": "4QRvHLtdWCDYbzk4gfSsmaEPaYyn66GyVvJDJqScWhu4bBsmhgqNfjjcYCjVKxhBkZN2vGAWrswBC4Baf7TuZnkQ",
  "key5": "DBkYg8onnpRrzgGQkkX6VummBB27vuoAzg77Zu2nQssKd4gCRwC9uCzo5E9qqVTPB87pEVjcnoxjC3q9Pkq3rE6",
  "key6": "2cL5UFeXpMwtYqNXE8V568gqB91CrTftwDX5RVPtV8X59LebyeCjEQJ2amSAQwxqdaWRYxRaJuyHR2Y6t6Jth5Si",
  "key7": "2L4qVVPkw3adyHaaMNpV2riuLZqkWfdM1GgjXfsRhF9bZaKSYesUFGMMspzGo1XLetMxfvpf73fJSVXLWbWrADRz",
  "key8": "M4Hz9B2mqmMSzxovYRizm7i4W5UHZWLfg15Do3NZdBGvAcLRmMasH3tmWY54wbGcC1gD9oJXX3eWMKbChUZbA8v",
  "key9": "2oLuytXueRzChokjss6X6pPq7AvHKgPJDfgRbfpdSJ2kUBhwCNvmcrC3vFoTC4wG8tVAjtGdG4dDWmxr3KaEvVsK",
  "key10": "51fWTfGnPsGCwRkQsSixuH6QyrivU95CpQrMiNrKbe2qDjw9wbd1EvD73EHcgJEYTATpnwodim5Qzbm38Ys8SGZ6",
  "key11": "4rJggCbYZect9y9Pz7seaaw8g3XXqnZa8YAkCNMts7GxgvZXCcknDMY1KgxURakXZjMJj2jWuVdjZHceVZPMZxzy",
  "key12": "5TAR2gVZFCS5tzyLosD9b6WT1SnMNdXH3ua8rEnVZZQXGQJQTV9YTwgGaXF99Pm1hcKoj7rBN11PUct52oH78doa",
  "key13": "5XxF7oy6826SLRPGWeqcCR8yy2SmqAwpWiyptPMQv6KdFNi5d45kJ749PhZLhu7MsoCDkv8baD1XMiBmMYVLxzMH",
  "key14": "5RmMkLxsw4BraXoWSU5D4hvnHLGrqXUVfbi493KUNLTbMw6FvDmUpWo8CX1SxBz3967T1k98jjXmgk7exQDRbiX6",
  "key15": "3L4bxDujthFxqwPVy9sAow3xBDL8GPiyke1WLgz1JTYecnmPbiB8afdLdVy4XAZPePSzWnnb9UZUq2tS4rajcQaB",
  "key16": "4VHnaNoZu1chx4kvP7HP1xfQBRK7EPkTvVM9HzZVa2LuSfYf4V8MeYs96YWq3WCtTvGMK5xDzF283N5uX34tNRXj",
  "key17": "3N5jSwCtcSsNMSvFywa8cmZuM95Zt7v3BuKqBEaBzd5MamFMMYKWUk1KTx2KKA6BTfHmv7QvKihfSRqnbyXPF9qy",
  "key18": "2pWwgwmXR9rz53dx3wFFmeXixXnq1gnmuKSPZLTff3ndAXxzMA8W8nX2bDNvbD4Yiwi6rcRPJZcbfDarYE9TukCa",
  "key19": "2pYn1iJMQCf11Yy9zcfkxVXTwDaueozk6nToDohT8XErA2dT6fjcaJvLH4embQVMeLiseLmmzZ6E3vQHLugGigMp",
  "key20": "4R1usEnkUSLHW5QzPTBvi2fCVEGz7ZKf7GM8KvR6kGrvZEEaHCqaC7n6Gvduwxgz3FwBX22i3XYJLXw3r1CSN8DB",
  "key21": "P3QoEnQAvA6xAbKYBwt82zRETtsrRwpwQ1QVoSwrqpSbTyTfSvPWWEAGwWkAjYfgg74JaqNCdgsQhc9wjtJYH5S",
  "key22": "2mxnVRePx5qtWausE7ykykjTL6gQWJLCu8KNzAApdFf8iVbHjfwjf7Ff7kaokGekunqE3reEzZJevEEUwHgKV1Aj",
  "key23": "2q4BfNPnf8gMBGA3KLxtm6e5DdaT5z2nuB3q8mDhCtvghxauQtvKuid3KwcAauwHunfmxmeKBFgowV2fRtGRouHU",
  "key24": "5ZNWeteXwp9JwW1J2gdVVBN7cxDYGmFWSdNvQKDtDsJEomb3REG4in9ca8kCAPrpEyyUc62JuUwJSoxq3mFZxK8L"
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
