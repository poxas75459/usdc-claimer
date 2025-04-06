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
    "54LubSbXWJLsDSaVcoLC5sG2D1sQ7rVHzQCJTcQ8HJELTboqBC8J7gLzUtCm1XibR6FcFUwE96PfdwfFpNZMScrS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wyeXUyEFBVvxDfDPZiyUEjimd6dqUNf729Mtrxw9wd5zR1twXujJiJtRW4rP282iVqD8FyaFLNsLL8F8mZPLsAS",
  "key1": "2gHBzgtKze1JELCy1qVEgeJQ38FCeehnvkP3egTbwhPQg1JAsLADazztTLkUeAFPa1Ee2LtozsgXAzR4QzV4XP7m",
  "key2": "LR7M9Qirsz7FmvQjPau9HE4TPrVKHLLhH5pKmchXBwBPSG6qRz41hw9U2LWRwnAPb8xG3n9HvFfeM25GxrdsGcQ",
  "key3": "5uKPBJygk8UcNBcDLiLph1wnsnwfzXCJXFjEoA1pLDadxhBDLjTa5TyWptvJWvnGiey9sgaHsodsswZnMBrUQzoK",
  "key4": "5sqPmtypjdAy1oTdFDQbatcEC4W9EwccjaJbMxNv3X3btFPthZJiyBoDLv17hS8iSdgY3gtgyoD9Znajcxiy1QNd",
  "key5": "4KE9n114FzL4KMpSaH52jrg83UodyF7dNdsQEiZjxwGJsZ2wfsHXmyNrr5czTfPiDtkLjf32FfvyvZe5QMxYpcKa",
  "key6": "4Uzy6S42S1qtxKrBKEVeXeMmoD275tCKpWDUH5rRE7fQPHywFqpvfPvPieHap5ynwcF3CM7kcHF4QCwVRpJ4G4Pf",
  "key7": "4ynJnowrxN6zLnN5uCqSeJmUpwxFMg79KhF5zxH9nsUYai5FRV5KibPtDMvpJ4orsuJfGV7qbxB7Cgy9HFdNMWnX",
  "key8": "2c5H24oGoDyS3o2VcWW14pZU2WHVip9oMsdj1VdUjePFCdHg8JW7ayRPWdBibC9gxsTd8RHGVhsiodqFiQ5ThSNh",
  "key9": "3yPiJZgbESdLCzPF5eruFq6DZCqFWekA7tUVcmgdo2RdWQnMJH1tispuMXXKjAXNoPyZWSKNY1m9ZdApaoxWEeYT",
  "key10": "3WrteLPLaaGaW3tT5LnkVyqwBogXExyJQrB7SqXgBjP57Jm7x6WVTciYWhHBmeR8imtGZJxJbeVLevRcqos6et7F",
  "key11": "639nwmyHAjUaA3Fq4UUYoJWHsFYbiwLrrkq7R7oi8nfhxsSJUBxuEufZ6YCJ87GXkicodWZTwVdta6VKMrwtHZur",
  "key12": "4jWhE2qx6EM4bcWNmhSq2z2Tjo7244qUyGtUkmU8VtuAMUPMubFHJvtmr8Ak6MNhWyikmaB1z1fwth3MpLiqhhvi",
  "key13": "63Z87xqJktvxdgNeENF2hup2CX6AxcGaFtMwssgTYAcb4GuztBC5apcibZnAj6HxreaP8YP27SouV59fWr1pfvgv",
  "key14": "24cCc6dKo1xH2Pvnaz8fT8jkjpKoVB8nZa7oCDw66JBnv9joLL1uT6CDo5EmSq1Be2WGtWLrCv7nvcoLMzjgwjt7",
  "key15": "4hzzBnLj6LXgJqqF6Vxr6DQtX7mJbKYP21jbijpQb2EmhWkTGtDrHL3FcmTmzuM4fpRBhwLaagToK1k7mjfcmHXE",
  "key16": "4ZMMHtwnodV4sRf4VnJFTXouMbWQy2KAmjFynFocbEfkf2TjHJys984ZC1VwQywoEwh7toMAVdENgdTuCtfyQfUm",
  "key17": "3t3JB95NgtLVNtYRq79j8Eaw9uzzv6kfkzZj7pF7HQwma6nCs3a2WZ52pqKbcLTiHsT9ncXsj8CGY4apeHPDVMt4",
  "key18": "4aRjiskGts2XJAgP5qWSKjqoTxFWxu4FGuNCt1M8PK6Bw9rDkgR3MBu9K3VLEVTDwQCeV2RCi2oY7hjzp6kejUp3",
  "key19": "5v7o33RB9Wy5Ng8KtiBLLYRhh7MSERQLw7kgmhxSykjbeMQEmbS4W43mpfdFB4U3zozTiw5qHK9B3SKKwL2n6bkX",
  "key20": "W2UWF65F7ouMRQmchA8ZTjYj83gpggqQasFhr2gPkVdQDmKMcCP6bEya9nTTFdhYQbMrAuyiN7hJgmWcRDwcLrn",
  "key21": "5kjKAmsVEtcjVK2Vof7Ep6B2k7gzM9rNNXXMx4XkNcPRfQxs7crXN7Zr1NY3CUmMYgSQr8RTSKVFVxqv8xGPGkCD",
  "key22": "3aRCqyftrJxVdqF6N6Ej2oR8wpak8cmVK7D8J9swZ1aETVf5shvdSasXCzQqjKXMzeMjPeKuW9KVsmzNs3vSCTD6",
  "key23": "5rA3nmWQchiKJ5oi5SgRrzWxxLPgCRDZ5SkWYqeqf7DvpQBeg79vHCRwNiH8yKWyqeoayAuLf6S4UeznVDZnxaP5",
  "key24": "nHjsf2yGHXBhdc6J463Q5haoMqAQUMGTTrv7eKGAWND8icuAToutCtaBEs9EjRjMNvG6aAY6wPnSsMW5Cb1ovMY",
  "key25": "4812hSYJNaSqWWx6gCm3oUnbxwwp9a8reikkWryuDXa1K4GkjupVSpLckJGk7Npfd3DWmiH5ChyEHtpLTHzNWorg",
  "key26": "5njxKZ4QkJTzaU5nXi9WFqEBAbYQnpsnCkWBg2HWWQ2pA9F8bt2QqxJPGevTKj9FGANurdLwFtPYQmACkAMDeV37",
  "key27": "AvAguHjdyjbz6M5ZtfinELb6WPEru1efn2uQ8wGCVj8hsBvowrCCGz2xfL5VckEi8jCWzKRcHCfvGtRpd6f435Y",
  "key28": "4w6QtxhWNui52AhgABQ5HEg8jX1GmErr6eWBFxeTGC8bZ9GGQBZncBdJkkaLcAdmu6WteHmnHfdvgwX2FD1bgTs8"
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
