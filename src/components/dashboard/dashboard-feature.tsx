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
    "2vkkFdpbj1KcY2eXHyFHxLWMYPd3q3ryAUpDresakNacXUvtLcE5FTauwj95nDAMahAwtLJHqcL4MfXqvC1h8nzn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37GfKeSYdF4mGokJh5Q1A7bqFaGvK169cfxwXMgd2DBZRJ6fvpNrEjXjL3nmBtFZThoFaPhHFp3acMT9QAwN9ozu",
  "key1": "PMskxGMwDmin3MG77ZDzTQw25Kh7xZUHJrCknidbMvo3SGyvjbj4QiqjNBEYWmh6AoNyxVxJQiZ6RQZ28sP79tc",
  "key2": "42BEGykFV5Y37CPosYyvS9zkhm49BtwzuFD3xjAC8kpsULv4Zhe4KfgCBkM45Ph39vAh69qjEukD8ybAQrC5bHv2",
  "key3": "B7MzZnrd1vP1qjxmaaZnaDmJ5Z5WA585HXWTr3D8XL5oZ1EtGyu879uPftTPXUt5nydCEMfDcicoXYxLVfMRM9d",
  "key4": "4oH9s8zMrv619d8XpeFcQeVoxF6X1cF32xvCCyqxx98Pgv1YtEXVUnZf4QaVkEHgoRPF9igA2ExoMM2E3GWnEKz5",
  "key5": "4egYiodiaZassNApPcxK7yPn5fL81a6wqwEsmGMJpCJBVBW3byRVbbj8cpRjFyhxurXZSqTDqY9UdWCkh8FLUecj",
  "key6": "41Yrgx5xysefdhJTucSxH26Lh8BaWto2yaMZocJsCZ8nALyWyZug1CJ7NBkENKDMT6UPAB6JUvKb9vuepN4ERL55",
  "key7": "YS7bXFUepeZVemSqRAJq1YCiWQ8bPSRh46Pk1XgoxTsmYMj39memRFXvTpiBpH3wYBMocSZYDhDU6DbmT4QZH51",
  "key8": "3ya8m7Ar8Q4YaZ7DPXK81JoACHKdhs1acgJiBNdG9diRfxfBNTpA8JWfCeZKzGvgUeUcetfBWS3Wrn7VtFV9FeQx",
  "key9": "1RXzHEsgAdzTF1KHtVodCYaVAhUWGrogEEHA2NmnaezKNmSaVp5T7zjZFSZYcYvD2B8XJ3qMgXrCEKoPLzSMVEM",
  "key10": "4fFFJBZ8AMsG28rQMpJATPw4pP4EyM6m1BWVTLUbd6Zk2uxCWTYebdNkNeqTCcpZXTKTYygiooUE6LT3KHFcp6T4",
  "key11": "61GYNKSULruhQc9PxNP5rXrMTNb6wGS44ehZWyyy39TWdWCupz7oWwm9Q7BFpebgh1ygUoDBfjt7VQjoxq9PjRDF",
  "key12": "5SQZdr2tXsgBQJmYzvnZ6hJhGJUypM4PY9FTHwhpi7xfT8xXbsuGUJYKYTaF6FuH3a4PSuVt9kTSb6NNRZ9t23pL",
  "key13": "22L2G4nqdtisVXikpWdezUF1D8fnjuThVuWzRg4sxBjh2sCZGojf4XpEYGpjCNoTiLLrKF2JQvZ4YHNad1GyZbdg",
  "key14": "4mDCwHGBxwe74PXSMyRLh1JqpgogioqCzYa333PFvaGcke7p2v5ey47NskyCwBXVhYyN1S8dh6qWHJaWmKkT5Ths",
  "key15": "2k1sf2qiG7WJqhH5fG1fekcsDQzTp3tcwkkCscEPNxR9SuZJLBWhFwgEkE9Y1c1i9rJbd3FEUfgv2KnnPhXmn3Z2",
  "key16": "49jZbTdeU93itTH5ABo1RL5rxNAyEnW7dfpiyqB6oFfcosPMacMxcBRwfNuvYeNJfHaT6n5dKdjQ2b74GH4QBNCp",
  "key17": "5KGKLW8PAAneivjrymYTN98Z1cme2XYfp1Mh2bVkJJbTSTezZnCLoWWXPh1W25zuG8NzJ15Xohmeu4Z2CRQBAHKH",
  "key18": "5QP8fzpeJ9gMF6VEUnBPFCR2aph7JnXW4N5D4BHwUQiJyDbgn1Wbi1YZ84qJrUbzSUZvbx1Rvo9N3Goh9QQdje78",
  "key19": "3cDCkNQmADrJYijmrcaTiiKJ6yKuFNjtnV29XVYfTct3MmKs8FCBkuzGgjd439EYmUaUdaT4AV8Tdif96cXeL9WS",
  "key20": "4T7TRG6ote33yAEbqvfAC9jFzFH8xARuS6Kd8z81syZEXGNe2viVTvxehV3HMPV57AUCv77u7M6G9YUowTgtTqKd",
  "key21": "3ehBLjkVAWA1V2KJRUYuBUZx1tt1eC94CSZ4pMhp36ijdq4x4eYEF1enXCoYCYdtcvbaBJNegSEUyUuovoefLasj",
  "key22": "CmzbVbBQLiMVfU7tWQ3kVapbGeDKyncFVM4JNuMnVCTStzvsfxcQ3tTcs49AtMLx3LBCvmQnDgW7ojqfrPPjcfd",
  "key23": "5LaQkfyFaB38XXQdhAFXEGhaGX38AZQrR2Vg8hoWsdGGJYbzcVBvkf4hrh7BQvuA8xEGTemxiuuJXZmkDk9Hdnxi",
  "key24": "4J4r1GGdTfuyXnDejeQR5o1wDWwQUWcyzWDzwndoE3rk86J3egxjBGxTKFDgWf2QavvNmAgsv5BP8WUsCaanPDSF",
  "key25": "3omwRERJUvteABzNMLqE5GoGqAodHYQQHJGMqwKCyJ4q4uNqjhG3DoN6uGHfUk9tNj827HLcoSGj5qnH4YiicCMf",
  "key26": "55Ng51BdohSrP8TP8fc4ik2k1U5gCMZ8HEtPnEbPGcAc1myqzS53wueD7TcicVQ9YDhniP1dTHSthA9QhwEodSxR",
  "key27": "3brPaqVfS1QkooxeGyDg4EDdxwXoS4LFU2ggy2LJ1hj8eKdHeR73cJLAuud2ae9t23L2cpDrDiBcm6EX2vFrS2J6",
  "key28": "5ZmueE8zm27qPx6dxCku9rZnX3cVb5Qm6iuLzv73bcmC6o5xz3qTaNKf9jVB1oswAUZMNf8isjfaw3epjUvypKtL",
  "key29": "44fhm8d74HokY3xSKPeDm14oeNwYu4rTMRM46tQP7giWffQH4eXU78ZLueDFwF8RG13pbrborWJBnS9TXmyHD6jN",
  "key30": "3FJRBnQPBwubTTXh8Agyuc8c1ykHtoiAGHYTReJzDTqpKm3WZCUTzFKzRZMJWCtySiyGSes7iHp7mTtBwKUdVRdB",
  "key31": "523VLLyRnxJ4FCXDK8d39rZk1g1KjVPbjZ2AdnXm3ajtHaTfJSdWNtH5FV4iXUHWGtffrvGTj2j1bVmTzwPRu8y6",
  "key32": "ALjyGEZikdQucukKRcTA1h3QWvTUoFTzY66UQLv3LVY8Yxai58km9GJKsVjmZGdrbj7nc4Puc75zEu3Eo2TpJUt",
  "key33": "4CeApPs4XFgbCYQb6xJAN1eW9f3C8Zabm27s8bgo6PE8amrJX2BdMDE8NispuVupyLzpqpiiYFdeHRTgj2bbJjLL",
  "key34": "2bjUYvzGji6nAS58jBAseBCXq5xG4SGutsMru6vwf3cmFPpzuSaKJTmJhYrrGS2bcmq9mJAwkY1BhHj6oqwCAdhF",
  "key35": "Et7rLCtRKpX6wd1UaM3BTsAzV6QAZ6zjXAZ4rHg1JXZdXHrcbwLnA5dSwWwNhuUpenEsbumiqRCDmJCaMTY1FnH",
  "key36": "2NWkSQWsDUv9YZciZjnt4PqgV4MeDxTfuNrJMdZS1rj7qaMixWzrhV9WMAwo7wLHR1MU2XJRZUiePXCcippehTu1",
  "key37": "65JwFcNCHbcW7TxKmpDiVSTxdr88oECVYgBTw6ETMa5Uxqp4ybHmJg6g2ZKoyH2DoPTgK9K4oTuVePAAMBkVVDpm",
  "key38": "Pqj6tyUwKJU4VnTYFGmZwHaN62X628y53SCNCKBRquqxtpEqybaR3YeFLbGBkccksFFJ34qtT9PJzRGAYaLeXeo"
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
