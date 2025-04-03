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
    "34Jn5RfhCtzDf8s3Hksu8CSCSoVBHzWsARpa9JrVrvPZ7XVWgSrxNbFzgouMwCqXKPj2hBsArKPv1nfc168YKLDF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2B2Mca7RSNQh6NtTA8JxTDQ6G9CWckMBhEZdSq19EsNakf3zxa4NG9Wf44NH6f9uw2fyKf73kvqBeDLx8YuHuhyP",
  "key1": "NcGYFxX6NwrJMuuoreJf8tFz3QosWTDGv4M952osEuy5vzGhaPNVAZ3JYnbRcNexHfKY1HRdmhGZSCHRM4viS2d",
  "key2": "29M7Hskz5ySHR586EffWRYXHyzQcMtsitX4imUEV9exMRCZnPxCrVcSHosGcK9zYoMXttwWAxzkaepoMqrC1AjFh",
  "key3": "YKvR859oEDYEW6TuD3KTf2prbKJ6TNAr7evffEBstYAu5Nk7EBbBCshzeT9DfAfKkJR8URzMMfe3q917xkDFusC",
  "key4": "2d8iXXi5QT4d7GpNzeP8qgXm2UhRB9MkP5oMpupZerWZb8skBtDn4mR5KicBgRdkPDYHtpsrYnBhxhZriG6nNkpQ",
  "key5": "43NbZpjYpERFDze7sFBmPxPmP4DVVpZk5e26oTkEvDkjCe56XD4HXxzS8zyA9UnRdu2mL2kGtbFWKxWFtqmho38j",
  "key6": "5DGPxvq6rjC3TRZ8XDB7ucYhU7zcatu3RV8qNP4Q8FJHH98tgt3ECX7x2xTqJ73M8MmBVxnycZ1WHN39KvwX8h4x",
  "key7": "3qUvSzoiyWTPA3PtTU5iycWLFJirPQ3j86oKyqRe4fx5wm7Gsq7M8fFsv3Fgj4bmF3amNf8EXCnAt5edAiBY7P6W",
  "key8": "4ik2qcWhN7PhwkZFWUUdHjtWSh9i6dHgFKGh8ABg2pjMSZ2o9HberEdMrTGyfAbLAabnagRxLCdpEi7hNRj7B6Hr",
  "key9": "3MfeUMMCJXaJQR8iYa6nBfmj8wUi88MjYcN3Gu6Zo7RjrhfMzm4m8XgW3FZxj8pMJLVi57GXfKp68DnEyzmri45P",
  "key10": "4DJvr78S4koznJDaCygmNozaSzgt7K9muGdjikRk3LcNhjgfCb5Nqg7PNDUyBoCKo8mSuUhmtbTjWQNEPX2N8EUn",
  "key11": "4a57wcmD5UE643sj7VF2LMaKarS5Zy81izgowSWsCdKai5aPE48j9SUWrYHEwRPBZsxjKpVg4WjBYa5BmYsY8uWz",
  "key12": "4XzbU1GwyXLcL7yN5CXJaLTqZckpcmiyBBb1w5RAaYnAXavxk4Js2YPF7v9PaZEHw1iYvB67ccBHjMdJtvKDr18Y",
  "key13": "EXmSWBgseSci1mFnm1fN9ETvR3TdfAEyzcCwiUvFMxPf1njXNvxLGcXaDAJeZC7TN5taM176AmsgSFd9jNji3eF",
  "key14": "hrv7PPhYJLHuywhLmDYUevge1XyRCqkV8BweKQTfX1V2AJHHc8Bjqo7x4EkXrc993BvoF8WzAZrKRvWpCCaMBU1",
  "key15": "3jAf2qEA1Nz4RM3rTKd7wbfZGAjbHPXbfUEc1SwTs1sW7JD5CxDzjydsVWaWTScxU9dsNVb7aQ6LL8H9XmzgsGrK",
  "key16": "jrrtRpZgfh64ohRohXS3geJjzcdmdk7qYc6MGN7jPj9bLdWxXSVN4ViAkQ6KKTD556xPLpxXWdTw86TQv4HBMwP",
  "key17": "3RwmhMeivdQoWK9yi7SKkNyj5ZhRpf8PY3ceVJ4r1HwkB2veUA5PYaagQBFbSDRKC45Ce4zhQaGc6wyWgXvynMAi",
  "key18": "FBDZQdPhmRgswHKRGFhTDQ8pkTnwsrZE1HU7o1nPZRt4eGoFRi34kwkDx3d5cqccVQ8JhMbXHjcpP43FM5r98XD",
  "key19": "PrsbLD4p4hN9TVC8M4V4MwX6WBwWGNLjeUT6LVaCUAGUFCMRooKPiCbKuPYFxvTysesp9Mck6pXwaDfytXFGpAi",
  "key20": "3DXgytHdjv9FUMpYtM4SWKcJTjDaxXFTJUTxNmydGAtp3DBny8so92RPeYLFBtf3vAQUUYpzhdvAubNLn2zetKFf",
  "key21": "KYzYjL7RMpzFTiNtYZ33UrNDnqgwLF2zXo4zoVTta8q3avSptJSpiHkWUSw6VwhhCypsuf23AQURjQ4CuJRAp8D",
  "key22": "25yHTgBoBkZmmMhyX8wpseMW3YASRwurnGBGJbSvKFbx4FuL4r4hgyM4BgTpBD1P5juVcVsG6cVW4qN9RMcDRkcq",
  "key23": "4dss9EVYxSV7PSigosNkazmk3hNX7zEBDxrH2r6rybXW3Hjq7PevSawYScRz85vPALaajg7oRAEcvGaNwFKDD2G9",
  "key24": "2bwmpcLLGFWMrHkig9duqEhRnFyCkDibxawXHnLDQNi7WvZxCXLtN1vweDXRTFzyEMVr2CJpBCW1W3zxqjuHhWsU",
  "key25": "3tmp75JSD9kWDPSkAN9nx4EXoXwAURSdQNFJrV1amkuUnGbn9a9Gbkzd6LCBF61neXMxsaBwyd2pnbcGSziYtu77",
  "key26": "2NyvAipe5ixba5EHBHRbB7cgFLyfB6tZmDBrNNvVXeZJXrtXkZWwSzoVU2EwCowhKfzc3tuqMfiBeUx5yiUWDedo",
  "key27": "2ALehgvJDtxNH8rkvhYeyefnqPgA4GVQRoyKxsW37u98ydTaZiq1WAWU3oXUAEZDwYeEBhFefmq4dZ3hURJWcEMk",
  "key28": "Hif39D8hpzzSiksqTmjvTskWH284p7aUeJn6YqGDykbCbYHU8BADhNE5hT4F6fUGX5kD9VQWnBjkPJ1KFhMCvK7",
  "key29": "Dmk7GwTshoDBvh3aT7sKDzHGNp1qkcUcyK6ShTuXueasE17jfwFZ8tph41xqUhtvXsMDgtvgVqmGN593xpBgnYV",
  "key30": "4KKx8iXN7HecHmd9HRc7qn1AXAAhVkoMVsTaRb9CnUqX15wevNYnetysFyqBGmgox7PFNYDhizJNkVRJHJ9GySDD",
  "key31": "NWm925aimBZ4ds6KFfNmFsPoVJnTKnsVN3YxXGmHSnic5TBTvBuE1UsVCEv3yGBLy7VXzKGhwLFC5pj5RQUnwbi",
  "key32": "4teBV51yjpn86FPnw8sJDvae8wDPnFrKPKmaNHP3Meq3a2Chh9bXFZC3dn7wHn4GQDF7jvLdQaw8wtFsqgKFHEzo",
  "key33": "5qbbMgNTokNgakuPFu9HKTWz3wdxH947gcRZQQSzWCbBKqMiXVcQjejLGNbf4kKt8Q2txYpQdtLEN17fqsWznBom",
  "key34": "3SXqxpp5GLVbmjb2NXPicWLQ1zHM7nLtotajZKUy7qAtWamDL6N7uomz63PK3SXWitQGBrHa9e58QXE6YyxewYiK",
  "key35": "3oKWTNrDz87gHCtN6ZaHqJrwCBPRpFZqPDhJWZQvTcmMWrY1tV3kZ3GXb9Pbu2cvRnDGdXJbzk2rDDiFyE1vnKqp",
  "key36": "3ktFncA5je34RwgYP5qiYZtKSTEis7SQoJbRd3JccojA482jJkGZuTDFhqUvp2Pu8vd5sE1FKmE5n5AZD9oe95Kf",
  "key37": "3jG8ZLs5XFmpoujH2gdqZnB7qVKHsx1duPTVuj6yA8uJhsNkacTjKbA4q8fXWtVRbBWoX3JZZR9bPQxcUwV2y8Mg",
  "key38": "3SA8DXYn2nKPQvobMhbPMMKvSuW1MavDutsrMkkRU1zMepBPV7iifi2pdcffeEa6HNfDmFKP9domDqs98xr8Gnpb",
  "key39": "56ibSqVdsfLXm3mUHqMEcn1GNjQNUKBC3PtbwuckFFv6YZCH5kEUXgUEqLF8FJhitH1YaNgW66pRkWTzeCmatJ7K",
  "key40": "5dG5XQS5GCVAViNVKyzqmxZDVLUpRVDPqTunV5UaSqNaU4Se7sNohH5fFn2CzS7Fr6ayP193gr8Ln6bNGj8KCjBy",
  "key41": "4nK1RfkaZG8P2ccr1xignaTAhwhLEPQFgrso64wzJsczCxcM9NQJJ2v2Jud7qsfbX7VE8F19RwvP7kujYAiY5fxa",
  "key42": "5XrCAfWXgsYuq8eKwn4v7E6hjzuHkuQ49rYCMmvzc5gyuKrq6scWL565eUmN2QzG39qjKPLgzJD1FpcwigJA3EqX",
  "key43": "HVnt43QtLmDqGHFGTF1keorGjWJF2W9qVemwbYDsdQQgsUHR79TF9uxe8H7dznmrJj3twb7XRGD1kBdNecBEL4G",
  "key44": "3RxPRdnD6vEEsCeUviQQi7WkVTaiRmTxoKdYsAx4tAkSdFznDcFpJH1FGzNZHZka5rkUWZY4SXgXZdREUb5DekMm",
  "key45": "2bDh8648ydSG8Ki2XbxF3hA2ZzAw2hmGgJwBhzS4NYNXxLJESEHL66hVykdSTRXo5AVw7JuJuDJgTArpejoujrWF",
  "key46": "477aYJ8x3aDhq1wjjf8ToGrLh5w6u1bEKjctztpbEPLKs7z9boZFcFo33eNrtcCvC8GoPrZPgmdgTzzr7amQnYi7",
  "key47": "3Uyc74GAiDWg4GYp8PvmKfQUG6yL2UpKYUtdytzivo1hxqfb5cSumioVRwzRAtLSSQsaQptZc5EpSr2HumH3XEC9",
  "key48": "4Y8Wz2bjbxjga1YbveTfkB1j6bPmXSkfDy3gG8icTwirfJA9YHdfj2XcTNnoQaAiMzdJf5RFTCuK1LMmfihj6c8S"
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
