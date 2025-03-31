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
    "4QfoknZiiC5uauUnaTxMSp3gtjkEnfkXupFHshGoAmdC8Cbi7hbyEpX5CdNmXdvSchgCYehwFeB64obD4Bj8u3pu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xggwX7yvTyr4bJQgGZQrr4YnitiFybJCdnUkxQdkTBSnyraz1NmRqcbzyGXpBoqSfaExyPiyjJs9ciA4k2R3UXp",
  "key1": "3mm66oN42eQmi2PFbYxu3WbwvjCYyuMBmYyozSDiyPQchQzZ9idb7TDTGsBCW7k9VC4NYzZq16Ju54Bcawbr1t3m",
  "key2": "4nnQAqK8dtUW6Xba4BzpzHF9SdargWvJqHM2rTDybtdoBj7q4mnTEhZwEdi2TMTLLKXneVuVnXCc339BiX2ubNzf",
  "key3": "5TYTcii6G9urLwKWamVy2o3eacc4VHigvucQCjuGn2FekSSuvQd2gsR7BzL8ij5hKyRzvcCUuKqKoFRewcg26H12",
  "key4": "41icXfMnFjHF76Jvm6SyuayHn6B6Xb8nWwufUFrAzW7fPMweJtHBxkjhYgZemFox6ZG7B8hsgrELpjzVQ1FPrZaP",
  "key5": "2fSkoW2bv4avo1qyYHK5eFGn3wLHgjK366NfYKnsAf3vajoeoEJRWttTeeeDtmdG6XnZCwSByQtj6WcX5gVn2WTM",
  "key6": "3Mhpbki5xxj1K2ni5ZkFN7STxUee3qTF2Hjf5xXaVmypYB8n7D7pue83rEX6PWBsA7UGuHLDCYGCsYTj7c9XC4yP",
  "key7": "34iZqpcNWUpjiDhH83GFHFkpnmiEx2pYukbmJR7YEezbbqNwyX5nauRcZuWN14JbWvRhjxqwQBoPHdnP4k2DPLUN",
  "key8": "3Em14GunTR7HNnbEB4BZqi9XQK9ERKzgdSN2DMTXau7CpiUug5MZwGpGsuRa7CtxfS1qATd9q65pYE6TEF9rbw2z",
  "key9": "399w41kp6ifsAuzJS3s84f9t638x5SFRJm63w5WSfm1ZPEzuQoJPTTXoU9F6xmv2L8z3nZnFGAAi3VQ6Z4FY9AGQ",
  "key10": "38uWi43U7FvxGAD41HwsaG1KeW6ZpkU3e5ptsjeeXLNBPfih6h65mjwiaJitGCJzfjYeCEUnbV62eMrgsfKjZRZv",
  "key11": "CRpjvYu7Sq92SUMRQKJEBsAUF1iKh5Bop3WGW2Htuz4JNAaFUQt6nahLmsw6K1X6pL9BKS8nauBARkXuAHwjcHQ",
  "key12": "3iczimN6Tc28w3LceR8GbM1SGcTWYKeUTPXaeDBkHG6dc2rx4JkfeJpjTBNd9HNkVkGxFxE12uFPTof1RYBf6qkr",
  "key13": "4NcSeXX5sFSjiYmaHW1gCZx3ATsxAbzMiNChMc9cC4HJ6rTvNfaLVfBvxdrpjR4gVuNkCmXA51NRTP53CPeHZo9e",
  "key14": "4c2wtJ5kkCcTrHoJFLKvRQEFHTATt667dEMcyEMmscCvvmG42gN6GAzV6QMAwTUh91Us8ySpXiiz9DUHLiZXNy4Z",
  "key15": "5mrbXtPy4rvPpUH3uArzNjpMJ3GhBPqBRjzpEqrXmKXmdxfmnfsVJRcUsJZTSgXba4SLxJ5LjnfUTCvyj39STk4D",
  "key16": "3S2uM4m6Fg25VfJyLxop35vcH4h2TRyVhF6HeTD8D15SFG2yAqUDPiCtYnQfR8SvbisThG7va5trNex1cmHiHf2N",
  "key17": "vjCdZEVcpivPspgo15Nv1j291RBcWNta1iqjdPf4oh4R5twjFYpVxFN4CzHdr3EJnvcyF6BVnEXccLxASKbpbuy",
  "key18": "3QPowZRWhFGvWjkw4DNH5i6G25skRzXuqTyrBwySFBHrur9eryxiNe1r7YYGdecwUFYRinGHRhaUwZKTxCFiDfKC",
  "key19": "524St9JRdBYEWXwBd5jsuUBjoj943thfUV7m5d2BqFtVcWV5ZDs73kSxJ7jTw3RxCEo8FYTQRcdT8Y4HcDNkwCf8",
  "key20": "5XwUqDPJ3aJTxZzSTp5KqfJkgtepjFp7vLVWYH7edgMiwcBf4epTD2GDszLZVAUzViFTdQeKkshDLjM6GwP2vpiv",
  "key21": "4xiJb3WavgLKng1j7hCjNJPXfrLAMNoFWvKCf2ikJuB7Ksr1Y86hRXb6RNHKdMfZrfGD5S2tU1xEA9p4wnqFH4Fu",
  "key22": "3G3A56enn3DrjM1kmPR89taNNHzhuB3GHg3B2Unb1zs4j9w5TSRxg1h7YKfKMgczH3eZNba4HEG4FMRM49Y1tX28",
  "key23": "2pESnS9jMFgrkdrk5kiGc2xXsTbTRZY3o9DPch8pxUtvdYL8yRp3hkzqsfu1J2dYC2u7ZzEaaz4TXAGGgxDuKk3H",
  "key24": "4CHkF5umvrj1oXhquhS7W5N3EtmFttm8EVjQVhWQ5a4y7uk1nufAyBVp2DM8fLQqiVYM3CKsgGkCxbBXPR3hFhM9",
  "key25": "F2yAFvQb4M6mYp1sFWvDMxdeJtg4n1FySyw6YzEWHMWGyBKVTYXxY71oJ9fAPMyvnFxVMTrrFkXDVcw1WBAFNdH",
  "key26": "L797wSK99tHg8EvdbexYoLtZJkuT7Nsr8fxuiA8kLqLN81yv6G69MrdswPTGLyRNaKRnK1pcGxYQWGzNUVecBX1",
  "key27": "WtSWDbdjNMBvoF4StaYzTWg7osRZ5fsyaBMFBF7VNvGuus9DmQVi4FA2T2z4s9zGvgUSrZVMtMpMWxwmjA1aAnU"
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
