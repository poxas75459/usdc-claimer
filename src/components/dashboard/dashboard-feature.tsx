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
    "BJYY7fpBTvWLJhcXqUHYFXpsHN7hfPRxGoWuspaer7v1dTi2XBKHhgwQ9Zi5TBTQLAhdCEWKGPUvhqqMdeMJe9Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RY4nfouYrRaXEk8fB9grCjeKxiYH97JkB2Muye4GZPk7ix8tfSWt5t83PxUfQFa4rRM4fiuDq7wTJ5w1NfokLjJ",
  "key1": "5uDS8ZqgDHVNzPhgSKxKfb7Bux4fceNFSuAAGRyTZH8CJiBu4krbUCM4xiakjqfQ25BriRDgYdiXB8uvr1QHeiY2",
  "key2": "5ZaPs6zxnVb79VswbNxSa9JEhtqB1PchVRK4UVjCRqX6koTBXnBnSFFwdVQ88RpW7PZrk2QEzg8wLttZ1n16F1wz",
  "key3": "3tV2ZahcL6mzJPJXMPujfPq5eC3N7Bx7vF46N5RRqkTiLhE8AHPotPQBdLquxxyBb6hXfy36tyhggKEiNBTTTsjS",
  "key4": "5F3faiktyXfApTMWBAESxWRiNw1LiVYL1M91zdp3bWCUV9EM6VDwJMDusnxUYHWokDE9MrC9EMuQxwSyUdXs4GTB",
  "key5": "3CJPhaubkWs3LkEykXxY6YiWznkHH9omygZ3GEBnyC9QNtDf3Q6csfJu2pnTgv5hwF8Up2SGhSHygTqjeP4MNezt",
  "key6": "4perNSAfSKeN2dmHSgQ9sEYcHJQ5RKNghLx2wSfZA3xmU4Fuy5JAEFPmxdzjPhwwBP3bKQpFVwkdrxRYxadBbNPF",
  "key7": "5vv53Eyq9v65dDqt1EDi3YTyc29mWyGwZ8wpKioGCXW18kxr35gMEAC1dfbAurDbNNbxUMV8fhrbqeWy4eaWLAah",
  "key8": "7ZwqTrziM2NsKXTNLbfrfhXw3Hat5UTSqpZWEeZkRZSxcvkmK9d74NTHT39t5yejp1goKYgHzQ78TbSUjn7vLWV",
  "key9": "jxVypKB4ZnaPcwV9f5H445emEtvpkE3bTBQiD7QSHhf5jtWGBYxY64uZc6q5cpXYssvm6dmPAucrm5WxYQ7hPfm",
  "key10": "2s1XhP4BPGUogRxAQshdbk3VYCePHQxetrkPWsW2eWUmCr8UEXhgUYCqpxi6X8jkLTWra1A7XMur92szLYh4x2Df",
  "key11": "21Sd9jouQLD88zxUiCUCTUsTraYLXeQFzjdTPyjv9MBUxsCEbjZo79QUB8Lq9XbKtxNMhkGWkUTRrtNidQ5sGBuB",
  "key12": "2s2iKVRV3Ti71s6xXtPmhJZVX7fSxFBeJgHcB5PCySMEA7b7QMzKLt3MfER8oaztMJna1EdYrQsy7ZyZqHvA4ntH",
  "key13": "3XMiB8udnyUdqq4WZf9C2dpcHLxn8aL55DYUUEQWttC9u23cY3d7gtYy61VNVReruw4gFouNma1eUmQvp6WAb2vh",
  "key14": "54LCkBJYbeYTdVfVQpYPtvgg7JqVdu7ctW62dJrQkFzZeZDeyHEPYCep8qzYYABV6F4kEmNjkXLhjP71cLgDNp2w",
  "key15": "3UfkFtSQoKE52fQBfUNY1dyoZTyiZUx7eu86xbKoCPHsQjeBWiGKyLzrNTzfgJA3mDSG8PfRqV86FtZz9iE1KkW",
  "key16": "4GUNG7VS67PNCzF3nHiZifWpL4Tghm4bL7xAvXdyowD4WQPQNauNcWr5B2TKPcu8iBoNsPkcMb3spCQnPE5YavCU",
  "key17": "9eRF7PXhiHqJFrDCTBA68sDfxnEso1RGPTuiFmaRF1qbfi2KF86wqiqy9b7bYuiEp5fKWHU7JDgPA2rvFsn2r3Q",
  "key18": "4xS2oFES3MYayzSNpuDuMAAKhU42biq6m9oEigxifDpZZ3rmniKZV7VJCiS7xivEJLAZfbyXzHTi6mazQuTcy1ko",
  "key19": "5HDzpjdjva5Cht2WqTiJgvb8bnJNyLPTgNzCdvQw55UZXasQKDdfjxHhRhjNuufBXdzAkKdvMfUW13YUMDYggLGm",
  "key20": "2iJCrYaekUUr7QKGjUKc9xNqRb6JuAYfLY1qQ8QAjmfy9153HTdqKfRj9Py1zFPFwjMHpiKVc38Hi1r7eHtzrEsP",
  "key21": "3zwzXMWyyCYL7qfcfvrHVU9oapQb5tRjEdKedjBthQ9roRUqHtUN2gxLgaMNCL8fswEpVK9Zih71KHUMbKoAPERi",
  "key22": "puZq4WiCvifmNyBvgydB352kfqjQwzE9mLkDryoBsU1aq9zXQnUYc9RLPKC6Efc1K1ZXX9Grd9bXmEqTiCnpE71",
  "key23": "22ofXJToEgeyZv4p8BfYgrVLN5gWbbvRrtSQUb5LZ4Hgn5rWFvQmYUzboE6LZ2Ewuxghhic4RYSoXaXWgwCJfiRM",
  "key24": "4ekGLGxVcBktbkGGqysUuCkG1CcQ6xoyjcdBUvxtHMLtPXQnye6y1zbQdinH8AzQKgAZRhsa8868N4wEGqEQXp1u",
  "key25": "4UkNby87Y4FRWfhupZ5qwL5Bio5LvTAhTuAg5webmchtFR2PhTLYBzxTNgiJMrnKo7xio56QXNFKiZzFLaMRFyEa",
  "key26": "44hREMyB1Q7P7CKFmLEmq4XLTMFx6AHwAGhvgHkFvBaFGFsEy4TeejJ7eJ6biJ9x6yZCb714pJzhfJEjCnLFnoL3",
  "key27": "4cm3KNFaY3M4Arrpt6hc6zuutPu6fAib1umi8h174n6Yu4UUFggPXfFGLJ8g2NhwGR7EcVdYggMCZvjjr2BEgPU1",
  "key28": "5zcozT7tk8WTCuHXaEtshAkCfaj3X64BbN2VAK3gL2uTMmZsGRTQzG6U6UJ6Pqm1geaR4rb9pBs2GZFPvdCrW725"
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
