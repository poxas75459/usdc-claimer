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
    "czbaq3X2LacnwyDpBn5FPwjn8Udz6ff5NECwMTwg7CpDmL7VSNiGHT1Tm8A6mLfmGMVVFfiG95u2gdTfz8qzXqw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4t8AsBADRfHSFRiop9uoBWbnUh7AA5EnXscN2DpjGhHpB7DD7HfwCf81wMm9dUCdMPqyeqxpBSmc2BkLY8wxJGQy",
  "key1": "ovUfcsQSpXEs7SiEgXU4bCcjziBrruMgJGFxFnRu1eWW3ZE4TW3T2c6fQQhzuiUHmS4iL88VRHFyLFa98FfV8kp",
  "key2": "36KPVWTt5v41nofqHR8NhNx9hYvrPiajnfypksYTo9KTjMV6mchJQ1HFJFo2kDm3zMnTn2gykcrofjG84tQSCyTZ",
  "key3": "4tVyCTGDBpUi8tLw1Uitbt2aWdsEYYdncvmUm3BuH8t2eApwGFWzQWRCiKbuS3XaqSX8dktj2YVpUrsAVeNyhbNL",
  "key4": "2rLbwrJj6YuFvMoMnoa2taZUsNSEWMMEpVn9xNZmDFKDF3RwfKQFfK2sbGecPMmZXQ2V6hAw9vbCKAwrEJfzP32",
  "key5": "5WMnwXbdvSQ2yBc11TEHZAP7PoSjV2Y6cjt5pcbCDfP6FML2WBdcZfCouFLsxzpn3pL5SQQvKqSyk8RNu4brmwh3",
  "key6": "5VaXA28wW4iTWDMRnJhDJDVJDedaFM77VVt1axLnCbDWFpxnmR8MGc1zUv2hNVcxAKrRZtD4vZyUhfGCHCo5hCz5",
  "key7": "2MVJe8ztje21prFi7eXbdP9qN8aSkfykKfs3zyxMmjFhHC13CSrGysTxXWvjJP7RkArVKezxjvfWFCrE6ojwaZuS",
  "key8": "398WPSEaxpMoaZ6Y1eYVMQ695CEqkHPPsKttpkqZhCWhT2pkKJfJnHMRGJ2F2muhzrh9Ds45GUkNd5jN9idK8s4j",
  "key9": "64kVAydjnXsDUNLxobcjTX1j7tEc1U35iY4BLNmCeBBjuSFsbt68fAer5c18qe5F2btC1HwaaSgDmELpCMVSxKjk",
  "key10": "4NF7zbkYGmwSkEePwh91upZWWXdcsv12GhTG2FvvhpDrimuib1KbRFCZQKfj2MJTPiPGA7pjfvJQZiDEmiDKR6Zb",
  "key11": "4M6ozRxAHNkNiHLiKLhvFopaamagsybzdRM83eTwMvxDQuHi99uMmHBKAnP49EMR3tirjEvNsNRiU9FtKB4JJXUq",
  "key12": "5av2j1viVXKaPKWLXHsvjMmr9p7MewGWX6CiYvgtZgLFwtrHCMq4H7CpWw3ubZijboEptBN6omAMDBjUDwyrkEaH",
  "key13": "32PDHv88nde7mMVzXDxMtoid83rNp2VQJzTdaUJiayp2q23cqgTq9Rwy1kR8BF3SQXvdw7quYfZ6fXSjYDkc2Rrx",
  "key14": "5VYoxGa4M3qZhXSn8CwYKaB3mytdTjKA94CA8bx9wRAKQ3CCw1HRXokk8s1MYBRtUPehnDgKUvan1jX5rKGXZAxq",
  "key15": "55xUus7FJFxXJ17ytf2hQMNTosMfE3pkY3SpxmpPTcUp14QHL6JbLF7WZZ9gqiL6PFabfWuk1q56jJeiPApH4WzE",
  "key16": "4yBXUDkDgG4T7gxifWhNn4nEjmigN4c8NX453q2Jv5NGYvfT8TG77KWoMpq5AECTxLcPLCeAroFtWi5DuNPyPsp",
  "key17": "ka5e3TYJokH5bRUfd1AsSFuBFZqfyWrE9ZB3dGmNNyhayuLjFqTHLqTJKbvzQbJKRf3cFoKLUu1QfP8AvXqQPyg",
  "key18": "4Fgiy9VvVtx88ayTgHrv2EGHSvXP5bHWHEn9KxiBaLVddtUbJoapV68LSK4kp3gKEaBu37ZrAEGCBrprTFUZ5Uay",
  "key19": "WMcs6cainxVoEmesEoc1BmxPHj61oGdo7shMR275eXiEdWsAZk2xrCgDtKffxz5vVoS9fEvKCPV5qHrbaqELCC3",
  "key20": "5bYJu7N3oomvFi3TpteP98SsqzFfYfhcKehrbHC6Q1jZxs1Jzx9n4Qnd67tKYsB4gkpw2CucRZ5joaCRePgxiocN",
  "key21": "3tVC6n6JGHtrotGpNSM8kkrm9BYJQUnDZtTMW9fodzADmmfQiZgwhTeCTw4qWxyjPRa39tqGVwivVvXTfxjEjUC4",
  "key22": "49h4tqN42fr7t7FznxcesdRRbZKRgrTqcfD6iHNpUcNun9fTUh3r88K88TjZ835ZaiEX4ALW353sPM27Ckoy3dRb",
  "key23": "4w7CPSfHFiUKw3QjZo7nSqHGNGvckESfrrBzhCRvMnPX97qpVYvnjo6aHYkapmgFoR4BkGyKJRgGuBYgpZgbhJQx",
  "key24": "CWuJz9D8D4hA9RzCALyqS6KHnXZnCD4g6Ys54P9QxjjNRvbjkMwkHqQ1R4wniE4BujMPQjvmwCK2R7M3BPBTvL8",
  "key25": "k8hTXe7dMgpvpDNYAdT4ceWHvbdftQpqDVKDM95JJhyi3ES56okRLXFaLcGenmMCRjyn6tHJhX8rn2inzoMd6um",
  "key26": "2Y8WfqdNXjos9DpkWQoJy8RmUP6kp1RGnzXyo2YzTYRTXxcS8arFDeajMVYngzpzthcM6sKeQogzwe9xczbSCGtk",
  "key27": "5ikGjnLuKEoadVJhbknGjhM47cmz1oTZatPUiRrLWEvYTspuZavTbMYgvFUfLJHMKzXrbpb3FWqw7h78oCpwfS9w",
  "key28": "3r8Zf7Tg8EfxyWSXRgtLoNQQ145UUMH3XW1hNB7ZhLjsjyvrHh82RbB4cm4i5bp39eYQnkkxSR2dYnev3szio7u7",
  "key29": "24GXL2q4aRrDZ6ELdjVJGie67zVf6EMbG21xQ3m2wHjE7o1T9kGUXmJS6Ra9C4bt5aQ8XV7xb2KA3S2sY3h8VQMV",
  "key30": "5YCVc3wNXxgDtHYyeCv8cRNjJy7xwZJnUJiozEcYKbsAdRd6xw9jmjcwSX6BSGyd4YCgfCezoSUgqKAYBKSkr2aF"
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
