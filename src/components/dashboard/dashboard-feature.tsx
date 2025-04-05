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
    "zqtopBXEH5zsg7PP2rsfniZgvE3VQ7KHRCEz4uyC3oWcobzDFiZRGDyLcWPD7arcCXXXEfEicWKjVkm7UEynuAS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FHMAEAxzhYVnGtMgqHRAdgijSjXpTSBt2QNmu3ikxLVzMjRVmvfPnNFCA2WVzS52Hzcq44cq2k3GeBE9A7S3G5L",
  "key1": "2WYCdPWvuSLSGBRDNFJqM2GxmRfjTC8mQbksThiz41e6xXY9iqrTYw9ctLZjBuPHKpHh6TQgwaCq2hVyiL4hWHiN",
  "key2": "2zBFpEQqQieuZZVMmo7m8oZoVHiB86zLxXbEPDnsXotwoH2FXurQsf9BUQHXYNDQnwo6hVrnbH99nD4zgT64Rmgu",
  "key3": "44S119CbDaoan8w589xcxQVCmw1quDTjsdpUPnBPnb8aFcQjqDHVSM3YfY6VRfvgqaCCW4WNMAuDuXHtnKcWYLi2",
  "key4": "2aLhcjKkypUfpXX2PpkqD9kHiQ5QRHXdxH7aAqrZP3iUuLcCT2kamsXShoJZGLG3adsX9UtmoAxYHT3Ujk3VzNCV",
  "key5": "4We2ZbbfEN2L8DnksUTyDGt4gH8ifQJd8TGUrQh6cRccsemn1GoGw1by8hWLKXxRd44TMWNao8ZUthXydmWUu1UQ",
  "key6": "58QTr57eGCXQpcbToNmryQ8fDPe2DfTuvupURv4Lu4uWqFAwv7pvKsvbBcmLiXehuXCDP5KwucfUPxdV6HZ59N22",
  "key7": "52jTvfKRFvkQnqdrGehYtkdXWKHKNuVd3yBKL2fHDm3mzj1THMBwR9nHTaCig8ceNuLqUDtaqoXCJguJWQAcpSco",
  "key8": "9CJTL5narZVVPUhb2tC29L38HUe9tk55TQ9fcaadxZEHkm6PcRo8BhDpBdAwt7vhoaADoMULVuRKt768feBRXmf",
  "key9": "5HL6LEpU7QVWFLHqvs7rBBkdiB3nUzmSn8ZmyJQvjRU92T6k6ZdkPyzoBe43Ei4Y9nsbvgSNVkWpS6uVd3XWaCn7",
  "key10": "4K3jRTfCpng2zuzE6SG6BRdNVsbDdw38qrLhFVdSwUTFzDDrVBQM6hj7Bosfi7ArmwYypKonDBN3X6fivGriiZC8",
  "key11": "3uJCNTbNgbi7KfxPBWXnUdcsns1BcmZL88BS9m5qs8UkFVLThq4WmRNMwZRgUJYjsqsXnUe2YtXj6EHcjNP966z2",
  "key12": "2h3xkLgDEepjdmNJBX3TGB5ZaHcScuSJyJSNtnGfVZ8unVyVwc21ojyUJoJUZvV7F2JXh8gXK7FwAw1LbdgXmpem",
  "key13": "5Zci57LtyjjXTK5odz4x29RGJGy1pdRZoGc4yXmWTeaKWpwL7fBMhyRnpb7Z2RUFeAnT3mrYaz5oSD54rfhFibcs",
  "key14": "4BiwytrBb1EZnHtCb7Fb4VacGEr8tw2NWiKJvsE8uwA1SCxMZTLftNkGGfZfy3kpZCuDMP3o5zxdSDehzCKsDyEV",
  "key15": "2UqXXnkJiw3YiZmgNRxTk2hfymCyH9t16hcNq7PV5CV3zRGeAGtZTMpw9ZDLzJbqvyB4w3RNn2hwHrD5MxnykeCU",
  "key16": "4p3mZPBAaFq2s617f1yZ2PVCibyDEzmyKMFMj43PfkCbjXRtEhuSQmjmQ7UvyHeNwSgMP7N1nHKjoBADTsTNRFSB",
  "key17": "n1VsyneTCBbD5gE1eA8J5qqC6FdD1aYH9iRrNW9Fxo9FQ1M55j9qNbUqfAx3mfV3LVBaFiMBqtghiWoJhLvivjW",
  "key18": "rtzQAUEc2XG1FSBQg7Y55NMUw364JLCJfwq27B7EpLjnFAChZPjAS2MicMYdpzuruUgwd1qseM7WfRuRctSqgFW",
  "key19": "3q7ngPXCP8sY66jVn8xvbHHQJjpDCHJSoiv4weDsUWyrLnoibD8hSkQaLEdehuXZ7YRF7A1cQE5hYUNGAwL1RQ7u",
  "key20": "5h3mEqfey2UsJMqBDYNAqKW31eZZLhS4c3s2STEaTHMKKS7bzTsGyqJUYA1jDje8MCFFekk6dAUEozkfxHzPFTTC",
  "key21": "5MjUSBxP5US5RSyULnWhEJcpNgf9FSBKfS2thFzBA5iCyrQkqiwUNiWN2tUZQ4WpDvNr9zGAN8bFtHVprEM56QXu",
  "key22": "5Rf48KsMzX84KDjkvcVudqqoHVLUyCwcKVGGHmp4r2cxUmrecz3iZwixeqPBn6NZPcLPbEsqLAt7WKHa5DZsKeWD",
  "key23": "5iQXomZD61XRdpAxGBATs5yoEFQu3ipDUn6ie5USwKE9yyHyVWQYapqTtqvwdxjDnPiGBxLPA6bvig4JrpDWNrxK",
  "key24": "YvrUEt8sY4NP9zZhuB1w8mW6i3CZEUsCNDLfqw71UwqeEVEFpCD5NoteyaDHGL7e49t6NffA1PKU5ztKuf9fyH2",
  "key25": "9f7qvUFZgxBTFXRx1BHGasD6KZAGneDYEC2KNuqE39nFkBL9JhzuYqNYZVzVSE3SvQseXFGu5QGTXTBCJ6yVvdT",
  "key26": "3giaj3W2LoBiuanZzaT2iXxhVhH9bpmZdMNqsbEfoJes38zGxcQZmDasVwCXykTPkRb46PfutHweWBJv4fRAjdxd",
  "key27": "5aJmMZhNew6yuxgHt88AhSn2E5ab1htQCYsw5a75uWyXQ9zamtZeGPReYibMDpypuVd7R94Nc2dTPSJPzij7Qm7Y",
  "key28": "pgqrUzEeJ5iTXGEpjPxmnhjo3JgLRrNKCkCnhC8MYcRU27Bte7oMFVUyL2bhQ8sW6dkF8msCmUyZ6Vq6PfGfD8t",
  "key29": "2VZ2VjSMtBvztb9EgAngPQb6QmFZLznqhJknBPs9TWmhCpjeiLwNyDFtMgJTzFRWik9Rw1MAsEyuABZaZYn22sL8",
  "key30": "2TCtpe3Su9RkErsC8mWuMoCQ9BmB3N73okfUdxn6NaTBhsSRckFg4d9kmp4QueWFMnim8vkAtcjumb6y8hBBnvRL",
  "key31": "ZVoaZhNSMqUborspLvNdibBsJqKy3iUsqPXqYeLByJJjq2n7DSDqQXwoyogZpNqk3RqhSNSUA8HczAHJ1Vm5tjz",
  "key32": "4HRT2i99dRrWrbu4oHLmNqww9Vbivc9H8yAxABkR63xfJxfk4f9P5M6QyjAz2qEuEps1xgKAinBoVR8SQj1647N2",
  "key33": "BaFrudEN4YwVaqm7WyxiwTHTXvUKhSMdeoiGrPC3N8kjR6zNQBCkPQCN4vCmE2UhrhPYFVrfdTM2PsTvs8ceUDy"
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
