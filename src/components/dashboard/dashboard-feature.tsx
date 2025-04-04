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
    "53keFVNsNf83zfNXiNQEyKzFuYzQyBBZg5Wt3Mbfb82qVnhLEdSDdJoBVBHBPpQAxbZMjGNXfDgXMEkwQuMmKHCc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MQD9EKhiV6k9tc1CnuTrfMPizatdYLsYERyABE7M9HXvBZXRcuKoWd3v6JsdpsG6oo99acdmjj6P8zhPNZQYAjv",
  "key1": "4ceeZtCqN2bY8U1Zv7dRKU4j2RTzXvnrcQDz6y1yxStdrtFVf12jLWfgK54bWgkECiLCEVHiBxJgsCezqPRCoHBw",
  "key2": "3ssbJe2XypNRpUAuuZ2pFZtz5LEtpWLVcjTWBpXnJDMG1yyuUwTsC65Y9DmAxjJ281KeiD3sZBtCf6tv4HbKyyLX",
  "key3": "4hF1yETTCZUjBbBkZgvYkokRM36LWTgNvEipFmwXRzeX8Hv7FVH9MywMXHZMPzjkRMnAgcek3BmQ7kKkvN3kt8ty",
  "key4": "3svZi73jihFKtXajSp2R1JVmpKR4VxCmmp4g6Q3kRyQeAhtSK8cf8FWQ3DWV1n9vGUbVxkzFTyYd26g2rwywBqSq",
  "key5": "cMueZHrV3CJoPpYUAugSRe3BrZTQJeKqjGTm15Szmi4cpf1zGxejchpua6ocyGJd33mq77QKQfVUQYdzQpKs3Kj",
  "key6": "5E51ceiYMY5X8Pzr2t693pHb11fbQSNRq5DLmrNiRdDj5ADLtTHF1dxf4F2kZoAGCQSMfqZWkzCRQ6Mgz2WnRJmd",
  "key7": "49ScuNaB1pMysYgtDSdStPet94VHbmZuHwT7eTi5Cx5YSngkTKTD2KPgihj5inasKGkkBTfE2S7ZqM1R1YMbGvq7",
  "key8": "5KGqkhMcoEatR1ZRSagf9Jo7rDpyBHWUPjXVEMaGmtpeiEMTFYE6wQRo5MAiLSdNxWhHHvhTi34eaRySSzjnedAz",
  "key9": "Znb5E38HtQqPGkgndhWMMGRTbCfUCDmbf7RuX1veDLeBsNMFNyERs4YEGuy76ukGt25JNEMDzz4i6BrSNUVGH7F",
  "key10": "3LzHAJ68645FBx5B8zykXQqDJ9wre52kbMU7h3WRXropBthTBqit2Km7V1dqaurdfjyLCM58qs5vAJCq4cKBzN24",
  "key11": "2J5C1ya9BiaPN3jgmXTqu77VaqgyL8g6H3TALeq6VsqDYYBmvqcrwp3oGx6jNj4YEKJUZ7fMAxbRh7vvCjvNFhas",
  "key12": "4i1PTMvUBkQZAkxi1a8UMwKmNinvXXGpCUr4Zc4TMAGHSL7WDZqDGtt5w5dyBqiEzKTPjD2gDTFfz45AAhfye4D3",
  "key13": "4r9ahWjw4cQHy7aYZw758HTHhWn2gshTZ1P4HNyDZTu5Rf9Mxia3hb8mk3FRXTTjLzfuBw9AxNE3JfpQDYUuHu3s",
  "key14": "5zqtcv14RPnnhTgnwgWMVMrNj7ah7aqRp2rwgXJSqHZS72pYhBiZhLtg3YT58pmsWkHP55KCLAke8W1uw9wN8Tco",
  "key15": "5ugpzC2FZjC9FDkY3Y6ertjjWxenvDBWEckaRsj47gcavocBjadzUph76TsyFmwAjBAMtnJc3jsrUTdHd2TMSRhB",
  "key16": "BmqwD5EpAcz2J9SXrb9bQYZGuLYrZxGorZWWrzx9sUkTeyzZHdTJUYNjJ4kkwqi5MCL8Hijcc9TK9k3BEeyXbmA",
  "key17": "2x7zz5MeKqVE7ZFNTK1ePmwxHQ5BNBmBBWvnquQn2UNvnsDSttoqk3cY9WpvGnMVNm4YuJd9pn9d9uah1YYKY3Tf",
  "key18": "4hhUMV1dYkPhYVzFv1hBfxiZj29NJcTKa3h3RCgMr6fFwPyJSgvEWwvV7AJEvW9jYuaGmVn7v1wswPmzvqYZEVLR",
  "key19": "52y5n9s1GtaFqb3aDorhMLP2ZaKPum4SWjLhQiJZXt2u46sDstSq6AssSZxhr1FfnRW5G11hHuNiCuQuKmTJ95ET",
  "key20": "2aS3mgPFQvZr4eRBXsPd2hy1DjoafiiUQrGWr7Sm7DXcAXZNUhgYh4X9bDof4sg65wMTbNeDNNuz445rw1bpHqDC",
  "key21": "2KJcHT5rMvDKFBKwAsuPT4GpMKmTtZRqLfX7LJtUsY2bRG9a9LQtNYg2L1Wggfj5u8oNVoHFNfjQ3VcZfWf2AJ1x",
  "key22": "5TZ8gDQwekedCdDoyo1jmaoBAsDJRGPMwoG3o5RXk8CsPNSv9S4LJFBFjKdi2T9fmbdU5DVJC8AVkdZ86qHgNxqc",
  "key23": "29E5uzrKGabo7cFYz59GzUnjWgbJZPUPFaMtoREx3kGZFn2aNH1psLSWPkpqDBo1aZqfDVSQbYUw9AGYVs3UKjVL",
  "key24": "tNf9zh3fHZfd3BjRrLzi6UC2Tkmdr1SBEi7cYr5CvF8ye5hAuh7nxacTiEQSr3t12vuCz9TdXUci1RowFFJSokw",
  "key25": "3JcSBU9JcnZqcM3engBK1YxQZ31cGDuR13HYebQNJZJ3gUTp6njv39YespQAxsPR3Ph67FdMk1oa2r6jMhoUnAqn",
  "key26": "44nxS5THGntRahAZ2feBqJg1gAVsZtBqq6g5XN4ukB3cqCUm3CxMbX1xWNHPuEqp7tZRDktqghjNDfCHYFf2DV2W",
  "key27": "5f1pEkeVpb2VNZ41vGXVtjy8t9cvfvnRGHaAmboJZ5bSRjqfQ7nPuNJD1HGyPbfWm9K8t9vmHtdWib8V3HfMyL39",
  "key28": "2NM9TvxwjY9fomRGNiaxxJfkW78uRHavz5rRgvciq41WwLXGiN1MoFMQUX1beoU6HUoTFEnTS3FKnQKCYVPcs4bk",
  "key29": "2MuQDgf9QNGcDrWmPgsJ3x4y4JzMWYo9BtGFHFSDiM8rvvsijjPiuH6Gr2dzroNVx9hCfbdYRpguRZWW1Z17ERd4",
  "key30": "4T19xbs4ao3WQaKwMb1ygwwetJ9r1C31vcxLLAew38orKJ9W8z1ZKP1qmoVn9CYKMC2c12wwER62uiLUnauXF6Mr",
  "key31": "vx9WPRSnQhTND2zr6sxK6hJHnBigv5gNFDRfE14bBTq2XDAztuVd43foKkBps76t3CpocS9u1KQBUUL2gXwCRGT",
  "key32": "3dZ3vnPTWP345emtC1q25PVAVEYTu61Ro5iu9KQA4YUuhp5SsfzSBWchWHYTNdsBhB9R8BtjXmqgMhAYThNhkDv4",
  "key33": "27BPv6dvMrETNUfV5yEKpjU2pcpRxg8pKWH3hyzRpjQ13P33eBMDLab7zFeFrRVhUHgewmMmWmtMha4Q2LSR4f81",
  "key34": "5BFuKsgs6zkUqim4z6wbo6BkdrbqKhTiMoYUVAuBRfJuozC3Ky9Vdz6kdku3PLtVW6CHkgFWFceLSw8E3CgMfiz9",
  "key35": "4fGMwNyhmuUtkv6BabXLCWNBdLogkspois95qdePksCkNriRR36v7ckMAxH3VVmfqSBHwG8yTcZYqSCsjQswcwQL",
  "key36": "2tjwAjyepVce3ugqGU57u5yJLS3WWrKJADXcdZPN6WUFkZYqptxvBVjkw5rJ2Vhb1S2muNwcd7ZEnNkttfrmztu1",
  "key37": "4ircRdue8NUnohDrCNMk931BAd18vwQBReeyaz3HK6ybDFVZV6Sr2Qqw2mhe53tSpc6PmyY2kJfFmqw5GUg9rXJd",
  "key38": "4Dd1woNjns6KK2J95VTqWoiVEYPZv2DizL1CCzE5tDEuiseWPzGtmR9AUtwG841D8NWRsksmGxNUdsCMDeATKKwX",
  "key39": "3zwt3C5x89rd23s6BJ9PrP9gUQuc8LJ6scvNzSurT7qGCdAgto5xX3QfzS2nvS8a63tMfEGT41i97hTr37N8YFY1",
  "key40": "LENvpnfNC85hNCX9vyEqACUVxpxWHTDfDo4Wn7xNAxeijFY6cxYtPoom71PFgtLwH35nC2QKPBzGQrv4C3uCLBr",
  "key41": "5LGL6ep2Hmqmg7XW9CMNMz1Zjet2DMsmMx1Ni6WDqnueMT8q1eqRUKi3JqEuo3EEUjSbwQNohM76WVjKFbDWEFyx",
  "key42": "fUDMZAk9mwoMLAQopW4AJG2Eej1tiRcxPoSyNg6YGXuKiGHWLKeuA1BoVnfDxicMmo69GubvaJdKZiZbbvfkQpp",
  "key43": "4RynQ6RPsWQ5AfrMKomGguuAaSQPtXcdp5ZZWeUq233nJmtY877cxMvKRCE6th4UEJG8KTya3JGUUhk3AbrAmrvT",
  "key44": "5APNHJ3FwARqgf14ajfzJXk82gziHrZUCt1F5zC2W4RkrhkV6VqrznE4vHz8B8vVMGCt5wPYtdPfpfvPpZRtprh5",
  "key45": "2iE25KuYYS9JY7AMVPYW7xtKiw5p3tTyhMpVA4qdQekijazWXmXXBvnzisV3Tdcv9nUsBfMVVGUKJt6YaT6YB75F",
  "key46": "4JTPk17x55D4MAdMdW2CeUxkVdhu2sdndPR53cTd91jGGTRH6ZVZmgz6GCnLnBAD4GFCUx16Lj8wWBDF13FAP4QU"
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
