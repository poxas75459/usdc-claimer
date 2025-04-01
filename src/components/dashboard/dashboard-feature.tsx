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
    "4zHcfBK1T1NcHn4wCL2k6e6w2c89RNVLN3SznAGRWY5KPWjcVQ2xXNt6oXN6nRa1QHVdNgfKEXwfjr9thi32rGG4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RYmtxQt3ChHpjFdXupj7oHXjvNBxSR7KLFmC7Sf5s3AB2fTsmK1vZrRS3sa8sUdBXD9xHzjFkV5DJMRxicAwsNh",
  "key1": "4N19pG3bEsWrutm1231NE16zHBDkEQQTKFmiwLFHq5w3F3VxrvXQCBpLmjCpye2JLgCdwiF9YELwGuFbM8YRFPk2",
  "key2": "3iKteKzJ1ogXPYBnazZ2xThCeXBsLjMKGrDaYL6Ucurkw9bsCv9Sq6j8bbsRY3dDZQ4C82pqSq5QgrNWr4WqSxXY",
  "key3": "5jq2Jyem5B8uXsZEuQvGJFPUzb4wkPqYxz9aVHjLsjRfUPZVaBPnmGefBW8Anf5i3HeztteqLYnUv5b8uqnTc1xH",
  "key4": "2sXYQ2PGyERBEZRrer88TejYt61i5u4q1VraWg2Tynyw5NyjUBKJU7ZBGHKy28yGA12irzAs4BaLLGwr3jPyQFNj",
  "key5": "5JWbYhyuhT8K1jyWAeYkrRvbhsEKvKW6CdDjmwTvqk68JkiYiCBUH2JNkiXt7vkuJAZHFtx5q2gSsm6BbhyVEhMT",
  "key6": "2A1EfaDMoefzDYLKSGL3SkgF3Mv4Diwj7MXoVxdoZa4XpbiQyy16zBkP2DZvhegopZS4iBjrnnWj4kXvHuzj5XDf",
  "key7": "4ZdagDLM1TrWgtbDqqt4Dxqm6CiZTGPgX9zgXQCcV64cVaacwBw9XhC9h9HY9rjQqVmPvPPN4voGeZdwCA4VNMDK",
  "key8": "4Q59XaNidFUHcp94EvxhrdMq12r4A7e8MFpirqrSnYs9bqauAS29t81RsJFZiLjCzaw7HWvKcNvAu24GoDL2mMQ",
  "key9": "2SVX2ztoFsNufvwDER7BWR6bphXkRCqR8Q88wJ2wUcf1NG7zGg3C3bEu1TspezJ1Cr45yfSfsgVX9BZy9ug7SRr4",
  "key10": "2FZzYLAZqs8cb2paTeJ1kDE1uz1Kq7KPTH7gajxQ9nZrJ6m7Gbu9a6E5uKFeka6X6xYqaHg5PD529VTXXYPQ6imq",
  "key11": "367aHkyRxYutUt2rqpQf39KMqjJX6rWAtmcEZ4VA58wabG8UuJXmyGphew6mC7g72AHUrjpAEEhRRX5QYZUNMSxP",
  "key12": "2kgep1sYKo8urqQ8UhJV1hFtbQAMdjYcFmsuvPsBH8ygTJoHxpTL9cwUyK8NHWcG3qcvexuy651kr5fWBhF7mPHm",
  "key13": "ifMSMRdVVXTSXgTncqLjoi57Nh9LAMSSHQZ7i9VNH1ihvXsX6TLQm2qeF7gRH7FamaLqDb3arAaYcnkYoGo5xDe",
  "key14": "39piTEDvdFAdGDxgTpFKW2bBGT8iJf2kkGSKA7rSLRsmZGLSpuepp8N5xNJ1tUDaTr78NJdnV2s1kWhGe2q5Yn49",
  "key15": "2KakMwwapKvA4zBFVPwGHXyNaQe3oAfgsZEbmPo4u4MB9oGV2HKRKSdR2dEGGaQdKZ6rFzLZQWGF7bSKBLHFPRgD",
  "key16": "3pdYwmPnUz6Qg4RdZsVKhW5C6DXWtrTcBcfQ79J1A2XWKn7czP3jCZRxBgEPPz5ecqVmTVFCqH21hLeMBsQbJo12",
  "key17": "232dxnd7Lop85z8aG57dcf2REXrfDDNqfgtpkGe8PQ3Tu4DFcf86oxzM66NRJQHuUnBYirkPpvAxPBtMjsWQdCJx",
  "key18": "3zGsrW5tZ4jx3DbJY9fcDAsmpJxgcZPjN8ESSbqY7dfGpgxpKd8oE9u6Rs7fqMfeskUpjXT79decTpDPQ33JYt8z",
  "key19": "3KmZqQqRfrvff56edcvmdjkGgQyJ4zj5u24QDkwok5Yd7ihfGjT8BhRKe4PC3wNqi8phArN6kiLQTkvbUqYEC65H",
  "key20": "498vakemB8Pwf99jzmjQHjant44JX2sUj2DuZh1WShuT55HhKDMLRhF1aBdvRKriPr4jL88sepf4gzMLnD8DfrU5",
  "key21": "3xVjE1ayKuPTRPEUhpVowTkeaMYaGfHitUx8UpxYhB2NTJMtWmCqEPWYkg2Mmu74ZnAW9YRoaDt1L7uB2fXZbHZh",
  "key22": "2EKxFpU5jqTXsBKGfb81Gz96VKX3GnCBctggPNWKEE6xH9sjHA5NHjrtng5HSdioS6EeW3ua69tf5aX4tbw438t2",
  "key23": "KumjN5LFdwiY1REujuumbAzspYLcXcDXTGDes3cbBZrowYcgd6pkttR7WqDkcQosPmoo9z2MWqJuU9fh3fe1xs7",
  "key24": "5Wsg56S4x33rE9FN85kaP88t5xpsVr7fb5C9y73JyUTTdoAojV6CyQU9pPhNNvwDLnQTgErL1QkSZ4QHiJMoaHoH",
  "key25": "YAatpT7tvxhq1h2JLhq2hvjntcXeqPcHtBs8cxEFiPtGLZAhbgP7K8svdkFcyQeQNrrp1PXuQMRhoU4TVoZmD2w",
  "key26": "22RWCSrmkjZFZGe7tLiV91yaWLBpZPKTwWeuRrTvr9JugJtZ9jHkESDfQuGe9SVAUXrUpXAHzPwrkvGQtDPdVEoa",
  "key27": "cqUCdBAGGT52iGCz2Svyn1TxAZMH8p95gszvAAnVbtReCNns5Af1cY9g1UH9HRGxCG6DDmRWPM7kydGWqmjjdQQ",
  "key28": "2nxoM1Q3uRRbm5E34QEDHHsi55UJk4SXfy3UnWMSMo3xxtkLNi5wnXLmSxzePC4AVgj6ELV3fvRsFNKizAPjPogG",
  "key29": "62W2mGJehy7SCCjhdMrd7PbZgddpAtfYmQEPtvK54mkewSop3TEQDEZpMwCnVBTUFV6Z5FcwxqjXrjDkEXarBKAq",
  "key30": "4WFwcaTfvWSLJBXafZeju4QHYyxmuPtCW35THj9Cnvb5sPrqfKUtgniMJCeLSDi3TMoD1soB4PjCeGaFgFpdJ35Z",
  "key31": "5GKGVdR4UYzgu3K1ojnZiAio7n87m4FYCFYHusuyNWLU2jgZStmSh5huU8XCyUigbZpFFR7kFFvRc8ea4E5ssfnT",
  "key32": "3ypH8MsZzEJNaKK9S3TVcmNyMUFsgoXNSz9JoVcDQjUqsoSCDCWCj76DAHYAiU5f9723KfjQZ38YjTwa1WXTb35A",
  "key33": "2eiMTZgHyKoKbuENuxtNyJuwth3We2pzoTQuTQ9NcynuaxPUSGkurEoQjQjNEw5yKGa5xGMKg1EJk2PvjgszVwxy",
  "key34": "4TXVKnsdJBC4g7B2Fc2dQEmLTPDyoFeBVurkFPwRXDjYXbTYS39PzXKmFnSrWvWfQvn8tTraHAX3yCFMZd1AoCBD"
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
