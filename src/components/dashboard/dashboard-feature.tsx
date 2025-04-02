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
    "3nJ5U5ST63fZA2ULmzYmWgXhkAGUHge6oDfng9qkZS7fKtEmTBTmAGrPNvKaxdBTgadiiHyXtdTes4iFybkMYyd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66no9vcNpugoyCPVNfRMYHXn5ovwiCbarreKkSesjs8DHkNyZBKGdKXxG6KUZx5m3mRXbjfQi7Yg6zdGa7PmybSm",
  "key1": "49GzMQ7cALcYnVqQC6q9iAeVV8qo7jQzE8gGMtfKpGHU88QnKB4GvkUVzU89mrDxeDiVd2zcyWWycgV8JEMx71YQ",
  "key2": "4SPBtTqR6aqzmFWL4zf6KCFj7GyAzNxthqAhGSxuHTezPt98dN1vJAhquaRKCegqA53sBi3yVjCjVuPaVtoHPGgR",
  "key3": "3Tgh8dViF5NNy4jdgib1ykTcFEcCqvbhVTts4fTZpk9Mmnvr77f4Dr3Hf3x46SKRH31b4ndE2V87UNnfdf7h5iNC",
  "key4": "5Aga7Uj7a9f1GzLJL1H4tzX3RjK2FgPvXYYsaBzgN7CbPLi8z7s9Lwhq7XQ7zK2AKR6vYHAMezWXNxcaeDoLQE7G",
  "key5": "q1Wazg2p5ZYNrp5ChKGC5P49R3JVY9TyZUoapGPXSftaLFJnhcip14Sj93uRMJs6LpvqPwZbWgnhiYWpomNAKP3",
  "key6": "32tCy7HyMgaJD1xowzJr429Btf13JVKNeuX4CvXQMtfBdZGHRME6duCmymMNV63UzAp2kcHQhEDa335uDQyKM2vG",
  "key7": "4coXqp8Mun4QqgFaLysiH7aT1bWe9HeYPrTRT2s3Kihx4Gzg1ryV8zZiVzEoew57E3Fi7Vww2WBoCenHT4g48hWg",
  "key8": "4JMct7foKBMXUWtt8B4eiRdNMScewT6shK9PihgRDWASH5wTFjRD6775HpfAf5KDB7VdZuQwNN5XxFAzhTkYTFxi",
  "key9": "5fjBBKrza3YK2BLj8ZuLQt9TwpmgkQoTgYFtYeJVcHZMezQmoibBFFjigxy91SWd56bUQC5D6bhBVJeZ9RQSJyTP",
  "key10": "2PTxVX8wuBR8YmdQfDi2oiWz484gJSEgFNaU4EYs6soQzBPaZCgnaMUzgQ2voveF2NBvizBzPk84ioAK4LFvmKgr",
  "key11": "2pRwVq9NRz8JBoq8aWASu5VDUMsJTA6daVPxAzoXgWtzQQyaevrfBkyqnpFvLYH85iGWD93rwvYC1QubDSDhqUW5",
  "key12": "3hzfLxyxuAK8sxFGkzc66X9L3DVAzBVZJX1j7wAvmGjYQFBnWTDLtjjEnQxVBKFMkK8FPapVeW6GKWw3BzWon3b6",
  "key13": "2ifYxPKXFENtJC2GhvvAZTaJduPGkxjgQHFw4DVg5kjBCQByobBkcRuAnYDY2czWrPsgwwUv3vaFYWcwPsDiyVB",
  "key14": "3yFiuHCTyDR7338VyPRKiXi5vJCuWS5naiqBhh4vMM6izr81V5ArRHq59fTbjt3LNqKMJDwYaduEo7te8M5f8Yoc",
  "key15": "4X8b9J5D5dp1TErLpFGW1rrfJvXMpvns7NvmzPTDK8CASyoNRrmcMec9dfBNXndYhQzeKGYxafKYmen6Db9i61pu",
  "key16": "39T4VZZSxbkPkSs742GWz4T5HbwqN2BeyUZzsA4WojB4Zywy3mw3SmtTbd7326DPxedcXke1LUiziW54WsQ4wUzY",
  "key17": "2NqWet74cSgdtvh4fMFAkjRpbkc6WZv9HgEZZuQCbHubtNkvdzcc5X4q2kZEmN57cX3R424ifJg3NMC4TZRYcKnR",
  "key18": "2fuVMPsjCS4tkDPxGCmgQN4Gc6BtVa5T1j7aMTxKm6Ezs7wvyH247HH5LaoFNq9keSv1MfQnRJUFD5AeD4frg3vr",
  "key19": "57xEBVGMvafxqag18zf5vV8D4U7fd2Vx4GJBf6HaiSeeHZJ5Q2dum2gseKBLmLFvPRDsxPHfCdSVTjN2uEkijNFA",
  "key20": "2iJVFYm9KwyZmnL8q3TfaRSzFf1AofJyeSmSZB5bSJhws1NBdj8sWBb9zqziNcWFxKT6ukfQLJKrn9K17vpYNSLz",
  "key21": "3yP7KfHpp2iKYPQUxqptmwduV1xw5ZzvnnwdKEhh79bc6vryD1x87V3dReJm2E5JDe95rUFR4pqdWSER1wGRSrJg",
  "key22": "m9Q3prZ7ygz2padV9BcXdQ6ysSdDvHVwZ1aJC8DLnr8ZQLn63Atbg4y2BVWSEJJTwBcAaQjrYTrJcbPwB2cJ1aT",
  "key23": "4NccZ5gzYLDzx3iX8gMgdDLg6WpQDVMMm8RvAbLC5NM2bA4B24BX9JVRxzoZWsqT1oN1vZ9vv9zswdcnDb5w8y91",
  "key24": "4GV1Cbp8P15kkuP6XqkqvMhZ8XHCiC27NSHtCFiKFGLESXwyEKBDNrVnQT6ix54ZpStMqrVsxY9ZspxQPeQb4bmm",
  "key25": "pWbDXMnM2JPTCisoamFjKRScFsUuHxUPNwkPMQfJiqAYecYnKQ3fMo7BH92fHHQdi2wQKemJEbpZD25RQimhJzF",
  "key26": "2FcfTqH1sU4zPZnzVRc7sEbdkEBivNfbNoiZxFgkGHzd42ucPT6DnFu3Qiz12TutmXuLpqStDQGe1etQboswxjP1",
  "key27": "K8abaeU3fzj45rhCdQoAsuuoL3wrnXSbWvA7efBedFSiWuLVvbR5JHRRNduQNVWn85Zi9TXF23EAsujtqrxzd1d",
  "key28": "31nj95mer6CgVvGCKStTZkXF3fCZQ6BBozWsuV3XeFYxxeES88PQKcfR9uNQz84ar881uhsBHLj2yqevERrZkdZJ",
  "key29": "3A6RUAGa1q45gqagcduSq8ZZKLzbw2WDYCoqesGAeLDZfYfRhfHCA7KBGPyhYhapfufH4uwYcKq4oy7t4Yuxz2ya",
  "key30": "2qr4Qsjr5EfG5zVUYRRnHisPshsqsjD6Ypvkv55FnwJSmZGwLMQkMvpQKdt4YVyJXmEn13xFDwff2EAhV3GhAiqm",
  "key31": "3eHNBbXW4t1kvaRja2ADUZaLoiwq7mL6AkS9SW7d2bnyrshnPPGVxnDD7pxDRxrjSSXCL8SRMAmeen49m5LcgT9o",
  "key32": "46mX81uU85KBR6H5RdegHFuXV1sjCf6HbzZR5xA4Zzjad8q67W8g82pMHArdJTdcnHESq3zbdWKZUEznSEj79aks",
  "key33": "wkYcTyF8by2keFe8aM7yzA6WaVFrYQircZhetHcxEWC6wzJcjCp6GscTUMQhhmzsLusXLEUepBy6SNXQMZHcFd7",
  "key34": "9x1Njjs6u3vN4i9GE2dCrJQZohGpSUV43hDMHMA3PY1S2SDxuTn1k8ih9vF7Z2eEobraL7vmNqDAcufF8eaiC7Z",
  "key35": "pszGzMqNhLqxbo7a8sfRm1tNdLT6BB74bu5QfrQ7BgSdXexESZaSP6Vx9KLkh8RADupJquWZfCMiPYpKbSrkX2v",
  "key36": "5CpHHB8kHCx2qhZ6n5gmPPaB1MUEnwbiaAH1qx6YLsRddj2KkQvEhj6JBhZfsD4pUEeA4rG1nK1PiEqRi6BsUDLV",
  "key37": "4Y3ed8UmLYyLiTQtC76tqBRTu8oE9V5W5cyoPff94BV5ueompcmfbfHULxKAAH5S3YP6GQGSorbEMRryXozuuu4g",
  "key38": "49CHPB4Wmd4v4fwG39gCdrnFqJiFv6TmLBabf3RbgAddzFdCfWAmXSWdtTK1CRz3EFpP9CxRLmfZgmL2UAb8vwDJ",
  "key39": "43KdJ3fUnqPP5xp6YxhsCNxhbMgayKkmRrHEmwvVrgUGwoMZJazcL2W2EXPCj7ezN7z6qdLZ5iZkSbisQZTXr6Nn"
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
