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
    "4g1nFqqpmhpiNQreEZBF7iCXFrVXTnTpbQnk5fd7Bcvctr2vf8LBvTzHjnvxc8DEei6xMNR72fP5pGJmgU8m93Cc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4P6VDjp5ZvBeje97CzZXkrgKJrG3vDYG8vq3yHfXvtimdqyRF9KsBwxzBStRJqgaVLxxHiuQEYa5qh2JVSuGwZFb",
  "key1": "2GprvHKYNLkuCqhY2eLbuTa2miqw76uZdvL415YcRi6HSF6KPhRnXS3thDcUvQfMSqpYJyLSHcMfYyeCejYgpbfk",
  "key2": "2VAZpngYseRvgQqf8UAx5S18AQBWFDiFSyBcQmKHDoz9crcEKMT3b9SUk8hfFVmU5FtTP7JyRnoXgcjr6HsPgQEA",
  "key3": "Raf9WAqMwn9edRY1S7Cmw3wWiyuxRmfc8aWy1LVtUMiUSYqD9x7pUECQ4yrKYU5vnuwJ7iS8fUTjPZ8CZjvKy6a",
  "key4": "2e7QVhS3PCNm1agRHqK8vbSgR6QzauJWDS79bNciNCArDJ7ytRCLrNQuF7nWpedVWJ9vvNxkAifD3kCM9dwCNt6q",
  "key5": "42PbnVPPMBALkUxSZvxdPn8cPhpqNCPhxcvhrtdBCi8Y4X5rhr3kAuqcZr4KeX5j4pHriKypdvqYrUsQ8XwjaLCc",
  "key6": "3GnV8vqz1moGLsKcmMiecmQtGFrvmU7ikwBJwCbVtXcQja5P3aJU7m8CWA4SSbWxoGCqhxa7HBrrgEGCPfBFr3HW",
  "key7": "2ou3mF1ePM71FqX5tVPzwNMWjVdNSRasDmTRBTyA6D6LFtg9xPto81X7H2nyoFbouFR7zcrkMJ3hGbfoZX8WE5RY",
  "key8": "3tx2kM8WqWxWL2dqhjN1NMS2n1V5DVjZwz9139xANKmg4mTKABYfjKffiukeyXk4knNvoL4sxKRt11qnWNhkxmCX",
  "key9": "4fWwa1RpyWMRftTMtQ8KCxodRKCQc9R4XQtravQGc88d6YhCHQCLEo2AV9LaYyPfTGvGt9QtVxLCe2T9yAj2TegK",
  "key10": "3yMgrD39Y59qVQC9BGoHXLkzkD46CfHbS8HckfVJ6AyWsRejvDN7D3dqeuKhRy2ePtnrVGHSJsUQ8s8ULQhT87cr",
  "key11": "51qbe7fLNKcV9yyGVp5rtHUqeHLPMWdukMaxUACPV3aLpTXReeZiyZuDri78rNMWMFrbRcogckHVbgU4Hhb9tBGo",
  "key12": "4bzPg1SLmrfNC8Fer6EAbWhAhnQvoGyFJS57Qxv7PmgcNtYyByTUdFQJuDKjPqpWJR6VE3UwbgS7ZdRxgZezdpQr",
  "key13": "2tUsAGSCZkVuvwyqYcBSKxqtneDYgMBWCygTT4HpkAsFn2M4zmf2vxPAt5HYY46q32nTwUkN5oHa5SrWNH4JwySa",
  "key14": "4bkpnEJ19G9ojTQcB8JsxHfysD6cD2qX4pqW6KfAMo7ms18dDxREyc1Rd6i7kX59tQGAzCNzL8wgeBZuWdKMwpCh",
  "key15": "51pGTSjNCaHgmbG9FLTYjr6hyhH1fAs2pDDZj5rvitVqyCKg654rViaeeuD4N7H4uUe8XA9CDzoBbFNbUwh55xDK",
  "key16": "2KQWXAoRi6adMMpdhnfueCsax1i82zwGr9GTcKUCWLyY1EpcLzfRWXDLtgJNZo2Ls7NmtZ1btrQy3vKXyJjfUFh8",
  "key17": "2ivyEC7o8qFsvabRPiVLNsvCAv9tSGDHc7pqLPZmiEn8Mjh7fjd7uUyPWL5iL2n5cv9cTzTna5i1cY51hqFxzuNG",
  "key18": "2oMFahn94ZowiUM2Vc4MZ4hARmszEexqadUYbSzDphZTgUafBmV2e8p5H2fbao1uuRZRAvSjXSLmEyRPDsGDgM7T",
  "key19": "3hwN3PYDjrmxzmtUuXSjXrtu9AuiX8HPNFJCDayGnr7BjSES3iqGahtuHfy947kwQQpBmD7dJUxnz3iC8qeQmYjm",
  "key20": "2SAYiRAhfz9h7nhniijuRXaEFuiDoucjiJqpWwoYH7a5faPihh8sryDfvkUTymY4wkC52wm6RcvHXgnhgZLXxNpw",
  "key21": "3EhF18i3EQSEosanpsDCyk5nTPYWeu6MHHF1GGzp1TQGbpL2T8pTFK75hMxCUQepUVddxt6VMUc37zi968qws6Xc",
  "key22": "2FiPTgUG5sN1vtZngHWESdJVbXLXa46UEAqwWRQLr4wvBgHgBsXNgYYHryPuWgiqLu8D2P24vi1LFC44QfUynq3m",
  "key23": "2BG7mnPwYcHwNCvNzzMtyvFAKMcmy21X434ZeEqsyVPWRas1Gj9KVeZa44txQdThsYjH4tweC9e1DvHP8Si4XmeC",
  "key24": "3XZQwZsF7TuScwu4gpcm4FuzVNRbJAhnzS2YX7svdqcMrMPjiCG6x4P3oaiGza1dDv7jWKVZT6at62fwFYWxtbLZ"
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
