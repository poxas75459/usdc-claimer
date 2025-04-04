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
    "2TrKtr5KeiQzbSPs3ZLwCnD3fFXy9KFvqxsx9qCr6oM4wcKaY7Fsux1iV4wSH4MfnCzUGdmLahmXiawwHS98Vok4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34u3NiWDHAE1cU19qZkzoEhx6kYvyp77BjH5KocBVySXn7ZTWQ56Evmvzk6YB4Tg541CSijZkh2S476bpGSUvq9h",
  "key1": "wpBAvY7Z6JKNab8wC6MhzuMNfkVn3tvgbjviz1Wit7yADF9DRwFKbPd5VLF8R3YPphBgc2bsLUzykpgEBqHExmR",
  "key2": "1NAUbNSALHDyBf8vchFJt6jJEastqpN4T7RAhNHYsWJFqMBLiWKQ7nNC9zZoFYpWzbeCEbMnk9yRVb66CMTtZED",
  "key3": "5y83J3E7mwcvJ15VQhCPPSWk2erFWYyreRz9piFRFW657DvsNfNpD2dJdV4vbA3DUHLoX88g2eNbGGwhpB9oaP5p",
  "key4": "5AQUKVwca1W7QdKjXaEkm9XkE7E8ZXJodNjpCMofGTALWiYap7QkomrUKhdvoQjKodR4nxXdPo8urhkzc5dbC2ZJ",
  "key5": "5WRLquDBwhcsfTKCjoNgvS63ujpq1vmmaMqwsd7vm15jMjmcnaQpihbS5VUiypLXYzxUyDj924wbyXg7At6DBvJA",
  "key6": "4YRzrFor4MWNZRHwRHNYEu3qDxeRANZVGrjZf4j5fWdDu21FETrd1AT2YBHhNYvLYKo1bWZGeDJQ5pL1Jufvfz4m",
  "key7": "3ASCAzhBW39XcxqNZTM7CncPc9w2uLXKBuckx1pcpF8EAERgGToELGePH87vKPHnmLV3b17wVFjitS7Q61ycXvD8",
  "key8": "4oegBGBTQC5dSZnLusznRZVh4wWdRBt8khUDioPFigtDbogXUg2kQq9QnqAVXoxdz8v7evg2TPsHjhHxK9m3Gyti",
  "key9": "1w4F7bVr8kxdCJ7dbd9F974sPYiia9Kq6At93z4Hps7msSwbTJ5jozt2T6qytm12MDsDGYaDEmxDCb1tsbCYmeq",
  "key10": "51iiXg3bUnwXKxgY226ZoA2954FzLuwLJsNfggeHN32izokQJ8p1MzpcJ6B2uwxjpM8Jw5VnVtawGc8kXDgujHKw",
  "key11": "6ghaFGN77rgHMewoiawpmfQgWLH5vfV1R3CoHCSPj2E3w8Y4gi8LdcMU4JR9JMn3goMmyoHc4mn1wcgAtgimUGK",
  "key12": "9BXCR9hoEro2MXMNcw49Wrw7QHZuPBjEEJQnnPUpxFB72wx4yHDdqDbGCTNi7tquaRJT6mnEJskHzKnz9dgMAkm",
  "key13": "4kR5oXv7rEJA4UbYzXj1opG9Ah3UsoxJZbpdFCnnfDzUiM7whqP6mWkukVTnGYvjepzzRmxMWhaHyHD6cHS7jALm",
  "key14": "4Ro8kx2ghj6VtqE5jFD88yftXKXCzeu62HLHwz9zfSLahRuZ3xFhsToRvHxgH4VVYpgexBHYvZ3gWYBkYDk2sWxc",
  "key15": "rRgvDBDkNnJkKuZ72ymB5VbLMo16ctRMk55q7QFmEx7cb5JxqBtq9pNDYrG6re1AtDAe1PVr4TssmHvrS5Yyb22",
  "key16": "MhE25uYtHmBwbA3b37B4AgjJUx6wuvXWKs1DAfDNhqwQsDQa1pAKytYmNo33PmBLHLdysj66oRUhiGg8xv75rmA",
  "key17": "59wSPKznLVontujtpBJTGrvyxRkVrAbJjbvuQLLLbS4zAPjbBVQrfS9H8Wb83cd7uzAPhn7cQMLffqHMCQ6mYWVC",
  "key18": "5pj4B6NdRHKPKRfztsYo6cxqZTU4MSHcfY1ZyAZvwhhqEceu7Hdb36j8ZZrdLuF4DtgAoTVm7kpPm3ujQ8xTDxcV",
  "key19": "5dzbrzY8tqooR8DaB6ZWZWhGFk7eRg354mDqtQbDoRgVZ7RgiQgz14zErX2cQMQXVETSodc162oHbp4qGFXUZjhc",
  "key20": "41U1fPNaNvMpdhxbY4aihDE8sH7C5ivbmnbmcHAmWkyQrqiNP9AB1KYixUuDkfM9QjmSL5qmHar9dS7c5mJ9J9d8",
  "key21": "5VLk21hLS7e5gdYFJ5uy6HZx3wYyy18dETop7yZr7hYN9DwftDGPMzq7RX8br1Aft2zNuYvzyMGmh1ge5BAMn8Rp",
  "key22": "31YyVvgQt58rdE4zknMQswoYpTdVbwJkpgZvy3Xv8TZgdJhpzumiZ6DVERsnWavZiVmtkZqmTPWi7aoAM1xCZUXd",
  "key23": "4xKn3A19GNsycsUtopYgHQqHuTZJufX55AzFudB5W3Tmz4EgqZCvs2dBBDMX5kfPeWG8Q1Xodd91FMqpEdJJz3fC",
  "key24": "vNmoWEb3ZHNJ5NoFVBwxDrwrwWQvbow5QT1tbWsJi4jCzfYGbS2Sq8WqJrVCsyZduFmDuYTT5BPqXyT2WHND48u",
  "key25": "2K5ZA17MQL6cvsNSn6Yvwn7ksbMFcaJThaMctg5LkJVmB3p5PhCg5ex81D4J3WDoH7qawbEkA1imNuwKyZJpt1wu",
  "key26": "keszVj7uFNViHmMJUwdAH5q4fZCRtqctXFCNb5m7ahtAcbcEQaErHMLq91tA5pnqpXcePbpVUFthXafZ5j68UNX",
  "key27": "5TwEZtbkCGgFdNBj1RogTkxGgZqpvDvKyf7pCFbK3ZmgMXTjfXw5EkXpT4uVP21dxSQnPG9C54YLKic6kRC7aHtk",
  "key28": "4y7TWc5MeRLEjW7EmKLwHkuZaFt3SYUuAunCZg3JMYqeWvjTBdfg7PNYzxftHrSn3RgiA5nYdGrmWbheL8EqCqmn",
  "key29": "4AFBL7U2YoDvhv3eG1supVQGy3tMNTHYHvsBQXr8ypLtwCZrJ7qeJx2uz6W2uToKx3KXuwb4aovjZZPK3VWjtVJy",
  "key30": "5fkRXJoPup3zH8m8MaQmDxuEXHEjcDRXNZ7uyXWE1kW2kCfTkTN7Mrh7dzFCjQ99cJQFAS3wQMooQPtbhXKUfGdW",
  "key31": "3cWQ3Lra6JSgAWpmCVgbMKzsqaTZEQ3uGUb9sLNQFoQ3rMERAr5K1MMQmxmwRzUJmZXHVnK8rtZiKSudzyt2T4m3",
  "key32": "4VZP3FDqhbdSHtcVqwtEtvQ4QMBdwd6Fb8SdJUK6PP3uuvJNpsihYqcEUeWUshKtiAB6Kq732enfGn4s8XCoYXB3",
  "key33": "2AXyh9WjQ2jorbeMbmJiWdWNgmfGfdf3XQrRBcyBTcpZtZ6fvknsXUaU5bsBWFbAMyjrfL97T3yX13Hdv1ozczUE",
  "key34": "2K5hvtDvL3cddRwSxxwmgdYFefdN6855LXN2ccJhHAJqGVeUY64FEA2GGT75bGXqG8icUbqMLgeopkJUvc2UADEz",
  "key35": "3SnkFYoBXJGDsgYPT227L4E8ocixcm64TQsu9MvpnVnCgt6jauTQTjwPLQ3DLJPfWBW8tDke7rYynJQvp68M9Dnw",
  "key36": "M3UM5d4aK5Y65oZXx9W9BVqZb3djM4RFZLRjSrgQ8jvNup6qdijpvHpwrniC83nbefnLfiZdkMpZoKjHbF3dZnP",
  "key37": "3YCtAsYVT71u2oyhciaJBcifZkgX6ESJ8uwUdZsoCXLLLsDshB5E5YhdXMBSRTLE22AsAbxESzjcJLmy5pyPec2e",
  "key38": "5yREJ5xGwurM5mFEU9ktSNp3fgD5sQkV8qNtNTNhHxhN4E9nGzNXUdtCDRHpzSZrMgeuaGMd3PsKqjHsMj6zMSYr",
  "key39": "3tU2W6FppoyCoeLW4buApEKFczpQAs5GCGHULtQajsNuWkat7fTyipqCYPsKgG2NRnAMtjKu1j9v4mFYrd4Sse8g"
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
