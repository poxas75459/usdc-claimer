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
    "2L76htWNgp3y99zSeX6kAcPJjRyQuSNqLwsGsxfaTF7H8LL9PVQYMWYwnhLcavTqkvk3pV6aB1zeLht1Q8rz9bNL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ksA7mo6WhDam2HS7LHd2qGKQ2nUDCuq9yE5hqznkCJyMTFzG4HRtcYqsNxVefrzVz3LpHgmxwQ2FMaoLMPF9d6Z",
  "key1": "4fHfXCweLr3cLKDHa8VxxNESy6ooBCAVBK9o8nQLZB8VVRh8Z73NaaJi3cXQCSaspCAt1dKLid1A5ez8p95xRvyY",
  "key2": "4ugdMiDf81k2FuKnoQ5zdmP3kihjAZh9VL1awckX8QzPpSEC9eiJdJbda2qCtNZMbDr8RZJi8JmoWJz31Gi99fAe",
  "key3": "3zQt9eK9sBEu36bmGxjw3ap8miF4MaQrySZwL8Dbfc1o9tTqwxS4SQGEjpd1dXt5uXyCy1AP8EzEuLsFrT1SeAUy",
  "key4": "23JjMWswhxJKVQEVbxzPWegUx56gS3WBuuokJKLhmBRJVudWSRWuZHsFLYL1H42YT1yadULNVCY8PheRaJnQCgYU",
  "key5": "29gkfPUJNoSXzmmApewhW7fxmmhmzGDfLwCHShGGRd93jwFiB1Cv3quMSVkGYjKTahBU7nQscjKo5FqFixFrX6rf",
  "key6": "363F2W4oCUtpSFCnPacPb61NhzuHkiPHWJEX93dy1ZixwuJKP7V4Yb7vBVHd3csUqAvKGsHHq2E5y8VgpTXhnRSm",
  "key7": "5oG7yLVzGA1ZCbitf4J4TMF7o4XBGfPVzvNU2Nid44xQgpF2nHqyBKUcAayH4xEEz6mNxm2GLYFFNSFVCbxX7VqN",
  "key8": "wUNy8f8e44SKPw29j3dpNekeKbxcWfboR65RMnU8aEA5J3FAUrrcmqFfTbbTnMqpDKj2otzx1wqZSPJ9V4fpC6Q",
  "key9": "Fkn1tdm1KPFeAAS82zvgKqXVWBWAvkwY6CQHbZaLiFbn4UnCm5RLwXTUXSCFZyuGuvYYyNfhhjxCqwoCCTQ967x",
  "key10": "4qgBtakf78aki8tJ5mJSLVG5v3NxrX1GTCwpS1FfSfYdiUcy8nFnSFsyMAPhM8YRpPwWsFRAFZZ2Fr8GTPhGbBU5",
  "key11": "tkfdEy9L9zYXMG68RAbSMzmTJcn7fmHpq9S5MUwVLX9kmTQd3vFtWQwwdbNjS2uf1rcTPkg2kCGwh5o4oGWQKTV",
  "key12": "4aRcwUaA1eCamG7ZDDUSDKkyiJ7zH4bE82ucadnkbkGbknuVKWpoj2KXUTtZYGCfRjGcotAi19A1Ge22CmS9BkBn",
  "key13": "tZ26cVEho2zfhmAeVkkQhAECYvHxarPc724kWen2T6CLWkTHBZBMPccwmPwvxvHNCJEFnZvjNR1Vq65cNoDZrta",
  "key14": "5qPg9zXDbpLroLReaunPGRqz5cPbNJwb2aTFYkAMKkwJPcHfgfb1hQomw7an8ARkfKdc3cazG7FSbi21aoAoQgFm",
  "key15": "2DeJqAiXoJvjRExDVt8y6sxw2GMvMy4tMygTLw2784Tvrux5cgEBVGSnUoc4NhqurqdqeEsTC3R4bTmxdeqB54Xi",
  "key16": "43qfwDy8o8PztH4zPEdE1oxPNecPGXzMk7C6rGKo9Nu4McPfWrTaoJjhrKZqBoCvDjn7KH2V996c747XErbggbaU",
  "key17": "3fBWLLseUHVzaGdkDfqjMgYnvUDCLnV2KdCnmm7kohjEMfagEdL1j2s6EiZWtUwPxHy9sZxqf11yjoUH4XVuFXJM",
  "key18": "4jxdQb56wqz9H3YYqozsHVRbc3LxHUoBmTfNJ1CpBBLkpVEtzn6AWFDTWark5Rw2Lji18Rkf8CN1ve3XnLze51ES",
  "key19": "4jwQS6bD11xKCrYxaGxeBS8WHSKw8HkNFfDNKvm2TqLV8jARi2eKgLpNfuULN7xPcKVJ5NxLXCUZBgvnNkBqJ8JD",
  "key20": "5o29fUff6cFqqVbpq1iW1u3V5WnvyeGxtumuECjTxa1ym4SQKQyuxoLYURNcy2ZRQBizYRLhQ95QCwsmgbjvbRbP",
  "key21": "5YuKrewpCttJaB7kzSEsYQP24GBMe6j2qdeASut3Aqm4MnKZ5LEhrSzxa3cxGtLUGHaSxc1YDAQ1fbvYZDEMFbH4",
  "key22": "5qGPGBAkfsRWuea6sCsFUFAxU3NCjTLizneKzgXSxXJWayXvj6RSkgBmDhAAxxRzEFsGmjbLSwEQJvk3wb5Qap87",
  "key23": "Xzg9HmiHrLgQ2q1BNfhDGN9GwtHRPnEiyozAA2aQhJf5peGYxKfCXrRtR7eANJUnUFyL6tFNu3dtcRggp7B6aPJ",
  "key24": "4gABuxWHNDXixuggcziSj32NwXWZQzYkEwbTUcgFzzgKgeh5FYaYTyQgehN4foed7c6iWTq5YUnskRstJUfgpjXg",
  "key25": "2xshR6Vv4tBb7RoJ86nxnv9XreFtZR3rAK28eULa7kbqerV6Vy8Gv5cLAdANy4UrDjQpEYEZCegndj6Sw46chS4U",
  "key26": "3nyNb5RxqoVNoJN1BohE7dPamdmunnmD8EcpuQuKaWmsMkJxyc31Z45pDmCqzTExFvuAiNogmqjoaFTpdQtM1btD",
  "key27": "4A18zy88fKAEHpvmhMuMuYmyGyQeERPHoXPLJ862nBPxXm9pWzQd2twbpRYY83yEp8rrafkgMZKJ6KVX1PPMfPE6",
  "key28": "2mREUqD8AECzYWwQa9D2TgZHEqFzuC3kvu416fauuyw5VjsNkj5aWQFdNPBQzBfQE8vghBGaTratzmF4caHFGKFx",
  "key29": "KCnNXhc8ksZYRmXYgmjCqHyo9nMKGtCkSDNMBgrWQJCtcZEc796KpoFrZYS7AKcRm7DTGPPufg3r1R3CSJ75bKk",
  "key30": "2PqJFkyHYQyhXV386A9NDKsX8k2yp5V9ynUAApHjkNGG7YxRvndYDvC827DWJ2zkKRq7utmr3jYEQsZBgRyzCNdf",
  "key31": "21uhRRVEN83bEGqbBbCyYgZzJcHojvPr71xnKSr8HVaojkbVLp3NZFsLo4ZbELVGyYReyLkgBCEyFNwQ3NjoU8sD",
  "key32": "4cab2WKRKvAfTLRpAUvP1zZxxp3xWqG5eTbswJtQMUJuypS7wdhwwvtE7o6UdJGvwnBENorUWZ4qhta5XhhaBjCP",
  "key33": "4RDBryasZ4QB9rSYsuaxhhv3NJY8GYe7RCdzFsNC6ktWTn8hCTzEgYyp1K1KpM3RhCunko1H1YuUppGgiBdEPUVL",
  "key34": "5JCw7pLPSap6143hVjM7EuYcx8kU68oWQTwHutZxSPZT2s1dN2XCUJiTpGFiHCXoPW3NDUMJXynmb6AFwSMWFHo9",
  "key35": "3JGkbekmfHJP23Tu7NTcn996zsmBnKZ9WF5pgk1QxtACvzEKtgdUecu7nNfrKRF5WkSG2BePnHSzk6nsZnSy2HpD",
  "key36": "3pKqv8Bf3HecJ7yhegfezmaRQeQoqRk1mYbbVYwZUStQ6m8YUPAogEaz4Tt6bG9ZQGX6oyYBoGqEKtd5dP62YUgv",
  "key37": "3MqhHcTeSFQtynk6anz6P85HuH7Jr3uERM5JwyB8cfsE4DQNar1WQq4Q6XG9egsE3ND8nDTscEU7iGnP6r6axWza",
  "key38": "5Fo7NuDjBBZUjiDLLUaBPGoHEvYA7ANdgpci981LAmW3sDWZVkaXR1F8vv2aVpG27ZHCdnB2eGXeH33fN5zKgNJU",
  "key39": "468D8qBCGDmx85Y1P4CR3yCRRQ1G4ipM98rEC5d568KKHqtzW6WQ9Nf4tdNvVtnD3vd5Cv9MMUjh3T8Q6Aq1mTk9",
  "key40": "iaEGAvrgHEfEKZErhhQAeaw9zrYSY8b8yoPRhobC484DMzn6zgiGJr6RdY6gurYTxDt3E8qigLXRE3v7rTprpXy",
  "key41": "3CdcBCohSaYh2PTNZJqed55XiMWEX6oWBaXyD3XsrUVxfpNKxBsJryARiaXpJs93H2gTRhmV8negQdYzmYhP2UYM",
  "key42": "fCfbAMSNy3Q52sFLWUUFGfZABNXQgPGb3GMMtqfgY1KqB53RGUx8yL8mzp4z4xNQJTJdevjfXsxureb4r71FEq7",
  "key43": "Mq6jCfV1WJg54g7nQgxaAwkmDhhc8tTYPPuKaRWBxGy4cSiB5yRnmpWCS7wYSzqk7xyLYA16BZeXupZ6Eg4VeZR"
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
