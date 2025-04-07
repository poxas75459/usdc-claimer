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
    "mdzt1wKUpvbUMVp6TxYeeYR1wD4dLcFWTCpuK3Yb5ciN9YFFb1XS3TvKg17iv6P34CUZ83sU3nUWrVsCLbzvZAn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dpzxpeDXASXsYAmZ5LbsccPBQTMbyp6HBvNrj7kiy494v2va4DcPNxuFboBHVDcMs2U8SqSVMvaobu9ZYU5obxg",
  "key1": "44eEeD4uKUKcaCyM1kV5acPSn91L6v2X3x7kp1nZg7K2L1QXnZBUr3BD5i5qedBfzc521w4ZVqgDzxjUFpe5pUHU",
  "key2": "3f6RZsKMbSokkb9upiczAL3JNjEnGpkP8W2wbP4ibcNa1sAaSfHx4rpZJhvKcz9zFhMafvtzZT2GDb5ESre6nbuV",
  "key3": "3U9FPJwd1pckw2DtXoq3pK63qCPZrxjJv7aSgRhgCm498Qu2fCDqBbDvLJ7oB5dDtgLsPZkB1hr8v6bMv8tJJo71",
  "key4": "2BWX9PEaRqSNC1vuMsMetGVPjy5EXFh9TLVfiB7uT1jegFf5EU5oVQCNZrANKN8TUQans2Fv3w16AHFodbAhrxSG",
  "key5": "3igQpRXyRHpiMqyqHpds5Jk78fxaYnySMBCBJVNJvCdyWngXRwQsFU4Z6VMBzNpLuoWXvUr5UgmtXKDRV7SpY831",
  "key6": "5YvpwoDJjmUY9PGLAifZ4t21MJJr9BkdHtCFRk4U4yViJd4qG75cxegR6CZd8ifAG9CFD3Sm4G3pPDSCDChVerNo",
  "key7": "3aCkAXpJbe6hA1JCHzbjCvM7NVbNG6hND2H4PBRERs8nh8tD2uz1esRJhK8eDgKv74VeZcMCVEcMLFQRXDG95GZ4",
  "key8": "3fSBv91Ds6DxZuLccoVGX6y9DXJmtFHQSuQhBGAKcFn5qz1Ve2BngFzrszd2fcv32fxXFzi1kTj7bYEGK9NDEHsx",
  "key9": "3EkkvERFn6c9xkQaQ9XyuD5ApSJBEVQpTX6tLFnFcXnnKLHsc98mnYqBryAyuLkmQqWLHiPPxFnyyJiyEBDcuNnf",
  "key10": "4Nd3jyjYkaAtZPnPBpHZo2DXEWfLdXzpnM5fy6Xnwvb16i98e5WBCVN6VWj55TpP9sM2b21LWR2wZ8A64TxdTRv6",
  "key11": "2uok73jupJA1p2Zk7TdPLYNDBke1aYutLNmQkuigxF8KpdHVamM3eNadrf5pMqsFZCjF6oFXZ4qpEXFXqruT2yJS",
  "key12": "5Pp92bSZTRXv8yfC88CB6oP8vBveJ9YBjDadWfHY6NsG5oeKGVbyCWAdXD4UAuj9q5s1nHphDRgdJ8HFnzFgCTQU",
  "key13": "U7A1Z7NaYKgrSiVBEXzUwdudqH1m8Q7VF23t126Vn7rfonqiJgteNe1kEqzFzXJQ6Js19qFtoMDMftVEEXouexV",
  "key14": "3nHy5Xeac9ZbYxRzZ9j4ACb8zWFTzVquC55frxXosW888NCtzGrvhrycPEUjF8LcMXbHPrTGvC8VuF1KQV9Px8B7",
  "key15": "5n3qsYJb2UbFXPBSn7z9QB96o8hDgYCoaJVHxhs3fyrVDQE1dxDrXSXamNhoDzMbjbmA3ddgRcpXCdouvmyZrj2N",
  "key16": "3mZy9jRaMkQ1bHmmL5FFGPRse4VDuSTGxVfuD4Ugomj5NXcNnVWfvBNvBBYmn36NFj6NVACHLVkGBsQvQX9hhFAg",
  "key17": "2siDNL79oqbyV7ZsNP5zMRESY58Z2cYX2TohFjJDMEZVUSuvNy99tfJ1onKtANicyKbPgA8xzYJSCKwVcQ1mCpZ8",
  "key18": "4ehFqk7b8yhMwrbWTRdn7NDBJw7SaHagjr7V2jey5j5pFuQHDGmuV5ENN8V4PA35FUenhNAGnHiryUTCDzybCqep",
  "key19": "3ruyU5v98XLrfQxDhtAA1XQvyS5Wxp7mEz8ZF6gRDCMqgaGGb5WKxysCmtJaLwVRoT4LQe7J4DcE7tUPaxp9p6PR",
  "key20": "3KvCDj11uNZEYQi4viQ841aekqQEpaKpUymiN7umt82EUwpb2dU8RxfehK7ivhZS86FE3bNMZiYopTFSBfuJTAnC",
  "key21": "4MrdboJBs5fyNySRtLNmnJ9eP5JkP9How291HyMViFqoHYVW1wrftFuVeR9c3Ez3TMnCixooE18kJMdBgjAaQYRs",
  "key22": "zkxZ9wPyfDmg38detzv2S5t3i2nWykG1NZnhNc78iRXUwaCaqkRsAAjatN4tPMzBmwsJnJ7hhxgrXg3Nkck8xqs",
  "key23": "4GiYdAA3rywQgwjvswxUAguXLzjqLgXkxBJFEq2bAP5hyNPRpAjeMZ76AfPeawsnm2DU2NhJmH9BYKgcje4QfSkQ",
  "key24": "5HUWVwYq65baUKsiSxKJuymJkLH46dXFTHjGBQXW9htbT8fM9DxMKM3uGapx5UP89587aHjoUMEBQVbAaMb7Z7vV",
  "key25": "4mmkkvfZhLMt8avs9akVS7TQGgXFjnZqZxUg4Frp4MBaKgQEPTZSiaX3c8b4TpmRiRF38NxmA9xCriqgZC7uqpez",
  "key26": "4JMKLSbZHsWJGNLEg3DtjnFSsCkS3sfQGrvn36LgQEWHXX45Yb5y71JY9W5hhrHXBpS9uNJ7Z6PCjqZA3pMavmnb",
  "key27": "2EmKdR3t6tB4tMmwG681YkUsyYuPJK2sz9K1Z2wZn2jWEtnB3MW8DUCDGWeeJ1nJL4msfDveA3prWTKJWZoiwPso",
  "key28": "48E3QyzBj8HPuDnGaugALXJgea5WCoKUMUNd1jzDCBUNHsanoyrUnYvCcRwnGU1cGwxnebTyb57dRdFMVbJ7S3t8",
  "key29": "5kkGDpm4WFeHcswimVEL23Vz4nWAmdMD2C9LJ5zq9pqvxVpUD9TsDd2mhMK38LMcqjhBD8EeVwSThp9zixyRxQ1E"
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
